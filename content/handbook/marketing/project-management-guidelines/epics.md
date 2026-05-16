---
title: "Epic プロジェクト管理ガイドライン"
upstream_path: /handbook/marketing/project-management-guidelines/epics/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-28T17:30:01+02:00"
---

## 背景

[Epic](https://docs.gitlab.com/ee/user/group/epics/)は、戦略的テーマを共有する Issue とサブ Epic のセットを組織化し管理する方法を提供します。論理的なグルーピングに加えて、Epic はプロジェクトマネージャーがより高レベルの計画を実行し、視覚的なステータス追跡を伴うロードマップを構築することを可能にします。

### 知っておくべき重要事項

1. Epic はグループレベルで定義されます。
1. Epic はコンフィデンシャルにできます。
1. Epic は子として Issue と Epic の両方を含むことができます。
1. Epic は Issue リストや Issue ボードのフィルタとして使用できます。
1. Epic は子 Epic、Issue ステータス、ロードマップタイムライン（ガントチャート）への可視性を提供します。
1. Epic は開始日または期日が含まれている場合、ロードマップビューに表示されます - [すべてのマーケティングロードマップはこちら](https://gitlab.com/groups/gitlab-com/marketing/-/roadmap?scope=all&utf8=%E2%9C%93&state=opened)。
1. 子 Epic も、開始日または期日がある場合、親の下にネストされた状態でロードマップビューに表示されます。
1. ロードマップビューは、Epic にリンクされた Issue の Issue 重みの集計完了に基づいて、Epic とその完了ステータスのタイムラインを提供します。
1. ロードマップビューは、個別の Epic とグループページの `Epics > Roadmap` で利用可能です。グループページのビューでは、追加のフィルタリング、ソート順、表示用のタイムライン単位を提供します。
1. Issue は単一の Epic の子にしかなれません。
1. Epic は、合計で 7 レベルの深さまで複数の子 Epic を持つことができます。

### 既知の制限

1. Epic はテンプレートから作成できません（[Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/37079)）。
ただし、3 つの回避策があります。
    1. 第一 - Epic は Epic に昇格された Issue から作成**できます**（この場合、Issue テンプレートが Epic テンプレートの代替となる可能性があります）。
    1. 第二 - Epic に関連する Issue の組み合わせは、スプレッドシートでテンプレート化し、所与の Epic に関連する Issue を生成するためにアップロードできます。この[Epic テンプレート概要](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/getting-started/104/)を参照 - 複数の GitLab プロジェクト/チームにまたがる協働 Epic の場合、注意: このプロセスでは、Issue がまたがるプロジェクト/チームの総数だけ、プロジェクト/チームごとに分けてスプレッドシートのアップロードを完了する必要があります。
    1. 第三 - 関連するハンドブックページに Epic のコードを含めて、issuable テンプレートのハイパーリンク付きでコピペできるようにします。例として[このハンドブックページ](/handbook/marketing/lifecycle-marketing/#epic-code)を参照。
1. Epic にはアサイニーがいません。
1. Epic はプロジェクト内では作成できません（[Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/31840)）。
1. Epic はクローンできません（[Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/29115)）。
1. Epic は親グループより上の Issue を含むことができません（[Epic](https://gitlab.com/groups/gitlab-org/-/epics/8294)）。
1. 機能リクエスト: カレンダービュー（[Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/25879)）。

## ガイドライン

### 高レベルな概要にはロードマップビューを使用する

ロードマップビューは、唯一の信頼できる情報源として、また、チームが取り組んでいる戦略的テーマ、OKR、マーケティングプロジェクト、キャンペーンを効果的に理解する高レベルな概要として役立ちます。

親 Epic への単一のリンク、または（任意で）フィルタリングされたグループのロードマップページへのリンクを、リーダーシップの可視性のために使用できます。

その後、マイルストーンと Issue ボードを使用して、個別のタスクステータスをより詳細に把握するために詳細を掘り下げることができます。

### すべての関連 Epic を祖先関係で関連付ける

OKR Epic または戦略的テーマ Epic に関連するすべての Epic は、ロードマップ上で適切に整合させるために、それらの**1 つだけ**を最終的な祖先として示すべきです。

### Epic に開始日と終了日を設定する

ロードマップビューが表示され、有意義な視覚的タイムライン情報を提供するためには、計画プロセス中に Epic に開始日と期日を明示的に追加してください。

### エグゼクティブテーマラベルを使用する

戦略的テーマや OKR の一部であるすべての Epic には、関連する[エグゼクティブラベル](/handbook/marketing/project-management-guidelines/labels/#guideline-create-labels-at-the-lowest-possible-level)を付けて、ロードマップビューでフィルタできるようにしてください。任意で、承認されたグループレベルラベルを 1 つ以上付けることもできます。

### 子 Issue に重みを定義する

完了ステータスを追跡するための追加情報として、ロードマップは、すべての直接の子孫 Issue の合計 Issue 重みに対して、完了した子 Issue の重みに基づいた完了率を提供します。

ロードマップビューで Epic の完了状況を追跡しレポートできるように、すべての子 Issue に[相対 Issue 重みを設定](/handbook/marketing/project-management-guidelines/issues/#set-issue-weight)することが推奨されます。

### 子 Issue にヘルスステータスを設定する

ステータスレビュー前に、注意が必要な、またはリスクのある可能性のある Issue を強調することは良いプラクティスです。この情報はロードマップビューに表示できます。これが機能するには、個別の Issue に[ヘルスステータス](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#health-status)を割り当てます。

UI でヘルスステータスを設定するか、`/health_status` および `/clear_health_status` の[クイックアクション](https://docs.gitlab.com/ee/user/project/quick_actions.html)で設定できます。
