---
title: 'US Government Coverage'
description: 'US Government Coverage に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/gitlab/usgov-coverage/
upstream_sha: 18de125bd3131a62f0a7026bc69c7de124fc6c8a
lastmod: "2026-06-16T10:27:02-05:00"
translated_at: "2026-06-20T13:54:37Z"
translator: codex
stale: false
---

このガイドでは、US Government Coverage とは何か、どのように機能するかを説明します。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクト: [US Government Coverage](https://gitlab.com/gitlab-support-readiness/usgov-coverage)
- Pages: [https://usgov-coverage-0aa7ea.gitlab.io/](https://usgov-coverage-0aa7ea.gitlab.io/)

{{% /alert %}}

## これは何か

US Government Coverage は、US Government Support チームのカバレッジ情報を表示する GitLab Pages を生成するプロジェクトです。

## どのように生成されるか

4 時間ごとにパイプラインスケジュールで `bin/generate_pages` スクリプトが実行され、以下を行います。

- [Support Team プロジェクト](https://gitlab.com/gitlab-support-readiness/support-team)経由で Support チーム情報を読み取る
- Support チーム情報から US Government 以外のサポートエンジニアをすべて削除する
- シフト（1st、2nd、3rd）ごとの人数リストを保存する変数を作成する
- 今後 365 日分の Google カレンダーイベントを取得する
- イベントを分析する（後で解析するために変数へ分離する）
- イベントオブジェクトを生成する（[FullCalendar JS ライブラリ](https://fullcalendar.io/)で動作するもの）
- テンプレート化された HTML ファイルと JS ファイルを更新する

最終的な結果は `public` フォルダー内の変更済みファイルであり、その後 GitLab Pages 経由でデプロイされます。

## よくある問題とトラブルシューティング

これは必要に応じて項目が追加される、生きたセクションです。
