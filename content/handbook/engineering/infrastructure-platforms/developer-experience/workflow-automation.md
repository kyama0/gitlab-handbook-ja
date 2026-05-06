---
title: "Workflow Automation"
upstream_path: "/handbook/engineering/infrastructure-platforms/developer-experience/workflow-automation/"
upstream_sha: "6a459a3ca969603754a3b5133342edb804d3012c"
translated_at: "2026-04-28T21:28:32Z"
translator: claude
stale: false
---

Engineering Productivity チームは、GitLab の内部ワークフロー自動化のためのツールとプロセスを所有しています。[Triage-ops](https://gitlab.com/gitlab-org/quality/triage-ops) は EP チームが管理する主要なプロジェクトの一つであり、GitLab チームメンバーが Issue、MR、epic を自動的にトリアージできるようにします。

## ワンオフラベル移行

チーム構造の変更があった際に、既存の Issue、MR、epic 上のラベルを更新するためのワンオフラベル移行を実行する必要があることがよくあります。最大の効率を得るために、各チームメンバーが自分で移行を実行することを推奨します。最速の結果を得るために、以下の手順に従ってラベル移行のマージリクエストを開始してください。EP チームは必要に応じてレビューと移行の実行を支援できます。

### ラベル移行の始め方

これらのワンオフラベル移行は triage-ops のパイプライン内で実行されます。ワンオフラベル移行ポリシーを含む MR を [triage-ops](https://gitlab.com/gitlab-org/quality/triage-ops) に作成してください。

ドキュメントと例については [One-off Policies](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/doc/scheduled/index.md#one-off-policies) を参照してください。

### 一般的なシナリオと MR の作成方法

#### グループ/カテゴリ/ステージの名前変更

例:

- [`category:Pods` を `category:Cell` に名前変更](https://gitlab.com/gitlab-org/quality/triage-ops/-/issues/1270)

グループ G が新しく作成されたグループ名 A に名前変更される場合。必要なアクション:

1. ラベルページで [`group::G` ラベル](https://gitlab.com/groups/gitlab-org/-/labels) を見つけ、タイトルと説明を更新します。
2. 新しいラベルはそれまで存在しなかったため、古いラベル名を保持する必要はなく、ラベル移行を実行する必要はありません。

#### グループ/カテゴリ/ステージのマージ

例:

- [`group::organization` を `group::pods` にマージ](https://gitlab.com/gitlab-org/quality/triage-ops/-/merge_requests/2049)
- [`Category:Authentication and Authorization` と `Category:Permissions` を `Category:System Access` にマージ](https://gitlab.com/gitlab-org/quality/triage-ops/-/merge_requests/2022)

グループ G が既存のグループラベルである グループ B にマージされる場合。必要なアクション:

1. `group::B` を適用し `group::G` を削除することで、グループ G でラベル付けされたすべてのリソースを移行します。
2. タイトルに `[DEPRECATED]` を追加してラベルの説明を更新し、削除予定日を設定することで、[group::G ラベル](https://gitlab.com/groups/gitlab-org/-/labels?search=group::G) を非推奨にします。
3. グループ B は既に存在するため `group::G` を `group::B` に単純に名前変更できないことから、ワンオフラベル移行の実行が必要です。

#### グループのステージまたはカテゴリ変更

例:

- [CI Variables をパイプラインオーサリングからパイプラインセキュリティに更新](https://gitlab.com/gitlab-org/quality/triage-ops/-/merge_requests/2053)

グループ G がステージ S に属し、カテゴリ C を担当していたが、構造変更後にグループ G がステージ T の一部となり、カテゴリ CC を担当するようになった場合。必要なアクション:

1. グループ G でラベル付けされたすべてのリソースを見つけ、`devops::S` と `Category:C` を削除して `devops::T` と `Category:CC` を追加します。

### ラベル移行の実行方法

ワンオフポリシーを含むマージリクエストが作成されたら、移行パイプライン内で作成されたドライランジョブでラベル移行を開始します。ドライランを実行すると、この移行によって影響を受けるリソースとその数をプレビューできます。MR パイプラインで `dry-run` ジョブを見つけて実行してください。ドライランにリストされた影響リソースが正しいことを確認したら、実際の移行ジョブに進むことができます。

ドライランジョブの見つけ方に困った場合は、[パイプラインの例](https://gitlab.com/gitlab-org/quality/triage-ops/-/pipelines/801902517)を参照してください。パイプラインの `one-off` ステージに進むと、一方が `dry-run` とマークされた 2 つの移行ジョブが表示されます。

ジョブ名が正しく定義されていることを確認するために、[One-off Policies ドキュメント](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/doc/scheduled/index.md#one-off-policies) に従ってください。
