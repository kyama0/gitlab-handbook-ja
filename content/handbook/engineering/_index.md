---
title: エンジニアリング
upstream_path: /handbook/engineering/
upstream_sha: "154fb2bd6436508aa2d90583cc235d5fe28b1705"
lastmod: 2026-05-26T15:49:36-06:00
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
---

[GitLab Product チーム](/handbook/product/)はプラットフォームの「What（顧客のニーズ）」と「Why（ビジネス戦略）」を拡張するために先を見据え、エンジニアリングはプラットフォームリリースの「How（技術的な実装）」と「When（スケジューリング）」を決定します。このページの内容は、私たちが GitLab でどのようにエンジニアリングを行っているかについて述べています。

## エンジニアリングの方向性

GitLab には 3 年戦略があり、エンジニアリング部門のすべてのメンバーがその達成に貢献するのを楽しみにしています。新しいものを生み出すにせよ、すでに存在するものを改善するにせよ、スケーラビリティ、ユーザビリティ、レジリエンス、システムアーキテクチャの向上を通じてプロダクトの方向性に影響を与えるための最高のアイデアを持ち寄れるよう、あなたに権限が与えられていると感じてほしいと考えています。そして、特定の分野で知識を広げる必要があると感じたときには、学習しスキルを向上させるためのリソースが用意されており、サポートされていることを知っておいてください。

私たちの焦点は、GitLab があらゆる能力においてエンタープライズグレードであることを確実にし、AI 機能を General Availability にうまくローンチするために必要な AI の取り組みをサポートすることです。

GitLab がエンタープライズグレードであることを確実にするには、GitLab Dedicated と Cells インフラストラクチャに関する継続的な作業を通じて、ディザスタリカバリとサポート提供を改善するために複数のチームが協力する必要があります。ここでの私たちの目標は、可用性とサービス復旧の向上です。

## エンジニアリングの文化

GitLab のエンジニアリング文化は、すべてが私たちの [GitLab バリュー](/handbook/values/)に由来するプロセス、ワークフロー、原則、優先事項を包含しています。これらすべてが、私たちのエンジニアリングのクラフトマンシップを継続的に強化し、エンジニアがエンジニアリングの卓越性を達成できるようにすると同時に、プロダクト、人々、そして会社全体に大きくポジティブな影響を与えながら成長することを可能にします。私たちのエンジニアリング文化は主に、知識の共有とコラボレーションを通じて受け継がれ、進化しています。GitLab では誰もが貢献できるため、誰もがこのプロセスの一部になれます。

### エンジニアリングの卓越性

エンジニアリングの卓越性は、ソフトウェアプロダクトを構築する中で、エンジニアリングの効率、ソフトウェアの品質を向上させ、より良い結果を提供しようとする内発的な動機として定義できます。エンジニアリングの卓越性は、強いエンジニアリング文化と、誰もが貢献できるより良いソフトウェアを構築するというミッションの組み合わせによって育まれています。

### エンジニアリングのイニシアチブ

エンジニアリングは、GitLab プロジェクトのパフォーマンス、可用性、セキュリティの主要な擁護者です。Product Management がエンジニアリング時間の 60% に優先順位を付けるため、エンジニアリング部門の全員が、私たちのプロジェクトがこれらの分野で先を行き続けることを確実にするために、Product Management の[優先順位付けプロセス](/handbook/product/product-processes/cross-functional-prioritization/)に参加すべきです。エンジニアリングは、プロダクト、基盤となるプラットフォーム、私たちが使用する基礎技術を改善するイニシアチブに時間の 40% を優先します。

40% の時間予算における作業は、チームの Engineering Manager によって調整され、優先順位が付けられるべきです。その一環として行われる Issue や MR には `Engineering Time` ラベルを使用し、エンジニアリング部門全体で作業と結果を追跡できるようにします。

- 幅広いエンジニアリングのイニシアチブへの貢献と、ワーキンググループ関連のタスクへの参加。
- サポートチームからの修正のレビュー。これらのマージリクエストには `Support Team Contributions` ラベルが付けられています。[オープンな MR をフィルタリング](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?label_name%5B%5D=Support%20Team%20Contributions)できます。
- [Issue トリアージ](/handbook/product-development/how-we-work/issue-triage/)の結果として優先度の高い Issue に取り組むこと。これはコミュニティに対する私たちのコミットメントであり、MR をレビューしたり、コミュニティから提起された欠陥に取り組んだりするためのキャパシティを確保する必要があります。
- 基盤となるインフラストラクチャを含む、機能や依存関係のパフォーマンス、安定性、スケーラビリティの改善。ここでも Product チームがこれらの Issue の定義に関与すべきですが、エンジニアリングは推奨される改善を計画、優先順位付け、調整することで主導することができます。
- 効率を高めるための私たちのツールチェーンの改善とアップグレード。
- コードベースの改善: 技術的負債の除去、古くなった依存関係の更新または置き換え、ロギングおよびモニタリング機能の強化。
- 新しい技術、機能強化、新たな可能性を徹底的に探求するための Proof-of-Concept モデルの構築。
- 内部のコミュニティ貢献という意味での、プロダクトへの改善や機能強化への取り組み。現在バックログで低い優先度が割り当てられている、すぐに着手できる項目に焦点を当てることで、社内のエンジニアリング生産性を高めるもの。

### エンジニアリングのイノベーション

エンジニアリングのイノベーションは、個人または小規模チームのコラボレーションを目的とした新しいプロセスで、エンジニアが新しいアイデアや Proof-of-Concept を探求することを奨励します。これらのプロジェクトは通常、リーンで、タイムボックス化され、イテレーティブで、あるアイデアが実用的な実験的機能やプロダクトへと進化する可能性があるかどうかを検証するように設計されています。[Innovation at GitLab Guide](./workflow/engineering-innovation.md) を参照してください。

### 技術的ロードマップ

40% の時間予算に関する上記の例のいくつかは、あなたのグループの長期的な技術的ロードマップを形成し、全体的なビジネス目標をサポートするために技術的作業をどのように優先順位付けするのが最善かを判断するのに役立ちます。上記の例に加えて:

- 次の質問を自分に問いかけてください
  - 遅延の最も頻繁な原因は何ですか？（開発中に乗り越えなければならない長年の技術的負債かもしれませんし、あなたのドメインのレビュアー不足かもしれませんし、パイプラインの所要時間のようにチームの外部にあるものかもしれません）
  - 特定の領域に起因して、一貫して類似したバグやセキュリティ問題が発生していませんか？
  - チームでどこかの領域のリファクタリングの可能性について話し合っていますか？
  - チームが特定のプロセスで苦労していますか？
  - より大きな問題を示唆する最近のインシデントがありましたか？
  - ある領域でヘルプの依頼を頻繁に受けていませんか？
  - チームが成果物のコミットメントを頻繁に達成できていませんか？何が助けになるでしょうか？
  - あなたの領域には、パフォーマンス（遅いエンドポイント、一貫性のないレスポンス、断続的なエラー）やスケーラビリティ（現状の機能や領域はスケールしない）の懸念がありますか？
  - 最も大きな不安定性はどこに見られますか？あなたの領域に関するフィードバックについて、運用やサポートと話しましたか？
  - アプリケーションやレート制限を適切な場所に設定していますか？
  - セキュリティ、是正措置、infradev の Issue を消化しきりましたか？
  - エラーバジェットはグリーンですか？
  - フィーチャーフラグはコードベースからすでに削除されましたか？
  - 十分なユニットテスト、統合テスト、E2E のカバレッジがありますか？
  - 機能に対する十分なドキュメントがありますか？
  - 機能に対する十分なテレメトリ、ロギング、モニタリングがありますか？
  - 迅速かつ容易な診断を可能にする十分なエラー処理とエラーコードがありますか？
- 次のようなデータを収集してください
  - Master:Broken の Issue
  - ~"severity::1" および ~"severity::2" のバグ
  - Missed-Slo の Issue
  - Flaky test の Issue
  - ~"type::maintenance" の Issue
- プロダクトの将来の状態について考えてください
  - 来年の今ごろ、あなたのプロダクトをどこに位置づけたいですか？
  - それを達成するための技術的要件は何ですか？
  - リサーチや POC が役立つ技術的なトピックは何ですか？
  - もしそれがもはや要因でなくなったら、達成がより容易になるものは何ですか？
  - これらの Issue に対処したら、パフォーマンスやビジネスへの影響はどうなりますか？
  - 技術的ロードマップを定期的にレビューするために、チームのプロセスをどのように進化させますか？

#### 技術的ロードマップのプロセス

Engineering Manager（EM）は、チームの技術的ロードマップのバックログを協働で開発する責任があります。すべての項目は「Technical Roadmap」ラベルを使用してエピックと Issue として文書化されるべきです。

グローバルなイニシアチブが定義され、各グループのロードマップと優先順位付けに組み込まれる必要があります（例: Vue アップグレードのためにフロントエンドキャパシティの 40% を割り当てる、特定の領域のすべての Cells Issue をマイルストーン XYZ までに完了する）。

項目の優先順位付けは次と整合させるべきです:

1. 一般的なビジネス目標
2. エンジニアリングのビジョン
3. チームのキャパシティと専門知識

計画のガイドライン:

- 通常のマイルストーン計画プロセスにおいて、技術的ロードマップの項目に全体の時間予算の 40% を割り当てます。
- 追跡と調整を容易にするため、すべての関連 Issue に「Technical roadmap」ラベルを使用します。

主要なステップ:

1. 技術的負債と改善の機会を特定し、文書化する
2. 各項目の影響と工数を評価する
3. ビジネス価値と戦略的整合性に基づいて優先順位を付ける
4. 既存のイテレーション/マイルストーン計画に統合する
5. ロードマップを定期的にレビューし、調整する

このプロセスにより、機能開発と技術的改善のバランスの取れたアプローチが実現し、エンジニアリング組織の長期的な持続可能性と効率が促進されます。

### コミュニティ貢献

私たちには、新しいステージを成熟させ、ロードマップにない顧客が望む機能を追加し、さらにはプロダクトを複数の言語に翻訳する手段として、[月間 1,000 人のコントリビューターに到達する](/handbook/company/strategy/#2-build-on-our-open-core-strength)という 3 年目標があります。

### ダイバーシティ

[多様なチームはより良いパフォーマンスを発揮します](https://www.cio.com/article/189194/5-ways-diversity-and-inclusion-help-teams-perform-better.html)。多様なチームは、より高いレベルの信頼、より良い意思決定、より大きな人材プールにつながる帰属意識を提供します。[また、事実により注目し、事実をより慎重に処理し、より革新的です](https://hbr.org/2016/11/why-diverse-teams-are-smarter)。グローバルに採用し、エンジニアリング部門における女性や過小評価グループ（URG）の数を増やすことで、私たちは全員が最高の自分を仕事に持ち込めるよう手助けしています。

### チームの成長

戦略的な採用は最優先事項であり、私たちのプロダクトに情熱を持ち、それを市場で最高の DevSecOps ツールにするスキルを持つ人々を引き続き採用できることを楽しみにしています。現在の重点分野には、オファーから開始日までの時間の短縮と、多様なチームの採用（[上記](#diversity)を参照）が含まれます。また、構造化面接、行動面接、状況面接といった業界標準のアプローチを導入し、すべての職種に最適な候補者を特定するのに役立つ一貫した面接プロセスを確保しています。マネージャーが採用に費やす時間と、現在のチームメンバーへの投資に費やす時間のバランスを取る中で、パートナーとなるリクルーティング組織がいることを嬉しく思っています。

### 深さと安定性を通じた顧客フォーカスの拡大

予想どおり、私たちの焦点の大部分はプロダクトの改善にあります。

**エンタープライズ顧客**向けには、顧客が SaaS プラットフォームに対して当然求めるレベルのセキュリティと信頼性を満たすようプロダクトを洗練させています _(SaaS Reliability)_。また、顧客が自身の DevOps トランスフォーメーションに関連する機能を発見できるよう、より堅牢な利用状況メトリクスを提供し _(Usage Reporting)_、Sales や Support に問い合わせる時間を費やすことなくライセンスを購入・管理できる機能を提供しています _(E-Commerce and Cloud Licensing)_。最後に、エンタープライズ顧客からのリクエストに応えて、Suggested Reviewers、Work Items によるより良いポートフォリオ管理、ユーザーの受動的なアクションへの可視性を高める Audit Events をサポートする機能を追加しています。

**無料ユーザー**向けには、オープンコアの提供をより効率的にし、学生、スタートアップ、教育機関、オープンソースプロジェクト、GitLab コントリビューター、非営利団体を引き続きサポートし、還元できるようにしています。

**連邦機関**向けには、SaaS 提供に求められるセキュリティ標準への信頼を強化するために FedRAMP 認証を取得しています。これは、米国連邦機関が私たちのプロダクトを使用するための必須の前提条件です。

**ホスト型顧客**向けには、Workspace イニシアチブを通じて Self-Managed と GitLab Hosted 環境間の機能パリティをサポートしています。また、クラウドの柔軟性とシングルテナント環境のセキュリティとパフォーマンスの両方を求める顧客向けに GitLab Dedicated をローンチしています。

**CI/CD** を使用する顧客向けには、利用可能な Runner のタイプを macOS、Linux/Docker、Windows を含むよう拡大し、ビルドエージェントをオートスケールしています。

### 休暇の取得

{{% note %}}
このプロセスは、隣接する祝日（週末の日を除く）を含めて 5 日以上連続する PTO に対して想定されています。5 日未満の連続した PTO（5 日未満の連続した PTO ブロックが複数あり、その間に数日の営業日がある場合を含む）については、カバレッジ Issue は必須ではありませんが、長さを問わず PTO に対してカバレッジ Issue を提出することはできます。特に、チームの継続性と個人の柔軟性のバランスを取るのに役立つ場合はそうです。
{{% /note %}}

事業継続性を確保し、コミットメントを果たすため、エンジニアリング部門は PTO カバレッジ Issue プロセスを採用しています。このようなプロセスは GitLab ですでに正式化されており（例: [PM Coverage Issue](/handbook/product/product-management/product-manager-role/#creating-a-pm-coverage-issue)）、エンジニアリング内の一部のチームは Management+ レベルでこれを定期的に実践してきました。これにより、チームの残りのメンバーにネガティブな影響を与えることなく、休暇を通じてチームメンバーのウェルビーイングを引き続きサポートできます。

PTO カバレッジ Issue は、該当する職務レベルでは必須です。それより低い職務レベル以下では、含める項目が最小限であっても（すべてのレベルで）PTO カバレッジ Issue を作成するプロセスを経ることに価値があるため、推奨されます。これにより、自分が抱えている作業と、PTO がそれらの項目にどのような影響を与えるかを考えざるを得なくなるからです。したがって、結果として作業が待機状態になるにせよ、代理の DRI が指定されるにせよ、その決定が明示的になり、文書化されます。

マイルストーンの計画が完了した後（[**マイルストーン開始の 5 日前の月曜日**](/handbook/engineering/workflow/#product-development-timeline)を参照）、隣接する祝日（週末の日を除く）を含めて 5 日を超える連続した PTO はリクエストできません。これは、そのマイルストーンの計画を妨げないためです。これには例外がありますが、すべてマネージャーと話し合う必要があります。例としては次が含まれます:

- 緊急のシナリオ
- チーム/個人がマイルストーンの早い段階で目標を達成した場合（[私たちは活動ではなく影響を測定します](/handbook/values/#measure-impact-not-activity)）
- チームメンバーがこの長さの PTO を取得する強いニーズがある場合

これらの Issue は、チームがコミットした作業を利用可能な人員で達成できるか、あるいはそれらのコミットメントを達成するための人員が不足する場合に、顧客のために結果を達成するために何ができるかをチームメンバーと検討できるよう、チームがマイルストーンを計画する際の情報を提供するのに役立ちます。

以下のプロセスは、チームメンバーのマネージャーとの調整を明示的にすることで、[フレキシブル PTO ポリシー](/handbook/people-group/time-off-and-absence/time-off-types/)を明確にし、補足するのに役立ちます。

#### 1. エンジニアリングのカバレッジ Issue を作成する

引き継ぎの責任を定義するために、[この Issue テンプレート](https://gitlab.com/gitlab-com/engineering-division/pto-coverage/-/issues/new)を使用すべきです。長期休暇の場合、あなたが不在の間に意思決定ができる 1 人以上の Directly Responsible Individual（DRI）を見つけることが重要です。これは、あなたのマネージャー、別のエンジニア、またはチームの Product Manager かもしれません。カバレッジ Issue には、あなたの不在中に DRI が適切な決定を下すために必要なすべての情報が含まれているべきなので、必要なだけ詳細を含めるようにしてください。カバレッジ Issue は、作業への影響の見積もり、特定された軽減策、カバレッジの代替案を明示すべきです。

カバレッジ Issue に色付けするために追加のコンテキストを共有する必要がある場合は、さらなる詳細をカバーするための専用の引き継ぎミーティングを検討できます。

カバレッジタスクの割り当てのために部門横断的なチームメイトのキャパシティを検討する際は、マネージャーや他のステークホルダーと連携することをおすすめします。たとえば、PM、EM、PD は顧客やユーザーを含むプロダクト領域に関する知識を共有しているため互いをカバーし合うのが最適ですが、PM のチームメイトはエンジニアリング固有の責任を引き受けるバンド幅や専門知識を持っている場合もあれば、持っていない場合もあります。あるいは、そのエンジニアのマネージャーや同じステージの別のエンジニアがカバレッジを支援する方が良い場合もあります。チームやマネージャーをまたいで必要な会話を行う計画を立ててください。

#### 2. エンジニアリングのカバレッジ Issue をマネージャーと共有する

エンジニアリングのカバレッジ Issue を提出したら、マネージャーがレビューして承認できるよう、マイルストーン計画の前にこれをマネージャーと共有してください。どれだけ前もって通知が必要かについては、[PTO ポリシーの最新ガイダンス](/handbook/people-group/time-off-and-absence/time-off-types/)を確認してください。

計画している PTO によって新しいコミットメントが影響を受けないか検討してください。チームメンバーが何かで遅れをとっている場合、コミットメントの成功を確実にするためのカバレッジ計画が整っていることを確認する必要があります。

#### 3. マネージャーがカバレッジ Issue をレビューする

チームメンバーがカバレッジ Issue をマネージャーと共有したら、マネージャーはカバレッジ Issue をレビューし、必要に応じてステークホルダーや影響を受けるプロジェクトの DRI と前提条件を検証します。

マネージャーは承認の決定を下すか、別の取り決めや他のコンティンジェンシープランについて話し合います。マネージャーがカバレッジ Issue のチェックボックスにチェックを入れて休暇を承認したら、休暇を Workday に入力します。

#### 4. 休暇を伝える

チームメンバーのカバレッジ Issue が承認された後、チームメンバーは[休暇を伝え](/handbook/people-group/time-off-and-absence/time-off-types/)、カバレッジ Issue へのリンクを含めて PTO を Deel/Workday に入力します。チームメンバーは、マイルストーン計画の前に、Slack チャンネルや GitLab ステータスなどを通じて、関連する同僚とカバレッジ Issue を共有します。

#### 5. 休暇を取る

接続を切り、必要な休暇を取ってください！

#### 6. 休暇からの復帰

休暇からの復帰は、圧倒され、気が重くなることがあります。あなたの不在中に何が変わったか、現在の優先事項が何かを理解するために、DRI と連携すべきです。また、キャッチアップ中であるためレスポンスタイムが遅くなる可能性があることを透明性をもって伝えてください。[休暇後に仕事に復帰する方法](/handbook/people-group/time-off-and-absence/time-off-types/)に関する追加のヒントもいくつかあります。

## エンジニアリングの部門

エンジニアリング部門内には 5 つの部門があります:

- [DevOps Engineering Department](/handbook/engineering/devops/)
- [AI Engineering Department](/handbook/engineering/ai/)
- [Sec Department](/handbook/engineering/development/sec/)
- [Infrastructure Platforms](/handbook/engineering/infrastructure-platforms/)
- [Support Engineering Department](/handbook/support/)

## その他の関連ページ

- [CTO Leadership Team](/handbook/engineering/cto-leadership-team/)
- [Database Engineering](/handbook/engineering/development/database/)
- [Development Principles](/handbook/engineering/development/principles/)
- [Engineering Metrics](/handbook/product/groups/product-analysis/engineering/dashboards/)
- [Engineering READMEs](/handbook/engineering/readmes/)
- [Frequently Used Projects](/handbook/engineering/projects/)
- [GitLab Innovation Program](/handbook/legal/patent-program/)（GitLab Legal Team が管理）
- [Mentorship](/handbook/people-group/learning-and-development/mentor/)
- [Pajamas Design System](/handbook/product/ux/pajamas-design-system/)
- [R&D Tax Credit Applications](/handbook/engineering/tax-credits)

### ワークフロー

- [Engineering Workflow](/handbook/engineering/workflow/)
  - [Code Review](/handbook/engineering/workflow/code-review/)
  - [Security Issues](/handbook/engineering/workflow/#security-issues)
  - [Architecture Design](/handbook/engineering/architecture/workflow/)
  - [Root Cause Analysis](/handbook/engineering/workflow/root-cause-analysis/)
  - [Strategic Priority Codes](/handbook/engineering/workflow/strategic-priority-codes/)
  - [Automation](/handbook/engineering/workflow/automation/)
  - [GitLab Repositories](/handbook/engineering/workflow/gitlab-repositories/)
  - [Hiring](/handbook/engineering/workflow/hiring/)
  - [Demos](/handbook/engineering/workflow/demos/)
  - [Cross-Functional Prioritization](/handbook/engineering/workflow/cross-functional-prioritization/)
  - [Developer Onboarding](/handbook/engineering/workflow/developer-onboarding/)
  - [Engineering Communication](/handbook/engineering/workflow/engineering-comms/)
  - [Development Processes](/handbook/engineering/workflow/development-processes/)
  - [Development Onboarding](/handbook/engineering/workflow/development-onboarding/)
- [Issue Triage Policies](/handbook/product-development/how-we-work/issue-triage/)
- [Contributing to Go projects](https://docs.gitlab.com/ee/development/go_guide/index.html)
- [Wider Community Merge Request Triage Policies](/handbook/engineering/infrastructure-platforms/developer-experience/merge-request-triage/)
- [Unplanned Critical Patch releases](/handbook/engineering/releases/patch-releases/#patch-release-types)
- [Incident Management](/handbook/engineering/infrastructure-platforms/incident-management/)

### 本番環境における GitLab

- [Workflow Diagram](/handbook/engineering/workflow/related-workflows/)
- [Error Budgets](/handbook/engineering/error-budgets/)
- [Performance of GitLab](/handbook/engineering/performance/)
- [Monitoring of GitLab.com](/handbook/engineering/monitoring/)
- [Production Readiness Guide](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/master/.gitlab/issue_templates/production_readiness.md)

### ピープルマネジメント

- [Engineering Career Development](/handbook/engineering/careers/)
- [Engineering Career Mobility Principles](/handbook/engineering/careers/#mobility-principles)
- [Emerging Talent @ GitLab](/handbook/hiring/)
- [Engineering Management](/handbook/engineering/careers/management/)

### 部門横断的な優先順位付け

詳細については、[Cross-Functional Prioritization ページ](/handbook/engineering/workflow/cross-functional-prioritization)を参照してください。

### SaaS Availability の週次スタンドアップ

高可用性を維持するため、エンジニアリングは次のことを行う週次 SaaS Availability スタンドアップを実施しています:

- 高重大度（S1/S2）の公開向けインシデントをレビューする
- 重要な SaaS メトリクスをレビューする
- 是正措置の進捗を追跡する
- [Feature Change Lock](#feature-change-locks) の進捗を追跡する

病院で行われる回診と同様に、このミーティングはエンジニアリングリーダーシップにすべての GitLab プラットフォームの信頼性のレビューを提供し、部門横断的なディスカッションと意思決定の調整を可能にすることを目的としています。

- [SaaS Availability Meeting Agenda](https://docs.google.com/document/d/1vCPb5VsF0nldiVVAfQXWegeNrvejvxn07TxorTn8E-Y/edit?usp=sharing)

毎週、エンジニアリング部門のチームがインシデントと主要メトリクスについて報告します:

1. インシデントレビュー
   - Page Volume - 対応チームへのストレスを示す
   - 高重大度インシデント（S1/S2）- すべての GitLab プラットフォームが直面する課題への可視性を高める
1. [Capacity Planning](/handbook/engineering/infrastructure-platforms/capacity-planning/)
   - 各 GitLab プラットフォームからの P1 および P2 の Issue とその他のハイライトが提起される。
1. アクションの概要
   - 各部門からの期限超過の S1/S2 [infradev issue](/handbook/engineering/workflow/#infradev)
    [アジェンダ](https://docs.google.com/document/d/164hNObllaLWosG110-A0UouYlcaqOxbPpHATFD38_Gw/edit#heading=h.59wtcja0o8t7)に次のグラフのスクリーンショットを含める。
   - [Feature Change Lock](#feature-change-locks) - FCL 中の各チームがアップデートを提供する
1. ディスカッションとディープダイブ - 特定の部門横断的なディスカッション

### Feature Change Lock

Feature Change Lock（FCL）は、GitLab プラットフォームの信頼性と可用性を改善するためのプロセスです。FCL は、License App、Customers Dot、Versions を含む任意の GitLab プラットフォーム（GitLab.com、Self-Managed、Dedicated、Dedicated for Government）におけるすべての S1 および S2 の重大度のインシデントに対して発動されます。

すべての例外は VP of Engineering によって承認される必要があります。FCL の例外の理由には次が含まれる場合があります:

- インシデントに公開向けの影響がなかった
- インシデントがエンジニアリング部門の変更によって引き起こされたものではなかった

関与する[チーム](/handbook/company/structure/#organizational-structure)は、サービスまたは機能のオーナーです。チームは FCL の調整と完了の両方に責任を持ちます。チームのマネージャーは次の責任を持ちます:

- FCL の下で作業するエンジニアのグループを編成する。デフォルトではオーナーチームになりますが、全員分の作業がない場合は縮小されたグループになることもあります。
- FCL を計画し、実行する。
- 自分のマネージャー（例: Senior Manager / Director）と Product のカウンターパートに、チームがキャパシティプランニングに影響を与える可能性のある FCL に注力することを伝える。
- [SaaS Health Review](/handbook/engineering/infrastructure-platforms/saas-health-review) でアップデートを提供する。

アクティブな[borrow](/handbook/product/product-processes/pm-procedures/#borrow)に関与している直属の部下は、変更の作成またはレビューに関与していた場合に含めるべきです。

その目的は、私たちのチーム間にオーナーシップと当事者意識を育むことですが、これは私たちの非難しない文化に異議を唱えるものであってはなりません。

#### タイムライン

FCL の期待値と緊急性を設定するため、タイムラインに関する大まかなガイダンスをここで提供します。私たちは緊急に動くことと、信頼性を改善するための思慮深い重要な作業を行うことのバランスを取りたいと考えています。時間が変動するにつれて、それに応じて調整できることに注意してください。FCL の DRI は可能な限りタイムラインを前倒しすべきです。

以下の箇条書きリストは、インシデントから FCL の完了までの推奨タイムラインを提供します。ここでの「営業日 x」は、インシデント後の x 営業日目を指します。

- Day 0: インシデント
- 営業日 1: FCL Issue をオープンし、計画を開始する。FCL が必要でないと考えられる場合は VP of Engineering に承認を依頼する。
- 営業日 2-3: 計画の時間
- 営業日 2-9: 計画した作業を完了する
- 営業日 10-11: クロージングセレモニー、レトロスペクティブ、SaaS Health Review への報告

#### 活動

FCL 中は、影響を受けるサービスまたは機能カテゴリの進行中の機能作業がすべて一時停止されます。FCL に関与するチームメンバーは、[信頼性の作業](#scope-of-work-during-fcl)にのみ専念します。この期間中もメンテナーの職務は引き続き実行でき、他のチームを前進させ続けるべきです。セキュリティやデータ損失防止のように明示的に優先度の高い作業も継続すべきです。

FCL には通常、機能カテゴリやサービスを所有するチームが含まれますが、その機能やサービスの開発に貢献する他のチームメンバーが含まれることもあります。FCL のセットアップの一環として、チームは次を行うべきです:

1. FCL の対象となる、チームが責任を負うすべてのサービスと機能カテゴリを特定する
2. それらのサービスや機能カテゴリに変更を加える可能性のある、密結合または依存関係にあるサービスとチームを特定する
3. それらのチームに FCL について通知し、変更が[スコープ](#determining-fcl-scope)内で適切であることを確認するために調整する
4. チームのサービスに[Change Lock](https://gitlab.com/gitlab-com/gl-infra/change-lock/-/blob/master/README.md)を適用して、サービスの意図しないデプロイを防ぐことを検討する。

FCL 中のチームが所有するサービスや機能カテゴリに変更を加えるチームは、FCL チームと調整すべきであり、可視性のために FCL Issue に含めるべきです。[Feature Change Locks プロジェクト](https://gitlab.com/gitlab-com/feature-change-locks/-/work_items)はすべてのオープンな FCL を追跡します。

チームは次を行う必要があります:

- メンバーを含む `#fcl-incident-[number]` という名前のパブリック Slack チャンネルを作成する
  - チームのマネージャー
  - 作成者とそのチームメイト
  - Product Manager、ステージの Product リーダー、セクションの Product リーダー
  - すべてのレビュアー
  - すべてのメンテナー
  - マネージャーから VP までの指揮系統（Sr Manager、Sr/Director、VP など）
- [FCL プロジェクト](https://gitlab.com/gitlab-com/feature-change-locks/)で、説明に以下の情報を含む [FCL Issue](https://gitlab.com/gitlab-com/feature-change-locks/-/issues/new?issuable_template=feature-change-lock) を作成する:
  - Issue に `[Group Name] FCL for Incident(s) ####` という名前を付ける
  - インシデント、元の変更、Slack チャンネルへのリンク
  - FCL のタイムライン
  - 作業項目のリスト
- インシデントが解決された後、最優先で書面によるインシデントレビューを完了する。インシデントレビューには、Issue テンプレートのインシデントレビューセクションのすべてのフィールドの記入が含まれている必要があります。リンクされた機密 Issue が必要な場合を除き、インシデント Issue がこの情報の唯一の信頼できる情報源となるべきです。これを完了することで、問題空間に対する共通理解が生まれ、完了すべき作業に対する共有された方向性が設定されるはずです。
- すべての手順が守られたかだけでなく、手順の改善によってどのようにそれを防げたかを確認する
- すべての Issue、エピック、関与した MR を参照する作業計画を作成し、FCL の作業スコープを特定するために使用する必要があります。作業計画自体は Issue またはエピックであるべきです。
- 毎日 - テンプレートを使用して FCL の Issue またはエピックにアップデートコメントを追加する:
  - エグゼクティブレベルの要約
    - 目標終了日
    - ハイライト/ローライト
- [SaaS Availability の週次スタンドアップ](/handbook/engineering/#saas-availability-weekly-standup)にアジェンダ項目を追加し、FCL がオープンのままである毎週、ステータスを要約する。
- FCL の完了時に、Issue や Slack チャンネルで非同期の `closing ceremony`（クロージングセレモニー）を開催し、レトロスペクティブをレビューして学びを祝う。すべての学びを Issue に文書化する。
  - すべての FCL ステークホルダーと参加者は非同期で参加するものとします。Sr. EM や Director を含む、FCL に参加するグループのマネージャーが招待されるべきです。
  - 成果には、該当する場合の[ハンドブック](/handbook/)と [GitLab Docs](https://docs.gitlab.com/ee/) の更新が含まれます。

##### FCL のスコープの決定

**スコープに含まれるもの**

インシデントの原因または寄与因子として特定されたサービスまたは機能カテゴリを所有する**チーム**が FCL に入ります。チームは、責任を負うサービスと機能カテゴリにおける進行中のすべての機能作業を一時停止します。

共有サービスインフラストラクチャを維持するチーム（例: Sidekiq インフラストラクチャを維持するチーム）の場合、FCL に入ると、そのインフラストラクチャに変更を加えられなくなります。他のチームは引き続きサービスを通常どおり使用できます。たとえば、新しい Sidekiq ジョブを追加したり、データベースマイグレーションを実行したりできます。FCL のセットアップの一環として、チームはインフラストラクチャに変更を加える可能性のある他のチームに FCL について通知すべきです

**副作用 vs 関連する原因**

FCL のスコープを決定する際は、副作用と関連する原因を区別することが重要です:

**副作用（チームは FCL のスコープに含まれない）:**

これらは、ある機能やサービスへの変更が、別の機能やサービスに予期せず影響を与えるインシデントです:

- _例_: Topology Service の設定変更により Repository tree ページで 404 エラーが発生したが、リポジトリのコード自体は 404 の原因に寄与していなかった。リポジトリチームのコードは寄与因子ではなかったため、FCL の対象にはなりません。両チームとも、インシデントを引き起こした依存関係や結合をよりよく理解し改善するために、インシデント後のレビューに貢献すべきです。

**関連する原因（チームは FCL のスコープに含まれる）:**

これらは、外部の変更が発生したが、チームのコード、設定、サービスがその影響を増幅させたり寄与したりするインシデントです:

- _例_: 共有サービスの設定変更が発生し、機能カテゴリ X の Sidekiq ジョブが遅いクエリのために影響を増幅させ、インシデントに寄与した。機能カテゴリ X を所有するチームは、そのコードがインシデントの影響に寄与したため、FCL の対象になります。

重要な区別は、チームのコード、サービス、設定が、外部の変更を受動的に受け取っただけにとどまらず、能動的にインシデントに寄与したかどうかです。

##### FCL 中の作業スコープ

インシデントレビューが完了した後、チームの焦点は、類似の問題の再発を防ぎ、検出を改善することにあります。これには次が含まれますが、これに限定されません:

- 短期的にインシデントの再発を防ぐための即時の是正措置に対処する
- インシデントの検出時間を短縮する変更を導入する（収集するメトリクス、サービスレベルモニタリング、どのユーザーが影響を受けるかを改善する）
- 軽減時間を短縮する変更を導入する（フィーチャーフラグによるロールアウトプロセスとクリーンなロールバックを改善する）
- インシデントが本番環境以外の環境で再現可能であることを確認する（ステージングで問題を検出し、エンドツーエンドの統合テストカバレッジを増やす）
- 問題を検出するために開発のテストカバレッジを改善する（ユニットテストを強化し、レビュー中に問題を検出しやすくする）
- 一般的なプロセス改善や他のチームへの依頼に関する Issue を作成する

この作業の例には次が含まれますが、これに限定されません:

- インシデントの原因または寄与因子として特定された、インシデントレビューの項目を修正する。
- 可観測性を改善する
- ユニットテストのカバレッジを改善する
- 統合テストを追加する
- サービスレベルモニタリングを改善する
- 本番前環境の対称性を改善する
- [GitLab Performance Tool](https://gitlab.com/gitlab-org/quality/performance) を改善する
- テストや環境にモックデータを追加する
- プロセス改善を行う
- さらなる信頼性の作業でバックログを満たす
- セキュリティの作業
- 他のチームやカウンターパートとのコミュニケーションとワークフローを改善する

この期間中に開始された特定のチームのための作業は、FCL の期間より長くかかっても完了する必要があります。インシデントに直接関連する作業は、FCL が終了しても開始し完了すべきです。FCL のために一時停止された作業は、FCL 終了後に再開する優先事項であるべきです。他のチームやグローバルレベルで作成された項目は、FCL の終了に影響しません。

## エンジニアリングのパフォーマンス指標プロセス

[Product Analytics チーム](/handbook/product/groups/product-analysis/engineering/metrics/)は、エンジニアリングのパフォーマンス指標を維持する責任があります。KPI / RPI に関する作業は、[Product Analytics task intake tracker](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=PI%20Chart%20Help) を使用して追跡されます。

## 手動検証

私たちは、コードが期待どおりに動作することを手動で検証します。自動テストカバレッジは不可欠ですが、手動検証は、機能が意図したとおりに動作し、バグが修正されているという、より高いレベルの確信を提供します。

私たちは、Issue が `workflow::verification` の状態にあるときに手動で検証します。一般的に、何かを手動で検証した後は、関連する Issue をクローズできます。この Issue の状態について詳しくは、[Product Development Flow](/handbook/product-development/how-we-work/product-development-flow/) を参照してください。

私たちは可能な限りステージング環境で手動検証を行います。特定のケースでは、本番環境で手動検証する必要があるかもしれません。

GitLab Ultimate 向けに構築された機能をテストする必要がある場合は、[#development](https://gitlab.slack.com/archives/C02PF508L) Slack チャンネルで依頼することで、本番環境とステージング環境の [issue-reproduce](https://gitlab.com/issue-reproduce) グループに追加してもらえます。これらのグループは Ultimate プランです。

## 重要な顧客エスカレーション

既存の[重要な顧客エスカレーション](/handbook/customer-success/csm/escalations)がバグ修正や開発作業の即時のスケジューリングを必要とする場合、私たちは以下のプロセスに従います。

### 重要なエスカレーションの要件

- 顧客が[重要なエスカレーション](/handbook/customer-success/csm/escalations/#escalation-for-non-professional-services-projects)の状態にある
- エスカレーションされた Issue が、Customer Success と Support Engineering のリーダーシップによって判断される、顧客にとって重大なビジネス影響を持つ
  - スケジューリングを迅速化できないと、GitLab に連鎖的なビジネス影響を与える可能性がある
- スケジューリングを迅速化するには、Customer Success の VP と Director of Support Engineering の承認が必要
  - Customer Success: VP, Customer Success Management の承認 - [Sherrod Patching](https://gitlab.com/spatching)
  - Support Engineering: VP, Support の承認 - [Johnny Scarborough](https://gitlab.com/jscarborough)

### プロセス

- Issue の優先度は、重大度にかかわらず `~"priority::1"` に設定される
- Issue に `~"critical-customer-escalation"` ラベルが適用される
- Issue は 1 営業日以内にスケジュールされる
  - features タイプの Issue の場合、Product DRI の承認が必要です。
- DRI またはその委任者が、エスカレーションされた顧客の Slack チャンネルで毎日のプロセスアップデートを提供する

### DRI

- Issue が bug タイプの場合、DRI は Director of Development
- Issue が feature タイプの場合、DRI は Director of Product
- Issue がインフラストラクチャの作業を必要とする場合、DRI は Infrastructure の Engineering Manager

DRI は、[customer critical merge requests](https://docs.gitlab.com/ee/development/code_review.html#customer-critical-merge-requests) プロセスを使用して、コードレビューとマージを迅速化できます。

## priority::1/severity::1 の Issue でのエンジニアのペアリング

ほとんどの場合、1 人のエンジニアとメンテナーのレビューで priority::1/severity::1 の Issue を処理するのに十分です。しかし、一部の Issue は非常に難しいか複雑です。エンジニアはこれらの Issue を高い緊急性をもって扱うべきです。複雑な priority::1/severity::1 の Issue の場合、複雑さのレベルに基づいて複数のエンジニアを割り当てるべきです。Issue の説明には、チームメンバーとその責任を含めるべきです。

| チームメンバー | 責任 |
| ----------- | -------------- |
| `Team Member 1` | `Reproduce the Problem` |
| `Team Member 2` | `Audit Code Base for other places where this may occur` |

3 人、5 人、X 人が必要なケースがある場合、Engineering Manager は計画を迅速に実行する自由を感じるべきです。

この手順に従うことで:

- priority::1/severity::1 の Issue を解決するのにかかる時間が短縮される
- OOO や 1 日の業務終了時に Issue をスムーズに引き継げる
- 問題で行き詰まったエンジニアにサポートを提供できる
- 高い緊急性のあるトピックや、セキュリティ関連の修正を確保する際に、別の視点を提供できる

## エンジニアリングの社内ハンドブック

一部のエンジニアリングのハンドブックトピックは[社内のみ](/handbook/communication/confidentiality-levels/#internal)です。これらのトピックは、[社内ハンドブックのエンジニアリングセクション](https://internal.gitlab.com/handbook/engineering/)で GitLab チームメンバーが閲覧できます。
