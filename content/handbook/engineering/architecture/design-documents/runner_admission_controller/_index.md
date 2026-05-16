---
title: "GitLab Runner アドミッションコントローラー"
status: proposed
creation-date: "2023-03-07"
authors: [ "@ajwalker", "@johnwparent"  ]
coach: [ "@ayufan" ]
approvers: [ "@DarrenEastman", "@engineering-manager" ]
owning-stage: "~devops::<stage>"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/runner_admission_controller/
upstream_sha: 4c7d94ca4f485376c886b7c2b9575091c8b7d3cf
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---


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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ajwalker" class="text-blue-600 hover:underline">@ajwalker</a>, <a href="https://gitlab.com/johnwparent" class="text-blue-600 hover:underline">@johnwparent</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ayufan" class="text-blue-600 hover:underline">@ayufan</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/DarrenEastman" class="text-blue-600 hover:underline">@DarrenEastman</a>, <a href="https://gitlab.com/engineering-manager" class="text-blue-600 hover:underline">@engineering-manager</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::<stage></span></td>
<td class="px-3 py-2 border border-gray-300">2023-03-07</td>
</tr>
</tbody>
</table>
</div>


GitLab の `アドミッションコントローラー`（[Kubernetes のアドミッションコントローラーコンセプト](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/)に着想を得た）は、ジョブが永続化されるか実行のためにビルドキューに追加される前にジョブをインターセプトする提案された技術的ソリューションです。

アドミッションコントローラーは GitLab インスタンスに登録され、作成するジョブを含むペイロードを受け取ることができます。アドミッションコントローラーは_ミューテーティング_、_バリデーティング_、またはその両方である可能性があります。

- _ミューテーティング_の場合、可変のジョブ情報を変更して GitLab インスタンスに送り返すことができます。ジョブは組織のポリシー、セキュリティ要件に準拠するように変更されたり、例えばタグリストを変更して特定の Runner にルーティングされたりする場合があります。
- _バリデーティング_の場合、ジョブは実行を拒否される可能性があります。

## 動機

職務分離、組織的ポリシー、またはセキュリティ要件に準拠するために、金融サービス、米国連邦政府市場セグメント、またはその他の規制の厳しい業種の顧客は、特定の CI ジョブ環境に関連付けられた Runner を認可されたユーザーのみが使用できることを確保する必要があります。

このコンテキストでは、環境という用語を使用することは、GitLab CI の環境とデプロイのドキュメントで使用される環境の定義と同等ではありません。[SLSA ガイド](https://slsa.dev/spec/v0.1/terminology)の定義を使用して、環境はジョブが実行される「マシン、コンテナ、VM、または同様のもの」です。

追加の要件は[Lawrence Livermore National Laboratory](https://hpc.llnl.gov/)の Remote Computing Enablement（RCE）グループから来ています。この例では、ユーザーは CI ジョブを実行するためにターゲットの Runner CI ビルド環境にユーザー ID を持っている必要があります。ユーザーベース全体での管理を簡素化するために、RCE は Runner を GitLab ユーザーエンティティに関連付けることができる必要があります。

### 現在の GitLab CI ジョブ処理メカニズム

さらに進む前に、GitLab CI と GitLab Runner の現在のジョブ処理メカニズムを整理することが役立ちます。

- まず、GitLab インスタンスに関連付けられた Runner が GitLab インスタンス API に継続的にクエリを送信し、実行できる新しいジョブがあるかどうかを確認します。
- GitLab 上のプロジェクトリポジトリへのすべてのプッシュで `.gitlab-ci.yml` ファイルが存在する場合、GitLab インスタンスに存在する CI サービスがイベントをキャッチして新しい CI ジョブをトリガーします。
- CI ジョブは、Runner がジョブを要求するまでキューで保留状態に入ります。
- Runner がジョブの API にリクエストを送信すると、データベースにクエリが送信されてジョブパラメーターが Runner のものと一致するかどうかが確認されます。言い換えれば、Runner が GitLab インスタンスにジョブをポーリングすると、指定された基準と一致する場合にジョブが割り当てられます。
- ジョブが問題の Runner と一致する場合、GitLab インスタンスはジョブを Runner に接続してジョブの状態を実行中に変更します。言い換えれば、GitLab は `job` オブジェクトを `Runner` オブジェクトに接続します。
- Runner はタグなしのジョブを実行するように設定できます。タグは今日顧客が特定の種類のジョブを実行する Runner を制御するために使用される主なメカニズムです。
- したがって、Runner はインスタンス、グループ、プロジェクトにスコープされていますが、ユーザーまたはグループ識別子に基づいて Runner へのアクセスを拒否するために拡張できる追加のアクセス制御メカニズムは今日存在しません。

現在の CI ジョブキューロジックは以下の通りです。**注意 - コードでは非常に古い `build` 命名構造をまだ使用していますが、製品とドキュメントでは `build` から `job` に移行しました。**

```ruby
jobs =
  if runner.instance_type?
   jobs_for_shared_runner
  elsif runner.group_type?
    jobs_for_group_runner
  else
    jobs_for_project_runner
  end

jobs = jobs.matches_tag_ids(runner.tags.ids)

unless runner.run_untagged?
  jobs = jobs.with_any_tags
end

```

## 目標

- CI ジョブの実行を `許可`、`拒否`、または `リダイレクト` するために、基本的なジョブの詳細（ユーザー、グループ、またはプロジェクトメンバーシップなど）に基づいて特定の Runner エンティティで CI ジョブ実行を `許可`、`拒否`、または `リダイレクト` するための設定・使用が容易なメカニズムを提供する初期ソリューションを実装する。

## 非目標

- CI ジョブのキューイングメカニズムの再設計は、このブループリントの範囲に含まれません。

## 提案

CI ジョブをインターセプトして、それらをミューテートするか、バリデートするか、あるいはその両方を行うことができる `アドミッションコントローラー` というメカニズムを実装します。アドミッションコントローラーは CI ジョブを変更したり、ポリシーに従ってジョブを拒否したりできるミューテーティング Webhook です。Webhook は CI ジョブキューにジョブが挿入される前に呼び出されます。

### ガイド原則

- Webhook ペイロードスキーマは公開向け API の一部となります。
- Webhook ペイロードを拡張する際には後方互換性を維持する必要があります。
- コントローラーは冪等性を持つ必要があります。

### アドミッションコントローラーはどのように機能するか?

**シナリオ 1**: 特定の Runner へのアクセスを拒否したい。

1. 特定のプロジェクトからのジョブのみを受け入れるようにアドミッションコントローラーを設定する。
1. ジョブが作成されると `プロジェクト情報`（`project_id`、`job_id`、`api_token`）が使用されて特定の詳細を GitLab に照会します。
1. `プロジェクト情報` が許可リストに一致する場合、ジョブペイロードは変更されず、ジョブはターゲット Runner で実行できます。
1. `プロジェクト情報` が許可リストに一致しない場合、ジョブペイロードは変更されず、ジョブはドロップされます。
1. ジョブタグは変更されません。
1. アドミッションコントローラーはオプションで拒否決定の理由の任意のテキスト説明を送り返すことができます。

**シナリオ 2**: 共通の設定とタグを使用する大きな Runner フリート。

各 Runner には `zone_a`、`zone_b` などのタグがあります。このシナリオでは、顧客は特定のジョブが実行できる場所を知らず、一部のユーザーは `zone_a` にアクセスでき、一部は `zone_b` にアクセスできます。顧客は `zone_a` で実行すべきジョブを失敗させたくなく、代わりに `zone_a` で実行するために正しくタグ付けされていない場合はジョブをリダイレクトしたいと考えています。

1. `user_id` に基づいてジョブをミューテートするようにアドミッションコントローラーを設定する。
1. ジョブが作成されると `プロジェクト情報`（`project_id`、`job_id`、`api_token`）が使用されて特定の詳細を GitLab に照会します。
1. `user_id` が一致する場合、アドミッションコントローラーはジョブタグリストを変更します。コントローラーはジョブをトリガーするユーザーのジョブを `zone_a` で実行すべきと検出したため、`zone_a` がタグリストに追加されます。

**シナリオ 3**: 特定のタグスキームを持つ Runner プール、ユーザーは特定のサブセットにのみアクセス可能

各 Runner には `DiscoveryOne`、`tugNostromo`、`MVSeamus` などのその Runner に固有のタグ識別子があります。ユーザーはこれらの Runner への任意のアクセスを持っていますが、アクセス拒否でジョブを失敗させたくなく、代わりにユーザーがアクセスできない Runner でジョブが実行されないようにしたいです。また、ジョブを実行できる Runner のプールを減らしたくありません。

1. `user_id` に基づいてジョブをミューテートするようにアドミッションコントローラーを設定する。
1. ジョブが作成されると `プロジェクト情報`（`project_id`、`job_id`、`api_token`）が使用されて特定の詳細を GitLab に照会します。
1. アドミッションコントローラーは `user_id` を持つ利用可能な Runner を照会して、ジョブを実行できないすべての Runner を収集します。これが_すべての_Runner の場合、アドミッションコントローラーはジョブを拒否し、ジョブはドロップされます。タグは変更されず、推論を示すメッセージが含まれます。ユーザーが権限を持つ Runner がある場合、アドミッションコントローラーは権限のない Runner に関連付けられた Runner をフィルタリングします。

### MVC

#### アドミッションコントローラー

1. 単一のアドミッションコントローラーをインスタンスレベルのみで登録できます。
1. アドミッションコントローラーは 1 時間以内に応答する必要があります。
1. アドミッションコントローラーは個々のジョブを受信します。レスポンスにはそのジョブに対するレスポンスのみが含まれる必要があります。
1. アドミッションコントローラーは拒否と承認の API コールバックを受信し、承認コールバックはミューテーションパラメーターを受け入れます。

#### ジョブのライフサイクル

1. `preparing` ジョブ状態は検証プロセスの前提条件を含むように拡張されます。

   ```mermaid
   stateDiagram-v2
      created --> preparing
      state preparing {
          [*] --> accept
          [*] --> reject
      }
      reject --> failed
      accept --> pending
      pending --> running: picked by runner
      running --> executed
      state executed {
          [*] --> failed
          [*] --> success
          [*] --> canceled
      }
      executed --> created: retry
   ```

1. 状態が `preparing` の場合、ミューテーティング Webhook ペイロードがアドミッションコントローラーに非同期で送信されます。これは必要に応じて何度もリトライされます。
1. `preparing` 状態は Webhook からのレスポンスを待つか、タイムアウトするまで待ちます。
1. UI はジョブ前提条件に関するジョブ準備の現在のステータスで更新される必要があります。
1. Webhook がタイムアウトした（1 時間）ジョブは、タイムアウト推論でアドミッションが拒否されたかのようにステータスが設定される必要があります。これは通常の状況では稀であるはずです。
1. アドミッションが拒否されたジョブはリトライできます。リトライされたジョブはタグミューテーションや Runner フィルタリングがリセットされずにアドミッションコントローラーに再送信されます。
1. [`allow_failure`](https://docs.gitlab.com/ee/ci/yaml/index.html#allow_failure) はアドミッションが拒否されたときに失敗するジョブをサポートするように更新される必要があります。例えば:

   ```yaml
   job:
     script:
       - echo "I will fail admission"
     allow_failure:
       on_denied_admission: true
   ```

1. UI はジョブミューテーションの理由（提供された場合）または拒否の理由を表示するように更新される必要があります。
1. アドミッションコントローラーによって適用されたタグ変更は、変更、承認、拒否に対する関連する推論とともにシステムによって永続化される必要があります。

#### ペイロード

1. ペイロードは以下で構成される個々のジョブエントリで構成されます:
   - ジョブ ID。
   - [定義済み変数](https://docs.gitlab.com/ee/ci/variables/predefined_variables.html)
   - ジョブタグリスト。
1. レスポンスペイロードは以下で構成される個々のジョブエントリで構成されます:
   - ジョブ ID。
   - アドミッション状態: `accepted` または `denied`。
   - ミューテーション: `additions` と `removals`。`additions` は既存のタグセットを補足し、`removals` は現在のタグリストからタグを削除します。
   - 理由: コントローラーはアドミッションとミューテーションの理由を提供できます。
   - 承認された Runner: ジョブマッチングに考慮される Runner、空の場合はすべての Runner に一致します。
   - 拒否された Runner: ジョブマッチングで考慮されない Runner、空の場合はすべての Runner に一致します。

##### リクエスト例

```json
[
  {
    "id": 123,
    "variables": {
      # predefined variables: https://docs.gitlab.com/ee/ci/variables/predefined_variables.html
      "CI_PROJECT_ID": 123,
      "CI_PROJECT_NAME": "something",
      "GITLAB_USER_ID": 98123,
      ...
    },
    "tags": [ "docker", "windows" ]
  }
]
[
  {
    "id": 245,
    "variables": {
      "CI_PROJECT_ID": 245,
      "CI_PROJECT_NAME": "foobar",
      "GITLAB_USER_ID": 98123,
      ...
    },
    "tags": [ "linux", "eu-west" ]
  }
]
[
  {
    "id": 666,
    "variables": {
      "CI_PROJECT_ID": 666,
      "CI_PROJECT_NAME": "do-bad-things",
      "GITLAB_USER_ID": 98123,
      ...
    },
    "tags": [ "secure-runner" ]
  },
]
```

##### レスポンス例

```json
[
  {
    "id": 123,
    "admission": "accepted",
    "reason": "it's always-allow-day-wednesday"
  }
]
[
  {
    "id": 245,
    "admission": "accepted",
    "tags": {
      "add": [ "linux", "us-west" ],
      "remove": [...]
    },
    "runners": {
      "accepted_ids": ["822993167"],
      "rejected_ids": ["822993168"]
    },
    "reason": "user is US employee: retagged region; user only has uid on runner 822993167"
  }
]
[
  {
    "id": 666,
    "admission": "rejected",
    "reason": "you have no power here"
  }
]
```

### MVC +

1. グループとプロジェクトレベルで複数のアドミッションコントローラー。
1. コントローラーのチェーン（プロジェクトから始まり、定義されたすべてのグループコントローラーを経てインスタンスコントローラーまで）を通じてジョブ定義を渡す。
1. 各レベルは前のコントローラーによって変更された定義を受け取り、現在の状態に基づいて決定を行います。
1. 複数のコントローラーによって報告された場合、変更の理由は連結されます。
1. アドミッションコントローラーの使用はオプションであるため、プロジェクト+インスタンス、プロジェクト+グループ+親グループ+インスタンス、プロジェクト+グループ、グループ+インスタンスなどを含むチェーンを持つことができます。

### 実装の詳細

#### GitLab

1. `prerequsite` インターフェースを介して検証プロセスを関与させるために `preparing` 状態を拡張する。
1. UI と API を介してジョブ準備の前提条件に関するジョブ準備のステータスをユーザーに示すために `preparing` 状態を修正する。
   1. 非同期であるため、各前提条件リソースのジョブのステータスを個別に示す必要があります。
   1. 全体的な前提条件のステータスを示す必要があります。
1. `preparing` 状態全体に 1 時間のタイムアウトを導入する。
1. `Gitlab::Ci::Build::Prerequisite::Factory` を介して `preparing` ステータス依存関係に `AdmissionValidation` 前提条件を追加する。
1. 前提条件ファクトリと `preparing` ステータスを非同期で動作するように変換する。
1. `PreparingBuildService` を非同期で動作するように変換する。
1. `PreparingBuildService` は検証の成功に応じてジョブを preparing から failed または pending に遷移させます。
1. AdmissionValidation はリクエスト送信時に合理的な回数のリトライを実行する。
1. Webhook/アドミッションコントローラーレスポンスコールバックの API エンドポイントを追加する。
   1. パラメーターを受け入れる:
      - 承認/拒否
      - 理由文字列
      - タグのミューテーション（承認された場合、それ以外は無視）
   1. コールバックはワンタイム認証トークンをエンコードする。
1. バリデーション拒否に関する新しい失敗理由を導入する。
1. ジョブに対するアドミッションコントローラーの影響は永続化される必要がある。
1. アドミッションコントローラー（ミューテーティング Web フック）からのレスポンスの関数としてジョブごとの Runner 選択フィルタリングを追加する。

## 解決すべき技術的な Issue

| Issue                                                                                                                                                                                                     | 解決策 |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| キュー Web フックのルール定義                                                                                                                                                                              |        |
| アドミッションコントローラーに送信するデータは何か？[定義済み変数](https://docs.gitlab.com/ee/ci/variables/predefined_variables.html)のサブセットかすべてか？                                             |        |
| `キューイング Web フック` は GitLab.com のスケールで実行できるか？GitLab.com では毎秒何百万もの Webhook をトリガーし、Sidekiq を過負荷にしたり、システムを悪用するために使用されるのではないかという懸念がある。 |        |
