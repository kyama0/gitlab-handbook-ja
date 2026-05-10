---
title: "セールスディスカバリーとクオリフィケーション質問"
description: "効果的な質問戦略は、お客様と対話を通じて真にニーズを理解し、信頼性と信頼を構築し、Opportunity をクオリファイするために重要です"
upstream_path: /handbook/sales/qualification-questions/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
---

[効果的な質問戦略](https://docs.google.com/presentation/d/1caRLqSGNhFAQ9KuRVBaxI9cExOvBQBC4hd36uVfWFvs/edit?usp=sharing) は、お客様と対話を通じて真にニーズを理解し、信頼性と信頼を構築し、Opportunity をクオリファイするために重要です。さらに、効果的なディスカバリーとニーズ分析は、テーラーメイドで説得力のある顧客中心のソリューションを開発するのに役立ち、ビジネスを獲得し購買決定を進める可能性を高めます。

ターゲット買い手ペルソナには、CIO、CTO、VP of Application Development、Product Owner、App Developer/DevOps Engineer が含まれます。

## **CUSTOMER STRATEGY**

### Goal

- 御社のニーズと当社が支援できる方法を最もよく理解するため、ビジネスにより高い価値を提供するためのアプリケーション開発プラクティスを近代化するための長期的な目標は何ですか？
- 何を達成しようとしており、なぜこれらの目標が重要ですか？
- アプリのデプロイ頻度を増加させる戦略は何ですか？これができるようになれば、ビジネスへの影響は何ですか？
- 各目標の成功をどのように測定しますか？
- クラウド戦略は何ですか？

### Objectives

- 長期的な目標を理解した上で、今後 6～12 ヶ月の主要な目的は何ですか？
- アプリケーション開発プラクティスの近代化でどのような課題を経験していますか？
- 現在の DevOps スタックの実装と実行で 1 つまたは少数のことを対処または改善できるとしたら、何で、なぜですか？
- これまで <x> への移動を妨げてきたものは何ですか？
- これらの問題が継続する場合の影響は何ですか？
- 将来を見据えて、他にどのような課題や障害に遭遇すると予想されますか？それらの課題に備えて今日何をしていますか？
- チームがさらに成功するのを妨げる他のものは何ですか？

### Initiatives

- あなたとあなたのチームは現在、どのような優先順位付けされた施策にフォーカスしていますか？
- 現在計画中、または検討中の施策は何ですか？
- この関心／施策はどこから来ていて、スコープは何ですか？（注: 優先順位の高い施策はしばしばクローズする可能性が高く、より迅速にクローズします）
  - 全社的または事業部全体の施策ですか？それとも他のものですか？
- クラウドネイティブな施策はありますか？もしそうなら、どのソリューション（例: Kubernetes）を探求していますか？

## **CUSTOMER NEEDS**

### Desired Outcomes

- このプロジェクトの要件は何ですか？成功はどのように見えますか？
- 成功はどのように測定されますか？

### Current Situation

- 現在の状況について教えていただけますか？
- 何が GitLab を見るきっかけとなりましたか？（該当する場合）
- あなたの役割は何で、何をしていますか？（理想的な役割: Infrastructure/Cloud/Enterprise Architects、Dev Ops、System Admin/Engineer、IT Managers/Directors、Release Engineer、VP Engineering）
- あなたのグループが何をしているかをどのように説明しますか？
- あなたのグループはどれくらい大きいですか？（目標: 誰が GitLab を使用するか、Opportunity がどれくらい大きくなる可能性があるかを把握する）
- 開発チームが現在取り組んでいるプロジェクトをどのように説明しますか？
- 御社のアプリケーション開発プラクティスがどれくらい近代的かを 1 から 5 のスケールで評価する場合（1 = 全く近代的でない、5 = ベストインクラスで近代的）、評価とその理由は何ですか？評価を上げるには何が必要ですか？
- DevOps スタック（またはアプリケーション開発ツールチェーン）で現在どのツールを使用していますか？
  - Issue とバグ追跡には何を使用していますか？
  - CI には何を使用していますか？
  - コードレビューには何を使用していますか？
  - アプリケーションデプロイメントにはどのツールを活用していますか？
  - 次の採用について御社の現在および将来の計画をどのように説明しますか:
    - コンテナ
    - VM
    - マイクロサービス
    - Kubernetes
    - プロジェクトマネジメントにはどのツールを使用していますか？
- どのプラットフォーム／クラウドにデプロイしていますか？(AWS/GCP/Azure/VMWare/Openshift/その他)
  - AWS の場合、EC2、ECS、EKS、Fargate、Lambda のどれにデプロイしていますか
  - GCP の場合、GCE、GKE、App Engine、Cloud Run のどれにデプロイしていますか
  - Azure の場合、VM、AKS、Functions のどれにデプロイしていますか
- 継続的インテグレーションと継続的デリバリーでの成熟度レベル／進捗状況をどのように説明しますか？これは御社のグループと会社が改善したいものですか？
- 現在 GitLab CE をどのように使用していますか？（注: 該当する場合 -- <https://version.gitlab.com/> をチェックして、彼らの会社が CE を使用しているかを特定する）
- 他のグループは Git を使用していますか？いいえの場合、なぜか、どの Version Control System を使用していますか？はいの場合、何を使用していますか？
- 御社ではセキュリティテストは現在どのように行われていますか？
- Static Application Security Testing、Dependency Scanning、および／または License Compliance に関する脆弱性を見つけるための現在のプロセスは何ですか？
- 他のテストおよびレビューツールでの組織／チーム予算への財務的影響は何ですか？
- 追加のお客様ユースケースベースのディスカバリー質問については、次を参照してください:
  - [Version Control and Collaboration (VC&C)](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/version-control-collaboration/#discovery-questions)
  - [Continuous Integration (CI)](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/#discovery-questions)
  - [DevSecOps](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#discovery-questions)
  - [Agile Planning and Management](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/agile/#discovery-questions)
  - [Continuous Delivery (CD)](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/cd/#discovery-questions)
  - [GitOps](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/gitops/#discovery-questions)

### Level of Satisfaction

- 現在のアプリケーション開発＆デリバリーツールスタックは全体としてどう機能していますか？
- 何がうまく機能していますか？
- 何かを変えるとしたら、それは何で、なぜですか？
- 今日最も課題となっている要素は何ですか？それらの課題はなぜそれほど厄介なのですか？
- あなたとチームが経験している問題の根本的な原因は何ですか？
- 成功するために他に何が必要ですか？

### Personal Needs

- この目的を達成するうえで、*あなた* にとって最も重要なことは何ですか？
- プロジェクトの成功にあなたが個人的に深くコミットしているのはなぜですか？
- プロジェクトが成功した時、あなた個人にとって何を意味しますか？
- 成功しなかった場合、あなた個人への影響は何ですか？
- 最も懸念していることは何ですか？
- サプライヤー／パートナーとの関係に関連して、あなたにとって最も重要なことは何ですか？
- サプライヤーとどのように働くことを好みますか？
- GitLab について何を聞いており、GitLab に対する認識は何ですか？
- GitLab に関する以前の経験はありますか？どうやって私たちのことを知りましたか？

## **CUSTOMER DECISION**

### Decision Process

- 御社の意思決定プロセスをどのように説明しますか？
- 意思決定プロセスに何人または何チームが関与していますか？
- どのエグゼクティブまたはシニアレベルのスポンサーシップが必要ですか？
- 各チーム／グループが独自のソリューションを購入しますか、それとも一元化された部署がこれを行いますか？一元化された部署の場合、そのグループの名前は何ですか？
- 高可用性は、あなたのニーズと達成しようとしていることの中でどれくらいランクされますか？

### Decision Criteria

- 意思決定にどのような基準が使用されますか？

### Budget and Timeline

- いつ実装を計画していますか？そのタイムラインを推進しているものは何で、タイムラインに柔軟性はありますか？
- タイムラインに影響を与えている compelling event（または一連のイベント）はどの程度ありますか？それについて他に何を教えていただけますか？
- このプロジェクトにどのような予算とリソースが割り当てられていますか？

### Competitors

- 他の Git ベースのオファリングを検討していますか？もしそうなら、どれですか？
- 他のどのサプライヤー／ベンダー／ソリューションを検討および／または評価していますか？
- GitLab は他のサプライヤーと比較してどのように見られていますか？

### Time to Value

- ロールアウトを成功させるために必要な最も重要なことを教えてください。
- 価値を得るまでの時間を加速させる機会があると思う箇所を説明してください。
- GitLab エキスパートが GitLab を設計しデプロイすることで、チームの時間をどれくらい節約できますか？
- チームを迅速かつ容易に移行できる能力から、ビジネスはどう恩恵を受けますか？
- GitLab、git、または GitLab CI/CD を使用するためのベストプラクティスに関する教育によって、開発者の生産性がどう影響を受けるかを説明してください。
- 新しいツールまたはプラットフォームを追加することに関連するリスクをチームはどのように管理していますか？

## **GITLAB PREMIUM および ULTIMATE を販売するための質問**

GitLab Premium および GitLab Ultimate Opportunity をより多く特定する鍵は、*見込み客とお客様のエンゲージメントで真にコンサルタティブなマインドセットを取り入れる* ことです。具体的には:

- **まず、各バージョンがお客様の対処に役立つお客様の課題とユースケースを深く理解していることを確認する**
  - [Why Premium?](https://about.gitlab.com/pricing/premium/) ページを参照
  - [Why Ultimate?](https://about.gitlab.com/pricing/ultimate/) ページを参照
- そしてさらに重要なのは、効果的でオープンエンドなディスカバリー質問をし、お客様の回答を能動的にリスニングして、これらのバージョンの機能が組織にとって望ましい成果を提供するために必要な能力にマッピングされるかどうか、どのようにマッピングされるかを判断することです。

### GitLab Premium のディスカバリー質問

#### 概要

[GitLab Premium](https://about.gitlab.com/pricing/premium/) は、組織が運用効率を高め、より良い製品をより速く提供するのに役立ちます。GitLab Premium を使用すると、組織は高可用性、地理的レプリケーション、プログレッシブデプロイメント、高度な構成、一貫した標準をサポートする DevOps デリバリーをスケールできます。これらの能力はお客様にとって重要ですか？以下の質問をして、それを確認することを検討してください。

#### エンタープライズレベルサポート

- SDLC ツールチェーンでの停止とダウンタイムの影響は何ですか？
  - 影響が大きい場合、[Priority Support](https://about.gitlab.com/support/#priority-support) を必要な能力として位置付けます
- 御社にとって優先サポートはどれくらい重要ですか？
  - スタンダードサポート: 翌営業日サポート（24x5 で 24 時間以内に応答）
  - 優先サポート: 通常のビジネスサポートで 4 時間応答時間と、保証された 30 分応答時間の 24x7 アップタイムサポート（停止とダウンタイムの最小化に最適な選択）
- GitLab をロールアウトするチームの能力にどれくらい自信がありますか？デプロイメントと実装をガイド、計画、形成するのを支援するエキスパートの助けがあれば、影響は何でしょうか？
  - [Customer Success Manager](https://about.gitlab.com/services/customer-success-management/) アクセスがどのようにデプロイメントリスクの軽減、価値を得るまでの時間の加速、ROI と TCO の最適化に役立つかを位置付けます
- 通常、ソフトウェアアップグレードをどのように扱いますか？サプライズがないことを確認するため、プロセスを GitLab がサポートして支援することは役立ちますか？
  - はいの場合、GitLab の *Upgrade Assistance* を位置付けます

#### 高可用性とディザスターリカバリーの達成

- 御社の HA（高可用性）戦略は何ですか？それを持っていますか？なぜ／なぜ違いますか？
  - HA サポートが必要な場合、[Reference Architectures](https://docs.gitlab.com/ee/administration/reference_architectures/) 経由で Premium の HA サポートを位置付けます。注: Free はセルフサポートで HA 機能を提供しますが、エキスパートの GitLab サポートはありません
- 御社は [Disaster Recovery](https://docs.gitlab.com/ee/administration/geo/disaster_recovery/index.html) をどう扱っていますか？
  - GitLab の Disaster Recovery 機能は Premium と Ultimate SKU でのみ利用可能で、別のデータセンターへのフェイルオーバーを数分で扱います
- 開発チームは一般的に同じ近隣に集中していますか、それとも世界中に分散していますか？分散している場合、地理的に分散した開発者間のレイテンシーが最小化されることをどう確保していますか？
  - これがお客様にとって重要な場合、SA と [Geographic Replication](https://docs.gitlab.com/ee/administration/geo/index.html) が必要な能力かどうか議論します

#### 開発者の生産性

- 開発チームの生産性を最大化することはどれくらい重要ですか？
- 開発者をより生産的にするために 1 つだけ変えるとしたら、それは何で、なぜですか？
- グラフとレポートを分析してチーム、プロジェクト、グループの生産性を理解し、パターンとベストプラクティスを発見できるとしたら、それはどう全体的な生産性を改善しますか？
  - これに興味がある場合、[Productivity Analytics](https://docs.gitlab.com/ee/user/analytics/productivity_analytics.html) を位置付けます
- 御社では現在、コードレビューとフィードバックをどのように追跡し管理していますか？
  - GitLab Premium には、ビルトインの [merge request reviews](https://docs.gitlab.com/ee/user/discussions/index.html#merge-request-reviews) が含まれています
- 全体的な開発者の生産性を高めるために、一貫した標準的なプラクティスを持つことはどれくらい重要ですか？
  - [Group and file templates](https://docs.gitlab.com/ee/user/group/#group-file-templates) を使用すると、グループ内のすべてのプロジェクトと共通ファイルタイプのテンプレートのセットを共有できます
- 開発者のシステムログオンプロセスを簡素化し効率化するために、御社は何をしていますか？現在 SmartCard 認証を使用しているか、使用する計画はありますか？
  - はいの場合、Premium の [Smart Card Authentication](https://docs.gitlab.com/ee/administration/auth/smartcard.html) 機能を強調します

#### プロジェクト計画の効率化

- 御社では現在、既存のソフトウェア開発ツールチェーンでプロジェクト計画をどのように扱っていますか？
- プロジェクト計画の取り組みを効率化するために 1 つだけ変えるとしたら、それは何で、なぜですか？
- 御社は、作業の割り当てと追跡の管理と可視化の簡素化からどう恩恵を受けますか？
- プロジェクト計画の効率化が重要な場合、次の能力がお客様にどう役立つかを位置付けることを検討してください（これらの各機能の価値説明については [Why GitLab Premium? ページ](https://about.gitlab.com/pricing/premium/) を参照）
  - [Group Backlog management](https://docs.gitlab.com/ee/user/project/issue_board.html#multiple-issue-boards) - 複数の Issue ボード上のグループレベルのバックログ管理で、将来の作業の追跡、スコーピング、計画を簡素化
  - [Group Milestone Boards/Lists](https://docs.gitlab.com/ee/user/project/issue_board.html#multiple-issue-boards) - 将来のリリース／マイルストーンで提供される将来の作業を可視化
  - [Assignee Boards/Lists](https://docs.gitlab.com/ee/user/project/issue_board.html) - グラフィカルな割り当てボードで、チームメンバーへの作業割り当てを効率化
  - [Group Issue Boards](https://docs.gitlab.com/ee/user/project/issue_board.html#multiple-issue-boards) - 作業を動的に割り当て、追跡できる複数の Issue ボードでプログラム（グループ）を視覚的に管理
  - [Issue Analytics](https://docs.gitlab.com/ee/user/group/issues_analytics/index.html) - 一貫した標準的なプラクティスを確立

#### 自信を持ってデプロイ

- チームを整合させ、適切な時期に正しいことに取り組ませるにはどうしますか？
  - [Epics](https://docs.gitlab.com/ee/user/group/epics/) - ビジネスアイデアと施策を整理、計画、優先順位付け
  - [Roadmaps](https://docs.gitlab.com/ee/user/group/roadmap/) - ビジネス施策の流れを時間にわたって可視化し、将来の機能がいつ出荷されるかを計画

- 現在のステータスを理解するために何個のツールを使用する必要がありますか？それはどれくらい時間がかかりますか？それはチームにどう影響しますか？
  - この質問の流れが DevOps ツールチェーン全体での可視性の欠如の課題を明らかにする場合、組織の運用全体の健全性のホリスティックビューを提供する GitLab Premium の [Operations Dashboard](https://docs.gitlab.com/ee/user/operations_dashboard/index.html#doc-nav) を位置付けます
- 御社が現在ソフトウェアデプロイをどのように管理しているかについての自信のレベルをどう評価しますか？軽減したいリスクはありますか？もしそうなら、それらは何で、なぜですか？GitLab Premium は、組織が以下を含む多数の能力で自信を持ってデプロイすることを可能にします（これらの各機能の価値説明については [Why GitLab Premium? ページ](https://about.gitlab.com/pricing/premium/) を参照）
  - [Multi Project Pipelines](https://docs.gitlab.com/ee/ci/pipelines/downstream_pipelines.html#multi-project-pipelines) - 複数のプロジェクトの CI パイプラインをリンクして統合ソリューションを提供
  - [Protected Environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html) - 特定の環境を変更するアクセスをコントロールし制限を確立

#### 開発を管理

- 現在、コードレビューとフィードバックをどのように追跡し管理していますか？
- SCM から CI への現在のワークフローを説明してください。パイプラインが失敗した場合、修復のプロセスは何ですか？
- 変更点で協働できるとしたら、それは生産性にどう影響しますか？
- 次のリリースはいつですか？そのリリースを逃すリスクはどれくらいありますか？どの時点でこれが上位マネジメントにエスカレーションされますか？
- 既存のソフトウェア開発ツールチェーンでの監査とコンプライアンスを現在どのように管理していますか？
- 複数のツール間で監査の証拠と proof point を集約することはどれくらい簡単または難しいですか？より速いプロセスからどう恩恵を受けますか？
- セキュリティとコンプライアンスのデータを定期的にどのように収集していますか？侵害が発生した場合、影響は何で、誰が関与する必要がありますか？どのような種類の情報が必要ですか？チームが監査の証拠を提供するのにどれくらいの時間がかかりますか？
- GitLab Premium には、以下を含む監査とコンプライアンスに役立ついくつかの機能強化が含まれています（これらの各機能の価値説明については [Why GitLab Premium? ページ](https://about.gitlab.com/pricing/premium/) を参照）
  - [Audit Logs](https://docs.gitlab.com/ee/administration/audit_event_reports.html) - ユーザーごとの変更をレビューし、アクセスを追跡
  - [Auditor users](https://docs.gitlab.com/ee/administration/auditor_users.html) - GitLab インスタンス上のすべてのプロジェクト、グループ、その他のリソースへの読み取り専用アクセス
  - [Merge Request Reviews](https://docs.gitlab.com/ee/user/discussions/index.html#merge-request-reviews) - マージリクエストコードレビューで複数のコメントをドラフトし、コメントを一緒にレビュー／解決
  - [Verified Committer](https://docs.gitlab.com/ee/user/project/repository/push_rules.html#enabling-push-rules) - 認可および検証されたチームメンバーのみがプロジェクトにコミットできるようにする
  - [Require Signed Commits](https://docs.gitlab.com/ee/user/project/repository/push_rules.html#enabling-push-rules) - コントリビューターからの署名されたコミットを要求するポリシーを強制

### GitLab Ultimate のディスカバリー質問

#### 概要

[GitLab Ultimate](https://about.gitlab.com/pricing/ultimate/) は、組織が運用効率を高め、より良い製品をより速く提供し、セキュリティとコンプライアンスのリスクを削減するのに役立ちます。この製品ティアは、エグゼクティブの可視性と戦略的組織使用を持つプロジェクトに理想的で、エンタープライズが優先順位、セキュリティ、リスク、コンプライアンスを管理しながら、デリバリーを最適化し加速することで IT を変革するのに役立ちます。Ultimate は、組織が高度な DevOps 成熟度を達成するのに役立ちます。これらの能力はお客様にとって重要ですか？以下の質問をして、それを確認することを検討してください。

#### セキュリティ

- 御社にとってサイバーセキュリティはどれくらい重要な懸念事項ですか？
- すべてのアプリケーションが安全であることを確保するために御社が取っている行動をどう特徴付けますか？
- すべてのアプリケーションを保護することに関連して、どのような課題に直面しているか、または直面したことがありますか？
- GitLab Ultimate はセキュリティをパイプラインに織り込み、開発チームに早期で実行可能なフィードバックを提供し、次のセキュリティ機能を含みます:
  - [Static Application Security Testing (SAST)](https://docs.gitlab.com/ee/user/application_security/sast/) - 静的コードを評価し、潜在的なセキュリティ問題をチェック
  - [Dynamic Application Security Testing (DAST)](https://docs.gitlab.com/ee/user/application_security/dast/) - レビューアプリケーションを分析して潜在的なセキュリティ問題を特定
  - [Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/) - サードパーティの依存関係を評価して潜在的なセキュリティ問題を特定
  - [Container Scanning](https://docs.gitlab.com/ee/user/application_security/container_scanning/) - Docker イメージを分析し潜在的なセキュリティ問題をチェック
  - [Security Dashboard](https://docs.gitlab.com/ee/user/application_security/security_dashboard/#project-security-dashboard) - 各プロジェクトのおよびプロジェクト全体での最新のセキュリティステータスを可視化
  - [Security Metrics and Trends (future)](https://gitlab.com/gitlab-org/gitlab-ee/issues/6954) - 発見、対処、解決された脆弱性の数と、完全なサイクルに費やされた時間のメトリクスと履歴データ

#### コンプライアンス

- ライセンスのコンプライアンスは御社にとってどれくらい重要で、プロジェクトの依存関係をライセンスについて追跡し、特定のライセンスを承認または拒否できますか？
- GitLab Ultimate は、次のコンプライアンス機能を提供します:
  - License Compliance - プロジェクトに含まれる新しいソフトウェアライセンスの存在を特定。特定のライセンスの組み込みを承認または拒否
  - [Compliance Templates](https://docs.gitlab.com/ee/user/project/working_with_projects.html#enterprise-templates) - 特定の規制標準で監査管理を効率化するテンプレート。現在、HIPAA が利用可能。SOX と SOC2 は近期ロードマップにあります。

#### プロジェクトインサイト

- プロジェクトに重要なこと（例: トリアージの衛生、特定期間中に作成／クローズされた Issue、マージリクエストがマージされるまでの平均時間など）に関するインサイトを得ることが、御社の効率にどう影響しますか？
  - これに興味がある場合、[Project Insights](https://docs.gitlab.com/ee/user/project/insights/) を位置付けます

#### ポートフォリオマネジメント

- 御社は、ソフトウェア開発とデリバリーのプロジェクトを最初から最後まで追跡するために今日何をしていますか？
- これらのプロジェクトのエンドツーエンドの可視性をシニアリーダーシップに提供することはどれくらい簡単または難しいですか？
- 重要なプロジェクトに関わる全員が 1 つのツールでポートフォリオの計画、追跡、実行の共通ビューを持っていたら、生産性にどう影響しますか？
- GitLab Ultimate は、このエンドツーエンドのインサイトと可視性を可能にする堅牢なポートフォリオマネジメントを提供し、組織がビジネス価値の提供にフォーカスするのに役立ちます。注目される機能:
  - [Multi Level Epics](https://docs.gitlab.com/ee/user/group/epics/) - ビジネスアイデアと施策を整理、計画、優先順位付け
  - [VSM Workflow Analytics (future)](https://gitlab.com/gitlab-org/gitlab-ee/issues/7269) - エンドツーエンドのバリューストリームを可視化してボトルネックを特定し解決
  - [Risk Management (future)](https://gitlab.com/gitlab-org/gitlab-ee/issues/3978) - エピックが期日通りに完了しないリスクを管理
  - [What-If Scenario Planning (future)](https://gitlab.com/gitlab-org/gitlab-ee/issues/3979) - 変更を加えた場合のポートフォリオ全体への潜在的影響を可視化
  - [Roadmap Capacity Planning (future)](https://gitlab.com/gitlab-org/gitlab-ee/issues/6777) - 努力の観点から将来の作業が実現可能かを可視化

#### その他

- ゲストユーザー - ゲストユーザーはライセンスカウントにカウントされません

## **追加質問**

### 見込み客が無料トライアルにサインアップした場合（目標: トライアルの成功を確保する）

- あなたと御社は、成功したトライアルをどう説明しますか？
- 評価で最も重要な基準は何ですか？
- GitLab で何人のユーザーをデプロイすることに興味がありますか？
- 他のツールも評価していますか？
- 意思決定のタイムフレームは何ですか？
- 御社の 1 部門を EE に乗せようとしていますか？
- グループのみの場合、現在会社全体を乗せることを妨げているものは何ですか？

### GitHub および GitHub Actions に対する競合／販売

- バトルカードとディスカバリー質問は [こちら](https://web.archive.org/web/20240331181506/https://about.gitlab.com/competition/github/) でレビューしてください

### Microsoft Azure DevOps に対する競合／販売

- バトルカードとディスカバリー質問は [こちら](https://about.gitlab.com/blog/2020/07/09/integrating-azure-devops-scm-and-gitlab/) でレビューしてください

### BitBucket に対する競合／販売

- バトルカードとディスカバリー質問は [こちら](https://about.gitlab.com/blog/2016/01/27/comparing-terms-gitlab-github-bitbucket/) でレビューしてください

### お客様が Jira を使用している

- 御社内の Jira の現在の実装をどう説明しますか？
- Jira での課題（あれば）は何ですか？

### ポストセールアカウント開発

目標: 彼らがなぜ購入したかを理解し、追加のセール拡大と他のセール支援にナゲットを使用する

- GitLab の採用はどう進んでいますか？
- GitLab EE について何が気に入っていますか？
- 何が気に入っていない、または質問がありますか？
- GitLab はあなたのグループにどう役立ちましたか？彼らのユースケースは何ですか？
  - コード品質を改善する？
  - コードリリースを高速化する？
- 何個のプロジェクトを持っていますか？
- あなたまたはチームが GitLab 内で見たいものは何かありますか？
- 他のグループも GitLab を使用していないことで何か課題が見えていますか？
- GitLab を使用すると恩恵を受ける他のグループがありますか？
- はいの場合、彼らに連絡を取る方法を提案していただけますか？
- プロビジョニングされたライセンスのうち、何個が使用されていますか？
- 採用が低い場合、お手伝いできることはありますか？
- ライセンスの採用が高い場合、彼らの成長計画を尋ね、いつシートを増やす必要があると感じるかを聞きます
- GitLab のリファレンス顧客になることに同意していただけますか？もしそうなら、GitLab はあなたと御社にどのように役立ちましたか？
