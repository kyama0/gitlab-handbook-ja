---
title: "GitLab ベストプラクティス"
description: "エンゲージメントにおける GitLab のベストプラクティスについて学びます。"
upstream_path: /handbook/customer-success/professional-services-engineering/professional-services-delivery-methodology/gitlab-best-practices/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

このセクションでは、GitLab におけるベストプラクティスを包括的に概観し、効率的かつ効果的に活用するための重要なガイドラインを示します。

このドキュメントでは、組織が CI/CD パイプラインのセキュリティを標準化・強化するために、**National security agency [NSA]** および **Cybersecurity and Infrastructure Security Agency [CISA]** によって定められた標準に基づく推奨事項を提供します。

定められた標準についての関連情報は、こちらの [記事](https://www.cisa.gov/news-events/alerts/2023/06/28/cisa-and-nsa-release-joint-guidance-defending-continuous-integrationcontinuous-delivery-cicd) を参照してください。

## 1. main ブランチへの直接コミットではなくフィーチャーブランチを使用する

フィーチャーブランチを使うことは、開発を進めながら [ソースコード](https://about.gitlab.com/solutions/source-code-management/) をクリーンに保つためのシンプルな方法です。たとえば、最近 SVN から Git に移行したばかりのチームは、トランクベースのワークフローに慣れているかもしれません。Git を使用する場合、開発者は作業対象ごとにブランチを作成し、マージ前にコントリビューターが容易に [コードレビュープロセス](https://about.gitlab.com/topics/version-control/what-is-code-review/) を開始できるようにすべきです。

## 2. main ブランチだけでなく、すべてのコミットをテストする

CI を main ブランチにマージされたものだけテストするように設定している開発者もいますが、これではソフトウェア開発ライフサイクルの中で遅すぎます。開発者からプロダクトマネージャーまで、誰もが「main ブランチのテストは常にグリーンである」と確信できる状態であるべきです。新機能の開発を始める前に開発者が main をテストしなければならないようでは非効率です。

各コミットに対するフィーチャーブランチの中で、SAST、Secret Detection、Dependency Scanning、Container Scanning などの [アプリケーションセキュリティ](https://docs.gitlab.com/ee/user/application_security/) スキャンを含めましょう。

## 3. すべてのコミットですべてのテストを実行する。（テストが 5 分以上かかる場合は並列で実行できます）

フィーチャーブランチで作業し新しいコミットを追加するときは、すぐにテストを実行しましょう。テストに時間がかかる場合は、並列実行を試してください。マージリクエストではサーバー側で完全なテストスイートを実行します。開発用のテストスイートと新バージョン用のテストスイートが分かれているなら、[並列] テストを構成して、すべて実行する価値があります。

これらの結果は [各マージリクエストに表示する](https://docs.gitlab.com/ee/user/application_security/#view-security-scan-information-in-merge-requests) こともできます。

![MR ウィジェットのテスト結果](/images/customer-success/professional-services-engineering/professional-services-delivery-methodology/gitlab-best-practices/MR-UI-Results.png){width="624" height="220"}

## 4. main ブランチへマージする前にコードレビューを実施する

すべてを週末やプロジェクト終了時にまとめてテストしないでください。コードレビューはできるだけ早く実施すべきで、開発者は早期にレビューすることでライフサイクルの後半で問題を引き起こす可能性のある事項を特定しやすくなります。早く問題が見つかれば、解決策の作成も容易になります。

### GitLab のコードレビューワークフロー

GitLab のコードレビューワークフローはシンプルです。

1. ターミナルまたは GitLab の UI を使って変更を GitLab にプッシュします。
2. ターミナルまたは GitLab の UI からマージリクエストを開きます。
3. レビュアーにマージリクエストの承認を依頼します。
4. （任意）CI/CD の自動化を設定している場合は、グリーンになるのを待ってからマージします。
5. レビュアーがマージリクエストを承認するか、変更を求めます。指摘に従ってコードを修正します。
6. 必要なすべてのレビュアーから承認が得られたら、ベースブランチとのコンフリクトがなければ安全にマージできます。

コードレビューのベストプラクティス:

1. マージリクエストはまず、MR が触れている [カテゴリ（例: バックエンド、データベース）](https://docs.gitlab.com/ee/development/code_review.html#approval-guidelines) ごとのレビュアーがレビューすべきです。メンテナーが該当するドメイン知識を持っているとは限らないためです。これにより負荷分散にもつながります。各コードレビューの承認ルールを追加します。たとえば:
   1. バックエンドの承認者
   2. フロントエンドの承認者
   3. データベースの承認者
   4. ドキュメント
   5. その他
2. セキュリティスキャンや指摘へのサポートが必要な場合は、Application Security Team を含めます。
3. レビュアーはサイドバーの [reviewer 機能](https://docs.gitlab.com/ee/user/project/merge_requests/reviews/index.html) を使用します。レビュアーは [追加で承認](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/index.html#approve-a-merge-request) することで承認を付与できます。
4. マージリクエストが触れる領域に応じて、1 名以上の [メンテナー](/handbook/engineering/workflow/code-review/#maintainer) による承認が必要です。Approved ボタンはマージリクエストのウィジェット内にあります。
5. マージリクエストをマージするにもメンテナーが必要です。複数の承認が必要な場合は、最後にレビューして承認したメンテナーがマージします。
6. MR で [ラベル](https://docs.gitlab.com/ee/user/project/labels.html) を使用すると、コードレビュー中・進行中など、MR の現在のステータスを把握しやすくなります。
7. 以下にいくつかのヒントとガイドラインを示します。

### マージリクエストをレビューしてもらう

コードレビューは複数のイテレーションを要するプロセスであり、レビュアーが最初に気づかなかった点を後から見つけることもあることを覚えておいてください。

* あなたのコードの最初のレビュアーはあなた自身です。新しいブランチを最初にプッシュする前に、差分全体を読んでください。意味は通っていますか？ 変更全体の目的と無関係なものを含めていませんか？ デバッグコードを消し忘れていませんか？
* [マージリクエストガイドライン](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#merge-request-guidelines-for-contributors) に概説されているように、詳細な説明を書いてください。レビュアーによっては、製品機能やコードベースの該当領域に詳しくないかもしれません。詳しい説明はすべてのレビュアーが要求内容を理解し、効果的にテストするのに役立ちます。
* 自分の変更が他のマージの後にマージされる必要があると分かっている場合は、説明にその旨を記載し、[マージリクエストの依存関係](https://docs.gitlab.com/ee/user/project/merge_requests/dependencies.html) を設定してください。
* レビュアーの提案に感謝しましょう。（「いい指摘ですね。修正します。」）
* 個人攻撃と受け取らないでください。レビューの対象はコードであって、あなた自身ではありません。
* なぜそのコードが存在するのかを説明しましょう。（「これらの理由でこうなっています。このクラス／ファイル／メソッド／変数の名前を変更したほうが分かりやすいでしょうか？」）
* 関係ない変更やリファクタリングは、別のマージリクエストや Issue に切り出しましょう。
* レビュアーの視点を理解しようと努めましょう。
* すべてのコメントに返信するよう努めましょう。
* マージリクエストの作成者は、自分が完全に対応したスレッドのみを resolve します。未返信、未解決のスレッド、提案、質問、その他何かが残っている場合、そのスレッドはレビュアーが resolve するために残しておくべきです。
* すべてのフィードバックが、MR がマージされる前に取り込まれる必要があると決めてかかるべきではありません。これは MR 作成者とレビュアーの判断によるもので、対応すべきか、あるいはマージ後にフォローアップ Issue で取り組むべきかを判断します。
* 以前のフィードバックに基づくコミットは、ブランチに分離されたコミットとしてプッシュしましょう。マージ準備が整うまで squash しないでください。レビュアーが以前のフィードバックに基づく個別の更新を読めるようにするためです。
* 次のレビューの準備が整ったら、レビュアーに新しいレビューをリクエストします。レビューを依頼できない場合は、代わりにレビュアーに @ メンションしてください。

### レビューのリクエスト

* マージリクエストのレビュー準備が整ったら、[承認ガイドライン](https://docs.gitlab.com/ee/development/code_review.html#approval-guidelines) に基づいてレビュアーを選び、[最初のレビューをリクエスト](https://docs.gitlab.com/ee/user/project/merge_requests/reviews/index.html) しましょう。
* マージリクエストに複数のレビュー領域がある場合は、レビュアーがどの領域を、どの段階で（最初か 2 番目か）レビューすべきかを指定することを推奨します。これにより、複数領域の資格を持つチームメンバーが、自分が依頼されている領域を把握しやすくなります。たとえば、バックエンドとフロントエンドの両方の関心事を含むマージリクエストでは、次のようにレビュアーをメンションできます: @John_doe ~backend のレビューをお願いできますか？ または @Jane_Doe - この MR の ~frontend メンテナーレビューをお願いできますか？
* `workflow::ready for review` ラベルも利用できます。これはマージリクエストがレビュー可能で、どのレビュアーが拾っても良いことを意味します。時間的余裕がある場合のみこのラベルを使用し、マージリクエストがレビュアーにアサインされていることを確認することを推奨します。
* 最初のレビュアーから承認を得たら、メンテナーに引き継げます。デフォルトでは [ドメインの専門知識](https://docs.gitlab.com/ee/development/code_review.html#domain-experts) を持つメンテナーを選び、それ以外は Reviewer Roulette の推奨に従うか、`ready for merge` ラベルを使用してください。
* メンテナーがレビューに対応できないこともあります。不在であったり、[キャパシティが満杯](/handbook/engineering/workflow/code-review/#review-response-slo) である可能性があります。メンテナーのプロフィールで対応可否を確認できますし、すべきです。Roulette が推奨するメンテナーが対応できない場合は、リストから別の人を選んでください。
* マージリクエストがレビューされる責任は作者にあります。`ready for review` の状態が長く続く場合は、特定のレビュアーにレビューを依頼することを推奨します。

### マージリクエストのレビュー

なぜその変更が必要なのかを理解しましょう（バグ修正か、ユーザー体験の改善か、既存コードのリファクタリングか）。その後:

* 反復回数を減らすため、レビューは徹底的に行うようにしましょう。
* 強くこだわっている考えと、そうでない考えを伝えましょう。
* 問題を解決しつつコードを単純化する方法を探りましょう。
* 代替実装を提示しても良いですが、作成者はすでに検討済みであると仮定しましょう。（「ここでカスタムバリデータを使うのはどう思いますか？」）
* 作成者の視点を理解しようと努めましょう。
* ブランチをチェックアウトし、変更をローカルでテストしましょう。手動テストの量は自分で決められます。テストの結果として自動テストを追加する機会が見つかるかもしれません。
* コードのある部分が理解できなければ、その旨を伝えましょう。他の誰かも同じく混乱する可能性が高いです。
* 提案に対して作成者が何をすべきか／どう解決すべきかが明確になるようにしましょう。
  * 意図を伝えるために [Conventional Comment 形式](https://conventionalcomments.org/#format) を使うことを検討してください。
  * 必須でない提案には (non-blocking) の装飾を付け、作成者がそのマージリクエスト内で対応してもよいし後段でフォローアップしても構わないことを明示しましょう。
  * [Conventional Comment](https://conventionalcomments.org/) のプレフィックスを適用できる [Chrome/Firefox アドオン](https://gitlab.com/conventionalcomments/conventional-comments-button) があります。
  * オープンな依存関係がないことを確認しましょう。ブロッカーがないか [リンクされた Issue](https://docs.gitlab.com/ee/user/project/issues/related_issues.html) を確認します。必要に応じて作成者に確認します。1 つ以上のオープンな MR でブロックされている場合は、[MR 依存関係](https://docs.gitlab.com/ee/user/project/merge_requests/dependencies.html) を設定します。
* 行コメントの一巡が終わったら、「良さそうです」「いくつか対応してほしい点があります」のようなサマリコメントを残すと役立ちます。
* レビュー後に変更が必要な場合は作成者に伝えましょう。

マージリクエストがフォークから来ている場合は、[コミュニティコントリビューションに関する追加ガイドライン](https://docs.gitlab.com/ee/development/code_review.html#community-contributions) も確認してください。

### マージリクエストのマージ

マージを判断する前に:

* マイルストーンを設定します。
* 正しい [MR タイプラベル](https://docs.gitlab.com/ee/development/labels/index.html#type-labels) が付与されていることを確認します。
* danger bot やコード品質、その他のレポートからの警告・エラーを検討します。違反に強い理由がない限り、マージ前に解決すべきです。失敗ジョブのある MR をマージする場合は、コメントを必ず投稿してください。
* MR が品質関連と非品質関連の両方の変更を含む場合、品質関連の変更が Software Engineer in Test に承認された後、ユーザー向けの変更（バックエンド、フロントエンド、データベース）に応じたメンテナーがマージすべきです。

MR をマージするには少なくとも 1 名のメンテナーの承認が必要です。MR の作成者および MR にコミットを追加した人は MR を承認できません。MR に貢献していないメンテナーを探して承認してもらう必要があります。原則として、最終的に必要となった承認者がマージするべきです。

最終承認者が MR をマージしないことがあるシナリオ:

* 承認者が承認後に auto-merge を設定し忘れた。
* 承認者が自分が最終承認者であることに気付かなかった。
* 承認者が auto-merge を設定したが、GitLab によって解除された。

これらが発生した場合、MR の作成者は、必要なすべての承認を得ており、リポジトリへのマージ権限を持っていれば、自分の MR をマージしても構いません。これは GitLab の [bias for action](../../../../values/index.md#operate-with-a-bias-for-action) のバリューにも沿うものです。

このポリシーは、GitLab の [Change Management Controls](/handbook/security/security-and-technology-policies/change-management-policy/) の CHG-04 統制を満たすために設けられています。

このポリシーを gitlab-org/gitlab で実装するため、トップレベルの CODEOWNERS のメンテナーから承認を得るために以下の設定を有効にしています:

* [作成者による承認の禁止](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/settings.html#prevent-approval-by-author)
* [コミットを追加したユーザーによる承認の禁止](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/settings.html#prevent-approvals-by-users-who-add-commits)
* [マージリクエスト内での承認ルール編集の禁止](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/settings.html#prevent-editing-approval-rules-in-merge-requests)
* [ソースブランチにコミットが追加されたら、すべての承認を取り消す](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/settings.html#remove-all-approvals-when-commits-are-added-to-the-source-branch)

gitlab-org/gitlab の CODEOWNERS ファイル内のコードオーナーを更新するには、[コードオーナー承認のハンドブックセクション](/handbook/engineering/workflow/code-review/#code-owner-approvals) で説明されているプロセスに従ってください。

ローカルでのリベースや提案の適用などの操作は、コミットの追加と同等とみなされ、既存の承認をリセットすることがあります。UI からのリベースや [/rebase クイックアクション](https://docs.gitlab.com/ee/user/project/quick_actions.html) ではリベース時に承認は削除されません。

#### **マージの準備が整ったら:**

* マージリクエストにコミットが多い場合は [Squash and merge](https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html#squash-and-merge) 機能の利用を検討してください。コードをマージするとき、メンテナーは作成者がすでにこのオプションを設定している場合、または明らかにコミット履歴が乱雑なマージリクエストの場合のみ squash 機能を使うべきです。後者の場合は、作成者と相談を繰り返すよりも squash する方が効率的です。それ以外で MR にコミットがわずかしかない場合は、作成者の設定を尊重して squash しません。
* マージリクエストの Pipelines タブに移動し、Run pipeline を選択します。次に Overview タブで Auto-merge を有効にします。注意点:
  * [デフォルトブランチが壊れている場合](/handbook/engineering/workflow/#broken-master) は、[非常に特定のケース](/handbook/engineering/workflow/#criteria-for-merging-during-broken-master) を除き、マージリクエストをマージしないでください。それ以外の場合は、[ハンドブックの手順](/handbook/engineering/workflow/#merging-during-broken-master) に従います。
  * 最新のパイプラインがマージリクエスト承認前に作成されたものなら、新しいパイプラインを開始して RSpec スイート全体が実行されるようにしてください。マージリクエストにバックエンドの変更が含まれていない場合のみこのステップをスキップできます。
  * 最新の [merged results pipeline](https://docs.gitlab.com/ee/ci/pipelines/merged_results_pipelines.html) が 6 時間以内に作成され、終了から 2 時間以内であれば、マージリクエストは main に十分近いとみなせるため、新しいパイプラインを開始せずにマージしてかまいません。
* MR を auto-merge に設定したら、以降に発見された事項についてのリビジョンの責任はあなたが引き継ぎます。
* [Squash and merge](https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html#squash-and-merge) が設定されているマージリクエストでは、squash されたコミットのデフォルトコミットメッセージはマージリクエストのタイトルから取られます。マージ前に [より情報量の多いコミットメッセージを持つコミットを選ぶ](https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html) ことをお勧めします。

merged results pipelines のおかげで、作成者は以前ほど頻繁にブランチをリベースする必要がなくなりました（コンフリクトがあるときのみ）。Merge Results Pipeline はすでに main の最新変更を取り込んでいるためです。これにより、メンテナーが最終リベースを依頼する代わりに、MR パイプラインを開始して auto-merge を設定するだけでよく、レビュー／マージのサイクルが速くなります。このステップは、パイプライン作成時の最新の main に対して Merge Results をテストすることで、実際の Merge Trains 機能に非常に近いものになります。

## 5. デプロイはブランチまたはタグに基づいて自動化する

開発者が main を毎回デプロイしたくなければ、production ブランチを作成できます。スクリプトで実行したり手動で行うのではなく、チームは自動化を使うか、特定のブランチが [本番デプロイ](https://docs.gitlab.com/ee/ci/yaml/#environment) をトリガーするように設定できます。

## 6. タグは CI ではなくユーザーが設定する

開発者は [タグ](https://docs.gitlab.com/ee/user/project/repository/tags/) を使い、CI がリポジトリを変更するのではなく、CI がアクションを実行するようにすべきです。

## 7. リリースはタグに基づく

各タグは新しい [リリース](https://docs.gitlab.com/ee/user/project/releases/) を作成すべきです。この実践により、開発環境がクリーンで効率的に保たれます。

## 8. プッシュ済みのコミットは決してリベースしない

公開ブランチにプッシュした後はリベースすべきではありません。リベースしてしまうと、[cherry-pick](https://git-scm.com/docs/git-cherry-pick) する際に改善内容やテスト結果を特定しづらくなります。コードレビューの最後に、何かを revert しやすくするために squash とリベースを依頼するときは、このヒントを無視しても構いません。ただし一般的なガイドラインは: コードはクリーンに、履歴は現実的に、です。

## 9. 全員が main から始め、main を対象にする

このヒントは長命なブランチを防ぎます。開発者は main をチェックアウトし、機能を作り、マージリクエストを作成して再び main を対象とします。マージ前に完全なレビューを行い、中間段階を排除すべきです。

## 10. バグはまず main で修正し、次にリリースブランチで修正する

バグを発見した後、リリースされたばかりのバージョンで修正して main では修正しないというのは問題のある行動です。これを避けるため、開発者は常に「修正を前進させる」、つまりまず main に変更をプッシュし、その後別のパッチリリースブランチに cherry-pick すべきです。

## 11. コミットメッセージは意図を反映する

開発者は何をしたかだけでなく、なぜそれをしたのかも書くべきです。さらに有用なのは、なぜ他のオプションではなくこのオプションを選んだのかを説明することです。これにより将来のコントリビューターが開発プロセスを理解しやすくなります。説明的なコミットメッセージを書くことは、コードレビューや今後の開発に役立ちます。

## 12. CI のベストプラクティス: パイプラインのステージを最適化する

[CI パイプライン](https://about.gitlab.com/topics/ci-cd/cicd-pipeline/) はジョブとステージで構成されます。ジョブは特定のステージ内で実行されるアクティビティで、すべてのジョブが成功すると次のステージに進みます。CI パイプラインから最大限の効果を引き出すために、失敗の特定と修正がしやすいようにステージを最適化しましょう。

ステージは類似のジョブを整理する簡単な手段ですが、パイプライン内には、失敗してもプロジェクトに悪影響がない、安全に早いステージで実行できるジョブもいくつかあるかもしれません。これらのジョブを早いステージで実行することで [CI パイプラインを高速化](https://about.gitlab.com/blog/2019/07/12/guide-to-ci-cd-pipelines/) することを検討してください。

## 13. CI のベストプラクティス: テスト環境は本番環境を模倣すべき

継続的インテグレーションでは、すべてのコミットがビルドをトリガーします。これらのビルドはテストを実行し、導入したコード変更によって何かが壊れていないかを特定します。[テストピラミッド](https://martinfowler.com/bliki/TestPyramid.html) は、開発者がテストのバランスをどう考えるかの一つの方法です。[エンドツーエンドテスト](https://docs.gitlab.com/ee/ci/examples/end_to_end_testing_webdriverio/#what-to-test) は主にセーフガードとして使われ、ユニットテストはエラー特定に最も頻繁に使われます。テストで重要なのは環境です。テスト環境と本番環境が一致していれば、開発者は結果を信頼でき、自信を持ってデプロイできます。

GitLab では、[Review Apps](https://docs.gitlab.com/ee/ci/review_apps/index.html) が新しいコードを本番に近いライブ環境に投入し、コード変更を可視化します。この機能は、開発者が変更の影響を評価するのに役立ちます。

継続的インテグレーションは、開発者がより速くデプロイし、より早くフィードバックを得るのに役立ちます。最終的には、最良の継続的インテグレーションシステムは実際に使うものです。ニーズに合った [適切な CI](https://about.gitlab.com/topics/ci-cd/choose-continuous-integration-tool/) を見つけ、これらのベストプラクティスを取り入れて新しい CI ワークフローを最大限に活用しましょう。

## 14. CI のベストプラクティス: 安全に保つ

CI/CD はシフトレフトであり、プロセスの早い段階でセキュリティを統合する良い機会となります。

## 15. サードパーティとの統合

* JIRA を使用する場合、JIRA を GitLab と統合してビルド／ブランチ／MR の更新をタイムリーに取得します。
  * [すべての MR コミットに JIRA チケットを追加するルールを設定する](https://docs.gitlab.com/ee/user/project/repository/push_rules.html)
* [Teams-GitLab 連携](https://docs.gitlab.com/ee/user/project/integrations/microsoft_teams.html) で、次のような重要通知を送信します。
  * 本番／プリプロダクションデプロイの失敗

## 16. 保護ブランチ

[保護ブランチ](https://docs.gitlab.com/ee/user/project/repository/branches/protected.html) では、以下を制御できます。

* どのユーザーがブランチにマージできるか。
* どのユーザーがブランチにプッシュできるか。
* ユーザーがブランチに force push できるかどうか。
* CODEOWNERS ファイルにリストされたファイルへの変更がブランチに直接プッシュできるかどうか。
* どのユーザーがブランチの保護を解除できるか。

リポジトリの [デフォルトブランチ](https://docs.gitlab.com/ee/user/project/repository/branches/default.html) はデフォルトで保護されています。

## 17. 環境ブランチ戦略

staging ブランチに自動的に更新される [環境](https://about.gitlab.com/blog/2023/07/27/gitlab-flow-duo/) を持つのは良いアイデアかもしれません。ただしこの場合、その環境名はブランチ名と異なるかもしれません。staging 環境、プリプロダクション環境、本番環境があると仮定しましょう。

![GitLab Flow](/images/customer-success/professional-services-engineering/professional-services-delivery-methodology/gitlab-best-practices/gitlab-flow.png){width="356" height="340"}

この場合、staging ブランチを staging 環境にデプロイします。プリプロダクションにデプロイするには、staging ブランチから pre-prod ブランチへのマージリクエストを作成します。pre-prod ブランチを production ブランチにマージしてリリースします。コミットがダウンストリームのみに流れるこのワークフローは、すべての環境ですべてがテストされていることを保証します。

## 18. コンプライアンスフレームワーク

コンプライアンスチームにとって、自分たちの統制と要件が正しく設定されていること、そして正しく設定され続けることに自信を持つことが重要です。この自信を得るために [コンプライアンスパイプライン](https://docs.gitlab.com/ee/user/group/compliance_frameworks.html) を構成できます。

コンプライアンス担当者がパイプラインの作成と利用の強制を担当します。実行中のパイプラインを開発者が変更できないようにできます。これはコンプライアンス担当者だけが実行できるタスクで、承認なしでもコンプライアントなコードのみがプッシュされることを保証します。

## 19. セキュリティポリシー

GitLab はセキュリティポリシーを提供しており、セキュリティチームが構成に従ってセキュリティスキャンを実行することを必須化できます。これにより、設定したスキャンが変更や無効化されていないことをセキュリティチームが確信できます。

ポリシーには 2 種類あります。[Scan Execution Policies](https://docs.gitlab.com/ee/user/application_security/policies/scan_execution_policies.html) と [Merge Request Approval Policies](https://docs.gitlab.com/ee/user/application_security/policies/merge_request_approval_policies.html) です。

## 20. 監査管理とコンプライアンスダッシュボード

コンプライアンスのもう 1 つの重要な側面は、それがグループ／プロジェクトで実際に行われているかを把握することです。GitLab には監査をサポートする Audit Events と Compliance Reports があります。

Audit Events を使うと、GitLab のオーナーや管理者は、誰がいつ重要なアクションを実行したかなどの重要なイベントを追跡できます。

![Audit events](/images/customer-success/professional-services-engineering/professional-services-delivery-methodology/gitlab-best-practices/audit-events.png){width="496" height="322"}

Audit Events はグループごと、プロジェクトごとに異なるイベントを記録し、その内容は [audit events](https://docs.gitlab.com/ee/administration/audit_event_reports.html) のドキュメントで確認できます。Audit Events には Security & Compliance > Audit Events からアクセスできます。例:

* プロジェクトに追加されたユーザーとその権限
* プロジェクトにアサインされたユーザーの権限変更
* プロジェクトの CI/CD 変数の追加、削除、または保護ステータスの変更
* グループに追加されたユーザーとその権限
* グループ名やパスの変更

Audit Events は Audit Event Streaming を使って HTTP エンドポイントに送信することもできます。Audit Event Streaming の実装方法はこちらの [動画](https://youtu.be/zHwVF9-i7e4?t=52) で紹介しています。

Compliance Report はグループのマージリクエスト活動を確認できる機能です。グループ内のすべてのプロジェクトを高レベルで俯瞰できます。

![Compliance report](/images/customer-success/professional-services-engineering/professional-services-delivery-methodology/gitlab-best-practices/compliance-report.png){width="524" height="339"}

このレポートを使えば、以下が可能です。

* 各プロジェクトの最新マージリクエストの概要を取得
* マージリクエストが承認されたか、誰によって承認されたかを確認
* マージリクエストの作成者を確認
* 各マージリクエストに対する最新の CI/CD パイプライン結果を確認

Compliance Report は、トップレベルのグループから Security & Compliance > Compliance Report を選択してアクセスできます。

## 21. 正しいユーザー権限とロールの実装

正しい [ユーザー権限とロール](https://docs.gitlab.com/ee/user/permissions.html) を実装することで、GitLab における DevOps ライフサイクル全体に以下のような肯定的な効果が得られます。

* 開発者を制限する
  * セキュリティポリシーの変更などの主要な意思決定
  * Issue や MR の削除
  * MR の自己承認や、MR 承認ルールの管理
  * プロジェクトへのチームメンバーの追加・管理
  * Webhook の設定
  * プロジェクト設定の編集
  * コンプライアンスフレームワークへのプロジェクトの割り当て・削除
  * プッシュルールの管理
  * 保護ブランチの有効／無効
* リスク: ユーザーが上記の活動を実行できると、GitLab のベストプラクティスに反する操作が行われる可能性があります。
