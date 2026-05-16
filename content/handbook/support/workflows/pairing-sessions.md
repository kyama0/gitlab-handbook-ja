---
title: ペアリングセッション
description: "このドキュメントでは、サポートにおけるペアリングセッションについて説明します。"
category: References
upstream_path: /handbook/support/workflows/pairing-sessions/
upstream_sha: 5b8afe7d206f5c195e463506206021ee3c9a4491
translated_at: "2026-05-08T01:46:59Z"
translator: claude
stale: false
lastmod: "2025-10-14T17:59:32+00:00"
---

## 概要

ペアリングセッションは GitLab サポートにおける中核的なプラクティスであり、2 人以上のサポートエンジニアが協力してチケット対応・トラブルシューティング・知識共有に取り組むものです。これらのセッションは、知識の伝達、スキルの育成、優れたカスタマーサポートの提供のために不可欠です。

## ペアリングセッションとは？

ペアリングセッションは、サポートエンジニアが共同で行う作業セッションであり、以下のことを行います:

- カスタマーチケットやその他のタスクにリアルタイムで一緒に取り組む
- 知識やトラブルシューティングのアプローチを共有する
- お互いの専門性や経験から学び合う
- 複雑な技術的問題をチームとして解決する
- グローバルなサポートチーム全体で関係を築く

ペアリングセッションは通常、同期的（ビデオ通話のライブ）に行われますが、Slack スレッドや共有チケットでの作業を通じて非同期に行われることもあります。

## ペアリングセッションの種類

### Pairing sessions

- **目的**: 特定のカスタマーチケットでの協業
- **時間**: 通常 30〜60 分
- **参加者**: 通常はサポートエンジニア 2 名
- **焦点**: 問題解決、トラブルシューティング、カスタマーコミュニケーション

### Crush sessions

- **目的**: 複数のエンジニアが協力してチケットに取り組むグループペアリングセッション
- **時間**: 通常 60 分
- **参加者**: 複数のサポートエンジニア（通常 3〜10 名）
- **スケジュール**: 各リージョン（APAC、AMER、EMEA）で定期的な毎週セッションと、リージョン横断のセッション
- **形式**: 共同作業のチケット対応と知識共有に焦点を当てた構造化されたグループセッション

### Senior/Staff help sessions（Office Hours）

- **目的**: シニアおよびスタッフのサポートエンジニアが他のサポートエンジニアにガイダンスを提供する
- **時間**: 通常 60 分
- **参加者**: 複数のサポートエンジニア（通常 2 名以上）
- **焦点**: 次のステップの判断、サブジェクトマターエキスパート（SME）の特定、方向性の提示
- **スケジュール**: 定期的なセッション（DRI に依存）
- **形式**: 誰でも参加できるオープンセッション、または特定の支援に充てられた専用時間

## ペアリングセッションを始める

ペアリングセッションへの参加を始めるには:

- **Crush sessions に参加する**: スケジュールされたグループセッションは始めるには最適です — リージョンの時間は [GitLab サポートカレンダー](../_index.md#google-calendar) を確認してください
  - タイトルに "crush" や "collaboration" を含むカレンダーイベントを探してください

- **Senior/Staff help sessions に参加する**: ガイダンスや支援を受けられるオープンセッション — 時間は [GitLab サポートカレンダー](../_index.md#google-calendar) を確認してください
  - タイトルに "Senior Help"、"Office Hours"、"Help Session" を含むカレンダーイベントを探してください

- **ペアリング相手のサポートエンジニアを探す**:
  - [Skills by Subject](https://gitlab-com.gitlab.io/support/team-pages/skills-by-subject.html) ページでサブジェクトマターエキスパートを特定する
  - [`#support_team-chat`](https://gitlab.enterprise.slack.com/archives/CCBJYEWAW) でペアリングしたい人がいるか聞いてみる
  - 予告なしでも他のサポートエンジニアのカレンダーに時間を入れて構いません — 一緒に働いたことのない人と知り合うよい機会になります

- **Slack チャンネルを使う**: 自動的にペアリングの機会を提供するリージョナルなドーナツチャンネルに参加する
  - [`#spt_pairing-donut-emea`](https://gitlab.enterprise.slack.com/archives/C063F376YFN)
  - [`#spt_pairing-donut-apac`](https://gitlab.enterprise.slack.com/archives/C06NE7VJCE9)

- **積極的に動く**: 詰まってからではなく、定期的に行うことでペアリングは最も効果を発揮します

### ヒント

- サポートエンジニアとのペアリングセッションを定期カレンダーイベントとして設定することを検討してください
- グローバルに全員とペアリングするには [Team Tracking テンプレート](https://gitlab.com/gitlab-com/support/support-pairing/-/issues/new?issuable_template=Ticket%20Pairing%20-%20Team%20Tracking) を試してみてください
- サポートマネージャーにもペアリングしたいか聞いてみましょう！

## ツールとトラッキング

ペアリングセッションは、チームメトリクス、個人の成長、知識共有のために記録されます。

### ペアリングセッションでの Slack の活用

ほとんどのペアリングの会話は [`#spt_pairing`](https://gitlab.enterprise.slack.com/archives/C03UW0HPBGD) で行われますが、他のチャンネルでも行われることがあります。

Slack でペアリングする際は:

- ペアリングセッション用にスレッドを作成する
- 関連するすべてのチケット URL と参加者を会話に含める
- メンション（`@username`）を使って関係者全員にタグ付けする
- その会話が協業のドキュメントとして機能する

### Pairify

[Pairify](pairify.md) は Slack の会話からペアリング Issue を自動的に作成する Slack ボットです。Pairify はチャンネルを監視してペアリングスレッドを探し、![Pairify emoji](/images/support/workflows/assets/pairify.png "Pairify emoji") (`:pairify:`) 絵文字でリアクションすると、自動的にトラッキング Issue を作成します。

### 手動トラッキング

[Support Pairing プロジェクト](https://gitlab.com/gitlab-com/support/support-pairing) で、適切なテンプレートを使って手動でペアリング Issue を作成することもできます。

### ペアリングデータの参照

[チームペアリングサマリーページ](https://gitlab-com.gitlab.io/support/team-pages/pairings.html) で、自分のペアリング履歴を確認できます。

なお、ペアリングデータはパフォーマンスレビューやキャリア開発の議論に使用されます。
