---
title: "GitLab ラップトップ管理"
upstream_path: /handbook/eta/corporate-it/end-user-services/laptop-management/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:32:14+09:00"
translator: codex
stale: false
---

## はじめに

EUS チームは、すべてのラップトップの調達と管理を監督しています。エンドポイント管理の構成など、特定の側面は CorpSec チームがサポートしますが、通常は関連するすべての問題の窓口として対応します。

GitLab では、会社支給デバイスに集中型ラップトップ管理を使用しています。会社支給のデバイスを所持している場合は、以下の詳細が適用されます。ただし、GitLab が展開するすべてのエンドポイント管理テクノロジーが、すべてのデバイスで必要になるわけではありません。一部のテクノロジーは、ハードウェアプラットフォームまたはオペレーティングシステムに固有の場合があります。

すべてのチームメンバーにタイムリーで一貫した配送体験を確保するため、グローバルベンダーからラップトップを一括発注します。

**新しいリリースを発注する前に、既存の在庫を使用します**。つまり、最新モデルは発表時にすぐ利用できるわけではありません。新モデルの在庫時期に決まったタイムラインはありません。各地域での新規採用とデバイス更新のペースに応じて、地域ごとに異なります。

**ラップトップ構成は、地域の在庫状況によって異なります。**たとえば、一部の地域ではスペースグレイの 2024 年モデルを提供している一方、他の地域ではシルバーの 2025 年モデルを提供している場合があります。

> **注**: ほとんどの場合、更新よりも新規採用者向けラップトップの注文を優先します。在庫状況によっては、更新が遅れる場合があります。

## ラップトップの仕様 {#laptop-specs}

GitLab は、チームメンバーのラップトップで macOS と Linux の使用を承認し、サポートします。GitLab IT Support を効率的に維持するため、Windows はラップトップ OS としてサポートされません。

GitLab が承認するオペレーティングシステム、バージョン、例外プロセスの詳細は、内部の [GitLab Team Member Endpoint Systems 向けの承認済みオペレーティングシステム](https://internal.gitlab.com/handbook/security/corporate/operating-systems/)ページで確認できます。

Apple ハードウェアは GitLab チームメンバーの標準的な選択肢です。Linux は希望するチームメンバー向けの代替手段として利用できますが、サポートが限定的なため推奨されません。Linux を選択するチームメンバーは、完全に自己完結できる必要があります。

### Apple ハードウェア {#apple-hardware}

標準のラップトップ提供内容は以下のとおりです:

* MacBook Pro 14 インチ - 24GB ユニファイドメモリ / 1TB ストレージ **標準モデル**
* MacBook Pro 16 インチ - 64GB ユニファイドメモリ / 1TB ストレージ **高性能モデル**
* MacBook Pro 14 インチ - 64GB ユニファイドメモリ / 1TB ストレージ **高性能モデル**

より高性能なマシンを必要とするほとんどのロールは、14 インチまたは 16 インチの MacBook Pro 高性能モデルを承認されています。対象となるマシンを確認するには、この[スプレッドシート](https://docs.google.com/spreadsheets/d/1409j22VpvOwF7DrVGhvJ4PJmwboG0NjoMu6UKx8YXfE/edit?usp=sharing)（公開）を参照してください。

### Linux ハードウェア

{{% alert color="warning" %}}
Linux は macOS の代替として利用できますが、サポートが限定的なため推奨されません。Linux を選択すると、環境の維持に関する全責任を受け入れ、IT がサポートを提供しないことを理解したものとみなされます。Slack にはヒントやコツを交換するための #linux チャンネルがありますが、公式のヘルプデスクリソースではありません。
{{% /alert %}}

**Dell は唯一の承認済み Linux ラップトップベンダーです。**これらのラップトップには通常 Ubuntu Linux がプリインストールされています。一部の国では Dell が Linux をプリインストールしたラップトップを販売していません。その場合、チームメンバーは自身で Linux をインストールする必要があります。

> Linux ラップトップの最高価格は、**同等の [16 インチ MacBook Pro ラップトップ](#apple-hardware)の価格**を超えてはなりません。

**Ubuntu LTS（最新バージョン）は唯一の承認済み Linux ディストリビューションです。**

#### 要件

* **Fleet 登録:** すべての Linux エンドポイントには、[Fleet](#fleet)がインストールされている必要があります。
* **EDR エージェント:** CrowdStrike または SentinelOne が必要です（Fleet 経由で自動インストールされます）。
  * **SentinelOne:** オランダ、ドイツ、イタリア、オーストリア。
  * **CrowdStrike:** その他すべての地域。
* **フルディスク暗号化:** LUKS 暗号化が必要です。
* **自己管理:** セキュリティパッチとバージョンアップグレードを含め、Linux 環境を維持する責任があります。

EDR の展開は、[仮想マシン](/handbook/security/corporate/systems/sentinelone/#virtual-machines)を含むすべてのチームメンバーのエンドポイントシステムで必要です。Docker コンテナは MDM/EDR 登録要件の対象外です。

### Customer Support と Product Development 向けの Windows {#windows-for-customer-support-and-product-development}

Windows は GitLab Corporate サービス（例: Slack、G-Suite、GitLab.com）へのアクセスには使用できません。Windows OS は、GitLab 管理デバイスに追加する場合にのみ使用できます。特定のロールでは、Microsoft Ecosystem 向けに開発する GitLab の顧客とパートナーのプラットフォームおよびエコシステムサポートを確保するため、Windows を使用する必要があることを理解しています。

仮想化された Windows の使用が強く推奨され、ほとんどのサポートおよび開発ニーズを満たすはずです。Windows の使用に関する完全な詳細は、内部の [GitLab Team Member Endpoint Systems 向けの承認済みオペレーティングシステム](https://internal.gitlab.com/handbook/security/corporate/operating-systems/#windows-for-customer-support-and-product-development)ページで確認できます。

## ラップトップ管理ポリシー

特定のハードウェア要件に加えて、すべての GitLab デバイスの安全性を維持するため、さまざまなポリシーとソフトウェアソリューションも採用しています。

### エンドポイント管理

#### Jamf

[Jamf](https://www.jamf.com/)により、アップデートのプッシュ、デバイスの暗号化、ラップトップのリモートロックおよびワイプなどのタスクを実行するために、すべての Mac をリモートで管理できます。GitLab ベンダーが購入して発送するすべての新しい Mac は、Jamf に自動登録されます。自分で調達したラップトップでは、手動登録が必要になる場合があります。Jamf に登録されていない Mac から GitLab Corporate サービスにアクセスしてはいけません。

#### Fleet {#fleet}

[Fleet](https://fleetdm.com/)は、GitLab Corporate サービスにアクセスできるようにするため、すべての Dell デバイスにインストールする必要があるオープンソースのリモート管理システムです。Jamf と同様に、登録されたラップトップをリモートで管理してセキュリティコンプライアンスを確保し、マシンのリモートロックやワイプなどのタスクを実行できます。

### Backblaze

[Backblaze](https://www.backblaze.com/)は、現地のデータ、プライバシー、雇用に関する法律に従い、Legal および People Ops チームからのリクエストがある場合に限り、セキュリティまたは法的な保全/調査の際に会社所有デバイスのデータをバックアップするために展開される可能性があるツールです。

多層防御とは、各レイヤーで安全を確保するために最善を尽くすことを部分的に意味します。さらに詳しい手順については、新しいラップトップを構成する際に[セキュリティのベストプラクティス](/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/)を参照してください。
