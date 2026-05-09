---
title: サポートマネージャー向けパフォーマンス管理
description: "パフォーマンス管理に関するサポート固有のヒント"
upstream_path: /handbook/support/managers/performance-management/
upstream_sha: f8c9cee360fe4a9a7e4b6354bb9330c4602c0fe1
translated_at: "2026-05-08T18:00:00Z"
translator: claude
stale: false
---

### このページは何？

このページは、サポートマネージャーがサポート特有のパフォーマンスを取り扱う際の支援的な構造として意図されています。ハンドブックのリーダーシップセクションにあるより包括的な[パフォーマンス不足ページ](/handbook/leadership/underperformance/) を置き換えるものではありません。

#### 目標設定

マネージャーは、部下と協働して彼らの現在の能力と成長への意欲を理解すべきです。この理解を活用して、マネージャーはパフォーマンス目標を設定し、定期的なペースでその進捗を追跡すべきです。(これを行ういくつかの方法については、[キャリア開発の追跡](/handbook/people-group/learning-and-development/career-development/#tracking-your-career-development) を参照してください。) パフォーマンス目標は、私たちのグローバル KPI の達成に貢献すべきです。

PTO、トレーニング、その他のコンテキストは目標設定において重要であり、考慮されるべきです。場合によっては、これらの個別の活動に集中するエンジニアを促すために、チームの目標への貢献を最小限またはゼロに設定することが賢明な場合があります。
以下は目標設定の一般的な領域です。

##### FRT とチケットアサイン

私たちの [first reply time 目標](/handbook/support/performance-indicators/#service-level-agreement-sla) の達成への貢献と[チケットのアサインを引き受けること](/handbook/support/workflows/working-on-tickets/#selecting-new-tickets) は、[サポートエンジニアの中核責任](/handbook/support/support-engineer-responsibilities/#core-responsibility-of-a-support-engineer) です。

##### 公開およびインターナルコメント

[アサインされたすべてのチケットの解決まで良好な進捗を維持し](/handbook/support/support-engineer-responsibilities#3-maintain-good-progress-through-to-resolution-on-all-of-your-assigned-tickets)、[他のメンバーが彼らのチケットの進捗を維持するのを助ける](/handbook/support/support-engineer-responsibilities#5-help-others-in-your-group-to-maintain-progress-on-their-tickets) ためには、エンジニアは顧客とコミュニケーションし、仲間と協力する必要があります。公開およびインターナルコメントはパフォーマンスの指標になりえますが、解決済みチケットという望ましい結果と混同しないよう注意してください。

参照: [チケットベースライン](/handbook/support/support-engineer-responsibilities#ticket-baseline)

##### Docs/Product MR

Docs および Product MR は将来のチケットを防ぎます。すべてのエンジニアは Docs MR を定期的に提出すべきです。

参照:

- [Performance Indicators - Support MR Rate](/handbook/support/performance-indicators/#support-mr-rate)
- [ドキュメンテーションを改善し、知識を公に共有する](/handbook/support/support-engineer-responsibilities#improve-documentation-knowledge-base-and-publicly-share-knowledge-weekly)
- [GitLab のバグを修正し、機能を作成する](/handbook/support/support-engineer-responsibilities#fix-gitlab-bugs-and-create-features-occasionally)

##### ペアリングセッション {#pairing-sessions}

ペアリングセッションは、特に[スキルベースのパフォーマンス](/handbook/leadership/underperformance/#skills-based-performance) がコーチングされている場合、認識しておくと良いです。

参照: [チームメンバーと協力する](/handbook/support/support-engineer-responsibilities#collaborate-with-team-members-and-customers-daily)

##### トレーニング

サポートエンジニアは、適切なリソースが何であれ、定期的にスキルベースを拡大するために取り組むべきです。それは [Support Training Modules](https://gitlab.com/gitlab-com/support/support-training)、LinkedIn Learning コース、[ペアリングセッション](#pairing-sessions)、または [GitLab Learning and Development](/handbook/people-group/learning-and-development/) によって組織されたその他の活動かもしれません。

参照: [学習とトレーニングを通じてスキルを開発する](/handbook/support/support-engineer-responsibilities#develop-your-skills-through-learning-and-training-weekly)

### パフォーマンス不足の検出

個別のパフォーマンスは測定が難しい場合があります: 週ごとのパフォーマンスは PTO によって不明瞭になったり、全体的なアウトプットが少ないにもかかわらず多くの時間を投資した領域に集中していたりするかもしれません。例えば、エスカレーション状態の顧客と取り組んでいるサポートエンジニアは、難しい問題に多くの時間を費やし、その間に新しいチケットを取らず、ケースを解決する少数のコメントを生成するかもしれません。しかし、長期間にわたって考えれば、そのような指標は[結果](/handbook/values/#results) を評価するのに役立ちえます。

より完全なルックアップについては、[パフォーマンス不足の警告サイン/パターン](/handbook/leadership/underperformance/#warning-signspatterns-of-underperformance) を参照してください。

#### サポートにおけるパフォーマンス不足

サポートエンジニアにとってのパフォーマンス不足とは、エンジニアが**4 週間連続で** 合意された目標を達成し**ない**ことと定義されます。

##### パフォーマンス不足への対応

マネージャーは、チームメンバーがパフォーマンス不足の場合、直属の部下と話し合いを行うことで早期に行動を起こすべきです。「早期」とは何かの良い指針は、サポートエンジニアが 4 週間連続で目標を達成していないときです。この時点で、[マネージャーのマネージャーと状況と前進の計画について議論する](/handbook/leadership/underperformance/#immediately-discuss-with-the-managers-manager) べきです。

あなたとマネージャーが合意したら、次のステップは以下のとおりです。

- [Team Member Relations Partner をループに入れる](/handbook/leadership/underperformance/#loop-in-the-team-member-relations-partner)
- 直属の部下と話し合いを持つ:
  - [GitLab のフィードバック提供のガイドライン](/handbook/people-group/guidance-on-feedback/#all-feedback) と、受け取った追加のトレーニングをレビューする
  - チームメンバーが現在標準のパフォーマンスを発揮していないことを示す具体的な行動を特定したことを伝える (具体的な例を含む)
  - この議論が正式な口頭警告や書面警告ではないことを明確にする
  - [心理的安全性](/handbook/leadership/emotional-intelligence/psychological-safety/) を確保し、チームメンバーが応答し懸念を表明する余地を提供する
  - [できるだけ早期にアクションプランを特定し作成する](/handbook/leadership/underperformance/#manager-identify-and-take-action-as-early-as-possible)

この会話の後の **2 週間** にアクションプランの目標が達成されない場合は、マネージャーに行き、[Team Member Relations](/handbook/people-group/team-member-relations/) と一緒に[改善のためのオプション](/handbook/leadership/underperformance/#options-for-remediation) に取り組み始めます。
