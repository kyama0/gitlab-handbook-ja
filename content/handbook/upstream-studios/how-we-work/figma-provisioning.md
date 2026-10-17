---
title: "Figma のプロビジョニングとデプロビジョニング"
description: "Figma をプロビジョニング/デプロビジョニングする方法に関するガイダンス"
upstream_path: /handbook/upstream-studios/how-we-work/figma-provisioning/
upstream_sha: 4684d72f27f3401d3ae72a26d72ae46eaeaab929
lastmod: "2026-10-16T19:52:00+02:00"
translated_at: "2026-10-17T21:06:41Z"
translator: codex
stale: false
---

Figma のプロビジョニング担当者/デプロビジョニング担当者は、[Tech Stack](/handbook/business-technology/tech-stack-applications/)に記載されています。

複数の部門に、有料シートとして [Editor](https://help.figma.com/hc/en-us/articles/360039960434-Roles-in-Figma#editor) ロールを持つチームメンバーがいますが、ビジネスオーナーは UX 部門です。

## Figma ファイルのレビューと承認 {#figma-file-review-and-approval}

プロビジョニングで管理するのは、Figma シートを持つ人であり、Figma ファイルをレビューまたは承認する人ではありません。[Pajamas UI Kit](https://design.gitlab.com/get-started/uik-file-structure)に含まれない Figma ファイルとブランチのレビューおよび承認は、各チーム、場合によっては各デザイナーが責任を持ち、Figma の組織設定を通じて管理します。詳細は、[Figma ファイルのレビューと承認](/handbook/upstream-studios/product-design/workflow/figma/#review-and-approval-of-figma-files)を参照してください。

このチーム単位およびデザイナー単位のモデルは、Design System チームが Pajamas UI Kit ファイルに責任を持つモデルとは異なります。UI Kit ファイルのレビュー方法については、[Design System のレビュープロセス](/handbook/upstream-studios/design-expression/design-system/design-review/)を参照してください。

## Figma シート

### シートタイプ

Figma には、ニーズに応じて 4 つの異なるシートタイプがあります:

* **View:** デフォルトのシートタイプ。アクセスは Lumos 経由でリクエストしますが、自動承認されます。
* **Full:** Figma Design、Figma Make、Dev Mode、Figma Draw、Figma Slides、FigJam を含む、すべての Figma プロダクトへのフルアクセス。
* **Dev:** Dev Mode、Figma Slides、FigJam へのアクセス。Figma Design ファイルでは閲覧とコメントのアクセス。
* **Collab:** FigJam と Figma Slides へのアクセス。Figma Design ファイルでは閲覧とコメントのアクセス。

## プロビジョニング

### アクセスリクエスト Issue

承認済みの有料 Figma シートにはすべて、予算承認を伴う対応する [Lumos access request](/handbook/security/corporate/systems/lumos/ar/) が必要です。シートのアップグレードは、Figma 管理画面や Figma の共有ツールではなく、Lumos を通じた Okta アクセスでのみ実施できます。

Lumos アクセスリクエストが作成されると、プロビジョニング担当者に自動で ping されます。プロビジョニング担当者として、以下を確認してください:

* チームメンバーのマネージャーがアクセスを承認している。
* チームメンバーが必要なシートオプションを理解している。
  * チームメンバーがコラボレーションのためにファイルを閲覧しコメントするだけでよい場合は、多くの場合 **View** シートで十分です。すべてのチームメンバーは **View** ロールから始まるため、対応が不要な場合があります。
  * **Full** シートと **Collab** シートの違いは、最初はわかりにくい場合があります。チームメンバーが自分のロールを実行するためにどのシートが必要かを理解していることを確認してください。
* 予算承認がある。請求グループ管理者は Finance パートナーと協力し、シート数が会計年度に割り当てられた最大支出を超えないようにしてください。

### 四半期ごとの監査

私たちの請求サイクルには四半期ごとのトゥルーアップが含まれます。各四半期に、管理者は今後の請求書を知らせるメールを受け取ります。これにより、新しい請求書を承認する前に追加されたシートをレビューする機会が得られます。

シートを監査するには:

1. すべての新しいシートをレビューし、各チームメンバー（または[ゲスト](https://help.figma.com/hc/en-us/articles/4420557314967-Members-versus-guests#guests)）が請求グループに割り当てられていることを確認します。
1. すべての新規ユーザーに請求グループが設定されたら、自分のグループを `Reviewed` としてマークします。

確認が完了したら、Figma のビジネスオーナーは次を行います:

1. 最終的な請求額を確定します。
1. Figma 担当者に連絡し、R&D、Marketing、Sales の合計シート数を共有します。これらは請求書の明細項目に追加されます。
1. 請求書が Coupa にアップロードされ、私たちの完全な Procurement プロセスを通るようにします。

## デプロビジョニング

* ユーザーが GitLab に在籍しなくなった場合、そのユーザーは自動的に完全にデプロビジョニングされます。
* 有料シートは、IT に連絡することで無償の **View** シートにダウングレードできます。
* **90 日間** 非アクティブだった有料シートは、自動的に **View** シートにダウングレードされます。

* メンバーが完全に削除された場合:
  * そのメンバーのファイルに対して「can edit」アクセスを持つ人は、引き続き編集でき、ファイルを移動できます。
  * そのメンバーのドラフトファイルは組織内に残り、Figma 管理者がファイルを閲覧および管理できます。

詳細については、Figma の [Remove people from an organization](https://help.figma.com/hc/en-us/articles/360040453453-Remove-people-from-an-organization) ドキュメントを参照してください。
