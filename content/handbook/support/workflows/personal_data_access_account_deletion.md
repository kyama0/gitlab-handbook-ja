---
title: アカウント削除＆データアクセスリクエスト - はじめに
category: GitLab.com
subcategory: Legal
description: "アカウント削除およびデータアクセスリクエストに関する職務範囲とスコープの説明。"
controlled_document: true
upstream_path: /handbook/support/workflows/personal_data_access_account_deletion/
upstream_sha: 37ce9f1fc6cb7cd8a0a8cf470c0de27d2cb53329
translated_at: "2026-10-24T21:12:05.163783+00:00"
translator: claude
stale: false
lastmod: "2026-10-21T15:31:22-04:00"
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## 目的 {#purpose}

このドキュメントでは、アカウント削除およびデータアクセスリクエストとは何か、また各リクエストのさまざまな側面の処理を誰が担当するかの概要を提供します。Support Engineer として各タイプのリクエストをどのように処理するかを学ぶには、[ワークフローページ](/handbook/support/workflows/account_deletion_access_request_workflows)を参照してください。

多くのグローバルおよび各国のデータプライバシー法のもと、ユーザーは GitLab SaaS アカウントと、私たちがそのユーザーについて保管しているその他すべての情報の削除をリクエストできます。また、自身のデータに関するより詳細な情報、すなわち GitLab がそのユーザーについて **どのような** データを保管しているかについての情報の取得もリクエストできます。

データ削除をリクエストするユーザーは、リクエスト送信時に削除の意思を確認することが要求されます。GitLab SaaS および完全削除リクエストに **限り**、ユーザー名、メールアドレス、有償ネームスペースのメンバーシップに関するフォーム入力が自動で検証されます。それ以外のすべてのリクエストは、追加の改善が実装されるまでは手動レビューおよび（該当する場合の）検証が必要です。

## スコープ {#scope}

このプロセスは、個人ユーザーまたは法人 GitLab SaaS サブスクリプション保有者およびお客様の双方から提出される個人データリクエストに適用されます。法人サブスクリプション保有者からのアカウント削除リクエストには、現行の GitLab サブスクリプション契約を持つ有償ネームスペースアカウント保有者による検証と承認が必要です。この承認プロセスの一環として、有償ネームスペースのアカウント保有者（オーナー）は、サブスクリプション保有者（ユーザーアカウント）を有償ネームスペースから削除する必要があります。

## 役割と責任 {#roles-and-responsibilities}

| 役割 | 責任 |
| ---- | ------ |
| Support Team | この削除プロセスのハンドブックページおよび関連する削除リクエストプロジェクトと Issue テンプレートのメンテナンス |
| Support and Legal Team | この標準への重要な変更の承認 |
| Support and Legal Team | この標準に対する例外の承認 |
| Support Global Readiness | リソース、すなわちリクエストを期限内に完了するのに十分な数の Support Engineers がいることを確保する責任 |
| GitLab system owners | このプロセスを通じて作成されたデータ削除 Issue で要求された通り、各システムでユーザー削除を処理する |

## 手順 {#procedure}

このドキュメントでは、アカウント削除およびデータアクセスリクエストの概要を説明します。Support Engineers が各種類のリクエストを処理する際に従う必要がある詳しい手順については、[アカウント削除およびデータアクセスリクエストのワークフロー](/handbook/support/workflows/account_deletion_access_request_workflows)ページを参照してください。

大まかな流れは以下のとおりです。

1. リクエストの種類に応じて提出および検証を行います。GitLab SaaS の完全削除リクエストでは、ユーザー名、メールアドレス、有償ネームスペースのメンバーシップに関するフォーム入力を自動で検証します。それ以外のすべてのリクエストには手動レビューが必要です。
1. 法人サブスクリプションのアカウント削除には、有償ネームスペースのアカウント保有者による検証と承認が必要です。アカウント保有者は、サブスクリプション保有者を有償ネームスペースから削除する必要があります。
1. GitLab system owners は、作成されたデータ削除 Issue に記載されているとおり、対象となる各システムで削除またはアクセスリクエストを処理します。

## 例外 {#exceptions}

この手順への例外は、[情報セキュリティポリシー例外管理プロセス](/handbook/security/controlled-document-procedure/#exceptions)に従って追跡されます。

## 参考資料 {#references}

- [Controlled Document Procedure](/handbook/security/controlled-document-procedure)
- [アカウント削除およびデータアクセスリクエストのワークフロー](/handbook/support/workflows/account_deletion_access_request_workflows)
