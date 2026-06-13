---
title: UX オペレーション
description: >-
  ヘッドカウント計画、調達、ラベル、チームプロセスを含む、UX チームメンバー向けの運用ガイダンス。
upstream_path: /handbook/product/ux/operations/
upstream_sha: ccb1e392292beca5aa187b61502738defd99d030
translated_at: "2026-06-13T21:07:03Z"
translator: claude
stale: false
lastmod: "2026-06-12T14:42:54-07:00"
---

このページには、GitLab の UX 部門で働くための運用情報が記載されています。

## ヘッドカウント計画

UX チームメンバーは、Product Management および Engineering 全体の安定したカウンターパートと協力して働きます。アライメントのモデルは、職種や作業の種類によって異なります。

### プロダクトデザイン

プロダクトデザイナーは、主に次の2つのモデルのいずれかで働きます。

- **ステージグループアライメント:** ステージグループに割り当てられたデザイナーは、特定の製品領域について専任の PM および Engineering チームと協業します
- **プロジェクトベースの業務:** デザイナーは、複数のグループにまたがる、または独立して運営される横断的なプラットフォームイニシアチブ（デザインシステム、ナビゲーション、戦略的プロジェクト）に取り組みます

ステージアライン型ロールの計画比率:

- プロダクトデザイナー対 PM = 1:1
- フロントエンドエンジニア 1〜3名に対してプロダクトデザイナー 1名。4〜5名に対して 2名

### UX リサーチ

UX リサーチャーはセクション内の複数グループをサポートします。

- UX リサーチャー対プロダクトマネージャー比率 = 1:5
- UX リサーチャー対エンジニア比率 = 約 1:35

### テクニカルライティング

テクニカルライターはそれぞれ複数のステージグループをサポートします。

- テクニカルライター対ステージグループ比率 = 1:3
- テクニカルライター対エンジニア比率 = 約 1:21

### デザインシステム

デザインシステムチームは独立して運営されており、すべてのプロダクトデザイナー、エンジニア、テクニカルライターに役立つプラットフォーム全体のインフラを構築しています。このチームは、特定のステージグループや PM には割り当てられていません。

### マネジメント

各機能に応じて、マネージャーのサポート体制が適切に整えられています。

- UX リサーチおよびプロダクトデザインの場合、マネージャー対直接の部下比率 = 約 1:5
- テクニカルライティングの場合、マネージャー対直接の部下比率 = 約 1:7

## 調達リクエスト

新規プロダクト／サービスをリクエストするには、[UX 調達提案 Issue テンプレート](https://gitlab.com/gitlab-com/Product/-/issues/new?related_item_id=undefined&type=ISSUE&description_template=UX-Procurement-Request)を使用して Issue を作成してください。マネージャーが UX リーダーシップと協力して支出ニーズを特定し、FP&A と連携して予算を確保した後、[ベンダーライフサイクル](/handbook/finance/procurement/#vendor-lifecycle-management)に従います。

## UX ラベル

GitLab では、ラベルを使用して作業を分類、優先順位付け、追跡しています。以下は、UX ワークフローに最も直接関連するラベルの内訳です。すべてのラベルの種類と用途の概要は、[contributing doc](https://gitlab.com/gitlab-org/gitlab-foss/blob/master/doc/development/contributing/issue_workflow.md) を参照してください。

- [**UX** ラベル](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=UX): この Issue で UX 作業が必要であることを示します。これらの Issue は、新機能、改善のアイデア、または UX が専門知識を提供すべきその他のものになります。
- [**Inclusion** ラベル](https://gitlab.com/groups/gitlab-org/-/labels?utf8=✓&subscribed=&search=Inclusion): 私たちの[多様性](/handbook/values/#diversity-inclusion)バリューに関連して、包摂を促進する GitLab への変更。
- [**Inclusive design** ラベル](https://gitlab.com/groups/gitlab-org/-/labels?utf8=✓&subscribed=&search=Inclusive+design): よりアクセシブルな体験につながるコンテンツへのアクセス、操作、貢献のさまざまな方法を検討、探求、評価します。
- **Accessibility および scoped accessibility ラベル** は、アクセシビリティへの影響がある Issue を特定するために使用されます。scoped ラベルは、アクセシビリティ監査によって影響が検証された後に追加し、[priority](/handbook/product-development/how-we-work/issue-triage/#priority) および [severity](/handbook/product-development/how-we-work/issue-triage/#severity) ラベルと組み合わせて Issue を[トリアージ](/handbook/product-development/how-we-work/issue-triage/)するために使用してください。
  - [**Accessibility** ラベル](https://gitlab.com/groups/gitlab-org/-/labels?utf8=✓&subscribed=&search=%22Accessibility%22): アクセシブルなプロダクト体験の作成に役立つ実行可能な項目を含む Issue。
  - [**Accessibility-audit** ラベル](https://gitlab.com/groups/gitlab-org/-/labels?utf8=%E2%9C%93&subscribed=&search=%22Accessibility-audit%22): アクセシビリティ関連の改善の可能性を理解するために既存の体験を監査することに関連する Issue。
  - [**Accessibility-ops** ラベル](https://gitlab.com/groups/gitlab-org/-/labels?utf8=%E2%9C%93&subscribed=&search=%22Accessibility-ops%22): 内部ワークフローにアクセシビリティを組み込むことに関連する Issue。
  - `accessibility::critical`: 一部または全部のユーザーが、回避策なしで重要なタスクを実行できなくなります。
  - `accessibility::high`: 一部のユーザーが重要なタスクを実行できなくなります。回避策が存在する可能性はありますが、不満や非効率を生み出します。
  - `accessibility::medium`: 一部のユーザーが重要でないタスクを実行できなくなる、または特定の支援技術を使用するユーザーのユーザーエクスペリエンスが著しく低下します。
  - `accessibility::low`: 特定の障害を持つユーザーや、特定の支援技術を使用するユーザーのユーザーエクスペリエンスは低下しますが、ユーザーはタスクを完了できます。
- [**learnability** ラベル](https://gitlab.com/gitlab-org/gitlab/-/issues/?label_name%5B%5D=learnability): ユーザーが GitLab の機能にすばやく慣れるのを助けることで、学習しやすさの問題に対処する Issue。
- **Scoped workflow ラベル** は、[Product Development Flow](/handbook/product-development/how-we-work/product-development-flow/#validation-phase-1-validation-backlog) からのもので、Issue が開発ライフサイクルのどこにあるかを示すために使用されるべきです。Issue は必要な回数だけワークフローラベル間を移動でき、すべてのラベルがすべての Issue に適用されるわけではありません。UX を必要とする Issue には、Product Development Flow で定義された次のいずれかのラベルを使用します。
  - `workflow::validation backlog`
  - `workflow::problem validation`
  - `workflow::design`
  - `workflow::solution validation`
- **Pajamas コンポーネントライフサイクルラベル** は、[Pajamas](https://design.gitlab.com) コンポーネントを作成・更新するために使用される scoped ラベルです。ラベルの使用ガイドラインは [Pajamas コンポーネントライフサイクルドキュメント](https://design.gitlab.com/get-started/lifecycle/) を参照してください。
- [**UX problem validation** ラベル](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=UX%20problem%20validation): Issue が、ユーザーに関連する問題であることを検証するために UX 作業を必要としていることを示します。このラベルは Product Development Flow の scoped ラベルに加えて使用し、[UX パフォーマンス指標](/handbook/product/ux/performance-indicators/) で経時的に検証努力を追跡できるようにします。
- [**UX solution validation** ラベル](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=UX%20solution%20validation): Issue が、提案された解決策が技術的に実行可能でユーザーニーズを満たしていることを検証するためのタスクを必要としていることを示します。このラベルは Product Development Flow の scoped ラベルに加えて使用し、[UX パフォーマンス指標](/handbook/product/ux/performance-indicators/) で経時的に検証努力を追跡できるようにします。
- [**UI polish** ラベル](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&state=opened&utf8=%E2%9C%93&label_name%5B%5D=UI+polish): 既存のユーザーインターフェースへの視覚的改善*のみ*を扱う Issue であることを示します。
- [**Deferred UX** ラベル](https://gitlab.com/groups/gitlab-org/-/labels?subscribed=&sort=relevance&search=deferred+ux): Deferred UX は、UX ビジョンや MVC から意図的に逸脱する決定によって生じ、ユーザー体験を犠牲にするものです。Deferred UX のラベルが付いた Issue は、後続のリリースに含まれる必要があります。次のいずれかを満たさないリリース UX を示すためにこのラベルを使用してください。
  - UX および Pajamas の仕様
  - ユーザビリティ基準
  - 機能の実現可能性基準

   このラベルは、UX ギャップに対処するフォローアップ Issue に適用されます。Deferred UX を作成した Issue やマージリクエストには適用されません。たとえば、合意された MVC のデザインソリューションが、リリースのプレッシャーや実装の見落としにより完全には実現されない場合、それは Deferred UX と見なされます。

   デザインが正しく実装されているのに予期しない UX 問題が特定された場合、それは Deferred UX とは見なされ*ません*。

   このラベルをいつ適用するか迷う場合は、次のルールを使用してください。「この UX 問題は Issue やマージリクエストから生じたものではない」と言える場合は、それは単に UX であり、Deferred UX ではありません。Deferred UX を含む MVC を出荷する決定をチームが行った場合、変更がリリースされ次第、追跡するための Issue を作成することが推奨されます。

- [**Deferred UX を UX 部門のパフォーマンス指標として詳しく知る**](/handbook/product/ux/performance-indicators/#deferred-ux)。
- [**Seeking community contributions**](https://gitlab.com/groups/gitlab-org/-/issues?state=opened&label_name[]=Seeking+community+contributions&assignee_id=0&sort=weight)
- [**System Usability Scale (SUS)** ラベル](https://gitlab.com/gitlab-org/gitlab/-/labels?subscribed=&search=sus): Issue が、SUS リサーチ活動のいずれかで明らかになったユーザビリティ問題に関連していることを示します。より具体的には、優先順位が付けられた SUS 関連の Issue は、対応する会計年度と四半期でラベル付けできます。例: `SUS::FY22 Q2 - Incomplete`。
[**SUS スコアを UX 部門のパフォーマンス指標として詳しく知る**](/handbook/product/ux/performance-indicators/#perception-of-system-usability)
- [**Regression** ラベル](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&state=opened&utf8=%E2%9C%93&label_name%5B%5D=regression): 最新のリリースで導入された、正しい動作を破壊するバグを示します（詳細は [貢献ガイドライン](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md#regression-issues) を参照）。
- [**UX scorecard** ラベル](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=UX%20scorecard): [UX Scorecard](/handbook/product/ux/ux-scorecards/) のメイン Issue またはエピックを示します。このラベルを使用して、現在の作業を簡単に見つけ、経時的に活動を追跡できるようにしています。
- [**UX scorecard-rec** ラベル](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=UX%20scorecard-rec): この Issue が UX scorecard レビューの結果として生まれた推奨事項であることを示します。スコアカードが行われる前に Issue が作成されていても問題ありません。それでも推奨事項のセットに引き入れることができます。
- [**cm-scorecard-rec** ラベル](https://gitlab.com/groups/gitlab-org/-/issues?sort=created_date&state=opened&label_name[]=cm-scorecard-rec): この Issue が CM スコアカードの結果として生まれた推奨事項であることを示します。
- [Actionable Insights](/handbook/product/ux/experience-research/research-insights/#how-to-document-actionable-insights) は、対処する必要があるリサーチからの学びを文書化します。
  - [Actionable Insight::Exploration needed](https://gitlab.com/groups/gitlab-org/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=Actionable%20Insight%3A%3AExploration%20needed): さらなる探求を必要とする UX リサーチ研究から得られたリサーチインサイト。
  - [Actionable Insight::Product change](https://gitlab.com/groups/gitlab-org/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=Actionable%20Insight%3A%3AProduct%20change): UX リサーチ研究から得られ、プロダクト体験への変更を必要とするリサーチインサイト。
- [Type ラベル](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification): feature、maintenance、bug の Issue や MR を追跡するために使用されます。UX リーダーシップは、これら 3 つの作業タイプすべての優先順位付けに影響を与える積極的な参加者です。[機能、メンテナンス、バグの優先順位付け DRI](/handbook/product/product-processes/cross-functional-prioritization/#prioritization-for-feature-maintenance-and-bugs) も参照してください。
- **Theme ラベル** は、同じユーザー体験の問題を解決するもののどのカテゴリーにも属さない Issue をグループ化するために作成できます。これは、プロダクト全体にまたがるユーザー体験に対して特に役立ちます。これらの Issue にも UX ラベルが必要です。
- [**UX: Feature Discovery Improvement**](https://gitlab.com/groups/gitlab-org/-/issues?label_name%5B%5D=UX%3A++Feature+Discoverability+Improvement): Issue が機能の発見可能性を向上させる可能性があることを示します。
- [**UX: Onboarding Improvement**](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=UX%3A%20Onboarding%20Improvement): Issue が潜在的なオンボーディング改善であることを示します。

## UX カレンダー

[UX カレンダー](https://calendar.google.com/calendar/embed?src=gitlab.com_9psh26fha3e4mvhlrefusb619k%40group.calendar.google.com)（*社内限定*）は、私たちのチームミーティングの SSOT です。UX 通話、UX フォーラム、その他のチームミーティングの詳細をここで見つけることができます。これらのミーティングは GitLab の誰にでも開かれています。UX 部門の誰でも Google カレンダーにイベントを追加できます。マネージャー以上は変更や共有の管理が可能で、IC はイベントへの変更が可能です。

## レトロスペクティブ

UX 部門が直面する具体的な課題を理解するために、各マイルストーン終了後に非同期 UX レトロスペクティブを実施しています。このレトロは、[ux-retrospectives](https://gitlab.com/gl-retrospectives/ux-retrospectives/issues) プロジェクトで最近のリリース用に作成された新しい Issue を通じて実施されます。目標は、うまくいったこと、うまくいかなかったこと、改善できることを評価することです。
