---
title: "コンテンツライブラリ"
description: "コンテンツライブラリは、アップロードされたすべてのアセットを PathFactory に保存しタグ付けする場所です。"
upstream_path: /handbook/marketing/marketing-operations/pathfactory/content-library/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
---

## コンテンツライブラリ

コンテンツライブラリは、アップロードされたすべてのアセットを PathFactory に保存しタグ付けする場所です。

### コンテンツをアップロードする前に

1. 検索を使用して、既に追加されているかどうかを判断します。アセットには異なる URL がある可能性もあるため、徹底的に行ってください。既にライブラリにあるファイルや URL を追加しようとすると、システムから既に存在することが通知されます。たとえば、`https://about.gitlab.com/customers/extra-hop-networks/` と `https://about.gitlab.com/customers/extra-hop-networks` のアップロードは、異なる URL とみなされ、両方ともライブラリにアップロードされます（末尾の `/` に注意）。
1. アセットの最も価値のあるバージョン（ブログ投稿 vs. ケーススタディまたは PDF）を持っていることを確認してください。
1. アセットの最新バージョンを持っていることを確認してください。
1. [ブログスタイルガイド](/handbook/marketing/brand-and-product-marketing/content/editorial-team/) に従ってください。

### コンテンツのアップロード方法

1. コンテンツライブラリの右上にある `Add Content` をクリックします。
1. アセットをどのようにアップロードするか（Website URL、ファイルアップロード、CSV）を選択します。
    - Website URL の場合、URL をコピー/貼り付けします。複数の URL の場合、1 行に 1 つずつ貼り付けます。
    - ファイルアップロードの場合は、このオプションを選択し、ファイルアップロードウィンドウにファイルをドラッグアンドドロップするか、コンピュータから選択します。ファイルは最大 100MB です。
    - CSV を使用してコンテンツライブラリに複数のアセットをアップロードするには、[一括アップロードの手順に従ってください](#bulk-upload)。
1. `Public Configurations` の下にアセットのタイトルを入力します。タイトルに `| GitLab` などの SEO メタ情報がないことを確認してください。
1. 存在しない場合は、コンテンツの明確で簡潔な説明を提供してください。
1. ドロップダウンからコンテンツタイプを選択します。
1. 選択した `content type` に基づいてエンゲージメントスコアが入力されます。`content type` 別のスコアリングしきい値は [こちら](https://docs.google.com/spreadsheets/d/1Ihl2i9PTdxaiH7EuFCgMjXT-iR7QjvQj9oy6VILRk28/edit#gid=0) で参照できます
1. パブリックタイトルをコピーして、内部タイトルフィールドに貼り付けます。
1. ファネルステージと推定コストは、先ほど選択したコンテンツタイプに基づいて自動的に設定されます。これらの自動生成されたタグはそのまま残し、強制的に変更しないでください。
1. アセットの言語を設定します。
1. [GTM モーション](/handbook/marketing/plan-fy22/#gtm-motions) に基づいて、アセットの Business Unit を選択します。
1. 存在する場合は、アセットの有効期限を設定します。
1. External ID は空白のままにします。
1. アセットを分類する右側のコンテンツトピックを選択します。トピックでコンテンツにタグ付けするときは、[以下のコンテンツタグマップ](#content-types) に従ってください。

### アセットをライブラリに追加した後

1. ライブラリに追加したばかりのアセットを選択します。コンテンツのプレビューがコンテンツライブラリの右側に表示されます。`source URL` の下のウィンドウペインを下にスクロールして、`Custom URL slug` を見つけます。
1. カスタム URL スラグを、停止語（and、the など）のないコンテンツの説明的なものに更新します。
    1. **注意:** `[LIVE]` コンテンツトラックの一部であるカスタム URL スラグを変更しないでください。アセットがライブコンテンツトラックの一部であるかどうかは、コンテンツライブラリでクリックし、プレビューペインの下部にスクロールすることで確認できます。このアクションは、以前に共有されたこのアイテムへのリンクに影響を与える可能性があります。
    1. URL スラグを変更する必要がある場合は、マーケティングオペレーションプロジェクトで Issue を開いてください。
1. デフォルトでコンテンツトラックに `https://` を強制します。その結果、すべてのアセットは、コンテンツトラックで適切に動作するためにリンクで `https://` を使用する必要があります。_セキュアではない_ コンテンツをアップロードした場合、URL の隣にロックアイコンが表示されず、セキュアなコンテンツトラックで動作しません。まだない場合は、手動で `https://` を追加してください。

### 初期アップロード後にアセットのバージョンを置き換えるか更新する

同じリンクを保持しながらアセットソースを置き換える必要がある場合は、コンテンツライブラリから行うことができます。

- コンテンツライブラリからアセットを選択します
- 右側のプレビューパネルで、`Source URL` が表示されるまでスクロールします
- `Source URL` にホバーすると、右側に鉛筆が表示されます
- 鉛筆/編集アイコンをクリックします
- 表示されるポップアップで、関連するように `File Upload` または `Website URL` を選択します
- コンピュータから更新されたバージョンを選択します（または新しい URL を貼り付けます）
- アップロードをクリックします
- 「Preview」モードで新しいバージョンが表示されることを QA します
- トラックで使用される場合は、トラックプレビューで正しいバージョンが表示されることを QA します

### 一括アップロード

CSV ファイルを介してコンテンツライブラリに [複数の新しいアセットを一括アップロード](https://support.pathfactory.com/kb/csv-upload/) できます。

1. この [CSV テンプレート](https://d1nk153xyqlyhl.cloudfront.net/Content_CSV_Template.csv) をダウンロードします。この CSV ファイルは、CSV 一括アップロードテンプレートと同じ正確なフォーマットを持っています。
1. 新しいアセットのテンプレートにすべての情報を提供し、CSV として保存します。
1. コンテンツのアップロードの標準手順に従い、CSV アップロードを選択します。
1. ファイルをアップロードし、`Overwrite all duplicate content assets` チェックボックスを選択します。
1. `Upload File` ボタンを選択します。

コンテンツオーナーは、コンテンツがどのようにタグ付けされるべきかを理解しています。マーケティングオペレーションは一括アップロードを支援できますが、メタデータ（タイプ、トピックなど）でコンテンツをタグ付けする責任を負いません。一括アップロードでマーケティングオペレーションの支援が必要な場合は、[PathFactory Bulk Upload](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=pathfactory_bulk_upload) テンプレートを使用してマーケティングオペレーションプロジェクトで Issue を開いてください。

### アナリストレポート

有効期限は、有効期限後にコンテンツを自動的に非アクティブ化しません。有効期限を過ぎている場合は、コンテンツを手動で非アクティブ化する必要があります。PathFactory からアナリストレポートを期限切れにするには、`campaigns-expire-analyst` Issue テンプレートを使用して Campaigns プロジェクトで [Issue を開いてください](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=campaigns-expire-analyst)。

### Vimeo リンク

Vimeo ビデオを PathFactory にアップロードするには、まず [Vimeo にビデオをアップロード](/handbook/marketing/marketing-operations/vimeo/#upload) する必要があります。Vimeo にビデオがアップロードされたら、次の手順に従って PathFactory に追加します:

1. Vimeo でビデオの `Settings` に移動します。
1. `General > Privacy` の下で、`Hide this video from vimeo.com` を選択します。**注意:** 他のプライバシー設定では、ビデオをコンテンツトラックに埋め込むことができません。
1. `Where can this be embedded?` の下で、`Specific domains` を選択し、`learn.gitlab.com` および `gitlab.lookbookhq.com` を入力します。
1. プラス記号をクリックすると、フィールドの下にサブドメインが追加されたのが見えます。
1. `save` をクリックすると、Vimeo がビデオが非公開であることを示していることに気づきます（右上隅）。
1. 左サイドバーの `Embed` をクリックします。
1. 右上隅の `Embed Code` ボタンをクリックします。
1. Embed Code モーダルウィンドウからプレーヤー URL をコピーします。
1. この URL をコンテンツライブラリに追加し、通常通り構成します。

**Vimeo プレーヤー URL を含む埋め込みコードの例:**

`<iframe src="https://player.vimeo.com/video/514439220" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`

Vimeo プレーヤー URL は、埋め込みコード内の `https://player.vimeo.com/video/514439220` リンクです。これは PathFactory にアップロードするために使用されるリンクです。

アセットがコンテンツトラックに追加されると、動作する埋め込み非公開 Vimeo ビデオがあります。

### ライブラリからアセットを削除する

**重要:** 最初にどのコンテンツトラックにあるかを確認し、以下の手順に従わずにコンテンツライブラリからアセットを削除しないでください。コンテンツトラック内の特定のアセットは、統合キャンペーン、デジタル広告、または他のライブキャンペーンに直接結びついている可能性があります。ライブラリからアセットを削除すると、結果としてそれが含まれているコンテンツトラックから削除され、キャンペーンセットアップとトラッキングが破壊されます。

1. コンテンツライブラリからアセットを選択します。プレビューペインが右側にポップアップします。
1. プレビューペインの下部にスクロールして、アセットがどのコンテンツトラックにあるかを表示します。
1. アセットが存在する各トラックの `Author` と協力して、広告、メールなどにリンクされていないことを確認します。
1. アセットがどの外部チャンネルにも直接リンクされていないことを確認した後、アセットを最初に各コンテンツトラックから削除し、次にコンテンツライブラリから削除します。
1. この変更を [PathFactory 変更ログ](/handbook/marketing/marketing-operations/pathfactory/#changelog) に投稿します。

### アセットサムネイル

関連するサムネイル画像を取得しないアセットの場合、アセットのトピックに密接に一致するサムネイル画像をアップロードすることを選択できます。デザインチームは、PathFactory にアップロードするための [トピックサムネイル画像](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/tree/master/design/web-design/pathfactory/content-thumbnails) を提供しています。サムネイル画像は、次のトピックに対してオレンジまたはダークパープルの背景で利用可能です:

- Agile
- CI/CD
- Cloud Native
- DevOps
- Git
- IT Management
- Microservices
- Open Source
- Security
- Single app
- Digital transformation
- VSM
- Workflow

サムネイル画像を使用するには、画像が保存されている [Web Design リポジトリ](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/tree/master/design/web-design/pathfactory/content-thumbnails) にアクセスし、`png` フォルダを選択し、希望の背景色を選択し、画像をアップロードする PathFactory のアセットのトピックに最も密接に一致する `.png` を選択します。最適なトピックを判断するには、上記のトピックのリストを使用してください。

#### コンテンツライブラリ内の既存のアセットへのサムネイルの追加

1. コンテンツライブラリからアセットを選択します。
1. プレビューペインが右側に表示されたら、画像にホバーして編集アイコンをクリックします。
1. サムネイル画像タブの下で、ダウンロードしたばかりのサムネイル画像をアップロードするためにクリックします。すべての画像は既に PathFactory に適切なサイズになっています。

#### 新しくアップロードされたコンテンツへのサムネイルの追加

1. ライブラリに新しいコンテンツをアップロードするための [通常のプロセス](/handbook/marketing/marketing-operations/pathfactory/content-library/#how-to-upload-content) に従います。
1. `Public Configurations` の直下に、アセットのサムネイルがあります。画像にホバーして編集アイコンをクリックします。
1. サムネイル画像タブの下で、ダウンロードしたばかりのサムネイル画像をアップロードするためにクリックします。すべての画像は既に PathFactory に適切なサイズになっています。

### コンテンツタイプ

どのコンテンツタイプがアセットと一致するか不明ですか？以下の表をガイドラインとして使用して、PathFactory にアップロードするコンテンツに適切にタグ付けしてください。

| タイプ | 用途 | 例 |
| ---- | --- | ------- |
| Analyst report | アナリスト企業からライセンスされたサードパーティコンテンツ | [Gartner Magic Quadrant for ARO](https://about.gitlab.com/analysts/gartner-aro19/) |
| Assessment | 自己評価、クイズ、または成熟度モデルを提供することを主目的とするコンテンツ。 |  |
| Case study | GitLab の顧客のストーリーと意見に焦点を当てたウェブ記事。 | [Goldman Sachs improves from 1 build every two weeks to over a thousand per day](https://about.gitlab.com/customers/goldman-sachs/) |
| Data sheet | GitLab 製品または機能/機能セットの仕様を提供するドキュメント。 | [GitLab data sheet](/images/press/gitlab-data-sheet.pdf) |
| Demo | 技術製品の使い方を示すライブアクションのビデオ録画。 | [GitLab Security & Compliance Capabilities Demo](https://www.youtube.com/watch?v=UgCHtr-6uG8) |
| eBook | eBook は、読者が主題に関する包括的な理解を得るのに役立つ教育情報を提示します。eBook はカジュアルなトーンで、ほとんどの場合、認知ステージのアセットです。 | [Modernize your CI/CD](https://about.gitlab.com/resources/ebook-fuel-growth-cicd/) |
| Infographic | 情報やデータを表現するために使用される視覚的アセット。 |  |
| Landing page | | |
| Presentation | ライブトークのビデオ録画またはスライド。 | [Multicloudcon Keynote: The Multicloud Maturity Model](https://www.youtube.com/watch?v=R1LWQPAXFEE) |
| Pricing | GitLab 製品の価格を詳細に説明するドキュメント。 | [GitLab pricing](https://about.gitlab.com/pricing/) |
| Product article |  |  |
| Research report | 特定の研究方法論を使用して結果を検証する情報レポート。 | [2019 Global Developer Survey: DevSecOps](https://about.gitlab.com/developer-survey/) |
| Solution article |  |  |
| Technical blog post |  |  |
| Testimonials | GitLab の価値に関する顧客またはユーザーからの正式な声明。 |  |
| Thought leadership blog post |  |  |
| Topic article |  |  |
| Video | スクリプト付き、編集済み、ポストプロデュースされたビデオ。ビデオはプロモーション、教育、および/またはアニメーション化されている場合があります。 | [GitLab Infomercial](https://www.youtube.com/watch?v=gzYTZhJlHoI) |
| Webcast | プレゼンター、スライド、ライブオーディエンスを含むライブブロードキャストおよび録画。 | [Cloud Native Transformation with Ask Media Group](https://www.youtube.com/watch?v=3ED5NrVoVzk) |
| Whitepaper | ホワイトペーパーは、ニッチなオーディエンスのための特定の問題に取り組む、データ駆動型、説得力のある、意見的なレポートです。ホワイトペーパーは、新しい研究を提示し、特定の問題に取り組み、特定のソリューションを支持します。ホワイトペーパーは、トーンが学術的で権威的です。ホワイトペーパーは、コンセプトやソリューションを証明または検証するために、検討または意思決定段階で最もよく導入されます。 | [A seismic shift in application security](https://about.gitlab.com/resources/whitepaper-seismic-shift-application-security/) |

### コンテンツトピック

どのコンテンツトピックがアセットと一致するか不明ですか？以下の表をガイドラインとして使用して、PathFactory にアップロードするコンテンツに適切にタグ付けしてください。

| トピック | 用途 | 例 |
| ----- | --- | ------- |
| Agile | | |
| All-remote | リモートワーク（ベストプラクティス、ストーリー、アドバイスを含む）をカバーするコンテンツ。 | [The case for all-remote companies](https://about.gitlab.com/blog/2018/10/18/the-case-for-all-remote-companies/) |
| Amazon Web Services (AWS) | Amazon Web Services に関連するコンテンツ。考えられるユースケースは、顧客が GitLab + AWS を使用するケーススタディと統合情報 & チュートリアルです。 | [How to set up multi-account AWS SAM deployments with GitLab CI/CD](https://about.gitlab.com/blog/2019/02/04/multi-account-aws-sam-deployments-with-gitlab-ci/) |
| Azure | 特に Microsoft Azure について話すコンテンツ。考えられるユースケースは、GitLab + Azure クラウドの使用に関するチュートリアルや、競合コンテンツです。 | [Competitive analysis page for Azure DevOps](https://about.gitlab.com/blog/2020/07/09/integrating-azure-devops-scm-and-gitlab/) |
| Bitbucket | | |
| Checkmarx | | |
| Cloud native | コンテナベースの環境に関連するコンテンツ。具体的には、テクノロジーは、コンテナにパッケージ化されたサービスで構築され、マイクロサービスとしてデプロイされ、アジャイル DevOps プロセスと継続的デリバリーワークフローを通じて弾力性のあるインフラストラクチャ上で管理されるアプリケーションを開発するために使用されます。 | [A Cloud Native Transformation](https://about.gitlab.com/webcast/cloud-native-transformation/) |
| Continuous delivery | より小さな増分でソフトウェアを配信または更新する方法とツールをカバーするコンテンツ。これにより、より良いエンドユーザー体験が得られます。技術的および戦略的なコンテンツの両方が見つかる可能性があります。 | [Securing the journey to Continuous Delivery](https://about.gitlab.com/blog/2019/10/30/secure-journey-continuous-delivery/) |
| Continuous integration |  |  |
| DevOps | DevOps の方法、プロセス、文化、ツールに関連するコンテンツ。[Keys to DevOps success with Gene Kim](https://www.youtube.com/watch?v=dbkj0qXQ22A) |  |
| DevSecOps | ソフトウェア開発ライフサイクルへのセキュリティの統合と自動化に特に関連するコンテンツ。サイバーセキュリティに関連するコンテンツは、`devsecops` ではなく `security` でタグ付けする必要があります。 | [A seismic shift in application security](https://about.gitlab.com/resources/downloads/gitlab-seismic-shift-in-application-security-whitepaper.pdf) |
| Digital transformation | テクノロジーをビジネスのすべての側面に統合するプロセス、方法、戦略をカバーするコンテンツ。このコンテンツには、革新を促進し、新しい効率を構築し、より速くより高い価値を提供するための戦略、ツール、戦術も含まれます。 | [The cloud adoption roadmap](https://about.gitlab.com/blog/2019/12/05/cloud-adoption-roadmap/) |
| GitHub | | |
| GitOps | | |
| Google Cloud Platform (GCP) | | |
| Hashicorp | | |
| Infrastructure as code | | |
| Infrastructure automation | | |
| Jenkins | 特に Jenkins に関するコンテンツ。考えられるユースケースは、統合、競合、比較、ケーススタディです。 | [3 Teams left Jenkins: Here's why](https://about.gitlab.com/blog/2019/07/23/three-teams-left-jenkins-heres-why/) |
| JFrog | | |
| Jira | | |
| Kubernetes | Kubernetes の実装と使用に関連するコンテンツ。考えられるユースケースは、コスト/利益、チュートリアル、ユースケースです。 | [Kubernetes and the future of cloud native: We chat with Kelsey Hightower](https://about.gitlab.com/blog/2019/05/13/kubernetes-chat-with-kelsey-hightower/) |
| Open source | オープンソースプロジェクト、パートナーシップイニシアチブ、コミュニティコントリビューションをカバーするコンテンツ。 | [What to consider with an open source business model](https://about.gitlab.com/blog/2019/07/05/thoughts-on-open-source/) |
| Pulumi | | |
| Rally | | |
| Source code management | ソースコード管理、Git、GitLab Flow、バージョン管理に関連するコンテンツ。 | [GitLab Workflow: An Overview](https://about.gitlab.com/topics/version-control/what-is-gitlab-flow/) |
| Veracode | | |
| Version control and collaboration | | |

### 業種別バーティカル

業種別バーティカルは、[この Issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/2500) ごとに SFDC で標準リストを使用して設定されます。

1. Aerospace & Defense
1. Agriculture
1. Apparel
1. Automotive
1. Banking
1. Biotechnology
1. Chemicals
1. Communications
1. Construction
1. Consulting
1. Education
1. Electronics
1. Energy
1. Engineering
1. Entertainment
1. Environmental
1. Finance
1. Food & Beverage
1. Government
1. Healthcare
1. Hospitality
1. Insurance
1. Local
1. Machinery
1. Manufacturing
1. Media
1. Not For Profit
1. Other
1. Recreation
1. Retail
1. Shipping
1. State
1. Technology
1. Telecommunications
1. Transportation
1. Utilities

### ペルソナ

1. Software Developer
1. Application Development Director
1. Vice President Application Development
1. Security Analyst
1. Infosec Director
1. Chief Information Security Officer
1. Operations Engineer
1. Infra Engineering Director
1. Vice President Infrastructure and Operations
1. Program Manager

### Business Unit

1. CI/CD
1. DevOps Platform
1. GitOps

### サードパーティのウェブページからのブロックされたコンテンツ

所有していないドメインからウェブページをアップロードしようとして、そのウェブページが PathFactory トラック URL をホワイトリストに登録していない場合、コンテンツライブラリにこのコンテンツをアップロードできないというエラーメッセージが表示されます。

このウェブページを所有していないため、選択肢は限られています。これらのサードパーティのウェブページをコンテンツライブラリに追加できません。次の場合、コンテンツトラックの [End Promoter](/handbook/marketing/marketing-operations/pathfactory/#promoters) でこのコンテンツを使用できます:

1. [Target でコンテンツトラックを構築している](/handbook/marketing/marketing-operations/pathfactory/#content-tracks)（これは現在 Recommend ではサポートされていません）
1. [Flow または Signpost プロモーター](/handbook/marketing/marketing-operations/pathfactory/#promoters) を使用している（これは現在他の Target プロモータータイプではサポートされていません）

**できること:**

`End Promoter` を有効にしたら、ブロックされたコンテンツの宛先 URL を追加します。訪問者がコンテンツトラックの最後に到達すると、コールトゥアクション `End Promoter` が表示されます。訪問者がこのプロモーターをクリックすると、（ブロックされたコンテンツの）宛先 URL が新しいタブで開きます。

iFrame ブロックの詳細は [こちら](/handbook/marketing/marketing-operations/pathfactory/#about-iframes) で確認できます。

サードパーティのアセットをアップロードするときは、必ずセキュアな URL（`https://`）であることを確認してください。セキュアでないコンテンツはコンテンツトラックに表示されません。また、PathFactory トラックは iFrame 内で提供されるため、サードパーティのウェブページは iFraming を許可する必要があります。

### コンテンツの有効期限ポリシー

アップロードされた日から 2 年。2 年以上経過しているライブラリ内のアセットを確認し、コンテンツライブラリから期限切れにすることを検討してください。

**重要:** ライブラリからアセットを [削除する](#removing-an-asset-from-the-library) 前にマーケティングオペレーションに相談してください。統合キャンペーンに結びついているコンテンツトラックに対するレポートやアトリビューションに悪影響を与える可能性があります。

## PathFactory コンテンツ監査

四半期ごとから半四半期ごとに、マーケティングオペレーションとコンテンツチームは、PathFactory でコンテンツ監査を実施し、ライブラリ内のアセットが正しいメタデータでタグ付けされていることを確認します。PathFactory のコンテンツ監査は、コンテンツパフォーマンスレポートが正確であることを確認するために行われます。これにより、すべてのチームが特定のタイプとトピックのコンテンツがどのようにパフォーマンスするかを理解するのに役立ちます。ライブラリ内のアセットの正確なタグ付けがなければ、レポートのデータが歪み、コンテンツのパフォーマンスに対する理解が歪みます。

マーケティングオペレーションとコンテンツマーケティングチームの両方が、需要創出と製品マーケティングと協力して、GTM 戦略との整合性も確保します。
