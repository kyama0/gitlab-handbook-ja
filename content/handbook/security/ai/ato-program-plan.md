---
title: Security の ATO プログラム計画
description: 戦略、役割、運営サイクル、AI Champions、スケジュールを含む、Security Division の AI トランスフォーメーションに向けたプログラム計画。
upstream_path: "/handbook/security/ai/ato-program-plan/"
upstream_sha: ddc319726d9e3f1cfd7f88faf4798bf31af6bf10
lastmod: "2026-10-15T21:17:52Z"
translated_at: "2026-10-20T12:09:51+00:00"
translator: codex
stale: false
---

## 概要 {#overview}

Security の AI Transformation Owner（ATO）プログラムは、各チームが個別のアプローチを取るのではなく、共通の戦略のもとで Security Division が AI を導入できるよう支援します。

Security は、GitLab が AI を拡大するために採用している [Hub & Spoke & Hub](/handbook/eta/ai/strategy/hub-and-spoke/) モデルの 1 つのスポークです。責任は次のように分担します。

- **Enterprise AI** は、プラットフォームとソリューションの構築方法を担います。
- **ATO** は、部門が何に、なぜ取り組むかを定める Security の AI ロードマップの策定を支援します。
- **AI Champions** は、ロードマップを形作る Security 内の同僚グループです。

ユースケースのアイデアは、AI Champions を通じて ATO に伝えます。バグ、セキュリティの問題、プラットフォームへのフィードバックは、Enterprise AI に直接伝えます。

### プログラムに含まれるもの {#what-the-program-includes}

- **AI Champions：** Security の AI 戦略を策定し、成果を出す、最大 10 人のチーム横断グループです。
- **AI オフィスアワー：** Security の誰でも参加できる、2 週間ごとのセッションです。
- **AI パターンライブラリ：** 各チームの意見を取り入れて開発する、AI ツールの標準パターンです（リンクは後日追加）。
- **報告：** ATO Council への週次の進捗報告と、Security のリーダー向けの定期的な要約です。

プログラムは Bryan Lokey（ATO）が主導し、Destiny Jenkins（Program Coordinator）が調整します。すべての役割と責任は、[役割と担当者](#roles-and-owners)を参照してください。

### 支援を受ける {#getting-help}

- **質問：** AI オフィスアワーで質問するか、`#enterprise-ai-collab` に投稿するか、所属チームの AI Champion に連絡してください。最初に AI Champion に連絡する必要はありません。
- **ユースケースのアイデアとリクエスト：** AI Champion または AI オフィスアワーで共有してください。すべてのリクエストは ATO に送られます。
- **バグ、セキュリティの問題、プラットフォームへのフィードバック：** `#ent-ai-champions` または Serval を通じて、Enterprise AI に直接報告してください。

### 指針 {#guiding-principles}

- AI 固有の防御策よりも、基本的なセキュリティ対策を優先します。
- AI Champions は、状況の報告に加えて、成果を出す責任を負います。
- 各取り組みの開始時に、現実的な期待値を設定します。
- パターンは、それを利用するチームと共同で開発します。
- ATO は協働を通じて取り組み、チームに指示を出しません。
- 新しいものを構築する前に、Enterprise AI や他のチームがすでに提供しているものを確認します。

## 戦略 {#strategy}

AI Champions が Security の AI 戦略を策定し、ATO がそのプロセスを支援します。AI Champions は優先順位を決め、実践方法を定義し、目指す成果を選びます。ATO はグループを招集し、障害を取り除き、取り組みを Enterprise AI および ATO Council につなぎます。

以下の柱は、出発点として提案するものです。AI Champions はキックオフ時に、これらを維持、変更、または置き換えることができます。

### 指針となる柱の案 {#proposed-guiding-pillars}

| 柱 | 説明 | 指標の案 |
| --- | --- | --- |
| 統一 | [Corporate Security](/handbook/security/corporate/)、[Security Operations](/handbook/security/security-operations/)、[Product Security](/handbook/security/product-security/)を横断する 1 つの AI 戦略と、共通のツールパターン群 | ライブラリ内のパターンを複数のチームが利用していること |
| 反復的な手作業の削減 | AI を利用して、反復的で手作業のセキュリティ業務を減らします | 反復的な手作業について合意した定義、基準値、削減量の追跡 |
| 導入の促進 | AI Champions、オフィスアワー、共通パターンを通じて導入を支援します | オフィスアワーが予定どおり開催され、AI Champions が各チームで活動していること |

成功は Security の事業指標に照らして測定し、ATO がその説明責任を負います。Enterprise AI は、各部門の結果を集約します。

### 業務の進め方 {#working-practices}

- AI Champions は、作業を始める前に目指す成果に合意します。
- Security は、毎週の ATO Council ミーティングで少なくとも 1 件の進捗を報告します。
- チームは、既存の手順に AI を加えるのではなく、適切な場合はプロセスを再設計します。[指針](/handbook/eta/ai/strategy/guiding-principles/)を参照してください。

### 今後定義する事項 {#still-to-define}

- AI Champions が柱を承認、変更、または置き換えるかどうか
- 各柱が影響する Security の事業指標と、それぞれの目標
- 反復的な手作業の共通の定義
- Security Division への進捗の報告方法

## 役割と担当者 {#roles-and-owners}

| 役割 | 担当者 | 責任 |
| --- | --- | --- |
| AI Transformation Owner (ATO) | Bryan Lokey | AI Champions による Security の AI 戦略とロードマップの策定を支援し、ユースケースを評価し、部門内での構築内容をレビューし、exec sponsor と ATO Council に成果を報告します |
| Program Coordinator | Destiny Jenkins | ミーティングを運営し、アクションアイテムを追跡し、週次報告をまとめ、プログラムのスケジュールを管理します |
| AI Champions | Security 全体からの最大 10 人の推薦された人 | Security の AI 戦略を策定し、成果を出し、パターンを提供し、AI Champions ミーティングを交代で進行します |
| 代理担当者 | 各チーム 1 人 | 所属チームの AI Champion が参加できない場合に、ミーティングに参加し、進捗を共有します |
| Security のリーダー | Vice presidents、directors、managers | AI Champions を推薦し、活動時間を確保できるよう支援します |
| Enterprise AI | Enterprise AI チーム | プラットフォーム、ツール、ガバナンスとセキュリティレビュー、部門横断の標準を担います |
| 担当の AI Engineer | Enterprise AI 所属 | ATO とともにソリューション設計、プロトタイプ、本番環境への提供に取り組み、オフィスアワーに参加します |
| Exec sponsor | Chaim Mazal | Security の優先順位を定め、大規模な問題や部門横断の問題を判断します |

## 運営サイクル {#operating-rhythm}

プログラムは定期的なサイクルで進めます。AI Champions は毎週集まってロードマップに取り組み、ATO は毎週 ATO Council に報告し、Security 全体を対象に 2 週間ごとにオフィスアワーを開催し、成果を部門に共有します。オフィスアワーで出た質問が、AI Champions ミーティングの議題になることもあります。

### 定例ミーティング {#recurring-meetings}

| ミーティング | 頻度 | 参加者 | 目的 |
| --- | --- | --- | --- |
| AI Champions ミーティング | 毎週 30 分（案） | ATO、AI Champions、Program Coordinator | 成果に合意し、進捗を共有し、障害を解消します |
| ATO Council への進捗報告 | 毎週 | ATO | 毎週少なくとも 1 件、Security の AI の進捗を報告します |
| AI オフィスアワー | 2 週間ごと | ATO が企画し、主催者は今後決定します。Security の全員が参加できます | AI に関する質問に答え、共通のニーズを特定します |
| AI Champion デモ | 毎月 | ATO が主催し、AI Champions が発表します。Security の全員が参加できます | 進行中および完了した取り組みを部門全体で共有します |
| 四半期ビジネスレビュー | 四半期ごと | Director of Enterprise AI、ATO、Exec sponsor | 提供したものとその価値をレビューし、今後の計画、依存関係、リクエストを話し合います |

曜日と時間は今後決定します。

### 進捗報告のプロセス {#update-process}

1. AI Champions は、週次の AI Champions ミーティングで進捗を報告します。
1. Program Coordinator は、ATO Council 向けに進捗報告をまとめます。
1. ATO は、週次の ATO Council ミーティングで進捗報告を発表します。
1. 主な内容を Security Division に共有します。

## AI Champions {#ai-champions}

AI Champions は、ATO の支援のもとで部門の AI 戦略を策定する、Security 全体から集まった小規模なグループです。

### 責任 {#responsibilities}

- 所属チーム内の AI ユースケースを特定し、評価します
- エージェントとワークフローを試験導入します
- チームの同僚を指導します
- 障害やフィードバックを ATO に報告します
- 共通の AI パターンライブラリに貢献します
- AI Champions ミーティングを交代で進行します

AI Champions には、ミーティングへの参加だけでなく、成果を出すことが期待されます。

AI Champions は ATO の直属ではありません。ATO は、AI Champions と Enterprise AI をつなぎます。Security の誰でも、最初に AI Champion に連絡することなく、AI オフィスアワーで質問できます。

### 活動時間 {#time-commitment}

AI Champions は、勤務時間の 5 〜 10% をプログラムに充てます。各 AI Champion は、この活動時間についてマネージャーと合意します。

### 選出プロセス {#selection-process}

1. ATO は、プログラムの目標を Security のリーダーと共有します。
1. 各リーダーは、最大 3 人を推薦します。
1. 推薦された人と、AI を頻繁に利用していることが知られている人の中から、チーム間のバランスを考慮して最終的なグループを選出します。各 AI Champion のマネージャーが、その参加を承認します。
1. グループのメンバー数は、最大 10 人です。

### 代理担当者と交代制 {#backups-and-rotation}

- 各チームは、そのチームの AI Champion が参加できない場合に出席する代理担当者を指名します。
- AI Champions は、週次ミーティングを交代で進行します。予定されていた進行担当者が参加できない場合は、次の順番の人が進行します。
- AI Champion が活動できる時間に変化があった場合は、リーダーが継続の可否を確認するか、後任を推薦します。

## スケジュールとロードマップ {#timeline-and-roadmap}

日付はすべて案です。

10 月は準備期間として、AI Champions の選出、連絡の送付、2026-10-19 の週のキックオフを行い、その後、最初の 30 日間のサイクルに進みます。FY27-Q4（2026-11-01 〜 2027-01-31）には定例スケジュールを開始し、最初の AI オフィスアワーを 2026-11-02 の週に開催し、その後 2 週間ごとに開催します。

### 10 月の準備 {#october-setup}

| マイルストーン | 目標時期 | 完了基準 | 担当者 |
| --- | --- | --- | --- |
| 1. AI Champions の選出 | 2026-10-06 〜 2026-10-16 | Chief Information Security Officer（CISO）の各直属部下から推薦を受け、マネージャーが活動時間を承認し、タイムゾーンを記録していること | ATO と CISO の直属部下 |
| 2. 部門への連絡の送付 | 2026-10-19 〜 2026-10-30 | 部門向けの告知を送信し、AI Champions の Slack チャンネルを作成し、ミーティングとオフィスアワーの招待を送信していること | Program Coordinator |
| 3. プログラムのキックオフ | 2026-10-19 の週 | キックオフを開催し、AI Champions が指針となる柱を承認または修正し、週次ミーティングを開始していること | AI Champions、ATO が進行を支援 |

### FY27-Q4 の定例スケジュール {#fy27-q4-regular-schedule}

| マイルストーン | 目標時期 | 完了基準 | 担当者 |
| --- | --- | --- | --- |
| 4. AI オフィスアワー | 2026-11-02 の週から 2 週間ごと | FY27-Q4 に、Security の全員が参加できるセッションを 6 回開催していること | ATO |
| 5. ロードマップへの合意 | 2026-11-02 〜 2026-12-04 | AI Champions が、優先順位、順序、担当者を含む Security の AI ロードマップに合意していること | AI Champions、ATO が進行を支援 |

### FY27-Q4 のオフィスアワー日程 {#fy27-q4-office-hours-schedule}

| セッション | 開催週 | 備考 |
| --- | --- | --- |
| 1 | 2026-11-02 | 初回セッション |
| 2 | 2026-11-16 | — |
| 3 | 2026-11-30 | — |
| 4 | 2026-12-14 | 暦年の最終セッション |
| — | 2026-12-28 | 開催なし（休暇） |
| 5 | 2027-01-11 | — |
| 6 | 2027-01-25 | FY27-Q4 の最終セッション。四半期ビジネスレビューへのインプット |
