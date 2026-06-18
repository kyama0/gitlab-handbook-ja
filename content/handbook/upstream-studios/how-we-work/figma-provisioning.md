---
title: "Figma のプロビジョニングとデプロビジョニング"
description: "Figma のプロビジョニング/デプロビジョニングの方法に関するガイダンス"
upstream_path: /handbook/upstream-studios/how-we-work/figma-provisioning/
upstream_sha: aadd07ec986f77b5bd259fb54f0f41d1f3397544
lastmod: 2026-06-16T09:26:31-04:00
translated_at: "2026-06-18T05:33:51Z"
translator: claude
stale: false
---

Figma のプロビジョナー/デプロビジョナーは [Tech Stack YAML ファイル](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml#L1780)に記載されています。

複数の部門のチームメンバーが有料シートとして [Editor](https://help.figma.com/hc/en-us/articles/360039960434-Roles-in-Figma#editor) ロールを持っていますが、ビジネスオーナーは UX 部門です。

## Figma のシート

### シートの種類

Figma には、ニーズに応じて 4 種類のシートがあります。

* **View:** デフォルトのシート種別。アクセスは Lumos 経由でリクエストしますが、自動承認されます。
* **Full:** Figma Design、Figma Make、Dev Mode、Figma Draw、Figma Slides、FigJam を含むすべての Figma プロダクトへのフルアクセス。
* **Dev:** Dev Mode、Figma Slides、FigJam へのアクセス。Figma Design ファイルでは表示とコメントのアクセス。
* **Collab:** FigJam と Figma Slides へのアクセス。Figma Design ファイルでは表示とコメントのアクセス。

## プロビジョニング

### アクセスリクエストの Issue

承認済みの有料 Figma シートには、予算承認を伴う対応する [Lumos アクセスリクエスト](/handbook/security/corporate/systems/lumos/ar/)が必ず必要です。シートのアップグレードは、Lumos を通じた Okta アクセスでのみ行えます。Figma の管理者機能や Figma の共有ツールでは行えません。

Lumos のアクセスリクエストがオープンされると、プロビジョナーに自動的に通知が送られます。プロビジョナーとして、次の点を確認してください。

* チームメンバーのマネージャーがアクセスを承認していること。
* チームメンバーが、自分に必要なシートのオプションを理解していること。
  * チームメンバーがコラボレーションのためにファイルを表示しコメントするだけでよい場合は、**View** シートで十分なことがよくあります。すべてのチームメンバーは **View** ロールから始まるため、何も対応が不要な場合もあります。
  * **Full** シートと **Collab** シートの違いは、最初は分かりにくいことがあります。チームメンバーが自分の役割を果たすためにどのシートが必要かを理解していることを確認してください。
* 予算承認があること。Billing group の管理者は、シート数が会計年度に割り当てられた最大支出額を超えないよう、Finance パートナーと連携する必要があります。

### 四半期ごとの監査

私たちの請求サイクルには四半期ごとのトゥルーアップが含まれます。各四半期に、管理者は今後の請求について知らせるメールを受け取ります。これにより、新しい請求を承認する前に追加されたシートを確認する機会が得られます。

シートを監査するには:

1. すべての新しいシートを確認し、各チームメンバー（または[ゲスト](https://help.figma.com/hc/en-us/articles/4420557314967-Members-versus-guests#guests)）が Billing group に割り当てられていることを確認します。
1. すべての新しいユーザーに Billing group が割り当てられたら、自分のグループを `Reviewed` としてマークします。

確認が完了したら、Figma のビジネスオーナーは次を行います。

1. 最終的な請求額を確定します。
1. Figma の担当者に連絡し、R&D、Marketing、Sales のシート総数を共有します。これらは請求書の品目として追加されます。
1. 請求書が Coupa にアップロードされ、私たちの調達プロセス全体を通ることを確認します。

## デプロビジョニング

* ユーザーが GitLab を退職すると、自動的に完全にデプロビジョニングされます。
* 有料シートは IT に連絡することで、無料の **View** シートにダウングレードできます。
* **90 日間**非アクティブだった有料シートは、自動的に **View** シートにダウングレードされます。

* メンバーが完全に削除された場合:
  * そのメンバーのファイルに「編集可能」アクセスを持つ人は、引き続き編集でき、ファイルを移動できます。
  * そのメンバーのドラフトファイルは組織内に残り、Figma 管理者がファイルを表示・管理できます。

詳細については、Figma の[組織からのメンバー削除](https://help.figma.com/hc/en-us/articles/360040453453-Remove-people-from-an-organization)のドキュメントを参照してください。
