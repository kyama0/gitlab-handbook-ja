---
title: Proof of Value (POV)
description: Proof of Value (POV)
upstream_path: /handbook/solutions-architects/playbooks/pov/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
---

## Proof of Value (POV)

Proof of Value (POV) は、見極めの済んだ見込み顧客／顧客と GitLab との間で行う構造化された協働的なエンゲージメントであり、GitLab が顧客特有の技術的課題とビジネス目標に対応する最適なソリューションであることを示すことで、確固たる技術的な勝利を達成することを目的としています。POV は次の 5 つの重要なアウトカムを検証します。

- Technical Validation - GitLab の機能が必要な機能および運用ワークフローを満たす、もしくは上回ることを実証可能な形で示す
- Preferred Solution - GitLab が代替案と比較して明確なリーダーまたは最も有利な技術選択肢として認識される
- Risk Mitigation - すべての技術的懸念、反論、実装リスクが、明確な軽減計画とともに適切に解消される
- Confidence Building - 顧客の技術ステークホルダーが、好ましい技術ソリューションとしての GitLab に高い信頼を持つようになる
- Champion Development - 主要な技術ステークホルダーが GitLab の社内の支持者となる

POV は、技術的勝利の検証への明確な道筋を持たない他の評価とは異なり、文書化された技術的勝利を達成するための主要なプロセスです。さらに、次の特性があります。

- GitLab の SA による積極的なガイダンスと顧客技術チームのコラボレーションが必要
- 定義されたビジネスアウトカムと成功基準を持つ見極め済みの商談を対象とする
- 商業的な締結または技術的な実装に向けた明確な次のステップにつながる

他の活動との差異:

- 4-Tier Technical Evaluation Framework を参照してください

### POV のガイドラインと要件

- POV の典型的な期間は 1〜8 週間で、複雑さやエンゲージメントのスタイルによって決まります。
- POV プランから開発される GitLab Customer Success の[コラボレーションプロジェクト](https://gitlab.com/gitlab-com/account-management/templates/poc-plan)が、POV 管理の既定の方法です。プロジェクトテンプレートは GitLab チームメンバーのみアクセス可能ですが、コラボレーションプロジェクトを作成すると、顧客にそのプロジェクトへのアクセスが付与されます。コラボレーションプロジェクトを利用する際は、プロジェクト全体を適切に設定するために README.md の指示に厳密に従ってください。[POV テンプレートプロジェクト](https://gitlab.com/gitlab-com/account-management/templates/poc-plan)には、POV のスコープ、基準、活動、進捗を文書化するために使用できる [POV プランテンプレート付きの wiki ページ](https://gitlab.com/gitlab-com/account-management/templates/poc-plan/-/wikis/customer/pov-template)も含まれています。
- GitLab のソリューションアーキテクトは、商談アウトカムを成功させるための最適な集中力を提供できるよう、自身が同時に関与する POV の数を制限すべきです。SA はセールスチームおよびマネージャと協力し、ワークロード、商談の見極め、地域またはセグメント戦略に基づいて、POV を含むすべての SA 活動の優先順位を付けてください。
- POV は開始前に完全に見極めを完了している必要があります
- POV は Salesforce で追跡されている必要があります
- POV は顧客特有のインフラ向けにスケールしたアーキテクチャを実装するために使ってはいけません
- POV はソリューションのフルもしくは本番品質の実装ではありません
- POV は既存ライセンス向けに機能をテストするための自走式の技術トライアルではありません（拡張採用のための CSM のケイデンスでカバーできます）
- POV は顧客側の個別チームメンバーが自己学習や認定を行うものではありません（PS 教育サービスを推奨できます）
- POV は GitLab の自分のペースで行う探索ではありません（CSM のケイデンスでカバーできます）
- POV は新規ロゴ見込み顧客による GitLab の非公式なレビューではありません

### POV の見極め {#pov-qualification}

- 新規ロゴ、もしくは既存顧客の Ultimate アップティアにおける純 ARR 100K 超または LAM が大きい商談に紐づくこと

- 定義されたビジネスアウトカムと GitLab の価値を伴いながら、見込み顧客／顧客とともにスコープのあるハンズオン技術評価を実行するため、GitLab SA によってガイドされること

- 見込み顧客／顧客が、評価実施、結果の議論／評価とアウトカムや価値へのマッピングのために利用可能な技術およびビジネスリソースを特定し提供していること

- POV のスコープと併せて主要なビジネスドライバーが特定されており、POV を実行し続いて取引プロセスの次のステップを推進するための成功基準が定義されていること

- チャンピオンと Economic Buyer が特定されており、成功基準について両者が合意していること（例えば "サインオフ"）。エグゼクティブ間のコネクションとスポンサーシップを促進すること

- Salesforce の商談に対し、Command Plan が以下のフィールドを含めて記入されていること:
   Why Now
   Why do anything at all
   Metrics
   Decision Process - stakeholders
   Pain
   Access to economic buyer
   Impact of not solving that(Compelling event with business needs)

- 顧客の主要なビジネス価値が、GitLab のソリューションのいずれか（DevSecOps、Software Compliance、Automated Software Delivery、これらを総合した DevOps Platform）にマッピングされていること。

### POV のスコープと受け入れ基準

SA は SAE および AE と協力し、ビジネス価値および GitLab ソリューションとの整合を取ったうえで、顧客と POV のスコープを定義できます。各ソリューションについて、典型的なスコープと受け入れ基準を参考までに以下に示しますが、チームはエンゲージメントごとにスコープ、期間、実行内容と受け入れ基準を定義してください。

- [DevSecOps](/handbook/solutions-architects/playbooks/pov/devsecops/)
- [Software Compliance](/handbook/solutions-architects/playbooks/pov/compliance/)
- [Automated Software Delivery](/handbook/solutions-architects/playbooks/pov/automation/)
- [Artificial Intelligence](/handbook/solutions-architects/playbooks/pov/ai/)
- および総合的に、DevOps [Platform](/handbook/solutions-architects/playbooks/pov/platform/)

### Salesforce での POV のトラッキング {#tracking-a-pov-in-salesforce}

#### Salesforce オブジェクト

POV は種類に関わらず、ソリューションアーキテクトによって検証される必要があります。したがって、商談の `SA Validated Tech Evaluation Start Date` フィールドには POV 開始予定日を入力する必要があります。同様に、`SA Validated Tech Evalulation End Date` フィールドは POV 完了時に入力する必要があります。

Salesforce で POV を正しく追跡するため、Strategic Account Executive は商談を Stage 3 にポジショニングする必要があります。見込み顧客または顧客が POV を進める意思を示した時点で、ソリューションアーキテクトが SFDC 内に POV オブジェクトを作成します。

POV を追跡するには、Salesforce の上部メニューバーから _Proof of Values_ タブをクリックします。_New_ ボタンを使って新規 POV を作成します。あるいは、ソリューションアーキテクトが該当する商談を選択し、_Proof of Values_ というラベルの付いた関連リストまでスクロールし、"New Proof of Value" ボタンをクリックすることもできます。これにより POV はその商談に自動的に紐づけられますが、その他のフィールドはすべて手動で入力する必要があります。

少なくとも以下のフィールドを入力してください。

- **POV Owner** - これは Strategic Account Executive です
- **Customer Success Manager** - POV 中に紹介される CSM です
- **Solutions Architect** - POV の実行を担当する SA です
- **Proof of Value Name** - 通常、商談名と同じ名前にします
- **Account** - 会社名です
- **Opportunity** - 関連する商談名です（その商談は Stage 3 でなければなりません）
- **POV Start Date** - POV の開始予定日です
- **POV Close Date** - POV の終了予定日です
- **POV Type** - 実行される POV のスタイルです（非推奨）

POV が開始したら、ソリューションアーキテクトは **Status** フィールドを _New_ から _In Progress_ に変更します。POV が完了したら、ソリューションアーキテクトは **Status** を _Closed_ に変更し、**Result** を _Successful_ または _Unsuccessful_ として識別します。成功または失敗の理由を裏付けるフリーフォームのメモを追加してください。

#### セールスとソリューションアーキテクチャリーダーの承認プロセス

商談が [POV としてしっかりと見極められている](#pov-qualification)場合、Enterprise の商談勝率は 90% を超えます。一方、その他の技術評価（例: 技術評価、トライアル、Proof of Concept）の勝率は約 30% です。

現在、現場では多数の技術評価が Proof of Value として記録されています。見極められていない活動を POV として記録することは、見極められた Proof of Value または Value Stream Assessment 向けに商談戦略をどこで引き上げられるかをトラッキングするのを困難にします。

技術的勝利活動と Proof of Value の作業を効率的にレポートできなければ、セールスおよび SA リーダーがコーチングの機会を特定し、アウトカムをより良く予測することは困難です。

承認ワークフローが展開されつつあり、これによりセールスおよび SA リーダーは活動を定期的にレビューしながら、しっかりと見極められた技術的勝利の活動を Proof of Value としてマーキングできるようになります。

SA またはセールスリーダーのカウンターパートと密に連携し、Proof of Value オブジェクトのある商談を定期的にレビューしながら、しっかり見極められた POV を承認付きでマーキングしてください。

POV 承認プロセスへのセールスおよび SA リーダーの参加により、コーチングの機会と予測可能性を素早く定期的に特定できるようになります。

##### 承認プロセス

- 商談を担当する Solution Architect は、関連する SAE との相互合意のもと、[商談に POV オブジェクトを作成](#tracking-a-pov-in-salesforce)します。
- 新しい POV オブジェクトが作成されると、`#troops-pov-created` Slack チャンネルに通知が投稿されます。
- 各エリアのセールスおよび SA リーダーは、その地域の進行中の POV と技術的勝利の作業に関する週次レビューに加え、`#troops-pov-created` Slack チャンネルで新しい POV を監視します。新しい POV が作成されると、商談の質に関する非同期または同期のコラボレーションが開始されます。
- ASM または SA Manager は、Salesforce オブジェクトもしくは Slack の troops アクションを通じて POV を承認のためにマーキングします。
- ASM または SA Manager は、この段階でのプロフェッショナルサービスのポジショニング計画について確認します。すべての SAE/SA は、見極められた POV を持つ商談において顧客の継続的な成功を保証するため、プロフェッショナルサービスをポジショニングする必要があります。ポジショニングの方法については[こちら](/handbook/solutions-architects/processes/#positioning-professional-services)を参照してください

#### Custom Models PoV の要件

セルフホスト型モデルやカスタム AI モデルが関わる PoV では、最適なサポートと成功するアウトカムを確保するために追加の調整とトラッキング要件が適用されます。

- Mandatory Issue Tracking: すべてのセルフホスト／カスタムモデル PoV は、Custom Models プロジェクトの[コンフィデンシャル GitLab Issue](https://gitlab.com/gitlab-org/ai-powered/custom-models/custom-models/-/issues/143) で追跡される必要があります。この一元管理されたトラッキングは、Custom Models チームのキャパシティ管理および適切なサポートレベルの提供に役立ちます。
- Required Information: Issue の説明にすべての必要情報が含まれます
- Capacity Management: Custom Models チームは、品質の高いサポートを提供するため、同時 PoV のキャパシティを限定して運用しています。SA は次のことを実施してください:
  - 新規のカスタムモデル PoV にコミットする前に現在のキャパシティを確認する
  - タイムラインの実現可能性について Custom Models チームと調整する
  - 戦略的価値と顧客タイムラインの制約に基づいて PoV を優先付けする
- Early Engagement: 見極めフェーズで Custom Models チームを巻き込み、次のことを実施する:
  - 技術的実現可能性を検証する
  - 提案されたタイムラインに対するサポート可用性を確認する
  - 特別な要件や制約を特定する
  - モデル能力に整合する明確な成功基準を確立する
- Success Tracking: カスタムモデル PoV は技術的成功とチームの学習の両方の観点でトラッキングされ、次の目的に役立てられます:
  - 成功した実装パターンを文書化する
  - 共通の課題と解決策を特定する
  - サポートプロセスとチームの士気を向上させる
  - 将来の類似機会のためのナレッジベースを構築する

このプロセスにより、カスタムモデル PoV はチームのキャパシティとタイムライン制約に関する現実的な期待を維持しつつ、適切な技術サポートを受けられるようになります。

### POV のベストプラクティス

ソリューションアーキテクトは POV のオーナーであり、見込み顧客が GitLab で成功体験を得られるように導きます。そのため、ソリューションアーキテクトは POV 中に見込み顧客が経験する質問や問題に対する主要な連絡窓口となるべきです。予期しない技術問題でサポートが必要な場合、一部の POV は[優先見込み顧客](/handbook/support/priority_prospects/#overview)として扱われ、サポートチームに連絡できる場合があります。

多くの見込み顧客は、POV の一部として GitLab の高可用性 (HA) の実装を含めたい誘惑に駆られます。この場合、実装コンポーネントは完全に別の POV として構成し、GitLab の機能評価と実装、負荷、パフォーマンスのコンポーネントを分離してください。

POV のその他のベストプラクティス:

- SA は POV の提案またはコミットの一部であるべき
- POV は販売を引き起こす後期段階のコンポーネントであるべきで、初期段階のオファリングではない
- 既存の GitLab インストールを利用していることが多いので、Q&A やその他の検討事項ではなく、なぜ POV が必要なのかを尋ねる
- 機能 POV は HA ではなく基本環境で実施すべき。ただし、HA 環境がすでに確立され実証されている場合を除く
- 必要な機能は限定的な数（理想的には 5 つ以下）にすべき - これらは購入トリガーかつ差別化要因であるべき
- COM プランの意思決定基準に必要な機能をマッピングするため、SA と SAE で協力してください
- POV は顧客環境内に完全に設計・構成されたエコシステムを実装するものではなく、製品評価です

以下は各種 POV を実施するためのベストプラクティスのガイダンスです。これらのプロセスは顧客にとって特定されたビジネスアウトカムを満たすという同様のゴールを共有しますが、エンゲージメントスタイル、POV の期間、場所、強度に応じて異なります。以下はすべての POV に適用されます。

### POV のキープレイヤー

#### 顧客側の役割

- Executive contact - ビジネスレベルおよび予算面での承認を持つリーダー
- POV を実行するために少なくとも 1 つのパイロットチーム
- Technical POV lead

#### GitLab 側の役割

- Strategic Account Executive (SAE) または Account Executive (AE) - リレーションシップマネージャ、ライセンスのオーナー
- Solutions Architect (SA) - 主要な技術窓口、POV のオーナーかつプロジェクトマネージャ
- Customer Success Manager (CSM) - _見極められたアカウントのみ。_顧客の可視性のために紹介され、POV を時折支援
- Professional Services - プリセールス段階で必要に応じて稀に
- Support Team - 技術エラーが必要となった場合のみ、[Internal Support ページ](/handbook/support/internal-support/)に従い顧客経由で関与

## POV のキックオフチェックリスト

- SA: 顧客アーキテクチャが POV をサポートできる準備ができていることを確認 (self-managed の場合)
- SA: 顧客ネットワークが GitLab.com にアクセスできることを確認 (SaaS 評価の場合)
- SA: [CSM ハンドブックページ](/handbook/customer-success/csm/)に従って GitLab に Customer Success プロジェクトを作成
- SA: 顧客が必要とする場合は POV ドキュメントを作成、それ以外は Customer Success プロジェクトをデフォルトとする
- SA: キックオフ前に POV のゴールとビジネスアウトカムが明確に特定されていることを確認
- SA: 大規模な戦略商談では、Self-Managed または GitLab.com サポート関連の該当 Slack チャンネルを使い、POV の日付、顧客、関連情報を GitLab Support に通知
- SAE/AE: Salesforce で商談を更新し、Stage 3 - Technical Evaluation に設定し、[ハンドブック](/handbook/sales/field-operations/gtm-resources/)に従って POV 情報を入力
- SAE/AE: 必要に応じて法務チームによる NDA 締結
- SAE/AE: 顧客と[Customer Assurance Package](https://trust.gitlab.com/) をレビュー (SaaS 評価の場合)
  - Customer Package には NDA が必要で、よくリクエストされるセキュリティ情報 (SOC2、ペネトレーションテスト結果など) が含まれており、[Field Security Issue](https://gitlab.com/gitlab-com/gl-security/security-assurance/field-security-team/customer-assurance-activities/caa-servicedesk/-/issues/new?issuable_template=Security%20Documents%20CAA) でリクエストできます
- SAE/AE: 内部キックオフミーティングをスケジュール（後述）
- SAE/AE: 顧客とのキックオフミーティングをスケジュール
- CSM: 内部キックオフミーティング前にコラボレーションプロジェクトのコンテンツをレビュー
- SA: CI/CD が必要な SaaS トライアルでは、[ハンドブック](/handbook/support/internal-support)に従ってトライアル用ランナーの有効化をリクエスト

## POV ミーティングの録画

POV 関連の通話は顧客の同意を得て録画される場合があります。録画は Chorus、Google Drive のフォルダ（ローカル録画の場合）、またはプロジェクトリポジトリ内（小さい場合）に保存できます。録画リンクはプロジェクトリポジトリの Documents ディレクトリ内のメモに記載してください。

## POV のタイプ

POV を実行する際にはいくつかのオプションがあります。選択する POV のタイプは顧客の希望と最適なフィットを反映している必要があります。POV タイプ（利用頻度順）には次のものがあります。

- **Guided** - エンタープライズ顧客向けに最も一般的な POV であり、すべての顧客体験の大部分を占めます。通常 14〜45 日の期間ですが、状況によって最大 60 日まで延長されることもあります。
- **Lite** - POV 全体を通じて最小限のタッチポイントしか必要としない Commercial 商談に専用される POV タイプです。エンタープライズの "Guided trial" には使用しません。
- **On-site** - これより一般的でないタイプ。通常 1 週間程度の限られた評価期間でクライアントの所在地で実行する、集中的かつ凝縮された POV です。
- **Paid** - まれに、見込み顧客が長期評価のために GitLab に費用を支払うケース（通常 60 日を超える）。

各 POV タイプ固有のベストプラクティスを以下に示します。

### Guided POV

Guided POV はエンタープライズアカウントで最も一般的に活用される POV タイプです。通常 30〜60 日の期間です。

#### Guided POV テンプレートドキュメント

Guided POV では、SA は[Guided POV ドキュメント](https://docs.google.com/document/d/1N6gFggzxqueyywF8CxepfjCi-2AIed9PVyy8VcpfIJk/edit#heading=h.30j0zll)の一部または全体を活用する必要があります。これは POV の日付、成功基準、GitLab および見込み顧客双方の前提を検証します。戦略的 POV では以下の 4 つのフィールドが必須です。

- Desired future
- Desired business outcomes
- Required Capabilities (Success Criteria) — SFDC の意思決定基準と価値ドライバーに整合
- Metrics

これらの POV は、定期的なタッチポイントと一貫したインタラクションを特徴とし、顧客側に GitLab の評価へのフルタイム専念を要求しません。Guided POV を実施する際は、キックオフミーティング、技術サポートコール、週次レトロスペクティブコール、POV クロージングコールを行うのが一般的です。これらのミーティングは次の提案で表されます。

#### ソリューションアーキテクトが主導する内部キックオフミーティング

GitLab 参加者: Strategic Account Executive、Solutions Architect

アジェンダ:

- すべてが正しいことを確認するために Customer Success プロジェクトの README を協働でレビュー
- POV ドキュメントのレビュー（POV にドキュメントが必要な場合のみ）
- 戦略の議論、GitLab Support または Professional Services への通知が必要かを確認
- Strategic Account Executive が顧客との外部キックオフをスケジュール

#### ソリューションアーキテクトが主導する外部キックオフミーティング (リモート)

参加者:

- GitLab: Strategic Account Executive、Solutions Architect
- 顧客: Executive contact、Technical POV lead

アジェンダ:

- 以下のアジェンダ項目について顧客と画面共有しディスカッション
- すべてが正しいことを確認するために Customer Success プロジェクトの README を協働でレビュー
- POV 完了の期日について合意し、プロジェクト POV のマイルストーンに追加
- プロジェクト POV の Issue をレビュー - 必要に応じて合意済みの期日で新規 Issue を追加
- 顧客と POV ドキュメントをレビュー（必要な場合のみ）
- 顧客とのケイデンスを確立し、Strategic Account Executive がこのコール中にスケジュールを設定
- 顧客との各ケイデンスコール用の Issue を POV マイルストーン下にコールメモのために作成
- ライセンスを発行し、顧客が GitLab のセットアップと設定に支援を必要とするかどうかを確認

#### ソリューションアーキテクトが主導する週次レトロスペクティブコール

参加者:

- GitLab: Solutions Architect、Strategic Account Executive
- 顧客: Technical POV Lead

アジェンダ:

- うまくいったことは何か?
- 克服する必要のある問題は?
- 何を変える必要があるか?
- 成功基準のレビュー — オントラックか?

#### SAE または AE が主導する POV クロージングミーティング

参加者:

- GitLab: Strategic Account Executive、Solutions Architect、Customer Success Manager
- 顧客: Executive contact、Technical POV Lead

アジェンダ:

- 必要な機能を満たしたか?
- 顧客の価値ドライバーを満たしたか? これは技術的な勝利か?
- 次のステップを特定
- POV サーベイを送付（該当する場合）

### On-site または Hands-On POV

On-site または Hands-On (バーチャル) POV は通常最も短く、最も集中的な POV です。このタイプの POV を始める前に次のことが重要です。

- すべてのアウトカムと目標が合意され文書化されていること
- GitLab および顧客のチームメンバーが特定されていること
- カレンダーのスケジュールが調整されており、できれば毎日（スタンドアップなど）のミーティングが組まれていること
- システムインストールおよび／またはユーザー管理タスクが完了していること

SA は通常、選んだ場所（またはバーチャル）でクライアントに合流し、現地のチームと直接協働してその環境内における GitLab の価値提案を素早く特定します。SA はこの POV のために、毎日（または合意したケイデンスで）週中の決まった数時間をクライアントに専念して費やすのが一般的です。

毎日の（定期的な）ミーティングの目的は次のとおりです。

- POV のステータス確認
- ブロッカーの特定と、それを迅速に（合意したタイムラインで）取り除く計画の策定
- 価値ドライバーに関するコラボレーション
- 問題解決の支援
- 特定された POV アウトカムを得るために必要な知識を顧客 POV オーナーに身につけてもらう

### Paid POV

Paid POV は他の POV タイプよりも一般的でありません。通常 60 日を超える期間で、顧客は POV 期間中の GitLab の利用に対して支払います。このタイプの POV を始める前に、GitLab の日割りライセンス購入が完了している必要があります。これらの POV は、定期的なタッチポイントと一貫したインタラクションを特徴とし、顧客側に GitLab の評価へのフルタイム専念を要求しません。このタイプの POV では、より大きなエコシステム的な焦点を持つことが一般的で、GitLab の価値はクライアントのエコシステム内の他のツールや環境とのインタラクションに依存します。Guided POV と同様に、キックオフミーティング、技術サポートコール、ケイデンスのレトロスペクティブコール、POV クロージングコールを行うのが一般的です。

### Lite POV - Commercial 専用 (DEPRECATED)

見込み顧客が従うべき内部 POV プロセスを持っているか、時間が重要な場合に Lite POV が活用されます。

#### Lite POV テンプレートドキュメント

Lite POV では、SA は [Lite POV ドキュメント](https://docs.google.com/document/d/1PO3jXG3wiKsCbx5vb8dm4SmOe_PiTB47SadROIO8nCc/edit#)（GitLab チームメンバーのみアクセス可能）を活用できます。これは POV の日付、成功基準、GitLab および見込み顧客双方の前提を検証します。

Lite POV の場合、ソリューションアーキテクトが GitLab の唯一の連絡窓口になることが期待されます。"Lite" は見込み顧客の規模および GitLab とのエンゲージメント能力に応じてケースバイケースで決定されます。

#### LITE POV テンプレートの使用

Lite POV テンプレートを使用するには、まず POV ごとにメインドキュメントのコピーを作成します。

ドキュメント内で黄色でハイライトされている各領域を編集し、特定の見込み顧客に関連する情報を含めてください。この情報は、見込み顧客名や GitLab チームメンバーの詳細などの基本データに加え、主要な目標、必要な機能、環境情報など、見込み顧客と協働で特定するデータを含みます。赤色の指示テキストはすべて削除してください。

最後に、GitLab と見込み顧客の双方がドキュメントのコピーを持っていることを確認します。POV 用の GitLab Enterprise Edition ライセンスを配布する前に、POV 期間中の毎週のミーティングをカレンダー招待で予定してください。

## Commercial Sales POV ガイド

Commercial Sales POV は通常 Lite POV のバリエーションとして実行されますが、[Lite POV ドキュメント](https://docs.google.com/document/d/1PO3jXG3wiKsCbx5vb8dm4SmOe_PiTB47SadROIO8nCc/edit#)を使用しない場合もあります。Commercial POV における典型的な顧客との対話を以下に示します。

### キックオフミーティング

- 期間: 30 分
- 参加者: GitLab Account Executive、GitLab Solutions Architect、見込み顧客
- アジェンダ:
  - 成功基準を定義（ベストプラクティスとして必要な機能は 5 つ以下とする）
  - 開始日と終了日を確認
  - 主要なコミュニケーション方法を決定
    - 顧客が GitLab の協働プロジェクトでコミュニケーションを取りたいか、メールのみか決定
    - SA のキャパシティと商談 IACV に応じて、協働的な期間限定の Slack チャンネルもオプション
    - 頻度のオプション: 30 分の週次コール、または週次メールで必要に応じてコールをスケジュール
- SA の役割:
  - POV プロセス全体を通じての主要な連絡窓口として機能する
  - 成功基準に関するステータス更新を追跡
  - 顧客にとって関心のある既存または新規の機能リクエストを記録
  - トラブルシューティングとブロッカーのエスカレーションをリード

### Commercial Sales - POV と Customer Success Plan の作成

- [このプロセス](/handbook/solutions-architects/playbooks/pov/#tracking-a-pov-in-salesforce)に従って Salesforce で POV を作成し追跡
- Commercial/Pre-sales グループ内に新しい[顧客プロジェクト](https://gitlab.com/gitlab-com/account-management/commercial/pre-sales)を作成。テンプレートを使用するには、'Create from Template' タブを選択し、'Group' テンプレートを選び、'New Customer Project - Commercial Sales' テンプレートで 'Use template' をクリック
- README.md を編集して Proof of Value セクションに POV 固有の情報を含め、関連する追加フィールドを記入
- POV 完了時、Salesforce レコードを POV 結果（成功または失敗）で更新し、関連するフリーフォームフィールドに裏付けの理由を記載
  - 成功した POV の場合:
    - SA は README.md にその他の既知情報を追加し、プロジェクトを Pre-sales グループから [Commercial](https://gitlab.com/gitlab-com/account-management/commercial) に移動
    - CSM と AE は Account Tier と IACV に基づいて CSM の適格性とエンゲージメントを判断
    - CSM、SA、AE は新規顧客とミーティングを設定し、開始ベースラインを確立、プロジェクトデータをレビューし、今後の協働利用を確立

## POV テンプレートドキュメント

協働的な GitLab プロジェクトを使う代わりに（または併せて）、POV の詳細をアウトラインするためのドキュメントが利用可能です。POV [テンプレートドキュメント](https://docs.google.com/document/d/1N6gFggzxqueyywF8CxepfjCi-2AIed9PVyy8VcpfIJk/edit?usp=sharing)（GitLab チームメンバーのみアクセス可能）は、主要なビジネス価値ドライバー、現状、望ましい目標、必要な機能、メトリクス、環境情報を扱うことで、成功する POV のフレームワークを提供します。

このドキュメントは POV ごとに具体的な成功基準を提案し検証するとともに、GitLab と特定された見込み顧客間の相互コミットメントを概説します。POV が実施される限定的な時間枠も明示します。

### POV テンプレートドキュメントの使用

POV のフルテンプレートを使用するには、まず POV ごとに[テンプレートドキュメント](https://docs.google.com/document/d/1N6gFggzxqueyywF8CxepfjCi-2AIed9PVyy8VcpfIJk/edit?usp=sharing)（GitLab チームメンバーのみアクセス可能）のコピーを作成します。

ドキュメント内で黄色でハイライトされている各領域を編集し、特定の見込み顧客に関連する情報を含めてください。この情報は、見込み顧客名や GitLab チームメンバーの詳細などの基本データに加え、主要な目標、必要な機能、環境情報など、見込み顧客と協働で特定するデータを含みます。赤色の指示テキストはすべて削除してください。

最後に、GitLab と見込み顧客の双方がドキュメントのコピーを持っていることを確認します。POV 用の GitLab Enterprise Edition ライセンスを配布する前に、POV 期間中の毎週のミーティングをカレンダー招待で予定してください。

## POV テンプレート Wiki ページ

POV プランに Google ドキュメントを使用する代わりに、コラボレーションプロジェクト内に POV の詳細を捕捉するための Wiki ページが利用可能です。この Wiki ページは POV テンプレートドキュメントと類似しており、GitLab Wiki ページに収まったものです。
Wiki ページを使うことの利点:

- Google ドキュメントへのアクセスがブロックされる可能性のある顧客でもアクセス可能
- POV 完了後の交渉フェーズで、Issue では実現できない、エグゼクティブと共有するのに適したリッチテキストドキュメント形式を提供
- 単一の顧客プロジェクト内で複数の POV を持つ能力を提供
- 見込み顧客に GitLab をすべての用途で使うことを意識させる

### POV テンプレート Wiki ページの使用

コラボレーションプロジェクトのない新規顧客の場合、コラボレーションプロジェクトが [POV プロジェクトテンプレート](https://gitlab.com/gitlab-com/account-management/templates/poc-plan)から作成された際に POV プランテンプレートが Wiki に含まれます。
既存顧客の場合、POV テンプレートを既存の顧客コラボレーションプロジェクトに取り込む方法は 2 つあります。

1. POV コラボレーションプロジェクトの Wiki ページを開いてテキストをコピーし、顧客コラボレーションプロジェクトの Wiki の新規ページに貼り付け、特定顧客の詳細で更新する
1. POV テンプレート Wiki をローカルにクローンし、更新して顧客コラボレーションプロジェクトにプッシュする（顧客名が MyCustomer であると仮定）。手順は次のとおり:
   1. POV プロジェクトテンプレートで Wiki (Plan -> Wiki) ページにアクセス
   1. 右上の `Clone repository` をクリックしてクローン URL をコピーし、ローカルマシンのターミナルで `git clone <clone_url>` を実行
   1. `cd poc-plan.wiki`
   1. customer.md を MyCustomer.md に名前変更（実際の顧客名に置き換える）
      `git mv home/customer.md home/MyCustomer.md`
   1. customer ディレクトリを MyCustomer に名前変更
      `git mv customer MyCustomer`
   1. `pov-template.md` ファイルを POV の名前に変更
      `git mv MyCustomer/pov-template.md MyCustomer/devsecops-pov.md`
   1. `home.md` を編集して MyCustomer ディレクトリへのリンクを変更
   1. `MyCustomer.md` を編集して参照を更新
   1. `devsecops-pov.md` を編集して CustomerName への参照をすべて MyCustomer に置換し、必要なその他の編集を行う
   1. git で変更をステージング
      `git add .`
   1. ローカルレポートに変更をコミット
      `git commit`
   1. git origin を新しい Customer Success コラボレーションプロジェクトに向ける
      `git remote set-url origin git@gitlab.com:gitlab-com/account-management/western-north-america/MyCompany/MyCompany.wiki.git`
   1. 変更を新しい Customer Success コラボレーションプロジェクトにプッシュ
      `git push origin`
1. 新しい Customer Success コラボレーションプロジェクトで新しい Wiki を表示し、存在することを確認した後、必要に応じて Wiki のウェブエディタ（またはローカルマシン）で他の編集を継続

## POV トライアル

POV には通常ライセンスのアクティベーションが必要です。GitLab.com 上のトライアル、延長、プラン変更の取り扱いについての手順は[トライアル、延長、プラン変更ハンドブックページ](/handbook/support/license-and-renewals/workflows/saas/trials_and_plan_change)で利用可能です。

## POV リソース

以下は POV で有益と判明したプロジェクトの進化中のリストで、顧客に提供する優れた出発点となる場合があります。

### エンドツーエンドの Proof プロジェクト

これらのプロジェクトは、POV の `happy-path` をデモする能力を提供する非常にシンプルなコードセットを持っています。Hello World カテゴリのプロジェクトに分類されますが、GitLab のさまざまな部分を行使するシンプルな自動化を備えている傾向があります。SA は過去にこれらを self-managed 環境のインストールを評価する手段として活用してきました。

- [Insecure Tanuki Tech Project](https://gitlab-core.us.gitlabdemo.cloud/demosys-users/skamani/insecure-tanuki) は Auto DevOps の使用を示すために社内で開発されました。Secure 機能に主軸を置いていますが、すべてのステージを示すのに役立ちます。

### 特定ステージのデモンストレーション

これらのプロジェクトは特定ステージをデモするものです。一般に、顧客が馴染みのある既存の OSS コードベース上に構築されており、理解しやすく、参照すべき良いドキュメントがあります。

#### Secure ステージプロジェクト

- [NodeJS Juice Shop](https://github.com/juice-shop/juice-shop) リポジトリには .gitlab-ci.yml ファイルが含まれており、SAST と Dependency Scanning を使い始められます。必要に応じてその他を段階的に組み込みます。
- [OWASP WebGoat.NET](https://gitlab-core.us.gitlabdemo.cloud/tanuki-group/dot-net-webgoat) リポジトリは、パッケージ化されたテンプレートを使い、SAST、ライセンス管理、シークレットスキャンを素早く有効化できます。これは私たちの .NET アプリケーション開発（Framework と Core 両方）におけるポジショニングを検証します。

#### Proof of Value のイネーブルメント

- [PoV Overview Course](https://university.gitlab.com/courses/gitlab-proof-of-value-overview)
- [Executing an Exceptional PoV Course](https://university.gitlab.com/courses/delivering-an-exceptional-proof-of-value)
