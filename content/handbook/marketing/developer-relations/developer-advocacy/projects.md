---
title: "プロジェクト"
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/projects/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-30T16:57:54+00:00"
---

## はじめに

私たちはプロジェクトをパブリックな [gitlab-da グループ](https://gitlab.com/gitlab-da) でメンテナンスしています。このグループは Ultimate サブスクリプションへのアクセス権を持っています。

このグループは、ユースケース、ワークショップ、チュートリアル、メンテナンスされている[オープンソースプロジェクト](/handbook/marketing/developer-relations/developer-advocacy/oss-contributions/)、デモプレイグラウンド、ソートリーダーシップリサーチ、その他の学習リソースを整理しています。

## 組織構造

すべてのプロジェクトはトップレベルのサブグループで整理されています。トップレベルの名前空間 `gitlab.com/gitlab-da` には、プロジェクトを置くことはできません。

| グループ | DRI | 説明 |
|--------------|-----|--------------|
| [conferences](https://gitlab.com/gitlab-da/conferences) | @fjdiaz | [カンファレンス、イベント、ミートアップなど](/handbook/marketing/developer-relations/events/#event-booth-training)でチームメンバーが使用するパブリックデモ用のグループ |
| [playground](https://gitlab.com/gitlab-da/playground) | all | テストプロジェクト、シンプルなデモケース、コードスニペットなど、サポートなし。ブログ記事からリンクする際は、対応するユースケースグループに移動してください。 |
| [use-cases](https://gitlab.com/gitlab-da/use-cases) | all | 製品デモ、トーク、ソートリーダーシップ、リサーチ向けの特定トピックのユースケース |
| [projects](https://gitlab.com/gitlab-da/projects) | @abuango | チームによってメンテナンスされる本番プロジェクト。ブログプロジェクトとデモには、特定の `use-cases` グループを使用してください。 |
| [projects/devrel-bot](https://gitlab.com/gitlab-da/projects/devrel-bot) | @abuango | デベロッパーアドボカシーとデベロッパーリレーションズのワークフロー向けの Issue トリアージとオートメーションワークフロー。 |
| [projects/hide-duo-beta-trial](https://gitlab.com/gitlab-da/projects/hide-duo-beta-trial) | @abuango | GitLab UI で Beta/Trial ウィジェットを非表示にする Chrome 拡張機能。 |
| [projects/discourse-assets](https://gitlab.com/gitlab-da/projects/discourse-assets) | @sugaroverflow @dnsmichi | [GitLab Discourse フォーラム](/handbook/marketing/developer-relations/workflows-tools/forum/)のアセットとカスタマイズ。 |
| [tutorials](https://gitlab.com/gitlab-da/tutorials) | all | |
| [tutorials/security-and-governance](https://gitlab.com/gitlab-da/tutorials/security-and-governance) | @fjdiaz | このグループには、GitLab のセキュリティとガバナンスのツールに関する各種プロジェクトとドキュメントが含まれています。 |
| [unmaintained](https://gitlab.com/gitlab-da/unmaintained) | - | もうメンテナンスされていないが、透明性のためにパブリックなままにしているプロジェクト、チュートリアル、ユースケース |
| [workshops](https://gitlab.com/gitlab-da/workshops) | all | チームが提供するワークショップグループとプロジェクト |

ユースケースの概要:

| グループ | DRI | 説明 |
|--------------|-----|--------------|
| [use-cases/ai](https://gitlab.com/gitlab-da/use-cases/ai) | all | [GitLab Duo ワークフロー、コーヒーチャット、AI 学習、ユースケース](https://about.gitlab.com/gitlab-duo/) |
| [use-cases/ai/ai-applications](https://gitlab.com/gitlab-da/use-cases/ai/ai-applications) | @sugaroverflow | GitLab Duo を使ったサンプルアプリケーション |
| [use-cases/ai/ai-workflows](https://gitlab.com/gitlab-da/use-cases/ai/ai-workflows) | @dnsmichi | [GitLab Duo](https://about.gitlab.com/gitlab-duo/) [プロンプト](https://gitlab.com/gitlab-da/use-cases/ai/ai-workflows/gitlab-duo-prompts)と[チャレンジ](https://gitlab.com/gitlab-da/use-cases/ai/ai-workflows/gitlab-duo-challenges) (演習用ソースコードと自己学習モジュール付き、[ドキュメント](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html)からリンク) |
| [use-cases/ai/ai-research](https://gitlab.com/gitlab-da/use-cases/ai/ai-research) | @dnsmichi | ローカル LLM (`Ollama`)、RAG、AI エージェントなどによる AI リサーチ。 |
| [use-cases/ai/ai-workshops](https://gitlab.com/gitlab-da/use-cases/ai/ai-workshops) | @dnsmichi | お客様との GitLab Duo および AI ワークショップとライブプログラミングセッション |
| [use-cases/ai/gitlab-duo-coffee-chat](https://gitlab.com/gitlab-da/use-cases/ai/gitlab-duo-coffee-chat) | @dnsmichi | [GitLab Duo コーヒーチャット](#gitlab-duo-coffee-chat) |
| [use-cases/ai/learn-with-ai](https://gitlab.com/gitlab-da/use-cases/ai/learn-with-ai) | @dnsmichi @sugaroverflow | GitLab Duo (AI) でプログラミング言語を学ぶ、[ブログシリーズ](https://about.gitlab.com/blog/categories/ai-ml/) |
| [use-cases/ai/test-ai](https://gitlab.com/gitlab-da/use-cases/ai/test-ai) | all | AI と GitLab Duo のテストプレイグラウンド |
| [use-cases/cicd-components-catalog](https://gitlab.com/gitlab-da/use-cases/cicd-components-catalog) |  @iganbaruch | GitLab CI/CD Components Catalog のユースケース |
| [use-cases/code-experiments](https://gitlab.com/gitlab-da/use-cases/code-experiments) |  @waarias @csaavedra1  | オートメーションと品質評価によるコード実験 |
| [use-cases/coverage-reports](https://gitlab.com/gitlab-da/use-cases/coverage-reports) | all | コードカバレッジレポートの例 |
| [use-cases/devsecops-platform](https://gitlab.com/gitlab-da/use-cases/devsecops-platform) | @waarias | エンドツーエンドの DevSecOps プラットフォームデモ環境 |
| [use-cases/efficiency](https://gitlab.com/gitlab-da/use-cases/efficiency) | @dnsmichi | 効率化ユースケース (CI/CD、コンテナイメージ、ワークフロー、CLI など) |
| [use-cases/gitlab-api](https://gitlab.com/gitlab-da/use-cases/gitlab-api) | @dnsmichi | ライブラリやスクリプトを使用した GitLab API のユースケース |
| [use-cases/observability](https://gitlab.com/gitlab-da/use-cases/observability) | @dnsmichi | Observability のユースケースとリサーチ (OpenTelemetry、eBPF など) |
| [use-cases/remote-development](https://gitlab.com/gitlab-da/use-cases/remote-development) | @dnsmichi @iganbaruch | Workspaces 環境と Web IDE のユースケース |
| [use-cases/scientific-research](https://gitlab.com/gitlab-da/use-cases/scientific-research) | @abuango | 科学リサーチプロジェクトとインテグレーション |

### アクセス

アクセスは [`gitlab-da` グループのチームメンバー](https://gitlab.com/groups/gitlab-da/-/group_members)に限定されています。メンバーの追加/削除には、変更を文書化するための [Issue が必要](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues)です。

許可される例外は、外部ユーザーをワークショッププロジェクトに一時的に招待するワークショップサブグループです。一時的に追加されたすべてのユーザーは、[**必ず** 7 日間のメンバーシップ有効期限を使用](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project)する必要があります。

### 新しいプロジェクトまたはグループの追加

1. プロジェクトのスコープを定義し、トップレベルのグループのいずれかに追加します。
1. 不明な場合は、まず [playground](https://gitlab.com/gitlab-da/playground) グループにプロジェクトを作成し、後でプロジェクト設定で本番ロケーションに移動します。

**最初に Issue/MR で変更を提案することなく、新しいトップレベルグループを作成しないでください。**

#### README

プロジェクト/グループの目的を説明する `README.md` ファイルを必ず追加し (テキストを `Settings > General > Description` にコピー)、すべてのリソース (Issue、ディレクションページ、ブログ記事など) をリンクします。GitLab はプロジェクト README に加えて、[グループ README](https://docs.gitlab.com/ee/user/group/manage#add-group-readme) もサポートしています。

オプションだが推奨: トピックを説明するプロジェクト/グループのアバター画像を追加します。画像を選択する際は、Brand の[クリエイティブアセットの調達ガイダンス](/handbook/marketing/brand-and-product-marketing/design/#sourcing-creative-assets)を参照してください。

ヒント: 次の CLI コマンドで[画像をリサイズ](/handbook/tools-and-tips/#resizing-images)できます:

```console
find . -type f -exec sh -c 'convert {} -resize 150 {}' \;
```

#### グループ: ユースケース

1. ブログ記事やソートリーダーシップリサーチは通常、ユースケースまたは特定のトピックを記述します。既存の [use-cases](https://gitlab.com/gitlab-da/use-cases) をレビューし、新しいプロジェクトまたはサブグループを追加します。
1. ユースケースが新しい場合は、新しいサブグループを作成し、説明を追加し、ハンドブックの組織構造を更新します。テーブルに DRI として自分自身を追加します。

#### グループ: チュートリアルとワークショップ

1. [チュートリアル](https://gitlab.com/gitlab-da/tutorials)は、特定のトピックを学ぶための役立つコンテンツを提供し、プロジェクトをメンテナンスする DRI が割り当てられています。チュートリアルはブログ記事、ウェビナーなどから参照されます。
1. [ワークショップ](https://gitlab.com/gitlab-da/workshops)は、演習や解答などの形で、単一のリポジトリ内で自己完結型の学習リソースを提供します。

どこから始めるか不明な場合は、最初に新しいチュートリアルサブグループを作成し、後でたとえばコンテンツをワークショップに移行することを決定します。

#### グループ: プロジェクト

[projects](https://gitlab.com/gitlab-da/projects) グループには、本番で使用されるすべてのプロジェクトが含まれています。チームはワークフローと効率のためにその機能に依存しているため、チームのハンドブックで広範なドキュメントが必要です。GitLab Pages とカスタムドメインで提供されるマイクロサイトもメンテナンスしています。

### プロジェクト/グループの削除

私たちのデモプロジェクトは、ブログ記事やその他のパブリックコンテンツから参照されています。プロジェクトをアーカイブ/削除する代わりに、これらのプロジェクト/グループを [unmaintained](https://gitlab.com/gitlab-da/unmaintained) に移動して、ユーザーに非推奨であることを示すことを推奨します。

## プロジェクトリソース

一部のプロジェクトは、Kubernetes クラスタ、セルフマネージド CI/CD ランナー、クラウド VM、ドメインなどへのアクセスが必要です。チームは、GitLab.com SaaS デモ用にこれらの種類の外部インフラ依存関係をホストできる Google Cloud または AWS のクラウドリソースへのアクセス権を持っています。

詳細は[デベロッパーリレーションズ向けクラウドリソースのハンドブック](/handbook/marketing/developer-relations/workflows-tools/cloud-resources)で学べます。

### ベストプラクティス

1. プロジェクトのセットアップを README ファイル (または Git リポジトリの docs/ 構造) に文書化します。
1. デモケースと競合しない限り、デフォルトとして必ず[セキュリティスキャン](https://docs.gitlab.com/ee/user/application_security/)を追加します。
1. GitLab アプリにはアカウントからの OAuth セットアップが必要です。本番アプリ (Code challenge など) には、グループ共有アカウント (たとえば [DevRel Bot](/handbook/marketing/developer-relations/developer-advocacy/projects/#developer-relations-bot)) を使用します。

### 開発環境

[デベロッパーアドボケイト向けの開発環境](/handbook/marketing/developer-relations/developer-advocacy/dev-environments/)を参照してください。

## 製品採用イニシアチブ

### GitLab Duo の採用

[FY25 デベロッパーリレーションズエピック](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/475) (内部)。

#### GitLab Duo コーヒーチャット

DevSecOps ライフサイクル全体で、GitLab Duo の助けを借りて AI を活用したワークフローのライブ学習セッション。私たちは議論し、探索し、調査し、学び、デバッグし、製品フィードバックや機能アイデアを作成し、新機能やワークフローを発見します。

目標: コーヒーチャットは、お客様が GitLab Duo の使い方を学び、ベストプラクティスを採用するのを助けます — 例によって、ミスをし、さまざまなルートを試し、より良い結果と DevSecOps の効率性を達成します。

メンテナ: [Michael Friedrich, @dnsmichi](https://gitlab.com/dnsmichi)

- [YouTube プレイリスト](https://go.gitlab.com/xReaA1)
- [プロジェクト付き GitLab グループ](https://gitlab.com/gitlab-da/use-cases/ai/gitlab-duo-coffee-chat)
- [GitLab Duo](https://go.gitlab.com/Z1vBGD)
- [トーク: Efficient DevSecOps Workflows with a little help from AI](https://go.gitlab.com/T864XF) - [コンテンツエピック](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/402)
- [組織化 Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/375)
- 録画ビデオ編集用の[スライドテンプレートとリソース](https://docs.google.com/presentation/d/1FBOxe43l4qY8KastAWjblphOLiktNtPjHgFNmNYf0Uw/edit#slide=id.g2a6734f20af_0_0)。

録画は [GitLab Duo Use Cases ドキュメント](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html)からもリンクされています。

##### プロセス

1. セッションのスコープを定義します (たとえば、30 分のアプリケーション作成、または COBOL のような新しいプログラミング言語の探索)。Duo Challenges では IDE または GitLab UI コンテキストにとどまる必要があります。
1. ゲストにコラボレーションを招待します (オプション)
1. Zoom 録画を開始し、セッションの目標について短い紹介を行います。1 人の場合は OBS を使用してセッションを録画することもできます。
1. セッションを開始し、Duo Chat にどう始めるか尋ね、Code Suggestions などをフォローアップします。
1. 終了/時間で停止する際、深呼吸して、今日学んだことのまとめサマリーを提供します。
1. ビデオをエクスポートします。
1. 学びを強調するセッション (または IDE) からスクリーンショットを撮ります。スクリーンショットを[スライドプレースホルダー](https://docs.google.com/presentation/d/1FBOxe43l4qY8KastAWjblphOLiktNtPjHgFNmNYf0Uw/edit#slide=id.g2b429ab8253_0_23)に追加し、セッション詳細でテキストを編集し、再びスライドのスクリーンショットを作成します。これは Premiere Pro でビデオの紹介として機能します。

Adobe Premiere Pro でのビデオ編集:

1. Adobe Premiere Pro で新しいプロジェクトを作成します。
1. 録画とイントロ/アウトロの画像アセットをインポートします。
1. ビデオを新しいシーケンスにドラッグします。
1. 最初の 3-5 秒にイントロのスクリーンショットを追加します。右クリック > フレームサイズに合わせてスケール。
1. カミソリアイコンを使用してイントロシーケンスの後にビデオをカットします。最初の部分を選択してシーケンスを削除します。
1. 最後の 3-5 秒にエンディングのスクリーンショットを追加します。右クリック > フレームサイズに合わせてスケール。
1. カミソリアイコンを使用してエンディングシーケンスの前にビデオをカットし、無音部分を削除します。最後の部分を選択してシーケンスを削除します。
1. 生のビデオをエクスポートします: `File > Export > Media`。

ビデオのアップロード:

1. YouTube の [GitLab Unfiltered アカウント](https://www.youtube.com/@GitLabUnfiltered/)にログインし、ビデオファイルをアップロードします。
1. セッションのタイトルを編集します: `GitLab Duo Coffee Chat: Challenge - Explain and Refactor COBOL programs` など。
1. ビデオの説明を、何が期待できるかを 2-3 文で編集します。すべてのドキュメント/ブログ URL を `Resources` エントリとして追加します。
1. 新しいウィンドウでビデオプレビューを開き、セクションをスクロールします。タイムスタンプを記録し、ビデオの説明に TOC を書き込みます。目次は視聴者が素早くナビゲートするのに役立ちます。
1. `Playlist` - `GitLab Duo Coffee Chat` に追加します。
1. タグを追加します: `gitlab`、`gitlab-duo`、`ai`、`development` など。
1. ビデオを公開します。

配信

1. ビデオを [GitLab Use Case ドキュメント](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html)、Highspot、ブログ記事、ソーシャル投稿などに追加します。

### CI/CD の採用

[FY25 デベロッパーリレーションズエピック](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/466) (内部)

#### CI/CD コンポーネントカタログ

製品とエンジニアリングと協力して、[GitLab がメンテナンスするコンポーネント](https://gitlab.com/components)用の CI/CD テンプレート移行を通じて CI/CD コンポーネントカタログをシードする支援を行います。コミュニティのコンペティションやハッカソンからの貢献のメンテナンスとレビューを支援します。学んだことをコンテンツやストーリーテリングに転用します ([コンテンツエピック](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/399))。

このイニシアチブは [CI Adoption WG](/handbook/company/working-groups/customer-use-case-adoption/) の一部であり、デベロッパーリレーションズによる貢献です ([エピック](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/317))。

目標: お客様が DevSecOps 効率化のための CI/CD コンポーネントを使用できるよう支援します。ベストプラクティスを学び、ブログ記事、チュートリアル、ワークショップで共有します。

メンテナ: [Michael Friedrich, @dnsmichi](https://about.gitlab.com/company/team/#dnsmichi)、[Itzik Gan Baruch, @iganbaruch](https://about.gitlab.com/company/team/#iganbaruch)

### Social チームとのコラボレーションによる LinkedIn ライブ

GitLab は、月次リリースをハイライトし、製品アップデートとソートリーダーシップを共有するために、通常毎月第 4 木曜日に月次 LinkedIn ライブブロードキャストをホストしています。各ブロードキャストでは、GitLab チームメンバーとスペシャルゲストが参加し、AI を活用したソフトウェア開発の最新情報について議論します。これは [Developer Advocacy](/handbook/marketing/developer-relations/developer-advocacy/) と [Social Media](/handbook/marketing/integrated-marketing/digital-strategy/social-marketing/) チームの間のコラボレーションプロジェクトです。

エピソードは通常 30 分間で、4-5 人のパネリストとモデレーターが事前に決定したトピックや製品アップデートについて議論します。場合によっては、会話は事前録画されています。

| エピソードタイトル                                                                 | ビュー数   | 月   |
|-------------------------------------------------------------------------------|---------|---------|
| [GitLab 16.11](https://www.linkedin.com/events/7191139444916146176/) | 5.6K    | 2024/04 |
| [GitLab 17.0](https://www.linkedin.com/feed/update/urn:li:activity:7198692684436250626) | 6.8K    | 2024/05 |
| [GitLab 17 Release event recap](https://www.linkedin.com/video/live/urn:li:ugcPost:7212131667262492673/) | 7.3K    | 2024/06 |
| [Harnessing AI: GitLab’s Insights & Innovations](https://www.linkedin.com/events/7219699059933020163) | 6.3K    | 2024/07 |

#### パネリスト向け情報

**ブロードキャスト/録画前**

- ソーシャルメディアチームと他のパネリストと一緒に、アジェンダ、ロジスティクス、プロモーションについて議論する一時的な Slack チャンネルに追加されます。
- 録画/ブロードキャストの前の 30 分のウォークスルーで、技術チェック、トーキングポイントのウォークスルー、他のパネリストとの面会のために空いていることを求められます。
- LinkedIn のイベントページにスピーカーとして追加されるので、あなたのネットワークが LinkedIn で生中継に出演することを通知されます。
- イベントを宣伝する LinkedIn の投稿をあなたのネットワークと共有して、イベントの宣伝にご協力ください。

**ブロードキャスト/録画中**

- Wi-Fi の信号が強く、邪魔のない明るい場所にいることを確認してください。
  - 理想的には、バーチャル背景を使用します。
- GitLab のグッズがあれば、着用してください！
- マイクとしてヘッドセットを使用してください。

**ブロードキャスト後**

- ブロードキャストにコメントした人と交流してください。
- イベントビデオをあなたのネットワークと再共有してください。

## アーカイブされたプロジェクト

### コミュニティニュースレター

- 目標: 開発者向けコンテンツの共有、コミュニティメンバーへの今後のイベントの情報提供、コミュニティ内での貢献の促進。このニュースレターのターゲットオーディエンスは、私たちのコミュニティの志望および既存の GitLab 貢献者です。このニュースレターは、リードを推進または生成するために使用されません。
- 期間: 2022-2024
- [組織エピック](https://gitlab.com/groups/gitlab-com/-/work_items/1821)
- メンテナ: @sugaroverflow
- アーカイブ:
  - [FY23 ニュースレターエピック](https://gitlab.com/groups/gitlab-com/-/epics/1915)。
  - その他の過去のニュースレター Issue は、[ラベル `Da-Type-Content::newsletter`](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/?sort=updated_desc&state=closed&label_name%5B%5D=DA-Type-Content::newsletter&first_page_size=20)を使用してクローズ済み Issue を検索することで見つけることができます。
  - [ニュースレター Issue PDF (内部)](https://drive.google.com/drive/folders/1w086j7mTDRCUEtINm2AVivkxfctMQT2J)

## 学習コレクション

### 私たちの作業環境

- [この記事](https://about.gitlab.com/blog/2020/04/17/dotfiles-document-and-automate-your-macbook-setup/)で取り上げられている [Michael の dotfiles](https://gitlab.com/dnsmichi/dotfiles)

### log4j-resources

[log4j-resources](https://gitlab.com/gitlab-da/projects/log4j-resources) プロジェクトは、log4j 脆弱性 (より正式には [CVE-2021-44228](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44228) として知られている) について学び、検出し、影響を軽減するためのリソースのコレクションを提供します。

メンテナ: [デベロッパーアドボカシーチーム](/handbook/marketing/developer-relations/developer-advocacy/)

## ワークショップ

### DevOps と GitLab

#### DevOps with GitLab CI Course - Build Pipelines and Deploy to AWS

公開: 2022 年。

[GitLab Hero](https://about.gitlab.com/community/heroes/members/) [Valentin Despa](https://twitter.com/vdespa) は、Michael Friedrich とのコラボレーションで 5 時間のコースを作成しました。Michael は[コースアウトラインのレビュー](https://gitlab.com/everyonecancontribute/workshops/gitlab-ci-freecodecamp/-/merge_requests/1)を支援しました。

[![''](https://img.youtube.com/vi/PGyhBwLyK2U/0.jpg)](https://www.youtube.com/watch?v=PGyhBwLyK2U "DevOps with GitLab CI Course - Build Pipelines and Deploy to AWS")

#### Efficient DevSecOps Pipelines in a Cloud Native World

公開: 2021 年。

[スライド](https://docs.google.com/presentation/d/12ifd_w7G492FHRaS9CXAXOGky20pEQuV-Qox8V4Rq8s/edit)は、Michael Friedrich が Open Source Automation Days 2021 のために作成した 10 時間以上のワークショップを提供しています。スライド内の演習は、解答も含む[ワークショッププロジェクト](https://gitlab.com/gitlab-da/workshops/ci-cd-pipeline-efficiency-workshop)を参照しています。

次のトピックが実践されます:

- イントロダクション: CI/CD と Dev、Sec、Ops の出会い
- CI/CD: 用語と最初のステップ
- 分析と特定
  - ワークショップ全体を通して演習プロジェクトをモニタリングするために [GitLab CI Pipeline Exporter](https://github.com/mvisonneau/gitlab-ci-pipelines-exporter/tree/main/examples/quickstart) を学習します。
- 効率化アクション
  - 設定の効率化: 変数内の CI/CD 変数、ジョブテンプレート (YAML アンカー、extends)、includes (local、remote)、ルールと条件 (if、動的変数、条件付き includes)、`!reference` タグ (script、rules)、独自の CI/CD テンプレートの維持 (テンプレートの include、設定値のオーバーライド)、parent-child パイプライン、マルチプロジェクトパイプライン、失敗を素早く修正するためのより良いエラーメッセージ
  - リソース使用効率: 特定、最大パイプライン継続時間の分析、stage グループ化による高速失敗、async needs による高速失敗、ブロッキングステージパイプラインの分析 (needs を使った解決策)、並列実行のための matrix ビルド (実践: matrix と `extends` の組み合わせ、matrix と `!reference` の組み合わせ)、`extends` のマージ戦略 (`!reference` ありとなし)
  - CI/CD インフラ効率: 最適化アイデア、カスタムビルドイメージ、C++ を例とするビルド最適化、GitLab Runner リソース分析 (共有、タグ、外部依存関係、Kubernetes)、ローカルランナー演習、リソースグループ、ストレージ使用量分析、キャッシング (Python 依存関係演習、失敗ジョブでの `when:always` を含む)
  - オートスケーリング: 概要、Terraform を使用した GitLab Runner での AWS オートスケーリング、[AWS Graviton 上の Spot Runners](https://about.gitlab.com/blog/2021/08/17/100-runners-in-less-than-10mins-and-less-than-10-clicks/) に関するインサイト
- グループディスカッション
  - デプロイメント戦略: IaC、GitOps、Terraform、Kubernetes、レジストリ
  - セキュリティ: CI/CD 変数のシークレット、Hashicorp Vault、シークレットスキャン、脆弱性スキャン
  - Observability: CI/CD Runner モニタリング、SLO、品質ゲート、CI/CD トレーシング
  - その他の効率化アイデア: Auto DevOps、Fast vs Resources、結論とヒント

<figure class="video_container">
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQCF72s_IIogKurtLhEZ3Pe3SrkcRL1KYIhScYwhwPlFDJTGYLK_sZGnG4gAfy0jiiQnITuxSGPDB48/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</figure>

### テンプレート: Go Tanuki を使った基本と CI/CD

[スライド](https://docs.google.com/presentation/d/1bj8FqU5I-Og-Yf9rDbp0qRjV4AXQo8K-rfOXkSUClW4/edit?usp=sharing)は、[GitLab CI/CD Go Tanuki ワークショップ](https://gitlab.com/gitlab-da/workshops/gitlab-cicd-go-tanuki-workshop)用の演習としてステップバイステップの手順を提供します:

- GitLab の最初のステップ
- CI/CD: はじめに
- CI/CD: Go プロジェクトとテスト
- GitLab を使ったセキュリティ
- 配信とデプロイ
- 次は何
- 非同期練習用の演習
- 効率性の練習

#### 最近の録画

公開: 2021 年。

[![''](https://img.youtube.com/vi/id9klDUrGN8/0.jpg)](https://www.youtube.com/watch?v=id9klDUrGN8 "TalentQL Pipeline workshop in October 2021")
[![''](https://img.youtube.com/vi/kTNfi5z6Uvk/0.jpg)](https://www.youtube.com/watch?v=kTNfi5z6Uvk "1. Swiss Meetup 2021 in January")

過去のワークショップやデベロッパーアドボカシーチームのその他のビデオの録画は、GitLab Unfiltered の[チームプレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq-bYO9jCJaN45BBpzWSLAQ)で見つけることができます。

### 過去のミートアップワークショップ

ミートアップワークショップは、GitLab デベロッパーアドボカシーグループの[ワークショップグループ](https://gitlab.com/gitlab-da/workshops)で利用できます。コンテンツ、演習、ソースコードは時間とともに進化していることに注意してください :)

#### 基本と CI/CD

- [TalentQL Pipeline workshop in October 2021](https://gitlab.com/gitlab-da/workshops/go-tanuki-cicd-workshop-talentql-pipeline-program)
- [1. Swiss Meetup 2021 January](https://gitlab.com/gitlab-da/workshops/swiss-meetup-2021-jan)
- [Morehouse College CI CD Lecture](https://gitlab.com/gitlab-da/workshops/morehouse-college-lecture-cicd)
- [CI Community Day 2020](https://gitlab.com/gitlab-da/workshops/ci-community-day-2020)
- [KDE Akademy Workshop 2020](https://gitlab.com/gitlab-da/workshops/kde-akademy-workshop-2020)
- [LA / SoCal / Orange County Meetup 2020](https://gitlab.com/gitlab-da/workshops/meetup-2020-cw41)
- [Collision from Home GitLab CI workshop](https://gitlab.com/gitlab-da/workshops/collision-from-home-2020)
- [Linuxing London Meetup - GitLab Introduction](https://gitlab.com/gitlab-da/workshops/meetup-2020-cw17)
- [First virtual GitLab meetup - intro to CI](https://gitlab.com/gitlab-da/workshops/meetup-2020-cw13)

ドイツ語:

- [German CI/CD Workshop 2021](https://gitlab.com/gitlab-da/workshops/german-cicd-workshop-2021-jan)

#### モニタリングとセキュリティ

- [Identify, analyze, action! Deep monitoring with CI](https://gitlab.com/gitlab-da/workshops/ci-monitoring-webcast-2020)
- [GitLab CI Security Webcast](https://gitlab.com/gitlab-da/workshops/ci-security-webcast-2020)

### Developer Relations Bot

メンテナ: TBD。それまでは [Michael Friedrich](https://gitlab.com/dnsmichi) に問い合わせてください。

このボットは、次のようなチームタスクを自動化することを目的としています:

- チームメンバー向けの[リリースエバンジェリズム](/handbook/marketing/developer-relations/developer-advocacy/social-media/#release-evangelism) Issue を作成。
- [デベロッパーアドボカシーワークフロー](/handbook/marketing/developer-relations/developer-advocacy/workflow/)に従って Issue をトリアージ。
- 毎週月曜日に Issue レター (作成済み、クローズ済み、オープン CFP) を生成。

プロジェクト: [DevRel Bot](https://gitlab.com/gitlab-da/projects/devrel-bot)

### YouTube2Sheets

メンテナ: TBD。それまでは [Michael Friedrich](https://gitlab.com/dnsmichi) に問い合わせてください。

このプロジェクトは、YouTube 上の指定されたプレイリストからビデオのリストを取得し、指定された Google Sheet に取り込むために GitLab 内部で使用されています。パイプラインは UTC の深夜と正午に実行されるようスケジュールされています。

プロジェクト: [YouTube2Sheets](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/code/youtube2sheets)

### CodeChallenge.dev

メンテナ: 現在は積極的にメンテナンスされていません。

`CodeChallenge.dev` は、GitLab のアクションに紐づくチャレンジを作成するために使用できるアプリです。たとえば、人々にマージリクエストの作成方法、Issue の追加方法、その他の GitLab 機能の使用方法を教えるチャレンジを作成できます。現在ベータリリース中で、Code Challenge ソフトウェアは KubeCon EU 2022 で初めて使用されました。

ホームページ: [CodeChallenge.dev](https://codechallenge.dev)

ドキュメント: [docs.codechallenge.dev](https://docs.codechallenge.dev)

プロジェクト: [codechallenge](https://gitlab.com/gitlab-da/projects/codechallenge)

<figure class="video_container">
    <iframe src="https://www.youtube.com/embed/BNEQMNtrlSM" frameborder="0" allowfullscreen="true"> </iframe>
</figure>
