---
title: GitLab における Jobs to be Done
description: >-
  Jobs to be Done (JTBD) は、特定の解決策ではなく、解決したい問題に焦点を当てて、ユーザーの視点からプロダクトとソリューションを見るためのフレームワークです。GitLab チームメンバーがユーザーニーズを発見し、戦略的機会を特定し、計画を検証し、イノベーションを推進するのに役立ちます。
upstream_path: /handbook/product/ux/jobs-to-be-done/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-06T20:13:53+00:00"
---

このページおよび関連ページ（[Playbook](/handbook/product/ux/jobs-to-be-done/jtbd-playbook/)、[Beyond the Playbook](/handbook/product/ux/jobs-to-be-done/jtbd-beyond-the-playbook/)）の素材は、[Jim Kalbach](https://www.jtbdtoolkit.com/) と彼の著書「[The Jobs to be Done Playbook](https://www.amazon.com/Jobs-Be-Done-Playbook-Organization/dp/1933820683)」から引用しています。

実践的な JTBD リサーチガイダンスについては、[playbook](/handbook/product/ux/jobs-to-be-done/jtbd-playbook) を参照してください。ジョブキャンバスの各側面の詳細については、[JTBD キャンバスの構造](/handbook/product/ux/jobs-to-be-done/jtbd-canvas-anatomy) をレビューしてください。

**注:** 以前の JTBD ソース（[yml ファイル](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/jobs_to_be_done.yml?_gl=1%2a1hjur0y%2a_ga%2aNDkwNzM2Mzg5LjE2MzUxODMzMTE.%2a_ga_ENFH3X7M5Y%2aMTY2ODAxOTA2Mi42Ni4xLjE2NjgwMTk2MjUuMC4wLjA.)、社内限定）は置き換えられています。新しいハンドブックページが作成されるまで、チームは FigJam で JTBD 作業を追跡する必要があります。

## メインジョブからマイクロジョブまで

Jobs to be Done について話すとき、私たちはしばしばさまざまなレベルのジョブについて話します。これらのレベル間の用語の違いを記すことが重要で、あなたとあなたのステークホルダーが効果的にコミュニケーションできるようにします。

![JTBD 階層図](/images/product/ux/jobs-to-be-done/JTBD_Diagram.png)

### メインジョブ

メインジョブは目的を達成するための手段です。それは実行される行為であり、明確な終了状態を持つべきです（JTBD の「done」の部分）。これが、ジョブステートメントを書くときに、ジョブを動詞 + オブジェクト + 修飾子のパターンで書く理由です。

例: 新しい家を買う

### スモールジョブ

スモールジョブはより実践的で、プロセスやワークフローに対応します。メインジョブのコンテキストにおいて「ジョブがどのように行われるか？」という質問に答え、ユーザーを目標達成に近づけます。

例: 家にオファーを出す

### マイクロジョブ

マイクロジョブは、ユーザーがスモールジョブとメインジョブを達成するために行う小さなタスクです。マイクロジョブは自明で、多くのコンテキストなしに理解しやすいべきです。

例: 提示価格に対してどれだけオファーするかを決める。

Jobs to be Done のプロセスを進める際、ジョブを正しい高度で識別し配置できることが重要です。これは、メインジョブに集中し続け、インタビュー中に聞いた新しい情報を [ジョブステップ](/handbook/product/ux/jobs-to-be-done/jtbd-canvas-anatomy#job-steps-how-does-the-job-performer-get-the-job-done) に素早く組み込む（または破棄する）のに役立ちます。
