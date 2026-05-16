---
title: Google Cloud セキュリティのベストプラクティス
upstream_path: /handbook/security/best-practices/google-cloud-security-best-practices/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-03T14:17:43-06:00"
---

## Google Cloud リソース

一部の Google Cloud リソースは、デフォルト設定でデプロイされた場合、共有環境にリスクをもたらす可能性があります。たとえば、機密データを含まない一時的な開発インスタンスをデプロイしているとします。しかし、そのインスタンスが適切に保護されていない場合、侵害を受け、同じプロジェクト内の他のより機密性の高いリソースへのゲートウェイとして使用される可能性があります。

これらのリスクを軽減するために実施できる手順を以下に示します。

### Google Compute インスタンス

#### サービスアカウント

デフォルトでは、Google は新たに起動された Compute インスタンスに、いわゆる [Compute Engine デフォルトサービスアカウント](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) をアタッチします。これにより、新しい Compute インスタンスで実行されているすべてのプロセスに「[Project Editor](https://cloud.google.com/iam/docs/understanding-roles#basic)」権限が付与され、誰かがあなたのインスタンスへのアクセス権を取得した場合、プロジェクト内の他のすべてにもアクセスできるようになります。

このデフォルトアカウントは使用すべきではありません。代わりに、次の 2 つのオプションのいずれかを選択してください。

- インスタンスが Google Cloud API への認証付きアクセスを必要としない場合は、サービスアカウントをまったくバインドしないことを選択する必要があります。これは、`gcloud` コマンドを使用する場合は `--no-service-account --no-scopes` フラグを追加するか、Web インターフェイスで以下のオプションを選択することで実行できます。

![No Service Account](/images/security/gcp-no-service-account.jpg)

- インスタンスが特定の Google Cloud API に認証する必要がある場合は、アプリケーションが機能するために [必要な最小限の IAM ロール](https://cloud.google.com/compute/docs/access/service-accounts#service_account_permissions) のみが付与された特定のサービスアカウントを使用する必要があります。アクセススコープは、適切に構成された IAM 権限の代替ではなく、一般的にはセキュリティメカニズムとして [依存すべきではありません](https://cloud.google.com/compute/docs/access/service-accounts#accesscopesiam)。

#### ファイアウォールルール

[ファイアウォールルール](https://cloud.google.com/vpc/docs/firewalls) を介して Compute インスタンスへのアクセスを許可する場合、必要最小限のインスタンスに対して必要最小限のポートのみを公開していることを確認する必要があります。

新しいファイアウォールルールを作成する際、次の「ターゲット」のいずれかに適用するように選択できます。

- `ネットワーク内のすべてのインスタンス`: これはおそらく望むオプションではありません。このオプションを選択することは一般的なミスであり、自分以外のインスタンス上の安全でないサービスを公開する可能性があります。
- `指定したターゲットタグ`: これはおそらく望むオプションです。これにより、特定の [ネットワークタグ](https://cloud.google.com/vpc/docs/add-remove-network-tags) でマークされたインスタンスにルールを限定できます。「allow-https-from-all」のような分かりやすいタグ名を作成して、必要に応じて簡単に識別・使用できるようにする必要があります。
- `指定したサービスアカウント`: これはあまり選択されないオプションですが、カスタムサービスアカウント周りである程度設計を行っている場合には完全に有効です。タグに似ていますが、特定のサービスアカウントを使用するすべてのインスタンスに自動的に割り当てられます。

公開する「ポートとプロトコル」を選択する際は、「すべて許可」を選択してはならず、`1-65535` のような全範囲を手動で入力してもなりません。代わりに、公開する必要がある特定の TCP/UDP ポートのみを選択してください。

### Google Kubernetes Engine クラスター

GKE ノードは Compute インスタンスであり、デフォルトでは上記と同じ Compute Engine デフォルトサービスアカウントを使用します。これをデフォルトにしているにもかかわらず、Google は具体的に *「Compute Engine デフォルトサービスアカウントを使用するのではなく、GKE クラスターを実行するための最小権限のサービスアカウントを作成して使用してください」* と述べています。

GKE クラスターを手動でデプロイする場合でも、Terraform を介して自動的にデプロイする場合でも、[これらの手順に従って](https://cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster#use_least_privilege_sa)、GKE クラスターノードが機能するために必要な最小限の権限を持つサービスアカウントを作成してアタッチできます。

さらに、すべての新しいクラスターで [Workload Identity](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity#enable_on_cluster) と [Shielded Nodes](https://cloud.google.com/kubernetes-engine/docs/how-to/shielded-gke-nodes#enabling_in_a_new_cluster) を有効にする必要があります。これは、gcloud コマンドを使用する場合は `--workload-pool=[PROJECT-ID].svc.id.goog --enable-shielded-nodes` フラグを追加するか、Web インターフェイスで（「Security」メニューの下にある）以下のオプションを選択することで実行できます。

![GKE Settings](/images/security/gcp-gke-settings.jpg)

### Google Cloud Functions

#### アクセス制御

`HTTP` の [「トリガータイプ」](https://cloud.google.com/functions/docs/calling/http) で Cloud Function を作成する場合、Google は 2 層のアクセス制御を提供します。1 つ目は **Authentication** の下の以下の 2 つのオプションを介した ID チェックです。

- 認証されていない呼び出しを許可: これにより、インターネット上の誰もが、選択した任意のタイプの入力パラメーターを供給して関数を呼び出すことができます。このオプションは、可能な限り避けるべきです。
- 認証を必須にする: これにより、Google Cloud を介して [認証されたユーザーを管理](https://cloud.google.com/functions/docs/securing/managing-access-iam) できます。これが推奨されるオプションです。

2 つ目は、**Advanced Settings -> Connections -> Ingress Settings** の下の以下のオプションを介したネットワークベースのアクセス制御です。関数を機能させながらも最も制限的なオプションを選択する必要があります。

- すべてのトラフィックを許可: 任意の IP アドレスからの HTTP 呼び出しを許可します。
- 内部トラフィックのみを許可: 同じ Google Cloud プロジェクト内または同じ [VPC SC perimeter](https://cloud.google.com/functions/docs/securing/using-vpc-service-controls) 内のソースに呼び出しを制限します。
- 内部トラフィックと Cloud Load Balancing からのトラフィックを許可: 上記と同じですが、Google のロードバランサーを介して呼び出しを送信する機能が追加されています。

一部のユースケースでは、インバウンドリクエストの認証に関して「ベストプラクティス」を選択できない場合があります。たとえば、Google Cloud 認証情報の使用をサポートしない外部サービス用の Webhook ターゲットをホストしたい場合があります。このユースケースの場合、複雑なマシン生成のシークレットを関数内の環境変数として保存し、リクエストサービスがそのシークレットをリクエストヘッダーまたは JSON ペイロードに含めるようにすることができます。詳細と例は [こちら](https://cloud.google.com/run/docs/triggering/webhooks#authorizing_requests) で確認できます。

#### サービスアカウント

Compute インスタンスや GKE クラスターと同様に、Cloud Functions もデフォルトで [サービスアカウントにバインド](https://cloud.google.com/functions/docs/securing/function-identity) されます。そして再び、[Google は](https://cloud.google.com/functions/docs/securing/function-identity#changing_default_permissions) 「*本番環境で関数が必要とするものに対しておそらく権限が広すぎるため、最小権限アクセスのために構成する必要があります*」と述べています。

ほとんどの単純な関数の場合、これは問題にならないはずです。しかし、複雑な関数が悪用され、関数を呼び出した人がそのサービスアカウントになりすますことができる可能性があります。このため、関数が動作するために必要な最小限の権限を持つ [新しいサービスアカウントを構成](https://cloud.google.com/iam/docs/understanding-service-accounts#granting_minimum_permissions_to_service_accounts) することをお勧めします。

その後、**Advanced Settings -> Advanced -> Service account** の下のオプションを介してこの新しいサービスアカウントを使用するように選択できます。

### GitLab デモおよびテストインスタンス

テストおよびデモインスタンスは、デフォルトでインターネット上で公開されています。チームメンバーが既知のセキュリティ脆弱性の影響を受ける特定の GitLab バージョンや構成をテストする必要がある場合があります。テストインスタンスを保護し、侵害されたり、クラウド環境を侵害する可能性のある方法で使用されたりしないようにするのは、あなたの責任です。インスタンスの保護について支援が必要な場合や質問がある場合は、Slack の #security チャンネルでお気軽にお尋ねください。

#### IP フィルタリング

クラウドインスタンスを保護する非常に効果的な方法は、GitLab インスタンスかどうかにかかわらず、作成する各テストインスタンスに対して [IP フィルタリングの概念](https://www.oreilly.com/library/view/linux-network-administrators/1565924002/ch09s03.html) を適用することです。ほとんどの場合、これは 1 つ以上の [CIDR ブロック範囲](https://whatismyipaddress.com/cidr) からのソース IP フィルタリングを意味し、特定の IP と統合のみが GitLab インスタンスとやり取りできるようにすることで、GitLab 組織全体の攻撃対象領域を削減します。

ソース IP フィルタリングに使用する現在の IP アドレスがわからない場合は、[whatsmyipaddress.com](https://whatismyipaddress.com/) や [ipinfo.io](https://ipinfo.io/) のようなサービスを利用して取得できます。IP フィルタリングを実装する手順は、クラウド環境ごとに異なります。以下に、サポートエンジニアリングチームが管理する詳細なガイドを示します。

- [Support Engineering Step-by-Step Guide to Implementing IP Filtering](https://gitlab.com/gitlab-com/support/support-training/-/blob/master/content/ip%20filtering/ip_filtering_test_instances.md)

さらに、IP フィルタリングの実装に関わる機能のプラットフォーム固有の公式ドキュメントを以下に示します。

- [Google Cloud](https://cloud.google.com/vpc/docs/using-firewalls#creating_firewall_rules#console)
- [Amazon Web Services (AWS)](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html)
- [Azure](https://learn.microsoft.com/en-us/training/modules/introduction-azure-web-application-firewall/)

既知かつ公開された脆弱性の影響を受けるバージョンの GitLab をホストする際は、IP フィルタリングを設定して使用する必要があります。

特定のバージョンの GitLab に影響を与える脆弱性のリストは [こちら](https://gitlab-com.gitlab.io/cs-tools/gitlab-cs-tools/what-is-new-since/?tab=cves) で確認できます。最新のセキュリティパッチや修正が適用されていないバージョンの GitLab は、公開アクセス可能にすべきではありません。

#### 機密データ

テストまたはデモインスタンス上で [機密データ](/handbook/security/policies_and_standards/data-classification-standard/#data-classification-levels) をホストまたは保存しないでください。

公開アクセス可能なインスタンスでは、[Green データ](/handbook/security/policies_and_standards/data-classification-standard/#green) のみが許可されます。

[RED、ORANGE、YELLOW に分類されたデータ](/handbook/security/policies_and_standards/data-classification-standard/#data-classification-levels) は、顧客データや個人データとともに、テストまたはデモインスタンスにコピーまたは保存してはなりません。

#### クリーンアップ {#clean-up}

テストインスタンスは一時的なものでなければなりません。

テストが終了したら、またはデモが終了したらすぐに、テスト環境をシャットダウンまたは破棄してください。

このテストまたはデモ環境がかなりの期間（24 時間以上）稼働している場合は、廃止日を計画し、適時にインスタンスがシャットダウンまたは破棄されるようにリマインダーを設定してください。

#### 定期的にアップグレードする

長期間稼働するテストまたはデモインスタンスの場合、最新のセキュリティパッチがすべて適用されていることを確認するために、GitLab とマシン上の他のソフトウェアを定期的に更新することが重要です。

すべてのセキュリティリリース後に GitLab を更新する計画を立て、システムパッケージを少なくとも週に 1 回更新してください。

GitLab セキュリティ更新を適時に適用することを確認するために、自分自身にリマインダーを設定してください。

また、テストまたはデモが完了したらすぐにインスタンスを [クリーンアップ](#clean-up) することを忘れないでください。

#### GitLab アプリケーション設定の保護

- 新しいユーザー登録を無効にする
- インスタンスレベルの共有 Runner を使用しない

#### HTTPS を使用する

[GitLab の暗号化ポリシー](/handbook/security/product-security/vulnerability-management/encryption-policy/) に準拠するため、TLS は公開アクセス可能なテストリソースにも実装する必要があります。GitLab インスタンスについては、[LetsEncrypt 統合](https://docs.gitlab.com/omnibus/settings/ssl/) を使用できます。`external_url` が HTTPS プロトコルで設定され、他の証明書が構成されていない場合、[Let's Encrypt](https://letsencrypt.org/) はデフォルトで有効になります。
