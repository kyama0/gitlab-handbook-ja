---
title: GitLab Self-Managed のトライアルおよび延長の取り扱い
category: GitLab Self-Managed licenses
description: Self-managed トライアルを「延長」するためのライセンス発行
upstream_path: /handbook/support/license-and-renewals/workflows/self-managed/trials/
upstream_sha: 6c73093986242c762a8f4a2769fbfba69b31fcf9
translated_at: "2026-05-08T12:45:20Z"
translator: claude
stale: false
lastmod: "2026-04-08T15:49:17+00:00"
---

## 概要

Self-managed のトライアルは延長できません。ライセンスを「延長」するためには **トライアル** ライセンスを発行してインスタンスに適用する必要があります。
一時的なキー、一時的な延長、一時ライセンス、トライアル延長のリクエストは、いずれもトライアルライセンスの生成を必要とします。

セールスは見込み客に代わって Self-Managed トライアルの期間を延長するように、[内部リクエスト / Zendesk チケット](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) を通じて依頼してくることが多くあります。これらのチケットは常に GitLab Support End User `gitlab_support@example.com` から起票され、提出者がチケットに cc されます。これらに対応するには、以下のワークフローに従ってください。

チケットを開く際にいずれかのフィールドが正しく入力されていなかった場合は、不足している情報を提供するよう提出者に依頼するパブリックの返信をチケット上で送信してください。

> **注**: トライアル以外のライセンスは既存のサブスクリプションと一致している必要があり、これらのライセンスは通常 1 年間の期間を持ちます。
> 複雑なサブスクリプションモデルをどのようにサポートするかについては、
> [継続中の議論](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/3817) があります。

サポートはトライアル以外のライセンスを発行することをできるだけ控えるようにしています。
トライアルライセンスは以下の理由から発行が許可されています。

- ヒストリカルデータの追跡に影響を与えない
- 収益目的のサブスクリプションには紐づいていない

### 期限切れまたは期限切れ間近のライセンスを延長する方法

**注**: [SaaS](/handbook/support/license-and-renewals/workflows/saas/trials_and_plan_change#extending-trials) とは異なり、Self-managed の延長では事前に存在するトライアルライセンスは **不要** です。代わりに、現在の期限切れ間近のライセンスまたは直近の期限切れライセンスから開始します。

1. 期限切れまたは期限切れ間近のライセンスを開きます。
1. 次のことを確認します。
    1. ライセンスがトライアル以外のライセンスであり、かつ:
        - ライセンスの有効期限が **今後 15 日以内** に切れる場合、`Deviation from SM License Extension Workflow` マクロを使用してセールス担当者に SFDC 機能を使用するようリダイレクトし、チケットをクローズします。
        - 期限切れが **15 日以上先** の場合、セールス担当者は有効期限が 15 日以内になるまで待ってから SFDC 機能を使用する必要があります。`Deviation from SM License Extension Workflow` マクロを使用してセールス担当者に SFDC 機能を使用するようリダイレクトし、チケットをクローズします。
        - ライセンスの有効期限が既に経過している場合は、ステップ 2 (2) に進みます。
    1. 顧客が有効な一時延長を持っていないこと:
        1. https://customers.gitlab.com/admin/temporary_extension_history にアクセスします。
        1. ライセンスに記載されていた `Subscription Name` を使用して検索します。
        1. 一時延長が存在し、**かつ** その有効期限が 5 日以内ではない場合、ライセンスの有効期限が 5 日以内になったときにリクエストを開くようセールス担当者に伝え、チケットをクローズします。
        1. 一時延長が存在し、**かつ** その有効期限が 5 日以内である場合、ステップ 2 (3) に進みます。
        1. 一時延長が存在しない場合、ステップ 2 (3) に進みます。
    1. チケットの種類が `Extend an (almost) expired subscription` であること。
        - セールス担当者が異なるフォーム（例: IR の `Other`）を選択している場合、`Deviation from SM License Extension Workflow` マクロを使用して新しいチケットを提出するようリダイレクトし、チケットをクローズします。
        - `I acknowledge that approval for this extension has been granted..` チェックボックスがチェックされており、依頼者がマネージャーまたはディレクターによる延長承認の証拠を提供していること。提出者が必要な証拠を提供していない場合は `Deviation from SM License Extension Workflow` マクロを使用し、その後チケットをクローズします。
        - チケットの種類が正しく、かつライセンスの有効期限が経過している場合は、ステップ 3 にも進みます。
1. `Duplicate License` を選択します。
1. `License type` を `Legacy License` に設定します。
1. `Zuora subscription ID` フィールドが存在する場合、その内容を削除します。
1. `Users count` の数値をリクエストされた値に設定します。
1. **トゥルーアップがある場合、または `User Count` のリクエスト値が `Previous User Count` より少ない場合**、`Previous users count` の数値を以前のライセンスに設定します。それ以外の場合は内容を削除します。
1. `Trueup count` の数値が存在する場合は設定します。
1. `Plan code` をリクエストされた値に設定します。
1. `Trial` チェックボックスがチェックされていることを確認します。
1. `Starts at` を今日の日付に設定します。
1. `Expires at` をリクエストされた日付に設定します（その日付の 0:00 に有効期限が切れます）。
1. `Notes` をチケットまたは Issue の URL に設定します。
1. `Save` をクリックします。ライセンスは自動的に `Email` フィールドに指定されたメールアドレスに送信されます。

[トライアルライセンスを別の連絡先に送信する](/handbook/support/license-and-renewals/workflows/self-managed/sending_license_to_different_email#overview) 必要がある場合は、新しいライセンスを保存した後に `Forward license email` タブを使用してください。

### 新しいトライアルライセンスを作成する方法

ユーザーは次のリンクをクリックして自身でリクエストを開始する必要があります: <https://about.gitlab.com/free-trial/?hosted=self-managed>

### 緊急の週末ライセンス

オンコール中で、ライセンスを生成する必要があるが CustomersDot インターフェイスにアクセスできない場合は、[週末の緊急対応 - ライセンスリクエスト](/handbook/support/license-and-renewals/workflows/self-managed/license_for_weekend_emergencies) ワークフローに従ってください。

### SFDC で生成されるトライアルライセンス延長 {#sfdc-generated-trial-license-extensions}

アカウントエグゼクティブ（AE）は、更新案件のクローズに想定以上の時間がかかっている場合に、SalesForce.com（SFDC）を使用して顧客に Self-managed の 21 日間ライセンス延長を発行できるようになりました。AE がこの機能を使用すると、ライセンスコードが自動的に生成され、L&R サポートの関与なしに顧客に送信されます。[一時的な更新延長](/handbook/product/groups/fulfillment/#temporary-renewal-extensions) のハンドブックエントリにこのアプローチが文書化されています。この機能の悪用を防ぐためのガードレールが設けられており、その結果、更新イベントごとに発行できるライセンス延長は 1 回のみです。そのため、L&R サポートがさらにライセンス延長を生成する必要がある場合があります。

#### 手動の一時延長に対するセールス AE のリクエスト

Self-managed のライセンス延長が必要な場合、AE はまず [SFDC のプロセス](#sfdc-generated-trial-license-extensions) を使用することが期待されます。ただし、延長期間が経過した場合、AE は [内部リクエストフォーム](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) を使用して L&R サポートに直接ライセンス延長をリクエストできます。**GitLab Support Internal Requests for Global customers** リクエストオプションと、内部リクエストの種類として **Extend an (almost) expired subscription** を使用します。このプロセスにはいくつかの注意点があり、以下に記載します。

- AE が異なるフォーム（例: IR の `other`）を選択している場合、L&R サポートエンジニアは `Deviation from SM License Extension Workflow` マクロを使用して新しいチケットを提出するよう AE にリダイレクトし、チケットをクローズする必要があります。
- AE が最初に SFDC のプロセスを利用していない場合、L&R サポートエンジニアは `Deviation from SM License Extension Workflow` マクロを使用して AE をそちらに案内し、チケットをクローズする必要があります。

`Deviation from SM License Extension Workflow` マクロは、Self-managed のライセンス延長を顧客のために作成するプロセスから逸脱した事例を記録するために使用されます。顧客が Self-managed サブスクリプションのために短期延長を必要とする場合、割り当てられたアカウントエグゼクティブはまず SFDC のプロセスを利用して、21 日間有効な一時的な Self-managed ライセンスを自動的に作成する必要があります。これにより、サブスクリプション更新中もクライアントは GitLab へのアクセスを維持できます。このマクロは以下のような状況で使用する必要があります。

- セールス／CSM が誤ったフォームを選択した場合
- セールス／CSM が Zendesk 以外（Issue や Slack 経由）でサポートに接触してきた場合
- セールス／CSM が誤ったまたは不完全な情報を提供した場合
- セールス／CSM が SFDC を使用してライセンス延長を生成する前に IR を起票した場合

#### ライセンス延長に対する顧客のリクエスト

顧客がライセンス延長をリクエストしてきた場合、曜日と顧客が Enterprise か SMB のどちらに分類されるかに基づいて、以下の手順に従ってください。

1. アカウントオーナーを特定します:
    - Zendesk（ZD）チケット内で、`Organization Info` というラベルの内部メモを探してアカウントオーナーを特定します:
        - Enterprise／Commercial の顧客の場合、特定の個人がリストされます。
        - SMB の顧客の場合、特定の個人ではなく `EMEA/AMER/APAC SMB Sales` と表示されます。

2. 曜日と顧客タイプに基づいて次のステップを判断します:

    | 曜日 | Enterprise/Commercial | SMB |
    |--|-----------------------|-----|
    | **平日** | セールスにリダイレクト | セールスにリダイレクト |
    | **週末／祝日** | セールスにリダイレクト | 一時延長を発行してセールスにリダイレクト |

3. セールスにリダイレクトする手順:

    **Enterprise／Commercial の顧客:**
        - `Customer Request for SM License Extension macro` を適用し、テンプレートを更新して AE のメールアドレスを含めてから顧客に送信します。
        - Chatter を通じてアカウントエグゼクティブ（AE）にリクエストを認識させるために通知します。
    **SMB の顧客:**
        - [Working with the Global Digital SMB Account Team](../../../sales/commercial/global_digital_smb/#working-with-the-global-digital-smb-account-team) ハンドブックページに概説されているプロセスに従います。
        - Salesforce（SFDC）チケット ID を顧客に提供します。

4. 週末または祝日の SMB 顧客については、セールスにリダイレクトする前に一時的なライセンス延長を発行してください。

### 顧客の更新および新規販売が遅延した場合のライセンス発行経路

顧客の更新または新規顧客販売が遅延しているシナリオにおいて、L&R サポートのプロセスワークフローはこれらの課題に対処するための柔軟性を提供します。次の表は、特定のユースケースに基づいて一時トライアルライセンスを発行するために利用可能なオプションをまとめたものです。

| ユースケース | 経路 |
| ------ | ------ |
|  顧客更新が想定より時間がかかる      | セールス AE（アカウントエグゼクティブ）が SFDC 経由で 1 回限りの 21 日間 [一時的な更新延長](/handbook/product/groups/fulfillment/#temporary-renewal-extensions) を生成        |
|  顧客更新が追加の 21 日間を超える     |  セールス AE は L&R サポートに新しい内部リクエスト（IR）チケットを起票し、最大 1 ヶ月のトライアルライセンス延長をリクエストできる      |
|  顧客更新が追加の 21 日間 + 1 ヶ月を超える     | セールス AE は L&R サポートに新しい内部リクエスト（IR）チケットを起票し、L&R サポートはチケット経由で revenue のシニアディレクター @andrew_murray から承認を得る       |
|  新規顧客の見込み販売     |  セールス AE は L&R サポートとの IR 経由で最大 1 ヶ月のトライアル延長をリクエストできる。|
|  新規顧客販売が 1 ヶ月以上かかる | セールス AE は SFDC で $0 ドルの案件を生成し、その後 L&R サポートに新しい IR チケットを起票し、L&R サポートはチケット経由で revenue のシニアディレクター @andrew_murray から承認を得る       |
