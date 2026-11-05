---
title: "マイクロフロントエンドプラットフォーム"
status: proposed
creation-date: "2026-10-07"
authors: ["@ntepluhina"]
coaches: []
dris: ["@xanf", "@fredericcaplette", "@ntepluhina"]
owning-stage: "Plan"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/mfe_platform/
upstream_sha: f656f02435661ffa63fe51e9b75469265e9ed794
lastmod: "2026-11-05T09:36:04-05:00"
translated_at: "2026-11-05T21:18:38.759097+00:00"
translator: codex
stale: false
---


<!-- vale gitlab.FutureTense = NO -->

{{< engineering/design-document-header >}}

## 概要 {#summary}

GitLab は、単一のドメイン（`gitlab.company.com`）の背後でモノリスとして提供されます。
Duo Chat や Work Items などの製品領域は、
モノリスのビルドとリリースのサイクルに密接に結合しています。この設計
ドキュメントでは、製品領域を独立して
開発、ビルド、バージョン管理、デプロイできるマイクロフロントエンド（MFE）プラットフォームを提案します。
エンドユーザーには違いが見えず、すべてが 1 つのドメインと 1 つの
ログインの背後に留まります。

## 動機 {#motivation}

### 問題 {#problems}

- **モノリスへの結合。** フロントエンドの変更は、どんなに小さくても、
  モノリス全体のリリースが必要です。Duo Chat の 1 行の修正も、
  データベースマイグレーションと同じパイプラインを待ちます。
- **チーム間の結合。** すべてのチームが 1 つの Webpack 設定、1 つの依存関係
  ツリー、1 つの CI パイプラインを共有します。ある領域でリントチェックが失敗すると、
  すべてのデプロイが阻まれます。
- **独立したバージョン管理がない。** 単一の製品領域だけをアップグレードまたは
  ダウングレードする仕組みがありません。ロールバックには、
  モノリス全体のロールバックが必要です。
- **外部モジュールに UI を提供する経路がない。** LabBench モジュール（個別に
  デプロイされるサービス）には、GitLab のシェルに UI を組み込む標準的な方法が
  ありません。各モジュールが独自の統合方法を考案しています。

### 目標 {#goals}

1. 製品チームが、モノリスをリリースせずに、自分たちの領域の UI 変更を
   デプロイできます。
2. MFE の複数のバージョンが共存できます。アップグレードとダウングレードは、
   バージョンを選択して行います。
3. セルフマネージド環境とエアギャップ環境のインストールは、すでに利用しているものと同じ
   リリースチャネルを通じて MFE を受け取ります。

### 対象外 {#non-goals}

- **単一ドメインのルーティング（GATE）。** モジュールを
  1 つのドメインの背後に配置するルーティング層は GATE プロジェクトが所有し、独自のスケジュールを持ちます。
  GATE が利用可能になるまでは、モノリスにマーケットプレイスの
  URL を設定し、そのオリジンを CSP に追加します。
- **モジュールの検出。** モノリスは、どの LabBench
  モジュールがデプロイされているかをまだ検出できません。当面、マーケットプレイスの場所はモノリスの設定で
  指定します。
- **特定の製品領域の移行。** 各領域は引き続きプラットフォームの利用側であり、
  所有するチームで追跡します。このドキュメントは
  プラットフォームを扱い、移行は扱いません。

### 現在の制約 {#constraints-today}

- **単一ドメインがまだない。** GATE がすべてのデプロイ
  方式（Omnibus から Kubernetes まで）のルーティングを提供するまでは、モノリスに
  マーケットプレイスの URL を設定し、そのオリジンを CSP に追加して、そこから MFE を
  埋め込めるようにします。
- **モジュールを検出できない。** モノリスは、どのモジュールが
  デプロイされているかを検出できません。マーケットプレイスの場所はモノリスの設定で指定し、
  マニフェストは検出なしで機能する必要があります。

## 決定事項 {#decisions}

- [ADR 001: ツールのリポジトリ戦略](decisions/001_tooling_repository_strategy.md) -
  密接に結合したツールにはモノレポ、独立したユーティリティにはポリレポを使用します。
  MFE アプリケーションコードをどこに置くかという未解決の問いも記載しています。
- [ADR 002: 再利用可能なテストのアプローチ](decisions/002_reusable_testing_approach.md) -
  モノリス、MFE、LabBench モジュールで共有する、ユニット、統合、
  ブラウザー駆動の各レイヤーを備えた単一の `@gitlab/frontend-tests` パッケージです。
- [ADR 003: モジュールに含めるパッケージ化と配信](decisions/003_module_carried_packaging_and_serving.md) -
  LabBench モジュールは、単一のソースプロトコルを介して MFE を提供します。モノリスは
  カタログを取得し、自身のオリジンから配信します。モジュールは、モノリスが所有する
  語彙の範囲内で配置場所を宣言します。
- [ADR 004: パッケージのライフサイクル](decisions/004_packages_group_and_shared_setup.md) -
  再利用可能なパッケージは `gitlab-org/frontend/toolkit` に置き、
  `@gitlab/frontend-config` を通じてセットアップを共有し、
  公開、保守、廃止に関する共通のプロセスに従います。ADR 001 のツール用
  モノレポを単一のパッケージに改めます。

- [ADR 005: MFE アプリ間の通信](decisions/005_mfe_inter_app_communication.md) -
  MFE アプリケーション間の通信は先送りにします。プラットフォームが扱うのは、シェルと MFE の間の
  通信だけです。通信チャネルや共有状態のソリューションを追加する前に、
  `#g-ui_platform` で新しい要望を提起してください。

## MFE としての抽出に向けてアプリケーションを準備する {#preparing-your-application-for-mfe-extraction}

モノリス内のフロントエンド領域を所有するチームは、現在から MFE と互換性のある
パターンに近付けることで、将来の移行コストを減らせます。
これらの手順は、いずれも MFE プラットフォームの完成を前提とせず、
それぞれが独立してコードベースを改善します。

### 共有ユーティリティを抽出する {#extract-shared-utilities}

純粋で再利用可能な関数を、モノリスから
[`@gitlab/frontend-utils`](https://gitlab.com/gitlab-org/frontend/utils)へ移します。
アプリケーションが抱えるモノリス内部からのインポートが少ないほど、
抽出時に切り離す範囲が小さくなります。すでに移行済みの例には、
`parseBoolean` と `normalizeHeaders` があります。

### テストカバレッジを統合テストに移す {#shift-test-coverage-to-integration-tests}

コンポーネントをマウントし、依存関係をすべてモック化するユニットテストは、
テストスイートを内部実装に結合させます。レンダリング結果を通じて
ユーザーに見える動作を確認する統合テストは移植可能であり、アプリケーションがモノリス内で動作しても単独で動作しても、
テストは同じように機能します。
フィクスチャ、MSW リクエストハンドラー、Jest 設定などの共有テスト基盤には、
[`@gitlab/frontend-tests`](https://gitlab.com/gitlab-org/frontend/tests)を使用し、
両方の環境で同じテストインフラストラクチャが機能するようにします。

### HAML からのデータ注入を最小限にする {#minimize-haml-data-injection}

HAML から Vue のマウントポイントに渡す `data-*` 属性は、1 つひとつが
Rails のレンダリングレイヤーとの結合点です。マウント時の入力を最小限に保ち、
代わりに API 呼び出しを利用してください。正確なマウント契約は、
まだ定義中です（
[ADR 003 の決定 7](decisions/003_module_carried_packaging_and_serving.md#7-mount-contract-and-shared-runtime)を参照）。
ただし、方向性は明確です。プロジェクトパス、フィーチャーフラグ、
ユーザー権限などの情報について、サーバーがレンダリングする HTML 属性への依存が
少ないほど、アプリケーションを抽出しやすくなります。

## 先行事例と既存の取り組み {#prior-art-and-existing-work}

- [アーキテクチャ RFC](https://gitlab.com/gitlab-org/frontend/gitlab-mfe/-/blob/main/docs/architecture-rfc.md)
  （Rafa Frederico、2026-04-23）: Webpack 4 ホストとの Module Federation 2.0 のランタイム
  統合、`mount`/`unmount` ABI、
  同一オリジンからの配信を検証しています。
- [アーキテクチャ対案 RFC](https://gitlab.com/gitlab-org/frontend/gitlab-mfe/-/blob/main/docs/architecture-counter-rfc.md)
  （Illya Klymov、2026-07-12）: バージョン管理と整合性検証を伴う
  配信、階層化した契約の所有権、ビルドツールとしての rspack、
  レジストリを先行させる段階的な導入を提案しています。動作する実装
  （!245014）も付属しています。
- [フロントエンド分解の設計ドキュメント](../modular_monolith/frontend/_index.md):
  MFE が外部から利用する、モノリス側のモジュール化を扱います。
- [MFE レジストリ](https://gitlab.com/gitlab-org/frontend/gitlab-mfe-registry):
  SHA256 チェックサムとバージョンマニフェストを用いて MFE アセットを GCS に公開する
  既存のプロトタイプです。

## 代替案 {#alternative-solutions}

### 何もしない {#do-nothing}

製品領域はモノリスのリリースサイクルに結合したままになります。チームは
独立してデプロイできません。外部モジュールには標準的な UI の提供経路がありません。
Vue 3 の採用には、モノリス全体の移行が必要です。

**利点:** 新しいインフラストラクチャを構築、運用する必要がありません。

**欠点:** チームと領域の数が増えるほど、
結合によるコストが増大します。

### iframe {#iframes}

各領域を、モジュール独自のドメインを指す iframe に読み込みます。

**利点:** 強力に分離されます。JavaScript のスコープを共有しません。
**欠点:** UX が低下します（共有ナビゲーションがなく、スクロールバーが二重になり、
postMessage なしでは認証を共有できません）。アクセシビリティと
パフォーマンスに悪影響があります。「1 つのドメイン」という要件を満たしません。

### ビルド時の統合（npm パッケージ） {#build-time-integration-npm-packages}

各領域を npm パッケージとして公開し、モノリスの
Webpack ビルドにコンパイルして組み込みます。

**利点:** ランタイムフェデレーションのオーバーヘッドがありません。ビルドグラフが 1 つです。
**欠点:** 独立したデプロイやロールバックを実現できません。領域の変更には、
引き続きモノリスのリリースが必要です。外部モジュールには役立ちません。
