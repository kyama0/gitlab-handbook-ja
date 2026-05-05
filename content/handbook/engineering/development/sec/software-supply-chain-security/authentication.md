---
title: "Authentication グループ"
upstream_path: /handbook/engineering/development/sec/software-supply-chain-security/authentication/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T08:31:27Z"
translator: claude
stale: false
---

### SSCS:Authentication{#welcome}

#### ミッション

私たちのミッションは、GitLab システム管理者が GitLab 体験のセキュリティとアクセシビリティの望ましいバランスを実現するために必要なツールキットを提供することです。認証は、新しい顧客がきらびやかな新しい GitLab インスタンスを設定する際に最初に接触するものであり、可能な限りシームレスにすることを目指しています。最初のログインの瞬間から、ユーザーのオンボーディング、インスタンスの基本的なセキュリティルールの管理まで、安全で柔軟かつスケーラブルな方法で実現します。

#### FY26 のトップ優先事項

詳細な優先事項リストは [方向性ページ](https://about.gitlab.com/direction/software_supply_chain_security/authentication/#priorities) でご覧いただけますが、より高いレベルでは以下に注力します:

1. 認証の再設計
2. Cells 対応
3. サービスアカウント UI とデフォルトマシン ID
4. パスワードレス認証
5. フラキーテスト、古い FF、S3 バグ、サポート/CSM からの手動対応の削減

#### GitLab のために推進する顧客成果

上記のロードマップアイテムの結果として、私たちは顧客のために以下の成果を推進することを目指しています:

- Cells の作業をサポートすることで、顧客は GitLab.com での障害の信頼性と局所化の向上を体験できるようになります。
- サービスアカウントの拡張により、自動化ユースケースのための認証情報設定における人間の接触点が減り、顧客の GitLab 使用時のセキュリティ姿勢と効率性が向上します。同時に、新しいサービスアカウント UI により、これらのより高い権限のアカウントを簡単に設定、管理、失効させることができ、より良い透明性と監査可能性を提供します。トークン管理の強化と組み合わせることで、顧客はアクセストークン関連のリスクを自信を持って管理、施行、軽減できます。
- 追加のエンタープライズユーザー管理コントロールにより、組織の作業負荷が削減され、セキュリティポリシー管理が改善されます。また、SaaS への認証情報インベントリの移行により、すべての管理者が使用中の認証情報の可視性と制御が向上します。
- SCIM グループ同期サポートを拡張することで、ユーザープロビジョニングとアクセス管理のために SAML と SCIM の両方に依存する必要がなくなり、顧客のユーザープロビジョニング設定を改善・統一することを目指しています。

#### OKR リスト

私たちの OKR は以下に注力しています:

- [サポートとヘルプリクエスト体験の改善](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/5858)
- [フラキーまたは遅いテストの数の削減](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/5853)
- [Authentication チームメンバーのキャリア成長](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/5643)
- [Cells の採用とインベスティゲーションスパイクからの教訓の共有](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/6280)
- [GCP インテグレーション周辺のロードマップ完成](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/6186)

#### チームが追跡する指標

ロードマップの進捗を確保しながら技術的負債を管理し、セキュリティの脆弱性やバグに適時対処するために、チームは以下の指標を追跡します:

- エンジニアリング生産性指標
  - 変更がイテレーティブに提供されているかを確認するためのチーム全体の MR レート
  - 3つすべてで下降傾向に向かっているかを確認するための S1、S2、S3 バグとバーンダウンレート。現在 S1 はオープンなく、S2 はごく少数。
  - SLO のリスクがある脆弱性の期限、特に期限超過リスクのあるもの
  - Authentication API、ワーカー、ウェブワークフローのエラーレート
  - Infradev Issue の SLO
  - グループのメンテナーシップ状況
  - バスファクター追跡のための各ドメイン知識領域とカバレッジ
  - グループに関連するフィーチャーフラグ
  - グループに起因するフラキーテスト

- 製品指標
  - SAML、アイデンティティプロバイダー、グループ同期などの認証インテグレーションの採用
  - 請求されたエンタープライズユーザー

#### 私たちの違いは何ですか？

Authentication グループは GitLab 製品の中心的な存在です！多くのグループがリポジトリビューやマージリクエストビューなど単一のエリアに注力する一方で、このグループは多くのエリアにはるかに広い影響を持ちます。このため、他のグループよりも念頭に置くいくつかの重要なトピックがあります:

##### セキュリティ脆弱性 Issue

パーミッションと認証メカニズムの回避は、本質的に一般的なセキュリティターゲットです。私たちは新しいセキュリティ脆弱性 Issue を注意深く見守り、[期限](/handbook/security/engaging-with-security/#due-date-on-security-issues) に基づいてできるだけ早くスケジュールします。セキュリティ Issue のプランニングには、[（フィルタリングされた）マイルストーンプランニング Issue ボード](https://gitlab.com/gitlab-org/gitlab/-/boards/4260654?label_name%5B%5D=sec%3A%3Asscs&label_name%5B%5D=group%3A%3Aauthentication&label_name%5B%5D=bug%3A%3Avulnerability) を使用します。すべてのチームメンバーが [セキュリティデベロッパーワークフロー](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md#security-releases-critical-non-critical-as-a-developer) に従ってセキュリティ Issue を解決できることを期待しています。

##### コードレビュー

このグループは [広範な影響](/handbook/engineering/development/#reducing-the-impact-of-far-reaching-work) を持つアプリケーションのコンポーネントで作業するため、本番インシデントのリスクを軽減するために以下の追加手順を踏みます:

1. チームのマージリクエストは、チーム全体でより多くの組織的知識を構築するために、まず別の Auth チームメンバーにレビューを割り当てます。このレビューは [レビュアー](https://docs.gitlab.com/ee/development/code_review.html#the-responsibility-of-the-reviewer) として行います。Auth の承認は Auth レビュアーのロールに対応する承認としてカウントされます。例えば、Auth からのバックエンドレビューはバックエンドレビューとしてカウントされます。承認後、Auth レビュアーは適切な [メンテナーカテゴリ](https://docs.gitlab.com/ee/development/code_review.html#approval-guidelines) からメンテナーにレビューを依頼します。
1. Auth マージリクエストには、マージ前に回答が必要なコメントが含まれます: 「これはフィーチャーフラグの背後に置くべきですか？」これはフィーチャーフラグの使用を思い出させると同時に、なぜ変更がフィーチャーフラグの背後に置く必要がないかの理由にも挑戦するためです。
1. Auth 関連のマージリクエストには [Auth エンジニア](https://gitlab.com/groups/gitlab-org/software-supply-chain-security/authentication/approvers/-/group_members?with_inherited_permissions=exclude) によるレビューが必要です。これは GitLab の [CODEOWNERS](https://docs.gitlab.com/ee/user/project/codeowners/) フィーチャーを使用して管理されています。

##### トークン関連フィーチャーまたは破壊的なデータ更新のロールアウトと検証

トークン（PAT、PrAT、GrAT）とそれに関連するボットアカウントまたはメンバーシップの重要な性質上、慎重なロールアウトプロセスに従う必要があります。これはデータベース内の大きなデータセットを更新するフィーチャー変更にも拡張されます。フィーチャー完成の一環として、DRI エンジニアはロールアウト計画を作成し、ドメインに詳しい少なくとも2人の他のエンジニアにピアレビューしてもらう必要があります。

ロールアウト計画は、変更のリスクを軽減するために以下のメカニズムを任意の数だけ使用できます:

1. グループまたは特定のアクターセットでフィーチャーをテストするために設定できるフィーチャーフラグの使用。それが不可能な場合は、検証が完了してより大きなセットで実行できるようになるまで、狭いバッチのユーザーでワーカーを実行することを検討します。
1. データベース変更の場合、変更前後の予想されるレコード変更数、最終更新日、関連レコードを評価して、実装設計で特定の関係が見落とされていないかを確認します。
1. 変更はステージングや staging-ref などの低い環境で有効化して、期待される機能を検証します。可能な限り、これらの低い環境で GitLab.com からデータ構造を複製しようとします。
1. 品質チームや提供チームなどの内部グループの使用。これらは本番システムですが、まだ内部です。これにより、フィーチャーを本番レベルでテストできます。理想的にはネガティブな影響がありませんが、ユーザーへの展開前にユーザーテストの層を提供します。
1. 監査イベントとログデータの追加により、予期しない変更の場合にトレーサビリティを提供する操作の証跡を残します。

メンテナーレビューとテストカバレッジはフィーチャー完成の基本的な要件ですが、ロールアウト計画は未知の未知への準備に焦点を当てる必要があります。つまり、フィーチャーが実装時に信じられた通りに機能しない場合に特定、防止、軽減するメカニズムです。

最後に、認証変更が GitLab へのアクセスと使用能力に直接影響するため、ほぼすべての状況でマイルストーン日程を急いで達成するよりもロールアウトが遅い方が良いです。顧客を第一に置くという私たちの価値観に基づいて、利用可能なすべてのツールを使用して段階的な方法でフィーチャーをテストしロールアウトします。疑問がある場合は、[優先順位付けフレームワーク](/handbook/product/product-processes/#prioritization-framework) を参照し、これを適用してください。セキュリティとデータ損失の防止が最優先事項です。

### 私たちの働き方

- [GitLab バリュー](/handbook/values/) に従います。
- 透明に: ほぼすべてが公開されており、可能な限りミーティングを録画/ライブストリームします。
- 取り組みたいことに取り組む機会があります。
- 誰でも貢献できます。サイロはありません。
  - 目標は、製品がエンジニアリングとデザインを最初からの方向性と Issue 定義に関与させる機会を与えることです。
- グループスタンドアップチャンネルでオプションの非同期日次スタンドアップを行います:
  - SSCS:Authentication [#g_sscs_authentication_daily](https://gitlab.slack.com/archives/C01311Z0LDD)

#### カウンターパートとの協力

安定したカウンターパートと必要に応じて密接に協力することを奨励します。リリースキックオフ前と必要に応じてコードレビューや Issue の懸念事項が生じた際に、品質エンジニアリングとアプリケーションセキュリティのカウンターパートを含めます。

品質エンジニアリングは Quad Planning Process を通じてワークフローに含まれており、リリースプランニング中のバグ優先順位付けに責任を持ちます。また、[エンドツーエンドテスト](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/) を追加する際の DRI ですが、誰でも貢献できます。カウンターパートと連携するタイミングの例:

- [MR が既存のエンドツーエンドテストにフラキーネスをもたらすかどうかについて品質の意見を求める](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/92333#note_1033648348)
- [テストを修正するための最善の方法を決定するサポートが必要な場合](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/93467#note_1042495993)
- [適切にテストするためのローカル環境のセットアップに関するガイダンス](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/56923#note_541368575)

アプリケーションセキュリティはセキュリティ Issue ワークフローに関与し、懸念事項や潜在的なリスクを把握する必要がある場合はスケジュールされる前にフィーチャー、バグ、メンテナンス Issue にも参加します。カウンターパートと連携するタイミングの例:

- [何かを機密のままにしておくべきかどうかを確認したい場合](https://gitlab.com/gitlab-org/gitlab/-/issues/460714#note_2026742446)
- [何かが脆弱性とみなされるかどうかを確認する場合](https://gitlab.com/gitlab-org/gitlab/-/issues/364526#note_1041178738)
- [フィーチャー提案に関するコラボレーションでセキュリティ上の影響があるか確認する場合](https://gitlab.com/gitlab-org/gitlab/-/issues/227841#note_1025940760)

#### サポート優先リクエスト

顧客とエンジニアリングチームの主要なインターフェースとして、サポートチームは顧客の摩擦を軽減し、サポートチームによる手動介入の必要性を削減する製品とプロセスの改善に関する洞察を持っています。このようなフィーチャーまたは改善リクエストは `Support Priority` でラベル付けされ、マイルストーンのプランニング中に、グループのそれぞれのマイルストーンのプランニング Issue でサポートチームのカウンターパートから提示されます。年に少なくとも一度、年間ロードマップを計画する際に、これらは顧客とサポートへの影響とも照らし合わせられます。これらは各マイルストーンで利用可能なキャパシティに基づいてグループによって優先順位付けされます。

#### 情報を最新に保つ

- 関心のある主要チャンネル: `#engineering-fyi`、`#team-member-updates`、`#g_sscs_authentication`、`#sec_section`、`#ceo`、`#cto`
- 私たちは、チームメンバーに会社やチームの更新について通知し、重要なリンクを共有し、チームの可用性について知るための週次 Issue を作成します。Issue の作成はエンジニアリングマネージャーの責任であり、[SSCS/Auth リポジトリ](https://gitlab.com/gitlab-org/software-supply-chain-security/authentication/discussion) にある Issue テンプレートを使用できます。すべての週次更新は、[週次更新ラベルでフィルタリングされたプロジェクト Issue リスト](https://gitlab.com/gitlab-org/software-supply-chain-security/authentication/discussion/-/issues/?sort=updated_desc&state=closed&label_name%5B%5D=weekly%20update&first_page_size=20) で確認できます。

#### 休暇の計画

PTO と休憩は GitLab の PTO ポリシー https://handbook.gitlab.com/handbook/people-group/time-off-and-absence/time-off-types/ に従い、年間を通じて奨励されています。長期休暇のカバレッジ Issue を作成する際は、EM と協力して、別のチームメンバーが作業を続けられるキャパシティを確保するために十分に早く（1マイルストーン以上前）カバレッジの詳細を特定するか、または MR を安全に一時停止して復帰後に元の DRI が引き継げる状態にすることを検討してください。

理想的には、PTO がコミットしたタイムラインを変更しないように作業を計画します（タイムラインにはすでに休暇が考慮されています）。これにより、作業は単純に一時停止され、元の DRI が復帰後に続けます。ただし、作業を引き継げる複数の DRI がいるタスクは除きます。

#### MR レビューリクエスト

CODEOWNER ファイルには、認証関連の動作に潜在的に影響する共通コードエリアが含まれており、開発中に `group::authentication` レビューをリクエストするために使用されます。リクエストのソースは、グループ内外のチームメンバーから来る認証フィーチャーに直接関連している場合があります。この場合、私たちはフィーチャードメインを所有しているため、`backend`、`frontend` レビューを総合的に完了させます。

ただし、チーム外の認証関連ではない開発に関するレビューリクエストが認証関連フィーチャーとの重複によって頻繁に発生します。このような場合、私たちは認証固有のファイルの変更のみをレビューし、コメントで担当者にメンション（メンション）して、このレビューが認証固有の部分のみを対象としており、`backend` または `frontend` メンテナーレビューを別途リクエストする必要があることを示します。`database` レビュアーに向けられたレビューにも同様の手法が適用されます。

- 認証フィーチャーに取り組む場合、複数の DRI がいる可能性があります。これはそのピアからより速いレビューを得るための意図的な選択であり、レビューにピアを活用することを奨励します。
- 同様に、認証フィーチャーに取り組む場合、チームはレビュアーの可用性を確認した上で Authentication チーム内でレビューをリクエストできます。これによりドメインにより詳しいため、より速いレビュー SLA が可能になります。このような場合、レビュアーは設定やコンテキストの取得に時間がかかる可能性がある非認証変更よりもそれらのリクエストを優先するよう求められます。
- いつでも、特に時間に敏感でない変更については、ルーレットを活用できます。すべての Authentication チームメンバーがすべてのドメインに詳しいわけではなく、そのような場合は別の Authentication チームメンバーまたはルーレットにリダイレクトする場合があります。レビューのドメインエキスパートを特定するサポートが必要な場合は、DRI Issue を確認するか、チーム Slack で質問するか、EM に連絡してください。

レビュアーの場合、以下のようになります:

| レビュー | 優先順序 | 最初のレビューの SLA |
| ------ | ------ | ------ |
| ~group::authentication からのレビュー | 1 | 24時間 |
| ドメインエキスパートとしての他チームからのレビュー | 2 | 48時間 |
| その他の BE レビュー | 3 | 48時間 |

#### プランニング

私たちは [製品開発タイムライン](/handbook/engineering/workflow/#product-development-timeline) に従って月次サイクルでプランニングします。典型的なプランニングサイクルは以下を含みます:

- 各月の初めに、製品は次のリリースのために [プランニング Issue](https://gitlab.com/gitlab-org/software-supply-chain-security/authentication/discussion/-/issues/?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aauthentication&label_name%5B%5D=Planning%20Issue&first_page_size=20) を作成します。
  - この Issue にはリリースの一般的なテーマを含める必要があります。また、クアッドが優先されたフィーチャー、バグ、メンテナンスリストを入力するプレースホルダーも含める必要があります。
  - 見積もりのない Issue は月を通じてエンジニアリングによって調査され、マイルストーンの優先されたフィーチャーリストが決まったら、リストにウェイトのない Issue にウェイトを付けます。
- 月の最初の12日以内に Issue を見積もります。また、次のマイルストーンで対処すべきバグ、メンテナンスタスク、新フィーチャーを含む、チームが重要と感じる主要な Issue を特定します。このアプローチは、将来のマイルストーンで優先されるべきという全員が同意する重要な Issue のリストを構築するのに役立ちます。
- 12日までに、次のリリースに提案されたすべての計画済み Issue はエンジニアリングによって見積もられ、`~"workflow::ready for development"` に入力されます。
  - EM は滑りそうな Issue を追加します。確実に滑る Issue は、事前に次のリリースに自動的に再スケジュールされます。
  - 見積もり後、製品は見積もりに基づいて提案されたスコープを必要に応じて調整します。この段階で、チームが提供にコミットする Issue にはエンジニアリングマネージャーが `~Deliverable` ラベルを適用します。`~"bug::vulnerability"` などのクリティカルアイテムや、より高い完了可能性のために最初に取り組むべきアイテムは、[ワークフローダッシュボード](https://gitlab.com/gitlab-org/gitlab/-/boards/4374016) などの `~Pick-first` カラムで確認できます。

一部のアイテムは特定のマイルストーンにマークされる場合がありますが、`~Deliverable` ラベルがない場合があります。これはマイルストーンにコミットされておらず、バックログに移動するか将来のリリースのために再検討されるべきことを意味します。プロダクトマネージャーがこのプロセスを促進します。

#### 見積もりプロセス

Issue の作業を開始する前に、予備調査の後で最初に見積もりを行う必要があります。ある Issue の作業スコープが複数のディシプリン（docs、デザイン、フロントエンド、バックエンドなど）に触れ、それらにまたがる重大な複雑さを含む場合は、各ディシプリンに対して別々の Issue を作成することを検討してください（[例](https://gitlab.com/gitlab-org/gitlab/-/issues/9288) 参照）。

PM が次のリリースの [プランニング Issue](https://gitlab.com/groups/gitlab-org/software-supply-chain-security/authentication/-/issues/?sort=popularity&state=opened&label_name%5B%5D=Planning%20Issue&first_page_size=20) を作成した後、クアッドは考慮されるべき Issue の優先リストを収集します。EM はその後、見積もりが必要な Issue のチェックリストを含む「ブレイクダウン」Issue（[例](https://gitlab.com/gitlab-org/software-supply-chain-security/authentication/discussion/-/issues/45)）を作成します。グループのすべてのエンジニアがその Issue に割り当てられ、リストのウェイト付けまたは分解に参加します。

開発作業を見積もる際は、Issue に適切なウェイトを追加してください:

| ウェイト | 説明（エンジニアリング） |
| ------ | ------ |
| 1 | 最もシンプルな変更。副作用はないと確信しています。 |
| 2 | シンプルな変更（最小限のコード変更）で、すべての要件を理解しています。 |
| 3 | シンプルな変更ですが、コードのフットプリントが大きい（例: 多くの異なるファイルやテストが影響を受ける）。要件は明確です。 |
| 5 | コードベースの複数のエリアに影響するより複雑な変更で、リファクタリングも含まれる場合があります。要件は理解されていますが、途中でいくつかのギャップがある可能性があります。この Issue をより小さな部分に分解することに挑戦します。 |
| 8 | コードベースの多くに関与するか、要件を決定するために多くの入力が必要な複雑な変更。これらの Issue は多くの場合、`~"workflow::ready for development"` になる前にさらなる調査や発見が必要であり、複数のより小さな Issue から恩恵を受ける可能性があります。 |

8より大きい見積もりは提供しません。Issue がより大きい場合は、Issue を分割するかスコープを削減します。

Issue のウェイトが5以下の場合、見積もりを追加するエンジニアは Issue に `~"workflow::ready for development"` ラベルも付けます。

Issue のウェイトが5より大きい（または5だが複数の Issue に分割される可能性がある）場合、エンジニアはどのように分割するかを提案します。分割が明確な場合は、積極的に Issue を自分で分割し、子 Issue に見積もりを付けて親 Issue にコメントを残します。複数の Issue になる場合は、エピックの作成を検討します。

エンジニアが見積もりを完了したら、別のチームメンバーにウェイトのレビューを依頼します。これにより Issue の重要な側面を見落とすことが難しくなります。最初のエンジニアが確信している場合（例: 問題に深い専門知識を持っている、または Issue が些細なものである場合）はこのステップをスキップできます。

##### 見積もりの目的

見積もりの目的は、以下を確認することです:

- Issue の目標を明確に理解している
- ソリューションの可能性を理解しているが、必ずしもすべての実装の詳細ではない
- ブロッカーが存在するかどうかを評価する

見積もり中に実装の詳細が精査されたり、すべてのブロッカーが捕捉されたり、提案されたソリューションが正しいことが証明されることは期待していません。これらはすべて開発中に起こります。開発中に Issue を再形成したり、ソリューションを変更したり、延期したりすることがあります。私たちはそれを誇りに思っています。

#### 見積もりの考慮事項

上記を念頭に置いて、見積もり時に考慮すべきエリアは以下のとおりです:

- この作業をより小さなタスクに分解する必要があるか？調査/分解のためのスパイクの追加を含む。
- 単体テスト、フィーチャーテスト、QA テストへの影響。コードの一見小さな修正が多くのテストの変更につながることがある。
- フロントエンドとバックエンドの間に合意が必要な隠れた相互依存関係がありますか？
- データ永続要件はありますか（例: ブラウザ、Redis、データベース）？
- このフィーチャー/バグ修正はどのようにデプロイされ、ロールアウトの管理に複雑さはありますか？
- この作業はチーム間のコラボレーションを必要とします（例: セキュリティ）？

#### リリース中

エンジニアは [現在のリリース](https://gitlab.com/gitlab-org/gitlab/-/boards/4406395?label_name[]=group%3A%3Aauthentication&label_name[]=Deliverable&milestone_title=Started) と ~Deliverable ラベルに基づいて Issue を自分に割り当てます。Issue では以下のワークフローラベルサイクルを使用します:

1. `~"workflow::ready for development"` - 作業は開始可能ですが、まだ開始されていません
1. `~"workflow::in dev"` - Issue を確認しており、積極的に調査中、開発を開始、またはドラフトマージリクエストをオープンしています
1. `~"workflow::in review"` - マージリクエストが提出され、レビューがリクエストされています
1. `~"workflow::verification"` - 作業がマージされ、検証が必要です
1. `~"workflow::complete"` - 検証に割り当てられた人物によって作業が検証されました；検証者は Issue をクローズしてラベルを適用します
1. `~"workflow::awaiting security release"` - （セキュリティ MR のみ）作業は完了し、[バックポート](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineers.md#backports) を保留しています。

Issue の見積もりとウェイトが付与される前に開発を開始してはなりません。

`~"workflow::verification"` または `~"workflow::awaiting security release"` ラベルの付いた Issue は、リリースプランニングの目的では、開発作業が完了しているためクローズされた Issue と同等です。

1週間以上にわたる作業アイテムや高優先度の成果物（クリティカルな infradev Issue やバグなど）については、作業の担当者が Issue 内で作業中のタスクの進捗について週次の簡単な更新を提供することを目指します。これは最近達成されたことと次のステップを強調する2〜3行を意図しています。これはカウンターパートとの透明な進捗共有のためだけでなく、作業が開始された後に実装の詳細に関するドメイン知識を共有し、必要に応じて修正するためでもあります。

##### ラベルとその使い方

Issue やマージリクエストには [多くのラベル](https://docs.gitlab.com/ee/development/labels/index.html) を適用できます。上記の Issue ワークフローラベルに加えて、Issue やマージリクエストに適用する最低限の基本ラベルは以下のとおりです:

- タイプ（`type::feature`、`type::bug`、または `type::maintenance`）
- エリアを所有するステージ（`devops::software supply chain security`）
- エリアを所有するグループ（`group::authentication`）
- 専門（`frontend`、`backend`、`database`、`documentation`）
- Issue がアプリケーションセキュリティに関連する場合は `security`、この作業が [破壊的変更](https://docs.gitlab.com/ee/update/terminology.html#breaking-change) とみなされる場合は `breaking change`

#### スケジュールされていない Issue での作業

上記のキャパシティプランニング（EM）と見積もり（IC）プロセスを組み合わせることで、エンジニアは `~"Stuff that should just work"` や他の興味あるトピックに取り組む自由な時間を持つことができます。スケジュールされていない Issue が本当に優先されるべき場合は、プランニング Issue で提起するか、マネージャーにキャパシティをさらに削減するよう依頼してください。

### リリースの優先順位付け方法

私たちは優先順位付けフレームワークに合わせた [クロスファンクション優先順位付け](/handbook/product/product-processes/cross-functional-prioritization/) を行っています。エンジニアリングマネージャーは `type::maintenance` Issue を優先順位付けし、プロダクトマネージャーは `type::feature` Issue を優先順位付けし、テストのソフトウェアエンジニアは `type::bug` Issue を優先順位付けします。そこから、[クロスファンクション Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/4453752?label_name[]=group%3A%3Aauthentication) を使用して計画するトップ Issue の比率を選択できます。**16.5から、ターゲット比率はリリースごとに60%フィーチャー、20%バグ、20%メンテナンスを計画することです**。セキュリティ Issue はこれらの比率にカウントされませんが、代わりに総キャパシティから差し引かれます。

### ロードマッププランニングと T シャツサイジング

会計年度の開始時に、製品とエンジニアリングのカウンターパートが注力したいエリアについてコラボレーションします。これにより、各マイルストーンより前に priorities.yml に追加される Issue を準備したり、年度に過剰にコミットしているかどうかを評価したり、今後の年の提供目標を透明に共有したりできます。この演習の一環として、エンジニアリングも計画を支援するための高レベルな T シャツサイジングを実施します。サイジングはマイルストーン見積もりと同様に、作業の完了にかかる実際の時間ではなく予想される複雑さに基づく高レベルの見積もりであることを強調することが重要です。使用されるスケールの例:

マイルストーンごとの平均ストーリーポイント完了数: 48w。バグ、フィーチャー、メンテナンス、セキュリティ脆弱性の作業を含みます。

T シャツサイジングスケール:

- Small → < 5w
- Medium → < 8w
- Large → < 16w
- X-large → 32w

ロードマップアイテムには `Small`、`Medium` ラベルと優先度が付けられ、優先度の高い作業がスケジュールされ適切にリソースが配分されます。

#### 月次クロスファンクションダッシュボードレビュー

すべてのカウンターパートに割り当てられた月次 Issue を作成します。Issue はエンジニアリングマネージャーが手動で作成する必要がありますが、[Authentication ディスカッションリポジトリ](https://gitlab.com/gitlab-org/software-supply-chain-security/authentication/discussion) に Issue テンプレートがあります。

このプロセスについては [ハンドブックページ](/handbook/product/product-processes/) で詳しく読むことができます。

---

上記のようにプランニングしようとしていますが、予期しない高優先度のセキュリティ、infradev、エスカレーション Issue により、理想的な比率にリスクが常にあることを理解しています。

### ミーティング

非同期コミュニケーションへのバイアスがありますが、同期ミーティングは必要であり [コミュニケーションガイドライン](/handbook/communication/#video-calls) に従う必要があります。Authentication の定期的なミーティングは以下のとおりです:

| 頻度 | ミーティング | DRI | 参加者 | トピック |
| ----- | ----- | ----- | ----- | ----- |
| 週次 | [グループレベルミーティング](https://docs.google.com/document/d/1xbwj81Rv2RfomqoQxbMGTxWsxoYczYfIbh_q74meot8/edit)（内部のみ） | プロダクトマネージャー | PM/EM/UX/SET、オプションでエンジニア | 現在または今後のロードマップトピックの議論、エピック/Issue を注目のために提起、優先イニシアティブの現在の状況の提供 |

一度限りのトピック固有のミーティングについては、常に通話を録画して共有することを検討してください（または [公開ドキュメント](https://docs.google.com/document/d/1xbwj81Rv2RfomqoQxbMGTxWsxoYczYfIbh_q74meot8/edit) にメモを取ります）。

アジェンダドキュメントと録画は、信頼できる唯一の情報源として [共有 Google ドライブ](https://drive.google.com/drive/u/0/folders/0ALpc3GhrDkKwUk9PVA)（内部のみ）に配置できます。

すべてのミーティングと 1:1 には事前に準備されたアジェンダが必要です。そうでない場合は、ミーティングに参加する義務はありません。ミーティング開始時にアジェンダがない場合は、ミーティングをキャンセルするべきかどうかを確認してください。

### グループメンバー

[Authentication グループ](https://gitlab.com/groups/gitlab-org/software-supply-chain-security/authentication/) の Auth グループメンバーは、GitLab で `@gitlab-org/software-supply-chain-security/authentication` とメンションできます。

以下の方々がグループの永続的なメンバーです:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/development/sec/software-supply-chain-security/authentication/" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### ダッシュボード

- [Error Budget](https://dashboards.gitlab.net/d/stage-groups-detail-authentication/749586f0-be5b-5af4-88ce-3e3bac20b45e?orgId=1&from=now-2d&to=now)

### リンクとリソース {#links}


<!-- include omitted: includes/engineering/software_supply_chain_security-shared-links.md (no localized version under content/ja/) -->


- [マイルストーン回顧](https://gitlab.com/gl-retrospectives/sscs/authentication/-/issues/53)
- Slack チャンネル
  - SSCS:Authentication [#g_sscs_authentication](https://gitlab.slack.com/archives/CLM1D8QR0)
  - 日次スタンドアップ [#g_sscs_authentication_daily](https://gitlab.slack.com/archives/C01311Z0LDD)
- Issue ボード
  - [マイルストーンボード](https://gitlab.com/gitlab-org/gitlab/-/boards/4374016?not%5Blabel_name%5D%5B%5D=Quality&label_name%5B%5D=group%3A%3Aauthentication&label_name%5B%5D=Deliverable&milestone_title=17.4)
  - [タスク割り当てボード](https://gitlab.com/groups/gitlab-org/-/boards/4490634?label_name[]=Deliverable&label_name[]=group%3A%3Aauthentication&milestone_title=17.4)
