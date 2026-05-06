---
title: "Continuous Integration（CI）/ Verify ワークショップ"
upstream_path: /handbook/customer-success/playbooks/ci-verify/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T02:49:20Z"
translator: claude
stale: false
---

追加のカスタマーサクセス ハンドブックコンテンツについては、[カスタマーサクセスホームページ](/handbook/customer-success/)を参照してください。

---

以下の項目は、CSM チームが SA と、時には PS と連携して顧客に提供する CI/Verify ワークショップに関するものです。これは半日間の無料ワークショップで、GitLab による CI がいかに簡単かを顧客が直接体験できるようにするものです：

### ワークショップの成果物

#### プロジェクトの変換

プロジェクトを変換するためのプロジェクトプランを作成します。大まかな概要：

1. プロジェクトを GitLab.com にフォークし、プライベートに設定する。
2. プロジェクトに顧客とチームのメンバーを追加する。
3. プロジェクトを GitLab CI に変換する。動作する .gitlab-ci.yml ファイルを作成する。

#### ワークショップの適格性 / スコープ

- 顧客のスコープ設定…
  - 既存の顧客であること。
  - エンタープライズ顧客は大規模で複雑なパイプラインを持つ傾向があるため、Commercial 顧客が好ましい。
  - Commercial はよりアジャイルで新しいツールの採用が早い。
  - エンタープライズは縦割りが強い。CI/CD ツールの DRI と話せない場合がある。
  - これは顧客のステージ導入を目的とするものであり、商談のクローズではないため、見込み客は対象外とする。
  - GitLab を SCM として使用していること。
  - GitLab CI/CD への移行を望んでいること。
  - これは成長を生むためのセールス戦術ではない。顧客が消極的または不確かな場合は成功しない。
- プロジェクトのスコープ設定…
  - シンプルなパイプラインを選ぶ — ビルド、テスト、デプロイ。
  - PoC の一環としてセキュリティスキャンを追加できる。
  - プロジェクトを gitlab.com にアップロードすることに同意していること。
  - マルチチャイルドパイプライン・DAG などは、おそらく難しすぎて時間がかかりすぎる。
  - 数時間の作業で変換できるもの。
  - 価値とその道筋を示したいが、すべての重労働をこちらで行うのは望ましくない。

#### ユーザーイネーブルメント

以下のイネーブルメントデッキを使用した、GitLab による CI のスケーリングに関する概要とトレーニング。

主なトピック：

1. 顧客のユーザーが GitLab CI/CD を活用できるよう支援する。
2. .gitlab-ci.yml ファイルの書き方。
3. GitLab（共有）ランナーの使い方。
4. 標準化と迅速なスケーリングのためのテンプレート作成方法。

### リソース

[GitLab CI/CD 変換ワークショップ セルシート](https://docs.google.com/document/d/1dVaFVvBJtoscC0oIrEM5nmv1-QB0xXTDICmVd55a0xY/edit)（GitLab 内部 WIP）

[GitLab CI イネーブルメントデッキ - Jenkins からの移行ベストプラクティス](https://docs.google.com/presentation/d/1eR_874yUHu5Yz8jC-7Gwtiz9j8N4APlgz7NT1_UR0mE/edit#slide=id.g849e6d84e3_0_636)（GitLab 内部 WIP）

[スケールでの GitLab CI 導入ドキュメント](https://docs.google.com/document/d/19oKupXi_nnFwD0VOilMhTH2nzUvrBN3P9hI-R5c6P8w/edit#heading=h.b61novry8f4t)（GitLab 内部 WIP）
