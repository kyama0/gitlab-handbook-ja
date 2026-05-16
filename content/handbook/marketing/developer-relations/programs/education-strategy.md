---
title: "Education グロース戦略"
upstream_path: /handbook/marketing/developer-relations/programs/education-strategy/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-19T19:48:12+00:00"
---

## Education グロース戦略

この戦略は、教育アウトリーチを業界への影響力に変えるファネルを作り出すもので、[マーケティングのカスタマージャーニー](/handbook/marketing/#marketing-alignment)と整合しています。私たちの取り組みは認知を促進し、エバンジェリズムを生み出し、学生が労働市場へ移行する際には検討を加速し、コンバージョンを促進します。私たちは、4 つの並行する戦略領域にわたって Education アウトリーチを拡大します: 機関に対する Establishing Preference、教育者による Accelerating Enablement、学生間での Generating Advocacy、そして Influenced Professional への Nurturing Growth です。

このモデルでは、エコシステムの各セグメントを 2 つの相補的な経路を通じて成長させます: 上流のセグメントを拡大すること（機関が教育者を強化し、教育者が学生を強化する）と、その特定オーディエンス向けの個別プログラムによる拡大です。学生は最終的に Influenced Professionals となって労働市場に参入し、学んだスキル・ツール・方法論を持ち込むことで、教育からキャリアへの自然なパイプラインを通じて長期的な市場インパクトを創出します。

```mermaid
flowchart LR
  subgraph growth["Education Growth"]
    ii["Institutions Increase"]:::segment
    ei["Educators Increase"]:::segment
    si["Students Increase"]:::segment
    ip["Influenced Professionals"]:::segment

    outreach("Expand Education Outreach"):::area
    prefer("Establish Preference"):::area
    enable("Accelerate Enablement"):::area
    adopt("Generate Advocacy"):::area
    grow("Nurture Growth"):::area

    outreach-->prefer
    outreach-->enable
    outreach-->adopt
    outreach-->grow
    prefer-->ii
    ii -->ei
    enable-->ei
    ei-->si
    adopt-->si
    si & grow---C[ ]:::empty-->ip
  end

  classDef segment fill:#9370DB,stroke:#9370DB
  classDef area color:#6b4fbb, stroke:#9370DB
  classDef empty width:0px,height:0px;
 ```

## KPI

| セグメント | Key Performance Indicator (KPI) |
|-----------------|---------------------------------|
| Institutions | [GitLab for Education 四半期アクティブシート、MAU（Monthly Active Users）](https://10az.online.tableau.com/#/site/gitlab/views/CommunityEDUAndOSSDashboard/CommunityEDUAndOSSProgramDashboard?:iid=1) |
| Educators | TBD 教育者数、TBD コース数 |
| Students | TBD アンバサダー数 |
| Influenced Professionals | コントリビューター数、コントリビューション数、TBD 顧客接点数 |

## 優先事項

私たちは、現在のキャパシティ内でインパクトを最大化するため、Institutions セグメントと、主要領域の以下の項目を優先しています。すべての取り組みに価値はありますが、この集中したアプローチによって、より効果的に意義ある変化を推進できます。

| オーディエンス | ステータス |
|----------|-----------|
| Institutions | 拡張中 |
| Educators | ロードマップ |
| Students | ロードマップ |

| 主要領域 | イニシアチブ | ステータス |
|----------|-----------|--------|
| **Expand Education Outreach** | Events | [進行中](https://gitlab.com/groups/gitlab-org/developer-relations/strategy-programs/-/epic_boards/2073660?label_name[]=Strategy%20Programs%3A%3AGitLab%20for%20Education&label_name[]=Outreach%3A%3AEvents) |
| | References | [進行中](https://gitlab.com/groups/gitlab-org/developer-relations/strategy-programs/-/epic_boards/2073660?label_name[]=Strategy%20Programs%3A%3AGitLab%20for%20Education&label_name[]=Outreach%3A%3AReference) |
| | Campaigns | [進行中](https://gitlab.com/groups/gitlab-org/developer-relations/strategy-programs/-/epic_boards/2073660?label_name[]=Strategy%20Programs%3A%3AGitLab%20for%20Education&label_name[]=Outreach%3A%3ACampaign) |
| **Establish Preference** | Compliance Support and Integrations | ロードマップ |
| | Strategic Partnerships | ロードマップ |
| | Sponsored Activities | ロードマップ |
| **Accelerate Enablement** | Teaching Resources & Curriculum Materials | ロードマップ |
| | Faculty Development | ロードマップ |
| | Accessible Support | ロードマップ |
| **Generate Advocacy** | Student Ambassador Program | ロードマップ |
| | Student Engagement | ロードマップ |
| | Benefits & Perks | ロードマップ |
| **Nurture Growth** | Contributors Ecosystem Transition Development | ロードマップ |
| | Career Development | ロードマップ |
| | Professional Networking | ロードマップ |

### セグメント育成

教育エコシステムの各セグメント内に、構造化されたライフサイクル管理を通じて持続可能なコミュニティを構築します。明確なメンバージャーニーを定義し、オンボーディング、エンゲージメントタッチポイント、リテンション戦略を策定して、メンバーが新しい参加者を自然にリクルートし支援するチャンピオンとなる、自己強化サイクルを生み出します。

### Expand Education Outreach

機関、教育者、学生に対する認知を高め、エンゲージメントを促進します。私たちのアウトリーチ活動は、製品・プログラム・リソースを潜在的な採用者に対して可視化しアクセス可能にすることで、後続のすべての成長の基盤を築きます。

#### Events

イベントを通じてつながりと発見の機会を創出します。魅力的な集まりを開催してつながりを育み、知識を共有し、成果を称えることで、関係構築と信頼を加速する記憶に残るタッチポイントを作ります。戦略的なイベントに参加して認知を高め、プログラムの価値を示し、新しいメンバーを引き付けます。

#### References

価値を示し評価のハードルを下げるための、信頼性が高く共有可能なコンテンツを提供します。質の高い資料は、教育者や管理者が情報に基づいた意思決定を行い、組織内で導入を後押しすることを可能にします。

#### Online Engagement

教育者と学生がすでに過ごしている場所で出会い、公共スペースでコミュニティを構築し、創造的なキャンペーンや取り組みを通じてサクセスストーリーを増幅します。これには、デジタルプレゼンス、コミュニティの祝賀、プロモーション活動、有機的な発見やピアツーピアの推奨を可能にする戦略的なタッチポイントが含まれます。

### Establish Preference

戦略的パートナーシップ、信頼性の構築、教育目標との整合性を通じて、私たちのプラットフォームを優先選択肢として位置づけます。教育エコシステムでの早期の露出は、認識される有用性と認識される使いやすさを高め、加速された[テクノロジー受容](https://en.wikipedia.org/wiki/Technology_acceptance_model)を通じて戦略的優位性を創出します。

#### Strategic Partnerships

政府、教育アドバイザー、主要な EdTech 企業、その他の教育エコシステムの影響力ある組織と意義ある関係を構築します。パートナーシップは正当性をもたらし、リーチを拡張し、整合した取り組みと共有オーディエンスを通じてスケールの達成を助けます。

#### Compliance Support and Integrations

私たちのプラットフォームが教育標準とプライバシー規制を満たし、既存の教育テクノロジーシステムとのシームレスな統合をサポートすることで、機関の障壁を取り除きます。コンプライアンスと統合の機能は、機関での採用と持続的な利用に不可欠です。

#### Sponsored Activities

教育の卓越性を高め、優れた成果を認識し、機関の価値観と当社のブランドを整合させる活動を支援・スポンサーします。スポンサーシップは教育コミュニティへのコミットメントを示し、可視性と善意を生み、認知拡大を通じて新しいプログラムメンバーの獲得に役立ちます。

### Accelerate Enablement

教育者により多くの学生を効果的に教えられる高品質なリソース、トレーニング、サポートを提供します。エネーブルメントは、教室での採用障壁を減らし、教育成果を改善します。

#### Teaching Resources & Curriculum Materials

準備時間を短縮し、教育の質を向上させる、すぐに使える教育学的に健全な教材を提供します。教育者は高品質なリソースが直ちに利用可能なときに採用する可能性が高くなります。

#### Faculty Development

教育者の自信と能力を構築する、関連性のあるコンテンツ、教材、学習パスをキュレーション・ハイライトします。新しいツールや教育的アプローチを教育に効果的に統合するのに役立つ、トレーニングリソース、ベストプラクティス、ガイダンスに教育者を結びつけます。

#### Accessible Support

レスポンシブなサポートとセルフサービスのリソースを通じて、教育者が自信を持ち、迅速に問題を解決し、自分で答えを見つけられるようにします。アクセシブルなヘルプはフラストレーションを減らし、放棄を防ぎます。

### Generate Advocacy

ピアにプラットフォームを積極的に推奨し、自分のスキルと好みを職業キャリアへ持ち込む熱心な学生アドボケイトを生み出します。学生のアドボカシーは有機的な成長と長期的な市場への影響力を推進します。

#### Student Ambassador Program

学生リーダーに、ピアが業界への移行に必要なスキルを開発するのを手助けする手段と、キャンパスでプラットフォームを伝道してグラスルーツの勢いを構築する手段を提供します。学生アンバサダーは、機関の指示よりも共鳴する、本物のピアツーピアの推奨を提供します。

#### Student Engagement

コンペティション、チャレンジ、共同プロジェクト、コミュニティ参加を通じて、学生がコースワークを超えてプラットフォームと深く関わる意味のある機会を提供します。エンゲージしている学生は、自分のポジティブな経験を共有するアドボケイトとなります。

#### Benefits & Perks

学習体験を強化し、具体的な価値を示すリソースとオファリングへの独占的なアクセスを学生に提供します。魅力的な特典パッケージは、採用、リテンションを高め、有機的なアドボカシーにつながる善意を生み出します。

### Nurture Growth

リテンション、エンゲージメントの深化、エコシステムを継続的に改善するフィードバックループの作成を通じて、長期的な成長を維持します。グロース育成は、コミュニティが時間とともに活気を持ち価値を保ち続けることを保証します。

#### Contributors Ecosystem Transition

学生がより広範な GitLab コントリビューターエコシステムに移行し、世界中の何千もの顧客が利用するプロダクションシステムにコントリビュートできる経路を作ります。これは、意義あるポートフォリオ構築の機会とキャリア加速を提供しながら、GitLab とのつながりを深めます。

#### Career Development

検証可能な認定資格、キャリアリソース、労働市場への移行を加速する機会を通じて、プラットフォームのスキルをキャリアの成果に直接結びつけます。キャリアとの整合性は学生のモチベーションを高め、プロフェッショナルな世界でアドボケイトを生み出します。

#### Professional Networking

より広範な GitLab コミュニティとのつながりとクロスポリネーションを促進します。学生を業界の専門家、GitLab チームメンバー、経験豊富なコミュニティメンバーと結びつけることで、プロフェッショナルとしての発展を加速し、永続的な関係を生み出します。
