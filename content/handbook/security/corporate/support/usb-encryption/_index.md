---
title: コーポレートセキュリティ USB デバイス暗号化ガイド
upstream_path: /handbook/security/corporate/support/usb-encryption/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-14T17:59:32+00:00"
---

macOS または Linux で USB マスストレージデバイスを暗号化する方法を説明します。

## macOS での手順

### 前提条件

- 暗号化したい USB ドライブ

- macOS 10.13（High Sierra）以降

- Mac の管理者権限

### Disk Utility を使って USB ドライブを暗号化する手順

1. USB ドライブを Mac の利用可能な USB ポートに挿入します。

2. Disk Utility を開きます。

   - Applications > Utilities > Disk Utility に移動するか、

   - Spotlight で「Disk Utility」を検索します（Cmd + Space を押して「Disk Utility」と入力）

3. 左側のサイドバーから USB ドライブを選択します。その下にあるボリュームではなく、ドライブそのもの（最上位のエントリ）を選択するようにしてください。

4. ドライブを消去してフォーマットします。

   - 上部ツールバーの「消去」ボタンをクリックします

   - ドライブの名前を入力します

   - 「フォーマット」では、「APFS（暗号化）」または「Mac OS 拡張（ジャーナリング、暗号化）」を選択します

   - 「方式」では、「GUID パーティションマップ」を選択します

   - 「消去」をクリックします

5. パスワードを作成します。

   - 暗号化されたドライブ用のパスワードを作成するよう求められます

   - 強力なパスワードを入力し、確認します

   - 必要に応じて、パスワードのヒントを入力します（推奨）

   - 「選択」をクリックします

   > **重要**: このパスワードは安全に保管してください。忘れてしまうと、ドライブのデータを復元することはできません。

6. 処理が完了するまで待ち、「完了」をクリックします。

これで USB ドライブが暗号化されました。Mac に接続するたびに、内容にアクセスするためのパスワードの入力を求められます。

### 代替方法: ターミナルから FileVault を使う

ターミナルを使う方が好ましい場合は、FileVault を使って USB ドライブを暗号化することもできます。

```bash
# まずディスク識別子を確認します
diskutil list

# 次にドライブを暗号化します（"disk2" は実際のディスク識別子に置き換えてください）
diskutil cs convert disk2 -passphrase

# プロンプトに従ってパスワードを作成します
```

### macOS 公式ドキュメント

[Apple サポート: ストレージデバイスをパスワードで暗号化して保護する](https://support.apple.com/guide/disk-utility/encrypt-protect-a-storage-device-password-dskutl35612/mac)

[Apple サポート: FileVault で Mac のデータを保護する](https://support.apple.com/guide/mac-help/protect-data-on-your-mac-with-filevault-mh11785/mac)

[Apple サポート: Disk Utility の概要](https://support.apple.com/guide/disk-utility/welcome/mac)

## Linux での手順

### 前提条件

- 暗号化を行うと USB 上のすべてのデータが消去されるため、既存のデータがバックアップ済みであること

- 暗号化したい USB ドライブ

- LUKS（Linux Unified Key Setup）をサポートする Linux ディストリビューション（最近のディストリビューションのほとんど）

- `cryptsetup` パッケージがインストールされていること

- root または sudo 権限

### 必要なパッケージのインストール

Debian/Ubuntu 系ディストリビューションの場合:

```bash
sudo apt update
sudo apt install cryptsetup
```

Fedora/RHEL 系ディストリビューションの場合:

```bash
sudo dnf install cryptsetup
```

Arch 系ディストリビューションの場合:

```bash
sudo pacman -S cryptsetup
```

### LUKS を使って USB ドライブを暗号化する手順

1. USB ドライブを Linux マシンの利用可能な USB ポートに挿入します。

2. USB ドライブのデバイスパスを特定します。

   ```bash
   lsblk
   ```

   > 出力の中から USB ドライブを探します（例: `/dev/sdb`）。以下の手順ではドライブ上のすべてのデータが消去されるため、必ず正しいデバイスを特定してください。

3. 新しいパーティションテーブルを作成します（任意ですが推奨）。

   ```bash
   sudo fdisk /dev/sdX  # sdX は使用するドライブの識別子に置き換えてください
   ```

   - o を入力して新しい空の DOS パーティションテーブルを作成します

   - n を入力して新しいパーティションを追加します

   - プロンプトに従い、ディスク全体を使用するプライマリパーティションを作成します

   - w を入力して変更を書き込み、終了します

4. パーティションに対して LUKS 暗号化を初期化します。

   ```bash
   sudo cryptsetup luksFormat /dev/sdX1  # sdX1 は使用するパーティションに置き換えてください
   ```

   - 大文字で「YES」と入力して操作を確認するよう求められます

   - 続いて、強力なパスフレーズを入力して確認します

5. 暗号化されたパーティションを開きます。

   ```bash
   sudo cryptsetup luksOpen /dev/sdX1 encrypted_usb  # sdX1 は使用するパーティションに置き換えてください
   ```

   - 前のステップで設定したパスフレーズを入力します。

6. 暗号化されたパーティション上にファイルシステムを作成します。

   ```bash
   sudo mkfs.ext4 /dev/mapper/encrypted_usb
   ```

   - 必要に応じて、`mkfs.btrfs` や `mkfs.xfs` といった他のファイルシステムを使用することもできます。

7. 暗号化されたファイルシステムをマウントします。

   ```bash
   sudo mkdir -p /media/encrypted_usb
   sudo mount /dev/mapper/encrypted_usb /media/encrypted_usb
   ```

### 暗号化されたドライブを安全にアンマウントする

暗号化された USB ドライブを安全に取り外すには:

1. ファイルシステムをアンマウントします。

   ```bash
   sudo umount /media/encrypted_usb
   ```

2. 暗号化されたパーティションを閉じます。

   ```bash
   sudo cryptsetup luksClose encrypted_usb
   ```

3. これで USB ドライブを安全に取り外すことができます。

### 今後、暗号化されたドライブを使用する

暗号化された USB ドライブを再度使用するには:

1. USB ドライブを挿入します。

2. 暗号化されたパーティションを開きます。

   ```bash
   sudo cryptsetup luksOpen /dev/sdX1 encrypted_usb  # sdX1 は使用するパーティションに置き換えてください
   ```

3. ファイルシステムをマウントします。

   ```bash
   sudo mount /dev/mapper/encrypted_usb /media/encrypted_usb
   ```

4. マウント／アンマウントをより簡単に行うには:

   ```bash
   # ~/.bashrc に追加します。sdX1 は使用するパーティションに置き換えてください
   alias mount-encrypted='sudo cryptsetup luksOpen /dev/sdX1 encrypted_usb && sudo mount /dev/mapper/encrypted_usb /media/encrypted_usb'
   alias unmount-encrypted='sudo umount /media/encrypted_usb && sudo cryptsetup luksClose encrypted_usb'
   ```

### 暗号化された USB ストレージのベストプラクティス

1. 以下の条件を満たす強力なパスフレーズを選びます。

    - 12 文字以上であること

    - 大文字、小文字、数字、特殊文字を組み合わせていること

    - 推測されやすい個人情報に基づいていないこと

2. 暗号化されたドライブに保存している重要なデータのバックアップを保持してください。

3. パスフレーズはパスワードマネージャーを使って安全に保管してください。

4. ドライブを物理的に取り外す前には、必ず正しくアンマウントしてください。

5. 機密性の高いデータについては、多要素認証の利用を検討してください。

6. 暗号化されたドライブに保存している重要なデータは、定期的にバックアップを行ってください。
