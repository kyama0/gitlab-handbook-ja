---
title: "GitLab.com SaaS データパイプライン"
description: "GitLab.com SaaS データパイプライン ワーキンググループ"
status: active
upstream_path: "/handbook/company/working-groups/gitlab-com-saas-data-pipeline/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T00:00:00Z"
translator: claude
stale: false
---

## 属性

| プロパティ        | 値                                                                                                                                             |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| 作成日    | 2022-09-30                                                                                                                                       |
| 目標終了日 | 2023-10-01                                                                                                                                        |
| Slack           | `#wg_gitlab_to_snowflake_pipeline`（社内からのみアクセス可能）                                         |
| Google Doc      | [ワーキンググループアジェンダ](https://docs.google.com/document/d/1plhr7UkyxVoIAP_RHJ6HU3QprQlFxIwTZg9wOlMAr4w/edit?usp=sharing)（社内からのみアクセス可能） |
| Issue ボード     | Issue ボード                                                |

## ビジネス目標

MR レートとパフォーマンス KPI（製品開発）、Gainsight 向け製品利用状況、ライセンス利用率（カスタマーサクセス）、製品ヘルスダッシュボード（ヘルス）、拡張・解約傾向モデル、予測、テリトリー管理（セールス）などのレポートおよびアナリティクスのユースケースに向けて、信頼性が高く、安定していて、スケーラブルかつ安全なデータフィードを提供します。

## 技術目標

PostgreSQL データベース上の `create`、`update`、`delete` 操作をキャプチャし、それらを GitLab データプラットフォームに保存して、さらなる処理とアナリティクスに活用できるデータパイプラインを実装します。

![ハイレベルデザイン](/images/company/working-groups/HLD.png)

## 終了基準 {#exit-criteria}

- **信頼性**: PostgreSQL データベース上のすべての「メタデータ」および関連する記述データ（`create`、`update`、`delete`）操作が、元のイベントから 6 時間以内にキャプチャ、転送され、データプラットフォームに読み込まれること。`部分的に達成`
  - バックグラウンドマイグレーションは `updated_at` カラムが更新されないため、キャプチャされません。
- **安定性**: エンドツーエンドのソリューションが 30 日間、中断なし、人手による介入なしで動作すること。`達成`
- **スケーラビリティ**: GitLab.com と連動してスケールし、新しい GitLab.com データベース、シャード、ゾーン、テナント、またはクラウドロケーションが展開される際に過度な負荷をかけずに拡張できること。`部分的に達成`
  - 既存のアーキテクチャではこれが不可能であるため、部分的な達成となっています。アーキテクチャの変更に伴い、要件として含まれています。
- **セキュリティ**: レッドデータは読み込まれないか、データのサブプロセッサーではないシステムに保存する場合はハッシュ化されること。`達成`
- すべてのビジネスパートナーとの間で定義・合意された SLO。`達成`
- エンドツーエンドの完全な監視。`達成`

## 役割と責任

| ワーキンググループの役割              | 担当者                  |  肩書き                              |
|---------------------------------|------------------------ | ----------------------------------- |
| エグゼクティブステークホルダー           | David Sakamoto | VP, Customer Success |
| ワーキンググループ DRI / ファシリテーター | Dennis van Rooijen      | Senior Manager Data                 |
| 機能リード（データ）            | Ved Prakash             | Staff Data Engineer                 |
| 機能リード（インフラ）           |                         |                                     |
| メンバー                          | t.b.d.                  | Senior Data Engineer Big Data       |
| メンバー                          | Justin Wong             | Data Engineer                       |
| メンバー（インフラ）                  | Gerardo Lopez-Fernandez | Engineering Fellow, Infrastructure  |
| メンバー（データベース信頼性）   | Alexandar Sosna         | Senior Database Reliability Engineer|
| メンバー（プロダクト）                |                         |                                     |
| メンバー（セキュリティ）               | Kyle Smith              | Sr. Security Risk Engineer          |
| メンバー（開発）            | Nick Nguyen             | Senior EM, Enablement: Data Stores  |
