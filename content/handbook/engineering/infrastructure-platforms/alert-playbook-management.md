---
title: "アラートプレイブック管理"
upstream_path: "/handbook/engineering/infrastructure-platforms/alert-playbook-management/"
upstream_sha: "27d1e9b21984fe11eff53db49a85c2ba08ef901c"
translated_at: "2026-04-28T15:26:32Z"
translator: claude
stale: false
lastmod: "2025-09-09T19:33:15-06:00"
---

## 目的

インシデント時において、プレイブックはアラートを解決するためにオンコールエンジニア（EOC）にとって不可欠なものです。重要な情報が一箇所にまとめられていることで、EOC がインシデントの診断と解決にかける時間を節約できます。プレイブックはインシデントへの対応における標準的な手順を EOC に提供します。さらに、不慣れなサービスのアラートに対応する際のストレスを大幅に軽減できます。

現在のランブックは、アーキテクチャドキュメントであったり、トラブルシューティングのガイダンスがほとんどない無関係な情報へのリンクが多く含まれていたりする傾向があります。さらに、主にサービスベースのランブックです。これはつまり、ランブックがアラートの意味や処理方法の判断に必ずしも役立たないことを意味します。アラートベースのプレイブックへの移行により、アラートに関連する情報やその他のコンテキスト情報が即座に利用可能になるため、初期対応時間が改善されます。

## 期待事項

プレイブックは[プレイブックテンプレート](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/template-alert-playbook.md)を使用し、その中のガイダンスに従ってください。プレイブックには以下のセクションを含める必要があります:

1. アラートの意味と EOC が取ることが期待されるアクションを含む概要セクション。
2. サービスとサービスオーナーに関する情報。
3. アラートの発報を引き起こすメトリクスと、これらのメトリクスが選択された理由の説明。
4. 予想される頻度やアラートのサイレンスに関するガイドラインなど、アラートの動作の説明。
5. インシデントの重大度の可能性に関するガイダンスと重大度の判断に関するヒント。
6. ダッシュボードやアラートに関連するログクエリへのリンクなど、アラートが正確であることを確認するための検証情報。
7. このアラートを引き起こした可能性のある最近の変更へのリンク。これは、適切なタグを持つ変更管理 Issue、`chef-repo` や `gitlab-helmfiles` リポジトリの最近の MR へのリンクである可能性があります。関連する場合は、変更のロールバックに関する情報も含めてください。
8. Issue を特定するためのトラブルシューティング手順に関する情報。これは最も重要なセクションの一つであり、できるだけ詳細を含める必要があります。ログインする関連サーバー、実行するコマンド、確認するダッシュボード、便利なスクリプト、またはトラブルシューティングに関するその他のアドバイスが含まれる可能性があります。
9. アラートへの可能な解決策、多くの場合はこのアラートに関わる以前に解決されたインシデント Issue へのリンク。
10. このアラートを引き起こす可能性のある外部または内部の依存関係。例えば、データベースの問題が Sidekiq アラートを引き起こす可能性があります。
11. いつどこでエスカレーションするかなど、エスカレーションの手順とプロセス。
12. アラートのソースへのリンクやアラートをチューニングするタイミングと方法に関するガイダンスを含む定義。

## プレイブック管理と作成に関するガイドライン

- [Runbooks リポジトリ](https://gitlab.com/gitlab-com/runbooks)の `docs/<service name>/alerts/` のような関連するサービスディレクトリの `/alerts/` 配下に、プレイブックテンプレートを使用してプレイブックを作成してください。
- アラート名の違いがサフィックスのみの場合は、複数のアラートをカバーしていることを示すヘッダー行を付けた単一のプレイブックにアラートをまとめてください。
  - 例えば、`WALGBaseBackupDelayed` と `WALGBaseBackupFailed` は [`WALGBaseBackup`](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/patroni/alerts/walgBaseBackup.md) という名前の1つのプレイブックにまとめられています。詳細の大部分は同じですが、「Delayed」と「Failed」の違いを議論する必要があります。
- アラートに添付されているリンクを更新してください。アラートは Runbooks リポジトリの [mimir-rules-jsonnet](https://gitlab.com/gitlab-com/runbooks/-/tree/master/mimir-rules-jsonnet) または [mimir-rules](https://gitlab.com/gitlab-com/runbooks/-/tree/master/mimir-rules) ディレクトリのいずれかで定義されています。
- 新しいアラートを追加する際は、アラートを追加する前にサービスオーナーがプレイブックを作成する必要があります。
- アラートまたはプレイブックを変更した後は、Runbooks リポジトリで `make generate` を実行する必要があります。Runbooks リポジトリの準備方法の手順は [README のコントリビューターオンボーディング](https://gitlab.com/gitlab-com/runbooks/-/tree/master#contributor-onboarding)に記載されています。
- マージリクエストを作成する際は、マージリクエストのテキストに [`alert-playbook-template`](https://gitlab.com/gitlab-com/runbooks/-/blob/master/.gitlab/merge_request_templates/alert-playbook-template.md) テンプレートを使用してください。
- 支援が必要な場合は、#s_production_engineering Slack チャンネルで Production Engineering チームに連絡してください。

## 重要なリンク

- [プレイブックテンプレート](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/template-alert-playbook.md)
- [新しいプレイブック用の MR テンプレート](https://gitlab.com/gitlab-com/runbooks/-/blob/master/.gitlab/merge_request_templates/alert-playbook-template.md)
