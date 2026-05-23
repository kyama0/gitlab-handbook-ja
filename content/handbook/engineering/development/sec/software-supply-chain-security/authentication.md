---
title: "Authentication グループ"
upstream_path: /handbook/engineering/development/sec/software-supply-chain-security/authentication/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-22T14:47:44+02:00"
---

### SSCS:Authentication{#welcome}

#### ミッション

私たちのミッションは、GitLab システム管理者が GitLab 体験において望ましいセキュリティとアクセシビリティのバランスを作り出すために必要なツールキットを提供し、彼らに力を与えることです。Authentication は、新しい顧客が真新しい GitLab インスタンスを設定する際に持つ第一印象であり、私たちはそれをできるだけシームレスにすることを目指しています: 初めてのログインの瞬間から、ユーザーのオンボーディング、そしてインスタンスの基本的なセキュリティルールを安全で柔軟、かつスケーラブルな方法で管理することまで。

#### FY26 のトップ優先事項

私たちの詳細な優先事項リストは[direction ページ](https://about.gitlab.com/direction/software_supply_chain_security/authentication/#priorities)にありますが、高レベルでは以下に焦点を当てます:

1. Auth の再設計
2. Cells の準備
3. Service accounts の UI とデフォルトのマシン ID 化
4. パスワードレス認証
5. flakey テスト、古い FF、S3 バグ、サポート/CSM の質問の手動対応の削減。

#### 私たちが GitLab のために推進している顧客の成果

上記のロードマップ項目の結果として、私たちは顧客のために以下の成果を推進することを目指しています:

- Cells の作業を支援することで、顧客は GitLab.com での信頼性の向上と障害の区画化を体験できるはずです。
- Service accounts を拡張することで、自動化のユースケースにおける認証情報セットアップ周りの人手による接点が減り、GitLab 使用時の顧客のセキュリティ態勢と効率が強化されます。同時に、新しい Service account の UI により、こうした高権限アカウントを簡単にセットアップ、管理、失効でき、より良い透明性と監査可能性を提供します。トークン管理の強化と組み合わせることで、顧客はアクセストークン関連のリスクを自信を持って管理、強制、軽減できるようになります。
- 追加の Enterprise user 管理コントロールにより、組織のワークロードが削減され、セキュリティポリシー管理が改善される一方、Credential Inventory の SaaS への移行により、すべての管理者が使用中の認証情報に関するより良い可視性と制御を得られます。
- SCIM グループ同期のサポートを拡張することで、顧客向けのユーザープロビジョニングのセットアップを改善・統一し、ユーザープロビジョニングとアクセス管理のために SAML と SCIM の両方に頼る必要がないようにすることを目指しています。

#### OKR のリスト

私たちの OKR は以下に焦点を当てています:

- [サポートとヘルプリクエストの体験の改善](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/5858)
- [flaky または遅いテストの数の削減](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/5853)
- [Authentication チームメンバーのキャリア成長](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/5643)
- [Cells の採用と調査スパイクからの学びの共有](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/6280)
- [GCP Integration 周りのロードマップ完了](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/6186)

#### チームが追跡する指標

ロードマップを前進させながら技術的負債を管理し、セキュリティ脆弱性やバグに時間内に対処することを確保するため、チームは以下の指標を追跡します:

- エンジニアリング生産性の指標
  - 変更が反復的に提供されていることを確保するための、チーム全体の MR 率。
  - 3 つすべてで下降トレンドに向かっていることを確保するための、S1、S2、S3 バグとバーンダウン率。現在、未解決の S1 はなく、ごく少数の S2 があります。
  - 脆弱性の締め切り日、特に SLO に達するリスクがあるもの。
  - Authentication API、ワーカー、ウェブワークフローのエラー率。
  - Infradev Issue の SLO。
  - グループの maintainer-ship の状況。
  - bus factor 追跡のための、ドメイン知識領域とそれぞれのカバレッジ。
  - グループに関連するフィーチャーフラグ。
  - グループに帰属する flaky テスト。

- 製品の指標
  - SAML、Identity provider、Group sync などの auth 統合の採用
  - クレームされた Enterprise user

#### 私たちの違いは何か?

Authentication グループは GitLab 製品の中核となる部分です! 多くのグループが単一の領域（リポジトリビューやマージリクエストビューなど）に焦点を当てるのに対し、このグループは多くの領域にわたってはるかに広い影響を持ちます。このため、他のグループ以上に私たちが心に留めているいくつかの重要なトピックがあります:

##### セキュリティ脆弱性の Issue

権限と認証メカニズムのバイパスは、その性質上、よくあるセキュリティの標的です。私たちは新しいセキュリティ脆弱性の Issue を注意深く監視し、その[締め切り日](/handbook/security/engaging-with-security/#due-date-on-security-issues)に基づいてできるだけ早くスケジュールします。セキュリティ Issue の計画には、[（フィルタリングされた）マイルストーン計画 Issue ボード](https://gitlab.com/gitlab-org/gitlab/-/boards/4260654?label_name%5B%5D=sec%3A%3Asscs&label_name%5B%5D=group%3A%3Aauthentication&label_name%5B%5D=bug%3A%3Avulnerability)を使います。すべてのチームメンバーが[セキュリティ開発者ワークフロー](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md#security-releases-critical-non-critical-as-a-developer)に従ってセキュリティ Issue を解決できることを期待しています。

##### コードレビュー

このグループはアプリケーションの[広範囲に影響を及ぼす](/handbook/engineering/development/#reducing-the-impact-of-far-reaching-work)コンポーネントに取り組むため、本番インシデントのリスクを減らすために以下の追加ステップを取ります:

1. チーム全体でより多くの組織的知識を構築するため、私たちのチームのマージリクエストは、最初のレビューのために別の Auth チームメンバーに割り当てるべきです。このレビューは[reviewer](https://docs.gitlab.com/ee/development/code_review.html#the-responsibility-of-the-reviewer)として行うべきです。Auth の承認は、Auth Reviewer の役割に一致する承認としてカウントされます。たとえば、Auth からの Backend Review があれば Backend Review としてカウントされます。承認されると、Auth Reviewer は適切な [maintainer カテゴリー](https://docs.gitlab.com/ee/development/code_review.html#approval-guidelines)の Maintainer にレビューをリクエストすべきです。
1. Auth のマージリクエストには、マージ前に回答が必要なコメント「Should this be behind a feature flag?（これはフィーチャーフラグの背後にあるべきか?）」が含まれます。これはエンジニアにフィーチャーフラグの使用を思い出させる取り組みであると同時に、変更がフィーチャーフラグの背後にある必要がない理由の根拠を問うものでもあります。
1. Auth 関連のマージリクエストは [Auth Engineer](https://gitlab.com/groups/gitlab-org/software-supply-chain-security/authentication/approvers/-/group_members?with_inherited_permissions=exclude) によるレビューを必要とします。これは GitLab の [CODEOWNERS](https://docs.gitlab.com/ee/user/project/codeowners/) 機能を使ってガードされています。

##### トークン関連機能または破壊的なデータ更新のロールアウトと検証

トークン（PAT、PrAT、GrAT）と、それに関連するボットアカウントやメンバーシップの重要な性質のため、慎重なロールアウトプロセスに従う必要があります。これは、データベース内の大規模なデータセットを更新する機能変更にも及びます。機能完了の一環として、DRI エンジニアはロールアウトプランを作成し、ドメインに精通した少なくとも 2 名の他のエンジニアにピアレビューしてもらわなければなりません。

ロールアウトプランは、変更のリスクを低減するために以下のメカニズムをいくつでも使用できます:

1. グループまたはアクターのセットで機能をテストするために設定できるフィーチャーフラグの使用。それが不可能な場合は、検証されてより大きなセットで実行できるようになるまで、狭いバッチのユーザーに対してワーカーを実行することを検討します。
1. データベースの変更については、前後で期待されるレコード変更の数、最終更新日、関連レコードを評価し、特定の関係が実装設計から見落とされていないかを確認します。
1. 変更は、期待される機能を検証するために、staging や staging-ref などの下位環境で有効にすべきです。可能な限り、これらの下位環境で GitLab.com のデータ構造を複製しようと試みます。
1. quality チームや delivery チームのような内部グループの使用。これらは本番システムですが、依然として内部です。これは本番レベルで機能をテストし、理想的には負の影響なしに、ユーザーに先立つユーザーテストの層を提供します。
1. 監査イベントとログデータの追加。予期しない変更があった場合にトレーサビリティを提供できる操作の証跡を残します。

maintainer レビューとテストカバレッジは機能完了の基礎的な要件ですが、ロールアウトプランは未知の未知（unknown-unknowns）に備えること、つまり機能が実装時に信じられていたとおりに動作しない場合に特定、防止、軽減するためのメカニズムに焦点を当てる必要があることを考慮することが重要です。

最後に、認証の変更が GitLab へのアクセスと使用の能力に直接影響するため、ほぼすべての状況において、マイルストーンの日程を守るために急ぐよりも、ロールアウトを遅くする方が良いです。顧客を第一に置くという私たちの価値観に基づき、利用可能なすべてのツールを活用して、段階的に機能をテストしロールアウトします。疑わしい場合は、私たちの[優先順位付けフレームワーク](/handbook/product/product-processes/#prioritization-framework)を参照し、ここに適用してください。セキュリティとデータ損失の防止を主要な優先事項とします。

### 私たちの働き方

- 私たちの [GitLab バリュー](/handbook/values/)に従います。
- 透明性を持って: ほぼすべてが公開されており、可能な限りミーティングを録画/ライブストリームします。
- 私たちは取り組みたいことに取り組む機会を得ます。
- 誰もが貢献できる、サイロはありません。
  - 目標は、製品がエンジニアリングとデザインに、最初から方向性と Issue の定義に関わる機会を与えることです。
- 私たちはグループのスタンドアップチャンネルで、任意の非同期デイリースタンドアップを行います:
  - SSCS:Authentication [#g_sscs_authentication_daily](https://gitlab.slack.com/archives/C01311Z0LDD)

#### 私たちの counterpart とともに

stable counterpart と必要なだけ緊密に協働することが奨励されています。私たちは、リリースキックオフの前と、コードレビューや Issue の懸念時に必要に応じて、quality engineering と application security の counterpart を含めます。

Quality engineering は Quad Planning Process を介して私たちのワークフローに含まれ、リリース計画中のバグの優先順位付けを担当します。彼らはまた、新しい[エンドツーエンドテスト](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/)の追加に関しては DRI ですが、誰もが貢献できます。counterpart に関わるべき場合の例は以下のとおりです:

- [MR が既存のエンドツーエンドテストに flakiness を導入するかどうかについて Quality の意見を求める](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/92333#note_1033648348)
- [テストを修正する最善の方法を決めるのに助けが必要](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/93467#note_1042495993)
- [適切にテストするためのローカル環境のセットアップに関するガイダンス](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/56923#note_541368575)

Application Security は私たちのセキュリティ Issue ワークフローに関与し、認識すべき懸念や潜在的なリスクを記録する必要がある場合は、他の機能、バグ、メンテナンスの Issue がスケジュールされる前に参加すべきです。counterpart に関わる例は以下のとおりです:

- [何かを機密に保つべきかどうかを確認したい場合](https://gitlab.com/gitlab-org/gitlab/-/issues/460714#note_2026742446)
- [何かが脆弱性と見なされるかどうかを確認する](https://gitlab.com/gitlab-org/gitlab/-/issues/364526#note_1041178738)
- [セキュリティへの影響があるかどうかを確認するために機能提案で協働する](https://gitlab.com/gitlab-org/gitlab/-/issues/227841#note_1025940760)

#### サポート優先リクエスト

顧客とエンジニアリングチームの間の主要なインターフェイスとして、サポートチームは、顧客にとっての摩擦やサポートチームによる手動介入の必要性を減らすのに役立つ製品やプロセスの改善についての知見を持っています。このような機能や強化のリクエストには `Support Priority` ラベルが付けられ、マイルストーン計画中に、それぞれのマイルストーンのグループの計画 Issue で、サポートチームの counterpart によって表面化されます。少なくとも年に 1 回、年間ロードマップを計画する際に、これらは顧客とサポートへの影響と照らし合わされます。その後、これらは各マイルストーンの利用可能な capacity に基づいてグループによって優先順位付けされます。

#### 自分自身を情報通に保つ

- 関心のある主要なチャンネルは `#engineering-fyi`、`#team-member-updates`、`#g_sscs_authentication`、`#sec_section`、`#ceo`、`#cto` です
- 私たちは、会社やチームのアップデートについてチームメンバーに知らせる、重要なリンクを共有する、またはチームの availability について知らせるために、週次 Issue を作成します。Issue の作成は Engineering Manager の責任であり、[SSCS/Auth リポジトリ](https://gitlab.com/gitlab-org/software-supply-chain-security/authentication/discussion)にある Issue テンプレートを使用できます。すべての週次アップデートは、プロジェクトの Issue リストの[週次アップデートラベルでフィルタリングして](https://gitlab.com/gitlab-org/software-supply-chain-security/authentication/discussion/-/issues/?sort=updated_desc&state=closed&label_name%5B%5D=weekly%20update&first_page_size=20)見つけられます。

#### 不在の計画

PTO と休憩は、GitLab PTO ポリシー https://handbook.gitlab.com/handbook/people-group/time-off-and-absence/time-off-types/ に従って、1 年を通じて奨励されています。長期の休暇リクエストのカバレッジ Issue を作成する際に特筆すべきは、EM と協力してカバレッジの詳細を十分に早く（1 マイルストーン以上前に）特定し、別のチームメンバーから作業を続けるためのカバレッジを提供する capacity を確保できるようにするか、進行中の MR を一時停止して復帰時に引き継ぐのが安全であるかを検討してください。

理想的には、PTO がコミットされたタイムラインを変えないように作業を計画しています（タイムラインはすでに人々の不在を見込んでいます）。これにより、複数の DRI がいて簡単に作業を続けられるタスクでない限り、作業は単に一時停止され、復帰時に元の DRI によって続けられます。

#### MR レビューリクエスト

CODEOWNER ファイルには、認証関連の挙動に影響を与える可能性のある共通のコード領域が含まれており、開発中に `group::authentication` レビューをリクエストするために使用されます。リクエストのソースは、グループ内外のチームメンバーから来る認証機能に直接関連する場合があります。この場合、私たちは機能ドメインを所有しているため、`backend`、`frontend` レビューを総合的に完了すべきです。

しかし、レビューリクエストが主にチーム外の非認証関連の開発に関するものでありながら、認証関連の機能との重複のためにレビューが要求される場合がしばしばあります。そのような場合、私たちは認証固有のファイルへの変更のみをレビューし、レビューが認証固有の部分のみであること、そして担当者はその後別途 `backend` または `frontend` の maintainer レビューをリクエストすべきであることを、（メンションして）コメントで担当者に示します。`database` のレビュアー向けのレビューにも同様の手法が用いられます。

- 認証機能に取り組む際、私たちは複数の DRI を持つことが多いです。それは、そのピアからより速いレビューを得るための意図的な選択であり、レビューのためにピアを活用することが奨励されています。
- 同様に、認証機能に取り組む際、チームはレビュアーの availability を確認した後、認証チーム内部でレビューをリクエストできます。彼らはドメインにより精通しているため、これによりレビュー SLA が速くなるはずです。そのような場合、レビュアーは、コンテキストのセットアップや把握により時間がかかる可能性が高い非認証の変更よりも、それらのリクエストを優先するよう要請されます。
- いつものように、特に時間に敏感でない変更については、ルーレットを活用できます。すべての認証チームメンバーがすべてのドメインに精通しているわけではなく、そのような場合、彼らはリクエストを別の認証チームメンバーまたはルーレットにリダイレクトすることがあります。レビューのためのドメインエキスパートの特定に助けが必要な場合は、DRI Issue を見るか、チーム Slack で尋ねるか、EM に連絡してください。

レビュアーにとっては、以下のようになります:

| レビュー | 優先順位 | 最初のレビューの SLA |
| ------ | ------ | ------ |
| ~group::authentication からのレビュー | 1 | 24 時間 |
| ドメインエキスパートとしての他チームからのレビュー | 2 | 48 時間 |
| その他の BE レビュー | 3 | 48 時間 |

#### 計画

私たちは [Product Development Timeline](/handbook/engineering/workflow/#product-development-timeline)に従って月次サイクルで計画します。私たちの典型的な計画サイクルには以下が含まれます:

- 毎月の初めに、Product は今後のリリースのために[計画 Issue](https://gitlab.com/gitlab-org/software-supply-chain-security/authentication/discussion/-/issues/?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aauthentication&label_name%5B%5D=Planning%20Issue&first_page_size=20)を作成します。
  - この Issue には、リリースの一般的なテーマを含めるべきです。また、quad が優先順位付けされた機能、バグ、メンテナンスのリストを記入するためのプレースホルダーも含めるべきです。
  - 見積もりのない Issue は、一度に重み付けする必要がないよう、月を通じてエンジニアリングによって調査されるべきです。マイルストーンの優先順位付けされた機能リストが決まると、エンジニアリングはリスト上の重みのない Issue に重みを付けます。
- 月の最初の 12 日以内に、私たちは Issue を見積もります。また、バグ、メンテナンスタスク、新機能を含め、チームが今後のマイルストーンで対処すべきと感じる重要な Issue を特定します。このアプローチは、私たち全員が将来のマイルストーンで優先順位付けすべきと合意する重要な Issue のリストを構築するのに役立ちます。
- 12 日目までに、次のリリースのために提案されたすべての計画済み Issue はエンジニアリングによって見積もられ、`~"workflow::ready for development"` に入れられるべきです。
  - EM は、スリップする可能性のある Issue を追加すべきです。確実にスリップする Issue は、事前に今後のリリースに自動的に再スケジュールされるべきです。
  - 見積もりの後、Product は見積もりに基づいて提案されたスコープに必要な調整を行うべきです。この段階で、チームが提供をコミットするすべての Issue には、Engineering Manager によって `~Deliverable` ラベルが適用されるべきです。完了の可能性を高めるために最初に取り組むべき `~"bug::vulnerability"` などの重要な項目は、[このような](https://gitlab.com/gitlab-org/gitlab/-/boards/4374016)ワークフローダッシュボードの `~Pick-first` 列で見つけられます。

一部の項目は特定のマイルストーンにマークされているかもしれませんが、`~Deliverable` ラベルがありません。これは、それらがマイルストーンにコミットされておらず、backlog に移動するか将来のリリースのために再検討すべきであることを意味します。Product Manager がこのプロセスを促進します。

#### 見積もりプロセス

Issue の作業を開始できる前に、予備調査の後にまずそれを見積もるべきです。特定の Issue の作業範囲が複数の分野（docs、design、frontend、backend など）に触れ、それらにわたって重大な複雑さを伴う場合は、各分野ごとに別々の Issue を作成することを検討してください（[例](https://gitlab.com/gitlab-org/gitlab/-/issues/9288)を参照）。

PM が次のリリースのための[計画 Issue](https://gitlab.com/groups/gitlab-org/software-supply-chain-security/authentication/-/issues/?sort=popularity&state=opened&label_name%5B%5D=Planning%20Issue&first_page_size=20)を作成した後、quad は検討すべき優先順位付けされた Issue のリストを集めます。その後、EM は見積もりが必要な Issue のチェックリストを含む「breakdown」Issue を作成します（[例](https://gitlab.com/gitlab-org/software-supply-chain-security/authentication/discussion/-/issues/45)）。グループのすべてのエンジニアがその Issue に割り当てられ、リストの重み付けまたは分解に参加すべきです。

開発作業を見積もる際は、Issue に適切な重みを追加してください:

| 重み | 説明（エンジニアリング） |
| ------ | ------ |
| 1 | 可能な限り最も単純な変更。副作用がないと確信できる。 |
| 2 | 単純な変更（最小限のコード変更）で、すべての要件を理解している。 |
| 3 | 単純な変更だが、コードのフットプリントが大きい（例: 多くの異なるファイル、または影響を受けるテスト）。要件は明確である。 |
| 5 | コードベースの複数の領域に影響を与える、より複雑な変更で、いくらかのリファクタリングも伴うかもしれない。要件は理解されているが、途中でいくつかのギャップが生じる可能性が高いと感じる。私たちはこの Issue をより小さな部分に分解することに挑戦すべきである。 |
| 8 | コードベースの多くに関わるか、要件を決定するために他者からの多くのインプットを必要とする複雑な変更。これらの Issue は、`~"workflow::ready for development"` になる前にさらなる調査や発見を必要とすることが多く、複数のより小さな Issue から恩恵を受ける可能性が高い。 |

私たちは 8 を超える見積もりは提供しません。Issue がそれより大きい場合は、Issue を分割するかスコープを縮小します。

Issue の重みが 5 以下の場合、見積もりを追加するエンジニアは `~"workflow::ready for development"` ラベルもそれに付けるべきです。

Issue の重みが 5 を超える場合（または 5 だが複数の Issue に分割される可能性があると思われる場合）、エンジニアはそれをどう分割するかを提案します。エンジニアが分割について明確であれば、率先して自分で Issue を分割し、子 Issue に見積もりを付け、親 Issue にコメントを残すべきです。複数の Issue になる場合は、エピックの作成を検討すべきです。

エンジニアが見積もりを終えたら、別のチームメンバーに重みのレビューを依頼すべきです。これにより、Issue の重要な側面を見逃しにくくなります。最初のエンジニアが自信を持っている場合（例: 問題に深い専門知識がある、または Issue が自明である場合）、このステップをスキップできます。

##### 見積もりの目的

私たちの見積もりの目的は、以下を確認することです

- Issue の目標を明確に理解している
- 解決策がどうなり得るかを理解しているが、必ずしもすべての実装の詳細ではない
- ブロッカーが存在するかどうかを評価する

私たちは、見積もり中に実装の詳細が精査されること、すべてのブロッカーが捉えられること、または提案された解決策が正しいものであると証明されることを期待していません。これらはすべて開発中に起こります。開発中に、私たちは時に Issue を再形成したり、解決策を変更したり、さらには延期したりします。私たちはそれを行うことを誇りに思っています。

#### 見積もりの考慮事項

上記を念頭に置きつつ、見積もりの際に考慮すべきいくつかの領域は以下のとおりです:

- この作業をより小さなタスクに分解する必要があるか? その調査/分解のためのスパイクの追加を含む。
- ユニット、機能、QA テストへの影響。一見小さなコードの修正が、テストの多くの変更につながることがある。
- 合意が必要なフロントエンドとバックエンドの間の隠れた相互依存はあるか?
- ブラウザ、Redis、データベースなどでのデータ永続性の要件はあるか?
- この機能/バグ修正はどのようにデプロイされ、ロールアウトの管理に複雑さがあるか?
- この作業はチーム横断的なコラボレーションを必要とするか? 例: セキュリティ

#### リリース中

エンジニアは、[現在のリリース](https://gitlab.com/gitlab-org/gitlab/-/boards/4406395?label_name[]=group%3A%3Aauthentication&label_name[]=Deliverable&milestone_title=Started)と ~Deliverable ラベルに基づいて Issue を自分自身に割り当てるべきです。私たちは Issue に以下のワークフローラベルのサイクルを使います:

1. `~"workflow::ready for development"` - 作業を開始する準備ができているが、まだ開始していない
1. `~"workflow::in dev"` - 私たちは Issue を見ており、積極的に調査しているか、開発を開始したか、ドラフトのマージリクエストを開いている
1. `~"workflow::in review"` - マージリクエストが提出され、レビューがリクエストされた
1. `~"workflow::verification"` - 作業がマージされ、検証が必要
1. `~"workflow::complete"` - 検証担当者によって作業が検証された。検証者が Issue をクローズしラベルを適用する
1. `~"workflow::awaiting security release"` - （セキュリティ MR のみ）作業は完了しており、[backport](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineers.md#backports)を保留中

Issue が見積もられ重みが付けられる前に、Issue の開発を開始すべきではありません。

`~"workflow::verification"` または `~"workflow::awaiting security release"` ラベルの付いた Issue は、リリース計画の目的上、dev 作業が完了しているため、クローズされた Issue と同じです。

1 週間を超える作業項目や高優先度の成果物（重大な infradev Issue やバグなど）については、その作業の担当者は、取り組んでいる Issue 内のタスクの進捗について簡潔な週次アップデートを提供することを目指します。これは、最近達成されたことと次のステップを強調する 2 〜 3 行であることを意図しています。私たちがこれを行うのは、進捗を counterpart と透明に共有するためだけでなく、ドメイン知識を共有し、作業開始後に判明した場合に実装の詳細を軌道修正するためです。

##### ラベルとその使い方

私たちは Issue やマージリクエストに適用できる[多くのラベル](https://docs.gitlab.com/ee/development/labels/index.html)を持っています。上記の Issue ワークフローラベルに加えて、Issue とマージリクエストに適用する最小限の基本ラベルは以下のとおりです:

- Type（`type::feature`、`type::bug`、または `type::maintenance`）
- 領域を所有するステージ（`devops::software supply chain security`）
- 領域を所有するグループ（`group::authentication`）
- 専門分野（`frontend`、`backend`、`database`、`documentation`）
- Issue が application security に関連する場合は `security`、この作業が[破壊的変更](https://docs.gitlab.com/ee/update/terminology.html#breaking-change)と見なされる場合は `breaking change`

#### スケジュールされていない Issue への取り組み

上記の capacity 計画（EM）と見積もり（IC）プロセスの組み合わせにより、エンジニアは ~"Stuff that should just work" や、その他興味のあるトピックに取り組む空き時間を持てるはずです。スケジュールされていない Issue が本当に優先順位付けされるべき場合は、計画 Issue で提起するか、マネージャーに capacity をさらに減らすよう依頼してください。

### リリースのための優先順位付けの方法

私たちは優先順位付けフレームワークに整合した[チーム横断的な優先順位付け](/handbook/product/product-processes/cross-functional-prioritization/)を行います。Engineering Manager が `type::maintenance` の Issue を、Product Manager が `type::feature` の Issue を、software engineer in test が `type::bug` の Issue を優先順位付けします。そこから、[チーム横断的な Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/4453752?label_name[]=group%3A%3Aauthentication)を使って、リリースのために計画するトップ Issue の比率を選択できます。**16.5 以降、私たちの目標比率はリリースごとに機能 60%、バグ 20%、メンテナンス 20% を計画することです**。セキュリティ Issue はこれらの比率にはカウントされず、代わりに総 capacity から差し引かれます。

### ロードマップ計画と T シャツサイジング

会計年度の初めに、製品とエンジニアリングの counterpart が、私たちが焦点を当てたい領域について協働します。これにより、各マイルストーンに先立って priorities.yml に追加される Issue を準備し、年間でオーバーコミットしていないかを測定し、今後の年の提供目標が何かを透明に共有できます。この演習の一環として、エンジニアリングは計画を支援するために高レベルの T シャツサイジングも実施します。サイジングは高レベルの見積もりであり、マイルストーンの見積もりと同様に、期待される複雑さに基づいており、作業を完了するのに実際にかかる時間ではないことを強調することが重要です。使用されるスケールの例は以下のとおりです:

マイルストーンごとに完了した平均ストーリーポイント: 48w。これにはバグ、機能、メンテナンス、あらゆるセキュリティ脆弱性作業が含まれます。

T シャツサイジングのスケール:

- Small → < 5w
- Medium → < 8w
- Large → < 16 w
- X-large → 32 w

その後、ロードマップ項目には `Small`、`Medium` ラベルと優先順位がマークされ、より高い優先順位の作業がスケジュールされ適切にリソース配分されることを確保します。

#### 月次チーム横断ダッシュボードレビュー

私たちはすべての counterpart に割り当てられる月次 Issue を作成します。この Issue は Engineering Manager が手動で作成する必要がありますが、[Authentication discussion リポジトリ](https://gitlab.com/gitlab-org/software-supply-chain-security/authentication/discussion)に Issue テンプレートがあります。

このプロセスの詳細は[ハンドブックページ](/handbook/product/product-processes/)で読めます。

---

上記のように計画しようとしていますが、予期しない高優先度のセキュリティ、infradev、エスカレーションの Issue により、理想的な比率には常にリスクがあることを理解しています。

### ミーティング

私たちは非同期コミュニケーションへのバイアスを持っていますが、同期ミーティングは必要であり、私たちの[コミュニケーションガイドライン](/handbook/communication/#video-calls)に従うべきです。Authentication の定例ミーティングのいくつかは以下のとおりです:

| 頻度 | ミーティング      | DRI    | 参加者 |トピック                                                              |
| ----- | ----- | ----- | ----- | ----- |
| 週次    | [Group-level meeting](https://docs.google.com/document/d/1xbwj81Rv2RfomqoQxbMGTxWsxoYczYfIbh_q74meot8/edit)（社内のみ）       | Product Manager | PM/EM/UX、任意でエンジニア | 現在または今後のロードマップのトピックを議論し、注目すべきエピック/Issue を取り上げ、優先イニシアチブの現状を提供する |

一回限りのトピック固有のミーティングについては、常にこれらのコールを録画して共有する（または[公開されているドキュメント](https://docs.google.com/document/d/1xbwj81Rv2RfomqoQxbMGTxWsxoYczYfIbh_q74meot8/edit)にメモを取る）ことを検討してください。

アジェンダドキュメントと録画は、信頼できる唯一の情報源として[共有 Google ドライブ](https://drive.google.com/drive/u/0/folders/0ALpc3GhrDkKwUk9PVA)（社内のみ）に置けます。

すべてのミーティングと 1-1 には、事前にアジェンダが準備されているべきです。そうでない場合、ミーティングに出席する義務はありません。ミーティングの開始時刻までにアジェンダがなければ、ミーティングをキャンセルすべきかを確認してください。

### グループメンバー

[Authentication グループ](https://gitlab.com/groups/gitlab-org/software-supply-chain-security/authentication/)の一員である Auth グループメンバーは、GitLab で `@gitlab-org/software-supply-chain-security/authentication` で `@` メンションできます。

以下の人々がグループの常任メンバーです:

{{< engineering/stable-counterparts role="SSCS:Authentication" >}}

### ダッシュボード

- [Error Budget](https://dashboards.gitlab.net/d/stage-groups-detail-authentication/749586f0-be5b-5af4-88ce-3e3bac20b45e?orgId=1&from=now-2d&to=now)

### リンクとリソース {#links}

{{% include "includes/engineering/software_supply_chain_security-shared-links.md" %}}

- [Milestone retrospectives](https://gitlab.com/gl-retrospectives/sscs/authentication/-/issues/53)
- 私たちの Slack チャンネル
  - SSCS:Authentication [#g_sscs_authentication](https://gitlab.slack.com/archives/CLM1D8QR0)
  - Daily standups [#g_sscs_authentication_daily](https://gitlab.slack.com/archives/C01311Z0LDD)
- Issue ボード
  - [Milestone board](https://gitlab.com/gitlab-org/gitlab/-/boards/4374016?not%5Blabel_name%5D%5B%5D=Quality&label_name%5B%5D=group%3A%3Aauthentication&label_name%5B%5D=Deliverable&milestone_title=17.4)
  - [Task assignment board](https://gitlab.com/groups/gitlab-org/-/boards/4490634?label_name[]=Deliverable&label_name[]=group%3A%3Aauthentication&milestone_title=17.4)
