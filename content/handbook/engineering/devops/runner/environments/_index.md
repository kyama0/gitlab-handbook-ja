---
title: Environments グループ
description: "Environments グループは DevOps ライフサイクルの Deploy ステージにおける Environments を担当しています。"
upstream_path: /handbook/engineering/devops/runner/environments/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-05-06T00:00:00Z"
translator: claude
stale: false
---

## ビジョン

このチームの方向性については、[プロダクト](https://about.gitlab.com/direction/delivery/)
のビジョンをご覧ください。

Ops サブ部門のメンバーとして、[私たちの](https://about.gitlab.com/direction/ops/)
全体的なビジョンも確認されると良いでしょう。

## ミッション

### OKR

### プロダクト指標

### GitLab へのコントリビューション

## チームメンバー

{{< team-by-manager-slug "nicolo-maria-mezzopera" >}}

## 安定したカウンターパート

以下のメンバーは、他の機能チームから私たちの安定したカウンターパートです。

{{< engineering/stable-counterparts role="Deploy:Environments" manager="nicolo-maria-mezzopera" >}}

## 共通リンク

- [一般 Slack チャンネル](https://gitlab.slack.com/archives/C04SS157XSQ)
- [スタンドアップ Slack チャンネル](https://gitlab.slack.com/archives/CPJ6QAV9S)
- [ソーシャル Slack チャンネル](https://gitlab.slack.com/archives/C04QL4HKV0C)

専用 Slack チャンネル:

- Kubernetes 向けエージェント: [`f_agent_for_kubernetes`](https://gitlab.slack.com/archives/f_agent_for_kubernetes)
- Terraform バックエンド: [`f_terraform_backend`](https://gitlab.slack.com/archives/f_terraform_backend)
- [Terraform プロバイダー](https://gitlab.com/gitlab-org/terraform-provider-gitlab): [`terraform-provider`](https://gitlab.slack.com/archives/terraform-provider)
- Auto DevOps: [`f_autodevops`](https://gitlab.slack.com/archives/f_autodevops)
- Environments 詳細ページ: [`#f_environment_details_page`](https://gitlab.slack.com/archives/C04N1P3B3UL)

## インサイト

[内部ハンドブックページ](https://internal.gitlab.com/handbook/engineering/core-development/cd/deploy/environments) をご覧ください。

## プロセス

### 略語

- Engineers: Environments グループのすべてのエンジニア
- Engineering: エンジニアとエンジニアリングマネージャー
- EM: エンジニアリングマネージャー
- PM: プロダクトマネージャー
- FE: フロントエンドエンジニア
- BE: バックエンドエンジニア
- UX/PD: ユーザーエクスペリエンスデザイナー
- TW: テクニカルライター

### ミーティング

#### Environments チームミーティング

毎週 1 回チームミーティングを開催します。このミーティングの目的は、進行中のプロジェクトに関する情報を共有することです。また、コラボレーションにとって重要な一般的なお知らせも含まれます。

ミーティング形式:

- ミーティングの前後に、チームメンバーは口頭で伝えたいことをミーティングに添付されたメモに記入します。
- 参加したいチームメンバーのために 1〜2 分待ってから、準備ができたら録画を開始します。
- 録画中は、ドキュメント内の各ポイントを確認します。
- 誰でも議論を進行できます。EM または PM がいる場合は、彼らが口火を切ります。
- 現在議論されているポイントの作成者が参加していれば、そのポイントを口頭で伝えられます。
- ドキュメントをできるだけ多く消化したいことを考慮しながら、各ポイントについて短い議論が行われます。
- すべてのチームメンバーが、議論が行われる間にドキュメントのメモを取る手助けをすることが歓迎・奨励されます。
- すべてのポイントを確認し終えたら、録画を停止します。
- 残り時間がある場合、チームメンバーは録画されていない残り時間を使って交流するか、ミーティングを早めに終了することができます。

その週のミーティングがすでに開催されており、新しい議題を追加したい場合は、最後のミーティング日の上に次のミーティング日の新しいセクションを作成し、アイテムを追加してください。

#### フロントエンド・Go・Ruby ミーティング

これらはチームカレンダーのオプションミーティングです。チームの誰でも歓迎です。対応するトピックを主に担当するエンジニアができるだけ多く参加できる時間に優先的に設定されます。

これらのミーティングはあまりフォーマルではなく、タイムゾーンをまたいでエンジニア同士が進行中のプロジェクトについて議論したり、質問したり、ペアリングしたり、近況を共有したりする時間でもあります。まずアジェンダ項目を確認します。

ミーティングリンク:

- フロントエンド: [Frontend ChitChat](https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MDE2OWkwamdtOG45aDFjdWFlNHY0aWVhYTFfMjAyNDAxMjNUMTUzMDAwWiBnaXRsYWIuY29tX2tuYWlmZjdiY3BnM3FrcXJ1YmRrZjRpdjEwQGc&tmsrc=gitlab.com_knaiff7bcpg3qkqrubdkf4iv10%40group.calendar.google.com&scp=ALL)
- Go: [It's time to Go !!!](https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=ZGJvaDFvZDBmM3FrcnIyaWJ2NXAyNmw3NG1fMjAyNDAxMjRUMTAwMDAwWiBnaXRsYWIuY29tX2tuYWlmZjdiY3BnM3FrcXJ1YmRrZjRpdjEwQGc&tmsrc=gitlab.com_knaiff7bcpg3qkqrubdkf4iv10%40group.calendar.google.com&scp=ALL)
- Ruby: [Ruby Chat](https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MnRxYWtwM2xkNWdxdDMwbjhuaHNydDQ0cnRfMjAyNDAxMjNUMjMwMDAwWiBnaXRsYWIuY29tX2tuYWlmZjdiY3BnM3FrcXJ1YmRrZjRpdjEwQGc&tmsrc=gitlab.com_knaiff7bcpg3qkqrubdkf4iv10%40group.calendar.google.com&scp=ALL)

#### テクニカルディスカバリーミーティング

チーム全体の意見を必要として整理し、それから取り組む必要のある Issue に遭遇することがあります。これらの Issue はテクニカルディスカバリーミーティングのトピックとして選ばれます。
私たちは同期時間を意識しており、各マイルストーンで最大 2 回のミーティングを想定しています。
テクニカルディスカバリーミーティングは以下で構成されます。

- できるだけ多くの人が参加できる機会を持つミーティングを 1 回開催します。
- ミーティングは録画されます。
- ミーティングは開催の少なくとも 1 週間前に告知され、各参加者は出席前に調査対象の Issue を熟知しておく必要があります。
- Issue/epic での事前の非同期での議論が奨励されます。
- PM は使用例/シナリオの説明または簡単な動画の録画によって会話を開始します。
- ミーティングはアジェンダ優先であり、全員がアジェンダにコメントや質問を書くことが期待されます。
- アジェンダが空の場合、ミーティングはキャンセルされます。
- ミーティング内の会話は同じドキュメントにメモとして記録されなければなりません。
- 各ミーティングにはホストが 1 名決まり、その人が会話を前進させる責任を負います。
- 最後のミーティングでは、元の Issue または技術文書に会話を要約する人が任命されます。

テクニカルディスカバリーミーティングの目標は、手元の質問に対する具体的な技術的提案を作成することです。提案を強制すべきではありませんが、そこへ到達し、潜在的なフォローアップを含めて結論を適切に記述することを目指します。

#### マイルストーンチェックアップミーティング

マイルストーンごとに 2 回、火曜日にマイルストーンチェックアップミーティングを開催し、進行中の Issue の状況を確認するか次のマイルストーンの計画を立てます。

### チーム Issue トラッカー

- マイルストーン計画 Issue・イベント計画などの内部議論には [チーム Issue トラッカー](https://gitlab.com/gitlab-org/ci-cd/deploy-stage/environments-group/general/-/issues) を使用します。
- [Ops セクション非同期アップデート](/handbook/engineering/devops/) には [専用プロジェクト](https://gitlab.com/gitlab-org/ci-cd/deploy-stage/environments-group/info/-/issues) も使用します。
- これらの Issue は [デフォルトで公開](/handbook/values/#public-by-default) ですが、機密にすることもできます。

### Issue のリファインメント

チーム同期ミーティングで PM は 2〜3 件のリファインメント DRI が必要な Issue を提示します。
ミーティング中に DRI が選ばれ、その DRI が Issue のリファインメントに責任を持ちます。チームメンバーは、帯域幅があれば作業中に作成・発見した Issue をいつでもリファインすることが奨励されます。

リファインメントプロセスは [Issue テンプレート](https://gitlab.com/gitlab-org/ci-cd/deploy-stage/environments-group/refinement/-/blob/main/templates/default.erb) に記載されています。

### 使用ラベル

#### ディスカバリーバックログ

ディスカバリーでは以下のラベルを使用します。

1. `~workflow::problem validation`（任意）- ユーザーの問題またはビジネス価値がまだ理解されていない、大まかに定義された問題を示す
1. `~workflow::ready for design` - これが（おそらく終わりのない）デザインバックログです
1. `~workflow::solution validation`（任意）- ユーザー検証が必要な具体的なソリューション提案がある作業に使用
1. `~workflow::design` - 進行中のデザイン作業用

#### デリバリーバックログ

1. `~workflow::refinement` - これが私たちのデリバリーバックログです。エンジニアによってまだ詳細に議論されていないすべての Issue が含まれます。WIP 制限なし
1. `~workflow::scheduling` - これが議論済みの Issue のバックログです。これらの Issue はスケジュールされるか、ロードマップに追加されるのを待っています。入力する Issue には予備的な重みが必要です。WIP 制限なし
1. `~workflow::planning breakdown` - 次のマイルストーンのバックログです。2 ヶ月のキャパシティの WIP 制限があります
1. `~workflow::ready for development` - 現在または次のマイルストーンに向けてリファインされた Issue のリストです。2 ヶ月のキャパシティの WIP 制限があります。ここの Issue には最終的な重みが必要です

PM は提案された Issue を `~workflow::scheduling` から `~workflow::planning breakdown` に移動し、WIP 制限を維持する責任があります。誰でも計画用の Issue を推薦できます。

EM は承認された Issue を `~workflow::planning breakdown` から `~workflow::ready for development` に移動し、WIP 制限を維持する責任があります。誰でも Issue を改善して開発準備完了にする手助けができます。

#### 特殊ラベル

- `~environments::parked` ラベルは、今後 9〜12 ヶ月以内に該当 Issue に集中する予定がないことを示すために使用します

### マイルストーンボード

マイルストーンにスケジュールされた Issue は [マイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/4176401?not[label_name][]=environments%3A%3Aparked) で追跡できます。

このボードにはチームのワークフローを追跡するために必要なすべてのカラムが含まれており、特に以下のものがあります。

- 上記で説明した対象ラベル
- 指定されたマイルストーンの計画された作業を含む 1 つ以上のマイルストーンカラム

すべてのカラムは上から下に優先度が設定されています。

チームメンバーがマイルストーンボード上の Issue を自己割り当てしたら、Issue ラベルはエンジニアリングワークフローに従うべきです。

マージリクエストについては、著者とコントリビュートするプロジェクトが `~workflow::` ラベルを使用するかどうかを決定します。使用することも、Issue ラベルと同期させることも必須ではありません。

### 計画

#### チームドメインの制限

Environments チームの規模は現在、フィーチャーカテゴリの全スコープを完全にサポートするには小さすぎます。私たちの優先度を示し、意味のある作業を行うために、**クリティカルメンテナンス** のみを行うフィーチャーカテゴリのリストを管理しています。

- Auto DevOps
- Feature Flags
- Continuous Delivery
- Infrastructure as Code
- Release Orchestration

**クリティカルメンテナンス** とは、p2/s2 以上のセキュリティ・スケーラビリティ・可用性 Issue と p1/s1 バグ、またはプロダクトマネージャーが修正に価値があると判断した Issue のみを対応することを意味します。

前述のタイプに該当しない Issue は `~environments::parked` ラベルが付けられ、その SLO は無視します。

#### Issue の重み付け

使用する重みは以下のとおりです。

| 重み | 追加調査 | 想定外のこと | コラボレーション |
| ---------- | ------------------- | ------------ | --------      |
| 1: 些細 | 予期しない | 予期しない | 不要 |
| 2: 小 | 可能性あり | 可能性あり | 可能性あり |
| 3: 中 | ありそう | ありそう | ありそう |
| 5: 大 | 確実 | 確実 | 確実 |

上記の表は文脈に依存します。例えば、ドメイン知識・経験レベル・GitLab での在籍期間によって、Issue が追加調査や想定外のことを必要とするかどうかについてエンジニアの見解が変わります。

重みは固定ではありません。リファインメント中に正確に設定するよう最善を尽くしますが、透明性と正確性を保ちたいと思います。Issue が既存の重みに反映されているよりも多くの労力を要している場合、その Issue の DRI は重みを変更することが奨励されます。必要とされた労力レベルの正確な記録が必要です。

Issue に重み 1 を与えることで、「この Issue を出荷可能な作業の小さい単位に分解してもメリットがない」と言っていることになります。

5 以上のものはすべて分解すべきであり、`ready for development` であるべきではありません。5 をエピック・リサーチ・実装 Issue またはテクニカルディスカバリーに変えることが多いでしょう。

実現可能な技術的パスを決定するために概念実証（POC）が必要な場合があります。必要な場合、エンジニアは実施する調査のコンテキストと POC の目標を含む POC Issue を作成します。この Issue はタスクのさらなる分解を行う前に作業のスケジュールに組み込まれます。技術的パスが明確になったら、エンジニアは Issue の重み付けや実装を導くための Issue のさらなる分解を進めることができます。すべての POC Issue には回答したい質問のリストが含まれている必要があり、完了の定義には回答と次のステップの提案が含まれるべきです。

すべての POC が成功するわけではありません。それで構いません！調査の方法によっては成功しないものもあり、POC によって私たちのニーズを満たさないソリューションへの重大な時間投資を避けることができます。目標は早期フィードバックと高速なイテレーションです。

なお、デザイナーは Issue 内の重み入力（エンジニアリング用）ではなく、デザイン重みラベルを使用します。

##### 重み・ベロシティ・計画

私たちは意図的に「ベロシティ」という用語を定義せず、チームのワークロードキャパシティの計画には使用しません。

重みの合計を解釈する問題は、各固有の状況に委ねます。

マイルストーンでチームがどれだけの作業を引き受けられるかを決定する際には、計画 Issue とリファインメントプロセスで行われる議論に反映された個人の印象と直感を信頼します。重み付けシステムはこれらの議論を促進するために役立ちます。

### GitLab Terraform プロバイダー

[GitLab Terraform プロバイダー](/handbook/engineering/projects/#terraform-provider-gitlab) は Environments グループによって管理されています。

### 機能開発

私たちの目標は継続的デリバリーモデルに移行することであり、チームが定期的にタスクを完了し、優先順位付けされたバックログ Issue から作業を続けていくことです。チームメンバーは自分の作業をデフォルトで自己スケジュールします。

- チームメンバーは `workflow:ready for development` カラムで現在のマイルストーンの Issue を [マイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/4176401?not[label_name][]=environments%3A%3Aparked) から自己割り当てします。
- `~Deliverable` Issue は他のすべての作業より優先されます。これらは各マイルストーンの主要な焦点であり、[say-do 比率](#say-do-ratio) に影響します。
- チームメンバーが割り当てられた Issue を完了したら、マイルストーンボードに移動して現在のマイルストーンの次の未割り当て Issue を自己割り当てすることが期待されます。
- 現在のマイルストーンに Issue がなくなったら、エンジニアは次の未割り当て `workflow:ready for development` Issue を自己割り当てすることが期待されます。
- ボード上の Issue は重要度に基づいて優先順位が付けられています（リストの上位にあるほど優先度が高い）。この順序はプロダクトマネージャーが設定します。
- マイルストーンのすべての Issue が割り当てられている場合、チームメンバーはチームの作業優先順位に基づいて次に取り組める Issue を特定することが期待されます（下記参照）。
- バックステージ作業は重要ですが、特定の優先順位付けがない場合、チームは `bug` または `feature` カテゴリの Issue に取り組む傾向があります。

#### ~Environments::EngineeringChoice プロセス

目標を精力的に追求しながら、エンジニア個人が共鳴する作業の重要性も認識しています。これを促進するために、"~Environments::EngineeringChoice" ラベルを導入しました。仕組みは以下のとおりです。

1. **マイルストーンでの選択**: 各マイルストーン計画において、エンジニアは特に興味深い、または価値があると感じる Issue を最大 5 件（グループ全体で合計）選択し、"~Environments::EngineeringChoice" ラベルを付けることが奨励されます。これらの Issue は GitLab プロダクトや開発者体験を向上させるものであればよく、`~"group::environments"` ドメインである必要はありません。
1. **マイルストーンごとの上限**: 集中力を維持するために、1 つのマイルストーン内で "~Environments::EngineeringChoice" ラベルが付けられる Issue は 5 件を超えてはなりません。
1. **Deliverable の後の優先度**: すべての必須 ~Deliverable が完了したら、次の優先度は "~Environments::EngineeringChoice" ラベルの付いた Issue に対処することです。
1. **リファインメント済み Issue のみ**: "~Environments::EngineeringChoice" ラベルを適用する前に、Issue は `worfklow::ready for development` であり、重みが必要です。
1. **最大 Issue サイズ**: 想定外のことや追加調査が発生しにくいように、"~Environments::EngineeringChoice" には [重み 1〜2](#issue-weighting) の Issue のみ許可されます。
1. **マイルストーン計画での追跡**: "~Environments::EngineeringChoice" カテゴリでの進捗と選択は、マイルストーン計画 Issue の特定セクションで監視・記録されます。

#### バグ修正と優先作業

各マイルストーン計画では、重大度 SLA に基づいて次のマイルストーンで対応が必要なバグのリストをまとめます。

`~type::bug` Issue に重大度ラベルが割り当て/変更された場合、同時に Issue の期限日を設定/調整することを目指します。
期限の設定は、最後の重大度ラベル更新日と[指定された重大度の SLA](/handbook/product-development/how-we-work/issue-triage/#severity-slos) に基づいて設定することが全員に奨励されます。

##### バグ Issue 管理のベストプラクティス

目標:

- バグ関連 Issue を効果的に追跡・ラベル付けします。
- サブ Issue に DRI がいないことによるバグの期限切れを防ぎます。
- 全体的な DRI がいるバグで特定の領域でサポートが必要であることをチームに知らせます。

コンテキスト:

- 単一部分のバグ Issue
  - 一部のバグは単一の一貫した取り組みで解決できます。例えば、データベースやフロントエンドの変更を必要としない独立したバックエンド修正などです。このような場合、バグ Issue の DRI は作業を行う人であり、すべての作業はバグレポート Issue で追跡されます。

- 複数部分のバグ Issue
  - 他のケースでは、バグ Issue がフロントエンド・バックエンド・データベースにまたがる作業になることがあります。これにより、複数のエンジニアがバグ解決に貢献する個別 Issue の DRI として別々に作業することになります。複数の Issue が必要になります。

問題点:

- 複数部分のバグに対して明確な Issue 構造がないと、チームが助けやすく計画しやすい方法がわかりません。この困難さは say-do 比率に悪影響を与える可能性があります。

複数部分のバグ Issue 管理のベストプラクティス:

- 元のバグ Issue はエピックに昇格すべきです。
- 元の DRI が全体バグエピックの DRI になります（エピックにメモを残します）。
- 作業の各部分を表す新しいサブ Issue をエピックに作成します。
- 新しい Issue はエピックをブロックするものとして記録します。
- 重大度と優先度を除き、ラベルはコピーします。
- 期限日はエピックの期限日を念頭に置く必要があり、これは重大度と優先度に基づきます。
- エピックが Deliverable の場合、Deliverable ラベルを適用します。
- DRI はマイルストーン計画 Issue を使用したり、期限日内に利用可能かどうかを関連チームメンバーに連絡したりします。エンジニアリングマネージャーに cc して、優先度の変更に対して大局的な承認/不承認を出してもらいます。

##### バグ解決プロセス

バグ解決プロセス全体には以下のフェーズが順番に含まれます。

1. GitLab Issue トリアージ手順: ハンドブックセクションに[こちら](/handbook/product-development/how-we-work/issue-triage/#priority)で説明があります

2. Environments チームの [リファインメントプロセス](#issue-refinement)

3. [計画](#planning)

4. 再優先度付け。EM は活動のない計画外の `p3` バグを `p4` に変更し、期限日を削除します。

###### プロセスをまとめると

- バグは期限の 1 マイルストーン前にリファインされる必要があります。これはリファインメント DRI が行います。
- バグ修正はバグの期限日より前に終わるマイルストーンで計画される必要があります。これはマイルストーン計画 Issue で行われます。
- 再優先度付けはマイルストーン計画 Issue の専用セクションで行われます。
- 古くなったバグは[既存のハンドブック規定](/handbook/product-development/how-we-work/issue-triage/#outdated-issues) に従ってクローズされます。

###### ベストプラクティス

- Issue トリアージの [ハンドブックページ](/handbook/product-development/how-we-work/issue-triage/) を読んでください
- レポーターに最小限のセットアップと期待される出力対実際の出力を含む詳細な再現手順を依頼します。
- 予期しない動作を確認するための関連ドキュメントを求めるか、ドキュメントが存在しない場合は説明を求めます。
- レポーターが GitLab チームメンバーの場合、影響を受けるユーザー数や特定の機能など、Issue の影響に関する洞察があるか確認して解決の優先度付けに役立てます。
- 実際にはバグではない可能性があると思う場合は PM と連携します。

#### Say-do 比率

チームは `say-do` 比率でコミットメントを追跡します。2 つの指標が重要です: **say-do** と **reprioritized say-do**

- Say-do は `~Deliverable` Issue **のみ** に適用されます。
- 毎月 17 日までに、EM によって次のマイルストーンの Issue に `~Deliverable` ラベルが適用されます。
- 各エンジニアに対して 1 件の `~Deliverable` を割り当てることを大まかな目標とし、マイルストーンごとに変動することがあります。
- その時点で `~Deliverable` ラベルが付いている Issue は *「デリバリーを約束した」* とみなされ、say-do 比率の一部になります。
- マイルストーン中に `~Deliverable` ラベルが削除されるか、Issue がマイルストーンから外れた場合、その Issue は `reprioritized say-do` 指標にはカウントされませんが、`say-do` にはカウントされます。

私たちは 100% の `re-prioritized say-do` と少なくとも 80% の `say-do` を目標としています。

##### 例

- マイルストーン 15.11 では、2023 年 3 月 17 日までに `~Deliverable` ラベルが付いた Issue が 10 件あります
- 途中で、それらの `~Deliverable` Issue のうち 5 件は間に合わないと判断し、合理的にマイルストーン終了前に 16.0 に移動します
- マイルストーンの終わりに不測の事態が発生し、残り 5 件のうち 1 件が完了しません

`say-do` 比率は 40%（10 件中 4 件）
`reprioritized say-do` は 80%（5 件中 4 件）

### MR レビュー

チームメンバーは、DangerBot の提案に基づいて最初の MR レビューを割り当てるか、チームの別のメンバーに割り当てるかを判断するためにベストジャッジメントを使用する必要があります。この判断の要因には以下が含まれます。

- コードの領域の既知のドメインエキスパートがいる場合は、初期レビューをその人に優先して割り当てます。
- MR は何をしているかを理解するために多くのコンテキストが必要ですか？チームの外のレビュアーがそのコンテキストを把握するのに長い時間がかかりますか？
- MR は Environments グループ外のチームメンバーがおそらく持っていない多くの開発環境セットアップが必要ですか？
- MR は特定のチームメンバーがすでにすべてのコンテキストを持っている大きな取り組みの一部ですか？

チームメンバーとドメインエキスパートとして、MR の著者と最初のレビュアーの両方が、メンテナーが効率的なレビューを実施するのを支援するために、レビュープロセスの前・中・全体にわたってより広いコンテキストを共有することが奨励されます。このコンテキストは以下をカバーすることがあります。

- 既知の制限事項
- エッジケース
- 実装の理由
- 関連する参考資料へのリンク

コンテキストを提供することでレビュープロセスが効率化され、より多くのメンテナーが私たちのドメインに参加しやすくなります（[例](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/147280#note_1819842941)）。

### 繰り延べ UX の処理

チームメンバーは MR レビュー中に UX Issue が発生したときに解決するために最善を尽くします。しかし、要求された変更やフィードバックが速度を著しく低下させる場合があります。効率とイテレーションのために、フォローアップするための繰り延べ UX Issue を開設する必要があります。

このような場合、元の MR を作成したエンジニアが Issue を自己割り当てし、UX フィードバックを評価する DRI となります。これは、フィードバックが実行可能で適切に優先されるよう確保するためにチームのプロダクトデザイナーに連絡することを意味する場合があります。例えば、16.3 マイルストーンで開設された繰り延べ UX Issue については、エンジニアは 16.4 マイルストーンの計画中に評価し適切な優先度付けを行う必要があります。これは 16.4 マイルストーンで解決する必要があるということではなく、Issue が[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)の適切なステップに配置されるか、適切であればクローズされるということです。

これにより繰り延べ UX Issue がタイムリーに解決され、グループの全体的な目標と広い[エンジニアリングワークフロー](/handbook/engineering/workflow/#deferred-ux)への遵守が維持されることを確保します。

### エピックオーナーシップ

Environments グループはエピックを使用して、Environments カテゴリの成熟度を向上させる機能や能力を説明します。

各エピックはそのエピックのすべての技術的側面に責任を持つエンジニアが所有する必要があります。エンジニアリング DRI はプロダクトマネージャーとプロダクトデザイナーと緊密に連携して要件を理解し、[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/) の [設計](/handbook/product-development/how-we-work/product-development-flow/#validation-phase-4-design)/[ソリューション検証](/handbook/product-development/how-we-work/product-development-flow/#validation-phase-5-solution-validation) フェーズと [ビルド](/handbook/product-development/how-we-work/product-development-flow/#build-track) トラックで必要な技術作業を含む Issue を作成します。各 Issue は重み付けされ、チームの他のエンジニアがその作業を引き継げるのに十分な情報が説明欄に含まれている必要があります。

**エピックのビルド期間中**、エンジニアは Issue を実装する唯一の人である必要はありません。作業が正しく進行していることを確認できるよう、Issue で行われた作業を監視する必要があります。作業に問題がある場合や長い遅延がある場合は、プロダクトマネージャーとエンジニアリングマネージャーに知らせる必要があります。

**作業が完了に近づいたとき**、エンジニアはビルドプロセス中に発生した追加の Issue が対処されるか、作業のスケジュールに組み込まれるよう確認する必要があります。技術的負債を積み上げながらビルドしないようにするために、追加の Issue を作成してエピックに追加する必要があります。

**最後に**、本番環境でのエピックのロールアウト中に発生する必要がある作業を監視する必要があります。rake タスク、データベースマイグレーション、またはその他の実行が必要なタスクがある場合は、サイト信頼性カウンターパートの助けを借りて本番システムで実行されるまで見届ける必要があります。

これにより DRI に多くの責任が課されますが、PM と EM は常にサポートしています。このオーナーシップにより、PM や EM だけがアイデアを前進させられるボトルネックや状況が取り除かれます。また、Issue をどのように実装するかを決める最適な人は、実際に作業を行う人であることが多いです。

オーナーシップを宣言するには、エピック説明の先頭に `DRI: <your-gitlab-handle>` を挿入してください。[例](https://gitlab.com/groups/gitlab-org/-/epics/9859)。

## 品質プロセス

高い品質基準を維持することは、優れたプロダクトを提供するための重要な要素です。

Environments グループ内では、高品質を確保するために以下のプロセスとベストプラクティスを使用しています。

1. 各 MR に意味のある単体テストと統合テストが付随することを確保します。
1. 各主要機能について、毎夜実行されて重要なパスにリグレッションが導入されていないことを確認するエンドツーエンドテストを開発・維持します。
1. 週次ベースで、バグとリグレッションの [トリアージレポート](/handbook/engineering/infrastructure-platforms/developer-experience/triage-operations/#triage-reports) をレビューし、適切なアクションを取ります。
1. 各マイルストーンで [品質ダッシュボード](https://10az.online.tableau.com/t/gitlab/views/OpenBugAgeOBA/OpenBugAgeOBADashboard) をレビューし、品質向上の長期的な進捗を追跡します。

### エンドツーエンドテスト

Environments グループはエンドツーエンドテストに [GitLab QA](https://gitlab.com/gitlab-org/gitlab-qa) を使用しています。チームがこれらのテストをどのように活用しているかの [ガイドライン](/handbook/engineering/devops/runner/environments/quality) があります。

### gitlab-agent QA ボット

[`feed_alerts_configure`](https://gitlab.slack.com/archives/C025U6U6HA9) には [このプロジェクト](https://gitlab.com/gitlab-org/configure/k8s-agent-qa/-/pipelines) でテストを実行するボットがあります。

このボットが失敗したパイプラインをアラートした場合、マスターブランチが壊れているのと同じように扱う必要があります。

- 断続的なエラーのパイプラインを確認します（その場合は再試行します）
- それ以外の場合は、さらに調査/修正するための調査 Issue を作成します。

## エラーバジェット

私たちの目標 [可用性](https://dashboards.gitlab.net/d/stage-groups-detail-environments/stage-groups-environments-group-error-budget-detail?orgId=1) は 99.9% です。

### エラーバジェット失敗 DRI プロセス

目標の可用性を下回った場合、毎週 [#cd-section](https://gitlab.slack.com/archives/C05BTB4CBGQ) Slack チャンネルでエラーバジェットレポートが受信されます。

エンジニアが DRI として調査を担当する場合があります。

DRI は自分一人でルート原因を特定したり解決策を提案したりすることは期待されていません。

DRI は代わりにサポートのために [Observability チーム](/handbook/engineering/infrastructure-platforms/production-engineering/observability/) に連絡すべきです。

## 非同期 Issue アップデート

大きなチームでの非同期コラボレーションを最適化するために、特定の Issue またはエピックで完了した進捗を共有するための Issue アップデートを使用しています。
各担当者が毎週 Issue に進捗と状況の更新を追加します。進捗がない場合は週次アップデートをスキップできます。関連するマージリクエストではなく Issue を更新することが望ましいです。マージリクエストでは全体的な進捗の把握ができないためです。これは `workflow::in dev` または `workflow::in review` ラベルの付いた Issue に適用されます。

状況コメントには、作業が何%完了しているか、見積もりに対する本人の自信度、行った作業の簡単なメモを含める必要があります。1 つの Issue に複数の DRI が取り組んでいる場合、複数のアップデートがあっても全く問題ありません。

非同期アップデートの一環として、Issue と関連する MR のワークフローラベルが正しく設定されていることを確認することが重要です。

### 例

```markdown
## 非同期ステータスアップデート

- 完了率: 80%
- 自信度: 90%
- メモ: 明日レビューに入れる見込み
```

非同期アップデートの追加と追跡の作業を簡略化するには [TalTal](https://taltal-new.netlify.app/) を使用できます。

## キャリア開発とプロモーション

私たちはすべてのチームメンバーがキャリア開発を前進させることを望んでいます。

エンジニアリング部門の [キャリア開発フレームワーク](/handbook/engineering/careers/) に従います。

## このチームでの非同期パフォーマンスの最大化

非同期プラクティスは、勤務時間中の重複がほとんどまたはまったくないタイムゾーンに住んでいる私たちにとって特に重要です。

非同期パフォーマンスを最大化するために、[GitLab コミュニケーションガイドライン](/handbook/communication/) に従う必要があります。
具体的には、以下のポイントが重要です。

- SSOT（単一の情報源）ディスカッションページ（Issue または MR）を持つこと。これは誰もが最新情報を素早く得られる主要なコラボレーションポイントです。説明セクションには以下の必須で最新の情報が含まれるべきです。
  - 解決すべき問題は何か？
  - 意思決定の責任を持つ DRI は誰か？
  - [受け入れ基準](https://www.productplan.com/glossary/acceptance-criteria/)（例：ユーザー体験の目標）は何か？
  - スコープ外のものは何か？
  - どのような提案があるか？
  - 各提案の長所/短所と技術的難易度は何か？
  - 意思決定のために誰の承認が必要か？
  - 意思決定の期限日はいつか？
  - FAQ
- DRI はスレッドでの決定に基づいて最新情報で説明を更新し続けます。
- チームメンバーが意見を求められた場合、議論のブロックを解除するためにできるだけ早く応答する必要があります。フィードバックがないか、時間が取れないと伝えることも OK です。DRI が応答を待つことを避けられます。
- 非同期コミュニケーションで大きな進展がない場合、DRI は同期ミーティングをスケジュールするか、より広いオーディエンスに連絡する必要があります。
- DRI が同期ミーティングをスケジュールする場合、ミーティング開始前にアジェンダが準備されていることを確認する必要があります。

### 月次ショーケース DRI

私たちは [OPS ショーケースイニシアティブ](/handbook/engineering/devops/) に参加しており、トピックの選択・Issue の作成・コンテンツを促進するためのショーケース DRI がいます。DRI の役割は以下のとおりです。

- 毎月少なくとも 1 件のショーケース Issue が作成され、適切な Issue/epic にリンクされていることを確認します
- 各ショーケースのトピック選択を促進し、チーム全員にスペースを与えることに注意します
- コンテンツを作成する人を動画制作と Issue の説明について助けます
- 最終的にはショーケース DRI がショーケース Issue が制作され、時間内に準備が整うことに責任を持ちます

現在 FY24Q3 のショーケース DRI は: @anna_vovchenko です

## 私たちとの作業方法

### デフォルトで GitLab Issue を使用する

#### なぜ

GitLab Issue をできるだけ多く使用することが、透明性と効率性の価値観に沿った最善の方法だと考えています。Issue を使用することで、コラボレーションの最大の機会が得られ、行われた作業を再利用し、リクエストと結果を見つけやすく永続的な方法で文書化できます。

#### 方法

[サポートリクエストのドキュメント](https://gitlab.com/gitlab-com/ops-sub-department/section-ops-request-for-help) のガイダンスに従ってください。

### Auto DevOps へのコントリビューション方法

[特定の GDK](https://gitlab.com/gitlab-org/gitlab-development-kit/-/tree/main/doc/howto/kubernetes) の手順と、既存のテストが何をしているかと Auto DevOps の機能開発方法に関する [ハンドブックエントリ](/handbook/engineering/devops/runner/environments/autodevops/) を読んでください。

### Auto DevOps へのコントリビューションに役立つリンク

- [ヒントとトラブルシューティング](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/kubernetes/tips_and_troubleshooting.md)
- [便利なコマンド](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/kubernetes/useful_commands.md)
- [低速接続での作業方法](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/kubernetes/tips_and_troubleshooting.md#qa)
- [開発目的でのプレミアム機能の有効化](/handbook/engineering/workflow/developer-onboarding/#working-on-gitlab-ee-developer-licenses)
- [完全な Auto DevOps パイプラインの Grafana クエリ](https://dashboards.gitlab.net/goto/Jn7bY_aHg?orgId=1)

### 共有クラウドインフラストラクチャ

Environments グループはデモ・実験・補助サービスのホストに使用できる共有 GCP プロジェクトにアクセスできます。
プロジェクト ID は `deploy-stage-shared-i-e55e01cb` であり、以下の AR を使用して作成・プロビジョニングされました。

- https://gitlab.com/gitlab-com/it/infra/issue-tracker/-/issues/493（内部）
- https://gitlab.com/gitlab-com/it/infra/issue-tracker/-/issues/495（内部）

その GCP プロジェクトに恒久的なインフラを作成する必要がある場合、Terraform を使用してグループ全体でセットアップを簡単に共有・文書化することが奨励されます。[この](https://gitlab.com/gitlab-org/ci-cd/deploy-stage/environments-group/infra) GitLab グループを使ってプロジェクトをホストできます。

インフラが一時的なものであれば、好みのツールで管理できます。

### サンプル/デモプロジェクト

デモ用のサンプルプロジェクトを作成する必要がある場合は、個人のネームスペースではなく [サンプルグループ](https://gitlab.com/gitlab-org/ci-cd/deploy-stage/environments-group/examples) に配置することを検討してください。

これにより、すべての知識を同じ場所に集めることができます。また、このサンプルグループはデフォルトで EEP ライセンスを持っています。
