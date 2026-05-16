---
title: プロダクトデザイナーのデザインツール
description: "プロダクトデザイナー向けのデザインツールに関する情報。"
upstream_path: /handbook/product/ux/product-designer/figma/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-09-11T10:09:44-07:00"
---

## Figma と FigJam

**注: 特に明記されていない限り、このセクションの `Figma` に関する情報は `FigJam` にも適用されます。**

私たちの主要なデザインツールは [Figma](https://www.figma.com/) です。UX 部門のプロダクトデザイナーまたはプロダクトデザインマネージャーとして、Figma の Professional ライセンスと Figma の GitLab チームへのアクセス権が付与されます。オンボーディング中に GitLab のメールアカウントに送信される招待を受け入れる以外、自分側で行うことはありません。

GitLab の他の誰でも、ファイルの URL を共有するかメールで直接招待することによってあなたのファイルにアクセスできますが、「閲覧のみ」の権限のみを付与するようにお願いします。「編集可」権限を持つ誰もが有料シートと見なされ、承認が必要です。「閲覧のみ」権限を持つユーザーでも、デザインファイルにコメントを残したり、ファイルをインスペクトしたりすることはできます。

FigJam ボードでのコラボレーションのためにチームメンバーを招待したい場合は、[オープンセッション](https://help.figma.com/hc/en-us/articles/4410786053911-Invite-visitors-to-an-open-session)を開始することでこれを行うことができます。この機能により、FigJam ライセンスを持っているかどうかに関係なく、ボードがオープンセッション用に有効化され、ボードのリンクが共有されている限り、チームメンバーが編集アクセスを持つことができます。オープンセッションは一度に **24 時間** のみ実行されます。チームメンバーが複数日にわたってファイルを編集できるようにしたい場合は、毎日オープンセッションを再開する必要があります。
FigJam ボード上の情報を安全に保つことに懸念がある場合は、[パスワード保護](https://help.figma.com/hc/en-us/articles/5726720100247-Add-password-protection-to-files)を追加できます。これにより、オープンセッションが有効になっているときに、パスワードを持っているユーザーのみがボードを編集できます。

GitLab には公開 Figma プロフィールがあり、私たちが公開したファイルを誰でも複製したりリミックスしたりできます。GitLab チームセクションの Community タブで私たちのプロフィールを表示するか、https://www.figma.com/@GitLab に移動できます。

追加のチームを作成しないでください。エディターは参加しているチームごとに課金され、私たちは 1 つのチームのみにリソースを割り当てています。

Figma には Professional チーム向けの 4 つのアクセスレベル（権限とも呼ばれる）があります。権限はチーム、プロジェクト、ファイルレベルで設定できます。

1. **Editors** - UX 部門の GitLab プロダクトデザイナーとプロダクトデザインマネージャーのみが Editor です。Editor は特に変更されない限り、プロジェクトとファイルへの「編集可」アクセス権を持ちます。
1. **Viewers** - GitLab チームの Viewer は、特に変更されない限り、任意のプロジェクトまたはファイルへの「閲覧のみ」アクセス権を持ちます。
1. **Admins** - 管理者は、課金を含む、チーム設定と管理者ダッシュボードへのアクセス権を持ちます。
1. **Owners** - チーム、プロジェクト、またはファイルを作成した人は、そのデフォルトの所有者になります。

[完全な権限の詳細を表示](https://help.figma.com/hc/en-us/articles/360039970673-Viewer-Editor-and-Admin-team-permissions)

Figma の使用に関する詳細は Pajamas のガイダンスを参照してください: [Components](https://design.gitlab.com/get-started/uik-components)、[Libraries](https://design.gitlab.com/get-started/uik-libraries)、[Annotations](https://design.gitlab.com/get-started/uik-annotation)、または [Figma アーティファクトの共有](https://design.gitlab.com/get-started/uik-sharing)について。

### ファイルバックアップ

Figma のクラウドストレージには、私たちの Organization アカウント配下にすべてのデザインファイルがあり、Pajamas UI Kit ファイルのみが [GitLab Product Design](https://www.figma.com/@gitlabdesign) コミュニティページに公開され、一般公開されています。今後の参照やポートフォリオ用途で記録を残したい非機密のデザインファイルは、.fig ファイルとして保存し、お好みの方法で保管することでバックアップを取ることをお勧めします。
