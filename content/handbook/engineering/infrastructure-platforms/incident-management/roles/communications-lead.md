---
title: Incident Roles - Communications Lead
upstream_path: /handbook/engineering/infrastructure-platforms/incident-management/roles/communications-lead/
upstream_sha: 1268785362042c88e891d4f2270f8ad87cd6b6ad
translated_at: "2026-08-06T06:38:11+09:00"
translator: claude
stale: false
lastmod: "2026-08-05T09:00:30-04:00"
---

## ロールの割り当て

Communications Lead は必要に応じて別途アサインされ、自動的にページングされるわけではありません。Incident Leads がデフォルトでこのロールを担う場合があります。

| プラットフォーム | ロール |
|----------|------|
| **GitLab.com** | Communications Managers On Call (CMOC) |
| **Dedicated** | GitLab Dedicated Communications Manager On Call (GDCMOC) |

## 主な責任

Communications Lead はインシデント中のコミュニケーションの 3 つの主要領域を管理します。

### 顧客向けコミュニケーション

インシデントのステータスアップデート、顧客に必要なアクション、および適用可能な場合の法的通知を含みます。
**注意**: 公開 RCA はこのロールのスコープ外であり、[RCA プロセスを通じて](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/runbooks/on-call.md?ref_type=heads#external-rcas)対応されます。

顧客向けコミュニケーションを検討する際は、[R&D 向け顧客コミュニケーションハンドブック](https://internal.gitlab.com/handbook/engineering/r-and-d-pmo/knowledge-base/all-articles/customer-comms/)に従ってください。

### 内部コミュニケーション

Communications Lead はインシデント中の内部コミュニケーションも担当し、GitLab 内の情報フローの中心的な調整ポイントとして機能します。このロールは、戦術的なステークホルダーが質問、アップデート、調整のための明確なチャンネルを持てるようにします。

**注意**: 例外は e-group のコミュニケーションで、これは [Infrastructure Liaison](../#tier-2) が監督します。

**情報調整**: Communications Lead は顧客に共有された情報を把握し、社内チームが現在のステータスを理解していることを確認します。これには、影響を受けた顧客の詳細を共有し、異なる社内グループ間でのメッセージングを調整することが含まれます。

**チャンネル管理**: インシデントが複数の Slack チャンネルやコミュニケーションスレッドに関わる場合、Communications Lead は情報の適切な整理とフローを確保します。これには、ステークホルダーを適切なチャンネルに誘導すること、重複する議論を統合すること、Incident Responders がどこでアップデートを提供するべきか把握していることを確認することが含まれます。

**ステークホルダーガイダンス**: Customer Success Managers (CSMs)、Support teams、その他のステークホルダーは質問や最新情報を入手できる場所を把握する必要があります。Communications Lead はこれらの経路を確立して伝達し、質問が適切な担当者に届き、回答が効果的に返ってくるようにします。

**クロスチーム調整**: Communications Lead は、技術的な Incident Responders と顧客対応チームの間のコミュニケーションギャップを埋め、技術的なアップデートを CSMs と Support が顧客と対話する際に使用できる情報や運用手順（例:「関連する Issue にこのタグを付ける」）に翻訳します。

### ステータスページ管理

**GitLab.com** のインシデントの場合、Status.io 経由で [status.gitlab.com](https://status.gitlab.com/) に定期的なアップデートを行います。**Dedicated** のインシデントの場合、Switchboard Communications ページにアップデートを行います。

## 詳細なワークフロー

### 公開インシデントコミュニケーションの頻度

Communications Lead はプラットフォームによって異なる定期的なアップデートスケジュールを維持します。

#### GitLab.com

コミュニケーションは[確立された頻度ガイドライン](/handbook/support/workflows/cmoc_workflows/#frequency-of-updates)に従い、アップデート内容について Incident Manager と調整します。Status.io でインシデントを作成するには、Slack で `/woodhouse incident post-statuspage` を使用します。手動アップデートは[こちらの手順](/handbook/support/workflows/cmoc_workflows/#stage-2-manage)に従います。

#### Dedicated

**S1/S2 インシデント**では、60 分ごとにアップデートを提供します。コミュニケーションを集中させる緊急チケットを顧客が開いていない場合は、[アウトリーチチケットを作成します](/handbook/support/workflows/dedicated_cmoc/#keep-the-customer-informed)。顧客と別途取り決めがない限り、60 分ごとに継続的なアップデートメッセージを送ります。アップデート情報を収集するために、Incident Manager との 5〜10 分の同期呼び出しを通じて調整します。

### ステータスページ管理プロセス

**インシデント作成**は顧客への影響が確認され次第すぐに開始します。Communications Lead は適切なステータスページにインシデントを作成しますが、公開コミュニケーションを行う前には必ず Incident Responder(s) および Incident Manager と調整します。影響の全体的なスコープを把握する前にコミュニケーションを急ぐことを避けることが重要です。

**定期的なアップデート**は重大度に応じた一貫したペースを維持し、顧客への即時通知と実用的な情報の提供に重点を置きます。詳細な技術情報はフォローアップのコミュニケーションで提供できます。

**解決のコミュニケーション**はインシデントが解決されたことを明確に伝え、顧客に必要なフォローアップアクションを提供し、顧客が追加情報を見つけられる場所を案内します。

### 一回限りの顧客コミュニケーション

これらのコミュニケーションについては、[R&D 向け顧客コミュニケーションハンドブック](https://internal.gitlab.com/handbook/engineering/r-and-d-pmo/knowledge-base/all-articles/customer-comms/)に従ってください。

バグ通知や外部コミュニケーションなどの特別なコミュニケーションの場合、プロセスには起草、承認、配信フェーズが含まれます。

**起草プロセス**では、インシデントの詳細に基づいて顧客向けコミュニケーションを起草し、顧客への影響と必要なアクションに焦点を当てます。

**承認プロセス**では、必要に応じて Legal、Corporate Communications、その他のステークホルダーと調整する必要があります。[リスクレベルガイド](https://internal.gitlab.com/handbook/engineering/r-and-d-pmo/knowledge-base/all-articles/customer-comms/risk-levels/)は必要な承認者の判断に役立ち、[承認者グリッド](https://internal.gitlab.com/handbook/engineering/r-and-d-pmo/knowledge-base/all-articles/customer-comms/approver-grid/)で該当者を確認できます。

**配信とフォローアップ**では、CS Ops、Marketing、関連チームと配信を調整します。送信したコミュニケーションをフィールドチームに通知し、配信と顧客の反応を追跡します。

### 内部コミュニケーション管理

**質問収集**では、インシデントチャンネルで社内からの質問を監視し、質問をインシデント Issue のプライベートコメントとして追加し、よくある質問を収集して整理します。

**情報共有**では、公開 Issue のプライベートコメントとして共有される社内 FAQ ドキュメントを作成します。**Dedicated** インシデントの場合は、顧客チャンネルのスレッドを管理してコミュニケーション Issue に質問を誘導し、一貫したメッセージングを確保するためにサポートチームと調整します。

**ステークホルダー調整**では、インシデントのステータスを GitLab のステークホルダー（Customer Success、Community team、Support）に通知し、送信した顧客コミュニケーションについて定期的なアップデートを提供し、顧客固有の懸念事項についてフィールドチームと調整します。

### 顧客コール管理

インシデント中に顧客が同期的なコミュニケーションを要求する場合があります。具体的な状況に応じて、Communications Lead は（顧客サポート、アカウントチーム、SRE と協議の上）同期コミュニケーションが顧客の懸念を解決するための最善の選択肢かどうかを判断します。

#### 顧客コールが必要な場合

**Dedicated** インシデントでは、インシデントが非常に影響が大きく、長期間にわたる場合、または両方の場合に、顧客が自身のステークホルダーやリーダーシップに情報を提供するために必要なものを提供できるためコールが有効な場合があります。**GitLab.com** インシデントでは、単一の顧客に大きな影響がある場合に通常、ケースバイケースで評価されます。一般的なトリガーは、直接的な顧客とのやり取りがインシデントの解決または特定の顧客の懸念への対応に役立つ場合です。

#### 顧客コールにおける Communications Lead の役割

Communications Lead は、情報を共有し、フィードバックを収集し、内部で調整するために事前に合意された時間、顧客コールに参加します。

主な目的は**顧客への情報共有**であり、現在のインシデントステータスと緩和努力を説明し、以前に収集した顧客の質問に応答し、顧客向けに適切な明確かつ非技術的なアップデートを提供することが含まれます。

コールでは、顧客から**情報収集**を行うことも有益な場合があります。これには、新しい顧客からの質問を収集し、顧客固有の影響や懸念を文書化し、インシデントに役立つ顧客に必要なアクション（例: ログの収集、特定のプロジェクトの特定、個別のユーザーへの連絡）を特定することが含まれます。

コール後、**調整**の役割として、状況に応じた適切な手段（インシデントチャンネル、社内 FAQ、その他）を通じて GitLab 内でコール情報を伝達し、コールからの決定と行動項目が適切に追跡されていることを確認します。

#### Incident Lead の参加

Incident Leads は、Communications Lead が技術的なリソースとして役立つと判断した場合、顧客コールのサポートができるよう準備しておく必要があります。これにより、Incident Responders がインシデントを解決するために必要なスペースを確保しながら、必要に応じて技術的な専門知識を提供できます。

**Dedicated** インシデントの場合、Incident Lead は Communications Lead の裁量で時間制限付きの顧客コール（最大 10 分）に参加する準備をします。**GitLab.com** インシデントの場合、必要に応じて技術的な専門知識のために Incident Lead と調整します。

## 主要な原則

### コミュニケーションのタイミング

顧客は影響するインシデントの迅速な通知を期待しているため、**即時通知**が重要です。詳細な技術情報よりも、一貫したペースでの**定期的なアップデート**の方が重要です。**品質対速度**のバランスを取る場合、同期シグナルとタイムリーなアップデートに焦点を当て、詳細な分析は後続で提供できます。

### 調整の要件

- 公開コミュニケーションを行う前には、**必ず Incident Responder(s) および Incident Lead と調整**してください。
- 信頼性への影響について不正確な認識を生み出す可能性がある**早まったコミュニケーションを避けて**ください。
- GitLab は**早期にインシデントを宣言することが多く**、影響が明確になるにつれて重大度が低下する場合があることを**忘れないで**ください。

### スコープの境界

| スコープ | 活動 |
|-------|------------|
| **スコープ内** | ステータスアップデート、顧客アクション、即時インシデントコミュニケーション |
| **スコープ外** | 公開 RCA、詳細な技術分析、長期的なアーキテクチャの議論 |

コミュニケーションのニーズがロールのスコープを超える場合は、Infrastructure Leadership に**エスカレーション**してください。

## リソース

### 主要リソース

- [CMOC ワークフロー](/handbook/support/workflows/cmoc_workflows/) - サポートチームガイダンス
- [R&D 向け顧客コミュニケーションハンドブック](https://internal.gitlab.com/handbook/engineering/r-and-d-pmo/knowledge-base/all-articles/customer-comms/) - 特別なコミュニケーション用
- [Infrastructure Leadership エスカレーション](/handbook/engineering/infrastructure-platforms/incident-management/#infrastructure-leadership-responsibilities) - ロール委任用

### はじめに

新しい Communications Leads は、詳細な運用ガイダンスとオンボーディング情報のために[サポートハンドブックのセクション](/handbook/support/workflows/cmoc_workflows/)を確認してください。
