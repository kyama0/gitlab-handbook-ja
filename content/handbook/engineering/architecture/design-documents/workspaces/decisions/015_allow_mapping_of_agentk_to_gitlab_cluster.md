---
title: "Workspaces ADR 015: GitLab Agent for Kubernetes（agentk）を GitLab クラスターにマッピングできるようにする"
upstream_path: /handbook/engineering/architecture/design-documents/workspaces/decisions/015_allow_mapping_of_agentk_to_gitlab_cluster/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-03-19T23:08:59-07:00"
---

## コンテキスト

[009: GitLab Agent for Kubernetes（agentk）をグループにマッピングできるようにする](./009_allow_mapping_of_agentk_to_groups.md)において、ユーザーが GitLab Agent for Kubernetes（agentk）をグループにマッピングできるようにすることを決定しました。これにより、顧客は Workspaces を使用したいすべてのグループに agentk をマッピングする必要があります。セルフマネージドの顧客は、GitLab クラスター内のすべてのグループに agentk をマッピングするより簡単な方法を求めています。

## 決定事項

ユーザーが GitLab Agent for Kubernetes（agentk）を GitLab クラスターにマッピングできるようにすることを決定しました。これにより、セルフマネージドの顧客が GitLab クラスター内のすべてのプロジェクトに対して 1 つの agentk を簡単にマッピングできるようになります。

詳細は[こちら](https://gitlab.com/groups/gitlab-org/-/epics/16485)をご参照ください。

## 影響

agentk をすべてのプロジェクトにマッピングするより簡単な方法を提供しなければ、顧客にとって障壁となり、導入と利用に影響します。

## 代替案

[agentk を GitLab クラスター内の別のトップレベルグループ配下のネームスペースにマッピングできるようにする](https://gitlab.com/gitlab-org/gitlab/-/issues/463455)ことを検討しました。しかしこれでも、より上位レベルのマッピング（すなわち GitLab クラスター）の必要性が残ることになります。
