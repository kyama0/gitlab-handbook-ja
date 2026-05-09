---
title: "レッドチームの運用方法"
no_list: true
upstream_path: /handbook/security/security-operations/red-team/how-we-operate/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T17:00:00Z"
translator: claude
stale: false
---

## 一般的な運用ガイドライン

私たちは、GitLab に関連する敵対者を模倣するために、安全かつ効果的にオペレーションを実施することを目指しています。

- [脅威インテリジェンスチーム](../../threat-intelligence/)と協力して、模倣すべき最も関連性の高い脅威を特定します。
- GitLab またはそのチームメンバーに[害を及ぼすことなく](rules-of-engagement.md/#general-safety-guidelines)、倫理的かつ責任を持ってオペレーションを実施します。
- セキュリティ部門の他のメンバーおよびより広い GitLab 社との **良好な信頼関係** を維持します。

私たちの仕事は、半プライベートで時には隠された性質を持つことがあるため、それを補うために、会社の他のメンバーと意図的かつ熱心に協力することは私たちにとって重要です。

**共に勝つ**: 私たちの目標は GitLab のセキュリティを向上させることであり、それは防御チームが持つ目標と同じです。GitLab が勝ち、セキュリティが向上したときに私たちは「勝つ」のであり、それが私たちが超 1337 ハックを実行することによってであれ、SIRT が私たちを足止めすることによってであれ、関係ありません。私たちは防御チームに対する「優位性」を確立しようとしているのではなく、彼らとパートナーを組んでいます。

### 1. 初期アクセスベクトル

初期アクセスを模倣する方法はいくつかあります:

- **リサーチ**。私たちは、悪用するための初期アクセスベクトルを特に探すオペレーションを実施することがあります。これらにはかなりの時間とリソースが必要なため、セキュリティの改善と学習の可能性によって投資が正当化されることを確保します。例えば、[2024 年 Okta バイパス](https://gitlab-com.gitlab.io/gl-security/security-tech-notes/red-team-tech-notes/okta-verify-bypass-sept-2024/)は、Okta に責任を持って開示される前に私たちのチームによってリサーチされました。
- **機会主義的**。レッドチームのメンバーは、[機会主義的攻撃](../#opportunistic-attacks)のコンテキストでもいつでも GitLab に「侵入する」方法を狩ることができます。これにより、発見事項に注意を向け、GitLab が迅速に修復できます。成功した侵入は、現実的な初期アクセスベクトルの証拠として、将来のステルスオペレーションで再利用できます。
- **協力的**。[Club Red](../opportunistic-attacks/#club-red) は、チームメンバーが私たちと協力して初期アクセス計画を策定することを可能にします。彼らのドメイン知識を活用して、GitLab にとってより大きな全体的なセキュリティ結果を得ることができます。
- **侵害想定**。時々、信頼された内部関係者を介して GitLab システムへの初期アクセスを獲得するシナリオを作成します。これは現実的な方法で行われ、実際の侵害を反映する侵害指標 ([IoCs](https://en.wikipedia.org/wiki/Indicator_of_compromise)) を残します。そこから、永続性の確立や権限昇格などの侵害後の戦術と技術に焦点を当てます。

### 2. オペレーション実行

すべてのオペレーションは私たちの[エンゲージメントルール](rules-of-engagement.md)に従います。私たちは、選択された模倣攻撃者による現実的な攻撃をシミュレートするために、現実的な侵害指標を残すよう努めます。

### 3. 内部開示または発見

特定のオペレーションは、検知されるまで、または内部で開示するまで継続されます。オペレーション中に発見した内容によっては（例えば、重大なセキュリティリスクを発見した場合）、リスクを軽減するために早期に開示することがあります。

#### ソーシャル解決

私たちのオペレーションには、特定のチームによって構築されたインフラストラクチャを攻撃すること、個々のチームメンバーをソーシャルエンジニアリングすること、またはチームメンバーによって設定された誤設定によりシステムを侵害することが含まれることがあります。
レトロスペクティブでは、私たちは **常に** 責任を割り当てるのではなく、改善に焦点を当てることを目指します。

ソーシャルエンジニアリングが関与する場合、演習に関わった個人がしっかりとサポートされ、責められないと感じることを確保するために注意する必要があります。
私たちは、ソーシャルエンジニアリングの取り組みに関わった人と会って彼らを安心させ、私たちのオペレーションの一部であってくれたことに感謝することを申し出ます。

私たちのオペレーションは個人ではなく **プロセス** をテストするので、誰にも何か悪いことをしたと感じてほしくないと **決して** 思っていません。

### 4. レポートとセキュリティ改善のための推奨事項

その後、オペレーションを要約し、セキュリティ態勢を改善するための私たちの推奨事項をまとめた[レポート](#reporting)をリリースします。[Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-public/resources/red-team-issue-templates)を使用して Issue を作成し、関連するラベルを適用し、これを使用して[メトリクス](#red-team-metrics)を追跡します。次に、関連する検知を作成できるように、ツールと技術をブルーチームに提供します。

私たちはしばしば [Signals Engineering](../../signals-engineering/) および [Security Incident Response Team (SIRT)](../../sirt/) と協力して、発見事項、攻撃手順、検知とアラートをレビューします。

#### GitLab 全体のセキュリティ推奨事項

推奨事項は GitLab 内のどのグループに対しても提起でき、組織全体でセキュリティ改善のための柔軟なシステムを作成します。推奨事項を提起するときは:

- **適切なグループを対象とする** - インフラストラクチャチーム、プロダクトチーム、または[インフラストラクチャセキュリティ](/handbook/security/product-security/infrastructure-security/)、[セキュリティアイデンティティ](/handbook/security/identity/)、[コーポレートセキュリティ](/handbook/security/corporate/)などのセキュリティチームに対して推奨事項を直接送ります。
  - 適切な Issue トラッカーで Issue を作成し、適切なテンプレートを使用して、適切なチームに可視化されることを確保します。
- **明確なコンテキストを提供する** - リスク、影響、推奨事項の根拠に関する情報を含めます。[このテンプレート](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-public/resources/red-team-issue-templates/-/blob/main/.gitlab/issue_templates/recommendation.md)を使用してください。
- **ドメイン専門知識を活用する** - 受け取るグループが最も適切な実装アプローチを決定します。
- **結果を追跡する** - GitLab の計画機能を使用して採用を追跡し、実装をモニタリングし、セキュリティ改善を測定します。

このクロスファンクショナルなアプローチは、セキュリティの考慮事項が、専用のセキュリティチーム内にサイロ化されるのではなく、組織全体に統合されることを保証します。

### レポート {#reporting}

すべてのオペレーションは最終レポートで終了します。私たちは公開で共有されている[Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-public/resources/red-team-issue-templates)を使用します。

セキュリティリスクは皆に影響を与えるため、レポートを幅広い読者にとってアプローチしやすく消化しやすいものにすることが不可欠です。私たちの目標は、技術的またはセキュリティのバックグラウンドを持たない人を含む、社内の誰もがレポートを理解できるようにすることなので、[シンプルな言語を使用する](/handbook/communication/#simple-language)よう努めます。

必要だと感じた場合、短い（5 分以下の）ビデオ要約も提供します。

ステルスまたはより可視性の高いオペレーションについては、ストーリーを会社全体と共有することが有益です。その場合、Slack チャンネル `#whats-happening-at-gitlab` に以下を投稿し、`#security` にもクロスポストします:

- オペレーションの非常に短い要約（ビデオ概要があればそれを含む）
- 最終レポートへのリンク
- 質問とフィードバックを募集するためのレトロスペクティブ Issue へのリンク
- 情報を [SAFE](/handbook/legal/safe-framework/#how-do-we-reinforce-safe) に保つための免責事項。
- すべてのチームメンバーが毎回オペレーションに参加するわけではないため、認知のために個々のオペレーション参加者と Security Incident Response Team (SIRT) 全体のタグ付きリスト。

これにより、組織全体でセキュリティ意識の文化を育み、誰もが私たちの仕事から恩恵を受けられるようにします。

### リーダーシップリードアウト {#leadership-read-outs}

ステルスオペレーションについては、最終レポートが提供された後、集中したリーダーシップリードアウトを実施します。これは、セキュリティリーダーシップとオペレーションに関与したチームのリーダーとの 45〜60 分のセッションで、構造化されたプレゼンテーションに続いて Q&A で構成されます。

リーダーシップリードアウトの目標は以下の通りです:

- リーダーシップに、私たちが模倣する脅威シナリオとその現実世界への影響について直接的な可視性を与える
- 部屋にいる意思決定者と推奨事項のオーナーシップを確認する
- 書面のレポートだけでは失われがちな、私たちの方法論と思考をレッドチームが説明する機会を提供する

リードアウトは標準的な構造に従います: イントロダクション、オペレーションの目的と結果、攻撃パスのウォークスルー、セキュリティ上の観察、脅威ランドスケープへの影響、推奨事項とオーナーシップ、そして締めくくりの Q&A。準備を追跡しセッションのアウトプットをキャプチャするために、[`stealth-09-leadership-readout`](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-public/resources/red-team-issue-templates/-/blob/main/.gitlab/issue_templates/stealth-09-leadership-readout.md) Issue テンプレートを使用します。

タイムゾーンが必要とする場合、すべての関連リーダーが出席できることを確保するために 2 回目のセッションをスケジュールする必要があります。録画されることもあります。

## レッドチーム成熟度モデル

私たちは、進捗を測定し意思決定を導くのに役立つカスタムの成熟度モデルを使用しています。これは、[Capabilities Maturity Model (CMM)](https://en.wikipedia.org/wiki/Capability_Maturity_Model) を緩く基にしています。[私たちのモデル](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-internal/red-team-maturity-model/-/boards/5905165)（内部のみで利用可能）には 5 段階の成熟度が含まれており、それぞれに私たちが実証しようと努力する非常に具体的な行動と、私たちが達成したい状態が含まれています。

## レッドチームメトリクス {#red-team-metrics}

### 採用率

成功するレッドチームプログラムは、組織によって受け入れられ実装される推奨事項を通じて組織のセキュリティを強化します。私たちはこれらの推奨事項のライフサイクルを GitLab.com を使用して実装まで追跡し、このメトリクスを「採用率」と呼んでいます。

推奨事項は、それらに対処できるチームに最も近いプロジェクトの GitLab.com Issue として始まります。推奨事項はラベルを使用して分類します:

- 検知とアラート (`RTRec::Detection`)
- セキュリティ制御 (`RTRec::Control`)
- プロセスと手順 (`RTRec::Process`)

Issue がクローズされると、最終的な結果を表す 2 つ目のラベルを追加します:

- 完全に採用されてクローズ (`RecOutcome::Adopted`)
- 部分的に採用されてクローズ (`RecOutcome::PartiallyAdopted`)
- 採用されずにクローズ (`RecOutcome::NotAdopted`)

結果ラベルは、推奨事項を提供してから 1 週間以内に Issue に追加されます。スケジュールされた CI パイプラインが、分類ラベル付きの Issue をチェックして結果があることを確認します。

### MITRE ATT&CK マッピング

[MITRE ATT&CK](https://attack.mitre.org) は、サイバー攻撃を分類し記述するためのフレームワークです。私たちは ATT&CK を広範に使用しています。なぜなら、それは私たちのオペレーションを現実的な脅威に合わせ、セキュリティグループ全体で共通言語を話すのに役立つからです。

私たちは GitLab CI パイプラインと GitLab Pages の組み合わせを使用して、MITRE の 2 つのレポートツールを構築しホストしています:

- [MITRE ATT&CK Flow](https://github.com/center-for-threat-informed-defense/attack-flow)
  - [私たちの内部自動化プロジェクト](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-internal/automation/ci-attack-flow)
  - [私たちの内部ビルド](https://flow.gl-redteam.com/)
- [MITRE ATT&CK Navigator](https://mitre-attack.github.io/attack-navigator/)
  - [私たちの内部自動化プロジェクト](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-internal/automation/ci-attack-navigator)
  - [私たちの内部ビルド](https://navigator.gl-redteam.com/)
  - [プロジェクトを説明するパブリックブログ](https://about.gitlab.com/blog/2023/08/09/gitlab-mitre-attack-navigator/)

完了した各オペレーションについて、攻撃パスと侵害指標を可視化するためのフローチャートを構築します。このチャートは [STIX 2.1 準拠](https://center-for-threat-informed-defense.github.io/attack-flow/language/) JSON ファイルとしてエクスポートでき、機械可読で、分析のために他のツールにインポートできます。

その同じ ATT&CK Flow ファイルが ATT&CK Navigator プロジェクトにインポートされ、ATT&CK マトリックス全体での私たちのカバレッジを可視化するヒートマップを生成します。各オペレーションのヒートマップを 1 つ、また以前のすべてのオペレーションを組み合わせたヒートマップを維持しています。

これは、私たちが模倣した攻撃技術の種類を可視化する素晴らしい方法であり、将来のオペレーションで焦点を当てるべき領域を理解するのに役立ちます。

## これはレッドチームですか？ {#is-this-the-red-team}

### なぜ私たちはこの質問に答えないのか

レッドチームのオペレーションの目標は、しばしば、実際の脅威に対応する際の私たちのポリシーと手順をテストすることです。これには、疑わしい活動を特定し、その脅威を調査し対応するために適切なランブックに従うことが含まれます。

任意のチームメンバーが、いつでも、単に _「ねえ、これは怪しく見える。これは私たちのレッドチームですか？」_ と尋ねることができれば、この機会は失われます。**代わりに、すべての疑わしい活動は、悪意がある可能性があるものとして扱い、それに応じて対応する必要があります**。

私たちは、指定されたチームメンバーが特定の活動が彼らに属するかどうかをレッドチームに尋ねることができるプライベート Slack チャンネルを設置しています。これにより、エスカレーションが行き過ぎることなく、検知と対応を実践する現実的な機会を提供するのに役立ちます。例えば、模倣された攻撃が本番運用に影響を与えたり、第三者にエスカレーションしたりすることは望ましくありません。

GitLab のマネージャーは、いつでも[「レッドチーム開示リクエスト」を送信](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-internal/red-team-operations/-/issues/new?issuable_template=request-for-disclosure)できます。リクエストに進行中のレッドチームオペレーションに関連する証拠が含まれている場合、上記の Slack チャンネルで次のステップを議論します。

このプロセスについては、エンゲージメントルールの[「開示リクエスト」セクション](rules-of-engagement#requests-for-disclosure)で詳しく読むことができます。

### レッドチームはこの質問にどのように応答するか

レッドチームが、上記の指定されたチームメンバー以外の誰かから _「これはあなたですか？」_ と尋ねられた場合、以下のテキストで応答します:

> Thanks for your vigilance! Any suspicious activity should be treated as potentially malicious. If you'd like to contact security, you can follow the process [here](../../sirt/engaging-security-on-call).
>
> Red Team operations provide an opportunity to practice detecting and responding to real-world attacks, and revealing an operation early might mean we miss out on that opportunity. Because of this, we have a policy to neither confirm nor deny whether an activity belongs to us. You can read more about this policy here: [[.](/handbook/security/security-operations/red-team/how-we-operate/./#is-this-the-red-team)](/handbook/security/security-operations/red-team/how-we-operate/./#is-this-the-red-team).

### 他の人はこの質問にどのように応答すべきか

私たちはすべての活動を悪意がある可能性があるものとして扱いたいため、この質問を受けた他の誰もが一貫した応答を使用すべきです。自分の言葉を使用しても構いません。以下はガイドとして使用できます:

> We want to treat any suspicious activity as potentially malicious. Let's continue following our normal procedures to report and investigate this. Any Red Team operation has controls in place to keep things from escalating too far. You can read more about this here: [[.](/handbook/security/security-operations/red-team/how-we-operate/./#is-this-the-red-team)](/handbook/security/security-operations/red-team/how-we-operate/./#is-this-the-red-team).

この質問を受けた人がたまたまセキュリティディレクターまたは進行中のステルスオペレーションの信頼された参加者である場合、確立されたチャンネルを使用してレッドチームと連絡を取ることができます。
