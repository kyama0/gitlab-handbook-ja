---
title: Growth ステージ
description: "Growth ステージは、プロダクトの変更と実験を通じて、GitLab の購入を妨げる要因を取り除く 1 つのチームです。"
upstream_path: /handbook/engineering/development/growth/
upstream_sha: "2c77a1f5b8c8a80cb7b5151ff11cfad84f98bfbb"
translated_at: "2026-10-10T06:55:21.889977+00:00"
translator: claude
stale: false
lastmod: "2026-10-09T19:09:40Z"
---

## ミッション {#mission}

Growth は、トラフィックを増やすのではなく、購入を妨げる要因を取り除くことで、GitLab のセルフサービスファネルを、新規有料顧客を安定的に獲得し、その効果が積み重なる仕組みに変えます。

私たちが最も重視する指標は、**GitLab.com とセルフマネージド全体の Web Direct 初回注文**です。Web Direct 初回注文とは、顧客が営業の支援を受けずにセルフサービスで行う[初回注文](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-guides/gtm-operating-performance/first-orders/)（GitLab 社内）です。私たちは、サインアップではなく、初回注文への影響に基づいて業務に優先順位を付けます。

ファネルの各段階にはインプット指標が 1 つあり、その指標を改善するようにロードマップを構成します。

```mermaid
flowchart LR
    ACQ["Acquisition\nValuable trial starts and free signups"]
    ACT["Activation\nValuable Aha activation within 14 days"]
    MON["Monetization\nValuable activation to first order"]
    FO["Outcome\nWeb Direct first orders"]

    ACQ --> ACT
    ACT --> MON
    MON --> FO
```

Growth は、初回訪問から初回購入までのプロダクト内の経路を所有します。これには、登録、オンボーディング、プロダクト内のアップグレードと購入のエントリーポイント、トライアル体験、プロダクト内通知、[実験ツール](/handbook/engineering/development/growth/experimentation/)（[GitLab Experiment (GLEX)](https://docs.gitlab.com/development/experiment_guide/) と [Experimenator](https://gitlab.com/groups/gitlab-org/-/work_items/22589)）が含まれます。主要なパートナーは Fulfillment、Pricing、Digital Experience、Lifecycle Marketing、Enterprise Analytics です。

Growth の原則、指標、オーナーシップ、現在の優先事項については、[Growth の方向性ページ](/handbook/product/groups/growth/direction/)と [Growth セクションの働き方](/handbook/product/groups/growth/)を参照してください。

## 作業方法 {#how-we-work}

[バリュー](/handbook/values/) に沿って、[イテレーション](/handbook/values/#iteration) と [コラボレーション](/handbook/values/#collaboration) に焦点を当て、開発部門のカウンターパートが管理するプロダクトの領域と協力して取り組んでいます。

プロダクトチームが優先する Issue に取り組み、GitLab.com での[実験](/handbook/engineering/development/growth/experimentation/)も実施しています。Growth は 1 つのロードマップを持つ 1 つのチームであり、エンジニアはロードマップで最も優先順位の高い業務に割り当てられます。Growth のエンジニアは Fullstack Engineers です。Growth はフロントエンドとバックエンドの両方のスキルセットを必要としますが、小規模なチームとしてチームメンバーの効率を最適化するため、Fullstack のロールを採用しています。

## Growth リーダーシップとチーム {#growth-leadership--teams}

### リーダーシップ {#leadership}

| ロール | 人 |
|------|--------|
| Product Director | {{< member-by-name "Elyse Mallinger" >}} |
| Engineering Director | {{< member-by-name "Ekwa Duala-Ekoko" >}} |
| Engineering Manager | {{< member-by-name "Travis Shields" >}} |
| Senior Staff Fullstack Engineer | {{< member-by-name "Doug Stull" >}} |
| UX Design Manager | {{<member-by-name "Emily Sybrant">}} |

### プロダクトとデザイン {#product--design}

| ロール | 人 |
|------|--------|
| Product Managers | {{< member-by-name "Elyse Mallinger" >}} |
| Product Designers | {{< member-by-name "Jesse Young" >}}, {{< member-by-name "Katie Macoy" >}} |

### チームとコミュニケーション {#teams--communication}

Growth は以下の Slack チャンネルを使用します。

- [#s_growth](https://gitlab.slack.com/channels/s_growth) - Growth のメインチャンネル
- [#sd_growth_engineering](https://gitlab.slack.com/channels/sd_growth_engineering) - Growth のエンジニアリングに関する議論

| チーム | GitLab ハンドル |
|------|---------------|
| Growth（全体） | `@gitlab-org/growth` |
| Growth のエンジニア | `@gitlab-org/growth/engineers` |

### 全チームメンバー {#all-team-members}

{{< team-by-manager-slug manager="tshields1" >}}

## 共有プロセス {#shared-processes}

私たちのチームは共有プロセスとツールを使用してコラボレーションします:

- [オペレーティングモデル](operating_model_growth.md) - Growth のオペレーティングリズム
- [マイルストーン計画、精査、見積もり](initiative_refinement_estimation) - 継続的な精査プロセスと見積もりガイドライン
- [大規模イニシアチブのエンジニアリング DRI](engineering_dri) - 複雑なワークストリームとエピックの管理
- [モジュラーコードの指針](modular_code) - なぜ、どのようにデフォルトでモジュラーコードを書くのか
- [技術的探索ガイドライン](technical_spikes) - リサーチとスパイク作業のガイドライン
- [Growth 実験ガイドライン](experimentation) - Growth 実験のガイドライン

## 実験 {#experimentation}

実験の速度は、他のすべての業務の効果を何倍にも高めるため、Growth が最優先で取り組む課題です。Growth は GLEX と、AI が支援する実験パイプラインである [Experimenator](https://gitlab.com/groups/gitlab-org/-/work_items/22589)を所有します。すべての実験について、リリースするかどうかを決める前に結果を報告します。プロセスについては、[Growth の実験](/handbook/engineering/development/growth/experimentation/)を参照してください。

## リソース {#resources}

私たちがどのように、何を取り組んでいるかを確認するための有用なリンク:

- [Growth の方向性](/handbook/product/groups/growth/direction/)
- [Growth エピック Kanban ボード](https://gitlab.com/groups/gitlab-org/-/epic_boards/2079888)
- [開発用 Growth Issue Kanban ボード](https://gitlab.com/groups/gitlab-org/-/boards/1392106?&label_name%5B%5D=devops%3A%3Agrowth)
- [実験](experimentation/)
- [GLEX](https://gitlab.com/gitlab-org/ruby/gems/gitlab-experiment)
- [実験ロールアウト](https://gitlab.com/groups/gitlab-org/-/boards/1352542?label_name[]=experiment-rollout)

### チームのボード {#team-boards}

現在の作業は、以下のボードで追跡しています:

- [Driving First Orders エピックボード](https://gitlab.com/groups/gitlab-org/-/epic_boards/2079888?label_name[]=Growth%3A%20Driving%20First%20Orders&label_name[]=Next%20Up&label_name[]=section%3A%3Agrowth) - 次に取り組む Driving First Orders のエピック
- [機能開発ボード](https://gitlab.com/groups/gitlab-org/-/boards/11511990?not[label_name][]=Category%3AEngineering%20Excellence&not[label_name][]=type%3A%3Amaintenance&label_name[]=section%3A%3Agrowth&label_name[]=Growth%3A%20Driving%20First%20Orders&milestone_title=Started) - 現在のマイルストーンにおける Driving First Orders の機能開発
- [優先バグボード](https://gitlab.com/groups/gitlab-org/-/boards/11512116?milestone_title=Started&label_name[]=section%3A%3Agrowth&label_name[]=type%3A%3Abug) - 現在のマイルストーンのバグ
- [技術的負債ボード](https://gitlab.com/groups/gitlab-org/-/boards/11512114?not[label_name][]=Category%3AEngineering%20Excellence&not[label_name][]=Engineering%20Time&label_name[]=section%3A%3Agrowth&label_name[]=type%3A%3Amaintenance&milestone_title=Started) - 現在のマイルストーンのメンテナンス作業
- [Engineering Excellence ボード](https://gitlab.com/groups/gitlab-org/-/boards/11512115?milestone_title=Started&label_name[]=section%3A%3Agrowth&label_name[]=Engineering%20Time&label_name[]=Category%3AEngineering%20Excellence) - 現在のマイルストーンの Engineering Time と Engineering Excellence の作業

## チームデイ {#team-days}

時折、Growth のカウンターパートと楽しいソーシャルアクティビティに参加するためのバーチャルチームデイやミーティングを開催します。

- [FY23-Q2 2022](https://gitlab.com/gitlab-org/growth/team-tasks/-/issues/625)
- [2021 年 12 月](https://gitlab.com/gitlab-org/growth/team-tasks/-/issues/522)
- [2021 年 4 月](https://gitlab.com/gitlab-org/growth/product/-/issues/1675)
- [2020 年 9 月](https://gitlab.com/gitlab-org/growth/team-tasks/-/issues/175)
- [2020 年 5 月](https://gitlab.com/gitlab-org/growth/team-tasks/-/issues/119)

## 共通リンク {#common-links}

- [Growth ステージ](/handbook/engineering/development/growth/)
- [Growth ワークフローボード](https://gitlab.com/groups/gitlab-org/-/boards/4152639)
- [Slack](https://gitlab.slack.com/archives/s_growth) の `#s_growth`（GitLab 内部）
- [Growth の機会](https://gitlab.com/gitlab-org/growth/product/-/issues)
- [Growth ミーティングとアジェンダ](https://drive.google.com/drive/search?q=type:document%20title:%22Growth%20Weekly%22)（GitLab 内部）
- [GitLab バリュー](/handbook/values/)

## CustomersDot トライアルコラボレーション {#customersdot-trials-collaboration}

トライアルのオーナーシップ、およびトライアル作業における Fulfillment/Monetization チームとのコラボレーションの詳細については、[トライアルのオーナーシップとコラボレーションフレームワーク](trials-ownership.md)を参照してください。このフレームワークでは、Growth がトライアルのエントリーポイントを所有し、Fulfillment/Monetization がより深いトライアルコードベースと CustomersDot のすべてのサポートを所有するという概念的なオーナーシップモデルに加え、意思決定フレームワークと優先度の競合に対するエスカレーションパスを定めています。
