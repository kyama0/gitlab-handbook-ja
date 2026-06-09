---
title: "GitLab リリース"
upstream_path: /handbook/engineering/releases/
upstream_sha: c6f416c14ee9f53cb671d49ff11a9671c68d9326
lastmod: 2026-06-09T09:11:01-06:00
translated_at: "2026-06-09T00:00:00Z"
translator: claude
stale: false
---

プロダクトのリリース情報をお探しですか？[リリース投稿](https://about.gitlab.com/releases/categories/releases/)、[リリースページ](https://gitlab.com/gitlab-org/gitlab/-/releases)、[What's new](https://docs.gitlab.com/ee/administration/whats-new.html)、[changelog](https://gitlab.com/gitlab-org/gitlab/blob/master/CHANGELOG.md)、または[機能と非推奨の概要](https://gitlab-com.gitlab.io/cs-tools/gitlab-cs-tools/what-is-new-since/)を参照してください。

## Overview

GitLab には 3 つの異なるリリースタイプがあります。

1. **[月次リリース](/handbook/engineering/releases/monthly-releases/)**: 毎月第 3 木曜日に公開される GitLab バージョン（XX.YY.0）で、[GitLab.com へのデプロイ](/handbook/engineering/deployments-and-releases/deployments/)が成功した結果である新機能、バグ修正、パフォーマンス改善を含みます。
1. **[パッチリリース](/handbook/engineering/releases/patch-releases/)**: [メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)向けのバグ修正とセキュリティアップデートで、月に 2 回公開されます。
1. **[内部リリース](/handbook/engineering/releases/internal-releases/)**: [修正 SLA](/handbook/security/product-security/vulnerability-management/sla/) 内に GitLab Dedicated へ高重大度の修正を提供するためのプライベートリリースです。

## Release Policy

### Why Release Policies Matter

GitLab は[セマンティックバージョニング](https://semver.org/)に従っており、これがお客様との契約を確立しています。

* **MAJOR** バージョンは破壊的変更を含む場合があります
* **MINOR** バージョンは新機能を含みます（後方互換性あり）
* **PATCH** バージョンはバグ修正のみを含みます（自動アップグレードしても安全）

お客様はこの契約に基づいてアップグレードの判断を行います。多くのお客様は、パッチにはバグ修正のみが含まれていると信頼しているため、広範なテストなしにパッチリリースを自動アップグレードしています。私たちがこの契約に違反すると、次のことが起こります。

* リリースプロセス全体に対する**お客様の信頼を損ねる**
* 予期しない変更によって**お客様の環境をリスクにさらす**
* お客様がプランニングのために頼りにしている**リリースの予測可能性を損なう**
* 拙速なリリースが追加のパッチを必要とする新たなバグを生み、**連鎖的な問題を引き起こす**

### What Each Release Type Contains

| リリースタイプ | 含むもの | 含まないもの |
|--------------|----------|------------------|
| **月次** | 新機能、バグ修正、パフォーマンス改善 | N/A - これはすべての新規作業のための手段です |
| **パッチ** | バグ修正、セキュリティ修正、パフォーマンスのリグレッション | 新機能、フィーチャーフラグの有効化、未完了の作業 |
| **内部** | Dedicated インスタンス向けの重大なバグ修正、セキュリティ修正 | 新機能、フィーチャーフラグの有効化、未完了の作業 |

バグおよびセキュリティ修正のタイムラインに関する SLO/SLA のコミットメントについては、[パッチリリースの SLO/SLA コミットメント](/handbook/engineering/releases/patch-releases/#slo-commitments)を参照してください。

### Ownership When Deadlines Are Missed

機能が月次リリースの締め切りに間に合わなかった場合、適切な道筋はリリースポリシーの例外ではなく、**次の月次リリース**です。

| チーム | 所有するもの |
|------|------|
| Development | 次のポリシー準拠リリースでコードを出荷する |
| Product | 遅延をステークホルダーに伝える、ロードマップの期待値を調整する |
| Customer Success | お客様の期待を管理する、タイムラインの変更を交渉する |
| Release | GitLab リリースに対するお客様の信頼を維持するポリシー準拠リリースを実行する |

リリースマネージャーは、間に合わなかった締め切りへの対応を所有しません。

### Exception Process

> [!IMPORTANT]
> 承認されたすべての例外には、[Feature Change Lock (FCL)](/handbook/engineering/#feature-change-locks) とリリース後の[インシデントレビュー](/handbook/engineering/infrastructure-platforms/incident-review/)が**必要**です。**これらは任意ではありません**。

リリースポリシーの例外はまれであり、Release チーム外からの明示的な承認が必要です。

**リリースマネージャーは、リリースポリシーに違反するリクエストを拒否する権限を持っています。** Customer Success、Sales、その他のチームからのプレッシャーは、ポリシー例外の承認を構成しません。

例外が必要だと考えられる場合は、次のようにします。

1. [**リクエスト元**が](https://gitlab.com/gitlab-org/release/tasks/-/work_items/new?issuable_template=Exception-request)ビジネス上の正当性とお客様への影響評価を文書化する
2. **リクエスト元**がプラットフォームの安定性を保護するために [Feature Change Lock (FCL)](/handbook/engineering/#feature-change-locks) を開始する（**必須**）
3. **リクエスト元**がスポンサーシップを得るために自身の Director/VP にエスカレーションする。承認するリーダーは、ポリシー違反を認識した上で書面による承認を提供する
4. **スポンサーである Director/VP** が Delivery/Platforms 組織内の Engineering リーダーシップに例外をリクエストする:
   * **バックポート例外（N-3+）**: Senior Engineering Manager 以上
   * **帯域外リリース**: Director of Infrastructure（Delivery Enablement）以上
   * **ポリシー違反（パッチへの機能投入、月次のやり直し）**: VP of Engineering, Infrastructure Platforms 以上
5. **リリースマネージャー**は、書面による承認を受け取った後にのみ実行する
6. **リリース後:** 例外リクエストの根本原因に対処するための[インシデントレビュー](/handbook/engineering/infrastructure-platforms/incident-review/)（**必須**）

このプロセスなしに承認された例外は、すべてのリリースポリシーを損なう前例を作ります。

### Escalation Path

| 状況 | 連絡先 |
|-----------|---------|
| プロセスに関する質問 | #releases Slack チャンネル |
| 例外リクエスト | 自身の Director/VP（リリースマネージャーではない） |
| ポリシーの明確化 | [Delivery/Platforms リーダーシップ](/handbook/engineering/infrastructure-platforms/gitlab-delivery/#teams) |

## Release Coordination

### Teams Involved

| チーム | 責務 |
|------|----------------|
| [Release Team](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/) | デプロイ、プロセスの調整、ポリシー準拠リリースの実行 |
| Infrastructure | 環境のアップデート |
| Security | 脆弱性の修正と開示の調整 |
| Product | 機能の準備状況、機能が締め切りに間に合わなかった場合の遅延の所有 |
| Marketing | リリースのコミュニケーション |

### Communication

* **#releases**（Slack）: リリースのステータスと質問
* **[リリース投稿](https://about.gitlab.com/releases/categories/releases/)**: 公開アナウンス

## Maintenance Policy

詳細については、[GitLab メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/)を参照してください。

## Terminology

* **[メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/)**: self-managed ユーザー向けのメジャー、マイナー、パッチリリースのリリースペースを説明します。
* **今後のバージョン**: 開発中の[新しい GitLab リリース](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule)（XX.YY.0）。
* **メンテナンス対象バージョン**: [メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/#maintained-versions)の対象となる GitLab バージョン。
* **[バックポート](/handbook/engineering/releases/backports/)**: 最近のバージョンから古いバージョンに適用されるバグまたはセキュリティ修正。
* **[安定ブランチ](/handbook/engineering/releases/stable_branches/)**: お客様に提供される GitLab リリースパッケージのソース。
* **[自動デプロイ](/handbook/engineering/deployments-and-releases/deployments/)**: アプリケーションの変更を GitLab.com にデプロイする GitLab のプロセス。
* **[リリースマネージャー](/handbook/engineering/releases/release-managers/)**: GitLab リリースおよび GitLab.com へのデプロイの DRI。

## Resources

### Monthly release

* [月次リリースのスケジュールとプロセス](/handbook/engineering/releases/monthly-releases/)
* [いつまでに MR をマージする必要がありますか？](/handbook/engineering/releases/monthly-releases#when-do-i-need-to-have-my-mr-merged-in-order-for-it-to-be-included-in-the-monthly-release)
* [自分の MR が含まれるかどうかをどうやって判断できますか？](/handbook/engineering/releases/monthly-releases#how-can-i-determine-if-my-merge-request-will-make-it-into-the-monthly-release)

### Patch release

* [パッチリリースのプロセスとポリシー](/handbook/engineering/releases/patch-releases/)
* [エンジニア向けパッチリリースランブック](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/engineers.md)
* [エンジニア向けセキュリティランブック](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md)

### Internal release

* [内部リリースプロセス](/handbook/engineering/releases/internal-releases/)
* [エンジニア向け内部リリースランブック](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/internal-releases/engineers.md)

### Links

* [リリースマネージャーのスケジュール](/handbook/engineering/releases/release-managers/)
* [Release and Deploy チームへの連絡方法](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/#reaching-our-team)
