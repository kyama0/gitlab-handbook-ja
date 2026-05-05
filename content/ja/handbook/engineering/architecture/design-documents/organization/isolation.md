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
upstream_sha: 171236827c9a366363160b625ff53ec19c521940
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
---

このブループリントは Organization を隔離するための要件を詳述します。
Organization とは何かについては [Organization](index.md) をご覧ください。

## 何をするのか？

GitLab のすべての Organization データと機能が隔離されます。
隔離とは、データと機能が Organization の境界を越えることがないことを意味します。

以下は「Cell 1」と呼ばれる単一インスタンス内の複数の Organization の図です。

![Organization 隔離](/images/engineering/architecture/design-documents/organization/diagrams/organization-isolation.drawio.png)

GitLab には多くの機能があり、データを相互にリンクすることができます。
Organization 隔離によって禁止されるものの例をいくつか挙げます:

1. [関連 Issue](https://docs.gitlab.com/ee/user/project/issues/related_issues.html): ユーザーは `Organization A` のあるプロジェクトの Issue を `Organization B` のプロジェクトの別の Issue に関連付けることができなくなります。
1. [プロジェクト/グループをグループと共有](https://docs.gitlab.com/user/project/members/sharing_projects_groups/#invite-a-group-to-a-group): ユーザーは `Organization A` のグループまたはプロジェクトを `Organization B` の別のグループまたはプロジェクトと共有することができなくなります。
1. [システムノート](https://docs.gitlab.com/ee/user/project/system_notes.html): `Organization B` の Issue のコメントで `Organization A` の Issue が言及されても、`Organization A` の Issue にシステムノートが追加されなくなります。

## なぜ必要なのか？

Organization 隔離には 2 つの主要な目的があります:

1. Organization のポータビリティ。
2. 顧客データの分離。

### Organization のポータビリティ

データと機能の周りに明確な境界を設けることで、Organization を自己完結した構造として管理できます。これにより、Organization は各種 SaaS とセルフマネージドプラットフォーム間、さらには Cell 間でポータブルになります。

Cell の場合、Organization 間のデータ関連付けは Cell の境界を越えることを意味する可能性があり、それは機能しません。

![壊れた Organization 隔離](/images/engineering/architecture/design-documents/organization/diagrams/organization-isolation-broken.drawio.png)

今日もし、他の Organization のデータにリンクする Organization を作成することをユーザーに許可した場合、Organization が移動するときにそれらのリンクが突然壊れてしまいます。
このため、Organization が同じインスタンス上にある場合でも、Organization の境界を越えるリンクを作成することが不可能であることを、顧客に Organization をロールアウトする最初の段階から確実にする必要があります。
そうしなければ、インスタンス間で移行できない混在した関連データをさらに増やしてしまいます。
隔離の要件を満たさないということは、シャーディングキーとして実際に使用できない新しいトップレベルデータラッパー（Organization）を作成するリスクがあることを意味します。

### 顧客データの分離

GitLab.com では、顧客が共有データプールの一部ではない独自のプライベートデータコレクションを持つことへの需要があります。顧客はデータと外部ユーザーの間に明確な境界を求めており、また自分たちの関心外のデータに煩わされたくないと考えています。

次に、セルフマネージドと Dedicated プラットフォーム内でのマルチテナント機能への需要もあります。Organization 隔離により、これらのプラットフォームは同じインスタンス内で異なる GitLab データセグメントを運用できるようになります。

## どのように実現するのか？

説明した隔離制約を強制する、GitLab アプリケーションとデータベースにおける開発者向けおよび顧客向けの堅牢な制約を実証するために、複数の POC が実装されています。
これらは:

1. [すべてのテーブルの `project_id` および `namespace_id` カラムに基づく Organization 隔離の強制](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/133576)
1. [すべてのテーブルの `organization_id` に基づく Organization 隔離の強制](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/129889)
1. [トップレベルグループが Organization に移行するために隔離されているかの検証](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/131968)

これらの POC が克服しようとした主な制約は、GitLab アプリケーションまたはデータベースにおいて、データの一部がどの Organization（またはプロジェクトまたは名前空間）に属するかを標準的な方法で判断する手段すら存在しないことでした。
これは、最初のステップとして、データベース内のモデルや行に対して親 Organization を効率的に見つける標準的な方法を実装することを意味します。

提案されているソリューションは、Cell ローカルスキーマ内のものを除く、データベースのすべてのテーブルが `projects`、`namespaces`、または `organizations` への参照となる有効なシャーディングキーを含むことを保証することです。これにより、すべての Organization 固有データが直接または間接的に Organization に関連付けられることになります。
最初はすべてに `organization_id` を持たせることを検討しましたが、大規模な Organization の移行にはコストがかかりすぎると判断しました。
追加の利点として、私たちのテーブルの半数以上がすでにこれらのカラムのいずれかを持っています。
さらに、トップレベルグループに対してデータを一貫して帰属させることができない場合、そのトップレベルグループが新しい Organization に安全に移動できるかどうかを検証することができません。

一貫したシャーディングキーができれば、新しく挿入されるデータが Organization の境界を越えないことを検証するために使用できます。
また、これらのシャーディングキーを使用して以下を判断するのに役立てることができます:

- デフォルト Organization の既存名前空間が名前空間としてすでに隔離されているため、新しい Organization に安全に移動できるかどうか。
- 名前空間オーナーが新しい Organization に移行する前にいくつかのリンクを削除する必要があるかどうか。
- 一連の名前空間がグループとして隔離されており、新しい Organization に一括で移動できるかどうか。

## 詳細なステップ

### Organization 隔離 - フェーズ 1

[Organization 隔離 - フェーズ 1](https://gitlab.com/groups/gitlab-org/-/epics/11837) [ステータス: 完了]

1. これらのシャーディングキーを追加する要件とその選択方法を説明した開発者向けドキュメントを実装する。
1. `db/docs` にシャーディングキーを宣言する方法を追加し、すでにシャーディングキーを持つすべてのテーブルに対して自動的に設定する。
1. CI パイプラインや DB マイグレーションに自動化を実装し、シャーディングキーなしに新しいテーブルを作成できないようにする。
1. `db/docs` に希望するシャーディングキーを宣言する方法と、そのシャーディングキーを移行するための親テーブルへのパスを実装する。シャーディングキーを持たないテーブルに対して一時的にのみ必要になる。
1. 自動化された方法で可能な限り多くの「希望するシャーディングキー」を設定し、MR を他チームに委譲する。
1. 残りの「希望するシャーディングキー」を手動で設定するために、他チームに Issue を展開する。

### Organization 隔離 - フェーズ 1.5

[Organization 隔離 - フェーズ 1.5](https://gitlab.com/groups/gitlab-org/-/epics/13678) - [ステータス: 進行中]

1. 「希望するシャーディングキー」からシャーディングキーを設定するバックフィルマイグレーションを、手動で作成してから自動化し始める。
1. シャーディングキーが欠けている約 300 テーブルの移行が完了するのを待つ:
   1. Tenant Scale チームが最初のいくつかのテーブルを移行する。
   1. 進捗を示すダッシュボードを構築し、自動的に推測できるシャーディングキーの自動 MR 作成を続け、自動的に推測できないシャーディングキーに対しては全ての Issue の自動作成を行う。

### Organization 隔離 - フェーズ 2

[Organization 隔離 - フェーズ 2](https://gitlab.com/groups/gitlab-org/-/epics/11838) - [ステータス: 保留中]

1. すべてのテーブルにシャーディングキーができたら、新しく挿入されるデータが Organization の境界を越えられないことを強制する [POC](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/133576) の進化版を提供する。これは外部キーだけでなく、ルーズ外部キーやモデルで記述された関係も含めるよう拡張が必要になる場合がある。
1. すべての Cell ローカルテーブルの既存のシャーディングキーカラムがシャーディングキーとして信頼できるか検証する。これは、これらのカラムが実際にはシャーディングキーとして適切でない別の目的に使用されていないことをチームに確認する Issue の割り当てが必要です。
1. ユーザーは単一の Organization にのみ所属するようになります。

### Organization 隔離 - フェーズ 3

[Organization 隔離 - フェーズ 3](https://gitlab.com/groups/gitlab-org/-/epics/11839) - [ステータス: 保留中]

1. 名前空間オーナーがその名前空間が完全に隔離されているかどうかを確認できる [POC](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/131968) に類似した新機能を GitLab に実装する。
1. 名前空間オーナーが既存の名前空間を 1 つの Organization から別の Organization に移行できる機能を実装する。これは主に、デフォルト Organization から名前空間を移行して新しい Organization に入れたい既存の顧客を対象とします。前のステップで実装された隔離済みの名前空間のみが移動できます。
1. 名前空間が隔離されているかを検証する機能を拡張し、ユーザーが所有する複数の名前空間を選択してその選択されたグループが隔離されているか検証できるようにする。選択した名前空間間のリンクはそのまま維持されます。
1. 名前空間オーナーが複数の既存の名前空間を 1 つの Organization から別の Organization に移行できる機能を実装する。前のステップで実装された隔離済みの名前空間のみが移動できます。
1. 名前空間オーナーが名前空間外の不要なリンクを削除するのを支援するより良いツールを構築し、より多くの顧客が新しい Organization に移行できるようにする。このステップは、実際にクリーンアップが必要なリンクを持つ既存顧客の数に依存します。

この取り組みの実装は [#11670](https://gitlab.com/groups/gitlab-org/-/epics/11670) で追跡されます。

## 検討した代替案

### Organization を越える必要があるデータをクラスター全体のテーブルに追加する

私たちは Cell アーキテクチャ内のクラスターレベルにデータを持つ予定（例: ユーザー）があるため、
Organization の境界を越える可能性があるデータをクラスター全体にすることができれば問題が解決するように思えます。

これは限られた機能セットではオプションとなり、一部の重要なワークフローでは必要になるかもしれません。
しかし、最終的にはこれがデフォルトのオプションになるべきではありません。なぜなら、Cell アーキテクチャが水平スケーリングの目標を達成できなくなるからです。
[グループとグループの共有](https://docs.gitlab.com/user/project/members/sharing_projects_groups/#invite-a-group-to-a-group) などの機能は、スケーラビリティに関して私たちのアプリケーションで最もパフォーマンスが低い機能の一部と密接に結びついています。
Cell でデータベースを分割することで、スケーリングの余地が増え、これらの機能のサポートに関連する問題を軽減できることを期待しています。

### 何もせず、これらの異常を許容できるエッジケースとして扱う

このアイデアは詳しく検討されていませんが、Organization を移動する際にこれらの異常がデータ損失として現れるという理由で却下されます。
データ損失は非常に深刻なバグであり、特に顧客がサーバー間の移動をオプトインしていない場合はなおさらです。

### 機能ごとに問題を解決する

これは例えば、異なる Organization のプロジェクト間で Issue リンクを追加するのをユーザーに防ぐアプリケーションルールを実装することで行えます。
そのような機能はすべてチームに確認して見つけ出し、それぞれを特別なケースのビジネスルールとして修正する必要があります。

これは実行可能な、あまり堅牢でないオプションかもしれませんが、システムへの信頼が大きく低下します。
すべての Organization データが隔離されていることを確認する堅牢な方法がなければ、実装する各機能が手動で確認されていることを信頼しなければなりません。
これにより、何かを見逃すリスクが生まれ、再び顧客データの損失に繋がります。
もう一つの課題は、隔離制約に自信が持てない場合、可能性のあるデータ損失に各種の無関係なバグを帰属させてしまう可能性があることです。
このため、あらゆる無関係なバグのデバッグに深みにはまる可能性があります。

## 隔離されているが、クラスター全体でユニーク

データは 1 つの Organization から別の Organization まで隔離されていますが、
後方互換性のためにクラスター全体でユニークである必要があるデータも一部あります。

| リソース | 理由 |
|----------|--------|
| トップレベルの名前空間/グループパス | 後方互換性のため `gitlab-org` トップレベルグループは 1 つしか存在できず、URL は今日と同様に `https://gitlab.com/gitlab-org` となります。認証されていないリクエストを区別できないため、2 つの `gitlab-org` パスを持つことはできません。 |
