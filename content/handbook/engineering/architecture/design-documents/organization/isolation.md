---
title: Organization 隔離
status: ongoing
creation-date: "2023-10-11"
authors: [ "@alexpooley", "@DylanGriffith" ]
coach:
approvers: [ "@alexpooley", "@dorrino" ]
owning-stage: "~devops::tenant scale"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/isolation/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-18T16:41:45+13:00"
---

このブループリントは、Organization が隔離されるための要件を詳述しています。
Organization とは何かについての詳細は、[Organization](_index.md) を参照してください。

隔離フラグは、[Organization Lifecycle](lifecycle.md) で説明されている Organization ライフサイクル (`unconfirmed`、`confirmed`、`active` など) に対して直交しており、1 つの依存関係があります。最初の隔離ステップ (`isolation_desired`) は組織が `active` であることを必要とします。

## 何を?

GitLab のすべての Organization データと機能は隔離されます。
隔離は、データと機能が Organization の境界を越えることが決してできないことを意味します。

以下は、"Cell 1" と呼ばれる単一のインスタンス内の複数の Organization の図示です。

![Organization Isolation](/images/engineering/architecture/design-documents/organization/diagrams/organization-isolation.drawio.png)

GitLab の多くの機能はデータを互いにリンクできます。
Organization 隔離によって許可されないものの例をいくつか挙げます:

1. [関連 Issue](https://docs.gitlab.com/ee/user/project/issues/related_issues.html): ユーザーは `Organization A` のプロジェクトの Issue を取り出し、それを `Organization B` のプロジェクトの別の Issue と関連付けることができません。
1. [プロジェクト/グループをグループと共有](https://docs.gitlab.com/user/project/members/sharing_projects_groups/#invite-a-group-to-a-group): ユーザーは `Organization A` のグループまたはプロジェクトを `Organization B` の別のグループまたはプロジェクトと共有することが許可されません。
1. [システムノート](https://docs.gitlab.com/ee/user/project/system_notes.html): `Organization B` の Issue のコメントで言及されても、`Organization A` の Issue にシステムノートは追加されません。

## なぜ?

Organization 隔離には 2 つの主要な目的があります:

1. Organization のポータビリティ。
2. 顧客データの分離。

### Organization のポータビリティ

データと機能の周りに明確な境界を確立することで、Organization を自己完結型構造として管理できます。これにより、Organization は当社のさまざまな SaaS および Self Managed プラットフォーム間で、また Cell 全体で内部的にもポータブルになります。

Cell の場合、Organization 間のデータの関連付けは Cell 境界を越えることを意味する可能性があり、これは機能しません。

![Broken Organization Isolation](/images/engineering/architecture/design-documents/organization/diagrams/organization-isolation-broken.drawio.png)

今日、ユーザーが他の Organization のデータにリンクする Organization を作成することを許可した場合、Organization が移動されるとこれらのリンクは突然壊れます。
このため、Organization を顧客に展開するまさに最初から、Organization が同じインスタンス上にある場合でも、Organization 境界を越えるリンクを作成することが不可能であることを確実にする必要があります。
そうしないと、インスタンス間で移行できないさらに多くの混在した関連データを作成することになります。
隔離の要件を満たさないことは、シャーディングキーとして実際に使用できない新しいトップレベルデータラッパー (Organization) を作成するリスクを意味します。

### 顧客データの分離

GitLab.com では、共有データプールの一部ではない自分自身のプライベートなデータコレクションを持ちたいという顧客の需要があります。彼らは自分のデータと外部ユーザーの間にハードバウンダリを望み、また彼らの興味の外のデータに気を取られたくないと考えています。

第二に、Self Managed および Dedicated プラットフォーム内でのマルチテナント機能の需要もあります。Organization 隔離により、これらのプラットフォームは同じインスタンス内で別個の GitLab データセグメントを運用できるようになります。

## どのように?

複数の POC が実装されており、説明された隔離制約を強制する堅牢な開発者向けおよび顧客向け制約を GitLab アプリケーションおよびデータベースで提供する方法を示しています。
これらは:

1. [すべてのテーブルの `project_id` および `namespace_id` 列に基づいて Organization 隔離を強制](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/133576)
1. [すべてのテーブルの `organization_id` に基づいて Organization 隔離を強制](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/129889)
1. [トップレベルグループが Organization に移行されるために隔離されているかを検証](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/131968)

これらの POC が乗り越えようとしていた主要な制約は、データのピースが属する Organization (または Project または名前空間) を判断する標準的な方法すら GitLab アプリケーションまたはデータベースにないということでした。
これは、最初のステップが、データベース内の任意のモデルまたは行の親 Organization を効率的に見つける標準的な方法を実装することであることを意味します。

提案された解決策は、Cell ローカルスキーマ内のテーブル以外、データベース内のすべてのテーブルに、`projects`、`namespaces`、または `organizations` への参照である有効なシャーディングキーを含めることを確実にすることです。これは、すべての Organization 固有のデータが Organization に直接または間接に関連付けられることを意味します。
最初は、すべてのものに `organization_id` を持たせることを強制することを検討しましたが、これは大規模な Organization を移行するのに高すぎると判断しました。
追加の利点は、テーブルの半数以上がすでにこれらの列のいずれかを持っていることです。
さらに、トップレベルグループにデータを一貫して属性付けできない場合、トップレベルグループを新しい Organization に移動するのが安全かどうかを検証できません。

一貫したシャーディングキーを得たら、挿入時にすべてのデータが Organization 境界を越えていないことを検証するためにそれらを使用できます。
これらのシャーディングキーを使用して、以下を判断するのにも役立てることができます:

- 名前空間がすでに隔離されているため、デフォルト Organization 内の既存の名前空間を新しい Organization に安全に移動できる。
- 名前空間オーナーが新しい Organization に移行する前にいくつかのリンクを削除する必要がある。
- 名前空間のセットがグループとして隔離されており、新しい Organization に一括して一緒に移動できる。

## 詳細な手順

### Organization 隔離 - フェーズ 1

[Organization Isolation - Phase 1](https://gitlab.com/groups/gitlab-org/-/epics/11837) [ステータス: 完了]

1. これらのシャーディングキーを追加する要件と、どのように選択すべきかを説明する開発者向けドキュメントを実装する。
1. `db/docs` でシャーディングキーを宣言する方法を追加し、すでにシャーディングキーを持つすべてのテーブルに対して自動的に値を取り込む。
1. CI パイプラインおよび/または DB マイグレーションで、シャーディングキーのない新しいテーブルを作成することを不可能にする自動化を実装する。
1. `db/docs` で人々が希望するシャーディングキーを宣言する方法、および移行元の親テーブルへのパスを実装する。これはシャーディングキーを持たないテーブルのために一時的にのみ必要とされる
1. 自動化された方法でできる限り多くの「desired sharding key」を取り込もうとし、他のチームに MR を委譲する
1. 残りの「desired sharding key」を手動で取り込むために他のチームに Issue を分散する

### Organization 隔離 - フェーズ 1.5

[Organization Isolation - Phase 1.5](https://gitlab.com/groups/gitlab-org/-/epics/13678) - [ステータス: 進行中]

1. 「desired sharding key」からシャーディングキーを取り込むためのテーブルのバックフィルマイグレーションの作成を手動で開始し、その後自動化する。
1. シャーディングキーのない約 300 テーブルの移行が完了するのを待つ:
   1. Tenant Scale チームが最初のいくつかのテーブルを移行します。
   1. 進捗状況を示すダッシュボードを構築し、自動的に推論できるシャーディングキーのための自動化された MR を作成し続け、自動的に推論できないすべてのシャーディングキーのために Issue を自動的に作成します

### Organization 隔離 - フェーズ 2

[Organization Isolation - Phase 2](https://gitlab.com/groups/gitlab-org/-/epics/11838) - [ステータス: 保留中]

1. すべてのテーブルにシャーディングキーが付いたら、進化したバージョンの [POC](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/133576) をリリースし、新しく挿入されたデータが Organization 境界を越えられないことを強制します。
   これは、外部キーだけでなく、ルーズ外部キーや、モデルで説明される関係性も含むよう拡張する必要があるかもしれません。
1. すべての Cell ローカルテーブルのすべての既存のシャーディングキー列が、シャーディングキーとして信頼性をもって想定できることを検証します。これには、チームに Issue を割り当てて、これらの列が実際には適切でない別の目的に使用されていないことを確認する必要があります。
1. ユーザーは単一の Organization にのみ属するようになります。

### Organization 隔離 - フェーズ 3

[Organization Isolation - Phase 3](https://gitlab.com/groups/gitlab-org/-/epics/11839) - [ステータス: 保留中]

1. 名前空間オーナーが自分の名前空間が完全に隔離されているかを確認できる、[POC](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/131968) と同様の GitLab の新しい機能を実装する。
1. 名前空間オーナーが既存の名前空間を 1 つの Organization から別の Organization に移行できる機能を実装する。これはおそらく、自分の名前空間をデフォルト Organization から新しく作成された Organization に移行したい既存の顧客になります。前のステップで実装された隔離された名前空間のみが移動を許可されます。
1. 名前空間が隔離されているかどうかを検証する機能を拡張し、ユーザーが所有する複数の名前空間を選択し、選択された名前空間のグループが隔離されていることを検証できるようにします。選択された名前空間間のリンクはそのまま残ります。
1. 名前空間オーナーが複数の既存の名前空間を 1 つの Organization から別の Organization に移行できる機能を実装します。前のステップで実装された隔離された名前空間のみが移動を許可されます。
1. より多くの顧客が新しい Organization に移行できるように、名前空間オーナーが自分の名前空間外の不要なリンクをクリーンアップするのを支援する、より良いツールを構築します。このステップは、実際にクリーンアップが必要なリンクを持つ既存の顧客の数に依存します。

この取り組みの実装は [#11670](https://gitlab.com/groups/gitlab-org/-/epics/11670) で追跡されます。

## 検討された代替案

### Organization 間を越える必要があるデータをクラスタ全体のテーブルに追加する

Cells アーキテクチャでクラスタレベルで一部のデータを持つ予定です (たとえばユーザー)。したがって、Organization 境界を越える必要があるデータをクラスタ全体にすることができ、これで問題が解決すると考えるのは合理的かもしれません。

これは限定された機能セットでオプションになる可能性があり、一部の重要なワークフローには必要であることが判明する可能性があります。
しかし、これはデフォルトオプションになるべきではありません。なぜなら、これは最終的に Cells アーキテクチャが水平スケーリング目標を達成しないことにつながるからです。
[グループとグループを共有](https://docs.gitlab.com/user/project/members/sharing_projects_groups/#invite-a-group-to-a-group) などの機能は、スケーラビリティに関して当社のアプリケーションで最もパフォーマンスの悪い機能のいくつかと非常に密接に結びついています。
私たちは、データベースを Cell に分割することで、より多くのスケーリングヘッドルームを解除し、これらの機能をサポートすることに関連する問題を減らすことを期待しています。

### 何もせず、これらの異常を許容できるエッジケースとして扱う

このアイデアは深く検討されていませんが、これらの異常は Organization を移動する際にデータ損失として現れるため拒否されます。
データ損失は、特に顧客がサーバー間で移動することにオプトインしていないときには、非常に深刻な種類のバグです。

### これらの問題を機能ごとに解決する

これは、たとえば、異なる Organization のプロジェクト間で Issue リンクを追加することをユーザーが防止するアプリケーションルールを実装することで行うことができます。
チームに尋ねることでこのような機能をすべて見つける必要があり、それらをすべて特別なケースのビジネスルールとして修正する必要があります。

これは実行可能で堅牢性が低いオプションかもしれませんが、システムにあまり自信を持たせてくれません。
すべての Organization データが隔離されていることを保証する堅牢な方法がなければ、実装する各機能が手動でチェックされていることを信頼する必要があります。
これは、何かを見逃す本物のリスクを生み出し、再び顧客データ損失で終わることになります。
ここでのもう 1 つの課題は、隔離制約に自信がない場合、関連のないさまざまなバグをデータ損失の可能性に起因させる可能性があることです。
そのため、関連のないあらゆる種類のバグをデバッグするウサギの穴になる可能性があります。

## 隔離されているがクラスタ全体で一意

データが Organization 間で隔離されている場合でも、後方互換性の理由でクラスタ全体で一意である必要があるデータが一部存在します。

| リソース | 理由 |
|----------|--------|
| トップレベル名前空間/グループパス | `gitlab-org` トップレベルグループは 1 つしか存在できず、後方互換性のために URL は今日と同様に `https://gitlab.com/gitlab-org` になります。2 つの `gitlab-org` パスを持つことはできません。未認証のリクエストを区別できないからです。 |
