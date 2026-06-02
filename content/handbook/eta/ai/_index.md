---
title: "Enterprise AI"
description: "Enterprise AI は、AI ツール、ガバナンス、そして全機能で AI をスケールさせるオペレーティングモデルを担う GitLab の中央プラットフォームチームです。"
upstream_path: "/handbook/eta/ai/"
upstream_sha: 839c14e40e08e6fd4099a01ee623aaf85faafd12
translated_at: "2026-06-01T21:12:29Z"
translator: claude
stale: false
lastmod: "2026-06-01T17:35:18+01:00"
---
<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Enterprise AI が存在する目的

GitLab は AI ファーストの会社になりつつあります。Enterprise AI は、その社内側の AI バックボーンです。プラットフォーム、ガバナンス、そしてオペレーティングパターンを通じて、すべてのチームが AI を「実験の余興」ではなく「自分の仕事の中核要素」として扱えるようにします。

具体的には、目指すのはフリクションの除去です。チームメンバーは、コンテキストを求めてツール間を宝探しのように渡り歩くのをやめ、スレッドを手作業で繋ぎ合わせるのをやめ、共通の指示書がないために同じ作業を繰り返すのをやめるべきです。組織の記憶はクエリ可能になります。繰り返しの作業はエージェントの仕事になります。人間は方向を示し、エージェントが判断を必要としない部分を処理します。

エージェント時代に GitLab が顧客のために構築するものを、私たち自身が体現します。Enterprise AI は、私たちが顧客に味わってもらいたいパターンの「カスタマーゼロ」を自分たち自身が務めている GitLab そのものです。

## 私たちが所有するもの

私たちは GitLab の AI プラットフォーム (以下に挙げる Glean、Claude、Relevance.ai) と、その周辺に位置するガバナンスとスタンダード、そしてツールを成果へと変えるための機能横断のパターンとイネーブルメントを所有しています。AI ツールに関しては、CorpSec、Legal、Privacy への単一のインターフェイスを担っているため、各機能がそれらのレビューを個別に交渉する必要はありません。

## どう運営するか

私たちは Hub and Spoke and Hub モデルで働いています。Enterprise AI はプラットフォーム Hub です。各ファンクション (組織機能) には、AI Transformation Owner (ATO) が率いるスポークがあり、プラットフォームのケイパビリティをそのファンクションの優先事項に接続します。各ファンクションの内側には、Champion による Hub があり、日々の業務にプラクティスとパターンを持ち込みます。完全なオペレーティングモデルについては [Hub and Spoke](/handbook/eta/ai/strategy/hub-and-spoke/) を参照してください。

## 私たちのツール

基盤となるツールは GitLab そのものです。これは私たちが顧客と共有しているプラットフォームであり、適合する場面では常に GitLab と Duo Agent Platform を主役にします。私たちが構築するものの多くは、以下の他のプラットフォームでも動作します。適切なツールが勝者です。Enterprise AI は GitLab を所有・運用していないため、このセクションには GitLab のツールページはありません。その業務はエンジニアリング組織、特に [AI engineering チーム](/handbook/engineering/ai/) が担当しています。私たちの業務が彼らの業務と交差する場面では、直接連携します。

GitLab とは別に、私たちは異なる種類の業務のために 3 つの AI プラットフォームを自分たちで運用しています。

- **[Glean](/handbook/eta/ai/tools/glean/)**, 社内システム全体でナレッジマネジメントと個人スコープの自動化を担う GitLab のパーソナル AI。
- **[Claude](/handbook/eta/ai/tools/claude/)**, 業務を進めるための GitLab のデスクトップ AI: ドラフト作成、推論、コード、エージェント型タスク。
- **[Relevance.ai](/handbook/eta/ai/tools/relevance-ai/)**, 全社規模の自律エージェントのための GitLab のエージェント型 AI プラットフォーム。

## 私たちへの相談方法

- 質問、FAQ、インテークサポートは Slack の [**#enterprise-ai-collab**](https://gitlab.enterprise.slack.com/archives/C0AE5DX6SQJ) に参加してください。
- アイデアやユースケースは [Enterprise AI Intake Request](https://gitlab.com/groups/gitlab-com/eta/ent-ai/-/work_items/new?type=EPIC&initialCreationContext=list-route) から送信してください。

## 私たちの所属

Enterprise AI は、CIO 配下の Enterprise Technology and AI (ETA) の一部です。
