---
title: "Create:Source Code Hardening & Modernization チーム"
description: "Source Code の構造的なセキュリティとフロントエンドの問題に対処し、成果を機能担当チームに引き渡した後に解散する一時的なチーム。"
upstream_path: /handbook/engineering/devops/create/source-code/hardening-and-modernization/
upstream_sha: "67bc662bf3f5d3f1c3cbf290ead2d6027341155d"
lastmod: "2026-09-24T15:36:57+02:00"
translated_at: "2026-09-24T21:11:16+00:00"
translator: codex
stale: false
---

## 設立の理由 {#why}

Source Code は GitLab のコードベースで最も古い部分の 1 つで、エンジニアリングのキャパシティの大半を保守に費やしています。特定の機能に結び付くのではなく、構造的な問題が 2 つあります。同じ根本原因を繰り返すセキュリティ脆弱性と、断片化され、移行が一部しか完了していないフロントエンドです。このチームは、これらを修正し、成果を引き渡した後に解散するために存在します。

## 対象範囲 {#scope}

- **セキュリティの根本原因。** Source Code の脆弱性で繰り返される根本原因を見つけ、影響するすべての箇所で使用する共通レイヤーやチェックによって、それぞれを問題の種類ごとにまとめて修正します。
- **フロントエンドのモダナイゼーション。** Source Code のページで Vue 3 への移行を完了し、統合テスト用のハーネスを追加し、不安定なテストの隔離を解消し、最も利用されるページにある多数の小さな Vue ルートを、一貫したアプリケーションに統合します。
- **機能カテゴリ。** Source Code の単一の機能カテゴリを分割し、各 Source Code チームが独自のエラーバジェットを持つようにします。

## このチームが担当しないもの {#what-this-team-does-not-own}

- **Source Code のセキュリティバックログ。** セキュリティの Issue は引き続きその機能を担当するチームが受け持ちます。私たちは、構造的に修正できる種類の問題を引き受けます。
- **機能の保守。** Source Code のすべての機能には、他の Source Code チームの中に担当者がいます。私たちはそのチームのコードで作業し、そのチームのレビューを受けます。
- **マイクロフロントエンド。** 私たちは Vue ルートを、より少数の適切に構造化されたアプリケーションに統合します。マイクロフロントエンドは別のチームが進める方向性です。

## このチームは一時的なものです {#this-team-is-temporary}

チームの活動期間は **2026-09-21 → 2027-09-10**（マイルストーン 20.4 の終了時）で、6 ヶ月後（19.10）に継続するかどうかをレビューします。独自の担当領域を維持しないため、構造的な問題を修正して引き渡した後は、担当するものは残りません。

| 氏名 | 役職 | 復帰先 |
|---|---|---|
| Vladimir Shushlin | Engineering Manager | Plan |
| Kerri Miller | Staff Backend Engineer | Create:Source Code Repository Services |
| Emma Park | Backend Engineer | Create:Source Code Repository Services |
| Chaoyue Zhao | Frontend Engineer | Create:Source Code Investigation |
| Anastasia Khomchenko | Senior Frontend Engineer | Plan:Portfolio Planning |

## 成功の測定方法 {#how-we-measure-success}

| 指標 | 目標 |
|---|---|
| Source Code の新規セキュリティ Issue 受付件数（四半期ごと）— 主要指標 | 2 四半期連続で横ばいまたは減少 |
| Source Code のセキュリティバックログ — 副次指標 | 期限超過の Issue がなく、私たちが引き受けた種類の問題が解決済みであること |
| フロントエンドのモダナイゼーション | チームと指標を定義予定 |
| 機能カテゴリ | 各 Source Code チームが独自のエラーバジェットを持つこと |

## リンク {#links}

- [チームボード](https://gitlab.com/groups/gitlab-org/-/work_items/views/1032326)
- [追跡用 Issue](https://gitlab.com/gitlab-org/create-stage/-/work_items/13313)（非公開）
- [Create:Source Code チーム](/handbook/engineering/devops/create/source-code/)
- Slack：[#g_create_source-code-hardening-and-modernization](https://gitlab.enterprise.slack.com/archives/C0C37CWJHMM)
