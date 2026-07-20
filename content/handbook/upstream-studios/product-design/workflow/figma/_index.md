---
title: Product Designer のデザインツール
description: "Product Designer のためのデザインツールに関する情報。"
upstream_path: /handbook/upstream-studios/product-design/workflow/figma/
upstream_sha: d92acb119be844b83eb2f76de26d722afea570c3
lastmod: "2026-07-20T13:03:25-03:00"
translated_at: "2026-07-21T06:21:42+09:00"
translator: codex
stale: false
---

## Figma と FigJam

**注: 特に明記がない限り、このセクションの `Figma` に関する情報は `FigJam` にも適用されます。**

主なデザインツールは [Figma](https://www.figma.com/) です。UX Department のプロダクトデザイナーまたはプロダクトデザインマネージャーには、Professional Figma ライセンスと Figma の GitLab チームへのアクセス権があります。オンボーディング中に GitLab のメールアカウント宛てに送られる招待を承諾する以外に、必要なことはありません。

GitLab の他のメンバーは、ファイル URL を共有するか、メールで直接招待するとファイルにアクセスできます。ただし、付与する権限は「閲覧可」のみにしてください。「編集可」の権限を持つ人は有料シートとみなされ、承認が必要です。「閲覧可」の権限があるユーザーも、デザインファイルにコメントし、検査できます。

チームメンバーを FigJam ボードでの協働に招待する場合は、[オープンセッション](https://help.figma.com/hc/en-us/articles/4410786053911-Invite-visitors-to-an-open-session)を開始します。この機能により、ボードでオープンセッションが有効化され、ボードへのリンクを共有すると、FigJam ライセンスの有無にかかわらずチームメンバーが編集アクセスを得られます。オープンセッションは 1 回につき **24 時間** のみ実行されます。複数日にわたってチームメンバーがファイルを編集できるようにするには、毎日オープンセッションを再開する必要があります。
FigJam ボードの情報を SAFE に保つことに懸念がある場合は、[パスワード保護](https://help.figma.com/hc/en-us/articles/5726720100247-Add-password-protection-to-files)を追加できます。これにより、オープンセッションが有効なときにボードを編集できるのは、パスワードを持つ人だけになります。

GitLab には公開 Figma プロフィールがあり、誰でも私たちが公開したファイルを複製またはリミックスできます。GitLab チームセクションの Community タブでプロフィールを表示するか、https://www.figma.com/@GitLab にアクセスしてください。

追加のチームを作成しないでください。エディターには所属するチームごとに料金が発生し、リソースは 1 チーム分しか割り当てられていません。

Figma の Professional チームには、Permissions とも呼ばれる 4 段階のアクセスレベルがあります。権限はチーム、プロジェクト、ファイルのレベルで設定できます。

1. **Editors** - UX Department の GitLab プロダクトデザイナーとプロダクトデザインマネージャーのみがエディターです。特に変更されない限り、エディターはプロジェクトとファイルへの「編集可」アクセスを持ちます。
1. **Viewers** - GitLab チームの閲覧者は、特に変更されない限り、任意のプロジェクトまたはファイルへの「閲覧可」アクセスを持ちます。
1. **Admins** - 管理者は、請求を含む Team Settings および Admin Dashboard にアクセスできます。
1. **Owners** - チーム、プロジェクト、またはファイルを作成した人が、そのデフォルトのオーナーになります。

[権限の完全な詳細を表示する](https://help.figma.com/hc/en-us/articles/360039970673-Viewer-Editor-and-Admin-team-permissions)

Figma の[コンポーネント](https://design.gitlab.com/get-started/uik-components)、[ライブラリ](https://design.gitlab.com/get-started/uik-libraries)、[アノテーション](https://design.gitlab.com/get-started/uik-annotation)の使用や、[Figma アーティファクトの共有](https://design.gitlab.com/get-started/uik-sharing)については、Pajamas のガイダンスを参照してください。

### ファイルのバックアップ

Figma のクラウドストレージには Organization アカウント配下のすべてのデザインファイルがあり、Pajamas UI Kit のファイルだけが [GitLab Product Design](https://www.figma.com/@gitlabdesign) のコミュニティページで公開され、一般に利用できます。将来の参照またはポートフォリオ利用のために記録として残したい非機密のデザインファイルは、`.fig` ファイルとして保存し、任意の方法で保管することを推奨します。
