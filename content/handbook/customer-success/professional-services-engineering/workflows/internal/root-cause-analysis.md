---
title: 非難なき根本原因分析（Blameless Root Cause Analyses）
category: Internal
upstream_path: /handbook/customer-success/professional-services-engineering/workflows/internal/root-cause-analysis/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-02T07:33:04-05:00"
---
各プロジェクトの終了時には、以下のテンプレートを用いて根本原因分析を行います。これらの目的は、改善すべき領域を特定するとともに、強調しておくべき成功事例を見出すことです。チームは一般的に独立したプロジェクトに従事し、多様な顧客グループと関わるため、相互の学びは Professional Services Engineering チームが [GitLab Values](/handbook/values/) のうち Collaboration（協調）と Iteration（イテレーション）を体現するうえで重要です。

## 根本原因分析のスケジューリング

1. Issue を作成してください。
1. [RCA](/handbook/engineering/workflow/root-cause-analysis/) を使用してください。テンプレートへの変更は Professional Services プロジェクトへの MR として追加できます。
1. Issue に `Root Cause Analysis` ラベルが付いていることを確認してください。
1. 根本原因分析のためのカレンダーイベントを作成し、Issue とこのページへのリンクを含めてください。

   - Strategic Account Executive（SAE）、Customer Success Manager（CSM）、Professional Service Engineer（PSE）、自分のマネージャー、その他関心のある GitLab メンバーを参加者に含めます。

## 根本原因分析の実施

各根本原因分析ミーティングは、おおよそ以下のアジェンダに沿って進めます。

### アジェンダ

#### ミーティングの目的

1. これは非難なき根本原因分析です。
1. 過去の事象に対して「〜できたはずだ」「〜すべきだった」といった観点では議論しません。ただし「次回はこうしよう」という提案は行えます。
1. [GitLab Values](/handbook/values/) を強化することに焦点を当てます。具体的には以下のような項目です。

   - **行動を扱い、人にレッテルを貼らない**
   - **人と仕事は別物である** 提案や指摘は常に仕事の事例について行い、人そのものについては行わないようにします。「あなたは話を聞かない」ではなく「私のデザインに関するフィードバックに反応してくれませんでしたね」と言いましょう。フィードバックを受け取る側も、フィードバックは改善のための最善の手段であり、相手はあなたの成功を願っているのだと心に留めてください。
   - **率直さ（Directness）** とは、お互いに対して透明であることです。私たちは Ben Horowitz の「率直かつ親切に」という姿勢を体現しようと努めます。フィードバックは常に仕事に関するものであり、人格に関するものではありません。とはいえ、伝えるのも受け取るのも簡単ではありません。
   - [感謝を伝える](/handbook/communication/#say-thanks)
   - **エゴを持たない** 議論に勝つために主張を守ったり、誤りを上塗りしたりしないでください。あなたは仕事そのものではありません。自分の主張を守る必要はありません。他者の助けを借りて正しい答えを探すべきです。
   - **提案を行う** チームとして何かを決定する必要がある場合は、全員の意見を集めるためのミーティングを開く代わりに提案を作成しましょう。提案を持つ方が、全員の時間をはるかに有効に使えます。

#### ディスカッション

1. [根本原因分析](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/rca.md) を一通り進めます。

   - エンゲージメントの主要な属性情報（顧客連絡先、GitLab メンバー、日程など）を特定します。
   - このエンゲージメントの SOW、および Google Drive 上の顧客フォルダへのリンクを必ず最新化します。
   - 残っている顧客対応のアクションアイテムを洗い出し、担当者を割り当てます。

1. 学んだこと

   - うまくいったことは何か？
   - うまくいかなかったことは何か？
   - 次回への提案は何か？

1. 提案を実行に移すためのアクションアイテムを割り当て、必要に応じて Issue や MR を作成してください。
1. IaC に関する学びがあれば、メインラインの IaC リポジトリへの MR として作成してください。

#### アクションアイテムの割り当て

すべてのフォローアップアクションアイテムは、ミーティング終了前にチームまたは個人に割り当てます。ミーティング後の最優先事項にならないようなものは、フォローアップアイテムにしないでください。

### 出典

- [Google SRE Handbook](https://landing.google.com/sre/book/chapters/postmortem.html)
- [SAFe Iteration Retrospectives](https://scaledagileframework.com/iteration-retrospective/)
