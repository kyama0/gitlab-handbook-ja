---
title: ラップトップのリモート管理および監視
upstream_path: /handbook/security/corporate/end-user-services/laptop-management/laptop-security/management/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
---

## 概要

GitLab には、Corporate Security が保守を担当する、大規模かつ常に増加し続けるラップトップ (エンドポイント) の集合があります。

私たちは、Zero Trust セキュリティポリシーとコンプライアンス要件を満たすために、エンドポイント管理ツールおよびフリートインテリジェンスツールを使用しています。

## モバイルデバイス管理 (MDM)

「モバイルデバイス」という用語は紛らわしいですが、実際には登録および追跡されているデスクトップ、ラップトップ、電話を含むあらゆる「ユーザー」デバイスを指します。これは、ハードウェア仕様、現在のバージョン、現在のバージョンとともにインストールされているアプリケーションのリストに関する詳細を含む構成インベントリエクスポートをサーバーに送信するために使用されます。

私たちはこのデータを資産管理に使用するとともに、すべてのマシンが最新のバージョンを使用しているか、構成がコンプライアンスポリシー要件を満たしているかを事後的にレビューするために使用しています。

ソフトウェアパッケージをプッシュして自動的にインストールしたり、最も重要な点として、必要な場合にはラップトップを[リモートでワイプ](/handbook/security/corporate/end-user-services/laptop-management/laptop-wipe/)したりする機能を備えています。

GitLab が購入したすべてのラップトップは、[オンボーディング](/handbook/security/corporate/end-user-services/onboarding101/)またはラップトップ[リフレッシュ](/handbook/security/corporate/end-user-services/laptop-management/laptop-ordering/#laptop-refreshes)時に MDM に登録されます。

GitLab のすべてのラップトップは、紛失した場合やセキュリティインシデント中に侵害された場合、また[寄付](/handbook/security/corporate/end-user-services/laptop-management/laptop-offboarding-returns/#laptop-donations)、[返却](/handbook/security/corporate/end-user-services/laptop-management/laptop-offboarding-returns/#laptop-returns)、[修理](/handbook/security/corporate/end-user-services/laptop-management/laptop-repairs/)または[リフレッシュ](/handbook/security/corporate/end-user-services/laptop-management/laptop-ordering/#laptop-refreshes)による交換 ([買取](/handbook/security/corporate/end-user-services/laptop-management/laptop-offboarding-returns/#laptop-buybacks)の有無に関わらず) の前に[ワイプ](/handbook/security/corporate/end-user-services/laptop-management/laptop-wipe)する必要があります。

個人用ラップトップは MDM に登録すべきではなく、GitLab アカウントや業務データへのアクセスに使用することはできません。2 台目のラップトップを必要とする (まれな) ユースケースがある場合は、[ラップトップ調達](/handbook/security/corporate/end-user-services/laptop-management/laptop-ordering)ページを参照してください。

## エンドポイント検出と応答 (EDR)

ベンダープラットフォームとして、SentinelOne はリアルタイムのアクティビティを監視しており、過去に使用していた古いアンチウイルスやマルウェアソフトウェアと概念的には似ていますが、現代の脅威に対応するために構築されており、Corporate Security と Security Incident Response Team によって一元的に監視され、潜在的な侵害アラートに対応できるようになっています。

これは事後的なセキュリティ調査のためにのみ使用され、私たちは積極的にあなたのアクティビティを監視しているわけではありません。つまり、「ビッグブラザー」型の監視アプローチではなく、コンピューターが侵害された場合や法的保留事項のために、可能な限り多くのフォレンジック追跡データを保持するためのものです。厳格な個人プライバシー法を持つ国向けの免除ポリシーも整備しています。

* [SentinelOne ハンドブックページ](/handbook/security/corporate/systems/sentinelone)
* [個人プライバシー監査デモスライド](https://docs.google.com/presentation/d/1C2ufNXF28l0KTd5PPTkq1TjUWeWPI44VfwYbsvOzkns/edit)

## 法的保留および調査

チームメンバーがアクティブな法的保留下にある、またはアクティブな会社調査に関連する資料を保持している場合、通知要件に従う必要があります。アクティブな法的保留に従わない場合、チームメンバーまたは会社が民事または刑事罰や制裁を含む不利な結果にさらされる可能性があります。通知に記載された手順に従う義務は、保留が解除されるまで継続し、会社を退職した場合でも同様です。チームメンバーが会社を退職する場合、すべての会社デバイスおよびアクティブな法的保留通知またはアクティブな会社調査に従って保持しているすべての資料を、退職時に引き渡す必要があります。

## 例外

この手順への例外は、[情報セキュリティポリシー例外管理プロセス](/handbook/security/)に従って追跡されます。
