---
title: "単一ステージグループのイニシアチブを対象とした問題検証リサーチ"
description: "単一ステージグループのイニシアチブを対象とした問題検証リサーチは、通常「Release Manager は自分の業務をどのように行っているか」のような、ある1つのステージグループに関連する特定の行動に焦点を当てます。"
upstream_path: /handbook/product/ux/experience-research/problem-validation-single-stage-group/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

単一ステージグループのリサーチイニシアチブは、「Release Manager は自分の業務をどのように行っているか」のような、1つのステージグループのみに関連する特定の行動を扱います。

開始するには、Product ハンドブックに記載されている[初期ステップ](/handbook/product-development/how-we-work/product-development-flow/#validation-phase-2-problem-validation)に従ってください。

### ユーザーインタビューの場合

1. プロダクトマネージャーが[ディスカッションガイド](/handbook/product/ux/experience-research/discussion-guide-user-interviews/)のドラフトを作成します。ガイドの初稿が完成したら、UX Researcher がレビューしてフィードバックを提供します。
1. 並行して、UX Researcher は Qualtrics でスクリーニングサーベイの作成を開始します。
1. スクリーニングサーベイ作成後、UX Researcher は [UX Research プロジェクト](https://gitlab.com/gitlab-org/ux-research/)で利用可能なテンプレートを使って `Recruiting request` Issue をオープンし、[Research Coordinator](/handbook/product/ux/research-operations/) にアサインします。
1. Research Coordinator は、スクリーナーが対象参加者として特定した人々をきちんと捕捉できるか整合性チェックを行います。複数回のレビューが発生する場合、Coordinator はスクリーニング基準に関する不明点が解消されるまで作業を一時停止します。
1. 既定では、プロダクトマネージャーがユーザーとの問題検証インタビューのリード（モデレーター）役を担います。研究内容が複雑な場合は、UX Researcher が自ら進んでモデレーターを担うこともあります。UX Researcher は、自分がモデレーターを務めるリサーチと、同期/非同期で観察するリサーチを自身の裁量で決定できます。
1. インタビューをリードする担当者は Calendly リンクを Research Coordinator に共有し、UX Research カレンダー（`gitlab.com_kieqv96j35mpt8bdkcbriu2qbg@group.calendar.google.com`）にユーザーインタビューの招待を作成する責任があります。関心のある他のメンバー（プロダクトデザイナー、プロダクトマネージャー、UX Researcher など）には、このカレンダーへの購読を推奨します。
1. インタビュー終了後、UX Researcher は `Recruiting request` を更新します。Research Coordinator はインタビューから 2 営業日以内に参加者へ謝礼を支払います。
1. プロダクトマネージャーと UX Researcher は協力してデータを統合し、Dovetail でトレンドを特定してインサイトを導き出します。
1. UX Researcher は `Problem validation research` Issue を更新し、Dovetail の調査結果へのリンクを記載します。該当する場合は、Issue をクローズする前に `Problem validation research` Issue の `confidential` を解除します。

### サーベイの場合

1. プロダクトマネージャーがサーベイのドラフトを作成します。初稿が完成したら、UX Researcher がレビューしてフィードバックを提供します。
1. UX Researcher が Qualtrics にサーベイを入力します。
1. Qualtrics への入力が完了したら、UX Researcher は [UX Research プロジェクト](https://gitlab.com/gitlab-org/ux-research/)で利用可能なテンプレートを使って `Recruiting request` Issue をオープンし、該当する [Research Coordinator](/handbook/product/ux/research-operations/) にアサインします。
1. Research Coordinator が参加者サンプルにサーベイを配布します。
1. UX Researcher はそれまでに集まった回答をレビューし、必要に応じてサーベイを修正します。UX Researcher は、Research Coordinator にリクルート継続のタイミングを伝えてください。
1. UX Researcher はサーベイの回答率を Research Coordinator に随時共有し、サーベイをクローズする予定がある場合は必ず通知します（クローズ済みサーベイに対してリクルートが継続されないようにするため）。
1. サーベイ終了後、UX Researcher は `Recruiting request` Issue を更新します。Research Coordinator は選定された参加者に対して謝礼を支払います（支払いは火曜日と木曜日に行われます）。
1. プロダクトマネージャーと UX Researcher は協力してデータを統合し、トレンドを特定してインサイトを導き出します。
1. UX Researcher は Dovetail にインサイトを記録します。
1. UX Researcher は `Problem validation` リサーチ Issue を更新し、Dovetail の調査結果へのリンクを記載します。該当する場合は、Issue をクローズする前に `Problem validation` リサーチ Issue の `confidential` を解除します。
