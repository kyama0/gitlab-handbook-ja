---
title: "管理文書手順"
description: "GitLab は、期待されることを確立するポリシーや標準と、ポリシーや標準を実行に移す手順を通じて、コントロール活動を展開します。"
controlled_document: true
upstream_path: /handbook/security/controlled-document-procedure/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-19T20:38:24+00:00"
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## 目的

GitLab は、期待されることを確立するポリシーや標準と、ポリシーや標準を実行に移す手順を通じて、コントロール活動を展開します。

この手順の目的は、法的および規制上の要件を管理するための階層的アプローチを利用して、GitLab における管理文書の作成と維持に一貫性があることを保証することです。

GitLab には 2 種類の文書があります。

1. 管理文書 (Controlled Documents): 規制遵守、顧客の信頼、および/またはセキュリティのベストプラクティスのために維持される、ポリシー、手順、標準、またはガイドラインに関する変更管理された文書です。変更の承認は、[CODEOWNERS](https://docs.gitlab.com/user/project/codeowners/) ファイルを介して適切なメンテナーに制限されます。
1. 非管理文書 (Uncontrolled Documents): 厳密な変更管理が不要なその他すべての文書です。

GitLab の誰もが、管理文書の作成や変更提案のためにマージリクエストをいつでも提出することを歓迎・推奨されます。

## スコープ

この手順は、GitLab の法的、規制的、契約的要件を支援するために作成されたすべての[管理文書](#list-of-controlled-documents)に適用されます。非管理文書は本質的に動的であり、この手順の対象外です。

## 役割と責任

| 役割  | 責任 |
|-----------|-----------|
| Security Compliance チーム | 継続的なコントロール監視の一環として、セキュリティポリシーの実装と維持、およびそれを支える標準と手順の監督を担当 |
| Security Governance チーム | 管理文書の年次レビューの実施を担当 |
| Security Assurance マネジメント (Code Owners) | この手順への変更の承認を担当 |
| Control Owners | セキュリティポリシーと標準を支える手順の定義と実装を担当 |

## 手順

### 階層別の定義

![CD Pyramid](/images/security/security-assurance/CDPyramidv2.png)

- ポリシー (Policy): ポリシーは意図の高レベルな表明であり、GitLab の目標、目的、文化を定義します。法的、規制的、または契約的義務がポリシー存在の根本原因となるのが一般的です。ポリシーは組織レベルで一元管理されるよう設計されています (例: Security Compliance チームや Legal & Ethics Compliance チーム)。
- 標準 (Standard): 標準とは、ポリシーの実装を可能にする具体的な詳細を提供することで、正式なポリシーをサポートし方向性を与える、必須の行動またはルールです。標準は技術図の形を取ることがあります。
- 手順 (Procedure): 手順は、特定のポリシー、および該当する場合には支援する標準を達成するための詳細な指示で、従うべきステップバイステップの指示を提供します。手順は分散管理され、セキュリティコントロールがビジネスプロセスに翻訳されるプロセス/コントロールオーナーが管理します。

### 作成

最低限、管理文書は以下の主要なトピック領域をカバーする必要があります。

- 目的: なぜ管理文書が実装されるのかの概要。
- スコープ: 管理文書が誰または何に適用されるか。
- 役割と責任: 誰が何を担当するか。これは、特定の個人ではなく、部門や役割を指す必要があります。
- ポリシーステートメント、標準、または手順: 詳細。
- 例外: 管理文書の例外がどのように追跡されるかを定義します。
- 参考資料: 手順文書は、統治するポリシーまたは標準にマッピングされ、1 つ以上の手順またはその他の非管理文書に関連する場合があります。

### 公開

管理文書の作成または変更は、公開前に Code Owners ファイルで定義された所有部門のマネジメントまたは正式に指名された代表者の承認を得る必要があります。

ほとんどの管理文書は、当社の公開[ハンドブック](/) に公開されます。ただし、管理文書に[非公開データ](/handbook/security/policies_and_standards/data-classification-standard/) が含まれている場合は、*社内向けのみ* のメカニズム (例: 社内 GitLab プロジェクトや社内向けハンドブックページ) を介して公開する必要があります。管理文書は、すべての社内チームメンバーがアクセスできる必要があります。

#### ハンドブックヘッダー

管理文書を分類するには、[管理文書用ハンドブックフロントマター属性](http://handbook.gitlab.com/docs/frontmatter/) が必要です。この属性は警告ヘッダーもレンダリングします。

監査向けの管理文書については、フロントマターの下に以下のラベルを追加してください。

```{{< label name="Visibility: Audit" color="#E24329" >}}```

監査向けでない管理文書については、フロントマターの下に以下のラベルを追加してください。

```{{< label name="Visibility: Non-Audit" color="#428BCA" >}}```

これを行う方法の例が必要な場合は、WebIDE でこのページを確認してください。

### レビュー

管理文書は、少なくとも年 1 回レビューおよび承認される必要があります。管理文書は、ビジネス運営の必要に応じてアドホックに更新される場合があります。マージ前に、変更は管理文書のコードオーナーによって承認される必要があります。

管理文書のレビュアーには以下が求められます。

1. 説明で[「何ではなく、なぜを言う」透明性](/handbook/values/#say-why-not-just-what) が容易に理解されるようにします。タイトルは簡潔でありながら、何についてかが明確である必要があります。
1. チームメンバー向けの告知がスケジュールされていることを確認し ([Slack、社内ニュースレター](/handbook/people-group/employment-branding/people-communications/))、[マージリクエストテンプレートのタスク](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Default.md) にチェックを入れます。

#### 管理文書一覧 {#list-of-controlled-documents}

現在の管理文書の正確なリストは[こちら](https://codeowners-report-schedule-gitlab-com-gl-securit-4422acedb936dd.gitlab.io/) で確認できます。

## 例外

管理文書に対する例外は、監査可能な形式で管理文書承認者によって追跡・承認される必要があります。例外プロセスは各文書で定義されている必要があります。

規制、コンプライアンス、機密性、完全性、可用性などの情報セキュリティ要件は、企業が一元的にサポートまたは推奨される業界標準を採用するときに最も容易に満たされます。GitLab は最小権限の原則の下で運営していますが、一元的にサポートまたは推奨される業界の技術が、特定の職務やビジネスニーズに対して常に実現可能とは限らないことを理解しています。前述の標準または推奨技術からの例外は推奨されません。ただし、管理文書の例外について合理的で正当化可能なビジネス上および/または研究上のケースがある場合、リソースが代替技術を適切に実装・維持するのに十分である場合、本書および関連文書で示されたプロセスに従い、他のポリシーや標準が遵守される場合は、考慮される可能性があります。

チームメンバーが標準的なビジネスの流れまたはポリシーで許可されているものから例外を必要とする場合、リクエスターは Issue テンプレートで概説された要素を最低限含む[例外申請](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance-and-field-security/governance/security-governance/-/issues/new?issuable_template=controlled_documents_exception_request) を Security Assurance 部門に提出する必要があります。

例外申請の承認要件は、Issue テンプレート内に記載されています。リクエスターは、承認マトリクスに従って承認を提供する必要がある適切な個人にタグを付ける必要があります。

ビジネスが承認決定に対して異議を申し立てたい場合、その異議は legal@gitlab.com の Legal に送られます。Legal は、例外が承認された場合の会社へのリスクの提案について意見を起草します。Legal の意見は、最終決定のために CEO と CFO に転送されます。

例外承認は以下を満たす必要があります。

- 暴露および/または被害を低減するための補償コントロールが推奨されること (例: 財務的に重要なシステムへの管理者権限には、システム内のユーザー活動の監査ログとレビューが必要な場合がある)
- 関連する例外申請 Issue にキャプチャされること。Issue の "Approvals" 領域のすべてのセクションが入力されている必要がある。

例外申請が提出されると、以下の一般的なフローが開始されます。

- リクエスターは、例外申請の種類に応じて、自部門長またはポリシー、標準、もしくは手順のメンテナーから承認を受けます。
- リクエスターの部門で承認された後、関連する文書を所有するチームが例外申請をレビューします。
  - Security Compliance は、例外申請に現在または将来のコンプライアンスへの影響があるかを判定します。
  - Controlled Document Owner は、適切な補償コントロールが文書化されていることを確認するためにリクエストをレビューし、リクエストに関連する全体的なリスクレベルを判定する際に Security Compliance や他の SME からの入力を考慮します。
- Controlled Document Owner は最終決定を文書化し、必要に応じて、例外申請からのリスクを軽減するための推奨アクションプランを文書化します。
- 例外は中央の例外管理スペースに記録されます。
- 例外は、有効期限が近づくにつれてレビューされ、例外の延長には新規の承認された延長申請が必要になります。

## 参考資料

- [GCF Compliance Controls](/handbook/security/security-assurance/security-compliance/sec-controls/)
- [Data Classifiation Standard](/handbook/security/policies_and_standards/data-classification-standard/)
- [Controlled Documents Work Instruction](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance/controlled-documents-program/-/blob/main/runbooks/controlled_document_annual_review_work_instruction.md)
