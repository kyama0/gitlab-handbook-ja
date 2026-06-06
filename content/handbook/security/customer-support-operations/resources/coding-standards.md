---
title: 'コーディング標準'
description: 'チームのコーディング標準に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/resources/coding-standards/
upstream_sha: 7b4218e2684ab0e2d919cef32fcfba84065bf46b
lastmod: 2026-06-05T08:51:52-05:00
translated_at: "2026-06-06T12:00:00Z"
translator: claude
stale: false
---


<sup>*[gitlab-com/support/support-ops/support-ops-project#1963](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/1963) を通じて導入されました*</sup>

このドキュメントは、GitLab Customer Support Operations チームが従うべきコーディング標準とベストプラクティスを定義します。これらのガイドラインを活用することで、私たちはチーム内の一貫性、保守性、シンプルさ、そしてより良いコラボレーションを確保します。私たちのプロジェクトへのすべてのコントリビューターは、特定の例外について合意がない限り、これらのガイドラインに従うことが期待されます。

## General Principles

私たちは [GitLab のコアバリュー](/handbook/values/) がすべてのコーディング上の意思決定を導くべきだと考えています。

- Collaboration
  - チームメイトと協力し、お互いのコードをレビューし、知識を共有します。
  - 常にフィードバックを受け入れ、それに基づいてコードを改善します。
  - あなたの貢献がチームの他のメンバーにとって読みやすく理解しやすいものであることを確認します。
- Results
  - コードのインパクトと有効性に重点を置きます。
  - 完璧なソリューションよりも動作するソリューションを優先します（ただし、品質を損なう近道は避けるようにします）。
- Efficiency
  - 明確で保守しやすいコードを書きます。
  - 機能を犠牲にすることなくシンプルさを追求します。
- Transparency
  - コードは理解しやすく、すべての人がアクセスできるものであるべきです。
  - 必要な場合には、前提、選択、設計上の決定を明確にドキュメント化します。
- Iteration
  - コードは柔軟で、リファクタリングしやすいものであるべきです。
  - 私たちは継続的な改善を目指しており、必要に応じてコードを更新または作り直すことを厭いません。

## Naming Conventions

- Variables
  - 変数の目的を明確に伝える説明的な名前を使用します。変数名が目的を明確に伝えていない場合は、それをよりよく説明するためにコードにコメントを追加します。
  - すべての変数名は snake case を使用します。
    - 例: `sum_of_pairings`, `gitlab_user`
- Constants
  - 定数の目的を明確に伝える説明的な名前を使用します。定数名が目的を明確に伝えていない場合は、それをよりよく説明するためにコードにコメントを追加します。
  - 定数は upper snake case で記述します。
    - 例: `MAX_RETRIES`, `DEFAULT_TIMEOUT`
- Functions and Methods
  - 関数名とメソッド名は、それらが実行するアクションを説明するものにします。関数／メソッド名が目的を明確に伝えていない場合は、それをよりよく説明するためにコードにコメントを追加します。
  - 関数名とメソッド名は snake case で記述します。
    - 例: `my_new_function`, `check_gitlab_user`
- Classes and Modules
  - クラスとモジュールは PascalCase で記述します。
    - 例: `AccountBlocked`, `SupportSuperFormProcessor`
- Filenames
  - すべてのファイル名は snake case を使用します。
    - 例: `process_account`, `compare_only`

## Code Formatting

- Indentation
  - 可能な限り、インデントレベルごとに 2 スペースを使用します。
    - 例:

      ```ruby
      def self.subscriptions
        @subscriptions ||= Readiness::GitLab::Namespaces.subscription(client, namespace)
      end
      ```

- Line length
  - コードの行は最大 80 〜 120 文字に保ちます（80 を目指し、最大は 120）。これにより読みやすさが確保され、ほとんどの環境にコードが快適に収まります。
- Blank lines
  - 空行を使って関数、クラス、論理的に関連するコードブロックを分けます。
  - メソッド定義の間には 1 行の空行を使用します。
- Spacing
  - 演算子（`+`、`<`、`=` など）の間には 1 つのスペースを使用します。

## Comments and Documentation

- Inline comments
  - インラインコメントは控えめに使用します。複雑または自明でないコードを明確にするためだけに使用します。大量のコメントが必要な場合、おそらくコードを必要以上に複雑にしています！
  - コメントは最新の状態に保ち、それが説明するコードと関連性のあるものにします。

## Code Complexity

- 深くネストされたコードは避けます。ネストが複雑になりすぎる場合は、ヘルパー関数や早期リターンを使うようにコードをリファクタリングします。
- 関数のサイズを制限します。各関数は明確で単一の責務を持ち、比較的小さく（20 行未満）するべきです。

## Testing

常に高いテストカバレッジを目指しましょう！迷ったときは、コードを徹底的にテストしましょう！

## Version control

- Commit messages
  - 行っている変更を詳細に記述します。
  - 取り組んでいる Issue と関連付けるためのテキストを追加します。
  - 例:

    ```plaintext
    Adding new attribute "title" to article object

    Relates to https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/1963
    ```

- Branches
  - ブランチの形式は `USERNAME-PROJECT-IID` の形式に従うべきです。
    ここで:
    - `USERNAME` はあなたの gitlab.com のユーザー名
    - `PROJECT` はプロジェクトのスラッグ
    - `IID` は Issue の IID
    - 例:
      - `jcolyer` が Issue `https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/1963` の作業のために作成するブランチの場合、ブランチ名は `jcolyer-support-ops-project-1963` とするべきです。

## Use semantic versioning

{{% alert title="Note" color="primary" %}}

- これは一般論です。バージョン管理の詳細については、取り組んでいる項目のドキュメントページを参照してください。

{{% /alert %}}

バージョン番号を使用する必要があるときは常に、セマンティックバージョニングの使用を目指すべきです。これは `MAJOR.MINOR.PATCH` の形式です。

バージョン番号を上げる際には、どの数値を上げるかを判断するために以下を使用します。

- 大規模なリファクタリングを行う場合は `MAJOR` を上げます。
- 機能を追加または削除する場合は `MINOR` を上げます。
- 小さな変更（文言の変更、バグ修正など）を行う場合は `PATCH` を上げます。

値を上げる際には、次のことを覚えておいてください。

- `MAJOR` を上げる場合、`MINOR` と `PATCH` の新しい値は 0 になります。
- `MINOR` を上げる場合、`PATCH` の新しい値は 0 になります（`MAJOR` は変更されません）。
- `PATCH` を上げる場合、`MAJOR` と `MINOR` の値は変更されません。

参考のために、いくつかの例を示します。

| 開始バージョン | `MAJOR` 更新 | `MINOR` 更新 | `PATCH` 更新 |
|------------------|----------------|----------------|----------------|
| `1.0.0`          | `2.0.0`        | `1.1.0`        | `1.0.1`        |
| `1.9.127`        | `2.0.0`        | `1.10.0`       | `1.9.128`      |
| `2.99.0`         | `3.0.0`        | `2.100.0`      | `2.99.1`       |
| `9.99.9`         | `10.0.0`       | `9.100.0`      | `9.99.10`      |

### Using semantic versioning when only two numeric values are allowed

2 つの数値しか許可されていないもの（`1.01` や `9.8` など）を扱う場合は、代わりに 2 番目の値に `MINOR` と `PATCH` の定義を組み合わせます。これにより、必要な `xx.yy` の形式になり、セマンティックバージョニングに近い形を維持できます。

したがって、バージョン番号を上げる際には、どの数値を上げるかを判断するために以下を使用します。

- 大規模なリファクタリングを行う場合は `xx` を上げます。
- 機能を追加または削除する場合、または小さな変更（文言の変更、バグ修正など）を行う場合は `yy` を上げます。

参考のために、いくつかの例を示します。

| 開始バージョン | `MAJOR` 更新 | `MINOR`/`PATCH` 更新 |
|------------------|----------------|------------------------|
| `1.0`            | `2.0`          | `1.1`                  |
| `1.9`            | `2.0`          | `1.10`                 |
| `2.99`           | `3.0`          | `2.100`                |
| `9.99`           | `10.0`         | `9.100`                |

## Error Handling

可能な限り、コードがエラーを適切に処理するようにしてください。これが不可能な場合は、エラーが問題の内容を明確に説明するようにしてください（さらに、それについてどう対処すべきかを伝えてくれれば加点です）。

## Performance Considerations

- コードが機能的で保守しやすくなった後に初めてパフォーマンスに注力します。早すぎる最適化は避けます。
- プロファイリングツールを使ってパフォーマンスへの影響を測定し、最適化する前にボトルネックを特定します。
- 常識を働かせて、私たちのツール群への API 呼び出しを減らします。
  - 例: Zendesk からすべてのチケットを 1 件ずつ手動で取得することもできますが、Readiness Gem が `list` メソッドを使ってこれを効率的に行ってくれるのに、そうする論理的な理由はありません。

## Security

- インジェクション攻撃（SQL インジェクション、XSS など）を防ぐために、すべての入力を検証します。
- パスワードやトークンなどを平文で保存しないでください。CI/CD 変数を使用します。

## Code Reviews

- すべてのコードはマージ前にピアレビューを受けなければなりません。レビューが徹底的で、品質、一貫性、セキュリティに対処していることを確認してください。
- 建設的なフィードバックを受け入れ、協力してコードを改善します。

## Language specific guidelines

これは現在、私たちの主要言語である ruby に焦点を当てています。これは生きたセクションであり、将来使用するかもしれない他の言語についても、より多くの内容を追加するべきです。

### Ruby

- 可能な限り、[rubocop](https://rubygems.org/gems/rubocop) リンターを通して実行したときにコードが問題を提示しないようにしてください。

## Examples to help you get started

### Writing a ruby script

ruby スクリプトを書くときは、次のように始めることをお勧めします。

<details>
<summary>クリックして展開</summary>

```ruby
#!/usr/bin/env ruby
# frozen_string_literal: true

require 'active_support'
require 'active_support/time'
require 'base64'
require 'erb'
require 'faraday'
require 'json'
require 'yaml'

class ApiResponseError < StandardError; end
class ApiAuthenticationError < ApiResponseError; end
class ApiForbiddenError < ApiResponseError; end
class ApiNotFoundError < ApiResponseError; end
class ApiRateLimitError < ApiResponseError; end
class ApiServerError < ApiResponseError; end
class SafeUpdateError < ApiResponseError; end

def debug
  ENV.fetch('DEBUG', false)
end

def sandbox?
  ENV.fetch('SANDBOX', false).to_s == 'true'
end

def max_retries
  @max_retries ||= ENV.fetch('MAX_RETRIES', 3).to_i
end

def base_retry_delay
  @base_retry_delay ||= ENV.fetch('BASE_RETRY_DELAY', 2).to_i
end

def request_timeout
  @request_timeout ||= ENV.fetch('REQUEST_TIMEOUT', 60).to_i
end

def open_timeout
  @open_timeout ||= ENV.fetch('OPEN_TIMEOUT', 15).to_i
end

def page_size
  @page_size ||= ENV.fetch('PAGE_SIZE', 100).to_i
end

def unexpected_response_message(response)
  body = response.body if response.respond_to?(:body) && !response.body.to_s.empty?
  "Unexpected response: HTTP #{response.status}#{" - #{body}" if body}"
end

def handle_response(response, allowed_statuses: [])
  return response if response.status.between?(200, 299)
  return response if allowed_statuses.include?(response.status)

  handle_error_status(response)
end

def handle_error_status(response)
  case response.status
  when 401 then raise ApiAuthenticationError, 'Authentication failed - check your credentials'
  when 403 then raise ApiForbiddenError, 'Access forbidden - insufficient permissions'
  when 404 then raise ApiNotFoundError, 'Resource not found'
  when 409 then raise SafeUpdateError, 'Safe update conflict'
  when 429 then handle_rate_limit(response)
  when 500..599 then raise ApiServerError, "Server error: HTTP #{response.status}"
  else raise ApiResponseError, unexpected_response_message(response)
  end
end

def handle_rate_limit(response)
  retry_after = response.headers['retry-after']&.to_i || 60
  raise ApiRateLimitError, "Rate limited - retry after #{retry_after}s"
end

def request_with_retry(client, method, url, params = {}, allowed_statuses: []) # rubocop:disable Metrics/MethodLength
  attempt = 0
  response = nil

  begin
    attempt += 1
    response = execute_request(client, method, url, params, allowed_statuses)
  rescue ApiRateLimitError, ApiServerError, Faraday::TimeoutError, Faraday::ConnectionFailed, Faraday::SSLError => e
    handle_retryable_error(e, attempt) && retry
  rescue SafeUpdateError => e
    raise SafeUpdateError, e
  rescue StandardError => e
    handle_fatal_error(e, response)
  end
end

def execute_request(client, method, url, params, allowed_statuses)
  response = make_request(client, method, url, params)
  handled_response = handle_response(response, allowed_statuses: allowed_statuses) # rubocop:disable Style/HashSyntax
  return nil if handled_response.nil?

  handle_body(response.body, response.headers['content-type'])
end

def handle_retryable_error(error, attempt)
  return handle_rate_limit_error(error, attempt) if error.is_a? ApiRateLimitError
  return retry_request(attempt, error.message) if error.is_a? ApiServerError
  return retry_request(attempt, "Timeout: #{error.message}") if error.is_a? Faraday::TimeoutError
  return retry_request(attempt, "Connection failed: #{error.message}") if error.is_a? Faraday::ConnectionFailed
  return retry_request(attempt, "SSL error: #{error.message}") if error.is_a? Faraday::SSLError

  true
end

def handle_rate_limit_error(error, attempt)
  if error.message.match(/retry after (\d+)s/)
    sleep_time = Regexp.last_match(1).to_i
    puts "⏳ Rate limited, waiting #{sleep_time}s..."
    sleep(sleep_time)
  end
  retry_request(attempt, error.message)
end

def handle_fatal_error(error, response)
  puts "❌ #{format_error_message(error)}"
  puts "[DEBUG] BODY: #{response&.body}" if debug && response
  print_backtrace(error) if should_print_backtrace?(error)
  exit 1
end

def format_error_message(error)
  case error
  when ApiResponseError
    "API Error: #{error.message}"
  else
    "Unexpected error: #{error.message}"
  end
end

NON_BACKTRACE_ERRORS = [
  ArgumentError,
  ApiAuthenticationError,
  ApiForbiddenError,
  ApiNotFoundError,
  ApiResponseError
].freeze

def should_print_backtrace?(error)
  NON_BACKTRACE_ERRORS.none? { |error_class| error.is_a?(error_class) }
end

def print_backtrace(error)
  error.backtrace.each { |line| puts "  #{line}" }
end

def handle_body(body, content_type = nil)
  return body if body.nil? || body.empty?

  if content_type&.include?('application/json') || content_type.nil?
    JSON.parse(body)
  else
    body
  end
rescue JSON::ParserError
  body
end

def make_request(client, method, url, params)
  case method.to_sym
  when :get, :delete
    client.public_send(method.to_sym, url, params)
  when :post, :put, :patch
    client.public_send(method.to_sym, url) do |r|
      r.body = determine_body_type(client, params)
    end
  else
    raise ArgumentError, "Unsupported HTTP method: #{method}"
  end
end

def determine_body_type(client, params)
  return params if params.is_a?(String)
  return '' if params.nil?

  content_type = client.headers['Content-Type']&.downcase
  return URI.encode_www_form(params) if content_type&.include?('application/x-www-form-urlencoded')

  params.to_json
end

def retry_request(attempt, error_msg)
  if attempt < max_retries
    delay = base_retry_delay * (2**(attempt - 1))
    sleep(delay)
    true
  else
    puts "❌ Failed after #{max_retries} attempts: #{error_msg}"
    exit 1
  end
end

def extract_next_url(next_url)
  return nil if next_url.nil? || next_url.empty?

  uri = URI.parse(next_url)
  relative_url = uri.path
  relative_url += "?#{uri.query}" if uri.query
  relative_url
rescue => e # rubocop:disable Style/RescueStandardError
  puts "❌ Invalid pagination URL: #{e.message}"
  exit 1
end

def safe_update(client, method, url, &update_block)
  request_with_retry(client, method, url, update_block.call)
rescue SafeUpdateError
  print 'update conflict, waiting 2 seconds and retrying...'
  sleep 2
  retry
end
```

</details>

これにより、すぐ次の行からコーディングを始められ、作業を進めるための良い出発点を得られます。

#### Making a request

[出発点となるコード](#writing-a-ruby-script)を使用して、次のように外部リクエストを行うことができます。

<details>

<summary>シンプルな GET リクエスト</summary>

```ruby
page_data = request_with_retry(client_variable, :get, url_to_use)
```

</details>
<details>
<summary>ペイロードを伴うリクエスト</summary>

```ruby
payload = {
  'text' => 'Jason is awesome',
  'reason' => 'Cause I said so'
}
page_data = request_with_retry(client_variable, :post, url_to_use, payload)
```

</details>
<details>
<summary>safe_update を使ったペイロードを伴うリクエスト</summary>

```ruby
def update_object
  {
    'subject' => 'New subject',
    'updated_stamp' => DateTime.now.utc.iso8601,
    'safe_update' => true
  }
end

page_data = safe_update(client_variable, :put, url_to_use) { update_object }
```

</details>
<details>
<summary>404 レスポンスを許可するシンプルな GET リクエスト</summary>

```ruby
page_data = request_with_retry(client_variable, :get, url_to_use, allow404: true)
```

</details>

より完全な例として、ここでは Zendesk インスタンスのすべての automation を取得するコードを示します。

<details>
<summary>クリックして展開</summary>

```ruby
print 'Fetching Zendesk automations'

@automations = []
url = "api/v2/automations?page[size]=#{page_size}"
loop do
  print '.'
  page_data = request_with_retry(zendesk_client, :get, url)
  @automations += page_data['automations']
  break unless page_data['meta']['has_more']

  url = extract_next_url(page_data.dig('links', 'next'))
end

puts 'done! ✅ Successfully fetched Zendesk automations!'
```

</details>

### Connecting to Zendesk via ruby

Zendesk に接続する必要があるときは、[出発点](#writing-a-ruby-script)を使用し、次の内容を追加します。

<details>
<summary>Zendesk Global の場合</summary>

```ruby
def base_url
  sandbox? ? 'https://gitlab1707170878.zendesk.com' : 'https://gitlab.zendesk.com'
end

def zendesk_secret
  return ENV.fetch('SB_ZD_SECRET') if sandbox?

  ENV.fetch('ZD_SECRET')
end

def zendesk_client_name
  return ENV.fetch('SB_ZD_CLIENT_NAME') if sandbox?

  ENV.fetch('ZD_CLIENT_NAME')
end

def zendesk_bearer_token
  @zendesk_bearer_token ||= generate_zendesk_bearer_token
end

def generate_zendesk_bearer_token
  client = Faraday.new(base_url) do |f|
    f.options.timeout = request_timeout
    f.options.open_timeout = open_timeout
    f.headers['Content-Type'] = 'application/json'
  end
  url = 'oauth/tokens'
  response = request_with_retry(client, :post, url, zendesk_bearer_token_payload)
  response['access_token']
end

def zendesk_bearer_token_payload
  {
    'client_id' => zendesk_client_name,
    'client_secret' => zendesk_secret,
    'grant_type' => 'client_credentials',
    'scope' => 'read write'
  }
end

def setup_zendesk_client
  Faraday.new(base_url) do |f|
    f.options.timeout = request_timeout
    f.options.open_timeout = open_timeout
    f.headers['Content-Type'] = 'application/json'
    f.headers['Authorization'] = "Bearer #{zendesk_bearer_token}"
  end
end

def zendesk_client
  @zendesk_client ||= setup_zendesk_client
end

def zendesk_oauth_client
  oauth_clients = []
  url = "api/v2/oauth/clients?page[size]=#{page_size}"
  loop do
    page_data = request_with_retry(zendesk_client, :get, url)
    oauth_clients += page_data['clients']
    break unless page_data['meta']['has_more']

    url = extract_next_url(page_data.dig('links', 'next'))
  end
  oauth_clients.detect { |o| o['identifier'] == zendesk_client_name }
end

def revoke_token!
  url = "api/v2/oauth/tokens?client_id=#{zendesk_oauth_client['id']}"
  tokens = request_with_retry(zendesk_client, :get, url)
  token = tokens['tokens'].detect { |t| t['token'] == "...#{zendesk_bearer_token[-10..]}" }
  return if token.nil?

  request_with_retry(zendesk_client, :delete, "api/v2/oauth/tokens/#{token['id']}")
end

def find_in_collection(collection, attribute, value, collection_name)
  print "[DEBUG] Locating #{collection_name} from #{value}..." if debug

  item = collection.detect { |obj| obj[attribute].to_s.downcase == value.to_s.downcase }
  if item.nil?
    puts "❌ Unable to locate matching #{collection_name}" if debug
    raise "Cannot find #{collection_name} #{value}"
  end

  puts "done! ✅ Successfully determined #{collection_name}!" if debug
  item
end
```

</details>
<details>
<summary>Zendesk US Government の場合</summary>

```ruby
def base_url
  sandbox? ? 'https://gitlabfederalsupport1585318082.zendesk.com' : 'https://gitlab-federal-support.zendesk.com'
end

def zendesk_secret
  return ENV.fetch('US_SB_ZD_SECRET') if sandbox?

  ENV.fetch('US_ZD_SECRET')
end

def zendesk_client_name
  return ENV.fetch('US_SB_ZD_CLIENT_NAME') if sandbox?

  ENV.fetch('US_ZD_CLIENT_NAME')
end

def zendesk_bearer_token
  @zendesk_bearer_token ||= generate_zendesk_bearer_token
end

def generate_zendesk_bearer_token
  client = Faraday.new(base_url) do |f|
    f.options.timeout = request_timeout
    f.options.open_timeout = open_timeout
    f.headers['Content-Type'] = 'application/json'
  end
  url = 'oauth/tokens'
  response = request_with_retry(client, :post, url, zendesk_bearer_token_payload)
  response['access_token']
end

def zendesk_bearer_token_payload
  {
    'client_id' => zendesk_client_name,
    'client_secret' => zendesk_secret,
    'grant_type' => 'client_credentials',
    'scope' => 'read write'
  }
end

def setup_zendesk_client
  Faraday.new(base_url) do |f|
    f.options.timeout = request_timeout
    f.options.open_timeout = open_timeout
    f.headers['Content-Type'] = 'application/json'
    f.headers['Authorization'] = "Bearer #{zendesk_bearer_token}"
  end
end

def zendesk_client
  @zendesk_client ||= setup_zendesk_client
end

def zendesk_oauth_client
  oauth_clients = []
  url = "api/v2/oauth/clients?page[size]=#{page_size}"
  loop do
    page_data = request_with_retry(zendesk_client, :get, url)
    oauth_clients += page_data['clients']
    break unless page_data['meta']['has_more']

    url = extract_next_url(page_data.dig('links', 'next'))
  end
  oauth_clients.detect { |o| o['identifier'] == zendesk_client_name }
end

def revoke_token!
  url = "api/v2/oauth/tokens?client_id=#{zendesk_oauth_client['id']}"
  tokens = request_with_retry(zendesk_client, :get, url)
  token = tokens['tokens'].detect { |t| t['token'] == "...#{zendesk_bearer_token[-10..]}" }
  return if token.nil?

  request_with_retry(zendesk_client, :delete, "api/v2/oauth/tokens/#{token['id']}")
end

def find_in_collection(collection, attribute, value, collection_name)
  print "[DEBUG] Locating #{collection_name} from #{value}..." if debug

  item = collection.detect { |obj| obj[attribute].to_s.downcase == value.to_s.downcase }
  if item.nil?
    puts "❌ Unable to locate matching #{collection_name}" if debug
    raise "Cannot find #{collection_name} #{value}"
  end

  puts "done! ✅ Successfully determined #{collection_name}!" if debug
  item
end
```

</details>

スクリプトの最後（または API 接続がもはや不要になったとき）に、必ず関数 `revoke_token!` を実行するようにしてください。

### Connecting to GitLab.com via ruby

GitLab に接続する必要があるときは、[出発点](#writing-a-ruby-script)を使用し、次の内容を追加します。

<details>
<summary>クリックして展開</summary>

```ruby
def gitlab_token
  ENV.fetch('GL_TOKEN')
end

def setup_gitlab_client
  Faraday.new('https://gitlab.com') do |f|
    f.options.timeout = request_timeout
    f.options.open_timeout = open_timeout
    f.headers['Content-Type'] = 'application/json'
    f.headers['Authorization'] = "Bearer #{gitlab_token}"
  end
end

def gitlab_client
  @gitlab_client ||= setup_gitlab_client
end
```

</details>

### Connecting to Slack via ruby

Slack に接続する必要があるときは、[出発点](#writing-a-ruby-script)を使用し、次の内容を追加します。

<details>
<summary>クリックして展開</summary>

```ruby
def slack_client
  @slack_client ||= Faraday.new(ENV.fetch('SLACK_URL')) do |f|
    f.options.timeout = request_timeout
    f.options.open_timeout = open_timeout
    f.headers['Content-Type'] = 'application/json'
  end
end
```

</details>

そして、これを使ってリクエストを行うことができます。その一例:

<details>
<summary>incoming webhook を使って Slack へ投稿する</summary>

```ruby
payload = { 'text' => 'I am a slack post!' }
request_with_retry(slack_client, :post, '', payload)
```

</details>

### Connecting to Salesforce via ruby

Salesforce に接続する必要があるときは、[出発点](#writing-a-ruby-script)を使用し、次の内容を追加します。

<details>
<summary>クリックして展開</summary>

```ruby
def base_salesforce_url
  'https://login.salesforce.com'
end

def instance_url
  'https://gitlab.my.salesforce.com'
end

def salesforce_client_id
  ENV.fetch('SFDC_CLIENTID')
end

def salesforce_client_secret
  ENV.fetch('SFDC_CLIENTSECRET')
end

def salesforce_username
  ENV.fetch('SFDC_USERNAME')
end

def salesforce_password
  ENV.fetch('SFDC_PASSWORD')
end

def salesforce_security_token
  ENV.fetch('SFDC_SECURITYTOKEN')
end

def initial_connection
  @initial_connection ||= Faraday.new(base_salesforce_url) do |c|
    c.options.timeout = request_timeout
    c.options.open_timeout = open_timeout
    c.headers['Accept'] = 'application/json'
    c.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    c.request :url_encoded
  end
end

def bearer_token
  @bearer_token ||= generate_token_with_retry
end

def salesforce_client
  @salesforce_client ||= Faraday.new(instance_url) do |c|
    c.options.timeout = request_timeout
    c.options.open_timeout = open_timeout
    c.headers['Content-Type'] = 'application/json'
    c.headers['Authorization'] = "Bearer #{bearer_token}"
  end
end

def generate_token_with_retry
  data = {
    'grant_type' => 'password',
    'client_id' => salesforce_client_id,
    'client_secret' => salesforce_client_secret,
    'username' => salesforce_username,
    'password' => "#{salesforce_password}#{salesforce_security_token}"
  }
  url = 'services/oauth2/token'
  page_data = request_with_retry(initial_connection, :post, url, data)
  page_data['access_token']
end
```

</details>

そして、これを使ってリクエストを行うことができます。いくつかの例:

<details>
<summary>SOQL クエリを実行する</summary>

```ruby
encoded_query = URI.encode_www_form_component("SELECT Name FROM Account WHERE Id = 'ABC123'")
url = "services/data/v58.0/query/?q=#{encoded_query}"
page_data = request_with_retry(salesforce_client, :get, url)
```

</details>
<details>
<summary>Salesforce で Case を作成する</summary>

```ruby
payload = {
  'AccountId' => 'ABC123',
  'Description' => 'I am a case',
  'OwnerId' => 'DEF456',
  'RecordTypeId' => 'GHI321',
  'Subject' => 'New case!'
}
case_id = 'XYZ789'
url = "services/data/v58.0/sobjects/Case/#{case_id}"
page_data = request_with_retry(salesforce_client, :post, url, payload)
```

</details>

### Connecting to Mailgun via ruby

Mailgun に接続する必要があるときは、[出発点](#writing-a-ruby-script)を使用し、次の内容を追加します。

<details>
<summary>クリックして展開</summary>

```ruby
def mailgun_token
  ENV.fetch('MAILGUN_KEY')
end

def setup_mailgun_client
  Faraday.new("https://api:#{mailgun_token}@api.mailgun.net") do |f|
    f.options.timeout = request_timeout
    f.options.open_timeout = open_timeout
    f.request :multipart
    f.request :url_encoded
  end
end

def mailgun_client
  @mailgun_client ||= setup_mailgun_client
end
```

</details>

そして、これを使ってリクエストを行うことができます。いくつかの例:

<details>
<summary>メールを送信する</summary>

```ruby
payload = {
  'from' => 'Bob Smith <bsmith@example.com>',
  'to' => 'jsmith@example.com',
  'subject' => 'Awesome boats',
  'text' => "Hey Jenny\n\nHere is a list of awesome boats!"
}
page_data = request_with_retry(mailgun_client, :post, url, payload)
```

</details>

### Connecting to Google via ruby

#### Google Sheets

Google Sheets に接続する必要があるときは、[出発点](#writing-a-ruby-script)を使用し、次の内容を追加します。

<details>
<summary>クリックして展開</summary>

```ruby
def initial_connection
  @initial_connection ||= Faraday.new('https://oauth2.googleapis.com/token') do |c|
    c.options.timeout = request_timeout
    c.options.open_timeout = open_timeout
    c.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  end
end

def bearer_token
  @bearer_token ||= generate_token_with_retry
end

def google_client
  @google_client ||= Faraday.new('https://sheets.googleapis.com/v4') do |f|
    f.options.timeout = request_timeout
    f.options.open_timeout = open_timeout
    f.headers['Content-Type'] = 'application/json'
    f.headers['Authorization'] = "Bearer #{bearer_token}"
  end
end

def generate_token_with_retry
  signature_input = "#{jwt_encoded_header}.#{jwt_encoded_claim_set}"
  private_key = OpenSSL::PKey::RSA.new(@service_account['private_key'])
  signature = private_key.sign(OpenSSL::Digest.new('SHA256'), signature_input)
  encoded_signature = Base64.urlsafe_encode64(signature, padding: false)
  data = {
    'grant_type' => 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    'assertion' => "#{signature_input}.#{encoded_signature}"
  }
  page_data = request_with_retry(initial_connection, :post, '', data)
  page_data['access_token']
end

def jwt_encoded_header
  Base64.urlsafe_encode64({ alg: 'RS256', typ: 'JWT' }.to_json, padding: false)
end

def jwt_encoded_claim_set
  Base64.urlsafe_encode64(claim_set.to_json, padding: false)
end

def claim_set
  now = Time.now.to_i
  {
    iss: @service_account['client_email'],
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  }
end

@service_account = JSON.parse(File.read('PATH_TO_CREDENTIALS_FILE'))
```

</details>

そして、これを使ってリクエストを行うことができます。いくつかの例:

<details>
<summary>Google Sheet のエントリを一覧表示する</summary>

```ruby
spreadsheet_id = 'ID_TO_USE'
range = "'NAME_OF_SHEET'!A500"
url = "spreadsheets/#{spreadsheet_id}/values/#{ERB::Util.url_encode(range)}"
page_data = request_with_retry(google_client, :get, url)
```

</details>
<details>
<summary>Google Sheet にエントリを追加する</summary>

```ruby
spreadsheet_id = 'ID_TO_USE'
range = "'NAME_OF_SHEET'!A500"
data = {
  'values' => [
    [ 'Jenny', '867-5309', 'jenny@example.com' ]
  ]
}
url = "spreadsheets/#{spreadsheet_id}/values/#{ERB::Util.url_encode(range)}?valueInputOption=RAW"
request_with_retry(google_client, :put, url, data)
```

</details>
<details>
<summary>Google Sheet のエントリをクリアする</summary>

```ruby
spreadsheet_id = 'ID_TO_USE'
range = "'NAME_OF_SHEET'"
url = "spreadsheets/#{spreadsheet_id}/values/#{ERB::Util.url_encode(range)}:clear"
request_with_retry(google_client, :post, url)
```

</details>

#### Google Calendars

Google Calendars に接続する必要があるときは、[出発点](#writing-a-ruby-script)を使用し、次の内容を追加します。

<details>
<summary>クリックして展開</summary>

```ruby
def initial_connection
  @initial_connection ||= Faraday.new('https://oauth2.googleapis.com/token') do |c|
    c.options.timeout = request_timeout
    c.options.open_timeout = open_timeout
    c.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  end
end

def bearer_token
  @bearer_token ||= generate_token_with_retry
end

def google_client
  @google_client ||= Faraday.new('https://www.googleapis.com/calendar/v3') do |f|
    f.options.timeout = request_timeout
    f.options.open_timeout = open_timeout
    f.headers['Content-Type'] = 'application/json'
    f.headers['Authorization'] = "Bearer #{bearer_token}"
  end
end

def generate_token_with_retry
  signature_input = "#{jwt_encoded_header}.#{jwt_encoded_claim_set}"
  private_key = OpenSSL::PKey::RSA.new(@service_account['private_key'])
  signature = private_key.sign(OpenSSL::Digest.new('SHA256'), signature_input)
  encoded_signature = Base64.urlsafe_encode64(signature, padding: false)
  data = {
    'grant_type' => 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    'assertion' => "#{signature_input}.#{encoded_signature}"
  }
  page_data = request_with_retry(initial_connection, :post, '', data)
  page_data['access_token']
end

def jwt_encoded_header
  Base64.urlsafe_encode64({ alg: 'RS256', typ: 'JWT' }.to_json, padding: false)
end

def jwt_encoded_claim_set
  Base64.urlsafe_encode64(claim_set.to_json, padding: false)
end

def claim_set
  now = Time.now.to_i
  {
    iss: @service_account['client_email'],
    scope: 'https://www.googleapis.com/auth/calendar',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  }
end

@service_account = JSON.parse(File.read('PATH_TO_CREDENTIALS_FILE'))
```

</details>

そして、これを使ってリクエストを行うことができます。いくつかの例:

<details>
<summary>カレンダー上のイベントを一覧表示する</summary>

```ruby
Time.zone = TZInfo::Timezone.get('America/Los_Angeles')
params = [
  'maxResults=100',
  'orderBy=startTime',
  'singleEvents=true',
  "timeMin=#{Time.zone.now.beginning_of_day.iso8601}",
  "timeMax=#{Time.zone.now.end_of_day.iso8601}",
  "timeZone=#{Time.zone.name}"
]
calendar_id = 'ID_TO_USE'
url = "calendars/#{calendar_id}/events?#{params.join('&')}"
page_data = request_with_retry(google_client, :get, url)
```

</details>
<details>
<summary>カレンダーにイベントを作成する</summary>

```ruby
Time.zone = TZInfo::Timezone.get('America/Los_Angeles')
payload = {
  'description' => 'Meeting between Alice and Bob',
  'start' => {
    'dateTime' => '2025-12-18T08:00:00-07:00',
    'timeZone' => 'America/Los_Angeles'
  },
  'end' => {
    'dateTime' => '2025-12-18T08:25:00-07:00',
    'timeZone' => 'America/Los_Angeles'
  },
  'location' => 'zoom_link_goes_here'
}
calendar_id = 'ID_TO_USE'
url = "calendars/#{calendar_id}/events"
request_with_retry(google_client, :post, url, payload)
```

</details>
