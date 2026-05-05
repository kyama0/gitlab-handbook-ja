---
title: "OrganizationsとCells"
owning-stage: "~devops::tenant scale"
group: Organizations
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/cells/
upstream_sha: 7fadd0122802b16e64b0e88962c637a09d27bd53
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

## OrganizationsとCellsの統合

Organizationの隔離とは何か、およびなぜCellsに必要なのかをまとめた[動画の紹介](https://www.youtube.com/watch?v=kDinjEHVVi0)をご覧ください。

GitLab.comの運営にはいくつかの重要な技術的課題があります。

1. スケーラビリティの課題: ユーザーベースの成長に伴い、アプリケーション全体を均一にスケールすることがますます困難になっています。
2. パフォーマンスのボトルネック: 1つのOrganizationによる高負荷の使用が、他のユーザーのパフォーマンスに影響を与える可能性があります。
3. 限られた隔離: アプリケーションの一部に影響する問題が、潜在的にすべてのユーザーに影響を与える可能性があります。
4. メンテナンスの複雑さ: システムの更新やメンテナンスには、すべてのユーザーを同時に中断させないための慎重な調整が必要です。

OrganizationとCellsの概念は、より柔軟でスケーラブルなアーキテクチャを導入することでこれらの制限に対処することを目指しています。それらがどのように連携するかは以下のとおりです。

1. Organizationsは論理的な分離を提供します: 関連するユーザー、Groups、Projectsを単一のエンティティの下にグループ化し、リソースのより良い管理と隔離を可能にします。
2. Cellsは物理的な分離を提供します: 各Cellは複数のOrganizationsをホストできる独立したインフラコンポーネントのセットです。

OrganizationsとCellsを組み合わせることで、以下を達成できます。

1. スケーラビリティの向上: アプリケーション全体をスケールする代わりに、成長に合わせて新しいCellsを追加できます。
2. より良いパフォーマンス隔離: 1つのCellでの問題や高負荷の使用が、他のCells内のOrganizationsに影響しません。
3. 信頼性の向上: 1つのCell内の問題は封じ込められ、システム全体の障害のリスクを低減します。
4. より簡単なメンテナンス: CellsはユーザーへのDisruptionを最小限に抑えながら、独立して更新またはメンテナンスできます。

このアプローチにより、GitLab.comはより効率的に成長しながら、すべてのユーザーにより安定したパフォーマンスの高い体験を提供できます。

## 概要

私たちのSaaSオファリングであるGitLab.comは急速に成長しています。
この成長に対応するため、基盤となるインフラコンポーネントが追加のユーザーに対応するためにスケールできることが必要です。

GitLabのスケーリングには、個々のコンポーネントに対して異なる戦略が必要です。
例えば、Webアプリケーションノードはステートレスで、より多くの個別サーバーを作成することで比較的簡単にスケールできます。
ステートフルなコンポーネントはスケールがはるかに困難です。DevOpsライフサイクル全体に対する単一のソリューションとして、GitLabはデータの唯一の情報源として機能する単一のデータストアに依存しています。
GitLabでは、このデータストアはほとんどの場合、単一のPostgreSQLデータベースです。
GitLab.comの継続的な成長に伴い、このPostgreSQLデータベースは毎秒より多くのトランザクションを処理する必要があります。
データの読み取りは追加のレプリカをプロビジョニングすることで高速化できます。
ただし、新しいデータの書き込みは同じ方法では簡単にスケールできません。
プライマリサーバーは1つだけしか存在できず、すべての書き込みはそれを経由する必要があります。
この問題に対処するためにいくつかの可能な解決策があります。

1. より高性能なハードウェアを購入する - より大きなサーバーはより多くのトランザクションを処理できます。これは一般に垂直スケーリングと呼ばれます。
1. 水平スケーリング戦略を定義する。

GitLab.comは、より大きなサーバーの購入が容易でなくなる時点に近づいています。
したがって、[Cells](https://docs.gitlab.com/ee/architecture/blueprints/cells/index.html)アーキテクチャへの移行は、私たちの水平スケーリング戦略への投資です。
このアーキテクチャは、データベース、Web、Redis、Gitaly、Runners、Sidekiqなど必要なすべてのサービスを含む、多数のほぼ隔離されたGitLabインスタンス（Cellsと呼ばれる）を作成します。
Cellsの数はビジネスの成長とともに増やすことができます。

Organizationsは、異なるCells間で顧客を分配するための手段となります。
顧客はUI経由でCellsに露出しない一方で、Organizationsのコンテキストで操作しますが、このアーキテクチャ変更の結果としてサービス可用性の向上から恩恵を受ける可能性があります。
さらに、機能の隔離の向上により、ユーザー体験をOrganizationのコンテキストにより合わせることができます。

[Cells](https://docs.gitlab.com/ee/architecture/blueprints/cells/index.html)は、中小企業（最大100ユーザー）と中堅市場セグメント（最大2000ユーザー）のOrganizationsにソリューションを提供します。大規模なOrganizationsは[GitLab Dedicated](https://docs.gitlab.com/ee/subscriptions/gitlab_dedicated/index.html)から大きな恩恵を受ける可能性があります。

Cellアーキテクチャでは、各OrganizationのデータGrip、設定、リソースが隔離されます。
これは金融、医療、政府などの規制の厳しい業界の顧客にとって特に重要です。
同じOrganizationのTop-level Groupsは互いにやり取りできますが、他のOrganizations内のGroupsとはやり取りできず、Self-managedインスタンスと同様にOrganizationの明確な境界を提供します。
隔離はUserダッシュボードをOrganizationsにスコープできるなど、パフォーマンスと可用性にプラスの影響を与えるはずです。

Organizationsを隔離することで、異なるCells間でOrganizationsを割り当てて配布することが可能になります。
Organizationsのグループは、異なるCellに位置する他のOrganizationsから完全に隔離されます。
1つのOrganization内で問題が発生した場合、その影響はOrganizationが存在するCell内に封じ込められ、単一障害点がプラットフォーム全体に影響することを防ぎます。
これによりGitLabの全体的な信頼性が向上し、広範な障害のリスクが低減され、顧客満足度が向上します。
Organizationsを隔離することは、複数のCells間で顧客を分配するための前提条件です。
