---
title: DevSecOps POV のスコープと受け入れ基準
description: DevSecOps POV のスコープと受け入れ基準
upstream_path: /handbook/solutions-architects/playbooks/pov/devsecops/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-08T14:07:20+02:00"
---

その他の DevSecOps 関連リソース: [Lab](https://gitlab.com/gitlab-learn-labs/sample-projects/tanuki-racing) | *Demo* | *Guided Trial* | **POV** | [Education Services](https://university.gitlab.com/pages/security-training/) | [Professional Services](https://about.gitlab.com/services/#acceleration-services)

DevSecOps ソリューションは、自社の DevOps 手法のなかでセキュリティ脆弱性をより早期に発見すべく "シフトレフト" を試みているものの、期待した成果を達成できていない組織を対象としています。

POV を見極める初期のディスカバリーから、既存のアプリケーションセキュリティが DevOps フローから切り離されており、開発ライフサイクルの最終段階としてボトルネックを生み、通常はアプリケーションセキュリティチームのみが管理している状況が確認されます。

POV の主要な目的は、アプリ開発時のアプリケーションセキュリティチームとのコラボレーションを伴いながら、開発者の手元でシフトレフトセキュリティを実現することの価値を検証することです。

### POV へのインプット

- 特定された痛み: ツールチェーンのレビューと、既存のアプリケーションセキュリティツールおよびその利用状況のマッピング。ツールチェーンに対するディスカバリーとマッピングの[例はこちら](https://docs.google.com/spreadsheets/d/1saSUfEYIM--r3ve3tDwQVnhcb9OOmBluGGFWG_9K_rs/edit#gid=64684746)。

- ツール統合可能性（ハードコスト）の特定と、シフトレフトセキュリティを伴う変革プロセスによる全体的な効率向上を含む、ハイレベルな ROI 議論
- DevOps チームとアプリケーションセキュリティチームの双方がステークホルダーとして関与すること

### 推奨される成功基準

- ビジネスドライバー: ベロシティ向上、支出の統合・削減、セキュリティ態勢の改善、ブランドおよびレピュテーションの保護
- エンタープライズイニシアチブとスポンサー: クラウドトランスフォーメーション、CIO
- 開発プロセスの早い段階でセキュリティを組み込む、すべてのコードをスキャンしリアルタイムに対応する、エンドツーエンド DevOps の不可欠な構成要素としてセキュリティを監督する、という目的を備えた必要な機能。

| 必要な機能 | 受け入れ基準 | 目的 | GitLab 機能 |
| ---      | ---      | ---      |---      |
| 承認プロセスとワークフロー | セキュリティチームによる承認ルール；開発 + セキュリティチームのコラボレーション | 承認ルール | 脆弱性管理 |
| 開発者向けアプリケーションセキュリティのワークフロープロセス | 望ましい時間枠内ですべてのコードブランチをスキャン；シフトレフトセキュリティと生産性向上 | 脆弱性管理 | Security Test と MR レポート |
| セキュリティチームのワークフロープロセス | セキュリティチームがポリシーを推進しトリアージを促進 | アプリおよび組織のセキュリティ態勢の管理 | セキュリティダッシュボード；脆弱性管理；セキュリティトレンド |
| SAST セキュリティテストレビュー | 検出されたすべての言語をスキャン | リアルタイムフィードバックによるシフトレフトな開発者体験 | SAST analyzers; MR SAST widget; Vulnerability Dashboard |
| 依存関係スキャン | 検出されたすべての言語をスキャン | リアルタイムフィードバックによるシフトレフトな開発者体験 | SCA analyzers; MR SCA widget; Vulnerability Dashboard; SBOM and Dependency Tree |
| クラウドネイティブ向けコンテナスキャン | 既知の脆弱なイメージをスキャンしブロック | 推奨と自動修復 | Container analyzers; MR Container widget; Vulnerability Dashboard; MR 経由の自動修復 |
| API セキュリティテスト | GitLab で API ファジングプロジェクトをレビュー | 開発 + QA に対するシフトレフトなペネトレーションテスト相当の機能 | |
| DAST API; API Fuzzing | | | |

これは新規ロゴ獲得や Ultimate へのアップティアにおいて最も一般的な POV です。顧客のアプリケーションセキュリティチームを必ず巻き込んでください。

### Proof Points の検討事項

すべての種類のアプリケーションセキュリティテスト、特にファジングを実施することは推奨されません。集中的な作業と専門知識を要するためです。

POV を補完する受け入れ可能な結果として、Proof Points を取得できます。

例として coverage fuzzing 用のサンプル Java アプリなど、GitLab のアプリやプロジェクトを使った Proof Points の提示が推奨されます。Proof Points はドキュメント化するか、レビューセッションで確認し、受け入れ基準の一部とみなすことができます。

DevSecOps の受け入れ基準が規制要件にマッピングされる場合、他のセキュリティ管理ツールやアナライザーとの統合が必要となる傾向があります。これを POV のスコープと受け入れ基準に含めることは重要ですが、実際のエンドツーエンドの統合ではなく、補完的な Proof Points を伴う議論として扱う方が適切です。

### その他の POV のスコープと受け入れ基準

SA は SAE および AE と協力し、ビジネス価値および GitLab ソリューションとの整合を取ったうえで、顧客と POV のスコープを定義できます。各ソリューションについて、典型的なスコープと受け入れ基準を参考までに以下に示しますが、チームはエンゲージメントごとにスコープ、期間、実行内容と受け入れ基準を定義してください。

- [Software Compliance](/handbook/solutions-architects/playbooks/pov/compliance/)
- [Automated Software Delivery](/handbook/solutions-architects/playbooks/pov/automation/)
- [DevOps Platform を総合的に](/handbook/solutions-architects/playbooks/pov/platform/)
