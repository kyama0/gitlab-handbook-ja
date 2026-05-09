---
title: Security との協働
category: GitLab.com
subcategory: Security
description: 各種セキュリティ関連チケットと、Security チームへの通知のためのエスカレーションプロセスを文書化しています。
upstream_path: /handbook/support/workflows/working_with_security/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T05:00:00Z"
translator: claude
stale: false
---

## 概要

以前、GitLab はセキュリティ関連の懸念を報告および問い合わせるためにメールアドレス <security@gitlab.com> を使用していました。しかし、GitLab とセキュリティ部門が成長・拡大するにつれて、その単一のキューを使って顧客が期待する高水準のサービスを提供することが難しくなりました。`security@gitlab.com` に連絡したユーザーは、各種セキュリティ上の懸念を報告するための具体的な指示を含む自動返信を受け取るようになりました。自動応答が質問に答えられない場合、またはセキュリティ関連のチケットがサポートに送信された場合は、マクロ [`Security::All Security Questions`](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/blob/master/macros/active/Security/All%20Security%20Questions.yaml) を使用して、ユーザーに詳細な指示を提供できます。

## ワークフロー

以下については、security に転送 *せず*、関連するワークフローを参照してください:

- [ブロックされたアカウントの復元](/handbook/support/workflows/reinstating-blocked-accounts)
- [Abuse Report Review Request](/handbook/support/workflows/Abuse_Report_Review_Request)
- [ログ要求](/handbook/support/workflows/log_requests)
- [新しいセキュリティインシデントの報告](/handbook/security/security-operations/sirt/engaging-security-on-call)

[`Security::All Security Questions`](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/blob/master/macros/active/Security/All%20Security%20Questions.yaml) マクロを使用して、文言の詳細をさらに確認することもできます。上記のワークフローおよびマクロで顧客の懸念が解決されない場合は、[#sec-fieldsecurity](https://gitlab.slack.com/archives/CV5A53V70) Slack チャンネルにチケットへのリンクを投稿してください。

### トリアージワークフロー

脆弱性の開示は、もはや ZenDesk 経由でトリアージされません。判断に迷う場合は、Application Security チームを関与させてください。

- レポートが Informative であるか、または ~"type::feature" の場合、申請者に自分で Issue を起票するよう依頼できます。「General -> Ask to create an issue」マクロから始めることができます。
- レポートが有効なセキュリティ Issue のように見える場合、または判断に迷う場合:
  - Severity が ~severity::1 である可能性がある、またはその他の理由で即時調査が必要な場合:
    - [Security Engineer のオンコールを巻き込みます](/handbook/security/security-operations/sirt/engaging-security-on-call/)
    - [セキュリティ Issue 作成手順](/handbook/security/security-operations/sirt/engaging-security-on-call/)に従って、レポートに対して手動で Issue を作成します
  - それ以外の場合は、報告者に返信して以下のいずれかを希望するかを確認します:
    - HackerOne 経由での報告
    - [セキュリティ Issue 作成手順](/handbook/security/security-operations/sirt/engaging-security-on-call/)に従って、自分で confidential Issue を作成
    - チームメンバーに Issue を作成してもらい、承認の希望を返信してもらう。
    - レポートのタイムリーな処理を確実にするため、3 営業日以内に応答がない場合は、GitLab チームメンバーが Issue を作成することを報告者に知らせてください。

### セキュリティ更新またはパッチに関する情報リクエスト

時には顧客がリリースされたセキュリティ更新の詳細を要求することがあります。たとえば、「これを心配すべきですか？このパッチは何についてですか？」など。

特定バージョンの GitLab CVE のサマリーは、[Customer Success の "What's New Since" ツール](https://gitlab-com.gitlab.io/cs-tools/gitlab-cs-tools/what-is-new-since/?tab=cves)で利用できます。

顧客がリリースの一部として公開されたセキュリティ脆弱性について尋ねている場合、提供できる情報はセキュリティブログ投稿に記載されているもののみです。
セキュリティコミュニケーションの詳細については、[セキュリティインシデントコミュニケーションページ](/handbook/security/security-operations/sirt/security-incident-communication-plan)を参照してください。

Security は、設定された日数の経過後、[可能であれば Issue を公開します](/handbook/security/#process-for-disclosing-security-issues)。

ブログ投稿、または特定の顧客に対してより多くの情報を提供すべきだと考える場合は、[security communication tracker で confidential Issue を起票してください](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/issues)。

注: 確認された緩和戦略は通常、セキュリティブログ投稿に追加されます。
記載されていない場合、Issue が修正されているバージョンへのアップグレードのみが推奨されます。
（機能の無効化など）一部の提案は Issue を緩和するように見えるかもしれませんが、セキュリティチームの検証なしには完全な確実性は持てません。

[Responsible Disclosure Policy](https://about.gitlab.com/security/disclosure/) に従い、セキュリティ Issue の報告については以下を参照してください。

## セキュリティスタッフ向けの一般的なガイドライン

1. セキュリティチームのすべてのメンバーは、オンボーディングの一環として [Light Agent リクエストプロセス](/handbook/support/internal-support/#viewing-support-tickets)を行い、これらのアカウントを使用して内部コメントを行うべきです。チケットへの返信やステータス変更が必要な場合は、1Password の共有アカウントを使用してください。
1. 関連する ZenDesk、HackerOne、GitLab Issue は、適切で利用可能な場合に内部コメントで常に相互リンクします。GitLab Issue 内の ZenDesk リンクは "GitLab internal only" として注記する必要があります: `Reported via ZenDesk (GitLab internal only): https://gitlab.zendesk.com/.../xxxxx`
1. メールで直接応答する場合、Light Agent アカウントから ZenDesk への返信メールは内部ノートとしてのみ処理され、申請者には送信されないため、申請者のメールアドレスを宛先に含める必要があります。
1. 直接メールを送信する場合、チケットを "Solved" または "Pending" に設定する責任、または設定権限のある人を見つける責任があります。

### 顧客がすでに Issue を作成している場合

顧客がすでに脆弱性に関する Issue を起票している場合:

1. Issue を `confidential` としてマークします

1. `security`、`customer`、および `bug` または `feature proposal` ラベルを追加します

1. [Severity と Priority ラベル](/handbook/security/engaging-with-security/#severity-and-priority-labels-on-security-issues)を割り当てます

### 顧客がまだ Issue を作成していない場合

[新しいセキュリティ Issue の作成](/handbook/security/security-operations/sirt/engaging-security-on-call/)を参照してください。
