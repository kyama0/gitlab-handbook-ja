---
stage: enablement
group: Tenant Scale
title: 'Cells: パーソナル Namespace'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/impacted_features/personal-namespaces/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

このドキュメントは作業中であり、Cells 設計の非常に初期の状態を表しています。重要な側面は未だ文書化されていませんが、将来的に追加する予定です。これは Cells のアーキテクチャの一候補であり、実装するアプローチを決定する前に代替案と比較検討するつもりです。このアーキテクチャを採用しないと決定した場合でも、そのドキュメントを保持し、このアプローチを選択しなかった理由を記録します。

</div>


パーソナル Namespace は Cells の全体的なアーキテクチャにうまく適合しません。なぜなら、Cells アーキテクチャはすべてのデータが単一の Organization に属することに依存しているためです。
ユーザーが複数の Organization にまたがって作業できる場合、パーソナル Namespace とそのプロジェクトを保存するための単一の Organization を選ぶ自然な方法がありません。

Cells における重要なエンジニアリング制約の一つは、ある Organization に属するデータが別の Organization に属するデータにリンクされるべきではないということです。
具体的には、GitLab の機能は一度に単一の Organization にスコープされるべきです。
これは、フォークがパーソナル Namespace の重要なワークロードの一つであるため、パーソナル Namespace に課題をもたらします。
フォークと、フォークされた MR をユーザーに提示する UI に関連する機能は、しばしば下流と上流のプロジェクトの両方からのデータを同時に必要とします。
そのようなデータが異なる Cell に保存された異なる Organization に属している場合、その機能の実装は非常に困難になります。
これは特に、GitLab で最も複雑かつパフォーマンスが重要な機能の一つであるマージリクエストに当てはまります。

今日のパーソナル Namespace は、ほとんど重複しない 2 つの目的を果たしています:

1. ユーザーが他の人からの貢献を期待しないパーソナルプロジェクトを作成する場所を提供します。このユースケースにより、自分自身のためだけにグループを作成する必要がなくなります。
1. ユーザーがブランチをプッシュする権限を持たないプロジェクトへの貢献時に作成するフォークを保存するデフォルトの場所を提供します。これもグループを作成する必要性をなくします。しかし、ここでの主要なユーザーニーズは、上流プロジェクトにブランチをプッシュできないため、フォークを作成してそのフォークからマージリクエストで貢献するというものです。

## 1. 定義

[パーソナル Namespace](https://docs.gitlab.com/ee/user/namespace/index.html#types-of-namespaces) はユーザー名に基づいており、ユーザーがアカウントを作成するときに提供されます。
ユーザーはパーソナル Namespace の下に [パーソナルプロジェクト](https://docs.gitlab.com/ee/user/project/working_with_projects.html#view-personal-projects) を作成できます。

## 2. データフロー

## 3. 提案

上記のように、パーソナル Namespace は今日 2 つの目的を果たしています:

1. グループを作成しなくて済むよう、ユーザーがプロジェクトを保存する場所。
1. ブランチをプッシュする権限がないプロジェクトへの貢献時に、フォークを保存するための場所。

この提案では (1) のみに焦点を当て、(2) は [Cells: コントリビューション: フォーク](contributions-forks.md) で説明する適切なワークフローに置き換えられると仮定します。
パーソナル Namespace をフォーク保存の場所として使用することをやめる予定なので、残るメインのユースケースは Organization をまたいだリンクをサポートする必要がないと仮定できます。

### 3.1. Organization 間を移動できる単一のパーソナル Namespace

既存のユーザーのパーソナル Namespace は短期的にはデフォルト Organization 内に存在します。
これはすべてのユーザーが最初はパーソナル Namespace を通じてデフォルト Organization と関連付けられることを意味します。
新しい Organization が作成されると、その Organization でも新しいユーザーを作成できます。
新しいユーザーのパーソナル Namespace はデフォルトではなく、その新しい Organization に関連付けられます。
また、ユーザーはデフォルト Organization 以外の Organization のメンバーになることができます。
この場合、個人の Namespace を別のホーム Organization に移動する方法を定義するまで、パーソナル Namespace にアクセスするためにデフォルト Organization に切り替える必要があります。
そのような移動には、パーソナル Namespace を移動前にグループに変換する必要があるかもしれません。
Organization が削除されると、それに関連付けられたパーソナル Namespace をどうするかを決める必要があります。
このルートをたどる場合、グループやプロジェクトを独自の Organization に移動するときに起きるような破壊が生じる可能性があり、完全な影響はさらなる調査が必要かもしれません。

ただし、この決定は、フォークとして上流プロジェクトへの貢献に使われていた既存のパーソナル Namespace が、上流が Organization に移動した直後に上流から切断されることを意味します。
GitLab.com ではパーソナル Namespace 内の全プロジェクトの 10% がフォークです。
これはやや混乱を招くワークフローかもしれませんが、フォークが主にマージリクエストで使用されるブランチを保存しているだけであれば、影響を受けるユーザーに対して Organization のコンテキストでフォークを再作成するよう求めることは妥当かもしれません。

ユーザーがブランチをプッシュする権限を持たないプロジェクトへの貢献時にフォークを保存する場所を提供する `contribution space` のアイデアをさらに探求します。
その議論は [Cells のフォークへの影響](contributions-forks.md) の大きな議論の一部として取り扱われます。

メリット:

- ユーザーのホーム Organization からパーソナル Namespace に簡単にアクセスできます。ほとんどのユーザーは単一の Organization でのみ作業すると想定されます。
- 個人と組織のアクティビティが同じ Organization の一部として集計されるため、単一の Organization でのみ作業するユーザーのコントリビューショングラフは損なわれません。

デメリット:

- パーソナル Namespace を Organization 間で移動するための転送メカニズムを構築する必要があり、これは非常に複雑です。Organization は異なる Cell に配置できるため、現在の Cells アーキテクチャに違反します。これを可能にするには、Organization の分離を壊す必要があります。
- Organization 間の転送によって接続が壊れたりデータが失われる高リスクがあります。
- 転送前に[パーソナル Namespace をグループに変換する](https://docs.gitlab.com/ee/tutorials/convert_personal_namespace_to_group/index.html)ことは簡単なプロセスではありません。

### 3.2. デフォルト Organization に残る単一のパーソナル Namespace

既存のユーザーのパーソナル Namespace は短期的にはデフォルト Organization 内に存在します。
これはすべてのユーザーが最初はパーソナル Namespace を通じてデフォルト Organization と関連付けられることを意味します。
デフォルト Organization 以外の Organization の一部として GitLab に参加する新しいユーザーも、デフォルト Organization にパーソナル Namespace を受け取ります。
デフォルト Organization 以外の Organization はパーソナル Namespace を含みません。

メリット:

- 転送メカニズムが不要です。

デメリット:

- 複数の Organization に属するユーザーは、パーソナルコンテンツがデフォルト Organization に保存されていることを覚えておく必要があります。アクセスするにはデフォルト Organization に戻る必要があります。
- 新しいユーザーは自分がなぜデフォルト Organization に属しているのかを理解できないかもしれません。
- ユーザープロフィールページへの影響があります。デフォルト Organization 以外の Organization ではパーソナルプロジェクトが表示されません。これによりページに多くの空白が生じます。`Personal projects` リストも再設計が必要になります。

### 3.3. 各 Organization に 1 つのパーソナル Namespace

既存のユーザーのパーソナル Namespace は短期的にはデフォルト Organization 内に存在します。
新しい Organization が作成されると、ユーザーが対話する各 Organization に対して追加のパーソナル Namespace を受け取ります。
たとえば、ユーザーが Organization のグループやプロジェクトを表示すると、パーソナル Namespace が作成されます。
これは、コミュニティコントリビューターがメンバーにならずに Organization への貢献を継続できるようにするために必要です。

メリット:

- パーソナルプロジェクトのコンテンツは Organization が所有します。企業にとってコンテンツが組織の境界外に漏洩するリスクが低くなります。
- 転送メカニズムが不要です。
- ユーザープロフィールページへの変更が不要です。
- ユーザーは各 Organization のパーソナルプロジェクトを保持できます。
- [フォーク](contributions-forks.md) のためのコントリビューションスペースが不要です。
- デフォルト Organization を他の Organization と異なる動作にする必要がありません。

デメリット:

- ユーザーは各 Organization に保存したパーソナルコンテンツを覚えておく必要があります。
- パーソナルコンテンツは Organization が所有することになります。ただし、これはセルフマネージドの現在の動作に似ており、企業に望まれるかもしれません。

### 3.4. パーソナル Namespace の廃止

既存のすべてのパーソナル Namespace はグループに変換されます。
グループパスは現在のユーザー名と同一です。
Organization のリリース時に、これらのグループはデフォルト Organization の一部になります。
パーソナル Namespace を持つ要件からユーザーを切り離し、ユーザーを真のグローバルエンティティにします。

メリット:

- ユーザーはパーソナルプロジェクトをグループに整理できるようになります。これは非常に要望の多い機能です。
- ユーザー作成時にパーソナル Namespace を作成する必要がなくなります。
- 既存のパーソナルプロジェクトのパス変更が不要です。

デメリット:

- パーソナルグループの概念を確立する必要があります。
- @-メンションがどのように機能するかが不明です。現在、個々のユーザーとグループの両方にタグ付けが可能です。既存のロジックに従うと、パーソナルグループに属するすべてのグループメンバーがタグ付けされます。
- ユーザープロフィールページへの重大な影響があります。パーソナルプロジェクトはユーザープロフィールページから切り離され、ユーザーが選択した特定のプロジェクト（スターやピン留め）をハイライトする新しい機能に置き換えられる可能性があります。
- トップレベルのグループを移行するのと同じメカニズムを使用して Organization 間でグループを移行できるかどうかが不明です。この機能は少なくとも中期的には非常に制限されると予想されます。[セクション 3.1.](#31-one-personal-namespace-that-can-move-between-organizations) で説明した転送制限と同様の制限が予想されます。

## 4. 評価

まず [Organization に対してパーソナル Namespace をオプションにする](https://gitlab.com/groups/gitlab-org/-/epics/12179) ことから始めます。このイテレーションの目標は、パーソナル Namespace を使用したくない顧客がすでに Organization に移行できるよう、デフォルト Organization 以外の Organization に対してパーソナル Namespace を無効にすることです。最初のフェーズでは、ユーザー向けの変更の準備として Ruby on Rails のモデルの関係のみを変更します。

ユーザーがクラスター全体のエンティティになり、ユーザーのパーソナル Namespace が Cell ローカルである必要があるため、[ユーザープロフィールとパーソナル Namespace の概念を分離する](https://gitlab.com/gitlab-org/gitlab/-/issues/432654) 必要があります。グループを優先して [パーソナル Namespace を廃止する](#34-discontinue-personal-namespaces) 可能性が高いです。
