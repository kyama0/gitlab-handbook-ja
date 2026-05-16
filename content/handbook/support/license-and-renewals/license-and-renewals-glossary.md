---
title: ライセンスと更新の用語集
description: ライセンスと更新ワークフローで使用される用語のリスト
upstream_path: /handbook/support/license-and-renewals/license-and-renewals-glossary/
upstream_sha: 9da08370100b76603b2eb82901592f9d21c9766c
translated_at: "2026-05-08T09:50:12Z"
translator: claude
stale: false
lastmod: "2025-02-24T23:06:08+00:00"
---

## 共通用語

|用語|説明|
|--|--|
|Add-on（アドオン）|GitLab で利用できる範囲の上限を増やすために購入できるオプションの追加要素。一般的な例として、サブスクリプション期間中に追加シートを購入する `Seat add-on` や、追加の `Storage` または `Compute Minutes` の購入（SaaS のみ）があります。|
|[Cloud Licensing](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/) / Cloud Activation *(SM のみ)* | self-managed のサブスクリプションを有効化する推奨方法。[サブスクリプションデータが顧客のインスタンスから Customers.gitlab.com へ毎日同期されます](https://docs.gitlab.com/subscriptions/self_managed/#subscription-data-synchronization)。ライセンスファイルとは異なり、サブスクリプションの変更や更新時にクラウド有効化コードを再適用する必要はありません。|
|Customers Portal / CustomersDOT / customers.gitlab.com|[customers.gitlab.com](https://customers.gitlab.com) で利用可能。Customers Portal では、顧客がサブスクリプションの確認、管理、購入を行えます。L&R エンジニアはここからサブスクリプション情報を生成、変更、送信できます。|
|[GitLab Dedicated](https://docs.gitlab.com/subscriptions/gitlab_dedicated/)|SaaS のメリット（フルマネージドのメンテナンスと運用）に加えて、インフラレベルでの分離を提供しつつ、顧客が自身のインスタンス上の管理者アカウントへアクセスできるようにします。|
|Legacy License File / License Key *(SM のみ)*| ライセンスファイルは、SM トライアルの提供や、特定の条件に該当する顧客向けの選択肢として、現在ではレガシーオプションとなっています。GitLab 14.1 より前ではサブスクリプションを有効化するためにライセンスファイルが必要です。ライセンスファイルは通常、有効期限が最大 1 年で、サブスクリプションの変更や更新時に再発行とアップロードが必要です。|
|[Namespace](https://docs.gitlab.com/user/namespace/#namespaces) *(SaaS のみ)*|サブスクリプションが適用される gitlab.com 上のトップレベルグループ。サブスクリプションプランは、その名前空間配下のすべてのサブグループとプロジェクトで利用できます。|
|Offline Cloud Licensing *(SM のみ)*| インターネットアクセスのないインスタンスを維持しなければならない状況では、[Offline Cloud License](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/#offline-cloud-licensing) がローカルで使用データファイルを生成することにより Cloud Licensing のメリットを提供します。顧客はそのファイルを毎月アップロードするよう求められます。|
|[Quarterly Subscription Reconciliation (QSR)](https://docs.gitlab.com/subscriptions/quarterly_reconciliation/)|True-Up に代わる「従量課金」型として導入されました。QSR は四半期ごとに処理され、True-Up の年次方式と比較してコスト削減をもたらします。|
|Seat（シート）|シートは GitLab における「同時ソフトウェアライセンス」の実装を表します。これは、GitLab アプリケーションを使用し有料機能にアクセスするユーザーの同時最大数を意味します。顧客は、利用中のシート総数が購入シート総数を超えない限り、GitLab シートを使う特定のユーザーを変更できます。|
|Self-Managed (**SM**)|顧客自身が管理する GitLab アプリケーションのインスタンス。顧客は環境への完全なアクセスと管理権限を保持します。|
|Software-as-a-Service (**SaaS**)|GitLab.com は GitLab 製品の Software as a Service (SaaS) 提供形態です。GitLab チームメンバーが GitLab.com のメンテナンス、運用、アップグレードを担当します。|
|Subscription（サブスクリプション）|通常、GitLab のあるティアの機能にアクセスするための 12 か月契約。|
|Trial（トライアル）|GitLab 有料機能の短期間（通常最大 30 日）のお試し。SaaS で使用する際には [いくつかの制限](https://about.gitlab.com/free-trial/#what-is-included-in-my-free-trial-what-is-excluded) があります。顧客は SaaS および Self-Managed のいずれについても、gitlab.com から直接トライアルを開始できます。トライアルは、顧客の購入が完了していない場合にサブスクリプションを延長する目的で、GitLab セールスから依頼されることもよくあります。|
|True-Up|サブスクリプション期間が終了した後に `Users over Subscription` を調整する方法。True-Up では、Users over Subscription に対して、前のサブスクリプション期間をカバーするためにフルのサブスクリプション料金が必要になります。|
|User（ユーザー）|GitLab プラットフォーム上のユーザー。ほとんどのユーザーはシートを占有しますが、[一部例外](https://about.gitlab.com/pricing/licensing-faq/#GitLab.com) があります。ユーザーには（Self-Managed 上の）管理者アカウントや、自動化ジョブやボットユーザーも含まれることがあります。|
|[Users over Subscription](https://docs.gitlab.com/subscriptions/self_managed/#users-over-subscription) (**SM**) / [Seats owed](https://docs.gitlab.com/subscriptions/gitlab_com/#seats-owed) (**SaaS**) |GitLab は購入済みシート契約を超える追加利用を許可しています。これにより、サブスクリプション期間中に不必要な障害なしにより多くのユーザーを追加できます。この超過分はいつでも処理することができ、現行サブスクリプションへのシート追加（seats add-on）、年次処理（`True-Up`）、四半期処理（`Quarterly Subscription Reconciliation`）のいずれかが利用できます。|
