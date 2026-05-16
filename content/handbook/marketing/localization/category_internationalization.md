---
title: "GitLab における国際化 (i18n)"
description: GitLab を世界中のユーザーが異なる言語や地域で利用できるようにするための、技術基盤とコミュニティ主導の取り組みについて。
upstream_path: /handbook/marketing/localization/category_internationalization/
upstream_sha: 768e1a6af6ab56133195582e6a0b17d225df15f7
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-14T17:59:32+00:00"
---

## GitLab における国際化 (i18n)

[Localization チームは、GitLab のプロダクト国際化カテゴリを所有しています](https://gitlab.com/gitlab-com/Product/-/issues/14118)。これは 2025 年に Import and Integrate グループから移管されました（参照: [プロダクトのセクション、ステージ、グループ、カテゴリ](/handbook/product/categories/)）。これにより、i18n の技術インフラストラクチャと GitLab の広範なローカリゼーション戦略が統合されました。

### 国際化カテゴリとは

国際化は、ローカリゼーションを実現するための技術基盤を提供します。具体的には、外部化によりテキストとコードを分離すること、言語ごとの複数形ルールの取り扱い、さまざまな文字エンコーディングのサポート、日付・時刻のフォーマットおよび timeago の i18n に関するニュアンスの管理、UI テキストメッセージの構成およびローカリゼーション可能性に関する標準への準拠、翻訳管理のためのインフラストラクチャの構築・保守などが含まれます。Localization チームは、技術的な実装と市場ニーズおよび翻訳コミュニティの要件との橋渡しを行います。

### 現状

GitLab の国際化は実用に耐える成熟度に達しています。ほとんどのユーザー向け文字列は外部化されており、Crowdin を通じて翻訳可能です。多くの言語は十分な翻訳カバレッジを獲得しています — 割合は https://crowdin.com/project/gitlab-ee で確認できます。ただし、技術的な改善の余地は残っています: コードベース全体で文字列の外部化が未完了であり、複数形システムの改善が必要であり、[国際化戦略](https://gitlab.com/groups/gitlab-org/-/epics/2722) 配下の大きなバックログには継続的なリファインメントが必要です。これは Localization チームが所有しています。

### 翻訳管理の進化

以前は、翻訳管理に多大な手作業が必要でした。当初のプロセスでは、マージリクエストが作成されるのを待ち、検証用パイプラインを手動でトリガーし、Crowdin で問題のある翻訳を個別に却下し、承認された翻訳を手動でマージしていました。この手作業のワークフローは数時間を要し、Crowdin のインターフェースおよび GitLab の検証システムに関する深い知識を必要としていました。

現在では、洗練された [crowdin-translation-sync](https://gitlab.com/gitlab-org/frontend/crowdin-translation-sync) システムが、複数の統合パイプラインを通じてワークフロー全体を自動化しています。このシステムは、ソースの Crowdin へのアップロード、承認済み翻訳のダウンロード、包括的な品質保証・構文検証・コンテンツリンティングの実行、よくある翻訳エラーの自動解消、適切なラベルとレビュアーが設定された管理しやすいマージリクエストの作成を担います。以前は数時間の手作業を要していたものが、この自動化システムにより 3〜5 分で完了するようになりました。ただし、マージリクエストの最終レビューと承認には、依然として手動による監視が必要です。

### 改善および投資の機会

- i18n バックログのリファインメントと i18n Issue の解決
- AI の活用を含む、コンテキスト付きでの翻訳プロセス強化
- Crowdin における Issue 管理および解決（「Issue」とは翻訳者からの質問や報告された誤訳を意味します）
- より広範なコミュニティの巻き込み
- Crowdin での用語集管理
- Crowdin 自動化の強化と保守
- 翻訳更新の高速化
- 翻訳品質の改善
- 長期的には [Crowdin Enterprise へのアップグレード](https://gitlab.com/gitlab-com/localization/localization-team/-/issues/258)

### 広範なコミュニティからの貢献

広範なコミュニティは、文字列の外部化、Crowdin による翻訳作業、校正、技術的な i18n 改善を通じて貢献できます。

- **文字列の外部化**: GitLab の国際化フレームワークを使用してハードコードされた文字列を特定し、外部化する
- **翻訳**: Crowdin を通じて翻訳を提出し、提案に投票する
- **校正**: 受け入れ前に翻訳をレビューする（すべての言語で校正者を積極的に募集しています）
- **技術的改善**: 「Seeking community contributions」とラベル付けされた Issue に貢献する

[GitLab をあなたの言語に翻訳する](https://docs.gitlab.com/development/i18n/) および [GitLab の国際化](https://docs.gitlab.com/development/i18n/externalization/) を参照してください。
