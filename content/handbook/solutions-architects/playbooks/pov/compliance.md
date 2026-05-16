---
title: Software Compliance POV のスコープと受け入れ基準
description: Software Compliance POV のスコープと受け入れ基準
upstream_path: /handbook/solutions-architects/playbooks/pov/compliance/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-08T14:07:20+02:00"
---

その他のコンプライアンス関連リソース: [Lab](https://gitlab.com/gitlab-learn-labs/sample-projects/tanuki-racing) | *Demo* | *Guided Trial* | **POV** | [Education Services](https://university.gitlab.com/pages/security-training/) | [Professional Services](https://about.gitlab.com/services/#acceleration-services)

SA が見込み顧客や既存顧客（特に規制業種のビジネス）と Software Compliance ソリューションについて確認を取った場合、POV のスコープはソフトウェアサプライチェーンの保護と一般的な業界規制への準拠の簡素化に重点を置きつつ、同時にソフトウェアのデリバリー速度を向上させることに焦点を合わせます。

価値検証のための主要な機能は次のとおりです。

- コンプライアンスフレームワーク
- コンプライアンスワークフローの自動化
- コンプライアンスダッシュボードと監査イベント
- ソフトウェアサプライチェーンセキュリティ

### POV へのインプット

- 規制要件または企業内標準化のいずれかに基づき、コンプライアンスおよび監査に関する明確な要件があること

### 推奨される成功基準

- ビジネスドライバー: コンプライアンスの向上と監査の容易化により、市場に留まる、もしくは政府や規制機関により規制された新市場へ参入できること。
- エンタープライズイニシアチブとスポンサー: 新製品ローンチまたは規制当局による監査
- 開発プロセスにビルトインのコンプライアンスを組み込む、すべてのステップとプロセスについてアーティファクトとエビデンスを生成し監査できる、という目的を備えた必要な機能。

| 必要な機能 | 受け入れ基準 | 目的 | GitLab 機能 |
| ---      | ---      | ---      |---      |
| コンプライアンスポリシーとフレームワーク | コンプライアンス担当がポリシーを設定し、事業部単位もしくは企業全体に強制適用できる | 規制当局に準拠プロセスを示す | Compliance Framework; Required Pipeline; Compliance Dashboard; Audit Events; Separation of Duties |
| 標準化されたソフトウェアサプライチェーン | ソフトウェアサプライチェーンにおいてコンプライアンスポリシーを支える標準を強制適用 | コンプライアンスのための組織管理 | プロジェクト〜グループレベルのコンプライアンスビュー |
| 監査 | 組織変更とユーザーアクセスに関する監査 | 内部および外部監査のための先行的な監査 | Audit event、API、ダッシュボード |

DevSecOps の主要な受け入れ基準と一部重複することがありますが、こちらは標準的なコンプライアンスと監査可能性により焦点を置いています。

これが POV の主要スコープになる場合は、Strategic Field チームへ連絡し、主要なドライバー、規制要件や期限を確認のうえ、適切なスコープと実行ステップを受け入れ基準とともに定義してください。

### その他の POV のスコープと受け入れ基準

SA は SAE および AE と協力し、ビジネス価値および GitLab ソリューションとの整合を取ったうえで、顧客と POV のスコープを定義できます。各ソリューションについて、典型的なスコープと受け入れ基準を参考までに以下に示しますが、チームはエンゲージメントごとにスコープ、期間、実行内容と受け入れ基準を定義してください。

- [DevSecOps](/handbook/solutions-architects/playbooks/pov/devsecops/)
- [Automated Software Delivery](/handbook/solutions-architects/playbooks/pov/automation/)
- [DevOps Platform を総合的に](/handbook/solutions-architects/playbooks/pov/platform/)
