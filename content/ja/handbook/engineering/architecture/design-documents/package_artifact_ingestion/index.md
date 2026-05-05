---
# This is the title of your design document. Keep it short, simple, and descriptive. A
# good title can help communicate what the design document is and should be considered
# as part of any review.
title: パッケージアーティファクトの取り込み
status: proposed
creation-date: "2024-09-25"
authors: [ "@idawson" ]
coaches: []
dris: [ "@idawson", "@gonzoyumo", "@dabeles" ]
owning-stage: "~devops::application security testing"
participating-stages: []
# Hides this page in the left sidebar. Recommended so we don't pollute it.
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/package_artifact_ingestion/
upstream_sha: 171236827c9a366363160b625ff53ec19c521940
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
---

<!-- Design Doucments often contain forward-looking statements -->
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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/idawson" class="text-blue-600 hover:underline">@idawson</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/" class="text-blue-600 hover:underline">@</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/idawson" class="text-blue-600 hover:underline">@idawson</a>, <a href="https://gitlab.com/gonzoyumo" class="text-blue-600 hover:underline">@gonzoyumo</a>, <a href="https://gitlab.com/dabeles" class="text-blue-600 hover:underline">@dabeles</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::application security testing</span></td>
<td class="px-3 py-2 border border-gray-300">2024-09-25</td>
</tr>
</tbody>
</table>
</div>


<!--
Don't add a h1 headline. It'll be added automatically from the title front matter attribute.

For long pages, consider creating a table of contents.
-->

## 提案

サポートされているパッケージマネージャー向けに SBOM または pURL のリストを受け取り、アーティファクトをダウンロード・展開して、カスタムネームスペース配下の GitLab.com に保存する新しいサービスを構築します。このサービスにより、私たちのコードベースおよび顧客のコードベースで実際に実行されているアーティファクトに対してカスタムツールとサービスを実行できるようになります。

このサービスにより、ダウンロードと展開をツール自身が処理することを必要とせず、git リポジトリに保存されているデータを再利用しながら、ツールの更新や再実行を容易に行えるようになります。

### アーティファクト出力の例

`requests` という Python パッケージの例として、このシステムは以下の出力を作成します:

1. `gitlab.com/gitlab-oss-package-research/source/pypi/requests/` リポジトリに、すべてのバージョンが適切にタグ付けされます（例: リポジトリには v1.0.0、v1.01、v2.0.0、v2.0.1 などの git タグが付きます）。
2. `gitlab.com/gitlab-oss-package-research/tools/pypi/requests/<tool>/` リポジトリに、すべてのバージョンが適切にタグ付けされます。ツールは JSON または任意の形式で出力できますが、出力内容はコミットされ、実行された対象の出力にタグ付けされる必要があります。
    1. 例えば Libbehave が v1.0.0 と v1.0.1 に対して実行された場合:
        1. `gitlab.com/gitlab-oss-package-research/tools/pypi/requests/libbehave/libbehave.json` が v1.0.0 でタグ付け
        2. `gitlab.com/gitlab-oss-package-research/tools/pypi/requests/libbehave/libbehave.json` が v1.0.1 でタグ付け
    2. サービスは関心があるバージョンの出力に HTTP リクエストを通じて容易にアクセスできます: `https://gitlab.com/gitlab-oss-package-research/tools/pypi/requests/libbehave/libbehave.json?refs=v1.0.0`

### データを活用する製品またはサービスの例

1. Libbehave: ダウンロードされたパッケージのみで動作します。Libbehave のルールを簡単に更新し、スキャンを再実行して、各バージョンのパッケージの結果をこのカスタムネームスペースに保存できます。
2. [CA 自動修復](https://gitlab.com/groups/gitlab-org/-/epics/15114): 2 バージョン間で何の API が変更されたかを正確に把握することで、差分データを使用して、パッケージのアップデートが顧客のコードベースにどのような影響を与えるかを判断するツールを容易に書けます。
3. [Depscore](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/depscore): AppSec チームの depscore プロジェクトをライブラリの個々のバージョンに対して実行し、ツールリポジトリ内の各バージョンの結果を保存できます。
4. [OpenSSF Scorecard](https://github.com/ossf/scorecard): ライブラリの個々のバージョンに対して OpenSSF Scorecard を実行し、ツールリポジトリ内の各バージョンの結果を保存できます。
5. Advanced SAST: CA 自動修復と同様に、フレームワークの API を知ることはソースとシンクを特定するために重要です。このデータを利用可能にすることで、どのバージョンのソースとシンクが機能するかを容易に判断できます。
6. https://advisories.gitlab.com: このデータへのリンクを活用して、advisories.gitlab.com のウェブサイト上で Libbehave の出力とともに脆弱なバージョンを表示できます。これにより、Software Composition Analysis (SCA) の機能を見せることができます。
7. 定期的な更新が必要なその他のツール（例: ルールベース）は、オンデマンドでパッケージをダウンロードする必要なく結果を更新できるため恩恵を受けます。
8. パッチ分析（AI/ML データセット）: パッケージのバージョン間の差分/パッチを容易に作成でき、様々な AI/ML トレーニングデータセットに役立つ可能性があります。
9. 外部研究者: 直接の製品/サービスではありませんが、これらのリポジトリを世界に公開することで、外部研究者はプロジェクトの git リポジトリにあるものだけでなく、パッケージが実際にどのようなコードを含んでいるかの信頼できる情報源として GitLab.com を参照できるようになります。

## アーキテクチャ

![取り込みアーキテクチャ](/images/handbook/engineering/architecture/design-documents/package_artifact_ingestion/ingestion_architecture.png)

## プロセス

ツールまたはクライアントがまず、サポートされているパッケージマネージャーのパッケージを含む pURL または pURL で満たされた SBOM のリストを取得します。

スケジュールされたジョブ/サービスも実行され、すでに保存されているパッケージが最新の状態に保たれます。

### pURL / SBOM API サービス

上述の pURL のリストがこの API サービスに送信されます。pURL が有効でサポートされているパッケージマネージャーであれば、ユニークなパッケージを含む複数の pub/sub リクエストが開始されます。API サービスはレート制限のためにパッケージと同時使用を追跡する firestore データストアを使用する HTTPS 対応のクラウドラン関数になります。

### パッケージプロセッサ

パッケージプロセッサは解析されたパッケージ情報を受け取り、パッケージマネージャーの API を呼び出してバージョンリストを取得します。次に GitLab の [Tags API](https://docs.gitlab.com/ee/api/tags.html) を呼び出して、パッケージのタグリストを取得します: `gitlab.com/gitlab-oss-package-research/source/<pkgmgr>/<pkg>/`。バージョンが存在しない場合、またはパッケージが存在しない場合は、パッケージマネージャーの API 出力にリストされた各パッケージをダウンロードします。ダウンロードされたパッケージは通常、圧縮アーカイブファイル（zip/tar）です。

パッケージがすでに gitlab.com に存在する場合は、git リポジトリがコンテナにプルダウンされます。ダウンロードされたアーカイブファイルは反復処理され、この git リポジトリに展開されます。各バージョンはコミットされ、特定のバージョンでタグ付けされます。例えば v1.0.0 と v1.1.1 をプルダウンした場合:

1. \*git リポジトリの古いコンテンツを削除
1. v1.0.0 を git リポジトリに展開
1. 新しいファイルをコミット
1. git tag --name "v1.0.0"
1. git リポジトリのコンテンツを再度削除
1. v1.0.1 を git リポジトリに展開
1. 新しいファイルをコミット
1. git tag --name "v1.0.1"
1. すべての変更とタグを `gitlab.com/gitlab-oss-package-research/source/<pkgmgr>/pkg` にプッシュ

\*注: 一時ディレクトリに展開して git diff を使用してファイルを置き換えることもできます。

パッケージがまだ一度も見たことがない場合は、上記と同じプロセスが実行されますが、最初に新しいリポジトリが作成されて gitlab.com/gitlab-oss-package-research/ に追加されます。

## 懸念事項

### レート制限

最大の懸念事項は、新しいリポジトリの作成で GitLab.com に過負荷をかけることです。API サービスは、各パッケージプロセッサがどれだけの git リポジトリが作成・更新されているかを把握できるよう、いくらかのレート制限を設定するか、グローバルカウンターを設定するための共有データストア（firestore またはシンプルな K/V ストア）が必要になります。

### ストレージスペース

初期分析では、8 つのパッケージマネージャーそれぞれで 10,000 パッケージ（80,000 合計）を使用しても、約 3.28TB のスペースしか使用せず、ストレージスペースは無視できるほど少ないことが示されました。

## 初期実装計画

1. GitLab.com に新しいネームスペース `gitlab.com/gitlab-oss-package-research` の作成をリクエストする。
2. 2 つのサブグループを作成する:
    1. `gitlab.com/gitlab-oss-package-research/source/`
    2. `gitlab.com/gitlab-oss-package-research/tools/`
3. GitLab.com でこのサービスをデプロイするための新しいプロジェクトを作成する（https://gitlab.com/gitlab-org/secure/vulnerability-research/oss-package-research）。
4. サービスをデプロイするための Terraform モジュールを構築する。
5. API サービスを作成し、パッケージプロセッサ用に既に作成されたコードを取り込む。
6. GLAD に存在するすべてのパッケージから始めて、新しいネームスペースに追加する。
7. プルダウンされたパッケージに対してツール（Libbehave）を実行し、`gitlab.com/gitlab-oss-package-research/tools/<pkg>/` グループに各バージョンの結果を保存する。
8. ユニークな脆弱性ページごとに advisories.gitlab.com を更新して、Libbehave の出力も含める。例えば、pypi の requests Python パッケージの v1.0.0 に対するアドバイザリが存在する場合、`https://gitlab.com/gitlab-oss-package-research/tools/pypi/requests/-/libbehave/libbehave.json?refs=v1.0.0)` に単純な HTTP リクエストを送信し、JSON 出力をアドバイザリページの出力に直接含めることができます。
