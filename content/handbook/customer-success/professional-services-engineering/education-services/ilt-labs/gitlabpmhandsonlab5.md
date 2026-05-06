---
title: "GitLab アジャイルポートフォリオ管理 - ハンズオンラボ: レポートとポートフォリオ管理"
description: "このハンズオンガイドでは、GitLab でダッシュボードを作成・管理する方法を学習します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabpmhandsonlab5/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

> 完了までの推定時間: 20分

## 目標

GitLab は、インスタンス、グループ、プロジェクトに対してさまざまなアナリティクスインサイトを提供します。このラボでは、システムで使用できるさまざまなダッシュボードと、独自のインサイトを作成する方法を確認します。

## タスク A. ビルトインダッシュボードへのアクセス

GitLab はプロジェクトレベルとグループレベルの両方でいくつかのビルトインダッシュボードを提供しています。いくつか確認してみましょう。

1. プロジェクトリポジトリに移動します。

1. 左サイドバーで **Analyze** をクリックします。

1. 利用可能なダッシュボードオプションを確認します:
   - Value Stream Analytics - 開発ライフサイクルを通じたコード変更の所要時間を表示
   - CI/CD Analytics - パイプラインとジョブに焦点を当てる
   - Repository Analytics - コミットやマージなどのリポジトリアクティビティへのインサイトを提供
   - Insights - プロジェクトまたはグループ内でカスタムダッシュボードを作成可能

  これらは利用可能なアナリティクスの一部にすぎません。GitLab が提供するすべてのアナリティクスの詳細については、[GitLab 使用状況の分析ページ](https://docs.gitlab.com/user/analytics/)を参照してください。

ダッシュボードの見た目と機能についてある程度理解できたので、プロジェクトのダッシュボードを作成しましょう。カスタムダッシュボードを作成するには、独自の `.gitlab/insights.yml` ファイルを作成してコンテンツを定義し、この設定を保存する必要があります。

## タスク B. インサイトファイルの作成

1. リポジトリで **+** ボタンをクリックし、**New directory** をクリックします。

1. ディレクトリに _.gitlab_ という名前を付け、メインブランチにコミットします。

1. _.gitlab_ ディレクトリ内で **+** ボタンをクリックし、**New file** をクリックします。

1. ファイルに **insights.yml** というタイトルを付けます。

1. 以下の内容をファイルにコピーします:

    ```yaml
    bugsCharts:
      title: "Insights for Awesome App"
      charts:
        - title: "Team Progress"
          description: "Tracking how many issues are being worked on by the development team over a month"
          type: bar
          query:
            data_source: issuables
            params:
              issuable_type: issue
              issuable_state: opened
              filter_labels:
                - Dev
              group_by: month
              period_limit: 30
    ```

    このインサイトにより、1ヶ月間にわたるチームの作業量を追跡できます。

1. この変更をコミットします。

1. **Analyze > Insights** タブで結果のインサイトを確認します。ダッシュボードが正しく表示されない場合は、少し待ってから更新してください。

## ラボガイド完了

このラボの演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabpmhandson)を確認できます。

## ご提案はありますか?

ラボへの変更を希望する場合は、マージリクエストで変更を送信してください。
