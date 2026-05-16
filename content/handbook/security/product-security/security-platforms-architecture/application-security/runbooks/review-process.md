---
title: "AppSec レビューテンプレートプロセス"
description: "このレビューテンプレートは、GitLab 機能のアプリケーションセキュリティレビュー向けに調整されています。一部は他のソフトウェアにも適用できる場合がありますが、適用できない部分もあります。"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/runbooks/review-process/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-06T19:27:57-05:00"
---

## :warning: 優先順位付けに関する注意

[2023-11-02 時点で、AppSec は P1 の AppSec レビューと脅威モデルのみを優先しています](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues/475#note_1632226713)。これは P2 や P3 の AppSec レビューや脅威モデルのリクエストを送信できないという意味ではありませんが、キャパシティの制限により P1 のレビューのみを優先できることをご理解ください。質問や懸念がある場合は `#security_help` Slack チャンネルでお問い合わせください。

## レビューの準備

実際のレビューを開始するには、すべてのレビュアーの間で体系的かつ理解しやすいアプローチを取るために、いくつかの準備手順を行う必要があります。準備ステップの主な成果物は、**スコープ定義**と**所要時間の見積もり**です。

### スコープ定義

レビュー Issue で提供された情報に基づいて、レビュアーはレビューの範囲内にあり、レビュー内でテストされるサブ機能とテスト可能項目の優先順位付きリストを作成できる必要があります。多くの場合、テスト**しない**項目/サブ機能を定義することも必要です。

レビュアーは、レビューの範囲を適切に定義するために機能の高レベルな理解を得る必要があります。これは、コードの量と与えられた時間制約だけでなく、コードが実行される環境のコンテキスト、提供されている API、入力の出所、隣接する API の呼び出し元などを把握する必要があることを意味します。

スコープ内リストはむしろ高レベルなリストとなり、それ以降のレビューステップでさらに精緻化されます。

### 優先順位付け

機能のさまざまなサブ機能と機能性の優先順位を付ける必要があります。このため、認証や認可といった明らかに重要な機能は最高優先度を持つべきです。

[優先度の割り当て](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews/#assigning-priority)を参照してください

以下の項目は高優先度のコード部分とみなされます:

- 認証に関わる部分:
  - ログイン機能
  - デプロイキーまたはトークン
  - パスワードリセット
- 認可に関わる部分:
  - 新しいアクセスおよび権限チェック
  - アクセス権と権限の変更
- ファイルアップロード
- 一般的な脆弱性を防ぐために新しく実装されたセキュリティチェック
- 新しい依存関係の導入

### 脅威モデリング

[脅威モデリングランブックページ](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/threat-modeling/)を参照してください。

### 所要時間の見積もり

定義されたスコープと機能の「サイズ」、およびリクエスト Issue に記載されている時間制約に基づいて、レビュアーはレビュー完了までの見積もりを提供できる必要があります。タイトな時間制約下では、タイムリーにレビューを完了するために 2 人目（またはそれ以上）のレビュアーをリクエストする場合があります。

### 準備のアウトプット

準備ステップのアウトプットは、レビュー Issue で [Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-reviews/-/tree/master/.gitlab/issue_templates/AppSec%20Review.md)（社内リンク）の `Preparation` セクションを使用してキャプチャされるべきです。テスト対象のスコープ内項目のテーブルは、テスト項目に対応するたびに最新の状態に保たれるべきです。カバレッジパーセンテージも見積もられ、対応する列に記録されるべきです。このテーブルは高レベルな概要のみで構いませんが、関連するすべてのトピックを含むべきです。テスト対象項目のさらなる精緻化は、それ以降のステップで行われます。所要時間の見積もりはテンプレートテキストに記入し、レビュー Issue の期限もレビューの予想終了日に設定すべきです。

## レビュープロセス

優先順位順にスコープ内項目を追って、レビュアーは要求されたレビューを実施します。セキュリティ関連の検出結果や懸念事項は、レビュー Issue 内の専用スレッドにキャプチャされるべきです。最初のセキュリティ上の懸念事項と検出結果をすべて Issue 内に持つことで、レビュー Issue がそのレビューサイクルにおける[単一の信頼できる情報源](https://docs.gitlab.com/ee/development/documentation/styleguide/#documentation-is-the-single-source-of-truth-ssot)になります。個々の検出結果は、開発チームと別のスレッドで議論できます。Issue が専用の詳細議論を必要とする場合は、対応するプロジェクトに別の Issue を作成して、レビュー Issue にリンクすべきです。レビュー Issue を[クローズ](#closing-the-review-issue)するためには、すべての検出結果に対応し、未解決のディスカッションについてはフォローアップ Issue を作成する必要があります。

### 検出結果の説明

各検出結果またはセキュリティ上の懸念事項は、レビュー Issue 内に独自のスレッドを持つべきです。以下のテンプレートを使用できます:

```markdown
### short description
** Severity: Informational/Low/Medium/High/Critical **

details and reproduction steps
```

見出しには Issue の簡潔な説明を含めるべきです。例えば「Reflected Cross-Site Scripting in search parameter」や「Lack of certificate validation in backend communication」などです。詳細は、Issue が明確に理解可能で、適用可能であれば妥当な労力で再現できるよう、深く掘り下げるべきです。

すべての本番コードでセキュアなツールを使用する標準が欠如または不完全であるなど、直接悪用可能ではない Issue も、レビュープロセス中の検出結果として文書化されるべきです。

### 結論

レビューが完了したら、結論セクションが [Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-reviews/-/tree/master/.gitlab/issue_templates/AppSec%20Review.md)の `Conclusion` セクションを使用して、Issue にコメントとして追加されるべきです。

結論セクションには、検出結果の簡単な要約を含み、潜在的に重要な検出結果を強調する必要があります。レビュープロセス自体が非常にうまく進んだ場合、このセクションは参加したチームメンバーの[コラボレーション](/handbook/values/#collaboration)努力を指摘するためにも使用されるべきです。

#### カバレッジ

カバレッジセクションは、スコープがどれだけよくカバーされたか、何がテストされ、何がレビューできなかったかを記録するために使用されるべきです。可能であれば、検出結果を生成しなかったテストおよびレビューステップも記録されるべきです。

#### 検出結果

検出結果セクションには、レビュー中に作成されたすべての検出結果のリストを含めるべきです。[`finding_table.rb`](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-reviews/-/tree/master/tools/finding_table.rb) スクリプトがこのためのテーブルを事前に作成しようとします。`Remediation` 列は手動で記入し、対応する修正 MR や Issue を指す必要があります。

#### 問題

レビュー中にブロッカーや問題が発生した場合、それも言及されるべきです。[結果](/handbook/values/#results)志向であり続けるために、どんな問題も今後のレビューでより良くする方法、または問題を回避する方法の提案とともに来るべきです。

#### 次のレビューサイクル

通常、レビュー対象のコンポーネントは、永久にセキュリティチェックをサインオフできる方法では完成していません。したがって、結論の最後のセクションには、フォローアップレビューの妥当な時間枠を言及すべきです。これは、機能やコンポーネントがリリースされる直前、またはコンポーネントに大幅な変更が加えられた時点である可能性があります。

#### AppSec フォローアップアクション

「X のベストプラクティスドキュメントを改善する」など、共通の使用パターンが特定された AppSec チームのフォローアップアクティビティをここにリストすべきです。AppSec フォローアップタスクごとに対応する Issue を提出し、このセクションにリンクするべきです。

## レビュー Issue のクローズ {#closing-the-review-issue}

レビューの期間中、すでに対応されている検出結果もあれば、開発チームによってまだ検討されていない検出結果もある場合があります。

レビュー Issue をクローズするには、対応する開発リポジトリに対するフォローアップ Issue または MR が存在する必要があります。フォローアップが欠けている場合、レビュアーが作成し、対応する検出結果スレッドにリンクすべきです。これらの Issue については、通常の[トリアージプロセス](/handbook/product-development/how-we-work/issue-triage/)が適用されます。
