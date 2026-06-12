---
title: "GitLab リリース"
upstream_path: /handbook/engineering/releases/
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
translated_at: "2026-06-12T13:26:18Z"
translator: claude
stale: false
model: claude-opus-4-7
lastmod: "2026-06-09T09:11:01-06:00"
---

製品リリース情報をお探しですか？ [リリース投稿](https://about.gitlab.com/releases/categories/releases/)、[リリースページ](https://gitlab.com/gitlab-org/gitlab/-/releases)、[What's new](https://docs.gitlab.com/ee/administration/whats-new.html)、[changelog](https://gitlab.com/gitlab-org/gitlab/blob/master/CHANGELOG.md)、または [機能および非推奨の概要](https://gitlab-com.gitlab.io/cs-tools/gitlab-cs-tools/what-is-new-since/)をご覧ください。

## 概要 {#overview}

GitLab には 3 つの異なるリリースタイプがあります。

1. **[月次リリース](/handbook/engineering/releases/monthly-releases/)**: 毎月第 3 木曜日に公開される GitLab バージョン (XX.YY.0) で、[GitLab.com へのデプロイ](/handbook/engineering/deployments-and-releases/deployments/)が成功したことによる新機能、バグ修正、パフォーマンス改善を含みます。
1. **[パッチリリース](/handbook/engineering/releases/patch-releases/)**: [メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)向けのバグ修正とセキュリティアップデートで、月に 2 回公開されます。
1. **[内部リリース](/handbook/engineering/releases/internal-releases/)**: [是正 SLA](/handbook/security/product-security/vulnerability-management/sla/) の範囲内で、深刻度の高い修正を GitLab Dedicated に提供するためのプライベートリリースです。

## リリースポリシー {#release-policy}

### リリースポリシーが重要な理由 {#why-release-policies-matter}

GitLab は [セマンティックバージョニング](https://semver.org/)に従っており、これは私たちとお客様との間の契約を確立します。

* **MAJOR** バージョンには破壊的変更が含まれる場合があります
* **MINOR** バージョンには新機能が含まれます（後方互換性あり）
* **PATCH** バージョンにはバグ修正のみが含まれます（自動アップグレードしても安全）

お客様はこの契約に基づいてアップグレードの判断を行います。多くのお客様は、パッチにはバグ修正のみが含まれると信頼しているため、広範なテストなしにパッチリリースを自動アップグレードします。私たちがこの契約に違反すると、次のことが起こります。

* リリースプロセス全体に対する **お客様の信頼を損なう**
* 予期しない変更によって **お客様の環境をリスクにさらす**
* お客様が計画のために依存している **リリースの予測可能性を損なう**
* 急いだリリースが新たなバグを持ち込み、さらなるパッチを必要とすることで **連鎖的な問題を生み出す**

### 各リリースタイプに含まれるもの {#what-each-release-type-contains}

| リリースタイプ | 含むもの | 含まないもの |
|--------------|----------|------------------|
| **月次** | 新機能、バグ修正、パフォーマンス改善 | 該当なし - これはすべての新規作業の手段です |
| **パッチ** | バグ修正、セキュリティ修正、パフォーマンスのリグレッション | 新機能、フィーチャーフラグの有効化、未完了の作業 |
| **内部** | Dedicated インスタンス向けの重大なバグ修正、セキュリティ修正 | 新機能、フィーチャーフラグの有効化、未完了の作業 |

バグおよびセキュリティ修正のタイムラインに関する SLO/SLA のコミットメントについては、[パッチリリースの SLO/SLA コミットメント](/handbook/engineering/releases/patch-releases/#slo-commitments)を参照してください。

### 期限を逃した場合のオーナーシップ {#ownership-when-deadlines-are-missed}

機能が月次リリースの期限を逃した場合、適切な経路はリリースポリシーの例外ではなく **次の月次リリース** です。

| チーム | オーナーシップ |
|------|------|
| Development | 次のポリシー準拠リリースでのコードの出荷 |
| Product | ステークホルダーへの遅延の伝達、ロードマップの期待値の調整 |
| Customer Success | お客様の期待値の管理、タイムライン変更の交渉 |
| Release | GitLab リリースに対するお客様の信頼を維持するポリシー準拠リリースの実行 |

Release Manager は、逃した期限への対応のオーナーではありません。

### 例外プロセス {#exception-process}

> [!IMPORTANT]
> 承認されたすべての例外には、[Feature Change Lock (FCL)](/handbook/engineering/#feature-change-locks) とリリース後の[インシデントレビュー](/handbook/engineering/infrastructure-platforms/incident-review/)が **必要** です。**これらは任意ではありません**。

リリースポリシーの例外はまれであり、Release チーム外からの明示的な承認が必要です。

**Release Manager は、リリースポリシーに違反するリクエストを却下する権限を持っています。** Customer Success、Sales、その他のチームからの圧力は、ポリシー例外の承認にはなりません。

例外が必要だと考えられる場合は、次のようにします。

1. [**リクエスト者** が文書化](https://gitlab.com/gitlab-org/release/tasks/-/work_items/new?issuable_template=Exception-request)する: ビジネス上の正当性とお客様への影響評価
2. **リクエスト者** は、プラットフォームの安定性を守るために [Feature Change Lock (FCL)](/handbook/engineering/#feature-change-locks) を開始します（**必須**）
3. **リクエスト者** は、スポンサーシップのために自身の Director/VP にエスカレーションします。承認するリーダーは、ポリシー違反を承認したことを書面で明示的に確認します
4. **スポンサーとなる Director/VP** は、Delivery/Platforms 組織内の Engineering リーダーシップに例外を要請します。
   * **バックポート例外 (N-3+)**: Senior Engineering Manager 以上
   * **アウトオブバンドリリース**: Director of Infrastructure (Delivery Enablement) 以上
   * **ポリシー違反（パッチへの機能投入、月次のやり直し）**: VP of Engineering, Infrastructure Platforms 以上
5. **Release Manager** は、書面による承認を受け取った後にのみ実行します
6. **リリース後:** 例外リクエストの根本原因に対処するための[インシデントレビュー](/handbook/engineering/infrastructure-platforms/incident-review/)（**必須**）

このプロセスを経ずに承認された例外は、すべてのリリースポリシーを損なう前例を作ります。

### エスカレーション経路 {#escalation-path}

| 状況 | 連絡先 |
|-----------|---------|
| プロセスに関する質問 | #releases Slack チャンネル |
| 例外リクエスト | あなたの Director/VP（Release Manager ではありません） |
| ポリシーの明確化 | [Delivery/Platforms リーダーシップ](/handbook/engineering/infrastructure-platforms/gitlab-delivery/#teams) |

## リリースの調整 {#release-coordination}

### 関与するチーム {#teams-involved}

| チーム | 責任 |
|------|----------------|
| [Release Team](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/) | デプロイ、プロセスの調整、ポリシー準拠リリースの実行 |
| Infrastructure | 環境のアップデート |
| Security | 脆弱性の修正と開示の調整 |
| Product | 機能のリリース準備、機能が期限を逃した際の遅延のオーナーシップ |
| Marketing | リリースのコミュニケーション |

### コミュニケーション {#communication}

* **#releases** (Slack): リリースのステータスと質問
* **[リリース投稿](https://about.gitlab.com/releases/categories/releases/)**: 公開アナウンス

## メンテナンスポリシー {#maintenance-policy}

詳細は [GitLab メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/)を参照してください。

## 用語 {#terminology}

* **[メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/)**: self-managed ユーザー向けの、メジャー、マイナー、パッチリリースのリリースペースを説明します。
* **今後のバージョン**: 開発中の [新しい GitLab リリース](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule) (XX.YY.0)。
* **メンテナンス対象バージョン**: [メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/#maintained-versions)の対象となる GitLab バージョン。
* **[バックポート](/handbook/engineering/releases/backports/)**: 最近のバージョンのバグまたはセキュリティ修正を古いバージョンに適用したもの。
* **[安定版ブランチ](/handbook/engineering/releases/stable_branches/)**: お客様に提供される GitLab リリースパッケージのソース。
* **[自動デプロイ](/handbook/engineering/deployments-and-releases/deployments/)**: アプリケーションの変更を GitLab.com にデプロイする GitLab のプロセス。
* **[Release Manager](/handbook/engineering/releases/release-managers/)**: GitLab のリリースおよび GitLab.com へのデプロイの DRI。

## リソース {#resources}

### 月次リリース {#monthly-release}

* [月次リリースのスケジュールとプロセス](/handbook/engineering/releases/monthly-releases/)
* [MR をいつマージする必要がありますか？](/handbook/engineering/releases/monthly-releases#when-do-i-need-to-have-my-mr-merged-in-order-for-it-to-be-included-in-the-monthly-release)
* [自分の MR が含まれるかどうかをどのように判断できますか？](/handbook/engineering/releases/monthly-releases#how-can-i-determine-if-my-merge-request-will-make-it-into-the-monthly-release)

### パッチリリース {#patch-release}

* [パッチリリースのプロセスとポリシー](/handbook/engineering/releases/patch-releases/)
* [エンジニア向けパッチリリース runbook](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/engineers.md)
* [エンジニア向けセキュリティ runbook](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md)

### 内部リリース {#internal-release}

* [内部リリースのプロセス](/handbook/engineering/releases/internal-releases/)
* [エンジニア向け内部リリース runbook](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/internal-releases/engineers.md)

### リンク {#links}

* [Release Manager のスケジュール](/handbook/engineering/releases/release-managers/)
* [Release and Deploy チームへの連絡方法](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/#reaching-our-team)
