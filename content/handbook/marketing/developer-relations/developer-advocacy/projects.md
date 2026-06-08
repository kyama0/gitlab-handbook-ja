---
title: "Projects"
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/projects/
upstream_sha: 3f9509996a1f405d6126d2081aebad493e4a3d21
lastmod: 2026-06-08T13:31:46-07:00
translated_at: "2026-06-08T00:00:00Z"
translator: claude
stale: false
---

## はじめに

私たちは、パブリックな [gitlab-da グループ](https://gitlab.com/gitlab-da)でプロジェクトを維持しています。このグループは Ultimate サブスクリプションにアクセスできます。

このグループは、ユースケース、デモ環境、ワークショップ、チュートリアル、維持されているプロジェクト、プレイグラウンドでのリサーチ、その他の学習リソースを整理しています。

## 組織構造

すべてのプロジェクトは、トップレベルのサブグループに整理されています。トップレベルの名前空間 `gitlab.com/gitlab-da` には、プロジェクトを置くことは許可されていません。

| グループ        | DRI | 説明  |
|--------------|-----|--------------|
| [demo-environments](https://gitlab.com/gitlab-da) | all | チームが維持する長期デモ環境 |
| [conferences](https://gitlab.com/gitlab-da/conferences) | all / @fjdiaz | [カンファレンス、イベント、ミートアップなど](/handbook/marketing/developer-relations/events/#event-booth-training)でチームメンバーが使うパブリックデモのためのグループ  |
| [playground](https://gitlab.com/gitlab-da/playground) | all | サポートなしのテストプロジェクト、シンプルなデモケース、コードスニペットなど。ブログ記事からリンクする場合は、対応する use-cases または demo-environment グループに移動してください。 |
| [use-cases](https://gitlab.com/gitlab-da/use-cases) | all | プロダクトデモ、講演、ソートリーダーシップ、リサーチ向けの特定トピックのユースケース |
| [projects](https://gitlab.com/gitlab-da/projects) | all | チームが維持する本番プロジェクト。ブログ用プロジェクトやデモには、特定の `use-cases` グループを使ってください。 |
| [tutorials](https://gitlab.com/gitlab-da/tutorials) | all | チュートリアルとワークショップ。 |

### アクセス

アクセスは [`gitlab-da` グループのチームメンバー](https://gitlab.com/groups/gitlab-da/-/group_members)に限定されています。メンバーの追加・削除には、変更を記録するために [Issue が必要です](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues)。

許可される例外は、外部ユーザーを一時的にワークショッププロジェクトに招待するワークショップのサブグループです。一時的に追加されるすべてのユーザーは、[**必ず** 7 日間のメンバーシップ有効期限を使用してください](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project)。

### 新しいプロジェクトやグループの追加

1. プロジェクトのスコープを定義し、トップレベルグループのいずれかに追加します。
1. 迷ったときは、まず [playground](https://gitlab.com/gitlab-da/playground) グループでプロジェクトを作成し、後でプロジェクト設定から本番の場所に移動します。

**Issue/MR で変更を提案せずに、新しいトップレベルグループを作成しないでください。**

#### README

プロジェクト/グループの目的を説明する `README.md` ファイルを必ず追加し（そのテキストを `Settings > General > Description` にコピーしてください）、すべてのリソース（Issue、Direction ページ、ブログ記事など）をリンクしてください。GitLab はプロジェクト README に加えて、[グループ README](https://docs.gitlab.com/ee/user/group/manage#add-group-readme) もサポートしています。

任意ですが推奨: トピックを示すプロジェクト/グループのアバター画像を追加してください。画像を選ぶ際は、Brand の[クリエイティブアセットの調達に関するガイダンス](/handbook/marketing/brand-and-product-marketing/design/#sourcing-creative-assets)を参照してください。ヒント: [画像のサイズ変更](/handbook/tools-and-tips/#resizing-images)ができます。

また、`.gitignore`、`AGENTS.md`、CI/CD 設定など、その他のベストプラクティスも、該当する場合はデフォルトで適用してください。

#### グループ: Demo environments

長期的に維持されるデモ環境で、対象者や DRI が異なり、それらは説明欄に記載されています。
必要に応じて、デモのセットアップを説明するハンドブックページや `demo.md` ファイルを追加し、他のチームメンバーがそのデモ環境を立ち上げられるよう手助けしてください。

#### グループ: Use Cases

1. ブログ記事やソートリーダーシップのリサーチは、通常、ユースケースや特定のトピックを説明します。既存の [use-cases](https://gitlab.com/gitlab-da/use-cases) をレビューし、新しいプロジェクトやサブグループを追加してください。
1. ユースケースが新しいものであれば、新しいサブグループを作成し、説明を追加し、ハンドブックの組織構造を更新します。テーブルに自分を DRI として追加してください。

#### グループ: Tutorials and Workshops

[Tutorials](https://gitlab.com/gitlab-da/tutorials) は、特定のトピックを学ぶための役立つコンテンツを提供し、プロジェクトを維持する DRI が割り当てられています。チュートリアルは、ブログ記事やウェビナーなどで参照されます。

どこから始めればよいか迷ったときは、まず新しいチュートリアルのサブグループを作成し、後でそのコンテンツを例えばワークショップに移行するかどうかを決めてください。

#### グループ: Projects

[projects](https://gitlab.com/gitlab-da/projects) グループには、本番で使われるすべてのプロジェクトが含まれます。チームはワークフローや効率のためにその機能に依存しているため、これらのプロジェクトにはチームハンドブックでの詳細なドキュメントが必要です。私たちはまた、GitLab Pages とカスタムドメインで提供されるマイクロサイトも維持しています。

### プロジェクト/グループの削除

私たちのデモプロジェクトは、ブログ記事やその他のパブリックなコンテンツで参照されています。これらのプロジェクトをアーカイブして、可能であれば README のメモも添えて、非推奨であることをユーザーに知らせることが推奨されます。

## プロジェクトリソース

一部のプロジェクトは、Kubernetes クラスター、セルフマネージドの CI/CD Runner、クラウド VM、ドメインなどへのアクセスを必要とします。チームは、GitLab.com SaaS デモ向けにこの種の外部インフラ依存をホストできる Google Cloud または AWS のクラウドリソースにアクセスできます。詳しくは、[Cloud Resources for Developer Relations ハンドブック](/handbook/marketing/developer-relations/workflows-tools/cloud-resources)で確認してください。

### ベストプラクティス

1. プロジェクトのセットアップを README ファイル（または Git リポジトリの `docs/` 構造の中）に文書化します。
1. デモケースと競合しない限り、デフォルトで必ず[セキュリティスキャン](https://docs.gitlab.com/ee/user/application_security/)を追加します。
1. GitLab アプリには、アカウントからの OAuth セットアップが必要です。グループ共有アカウント（例: `demo-tanuki`）を使用して、誰もがアプリを維持・更新できるようにしてください。

### 開発環境

[Development Environments for Developer Advocates](/handbook/marketing/developer-relations/developer-advocacy/dev-environments/) を参照してください。

## プロダクト導入の取り組み

### LinkedIn Lives in Collaboration with the Social team

GitLab は、月次リリースを取り上げ、プロダクトのアップデートやソートリーダーシップを共有するために、通常毎月第 4 木曜日に月次の LinkedIn Live 配信を開催しています。各配信には GitLab のチームメンバーと特別ゲストが登場し、AI を活用したソフトウェア開発の最新動向について議論します。これは [Developer Advocacy](/handbook/marketing/developer-relations/developer-advocacy/) と [Social Media](/handbook/marketing/integrated-marketing/digital-strategy/social-marketing/) の両チームによる協働プロジェクトです。

エピソードは通常 30 分で、4 〜 5 名のパネリストとモデレーター 1 名が、あらかじめ決められたトピックやプロダクトのアップデートについて議論します。場合によっては、会話が事前収録されることもあります。

| Episode Title                                                                 | Views   | Month   |
|-------------------------------------------------------------------------------|---------|---------|
| [GitLab 16.11](https://www.linkedin.com/events/7191139444916146176/) | 5.6K    | 2024/04 |
| [GitLab 17.0](https://www.linkedin.com/feed/update/urn:li:activity:7198692684436250626) | 6.8K    | 2024/05 |
| [GitLab 17 Release event recap](https://www.linkedin.com/video/live/urn:li:ugcPost:7212131667262492673/) | 7.3K    | 2024/06 |
| [Harnessing AI: GitLab’s Insights & Innovations](https://www.linkedin.com/events/7219699059933020163) | 6.3K    | 2024/07 |

#### パネリスト向けの情報

**配信/収録の前**

- ソーシャルメディアチームや他のパネリストとともに、アジェンダ、段取り、プロモーションについて議論するための一時的な Slack チャンネルに追加されます。
- 収録/配信の前に、テックチェックを行い、トーキングポイントを確認し、他のパネリストと顔合わせするための 30 分間のウォークスルーへの参加をお願いされます。
- あなたが LinkedIn でライブ配信することがあなたのネットワークに通知されるよう、LinkedIn イベントページにスピーカーとして追加されます。
- イベントを宣伝する LinkedIn 投稿をあなたのネットワークと共有して、イベントのプロモーションにご協力ください。

**配信/収録の最中**

- 強い Wi-Fi 信号があり、十分に明るく、邪魔の入らない場所にいることを確認してください。
  - 理想的には、バーチャル背景を使用してください。
- GitLab のスワッグを持っている場合は、ぜひ着用してください!
- マイクとしてヘッドセットを使用してください。

**配信の後**

- 配信にコメントした人々と交流してください。
- イベント動画をあなたのネットワークと再共有してください。

## アーカイブされたプロジェクト

### Community newsletter

- Goal: 開発者向けのコンテンツを共有し、コミュニティメンバーに今後のイベントについて知らせ、コミュニティ内でのコントリビューションを促進すること。このニュースレターの対象読者は、私たちのコミュニティにおける GitLab のコントリビューター志望者および既存のコントリビューターです。このニュースレターは、リードの獲得や創出には使用されません。
- Duration: 2022-2024
- [Organization epic](https://gitlab.com/groups/gitlab-com/-/work_items/1821)
- Maintainer: @sugaroverflow
- Archive:
  - [FY23 Newsletter Epic.](https://gitlab.com/groups/gitlab-com/-/epics/1915)
  - その他の過去のニュースレターの Issue はすべて、[ラベル `Da-Type-Content::newsletter`](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/?sort=updated_desc&state=closed&label_name%5B%5D=DA-Type-Content::newsletter&first_page_size=20)を使ってクローズ済みの Issue を検索すると見つかります。
  - [Newsletter issue PDFs (internal)](https://drive.google.com/drive/folders/1w086j7mTDRCUEtINm2AVivkxfctMQT2J)

### GitLab Duo Coffee Chat

GitLab Duo の助けを借りて、DevSecOps ライフサイクル全体にわたる AI を活用したワークフローを学ぶライブ学習セッションです。私たちは議論し、探求し、リサーチし、学び、デバッグし、プロダクトフィードバックや機能アイデアを生み出し、新しい機能やワークフローを発見します。詳しくは [FY25 Developer Relations epic](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/475)（internal）で確認してください。

Goal: コーヒーチャットは、私たちの顧客が GitLab Duo の使い方を学び、ベストプラクティスを取り入れる手助けをします。実例を示し、間違いを犯し、さまざまな道を試し、より良い結果と DevSecOps の効率を実現することによってです。

Maintainer: [Michael Friedrich, @dnsmichi](https://gitlab.com/dnsmichi)

- [YouTube playlist](https://go.gitlab.com/xReaA1)
- [GitLab group with projects](https://gitlab.com/gitlab-da/use-cases/ai/gitlab-duo-coffee-chat)
- [GitLab Duo](https://go.gitlab.com/Z1vBGD)
- [Talk: Efficient DevSecOps Workflows with a little help from AI](https://go.gitlab.com/T864XF) - [content epic](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/402)
- [Organization issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/375)
- 録画動画の編集用の[スライドテンプレートとリソース](https://docs.google.com/presentation/d/1FBOxe43l4qY8KastAWjblphOLiktNtPjHgFNmNYf0Uw/edit#slide=id.g2a6734f20af_0_0)。

録画は [GitLab Duo Use Cases ドキュメント](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html)からもリンクされています。

#### プロセス

1. セッションのスコープを定義します（例: 30 分でアプリケーションを書く、あるいは COBOL のような新しいプログラミング言語を探求する）。Duo Challenge では、IDE または GitLab UI のコンテキストにとどまる必要があります。
1. ゲストを招待して協働します（任意）
1. Zoom の録画を開始し、セッションの目的について短く紹介します。1 人のときは、OBS を使ってセッションを録画することもできます。
1. セッションを開始し、Duo Chat に始め方を尋ね、Code Suggestions などで続けます。
1. 終了するとき、または時間で中断するときは、一息ついて、今日学んだことのまとめを提供します。
1. 動画をエクスポートします。
1. 学びを際立たせるスクリーンショットをセッション（または IDE）から撮ります。そのスクリーンショットを[スライドのプレースホルダー](https://docs.google.com/presentation/d/1FBOxe43l4qY8KastAWjblphOLiktNtPjHgFNmNYf0Uw/edit#slide=id.g2b429ab8253_0_23)に追加し、セッションの詳細でテキストを編集し、再びスライドのスクリーンショットを作成します。これは Premiere Pro での動画イントロとして使われます。

Adobe Premiere Pro での動画編集:

1. Adobe Premiere Pro で新しいプロジェクトを作成します。
1. 録画と、イントロ/アウトロの画像アセットをインポートします。
1. 動画を新しいシーケンスにドラッグします。
1. 最初の 3 〜 5 秒にイントロのスクリーンショットを追加します。右クリック > フレームサイズに合わせてスケール。
1. レーザーアイコンを使って、イントロシーケンスの後で動画をカットします。最初の部分を選択してシーケンスを削除します。
1. 最後の 3 〜 5 秒にエンディングのスクリーンショットを追加します。右クリック > フレームサイズに合わせてスケール。
1. レーザーアイコンを使って、エンディングシーケンスの前で動画をカットし、無音部分を取り除きます。最後の部分を選択してシーケンスを削除します。
1. 生の動画をエクスポートします: `File > Export > Media`。

動画アップロード:

1. [YouTube の GitLab Unfiltered アカウント](https://www.youtube.com/@GitLabUnfiltered/)にログインし、動画ファイルをアップロードします。
1. セッションのタイトルを編集します: `GitLab Duo Coffee Chat: Challenge - Explain and Refactor COBOL programs` などのように。
1. 動画の説明を、何が期待できるかを 2 〜 3 文で編集します。すべてのドキュメント/ブログ URL を `Resources` エントリとして追加します。
1. 動画プレビューを新しいウィンドウで開き、各セクションをスクロールします。タイムスタンプをメモし、目次を動画の説明に書き込みます。目次は視聴者が素早くナビゲートする助けになります。
1. `Playlist` - `GitLab Duo Coffee Chat` に追加します。
1. タグを追加します: `gitlab`、`gitlab-duo`、`ai`、`development` など。
1. 動画を公開します。

配信

1. 動画を [GitLab Use Case ドキュメント](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html)、Highspot、ブログ記事、ソーシャル投稿などに追加します。

### CI/CD Components Catalog

[GitLab がメンテナンスするコンポーネント](https://gitlab.com/components)向けの CI/CD テンプレート移行を通じて、CI/CD コンポーネントカタログのシーディングを助けるために、プロダクトおよびエンジニアリングと協働します。コミュニティコンペティションやハッカソンからのコントリビューションのメンテナンスとレビューを手伝います。学びをコンテンツやストーリーテリングに再利用します（[content epic](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/399)）。詳しくは [FY25 Developer Relations epic](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/466)（internal）で確認してください。

この取り組みは、[CI Adoption WG](/handbook/company/working-groups/customer-use-case-adoption/) と Developer Relations によるコントリビューション（[epic](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/317)）の一部です。

Goal: DevSecOps の効率のために CI/CD コンポーネントで顧客を支援すること。ベストプラクティスを学び、ブログ記事、チュートリアル、ワークショップで共有します。

Maintainers: [Michael Friedrich, @dnsmichi](https://about.gitlab.com/company/team/#dnsmichi), [Itzik Gan Baruch, @iganbaruch](https://about.gitlab.com/company/team/#iganbaruch)

### Developer Relations Bot

Maintainer: TBD。それまでは [Michael Friedrich](https://gitlab.com/dnsmichi) に尋ねてください。

このボットは、以下のようなチームのタスクを自動化することを目指しています。

- チームメンバー向けの [release evangelism](/handbook/marketing/developer-relations/developer-advocacy/social-media/#release-evangelism) Issue を作成する。
- [Developer Advocacy workflows](/handbook/marketing/developer-relations/developer-advocacy/workflow/) に従って Issue をトリアージする。
- 毎週月曜日に Issue レター（作成済み、クローズ済み、オープン中の CFP）を生成する。

Project: [DevRel Bot](https://gitlab.com/gitlab-da/projects/devrel-bot)
