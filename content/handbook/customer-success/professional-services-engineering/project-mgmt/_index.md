---
title: "プロフェッショナルサービス プロジェクトマネジメント"
description: "GitLab PMO & Delivery チームは、プロフェッショナルサービスのデリバリーにおける卓越性を通じて、お客様の Time to Value を加速します。[PS Customer Journey](https://lucid.app/lucidchart/13d16253-7bba-4082-9b72-761c6105c7ed/edit?viewport_loc=-24156%2C-2407%2C3862%2C1831%2Cm-5o7ONTd-nK&invitationId=inv_6a3429e9-eb45-4a96-b300-dc11bd10ff35) を通じて、合意されたスコープ・タイムライン・予算内でプロジェクトを提供し、変化する顧客ニーズに対応するイテレーションを取り入れています。私たちの成功は、お客様が GitLab 製品の利点を完全に享受できるソリューションを提供することで測られます。PS の提供メニューは [こちら](https://about.gitlab.com/services/) でご確認いただけます。"
upstream_path: /handbook/customer-success/professional-services-engineering/project-mgmt/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-03T17:49:46+01:00"
---

- [プロジェクトの開始 & 計画](#project-initiate--plan)
  - [Iteration 0](#iteration-0)
  - [初回 Kantata レビュー](#initial-kantata-review)
- [デリバリー、トレーニング、モニタリング](#deliver-train-and-monitor)
  - [プロフェッショナルサービス デリバリー方法論](#professional-services-delivery-methodology)
  - [プロジェクトの健全性と予測のレポート](#reporting-project-health--forecasting)
- [イテレーションと検証](#iterate-and-validate)
- [デプロイ & クローズ](#deploy--close)

## プロジェクトの開始 & 計画 {#project-initiate--plan}

1. _Customer Epic_（SOW# + 顧客名としてラベル付けされる）には、関連するすべての顧客情報・契約情報への内部リンクが含まれます。プロフェッショナルサービス契約のリーガル承認を得た後、PS Quote が GitLab.com の [Professional Services Group](https://gitlab.com/gitlab-com/customer-success/professional-services-group) レベルで、最近販売されたプロフェッショナルサービスプロジェクトに関する Epic をトリガーします。
2. PS Customer Journey において見込みのサービスディールが「Stage 6」（クロージング）に到達すると、PSOps チームは _Customer Epic_ を参照して [_Scheduling Intake Issue_](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ww-consulting/ps-plan/-/blob/master/.gitlab/issue_templates/SchedulingIntakeQuestions.md?ref_type=heads) を見つけます。この Issue から、Resource Scheduling チームが PS リソース（PM、PSE、TA）をアサインするために必要な初期情報を集めます。ここで PM がプロジェクトに紹介されます。
3. アサインされた PM は Scheduling intake をレビューし、[Sales to Delivery Transition](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ww-consulting/ps-plan/-/blob/master/.gitlab/issue_templates/sales-to-delivery-transition.md?ref_type=heads) フェーズのレビュー／実施を開始します。

PS Project Management と PS Operations の[チーム機能](/handbook/customer-success/professional-services-engineering/#team-functions)は緊密に連携しているため、スケジューリング、レポート、請求、パートナープロセスなどのプロセスについての詳細は [PS Operations Wiki](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ps-leadership-team/ps-operations/-/wikis/home) を参照してください。

### Iteration 0 {#iteration-0}

[Iteration 0](/handbook/customer-success/professional-services-engineering/professional-services-delivery-methodology/iteration-0/) は、GitLab と顧客のプロジェクトチーム間の初期計画を含みます。Iteration 0 を適切に準備することで、リスクと期待値に早期に対処できます。

**Iteration 0 の内容サマリー:**

Iteration 0 では、プロジェクトの重要な準備段階として、以下を扱います:

- Engagement Manager から PS Delivery チームへのトランジションプロセス
- 顧客のサポートアクセスのセットアップ
- ステークホルダープランニングセッションの実施
- 顧客キックオフミーティングの開催
- 顧客との初回ディスカバリーセッションの実施
- チーム間の作業合意の確立
- プロジェクトコミュニケーション計画の策定
- GitLab プロジェクト構造の構成（PM ツーリング）

### 初回 Kantata レビュー {#initial-kantata-review}

Kantata は私たちの主要なリソース管理ソフトウェアです。ここから PMO チームはプロジェクトのスコープに対するデリバリーチームの工数をレビューし、管理することで、顧客に対するプロジェクト進捗を効果的にレポートします。これは PS の収益予測の主要な仕組みでもあります。リソースが適切に割り当てられ、予測ができるだけ正確であることを保証するため、上記のスケジュールを順守することが重要です。

1. プロジェクトにアサインされたら、PM である自分自身が Kantata でプロジェクトのリードとしてアサインされていることを確認します。
2. Kantata > Resourcing > Resource Center > Projects に移動し、Project Lead = 自分でフィルターをかけて、プロジェクトのアロケーションをレビューします。
3. Kantata > Resourcing > Resource Center > Team Members に移動して、特定のリソースの稼働状況を確認します（アロケーションを変更したり増やしたりする必要がある場合）。
4. 予約には 2 種類あります:
   - ソフト予約は、チームメンバーに対する未確定のアロケーションです（縞模様のセルで表示）。これは PM が追加する必要があります。
   - ハード予約は、確定済みのアロケーションです（色付きのセルで表示）。これも PM が追加する必要があります。
5. 新規リソースリクエストを作成するには、Resource Center > Projects に移動します。アサイン済みチームメンバーのリストの下にある「Add Team Member」または「Add unnamed Resource」をクリックし、ポップアップ上部の情報を入力して「Submit Request」をクリックします。なお、「Post」をクリックしてもリクエストは送信されません。

_Billable と NonBillable の情報_ については、[Team Metrics](/handbook/customer-success/professional-services-engineering/#team-metrics) ページを参照してください。

## デリバリー、トレーニング、モニタリング {#deliver-train-and-monitor}

### プロフェッショナルサービス デリバリー方法論 {#professional-services-delivery-methodology}

私たちはすべてのプロフェッショナルサービス契約に対して [PSDM (Professional Services Delivery Methodology)](../professional-services-delivery-methodology/_index.md) に従います。PSDM は以下を含む包括的なフレームワークです:

- GitLab を Single Source of Truth としてプロジェクトを管理する
- SOW 形式（Agile、Time and Materials、Fixed Price）に従ってプロジェクトを管理する
- プロジェクトの Velocity とイテレーションスケジュールを確立する
- Agile セレモニーとプロセスをセットアップする
- 効果的なプロジェクト追跡のためにラベルを管理する
- ステータスレポートを作成・維持する
- リスク管理のために RAID ボードをセットアップ・活用する
- 内部・顧客双方の Retrospective を実施する
- Agile の用語とベストプラクティスを順守する
- 最適なデリバリーのためにスプリント／イテレーションを管理する

### プロジェクトの健全性と予測のレポート {#reporting-project-health--forecasting}

**PMO/Ops レポートスケジュール**

- [PS reporting schedule](https://docs.google.com/document/d/1fK9HOISuISd1NLuAU2Jc3miQVe6YUACl6y-IFqshiSU/edit?tab=t.0) と月末タイムラインは、週次更新要件のために ps_pmo Slack チャンネルにピン留めされています。
- このスケジュールの目的は、プロジェクトに対する PMO の更新（健全性、予測、タイムカード）と PS Operations（レポート、リソーススケジューリング）との関係を参照・理解することです。Project Manager と Program Manager が一貫した相補的な方法でプロジェクト予測を更新し、PS Ops チームをサポートするとともに、GitLab 組織全体に PS プロジェクトポートフォリオレビューを伝達することが目標です。

- Time & Materials (T&M) プロジェクトはプロジェクトレベルで提出された時間に応じて請求されます。
- Fixed Fee プロジェクト（FF または FP）はマイルストーンスケジュールで請求されます。そのため、FF プロジェクト内のマイルストーンに予定日付を追加し、請求期間が終了する前に顧客サインオフを得ることが極めて重要です。
- _注_ SKU は 1 回の取引ですが、私たちは時間ベース（T&M）の請求に対して追跡を行います（例: Consulting Blocks や Dedicated Engineer Projects）。

**Time and Materials (T&M) と Fixed Fee (FF) の予測**

予測アロケーションは PS の収益予測とチームメンバーの稼働可能性、稼働率、計画に影響します。

- ソフトアロケーションは、最終スケジュールがまだ不明な場合に、可視化と計画のために使用します。ソフトアロケーションはチームメンバーのプロジェクトへの稼働を約束するものではなく、Upside 予測（精度 40% 想定）として扱われます。
- ハードアロケーションは、Project Coordinator の承認後、要求された時間に対してチームメンバーの稼働を約束します。割り当てられた時間は収益予測にも反映されます（精度 90-95% 想定）。
- 特定のリソースをリソースリクエストするには時期尚早だが、おおよそのプロジェクトスケジュールが見えている場合は、「unnamed resource」でハードスケジュールしてください。これにより、私たちのキャパシティニーズを把握できます。

- 予測収益が正確であることを確認するため、Kantata の Resource Center で以下を行います:
  1. 「Project Tab」を選択し、「My Projects」でフィルターをかけます
  2. アロケーション中のプロジェクトを展開して、すべての PS Engineer と自分自身が見えるようにします
  3. 各チームメンバーの名前をクリックし、開いた「activity」ウィンドウから RR リクエストを送信し、Project Coordinator を受信者として割り当てます

- FF プロジェクトの場合、予測に反映されるようにマイルストーンの日付を更新する必要があります:
  1. プロジェクトを開き、「Task Tracker」タブを開きます
  2. マイルストーンを展開します
  3. サインオフ日を更新します

**Upside の追跡方法**

- Upside は週次・月次・四半期ベースでレビューされます。週次収益追跡シート（ps-pmo チャンネルにピン留めされている）の中で Upside を追跡する必要があるシナリオは 4 つあります:
- 2 か月先のプロジェクトリソースを自信を持って予測できない場合は、Kantata で PSE/PM/TA の時間をソフト予約する必要があります。
- Kantata にまだ反映されていない保留中の CO がある場合は、PMO Manager と詳細をレビューします。
- マイルストーン日付がその四半期内に完了するように調整される見込みだが、まだ確認・検証されていない場合。
- 顧客レポートで Upside を呼び出すことが有用です。例: 「y」の制約により「x」分しかソフト予測できない、など。

**週次予測コール準備**

1. 火曜日の朝 8 時 EST までに更新
2. 「Remaining Funds to Forecast」レポートを実行
   - プロジェクトステータスを選択
   - Project Lead/PM でソート
3. すべてのプロジェクトタスクの開始／キックオフ／終了日が入力されていることを検証
4. 予測レポートを実行し、正確であることを確認
5. PMO Manager と Upside または予測の押し出し／変更をレビュー
6. 「Task Audit Report」を実行
7. Allocation レポートを実行
   - すべてのソフト予約とハード予約をレビューし、ライトブルーで表示されているすべてのチームメンバーを確認
   - これらのチームメンバーは過少アロケーションなので、仕事を見つける手助けをする！
8. すべてのソフト予約 Allocation レポートをレビュー
   - すべての役割を選択
   - 四半期全体を選択
   - プロジェクトがちょうどキックオフした場合を除き、当月にソフトアロケーションがあってはなりません
   - キックオフ後のすべてのプロジェクトでハード予約が確保されていることを確認

 **プロフェッショナルサービス ポートフォリオレポート**

- 火曜日の朝 8 時 EST までに更新
- Notes セクションで以下を更新:
  1. 1 行の進捗更新
  2. 問題がある場合、提案されるアクション + 修正のタイミング
  3. 支援が必要な場合
  4. DRI と貢献者
  5. 内部温度感（R-Y-G） | 顧客温度感（R-Y-G）
  6. Y/R の場合は RAID と Internal Customer Epic へのリンク（WE、CO、WaR をレビューするため）

## イテレーションと検証 {#iterate-and-validate}

プロジェクトスコープ変更の管理

プロフェッショナルサービスのプロジェクトスコープとは、顧客のユースケースに対してサービスを提供するために必要な作業の概要です。これには、提供される作業の概要（スコープ定義）、期間、リソース（コスト）が含まれます。これらすべては Statement of Work (SOW) に含まれます。プロジェクトスコープに変更がある場合、Project/Program Manager は以下のガイドラインに従い、適切に記録します:

1. **Change Order**
   - Change Order (CO) は、進行中のプロジェクトのスコープ定義、期間、コストを変更できる、プロフェッショナルサービス契約の一般的な要素です。[Change Order Issue](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ww-consulting/ps-plan/-/blob/master/.gitlab/issue_templates/change-order.md?ref_type=heads) と [Change Order テンプレート](https://docs.google.com/document/d/1ogvv4MkEXy9ub4bldw-8m015j49R5HB0C7ayb2xw_Ss/edit) は Project/Program Manager が作成し、Engagement Manager およびアカウントチームに伝達します。これは常に Internal Customer Epic Issue に紐付けられます。

   - 一般的なプロジェクトスコープ変更のシナリオ:
      - CO が必要なケース:
         - プロジェクト予算の追加が必要となるスコープ定義の変更。PM は EM／アカウントチームと協力して Change Order テンプレートを記入します。そこから、EM はスコープ変更を満たすために必要な金額の新規 PS Opportunity を作成します。新しい Kantata プロジェクトは PSOps チームによって作成されます。
         - 既存のプロジェクトが、元のスコープと類似のプロジェクトアクティビティと成果物で 2 か月後ろ倒しを依頼され、顧客が元の SOW を使うことに同意した場合は、延長を反映する新しい PS Opportunity に紐付く Change Order を作成する必要があります。
         - プロジェクトが T&M から FF（またはその逆）に変わる場合。
         - プロジェクトに CO が必要だと感じる場合（特に FF プロジェクトの場合）。
      - CO が不要なケース:
         - SOW の期間と予算内でプロジェクトスコープ定義に変更がある場合、Change Order は不要です。PM はスコープ定義の変更について顧客から書面による確認を得る必要があります。この書面による確認はスクリーンショット撮影の上、関連するプロジェクト Epic に添付する必要があります。
         - SOW 期限から 2 か月未満の延長については、PM は[書面による確認](https://docs.google.com/document/d/1t2mkVr0eRs67rFkEOJVRLzC6u55aLWwGB5VCZm6G-iU/edit)（メールまたは Slack から）を取得し、その確認を顧客 Epic 内の _「Scope Engagement and Write SoW」_ Issue に添付します。

2. **Work at Risk (WaR)**
   - [WaR Issue](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ww-consulting/ps-plan/-/issues/new?issue%5Bmilestone_id%5D=&issuable_template=work-at-risk&issue%5Btitle%5D=Work%20at%20Risk) は、すべての書類が確定する前にプロジェクトのスタッフィングや開始に着手するため、PS リーダーシップの承認を得る手段として機能します。この承認は、Opportunity が完全にクローズする前にプロジェクトの開始日にコミットする必要が生じた場合に必要です。これはコンサルティングプロジェクトとトレーニングプロジェクトの両方で必須です。WaR を開始する責任は、EM/AE チームとともにアサインされた Project Manager または Program Manager にあります。これにより、Delivery チームは速やかにプロジェクトのスタッフィングを開始できます。Work at Risk の承認を求める際は、上記の WaR テンプレートに記載された手順に従ってください。
   - WaR は契約が署名されるまで顧客に請求されません。
   - 一般的なシナリオ:
     - 顧客が SOW に署名する前にプロジェクトをキックオフする場合。
     - 顧客が CO に署名する前、または変更が書面で記録される前に作業を再開する場合。

3. **Work Exception (WE)**
   - Work Exception は、プロジェクトが当初割り当てられた時間／予算を超過する承認を得るために PM が使用します。[PS-Plan](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ww-consulting/ps-plan/-/issues/?sort=updated_desc&state=opened&first_page_size=100) プロジェクトに移動し、新しい Issue を追加して、Work Exception Issue テンプレートを選択／フォローし、PS リーダーシップから承認を得ます。単独で使用することも、CO と組み合わせて使用することもできます。
   - 適切な四半期会計のため、四半期末に Work Exception Issue をクローズすることを忘れないでください。
   - PM として Issue にラベルと詳細を追加することは極めて重要です。これは、私たちが内部の PS プロセスを改善する手がかりになります。

## デプロイ & クローズ {#deploy--close}

1. **プロジェクトクロージャー／レトロスペクティブミーティング**

   外部プロジェクトのレトロスペクティブをレビューするため、顧客の Point of Contact (POC) と 30 分のミーティングをスケジュールします。GitLab の Customer Project (CP) 内のレトロスペクティブ Issue テンプレートを活用し、プロジェクトを通じて両チームが共同で随時更新できる「生きた Issue」として扱うことを推奨します。クロージャーミーティングでは、このレトロスペクティブが主要なアジェンダとなり、顧客フィードバックを記録するための信頼できるソースとして機能します。ミーティングでは主要な成功要因、課題、改善領域を扱うべきです。

2. **CSAT サーベイ**

   プロジェクトクロージャーミーティングの前に、フォーマルなフィードバックを集めるため [Customer Satisfaction (CSAT) Engagement Survey](https://gitlab.gainsightcloud.com/v1/sites/survey/SurveyResponse?at=1I0025DXE6KKG8JCV1GWLAUNW5DYWBNMUL90) を送信します。コミュニケーションのテンプレート例は [こちら](https://docs.google.com/document/d/15U1LxwHCMmhlmkFHptxtuH-4w4BiLImuFkJ30Wp7BoA/edit) にあります。CSAT サーベイは顧客満足度のインサイトを提供し、将来の改善領域を浮き彫りにします。

3. **Revenue サインオフ**

   **T&M プロジェクトの Revenue Release**

   - 収益は毎月末に認識・解放されます。
   - プロジェクト工数は Kantata のタイムシート機能を通じて毎週ログする必要があります。Professional Services Engineer (PSE) または Project Manager (PM) はプロジェクトに対して工数を記録し、Project Lead または PM がこれらのエントリを毎週承認します。
   - 毎月末に、Project Coordinator (PC) はすべての承認済みタイムシートをまとめ、レビューと収益解放のために集計レポートを Finance に提出します。

   **FP プロジェクトの Revenue Release**

   - 収益は、顧客マイルストーン承認の受領時、または Passive Acceptance（SOW の条件に従う）の完了時に認識されます。
   - PM は [Project Milestone/Closure ドキュメント](https://docs.google.com/document/d/1RiS5TY5484nQuDTW8YMiB-CibVfoni7NJ8IUG2osUD0/edit?tab=t.0) のコピーを作成し、クローズのために Operations Coordinator を Cc に入れて顧客にドキュメントを添付します。顧客はドキュメント自体に署名するか、「approved」と返信します。
   - 承認されたら、PM は Kantata のマイルストーンを「complete」に設定します。
   - SOW に従って Passive Acceptance が適用される場合、顧客は 5 営業日以内に承認・拒否する必要があり、それ以降にマイルストーンを「complete」に設定できます。1 日目は通知が送信された日として数えられます。

   **Kantata の主要な更新**

   - すべての該当するマイルストーンタスクで、以下を完了します:
      - Sign-Off Sent: 承認リクエストメールが送信された時にこのカスタムフィールドを更新します。
      - Sign-Off Received: 顧客承認を受領した時、または Passive Acceptance が達成された時にこのカスタムフィールドを更新します。承認メール（PDF 形式）をマイルストーンに添付します。
   - Passive Acceptance Utilized: Passive Acceptance を使用した場合、このフィールドを適切に更新します。
   - 両方の承認シナリオで、承認メールまたはマイルストーンドキュメントをマイルストーンに添付します。
   - 実際の開始／キックオフ／終了日を更新します。

   注: トップレベルのマイルストーンフィールドのみ更新する必要があります。マイルストーン内のサブアクティビティはそのままです。

4. **内部プロジェクトレトロスペクティブ**

   GitLab アカウントチーム、GitLab PS プロジェクトチーム、Engagement Manager、Delivery Manager、TA、Practice チームと内部プロジェクトレトロスペクティブミーティングをスケジュールします。[内部レトロスペクティブ](/handbook/customer-success/professional-services-engineering/professional-services-delivery-methodology/#internal-retrospective-guidelines) は、得られた教訓、スコーピングのインサイト、継続的改善の機会を文書化するために不可欠です。

5. **Kantata の更新**

   プロジェクトが完全に完了し、すべての工数が提出・記録され、マイルストーンの承認が確認されたら（固定価格プロジェクトの場合）、Kantata のプロジェクトステータスを「Completed」に更新します。
