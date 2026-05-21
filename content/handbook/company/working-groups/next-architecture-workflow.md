---
title: "次世代アーキテクチャワークフロー"
description: "このワーキンググループのチャーターは、アーキテクチャエボリューションワークフローの次のイテレーションを定義・実装することです。"
status: active
upstream_path: "/handbook/company/working-groups/next-architecture-workflow/"
upstream_sha: "440fbdbea018814f9317e3b1520eff5dda4ecb20"
translated_at: "2026-05-21T21:07:52Z"
translator: "claude"
stale: false
lastmod: "2026-05-20T09:32:02-07:00"
---

## 属性

| プロパティ        | 値                                         |
|-----------------|-----------------------------------------------|
| 作成日    | 2022 年 7 月 1 日                                  |
| 終了日        | 2022 年 12 月 31 日                             |
| Slack           | [#architecture](https://gitlab.slack.com/archives/CJ4DB7517)（社内）     |
| Google Doc      | [Working Group Agenda](https://docs.google.com/document/d/1n1pslXw6yeoqRmsWGi4VYu9bPg8k46IIXqdUTJR8HSU)（社内） |

### 問題の記述

1. [クロスファンクショナル優先順位付け](/handbook/product/product-processes/cross-functional-prioritization/)フレームワークは、メンテナンス活動に一定量の時間を割り当てています。エンジニアリングマネージャーとエンジニアが、[アーキテクチャエボリューションブループリント](https://gitlab.com/gitlab-org/gitlab/-/tree/master/doc/architecture/blueprints)で定義されたような大規模なクロスファンクショナルプロジェクトを複数のチームにまたがって実行するための調整方法については規定していません。
1. [アーキテクチャエボリューションワークフロー](/handbook/engineering/architecture/workflow/)は複雑で、多くのステップがあり、ワークフローの採用と大規模な長期イニシアティブの成功が困難です。
1. 現在の形式では、[アーキテクチャエボリューションワークフロー](/handbook/engineering/architecture/workflow/)はエンジニアリングの各部門内の多くのイニシアティブで活用されていません。独自のロードマップがなければ、プロダクト自身のロードマップと優先順位を比較検討することが困難です。

### 終了基準 {#exit-criteria}

このワーキンググループのチャーターは、[アーキテクチャエボリューションワークフロー](/handbook/engineering/architecture/workflow/)の次のイテレーションを定義・実装することです。

ワークフローをより使いやすく直感的にするだけでなく、プロセス自体を改善し、チームメンバーがワークフローを使って優れた成果を提供するためのよりよいポジションを与えることを目指しています。

- このコンテキストにおける「アーキテクチャ」と「ブループリント」の定義を確立します。
- 現在および過去の[エンジニアリングアロケーション](/handbook/product/product-processes/#prioritization-framework)イニシアティブの棚卸しを行い、そのようなイニシアティブが[ブループリント](https://gitlab.com/gitlab-org/gitlab/-/tree/master/doc/architecture/blueprints)として定義でき[アーキテクチャエボリューションワークフロー](/handbook/engineering/architecture/workflow/)に従う範囲を評価します。
- ブループリントでの提案作成のエントリーバリアを下げます。
- ブループリントをいつ使用すべきかの基準を確立します。
- クロスファンクショナルなタッチポイントを特定し、[本番環境対応レビュー](/handbook/engineering/infrastructure-platforms/production/readiness/)、[AppSec レビュー](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/review-process)、[リリースポストの作成](https://docs.gitlab.com/development/documentation/release_notes/)などのアップストリームプロセスを統合します。
- [クロスファンクショナル優先順位付け](/handbook/product/product-processes/cross-functional-prioritization/)フレームワークを通じて、このプロセスとエンジニアリングロードマップをプロダクト計画と優先順位付けに組み込む戦略を開発します。

### コンテキスト

- [アーキテクチャエボリューションワークフロー](/handbook/engineering/architecture/workflow/)は複雑で、複数のツールとプロジェクトにまたがっており、外部コントリビューターが参加できるものではありません。
- [アーキテクチャブループリント](https://gitlab.com/gitlab-org/gitlab/-/tree/master/doc/architecture/blueprints)は優れたコンテキストと詳細を提供しますが、プロダクトの優先順位付けとは完全に切り離されており、ワークストリームに取り込まれることはほとんどありません。
- 技術的なイニシアティブを含む[ワーキンググループ](/handbook/company/working-groups/)の成功率は低くなっています。多くのグループが終了基準の一部としてブループリントを作成することを選択しますが、ブループリントは標準的ではなく、作業が実際に完了することをほとんど保証しません。
- [クロスファンクショナル優先順位付け](/handbook/product/product-processes/cross-functional-prioritization/)は[エンジニアリングアロケーション](/handbook/product/product-processes/#prioritization-framework)を置き換えることを目指していますが、複数のプロダクトステージにまたがるエンジニアが関与する取り組みの調整方法については規定していません。

以下は、[Rate Limit Architecture](/handbook/company/working-groups/rate-limit-architecture/)ワーキンググループの録画で、ワーキンググループ終了後に成功した実装につながる終了基準を再定義しようとする中で、このトピックに関する有機的な議論が含まれています:


{{< youtube "um9deEVp618?start=1961" >}}


> *注:* この動画はプライベートです。埋め込み動画が再生できない場合は[こちらのリンク](https://www.youtube.com/watch?v=um9deEVp618&t=1961s)をお試しください。

### 以前の取り組み

#### アーキテクチャキックオフ ワーキンググループ

[アーキテクチャキックオフ](/handbook/company/working-groups/architecture-kickoff/)ワーキンググループは主に[3/6/12 ヶ月の技術ロードマップの定義](/handbook/engineering/architecture/roadmap/)に関わっていました。このワーキンググループはそれを引き継ぎ、このロードマップを時間をかけて維持するプロセスをさらにイテレーションし、その実装をより効果的に促進することを目的としています。

#### スペシャルインタレストグループ

以前、私たちは Special Interest Groups（SIG）の形でクロスファンクショナルな作業を促進するための新しい組織構造を導入しようとしました（[`gitlab-com/www-gitlab-com!104378`](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/104378)を参照）が、このアプローチでは段階的な価値を示すことが困難でした。

まず既存のプロセスの統合と合理化、および現在の形でのワーキンググループの成功率の向上に注力することで、より大きな成功を期待しています。

## 役割と責任

| ワーキンググループの役割       | 担当者                          | 役職                                          |
|--------------------------|---------------------------------|------------------------------------------------|
| DRI                      | Marshall Cottrell               | Principal, Strategy and Operations (Technical) |
| エグゼクティブステークホルダー    | Christopher Lefelhocz           | VP of Development                              |
| メンバー                   | Gerardo "Gerir" Lopez-Fernandez | Engineering Fellow, Infrastructure             |
| メンバー                   | Joshua Lambert                  | Director of Product, Enablement                |
| メンバー                   | Sam Goldstein                   | Director of Engineering, Ops                   |
| メンバー                   | Andrew Newdigate                | Distinguished Engineer, Infrastructure         |
| メンバー                   | Kamil Trzciński                 | Distinguished Engineer, Ops and Enablement     |
| メンバー                   | Philippe Lafoucrière            | Security Architect, Security                   |
| メンバー                   | Grzegorz Bizon                  | Principal Backend Engineer, Ops                |
| メンバー                   | Lucas Charles                   | Staff Backend Engineer, Sec::Static Analysis   |
| メンバー                   | João Pereira                    | Staff Backend Engineer, Package                |
| メンバー                   | Natalia Tepluhina               | Staff Frontend Engineer, Plan                  |
| メンバー                   | Tyler Amos                      | Staff Backend Engineer, Fulfillment Platform  |
