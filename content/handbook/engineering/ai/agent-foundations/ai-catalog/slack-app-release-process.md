---
title: "GitLab for Slack アプリ: リリースとマニフェストのプロセス"
description: GitLab for Slack アプリを GitLab.com、Self-Managed、Dedicated 向けにリリースする方法、マニフェストの更新と Slack Marketplace レビューが必要なタイミング、および既存のインストールを壊さないために従うルールを説明します。
upstream_path: /handbook/engineering/ai/agent-foundations/ai-catalog/slack-app-release-process/
upstream_sha: 7a4e62958b31234a80d386bf4b7c8dd855df2cb8
lastmod: "2026-09-09T19:05:36+01:00"
translated_at: "2026-09-10T11:09:19+00:00"
stale: false
translator: codex
---

## 概要 {#overview}

GitLab for Slack アプリは 3 つのデプロイ環境に提供され、その設定は
**手動で同期を保つ必要がある 2 か所**にあります。

1. Marketplace アプリ
   （[`A676ADMV5`](https://api.slack.com/apps/A676ADMV5)）の**稼働中アプリの設定**。Slack のアプリ
   ダッシュボードで編集します。変更は Slack Marketplace のレビュー対象となり、
   GitLab のリリースとは別に行われます。
1. GitLab モノリス内の
   [`lib/slack/manifest.rb`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/slack/manifest.rb)。Self-Managed と
   Dedicated の管理者が、自分たち専用の非公開アプリのコピーを作成、更新するために使うマニフェストを生成します。
   これは GitLab のリリースに含まれます。

これらを自動で同期する仕組みはありません。マニフェストに影響する変更はすべて、
意識的に両方へ適用する必要があります。

Slack アプリの設定には、ちょうど 1 つのバックエンドの URL がハードコードされています。
Marketplace アプリは `gitlab.com` を指すため、**GitLab.com でのみ動作します**。
Self-Managed と Dedicated のインスタンスでは利用できません。それらの管理者は、
生成されたマニフェストから、自分たちのインスタンスを指す
非公開のアプリコピーを作成します。どの環境にも選択の余地はなく、それぞれの方法は 1 つだけです。

| 環境 | Slack アプリ | アプリを更新する人 | 方法 |
|---------|-----------|---------------------|-----|
| GitLab.com | Marketplace アプリ [`A676ADMV5`](https://api.slack.com/apps/A676ADMV5) | 私たち | 設定を編集 → Slack レビューに提出 → 公開 |
| Self-Managed | インスタンスごとの非公開コピー | 顧客の管理者 | インスタンス設定から、事前入力済みの Slack へのリダイレクトを通じてアプリを作成します。更新時は、[生成された `slack_manifest.json` をダウンロードしてアプリのマニフェストエディターに貼り付けます](https://docs.gitlab.com/administration/settings/slack_app/#update-the-gitlab-for-slack-app) |
| Dedicated | インスタンスごとの非公開コピー | インスタンスの管理者 | Self-Managed と同様で、インスタンスの GitLab バージョンに紐付きます |

実務上、Marketplace アプリは**私たちが一元的に更新する 1 つの共有アプリ**です
（レビューのサイクルはありますが、公開後は即時に展開されます）。一方、
Self-Managed と Dedicated には**私たちが決して触れられない数千もの独立したアプリコピー**があります。
それらは、管理者がインスタンスで実行中の GitLab バージョンから生成された
マニフェストを手動で再適用したときにしか更新されません。

## 所有権とアクセス {#ownership-and-access}

1. GitLab for Slack アプリは、[AI Catalog グループ](/handbook/engineering/ai/agent-foundations/ai-catalog/)
   （`group::ai catalog`、Agent Foundations ステージ）内の
   External Agents 機能チームが所有しています。チームへの連絡には
   [`#f_external-agents`](https://gitlab.enterprise.slack.com/archives/C0B4V7TJPG9)を利用してください。
1. 本番アプリは
   [`gitlab-slack-app@gitlab.com`](https://groups.google.com/a/gitlab.com/g/gitlab-slack-app/members)
   Google グループに登録されており、Slack からのレビュー状況に関する連絡はすべてこのグループに届きます。
1. 公開するには、
   [本番アプリのコラボレーター](https://app.slack.com/app-settings/T02592416/A676ADMV5/collaborators)である必要があります。
1. GitLab には **Slack 社との Slack Connect チャンネル**があります。
   [`#slack-and-gitlab`](https://gitlab.slack.com/archives/CC3NCBU07)です。Slack の Platform Partnerships 担当者との
   レビュー調整に使用してください。

## いつ何が必要か {#when-is-what-required}

[Slack の Marketplace レビューガイド](https://docs.slack.dev/slack-marketplace/slack-marketplace-review-guide#updating)によると、
**公開後、稼働中アプリの設定はロックされます**。設定、
機能、スコープを変更するには、再度レビューに提出する必要があります。

| 変更 | `manifest.rb` の更新 | Marketplace の再レビュー | 顧客の対応 |
|--------|---------------------|----------------------|-----------------|
| バックエンドのみの動作 | 不要 | 不要 | なし |
| 新しいボットイベントのサブスクリプション | 必要 | 必要 | なし |
| 新しい OAuth スコープ | 必要 | 必要（デモ/テストアプリ） | **管理者が各ワークスペースで再インストールします**。それまではそのワークスペースで機能が有効になりません（注 1 を参照） |
| 新しいスラッシュコマンド、アプリホーム、エージェントビュー | 必要 | 必要 | 一部の機能では、管理者が各ワークスペースで再インストールします |
| Slack エージェントアプリへの変換 | 必要 | 必要（新規レビュー） | 管理者が各ワークスペースで再インストールします |
| リクエスト URL の変更 | 必要 | 必要、簡易 | SM/Dedicated でマニフェストを再適用します |
| 表示名、説明、アイコン | 通常は必要 | 掲載情報のみ、迅速 | なし |

注:

1. 新しいスコープは**既存のインストールに自動反映されません**。管理者がワークスペースで再インストールするまで、
   機能は通知されることなく利用できないままです。
1. 新しいイベントサブスクリプションは、保存されるとすぐにインストール済みの全ワークスペースで発火します。
   顧客の対応は不要です。
1. **ボットユーザーの名前は決して変更しないでください**。既存のインストールが壊れます。

レビューの所要時間: 提出後、
[`#slack-and-gitlab`](https://gitlab.slack.com/archives/CC3NCBU07)で Platform Partnerships 担当者に迅速化を依頼します。
迅速化されたレビューは、これまで約 **1 日**で完了しています。それでも余裕を持って計画してください。
迅速化は厚意によるもので、SLA ではありません。承認後、**公開するタイミングは私たちが選びます**。
公開は、アプリがインストールされているすべてのワークスペースに
即時反映されます。

## マニフェストに影響する変更のリリースチェックリスト {#release-checklist-for-manifest-affecting-changes}

1. **新しいスコープも含めて**、フィーチャーフラグの背後で機能を
   開発、テストします。OAuth インストールフローは
   [`SlackIntegration.scopes_for`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/app/models/slack_integration.rb)
   が返すスコープを要求します（生成されるマニフェストも「Add to Slack」リンクもこれを使用します）。そのため、
   公開済みの Marketplace アプリがまだ持っていないスコープを要求すると、
   新規インストールが壊れます。フラグによって要求スコープを拡張するのは、
   更新版アプリの公開後に限らなければなりません。
1. 機能と同じ MR で `lib/slack/manifest.rb`（とその spec）を更新します。
1. 本番アプリを準備します。
   [api.slack.com](https://api.slack.com/apps/A676ADMV5)で設定変更を適用します。保存した変更は、
   レビューが承認されて公開されるまで、公開済みアプリには適用されません。
1. レビューに提出します（下記参照）。
1. 承認されたら公開のタイミングを調整します。公開した変更は即時に反映されるため、**アプリの公開と
   フィーチャーフラグの有効化を同時に行います**。
1. Self-Managed と Dedicated 向けには、リリース記事とドキュメントで、管理者に
   [アプリのコピーを更新する](https://docs.gitlab.com/administration/settings/slack_app/#update-the-gitlab-for-slack-app)よう案内していることを確認します。
   これが唯一の更新方法です。
1. 新しいスコープを追加した場合は、再インストールが必要なことを周知します（`upgrade_needed?` による再インストール
   バナー、ドキュメント、リリース記事）。既存のインストールは、各ワークスペースで再認可されるまで
   新しいスコープを取得できません。それまでは新機能が通知されることなく利用できない一方、既存の機能は引き続き動作します。

### Slack レビューへの提出方法 {#how-to-submit-a-slack-review}

1. [本番アプリの設定](https://api.slack.com/apps/A676ADMV5)に移動し、
   **Submit to the Slack Marketplace** を開きます。
1. 自動事前チェックで指摘された項目をすべて修正します。
1. **Testing Information** で次を提供します。
   - 新機能を最初から最後まで示す**動画デモ**。
   - スコープ追加やプライバシーに関係する変更の場合: Slack レビューチームが
     機能を試せるテスト環境へのアクセス
     （レビュアーは本番でフィーチャーフラグの背後にある機能を使用できません。
     これには、レビュアー用アカウントを用意した staging-ref のアプリコピーを
     使用した実績があります。レビューチームへの連絡方法は
     [`#slack-and-gitlab`](https://gitlab.slack.com/archives/CC3NCBU07)で確認してください）。
   - プライバシーとガバナンスに関する質問票への回答。
1. 提出後、
   [`#slack-and-gitlab`](https://gitlab.slack.com/archives/CC3NCBU07)に投稿し、
   Platform Partnerships に迅速化を依頼します。
1. レビューのフィードバックは提出フロー内と、
   `gitlab-slack-app@gitlab.com` へのメールで届きます。
1. 承認後、選んだタイミングでアプリ設定ページから
   公開します。

## 私たちが守るルール {#rules-we-hold-ourselves-to}

1. **`manifest.rb` がアプリ設定の唯一の情報源です。** これを変更する MR には、
   （a）Marketplace の再レビュー、
   （b）ワークスペースでの再インストール、（c）Self-Managed と
   Dedicated の管理者向けのリリース記事での明記が必要かどうかを記載する必要があります。
1. **コードは古いマニフェストでも適切に機能を制限しながら動作する必要があります。** Self-Managed と
   Dedicated の顧客は古いアプリコピーを無期限に使い続け、既存の GitLab.com
   インストールは再認可されるまで古いトークンとスコープを保持します。
   既存の機能を壊さずに、`missing_scope` エラーやイベントサブスクリプションの欠落を
   処理してください。
1. **スコープの追加はまとめて行います。** 新しいスコープがワークスペースで有効になるのは、
   管理者が手動でアプリを再インストールした後だけです。そのため、スコープの追加は毎回、
   顧客の全ワークスペースでの再インストールの呼びかけになります。マイルストーンごとに 1 つずつ
   スコープを追加しないでください（そのたびに再インストールが必要になります）。必要なスコープを集約して
   1 回のリリースでまとめて提供し、再インストールの案内
   （製品内のバナー、ドキュメント、リリース記事）を併せて行ってください。
1. **GitLab インスタンスごとにスコープセットは 1 つです。** マニフェストはすでに
   インスタンスごとに異なります（Self-Managed と Dedicated の各インスタンスは、
   自身の URL を含む独自のマニフェストを生成します）。ただし、同じインスタンス内では、すべてのワークスペースのインストールに
   同じスコープセットを適用する必要があります。ライセンスのティアや
   グループごとのフィーチャーフラグの状態によって、スコープを恒常的に変えないでください。そうすると、ライセンスやフラグを変更するたびに
   アプリの権限を修正するための再インストールが必要になるためです。唯一の例外は
   リリースの制御です（上記のチェックリストを参照）。更新された Marketplace
   アプリが公開されるまで新しいスコープを認可フローに含めず、公開後に全員に対して一斉に有効化する、
   インスタンス全体の一時的なフラグを使用します。
1. **将来を見越したスコープの要求は禁止です。** Slack のレビューガイドは、未実装の機能のために
   スコープを要求することを明示的に禁じています。レビュー可能な機能が使用するスコープだけを提出してください。
1. **ボットユーザーの名前は決して変更しないでください**（`GitLab`）。既存の
   インストールを壊すことが確認されています。
1. **公開済みアプリの設定変更は Slack のレビューを通します**。
   機能がフィーチャーフラグの背後にある場合も同様です。フラグを有効にした、テスト可能な
   環境をレビュアーに提供してください。
