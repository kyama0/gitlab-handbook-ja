---
title: "Sales Operations 所有のプロビジョニング"
upstream_path: /handbook/sales/field-operations/sales-operations/sales-operations-owned-provisioning/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-12T00:00:00Z"
translator: claude
stale: false
---

## 手順

以下は、Sales 所有の各種システムで新規ユーザーをプロビジョニングする方法と、私たちが従うプロセスについての手順です。
[Sales Operations Access Request ボード](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1959331)

### Sales Operations Access Request のラベリングシステム

1. SalesOpsAR::Action Needed - Sales Ops のアクションアイテムが即時、または現 FQ 内に必要。
1. SalesOpsAR::In Progress - Sales Ops のアクションアイテムが現在進行中。
1. SalesOpsAR::On Hold - SalesOps AR がブロックされている、または現在の作業スコープ外。
   1. SalesOPS: Waiting on SFDC License - AR が保留される理由の 1 つ。
1. SalesOpsAR::Completed - この Issue について Sales Ops のタスクは完了している（Issue 自体はクローズされていない場合もある）。

### Sales Operations プロビジョニングワークフロー

### ベースラインテンプレート | 新入社員

1. オンボーディング Issue が 2 日目に AR を自動作成
1. テンプレートにより自動的に:
   - SalesOpsAR::Action Needed ラベルを追加
   - 担当者を空のままにする
   - プロビジョニング DRI として Amber と Meri を CC
1. 新しい AR が作成されると DRI にメールが届く
1. 全員が [Sales Ops Access Request ボード](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1959331) を能動的にモニタリングできる。
1. Sales Operations のチームメンバーが AR を受け持つとき、そのメンバーは:
    - 自分を Issue の担当者にアサインする
    - SaelsOpsAR::In Progress ラベルを追加する
1. 担当者は、すべての Sales Operations タスクアイテムを完了し、ラベルシステムを適切に運用しながら、AR を完了まで対応する責任を負います。
1. 担当者が不在の場合は、チームの他のメンバーがタイムリーに AR を前進させる責任を負います。進行中の AR は [Sales Ops Access Request ボード](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1959331) で能動的に確認できます。

### 個人または一括アクセスリクエスト

1. ユーザーは、[個人または一括 AR](/handbook/security/corporate/end-user-services/access-requests/access-requests/) を手動で作成
1. 手順内で、以下のタスクとともに Tech Stack ドキュメントに案内されます:
   - SalesOpsAR::Action Needed ラベルを追加
   - 担当者を空のままにする
   - プロビジョニング DRI として Amber と Meri を CC
1. 新しい AR が作成されると DRI にメールが届く
1. 全員が [Sales Ops Access Request ボード](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1959331) を能動的にモニタリングできる。
1. Sales Operations のチームメンバーが AR を受け持つとき、そのメンバーは:
    - 自分を Issue の担当者にアサインする
    - SaelsOpsAR::In Progress ラベルを追加する
1. 担当者は、すべての Sales Operations タスクアイテムを完了し、ラベルシステムを適切に運用しながら、AR を完了まで対応する責任を負います。
1. 担当者が不在の場合は、チームの他のメンバーがタイムリーに AR を前進させる責任を負います。進行中の AR は [Sales Ops Access Request ボード](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1959331) で能動的に確認できます。

### Chorus

1. Chorus の [Settings ページ](https://chorus.ai/settings/personal-settings) で **User Management** をクリックし、**Invite New User** ボタンをクリックします。
1. Chorus にユーザーを招待するには、指定フィールドにカンマ区切りでメールアドレスを入力し、**Add To List** ボタンをクリックします。
1. Role、Team、License Type を更新します。これらはユーザーの職務役割/リージョンに基づくもので、Access Request に記載または承認されているものを設定してください。判断に迷う場合は、同じタイトル/ロールでプロビジョニング済みの他のユーザーを参考にしてください。
1. **Send Invites** ボタンをクリックして、ユーザーを Chorus に招待します。

### DataFox

1. DataFox の右上にある自分の名前の下の [Settings ページ](https://app.datafox.com/settings/general-information) で、左側の **Team Management** をクリックします。
1. **Team Management** から **Invite Your Team** ボタンをクリックし、プロビジョニングするユーザーのメールアドレスを入力し、**Send Invitations** をクリックします。
1. Access Request で特に指定がない限り、ほとんどのユーザーは **Member ステータス** となります。
1. Access Request で特に指定がない限り、ほとんどのユーザーは **Bulk Sync Accounts** の権限を持ちます。

### Clari

### SalesForce
