---
stage: core platform
group: Tenant Scale
title: 'Cells: ルーティング可能なトークン'
status: proposed
upstream_path: /handbook/engineering/architecture/design-documents/cells/routable_tokens/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

このドキュメントでは、Cells が使用するルーティング可能なトークン（Routable Tokens）の設計目標とアーキテクチャを説明します。このドキュメントは特に [Phase 4](https://gitlab.com/groups/gitlab-org/-/epics/14510) の目標に焦点を当てています。

## 目的

GitLab は、ユーザー/サービスが GitLab とやり取りするためのさまざまな方法（例えば [REST API 認証](https://docs.gitlab.com/ee/api/rest/#authentication)や[トークン概要](https://docs.gitlab.com/ee/security/tokens/index.html)など）を提供するために、マシン生成のトークンを広範に使用しています。
トークンには、ユーザー、[プロジェクト](https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html)、[グループ](https://docs.gitlab.com/ee/user/group/settings/group_access_tokens.html)など、異なるスコープがあります。

[HTTP ルーティングサービス](http_routing_service.md)はトークンをルーティング可能にする必要があります。これにより、正しい Cell にリクエストをルーティングできます。

## ゴール

このドキュメントでは次のゴールを説明します。

- HTTP ルーターによってデコード可能なルーティング可能なトークン。
- 既存のトークンの使用状況の把握と説明。

## 非ゴール

このドキュメントは、次の非ゴールの必要性を再評価することを意図していません。

- シークレットの必要性、およびそのライフサイクルやアプリケーションによる管理方法。
- 多数の暗号化キーのサポートの定義
- オンライン暗号化キーローテーションを可能にするパターンの定義
- レガシー暗号化キーまたはレガシー戦略の廃止と削除のドキュメント化
- シークレットとトークンの保存の統一
- 単一のシークレットフレームワークを使用するために `attr_encrypted` から移行すること
- [Org Mover](https://gitlab.com/groups/gitlab-org/-/epics/12857) で使用するトランジット/共有キーの導入

これらの非ゴールは、アプリケーションによるシークレット管理を説明する新しい設計ドキュメントで解決する予定です。

### トークンとクッキー

現時点でのトークンのリストは、編集を容易にするために [Google スプレッドシート](https://docs.google.com/spreadsheets/d/1n54lCX2axsTIt8DZBRFj9p44s6YcFp-UechVEHEim8Y/)として共有されています。

### シークレット

このドキュメントは、`CI 変数` のような保存時のシークレットではなく、ルーティング可能なトークンのみに焦点を当てています。

## 既存の実装

### TokenAuthenticatable

アプリケーション内のトークンの大部分は `TokenAuthenticatable` フレームワークを使用しており、トークンの生成方法を簡単に変更できます。次の例のように、カスタム `token_generator` を使用するトークンも一部あります。

```ruby
module Clusters
  class AgentToken < ApplicationRecord
    TOKEN_PREFIX = "glagent-"

    add_authentication_token_field :token,
      encrypted: :required,
      token_generator: -> { Devise.friendly_token(50) },
      format_with_prefix: :glagent_prefix

    def glagent_prefix
      TOKEN_PREFIX
    end
  end
end
```

## プロポーザル

このプロポーザルは、すべてのトークンがトークンが付属するオブジェクトに関するルーティング可能な情報をエンコードするようにすることです。このドキュメントは、Phase 4 でルーティング可能にする必要があるトークン（[パーソナルアクセストークン](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)、[CI/CD ジョブトークン](https://docs.gitlab.com/ee/ci/jobs/ci_job_token.html)、[ランナー認証トークン](https://docs.gitlab.com/ee/security/tokens/#runner-authentication-tokens)）に特に最初に焦点を当てています。

現在、トークンは `<prefix><random-string>` のパターンで生成されます。ルーティング可能なトークンはこれを `<prefix><base64-payload>.<token-version>.<base64-payload-length><crc32>` に変更します。

### 仕様

- ルーティング可能なトークンは `<random-string>` を `<base64-payload>.<token-version>.<base64-payload-length><crc32>` に変更します。

- `<base64-payload>` は 3 つの部分から構成される base64 エンコードされた文字列です: `<random-bytes><routing-payload><routing-payload-length>`。
  - `<random-bytes>` は高いエントロピーを確保するためのランダムバイトのセットであり、トークンを偽造できないようにします。
  - `<routing-payload>` は `c:3w5e11264sgsf\ng:3w5e11264sgsf\np:3w5e11264sgsf` の形式の改行区切り文字列です。
    - HTTP ルーターがトークンが使用される予定の Cell にリクエストをルーティングできるようにする情報を含みます。
    - 各ルーティング行は、説明する値のタイプを示す文字で始まります。タイプと値は `:` 文字で区切られます。
    - 整数値はスペース効率のために base36 文字列としてエンコードされなければなりません。
    - 行はアルファベット順にソートされます（例: `c:` が `g:` の前に来るなど）。
  - `<routing-payload-length>` は `<routing-payload>` の長さを保存する 1 バイト（`8 ビット符号なし (unsigned char)`）（つまり `<integer>.pack("C")`）です。
- `<token-version>` は `base36` で表された整数であり、2 つの英数字（例: `00`、`0a`、`zz`）を使用し、`<integer>.to_s(36).rjust(2, '0')` を使用して生成されます。このフォーマットは 0 から 1295 のバージョン管理をサポートします。
- `<base64-payload-length>` は `base36` で表された整数であり、2 バイトを使用して有効桁に 0 でパディングします（つまり `<integer>.to_s(36).rjust(2, '0')`）。`<base64-payload>` の長さを保存します。
- `<crc32>` は base36 で表された整数であり、7 バイトを使用して有効桁に 0 でパディングします（つまり Ruby では `<integer>.to_s(36).rjust(7, '0')`）。`<prefix><base64-payload>.<base64-payload-length>` の CRC32 チェックサムを保存します。

#### 制約

- ルーティングパーツの最小数は 1 です。
  - ルーティングパーツが定義されていない場合は例外が発生します。
- `c`（Cell ID）または `o`（Organization ID）の少なくとも一方が存在しなければなりません。
  - 有効な組み合わせは: `c` のみ、`o` のみ、または `c` と `o` の両方です。
- ルーティングパーツの最大数は 10 です。
  - 10 を超えるルーティングパーツが定義された場合は例外が発生します。
- `<routing-payload>` の最小サイズは 3 バイトです（つまり `o:1`）。
  - `<routing-payload>` が 3 バイト未満の場合は例外が発生します。
- `<routing-payload>` の最大サイズは 159 バイトです: `'c:3w5e11264sgsf'.size * 10 + (10 - 1)`（[最大トークン長](#最大トークン長)を参照）。
  - `<routing-payload>` が 159 バイトを超える場合は例外が発生します。
- 現在有効なルーティングパーツキーは `c`、`g`、`o`、`p`、`u`、`t` です。その他のキーは例外を発生させます。
- ランダムバイトの最小数は 16 です。
  - これは高いエントロピーを確保するための任意の設定です。
- ランダムバイトの最大数は 65 です: `(エンコード前の最大バイト数) - (max size of <routing-payload>) - (size of <random-bytes-length>) = 225 - 159 - 1 = 65`
  - これにより、常に最大の `<routing-payload>` をエンコードできます。
- `<base64-payload>` の最小サイズは 27 バイトです（エンコード前 20 バイト: `(min size of <random-bytes>) + (min size of <routing-payload>) + (size of <routing-payload-length>) = 16 + 3 + 1 = 20`）
- `<base64-payload>` の最大サイズは 300 バイトです（エンコード前 225 バイト）。
  - これは任意の設定であり、現時点で必要なすべての情報を伝えるのに十分であるはずです。
  - `<base64-payload>` が 300 バイトを超える場合は例外が発生します。
- プレフィックスの最小サイズは 0 バイトです。
- プレフィックスの最大サイズは 20 バイトです。
  - プレフィックスが 20 バイトを超える場合は例外が発生します。
- トークンの最小サイズは 40 バイトです: `(min size of <base64-payload>) + (size of '.') + (size of <token-version>) + (size of '.') + (size of <base64-payload-length>) + (size of <crc32>) = 27 + 1 + 2 + 1 + 2 + 7 = 40`
- プレフィックスなしのトークンの最大サイズは 313 バイトです: `(max size of <base64-payload>) + (size of '.') + (size of <token-version>) + (size of '.') + (size of <base64-payload-length>) + (size of <crc32>) = 300 + 1 + 2 + 1 + 2 + 7 = 313`
- プレフィックスありのトークンの最大サイズは 333 バイトです: `(max size of prefix) + (max size of <base64-payload>) + (size of '.') + (size of <token-version>) + (size of '.') + (size of <base64-payload-length>) + (size of <crc32>) = 20 + 300 + 1 + 2 + 1 + 2 + 7 = 333`

#### 追加情報

- 生成されたトークンはそのまま全体として保存され、Rails アプリケーションによってその全値に対して検証されます。これは現在のロジックから変更されません。
  これは、通常署名がトークン自体の信頼性を検証するために使用される JWT とは対照的です。
- Rails アプリケーションは `<base64-payload>` をデコードしてはならず、認証目的でのみトークン全体をそのまま使用する必要があります。
- アプリケーションによるトークンの保存と検証は変更されません。
- `<base64-payload>` をデコードする能力は HTTP ルーター専用の機能です。
- `<routing-payload>` は `<base64-payload>` から簡単に取得できます（擬似コード）:
  1. `<base64-payload-length>` を取得し、base36 から整数に変換します（つまり Ruby では `<token>[-9, 2].to_i(36)`。JavaScript では `parseInt(<token>.slice(-9, -7), 36)`）
  1. `<base64-payload>` を取得します（つまり Ruby では `<token>[(-10 - <base64-payload-length>), <base64-payload-length>]`。JavaScript では `<token>.slice(-10 - <base64-payload-length>, -11)`）
  1. `<base64-payload>` を Base64 デコードして `<payload>` を取得します（つまり Ruby では `Base64.urlsafe_decode64(<base64-payload>)`。JavaScript では `atob(<base64-payload>.replace(/_/g, '/').replace(/-/g, '+'))`）
  1. `<random-bytes-length>` を取得し、`1 バイト unsigned char` にアンパックします（つまり Ruby では `<payload>[-1].unpack1("C")`。JavaScript では `payload.slice(-1).charCodeAt(0)`）
  1. `<routing-payload>` を取得します（つまり Ruby では `<payload>[...-<random-bytes-length> - 1]`。JavaScript では `payload.slice(0, -<random-bytes-length> - 1)`）
- シークレット検出ツールは、トークンの信頼性をオフラインで、かつ base64 デコードなしに確認できます（つまり Ruby では `Zlib.crc32(<token>[...-7]) == <token>[-7, 7].to_i(36)`）。チェックサムがトークンの最後の 7 文字として含まれているためです。
- `TokenAuthenticatable` フレームワークはルーティング可能なトークンの生成を可能にするように更新されます。
- シークレット検出ツールは、より長く可変のトークン長と新しい `.<base64-payload-length><crc32>` サフィックスに対応するために変更する必要があります:
  - `app/assets/javascripts/lib/utils/secret_detection_patterns.js`
  - [GitLab シークレット検出 gem](https://gitlab.com/gitlab-org/gitlab/-/tree/master/gems/gitlab-secret_detection)
  - [GitLab シークレット SAST アナライザー](https://gitlab.com/gitlab-org/security-products/secret-detection/secret-detection-rules)
  - [Tokinator](https://gitlab.com/gitlab-com/gl-security/appsec/tokinator/-/merge_requests/125)

### 実装

現在の実装は <https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/authn/token_field/generator/routable_token.rb> で確認できます。

### 最小トークン長

単一のルーティングパーツの最小 ID を持つトークンの例（プレフィックスなし）で、最小のトークン長（40 バイト）を示します。

```text
EL25d_AKXDUtqLnIQHEpkG86MQM.01.0r1ajj2i3
```

そのルーティングペイロードは次のとおりです。

```text
o:1
```

### 最大トークン長

すべてのルーティングパーツの最大 ID を持ち、最長のプレフィックス（20 バイト）が付いたトークンの例で、最大のトークン長（333 バイト）を示します。

```text
++++++++++++++++++++LB4hkKqprRab1Y3A72WqTPSDo2FS1t1qgJTIhL2O_kp90C8s8cL55xHQtmr-eVFugNkcwt0PZgzKqS3RI2ku4fBjOjN3NWUxMTI2NHNnc2YKZzozdzVlMTEyNjRzZ3NmCmg6M3c1ZTExMjY0c2dzZgpqOjN3NWUxMTI2NHNnc2YKazozdzVlMTEyNjRzZ3NmCmw6M3c1ZTExMjY0c2dzZgptOjN3NWUxMTI2NHNnc2YKbzozdzVlMTEyNjRzZ3NmCnA6M3c1ZTExMjY0c2dzZgp1OjN3NWUxMTI2NHNnc2af.01.8c0kai99b
```

そのルーティングペイロードは次のとおりです。

```text
c:3w5e11264sgsf
g:3w5e11264sgsf
h:3w5e11264sgsf
j:3w5e11264sgsf
k:3w5e11264sgsf
l:3w5e11264sgsf
m:3w5e11264sgsf
o:3w5e11264sgsf
p:3w5e11264sgsf
u:3w5e11264sgsf
```

`3w5e11264sgsf` は `(2**64-1).to_s(36)` であり、bigint の最大数であることに注意してください。また、`l`、`k`、`j`、`h`、`m` は実際のルーティングキーではなく、トークンの最大理論サイズを示すためにのみ存在します。

実際には、すべてのルーティングパーツが設定されることはほとんどありませんが、最大トークン長（例えばシークレット検出スクリプト用）を知っておくことは有用です。

### フィールドの意味

ペイロードは構造化された情報を保持しているため、各単一文字には特定の意味があります。次のルーティングフィールドのうち少なくとも一つが存在しなければなりません。

- `c`: Cell ID
- `o`: Organization ID

`c` と `o` の両方が存在できますが、少なくとも一方が必要です。

次のフィールドはオプションです。特定のトークンは必要に応じてそれらを含めることができます。

- `g`: グループ ID
- `p`: プロジェクト ID
- `u`: ユーザー ID
- `t`: ランナータイプ（例: `t:1` はインスタンスタイプ、`t:2` はグループタイプ、`t:3` はプロジェクトタイプ）

トレースと観測の目的のために、特定のトークンに最も重要な情報を含めることが推奨されます。例えば、ユーザートークンにはユーザー ID も含め、プロジェクトトークンにはプロジェクト ID も含めます。

#### 異なるルーティングフィールドの組み合わせを使用するタイミング

**ルーティングフィールド（`c` と `o`）:**

`c`（Cell ID）または `o`（Organization ID）の少なくとも一方が存在しなければなりません。選択はトークンのスコープによって異なります。

- **インスタンストークン**（`c` のみ）: 特定の Organization に結びついていないインスタンススコープ（Cell スコープ）のトークンに使用します。例えば、インスタンスランナー認証トークンは Organization ではなく Cell に関連付けられています。これらのトークンは `o` なしで `c` のみを指定します。
- **Organization トークン**（`o` または `c` + `o`）: パーソナルアクセストークン、プロジェクトアクセストークン、グループアクセストークンなど、特定の Organization に属するトークンに使用します。これらのトークンは `o` のみを含めることもできます（ルーティングレイヤーが Organization から Cell を解決します）。または、最も具体的なルーティング情報のために `c` と `o` の両方を含めることもできます。

**オプションフィールド（`g`、`p`、`u`、`t`）:**

各トークンタイプに最も具体的なオプションフィールドを含めることが推奨されます。Topology Service は特異性によってルーティングします（`p` が `g` より、`g` が `o` より、`o` が `u` より、`u` が `c` より優先されます）。より具体的なフィールドを含めることでルーティングの精度が向上します。

これは、トップレベルグループが Organization 間を移動する可能性がある移行期間中（例えばデフォルト Organization から）に特に重要です。トークンに `p` または `g` を含めることで、Organization の関連付けが変更されても、ルーティングが正確であり続けます。例えば:

- **プロジェクトアクセストークン**には `p`（プロジェクト ID）を含めます。
- **グループアクセストークン**には `g`（グループ ID）を含めます。
- **パーソナルアクセストークン**には `u`（ユーザー ID）を含めます。

### Topology Service への Classify の追加

Topology Service の Classify エンドポイントがルーティング可能なトークンのペイロード全体（`r` を除く）を受け取り、利用可能な情報に基づいて最善のルーティング決定を自律的に行えることが強く求められます。

Topology Service がフルペイロードを受け取ったら、ID のカーディナリティに基づいてルーティング決定を行い、プロジェクト ID、グループ ID、Organization ID、ユーザー ID、Cell ID の順で検索することを優先します。そのため、Topology Service に新しい識別子のサポートを追加しても HTTP ルーターの実装は変わらず、Topology Service によって自動的にサポートされます。

Topology Service に送られるリクエストには、トークンが本当に一意であることを確保するための `r` フィールドを含めてはなりません。`r` を送ることは必要ではなく、送らないことで Topology Service への攻撃対象領域を減らします。`r` なしでは Topology Service はトークンを再構成できないからです。

```proto
enum ClassifyType {
  ROUTABLE_TOKEN = 3;
}

message ClassifyRequest {
  ClassifyType type = 2;
  oneof value {
    string str = 3;
    map<string,string> routable_token = 4;
  };
}

service ClassifyService {
  rpc Classify(ClassifyRequest) returns (ClassifyResponse) {
    option (google.api.http) = {
      post: "/v1/classify",
      body: "*"
    };
  }
}
```

前のポイントからのペイロードに基づいて classify を送信すると仮定して、Topology Service に次のリクエストを送信します。

```ruby
classify_service.classify(
  ClassifyRequest.new(
    type: ClassifyType.ROUTABLE_TOKEN,
    routable_token: {
      "c": "100",
      "o": "1",
      "u": "100"
    }
  )
)
```

Topology Service は次の優先順位で利用可能な情報によってルーティングします。

1. `p`
1. `g`
1. `o`
1. `u`
1. `c`

### Token Authenticatable への統合

ルーティング可能なトークンは、TokenAuthenticatable にファーストクラスのサポートされた構文として統合されることを意図しています。`routable_token:` が使用されると、ペイロードの生成方法が変わります。`routable_token:` の使用は、異なる形式のランダム文字列を生成するために時々使用される `generator:` と一緒に使用してはなりません。

```ruby
class PersonalAccessToken
  add_authentication_token_field :token,
    encrypted: :required,
    format_with_prefix: :prefix_from_application_current_settings,
    routable_token:
      if: ->(token_owner_record) { Feature.enabled?(:routable_token, token_owner_record.user) },
      payload: {
        o: ->(token_owner_record) { token_owner_record.organization_id.to_s(36) },
        u: ->(token_owner_record) { token_owner_record.user_id.to_s(36) }
      }
end
```

### HTTP ルーターのルールエンジンへの統合

私たちは意図的により多くの情報をエンコードして、HTTP ルーターのルールを変更することによって、時間とともにルーティング基準を変更できるようにしています。HTTP ルーターは情報を変換する `transform` ステージを導入します。

```json
[
  {
    "match": [
      {
        "type": "header",
        "name": "private-token",
        "regex_value": "^glpat-(?<payload>.*)$"
      }
    ],
    "transform": [
      {
        "type": "base64-line-delimited",
        "input": "${payload}",
        "output": "decoded",
      }
    ],
    "action": "classify",
    "classify": {
      "type": "ROUTABLE_TOKEN",
      "routable_token": {
        "cell_id": "${decoded.c}",
        "organization_id": "${decoded.o}",
        "user_id": "${decoded.u}"
      }
    }
  }
]
```

ここでは明示的に `c`、`o`、`u` フィールドを渡します。フィールドに値がない場合は空文字列を渡します。意図的に `r` は渡しません。

#### HTTP ルーターの JWT サポート

`CI_JOB_TOKEN` のような一部のトークンは [JWT に変換](../../ci_job_token/index.md)されます。
[JWT](https://en.wikipedia.org/wiki/JSON_Web_Token) は、3 つの異なるドット区切りの base64 URL エンコードセクションから構成されます: JSON ヘッダー、JSON ペイロード、署名。

`CI_JOB_TOKEN` のサポートは次で追跡されています: [Phase 4.3: CI Job Token のルーティング可能なトークン](https://gitlab.com/groups/gitlab-org/-/epics/15281)。

次の例では、JWT ペイロードに `cell_id` または `organization_id` または `user_id` フィールドがあると仮定します。それらを `ROUTABLE_TOKEN` によってクエリされるように明示的に再マッピングします。

```json
[
  {
    "match": [
      {
        "type": "header",
        "name": "CI_JOB_JWT",
        "regex_value": "^(?<headers>\\w+)\\.(?<payload>\\w+)\\.(?<signature>\\w+)$"
      }
    ],
    "transform": [
      {
        "type": "base64-json",
        "input": "${payload}",
        "output": "decoded"
      }
    ],
    "action": "classify",
    "classify": {
      "type": "ROUTABLE_TOKEN",
      "routable_token": {
        "cell_id": "${decoded.cell_id}",
        "organization_id": "${decoded.organization_id}",
        "user_id": "${decoded.user_id}"
      }
    }
  }
]
```

##### JWT 署名の検証

JWT 署名チェックのサポートも追加できる可能性があります。ただし、これには HTTP ルーターが JWT シークレットを認識して署名を検証する必要があります。署名チェックはコストのかかる操作であるため、CPU コンピュートコストに大きな影響を与えます。

```json
[
  {
    "match": [
      {
        "type": "header",
        "name": "CI_JOB_JWT",
        "regex_value": "^(?<headers>\\w+)\\.(?<payload>\\w+)\\.(?<signature>\\w+)$"
      }
    ],
    "transform": [
      {
        "type": "jwt-signature",
        "input": "${headers}.${payload}",
        "output": "env.GITLAB_CI_JWT_PUBLIC_KEY"
      },
      {
        "type": "base64-json",
        "input": "${payload}",
        "output": "decoded"
      },
    ],
    "action": "classify",
    "classify": {
      "type": "ROUTABLE_TOKEN",
      "routable_token": {
        "cell_id": "${decoded.cell_id}",
        "organization_id": "${decoded.organization_id}",
        "user_id": "${decoded.user_id}"
      }
    }
  }
]
```

## 問題点

- [POST ボディ](https://docs.gitlab.com/ee/ci/jobs/ci_job_token.html#to-authenticate-a-rest-api-request)の一部として `CI Job Token` を渡すこと。
- [POST ボディ](https://docs.gitlab.com/ee/ci/triggers/#use-curl)の一部として `CI Trigger トークン` を渡すこと。
- 一部のトークンは `EE::Project#external_webhook_token` のように `TokensAuthenticatable` の代わりに独自の実装を使用しています。

## Q&A

1. アプリケーションには古い方法で生成された既存のトークンが多数あります。レガシートークンはどうなりますか？

- このドキュメントでは、トークンに有効期限が設定されていると仮定します。
- つまり、時間が経つにつれてほとんどのトークンはユーザーによってローテーションされます。
- 一部のトークンをルーティング可能にできない場合、それらは永久に Cell 1 に縛られます。
- そのような場合、Organization を Cell 2 に移行することは、Organization が使用するすべてのトークンを先にローテーションする必要があることを意味します。
  これにより、Organization はそのようなトークンのセルフローテーションを実行する必要があるかもしれません。

1. なぜ JWT を使用しないのか？

JWT は本当に一時的なトークンとして使用されることを意図しており、通常は時間制限のある操作に紐付けられています。長期間 JWT を保存することは強く推奨されません。JWT もユーザーフレンドリーではなく、OAuth2 のような IDP フレームワークのコンセプトで使用されるべきです。

1. 攻撃者が Cell ID または Organization ID を変更することがトークンのセキュリティに与える影響は？JWT に存在するものと同様の署名がないことの影響は？

- このプロポーザルは「トークンの使用方法」もデータベースへの保存方法も変更しません。変わるのはランダム文字列に追加の意味を持たせることだけです。
- `payload` をセキュリティ機能としては扱わず、ルーティング決定を行うための補助として扱います。
- アプリケーションはペイロードをデコードしないため、攻撃者がトークンのペイロードの Cell ID を変更しても、そのようなトークンはアプリケーションの観点からは無効のままです。
- アプリケーションは常にトークンをその意味を理解しようとせずに全体の文字列として扱う必要があります。
- 唯一の影響は、攻撃者が HTTP ルーターによるルーティング決定を強制することで、特定の Cell にリクエストを向けるかもしれないことです。
- HTTP ルーターはルーティング決定を行う目的のためにのみ、排他的にペイロードをデコードします。ルーティング決定は、ホスト名、URL パス、その他のパラメーターなど、他の要因に基づいて行われる場合もあります。
- ペイロードの信頼性を検証する能力はこの変更のゴールではありません。DoS 型の攻撃の場合、そのような攻撃を防ぐためにレート制限などの追加措置が必要です。

## 参考文献

- [トークンプレフィックスのドキュメント](https://docs.gitlab.com/ee/security/tokens/index.html#token-prefixes)
- [Rails でのルーティング可能なトークン生成の PoC](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/157440)
- [ルーティング可能なトークンの技術的プロポーザル](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/8527)
- （内部）GitLab が使用するさまざまな[トークン](https://docs.google.com/spreadsheets/d/1n54lCX2axsTIt8DZBRFj9p44s6YcFp-UechVEHEim8Y/)の Google スプレッドシート。
- [Phase 4](https://gitlab.com/groups/gitlab-org/-/epics/14510)。
