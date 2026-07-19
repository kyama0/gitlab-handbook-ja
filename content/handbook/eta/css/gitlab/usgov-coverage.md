---
title: 'US Government Coverage'
description: 'US Government Coverage のドキュメント'
upstream_path: "/handbook/eta/css/gitlab/usgov-coverage/"
upstream_sha: "1c5f183add4a3220f2aa77e0c98565c4fad645e2"
translated_at: "2026-07-18T06:43:41+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

このガイドでは、US Government Coverage の概要と仕組みを説明します。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクト: [US Government Coverage](https://gitlab.com/gitlab-support-readiness/usgov-coverage)
- Pages: [https://usgov-coverage-0aa7ea.gitlab.io/](https://usgov-coverage-0aa7ea.gitlab.io/)

{{% /alert %}}

## 概要

US Government Coverage は、US Government Support チームの対応情報を表示する GitLab Pages を生成するプロジェクトです。

## 生成方法

4 時間ごとにパイプラインスケジュールを通じて `bin/generate_pages` スクリプトが実行され、次を行います。

- [Support Team プロジェクト](https://gitlab.com/gitlab-support-readiness/support-team)から Support チーム情報を読み取る
- Support チーム情報から、US Government 以外のすべてのサポートエンジニアを削除する
- シフトごとのメンバー一覧を保持する変数を作成する（第 1、第 2、第 3 シフト）
- 今後 365 日間の Google カレンダーイベントを取得する
- イベントを分析する（後の解析のために変数へ分割）
- [FullCalendar JS ライブラリ](https://fullcalendar.io/)で動作するイベントオブジェクトを生成する
- テンプレート化された HTML と JS ファイルを更新する

最終的に、`public` フォルダー内のファイルが変更され、それが GitLab Pages を通じてデプロイされます。

## よくある問題とトラブルシューティング

これは必要に応じて項目を追加する、生きたセクションです。
