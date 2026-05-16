---
title: GitHub SCM 向け GitLab CI
status: proposed
creation-date: "2024-11-26"
authors: [ "@mfanGitLab" ]
coaches: [ "@allison.browne" ]
dris: [ "@rutshah", "@carolinesimpson" ]
owning-stage: "~devops::verify"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/ci_pipelines_for_github/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T10:00:00Z"
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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/mfanGitLab" class="text-blue-600 hover:underline">@mfanGitLab</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/allison.browne" class="text-blue-600 hover:underline">@allison.browne</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/rutshah" class="text-blue-600 hover:underline">@rutshah</a>, <a href="https://gitlab.com/carolinesimpson" class="text-blue-600 hover:underline">@carolinesimpson</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::verify</span></td>
<td class="px-3 py-2 border border-gray-300">2024-11-26</td>
</tr>
</tbody>
</table>
</div>


## 概要

GitHub ソースコード管理（SCM）を使用する一部のお客様は、パイプラインの実行やセキュリティ機能の活用のために GitLab の CI ソリューションと連携したいと考えています。これらのお客様はソースコードを GitLab にミラーリングすることを望まず、プッシュ時に即時パイプラインを実行したいと考えています。

## 動機

現在の GitHub ↔ GitLab 統合アプローチは、最低 5 分間隔のミラーリングを使用しています。これはフィードバックが遅すぎ、有効期限のない個人アクセストークンを使用し、GitLab に GitHub のソースコードのコピーが必要となります。さらに、プロジェクト全体とすべてのパイプラインが統合を開始したユーザーの下で実行されるため、権限の不一致が生じる可能性があります。

効果的なソリューションがあれば、GitLab CI/CD やその他の Ops 機能を、ソースコード管理ツールとして GitHub を使用する企業に販売できます。

現在市場に出回っている CI ツールは GitHub ソースを使用して CI/CD を外部で実行しています。[Buildkite, CircleCi, TeamCity, Jenkins](https://GitLab.com/GitLab-org/GitLab/-/issues/460503#note_2115425859) はランナーが直接 GitHub からプルする例です。このような例では、パイプライン設定ファイルは GitHub またはサービス側に置くことができます。

### 目標

初期 MVC として以下をサポートすることを目指します:

1. GitHub アプリ（GitHub マーケットプレイスへの登録は必須ではありません — MVP では不要で、ユーザーは直接リンクでインストールできます）
1. GitHub プッシュ時のほぼ即時パイプライン作成
1. GitHub との通信には短期間トークンのみを使用します
1. 直接ユーザーマッピングによる適切なユーザー管理システム
    1. GitHub 側の各ユーザーは GitLab 上に課金対象シートを持つ必要があります
    1. GitLab ユーザーはパイプライン実行に必要な最小限の権限を持つ必要があります
1. ランナーのみがソースコードとやり取りします（フェッチ/プル）
    1. 顧客のソースコードは GitHub リポジトリに保存され、GitLab リポジトリには保存されません

### スコープ外

MVP のスコープ外（重要度順）:

1. GitLab セルフマネージド
    1. 理由: これは十分に実現可能です。セルフマネージドユーザー向けのドキュメントがあれば対応できます。MVP から対応できる _はずです_
1. GitHub Enterprise
    1. 理由: Enterprise レベルでは GitHub App とアクションが異なるため、追加のセットアップ、ライセンシング、テスト、手動設定が必要になります
1. GitLab セキュリティスキャン、パイプライン実行ポリシー、アーティファクトからのマージリクエストウィジェット（Junit/Cobertura）
    1. 理由: ソースコードは GitHub にあり、スキャンはネイティブでのみ動作するため、コードのフェッチと分析に追加作業が必要です
    1. MR ウィジェットについても同様で、マージリクエストは GitHub 側にあるため変更できません
1. CI を必要とする可能性のある GitHub 側のさまざまなアクション:
    1. フォーク
    2. タグ
    3. ブランチ名の変更、[その他](https://GitLab.com/GitLab-org/GitLab/-/issues/493378#future-iterations)
    4. 理由: これらは異なる Webhook や SHA 設定に依存しており、より複雑です

これらは実現可能ですが、スコープと複雑さを減らすために追加機能はイテレーションで対応できます。

## 提案

![アーキテクチャ](/images/handbook/engineering/architecture/design-documents/ci_pipelines_for_github/GithubGitlabWorkflow.png)

GitHub は Webhook 経由で GitHubApp を介して GitLab と通信します。
GitLab は Webhook をトリガーしたユーザー向けに GitHub App 経由でユーザーアクセストークンを生成し、そのユーザーのパイプラインを作成します。
ランナーが GitLab の API をポーリングすると、GitLab はランナーがコードをフェッチするための GitHub リポジトリの場所とアクセストークンを提供します。
GitLab は GitHub の API を使用して、パイプラインのステータスでコミットを更新します。

## 設計と実装の詳細

### 前提条件

プロセスは、[GitHub 組織オーナー](https://docs.github.com/en/enterprise-cloud@latest/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps#who-can-install-github-apps-and-authorize-oauth-apps)が CI/CD として使用する GitLab プロジェクトを作成することから始まります。

[CI/CD For External Repositories](https://GitLab.com/projects/new#cicd_for_external_repo) を再利用し、リポジトリをミラーリングしないための「チェックボックス」を追加します（UI は検討中）。インポート中に GitHub リポジトリ ID を保存します。[議論用 Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/509200)

インポート後、これらのプロジェクトに対して新しい GitLab 統合「GitHub SCM」を自動的に有効にします。

その後、お客様は直接リンクを使用して GitHub App をインストールし、GitHub 上のどのリポジトリにインストールするかを選択します。GitHub App のインストール時および OAuth について、各ユーザーは ![GitHubApp インストール](/images/handbook/engineering/architecture/design-documents/ci_pipelines_for_github/GitHubAppInstallation.png) に記載された利用規約に同意する必要があります。App の権限は GitLab によって設定され、GitHub でホストされます。基本的な権限（`read_repository` および `write_commit_status`）でセットアップされます。権限の変更や新しい権限の追加は[GitHub App の変更](https://docs.github.com/en/apps/maintaining-github-apps/modifying-a-github-app-registration#changing-the-permissions-of-a-github-app)からいつでも可能ですが、ユーザーは条件を再承認して再認証する必要があります。

パイプラインをトリガーしたい各ユーザーは、GitHub で OAuth 認証する必要があります。OAuth ログイン経由か、GitLab アカウントを GitHub と連携することで対応できます。

### すべてのセットアップが完了した後

以下のステップは上記の図に従っています:

1. GitHub のユーザーがブランチにプッシュを開始します
1. GitHub は GitHubApp 経由で Webhook を自動的にトリガーします。これにより `push` ペイロードが GitLab に送信されます
    1. [GitLab Webhook Push ペイロード](https://docs.GitHub.com/en/webhooks/webhook-events-and-payloads#push)
1. GitLab は署名済みペイロードの `sender_id` を使用して、GitLab ユーザーにマッピングします
    1. GitLab ユーザーがパイプライン実行権限を持っていない場合、パイプラインは作成されますがすぐに失敗します。正しい権限を持つユーザーはこのパイプラインを再試行できます
1. GitLab ユーザーがパイプライン作成権限を持っている場合:
    1. GitLab はユーザーの `refresh_token` を使用して新しい `access_token` を生成し、[ユーザーに代わって操作](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-with-a-github-app-on-behalf-of-a-user#identifying-and-authorizing-users-for-github-apps)できるようにします
    1. この `access_token` はリポジトリ固有で、以下のみを持ちます:
        1. リポジトリへの読み取りアクセス
        1. commit_status への書き込みアクセス（パイプラインの詳細でコミットを更新するため）
    1. `refresh_token` を取り消さずに `access_token` を失効させる方法はありません。ただし、安全を期すために、パイプライン完了後に新しい `access_token` を再生成することもできます
    1. パイプラインは GitHub 側にある `.gitlab-ci.yml` ファイルを取得することで生成されます
        1. 将来的に `includes` との連携を容易にするため、この `.yml` ファイルは `gitlab` フォルダ内に配置することを要件とします
1. GitLab は `CreatePipelineService` Sidekiq ジョブを呼び出してパイプラインをセットアップします
1. Rails は `access_token` を含む必要なパラメーターをランナーに渡します。また GitHub API を介してパイプラインを「実行中」に更新します
1. ランナーは `access_token` を使用して直接 GitHub を呼び出し、そのブランチのリポジトリをフェッチ・プルします
1. パイプラインが完了すると、ランナーは通常通り GitLab を更新します
1. GitLab は `installation access token` を使用して、パイプラインの SHA で GitHub にコミットをポストします。コミットのパイプラインが完了したことを通知します
    1. [GitHub コミットステータス API](https://docs.GitHub.com/en/rest/commits/statuses?apiVersion=2022-11-28#create-a-commit-status)
    1. これは 1 時間あたり 5k/15k のレート制限に制限されます。ただし、お客様には十分なはずです

**ステップ 3 の詳細:**

この認可のフローには多くの方法があります。詳細は[対応する実装 Issue](https://GitLab.com/GitLab-org/GitLab/-/issues/505056) をご覧ください。

GitHub ↔ GitLab で 1:1 のユーザーマッピングを強制します。現在これはプロダクトの推奨アプローチです。これにより、正しい数のシートで製品が適切にライセンスされていることを確認できます。

各ユーザーは GitHub アカウントを GitLab プロフィールに手動でリンクする必要があります。これは GitHub が[認証プロバイダー](https://docs.gitlab.com/ee/integration/github.html)として使用されている場合にのみ可能です。

欠点は、GitLab アカウントのマッピングを持たないユーザーやボットアカウントはパイプラインを実行できないことです。回避策として、メンテナーが手動で実行できる失敗パイプラインを作成することが考えられます。

**ステップ 4.4** — `gitlab-ci.yml` ファイルは GitHub.com 上で外部にホストされるため、Webhook がトリガーされるとこのファイルのみが取得されます。これにより、ソースコードと設定ファイルが同期した状態に保たれます。

このアプローチでは動作しない特定の YAML 定義があります。`includes:` YAML 定義は動作しません。同様に、クロスパイプライン設定、セキュリティスキャン、パイプラインテストレポート、実行ポリシーなどは動作させるための追加パッチが必要です。

## 代替ソリューション

ステップ 3 について。

別のアイデアは[サービスアカウント](https://docs.GitLab.com/ee/user/profile/service_accounts.html)を使用することです。お客様に使用したいサービスアカウントを作成させ、権限セットまたは[カスタムロール](https://docs.GitLab.com/ee/user/custom_roles.html)でプロジェクトに割り当てます。その後、これらの GitHub Webhook アクションに使用するサービスアカウントを選択できる UI を提供します。

これはクロスプロジェクトパイプラインが存在する可能性があるため、複合 ID が必要になります。また、GitHub ユーザーが GitLab シートを共有できるため、請求に関する追加の考慮事項も必要です。

ステップ 4 について。

別のオプションとして、GitHub App が Installation Access Token を使用する方法があります。

レート制限がなければ優れたオプションですが、IAT は GitHub.com では 1 時間あたり 5k 回、GitHub Enterprise では 15k 回の呼び出し制限があり、キャッシュメカニズムなしでは大規模なお客様には不十分です。この制限は組織レベルで適用され、すべてのリポジトリ間で共有されます。

[GitHub App インストールとして認証](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation)

## レビュアーへの質問

1. コンプライアンスの質問: GitHub コードの実行と保存方法に応じて、追加の利用規約が必要ですか？
    1. ジョブログは GitLab 側に保存されるため
    1. 回答: （Rutshah）ジョブログの保持は問題ないはずです
2. コンプライアンスの質問/PM: 一部のお客様はソースコードとやり取りするランナー以外は何も不要としています。この要件は不明確です。ジョブログ内のファイル/アーティファクト名の参照・断片はこの要件を無効にしますか？
    1. 部分的な回答: （Rutshah）これらの参照は問題ないはずです
