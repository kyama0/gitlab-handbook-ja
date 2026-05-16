---
title: コンテナレジストリメタデータデータベース セルフマネージド
description: >-
  セルフマネージドユーザーへのコンテナレジストリメタデータデータベースのロールアウトに関するプロジェクト計画。
upstream_path: /handbook/engineering/devops/project-plans/container-registry-v2/
upstream_sha: bb4e4d0fc1a355c00a1d82b1528ff729c83af189
translated_at: "2026-04-28T13:03:31Z"
translator: claude
stale: false
lastmod: "2025-12-05T19:47:34+00:00"
---

## 週次プロジェクト計画

Epic: [https://gitlab.com/groups/gitlab-org/-/epics/5521](https://gitlab.com/groups/gitlab-org/-/epics/5521)

### マイルストーン 16.3（2023年6月18日〜7月17日）

#### 目標

- メタデータデータベースの手動インストール手順を作成する
- プロジェクトを実験的フェーズとベータフェーズに分割する方法を計画する議論
- マイルストーン計画: [https://gitlab.com/gitlab-org/gitlab/-/issues/416110#container-registry](https://gitlab.com/gitlab-org/gitlab/-/issues/416110#container-registry)

#### 8月14日〜18日の週

- 完了:
  - 機能ベースのロールアウトアプローチのために構造化された新しいテーブルを含む[アーキテクチャブループリント](https://docs.gitlab.com/ee/architecture/blueprints/container_registry_metadata_database_self_managed_rollout/)を更新: [https://gitlab.com/gitlab-org/gitlab/-/merge_requests/128824](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/128824)
  - 新規インストールの Helm と Omnibus を使用したデータベースインストールの POC を完了。両方のインストールパスのデモ動画が [Issue](https://gitlab.com/gitlab-org/container-registry/-/issues/1065) に投稿されています。
  - Headway オートメーションを実装。`~headway-self-managed-registry-db label` でマークされたすべての Issue と MR が [epic](https://gitlab.com/groups/gitlab-org/-/epics/5521) のテーブルに追加されます。
  - プロダクトチームが他のベータプログラムでユーザーとのコミュニケーションがどのように構成されているかを、登録とフィードバック用の個別の Issue を通じて調査中。これはサポートの担当者を通じてお問い合わせいただいたユーザー向けのコミュニケーションチャネルも提供します。

### マイルストーン 16.4（2023年8月18日〜9月17日）

#### 目標

- 手動データベースインストールのウォークスルーとデモを継続して開発する [https://gitlab.com/gitlab-org/container-registry/-/issues/1068](https://gitlab.com/gitlab-org/container-registry/-/issues/1068)
- Omnibus と Helm Charts を通じたデータベースのインストールオプションを評価する [https://gitlab.com/gitlab-org/container-registry/-/issues/1102](https://gitlab.com/gitlab-org/container-registry/-/issues/1102)
- このプロジェクトの週次予測はこのマイルストーンの過程で決定されます。このプロジェクトは始まったばかりであり、当初は調査結果とユーザーフィードバックに対して反応的に対応します。

#### 8月21日〜26日の週

- 計画:
  - 先週議論した機能ベースのロールアウトアプローチのために機能とドラフト変更を定義する。この機能のマトリックスは[アーキテクチャブループリント](https://docs.gitlab.com/ee/architecture/blueprints/container_registry_metadata_database_self_managed_rollout/)に記載されます。
  - 今週ベータプログラムを正式に開始する。
  - 異なるタイプのストレージバックエンドとレジストリサイズを使用してデータ移行戦略の[テスト](https://gitlab.com/gitlab-org/container-registry/-/issues/1099)を続ける。
  - 先週の POC で完了した発見に続いて、Omnibus と Helm Chart のインストール作業を開始する。
  - Omnibus インストールでメタデータデータベースを有効化・設定する実験 [https://gitlab.com/gitlab-org/container-registry/-/issues/1071](https://gitlab.com/gitlab-org/container-registry/-/issues/1071)
- 完了:
  - ベータプログラムに関する情報をドキュメントに追加（[MR 進行中](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/130123)）。ベータ以降の進捗のためのイテレーションとして使用される機能リストを含む。
  - 再設定後に Omnibus でコンテナレジストリのデータベース設定を保持する [https://gitlab.com/gitlab-org/container-registry/-/issues/1071](https://gitlab.com/gitlab-org/container-registry/-/issues/1071)

#### 8月28日〜9月1日の週

- 計画:
  - Issue でユーザーとやり取りするための Issue を作成する。今週ベータプログラムの最初のユーザーを特定する。
  - Omnibus でコンテナレジストリデータベースをプロビジョニングするための議論と調査 [https://gitlab.com/gitlab-org/container-registry/-/issues/1102](https://gitlab.com/gitlab-org/container-registry/-/issues/1102)
  - スケーラビリティのためにさまざまなサイズのレジストリでテストする。
  - ユーザーとのやり取りに備えてサポートの担当者と調整する。
- 完了:
  - [ベータプログラムへの関心](https://gitlab.com/gitlab-org/gitlab/-/issues/379240)と[フィードバック](https://gitlab.com/gitlab-org/gitlab/-/issues/423459)に関するユーザーとのコミュニケーション用 Issue を作成。ベータプログラムの最初のユーザー候補との議論が進行中。
  - テストを通じて、データベース設定の保持に問題が発見されました。ベータユーザーがインストールを開始できるようになる前に 16.4 で修正する必要があります。

#### 9月4日〜8日の週

- 計画:
  - データベース設定を保持するための Omnibus の [MR](https://gitlab.com/gitlab-org/omnibus-gitlab/-/merge_requests/7100) をレビュー・マージする。
  - 移行プロセスのウォークスルーデモを作成する（[Issue](https://gitlab.com/gitlab-org/container-registry/-/issues/1068)）
  - テストをより簡単にするために[コンテナレジストリシーダー](https://gitlab.com/gitlab-org/ci-cd/package-stage/container-registry-seeder)プロジェクトに追加する。
- 完了:
  - Omnibus の [MR](https://gitlab.com/gitlab-org/omnibus-gitlab/-/merge_requests/7100) をマージしてテストした。
  - インポートプロセスの [YouTube 動画](https://www.youtube.com/watch?v=aZdyYrKdtxk)を録画した。
  - GCP で 100GB モデルの移行をテストした。（[Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/424479)）

#### 9月11日〜15日の週

- 計画:
  - データ整合性のためにロックファイルを使用することを調査する（[Issue](https://gitlab.com/gitlab-org/container-registry/-/issues/918)）。データベース管理オブジェクトに対する非データベースのレジストリ変更（オフラインガベージコレクションなど）を防ぐ。
  - AWS と 500GB モデルでさらなるテストを行う。
- 完了:
  - メタデータデータベースのデータ整合性を保護するためのロックファイルの技術設計を進展させた。

### マイルストーン 16.5（2023年9月17日〜10月10日）

#### 目標

- コンテナレジストリのベータプログラムを開始し、ドキュメントと移行に関する顧客フィードバックを収集し始める。
- Omnibus インストール向けにコンテナレジストリデータベースをプロビジョニングする（[Issue](https://gitlab.com/gitlab-org/container-registry/-/issues/1074)）
- セルフマネージドインストールでの新しいデータベースの使用を識別するためにサービス ping に観測可能性メトリクスを追加する。
- さまざまなサイズとストレージバックエンドのテストレジストリでオフライン移行の実行時間をテストする

#### 9月18日〜22日の週

- 計画:
  - 16.4 リリースにより、データベース設定の保持に関する修正がセルフマネージドで利用可能になり、ユーザーがベータプログラムのテストを開始できるようになります。
  - 詳細なプロジェクト配信目標を定義する
- 完了:
  - Geo サイト間でのデータ移行とレジストリ変更の実現可能性について [Geo と議論](https://gitlab.com/gitlab-org/gitlab/-/issues/247139#note_1566115665)した。
  - [ロックファイル](https://gitlab.com/gitlab-org/container-registry/-/issues/918#note_1565820128)の初期作業
  - コンテナレジストリプロジェクト向けのサービス ping への観測可能性メトリクスを追加した。

#### 9月25日〜29日の週

- 計画:
  - ベータユーザーと関わり、最初のインストールからフィードバックを収集する。
  - Geo サポートに関する議論のフォローアップ
  - ロックファイルの実装を続ける
- 完了:
  - Omnibus の gitlab-ctl にデータベースサブコマンドを追加する進捗 [https://gitlab.com/gitlab-org/container-registry/-/issues/1102](https://gitlab.com/gitlab-org/container-registry/-/issues/1102)
  - Omnibus ユーザーが生成されたレジストリ設定を直接編集しないようにクイックスタートガイドを更新した。
  - 観測可能性メトリクスの Rails 実装を完了した。

#### 10月2日〜6日の週

- 計画:
  - サービス ping メトリクスのダッシュボードを作成してデータをレビューする。
  - オフライン GC の無効化のみにロックファイルを縮小する。
  - Omnibus の gitlab-ctl サブコマンドを続ける。
- 完了:
  - Omnibus の gitlab-ctl サブコマンドの進捗を継続した。
  - 観測可能性メトリクスの作業を完了し、DB 使用量を追跡するダッシュボードを作成した。

#### 10月9日〜13日の週

- 計画:
  - ベータフィードバックの最初のフェーズへの対応に関する Issue を洗練する
  - Geo を使用した環境でのデータ移行テスト方法を調査する
- 完了:
  - ユーザーがインポートで問題を抱えていたレイヤーメディアタイプのサポートを追加した（[Issue](https://gitlab.com/gitlab-org/container-registry/-/issues/1137)）
  - データベースが使用中の場合にオフライン GC が実行されないようにした（[Issue](https://gitlab.com/gitlab-org/container-registry/-/merge_requests/1459)）

### マイルストーン 16.6（2023年10月17日〜11月10日）

#### 目標

- ベータユーザーの最初のフェーズからのフィードバックに関連する Issue を実装する
- [Omnibus の gitlab-ctl にレジストリ移行サブコマンドを追加する](https://gitlab.com/gitlab-org/container-registry/-/issues/1108)
- Omnibus 向けのインポートガイドを作成する

#### 10月16日〜20日の週

- 計画:
  - 16.5 向けのコンテナレジストリリリースを準備する。
  - 不明なレイヤーメディアタイプのエラーに関するユーザーフィードバックに対応する。
- 完了:
  - テスト環境でレジストリデータベースの移行コマンドを Omnibus に追加する作業が動作している
  - 大規模レジストリの移行に関する追加テスト

#### 10月23日〜27日の週

- 計画:
  - OSS と Swift ストレージドライバーを非推奨にする: [Issue](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/134819)
  - 失敗する代わりに不明なレイヤーブロブをジェネリックメディアタイプとして保存する: [Issue](https://gitlab.com/gitlab-org/container-registry/-/issues/1140)
  - 移行後のタスク実行時にプライマリデータベースノードをターゲットにする機能を追加する [Issue](https://gitlab.com/gitlab-org/container-registry/-/issues/1006)
- 完了:
  - API との同等性において不明なメディアタイプをジェネリックとしてインポートする: [Issue](https://gitlab.com/gitlab-org/container-registry/-/merge_requests/1488)
  - OSS と Swift が非推奨になった [Issue](https://gitlab.com/gitlab-org/container-registry/-/merge_requests/1491)
  - Omnibus のレジストリデータベース移行サブコマンドが Distribution とのレビューで進行中 [MR](https://gitlab.com/gitlab-org/omnibus-gitlab/-/merge_requests/7140)
  - パフォーマンステストの現在のスコープを完了した

#### 10月30日〜11月3日の週（Q3は10月31日終了）

- 計画:
  - ベータ Issue でユーザーとのやり取りをいくつか対応する。
  - Omnibus レジストリデータベース移行コマンド MR の進捗を続ける。
- 完了:
  - レジストリデータベース向けの gitlab-ctl コマンドを追加する MR の進捗 [MR](https://gitlab.com/gitlab-org/omnibus-gitlab/-/merge_requests/7140)

#### 11月6日〜10日の週

- 計画:
  - セルフマネージドインポートの検証についての調査 [epic](https://gitlab.com/groups/gitlab-org/-/epics/11973)
  - Omnibus レジストリデータベース移行コマンド MR の進捗を続ける
- 完了:
  - Omnibus レジストリデータベース移行コマンド MR がレビュー中

#### 11月13日〜17日の週

- 計画:
  - ベータユーザーの最初のフェーズからのフィードバックに関連する Issue をリリースする。
  - インポートコマンドと移行コマンドを含む [Omnibus インストール向けのガイド](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/8255)を作成する。
  - コンテナレジストリデータベースの提供を発表するブログ投稿を開始した。
  - .com 専用機能（現在フィーチャーフラグの背後にある）をセルフマネージドに移行する計画を策定中。
- 完了:
  - インポーターの進捗バーとより良いログプレゼンテーションの追加を評価する。
  - 大規模レジストリでインポーターを実行しているユーザーと顧客と関わる。
  - GitLab Rails の .com 向けに存在するフィーチャーフラグが付いたコンテナレジストリエンドポイントの[リスト](https://docs.google.com/spreadsheets/d/1xlYrk33zEH9mazq3px5ex8E4AnwzHa9Z5D6mxsIaORw/edit?usp=sharing)を作成した。

### マイルストーン 16.7（2023年11月13日〜12月21日）

#### 目標

- 16.6 リリースの改善後にベータユーザーと関わり、セルフマネージドインストールからフィードバックを収集する。
- インポートされた画像の検証コマンドを作成する [Issue](https://gitlab.com/gitlab-org/container-registry/-/issues/1159)

#### 11月20日〜24日の週

- 計画:
  - Omnibus レジストリデータベース移行コマンドの MR を完成させる。
- 完了:
  - 大規模なリポジトリでインポーターを実行しているユーザーと顧客と関わる。フィードバックへの対応。

#### 11月27日〜12月1日の週

- 計画:
  - インポーターの進捗バーと UX の改善を完成させる。
  - インポートプロセスをテストしているベータ顧客とのコミュニケーションを続ける。
- 完了:
  - 使用状況 ping メトリクスの拡張に関する[議論](https://gitlab.com/gitlab-org/gitlab/-/issues/431701)。
  - インポーターの進捗バーのドラフトがレビューのために準備できた。

#### 12月4日〜8日の週

- 計画:
  - インポート後の画像検証オプションを評価する。
  - インポートコマンドを追加する Omnibus MR のフィードバックに対応する。
- 完了:
  - ブログ投稿[GitLab の次世代コンテナレジストリが利用可能になりました](https://about.gitlab.com/blog/2023/12/04/gitlabs-next-generation-container-registry-is-now-available/)が公開された
  - Omnibus の[インポートコマンド](https://gitlab.com/gitlab-org/omnibus-gitlab/-/merge_requests/7265)が完成してマージされた。
  - /offline/ ガベージコレクション完了時にベータ Issue へのリンクを含むコメントを追加した。
  - 進捗バーが完了した。

#### 12月11日〜15日の週

- 計画:
  - メタデータデータベースを持つユーザーに今すぐ利用可能な、セルフマネージド向けの新機能を追加/テストするための[計画](https://gitlab.com/groups/gitlab-org/-/epics/12218)を作成する。
  - インポート後のコンテナイメージ検証の調査を続ける。
- 完了:
  - インポート後の画像検証ツールを評価する。（[Issue](https://gitlab.com/gitlab-org/container-registry/-/issues/1159)）

### マイルストーン 16.8（2023年12月22日〜2024年1月18日）

#### 目標

- ベータユーザーの第2フェーズからのフィードバックに関連する Issue を実装する
- [セルフマネージドインポートを検証する](https://gitlab.com/gitlab-org/container-registry/-/issues/938)
- チャート向けにオフラインガベージコレクションに既に存在するものと同等の gitlab-ctl などのレジストリデータベースコマンド向けユーティリティサポート

#### 12月18日〜22日の週

- 計画:
  - 年末年始休暇中にデータ移行を行う主要なレジストリユーザーと協力している。コンテナレジストリチームのほとんどは今週は不在です。

#### 12月25日〜29日の週

- 計画:
  - 主要なレジストリユーザーのレジストリデータベースのセットアップと移行の支援を続ける。コンテナレジストリチームのほとんどは今週は不在です。
- 完了:
  - このユーザーの移行が大成功でした！フォローアップの Issue は次のマイルストーンで対応します。

#### 1月1日〜5日の週

- 計画:
  - 休暇後のキャッチアップとベータユーザーとの継続的な関わり。
- 完了:
  - 顧客の移行の成功と懸念事項をレビューし、フォローアップの Issue を策定した。

#### 1月8日〜12日の週

- 計画:
  - ベータユーザーの第2フェーズからのフィードバックに関連する Issue をリリースする。
  - 次のステップ計画と可視性向上のためのコミュニケーションキャンペーンを策定する。
- 完了:
  - プロジェクト計画と配信ターゲットを再整理した [Issue](https://gitlab.com/groups/gitlab-org/-/epics/5521#project-phases)。

### マイルストーン 16.9（2024年1月13日〜2月15日）

#### 目標

- チャート向けのインポートガイドを作成する
- テスト: [コンテナレジストリが Geo のサポートを失わないことを確認する](https://gitlab.com/gitlab-org/gitlab/-/issues/247139)

#### 1月22日〜26日の週

- 計画:
  - Geo サポートのテストを開始する
  - 手動チャート移行のテストとドキュメントを続ける
- 完了:
  - チャートのドキュメント進捗 [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/436406)
  - Omnibus ドキュメント[ドキュメント](https://docs.gitlab.com/ee/administration/packages/container_registry_metadata_database.html)をマージした

#### 1月29日〜2月2日の週

- 計画:
  - Geo サポートのテストを続ける
  - チャート移行ドキュメントを続ける

### マイルストーン 16.10（2024年2月16日〜3月21日）

#### 目標

- チャートでのアップグレード時に DB マイグレーションを自動適用する。（ブロック中）
- [インポーター: 一時的なエラー時にステップ全体をリトライする](https://gitlab.com/gitlab-org/container-registry/-/issues/72)
- [インポーター: ErrDigestUnsupported を通過させる](https://gitlab.com/gitlab-org/container-registry/-/issues/977)
- [インポーター: Blob 記述子キャッシュを無効化する](https://gitlab.com/gitlab-org/container-registry/-/issues/970)
- [インポーター: クリーンデータベースオプションを再考する](https://gitlab.com/gitlab-org/container-registry/-/issues/943)
