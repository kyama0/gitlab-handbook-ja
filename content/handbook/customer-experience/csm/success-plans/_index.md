---
title: "サクセスプラン"
description: "サクセスプランに関する CSM/A の取り組み方：顧客からのすべてのリクエストとワークストリームにサクセスプランプロジェクト内のワークアイテムを作成し、すべてのワークアイテムで同じ構造を使います。"
upstream_path: /handbook/customer-experience/csm/success-plans/
upstream_sha: "52419353ea755a1ac823553385f8636ff2fcde17"
translated_at: "2026-11-01T06:49:50+00:00"
translator: codex
stale: false
lastmod: "2026-10-30T12:11:41-04:00"
---

CSM 関連のハンドブックページについては、[CSM ハンドブックのホームページ](/handbook/customer-experience/csm/)を参照してください。

---

## このように取り組む理由 {#why-we-work-this-way}

サクセスプランは、すべてのアカウントにとって唯一の情報源です。作業を 1 か所にまとめることで、顧客、アカウントチーム、GitLab の誰もが、現状と顧客にとって何が変わったかを把握できます。

これがないと、背景情報は Slack、メール、ドキュメント、記憶に分散してしまいます。その結果、多数のアカウントを管理する際に顧客の状況を見失いやすくなります。また、エスカレーション時には技術的な詳細を慌てて探し、引き継ぎ時にはアカウントの情報をゼロから再構築し、レポートが実態を反映しなくなります。私たちが顧客に提供する価値の多くも、記録されないままになります。

サクセスプランで一度作業を行えば、それが他のすべてに活用されます。

- **ミーティングの準備：** 実際の未完了項目に基づいてアジェンダを作成します。
- **引き継ぎ：** 誰かの記憶ではなく、アカウントの全履歴を利用できます。
- **健全性のスナップショットとマネージャーへの報告：** 記録された作業に基づいてエンゲージメントと健全性を評価します。
- **EBR と更新：** 記録された成果による裏付けを得られます。
- **Verifiable Outcomes：** 成功がスレッドに埋もれることなく、可視化され、追跡されます。
- **GitLab の全員：** Product、Engineering、Sales、Solutions Architects、Professional Services が、別途説明を受けることなくアカウントの履歴を開けます。
- **AI ツール：** 散在するメモの代わりに、GitLab Duo Agent Platform（DAP）や CSM/A Assistant などのツールが検索できる、構造化された的確な背景情報を提供します。

その結果、顧客にとってより良い成果につながります。アクションアイテムが文書化され、推奨事項と回答が記録され、フォローアップがオープンに管理されます。

## すべてのリクエストとワークストリームにワークアイテムを作成する {#every-request-and-workstream-gets-a-work-item}

サクセスプランは、GitLab を使って顧客のビジネス目標を達成するためのロードマップです。顧客のサクセスプランプロジェクトに配置し、顧客からのリクエストとワークストリームごとに 1 つずつ作成するワークアイテムで構成します。

Zendesk と同じように考えてください。顧客が質問したら、チケットを開き、リンクを送り、そこで対応します。イニシアチブとも呼ばれるワークストリームも同じです。

Executive Business Review（EBR）、ワークショップ、Verifiable Outcome（VO）など、すべてのサクセスプランに必須の成果物については、[サクセスプランの成果物](/handbook/customer-experience/csm/success-plans/deliverables/)を参照してください。

## 仕組み {#how-it-works}

1. **リクエストが届きます。** Slack、メール、その他のチャネルを通じた顧客からのリクエスト、新しいワークストリーム（イニシアチブ）、通話の文字起こし、自分のメモなどが該当します。
1. **Issue を開きます。** Issue が、そのリクエストのチケットになります。
1. **リンクを返信します。** Issue を顧客と共有します。
1. **Issue で協力して取り組みます。** すべての更新とコラボレーションをそこに集約します。メールも Issue 内でやり取りできます。

Slack の会話については、履歴がワークアイテムに残るよう、会話のスクリーンショットを Issue に投稿してください。

### 記録はシンプルにする {#keep-logging-simple}

サクセスプランプロジェクトは、まず顧客のためのものです。メール、タスク、ミーティングのたびに作成するのではなく、実際のリクエストやワークストリームごとにワークアイテムを開いてください。フォローアップの活動は既存のワークアイテムへのコメントとして追加し、完了したワークアイテムはクローズします。

ワークアイテムの数は顧客によって異なりますが、大規模で複雑なアカウントでも、未完了のワークアイテムは何百件にもせず、焦点を絞った数にとどめます。

## すべてのワークアイテムを構成する 4 つの要素 {#the-four-parts-of-every-work-item}

すべての Issue は、同じ 4 つの要素で構成します。たとえば、Runner の可観測性や、SAST と DAST のテストに関する顧客の質問を扱う Issue が考えられます。

| 要素 | 記載場所 | 内容 |
|---|---|---|
| 1. **概要** | Issue の説明 | ワークストリームの内容を平易な英語で説明し、Issue、チケット、ドキュメントへのリンクを含めます。 |
| 2. **成功基準** | Issue の説明 | 顧客が認識できる成果によって「完了」の状態を示します。 |
| 3. **DRI** | Issue の説明 | 責任を持つ 1 人を `@handle` で示します。 |
| 4. **更新コメント** | 新しいコメント | 通話、メール、Slack スレッドのたびに追加します。 |

### 更新：現在の状況 {#refresh-where-things-stand-now}

要素 1 から 3 は、Issue の冒頭に記載します。誰でも予備知識なしに Issue を開いて理解できるよう、作業の変化に合わせて編集してください。

### 追加：起きたこと {#add-what-happened}

要素 4 は、やり取りのたびに追加する新しいコメントです。スレッドがワークストリームの履歴になります。各更新コメントには、次の内容を含めます。

- **見出し：** 顧客、トピック、やり取りの日付。
- **出席者：** 顧客と GitLab から誰が出席したかを、役割とともに記載します。
- **ミーティングの要約：** 議論した内容、決定したこと、未解決のこと。背景情報として、以前のコメントや関連する Issue にリンクします。
- **次のステップ：** 各アクションに担当者と実施時期を記載します。顧客が担当するアクションでは、その顧客を `@` メンションします。決定事項とリスクもここに記録します。

### ワークアイテムのテンプレート {#work-item-templates}

すべてのワークアイテムは、サクセスプラン（`sp-`）の Issue テンプレートのいずれかを使って開始してください。テンプレートは[サブグループの Issue テンプレートプロジェクト](https://gitlab.com/gitlab-com/account-management/sub-group-issue-templates/-/tree/master/.gitlab/issue_templates)で管理されており、どれにも概要と成功基準のセクションが含まれています。

| テンプレート | 用途 |
|---|---|
| [`sp-success-general-planning-issue`](https://gitlab.com/gitlab-com/account-management/sub-group-issue-templates/-/blob/master/.gitlab/issue_templates/sp-success-general-planning-issue.md) | ほとんどの顧客リクエストとワークストリーム。他に適したテンプレートがなければ、ここから始めてください。 |
| [`sp-accelerator-initiative-epic`](https://gitlab.com/gitlab-com/account-management/sub-group-issue-templates/-/blob/master/.gitlab/issue_templates/sp-accelerator-initiative-epic.md) | Success Accelerator のエピック。 |
| [`sp-accelerator-initiative-general`](https://gitlab.com/gitlab-com/account-management/sub-group-issue-templates/-/blob/master/.gitlab/issue_templates/sp-accelerator-initiative-general.md) | 技術環境のディスカバリーを含む、Success Accelerator 配下のイニシアチブ Issue。 |
| [`sp-dap-activation`](https://gitlab.com/gitlab-com/account-management/sub-group-issue-templates/-/blob/master/.gitlab/issue_templates/sp-dap-activation.md) | Duo Agent Platform（DAP）のオンボーディングとアクティベーションに関する顧客向け計画。 |
| [`sp-dap-consumption-plan-internal`](https://gitlab.com/gitlab-com/account-management/sub-group-issue-templates/-/blob/master/.gitlab/issue_templates/sp-dap-consumption-plan-internal.md) | 社内専用の DAP 利用計画。この Issue は決して顧客に公開しないでください。 |
| [`sp-ebr-planning`](https://gitlab.com/gitlab-com/account-management/sub-group-issue-templates/-/blob/master/.gitlab/issue_templates/sp-ebr-planning.md) | [Executive Business Review（EBR）](/handbook/customer-experience/csm/success-plans/deliverables/#executive-business-reviews-ebrs)の計画。 |
| [`sp-feature_request`](https://gitlab.com/gitlab-com/account-management/sub-group-issue-templates/-/blob/master/.gitlab/issue_templates/sp-feature_request.md) | 顧客からの機能リクエスト。 |
| [`sp-workshop-planning`](https://gitlab.com/gitlab-com/account-management/sub-group-issue-templates/-/blob/master/.gitlab/issue_templates/sp-workshop-planning.md) | [ワークショップ](/handbook/customer-experience/csm/success-plans/deliverables/#workshops)の計画。 |

### 更新コメントの形式 {#comment-update-format}

各更新コメントには、次の構造を使ってください。

```markdown
### [Customer] | [Topic] Sync - [Month DD, YYYY]

**Attendees ([Customer]):** [Name] ([Role]), [Name] ([Role])

**Attendees (GitLab):** [Name] ([Role]), [Name] ([Role])

[Meeting type, such as a weekly cadence call or an async Slack thread. Link to the previous related comment or issue for context.]

[Meeting summary: what was discussed, what was decided, and what is still open. Write in plain language for someone who was not there.]

**Next Steps:**

- [ ] Action ([Name] @handle, [timing]): [What needs to happen]
- [ ] Action ([Customer name] @customer-handle, [timing]): [What the customer owns]
- [ ] Risk: [Anything that could block or change the outcome]
- [ ] Blocker: [Anything currently preventing progress, and who can unblock it]
- [ ] Question: [Anything open that needs an answer, and who needs to answer it]
- Decision: [Anything agreed during the interaction]
```

以前のやり取りから持ち越したアクションは、新しいコメントにも記載し、最初に記録したコメントにリンクしてください。完了したアクションにはチェックを付けます。

## プロジェクトの基本要件 {#project-baseline}

すべてのサクセスプランプロジェクトは、これらの基本チェックを満たす必要があります。[CSM/A Assistant](#tools-and-help)の `project-baseline` スキルを使って、いつでも実行できます。

1. **メンバーは Guest とし、それより上のロールにしません。** Guest より上のロールを持つ直接メンバーはダウングレードします。グループレベルのアクセスを確認するツールはないため、手動で確認してください。
1. **重複したプロジェクトを開いたままにしません。** 命名規則に合致するプロジェクト、または未完了の活動が多いプロジェクトを残し、もう一方をアーカイブします。
1. **Wiki と README はテンプレートに合わせます。** 空白の Wiki ページや、README 内の `[SQUARE BRACKET]` のプレースホルダーを残さないでください。

## サクセスプランのライフサイクル {#success-plan-lifecycle}

サクセスプランは顧客のジャーニー全体にわたります。CSM の役割がどこに当てはまるかを以下に示します。

| フェーズ | リード | 内容 |
|---|---|---|
| **プリセールス** | SA + AE | 顧客の目標が文書化され、GitLab の価値実証に使用されます。[相互顧客サクセスプランプロセス](/handbook/solutions-architects/processes/customer-success-plan/)を参照してください。 |
| **ポストセールス / オンボーディング** | CSM | CSM が目標をレビューし、正確性を検証し、有効化と実装のためのイニシアチブを追加します。次に何をするか、誰が担当するかについての完全な合意。 |
| **継続的なエンゲージメント** | CSM | サクセスプランはすべての[ケーデンスコール](/handbook/customer-experience/csm/cadence-calls/)と[ビジネスレビュー](/handbook/customer-experience/csm/ebr/)の基軸となります。ケーデンスコールが週次の進捗を促し、ビジネスレビューが戦略を評価し新しい目標を発掘します。 |

サクセスプランの作成に役立つディスカバリーの質問については、[サクセスプランディスカバリーのための質問とテクニック](/handbook/customer-experience/csm/success-plans/questions-techniques/)を参照してください。

## Gainsight {#gainsight}

サクセスプランが唯一の情報源です。Gainsight はそれを反映し、ビジネス全体のパターン分析を可能にします。

EBR とワークショップは、サクセスプランで計画し、追跡します。当面は、実施後に Gainsight にも記録してください。詳細は、[サクセスプランの成果物](/handbook/customer-experience/csm/success-plans/deliverables/)を参照してください。

Gainsight ワークフローの詳細なガイダンスについては、[CSM としての Gainsight の使用](/handbook/customer-experience/csm/gainsight/)を参照してください。

## ツールとヘルプ {#tools-and-help}

CSM/A Assistant は、Claude デスクトップアプリ用のプラグインです。claude.ai のウェブサイトでは動作しません。インストールと設定については、GitLab Claude プラグインマーケットプレイスの [CSM/A Assistant プラグイン](https://gitlab.com/gitlab-com/marketplace/-/tree/main/sales/customer-experience/customer-success/csma)を参照してください。

質問は、Slack の [`#cx-collab-proj-success-plan-questions`](https://gitlab.enterprise.slack.com/archives/C0BFC7KLA3V) チャンネルで尋ねてください。
