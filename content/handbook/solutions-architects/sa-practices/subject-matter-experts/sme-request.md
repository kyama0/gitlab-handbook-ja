---
title: SME のリクエスト方法

description: 技術的なガイダンスと専門性を提供してもらうため、オポチュニティで SME をリクエストする方法

upstream_path: /handbook/solutions-architects/sa-practices/subject-matter-experts/sme-request/
upstream_sha: fb150f3a4f831172cf23c7f0d75b0d6310a68972
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
---

オポチュニティに対して SME をどのようにリクエストするかについてシステムを整える必要があります。SME の責任の 1 つは、「共有 Slack チャンネルや顧客通話への参加を通じて、顧客デモやプレゼンテーション中に SA に技術的専門性を提供すること」です。

オポチュニティに Subject Matter Expert (SME) をリクエストするには、次の手順に従ってください。

* リクエストを送信する:
  * SME からの支援をリクエストするには、Slack チャンネルでチャンネル名の下にある「_Workflows_」タブから **SME Request** ワークフローを選択します。

  ![SME Request Workflow](/images/solution-architects/initiate_sme_request.png)

  * もしくは、ワークフローを少なくとも 1 回開いた後は、Slack のメッセージフィールドに「_/sme_」と入力して Enter を押すと、リクエストフォームを開くことができます。

  ![Slash SME Request Alternative](/images/solution-architects/slash_sme.png)

  * 可能な限り詳細を、SME が関与するために役立つコンテキストとともに記入してフォームを送信します。
    * フォームには、Account Name、SFDC Opportunity URL、リクエストする関与のタイプ、次回顧客ミーティングの日時とタイムゾーン、関与の予想期間のフィールドが含まれます。
    * フォームは、リクエストの関連詳細とその他のメタデータをキャプチャするための内部[スプレッドシート](https://docs.google.com/spreadsheets/d/1Ti0DAaY9U3XFi32urmRDLzNa0x1ApRbCeHwDghtYvWk/edit?gid=1469229077#gid=1469229077)に裏付けられています。
* 関与プロセス:
  * SME は通常、24 時間以内にリクエストを行った人に Slack で連絡します。
    * SME が 24 時間以内に関与しない場合、SME 領域リードが SME チームメンバーと協力して誰かを関与させます。
    * SME は、関連する [SME リクエストスプレッドシート](https://docs.google.com/spreadsheets/d/1Ti0DAaY9U3XFi32urmRDLzNa0x1ApRbCeHwDghtYvWk/edit?gid=1469229077#gid=1469229077) に自分の名前を追加し、割り当てが確認されたことを保証します。
    * SME は、Slack チャンネル内の SME リクエストメッセージに緑のチェックマーク絵文字を使用して、SME が関与したことを示します。
* 完了とフォローアップ:
  * 関与の後、リクエストを行った人は、SME の関与とコントリビューションに関するフィードバックを [SME リクエストスプレッドシートの Feedback Notes 列](https://docs.google.com/spreadsheets/d/1Ti0DAaY9U3XFi32urmRDLzNa0x1ApRbCeHwDghtYvWk/edit?gid=1469229077#gid=1469229077) に提供して、プロセスの改善に役立てます。
  * プロダクトマネージャーへのフォローアップが必要な場合も、フィードバックとして入力してください。
* レポートと帰属:
  * SME は、Rattle や SFDC でアクティビティを記録する際、Activity Type に「SA Assistance - Subject Matter」を使用します。

---

## **エンゲージメントのルール**

### **SME をリクエストするとき:**

1. **リードタイム:** SME は必要な時間の **48 時間** 前までにリクエストすべきです。緊急の場合はマネージャーに連絡し、エスカレーションプロセスに従って SME や PM を関与させてください。
2. **リクエストには十分なコンテキストを提供する**: 「SME に通話に参加してほしい」とか「顧客に質問がある」と言うだけではいけません。顧客が抱える質問が具体的に何であるかを明示する必要があります。分からない場合は、SME を関与させる前に顧客に確認してください。
3. **準備通話が必要**: 顧客ミーティングへの参加リクエストの場合、SME が承諾したら、そのミーティングの前に準備通話を行ってください。
4. **アジェンダが必要:** アジェンダが作成されており、それが顧客と共有されていることを確認してください。次のステップとミーティングの明確な成果が定まっていることを確認してください。
5. **事前にディスカバリーを完了する**: SME をリクエストする前に必要なディスカバリーがすべて行われていること、それが文書化されていることを確認してください。
6. **特定のシナリオでは、SME リクエストなしに直接 PM に連絡することは控える**。[下記参照](#sme-pm-alternative)。
7. **SME チャンネルを使用する:** すべてのリクエストは SME チャンネルで行うべきで、顧客 Slack チャンネルなどでは行わないでください。

### PM に関与・リクエストする前に、まず SME のリクエストを検討してください {#sme-pm-alternative}

 SME の目標は、AI、Dedicated、App Security、Plan、CICD、Metrics の専門家になり、アカウントチームと顧客がそれらを採用・利用するのを支援することです。プロダクトマネージャーがフィールドや顧客にプロダクトの使い方を教える負担を減らす必要があります。

**SME リクエストを完了せずに直接 PM に連絡することは控える**: AE、SA、または CSM が PM や Field CTO に直接リクエストする場合、リクエスト元の人に、まず [SME のリクエスト](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-request/) を検討するよう求めてください。SA／CSM である自分は、適切な SME チャンネルで SME をリクエストできます。SME が最初に関与していなかったと判断され、リクエストがエスカレーションやプロダクトの方向性に関するものでない場合、PM はすべての質問を SME Slack ハンドルを使って SME にリダイレクトするよう指示されています。

**これらのシナリオでは、PM に関与する前に SME コミュニティに関与してください。**

プロダクトマネジメントに直接関与する代わりに、次のいずれかのシナリオで適切な `sme-` Slack チャンネルで SME をリクエストまたは関与させるべきです。

1. [技術的な質問への回答](#sme-questions)
   1. `sme-` チャンネルで Stack Overflow コマンド `/stack ask` を使って質問を投稿し、SME に回答してもらいます。
   2. 質問が顧客チャンネルや `f_` チャンネルで尋ねられた場合、プロダクトマネージャーは SME Slack ハンドルを使って、これらの質問を SME にリダイレクトしても構いません。
2. [コンテンツのリクエスト。](#sme-content)
3. [デモのリクエスト。](#sme-demo)
4. [ベストプラクティスのリクエスト。](#sme-best-practice)
5. カンファレンスでのスピーチのリクエスト。
6. デモを実施する、ベストプラクティスを議論する、技術的な質問に答えるなどのために、顧客通話への参加リクエスト。
7. POV 中に支援が必要な場合。`sme-` チャンネルで SME を関与させて状況のトリアージを最初に行います。SA は SME とともに、PM を関与させる前に次のことを行うべきです。
   1. 必要な詳細情報（顧客の構成、再現手順など）を収集する
   2. 既存のドキュメント（社内・社外）または過去の Issue を検索して解決策を探す
   3. 他の SME や [Super Support Form](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) を使用してサポートに支援を求める
   4. SME は単発の質問やさらなる明確化のために PM に連絡することもできます。
8. [リファレンスアーキテクチャのコスト見積もり](https://docs.gitlab.com/ee/administration/reference_architectures/index.html#cost-calculator-templates) のリクエストや、オポチュニティ用の Dedicated 価格計算機の作成。[example](https://calculator.aws/#/estimate?id=a0cbf2cd318c0fc77d5e39c2165841418aef9ace) を参照。

#### プロダクトマネージャーに関与すべきタイミング

SA、CSM、SME が SME プログラムとともに PM とどのように関与すべきかについての完全な議論は、[SME のプロダクトマネジメントとの関わり方](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-engage-pm/#sme-pm) を参照してください。

### **SME との顧客通話中**

1. **準備:** ミーティングの前に、関係者全員と準備通話を行います。
2. **明確なアジェンダ、次のステップ、成果:** アジェンダを用意し、それが顧客と共有されていることを確認します。次のステップとミーティングの明確な成果が定まっていることを確認します。
3. **SA／CSM が技術通話のクォーターバックを務める:** SA／CSM が通話を進行すべきです。SME が参加してきたからといって、すぐに SME に任せきりにするのは避けてください。
4. **メモ取り:** SA は、メモドキュメントを SME に共有し、皆でコラボレーションできるようにします。ただし、すべてのメモのキャプチャは SA／CSM が責任を負います。
5. **振り返り:** 通話後にレトロスペクティブを行い、フォローアップを決定します。SME のフォローアップと取るべきアクションについては下記を参照してください。

### **SME 関与後: フィードバック／フォローアップの記録方法、リクエストタイプ別のアクション**

#### 一般的なガイダンス

1. 顧客のフォローアップやフィードバックが多くある場合、[SME Collaboration Group](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts) 内の SME 領域プロジェクトに **\<Customer\> SME Support Feedback Issue** を作成し、適切なアクションアイテムを記載します。
2. 必要なすべてのアクションアイテムを追加します。アクションアイテムは次のような形式にできます。
   1. [回答すべき技術的な質問（質問のリスト付き）](#sme-questions)
   2. [デモのリクエスト](#sme-demo)
   3. [ベストプラクティスのリクエスト](#sme-best-practice)
   4. [作成すべきコンテンツのリクエスト](#sme-content)
   5. [PM／顧客拡張のリクエスト](#sme-pm)
3. この Issue を、Customer Project の Customer Issue にリンクします。

**以下に記載されている各種フォローアップやリクエストタイプについて、SME が取るべきアクションです**

#### **回答すべき技術的な質問（質問のリスト付き）** {#sme-questions}

任意の SA や CSM は、適切な `sme-` チャンネルで Stack Overflow コマンド `/stack ask` を使って技術的な質問を投稿し、SME に回答してもらえます。

技術的な質問のリストが顧客通話の前または後にフォローアップとして送信された場合、SME は次の追加アクションを取ることができます。

1. このリクエストがより良いディスカバリーで防げたと考える場合、またはディスカバリー質問に追加する機会だと考える場合、[SME Collaboration Project](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts) 内の適切な SME 領域の Contents & Collaterals Issue（[Dedicated 例](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/sa-sme-team-dedicated/-/issues/7 "Contents & Collaterals - SA SME Team Dedicated") を参照）に行き、組織全体のためにディスカバリー質問を追加します。
2. 顧客との間で質問が出て、その回答を SA や CSM と共有すべき場合、アクションアイテムとして StackOverflow に追加（プロセスは TBD）し、かつ／または各 SME 領域の FAQ に質問と回答を追加します（[SME Collaboration Project](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts) の Contents & Collaterals Issue を参照）。
3. これがすべての SA や CSM、または他の SME に対してイネーブルメントすべきトピックの場合、[SME Area Collaboration Project](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts) に行き、List of Topics for SMEs Enablement に追加します（[Dedicated 例を参照](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/sa-sme-team-dedicated/-/issues/9 "List of Topics for SMEs Enablement - SA SME team Dedicated")）。SME は次回 SME ミーティングで議論したり、次回 PM／SME ケイデンスに PM を呼んだり、次回 Technical Exchange でも発表できます。

#### **デモのリクエスト** {#sme-demo}

1. デモがリクエストされた場合、SME としてデモを事前に録画するか、可能であれば顧客通話を Gong で録画し、そのデモを [Highspot の SME Hub](https://gitlab.highspot.com/items/667095b95cc9b08c87d40b68?lfrm=isd.9) または [Demo Excellence Catalog](https://gitlab.highspot.com/items/6604439000e80e153ec8b204?lfrm=isd.6) に追加してください。

#### コンテンツの共有リクエスト {#sme-content}

SA や CSM が共有するコンテンツや作成するコンテンツをリクエストした場合、プロセスは次のとおりです。

1. HighSpot 内の [SME Hub](https://gitlab.highspot.com/items/667095b95cc9b08c87d40b68?lfrm=isd.9) に行きます。
2. 適切な SME 領域に行きます。
3. 「Request New Content」または「New Content Request」ボタンをクリックします。
4. 入力する Issue テンプレートが表示されます。リクエストの内容を非常に明確かつ具体的にし、十分な内容を記載してください。例として、こちらの ["Request for Dedicated Onboarding Content"](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/sa-sme-team-dedicated/-/issues/14 "Dedicated Onboarding Doc & Instructions") を参照してください。
5. SME Workflow::Create でタグ付けします。[他のすべてのタグはこちら](https://docs.google.com/document/d/1GQxe0HdPUrE2FUlEQiC6hmWLv4NW04rO7hiAo_E-KL0/edit?tab=t.0#heading=h.ddcxwys4jiuw)。
6. `#sme-` チャンネルで Issue を共有します。

注: SME は、受け取ったすべてのコンテンツリクエストを必ず作成・制作する責任を負うわけではありません。これは、リクエストされたときに既存のアセットを共有し、HighSpot で利用可能にするように SME に求めるものです。SME は受信したリクエストを必要に応じて優先順位付けし、必要に応じて新しいコンテンツを作成する適切なリソースを特定するために働きます。

これは SME が作成・収集する責任を負うコンテンツのリストです。

-ディスカバリー質問のリスト\
-よくある質問\
-録画イネーブルメントセッションのリスト\
-ゴールデンデモのために PM と協働する\
-[ハンズオンワークショップ](/handbook/solutions-architects/tools-and-resources/workshop/)\
-技術評価ガイドライン\
-[POV](/handbook/solutions-architects/playbooks/pov/) テンプレート\
-競合インテリジェンス

#### **ベストプラクティスのリクエスト** {#sme-best-practice}

ベストプラクティス／アーキテクチャ原則のリクエストの場合、[SME Collaboration Group](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts) 内の SME プロジェクトで次のことを行います。

1. 適切な SME コラボプロジェクトの中で、ベストプラクティス、ナレッジベース、アーキテクチャ青写真のリクエストリストに追加します（例として[Dedicated Issue](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/sa-sme-team-dedicated/-/issues/10 "Knowledge Base & Architectural Blueprint Scenarios - SA SME team Dedicated") を参照）。
2. ベストプラクティスへの回答を提供することにした場合、書き上げたものを StackOverflow に投稿（プロセスは TBD）するか、少なくとも SME 領域の Issue として記録します。
3. これに関する議論が必要な場合、Pod ミーティング中に SME と会合し、ベストプラクティスを Stack Overflow（プロセスは TBD）または少なくとも SME 領域の新しい Issue として議論・成文化します。

注: SME は受信したリクエストを必要に応じて優先順位付けし、必要に応じて新しいコンテンツを作成する適切なリソースを特定するために働きます。

#### **PM／顧客拡張のリクエスト** {#sme-pm}

PM とフォローアップする必要がある場合、または顧客が拡張をリクエストした場合や顧客がフィードバックを持っている場合、SME 顧客フィードバックプロセス（TBD）に従い、次のことを行います。

1. Customer GitLab Project に Customer フィードバック Issue を作成します。リクエストとフィードバックを非常に明確に記載してください。
2. その Issue で PM をタグ付けするか、PM のエスカレーションプロセスに従います。
3. SME として、SME 内部 Slack チャンネルで PM を関与させます。
4. これが複数の顧客に影響する課題である場合、SME として顧客フィードバックプロセス（TBD）で説明されているように Epic を作成し、共通のテーマなどに基づいて作成された他の顧客 Issue をすべてリンクします。同じ問題を抱えている顧客の Issue を集めるために、地域内で同僚 SME にメッセージを送るよう依頼してください。
5. SME 通話中に SME Issue ボードをレビューします。
6. SME／PM 通話中に SME Issue ボードをレビューし、必要に応じて更新します。
