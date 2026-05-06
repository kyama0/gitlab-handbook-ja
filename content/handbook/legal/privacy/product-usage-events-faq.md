---
title: "FAQ - 顧客製品使用イベント"
description: "製品使用イベントデータに関するよくある質問への回答"
upstream_path: "/handbook/legal/privacy/product-usage-events-faq/"
upstream_sha: "02cf85a2ba59858c59b2a31a0356f2371a2a8979"
translated_at: "2026-04-29T07:00:00Z"
translator: claude
stale: false
---
このページでは、顧客製品使用[イベントデータ収集](https://docs.gitlab.com/administration/settings/event_data)についてのよくある質問に回答しています。

**重要な注意事項：**

- このFAQの情報は**GitLab セルフマネージドおよびDedicated**のイベント収集にのみ関連しています。
- このFAQでイベント収集に言及する場合、GitLab Duoに関連するものを除くすべての機能の製品使用イベントについて話しています。詳細は、顧客製品使用情報の[ページ](/handbook/legal/privacy/customer-product-usage-information/)をご参照ください。
- このFAQは、[ドキュメント](https://docs.gitlab.com/administration/settings/event_data)にまだカバーされていない追加の質問に答えることを目的としています。
イベントデータ収集、設定手順、プライバシー慣行についての基礎的な詳細は、[ドキュメント](https://docs.gitlab.com/administration/settings/event_data)と関連する[ブログ記事](https://about.gitlab.com/blog/2025/03/26/more-granular-product-usage-insights-for-gitlab-self-managed-and-dedicated/)をご参照ください。

## よくある質問

### Q: イベントレベルのデータにはソースコードや GitLab 内に保存された顧客が作成したコンテンツが含まれますか？

**A:** いいえ。イベントデータにはソースコードも顧客が作成したコンテンツも含まれません。  
収集されるものとされないものの詳細については、[ドキュメント](https://docs.gitlab.com/administration/settings/event_data)をご参照ください。

---

### Q: コンプライアンスリスクを最小化する必要があります。イベントデータ収集をオプトインにできますか？

**A:** データ収集はオプトアウト設定になっていますが、デフォルトの共有が開始される前に顧客がデータ共有設定を管理できることを確保したいと考えています。

GitLab 17.11では、顧客が事前にデータ共有を無効にする機会があります。バージョン18.0はメジャーバージョンであるため、顧客はまず17.11にアップグレードしてから18.0に移行する必要があります。これにより、顧客は収集が開始される前にデータ共有を事前にオフにし、データ収集に対する完全な制御を維持する機会が与えられます。詳細については、[ブログ記事](https://about.gitlab.com/blog/2025/03/26/more-granular-product-usage-insights-for-gitlab-self-managed-and-dedicated/#you-stay-in-control-of-your-data)の顧客管理に関するセクションをご参照ください。

---

### Q: イベントレベルのインサイトはCSMを通じてのみ共有されますか、それともGitLab UIまたはポータルでも共有されますか？

**A:** イベント収集が開始されると、CSMはこのデータにアクセスし、それを使用してカスタマイズされたインサイトを提供できます。将来的にはこのデータを顧客に公開する計画があります。詳細とタイムラインについては、利用可能になり次第お知らせします。

---

### Q: イベントレベルのデータ収集をオプトアウトするとどのような影響がありますか？

**A:** オプトアウトを選択した場合、即時の悪影響はありません。参加は完全に任意です。  

ただし、将来的に製品使用データの顧客向けビューを提供する際、オプトアウトした顧客はそのビューで探索できるデータが利用できなくなります。

---

### Q: GitLab はイベントデータをどのくらいの期間保持しますか？

**A:** イベントデータは収集時点から3年を超えて保持されません。

---

### Q: データはどのくらいの頻度でGitLabに送信されますか？

**A:** 詳細については、[ドキュメント](https://docs.gitlab.com/administration/settings/event_data)をご参照ください。

---

### Q: 特定のデプロイメントのデータの予想されるボリュームや量はどのくらいですか？

**A:** 詳細については、[ドキュメント](https://docs.gitlab.com/administration/settings/event_data)をご参照ください。

---

### Q: 送信中にデータは何らかの方法で暗号化されますか？

**A:** はい。Snowplowイベントデータは送信中に暗号化されます。SnowplowはHTTPS/TLSを使用してクライアントからコレクターエンドポイントにデータを安全に送信し、転送中のデータが暗号化されることを確保します。  

Snowplowの収集と転送に関わるすべてのシステムはGitLabが管理するものであるため、転送中の暗号化はセキュリティとコンプライアンスプログラムの標準的な慣行です。

---

### Q: 顧客のセキュリティチームは送信されるデータをどのように検査できますか？

**A:** セキュリティチームが送信されるデータを検査できるよう、18.0でログを提供する予定です。ドキュメントはリリース後[こちら](https://docs.gitlab.com/administration/settings/event_data)で利用可能になります。

*注意：* これらのログはデータ送信への徹底的な可視性を提供しますが、フィーチャー使用分析よりもセキュリティチームによる検査のために特別に設計されています。  

フィーチャーの使用状況に関するインサイトについては、フィーチャー使用アナリティクス専用に構築された予定の製品内導入レポートを待つことをお勧めします。

---

### Q: セルフマネージドのイベントデータがデフォルトでオプトアウトになる状況はありますか？

**A:** はい、以下のいずれかに該当するインスタンスからはデフォルトでイベントデータを収集しません。

- インスタンスが[オフラインライセンス](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/)を使用している；
- インスタンスがエアギャップされている；または
- インスタンスが営業担当者またはカスタマーサポートによって[運用Service Pingデータ](https://about.gitlab.com/pricing/faq-improved-billing-and-subscription-management/#operational-data)の無効化の承認をすでに受けている。
