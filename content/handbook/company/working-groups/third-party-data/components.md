---
title: "サードパーティデータワーキンググループのコンポーネントと意思決定"
description: "サードパーティデータプラットフォームの各コンポーネントと意思決定、およびそれぞれの DRI を示します。"
upstream_path: /handbook/company/working-groups/third-party-data/components/
upstream_sha: be228760349beb5ac063e32579ee6507e09f8b6e
lastmod: "2026-11-24T08:44:34-05:00"
translated_at: "2026-11-24T21:21:43+00:00"
translator: codex
stale: false
---

各コンポーネントには DRI がいて、作業が行き詰まったときに判断を下します。最初の 5 分野は Customer Zero の前提となるため、各コンポーネントに Customer Zero と GA の基準があります。ベータにも Customer Zero の基準を適用します。お客様は自身のデータを利用するため、ベータには API の利用規約とユーザー向けドキュメントも必要です。Customer Zero とベータは GitLab.com でのみ実施するため、最後の分野は GA の前提にだけなります。

## プラットフォーム {#platform}

| コンポーネント | DRI | チーム | Customer Zero の基準 | GA の基準 |
|-----------|-----|------|-------------------|--------|
| ランタイムと書き込み契約 | Ankit Bhatnagar、Abhinaba Ghosh | Data Foundations、Intelligence Integrations、Orbit | コネクターは共通の契約に従って生データを書き込みます。 | コネクターの開発者なら誰でも参照できるように文書化します。 |
| コネクター | Ankit Bhatnagar、Michael Usachenko | Data Foundations、Orbit | Jira、Confluence、Slack、incident.io | Orbit のインテグレーション優先順位レポートに記載されているソース |
| 認証情報のストレージ | Ankit Bhatnagar | Data Foundations | GitLab.com 上に OAuth トークンと API キーを暗号化して保存します。トークンは自動更新されます。ソースとの接続を解除すると、その認証情報が削除されます。 | すべてのデプロイタイプと認証情報のローテーションに対応します。 |
| キー管理 | Ankit Bhatnagar | Data Foundations | GitLab.com 上の単一のキー管理サービスと、お客様ごとに 1 つのデータキー | Cloud KMS、AWS KMS、OpenBao、シークレットファイル |
| ランディングゾーン | Ankit Bhatnagar | Data Foundations | 生データを保存時に暗号化します。各レコードに、対応するお客様とソースインスタンスの情報を含めます。 | すべてのソース |
| Silver レイヤー | Ankit Bhatnagar | Data Foundations | 固定スキーマを使用し、GitLab の ID で結合できるようデータを補完します。 | 他の製品が利用できるようにバージョン管理と文書化を行います。アイデンティティのマッピングにも対応します。 |
| レート制限とバックフィル | Ankit Bhatnagar | Data Foundations | ソースの制限に従います。頻繁なバックフィルも許容します。 | 大規模なバックフィルを制限します。 |
| スキーマの変更 | Ankit Bhatnagar | Data Foundations、Orbit | インデックスの全面的な再作成を許容します。 | インデックスの全面的な再作成が不要です。 |
| 削除 | Ankit Bhatnagar | Data Foundations、Orbit | ソースとの接続を解除すると、そのソースのデータがすべて削除されます。 | 同じ |
| エンティティ | Bohdan Parkhomchuk | Orbit | Orbit は自身に必要なエンティティのみを定義します。 | 同じ |

Intelligence Integrations は、19.8 から Integration Factory のコネクターを書き込み契約に移行します。グループのマイルストーンはこの作業に依存しないため、必要な時間をかけて進められます。

## Orbit

| コンポーネント | DRI | チーム | Customer Zero の基準 | GA の基準 |
|-----------|-----|------|-------------------|--------|
| インデックス作成 | Jean-Gabriel Doyon | Orbit | Orbit のコードを変更せずに、Silver のソースデータをインデックス化します。 | 新規ソースもすべて対象とし、データ鮮度の目標を達成します。 |
| クエリ | Jean-Gabriel Doyon | Orbit | 1 回のクエリで GitLab のデータ、インデックス化されたソース、Slack のライブデータを返します。 | パフォーマンス目標を達成します。 |
| 認可 | Jean-Gabriel Doyon | Orbit | ライブクエリではユーザーのトークンを使います。組織全体が読み取れるデータだけをインデックス化します。 | ソースのアクセス権限を Orbit の情報の伏せ字処理に反映します。 |
| 有効化 | Jean-Gabriel Doyon | Orbit | 私たちのグループでのフィーチャーフラグ | 段階的なロールアウト |
| UI | Jean-Gabriel Doyon | Orbit | 結果は Orbit の UI と Duo Chat に表示されます。管理者は API を使ってソースを接続します。 | ソースの接続、監視、接続解除を行える管理者向け UI |

## デプロイと運用 {#deployment-and-operations}

| コンポーネント | DRI | チーム | Customer Zero の基準 | GA の基準 |
|-----------|-----|------|-------------------|--------|
| GitLab.com へのデプロイ | Jean-Gabriel Doyon | Orbit、Data Foundations | CI パイプライン、Helm チャート、Argo CD アプリ | 同じ |
| 運用 | Ankit Bhatnagar | Data Foundations、Orbit | アラート、ランブック、営業時間内のオンコール対応 | SLO と常時オンコール対応 |
| テレメトリー | Ashwin Bilgi | Analytics Instrumentation | グループごとのクエリ数と、そのうちサードパーティデータにアクセスするクエリ数。ライブ読み取りと同期失敗のイベント。 | 同じ |
| コストとキャパシティ | Jean-Gabriel Doyon | Data Foundations、Orbit | ソースごとの概算コスト | コストモデル |

## セキュリティ、法務、アクセス {#security-legal-and-access}

| コンポーネント | DRI | チーム | Customer Zero の基準 | GA の基準 |
|-----------|-----|------|-------------------|--------|
| セキュリティレビューと脅威モデル | Jean-Gabriel Doyon | AppSec | 必須 | 同じ |
| 本番環境準備状況レビュー | Jean-Gabriel Doyon、Ankit Bhatnagar | Orbit、Data Foundations | GitLab.com で必須 | Dedicated と Self-Managed を追加 |
| API の利用規約 | Jean-Gabriel Doyon | Legal | 該当なし | 法務レビューを完了します。ベータに必要です。 |
| Customer Zero のアクセス | Jean-Gabriel Doyon | Orbit | IT と Security が私たちのソースへのアクセスを承認します。 | 該当なし |

## プロダクトとドキュメント {#product-and-docs}

| コンポーネント | DRI | チーム | Customer Zero の基準 | GA の基準 |
|-----------|-----|------|-------------------|--------|
| プロダクトと UX | Jean-Gabriel Doyon | Data Foundations、Orbit | 社内向けの手順書 | ソース接続時の UX と、Support チームが対応するための準備 |
| ドキュメント | Jean-Gabriel Doyon | Technical Writing | 設計、コネクターの契約、オンコール用のランブック | ベータにはユーザー向けドキュメントが必要です。ノードとエッジを送信するための API ドキュメントと、Support 用のランブックも必要です。 |

## GA のみ {#ga-only}

| コンポーネント | DRI | チーム | GA の基準 |
|-----------|-----|------|--------|
| Dedicated、Cells、Self-Managed | Jean-Gabriel Doyon | Distribution、Orbit、Data Foundations | 各デプロイタイプですべての GA 基準を満たします。 |

## 意思決定 {#decisions}

各意思決定には DRI がいて、協議先のチームから意見を聞いたうえで判断を下します。

| 意思決定 | DRI | 協議先 | 期限 |
|----------|-----|-----------|-----|
| 担当と人員配置 | Saurabh Chopra、Angelo Rivera | Data Foundations、Orbit、Data Products | 19.7 |
| 抽出、ランディングゾーン、認証情報の設計 | Jean-Gabriel Doyon | Data Foundations、Orbit、Data Products、Intelligence Integrations、AppSec、Brian Greene | 19.8 |
| コネクターの書き込み契約 | Ankit Bhatnagar | Data Foundations、Intelligence Integrations、Orbit、Brian Greene | 19.8 |
| グラフの契約、インデックス作成、クエリの設計 | Jean-Gabriel Doyon | Data Foundations、Data Products、AppSec | 19.8 |
| Orbit でのソースのアクセス権限 | Jean-Gabriel Doyon | Data Foundations、Intelligence Integrations、AppSec | 19.8 |
| Data Products による Silver へのアクセス | Ankit Bhatnagar | Data Products | 19.9 |
| サードパーティデータを使うアプリケーション | Abhinaba Ghosh | Data Foundations、Analytics Instrumentation | GA 後 |
| エスカレーション | Jean-Gabriel Doyon | Angelo Rivera | 継続 |
