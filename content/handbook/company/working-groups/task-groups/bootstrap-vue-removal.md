---
title: "BootstrapVue 削除グループ"
description: "BootstrapVue 削除タスクグループの属性、目標、役割と責任についての詳細はこちら。"
upstream_path: /handbook/company/working-groups/task-groups/bootstrap-vue-removal/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: 2026-04-25T23:31:04Z
translator: claude
stale: false
lastmod: "2026-04-13T17:06:49+02:00"
---

## 属性

| プロパティ | 値 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 作成日 | 2024-09-10 |
| 目標終了日 | ~~2025-08-31~~ 2026-11-30 |
| 現在のステータス | 進行中 - アクティブなマイグレーション |
| Slack | [#tg_bootstrapvue_removal](https://gitlab.enterprise.slack.com/archives/C07LB4P1FST)（社内からのみアクセス可能） |
| Google Doc | [アジェンダドキュメント](https://docs.google.com/document/d/1L1-4evYtCATuAYam1ZJOrgBcGZIg0jA1P20gtBfWTsI)（社内からのみアクセス可能） |
| Zoom 録画 | [録画](https://drive.google.com/drive/folders/1sHgSixs41YgTN7hnklP7oosWtPLOxWGm)（社内からのみアクセス可能） |

## 現在のステータス

> **ステータス更新（2026年4月）**: デザインシステムチームが最も複雑なコンポーネントを担当することで、スコープが縮小されました。タスクグループは現在、コンポーネントごとに残りのコンポーネントを移行することに集中しており、新しい目標終了日は2026年11月30日です。タスクグループは単一の調整機関として継続します。[チームからのフィードバック](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18107#note_3041079557)の後、コンセンサスは明確でした: コンポーネントの移行間には重複が多すぎて小さなグループに分割できず、実際のブロッカーはスコープや計画ではなく時間の配分でした。

### 縮小されたスコープ

[デザインシステムチームが最も複雑なコンポーネントを担当](https://gitlab.com/gitlab-org/gitlab/-/issues/589623)することで、タスクグループのスコープが大幅に縮小されました。タスクグループは現在、約 15 の残りコンポーネントの移行に集中しています:

- すべてのフォームコンポーネント（2 つのレイアウトコンポーネントを含む）
- タブ（複数）
- リンク
- ボタン

タスクグループが処理すべき残りのディレクティブはありません（モーダルとツールチップのディレクティブはデザインシステムチームが担当しています）。

### マイグレーションアプローチ

- **コンポーネントごとのマイグレーション**: 複数のコンポーネントにまたがる破壊的変更をまとめるのではなく、コンポーネントを一度に 1 つずつ移行します。
- **破壊的変更**: メジャーバージョンアップを避けません。API の一部が削除された場合、暗黙的な BootstrapVue API であっても、メジャーバージョンにする必要があります（[Mark Florian による説明](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18107#note_2395901234)）。破壊的変更はケースバイケースで処理されます。
- **AI をアクセラレーターとして活用**: AI ツールを活用して、シンプルから中程度の複雑さのコンポーネントのマイグレーションドラフトを作成することが検討されており、エンジニアがレビューと改善を行います。エンジニアは複雑なアーキテクチャの決定に専門知識を集中させます。
- **ユーティリティとミックスインのクリーンアップ**: 残りの BootstrapVue ユーティリティとミックスイン（例: `looseEqual`、`looseIndexOf`、`formOptionsMixin`）は、コンポーネントのマイグレーションの一部として対処する必要があります。

### コントリビューション

コンポーネントのマイグレーションに興味があるか、経験がある場合は、[#tg_bootstrapvue_removal](https://gitlab.enterprise.slack.com/archives/C07LB4P1FST) Slack チャンネルでご連絡ください。意見や参加を歓迎します。

## コンテキスト

以前、私たちは[BootstrapVue を使用することを選択](https://gitlab.com/groups/gitlab-org/frontend/-/epics/1)しました。すでに Bootstrap を採用しており、カスタム UI ライブラリを作成することは大きな取り組みになるためです。当時、BootstrapVue は適切な選択でした。当初、BootstrapVue はモノリシックコードベースの一部でしたが、後に GitLab UI リポジトリに移動されました。

BootstrapVue は過去には適していましたが、現在は移行を検討しています。以下で詳述するように、メンテナンスと使用を妨げるいくつかのデメリットがあります。移行の主な理由は、BootstrapVue が現在サポートされておらず、[gitlab-ui](https://gitlab.com/gitlab-org/gitlab-ui)（そして最終的には [gitlab](https://gitlab.com/gitlab-org/gitlab/)）の Vue 3 へのマイグレーションを妨げているためです。

### 目標

1. **主要目標: Vue 3 マイグレーションの有効化**: BootstrapVue は Vue 3 の Compat Build モードをサポートしていません。以前の Compat モードの構築の試みは、独自のコンポーネントへの移行と同程度の時間がかかることが証明されています。Vue 3 マイグレーションの有効化が当面の優先事項ですが、BootstrapVue を削除することで、[2024年9月1日に発表された](https://blog.vuejs.org/posts/vue-3-5) Vue 3.5 や将来の Vue 4 など、将来の Vue バージョンに関する潜在的な問題などの将来のブロッカーを防ぐことができます。独自のコンポーネントを維持することで、継続的な柔軟性と外部ライブラリの制約からの自由が保証されます。
2. **二次目標: 開発者エクスペリエンス（DX）の改善**
   - **シングルソースオブトゥルース**: GitLab UI リポジトリは現在 BootstrapVue コンポーネントを「ミラー」しています。私たちは 2 つのドキュメントソースを維持しています: Pajamas デザインシステムと Vue コンポーネントの Storybook です。Storybook は完全な情報については BootstrapVue のドキュメントを参照するよう案内しています。これらのリソースを単一のソースオブトゥルースに統合することで、DX が向上し、デザインシステムの理解が深まります。
   - **デザイントークンの移行**: BootstrapVue コンポーネントを使用すると、ネストされた CSS セレクターのオーバーライドや Bootstrap スタイルと HTML 構造への対応などの回避策が必要になり、デザイントークンの追加が複雑になります。
   - **デザインシステムチームの効率**: GitLab の開発者向けにコンポーネントを拡張するには、多大な労力が必要であり、BootstrapVue コンポーネントを使用する代わりに、Monorepo に手動で実装することになります。
   - **コンポーネントの使用性**: `<table>` コンポーネントは私たちのほとんどのユースケースで使用できないことが判明し、カスタム実装が必要でした。
   - **オーナーシップと責任**: 独自のコンポーネントを開発することで、コンポーネントシステム内の明確な責任と、それらを構築・維持する専任チームが確保されます。
   - **他のリポジトリの有効化**: たとえば、BootstrapVue に依存しなくなった場合、Compat モードまたは Vue 3 モードへの移行を検討できます。

### 独自システムを維持することの一般的なメリット

- **依存関係の削減**: BootstrapVue を削除することで、コードベースから依存関係を取り除くことができます。[BootstrapVue がインストールする依存関係のリストはこちら](https://github.com/bootstrap-vue/bootstrap-vue/blob/dev/package.json)。
- **アクセシビリティの改善**: BootstrapVue の一部の複雑なコンポーネント（Popover など）にはアクセシビリティの問題があります。独自の UI ライブラリを作成・維持することで、アクセシビリティを改善し、回避策に費やす時間を削減できます。
- **柔軟性の向上**: 外部ライブラリに依存することなく、必要に応じてさまざまな機能やツールを統合できます。
- **メンテナンスの簡素化**: UI コンポーネントシステムの維持には労力が必要ですが、BootstrapVue などの外部ライブラリへの依存を避けることで、継続的な更新と関連するメンテナンスの課題が不要になります。
- **リポジトリへの影響**: BootstrapVue の削除は [gitlab-ui](https://gitlab.com/gitlab-org/gitlab-ui) リポジトリで行われます。これにより、少ないコードを配信することで [gitlab](https://gitlab.com/gitlab-org/gitlab/) リポジトリのバンドルサイズが削減され、GitLab の特定のニーズに対応するための柔軟性が向上します。

### 課題

- **互換性**: カスタムコンポーネントが以前と同じ API を維持することを確保することが重要です。ほとんどのマイグレーションと同様に、不必要な変更なしに BootstrapVue コンポーネントの機能を複製することに集中します。
- **グローバルイベント**: BootstrapVue はグローバルイベント（bv::）をサポートしていました。この機能の再構築は複雑になる可能性があります。
- **コンポーネントの複雑さ**: 一部の BootstrapVue コンポーネントは特に複雑であり、単純なリファクタリングを超えた代替のマイグレーション戦略が必要になる場合があります。

これらは既知の課題ですが、まだ特定されていない追加の問題がある可能性があります。

## 終了基準 {#exit-criteria}

> **注**: 以下の終了基準は完全なスコープを表しています。[デザインシステムチーム](https://gitlab.com/gitlab-org/gitlab/-/issues/589623)は最も複雑なコンポーネント（トースト、ツールチップ、ポップオーバー、ドロップダウン、モーダル、テーブル）を担当しています。タスクグループは残りの約 15 コンポーネント（フォームコンポーネント、タブ、リンク、ボタン）に集中しています。

1. `/src/vendor/bootstrapvue` から未使用のファイルを削除: [Epic &13075](https://gitlab.com/groups/gitlab-org/-/epics/13075)。
2. ドキュメントを更新してアクセス可能にする: [Issue #2754](https://gitlab.com/gitlab-org/gitlab-ui/-/issues/2754)。
3. MIT ライセンスの使用を明確にする: [Issue #2318](https://gitlab.com/gitlab-com/legal-and-compliance/-/issues/2318)。
4. ファイルを移行する: [Epic &15178](https://gitlab.com/groups/gitlab-org/-/epics/15178)
   1. ディレクティブを `/src` フォルダに移動する。
   2. コンポーネント、プラグイン、ミックスイン、定数を通常の Vue 2 オプション API 構文を使用して書き直し、`/src` フォルダに移動する。
5. ディレクトリ `/src/vendor/bootstrapvue` を削除する。
6. GitLab UI の Bootstrap CSS ユーティリティを（TailwindCSS の）GitLab CSS ユーティリティに置き換える: [Epic &15765](https://gitlab.com/groups/gitlab-org/-/epics/15765)。

## 役割と責任

| タスクグループの役割 | 担当者 | 職位 |
| --------------- | ------------------------ | ----------------------------------------------------- |
| DRI | Vanessa Otto | スタッフフロントエンドエンジニア、AI-Powered:Workflow Catalog |
| メンバー | Peter Hegman | スタッフフロントエンドエンジニア、Tenant Scale::Organizations |
| メンバー | Paul Gascou-Vaillancourt | シニアフロントエンドエンジニア、Growth::Engagement |
| メンバー | Lorenz van Herwaarden | シニアフロントエンドエンジニア、SRM::Security Insights |
| メンバー | Chaoyue Zhao | フロントエンドエンジニア、Create::Source Code |
| メンバー | Thomas Hutterer | シニアフルスタックエンジニア、Foundations::Design System |
