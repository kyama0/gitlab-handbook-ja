---
title: "CI ワークショップ"
Description: "継続的インテグレーションの深掘りワークショップを主導する CSM 向けのガイダンス"
upstream_path: /handbook/customer-success/workshops/ci-workshop/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

- [CI ワークショップの概要](#ci-workshop-overview)
- [ワークショップ資料](#workshop-materials)
- [ディスカバリー質問](#discovery-questions)
- [ワークショップ計画チェックリスト](https://docs.google.com/document/d/1MQuIq8_QWvZJi_zKMzwkIf9Ewps4nezmcvQ6YuzomSA/edit)（Google Doc - コピーを作成）

## CI ワークショップの概要

このワークショップは、CSM や SA が以下のことを行えるよう、新規または既存の顧客向けにイネーブルメントを提供することを目的としています:

- 顧客の経験レベルや関心領域に最適な「Basic」または「Advanced」CI ワークショップのデックを選択する
- [Collaboration Project Issue Template](#collaboration-project-issue-template) を使用して顧客に提案する
- [Zoom ミーティング](#how-to-get-started) を顧客登録付きで作成し、関心のあるパーティとのフォローアップ連絡を促進する（潜在的に関係を広げたり深めたりする）
- 適切な [ディスカバリー質問](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/#discovery-questions) を尋ねる
- フォローアップアクションを推進する

このワークショップは、「ハンズオンキーボード」のデモ体験を提供することを目的とは *していません*。

*標準的な時間*: 60-120 分が良いガイドラインです。事前録画ビデオ付きの Advanced CI ワークショップは、約 80 分の事前録画ビデオに加えて約 5-15 分の「`rules:` の例」が含まれます。質問のための時間も忘れずに確保してください。

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/bF53StwhMUc" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

## はじめ方

1. 顧客の Collaboration Project に [CI Sell Sheet issue template](https://gitlab.com/gitlab-com/customer-success/tam/-/blob/master/.gitlab/issue_templates/CICDv2WorshopTopics.md) を使用して Issue を作成し、Basic または Advanced ワークショップのどちらが適切かを顧客と議論します。
1. 顧客とのセッションに適切な時間量に合意します（90-120 分推奨）
1. ワークショップ用に [Zoom 経由でサインアップページを作成](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0065026) して、顧客が社内で共有できるようにします。サインアップページのメリットは:
    1. 事前に予想される参加者数を把握し、それに応じて準備（例: 非同期 Q&A を処理するためのボランティアリソースを巻き込む）できます。
    1. 誰が参加するか分かり、参加者の特定のレベル/役職に合わせてコンテンツを調整できます（サインアップページに `title` の質問を追加することを忘れないでください！）。
    1. フォローアップする参加者リストを得られます。これは、このワークショップが、通常持っていない開発リードやエンドユーザーとエンゲージする手段になるため、信じられないほど重要です。
1. Basic または Advanced ワークショップの開始点として、それぞれ [Intro to CI/CD Lunch and Learn slides](https://docs.google.com/presentation/d/1AO4z6Q8lQE10zCzjNRT5fGcYbYdMZf4AXUAAIodib3E/edit#slide=id.g719d32106a_0_0) または [Advanced CI Workshop Slides](https://docs.google.com/presentation/d/1CBcpyFqmfG99JyzNS2CexRLAhQ4IziMDINFXoKuy9_w/edit) を **コピーします**。
1. 顧客と合意したとおりにスライドデックをカスタマイズします。
1. プレゼンする相手を見つけます… 別の CSM、顧客の SA、またはこのワークショップの作成者の 1 人です。メモを取ったり質問を投げかけたりする相手がいる方が常に良いです。参加者 20 名ごとに 1 人の共同ファシリテーターを持つことが推奨されます。

## ワークショップ資料

- **Basic ワークショップ** [Intro to CI/CD Lunch and Learn slides](https://docs.google.com/presentation/d/16NUm6b8EwhGg3BdoI7dKsIY2aI2MIOCS8HtO7wRW2Dg/edit)
- **Advanced ワークショップ** [Advanced CI Workshop Slides](https://docs.google.com/presentation/d/1cqysPx_93xnzZ853HwIlRd63oA1Ni9MY8kclYv-JMBw/edit)
- 補助資料については、[Lunch and Learns Google Drive Folder](https://drive.google.com/drive/folders/1NnDsqoc-KRdy7hF1jbo6H_59FwzpiKUc?ths=true) の他のデックから自由に引用してください

Advanced ワークショップで事前録画コンテンツを活用したい場合は、以下の使用を検討できます:

- (廃止) [事前録画ビデオ付きの Advanced CI Configuration Slides](https://docs.google.com/presentation/d/1GI-QdzYJY3ccVtELZr-5uLBcsaGbP2Ioliw5XMZJc9Q/edit)
- (廃止) [ビデオなしの Advanced CI Configuration Slides](https://docs.google.com/presentation/d/1lEF-8XBBn5kKdK5h9HNvQPvrQB8n1Jw-PYDIxO4ngT0/edit)

上記のいずれかに関するフィードバックや、このワークショッププロセスからの学びについては、[この Issue](https://gitlab.com/gitlab-com/customer-success/tam/-/issues/372) を使用して、イテレーションを継続できるようにしてください。

## Collaboration Project Issue テンプレート

参考: [CI Sell Sheet issue template](https://gitlab.com/gitlab-com/customer-success/tam/-/blob/master/.gitlab/issue_templates/CICDv2WorshopTopics.md)

## ディスカバリー質問

セッション前に Strategic Marketing のユースケース中心の [ディスカバリー質問](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/#discovery-questions) のリストを確認することを強く推奨します。
自己紹介とワークショップの紹介を行う際、参加チーム、個人が持つ役割についてのディスカバリー質問をし、現在の目標や課題についてコメントを促すことが役立ちます。
