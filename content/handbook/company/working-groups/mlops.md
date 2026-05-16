---
title: "MLOps ワーキンググループ"
description: "GitLab MLOps ワーキンググループの属性、目標、役割と責任についてご覧ください。"
upstream_path: "/handbook/company/working-groups/mlops/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T12:00:00Z"
translator: "claude"
stale: false
lastmod: "2025-06-27T18:21:31+02:00"
---

## 属性

| プロパティ        | 値           |
|-----------------|-----------------|
| 作成日    | 2021-08-04 |
| 目標終了日 | 2022-02-24 |
| Slack           | #wg_mlops（社内からのみアクセス可能） |
| Google Doc      | [MLOPs Working Group Agenda](https://docs.google.com/document/d/18iOB05cFxS5to1eT55GwsENirBfVSjHCQJ2ostoY3cw/edit?usp=sharing)（社内からのみアクセス可能） |
| ボード           | [gitlab-org board](https://gitlab.com/groups/gitlab-org/-/boards/3264088?label_name[]=WorkingGroup%3A%3AMLOps) |
| Issue ラベル     | ~WorkingGroup::MLOps  |

## 目標

このワーキンググループは以下の目標を持ちます:

1. GitLab における MLOps の結果主導型ビジネスバリューストリームの定義を開始し、精緻化します。
1. モデルトレーニングを目的とした GitLab.com 本番データのプロビナンス、ストレージ、アクセスに関するプロセスを正式化します。
1. ハイパーパラメータチューニング、再トレーニング、バージョニング、新しい ML モデルのデプロイのためのベストプラクティスについて知識を共有し、決定します。
1. 精度とパフォーマンスの観点から、さまざまなユースケースに対して異なるフレームワーク/ライブラリで構築されたモデルのベンチマーク方法と、継続的にそれを行う方法のベストプラクティスを決定します。
1. セルフマネージドインスタンスへの機械学習モデルの配布方法を決定します。
1. セキュリティ関連の ML モデルとデータ前処理のためのセキュリティ・法的プロセスを定義します。

## 定義

### MLOps とは何か？

Wikipedia によると、**MLOps** または **ML Ops** は、機械学習モデルを本番環境に信頼性高く効率的にデプロイし維持することを目的とした実践のセットです。

![MLOps ベン図](/images/company/working-groups/mlops.png)

このトピックエリアについては以下のリンクから詳細をご覧ください:

- [MLOps Wikipedia](https://en.wikipedia.org/wiki/MLOps)
- [MLOps: 機械学習における継続的デリバリーと自動化パイプライン](https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning)
- [Machine Learning Operations](https://ml-ops.org/)
- [MLOps Slack Group](https://mlops.community/)

### 関連する GitLab ドキュメント

- MLOps シングルエンジニアグループ
- MLOps プライマー
- [MLOps 探求](https://gitlab.com/groups/gitlab-org/incubation-engineering/mlops/-/epics/1)
- プロダクトステージ方向性 - ModelOps
- ドラフトグループ方向性 - MLOps
- [グループ方向性 - AI Model Validation](https://about.gitlab.com/direction/ai-powered/ai_model_validation/)
- AI Model Validation グループ

### 関連する GitLab プロジェクト

- [Spamcheck](https://gitlab.com/gitlab-org/spamcheck)
  - [アーキテクチャ図](https://gitlab.com/gitlab-org/spamcheck#architecture-diagram)
- [Tanuki-Stan](https://gitlab.com/gitlab-org/ml-ops/tanuki-stan)
- UnReview
  - アーキテクチャ図

### 関連する ML Slack チャンネル

- #g_applied_ml
- #g_machine-learning
- #feed_tanuki-stan
- #security-ml

## 終了基準 {#exit-criteria}

このワーキンググループのチャーターは、GitLab で ML プロダクトを構築するさまざまなチーム間のギャップを、重複するアーキテクチャ上の懸念を議論することで橋渡しすることです:

1. ワーキンググループが運営するミッションステートメントの作成とハンドブックへの追加。
1. 外部の ML ツールの深い分析と、GitLab チームが ML 関連プロジェクトを開始する際に参照し容易に拡張できる理想的なパスを使用した概念実証フレームワークを議論するハンドブックページの作成。
1. データアクセスとストレージ、データ前処理などの類似タスクのために、チーム間で共有し使用できるヘルパー/ライブラリ（おそらく Python）の作成。

## 成果

1. このワーキンググループは、GitLab 製品内および日常業務において機械学習を活用するさまざまな方法に取り組んでいるチームを一堂に集めました。これらのチームに対して、ミッションを議論し、現在進めているプロジェクトや近い将来に達成しようとしていることについて知識を共有する機会を提供しました。
1. 私たちは、より形式的でない構造で、さまざまなチームが行った作業のアイデアの共有とショーケースに焦点を当て、会社全体での認知向上を目的とした月次 MLOps ミートアップの設立に向けて前進します。

## 役割と責任

| ワーキンググループの役割    | 担当者                | 役職                                           |
|-----------------------|-----------------------|-------------------------------------------------|
| ファシリテーター           | Alex Groleau          | Security Automation Manager |
| ファンクショナルリード                | Roger Ostrander       | Senior Security Engineer, Trust & Safety        |
| ファンクショナルリード                | Alexander Chueshev         | Senior Backend Engineer, AI Framework |
| ファンクショナルリード                | Taylor McCaslin         | Group Manager, Product - Data Science |
| ファンクショナルリード                | David DeSanto           | Senior Director, Product Management - Dev & Sec |
| ファンクショナルリード                | Ethan Urie            | Senior Backend Engineer, Security Automation    |
| ファンクショナルリード                | Jayson Salazar        | Senior Security Engineer, Security Automation   |
| ファンクショナルリード                | Juliet Wanjohi        | Security Engineer, Security Automation          |
| ファンクショナルリード                | Eduardo Bonet         | Staff Full Stack Engineer - MLOps, SEG |
| ファンクショナルリード                | Monmayuri Ray         | Engineering Manager, AI Model Validation |
| ファンクショナルリード                | Shawn Sichak         | Senior Security Engineer, Trust and Safety |
| メンバー                | Alexander Dietrich    | Senior Security Engineer, Security Automation   |
| メンバー                | Charl De Wit            | Security Manager, Trust & Safety |
| メンバー                | Wayne Haber         | Engineering director |
| メンバー                | Bartek Marnane         | VP, Incubation Engineering |
| メンバー                | Marshall Cottrell      | Strategy and Operations (Technical) Staff |
| メンバー                | Kelly Chen             | Analytics Manager at Finance |
| メンバー                | Jay Stemmer            | Manager, Analytics & Insights |
