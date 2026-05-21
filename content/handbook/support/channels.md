---
title: サポートチャンネル
description: "GitLab サポートのコミュニケーションチャンネル"
upstream_path: /handbook/support/channels/
upstream_sha: c5d40e13183c5a0aeeafefbee88ab3fac48ced5a
translated_at: "2026-05-08T17:40:50Z"
translator: claude
stale: false
lastmod: "2026-03-04T12:15:15-08:00"
---

私たちの [サポートエンジニア](/job-description-library/engineering/support-engineer) は、以下に挙げるチャンネルを担当しています。優先順位順 (最も厳しい SLA が上) に並んでおり、その結果、このリストの下のほうに表示されるチャンネルでは応答までの遅延が長くなる可能性があります。私たちは、チームを強化しコミュニティへのサポートを提供するため、さらに多くのサポートエンジニアを積極的に [採用](https://about.gitlab.com/jobs/) しています。

## 緊急チケット

緊急チケットが届くと、[PagerDuty](https://gitlab.pagerduty.com) のインシデントが発動します。サポートエンジニアは、オンコールローテーション スケジュールに追加された時点で、PagerDuty アプリケーションを電話にインストールしておく必要があります。

PD インシデントが発動すると、オンコール担当者にアラームが鳴ります。インシデントは 5 分以内に確認 (acknowledge) する必要があり、そうしないと第 2 レベルのサポート担当者にアラートが送られます。PD インシデントには、対応する Zendesk チケットへのリンクがあり、そこから顧客との会話を続けます。

確認後は、[Zendesk](https://gitlab.Zendesk.com) にログインし、対応するチケットに移動して、顧客に対しケースを担当することを伝え、Zoom ミーティングのリンクを送ります。顧客が Zoom にアクセスできない場合は、電話、Skype、WebEx、Hangouts を使う必要があるかもしれません。緊急チケットの完全な手順は [こちら](/handbook/support/on-call/#pagerduty-alerts) にあります。

緊急事態が解決したら、[Zendesk](https://gitlab.Zendesk.com) のチケットに戻り、問題を解決するために行った手順を文書化します。

### 危機的状況

顧客を支援できず、顧客のインスタンスが重大な状態 (利用不能、データ損失の不確実性など) にある場合、PD インシデントを第 2 レベルのサポートに **エスカレーション** し、一緒に問題に対処すべきです。適切な Slack チャンネルで開発者の支援を求める必要があるかもしれません。支援が来るのを待っている間は、サーバーを使用可能な状態に戻すことに集中してください。

緊急事態の解決に 1 時間以上かかる、かつ／または複数人が関与する／関与する必要がある場合は、**Google Docs を開始** し、顧客と GitLab の広いチームに公開して、問題やアイデアをそこで追跡してください。Zendesk の顧客とのコミュニケーションの「線形」表示は、危機的状況ではあまり効果的ではなく、また大半の開発者はそもそも Zendesk へのアクセス権を持っていません。Google Docs を適切な Slack チャンネル (`#production`、`#development`、`#whats-happening-at-gitlab`) でアナウンスし、各人が解決策やアイデアを提供できるようにしてください。危機が解決したら、Google Docs から関連するドキュメント、ハンドブック、Issue トラッカーに重要なノウハウを移し、Google Docs をできるだけ早く廃止できるようにしてください。さらに、危機に関与したサポートエンジニアと開発者は、ハンドオフのための Hangout の時間を取り、全員が回復し冷静さを保てるようにすべきです。

## セキュリティ開示

私たちには [責任ある開示ポリシー](https://about.gitlab.com/security/disclosure/) があります。`security@gitlab.com` に連絡したユーザーには、さまざまなタイプのセキュリティ懸念を報告するための具体的な指示を提供する自動返信が届き、チケットは自動的にクローズされます。詳細は以下の [HackerOne の情報](/handbook/support/channels#hackerone) にあります。

オープンなセキュリティチケットの特定と取り扱いの情報については、[セキュリティと協力する](/handbook/support/workflows/working_with_security) を参照してください。

判断に迷う場合は、セキュリティチームを巻き込んでください。これは 0-day 開示の可能性を減らすために非常に重要です。

ZenDesk チケットから作成された Issue は、[セキュリティ Issue トリアージ](https://gitlab.com/gitlab-com/gl-infra/readiness/-/tree/master/library/security-releases-development) プロセスに従う必要があります。

PGP 暗号化されたレポートは、[セキュリティチーム](/handbook/security/#external-contact-information) によって取り扱われます。

### HackerOne

私たちは [HackerOne](https://hackerone.com/gitlab) を使ってセキュリティレポートを管理しています。HackerOne プログラムはセキュリティチームが管理しています。HackerOne レポートを処理するための完全なワークフローは、[セキュリティチームのページ](/handbook/security/#hackerone-reports) にあります。

チームメンバーが HackerOne へのアクセスを必要とする場合は、[アクセスリクエスト](https://gitlab.com/gitlab-com/Team-member-epics/access-requests/-/issues/new?issuable_template=New_Access_Request) を作成してください。

## 有償プランのお客様向けサポートチケット

お客様は、サポートポータルからサポートチケットを送信できます。サポートチームは、これらを管理するために [Zendesk チケットのワークフロー](/handbook/support/workflows/#handling-tickets) に従います。

チケットは、gitlab.com または セルフマネージドの有償プラン契約者から送信できます。

## 無償プランのお客様向けサポート

無償プラン (.com の「Free」とセルフマネージドの「core」) のお客様向けには、[GitLab フォーラム](https://forum.gitlab.com) があります。サポートチームは現時点ではフォーラムを担当していません。Developer Relations チームが、より広いコミュニティと協力し、ベストエフォートで質問に回答することを目指しています。

## GitLab の Issue トラッカー

GitLab.com またはセルフマネージドのインストールにおける Issue (バグ、リグレッションなど) が確認された場合、メインの [GitLab プロジェクト Issue トラッカー](https://gitlab.com/gitlab-org/gitlab/issues) で報告されます。サポートチームのメンバーとして、ほとんどの Issue はここで報告されますが、特定の機能や製品に応じて以下のいずれかの場所で Issue を報告することもあります:

- [GitLab Runner Issue トラッカー](https://gitlab.com/gitlab-org/gitlab-runner/-/issues): GitLab Runner 固有の Issue 用。
- [GitLab Charts Issue トラッカー](https://gitlab.com/gitlab-org/charts/gitlab/-/issues): GitLab Helm Charts 固有の Issue 用。
- [GitLab Omnibus Issue トラッカー](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues): GitLab Omnibus 固有の Issue 用。
- [GitLab Documentation Issue トラッカー](https://gitlab.com/gitlab-org/gitlab-docs/-/issues): ドキュメントサイトに関連する Issue 用。

## チャンネル外の業務

サポートチームは、GitLab の改善のためにも働いています。ドキュメントを書き、バグを修正し、機能を追加し、ウェブサイトを磨き上げます。
