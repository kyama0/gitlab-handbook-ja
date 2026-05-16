---
title: Google Cloud クレジットのトラブルシューティング
category: License and subscription
description: "お客様が Google Cloud クレジット（GCP クレジット）を利用できないと報告した場合のサポートエンジニアリングワークフロー"
upstream_path: /handbook/support/workflows/google_cloud_credit_troubleshooting/
upstream_sha: 47fdb6582389288bed0f04a23aa5d972c3ce1ff5
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-06-27T22:14:31+00:00"
---

## 概要

ユーザーが Google Cloud クレジット（GCP クレジット）を利用できないと報告した場合に、このワークフローを使用します。

---

## ワークフロー

1. ユーザーがクレジットを申請したときに、次の URL を使用したかどうかを尋ねます: <https://cloud.google.com/partners/partnercredit/?pcn_code=0014M00001h35gDQAQ#contact-form>
    1. 使用していない場合は、リンクを試して問題があれば報告するよう依頼します。
    1. 使用した場合は、以下の指示に従います。
1. GCP アカウントに関する以下の情報をユーザーに尋ねます
    1. Google 課金 ID
    1. フルネーム
    1. メールアドレス
1. ユーザーの代わりに [このフォーム](https://docs.google.com/forms/d/e/1FAIpQLScKgwz-P8wcBpQ-SprEEQDzxHoVyoBlaYqStlP9LsVUvHTTQQ/viewform) を送信します
    1ページ目:
    1. メールアドレス: 自分（サポートエンジニア）のメールアドレス
    1. 役割は何ですか？: Partner
    2ページ目:
    1. 名前: ユーザーの名前
    1. メールアドレス: ユーザーのメール
    1. 会社名: GitLab
    1. パートナータイプ: `Alliance / Technology / Vertical (excl. Healthcare) Partner`
    1. 課金アカウント ID: ユーザーの Google 課金 ID
    1. Google 営業担当者のメール: <manverma@google.com>
    1. SUBMIT を選択
1. 参照用にフォームのコピーを Zendesk チケットに添付します
1. [`General::Google Cloud Credit Troubleshooting Form Submitted`](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=17008590&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360073423299) マクロで返信し、フォームを送信したことを伝えます。
1. 確認を受け取ったら、ユーザーに更新を伝えてチケットをクローズします。

### 追加リファレンス

1. 参照チケット: [ZD#133164](https://gitlab.zendesk.com/agent/tickets/133164) と [ZD#117290](https://gitlab.zendesk.com/agent/tickets/117290)
1. Google から返信が無く、ユーザーがクレジットを持っていない場合は、エスカレーション支援のためプロダクトマーケティングに Slack で連絡します
