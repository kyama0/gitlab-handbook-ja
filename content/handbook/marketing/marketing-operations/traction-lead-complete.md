---
title: Traction Lead Complete
description: Traction Lead Complete の概要
twitter_image: /images/tweets/handbook-marketing.png
twitter_site: '@gitlab'
twitter_creator: '@gitlab'
upstream_path: /handbook/marketing/marketing-operations/traction-lead-complete/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-09T20:42:10+00:00"
---

- 概要
- リードルーティングワークフロー
- パートナーリード管理
- コンタクトルーティングワークフロー
- アカウントルーティングワークフロー
- リードルーティングのリクエストや質問は？
- リードを再割り当てする方法
- Traction Lead Flow 更新プロセス

## 概要

Traction Lead Complete は、リードレコードの処理と割り当て、L2A マッチング、コンタクトルーティングを行う Salesforce 内のアプリケーションです。

Traction は、各 MQL（Marketing Qualified Lead）を、ワークフローに応じてその個人のエンゲージメントと認定を担当する Sales Development 組織のメンバーに割り当てます。

## リードルーティングワークフロー

リードルーティングロジックの設定方法の詳細については、[Traction](https://internal.gitlab.com/handbook/marketing/marketing-ops-and-analytics/marketing-operations/traction/) の内部ハンドブックページをご覧ください。

## パートナーリード割り当て

メインリード割り当てフローの最初のステージで、Traction は割り当てルールを実行して Channel Partner および Distributor リードをフィルタリングします。これらは、キャンペーンメンバーベースのルーティングと、主にキャンペーンメンバーオブジェクトのフィールドを使用して割り当てられます。ほとんどの Channel 関連レコードは `Partner Queue` に割り当てられ、[Impartner](/handbook/marketing/marketing-operations/impartner/) を介して Channel Partners に渡され、リードを受け入れ、割り当て、認定できます。

注: アライアンスパートナーリードは、認定のために Sales Development チームのメンバーに割り当てられます。

GitLab は、Channel Partners と協力して、Partner sponsored、MDF funded、無料トライアル、ジョイントパートナーキャンペーンなど、共同マーケティングキャンペーンを開発します。

### Partner Sponsored Event

GitLab は、Channel Partners が当社所有のイベントを後援することを許可しています。Traction は、新しいキャンペーンメンバーが [partner sponsored event](/handbook/marketing/channel-marketing/#partner-sponsored-events) に関連付けられていることを認識すると、次のステップを実行します:

1. リードフィールド `Lead Acquisition Source` = `Partner Sponsored Event` および `Impartner Partner Account` が空でないかを確認します
1. リードフィールド `Partner Recalled Date` が空で `Partner Recalled` が `False` に等しいかを確認します
1. `Partner Share Status` = `Pending` および `Partner Lead Status` = `Qualifying` を更新し、リードが Impartner Prospects（Lead Sharing）に同期できるようにします。
1. リードを `Partner Queue` に割り当てます。

### MDF と Free Trial キャンペーン

Traction は、新しいキャンペーンメンバーが [MDF キャンペーン](/handbook/marketing/channel-marketing/#mdf-campaigns) およびトライアルキャンペーンに関連付けられていることを認識すると、次のステップを実行します:

1. キャンペーンフィールド `Will there be MDF funding` = `Yes`、`Partner - Trial` で始まるキャンペーン名、リードフィールド `Impartner Partner Account` が空でないかを確認します。
1. リードフィールド `Partner Recalled Date` が空で `Partner Recalled` が `False` に等しいかを確認します
1. `Prospect Share Status` = `Sending to Partner` および `Partner Prospect Status` = `Qualifying` を更新し、リードが Impartner に同期できるようにします。
1. リードを `Partner Queue` に割り当てます。

### Joint Partner キャンペーン

Traction は、新しいキャンペーンメンバーが [joint partner キャンペーン](/handbook/marketing/channel-marketing/#joint-gitlab-and-partner-campaigns) に関連付けられていることを認識すると、次のステップを実行します:

1. キャンペーンフィールド `Is a Channel Partner Involved?` = `Yes` および パートナーエンゲージメントに関する `Campaign Member Status`、リードフィールド `Impartner Partner Account` が空でないかを確認します。
1. キャンペーンメンバーが GitLab によって積極的に作業されていない、つまり `Person Status` が `Accepted`、`Qualifying`、`Qualified` でない、または `Actively Being Sequenced` = `False` であることを確認します。<br>
上記すべてが
   1. True の場合、Traction は `Partner Prospect Status` を `Qualifying` に、`Prospect Share Status` = `Sending to Partner` に更新し、リードを `Partner Queue` に割り当てます
   1. False の場合、Traction は適切な SDR に割り当てます。

### このルールの例外

リード/コンタクトが GitLab とインバウンドマーケティングリクエストなどの何らかの形で関与する場合、リード/コンタクトオーナーは、パートナーリードライフサイクルでのステージに関係なく、パートナーリードへのフォローアップを担当します。

## コンタクトルーティング

コンタクトルーティングロジックの設定方法の詳細については、[Traction](https://internal.gitlab.com/handbook/marketing/marketing-ops-and-analytics/marketing-operations/traction/) の内部ハンドブックページをご覧ください

Traction は、すべてのリージョナル SMB Sales 所有のアカウントとそれに関連するコンタクトが AMER/EMEA/APJ SMB Sales によって所有されていることを確認するように動作します。リードが変換されると、コンタクトオーナーシップは、適切なリージョナル SMB Sales オーナーに一貫して更新されます。2025 年 10 月にコンタクトオーナーシップの再割り当てを修正するための変更を実装しました。オープンの商談がある場合、Traction は現在、アカウントに関連付けられたすべてのコンタクト（プライマリオーナーだけでなく）を SMB アカウントオーナー（商談オーナーではなく）に更新します。

他のすべての [SFDC コンタクトオーナーシップルール](/handbook/sales/field-operations/gtm-resources/#changing-contact-ownership-in-salesforce) は [Traction](/handbook/marketing/marketing-operations/traction-lead-complete/#contact-routing) を介して維持されます。パートナーレコード管理プロセス以外でコンタクトルーティングについて質問や懸念がある場合は、[Sales Systems](/handbook/sales/field-operations/sales-systems/) にお問い合わせください。

## アカウントルーティング

すべてのアカウントルーティングは Enterprise Territory Management (ETM) によって処理されます。これについて詳しく知りたい場合は、sales operation ハンドブックをご覧ください。

## アカウントオブジェクトの Traction Complete ビュー

アカウントオブジェクトの Traction Complete ビューのリードセクションをカスタマイズしました。Salesforce Lightning でこのセクションに移動するには、アカウントページの上部（`Details` がある同じ行）で `Traction Complete` をクリックします。これにより、Full Name、Title、Email、Last Activity、Last Flow Name、Active Flows Count などの便利な情報とともに、アカウントに一致するすべてのリードを表示できるビューが開きます。この情報は、Sales Development と Sales がアカウントに関連付けられた価値の高いリードへのリーチアウトで連携するのに価値があります。

### リードを再割り当てするステップバイステップ

1. `[Admin] Company Address Country` を更新します。country フィールドが保存される前に、`[Admin] Company Address Source` フィールドを更新する必要があります。
2. Re-run Traction Complete のチェックボックスをオンにします。リードを保存します。
3. リフレッシュ - リードが再割り当てされているはずです。

注:

- リードはその地域のラウンドロビンに基づいて割り当てられます。
- これは MQL の再割り当てに対してのみ動作します - HP リードでは動作しません。
- BDR が割り当てられている（APJ）アカウントに一致し、Actively Working（EMEA & AMER）としてマークされている場合、これは動作しません。
- `[Admin] Company Address Country` はアカウントと商談のルーティングにも影響することを覚えておいてください。場所がどこであるか確信がない限り、country を更新しないでください。

## ルーティングジョブのスケジュール

レコードが適切なオーナーシップにあることを確認するのに役立つリードとコンタクトオブジェクトに対する多数のスケジュールされたおよび/またはクリーンアップジョブがあります。

1. `Daily lead ownership to Queues`: このジョブは、Inquiry、Ineligible、Disqualified ステータスのリードに対して、対応するステータスキューに毎晩実行されます。その他のフィルター: リードが積極的にシーケンスされていない、Matched account が Actively Working でない、リードが変換されていない、AI Email in Progress が false、Owner Profile が Sales Development Rep または Marketo Integration で、Last Interesting Moment Date が 2025 年 5 月 1 日より大きい

2. `Weekly lead ownership to Queues`: このジョブは、Raw および Recycle ステータスのリードに対して、毎週土曜日に実行されます。その他のフィルター: リード作成日が 7 日以上前、High Priority が false、AI Email in Progress が false、Actively Being Sequenced が false、Matched Account が Actively Working でない、Is Converted が false、Owner Profile が Sales Development Rep または Marketo Integration で LIM Date が 2025 年 5 月 1 日以降。

3. `Daily Recycle, No Action flow`: このジョブは、MQL ステータスに 30 日以上いるリードを Recycle, No Action に移動します。

4. `BDR Actively Working Reassignment`: このジョブは、Actively Working としてマークされたアカウントに一致するリードを、アカウントの BDR Assigned に移動します。リードは Recycle、Raw、または Inquiry ステータスである必要があります。ジョブは前日に発生した BDR Prospecting Status の変更を見るようにスケジュールされています。

5. `Inactive User Lead Assignment`: リードのオーナーが Salesforce で非アクティブになると、リードはルーティングルールに基づいて再割り当てされます。

6. `Account Owner/BDR Assigned Change Contacts Assignment`: アカウントの Owner または BDR Assigned が変更されると、そのアカウントに関連付けられたコンタクトはコンタクト割り当てルールに基づいて実行されます。

## リードルーティングのリクエストや質問は？

### ルーティングへの更新をリクエスト

リードルーティングワークフローへの予防的な更新をリクエストする場合は、[Routing change request issue template](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/blob/mktgops-template-updates-nov2025/.gitlab/issue_templates/Routing_Change_Request.md) を使用して Issue を開いてください。

### リードルーティングの問題が発生していますか？

リードボリュームが少ない？担当ではないアカウントやテリトリーからリードを受け取っている？既存のリードルーティングロジックにバグ :bug: を見つけたと思う場合は、[bug request issue template](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=bug_request) を使用して Issue を開いてください。

### 一般的な質問

Issue テンプレートのフォーマットに従って [Marketing Operations issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new) を開いてください。

## Traction Update Governance Process

### プロセスワークフロー

#### 1. リクエスト提出

担当者: 変更をリクエストするステークホルダー

- [アクション: 次のテンプレートで GitLab Issue を開く](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/blob/master/.gitlab/issue_templates/lead_routing_approvals.md)

必要な Issue テンプレートフィールド:

- 変更タイトル: 簡潔で説明的なタイトル
- リクエスター: 名前とチーム
- 変更タイプ:
  - 永続的なルーティング変更
  - 一回限りのキャンペーンルーティング
- ビジネス上の正当化: なぜこの変更が必要なのか？
- 詳細な説明: 具体的に何が変更される必要があるか？
- キャンペーン期間（一回限りの場合）: 一時的なルーティングの開始日と終了日
- 影響を受けるチーム/ユーザー: 誰がこの変更に影響を受けるか？
- 優先度レベル: クリティカル / 高 / 中 / 低
- ターゲットタイムライン: いつまでに必要か？
- 成功基準: この変更が成功したことをどのように知るか？
- Issue ラベル: Traction、MktgOps::00: Triage、適切な優先度ラベル

#### 2. チームへの通知

担当者: Issue 作成者

- アクション: 次の詳細とともに、GitLab Issue のコメントですべての関連チームをタグ付けする
  - 変更の簡単な要約と通知される理由を提供する
  - 特定の日付（3〜5 営業日を推奨）までにフィードバックや懸念をリクエストする
  - Issue ラベル: Traction::Stakeholder-Review を追加

#### 3. 開発 & テスト

担当者: Bryce Weatherford & Gill Murphy

開発フェーズ:

- MKTGOPs は Issue をチームメンバーに割り当てます
- Traction Sandbox 環境で変更を開発します
- 行われた技術的変更を文書化します
- 実装ノートを GitLab Issue に追加します

テストフェーズ:

- サンドボックスで徹底的なテストを実施:
- 機能テスト
- 依存システムとの統合テスト
- ユーザー受け入れテスト（該当する場合）
- テスト結果を Issue に文書化
  - 役立つ場合は変更のスクリーンショット/ビデオをキャプチャ
- すべての成功基準が満たされていることを確認

Issue ラベル: MktgOps::04: In Progress に更新し、次に Traction::Testing

#### 4. 承認プロセス

担当者: Gill Murphy または Gill が休暇中の場合は Amy Waller

- アクション: 承認のために GitLab Issue をレビュー

承認チェックリスト:

- すべての必須フィールドが完了している
- 変更タイプが明確に識別されている（永続 vs. 一回限り）
- 一回限りのキャンペーンの場合: 期間と元に戻す計画が文書化されている
- 関連チームに通知済み
- サンドボックスでの開発が完了している
- 文書化された結果でテストが完了している
- ステークホルダーから主要な懸念が提起されていない
- ビジネス上の正当化が健全である
- 変更が Traction ロードマップ/戦略と一致している

承認方法:

- 「Approved」とコメント
- ビルダーをタグ付けして進めるよう指示

Issue ラベル: MktgOps::05: Business Owner Review に更新

#### 5. 本番実装

担当者: Bryce Weatherford または Gill Murphy

- アクション: リクエストされたロジックを構築

デプロイ前要件:

- デプロイメントウィンドウ: 週の前半から中盤にスケジュール。金曜日のデプロイなし
- 監視レポートを構築: 変更の影響を追跡するレポートを作成
- 監視する主要メトリクスを定義（例: ルーティング精度、ボリュームの変化、エラー率）
- これらのメトリクスを追跡するためのダッシュボードまたはクエリを設定
- デプロイ前のベースラインメトリクスを文書化
- レポート仕様を GitLab Issue に添付

ハンドブックドキュメントを更新:

- Traction ハンドブック/ドキュメントで変更を文書化
- 何が変更されたか、なぜ変更されたか、現在どのように動作するかを含める
- 関連するワークフロー図またはプロセスマップを更新
- 該当する場合、ユーザーガイドまたはトレーニング資料を更新
- 役立つ場合はスクリーンショットや例を追加
- ハンドブックの更新を GitLab Issue にリンク

デプロイプロセス:

1. サンドボックスからダウンロード:

   - Traction サンドボックス環境から構成ファイルをエクスポート/ダウンロード
   - ファイルの整合性と完全性を確認
   - ファイルバージョン/タイムスタンプを文書化

2. デプロイ前チェックリスト:

   - 火曜日または水曜日にデプロイがスケジュールされている
   - 監視レポートが構築されテスト済み
   - 構成ファイルがサンドボックスからダウンロード済み
   - 影響を受けるチームにデプロイメント時間が通知済み
   - ロールバック計画が文書化済み
   - 現在の本番構成のバックアップが取得済み

3. 本番にアップロード:

   - 構成ファイルを Traction 本番環境にアップロード
   - アップロードが成功したことを確認
   - スモークテストを実施（基本的な機能チェック）

4. デプロイ後監視:

   - デプロイ直後に監視レポートを実行
   - 作成されたレポートを使用して 24〜48 時間監視
   - 予期しない動作やエラーをチェック
   - 任意の問題を GitLab Issue に文書化

5. GitLab Issue を更新:

   - デプロイのタイムスタンプ
   - 初期監視レポートの結果
   - ハンドブックドキュメントの更新へのリンク
   - 即時の観察または懸念

Issue ラベル: MktgOps::06: Ready to Deploy に更新し、デプロイ後に Traction::Monitoring

#### 6. クロージャー

担当者: Mktgops チーム

アクション:

1. 24〜48 時間後に監視レポートの結果をレビュー
2. 変更が本番で期待どおりに動作していることを確認
3. デプロイ後のメトリクスをベースラインと比較
4. ハンドブックドキュメントが完全で正確であることを確認
5. 一回限りのキャンペーンルーティングの場合: 元に戻す計画をスケジュールおよび文書化
6. 影響を受けるチームからフィードバックを収集
7. 学んだ教訓と行われた調整を文書化
8. サンドボックス構成ファイルと監視レポートをアーカイブ
9. 次の概要を含めて GitLab Issue を閉じる:
   - デプロイ成功確認
   - 監視レポート要約
   - ハンドブックドキュメント確認
   - 元に戻すスケジュール（一回限りのキャンペーンの場合）
   - 予期しない発見
   - 将来の変更への推奨事項

Issue ラベル: MktgOps::08: Completed に更新して Issue を閉じる。

#### 7. 一回限りのキャンペーンの元に戻す（該当する場合）

担当者: Bryce Weatherford または Gill Murphy

時期: 元のリクエストで指定されたキャンペーン終了日後

アクション:

1. 元に戻すスケジュール:

   - キャンペーン終了日のカレンダーリマインダーを設定
   - 元に戻しを実行するチームメンバーを割り当て
   - 影響を受けるチームに今後の元に戻しを通知

2. 元に戻しを実行:

   - バックアップから元の（キャンペーン前の）構成をダウンロード
   - 週の中盤のみ本番にアップロード
   - 初期変更と同じデプロイプロセスに従う

3. 元に戻しを確認:

   - ルーティングが正常に戻ったことを確認
   - 期待される動作を確認するために監視レポートを実行
   - 元に戻しの詳細で元の GitLab Issue を更新

4. 文書化:

   - 一時的なルーティングが文書化されていた場合はハンドブックを更新
   - GitLab Issue で元に戻しの完了を記載
   - キャンペーンルーティング構成をアーカイブ

注: 一回限りのキャンペーンルーティングの変更は、文書化された終了日を持つ一時的な変更として、監視レポートとハンドブックの更新で明確にマークされる必要があります。

## Traction 変更の推奨ラベルワークフロー

| ステージ | 使用するラベル |
|-------|---------------|
| 1. リクエスト提出 | Traction + MktgOps::00: Triage + 優先度ラベル + Traction::One-Off-Campaign（該当する場合） |
| 2. ステークホルダー通知 | Traction + Traction::Stakeholder-Review + 優先度ラベル + Traction::One-Off-Campaign（該当する場合） |
| 3. 開発 | Traction + MktgOps::04: In Progress + 優先度ラベル + Traction::One-Off-Campaign（該当する場合） |
| 4. サンドボックスでテスト | Traction + Traction::Testing + 優先度ラベル + Traction::One-Off-Campaign（該当する場合） |
| 5. ビジネスオーナーレビュー | Traction + MktgOps::05: Business Owner Review + 優先度ラベル + Traction::One-Off-Campaign（該当する場合） |
| 6. 承認済み、デプロイ準備完了 | Traction + MktgOps::06: Ready to Deploy + 優先度ラベル + Traction::One-Off-Campaign（該当する場合） |
| 7. 本番にデプロイ済み | Traction + Traction::Monitoring + 優先度ラベル + Traction::One-Off-Campaign（該当する場合） |
| 8. 完了 | Traction + MktgOps::08: Completed + 優先度ラベル + Traction::One-Off-Campaign（該当する場合） |
| 9. 一回限りの元に戻し完了 | Traction + MktgOps::08: Completed + 優先度ラベル + Traction::One-Off-Campaign + Issue を閉じる |

**任意のステージでブロックされた場合:** `~MktgOps::07: Blocked` を追加

**追加情報が必要な場合:** `~MktgOps::01: Needs More Information` を使用

**注意:** 変更が一時的な場合、ライフサイクル全体を通して Traction::One-Off-Campaign ラベルを保持してください。これにより、元に戻す必要があるすべてのキャンペーンルーティングを簡単にフィルタリングおよび追跡できます。

## SLA ガイドライン

| ステージ | ターゲットタイムライン |
|-------|-----------------|
| ステークホルダー通知 | 提出から 1 営業日以内 |
| ステークホルダーフィードバック期間 | 3〜5 営業日 |
| 開発（複雑さによって異なる） | リクエストごとに見積もり |
| テスト（複雑さによって異なる） | 2〜5 営業日 |
| 承認レビュー | 2 営業日 |
| 監視レポート作成 | デプロイ前 1〜2 営業日 |
| 本番デプロイ | 週の前半から中盤 - 金曜日のデプロイなし |
| デプロイ後監視 | 24〜48 時間 |
