---
title: "デベロッパーリレーションズエンジニアリングチーム"
description: "デベロッパーリレーションズエンジニアリングチーム"
upstream_path: /handbook/marketing/developer-relations/engineering/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
---

## 共通リンク

|  | |
|-----|-----|
| **GitLab チームハンドル** | [`@gitlab-org/developer-relations/contributor-success`](https://gitlab.com/gitlab-org/developer-relations/contributor-success) |
| **Slack チャンネル** | [`#developer-relations-engineering`](https://gitlab.slack.com/archives/C09NBNCJFQV) |
| **チームボード** | N/A |
| **Issue Tracker** | [`gitlab-org/developer-relations/contributor-success/team-task`](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues) |

---

## サブページ

|  | |
|-----|-----|
| **ワークフロー** | [Developer Relations Engineering 貢献者ワークフロー](/handbook/marketing/developer-relations/engineering/community-contributors-workflows) |
| **メトリクス** | [貢献者メトリクスとダッシュボード](/handbook/marketing/developer-relations/engineering/metrics) |
| **貢献者のユーザージャーニー** | [ユーザージャーニー](/handbook/marketing/developer-relations/engineering/user-journey) |
| **コミュニティペアリングセッション** | [コミュニティペアリングセッション](/handbook/marketing/developer-relations/engineering/community-pairing-sessions) |
| **Innovation Pitch Competition** | [Innovation Pitch Competition](/handbook/marketing/developer-relations/engineering/innovation-pitch-competition) |
| **貢献を披露する** | [貢献を披露する](/handbook/marketing/developer-relations/engineering/showcase-your-contributions) |

---

## 戦略

このチームは、私たちの[オープンソース成長戦略](/handbook/engineering/open-source/growth-strategy/)で概説された戦略に直接従います。

## ミッション

チームの目標は、貢献者プログラムをリードし、GitLab を私たちと共創するお客様をサポート・誘致し、技術的・プロセス的改善を通じて貢献プロセスの効率を向上させ、月間 170 人以上の貢献者がマージされた MR を持つという私たちの野心を維持することです。これは GitLab のミッション [**世界を動かすソフトウェアに誰もが貢献し共創できるようにする**](/handbook/company/mission/#mission) に沿ったものであり、[3 年間の社内会社戦略](https://internal.gitlab.com/handbook/company/three-year-strategy/)に沿っています。

### FY26 の方向性

FY26 では、次の主要なイニシアチブに引き続き注力します

- ユニークな新規月次貢献者数の増加 (コードと非コード)。私たちの[オープンソース成長戦略](/handbook/engineering/open-source/growth-strategy/)に沿ったもの
- [Open Community MR Age (OCMA)](#open-community-mr-age-ocma) の削減。私たちの[オープンソース成長戦略](/handbook/engineering/open-source/growth-strategy/)に沿ったもの
- 製品ロードマップに沿ったより高価値の貢献に焦点を移す。私たちの[オープンソース成長戦略](/handbook/engineering/open-source/growth-strategy/)に沿ったもの

社内優先事項として、[FY25Q3 レトロスペクティブ](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues/665#note_2248454288)に沿って、プロジェクトと Issue のスコーピングと優先順位付けの改善に注力します。

これらの目標を達成するために必要なエンジニアリング作業は、限度の範囲内で行われます。たとえば、GDK 作業、Duo の POC、AI 支援の分類による Triage-ops のリファクタなどです。

#### ユニークな新規月次貢献者

1. 人的相互作用への依存を最小化
1. 貢献を自動的に前進させる自動化を導入することで、ボラティリティを削減
1. 未開拓の可能性を活用 - 古くなったが GitLab への有用な追加として承認印を受けた MR
1. 新しい貢献者を引き付けるための投資

#### Open Community MR Age (OCMA)

1. 大きな標準偏差に寄与する人的要因への依存を最小化
1. OCMA を減少させるためのツーリング改善を特定し推進

#### 共創

GitLab の [Co-Create プログラム](https://about.gitlab.com/community/co-create/)は、製品とエンジニアリングと組み合わせて、[デベロッパーリレーションズエンジニアリングチーム](/handbook/marketing/developer-relations/engineering/)が主導するクロスファンクショナルなイニシアチブです。GitLab 固有の手順は、[cocreate ハンドブックページ](/handbook/marketing/developer-relations/programs/cocreate/)で見つけることができます。

## チームの責務

- GitLab の貢献効率と[マージリクエストコーチング](/job-description-library/expert/merge-request-coach/)プロセスを改善する。
- 1 つ以上の専門分野で[マージリクエストコーチ](/job-description-library/expert/merge-request-coach/)として貢献し、コミュニティ貢献者に技術的・非技術的側面のガイダンスを提供する。
- コミュニティ貢献者のエスカレーションポイントとなり、ブロッカーを解決する GitLab DRI を特定する。
- コミュニティ貢献者を[コミュニティチーム](#team-members)に組織化し、彼らの成功を確保する。
- コミュニティ貢献者とコホートの[貢献](https://about.gitlab.com/community/contribute/)の提供を追跡する。
- 影響力のあるコミュニティ貢献者と貢献を表彰のために推薦する。
- 各リリース投稿の [GitLab Notable Contributor](/handbook/marketing/developer-relations/engineering/notable-contributor-process)を選定して表彰する
- [マーケティングのカウンターパート](/handbook/marketing/developer-relations/)と [Core チーム](https://about.gitlab.com/community/core-team/)と密接に連携する。
- [デベロッパーリレーションズチーム](/handbook/marketing/developer-relations/)と協力して、コミュニティ表彰システム、賞、エンジニアリング支援を改善する。
- GitLab の全体的なオープンソースアウトリーチイベントとプロセスに参加する。
- [コミュニティ Issue をトリアージ](/handbook/product-development/how-we-work/issue-triage/)して、コミュニティまたは GitLab チームメンバーがピックアップできるようにする
- 毎日のマージリクエストコーチレポートから[コミュニティマージリクエストをトリアージ](/handbook/engineering/infrastructure-platforms/developer-experience/merge-request-triage/#partial-triage-gitlab-org)する
- マージリクエストコーチとして、またはレビュアールーレットから割り当てられた[マージリクエストをレビュー](https://docs.gitlab.com/ee/development/code_review.html)する

## チームメンバー


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/marketing/developer-relations/engineering/" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 貢献者プラットフォーム

私たちの[貢献者プラットフォーム](https://contributors.gitlab.com)は、GitLab とコミュニティアクティビティへのオープンソース貢献者の中心ハブです。
複数のプラットフォームから貢献データを取り込み、[contributors-gitlab-com プロジェクトの README](https://contributors.gitlab.com/docs/README) で完全に文書化されています。

[@daniel-murphy](https://gitlab.com/daniel-murphy) は製品 DRI、
[@leetickett-gitlab](https://gitlab.com/leetickett-gitlab) は技術/エンジニアリング DRI です。

### Issue を提出する

#### gitlab-org/gitlab

オープンソースプロジェクト GitLab に関連し、貢献者フローを強化するのに役立ち、本質的にパブリックなすべての Issue は、デフォルトでここに作成する必要があります。私たちは貢献者と GitLab チームメンバーの間に区別を持たないことを目指しており、デフォルトで誰もが貢献できることを期待しています。

- 場所: [gitlab-org/gitlab](https://gitlab.com/gitlab-org/gitlab)
- 必要なラベル: `Contributor Success`

#### gitlab-org/developer-relations/contributor-success/team-task

GitLab という会社の内部の働きに関連するすべての Issue (特定の社内チームの作業、オンボーディング Issue、オープンソースプロジェクト GitLab から分離する必要がある顧客に関連する Issue を含む) は、ここに置くことができます。

- 場所: [gitlab-org/developer-relations/contributor-success/team-task](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/)
- 必要なラベル: `Contributor Success`

## プロジェクト管理

- 私たちの[チームプロジェクト](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task)は、すべてのタスクとバックログの単一の信頼できる情報源です。
- 複数の部門にまたがるクロスファンクショナルな作業を含むエピックは、`gitlab-org` [レベル](https://gitlab.com/groups/gitlab-org/-/epics?label_name[]=Contributor+Success)で作成できます。

## OKR

OKR は公開されていません。しかし、四半期の Objective と Key Results を含め、これらの目標を常に念頭に置いてください。

## パフォーマンス指標

私たちは次のパフォーマンス指標を持っています

### 月次のユニークな広範コミュニティ貢献者

[月次のユニークな広範コミュニティ貢献者](/handbook/marketing/developer-relations/performance-indicators/#unique-wider-community-contributors-per-month)

- アクティビティ:
  - デベロッパーリレーションズチームとのパートナーシップ。
  - コミュニティオフィスアワーの開催。
  - ハッカソンの開催。
  - フォークからの QA テストの実行を許可。
  - コミュニティ貢献の CI 実行時間を短縮 (フォーク内)。

詳細は[月次のユニークな広範コミュニティ貢献者マーケティング PI セクション](/handbook/marketing/developer-relations/performance-indicators/#unique-wider-community-contributors-per-month)に記載されています

### Open Community MR Age (OCMA)

- アクティビティ:
  - CI 時間を短縮
  - コミュニティ貢献オートメーションの改善
  - フォークでの QA テスト実行を可能にする
  - コーチの数を増やす
  - エンジニアリング生産性とパートナーシップを組み、貢献ツーリング (現在は GDK) の改善のためにフィードバックを提供。

詳細は [OCMA Developer Relations PI セクション](/handbook/marketing/developer-relations/performance-indicators/#open-community-mr-age)で見つけることができます

## 作業計画の方法

チームは [Developer Relations Engineering Kanban ボード](https://gitlab.com/groups/gitlab-org/-/boards/7745119?label_name[]=Contributor%20Success)を使用しています。
Issue は次のとおりである必要があります:

- `gitlab-org` グループに作成されている
- `Contributor Success` ラベルがある
- 以下のリストから少なくとも 1 つの `workflow` ラベルがある

四半期ごとの注力分野を指定するために `priority` ラベルを使用しています。

### ワークフローラベル

- `workflow::validation backlog`: チームが KPI、OKR、チーム戦略に対する効果対効果を検証できるよう、Issue は私たちのバックログから始まります。
- `workflow::refinement`: これらの Issue は検証され、計画とチームディスカッションを通じて、ready としてマークされる前に洗練されます。次のワークフロー段階に移動する前に、Issue には Implementation Plan セクションが必要です。
- `workflow::ready for development`: これらの Issue はピックアップ準備ができており、Implementation Plan セクションと `priority` ラベルがあります。
- `workflow::in dev`: 今四半期に活発に作業されている Issue。
- `workflow::blocked`: 現在ブロックされている Issue。説明にブロッカーを記載し、ブロックを解除する Issue へのリンクを含める必要があります。
- `workflow::complete`: 実装後に解決された Issue。クローズされる前に、チームとデベロッパーリレーションズ部門へのレポートでハイライトする必要があります。

### 優先度ラベル

- `priority::1` (最高優先度): 現四半期の KPI と OKR にとって重要な Issue、または貢献者の作業をブロックする緊急のバグ。
- `priority::2`: 現四半期の目標に沿った Issue だが、緊急の期日はないもの。
- `priority::3`: 現四半期の目標に影響を与えずに長期的な目的をサポートする Issue。
- `priority::4` (最低優先度): 増分価値をもたらすが、追加の容量を待つことができる Issue。

### Issue の選び方

チームメンバーは、`priority` ラベルに基づいて `workflow::ready for development` から Issue を選択する必要があります。
チームは現四半期の `priority::1` と `priority::2` Issue に焦点を当てていますが、より大きなプロジェクトの間に低優先度のタスクをピックアップすることが理にかなう場合もあります。
タスクを選ぶ際は、[効率性](/handbook/values/#efficiency)、[イテレーション](/handbook/values/#iteration)、[マネージャー・オブ・ワン](/handbook/values/#managers-of-one)としての行動という GitLab の価値観に導かれます。

## デベロッパーリレーションズエンジニアリングのレトロスペクティブ

毎四半期、GitLab の Issue を使った非同期レトロスペクティブを実施しています [(例)](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues/665)。

聞かれる質問:

- 何を始めるべきか?
- 何を止めるべきか?
- 何を続けるべきか?

デベロッパーリレーションズエンジニアリング DRI は、将来簡単に取り出せるようチームトラッカー
[`gitlab-org/developer-relations/contributor-success/team-task`](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues)
に Issue を作成する責任があります。

デベロッパーリレーションズエンジニアリング DRI は、フィードバックを消化し、投票後、新四半期に取り入れる Issue を 1 つ選定する責任があります。

## デベロッパーリレーションズエンジニアリングのスタンドアップ

このスタンドアップの目的は、デベロッパーリレーションズエンジニアリングのチームメンバー間で連携することです。これは、ブロッカー、進捗、目標に向けて異なる考え方とイテレーションする方法をチェックインするためのチーム固有の
ミーティングです。

- アジェンダ: <https://docs.google.com/document/d/1chIzCdg1CNRrRRuYR7c7OW_BF1mBxKFTJoXyP2HLt4E/edit#heading=h.o6qzal1u0b7i>

## デベロッパーリレーションズエンジニアリングの参考リーディングリスト

オープンソースコミュニティリレーションと貢献者体験を改善するための外部リソースのキュレーションリスト:

- [Diversity, Equity, and Inclusion in Open Source](https://www.linuxfoundation.org/research/the-2021-linux-foundation-report-on-diversity-equity-and-inclusion-in-open-source)
- [Working in Public: The Making and Maintenace of Open Source Software](https://press.stripe.com/working-in-public)
- [Growing Your Contributors](https://docs.oscollective.org/resources#growing-your-contributors)
- [Building Welcoming Communities](https://opensource.guide/building-community/)
- [Open Source Survey](https://opensourcesurvey.org/2017/)
- [Non-code contributions are the secret to open source success](https://github.com/readme/featured/open-source-non-code-contributions)
- [The secrets to onboarding new open source contributors](https://github.com/readme/featured/contributor-onboarding)
- [The privilege of free time in Open Source](https://dri.es/the-privilege-of-free-time-in-open-source)
- [Good first issues don't exist](https://opensauced.pizza/blog/good-first-issues-dont-exist)

### プロモーション

[GitLab Team Meetings カレンダーへのイベント追加](/handbook/tools-and-tips/#adding-an-event-to-the-gitlab-team-meetings-calendar)
(社内) と、次の作成を推奨します:

- [GitLab Virtual Community Events](https://www.meetup.com/gitlab-virtual-meetups/) ミートアップグループ内のイベント。
- [GitLab Community Discord](https://discord.gg/gitlab) 上のイベント。
- アジェンダ (Google Docs を使用、リンクのある全員が共同編集できるよう、編集者アクセスをパブリックに)。

注: Zoom リンクにパスワードが埋め込まれていることを確認してください。
