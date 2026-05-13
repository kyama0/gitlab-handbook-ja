---
title: "GitLab 内部利用ポリシー（Acceptable Use Policy）"
description: "本ポリシーは、GitLab のコンピューティングリソースおよびデータ資産の利用に関する要件を定めるものです。"
controlled_document: true
tags:
  - security_policy
  - security_policy_caplscsi
upstream_path: /handbook/people-group/acceptable-use-policy/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## 目的

本ポリシーは、GitLab チームメンバーによる GitLab のコンピューティングリソースおよびデータ資産の利用に関する要件を定め、お客様、チームメンバー、業務委託者、当社、その他のパートナーを、意図的および不注意による誤用の両方から保護することを目的としています。本ポリシーを公開する意図は、GitLab の資産を保護するための情報セキュリティガイドラインを示すことです。

GitLab コミュニティの各メンバーは、GitLab のコンピューティングリソースおよびデータと安全に対話する責任を負います。そのために、コンピューティングリソース、会社およびお客様のデータ、モバイルおよびタブレット端末、リムーバブルおよび外付けメディアストレージデバイスに関する以下の利用基準を定めています。

## 適用範囲

本ポリシーは、GitLab のコンピューティングリソースを利用し、会社またはお客様のデータにアクセスするすべての GitLab チームメンバー、業務委託者、アドバイザー、契約当事者に適用されます。

## 役割と責任

| 役割  | 責任 |
|-----------|-----------|
| GitLab チームメンバー | 本手順における要件に従う責任を負う |
| セキュリティ、リーガル、PeopleOps | 本手順の実装および実行の責任を負う |
| セキュリティ、リーガル、PeopleOps（Code Owner） | 本手順への重要な変更と例外の承認責任を負う |

## 手順

### GitLab におけるコンピューティングリソースの利用基準とセキュリティ要件

GitLab が管理する資産は、GitLab の業務を遂行するために提供され、個別の雇用契約や合意における矛盾する記述に従うことを条件として、限定的な個人利用も認められています。当社は、グローバルな電子コミュニケーションおよびリソースを業務活動の日常的な一部として利用しています。GitLab が管理する資産の個人的および業務的な利用は、各チームメンバーの管轄区域の現地法で禁止されていない限り、セキュリティ監視および保護の対象となります。会社の業務を遂行するために使用される電子リソースを保護することは、これらのリソースを業務目的でアクセス可能とし、費用効率の高い方法で運用し、当社の評判を保護し、法的リスクの可能性を最小化するために不可欠です。

GitLab が提供する資産を受け取る者は、GitLab が管理するコンピューターを使用し、GitLab が管理するデータにアクセスする際に、適切な判断を行使する責任があります。

ハンドブックに記載されている[オンボーディング Issue の手順](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/blob/main/.gitlab/issue_templates/onboarding.md)に従って、オンボーディング期間の完了前に、デバイスの暗号化およびデバイスのシリアル番号の証拠を IT Ops に提供する必要があります。

現在、Mac ラップトップのエンドポイント管理ソリューションとして Jamf を使用しています。GitLab が調達するすべての macOS ラップトップは、[Jamf](https://internal.gitlab.com/handbook/it/endpoint-tools/) が設定された状態で出荷されます。Mac ラップトップを自身で調達し経費として申請する GitLab チームメンバーは、[Day 1 Security tasks](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/blob/main/.gitlab/issue_templates/onboarding.md#day-1-getting-started-accounts-and-paperwork) の一環として [Jamf](https://internal.gitlab.com/handbook/it/endpoint-tools/) のインストールが必要です。CorpSec は、その裁量により、Jamf を介して追加のセキュリティツールをインストールすることがあります。

Linux ユーザーは、オンボーディングプロセスの最初の週に、[SentinelOne](https://internal.gitlab.com/handbook/it/endpoint-tools/sentinelone/#how-do-i-install-the-sentinelone-agent-on-linux) と [DriveStrike](https://internal.gitlab.com/handbook/it/it-self-service/it-guides/drivestrike/) をインストールする必要があります。

GitLab から支給される資産は会社の財産であり、慎重かつ尊重して取り扱う必要があります。会社の資産にステッカーを貼る場合:

- すべてのコンテンツが職業上かつ職場環境に適切であることを確認してください
- デバイスを損傷したり、その動作を妨げる可能性のあるステッカーは貼らないでください
- 通気口、ファン、その他の機能要素を覆わないでください
- 画面または閉じた際に画面を遮る可能性のある領域には何も貼らないでください

### セキュリティおよび独占的情報

すべての GitLab データは分類されており、[Data Classification Standard](/handbook/security/policies_and_standards/data-classification-standard/) に従って取り扱われる必要があります。GitLab ネットワークの一部、または GitLab が利用する第三者サービスに接続するすべてのコンピューティング資産は、適用される基準に準拠する必要があります。

### カスタマーサポートデータの例外

GitLab の [Data Classification Standard](/handbook/security/policies_and_standards/data-classification-standard/) で概説されているとおり、承認されていないシステム上での RED データへのアクセスは一般に禁止されていますが、お客様への技術サポートを提供するチームメンバーには限定的な例外が存在します。

チームメンバーは、カスタマーサポートサービスを提供する目的に限って、RED に分類されたお客様のデータを GitLab が管理するラップトップに移行することが認められています。この例外は次の要件を条件とします:

- データの移行はアクティブなカスタマーサポートケースに対してのみ許可されます
- お客様のデータは、サポートケースの解決後、速やかに削除する必要があります
  - macOS では、ゴミ箱を空にすること、または `rm` コマンドラインユーティリティ（ゴミ箱をスキップする）を使用する必要があります
- すべてのデータ取り扱いアクティビティは ZenDesk チケット内に記録し、文書化する必要があります

重要: お客様のデータをローカルマシンに移行することは、カスタマーサポート提供以外のすべての業務オペレーションでは禁止されています。同様のデータアクセスを他の目的で必要とするチームメンバーは、[Security and Technology Policy Exception Process](/handbook/security/security-and-technology-policy-exception/#exceptions) に従うか、進める前にセキュリティまたはプライバシーチームに質問してください。

### オープンソースライブラリ

オープンソースライブラリは、[Product Legal Handbook](/handbook/legal/product/#using-open-source-software) に記載されている事前承認または承認要件に準拠する場合、本ポリシーの下で利用が許可されます。

### フリーウェア、ブラウザー拡張機能、アドオン、プラグイン

個人利用ソフトウェア（フリーウェア、アドオン、プラグイン）は、未承認の Google Workspace 統合および Chrome 拡張機能を除き、利用が認められています。個人利用ソフトウェアは、安全または安心でないと判断された場合、IT、リーガル、セキュリティによっていつでも遡及的に削除される可能性があります。

承認済みの Google Workspace 統合およびその他の承認された個人利用ソフトウェアは、[Pre-Approved Individual-Use Software](https://internal.gitlab.com/handbook/finance/procurement/pre-approved-individual-use-software/) リストに記載されており、それぞれの事前承認ソフトウェアの「Notes and Restrictions」に従って利用が認められます。

新しい個人利用ソフトウェアの承認をリクエストするには、[Individual Use Software](/handbook/finance/procurement/individual-use-software/) リクエストプロセスに従ってください。

{{% alert title="Note" %}}
[SAFE Framework](/handbook/legal/safe-framework/) を遵守し、寛容な個人利用ライセンス条件下での第三者による会社データの処理を防止し、またはチームメンバーによる特定のサードパーティソフトウェア機能の誤用を防ぐため、IT、リーガル、プライバシー、セキュリティは、特に [Tech Stack Applications](/handbook/business-technology/tech-stack-applications/) に同様の目的を達成するエンタープライズオプションが既に存在する場合、エンタープライズレベルソフトウェアの例外を許可しない方向に判断する傾向があります。
{{% /alert %}}

### 利用が認められない用途

チームメンバーおよび業務委託者は、いかなる状況においても、GitLab が管理するリソースを、適用される法律の下で違法または禁止されているアクティビティに使用すること**はできません**。

GitLab の本番環境および企業環境ならびに GitLab が管理する資産におけるセキュリティ要件は、[Information Security Policy Exception Management Process](/handbook/security/controlled-document-procedure/#exceptions) を介したセキュリティの承認なしに無効化してはなりません。

#### 禁止されているシステムおよびネットワークアクティビティ

禁止されているシステムおよびネットワークアクティビティには、以下が含まれますが、これらに限定されません:

- 著作権、企業秘密、特許、その他の知的財産、または同様の法律もしくは規制により保護されている個人または企業の権利の侵害
- 著作権で保護された素材の無断複製、配布、または使用
- 国際または国家の輸出管理法に違反するソフトウェア、技術情報、暗号化ソフトウェア、または技術の輸出
- GitLab ネットワークまたは GitLab が管理するコンピューティングデバイスへの悪意のあるプログラムの意図的な導入
- GitLab が管理するコンピューティングデバイスまたは GitLab ネットワークの意図的な誤用（例: 暗号通貨マイニング、ボットネット制御など）
- GitLab が管理するコンピューターまたは GitLab が使用する第三者サービスの認証情報を他者と共有すること、または自身のアカウントもしくは GitLab が管理するコンピューターを他者に使用させること。この禁止は、利用が承認されているシングルサインオンまたは同様の技術には適用されません
- セクシャルハラスメントポリシーに違反する、または敵対的な職場環境を作り出す素材の調達または送信のために GitLab のコンピューティング資産を使用すること
- GitLab アカウントを起点として、商品、アイテム、サービスの不正なオファーを行うこと
- チームメンバーまたは業務委託者がアクセス権限を持たないデータまたはコンピューター/アカウントに意図的にアクセスすること、またはネットワーク通信、コンピューター処理、もしくはアクセスを妨害すること
- GitLab のためにネットワークの問題をトラブルシューティングする場合を除き、チームメンバーまたは業務委託者のコンピューター宛てではないデータを傍受する形のネットワーク監視を実行すること
- セキュリティ管理またはログを回避、変更、無効化、改ざんしようとすること
- セキュリティマネージャーの事前承認なしにセキュリティ管理をアンインストールしようとすること
- GitLab が使用するコンピューターホスト、ネットワーク、またはアカウントのユーザー認証またはセキュリティを回避すること
- GitLab のために問題をトラブルシューティングする場合を除き、ネットワークセグメントまたはセキュリティゾーン（例: `gprd`, `gstg`, `ops`, `ci`, `ngrok`）間をトンネリングすること
- スクリーンショット画像に含まれるデータの機密性の可能性を考慮し、スクリーンショットをキャプチャしてオンラインのホストサイトに共有するツールの利用は、セキュリティおよびリーガル部門の明示的な承認なしには禁止されています。スクリーンショットはローカルに、または GitLab.com アカウントに関連付けられた Google ドライブフォルダー内に保存する必要があります。これらのドライブおよびファイルへのアクセスは、[Access Management policy](/handbook/security/security-and-technology-policies/access-management-policy/) に従って管理し、[Data Classification Standard](/handbook/security/policies_and_standards/data-classification-standard/) に従って取り扱う必要があります。アップロード機能を無効化できず、意図しないアップロードが発生する可能性のあるツール（例: [Lightshot](https://app.prntscr.com/en/index.html)）は使用すべきではありません
- TeamViewer や AnyDesk など、[攻撃者によってシステムへのアクセスやリモート制御の獲得によく使用される](https://attack.mitre.org/techniques/T1219/)、ハイリスクなリモート管理ツールの利用
- 別のオペレーティングシステムをエミュレートしたり、[WINE](https://www.winehq.org/) のような互換性レイヤーを作成したりするツール
- GitLab のコンピューティング資産での torrent またはその他の P2P ソフトウェアの使用

#### 禁止されているメールおよびコミュニケーションアクティビティ

機密性の高い業務メールや文書を個人の外部メールアドレスに転送することは禁止されています。チームメンバーのアカウントからのメールの自動転送も禁止されています。

> 注: GitLab は十分な理由がある場合、事前通知なくアーカイブおよびサーバーからメッセージを取得することがあります。必要と判断された場合、この調査はセキュリティ、People Business Partners、リーガル部門の認識と承認のもとで実施されます。

[Team Member Social Media Policy](/handbook/marketing/team-member-social-media-policy/) に従うことに加え、ソーシャルメディアを利用する際は、自身の発言の影響を考慮してください。これらの発信は永続的で容易に転送可能であり、当社の評判ならびにチームメンバーやお客様との関係に影響を与える可能性があることに留意してください。ブログ、Facebook、Twitter、Wiki などのソーシャルメディアツールを使用する際は、適切な承認なしに GitLab を代表してコメントしないでください。また、当社の事業、サプライヤー、お客様に関する機密または独占的情報を開示してはなりません。

### GitLab 所有資産の返却

すべての GitLab 所有のコンピューティングリソースは、会社からの離職時に[返却する](/handbook/people-group/offboarding/#returning-property-to-gitlab)必要があります。[Laptop Buy Back Policy](/handbook/security/corporate/end-user-services/end-user-services/laptop-management/laptop-offboarding-returns/#laptop-buybacks) や [Offboarding Tasks](/handbook/people-group/offboarding/#managing-the-offboarding-tasks) における反対の記述にかかわらず、チームメンバーは、GitLab 在籍中またはオフボーディング時に具体的に要求された場合、評価額にかかわらず、GitLab 所有のすべての資産を返却する必要があります。調査、不正行為、原因のある解雇、または [GitLab's Code of Business Conduct & Ethics](https://ir.gitlab.com/governance/governance-documents/default.aspx) のいかなる違反のケースにおいても、チームメンバーには GitLab 所有のコンピューティング機器を保持する権利はありません。

### Bring-Your-Own-Device (BYOD)

原則として、非会社デバイスから会社の資産にアクセスすることは許可されていません。以下にいくつかの例外が記載されていますが、[GitLab Data Classification Standard](/handbook/security/policies_and_standards/data-classification-standard/) で定義されている RED 分類データへのアクセスは依然として禁止されています。

例外は次のとおりです:

#### 個人用モバイル電話およびタブレットの利用

メールや GitLab.com を含む（ただしこれらに限定されない）GitLab が管理するデータにアクセスするために使用されるすべての個人用モバイルコンピューティングデバイスは、パスコードが有効になっている必要があります。すべての従業員および業務委託者の GitLab.com および Google Workspace アカウントには、セキュリティチームにより 2FA が強制されます。モバイルコンピューティングのベストプラクティスでは、これらのデバイスは利用可能な最新バージョンのオペレーティングシステムで稼働し、すべての新しいパッチが適用されている必要があります。お使いのモバイルデバイスの適合性の判断にあたっては、セキュリティチームにお問い合わせください。

#### 会社のラップトップを利用できない場合

会社のラップトップを受け取っていない新入社員には、非会社デバイスを利用するための[例外プロセス](/handbook/security/corporate/end-user-services/laptop-management/laptop-ordering/#exception-processes)があります。

紛失、盗難、故障により会社のラップトップが利用できないか使用不能になった場合も、同じ例外プロセスが適用されます。追加情報については[紛失または盗難時の手順](/handbook/security#reporting-an-incident)を参照してください。[Policy Exception Request](https://gitlab.com/gitlab-com/gl-security/security-assurance/sec-compliance/exceptions/issues/new?issuable_template=exception_request) を起票する必要があります。例外プロセスは一時的な解決策と見なされますが、非会社システムが[基本構成基準](/handbook/security/corporate/end-user-services/laptop-management/laptop-security)を満たすことを確認する必要があり、Microsoft Windows システムはいかなる状況においてもアクセスが許可されません。

図書館やホテルのキオスクなどの公共のコンピューターを使用して GitLab 関連のアカウントにサインインしないでください。

### モバイルメッセージング

すべての GitLab 関連の会話は Slack で行う必要があります。モバイルメッセージングには、公式の Slack アプリケーションまたは Slack ウェブアプリケーションを使用することを強く推奨します。[iOS](https://apps.apple.com/us/app/slack/id618783545) および [Android](https://play.google.com/store/apps/details?id=com.Slack) 向けのダウンロードが利用可能です。すべての会話を一箇所にまとめる統合チャットアプリケーションを使用する方が便利かもしれませんが、これらのアプリケーションの利用は、業務関連の会話が意図せずプラットフォームをまたいだり、外部の連絡先に送信されたりすることにつながる可能性があります。すべての業務コミュニケーションに Slack を使用することで、セキュリティおよびコンプライアンスの取り組みを支援できます。たとえば、インシデント対応 Issue のケースでは、イベントの発生順序を理解したり、フォレンジック証拠のハンドオフ中に証拠保管の連鎖が維持されている証拠を提供したりするために、会話を確認する必要が生じることがあります。

[ビデオ通話](/handbook/communication/#video-calls)および Slack のバックアップとしては、Zoom が推奨されます。Zoom チャットは、ビデオ通話中の Slack の代替として許容されます。会話が他者にとって興味深いものである場合、または振り返りのために必要となる可能性がある場合は、通話を録画することを検討してください。

### 会社の資産での外部メディアの利用

USB フラッシュドライブや外付けバックアップドライブなどのリムーバブルおよび外付けストレージデバイスを会社が管理するデバイスで使用することは認められておらず、デフォルトでブロックされています。外付けストレージデバイスの利用に業務上の必要がある場合は、[こちら](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=usb_exception)から例外リクエストを起票できます。コーポレートセキュリティは、リクエスト者と連携して最適な暗号化対応デバイスを決定し、暗号化およびパスワード保護を設定します。

リマインダーとして、Red データは、プライバシーおよびセキュリティチームからの事前承認を取得することなく、承認された Red データソースから他のシステムまたはソリューションに送信してはなりません。詳細は GitLab の [Data Classification Standard](/handbook/security/policies_and_standards/data-classification-standard/) を参照してください。

### GitLab の Google ドライブ以外のファイル共有サービスの利用

GitLab の Google ドライブ以外のファイル共有サービスでアカウントを作成したり、バックアップ/冗長化目的で利用することは禁止されています。GitLab 外部の関係者と GitLab 関連のファイルを共有する場合は、例外が付与される必要があります。例外を取得するには、業務上の理由を概説した[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/)を作成し、例外が付与されるまで進めないでください。

Google ドライブ以外のファイル共有サービスでアカウントを作成して利用する際、チームメンバーは次の点に留意する必要があります:

- 利用可能な場合は、GitLab（または他のプロバイダー）のメールアドレスとパスワードでアカウントを作成するのではなく、GitLab Google Workspace アカウントを使用した `Sign in with Google` シングルサインオンオプションを使用してください
- GitLab 外部の関係者によって作成された共有フォルダーにのみファイルを直接アップロードし、ファイル共有サービスの個人領域にはファイルをアップロードしないでください
- ファイル共有サービスが不要になったら、すべてのファイルを削除し、アカウントを閉じてください

### 紛失または盗難時の手順

GitLab は、直ちにセキュリティ対応が必要な状況でチームメンバーが利用できるよう、`panic@gitlab.com` メールアドレスと[紛失または盗難時の手順](/handbook/security#reporting-an-incident)を提供しています。資格情報またはその他の GitLab 機密データを含むサムドライブ、Yubikey、モバイル電話、タブレット、ラップトップなどのデバイスを紛失したチームメンバーは、すぐに `panic@gitlab.com` にメールを送信してください。本番およびセキュリティチームがこのアドレス宛のメールを受信すると、すぐに対応します。このアドレスを使用することで、これらのデバイスのいずれかを紛失したことによる被害を限定する優れた方法を提供します。

GitLab は、盗難ラップトップの場合に、盗難の文書および/または関連する警察報告書を要求する権利を留保します。

### ポリシーコンプライアンス

本ポリシーへの遵守は、自動レポート、監査、ポリシー所有者へのフィードバックを含む（ただしこれらに限定されない）さまざまな方法で検証されます。

本ポリシーに違反していることが判明したチームメンバーまたは業務委託者は、雇用または契約合意の終了を含む懲戒処分の対象となる可能性があります。

### 相談

セキュリティチームに相談するには、[Security Compliance tracker](https://gitlab.com/gitlab-com/gl-security/security-assurance/team-commercial-compliance/compliance/issues) で Issue を作成してください。

## 例外

本ポリシーへの例外は、セキュリティ、リーガル、PeopleOps 部門による承認が必要です。

- [Onboarding Issue](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/blob/main/.gitlab/issue_templates/onboarding.md)
- [Data Classification Standard](/handbook/security/policies_and_standards/data-classification-standard/)
- [Asset return procedure](/handbook/people-group/offboarding/#returning-property-to-gitlab)
- [Lost or stolen asset procedure](/handbook/security#reporting-an-incident)

## 参考資料

- GitLab の [Community Code of Conduct](https://about.gitlab.com/community/contribute/code-of-conduct/) は、GitLab コミュニティのすべてのメンバーに適用されます
