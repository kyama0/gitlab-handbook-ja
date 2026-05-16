---
title: サポートエンジニアとしてのデータの取り扱い
description: サポートにおけるデータ取り扱いのベストプラクティスのガイド
category: References
upstream_path: /handbook/support/workflows/data_handling/
upstream_sha: 0353e616a41b1d1664a95cc83c80b01f990a912f
translated_at: "2026-05-08T20:30:00Z"
translator: claude
stale: false
lastmod: "2025-10-03T14:17:43-06:00"
---

### 概要

顧客と直接やり取りすることで、平均的なサポートエンジニアは私たちのビジネスが扱う中で最も機密性の高いデータの一部を扱うことになります。適切なデータ取り扱いは、顧客の信頼を維持するためだけでなく、法的・規制上の義務を満たすためにも重要です。このワークフローでは、サポートチームメンバーが安全かつ効率的なデータ取り扱いを確保するためのベストプラクティスを概説します。

#### データ分類標準

[データ分類標準](/handbook/security/policies_and_standards/data-classification-standard/) は、サポートの日常業務において最も重要なフレームワークです。同僚と協力する際に、どのデータがどのシステムで許可されているかを知ることは不可欠です。

データ _と_ システムの両方にデータ分類があります。_データ_ に分類標準がある場合、それはそのデータの開示の影響を表します。システムにデータ分類標準が関連付けられている場合、それはそのシステムで許可されるデータの分類を表します。

Tech Stack 内のシステムは、[データ分類標準](/handbook/security/policies_and_standards/data-classification-standard/) に従って関連付けられたレベルのデータを処理することが認可されています。許可されていないシステムで機密データを保存または処理することは、顧客のセキュリティとプライバシーにリスクを及ぼし、法的・規制上の結果を招く可能性があります。たとえば、契約違反や、私たちの GDPR や SOX 義務を満たさないことなどです。

参考:

- [データ分類の例](https://internal.gitlab.com/handbook/security/data_classification/) (GitLab 社内ハンドブック - チームメンバーのみ)
- [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)
- [GitLab データサブプロセッサー](https://about.gitlab.com/privacy/subprocessors/)

### サポートチームメンバーにとっての意味

標準そのものに精通していることが重要ですが、サポートに関しては一般的に:

- 自分が扱っているデータのデータ分類標準を認識してください
- 決して、より低い分類のシステムにデータを移動しないでください
- 公開で作業するときは、機密性レベルと [SAFE フレームワーク](/handbook/legal/safe-framework/) について考えてください。たとえば、GitLab.com は RED データに対してクリアされている場合がありますが、それでも公開プロジェクトに投稿したり、Issue が公開であることを忘れたりすることでそのデータを露出させてしまう可能性があります

#### 例

以下は例にすぎません。システム分類の唯一の信頼できる情報源は [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) です。

##### Slack (ORANGE)

緊急チケットの作業中、Zendesk (RED) のチケットから関連するログ (RED の可能性) やスクリーンショット (RED の可能性) のようなトラブルシューティングデータをそのままトラブルシューティング用 Slack (ORANGE) スレッドにコピーしたい誘惑に駆られるかもしれません。
これは、RED データが ORANGE システムで許可されていないため、不適切となります。

代わりに、トラブルシューティングデータを次の方法で共有することを検討してください:

- 関連するログのスニペットをチケットの内部ノートに入れる
- GitLab Issue を通じて情報を共有する (たとえば [Fieldnote Issue](/handbook/support/workflows/fieldnote_issues/))

Slack で RED データが共有されているのを見かけたら、投稿したチームメンバーに削除するよう依頼してください。

##### GitLab.com (RED)

Issue の議論中、顧客名を列挙する関連するスクリーンショット例や、彼らを特定する顧客からの直接の引用がある場合があります。これらは ORANGE データの例であり、GitLab.com は RED 用にクリアされています。

しかし、_公開_ Issue に ORANGE データを投稿することは、そのデータの機密性レベルに反するので、不適切となります。

代わりに、データを次の方法で共有することを検討してください:

- Issue を機密にする
- 機密コメントを作成する

社内専用データが公開で共有されているのを見かけたら、次のことができます:

- コメントを編集してデータを削除する
- Issue を機密に切り替える
- 投稿したチームメンバーに、データ分類と機密性レベルについて思い出させる

##### システム間の連携を構築する

生産性向上のため、否定的な顧客コメントを取得して Slack に投稿する Slack ワークフローの作成を検討しているとします。

これを行うために、GitLab CI (RED) を使用して Zendesk (RED) をスクレイピングし、結果のデータを Zapier (YELLOW) に投稿し、これが Slack (ORANGE) のチャンネルに投稿します。

ここでは、送信する可能性のあるデータの分類に対してクリアされていないシステム間でデータを移動しています。

このような連携を見たら、SIRT を宣言してください。

加えて、連携で支援が必要な場合は、以下のチームに連絡してください。Google、Slack、Zoom、Okta などに関する連携については、Corp Sec チームに [こちら](https://internal.gitlab.com/handbook/security/corporate/end-user-services/app-integrations/?search=integration+request) から連絡してください。エンタープライズアプリケーション関連については、こちらのチーム [こちら](https://internal.gitlab.com/handbook/it-enterprise-applications/enterprise-applications/enterprise-applications-integrations/) に連絡してください。

### 要点

- 自分が扱っているデータの分類レベルと、どのシステムがどのデータに対してクリアされているかを把握してください。
- 可能な限りシステム間のデータ移動を避けてください: データが既に含まれているシステム内で共有できるなら、そのままにしておきましょう！
- 同僚を、彼らが見る権限のないデータに露出させないでください: アクセスが限定されたデータは、それを限定すべき人々のみに留めてください。
