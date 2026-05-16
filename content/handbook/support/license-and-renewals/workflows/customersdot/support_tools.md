---
title: CustomersDot 管理者サポートツール
category: CustomersDot
description: L&R リクエストで CustomersDot 管理者サポートツールを使用する方法。
upstream_path: /handbook/support/license-and-renewals/workflows/customersdot/support_tools/
upstream_sha: 6c73093986242c762a8f4a2769fbfba69b31fcf9
translated_at: "2026-05-08T13:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-08T15:49:17+00:00"
---

## 概要

このワークフローでは、L&R 関連タスクで CustomersDot 管理者サポートツールを使用する方法を詳しく説明します。

CustomersDot 管理者サポートツールの実装は、この [エピック](https://gitlab.com/groups/gitlab-org/-/epics/6828) で追跡されています。

## ツールの場所

CustomersDot 管理者サポートツールは https://customers.gitlab.com/admin にログインして見つけられます。左パネルの **Support** セクションまでスクロールします。

**Support** セクションでは、次のツールから選択できます:

### Namespace Controls (SaaS) {#namespace-controls-saas}

名前空間制御には複数のタブがあります。

> **重要**: 変更前 **と** 変更後 で追加の compute 分数およびストレージを必ず再確認し、メモを取ってください。

名前空間は、管理者として、または [API を使って](https://docs.gitlab.com/api/namespaces/)、または [Zendesk Super App](/handbook/security/customer-support-operations/zendesk/apps/global#gitlab-super-app) で表示できます。

#### 追加 CI 分数を設定

`New minutes total` フィールドで指定した値を、顧客の名前空間への追加 compute 分として設定できます。

> **警告:** この方法で追加された compute 分数は、使い切るまで **無期限** に残ります。「extra compute minutes」をトライアル期間中だけ提供したい場合は、Manage GitLab Plan and Trials オプションを使ってください。これはトライアル期間中、有料プランのクォータに合わせて *使用クォータ* を変更します。トライアルプランの月次クォータを編集できるようにするための [open issue 13063](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/13063) があります。

フォームには 3 つの必須フィールドがあります:

- **Namespace ID/Path**: URL に表示される顧客の名前空間パス、または ID。
- **New minutes total**: 設定する compute 単位の値。名前空間に X 単位の compute を追加したい場合:
  - 現在の "Additional Units" の値（Y）を確認する
  - 現在の単位（Y）+ 追加したい新しい単位（X）を加算する
  - その合計を "New minutes total" フィールドに入力する
たとえば、追加 Compute Units が合計 6000 の名前空間に 1000 単位を追加するには、"New minutes total" フィールドに 7000 を設定します。（***注:** これにより、名前空間の「使用クォータ」ページの「Additional Units」の値が更新されます。* ）
- **Zendesk ticket link**: リクエストが送られた関連 Zendesk チケットへのリンク。

##### パイプライン実行のクレジットカード検証をバイパスする

*以前の名称: `Enable CI Minutes`*

セールス支援トライアルに参加しているグループの compute 分数の使用制限を解除します。これは [GitLab.com アカウント作成時の本人確認](/handbook/support/workflows/reinstating-blocked-accounts/#accounts-experiencing-problems-verifying-with-a-credit-card-andor-phone-number) と混同しないでください。制限を解除するには、名前空間に追加の compute 分数がない場合に 10 分の追加 compute を加算します。

- **Namespace ID/Path**: URL に表示される顧客の名前空間パス、または ID。
- **New minutes total**:
  - 現在の "Additional Units" の値を確認します。
  - "Additional Units" が 0 または存在しない場合、値を 10 に設定します。
  - すでに "Additional Units" が設定されている場合は、更新の必要はありません。判断に迷う場合は Slack でガイダンスを求めてください。
- **Zendesk ticket link**: リクエストが送られた関連 Zendesk チケットへのリンク。

#### 追加ストレージを設定

`New extra storage (MiB)` フィールドで指定した値に、名前空間の [追加ストレージ](https://docs.gitlab.com/user/usage_quotas/#excess-storage-usage) を設定します。

- **Namespace ID/Path**: URL に表示される顧客の名前空間パス、または ID。
- **New extra storage (MiB)**: 設定する新しいストレージ容量（MiB 単位）
- **Zendesk ticket link**: リクエストが送られた関連 Zendesk チケットへのリンク。

> 注意: ストレージは MB で入力されますが、UI では大きい値の場合 GB として表示されることに留意してください。たとえば: `10000 MB = 9.76 GB` です。「10 GB のストレージ」を設定したい場合は、`10240` を使ってください（`10240 MB = 10 GB` になります）。

#### サブスクリプションを解除 (Clear Subscription)

サブスクリプションからグループのリンクを解除します。注意: 解除されるサブスクリプションが Premium または Ultimate の場合、グループは Free にダウングレードされます。

- **Subscription ID/name**: 名前空間から削除するサブスクリプションの ID／名前。
- **Zendesk ticket link**: リクエストが送られた関連 Zendesk チケットへのリンク。

#### 強制関連付け (Force Associate) {#force-associate}

サブスクリプションにグループを関連付けます。すべてのフィールドが必須です。

- **Namespace ID/Path**: URL に表示される顧客の名前空間パス、または ID。
- **Subscription ID/name**: 名前空間から削除するサブスクリプションの ID／名前。
- **Zendesk ticket link**: リクエストが送られた関連 Zendesk チケットへのリンク。

#### Reset max seats

現在のサブスクリプション期間中に、その名前空間で使われた最大シート数を変更します。これは通常、[QSR 用の reset max seats ワークフロー](/handbook/support/license-and-renewals/workflows/quarterly_subscription_reconciliations/#resolving-max-seats-overages) でのみ使用すべきです。

##### 注意

これにより GitLab.com サブスクリプションで未払いとなる総シート数が変わります。このオプションを使う前にサポートマネージャーに相談してください。

- **Namespace ID/Path**: URL に表示される顧客の名前空間パス、または ID。
- **Max Seats number**: 最大シート数の新しい値。
- **Zendesk ticket link**: リクエストが送られた関連 Zendesk チケットへのリンク。

### Support Audit Events

Support Audit Events ページは、Support Admin Tools 経由で実行されたすべてのアクティビティを追跡し、記録する包括的な監査ログとして機能します。このページには管理アクションの時系列の記録が提供され、サポートチームメンバーや管理者がいつ誰が何を行ったかをサポートシステム内で確認できます。

このページの主な機能は次のとおりです:

- 使用された特定の Support Admin Tools のアクションエントリ
- アクションが名前空間で実行された場合、その Namespace ID
- アクションに関連する Zendesk リンクを示す Request link
- 各アクションを実行した人を示す Requester
- すべての Support Admin アクションのタイムスタンプ付きエントリ

検索する特定のフィールドを選択するには、ページ右上の **Add filter** ボタンを使ってください。

### Trial Changes (SaaS)

名前空間のトライアルを更新します。次のケースで使用できます:

1. トライアルのキャンセル
1. トライアル
    1. プラン変更
    1. 日付の更新／延長

**重要な制限:**

- 名前空間に CustomersDot のトライアルがすでに存在する場合のみ、トライアルを延長または編集できます。顧客がトライアルを開始していない場合は、グループの請求ページ（https://gitlab.com/groups/[NAMESPACE-PATH]/-/billings）からトライアルを開始するよう依頼してください。
- CustomersDot でトライアルを変更または延長しても、有料プランに合わせた CI 分数の自動増加は行われません。追加の CI 分数が必要な場合は、Set extra CI minutes ツールまたは GitLab Admin を適切に使ってください。
- 有料サブスクリプション期間の延長（一時的なサブスクリプション延長）は CustomersDot サポートツールではまだ利用できません。これは EPIC [[Phase 2c] Add Support admin capability to extend an almost expiring subscription](https://gitlab.com/groups/gitlab-org/-/work_items/17745) で追跡しています。このような状況では、アカウントエグゼクティブに更新オポチュニティから既存の [SFDC の一時的な更新延長プロセス](/handbook/product/groups/fulfillment/#temporary-renewal-extensions) を使うよう案内してください。

#### Cancel Add-on Trial

このツールは、名前空間にすでに Premium または Ultimate プランがあり、その名前空間で Duo Enterprise または Duo Pro をトライアルしている場合に適用されます。このツールは Premium または Ultimate プランに影響を与えずに、名前空間からアドオントライアル（Duo Enterprise または Duo Pro）を削除します。

- **Namespace ID/Path**: URL に表示される顧客の名前空間パス、または ID。
- **Add-on name**: ドロップダウンリストから関連するアドオン名を選択します。
- **Zendesk ticket link**: リクエストが送られた関連 Zendesk チケットへのリンク。

#### Update or Cancel a Trial

特定のトライアルまたは名前空間を検索します。

##### Update

**Edit** を選択 ![icon](https://gitlab.com/gitlab-org/gitlab-svgs/-/raw/main/sprite_icons/pencil.svg)

- **End Date**: 更新後にプランが終了する日付。
- **Plan**: 顧客のグループに適用したいトライアルプラン。`x Clear` オプションが選択された場合、顧客の名前空間は即座にダウングレードされ、トライアルが終了します。
- **Zendesk ticket link**: リクエストが送られた関連 Zendesk チケットへのリンク。

##### Cancel

**Cancel trial** を選択 ![icon](https://gitlab.com/gitlab-org/gitlab-svgs/-/raw/main/sprite_icons/cancel.svg)

- **Zendesk ticket link**: リクエストが送られた関連 Zendesk チケットへのリンク。

### Trials for SM

選択した日付に期限切れとなるレガシートライアルライセンスを作成し、フォームで指定された顧客のメールアドレスに送信します。
この機能の使用は、L&R が対応できないとき（週末など）の緊急ライセンスリクエストに限定すべきです。

- **Email**: ライセンスを送信するメールアドレス。特に指定がない限り、チケットリクエスト者のメールアドレスへの送信を推奨します。
- **Users count**: ライセンスのユーザー総数。
  - Self-Managed ライセンスの場合、GitLab は現在の請求対象ユーザー数より少ないライセンスキーのインストールを拒否します。したがって、トライアルライセンスの **User Count** は、*少なくとも* 現在の請求対象ユーザー数 + 未払いの true-up（あれば）と同じ数にする必要があります。たとえば、現在の請求対象ユーザーが 25 人で、true-up 未払いが 5 件あれば、**User Count** を少なくとも 30 にしてください。
- **Plan code**: ライセンスのプラン。
- **Starts at**: ライセンスの開始日。
- **Expires at**: ライセンスの有効期限。
- **Note**: 必要に応じた追加メモ。
- **Zendesk ticket link**: リクエストが送られた関連 Zendesk チケットへのリンク。

ライセンスメールには `10-day Trial GitLab License` と記載されることに注意してください。混乱を避けるため、有効期限は今から 10 日後に設定することを推奨します。**Starts at** や **Expires at** などの不要なフィールドを削除する [Issue](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/12035) があります。

### GitLab.com アカウントのリンクを解除

提供された CustomersDot アカウントに紐付いた GitLab.com アカウントのリンクを解除します。

- CustomersDot アカウントを表示します
- `Unlink GitLab User` タブをクリックします
- GitLab.com アカウントの情報が正しいことを確認します
- リクエストが送られた Zendesk チケットへのリンクを提供します
- `Confirm` をクリックします
