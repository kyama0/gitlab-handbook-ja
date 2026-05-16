---
title: サポートステーブルカウンターパート
description: Support Stable Counterpart の役割と関連する期待・目標の概要。
upstream_path: /handbook/support/support-stable-counterparts/
upstream_sha: 18c3e90de89449f1cbbf92c21776a3ea7899476c
translated_at: "2026-05-08T18:00:00Z"
translator: claude
stale: false
lastmod: "2026-01-23T13:43:51-05:00"
---

## 概要

顧客との直接的なやりとりの結果として、サポートチームは GitLab において独自のポジションを占めており、プロダクトマネージャーを顧客フィードバックにつなぎ、変更に影響を与える機会を持っています。この機会を活用するため、私たちは GitLab 内で「Stable Counterparts」として知られるモデルを採用しました。簡単に言えば、「Stable Counterpart」とは、会社内の別の機能の GitLab チームメンバーに割り当てられた永続的な連絡先です。詳細については、リーダーシップページの [Stable counterparts](/handbook/leadership/#stable-counterparts) 項目と、[An ode to stable counterparts](https://about.gitlab.com/blog/2018/10/16/an-ode-to-stable-counterparts/) を参照してください。

## 期待される成果

- SSC は、より広いサポートチームと Product グループの間の橋渡しとして、**双方向に情報を共有** します。
- SSC は製品フォーラムで顧客の声となり、製品の意思決定に影響を与えることができます。
- SSC は、特定の製品領域での垂直方向の主題専門知識を開発できるようになります。
- 製品チームは、さまざまな顧客のユースケースを理解・探求し、フィードバックを集める簡単な方法を持っています。

## サポートチームメンバーをどのように Product と整合させるか？

- 製品の開発は [セクション、ステージ、グループ](/handbook/product/categories/#devops-stages) に分割されており、そのページがこの役割を担う人物に関する単一の情報源です。
- すべての重要な製品グループをカバーすることを最適化したいと考えています。それに関係なく、特に複数のリージョンでカバレッジを持つために、グループに複数のカウンターパートが存在することは理にかなっている場合があります。

## SSC ロールの要件

このロールで成功するには、SSC として実行する必要のある **必須タスク** がいくつかあります:

1. 担当する製品グループ（複数の場合あり）の [Support MBR スライド](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/?sort=created_asc&state=all&label_name%5B%5D=Support%20MBR&search=Support%20Stable%20Counterpart%20Feedback&first_page_size=20) を毎月更新する
   - これは [グループに関連する定期的なコミュニケーションでサポートを有効にする](#enable-support-with-periodic-communication-relevant-to-the-group) という目標のための強制機能を意図しています。これは毎月重要な更新がなければならないという意味ではありません — しかし、関連する更新が _ある_ かを確認するために毎月いくらかの時間を割くことで、自動的に [グループで起こっていることに警戒し関与する](#be-alert-and-engaged-on-whats-happening-with-the-group) ことになります。
1. [対応する Issue テンプレート](https://gitlab.com/gitlab-com/request-for-help/-/tree/main/.gitlab/issue_templates?ref_type=heads) で CC を介してグループの新しい RFH Issue を購読する
   - サポート内の誰かがあなたのグループに助けを求めるたびに通知されます。あなたは追加のコンテキストを提供したり、自分の主題経験で同僚を自分で助けることができたり — または少なくとも自身の認識から利益を得ることができます。これにより [グループで起こっていることに警戒し関与する](#be-alert-and-engaged-on-whats-happening-with-the-group) ことができます。
1. 製品グループのチームシンクに月に少なくとも 1 回参加する
   - ミーティングに出るだけでは何もしていないように感じるかもしれませんが、一貫して見えるようにすることが [製品グループとの関係を確立し維持する](#establish-and-maintain-a-relationship-with-your-product-groups) 上で重要です。出席することで、つながる機会を作り、より簡単で効率的なコラボレーションの基盤を築きます。
   - _注_: このアプローチはほとんどの人に推奨されますが、製品グループとタイムゾーンの個別の性質により、このタスクが妨げられる場合があります。代替案（例えばアジェンダドキュメントへの非同期キャッチアップや PM/EM との月次シンク）をマネージャーと話し合ってください。
1. 月に少なくとも 1 回、関連するチケットに関与する
   - 顧客が何を扱っているかをよく理解していないと [グループに関連する定期的なコミュニケーションで Product を有効にする](#enable-product-with-periodic-communication-relevant-to-the-group) ことはできません。関連するチケットに関与する方法はたくさんあります。例えば、関連するサポート Pod のペアリングセッションに参加する、グループの RFH Issue に積極的に参加する、オフィスアワーをホストする、または単にチケットを自分に割り当てたり CC するなどです。

これらの各タスクは、以下にリストされている SSC ロールの目標に影響を与える力を与えるためのものです。これらの要件は SSC ロールでパフォーマンスを発揮するためのベースラインですが、超えようとする際の想像力を制限すべきではありません — うまくいく追加のことを行っているなら、それを続け、それが全員に対して形式化できるかとどう形式化できるかを考えてください。

## SSC ロールの目標

### 製品グループとの関係を確立し維持する {#establish-and-maintain-a-relationship-with-your-product-groups}

私たちと同じように、製品チームは世界中に散らばっています。このため、必ずしもカウンターパートと同期できるとは限りません。

- **必須タスク**: 製品グループのチームシンクに月に少なくとも 1 回参加する
- タイムゾーンが許可する場合、プロダクトマネージャーと自己紹介のコーヒーチャットを行う。
  - グループへの興味と、なぜ SSC になることを選んだかを話す。チームと彼らの日常について尋ねる。
  - SSC への期待について彼らに尋ねる。それらを管理し整合させる。
- 重ならないタイムゾーンにいる場合は、Slack で握手をする。
- 彼らとのコミュニケーションのための定期的なケイデンスを確立する。
  - 特に定期的な非同期コミュニケーションモデルを維持する場合、生きている Google ドキュメントを使うと役立ちます。それには [このテンプレート](https://docs.google.com/document/d/1m9t-sxPzwie2D40cXTwpjnQ2VxYJb3GoEB5ig38Nkmw/edit?usp=sharing) を活用できます。
- 最初の自己紹介で、
  - 彼らのチームシンクに自分を追加してもらう - シンクコールに参加できない場合はアジェンダドキュメントを読むことができます！
  - 彼らの Slack チャンネルに参加する。
- 選んだグループにすでに SSC がいる場合は、既存のカウンターパートとコーヒーチャットをスケジュールしてもっと知ってください！

### グループで起こっていることに警戒し関与する {#be-alert-and-engaged-on-whats-happening-with-the-group}

- **必須タスク**: [対応する Issue テンプレート](https://gitlab.com/gitlab-com/request-for-help/-/tree/main/.gitlab/issue_templates?ref_type=heads) で CC を介してグループの新しい RFH Issue を購読する
- 製品領域の主要な Issue（特に severity::1）と回避策を認識する。
- カテゴリに関連する顧客から提起されたチケットを認識し、それらを表面化して支持する。
- 今後のリリースでグループに関連する主要な変更を認識する。
- 次のメジャーリリースでの破壊的変更に関するグループの計画について、十分前（3 ヶ月／3 リリース前）に問い合わせる。顧客がどのように影響を受けるかを早期にしっかり理解するようにする。
- 製品グループの優先事項と課題を認識する。
- 彼らがカバーする機能の使用における主題専門家になることを目指す。

### グループに関連する定期的なコミュニケーションでサポートを有効にする {#enable-support-with-periodic-communication-relevant-to-the-group}

- **必須タスク**: 担当する製品グループ（複数の場合あり）の [Support MBR スライド](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/?sort=created_asc&state=all&label_name%5B%5D=Support%20MBR&search=Support%20Stable%20Counterpart%20Feedback&first_page_size=20) を毎月更新する
- [SWIR](/handbook/support/#support-week-in-review) と関連するサポート Slack チャンネルを通じて発表を共有する。
  - SWIR と関連する Slack チャンネルの両方で、更新に `[SSC Update: Group_Name: GitLab(Major).(Minor).(Patch)]` のプレフィックスを使用する。この一貫性により SSC ロールの影響と重要性を強調するのに役立ちます。
- グループ関連の更新と発表は次のものになり得ます:
  - 今後のリリースに追加される新機能
  - 今後のリリースのバグ修正
  - チケットを生成する可能性が高い Issue
  - 良い貢献機会となる可能性のある Issue
  - 主要なドキュメント変更
  - 発見されたバグと適用可能な回避策
  - グループの機能に関連する可能性のある特別なプロセスまたはトラブルシューティングワークフロー
  - グループからの変更の結果としてサポートのワークフローに発生した変更
- 長期間更新がなかった場合は、「このリリースでは特に注意すべきものはありません、すべて順調です！」または「このトピックに関する素晴らしい新しいフィルタリングされていないビデオがあります」などのクイック更新を送ることを検討してください。
- 必要に応じてトレーニング資料とセッションを促進する。
- [オプション] 新しいチームメンバーとあなたのグループについてチャットし、SSC としての経験を共有するために四半期ごとのオフィスアワーを行うことを検討する。
- [オプション] あなたの製品グループの [Support Preparedness Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/?sort=due_date&state=all&label_name%5B%5D=Support%20Preparedness&first_page_size=100) で DRI になるか、DRI を確実に見つけて、主要な変更が広く伝達されるようにする。

### グループに関連する定期的なコミュニケーションで Product を有効にする {#enable-product-with-periodic-communication-relevant-to-the-group}

- **必須タスク**: 月に少なくとも 1 回、関連するチケットに関与する
- チケットからの顧客フィードバックを Product チームと共有する。
  - 関連する Issue、チケット、Slack スレッドに彼らをループする。
- 顧客の声となり、製品関連の決定と将来のロードマップに影響を与えるエージェントとなる。
- [オプション] Product チームの Slack チャンネルでの質問に手を貸す。

## ロールでの作業

### 過去の SSC アクティビティの具体例

多くの異なるグループがあり、SSC になる単一のアプローチがすべてに完全にフィットすることはありません。グループとどう最適に作業するかを見つけるには時間がかかることがあり（あるシニアサポートエンジニアは、本当にコツをつかんだと感じるまでに 2 年以上かかったと言いました）、GitLab のすべてと同様に、それはイテレーティブで、願わくば透明なプロセスです。上記のセクションにリストされている期待事項は良い出発点ですが、強制でもなく完全でもありません。

追加のインスピレーションとして役立つ可能性のある、他の SSC が行っている事柄をいくつか紹介します:

- UX リサーチへの支援: サポートエンジニアとして、あなたは「実生活」のテストシナリオの定義とそれらの環境作成を支援するのに独自に適格です（[Pipeline Authoring の例](https://gitlab.com/gitlab-org/ux-research/-/issues/2309#note_1237714663)）
- Product デザインへの支援: 製品デザイナーが今後の機能を計画するとき、あなたは顧客が遭遇する可能性のある問題の種類とそれを回避する方法の観点からこれらの計画を見ることができます（[Authentication and Authorization の例](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/91673#note_1035754969)）
- ケイデンスで、自分が作業した、または見た関連するサポートチケットを特定し、タグ付けまたはリスト化する（[Pipeline Authoring](https://gitlab.com/gitlab-gold/mg-gold/log/-/issues/5#note_1227878476) や [Pipeline Execution](https://gitlab.com/gitlab-gold/mg-gold/log/-/issues/4#note_1227880727) の例）
- 適切な場合、Issue に「Support Priority」と「Support Efficiency」のタグを付ける。「Support Interest」を使って Issue を簡単に検索することもできます。
- 関連するチケットの数で 1 つ以上の高優先度 Issue を修正する影響を分析する（[Authentication and Authorization](https://gitlab.com/gitlab-org/manage/general-discussion/-/issues/17628) と [SaaS Account チケット](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/4966) の例）
- 製品グループに代わって顧客に連絡する: [通常](workflows/sending_notices.md) これは CMOC が行うことですが、緊急ではないケースでは、特定の顧客との特定の会話のためにドメイン固有の知識でより装備されているかもしれません（[Pipeline Execution の例](https://gitlab.com/gitlab-com/support/internal-requests/-/issues/18107)）
- 顧客有効化キャンペーンのレビューを提供する: [Customer Success Programs Team](/handbook/sales/field-operations/customer-success-operations/cs-ops-programs) は、顧客に GitLab の使用拡大を支援するための情報提供と教育のためのキャンペーンを作成します。SSC として、あなたは技術的正確性とチケットディフレクションに対する目で、顧客に送られるコミュニケーションをレビューする主題専門家として独自にポジションされています。詳細については [SME Review Guidelines](/handbook/sales/field-operations/customer-success-operations/cs-ops-programs/#subject-matter-expert-sme-review-guidelines) を参照してください。
- あなたの製品グループとトピック的に整合する [Support Pod](https://gitlab.com/gitlab-com/support/support-pods) があるか確認し、参加を検討する — あなたは関連するチケットへの追加の露出から利益を得る理想的な候補です。

### 新しくオンボーディングされた SSC をサポートしメンタリングする

- SSC であることはグループに基づいて異なる経験です。しかし、新しくオンボーディングされた SSC を助ける、試行錯誤されたベストプラクティスを持っているはずです。それらをチーム内の他の SSC と共有することを検討してください。
  - `@gitlab-com/support/support-stable-counterparts` GitLab グループと `#spt_stable-counterparts` Slack チャンネルを使用して、他の SSC とベストプラクティスを共有し、プロセス変更、改善、その他のディスカッションに関する入力とフィードバックを集めます。
    - この Slack チャンネルには Slackbot のリマインダーアプリと Geekbot の両方が有効になっており、チャンネル参加者が定期的な更新を共有することを促しています。
- 実世界で何が機能して何が機能しないかに基づいてこのページとプロセスの他の側面をイテレートし、将来の SSC があなたの学びから利益を得られるようにしてください。

### SSC として必要な時間を確保できない場合はマネージャーに懸念を上げる

- SSC ロールでの成功は、Product チームとの関係を構築し維持する能力に依存します。定期的にそれに時間を割く必要があります。
- 期待事項を十分に果たせないと感じる場合は、マネージャーとチャットして、時間管理と優先順位付けを手伝ってもらってください。
- 数週間離れて、再びバンド幅ができたときに戻ることは完全に問題ありません。

## マネージャーからの期待事項

- SSC でもあるサポートエンジニアを管理している場合は、月に少なくとも 1 回は彼らとの 1:1 で会話のトピックにすべきです。
  - このアクティビティの優先順位付けと時間の確保を可能にする。
  - 懸念事項があれば解決に取り組む。
- 管理しているサポートエンジニアが SSC になることに興味がある場合は、[How can I enroll and be a counterpart?](#how-can-i-enroll-and-be-a-counterpart) のセクションを案内してください。
- SSC が長期間不在になる場合や、グループに関連する重要なイベント中の場合は、彼らのバックフィルとして機能してください。

## Product チームからの期待事項

- タイムゾーンの制約を認識し、SSC に合わせて柔軟に対応してください。
  - 新しい SSC をチームに紹介し、関連するチャンネル、ドキュメント、ミーティングに追加してください。
  - ドキュメント経由の非同期で関与するか、SSC とコミュニケーションの他のモードについて話し合ってください。
- すべての [関連する更新](#enable-support-with-periodic-communication-relevant-to-the-group) を SSC と同期または非同期で共有してください。
- 各 SSC-PM の関係は異なります。あなたと彼らに最適な方法を見つけることに取り組んでください！
- 何が機能して何が機能しないかに関するフィードバックをサポートと共有してください。
- これを最大限に活用するために期待事項を設定し管理してください！

グループに SSC が割り当てられておらず、リクエストしたい場合は、[support-stable-counterpart プロジェクト](https://gitlab.com/gitlab-com/support/support-stable-counterpart/-/issues/new?issuable_template=Request%20new%20SSC%20for%20Group) で Issue を作成し、[#support_team-chat](https://gitlab.slack.com/archives/CCBJYEWAW) と [#spt_stable-counterparts](https://gitlab.slack.com/archives/C01SEKQ1SMS) で共有してください。

## 現在の SSC 空席

[以下の表](#product-counterparts) は、現在 SSC が割り当てられていないすべてのグループとステージをリストしています。Product および／または Engineering Manager がサポートに連絡して SSC をリクエストしたグループのリストは、[support-stable-counterpart プロジェクト](https://gitlab.com/gitlab-com/support/support-stable-counterpart/-/issues) で確認できます。

## カウンターパートとして登録するには {#how-can-i-enroll-and-be-a-counterpart}

グループのステーブルカウンターパートになることに興味がある場合、

- マネージャーと話し合います。
- サポートトレーニングプロジェクトで [SSC Onboarding テンプレート](https://gitlab.com/gitlab-com/support/support-training/-/blob/main/.gitlab/issue_templates/Support%20Stable%20Counterparts%20Basics.md) を使用して Issue を開きます。
  - これは期待事項とベストプラクティスを案内する非常に短いモジュールで、半日もかからずに完了できます！
- 完了したら、ハンドブックのマージリクエストを作成します:
  - [/data/stages.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml) で関連するチームの 'Support' の下に自分の名前を追加します。正しくリンクされるようにするため、[チームページエントリ用の YAML ファイル](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/team_members/person) と全く同じ綴りで名前を記入してください。
  - MR をマネージャーにアサインします。

注: グループに 1 人以上の SSC がいることを推奨しているため、興味のあるグループにすでに SSC がいても、それで興味を失わないでください！

## 非グループ固有の SSC

いくつかのロールは製品グループ固有ではありませんが、すべて同じ期待事項と責務を伴います。
非グループ固有のカウンターパートは通常、関連グループに質問があり SSC が現在いない場合にも介入します。

| Section          | Group          | Group Contact       | Support Counterpart | Frequency           |
|:----------------:|:--------------:|:-------------------:|:-------------------:|:-------------------:|
| Finance          | Accounts               | TBD                                          | TBD                                    | N/A |
| Finance          | Budget                 | {{< member-by-name "Chase Wright" >}}        | TBD                                    | 1x Qtr on budget + once per month |
| Legal            | Legal                  | {{< member-by-name "Robin Schulman" >}}      | {{< member-by-name "Lee Matos" >}} {{< member-by-name "Val Parsons" >}}| N/A |
| PeopleOps        | After-hire care        | TBD                                          | TBD                                    | N/A |
| PeopleOps        | Talent Acquisition     | TBD                                          | TBD                                    | N/A |
| Performance      | Performance            | {{< member-by-name "Stan Hu" >}}             | {{< member-by-name "Lee Matos" >}}     | N/A |
| Production       | .com Infrastructure    | {{< member-by-name "Dave Smith" >}}          | TBD                                    | N/A |
| Marketing        | Developer Relations    | {{< member-by-name "John Coghlan" >}}        | TBD                                    | N/A |
| Marketing        | Open Source Prog.      | {{< member-by-name "Bryan Behrenshausen" >}} | {{< member-by-name "Andrew Conrad" >}} | weekly team meeting |
| Customer Success | Customer Success       | {{< member-by-name "Kristen Lawrence" >}}    | TBD                                    | weekly on Fri join EMEA scrum |
| Sales            | Sales                  | TBD                                          | {{< member-by-name "Tine Sørensen" >}} | N/A |
| Security         | Security Operations    | TBD                                          | TBD                                    | N/A |
| UX               | Tech Writing           | TBD                                          | {{< member-by-name "Mike Lockhart" >}} | weekly team meeting |
| Quality          | Reference Architecture | {{< member-by-name "Grant Young" >}}         | {{< member-by-name "Simon Street" >}}  | N/A |

## Product カウンターパート {#product-counterparts}

{{< engineering/section-counterparts >}}

{{< engineering/stages-counterparts >}}
