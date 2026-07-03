---
title: PGP プロセス
upstream_path: /handbook/security/pgp_process/
upstream_sha: 2ea342c4234f3820e0bad8565152836e52df6849
translated_at: "2026-07-03T20:37:21+09:00"
translator: codex
stale: false
lastmod: "2026-06-29T08:59:00-04:00"
---

## GPG Keychain のインストールと PGP キーペアのインポート

Mac で [GPG Keychain](https://gpgtools.org) アプリケーションをダウンロードしてインストールします。Support vault からキーペアファイルをダウンロードします。これは「security@gitlab.com PGP Keypair」項目に添付されています。GPG Keychain アプリケーションを開いてキーペアファイルをインポートします。パスワードを尋ねられます。vault 項目に保存されているパスワードを使用してください。

これで、暗号化、復号化、および公開鍵を他者と共有できるようになります。

## 公開鍵の共有

GPG Keychain アプリケーション内のキーを右クリックして「Export」をクリックします。ダイアログボックスで「Include secret key in exported file」がチェックされていないことを確認してください。エクスポートされたファイルを保存し、リクエスターに送信します。

![GPG Keychain のエクスポート](/images/support/pgp/gpg_keychain_export.png)

潜在的なセキュリティ問題を報告したいリサーチャーは、当社の [責任ある開示ポリシー](https://about.gitlab.com/security/disclosure/) を参照してください。メールでの開示は Zendesk で構成された自動応答を受け取り、自動的にクローズされます。

## テキストとファイルの復号化

暗号化されたデータがテキストとしてセキュリティメールに届いた場合、復号化はとても簡単です。暗号化されたテキストブロック全体をコピーし、右クリックして「Services」、次に「OpenPGP: Decrypt Selection to New Window」に進みます。数秒後に、復号化されたテキストを表示する新しいウィンドウが表示されます。

![テキストの復号化](/images/support/pgp/decrypt_text.png)

暗号化されたデータが添付ファイルとして届いた場合は、まずファイルをワークステーションにダウンロードします。Finder でファイルに移動します。ファイルを右クリックして「Services」に進み、「OpenPGP: Decrypt File」を選択します。復号化されたファイルは、暗号化されたファイルと同じディレクトリに配置されます。ただし、名前が異なる場合があります。

![ファイルの復号化](/images/support/pgp/decrypt_file.png)
