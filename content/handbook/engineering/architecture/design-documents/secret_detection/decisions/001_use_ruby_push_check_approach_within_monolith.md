---
title: "GitLab シークレット検出 ADR 001: モノリス内でのRuby Push Checkアプローチの使用"
upstream_path: /handbook/engineering/architecture/design-documents/secret_detection/decisions/001_use_ruby_push_check_approach_within_monolith/
upstream_sha: 86cfa2bd7d73df5a673fe5ebd33b028d0f540434
translated_at: "2026-04-27T18:56:37Z"
translator: claude
stale: false
---

## 背景

スケールにおける正規表現ベースのアプローチを使用したシークレット検出のパフォーマンスに関して、いくつかの懸念があります。主な考慮事項には、ノード間の転送レイテンシ、CPUとメモリの肥大化があります。これらの懸念は2つの形で現れました: 正規表現マッチングに使用する言語とデプロイアーキテクチャです。

[探索Issueの元の議論](https://gitlab.com/gitlab-org/gitlab/-/issues/428499)では、これらの懸念事項と背景の多くをカバーしています。

### 実装言語

検討された2つの主要言語はRubyとGoでした。

C++などの他の言語を実装に使用することは、チームの親しみやすさ、デプロイの速度、ポータビリティを理由にRubyとGoを優先して却下されました。2つの間のパフォーマンス比較については[このベンチマーキングIssue](https://gitlab.com/gitlab-org/gitlab/-/issues/423832)を参照してください。

### デプロイアーキテクチャ

デプロイには複数のオプションが検討されました: ロジックをRailsモノリスのPush Check実行パスに直接埋め込む方法、Railsノードデプロイ内のサイドカーとして配置する方法、[サーバーサイドフック](https://docs.gitlab.com/ee/administration/server_hooks.html)としてGitalyノード内のサイドカーとして配置する方法、そしてスタンドアロンサービスとしてデプロイする方法です。

## 決定

prereceive統合を使用したブロッキングプッシュイベントに関する初期イテレーションにおいて、パフォーマンスの高い正規表現処理のために `re2` を活用したRubyベースのアプローチを採用することが決定されました。さらに、ロジックをGitaly内の個別サービスまたはサーバーサイドフックとしてではなく、モノリスに直接統合することが決定されました。

Gitaly サーバーサイドフックは、スキャンサービスとGitalyブロブストレージ間のGitブロブの転送レイテンシを最小限に抑えるというパフォーマンス上の利点があります。しかし、スキャンをコンテキスト化するためにGitalyとRailsアプリケーション間で追加のリクエストが必要になります。さらに、現在のフックアーキテクチャは[非推奨であり、近い将来に新しいプラグインアーキテクチャへの移行が計画されています](https://gitlab.com/gitlab-org/gitaly/-/issues/5642)。

Ruby Push Checkアプローチは、予期されるタイムラインまでの実現に向けた明確な実行計画に従っており、プラットフォーム全体のスキャンの長期的な方向性とより密接に一致しています。例えば、Issuableの将来のスキャンはGitalyコンテキストではなくRailsアプリケーションの信頼境界内での実行が必要になります。しかし、このアプローチはRailsアプリケーション内でのメモリ使用量の増加による可用性への懸念を引き起こしています。この方向性はまた、タイムラインが判明した後にGitalyの新しいプラグインアーキテクチャへの移行が必要になる可能性があります。

スタンドアロンサービスは将来的に検討される可能性がありますが、[本番前プロファイリング](https://gitlab.com/gitlab-org/gitlab/-/issues/428499)中に収集されたデータによってより適切に情報提供される技術的アプローチの考慮が必要です。

## 実装の進化

実装はフルブロブスキャンではなく差分ベースのスキャンを使用するように進化しました。ブロブコンテンツ全体を取得する代わりに、システムは次の処理を行います:

1. [`ListAllCommits`](https://gitlab-org.gitlab.io/gitaly/#gitaly.ListAllCommitsRequest)を呼び出して新しいコミットを取得する
2. [`FindChangedPaths`](https://gitlab-org.gitlab.io/gitaly/#gitaly.FindChangedPathsRequest)を呼び出して変更されたファイルパスとその関連コミットSHAを取得する
3. [`DiffBlobs`](https://gitlab-org.gitlab.io/gitaly/#gitaly.DiffBlobsRequest)を呼び出して変更されたファイルのdiffパッチのみを取得する

このアプローチにより、スキャン対象を各コミット内の変更行のみに削減し、パフォーマンスを向上させ、メモリ消費を削減できます。
