---
title: プロフェッショナルサービスの販売
upstream_path: /handbook/solutions-architects/playbooks/selling-professional-services/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
---

これは、ソリューションアーキテクト (SA) が販売サイクル中に顧客に対してプロフェッショナルサービスをポジショニングし、必要に応じてカスタムスコーピングのために Professional Services Engagement Management チームに渡す適切な情報を収集するための実務ガイドです。プロフェッショナルサービスを販売する全体的なワークフローは、[Professional Services ハンドブック - Selling Professional Services ページ](/handbook/customer-success/professional-services-engineering/selling/)で定義されています。

## サービスの種類

GitLab は、顧客が GitLab プラットフォームの導入や DevOps プラクティスの成熟化において価値を実現するまでの時間を短縮するために、幅広い[プロフェッショナルサービス](https://about.gitlab.com/services/)を提供しています。サービス内容は、標準的なインストラクター主導のトレーニングから、特定の顧客ニーズに対応するカスタムサービスパッケージまで多岐にわたります。一般的に、プロフェッショナルサービスは次の 2 通りのいずれかの方法で販売されます。

- 注文書上の SKU として販売 - 顧客がこれらのサービスを購入するのに SOW は不要で、ライセンス購入と併せて注文書に直接追加できます（該当する場合）。[Professional Services Catalog](https://about.gitlab.com/services/catalog/) に SKU ベースのサービス提供の完全な一覧があります。最も人気のある SKU ベースのサービスは次のとおりです。
  - [GitLab Rapid Results - self-managed](https://about.gitlab.com/services/catalog/) - クラウド環境での GitLab 実装向け
  - [GitLab Migration+](https://about.gitlab.com/services/#migration-services) - 他の Git ベースシステムから GitLab へ最大 500 プロジェクト・1000 リポジトリの移行 (SCM のみ - CI/CD は含まれない)
  - [GitLab Expert Services](https://about.gitlab.com/services/catalog/) - 顧客が抱えるどのような導入ニーズにも対応するための 40 時間のブロック
- "GitLab Service Package" として SOW で販売 - 特定の顧客ニーズに対応するために定義されたカスタムサービスパッケージに使用されます。カスタム SOW は通常、次の用途で使用されます。
  - ソースコード移行と、Jenkins などの他の CI ツールからの GitLab CI 導入／移行をひとまとめに束ねる
  - 顧客のデータセンター内に複雑な self-managed GitLab を実装する
  - 既存顧客向けのヘルスチェックサービス。提供内容と必要工数の詳細は具体的な顧客状況により異なります
  - Migration+ オファリングが適切でない GitLab への移行

## 複数チームでのコラボレーション

新規ライセンス商談がステージ 3 - Technical Evaluation からステージ 4 - Proposal へ移行する際、ソリューションアーキテクトがプロフェッショナルサービスのポジショニングを主導することが期待されています。ソリューションアーキテクトは、顧客が自前で作業する場合と比較してプロフェッショナルサービスを利用する価値を明確に説明できる必要があり、顧客にとって最も有益な適切なプロフェッショナルサービスを選定できる必要があります。カスタムサービスパッケージが最良の選択肢である可能性が高いと判断した場合、ソリューションアーキテクトまたは適切なセールスロール (AE、SAE) は、サービス計算ツールを使ってスコーピング Issue を作成することで、[カスタムサービススコーピングワークフロー](/handbook/customer-success/professional-services-engineering/selling/#custom-scoped-services)を開始してください。Professional Services Engagement Manager がスコーピング Issue を引き取り、アカウントチームと協力して適切なサービスパッケージをスコーピングします。

既存顧客がプロフェッショナルサービスに関心を持ち、現時点でライセンス商談がない場合は、CSM が AE/SAE と協力し、適切なサービスを特定し、必要に応じてカスタムスコーピングを行うのが一般的です。CSM および／または PS Engagement Manager は、顧客がプロフェッショナルサービスのオプションを検討する際に GitLab の機能に関する具体的な質問がある場合、SA の支援を要請することがあります。たとえば、顧客が self-managed から SaaS への移行を検討している場合、self-managed GitLab 機能と SaaS プラットフォームの違い、SaaS の制約、SaaS のセキュリティに関する考慮点、消費型課金などについて質問が出る可能性があります。

複数のロールの担当者が顧客とやりとりする際は、顧客体験を意識する必要があります。これに関しては次が重要です。

- 顧客との通話に向けて、社内では事前に学んだ顧客情報を共有します。私たちは顧客状況の理解を深め、検証し、拡張したい一方で、繰り返し同じ基本的な質問を顧客に投げかけるべきではありません。
- 私たちは統一されたチームとして顧客が望むゴールに到達することを支援し、未解決の質問を文書化し、顧客の質問に対処されるよう適切なチームメンバーへフォローアップします。

ガイドラインとして、チームメンバーの責任は次のように分かれます。

| ロール | 活動内容 |
| --- | --- |
| Account exec (AE/SAE) | 顧客との関係全体を管理し、サブスクリプションおよびサービス契約を含むあらゆる契約条件の交渉を監督。Salesforce のオポチュニティをクロージングまで管理 |
| Solutions Architect | GitLab プラットフォームに関する技術的な質問（プロフェッショナルサービスのオファリングやアプローチに関連しないもの）に回答し、PS オプションをポジショニング、アクティブなライセンス商談を持つ顧客／見込み顧客に対する初期ディスカバリーを実施 |
| Customer Success Manager | アクティブなライセンス商談を持たない顧客に対して PS オプションをポジショニングし、初期ディスカバリーを実施 |
| PS Engagement Manager | PS のアプローチおよび各種サービスオプションの詳細を説明し、PS エンゲージメントに対する顧客の期待や前提条件・準備事項に関する質問に回答、最終的な作業範囲を決定し SOW を生成、SOW の承認プロセスを取りまとめ、サービスエンゲージメントをデリバリーチームに引き継ぐ |

## カスタムサービススコーピングのためのディスカバリー

カスタムサービスエンゲージメントを適切にスコーピングするには、PS Engagement Manager は顧客の現状ツール利用状況と GitLab のゴールに関する詳細を必要とします。PS スコーピングコール前に顧客ニーズについて妥当な理解を持っていれば、PS Engagement Manager が顧客のニーズに合った適切なサービスパッケージにたどり着くまでを効率的かつ生産的に進めることができます。PS Engagement Manager は具体的なシナリオに応じて必要な情報のガイダンスを提供しますが、ほとんどのカスタム PS では下記のリストが妥当な出発点となります。

- 現在 GitLab を使用しているユーザー数（該当する場合）と、GitLab を完全にロールアウトした際の計画ユーザー数
- GitLab の採用における顧客の DevOps ゴールおよび優先事項
- 顧客は GitLab で何のツールから移行しようとしていますか? SCM (GitHub、Bitbucket、Svn、Perforce など)、CI/CD (Harness、Jenkins、…)、プロジェクト管理 (Jira、…)、コンテナレジストリやパッケージレジストリ、その他?
- GitLab と統合する予定のツールは何ですか?
- 顧客の計画されたデプロイメントアーキテクチャは? SaaS か self-managed か? self-managed の場合、シングルノード Omnibus か HA 実装か、クラウド（どのクラウド?）か顧客のデータセンターか?
- GitLab CI/CD の採用を検討している場合、顧客が持つアプリケーションの種類は何ですか? クラウド環境にデプロイしますか? どのクラウドですか? アプリをコンテナでデプロイしていますか? コンテナオーケストレーションに k8s を使用していますか?
- 顧客はどのバージョンの GitLab を使用していますか、もしくはデプロイを計画していますか? また、ライセンス階層は Premium か Ultimate か?
- 顧客が GitLab self-managed から SaaS への移行を検討している場合、顧客に [Evaluate](https://gitlab.com/gitlab-org/professional-services-automation/tools/utilities/evaluate) スクリプトを実行してもらうと有益です。このツールはユーザー数とリポジトリ数のカウントを提供し、各プロジェクトでどの GitLab 機能が使用されているかを示し、データの種類や量が移行に問題となりそうなプロジェクトをフラグ付けします。

Professional Services チームは、顧客から要望される異なる種類のサービスに関するスコーピング質問のより詳細なリストを保持しています。詳細は [Professional Services EM Scoping Guidelines](/handbook/customer-success/professional-services-engineering/engagement-mgmt/scoping-information/#scoping-specific-types-of-services) ページで確認できます。
