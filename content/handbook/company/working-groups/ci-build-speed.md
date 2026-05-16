---
title: "CI/CD ビルドスピード（結果までの時間）"
description: "目標は GitLab CI ビルドパフォーマンスを市場のリーダーとして確立することです。"
status: active
upstream_path: /handbook/company/working-groups/ci-build-speed/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-04T01:51:25+00:00"
---

## 属性

| プロパティ     | 値 |
|--------------|-------|
| 作成日         | 2023-12-01 |
| 終了予定日     | 2024-03-31 |
| Slack        |（社内からのみアクセス可能）|
| Google Doc   | [CI Build Speed Working Group Agenda](https://docs.google.com/document/d/1MAbp148_KVzznyvzSRkeP3RqpobS8TJ6IVJxgIBL8fs/edit?usp=sharing)（社内からのみアクセス可能）|

## 概要

CI ビルドスピードとパフォーマンス（結果までの時間）を測定するための再現性のあるプロセスとフレームワークを確立するワーキンググループを設置することを目指します。目的は、市場や顧客に対して GitLab の見解を示し、GitLab CI ビルドパフォーマンスを市場のリーダーとして位置付け、CI ビルドのコンピュートコストを抑えながら開発者の効率を最大化できるよう、最適化に関するガイダンスを顧客に提供することです。

このグループは主に CI ビルドスピードの測定に焦点を当てており、GitLab ホスト型ランナーと GitHub ホスト型ランナー、Circle CI などのサードパーティソリューションや他のプラットフォームホスト型ランナーとの比較を行います。

**背景**:

CI ビルドスピードとパフォーマンス（結果までの時間）および CI ビルドコスト効率は、市場における CI/CD ソリューションの成熟度が向上している中で特に重要な競争軸です。[ブランド FY23 Q4 定性調査](https://docs.google.com/presentation/d/1z8hwWLLXJOr3jZOA1ol9jPvOXEmesSrA45sdM-RdMeo/edit?usp=sharing) のデータは「GitLab はスピードの連想において競合他社をリードしている」ことを示しています。しかし、私たちの内部ベンチマークテスト（[スライド](https://docs.google.com/presentation/d/1x79Nv-YaYOba_fPTOqQRlMfullYeW49IkiIh0Og3zvs/edit?usp=sharing)、[レポート](https://docs.google.com/document/d/1FobCrVqtUtUjXJkBRtoi39bjVRqEFORifN4jDFQgbMs/edit?usp=sharing)）では、GitLab SaaS での CI ビルドパフォーマンスについて混合した結果が出ています。そのため、GitLab SaaS 顧客の CI ビルドパフォーマンスに対する認識は、セルフマネージド顧客や、自社で CI ビルド環境を管理している GitLab SaaS 顧客とは異なる可能性があります。

[Github](https://github.blog/engineering/experiment-the-hidden-costs-of-waiting-on-slow-build-times/) や [Harness.io](https://www.harness.io/blog/fastest-ci-tool) などの競合他社は、CI ビルドスピードとパフォーマンスについて議論する際に一般的にビルド時間の長さに焦点を当てています。ビルド時間の長さはデフォルトのパフォーマンス指標ですが、ワーキンググループはフレームワークに含めるべき他の個別測定項目があるかどうかを評価する必要があります。

また、[puzl.cloud](https://puzl.cloud/products/ci-runners-for-gitlab) や [actuated.dev](https://actuated.com/) などの新規参入プレイヤーが GitLab SaaS ランナーの最大 5 倍のビルドスピードを主張しており、CI ビルドスピードのリーダーとしての GitLab のポジションに対する認識が変化しつつあります。

## スコープ外

顧客ジョブのビルドスピードの可視化と観察可能性は、[Fleet Visibility](https://about.gitlab.com/direction/verify/fleet_visibility/) チームの [CI Insights](https://gitlab.com/groups/gitlab-org/-/epics/12071) の一部として扱われるため、このワーキンググループのスコープには含まれません。

## ビジネス成果

1. CI ビルドスピードとパフォーマンスを測定するための再現性のあるプロセスとフレームワークを確立する。このプロセスには測定頻度（四半期ごと、半年ごと、年次）を含める必要があります。
1. CI ビルドスピードと効率の向上に特化した競合他社の製品機能について深く分析する。
1. CI ビルドスピードとパフォーマンス改善に関する技術分析を実施する。
1. ビルドスピードとパフォーマンスに特化した GitLab CI の競合力を向上させるための新規投資または機能の優先順位付けについて、プロダクトリーダーシップへ推奨事項を提出する。
1. GitLab での CI ビルドスピードとコスト効率を向上させる方法についての顧客向け包括的資料を作成する。
1. CI ビルドスピードデータをブログ投稿やその他のマーケティング素材で外部に公開する方法について法務部門でレビューおよび合意を得る。

| トピック                     | DRI                |
|---------------------------|------------------------|
| CI ベンチマークフレームワーク - 設計ドキュメント | @grzesiek |
| CI ベンチマークフレームワーク - 実装 | tbd |
| 競合他社分析             | tbd |
| 技術的改善              | tbd |
| プロダクトへの推奨事項   | @gabrielengel_gl |
| 顧客ガイド              | tbd |
| コミュニケーションレビュー | @gabrielengel_gl |

## 終了条件

1. CI ビルドスピードベンチマークプロセスをハンドブックに定式化する
1. CI ビルドスピードの継続的なモニタリング用内部チャートを作成する
1. GitLab CI ビルドスピードを改善する方法に関する最初のブログ投稿を公開する

## ロールと責任

| ワーキンググループの役割 | 担当者                 |
|-----------------------|------------------------|
| エグゼクティブスポンサー | Mike Flouton @mflouton |
| ファシリテーター & メンバー | Gabriel Engel @gabrielengel_gl |
| メンバー              | Allison Browne @allison.browne |
| メンバー              | Grzegorz Bizon @grzesiek |
| メンバー              | Arran Walker @ajwalker |
| メンバー              | Oliver Falk @ofalk |
| メンバー              | Marius Bobin @mbobin |
| メンバー              | Cheryl Li @cheryl.li |
