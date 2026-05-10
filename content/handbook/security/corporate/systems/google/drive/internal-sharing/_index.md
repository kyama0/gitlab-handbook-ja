---
title: Google ドキュメントとドライブの内部共有ガイド
upstream_path: /handbook/security/corporate/systems/google/drive/internal-sharing/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

## 概要

私たちの透明性 (transparency) の価値観の一環として、ほとんどの Google ドキュメントはすべてのチームメンバーに対して透明であるべきです。Google ドキュメントが会社全体で閲覧できるよう共有することを忘れないようにするには、全員の意識的な努力が必要です。

> **効率化のヒント:** `My Drive` ではなく、チームの共有ドライブを使用し、すでに会社と共有されているフォルダ内にドキュメントを作成しましょう。これにより、各ドキュメントを共有することを忘れる必要がなくなり、ワークフローがシンプルになります。

- [会社のポリシー - 機密性レベル](/handbook/communication/confidentiality-levels/)
- [ベンダードキュメント - 権限レベル](https://support.google.com/drive/answer/2494822?hl=en&co=GENIE.Platform%3DDesktop#zippy=%2Cchoose-if-people-can-view-comment-or-edit)
- [ベンダードキュメント - Google ドライブの共有](https://support.google.com/drive/answer/2494822?hl=en&ref_topic=7000947)
- [ベンダードキュメント - Google ドライブのファイル](https://support.google.com/drive/answer/2494822?hl=en&ref_topic=7000947)
- [ベンダードキュメント - Google ドライブのフォルダ](https://support.google.com/drive/answer/7166529?hl=en&co=GENIE.Platform%3DDesktop)

## Google ドライブの権限レベル

- `Viewer` (閲覧者) - 閲覧はできますが、ファイルを変更したり他者と共有したりすることはできません
- `Commenter` (コメント可) - コメントや提案はできますが、ファイルを変更したり他者と共有したりすることはできません
- `Editor` (編集者) - 変更を加える、提案を承認・拒否する、ファイルを他者と共有することができます

## Google ドライブのファイルを共有する

> **リマインダー:** Google ドライブのファイルやフォルダを共有する方法は複数あります。

1. GitLab のメールアドレスで [https://drive.google.com](https://drive.google.com) にサインインします。

1. 共有したいファイルまたはフォルダに移動します。

1. ファイルまたはフォルダを **右クリック** します。

1. `Share` (共有) を選択します。

    <img src="/images/security/corporate/systems/google/drive/internal-sharing/google_drive_file_share.png" alt="Google Drive File Share" width="800"/>

1. ファイルまたはフォルダを共有したい個人のメールアドレスを追加します。

    <img src="/images/security/corporate/systems/google/drive/internal-sharing/google_drive_file_assign_email.png" alt="Google Drive File Assign Email" width="500"/>

1. メールアドレスの右側にあるドロップダウンメニューを使用して、その個人に付与する [権限レベル](#google-drive-permission-levels) を選択します。

    <img src="/images/security/corporate/systems/google/drive/internal-sharing/google_drive_file_assign_permission.png" alt="Google Drive File Assign Permission" width="500"/><br>

1. ファイルやフォルダへの新しいアクセス権について個人にメールで通知したい場合は、`Notify people` (ユーザーに通知) のチェックボックスを選択します。

1. `Send` (送信) ボタンを選択します。

1. 共有したファイルやフォルダの隣に ![Google Drive File Shared Icon](/images/security/corporate/systems/google/drive/internal-sharing/google_drive_file_shared_icon.png) が表示されます。

{{% alert title="Employees only vs GitLab" color="warning" %}}

**General access** (一般アクセス) は、リンクされたファイルがリンク経由で誰と共有できるかを制御します。`Employees only` は、ファイルを GitLab の常駐チームメンバーのみがリンクできるようにします。`GitLab` は、すべての社内対象者がファイルをリンクできるようにします。

<img src="/images/security/corporate/systems/google/drive/internal-sharing/google_drive_file_general_access.png" alt="Google Drive File General Access with Link" width="500"/><br>

{{% /alert %}}

## 共有ドライブのファイルにアクセスする

> **リマインダー:** Google ドライブのファイルやフォルダを共有する方法は複数あります。

1. GitLab のメールアドレスで [https://drive.google.com](https://drive.google.com) にサインインします。

1. 左側のメニューバーで `Shared with me` (共有アイテム) を選択します。

    > これにより、`Shared Drives` (共有ドライブ) のドキュメントを含む、あなたと共有されているすべてのドキュメントが表示されます。デフォルトでは、ドキュメントが共有された時刻の降順で一覧表示されます。

    <img src="/images/security/corporate/systems/google/drive/internal-sharing/google_share_drive_access_menu.png" alt="Google Shared Drive Access Menu" width="300"/>

1. ページ上部中央の `Search in Drive` (ドライブで検索) 検索バーを使用して、ファイルを探したいチームメンバーで、あなたと共有されているものを検索します。

    > 検索バーをクリックすると、最近ドキュメントを共有したユーザーのリストが表示されます。チームメンバーがこのリストに表示されている場合は、ここで選択するか、引き続き検索バーにメールアドレスを入力できます。

    <img src="/images/security/corporate/systems/google/drive/internal-sharing/google_shared_drive_access_auto_population.png" alt="Google Shared Drive Access Auto Population" width="600"/>

1. ファイルを探したいチームメンバーのメールアドレスを入力します。

    <img src="/images/security/corporate/systems/google/drive/internal-sharing/google_shared_drive_access_email.png" alt="Google Shared Drive Access Email" width="600"/>

1. チームメンバーが表示されたら選択します。

    > これにより、検索結果に `owner:` が前置されます。メールアドレスが表示されない場合は、検索バーに `owner:` を手動で追加する必要があります。例: `owner:alibby@example.com`

    <img src="/images/security/corporate/systems/google/drive/internal-sharing/google_shared_drive_access_final.png" alt="Google Shared Drive Access Final" width="500"/>

1. そのチームメンバーがあなたと共有したすべてのドキュメントが `Search results` (検索結果) に表示されます。

    > 必要に応じてフィルタを追加して、特定のファイルを検索できます。
