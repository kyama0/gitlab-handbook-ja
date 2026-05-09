---
title: ASE 向けレポートとダッシュボード
description: ASE が利用できる各種標準レポートおよびダッシュボードの説明
upstream_path: /handbook/support/enhanced-support-offerings/offering-assigned-support-engineer/ase-workflows-and-standards/ase-reports/
upstream_sha: c1bf211b73eb496a1cb1e97c36f3e2aceeb892ba
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
---

## はじめに

## ASE アカウント向けレポートとダッシュボード

### Snowflake からチケットデータを取得する

ASE として、GitLab の [SnowFlake](/handbook/enterprise-data/platform/snowflake) インスタンスへ[アクセスをリクエスト](/handbook/security/corporate/systems/lumos/ar/)できます。レポート作成時や、担当顧客環境のドキュメントを最新に保つうえで非常に役立ちます。

各顧客向けにデータを生成するにはいくつかの手順が必要です。これらのメモは、すでに Snowflake と Zendesk への有効なアクセス権を保持していることを前提としています。

Zendesk API へのアクセスはないため、まずレポートに含めたいチケット ID のリストを手作業でスクレイピングする必要があります。

開始するには、Zendesk で対象顧客の組織ページに移動し、Chrome デベロッパーツールパネルを開いて、以下のいずれかのコードブロックを貼り付けてください。

#### 単一ページ

現在の Zendesk ページに表示されているチケット（つまり選択した顧客でフィルタリング済み。ただし、オープンチケットや特定のリクエスタのみに絞ることも可能。これらの情報の一部は Snowflake からは簡単には取得できない）のみを取得するには、以下のコードを使用します。

```javascript
copy(Array.from(document.querySelectorAll('[data-test-id="generic-table-cells-id"]'))
        .map(cell => cell.textContent.trim().replace('#', ''))
        .join(', '));
```

このページに表示されているチケット番号がカンマ区切りリストとしてコピーされます。

#### 顧客の全チケット

30 件を超えるチケットを取得する必要がある場合、特定顧客の全チケットを取得するためにこの JavaScript を使用できます。

```javascript
window.allTicketIds = [];

async function collectAllPages() {
  let pageCount = 0;

  while (true) {
    pageCount++;

    // Wait for content to load
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Collect current page
    const ids = Array.from(document.querySelectorAll('[data-test-id="generic-table-cells-id"]'))
.map(cell => cell.textContent.trim().replace('#', ''));

    if (ids.length === 0) {
console.log('Waiting longer for page to load...');
await new Promise(resolve => setTimeout(resolve, 2000));
continue;
    }

    window.allTicketIds.push(...ids);
    console.log(`Page ${pageCount}: Collected ${ids.length} IDs. Total: ${window.allTicketIds.length}`);

    // Find next button
    const nextButton = document.querySelector('button[aria-label="Next page"]');

    // Check if button is hidden (last page indicator)
    if (!nextButton || nextButton.disabled || nextButton.hasAttribute('hidden') ||
  nextButton.getAttribute('aria-disabled') === 'true') {
console.log('No more pages');
break;
    }

    nextButton.click();
  }

  console.log(`\n✓ Collected ${window.allTicketIds.length} ticket IDs total:`);
  console.log(window.allTicketIds.join(', '));
}

collectAllPages();
```

これによって、コンソールウィンドウに配列が出力されます。

#### Snowflake へのクエリ

これで Snowflake からチケットデータを取得する準備ができました。

[こちら](https://app.snowflake.com/ys68254/gitlab/w3cd6hFh6KvV#query)の Snowflake ワークシートを例として、先ほど取得したチケット ID を使用して集約データをクエリできます。

```sql
SELECT TICKET_ID,AI_INSPECTED_SUMMARY,AI_INSPECTED_FEATURES,AI_INSPECTED_PRODUCT_GROUP,AI_INSPECTED_CURRENT_VERSION FROM PROD.COMMON_PREP.PREP_ZENDESK_PROCESSED_TICKETS WHERE
TICKET_ID IN ( #TICKET_ARRAY_GOES_HERE ) ORDER BY TICKET_ID DESC;
```

なお、これは利用可能なフィールドの完全なリストではないこと、```CREATED_AT``` および ```SYNCED_AT``` フィールドはチケットの日付を反映していないこと、Snowflake は標準的な SQL クエリ形式を採用しているため、このクエリは容易に拡張できることに注意してください。

#### ユースケース

##### 詳細なインフラストラクチャと機能のレポート

Snowflake のデータと GitLab Duo を組み合わせて、顧客のアーキテクチャと利用機能に関するレポートのドラフトを作成できます。新規顧客のオンボーディング時に役立つでしょう。エクスポートしたチケットデータをコンテキストとして Duo に与え、次のプロンプトを使用してください。

```plaintext
I am an Assigned Support Engineer at GitLab, and I am onboarding a new customer. I want to use the data about customer tickets to build out a report of used features and their architecture.
The ticket summaries can be found here: Customers/FILE_WITH_DATA.csv 
If you run into contradictions, use the data from the ticket with highest ticket ID. If Gitaly Cluster is not mentioned anywhere, it is likely a Sharded Gitaly. Do not make assumptions about license based on features, make sure that license name is specified explicitly. Additionally, give me overview of what features they raise the most tickets about. Be concise. 

EXAMPLE REPORT:

Deployment Platform: On-prem, Fully air-gaped
GitLab Deploymnet: 3K reference architecture, Omnibus, not Cloud-Native, not Dedicated
Runners Deployment: Docker executor with Podman.
Container registry: no
Package registry: no
GitLab pages: n/a
GitLab Kubernetes Agent: n/a
License: Ultimate with Duo Enterprise
Which secure features are they using: This customer is not using compliance and secure features, like sast, dast scanners.
Security scanners they don't use: they don't use any of our security scanners at the moment
AI features: They are using Duo chat with custom models deployed on vllm. They use both Duo chat, code generation features and code review.
GEO used: Yes
Advanced search solution: Zoekt
Database solution: Highly Available database with Patroni, Consul and PgBouncer as per our 3K reference architecture
Gitaly deployment type: Gitaly cluster, with TLS enabled, Gitaly cluster deployed in GEO secondary as well
What integrations are they using: Jira integration
Are they using GitLab for Plan stage: no
How do they manage user access to GitLab: LDAP with LDAP group sync
Zero-downtime upgrade process implemented: yes, zero-downtime is important to them
```

### Zendesk 組織データダッシュボード

Zendesk の [Organization Performance ダッシュボード](https://gitlab.zendesk.com/explore/studio#/dashboards/47EB07BFD95FB76D1FB0F697673A6A6348E2804DC81A2A0608B09458AF9E4ABC)を活用して、顧客の関心に応じた月次/四半期レビュー会議用のレポートを準備できます。

## ASE 向けレポートとダッシュボード
