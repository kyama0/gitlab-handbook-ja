---
title: "Observability アラートのトリアージ"
description: "コントリビュータープラットフォームの Observability アラートを調査してクローズする方法"
upstream_path: /handbook/marketing/developer-relations/engineering/observability-alert-triage/
upstream_sha: 9164688669f5bd36ff8345a38c17f82ffc321821
lastmod: 2026-06-20T18:16:40+01:00
translated_at: "2026-06-20T21:10:03Z"
translator: claude
stale: false
model: claude-opus-4-7
---

[GitLab Observability](https://gitlab.com/groups/gitlab-org/developer-relations/contributor-success/-/observability/setup) のアラートシステムが発報すると、
[contributors-gitlab-com トラッカー](https://gitlab.com/gitlab-org/developer-relations/contributor-success/contributors-gitlab-com/-/issues)に Issue が自動的に作成され、
サービスデスクを通じてチームに通知が届きます。これらのアラートに対応するには、以下の手順に従ってください。

## 1. アラートの Issue を開く

Issue のタイトルは次のようになっています:

```text
[FIRING:1] <rule-id> (Error log entry ... error error)
```

Issue を開きます。説明には以下が含まれています:

- `ruleSource`: observability UI 内のアラートルールへの直接リンク。
- `related_logs`: アラートが発報した時刻に絞り込まれた、事前フィルター済みのログエクスプローラーのリンク。
- `description`: 超過したしきい値（例: 「observed value: 1, threshold: 0」）。

> アラートが発生した**理由**を素早く把握するには、フォーマットも利用可能な情報も理想的ではないことが分かっています。
> これは [`gitlab_o11y` プロジェクト](https://gitlab.com/gitlab-org/embody-team/experimental-observability/gitlab_o11y/-/work_items/48)で追跡されている既知の問題です。

## 2. ログを開く

Issue の説明にある `related_logs` リンクを使用します。これにより、正しいフィルターがすでに適用された状態で
[グループのログエクスプローラー](https://gitlab.com/groups/gitlab-org/developer-relations/contributor-success/-/observability/logs/logs-explorer)
が開きます。

## 3. エラーを読む

ログエントリを展開します。以下を特定します:

- エラーメッセージとスタックトレース。
- エラーが単発（1 〜 2 回の発生）か、継続的なものか。
- 既知の原因（例: 一時的な DB 接続の切断、期限切れのトークン、
  ダウンストリーム API の障害）を示しているかどうか。

## 4. 調査結果を Issue に記録する

アラートの Issue にコメントを追加します。短く記述してください:

- エラーが何であったか。
- 一時的なものか、繰り返し発生するものか。
- 関連するログの抜粋。

[contributors-gitlab-com#552](https://gitlab.com/gitlab-org/developer-relations/contributor-success/contributors-gitlab-com/-/issues/552) の例:

> cause was what looks like a temporary db connection issue
>
> ```text
> PG::ConnectionBad: connection to server at "127.0.0.1", port 5432 failed:
> FATAL: Cloud SQL IAM service account authentication failed
> ```
>
> didn't recur, so closing

{{< alert type="warning" >}}
**アラートの Issue は機密情報です（サービスデスク経由で作成されます）**

生のログ出力、スタックトレース、社内インフラストラクチャのデータなど、機密性の高い詳細はすべてこの機密 Issue 内に留めてください。それらを公開 Issue や MR にそのままコピーしないでください。サニタイズのルールについては[調査結果に基づいて対応する](#5-act-on-the-finding)を参照してください。
{{< /alert >}}

## 5. 調査結果に基づいて対応する {#5-act-on-the-finding}

見つかった内容に基づいて、以下のいずれかの経路を選択してください。

### 一時的なもの、対応不要

エラーは再発せず、影響もありません。原因を説明する短いコメントを付けて、アラートの Issue をクローズします。

### 修正が必要、緊急度低

修正を追跡するための公開 Issue を作成します。サニタイズした説明のみを含めてください:

- 生のログ出力、ユーザー識別子、または社内インフラストラクチャの詳細を漏らしかねないスタックトレースを含めずに、
  エラーの種類（例: 「IAM 認証の失敗」）を記述します。
- トレーサビリティのために、公開 Issue を機密のアラート Issue にリンクバックします。
- 標準のラベルを適用します: `~"Contributor Success"`、および適切な `~type::` と
  `~workflow::` ラベル。
- 繰り返し発生するパターンに関連する場合は、公開 Issue を
  [observability アンブレラ作業項目 #308](https://gitlab.com/gitlab-org/developer-relations/contributor-success/contributors-gitlab-com/-/work_items/308)
  にリンクします。
- 新しい公開 Issue を参照しつつ、アラートの Issue をクローズします。

### 修正が必要、緊急度高

直接 MR を作成します。MR の説明にも同じサニタイズのルールを適用してください: 生のログ出力や機密データは含めません。
MR を機密のアラート Issue にリンクバックする際は、MR の説明自体ではなく、アラート Issue 上のコメントで行ってください。

### 不明確、またはセカンドオピニオンが必要

アラートの Issue を開いたままにし、調査結果をコメントとして追加して、チームの誰かに連絡してください。

## データサニタイズのルール

アラートの Issue は機密情報です。ダウンストリームの成果物（公開 Issue、MR、作業項目のコメント）には
以下を含めてはいけません:

- スタックトレースや社内ホスト名を含む生のログ出力。
- ログエントリ内のユーザー識別子、メールアドレス、またはアカウント ID。
- 社内のサービスアカウント名または IAM ロール名。
- 接続文字列または環境固有の設定値。

問題は、生のインフラストラクチャの詳細ではなく、振る舞いと影響の観点から記述してください。
