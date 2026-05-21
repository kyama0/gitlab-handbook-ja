---
title: ソリューションアーキテクト - サブジェクトマターエキスパート
upstream_path: /handbook/solutions-architects/sa-practices/subject-matter-experts/
upstream_sha: fb150f3a4f831172cf23c7f0d75b0d6310a68972
translated_at: "2026-05-08T18:59:21Z"
translator: claude
stale: false
lastmod: "2026-05-08T14:07:20+02:00"
---

サブジェクトマターエキスパート（SME）プログラムは、ソリューションアーキテクト（SA）が顧客により良いサポートを提供できるようにすることを目的としたイニシアチブです。このプログラムでは、AI、セキュリティ、アジャイルプランニングなどの主要領域でサブジェクトマターエキスパートを特定し、オンボーディングします。

SME は、地域内の SA が顧客のより詳細な質問に答え、深い技術的専門知識を提供し、必要に応じて顧客のデモやプレゼンテーションを支援するソリューションアーキテクトです。

## ゴール

SME プログラムのゴールは以下のとおりです：

- 仲間の SA に、顧客を効果的にサポートするために必要な知識と専門知識を提供する。  
- SA が答えなければならない質問の数を減らすことで、顧客サポートの品質を向上させる。  
- 質問に迅速かつ正確に答えられるエキスパートへのアクセスを提供することで、顧客満足度を向上させる。

上記のゴールを達成するために、[SME プログラムは適切に構造化され、役割と責任が定義されます](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-program.md)。

SME プログラムのその他の領域には以下が含まれます：

1. [SME ロジスティクスを完了する - コラボレーションプロジェクト、Google Groups、Slack チャンネル](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-operations.md)
2. [SME のノミネーションとオンボーディング \- SME になるためのプロセス](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-program/#sme-selection)  
3. [SME リクエストプロセス](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-request/) - 機会で技術的なガイダンスと専門知識を提供するために SME をリクエストする方法  
4. [コラテラル、記事、ベストプラクティスの作成および収集をリクエストする](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-collateral/)  
5. [定期的な SME ケイデンスを開催する](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-cadences/)
6. [顧客からフィードバックを集めてプロダクトマネジメントに伝えるプロセス](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-customer-feedback/)  
7. [プロダクトマネジメントとどのように関わり、エスカレーションするか](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-engage-pm/)

## 専門領域

正式な PM エンゲージメントを伴う SME プログラムは、当初以下の領域に焦点を当てます：

- AI
- アプリケーションセキュリティ
- アジャイルプランニング
- Dedicated

以下の SME 領域も利用可能ですが、まだ正式な PM エンゲージメントは必要としません：

- CICD と Runner
- メトリクスとオブザーバビリティ
- 組み込み DevOps システム

その他の領域も、顧客や SA のニーズに応じて将来的に追加される可能性があります。例：

- テレコミュニケーションなどの他の業種
- MLOps

## 責任

要約すると、SME の責任には以下が含まれます

- 技術的なガイダンスと専門知識を提供する
- 各 SME 領域のコラテラルを維持する。現在、CSM SME は各 SME 領域のリソースと素材を集めています。これらは Highspot の [CS SME Hub of content](https://gitlab.highspot.com/items/667095b95cc9b08c87d40b68?lfrm=srp.0) で維持されています。
- 顧客からフィードバックを集める
- プロダクトマネジメントと関わる。

詳細には、SME は以下に責任を持ちます：

- **現場や顧客に技術的なガイダンスと専門知識を提供する**。多くの場合、以下の形で：
  - 自身の専門領域の最新トレンドを把握する。
  - リージョナルコール中の「SME Corner」で SA と CSM に更新を提供する。
  - `sme` Slack チャンネルおよび公式の知識ベースである [StackOverFlow for Teams](/handbook/solutions-architects/tools-and-resources/#stack-overflow-for-teams) での SA からの質問に答える。
  - 機会で支援するための [SA からのリクエストに対応する](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-request/)。
  - 他の SA や CSM をイネーブルメントするためのオフィスアワー
  - ワークショップの更新でデモアーキテクトと協働し、新機能の採用でソリューションアーキテクトを支援する。
  - [Technical Skills Exchange](https://gitlab.com/gitlab-com/sales-team/field-operations/enablement/-/issues/2800) などの現場イネーブルメントアクティビティに参加する。
  - [カスタマーサクセスプラン](/handbook/solutions-architects/processes/customer-success-plan/) のレビュー
  - [Deliberate Practice](/handbook/solutions-architects/sa-practices/deliberate-practice/)
  - チームの知識を育むため、同じトピックの SME 間および仲間の SA との間で [communities of practice](/handbook/solutions-architects/sa-practices/communities-of-practice/) を形成する。
- **コラテラルをハンドブックや Highspot で維持する**（[CS SME Hub of content](https://gitlab.highspot.com/items/667095b95cc9b08c87d40b68?lfrm=srp.0) など）。アカウントチームが独立して使用できるようにし、以下を含む：
  - SME のリスト（StackOverFlow にもある）と SME アソシエイトを維持する
  - 自身の専門領域に関するトレーニング素材を開発し提供する。
  - SA がディスカバリプロセス中に使用するディスカバリ質問のリストを作成する
  - カテゴリーごとに顧客から頻繁にされる質問を作成する
  - 録画されたイネーブルメントセッションを集めてカテゴリー化する
  - 各領域の FAQ を維持するため PM と協働する
  - ゴールデン [デモ](/handbook/solutions-architects/demonstrations/) を作成する
  - [ハンズオンワークショップ](/handbook/solutions-architects/tools-and-resources/workshop/)
  - 技術評価ガイドライン
  - [POV](/handbook/solutions-architects/playbooks/pov/) テンプレート
  - 一般的な概念アーキテクチャ図
  - 競合インテリジェンス
  - SA SME のオンボーディングが更新されることを確実にするため Enablement と協働する。SA が特定の領域で専門知識を得られるタスクの順序をまとめる。
- **プロダクトマネジメントと関わり、現場から顧客フィードバックを集めて** プロダクトおよびアカウントチームと共有する：
  - 対応する [プロダクトグループ](/handbook/product/categories/#devops-stages) のプロダクトマネージャーのカウンターパートになる
  - PM と通信し、共有された通信メディアを介して現場を更新する
  - SA が PM レビュー用に顧客フィードバックを提出していることを確認する
  - パターンの提出をレビューし分析し、SA からより多くのコンテキストを得る
  - SME 領域リードと少なくとも月に 1 回、非同期で会い、提出物を調整し、優先順位を割り当て、PM への提示の物語を準備する
  - 顧客フィードバックと PM ステータスの Issue ボードを維持する
  - PM と月に 1 回会い、優先度の高い提出物をレビューする
  - PM から更新を得る、または行われている作業について
  - 提出物が更新されていることを確認する
  - プロダクトドキュメントに貢献する

SME アソシエイト、SME 領域リード/DRI、SME プログラムリードなどの他の役割については、詳細について [SME 責任](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-program/#sme-responsibilities) をご覧ください。

## 時間のコミットメント

SME は、SME 関連のアクティビティに約 10〜15% の時間を割くことが期待されています。これには以下が含まれます：

- 他の SA からの質問に答える
- SME/プロダクトミーティングへの参加
- トレーニング素材の開発と提供
- 自身の専門領域での最新情報の維持

残りの 85〜90% の時間は、通常の SA の責任に充てられます。

## 認識と成長

SME であることは、プロフェッショナルな成長と認識の機会を提供します：

- 組織内での可視性の向上
- 内部および外部のイベントでプレゼンテーションする機会
- キャリア向上の可能性
- パフォーマンスレビューでの認識

SME は、SA チームと顧客満足度への貢献と影響に基づいて定期的に評価されます。SME の貢献の影響を定量化するために収集される [SME メトリックのリスト](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-operations/#sme-metrics) はこちらです。
