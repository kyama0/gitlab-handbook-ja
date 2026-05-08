---
title: DevOps Platform POV のスコープと受け入れ基準
description: DevOps Platform POV のスコープと受け入れ基準
upstream_path: /handbook/solutions-architects/playbooks/pov/platform/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
---

その他の DevOps Platform 関連リソース: [Lab](https://gitlab.com/gitlab-learn-labs/sample-projects/tanuki-racing) | *Demo* | *Guided Trial* | **POV** | [Education Services](https://university.gitlab.com/pages/gitlab-fundamentals-training/) | [Professional Services](https://about.gitlab.com/services/)

プラットフォームバリュープレイは、個別のステージやサイロではなく、エンタープライズ全体にまたがって DevOps Platform ソリューションが対処する痛みの概観を示し、顧客のニーズを評価しソリューションの関連する側面を特定するために尋ねるべき主要な問いを概説します。さらに、GitLab の価値に関する他の議論への道筋も提供します。

これは他のすべてのソリューションを組み合わせたものになり得ます。

- DevSecOps
- Software Compliance
- Automated Software Delivery

また、パフォーマンスや技術的指標の評価を含めることもできます。これは以下のような場合に該当します。

- エンタープライズの急成長がサイロ化されたツールや非効率なツールチェーンの能力を超えてしまった場合 — 最大の価値は効率向上を伴うより良いプロダクトをより速く届けることにあります
- 合併・買収の結果として企業が標準ツールチェーンを展開している場合
- 既存ツールがクラウド対応ではなく、企業がより競争力を高め、コストを削減しつつ SaaS サービスを提供するためにクラウドトランスフォーメーションが加速している場合

### POV へのインプット

このスコープの POV の前提条件は、典型的に以下の側面に焦点を当てる傾向があります。

- Automated Software Delivery を中心とした価値主導の機能
- 既存のオープンソースツールチェーンや他の商用ツールとの技術的な統合
- 大規模エンタープライズ向けのパフォーマンスおよびスケーラビリティに関する技術指標

### 推奨される成功基準

- ビジネスドライバー: エンドツーエンドの DevOps、ただし全社的なイニシアチブ（特にデジタルトランスフォーメーションや加速されたクラウドイニシアチブ）を支える統合を伴う。
- エンタープライズイニシアチブとスポンサー: CTO、および企業全体の開発者体験と運用効率
- 直近のニーズに対応しつつ、将来的な柔軟性とハイエンドなスケーラビリティに備えるプラットフォームを提供する、という目的を備えた必要な機能。

| 必要な機能 | 受け入れ基準 | 目的 | GitLab 機能 |
| ---      | ---      | ---      |---      |
| Continuous Integration | Automated Software Delivery と類似だが、与えられたユーザー数やリポジトリ規模に対する固有のパフォーマンス指標を持つ場合あり | 自動化と標準的な CI プラクティス | Continuous Integration、Git Flow、リポジトリ |
| プラットフォームと他ツールとの統合 | エコシステムにおける各種ツールと統合する能力 | 統合および対象スコープにおけるエンドツーエンドのプロセスフロー | 統合ポイント、Webhook、対象統合スコープ向け API |
| クラウドネイティブな Continuous Deployment | コンテナ化と K8s サポート | クラウドイニシアチブとクラウドネイティブツールチェーンの加速 | クラウドネイティブな CI/CD と、クラウドネイティブな GitLab Server/Runner |
| 開発者体験 | 高ベロシティのための合理化された体験 | タレントを引きつけ留める新しく優れた開発者ツール | 単一のユーザーインターフェイス、高い使いやすさ、カスタマイズ可能な UI |

これに加えて、Ultimate 向けに DevSecOps および Software Compliance と組み合わせることもできます。

POV は複数フェーズで 60 日を超えることもあります。スコープと受け入れ基準を文書化し合意することが重要です。特に収益を生むアプリがテストのために投入される後期フェーズに向けて、コミットメントを獲得することが必要です。

[大規模新規ロゴ向け 2 フェーズ POV の例](https://docs.google.com/presentation/d/1GEew0786_z2_Hj_acExoynkVO-XwpmArhyBTQEk-P0Q/edit#slide=id.g10daba8f689_0_275)を参照してください。

プラットフォーム POV を特定した場合は、Strategic Field チームに連絡し、見極め、スコープ設定、受け入れ基準の定義を行ってください。特に技術指標とビジネス価値のマッピングが重要です。

### Proof Points の検討事項

プラットフォームベースの POV が技術指標に焦点を置く場合、HA 構成の GitLab とスケーラブルなランナー群のセットアップが必要となる可能性があり、結果として広範な技術的問題が発生する可能性があります。アカウントチームはこの技術的な能力を備え、優先サポートを確保している必要があります。このスコープの作業は、詳細なプロジェクトマネジメントの手順と Issue トラッキングを伴って管理される必要があります。技術指標の受け入れ基準は明確化され、4〜6 週間で実施可能であることが相互に合意されている必要があります。

大規模 POV を実施するのではなく、他のソースから Proof Points を提供することが推奨されます。たとえば、gitlab.com 自体や、類似のユーザー数・リポジトリ数、類似のテクノロジー／クラウドプロファイルを持つリファレンス顧客から Proof Points を取得できます。

### その他の POV のスコープと受け入れ基準

SA は SAE および AE と協力し、ビジネス価値および GitLab ソリューションとの整合を取ったうえで、顧客と POV のスコープを定義できます。各ソリューションについて、典型的なスコープと受け入れ基準を参考までに以下に示しますが、チームはエンゲージメントごとにスコープ、期間、実行内容と受け入れ基準を定義してください。

- [DevSecOps](/handbook/solutions-architects/playbooks/pov/devsecops/)
- [Software Compliance](/handbook/solutions-architects/playbooks/pov/compliance/)
- [Automated Software Delivery](/handbook/solutions-architects/playbooks/pov/automation/)
