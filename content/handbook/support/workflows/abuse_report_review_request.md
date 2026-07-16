---
title: 不正使用レポートのレビューリクエスト
category: GitLab.com
subcategory: Security
description: 不正使用レポートのレビューをリクエストする方法
upstream_path: /handbook/support/workflows/abuse_report_review_request/
upstream_sha: "f469f09c3347a37927c75866af3d2611a5421062"
translated_at: "2026-07-16T07:04:40+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

このワークフローは、不正使用レポートのレビューをリクエストするためのものです。ブロックされたすべてのアカウントには、関連する Issue へのリンクが付いた admin note があるはずです。

## プロセス

1. アカウントが不正使用レポートのレビューをリクエストした場合、Trust and Safety の [Operations Issue Tracker](/handbook/security/security-operations/trustandsafety/) で `Abuse_Report_Review_Request` Issue を作成します
    - Zendesk の [(GitLab user lookup app](/handbook/eta/css/zendesk/apps/global#gitlab-super-app) は、ユーザーが自分のアカウントに関連付けられたメールアドレスを使ってサポートに連絡している場合、そのユーザーの admin note を表示します。代わりに -
    - ChatOps へのアクセスがある場合、chatops が有効化された任意の Slack チャンネルで以下のコマンドを使用してユーザーの admin note を読み取れます
        > `/chatops run user find <username or email>`
1. 不正使用レポートのレビューリクエストが不正使用行為に関連している場合、
    - リクエストに特定のコミット、監査イベント、ユーザーアクションなどへのリンクが含まれていない場合、[Need_More_Information](https://gitlab.com/gitlab-com/gl-security/security-operations/trust-and-safety/operations/-/tree/master/Blurbs/Need_More_Information) ブラブを使用して追加情報をリクエストします。
    - ユーザーが十分な情報を提供している場合、指示に従って `Abuse_Report_Review_Request` を完了します。
1. Zendesk、Twitter、Slack を含む不正使用レポートが存在しない他のすべてのケースでは - Security Operations Tracker で [General_Request](https://gitlab.com/gitlab-com/gl-security/security-operations/trust-and-safety/operations/-/issues) Issue を完成させます。チームメンバーが 24 時間以内にリクエストをレビューします。リクエストが緊急の場合は、#abuse Slack チャンネルでお問い合わせください。
1. ユーザーへの初期返信として [`Support::SaaS::Gitlab.com::Blocked Accounts::Escalated-TrustAndSafety`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Blocked%20Accounts/Escalated-TrustAndSafety.md?ref_type=heads) マクロを送信します。

## 注意点

1. チームから提供されるすべての情報は `confidential` とみなされ、リクエストされない限り共有してはいけません。
   - 共有したい情報について不確かな場合は、チームメンバーがアウトバウンドのブラブをピアレビューできるよう Issue でフォローアップしてください。
1. 提供できる情報は、Legal や組織内の他のメンバーによる追加レビューの対象となる場合があり、リクエストの結果が遅れる可能性があります。
   - これらのリクエストには定められた SLA はありませんが、チームはできるだけ早く処理することに専念しています。
   - 更新については Issue や #abuse Slack チャンネルで遠慮なくフォローアップしてください。

### 不正使用レポートのレビューリクエストが提出できる場合

1. 情報をリクエストしているグループ／プロジェクトに所属していることが検証されている場合。
   - 場合によっては、正当な不正使用行為を報告した非プロジェクトメンバーに限定的な情報を提供できることがあります。
   - 報告された行為／コンテンツに関するコンテンツや情報がまだ GitLab.com で利用可能である場合。

### 不正使用レポートのレビューリクエストが **提出できない** 場合

1. リクエストするアカウントがブロックされている場合。
   - アカウントオーナーが情報取得のためにアカウントへのアクセスをリクエストしている場合は、代わりに [Reinstating Blocked Accounts](/handbook/support/workflows/reinstating-blocked-accounts) ワークフローに従ってください。
1. ネームスペースまたは商標の紛争 - [ワークフロー](/handbook/support/workflows/information-request#namespace-and-trademark-claims)
1. 所有権紛争ポリシー - [ワークフロー](/handbook/support/workflows/information-request#ownership-disputes )
1. すでに報告されたアカウントからの継続的な不正使用、つまり: 個人がブロックを回避したり検出を逃れるために複数のアカウントを作成している場合。
   - 詳細な不正使用レポートは <abuse@gitlab.com> に送信できます。常駐メールボックスから送信する必要があります。
