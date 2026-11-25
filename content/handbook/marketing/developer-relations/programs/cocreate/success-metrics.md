---
title: "Co-Create プログラムの成功指標"
description: "Co-Create プログラムの KPI と OKR の更新手順"
upstream_path: /handbook/marketing/developer-relations/programs/cocreate/success-metrics/
upstream_sha: "c376e869c4e8737e946fb52ff739963c44730e6d"
translated_at: "2026-11-26T08:06:15+09:00"
translator: claude
stale: false
lastmod: "2026-11-25T19:45:06Z"
---

## 概要

このページでは、Co-Create プログラムの成果を測定するための KPI と、その更新方法を紹介します。

## KPI

Co-Create の KPI は [FY27 - 想像力の速さで共創する](https://gitlab.com/groups/gitlab-org/developer-relations/contributor-success/-/work_items/44)の下で追跡します。

1. [顧客アカウントの成長 - 拡大案件のパイプライン](https://gitlab.com/groups/gitlab-org/developer-relations/contributor-success/-/work_items/35)
1. [製品の成長 - 価値のあるコントリビューション](https://gitlab.com/groups/gitlab-org/developer-relations/contributor-success/-/work_items/36)

## OKR 更新プロセス {#okr-update-process}

Co-Create プログラムでは、四半期ごとの OKR を追跡し、定期的に更新します。この手順に従えば、プログラムに詳しくない PM でもレポートを作成できます。

### データの保存場所

OKR のデータは [Co-Create 指標スプレッドシート](https://docs.google.com/spreadsheets/d/1JqhcR2PSpKG3lQRU3Y8llo0K71aWWTrJNFjsjzGQiM4/edit?gid=1447987221#gid=1447987221)に保存し、自動パイプラインで更新します。

### 更新パイプラインの実行

1. [DevRel Engineering Toolbox のパイプラインページ](https://gitlab.com/gitlab-org/developer-relations/contributor-success/toolbox/-/pipelines/new)に移動します
1. "Run pipeline" をクリックします
1. 以下の変数を追加します
   - `CO_CREATE_TRACKER = 1`
   - `PERIOD_START_DATE = YYYY-MM-DD`（四半期の初日）
   - `PERIOD_END_DATE = YYYY-MM-DD`（今週の末日または四半期の末日）
   - `DRY_RUN = 0`
   - `CI_PIPELINE_SOURCE = schedule`
   - `CO_CREATE_REPORT_SHEET_ID = 1JqhcR2PSpKG3lQRU3Y8llo0K71aWWTrJNFjsjzGQiM4`
1. "Run pipeline" をクリックし、完了するまで待ちます（通常は数分）
1. "job succeeded" または "job failed" と表示されるまでステータスを確認します

### パイプラインが失敗した場合の対応

1. パイプラインの "Jobs" タブを開きます
1. 失敗したジョブを開いてエラーの詳細を確認します
1. 問題に対処してパイプラインを再実行します

### 結果の利用

1. [Co-Create の結果ファイル](https://docs.google.com/spreadsheets/d/1JqhcR2PSpKG3lQRU3Y8llo0K71aWWTrJNFjsjzGQiM4)を開くか、再読み込みします
1. "Calculator" タブに移動します
1. Source sheet フィールドにパイプラインで使用した日付（シート名に対応）を入力します
1. 計算結果を使って以下を更新します
   - 四半期 OKR の進捗
   - 週の終わりにまとめる報告

### 更新頻度

四半期中は毎週、または報告に必要なときに、このパイプラインを実行してください。自動スケジュールは実装待ちのため、現在は手動で実行する必要があります。
