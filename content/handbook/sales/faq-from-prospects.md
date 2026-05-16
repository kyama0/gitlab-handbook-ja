---
title: "プロスペクトからの FAQ"
description: "GitLab の機能、ユーザー管理、統計/ログ、パフォーマンス、インストール、サポートに関する FAQ をご覧ください"
upstream_path: /handbook/sales/faq-from-prospects/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-04T01:51:25+00:00"
---

### 機能

- Q: GitLab は Elasticsearch などに基づく検索エンジンをサポートしていますか？

  A: GitLab の有料ティアでは、Advanced Search の一部として Elasticsearch の検索機能を活用できます。

  ドキュメント: https://docs.gitlab.com/ee/integration/advanced_search/elasticsearch.html

- Q: Advanced Search は Guest アカウントでも利用できますか？

  A: はい。Advanced Search が有効な GitLab EE では、Guest アカウントでも Advanced Search を使用できます。

- Q: GitLab はプロジェクトテンプレートを提供していますか？

  A: 現時点では GitLab にプロジェクトテンプレートはありません。

  オープン Issue: https://gitlab.com/gitlab-org/gitlab-ce/issues/13210

- Q: シンタックスカラーリングはありますか？どの言語で？拡張可能ですか？

  A: GitLab はシンタックスハイライティングに rouge ruby ライブラリを使用しています。Rouge は Ruby、JavaScript、Swift、Go、C++、Haskell を含む 77 以上の言語をサポートしています。サポートされている言語の完全なリストとその拡張方法については、rouge の Web サイトをご覧ください: https://rouge-ruby.github.io/docs/file.Languages.html

  ドキュメント: https://docs.gitlab.com/ee/user/project/repository/files/highlighting.html

- Q: プロジェクトごとの最大サイズ（ディスクサイズ）はありますか？

  A: プロジェクトにディスクサイズの制限はありません。各プロジェクトのサイズは、管理パネルのプロジェクト概要に表示されます。

  マージリクエスト: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/1366

### ユーザー管理

- Q: GitLab はユーザーグループをサポートしていますか？

  A: GitLab はユーザーグループをサポートしており、プロジェクトをディレクトリにグループ化し、ユーザーに複数のプロジェクトへのアクセスを一度に与えることができます。

  ドキュメント: https://docs.gitlab.com/ee/user/group/index.html

- Q: GitLab はプロジェクトの可視性レベルを提供していますか？

  A: GitLab には各プロジェクトに 3 つの異なる可視性レベルがあります: Public、internal、private。

  ドキュメント: https://docs.gitlab.com/ee/user/public_access.html

- Q: プロジェクトではなくユーザーへのデフォルト権限をサポートしていますか？

  A: [missing]

- Q: GitLab は特定のユーザーに対してプロジェクト作成をブロックする方法を提供していますか？

  A: GitLab 管理者は、各ユーザーにプロジェクト制限を設定できます。制限が 0 に設定されている場合、ユーザーはプロジェクトを作成できません。

  ドキュメント: missing

- Q: ブロックされたユーザーは合計ユーザー数にカウントされますか？

  A: いいえ、アクティブなユーザーのみが合計ユーザー数にカウントされます。

  ライセンス FAQ: /pricing/licensing-faq/

### 統計 / ログ

- Q: GitLab 管理者にはどのような種類の使用統計が利用可能ですか？

  A: GitLab EE は、組織とそのメンバーの Issue、マージリクエスト、プッシュイベントの活動の概要を提供する contribution analytics を提供します。分析が依存する期間は、3 つのセクションにまたがっています: 先週、先月、過去 3 ヶ月。

  ドキュメント: https://docs.gitlab.com/ee/user/group/contribution_analytics/

- Q: GitLab はどのようにログ分析を提供していますか？

  A: GitLab には、さまざまなシステムログファイルを使用して GitLab インスタンスを分析できる高度なログシステムがあります。一般的に、管理者は管理パネルのログセクションでログファイルの最後の 2000 行を表示できます。さらに、GitLab EE は、GitLab 管理パネル内でセキュリティと監査イベントを表示するための Audit Events を提供します。

  ドキュメント:

  Log system: https://docs.gitlab.com/ee/administration/logs/

  Audit Events: https://docs.gitlab.com/ee/administration/audit_event_reports.html

### パフォーマンス

- Q: 特定のユーザー数またはリポジトリ数のシステム要件は何ですか？

  A: ユーザー数とリポジトリ数に関するそれぞれのハードウェア要件は、GitLab ドキュメントに記載されています: https://docs.gitlab.com/ee/install/requirements.html#hardware-requirements

- Q: GitLab はマルチサーバーセットアップ（例: データベースと各サービスに異なるサーバー）をサポートしていますか？

  A: はい、例えば、これは GitLab.com 上の GitLab EE の現在のセットアップです。

  ドキュメント: missing

### インストールとサポート

- Q: サポートをリクエストするプロセスは何ですか？

  A: サポートに連絡する方法の詳細については、[GitLab Support](https://about.gitlab.com/support/) ページをご覧ください。

- Q: GitLab はカスタムインストールの可能性を提供していますか？

  A: GitLab はソースからインストールでき、これによりあらゆるカスタマイズが可能です。ただし、高速で信頼性の高い Omnibus パッケージインストールが推奨されます。

  ドキュメント: https://gitlab.com/gitlab-org/gitlab-ee/blob/master/doc/install/installation.md

- Q: GitLab インスタンスをアップグレードするプロセスは何ですか？

  A: インストール方法と GitLab のバージョンに応じて、ドキュメントには複数のアップデートガイドがあります: https://docs.gitlab.com/ee/update/

- Q: インターネット接続なしで GitLab をインストールおよびアップグレードできますか？

  A: はい。私たちの Omnibus パッケージは自己完結型で、インストール、設定、それ以降にインターネットアクセスを必要としません。
