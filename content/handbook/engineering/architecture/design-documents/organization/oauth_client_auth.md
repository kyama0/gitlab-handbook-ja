---
title: Organizations - 認証 - OpenID/OAuth クライアント
status: proposed
creation-date: "2025-08-12"
authors: [ "@skundapur" ]
coaches: [ "@ayufan" ]
dris: [ ]
owning-stage: "~devops::tenant scale"
participating-stages: ["~devops::software_supply_chain_security"]
# Hides this page in the left sidebar. Recommended so we don't pollute it.
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/oauth_client_auth/
upstream_sha: 171236827c9a366363160b625ff53ec19c521940
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-18T16:41:45+13:00"
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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/skundapur" class="text-blue-600 hover:underline">@skundapur</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ayufan" class="text-blue-600 hover:underline">@ayufan</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::tenant scale</span></td>
<td class="px-3 py-2 border border-gray-300">2025-08-12</td>
</tr>
</tbody>
</table>
</div>


## 概要

この設計では、GitLab が OpenID/OAuth クライアントとして動作する認証フローが Organization とどのように機能するかを詳述します。

## 動機

[Cells アーキテクチャ](../cells/index.md) と [Organizations](../index.md) の導入により、インスタンスレベルで機能するすべての機能を新しいアーキテクチャと互換性を持たせるように適応させる必要があります。
認証はインスタンス全体で機能するいくつかのフローが存在するため、重要な影響を受ける分野です。

この提案の目的は、GitLab が OpenID/OAuth クライアントとして機能するフローの詳細を提供することです。

### ゴール

- Cells と Organizations と連携した GitLab が OpenID/OAuth クライアントとして機能するフローの定義。
- リクエストのルーティングがどのように機能するかの仕様。
- 顧客への破壊的変更なしの後方互換性の確保。

### 現在の状態

Gitlab.com は現在 4 つの OAuth プロバイダー（Google、Github、Bitbucket、Salesforce）でのログインをサポートしており、
[セルフマネージド GitLab](https://docs.gitlab.com/integration/omniauth/) は
[OmniAuth](https://github.com/omniauth/omniauth) をベースとして、さらに多くのプロバイダーをサポートしています。

{{% details summary="現在の OAuth クライアントフロー - シーケンス図" %}}
~~~mermaid
sequenceDiagram
    participant User
    participant Browser
    participant GitLab as GitLab Rails
    participant DB as GitLab Postgres Database
    participant Google as Google OAuth Provider

    Note over User, Google: OpenID Connect Authorization Code Flow with Google as the OpenID provider

    User->>Browser: Navigate to GitLab Login page
    Browser->>GitLab: Request GitLab Login Page
    GitLab->>Browser: Present GitLab Login page
    Browser->>User: Display GitLab Login page

    Note over User, Google: User chooses Login with Google
    User->>Browser: Click on Login with Google
    Browser->>GitLab: Request Login with Google
    note right of Browser: POST https://gitlab.com/users/auth/google_oauth2
    GitLab->>GitLab: Generate OAuth authorization request
    Note right of GitLab: Omniauth builds authorization URL with:<br/>• client_id<br/>• response_type=code<br/>• scope=profile email<br/>• redirect_uri=/auth/google_oauth2/callback<br/>• state (CSRF protection)<br/>• access_type=offline (for refresh token)
    GitLab->>Browser: Redirect to Google authorization endpoint
    Note right of GitLab: HTTP 302 to Google OAuth URL<br/>https://accounts.google.com/oauth/authorize<br/>?client_id=...&scope=profile+email&response_type=code<br/>&redirect_uri=...&state=...&access_type=offline
    Browser->>Google: Request Google authorization endpoint
    Google->>Google: Validate authorization request
    Note left of Google: • Verify client_id<br/>• Validate redirect_uri against registered URIs<br/>• Check requested scopes<br/>• Validate state parameter format
    Google->>Google: Authenticate user, check for Consent
    Google->>Browser: Redirect to GitLab with authorization code
    Browser->>GitLab: Submit authorization code to GitLab
    Note right of Browser: GET /auth/google_oauth2/callback<br/>?code=AUTH_CODE&state=STATE_VALUE<br/>(NO user data available yet)
    GitLab->>GitLab: Validate request
    GitLab->>Google: Exchange code for access token
    Google->>GitLab: Return access token
    GitLab->>Google: Get user profile information
    Google->>GitLab: Validate access token and return user profile data

    Note over GitLab, DB: User Provisioning & Session Creation

    GitLab->>GitLab: Create Omniauth auth hash
    Note right of GitLab: Build standardized auth hash:<br/>• provider: "google_oauth2"<br/>• uid: "google-user-id-123"<br/>• info: {name, email, image}<br/>• credentials: {token, expires_at}<br/>• extra: {raw_info} - handled by OmniAuth
    GitLab->>DB: Lookup user by email or identity in the `identities` table
    alt User exists without linked Google identity
        GitLab->>DB: Get user from the users table
        GitLab->>DB: Link user to Google identity - Insert into identities
    else User does not exist
        GitLab->>DB: Insert into users
        GitLab->>DB: Insert into identities
    end
    GitLab->>GitLab: Create Rails session
    GitLab->>Browser: Redirect to intended destination
    Note right of GitLab: HTTP 302 to originally requested resource<br/>or default dashboard
~~~
{{% /details %}}

## 提案

グローバル IAM Auth サービスが OAuth クライアントフローをプロバイダーと処理し、ID トークンが利用可能になると、正しい Cell の GitLab Rails にコールを転送します。ユーザーが属する Cell がこのリクエストを ID トークンとともに処理し、ユーザーの ID をアップサートし、Rails セッションを確立します。

**主要な変更点:**

- 「...でログイン」リクエストはすべて IAM サービスにルーティングされます。
- IAM Auth サービスがプロバイダーとの OAuth フロー全体を処理します。
- ID トークンを介してユーザー情報が利用可能になると、IAM サービスが適切な Cell に転送します。
- ユーザーが属する Cell がこのリクエストを処理し、ユーザーの ID をアップサートして Rails セッションを確立します。

### 提案されたフロー - シーケンス図

{{% details summary="GitLab での Google ログイン - シーケンス図" %}}
~~~mermaid
sequenceDiagram
    participant Browser as User/Browser
    participant Router as HTTP Router
    participant Cell0 as First Cell
    participant IAM_OAuth as IAM Auth Service
    participant Google as Google OAuth Provider
    participant TS as Topology Service
    participant Cell1 as User Owning Cell

    Note over Browser, Cell1: GitLab as OAuth Client - Login with Google as OAuth Provider

    Browser->>Router: Request GitLab Login page
    Router->>Cell0: Request GitLab Login page
    Cell0->>Browser: Present login page with OAuth provider options
    Browser->>Browser: Click on "Login with Google"
    Browser->>Router: Request Login with Google
    note right of Browser: GET /users/auth/google_oauth2
    Router->>IAM_OAuth: Forward OAuth client request to IAM Service
    IAM_OAuth->>IAM_OAuth: Generate OAuth authorization request for Google
    Note right of IAM_OAuth: Build authorization URL with:<br/>• client_id (GitLab's Google OAuth app)<br/>• response_type=code<br/>• scope=openid profile email<br/>• redirect_uri=/auth/google_oauth2/callback<br/>• state (CSRF protection)
    IAM_OAuth->>Browser: Redirect to Google authorization endpoint
    Note right of IAM_OAuth: HTTP 302 to Google OAuth URL<br/>https://accounts.google.com/oauth/authorize<br/>?client_id=...&scope=openid+profile+email<br/>&response_type=code&redirect_uri=...&state=...
    Browser->>Google: Request Google authorization endpoint
    Google->>Google: Validate authorization request
    Note left of Google: • Verify client_id<br/>• Validate redirect_uri<br/>• Check requested scopes
    Google->>Google: Authenticate user and check consent
    Google->>Browser: Redirect to GitLab callback with authorization code
    Browser->>Router: Submit authorization code to GitLab callback
    Note right of Browser: GET /auth/google_oauth2/callback<br/>?code=AUTH_CODE&state=STATE_VALUE
    Router->>IAM_OAuth: Forward callback request to IAM Service
    IAM_OAuth->>IAM_OAuth: Validate state parameter
    IAM_OAuth->>Google: Exchange authorization code for tokens
    Note right of IAM_OAuth: POST /token<br/>grant_type=authorization_code<br/>code=AUTH_CODE&client_id=...&client_secret=...
    Google->>IAM_OAuth: Return access token and ID token
    IAM_OAuth->>Google: Get user profile information
    Google->>IAM_OAuth: Return user profile data (email, name, etc.)
    IAM_OAuth->>IAM_OAuth: Extract identity information from ID token and profile
    IAM_OAuth->>TS: Look up user's organization by email
    TS->>IAM_OAuth: Return organization routing information

    Note over Browser, Cell1: Forward to user's owning cell
    IAM_OAuth->>Browser: Forward request to OAuth callback endpoint on cell
    note left of IAM_OAuth: Form with POST /o/{org-path}/oauth/callback<br/>with signed payload containing:<br/>email, external_uid, provider, name, redirect destination
    Browser->>Router: POST to organization-specific callback endpoint
    Router->>Cell1: POST to organization-specific callback endpoint
    rect rgb(255, 255, 153)
      note right of Router: Route based on org-path
    end

    Note over Cell1: User provisioning and session creation
    Cell1->>Cell1: Verify signed payload from IAM Service
    Cell1->>Cell1: Extract user attributes (email, external_uid, provider)
    Cell1->>Cell1: Look up user by email or external identity
    alt User exists with linked Google identity
        Cell1->>Cell1: Get existing user and update attributes if needed
    else User exists without linked Google identity
        Cell1->>Cell1: Link user to Google identity
    else User does not exist
        Cell1->>Cell1: Create new user and identity link
    end
    Cell1->>Cell1: Create Rails session for user
    Note left of Cell1: HTTP 302 to originally requested resource<br/>or default dashboard
    Cell1->>Browser: Redirect to intended destination
~~~
{{% /details %}}

### 代替フロー 1

実装全体を GitLab Rails に留めるために、ユーザーがメールアドレスを入力した後に「...でログイン」オプションを表示する新しい多段階認証システムを活用することで、OAuth クライアントフローを適応させることができます。
ただし、これは Slack などの他のプロバイダーと比較して、ユーザー体験が若干低下することを意味します。

**主要な変更点:**

- GitLab の「ステップ 1」ログインページはメール入力フィールドのみを表示
- ユーザーはメールを入力後に Organization 固有のログインページにリダイレクトされ、プロバイダーでのログインを選択できる
- ユーザーが属する Cell が OAuth フロー全体を処理する
- Organization ID は OAuth 認証リクエストの一部として state パラメータに埋め込まれる
- ルーターが state パラメータをデコードして、コールバックリクエストを正しい Cell にルーティングする
- このユーザー体験が許容できるかどうかの判断は、プロダクトと合わせて行う必要がある

#### 提案された代替フロー - シーケンス図

{{% details summary="メール入力後の Google でのログイン" %}}
~~~mermaid
sequenceDiagram
    participant Browser as User/Browser
    participant Router as HTTP Router
    participant Cell0 as Legacy Cell
    participant TS as Topology Service
    participant Cell1 as User Owning Cell
    participant DB as GitLab Postgres Database
    participant Google as Google OAuth Provider

    Note over Browser, Google: OpenID Connect Authorization Code Flow with Google as the OpenID provider
    Note over Browser, TS: User navigates to global GitLab Login page

    Browser->>Router: Request GitLab Login page
    Router->>Cell0: Request GitLab Login page
    Cell0->>Router: Present email input page without OAuth login options
    Router->>Browser: Display email input page
    Browser->>Router: Enter email
    Router->>Cell0: Submit email
    Cell0->>TS: Classify email
    TS->>Cell0: Org info for email
    Cell0->>Router: Redirect to org-specific GitLab Login page
    note right of Router: Pass email as query param in URL
    Router->>Browser: Redirect to org-specific GitLab Login page

    Note over Browser, Google: User navigates to org-specific GitLab Login page

    Browser->>Router: Request org-specific GitLab Login page
    Router->>Cell1: Request org-specific GitLab Login page
    rect rgb(255, 255, 153)
      note right of Router: Routing based on org-path in URL
    end
    Cell1->>Router: Present org-specific GitLab Login page with email pre-filled
    Router->>Browser: Display org-specific GitLab Login page with email pre-filled

    Note over Browser, Google: User chooses Login with Google
    Browser->>Browser: Click on Login with Google
    Browser->>Router: Request Login with Google
    note right of Browser: POST https://gitlab.com/o/org-path/users/auth/google_oauth2?login_hint=...
    Router->>Cell1: Request Login with Google
    rect rgb(255, 255, 153)
      note right of Router: Routing based on org-path in URL
    end
    Cell1->>Cell1: Generate OAuth authorization request
    Note right of Cell1: Omniauth builds authorization URL with:<br/>• client_id<br/>• response_type=code<br/>• scope=profile email<br/>• redirect_uri=o/org-path/auth/google_oauth2/callback<br/>• state (CSRF protection)<br/>• login_hint=email
    Note right of Cell1: Add org-id to the state parameter
    Cell1->>Browser: Redirect to Google authorization endpoint
    Note right of Cell1: HTTP 302 to Google OAuth URL<br/>https://accounts.google.com/oauth/authorize<br/>?client_id=...&scope=profile+email&response_type=code<br/>&redirect_uri=...&state=...&login_hint=email
    Browser->>Google: Request Google authorization endpoint
    Google->>Google: Validate authorization request
    Note left of Google: • Verify client_id<br/>• Validate redirect_uri against registered URIs<br/>• Check requested scopes
    Google->>Google: Authenticate user, check for Consent
    Google->>Browser: Redirect to GitLab with authorization code
    Browser->>Router: Submit authorization code to GitLab
    Note right of Browser: GET o/org-path/auth/google_oauth2/callback<br/>?code=AUTH_CODE&state=STATE_VALUE<br/>(NO user data available yet)
    Router->>Cell1: Submit authorization code to GitLab
    rect rgb(255, 255, 153)
      note right of Router: Routing based on org-id in state parameter
    end
    Cell1->>Cell1: Validate request
    Cell1->>Google: Exchange code for access token
    Google->>Cell1: Return access token
    Cell1->>Google: Get user profile information
    Google->>Cell1: Validate access token and return user profile data

    Note over Cell1, DB: User Provisioning & Session Creation

    Cell1->>Cell1: Create Omniauth auth hash
    Note right of Cell1: Build standardized auth hash:<br/>• provider: "google_oauth2"<br/>• uid: "google-user-id-123"<br/>• info: {name, email, image}<br/>• credentials: {token, expires_at}<br/>• extra: {raw_info} - handled by OmniAuth
    Cell1->>DB: Lookup user by email or identity in the `identities` table
    alt User exists without linked Google identity
        Cell1->>DB: Get user from the users table
        Cell1->>DB: Link user to Google identity - Insert into identities
    else User does not exist
        Cell1->>DB: Insert into users
        Cell1->>DB: Insert into identities
    end
    Cell1->>Cell1: Create Rails session
    Cell1->>Router: Redirect to intended destination
    Note right of Cell1: HTTP 302 to originally requested resource<br/>or default dashboard
    Router->>Browser: Redirect to intended destination
~~~
{{% /details %}}
<br/>

**却下された理由:** ユーザーが OAuth フローを開始する前にメールアドレスを入力しなければならず、ユーザー体験が低下します。また、状態管理とクロス Cell 通信において大幅な複雑さが増し、システムのメンテナンスが困難になります。

### 代替フロー 2

実装全体を GitLab Rails に留めつつ、より優れたユーザー体験を同時に提供するために、グローバル GitLab ログインページに `...でログイン` オプションを表示する必要があります。これは OAuth フローが、ユーザー情報が利用可能になるまでレガシー Cell によって完全に処理されることを意味します。その後、レガシー Cell がユーザーが属する Cell に情報を転送します。

この目的のために SAML IdP 起点フローを活用することができます。
レガシー Cell が SAML IdP として動作し、SAML SP として動作するユーザーが属する Cell との IdP 起点ログインフローを使用します。

**主要な変更点:**

- GitLab の「ステップ 1」ログインページが `...でログイン` オプションを表示
- レガシー Cell が OAuth フロー全体を処理
- ユーザー情報が利用可能になると、レガシー Cell が Topology Service を呼び出してユーザーが属する Cell を特定
- レガシー Cell がユーザーが属する Cell との IdP 起点 SAML ログインフローを開始
- ユーザーのメールと外部 ID 情報を SAML 属性として埋め込んだ SAML レスポンスを Organization 固有の SAML ログインエンドポイントに POST
- ユーザーが属する Cell がこのリクエストを処理してユーザーのセッションを確立

#### 提案された代替フロー - シーケンス図

{{% details summary="グローバルログインページでの Google ログイン" %}}
~~~mermaid
sequenceDiagram
    participant Browser as User/Browser
    participant Router as HTTP Router
    participant Cell0 as Legacy Cell
    participant Cell0_DB as Legacy Cell Database
    participant TS as Topology Service
    participant Google as Google OAuth Provider
    participant Cell1 as User Owning Cell
    participant DB as User Owning Cell Database

    Note over Browser, DB: OpenID Connect Authorization Code Flow with Google as the OpenID provider

    Browser->>Router: Request GitLab Login page
    Router->>Cell0: Request GitLab Login page
    Cell0->>Router: Present email input page with OAuth login options
    Router->>Browser: Display email input page with OAuth login options
    Browser->>Browser: Click on Login with Google
    Browser->>Router: Request Login with Google
    note right of Browser: POST https://gitlab.com/users/auth/google_oauth2
    Router->>Cell0: Request Login with Google
    Cell0->>Cell0: Generate OAuth authorization request
    Note right of Cell0: Omniauth builds authorization URL with:<br/>• client_id<br/>• response_type=code<br/>• scope=profile email<br/>• redirect_uri=/auth/google_oauth2/callback<br/>• state (CSRF protection)<br/>
    Cell0->>Browser: Redirect to Google authorization endpoint
    Note right of Cell0: HTTP 302 to Google OAuth URL<br/>https://accounts.google.com/oauth/authorize<br/>?client_id=...&scope=profile+email&response_type=code<br/>&redirect_uri=...&state=...
    Browser->>Google: Request Google authorization endpoint
    Google->>Google: Validate authorization request
    Note left of Google: • Verify client_id<br/>• Validate redirect_uri against registered URIs<br/>• Check requested scopes
    Google->>Google: Authenticate user, check for Consent
    Google->>Browser: Redirect to GitLab with authorization code
    Browser->>Router: Submit authorization code to GitLab
    Note right of Browser: GET /auth/google_oauth2/callback<br/>?code=AUTH_CODE&state=STATE_VALUE<br/>(NO user data available yet)
    Router->>Cell0: Submit authorization code to GitLab
    Cell0->>Cell0: Validate request
    Cell0->>Google: Exchange code for access token
    Google->>Cell0: Return access token
    Cell0->>Google: Get user profile information
    Google->>Cell0: Validate access token and return user profile data
    Cell0->>Cell0: Create Omniauth auth hash
    Note right of Cell0: Build standardized auth hash:<br/>• provider: "google_oauth2"<br/>• uid: "google-user-id-123"<br/>• info: {name, email, image}<br/>• credentials: {token, expires_at}<br/>• extra: {raw_info} - handled by OmniAuth
    Cell0->>Cell0_DB: Lookup user by email or identity in the `identities` table

    Note over Browser, DB: User not found in Legacy Cell

    Cell0->>TS: Lookup user by email in TS
    TS->>Cell0: Provide org-info for email
    Cell0->>Router: Post to org-specific IDP initiated SAML login page
    note left of Cell0: POST /o/org-path/auth/saml/callback<br/>Generate SAMLResponse with <br/> email and Google identity attributes
    Router->>Cell1: Submit request to org-specific IDP initiated SAML login page
    rect rgb(255, 255, 153)
      note right of Router: Routing based on org-path in URL
    end

    Note over Cell1, DB: User Provisioning & Session Creation
    Cell1->>Cell1: Decode and validate SAML response
    Cell1->>Cell1: Extract user attributes
    Cell1->>DB: Lookup user by email or identity in the `identities` table
    alt User exists without linked Google identity
        Cell1->>DB: Get user from the users table
        Cell1->>DB: Link user to Google identity - Insert into identities
    else User does not exist
        Cell1->>DB: Insert into users
        Cell1->>DB: Insert into identities
    end
    Cell1->>Cell1: Create Rails session
    Cell1->>Router: Redirect to intended destination
    Note right of Cell1: HTTP 302 to originally requested resource<br/>or default dashboard
    Router->>Browser: Redirect to intended destination
~~~
{{% /details %}}
<br/>

**却下された理由:** このアプローチは新しい認証スタックアーキテクチャと整合せず、レガシー Cell とユーザーが属する Cell 間で SAML 認証を確立するための大量のスロー・アウェイ作業が必要になります。

### 代替フロー 3

OAuth フローとクラスター全体の通知のためのセル間通信を可能にするために、Topology Service 内に EventBusService を構築する。
[参考: Topology Service - Event Bus](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/15683)

**主要な変更点:**

- アプリケーションが属する Cell とユーザーが属する Cell 間での OAuth フローの分割
- Topology Service と OAuth フロー間の密結合の作成
- 新しい認証スタックアーキテクチャに対応するための完全な書き直し

**却下された理由:** このアプローチは新しい認証スタックアーキテクチャと整合せず、Topology Service と認証の懸念事項の間に望ましくない結合を生み出します。
