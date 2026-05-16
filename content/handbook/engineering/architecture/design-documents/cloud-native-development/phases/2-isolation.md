---
title: 分離されたサービスコンポーネント
status: proposed
creation-date: 2025-11-26
authors:
  - "@gitlab.mschoenlaub"
coaches:
  - "@splattael"
dris:
  - "@kkloss"
owning-stage: ~devops::developer experience
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cloud-native-development/phases/2-isolation/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-27T03:34:38Z"
translator: claude
stale: false
lastmod: "2026-02-09T20:42:10+00:00"
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

<!-- This renders the design document header on the detail page, so don't remove it-->

<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">proposed</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/gitlab.mschoenlaub" class="text-blue-600 hover:underline">@gitlab.mschoenlaub</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/splattael" class="text-blue-600 hover:underline">@splattael</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/kkloss" class="text-blue-600 hover:underline">@kkloss</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::developer experience</span></td>
<td class="px-3 py-2 border border-gray-300">2025-11-26</td>
</tr>
</tbody>
</table>
</div>


<!--
Don't add a h1 headline. It'll be added automatically from the title front matter attribute.

For long pages, consider creating a table of contents.
-->

> [!note]
> これは [クラウドネイティブ開発](../) のサブブループリントです。

## 概要

この設計ドキュメントは、GitLab Development Kit（GDK）内で動作する **GitLab コンポーネントのコンテナ化**を提案するものです。GDK が開発者のローカルシステムと密結合していることから生じる現在の問題点を解決するため、実行中のサービスを相互に、そして開発者のベアメタルシステムから分離します。

## 動機

### 密結合の問題

GDK の現在のアーキテクチャは開発者のホストシステムと密結合しており、システムレベルのリソースへの直接的な制御とアクセスを前提としています。GDK は PostgreSQL、Redis、Ruby などのシステムパッケージの特定バージョンがホストに直接インストールされていることを必要とし、ポートやファイルパスなどの共有リソースを奪い合い、OS 固有のインストール手順に依存しています。この密結合が「自分のマシンでは動く」症候群を生み出し、OS アップデート、パッケージマネージャーの変更、または同じリソースを競合する他のツールに対して GDK を脆弱にし、開発者の体験と速度に影響を与えています。

### 現在の問題点

**予測不可能なインストール**: システムの競合により、セットアップ時間が数分から数時間まで異なり、環境の違いにより同じ GDK バージョンでもマシンによって動作が異なります。

**ランタイムの不安定性**: OS のアップデートがシステムライブラリを変更して GDK を壊すことがあり、ポートの競合や環境変数の汚染が他の開発ツールに干渉します。

**高いメンテナンスコスト**: システムのアップデートが GDK を壊す可能性があり、Development Tooling チームがキャパシティの 30〜40% を環境固有のデバッグに費やし、開発者がマシン固有のインストール問題の解決に数時間から数日を失うことになります。

### 従来のソリューションが不十分な理由

CI/CD パイプラインでサテライトサービスのバイナリをプリビルドするなど、インストールの摩擦を軽減するための最近の試みは[不十分](https://gitlab.com/gitlab-org/gitlab-development-kit/-/issues/3111)であることがわかりました。プリコンパイルはパイプラインの頻繁な失敗で[信頼性が低い](https://gitlab.com/gitlab-org/gitlab-development-kit/-/jobs?statuses=FAILED&name=compile&kind=BUILD)ままであり、本番環境では有用でないアーキテクチャ固有のビルド（Mac arm64）のために大量のコンピューティングリソースを消費し、私たちがメンテナンスしていないサービスのバイナリコンパイルのオーナーシップを Development Tooling に移してしまいます。以前のコンテナ化の取り組み [GitLab Compose Kit](https://gitlab.com/gitlab-org/gitlab-compose-kit) は分離を試みましたが、macOS サポートが欠如しており、採用が制限されました。

### 必要なもの

GDK とホストシステムを切り離す分離層です。これは一貫したランタイム環境を提供し、ローカルツールとの競合をなくし、システムレベルのパッケージインストールの必要性を排除します。これにより、すべてのプラットフォームで予測可能なセットアップが可能になり、システム固有のバグが解消されます。

### 目標

- GDK ワークフローの安定性を向上させる
- サードパーティおよびサテライトサービスを GDK が動作するハードウェアアーキテクチャから分離する
- 将来のコンポーネントの GDK への統合を容易にする

### 非目標

- CNG のために、またはその上に構築された開発プラットフォームの作成
- モノリスを開発者のローカルシステムのハードウェアアーキテクチャから分離すること
- GDK での Kubernetes クラスターやあらゆる種類の物理または仮想インフラの管理
- コンテナを実行するためのリモート Docker ホストのサポート
- 本番環境とのパリティの作成

## 提案

GDK がサービスを実行する方法を切り離す**コンポーネントランタイム**抽象化レイヤーを導入することを提案します。現在、GDK はサービスをホストプロセスとして直接管理しています。これを 2 つの実装を持つ汎用的な**サービスランタイムインターフェース**にリファクタリングします：

1. **プロセスランタイム**: サービスをネイティブホストプロセスとして管理する（後方互換性のために保持される現在のアプローチ）
2. **コンテナランタイム**: サービスを分離されたコンテナとして管理する（安定性向上のための新しいデフォルト）

この抽象化により、GDK はコアオーケストレーションロジックを変更することなく実行モードを切り替えられるようになり、プロセスベースからコンテナベースのサービス管理への段階的な移行パスが可能になります。

### サービスランタイム

最小限の実行可能なコンポーネントランタイムは以下の機能を公開します：

1. コンポーネントに属する（サブ）セットのサービスを起動する。
2. コンポーネントに属する（サブ）セットのサービスを停止する。
3. コンポーネントに属する（サブ）セットのサービスを再起動する。
4. コンポーネントのサービスログをテールする。
5. いずれかまたはすべてのサービスのステータス（最後の終了コード、実行中、停止中など）を取得する。

サービスランタイムは、懸念の分離による高いテスト容易性を確保するために、実行するサービスから**必ず**切り離されなければならず、サービスの設定から動作する必要があります。

このインターフェースは、GDK が現在 [runit](https://smarden.org/runit/runsv.8) との統合を通じて提供しているものの形式化であるべきです。サービスに設定された `version` は通常、タグ、ブランチ、またはコミット参照のいずれかである git 参照を指します。

> [!note]
> サービスの一部はレガシーな理由により Procfile によっても実行されていますが、前進するためのゴールデンパスを提供する取り組みとして、これを[完全に廃止](https://gitlab.com/gitlab-org/gitlab-development-kit/-/work_items/904)する予定です。

### Runit ランタイム

上記のように、GDK は現在 [runit](https://smarden.org/runit/runsv.8) を使用してほとんどのサービスを実行し、さまざまなテンプレートファイルの作成をオーケストレーションしてユーザーのローカルシステム上でサービスごとに 1 つのプロセスを起動しています。設定された `version` は、プリビルドバイナリをダウンロードするか、関連するリポジトリの特定の git 参照をチェックアウトしてビルドするために使用されます。これは私たちが現在提供している機能セットに意図的に倣ったものであり、リファクタリングに相当します。

### Docker サービスランタイム

Linux と macOS の両方で透過的かつ疎結合な方法で動作するソリューションを実現するため、ソケットベースの Docker API を通じて通信できるサービスランタイムの実装を提案します。当面、実世界のネットワーキングに関連する障害モードのクラス全体を回避するために、同じ物理マシン上で動作する Docker ホストのみをサポートすることを提案します。これは選定予定の Ruby ライブラリを使用して実装されます。[docker-api](https://github.com/upserve/docker-api) は非公式のクライアントライブラリですが、少なくとも[公式ドキュメント](https://docs.docker.com/reference/api/engine/sdk/)に記載されており、候補として検討する必要があります。このサービスランタイムは、対応するコンポーネントがサービスコンテナイメージへの完全なイメージ参照を定義することを期待します。このランタイムのコンテキストでは、ユーザーが設定可能な `version` は、そのgit 参照に対してコンテナイメージが存在する限り、現時点では一般的に任意の種類の git 参照を指定できます。

### Runway サポート

Runway は、Cloud-Run および Kubernetes 上での[サービスのデプロイをサポートする](https://docs.runway.gitlab.com/runtimes/cloud-run/supported-features/) Platform-as-a-Service です。現在は適度に [GCP と結合](https://docs.runway.gitlab.com/team/guiding_principles/)していますが、成熟して組織全体で広く採用されることが期待されています。

Docker サービスランタイムが最初のイテレーションの定義された目標ですが、私たちの設計は拡張に対してオープンであることを意図しています。GDK の将来のイテレーションでは Runway のサービス設定のサブセットをサポートし、これを Docker または Kubernetes の概念にマッピングすることで、Runway をサポートするサービスランタイムが実現できます。

### コンテナイメージ

本番環境とのパリティはスコープ外であるため、実行可能なコンテナイメージは理論上さまざまなソースから得られます。

> [!note]
> これらのイメージは開発用に最適化されていません。コンテナ化された環境でサービスをデプロイするために必要なイメージにすぎません。そのため、[コンポーネントオーナーシップモデルに従って](/handbook/engineering/infrastructure-platforms/production/component-ownership-model/#roles)、これらはコンポーネントオーナーが所有することを意図したアーティファクトです。

1. 理想的には、CNG イメージがクラウド対応 GDK での使用に最適な候補になります。
2. GitLab Runner などの一部のサテライトサービスは、[コンテナイメージ](https://gitlab.com/gitlab-org/gitlab-runner/container_registry/29383)の形式ですでに利用可能です。
3. PostgreSQL や NGINX などのサードパーティサービスは、新しいリリース向けに公式でサポート・メンテナンスされたコンテナイメージがすぐに利用可能です。

GitLab が開発したサービスについては、CNG が提供するイメージの使用に強く注力する予定です。

GitLab が開発したサービスに CNG イメージを使用することは、顧客向けにすでにビルドしているマルチアーキテクチャイメージをドッグフーディングする素晴らしい方法です。さらに、別のコンテナイメージパイプラインの開発とメンテナンスに関連するコストを回避できます。

現時点でのいくつかの制限を認識しておく必要があります。これらは、コンテナベースのサービスランタイムをユーザーが利用できる範囲に影響します。特定のサービスまたはサービスバージョンが CNG でサポートされていない場合、GDK は既存のソースベースのサービスランナーが使用されるというグレースフルデグラデーションを提供します。

#### 現在 CNG がサポートするサービスのサブセットのみ

AI Gateway などの一部のサービスは、現在 [CNG と統合されていません](https://gitlab.com/gitlab-org/gitlab-development-kit/-/issues/3058#note_2838647818)。それにもかかわらず、サービスの状況を統合し、組織全体での CNG の採用を増やすという長期的な目標があり、この提案はその取り組みを支援できます。コンポーネントオーナーがコンポーネントをコンテナ化されたランタイムサポートで統合したい場合は、まずサービスを CNG に統合する必要があります。

CNG と統合されていない既存のコンポーネントは、コンテナ化されたサービスとして実行する利益を受けられません。それらは後方互換性のある方法でソースベースのコンポーネントとして引き続きサポートされます。

CNG の採用は時間とともに増加するものと思われます。必要なクロスコラボレーションは、初期実装とメンテナンスの両方の観点から、CNG のインフラと並行して別のイメージパイプラインを再発明するよりも、より意義深いものになるでしょう。

#### CNG はサテライトサービスのすべてのコミットに対してイメージを提供しない

すべてのサービスのすべてのコミットに対してイメージをビルドすることはコスト的に禁止されているため、CNG はサテライトサービスの特定のバージョンのみをビルドします。

[GitLab Registry](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/gdk.example.yml?ref_type=heads#L527) などの一部のコンポーネントでは、GDK は現在ユーザーが使用する特定のバージョンを設定できます。

一般的に、このバージョンは現在任意の git 参照（タグに関連付けられていないコミットでも）であり得ます。このユースケースは引き続きサポートしますが、**ユーザーはコンテナ化されたサービスの利益を受けられません**。

GitLab HTTP Router などの他のコンポーネントでは、GDK はバージョンをユーザーが直接設定することをサポートしていません。代わりに、[GitLab Release Platform 設計ドキュメントで言及されているバージョンファイル](https://gitlab.com/gitlab-com/content-sites/internal-handbook/-/merge_requests/7674/diffs#de7f639f645587dc201411c8c0d5a385112b83d2_0_193)と同様の特定のファイルから読み取られます。

サービスが [GitLab Release Platform のリリースマニフェスト](https://gitlab.com/gitlab-com/content-sites/internal-handbook/-/merge_requests/7674/diffs#de7f639f645587dc201411c8c0d5a385112b83d2_0_191)に統合されている場合、リリースマニフェストを使用して現在チェックアウトされたモノリスの作業コピーに適した CNG イメージを見つけることができます。

サービスが [GitLab Release Platform のリリースマニフェスト](https://gitlab.com/gitlab-com/content-sites/internal-handbook/-/merge_requests/7674/diffs#de7f639f645587dc201411c8c0d5a385112b83d2_0_191)に統合されていない場合、[CNG イメージを取得できません](https://docs.google.com/document/d/12TZ_z6f_h1dIf8REeUqamfKBzqyIrU7FABtwajyx4uA/edit?usp=sharing)。**この場合、ユーザーはコンテナ化されたサービスの利益を受けられません。**

提案された [Release Platform](https://gitlab.com/gitlab-com/content-sites/internal-handbook/-/merge_requests/7674/diffs#de7f639f645587dc201411c8c0d5a385112b83d2_0_191) の採用が増えるにつれて、開発者がコンテナベースのサービスランタイムを使用できないエッジケースは少数になると思われます。

### UBT / TUBE との関係

UBT と TUBE は、組織全体でビルドプロセスを統一するための重要なイニシアティブです。これにより、組織全体のコンポーネントオーナーがコンテナイメージをより速く効率的にビルドできるようになります。これらのイニシアティブはまだ[活発に開発中](https://gitlab.com/groups/gitlab-org/distribution/build-architecture/-/work_items/4)であり、FY27 後半にそれらの使用を評価できると期待されています。最終的にこれらのイニシアティブは組織全体での CNG 採用をさらに促進し、提案されたイニシアティブと相乗効果をもたらすと期待されています。

## 代替案

リモートおよびローカルの Kubernetes クラスターの両方を代替案として検討しましたが、最終的には[採用しないことを決定しました](https://docs.google.com/document/d/1z2yufP5OTFjZ5lxiN10VRAEvbleGSXShsMKeGX7Xss4/edit?usp=sharing)。

これは、組織が CNG に注力したいという意向と、クラウドネイティブな開発環境を構築するために活用できる [DevSpace](https://devspace.sh) や [Tilt](https://tilt.dev) などのツールが存在するため、当初は有望なアプローチに見えていました。

しかし、GDK 内から Kubernetes クラスターを管理することに関連する概念的な問題がいくつかあります。

リモート Kubernetes クラスターのみを使用するオプションを提供することは、ホスト型インフラへのアクセスを持たないコミュニティメンバーを包含できないため、適切ではありません。

チームメンバーは予算承認を得られる可能性がありますが、コミュニティサポートには MiniKube のようなローカル Kubernetes オプションが必要です。これにより、開発者による手動セットアップが必要となってコントリビューションの摩擦が増加するか、ローカル Kubernetes クラスターの自動管理を GDK に提供することでメンテナンスのオーバーヘッドが追加されます。

さらに、特にローカルとリモートの両方の Kubernetes クラスターをサポートする必要がある場合、Kubernetes 自体がこのコンテキストにおける不安定性の新たな原因になりうるという懸念が示されました。

> [!note]
> 長期的に変数を変更する可能性のある[アーキテクチャ提案](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/16581)が進行中です。この提案により、必要に応じてローカル Kubernetes クラスター上でサービスをデプロイするサービスランナーを実装できることは注目に値します。

MacOS の新しいコンテナランタイムの使用も簡単に検討しました。しかし、これはまだ不安定さや機能の欠如がある可能性のある比較的新しい機能であるため、現時点ではこのオプションを却下しました。

Docker API 互換インターフェースを提供していないため、最終的にホストオペレーティングシステムからの分離を提供するという目的に反して、MacOS 専用の別の実装が必要になります。

## 実装とロールアウト計画

GDK のデフォルト設定を基本的には変更しないまま、いくつかのコンポーネントを新しいサービスランナーに移行することを意図しています。

CNG と GDK の間に[サービスギャップ](https://gitlab.com/gitlab-org/gitlab-development-kit/-/issues/3058#note_2838647818)が存在するため、CNG にすでに統合されている頻繁に使用されるサービスから始めることを意図しています。GitLab Runner と GitLab Registry が適切な候補となります。

これにより、プロセスの早い段階で価値を実証し、コンポーネントを所有するチームが新しいサービスを統合する際の指針となる貴重な例を提供できます。移行はセルフサービスアプローチに従います。また、既存のサービスを新しいランナーに移行するようにチームを促すために、既存サービスの新機能を実装するタスクを使用する予定です。さらに、十分なドキュメントが利用可能になったら、必要に応じてサポートを提供しながら新しいセルフサービスアプローチによる新しいサービスの統合を強制することを意図しています。
