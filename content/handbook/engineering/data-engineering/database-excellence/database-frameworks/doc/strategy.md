---
title: データベース戦略
upstream_path: /handbook/engineering/data-engineering/database-excellence/database-frameworks/doc/strategy/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

## データベース戦略: 提案されるデータベース変更のガイダンス

GitLab は[シングルデータストア](/handbook/product/categories/gitlab-the-product/single-application/#single-data-store)を持つ[シングルアプリケーション](/handbook/product/categories/gitlab-the-product/single-application/)として提供されています。このハンドブックのエントリは、データストアのアーキテクチャへの変更や追加を検討している状況に直面した際のガイダンスとして提供されています。ツール、マイグレーション、デバッグ、ベストプラクティスに関する情報については、[GitLab Docs](https://docs.gitlab.com/) の[データベースガイド](https://docs.gitlab.com/ee/development/#database-guides)セクションをお読みください。

### 要件

データベースの追加、更新、または削除を提案する際は、デプロイ前に（できれば開発の早い段階で）[データベースレビュー](https://docs.gitlab.com/ee/development/database_review.html#database-review-guidelines)に参加していることが必要です。

### PostgreSQL

GitLab ウェブアプリは永続データベースに [PostgreSQL](https://docs.gitlab.com/ee/development/architecture.html#postgresql) を使用しています。[MySQL](https://gitlab.com/gitlab-org/gitlab-foss/-/issues/52442) のサポートを廃止しており、GitLab 13.0 のリリースで PosgreSQL 11 が必須となります。

#### 別のデータストアを検討する場合

時間の経過とともに、異なる種類のデータストア（例: NoSQL）の使用に関する提案がありました。現時点では、永続データに別のデータストアを追加することは検討していません。[シングルデータストア](/handbook/product/categories/gitlab-the-product/single-application/#single-data-store)をお読みください。

#### シングルデータストア

GitLab のデータはシングルデータストアに保存することを意図的に要求しています。この場合、単一のデータベースを意味します。「データベース」という用語はさまざまな意味で使われます。以下の用語の使い方を説明します。

- [database（データベース）](https://www.postgresql.org/docs/11/manage-ag-overview.html) - データベースは SQL オブジェクト（「データベースオブジェクト」）の名前付きコレクションです。一般的に、すべてのデータベースオブジェクト（テーブル、関数など）は1つのデータベースにのみ属します。
- [database cluster（データベースクラスター）](https://www.postgresql.org/docs/8.1/creating-cluster.html) - データベースクラスターは、稼働中のデータベースサーバーの単一インスタンスによって管理されるデータベースのコレクションです。
- [schema（スキーマ）](https://www.postgresql.org/docs/8.1/ddl-schemas.html) - データベースには1つ以上の名前付きスキーマが含まれ、スキーマにはテーブルが含まれます。スキーマにはデータ型、関数、演算子などの他の種類の名前付きオブジェクトも含まれます。同じオブジェクト名を異なるスキーマで衝突なく使用できます; たとえば、schema1 と myschema の両方に mytable という名前のテーブルが含まれていてもかまいません。データベースとは異なり、スキーマは厳密に分離されていません: ユーザーは接続しているデータベース内のどのスキーマのオブジェクトにも、権限があればアクセスできます。

##### なぜ単一のデータベースなのか？

- 私たちの会社戦略は[シングルアプリケーションの利点](/handbook/product/categories/gitlab-the-product/single-application/)を中心に構築されています。
  - Sid は[このビデオ](https://youtu.be/TGulb4sGJ9g?t=877)で、シングルデータベース戦略と2つのターボを持つフライホイールの重要性を説明しています。
- データベーススケーラビリティに関する現在の取り組みは、解決策としてデータベースシャーディングに焦点を当てています。

##### マイクロサービスの問題

多くの場合、個別のサービスやマイクロサービスへの移行は、GitLab アプリケーション内のスケーリングやパフォーマンスの問題の解決策として見なされます。しかし、マイクロサービスベースのソリューションへの移行は、より複雑なアーキテクチャを生み出しながら問題を先送りにするだけかもしれません。以下の記事と引用は、マイクロサービスの苦闘の実際の例を議論しています。

- [To Microservices and Back Again - Why Segment Went Back to a Monolith](https://www.infoq.com/news/2020/04/microservices-back-again/)

>"マイクロサービスが誤って実装されたり、システムの根本的な欠陥に対処せずに応急処置として使用された場合、複雑さに溺れて新しい製品開発ができなくなります。"

- [Bad Reasons For Microservices](https://www.youtube.com/watch?v=V9tQXugskR8)

>緩やかなマイクロサービスの束を維持することは、モノリスを維持するよりも簡単ではありません。組織的な問題が対処されているならば、分散モノリスからマイクロサービスへの移行には議論の余地があるかもしれません。マイクロサービスへのシフトは、改善する前にものごとを悪化させる可能性があります。状況が既に悪い場合、それは生活をより困難にします。

### 別のデータベースを提案するプロセス

別のデータベースを提案するプロセスは、ハンドブックの[必要な承認](/handbook/engineering/development/required-approvals/)セクションに移動しました。
