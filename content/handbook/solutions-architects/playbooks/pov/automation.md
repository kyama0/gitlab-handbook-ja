---
title: Automated Software Delivery POV のスコープと受け入れ基準
description: Automated Software Delivery POV のスコープと受け入れ基準
upstream_path: /handbook/solutions-architects/playbooks/pov/automation/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-08T14:07:20+02:00"
---

その他の Automated Software Delivery 関連リソース: [Lab](https://gitlab.com/gitlab-learn-labs/sample-projects/tanuki-racing) | *Demo* | *Guided Trial* | **POV** | [Education Services](https://university.gitlab.com/pages/ci-cd-training/) | [Professional Services](https://about.gitlab.com/services/#acceleration-services)

Automated Software Delivery ソリューションは、Continuous Integration (CI) および Continuous Delivery/Deployment (CD) 機能の複雑さを軽減し、より良いソフトウェアをより速く届けるためにベロシティを高めようとしている組織を対象としています。

POV を見極める初期のディスカバリーから、現在の CI/CD パイプラインソリューションがパイプライン編成における十分な柔軟性を持たず、CI/CD システムをソースコードリポジトリと統合して運用するために過剰な管理運用コストを要していることが確認されます。

POV の主要な目的は、追加の統合やプラグインを必要とせず、多種多様なパイプライン形態と機能を提供する密結合された CI/CD パイプラインシステムの価値を検証することです。

### POV へのインプット

- 特定された痛み: ツールチェーンのレビューと、既存のアプリケーションセキュリティツールおよびその利用状況のマッピング
- ツール統合可能性（ハードコスト）の特定と、シフトレフトセキュリティを伴う変革プロセスによる全体的な効率向上を含む、ハイレベルな ROI 議論
- DevOps チームとアプリケーションセキュリティチームの双方がステークホルダーとして関与すること

### 推奨される成功基準

- ビジネスドライバー: ベロシティ向上、支出の統合・削減、セキュリティ態勢の改善、ブランドおよびレピュテーションの保護
- エンタープライズイニシアチブとスポンサー: クラウドトランスフォーメーション、CIO
- 開発プロセスの早い段階でセキュリティを組み込む、すべてのコードをスキャンしリアルタイムに対応する、エンドツーエンド DevOps の不可欠な構成要素としてセキュリティを監督する、という目的を備えた必要な機能。

| 必要な機能 | 受け入れ基準 | 目的 | GitLab 機能 |
| ---                 | ---        | ---       |---             |
| CI パイプラインによる摩擦の少ない開発者体験 | 開発者が容易にパイプラインを実行できる。通常の開発手段でパイプラインを変更できる | Continuous Integration | ブランチごとのパイプライン、アプリと同一リポジトリ内でコードとして管理されるパイプライン構成、直感的なパイプライン構造 |
| 開発者は即時かつ正確なパイプラインフィードバックで素早く問題を修正 | パイプラインが push、merge、UI、API から起動する | CI、シフトレフト | マージリクエストウィジェット内のパイプライン結果とコード品質レポート |
| モノレポに対する CI サポート | リポジトリの変更があった部分のみ CI を実行 | 依存関係管理の容易化 | 親子パイプライン、`when: changed:` ディレクティブ、DAG パイプライン |
| パフォーマンスとコストの要件に応じてスケールするパイプライン | 数百のパイプラインを並行実行可能 | スケーラビリティ | スケーラブルなジョブキュー、スケーラブルなランナーアーキテクチャ |
| 複数リポジトリにまたがる協調的なパイプライン実行 | あるリポジトリのパイプラインが他リポジトリのパイプラインを起動し、結果を記録できる | パイプラインの協調 | クロスプロジェクトパイプライン |
| 共有および再利用可能なパイプライン | 再利用可能なテンプレートおよびインクルードパイプラインからパイプラインを構成できる | インナーソーシングおよびベストプラクティス | パイプラインテンプレート、includes、コンプライアンスパイプライン |
| 必須パイプラインによるコンプライアンス強制 | パイプラインの必須部分をリポジトリのグループ全体に対して設定可能 | 組織のコンプライアンス | Compliance pipelines、Security Scan Policies |
| 誰がどのような条件下でパイプラインを実行できるかを制御 | "protected" ブランチに対するパイプライン実行をロールにより制限 | Continuous Deployment | Credentials Inventory、protected ブランチ、ランナー、変数およびタグ |
| デプロイパイプラインへのアクセス制限 | 指定された `maintainer` ユーザーのみが上位環境へデプロイ可能 | Continuous Deployment | Protected ランナー、変数、環境、ブランチ |

### その他の POV のスコープと受け入れ基準

SA は SAE および AE と協力し、ビジネス価値および GitLab ソリューションとの整合を取ったうえで、顧客と POV のスコープを定義できます。各ソリューションについて、典型的なスコープと受け入れ基準を参考までに以下に示しますが、チームはエンゲージメントごとにスコープ、期間、実行内容と受け入れ基準を定義してください。

- [DevSecOps](/handbook/solutions-architects/playbooks/pov/devsecops/)
- [Software Compliance](/handbook/solutions-architects/playbooks/pov/compliance/)
- [DevOps Platform](/handbook/solutions-architects/playbooks/pov/platform/)
