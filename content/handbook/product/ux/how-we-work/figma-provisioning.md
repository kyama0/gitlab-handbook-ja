---
title: "Figma のプロビジョニングとデプロビジョニング"
description: "Figma のプロビジョニング／デプロビジョニング方法に関するガイダンス"
upstream_path: /handbook/product/ux/how-we-work/figma-provisioning/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-12T17:18:28-06:00"
---

Figma のプロビジョナー／デプロビジョナーは [Tech Stack YAML ファイル](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml#L1780)に記載されています。

複数の部門に [Editor](https://help.figma.com/hc/en-us/articles/360039960434-Roles-in-Figma#editor) ロールを有償シートとして持つチームメンバーがいますが、UX 部門がビジネスオーナーです。

## Figma のシート

### シートの種類

Figma には、ニーズに応じて 4 種類のシートタイプがあります。

* **View:** デフォルトのシートタイプ。Lumos を通じてアクセスをリクエストできますが、自動承認されます。
* **Full:** Figma Design、Figma Make、Dev Mode、Figma Draw、Figma Slides、FigJam を含むすべての Figma 製品へのフルアクセス。
* **Dev:** Dev Mode、Figma Slides、FigJam へのアクセス。Figma Design ファイルでは閲覧とコメントが可能。
* **Collab:** FigJam と Figma Slides へのアクセス。Figma Design ファイルでは閲覧とコメントが可能。

## プロビジョニング

### アクセスリクエストの Issue

承認された有償の Figma シートには、予算承認を伴う [Lumos アクセスリクエスト](/handbook/security/corporate/systems/lumos/ar/) が必ず必要です。シートのアップグレードは Lumos 経由の Okta アクセスでのみ可能で、Figma 管理画面や Figma の共有ツールでは行えません。

Lumos でアクセスリクエストがオープンされると、プロビジョナーに自動的に通知が届きます。プロビジョナーとして、以下を確認してください。

* チームメンバーのマネージャーがアクセスを承認していること。
* チームメンバーが必要なシートオプションを理解していること。
  * **View** シートは、チームメンバーがコラボレーションのためにファイルを閲覧してコメントするだけで十分な場合に多く該当します。すべてのチームメンバーは **View** ロールから始まるため、何もしなくてよい場合もあります。
  * **Full** と **Collab** の違いは最初は混乱しやすい場合があります。役割を果たすためにどのシートが必要なのか、チームメンバーが理解しているか確認してください。
* 予算承認があること。請求グループの管理者は、シート数が会計年度に割り当てられた支出上限を超えないように、財務パートナーと協力して確認する必要があります。

### 四半期ごとの監査

私たちの請求サイクルには四半期ごとの精算が含まれます。四半期ごとに、管理者には次回の請求書について通知メールが届きます。これにより、新しい請求書を承認する前に追加されたシートを確認する機会が得られます。

シートを監査する手順:

1. すべての新規シートを確認し、各チームメンバー（または[ゲスト](https://help.figma.com/hc/en-us/articles/4420557314967-Members-versus-guests#guests)）が請求グループに割り当てられていることを確認します。
1. すべての新規ユーザーに請求グループが割り当てられたら、グループを `Reviewed` としてマークします。

確認が完了すると、Figma のビジネスオーナーは以下を行います。

1. 最終的な請求金額を確定します。
1. 私たちの Figma 担当者に連絡し、R&D、Marketing、Sales の合計シート数を共有します。これらは請求書の品目に追加されます。
1. 請求書が Coupa にアップロードされ、フルの調達プロセスを通過することを確認します。

## デプロビジョニング

* GitLab に在籍しなくなったユーザーは自動的に完全にデプロビジョニングされます。
* 有償シートは、IT に連絡することで無償の **View** シートにダウングレードできます。
* **90 日間**使用されなかった有償シートは、自動的に **View** シートにダウングレードされます。

* メンバーが完全に削除された場合:
  * メンバーのファイルに「編集可」のアクセス権を持つ人は、引き続き編集することができ、ファイルを移動することもできます。
  * ドラフトファイルは組織内に残り、Figma 管理者がファイルを閲覧・管理できます。

詳しくは Figma の [Remove people from an organization](https://help.figma.com/hc/en-us/articles/360040453453-Remove-people-from-an-organization) ドキュメントを参照してください。
