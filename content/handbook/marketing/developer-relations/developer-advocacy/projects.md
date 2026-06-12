---
title: "プロジェクト"
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/projects/
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
translated_at: "2026-06-12T13:03:29Z"
translator: claude
stale: false
lastmod: "2026-06-08T11:30:44+02:00"
model: claude-opus-4-7
---

## はじめに {#introduction}

私たちはプロジェクトをパブリックな [gitlab-da グループ](https://gitlab.com/gitlab-da) でメンテナンスしています。このグループは Ultimate サブスクリプションへのアクセス権を持っています。

このグループは、ユースケース、デモ環境、ワークショップ、チュートリアル、メンテナンスされているプロジェクト、プレイグラウンドリサーチ、その他の学習リソースを整理しています。

## 組織構造 {#organisation-structure}

すべてのプロジェクトはトップレベルのサブグループで整理されています。トップレベルの名前空間 `gitlab.com/gitlab-da` には、プロジェクトを置くことはできません。

| Group        | DRI | Description  |
|--------------|-----|--------------|
| [demo-environments](https://gitlab.com/gitlab-da) | all | チームがメンテナンスする長期的なデモ環境 |
| [conferences](https://gitlab.com/gitlab-da/conferences) | all / @fjdiaz | [カンファレンス、イベント、ミートアップなど](/handbook/marketing/developer-relations/events/#event-booth-training) でのチームメンバー向けパブリックデモ用のグループ |
| [playground](https://gitlab.com/gitlab-da/playground) | all | サポートなしのテストプロジェクト、シンプルなデモケース、コードスニペットなど。ブログ記事からリンクする場合は、対応する use-cases または demo-environment グループに移動してください。 |
| [use-cases](https://gitlab.com/gitlab-da/use-cases) | all | 製品デモ、トーク、ソートリーダーシップ、リサーチのための特定トピックのユースケース |
| [projects](https://gitlab.com/gitlab-da/projects) | all | チームがメンテナンスする本番プロジェクト。ブログプロジェクトやデモには、特定の `use-cases` グループを使用してください。 |
| [tutorials](https://gitlab.com/gitlab-da/tutorials) | all | チュートリアルとワークショップ。 |

### アクセス {#access}

アクセスは [`gitlab-da` グループのチームメンバー](https://gitlab.com/groups/gitlab-da/-/group_members) に限定されています。メンバーの追加／削除には、変更を記録するために [Issue が必要です](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues)。

許可される例外は、外部ユーザーを一時的にワークショッププロジェクトに招待するワークショップサブグループです。一時的に追加されたすべてのユーザーは、[**必ず** 7 日間のメンバーシップ有効期限を使用](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project) する必要があります。

### 新しいプロジェクトまたはグループの追加 {#add-a-new-project-or-group}

1. プロジェクトのスコープを定義し、トップレベルグループのいずれかに追加します。
1. 不明な場合は、まず [playground](https://gitlab.com/gitlab-da/playground) グループにプロジェクトを作成し、後でプロジェクト設定で本番の場所に移動します。

**Issue/MR で変更を提案せずに新しいトップレベルグループを作成しないでください。**

#### README {#readme}

プロジェクト／グループの目的を説明する `README.md` ファイルを必ず追加し（テキストを `Settings > General > Description` にコピーします）、すべてのリソース（Issue、ダイレクションページ、ブログ記事など）にリンクします。GitLab はプロジェクトの README に加えて [グループ README](https://docs.gitlab.com/ee/user/group/manage#add-group-readme) をサポートしています。

オプションですが推奨: トピックを表すプロジェクト／グループのアバター画像を追加します。画像を選択する際は、Brand の [クリエイティブアセットの調達に関するガイダンス](/handbook/marketing/brand-and-product-marketing/design/#sourcing-creative-assets) を参照してください。ヒント: [画像をリサイズ](/handbook/tools-and-tips/#resizing-images) できます。

また、該当する場合は `.gitignore`、`AGENTS.md`、CI/CD 設定などの他のベストプラクティスもデフォルトで適用します。

#### グループ: デモ環境 {#group-demo-environments}

長期的にメンテナンスされるデモ環境で、異なるオーディエンスと DRI がその説明に記載されています。
必要に応じて、デモのセットアップを説明するハンドブックページや `demo.md` ファイルを追加し、他のチームメンバーがデモ環境を立ち上げられるように支援します。

#### グループ: ユースケース {#group-use-cases}

1. ブログ記事やソートリーダーシップのリサーチは、通常、ユースケースや特定のトピックを記述します。既存の [use-cases](https://gitlab.com/gitlab-da/use-cases) を確認し、新しいプロジェクトやサブグループを追加します。
1. ユースケースが新しい場合は、新しいサブグループを作成し、説明を追加し、ハンドブックの組織構造を更新します。表に自分を DRI として追加します。

#### グループ: チュートリアルとワークショップ {#group-tutorials-and-workshops}

[チュートリアル](https://gitlab.com/gitlab-da/tutorials) は、特定のトピックを学ぶための役立つコンテンツを提供し、プロジェクトをメンテナンスする DRI が割り当てられています。チュートリアルはブログ記事やウェビナーなどで参照されます。

どこから始めればよいか不明な場合は、まず新しいチュートリアルサブグループを作成し、後で例えばコンテンツをワークショップに移行するかどうかを決めます。

#### グループ: プロジェクト {#group-projects}

[projects](https://gitlab.com/gitlab-da/projects) グループには、本番で使用されるすべてのプロジェクトが含まれます。チームはワークフローと効率のためにその機能に依存しているため、チームハンドブックでの拡張ドキュメントが必要です。私たちはまた、GitLab Pages とカスタムドメインで提供されるマイクロサイトもメンテナンスしています。

### プロジェクト/グループの削除 {#remove-a-project-group}

私たちのデモプロジェクトは、ブログ記事やその他のパブリックコンテンツで参照されています。これらのプロジェクトをアーカイブして、可能であれば README の注記を含めて、ユーザーに非推奨を知らせることをおすすめします。

## プロジェクトリソース {#project-resources}

一部のプロジェクトは、Kubernetes クラスター、セルフマネージドの CI/CD Runner、クラウド VM、ドメインなどへのアクセスを必要とします。チームは、GitLab.com SaaS デモのためにこれらのタイプの外部インフラ依存をホストできる Google Cloud または AWS のクラウドリソースにアクセスできます。詳細は [Developer Relations のクラウドリソースのハンドブック](/handbook/marketing/developer-relations/workflows-tools/cloud-resources) を参照してください。

### ベストプラクティス {#best-practices}

1. プロジェクトのセットアップを README ファイル（または Git リポジトリの `docs/` 構造）にドキュメント化します。
1. デモケースと競合しない限り、[セキュリティスキャン](https://docs.gitlab.com/ee/user/application_security/) を常にデフォルトとして追加します。
1. GitLab アプリにはアカウントからの OAuth セットアップが必要です。グループ共有アカウント（例: `demo-tanuki`）を使用して、全員がアプリをメンテナンス・更新できるようにします。

### 開発環境 {#development-environments}

[デベロッパーアドボケイトの開発環境](/handbook/marketing/developer-relations/developer-advocacy/dev-environments/) を参照してください。

## 製品アダプションのイニシアチブ {#product-adoption-initiatives}

### Social チームと連携した LinkedIn Lives {#linkedin-lives-in-collaboration-with-the-social-team}

GitLab は、月次リリースを紹介し、製品アップデートとソートリーダーシップを共有するために、通常毎月第 4 木曜日に月次の LinkedIn Live 放送を開催しています。各放送には GitLab のチームメンバーとスペシャルゲストが登場し、AI を活用したソフトウェア開発の最新情報について議論します。これは [Developer Advocacy](/handbook/marketing/developer-relations/developer-advocacy/) と [Social Media](/handbook/marketing/integrated-marketing/digital-strategy/social-marketing/) チームの共同プロジェクトです。

エピソードは通常 30 分間で、4〜5 名のパネリストとモデレーターが登場し、あらかじめ決められたトピックや製品アップデートについて議論します。場合によっては、会話が事前収録されることもあります。

| Episode Title                                                                 | Views   | Month   |
|-------------------------------------------------------------------------------|---------|---------|
| [GitLab 16.11](https://www.linkedin.com/events/7191139444916146176/) | 5.6K    | 2024/04 |
| [GitLab 17.0](https://www.linkedin.com/feed/update/urn:li:activity:7198692684436250626) | 6.8K    | 2024/05 |
| [GitLab 17 Release event recap](https://www.linkedin.com/video/live/urn:li:ugcPost:7212131667262492673/) | 7.3K    | 2024/06 |
| [Harnessing AI: GitLab’s Insights & Innovations](https://www.linkedin.com/events/7219699059933020163) | 6.3K    | 2024/07 |

#### パネリスト向け情報 {#information-for-panelists}

**放送／収録の前**

- アジェンダ、進行、プロモーションについて議論するために、Social Media チームや他のパネリストと一緒に一時的な Slack チャンネルに追加されます。
- 収録／放送の前に、技術チェック、トークポイントの確認、他のパネリストとの顔合わせのための 30 分間のウォークスルーに参加できるよう依頼されます。
- LinkedIn のイベントページにスピーカーとして追加されるため、あなたが LinkedIn でライブ配信することがネットワークに通知されます。
- イベントを宣伝する LinkedIn の投稿をあなたのネットワークと共有して、イベントのプロモーションにご協力ください。

**放送／収録中**

- 強い WiFi 信号があり、気が散らない明るい場所にいることを確認してください。
  - 理想的には、バーチャル背景を使用してください。
- GitLab のスワッグがあれば、ぜひ着用してください！
- マイクとしてヘッドセットを使用してください。

**放送の後**

- 放送にコメントした人々と交流してください。
- イベントビデオをあなたのネットワークと再共有してください。

## アーカイブされたプロジェクト {#archived-projects}

### コミュニティニュースレター {#community-newsletter}

- 目標: 開発者向けのコンテンツを共有し、コミュニティメンバーに今後のイベントについての情報を提供し、コミュニティ内での貢献を促進します。このニュースレターの対象オーディエンスは、私たちのコミュニティにおける GitLab コントリビューターの志望者と既存のコントリビューターです。このニュースレターはリードの獲得や創出には使用されません。
- 期間: 2022-2024
- [Organization エピック](https://gitlab.com/groups/gitlab-com/-/work_items/1821)
- メンテナー: @sugaroverflow
- アーカイブ:
  - [FY23 Newsletter Epic.](https://gitlab.com/groups/gitlab-com/-/epics/1915)
  - その他の過去のニュースレター Issue はすべて、[ラベル `Da-Type-Content::newsletter`](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/?sort=updated_desc&state=closed&label_name%5B%5D=DA-Type-Content::newsletter&first_page_size=20) を使ってクローズ済みの Issue を検索することで見つけられます。
  - [ニュースレター Issue の PDF（社内）](https://drive.google.com/drive/folders/1w086j7mTDRCUEtINm2AVivkxfctMQT2J)

### GitLab Duo Coffee Chat {#gitlab-duo-coffee-chat}

GitLab Duo の助けを借りて、DevSecOps ライフサイクル全体にわたる AI を活用したワークフローのライブ学習セッションです。私たちは議論し、探求し、リサーチし、学び、デバッグし、製品フィードバックや機能アイデアを作成し、新しい機能やワークフローを発見します。詳細は [FY25 Developer Relations エピック](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/475)（社内）を参照してください。

目標: コーヒーチャットは、お客様が GitLab Duo の使い方を学び、ベストプラクティスを採用するのに役立ちます。実例を示し、ミスをし、さまざまなルートを試し、より良い結果と DevSecOps 効率を達成することによって学びます。

メンテナー: [Michael Friedrich, @dnsmichi](https://gitlab.com/dnsmichi)

- [YouTube プレイリスト](https://go.gitlab.com/xReaA1)
- [プロジェクトを含む GitLab グループ](https://gitlab.com/gitlab-da/use-cases/ai/gitlab-duo-coffee-chat)
- [GitLab Duo](https://go.gitlab.com/Z1vBGD)
- [Talk: Efficient DevSecOps Workflows with a little help from AI](https://go.gitlab.com/T864XF) - [コンテンツエピック](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/402)
- [Organization Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/375)
- [スライドテンプレートとリソース](https://docs.google.com/presentation/d/1FBOxe43l4qY8KastAWjblphOLiktNtPjHgFNmNYf0Uw/edit#slide=id.g2a6734f20af_0_0)（録画のビデオ編集用）。

録画は [GitLab Duo Use Cases ドキュメント](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html) からもリンクされています。

#### プロセス {#process}

1. セッションのスコープを定義します（例: 30 分でアプリケーションを書く、COBOL のような新しいプログラミング言語を探求する）。Duo チャレンジでは、IDE または GitLab UI のコンテキストにとどまる必要があります。
1. ゲストを招待してコラボレーションします（オプション）
1. Zoom の録画を開始し、セッションの目標について短く紹介します。一人の場合は、OBS を使ってセッションを録画することもできます。
1. セッションを開始し、Duo Chat にどう始めるかを尋ね、Code Suggestions などでフォローアップします。
1. 終了するとき、または時間のために停止するときは、一息ついて、今日学んだことのまとめを提供します。
1. ビデオをエクスポートします。
1. 学びを強調するセッション（または IDE）のスクリーンショットを撮ります。スクリーンショットを [スライドのプレースホルダー](https://docs.google.com/presentation/d/1FBOxe43l4qY8KastAWjblphOLiktNtPjHgFNmNYf0Uw/edit#slide=id.g2b429ab8253_0_23) に追加し、セッションの詳細でテキストを編集し、再びスライドのスクリーンショットを作成します。これは Premiere Pro でのビデオイントロとして機能します。

Adobe Premiere Pro でのビデオ編集:

1. Adobe Premiere Pro で新しいプロジェクトを作成します。
1. 録画とイントロ／アウトロの画像アセットをインポートします。
1. ビデオを新しいシーケンスにドラッグします。
1. 最初の 3〜5 秒にイントロのスクリーンショットを追加します。右クリック > フレームサイズに合わせてスケール。
1. カミソリアイコンを使って、イントロシーケンスの後でビデオをカットします。最初の部分を選択してシーケンスを削除します。
1. 最後の 3〜5 秒に終了のスクリーンショットを追加します。右クリック > フレームサイズに合わせてスケール。
1. カミソリアイコンを使って、終了シーケンスの前でビデオをカットし、無音部分を削除します。最後の部分を選択してシーケンスを削除します。
1. 生のビデオをエクスポートします: `File > Export > Media`。

ビデオのアップロード:

1. [YouTube の GitLab Unfiltered アカウント](https://www.youtube.com/@GitLabUnfiltered/) にログインし、ビデオファイルをアップロードします。
1. セッションのタイトルを編集します: `GitLab Duo Coffee Chat: Challenge - Explain and Refactor COBOL programs` など。
1. ビデオの説明を 2〜3 文で何が期待できるかを編集します。すべてのドキュメント／ブログの URL を `Resources` エントリとして追加します。
1. 新しいウィンドウでビデオプレビューを開き、セクションをスクロールします。タイムスタンプを記録し、ビデオの説明に TOC を書き込みます。目次は視聴者がすばやくナビゲートするのに役立ちます。
1. `Playlist` - `GitLab Duo Coffee Chat` に追加します。
1. タグを追加します: `gitlab`、`gitlab-duo`、`ai`、`development` など。
1. ビデオを公開します。

配信

1. ビデオを [GitLab Use Case ドキュメント](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html)、Highspot、ブログ記事、ソーシャル投稿などに追加します。

### CI/CD Components Catalog {#ci-cd-components-catalog}

製品およびエンジニアリングと連携して、[GitLab がメンテナンスするコンポーネント](https://gitlab.com/components) の CI/CD テンプレート移行を通じて CI/CD コンポーネントカタログのシード化を支援します。コミュニティコンペティションやハッカソンからのコントリビューションのメンテナンスとレビューを支援します。学びをコンテンツやストーリーテリングに再利用します（[コンテンツエピック](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/399)）。詳細は [FY25 Developer Relations エピック](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/466)（社内）を参照してください。

このイニシアチブは [CI Adoption WG](/handbook/company/working-groups/customer-use-case-adoption/) の一部であり、Developer Relations による貢献（[エピック](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/317)）です。

目標: DevSecOps 効率のための CI/CD コンポーネントでお客様を支援します。ベストプラクティスを学び、ブログ記事、チュートリアル、ワークショップで共有します。

メンテナー: [Michael Friedrich, @dnsmichi](https://about.gitlab.com/company/team/#dnsmichi), [Itzik Gan Baruch, @iganbaruch](https://about.gitlab.com/company/team/#iganbaruch)

### Developer Relations Bot {#developer-relations-bot}

メンテナー: TBD。それまでは [Michael Friedrich](https://gitlab.com/dnsmichi) に尋ねてください。

このボットは、次のようなチームタスクの自動化を目指しています。

- チームメンバー向けの [リリースエバンジェリズム](/handbook/marketing/developer-relations/developer-advocacy/social-media/#release-evangelism) Issue を作成する。
- [Developer Advocacy のワークフロー](/handbook/marketing/developer-relations/developer-advocacy/workflow/) に従って Issue をトリアージする。
- 毎週月曜日に Issue レター（作成済み、クローズ済み、オープンな CFP）を生成する。

プロジェクト: [DevRel Bot](https://gitlab.com/gitlab-da/projects/devrel-bot)
