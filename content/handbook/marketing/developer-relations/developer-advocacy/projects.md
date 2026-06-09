---
title: "プロジェクト"
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/projects/
upstream_sha: c6f416c14ee9f53cb671d49ff11a9671c68d9326
lastmod: 2026-06-08T11:30:44+02:00
translated_at: "2026-06-09T00:00:00Z"
translator: claude
stale: false
---

## はじめに {#introduction}

私たちは、パブリックな [gitlab-da グループ](https://gitlab.com/gitlab-da)でプロジェクトを保守しています。このグループは Ultimate サブスクリプションにアクセスできます。

このグループでは、ユースケース、デモ環境、ワークショップ、チュートリアル、保守対象のプロジェクト、プレイグラウンドのリサーチなど、より多くの学習リソースを整理しています。

## 組織構造 {#organisation-structure}

すべてのプロジェクトはトップレベルのサブグループに整理されています。トップレベルの名前空間 `gitlab.com/gitlab-da` にはプロジェクトを置くことができません。

| グループ | DRI | 説明 |
|--------------|-----|--------------|
| [demo-environments](https://gitlab.com/gitlab-da) | all | チームが保守する長期的なデモ環境 |
| [conferences](https://gitlab.com/gitlab-da/conferences) | all / @fjdiaz | [カンファレンス、イベント、ミートアップなど](/handbook/marketing/developer-relations/events/#event-booth-training)でチームメンバーが使うパブリックデモのためのグループ |
| [playground](https://gitlab.com/gitlab-da/playground) | all | サポートのないテストプロジェクト、シンプルなデモケース、コードスニペットなど。ブログ記事からリンクする際は、該当する use-cases または demo-environment グループに移動してください。 |
| [use-cases](https://gitlab.com/gitlab-da/use-cases) | all | 製品デモ、講演、ソートリーダーシップ、リサーチのための特定トピックのユースケース |
| [projects](https://gitlab.com/gitlab-da/projects) | all | チームが保守する本番プロジェクト。ブログ用のプロジェクトやデモには、特定の `use-cases` グループを使ってください。 |
| [tutorials](https://gitlab.com/gitlab-da/tutorials) | all | チュートリアルとワークショップ。 |

### アクセス {#access}

アクセスは [`gitlab-da` グループのチームメンバー](https://gitlab.com/groups/gitlab-da/-/group_members)に限定されています。メンバーの追加・削除には、変更を記録するための [Issue が必要です](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues)。

許可される例外は、外部ユーザーを一時的にワークショッププロジェクトに招待するワークショップのサブグループです。一時的に追加されたすべてのユーザーは、[**必ず** 7 日のメンバーシップ有効期限を使用する](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project)必要があります。

### 新しいプロジェクトまたはグループを追加する {#add-a-new-project-or-group}

1. プロジェクトのスコープを定義し、トップレベルのグループのいずれかに追加します。
1. 迷ったときは、まず [playground](https://gitlab.com/gitlab-da/playground) グループにプロジェクトを作成し、後でプロジェクト設定で本番の場所に移します。

**まず Issue/MR で変更を提案することなく、新しいトップレベルグループを作成しないでください。**

#### README {#readme}

プロジェクト/グループの目的を説明する `README.md` ファイルを必ず追加し（テキストを `Settings > General > Description` にコピーしてください）、すべてのリソース（Issue、ディレクションページ、ブログ記事など）をリンクします。GitLab はプロジェクトの README に加えて[グループの README](https://docs.gitlab.com/ee/user/group/manage#add-group-readme) もサポートしています。

任意ですが推奨: トピックを表すプロジェクト/グループのアバター画像を追加します。画像を選ぶ際は、Brand の[クリエイティブアセットの調達に関するガイダンス](/handbook/marketing/brand-and-product-marketing/design/#sourcing-creative-assets)を参照してください。ヒント: [画像のサイズを変更](/handbook/tools-and-tips/#resizing-images)できます。

また、`.gitignore`、`AGENTS.md`、CI/CD 設定など、その他のベストプラクティスも、該当する場合は既定で適用してください。

#### グループ: デモ環境 {#group-demo-environments}

長期的に保守されるデモ環境です。対象者や DRI が異なり、それぞれの説明に記載されています。
必要に応じて、デモのセットアップを説明するハンドブックページや `demo.md` ファイルを追加し、他のチームメンバーもデモ環境を立ち上げられるよう支援してください。

#### グループ: ユースケース {#group-use-cases}

1. ブログ記事やソートリーダーシップのリサーチは、通常ユースケースや特定のトピックを説明するものです。既存の [use-cases](https://gitlab.com/gitlab-da/use-cases) を確認し、新しいプロジェクトまたはサブグループを追加してください。
1. ユースケースが新しい場合は、新しいサブグループを作成し、説明を追加し、ハンドブックの組織構造を更新します。テーブルに自分自身を DRI として追加してください。

#### グループ: チュートリアルとワークショップ {#group-tutorials-and-workshops}

[チュートリアル](https://gitlab.com/gitlab-da/tutorials)は、特定のトピックを学ぶのに役立つコンテンツを提供し、プロジェクトを保守するための DRI がアサインされています。チュートリアルはブログ記事やウェビナーなどから参照されます。

どこから始めるか迷ったときは、まず新しいチュートリアルのサブグループを作成し、後でたとえばコンテンツをワークショップへ移行するかどうかを決めてください。

#### グループ: プロジェクト {#group-projects}

[projects](https://gitlab.com/gitlab-da/projects) グループには、本番で使われるすべてのプロジェクトが含まれます。チームがワークフローと効率のためにその機能に依存しているため、チームハンドブックでの充実したドキュメントが必要です。私たちはまた、GitLab Pages とカスタムドメインで提供されるマイクロサイトも保守しています。

### プロジェクト/グループを削除する {#remove-a-projectgroup}

私たちのデモプロジェクトは、ブログ記事やその他のパブリックコンテンツから参照されています。これらのプロジェクトの非推奨をユーザーに伝えるために、アーカイブすることを推奨します。可能であれば README に注記を加えてください。

## プロジェクトのリソース {#project-resources}

一部のプロジェクトは、Kubernetes クラスター、セルフマネージドの CI/CD Runner、クラウド VM、ドメインなどへのアクセスが必要です。チームは、GitLab.com SaaS デモ向けにこの種の外部インフラストラクチャ依存をホストできる Google Cloud または AWS のクラウドリソースにアクセスできます。詳しくは、[デベロッパーリレーションズ向けクラウドリソースのハンドブック](/handbook/marketing/developer-relations/workflows-tools/cloud-resources)で学べます。

### ベストプラクティス {#best-practices}

1. プロジェクトのセットアップを README ファイル（または Git リポジトリの `docs/` 構造）に文書化します。
1. デモケースと競合しない限り、常に既定として[セキュリティスキャン](https://docs.gitlab.com/ee/user/application_security/)を追加します。
1. GitLab アプリにはアカウントからの OAuth セットアップが必要です。グループ共有アカウント（たとえば `demo-tanuki`）を使い、誰もがアプリを保守・更新できるようにします。

### 開発環境 {#development-environments}

[デベロッパーアドボケイト向け開発環境](/handbook/marketing/developer-relations/developer-advocacy/dev-environments/)を参照してください。

## 製品導入イニシアチブ {#product-adoption-initiatives}

### Social チームと協力した LinkedIn Lives {#linkedin-lives-in-collaboration-with-the-social-team}

GitLab は、月次リリースを取り上げ、製品アップデートやソートリーダーシップを共有するために、通常毎月第 4 木曜日に月次の LinkedIn Live 配信を主催しています。各配信には、GitLab のチームメンバーとスペシャルゲストが出演し、AI を活用したソフトウェア開発の最新情報について議論します。これは[デベロッパーアドボカシー](/handbook/marketing/developer-relations/developer-advocacy/)と[ソーシャルメディア](/handbook/marketing/integrated-marketing/digital-strategy/social-marketing/)の両チームによるコラボレーションプロジェクトです。

各エピソードは通常 30 分間で、4 〜 5 名のパネリストとモデレーターが出演し、事前に決められたトピックや製品アップデートについて議論します。場合によっては、会話は事前収録されます。

| エピソードタイトル | 視聴回数 | 月 |
|-------------------------------------------------------------------------------|---------|---------|
| [GitLab 16.11](https://www.linkedin.com/events/7191139444916146176/) | 5.6K    | 2024/04 |
| [GitLab 17.0](https://www.linkedin.com/feed/update/urn:li:activity:7198692684436250626) | 6.8K    | 2024/05 |
| [GitLab 17 Release event recap](https://www.linkedin.com/video/live/urn:li:ugcPost:7212131667262492673/) | 7.3K    | 2024/06 |
| [Harnessing AI: GitLab’s Insights & Innovations](https://www.linkedin.com/events/7219699059933020163) | 6.3K    | 2024/07 |

#### パネリスト向けの情報 {#information-for-panelists}

**配信/収録の前**

- ソーシャルメディアチームや他のパネリストとともに一時的な Slack チャンネルに追加され、アジェンダ、段取り、プロモーションについて議論します。
- 収録/配信の前に 30 分間のウォークスルーに参加し、技術チェックを行い、トーキングポイントを確認し、他のパネリストと顔合わせをするようお願いします。
- LinkedIn のイベントページにスピーカーとして追加され、あなたが LinkedIn でライブ配信することがネットワークに通知されます。
- イベントを宣伝する LinkedIn 投稿を自分のネットワークと共有して、イベントの宣伝にご協力ください。

**配信/収録の最中**

- 強い WiFi 信号があり、気が散らないよう照明の整った場所にいることを確認してください。
  - 理想的には、バーチャル背景を使用してください。
- GitLab のスワッグを持っている場合は、ぜひ着用してください！
- マイクとしてヘッドセットを使用してください。

**配信の後**

- 配信にコメントした人たちと交流してください。
- イベント動画を自分のネットワークと再共有してください。

## アーカイブされたプロジェクト {#archived-projects}

### コミュニティニュースレター {#community-newsletter}

- 目的: 開発者向けのコンテンツを共有し、コミュニティメンバーに今後のイベントについて知らせ、コミュニティ内でのコントリビューションを促進します。このニュースレターのターゲットは、コミュニティ内の GitLab コントリビューターを目指す人々や既存のコントリビューターです。このニュースレターはリードの獲得や創出には使用されません。
- 期間: 2022-2024
- [組織エピック](https://gitlab.com/groups/gitlab-com/-/work_items/1821)
- メンテナー: @sugaroverflow
- アーカイブ:
  - [FY23 Newsletter Epic.](https://gitlab.com/groups/gitlab-com/-/epics/1915)
  - その他の過去のニュースレターの Issue はすべて、[ラベル `Da-Type-Content::newsletter`](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/?sort=updated_desc&state=closed&label_name%5B%5D=DA-Type-Content::newsletter&first_page_size=20)を使ってクローズ済みの Issue を検索すると見つかります。
  - [ニュースレター Issue の PDF（社内）](https://drive.google.com/drive/folders/1w086j7mTDRCUEtINm2AVivkxfctMQT2J)

### GitLab Duo Coffee Chat {#gitlab-duo-coffee-chat}

GitLab Duo の助けを借りて、DevSecOps ライフサイクル全体にわたる AI 活用ワークフローを扱うライブ学習セッションです。私たちは議論し、探求し、リサーチし、学び、デバッグし、製品フィードバックや機能のアイデアを作成し、新しい機能やワークフローを発見します。詳しくは [FY25 Developer Relations エピック](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/475)（社内）で学べます。

目的: コーヒーチャットは、私たちの顧客が GitLab Duo の使い方を学び、ベストプラクティスを採り入れる手助けをします。実例を示し、間違いを犯し、さまざまな手段を試し、より良い結果と DevSecOps の効率を達成することによってです。

メンテナー: [Michael Friedrich, @dnsmichi](https://gitlab.com/dnsmichi)

- [YouTube playlist](https://go.gitlab.com/xReaA1)
- [GitLab group with projects](https://gitlab.com/gitlab-da/use-cases/ai/gitlab-duo-coffee-chat)
- [GitLab Duo](https://go.gitlab.com/Z1vBGD)
- [Talk: Efficient DevSecOps Workflows with a little help from AI](https://go.gitlab.com/T864XF) - [content epic](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/402)
- [Organization issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/375)
- 録画動画の編集用の[スライドテンプレートとリソース](https://docs.google.com/presentation/d/1FBOxe43l4qY8KastAWjblphOLiktNtPjHgFNmNYf0Uw/edit#slide=id.g2a6734f20af_0_0)。

録画は [GitLab Duo Use Cases documentation](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html) からもリンクされています。

#### プロセス {#process}

1. セッションのスコープを定義します（たとえば、30 分でアプリケーションを書く、COBOL のような新しいプログラミング言語を探求するなど）。Duo Challenges では、IDE または GitLab UI のコンテキスト内にとどまる必要があります。
1. ゲストを招待してコラボレーションします（任意）
1. Zoom の録画を開始し、セッションの目的について短く紹介します。一人のときは、OBS を使ってセッションを録画することもできます。
1. セッションを開始し、Duo Chat に始め方を尋ね、Code Suggestions などで続けます。
1. 終了するとき、または時間で止めるときは、一息ついて、今日学んだことのまとめを提供します。
1. 動画をエクスポートします。
1. 学びを際立たせるスクリーンショットをセッション（または IDE）から取得します。スクリーンショットを[スライドのプレースホルダー](https://docs.google.com/presentation/d/1FBOxe43l4qY8KastAWjblphOLiktNtPjHgFNmNYf0Uw/edit#slide=id.g2b429ab8253_0_23)に追加し、セッションの詳細を入れてテキストを編集し、再度スライドのスクリーンショットを作成します。これは Premiere Pro での動画のイントロとして使われます。

Adobe Premiere Pro での動画編集:

1. Adobe Premiere Pro で新しいプロジェクトを作成します。
1. 録画とイントロ/アウトロの画像アセットをインポートします。
1. 動画を新しいシーケンスにドラッグします。
1. 最初の 3 〜 5 秒にイントロのスクリーンショットを追加します。右クリック > Scale to fit frame size。
1. レーザーアイコンを使ってイントロシーケンスの後で動画をカットします。最初の部分を選択し、シーケンスを削除します。
1. 最後の 3 〜 5 秒に終了のスクリーンショットを追加します。右クリック > Scale to fit the frame size。
1. レーザーアイコンを使って終了シーケンスの前で動画をカットし、無音部分を取り除きます。最後の部分を選択し、シーケンスを削除します。
1. 生の動画をエクスポートします: `File > Export > Media`。

動画のアップロード:

1. [YouTube の GitLab Unfiltered アカウント](https://www.youtube.com/@GitLabUnfiltered/)にログインし、動画ファイルをアップロードします。
1. セッションのタイトルを編集します: `GitLab Duo Coffee Chat: Challenge - Explain and Refactor COBOL programs` など。
1. 何を期待できるかを 2 〜 3 文で動画の説明に編集します。すべてのドキュメント/ブログの URL を `Resources` のエントリとして追加します。
1. 動画プレビューを新しいウィンドウで開き、各セクションをスクロールします。タイムスタンプをメモし、動画の説明に目次を書きます。目次は視聴者がすばやく移動するのに役立ちます。
1. `Playlist` - `GitLab Duo Coffee Chat` に追加します。
1. タグを追加します: `gitlab`, `gitlab-duo`, `ai`, `development` など。
1. 動画を公開します。

配信

1. 動画を [GitLab Use Case documentation](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html)、Highspot、ブログ記事、ソーシャル投稿などに追加します。

### CI/CD Components Catalog {#cicd-components-catalog}

製品およびエンジニアリングと協力し、[GitLab がメンテナンスするコンポーネント](https://gitlab.com/components)への CI/CD テンプレート移行を通じて CI/CD コンポーネントカタログの初期構築を支援します。コミュニティのコンペティションやハッカソンからのコントリビューションの保守とレビューを支援します。その学びをコンテンツやストーリーテリングに再利用します（[content epic](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/399)）。詳しくは [FY25 Developer Relations エピック](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/466)（社内）で学べます。

このイニシアチブは [CI Adoption WG](/handbook/company/working-groups/customer-use-case-adoption/) と Developer Relations によるコントリビューション（[epic](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/317)）の一部です。

目的: DevSecOps の効率のための CI/CD コンポーネントで顧客を支援します。ベストプラクティスを学び、ブログ記事、チュートリアル、ワークショップで共有します。

メンテナー: [Michael Friedrich, @dnsmichi](https://about.gitlab.com/company/team/#dnsmichi), [Itzik Gan Baruch, @iganbaruch](https://about.gitlab.com/company/team/#iganbaruch)

### Developer Relations Bot {#developer-relations-bot}

メンテナー: 未定。当面は [Michael Friedrich](https://gitlab.com/dnsmichi) に尋ねてください。

このボットは、次のようなチームのタスクを自動化することを目指しています:

- チームメンバー向けに[リリース・エバンジェリズム](/handbook/marketing/developer-relations/developer-advocacy/social-media/#release-evangelism)の Issue を作成する。
- [デベロッパーアドボカシーのワークフロー](/handbook/marketing/developer-relations/developer-advocacy/workflow/)に従って Issue をトリアージする。
- 毎週月曜日に Issue レター（作成済み、クローズ済み、オープンな CFP）を生成する。

プロジェクト: [DevRel Bot](https://gitlab.com/gitlab-da/projects/devrel-bot)
