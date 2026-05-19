---
title: "Iteration 0"
description: "Iteration 0 は私たちの内部 EM>PS Transition ミーティングから始まり、顧客との Planning and Design Sessions まで続きます。この重要なフェーズはプロジェクトの基盤を確立し、GitLab と顧客チーム間の整合性を確保します。"
upstream_path: /handbook/customer-success/professional-services-engineering/professional-services-delivery-methodology/iteration-0/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-14T17:59:32+00:00"
---

**クイックリンク:** | [Iteration 0 の基本](../iteration-0-fundamentals/_index.md) | [Delivery Kits](https://gitlab.com/gitlab-org/professional-services-automation/delivery-kits)

## フェーズ概要

Iteration 0 は、互いに積み重なる 4 つの主要な活動で構成されます。

1. [EM>PS Transition](#emps-transition) - 内部の知識移管
2. [Stakeholder Planning Meeting](#stakeholder-planning-meeting) - 顧客との初期整合
3. [Customer Kickoff](#customer-kickoff) - チーム全体のエンゲージメント
4. [Support Preparation](#prepare-support-for-issues) - 先回りした Issue 管理

各活動には、プロジェクトの円滑なスタートを確保するための具体的なインプット、プロセス、アウトプットがあります。

---

## EM>PS Transition

**目的:** アカウントの背景を集め、SOW を検証し、顧客対応活動の準備を行う。

### 事前ミーティング準備

移管ミーティングの前に:

1. **ドキュメントのレビュー**
   - Statement of Work (SOW)
   - Kantata プロジェクト詳細
   - Customer Epic に紐づく Scoping Issue
   - Consulting Block SKU の場合: [DoW](https://docs.google.com/document/d/1ZsMUvBUL9kt3CqB4YjYlX-E1uEJz-elO/edit) をレビュー（Customer Epic に添付されているはずです）

2. **ミーティングのスケジュール設定**
   - 含めるメンバー: Engagement Manager、Technical Architect、Professional Services Engineer、Account Manager、Customer Success Manager（アサインされている場合）
   - アジェンダの準備には [Schedule Intake issue](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ww-consulting/ps-plan/-/blob/master/.gitlab/issue_templates/SchedulingIntakeQuestions.md) または [このテンプレート](https://docs.google.com/document/d/1bpyhc-a1z573EsyIQtUE-7HS_QauDVmQsHP25PD9i1A/edit) を使用

3. **前提データの収集**
   - 関連情報については [Delivery Kits](https://gitlab.com/gitlab-org/professional-services-automation/delivery-kits) を参照
   - [Iteration 0 の基本](../iteration-0-fundamentals/_index.md) をレビュー
   - [discovery のベストプラクティス](../discovery/_index.md) を考慮
   - 複雑なプログラムの場合は [RACI テンプレート](https://docs.google.com/spreadsheets/d/1nb_sEI-M3IwNgkYQA2uKAo9IDijstPtUGCtLsHlwrtI/edit?gid=1394419027#gid=1394419027) を準備

### ミーティングの実施

議論は次に焦点を当てます。

- ビジネスドライバーと文脈
- SOW の検証と明確化
- 技術要件の概要
- Stakeholder Planning と Kickoff のスケジュール計画
- リスクと依存関係

### 主要なアウトプット

ミーティング後、以下の完了を確認します。

- [ ] 内部チームが最新ステータスをどこで確認できるかを理解している
- [ ] [Collaboration Project](/handbook/customer-success/professional-services-engineering/professional-services-delivery-methodology/cp/) のセットアップを開始し、Slack チャンネルにピン留め、内部レトロスペクティブ Issue（Customer Epic に添付）も同様
- [ ] 顧客との Stakeholder Planning ミーティングがスケジュールされている
- [ ] 顧客との議論のための技術的前提条件が特定されている
- [ ] 初期リスクがドキュメント化されている

> **💡 ヒント:** Discovery では大きく考え、チームの整合性とチームの準備状況を考慮してください。目標は、顧客が十分に準備された状態で自信を持って Planning and Design セッションに入ることです。

---

## Stakeholder Planning Meeting

**目的:** プロジェクトのスコープ、リソース、管理アプローチ、依存関係を整合させ、チーム全体のキックオフ前に期待のずれを明らかにする。

### ミーティングのセットアップ

1. 顧客 PM および GitLab と顧客チーム双方の主要ステークホルダーとの専用ミーティングをスケジュールします。
2. [Stakeholder Planning Template](https://docs.google.com/presentation/d/1vVJQrJeGG-yLAeso_iKkb80H5kE7wStyBAj1sj45sY4/edit#slide=id.g923452f41b_1_5) を使って議論をガイドします
3. プロジェクトパラメータの相互理解に焦点を当てます

### 主な議論トピック

1. **プロジェクトステークホルダー**
   - すべての主要参加者とその役割を特定
   - 対応可否とコミュニケーションチャネルを確認

2. **プロジェクト目的**
   - ビジネスドライバーと成功基準を検証
   - ユースケースと期待される成果を整合

3. **プロジェクトのベロシティとタイムライン**
   - ペースとマイルストーン日程の期待値を設定
   - スプリント／イテレーションのケイデンスの好みを議論

4. **プロジェクト前提条件**
   - 技術的・組織的準備状況をレビュー
   - 作業開始のブロッカーを特定

5. **キックオフ準備**
   - 全体キックオフのアジェンダと参加者を決定
   - キックオフミーティングへの期待値を設定

6. **オンボーディング検証**
   - すべてのアクセスと権限が整っていることを確認
   - 環境とツールの可用性を検証

7. **次のステップ**
   - オーナーと期日を伴うアクションアイテムをドキュメント化
   - Customer Kickoff と Discovery セッションの計画

### 主要なアウトプット

- [ ] 検証されたステークホルダーリストと役割
- [ ] タイムラインとベロシティに関する期待の整合
- [ ] ドキュメント化された前提条件と依存関係
- [ ] Customer Kickoff のアジェンダ準備
- [ ] 明確なオーナーシップを伴うアクションアイテム
- [ ] Customer Slack チャンネルを作成し、Customer Project チームメンバーを招待。AR は [テンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Individual_Bulk_Access_Request) として使用できます

> **💡 ヒント:** このミーティングを使って、より広範なキックオフミーティングの前に、GitLab と顧客チーム間の期待のずれを特定し対処してください。

---

## Customer Kickoff

**目的:** すべての関連プロジェクトステークホルダーを集め、プロジェクトの目的、アプローチ、次のステップを整合させ、迅速な実行を可能にする。

### 準備

1. EM>PS Transition と Stakeholder Planning から得たインサイトを統合
2. [Kickoff デッキテンプレート](https://docs.google.com/presentation/d/1Sva2u7NGxUTmDxQNBpqmFm_ep9HHlU86WyhON-To5lU/edit#slide=id.g3427bc5c553_0_243) を使ってプレゼンテーションを準備
3. ステアリングコミッティのあるプロジェクトには、[SteerCO テンプレート](https://docs.google.com/presentation/d/1TDKOJeuzR1uy18umu6ovy30l_A986pOEatFn_7eiNbQ/edit#slide=id.g2e563e08cf5_0_1) も準備
4. すべての主要ステークホルダーが招待されていることを確認

### ミーティングコンテンツ

以下の包括的な概要を提示します。

- プロジェクト目的と成功基準
- チーム構造と役割
- プロジェクトアプローチと方法論
- タイムラインとマイルストーン計画
- コミュニケーションとレポーティングのケイデンス
- 次のステップと即時のアクション

### 主要なアウトプット

- [ ] プロジェクト目的とアプローチに対する理解の確認
- [ ] Discovery & Planning セッションのスケジュール
- [ ] [Iteration Cadences](../iteration-scheduling/_index.md) の確認
- [ ] 明確なオーナーシップを伴うアクションアイテムのドキュメント化

---

## Issue 対応のサポート準備 {#prepare-support-for-issues}

**目的:** Support チームに主要なプロジェクト情報を提供し、エンゲージメント中の Issue 解決を効率化する。

> このプロセスは実装などのインフラ関連プロジェクトでは特に重要ですが、サポート Issue が発生する可能性のあるあらゆるエンゲージメントでも価値があります。

### ZenDesk アクセス

ZenDesk light（読み取り専用）アクセスを持っていない場合:

- Zendesk Global の場合
  - [Zendesk 'Light Agent' アカウントのリクエスト](../../../../support/internal-support/#requesting-a-zendesk-light-agent-account) を参照
- Zendesk US Government の場合
  1. [Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) を起票
  1. `System name` の値が `Zendesk - US Federal, light agent access` であることを確認
  1. マネージャーにアサイン
  1. マネージャーが承認したら（AR の指示に従って）、`Zendesk - US Federal` の [tech_stack オーナー](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) に通知
     - このアクセスを得るには米国市民権が必要であることに留意してください

### サポートノートの作成


{{% alert title="Note" color="danger" %}}
以下の情報は Zendesk Global 専用です。組織が Zendesk US Government を使っている場合は、[#support_operations](https://gitlab.enterprise.slack.com/archives/C018ZGZAMPD) に投稿し、Zendesk US Government で組織ノートを変更する必要があることを明記してください。Salesforce Account または Zendesk Organization のリンクを必ず提供してください（顧客名やその他の機密情報は記載しないでください）。

Customer Support Operations（Zendesk US Government にアクセスできる人々）が完了に向けて協力します。
{{% /alert %}}


#### Step 1: 顧客組織を見つける

1. [Organizations Repository](https://gitlab.com/gitlab-com/support/zendesk-global/organizations/-/tree/master/organizations) にアクセス
2. 顧客名を検索（ハッシュに続いて Salesforce 名が表示されます）
   ![ZenDesk Search Image](/images/customer-success/professional-services-engineering/professional-services-delivery-methodology/iteration-0/Zen-search.png)

#### Step 2: YAML ファイルを編集

1. 検索から YAML を選択し、`Edit > Open in Web IDE` をクリック
   ![Edit YAML Image](/images/customer-success/professional-services-engineering/professional-services-delivery-methodology/iteration-0/edit-yaml.png)

2. notes セクションの後（パイプ `|` で始まる）に情報を追加:

```yaml
---
id: 27946339528
name: 5a1f9965 Test Account
notes: |
   PS Project in Progress
   Project Manager:
   Slack Channels:
   Engineers:
   Start Date:
   Anticipated End Date:
   Summary of Engagement:
   Support should know:
   Collaboration Project RAID(Issue) Board Link:
