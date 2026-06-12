---
title: "デベロッパーアドボケイトのコンサルティングワークフロー"
description: "デベロッパーアドボカシーチームのコンサルティングワークフローとリクエストについて学びます。"
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/consultancy/
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
lastmod: 2026-06-08T11:30:44+02:00
translated_at: "2026-06-12T21:17:35Z"
translator: claude
stale: false
---

各チームや各部門は、[デベロッパーアドボケイトがサブジェクトマターエキスパート (SME)](/handbook/marketing/developer-relations/developer-advocacy/#i-classfa-fa-users-aria-hiddentruei-team-members-and-focus-areas) である領域や、その経験やつながりのネットワークで支援できる領域について、コンサルティングをリクエストできます。

## 構成

コンサルティングのリクエストには [`DA-Consulting::` スコープ付きラベル](/handbook/marketing/developer-relations/developer-advocacy/workflow/#consulting-labels)が付けられ、[`DA-Type::Consulting` ラベルで事前フィルタリングされた一覧](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=DA-Type%3A%3AConsulting&first_page_size=20)で確認できます。Issue は[年間コンサルティングエピック](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/work_items?sort=created_date&state=opened&label_name%5B%5D=DA-Type%3A%3AConsulting&type%5B%5D=8&first_page_size=20)にグループ化されています。

### デベロッパーアドボケイトのコンサルティングをリクエストする

> **重要**: コンサルティングをリクエストする前に、そのリクエストがデベロッパーアドボカシーチームの支援を必要とするものであることを確認してください。ほとんどの場合、まず Solution チームや Demo Architects チームに支援を求めることになります。

デベロッパーアドボケイトとリクエスト元は、[`consultancy-request` Issue テンプレート](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/new?issuable_template=consultancy-request)を使用できます。

### 意思決定マトリクス

1. [ARR](https://internal.gitlab.com/handbook/sales/annual-recurring-revenue-arr/)（および [SKU](https://about.gitlab.com/pricing/) の influenced ARR）
1. [会社の方向性](https://about.gitlab.com/direction/)とデベロッパーリレーションズ戦略との整合性（たとえば、その四半期の特定のバーティカル）。
1. 専門知識とリソース。特定のプログラミング言語/フレームワークでデベロッパーアドボケイトが対応できない場合、またはコンサルティングの準備をするリソースがない場合、私たちはそのリクエストを却下し、SA/CSM/Engineering チームの代替 DRI を提案します。

## コンサルティング領域

リクエストできる領域やトピックは多岐にわたります。デベロッパーアドボケイトにとって重要なのは、リクエストが彼らの専門知識とリソースに合致し、範囲が広すぎず、成功の終了基準があることです。すべてのコンサルティングのリクエストは、学んだことや作成したリソースをより多くの[コンテンツ](/handbook/marketing/developer-relations/developer-advocacy/content/)に再利用する機会へとつなげるべきです。

一般的に、すべての製品領域、機能、テクノロジーをリクエストできます。以下のセクションでは、最近のリクエストとその結果の例をいくつか紹介します。

### GitLab Duo Agent Platform の導入

ゴール: 顧客が GitLab Duo Agent Platform を導入できるよう支援する。

デベロッパーアドボケイトには、次のような支援が推奨されます。

- （ライブの）プログラミングワークショップ（依頼された言語に堪能で自信がある場合）。
- GitLab UI と IDE のセットアップおよびトラブルシューティング。
- 最新の製品アップデートと改善。
- ベストプラクティスのリソース、デモ、プロダクトツアー、ユースケース（[コンテンツライブラリ](/handbook/marketing/developer-relations/developer-advocacy/content/#content-library)を参照）
- Slack [#sme-ai](https://gitlab.enterprise.slack.com/archives/C05GK6M7FBQ) でのフィールドチームのサポート

顧客向けワークショップでは、部門横断的なコラボレーションが必要です。[Solution Architects](/handbook/solutions-architects/) が [GitLab Duo と AI の Proof of Value (PoV) ワークショップ](/handbook/solutions-architects/playbooks/pov/ai/)をリードします。彼らは [SA Demo Architects](/handbook/solutions-architects/center-of-excellence/demo-architecture/) と [Customer Success Management team](/handbook/customer-success/) から、ワークショップのアウトラインを作成する支援を受けます。デベロッパーアドボケイトには、プログラミングワークショップ、IDE のセットアップとトラブルシューティング、そして顧客の（エンジニアリング）チームとともに開発者としてベストプラクティスを広く共有することによる支援が推奨されます。

顧客からのフィードバックは、バグレポート、機能提案、ドキュメントの更新、ブログのチュートリアル、デモのストーリーなど、さまざまなものを生み出すきっかけになります。顧客とのエンゲージメント中は、必ず耳を傾け、メモを取るようにしてください。

最近の顧客ワークショップの例は、[事前フィルタリングされた Duo Agent Platform のコンサルティング Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/?sort=updated_desc&state=all&label_name%5B%5D=DA-Type%3A%3AConsulting&search=dap&first_page_size=20)（内部）で確認できます。

{{% details summary="Duo Enterprise のアーカイブ済みの結果" %}}

顧客の導入エンゲージメントの例は、[FY25Q2 OKR KR](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/8073)、[GitLab Duo (AI) Adoption FY25 (DevRel) エピック](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/475)、および[この事前フィルタリングされた Issue 一覧](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/?sort=updated_desc&state=all&label_name%5B%5D=DA-Type%3A%3AConsulting&search=duo&first_page_size=20)で確認できます。

- GitLab Duo の顧客向けワークショップ（[コンテンツハンドブックの一覧](/handbook/marketing/developer-relations/developer-advocacy/content/#workshops)）
  - [GitLab Duo Use Case - Python workshop 2024-07-10](https://gitlab.com/gitlab-da/use-cases/ai/ai-workshops/gitlab-duo-use-case-python-2024-07-10)
  - [Build your own adventure with GitLab Duo - C++ observability tool with embedded hardware sensors](https://gitlab.com/gitlab-da/use-cases/ai/ai-workshops/gitlab-duo-workshop-build-your-own-adventure-cpp-2024-12-05)
- ブログ: 顧客とフィールドチーム向けのベストプラクティスのチュートリアル（[AI/ML ブログカテゴリー](https://about.gitlab.com/blog/categories/ai-ml/)/）
- ドキュメント
  - [GitLab Duo Use Case ドキュメント](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html)と関連リソースの作成と保守:
    - [GitLab Duo Prompts library](https://gitlab.com/gitlab-da/use-cases/ai/ai-workflows/gitlab-duo-prompts)
    - [GitLab Duo Challenges](https://gitlab.com/gitlab-da/use-cases/ai/ai-workflows/gitlab-duo-challenges)
  - [Improve GitLab Duo Onboarding](https://gitlab.com/gitlab-org/gitlab/-/issues/467162)
- 特定の顧客ワークフロー（リファクタリング、コード生成プロンプトなど）を支援する [GitLab Duo Coffee Chats](/handbook/marketing/developer-relations/developer-advocacy/projects/#gitlab-duo-coffee-chat) の継続。
- Product/Engineering: 機能提案とバグレポート（[FY25 エピック](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/475#feature-proposals)（内部））。
  - Duo Chat に `/fix` スラッシュコマンドを追加（[Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/443366)）。

{{% /details %}}

SME DRI: @dnsmichi

### MLOps の導入

ゴール: データサイエンティストと [MLOps](https://about.gitlab.com/direction/modelops/mlops/) エンジニアが DevSecOps プラクティスを採用し、自動化、再現可能なワークフロー、標準化、インフラの自動プロビジョニングといったメリットを享受できるようにする。

最近の顧客ワークショップの例は、[この事前フィルタリングされた Issue 一覧](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/?sort=updated_desc&state=all&label_name%5B%5D=DA-Type%3A%3AConsulting&search=mlops&first_page_size=20)（内部）で確認できます。

SME DRI: @waarias
