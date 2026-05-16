---
title: Backblaze
upstream_path: /handbook/security/corporate/systems/backblaze/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-09-24T17:59:51+00:00"
---
[Backblaze](https://www.backblaze.com/) は、GitLab 所有のデバイスにデータをバックアップするためにデプロイされる可能性のあるツールです。会社のデバイスにデフォルトでインストールされているわけではありません。Backblaze は、リーガルホールドや調査の目的で Legal および People Ops チームから特別に要求された場合にのみインストールされます。Backblaze のインストールおよび使用は、データ保護およびプライバシーに関する法令を含む、すべての適用される法律および規制に従って実施されます。チームメンバーのデバイスへの Backblaze のデプロイにより、リーガルホールド対象の退職予定チームメンバーがラップトップをワイプする前に CorpSec のチームメンバーへイメージング目的で送付するという現行の要件は不要になります。

Backblaze がデバイスにインストールされた場合:

1. CorpSec はリーガルホールドまたは調査に関連するデータのみをバックアップします。
1. 指定された「Personal Folder（個人フォルダ）」内の個人データは Backblaze によってバックアップされません。
1. チームメンバーには通常、Backblaze がデバイスにインストールされる前に通知されます。
1. Backblaze によってバックアップされたデータは安全に保管され、アクセスはリーガルホールドまたは調査に関与する権限を持つ担当者に厳格に制限されます。
1. リーガルホールドまたは調査が完了した後、Backblaze によってバックアップされたすべてのデータは、データ保持ポリシーおよび適用法に従って安全に削除されます。

Backblaze の使用について質問や懸念がある場合は、legal_internal@gitlab.com 宛てにメールで Legal 部門にお問い合わせください。

会社支給のデバイスを個人利用することがチームメンバーに許可されている法域では、デバイス上に「Personal Folder」または「personal-folder」という名前のフォルダを作成することを強く推奨します。Personal Folder は、イメージ作成の対象から除外されるために、ラップトップの Desktop、Documents、または User フォルダ内のサブフォルダとして保存する必要があります。すべての個人ファイルはこの Personal Folder に保存し、CorpSec はこの Personal Folder のプライバシーを尊重するために合理的な努力を払います。ただし、機密性の高い個人ファイルを会社支給デバイスに保存することは避けることをお勧めします。また、会社の業務成果物や業務関連のドキュメントを Personal Folder に保存してはなりません。

## 有効な Personal Folder の場所の例

- `/Users/username/Desktop/Personal Folder`
- `/Users/username/Documents/Personal Folder`
- `/Users/username/Personal Folder`
- `/Users/username/personal-folder`

イメージ作成中に収集された個人データは、一般データ保護規則（GDPR）およびその他の適用されるデータプライバシー法を厳格に遵守して取り扱われます。個人データは、正当な利益、法的義務の遵守、または必要に応じてあなたの同意に基づいて処理されます。記載された目的に必要なデータのみが収集および処理されます。すべての個人データは、不正アクセス、紛失、または破壊から保護されます。
