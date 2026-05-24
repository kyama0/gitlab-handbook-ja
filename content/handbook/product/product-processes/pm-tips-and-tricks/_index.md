---
title: プロダクトマネジメントのコツとテクニック
upstream_path: /handbook/product/product-processes/pm-tips-and-tricks/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
translated_at: "2026-05-23T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-20T09:32:02-07:00"
---

## 概要

ハンドブックのこのセクションは、プロダクトマネジメントの実践で活用できるプロダクトマネジメントプロセスのコレクションです。中には、プロダクトマネージャーの日常業務で必須ではないベストプラクティスや提案もあれば、成功する結果につながる試行錯誤された経路として強く推奨されるワークフローもあります。これらは当社のプロダクトマネジメント部門から提供され、ディレクター以上のプロダクトマネジメントリーダーによって定期的にレビューされています。

## コツとテクニック

### 社内および社外への伝道

新機能や更新された機能を出荷する前に、社内および社外で機能を擁護することはあなたの責任です。何かがリリースされたとき、次のチームはそれを知る必要があります。彼らは皆、それに対して何かをする必要があるためです:

- Marketing: 機能の重要性に応じて、さまざまなコミュニケーションチャンネルでこの機能を宣伝するために Marketing の助けが必要です。
- Sales: セールスは、セールスプロセスで新規または既存の顧客を説得するためのより良い議論を持てるよう、製品で何が新しい／変更されたかを知る必要があります。
- Support: ユーザーや顧客と継続的に接触しているため、サポートは当社の製品がどう動作するかを正確に知る必要があります。

作業を宣伝する方法はいくつかあります:

- リリースされるものをドキュメント化し、このドキュメントを上記のチームと共有することから始める
- 重要だと思う場合は、上記のチームとミーティングをスケジュールする

書面でのコミュニケーションで Issue を参照するとき、Issue 番号 `#123456` とリンクだけを使うのは [低コンテキストコミュニケーション](/handbook/communication/#low-context) ではありません。代わりに、Issue のタイトルとリンク、または Issue 番号とその Issue が解決する問題の説明を使ってください:

- 良い: `次に [MR で コードカバレッジレポートを検出して表示する](https://gitlab.com/gitlab-org/gitlab/-/issues/21549) に取り組みます`。または `次に [gitlab#21549](https://gitlab.com/gitlab-org/gitlab/-/issues/21549) に取り組みます。これは、MR をレビューする際に別のツールを見てコンテキストを失う代わりに、開発者が GitLab で直接コードカバレッジレポートを表示できるようにするのに役立ちます`。
- 避けるべき: `次に #21549 に取り組みます。`

[findability](/handbook/values/#findability) をサポートし、特に製品の方向性、カテゴリの変更、投資テーマの変化、エンジニアリングの優先順位に関して、[考えを変えたときに明確に表現する](/handbook/values/#articulate-when-you-change-your-mind) ために、プロダクトマネージャーは、ユーザーや顧客が認識できるよう、これらの変更をマルチモーダルなコミュニケーションチャンネルで伝道する必要があります。

コミュニケーションのための **社内** 方法には次のものがあります:

- `#product`、`#s_`、`#g_`、`#f_` などのさまざまな製品ベースの Slack チャンネルで更新を共有する
- 方向性やカテゴリの変更を #customer-success にクロスポストし、[ユースケース](/handbook/marketing/use-cases/) に影響する場合は認知のために `@cs-leadership` をタグ付けする
- 方向性の更新について議論する短い動画を録画し、Customer Success と共有する。効率的なコミュニケーションを促進するために [必要に応じて](/handbook/company/culture/all-remote/asynchronous/#when-to-start-synchronously) 同期ミーティングを使用する。
- Field（Sales、Customer Success、Channel & Alliances）チームのためにより大規模な社内コミュニケーションプラン／アプローチが必要かどうかを判断するために [Field Communications チームとコラボレーションする](/handbook/sales/field-communications/#field-communications-playbook)。
- 組織全体でセクションレベルで月次方向性ページ更新のハイライトを集約し、共有する

方向性ページにリンクするために考慮する **社外** チャンネル:

- Twitter、LinkedIn、その他のソーシャルアカウント
- アカウントチームを介したアウトリーチメールの共有
- Unfiltered でウォークスルーを録画し、ソーシャルアカウントで宣伝する
- 重要または破壊的な場合は、変更についてブログを書く

### アクションを促す書き方

PM として、[アクションへのバイアス](/handbook/values/#operate-with-a-bias-for-action)（および [緊急性の感覚](/handbook/values/#sense-of-urgency)、[提案する](/handbook/values/#make-a-proposal)、[退屈なソリューション](/handbook/values/#boring-solutions)、[書き留める](/handbook/values/#write-things-down)、[待たない](/handbook/values/#dont-wait)、[両方向ドアの決定](/handbook/values/#make-two-way-door-decisions) などの他の価値観のアクション）を覚えておくことが重要です。これは PM が非同期の議論をアクション指向に推進することを可能にします。コメントを書いたり Issue を作成したりするたびに自問してください: これは私たちがアクションを取り、前進することを可能にしますか？

### 機能について書く

PM として、私たちは出荷する機能とアップグレードについて、ブログ投稿で、何かを宣伝するために社内で、顧客に送るメールで、常に書く必要があります。機能について書くときに考慮すべきガイドラインがいくつかあります。最も重要なのは、ユーザーのために解決している問題を明確に伝えることです。

機能について書くときは、明確な社内および社外メッセージングを生成するのに役立つ [これらのメッセージングガイドライン](https://docs.gitlab.com/development/documentation/release_notes/) をカバーするようにしてください。また、他者が認識しない可能性のある略語（例: Minimal Valuable Change を表す「MVC」）の使用を避けるべきです。さらなるガイダンスについては、[ライティングスタイルガイドライン](/handbook/communication/#writing-style-guidelines) を訪問してください。

上記のメッセージングガイドラインを具体的な例で強調しましょう。リポジトリでのシークレットの防止です。これは [8.12 で出荷](https://about.gitlab.com/releases/2016/09/22/gitlab-8-12-released/#preventing-secrets-in-your-repositories-ee) しました。

- コンテキストから始めます。機能なしの現在の状況を説明します。痛点を説明し、[Value Drivers](/handbook/sales/command-of-the-message/#customer-value-drivers)（この場合は `Reduce Security and Compliance Risk`）に結びつけます。

> シークレット（キーや証明書など）をリポジトリにコミットするのは悪いアイデアです。それらはリポジトリにアクセスする誰のマシンにもクローンされます。たった 1 つでも安全でない場合、情報は侵害されます。残念ながら、これは簡単に起こります。`git commit -am 'quickfix' && git push` と書いて、突然ローカルに留まるべきだったファイルをコミットしてしまいます！

- この問題を修正するために何を出荷したかを説明します。

> GitLab には、シークレットを含むコミットがリポジトリに入らないようにする新しい push ルールがあります。

- 機能の使用方法を簡単な用語で説明します。

> リポジトリ設定の push rules の下のチェックボックスをチェックするだけで、GitLab は .pem や .key などの一般的な安全でないファイルがコミットされるのを防ぎます。

- ドキュメントとその他の関連リンク（以前の投稿など）を指し示します。

インスピレーションのために、いくつかのよく書かれたリリースブログ投稿の追加例を以下に示します:

- [Issue Board Work In Progress Limits](https://about.gitlab.com/releases/2020/02/22/gitlab-12-8-released/#issue-board-work-in-progress-limits)
- [Parent-Child Pipelines](https://about.gitlab.com/releases/2020/01/22/gitlab-12-7-released/#parent-child-pipelines)
- [Drag-and-drop Design badges](https://about.gitlab.com/releases/2020/02/22/gitlab-12-8-released/#drag-and-drop-design-badges)
- [Render charts in GitLab issues using a Grafana URL](https://about.gitlab.com/releases/2019/11/22/gitlab-12-5-released/)

### 機能をショーケースする動画の録画

書面媒体に加えて、動画はあなたが達成しようとしているさまざまな目標やオーディエンスの学習スタイルに対応する重要な媒体です。
録画する動画のタイプに応じて、考慮すべきガイドラインがいくつかあります。

当社のドキュメントガイドラインは、動画コンテンツのリンクを [積極的に推奨](https://docs.gitlab.com/development/documentation/styleguide/#videos) しているため、[ドキュメントスタイルガイドの言語セクション](https://docs.gitlab.com/development/documentation/styleguide/#language) に従い、テクニカルライティングチームと協力して、製品ドキュメントの関連場所にスピードラン、ウォークスルー、デモへのリンクを含めることを検討してください。

#### GIF を使う

アニメーション GIF は、画像だけでは足りない機能をマーケティング目的で見せたり、機能をより詳細に説明したりするのに素晴らしい手段です。[GIF の作成](/handbook/product/product-processes/making-gifs/) のガイドをご覧ください！

#### スピードラン

スピードランは、単一のワークフローとそのワークフローを実行するための体験に焦点を当てた非公式な動画です。多くの計画は必要なく、通常短時間です（5 分未満）。この動画タイプは、情報を提供することを目的とし、必ずしもバイヤーに影響を与えることを目的としていません。

例:

- [GitLab Unfiltered Speed Runs Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KqSF4RAEzwC0qCBrM85OP7r)
- [Remove docker images via CI/CD speed run](https://youtu.be/jDlFCrH9H7g)

#### デモ

デモは、バイヤーに影響を与えることを目的としたスクリプト化された録画です。一般的により高い制作価値を持ち、通常はスライドスタイルのプレゼンテーションおよび／またはライブの画面共有の両方が含まれます。期間はカバーするトピックによって異なります。

例:

- [GitLab for the Enterprise Demo](https://youtu.be/aIYLxMXQiLI)

#### ウォークスルー

製品ウォークスルーは、主に社内オーディエンス向けの非公式な動画で、製品批評の録画された視覚的形式です。ウォークスルーは通常、プロダクトマネージャーの [製品スコープ](/handbook/product/categories/) 内のカテゴリやワークフロー間のユーザーエクスペリエンスに焦点を当てます。[製品階層](/handbook/product/categories/#hierarchy) の境界を越える（マルチカテゴリ、マルチステージ、マルチセクション）ウォークスルーには特別な利点があり、シングルアプリケーション全体の不連続な体験を浮き彫りにするのに役立ちます。

ウォークスルーは、より広い範囲をカバーし、しばしば「ライブ」のトラブルシューティングを含み、計画なしで実行するのが最適なため、通常長めです。ウォークスルーを作成するときは [Product walk-through Issue テンプレート](https://gitlab.com/gitlab-com/Product/issues/new?issuable_template=Product-Walk-Through) を使用してください。

例:

- [Auto DevOps setup and usage walk-through](https://youtu.be/V4NX2j2HQAs)
