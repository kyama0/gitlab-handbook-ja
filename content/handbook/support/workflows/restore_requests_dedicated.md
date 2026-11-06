---
title: GitLab Dedicated における削除データ復元リクエスト
category: GitLab Dedicated
description: "お客様から GitLab Dedicated 上で削除されたプロジェクトまたはグループの復元を依頼された場合のワークフロー"
last-reviewed: 2025-03-13
upstream_path: /handbook/support/workflows/restore_requests_dedicated/
upstream_sha: a2c133ac0b90478eaeb060e8ad64034a95cee1b8
translated_at: "2026-11-06T21:13:06.548515+00:00"
translator: claude
stale: false
lastmod: "2026-11-05T15:54:57-05:00"
---

## 概要 {#overview}

このワークフローは、お客様から GitLab Dedicated インスタンスで削除されたプロジェクトまたはグループを復元するよう依頼された場合に使用します。このワークフローは、特にプロジェクトとグループの削除に関する取り扱いを対象としています。

## プロセス {#process}

1. お客様と協力して、データを復旧するためのセルフサービス選択肢を検討します。具体的には:
   1. お客様に[削除保留中のプロジェクトを表示](https://docs.gitlab.com/user/project/working_with_projects/#delete-a-project)していただきます。プロジェクトの遅延削除が有効になっている場合は、[**削除されたプロジェクトを復元**](https://docs.gitlab.com/user/project/working_with_projects/#restore-a-project)できる可能性があります。
   1. お客様のチームメンバーが[ローカルクローンを `git push`](https://docs.gitlab.com/topics/git/project/) することで対応できるか確認していただきます。ただし、プロジェクトの Issue、マージリクエスト、設定などは復旧されないことを明確にお伝えください。
1. お客様がセルフサービスでの復旧ができない場合、これ以上リクエストにご対応できないことをお伝えします。

このようなお知らせをお客様にどのように伝えればよいか不明な場合は、[#support_gitlab-dedicated](https://gitlab.enterprise.slack.com/archives/C058LM1RL3V) で質問するか、お客様の CSM にガイダンスを求めてください。

GitLab Dedicated の[ディザスタリカバリ](https://docs.gitlab.com/administration/dedicated/disaster_recovery/)機能は、完全な災害復旧シナリオを想定したものです。

## 追加のリソース {#additional-resources}

- [削除データ復元リクエスト](restore_requests.md)（GitLab.com 向け）
- [GitLab のプロジェクトおよびグループの遅延削除機能のアップデート](https://about.gitlab.com/blog/2023/04/03/delayed-deletion/)
