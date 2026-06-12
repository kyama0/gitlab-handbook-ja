---
title: "プロジェクト"
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/projects/
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
lastmod: 2026-06-08T11:30:44+02:00
translated_at: "2026-06-12T21:17:35Z"
translator: claude
stale: false
---

## はじめに

私たちは、公開されている [gitlab-da グループ](https://gitlab.com/gitlab-da)でプロジェクトを維持しています。このグループは Ultimate サブスクリプションにアクセスできます。

このグループは、ユースケース、デモ環境、ワークショップ、チュートリアル、保守対象のプロジェクト、プレイグラウンドでの研究、その他の学習リソースを整理しています。

## 組織構成

すべてのプロジェクトは、トップレベルのサブグループに整理されています。トップレベルの名前空間 `gitlab.com/gitlab-da` にはプロジェクトを置くことはできません。

| グループ        | DRI | 説明  |
|--------------|-----|--------------|
| [demo-environments](https://gitlab.com/gitlab-da) | all | チームが維持する長期のデモ環境 |
| [conferences](https://gitlab.com/gitlab-da/conferences) | all / @fjdiaz | [カンファレンス、イベント、ミートアップなど](/handbook/marketing/developer-relations/events/#event-booth-training)でのチームメンバー向けの公開デモのグループ  |
| [playground](https://gitlab.com/gitlab-da/playground) | all | サポートなしのテストプロジェクト、シンプルなデモケース、コードスニペットなど。ブログ記事からリンクする際は、対応する use-cases または demo-environment グループに移動してください。 |
| [use-cases](https://gitlab.com/gitlab-da/use-cases) | all | 製品デモ、講演、ソートリーダーシップ、研究のための特定トピックのユースケース |
| [projects](https://gitlab.com/gitlab-da/projects) | all | チームが維持する本番プロジェクト。ブログプロジェクトやデモには、専用の `use-cases` グループを使用してください。 |
| [tutorials](https://gitlab.com/gitlab-da/tutorials) | all | チュートリアルとワークショップ。 |

### アクセス

アクセスは [`gitlab-da` グループのチームメンバー](https://gitlab.com/groups/gitlab-da/-/group_members)に限定されています。メンバーの追加/削除には、変更を文書化するための [Issue が必要](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues)です。

許可される例外は、外部ユーザーを一時的にワークショッププロジェクトに招待するワークショップのサブグループです。一時的に追加されたすべてのユーザーは、[**必ず** 7 日間のメンバーシップの有効期限を使用する必要があります](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project)。

### 新しいプロジェクトまたはグループを追加する

1. プロジェクトのスコープを定義し、トップレベルグループのいずれかに追加します。
1. 不確かな場合は、まず [playground](https://gitlab.com/gitlab-da/playground) グループにプロジェクトを作成し、後でプロジェクト設定で本番の場所に移動します。

**Issue/MR で変更を最初に提案することなく、新しいトップレベルグループを作成しないでください。**

#### README

プロジェクト/グループの目的を説明する `README.md` ファイルを必ず追加し（テキストを `Settings > General > Description` にコピーして）、すべてのリソース（Issue、direction ページ、ブログ記事など）をリンクしてください。GitLab はプロジェクトの README に加えて [グループ README](https://docs.gitlab.com/ee/user/group/manage#add-group-readme)もサポートしています。

任意ですが推奨: トピックを示すプロジェクト/グループのアバター画像を追加してください。画像を選ぶ際は、Brand の[クリエイティブアセットの調達に関するガイダンス](/handbook/marketing/brand-and-product-marketing/design/#sourcing-creative-assets)を参照してください。ヒント: [画像のサイズを変更](/handbook/tools-and-tips/#resizing-images)できます。

また、`.gitignore`、`AGENTS.md`、CI/CD 設定など、その他のベストプラクティスも、適用可能な場合はデフォルトで適用してください。

#### グループ: デモ環境

長期にわたって維持されるデモ環境です。説明欄に異なるオーディエンスと DRI が記載されています。
必要に応じて、デモのセットアップを説明するハンドブックページや `demo.md` ファイルを追加し、他のチームメンバーもデモ環境を立ち上げられるよう支援してください。

#### グループ: ユースケース

1. ブログ記事やソートリーダーシップの研究は、通常、ユースケースや特定のトピックを記述しています。既存の [use-cases](https://gitlab.com/gitlab-da/use-cases) をレビューし、新しいプロジェクトまたはサブグループを追加してください。
1. ユースケースが新規の場合は、新しいサブグループを作成し、説明を追加し、ハンドブックの組織構成を更新してください。あなた自身を DRI としてテーブルに追加してください。

#### グループ: チュートリアルとワークショップ

[チュートリアル](https://gitlab.com/gitlab-da/tutorials)は、特定のトピックを学ぶのに役立つコンテンツを提供し、プロジェクトを維持する DRI が割り当てられています。チュートリアルは、ブログ記事やウェビナーなどで参照されます。

どこから始めればよいか不確かな場合は、まず新しいチュートリアルのサブグループを作成し、後でたとえばコンテンツをワークショップに移行するかどうかを決定してください。

#### グループ: プロジェクト

[projects](https://gitlab.com/gitlab-da/projects) グループには、本番で使用されるすべてのプロジェクトが含まれています。チームはワークフローと効率のためにその機能に依存しているため、これらはチームのハンドブックで充実したドキュメントを必要とします。私たちはまた、GitLab Pages とカスタムドメインで提供されるマイクロサイトも維持しています。

### プロジェクト/グループを削除する

私たちのデモプロジェクトは、ブログ記事やその他の公開コンテンツで参照されています。これらのプロジェクトの非推奨化をユーザーに知らせるために、可能であれば README の注記を含めて、アーカイブすることが推奨されます。

## プロジェクトのリソース

一部のプロジェクトでは、Kubernetes クラスター、self-managed の CI/CD Runner、クラウド VM、ドメインなどへのアクセスが必要です。チームは、GitLab.com SaaS デモ向けにこの種の外部インフラ依存関係をホスティングできる Google Cloud または AWS のクラウドリソースにアクセスできます。詳しくは [Cloud Resources for Developer Relations ハンドブック](/handbook/marketing/developer-relations/workflows-tools/cloud-resources)をご覧ください。

### ベストプラクティス

1. プロジェクトのセットアップを README ファイル（または Git リポジトリの `docs/` 構造）に文書化します。
1. デモケースと競合しない限り、常に[セキュリティスキャン](https://docs.gitlab.com/ee/user/application_security/)をデフォルトで追加します。
1. GitLab アプリには、アカウントからの OAuth セットアップが必要です。誰もがアプリを維持・更新できるよう、グループ共有アカウント（たとえば `demo-tanuki`）を使用してください。

### 開発環境

[Development Environments for Developer Advocates](/handbook/marketing/developer-relations/developer-advocacy/dev-environments/) を参照してください。

## 製品導入のイニシアチブ

### Social チームと連携した LinkedIn Live

GitLab は、月次リリースを紹介し、製品アップデートやソートリーダーシップを共有するために、通常は毎月第 4 木曜日に月次の LinkedIn Live 配信を開催しています。各配信には、GitLab のチームメンバーとスペシャルゲストが登場し、AI を活用したソフトウェア開発の最新事情について議論します。これは [Developer Advocacy](/handbook/marketing/developer-relations/developer-advocacy/) と [Social Media](/handbook/marketing/integrated-marketing/digital-strategy/social-marketing/) の両チームによる共同プロジェクトです。

エピソードは通常 30 分間で、4 〜 5 名のパネリストとモデレーターが登場し、あらかじめ決められたトピックや製品アップデートについて議論します。場合によっては、会話は事前に録画されます。

| エピソードのタイトル                                                                 | 視聴回数   | 月   |
|-------------------------------------------------------------------------------|---------|---------|
| [GitLab 16.11](https://www.linkedin.com/events/7191139444916146176/) | 5.6K    | 2024/04 |
| [GitLab 17.0](https://www.linkedin.com/feed/update/urn:li:activity:7198692684436250626) | 6.8K    | 2024/05 |
| [GitLab 17 Release event recap](https://www.linkedin.com/video/live/urn:li:ugcPost:7212131667262492673/) | 7.3K    | 2024/06 |
| [Harnessing AI: GitLab’s Insights & Innovations](https://www.linkedin.com/events/7219699059933020163) | 6.3K    | 2024/07 |

#### パネリスト向けの情報

**配信/録画の前に**

- ソーシャルメディアチームや他のパネリストと一緒に、アジェンダ、段取り、プロモーションについて話し合うための一時的な Slack チャンネルに追加されます。
- 録画/配信の前に、技術チェックを行い、話のポイントを確認し、他のパネリストと顔合わせをするための 30 分のウォークスルーに参加できるよう依頼されます。
- LinkedIn のイベントページに登壇者として追加されるため、あなたが LinkedIn でライブ配信を行うことがあなたのネットワークに通知されます。
- イベントを宣伝する LinkedIn の投稿をあなたのネットワークと共有して、イベントのプロモーションにご協力ください。

**配信/録画の最中**

- 強い WiFi 信号があり、気が散るもののない、十分に明るい場所にいることを確認してください。
  - 理想的には、バーチャル背景を使用してください。
- GitLab のスワッグを持っている場合は、着用してください！
- マイクとしてヘッドセットを使用してください。

**配信の後に**

- 配信にコメントした人々とエンゲージしてください。
- イベントの動画をあなたのネットワークと再共有してください。

## アーカイブ済みのプロジェクト

### コミュニティニュースレター

- ゴール: 開発者向けのコンテンツを共有し、コミュニティメンバーに今後のイベントについて知らせ、コミュニティ内でのコントリビューションを促進する。このニュースレターのターゲットオーディエンスは、私たちのコミュニティにおける GitLab のコントリビューター志望者および既存のコントリビューターです。このニュースレターは、リードの獲得や創出には使用しません。
- 期間: 2022-2024
- [組織エピック](https://gitlab.com/groups/gitlab-com/-/work_items/1821)
- メンテナー: @sugaroverflow
- アーカイブ:
  - [FY23 Newsletter Epic.](https://gitlab.com/groups/gitlab-com/-/epics/1915)
  - その他過去のすべてのニュースレターの Issue は、[ラベル `Da-Type-Content::newsletter`](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/?sort=updated_desc&state=closed&label_name%5B%5D=DA-Type-Content::newsletter&first_page_size=20)を使用してクローズ済みの Issue を検索することで見つけられます。
  - [Newsletter issue PDFs (internal)](https://drive.google.com/drive/folders/1w086j7mTDRCUEtINm2AVivkxfctMQT2J)

### GitLab Duo Coffee Chat

GitLab Duo の助けを借りて、DevSecOps ライフサイクル全体にわたって AI を活用したワークフローを使うライブ学習セッションです。私たちは議論し、探求し、調査し、学び、デバッグし、製品フィードバックや機能のアイデアを生み出し、新しい機能やワークフローを発見します。詳しくは [FY25 Developer Relations エピック](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/475)（内部）をご覧ください。

ゴール: コーヒーチャットは、私たちの顧客が GitLab Duo の使い方を学び、ベストプラクティスを採用できるよう支援します。実例を示し、間違いを犯し、さまざまなルートを試し、より良い結果と DevSecOps の効率を達成することによって行います。

メンテナー: [Michael Friedrich, @dnsmichi](https://gitlab.com/dnsmichi)

- [YouTube playlist](https://go.gitlab.com/xReaA1)
- [GitLab group with projects](https://gitlab.com/gitlab-da/use-cases/ai/gitlab-duo-coffee-chat)
- [GitLab Duo](https://go.gitlab.com/Z1vBGD)
- [Talk: Efficient DevSecOps Workflows with a little help from AI](https://go.gitlab.com/T864XF) - [content epic](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/402)
- [Organization issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/375)
- 録画動画の編集用の[スライドテンプレートとリソース](https://docs.google.com/presentation/d/1FBOxe43l4qY8KastAWjblphOLiktNtPjHgFNmNYf0Uw/edit#slide=id.g2a6734f20af_0_0)。

録画は、[GitLab Duo Use Cases ドキュメント](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html)からもリンクされています。

#### プロセス

1. セッションのスコープを定義します（たとえば、30 分でアプリケーションを書く、または COBOL のような新しいプログラミング言語を探求する）。Duo Challenges では、IDE または GitLab UI のコンテキストにとどまる必要があります。
1. ゲストを招待してコラボレーションします（任意）
1. Zoom の録画を開始し、セッションのゴールについて短く紹介します。1 人の場合は、OBS を使用してセッションを録画することもできます。
1. セッションを開始し、Duo Chat に始め方を尋ね、Code Suggestions などで続けます。
1. 終了/時間で停止するときは、一息ついて、今日学んだことのまとめを提供します。
1. 動画をエクスポートします。
1. 学びを際立たせるセッション（または IDE）のスクリーンショットを撮ります。スクリーンショットを[スライドのプレースホルダー](https://docs.google.com/presentation/d/1FBOxe43l4qY8KastAWjblphOLiktNtPjHgFNmNYf0Uw/edit#slide=id.g2b429ab8253_0_23)に追加し、セッションの詳細でテキストを編集し、再度スライドのスクリーンショットを作成します。これは Premiere Pro で動画のイントロダクションとして使用します。

Adobe Premiere Pro での動画編集:

1. Adobe Premiere Pro で新しいプロジェクトを作成します。
1. 録画とイントロ/アウトロの画像アセットをインポートします。
1. 動画を新しいシーケンスにドラッグします。
1. 最初の 3 〜 5 秒にイントロのスクリーンショットを追加します。右クリック > フレームサイズに合わせてスケール。
1. レイザーアイコンを使用して、イントロシーケンスの後で動画をカットします。最初の部分を選択してシーケンスを削除します。
1. 最後の 3 〜 5 秒に終了のスクリーンショットを追加します。右クリック > フレームサイズに合わせてスケール。
1. レイザーアイコンを使用して、終了シーケンスの前で動画をカットし、無音部分を削除します。最後の部分を選択してシーケンスを削除します。
1. 生の動画をエクスポートします: `File > Export > Media`。

動画のアップロード:

1. [YouTube の GitLab Unfiltered アカウント](https://www.youtube.com/@GitLabUnfiltered/)にログインし、動画ファイルをアップロードします。
1. セッションのタイトルを編集します: `GitLab Duo Coffee Chat: Challenge - Explain and Refactor COBOL programs` など。
1. 何が期待できるかを 2 〜 3 文で動画の説明欄に編集します。すべてのドキュメント/ブログ URL を `Resources` のエントリとして追加します。
1. 新しいウィンドウで動画のプレビューを開き、各セクションをスクロールします。タイムスタンプをメモし、動画の説明欄に目次を書き込みます。目次は視聴者がすばやく移動するのに役立ちます。
1. `Playlist` - `GitLab Duo Coffee Chat` に追加します。
1. タグを追加します: `gitlab`、`gitlab-duo`、`ai`、`development` など。
1. 動画を公開します。

配信

1. 動画を [GitLab Use Case ドキュメント](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html)、Highspot、ブログ記事、ソーシャル投稿などに追加します。

### CI/CD Components Catalog

[GitLab がメンテナンスするコンポーネント](https://gitlab.com/components)の CI/CD テンプレートの移行を通じて、CI/CD コンポーネントカタログのシードを支援するために、製品およびエンジニアリングと協力します。コミュニティのコンペティションやハッカソンからのコントリビューションの保守とレビューを支援します。学んだことをコンテンツやストーリーテリングに再利用します（[content epic](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/399)）。詳しくは [FY25 Developer Relations エピック](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/466)（内部）をご覧ください。

このイニシアチブは、[CI Adoption WG](/handbook/company/working-groups/customer-use-case-adoption/) と Developer Relations によるコントリビューション（[エピック](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/317)）の一部です。

ゴール: DevSecOps の効率のために、CI/CD コンポーネントで顧客を支援する。ベストプラクティスを学び、ブログ記事、チュートリアル、ワークショップで共有します。

メンテナー: [Michael Friedrich, @dnsmichi](https://about.gitlab.com/company/team/#dnsmichi)、[Itzik Gan Baruch, @iganbaruch](https://about.gitlab.com/company/team/#iganbaruch)

### Developer Relations Bot

メンテナー: TBD。当面は [Michael Friedrich](https://gitlab.com/dnsmichi) に尋ねてください。

このボットは、次のようなチームのタスクを自動化することを目的としています。

- チームメンバー向けに [release evangelism](/handbook/marketing/developer-relations/developer-advocacy/social-media/#release-evangelism) の Issue を作成する。
- [Developer Advocacy ワークフロー](/handbook/marketing/developer-relations/developer-advocacy/workflow/)に従って Issue をトリアージする。
- 毎週月曜日に Issue レター（作成済み、クローズ済み、オープン中の CFP）を生成する。

プロジェクト: [DevRel Bot](https://gitlab.com/gitlab-da/projects/devrel-bot)
