---
title: 'US Government Coverage'
description: 'US Government Coverage に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/gitlab/usgov-coverage/
upstream_sha: aadd07ec986f77b5bd259fb54f0f41d1f3397544
lastmod: 2026-06-16T10:27:02-05:00
translated_at: "2026-06-18T05:33:51Z"
translator: claude
stale: false
---

このガイドでは、US Government Coverage とは何か、どのように動作するかを説明します。

{{% alert title="Technical Details" color="primary" %}}

- デプロイ種別: `Ad-hoc`
- プロジェクト: [US Government Coverage](https://gitlab.com/gitlab-support-readiness/usgov-coverage)
- Pages: [https://usgov-coverage-0aa7ea.gitlab.io/](https://usgov-coverage-0aa7ea.gitlab.io/)

{{% /alert %}}

## 概要

US Government Coverage は、US Government Support チーム向けのカバレッジ情報を表示する GitLab Pages を生成するプロジェクトです。

## 生成方法

パイプラインスケジュールにより 4 時間ごとに `bin/generate_pages` スクリプトが実行され、次の処理を行います。

- [Support Team プロジェクト](https://gitlab.com/gitlab-support-readiness/support-team)経由で Support チームの情報を読み込む
- Support チームの情報から US Government 以外の support engineer をすべて除外する
- シフト（1st、2nd、3rd）ごとの担当者リストを保持する変数を作成する
- 今後 365 日分の Google カレンダーのイベントを取得する
- イベントを分析する（後でパースするために変数に振り分ける）
- イベントオブジェクトを生成する（[FullCalendar JS ライブラリ](https://fullcalendar.io/)で動作するもの）
- テンプレート化された HTML および JS ファイルを更新する

最終的な成果物は `public` フォルダー内の更新済みファイルであり、これが GitLab Pages 経由でデプロイされます。

## よくある問題とトラブルシューティング

このセクションは継続的に更新され、必要に応じて項目が追加されます。
