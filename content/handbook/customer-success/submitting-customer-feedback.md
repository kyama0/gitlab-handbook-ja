---
title: "DAP カスタマーフィードバックフレームワーク"
upstream_path: /handbook/customer-success/submitting-customer-feedback/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## DAP カスタマーフィードバックフレームワーク

**DAP Customer Feedback** プラットフォームは、お客様や GitLab チームメンバーから Duo Agentic Platform (DAP) に関する機能要求や強化アイデアを収集するための GitLab の[一元化ツール](https://dap-customer-feedback-6c19a4.gitlab.io/)です。各サブミッションは自動的に GitLab Issue になり、適切なチームにルーティングされ、開発プロセスを進む際に追跡できます。

> **重要:** このシステムは **機能要求と強化のみ** のためのものです。バグ報告は Support Channels を通じて提出してください。

---

### 誰がこれを使用すべきか?

| ロール | 貢献の方法 |
|------|-------------------|
| **Customer Success Manager** | 製品計画でお客様のアイデアが聞かれることを確実にするため、お客様に代わって機能要求を提出します。 |
| **Solutions Architect** | お客様の実装中に発見された機能ギャップや望ましい強化を共有します。 |
| **Sales チームメンバー** | セールス会話中に出てくる機能要件と強化アイデアを提出します。 |
| **Support Engineer** | プロダクトとエンジニアリングチームがパターンを見られるように、お客様の強化要求（バグではない）を統合して提出します。 |
| **内部ユーザー** | DAP を使用した自分自身の経験に基づいて機能要求と強化アイデアを提出します。 |

---

### バグ vs 機能要求

#### バグは Support Channels を通じて提出する

DAP の機能にバグや問題を見つけた場合は、このフォームを使用 **しないで** ください。代わりに以下のようにします:

1. Support Channels を通じてバグを提出する

2. サポートチームのエスカレーションプロセスに従う

#### 機能要求はここに提出する

新しい機能と強化には[このフォーム](https://dap-customer-feedback-6c19a4.gitlab.io/)を使用してください。

---

### 仕組み

#### Step 1 — 機能要求を共有する

[フィードバックフォーム](https://dap-customer-feedback-6c19a4.gitlab.io/)に、見たい機能、解決するユースケース、それが重要な理由についての詳細を記入してください。チームが影響を完全に理解できるように、関連するコンテキストを含めてください。

#### Step 2 — 適切なチームにルーティング

機能要求は、サブミッション時に選択したカテゴリーに基づいて、適切な GitLab Group にルーティングされます。

#### Step 3 — 進捗を追跡

リクエストは自動的に GitLab Issue に変換されます。チームが評価する際に、ディスカッションをフォローし、コメントを追加し、最新情報を得られるリンクが提供されます。すべての[オープンサブミッションはこちら](https://gitlab.com/groups/gitlab-org/-/work_items?sort=created_date&state=opened&label_name%5B%5D=customer_feedback_form&first_page_size=20)で確認できます。

---

### 主な機能

| 機能 | 説明 |
|---------|-------------|
| **GitLab ログインが必要** | 安全な認証により、リクエストが追跡可能で実在の人物にリンクされていることを保証します。 |
| **添付ファイルとコンテキスト** | スクリーンショット、モックアップ、リンク、その他のドキュメントをアップロードしてコンテキストを提供します。 |
| **構造化されたフォーム** | 一貫した質問により、リクエストを理解するために必要な情報を確実にキャプチャします。 |
| **コラボレーションフィードバック** | 結果として作成される GitLab Issue 上で、チームと直接詳細を議論します。 |

---

### 良い機能要求のためのヒント

- **結果について具体的に** — 「レポーティングを改善する」ではなく、「カスタムチャート付きの毎日のメールレポートをスケジュールする機能を追加する」と言いましょう

- **解決する問題を説明する** — これはどのような痛みのポイントや制限に対応しますか?

- **コンテキストを提供する** — なぜこれが重要で、ワークフローにどのように影響するかを説明してください

- **例を含める** — スクリーンショット、モックアップ、または手順ごとの説明はアイデアを明確にするのに役立ちます

- **関連項目をリンクする** — 関連する場合は、GitLab Issue、ドキュメント、お客様との会話を参照してください

- **ユーザーについて考える** — お客様がこの機能をどのように使用し、どのようなメリットを提供するかを考慮してください

---

### よくある質問

**機能要求とは何が該当しますか?**

- 新しい機能、製品改善、機能の拡張、より良いワークフロー、ドキュメントの強化、または DAP がより効果的に問題を解決できるようにするためのアイデアです。既存の機能が正しく動作しないバグ報告や Issue は提出 *しないで* ください — それらは Support Channels を通じます。

**これは実装が保証されていますか?**

- いいえ。ただし、あなたのリクエストは大切にされ、製品計画の際に検討されます。優先順位付けは、お客様のニーズ、技術的な実現可能性、戦略的整合性、ロードマップ計画によります。

**機微な情報を提出する必要がある場合はどうすればいいですか?**

- すべてのサブミッションは、関連チームに見える GitLab Issue になります。お客様を識別できる情報、API キー、または高度に機密の詳細を共有することは避けてください。リクエストに機微な情報が関係する場合は、Customer Success Manager と別途相談するか、チームと直接相談してください。

---

### カスタマーフィードバックトリアージプロセス

機能要求が提出されると、Product Manager は何が構築されているか、何が拒否されているか、なぜかについての透明性を作るためにラベルを使用してそれらをトリアージします。

#### トリアージラベル

##### Customer Feedback ラベル

`customer_feedback::new` ラベルがサブミッション時に自動的に割り当てられます。Product Manager はその後、以下のいずれかに更新します:

| ラベル | 意味 |
|-------|---------|
| `customer_feedback::new` | 受信したばかり（自動割り当て） |
| `customer_feedback::accepted` | 構築する機能として承認済み |
| `customer_feedback::wont-do` | 追求しないと決定 |

##### 重複 Issue の管理

重複は、重複 Issue を識別し、それらをプライマリ Issue にマージするデイリージョブを通じて管理します。

| ラベル | 意味 |
|-------|---------|
| `duplicate::primary` | 維持され追跡される Issue |
| `duplicate::merged` | クローズされプライマリに統合された Issue |

マージプロセスは次のように動作します:

- 重複 Issue の URL をプライマリ Issue の内部メモにコピーする。

- プライマリ Issue にまだない重複からのラベルを追加する。

- プライマリ Issue がクローズされている場合は、再オープンしカスタマーフィードバックラベルを「new」にリセットする。

- 重複 Issue に `duplicate::merged` のラベルを付け、クローズする。

##### 優先度とステータス

承認されたリクエストについては、Product Manager は緊急性を示すために `priority::` ラベル（`priority::1` から開始）を割り当て、開発ワークフローを進む進捗を反映するために Issue 上の **Status フィールド** を更新します。

加えて、承認されたリクエストについては:

- `DAP Key Account` **または** `priority::1` または `priority::2` ラベルが使用されている場合、Product Manager は **`quarter::` ラベルと `milestone::` ラベルも追加します**。

- 他のすべての承認されたリクエストについては、Product Manager は変更がどのマイルストーンに行くかについて確信がある場合、`Milestone Backlog` ラベルか別のマイルストーンラベルを追加することが推奨されます。

##### Won't-Do ラベル

リクエストが拒否されると、その理由を説明する以下のラベルのいずれかが追加されます:

| ラベル | 意味 |
|-------|---------|
| `wont_do::out-of-scope` | 私たちの製品の範囲外 |
| `wont_do::not-core-product` | 私たちのコア製品ビジョンと一致しない |
| `wont_do::low-priority` | 顧客需要が低い、またはニッチなユースケース |
| `wont_do::better-alternatives` | お客様は外部ツールでこれを達成できる |
| `wont_do::security-risk` | 私たちのセキュリティを弱めることになる |
| `wont_do::design-risk` | アーキテクチャ上の問題を作り出す |
| `wont_do::platform-limitation` | 技術的制約により実装が実現不可能 |
| `wont_do::vendor-dependency` | 外部サービスへの依存が必要 |
| `wont_do::maintenance-burden` | サポートコストが利益を上回る |
| `wont_do::backwards-incompatible` | 既存の機能を壊すことになる |
| `wont_do::technical-debt` | これを解決すると解決するよりも多くの問題を作り出す |
| `wont_do::duplicate-feature` | 機能は製品の他の場所に存在する |
| `wont_do::product-vision` | ロードマップと製品の方向性と一致しない |
| `wont_do::performance-concern` | パフォーマンスへの負の影響 |
| `wont_do::regulatory-blocker` | 法的またはコンプライアンス上の理由により実装が妨げられる |

#### トリアージの例

| シナリオ | ラベルとフィールド |
|----------|--------|
| 機能要求を承認 | `customer_feedback::accepted`, `priority::1`, Status: Validation Backlog, `milestone::backlog` |
| キーアカウントまたは高優先度リクエストを承認 | `customer_feedback::accepted`, `DAP Key Account` または `priority::1`/`priority::2`, `quarter::`, `milestone::` |
| 機能要求を拒否 | `customer_feedback::wont-do`, `wont_do::low-priority` |
| 開発中の機能 | `customer_feedback::accepted`, `priority::1`, Status: In Dev, `milestone::` |
| 出荷された機能 | `customer_feedback::accepted`, `priority::1`, Status: Complete, `milestone::` |
