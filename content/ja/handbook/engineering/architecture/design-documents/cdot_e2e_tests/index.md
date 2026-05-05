---
title: Customers Portal における Playwright を用いたエンドツーエンドテスト
status: accepted
creation-date: "2026-02-19"
authors: [ "@mlunoe" ]
coaches: []
dris: []
owning-stage: "~devops::fulfillment"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cdot_e2e_tests/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## サマリー

現在の QA テストスイートは開発者の生産性に対する大きな障壁となっており、44% の開発者がローカルセットアップを「非常に困難」と評価し、63% がテストの作成や更新に不快感を示し、テストの不安定さとメンテナンス性に関する懸念が広がっています。Customers Portal でのエンドツーエンド (E2E) テストのプライマリーフレームワークとして Playwright を採用し、これらの痛点に対処します。Playwright は、ビルトインのデバッグツールを備えた高速で安定したテスト実行を提供する、確立された業界標準のフレームワークであり、すべての開発者にとってアクセスしやすいものです。開発者が最小限の摩擦で E2E テストを作成・メンテナンスできるようにすることで、コントリビューションの障壁を下げ、ネットワーク傍受と適切な設定を通じてテストの信頼性を高め、GitLab Duo を活用した AI 支援によるテスト生成によりテスト開発を加速できます。

## リソース

- [Playwright ドキュメント](https://playwright.dev/docs/intro)
- [Playwright vs. Cypress](https://testdino.com/blog/playwright-vs-cypress/)
- [Playwright のフレーキーテスト: 検出、原因、修正方法](https://testdino.com/blog/manage-playwright-flaky-tests/)

## 概念実証

以下のマージリクエスト (MR) は、初期の Playwright 実装と AI 支援によるテスト生成を示しています:

- [!14622](https://gitlab.com/gitlab-org/customers-gitlab-com/-/merge_requests/14622): 初期の Playwright 設定とセットアップを伴う概念実証 (POC) 実装
- [!14815](https://gitlab.com/gitlab-org/customers-gitlab-com/-/merge_requests/14815): GitLab Duo agent 支援によって作成された追加テスト。AI 支援によるテスト生成を実証
- [Demo](https://youtu.be/IZfVfAHqZPE): Playwright エンドツーエンドテストを生成するために GitLab Duo を使う様子を解説したウォークスルー
- [!14902](https://gitlab.com/gitlab-org/customers-gitlab-com/-/merge_requests/14902): 上記デモで作成されたテスト

## 実装トラッキング

実装は親エピックでトラッキングされています: [&21622 Adopt Playwright as the E2E Testing Framework for CustomersDot](https://gitlab.com/groups/gitlab-org/-/work_items/21622)

### 🐳 インフラとセットアップ

| Issue | 説明 |
|-------|-------------|
| [#16795](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16795) | Playwright E2E テストをサポートするよう GDK と CDot Docker コンテナを更新 |
| [#16796](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16796) | Playwright の設定、環境ハンドリング、ベーステストパターンをセットアップ |

### 🔁 MR パイプライン統合

| Issue | 説明 |
|-------|-------------|
| [#16797](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16797) | SaaS およびセルフマネージド環境の MR パイプラインで Playwright E2E ジョブを実行 |
| [#16798](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16798) | Playwright JUnit 結果を GitLab MR テストレポートに統合 |

### ⏰ ステージングと可観測性

| Issue | 説明 |
|-------|-------------|
| [#16799](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16799) | ステージング環境に対してスケジュールされた Playwright E2E テスト実行をセットアップ |
| [#16800](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16800) | Playwright のステージングテスト失敗時の Slack 通知を実装 |

### 📚 ドキュメント

| Issue | 説明 |
|-------|-------------|
| [#16801](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16801) | CustomersDot 開発者向けの Playwright E2E テスト記述ガイドラインをドキュメント化 |

### 👥 カバレッジオーナーシップ

| Issue | グループ |
|-------|-------|
| [#16802](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16802) | `group::fulfillment platform` — クリティカルなユーザーワークフローを定義し、E2E テストカバレッジ計画を作成 |
| [#16803](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16803) | `group::provision` — クリティカルなユーザーワークフローを定義し、E2E テストカバレッジ計画を作成 |
| [#16804](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16804) | `group::seat management` — クリティカルなユーザーワークフローを定義し、E2E テストカバレッジ計画を作成 |
| [#16805](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16805) | `group::subscription management` — クリティカルなユーザーワークフローを定義し、E2E テストカバレッジ計画を作成 |
| [#16806](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16806) | `group::utilization` — クリティカルなユーザーワークフローを定義し、E2E テストカバレッジ計画を作成 |

## 動機

Customers Portal には、アプリケーション全体でクリティカルなユーザーワークフローが正しく機能することを保証する堅牢な E2E テストが必要です。しかし、現在の QA テストスイートは開発者にとって大きな痛点となっています。最近の [開発者エクスペリエンス調査](https://gitlab.com/gitlab-org/fulfillment/meta/-/work_items/2085) で以下が明らかになりました:

- **セットアップの複雑さ**: 44% の開発者がローカル E2E テストセットアップを「非常に困難」と評価し、環境変数が多すぎること、デバッグの面倒さ、ChromeDriver などの依存関係の問題を挙げています。
- **低い信頼度**: 開発者は、フレーキーさや実際のコード変更とは無関係な頻繁な失敗のためにテスト結果を信頼できず、実際の問題を診断するのが難しいと感じています。
- **メンテナンスの困難さ**: 63% の開発者が E2E テストの作成や更新に不快感を示し、不慣れな構文、フレームワーク知識の不足、標準的なテストツールとは異なるカスタム Ruby ベースフレームワークを挙げています。
- **コントリビューションへの障壁**: 複雑なセットアップと急な学習曲線が開発者の E2E テストへのコントリビューションを思いとどまらせ、専門のテストエンジニアのみがメンテナンスできるボトルネックを生み出しています。

私たちには、**すべての開発者にアクセス可能** で、**フレーキーさが最小限で信頼できる** もの、**素早いフィードバックループで高速** なもの、**開発者が理解しやすい明確なパターンでメンテナンス可能** なテストフレームワークが必要です。Playwright を採用することで、コントリビューションの障壁を下げ、テストの信頼性を高め、開発者が自分の機能の E2E テストを所有できるようにします。

### ゴール

- Customers Portal の標準 E2E テストフレームワークとして Playwright を確立する
- 開発者が最小限の摩擦で E2E テストを作成・メンテナンスできるようにする
- ネットワーク傍受と適切なテスト設定によりテストの安定性を改善する
- マージリクエストパイプラインとステージング環境で E2E テストを実行し、リグレッションを早期に検出する
- 並列テスト実行をサポートしてフィードバック時間を最小化する
- AI 支援によるテスト生成とデバッグを活用して開発者エクスペリエンスを改善する

### 非ゴール

- 既存のすべての QA テストを直ちに Playwright に移行する (緩やかな移行をサポート可能)
- フィーチャースペックを Playwright に移行する
- 単体テストや統合テストを E2E テストで置き換える
- Playwright 上にカスタムテストフレームワークやラッパーを実装する

## 提案

以下の実装戦略でプライマリーの E2E テストフレームワークとして Playwright を採用します:

### フレームワークの選定

Playwright はよく知られた業界標準のフレームワークです。

#### 利点

- **安定性**: 外部依存関係を制御することで [テストを安定化](https://playwright.dev/docs/network) する組み込みのネットワーク傍受機能
- **開発者エクスペリエンス**: デバッグやインタラクティブにテストを書くための trace viewer と UI モード
- **アクセシビリティ**: 開発者が広範なトレーニングなしにテストを学び書ける適度な難易度
- **親しみやすさ**: 開発者が素早く学び採用できる確立されたフレームワーク
- **AI フレンドリー**: GitLab Duo を使ったテスト生成と修正をストレートに行える、標準的なプラクティスと明確なテスト構造
- **速度**: 素早い開発サイクルをサポートするための素早いフィードバックループ。Selenium や Cypress などの代替と比べてもより速いテスト実行 ([パフォーマンス比較](https://dev.to/swikritit/comparing-test-execution-speed-of-modern-test-automation-frameworks-cypress-vs-playwright-3hg8#key-observations) を参照)
- **メンテナンス性**: テストメンテナンスの負担を減らす明確な構文とツール
- **オープンソース**: [Apache 2.0 ライセンス](https://github.com/microsoft/playwright/blob/66137fd17d4453d199b086df26aece65f0169cf1/LICENSE) でオープンソースとして配布

#### 欠点

- 適度な学習曲線 (Cypress より急)
- 成長中のコミュニティ (確立されてはいる)

### テスト実行戦略

- **MR パイプライン**: マージ前にリグレッションを検出するためマージリクエストパイプラインで E2E テストを実行
- **ステージング環境**: 本番ライクな環境で動作を検証するため、ステージング環境に対してフルテストスイートを実行
- **並列実行**: フィードバック時間を最小化し開発者の速度を高めるためテストを並列に実行

### 開発者ツール

- **Trace viewer**: デバッグのために詳細なトレースでテスト実行を検査
- **UI モード**: インタラクティブなテスト記述とデバッグインターフェース
- **AI 支援による生成**: GitLab Duo を使ってテストを生成・修正し、開発者の生産性を改善

### 移行戦略

1. 移行期間中は既存のアクティブな QA テストをメンテナンスする
1. 以前の QA スイートを悩ませたメンテナンスのボトルネックを防ぐため、オーナーシップとカバレッジロードマップを確立する。Fulfillment 配下の各グループは:
   - 自分たちの機能のクリティカルなユーザーワークフローを定義する
   - テストカバレッジ計画を作成する
   - 自分たちの領域の E2E テストを所有する
   - 移行、統合、削除すべきテストを特定するために [CustomersDot E2E テスト冗長性削減分析 (&21309)](https://gitlab.com/groups/gitlab-org/-/work_items/21309) をレビューする

   トラッキング先: [#16802](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16802) (Fulfillment Platform)、[#16803](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16803) (Provision)、[#16804](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16804) (Seat Management)、[#16805](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16805) (Subscription Management)、[#16806](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16806) (Utilization)

1. テストを CI/CD に統合する: スケジュールされたステージングテスト実行をセットアップし、失敗時の Slack 通知と issue 作成を実装し、テスト結果をマージリクエストレポートに統合する

   トラッキング先: [#16795](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16795) (Docker)、[#16796](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16796) (Playwright 設定)、[#16797](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16797) (MR パイプラインジョブ)、[#16798](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16798) (MR テストレポート)、[#16799](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16799) (スケジュールステージング実行)、[#16800](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16800) (Slack 通知)

1. 開発者向けにテスト記述ガイドラインをドキュメント化する。新しい E2E テストには、シナリオが単体、統合、システムテストでカバーできないことを確認する簡単な根拠を含める要件を含む

   トラッキング先: [#16801](https://gitlab.com/gitlab-org/customers-gitlab-com/-/work_items/16801)

1. 既存の QA テストを徐々に Playwright に移行する
1. Playwright のカバレッジが高まるにつれて、古い QA テストを廃止する

## 設計および実装の詳細

### テストの構成

機能またはユーザーワークフローごとにテストを構成します:

```sh
playwright/
├── helpers/
│   └── env.js
├── pages/
│   ├── login_page.js
│   ├── purchase_page.js
│   ├── billing_accounts_page.js
├── tests/
│   ├── auth.setup.js
│   ├── purchase.setup.js
│   ├── login.spec.js
│   └── purchase.spec.js
```

### セットアッププロジェクトと依存関係

Playwright プロジェクトは依存関係を持つ順次テスト実行を可能にします。POC は多段階セットアップを実装しています:

- **auth プロジェクト**: GitLab および Customers Portal でテストユーザーを認証し、セッション状態を `playwright/.auth/user.json` に保存
- **purchase プロジェクト**: テストデータをセットアップするために初期サブスクリプション購入を完了。auth プロジェクトに依存
- **chromium プロジェクト**: 認証済みセッションで実際の E2E テストを実行。purchase プロジェクトに依存

このアプローチにより、テスト全体でセットアップロジックを重複させることなく、テストが必要な前提条件 (認証済みユーザー、既存のサブスクリプション) を持つことを保証します。

### 環境設定

環境変数は [`playwright/helpers/env.js`](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/12788-mlunoe-playwright-e2e-poc/playwright/helpers/env.js) に集約されています ([`qa/runtime/env.rb`](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/fc98217e4dd989b14361eaef91450f9407bb8fb5/qa/runtime/env.rb) のセットアップに準じる):

```javascript
export function getEnv() {
  const isCI = process.env.CI === 'true' || process.env.CI_SERVER === 'yes';
  const isHeadless = process.env.HEADLESS !== 'false';
  const baseURL = process.env.CUSTOMER_PORTAL_URL || 'http://localhost:5000';
  const testUserEmail = process.env.QA_TEST_USER_EMAIL;
  const testUserPassword = process.env.QA_TEST_USER_PASSWORD;

  if (!testUserEmail || !testUserPassword) {
    throw new Error(
      'QA_TEST_USER_EMAIL and QA_TEST_USER_PASSWORD environment variables are required. ' +
        'Make sure that the `qa/docker/prepare_gitlab.rb` script was executed.',
    );
  }

  return {
    isCI,
    isHeadless,
    baseURL,
    testUserEmail,
    testUserPassword,
    customerPortalUrl: baseURL,
    gitlabUrl: process.env.GITLAB_URL || 'http://localhost:3000',
  };
}
```

これにより、ローカル開発環境と CI 環境間で一貫した設定を保証し、必要な変数が欠けている場合は明確なエラーメッセージを提供します。

### 認証ハンドリング

認証は、GitLab および Customers Portal のログインフローの両方を扱う再利用可能なページオブジェクトとして実装されます:

- テストユーザーの認証情報で GitLab にログイン ([`qa/docker/prepare_gitlab.rb`](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/12788-mlunoe-playwright-e2e-poc/qa/docker/prepare_gitlab.rb) 経由で作成)
- Customers Portal にナビゲートしてシングルサインオン (SSO) フローを開始
- 必要に応じて初回サインアップ (ユーザー作成) を処理
- テスト全体で再利用するために認証済みセッション状態を保存

`auth.setup.js` プロジェクトはこれを 1 度実行してセッションを永続化し、後続のテストが再認証なしで認証済み状態を使用できるようにします。他のテストを妨げずに既存セッションを無効化する必要があるテストには、この [セッション分離](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/12788-mlunoe-playwright-e2e-poc/playwright/tests/login.spec.js#L8-25) パターンを利用できます。

### ページオブジェクトとテストパターン

POC はメンテナンス可能なテストのためのページオブジェクトパターンを実証しています:

- **LoginPage**: GitLab および Customers Portal の認証フローをカプセル化
- **PurchasePage**: 支払いフォーム操作を含むサブスクリプション購入ワークフローを処理

ページオブジェクトは以下を提供します:

- 共通の操作 (ログイン、フォームへの入力、送信) のための再利用可能なメソッド
- 集約されたセレクターとロケーター
- テストロジックと UI 操作の明確な分離
- UI 変更時の容易な更新

テスト構造の例:

```javascript
test('can complete purchase with existing payment method', async ({ page }) => {
  const purchasePage = new PurchasePage(page);

  await purchasePage.navigateToPurchase();
  await purchasePage.fillQuantity(1);
  await purchasePage.selectExistingPaymentCard();
  await purchasePage.acceptTermsAndPurchase();
  await purchasePage.verifyPurchaseSuccess();
});
```

### テストの安定性

この実装により、テストの安定性を支援する複数のツールを得られます。

- **ネットワーク傍受**: 任意のタイムアウトの代わりに `waitForResponse` を使用して API レスポンスを確実に待機
- **並列ワーカー**: テスト堅牢性を保証するためのデフォルト並列化 (環境ごとに設定可能)
- **リトライ**: フレーキーテストに対する自動リトライロジック (CI で 1 リトライ、ローカル開発で 0)
- **テストトレース**: 失敗したテストの根本原因を特定するための詳細ビュー
- **失敗時のスクリーンショット**: 失敗したテストの自動スクリーンショット取得
- **隔離 (Quarantining)**: 修正中に他の開発をブロックしないようにテストを隔離する機能
- **ヘッドレスモード**: ローカルと CI 環境間で一貫した動作

### Zuora API の不安定性への対処

Customers Portal は Zuora のような外部 API と統合しており、これがテストに不安定性をもたらすことがあります。この問題を回避するため、以下の戦略を使用できます。

#### 特定の API 統合テスト

実際の Zuora との API 操作を検証する専用の統合テストを作成します。これらのテストは:

- 実際の API エンドポイントに対して実行され、実際の統合問題を検出する
- API レスポンスを確実に待機するために Playwright の [`waitForResponse`](https://playwright.dev/docs/api/class-page#page-wait-for-response) を使用
- API 動作に関する安定性測定と知見を提供する
- 通常のテスト実行から API のフレーキーさを分離するため、別のスケジュール (たとえば、夜間またはオンデマンド) で実行

#### フィクスチャーベースのテスト

必要に応じて、通常の E2E テストは Playwright のフィクスチャーからモックされた API レスポンスを使って以下を行えます:

- Zuora の API レスポンスをモック
- 外部 API の可用性に関係なく、テストを安定して高速に保つ
- アプリケーションロジックとユーザーワークフローのテストに集中
- API のタイムアウトや失敗によって引き起こされるテストのフレーキーさを低減

この 2 段階アプローチは関心を分離します。統合テストは API 契約を検証し、通常のテストはアプリケーションの動作を検証することで、より信頼性が高くメンテナンス可能なテストスイートが得られます。

### Docker のセットアップと再利用

POC は E2E テストの既存 Docker インフラを再利用しています:

- **GDK コンテナ** (`cdot-gdk`): SaaS シミュレーションを有効にした GitLab Development Kit (GDK) インスタンスを実行
- **CustomersDot コンテナ** (`web`): Customers Portal (CustomersDot、CDot) アプリケーションを実行
- **E2E コンテナ** (`e2e`): Node.js と Playwright の依存関係で Playwright テストを実行

E2E コンテナは、以下を含むベースイメージ (`cdot-for-e2e`) からビルドされます:

- 依存関係管理用の Node.js と Yarn
- Playwright ブラウザ (Chromium、Firefox、WebKit)
- `package.json` からのテスト依存関係

主要な Docker 設定:

- **Dockerfile.e2e**: Yarn の依存関係と Playwright ブラウザをインストール
- **docker-compose.e2e.yml**: 適切なネットワークとヘルスチェックですべてのコンテナをオーケストレーション
- **環境変数**: 設定 (URL、認証情報など) のためにコンテナに渡される
- **ボリュームマウント**: アーティファクト収集のため、テスト結果が E2E コンテナからホストにマウントされる

このセットアップは以下を自動的に処理します:

- コンテナの起動とヘルスチェック
- サービス間のネットワーク接続性
- デバッグ用にすべてのコンテナからのログ収集
- テスト結果のアーティファクト収集

### テストユーザーの作成

[`qa/docker/prepare_gitlab.rb`](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/12788-mlunoe-playwright-e2e-poc/qa/docker/prepare_gitlab.rb) スクリプトは GitLab の初期化中にテストユーザーを作成します:

- `QA_TEST_USER_EMAIL` および `QA_TEST_USER_PASSWORD` 環境変数を読み込む
- これらの認証情報で GitLab ユーザーを作成
- デバッグ用に進捗とエラーメッセージを出力
- 進める前に必要な環境変数が設定されていることを検証

このテストユーザーは、auth セットアッププロジェクトが認証してセッション状態を確立するために使用されます。このユーザーをベースにして、グループ、サブスクリプション、課金アカウントなどの追加の必要な状態を確立できます。

### CI/CD 統合

Playwright E2E テストは、専用ジョブで継続的インテグレーション/継続的デプロイメント (CI/CD) パイプラインに統合されます:

- **mr:playwright-e2e:saas**: マージリクエストの SaaS (GDK) 環境に対してテストを実行
- **mr:playwright-e2e:self-managed**: マージリクエストのセルフマネージド環境に対してテストを実行
- 両方のジョブ:
  - 失敗時にパイプラインをブロックすることを保証するために MR で実行される
  - 一時的な失敗を扱うために失敗したテストを 1 度リトライ
  - GitLab 統合のために JUnit フォーマットでテスト結果を収集
  - デバッグのために失敗時にスクリーンショットとトレースを取得
  - 分析のために HTML レポートと JSON 結果を生成
  - デバッグのためにアーティファクトを 30 日間保存
  - 設定可能なワーカーで並列実行をサポート

### ブラウザカバレッジ

実装は CI/CD およびローカル開発で Chromium でテストを実行することに焦点を当てていますが、Playwright のマルチブラウザ機能を通じて Firefox、WebKit、Microsoft Edge もサポートしています。

## 実装上の検討事項

### オーナーシップ

E2E テストが古くならないようにするためには、明示的なオーナーシップが極めて重要です。明確なオーナーシップなしには、責任が分散し、UI 変更によってテストが壊れても誰も修正する義務を感じないため、テストは急速に荒廃します。

ユーザー向け機能を開発する各グループのエンジニアが、自分たちの機能の E2E テストを所有すべきです。これにより、製品が進化してもテストが最新の状態を保ち、開発者がコードとテストの両方を理解し、メンテナンスが大きな負担として蓄積するのではなく、徐々に発生するようになります。

これらのテストを MR で実行し、失敗時にマージをブロックすることも、最新の状態を保証するための重要な要素です。テストがステージングでも実行されるとき、機能の検証を自動化し、実施しているユーザー受け入れテスト (UAT) の大部分を置き換えることができます。

フレームワーク自体は、Customers Portal の UI の大部分を構築する ~"group::subscription management" が所有すべきです。

### 学習曲線

Playwright はチームにとって新しいフレームワークですが、十分にドキュメント化されており広く採用されています。モダンなテストフレームワークに慣れた開発者にとってはアクセスしやすいでしょう。AI 支援によるテスト生成は学習曲線をさらに減らすことができます。

### 設定の複雑さ

Playwright は CI/CD 統合、ネットワーク傍受、並列実行のための設定を必要とします。しかし、この複雑さは他のモダンなテストフレームワークと同等であり、テストの安定性と速度において大きなメリットをもたらします。

### 既存のブラウザ利用

このプロジェクトはすでに統合テストの RSpec で Playwright を使用しており、フレームワークのコンセプトに対するある程度の親しみがあり、Playwright 採用への学習曲線を減らします。

### ファーストクラスとしてのフィクスチャー

Playwright はフィクスチャーをファーストクラスの市民として扱い、E2E テストを超えて自然に拡張できるようにします。フィクスチャーはフィーチャーテストや統合テストの作成にも活用できます。

## 概念実証からの学び

POC ([!14622](https://gitlab.com/gitlab-org/customers-gitlab-com/-/merge_requests/14622) と [!14815](https://gitlab.com/gitlab-org/customers-gitlab-com/-/merge_requests/14815)) は以下を検証しました:

### Docker セットアップが上手く機能する

- 既存の Docker インフラ (`docker-compose.e2e.yml`) の再利用が効果的
- SaaS シミュレーションを伴う GDK コンテナが現実的なテスト環境を提供
- 初期化時のテストユーザー作成により認証テストが可能
- コンテナのヘルスチェックがテスト実行前にサービスが準備完了であることを保証

### 認証はストレート

- GDK でのユーザー作成がシームレスに機能
- 適切な待機により SSO フローのハンドリングが信頼性高く動作
- ページオブジェクトパターンがログインフローをきれいにカプセル化
- `storageState` のセッション状態の永続化により、テスト内での再認証が不要に
- [セッション分離](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/12788-mlunoe-playwright-e2e-poc/playwright/tests/login.spec.js#L8-25) により、他のテストを妨げずにセッションを無効化するテストが可能
- 依存関係を持つセットアッププロジェクトが適切なテスト前提条件を保証

### AI 支援によるテスト生成が実現可能

GitLab Duo を使って作成されたテストの具体的な MR は [こちら](https://gitlab.com/gitlab-org/customers-gitlab-com/-/merge_requests/14815) を参照してください。

- GitLab Duo は機能する Playwright テストを生成できる
- テストはプロジェクトのパターンと規約に従う
- 生成されたテストは最小限の手動調整で済む
- ページオブジェクトにより、AI がメンテナンス可能なコードを生成しやすくなる

### テストパターンが明確

- ページオブジェクトが UI 操作のための良い抽象化を提供
- セットアッププロジェクトが複雑な前提条件 (認証、初期購入) を処理
- 機能/ワークフローごとのテスト構成が直感的
- Playwright の API は表現力豊かで読みやすい

## 代替ソリューション

### ビルトイン agent を備えた Playwright

Playwright はテスト自動化のために独自のプランナー、ジェネレーター、ヒーラー agent を提供しています。これらの agent は自動化機能を提供しますが、提案では代わりに GitLab の AI agent を使用することを推奨しています。なぜなら、私たち自身の AI 製品を検証・改善でき、GitLab の AI 機能を活用するという広範な戦略と整合するからです。

### Momentic.ai

テストを自動的に生成・メンテナンスできる AI 駆動のテスト自動化プラットフォーム。

#### 利点

- 簡単で自動的なテスト生成

#### 欠点

- GitLab の AI 機能を活用しない
- 多額のライセンス費用
- 外部ベンダー依存をもたらす
- テスト実装とメンテナンスに対する制御が低い

### Cypress

代替の E2E テストフレームワーク。

#### 利点

- より大きなコミュニティ
- 簡単なセットアップ
- ユーザーフレンドリーな API

#### 欠点

- Playwright と比較してテスト実行が遅い
- 別のテストブラウザ統合をもたらす
- 単一言語フォーカス

### 既存の QA テストの更新

現在の QA テストスイートを近代化してメンテナンスする試み。

#### 利点

- 設定の大部分はすでに完了している

#### 欠点

- これまでの取り組みでもテストが古くなってしまった
- 最近の開発者エクスペリエンス調査で [テストが理解・更新困難であることが示されている](https://gitlab.com/gitlab-org/fulfillment/meta/-/work_items/2085#note_2219119420)
- カスタムフレームワークで、学習曲線が急で、メンテナンス要件が高い
- 投資対効果が不確実で、相当な労力を必要とする
- 基盤となるフレームワークの制約に対処しない
