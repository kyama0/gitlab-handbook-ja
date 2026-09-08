---
owning-stage: "~devops::tenant_scale"
title: 'ADR-005：付与は名前空間を対象とする'
description: '付与は実際の外部キーで名前空間を指します。Rails 外で権限を適用するリソースには、Team をその権限適用サービスに複製してアクセスします。'
status: accepted
creation-date: "2026-07-29"
authors: [ "@rymai" ]
upstream_path: /handbook/engineering/architecture/design-documents/teams/decisions/005-grants_target_namespaces/
upstream_sha: a0d167307f5d32554672c5cf99e3f47abb35e1dc
lastmod: 2026-09-08T16:19:34+02:00
translated_at: "2026-09-08T22:55:31Z"
translator: codex
stale: false
---

将来的には、Artifact Registry などの Organization レベルのリソースにも Teams を割り当てられるようにすべきです。その方法を扱う決定記録はまだなく、この記録では、それができるまで実装が守るべき境界だけを定めます。

## 背景 {#context}

付与は名前空間を対象とするため、Organization レベルのリソースには届きません。検討のきっかけは Artifact Registry ですが、調査すると、これはスキーマの問題ではないことがわかります。

**プリンシパルごとの実際のアクセス制御を持つ Organization レベルのリソースは 2 つとも、Rails 外で権限を適用しています。** Artifact Registry は IAM サービスに委譲します。そのロールは共有ライブラリが所有し、IAM にミラーリングされる UUID です。割り当ては関係を扱うクライアントを通じて書き込まれ、Rails にはレジストリのテーブル、モデル、ポリシーがまったくありません。Secrets Manager は OpenBao に委譲し、そこでは権限クラスにテーブルがなく、ID はポリシーパスです。

Organization へのアクセス判断はすべて、2 つのレベルを持つ `organization_users` に対する存在確認です。Organization レベルでは PostgreSQL 内で権限を適用しているものがないため、付与を組み込める集約地点がありません。この集約地点への組み込みこそが、[ADR-004](004-team_membership_is_an_ordinary_membership.md)の権限適用戦略の全体です。

そのため、付与の対象を多相的にすると、[データベースのガイドライン](https://docs.gitlab.com/development/database/polymorphic_associations/)に反して実際の外部キーを手放し、その代わりに参照先のテーブルも背後の権限適用もない対象の型を得ることになります。

## 決定 {#decision}

**Team への付与は名前空間のみを対象とします。** 付与の `namespace_id` は実際の外部キーを維持し、この基本要素の範囲は名前空間ツリーまでとします。別の場所で権限を適用するリソースに Team がアクセスするには、付与テーブルに対象の型を増やすのではなく、その権限を適用する仕組みに Team を認識させます。

複製の経路はすでに存在します。`Authn::IamOutbox` は、エンティティの変更を IAM に複製するためのトランザクショナル outbox で、`organization_id` によってシャード化されています。IAM に Teams を認識させるには、エンティティの型を追加し、Teams のサービスからイベントを発行します。

未解決なのは、**どこで名簿を個々の割り当てに展開するか**です。GitLab がメンバーごとに 1 件の割り当てを書き込むのか、それとも権限適用サービス内で Team を集合値の主体にするのか、という選択です。前者はほかの側で何も必要としませんが、主体と対象の組み合わせごとに 1 件の割り当てを保持するストアで、GitLab が衝突を解決しなければなりません。後者は、メンバーシップの解決を権限適用サービス内にとどめますが、GitLab が所有しない側での対応が必要です。以降のすべてを決める選択なので、この領域のほかの何よりも先に決着させるべきです。

## 影響 {#consequences}

### 利点 {#positive}

- 付与は 1 つの対象の型と実際の外部キーを維持するため、すべてのクエリ、インデックス、連鎖処理が設計どおりに保たれます
- Teams は権限プラットフォームではなくプリンシパルであり続けます。そのため、影響範囲が限定された小さな機能にとどめられます
- ファンアウトの問いは、GitLab のスキーマ選択で先回りして決めるのではなく、権限適用サービスを所有する人たちが、そのサービスの側で答えます

### 欠点 {#negative}

- **現在、Teams は Organization レベルのどのリソースにもアクセスできません。** Teams と Artifact Registry の両方を使う顧客は、Team ベースでレジストリにアクセスできません。両者の権限を異なるシステムで適用しているという理由は、恣意的な機能の欠落に見えるでしょう
- これは [ADR-007](007-parity_before_migration.md)に続く、連携ごとの 2 つ目のコストです。ADR-007 に対応する汎用的なプリンシパルの抽象化は役立ちません。それは Rails 内のプリンシパルを統一するものであり、これらの権限適用サービスは Rails の外にあるためです
- 最終目標は述べられていますが、具体化されていません。Team が Organization レベルのリソースにアクセスする方法を記した決定記録がないため、上記の知見は実際に対応される前に古くなっていきます

## 関連ドキュメント {#related-documents}

- [Teams の設計案](../_index.md)
- [ADR-004：Team のメンバーシップは通常のメンバーシップ](004-team_membership_is_an_ordinary_membership.md)
- [ADR-007：移行より先に機能の同等性を確保する](007-parity_before_migration.md)
- [Organization の設計案](../../organization/_index.md)
