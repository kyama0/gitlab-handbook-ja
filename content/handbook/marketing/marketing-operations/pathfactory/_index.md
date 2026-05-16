---
title: "PathFactory"
description: "PathFactory は、視聴者向けにパーソナライズされたコンテンツジャーニーを作成するために使用される、インテリジェントな B2B コンテンツエクスペリエンスプラットフォームです。"
upstream_path: /handbook/marketing/marketing-operations/pathfactory/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-24T12:08:15-08:00"
---

## PathFactory とは何か

PathFactory は、視聴者向けにパーソナライズされたコンテンツジャーニーを作成するために使用される、インテリジェントな B2B コンテンツエクスペリエンスプラットフォームです。[グローバルコンテンツ](/handbook/marketing/brand-and-product-marketing/content/) チームは主に PathFactory 内のすべてのコンテンツを担当します。キャンペーンマネージャーは、マーケティングの他のチームと協力して、アセットをトラックに整理・キュレーションし、Marketo、`about.gitlab.com`、その他のキャンペーン関連チャンネルで使用できるよう配信します。

## PathFactory は何に使用されるか

- PathFactory は主に、メールナーチャストリーム、ランディングページ、広告、バーチャルイベントのフォローアップに使用されます。

- アセットは「コンテンツトラック」として（5〜7 個程度を）バンドルされ、1 つのリンクとして共有されます。個別のアセットへの複数のリンクを共有する代わりに、**1 つのリンク** がキュレーションされたコンテンツ体験を提供します。

### PathFactory が _使用されない_ こと

- **個別のアセットの共有。** これは訪問者にコンテンツを「ビンジ」して、自己ナーチャリングして MQL に向かわせることを目的としています。個別のアセットを共有するには、GitLab ウェブサイトに誘導してください。

- **ウェブページの作成。** PathFactory はエクスペリエンスをキュレーションするコンテンツライブラリです（B2B コンテンツの Netflix のようなものと考えてください）。PathFactory は Marketo の代替ではありません。

### PathFactory vs. Marketo

☝️ **PathFactory ≠ メールナーチャ。PathFactory は、単一のアセットに誘導する代わりに、関連コンテンツ体験に誘導するツールです。**

ナーチャは個人をコンテンツに連れてくるためのチャンネルです。広告、ソーシャル、ウェブサイトなどが CTA に誘導するのと同じように、PathFactory リンクは CTA であり、個人をコンテンツ消費の「自分で選ぶ冒険」パスへと導く _パワフルな_ CTA です。それを私たちは追跡します。

**PathFactory と Marketo の異なる目標は何ですか？**

- **Marketo ナーチャ:** GitLab を常に念頭に置かせ、関連コンテンツを配信する（PathFactory 経由）
- **PathFactory:** GitLab コンテンツの消費/エンゲージメントを増加させる

**レコードは Marketo ナーチャと PathFactory ナーチャに同時に存在できますか？できない場合、どちらが優先されますか？**

はい、PathFactory トラックは既存の Marketo ナーチャの代替ではなく、補完として機能します。これにより、エンドユーザー向けにシームレスな方法で関連コンテンツを提供できます（単に PDF リンクを提供するだけよりも良く、コンテンツの「ビンジ」を改善します）。

### PathFactory vs. CMS vs. DAM

PathFactory はすべての GitLab コンテンツに対する唯一の信頼できる情報源（SSoT）ではなく、マーケティングキャンペーンでアクティブ化されたコンテンツです。

**コンテンツ管理システム（CMS）** - コンテンツ管理システムは、デジタルコンテンツの作成と変更を管理するために使用できるソフトウェアアプリケーションです。

**デジタルアセット管理（DAM）** - デジタルアセット管理（DAM）は、デジタルアセットを中央の場所に保存、共有、整理するシステムです。

**PathFactory** - バイヤーがコンテンツをビンジ消費し、摩擦を取り除き、より迅速により多くの認定されたリードを作成できるようにするコンテンツエクスペリエンスソフトウェア。

## Pathfactory for Sales

** SFDC から削除中であり、契約に含まれていません。ただし、ファストムービングバイヤーアラートは引き続きアクティブです。
PathFactory for Sales は、Salesforce 内の PathFactory の拡張機能で、Sales Development および Sales チームにコンテンツとリードのインサイトの直接ビューを提供し、プロスペクトに送信するコンテンツトラックを選択できるようにします。

### ファストムービングバイヤーアラート

ファストムービングバイヤーアラート（FMB アラート）は、Marketo で設定されたメールアラートで、リードオーナーにリードの詳細を送信します。アラートは、リードが PathFactory エクスペリエンスで少なくとも 90 秒費やし、3 つ以上のアセットを表示したときにトリガーされます。以下は FMB アラートの例です:

![image](/images/marketing/marketing-operations/pathfactory/pathfactory-for-sales/fmb-alertv2.png)

ファストムービングバイヤーアラートは、Marketo からのグローバルな興味深い瞬間もトリガーします。

### FAQ

**Marketing 承認の PathFactory コンテンツを介してプロスペクトとより良い会話をしたく、彼らの実際のエンゲージメントを追跡したいです。コンテンツエンゲージメントが Salesforce 内に表示されるようにするにはどうすればよいですか？**

メールは Marketo または Outreach 経由で送信する必要があります。

**このデータをエクスポートまたはダウンロードできますか？**

エンゲージメントデータは、[PathFactory Analytics](/handbook/marketing/marketing-operations/pathfactory/#pathfactory-analytics) からのみダウンロード可能で、Salesforce 経由ではありません。

## アクセス

マーケティングオペレーションチームは、各役割/機能に対して適切なレベルのアクセスをアクセスリクエストの管理とプロビジョニングを担当します。PathFactory はベースラインのエンタイトルメントとしてプロビジョニングされません。アクセスが必要な場合は、[Lumos App Store](https://app.lumosidentity.com/app_store) を介してリクエストし、アクセスが必要なビジネス上の理由を提供してください。特定の権限や役割の場合、アクセスがプロビジョニングされる前にトレーニングを受ける必要がある場合があります。

### ユーザーロール

アクセスには 4 つのレベル - `Admin`、`Author`、`Reporter`、`Viewer`、`Uploader` - があり、GitLab 内の人物の役割とチーム機能に基づいて付与されます。すべてのアクセスレベルでは、ツール内の分析を表示できます。

- `Admin` アクセスは、マーケティングオペレーションに付与され、時には sales や business operations などの他のチームにも、システム間の統合を管理するために付与されます。
- `Author` アクセスでは、ユーザーが既存のタグをアセットに適用しながら、コンテンツトラックの構築、編集、公開を行えます。
- `Viewer` アクセスは、PathFactory 内のコンテンツへの一般的な可視性を提供しますが、エンドユーザーがコンテンツ、トラック、タグを作成または変更することはできません。このレベルのアクセスは、マーケティング内およびそれ以外の場所で、アクセスを必要とする一般的な GitLab チームメンバーに付与されます。
- `Uploader` アクセスでは、ユーザーが既に作成されたトラック内のコンテンツを作成、編集、削除できますが、トラックの作成、編集、削除はできません
- `Reporter` アクセスでは、ユーザーが PathFactory のインスタンス内のすべての分析ページを表示できます。
- `Sales User` は、PathFactory のインスタンスに関連する有効なメールドメインを持っているが、ログインを持っていない人です。これらのユーザーは PathFactory にログインできませんが、`Admins` が `Sales Configuration` ページで選択した任意のコンテンツトラックを共有できます。

各ロールの機能の詳細については、[ナレッジベースの記事を参照してください](https://support.pathfactory.com/kb/overview-of-user-roles-in-pathfactory/)。

### チームごとのエンゲージメントルール

| チーム | ユーザーロール | エンゲージメントルール |
| ---- | ---------- | ------------------- |
| Marketing Operations | `Admin` | 管理、品質保証、ユーザー管理、システム統合、トレーニング |
| Content Marketing | `Author` | コンテンツの追加、品質保証、四半期ごとのコンテンツ監査への参加 |
| Campaign Managers | `Author` | コンテンツの追加、キャンペーン用のトラックの作成と編集、トラックでのコンバージョンのためのフォーム戦略の定義、四半期ごとのコンテンツ監査への参加 |
| Product Marketing | `Author`（一部のユーザー）、`Reporter`（一部のユーザー） | 新しいコンテンツのアップロード、四半期ごとのコンテンツ監査への参加、トラックの `Authors` とコンテンツ選択のコラボレーション |
| Field Marketing | `Author`（一部のユーザー）、`Viewer`（一部のユーザー） | バーチャルワークショップからのコンテンツのアップロード、フォローアップメール用に既存のワークショップトラックをクローン、コンテンツパフォーマンスを表示 |
| Account-Based Marketing | `Author` | コンテンツの追加、キャンペーン用のコンテンツトラックの作成と編集 |
| Customer Reference Programs | `Author` | 新しいケーススタディとカスタマーコンテンツのアップロード |
| Developer Adbo | `Author` | 新しい技術コンテンツのアップロード |
| Sales Development Representative (SDR) | `Sales user`（PathFactory for Sales のみ） | PathFactory for Sales（SFDC） |
| All Remote | `Author` | 新しい all remote コンテンツのアップロード、all-remote キャンペーン用のコンテンツトラックの作成と編集 |
| Partner Marketing | `Author`（一部のユーザー） | コンテンツライブラリの表示、パートナー用のコンテンツトラックの作成とクローン、レポート |
| Customer Programs | `Author`（一部のユーザー） | コンテンツライブラリの表示、CSM が割り当てられていない、または要求されていないカスタマーオンボーディング用のコンテンツトラックの作成、レポート |

## サポート

1. [ナレッジベース、_The Nook_](https://lookbookhq.force.com/nook/s/kb)（PathFactory のユーザーが必要で、PathFactory に使用するメールは The Nook へのアクセスと同じですが、パスワードは異なります。）
1. [Success Series Webinars](https://customer.pathfactory.com/l/success-series-recordings)
1. [Release Notes](https://support.pathfactory.com/?s=release+notes&ht-kb-search=1&lang=)

## トレーニング

1. [The Path to Understanding: Onboarding Training](https://customer.pathfactory.com/customer-onboarding)
1. [Getting started ビデオシリーズ](https://support.pathfactory.com/kb/video-tutorials-for-getting-started-with-pathfactory-templated-experiences/)
1. [デジタルマーケティングのブラウンバッグセッション概要](https://drive.google.com/open?id=1Hzb6ard48k-11r5a8oBDD_NLjeZnkMK2) - [スライド](https://drive.google.com/open?id=1XxOIE2O-VW0I9z09kpLs5ops52oF6iDSP1a1MF8NkGY)
1. [Author ロールトレーニング（外部に共有しないでください - PII データが提示されます）](https://drive.google.com/file/d/1YdK96hzDj043iESfDXV7ejz5sgbIXKCv/view?usp=sharing)
1. [Reporter ロールトレーニング（外部に共有しないでください - PII データが提示されます）](https://drive.google.com/file/d/1U_QAkZoELITmJt7Jr_AMXZiQZBpAhaIj/view?usp=sharing)
1. [ウェブサイトプロモーターを作成する方法](https://drive.google.com/file/d/1XcONoVj8Q9vhnHkdnsI-VfECDr0pFecF/view?usp=sharing)

## Issue テンプレート

**[マーケティングオペレーション](/handbook/marketing/marketing-operations/)**

1. [PathFactory Author オンボーディング](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=pathfactory_author_onboarding)
1. [一般的な PathFactory リクエスト](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=pathfactory_request)
1. [PathFactory QA レビューリクエスト](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=pathfactory_qa_review)
1. [新しい PathFactory フォームリクエスト](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=pathfactory_form)
1. [PathFactory コンテンツ監査](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=pathfactory_content_audit)
1. [PathFactory バルクアップロード](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=pathfactory_bulk_upload)
1. [PathFactory マイクロサイトリクエスト](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=pathfactory_microsite_request)

**[キャンペーン](/handbook/marketing/demand-generation/campaigns/)**

1. [Pathfactory アップロードリクエスト](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-pathfactory-upload) - [エンゲージメントルール](/handbook/marketing/marketing-operations/pathfactory/#rules-of-engagement-by-team) に従い、コンテンツオーナーが新しいコンテンツのアップロードの DRI です
   - _アップロード Issue は、コンテンツオーナーの GitLab プロジェクトで作成される場合があります。この Issue テンプレートは、ステップを概説するのに役立つ場合があります。キャンペーンチームはアップロードを担当しません。_
1. [Pathfactory バルクアップロードリクエスト](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-pathfactory-upload-bulk)
   - _この Issue テンプレートは、利用可能になり次第、コンテンツがコンテンツオーナーによって継続的に Pathfactory に追加されるため、控えめに使用する必要があります。これは、多くのセッションを持つ Commit イベント中に作成された多数のビデオなどの例に役立ちます。_
1. [Pathfactory トラックリクエスト](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-pathfactory-track)

## PathFactory を使用する際の重要な注意事項

PathFactory には、コンテンツライブラリ内の変更（更新されたことと誰によるかのみ）またはコンテンツトラックに対する組み込みの監査ログまたはトレイルがありません。`Author` ロールアクセスを持つすべての人が、このハンドブックに記載されている指示と文書に従うことが極めて重要です。コンテンツライブラリまたはコンテンツトラックに加えられた変更は、キャンペーン、レポート、アトリビューションに関連付けられているコンテンツトラックに悪影響を及ぼす可能性があります。

たとえば、コンテンツライブラリからアセットが削除され、そのアセットがキャンペーン関連のコンテンツトラックに存在する場合、そのトラック内のそのアセットを訪問するユーザーは `about.gitlab.com` にリダイレクトされ、次の影響があります:

1. ユーザーを意図された目的地から外すことで、コンテンツトラックエクスペリエンスを破壊します
1. キャンペーン、レポート、アトリビューションのデータが歪められます
1. そのユーザーをさらにナーチャリングする機会、またはゲーティングを通じて未知のユーザーを既知にする機会を逃す可能性があります

`Author` ロールがそのトラックの `Author` と協力せずに既存のコンテンツトラックに変更を加える場合も、上記と同じ影響が発生する可能性があります。

**これらの影響のある変更を行う前に、変更を加える前にコンテンツトラックの `Author` と協力するか、コンテンツライブラリのアセットを削除する前に `#mktgops` で確認してください。**

これらの変更が行われた場合、それに応じて修正できるよう、[PathFactory 変更ログ](#changelog) に入力することも極めて重要です。

## 変更ログ（Changelog）

定期的に、PathFactory および全体的なデータとレポートに影響を与えるプロセスに、重要な変更が加えられたり追加されたりします。そのため、[changelog](https://docs.google.com/document/d/1qd9X-V0WNBTklCKNYVRmjJtiOcPu6dZYkfJ2uuQt_Co/edit?usp=sharing) があります。PathFactory に重要な変更を加える `Author` アクセスを持つすべての人が、リンクされた Issue や関連する PathFactory リンクとともに、変更を変更ログに追加する必要があります。

**変更ログに追加するシナリオ:**

1. 新しいコンテンツトラックの作成または起動と使用される場所
1. 新しいウェブサイトプロモーターの作成または起動
1. `[LIVE]` コンテンツトラック内のフォーム戦略への追加または変更
1. `[LIVE]` コンテンツトラック内のアセットへの追加または変更
1. コンテンツライブラリからのアセットの有効期限切れ
1. アセットまたはコンテンツトラックのカスタム URL スラグの変更とその理由
1. `[LIVE]` コンテンツトラック内のプロモーション設定の変更とその理由

**手順**

1. [PathFactory 変更ログのドキュメント](https://docs.google.com/document/d/1qd9X-V0WNBTklCKNYVRmjJtiOcPu6dZYkfJ2uuQt_Co/edit?usp=sharing) を開きます。
1. まだ存在しない場合は、変更を加えた日付を追加します。
1. GitLab のユーザー名を含むブレットを追加し、加えた変更を文書化します。Issue または関連する PathFactory リンクへのリンクを必ず含めてください。

## コンテンツライブラリ

[コンテンツライブラリ](/handbook/marketing/marketing-operations/pathfactory/content-library/) は、PathFactory にアップロードされたすべてのコンテンツが追加され、コンテンツトラックとエクスペリエンスで使用するためにタグ付けされる場所です。アセットは、PathFactory エクスペリエンスで利用される前に、まずコンテンツライブラリに存在する必要があります。

## PathFactory キャンペーンツール

`Campaign Tools` の下で作成できる複数のタイプの PathFactory エクスペリエンスがあります:

1. コンテンツトラック（target または recommend）
   - Target Tracks - Target Tracks は、訪問者に特定のコンテンツジャーニーを提供するために選択して整理したコンテンツのコレクションです。
   - Recommend Tracks - Recommend Tracks は、あなたが特に選択したコンテンツのコレクションで、彼らがすでに表示しているものに基づいて、プロスペクトに表示する理想的なコンテンツを提案するために機械学習に依存しています。
1. Explore Pages - Explore Pages では、訪問者がコンテンツトラック内のすべてのコンテンツアセットを素早く表示できます。作成する各 `Explore Page` は、既存の `Target` または `Recommend` Content Track の上に構築されます。
1. Website Promoters - ウェブサイトプロモーターを使用すると、ウェブサイトで PathFactory のコンテンツプロモーターのパワーを直接活用できます。目を引く CTA をコンテンツトラックに接続することで、興味のある関係者がコンテンツトラックを見つけて入る機会が増えます。

## 命名規則

### アセット

[コンテンツライブラリ](/handbook/marketing/marketing-operations/pathfactory/content-library/) にアセットを追加するときは、パブリックタイトルと内部タイトルの両方がアセットのタイトルと一致することを確認してください。アセットタイトルに余分なプレフィックスを追加しないでください（例: `[BLOG] - Title of blog`）。コンテンツタイプは既にコンテンツタイプフィールドで示されています。PathFactory が URL からアセットに関する情報を取得すると、タイトルに付加される `|GitLab` などの余分な SEO メタタイトル情報を削除してください。フォーマットと[ケース](/handbook/marketing/brand-and-product-marketing/content/editorial-team/#case)（センテンスケース）について [編集チームのガイドライン](/handbook/marketing/brand-and-product-marketing/content/editorial-team/) に従ってください。

ローカライズされたコンテンツを Pathfactory に追加するときは、`Public Configuration` セクションにローカライズされたタイトルと説明を入力します。これは外部の閲覧者がコンテンツとして見るものです。`Internal Configuration` の下に、英語のアセット名と言語を入力します（例: [Japanese] GitLab in Action Overview Demo）。`Internal Configuration` は、Pathfactory 内でのみ表示されます。

### トラック

コンテンツトラックを作成および編集するときは、トラックのステータスを他の人に知らせるために、次の命名規則を使用してください。これらのトラック名は、トラックの訪問者には表示されません。他の `Author` ロールがトラックの使用を理解できるようにトラックに名前を付けてください。後でアーカイブ/削除できるように、関連する場合はキャンペーンの開始日と終了日を追加します。トラックが特定のペルソナ向けの場合は、トラックタイトルに [ペルソナ](/handbook/marketing/marketing-operations/pathfactory/content-library/#personas) を追加します。トラックアセットが特定の GTM モーション向けに焦点を当てている場合は、タイトルに [GTM モーションを追加](/handbook/marketing/marketing-operations/pathfactory/content-library/#how-to-upload-content) します。

1. `[WIP] - [Campaign Name]` - 進行中のトラック; ライブではない
1. `[LIVE] - [Campaign Name]` - ライブトラック; トラフィックがトラックに流れている
1. `[ARCHIVED] - [Campaign Name]` - アーカイブされたトラック; アクティブに使用されていない; トラフィックが流れているかどうかは不明

### トラックラベル

トラックラベルは、コンテンツトラックが配信されるチャンネルを文書化するために使用されます。これらのトラックラベルは任意であり、PathFactory 内の機能には関係ありません。これらは、コンテンツトラックをどのように使用する予定かを PathFactory 内の他の `Author` ロールに示すために使用されるだけです。

| ラベル | 用途 |
| ------ | ------ |
| archived | 使用されなくなり、アーカイブのためにマークされたコンテンツトラック、将来的に削除される可能性あり |
| email | Marketo メールまたはナーチャストリームから送信されるコンテンツトラック |
| event | コンテンツトラックは企業イベントまたはパートナーイベントの一部として共有される |
| external | コンテンツトラックは外部で共有される（例: サードパーティウェブサイト） |
| in-app | 製品内メッセージまたは通知から送信されるコンテンツトラック |
| integrated campaign | コンテンツトラックは統合キャンペーンの一部 |
| internal use only | コンテンツトラックは GitLab チームメンバーのみに配信される |
| landing page | ランディングページでフォームに記入した後、訪問者にコンテンツトラックが送信される |
| organic social | コンテンツトラックはオーガニックソーシャルメディア投稿で共有される |
| paid search | コンテンツトラックは有料検索キャンペーンの一部 |
| paid social | コンテンツトラックは有料ソーシャルキャンペーンの一部 |
| SAE inbound | コンテンツトラックは SAE がインバウンドで共有するために PathFactory for Sales で有効になっている |
| SAE outbound | コンテンツトラックは SAE がアウトバウンドで共有するために PathFactory for Sales で有効になっている |
| SDR inbound | コンテンツトラックは SDR がインバウンドで共有するために PathFactory for Sales で有効になっている |
| SDR outbound | コンテンツトラックは SDR がアウトバウンドで共有するために PathFactory for Sales で有効になっている |
| survey/quiz | コンテンツトラックは調査またはクイズで共有される |
| web promoter | コンテンツトラックは PathFactory 内のウェブサイトプロモーターで使用される |
| website | コンテンツトラックは `about.gitlab.com` のウェブページにリンクされる |

### トラックフォルダ

トラックフォルダはチームごとに設定されており、マーケティング内の異なるチームがさまざまなユースケースのためにコンテンツトラックを使用および配信します。これにより、チームメンバーが自分のチームフォルダ内のコンテンツトラックのみを変更できるようになります。

### フォーム

フォームは、トラックで費やした時間の量ではなく、訪問者が 2〜3 個のコンテンツを消費した後に提供される必要があります。訪問者が次のコンテンツに進む（最初の 2〜3 個の後）と、フォームに入力するよう求められます。

フォームに名前を付ける際は、命名規則に従ってください:

1. WIP フォーム: `[WIP] Language - Purpose - Marketo Form ID`（例: `[WIP] Korean - Contact Us - 2963`）
1. ライブフォーム: `[LIVE] Language - Purpose - Marketo Form ID`（例: `[LIVE] Korean - Contact Us - 2963`）
1. テストフォーム（MktgOps のみ）: `[TEST] Language - Purpose - Marketo Form ID`（例: `[TEST] English - PF<>Bizible - 2715`）

## コンテンツトラック

新しいコンテンツトラックを作成する前に、どのタイプのコンテンツトラック（target vs. recommend）を作成するかを決定してください。以下の基準を使用して、最適なオプションを決定します:

### ベストプラクティス

**Target トラック**

1. キュレーションされたコンテンツ
1. 既知のオーディエンス
1. パーソナライズされたジャーニー（メール、ウェブサイト、ターゲットディスプレイ）
1. 5〜7 個のコンテンツ
1. ウェビナー登録およびフォローアップで target を使用
1. ガイド（GUIDE）するために target を使用

**Recommended トラック**

1. 動的コンテンツシーケンス（パフォーマンスの高いコンテンツを自動的にトラックの上部に移動します）
1. 匿名のオーディエンス
1. パーソナライズされたジャーニー（ウェブ、一般的なディスプレイ、ソーシャル）
1. 最も人気のあるジャーニーを追跡（どの作品が表示されているか、target トラックにエクスポートできる）
1. 発見（DISCOVER）するために recommend を使用

### コンテンツトラックの作成

1. 準備ができたら、Okta 経由で PathFactory SSO にログインします。
1. 上部のナビゲーションバーで `Content Activation` に移動 >>  `Standard Experiences`（旧 `Campaign Tools`）を選択 >> 作成したいコンテンツトラックタイプ（`Target` または `Recommend`）を選択します。
1. 右上の `Create track` ボタンをクリックします。
1. コンテンツトラックに名前を付けます。トラックが使用されるトピックまたはキャンペーンについて説明的にしてください。不明な場合は、他のコンテンツトラックの名前を確認してアイデアを得てください。コンテンツトラック名は内部使用のみで、訪問者には表示されません。各コンテンツトラックには一意の名前が必要です。コンテンツトラックに重複した名前を使用することはできません。
1. 既存のコンテンツトラックをクローンするか（そのコンテンツトラックからすべてのアセットがあなたのものにコピーされます）、単にゼロから始めるかを選択します。
1. コンテンツトラックが存在するフォルダを選択します。現在チームごとに設定されている組織のフォルダ階層に従ってください。
1. コンテンツトラックにアクセスするすべての人に、どのチャンネルで使用されるかを伝えるラベルでコンテンツトラックにタグを付けます（内部使用のみ）。
1. `Create Track` をクリックします。
1. 左パネルで、カスタム URL スラグをトラックの説明的なものに変更します（停止語なし、例: `ci-aware`）
1. 右上の `Add content` ボタンをクリックして、トラックにアセットを追加します。コンテンツライブラリのウィンドウがポップアップします。トピック、タイプ、ファネルステージなどでコンテンツを素早く追加するには、上部の並べ替えオプションを使用します。PathFactory のコンテンツトラックは、コンテンツのビンジ（訪問者が 1 つのアセット以上を読んで、1 回の訪問でより速く自己教育することによって彼らをパイプラインで加速させる）を奨励することを目的としています。したがって、ベストプラクティスとして、トラックには 1 つ以上のアセットを含めるべきです。

#### コンテンツトラック設定の構成

1. **このステップをスキップしないでください！** コンテンツトラックの `custom URL slug` を設定します。アセットのカスタム URL スラグの作成については [指示に従ってください](/handbook/marketing/marketing-operations/pathfactory/content-library/)。
   - **重要:** すべてのコンテンツトラックは、トラックへの将来の変更がリンクを破壊し、ユーザーエクスペリエンスを破壊しないように、カスタム URL スラグで設定する必要があります。
   - PathFactory リンクが実装された後にカスタム URL スラグを変更すると、それらのリンクが使用されたすべての場所（広告、メール、ウェブサイトなど）で更新する必要があります。
1. Search Engine Directive が `No Index, No Follow` に設定されていることを確認してください。
1. トラックの外観を設定します。
1. トラックの言語を設定します。
1. `Links & Sharing` をデフォルトのままにします。
1. `External Code` および `External ID 1` をデフォルト（`None`）のままにします。
1. ライブ使用のために承認されたコンテンツトラックリンクを提供する前に、`Cookie Consent` をオンにしてください。

#### プロモーター

[Promoters](https://support.pathfactory.com/kb/introduction-to-promoters/) は、訪問者がコンテンツトラックをナビゲートし、追加の推奨コンテンツを表示することを奨励するツールです。プロモーターはコンテンツトラックを通るガイドのようなものと考えてください。使用するプロモーターによって、コンテンツが訪問者にどのように、いつ提示されるかが決まります。以下の各機能の違いに注意してください。ライブする前に、各プロモーターをテストして、PathFactory エクスペリエンスの目標に最適なものを見つけることができます。

- `Header` 機能は `Sign Posts` および `Bottom Bar` プロモーターでのみ使用できます。
- `Header` は、コンテンツトラックに追加のブランディングを追加するために使用されます。
- `Flow`、`Sign Posts`、`Bottom Bar` を一緒に使用することはできません。3 つのうち 1 つを選択してください。
  - **Flow:** スクロール可能なコンテンツメニューにより、訪問者はコンテンツトラックで先に進むか、Next ボタンを使用するだけで前進できます。
  - **Sign Posts:** カスタマイズ可能な Next および Previous ボタンにより、訪問者がコンテンツをナビゲートできます。コンテンツを通る線形ジャーニー向けに使用されます。
  - **Bottom Bar:** ページ下部に沿った折りたたみ可能なコンテンツメニュー。
- `End Promoter`、`Exit`、`Inactivity` プロモーターは、`Flow`、`Sign Posts`、または `Bottom Bar` プロモーターと組み合わせて使用できます。
  - **End Promoter:** 最後のアセットを新しいタブで開きます。
    - 利用可能なオーバーライド:
      - リンク
      - CTA ラベル
      - 遅延（秒）
  - **Exit:** 訪問者がコンテンツトラックから移動しようとすると、推奨コンテンツウィンドウが表示されます。**ポップアップフリーのウェブエクスペリエンスを提供するために、Craig Mestel（CMO）および Michael Preuss（Director, Digital Experience）からの明示的な承認なしに Exit プロモーターを有効にしないでください**
    - 利用可能なオーバーライド:
      - 見出し
      - メッセージ
      - 表示するアイテム（現在のトラック内のアセットから選択）
      - 遅延（秒）
  - **Inactivity:** タブが非アクティブのときにメッセージが点滅します。
    - 利用可能なオーバーライド:
      - 非アクティブタブタイトル
      - 遅延（秒）

#### CTA

[Call-to-action（CTA）](https://support.pathfactory.com/kb/use-cta-buttons/) ボタンは、コンテンツトラック内の訪問者からのさらなるエンゲージメントを促進します。CTA は、任意の Target または Recommend Content Track に追加できます。これらの CTA ボタンは、フォームまたは URL のいずれかにリンクできます。

**CTA を作成する**

1. 設定（歯車アイコン）をクリックし、`User Experience` の下の `CTAs` に移動します。
1. `Add CTA` ボタンをクリックします。
1. CTA の名前を入力します（内部目的のみ）。CTA の主な目標が他者にわかるように具体的にしてください。
1. CTA のボタンラベルを入力します。これはユーザーに表示されるものです。CTA のコピーは通常最大 2〜3 単語（18 文字）で、`Watch a demo` などのアクションワードを含める必要があります。
1. CTA タイプ（フォーム、リンク、メール）を選択します。
   - **フォーム** を CTA タイプとして選択する場合、適切なキャプチャタグとスクリプトを **含める必要があります**。CTA として `WIP` フォームを選択しないでください。
   - **リンク** を CTA タイプとして選択する場合、適切な追跡のために UTM パラメータを **含める必要があります**（例: `utm_source=pathfactory&utm_medium=cta-name`）
   - **メール** の場合、CTA をクリックすることでユーザーが連絡するメールアドレスを単に入力します。
1. `Save` をクリックします。

#### フォーム戦略

フォーム戦略は、不明な訪問者からデータを収集するためにコンテンツトラックで使用されます。これは、トラック内のアセットを「ゲート」するか、エンゲージメントしきい値を持つトラックルールを作成することによって行われます（例: トラックで少なくとも 60 秒費やし、2 つのアセットを閲覧した）。すべてのコンテンツトラックがフォーム戦略をオンにする、またはオンにすべきではありません。これは、キャンペーンの目標に依存します。フォーム戦略は、トラックエントリポイントが、ウェブフォームまたはゲート付きランディングページをバイパスする、デジタル広告からの直接リンクである場合にのみ使用してください。既知のユーザーに送信しているため、メールから PathFactory にリンクする場合はフォーム戦略を完全にバイパスしてください。受信者（既知のユーザー）が未知のユーザーにメールを転送した場合、より良いユーザーエクスペリエンスのために、彼らの情報をキャプチャしないことを選択しました。

**注意:**  PathFactory アクティビティは [MQL スコアリングモデル](/handbook/marketing/marketing-operations/marketo/#scoring-model) に結びついています。これは、エントリポイントがランディングページからの場合、コンテンツトラックにフォーム戦略を追加する必要がないことを意味します。

- [フォーム戦略のベストプラクティス](https://support.pathfactory.com/kb/form-strategy-best-practices/)

**GDPR の考慮事項:** 時間ベースのフォーム戦略を使用するときは、ユーザーがフォームに入力する前にクッキー同意ポップアップを受け入れる十分な時間を持つために、少なくとも 15〜30 秒を目指してください。

#### コンテンツトラックにフォーム戦略を追加する

1. コンテンツトラック設定のサイドバー（左）で、「Forms Strategy」を `On` に切り替えます。
1. `Add Content` ボタンの下にある `View Form Strategy` をクリックします。
1. フォーム戦略が個別のアセットに適用されるか、トラック全体に適用されるかを決定します。個別のアセットの場合は、`Content Rules` を選択します。トラック全体のフォーム戦略の場合は、`Track Rule` を選択します。

**アセット別のフォーム戦略:**

1. `Content Rules` 行の `Add Rule` をクリックします。
1. キャンペーンの要件に従って必要としない限り、`General Form (2074) LIVE` フォームを選択します。`[WIP]` とマークされたフォームを選択しないでください。
1. `Display Behavior` の下で、ドロップダウンをクリックして、フォームを表示するアセットを選択します。（**注意:** コンテンツトラックに追加したアセットのみがドロップダウンに表示されます。トラックに _ない_ アセットでフォームを表示する場合は、最初に追加する必要があります。）
1. アセットでフォームが表示されるまでに遅延する秒数を選択します。`10 seconds` がデフォルトの選択です。
1. フォームの動作の追加オプションを選択します。コンテンツトラックまたは個別のアセットリンクをメールで使用する場合は、既知のオーディエンスと作業しているため、`Show to unknown users` のみを選択する必要があります。これにより、Marketo で既に既知のユーザーにフォームが表示されないようにします。ただし、ウェブまたは他のチャンネルでフォームを使用する場合は、`Show to unknown users` のみを選択する必要があります。
1. `Show to Known Visitors` がオフに切り替わっていることを確認してください。
1. `If submitted, allow form to show again` をオフのままにします。
1. 情報を提出することがフォームの使用に重要でない場合は、`allow visitors to dismiss the forms` ことができます。
1. `Keep promoters active when form is shown` オプションは `Author` 次第です。たとえば、コンテンツトラックで `Flow` プロモーターが使用されている場合、フォームが表示されている間、利用可能なコンテンツのサイドバーを引き続き表示できます。このオプションがオフに切り替えられている場合、訪問者はフォームに入力するまでサイドバー内のコンテンツをクリック _できなくなります_。

**コンテンツトラックのフォーム戦略:**

1. `Track Rule` 行の `Add Rule` をクリックします。
1. キャンペーンの要件に従って必要としない限り、`General Form (2074) LIVE` フォームを選択します。
1. `Display Behavior` で、表示されたコンテンツアセット数またはトラックで費やした合計時間に基づいてフォームを提供することを選択できます。
1. コンテンツトラックルールの他のすべてのオプションは、個別のアセットと同じです（上記参照）。

#### トラックリンクのテスト

1. アセット、CTA、フォームが正しく読み込まれ、プロモーターが意図した通り動作することを確認するために、エクスペリエンスをクリックスルーします。
1. 余分な `?` を削除してください（URL の末尾の直後には 1 つだけあるべきです）。
1. [UTM を追加する](/handbook/marketing/integrated-marketing/digital-strategy/digital-strategy-management/#utm-tracking) ときに余分な `&` に注意してください。
1. テストして、エクスペリエンスが意図した通り動作することを確認してください。

**トラックが LIVE（使用中）の場合:**

1. 使用中のターゲットトラックタイトルを `[LIVE] Name of track` に変更します。

**トラックがアーカイブされた（使用されなくなった）場合:**

1. 使用されなくなったターゲットトラックタイトルを `[ARCHIVED] Name of track` に変更します。

#### ライブコンテンツトラックへの調整

- `[LIVE]` コンテンツトラックにアセットを追加し、アセットの位置を調整できます。
- `[LIVE]` トラック内のアセットを削除したり、カスタム URL スラグを変更したりすると、訪問者のユーザーエクスペリエンスが妨げられ、意図したコンテンツトラックの代わりに `#all` トラックまたはフォールバック URL（`about.gitlab.com`）がアクティブになる可能性があります。削除する前に、アセットへのリンクが他のマーケティングチャンネルで使用されていないことを確認してください。

### 規範的バイヤージャーニーコンテンツトラック {#pbj-content-tracks}

**トラック作成の DRI: Campaign Managers**

- [この GDoc](https://docs.google.com/spreadsheets/d/1MYGePezz7666yXJJNRkif0ekJwxnIoJMBgFPshOm1IY/edit#gid=1504719228) は、_ライブリンクを含む_ Pathfactory で構築されているすべての規範的バイヤージャーニーへの進捗状況を追跡します。
- これらのトラックは [Target Tracks](https://gitlab.lookbookhq.com/authoring/content-library/target) > Demand Gen > `Segment Campaigns` の下に存在します（フォルダが膨大になった場合は変更される可能性があります - 必要に応じて HB を更新）
- これらのトラックは、マーケティング全体で協力的に反復される [規範的バイヤージャーニー（"PBJs"）](/handbook/marketing/prescriptive-buyer-journeys/) と一致します
- Campaigns Team は、さまざまなスタイル、フォーム戦略、エンドプロモーター設定をテストして反復します。
- [サンプル "PBJ" トラック](https://gitlab.lookbookhq.com/authoring/content-library/target/57384) には、次の要素と設定が適用されています（簡単なクローン用）が、将来のものには 3〜4 個のアセットが含まれるのに対し、1 つのアセットしか含まれていません:
  - _Reminder Campaigns Team: 以下の例は単なる出発点です。実験とテストをお勧めします！_
  - トラック設定:（FYI）[これらの指示](/handbook/marketing/marketing-operations/pathfactory/#configure-content-track-settings) に従ってデフォルトに設定
  - トラック設定: カスタム URL スラグ（必須）: `[motion]-[stage]-[persona][#]`（例: `ci-awareness-prac1` または `vcc-`） - [詳細を見る](/handbook/marketing/marketing-operations/pathfactory/#configure-content-track-settings)
  - Flow: `ON` > `Start Free SaaS Trial`
  - End Promoter: `ON`
  - End Promoter Link: 規範的バイヤージャーニーの次のトラックを指すように設定します。（つまり、`CI Awareness Practitioner 1` にいる場合、エンドプロモーターを `CI Awareness Practitioner 2` に行くように設定して、次の段階に移動してビンジを続けます）
  - End Promoter CTA Label: 魅力的な CTA を追加しますが、短くしてください... 最大文字数 TBD
  - End Promoter Delay: 5 秒
  - Forms Strategy: メインオファーで 30 秒経過、またはトラック全体で 30 秒経過のいずれかの後に **Unknown Visitors** にトリガーされるように設定。
  - Forms Strategy: 却下不可。

## PathFactory フォーム

PathFactory で使用されるフォームは、ハードコードされた Marketo フォームスクリプトです。Marketo スクリプトを使用して PathFactory に追加されますが、フォーム入力の背後にある追加情報をキャプチャするために、PathFactory キャプチャタグとカスタムパラメータも含める必要があります。新しいフォームを作成する場合は、PathFactory キャプチャタグとカスタムパラメータを **スクリプトにハードコードする必要があります**。

### 新しい PathFactory フォームをリクエストする

PathFactory で使用する新しいフォームをリクエストするには、まずフォームが Marketo に存在する必要があります。存在しない場合は、最初にマーケティング Ops プロジェクトで [`form_request.md` テンプレート](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/blob/master/.gitlab/issue_templates/form_request.md) を使用して Issue を作成します。Marketo フォームが完了したら、マーケティング Ops プロジェクトで [`pathfactory_form.md` テンプレート](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/blob/master/.gitlab/issue_templates/pathfactory_form.md) を使用して Issue を作成します。

### キャプチャタグ

`Capture Tag` は、Marketo フォームコード自体に追加されたコードのスニペットです。`Capture Tag` は、提出されたフォームで訪問者のメールアドレスを認識し、PathFactory に送信します。これにより、PathFactory は訪問者のメールアドレスをエンゲージメントデータに関連付けることができます。訪問者は匿名ではなく、既知の訪問者になります。

PathFactory では、外部フォーム（外部 URL または Marketo から生成されたカスタム HTML によって追加されます）を使用します。フォームで提出された情報は、Marketo に直接送信されます。PathFactory が提出されたメールアドレスを訪問者のエンゲージメントデータに関連付けるには、`Capture Tag` を使用する必要があります。これにより、PathFactory は個人を既知の訪問者として識別できます。

## PathFactory リンク

- コンテンツトラックリンクのみが使用および共有されることを意図しています。コンテンツライブラリから個別のアセットリンクを共有しないでください。
- UTM を適切に適用する限り、複数のユースケースでコンテンツトラックリンクを使用できます。UTM を適用すると、トラックがさまざまなチャンネルでどのように機能したかを区別するのに役立ちます。
- リンクが切れたり、アセットが削除されたりすると、ユーザーはコンテンツトラックから `#all` トラックにリダイレクトされます。これには、PathFactory にアップロードされたすべてのアセットが含まれます。ユーザーが `#all` トラックにリダイレクトされない場合、`about.gitlab.com` に設定されている `Fallback URL` にリダイレクトされます。
- **Marketo メールで `about.gitlab.com` リンクを共有するときは、`lb_email=` パラメータを使用しないでください。このパラメータは、匿名のトラック訪問者を識別するために `learn.gitlab.com` リンクで使用されます。**

### Target トラックリンク

1. トラックのタイトルの隣にある `Get Share URL` 機能を使用します。`Share links` は、ウェブサイトなどの場所で使用されますが、`Email tracking links` はメールでのみ使用されます。**注意:** メールにある場合、それは既知のオーディエンスなので、トラック内のアセットをゲートしないでください。`share links` のみをウェブで使用し、それらのトラックは PathFactory 内にゲートされたアセットを _持つことができます_。
1. 特定のアセットを最初に表示する場合は、そのアセットがターゲットトラックの最初の位置にあるべきです。

### Recommend トラックリンク

1. recommend トラックリンクを使用するには、トラック内のアセットのいずれかをクリックし、右側のアセットウィンドウからリンクをコピーします。リンクを共有するために選択したアセットがユーザーに最初に表示されます。

### PathFactory リンクへの UTM の追加

1. まず、PF リンクに既存の疑問符 `?` があるかどうかを確認します。通常は 1 つあります。`?` がない唯一の場合は、カスタム URL を設定したときです。
1. 疑問符 `?` がある場合は、まず PF リンクの末尾にアンパサンド `&` を追加し、その後に UTM を追加します。
    - 例:
    - PF リンク: `https://learn.gitlab.com/c/10-strategies-to-red?x=53kuPb`
    - UTM 付き PF リンク: `https://learn.gitlab.com/c/10-strategies-to-red?x=53kuPb&utm_source=email&utm_campaign=test`
1. 疑問符 `?` がない場合は、まず PF リンクの末尾に疑問符 `?` を追加し、その後に UTM を追加します。
    - PF リンク: `https://learn.gitlab.com/c/10-strategies-to-red`
    - UTM 付き PF リンク: `https://learn.gitlab.com/c/10-strategies-to-red?utm_source=email&utm_campaign=test`

**Marketo リンク**

1. PF Marketo リンクの場合、通常は既に疑問符 "?" が含まれています。UTM を追加するには、まず PF リンクの末尾にアンパサンド `&` を追加し、その後に UTM を追加します。
    - 例: `https://learn.gitlab.com/c/devops-explained-git?x=GVFK3F&lb_email={{lead.Email Address}}&utm_source=email&utm_campaign=test`
1. 余分な `?` を削除してください（URL の末尾の直後には 1 つだけあるべきです）。
1. 余分な `&` に注意してください。
1. 品質保証目的のために、実装前にリンクをテストしてください。

**ランディングページのフォーム入力の背後にある PathFactory リンク**

1. ランディングページのフォーム入力の背後のリダイレクトとして PathFactory リンクを使用するときは、リンクのフォーマットは次のようになるべきです:

`https://learn.gitlab.com/c/gcn-dev-sec-ops-how-?x=XOIXTl&lb_email=`

**カスタム URL を持つコンテンツトラックの使用**

1. コンテンツトラックにカスタム URL がある場合、カスタム URL を持たないコンテンツトラックとは異なる場所に `?` があることに気づくでしょう。
    - カスタム URL なし: `https://learn.gitlab.com/c/gcn-dev-sec-ops-how-?x=XOIXTl&lb_email=`（`x=XOIXTl` = コンテンツトラック ID）
    - カスタム URL あり: `https://learn.gitlab.com/cicd/cloud-ci-tools-matur?lb_email={{lead.Email Address}}`

**マーケティングサイトからトラックにページを追加するときのトップナビゲーションを非表示にする**

1. アセットのソース URL の末尾に `?menu=hide` を追加します。たとえば、`https://about.gitlab.com/blog/2021/04/28/devops-platform-supply-chain-attacks/?menu=hide`

*注意: 追跡をシンプルに保つために、すべてのトラックでカスタム URL スラグを使用することを強くお勧めします。[カスタム URL スラグに関するビデオ](https://www.youtube.com/watch?v=VHgR33cNeJg)

## カスタムクエリ文字列

PathFactory のカスタムクエリ文字列マネージャーを使用すると、コンテンツトラックまたは Explore ページへのリンクを共有するときにクエリ文字列を管理および追加できます。

1. 右上隅のドロップダウンメニューで `Organization Settings` を選択します。
1. `Custom Query Strings` タブを選択します。
1. カスタムクエリを作成します。新しいクエリ文字列を保存すると、PathFactory でコンテンツトラックにアクセスして `Share` ボタンまたはアイコンをクリックするたびに、それが利用可能になります。

**注意:** Marketo のデフォルトクエリ文字列は、PathFactory との統合の重要な方法であるため、削除または編集しないでください。

## マイクロサイト

PathFactory の [Microsite Builder](https://support.pathfactory.com/kb/how-to-create-and-customize-a-microsite/) を使用すると、マーケターは、ナビゲーション付きのカスタム設計のランディングページまたはマルチページマイクロサイト内に複数のタイプのコンテンツトラックを表示できます。マイクロサイトは、特定のトピックまたはトピックについてユーザーを教育したい場合に使用する必要があります。マイクロサイトは万能薬ではなく、他のタイプのランディングページの代替でもありません。マイクロサイトがキャンペーンに適しているかどうか不明な場合は、#mktgops Slack チャンネルにお気軽にご連絡ください。

### ユースケース

- リソースセンター
- イベントまたはウェブキャストのフォローアップ
- パーソナライズ/コブランドのリソースハブ

### Explore Pages vs. マイクロサイト

マイクロサイトビルダーは、Explore Pages の使用方法を拡張し、より堅牢で高度な機能セットで Explore Pages を改善します。

マイクロサイトビルダーでは:

- 1 つのページに複数のコンテンツトラックを含めることができます。
- ナビゲーションで複数のページを結ぶ
- 独自のカスタムコードを使用してページセクションと要素を追加する

### マイクロサイトの作成

新しいマイクロサイトをリクエストしたり、既存のマイクロサイトを更新したりするには、[この Issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=pathfactory_microsite_request) を使用します。

マイクロサイトテンプレート:

- パーソナライズ/コブランドコンテンツハブ: `[Template] Partner Custom Microsite`
- リソースセンター: TBA
- イベントまたはウェブキャストのフォローアップ: TBA

## Explore ページ

[Explore pages](https://support.pathfactory.com/kb/introduction-to-explore/) では、訪問者がコンテンツトラック内のすべてのコンテンツアセットを素早く表示できます。作成する各 Explore ページは、既存の target または recommend コンテンツトラックの上に構築されます。

### ユースケース

- リソースセンター
- イベントまたはウェブキャストのフォローアップ
- コブランドリソースページ
- パーソナライズされた情報ハブ

### Explore ページの作成

**Explore ページを作成する前に、ベースとして使用するコンテンツトラック（target または recommended）を既に構築していることを確認してください。**

1. 左ナビゲーションから `Explore` を選択します。
1. `Create Explore Page` ボタンをクリックします。
1. Explore ページに名前を付け、ベースとして使用するコンテンツトラックを選択します。既存の target または recommend コンテンツトラックの上に完全に新しい Explore ページを作成するか、既存の Explore ページをクローンすることができます。
1. Explore ページが存在するフォルダを選択し、`Create Explore Page` をクリックします。コンテンツトラックの dept. によるフォルダの階層に従ってください。
1. Explore ページの色、フォント、画像、レイアウトは、`Appearances` でカスタマイズできます。`Page Settings` の下の Explore ページの左ナビゲーションから希望の外観を選択します。
1. `Page Settings` の下で、`Search Engine Directive` が `No Index, No Follow` に設定されていることを確認します。
1. `Layout Settings` の下で希望のレイアウトを選択します。
1. `Content Settings` の下で希望のコンテンツ設定を選択します。
1. Explore ページを完全にテストすることを確認してください。

### Explore ページの FAQ

**カバー画像の背後の背景色を変更できないのはなぜですか？**

カバーの背景色は、カバー画像が「Fixed Width」に設定されている場合にのみ表示されます。このため、色選択の四角形は、「Fixed Width」が選択されている場合にのみ利用できます。

**Explore ページにこのヘッダーが必要ありません、どうやって取り除きますか？**

ヘッダーは、Explore ページに選択したベースコンテンツトラックから Explore エクスペリエンスに適用されます。Explore ページにヘッダーを表示したくない場合は、ベースコンテンツトラックに移動してヘッダーをオフにします。

**Explore ページのコンテンツの順序が気に入らないのですが、どうやってコンテンツを移動しますか？**

Explore ページのコンテンツへのすべての変更は、Explore ページが構築されているベースコンテンツトラックで行う必要があります。これにはコンテンツの順序も含まれるため、コンテンツの順序を変更したい場合は、ベースコンテンツトラックでそれを行う必要があります。

**ページのヘッダー用にカスタムヒーローを作成できますか？**

はい！`Appearances Configuration` に移動し、変更したい外観を選択することで、カスタムヒーロー画像を追加できます。次に、`Explore` タブをクリックして、ヒーローレイアウトの `cover image` を選択し、`Hero Image` の下にカスタム画像をアップロードします。Explore 画像のアップロードと、行った外観の編集を保存するために、両方とも `save` をクリックすることを確認してください（ヒーロー画像の推奨サイズは 1600x500 です）。

## 外観

[Appearances](https://support.pathfactory.com/kb/introduction-to-appearances/) を使用すると、コンテンツトラックの見た目と感触を制御できます。異なる外観グループを作成することで、新しいトラックを構築するたびに構成する必要なく、異なる色、フォント、ロゴをコンテンツトラックに素早く簡単に適用できます。外観設定では、プロモーターの見た目を制御し、トラックのファビコンを選択し、クッキー同意メッセージの外観を構成できます。

コンテンツトラックの次のコンポーネントの外観を変更できます:

1. プロモーター
1. クッキー同意とクッキーメッセージ
1. ファビコン
1. ヘッダー

[Appearances のウォークスルー](https://support.pathfactory.com/kb/introduction-to-appearances/)

**新しい外観グループを作成する**

1. ページの右上にある歯車アイコンをクリックします。ドロップダウンメニューから `Appearances` を選択します。
1. `Add Appearance` をクリックします。
1. 外観グループに名前を付けます。
1. 色付きのボックスをクリックして、テキストの色とプライマリカラーを選択します。
1. ドロップダウンメニューから選択して、テキストのフォントを変更します。テキストを太字にするには、`B` ボタンをクリックします。`A` ボタンをクリックしてテキストサイズを変更します。
1. 変更が完了したら、`Add Appearance` をクリックします。
1. `Appearance` グループを作成したら、このスタイリングをコンテンツトラックのいずれかに適用できます。`Experience Settings` の下のドロップダウンメニューから外観グループを選択するだけです。

## PathFactory のローカリゼーション

[Languages 機能](https://support.pathfactory.com/kb/introduction-to-languages/) を使用すると、コンテンツトラック内のプロモーターおよびウェブサイトプロモーターで訪問者に表示されるテキストを完全に制御できます。この機能では、英語以外の言語の言語グループを作成し、それらの言語に表示されるテキストをカスタマイズすることもできます。

[ローカリゼーションテクノロジースタック](/handbook/marketing/localization/localization_technology/) と PathFactory との統合はありません。PathFactory で新しい言語構成を作成し、PathFactory の言語構成メニューで利用可能なデフォルトの英語ソーステキストを送信するには、CSV を作成する必要があります。CSV では、翻訳のために列を含める/除外することしかできません。CSV ファイルを翻訳のために送信するためのフォーマットの詳細については、[ヘルプセンターの記事](https://help.smartling.com/hc/en-us/articles/360008000593-CSV-Files) を参照してください。

1. 現在、`Languages` には英語、フランス語、ドイツ語、韓国語、日本語の構成があります。
1. [PathFactory が現在サポートしている言語](https://support.pathfactory.com/kb/using-languages/)
1. [アセットタイプ（コンテンツタイプ）はローカリゼーションをサポートします](https://support.pathfactory.com/kb/2020-release-notes-release-f/)
1. Explore Pages には、Featured Label、Search Button Title、Search Input Field Placeholder、Filter By Content Type Title、Filter By Topic Title のローカライズされたテキストを設定できる Language Settings 内の専用タブがあります。[詳細を見る](https://support.pathfactory.com/kb/2020-release-notes-release-e/)。
1. コンテンツタグフィルターを使用して、コンテンツライブラリで言語別のアセット数のリストを表示できます。

### 新しい言語構成の作成

1. PathFactory で、右上のナビゲーションの歯車アイコンをクリックし、`User Experience` の下の `Languages` を選択します。
1. 右上の `Add Language` ボタン、または他の言語構成の下の左サイドバーをクリックします。
1. ドロップダウンメニューから言語を選択します。
1. 選択した言語で翻訳されていない言語構成のセクションがある場合、[Issue を開いてください](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=pathfactory_request)。

## PathFactory トラッキング

### PathFactory ウェブフック

ウェブフックを使用すると、PathFactory がサードパーティのシステムと自動的に接続し、誰かが PathFactory エクスペリエンスに訪問または対話するたびにデータを送信できます。3 種類の PathFactory ウェブフック（フォームキャプチャ、訪問者セッション、訪問者アクティビティ）があります。

現在、`Visitor Session Webhook` を使用して Marketo に接続しています。`Visitor session` ウェブフックは、セッションデータでトリガーされます。`visitor session` は、訪問者がコンテンツトラックに到着したときに開始され、その訪問者がコンテンツとのエンゲージメントを停止してから 30 分後に終了します。このウェブフックは、訪問者セッションが終了するとトリガーされます。これは、訪問者がコンテンツとのエンゲージメントを終了してから 30 分後に、ウェブフックがトリガーされ、Marketo にデータが送信されることを意味します。このウェブフックを通じて送信されるデータは、セッション中の訪問者がコンテンツトラックとその中のコンテンツアセットに対して持っていたエンゲージメントレベルの概要を提供します。

### PathFactory スコアリング

PathFactory は、コンテンツタイプ別にアセットを表示するために費やした時間に基づいて、人物にスコアを適用します。PathFactory スコアは [Marketo の Behavior スコア](/handbook/marketing/marketing-operations/marketo/#behavior-scoring) に組み込まれます。

| コンテンツタイプ | コンテンツエンゲージメントスコア | エンゲージメント時間しきい値（秒） |
| ------ | ------ | ------ |
| Analyst report | 1 | 120 |
| Assessment | 1 | 60 |
| Case Study | 1 | 45 |
| Data sheet | 1 | 45 |
| Demo | 1 | 60 |
| Infographic | 1 | 15 |
| Landing page | 1 | 45 |
| Presentation | 1 | 120 |
| Pricing | 1 | 30 |
| Product Article | 1 | 60 |
| Research report | 1 | 120 |
| Solution Article | 1 | 90 |
| Technical Blog Post | 1 | 60 |
| Testimonials | 1 | 30 |
| Thought leadership Blog Post | 1 | 60 |
| Topic Article | 1 | 120 |
| Video | 1 | 60 |
| Webcast | 1 | 600 |
| Whitepaper | 1 | 60 |
| eBook | 1 | 60 |

### Bizible

PathFactory の外部フォームは、JavaScript を使用して Bizible タッチポイントを適用します。

`MOps: Form Submit-Bizible`: PathFactory トラック内のフォーム送信時に Bizible タッチポイントを適用します

[PathFactory との Bizible アトリビューション](/handbook/marketing/marketing-operations/bizible/#amm-attribution-with-pathfactory) について詳しく学びましょう

## カスタム PathFactory フィールド

Salesforce および Marketo で利用可能なカスタム PathFactory フィールドがあります。

| **フィールド名** | **目的** |
| ---------- | ------- |
| PathFactory Asset Type | コンテンツのタイプ（whitepaper、video、eBook など）を分類するためのタグ |
| PathFactory Assets Viewed | 表示されたアセットの累積数。**これは消費した時間と関連していません！差分については Content Count を参照してください** |
| PathFactory Content Count | 消費されたアセットの累積数。例: 人が **単一のセッション** で _それぞれ最低 20 秒_ で 2 つのホワイトペーパー、1 つのビデオ、ブログ投稿を消費した場合、このフィールドは 4 を表示します。 |
| PathFactory Content Engagement Threshold | コンテンツアセットのエンゲージメントしきい値時間設定（秒単位）。 |
| PathFactory Content Journey | PathFactory エクスペリエンスを通じたユーザーのパスを示します（前のアセットから次に表示されたアセットを slug に基づいて） |
| PathFactory Content Language | コンテンツアセットの言語。 |
| PathFactory Content List | 消費された各アセットのコンテンツ id/slug の累積リスト。 |
| PathFactory Content Slug | コンテンツアセットのカスタム slug。 |
| PathFactory Content Source URL | コンテンツアセットの基礎となるソースコンテンツの URL。 |
| PathFactory Content Title | コンテンツアセットのパブリックタイトル。 |
| PathFactory Content URL | コンテンツトラックでレンダリングされているアセットの現在のパブリック URL。 |
| PathFactory Engagement Score | コンテンツライブラリ内の各アセットにエンゲージメントスコアを割り当てることができます。このスコアは PF から SFDC に渡され、コンテンツとの意味のあるエンゲージメントを判断するために使用されます。 |
| PathFactory Engagement Time | セッション中に人物がアセットを消費するのに費やした累積時間。 |
| PathFactory Experience Name | PathFactory トラック名 - [詳細](#content-tracks) |
| PathFactory External ID | トラック &/または アセットに追加できる非一意 ID。これを活用して、コンテンツを整理し、Marketing Automation Platform（つまり Marketo）で構成できます |
| PathFactory Funnel State | 各アセットには、アセットに最も適用可能なファネルのステージでタグ付けされます - Top of Funnel、Middle of Funnel、または Bottom of Funnel |
| PathFactory Query String | コンテンツエクスペリエンス URL に追加したクエリ文字列によってキャプチャされた値を返します。 |
| PathFactory Query String Value | クエリ文字列のキーの値。 |
| PathFactory Topic List | アセットは **トピック** でタグ付けされます。これは手動で設定され、[トラッキングコンテンツ](#content-tracks) リストと一致します。 |
| PathFactory Track Custom URL | コンテンツトラックのカスタム URL。 |
| PathFactory Track ID | コンテンツトラックの自動生成された PathFactory ID。 |

## PathFactory Analytics

PathFactory には、コンテンツの全体的な有効性を示すさまざまな分析とレポートが用意されています。詳細は [こちら](/handbook/marketing/marketing-operations/pathfactory/pathfactory-analytics) をご覧ください。

## iFrames について

iframe（インラインフレーム）は、ウェブサイト上の別の HTML ドキュメント内に HTML ドキュメントを埋め込むために使用されるタグ `<iframe> </iframe>` です。iframe HTML 要素は、広告などの別のソースからのコンテンツをウェブページに挿入するために使用できます。

PathFactory は、iframe を使用してコンテンツトラック内でコンテンツを提供します。一部のウェブページには、iframe 内でのコンテンツ表示を防止する制限があります。

- [iFrame ブロックについて](https://support.pathfactory.com/kb/about-iframe-blocking/)

## Google Chrome 拡張機能

[PathFactory 用の Google Chrome 拡張機能](https://support.pathfactory.com/kb/chrome-extension-faq/) を使用すると、PathFactory ユーザーは Gmail を介してコンテンツトラックと Explore ページを共有できます。この機能では、Gmail を使用してメールを送信するときに、コンテンツのサムネイルとタイトルを埋め込むことができます。[The Nook の FAQ を見る](https://support.pathfactory.com/kb/chrome-extension-faq/)。

### インストール方法

1. PathFactory Chrome 拡張機能を [こちら](https://chrome.google.com/webstore/detail/pathfactory-chrome-extens/mhhpkoilfamiipddihngolbcjboodcjf) からダウンロードします。アプリをダウンロードすると、Chrome のアドレスバーの右上に PathFactory のロゴが表示されます。
1. ブラウザの PathFactory アイコンは、Gmail にいない限りグレーアウトされた状態で表示されます。Google Chrome ブラウザの Gmail タブにいるときに PathFactory アイコンをクリックします。
1. Google の認証情報でサインインします。

### Gmail に PathFactory コンテンツを含める方法

1. Gmail で新しいメールを作成します。
1. メッセージを作成した後、`Send` ボタンの隣の PathFactory アイコンをクリックします。
1. フォルダシステムを使用して、目的のコンテンツトラックまたはコンテンツアセットに移動します。検索バーを使用して特定のトラックまたはコンテンツアセットを見つけたり、フィルターを使用して特定のトピックでコンテンツを見つけたりします。
1. メールにコンテンツを含める方法は 2 つあります:
   - メール内にコンテンツのサムネイルを埋め込む: コンテンツアセットを選択し、右下の `Insert` をクリックします。
   - コンテンツトラックまたはトラック内の特定のコンテンツアセットへのハイパーリンク: コンテンツトラックまたはコンテンツアセットの隣の `Copy Link` をクリックします。モーダルを閉じてメールに戻り、リンクするテキストを選択し、`Insert Link` ボタンをクリックして、コピーしたリンクを貼り付けます。

`Admins` のみが、Chrome 拡張機能で使用するために組織設定でコンテンツトラックを有効にできます。特定のコンテンツトラックを有効にしたい場合は、マーケティングオペレーションプロジェクトで Issue を開いてください。

### トラッキング

PathFactory Google Chrome 拡張機能は、次の場合にメールで送信されたコンテンツを表示するユーザーの匿名化のみを解除します:

1. メールが 1 人の受信者にのみ送信されている
   - つまり、To、CC、または BCC を使用している場合、合計 1 人の受信者のみ
1. コンテンツサムネイル埋め込みオプションを使用している（リンクのコピーオプションではなく）

## アクセス保護

[アクセス保護](https://support.pathfactory.com/kb/access-protection-set-up-and-configuration/) は、_許可リスト_ に基づいて有効なメールアドレスまたはメールドメインを持つ選択されたグループの人々のみがアクセスできるようにコンテンツとイベントを保護します。これにより、見るべきでない人にビューされる心配なく、コンテンツトラックまたは VEX イベントでより機密情報を見込み顧客、顧客、従業員と共有できます。

### アクセス保護のセットアップ

1. 歯車メニューを選択し、`Access Protection` を選択します。
1. 修正したい既存のグループを選択するか、新しいグループを作成します。各グループは、PathFactory で構築するエクスペリエンスに適用できる _許可リスト_ です。1 つ以上のグループを特定のコンテンツトラックまたは Explore ページに _許可リスト_ として適用できます。グループの名前と説明が他のユーザーに対して明確であることを確認してください。
1. アクセスを許可したい個人のメールアドレスまたはメールドメインを追加します。これは、入力フィールドに手動で入力するか、コンマまたはスペースで区切られたリストを貼り付けることで行います。
1. Enter を押してロックインし、`Add Email` を押して保存します。これらの値はいつでも編集または削除できます。

**注意:** Domains リストまたは Email Address リストにメールアドレスを持っている人は誰でもコンテンツにアクセスできます。

### ローカライズされたアクセス保護

1. 歯車メニューで、`Languages` をクリックします。
1. 横の言語グループを選択し、`Access Protection` に移動します。
1. アクセス保護がトラックに適用されたときにユーザーが受け取る可能性のあるすべてのメッセージを構成します:
   - **タイトル:** 訪問者が保護されたトラックにアクセスしようとしたときに見るタイトル
   - **メール成功メッセージ:** 訪問者がグループに入力されたメールアドレス/ドメインのリストにあるメールアドレスを入力したときに見るメッセージ
   - **メール失敗メッセージ:** 訪問者がグループリストにないメールアドレスを入力したときに見るメッセージ
   - **メール確認メッセージ:** 訪問者が既にトラックへのアクセスを得ており、メールに移動してアクセスするためのリンクをクリックする必要があるときに見るメッセージ
   - **メール指示メッセージ:** 訪問者が保護されたトラックにアクセスしようとしたときに見るメッセージ
   - **メール本文コンテンツ:** 訪問者がトラックへのアクセスを正常に得るために受け取るメールに表示されるメッセージ
   - **ヘルパーメッセージ:** 訪問者がプロセスを通じて支援するためにボタンの下のトラックにアクセスしようとしたときに表示されるメッセージ

**注意:** これらのメッセージは、PathFactory でアクセス保護を使用するすべてのユーザーに適用されます。すべてのユースケースに適用するために、メッセージは一般的であることを確認してください。

### アクセス保護の外観の変更

1. 歯車メニューで、`Appearances` タブに移動します。
1. コンテンツトラックが使用する外観を選択します。
1. `General` タブで、誰かがコンテンツトラックにアクセスしようとしたときに適用するスタイリングを構成します。フォントと色は、コンテンツトラックへのアクセスを取得しようとしている間に表示されるウィンドウ内のメッセージに適用され、ここで構成されたロゴは、誰かがアクセスを取得しようとしたときに最初に見るメッセージにも表示されます。

### コンテンツトラックへのアクセス保護の追加

1. コンテンツトラックに移動します。
1. 左側のトラック設定で、そのトラックに適用可能な言語とアクセス保護を設定します。

### アクセス保護の動作方法

1. 誰かがコンテンツトラックにアクセスしようとすると、メールアドレスを入力するよう求められます。
1. グループに含まれているメールアドレスを送信すると、確認メッセージが表示され、メールの受信トレイに移動する必要があります。そこで、コンテンツトラックにアクセスするためのリンクを含むサポート（`support@pathfactory.com`）からのメールが見つかります。
1. 訪問者は、このリンクをクリックして、メールアドレスのオーナーであることを検証する必要があります。メール内のリンクをクリックすると、コンテンツトラックへのアクセスを取得します。
1. 選択したアクセス保護グループに含まれていないメールアドレスを入力すると、構成で設定した警告メッセージが表示され、再試行する機能があります。
