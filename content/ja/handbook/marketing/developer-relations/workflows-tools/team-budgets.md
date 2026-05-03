---
title: "Developer Relations ワークフロー: チーム予算"
upstream_path: /handbook/marketing/developer-relations/workflows-tools/team-budgets/
upstream_sha: 2d678e92f3fbc59843a2973bbfa95041c6aef07f
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
---

## <i class="fas fa-receipt" id="biz-tech-icons"></i> チーム予算

**チーム予算の管理には [Allocadia](https://www.uptempo.io/allocadia/) を使用しています。** Marketing チームに割り当てられているシート数の制約により、Developer Relations チームから当該ツールにアクセスできるのは限られた人数のみです（Okta からのサインインが必要）。アクセス権を持つメンバーは、フォーキャストが Allocadia に正しく登録されるよう Developer Relations チームと連携する責務を負います。

**四半期予算プランニング Issue。** 各四半期が始まる際、Developer Relations チームは Community Ops プロジェクト内の [`quarterly_budget_plan` Issue テンプレート](https://gitlab.com/gitlab-com/marketing/community-relations/community-operations/community-operations/-/blob/main/.gitlab/issue_templates/quarterly_budget_plan.md) を使って[新しい Issue](https://gitlab.com/gitlab-com/marketing/community-relations/community-operations/community-operations/-/issues/new) を作成します。

**年間予算プランニング Issue。** 翌年に向けた準備として、Developer Relations チームは新しいエピックを作成し、四半期プランニング Issue とリンクします。

**現在のエピック:** [FY22 Developer Relations Budget Planning](https://gitlab.com/groups/gitlab-com/marketing/community-relations/community-operations/-/epics/4)。

### Allocadia 回避策

コラボレーションを容易にするための回避策として、Allocadia へのアクセス権を持つメンバーが定期的に予算を Google スプレッドシートにエクスポートしています。`Export current view` をクリックして Developer Relations 予算をダウンロードします。これらのエクスポートは、実支出を照合する月次のタイミングで行われます。チームメンバーがより新しいスナップショットを必要とする場合、#developer-relations Slack チャンネルで `@johncoghlan` をメンションしてエクスポートを依頼してください。

GitLab チームメンバーは、Google ドライブで `FY22 Developer Relations Budget export` ドキュメントを検索することで、エクスポートされた Developer Relations 予算を確認できます。

### 年間予算の作り方

GitLab の他のチームと同様に、Developer Relations チームは各サブプログラムに必要なコストをカバーするため、年間予算を提案します。この年間予算の合計は Marketing リーダーシップおよび e-group に提案され、承認を得ます。

承認後、Developer Relations チームは、年間予算合計のうち各四半期にどれだけ支出するか、可能であれば各支出が発生する月までフォーキャストします。年間予算合計は、e-group の承認を伴う特別な状況を除いて変更できません。

### 再配分と調整

四半期間でのフォーキャスト調整（ある四半期から別の四半期への予算移動）は、その四半期のフォーキャストが確定するまで可能です。確定は前四半期の最終日に行われます（例: FY22 Q2 のフォーキャストは 4 月 30 日が期限）。

ある四半期のフォーキャストが確定すると、その四半期の支出に対するそれ以上の調整は許可されません。たとえば、その四半期のフォーキャスト額が使い切られなかった場合、その額は「失われ」、別の四半期に再配分することはできません。

ラインアイテム単位の調整は、四半期フォーキャスト確定後でも可能です。実施するには、Developer Relations チームの場合 `@johncoghlan` にリクエストを提出し承認を得る必要があります。

### 経費と実支出の管理

毎月、Developer Relations チームのプログラムマネージャーは、Finance のパートナーと月次の `Developer Relations Accruals` ミーティングで実際の月次経費をレビューします。このプロセスにより、チームの支出と予算フォーキャストの差を正確に報告できます。

5,000 ドルを超えるコストは、該当する Community Program Manager によって、所定の期間にわたって月ごとに按分されます。

5,000 ドル未満のコストは、時間配分する必要はなく、一括で予算から差し引かれます。

#### Community チームの調達

ほとんどの調達リクエストには Coupa を使用します。詳細については [Procurement Process ハンドブック](/handbook/finance/procurement/#how-to-start-procurement-process) を参照してください。

すべての請求書には PO 番号が必要なので、ベンダーには請求書に含める適切な PO 番号を伝える必要があります。PO 番号は Procurement チームによって割り当てられます。正しい PO 番号なしで受領した請求書は拒否され、関連する PO 番号を含めて再提出されなければなりません。質問は Slack の `#procurement` で Procurement チームに問い合わせてください。

これまでに当チームに付与された PO 番号は次のとおりです:

* EDU/OSS: `PO #40`

**調達 Issue を作成する際に、Allocadia ID 番号を尋ねられることがあります。** この ID を取得するには、Allocadia アクセス権を持つ誰かにラインアイテムの詳細を入力してもらってください。それが完了すると、詳細パネル左上の `Line Item ID` の箇所に ID が入力されます。

#### swag 配布経費の追跡

Finance チームがコミュニティの swag 配布を追跡しやすくするため、Developer Relations プログラムやイベントを支援する Printfection 上の配布キャンペーンには、キャンペーン名のプレフィックスとして `Community:` を付けてください。例: `Community: GitLab Heroes + Superheroes Swag`。

予算における支出は、キャンペーンタグ `swag_community` で追跡しています。

Printfection 上のコミュニティプログラムキャンペーンには、定期的なメンテナンスコストがかかります。Printfection は固定のプリペイド金額単位で発送と取扱を行うため、頻繁に課金されることはありませんが、運用しているキャンペーンのコストとして発生します。

### コミュニティイベントのスポンサーシップ

スポンサーシップリクエストの取り扱いについての詳細は、Events ハンドブックページの [Suggesting an Event](/handbook/marketing/events/#suggesting-an-event) セクションを参照してください。
