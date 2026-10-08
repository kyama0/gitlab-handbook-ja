---
title: "Self-Managed Database Experience チーム"
description: "Self-Managed Database Experience チームは、セルフマネージドのお客様にデータベースの状態を把握する手段、より高速なデータベースマイグレーション、明確なアップグレード経路を提供します。"
upstream_path: /handbook/engineering/data-engineering/database-excellence/self-managed-database-experience/
upstream_sha: "e8a5a866cb11056dc11bec53f53747ceddafc748"
lastmod: "2026-10-08T20:28:57+13:00"
translated_at: "2026-10-08T21:04:47+00:00"
translator: codex
stale: false
---

Self-Managed Database Experience チームは、[Database Health](/handbook/engineering/data-engineering/database-excellence/database-health/) チームのセルフマネージドを担当していた部分と、別の Database Migrations チームが担当する予定だったアップグレードおよびマイグレーションの業務を統合し、2026 年 9 月に発足しました。

## 対象範囲 {#scope}

### データベースの状態の可視化 {#database-state-visibility}

私たちは、セルフマネージドの管理者がデータベースの状態を把握できるようにし、安心してアップグレードし、アップグレードの間もデータベースの健全性を維持できるようにします。アップグレード前には、データベース、そのオブジェクト、設定の整合性をチェックします。アップグレードの間には、データベースのパフォーマンスと動作をチェックします。データベースの健全性と各問題の重大度を、管理者とサポートがプロダクト内の 1 か所で確認できるようにします。問題の検出は、私たちが責任を持って提供するものです。可能な場合は、見つかった問題を解決できるように管理者を案内するか、自動的に修正します。その結果、アップグレードの失敗、データベースのインシデント、データベース関連のサポートチケットが減少します。

### 依存関係グラフによるマイグレーション {#dependency-graph-migrations}

私たちはデータベースのマイグレーションを高速化し、セルフマネージドのお客様のアップグレードにかかる時間を短縮します。マイグレーションは正しい順序で実行し、独立したマイグレーションは同時に実行します。マイグレーション作業の大半をメンテナンス時間帯より前に移し、ダウンタイムを短くします。お客様は中間バージョンを経由せず、目的のバージョンに直接アップグレードできます。各アップグレード後もデータが正しい状態に保たれることを保証します。

### アップグレード経路 {#upgrade-path}

私たちは、セルフマネージドの管理者によるアップグレード計画を支援します。アップグレード経路を、アップグレードで実行するマイグレーションおよびその複雑さとともにプロダクト内に表示します。この情報は一般的な推定ではなく、インスタンス自体のデータに基づいているため、管理者はマイグレーションにかかり得る時間と、どのマイグレーションがパフォーマンスに影響し得るかを把握できます。そのうえで、管理者は安心してメンテナンス時間帯を計画できます。その結果、アップグレード中の予期せぬ遅延と、アップグレード関連のサポートチケットが減少します。

## チーム {#team}

チームは、PostgreSQL と Rails のマイグレーションに関する豊富な経験を持つバックエンドエンジニアで構成されています。役割にかかわらず、すべてのチームメンバーは他の Database Excellence チームとともに、データベースレビュー、オンコールローテーション、運用上のニーズへの対応を含むステージレベルの責任を共有します。

{{< group-by-slugs nbelokolodov amsingh6 imanpalsingh krasimirangelov >}}

## プロジェクト管理プロセス {#project-management-process}

私たちのチームは、Scrum を組み合わせた手法でプロジェクトを管理します。このプロセスは GitLab の[月次マイルストーンのリリースサイクル](/handbook/engineering/releases/monthly-releases/)に従います。

- 私たちは Issue ボードだけを基に作業します。Issue ボードが唯一の信頼できる情報源です。
- 私たちは Issue を次のワークフローステージへ継続的に移動します。
- 私たちはプロダクトとエンジニアリングの両方のイニシアチブに取り組みます。
- 私たちは取り組むすべての Issue に優先順位を付け、見積もります。
- 私たちは各月次マイルストーンの開始前に計画を立てます。
- 私たちは毎週チェックインを行い、チーム内で最新情報を共有します。

### ワークフロー {#workflow}

[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/#workflow-summary)の以下のビルドステージラベルを使用します。

| ラベル | 用途 |
| --- | --- |
| `~"workflow::planning breakdown"` | エンジニアが Issue を分解して[見積もり](#estimation)できる状態になったとき、Product Manager（PM）が付けます。 |
| `~"workflow::ready for development"` | Issue の分解とスケジュール設定が完了したとき、Engineering Manager（EM）または PM が付けます。 |
| `~"workflow::in dev"` | ドキュメント作成を含め、Issue の作業を開始したとき、エンジニアが付けます。 |
| `~"workflow::in review"` | Issue に関連するすべての MR がレビュー中になったとき、エンジニアが付けます。 |
| `~"workflow::verification"` | MR がマージされ、変更をステージングまたは本番環境で検証する必要があるとき、エンジニアが付けます。 |
| `~"workflow::complete"` | 変更を検証したとき、エンジニアが付け、Issue をクローズします。 |
| `~"workflow::blocked"` | 技術的な問題、未解決の質問、他のチームへの依存などにより Issue がブロックされているとき、いずれかのチームメンバーが付けます。 |

### マイルストーンの計画とタイムライン {#milestone-planning-and-timeline}

私たちの成果は [GitLab セルフマネージドのリリースサイクル](https://about.gitlab.com/upcoming-releases/)に沿ってリリースされるため、[プロダクト開発のタイムライン](/handbook/engineering/workflow/#product-development-timeline)に従います。現在のマイルストーンの最後の 2 週間で、次のマイルストーンを計画します。次のマイルストーンが始まると、開発を開始します。

#### 計画と分解のフェーズ {#planning-and-breakdown-phase}

このフェーズは、現在のマイルストーンが終わる 2 週間前に始まります。

1. 初期計画
    1. PM: マイルストーン計画の Issue を作成し、マイルストーンの目標とテーマを追加します。
    1. PM: プロダクトの Issue を追加し、優先順位を付けます。
    1. EM: エンジニアリングの Issue と優先度の高いバグを追加し、優先順位を付けます。
    1. EM と PM: 計画 Issue に記載された Issue だけがマイルストーンに含まれていることを確認します。
1. 分解とウェイトの設定
    1. EM: 設定から 6 か月を超えたウェイトを削除し、ウェイトが未設定の Issue を `~"workflow::planning breakdown"` に移動します。
    1. エンジニア: 解決策の提案がなければ追加し、自分の[見積もり](#estimation)を追加し、質問し、ブロッカーへのリンクを追加し、必要に応じて Issue を分解します。
    1. EM: 見積もり済みの Issue を `~"workflow::ready for development"` に移動します。
1. 最終計画
    1. EM: 現在のマイルストーンから持ち越される可能性の高い Issue を追加します。
    1. EM と PM: ウェイトに基づいて Issue を追加または削除します。
    1. EM: [次のマイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/11667448?milestone_title=Upcoming&label_name[]=group%3A%3Adatabase%20health)で Issue に優先順位を付けます。
    1. EM と PM: 現在のマイルストーンの最後のチーム同期ミーティングで計画を提示します。

#### 開発フェーズ {#development-phase}

このフェーズは、新しいマイルストーンの初日に始まります。

- エンジニアは、関心と経験に基づき、[現在のマイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/11648246?milestone_title=Started&label_name[]=group%3A%3Adatabase%20health)の Issue を優先順位に従って自分に割り当てます。
- Issue が残っていない場合、エンジニアはまず他のエンジニアが担当している Issue を手伝います。手伝うことがなければ EM に伝え、EM が次のマイルストーンから Issue を追加します。

#### マイルストーンのコミットメント {#milestone-commitment}

マイルストーンのコミットメントは、そのマイルストーンで完了することを目指す Issue の一覧です。私たちは[野心的に計画を立てる](/handbook/product/product-principles/#how-this-impacts-planning)ため、必ずしもすべてを提供できるわけではありません。

#### 期限 {#due-dates}

私たちは、提供予定時期をステークホルダーに伝えるために、Issue に期限を追加することがあります。期限はチームにプレッシャーをかけるものではありません。また、イテレーションに時間の上限を設けるためにも期限を使用します。たとえば、期限を 1 か月ではなく 1 週間にすると、より小さなイテレーションを見いだすのに役立ちます。

### 見積もり {#estimation}

私たちは Issue を非同期で見積もります。今後のマイルストーンに予定されている各 Issue に、初期ウェイトを設定します。

- 各 Issue には 2 件の見積もりが必要です。見積もりへの ➕ リアクションは同意として扱います。マイルストーン中に発生した Issue や、必要な知識を持つエンジニアが 1 人しかいない Issue は例外です。
- 2 件の見積もりが一致した場合、2 人目のエンジニアがウェイトを設定します。一致しない場合、2 人目のエンジニアが 1 人目のエンジニアをメンションして調整します。
- Issue に解決策の提案がない場合、または見積もりで別の解決策を提案する場合は、見積もりに解決策の提案を含めます。スパイクは例外で、デフォルトのウェイトは 8 です。
- 不明点が多い Issue は、高めに見積もります。

私たちは予測可能性よりも速度を重視します。見積もりは、[MVC](/handbook/values/#minimal-valuable-change-mvc)に集中し、見落としを見つけるのに役立ちます。予測可能性の目標は 90% ではなく 70% です。

[ウェイト未設定の今後の Issue](https://gitlab.com/groups/gitlab-org/-/issues?sort=created_date&state=opened&label_name[]=group::database+health&weight=None&milestone_title=Upcoming)を参照してください。

#### 見積もりの例 {#estimation-examples}

| ウェイト | 定義 | 例 |
| --- | --- | --- |
| 1 | 考えられる最も単純な変更です。副作用がないことを確信しています。 | 未定 |
| 2 | コードの変更が最小限の単純な変更です。すべての要件を理解しています。 | 未定 |
| 3 | 多数のファイルやテストなど、コード上の変更範囲が大きい単純な変更です。要件は明確です。 | 未定 |
| 5 | コードベースの多くの領域に影響し、リファクタリングを含む可能性がある複雑な変更です。要件は理解していますが、いくらかの見落としがあると想定しています。 | 未定 |
| 8 | スパイクにのみ使用します。ウェイトが 5 を超えると見込まれる Issue は、より小さく分割する必要があります。 | 未定 |

#### 見積もりテンプレート {#estimation-template}

エンジニアは Issue に見積もりを追加する際、このテンプレートを使用できます。

```markdown
### Refinement / Weighing

**Ready for Development**: Yes/No

<!--
Is the issue clear? Is it small enough, or can we break it into smaller issues? If so, how?
-->

**Weight**: X

**Reasoning**:

<!--
How can we break down this issue? Which code changes does it need? Link to prior art and similar examples.
-->

**Iteration MR/Issues Count**: Y

<!--
Can we split the issue into smaller issues or MRs? List them, and note any caveats.
-->

**Documentation required**: Yes/No

<!--
Do we need to add or change documentation?
-->
```
