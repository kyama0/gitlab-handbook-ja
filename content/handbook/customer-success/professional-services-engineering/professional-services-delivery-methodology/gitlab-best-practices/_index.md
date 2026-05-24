---
title: "GitLab ベストプラクティス"
description: "エンゲージメントにおける GitLab のベストプラクティスについて学びます。"
upstream_path: /handbook/customer-success/professional-services-engineering/professional-services-delivery-methodology/gitlab-best-practices/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
lastmod: "2026-05-22T14:47:44+02:00"
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
---

このセクションでは、GitLab におけるベストプラクティスを包括的に概観し、効率的かつ効果的な利用のための主要なガイドラインを取り上げます。

このドキュメントは、組織が CI/CD パイプラインのセキュリティを標準化し強化するために、**National security agency \[NSA\]** と **Cybersecurity and Infrastructure Security Agency \[CISA\]** によって定義された標準に基づく推奨事項を提供します。

定義された標準に関する関連情報については、この[記事](https://www.cisa.gov/news-events/alerts/2023/06/28/cisa-and-nsa-release-joint-guidance-defending-continuous-integrationcontinuous-delivery-cicd)を参照できます。

## 1. main ブランチへの直接コミットではなくフィーチャーブランチを使う

フィーチャーブランチを使うことは、開発を進めつつ[ソースコード](https://about.gitlab.com/solutions/source-code-management/)をクリーンに保つシンプルな方法です。たとえば、あるチームが最近 SVN から Git に移行したばかりであれば、トランクベースのワークフローに慣れているでしょう。Git を使う場合、開発者は取り組むものごとにブランチを作成し、マージ前にコントリビューターが容易に[コードレビュープロセス](https://about.gitlab.com/topics/version-control/what-is-code-review/)を開始できるようにすべきです。

## 2. main ブランチ上のコミットだけでなく、すべてのコミットをテストする

一部の開発者は、main ブランチにマージされたものだけをテストするように CI を設定しますが、これはソフトウェア開発ライフサイクルの中では遅すぎます。開発者からプロダクトマネージャーまで、全員が main ブランチのテストが常にグリーンであると確信できるべきです。新機能の開発を始める前に開発者が main をテストしなければならないのは非効率です。

各コミットについて、SAST、Secret Detection、Dependency Scanning、Container Scanning などの[アプリケーションセキュリティ](https://docs.gitlab.com/ee/user/application_security/)スキャンをフィーチャーブランチに含めます。

## 3. すべてのコミットですべてのテストを実行する。（テストの実行が 5 分を超える場合は、並列で実行できます）

フィーチャーブランチで作業して新しいコミットを追加するときは、すぐにテストを実行します。テストに時間がかかる場合は、並列で実行してみてください。これをマージリクエストでサーバーサイドで行い、完全なテストスイートを実行します。開発用のテストスイートと、新しいバージョン専用のテストスイートがある場合は、\[並列\]テストをセットアップしてすべて実行する価値があります。

これらを[各マージリクエストに表示](https://docs.gitlab.com/ee/user/application_security/#view-security-scan-information-in-merge-requests)させることもできます。

![MR ウィジェットのテスト結果](/images/customer-success/professional-services-engineering/professional-services-delivery-methodology/gitlab-best-practices/MR-UI-Results.png){width="624" height="220"}

## 4. main ブランチへのマージ前にコードレビューを行う

1 週間やプロジェクトの終わりにすべてをテストするのはやめましょう。コードレビューはできるだけ早く行うべきです。なぜなら、開発者はライフサイクルの後半で問題を引き起こしうる課題をより特定しやすくなるからです。問題を早期に見つけられれば、解決策を作り出すのも容易になります。

### GitLab のコードレビューワークフロー

GitLab のコードレビューワークフローはシンプルです。

1. ターミナルまたは GitLab インターフェースを使って、変更を GitLab にプッシュします。
2. ターミナルまたは GitLab インターフェースから、マージリクエストを開きます。
3. マージリクエストの承認をレビュアーに依頼します。
4. （任意）CI/CD 自動化を設定している場合は、マージ前にグリーンを待ちます。
5. レビュアーはマージリクエストを承認するか、変更を要求します。それに応じてコードを変更します。
6. 必要なレビュアー全員がマージリクエストを承認したら、ベースブランチとの競合がなければ安全にマージできます。

コードレビューのベストプラクティス:

1. マージリクエストは、MR が触れる[カテゴリ（例: バックエンド、データベース）](https://docs.gitlab.com/ee/development/code_review.html#approval-guidelines)ごとにまずレビュアーがレビューすべきです。メンテナは関連するドメイン知識を持っていない場合があるためです。これは作業負荷の分散にも役立ちます。各コードレビューに承認ルールを追加してください。例えば:
   1. バックエンドの承認者
   2. フロントエンドの承認者
   3. データベースの承認者
   4. ドキュメント
   5. など
2. セキュリティスキャンやコメントについての支援が必要な場合は、Application Security Team を加えてください。
3. レビュアーはサイドバーの[レビュアー機能](https://docs.gitlab.com/ee/user/project/merge_requests/reviews/index.html)を使います。レビュアーは[追加で承認する](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/index.html#approve-a-merge-request)ことで承認を加えられます。
4. マージリクエストが触れる領域に応じて、1 名以上の[メンテナ](/handbook/engineering/workflow/code-review/#maintainer)の承認が必要です。Approved ボタンはマージリクエストのウィジェットにあります。
5. マージリクエストをマージするにもメンテナが必要です。複数の承認が必要な場合は、最後にレビューして承認したメンテナがマージします。
6. MR で[ラベル](https://docs.gitlab.com/ee/user/project/labels.html)を使うと、MR がコードレビュー中／作業中なのか、その他の状態なのか、現在のステータスを特定しやすくなります。
7. 以下は従うべきヒントとガイドラインです。

### マージリクエストをレビューしてもらう

コードレビューは複数のイテレーションを要するプロセスであり、レビュアーが最初には気づかなかったことを後から見つけることもある、という点を念頭に置いてください。

* あなたのコードの最初のレビュアーはあなた自身です。ピカピカの新しいブランチを初めてプッシュする前に、diff 全体に目を通してください。理にかなっていますか？変更の全体的な目的に無関係なものを含めていませんか？デバッグ用のコードを取り除き忘れていませんか？
* [マージリクエストのガイドライン](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#merge-request-guidelines-for-contributors)に概説されているとおり、詳細な説明を書いてください。レビュアーの中には、プロダクト機能やコードベースの該当領域に詳しくない人もいるかもしれません。詳しい説明は、すべてのレビュアーがあなたのリクエストを理解し、効果的にテストするのに役立ちます。
* 自分の変更が別の変更のマージに先行依存していることがわかっている場合は、説明にそれを記し、[マージリクエストの依存関係](https://docs.gitlab.com/ee/user/project/merge_requests/dependencies.html)を設定してください。
* レビュアーの提案に感謝しましょう。（「いい指摘ですね。その変更を加えます。」）
* 個人的に受け取らないでください。レビューの対象はコードであって、あなたではありません。
* なぜそのコードが存在するのかを説明してください。（「こういう理由でそうなっています。このクラス／ファイル／メソッド／変数の名前を変えたほうがわかりやすいですか？」）
* 無関係な変更やリファクタリングは、将来のマージリクエスト／Issue に切り出してください。
* レビュアーの視点を理解するよう努めてください。
* すべてのコメントに返信するよう努めてください。
* マージリクエストの作成者は、完全に対応し終えたスレッドのみを解決します。未返信、未解決のスレッド、提案、質問、その他何かがあれば、そのスレッドはレビュアーが解決するために残しておくべきです。
* すべてのフィードバックが、推奨された変更を MR がマージされる前に取り込むことを求めている、と決めつけるべきではありません。これが必須なのか、それとも当該 MR がマージされた後に将来そのフィードバックに対応するためのフォローアップ Issue を作成すべきなのかは、MR 作成者とレビュアーの判断に委ねられます。
* 以前のフィードバックのラウンドに基づくコミットは、独立したコミットとしてブランチにプッシュしてください。ブランチがマージの準備ができるまでは squash しないでください。レビュアーは、自分の以前のフィードバックに基づく個々の更新を読めるべきです。
* もう一度レビューしてもらう準備ができたら、レビュアーに新しいレビューを依頼してください。レビューを依頼する権限がない場合は、代わりにレビュアーに @ メンションしてください。

### レビューを依頼する

* マージリクエストをレビューしてもらう準備ができたら、[承認ガイドライン](https://docs.gitlab.com/ee/development/code_review.html#approval-guidelines)に基づいてレビュアーを選び、[最初のレビューを依頼](https://docs.gitlab.com/ee/user/project/merge_requests/reviews/index.html)すべきです。
* マージリクエストにレビュー対象の領域が複数ある場合は、レビュアーがどの領域を、どの段階（1 次または 2 次）でレビューすべきかを指定することが推奨されます。これにより、複数の領域のレビュアーとして資格のあるチームメンバーが、どの領域のレビューを依頼されているかを知りやすくなります。例えば、マージリクエストにバックエンドとフロントエンドの両方の懸念がある場合、次のようにレビュアーにメンションできます: @John_doe さん、\~backend をレビューしていただけますか？または @Jane_Doe さん、この MR を \~frontend のメンテナレビューしていただけますか？
* workflow::ready for review ラベルを使うこともできます。これは、マージリクエストがレビューの準備ができており、どのレビュアーでもピックできることを意味します。このラベルは、時間的なプレッシャーがない場合にのみ使い、マージリクエストがレビュアーにアサインされていることを確認することが推奨されます。
* マージリクエストが最初のレビュアーから承認を受けたら、メンテナに渡せます。デフォルトでは[ドメインの専門知識](https://docs.gitlab.com/ee/development/code_review.html#domain-experts)を持つメンテナを選ぶべきで、そうでなければ Reviewer Roulette の推奨に従うか、ready for merge ラベルを使ってください。
* メンテナがレビューに対応できないこともあります。オフィスを離れていたり、[キャパシティに達していたり](/handbook/engineering/workflow/code-review/#review-response-slo)するかもしれません。メンテナのプロフィールで対応可否を確認できますし、確認すべきです。ルーレットが推奨したメンテナが対応できない場合は、そのリストから別の人を選んでください。
* マージリクエストがレビューされるようにするのは作成者の責任です。ready for review の状態に長くとどまりすぎる場合は、特定のレビュアーにレビューを依頼することが推奨されます。

### マージリクエストをレビューする

なぜその変更が必要なのか（バグ修正、ユーザー体験の改善、既存コードのリファクタリング）を理解してください。そのうえで:

* イテレーションの回数を減らすため、レビューは徹底的に行うよう努めてください。
* 自分が強くこだわるアイデアと、そうでないものを伝えてください。
* 問題を解決しつつコードをシンプルにする方法を見つけてください。
* 代替の実装を提案してください。ただし、作成者がすでにそれらを検討済みだと想定してください。（「ここでカスタムバリデーターを使うのはどう思いますか？」）
* 作成者の視点を理解するよう努めてください。
* ブランチをチェックアウトし、変更をローカルでテストしてください。どれだけ手動テストを行うかは自分で決められます。あなたのテストが、自動テストを追加する機会につながるかもしれません。
* コードのある部分が理解できない場合は、そう言ってください。他の誰かもそれに戸惑う可能性が高いです。
* 提案に対応／解決するために作成者に求められていることを、作成者が明確に理解できるようにしてください。
  * 意図を伝えるために [Conventional Comment 形式](https://conventionalcomments.org/#format)を使うことを検討してください。
  * 必須でない提案には (non-blocking) を付け、作成者がマージリクエスト内で任意に解決するか、後の段階でフォローアップできることがわかるようにしてください。
  * [Conventional Comment](https://conventionalcomments.org/) のプレフィックスを適用するのに使える [Chrome／Firefox のアドオン](https://gitlab.com/conventionalcomments/conventional-comments-button)があります。
* 未解決の依存関係がないことを確認してください。ブロッカーがないか[リンクされた Issue](https://docs.gitlab.com/ee/user/project/issues/related_issues.html) を確認してください。必要に応じて作成者と明確にしてください。1 つ以上の未マージの MR にブロックされている場合は、[MR の依存関係](https://docs.gitlab.com/ee/user/project/merge_requests/dependencies.html)を設定してください。
* 行ごとのコメントのラウンドの後、「Looks good to me（自分としては問題なし）」や「Just a couple things to address（対応すべきことが 2 つほど）」といったサマリーのコメントを投稿すると役立つことがあります。
* レビューの結果、変更が必要な場合は作成者に知らせてください。

マージリクエストがフォークから来ている場合は、[コミュニティコントリビューションの追加ガイドライン](https://docs.gitlab.com/ee/development/code_review.html#community-contributions)も確認してください。

### マージリクエストをマージする

マージの判断を下す前に:

* マイルストーンを設定してください。
* 正しい [MR タイプラベル](https://docs.gitlab.com/ee/development/labels/index.html#type-labels)が適用されていることを確認してください。
* danger bot、コード品質、その他のレポートからの警告とエラーを考慮してください。違反について強い根拠を示せない限り、これらはマージ前に解決すべきです。失敗したジョブがある状態で MR をマージする場合は、コメントを投稿しなければなりません。
* MR に品質関連の変更と非品質関連の変更の両方が含まれる場合、品質関連の変更が [Developer Experience](/handbook/engineering/infrastructure-platforms/developer-experience/) チームのメンバーによって承認された後、ユーザー向けの変更（バックエンド、フロントエンド、またはデータベース）の該当メンテナによって MR をマージすべきです。

MR をマージできるようになる前に、少なくとも 1 名のメンテナが MR を承認しなければなりません。MR の作成者および MR にコミットを追加した人は、MR を承認する権限がなく、MR に貢献していないメンテナに承認を求めなければなりません。一般に、最後に必要な承認者が MR をマージすべきです。

最後の承認者が MR をマージしないかもしれないシナリオ:

* 承認者が、承認後に auto-merge の設定を忘れる。
* 承認者が、自分が最後の承認者であることに気づいていない。
* 承認者が auto-merge を設定したが、GitLab によって解除される。

これらのシナリオのいずれかが発生した場合、MR の作成者は、必要なすべての承認があり、かつリポジトリへのマージ権限を持っていれば、自分の MR をマージできます。これは GitLab の[アクション志向のバイアス](../../../../values/_index.md#operate-with-a-bias-for-action)バリューにも沿っています。

このポリシーは、GitLab の[変更管理コントロール](/handbook/security/security-and-technology-policies/change-management-policy/)の CHG-04 コントロールを満たすために設けられています。

gitlab-org/gitlab でこのポリシーを実装するため、MR がトップレベルの CODEOWNERS メンテナから承認を得られるよう、次の設定を有効にしています:

* [作成者による承認を防止](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/settings.html#prevent-approval-by-author)。
* [コミットを追加したユーザーによる承認を防止](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/settings.html#prevent-approvals-by-users-who-add-commits)。
* [マージリクエストでの承認ルールの編集を防止](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/settings.html#prevent-editing-approval-rules-in-merge-requests)。
* [ソースブランチにコミットが追加されたときにすべての承認を削除](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/settings.html#remove-all-approvals-when-commits-are-added-to-the-source-branch)。

gitlab-org/gitlab の CODEOWNERS ファイル内のコードオーナーを更新するには、[code owners approvals ハンドブックセクション](/handbook/engineering/workflow/code-review/#code-owner-approvals)で説明されているプロセスに従ってください。

ローカルでのリベースや提案の適用といった一部のアクションは、コミットの追加と同じとみなされ、既存の承認をリセットする可能性があります。UI からのリベースや [/rebase クイックアクション](https://docs.gitlab.com/ee/user/project/quick_actions.html)でリベースした場合、承認は削除されません。

#### **マージの準備ができたら:**

* マージリクエストに多くのコミットがある場合は、[Squash and merge](https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html#squash-and-merge) 機能を使うことを検討してください。コードをマージするとき、メンテナは、作成者がすでにこのオプションを設定している場合、またはマージリクエストに明らかに乱雑なコミット履歴が含まれていてコミットを squash したほうが作成者に確認し直すより効率的な場合にのみ、squash 機能を使うべきです。それ以外で MR にコミットが少数しかない場合は、squash しないことで作成者の設定を尊重します。
* マージリクエストの Pipelines タブに移動し、Run pipeline を選択します。次に Overview タブで Auto-merge を有効にします。次の点に注意してください:
  * [デフォルトブランチが壊れている](/handbook/engineering/workflow/#broken-master)場合は、[ごく特定のケース](/handbook/engineering/workflow/#criteria-for-merging-during-broken-master)を除き、マージリクエストをマージしないでください。その他のケースについては、これらの[ハンドブックの手順](/handbook/engineering/workflow/#merging-during-broken-master)に従ってください。
  * 最新のパイプラインがマージリクエストの承認前に作成された場合は、完全な RSpec スイートが実行されたことを保証するため、新しいパイプラインを開始してください。このステップは、マージリクエストにバックエンドの変更が一切含まれていない場合にのみスキップできます。
  * 最新の[マージ結果パイプライン](https://docs.gitlab.com/ee/ci/pipelines/merged_results_pipelines.html)が 6 時間以内に作成され、かつ 2 時間以内に完了している場合は、マージリクエストが main に十分近いので、新しいパイプラインを開始せずにマージできます。
* MR を auto-merge に設定したら、それ以降に見つかるものについては、後続のリビジョンを引き継ぐべきです。
* [Squash and merge](https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html#squash-and-merge) が設定されたマージリクエストでは、squash されたコミットのデフォルトのコミットメッセージはマージリクエストのタイトルから取られます。マージ前に[より有益なコミットメッセージを持つコミットを選択](https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html)することが推奨されます。

マージ結果パイプラインのおかげで、作成者はもうそれほど頻繁にブランチをリベースする必要がなくなりました（競合がある場合のみ）。マージ結果パイプラインがすでに main の最新の変更を取り込んでいるためです。これにより、メンテナが最後のリベースを求める必要がなくなるため、レビュー／マージのサイクルが速くなります。代わりにメンテナは、MR パイプラインを開始して auto-merge を設定するだけです。このステップは、パイプライン作成時点の最新の main に対してマージ結果をテストすることで、実際の Merge Trains 機能に非常に近づきます。

## 5. デプロイはブランチまたはタグに基づいて自動で行われる

開発者が毎回 main をデプロイしたくない場合は、production ブランチを作成できます。スクリプトを使ったり手作業で行ったりする代わりに、チームは自動化を使うか、[本番デプロイ](https://docs.gitlab.com/ee/ci/yaml/#environment)をトリガーする特定のブランチを持てます。

## 6. タグは CI ではなくユーザーが設定する

開発者は[タグ](https://docs.gitlab.com/ee/user/project/repository/tags/)を使い、CI がリポジトリを変更するのではなく、CI がアクションを実行するようにすべきです。

## 7. リリースはタグに基づく

各タグは新しい[リリース](https://docs.gitlab.com/ee/user/project/releases/)を作成すべきです。このプラクティスにより、クリーンで効率的な開発環境が保たれます。

## 8. プッシュされたコミットは決してリベースしない

パブリックブランチにプッシュするとき、開発者はそれをリベースすべきではありません。[チェリーピック](https://git-scm.com/docs/git-cherry-pick)する際に、改善点やテスト結果を特定しにくくなるためです。コードレビュープロセスの最後に、何かをリバートしやすくするために誰かに squash とリベースを依頼する場合は、このヒントを無視できることもあります。ただし、一般的なガイドラインは次のとおりです: コードはクリーンに、履歴は現実的に。

## 9. 全員が main から始め、main を対象にする

このヒントは、長いブランチを防ぎます。開発者は main をチェックアウトし、機能を作り、マージリクエストを作成し、再び main を対象にします。マージして中間段階を排除する前に、完全なレビューを行うべきです。

## 10. バグはまず main で修正し、次にリリースブランチで修正する

バグを特定した後、誰かが取りうる問題のあるアクションは、リリースされたばかりのバージョンで修正し、main では修正しないことです。これを避けるため、開発者は常に前進して修正すべきです。すなわち、main に変更をプッシュし、それを別のパッチリリースブランチにチェリーピックします。

## 11. コミットメッセージは意図を反映する

開発者は、何をしたかだけでなく、なぜそれをしたかも述べるべきです。さらに有用な戦術は、なぜこの選択肢が他より選ばれたのかを説明し、将来のコントリビューターが開発プロセスを理解できるようにすることです。説明的なコミットメッセージを書くことは、コードレビューと将来の開発に役立ちます。

## 12. CI のベストプラクティス: パイプラインのステージを最適化する

[CI パイプライン](https://about.gitlab.com/topics/ci-cd/cicd-pipeline/)はジョブとステージから成ります: ジョブは特定のステージ内で起こるアクティビティであり、すべてのジョブがパスすると、コードは次のステージに進みます。CI パイプラインを最大限に活用するため、失敗を特定して修正しやすいようにステージを最適化しましょう。

ステージは類似したジョブを整理する簡単な方法ですが、パイプラインには、失敗してもプロジェクトに悪影響を与えずに、より早いステージで安全に実行できるジョブがいくつかあるかもしれません。[CI パイプラインを高速化する](https://about.gitlab.com/blog/2019/07/12/guide-to-ci-cd-pipelines/)ため、これらのジョブをより早いステージで実行することを検討してください。

## 13. CI のベストプラクティス: テスト環境は本番をミラーすべき

継続的インテグレーションでは、すべてのコミットがビルドをトリガーします。これらのビルドはテストを実行し、導入したコード変更によって何かが壊れるかどうかを特定します。[テストピラミッド](https://martinfowler.com/bliki/TestPyramid.html)は、開発者がテストのバランスをどうとるかを考える方法です。[エンドツーエンドテスト](https://docs.gitlab.com/ee/ci/examples/end_to_end_testing_webdriverio/#what-to-test)はほとんどがセーフガードとして使われ、ユニットテストはエラーの特定にもっとも頻繁に使われます。テストで念頭に置くべき重要なことの 1 つは環境です。テスト環境と本番環境が一致していれば、開発者は結果を信頼でき、自信を持ってデプロイできます。

GitLab では、[Review Apps](https://docs.gitlab.com/ee/ci/review_apps/index.html) が新しいコードを本番に近いライブ環境に置き、コード変更を可視化します。この機能は、開発者が変更の影響を評価するのに役立ちます。

継続的インテグレーションは、開発者がより速くデプロイし、より早くフィードバックを得るのに役立ちます。結局のところ、最良の継続的インテグレーションシステムは、あなたが実際に使うものです。自分のニーズに合った[適切な CI](https://about.gitlab.com/topics/ci-cd/choose-continuous-integration-tool/) を見つけ、これらのベストプラクティスを取り入れて、新しい CI ワークフローを最大限に活用しましょう。

## 14. CI のベストプラクティス: 安全に保つ

CI/CD はシフトレフトなので、プロセスの早い段階でセキュリティを統合する良い機会を提供します。

## 15. サードパーティとの統合

* JIRA を使っている場合は、Jira を GitLab と統合し、ビルド／ブランチ／MR についてタイムリーな更新を得てください。
  * [すべての MR コミットに JIRA チケットを追加するルールを追加](https://docs.gitlab.com/ee/user/project/repository/push_rules.html)
* 次のような重要な通知を送るための [Teams-GitLab 統合](https://docs.gitlab.com/ee/user/project/integrations/microsoft_teams.html)
  * 本番／プレ本番のデプロイ失敗

## 16. 保護ブランチ

[保護ブランチ](https://docs.gitlab.com/ee/user/project/repository/branches/protected.html)は、次を制御します:

* どのユーザーがブランチにマージできるか。
* どのユーザーがブランチにプッシュできるか。
* ユーザーがブランチに force push できるか。
* CODEOWNERS ファイルに記載されたファイルへの変更を、ブランチに直接プッシュできるか。
* どのユーザーがブランチの保護を解除できるか。

リポジトリの[デフォルトブランチ](https://docs.gitlab.com/ee/user/project/repository/branches/default.html)はデフォルトで保護されます。

## 17. 環境のブランチ戦略

ステージングブランチに自動的に更新される[環境](https://about.gitlab.com/blog/2023/07/27/gitlab-flow-duo/)を持つのは良い考えかもしれません。ただしこの場合、この環境の名前はブランチ名と異なる場合があります。ステージング環境、プレ本番環境、本番環境があるとします:

![GitLab Flow](/images/customer-success/professional-services-engineering/professional-services-delivery-methodology/gitlab-best-practices/gitlab-flow.png){width="356" height="340"}

この場合、ステージングブランチをステージング環境にデプロイします。プレ本番にデプロイするには、ステージングブランチからプレ本番ブランチへのマージリクエストを作成します。プレ本番ブランチを本番ブランチにマージして本番稼働させます。コミットが下流にのみ流れるこのワークフローにより、すべてがすべての環境でテストされることが保証されます。

## 18. コンプライアンスフレームワーク

コンプライアンスチームにとって、自分たちのコントロールと要件が正しく設定されていること、そしてそれが正しく設定されたままであることに自信を持てることは重要です。この自信を得るために、[コンプライアンスパイプライン](https://docs.gitlab.com/ee/user/group/compliance_frameworks.html)を構成できます。

コンプライアンスオフィサーが、パイプラインの作成とその利用の強制に責任を持ちます。開発者が実行中のパイプラインを変更できないようにできます。これはコンプライアンスオフィサーのみが実行できるタスクであり、コンプライアンスに準拠したコードのみが承認なしにプッシュできることを保証します。

## 19. セキュリティポリシー

GitLab は Security Policies を提供し、セキュリティチームが構成に従ってセキュリティスキャンを実行するよう要求できるようにします。これにより、セキュリティチームは、構成されたスキャンが変更されたり無効化されたりしていないという自信を持てます。

ポリシーには 2 種類あり、[Scan Execution Policies](https://docs.gitlab.com/ee/user/application_security/policies/scan_execution_policies.html) と [Merge Request Approval Policies](https://docs.gitlab.com/ee/user/application_security/policies/merge_request_approval_policies.html) です。

## 20. 監査管理とコンプライアンスダッシュボード

コンプライアンスのもう 1 つの重要な部分は、それが自分のグループ／プロジェクトで実際に行われていることを知ることです。GitLab には、監査を支援する Audit Events と Compliance Reports があります。

Audit Events により、GitLab のオーナーと管理者は、誰が特定のアクションを実行したか、それがいつ起こったかといった重要なイベントを追跡できます。

![監査イベント](/images/customer-success/professional-services-engineering/professional-services-delivery-methodology/gitlab-best-practices/audit-events.png){width="496" height="322"}

Audit Events はグループごと、プロジェクトごとに異なるイベントを記録します。これは[監査イベント](https://docs.gitlab.com/ee/administration/audit_event_reports.html)のドキュメントで確認できます。Audit Events には Security & Compliance \> Audit Events から アクセスできます。例としては次のようなものがあります:

* ユーザーがプロジェクトに追加されたこととその権限
* プロジェクトにアサインされたユーザーの権限変更
* プロジェクトの CI/CD 変数の追加、削除、または保護ステータスの変更
* ユーザーがグループに追加されたこととその権限
* グループ名またはパスの変更

Audit Events は、Audit Event Streaming を使って HTTP エンドポイントに送ることもできます。Audit Event Streaming の実装方法は、この[動画](https://youtu.be/zHwVF9-i7e4?t=52)で紹介しています。

Compliance Report は、グループのマージリクエストアクティビティを見る機能を提供します。グループ内のすべてのプロジェクトについてハイレベルなビューを提供します。

![コンプライアンスレポート](/images/customer-success/professional-services-engineering/professional-services-delivery-methodology/gitlab-best-practices/compliance-report.png){width="524" height="339"}

このレポートは次のために使えます:

* 各プロジェクトの最新のマージリクエストの概要を得る
* マージリクエストが承認されたか、誰によって承認されたかを見る
* マージリクエストの作成者を見る
* 各マージリクエストの最新の CI/CD パイプライン結果を見る

Compliance Report には、トップレベルグループで Security & Compliance \> Compliance Report から アクセスできます。

## 21. 正しいユーザー権限とロールの実装

正しい[ユーザー権限とロール](https://docs.gitlab.com/ee/user/permissions.html)の実装は、GitLab における DevOps ライフサイクル全体にわたって、以下のポジティブな効果をもたらします。

* 開発者に対する制限
  * Security Policies の変更のような重大な決定をすること
  * Issue や MR を削除すること
  * MR を自己承認すること、または MR の承認ルールを管理すること
  * プロジェクトへのチームメンバーの追加／管理
  * Webhook の構成
  * プロジェクト設定の編集
  * コンプライアンスフレームワークへのプロジェクトの割り当て／解除
  * Push ルールの管理
  * 保護ブランチのオン／オフ。
* リスク: ユーザーが上記のアクティビティを実行するために利用され、それが GitLab のベストプラクティスに反する可能性があります。
</content>
