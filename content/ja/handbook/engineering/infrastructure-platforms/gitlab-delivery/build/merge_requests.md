---
title: "DistributionチームのマージリクエストHandbook"
description: "Distributionエンジニアが行うマージリクエストのワークフローと責任。"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/build/merge_requests/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T23:09:27Z"
translator: claude
stale: false
---

## はじめに

マージリクエストはDistributionエンジニア全員の責任です。基本的には、[コードレビューのエンジニアリングプロセス](/handbook/engineering/workflow/code-review/)に従います。

## ワークフロー

Distributionチームはコードレビュープロセスで[Reviewers機能](https://docs.gitlab.com/ee/development/code_review.html#dogfooding-the-reviewers-feature)を使用しています。プロセスは以下のとおりです：

1. 作者がプロジェクトにマージリクエストをオープンします。
1. レビュー準備ができたら：
   - マージリクエストに[この例](https://gitlab.com/gitlab-org/charts/gitlab/-/merge_requests/3801#note_1947892314)のような自動Reviewer Rouletteコメントが含まれており、`danger-review` CI/CDジョブが完了している場合：
      - 作者はReviewer Rouletteが提案したレビュアーに直接レビューをアサインし、"@gitlab-bot ready @username-of-someone"コマンドを使用して"workflow::ready for review"ラベルを適用します。
   - そうでない場合：
      - 作者が"workflow::ready for review"ラベルを適用します。
      - レビュアーは[Distributionマージリクエストレビュー準備完了ダッシュボード](https://gitlab-org.gitlab.io/distribution/monitoring/mrs/)を優先度に応じて定期的に確認し、担当可能になったらReviewersセクションに自分を追加し"workflow::in review"ラベルを追加してマージリクエストを引き受けます。
1. 承認されたら、レビュアーはReviewersセクションにメンテナーを追加して最終レビュー/マージを依頼します。この時点で、レビュアーは自分をReviewerとして残すか（MRが引き続きリストに表示される）削除するかを決定できます。メンテナーにコメントがあれば、作者と連携して解決します。アサインされたMRに対応できないメンテナーは、別のメンテナーを見つける責任があります。

**NOTE**: [SLO](#service-level-objective)よりも早い対応が必要なマージリクエストに取り組んでいる場合は、`gitlab-org/distribution`グループを`@`メンションしてDistributionチームに通知してください。チームはこれらのリクエストへの対応にベストエフォートを発揮します。

## レビュアー

デフォルトでは、プロジェクトのメンテナーでないすべてのDistributionエンジニアチームメンバーは自分自身をレビュアーとみなします。"workflow::ready for review"ラベルが付いた[プロジェクト](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#all-projects)のマージリクエストを確認することに時間を使うことをお勧めします。

レビュアーはコントリビューターと協力して、最終レビューとマージのためにメンテナーに渡す前に、変更が私たちの基準を満たしていることを確認する責任があります。レビュアーはマージリクエストがリンクされたIssueで説明されている問題に対処しているかを確認します。また、該当するすべてのマージリクエストチェックリスト項目が完了していることを確認する責任もあります。チェックリスト項目が適用外の場合、レビュアーはそのアイテムが本当に不要であることを確認します。レビュアーとして、何かが私たちの基準を満たしているかどうかわからない状況に直面したとき、マージリクエスト内で直接メンテナーに質問してください。

また、「誰でもコントリビュートできる」という精神で、興味のある人はレビュアーになることをお勧めします。利用可能なマージリクエストのレビューを妨げる障壁はあるべきではありません。関心のあるすべての方の参加を歓迎します。

レビュアープロセスに積極的に参加する予定の人は、[チームページのエントリを更新](/handbook/about/editing-handbook/#add-yourself-to-the-team-page)することをお勧めします。

レビューするマージリクエストを探すときは、[マージリクエストレポート](https://gitlab-org.gitlab.io/distribution/monitoring/mrs/)を確認して、[SLO](#service-level-objective)を超えそうなレビューを確認することを検討してください。

## メンテナー

プロジェクトメンテナーは、特に[レビュアーメンターシッププログラムに登録している](/handbook/engineering/workflow/code-review/#reviewer-mentorship-program)レビュアーが、自分が時間を費やす前にマージリクエストを確認するよう促することをお勧めします。メンテナーがレビュアーを待つことが合理的でない場合もあるため、ここでは判断が必要です。例えば、[SLO](#service-level-objective)を念頭に置く必要があります。MRがそのDeadlineを超えそうな場合、メンテナーは迷わず対応します。

## マージリクエストのアサイン

これらすべてを実現するために、コントリビューターには、誰かが特定のマージリクエストを確認すべき理由がある場合を除き、初期レビューを求める際に個人にマージリクエストをアサイン**しない**よう促します。むしろ、マージリクエストには"workflow::ready for review"ラベルを適用し、確認を始める際にレビュアーが自分自身をReviewersセクションに追加します。

マージリクエストが事前レビューなしにメンテナーに直接アサインされた場合、利用可能なレビュアーにアサインすることをお勧めします。レビュアーに直接アサインされた場合は判断を使ってください。すぐに対応できない場合は、別のレビュアーを見つけるようにしてください。

## サービスレベル目標 {#service-level-objective}

取り組むマージリクエストを探す際は、[GitLab Review-response SLO](/handbook/engineering/workflow/code-review/#review-response-slo)を検討してください。そのDeadlineを超えそうなものを最優先で確認します。

Distributionチームの負荷を考慮して、SLOは会社全体のものよりも長く設定されています：

- GitLabチームメンバーから: Review-response SLO < 4営業日
- [Leading Organizations](/handbook/engineering/workflow/code-review/#leading-organizations)の作者から: Review-response SLO < 6営業日

チームは、チームの拡大と技術的負債の解消に応じて、会社全体のSLO基準に戻ることを目指しています。

## レビューのイテレーション

マージリクエストがレビュー中になったら、レビュアー/メンテナーと作者がフィードバックを通じてイテレーションを行う間、"workflow::in review"ラベルはマージリクエストに残しておきます。

変更や追加レビューのためにマージリクエストを引き渡す準備ができたら、次のステップに責任を持つ人をアサインし、マージリクエスト内でその人をメンションする新しいコメントでハンドオフをシグナルします。

**NOTE**: デフォルトでは、作者は以前レビューしたレビュアー/メンテナーにハンドオフします。そのメンバーのステータスが2日以上不在と表示されている場合は、`gitlab-org/distribution`グループを`@`メンションしてDistributionチームに新しいレビュアーを要請してください。

## スカッシュとマージ

Distributionが所有するプロジェクトはデフォルトで[squash and merge](https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html)を有効にしています。この機能はマージリクエストのすべてのコミットをマージ前に1つのコミットにまとめ、ターゲットブランチのクリーンな履歴を確保します。

squash and merge機能は[encourage（推奨）](https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html#squash-commits-options)に設定されているため、作者は必要に応じてオプションを無効にできます。例えば、コミットが1つだけのマージリクエストはマージ前のスカッシュから必ずしも恩恵を受けるわけではありません。

## 参考

1. [Distributionチームのプロジェクト](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#all-projects) - Distributionチームが管理するプロジェクトの完全なリスト
1. [エンジニアリングプロジェクト](/handbook/engineering/projects/) - サポートされているGitLabプロジェクトの完全なリスト。プロジェクト名をクリックすると、各プロジェクトのメンテナーとレビュアーのリストが表示されます。
