---
title: "Developer Advocate のコンサルティングワークフロー"
description: "Developer Advocacy チームのコンサルティングワークフローとリクエストについて学びます。"
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/consultancy/
upstream_sha: 3f9509996a1f405d6126d2081aebad493e4a3d21
lastmod: 2026-06-08T13:31:46-07:00
translated_at: "2026-06-08T00:00:00Z"
translator: claude
stale: false
---

チームや部門は、[Developer Advocate が分野別専門家（SME）](/handbook/marketing/developer-relations/developer-advocacy/#i-classfa-fa-users-aria-hiddentruei-team-members-and-focus-areas)である分野や、彼らの経験やコネクションネットワークで支援できる場合に、コンサルティングをリクエストできます。

## 体制

コンサルティングリクエストは [`DA-Consulting::` スコープラベル](/handbook/marketing/developer-relations/developer-advocacy/workflow/#consulting-labels)を使用してラベル付けされ、[`DA-Type::Consulting` ラベルで事前フィルターされたリスト](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=DA-Type%3A%3AConsulting&first_page_size=20)で確認できます。Issue は[年次のコンサルティングエピック](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/work_items?sort=created_date&state=opened&label_name%5B%5D=DA-Type%3A%3AConsulting&type%5B%5D=8&first_page_size=20)にグループ化されています。

### Developer Advocate のコンサルティングをリクエストする

> **重要**: コンサルティングをリクエストする前に、そのリクエストが Developer Advocacy チームの支援を必要とすることを確認してください。ほとんどの場合、まず Solution and Demo Architects チームに支援を求めます。

Developer Advocate とリクエスト元は [`consultancy-request` Issue テンプレート](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/new?issuable_template=consultancy-request)を使用できます。

### 意思決定マトリックス

1. [ARR](https://internal.gitlab.com/handbook/sales/annual-recurring-revenue-arr/)（および [SKU](https://about.gitlab.com/pricing/) に対する影響を受けた ARR）
1. [会社の方向性](https://about.gitlab.com/direction/)および Developer Relations 戦略との整合（たとえば、四半期内の特定の Vertical）。
1. 専門知識とリソース。Developer Advocate が特定のプログラミング言語・フレームワークで対応できない場合、またはコンサルティングを準備するリソースがない場合は、リクエストを拒否し、SA/CSM/Engineering チームの代替の DRI を提案します。

## コンサルティング分野

リクエストできる分野やトピックは多岐にわたります。Developer Advocate にとっては、リクエストが彼らの専門知識やリソースに合致し、過度に広範でなく、成功の出口基準があることが重要です。すべてのコンサルティングリクエストは、学んだことや作成したリソースをより多くの[コンテンツ](/handbook/marketing/developer-relations/developer-advocacy/content/)に再利用する機会へと変えるべきです。

一般的に、すべての製品分野、機能、技術についてリクエストできます。以下のセクションでは、最近のリクエストとその結果の例をいくつか紹介します。

### GitLab Duo Agent Platform の採用

目標: 顧客が GitLab Duo Agent Platform を採用するのを支援する。

Developer Advocate には、次のような支援が推奨されています。

- （ライブ）プログラミングワークショップ。リクエストされた言語に流暢で自信がある場合。
- GitLab UI と IDE のセットアップとトラブルシューティング。
- 最新の製品アップデートと改善。
- ベストプラクティスのリソース、デモ、製品ツアー、ユースケース（[コンテンツライブラリ](/handbook/marketing/developer-relations/developer-advocacy/content/#content-library)を参照）
- Slack でのフィールドチームの支援、[#sme-ai](https://gitlab.enterprise.slack.com/archives/C05GK6M7FBQ)

顧客向けワークショップでは部門横断的なコラボレーションが必要です。[Solution Architects](/handbook/solutions-architects/) が [GitLab Duo および AI の Proof of Value（PoV）ワークショップ](/handbook/solutions-architects/playbooks/pov/ai/)をリードします。彼らは [SA Demo Architects](/handbook/solutions-architects/center-of-excellence/demo-architecture/) と [Customer Success Management チーム](/handbook/customer-success/)からワークショップのアウトライン構築の支援を受けます。Developer Advocate には、プログラミングワークショップ、IDE のセットアップとトラブルシューティング、そして一般的に開発者として顧客の（エンジニアリング）チームとベストプラクティスを共有することで支援することが推奨されます。

顧客のフィードバックは、バグレポート、機能提案、ドキュメント更新、ブログチュートリアル、デモストーリーなど、さまざまなものに着想を与えます。顧客とのエンゲージメント中は、常に耳を傾けてメモを取るようにしてください。

最近の顧客向けワークショップの例は、[事前フィルターされた Duo Agent Platform のコンサルティング Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/?sort=updated_desc&state=all&label_name%5B%5D=DA-Type%3A%3AConsulting&search=dap&first_page_size=20)（社内）で確認できます。

{{% details summary="Duo Enterprise のアーカイブ済み結果" %}}

顧客採用エンゲージメントの例は、[FY25Q2 OKR KR](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/8073)、[GitLab Duo (AI) Adoption FY25 (DevRel) epic](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/475)、および[この事前フィルターされた Issue リスト](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/?sort=updated_desc&state=all&label_name%5B%5D=DA-Type%3A%3AConsulting&search=duo&first_page_size=20)で確認できます。

- GitLab Duo の顧客向けワークショップ（[コンテンツハンドブックのリスト](/handbook/marketing/developer-relations/developer-advocacy/content/#workshops)）
  - [GitLab Duo Use Case - Python workshop 2024-07-10](https://gitlab.com/gitlab-da/use-cases/ai/ai-workshops/gitlab-duo-use-case-python-2024-07-10)
  - [Build your own adventure with GitLab Duo - C++ observability tool with embedded hardware sensors](https://gitlab.com/gitlab-da/use-cases/ai/ai-workshops/gitlab-duo-workshop-build-your-own-adventure-cpp-2024-12-05)
- ブログ: 顧客とフィールドチーム向けのベストプラクティスチュートリアル（[AI/ML ブログカテゴリ](https://about.gitlab.com/blog/categories/ai-ml/)/)
- ドキュメント
  - [GitLab Duo Use Case ドキュメント](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html)とリンクされたリソースの執筆とメンテナンス:
    - [GitLab Duo Prompts ライブラリ](https://gitlab.com/gitlab-da/use-cases/ai/ai-workflows/gitlab-duo-prompts)
    - [GitLab Duo Challenges](https://gitlab.com/gitlab-da/use-cases/ai/ai-workflows/gitlab-duo-challenges)
  - [GitLab Duo オンボーディングの改善](https://gitlab.com/gitlab-org/gitlab/-/issues/467162)
- 特定の顧客ワークフロー（リファクタリング、コード生成プロンプトなど）を支援する [GitLab Duo Coffee Chats](/handbook/marketing/developer-relations/developer-advocacy/projects/#gitlab-duo-coffee-chat) の継続。
- 製品・エンジニアリング: 機能提案とバグレポート（[FY25 epic](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/475#feature-proposals)（社内））。
  - Duo Chat に `/fix` スラッシュコマンドを追加（[Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/443366)）。

{{% /details %}}

SME DRI: @dnsmichi

### MLOps の採用

目標: データサイエンティストと [MLOps](https://about.gitlab.com/direction/modelops/mlops/) エンジニアが DevSecOps プラクティスを採用し、自動化、再現可能なワークフロー、標準化、インフラストラクチャの自動プロビジョニングのメリットを享受できるようにする。

最近の顧客向けワークショップの例は[この事前フィルターされた Issue リスト](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/?sort=updated_desc&state=all&label_name%5B%5D=DA-Type%3A%3AConsulting&search=mlops&first_page_size=20)（社内）で確認できます。

SME DRI: @waarias
