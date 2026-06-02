---
title: "GitLab リリース"
upstream_path: /handbook/engineering/releases/
upstream_sha: "7d467b8ae210e5b3bb843857cd3639cbc27af386"
translated_at: "2026-06-02T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-02T14:47:42-06:00"
---

製品のリリース情報をお探しですか? [リリースポスト](https://about.gitlab.com/releases/categories/releases/)、[リリースページ](https://gitlab.com/gitlab-org/gitlab/-/releases)、[What's new](https://docs.gitlab.com/ee/administration/whats-new.html)、[changelog](https://gitlab.com/gitlab-org/gitlab/blob/master/CHANGELOG.md)、または [機能と非推奨の概要](https://gitlab-com.gitlab.io/cs-tools/gitlab-cs-tools/what-is-new-since/) を参照してください。

## 概要

GitLab には 3 種類のリリースタイプがあります:

1. **[マンスリーリリース](/handbook/engineering/releases/monthly-releases/)**: 毎月第 3 木曜日に公開される GitLab バージョン (XX.YY.0) で、[GitLab.com へのデプロイ](/handbook/engineering/deployments-and-releases/deployments/) が成功した新機能、バグ修正、パフォーマンス改善を含みます。
1. **[パッチリリース](/handbook/engineering/releases/patch-releases/)**: [メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions) に対するバグ修正とセキュリティアップデートで、月に 2 回公開されます。
1. **[内部リリース](/handbook/engineering/releases/internal-releases/)**: [是正 SLA](/handbook/security/product-security/vulnerability-management/sla/) 内に GitLab Dedicated へ高 severity の修正を提供するためのプライベートリリースです。

## リリースポリシー

### リリースポリシーが重要な理由

GitLab は [セマンティックバージョニング](https://semver.org/) に従っており、これは顧客との契約を確立します:

* **MAJOR** バージョンは破壊的変更を含む可能性があります
* **MINOR** バージョンは新機能を含みます（後方互換性あり）
* **PATCH** バージョンはバグ修正のみを含みます（自動アップグレードしても安全）

顧客はアップグレードの判断を下すためにこの契約に依存しています。多くの顧客は、パッチがバグ修正のみを含むと信頼しているため、広範なテストなしにパッチリリースを自動アップグレードします。私たちがこの契約に違反すると、次のことが起こります:

* リリースプロセス全体に対する **顧客の信頼を損なう**
* 予期しない変更で **顧客の環境をリスクにさらす**
* 顧客が計画のために依存している **リリースの予測可能性を損なう**
* 急いだリリースが追加のパッチを必要とする新しいバグを導入したときに、**連鎖的な問題を引き起こす**

### 各リリースタイプに含まれるもの

| リリースタイプ | 含むもの | 含まないもの |
|--------------|----------|------------------|
| **マンスリー** | 新機能、バグ修正、パフォーマンス改善 | N/A — これはすべての新規作業のための手段です |
| **パッチ** | バグ修正、セキュリティ修正、パフォーマンス回帰 | 新機能、フィーチャーフラグの有効化、未完了の作業 |
| **内部** | クリティカルなバグ修正、Dedicated インスタンス向けのセキュリティ修正 | 新機能、フィーチャーフラグの有効化、未完了の作業 |

バグおよびセキュリティ修正のタイムラインに関する SLO/SLA コミットメントについては、[パッチリリースの SLO/SLA コミットメント](/handbook/engineering/releases/patch-releases/#slo-commitments) を参照してください。

### 締め切りに間に合わなかった場合のオーナーシップ

機能がマンスリーリリースの締め切りに間に合わなかった場合、適切な道筋はリリースポリシーの例外ではなく、**次のマンスリーリリース** です。

| チーム | 担うもの |
|------|------|
| Development | 次のポリシー準拠リリースでコードを出荷する |
| Product | 遅延をステークホルダーに伝える。ロードマップの期待を調整する |
| Customer Success | 顧客の期待を管理する。タイムラインの変更を交渉する |
| Release | GitLab リリースに対する顧客の信頼を維持する、ポリシー準拠のリリースを実行する |

リリースマネージャーは、間に合わなかった締め切りへの対応を担いません。

### 例外プロセス

リリースポリシーの例外はまれであり、Release チーム以外からの明示的な承認が必要です。

**リリースマネージャーは、リリースポリシーに違反するリクエストを拒否する権限を持っています。** Customer Success、Sales、または他のチームからの圧力は、ポリシー例外の承認にはなりません。

例外が必要だと考えられる場合:

1. [**依頼者** がビジネス上の正当性と顧客への影響評価を文書化](https://gitlab.com/gitlab-org/release/tasks/-/work_items/new?issuable_template=Exception-request) します
2. **依頼者** がスポンサーシップのために自分の Director/VP にエスカレーションします。承認するリーダーは、ポリシー違反の承認確認を書面で提供します
3. **スポンサーである Director/VP** が、Delivery/Platforms 組織内の Engineering リーダーシップに例外を要請します:
   * **バックポート例外 (N-3+)**: Senior Engineering Manager 以上
   * **アウトオブバンドリリース**: Director of Infrastructure (Delivery Enablement) 以上
   * **ポリシー違反（パッチへの機能、マンスリーのやり直し）**: VP of Engineering, Infrastructure Platforms 以上
4. **リリースマネージャー** は書面での承認を受け取った後にのみ実行します
5. **リリース後:** 例外要請の根本原因に対処するための [インシデントレビュー](/handbook/engineering/infrastructure-platforms/incident-review/) と、プラットフォームの安定性を保護するための [FCL](/handbook/engineering/#feature-change-locks)。**これらの項目は必須です。**

このプロセスなしで承認された例外は、すべてのリリースポリシーを損なう前例を作ります。

### エスカレーションパス

| 状況 | 連絡先 |
|-----------|---------|
| プロセスに関する質問 | #releases Slack チャンネル |
| 例外要請 | 自分の Director/VP（リリースマネージャーではない） |
| ポリシーの明確化 | [Delivery/Platforms リーダーシップ](/handbook/engineering/infrastructure-platforms/gitlab-delivery/#teams) |

## リリースの調整

### 関与するチーム

| チーム | 責務 |
|------|----------------|
| [Release Team](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/) | デプロイ、プロセス調整。ポリシー準拠のリリースを実行する |
| Infrastructure | 環境のアップデート |
| Security | 脆弱性の修正と開示の調整 |
| Product | 機能のレディネス。機能が締め切りに間に合わなかった場合の遅延のオーナーシップ |
| Marketing | リリースコミュニケーション |

### コミュニケーション

* **#releases** (Slack): リリースのステータスと質問
* **[リリースポスト](https://about.gitlab.com/releases/categories/releases/)**: 公開アナウンス

## メンテナンスポリシー

詳細については [GitLab メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/) を参照してください。

## 用語

* **[メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/)**: セルフマネージドユーザー向けの、メジャー、マイナー、パッチリリースのリリースペースを記述したものです。
* **Upcoming version**: 開発中の [新しい GitLab リリース](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule) (XX.YY.0)。
* **Maintained versions**: [メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/#maintained-versions) でカバーされる GitLab バージョン。
* **[Backports](/handbook/engineering/releases/backports/)**: 最近のバージョンのバグまたはセキュリティ修正を、古いバージョンに適用したもの。
* **[Stable branches](/handbook/engineering/releases/stable_branches/)**: 顧客に提供される GitLab リリースパッケージのソース。
* **[Auto-deploy](/handbook/engineering/deployments-and-releases/deployments/)**: アプリケーションの変更を GitLab.com にデプロイする GitLab のプロセス。
* **[Release managers](/handbook/engineering/releases/release-managers/)**: GitLab リリースおよび GitLab.com へのデプロイの DRI。

## リソース

### マンスリーリリース

* [マンスリーリリースのスケジュールとプロセス](/handbook/engineering/releases/monthly-releases/)
* [MR をいつまでにマージする必要があるか?](/handbook/engineering/releases/monthly-releases#when-do-i-need-to-have-my-mr-merged-in-order-for-it-to-be-included-in-the-monthly-release)
* [自分の MR が含まれるかどうかをどう判断できるか?](/handbook/engineering/releases/monthly-releases#how-can-i-determine-if-my-merge-request-will-make-it-into-the-monthly-release)

### パッチリリース

* [パッチリリースのプロセスとポリシー](/handbook/engineering/releases/patch-releases/)
* [エンジニア向けパッチリリースランブック](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/engineers.md)
* [エンジニア向けセキュリティランブック](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md)

### 内部リリース

* [内部リリースプロセス](/handbook/engineering/releases/internal-releases/)
* [エンジニア向け内部リリースランブック](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/internal-releases/engineers.md)

### リンク

* [リリースマネージャーのスケジュール](/handbook/engineering/releases/release-managers/)
* [Release and Deploy チームへの連絡方法](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/#reaching-our-team)
