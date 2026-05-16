---
title: Salesforce フィールドロギング要件
description: >-
  ソリューションアーキテクトのための、必須となる Salesforce フィールド、データキャプチャ要件、正確な商談トラッキングを維持するためのベストプラクティスに関する包括的なガイド。
upstream_path: /handbook/solutions-architects/processes/activity-capture/sfdc-logging/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-08T14:07:20+02:00"
---

## 概要

ソリューションアーキテクトは、商談のステージ進捗、技術評価、顧客エンゲージメントの正確なトラッキングを確保するため、Salesforce のいくつかの主要なフィールドを維持する責任があります。Rattle の活動ロギングと Gong のインタラクショントラッキングと組み合わせて、これらのフィールドは顧客エンゲージメントの完全な姿を作るのに役立ちます。このガイドでは、必須のフィールドとそれらを維持するためのベストプラクティスを概説します。

## Primary Solutions Architect

- 商談に割り当てられ、商談に取り組んでいるプライマリーソリューションアーキテクト
- SA の割り当てが変わるたびに更新する必要があります
- 正確なレポーティングと説明責任に重要
- 単一のソリューションアーキテクトに限定

## SA Validated Tech Evaluation {#sa-validated-tech-evaluation}

**SA Validated Tech Evaluation** とは、見込み顧客や顧客が GitLab ソリューションが期待する価値を提供するかどうかを判断するために実施する、SA がアシストする一連の活動です。これらの活動には、ガイド付きトライアル、POV、バリューストリームアセスメント、ワークショップ、戦略ロードマップ計画などが含まれますが、これらに限定されません。SA Validated Tech Evaluation は、見込み顧客または顧客が明示的に価値の評価にエンゲージし、GitLab SA との意味あるエンゲージメントを伴うまで開始されません。SA が「テクニカルウィン」に向けて取り組んでいる場合、SA validated technical evaluation を行っていることになります。

**GitLab SA が評価をクロージャーに向けて進める次のアクションを知らない場合、それは SA が意味あるエンゲージメントを行っている SA Validated Tech Evaluation ではないことを示します。**

見込み顧客や顧客による SA ガイド付き技術評価の分析を支援するため、SA チームは Salesforce で4つの商談フィールドを維持します。これら4つのフィールドは Rattle または Salesforce 内の商談から更新できます: **SA Validated Tech Evaluation Start Date**、**SA Validated Tech Evaluation End Date**、**SA Validated Tech Evaluation Close Status**、**SA Validated Tech Evaluation Close Details**。

### SA Validated Tech Evaluation Start Date

SA Validated Tech Evaluation Start Date は、SA が見込み顧客または顧客との **明示的なソリューション評価** へのエンゲージを開始した日付を示します。

- ソリューションアーキテクトがテクニカルウィンに向けて取り組む **明示的なソリューション評価** に意味あるエンゲージをした日をマークします。
- 顧客が真剣に価値の評価にエンゲージするタイミングを反映するべきで、ディスカバリー、初回デモ、需要創出、教育など、合意された問題への GitLab の対応や特定の成果の推進に直接関連しない初期活動は含まれません
- 通常、**ステージ3 - 技術評価** 商談と整合するべきです
- **SA Feasibility Rating** を伴うべきです

### SA Validated Tech Evaluation End Date

SA Validated Tech Evaluation End Date は、技術評価がテクニカルウィン、敗北、または停滞評価としてクローズされたとみなされた日です。これは、技術評価の後に取引の成功に影響を与える非技術的な変数がある可能性があるため、取引が勝利または敗北でクローズしたかどうかとは関係ありません。

- 技術評価がテクニカルウィン、技術的敗北、または停滞評価で終了した日付をマークします
- 予測日として使用すべきではありません
- **SA Validated Tech Evaluation Close Status** および **SA Validated Tech Evaluation Close Details** フィールドを伴うべきです
- 商談がステージ3 - 技術評価から移行すべきであることを示します
- 全体的な商談の成功とは異なる場合があります

### SA Validated Tech Evaluation Close Status

SA Validated Tech Evaluation Close Status は、終了日における技術評価の結果を表します。

- 利用可能なオプションは以下:
  - **In Progress** 技術評価が開始され、クロージャーに向けてまだアクティブな業務が行われている
  - **Win**: 技術評価が終了し、見込み顧客または顧客が GitLab ソリューションが要件を満たすことに合意した
  - **Loss**: 技術評価が完了したが、評価された GitLab ソリューションの欠陥のため、見込み顧客または顧客が代替ソリューションを選択するか、現在のプロセスを変更しないことを選択している
  - **Stalled**: 技術評価が完了していないが、顧客または見込み顧客がアクティブにソリューションを評価していない - 通常 SA が見込み顧客または顧客との評価関連活動に少なくとも2週間取り組んでいない場合
- 予測ステータスとして使用すべきではありません
- **SA Validated Tech Evaluation End Date** および **SA Validated Tech Evaluation Close Details** を伴うべきです

### SA Validated Tech Evaluation Close Details

SA Validated Tech Evaluation Close Details は、評価の結果に対する追加のコンテキストを提供します。

- 1〜2行を使用した結果の簡潔な要約であるべきです
- **SA Validated Tech Evaluation End Date** および **SA Validated Tech Evaluation Close Status** を伴うべきです

## Technical Health and Feasibility Rating

SA Feasibility Rating は、ソリューションアーキテクトが **商談の技術的な健全性と進捗** を評価するために使用する評価ツールです。Red-Yellow-Green の評価システムを使用して、商談のプリセールス予測におけるリスクや好ましさのレベルを示し、追加の注意が必要な場所を示します。

- ソリューションアーキテクトは、これらのフィールドが正確で更新されていることを確保するための [Directly Responsible Individual (DRI)](/handbook/people-group/directly-responsible-individuals/) です
- ソリューションアーキテクトマネージャーは SA Feasibility Rating を定期的にレビューして、商談に異なる時間、注意、リソースを配分すべき場所を理解します
- **SA Feasibility Rating** および **SA Feasibility Details** フィールドは、定期的なトップ取引レビューおよびパイプライン分析の議論ポイントとして使用されます
  - ソリューションアーキテクトマネージャーは、レビュー後に SA Feasibility Rating をダウングレードできます

### Salesforce フィールド

#### SA Feasibility Rating

SA Feasibility Rating は、**SA Feasibility Review Date** 時点でのソリューションアーキテクトの商談の健全性に対する現在の理解を表します。これは、シンプルな評価システム **Red-Yellow-Green** で表されます。

各商談はユニークなので、ソリューションアーキテクトは同じ商談の Red、Yellow、Green の側面を識別する場合があります。ソリューションアーキテクトはこの非科学的な測定について最善の判断を使用し、**SA Feasibility Details** フィールドに前提条件をキャプチャすべきです。

商談に SA Feasibility Rating フィールドを完了すべきかどうかを決定する際は、以下の [トラッキング基準](#tracking-criteria) に従ってください。

##### Red

商談は、重大な技術課題、不整合、不明確な要件、不十分なリソースがある場合に **Red** 評価を受ける可能性があります。

**Red** SA Feasibility Rating を受けるべき状況の例:

- 成功基準が不明確、文書化されていない、および / またはソリューションの能力と大きく不整合
- [カスタマーサクセスプラン](/handbook/solutions-architects/processes/customer-success-plan) がない
- 個別調整されたデモやハンズオンワークショップなどの意味ある活動の欠如
- 顧客の全体的なエンゲージメント低下
- テクニカルチャンピオンが弱いまたは存在しない
- エグゼクティブスポンサーがいない
- 顧客や見込み顧客における不利な組織変更
- 主要な意思決定者またはインフルエンサーが評価の成功に反対して動いている

##### Yellow

商談は、技術的および取引の勝利を確保するために対処する必要があるいくつかの懸念や課題がある場合に **Yellow** 評価を受ける可能性があります。これには、軽微な技術的障害、スコープクリープ、または潜在的なリソース制約が含まれます。

**Yellow** SA Feasibility Rating を受けるべき状況の例:

- 成功基準と現在のソリューション能力との軽微な不整合
- Proof of Value が計画されているがまだ十分に定義されていない、または開始されているが軌道から外れている
- 合意された成功基準を超えて逸脱している
- 大幅なタイムラインの遅延
- カスタマーサクセスプランに重要な情報が欠如
- 顧客や見込み顧客における組織変更からの不確実性
- 1〜2 個の顧客 [ペルソナ](/handbook/solutions-architects/processes/activity-capture/activity-logging/#logging-an-activity)（Development、QA、Operations、Security、DevOps、Infrastructure）に閉じ込められたエンゲージメント
- テクニカルチャンピオンが特定されているが気を取られている
- エグゼクティブが特定されているがエンゲージメントが限定的
- 取引サイクルが早すぎて十分な情報がない商談

##### Green

強い技術的適合性と整合。技術的側面がよく理解され、リソースが十分で、取引が順調。

**Green** SA Feasibility Rating を受けるべき状況の例:

- 個別調整されたデモやハンズオンワークショップを通じた重要な顧客エンゲージメント
- 承認された Proof of Value が順調
- よく文書化されたカスタマーサクセスプラン
- 顧客 [ペルソナ](/handbook/solutions-architects/processes/activity-capture/activity-logging/#logging-an-activity)（Development、QA、Operations、Security、DevOps、Infrastructure）全体での整合
- 明白で強くエンゲージしているテクニカルチャンピオン
- 強いエグゼクティブエンゲージメント
- Product、Professional Services、Field CTO などのクロスファンクショナルな GitLab チームからの強いエンゲージメント
- クロージにテクニカルウィンを必要としないシンプルなアドオン、計画的成長、更新

#### SA Feasibility Details

SA Feasibility Details フィールドは、SA Feasibility Rating を正当化するためのシンプルなコメントとエビデンスをキャプチャします。これには特定の技術課題とリスクが含まれ、トップ取引レビューやセールスとプリセールス間の整合に必要なコンテキストを提供します。

このフィールドは以下のために使用すべきではありません:

- 技術評価ステータス - 代わりに [SA Validated Tech Evaluation](#sa-validated-tech-evaluation) フィールドを使用
- 活動ロギング - 代わりに [活動ベースロギングガイド](/handbook/solutions-architects/processes/activity-capture/activity-logging) を使用
- 次のステップや緩和計画 - 代わりに [SA Next Steps](#sa-next-steps) を使用

#### SA Feasibility Review Date

SA Feasibility Review Date は、最後の技術レビューがいつ行われたかを示すために、SA Feasibility Rating または SA Feasibility Details フィールドが最後に更新された時刻をキャプチャする自動入力フィールドです。これは、SA Feasibility Rating が最新の状態を保つことを確実にするためにトラッキングとレビューに使用されます。

これはシステムが維持するフィールドのため、手動更新は不要です。

### トラッキング基準 {#tracking-criteria}

すべての商談に SA Feasibility Rating フィールドを完了する必要はありません。一般的に、SA Validated Tech Evaluation のあるすべての商談には SA Feasibility Rating があるべきです。その他の基準は以下にリストされています。

#### 適用可能なステージ

SA Feasibility はステージ3〜4で最も適用可能です。ステージ3 - 技術評価の前に、ソリューションアーキテクトは成功するテクニカルウィンに向けて評価を構築する最善の方法を考えるべきです。ステージ4 - 提案の後は、技術評価は完了しているはずで、ソリューションアーキテクトはサポート役に移ります。

#### Net ARR の閾値

すべての商談が、SA Feasibility Rating をトラッキングするほど大きいわけではありません。以下の閾値は Enterprise および Commercial チームのガイドラインです:

- **Enterprise:** Net ARR が $100k 超、またはフォーカスアカウントへのファーストオーダー
- **Commercial:** Net ARR が $50k 超

#### 限定的なエンゲージメントの扱い方

最小限の SA エンゲージメントの商談は、**SA Feasibility Rating** および **SA Feasibility Details** をシンプルにするために以下の基準を使用すべきです:

- **シンプルなアドオン、計画的成長、更新:**
  - SA Feasibility Rating: Green
  - SA Feasibility Details: Engagement not required
- **時期尚早:**
  - SA Feasibility Rating: Yellow
  - SA Feasibility Details: Not engaged yet and don't know enough
- **エンゲージしていない:**
  - SA Feasibility Rating: Red
  - SA Feasibility Details: Not engaged at all but should have been

#### 更新頻度

最低限、**SA Feasibility Rating** および **SA Feasibility Details** は、ソリューションアーキテクトがマネージャーとトップ取引レビューを行う前に更新されるべきです。さらに、フィールドは評価自体に重要な変更があるたびに更新されるべきです。ソリューションアーキテクトはまた、現在の **SA Feasibility Rating** をさらに支持する顧客とのインタラクションの後に **SA Feasibility Details** を更新することを検討すべきです。

### 更新方法

フィールドは Salesforce の商談の **Technical Evaluation** セクションで利用可能で、そこで直接更新できます。さらに、ソリューションアーキテクトは **Health & Next Steps** をクリックし、適切なフィールドを更新することで、Rattle の Slack 通知を活用できます。

## 活動計画フィールド

### SA Next Steps {#sa-next-steps}

- 取引を前進させるための予定された SA 活動とターゲット日
- 日次の To Do とフォローアップリストとして機能
- 例: デモ、バリューストリームワークショップ、ハンズオンワークショップ、Proof of Value など
- 技術評価を通じた進捗を追跡
- 各顧客とのインタラクションの後に更新する必要があります
- 空 / 古いフィールドは商談が非アクティブで、活動の欠如を示します
- 過去の活動のログとして使用しないでください（[活動ベースロギングガイド](/handbook/solutions-architects/processes/activity-capture/activity-logging) を使用）

### SA Next Steps Date

- **SA Next Steps** の最初の予定された活動の日付
- 日次 To Do リストの抽出を可能にする
- **SA Next Steps** の更新が必要なときを示す

### SA Next Steps History

- **SA Next Steps** の変更で自動更新される
- 履歴上の変更を追跡する
- システムが維持するため、手動更新は不要

### 関連フィールド

#### POV ステータスと詳細

- Proof of Value がエンゲージメントの一部の場合に必須
- POV プロセス全体で維持する必要があります
- 完全な詳細については [POV トラッキングガイド](/handbook/solutions-architects/playbooks/pov/#tracking-a-pov-in-salesforce) を参照

#### カスタマーサクセスプラン

- SA が意味あるエンゲージをしている $100k+ Net ARR のすべての商談で必須
- プランドキュメントへのリンクで入力する必要があります
- プランは商談クローズまで商談ライフサイクル全体を通じて継続的に開発・更新されるべきです
- 詳細については [カスタマーサクセスプラン](/handbook/solutions-architects/processes/activity-capture/customer-success-plans) を参照

### フィールドを更新するタイミング

- ステータス変更が発生したらすぐにフィールドを更新
- 商談がクローズするまで待たない
- 正確なレポーティングのためにフィールドを最新に保つ
- Rattle または Salesforce で直接更新

### Rattle 活動ロギングとの関係

これらの Salesforce フィールドは Salesforce で直接更新する必要がありますが、活動トラッキング（Salesforce で Task として表示される）は Rattle を通じてログできます:

- 会議後の Rattle 通知経由
- Slack で `/Rattle <opportunity name>` コマンドを使用
- Rattle の「Update Opportunity」ボタン経由

Rattle を通じた活動ロギングの詳細な手順については、[活動ベースロギングガイド](/handbook/solutions-architects/processes/activity-capture/activity-logging) を参照してください。

## ベストプラクティス

### フィールド更新

#### タイミング

- 可能な場合はリアルタイムでフィールドを更新
- 絶対に必要な場合を除き、バックデートしないでください
- 商談が早期ステージでも最新に保つ

#### 正確性

- 日付に正確に
- 明確で簡潔な説明を使用
- 商談全体での一貫性を維持

#### 完全性

- すべての必須フィールドに入力
- フィールドを空または TBD のままにしない
- 関連するコンテキストを含める

### よくあるシナリオ

#### 複数の SA

- Primary SA は1人のみ
- 他の人は活動ロギングで追跡
- Primary SA を変更する際の明確なハンドオフプロセス

#### 停滞した評価

- 2週間の非アクティビティ後に停滞としてマーク
- 評価が再開された場合はステータスを更新
- クローズ詳細に理由を文書化

#### コマーシャルトライアル

- トライアル日と整合
- SA エンゲージメントが必要
- 完了まで追跡

## クローズした商談の更新

商談がクローズしているがフィールドの更新が必要な場合、Sales Operation に必要な更新を依頼できます: 追加の詳細についてはハンドブックの「[Requesting Internal Support](/handbook/sales/field-operations/requesting-internal-support/)」セクションを参照してください。

1. 更新が必要なクローズした商談に移動
2. **「Request Support」** ボタンをクリック
3. ドロップダウンリストから **「Sales Ops」** チームを選択し、Next を選択
4. **「Other (SPECIFY IN NOTES)」** リクエストタイプを選択し、明確な根拠を提供して **「Notes」** フィールドに必要な更新を指定

メッセージの例:

```txt
Please update the SA Validated Tech Evaluation Close Status to Won, 
and SA Validated Tech Evaluation End Date to 2024-01-14
```

## 検証ルール

- Start Date は End Date より前である必要があります
- End Date が設定されている場合 Close Status が必要
- Status が設定されている場合 Close Details が必要
- ステージ3+ の商談には Primary SA が必要

## レポーティング & 分析

これらのフィールドは主要なレポートを駆動します:

- 技術評価ダッシュボード
- SA 活動分析
- Win/Loss 分析
- パイプライン健全性メトリクス

## フィールドの依存関係

フィールドがどのように相互作用するかを理解する:

- Start Date は End Date を有効にする
- End Date は Close Status を必要とする
- Close Status は Close Details を必要とする
- すべてのフィールドが Primary SA にリンクされている

## 品質保証

定期的なチェック:

- 不足している必須フィールド
- 矛盾する日付
- 不完全なクローズ詳細
- 正確なステータス更新

## ヘルプを得る

- クローズした商談の更新については Sales Support に連絡
- ガイダンスについては SA リーダーシップに連絡
- #salesforce-help Slack チャンネルを使用
- 標準プロセスを通じてフィードバックを提出
