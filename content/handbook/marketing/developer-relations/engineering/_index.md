---
title: "Developer Relations Engineering チーム"
description: "Developer Relations Engineering チーム"
upstream_path: /handbook/marketing/developer-relations/engineering/
upstream_sha: 9164688669f5bd36ff8345a38c17f82ffc321821
translated_at: "2026-06-20T21:10:03Z"
translator: claude
stale: false
lastmod: "2026-06-20T18:16:40+01:00"
model: claude-opus-4-7
---

## 共通リンク

|  | |
|-----|-----|
| **GitLab チームハンドル** | [`@gitlab-org/developer-relations/contributor-success`](https://gitlab.com/gitlab-org/developer-relations/contributor-success) |
| **Slack チャンネル** | [`#developer-relations-engineering`](https://gitlab.slack.com/archives/C09NBNCJFQV) |
| **チームボード** | N/A |
| **Issue トラッカー** | [`gitlab-org/developer-relations/contributor-success/team-task`](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues) |

---

## サブページ

|  | |
|-----|-----|
| **ワークフロー** | [Developer Relations Engineering のコントリビューターワークフロー](/handbook/marketing/developer-relations/engineering/community-contributors-workflows) |
| **メトリクス** | [コントリビューターのメトリクスとダッシュボード](/handbook/marketing/developer-relations/engineering/metrics) |
| **コントリビューターのユーザージャーニー** | [ユーザージャーニー](/handbook/marketing/developer-relations/engineering/user-journey) |
| **コミュニティペアリングセッション** | [コミュニティペアリングセッション](/handbook/marketing/developer-relations/engineering/community-pairing-sessions) |
| **イノベーションピッチコンペティション** | [イノベーションピッチコンペティション](/handbook/marketing/developer-relations/engineering/innovation-pitch-competition) |
| **あなたのコントリビューションを紹介する** | [あなたのコントリビューションを紹介する](/handbook/marketing/developer-relations/engineering/showcase-your-contributions) |
| **オブザーバビリティアラートのトリアージ** | [コントリビュータープラットフォームのアラートを調査してクローズする方法](/handbook/marketing/developer-relations/engineering/observability-alert-triage) |

---

## 戦略

このチームは、[オープンソース成長戦略](/handbook/engineering/open-source/growth-strategy/)に示された戦略に直接従います。

## ミッション

このチームの目標は、コントリビュータープログラムをリードし、私たちと一緒に GitLab を共創するお客様を支援・惹きつけ、技術面・プロセス面の改善を通じてコントリビューションプロセスの効率を高め、MR がマージされる月間 170 人以上のコントリビューターという目標を持続させることです。これは、[**誰もが世界を動かすソフトウェアにコントリビュートし、共創できるようにする**](/handbook/company/mission/#mission )という GitLab のミッションと、[3 年間の社内会社戦略](https://internal.gitlab.com/handbook/company/three-year-strategy/)に沿っています。

### FY26 の方向性

FY26 では、引き続き以下の重要な取り組みに注力します。

- コードおよび非コードの、月間のユニークな新規コントリビューター数を増やす。私たちの[オープンソース成長戦略](/handbook/engineering/open-source/growth-strategy/)に沿っています
- [Open Community MR Age (OCMA)](#open-community-mr-age-ocma) を短縮する。私たちの[オープンソース成長戦略](/handbook/engineering/open-source/growth-strategy/)に沿っています
- 私たちのプロダクトロードマップに沿った、より価値の高いコントリビューションへ焦点を移す。私たちの[オープンソース成長戦略](/handbook/engineering/open-source/growth-strategy/)に沿っています

社内優先事項として、[FY25Q3 のレトロスペクティブ](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues/665#note_2248454288)に従い、プロジェクトと Issue のスコープ設定および優先順位付けの改善に注力します。

これらの目標を達成するために必要なエンジニアリング作業は、制限内で行います。たとえば、GDK の作業、Duo の POC、AI による分類を伴う Triage-ops のリファクタリングなどです。

#### 月間のユニークな新規コントリビューター

1. 人による介入への依存を最小化する
1. コントリビューションを自動的に前進させるオートメーションを導入し、変動性を減らす
1. 未開拓のポテンシャルを活用する - 停滞しているものの、GitLab への有用な追加として承認の印が付けられた MR。
1. より多くの新規コントリビューターを惹きつけることに投資する

#### Open Community MR Age (OCMA)

1. 大きな標準偏差の原因となる人的要因への依存を最小化する
1. OCMA を減らすためのツール改善を特定・推進する

#### Co-Create

GitLab の [Co-Create プログラム](https://about.gitlab.com/community/co-create/)は、Product と Engineering と連携して [Developer Relations Engineering チーム](/handbook/marketing/developer-relations/engineering/)が主導する、部門横断的な取り組みです。GitLab 固有のより詳しい手順は、私たちの [cocreate ハンドブックページ](/handbook/marketing/developer-relations/programs/cocreate/)に記載されています。

## チームの責務

- GitLab のコントリビューション効率と[マージリクエストコーチング](/job-description-library/expert/merge-request-coach/)プロセスを改善する。
- 1 つ以上の専門分野で[マージリクエストコーチ](/job-description-library/expert/merge-request-coach/)として貢献し、技術的・非技術的な側面についてコミュニティコントリビューターにガイダンスを提供する。
- コミュニティコントリビューターのエスカレーション先となり、ブロッカーを解決する GitLab DRI を特定する。
- コミュニティコントリビューターを[コミュニティチーム](#team-members)に編成し、その成功を支援する。
- コミュニティコントリビューターおよびコホートによる[コントリビューション](https://about.gitlab.com/community/contribute/)の提供を追跡する。
- 影響力のあるコミュニティコントリビューターおよびコントリビューションを表彰の対象として推薦する。
- 各リリース投稿について[GitLab Notable Contributor](/handbook/marketing/developer-relations/engineering/notable-contributor-process) を選定し表彰する
- 私たちの[マーケティングのカウンターパート](/handbook/marketing/developer-relations/)および[コアチーム](https://about.gitlab.com/community/core-team/)と緊密に連携する。
- [Developer Relations チーム](/handbook/marketing/developer-relations/)と協力して、コミュニティの表彰システム、アワード、エンジニアリング支援を改善する。
- GitLab 全体のオープンソースアウトリーチイベントおよびプロセスに参加する。
- コミュニティまたは GitLab チームメンバーが取り組めるよう、[コミュニティ Issue をトリアージする](/handbook/product-development/how-we-work/issue-triage/)
- 日次のマージリクエストコーチレポートから[コミュニティのマージリクエストをトリアージする](/handbook/engineering/infrastructure-platforms/developer-experience/merge-request-triage/#partial-triage-gitlab-org)
- マージリクエストコーチとして割り当てられた、またはレビュアールーレットから割り当てられた[マージリクエストをレビューする](https://docs.gitlab.com/ee/development/code_review.html)

## チームメンバー

{{< team-by-departments "DevRel Engineering" >}}

## コントリビュータープラットフォーム

私たちの[コントリビュータープラットフォーム](https://contributors.gitlab.com)は、GitLab へのオープンソースコントリビューターとコミュニティ活動の中心的なハブです。複数のプラットフォームからコントリビューションデータを取り込んでおり、[contributors-gitlab-com プロジェクトの README](https://contributors.gitlab.com/docs/README) に完全に文書化されています。

[@daniel-murphy](https://gitlab.com/daniel-murphy) がプロダクト DRI で、[@leetickett-gitlab](https://gitlab.com/leetickett-gitlab) が技術/エンジニアリング DRI です。

### Issue を起票する

#### gitlab-org/gitlab

オープンソースプロジェクト GitLab に関連し、コントリビューターのフローを向上させるのに役立ち、本質的に公開されるべきすべての Issue は、デフォルトでここに作成してください。私たちは、コントリビューターと GitLab チームメンバーの間に区別を設けないことを目指しており、デフォルトでは誰もがコントリビュートできるべきだと考えています。

- 場所: [gitlab-org/gitlab](https://gitlab.com/gitlab-org/gitlab)
- 必須ラベル: `Contributor Success`

#### gitlab-org/developer-relations/contributor-success/team-task

会社 GitLab の内部的な仕組みに関連するすべての Issue（特定の社内チームの作業、オンボーディングの Issue、オープンソースプロジェクト GitLab とは分離すべきお客様に関連する Issue を含む）は、ここに配置できます。

- 場所: [gitlab-org/developer-relations/contributor-success/team-task](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/)
- 必須ラベル: `Contributor Success`

## プロジェクト管理

- 私たちの[チームプロジェクト](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task)は、すべてのタスクとバックログに関する唯一の情報源です。
- 複数の部門にまたがる部門横断的な作業を含むエピックは、`gitlab-org` の[レベル](https://gitlab.com/groups/gitlab-org/-/epics?label_name[]=Contributor+Success)で作成できます。

## OKR

OKR は公開されていません。ただし、四半期の目標と主要な成果を含め、これらの目標を常に念頭に置いていることはご安心ください。

## パフォーマンス指標

私たちは以下のパフォーマンス指標を持っています。

### 月間のユニークなワイダーコミュニティコントリビューター数

[月間のユニークなワイダーコミュニティコントリビューター数](/handbook/marketing/developer-relations/performance-indicators/#unique-wider-community-contributors-per-month)

- 活動:
  - Developer Relations チームとのパートナーシップ。
  - コミュニティオフィスアワーの開催。
  - ハッカソンの開催。
  - フォークからの QA テスト実行の許可。
  - コミュニティコントリビューション（フォーク内）の CI 実行時間の短縮。

詳細は、[月間のユニークなワイダーコミュニティコントリビューター数のマーケティング PI セクション](/handbook/marketing/developer-relations/performance-indicators/#unique-wider-community-contributors-per-month)に記載されています

### Open Community MR Age (OCMA)

- 活動:
  - CI 時間の短縮
  - コミュニティコントリビューションのオートメーションの改善
  - フォークでの QA テスト実行を可能にする
  - コーチ数の増加
  - Engineering Productivity と連携して、コントリビューションツール（現在は GDK）を改善するためのフィードバックを提供する。

詳細は、[OCMA のデベロッパーリレーションズ PI セクション](/handbook/marketing/developer-relations/performance-indicators/#open-community-mr-age)に記載されています

## 私たちの作業計画の立て方

このチームは [Developer Relations Engineering のかんばんボード](https://gitlab.com/groups/gitlab-org/-/boards/7745119?label_name[]=Contributor%20Success)を使用します。Issue は次を満たす必要があります。

- `gitlab-org` グループで作成されていること
- `Contributor Success` ラベルが付いていること
- 以下のリストから少なくとも 1 つの `workflow` ラベルが付いていること

私たちは `priority` ラベルを使って、四半期ごとの注力分野を指定します。

### ワークフローラベル

- `workflow::validation backlog`: Issue はまずバックログから始まり、チームが KPI、OKR、チーム戦略に対して労力と影響を検証できるようにします。
- `workflow::refinement`: これらの Issue は、ready とマークされる前に、計画とチームでの議論を通じて検証・洗練されます。Issue は次のワークフローステージに移る前に、Implementation Plan セクションを持つべきです。
- `workflow::ready for development`: これらの Issue は着手可能であり、Implementation Plan セクションと `priority` ラベルを持っています。
- `workflow::in dev`: 今四半期に積極的に取り組んでいる Issue。
- `workflow::blocked`: 現在ブロックされている Issue。説明にはブロッカーを記載し、ブロックを解除する Issue へのリンクを含める必要があります。
- `workflow::complete`: 実装後に解決された Issue。これらは、クローズする前にチームおよび Developer Relations 部門へのレポートで強調すべきです。

### 優先度ラベル

- `priority::1`（最高優先度）: 今四半期の KPI と OKR に不可欠な Issue、またはコントリビューターの作業をブロックする緊急のバグ。
- `priority::2`: 今四半期の目標に沿っているが、緊急の期限がない Issue。
- `priority::3`: 今四半期の目標に影響しないが、長期的な目標を支える Issue。
- `priority::4`（最低優先度）: 段階的な価値をもたらすが、追加のキャパシティを待てる Issue。

### Issue の選び方

チームメンバーは、`priority` ラベルに基づいて `workflow::ready for development` から Issue を選択すべきです。チームは今四半期の `priority::1` と `priority::2` の Issue に注力しますが、大きなプロジェクトの合間に優先度の低いタスクに取り組むのが理にかなう場合もあります。私たちはタスクを選ぶ際、[効率](/handbook/values/#efficiency)と[イテレーション](/handbook/values/#iteration)という GitLab のバリューに導かれ、[Manager of One](/handbook/values/#managers-of-one)として行動します。

## Developer Relations Engineering のレトロスペクティブ

四半期ごとに、GitLab の Issue を使って非同期のレトロスペクティブ[（例）](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues/665)を実施します。

問われる質問は以下のとおりです。

- 何を始めるべきか?
- 何をやめるべきか?
- 何を続けるべきか?

Developer Relations Engineering の DRI は、将来簡単に取り出せるよう、チームトラッカー [`gitlab-org/developer-relations/contributor-success/team-task`](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues) に Issue を作成する責任を負います。

Developer Relations Engineering の DRI は、フィードバックを咀嚼し、投票の後に新しい四半期に持ち込む 1 つの Issue を選ぶ責任を負います。

## Developer Relations Engineering のスタンドアップ

このスタンドアップの目的は、Developer Relations Engineering のチームメンバー間で協力することです。これは、ブロッカーや進捗を確認し、異なる視点で考え、私たちの目標に向けてイテレーションするための、チーム固有のミーティングです。

- アジェンダ: <https://docs.google.com/document/d/1chIzCdg1CNRrRRuYR7c7OW_BF1mBxKFTJoXyP2HLt4E/edit#heading=h.o6qzal1u0b7i>

## Developer Relations Engineering のリーディングリスト

オープンソースコミュニティとの関係およびコントリビューター体験を改善するための、厳選された外部リソースのリストです。

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

[GitLab チームミーティングカレンダーにイベントを追加する](/handbook/tools-and-tips/#adding-an-event-to-the-gitlab-team-meetings-calendar)（社内）ことと、以下を作成することをおすすめします。

- [GitLab Virtual Community Events](https://www.meetup.com/gitlab-virtual-meetups/) の meetup グループでのイベント。
- [GitLab Community Discord](https://discord.gg/gitlab) でのイベント。
- アジェンダ（Google Docs を使い、リンクを持つ全員が共同編集できるよう編集者アクセスを公開）。

注: Zoom リンクにパスワードが埋め込まれていることを確認してください。
