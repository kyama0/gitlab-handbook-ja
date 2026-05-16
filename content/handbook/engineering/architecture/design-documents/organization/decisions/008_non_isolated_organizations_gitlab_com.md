---
owning-stage: "~devops::tenant scale"
title: 'Organizations ADR 008: GitLab.com における非隔離 Organization'
creation-date: "2026-03-04"
authors: [ "@tkuah", "@alexpooley" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/decisions/008_non_isolated_organizations_gitlab_com/
upstream_sha: 171236827c9a366363160b625ff53ec19c521940
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-16T22:33:19+12:00"
---

## コンテキスト

GitLab.com 上のトップレベルグループ（TLG）は現在、GitLab が管理するデフォルト Organization 内に存在しています。
このデフォルト Organization は顧客が所有するエンティティとして設計されたものではなく、
クロスネームスペースフォークのような既存のプラットフォーム動作を可能にするために存在しています。

Organization レベルの機能の導入により、ギャップが生じました: 新機能には Organization が必要です。
[ADR 007](007_self_managed_dedicated_single_organization.md) は、セルフマネージドと Dedicated インスタンスがインスタンスと Organization の間で 1 対 1 のマッピングを持つことを定めています。
GitLab.com ではこれは適用されません。
デフォルト Organization は GitLab が所有しており、TLG オーナーが所有しているわけではないため、
TLG オーナーはそれを設定・制御することができません。

## 決定

新たに作成される Organization はすべて非隔離として開始されます。

移管時には:

- TLG オーナーが新しい Organization のオーナーになります。
- TLG が所有するすべてのリソースが新しい Organization に移管されます。
- TLG ではなくデフォルト Organization が所有するリソースは移管**されません**。
  これにはユーザーが含まれます。

隔離が開発されるまでの間、両方の Organization 間でアクセスの継続性が保持されます。
Organization スコープのデータに依存する機能は同様に、Organization 境界の適用を行う前に
現在の Organization が非隔離かどうかを確認する必要があります。

### デフォルト Organization が所有するリソース

TLG に関連しているが、デフォルト Organization が所有しているリソースの種類があります。
例として `User`、`PoolRepository`、`Projects::Topic` が挙げられます。
これらのリソースタイプは以下のいずれかが必要です:

- 新しい Organization にコピーする。
- 新しい Organization に移管する。
- 何もしない — リソースはデフォルト Organization に留まる。
- TLG オーナーおよび/または新しい Organization オーナーが手動で操作を実施する。

上記の操作は TLG の移管中、または TLG の移管後に実施できます。
これらのリソースへのアクセスは新しい非隔離 Organization でも引き続き利用可能なため、
ユーザーは変化を感じることはありません。

## 結果

- TLG オーナーは、GitLab のデフォルト Organization 設定から独立して自分たちの Organization を所有・設定できるようになります。
- Organization レベルの新機能が移管済みの TLG で利用可能になります。
- デフォルト Organization に留まる TLG はこれらの機能にアクセスできません。
- オーナーによって隔離が強制されるまで、ユーザーは Organization の境界を越えてリソースにアクセスし続けることができます。
- 複数の TLG が同じ Organization に移管でき、複数の TLG をまたいで運用する企業やチームをサポートします。

## 検討した代替案

1. [シャドー Organization](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18453)

## 検討中のロールアウトオプション

### TLG ごとの自動 Organization 作成

TLG の `path` と `name` を Organization 属性として使用して、TLG ごとに 1 つの Organization を自動的に作成する。

以下の理由により却下されました:

- 一部の TLG は Organization を共有したい（例: `gitlab-org` と `gitlab-com`）。
  TLG の 30% はマルチ TLG Organization にマッチできると推定されています。
  自動的な 1 対 1 の作成では、追加のマージステップなしにこれを実現することができません。
- 自動作成された Organization の `path` と `name` はオーナーの意図を反映しない場合があり、
  TLG 属性から推測することはできません。
- 一部の機能では `organization_id` の書き換えコストが高くなります（例: Artifact Registry）。
  自動作成によりオーナーの認識や同意なしにこれらの書き換えが発生する可能性があります。
- GitLab.com には数百万の TLG が存在するため、自動移行は無視できない量の混乱と
  不正確な Organization の割り当てを引き起こす可能性があります。

### 自然な採用

却下されました:

オーナーによる TLG の移管は常に許可しますが、自然な採用のみに頼ることはできません。
このアプローチはスケールしません。

### 管理されたバルク移管（主要方法）

スケジュールに従って TLG を Organization に段階的に移行します（コホートに似た方式）。
移行の順序は、移行の複雑さとビジネス価値のバランスをとる分類体系
（[Epic 21393](https://gitlab.com/groups/gitlab-org/-/work_items/21393)）
によって決定されます。
これは一度きりの大規模イベントではなく、ツールが成熟し早期コホートから学びを得ながら、
ペースを調整・一時停止・変更できる継続的かつ時間の定められたプログラムです。

各 TLG は独自の Organization に移管されます（1 対 1 マッピング）。
マルチ TLG のグループ化を自動的に推測しようとはしません。
代わりに、オーナーが移管後に Organization をマージするためのツールを提供します（Issue TBC）。

TLG がバルクパスを経由して移行されると、作成される Organization は `unconfirmed`（未確認）状態で作成されます。
未確認状態では:

- Organization は存在し、TLG はその中で正常に動作します。
- Organization レベルの機能（UAM、Organization レベルの管理など）はまだ利用できません。

Organization オーナーが次に Organization に関わる際には、必須のオンボーディングフローを案内されます。
このフローでは、Organization オーナーが必要に応じてマージする他の TLG に関する情報を提供できます。
これにより、顧客が選択しなかった Organization 設定に驚かされることなく、
自らが移管を開始することを求められることもありません。

### オンデマンド（補助方法）

Organization への移行がまだ行われていない TLG が存在する場合があります。

Organization が必要な機能を採用するために、GitLab は TLG がまだ Organization に入っていなければ
自動的に Organization に配置します。
Organization オーナーも必須のオンボーディングフロー（上記参照）に案内されます。
