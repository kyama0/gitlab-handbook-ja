---
title: "インフラストラクチャ部門 よくある質問"
upstream_path: /handbook/engineering/infrastructure-platforms/faq/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-26T18:02:22+00:00"
---

### GitLab.com のバックアップ

#### Q: GitLab.com はどのくらいの頻度でバックアップされますか？

A: [バックアップ戦略の概要を参照してください](/handbook/engineering/gitlab-com/policies/backup/)

#### Q: GitLab.com のバックアップは暗号化されていますか？

A: はい。すべてのファイルシステムの下で GCP Persistent Storage ボリュームを使用しており、これは暗黙的に暗号化されています。そのため、[ライブファイルシステム、スナップショットベースのバックアップ、データベースレプリカ、および論理バックアップはすべてブロックデバイス層で完全に暗号化されています](https://cloud.google.com/security/encryption-at-rest/default-encryption/#encryption_of_data_at_rest)。さらに、[GCP は VPC 内のノード間のトラフィックを暗号化してカプセル化している](https://cloud.google.com/security/encryption-in-transit/#encryption_in_transit_by_default)ため、転送中のデータも盗聴や改ざんから保護されています。

#### Q: 顧客が何かを削除した場合、顧客データはどのように削除されますか？

詳細なサブ質問: 顧客が GitLab.com でプロジェクト、グループ、またはアカウントを削除した場合、そのデータは安全に削除されますか？

A: git リポジトリのバックアップもデータベースのバックアップも即座に削除されるわけではありません。プロジェクトが削除されると、データベースから対応するデータと、そのプロジェクトのリポジトリ、ページ、および Wiki に関連するファイルは削除されますが、削除後最大 2 週間はバックアップに存在し続けます。[プロジェクトの遅延削除](https://docs.gitlab.com/ee/user/gitlab_com/index.html#delayed-project-deletion) が有効になっている場合、この期間は長くなる可能性があることに注意してください。このため、削除されたプロジェクトが最古のバックアップが期限切れになるまでシステムから完全に削除されることを保証することはできません。これは「セキュア削除」とは異なることに注意してください。セキュア削除とは通常、削除されたファイルのブロックを少なくとも N 回ランダムなバイトで上書きすることを意味しますが、復号化キーがなければ、ディスクイメージの盗用コピーは読み取れません。

#### Q: GitLab.com はどのようにバックアップされていますか？

A: [データベース](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/patroni/postgresql-backups-wale-walg.md)と[ファイルシステム](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/disaster-recovery/gcp-snapshots.md)のバックアップ方法の詳細については、ランブックを参照してください。

### GitLab.com の設定

#### Q: 本番環境のさまざまなサービスに使用されている設定はどこで確認できますか？

A: [GitLab.com とランナーに使用している設定はドキュメントで確認できます](https://docs.gitlab.com/ee/user/gitlab_com/)。

#### Q: GitLab.com の規模はどのくらいですか？

A: 2019 年 3 月のデータでは、350 万人のユーザー、HTTPS 経由で約 4,000 リクエスト/秒、840 万のリポジトリ、合計 3 PB 以上のストレージがありました。[バニティメトリクスダッシュボード](https://dashboards.gitlab.com/d/ZwfWfY2iz/vanity-metrics-dashboard?orgId=1) をご覧ください。

#### Q: GitLab には Self-Managed インスタンスからの自動移行方法がありますか？

A: 現在は [プロジェクトのインポート/エクスポート](https://docs.gitlab.com/ee/user/project/settings/import_export.html) 機能のみを使用して、プロジェクトを GitLab.com に移行できます。

#### Q: 顧客のプロジェクトが削除された場合、復元できますか？

A: いいえ、プロジェクトが削除されると復元することはできません。一部のプロジェクトでは、[プロジェクトの遅延削除](https://docs.gitlab.com/ee/user/gitlab_com/index.html#delayed-project-deletion) によって、ソフト削除状態中にプロジェクトを復元できます。

サポートチームメンバーがさらなるガイダンスを探している場合は、[Support の削除データ復元ワークフロー](/handbook/support/workflows/restore_requests/) を参照してください。

#### Q: 顧客を API の許可リストに追加できますか？

A: はい、必要性の十分な証拠がある場合、顧客は許可リストへの追加をリクエストできます。許可リストへの追加をリクエストするには、ハンドブックの[受信リクエストの処理方法](/handbook/engineering/infrastructure-platforms/getting-assistance/)のセクションを参照してください。

### GitLab.com のログ

#### Q: GitLab.com は何をログに記録していますか？

A: [ランブックでログに記録しているサービスを確認できます](https://gitlab.com/gitlab-com/runbooks/tree/master/logging/doc#what-are-we-logging)。

#### Q: GitLab ログはどのくらいの期間保持されますか？

A: [ランブックで保持ポリシーを確認できます](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/logging/README.md?plain=0#retention)。
