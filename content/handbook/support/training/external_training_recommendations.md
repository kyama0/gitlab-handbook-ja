---
title: 外部トレーニングのおすすめ
description: サポートエンジニア向けに、GitLab の外部トレーニングパートナーから推奨するコース、ラーニングパス、認定資格
upstream_path: /handbook/support/training/external_training_recommendations/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-22T07:58:38+02:00"
---

このページでは、サポートエンジニアにとって関連性の高い、GitLab の外部トレーニングパートナーが提供する具体的なコース、ラーニングパス、認定資格を推奨します。まず内部の [サポートトレーニングモジュール](/handbook/support/training/) と [特化ドメイントラック](/handbook/support/training/specialised_domain_tracks/) を完了し、その後に下記のリソースを使って知識を補強したり、特定の領域で中級・上級レベルへステップアップしたりすることを推奨します。

おすすめは大きく次の 2 つのカテゴリに分かれます。

1. **一般的な技術スキル**: Linux、ネットワーキング、コンテナ、Kubernetes、Git の内部、データベース、オブザーバビリティ
1. **GitLab 固有のスキル**: Ruby on Rails、Go（Gitaly および GitLab Runner）、PostgreSQL、CI/CD の概念、Helm chart デプロイ

各セクションには、プラットフォーム、アクセス方法（リクエストまたは無料）、サポートエンジニア向けの推奨優先度を記載しています。外部トレーニングの費用は [Growth and Development Fund](/handbook/people-group/learning-and-development/growth-and-development/) によって賄える場合があります。有料リソースを利用したい場合は、次回の 1 対 1 でマネージャーと相談してください。

## クイックリファレンス: プラットフォームごとのアクセス方法

| プラットフォーム | アクセス方法 | 備考 |
|---|---|---|
| [LevelUp](/handbook/people-group/learning-and-development/level-up/) | 無料（社内） | GitLab 独自のラーニングプラットフォーム |
| [Hone](/handbook/people-group/learning-and-development/hone/) | 個人のチームメンバーはリクエスト／承認が必要 | ライブクラス。リーダーシップとソフトスキルが中心 |
| [O'Reilly Learning](/handbook/people-group/learning-and-development/self-paced-learning/#oreilly-learning) | エンジニアリング: リクエスト／非エンジニアリング: 経費精算 | 書籍、動画、対話型サンドボックス、ライブイベント |
| [Google Cloud Skills Boost](/handbook/people-group/learning-and-development/self-paced-learning/#google-cloud-skills-boost-learning) | リクエストが必要 | GCP のラボ、コース、認定パス |
| [Linux Foundation](/handbook/people-group/learning-and-development/self-paced-learning/#linux-foundation-courses) | コースアクセス: リクエスト／承認 | セルフペースのコース |
| Codecademy | 無料プランあり | コードベースの対話型学習。Ruby、Go、SQL、Python、Bash |

## Part 1: 一般的な技術スキル

これらは、どの GitLab 製品領域に注力していても、すべてのサポートエンジニアにとって有益な基礎スキルです。

### Linux システム管理

サポートエンジニアは Linux 上で稼働する GitLab Self-Managed のインスタンスを日常的にトラブルシューティングします。ログの読み解き、プロセス管理の理解、ネットワーク問題のデバッグ、ファイルシステムのナビゲートには、強固な Linux の基礎が不可欠です。

#### Linux Foundation（リクエスト／承認）

| タイトル | 種別 | レベル |
|---|---|---|
| [LFS101 - Introduction to Linux](https://training.linuxfoundation.org/training/introduction-to-linux/) | コース | 初級 |

#### O'Reilly Learning

| タイトル | 種別 | レベル |
|---|---|---|
| [Learning Modern Linux](https://www.oreilly.com/library/view/learning-modern-linux/9781098108939/) - Michael Hausenblas | 書籍 | 初級 |
| [How Linux Works, 3rd Edition](https://learning.oreilly.com/library/view/-/9781098128913/) - Brian Ward | 書籍 | 初級〜中級 |
| [The Linux Command Line, 2nd Edition](https://www.oreilly.com/library/view/the-linux-command/9781492071235/) - William E. Shotts | 書籍 | 初級 |
| [Linux Foundation Certified System Administrator (LFCS), 3rd Edition](https://learning.oreilly.com/videos/-/9780138230678/) - Sander van Vugt | コース（20h） | 中級 |
| [LPIC-1 Linux Administrator (101-500)](https://learning.oreilly.com/videos/-/9781835885406/) - ACI Learning | コース（12h） | 中級 |

### Git 内部

サポートエンジニアは Git の操作を毎日のようにトラブルシューティングしています。プッシュ／プルの失敗、リポジトリの破損、マージ衝突、LFS の問題、サーバーサイドフックなどです。Git の内部（packfile、ref、オブジェクト、転送プロトコル）を理解することは直接的に役立ちます。

#### Linux Foundation

| タイトル | 種別 | レベル |
|---|---|---|
| [LFD109 - Git for Distributed Software Development](https://training.linuxfoundation.org/training/git-for-distributed-software-development-lfd109x/) | コース | 初級 |

#### O'Reilly Learning

| タイトル | 種別 | レベル |
|---|---|---|
| [Pro Git, 2nd Edition](https://git-scm.com/book/en/v2) - Scott Chacon, Ben Straub | 書籍 | 全レベル |
| [Version Control with Git, 3rd Edition](https://www.oreilly.com/library/view/version-control-with/9781492091189/) - Prem Kumar Ponuthorai, Jon Loeliger | 書籍 | 中級 |
| [Head First Git](https://www.oreilly.com/library/view/head-first-git/9781492092506/) - Raju Gandhi | 書籍 | 初級 |
| [Complete Git Guide: Understand and Master Git and GitHub](https://learning.oreilly.com/videos/-/9781800209855/) - Bogdan Stashchuk | コース（22h） | 全レベル |

### コンテナと Docker

GitLab Runner は Docker executor を使用し、GitLab.com および Dedicated は Kubernetes を使用しており、多くの Self-Managed の顧客がコンテナベースのデプロイを行っています。CI/CD ジョブの失敗、レジストリの問題、デプロイの問題をデバッグするうえで、コンテナの基礎の理解は重要です。

#### O'Reilly Learning

| タイトル | 種別 | レベル |
|---|---|---|
| [Docker Deep Dive](https://www.oreilly.com/library/view/docker-deep-dive/9781835081709/) - Nigel Poulton | 書籍 | 初級 |
| [Docker: Up and Running, 3rd Edition](https://www.oreilly.com/library/view/docker-up/9781098131814/) - Sean P. Kane, Karl Matthias | 書籍 | 中級 |
| [Docker and Kubernetes Masterclass: From Beginner to Advanced](https://learning.oreilly.com/videos/-/9781837025077/) - LM Academy | コース（32h） | 全レベル |
| [Introduction to Docker and Containers](https://learning.oreilly.com/videos/-/9780138174309/) - Noureddin Sadawi | コース（5h） | 初級 |

### Kubernetes

GitLab は公式 Helm chart を使って Kubernetes 上にデプロイ可能で、GitLab.com 自身も GKE 上で動作しています。サポートエンジニアは Helm chart のデプロイ、Pod の障害、Ingress 設定、証明書の問題、リソース制限などを日常的にトラブルシューティングします。

#### Linux Foundation

| タイトル | 種別 | レベル |
|---|---|---|
| [LFS158 - Introduction to Kubernetes](https://training.linuxfoundation.org/training/introduction-to-kubernetes/) | コース | 初級 |

#### O'Reilly Learning

| タイトル | 種別 | レベル |
|---|---|---|
| [Kubernetes: Up and Running, 3rd Edition](https://www.oreilly.com/library/view/kubernetes-up-and/9781098110192/) - Brendan Burns, Joe Beda, Kelsey Hightower, Lachlan Evenson | 書籍 | 中級 |
| [Kubernetes Patterns, 2nd Edition](https://www.oreilly.com/library/view/kubernetes-patterns-2nd/9781098131678/) - Bilgin Ibryam, Roland Huss | 書籍 | 中級〜上級 |
| [Kubernetes for the Absolute Beginners - Hands-On](https://learning.oreilly.com/videos/-/9781838555962/) - KodeKloud (Mumshad Mannambeth) | コース（5h） | 初級 |
| [Docker and Kubernetes Masterclass: From Beginner to Advanced](https://learning.oreilly.com/videos/-/9781837025077/) - LM Academy | コース（32h） | 全レベル |

#### Google Cloud Skills Boost

| タイトル | 種別 | レベル |
|---|---|---|
| [Getting Started with Google Kubernetes Engine](https://www.cloudskillsboost.google/course_templates/2) | コース | 初級 |
| [Architecting with Google Kubernetes Engine (series)](https://www.skills.google/course_templates/32) | コース | 中級 |
| [Deploy Kubernetes Applications on Google Cloud](https://www.cloudskillsboost.google/course_templates/663) | スキルバッジ | 中級 |

### ネットワーキング

ネットワーキングの問題はサポートにおいて最も一般的かつ複雑なものの一つです。DNS 解決の失敗、プロキシやロードバランサーの誤設定、TLS/SSL 証明書の問題、トラフィックを止めているファイアウォールルール、SSH 接続の問題などが含まれます。

#### O'Reilly Learning

ネットワーキングは、すでに推奨した Linux 系の書籍の中でしっかりカバーされています。

1. *How Linux Works, 3rd Edition* の第 9〜10 章で、TCP/IP、DNS、ファイアウォール、DHCP、NAT、ルーティングを扱います
1. *Learning Modern Linux* の第 7 章で、ネットワーキングスタック、DNS、SSH、Wireshark を扱います

| タイトル | 種別 | レベル |
|---|---|---|
| [Networking Fundamentals](https://learning.oreilly.com/videos/-/9780134645711/) - Kevin Wallace | コース（6h） | 初級 |

#### Google Cloud Skills Boost

| タイトル | 種別 | レベル |
|---|---|---|
| [Networking in Google Cloud: Fundamentals](https://www.cloudskillsboost.google/course_templates/35) (multi-module) | コース | 中級 |
| [Build a Secure Google Cloud Network](https://www.cloudskillsboost.google/course_templates/654) | スキルバッジ | 中級 |
| [Develop Your Google Cloud Network](https://www.cloudskillsboost.google/course_templates/625) | スキルバッジ | 中級 |

### オブザーバビリティ: Prometheus、Grafana、ロギング

GitLab には Prometheus メトリクスと Grafana ダッシュボードが組み込まれて出荷されます。サポートエンジニアはこれらを使ってパフォーマンス問題を診断し、リソースのボトルネックを特定し、インシデント時のシステム挙動を把握します。

#### O'Reilly Learning

1. *Learning Modern Linux* の第 8 章で、Prometheus、Grafana、オブザーバビリティ戦略を扱います
1. [*Prometheus: Up and Running, 2nd Edition*](https://www.oreilly.com/library/view/prometheus-up-and/9781098131135/) by Julien Pivotto and Brian Brazil (O'Reilly)

#### Google Cloud Skills Boost

| タイトル | 種別 | レベル |
|---|---|---|
| [Logging and Monitoring in Google Cloud](https://www.cloudskillsboost.google/course_templates/99) | コース | 中級 |

### DevOps と SRE の概念

DevOps と SRE の原則を理解しておくと、サポートエンジニアは顧客のワークフローを文脈の中で捉え、サポートしているチームと同じ言語で会話できます。

#### Linux Foundation

| タイトル | 種別 | レベル |
|---|---|---|
| [LFS162 - Introduction to DevOps and Site Reliability Engineering](https://training.linuxfoundation.org/training/introduction-to-devops-and-site-reliability-engineering-lfs162/) | コース | 初級 |
| [LFS169 - Introduction to GitOps](https://training.linuxfoundation.org/training/introduction-to-gitops-lfs169/) | コース | 初級 |

#### Google Cloud Skills Boost

| タイトル | 種別 | レベル |
|---|---|---|
| [Professional Cloud DevOps Engineer learning path](https://www.cloudskillsboost.google/paths/20) | コース | 上級 |

## Part 2: GitLab 固有のスキル

これらのスキルは、GitLab を支える技術と直接結びついています。GitLab のコードベースを読んで理解する、アプリケーションレベルの問題をデバッグする、開発チームと効果的に協働する、といった場面で役立ちます。

### Ruby と Ruby on Rails

GitLab のコアアプリケーションは Ruby on Rails のモノリスです。サポートエンジニアにプロダクション用の Ruby コードを書くことは求められていませんが、Rails のコントローラー、モデル、サービスオブジェクトを読めることは、次のような場面で非常に価値があります。

1. ドキュメントが不明確なときに機能の挙動を理解する
1. コードベースを通じてバグの根本原因をたどる
1. 開発チームに対してより正確で有用なバグレポートを書く
1. ログ内のエラーメッセージとスタックトレースを理解する

#### Codecademy（無料コース）

| タイトル | 種別 | レベル |
|---|---|---|
| [Learn Ruby](https://www.codecademy.com/learn/learn-ruby) | コース（9h） | 初級 |

#### O'Reilly Learning

| タイトル | 種別 | レベル |
|---|---|---|
| [The Well-Grounded Rubyist, 3rd Edition](https://www.oreilly.com/library/view/the-well-grounded-rubyist/9781617295218/) - David A. Black, Joe Leo | 書籍 | 初級〜中級 |
| [Agile Web Development with Rails 8](https://learning.oreilly.com/library/view/-/9798888651766/) - Sam Ruby et al. | 書籍 | 中級 |
| [Programming Ruby 3.3, 5th Edition](https://learning.oreilly.com/library/view/-/9798888650684/) - Noel Rappin, Dave Thomas | 書籍 | 全レベル |
| [Ruby on Rails Tutorial, 7th Edition](https://learning.oreilly.com/library/view/-/9780138050061/) - Michael Hartl | コース（21h） | 中級 |

### Go

Gitaly（Git RPC サービス）と GitLab Runner はどちらも Go で書かれています。サポートエンジニアは Gitaly のログや Runner のデバッグ出力で Go のスタックトレースに遭遇します。Go のコードを読めることは、次のような場面で役立ちます。

1. Gitaly のエラーメッセージや挙動を理解する
1. GitLab Runner の executor の問題をデバッグする
1. バグ調査時に Gitaly や Runner のソースコードを読み解く

#### Codecademy（無料コース）

| タイトル | 種別 | レベル |
|---|---|---|
| [Learn Go](https://www.codecademy.com/learn/learn-go) | コース（6h） | 初級 |
| [Learn Go: Fundamentals](https://www.codecademy.com/learn/learn-go-fundamentals) | コース（2h） | 初級 |
| [Learn Go: Functions](https://www.codecademy.com/learn/learn-go-functions) | コース（1h） | 初級 |
| [Learn Go: Loops, Arrays, Maps, and Structs](https://www.codecademy.com/learn/learn-go-loops-arrays-maps-and-structs) | コース（4h） | 初級 |
| [Learn Go: Interfaces](https://www.codecademy.com/learn/learn-go-interfaces) | コース（2h） | 初級 |

#### O'Reilly Learning

| タイトル | 種別 | レベル |
|---|---|---|
| [Learning Go, 2nd Edition](https://www.oreilly.com/library/view/learning-go-2nd/9781098139285/) - Jon Bodner | 書籍 | 初級〜中級 |
| [The Go Programming Language](https://www.oreilly.com/library/view/the-go-programming/9780134190570/) - Donovan and Kernighan | 書籍 | 中級 |
| [Concurrency in Go](https://www.oreilly.com/library/view/concurrency-in-go/9781491941294/) - Katherine Cox-Buday | 書籍 | 中級〜上級 |
| [Golang: Hands-on Programming for Beginners](https://learning.oreilly.com/videos/-/9781806386253/) - KodeKloud (Priyanka Yadav) | コース | 初級 |

### PostgreSQL

PostgreSQL は GitLab の主データストアです。サポートエンジニアは、データベースのパフォーマンス問題、マイグレーションの失敗、レプリケーションの問題、Patroni/PgBouncer の設定、バックアップ／リストア手順について顧客を支援することが頻繁にあります。

#### Codecademy（無料コース）

| タイトル | 種別 | レベル |
|---|---|---|
| [Learn SQL](https://www.codecademy.com/learn/learn-sql) | コース（5h） | 初級 |
| [Learn SQL: Multiple Tables](https://www.codecademy.com/learn/learn-sql-multiple-tables) | コース（1h） | 初級 |
| [Learn SQL: Aggregate Functions](https://www.codecademy.com/learn/learn-sql-aggregate-functions) | コース（1h） | 初級 |

#### O'Reilly Learning

| タイトル | 種別 | レベル |
|---|---|---|
| [PostgreSQL: Up and Running, 3rd Edition](https://learning.oreilly.com/library/view/-/9798341660885/) - Regina Obe, Leo Hsu | 書籍 | 初級〜中級 |
| [Learn PostgreSQL, 2nd Edition](https://learning.oreilly.com/library/view/-/9781837635641/) - Luca Ferrari, Enrico Pirozzi | 書籍 | 初級 |
| [High Performance PostgreSQL](https://learning.oreilly.com/library/view/-/9798888651070/) | 書籍 | 上級 |
| [PostgreSQL Essentials: Leveling Up Your Data Work](https://learning.oreilly.com/videos/-/0790145594945/) - Haki Benita | コース | 中級 |

### Python と Bash スクリプト

Python と Bash は、自動化スクリプトの作成、ログのパース、GitLab API との連携、内部ツールの構築に役立ちます。

#### Codecademy（無料コース）

| タイトル | 種別 | レベル |
|---|---|---|
| [Python for Programmers](https://www.codecademy.com/learn/python-for-programmers) | コース（3h） | 中級 |
| [Intro to the Command Line](https://www.codecademy.com/learn/intro-to-the-command-line) | コース（1h） | 初級 |

### クラウドプラットフォーム（GCP 中心）

多くの GitLab 顧客は GCP、AWS、Azure 上にデプロイしています。GitLab Dedicated は GCP と AWS 上で稼働します。クラウドの基礎を理解することで、サポートエンジニアはインフラ関連の問題で顧客に的確に助言できます。

#### Google Cloud Skills Boost

| タイトル | 種別 | レベル |
|---|---|---|
| [Google Cloud Fundamentals: Core Infrastructure](https://www.cloudskillsboost.google/course_templates/60) | コース | 初級 |
| [Associate Cloud Engineer learning path](https://www.cloudskillsboost.google/paths/11) | コース | 中級 |
| [Develop Your Google Cloud Network](https://www.cloudskillsboost.google/course_templates/625) | スキルバッジ | 中級 |
| [Getting Started with Google Kubernetes Engine](https://www.cloudskillsboost.google/course_templates/2) | コース | 初級 |
| [Networking in Google Cloud: Fundamentals](https://www.cloudskillsboost.google/course_templates/35) | コース | 中級 |
| [Logging and Monitoring in Google Cloud](https://www.cloudskillsboost.google/course_templates/99) | コース | 中級 |

#### O'Reilly Learning

| タイトル | 種別 | レベル |
|---|---|---|
| [Terraform: Up and Running, 3rd Edition](https://www.oreilly.com/library/view/terraform-up-and/9781098116736/) - Yevgeniy Brikman | 書籍 | 中級 |

## Part 3: ソフトスキルとリーダーシップ（Hone）

[Hone](/handbook/people-group/learning-and-development/hone/) は、プロフェッショナルとしての成長に焦点を当てたコホート型のライブクラスを提供しています。技術的な内容ではないものの、これらのスキルは、チームをまたいで協働し、同僚をメンタリングし、顧客とコミュニケーションするサポートエンジニアにとって価値があります。

関連するクラスのカテゴリ例:

1. **コミュニケーションスキル**: フィードバックの授受、難しい会話、書面でのコミュニケーション
1. **コラボレーション**: チームをまたいだ協働、権限のない状態での影響力発揮
1. **タイムマネジメントと生産性**: 優先順位付け、業務量の管理
1. **キャリア開発**: 目標設定、自己アドボカシー
