---
title: "Issue プロジェクト管理ガイドライン"
upstream_path: /handbook/marketing/project-management-guidelines/issues/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-28T17:30:01+02:00"
---

## 背景

[Issue](https://docs.gitlab.com/ee/user/project/issues/)は GitLab の中核的な構成要素で、コラボレーション、ディスカッション、計画、作業の追跡を可能にします。

Issue は通常、以下の目的で使用されます

- 特定のトピックに関するディスカッションをサポート
- 新機能の要件を定義
- 特定の成果物に関する作業を組織化
- 特定のワークフロー（例: システムへのアクセスをリクエスト、別のチームからのコミットメントを得る、等）を管理
- イベントやキャンペーンの一側面を計画する。

Issue は GitLab で非常に多くの目的と役割を果たすため、それらが存在する場所と、それらを最良に活用する方法を理解することは非常に重要です。

### 知っておくべき重要事項

#### Issue はプロジェクトのスコープで定義されます。グループではありません

1. Issue はプロジェクトに**のみ**存在します。グループは Issue を管理するボードや Issue リストを持っていますが、Issue は**常に**そのグループに従属するプロジェクトに保存されます。
1. GitLab グループは Issue を**持ちません**。グループは **Epic** を持ちます。

#### Issue の説明

Issue の最上部セクションは Issue の本文 - 「Description」（説明）です。「Description」には、Issue の中核的なテーマやトピックがキャプチャされます。長い Issue の説明を見ることは珍しくなく、これらは Issue の最新のステータスをキャプチャするために使用されます。

Issue のディスカッションは長く流動的になるため、しばしば説明を最新の/最も新しい内容に更新するのがベストプラクティスです。

#### Issue の詳細

[Issue](https://docs.gitlab.com/ee/user/project/issues/)には以下のような多くの詳細部分があります:

- [タイムトラッキング](https://docs.gitlab.com/ee/user/project/time_tracking.html)
- [重み](https://docs.gitlab.com/ee/user/project/issues/issue_weight.html)
- [参加者と通知](https://docs.gitlab.com/ee/user/profile/notifications.html)
- [メンション](https://docs.gitlab.com/ee/user/discussions/index.html#mentions)
- [関連 Issue](https://docs.gitlab.com/ee/user/project/issues/related_issues.html)
- [関連マージリクエスト](https://docs.gitlab.com/ee/user/project/issues/crosslinking_issues.html#from-merge-requests)
- [コメント](https://docs.gitlab.com/ee/user/discussions/index.html)
- [Zoom ミーティング](https://docs.gitlab.com/ee/user/project/issues/associate_zoom_meeting.html)

#### Issue テンプレート

各プロジェクトでは、異なる状況や問題に対する一般的な Issue を簡単に作成できるよう、「Issue テンプレート」のセットを定義できます。[Issue テンプレートの作成方法を学ぶ](https://docs.gitlab.com/ee/user/project/description_templates.html#create-an-issue-template)

#### デザインとデザインディスカッション

Issue は、[デザイン管理](https://docs.gitlab.com/ee/user/project/issues/design_management.html#overview)を通じて、画像とデザインに関するディスカッションを可能にしサポートします。デザイン管理は、グラフィックやデザイン作業を非同期にレビューする際に非常に役立ちます。

#### クイックアクション

Issue、マージリクエスト、Epic はすべて、Issue、MR、Epic の主要なアクションをトリガーするキーボードショートカットを使用する機能をサポートしています。

[クイックアクション](https://docs.gitlab.com/ee/user/project/quick_actions.html)は、以下のように Issue を変更しやすく効率化するコマンドです:

- `/label` の後にラベル名を続けるとラベルが追加されます。
- `/assign` の後にユーザー ID を続けると、Issue が人に割り当てられます
- `/close` で Issue がクローズされます
- `/duplicate` の後に Issue 番号を続けると、現在の Issue が重複としてクローズされ、所与の（オープンの） Issue にリンクされます
- `/epic` の後に Epic ID を続けると、Issue が Epic に割り当てられます

など。

#### コンフィデンシャル Issue

Issue はオープンまたはコンフィデンシャルのいずれかにできます。

デフォルトでパブリック Issue とし、迷う場合は[非公開コミュニケーションのガイダンス](/handbook/communication/confidentiality-levels/#not-public)を使って判断してください。

#### タスクリスト

Issue の説明やコメントを書くために使用される Markdown 言語では、[**チェックボックス**として機能する項目のリスト](https://docs.gitlab.com/ee/user/markdown.html#task-lists) - `tasks` のリストを作成することが可能です

`task lists` は「チェックオフ」できる項目の比較的シンプルなリストであることを認識してください。

#### 関連 Issue とブロッキング Issue

Issue 間の相互依存性を管理するために、Issue 間にいくつかのタイプの関係性を作成することが可能です:

1. シンプルな関係性。1 つの Issue が別の Issue に単純に関連しており、相互依存性がない場合。
1. ブロック。1 つの Issue が別の Issue の完了を妨げる場合。
1. ブロックされている。Issue が別の Issue に依存している場合。

Issue の関係性により、1 つの Issue が完了する前に次の Issue を完了する必要があるという順次的な要件があるタスク/Issue のシリーズを作成することが可能です。

### 既知の制限

1. 1 つの Issue は複数のマイルストーンに追加できません。

## ガイドライン

### Issue テンプレートを使用する

チーム/プロジェクトが必要とする反復的なタイプの Issue に対して、Issue テンプレートを定義し使用してください。

Issue テンプレートは、次のような URL を通じて直接アクセスできます
`https://gitlab.com/gitlab-com/marketing/strategic-marketing/product-marketing/-/issues/new?issuable_template=A-SM-Support-Request`

URL の前半はプロジェクトへのリンクで、その後 `new?issuable_template=` の後にテンプレート名が続きます。

Issue テンプレートではクイックアクションを使用して、Issue が適切な `labels`、`epics`、`milestones` と関連付けられるようにしてください。

### 単一の DRI を示す

DRI は[直接責任を持つ個人 (Directly Responsible Individual)](/handbook/people-group/directly-responsible-individuals/)を意味します。そのため、Issue は DRI が完了する明確な成果物を表すべきです。複数のチームメンバーから作業が必要で、特定のタスクが異なる時間間隔で必要な場合、ほとんどの場合、各チームメンバーからの成果物を明確にするために、Issue を複数の Issue に分割するべきです。

例えば、ランディングページ用のコピーが必要で、別のチームメンバーがページを作成する場合、依存関係を明確に示し、各アクション（コピーと別個にランディングページの作成）に対して明確な DRI を持ってマイルストーンを正しく適用できるよう、コピー作成のための Issue と about.gitlab 上のページ作成のための Issue があるべきです。

### Issue の説明を最新に保つ

Issue のディスカッションは長く徹底的になることがあります。ベストプラクティスとして、Issue の説明を最新のステータスと情報に更新してください。例えば、ディスカッションスレッドがより良い回答や説明の改善された部分につながった場合、説明を更新してください。Issue の現在のステータスを理解するために、全員にスレッド全体と履歴を読むことを強制しないでください。

Issue は説明の変更履歴を保持するので、意味があるときに説明を更新してください。


{{% alert color="info" %}}
<i class="fas fa-info-circle" aria-hidden="true" style="color: rgb(49, 112, 143)
;"></i> ヒント！「最新の更新」を明確にハイライトするヘッダーを使用すると、会話で最後に合意された内容を任意の閲覧者に素早く明確に示すことができます。
{{% /alert %}}


### Issue の重みを設定する

Issue の重みは、Issue 内のタスクに対して相対的にできます。Issue の重みは、Issue 内のタスクを完了するのに必要な時間の見積もりです。

| 時間                     | 重み     |
|----------------------    |--------    |
| <4 時間                 | 0          |
| 4 時間 / 半日     | 1          |
| 8 時間 / 1 日          | 2          |
| 12 時間 / 1.5 日      | 3          |
| 16 時間 / 2 日        | 4          |

[クイックアクション](#quick-actions) `/weight <値>` を使って重みを定義できます。

### タスクリストの使用は控えめに

一般的に、Issue 内では、非常にシンプルなタスク、検証、承認ステップを定義する場合を除き、Markdown のタスクリストの使用は避けてください。[非自明なタスクはすべて Issue であるべきです](#every-task-should-be-an-issue)。

### すべてのタスクは Issue であるべき

マーケティングプログラムに関連するすべての非自明なタスクは、別の Issue の説明内のタスクリストではなく、Issue として記録するべきです。

作業単位として解釈される場合、Issue はより良い計画と説明責任を可能にします。特に、スケジューリングのためにマイルストーンに追加でき、ワークロードと容量を評価できます。この点で、Issue は特定のタスクのみの完了に焦点を当てた専用 Issue を持つことで、イテレーションアプローチにも貢献します。

### タスクを記述する説明的で簡潔な Issue タイトルを使用する

一目で、誰もが Issue タイトルを読むことで手元のタスクの基本的な理解を持ち、より多くのコンテキストが必要な場合に説明を掘り下げることができるべきです。これは、GitLab.com 上やメール上の Issue リストを効率的にスキャンすることに貢献できます。

一般的に、ほとんどの Issue タイトルは、完了するべき作業の単位としてタスクを記述するべきです:

- ✔ "about.gitlab.com 上の既存の動作フローを文書化" => タスクと期待される成果を明確に記述
- ✘ "Ultimate ユーザー" => タスクや期待値の明確な指示を提供しない
