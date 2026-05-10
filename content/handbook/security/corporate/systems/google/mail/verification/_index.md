---
title: Google Mail (Gmail) 検証ガイド
description: GitLab.com からのメールが本物かを検証する方法。
upstream_path: /handbook/security/corporate/systems/google/mail/verification/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

## GitLab.com からのメールが本物かを検証する

Gmail は、メールが本物かを検証するために 3 つのメールセキュリティプロトコルをサポートしています。

- [Sender Policy Framework (SPF)](https://en.wikipedia.org/wiki/Sender_Policy_Framework)。
- [DomainKeys Identified Mail (DKIM)](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail)。
- [Domain-based Message Authentication, Reporting and Conformance (DMARC)](https://en.wikipedia.org/wiki/DMARC)。

GitLab.com はこれら 3 つのプロトコルすべてをサポートしたメールを送信し、GitLab.com 発信を称するメールが本物であることを確認できるようにしています。

GitLab.com からのメールが本物かを検証するには:

1. 検証したいメールを開きます。
1. メールの右上、返信ボタンの隣にある縦三点ボタンを選択し、**Show original** (オリジナルを表示) を選択します。
1. 検証対象のメールが新しいウィンドウで開き、ヘッダーの表が表示されます。表の下部には、SPF、DKIM、DMARC とそのステータスが表示されているはずです。
    <img src="/images/security/corporate/systems/google/mail/verification/google_verification_example.png" alt="Google 検証の例" />
1. 3 つすべての行が見え、各行に 'PASS' が含まれていれば、そのメールは本物です。
