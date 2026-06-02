---
title: "顧客製品使用状況情報"
description: "GitLabの製品使用データポリシー"
upstream_path: "/handbook/legal/privacy/customer-product-usage-information/"
upstream_sha: "7d467b8ae210e5b3bb843857cd3639cbc27af386"
translated_at: "2026-06-02T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-02T12:29:08-07:00"
---

GitLabは、無料のオープンソースソフトウェアおよび有料オファリング（総称して「ソフトウェア」）を通じて価値と機能を提供することに尽力しています。成長し続けるユーザーベースへのイノベーションとサポートを継続するために、ユーザーがソフトウェアをどのように活用しているかについての詳細な知識が役立ちます。これは、顧客やユーザーによるソフトウェアの使用から生成される特定のメトリクス（「メトリクス」）として収集されます。この目的を達成するため、GitLabはインスタンス、ネームスペース、またはユーザーレベルでソフトウェアの機能がどのように使用されているかについての情報を収集します。

インスタンスまたはネームスペースレベルのメトリクスは、そのインスタンスまたはネームスペース全体に関連するプロジェクト、パイプライン、Issue、マージリクエストの合計数など、合計カウントで構成されます。これらのメトリクスには、`database_version`や`container_registry_enabled`などのインスタンスまたはネームスペースの設定も含まれる場合があります。ユーザーレベルのメトリクスは、ユーザーが特定のページを閲覧したか、ソフトウェアの特定のボタンをクリックしたかなど、ソフトウェアとの特定のユーザーインタラクションに関連するイベントです。後続のセクションで説明する例外を除き、個々のユーザーの個人データは一般的に収集されません。

収集されるメトリクスは、Service Ping、Snowplow、License Syncの3つの収集サービスに分類されます（総称して「製品使用データ」）。各収集サービスの詳細は以下に記載されており、製品使用データが動作する適用ソフトウェアの種類、収集の頻度、収集されるメトリクスの種類が含まれます。

## 製品使用データを構成するデータ収集サービス

上述のとおり、GitLabが製品使用データを生成するために使用する3つの収集サービスがあり、これらによってより効率的に投資を行い、オープンソースおよび有料ソフトウェアの両方のオファリングを継続的に拡大することができます。

### Service Ping（旧称：Usage Ping）

*目的*: GitLabはService Pingメトリクスを収集し、顧客との協力によって価値の帰属を加速し、投資対効果（ROI）目標を達成し、ソフトウェアによるビジネス成果を実現します。Service Pingメトリクスは、インスタンス、テナントまたはネームスペース全体に関連する集計カウントメトリクスと、特定の設定や機能の有効化に関するtrue/falseメトリクスで構成されます。集計カウントは「全期間」形式と「28日」形式で集計されます。Service Ping FAQは[こちら](/handbook/customer-success/csm/service-ping-faq/)をご覧ください。

*適用ソフトウェア*: Service Pingメトリクスは、セルフマネージド版、GitLab.com版、および[Dedicated](https://about.gitlab.com/dedicated/)版のソフトウェアで収集されます。一般的に、「Service Ping」は個々のセルフマネージドインストールおよびDedicatedから適用メトリクスを収集するテクノロジーの名称です。GitLab.comは本質的にGitLabがホストするセルフマネージドインスタンスのマルチテナント版であるため、GitLab.com向けのService Pingのバージョンが実装されており、セルフマネージドインスタンスで達成するものと同等のGitLab.comメトリクスを提供します。セルフマネージドインスタンス専用のService Pingの動作方法についての詳細は、[Service Pingガイド](https://docs.gitlab.com/ee/development/internal_analytics/service_ping/)をご参照ください。

*設定*: セルフマネージドおよびDedicatedのService Pingペイロードには、各セルフマネージドインストールおよびDedicatedテナントのインスタンスレベルメトリクスが含まれます。GitLab.comのService Pingメトリクスは、GitLab.comインスタンス全体とすべてのGitLab.comネームスペースの両方に関連します。さらに、ページビューはGitLab.comで自動的に計測されます。

*収集される個人データ*: Service Pingメトリクスは集計されているため、これらのメトリクスは一般的に個人に関連せず、プロジェクトやユーザー名に関する情報を含みません。ただし、Service Pingメトリクスが識別可能な人物に関連する可能性がある2つの例外があります。

1つ目の例外は、セルフマネージドインスタンスまたはDedicatedのホスト名とIPアドレスの収集です。これらのメトリクスはインスタンスに関連することを意図していますが、ソフトウェアの種類によっては自然人の個人データが収集される可能性があります。例えば、セルフマネージドインスタンスが個人の自宅サーバーにインストールされている場合、自宅のIPアドレスを取得する可能性があります。同様に、GitLab.comネームスペースの収集は、命名規則によっては自然人の個人データを含む可能性があります。2つ目の例外は、有料ライセンス情報の収集です。すべてのService Pingメトリクスはアクティブなライセンシーの名前、メールアドレス、会社名に関連付けられているため、Service Pingによって収集されるすべてのメトリクスはそのライセンシーに関連する可能性があります。

*データ共有*: Service Pingメトリクスは独立したサードパーティとは共有されません。データはセルフマネージドインスタンス、Dedicated、またはGitLab.comネームスペースから[バージョンアプリ](https://version.gitlab.com/)と処理のためのデータウェアハウスに送信されます。これらはGitLabが管理するシステムです。

*収集頻度*: セルフマネージドインスタンス、Dedicated、GitLab.comネームスペース経由で収集されるService Pingは、週次で自動生成されます。データは生成後1日以内にデータウェアハウスに表示されます。セルフマネージドインスタンスが実行しているバージョンを通じて計測されたメトリクスのみが利用可能です。例えば、バージョン16.9の開発中に計測されたメトリクスは、バージョン16.9以降を実行しているインスタンスで利用可能になります。

*オーナーシップ*: Service Pingは[GitLab Analytics Instrumentation Group](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/)が所有しています。

*データの種類*: Service Pingメトリクスは以下の4つのカテゴリに分類されています。

- **運用データ**: 運用データは、ソフトウェアの機能とパフォーマンスを最適化するためにGitLabが必須としている、使用状況とtrue/falseメトリクスの集計コレクションです。運用データは、ソフトウェアの使用を通じて価値がどのように提供されているかを追跡し、最適な顧客実装に関するインサイトを提供します。これらのメトリクスは、適切に機能する製品を提供するGitLabの能力に不可欠なものであり、顧客がSuccess Tiersにサブスクライブしているかどうかに関係なく収集されます。

   収集される運用データの完全なリストは[こちら](https://metrics.gitlab.com/?category=operational)で確認できます。

- **任意データ**: 任意データは、日々の運用サポートには必要ではないものの、GitLabがプロセス、ソフトウェア、および投資判断を改善するために使用できる価値あるインサイトと知識を提供する、ユーザーが生成した使用状況とtrue/falseデータの集計コレクションです。任意データは月ごと（または週ごと）のカウントを比較してインスタンスがさまざまなソフトウェア機能をどのように使用しているかの大まかな傾向を把握し、GitLabインストールの分類と理解を助けるその他の情報を収集し、ステージやフィーチャーの成功を測定するのに役立つステージ月間アクティブユーザー数（SMAU）を計算します。

    収集される任意データの完全なリストは[こちら](https://metrics.gitlab.com/?category=optional)で確認できます。

- **サブスクリプションデータ**: サブスクリプションデータは、バージョン14.1以降でインターネットに接続しているセルフマネージドインスタンスからデータウェアハウスに同期されるライセンス関連メトリクスのコレクションです。このデータはDedicatedおよびGitLab.comからも収集されます。サブスクリプション契約に記載されているように、これらのメトリクスはユーザー数とインスタンスバージョンに関する基本情報を提供するために必要であり、プロビジョニングと更新の分野での顧客行動に関する議論を促進するのに役立ちます。

    収集されるサブスクリプションデータの完全なリストは[こちら](https://metrics.gitlab.com/?category=subscription)で確認できます。

- **標準データ**: 標準データは、ホスト名やエディションなどのメタデータのコレクションで、他のService Pingカテゴリを正しいインスタンスまたはネームスペースに関連付けるために使用されます。これらのメトリクスの収集は、データウェアハウス内の他の3つのService Pingメトリクスカテゴリ間でService Pingメトリクスを適切に関連付けるために有効にする必要があります。

    収集される標準データの完全なリストは[こちら](https://metrics.gitlab.com/?category=standard)で確認できます。さらに、インスタンスのIPアドレスもこのカテゴリで収集されるメタデータの1つです。

*オプトアウト*: 4つのService Pingカテゴリそれぞれでオプトアウトに関する異なるパラメータがあります。

- **運用データ**
  - <ins>無料セルフマネージドインスタンス（CEまたはEEディストリビューション）</ins>: これらのメトリクスの目的は最適なソフトウェア使用について顧客を支援することであるため、運用データは収集されません。
  - <ins>有料セルフマネージドインスタンス（EEディストリビューション）およびDedicated</ins>: 運用データは必須を意図しており、設定は有料ライセンスに関連しています。このデータはソフトウェアの運用と改善に必要であるため、ほとんどの有料デプロイメントではオプトアウトはできません。ただし、インスタンスが[オフラインライセンス](/handbook/support/license-and-renewals/workflows/self-managed/cloud-licensing/#cloud-licensing-exemptions)を使用している場合、インスタンスが[Service Pingを無効にする手順](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html#enable-or-disable-optional-data-in-service-ping)に従っている限り、GitLabは運用データを自動的に収集しません。
  - <ins>無料および有料GitLab.comユーザー</ins>: グローバルプライバシーコントロール（GPC）シグナルは、GPC シグナルが有効なユーザーによるボタンクリック回数などのブラウザレベルの集計合計に関連する特定の運用データメトリクスの収集を防ぐ場合があります。ただし、GPCシグナルはイベントのトリガー方法に依存するため、すべての状況で認識されるわけではありません。さらに、GPCシグナルはダウンストリームの非同期メトリクスの収集を妨げません。例えば、GPCを有効にしたユーザーがCIジョブを開始するボタンをクリックした場合、このボタンクリックは追跡されません。しかし、同じユーザーがリポジトリに新しいコードをプッシュして同じジョブの自動実行を引き起こした場合、これはユーザーの直接のアクションとは非同期で発生したためカウントされます。GitLabのAPIへの直接呼び出しなど、ブラウザ外で発生するその他のインタラクションもメトリクスに含まれる場合があります。
- **任意データ**:
  - <ins>無料および有料セルフマネージドインスタンス（CEまたはEEディストリビューション）またはDedicated</ins>: これらのメトリクスはデフォルトで収集されます。任意データはアプリ内の管理設定または設定ファイルの変更によって無効にできます。詳細は[ドキュメント](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html#enable-or-disable-optional-data-in-service-ping)をご参照ください。
  - <ins>無料および有料GitLab.comユーザー</ins>: 運用データと同様に、GPCシグナルはブラウザレベルの集計合計に関連する特定の任意データメトリクスの収集を防ぐ場合があります。ただし、GPCシグナルはイベントのトリガー方法に依存するため、すべての状況で認識されるわけではありません。
- **サブスクリプションデータ**:
  - <ins>無料セルフマネージドインスタンス（CEまたはEEディストリビューション）</ins>: これらのメトリクスはデフォルトで収集されます。サブスクリプションデータはアプリ内の管理設定または設定ファイルの変更によって無効にできます。詳細は[ドキュメント](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html#enable-or-disable-usage-statistics)をご参照ください。
  - <ins>有料セルフマネージドインスタンス（EEディストリビューション）およびDedicated</ins>: サブスクリプションデータの収集は、インスタンスのアクティベートに使用されるライセンスの種類によって異なります。その収集はサブスクリプション契約に記載されています。アクティベーションコードを使用してインスタンスをアクティベートした場合、使用データは[セルフマネージドインスタンスとGitLabの間で毎日自動的に同期されます](https://docs.gitlab.com/ee/subscriptions/self_managed/#subscription-data-synchronization)。インスタンスが[オフラインライセンス](https://docs.gitlab.com/ee/subscriptions/self_managed/#export-your-license-usage)を使用している場合、データは自動的に収集されません。月に1回、インスタンス管理者はメールでGitLabに使用データを手動で送信するよう促されますが、これは必須ではありません。さらに、インスタンスが[レガシーライセンス](/handbook/support/license-and-renewals/workflows/self-managed/cloud-licensing/#1-which-license-type-should-i-provide-for-an-approved-opt-out)を使用している場合、サブスクリプションデータは収集されません。
  - <ins>無料および有料GitLab.comユーザー</ins>: GitLab.comのいずれのオファリングでもサブスクリプションデータのオプトアウトはできません。
- **標準データ**:
  - <ins>無料セルフマネージドインスタンス（CEまたはEEディストリビューション）</ins>: これらのメトリクスはデフォルトで収集されます。標準データはアプリ内の管理設定または設定ファイルの変更によって無効にできます。詳細は[ドキュメント](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html#enable-or-disable-usage-statistics)をご参照ください。
  - <ins>有料セルフマネージドインスタンス（EEディストリビューション）およびDedicated</ins>: 標準データは無効にできません。ただし、インスタンスが[オフラインライセンス](https://docs.gitlab.com/ee/subscriptions/self_managed/#export-your-license-usage)を使用している場合、インスタンスが[Service Pingを無効にする手順](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html#enable-or-disable-optional-data-in-service-ping)に従っている限り、GitLabは標準データを自動的に収集しません。
  - <ins>無料および有料GitLab.comユーザー</ins>: GitLab.comのいずれのオファリングでも標準データのオプトアウトはできません。

### Snowplow

*目的*: GitLabは、GitLab.comバージョンのソフトウェア内のユーザーレベルのインタラクション（特定のページの閲覧、ボタンのクリックなど）を収集するために、インフラにSnowplowと呼ばれる製品インテリジェンスプラットフォームを運用しています。SnowplowはソフトウェアのセルフマネージドおよびDedicatedデプロイメントにも統合されています。これにより、顧客に詳細な使用状況情報を提供し、ユーザーが製品をどのようにナビゲートするかを理解することができます。Service Pingとは異なり、収集されるメトリクスはネームスペース、インスタンス、またはテナント全体で集計されません。代わりに、Snowplowメトリクスは後続の仮名化プロセスを経て特定のユーザーに帰属します。Snowplowの詳細については、[内部アナリティクスドキュメント](https://docs.gitlab.com/ee/development/internal_analytics/)をご参照ください。

*適用ソフトウェア*: Snowplowメトリクスは、GitLab.com、セルフマネージド、Dedicatedバージョンのソフトウェアの無料および有料ユーザーから収集されます。

*設定*: Snowplowコレクターは、GitLab.com、セルフマネージド、Dedicatedからリアルタイムでユーザーイベントを受け取り、これらのユーザーメトリクスを仮名化プロセスに通します。この段階で、メトリクスは以下の例外を除いて個人識別子が取り除かれますが、メトリクスはネームスペース、インスタンス、またはテナントに帰属可能です。セルフマネージドとDedicatedでは、この仮名化プロセスはインスタンスまたはテナント内で行われます。

*収集される個人データ*: Snowplowは個々のユーザーの個人データを生の形式で収集します。しかし、これらの生のメトリクスは仮名化プロセスを経た後に削除されます。つまり、仮名化されたメトリクスのみがデータウェアハウスに配信されます。これらの仮名化されたメトリクスは、再識別が可能なため、適用されるデータ保護法の下では依然として個人データとみなされます。しかし、GitLabはメトリクスを個々のユーザーに再識別または関連付けるプロセスは実施しません。仮名化しないSnowplowメトリクスが2つあります：Project_IDとNamespace_ID/Group_IDです。また、ユーザーの位置の国と地域も収集しますが、IPアドレスは保存しません。

*データ共有*: Snowplowメトリクスは独立したサードパーティとは共有されません。Snowplowメトリクスの収集と転送に使用されるすべてのシステムとソフトウェアはGitLabが管理するシステムです。

*収集頻度*: セルフマネージド、GitLab.com、Dedicatedから収集されたSnowplowメトリクスはリアルタイムでデータウェアハウスに送信されます。

*オーナーシップ*: Snowplowは[GitLab Analytics Instrumentation Group](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/)が所有しています。

*メトリクスの種類*: Snowplowメトリクスは、[こちら](https://metrics.gitlab.com/events/)に記載されているすべての仮名化されたユーザーインタラクションメトリクス、および Project_ID、Namespace_ID/Group_ID、ユーザーの位置の国と地域で構成されます。

*オプトアウト*: GitLab.comについては、Snowplowメトリクスは個々の仮名化されたユーザーイベントに関連しており、GPCシグナルを使用して個人ベースでのみオプトアウトできます。ただし、GPCシグナルはイベントのトリガー方法に依存するため、すべての状況で認識されるわけではありません。セルフマネージドとDedicatedについては、Snowplowメトリクスはアプリ内の管理設定によって無効にできます。また、セルフマネージドインスタンスでSnowplowメトリクスがデフォルトで無効になるシナリオについての詳細は[FAQ](/handbook/legal/privacy/product-usage-events-faq/)をご参照ください。

### License Sync

*目的*: GitLabは、有料ライセンスでプロビジョニングされたユーザー数がサブスクリプションの金銭的価値を超えているかどうかを判断するために、License Syncを通じてセルフマネージドインスタンスとDedicatedの特定のメトリクスを収集します。サブスクリプションとライセンス下のユーザー数の間に乖離がある場合、これらのメトリクスはGitLab Fulfillmentチームが月次、四半期、または年次の調整プロセスの一環として使用します。これらのメトリクスはライセンス下のオープンシート数の判断にも役立ち、更新とライセンス統合の分析を支援します。

*適用ソフトウェア*: License Syncメトリクスは、有料セルフマネージド（EEディストリビューション）インスタンスとDedicatedから収集されます。License Syncは無料セルフマネージド（CEまたはEEディストリビューション）からはメトリクスを収集しません。GitLab.comバージョンのソフトウェアについては、GitLab FulfillmentチームはService Pingによって収集されるサブスクリプションデータを使用して、前述の調整レビューを行います。詳細は[GitLab.comサブスクリプション](https://docs.gitlab.com/ee/subscriptions/gitlab_com/)と[セルフマネージドサブスクリプション](https://docs.gitlab.com/ee/subscriptions/self_managed/)ページをご参照ください。

*設定*: License Syncは[クラウドライセンシング](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/)をアクティベートするために有料セルフマネージドインスタンスとDedicatedからメトリクスを収集します。さらに、License SyncはセルフマネージドとDedicatedの顧客向けにこれらのメトリクスを取り込み、前述のライセンス管理と調整のために[カスタマーポータル](https://docs.gitlab.com/ee/subscriptions/customers_portal.html)に送信します。その後、メトリクスはデータウェアハウスに送信されます。

*収集される個人データ*: License Syncによって収集される個人データは、有料セルフマネージドまたはDedicatedライセンスに記載された個人の名前、メールアドレス、ホスト名、会社名のみです。これらの個人データ要素はライセンスキー内で暗号化されます。詳細は[こちら](https://docs.gitlab.com/ee/subscriptions/self_managed/#subscription-data)をご参照ください。

*データ共有*: License Syncメトリクスは独立したサードパーティとは共有されません。License Sync、カスタマーポータル、データウェアハウスはGitLabが管理するシステムです。

*収集頻度*: License Syncメトリクスは毎日収集されます。

*オーナーシップ*: License Syncは[GitLab Fulfillmentチーム](https://about.gitlab.com/direction/fulfillment/)が所有しています。

*データの種類*: 収集されるメトリクスには、有料セルフマネージドまたはDedicatedライセンスに記載された個人の名前、メール、ホスト名、会社名、および[こちら](https://docs.gitlab.com/ee/subscriptions/self_managed/#subscription-data)に記載されているメトリクスが含まれます。

*オプトアウト*: デフォルトでは、インターネットに接続している14.1以降の有料GitLab.comサブスクリプションはすべて、License Sync経由でサブスクリプションデータが収集されます。セルフマネージドまたはDedicatedの顧客がLicense Syncをオプトアウトしたい場合は、GitLab Salesに相談してレガシーまたはオフラインライセンスを取得してください。有料GitLab.comサブスクリプションについては、Service Ping経由で収集されるサブスクリプションデータのオプトアウトはできません。

## Switchboard

*目的*: GitLabのDedicatedシングルテナントSaaSオファリングを使用する顧客は、[Switchboard](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/)と呼ばれる顧客コンソールにアクセスできます。Switchboardは顧客チームが自身のDedicatedテナントを維持・設定するために使用されます。SwitchboardアプリケーションのメトリクスはGitLabがDedicated顧客によるSwitchboardの使用方法をより深く理解するために収集されます。これらのメトリクスはSwitchboardアプリケーションのさらなる開発を推進するのに役立ちます。

*適用ソフトウェア*: SwitchboardメトリクスはSwitchboardアプリケーションにアクセスできるDedicatedユーザーのみから収集されます。

*設定*: SwitchboardメトリクスはSwitchboardアプリケーション自体からのみ収集され、Dedicatedテナントからは収集されません。したがって、Dedicatedテナントでのユーザーインタラクションはこのセクションで収集されるデータには含まれません。Switchboardアプリケーションから収集されてデータウェアハウスに送信されるメトリクスのフローを示す[ハイレベルダイアグラム](https://docs.gitlab.com/administration/dedicated/architecture/)をご参照ください。

*収集される個人データ*: Switchboardメトリクスは当初、生の形式で個々のユーザーに関連付けられます。しかし、これらのメトリクスは非識別化プロセスを経た後に削除されます。つまり、仮名化されたメトリクスまたはSwitchboard顧客コンソール全体で集計されたメトリクスのみがデータウェアハウスに配信されます。仮名化されたメトリクスは、再識別が可能なため、適用されるデータ保護法の下では依然として個人データとみなされます。しかし、GitLabはメトリクスを個々のユーザーに再識別または関連付けるプロセスは実施しません。

*データ共有*: Switchboardメトリクスは独立したサードパーティとは共有されません。SwitchboardアプリケーションとデータウェアハウスはGitLabが管理するシステムです。

*収集頻度*: SwitchboardメトリクスはGitLab.comから収集され、リアルタイムでデータウェアハウスに送信されます。

*オーナーシップ*: Switchboardメトリクスは[GitLab Dedicatedグループ](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/)と[Analytics Instrumentation Group](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/)が所有しています。

*データの種類*: 収集されるSwitchboardメトリクスの完全なリストは[こちら](https://metrics.gitlab.com/events/?serviceName=Switchboard)で確認できます。

*オプトアウト*: 現在、Switchboardメトリクスをオプトアウトする仕組みはありません。

## GitLab Duo（AI機能）

*目的*: GitLabはGitLab Duoユーザーから[Snowplowイベント](/handbook/legal/privacy/customer-product-usage-information/#snowplow)を収集し、特定のDuo機能の成功と価値に関するインサイトを得るとともに、これらの機能とのエンドツーエンドのユーザーインタラクションを理解し、機能のデバッグと正常動作を確認します。

*適用ソフトウェア*: GitLab Duoはクラウドコネクトされたフィーチャーアドオンであるため、GitLab Duoメトリクスは、Duoライセンスを持つGitLab.com、Dedicated、セルフマネージドユーザーから収集されます。自己ホスト型モデルのみを使用するインスタンスについては、このセクションの末尾にあるオプトアウト手順をご参照ください。

*設定*: GitLab.comまたはDedicatedについては、ファーストパーティのDuoメトリクスはエディタ拡張機能からSnowplowコレクターによって収集され、データウェアハウスに送信されます。セルフマネージドインスタンスについては、ファーストパーティのDuoメトリクスはエディタ拡張機能から収集され、インスタンスに送信され、Snowplowコレクターがインスタンスからデータウェアハウスにメトリクスを送信します。

*収集される個人データ*: GitLab Duoメトリクスには、個々のユーザーの個人データが生の形式で含まれる場合があります。しかし、これらの生のメトリクスは仮名化プロセスを経た後に削除されます。つまり、仮名化されたメトリクスのみがデータウェアハウスに配信されます。具体的には、ユーザーのプライバシーを保護しながら使用パターンの分析能力を維持するために、[user_id、namespace_id、project_id、page_url](https://metrics.gitlab.com/identifiers/)などのフィールドを仮名化します。これらの仮名化されたメトリクスは、再識別が可能なため、適用されるデータ保護法の下では依然として個人データとみなされます。しかし、GitLabはメトリクスを個々のユーザーに再識別または関連付けるプロセスは実施しません。

*データ共有*: GitLab Duoメトリクスは独立したサードパーティとは共有されません。GitLab Duoメトリクスの収集と転送に使用されるすべてのシステムとソフトウェアはGitLabが管理するシステムです。

*収集頻度*: GitLab.com、Dedicated、セルフマネージドから収集されるGitLab Duoメトリクスはリアルタイムでデータウェアハウスに送信されます。

*オーナーシップ*: GitLab Duoメトリクスは[Analytics Instrumentation Group](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/)が所有しています。

*データの種類*: 収集される GitLab Duo メトリクスのリストは[こちら](https://metrics.gitlab.com/events/?searchText=duo)で確認できます。さらに、Duoテレメトリの概要は[こちら](https://docs.gitlab.com/user/gitlab_duo/data_usage/#telemetry)で確認できます。

*オプトアウト*: 現在、インスタンスまたはネームスペース全体でGitLab DuoメトリクスをオプトアウトするGitLab設定内の仕組みはありません。ただし、エディタ拡張機能のテレメトリをオプトアウトした場合、GitLabはGitLab.com、Dedicated、セルフマネージドを問わず、そのユーザーレベルのオプトアウトを尊重します。自己ホスト型モデルのみでDuoを動作させるセルフマネージドインスタンスについては、セルフマネージドのすべてのSnowplowメトリクスを無効にするために使用されるものと同じアプリ内管理設定を通じてGitLab Duoメトリクスをオプトアウトできます。
