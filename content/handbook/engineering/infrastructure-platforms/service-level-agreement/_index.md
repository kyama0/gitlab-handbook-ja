---
title: "GitLab SaaS サービスの可用性測定"
description: "このポリシーは、GitLab.com、GitLab Dedicated、および GitLab Dedicated for Government の可用性の測定方法を規定します"
controlled_document: true
upstream_path: "/handbook/engineering/infrastructure-platforms/service-level-agreement/"
upstream_sha: "52419353ea755a1ac823553385f8636ff2fcde17"
translated_at: "2026-11-01T06:01:13+00:00"
translator: claude
stale: false
lastmod: "2026-10-29T14:12:37-04:00"
---

## GitLab サービスレベルアグリーメント - 可用性の定義 {#gitlab-service-level-agreement---availability-definition}

以下のサービスレベルアグリーメントは、2026 年 1 月 1 日以降に購入または更新された Ultimate ティアの SaaS ソフトウェアに適用されます。

### サービス可用性コミットメント {#service-availability-commitment}

GitLab は、各暦月において[対象エクスペリエンス](#covered-experiences)を月間稼働率少なくとも **99.9%** で利用可能にすることをコミットします。

### 対象エクスペリエンス {#covered-experiences}

以下の GitLab の機能とサービスは、この SLA（「対象エクスペリエンス」）の対象となります。

1. Issue とマージリクエスト
1. Git 操作（HTTPS および SSH 経由でのプッシュ、プル、クローン）
1. コンテナレジストリ操作
1. パッケージレジストリ操作
1. API リクエスト（上記の対象エクスペリエンスのみに限定）

### ダウンタイム分の定義 {#downtime-minute-definition}

**「ダウンタイム分」** は、以下の場合に発生します。

サービスが可用性の低下を経験しており、特定の 1 分間における[対象エクスペリエンス](#covered-experiences)への[有効な顧客リクエスト](#valid-request-definition)の **5% 以上**が、GitLab の内部および外部モニタリングシステムによって決定されるサーバーエラー（HTTP `5xx` ステータスコードまたは 30 秒を超える接続タイムアウトとして定義）になる場合。

ダウンタイム分には、このドキュメントで定義される[除外分](#excluded-minutes)は含まれません。

### 有効リクエストの定義 {#valid-request-definition}

**「有効リクエスト」** とは、以下のすべての条件を満たすリクエストを意味します。

1. **適切に認証および認可されている** - リクエストに有効な認証資格情報が含まれており、ユーザーがリクエストされた操作に対して適切な権限を持っている

1. **正しく形成されている** - リクエストが：
   1. 文書化された API エンドポイント、パラメーター、およびメソッドを使用している
   1. GitLab が公開している API 仕様とドキュメントに従っている
   1. 構文的に正しい Git コマンドを含む（Git 操作の場合）
   1. 必要なヘッダーと適切に書式化されたリクエストボディを含む

1. **使用制限内である** - リクエストが：
   1. 文書化されたレート制限を超えていない
   1. サイズ制限を超えていない（ファイルサイズ、リポジトリサイズ、ペイロードサイズなど）
   1. ブロックされていない IP アドレスまたはユーザーから発信されている
   1. フェアユースポリシーに従っている

1. **悪意がない** - リクエストが：
   1. セキュリティの脆弱性を悪用しようとしていない
   1. 悪意のあるコードやペイロードを含んでいない
   1. DDoS やその他の攻撃パターンの一部ではない
   1. アクセス制御を回避しようとしていない

1. **サポートされている操作** - リクエストが：
   1. 顧客のサブスクリプションティアに含まれる機能をターゲットにしている
   1. 一般提供（GA）機能を使用している（実験的/ベータ版ではない）

以下は有効リクエストから除外されます。

1. クライアント側の問題によって HTTP `4xx` エラーを受け取るリクエスト
1. 廃止日以降に廃止された API エンドポイントへのリクエスト
1. GitLab が運営していない自動テストまたはモニタリングツールからのリクエスト
1. プリフライト/OPTIONS リクエスト
1. ヘルスチェックまたはステータスエンドポイントリクエスト

### 除外分 {#excluded-minutes}

以下の分はダウンタイム分としてカウントされません。

1. スケジュールされたメンテナンスウィンドウ
1. 重大なセキュリティまたはデータ整合性の問題に対処するために必要な緊急メンテナンス
1. 不可抗力事象または一般的なインターネット接続の問題
1. 利用規約に違反した顧客のサービス使用によって引き起こされる問題
1. GitLab が提供または管理していない機器、ソフトウェア、またはサービスによって引き起こされる問題
1. アルファ、ベータ、またはプレビューとして明示的にラベル付けされた機能またはサービス

### 月間稼働率の計算 {#calculating-monthly-uptime-percentage}

**「月間稼働率」** は以下のように計算されます。

```math
\text{Monthly Uptime Percentage} = \frac{\text{Total Minutes in Month} - \text{Downtime Minutes}}{\text{Total Minutes in Month}} \times 100
```

ここで：

- **「月の総分数」** = 暦月の総分数
- **「ダウンタイム分」** = 暦月においてダウンタイム分の定義を満たした対象エクスペリエンスの総分数（除外分を除く）

### サービスクレジット {#service-credits}

月間稼働率が 99.9% を下回った場合、GitLab Ultimate ティアの顧客は以下に従ってサービスクレジットを（以下で定義する方法で）リクエストできます。

| 月間稼働率 | サービスクレジット |
| ---- | ---- |
| 99.5% - <99.9% | 月額料金の 5% |
| < 99.5% | 月額料金の 10% |

### クレジットリクエストプロセス {#credit-request-process}

サービスクレジットを受け取るには、対象の顧客は次のことを行う必要があります。

- 影響を受けた月の終わりから 30 日以内に [support.gitlab.com](https://support.gitlab.com)でサポートリクエストを送信する。
- SaaS サービスが利用できなかった時期に関するすべての関連情報を含める。
- 対象エクスペリエンスへのアクセス試みについての合理的な詳細を提供する。

受領後、GitLab は独自の内部モニタリングデータに対してクレームを検証し、検証された場合、顧客の次回発行の請求書に対してサービスクレジットを発行します。発行されたサービスクレジットは、いかなる場合においても顧客への料金の返金にはなりません。

### クレジット適格性 {#credit-eligibility}

ダウンタイムによるクレジットの適格性を確認するには、[support.GitLab.com](https://support.gitlab.com)からリクエストを送信してください。

## GitLab Dedicated 向けホストランナーのサービスレベルアグリーメント - 可用性の定義 {#hosted-runners-for-gitlab-dedicated-service-level-agreement---availability-definition}

このサービスレベルアグリーメントは、GitLab Dedicated 向けホストランナーを使用する対象顧客にのみ適用されます。
GitLab.com 上の GitLab ホストランナーまたは GitLab Dedicated for Government には適用されません。

このサービスレベルアグリーメントは、顧客の GitLab Dedicated インスタンスに対するサービスレベルアグリーメントとは別のものです。
GitLab Dedicated 向けホストランナーのダウンタイムは、GitLab Dedicated インスタンスのダウンタイムとしてカウントされません。

### ホストランナーのサービス可用性コミットメント {#service-availability-commitment-for-hosted-runners}

GitLab は、各暦月において GitLab Dedicated 向けホストランナーを月間稼働率少なくとも
**99.9%** で利用可能にすることをコミットします。
月間稼働率は、GitLab Dedicated テナントごとに個別に計算され、そのテナントにデプロイされた GitLab Dedicated 向け
ホストランナーのすべてのスタックを含みます。

### ホストランナーのダウンタイム分の定義 {#downtime-minute-definition-for-hosted-runners}

**「ダウンタイム分」** は、GitLab Dedicated 向けホストランナーの可用性が低下している場合に発生します。つまり、その
1 分間に保留状態になった[有効なジョブ](#valid-job-definition-for-hosted-runners)の **5% 以上**が、5 分以内に GitLab Dedicated
向けホストランナーで実行中の状態にならない場合です。

スタックが文書化された
[ランナースタックの同時実行数上限](https://docs.gitlab.com/administration/dedicated/hosted_runners/#plan-runner-stack-concurrency)に達している、または超えている場合、そのランナースタックのジョブは SLA 計算から除外されます。

ダウンタイム分には、このドキュメントで定義する[除外分](#excluded-minutes-for-hosted-runners)は含まれません。

### ホストランナーの有効なジョブの定義 {#valid-job-definition-for-hosted-runners}

**「有効なジョブ」** とは、以下のすべての条件を満たす CI/CD ジョブを意味します。

1. ジョブが GitLab Dedicated テナント内の認可されたユーザーまたはプロセスによって送信されている。
1. サポートされるランナータグと実行能力の一致を含め、ジョブがテナント向けにデプロイされた GitLab Dedicated 向けホストランナーの少なくとも 1 つのスタックで実行可能である。
1. ジョブが文書化された使用制限に従っている。
1. GitLab Dedicated テナントに、ジョブに十分なコンピューティング時間が割り当てられている。
1. ジョブが、一般提供されている GitLab Dedicated 向けホストランナーの機能を使用している。
1. ジョブが悪意のあるものではなく、アクセス制御の回避やセキュリティ脆弱性の悪用を試みていない。

### ホストランナーの除外分 {#excluded-minutes-for-hosted-runners}

以下の分は、ダウンタイム分としてカウントされません。

1. GitLab Dedicated 向けホストランナーに影響する予定されたメンテナンスウィンドウ。
1. 重大なセキュリティまたはデータ整合性の問題に対処するために必要な緊急メンテナンス。
1. 不可抗力事象または一般的なインターネット接続の問題。
1. 利用規約に違反した顧客の GitLab Dedicated 向けホストランナーの使用によって引き起こされる問題。
1. GitLab が提供または管理していない機器、ソフトウェア、サービス、または構成によって引き起こされる問題。
1. Alpha、Beta、または Preview として明示的にラベル付けされた機能またはサービス。

### ホストランナーの月間稼働率の計算 {#calculating-monthly-uptime-percentage-for-hosted-runners}

**「月間稼働率」** は以下のように計算されます。

```math
\text{Monthly Uptime Percentage} = \frac{\text{Total Minutes in Month} - \text{Downtime Minutes}}{\text{Total Minutes in Month}} \times 100
```

ここで:

1. **「月の総分数」** = 暦月の総分数。
1. **「ダウンタイム分」** = 除外分を除き、GitLab Dedicated 向けホストランナーがダウンタイム分の定義を満たした暦月の総分数。

### ホストランナーのサービスクレジット {#service-credits-for-hosted-runners}

月間稼働率が 99.9% を下回った場合、対象顧客は以下に従ってサービスクレジットをリクエストできます。

| 月間稼働率 | サービスクレジット |
| --- | --- |
| 99.5% - <99.9% | GitLab Dedicated 向けホストランナーに対する月額コミットメントの 5% |
| <99.5% | GitLab Dedicated 向けホストランナーに対する月額コミットメントの 10% |

### ホストランナーのクレジットリクエストプロセス {#credit-request-process-for-hosted-runners}

サービスクレジットを受け取るには、対象顧客は次のことを行う必要があります。

1. 影響を受けた月の終了後 30 日以内に [support.gitlab.com](https://support.gitlab.com)でサポートリクエストを送信する。
1. GitLab Dedicated 向けホストランナーが利用できなかった時期に関するすべての関連情報を含める。
1. GitLab Dedicated 向けホストランナーの使用試行について合理的な詳細を提供する。

受領後、GitLab は内部モニタリングデータに対してクレームを検証し、検証された場合、顧客の次回発行の請求書に対してサービスクレジットを発行します。
発行されたサービスクレジットは、いかなる場合においても顧客への料金の返金にはなりません。

### ホストランナーのクレジット適格性 {#credit-eligibility-for-hosted-runners}

ダウンタイムによるクレジットの適格性を確認するには、[support.gitlab.com](https://support.gitlab.com)からリクエストを送信してください。

## GitLab Orbit サービスレベルアグリーメント - 可用性の定義 {#gitlab-orbit-service-level-agreement---availability-definition}

このサービスレベルアグリーメントは、[GitLab サービスレベルアグリーメント](#gitlab-service-level-agreement---availability-definition)と同じ顧客を対象に、
GitLab.com および GitLab Dedicated の GitLab Orbit に適用されます。
可用性は個別に計算され、GitLab Orbit のダウンタイムは[対象エクスペリエンス](#covered-experiences)のダウンタイムとしてカウントされません。

GitLab Orbit は一般提供（GA）されています。

### GitLab Orbit のサービス可用性コミットメント {#service-availability-commitment-for-gitlab-orbit}

GitLab は、各暦月において GitLab Orbit のクエリを月間稼働率少なくとも **99.9%**
で利用可能にすることをコミットします。
これは、[GitLab Orbit API](https://docs.gitlab.com/api/orbit/)および
[GitLab Orbit MCP エンドポイント](https://docs.gitlab.com/orbit/agents/mcp/)を介したクエリを対象とします。

### GitLab Orbit のダウンタイム分の定義 {#downtime-minute-definition-for-gitlab-orbit}

**「ダウンタイム分」** は、ある 1 分間の[有効なクエリ](#valid-query-definition-for-gitlab-orbit)の **5% 以上**が、
GitLab の内部および外部モニタリングシステムによって判断されるサーバーエラー（HTTP `5xx` ステータスコードとして定義）になる場合に発生します。

ダウンタイム分には、[除外分](#excluded-minutes)は含まれません。

### GitLab Orbit の有効なクエリの定義 {#valid-query-definition-for-gitlab-orbit}

**「有効なクエリ」** とは、以下のすべての条件を満たす GitLab Orbit のクエリです。

1. [有効リクエスト](#valid-request-definition)の条件を満たしている。
1. GitLab Orbit が有効になっているトップレベルグループにアクセスできるユーザーから送信されている。
1. 文書化された GitLab Orbit の[レート制限](https://docs.gitlab.com/orbit/queries/#rate-limits)
   および[クエリ制限](https://docs.gitlab.com/orbit/queries/query-language/#limits)の範囲内であり、
   クエリの制限時間である 30 秒も超えていない。

GitLab Orbit に利用できる GitLab Credits がないために失敗したクエリは、有効なクエリではありません。

### GitLab Orbit の除外事項、計算、サービスクレジット {#exclusions-calculation-and-service-credits-for-gitlab-orbit}

[除外分](#excluded-minutes)、[月間稼働率](#calculating-monthly-uptime-percentage)、
[サービスクレジット](#service-credits)、および[クレジットリクエストプロセス](#credit-request-process)は、
GitLab サービスレベルアグリーメントと同じです。
サービスクレジットは、GitLab Orbit の月額料金に基づいて計算されます。
