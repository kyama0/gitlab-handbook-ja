---
title: "ラップトップのリモート管理と監視"
aliases:
  - /handbook/security/corporate/end-user-services/laptop-management/laptop-security/management/
upstream_path: /handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/management/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:37:15+09:00"
translator: codex
stale: false
---

## 概要

GitLab には、Corporate Security が維持する責任を負う大規模で継続的に増加するラップトップ（エンドポイントとも呼ばれます）のフリートがあります。

Zero Trust セキュリティポリシーとコンプライアンスニーズを満たすために、エンドポイント管理およびフリートインテリジェンスツールを使用しています。

## モバイルデバイス管理 (MDM)

「モバイルデバイス」という用語は誤解を招きます。実際には、登録および追跡されるデスクトップ、ラップトップ、電話など、あらゆる「ユーザー」デバイスを指します。これは、ハードウェア仕様、現在のバージョン、現在のバージョンでインストールされているアプリケーションの一覧の詳細を含む構成インベントリのエクスポートをサーバーへ送信するために使用されます。

このデータは資産管理に使用し、すべてのマシンが最新バージョンを使用し、構成がコンプライアンスポリシー要件を満たしていることを遡及的にレビューするために使用します。

ソフトウェアパッケージをプッシュして自動的にインストールでき、最も重要な点として、必要に応じてラップトップをリモートで[ワイプ](/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-wipe/)できます。

GitLab が購入したすべてのラップトップは、[オンボーディング](/handbook/eta/corporate-it/end-user-services/onboarding101/)中またはラップトップの[更新](/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-ordering/#laptop-refreshes)時に MDM へ登録されます。

すべての GitLab ラップトップは[ワイプ](/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-wipe)する必要があります。これは、セキュリティインシデント中に紛失または侵害された場合、および[寄付](/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-offboarding-returns/#laptop-donations)、[返却](/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-offboarding-returns/#laptop-returns)、[修理](/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-repairs/)または[更新](/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-ordering/#laptop-refreshes)（[買い戻し](/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-offboarding-returns/#laptop-buybacks)の有無にかかわらず）による交換の前に必要です。

個人用ラップトップは MDM に登録すべきではなく、GitLab アカウントまたは業務データへのアクセスには使用できません。2 台目のラップトップが必要となる（まれな）ユースケースがある場合は、[ラップトップ調達](/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-ordering)ページを参照してください。

## エンドポイント検出および対応 (EDR)

ベンダープラットフォームとして SentinelOne はリアルタイムの活動を監視しており、過去に使用していた古いアンチウイルスおよびマルウェアソフトウェアと概念的に似ています。ただし、現代の脅威向けに構築され、侵害の可能性に関するアラートへ対応できるよう、Corporate Security と Security Incident Response Team が集中監視しています。

これは遡及的なセキュリティ調査にのみ使用され、皆さんの活動を積極的に監視するものではありません。言い換えると、「ビッグブラザー」型の監視アプローチではなく、コンピューターが侵害された場合または法的保全の案件で、可能な限り多くのフォレンジック上の証跡データを持つためのものです。個人プライバシー法が厳格な国向けに例外ポリシーを設けています。

* [SentinelOne ハンドブックページ](/handbook/security/corporate/systems/sentinelone)
* [個人プライバシー監査デモスライド](https://docs.google.com/presentation/d/1C2ufNXF28l0KTd5PPTkq1TjUWeWPI44VfwYbsvOzkns/edit)

## 法的保全と調査

チームメンバーが有効な法的保留の対象である、または有効な会社調査に関連する資料を所持している場合、通知要件を遵守する必要があります。有効な法的保留を遵守しない場合、民事罰または刑事罰および制裁を含む不利益な結果にチームメンバーまたは会社がさらされる可能性があります。通知で概説された手順に従う義務は、チームメンバーが会社を離れた場合でも、保全が解除されるまで続きます。チームメンバーが会社を離れる場合、有効な法的保留通知または有効な会社調査に従って所持しているすべての会社デバイスと資料は、退職時に引き渡す必要があります。

## 例外

この手順の例外は、[情報セキュリティポリシー例外管理プロセス](/handbook/security/)に従って追跡します。
