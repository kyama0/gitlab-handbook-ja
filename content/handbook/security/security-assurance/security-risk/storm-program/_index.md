---
title: "Security and Technology Operational Risk Management (STORM) プログラム & 手順"
controlled_document: true
tags:
  - security_standard
  - security_standard_ra
upstream_path: /handbook/security/security-assurance/security-risk/storm-program/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T05:30:11Z"
translator: claude
stale: false
lastmod: "2025-12-17T08:09:08-06:00"
---

{{< label name="Visibility: Audit" color="#E24329" >}}

{{% panel header="**GitLab チームメンバーではないけれど、STORM プログラムについてフィードバックを提供したいですか?**" header-bg="primary" %}}
私たちは GitLab チームメンバーから定期的に [フィードバック](/handbook/people-group/guidance-on-feedback/#feedback-at-gitlab) を受けており、GitLab チームメンバー以外の方からもフィードバックを提供できる仕組みを設けたいと考え、これにより [イテレーション](/handbook/values/#iteration) を行い、[私たちの価値観](/handbook/values) により近づくことができます。GitLab チームメンバーではなく、Security and Technology Operational Risk Management (STORM) プログラムまたはその方法論についてフィードバックを提供したい場合は、この [フィードバックフォーム](https://docs.google.com/forms/d/e/1FAIpQLSfmD4G6CTdpbCe5Aymoz0oD6Z3Oi1X-2xxYzGNbJ2wcYh6uOA/viewform?usp=sf_link) を使用して匿名でフィードバックを送信してください。
{{% /panel %}}

## 目的

GitLab における Security and Technology Operational Risk Management（「STORM」）プログラムの目的は、GitLab の戦略を支援するために、セキュリティおよびテクノロジーの運用リスクを特定、モニタリング、治療、および報告することによって、より良い [意思決定](/handbook/leadership/making-decisions/) を可能にすることです。Security Risk Team は、GitLab に影響を及ぼす可能性のあるセキュリティおよびテクノロジーリスクが効果的に管理されるように、以下の手順（[NIST の SP 800-39](https://csrc.nist.gov/pubs/sp/800/39/final)、[SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final)、および [ISO 31000 Risk Management Methodology](https://www.iso.org/standard/65694.html) に示されたガイダンスを考慮して形成されたもの）を活用します。

## 範囲

STORM プログラムの範囲は、テクノロジーに依存しない運用リスクに限定されます。これらのリスクは、リスクアセスメント、チームメンバーからの報告、[業界トレンド](https://github.com/jacobdjwilson/awesome-annual-security-reports)、またはコンプライアンス活動の結果など、さまざまな方法で特定できます。アプリケーションの内部統制における役割が非常に重要であるために、そのシステム専用のリスクを作成するインスタンスがある場合があります。これは、その使用がすべての活動で広く普及している GitLab.com に主に限定されます。

**範囲外:** STORM リスクに関連する場合（たとえば、複数のシステムにまたがる security compliance 観察事項）を除き、以下のリスクタイプは STORM の範囲外です。

1. セキュリティまたはテクノロジー関連でない運用リスクは範囲外です（例: 会計固有のリスク）。
1. [個別のシステム固有の security compliance 観察事項](/handbook/security/security-assurance/observation-management-procedure/)（例: 特定のシステムの不適切なパスワード設定）
1. [Enterprise Risk Management (ERM)](https://internal.gitlab.com/handbook/internal-audit/erm/) - 社内のみ。ERM リスクの例は [Mitigating Concerns](https://internal.gitlab.com/handbook/leadership/mitigating-concerns/)（社内のみ）ハンドブックページで確認できます。

## 役割と責任

STORM に関連する個人の全体的な役割と責任を概説するために、リスクガバナンス構造が整備されています。現在のガバナンス構造は次のとおりです。

| 役割 | 責任 |
| ------ | ------ |
| Executive Risk Owner | - GitLab のトップ 5 セキュリティリスクのうち 1 つ以上の治療を推進する責任を負います <br>- 1 人以上の Risk Owner を特定する責任を負います。Security Risk は、リスク治療に関与する部門ごとに少なくとも 1 人の Risk Owner を特定することを推奨します <br>- Risk Owner と Security Risk Team によって特定された関連治療マイルストーンへの KR の作成を含む、長期的なリスク治療計画を承認する責任を負います <br>- ほとんどの Executive Risk Owner は CEO + 2（Senior Director または VP レベル）であり、長期にわたるリスク削減を推進するために部門間のコラボレーションに責任を負うことに注意してください |
| Risk Owners |  - 残留リスクを長期にわたって削減することを目的とした治療マイルストーンを含む、長期的なリスク治療計画の作成に責任を負います <br>- リスク治療活動の実行に責任を負います <br>- Security Risk Team と協力して、関連リスクと治療ステータスが定期的に報告されるようにする責任を負います <br>- ほとんどの Risk Owner は CEO + 3（Senior Manager または Director レベル）であることに注意してください |
| Security Risk Manager | この役割は、リスクごとに特定の Security Risk チームメンバーに割り当てられます。期待は次のとおりです:<br>- 担当リスクの履歴、現状、および方向性に関する知識を維持する<br>- リスクのオーナーと協力して、リスクのステータスと治療が文書化されていることを確認する<br>- 担当リスクに関連する Issue/MR/Epic/ワーキンググループを特定、モニタリング、参加する<br>- 是正活動を検証する<br>- リスクを関連する <a href="/handbook/security/security-assurance/security-compliance/sec-controls/#gitlab-control-framework-gcf">GCF コントロール</a>、<a href="https://gitlab.com/groups/gitlab-com/gl-security/security-assurance/-/epics?state=opened&page=1&sort=start_date_desc&label_name[]=Observation+Epics">Root Cause Observation Epics</a>、Security Compliance Tier 3 観察事項、<a href="/handbook/security/security-assurance/field-security/field-security-study/">Field Security Study Observations</a>、およびセキュリティに影響を与える評価で記録されたその他の観察事項（社内のみ）にマッピングする <br>- Executive Risk Owner および Risk Owner と協力して、長期的なリスク治療計画を作成およびモニタリングする|
| Security Risk Team | - リスクアペタイトの確立とリスクアセスメントの実施を含む STORM 手順を調整および実行する<br>- リスクレジスターを維持して、正確性と最新性を確保する<br>- リスク治療活動の追跡をサポートするためにプログラム管理の役割で機能する<br>- すべてのリスク是正活動が完了した後にピア検証テストを調整する <br>- セキュリティおよびテクノロジー運用リスクのステータスを定期的に報告する <br> - GitLab のリスクレジスターの継続的なレビューを含む STORM プログラムの管理レベルの監督を提供し、必要に応じてエスカレーションのポイントとして機能する <br>- 本手順に対する重要な変更と例外を承認する責任を負います|

## STORM 手順 {#storm-procedures}

### リスクアペタイトと許容度の確立 {#establishing-risk-appetite-and-tolerance}

**Tone at the Top:** GitLab の STORM 方法論は、定義されたリスクアペタイトとリスク許容度を、GitLab がどのリスクを受け入れる/取るか対どのリスクを軽減する必要があるかを判定する主要な推進要因として使用します。これらの閾値は、Tone at the Top が STORM プログラムと整合するように、組織全体のシニアリーダーシップによって定義されます。リスクアペタイトと許容度は、年ごとに再評価されます。これは、[ISO 31000 Risk Management Methodology](https://www.iso.org/standard/65694.html) に基づく年次リスクアペタイト調査を通じて行われます。調査は、Security Operations と直接的な関係を持つシニアリーダーシップの立場で活動する個人に配布されます。回答は平均化され、全体的なリスクアペタイトと許容度が導き出されます。

#### GitLab がリスクアペタイトを判定する方法

GitLab のセキュリティリスクアペタイトは、シニアリーダーシップが次のリスク戦略ステートメントについて判断した総平均優先順位に基づいて判定されます。

- GitLab は、可能な限り他者にリスクを移転するソリューションを模索すべきである（リスクテイキング対リスク移転）
- GitLab は、組織の目標と整合する機会を追求することと関連リスクとのバランスをとるべきである（組織の目標）
- GitLab は、影響レベルに関係なく、組織に影響を与えるすべてのリスクに対応すべきである（リスク対応アプローチ）
- GitLab は、コスト、経営の優先順位、ROI に基づいてリスクに対応すべきである（リスク対応推進要因）

各リスク戦略ステートメントは、シニアリーダーシップによって最高優先順位のリスク戦略から最低優先順位のリスク戦略まで優先順位順にランク付けされます。GitLab は次のリスクアペタイトマトリクスを利用しています。

| リスクアペタイト<br>アプローチ | RISK SEEKING | RISK RECEPTIVE | RISK NEUTRAL | RISK AVERSE |
| ---- | ---- | ---- | ---- | ---- |
| **RISK TAKING vs**<br>**RISK TRANSFER** | 積極的なリスク<br>テイキングが正当化される | 該当する場合は既存のベンダーとリスクを移転する<br>機会を模索する<br>（たとえば、リスクを移転するために<br>新しいベンダーを導入しない） | リスクテイキング対リスク移転に対して<br>バランスのとれたアプローチをとる | 注意を払い、リスク移転ソリューションを<br>特定することによって、できるだけ少ないリスクを<br>受け入れる |
| **ORGANIZATIONAL**<br>**OBJECTIVES** | 目標と整合する機会を追求するために<br>組織への大きな悪影響を受け入れる意思がある | 目標と整合する機会を追求するために<br>いくつかの悪影響（たとえば、LOW リスク）を<br>受け入れる意思がある | 意思決定の際に、悪影響の可能性<br>対目標は同等に<br>考慮される | 意思決定の際に、悪影響の可能性<br>対目標は同等に考慮される |
| **RISK RESPONSE**<br>**APPROACH** | 法的および規制上の義務に影響を<br>与えない限り、すべてのリスクは<br>受け入れ可能である | 内部イニシアチブを通じてリスクレベルを<br>受け入れるか軽減するためのリスク<br>対応オプションを判定する | リスクの受け入れより<br>リスク是正が好まれる | 効果的に治療または移転できない<br>リスクは回避される |
| **RISK RESPONSE**<br>**DRIVERS** | 契約や規制違反を表す可能性がある場合を除き、<br>リスクに対する対応アクションは不要 | リスク対応アクションは、コスト効率、<br>経営の優先順位、投資収益率を<br>考慮する | リスク対応アクションは、戦略目標への影響よりも<br>セキュリティへの影響を強調する | リスク対応アクションは、コスト効率、<br>経営の優先順位、投資収益率、<br>および全体的な組織の目標に関係なく、<br>常にとられる |

*GitLab のリスクアペタイトマトリクスは、NIST の [SP 800-39](https://csrc.nist.gov/pubs/sp/800/39/final) および [SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final) に示されたガイダンスを考慮して形成されました。*

スコアリングは、GitLab 内で少なくともシニアリーダーシップの立場で活動し、複数の部門にわたる個人によって実行されます。

#### GitLab のセキュリティリスクアペタイトをリスク許容度に変換する {#translating-gitlabs-security-risk-appetite-to-risk-tolerance}

私たちのリスクアペタイトは、[リスクスコア値](#risk-factors-and-risk-scoring) が許容可能で、是正やリスク受け入れを必要としない範囲、つまりリスク対応が「monitor」に設定される範囲を定義する許容度に変換されます。リスクスコアは 1（最低）から 30（最高）の範囲です。範囲は、以下の表でリスクアペタイトごとに定義されています。

|Risk Averse|Risk Neutral|Risk Receptive|Risk Seeking|
|:---------:|:---------:|:---------:|:---------:|
|1-5|1-10|11-15|16-20|

20 を超えるリスクスコア（High または Critical のリスクレーティング）は、許容範囲内とみなすにはリスクが高すぎるとみなされます。言い換えれば、High および Critical と評価されたリスクは治療される必要があります。年ごとの現在および過去のリスクアペタイトは、[内部ハンドブック](https://internal.gitlab.com/handbook/security/security-assurance/#historical-and-current-record-of-gitlabs-security-risk-appetite) で確認できます。

### リスクの特定

#### Security Risk Team へのリスクのコミュニケーション {#communication-of-risks-to-the-security-risk-team}

リスクのためにチームに連絡する方法は複数あります。

1. （**推奨**）STORM Repo に [Risk Escalation issue](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/STORM/-/issues/new?issuable_template=risk-escalation) を提出します。
1. Issue 内でリスクが特定された場合、チームメンバーは Issue または MR で `@gitlab-com/gl-security/security-assurance/security-risk-team` をメンションすることでチームを直接タグ付けできます

リスクを文書化する際、チームメンバーは既存の Issue/観察事項に対して [説明ガイダンス](/handbook/security/security-observations-risk-management/#drafting-finding-description-guidance) を活用するか、[リスクドラフトガイダンス](#risk-drafting-guidance) を活用できます。

#### リスクアセスメント中に特定されたリスク

Security Risk Team は、セキュリティおよびテクノロジー運用リスクを特定するために、GitLab でリーダーシップの立場で活動する GitLab チームメンバーをインタビュー/調査する場合があります。特定されたリスクは、脅威ソースと脅威イベントの観点から枠組みされ、その後、発生可能性とリスクイベントが発生した場合の GitLab への影響について評価されます。さらに、これらのリスクは、全体的な残留リスクを判定するために、現在整備されている内部統制に対して評価されます。AI 関連のリスクは、年次で、または GitLab の運用内の AI システム、モデル、または使用パターンに重大な変更が発生したときに評価されます。

運用リスクを効果的に特定、管理、治療するために、GitLab は脅威ソースカテゴリのセットを、特定のリスク要因とリスクスコアリング定義とともに定義しました。これらの脅威ソースに基づいて、リスク特定フェーズに参加する組織全体のさまざまな利害関係者が特定されます。運用リスクに関連する脅威ソースとイベントの特定には、複数の考慮事項が含まれます。これらの脅威ソースとイベントは、GitLab の運用に関連するミッションクリティカルな目標に影響を与える可能性に基づいて特定されています。

#### 考慮される脅威ソースとイベントの例

| 脅威ソース | 脅威イベントの例 |
| :-----------: | --------------------- |
| **Adversarial（敵対的）** | 詐欺と窃盗、内部脅威、悪意のあるハッカー、悪意のあるコード |
| **Non-Adversarial（非敵対的）** | エラーや脱漏、物理的およびインフラストラクチャサポートの喪失（たとえば、自然災害）、機密情報の暴露、ビジネスをサポートするために使用されるシステムへの変更、AI モデルの劣化やバイアス、GitLab をサポートする外部環境への変更、GitLab のビジネスモデルへの変更、または、リーダーシップへの変更 |

#### リスクドラフトガイダンス {#risk-drafting-guidance}

STORM プログラムの考慮事項には、リスク（何が起こるかもしれないか）と観察事項（何が起こったか/コンプライアンス違反）の両方が含まれます。観察事項の記述に関するガイダンスについては、[Observation Management Procedure ハンドブックページ](/handbook/security/security-assurance/observation-management-procedure/) を参照してください。

リスクをドラフトする際、リスクステートメントから始めます。これは、私たちの GRC システムにおけるリスクのタイトルを表し、リスクを 1 つの文に凝縮しようとする試みです。[低コンテキストコミュニケーション](/teamops/decision-velocity/#low-context-communication) の精神に従って、リスクステートメントには単語や短いフレーズの使用を避けてください（例: Supply Chain）。私たちは主に否定的なリスク（対正のリスク/機会）を扱うため、「Failure to」「Inadequate」「Incomplete」「Lack of」などの否定的な言語でステートメントを始めるのが適切ですが、必須ではありません。リスクは何が起こるかもしれないかを表すため、GitLab データの機密性、完全性、可用性、セキュリティ、プライバシーに *もたらす可能性* のある否定的な影響を説明する前に「may」を使用してください。例: *Inadequate physical security controls may result in the loss of GitLab/Customer data and physical assets.* リスクの説明には、リスクのある資産/リソース、発生する可能性のあるイベント、そのイベントを引き起こすソース（根本原因）、および結果（影響/損失）に関連する詳細を含める必要があります（[出典](https://www.srmam.com/post/how-to-write-a-risk-statement)）。

#### リスク要因とリスクスコアリング {#risk-factors-and-risk-scoring}

リスクレーティング/スコアリングは、リスクマネジメント/意思決定支援の実務家や [思想](https://hubbardresearch.com/risk-management-modeling/) [リーダー](https://normanmarks.wordpress.com/2022/07/31/risk-assessment-danger/) のお気に入りのトピックです。スコアは主観的であり、それを適用する人の [無意識のバイアス](/handbook/company/culture/inclusion/unconscious-bias/) によって影響される可能性があります。このリスクを軽減するために、私たちはリスクについて報告し、私たちの最高の優先事項を調整し、整合させるために経営からのフィードバックを要求します。

各リスクをスコアリングするために、リスクイベントの発生可能性とイベントが発生した場合の GitLab への影響に基づく式を活用します。発生可能性と影響度のスコアは、GitLab に対する全体的な固有リスクを直接判定します。

##### 脅威イベントの開始の発生可能性の判定

| 定性 <br> スコア | リスクレベル | スコアリングガイドライン |
| :--------------------: | :--------: | ------------------ |
| 6 | CRITICAL | 脅威イベントを開始するために専門知識は不要 |
| 5 | VERY HIGH | 脅威イベントを開始するために低レベルの専門知識が必要   |
| 4 | HIGH | 脅威イベントを開始するために一定の専門知識が必要           |
| 3 | MEDIUM  | 専門知識があっても、脅威イベントを開始するのは困難    |
| 2 | LOW  | 脅威イベントを開始するために重要な専門知識が必要    |
| 1 | VERY LOW  | 脅威イベントを開始することは理論的に不可能 |

##### 脅威イベントの影響の判定

| IMPACT<br>SCORE | 組織のアウトプット<br>(時間、品質、リソース) | ブランド<br>レピュテーション | 事業<br>継続性 | 顧客 &<br>ステークホルダー | 法的 &<br>規制 | 財務 |
| :---------------: | ------------- | --- | -------- | ---------- | ----------- | ------- |
| VERY LOW (1) | 組織のアウトプットが<br>20% 未満影響を受ける | 会計期間内に 1 顧客以下に<br>限定されたレピュテーション<br>ダメージ | GitLab チームメンバーに影響する<br>非クリティカルなシステムの障害 | 1 顧客および/または<br>ステークホルダーに限定された影響 | 会計期間内に 1 回発生する<br>会社ポリシーの違反  | $999 までの損失   |
| LOW (2) | 組織のアウトプットが<br>30% - 40% 影響を受ける | 限定的な数の関係者<br>（たとえば、特定の顧客）に限定されており<br>公にされていない | GitLab が販売および財務業務を<br>72 時間以上継続できなくなる障害 | 2-3 顧客および/または<br>ステークホルダーに限定された影響 | 会計期間内に会社ポリシーの<br>違反が 2 回発生 | $1,000 から<br>$9,999 の間の損失 |
| MEDIUM (3) | 組織のアウトプットが<br>40% - 50% 影響を受ける | パブリックドメインでの<br>パブリシティだが、業界チャネルに限定されており<br>より広い大衆ではない | 3 つ以上の部門にわたって<br>GitLab のビジネス能力に影響する障害 | 4-5 顧客および/または<br>ステークホルダーに限定された影響 | 規制および/または<br>契約上の義務違反 | $10,000 から<br>$499,999 の間の損失  |
| HIGH (4) | 組織のアウトプットが<br>50% - 75% 影響を受ける | 広範なパブリシティだが<br>限定的な関係者に影響  | 顧客に対する GitLab の<br>可用性が 4 時間未満失われる障害 | 多くの顧客および/または<br>ステークホルダーに大きな影響 | GitLab に対する規制上の譴責<br>および/またはアクション | $500,000 から<br>$999,999 の間の損失 |
| VERY HIGH (5) | 組織のアウトプットが<br>75% 以上影響を受ける | 広く公にされる | 顧客に対する GitLab の<br>可用性が 4 時間以上失われる障害 | すべての顧客および/または<br>ステークホルダーに大きな影響 | 公的な規制罰金および/または<br>GitLab に対する大規模な訴訟 | $1,000,000+ の損失 |

最終的な影響スコアに到達するために、すべての影響カテゴリの影響スコアが平均化されます。

#### 固有リスクと残留リスクの判定

- 固有リスクは、既存のコントロール、内部プロセス/手順などのような既存の軽減策を考慮する *前の* リスクであり、次の式で判定されます。
   > `固有リスク = 発生可能性 x 影響度`

- 残留リスクは、固有リスクと同じ方法で計算されますが、発生可能性と影響度はリスクを削減/軽減する既知の既存のコントロール、プロセス/手順などに基づいて再評価されます。

#### リスクが Low、Medium、High、Critical のいずれと見なされるかの判定

固有および残留リスクスコアが判定されたら、次の表を使用してリスクが Low、Medium、High、Critical のいずれであるかを判定できます。

|リスクレーティング|リスクスコア範囲|
|:---------:|:--------------:|
|Low|1-10|
|Medium|11-20|
|High|21-25|
|Critical|26-30|

これらのレーティングは、許容範囲内かどうかではなく、コミュニケーション目的のラベルを表します。許容可能なリスクが何であるかを判定するには、[リスク許容度](#translating-gitlabs-security-risk-appetite-to-risk-tolerance) を参照してください。

#### アドホックなリスクの特定と評価

セキュリティインシデントから生じるリスク、日常的な業務運営を通じて特定されたリスク、定期的な評価など、従来のリスクアセスメントの外でリスクが特定される場合があります。アドホックに特定されたすべてのセキュリティおよびテクノロジー運用リスクは、Security Risk Team と話し合われ、固有リスクスコアが割り当てられ、リスクレジスターにエスカレーションすべきかどうかを判定するために定性分析が行われます。

### リスク対応

特定された各リスクについて、GitLab がリスクをどのように扱うかを判定するために、正式なリスク対応の決定が行われます。リスク対応手順の一環として、Risk Owner は、私たちの [リスクアペタイトと許容度](#establishing-risk-appetite-and-tolerance) に基づいて、リスクを受け入れるか、是正を追求するかを判断します。治療計画は、Security Risk Manager または委任者によってレビューされ、承認は GRC アプリケーションまたは関連する GitLab Issue 内のコメントでキャプチャされます。

| RESPONSE<br>OPTION  | 定義 |
| :-----------------: | ------------------------------------------- |
| Monitor (do nothing) | リスクスコアは [リスク許容レベル](#translating-gitlabs-security-risk-appetite-to-risk-tolerance) 内に収まり、現時点で追加のアクションは不要です。治療されたリスクで、リスク許容レベル内に収まるリスクスコアになるものは、GRC システム内で Monitor のステータスが付与されます。 |
| Remediate the Risk   | リスクは私たちのリスク許容度内に収まりません。リスク是正計画を完了して、次のいずれかを通じてリスクを是正します: リスクの共有（リスクを他者と共有するためのソリューションを特定および実装）、発生可能性の低減、および/または、GitLab への影響レベルの低減 |
| Accept the Risk | リスクは私たちのリスク許容度内に収まりません。是正を追求するコストが潜在的な利益よりも高いため、是正計画を実行せずにリスクを受け入れるか取ります。 |

GRC アプリケーションのリスクオブジェクトは、合意されたリスク対応を反映するように更新されます。「Remediate the Risk」が選択された場合、Risk Owner はリスク治療計画を実行します。文書化された計画とリスク治療のステータスは、GRC アプリケーション内にもキャプチャされます。リスク対応オプションの詳細については、以下を参照してください。

#### Monitor (期待されるイテレーション以上のことは何もしない)

Risk Owner がリスクが [許容度](#translating-gitlabs-security-risk-appetite-to-risk-tolerance) 内にあると結論付けた場合、STORM Program DRI が治療オプションに同意することを確認する以外、追加のアクションは不要です。

#### Remediate the Risk

リスクを是正することを選択する場合、特定のパスを選択する必要があります。

- リスクが発生する可能性を低減することによって是正する
- リスクが発生した場合の GitLab への影響を低減することによって是正する
- 第三者とリスクを共有または移転することによって是正する
- リスクを引き起こす活動を開始または継続しないことを決定することによって、リスクを回避することで是正する

パスが選択されたら、Risk Owner はリスクの是正に向けて作業するためのマイルストーンと期限を含む [SMART](https://en.wikipedia.org/wiki/SMART_criteria) で詳細な計画を提供する必要があります。治療計画は達成可能で、リスクイベントの根本原因に対処する必要があります。さらに、私たちの [Transparency](/handbook/values/#transparency) の価値観に沿って、各治療計画には、是正の結果/成果をハンドブック内で文書化するステップが含まれます。是正の結果が [non-public](/handbook/values/#not-public) と見なされ、ハンドブック内で文書化できない場合、内部ハンドブックまたは内部ランブック内に文書化されるべきです。Security Risk Team は、これらのリスク治療計画を活用して、リスク是正のステータスを追跡します。

リスク治療計画が実行され、リスクの残留リスクレベルがダウングレードされる結果になる場合（例: 残留リスクレベルが High から Medium に変わる）、是正の検証が実行され、関連するリスクオブジェクト内にキャプチャされます。ダウングレードのサポートドキュメンテーションの品質レビューは、Security Risk Manager によって完了され、GRC アプリケーション内のコメントにキャプチャされます。

#### Accept the Risk {#accept-the-risk}

Risk Owner がリスクの受け入れを追求することを選択した場合、リスクの受け入れを受けるリスクに割り当てられたリスクレーティングに基づいて、次の承認が必要になります。

|リスクレベル|必要な承認レベル|
|-----|-----|
|CRITICAL|Risk Owner + VP レベル承認* + E-group レベル承認|
|HIGH/MEDIUM|Risk Owner + VP レベル承認*|

`*` Risk Owner が VP の場合、追加の VP レベル承認は不要

リスクを受け入れることにより、Risk Owner とリスク受け入れ承認者（Risk Owner とは別の場合）は、リスク受け入れがそれぞれのリスクに対する最良の対応オプションであるかどうかを判定するために、年次でリスクを再評価することに同意します。年次評価に基づいてリスク受け入れが適切な場合、上記の表に記載されているリスクと承認要件に基づいて承認が再取得されます。さらに、Risk Owner は、リスクが実現するか、リスク受け入れがもはや適切でなくなった場合に是正を担当します。

### リスクの追跡とレポート {#risk-tracking-and-reporting}

特定されたリスクは、内部リスクレジスターで正式に追跡されます。この情報の集約された性質の機密性を考慮すると、リスクレジスターは [非公開](/handbook/communication/confidentiality-levels/#not-public) で、外部に配布されません。ただし、GitLab のリスクレジスターで追跡される情報の種類について詳細を知りたい人のために、公開可能な GitLab Risk Register Template が [こちら](https://docs.google.com/spreadsheets/d/1Lvn-ZjPNcZ-QMh-pkC6HqjwR-acUf70V9w2pquhRmH0/edit?usp=sharing) で入手できます。STORM 関連のリスク活動は [GitLab 内](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/STORM-risk-register/-/issues/?sort=weight_desc&state=opened&first_page_size=100)（社内のみ）に集中化されています。

私たちは、私たちの価値観に沿って、四半期ベース（the Security Risk Quarterly または「SRQ」）でトップ 5 リスクについて報告しています。SRQ について詳しく知るには、この [YouTube unfiltered overview video] を参照してください。私たちが使用したテンプレートは、参考のために [こちら](https://docs.google.com/document/d/1cpBbn_0kIWpEzbzLrzEcVesN-3Y0y1K6SD6wiv0-Vaw/edit?usp=sharing) で見つけることができます。さらに、私たちはリスクアペタイトとトップ 5 リスクを更新するための年次演習を実行しています。

STORM プログラムは、GitLab の日常業務に統合されています。そのため、私たちは STORM リスクを [Security Compliance のコントロールと観察事項](/handbook/security/security-assurance/observation-management-procedure/) や [Product Security の Risk Register](/handbook/security/product-security/security-platforms-architecture/risk-register/) を含むリスクソースにマッピングしました。私たちのマッピング演習は、私たちのセキュリティリスクランドスケープのより包括的なビューを提供し、STORM エンジニアがリスクをより迅速に特定およびエスカレーションできるようにすることを目的としています。

GitLab チームメンバーは、すべての Security Risk Quarterly ドキュメントを [SRQ Reports Google Drive folder](https://drive.google.com/drive/folders/18KeZiRGtWuZLke2TxYlhD6Mjgoyv4tBJ) で見つけることができます。

## トップ 5 リスク

Security Division の「トップ 5 リスク」は年次で確立され、リソースが許す限り SRQ を通じて四半期ごとに報告されます。Security Leadership は、短期および長期の戦略計画活動を実施する際に、これらのトップ 5 リスクを活用します。私たちは、治療活動を支援し、主要な是正活動について設計および運用上の有効性を保証するテストを実施することにより、是正をサポートする予定です。

### 長期的なリスク治療計画

Executive Risk Owner は、各トップ 5 リスクに対して長期的な治療計画が確立および実行されることを保証する責任を負います。Security Risk Team は、Executive Risk Owner および関連する Risk Owner と共に長期的な治療計画を調整する責任を負います。次のテンプレートは、計画中に活用され、私たちのアプローチとレポートにおける一貫性を確保します。

- リスクを [許容度](#translating-gitlabs-security-risk-appetite-to-risk-tolerance) 内に移動させる成功基準を確立する。これらの基準は Key Results (KR) になり、リスク是正の進捗を測るために使用されるマイルストーンです。完了した KR は、削減されたリスクスコアに相関します。
- 各 KR の依存関係を特定する。
- 各 KR の提供責任者を特定する。この人物は、治療活動を実施する責任を持つ部門にいるべきです。
- 各 KR の現実的な目標納期を確立する。運用リスクの性質上、納期は将来 4 年間まで及ぶと予想されます。漸進的な進捗を示すために、四半期ごとに少なくとも 1 つの KR を確立してください。
- スコアリング: 現在のリスクスコアから「10」（現在のリスクアペタイトに基づくリスク許容閾値）を差し引いて、リスクを許容範囲内に移動させるために必要な削減を特定する。この差を予測される KR の数で割る。商/剰余は、KR が完了するたびにスコアが削減される量です。この数値は必要に応じて判断的に調整できます。

 競合する優先事項のために、Executive Risk Owner が特定の四半期で Risk Remediation 関連の KR を追求しないことを選択した場合、ビジネスの根拠を文書化するために [Risk Acceptance](/handbook/security/security-assurance/security-risk/third-party-risk-management/#tprm-security-notice-process) を正式化する必要があります。この Risk Acceptance には、追加のリスク是正を遅延させるリスクが、競合する優先事項を実施しないリスクよりも低い理由を説明する根拠が含まれている必要があります。

### STORM レポートスケジュール

以下の表は、FY25 の計画/完了済み活動を概説しています。

|タイミング|活動|
|-----|-----|
|Q1| SRQ |
|Q2| SRQ、年次更新計画、AI Risk Assessment |
|Q3| 更新されたリスクアペタイトとトップ 5 リスクを伴う SRQ |
|Q4| SRQ |

## 例外

この手順に対する唯一の例外は、範囲外（上記で定義されているように）のリスクです。

## 参考文献

- GitLab ハンドブックリファレンス:
  - [GitLab の Communication ページ、Not Public セクション](/handbook/communication/confidentiality-levels/#not-public)
- 外部リファレンス
  - [NIST SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final)
  - [ISO 31000 Risk Management Methodology](https://www.iso.org/standard/65694.html)
  - [ISO 42001 Artificial Intelligence Management System](https://www.iso.org/standard/42001)
