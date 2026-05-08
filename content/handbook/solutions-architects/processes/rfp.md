---
title: RFI/RFP プロセス
description: >-
  ソリューションアーキテクトが支援する RFI/RFP プロセス
upstream_path: /handbook/solutions-architects/processes/rfp/
upstream_sha: 5eeae5a75957f16a16538b0ec5f531ce723f3a8a
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
---

## RFI/RFP プロセス

Request for Information (RFI) または Request for Proposal (RFP) は、一般的に RFx と呼ばれます。これは Public Sector における標準的な営業プロセスの一部ですが、エンタープライズのお客様でも発生する可能性があります。Field Security Team は、GitLab フィールドチーム向けに RFP プロセスを支援し簡素化するためのプロセスを作成しており、[RFP Process ハンドブックページ](/handbook/security/security-assurance/field-security/field-security-rfp/)で確認できます。このプロセス外で RFx に応答する必要がある場合は、以下のガイダンスを利用してください。

### RFx 応答作成のベストプラクティス

RFx は、Request for Information、Request for Proposal、Request for Quote (RFQ) などを含む一般的なカテゴリーです。RFI は一般的に RFP よりも構造化されていません。RFQ では技術的な書き込みが必要となることはまれですが、特に RFx が「同等品 (or alike)」製品を要求する場合、技術的なインプットが必要になることがあります。ソリューションアーキテクトは、技術的な依頼やソリューション要件が多数ある RFI と RFP への応答で大きな役割を果たすことができます。

### 応答すべき RFI と RFP の評価

応答時によく使われる言葉に「Make sure you answer the mail (依頼内容にしっかり答えること)」があります。これには 2 つの含意があります:

1. 求められていることを評価し、それに対応するベストの試みを行う、そして
1. 質問に直接回答し、コンテキストを提供する

しかしより重要なのは、製品適合があることを確実にすることです。RFI/RFP で求められていることが GitLab で直接満たされない場合、または異なるソフトウェアにあまりにも見える場合は、立ち止まって Strategic Account Executive または Inside Sales Representative に相談してください。要件が GitLab の機能と一致しないように見える場合は、戦略的なインパクトも特定してください。GitLab が RFx の一部にしか適合しない場合、応答に含まれる可能性のある他のプレイヤーを理解するため、Strategic Account Executive および/または Inside Sales Representative と協働してください。

### RFx への応答プロセス

一般的に、RFx は固定のタイムラインを持ち、GitLab 内のさまざまな機能 (例: Solution Architect、Professional Services、Legal など) からのインプットが必要です。DRI (Direct Responsible Individual) はそのアカウントの Strategic Account Executive (SAE) です。GitLab Issue は調整、タスク割り当て、進捗追跡を支援します。Issue を作成するベストの場所は、存在する場合は Account プロジェクト内、または、そうしたアクティビティが作成され追跡される中央プロジェクト内です。場合によっては、適切な場所が他に見つからない場合に、任意の個人プロジェクトスペースに作成し、他のチームメンバーと共有することもできます。Issue にアウトラインを作成しましょう。アウトラインには以下を含めるべきです:

1. 組織化に関するお客様の指示
1. すべての質問と要件に答える情報の合理的な組織化
1. 提案ドキュメントの追いやすい構造
1. すべての要件への準拠
1. Salesforce の適切な Account または Opportunity へのリンク

通常 SAE が Issue を作成し、SA や他の必要なチームメンバーとともに Issue にアサインされるべきです。各チームメンバーの職務が明確になるように、タスクをレイアウトしてオーナーを割り当てます。最後に、合意された完了日に従って期限を割り当てます — お客様への提出公表期限の少なくとも 24〜36 時間前に設定してください。これは、最終調整や必要な承認のための小さなバッファを提供します。タスク割り当てに曖昧さがある場合は、プロセスを加速するためにすべての関連チームメンバーとの同期ミーティングが推奨されます。

### RFx への応答

Issue が作成されたら、Google ドキュメントを作成し詳細を埋め始めます。作業ドキュメントへの Google ドキュメントリンクを Issue に挿入してください。

RFx が以下を必要とする場合:

- セキュリティアンケートまたは法的レビュー: ハンドブックの [RFP Process ページ](/handbook/security/security-assurance/field-security/)で説明されているプロセスに従ってください。
- プロフェッショナルサービスのコンポーネント: [Selling Professional Services](/handbook/customer-success/professional-services-engineering/selling/) ハンドブックページが役立ちます。

これらのプロセスのそれぞれは、Issue の作成を必要とする可能性があります。追跡目的で、これらの Issue をメインの応答 Issue にリンクしてください。

`Recommendation:` 応答ドキュメントは Google Drive の適切な Sales Account ディレクトリ/フォルダに配置すべきです。他の人が簡単に見つけて再利用できるよう、そのドキュメントへのリンクを [Catalog Document](https://docs.google.com/document/d/1BW9WIYWkg_KG2kZu31IJofavgu4vt5Ac_jcJ3xAtKrg/edit?usp=sharing) に含めてください。

## RFI に関する詳細

RFI は一般的に調達を形成するために発行されます。状況によっては、お客様がすでにプロトコルに従ったアドバイザリチームを持っている場合があり、RFI はプロセスのほんの 1 ステップです。RFI は別途指定されない限り一般的に拘束力はありません。RFI の質問への回答は正確である必要はありません。基礎を固めるための理想的な記述や、GitLab が提供するものについてお客様を教育するためのピボットポイントを含むことができます。会話を持つ能力がないため、GitLab 価値フレームワーク応答方法論に従うのが良いでしょう。RFI はポジショニングに関するものです。読み手の関心を引くことができる以下の要素についてコンテキストを提供してください:

- 製品のポジショニングと価値
- 機能に関する真実
- ソリューションオプションと柔軟性
- ソリューションによってリスクがどう軽減されるか

一部の RFI には文字数制限がありますが、必ず確認し、ある場合は注意してください。製品が何をするかの簡単な概要から始めましょう。GitLab Marketing は検証されたテキストで素晴らしい仕事をしています。たとえば、[Stages of the DevOps Workflow](https://about.gitlab.com/stages-devops-lifecycle/) の各ステージに関する書き込みを利用してください。特に RFI では、車輪の再発明をしてはいけません。シンプルで簡潔に保ってください。

RFI はオープンエンドな質問をすることがあります。これは詳細なソリューション応答を提供するのに適しています。言葉をシンプルに保ち、GitLab が提供するソリューションを記述してください。GitLab が何かを行うかどうかを述べる代わりに、GitLab がそれを行わない理由、ロードマップにあるか、または彼らが回避策をどう実装するかに読み手を導いてください。

RFI に応答する際、製品がお客様の問題をどう解決するかを文書化することが重要ですが、その製品の背後にある会社を含めることも重要です。GitLab のオールリモートのリーダーシップ、企業価値、文化、プロフェッショナルサービスの提供は、お客様との関係全体を形作ります。

### ドキュメントへのリンクを含める

一般的に、Public Sector の応答では、ドキュメントへのリンクを追加することは良いプラクティスではありません。本質的に、読み手に余計な作業をさせるものはうまくいきません。読み手が提供されたリンクに容易にアクセスできない場合もあります。

たとえば、質問が次の製品リリースのロードマップを求めている場合、私たちのロードマップへのリンクを含めるのは良いアイデアですが、お客様が GitLab のリリースプロセスのダイナミックな性質を理解できるよう、GitLab のリリース速度と一貫性についても説明します。リンクが望ましい別のケースは、関連するお客様のユースケースが参照される場合です。

ただし、お客様が GitLab のアーキテクチャのような記述的な概念を求めている場合は、それを使ってインラインで可能な限り多くの詳細を含め、なぜそのアーキテクチャなのかのサマリ (メリットを含む) を含め、その後に詳細を読んでもらうためのリンクを含めましょう。また、可能な限り画像とスクリーンショットを含めることを強く推奨します。

お客様が CI プロセスや他の複雑なプロセスの説明を求める場合があります。これらのケースでは、競合製品から GitLab を差別化する多くの詳細を含め、私たちのドキュメントから可能な限り多くを複製することは許容されます。CI を例として、GitLab CI がどう動作するかの記述、yml ファイルの記述、yml ファイルドキュメントへのリンク、Auto DevOps、Directed Acyclic Graphs、マルチプロジェクトパイプラインなど GitLab が提供するユニークまたは差別化された機能に関する情報を含めてください。

### 応答記述のヒントとコツ

- 可能な限り[受動態ではなく能動態](https://www.grammarly.com/blog/sentences/active-vs-passive-voice/)を使う
- 代名詞を排除する: 例 1、「Our CI will do x」ではなく「GitLab CI will do x」。例 2、「We will x」ではなく「The GitLab team will x」。
- 応答の組織化はコンテンツと同じくらい重要です
- 既存のマーケティング情報を活用し、GitLab ソリューション全体の幅を提示する強力なイントロダクションとサマリを作成する
- 特定の要件への応答が期待される場合、応答テキスト内で対応している要件番号への注記を追加する: 例、「GitLab's SAST scanner will analyze your source code for known vulnerabilities (Req 1.a.1)」
- 可能な限りお客様の用語を使用する
- 可能な限り関連するお客様のユースケースを含める

### 完了済み RFP へのリンク

GitLab チームメンバーは、[こちらのリスト](https://internal.gitlab.com/handbook/solutions-architecture/rfp/)を参照してください。
