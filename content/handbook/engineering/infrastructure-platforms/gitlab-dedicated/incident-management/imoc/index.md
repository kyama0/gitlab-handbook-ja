---
title: "GitLab Dedicated IMOC レスポンスチーム"
description: "GitLab Dedicated インシデントマネージャーオンコール（IMOC）レスポンスチームのワークフロー、責任範囲、およびプロセス"
upstream_path: /handbook/engineering/infrastructure-platforms/gitlab-dedicated/incident-management/imoc/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-28T22:31:40Z"
translator: claude
stale: false
lastmod: "2026-04-09T20:14:47+00:00"
---

## 概要

GitLab Dedicated インシデントマネージャーオンコール（IMOC）レスポンスチームは、GitLab Dedicated カスタマーテナントに影響するインシデントにおいて**インシデントリードの役割**を担います。GitLab Dedicated プラットフォームリーダーシップエスカレーションローテーションの一部として、Dedicated IMOC は高深刻度インシデント発生時にリーダーシップとコーディネーションを提供し、GitLab Dedicated エンジニアオンコール（GDEOC）のエスカレーションポイントとして機能します。

このページでは、Dedicated IMOC ローテーションを担当するエンジニアリングマネージャー向けに、Dedicated 固有のワークフロー、ツール、および手順を文書化しています。

**主要なコンテキスト:**

- **担当役割**: [インシデントリード](/handbook/engineering/infrastructure-platforms/incident-management/roles/incident-lead/)
- **プラットフォーム**: カスタマー固有のシングルテナント AWS インフラ
- **カスタマーリレーション**: Dedicated のテナントには CSM（カスタマーサクセスマネージャー）と ASE（アサインドサポートエンジニア）が存在し、追加のコミュニケーション経路が確保されています。これらの担当者は Switchboard で最新情報を確認できます。
- **ローテーション**: 24/7 対応を提供する [Dedicated プラットフォームリーダーシップエスカレーション](https://gitlab.pagerduty.com/schedules/PBA2PDS)
- **ツール**: インシデント管理に incident.io、カスタマーコミュニケーションに Switchboard を使用

## Dedicated IMOC を呼び出すタイミング

| シナリオ                                                     | 呼び出し方法                         | 緊急度     |
| ------------------------------------------------------------ | ------------------------------------ | ---------- |
| **S1/S2 インシデント**                                       | 自動または手動エスカレーション       | 即時       |
| **GDEOC 無応答**（30 分超過）                                | PagerDuty 自動エスカレーション       | 即時       |
| **重大な意思決定**（Geo フェイルオーバー、緊急メンテナンス） | GDEOC による手動エスカレーション     | 即時       |
| **複雑なコーディネーションが必要**                           | GDEOC による手動エスカレーション     | 必要に応じて |
| **セキュリティ脆弱性**（高/重大）                            | SIRT が IMOC を呼び出し              | 即時       |

**ページング方法:**

1. PagerDuty インシデント画面で **「Escalate」** をクリック → **Level 2** を選択
2. **GitLab Dedicated プラットフォームリーダーシップエスカレーション** スケジュールにページング

3. IMOC は 15 分以内に確認応答し、30 分以内にキーボードを操作開始します

## インシデントリードの責任（Dedicated コンテキスト）

Dedicated インシデントのインシデントリードとして、IMOC はインシデント発生時のコーディネーションと意思決定を担います。このセクションでは、Dedicated 環境においてこれらの責任をどのように果たすかを説明します。

### 1. インシデントのリーダーシップとコーディネーション

**IMOC はリードであり、解決者ではありません。** あなたの役割はコーディネーションと意思決定であり、技術的なトラブルシューティングではありません。

**主要なアクション:**

- S1/S2 インシデントに対する戦略的な監督を提供する
- GDEOC がエスカレーションサポートを必要とする際に重要な決定を下す
- チーム間および外部パートナーとのリソース調整を行う
- ディレクター/VP リーダーシップへのエスカレーションタイミングを判断する

**問いかけの例:**

- 「緩和計画は何ですか？私に何が必要ですか？」
- 「このインシデントに他に誰を参加させるべきですか？」
- 「カスタマーへの影響を考慮すると、[オプション X] を進めましょう」

### 2. カスタマーコミュニケーションの監督

**コミュニケーションフロー:** GDEOC → IMOC → GDCMOC → CSM/ASE → カスタマー

**重要なタイミング:**

- **S1**: IMOC はインシデントチャンネルの更新を 30 分ごとに行います（.com と同様）。GDCMOC はカスタマーへの更新を 60 分ごとに送信します。incident.io にはインシデントチャンネル更新のリマインダーがあります。
- **S2**: 影響レベルに基づいた定期更新
- **緊急メンテナンス**: 変更前にカスタマーに**通知**する（承認は不要）

**あなたのアクション:**

- S1/S2 インシデントで GDCMOC に即座にページングする
- GDCMOC がカスタマーに中継できる明確なステータス更新を提供する
- カスタマーへの配信前に外部 RCA をレビューする
- [コミュニケーションリードのカスタマーコール対応](/handbook/engineering/infrastructure-platforms/incident-management/roles/communications-lead/#communications-lead-role-in-customer-calls)に規定された通り、必要に応じてカスタマーと連携する
- S1 インシデントにおいてサービス復旧につながる行動のコスト影響ある緩和策を承認する（[インシデント緩和プロセス](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/incident-management/-/blob/main/procedures/incident-mitigation-approvals.md)に従う）

### 3. 技術的意思決定

| 意思決定の種類             | 必要な状況                               | 権限                                                                                                                                                    |
| -------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Geo フェイルオーバー**   | S1 障害、Geo 対応テナント                | IMOC の判断                                                                                                                                             |
| **緊急メンテナンス**       | メンテナンスウィンドウ外の変更           | EM+（IMOC）                                                                                                                                             |
| **コスト影響ある緩和策**   | インフラのスケーリング                   | [インシデント緩和プロセス](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/incident-management/-/blob/main/procedures/incident-mitigation-approvals.md)に従う |
| **深刻度の調整**           | 影響レベルの変更                         | IMOC + GDEOC                                                                                                                                            |

**緊急メンテナンスプロトコル:**

- 常に **「カスタマーに通知」** — 承認を待ってはいけません
- GDCMOC に即座に連絡する
- 通知中も変更を進める

### 4. エスカレーション管理

IMOC として、インシデントを迅速に解決するためのいくつかのエスカレーションパスが利用できます。このセクションでは、迅速な問題解決のために各エスカレーションポイントをいつ、どのように活用するかを説明します。

#### GDCMOC（GitLab Dedicated コミュニケーションマネージャーオンコール）

- **タイミング**: S1 インシデント、カスタマー影響のある S2 インシデント、緊急メンテナンス、カスタマー通知が必要な場合
- **方法**: `/pd trigger` → サービス: "Incident Management - GDCMOC"

#### Dedicated グループテクニカルエスカレーション

- **タイミング**: Dedicated 固有の技術的専門知識が必要な場合
- **方法**: PagerDuty エスカレーション: "Dedicated Group Technical Escalation"

#### AWS エンタープライズサポート

- **タイミング**: AWS インフラの問題
- **方法**: [AWS エンタープライズサポートエスカレーションプロセス](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/runbooks/on-call.md#escalating-to-aws-enterprise-support)に従う
- **参考**: [AWS エンタープライズサポートシート](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/runbooks/img/GitLab-AWS_Enterprise_Support_Sheet.pdf)

#### Tier 2 / Dev エスカレーション

- **タイミング**: GitLab アプリのバグ（Database、Gitaly、Rails）
- **方法**: インシデント Slack チャンネルで [`/inc escalate`](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/runbooks/on-call.html#escalating-internally-gitlab-teams) → tier2: [チーム]

#### SIRT（セキュリティインシデントレスポンスチーム）

- **タイミング**: 高/重大なセキュリティ脆弱性
- **方法**: SIRT がコンタクトしてくる; Dedicated 固有の緩和策でサポートする

### 5. インシデント後の監督

**必須:**

- **S1**: 内部 RCA + 外部 RCA（1 週間以内）
- **S2/S3/S4**: リーダーシップから要請された場合のみ内部 RCA

**チェックリスト:**

- [ ] 1 週間以内に内部 RCA を完了
- [ ] 外部 RCA のレビューと承認（S1）
- [ ] 是正措置の作成（`/inc follow-up`）
- [ ] インシデントのフォローアップを文書化してリンク

## GitLab Dedicated プラットフォームのコンテキスト

### Dedicated プラットフォームの特性

**シングルテナント:**

- カスタマーのアカウント上の専用 AWS インフラ
- カスタマー固有のメンテナンスウィンドウ
- 他のカスタマーから完全に分離

**Geo 対応:**

- 災害復旧のためのセカンダリリージョン
- Geo フェイルオーバー: **30〜45 分**（5K リファレンスアーキテクチャ）
- フェイルオーバー後は手動フェイルバックが必要

**US Dedicated for Gov（PubSec）:**

- FedRAMP 認可済み、厳格なコンプライアンス
- **incident.io は使用不可** — PagerDuty のみ
- PagerDuty にカスタマーの保護データを入れない

### メンテナンスウィンドウ

**標準:** 計画変更のためのカスタマー固有の週次ウィンドウ。詳細は [Dedicated メンテナンスウィンドウ](https://docs.gitlab.com/administration/dedicated/maintenance/)を参照。

**緊急:**

- 重大なセキュリティパッチ、S1 緩和策、インフラ障害
- カスタマーに通知（承認不要）
- EM+ の承認が必要（IMOC が権限を持つ）

### 主要なツール

#### Switchboard（Dedicated 固有）

- カスタマー通知ツール
- GDCMOC が通知を送信（IMOC がステータス更新を提供）
- テンプレート: 調査開始、更新、エスカレーション対応、緩和進行中、解決
- 含まれる情報: カスタマー連絡先（ASE と CSM メール）、メンテナンスウィンドウ情報、テナント情報内の GitLab バージョン

#### incident.io（.com と同様）

- .com と Dedicated の両方で使用
- FedRAMP コンプライアンスにより Dedicated for Government（PubSec）では不使用
  - PagerDuty のみ
- Slack チャンネルと GitLab Issue の自動作成
- PagerDuty と連携してページングとエスカレーションを実施

## 主な違い: Dedicated vs .com IMOC

| 観点                   | GitLab.com                  | Dedicated                                          |
| ---------------------- | --------------------------- | -------------------------------------------------- |
| **コミュニケーション** | StatusPage（公開）          | Switchboard（カスタマーへ直接）                    |
| **コムマネージャー**   | CMOC（全社）                | GDCMOC（Dedicated 専用）                           |
| **スコープ**           | プラットフォーム全体の障害  | カスタマー固有のインシデント                       |
| **インフラ**           | GCP、継続的デプロイ         | AWS、メンテナンスウィンドウ                        |
| **緊急承認**           | [.com プロセス]             | IMOC 承認                                          |
| **DR/フェイルオーバー**| [.com アプローチ]           | Geo フェイルオーバー（30〜45 分）                  |
| **コンプライアンス**   | 標準                        | Dedicated for Gov（PubSec）FedRAMP 制限            |
| **インフラエスカレーション** | [.com パス]           | AWS エンタープライズサポート                       |

## 重大な意思決定シナリオ

**注意:** Geo フェイルオーバーの判断は、手順、ツール、運用上の影響を理解するための事前トレーニングが必要です。フェイルオーバーを開始または承認する前に以下の資料を確認してください:

- **Geo フェイルオーバーランブック:** https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/runbooks/geo-failover.md
- **Geo フェイルオーバー消防訓練トレーニング:** https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/engineering/disaster_recovery/fire_drills/drill-failover-operator.md

### シナリオ 1: S1 完全障害 - Geo フェイルオーバー

**状況:** カスタマーの GitLab インスタンスが完全に利用不可。

**アクション（最初の 15 分）:**

1. PagerDuty を確認し、GDEOC に確認: 「GitLab が完全に利用不可ですか？」
2. GDCMOC にページング: `/pd trigger` → 「S1 完全障害、緩和策を調査中」
3. GDEOC に確認: 「テナントは Geo 対応ですか？[前提条件](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/engineering/disaster_recovery/README.md#dr-plan-eligibility)は満たされていますか？」
4. **決定:** Geo フェイルオーバー vs. その他の復旧？
5. 「はい」の場合: 「Geo フェイルオーバーを承認します。GDEOC、進めてください。GDCMOC、カスタマーに通知してください。」
6. 進捗を監視し、GDCMOC への 60 分ごとの更新を確保、1 時間経過しても緩和策がなければディレクターにエスカレーション

**重要な教訓:** Geo フェイルオーバーは複雑な手順です。GDEOC とともにメリットとデメリットを評価し、バランスのとれた判断を下してください。

### シナリオ 2: 緊急メンテナンス - セキュリティパッチ

**状況:** SIRT がメンテナンスウィンドウ外でのパッチ適用を必要とする重大な脆弱性を特定。

**アクション:**

1. SIRT に確認: 「待機した場合のリスクは？」高ければ: 緊急メンテナンスを進める
2. GDCMOC にページング: 1 行の概要 + 推定ダウンタイム
3. IMOC として承認: 「デプロイとロールバック計画は？」
4. **重要**: デプロイ進行中にカスタマーに通知する（承認待ちにしない）
5. 監視し、GDCMOC に更新を提供し、成功を確認
6. 1 週間以内に RCA を確保

**重要な教訓:** 緊急メンテナンスはリスクと照らし合わせて評価する必要があります。通常のメンテナンスウィンドウに対してリソースとコーディネーションが必要です。コミュニケーションツールを十分に活用して、カスタマーおよびその週の次のオンコール担当者に情報を伝えてください。

### シナリオ 3: GDEOC 無応答

**状況:** PagerDuty があなたにエスカレーション。GDEOC が 30 分以上確認応答していない。

**アクション:**

1. アラートを確認し、現在の [GDEOC](https://gitlab.pagerduty.com/schedules/PE57MNA) が誰かを確認
2. Slack DM: 「こんにちは [名前]、PagerDuty アラートがあります。対応できますか？」
3. 応答がない場合（10 分後）: 現在のタイムゾーンの別の Dedicated SRE に再割り当てし、#gitlab-dedicated-team に投稿
4. それでも解決しない場合: Dedicated 管理者全員にページング（@fviegas、@o-lluch、@denhams、@nitinduttsharma）
5. 文書化し、GDEOC のマネージャーがミスしたページについてフォローアップ

**重要な教訓:** まずカバレッジを確保し、ミスしたページへの対応は後で行ってください。

## コミュニケーション要件

### S1 インシデント

- IMOC はインシデントチャンネルの更新を 30 分ごとに行います。GDCMOC はカスタマーへの更新を 60 分ごとに送信します。更新は GDCMOC zendesk チケットまたは Switchboard インシデントコムズ経由で送信できます。
- 含める内容: 現状、実施中のアクション、可能であれば ETA
- 更新には Switchboard のテンプレートコムズスタイルに従ってください。GDCMOC への手動更新では内部的な詳細を避け、影響に焦点を当てたステートメントを提供してください。
- 以下の場合は GitLab Dedicated ディレクターにエスカレーション: 緩和策の見通しなく 1 時間超過、大幅なコーディネーションが必要、またはカスタマーエスカレーション

### S2 インシデント

- 影響に基づいた定期更新
- S1 よりも IMOC の関与は軽め
- S1 へのエスカレーションを監視

### S3/S4 インシデント

- 通常 IMOC の対応は不要
- 複雑なコーディネーションのために関与することがある

## クイックリファレンス

### S1 インシデントチェックリスト

```plaintext
☐ 15 分以内に PagerDuty を確認（30 分以内にキーボード操作開始）
☐ GDCMOC に即座に連絡

☐ GDEOC と深刻度と影響を確認
☐ 確認: 「緩和計画は何ですか？何が必要ですか？」
☐ 障害の場合: 「Geo 対応ですか？フェイルオーバーを検討しますか？」
☐ 重大な決定を下す（フェイルオーバー、緊急メンテナンス、コスト）
☐ 30 分ごとにインシデントチャンネルを更新
☐ 緊急変更を承認（EM+ 権限）
☐ 1 時間経過しても緩和策なし: Dedicated ディレクターにエスカレーション
☐ インシデント後: 1 週間以内に RCA + 外部 RCA
```

### 誰にページングするか

| 必要なもの                   | 誰に                             | 方法                                             |
| ---------------------------- | -------------------------------- | ------------------------------------------------ |
| カスタマーコミュニケーション | GDCMOC                           | `/pd trigger` → "Incident Management - GDCMOC"  |
| Dedicated テクニカルヘルプ   | Dedicated テクニカルエスカレーション | PagerDuty エスカレーション                    |
| AWS インフラ                 | AWS エンタープライズサポート     | AWS サポートシート                               |
| GitLab アプリバグ            | Tier 2 / Dev エスカレーション   | インシデント Slack チャンネルで [`/inc escalate`](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/runbooks/on-call.html#escalating-internally-gitlab-teams) → tier2: [チーム] |
| セキュリティ脆弱性           | SIRT                             | SIRT 側から連絡が来る                         |
| マネジメントサポート         | Dedicated マネジメント           | @fviegas、@o-lluch、@denhams、@nitinduttsharma   |

## リードすることとこなすことの違い

**IMOC がすべきこと:**

- 確認する: 「緩和計画は何ですか？」「次のステップは何ですか？」「どんな選択肢がありますか？」「誰が必要ですか？」
- フォーカスする: チームを根本原因の分析ではなく緩和策に集中させる
- 決定する: 「影響を考慮して、Geo フェイルオーバーを進めます」
- コーディネートする: 「AWS エンタープライズサポートを呼び出します」
- プロセスを確保する: 「GDCMOC は更新されていますか？」
- コミュニケーションする: 更新がカスタマーに準備され送信されていることを確認
- ブロッカーを取り除く: 「コスト増加を承認します」

**IMOC がすべきでないこと:**

- デバッグに飛び込む: 「SSH してログを確認します」
- 引き受ける: 「私が対応します」
- カスタマーに直接連絡する: 「カスタマーにメールします」
- 詳細に迷い込む: ログを 30 分間読み続ける

**例外:** GDEOC が利用できない場合やインシデントが急速に拡大している場合は、戦術的に介入してください。

## よくある落とし穴

**GDCMOC の呼び出しを遅らせる:** S1 およびカスタマー影響のある S2 インシデントでは 10 分以内に呼び出してください

**完全な情報を待つ:** 70% の情報で判断する — スピードが重要です

**リードよりも引き受ける:** 確認するが、解決しない。GDEOC を技術的専門家として信頼する

**インシデント後を忘れる:** RCA（1 週間）のリマインダーを設定し、`/inc follow-up` を使用する

**決定を文書化しない:** 理由とともに Slack を更新する:「決定: 30〜45 分の復旧 vs. 2〜4 時間のバックアップ復元を考慮して Geo フェイルオーバーを実施」

## 用語集

- **GDEOC**: GitLab Dedicated エンジニアオンコール
- **GDCMOC**: GitLab Dedicated コミュニケーションマネージャーオンコール
- **CSM**: カスタマーサクセスマネージャー
- **ASE**: アカウントソリューションエンジニア（アサインドサポートエンジニアとも呼ばれる）
- **Switchboard**: カスタマー通知ツール（Dedicated）
- **Geo 対応テナント**: DR のためのセカンダリリージョンを持つインスタンス
- **EM+**: エンジニアリングマネージャー以上
- **SIRT**: セキュリティインシデントレスポンスチーム
- **FedRAMP**: Federal Risk and Authorization Management Program（連邦リスク認可管理プログラム）

## リソース

**必須:**

- [Dedicated オンコールランブック](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/runbooks/on-call.md)
- [インシデント管理ハンドブック](/handbook/engineering/infrastructure-platforms/incident-management/)
- [インシデントリードの役割](/handbook/engineering/infrastructure-platforms/incident-management/roles/incident-lead/)

**Dedicated 固有:**

- [Switchboard ガイド](https://console.gitlab-dedicated.com/)
- [Geo フェイルオーバーランブック](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/runbooks/geo-failover.md)
- [DR 前提条件](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/engineering/disaster_recovery/README.md#dr-plan-eligibility)

**トレーニング:**

- **動画: インシデントレスポンスの役割とレスポンスチーム** (Lyle Kozloff): https://youtu.be/vmK9-7roDFM
- **Geo フェイルオーバーランブック:** https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/runbooks/geo-failover.md
- **Geo フェイルオーバー消防訓練トレーニング:** https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/engineering/disaster_recovery/fire_drills/drill-failover-operator.md
- LevelUp コース: 「GitLab Dedicated IMOC トレーニング」（20〜25 分）— 作成予定
- 動画ウォークスルー: 「Switchboard カスタマー通知」（5 分）— 作成予定

**ヘルプ:**

- 現在の IMOC: PagerDuty 「GitLab Dedicated プラットフォームリーダーシップエスカレーション」スケジュール
- EM: @fviegas、@o-lluch、@denhams、@nitinduttsharma
- Slack: #gitlab-dedicated-team、#incident-management

---

**管理者:** GitLab Dedicated インフラチーム
