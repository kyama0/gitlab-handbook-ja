---
title: "デザイン判断のためのデータ"
description: "デザイン判断を支えるデータを見つけるために GitLab 内で使用されているツールに関するガイド。"
upstream_path: /handbook/product/ux/ux-resources/designers-guide-to-data/
upstream_sha: a15c0bfc1dd89fbbe4aff8969605eb60ab63f1ca
translated_at: "2026-07-16T21:37:21Z"
translator: codex
stale: false
lastmod: "2026-07-16T17:32:42-03:00"
---

## GitLab でデザイン判断にデータを使う

データは、GitLab のデザイナーとリサーチャーがユーザー行動を理解するためのもう 1 つの方法です。アナリティクスは、プロダクト開発フロー全体を通じて貴重なインプットを提供できます。データを使うことで、私たちが出荷したイテレーションの影響を理解し定量化できます。

私たちは、意思決定を完全にデータに依存すべきではありませんが、意思決定の重要なインプットであるべきです。定量的なデータ/リサーチについて詳しくは、[データを使ってインサイトを見つける](/handbook/upstream-studios/experience-research/quantitative-data/) ハンドブックページを参照してください。

{{< youtube "J-USG9BKH-g" >}}

## 仮説とインパクトを連動させる

デザインプロセスの一部は、作業をガイドする[強い仮説](/handbook/upstream-studios/experience-research/defining-goals-objectives-and-hypotheses/) を持つことです。

理想的には、仮説はユーザーリサーチからの情報に基づいているべきです。

例:

> 私たちは、`インシデントがどのように解決されたか、解決にどのくらい時間がかかったか、結果がどうだったかについての情報を、簡単に保存する` ことが、`インシデント管理に責任を持つエンジニア` がアクセスしやすい形で実現できれば、`インシデントの解決時間が 20% 短縮される` ことを達成できると信じています。

`インシデントの解決時間が 20% 短縮される` ことが達成されたかを理解するために、データを使う方法の例:

- ユーザージャーニーの 2 つのステップ間の時間を測定する
- 解決にかかった総時間を測定する
- 2 つのソリューションを比較する A/B テストを実施する

これらのデータポイントは、ソリューション検証中に取得するのは難しいですが、測定されればリサーチ、イテレーション、インパクトの間の点と点を結ぶのに役立ちます。

観察と測定によって、今後さらに多くのイテレーションを生み出すための新たな疑問が生まれるはずです。

## データはどのように取得されるか

レポートやダッシュボードを生成するために、Tableau というサードパーティーツールを使ってキャプチャされたデータを可視化しています。

データソースが Tableau のクエリで使われるテーブル名を決定します。プロダクトの観点から有用な主要なデータソースは 3 つあります: service ping、プロダクトデータベース、internal events です。

**私たちの目標はプロダクトの利用状況を分析することです。個々のユーザーを追跡することではありません**。これは、フロントエンドで「do not track」のブラウザ設定を尊重し、usage ping のオプトアウトを許可することを意味します。それに加えて、Analytics Instrumentation チームは個人を特定できる情報が保存されないようにデータの仮名化を担当しています。この [動画では Snowplow、usage ping、仮名化がどのように連携するかが説明されています](https://www.youtube.com/watch?v=awWhNtwuVNs)。

### データソースの概要

- **Service Ping** （Self-Managed および GitLab.com 向け）
  - 自社のハードウェアでプロダクトをホストしている顧客から集計情報を収集するための GitLab カスタムツール。
  - 動画: [Usage Ping ワークショップ](https://www.youtube.com/watch?v=D4eGDbpIY5c)
  - 使用例:
    - Issue の総数
    - Issue を作成しているユニークユーザー数
    - インスタンス設定 - Git バージョン、データベースバージョン
    - 有効化された機能の数
    - Snippet 上の作成されたノート数
    - マージリクエスト上のノート数
- **GitLab.com Postgres データベース** （GitLab.com 向け）
- **Internal Events** （GitLab.com 向け）
  - クライアント/サーバー側イベントとページビューをキャプチャ
  - 探索/テスト用の [イベント表示ツール](https://docs.gitlab.com/development/internal_analytics/internal_event_instrumentation/local_setup_and_debugging/)
  - [イベントトラッキングの実装](https://docs.gitlab.com/development/internal_analytics/internal_event_instrumentation/quick_start/)
- **非推奨** Snowplow （GitLab.com 向け）
  - クライアント/サーバー側イベントとページビューをキャプチャ
  - 動画: [Snowplow 2.0 ワークショップ](https://www.youtube.com/watch?v=CaxhdskjWvg)
  - 探索/テスト用の [イベント表示ツール](https://archives.docs.gitlab.com/16.2/ee/development/internal_analytics/snowplow/index.html)
  - [デザイナー向け Snowplow クリックトラッキングの実装](https://www.youtube.com/watch?v=95wNcGMrpMg&ab_channel=GitLabUnfiltered)

[GitLab のプロダクトマネージャー向け主要データソース](/handbook/enterprise-data/organization/programs/data-for-product-managers/#key-data-sources-for-product-managers-at-gitlab) では、各データソースがどのように使われ、クエリされるかが詳しく説明されています。

これらのビジュアライゼーションは、システムがどのように連携しているかを理解するのに役立ちます:

- GitLab Inc と Self-Managed インスタンス間のやり取りを示す [簡易図](https://docs.gitlab.com/development/internal_analytics/#data-flow)。
- [データプラットフォームのデータスタック](/handbook/enterprise-data/platform/#our-data-stack)の詳細な図。

## デザイン判断にデータを使った例

以下の Issue とマージリクエストは、私たちが意思決定にデータを使ってきた方法の例です。

- [単体テストレポート MR ウィジェットをユーザーがどのくらい展開しているかを確認するため、Snowplow ベースのイベントトラッキングを追加](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/46048)
- [左サイドバーと上部ナビゲーションのインタラクション（内部リンク）](https://gitlab.com/gitlab-data/analytics/-/issues/5357#note_596307748)
- [複数のルールを承認するように設定されているユーザーは何人いるか（内部リンク）](https://gitlab.com/gitlab-data/analytics/-/issues/10862)
- [テキストエリアと入力欄の選択](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/73506#note_722625421)
- [デザインでのデバイス幅の標準化](https://gitlab.com/gitlab-org/gitlab-design/-/issues/1634)

## よくある質問

- **データに関するヘルプは誰に聞けばよいですか?** データや Tableau に関する具体的な質問がある場合は、Slack の `#data` で連絡できます。
- **測定する基準となるベースラインメトリクスがない場合はどうなりますか?** ベースラインがない場合は、追跡するデータを 1 か月分集めてから、それをベースラインとして使用してください。

## リソース

- [プロダクトマネージャー向けのデータ](/handbook/enterprise-data/organization/programs/data-for-product-managers/)
- [GitLab の内部アナリティクス](https://docs.gitlab.com/development/internal_analytics/)
- [実験の設計と分析](/handbook/product/groups/product-analysis/experimentation/)
- [Growth Experiments ナレッジベース](/handbook/marketing/growth/)
- [データを使ってインサイトを見つける](/handbook/upstream-studios/experience-research/quantitative-data/)
