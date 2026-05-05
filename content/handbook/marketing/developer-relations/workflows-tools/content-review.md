---
title: "Developer Relations のワークフロー: コンテンツレビュー"
upstream_path: /handbook/marketing/developer-relations/workflows-tools/content-review/
upstream_sha: 6b2970dac4d9078a5a79c285a6ee08817ecbd954
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
---

Developer Relations チームは、Product Marketing、Brand、各 Sales チームなど、コンテンツを制作するさまざまなステークホルダーに対して継続的なサポートを提供しています。GitLab 全体で制作されるコンテンツの技術的正確性を確保するため、GitLab の主要な公開コンテンツチャネル、特に [about.gitlab.com](https://about.gitlab.com) と [Highspot](/handbook/sales/field-communications/gitlab-highspot) における、よく閲覧されているコンテンツの定期レビューを実施しています。

## Fix Fridays

コンテンツレビューを実施する主な仕組みが Fix Fridays です。これは月 1 回、コンテンツレビューに充てる日です。チームメンバーは、毎月最終金曜日など、レビュー時間を決めてカレンダーを計画してください。金曜日が難しい場合は、月末までに割り当てられたタスクを完了できるよう、別の曜日や時間も検討できます。

Fix Fridays のチェックリストは次のとおりです。

1. レビュー前に、過去 30 日間で GitLab のよく閲覧されたコンテンツを記録した Fix Friday Issue が作成されます。フォーカス対象は、いずれかのチャネルでトップ 20 ページに入っている Web ページまたは Highspot コンテンツです。docs サイトはこれら定期レビューの対象外です。
1. Issue が作成されたら、チームメンバーの専門領域、馴染み、最近のレビュー実績などを考慮して、DRI（通常は Director, Developer Relations）が項目を割り当てます。
1. 項目が割り当てられたら、各チームメンバーは自分の項目をレビューする責任を負います。ただし Fix Fridays は意図的に協働できるよう設計されているので、必要に応じて GitLab 全体の他のチームメンバーに気軽に相談してください。これは、ステークホルダーへの問題提起、マーケティングメッセージへの理解を深めること、GitLab と顧客に関する知識を深める機会です。
1. 以下の[フィードバックの提供手順](/handbook/marketing/developer-relations/workflows-tools/content-review/#providing-feedback)に従ってフィードバックに対応します。
1. 項目のレビューが完了したら、レビュー中に作成したタスクが解決のために適切な DRI にアサインされていることを必ず確認してください。
1. レビューが完了しタスクの割り当てが済んだら、各項目のレビューが完了したことを示すため、FixFriday Issue の対応するチェックボックスをチェックしてください。

### フィードバックの提供

レビューしたコンテンツに変更を加える方法:

#### Web サイト

1. レビュー中、ページに対して MR をアサインすることで小さな変更を修正できる場合があります。
    - MR を作成する際は、まず Developer Relations チームメンバーをレビュアーにアサインし、その後ページの CODEOWNER または DRI に最終レビューとマージを依頼してください。
    - CODEOWNER または DRI がいない場合は、Suggested Reviewer 機能を使ってレビュアーを特定してください。
    - about.gitlab.com のホームページ、Pricing ページ、Why GitLab、Why Enterprise、Why Premium、または Platform については Michael Preuss にアサインしてください。その他の Buyer Experience Marketing ページについては Justin Vetter にアサインしてください。
1. レビュー中に MR でフィードバックに対応できない場合は、別の Issue の作成が必要になることがあります。

#### Highspot

1. Fix Friday Issue のコメントで、更新が必要な Highspot のページ、play、コンテンツについて、提案する変更を詳述したコメントとともに、作者またはフィードバックオーナーにメンションしてください。これによってそのコンテンツアイテムの DRI に TODO が作成されます。
    - smartpage や play に作者やフィードバックオーナーが存在しない場合は、ページ下部の「Ask for Help」セクションに記載されている人物にメンションしてください。
    - あるいは、Highspot 上のコンテンツについては、オーナーまたはファイルをアップロードした人/最後に更新した人にメンションすることもできます。その人が更新の適任 DRI でない場合は、適切な人物をメンションし直してくれます。
