---
title: "UX リサーチ参加者をリクルーティングする方法"
description: "GitLab でリサーチ調査に適した参加者を見つける方法"
upstream_path: /handbook/upstream-studios/experience-research/recruiting-participants/
upstream_sha: a15c0bfc1dd89fbbe4aff8969605eb60ab63f1ca
lastmod: "2026-07-16T17:32:42-03:00"
translated_at: "2026-07-17T07:37:26+09:00"
translator: codex
stale: false
---

GitLab では、UX Research Operations Coordinator がリサーチを依頼する人と密接に協力して、フィードバックを集める相手が適切であることを確認します。UX Research Operations Coordinator の代役を務める場合は、[Research Operations Coordinator の代役を務める](/handbook/upstream-studios/research-operations/research-specialist-fill-in/)ページを参照してください。

#### 参加者をどこで見つければよいか分からない場合のリクルーティング方法 {#how-to-recruit-participants-when-you-arent-sure-where-to-find-them}

1. [対象オーディエンスを特定する](/handbook/upstream-studios/experience-research/recruiting-participants/#identify-your-target-audience)（つまり、どのような特性を持つべきか？）
1. [スクリーナーを作成する](/handbook/upstream-studios/experience-research/recruiting-participants/#craft-your-screener)
1. [Calendly イベントを作成する](/handbook/upstream-studios/experience-research/recruiting-participants/#create-a-calendly-event)
1. [リクルーティングリクエスト Issue を作成する](/handbook/upstream-studios/experience-research/recruiting-participants/#open-a-recruitment-request-issue)
1. [インセンティブリクエスト Issue を作成する](/handbook/upstream-studios/experience-research/recruiting-participants/#reimbursing-participants-for-their-time)

#### 知っている顧客を参加者としてリクルーティングする方法 {#how-to-recruit-participants-who-are-customers-you-know}

1. [対象オーディエンスを特定する](/handbook/upstream-studios/experience-research/recruiting-participants/#identify-your-target-audience)（つまり、どのような特性を持つべきか？）
1. 顧客に連絡して、関心があるか尋ねる
1. 顧客と直接調整してセッションをスケジュールする。これには [Calendly イベントの作成](/handbook/upstream-studios/experience-research/recruiting-participants/#create-a-calendly-event)が含まれる場合があります
1. [インセンティブリクエスト Issue を作成する](/handbook/upstream-studios/experience-research/recruiting-participants/#reimbursing-participants-for-their-time)

#### Issue から参加者をリクルーティングする方法 {#how-to-recruit-participants-from-issues}

1. 参加者が持つべき特性を判断するため、[対象オーディエンスを特定する](/handbook/upstream-studios/experience-research/recruiting-participants/#identify-your-target-audience)
1. [スクリーナーを作成する](/handbook/upstream-studios/experience-research/recruiting-participants/#craft-your-screener)
1. [Calendly イベントを作成する](/handbook/upstream-studios/experience-research/recruiting-participants/#create-a-calendly-event)
1. 関連する公開 Issue にスクリーナーへのリンクを投稿して参加者を募る
1. [リクルーティングリクエスト Issue を作成する](/handbook/upstream-studios/experience-research/recruiting-participants/#open-a-recruitment-request-issue)
1. [インセンティブリクエスト Issue を作成する](/handbook/upstream-studios/experience-research/recruiting-participants/#reimbursing-participants-for-their-time)

*UX Researcher または UX Research Operations Coordinator がプロセス全体を通じて協力する場合があります。質問にはいつでも回答します。*

### 対象オーディエンスを特定する {#identify-your-target-audience}

質問に答える助けとなるデータを集めることは不可欠です。そのための唯一の方法は、適切な人と話すことを確実にすることです。対象オーディエンスを定義するために、次の質問を自分に投げかけてください：

- 選択したリサーチ手法は何ですか？
- 参加者は何人必要ですか？
- 誰から話を聞きたいですか？
  - 参加者はどのようなタスクを行うべきですか？
  - 参加者はどのようなツールを使用すべきですか？
  - 経験レベルはどのくらいですか？

これらの質問への回答は、調査のためにこれまで特定した[目標と目的](/handbook/upstream-studios/experience-research/defining-goals-objectives-and-hypotheses/)から直接導かれるべきです。リサーチ調査に関わる全員がそれらに同意し、リクルーティングを開始する*前に*確定していることが重要です。まったく適合しない調査に参加者を無理に当てはめようとするより、明確な目的から始める方がよいです。

多くの場合、個人の役職名は実際に行うタスクと完全には一致しないため、役職名ではなくタスクと責任について考えることが最善です。

### スクリーナーを作成する {#craft-your-screener}

スクリーナーには特定の役割があります。対象となる人口統計の人を特定し、調査で本当に知りたいことを尋ねられるようにするものです。ベストプラクティスは、Google Docs で[スクリーナーテンプレート](https://docs.google.com/document/d/1hMchH7C7Af2jCLeV9SK89F0ajT3m-hojJ0MmZnV5wmE/edit)（内部リンクのみ）をコピーし、すべての質問が確定するまでステークホルダーと協力することです。効果的なスクリーナーの書き方のヒントについては、[このページ](/handbook/upstream-studios/experience-research/write-effective-screener/)を確認してください。その後、質問を含むスクリーナーを Qualtrics で作成します。Qualtrics へのアクセス権がない場合は、[リクエストしてください](/handbook/security/corporate/end-user-services/access-requests/access-requests/)。確定したスクリーナーが Qualtrics で作成され、UX Research Operations Coordinator と共有されるまで、リクルーティングは開始しません。

スクリーナーの質問は、参加者基準と*一致しなければなりません*。これにより、UX Research Operations Coordinator は希望する基準を確認し、スクリーナーでどの回答を見たいかを把握できます。スクリーナーを抽象的または自由回答にすればするほど、UX Research Operations Coordinator が求める回答を解析することは難しくなります。ベストプラクティスは、スクリーナーで自由回答の質問を使用しないことです。

モデレート調査に参加するには、参加者がこれらの各質問に同意する必要があります。すべてのスクリーナーに、*必ず*これらの質問を含めてください：

- セッションを記録することへの同意
- 記録を GitLab に保存することへの同意

IP Assignment および／または GitLab の Individual Contributor License Agreement が必要かを判断してください。

- [IP Assignment と表示するタイミング](/handbook/upstream-studios/research-operations/ip-assignment/#when-to-show-the-ip-assignment)の詳細を確認する

よく含める質問：

- 役職名
- 一般的なタスク
- 業界
- チームと会社の規模
- 使用するツール

これらの質問には、標準的な文言を使用したコピーが Qualtrics の UX Research ライブラリにあります。また、前述したスクリーナーテンプレートに基づく一般的なテンプレートも Qualtrics にあります。このテンプレートを使用するには、Qualtrics で新しいプロジェクトを作成し、次のオプションを選択してください：

- アンケートをどのように開始しますか？  `Use a survey from your library`
- ライブラリ `UX Research & Product`
- アンケート `UXR Generic Screener`（`Templates` フォルダーから）

`Create project` を選択すると、Qualtrics 内のアンケートビルダーにリダイレクトされ、適切と思うようにスクリーナーを編集できます。

同じ組織から参加者をリクルーティングする必要がある場合があります。この場合、スクリーナーの最後に、見込み参加者に追加の候補者をリクルートするよう尋ねる質問を追加することを検討してください（[スノーボールサンプリング](https://en.wikipedia.org/wiki/Snowball_sampling)と呼ばれます）。例：

> 私たちは、同じ組織／チームの人で、あなたとは異なるロールを持つ人とも話したいと考えています。全員のインタビューは個別に実施し、セッション終了後には全員に同額を支払います。あなたがセッションに参加することは、他の誰かが参加することを条件としません。この調査への参加に関心がある同僚を知っている場合は、そのメールアドレスとロール／役職名を提供してください。このスクリーナーへのリンクを送信します。

場合によっては、異なる調査で共通のスクリーナーを使用して取り組みを組み合わせられます。これは [Common Screener](/handbook/upstream-studios/experience-research/recruiting-participants/common-screener/)と呼ばれます。

*スクリーナーはアンケートと同じではないことを覚えておくことが重要です。*答えを知りたいが、その参加者を通過させるかの判断には厳密には不要な追加質問を積み重ねたくなる場合があります。これらの質問は、代わりにディスカッションガイドまたはスクリプトに含めると効果的です。

### Calendly イベントを作成する {#create-a-calendly-event}

参加者をスケジュールするには、Calendly イベントを作成する必要があります。UX Research Operations Coordinator は、適格な参加者に個別のメールを送信し、あなたとの時間を予約するよう依頼します。Calendly は[こちら](/handbook/tools-and-tips/other-apps/#calendly)で設定してください。

1. 「New Event Type」をクリックします。
1. One-on-One meeting オプションで「Create」を選択します。
1. Event name には調査のトピックを含めます。
1. Location には Zoom ミーティング URL を入力します。繰り返しのミーティングを使用することがベストプラクティスです。
1. Description／Instructions は任意です。
1. Event link には、セッションのトピックを説明する短いフレーズを使用します。
1. Event color には、現在使用していない色を選択します。
1. Event Duration は、リサーチ手法を参照します。通常、ユーザーインタビューとユーザビリティセッションは 30〜60 分です。
1. Date Range では、「Edit」をクリックし、ドロップダウンメニューから「Over a Date Range」を選択します。次に、セッションを開催する日を選択します。リサーチセッションの実施には 5〜7 営業日を確保することがベストプラクティスです。
1. カレンダーの各日をクリックし、セッション対応可能な時刻を示します。

### リクルーティングリクエスト Issue を作成する {#open-a-recruitment-request-issue}

リクルーティング Issue を作成する前に、すべての資料を準備してください：

- スクリーナー
- スクリプト
- リクルーティングのタイムライン

これらの資料がなければ、UX Research Operations Coordinator はリクエストを進められません。リクルーティング Issue を早すぎる段階で作成すると、リクルーティング Issue の所要時間に関する追跡値が過大になります。

**ステップ 1 - Recruitment Request Issue を作成する**

このステップでは、リクエストを完了するために必要なすべての情報を提供します。

- [UX Research Project](https://gitlab.com/gitlab-org/ux-research/-/issues)に移動し、新しい Issue を作成します。
- <Recruiting Request> テンプレートを選択し、必要な情報を入力します。

**ステップ 2 - 1〜2 営業日待つ**

UX Research Operations Coordinator は、1〜2 営業日以内に調査を担当し、参加者を見つけるためにあなたと協力します。追加の質問とタイムラインの最新情報について連絡します。調査が担当されると、Coordinator は `ReOps::Triage` ラベルを削除します。これは担当中であることを示すラベルに置き換わります。例：Caitlin Faughnan の場合は `ReOps::Cait`。

#### 先行して始めたいが、まだ準備が整っていない場合はどうしますか？ {#what-if-i-want-to-get-a-head-start-but-im-not-quite-ready}

調査がまだリクルーティングの準備ができておらず、早期にリクエストを作成する場合は、タイトルを WIP または DRAFT で始めてください。
UX Research Operations Coordinator は調査を担当しますが、***Issue が WIP／DRAFT フェーズを抜けるまでリクエストには着手しません***。
Issue が WIP／DRAFT フェーズを抜ける準備ができたら、リクエストに割り当てられた UX Research Operations Coordinator を @メンションしてください。

#### UX Research Coordinator はリクエストで何を担当しますか？ {#what-will-the-ux-research-coordinator-be-responsible-for-on-my-request}

UX Research Operations Coordinator は、リクルーティングキャンペーンの開始、リクエストの優先順位付け、[参加者のスケジュール設定（必要な場合）](/handbook/upstream-studios/experience-research/recruiting-participants/#scheduling-participants)、[時間に対する謝礼の支払い](/handbook/upstream-studios/experience-research/recruiting-participants/#reimbursing-participants-for-their-time)、必要に応じた NDA の署名と適切な保管を担当します。

#### どのリクルーティング手法が使用されますか？ {#what-recruitment-method-will-be-used}

プロジェクトに割り当てられた UX Research Operations Coordinator は、リクルーティング基準に基づいて最適なリクルーティング手法を選択します。基準によっては、複数のアプローチを使用する場合があります。オプションには次が含まれます：

1. Data Warehouse
1. Marketo
1. Respondent.io - サードパーティーのリクルーティングツール
1. Social Outreach
1. LinkedIn を介した直接ソーシング
1. Docs Site Banner
1. UserTesting.com - サードパーティーのリクルーティングツール（主に Product Designer がセルフサービスで使用）

これらの[リクルーティング手法](/handbook/upstream-studios/research-operations/recruitment-methods/)の詳細を確認してください。

#### 参加者のスケジュール設定 {#scheduling-participants}

スクリーナーを見込み参加者に送信すると、UX Research Operations Coordinator は結果を監視し、リクルーティングを依頼した人と共有します。これは Google スプレッドシートを通じて行われます。リクルーティング基準に最も適合する見込み参加者を提案します。リサーチの DRI は、招待したい回答者の名前のリストを UX Research Operations Coordinator に提供することもできます。

見込み参加者に合意したら、UX Research Operations Coordinator は Gmail 経由で適格な参加者にスケジュールメールを送信します。UX Research Operations Coordinator は、予約が入ったかどうかを適時に更新することをあなたに頼っています。カレンダーに予約がない場合は、数営業日以内に知らせる計画を立ててください。リマインダーや新しい招待を送信できます。リクエストが満たされるまで、このサイクルを繰り返します。

#### 参加者の時間に対する謝礼の支払い {#reimbursing-participants-for-their-time}

リクエストに割り当てられた UX Research Operations Coordinator が参加者への支払いを処理します。ただし、セッション完了から 48 時間以内に Coordinator へ知らせるのはプロジェクトの DRI の責任です。これにより、インセンティブを適時に処理して、参加者に前向きな体験を提供できます。すべての参加者への支払いが完了し、未実施のセッションがなくなると、UX Research Operations Coordinator が Issue をクローズします。

#### UX Research Operations にインセンティブリクエストを送信するのはいつですか？ {#when-do-i-submit-an-incentives-request-with-ux-research-operations}

プロセスを開始するために Recruitment Issue を作成したのであれば、この手順はプロセスの一部として既に組み込まれているため自動的に実行されます。つまり、何もする必要はなく、インセンティブは割り当てられた UX Research Operations Coordinator が自動的に処理します。

#### 自分で参加者を見つけ、インセンティブを配布するだけの場合はどうしますか？ {#what-if-i-found-my-own-participants-and-just-need-to-hand-out-incentives}

Recruitment Issue を作成せず、インセンティブを配布する必要があるシナリオでは、Incentives Request Issue を作成する必要があります。

- [UX Research Project](https://gitlab.com/gitlab-org/ux-research/-/issues)に移動し、新しい Issue を作成します。
- `Incentives Request` テンプレートを選択し、必要な情報を入力します。
- Issue にスプレッドシートへのリンクを貼り付けます。

UX Research Operations Coordinator のいずれかが、必要な情報がすべてスプレッドシートにある場合、1 営業日以内にリクエストを受け取り、参加者のインセンティブを処理します。
調査が進行中の場合は、処理が必要なインセンティブがさらにあるときに、Issue にコメントするか、スプレッドシートで UX Research Operations Coordinator をタグ付けしてください。

### リクルーティングのタイムライン {#recruitment-timelines}

エンジニアや DevOps 専門家のように、リサーチパネルと顧客データベースに豊富に存在する対象参加者の場合、リクルーティングには通常 2 週間かかります。
セキュリティ専門家や新しくリリースされた機能のユーザーなど、出現率の低いユーザーのリクルーティングには 2 週間以上かかる場合があります。
まれに、対象参加者が見つからない場合、UX Research Operations Coordinator は別のオプションを提案します。

すべての場合において、UX Research Operations Coordinator はリクルーティング Issue にコメントして、リクルーティング作業の進捗を更新します。

### プロモーションゲーム {#promotional-games}

プロモーションゲームまたはコンテストを通じてユーザーをリクルーティングする予定がある場合（例：Amazon Gift card 30 ドル（または同等通貨）を 3 枚のうち 1 枚獲得する機会）、[ハンドブック](/handbook/legal/process-for-ux-research-prize-draws/)の次の情報を確認し、法務に相談してください。法務への連絡方法については、Legal Team ハンドブックページの[連絡方法](/handbook/legal/#how-to-reach-us)を参照してください。法務の承認取得とインセンティブリクエストの作成は、プロモーションゲームまたはコンテストを含むリサーチを実施する前に完了する必要があります。

#### Respondent.io のプロセスと戦略 {#respondentio-process-and-strategy}

Respondent.io の使用方法の動画概要については、[GitLab Unfiltered の内部限定録画](https://www.youtube.com/watch?v=iRMvlWz96aA)を視聴してください。**注：**動画で説明されているプロセスは主に UX Researcher 向けです。Respondent.io の使用に関心がある場合は、支援を受けるため UX Research チームの誰かに連絡してください。

- 通常、参加者はすぐに適格判定を始めます。
- ほとんどの調査で必要な Respondent キャンペーンは 1 件だけです。
- CM Scorecard には複数のキャンペーンが必要になる場合があります。
- 複数の異なるセグメントをリクルーティングしたい場合、セグメントごとに 1 件のキャンペーンが必要になる可能性が高いです。これは各キャンペーンに適格基準を設定するため、設定したロジックに従って参加者が自動的に適格または不適格になるからです。たとえば、Jenkins ユーザーと GitHub Actions ユーザーの同数の 2 セグメントと話したい場合、同一のスクリーナーを使用して 2 つのキャンペーンを設定する必要があります。1 つのキャンペーンでは `GitHub actions` を `must select` 項目に設定し、もう一方では `Jenkins` を `must select` 項目に設定します。Jenkins ユーザーは最初のキャンペーンを訪れたときに「不適格」になる場合があります。最初のプロジェクトで手動で適格にしてインタビューすることもできますが、実際に各ユーザーが何人いるかを数えておいてください。これは煩雑ですが、Respondent は適格基準に一致するユーザーを 2 倍見つけるまでリクルーティングを続けるため、必要なユーザーを得る最速の方法です。

Coordinator がキャンペーンを作成すると、インタビュアーを Respondent に招待し、インタビュアーにカレンダーを追加してプロジェクトをフォローするよう案内します。その後、別途協議がない限り支援的な役割に移ります。つまり、インタビュアーはキャンペーンを監視し、希望するユーザーをスケジュールに招待する責任があります。Coordinator は数日ごとに確認する計画を立てますが、質問がある場合、または数日後に適した参加者が見つからない場合は、インタビュアーが Coordinator に連絡する責任があります。

- プロジェクトに名前を付ける
  - あまり具体的でない公開名を作成してください。人々がスクリーナーを攻略する可能性があるため、基準を明かしすぎないでください。例：`Seeking GitLab users!` は問題ありませんが、`Seeking daily GitLab CI/CD users with 3+ years of experience!` は具体的すぎます。
  - 内部チームメンバーがどのプロジェクトが自分のものか分かる非公開名を付けます。例：`Lorie: CI/CD pipeline set up exp.`。
- カレンダーを追加する
  - Respondent では、プラットフォーム内で参加者のスケジュール設定、支払い、コミュニケーションを行う必要があります。プラットフォーム参加者を別の場所へ誘導しようとすることは大きなタブーです。
  - プロジェクトの `calendars` タブで Google カレンダーを接続します。
  - 詳細設定に移動し、新しい予約までの最小時間を `8 hours` 以上に指定します。これにより、寝ている間に翌朝すぐのセッションを突然予約されることを防げます。
  - 1 日の最大予約数を、対応できる数に設定します。推奨は 1 日 3〜4 セッションです。これを超えるとかなり負担が大きくなります。
  - セッション間にバッファ時間を設定し、メモを終え、次のセッションを開始する前に少し休めるようにします。推奨は 15 分です。
- Zoom を使用する
Zoom プロジェクトを設定するときは、参加者ごとにリンクを変更できないため、個人の Zoom ルームリンクを使用してください（つまり、各参加者は同じ Zoom ルームリンクを使用します）。さらに、これらのセッションではパスワード必須設定をオフにしてください。
- 重要なプラットフォームエチケット：
  - インタビュー実施後、速やかに参加者を `attended` としてマークしてください。これにより、支払いが必要な参加者がいることを Coordinator に通知します。
  - インタビューの日程変更について連絡する努力をまったくしなかった場合にのみ、`no-show` としてマークしてください。`no-show` はプラットフォームにおける参加者の評価に非常に厳しい影響を与えます。
  - 同様に、セッションの日程を変更する必要がある場合は、可能な限り事前に余裕を持って参加者が再予約できるようにしてください。セッションに現れなかった場合、または 24 時間以内にキャンセルした場合、私たちは低評価を受け、それでも参加者に支払わなければなりません。
  - プロジェクト内のメッセージに注意を払ってください。インタビューを予定している日は、まず最初に確認することが推奨されます。参加者は日程変更や技術的問題について連絡する場合があります。空の Zoom で待って次第に不満になるより、これらに先回りして対処するのが最善です 🙂

##### Respondent.io を通じた支払いのプロセス {#process-for-providing-payment-through-respondentio}

Respondent では、プラットフォームを通じて参加者に直接支払う必要があります。

Respondent.io で参加者に支払うには、複数のステップが必要です：

1. Respondent.io でプロジェクトを選択します（調査を開始した後）
1. Participants タブで調査を正常に完了した人を見つけ、Mark As Attended ボタンをクリックします
1. 参加者を評価するための簡単なアンケート質問に回答します（つまり、Positive、Negative、Neutral）
1. 必要に応じて手順 2 と 3 を繰り返します
1. Payments タブに移動します
1. Payment Method ドロップダウンで Credit Balance と表示されていることを確認します（これがデフォルトのオプションです）
1. 支払いボタンを選択します（注：参加者が追加の作業を行った場合、設定されたインセンティブ費用を超えるチップを指定できますが、これは一般的には行いません）

支払い資金は組み込みの残高から引き出されます。Respondent.io はこの残高を Payments タブ内とページの左上隅に表示します。

## リクルーティングのケーススタディ {#recruitment-case-study}

上記のプロセスが実際にどのように機能するかを理解するには、次のリサーチ調査が優れた例です：

[アクセシビリティソリューション検証リサーチ Issue](https://gitlab.com/gitlab-org/ux-research/issues/576)

### 対象回答者を特定する {#identifying-target-respondents}

調査で示された目標：

> GitLab の自動テスト能力を改善し続ける取り組みの一環として、アクセシビリティテスト用の新機能をリリースしたいと考えています。この機能のいくつかのソリューションを検証したいと考えています。私たちが抱く質問は次のとおりです：
>
> - 開発中に導入された Accessibility Issue をユーザーが正確にはどのように見たいと考えているか。
> - CI プロセスの一部としての Automated Accessibility Testing に、提案されたデザインのうちどれがユースケースを満たすか。

**必要な参加者数は？**

ユーザビリティテストだったため、一般的に 5 人程度のユーザーが最適です。

**タイムラインは？**

Product Designer はいつでも開始できると述べ、休暇期間を UX Research Operations Coordinator に通知しました。

**誰と話したいと考えていましたか？**

フロントエンドエンジニアが提出されましたが、これは広すぎます。代わりに、日常的な活動に焦点を当てることで、UX Research Operations Coordinator は正確な一致を見つけられました。

### スクリーナーを作成する {#crafting-the-screener}

この例では、リクルーティングの要となった質問は本当に明確でした。UX Research Operations Coordinator は、役職名、参加者が行う一般的なタスクまたは職務上の責任、アクセシビリティ準拠の重要性をどのように認識しているかに関する質問があることを期待していました。また、調査の対象でない場合に多様な組み合わせを得ようとする、会社規模や業界など、ほぼ常に含める項目も期待していました。

この調査は、使用するツールについて尋ねない点で珍しいものです。多くの場合、GitLab の経験がある人またはない人が何を考えるかを明確に知りたいと考えます。この調査には関連しないため、その情報は収集していません。

内容を短く簡潔に保つと、スクリーナーの完了率が上がります。

**次を確認してください：**[完成したスクリーナー](https://gitlab.eu.qualtrics.com/jfe/preview/SV_cT80heuzGIlAdZH?Q_SurveyVersionID=current&Q_CHL=preview)

### リクルーティングリクエストを作成する {#opening-a-recruitment-request}

上記の会話の多くは、リクルーティングリクエストで行われました。

UX Research Operations Coordinator は、リサーチパネルからセグメントを作成する際に細心の注意を払いました。調査は多くの人が熱心に取り組むアクセシビリティに関するものだったため、カスタムの件名とメール文面を使用するのに適していました。UX Research Operations Coordinator は、件名を `New study - let's talk accessibility` としてメールを送信しました。2 通のメールの後、20 件を超える回答を受け取りました。

UX Research Operations Coordinator は、仕事でアクセシビリティテストを行い、アクセシビリティ準拠が重要であることに強く同意した人を緑色で強調しました（合計 4 人）。後者の基準のみに適合した人はオレンジ色で強調しました（9 人）。全体として、これは参加者の余剰です。しかし、次のアクセシビリティ調査が利用可能になったときに直接連絡できる参加者ができました。
