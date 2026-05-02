---
title: ローカライゼーションのベストプラクティス
description: >-
    About GitLab プロジェクトにおいて、開始から完了までスムーズに翻訳プロセスを進めるための方法。よくある落とし穴と、翻訳者・ステークホルダー・エンジニアにとってこのプロセスを容易にするためのヒントを紹介します。
upstream_path: /handbook/marketing/digital-experience/engineering/localization/
upstream_sha: 2d678e92f3fbc59843a2973bbfa95041c6aef07f
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
---

## 目的

Digital Experience チームと[ローカライゼーションチーム](/handbook/marketing/localization/)が複数四半期にわたって協業してきた今、これまでの学びを整理し、より効率的に協力していけるようにすることを目的としています。

## 既存のラベル

* `dex-L10N`: 両チーム（Digital Experience／ローカライゼーション）が関与する Issue
* `L10N-attention`: ローカライゼーションチームの知見が必要な作業について、認知を高めるためのラベル
* `gitlab-translation-service`: Argo で翻訳されたマージリクエスト

[Digital Experience グループ内の全ラベル一覧](https://gitlab.com/groups/gitlab-com/marketing/digital-experience/-/labels?subscribed=&sort=relevance&search=l10n)

### 概要

![現在の想定プロセスのフローチャート](/images/marketing/digital-experience/engineering/current-expected-localization-flow.png)

現在は、Issue が作成されて UX とコンテンツの作業が開始されます。理想的には、コンテンツが完成した時点で UX が作業を開始できます。UX が完成すると、エンジニアリングとローカライゼーションが作業を開始できます。エンジニアがマージリクエストをキックオフすると、コンテンツ・UX・エンジニアリングがページに調整を加えられるようになります。なお、翻訳を開始する前に原語のコンテンツが完成している必要があります。

### 課題

これらはすべて、[次の Issue コメント](https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience/-/issues/3855#note_1980717872)、および[コンテンツのローカライゼーション フェーズ 1](https://gitlab.com/gitlab-com/localization/localization-team/-/issues/169#recycle-improvements-what-can-be-improved)からまとめられたもので、大きく 2 つに分類できます。

1. テクノロジー: エンジニアリングのレビュープロセス、および他ツールとの統合
1. 人: フローや組織を含むプロジェクトマネジメント

### FAQ

#### Argo とは何ですか? Argo へのアクセスはどのようにリクエストすればよいですか?

Argo は、ローカライゼーションチームが翻訳対象のファイルやアセットを管理するために使用している翻訳サービスです。[Argo](https://gitlab.com/gitlab-com/localization/localization-team/-/issues/156)へのオンボーディングを追跡するためにこのエピックが作成されました。UI 上の[アセット](https://gitlab.com/gitlab-com/localization/localization-team/-/issues/173)と[リクエスト](https://gitlab.com/gitlab-com/localization/localization-team/-/issues/174)に関する Issue があります。YAML に格納されたコンテンツをリクエストできます。

#### 自分のロケールについてコンテンツ変更の MR を承認できるようになりたい場合はどうすればよいですか?

[該当ロケールのリポジトリ](https://gitlab.com/gitlab-com/marketing/digital-experience/about-gitlab-com/-/blob/main/.gitlab/CODEOWNERS?ref_type=heads)の適切な `CODEOWNERS` ファイルに自分が追加されていることを確認してください。これを行うには、`#digital-experience-team` で依頼してください。

最低限、本番環境にプッシュする前に **レビューアプリを必ず確認** してください! 追加のセーフガードとして、変更が大きい場合には別のレビュアーがコンテンツの妥当性を確認することを推奨します。常にこれが可能とは限りませんが、特にページが初めてローカライズされる際のリグレッションを防ぐのに役立ちます。

#### ページはいつ翻訳されるべきですか? 複数言語で同時にリリースすることは可能ですか?

私たちは複数言語での同時リリースができるほど成熟した状態にはまだありません。現状では、翻訳者にとってのリードタイム増加、複数言語にまたがる QA プロセスの複雑化、異なるチーム間のアライメントといった課題に直面しています。

原則として、英語でページが公開された _後_ に翻訳リクエストを発行しています。これは、コンテンツとローカライゼーションの間でのやり取りを避けるためです。つまり、英語版のページがリリースされるまでは、ページの翻訳を開始できません。

#### ローカライズされたコンテンツを追加するコンテンツ編集者向けのベストプラクティス

Web ページの多くはさまざまな標準で構築されているため、初めてローカライズされる際にコード変更が必要になるページもあります。このため、ページが初めて翻訳される場合は、まず DEx エンジニアがレビューを行うのが望ましいです。必要なコード変更がマージされた後で、コンテンツ編集者は翻訳済みコンテンツの編集ができます。この例外はホームページと料金ページで、編集を行ったうえで DEx エンジニアにレビューと公開を依頼してください。一般的に、週末にバグが発生する可能性を避けるため、金曜日には変更を行わないようにしています。小さなコンテンツ変更や誤字修正以外の場合は、金曜日の公開は避けるようにしてください。

#### ブログ投稿ではどのようなフォーマットが利用できますか?

ブログ投稿の本文は、有効な Markdown であれば何でも受け付けます。リポジトリで使用している実際のツールのデモはこちらです: https://markdown-it.github.io/

* YML ファイルの例: [https://gitlab.com/gitlab-com/marketing/digital-experience/about-gitlab-com/-/blob[…]ain/content/en-us/blog/a-tale-of-two-editors.yml?ref_type=heads](https://gitlab.com/gitlab-com/marketing/digital-experience/about-gitlab-com/-/blob[…]ain/content/en-us/blog/a-tale-of-two-editors.yml?ref_type=heads)
* 当該ブログページ: [https://about.gitlab.com/blog/a-tale-of-two-editors/](https://about.gitlab.com/blog/a-tale-of-two-editors/)

これに加えて、mermaid チャート、動画、コードブロックといったいくつかの異なるメディアタイプも利用できます。[Decap CMS のハンドブックページ](/handbook/marketing/digital-experience/decap-cms/#adding-media-to-blog-posts)にいくつか例があります。

なお、これは Web サイトの特定のリッチプロパティでのみ利用可能です。あるフィールドが Markdown をサポートしているかどうか不明な場合は、お気軽にお尋ねください!

### エンジニアリング

#### エンジニアリングが翻訳リクエストをキックオフする方法

エンジニアは、[ローカライゼーション Issue トラッカープロジェクト](https://gitlab.com/gitlab-com/localization/issue-tracker)で[ローカライゼーションテンプレートを使用して新しい Issue を作成](https://gitlab.com/gitlab-com/localization/issue-tracker/-/issues/new?issuable_template=localization-request)することで、翻訳プロセスをキックオフできます。これが最終的に Argo 上のアイテム作成につながります。

これを通すには、原語のコンテンツが完成している必要があります。翻訳には 5〜7 日かかるため、作業を確約する前にステークホルダーにこのことを伝えてください。一般的なルールとして、翻訳と LQA に十分な時間を確保するため、コンテンツはイテレーション開始前に完成させておくべきです。

**注意**: Argo 上で自分たちで翻訳リクエストを開始する必要がある場合がありますが、この部分のプロセスは現在進行中です。

#### マーケティングページを構築する際の国際化対応のベストプラクティス

* 異なるロケールのソースエントリは、必ず英語版にリンクしてください。これは継続的な翻訳プロセスにおいて非常に重要です。新しいロケールで新しいエントリを作成する場合は、ソースエントリにリンクしてください。
* UX と L10n が互いに対話することを推奨します。
  * まったく新しいページが作成されるとき、`i10n-attention` [ラベル](https://gitlab.com/groups/gitlab-com/-/labels?subscribed=&sort=relevance&search=l10n-attention)を使用すべきです。
  * ロケールごとに異なる文字数の平均長による[テキストのオーバーフロー](https://gitlab.com/gitlab-com/localization/localization-team/-/issues/171)

#### Marketo フォームはどう扱いますか?

現在、Marketo の各フォーム ID はロケールごとに固有です。1 つのフォームで各ロケールのコンテンツを保持できる解決策を検討中です。これは[この Issue](https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience/-/issues/3873)でスコープを定義しています。

### グローバルゲートウェイ

グローバルゲートウェイは、ユーザーのネイティブ言語でコンテンツを提示することにより、ポジティブな第一印象を作り、信頼を育み、シームレスなナビゲーションを保証するうえで非常に重要です。ローカライズされたマーケティングサイトと、正しくローカライズされた製品サインアップパスにユーザーを誘導することで、ユーザー体験を向上させます。

FY25 のマーケティングサイト グローバルゲートウェイの目標は、世界中のユーザーに対してよりパーソナライズされた効果的なマーケティング体験を作り出し、最終的にエンゲージメントとビジネス成果の向上を促進することです。エンゲージメントとビジネス成果は Google Analytics と Tableau で測定します。

#### 言語セレクター

言語セレクターは、Navigation リポジトリに実装されている機能で、ユーザーが GitLab を表示するときの希望言語を選択できるようにします。[language.service.ts](https://gitlab.com/gitlab-com/marketing/digital-experience/navigation/-/blob/main/src/services/language.service.ts?ref_type=heads)はこちらです。

ページで利用可能な言語を表示するために、言語セレクターは現在のページがサイトで利用可能な各言語に存在するかどうかを確認する HTTP リクエストを送信します。言語ごとに 1 リクエストを送信し、リクエストが 404 を返した場合、その言語は言語セレクターに表示されません。

ユーザーが言語を選択すると、アプリはユーザーのブラウザに選択を保存し、アプリケーションのローカライゼーションロジックで利用します。これは[ここ](https://gitlab.com/gitlab-com/marketing/digital-experience/navigation/-/blob/main/src/components/Common/language-selector.vue?ref_type=heads#L97)で `localStorage` に保存しています。

ユーザーのブラウザに保存された言語を更新できるのは、言語セレクターだけです。

#### リンクのローカライゼーション

私たちのアプリケーションには、すべてのページで使用される [Vue Mixin](https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience/-/blob/main/mixins/localized-href.mixin.ts?ref_type=headss) が含まれています。この Mixin は、ローカライズされる可能性のあるリンクを各ページでスキャンします。

Mixin はユーザーのブラウザで希望言語を確認します。リンクのローカライズ版が存在することがわかれば、希望言語のローカライズ版リンクが静的に生成されます。

#### Hreflang

ローカライズされたページの言語と地域ターゲティングを指定するために、Hreflang HTML 属性を使用しています。これは検索エンジンに対して、コンテンツの言語または地域バリエーションを示します。

hreflang を生成するために [Vue Mixin](https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience/-/blob/main/mixins/localized-href.mixin.ts?ref_type=heads) を使用しています。

#### よくある混乱しやすいシナリオ

バグと誤解されがちなよくあるシナリオは、ユーザーが言語セレクターを使わずにローカライズされたページに移動したときです。たとえば、保存されている言語がフランス語（fr）でユーザーが日本語ページを訪問した場合、その日本語ページ内のリンクは、ユーザーの希望言語設定によって依然としてフランス語版にリダイレクトされます。
