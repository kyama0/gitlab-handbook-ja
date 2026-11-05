---
title: "MFE Platform ADR 005: MFE アプリ間の通信"
description: "チームが必要とするまで、MFE アプリケーション間の通信チャネルの構築を先送りします。"
creation-date: "2026-11-04"
authors: ["@fredericcaplette"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/mfe_platform/decisions/005_mfe_inter_app_communication/
upstream_sha: f656f02435661ffa63fe51e9b75469265e9ed794
lastmod: "2026-11-05T10:52:01+01:00"
translated_at: "2026-11-05T21:18:38.764326+00:00"
stale: false
translator: codex
---


## 背景 {#context}

MFE アプリケーションは、いずれ互いに通信する必要が出てきます。UI プラットフォームの初回リリースは、
シェルと MFE アプリケーション間の通信、およびそれらを配信する
インフラストラクチャに注力します。

## 決定 {#decision}

MFE アプリケーション間の通信チャネルの構築は先送りします。これは、
UI プラットフォームの初回の成果物のスコープ外です。

## 影響 {#consequences}

- MFE アプリケーションは、シェルとのみ通信します。
- チームは、独自の MFE 間通信チャネルや共有状態管理のソリューションを追加してはいけません。
  まず `#g-ui_platform` Slack チャンネルで必要性を提起してください。そのうえで、この決定を再検討します。
