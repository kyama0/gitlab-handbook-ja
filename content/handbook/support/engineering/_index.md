---
title: サポートエンジニア リソース
description: サポートエンジニアが何をしているか、どうやって行っているかについてもっと知りたい方は、ここを参照してください。
upstream_path: /handbook/support/engineering/
upstream_sha: c1bf211b73eb496a1cb1e97c36f3e2aceeb892ba
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
---

### サポートエンジニアの一日

GitLab のサポートエンジニアとして、あなたの時間の大部分は顧客の問題解決の支援に充てられます。これは主にチケットを通して行われますが、Issue、画面共有コール、そして緊急対応を通じて行われることもあります。

### ヘルプを得る

さまざまな顧客の問題に取り組む中で、ヘルプが必要になる場合があります。私たちには、多くのレベルであなたを助けられる広範で才能あふれるチームがあります。

- マネージャー: あなたの問題がプロセス、方針の理解、またはチーム横断的なコラボレーションに関連している場合は、直属のマネージャー、もしくはその問題により直接的に取り組んでいる別のマネージャーに相談することを検討してください。サポートエンジニアリングのマネージャーは、あなたを正しい方向に導き、適切なヘルプを得られるようにできるはずです。
- シニア／スタッフサポートエンジニア: あなたの問題がデバッグ関連であれば、シニア+ エンジニアに連絡することを検討してください。シニア+ レベルでは、エンジニアはメンターおよび技術的エキスパートとして行動することが期待されます。[シニア+ エンジニアがどのように支援することが期待されているかについての詳細は、メンタリングのページ](/handbook/support/engineering/mentorship)を参照してください。
- [ヘルプの得方ワークフロー](/handbook/support/workflows/how-to-get-help/)では、チケットでの作業中にヘルプを得るためのより詳細な情報が提供されています。

### Zendesk インスタンス

GitLab では、Customer Support Operations チームが現在 2 つの異なる Zendesk インスタンスを管理しています。

1. GitLab Support インスタンス: [gitlab.zendesk.com](https://gitlab.zendesk.com)
1. GitLab US Federal Support インスタンス: [gitlab-federal-support.zendesk.com](https://gitlab-federal-support.zendesk.com)

- 顧客 URL: [federal-support.gitlab.com](https://federal-support.gitlab.com)、フルリンク（上記）の CNAME。
- 米国国内にいる米国市民のサポートエンジニアのみアクセスできます。

### チケットスタイルガイド

[Zendesk チケットのスタイル設定と返信](/handbook/support/workflows/how-to-respond-to-tickets)に関するベストプラクティスと提案を確認することをお勧めします。

### 顧客が私たちの行動規範に従っていないと感じた場合は？

サポートチームのメンバーが GitLab の[行動規範](/handbook/legal/gitlab-code-of-business-conduct-and-ethics/)に従うことが期待されているのと同様に、私たちは顧客にもサポートチームに対して同レベルの敬意をもって接することを期待しています。[GitLab Community Code of Conduct](https://about.gitlab.com/community/contribute/code-of-conduct/) は、より広い GitLab コミュニティに対して私たちが課している基準の概要を示しています。

顧客が行動規範に違反していると思われるチケットに気付いた場合は、[Manager On-Call](/handbook/support/on-call/#engaging-the-on-call-manager)をタグ付けし、私たちの [Statement of Support](https://about.gitlab.com/support/general-policies/#please-dont-use-language-intended-to-threaten-or-harass) のガイドラインに従って返答してもらってください。

### サポートチームの貢献

私たちは、すべてのエンジニアが顧客体験の向上に直接寄与できるように、製品への貢献を奨励しています。
コードまたはドキュメントのためのマージリクエスト（gitlab-org グループ内）を作成すると、`Support Team Contributions` ラベルが自動的に適用されるため、サポートチームメンバーによる製品貢献を追跡できます。

加えて、コード変更がチームの効率改善（より迅速なサポートのための admin への変更など）を目的としている場合は、`~"Support Efficiency"` ラベルも追加してください。

また、ウェイトラベル（frontend、backend、docs）を使って MR に必要な労力を追跡することもお勧めします。
他の人がどのように MR にラベルを付けているか確認することもできますが、最も重要なのは、自分の MR に対して一貫してラベルを適用することです。これにより、どの MR が最も労力を要したかや、全体的な進捗を確認できます。
MR の数とそれらの総ウェイトは、[1:1 ジェネレーターレポート](https://gitlab.com/gitlab-com/support/toolbox/1-1-issue-generator)に含まれます。

毎週末に、`support-team-meta` Issue トラッカーで Issue が作成され、過去 1 週間にマージされたサポートチームの貢献リストが付随します。[サマリー Issue のリストはこちら](https://gitlab.com/gitlab-com/support/support-team-meta/issues?label_name%5B%5D=Support%20Team%20Contributions)で確認できます。

### 内部ツール

- [Support Toolbox](https://gitlab.com/gitlab-com/support/toolbox) - [Green Hat](https://gitlab.com/gitlab-com/support/toolbox/greenhat) (SOS/ログアナライザー)、[fast-stats](https://gitlab.com/gitlab-com/support/toolbox/fast-stats) (ログからパフォーマンス統計を生成)、[strace-parser](https://gitlab.com/gitlab-com/support/toolbox/strace-parser) (raw `strace` 出力を解析)、[gitlabsos](https://gitlab.com/gitlab-com/support/toolbox/gitlabsos) と [kubeSOS](https://gitlab.com/gitlab-com/support/toolbox/kubesos) (顧客からすべてのログとその他データを取得) などのツールを含みます。
  - [Support Team Bot](https://api.slack.com/apps/A07DSM5C2H5) - サポートチームが所有する Slack 統合で、主に Support Toolbox 内の他のプロジェクトが自動化された方法で Slack に投稿できる Webhook を提供するために使用されます（[Support Daily Slackbot](https://gitlab.com/gitlab-com/support/toolbox/support-daily-slackbot)、[SWIR-Slack Bridge](https://gitlab.com/gitlab-com/support/toolbox/swir-slack-bridge)、[cmoc-handover-message](https://gitlab.com/gitlab-com/support/toolbox/cmoc-handover-message)）。
- [GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-get-started) - テストインスタンスを作成。詳細は[ガイダンス](../workflows/test_env.md#gitlab-sandbox-cloud-for-gcp-preferred)を参照
- [GitLab Development Kit](https://gitlab.com/gitlab-org/gitlab-development-kit)
- [CustomersDot admin](https://customers.gitlab.com/admin/) - Self-Managed ライセンスの管理場所、および顧客がサブスクリプションを管理する場所。

### 外部ツール

- [ExplainShell](https://explainshell.com/) - ターミナルコマンドを分解
- [Espanso](https://espanso.org/) - 多用途なテキストエクスパンダー（テキスト置換ツール、定型応答ツールとも呼ばれる）
  - すぐに使える展開がたくさん詰まった [GitLab Support Espanso パッケージ](https://gitlab.com/gitlab-com/support/toolbox/espanso/)を必ずチェックしてください！
- [Insomnia](https://insomnia.rest/) - API クエリを構築、デバッグ、テストし、それらのコードを生成
- [iTerm2](https://iterm2.com/) (macOS) - 堅牢なテーマとカスタマイズオプションを備えたターミナルエミュレータ
- [Itsycal](https://www.mowglii.com/itsycal/) (macOS) - システムウィジェットよりも柔軟なメニューバーカレンダー
- [LanguageTool](https://languagetool.org/) - 無料の **オフライン** 文法、スペル、スタイルチェッカー。**注**: [ローカルサーバー](https://dev.languagetool.org/http-server)で構成すること
- [Obsidian](https://obsidian.md/) - 多数のテーマとアドオンを備えた、超カスタマイズ可能な Markdown ノートアプリ
- [Raycast](https://www.raycast.com/) (macOS) - 絵文字、クリップボード履歴、単位変換、計算、検索、紙吹雪エフェクトなど、たくさんのプラグインを備えた Omnibox ヘルパー
- [Zed](https://zed.dev/) - 軽量だが強力な IDE
- メニューバー時計 (macOS)
  - [iStat Menus](https://bjango.com/mac/istatmenus/) - 高度にカスタマイズ可能な時計オプションを含む、ツールバー用の堅牢なシステムモニター
  - [UTC Time](https://sindresorhus.com/utc-time) - UTC 時刻を表示するシンプルなアプリで、さまざまな日付フォーマットをコピーするオプション付き

### 便利なブラウザ拡張機能

- Copy As Markdown - 現在のページの要素を Markdown 形式でコピーするために使用 ([Chrome](https://chrome.google.com/webstore/detail/copy-as-markdown/fkeaekngjflipcockcnpobkpbbfbhmdn))
- Zendesk Download Router - Zendesk のダウンロードをチケット番号別の個別フォルダに自動的にルーティング ([Chrome](https://chrome.google.com/webstore/detail/zendesk-download-router/pgfhacdbkdeppdjgighdeejjfneifkml))
- GitLab Web Debugger - GitLab.com および内部 GitLab インスタンスでのページ読み込みエラーの根本原因を特定するのに役立つ ([Chrome](https://gitlab.com/gitlab-com/gl-infra/gitlab-web-debugger))
- [Zendesk Quicktab](https://support.zendesk.com/hc/en-us/articles/6443360776346-Installing-the-Quicktab-Google-Chrome-extension) - Zendesk チケットを単一のブラウザタブで開く ([Chrome](https://chrome.google.com/webstore/detail/quicktab-for-zendesk-by-t/hhbimbckgheipimadcknkfogegmpoibj))
- Calendly Meeting Scheduling Software - アドホックなミーティング、ワンクリック予約 ([Chrome](https://chrome.google.com/webstore/detail/calendly-meeting-scheduli/cbhilkcodigmigfbnphipnnmamjfkipp))
