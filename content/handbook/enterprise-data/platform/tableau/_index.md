---
title: "Tableau"
description: "GitLab における Tableau"
upstream_path: "/handbook/enterprise-data/platform/tableau/"
upstream_sha: "b751749fb746d2e0131db68b13218fc2e08cf6b2"
translated_at: "2026-04-29T10:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-09T20:42:10+00:00"
---

| クイックリンク | 開発者リソース | コミュニケーション |
| ---         | ---        | ---            |
| [Tableau Cloud - GitLab](https://10az.online.tableau.com/#/site/gitlab/home) | [GitLab Tableau 開発者ガイド](/handbook/enterprise-data/platform/tableau/tableau-developer-guide/) | [社内 Slack チャンネル](https://app.slack.com/client/T02592416/C03RMCEHVCP)  |
| [Tableau eLearning ポータル](https://elearning.tableau.com) |  [Tableau スタイルガイド](/handbook/enterprise-data/platform/tableau/tableau-developer-guide/tableau-style-guide/)  | [社外 Slack チャンネル](https://app.slack.com/client/T02592416/C031QE95QJU)   |
| [Tableau カスタマーポータル](https://customer-portal.tableau.com/s/) | [開発者向けのヒントとコツ](/handbook/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/) | |
| [Tableau ステータスページ](https://trust.salesforce.com/) | [ハンドブックへの Tableau 埋め込み](/handbook/enterprise-data/platform/tableau/embed-demo/) | |

## Tableau

Tableau は私たちのエンタープライズビジネスインテリジェンスツールです。ビジネスインテリジェンス分野の[リーダー](https://www.tableau.com/asset/gartner-magic-quadrant-2024)です。私たちは Tableau の本番環境を立ち上げるために[Tableau Blueprint](https://help.tableau.com/current/blueprint/en-us/bp_overview.htm)を適用しています。Tableau Blueprint は何千もの Tableau ユーザーからのプロセスとベストプラクティスを概説しています。私たちは GitLab の TeamOps と文化に沿ってこれらのプロセスとベストプラクティスを適用します。

<details markdown=1>

<summary><b>Tableau の用語と定義</b></summary>

- **接続:** Tableau がデータソースと通信するために使用する方法。
  - **ダイレクトトゥソース:** Tableau が Snowflake や Google Drive などのデータソースと通信するためにビルトインコネクターを使用する場合。
  - **仮想接続:** データソースへの通信が管理チームによって設定されたキュレーションされた接続。通常はダイレクトトゥソース接続をシミュレートします。
  - **公開データソース:** データモデリングの結果である単一のテーブルへのキュレーションされた接続。Tableau Cloud に保存されます。
  - **ファイルへの接続:** システム内のファイルから Tableau にデータを取得する方法。Excel ファイル、CSV、PDF などが含まれます。
  - **サーバーへの接続（クラウド）:** データソースに接続する方法。Tableau Cloud と Snowflake を含むオンラインデータソースへの接続が含まれます。
- **接続認証情報:** データソースへの接続を証明するために使用される情報。
  - **組み込み:** 認証情報が接続の一部として保存されます。
  - **ユーザーへのプロンプト:** 接続が使用されるたびに認証情報を入力する必要があります。
- **接続の鮮度:** 接続がデータソースと通信する頻度を決定します。
  - **ライブ:** データが必要になるたびにデータソースにクエリを送信します。
  - **エクストラクト:** プロンプトに応じてデータソースにクエリを送信し、結果をカスタムマイクロデータベースに保存します。
  - **スケジュールされたエクストラクト:** 固定された頻度でデータソースと通信して保存データを更新する、Tableau Cloud にホストされたエクストラクト。
- **データモデリング:** 複数のデータテーブルを単一の結果テーブルに結合する方法。
  - **データウェアハウス:** テーブルを結合するクエリはデータウェアハウスリポジトリに保存され、データウェアハウスでマテリアライズされます。
  - **Tableau データモデリング:** Tableau の接続インターフェース内でテーブル間のリレーションシップが直接定義されます。
  - **Tableau ブレンディング:** ビジュアライゼーション構築インターフェースでデータソース間のリレーションシップが定義されます。
  - **カスタム SQL:** 接続内で SQL を使用してテーブル間のリレーションシップを定義します。
- **Tableau オブジェクト:** 開発者がビジュアライゼーションを作成するために使用する要素。
  - **プロジェクト:** Tableau Cloud で維持されるフォルダ構造。コンテンツ権限が管理される場所。
  - **データソース:** 接続とデータモデリングのコレクションで、公開および単独のファイルとして保存できる単一の結果テーブルを作成します。
  - **フロー:** 接続と変換ステップのコレクションで、通常 1 つ以上のデータソースを作成します。フローは Tableau Prep アプリケーションを使用して作成されます。一部の人は Prep とフローを同義語として使用する場合があります。GitLab ではすべての変換をデータウェアハウスレベルで DBT を通じて行うことを推奨しています。
  - **ワークブック:** ビジュアライゼーション作成のベースファイル。
    - **ビュー:** チャートやその他のビジュアライゼーションを表す要素。
    - **ダッシュボード:** ビューとレイアウト要素のコレクション。
    - **ストーリー:** ビューが特定のフィルタやパラメータ値に設定され、順次構造で表示されるビューとレイアウト要素のコレクション。

</details>

## ガバナンスモデル

ガバナンスは、データとアナリティクスへの信頼と自信を生み出すコントロール、ロール、繰り返し可能なプロセスの組み合わせです。プロジェクトチームの IT とビジネスの両方のステークホルダーがデータとコンテンツガバナンスを一緒に定義する責任があります。成功したセルフサービス環境では、適切なレベルのガバナンスが説明責任を生み出し、GitLab のユーザーに信頼できるコンテンツへのアクセスを制限するのではなく有効にします。ガバナンスはスペクトルであり、異なる種類のデータとコンテンツには異なるガバナンスが必要です。スキルと期待は進化するため、一度限りの取り組みではありません。定期的にガバナンスプロセスを評価することで、新しいアナリティクルスキルとユースケースが開発されるにつれて進化し、より多くの責任を委任できます。

私たちは GitLab でセルフガバナンスモデルを使用しています。セルフガバナンスモデルでは、IT とビジネスユーザーの間で強力なコラボレーションがあります。認定されたコンテンツとデータソースが利用可能で、クリエイターとエクスプローラーによって定期的にワンオフコンテンツが作成されています。ビューアーは認定、ワンオフ、サンドボックスコンテンツの状態の違いを理解しています。検証、プロモーション、認定のプロセスはすべてのスキルレベルのユーザーによって十分に定義・理解されています。組織全体でアナリティクルスキルが向上するにつれて、ユーザーが適切な権限レベルでコンテンツを消費、作成、プロモートの間で切り替えるため、モダンアナリティクスワークフローのロールの境界は流動的です。

## BIOps

私たちの Tableau セルフガバナンスモデルは、BIOps を使用して [GitLab Tableau プロジェクト](https://gitlab.com/gitlab-data/tableau)で管理・適用されています。BIOps アプローチは GitLab のリポジトリ、メンテナー、コードレビュー機能を活用してガバナンスモデルを管理します。Tableau には現在 Git インテグレーションがないため、BIOps は完全に自動化されておらず、いくつかの制限があります。BIOps ワークフローを説明する README ファイルは近日公開予定です。Q1 と Q2 に GTM と Finance チームとこのアプローチを繰り返し、必要に応じて調整・適応していきます。

### Tableau プロジェクトアーキテクチャ

Tableau Cloud のプロジェクトアーキテクチャは GitLab Tableau プロジェクトで複製・管理されています。詳細については [GitLab Tableau プロジェクト](https://gitlab.com/gitlab-data/tableau)を参照してください。以下はプロジェクトフォルダの説明と Tableau Cloud にあるプロジェクトアーキテクチャのサンプルです。

Tableau プロジェクトのトップレベルフォルダとそのガバナンスレベルには以下が含まれます：

- `Development`: このフォルダのコンテンツには意図的にガバナンスがなく、ユーザーが素早くプロトタイプを作成できるようにします。そのため、サンドボックスコンテンツと見なす必要があります。
- `Production`: Tableau Production フォルダ環境は、検証された高品質コンテンツが公開され、ビジネスクリティカルなレポーティングのためにエンドユーザーがアクセスできる指定エリアです。このフォルダのコンテンツはプロジェクトリーダーによってレビュー・承認されています。

<details markdown=1>

<summary><b>プロジェクトとサブプロジェクトフォルダの説明</b></summary>

- **トップレベルプロジェクトフォルダ:** **トップレベルプロジェクトはワークブックの目的を提供します。** Production と Development の 2 つのトップレベルプロジェクトがあります。これは Tableau ユーザーが最初に到達する最も高いフォルダレベルです。これらのフォルダはユーザーを Production パス（認定コンテンツを表示）または Development パス（サンドボックスコンテンツを表示）のいずれかに誘導します。
  - **第 2 レベルサブプロジェクトフォルダ:** **第 2 レベルプロジェクトはワークブックの主要所有者を提供します。** このアーキテクチャのレベルには、Go To Market Motion などの各部門とクロスファンクショナルビジネスモーションのサブプロジェクトが含まれます。各部門とクロスファンクショナルビジネスモーションは独自のサブプロジェクトを持ちます。これにより、特定の部門とビジネスモーションのニーズに基づいて、サブプロジェクトレベルで異なる種類のセキュリティを作成する柔軟性が得られます。
    - **第 3 レベルサブプロジェクトフォルダ:** **第 3 レベルプロジェクトはワークブックを見ることができる人のセキュリティを提供します。** SAFE データプログラムはこのアーキテクチャのレベルで適用されます。これにより、部門ごとにより多くのセキュリティコントロール、拡張された SAFE データプログラムコントロール、行・列レベルのセキュリティ、機密情報に関するセキュリティを将来的に適用する柔軟性が得られます。このレベルでセキュリティを適用することで、部門とビジネスモーションごとにカスタマイズされたスケーラブルなセキュリティプログラムが可能になります。

</details>

<details markdown=1>

<summary><b>プロジェクトアーキテクチャ</b></summary>

1. **Development**（サンドボックス環境）
    1. **Customer Success**
        1. **General**
            1. Data Source Name
            2. Workbook Name
        1. **SAFE**
            1. Data Source Name
            2. Workbook Name
        1. Workbook Name
    2. **Data Team**
    3. **Engineering**
    4. **Finance**
    5. **Go To Market**
    6. **Marketing**
    7. **People**
    8. **Product**
    9. **Sales**
    10. **Security**
1. **Production**（[Trusted Data Development Process](/handbook/enterprise-data/how-we-work/data-development/#trusted-data-development) にマッピング）
    1. **Customer Success**
        1. **General**
            1. Data Source Name
            2. Workbook Name
        1. **SAFE**
            1. Data Source Name
            2. Workbook Name
    2. **Data Team**
    3. **Engineering**
    4. **Finance**
    5. **Go To Market**
    6. **Marketing**
    7. **People**
    8. **Product**
    9. **Sales**
    10. **Security**

</details>

<details markdown=1>

<summary><b>BIOps のロールと責任</b></summary>

権限の詳細については [project-permission-structure](/handbook/enterprise-data/platform/tableau/#project-permission-structure) セクションを参照してください。

1. **Tableau 管理者 / メンテナーの責任:** これらのリーダーはトップレベルプロジェクトに紐づくサブプロジェクトのコンテンツ公開と GitLab Tableau プロジェクトの維持に責任を持ちます。このロールには Tableau Cloud サイト管理の責任は特に含まれませんが、一部のトップレベルプロジェクトリーダーは Tableau Cloud サイト管理者でもあります。
2. **プロジェクトリーダー / コードオーナーの責任:** プロジェクトリーダーは機能部門とチームから参加します。これらのリーダーは、部門のフォルダとコードオーナーとしての Go To Market フォルダなどのクロスファンクショナルなサブプロジェクトフォルダへのコンテンツ公開のレビューと承認に責任を持ちます。プロジェクトリーダーの完全なリストは[こちら](https://10az.online.tableau.com/#/site/gitlab/workbooks/2730535/views)にあります。

</details>

## Tableau コンテンツの公開

Tableau ワークブックとデータソースは Development と Production の 2 つのフォルダ環境に公開できます。以下では各フォルダ環境の公開プロセスを詳しく説明します。

### Development フォルダへの公開

すべての Tableau コンテンツ開発は Development プロジェクトフォルダから始まります。Development フォルダはサンドボックス環境で、Tableau 開発者がコンテンツを自由に実験・イテレーションしてチームメンバーと初期のピアレビューのために共有できます。Tableau 開発者は[コレクション](https://help.tableau.com/current/pro/desktop/en-us/collections.htm)を使用してサンドボックス作業を整理し、簡単にアクセスして共有できます。Tableau クリエイターは Development フォルダで機密 SAFE/PII/MNPI データを扱う場合は [SAFE 開発ワークフローガイドライン](/handbook/enterprise-data/platform/safe-data/#tableau)に従う必要があります。

### Production への公開要件

Production フォルダは、それぞれの機能エリアのプロジェクトリーダーによってピアレビューおよびテストされたダッシュボードを Tableau ユーザーが見つけることができる別の環境です。Production フォルダのコンテンツは以下の要件を満たしています：

1. **ドキュメント**
   - **Issue 作成**: コンテンツの公開には、分類と検索性のために自動的にラベル付けされる Issue が必要です。
   - **ハンドブックのドキュメント:** GitLab ハンドブックにドキュメントを作成し、Tableau コンテンツの説明にリンクしてダッシュボードにリストする
1. **検証承認**
   - **Tableau プロジェクトリーダー（ビジネス部門所有者）の承認**: Tableau プロジェクトリーダーはプロモーションを承認する必要があります。
   - **テクニカルオーナー（データスチュワード）のサインオフ**: プロジェクトリーダーはデータとコンテンツの有効性についてテクニカルオーナーのサインオフを要求する場合があります。
   - **クロスディビジョン開発**: クロスディビジョンのコンテンツは複数のビジネスオーナーによるレビューが必要です。クロスディビジョンコンテンツには GTM などが含まれます。
1. **データセキュリティ**
   - **データセキュリティ**: SAFE または制限付きデータには、適切なフォルダおよび/またはデータソースアクセス権限コントロールを適用する必要があります。一般アクセスデータには、制限付き（SAFE）データが使用されていないことの確認が必要です。
1. **一意性**
   - **コンテンツの一意性:** コンテンツは Production に対して一意です
1. **ワークブックフォーマットの要件**
   - **ワークブックフォーマット**: ワークブックには GitLab ロゴを含める必要があります。
   - **コンテンツの説明**: ワークブックとデータソースには、コンテンツの目的を提供する 1〜2 文の簡潔な説明が必要です。

### Production への公開手順

![Tableau の Production への公開](/images/handbook/enterprise-data/platform/tableau/publication_to_production.png)

#### 初回の Production へのプロモーション

1. **開発者が Development に公開**: 開発者はコンテンツを Tableau Development フォルダに公開します。これはコンテンツがレビューと最終的なプロモーションのために準備される最初のステップです。
1. **開発者が Issue を作成**: 開発者は Production へのプロモーションプロセスを文書化する [GitLab Issue](https://gitlab.com/gitlab-data/tableau/-/issues/new) を作成します。すべての必要なリクエストドキュメントと要件をリストした `Tableau Publish Workbook or Data Source to Production` テンプレートを使用してください。
1. **開発者がコンテンツの有効性を確認**: 開発者は Issue に文書化されたプロモーション基準の要件をコンテンツが満たしていることを確認します。次に、コンテンツがレビューの準備ができていることを示すために、関連する[部門プロジェクトリーダー](https://10az.online.tableau.com/#/site/gitlab/workbooks/2730535/views)に Issue を割り当てます。
1. **レビュープロセス**: プロジェクトリーダーは Issue とコンテンツをレビューします。Production 要件への準拠を確認し、コンテンツの準備状況を評価します。必要に応じて、承認者はコンテンツの修正または更新を提案します。開発者は続行する前にこれらに対処する必要があります。
1. **最終プロモーション**: すべての要件が満たされ承認が得られると、プロジェクトリーダーはコンテンツを Development から Production に移動します。このステップにより、コンテンツが正式にビジネス利用可能になります。

#### Production のコンテンツの編集と更新

Production にあるコンテンツを編集または更新するには 2 つのオプションがあります：

1. **更新して元のものを上書き:** これはワークブックやデータソースへの大きな変更に必要です。変更には、データソースの置き換えや編集、ロジック、カスタム SQL、計算フィールドの変更や追加が含まれます。これは推奨されるオプションで、開発者がワークブックまたはデータソースを編集し Development フォルダに保存します。次にレビューと検査が行われます。承認後、プロジェクトリーダーが Production に上書きします。
1. **開発者が Production で編集することを許可する:** 48 時間以内に Production コンテンツを自分で編集/更新するアクセスを許可します。これは外観の改善、スペルの修正、小さなフィルターの変更、緊急の問題などの小さな変更にのみ許可されます。

### Tableau スタイルガイド

デザインのベストプラクティスとリソースの詳細については、[Tableau スタイルガイド](/handbook/enterprise-data/platform/tableau/tableau-developer-guide/tableau-style-guide/)ハンドブックページを参照してください。

### Tableau 公開サービスレベル目標（SLO）

**Production 公開 SLO**

プロジェクトリーダーはそれぞれの部門フォルダに責任を持ちます。Production へのコンテンツのプロモーションリクエストのレビューと承認を提供します。

**Development 公開 SLO**

個々の Tableau 開発者は部門の Development サブプロジェクトにオンデマンドで開発コンテンツを公開できます。

## デプロイ

Tableau Cloud は GitLab の既存のテクノロジー投資を活用し、IT インフラストラクチャに統合して、ユーザーにセルフサービスのモダンアナリティクスプラットフォームを提供します。

### Tableau の未使用コンテンツアーカイブポリシーとプロセス

効率的でクリーンかつユーザーフレンドリーな Tableau 環境を維持するために、自動アーカイブプロセスが実装されています。このポリシーは Tableau GitLab Cloud 環境内の未使用および非アクティブなコンテンツをアーカイブする手順の概要を示します。Tableau GitLab Public とサンドボックスはこのポリシーから除外されます。

アーカイブの範囲：

90 日以上未使用のワークブックとデータソースはアーカイブされ、検索または直接リンク経由でアクセスできなくなります。アーカイブされたアイテムは BI チームへのリクエストにより取得できます。アーカイブプロセスは自動化されており、毎月 15 日にコンテンツを `Admin Archive` フォルダに移動することで発生します。

アーカイブの除外：

1. Tableau GitLab Public に公開されたワークブックとその依存データソース。
1. Tableau タグ `Do NOT Archive` で示された所有者が保持を要求したアイテム。
1. 個人フォルダに保存されたコンテンツはアーカイブされません。これは所有者のみが閲覧でき、環境を乱さないためです。

アーカイブのお問い合わせ：
アーカイブされたコンテンツに関する質問やリクエストは BI チームにお問い合わせください。管理アーカイブのドキュメントは[こちら](/handbook/enterprise-data/platform/tableau/tableau-admin-guide/#stale-and-unsued-content-management)をクリックしてください。

### 権限

GitLab の透明性の価値に基づき、すべての GitLab チームメンバーはデフォルトで Tableau 内のすべてのコンテンツにアクセスできます。ただし、公開会社として私たちは [SAFE フレームワーク](/handbook/legal/safe-framework/)に従い、職務で SAFE データが必要なチームメンバーに Tableau 内の特定の機密・機密データへのアクセスを制限する必要があります。Tableau では、プロジェクトレベルのユーザーグループを通じてこれらの SAFE データ権限を設定します。

#### ユーザーグループ

ユーザーグループは Tableau サイト全体で権限を設定するために使用する唯一の規定された方法です。ユーザーグループは、コンテンツに対して同じアクセスと権限のセットを持つ必要があるトピック、プロジェクト、または組織構造に基づくユーザーのコレクションです。すべてのユーザーは General Access ユーザーグループのメンバーになり、必要に応じてより多くのユーザーグループに追加できます。

ユーザーグループにより、ビジネスチームは特定されたルールに基づいて公開コンテンツへのアクセス可能性を管理できます。制限付きアクセスユーザーグループの作成リクエストは、Tableau プロジェクトの [Issues](https://gitlab.com/gitlab-data/tableau/-/issues/new#) セクションの `Standard Data Team Issue` テンプレートを通じて行えます。

#### ユーザーグループのリスト

以下の各セクションは制限付きアクセスユーザーグループと指定オーナーに対応しています。制限付きユーザーグループへのアクセスは、`Tableau SAFE Access` または `Tableau Special Permissions` アプレットを使用して Lumos アプリ経由で行えます。注意: ユーザーグループにアクセスするには、指定オーナーの承認が必要です。指定オーナーはアクセスリクエスト時に Lumos で確認できます。

- \***General SAFE Access:** このグループは[SAFE](/handbook/enterprise-data/platform/safe-data/)に保持されるべき重要な非公開情報を含むデータの閲覧と開発を許可します。このグループに追加されるには[Designated Insiders](/handbook/legal/publiccompanyresources/#designated-insiders)リストに掲載されている必要があります。
- [SAFE データへのアクセス](/handbook/enterprise-data/platform/safe-data/)を取得して SAFE Access グループに参加するには、[Lumos](/handbook/security/corporate/systems/lumos/ar/)経由でリクエストを送信してください。

- **Ecosystem Sales and Operations**

- **Internal Audit Restricted Access**

- **People Restricted Access**

#### プロジェクト権限構造

ユーザーグループはプロジェクトとサブプロジェクトレベルで適用されます。私たちは Administrator ユーザーグループと Access Control ユーザーグループの 2 種類のユーザーグループを適用します。Administrator ユーザーグループはプロジェクト上でユーザーが実行できる管理タスク（コンテンツの移動、削除、権限変更など）に関連する権限を付与します。Access Control ユーザーグループはユーザーが持つアクセス（コンテンツの閲覧と公開など）に関連する権限を付与します。

Administrator ユーザーグループと Access Control ユーザーグループは、Tableau サイトの各プロジェクトとサブプロジェクトの固有のニーズと要件に合わせてカスタマイズできます。これにより、必要に応じてセキュリティコントロールを追加またはカスタマイズする柔軟性が得られます。プロジェクトまたはサブプロジェクトのユーザーグループ権限ルールセットの割り当ては、Data Group の Tableau プロジェクトで維持される YAML ファイルから文書化・制御されます。

トップレベルの Production と Development プロジェクトにはコンテンツが公開されません。コンテンツはトップレベルプロジェクト下のサブプロジェクトにのみ公開され、これはコンテンツ、アクセス、セキュリティコントロールのベストプラクティスです。トップレベルプロジェクト（Production と Development）リーダーは常に中央データチームの BI Platform チームのメンバーであり、コンテンツ公開のプロジェクト管理者として機能するために Creator サイトロールが必要です。プロジェクトリーダーはそれぞれの機能エリアのサブプロジェクトを所有します。プロジェクトリーダーはサブプロジェクトをリードする適切な権限を持つために、適用可能な Administrator と Access Control グループに追加されます。

トップレベルプロジェクトの標準権限ルールは以下のとおりです：

| プロジェクト | 閲覧 | 公開 | 管理 |
|-------------|------------------|---------------------|---------------------------------|
| Development | すべてのチームメンバー | すべてのチームメンバー | プロジェクトとサブプロジェクトリーダー |
| Production | すべてのチームメンバー | プロジェクトリーダー | プロジェクトリーダー |

以下は Data Team サブプロジェクトに適用されたユーザーグループと権限の例で、Data Team メンバーのみがプロジェクトで公開できますが、すべてのチームメンバーがサブプロジェクトのコンテンツを閲覧できます。サブプロジェクトレベルでは、制限付きアクセスのために `All Team Members` ユーザーグループ名の代わりに `Limited Access Team Members` が使用できます。

| ユーザーグループ名 | ユーザーグループタイプ | 権限テンプレート |
|---------------------------|----------------------|----------------------|
| BI Platform Team | Administrator グループ | Inherited Administer |
| Data Team Project Leaders | Administrator グループ | Administer |
| Data Team | Access Control グループ | Publish |
| All Team Members | Access Control グループ | View |

#### ケイパビリティ

[ケイパビリティ](https://help.tableau.com/current/server/en-us/permissions_capabilities.htm)は私たちが適用する Tableau の概念です。権限はケイパビリティ、つまりコンテンツの特定のアクションを実行する能力（閲覧、フィルタリング、ダウンロード、削除など）で構成されます。権限ルールはユーザーグループの各ケイパビリティの設定（許可、拒否、未指定）です。権限ルールには、一般的なユーザーシナリオ（閲覧、公開、管理など）に基づいてよく割り当てられるケイパビリティのセットをグループ化したテンプレートがあります。テンプレートを割り当てると、含まれるケイパビリティが「許可」に設定され、残りは「未指定」のままになります。テンプレートはユーザーが必要なすべてのケイパビリティを持つよう構築されています。例えば、Publish テンプレートには View テンプレートのすべてのケイパビリティに加えて追加のケイパビリティが含まれます。

GitLab で使用する権限テンプレートの例を以下に示します。権限テンプレートは Tableau コンテンツに適用されます。

| ケイパビリティ | 閲覧 | 公開 | 管理 |
|:-------------------|:----:|:-------:|:----------:|
| 閲覧/インタラクト/使用 | X | X | X |
| 閲覧/コメント追加 | X | X | X |
| 画像/PDF ダウンロード | X | X | X |
| ビューの共有 | X | X | X |
| データのダウンロード | | X | X |
| Web 編集 | | X | X |
| 上書き/公開 | | X | X |
| 移動 | | | X |
| 削除 | | | X |
| 権限の変更 | | | X |

私たちが使用するサイトロールの例を以下に示します。個々のユーザーはサイトロールに割り当てられ、サイトロールを通じて権限が付与されます。サイトロールはサイト上で Tableau ユーザーが実行できることの上限として機能します。

| ケイパビリティ | Viewer | Explorer | Creator |
|:----------------------|:------:|:--------:|:-------:|
| 閲覧/インタラクト | X | X | X |
| 閲覧/コメント追加 | X | X | X |
| 画像/PDF ダウンロード | X | X | X |
| サマリデータのダウンロード | X | X | X |
| フルデータのダウンロード | | X | X |
| ビューの共有 | | X | X |
| Web 編集 | | X | X |
| 上書き/公開 | | X | X |
| 移動 | | X | X |
| 削除 | | X | X |
| 権限の変更 | | X | X |
| アラートの作成 | | X | X |
| データソースの公開 | | | X |
| データフローの使用 | | | X |
| サイト管理 | | | X |

<details markdown=1>

<summary><b>権限テンプレート YAML ファイルの例</b></summary>

```yml

permission_templates:
  - name: view
    projects:
      Read: Allow # View
    workbooks:
      Read: Allow # View
      Filter: Allow # Filter
      ViewComments: Allow # View Comments
      AddComment: Allow # Add Comments
      ExportImage: Allow # Download Image/PDF
      ViewUnderlyingData: Allow # Download Summary Data
      ShareView: Allow # Share Customized
    data_sources:
      Read:  Allow # View
      Connect: Allow # Connect
      ExportXml:  Allow # Download Data Source
    data_roles:
      Read: Allow # View
    flows:
      Read: Allow
      ExportXml:  Allow # Download Flow
    lenses:
      Read: Allow # View
    metrics:
      Read: Allow # View
    virtual_connections:
      Read:  Allow # View
      Connect: Allow # Connect
    databases:
      Read:  Allow # View
    tables:
      Read:  Allow # View

  - name: project_lead
    projects:
      ProjectLeader: Allow # Set Project Leader
```

</details>

<details markdown=1>

<summary><b>管理者とプロジェクトリーダーのための権限ベストプラクティス</b></summary>

- 親フォルダには公開せず、代わりにネストされたサブフォルダを作成してください。
- 個々のワークブックではなく、プロジェクトフォルダレベルで権限を設定してください。
- 個人ではなくグループに権限を割り当ててください。
- 受講必須コース: [Site Management](https://elearning.tableau.com/path/site-administrator/site-management)
- SAFE でないユーザーが SAFE コンテンツにアクセスできないことを確認してください。これは「拒否」権限機能を使用する唯一のケースです。

</details>

---

### Tableau ライセンス管理

私たちの組織は Okta - Lumos インテグレーションを使用した自動化システムで Tableau ライセンスを管理しています。このアプローチにより、Tableau を必要とするすべての人がアクセスできるよう、非アクティブアカウントから未使用ライセンスをプラットフォームのインサイトと機能を活用するチームメンバーにリダイレクトします。

#### ライセンスアクティビティポリシー

Tableau ライセンスを維持するには、ユーザーは 90 日以内にプラットフォームを積極的に使用する必要があります。
自動化された Lumos システムがログインアクティビティを監視し、使用状況に基づいてライセンスを管理します：

- 90 日以内に Tableau にログインしないユーザーは自動的にデプロビジョニングされる場合があります
- Tableau Viewer ライセンスは追加のレビューなしに 90 日の非アクティブ後に自動削除されます
- Tableau Creator と Explorer はデプロビジョニング前に Tableau 管理チームによるレビューが行われます
- 注意: VP レベル以上の役職は自動デプロビジョニングの対象外です

#### アクセスの再取得

非アクティブによりデプロビジョニングされた場合：

1. Okta から Lumos ポータルにアクセスする
2. `Tableau Access` の Tableau アクセスリクエストを送信する
3. 承認後、アクセスが復元されます

**権限の保持:** ユーザーがデプロビジョニングされると、ライセンスのみを失い、グループメンバーシップや権限設定は失いません。これにより、アクセスが復元されたときに、追加の設定なしに以前のすべてのプロジェクト、ダッシュボード、コンテンツへのアクセスが自動的に再取得されます。

このアプローチにより、アクティブユーザーにライセンスが利用可能になり、必要な場合に簡単にアクセスが復元され、[データヘルスとセキュリティの実践](/handbook/enterprise-data/data-governance/data-management/#tableau)に従います。

上記のガイドラインに加えて、通常は主にアナリティクスベースの役割を持つチームメンバー（機能チーム内のアナリスト、チームのレポート開発が主要な責任のチームメンバーなど）に Creator ライセンスを予約します。

**ライセンス使用状況の追跡**

- [ライセンスタイプ別の使用率と使用状況](https://10az.online.tableau.com/#/site/gitlab/workbooks/2447768/views)
- [割り当てられたライセンス](https://10az.online.tableau.com/#/site/gitlab/users)（管理者のみ）
- [使用されたライセンス](https://10az.online.tableau.com/#/site/gitlab/analysis/LoginBasedLicenseUsage)
- [ユーザーによるアクション](https://10az.online.tableau.com/#/site/gitlab/analysis/ActionsbyAllUsers)
- [eLearning 使用状況](https://dashboard.skilljar.com/analytics/)（管理者のみ）

## アクセス

### はじめに

ユーザーは [Lumos アプリケーション](/handbook/security/corporate/systems/lumos/ar/)を使用して Okta ポータルから Tableau へのアクセスをリクエストできます。Tableau のリクエストを送信するには以下の手順に従ってください：

- Okta ポータルにログインする
- 「Lumos」アプリケーションを検索して選択する
- 利用可能なアプリケーションから「Tableau」を選択する
- ニーズに合った特定のロールを選択する（以下のロールタイプを参照）
- Lumos が自動的に承認ワークフローを開始し、承認時にプロビジョニングを処理します

システムがリクエストを完了するために必要な追加情報を案内します。リクエストのステータスについてはメールで通知を受け取ります。

### ロールタイプ

アクセスをリクエストする際は、ニーズに基づいて適切なロールを選択してください：

- Viewer: ダッシュボードとビジュアライゼーションの閲覧とインタラクト
- Explorer: 既存のデータソースからワークブックの作成と変更
- Creator: 新しいデータソースの構築と高度なビジュアライゼーションの開発

ロールのケイパビリティの詳細については[こちら](/handbook/enterprise-data/platform/tableau/#capabilities)をクリックしてください。

### 制限付きデータアクセス

Tableau アクセスは、感度レベルと規制要件に基づいてデータを分離する階層型アプローチで構成されています。

- 一般コンテンツ: すべてのユーザーは承認後にデフォルトで一般コンテンツにアクセスします
- 制限付き SAFE コンテンツ: 追加の承認と正当性が必要です
- その他の[特別権限](/handbook/enterprise-data/platform/tableau/#user-groups)アクセス

ユーザーは Lumos アプリから以下を選択して制限付きアクセスをリクエストできます：

- Tableau Restricted SAFE Access
- Tableau Special Permissions

### Tableau Desktop アクセス

Tableau Cloud への有効なライセンスを持つ Creator は、開発に Tableau Desktop の使用を推奨します。ローカルで開発されたデータソースまたはワークブックは後で Tableau Cloud に公開できます。すべての Creator には Tableau Cloud と Desktop へのアクセスが割り当てられます。Tableau Desktop キーは Tableau Cloud に最初に接続したときに自動的に割り当てられます。

Tableau Desktop を使用する Tableau Creator は、Tableau Cloud に公開されたコンテンツにアクセスするために Okta に[Yubikey](/handbook/security/corporate/systems/yubikey/purchasing/#yubikey-5c-nano-fips)を設定する必要があります。どれを取得すべきか不明な場合は、推奨デバイスは [YubiKey 5C Nano FIPS](https://www.yubico.com/product/yubikey-5c-nano-fips/) です。現在、Tableau Desktop では生体認証はまだサポートされていません。

Tableau Desktop は以下のリンクからダウンロードするか、Tableau Cloud の[ホームページ](https://10az.online.tableau.com/#/site/gitlab/home)のリンクをたどってください。

- [Tableau Desktop リリースダウンロード](https://www.tableau.com/support/releases)
- [Tableau Prep Builder リリースダウンロード](https://www.tableau.com/support/releases/prep)

Mac 用の最新バージョンの Tableau Desktop を自動的にダウンロードする場合は、[このリンク](https://www.tableau.com/downloads/desktop/mac)を使用できます。

<details markdown=1>

<summary><b>Tableau Desktop の更新</b></summary>

Tableau Desktop を最新リリースに更新するには、以下の手順に従ってください：

1. **最新バージョンのダウンロード:** [Tableau のダウンロードページ](https://www.tableau.com/support/releases)にアクセスして、最新バージョンの Tableau Desktop をダウンロードします。

1. **最新バージョンのインストール:** ダウンロードしたインストーラーを実行し、画面の指示に従って最新バージョンの Tableau Desktop のインストールを完了します。

1. **以前のバージョンのアンインストール:** クリーンな環境を維持してバージョンの競合を減らすために、デバイスにまだある Tableau Cloud アプリケーションの以前のバージョンをアンインストールします。これはすべての Tableau Desktop インスタンスを閉じ、アプリケーションフォルダを開き、以前のバージョンの Tableau Desktop を見つけてゴミ箱に移動することで行えます。

</details>

### Tableau Desktop と Tableau Cloud の比較

Tableau はワークブックとデータソースを作成/編集するために Desktop クライアントと Cloud（Web）バージョンの 2 つの方法を提供しています。ただし、編集と開発には Tableau Desktop での開発を推奨します。このバージョンには編集と開発のための完全な機能があります。

各バージョンの利点：

**Desktop**
Tableau Desktop は完全な機能を提供します。Tableau が提供するすべてのケイパビリティに Desktop でアクセスでき、データソース、ワークブック、ダッシュボード、グループ、セット、フォーマット、カスタマイズされた計算などを作成できます。

**Cloud**
Tableau Cloud を使用すると、（Desktop で作成して公開した）コンテンツとインタラクトできます。Cloud でもワークブック/ダッシュボードを作成できますが、データソース、セット、詳細なフォーマットなどは作成できません。

各バージョンが提供する機能の詳細については、[Web オーサリングと Tableau Desktop の機能比較](https://help.tableau.com/current/pro/desktop/en-us/server_desktop_web_edit_differences.htm)に関する Tableau 記事を参照してください。

## Tableau データソース

### Tableau データソース接続ポリシー

このポリシーは、すべてのダッシュボードにわたるデータの一貫性、セキュリティ、サポートを確保するために、Tableau で承認されたデータソース接続に関するガイダンスを提供します。

1. **主要データソース:** Snowflake

    - **ロール:** Snowflake はコアビジネスロジックと変換されたデータを格納するメインデータソースです。変換またはビジネスルールを必要とするすべてのデータは Snowflake から出発する必要があります。
    - **サポート:** Tableau 管理チームは Tableau の Snowflake 接続を完全にサポートします。

2. **追加承認データソース**

    - **許可されたソース:** Snowflake データと重複しない外部データの場合、Google Sheets、Google Drive、Excel が許可されます。
    - **サポート:** Tableau 管理チームは Tableau の許可された接続のサポートを提供します。
    - **ポリシー準拠:** 接続はポリシーガイドラインを満たし、Snowflake データの重複を避け、ウェアハウスパイプラインに属する追加のビジネスロジックや変換を除外する必要があります。

3. **追加データ接続と利用可能なコネクター**

    Tableau は幅広い[サポートされたコネクター](https://help.tableau.com/current/pro/desktop/en-us/exampleconnections_overview.htm)と [Tableau Exchange コネクター](https://exchange.tableau.com/connectors)を提供しています。一般的にすべてのデータは承認されたデータパイプラインを通じてルーティングされる必要があります。ただし、データがビジネスロジックとのマージを必要とせず、直接接続が効率性とより速い実装を提供する特定のケースでは、代替データソースへの直接接続が許可されています。

    これらの直接接続は以下のポリシーでのみ使用できます：

   - **承認:** 接続はデータチームとソースシステムのビジネスおよびテクニカルオーナーによって承認される必要があります。[こちら](https://gitlab.com/gitlab-data/tableau/-/issues/new?issuable_template=Standard%20Data%20Team%20Issue)から新しいリクエストを開始してください。
   - **セキュリティ:** 接続は安全である必要があります。セキュリティ監査が必要になる場合があります。
   - **ポリシー準拠:** 接続はポリシーガイドラインを満たし、Snowflake データの重複を避け、ウェアハウスパイプラインに属する追加のビジネスロジックや変換を除外する必要があります。
   - **データプライバシーとガバナンス:** PII や MNPI などの機密情報を保護するために必要に応じてデータアクセスを制限する必要があります。適切なデータセキュリティとプライバシー対策を確保するために Tableau 管理チームと連携してください。

### データソースアクセス: **Tableau Cloud**

詳細については[Tableau でのデータへの接続ガイド](https://docs.google.com/document/d/17DdnVs_KrCw7ic5eJRj7D0i5x5WjfNtYRLGAozdjzSo/edit)を参照してください。

<details markdown=1>

<summary><b>Snowflake</b></summary>

Snowflake コネクターを使用するには、Data Platform チームによって割り当てられた Snowflake アカウントが必要です。まだアクセスがない場合は AR を開いてください（[例](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/24785)）。

<summary><b>Tableau Cloud に公開されたデータソース</b></summary>

1. Personal Space > New > Workbook
2. Connect to Data > On This Site
3. 公開済みデータソースを選択する

</details>

<details markdown=1>

<summary><b>フラットファイル（形式: xls/xlsx, csv, tsv, kml, geojson, topojson, json）</b></summary>

1. Personal Space > New > Workbook
2. Connect to Data > Files
3. ファイルをドラッグ＆ドロップ / コンピューターからアップロード

</details>

<details markdown=1>

<summary><b>Google Sheets</b></summary>

1. Personal Space > New > Workbook
2. Connect to Data > Connectors > Google Drive
3. Google アカウントでサインイン
4. すべてのボックスにチェックを入れる
5. `Allow` をクリック
6. 使用したい Google Sheet をダブルクリック

</details>

### データソースアクセス: **Tableau Desktop または Tableau Prep Builder**

*重要:* Tableau Desktop を Tableau Cloud に接続するには、Okta に Yubikey を設定する必要があります。指紋認証は機能しません。Yubikey の注文方法の詳細については上記の [Tableau Cloud アクセス](/handbook/enterprise-data/platform/tableau/#tableau-desktop-access)セクションを参照してください。

<details markdown=1>

<summary><b>Tableau Cloud に公開されたデータソース</b></summary>

1. Connect > Search for Data > Tableau Server
1. Quick Connect > Tableau Cloud
1. Okta にログイン — アカウントに Okta が設定されていない場合は Tableau ログインと MFA を使用してログイン
1. 公開済みデータソースを選択する

</details>

<details markdown=1>

<summary><b>フラットファイル（形式: xls/xlsx, csv, tsv, kml, geojson, topojson, json）</b></summary>

1. Connect > To a File
1. データファイル形式を選択する

</details>

<details markdown=1>

<summary><b>Google Sheets</b></summary>

1. Connect > To a Server > Google Drive
1. Google アカウントでサインイン
1. すべてのボックスにチェックを入れる
1. `Allow` をクリック
1. 使用したい Google Sheet をクリック
1. Connect をクリック

</details>

### Snowflake OAuth データソース接続の有効期限

Tableau データソースの Snowflake 認証情報は 90 日間有効です。Snowflake に接続されたワークブックまたはデータソースに新しいコンテンツが公開されるたびに自動的にリセットされます。ただし、90 日以内に公開が発生しない場合は認証情報が期限切れになり、手動での再認証が必要になります。OAuth 認証情報を更新するプロセスは以下のドロップダウンをクリックしてください：

<details markdown=1>

<summary><b>Tableau で Snowflake 認証情報を更新する
</b></summary>

1. アカウント設定にアクセス:
   - Tableau にログインします。
   - 画面右上のプロファイルアイコンをクリックします。
   - ドロップダウンメニューから Account Settings を選択します。

1. Snowflake 認証情報を見つける:
   - Snowflake セクションまでスクロールして現在の認証情報を確認します。

1. 各エントリをテストする:
   - リストされている各 Snowflake エントリで Test をクリックします。
   - テストが失敗した場合は次のステップに進みます。

1. 認証情報の削除と再追加:
   - Delete をクリックして失敗した Snowflake エントリを削除します。
   - Add をクリックして認証情報を再追加します。

1. 認証情報の再追加:
   - 認証方法として OAuth Credential を選択します。
   - OAuth インスタンスに Snowflake サーバーを入力します。
   - Role フィールドは空白のままにします。

1. 認証を完了する:
   - 新しいウィンドウがポップアップします。
   - Single Sign-On（SSO）をクリック
   - Authorize をクリックしてプロセスを完了します。

1. すべてのアカウントに繰り返す:
   - 設定している各 Snowflake アカウントに対してこれらの手順を実行します。

これらの手順に従うことで、Snowflake OAuth トークンが更新され、認証情報の期限切れが Tableau ワークフローに影響しないようにします。

</details>

### Tableau 認定データソース

認定データソースは組織のための信頼性が高く高品質で効率的なデータを確保します。[Issue 送信](https://gitlab.com/gitlab-data/tableau/-/issues/new?issuable_template=Certify%2Tableau%20Data%20Source)を通じて Tableau 管理者が承認したこれらのソースは、認定バッジと可視性と検索性のための「- Certified」という名前の付加を受けます。認定は、データソースが精度とコンプライアンスのために厳密にレビューされており、ユーザーが信頼できるレポートを構築できることを示します。

認定データソースは、[GitLab Data Development](/handbook/enterprise-data/how-we-work/data-development/)ライフサイクルに合わせた、最も一般的に使用される単一の信頼できるソースとして設計されています。これらは幅広く再利用可能で汎用性があり、幅広いアナリティクルニーズに対応できます。典型的な部門は 2〜12 の認定データソースを維持し、高品質で効率的な開発のための主要リソースとして機能します。部門はこれらのソースの所有権を維持し、プロジェクトリーダーが信頼できる基礎ツールとして組織の中で維持されるよう積極的に監視します。過度に複雑で多機能なデータソースを避けるために、複数の認定された目的に合ったデータソースを歓迎します。

アナリストの主要リソースとして、認定データソースはオンボーディング、トレーニング、アップデートを効率化し、重複を減らして一貫性を促進します。品質と信頼性に焦点を当てることで意思決定を簡素化し、組織のデータエコシステムの不可欠なコンポーネントとしての役割を強固にします。

ベストインクラスの BI 標準、モデリング標準、ユースケースへの目的に合ったアプローチ、およびビルドを推進するエンドユーザーの使いやすさを許可することをお勧めします。

#### Tableau 認定データソースポリシー

すべての認定データソースは以下の基準を満たす必要があります：

1. **データの正確性と品質**: データはソースシステムに対して検証され正確性を確保しながら、Enterprise Data Model（EDM）によって確立された品質基準を活用・継承する必要があります。さらに、Tableau のリレーションシップと結合、フィルタ、計算フィールドは正確性と一貫性についてレビューされる必要があります。主要なメトリクスと計算はソースシステムとの一貫性だけでなく、EDM の定義された構造と原則との整合性も検証される必要があります。
1. **ドキュメント**: Tableau データソースは Data Dictionary で検出されるよう以下を含める必要があります：
   - **説明的な名前**: クリアでユーザーフレンドリー
   - **説明**: 目的、データグレイン、DRI の所有権を含める
1. **パフォーマンス**: データは合理的な時間内に読み込まれる必要があります。クエリはエクストラクトまたはライブ接続のために効率的かつ最適化されている必要があります。
1. **データセキュリティとコンプライアンス**: データは[SAFE](/handbook/enterprise-data/platform/safe-data/)アクセスを含むデータセキュリティ、プライバシー、ガバナンスポリシーに準拠する必要があります。機密コンテンツが機密データを保護するために行レベルのセキュリティが適用された適切なプロジェクトフォルダに公開されることを確認してください。
1. **データソースのカスタム SQL**: カスタム SQL を使用するデータソースは、カスタム SQL が次の特定のユースケースに使用されている場合に認定できます：行レベルのセキュリティ、クエリサイズ制限フィルタリングなどのカスタムパラメータ、複雑な結合。ビジネスロジックを適用するためのカスタム SQL（計算や条件の変更など）を含めると、Tableau データソースの認定がブロックされます。これは、ビジネスロジックを変換/データウェアハウス層内に保持してソースコントロール下に置き、MR 経由で簡単に貢献でき、データウェアハウスと BI 層の両方で同じ結果を生成することを目指しているためです。
1. **フィールドの命名とフォーマット**:
   - 直感的な名前を使用する（例: "txn_dt" の代わりに "Transaction Date"）
   - 冗長性の回避: すでに提供されているコンテキストを繰り返すプレフィックス/サフィックスを排除する（例: "Sales_Region_Region" の代わりに "Region"）。
   - 階層型データ: ドリルダウン機能を有効にするために階層用の Tableau レベルを使用する（例: Country → State → City）。
   - 一貫したケースとスペーシング: アンダースコアの代わりに適切なケースとスペースを使用する（例: "customer_name" の代わりに "Customer Name"）。
   - 正しいデータ型とフォーマットを確保する：
       - 日付: 日付を ISO: `yyyy/mm/dd` に変換するか、時間の精度が不要な場合は datetime を date に変更する。
       - 数値: 必要に応じて通貨または小数としてフォーマット。
       - パーセンテージ: 希望する小数レベルで適切な '%' フォーマットを適用する。

## Data Team Tableau リソース

Data Team は、組織全体でのレポーティング、ダッシュボード開発、データの可視性をサポートするための共有 Tableau リソースを提供しています。これらのリソースは、チームが一貫性を持って構築し、プラットフォームの使用状況を理解し、必要なときに過去のコンテンツにアクセスできるよう維持されています。

これらのリソースは [Production → Data Team → General](https://10az.online.tableau.com/#/site/gitlab/projects/367731) フォルダにあります。この場所には以下の情報が含まれています：

- プラットフォーム使用状況ダッシュボード — Tableau がチーム全体でどのように使用されているかに関するインサイト
- アーカイブされたダッシュボードとデータソース — 参照用の廃止または過去のコンテンツ
- テンプレートと例 — 新しいダッシュボードの構築を素早く開始するための標準化されたテンプレート

Data Team がサポートする基礎的な Tableau 資料の場所としてこのフォルダを活用してください。

---

## Google Docs とスライドへの Tableau チャートの埋め込み

### 概要

Google Workspace 向け Tableau アドオンを使用すると、ライブダッシュボードにリンクした静的画像として Tableau ビジュアライゼーションを Google Docs とスライドに埋め込めます。このアドオンは自動リンク展開と一括更新機能もサポートしています。

#### ビデオウォークスルー

Tableau アドオンの使い方のデモンストレーション。社内リンクは[こちら](https://drive.google.com/file/d/1W7mFW1XZ0APPFqYyexmX3O1Ko5mfvWKo/view?usp=drive_link)。

### インストール（一回のみ）

1. Tableau ユーザーには、拡張機能は IT によってすでに自動インストールされているはずです。まだインストールされていない場合は、[Google Workspace 向け Tableau アドオン](https://workspace.google.com/marketplace/app/tableau/1044537977580)をインストールしてください
2. 設定後、ライセンスを持つ Tableau ユーザーはどなたでもアドオンを使用できます

### アドオンの使い方

**Google Docs または Google スライドで:**

1. **Extensions** → **Tableau** → **Start** を開く
2. Tableau コンテンツを検索するか、Tableau URL を貼り付ける
3. **Insert** をクリックして画像を埋め込む
4. 画像はライブ Tableau ビューにハイパーリンクされます

*注意: Tableau ダッシュボードの特定のチャートのみを Google Doc に埋め込むには、最初に個々のワークシートを完全なダッシュボードの一部としてではなく別々に公開する必要があります。次に個々のワークシートを Tableau Server または Tableau Cloud に公開し、「Share」オプションを使用して埋め込みリンクを取得し、Google Docs またはスライドに挿入できます。

**スマート機能:**

- **リンク展開**: Tableau Cloud URL を貼り付けると自動的にスマートチップ（Docs）またはプレビューリンク（スライド）が作成されます
- **画像の更新**: アドオンの **Refresh All** をクリックして埋め込まれたすべての Tableau 画像を一度に更新します
- **更新追跡**: 更新結果はタイムスタンプ付きでドキュメントコメントにログされます

**現在のチャート更新オプション（手動のみ）:**

1. 手動個別更新: 特定の画像をクリックしてアドオン経由で更新する
1. 手動一括更新: アドオンサイドバーの「Refresh All」ボタンをクリックしてドキュメント内のすべての Tableau 画像を一度に更新する

### ベストプラクティス

- **共有前に**: すべての Tableau 画像を更新して現在のデータを確保する
- **埋め込み数の制限**: 最適なパフォーマンスのためにドキュメントあたり 3〜7 枚の画像にとどめる
- **キャプションの使用**: 画像の下に「最終更新: [日付]」のようなコンテキストを追加する
- **賢く選択**: 複雑な完全ダッシュボードよりも特定のワークシートを埋め込む

### ユースケース

- **週次レポート**: 主要なメトリクスを埋め込み、毎週月曜日に一括更新ですべてのチャートを同時に更新する
- **プレゼンテーション**: Tableau 画像のテンプレートデッキを構築し、最新データを表示するためにミーティング前に更新する
- **ドキュメント**: 深い探索のためのハイパーリンクとともにプロセスドキュメントに Tableau ビューを含める

---

## 教育

アナリティクルインサイトの可能性を最大限に活かす GitLab チームメンバーは、データで強力なことができます。しかし Tableau のようなプラットフォームを持ち、データにアクセスするだけでは不十分です。ユーザーが Tableau を効果的に使用できるよう準備する必要があります。

### トレーニングリソース

- [GitLab Tableau Explorer トレーニング](https://drive.google.com/file/d/1Zkk8_xz4CeH7tSHVW4KlMWHzFYN3VZlK/view?usp=drive_link): このビデオトレーニングは GitLab 環境と Tableau ダッシュボードの更新方法、さらには自分のものを公開する方法をカバーしています。このビデオにアクセスするには GitLab チームメンバーである必要があります。
- [無料 Tableau トレーニング](https://www.tableau.com/learn/training)
- [Tableau eLearning - トレーニングポータル](https://elearning.tableau.com/): Tableau からの eLearning は Creator または Explorer ライセンスタイプのユーザーに利用可能です
  - Tableau eLearning アクセス手順
    1. [explorer-elearning.tableau.com](https://explorer-elearning.tableau.com) にアクセス
    1. TableauID アカウントを作成（またはログイン）
    1. TableauID 確認メールでメールアドレスを確認
    1. https://explorer-elearning.tableau.com にアクセスして TableauID でログオン
    1. [こちら](https://docs.google.com/document/d/1UPvTXZD3wgRpt7m_Hz9D53ZIt2hF7suHi6oggjbQa2I/edit?tab=t.0)で利用可能なアクセスコードを使用して Tableau Learning Center に登録
    1. コースまたは学習パスをクリックして eLearning を開始
    1. https://explorer-elearning.tableau.com に戻って Tableau eLearning を使い続ける

  - トレーニングコンテンツへのアクセスに問題が発生した場合は、最も一般的な問題の解決策について[このページ](https://support.skilljar.com/hc/en-us/articles/360033553054)を確認してください。
- [Tableau コミュニティ](https://community.tableau.com/s/)
- [Tableau サポート](https://www.tableau.com/support)
- [Tableau クラスルームトレーニング](https://trailheadacademy.salesforce.com/products/tableau#f-products=Tableau)と[トレーニングパス](https://www.tableau.com/learn/training/elearning)
  - これらは[成長と開発の福利厚生](/handbook/people-group/learning-and-development/growth-and-development/)の一環として使用するオプションになる可能性があります。[キャリア開発の会話](/handbook/people-group/learning-and-development/career-development/#what-is-career-development)中にマネージャーにこの話を持ち出してください。

<summary><b>サードパーティトレーニングリソース</b></summary>

- [YouTube Intellipaat - Tableau Cloud トレーニング](https://www.youtube.com/watch?v=ttCDqyfrcEc)
- [YouTube edureka! - Tableau フルコース](https://www.youtube.com/watch?v=aHaOIvR00So)
- [YouTube Simplilearn - Tableau チュートリアル](https://www.youtube.com/watch?v=fO7g0pnWaRA)

注意: 上記のトレーニングビデオはサードパーティが無料で提供しており、そのコンテンツは Tableau または GitLab Data Team によって完全に審査されていません。

</details>

<details markdown=1>

<summary><b>推奨トレーニング</b></summary>

以下は、責任と必要なスキルセットに基づいて、以下のロールのための推奨トレーニングコースと必要な時間見積もりです。コースと学習パスの完全なリストについては、ロール別トレーニングのハンドブックセクションを参照してください：

サイト管理者

- 最低: [サイト管理入門](https://elearning.tableau.com/path/site-administrator/introduction-to-site-administration) *（時間見積もり: 3 時間）*

プロジェクトリーダー / メンテナー / コードオーナー

- 最低: [Tableau Cloud 入門](https://elearning.tableau.com/path/community-leader/getting-started-with-tableau-online) *（時間見積もり: 4 時間）*

Creator / 開発者 / アナリスト

- 最低: [Tableau Desktop 入門](https://elearning.tableau.com/path/data-scientist/getting-started-with-tableau-desktop) *（時間見積もり: 4 時間）*

Explorer

- 最低: [Tableau を始めよう](https://explorer-elearning.tableau.com/path/author-learning-path/get-started-with-tableau-author) *（時間見積もり: 4 時間）*

ビジネスオーナー / ステークホルダー / Viewer / エンドユーザー

- 最低: 未定 *（時間見積もり: ）*

</details>

<details markdown=1>

<summary><b>ロール別トレーニング</b></summary>

以下は、責任と必要なスキルセットに基づいて、以下のロールのための推奨トレーニングコースと学習パスのセットです：

サイト管理者

- [サイト管理者学習パス](https://elearning.tableau.com/path/site-administrator) (推定)
- [Tableau サービスとサポート](https://elearning.tableau.com/tableau-services-and-support)

プロジェクトリーダー / メンテナー

- [新機能スポットライトコース](https://elearning.tableau.com/path/new-feature-spotlight)
- [コミュニティリーダー学習パス](https://elearning.tableau.com/path/community-leader)
- [Tableau 中級コース](https://elearning.tableau.com/tableau-intermediate)
- [Tableau 上級コース](https://elearning.tableau.com/tableau-advanced)

Creator / アナリスト

- [著者学習パス](https://elearning.tableau.com/path/author-learning-path)
- [デザイナー学習パス](https://elearning.tableau.com/path/designer)
- [アナリスト学習パス](https://elearning.tableau.com/path/analyst-learning-path)
- [データサイエンティスト学習パス](https://elearning.tableau.com/path/data-scientist)
- [開発者学習パス](https://elearning.tableau.com/path/developer)
- [Tableau ファンダメンタルズコース](https://elearning.tableau.com/tableau-fundamentals)
- [Tableau Prep Builder コース](https://elearning.tableau.com/prep-course)

ビジネスオーナー / ステークホルダー

- [エグゼクティブスポンサー学習パス](https://elearning.tableau.com/path/executive-sponsor)

エンドユーザー

- [コンシューマー学習パス](https://elearning.tableau.com/path/consumer)

</details>

<details markdown=1>

<summary><b>Tableau 認定</b></summary>

Tableau はツールの専門的なスキルと知識を証明するためのいくつかの[認定](https://www.tableau.com/learn/certification)を提供しています。以下の認定は専門知識を示したい Creator / アナリストに推奨されます：

- [認定 Tableau Desktop スペシャリスト](https://www.tableau.com/learn/certification/desktop-specialist): この試験は Tableau Desktop の基礎的なスキルと理解を持ち、製品でこの理解を少なくとも 3 ヶ月間適用した経験を持つ方向けです。準備方法の詳細については[試験ガイド](https://www.tableau.com/learn/certification/tableau-desktop-specialist-exam-guide)も参照してください。
- [認定 Tableau データアナリスト](https://www.tableau.com/learn/certification/certified-data-analyst): この試験は、ビジネス問題を理解し、分析のためのデータを特定し、実行可能なインサイトを提供することでステークホルダーがビジネス決定を行えるようにできるアナリスト向けです。準備方法の詳細については[試験ガイド](https://www.tableau.com/learn/certification/tableau-certified-data-analyst-exam-guide)も参照してください。

</details>

<details markdown=1>

<summary><b>GitLab トレーニングビデオ</b></summary>

- [Tableau データソースの作成: カスタム SQL](https://youtu.be/dE0fnhYcyDA)
- [Tableau データソースの作成: Tableau モデリング](https://youtu.be/BSUJgQmqsDA)
- [Tableau データソースの作成: 仮想接続](https://youtu.be/BMXJhNwEjs0)
- [Tableau データソースの作成: フルウォークスルー](https://youtu.be/3EDvGoMn4sw)

</details>

## サポート

セルフサービスヘルプリソースと教育イニシアティブによる積極的なアプローチに加えて、これら 2 つのアプローチが質問に答えず問題を解決できない場合に備えて、ユーザーコミュニティに必要なサポートを提供したいと思っています。

<details markdown=1>

<summary><b>Tableau オフィスアワー</b></summary>

Tableau ユーザーが定期的に集まって作業を披露し、ツールに関するトピックについて議論したり質問したりできるよう、毎週オフィスアワー（PST 8:30-8:55 AM）を開催しています。セッションでカバーされたコンテンツについては、[Meeting Agenda and Question & Answer document](https://docs.google.com/document/d/1i23bIsoupKC7rTepbU2lVXTHB5vxKuAgl07kAQq2EBA/edit)を参照してください。

追加のトラブルシューティングサポートには、[カスタマーポータル](https://customer.tableausoftware.com/)経由で Tableau に[サポートケースを送信](https://kb.tableau.com/articles/howto/submitting-a-case-from-the-customer-portal)できます。

</details>

<details markdown=1>

<summary><b>よくある問題</b></summary>

| 環境 | 問題 | 解決策 |
| ------- | ------- |------- |
| Tableau Desktop | Tableau Desktop 使用時 Snowflake への接続でエラー FAB9A2C5 | simba.snowflake.ini ファイルが DriverManagerEncoding=UTF-32 を示しているかどうかを確認してください。16 に設定されている場合は接続に問題があります。[Tableau ナレッジ記事](https://kb.tableau.com/articles/issue/error-fab9a2c5-connecting-to-snowflake-via-odbc?lang=en-gb)。 |
| Tableau Cloud | Snowflake へのログインを求めるワークブックを開いたときの Invalid Consent Request | ワークブックのデータソースが Oauth を使用して作成された場合は、ワークブックオーナーに `Embed password for data source` 機能を使用して再公開するよう依頼するか、Data Team にサービスアカウントを使用するよう切り替えを依頼してください。 |
| Tableau Desktop | Tableau Desktop から Tableau Cloud に公開する際、すべてのプロジェクトフォルダがグレーアウトされる | 部門のフォルダ名の横にある `>` アイコンをクリックしてサブフォルダを表示してください。それらのサブフォルダに公開できるはずです。 |
| Tableau eLearning | エラーメッセージ: "Missing Authentication Cookie" | [Skilljar ヘルプセンター](https://support.skilljar.com/hc/en-us/articles/360033553054)の説明に従ってブラウザの設定を変更してください。 |
| Tableau Cloud または Desktop | "Initial SQL" 使用時: "An error occurred when connecting to Snowflake" | Tableau で独自の SQL クエリを実行するには、`Initial SQL` 機能を使用しないでください。Snowflake はこのコンテキストではサポートしていません。代わりに `Customer SQL Query` を使用してください。Snowflake に接続してウェアハウスとスキーマを選択した後、画面左下に表示されます。リストされたテーブルの下にあります。 |
| Tableau Cloud または Desktop | 仮想接続に接続する際のエラー「データソース "Untitled Data Source" への接続に問題がありました」 | Snowflake サービスアカウントのパスワードが期限切れです。Tableau 管理者の場合: サービスアカウントとして Oath を介して Snowflake に接続します。パスワードの変更を求めるプロンプトが表示されます。その後、すべての仮想接続を編集して再公開してください。 |
| Tableau Cloud または Desktop | 仮想接続への接続時の不明確なエラー | おそらく基礎となるテーブルが変更され、フィールドが削除されました。Tableau 管理者に仮想接続を編集し、影響を受けたテーブル/フィールド（仮想接続の編集時に「Alerts」を確認）を見つけて、削除されたフィールドを `Exclude` するよう依頼してください。次に仮想接続を再公開します。 |
| Tableau Desktop | Tableau Desktop を Tableau Cloud に接続する際の Okta への認証でスタック | Tableau Desktop を使用する際は Okta への接続に Yubikey を使用してください。指紋認証は機能しません。 |

</details>

<details markdown=1>

<summary><b>ヒントとコツ</b></summary>

| 環境 | ヒント |
| ------- | ------- |
| Tableau Desktop | 特定の機能は Tableau Desktop 使用時に Creator のみが利用可能で、Tableau Cloud にはない場合があります。データのサイズとラップトップのパフォーマンスが許す限り、最善のダッシュボード構築エクスペリエンスには Tableau Desktop を使用してください。 |
| Tableau Cloud / Desktop | データセットがそれを許す場合は、最善のパフォーマンスとエンドユーザーエクスペリエンスのためにデータエクストラクトを使用してください |
| Tableau Cloud | 作業を開始する前に、常に新しく作成したワークブックを個人スペースに最初に保存してください。開発中に問題が発生した場合、最新のドラフト版をそこから常に取得できます。そうしないと、問題が発生した場合に消えてしまう可能性があります。 |
| Tableau Desktop | Tableau Desktop がクラッシュする問題が発生した場合は、ログをクリアしてエラーを再現してみてください。次に @mlaanen か @ttnguyen28 にログを送るか、Tableau との外部 Slack チャンネルに投稿してください。ログを生成する手順: Tableau Desktop を閉じる > Documents > My Tableau Repository > logs に移動 > すべてのログを削除 > Tableau Desktop を開く > 問題を再現 > Tableau Desktop を閉じる > 上記のファイルパスのログファイルを開く。 |

</details>

<details markdown=1>

<summary><b>トラブルシューティングサポート</b></summary>

1. `#data-tableau` 社内 Slack チャンネルに質問を投稿して、社内に答えがある人がいるか確認してください。
1. Tableau に見てもらいたい場合は `#ext-gitlab-tableau` 外部 Slack チャンネルに質問を投稿してください。
1. より広い Tableau ユーザーコミュニティに答えがある人がいるか確認するために [Tableau コミュニティ](https://community.tableau.com/s/)に質問を投稿してください。
1. Tableau Cloud プラットフォームまたは Tableau Desktop で技術的な問題が発生している場合は [Tableau サポート](https://www.tableau.com/support)でサポートケースを開いてください。
    - 誰でもサポートケースを開くことができますが、[Tableau プレミアムサポート](https://www.tableau.com/resources/teams-organizations/premium-support)の SLA に基づいた迅速な対応と解決時間を希望する場合は、#data-tableau の BI チームに Tableau 管理者からのサポートを受けるよう連絡してください。

</details>

## モニタリング

Tableau に多くのユーザーがオンボードされてアナリティクスの使用が GitLab 全体で増加するにつれて、データドリブンな意思決定のために Tableau はミッションクリティカルになります。モニタリングなしでは、「設定したら放置」のデプロイは高エンゲージメントユーザーのワークロードをサポートするのに不十分なリソースに直面する可能性があります。スケールで私たちのデプロイを運営・サポートし、ユーザーコミュニティの期待を満たすためには、継続的でプロアクティブなモニタリングが必要です。

Tableau はハードウェア、ネットワーク、データベース、アプリケーションなどの企業アーキテクチャと統合されているため、すべてがどのように相互運用するかを理解することはルーティンモニタリング、パフォーマンス、トラブルシューティングのために重要です。モニタリング機能はこれらのシステムとその Tableau Cloud との統合に焦点を当てています。これは主に技術的な性質を持ち、IT ロールによって実行されます。Tableau Cloud サイト管理者はプラットフォームが進化するビジネスニーズを満たすよう協力して作業します。

### Tableau Cloud のステータス

Tableau Cloud の現在のステータスと報告された停止を確認するには、[Tableau ステータスページ](https://trust.salesforce.com/)を訪問してください。そのページでは停止発生時の通知にもサインアップできます。参考として、GitLab の Tableau Cloud インスタンスは `United States - West - (10AZ)` にあります。

## ビューのパフォーマンス

Apdex は読み込みパフォーマンスの標準的な尺度です。各読み込みイベントを 3 つのカテゴリに分類して計算されます：Satisfied（満足）、Tolerating（許容）、Frustrated（不満）。2 つの継続時間パラメータに基づいています：Target Time と Tolerable Time。

私たちは 5 秒の target time を使用し、Tolerable time がその 4 倍の 20 秒であるという推奨に従っています。

インデックス自体は 0 と 1 の間の値を持つ加重平均で、各カテゴリの読み込み数から計算され、次に 5 つの評価に分類されます：Excellent、Good、Fair、Poor、Unacceptable。

| Apdex 値の範囲 | 評価 |
| 0.94 to 1.00 | Excellent |
| 0.85 to 0.93 | Good |
| 0.70 to 0.84 | Fair |
| 0.50 to 0.69 | Poor |
| 0.00 to 0.49 | Unacceptable |

---

### Tableau Google Docs とスライドアドオン

すべての Tableau ユーザーは **[Google Docs とスライド向け Tableau アドオン](https://workspace.google.com/marketplace/app/tableau/1044537977580)** にアクセスでき、Tableau ダッシュボードとチャートを Google Docs またはスライドに直接埋め込めます。

#### 仕組み

- アドオンは Google Doc またはスライドの**右側パネル**からアクセスできます。
- ユーザーは**Tableau ビューを検索してドキュメントに挿入**できます。
- 埋め込まれると、Tableau コンテンツを**ワンクリックで更新**して最新データを反映できます。
- アドオンは選択した Tableau ビューの **URL** を埋め込みます。

#### ベストプラクティス

- ダッシュボードから**特定のチャートを埋め込む**必要がある場合、そのチャートは Tableau で**独自のビューとして公開**する必要があります。
- コンテンツを挿入する際は、受信者が共有されているデータを理解できるよう明確な命名規則を使用してください。

#### SAFE データの考慮事項

**SAFE 分類データ**を含むコンテンツを扱う場合は：

- Google Doc またはスライドが Tableau で SAFE データへのアクセス権を持つ**個人のみと共有**されていることを確認してください。
- データの感度と適切なアクセス制御を示すために、ドキュメントまたはプレゼンテーションのタイトルに **" - SAFE"** を追加することを検討してください。

外部ドキュメントでの SAFE データの不正使用はデータ公開につながる可能性があります。共有前に必ず権限を再確認してください。特定のビューの公開や SAFE 分類の理解については、Data または Tableau サポートチームに連絡してください。
