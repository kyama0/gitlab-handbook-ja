---
title: GitLab.com のカスタムリミット
category: GitLab.com
description: "GitLab.com（SaaS）にのみ適用される一部のリミットの概要を提供します"
upstream_path: /handbook/support/workflows/gitlab-com_customizations/
upstream_sha: 47fdb6582389288bed0f04a23aa5d972c3ce1ff5
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
---

## 概要

[インフラストラクチャチーム](/handbook/engineering/infrastructure/) は GitLab.com の進化を推進する責務を負っています。彼らは私たちの最大の GitLab インスタンスを管理および監視しています。

GitLab.com には固有のカスタマイズが施されています。これらのカスタマイズは [chef-repo](https://gitlab.com/gitlab-com/gl-infra/chef-repo)（社内）で管理されています。

## GitLab.com に適用されるリミット

これらのリミットは予告なく変更される可能性があります。

Gitaly ノードについては、特定のリミットは異なる環境向けに `default_attributes` => `omnibus-gitlab` => `gitlab_rb` => `gitaly` => `concurrency` 配下に記載されています。

<!-- vale handbook.Repetition = NO -->
- [本番（production production）用](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/master/roles/gprd-base-stor-gitaly-common.json)
- [カナリア本番（canary production）用](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/master/roles/gprd-base-stor-gitaly-cny.json)
- [メインステージ（main stage）用](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/master/roles/gprd-base-stor-gitaly.json)
<!-- vale handbook.Repetition = YES -->
