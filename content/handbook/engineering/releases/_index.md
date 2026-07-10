---
title: GitLab リリース
upstream_path: /handbook/engineering/releases/
upstream_sha: 6eef8dbb6a0d15167aa5378f476b04cd38b78675
lastmod: "2026-07-02T17:44:09-06:00"
translated_at: "2026-07-10T07:06:25+09:00"
translator: codex
stale: false
---

プロダクトのリリース情報をお探しですか？[リリースポスト](https://about.gitlab.com/releases/categories/releases/)、[リリースページ](https://gitlab.com/gitlab-org/gitlab/-/releases)、[What's new](https://docs.gitlab.com/ee/administration/whats-new.html)、[changelog](https://gitlab.com/gitlab-org/gitlab/blob/master/CHANGELOG.md)、または[機能と非推奨の概要](https://gitlab-com.gitlab.io/cs-tools/gitlab-cs-tools/what-is-new-since/)を参照してください。

## 概要 {#overview}

GitLab には 3 つの異なるリリースタイプがあります:

1. **[マンスリーリリース](/handbook/engineering/releases/monthly-releases/)**: 毎月第 3 木曜日に公開される GitLab バージョン（XX.YY.0）で、[GitLab.com へのデプロイ](/handbook/engineering/deployments-and-releases/deployments/)が成功した新機能、バグ修正、パフォーマンス改善を含みます。
1. **[パッチリリース](/handbook/engineering/releases/patch-releases/)**: [メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)向けのバグ修正とセキュリティ更新で、月に 2 回公開されます。
1. **[内部リリース](/handbook/engineering/releases/internal-releases/)**: [是正 SLA](/handbook/security/product-security/vulnerability-management/sla/) 内で GitLab Dedicated に高重大度の修正を提供するためのプライベートリリース。

## リリースポリシー {#release-policy}

### なぜリリースポリシーが重要なのか {#why-release-policies-matter}

GitLab は[セマンティックバージョニング](https://semver.org/)に従っており、これは私たちの顧客との契約を確立します:

* **MAJOR** バージョンには破壊的変更が含まれる場合があります
* **MINOR** バージョンには新機能が含まれます（後方互換性あり）
* **PATCH** バージョンにはバグ修正のみが含まれます（自動アップグレードが安全）

顧客はこの契約に基づいてアップグレードの判断を行います。多くの顧客は、パッチにはバグ修正のみが含まれることを信頼しているため、広範なテストを行わずにパッチリリースを自動アップグレードします。私たちがこの契約に違反すると、次のことが起こります:

* リリースプロセス全体に対する**顧客の信頼を損なう**
* 予期しない変更で**顧客の環境をリスクにさらす**
* 顧客が計画のために頼りにしている**リリースの予測可能性を弱める**
* 急いだリリースが追加のパッチを必要とする新しいバグを導入したときに**連鎖的な問題を生み出す**

### 各リリースタイプに含まれるもの {#what-each-release-type-contains}

| リリースタイプ | 含むもの | 含まないもの |
|--------------|----------|------------------|
| **マンスリー** | 新機能、バグ修正、パフォーマンス改善 | 該当なし - これはすべての新しい作業の手段です |
| **パッチ** | バグ修正、セキュリティ修正、パフォーマンスリグレッション | 新機能、フィーチャーフラグの有効化、未完成の作業 |
| **内部** | Dedicated インスタンス向けの重大なバグ修正、セキュリティ修正 | 新機能、フィーチャーフラグの有効化、未完成の作業 |

バグおよびセキュリティ修正のタイムラインに関する SLO/SLA コミットメントについては、[パッチリリースの SLO/SLA コミットメント](/handbook/engineering/releases/patch-releases/#slo-commitments)を参照してください。

### 期限を逃したときのオーナーシップ {#ownership-when-deadlines-are-missed}

機能がマンスリーリリースの期限を逃した場合、適切なパスはリリースポリシーへの例外ではなく、**次のマンスリーリリース**です。

| チーム | オーナーシップ |
|------|------|
| Development | 次のポリシー準拠リリースでコードを出荷する |
| Product | 遅延をステークホルダーに伝える、ロードマップの期待を調整する |
| Customer Success | 顧客の期待を管理する、タイムラインの変更を交渉する |
| Release | GitLab リリースに対する顧客の信頼を維持するポリシー準拠リリースを実行する |

リリースマネージャーは、逃した期限への対応をオーナーとして引き受けることはありません。

### 例外プロセス {#exception-process}

> [!IMPORTANT]
> 承認されたすべての例外には、[Feature Change Lock (FCL)](/handbook/engineering/#feature-change-locks) とリリース後の[インシデントレビュー](/handbook/engineering/infrastructure-platforms/incident-review/)が**必要です**。**これらは任意ではありません**。

リリースポリシーへの例外はまれであり、Release チーム外での明示的な承認が必要です。

**リリースマネージャーは、リリースポリシーに違反するリクエストを却下する権限を持ちます。** Customer Success、Sales、その他のチームからのプレッシャーは、ポリシー例外の承認を構成しません。

例外が必要だと考えられる場合:

1. [**リクエスト者**が](https://gitlab.com/gitlab-org/release/tasks/-/work_items/new?issuable_template=Exception-request)ビジネス上の正当性と顧客への影響評価を文書化する
2. **リクエスト者**がプラットフォームの安定性を保護するために [Feature Change Lock (FCL)](/handbook/engineering/#feature-change-locks) を開始する（**必須**）
3. **リクエスト者**がスポンサーシップを得るために自分の組織の VP にエスカレーションする。承認するリーダーはポリシー違反についての書面による承認確認を提供する
4. **スポンサーとなる VP** が [Software Delivery Engineering Leadership](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/#software-delivery-engineering-leadership) または Infrastructure VP Platform に例外を要請する。
5. **リリースマネージャー**は書面による承認を受け取った後にのみ実行する
6. **リリース後:** 例外リクエストの根本原因に対処するための[インシデントレビュー](/handbook/engineering/infrastructure-platforms/incident-review/)（**必須**）

このプロセスなしで承認された例外は、すべてのリリースポリシーを損なう前例を作ります。

### エスカレーションパス {#escalation-path}

| 状況 | 連絡先 |
|-----------|---------|
| プロセスに関する質問 | #releases Slack チャンネル |
| 例外リクエスト | あなたの Director/VP（リリースマネージャーではない） |
| ポリシーの明確化 | [Delivery/Platforms リーダーシップ](/handbook/engineering/infrastructure-platforms/gitlab-delivery/#teams) |

## リリースの調整 {#release-coordination}

### 関与するチーム {#teams-involved}

| チーム | 責任 |
|------|----------------|
| [Release Team](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/) | デプロイ、プロセス調整、ポリシー準拠リリースの実行 |
| Infrastructure | 環境の更新 |
| Security | 脆弱性の修正と開示の調整 |
| Product | 機能の準備状況、機能が期限を逃したときの遅延のオーナーシップ |
| Marketing | リリースコミュニケーション |

### コミュニケーション {#communication}

* **#releases**（Slack）: リリースのステータスと質問
* **[リリースポスト](https://about.gitlab.com/releases/categories/releases/)**: 公開アナウンス

## メンテナンスポリシー {#maintenance-policy}

詳細については [GitLab メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/)を参照してください

## 用語 {#terminology}

* **[メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/)**: self-managed ユーザー向けのメジャー、マイナー、パッチリリースのリリースペースを説明します。
* **今後のバージョン**: 開発中の[新しい GitLab リリース](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule)（XX.YY.0）。
* **メンテナンス対象バージョン**: [メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/#maintained-versions)の対象となる GitLab バージョン。
* **[バックポート](/handbook/engineering/releases/backports/)**: 最近のバージョンからのバグまたはセキュリティ修正で、古いバージョンに適用されるもの。
* **[安定版ブランチ](/handbook/engineering/releases/stable_branches/)**: 顧客に提供される GitLab リリースパッケージのソース。
* **[自動デプロイ](/handbook/engineering/deployments-and-releases/deployments/)**: アプリケーションの変更を GitLab.com にデプロイする GitLab プロセス。
* **[リリースマネージャー](/handbook/engineering/releases/release-managers/)**: GitLab リリースと GitLab.com へのデプロイの DRI。

## リソース {#resources}

### マンスリーリリース {#monthly-release}

* [マンスリーリリースのスケジュールとプロセス](/handbook/engineering/releases/monthly-releases/)
* [いつまでに MR をマージする必要がありますか？](/handbook/engineering/releases/monthly-releases#when-do-i-need-to-have-my-mr-merged-in-order-for-it-to-be-included-in-the-monthly-release)
* [自分の MR が含まれるかどうかをどうやって確認できますか？](/handbook/engineering/releases/monthly-releases#how-can-i-determine-if-my-merge-request-will-make-it-into-the-monthly-release)

### パッチリリース {#patch-release}

* [パッチリリースのプロセスとポリシー](/handbook/engineering/releases/patch-releases/)
* [エンジニア向けパッチリリース runbook](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/engineers.md)
* [エンジニア向けセキュリティ runbook](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md)

### 内部リリース {#internal-release}

* [内部リリースプロセス](/handbook/engineering/releases/internal-releases/)
* [エンジニア向け内部リリース runbook](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/internal-releases/engineers.md)

### リンク {#links}

* [リリースマネージャーのスケジュール](/handbook/engineering/releases/release-managers/)
* [Release and Deploy チームへの連絡方法](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/#reaching-our-team)
