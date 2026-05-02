---
title: "補助ソリューションリソース: GitOps"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/gitops/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
---

#### 連絡先

| プロダクトマーケティング | デベロッパーアドボケイト |
| ---- | --- |
| Daniel Hom (@danielhom) | @csaavedra1 |

## 市場の視点

## GitOps の必要性

現代のアプリケーションは高速な反復で開発され、極めてダイナミックなスケールで動作します。成熟した DevOps 文化を持つ組織では、コードを 1 日に数百回本番にデプロイできます。アプリケーションは数人のユーザーから数百万まで、極めてダイナミックな負荷の下で動作することがあります。現代のインフラはエラスティックである必要があります。動的にプロビジョニング・デプロビジョニングできるキャパシティは、最適なパフォーマンスとコストの最小化を維持しながら負荷に追従できます。今日のインフラに課される要求の中で、堅牢で一貫性のある方法論でインフラの自動化を管理することがますます重要になっています。

## GitOps とは何か？

```text
GitOps == IaC + MRs + CI/CD
```

> GitOps は、バージョン管理、コラボレーション、コンプライアンス、CI/CD といったアプリケーション開発で使われる DevOps ベストプラクティスを取り入れ、それをインフラの自動化に適用する運用フレームワークです。

<iframe width="100%" height="500" src="https://www.youtube.com/embed/JtZfnrwOOAw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[GitOps](https://about.gitlab.com/topics/gitops/) は、バージョン管理、コードレビュー、CI/CD パイプラインといったソフトウェア開発でよく知られるプラクティスを使って IT インフラを管理することを含みます。たとえば、GitOps を実践するインフラチームはコードとして保存される構成ファイルを使用します。アプリケーションのソースコードがビルドされるたびに同じアプリケーションバイナリを生成するのと同様に、GitOps の構成はデプロイされるたびに同じインフラ環境を生成します。

- *IaC* - GitOps はインフラ定義の単一の情報源として Git リポジトリを使用します。**Infrastructure as Code (IaC)** はすべてのインフラ構成をコードとして保存するプラクティスです。実際の望ましい状態（レプリカ数、Pod 数など）はコードとして保存される場合とされない場合があります。
- *MRs* - GitOps はすべてのインフラ更新の変更メカニズムとして **マージリクエスト (MR)** を使用します。MR はチームがレビューやコメントを通じて協業し、正式な承認が行われる場所です。master（または trunk）ブランチへのマージコミットは、監査やトラブルシューティングのための変更ログとして機能します。
- *CI/CD* - GitOps は継続的インテグレーションと継続的デリバリー (CI/CD) を伴う Git ワークフローを使ってインフラの更新を自動化します。新しいコードがマージされると、CI/CD パイプラインが環境内で変更を実行します。手動変更やエラーといった構成のドリフトは GitOps 自動化によって上書きされ、環境は Git で定義された望ましい状態に収束します。GitLab は GitOps 自動化を管理・実装するために CI/CD パイプラインを使用しますが、定義オペレーターのような他の自動化形式も使用できます。

新興の技術用語と同様、「GitOps」は業界全体で誰もが厳密に同じ定義をしているわけではありません。GitOps はクラウドネイティブコミュニティで生まれたもので、一部の定義は GitOps を「Kubernetes が GitOps を行うために必要」と限定します。GitLab はより広いアプローチを取ります。GitLab ユーザーやお客様が、VM、コンテナ、Kubernetes クラスターを含むあらゆるタイプのインフラ自動化に GitOps の原則を適用しているのを見てきました。

多くのツールや方法論がより速いデプロイメントとコードとインフラ間のシームレスな管理を約束する一方で、GitOps は開発者中心の体験に注力する点で異なります。GitOps を介したインフラ管理は、アプリケーション開発と同じバージョン管理システムで行われ、Git の組み込み機能の恩恵を受けながら、チームが中央の場所でより協業できるようにします。

GitOps は [Infrastructure as Code](https://about.gitlab.com/topics/gitops/infrastructure-as-code/) を使用するための処方箋的なワークフローです。GitLab を使った GitOps は、Terraform、AWS Cloud Formation、Ansible、Chef、Puppet などの業界をリードするインフラ自動化ツールとの緊密な統合により、物理、仮想、クラウドネイティブインフラ（Kubernetes やサーバーレス技術を含む）を管理するのに役立ちます。

### GitOps のメリット

- *作業の分散* - より多くのエンジニアがインフラ変更で協業できるようにします。すべての変更が同じ変更／マージリクエスト／レビュー／承認／マージプロセスを経るため、シニアエンジニアは必要に応じてレビュー・貢献する能力を維持しつつ、重要なインフラ管理を超えた他の領域に集中できます。
- *アクセス制御の改善* CI/CD だけが必要なアクセス権を使って変更を自動化するため、すべてのインフラコンポーネントに認証情報を与える必要がありません。
- *市場投入時間の短縮* - コードによる実行は手動でのポイント＆クリックよりも速く、テストケースは自動化でき、一貫した方法で繰り返し実行できるため、安定した環境を大規模に迅速に提供可能
- *リスクの低減* Infrastructure as Code へのシフトレフトアプローチは、変更が本番にロールアウトされる前に問題を特定・解決し、予期せぬダウンタイムを未然に防ぎ、より高い環境の安定性と信頼性、より良いユーザー体験を提供します。
- *コンプライアンス向上* インフラへのすべての変更が追跡され、監査のためのトレーサビリティと、以前の望ましい状態に容易にロールバックする能力を残します。
- *コスト削減* - インフラ定義とテストの自動化が手作業と再作業を排除して生産性を向上させ、ロールバック機能の組み込みによりダウンタイムを削減
- *エラー低減* - インフラ定義はコード化されるため、再現可能で人為的エラーが起きにくい

### プッシュ vs プル GitOps（エージェントレス vs エージェントベース GitOps）

新興技術と同様、GitOps には異なるアプローチがあり、それぞれに長所と短所があります。

**プッシュ型またはエージェントレス GitOps**
このアプローチでは、CI/CD ツールが環境に変更をプッシュします。このアプローチはアプリケーションデプロイメントで使われるアプローチと一貫しています。
*長所*

- 使いやすさ。よく知られた CI/CD - ビルド、テスト、デプロイがすべて同じ技術を使用
- デプロイ先がクラウドネイティブ／Kubernetes に限定されない - 物理、仮想、コンテナ、オンプレミスでもクラウドでもデプロイ可能
*短所*
- ファイアウォールをクラスターに開け、外部 CI/CD に管理者権限を付与する必要がある

**プル型またはエージェントベース GitOps**
このアプローチでは、エージェントがクラスターにインストールされ、望ましい構成からドリフトがあった際に変更をプルします。
*長所*

- セキュアなインフラ - ファイアウォールを開けたり外部に管理者権限を付与したりする必要がない
*短所*
- すべてのクラスターにエージェントをインストールする必要がある
- k8s 限定
- アプリケーション CI/CD とは異なる技術を使用する

## ペルソナ

### ユーザーペルソナ

Infrastructure as Code はプラットフォームの理解とアプリケーション環境の望ましい状態の理解を必要とします。Infrastructure as Code のユーザーは、SCM ツールとしての Git と、プロビジョニング・管理を期待されるプラットフォームの両方をよく理解しています。以下に Infrastructure as Code の主なパワーユーザーをいくつか挙げます。

- [Sam, SRE](/handbook/product/personas/)
  Sam は機能開発者と同じサービスチームに組み込まれて働きます。サービスを稼働させ続け、デプロイし、そのサービスのインフラニーズを管理する作業を行います。プラットフォームチームと協力してベストプラクティスを体系化します。

- [Devon, DevOps エンジニア](/handbook/product/personas/)
  Devon は開発チームに対する Ops のインターフェースを担当することが多いです。インフラ、環境、統合のサポートを提供します。Devon はコードに精通しており、多数の異なるツールやコンテキストスイッチではなく、コードを通じてインフラを管理することを好みます。

- [Priyanka, プラットフォームオペレーター](/handbook/product/personas/)
  インフラ管理はプラットフォームチームの主な責任の一つです。[Priyanka](/handbook/product/personas/#priyanka-platform-engineer) は、開発チームがソフトウェアをより迅速に出荷・運用するために活用する共有プラットフォーム（伝統的なものまたは現代のクラウドプラットフォーム）の提供、保守、運用に責任を持っています。

- [Sydney, システム管理者](/handbook/product/personas/#sidney-systems-administrator)
  Sydney はアプリケーションチームのインフラと構成を定義、保守、スケールします。同じタスクに対する繰り返しの依頼を受けることがしばしばあります。Sydney の主な動機は、エラーを最小限に抑え時間を節約するために繰り返しのタスクを自動化すること、そしてインフラと構成を変更が追跡される方法で定義し、インフラ変更が[ワイルドウェスト](https://en.wikipedia.org/wiki/Cowboy_coding) になるのを止めることです。

### バイヤーペルソナ

Infrastructure as Code のバイヤーは通常、インフラ／自動化施策をリードするリーダーです。典型的なバイヤーペルソナは次のとおりです。

- **CIO / Vice President of IT** - デジタルトランスフォーメーションプログラムの計画、設計、実行、新しい運用モデルの実装の経験を持つ。通常、エンジニアリングと運用の両チームをリードする
- **Vice President of IT Infrastructure**（一部の組織では IT Operations と呼ばれる）- IT インフラサービス（クラウドサービスのデプロイ・管理、システム管理、Service Desk を含む）の計画、設計、実行の経験を持つ。組織の IT コスト削減を頻繁に課題とする。
- **Vice President of Platform Engineering** - 開発チーム向けの共有プラットフォームを管理することがプラットフォームエンジニアリングチームの主要なアジェンダの一つ。プラットフォームチームは Kubernetes のような新技術の専門知識を持っています。プラットフォームエンジニアリングチームの主要 KPI は自動化、効率、セルフサービスです。

## アナリストカバレッジ

このユースケースの主要なアナリストカバレッジを列挙します

## 市場要件

GitOps の[市場要件](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/#market-requirements) は以下のとおりです

### コラボレーションの促進

- 説明: ソリューションはチームメンバー間のコラボレーションを可能にし、促進するように設計されています。コラボレーションシステムには手動のゲートと承認、自動化されたワークフローが含まれます。
- 典型的な機能:
  - 一般的なコメントの追加
  - 個人またはグループのタグ付け
  - コードへのインラインコメントの追加
  - 提案の追加
  - 上部に未解決スレッドの合計を表示
  - コメント／提案を解決するまでマージできないことを表示
  - スレッドの解決
  - 新しい Issue を作成してスレッドを解決
  - 提案を適用（提案の受け入れ）
  - Code Owner の表示
  - 承認の表示

- その他の機能
  - プロジェクトの新しいブランチを素早く作成
  - 新しいファイル／アセットの追加
  - 提案された変更で協業（コメントレビュー、変更提案、Web IDE、提案承認、コンフリクト解決、マージ、差分、引き継ぎ）
  - ワークフロー自動化
  - Wiki スニペット
  - バージョン管理されたスニペット
  - マージリクエストがマージされたとき関連する Issue を自動的に更新または閉じる
  - 構成可能な Issue クローズパターン
  - CI システムでビルドのマージリクエストステータスを表示
  - Terraform plan の出力
  - セキュリティスキャンとビルド統計の可視化

- 価値: 行われるコード変更の品質が向上し、それが以下につながります
  - 満たされる依頼の精度の向上
  - インフラ安定性の向上
  - そしてリリース速度の向上
        チームレビューと検証を通じて。

### コンプライアンスと監査

- 説明: 本番へのすべての変更が自動化され、Git ブランチへのマージで管理されます。Git 管理ツールを通じて権限とアクセスが組み込まれています。
        承認とマージアクセスは特定の人員またはグループに制限可能。
        コミット履歴は変更ログを示します。
- 典型的な機能: CMR/PR、コードレビュー機能、RBAC、ブランチ権限、グループ権限設定、CodeOwner、MR 承認
- 価値: インフラ用に別の権限を管理する必要がなく、開発プロセスのものと一致できます。
        内部および規制コンプライアンス標準への厳格な順守。
        監査時間が短くなり、実施しやすくなります。
        インフラへの変更がロックダウンされているため、よりセキュアになります。
        \

### バージョン管理された環境

- 説明: 環境の状態が Git バージョン管理下のテキストとして定義されている場合、環境をロールバック・ロールフォワードできる能力。

### テスト自動化

- 説明: 自動テストを実行・管理し、本番にマージされる前に変更を検証します。これは基本的なテストからより詳細なテストまですべてを含み、機能、システム、パフォーマンステストなどの領域にテスト自動化を拡張します。手動介入なしにソフトウェアが技術的・ビジネス的要件を一貫して満たすようにテストされ、開発者がコード変更が潜在的な欠陥や脆弱性を導入していないか素早くフィードバックを得られるようにします。
- 典型的な機能: 隔離された一時的な環境で CI/CD パイプラインの自動テストを実行する能力。様々なテストには、ユニットテスト、コード統合テスト、回帰テスト、静的コード解析、機能テスト、アクセシビリティテストなどが含まれる場合があります（これらに限定されない）。**アプリケーションコード向けのほとんどのテストタイプは、インフラ、ポリシーなどあらゆるコードにも適用されます**。
- 価値: 潜在的なエラーが本番に影響する前に、後ではなく早期に検出。
本番に行く前に潜在的な脆弱性をテストすることでセキュリティを向上。

### パイプライン構成管理

- 説明: エンジニアはビルドとテストワークフローを自動化でき、特にソースコードリポジトリへの接続、ビルドパイプラインでの特定のアクション／タスクの定義、ジョブの実行方法／タイミングのパラメーター設定を、スクリプトおよび／または GUI を使ってパイプラインの変更を構成できます。構成は再現可能でトレーサブルで、環境変更を素早く比較・追跡できます。
- 典型的な機能: Web UI による構成、または YAML のような人間が読めるシンタックスで config-as-code をサポート。
      パイプラインテンプレート。プロジェクトテンプレート。
      パイプラインリンク - 中央リポジトリにパイプラインテンプレートを保存
      パイプライン依存関係 - 子／親、上流／下流
- 価値: 開発時間を最大化し生産性を向上。手作業の削減。
      管理を一元化して運用を低減。
      テンプレートを使用してベストプラクティスと必須テストを順守することで一貫性を向上。

## GitLab のソリューション

## GitLab が市場要件を満たす方法

GitLab の GitOps 機能を示す短いデモのコレクション。

| 市場要件 | GitLab がどう実現するか | GitLab **ステージ**／カテゴリー | デモ |
| ------ | ------ | ------ | ------ | ----
| コラボレーションの促進 | ディスカッション、ユーザータグ付け、一般コメント、インラインコメント、インライン提案、未解決スレッド追跡、コメントからの Issue 作成、提案管理、CODEOWNERS、承認 |  [Discussions](https://docs.gitlab.com/ee/user/discussions/)、[CODEOWNERS](https://docs.gitlab.com/ee/user/project/codeowners/)、[MR approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/) | [![Foster Collaboration with GitOps](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/gitops/youtube_social_icon_red-32x23.png) Foster Collaboration with GitOps](https://youtu.be/onFpj_wvbLM) |
| コンプライアンスと監査 | コンプライアンステストと監査制御は GitLab の CI/CD パイプラインに組み込まれています。 | [Compliance at GitLab](https://about.gitlab.com/solutions/compliance/) <br> [Manage Stage](https://about.gitlab.com/stages-devops-lifecycle/): [Audit Events](https://docs.gitlab.com/ee/administration/audit_event_reports.html)、[Audit Logs](https://docs.gitlab.com/ee/administration/logs/#audit_jsonlog)、[Audit Reports](https://docs.gitlab.com/ee/administration/audit_event_reports.html)、[Compliance Management](https://docs.gitlab.com/ee/administration/compliance.html)、[Release Evidence](https://docs.gitlab.com/ee/user/project/releases/#release-evidence)、[Chain of Custody](https://docs.gitlab.com/ee/user/compliance/compliance_center/#chain-of-custody-report)、[きめ細かなユーザーロールと権限、職務分掌](https://docs.gitlab.com/ee/user/permissions.html) <br> [Secure Stage](https://about.gitlab.com/stages-devops-lifecycle/secure/): [License Compliance](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html)、[Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/) <br> [CODEOWNERS](https://docs.gitlab.com/ee/user/project/codeowners/)、[MR approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)、  | |
| バージョン管理された環境 | GitLab のバージョン管理を使って XaC（インフラ、ポリシー、構成など）を保存することで、変更を追跡できます。さらに、失敗時の自動ロールバックにより、前回の成功したデプロイにロールバックできます | [Environment Rollback](https://docs.gitlab.com/ee/ci/environments/#environment-rollback)、[GitLab Agent for Kubernetes](https://docs.gitlab.com/ee/user/clusters/agent/) | |
| テスト自動化 | パイプラインの一部としてユーザビリティ、パフォーマンステストを含み、問題があった場合は成功したデプロイにロールバック |   [リリースバージョニング](https://docs.gitlab.com/ee/user/project/releases/)、[高度なデプロイ戦略](https://about.gitlab.com/blog/2020/11/23/cd-unified-monitor-deploy/)（Canary、インクリメンタルロールアウト、Blue/Green デプロイなど）のサポート、Feature Flag、Review App、[パフォーマンステストと検証](https://about.gitlab.com/blog/2020/02/18/how-were-building-up-performance-testing-of-gitlab/) | |
| パイプライン構成管理 | GitLab Pipeline Authoring により、ユーザーは必要に応じて最小限の構成でパイプラインを作成でき、複雑なパイプラインの作成と可視化も可能です。これにより、インフラエンジニアは手作業を最小限にし、再現可能なプロセスを作成して生産性を最大化できます | [パイプライン構成](https://docs.gitlab.com/ee/ci/yaml/)、[パイプライン構成のタイプ](https://docs.gitlab.com/ee/ci/pipelines/#types-of-pipelines) | |

## トップ 3 差別化要因

| 差別化要因 | 価値 | 証跡  |
|-----------------|-------------|---------------|
| エージェントベースとエージェントレスのアプローチを選択可能  |  お客様は環境に合った正しいアプローチを選択できます。エージェントレスアプローチでは、ユーザーは各デプロイ先インフラコンポーネントにエージェントをインストール・保守することなく、GitLab に K8s および非 K8s プラットフォームの GitOps プロセスを管理・オーケストレーションさせることができ、リソース消費が少なくコスト削減につながります。エージェントベースアプローチでは、ファイアウォール内にあるセキュアなインフラコンポーネントを持つユーザーは、GitLab Agent を活用してセキュアなインフラを最新の状態に保ち、セキュリティ侵害や予期せぬダウンタイムのリスクを軽減できます。 | TBD  |
| オンプレミス & クラウド - 物理、仮想、クラウドネイティブインフラ |  GitLab はお客様のいる場所で対応します。ほとんどの競合はクラウドネイティブインフラのみの GitOps をサポートしますが、GitLab はオンプレミスでもクラウドでも、物理サーバー、仮想サーバー、クラウドネイティブインフラのいずれでも GitOps をサポートします。異なる種類のインフラに対して別々の GitOps ソリューションを購入・保守する必要がなく、コスト削減と組織全体で GitOps を一貫したユーザー体験で実現できます。 | TBD  |
| インフラ、開発、運用チーム間のコラボレーションを促進する単一アプリケーション |  GitLab は GitOps に必要なほとんどの要素（バージョン管理、CI/CD、Container Registry）と、構成管理、オーケストレーション、インフラプロビジョニング向けのすぐに使える統合を備えた単一アプリケーションです。ほとんどの競合ソリューションは同じことを実現するために 5〜6 の統合が必要です。すべての GitOps を GitLab に統合することでコスト削減につながり、その一貫したユーザー体験と統合された機能は生産性向上、より高い環境の安定性と信頼性に役立ちます。 | TBD  |

## メッセージハウス

ユースケースのメッセージハウスは、ユースケースの価値と差別化要因を記述・議論するための構造を提供します。

現在のメッセージングは、このページの[市場の視点](#the-market-viewpoint) セクションと、[GitOps とは何か？](https://about.gitlab.com/topics/gitops/) に答えるトピックページに加え、ここでの追加メモにあります。

「インフラストラクチャプラットフォーム」は GitOps と GitLab に関連して使用するのに優れたフレーズです。私たち自身を実体と異なるものとして示してしまわないよう、慎重に使う必要があります。過去には、Chef、Ansible、Terraform と類似の機能を持っていると主張したことで指摘を受けたことがあります。GitLab はそれらの機能を内部に持つのではなく、これらのツールとの統合を目指しています。GitLab が統合を通じてインフラプラットフォームの機能を提供していることを明確にしておけば、I&O バイヤーに響く強力なメッセージングが得られます。[トピックページの使用例](https://about.gitlab.com/topics/gitops/#why-gitlab) を参照してください

### ディスカバリー質問

- インフラチームは構成、ポリシー、変数などをインフラ全体で一貫してどのように管理していますか？
- インフラに加えられた変更をどのように追跡できていますか？
- ステージング／本番環境への影響を最小限にするため、適切な人物によるレビュー・承認を保証できていますか？
- 環境コンソールへのアクセス権を何人が持っていて、コンソール内での変更を一貫して追跡できていますか？ 例: エンジニアが AWS / GCP コンソールにログインして応急処置のために変更を加える。
- 監査要件として不可欠な、すべてのインフラ変更のコンプライアンス証拠をどのように示せますか？
- 環境内の問題からどれくらい速く復旧でき、最後に成功したデプロイにロールバックできますか？
- インフラチームは環境のセットアップ手順を毎回一貫して繰り返せますか？
- インフラチームと開発チームが異なるツールを使っていて、両チーム間のコラボレーションを減らしていませんか？
- 複数のクラウドにまたがる継続性とツールの最小化を確保するために、インフラポリシーと構成を複数クラウドに一貫してデプロイできますか？
- 一部のお客様は構成ファイルがアドホックに保存されていることに苦労していると聞きます。構成ファイルをどのように管理していますか？
- 多くのお客様は環境を管理する複数のインフラ管理者を持っています。複数の人が環境への変更を行うアクセスを持っているとき、本番ダウンタイムの根本原因をどのように追跡できますか？
- インフラのセットアップと保守作業はどのくらい手作業で、繰り返し作業が多いですか？
- エンジニアはインフラのセットアップと保守にどれくらい時間を費やしていますか？ そのうち繰り返し作業はどれくらいですか？
- エンジニアはワークフローにどれくらい満足していますか？ どの領域を改善したいですか？
- 環境への手動変更によりどれくらいの生産性が失われていますか？
- 御社はより多くの自動化を支持してインフラワークフローの改善に関心がありますか？
  - なぜ御社にインフラ自動化が必要だと考えていますか？
  - 現在のインフラワークフローでどのような障害に遭遇していますか？
- インフラエンジニアが現在のステージング／本番環境に変更を加える際のワークフローはどのようなものですか？
- 新しいインフラワークフローのセットアップに現在どれくらい時間がかかりますか？ これらのワークフローはどれくらい繰り返し作業ですか？

### 反論への対応

| 反論 | 回答 |
| --------- | -------- |
| *当社の環境は GitOps には複雑すぎる* | 大きな変化は常に複雑です。しかし、最もシンプルなテスト環境から始めて反復的に行うこともできます。GitLab には、GitOps の旅を始めるのを支援する強力な[プロフェッショナルサービス](https://about.gitlab.com/services/) チームもあります。 |
| *GitOps は開発者がデプロイをいじる権限を増やすため、インフラチームはそれに快適でない* | GitOps は開発者がインフラチームと協業して作業できるようにします。GitLab を使った GitOps はマージリクエスト承認、監査レポート、コンプライアンスダッシュボードを通じて十分な制御を含み、インフラチームは何が本番に行くかを監視できるよう活用できます。 |
| *(インフラ／DevOps エンジニア) 仕事と環境のコントロールを失う* | GitOps は開発者がインフラチームと協業して作業できるようにします。GitLab を使った GitOps はマージリクエスト承認、監査レポート、コンプライアンスダッシュボードを通じて十分な制御を含み、インフラチームは何が本番に行くかを監視できるよう活用できます。 |
| *Kubernetes を使っていないので GitOps は関係ない* | GitLab を使った GitOps はお客様のいる場所で対応します。物理、仮想、クラウドネイティブ環境（オンプレミスまたはクラウド）へのデプロイをサポートします。 |
| *ファイアウォールを開けたり GitLab CI/CD にクラスターアクセスを与えたりすることを期待するプッシュベース／エージェントレスアプローチには快適でない* | 最近、エージェントベースアプローチを使って Kubernetes クラスターと GitLab CI/CD 間のセキュアな通信を可能にする [GitLab Agent for Kubernetes](https://about.gitlab.com/blog/2021/02/22/gitlab-kubernetes-agent-on-gitlab-com/) を発表しました。これにより、お客様はファイアウォールを開けたり GitLab CI/CD にクラスターアクセスを与えたりする必要がありません。両方のオプションを現在サポートしており、特定のニーズに最適なアプローチを選択できます。 |

## 競合比較

### ArgoCD

ArgoCD は Kubernetes 用 GitOps デプロイメントのオープンソースソリューションです。Intuit によって開始され、現在は [CNCF インキュベーションプロジェクト](https://www.cncf.io/projects/argo/) です。Argo Project ファミリ製品の一部です。

ArgoCD は GitLab Agent for Kubernetes と直接競合します。

ArgoCD は GitLab と一緒に動作します。GitLab CI/CD で実行されるビルド・セキュリティステップを補完できます。

| 差別化要因  | 競合の実現方法 | GitLab がどう違うか |
| - | ---------------------- | ------------------------- |
| GitOps を実現するための複数製品 | ArgoCD はデプロイメント部分のみに注力。Feature Flag と高度なデプロイ戦略サポート用の他の Argo プロジェクトがあります。 | GitLab は単一プラットフォームに統合された必要なツール一式を提供 |
| 複数のデプロイ先 | クラウドネイティブデプロイメントのみに注力 | オンプレミス & クラウド、物理、仮想、クラウドネイティブインフラにデプロイ可能 |
| プッシュ & プル型デプロイ自動化 |  ArgoCD は新しいイメージを監視し、お客様が選んだポリシーに従って K8S クラスターのサービスを更新。プッシュベースデプロイメントはサポートしない。 | GitLab Agent for Kubernetes は新しい K8S マニフェストを監視し、それに応じて K8S クラスターを更新。 |
| GitOps 原則を使って自身をインストール・管理 | ArgoCD は自身をブートストラップ可能 | GitLab Agent は自身を管理するように設定可能 |
| デプロイがロールバックされたときに状態を同期 | ロールバックは新しい git コミットまたは revert なので設計上発生 | ロールバックは新しい git コミットまたは revert なので、GitLab Agent を使用しているとき設計上発生 |

### Weaveworks - Flux OSS オペレーター使用

Flux は Kubernetes 向け継続的・漸進的デリバリーのオープンソースソリューションです。Flux は Weaveworks で始まり、現在は CNCF インキュベーションプロジェクトです。GitOps 用 WeaveWorks Cloud ソリューションの一部です。

WeaveWorks Cloud ソリューションは GitLab と一緒にも動作します。GitLab SCM と CI が Flux CD と連携して GitOps ソリューションを作成します。

| 差別化要因  | 競合の実現方法 | GitLab がどう違うか |
| - | ---------------------- | ------------------------- |
| GitOps を実現するための複数製品 | Weaveworks ツールチェーンは、バージョン管理に GitHub、CI に CircleCI、Container Registry に Quay.io、CD に Weave Flux で構成され、構成管理、インフラプロビジョニング、コンテナオーケストレーション用の他のツールも併用します [情報源](https://web.archive.org/web/20231201061330/https://www.weave.works/blog/the-gitops-pipeline)。お客様は他の Git、CI、Container Registry も自由に選べます | お客様は管理すべきツールが少なくとも 3 つ少なくなります。バージョン管理、CI/CD、Container Registry は GitLab が提供し、Weaveworks と同様に構成管理、インフラプロビジョニング、コンテナオーケストレーション用の他ツールと統合します。 |
| 複数のデプロイ先 |  クラウドネイティブデプロイメントのみに注力 | オンプレミス & クラウド、物理、仮想、クラウドネイティブインフラにデプロイ可能 |
| プッシュ & プル型デプロイ自動化 |  Flux は新しいイメージを監視し、お客様が選んだポリシーに従って K8S クラスターのサービスを更新。プッシュベースデプロイメントはサポートしない。 | GitLab Agent for Kubernetes は新しい K8S マニフェストを監視し、それに応じて K8S クラスターを更新。Self Managed と SaaS 招待制で利用可能。現在 - エージェントなしでプッシュベースデプロイメントをサポート。ロードマップにはエージェントを使ったプッシュベースデプロイメントサポートも含まれます。 |
| GitOps 原則を使って自身をインストール・管理 | Flux v2 は GitOps 原則を使って git リポジトリを作成、Flux マニフェストの管理・更新が可能 | TBD? |
| デプロイがロールバックされたときに状態を同期 | TBD? | TBD? |

### 業界アナリストリレーションズ (IAR) プラン

- IAR ハンドブックページは、[アナリストとの会話にユースケースを取り入れる](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/analyst-relations/#how-we-incorporate-use-cases-into-our-industry-analyst-interactions) 計画を反映するよう更新されています。
- 各ユースケース固有の詳細、および業界アナリスト企業との契約上の機密保持義務を尊重し、エンゲージメント計画は GitLab チームメンバーに対し以下の保護されたドキュメントで提供されます。[IAR Use Case Profile and Engagement Plan](https://docs.google.com/spreadsheets/d/14UthNcgQNlnNfTUGJadHQRNZ-IrAe6T7_o9zXnbu_bk/edit#gid=1124037301)。

このユースケースに関する GitLab の機能を現在理解しているアナリストの一覧は、Slack（#analyst-relations）または [Issue](https://gitlab.com/gitlab-com/marketing/product-marketing/issues/new) を作成して "AR-Analyst-Validation" テンプレートを選択することで Analyst Relations にお問い合わせください。

## 採用推奨

この表は、採用すべきユースケース、製品ドキュメントへのリンク、ユースケースに対応するサブスクリプションティア、製品分析メトリクスを示しています。

| 機能 / ユースケース | Free | Premium | Ultimate | Product Analytics | 備考 |
| ------------------ | ---- | ------- | -------- | ----------------- | ------ |
| [GitLab Agent for Kubernetes を試す](https://docs.gitlab.com/ee/user/clusters/agent/) | ✓ | ✓ | ✓ | `counts.kubernetes_agents_with_token` | |
| [カスタム CI ソリューションから移行](https://docs.gitlab.com/ee/user/clusters/agent/ci_cd_workflow.html) | ✓ | ✓ | ✓ | `redis_hll_counters.kubernetes_agent.agent_users_using_ci_tunnel_monthly` | |
| [プッシュベースデプロイメントを使用](https://docs.gitlab.com/ee/user/clusters/agent/) | ⤬ | ✓ | ✓ | `redis_hll_counters.kubernetes_agent.agent_users_using_ci_tunnel_monthly` | |
| [CI 接続用の高度な権限管理](https://docs.gitlab.com/ee/user/clusters/agent/ci_cd_workflow.html#restrict-access-of-authorized-projects-and-groups) | ⤬ | ✓ | ✓ | `redis_hll_counters.kubernetes_agent.agent_users_using_ci_tunnel_monthly` | |
| [プルベースデプロイメントを使用](https://docs.gitlab.com/ee/user/clusters/agent/gitops.html) | ✓ | ✓ | ✓ | [WIP](https://gitlab.com/gitlab-org/gitlab/-/issues/366294) | |

## 証跡 - 顧客

### 引用とレビュー

- [動画: kiwi.com の Infrastructure as Code](https://www.youtube.com/watch?v=Un2mJrRFSm4) - kiwi.com が GitLab と Terraform を使ってインフラをコードとして管理する方法を学びます。ボーナス情報 - GitLab CI/CD と Infrastructure as Code を使ってセルフホスト GitLab インスタンスをデプロイする方法もご覧ください
- [動画: VMWare - GitLab と Terraform Cloud を使った Infrastructure as Code](https://www.youtube.com/watch?v=qXj4ShQZ4IM) - GitLab と Terraform はしばらく前からうまく連携しており、VMWare がどのように GitLab CI/CD と Terraform Cloud を使ってインフラをコードとして管理しているかを学びます
- [動画: ValidaTek の DevOps と Infrastructure as Code の旅](https://www.youtube.com/watch?v=3uZE-ktP2Pc) - ValidaTek は米国連邦政府のあらゆる分野（民生、軍事、IC）と協業しています。クライアントのインフラを管理するために GitLab をどのようにセットアップしたかをご覧ください。

#### Gartner Peer Insights

「リリースとバージョンを管理するのに非常に効率的なツール。当社には開発・デプロイプロセスがあり、すべての段階で [GitLab] が関わっています。開発コードの保存に加え、すべてのパッケージングとデプロイスクリプトを git に保存しています」
>
> - Full-stack Developer, [Gartner Peer Insights Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1112407)

「最後に、GitLab で最も素晴らしいのは、GitLab エコシステムがいかに統合されているかです。VCS から CI、デプロイメントまで、開発のほぼすべてのステップを見事にカバーしています。」
>
> - Software Engineer, [Gartner Peer Insights Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1038051)

「GitLab は世界で最も好まれるサービスで、ユーザーコミュニティは非常に幅広いです。GitLab ではプロジェクトまたはブランチベースのユーザー認可ができます。さらに、継続的デプロイメント統合を非常に素早く行えます。希望する制約内でマージリクエストを作成し、簡単に管理できます。コンフリクトを防ぐのも非常に簡単です。ソフトウェア開発チームに必須のサービスです。」
>
>- Software Development Lead, [Gartner Peer Insights Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1324677)

### ケーススタディ

-**[Northwestern Mutual](https://www.youtube.com/watch?v=yw7N82mXmZU)**

- **課題**  手動プロセス、オンプレミスデータセンターからのリソースプロビジョニングが非効率なプラクティスを生んでいた。
- **ソリューション** GitLab Premium (SCM, CI) と Terraform
- **結果** 本番投入までのリードタイムを大幅に改善、環境を 1 時間以内に作成可能。すべてがコードとして実行され、パッチによるリスクがない。
- **販売セグメント:** エンタープライズ

-**[Wag Labs](https://about.gitlab.com/blog/2019/01/16/wag-labs-blog-post/)**

- **課題** 複雑な CI ツールチェーンの制御不足。
- **ソリューション** GitLab Ultimate (SCM, CI, CD) と Terraform
- **結果** 何かをデプロイし、問題があればロールバックするのが非常に簡単。本番へのデプロイから不安と恐怖が取り除かれた。
- **販売セグメント:** ミッドマーケット

### クロージングを支援するリファレンス

- [GitOps と GitLab を使用しているお客様を見つける](https://docs.google.com/spreadsheets/d/1j31jz71BBMM-8IPHZWUzi8IogYq2m-VhyofzJmd3wk8/edit?usp=sharing)

## パートナー

GitLab は既存のインフラ自動化ツールを置き換えるものではなく、それらを補完して包括的なソリューションを提供します。[JetBrains DevOps Ecosystem 2019](https://www.jetbrains.com/lp/devecosystem-2019/devops/) 調査によると、**Terraform** はお客様が使用する最も人気のあるインフラプロビジョニングツールです。Terraform はクラウドに依存せず、分散アプリケーション向けの複雑なインフラの管理に役立ちます。GitLab は包括的な GitOps ソリューションの構築に向けた最初のステップとして、[Terraform サポートに注力](https://about.gitlab.com/direction/delivery/infrastructure_as_code/#whats-next) します。

## リソース

### プレゼンテーション

- GitOps Industry Talk - GitOps とは何か？ なぜ重要なのか？ どう始められるか？ - [スライドデッキ](https://docs.google.com/presentation/d/18cuZjvkMT8uv241dqJZMdaWOyvZiwBOzFvRZ4HaP1iE/edit)、[動画](https://www.youtube.com/watch?v=JtZfnrwOOAw)

### Web ページ、ホワイトペーパー、インフォグラフィック、ブログ

- [What is GitOps?](https://about.gitlab.com/topics/gitops/)
- [Infrastructure as Code using GitLab & Ansible](https://about.gitlab.com/blog/2019/07/01/using-ansible-and-gitlab-as-infrastructure-for-code/)
- [Part 1 of 3: Why collaboration technology is critical for GitOps](https://about.gitlab.com/topics/gitops/gitops-gitlab-collaboration/)
- [Part 2 of 3: How infrastructure teams use GitLab and Terraform for GitOps](https://about.gitlab.com/topics/gitops/gitlab-enables-infrastructure-as-code/)
- [Part 3 of 3: How to deploy to any cloud using GitLab for GitOps](https://about.gitlab.com/topics/gitops/gitops-multicloud-deployments-gitlab/)

### 動画（基本的なデモ動画を含む）

- [What is GitOps? Why is it important? How can you get started?](https://www.youtube.com/watch?v=JtZfnrwOOAw)
- [What is Infrastructure as Code](https://www.youtube.com/watch?v=zWw2wuiKd5o)
- [Infrastructure as Code using GitLab & Ansible](https://youtu.be/M-SgRTKSeOg)
- [Part 1 of 3: How GitLab supports GitOps: The Process](https://www.youtube.com/watch?v=wk7YAXijIZI)
- [Part 2 of 3: How GitLab supports GitOps: The Infrastructure](https://www.youtube.com/watch?v=5rqoLj8N5PA)
- [Part 3 of 3: How GitLab supports GitOps: The Application](https://www.youtube.com/watch?v=heQ1WY_08Tc)
- [GitOps with GitLab and Terraform](https://www.youtube.com/watch?v=G7JOjI6V3AY)
- [Using GitLab for GitOps to break down silos and encourage collaboration](https://www.youtube.com/watch?v=5ykRuaZvY-E)

### クリックスルー & ライブデモ

- [GitOps Click Through Demo](https://drive.google.com/open?id=1UT32lLvXtwAslkK7o8asbko3a231WKrjmlcM0z9coPw)

## バイヤーズジャーニー

バイヤーズジャーニーの主要ページのインベントリ

| **認知** <br> 問題について学ぶ  |  **検討** <br> ソリューションのアイデアを探す  |  **意思決定** <br> これは正しいソリューションか|
| ------ | -------- |-------- |
| トピックページ？  | ソリューションページ | 証跡 |
| ランディングページ？ | ?比較?  | 比較 |
| -その他？            |   |  - 製品ページ x <br>  - 製品ページ y <br>  - 製品ページ z |
