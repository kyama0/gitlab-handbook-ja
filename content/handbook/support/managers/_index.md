---
title: サポートマネージャー
description: サポートマネージャーの活動および参考資料
upstream_path: /handbook/support/managers/
upstream_sha: f8c9cee360fe4a9a7e4b6354bb9330c4602c0fe1
translated_at: "2026-05-08T18:00:00Z"
translator: claude
stale: false
---

## 役割と責任

GitLab のサポートマネージャーとして、以下の事項に注力します。

- [サポート KPI](/handbook/support/performance-indicators/) の達成
- [サポート KPI](/handbook/support/performance-indicators/) を支えるためのチームの取り組みの成長と管理
- 私たちの技術およびプロセスについて、チームへのメンタリングと[コーチング](/handbook/leadership/coaching/)
- 他リージョンのマネージャーとの協働
- エンジニアがスケーラブルな方法でプロセス変更を探求できるようにする支援

役割の詳細は以下を参照してください。

- [サポートマネージャーの責任](/handbook/support/managers/manager-responsibilities)
- [サポートマネジメント職務ファミリー](/job-description-library/engineering/support-management/)

### リージョンごとのバリエーション

一部のチームには戦術上のわずかな違いがあります。各リージョンのアプローチの特徴は次のページで確認できます。

- [AMER](/handbook/support/managers/amer/)

## サポートマネージャーが取り組んでいることを把握する方法

### Epic

サポートチームは進行中のプロジェクトを追跡・調整するために [Epic](https://gitlab.com/groups/gitlab-com/support/-/epics/) を使用しています。[マスター Epic](https://gitlab.com/groups/gitlab-com/support/-/epics?scope=all&utf8=%E2%9C%93&state=opened) では、サポートマネージャーが Directly Responsible Individual (DRI) としてアサインされ、Epic タイトルの後ろの括弧内に名前が表示されます。

## サポートリーダーシップミーティング {#support-leadership-meetings}

より大きなリーダーシップチームとして、関係性を築き、サイロ化を避けるために常にコミュニケーションを取り続けることが重要です。[リーダーシップシンクの運営方法についてはハンドブックで詳しく説明しています。](/handbook/support/managers/leadership-sync)

### シニアリーダーシップミーティング

通常、マネージャーがシニアリーダーシップミーティングに直接参加することはありませんが、その存在、議題のトピック、開催ペース、公開アジェンダの場所を知っておくことは重要です。[シニアリーダーシップミーティングについて詳しく読む](/handbook/support/managers/senior-leadership-sync)。

## チームとの協働

1. [チームメンバーを知る](/handbook/support/managers/getting-to-know-you)
1. [サポート 1on1](/handbook/support/managers/support-1-1s) - 1対1の通話を実施するためのガイダンス。

## 採用

[サポートチームの採用](/handbook/support/managers/hiring)を参照してください。

## 昇進

[チームメンバーの昇進](/handbook/support/managers/promoting-a-support-team-member)を参照してください。

## メトリクス

サポートマネジメントグループとして、レポートに使用するメトリクスを生成するためのツールを把握しておく必要があります。

1. Sisense
1. Zendesk Explore

### Sisense

Sisense は全社で利用されている汎用の可視化ツールです。
機能横断的なデータに対する完全な SQL インターフェイスを備えており、非常に強力です。
ここで「安定した」グラフを生成するために、データチームと協働します。KPI や、より大きな会社全体に報告するのにふさわしい大きな指標などです。
マネージャーとして、これらのレポートを頻繁に編集する必要はありませんが、定期的に参照すべきです。

### Zendesk Explore

Zendesk Explore は Zendesk Insights の後継としてリリースされました。新しいアイデアの素早い検証や Sisense データのファクトチェックにこのツールを使用します。サポートマネージャーは Explore を定期的に扱い、ツールに慣れている必要があります。

### なぜ 2 つのメトリクスシステムがあるのか？

Sisense は全社規模のツールで非常に強力ですが、その分扱いにくくなることがあります。
Explore はナビゲートしやすく使いやすいインターフェイスを提供します。
さらに、Sisense のデータは二次ソースであるため、誤りを含む可能性があります。
一次ソースである ZD Explore を使いこなすことで、正確なデータとインサイトを確保できます。

### KPI を達成できない場合はどうなるか？

毎週の[サポートリーダーシップミーティング](#support-leadership-meetings)で主要なメトリクスをレビューします。

メトリクスが以下のフロアを 2 週連続で下回った場合、マネージャーは原因を分析しトレンドを修正するアクションを提案するために[グループを編成](#forming-a-group)すべきです。

1. 統合 First Reply Time (L&R、GitLab SM、GitLab SaaS) が 93% 以下
1. 統合 SSAT (L&R、GitLab SM、GitLab SaaS) が 93% 以下
1. 統合 NRT (L&R、GitLab SM、GitLab Saas) が 83% 以下

このアクションはサポート独自のもので、[Rapid Action issue](/handbook/engineering/development/#rapid-action-issue) と [ワーキンググループ](/handbook/company/working-groups/) の中間に位置するものです。

このグループの目的はトリガーされた状況ごとに固有のものとなりますが、一般的にメンバーは以下を行います。

- 検証可能な仮説を形成する (例: *多くの人が休暇を取ったために FRT が低下した*)
- その仮説を反証するデータを収集・分析する (例: *PTO データを確認したところ、当該期間中も一貫して 90% のカバレッジが維持されており、年間の他の時期と一貫していることが分かりました*)
- 一貫した結果を達成するための推奨事項のセットをデータに基づいて構築する
- 仮説を*どのように*分析したかをドキュメント化し、[仮説とアクション](/handbook/support/managers/metrics-analysis/actions) に含める

これらの基準とアクションは [メトリクス分析ワーキンググループ](/handbook/support/managers/metrics-analysis/index) から生まれました。

### グループの編成 {#forming-a-group}

1. マネージャーが [メトリクスワーキンググループテンプレート](https://gitlab.com/gitlab-com/support/metrics/-/issues/new?issuable_template=Metrics%20Workgroup) を使って Issue を起票します
1. リーダーシップミーティングでボランティアを募り、ワーキンググループに参加する 2〜3 名のマネージャー/IC を特定します
1. 仮説を決定し、データを収集し、その結果として一時的または恒久的なプロセス変更を提案します

## OKR

すべてのサポートエンジニアリングマネージャーは、四半期ごとに少なくとも 1 つの [OKR](/handbook/company/okrs/) を持ちます。各マネージャーの OKR は部門レベルの OKR のいずれかに整合させる必要がありますが、スコープはより小さくても構いません (グローバルな影響というよりは、リージョン/直属の部下のチームに限定するなど)。OKR は重要ですが、マネージャーが取り組むべき最も重要な事項ではありません。サポートエンジニアを効果的にマネジメントするうえで、マネージャーは以下に注力すべきです。

1. [KPI](/handbook/support/performance-indicators/)
1. チームの成長 (採用と育成)
1. [OKR](/handbook/company/okrs/)

四半期に時間軸が縛られたプロジェクトを OKR にすることは完全に許容されますし、四半期中に OKR を調整することも (特に他の優先事項に照らして) 許容されます。

新任マネージャーは、オンボーディングを完了し OKR プロセスを実際に見る時間を確保するため、その役割に就いてから 1 つの会計四半期が経過した後に自身の OKR を策定します。

## サポートエンジニアリングマネージャー README

サポートエンジニアリングマネージャーの README は [エンジニアリングマネージャー README](/handbook/engineering/readmes/) にあります。
