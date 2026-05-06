---
title: "GitLab リリース"
upstream_path: /handbook/engineering/releases/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

製品リリース情報をお探しですか？[リリースポスト](https://about.gitlab.com/releases/categories/releases/)、[リリースページ](https://gitlab.com/gitlab-org/gitlab/-/releases)、[新機能](https://docs.gitlab.com/ee/administration/whats-new.html)、[変更履歴](https://gitlab.com/gitlab-org/gitlab/blob/master/CHANGELOG.md)、または[機能と非推奨の概要](https://gitlab-com.gitlab.io/cs-tools/gitlab-cs-tools/what-is-new-since/)をご覧ください。

## 概要

GitLab には3種類のリリースタイプがあります:

1. **[月次リリース](/handbook/engineering/releases/monthly-releases/)**: 毎月第3木曜日に公開される GitLab バージョン（XX.YY.0）。[GitLab.com へのデプロイ](/handbook/engineering/deployments-and-releases/deployments/)の成功から新機能、バグ修正、パフォーマンス改善が含まれます。
1. **[パッチリリース](/handbook/engineering/releases/patch-releases/)**: [メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)のバグ修正とセキュリティアップデート。月2回公開されます。
1. **[内部リリース](/handbook/engineering/releases/internal-releases/)**: [修復 SLA](/handbook/security/product-security/vulnerability-management/sla/) 内で GitLab Dedicated に高重大度の修正を提供するためのプライベートリリース。

## リリースポリシー

### リリースポリシーが重要な理由

GitLab は[セマンティックバージョニング](https://semver.org/)に従い、お客様との契約を確立しています:

* **MAJOR** バージョンには破壊的変更が含まれる場合があります
* **MINOR** バージョンには新機能が含まれます（後方互換性あり）
* **PATCH** バージョンにはバグ修正のみが含まれます（自動アップグレードが安全）

お客様はこの契約を信頼してアップグレードの決定を行います。多くのお客様は、パッチにはバグ修正のみが含まれることを信頼して、大規模なテストなしにパッチリリースを自動アップグレードします。この契約に違反すると:

* **リリースプロセス全体に対するお客様の信頼を損なう**
* **予期しない変更により顧客環境をリスクにさらす**
* **お客様が計画のために依存するリリースの予測可能性を損なう**
* **急いだリリースが追加パッチを必要とする新たなバグを引き起こす連鎖的な問題を生む**

### 各リリースタイプに含まれるもの

| リリースタイプ | 含まれるもの | 含まれないもの |
|--------------|----------|------------------|
| **月次** | 新機能、バグ修正、パフォーマンス改善 | N/A — すべての新しい作業のための媒体 |
| **パッチ** | バグ修正、セキュリティ修正、パフォーマンス回帰 | 新機能、フィーチャーフラグの有効化、未完成の作業 |
| **内部** | 重大なバグ修正、Dedicated インスタンス向けセキュリティ修正 | 新機能、フィーチャーフラグの有効化、未完成の作業 |

バグおよびセキュリティ修正のタイムラインに関する SLO/SLA コミットメントについては、[パッチリリース SLO/SLA コミットメント](/handbook/engineering/releases/patch-releases/#slo-commitments)をご覧ください。

### 締め切りを逃した場合のオーナーシップ

機能が月次リリースの締め切りを逃した場合、適切なパスは**次の月次リリース**であり、リリースポリシーの例外ではありません。

| チーム | オーナーシップ |
|------|------|
| 開発 | 次のポリシー準拠リリースでコードを出荷する |
| プロダクト | ステークホルダーへの遅延の伝達; ロードマップの期待値の調整 |
| カスタマーサクセス | 顧客の期待値管理; タイムラインの変更交渉 |
| リリース | GitLab リリースへの顧客の信頼を維持するポリシー準拠リリースの実行 |

リリースマネージャーは締め切りの見逃しへの対応を担うものではありません。

### 例外プロセス

リリースポリシーへの例外は稀であり、リリースチーム外の明示的な承認が必要です。

**リリースマネージャーはリリースポリシーに違反するリクエストを断る権限があります。** カスタマーサクセス、営業、その他チームからのプレッシャーは、ポリシー例外の承認にはなりません。

例外が必要と考えられる場合:

1. **申請者が**ビジネス上の正当性と顧客影響評価を[文書化します](https://gitlab.com/gitlab-org/release/tasks/-/work_items/new?issuable_template=Exception-request)
2. **申請者が**スポンサーシップのため Director/VP にエスカレーションします。承認するリーダーはポリシー違反を認めた書面による承認を提供します
3. **スポンサー Director/VP が** Delivery/Platforms 組織内のエンジニアリングリーダーシップに例外を要求します:
   * **バックポート例外（N-3+）**: Senior Engineering Manager 以上
   * **帯域外リリース**: Director of Infrastructure（Delivery Enablement）以上
   * **ポリシー違反（パッチへの機能追加、月次のやり直し）**: VP of Engineering, Infrastructure Platforms 以上
4. **リリースマネージャーが**書面による承認を受けてから実行します
5. **リリース後:** 例外リクエストの根本原因に対処するための振り返りがスケジュールされます。帯域外パッチの場合、[インシデントレビュー](/handbook/engineering/infrastructure-platforms/incident-review/)と [FCL](/handbook/engineering/#feature-change-locks) が必須です

このプロセスなしに承認された例外は、すべてのリリースポリシーを損なう先例となります。

### エスカレーションパス

| 状況 | 連絡先 |
|-----------|---------|
| プロセスの質問 | #releases Slack チャンネル |
| 例外リクエスト | あなたの Director/VP（リリースマネージャーではない） |
| ポリシーの明確化 | [Delivery/Platforms リーダーシップ](/handbook/engineering/infrastructure-platforms/gitlab-delivery/#teams) |

## リリース調整

### 関与するチーム

| チーム | 責任 |
|------|----------------|
| [リリースチーム](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/) | デプロイメント、プロセス調整; ポリシー準拠リリースの実行 |
| インフラストラクチャ | 環境の更新 |
| セキュリティ | 脆弱性の修正と開示の調整 |
| プロダクト | 機能の準備; 機能が締め切りを逃した際の遅延のオーナーシップ |
| マーケティング | リリースコミュニケーション |

### コミュニケーション

* **#releases**（Slack）: リリースステータスと質問
* **[リリースポスト](https://about.gitlab.com/releases/categories/releases/)**: 公開発表

## メンテナンスポリシー

詳細については [GitLab メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/)をご覧ください。

## 用語集

* **[メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/)**: セルフマネージドユーザー向けのメジャー、マイナー、パッチリリースのペースを説明します。
* **今後のバージョン**: 開発中の[新しい GitLab リリース](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule)（XX.YY.0）。
* **メンテナンス対象バージョン**: [メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/#maintained-versions)でカバーされる GitLab バージョン。
* **[バックポート](/handbook/engineering/releases/backports/)**: 新しいバージョンのバグやセキュリティ修正が古いバージョンに適用されたもの。
* **[安定ブランチ](/handbook/engineering/releases/stable_branches/)**: お客様に提供される GitLab リリースパッケージのソース。
* **[自動デプロイ](/handbook/engineering/deployments-and-releases/deployments/)**: GitLab.com にアプリケーションの変更をデプロイする GitLab のプロセス。
* **[リリースマネージャー](https://about.gitlab.com/community/release-managers/)**: GitLab リリースと GitLab.com へのデプロイの DRI。

## リソース

### 月次リリース

* [月次リリーススケジュールとプロセス](/handbook/engineering/releases/monthly-releases/)
* [月次リリースに含めるために MR をいつマージする必要があるか？](/handbook/engineering/releases/monthly-releases#when-do-i-need-to-have-my-mr-merged-in-order-for-it-to-be-included-in-the-monthly-release)
* [MR が含まれるかどうかをどのように判断できるか？](/handbook/engineering/releases/monthly-releases#how-can-i-determine-if-my-merge-request-will-make-it-into-the-monthly-release)

### パッチリリース

* [パッチリリースプロセスとポリシー](/handbook/engineering/releases/patch-releases/)
* [エンジニア向けパッチリリースランブック](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/engineers.md)
* [エンジニア向けセキュリティランブック](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md)

### 内部リリース

* [内部リリースプロセス](/handbook/engineering/releases/internal-releases/)
* [エンジニア向け内部リリースランブック](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/internal-releases/engineers.md)

### リンク

* [リリースマネージャースケジュール](https://about.gitlab.com/community/release-managers/)
* [リリースとデプロイチームへの連絡方法](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/#reaching-our-team)
