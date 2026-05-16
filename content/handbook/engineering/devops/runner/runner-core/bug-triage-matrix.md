---
title: "Runner Core バグトリアージ決定マトリクス"
description: "これは、バグの優先順位付けと自律的なクローズ決定のための透明性の高いデータ駆動フレームワークを確立するものです。目標は、プロダクトおよびカスタマーサポートと連携し、どのバグを修正またはクローズするかについて一貫性があり説明可能な決定をチームが下せるようにすることです。これにより、明確に説明されたビジネス上の理由によってプロダクトまたはエンジニアリングが例外を設ける余地がなくなるわけではありません。"
upstream_path: "/handbook/engineering/devops/runner/runner-core/bug-triage-matrix/"
upstream_sha: "1065c86ab1ba75adefbb07560d726608885e6d4e"
translated_at: "2026-04-28T14:02:31Z"
translator: claude
stale: false
lastmod: "2026-01-29T16:51:24-05:00"
---

## RICE 適応型優先スコア

### 計算式

```text
優先スコア = リーチ + 顧客インパクト + コミュニティシグナル + 回避策要素
```

**範囲: 0〜10 点**

### スコアの構成要素

#### 1. リーチ（0〜3 点）- エグゼキューターへの影響

戦略的投資に基づく分類:

| 階層 | エグゼキューター | スコア |
|------|-----------|-------|
| サポート済み | kubernetes, docker, shell, instance, docker autoscaler | 3 |
| フェーズアウト | custom, docker+windows, ssh | 1 |
| 非推奨 | docker+machine | 0 |

#### 2. 顧客インパクト（0〜3 点）

| スコア | 基準 |
|-------|----------|
| 3 | 高価値顧客のブロッカー / ARR への影響 |
| 2 | サポートチケット付きで顧客から報告された / 顧客への影響あり |
| 1 | コミュニティから報告され検証・再現済み |
| 0 | 顧客またはコミュニティによる確認なし |

#### 3. コミュニティシグナル（0〜2 点）

| スコア | 基準 |
|-------|----------|
| 2 | 20 件以上のアップボート |
| 1 | 10〜19 件のアップボート |
| 0 | \<10 件のアップボート |

#### 4. 回避策の有無（0〜2 点）

| スコア | 基準 |
|-------|----------|
| 2 | 回避策なし |
| 1 | 複雑な回避策が存在する |
| 0 | シンプルかつドキュメント化された回避策がある |

---

## スコア別の決定アクション

| スコア | 決定 |
|-------|----------|
| **5〜10** | 修正 - スコアに基づいて適切なマイルストーンにスケジュールする（高いほど早い） |
| **0〜4** | クローズ - "Won't Do" として説明付きでクローズする |

---

## シナリオ

バグ担当者（Bug Wranglers）は、以下の条件が組み合わさった場合にバグをクローズできます:

- バグが `docker+machine` またはその他の非推奨機能に影響する
- インパクトが低い - 優先スコア \<= 4
  - 顧客エスカレーションなし
  - バグの経過期間 > 1 年（現在のバックログの約 60% は 1 年以上前のバグ）
- 動作がドキュメント化されている
- 2 回の試みで再現不可
- 報告者に追加情報を求めたが 7 日間応答なし

### 即時クローズの条件

| シナリオ | 基準 | アクション |
|----------|----------|--------|
| **サポートウィンドウ外** | バージョン \< 16.x で報告されたバグ | 即時クローズ、サポート対象外 |
| **サポート済みバージョンで修正済み** | 18.6（現行）で再現不可、かつ報告者が 17.x または 16.x を使用 | アップグレード案内付きでクローズ |

---

## 現在のバックログへの適用

現在のバックログを基にした例を以下に示します:

### スケジュール予定

- [再帰的サブモジュールチェックアウト時のエラー (fatal: transport 'file' not allowed)](https://gitlab.com/gitlab-org/gitlab-runner/-/work_items/38908) - (24 アップボート、Tier 1 エグゼキューター)
- [Docker デプロイ時の GitLab Runner ビルド失敗 (Docker 29)](https://gitlab.com/gitlab-org/gitlab-runner/-/work_items/39100) - (19 アップボート、Tier 1 エグゼキューター)
- [ポッドが退避された際、タスク完了に成功してもジョブが失敗する (Runner 17.9 以降)](https://gitlab.com/gitlab-org/gitlab-runner/-/work_items/38678) - (18 アップボート、Tier 1 エグゼキューター)

### クローズ

- [Docker-machine Preparation Failed](https://gitlab.com/gitlab-org/gitlab-runner/-/work_items/26564)
  - クローズしたところ、22 件のアップボートと 8 件のがっかり絵文字があったにもかかわらず反発は最小限でした（コメント 1 件）
- [docker+machine を使用した Gitlab Runner が EC2 インスタンスを生成し続けるが使用できない](https://gitlab.com/gitlab-org/gitlab-runner/-/work_items/4193)
  - クローズしたが、23 件のアップボートがあったにもかかわらず反発なし
- [スポットインスタンスの停止失敗](https://gitlab.com/gitlab-org/gitlab-runner/-/work_items/3687)
  - クローズしたが、10 件のアップボートがあったにもかかわらず反発なし
- [gitlab-runner + virtualbox + pwsh での UTF-8 および GBK エンコードバグ](https://gitlab.com/gitlab-org/gitlab-runner/-/work_items/29145)
  - クローズ済み: Runner v15.1.0 で報告され、最近のバージョンでの事前検証の証拠なし
- [ヘルパーイメージのプル時に 403 Forbidden](https://gitlab.com/gitlab-org/gitlab-runner/-/work_items/29337)
  - クローズ！v15.4.0 で最初に報告され、その後ほとんど注目されていない

#### クローズ時のサンプルコピー

- 一般的な低優先度 / 低スコア

```markdown
この Issue を報告していただき、またお時間をいただきありがとうございます。

このバグをバックログに照らし合わせて評価した結果、現在の優先順位付けの閾値を下回ると判断しました。これは、バックログ内の他の Issue と比較してインパクトが限定的であること、回避策が存在すること、または関連報告が少ないことを意味します。また、私たちは Runner のアーキテクチャを広く改善するための取り組みを継続しており、それによってこの Issue が将来的に解消される可能性があります。

これはあなたの報告の妥当性を否定するものではありません。単純にリソースが限られているため、最も広範なインパクトを持つ Issue に集中する必要があります。

状況が変わった場合（影響の拡大や、より緊急性を高める条件の変化など）、喜んで再検討します。

/status "Won't do"
```

- 再現不可

```markdown
この Issue を報告していただきありがとうございます。

Runner {{current_version}} で再現を試みましたが、Issue を確認することができませんでした。これは、後続のリリースでバグが解消された、環境固有の問題である、または再現に必要な追加のコンテキストが不足していることを示している可能性があります。[メンテナンス済みバージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)をご参照ください。

現在もこの Issue が発生している場合は、現在の Runner バージョンで Issue が発生していることを確認する追加情報とともにお知らせください。

再現性のある動作を確認できれば、喜んで再検討します。

/status "Won't do"
```

- 非推奨の docker+machine

```markdown
この Issue を報告していただきありがとうございます。

このバグは `docker+machine` エグゼキューターに影響しており、これは GitLab 17.5 で非推奨となり、削除が予定されています。

非推奨エグゼキューターの修正にエンジニアリングリソースを投入することはもはや行っていません。この機能にまだ依存されている場合、ご不便をおかけすることを認識しています。他のエグゼキューターオプションについては[ドキュメント](https://docs.gitlab.com/runner/executors/)をご覧ください。

サポート対象のエグゼキューターにリソースを集中するため、ご理解いただけますと幸いです。

/status "Won't do"
```

---

## リサーチ

これは以下の業界のベストプラクティスから引用しています:

- **GitLab の Severity/Priority マトリクス**:
  - https://handbook.gitlab.com/handbook/product-development/how-we-work/issue-triage/#outdated-issues
  - "私たちはすべての人を満足させることはできません。ユーザーをできる限り喜ばせることと、プロジェクトをメンテナブルに保つことのバランスを取る必要があります" - https://handbook.gitlab.com/handbook/product-development/how-we-work/issue-triage/#lean-toward-closing
  - "14 日後、誰も Issue に応答しなければ、Issue はクローズされるべきです" - https://handbook.gitlab.com/handbook/product-development/how-we-work/issue-triage/#outdated-issues
  - "バグフィックスのバックポートは現行（最初の）バージョンに対してメンテナンスされます..." - https://docs.gitlab.com/policy/maintenance/#maintained-versions
- **RICE スコアリングモデル** (Intercom): Reach, Impact, Confidence, Effort
  - https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/
- **Kubernetes トリアージライフサイクル**:
  - https://www.kubernetes.dev/docs/guide/issue-triage/#bugs
  - 例: https://github.com/kubernetes/test-infra/issues/25967#issuecomment-1285025238
- **Chromium の Won't Fix カテゴリ**:
  - https://www.chromium.org/chromium-os/developer-library/reference/bugs/life-of-a-bug/#no-action-issues
