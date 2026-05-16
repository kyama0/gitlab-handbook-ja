---
title: "Distribution チームのマージリクエスト処理"
description: "Distribution エンジニアが実施するマージリクエストのワークフローと責任範囲。"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/merge_requests/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T00:11:38Z"
translator: claude
stale: false
lastmod: "2025-04-16T11:23:19-05:00"
---

## はじめに

マージリクエストはすべての Distribution エンジニアの責任です。基本的には、[コードレビューのエンジニアリングプロセス](/handbook/engineering/workflow/code-review/) に従います。

## ワークフロー

Distribution チームはコードレビュープロセスで [レビュアー機能](https://docs.gitlab.com/ee/development/code_review.html#dogfooding-the-reviewers-feature) を使用します。プロセスは以下のとおりです:

1. 作成者がプロジェクトにマージリクエストを開きます。
1. レビューの準備ができたら:
   - マージリクエストに[このような](https://gitlab.com/gitlab-org/charts/gitlab/-/merge_requests/3801#note_1947892314) 自動レビュアールーレットコメントが含まれており、`danger-review` CI/CD ジョブが完了している場合:
      - 作成者はレビュアールーレットが提案したレビュアーにレビューを直接アサインし、コマンド「@gitlab-bot ready @username-of-someone」を使用して「workflow::ready for review」ラベルを適用します。
   - そうでない場合:
      - 作成者は「workflow::ready for review」ラベルを適用します。
      - レビュアーは優先度に応じて定期的に [Distribution マージリクエストのレビュー準備完了ダッシュボード](https://gitlab-org.gitlab.io/distribution/monitoring/mrs/) を確認し、作業できるときにレビュアーセクションに自分自身を追加して「workflow::in review」ラベルを追加することでマージリクエストを引き受けます。
1. 承認されたら、レビュアーは最終レビュー/マージのためにレビュアーセクションにメンテナーを追加します。この時点で、レビュアーは自分自身をレビュアーとして残しておくか（MR が自分の MR リストに表示され続ける）、削除するか（MR リストに表示されなくなる）を決定できます。メンテナーにコメントがある場合は、作成者と協力して明確にします。アサインされたマージリクエストを処理できない場合、別のメンテナーを見つけることはメンテナーの責任です。

**注意**: [SLO](#service-level-objective) よりも迅速な対応が必要なマージリクエストに取り組んでいる場合は、`@gitlab-org/distribution` グループを `@` メンションして Distribution チームに通知してください。チームはこれらのリクエストをベストエフォートで処理します。

## レビュアー

デフォルトでは、プロジェクトのメンテナーでない Distribution エンジニアチームメンバー全員がレビュアーと見なされるべきです。「workflow::ready for review」ラベルが付いた [プロジェクト](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#all-projects) のマージリクエストを確認するために、時間の一部を使うことが奨励されています。

レビュアーは、承認してメンテナーに渡す前に、変更が私たちの基準を満たしていることを確認するために貢献者と協力する責任があります。レビュアーはマージリクエストがリンクされた Issue が説明する問題に対処していることを確認すべきです。また、レビュアーは適用可能なすべてのマージリクエストチェックリスト項目が完了していることを確認する責任があります。チェックリスト項目が適用されない状況では、レビュアーは項目が実際に不要であることを確認する必要があります。レビュアーとして、何かが私たちの基準を満たしているかどうか不確かな状況に遭遇した場合は、その質問をマージリクエスト内でメンテナーに直接ピングしてください。

さらに、「誰でも貢献できる」という精神から、興味のある人は誰でもレビュアーになることが奨励されています。利用可能なマージリクエストをレビューすることを妨げる障壁はあるべきではありません。興味のある当事者の参加を歓迎します。

レビュアープロセスに積極的に参加する予定の人は、[チームページのエントリを更新する](/handbook/about/editing-handbook/#add-yourself-to-the-team-page) ことが奨励されています。

レビューするマージリクエストを探す際は、[マージリクエストレポート](https://gitlab-org.gitlab.io/distribution/monitoring/mrs/) を確認して、[SLO](#service-level-objective) 違反の危険があるレビューを確認することを検討してください。

## メンテナー

プロジェクトメンテナーは、自分が時間を使う前に、レビュアー（特に [レビュアーメンターシッププログラム](/handbook/engineering/workflow/code-review/#reviewer-mentorship-program) に登録しているレビュアー）がマージリクエストを確認することを促すことが奨励されています。メンテナーがレビュアーを待たずに進めることが理にかなっている場合もあるため、判断が必要です。例えば、[SLO](#service-level-objective) を念頭に置く必要があります。MR がその期限を守れない危険がある場合、メンテナーは躊躇わずに対応すべきです。

## マージリクエストのアサイン

これを達成するために、初期レビューを探す際に個人にマージリクエストをアサインしないよう貢献者に促すべきです（特定の人がマージリクエストを確認すべき特定の理由がある場合を除く）。むしろ、マージリクエストには「workflow::ready for review」ラベルを適用し、レビュアーが調査を始める際にレビュアーセクションに自分自身を追加します。

メンテナーとして事前レビューなしに直接アサインされたマージリクエストは、利用可能なレビュアーにアサインすることが奨励されています。レビュアーとして直接アサインされたマージリクエストは、判断を使用してください。すぐに取り組めない場合は、別のレビュアーを見つけて確認してもらうようにしてください。

## サービスレベル目標

作業するマージリクエストを探す際は、[GitLab レビュー応答 SLO](/handbook/engineering/workflow/code-review/#review-response-slo) を考慮してください。その期限を守れない危険があるものを最初に確認すべきです。

Distribution チームの負荷により、SLO は会社の他の部分よりも長くなっています:

- GitLab チームメンバーからの場合: レビュー応答 SLO < 4 営業日
- [Leading Organizations](/handbook/engineering/workflow/code-review/#leading-organizations) の作成者からの場合: レビュー応答 SLO < 6 営業日

チームの拡大と技術的負債の解消次第で、会社全体の SLO 標準に戻ることを目指しています。

## レビューのイテレーション

マージリクエストがレビュー中になったら、レビュアー/メンテナーと作成者がフィードバックを繰り返す間、「workflow::in review」ラベルをマージリクエストに残す必要があります。

変更や追加レビューのためにマージリクエストを引き渡す準備ができたら、次のステップを担当する個人がアサインされていることを確認し、マージリクエストでその個人をメンションする新しいコメントでハンドオフを知らせてください。

**注意**: デフォルトでは、作成者は以前にマージリクエストをレビューしたレビュアー/メンテナーに引き渡す必要があります。その個人がステータスで 2 日以上不在と表示されている場合は、`@gitlab-org/distribution` グループを `@` メンションして、新しいレビュアーのために Distribution チームに通知してください。

## スクワッシュとマージ

Distribution が所有するプロジェクトはデフォルトで [スクワッシュとマージ](https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html) を有効にしています。この機能はマージ前にマージリクエストのすべてのコミットを 1 つのコミットに結合し、ターゲットブランチのクリーンな履歴を確保します。

スクワッシュとマージ機能は [encourage（奨励）](https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html#squash-commits-options) に設定されているため、作成者は必要に応じてオプションを無効にすることができます。例えば、コミットが 1 つだけのマージリクエストは、マージ前のスクワッシュから必ずしも恩恵を受けるわけではありません。

## 参考資料

1. [Distribution チームプロジェクト](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#all-projects) - Distribution チームが管理するプロジェクトの全リスト
1. [エンジニアリングプロジェクト](/handbook/engineering/projects/) - サポートされている GitLab プロジェクトの全リスト。プロジェクト名をクリックすると、各プロジェクトのメンテナーとレビュアーのリストが表示されます。
