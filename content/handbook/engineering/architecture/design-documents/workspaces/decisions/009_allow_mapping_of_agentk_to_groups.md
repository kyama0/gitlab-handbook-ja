---
title: "Workspaces ADR 009: GitLab Agent for Kubernetes（agentk）をグループにマッピングできるようにする"
upstream_path: /handbook/engineering/architecture/design-documents/workspaces/decisions/009_allow_mapping_of_agentk_to_groups/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-03-19T23:08:59-07:00"
---

### コンテキスト

[003: ワークスペースを作成・アクセスするためのユーザー認可](./003_authorizing_user_to_create_and_access_workspace.md)において、ユーザーがワークスペースを作成する際に使用できる GitLab Agent for Kubernetes は、ワークスペースを作成するプロジェクトと GitLab Agent for Kubernetes が登録されているプロジェクトの共通の祖先となるグループ・サブグループのいずれかで、少なくとも Developer アクセスを持っているものに限定することを決定しました。

この制約は本質的に制限が多く、ユーザーがワークスペースを作成したいプロジェクトにのみ Developer アクセスを持ち、その親グループには持っていないケースが多数あります。さらに、この方法は潜在的なセキュリティリスクになり得ます。限られたスコープ内で Developer ロールを持つユーザーが GitLab Agent for Kubernetes を登録でき、階層を共有する他のプロジェクトへの適切なアクセス権を持つユーザーがワークスペース作成に利用できてしまうためです。ワークスペースにはシークレットなどの機密情報が含まれるため、ユーザーがワークスペースを作成する際に利用できる GitLab Agent for Kubernetes に対してより厳格な管理が必要です。

### 決定事項

[003: ワークスペースを作成・アクセスするためのユーザー認可](./003_authorizing_user_to_create_and_access_workspace.md)で導入された認可ルールを、GitLab の CI/CD ランナーの認可モデルを参考に、以下のルールに置き換えることを決定しました。

- ユーザーは `remote_development` 向けに設定された「利用可能」な GitLab Agent for Kubernetes を使用してのみワークスペースを作成できます。
- ユーザーはエージェントプロジェクトとワークスペースプロジェクトの両方で Developer ロールを持っている必要があります。
- グループオーナーまたは管理者がワークスペースプロジェクトのいずれかの親グループに GitLab Agent for Kubernetes をマッピングしている場合、そのエージェントはワークスペースでの使用に対して「利用可能」とみなされます。別の見方をすると、GitLab Agent for Kubernetes とグループのマッピングはサブグループに継承されます。
- GitLab Agent は親グループにのみマッピングできます。
  対象のグループは直接の親である必要はありません。
  例えば、エージェントが `root-group/nested-group/agent-project` というパスのプロジェクトに属する場合、そのエージェントは `root-group` および/または `nested-group` にマッピングできます。

デフォルトでは、どの GitLab Agent for Kubernetes もグループにマッピングされていません。また、プロジェクトがグループ内に存在するとしても、そのプロジェクトの GitLab Agent for Kubernetes が親グループにマッピングされたことを意味するわけではありません。

GitLab Agent はグループにのみマッピングできます。将来的には、インスタンス、個人のネームスペースなどへの GitLab Agent for Kubernetes のマッピングについても検討する予定です。

詳細は[こちら](https://gitlab.com/gitlab-org/remote-development/gitlab-remote-development-docs/-/blob/9adfc89e9be5b1e419d47d695d39ad04e778033e/doc/tech-designs/2024-01-23-support-group-agent-authorization.md)をご参照ください。

### 影響

新しいルールは既存のルールと互換性がないため、この機能はフィーチャーフラグの後ろに置かれ、段階的にロールアウトされます。また、機能ロールアウト中にスムーズなユーザー体験を提供するため、ルートグループとそのグループ内のワークスペース GitLab Agent for Kubernetes の間のマッピングを作成する一回限りのデータ移行が実施されます。この移行後、ワークスペース作成時に利用可能な GitLab Agent for Kubernetes のリストに変更を加えたい場合は、ユーザーが明示的にマッピングを作成・削除する必要があります。

### 代替案

[GitLab Agent for Kubernetes の設定で、どのグループとプロジェクトがエージェントを使用して新しいワークスペースを作成できるかを指定する](https://gitlab.com/gitlab-org/remote-development/gitlab-remote-development-docs/-/blob/9adfc89e9be5b1e419d47d695d39ad04e778033e/doc/tech-designs/2024-01-23-support-group-agent-authorization.md#past-proposal)方法を検討しました。しかし、この方法では限られた権限を持つユーザーが階層上位のグループ・プロジェクトに対してインフラ機能を公開できてしまうという、上記のセキュリティ上の懸念点が解消されませんでした。
