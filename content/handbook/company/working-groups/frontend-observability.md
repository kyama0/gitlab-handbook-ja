---
title: "フロントエンドオブザーバビリティワーキンググループ"
description: "フロントエンドオブザーバビリティワーキンググループは、GitLab におけるフロントエンドオブザーバビリティのメカニズムを定義・構築することを目的としています"
status: active
upstream_path: "/handbook/company/working-groups/frontend-observability/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T00:00:00Z"
translator: "claude"
stale: false
---

## 属性

| プロパティ | 値 |
|-|-|
| 作成日 | 2021-07-14（2022-06-01 から 2023-02-24 まで一時停止） |
| 終了日 | 2023-11-01 |
| Slack | [#wg_frontend-observability](https://gitlab.slack.com/archives/C0265BTH1EV)（社内からのみアクセス可能） |
| Google Doc | [ワーキンググループアジェンダ](https://docs.google.com/document/d/1GuW6_IyYgSTi6IFI2adc3lrOJTfVoATkF2maZ5lToqg)（社内からのみアクセス可能） |
| 概要と状況 | [Epic](https://gitlab.com/groups/gitlab-org/-/epics/6584) |

### チャーター

このワーキンググループは、GitLab のフロントエンドオブザーバビリティフレームワークを開発するための取り組みを調整・組織化し、その使用に関するガイドラインを確立します。現在、特にさまざまなデバイスやコンテンツにわたるパフォーマンス監視を目的としてフロントエンドをインスツルメントする方法がありません。エラー監視は可能ですが、ほとんど使用されていません。このグループは、このインスツルメンテーションを可能にするシステムを探索・定義・調整し、その使用に関する推奨事項を文書化します。

### スコープと定義

このグループは、ブラウザーパフォーマンスデータをフロントエンドの統計ゲートウェイに送信する方法を構築することに焦点を当て、現在のバックエンドメトリクスと同様にメトリクスにアクセスできるようにします。この詳細を決定することが職務の一部です。これが実現した後、グループはその使用方法と、エラー監視の使用推奨事項を文書化する責任を負います。これにより、フロントエンドエンジニアはさまざまなコンテキストでのコードのパフォーマンスを把握し、新機能のロールアウト時に問題を見つけるためのデータソースを追加できるようになります。

このプロジェクトのステークホルダーには、フロントエンドエンジニアと SRE が含まれます。

このグループは、プロダクト上の理由によるユーザーアクションに関するインスツルメンテーションには焦点を当てません。これは Snowplow がカバーしており、別のユースケースとなります。

#### 定義

- **フロントエンドオブザーバビリティ**は、フロントエンドコードの「実際の」パフォーマンスに関する質問に答えられるようにするプロセスを指します。フロントエンドの JavaScript のインスツルメンテーションによって提供されます。[これは何を意味するかをカバーする良いトーク](https://www.youtube.com/watch?v=VA0b6v9vaEM)ですが、このグループの目標はパフォーマンスとエラーに焦点を当てています。

### 終了基準

このワーキンググループは以下の条件が満たされた時に目的を達成したと見なします：

- [x] `@sentry/browser` パッケージが renovate により自動的にアップグレードされる [リンク](https://gitlab.com/gitlab-org/gitlab/-/issues/338816)
- [x] Sentry がフロントエンドエラーを確実に追跡・報告するよう設定される [リンク](https://gitlab.com/gitlab-org/gitlab/-/issues/339331)
- [x] Sentry がパフォーマンストレーシングによってパフォーマンスを監視するよう設定される [リンク](https://gitlab.com/gitlab-org/gitlab/-/issues/339332)
- [ ] Sentry エラーのトリアージ/診断プロセスが作成される [リンク](https://gitlab.com/gitlab-org/gitlab/-/issues/339334)
- [ ] 他のフロントエンドエンジニアが貢献できるようにするドキュメントが作成される [リンク](https://gitlab.com/gitlab-org/gitlab/-/issues/339335)
- [ ] 古い Sentry 設定が非推奨となり削除される [リンク](https://gitlab.com/gitlab-org/gitlab/-/issues/422407)

## 役割と責任

機能リードの責任：

- 各部門/サブ部門の個々のステークホルダーのニーズを代表すること
- 各部門/サブ部門から特定の提案に対するフィードバックを収集・統合すること
- ワーキンググループの成果（あれば）を伝達し、各部門/サブ部門からの質問に回答すること

機能リードは理想的には、策定されるポリシーの影響を受ける可能性のある IC（個人貢献者）であることが望ましいですが、上記の方法で部門やサブ部門を代表できる人であれば誰でも歓迎します。

| ワーキンググループの役割 | 人物 | ステークホルダー部門 | 役職 |
|-|-|-|-|
| エグゼクティブスポンサー | Tim Zallmann | Development | Senior Director |
| ファシリテーター | Sam Beckham | Manage:Foundations | Engineering Manager |
| 機能リード | Miguel Rincon | Verify::Runner | Senior Frontend Engineer |
| メンバー | Sheldon Led | Fulfillment | Senior Frontend Engineer |
| メンバー | Adeline Yeung | Infrastructure | Site Reliability Engineer |
| メンバー | Savas Vedova | Govern | Senior Frontend Engineer |
