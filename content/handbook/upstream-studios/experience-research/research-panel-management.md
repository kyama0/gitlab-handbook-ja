---
title: "リサーチ参加者パネルの作成と管理"
description: "リサーチ参加者パネルを作成・管理する方法"
upstream_path: /handbook/upstream-studios/experience-research/research-panel-management/
upstream_sha: a15c0bfc1dd89fbbe4aff8969605eb60ab63f1ca
lastmod: "2026-07-16T17:32:42-03:00"
translated_at: "2026-07-17T07:37:26+09:00"
translator: codex
stale: false
---

リサーチパネルは、リサーチ作業の一部として開発されるさまざまな手法と段階を通じて、参加に同意した同じグループを調査するリサーチを実施する際に、参加者をリクルーティングするためのよく使用される手段です。このページでは、パネルを作成・管理するセルフサービスプロセスを説明します。

### リサーチパネルを使用するべきなのはいつですか？ {#when-should-i-use-a-research-panel}

ニッチなトピックのリサーチのために参加者をリクルーティングするには、見つけるまでに多くの時間と労力がかかることがあります。パネルが必要かどうかを考える際には、頻度、専門領域、範囲、規模をすべて考慮します。ある Issue に焦点を当てた特定のニッチな基準の周囲に、長期にわたってより大きなグループが必要な場合（複数のリサーチ調査を含む）、パネルの使用を検討するタイミングです。たとえば、大規模なエンタープライズユーザー、または SAST ツールの使用経験があり、セキュリティツールやプラクティスの使用を伴うロールを持つ Ultimate ユーザーなどです。

パネルを使用する際には、さまざまな長所と短所を考慮することも重要です：

**長所：**

- 同じ参加者を複数のリサーチイニシアチブにわたって追跡し、時間経過と異なるプロダクト領域全体の傾向と変化を追跡できる機会。
- リサーチへの継続的な参加を通じて、参加者に関する深い知識と理解を得られる可能性が高くなる。
- 特に難しい、またはニッチなユーザープロファイルの場合、迅速なタイムラインで参加者をリクルーティングできる能力。

**短所：**

- 調査への参加についてユーザーに頻繁に連絡しすぎると参加者が疲弊し、パネル参加者を更新する必要につながる場合がある。
- 同じ人に複数回アンケートを実施するとバイアスが生じ始め、できる限り多くのユーザーを代表するのではなく、少数のユーザーのフィードバックを過度に重視する可能性がある。参加者はリサーチのパターンを認識し始め、より不自然な方法で回答する場合もある。
- 適切な参加者が引き続き含まれ、適切な個人の組み合わせがあることを確認するため、パネルを定期的に更新する必要がある。

初めに、次の質問に答えると、パネルがプロジェクトに適したソリューションかを判断できます。

- *なぜパネルが必要ですか？*
  - パネルは、通常はリクルーティングが難しいユーザーに使用するのが最適です。人数が少ない（例：Enterprise ユーザー）、専門的な属性があり見つけにくい（例：Kubernetes の豊富な経験）、または過去に私たちがリクルーティングしにくかった（例：自己管理ユーザー）場合です。
- *このパネルをどのくらい維持する必要がありますか？*
  - パネルを最も効果的にするには、少数のユーザーのフィードバックを過度に重視して結果にバイアスがかからないよう、期間を設定することが重要です。Research Operations は、パネル参加者を過度に重視しないため、パネルを 6 か月以内とすることを推奨します。
- *パネルはどの程度の規模が必要ですか？*
  - 必要なパネル規模の見当を付けて始めてください。これは、パネルの目標と参加者セッションの頻度により異なります。一般的なガイダンスのデータポイントとして、過去に UX Researcher が作成したパネル規模は 30〜500 人のパネリストでした。
- *パネリストとの関わりを維持するため、頻繁にコミュニケーションできますか？*
パネルはコミットメントです。登録時に提供したスケジュールに従って、コミュニケーションを維持しパネリストと関わる能力があることを確認する必要があります。

推奨するコミュニケーションの頻度：

- **選定時：**パネリストがパネル参加者に選ばれたら、何を期待できるかを知らせます。
- **毎月：**リサーチ作業または今後のリサーチセッションに関する最新情報を含める場合があります。
- **終了時：**パネルが不要になったとき。

### パネルを作成し、パネルを使用してリサーチを実施する方法は？ {#how-do-i-create-and-conduct-research-using-a-panel}

#### パネルの DRI を定める {#establish-a-dri-for-the-panel}

パネルを作成する前に、Panel DRI を定める必要があります。この担当者は、パネル作成の手順、参加者とのコミュニケーション、パネルの管理と追跡に責任を持ちます。

#### パネルを作成する {#creating-a-panel}

パネルを作成するには、以下の手順に従ってください。質問がある場合は、支援のため UX Research Operations Coordinator に連絡してください。

1. **パネリストの基準を決定する**
    - 参加者を特定する基準選択に役立つ情報については、この[リンク](/handbook/upstream-studios/experience-research/recruiting-participants/#identify-your-target-audience)をレビューしてください。
    - 担当者：リサーチプロジェクトの DRI
1. **パネルを維持・使用する予定期間のタイムラインを設定する**
    - パネルの運用期間が長いほど、同じ参加者を過度に使用する可能性が高まります。
    - 担当者：リサーチプロジェクトの DRI
1. **リサーチのリクルーティングリクエストを作成して参加者を見つける**
    - パネルを構成するには、[リサーチのリクルーティングリクエスト](/handbook/upstream-studios/experience-research/recruiting-participants/#how-to-recruit-participants-when-you-arent-sure-where-to-find-them)を作成し、リクエストがリサーチパネル用であることを示します。
    - 自分で参加者を見つけ、この手順をスキップすることもできます。
    - 担当者：Panel DRI と Research Operations
1. **誰をパネルに入れるか決め、[Panel Tracking & Reimbursement Template](https://docs.google.com/spreadsheets/d/1uQO7BfvXCB-ysIRMivH5ReG8LB5nptGw0ma7E4Rz5gM/copy)を使用して参加者をまとめる**
    - 回答者がスクリーナーを完了した後、回答をレビューし、基準に基づいて誰がパネルの対象となるかを判断する必要があります。
    - [Panel Tracking & Reimbursement Template](https://docs.google.com/spreadsheets/d/1uQO7BfvXCB-ysIRMivH5ReG8LB5nptGw0ma7E4Rz5gM/copy)の Panelist Information シートに、パネリストとその情報を追加します。そのためには、Qualtrics から結果をダウンロードし、Panelist Information シートに転記します。
    - 担当者：Panel DRI
1. **パネルに含まれること、リサーチ作業における連絡先、参加頻度と期間について参加者に伝えます。**[参加者への連絡に関するコミュニケーションガイドライン](/handbook/upstream-studios/experience-research/research-panel-management/#panel-management-and-tracking)を参照してください。
    - 担当者：Panel DRI
    - テンプレートについては、[参加者向けメールコミュニケーションの例](https://docs.google.com/document/d/1vEthOeiZl-yly-afd6eZrh5DIXL-DzH79BZBOKxzqlM/edit?usp=sharing)を参照してください。

#### パネルを使用してリサーチを実施する {#conducting-research-with-your-panel}

パネルを確立した後、パネル参加者を活用するには次の手順に従います。

1. **パネル内で連絡したい参加者を特定する**
    - 調査によっては、パネリストと他のリクルーティング手法を組み合わせて使用したい場合があります。
    - [Panel Tracking & Reimbursement](https://docs.google.com/spreadsheets/d/1uQO7BfvXCB-ysIRMivH5ReG8LB5nptGw0ma7E4Rz5gM/copy?usp=sharing)テンプレートで、これまでの調査に何回参加したかを確認してください。暦年内に 60 分のセッションへすでに 4 回参加している場合、パネルから削除してください。
    - 担当者：Panel DRI
1. **セッションをスケジュールする**
    - [Calendly を使用してセッションをスケジュール](/handbook/upstream-studios/experience-research/recruiting-participants/#create-a-calendly-event)してください。パネリストとのセッションをスケジュールする際に使用できる[メールテンプレート](https://docs.google.com/document/d/1vEthOeiZl-yly-afd6eZrh5DIXL-DzH79BZBOKxzqlM/edit?usp=sharing)はこちらです。
    - 担当者：Panel DRI
1. **インセンティブリクエストを送信して参加者に謝礼を支払う**
    - パネリストが調査に参加するたびに謝礼を支払うには、[インセンティブリクエスト](/handbook/upstream-studios/experience-research/recruiting-participants/#when-do-i-submit-an-incentives-request-with-ux-research-operations)を送信することで、既存のインセンティブプロセスに従ってください。
    - 担当者：Panel DRI

**パネルを使用する際は、パネリストの情報とエンゲージメントを継続的に管理・追跡する必要があります。[パネルの管理と追跡](/handbook/upstream-studios/experience-research/research-panel-management/#panel-management-and-tracking)セクションを参照してください。**

### パネリストとコミュニケーションする際のガイドライン {#guidelines-when-communicating-with-panelists}

パネルの目標の 1 つは、参加者のエンゲージメントを維持し、過度なコミュニケーションによる疲弊で参加したくなくなることを避けることです。パネルとのコミュニケーションに関するガイドラインを以下に示します：

- 連絡頻度、連絡者、連絡方法、チームメンバー間で連絡を調整する方法など、コミュニケーションガイドラインを最初にリクルーティングスクリーナー内で概説します。ガイドラインを守るため、Google カレンダーにリマインダーを設定してください。
- 一貫性が重要です。参加者に月に合計 3 回のコミュニケーションを受け取ると伝えた場合、3 回未満にも 3 回超にもならないようにしてください。設定した期待から逸脱すると、リサーチが組織化されていない、または真剣でないとパネリストに思わせ、離脱につながる可能性があります。
- [Panel Tracking & Reimbursement Template](https://docs.google.com/spreadsheets/d/1uQO7BfvXCB-ysIRMivH5ReG8LB5nptGw0ma7E4Rz5gM/copy)で、パネリストとどの程度頻繁にコミュニケーションしているかを追跡してください。パネリストに月 1 回を超えて連絡しないでください。
- 参加者が指定された連絡先に連絡した場合、平日であれば 24 時間以内に返信する必要があります（それ以外の場合は次の営業日で十分です）。応答性があり、一貫して関わることを最優先にしてください。
  - 指定された連絡先が PTO に入る場合、パネリストとのコミュニケーションを担当する人がいることを確認してください。

### パネルの管理と追跡 {#panel-management-and-tracking}

リサーチ作業に含める参加者のアンケートを実施し、リストをまとめたら、コミュニケーション、参加、インセンティブに関連するすべてのパネリスト活動を追跡する必要があります。

パネルを管理するには、[Panel Tracking & Reimbursement Template](https://docs.google.com/spreadsheets/d/1uQO7BfvXCB-ysIRMivH5ReG8LB5nptGw0ma7E4Rz5gM/copy?usp=sharing)を使用してください。このスプレッドシートには、パネルがアクティブな間の各パネリスト、活動、受け取る謝礼に関するすべての情報を含めます。

スプレッドシートの使用方法：

トラッカースプレッドシートには 3 つの個別シートがあります。

- **Panelist Information**シートには、初期スクリーナーから得たすべてのパネル参加者と一般的なアンケート情報を含めます。このシートを使用してパネリストに関する情報を保存し、参加者を探します。テンプレートの最初の行には例としてデータが入力されています。
  - 列には次が含まれます：
    - 名
    - 姓
    - メールアドレス
    - 登録ソース（つまり、Qualtrics、CSM）
    - 国
    - 連絡総数 - 参加者が受け取った連絡の合計数を示す自動更新列。
    - セッション総数 - 参加者が参加したセッション総数を示す自動更新列。パネリストが 3 セッションに参加するとセルはオレンジ色で強調され、4 セッションに参加すると赤色になります。
    - 参加者評価 - 参加状況を説明する一般的な評価を提供します。
    - 注記 - セッションでの参加者の様子、再度使用する／しない理由、リサーチに関連する可能性があるその他の特筆事項に関する追加情報を提供します。
    - 役職名またはペルソナ
    - スクリーナー回答／属性 - これらの列は無制限で、特定のスクリーナーに合わせられます。会社規模、業界など、最も関心のある属性を最初の列に追加することを検討してください。多様なパネルを確保するため、追加の列を追跡してください。これらはパネルごと、またはステージグループ間で異なる場合があります。
- **Panelist Reimbursement**シートは、謝礼のために Research Operations と連携して使用し、パネリストが参加するセッション数を追跡します。最初の行には例としてデータが入力されています。
  - 列には次が含まれます：
    - 名
    - 姓
    - メールアドレス
    - プロジェクト DRI
    - Research Issue
    - セッションの長さ
    - 金額
    - 国
    - 支払済み - セッション後に完了します
    - 参加日 - 参加者が参加した日ごとに新しい行を作成します。
- **Outreach**シートは、すべてのパネリストへの連絡を追跡するために使用します。連絡を送信するたびにパネリスト情報を貼り付ける必要があります。Panelist Information シートの要約情報が自動更新されます。
  - 列には次が含まれます：
    - メールアドレス
    - 日付
    - 連絡の種類
    - 注記

**参加者 1 人あたり年間合計 600 ドルの謝礼を超えないよう、パネリストは会計年度ごとに 60 分のセッションへ 4 回しか参加できません。**パネリストが暦年ごとの 60 分セッション 4 回の上限に達したら、調査に参加する資格はなくなります。パネリストをパネルから削除し、資格がなくなったことを伝えてください。

**[Panel Tracking & Reimbursement Template](https://docs.google.com/spreadsheets/d/1uQO7BfvXCB-ysIRMivH5ReG8LB5nptGw0ma7E4Rz5gM/copy)を安全な場所に保管するには、シートを [UX Research Google Shared Drive の Research Panels フォルダー](https://drive.google.com/drive/folders/1jVYpf5YWEFTdSriKrYHP59rsiE8SbuGi?usp=sharing)に保存する必要があります。共有設定は、必要なアクセス権を持つチームメンバーに制限してください。**

### Personally Identifiable Information（PII）の管理 {#managing-personally-identifiable-information-pii}

パネルを管理する際、Personally Identifiable Information（PII）を保護する責任があります。通常は Research Operations が行いますが、チームが独自のパネルをセルフ作成する場合、参加者とそれに関連する PII を管理する責任があります。[ORANGE に分類される](/handbook/security/policies_and_standards/data-classification-standard/#orange)データのベストプラクティスをレビューし、[PII の概要](https://dataprivacymanager.net/what-is-personally-identifiable-information-pii/)をよく理解してください。

パネル内で PII を扱う際は、常に次のベストプラクティスに従ってください：

- 個人について必要な最小限の情報のみを収集してください。収集する可能性が高いデータ：
  - 名
  - 姓
  - メールアドレス
  - 登録ソース（つまり、Qualtrics、CSM）
  - 国
  - 役職名またはペルソナ
  - スクリーナー回答／属性

非特定の目的のために利用可能にするだけのデータを収集しないでください。たとえば、ロールの在職期間がリサーチ作業に関連しない場合は、「ロールに就いている期間」を収集しないでください。

- 誰かが公共のワークスペースで作業している場合、画面にはパネル情報を表示しないでください。
- 侵害されたデータは、[GitLab のデータ分類](/handbook/security/policies_and_standards/data-classification-standard/#data-classification-levels)を参照し、[セキュリティインシデント](/handbook/security/security-operations/sirt/engaging-security-on-call/#engage-the-security-engineer-on-call)を作成して報告してください。
- [GitLab のプライバシーポリシー](https://about.gitlab.com/privacy/)に従うことを忘れないでください。
- 参加者は次をリクエストできます：
  - **パネルからの削除：**参加者を削除し、他のアクティブなパネルとその他のコミュニケーションからも削除されるよう、Research Operations チームメンバーに連絡してください。
  - **個人データの確認：**登録しているリストを確認するため、[個人データリクエスト](/handbook/legal/privacy/gdpr/)を送信できます。このリクエストについては、Research Operations チームメンバーに支援を依頼してください。

### GitLab で実際に使用されているパネルの例はありますか？ {#what-is-an-example-of-a-panel-in-action-at-gitlab}

Verify と Package が使用したパネルの[例はこちら](https://gitlab.com/gitlab-org/ux-research/-/issues/1894)です。チームはリクルーティング作業を迅速化するために、複数の調査で使用できるパネル向けの[共通スクリーナー](/handbook/upstream-studios/experience-research/recruiting-participants/common-screener/)をドラフトするためにこの Issue を作成しました。このシナリオでは、見つけにくいユーザープロファイルに向けたリソースをプールすることが目標でした。

リサーチャーは、この Issue を基に次の側面を構築することを概説しました：

- 対象ペルソナ
- スクリーナーを使用する調査の種類
- 調査形式
- プロダクトステージ

### ヒントとコツ {#tips-and-tricks}

- **リクルーティングソースは組み合わせられます。**たとえば、パネルから一部の参加者を、他のソースから一部の参加者をリクルーティングし、パネルからのサンプル過多を避けることができます。同じ人を調査で年に 4 回を超えて使用しないでください。
- **パネリストとの関係を築いてください。**複数回話す場合があるため、パネリストとのつながりを築けます。
- **リサーチ参加リクエストをリスト全体へ送るのではなく、波に分けて送ることを検討してください。**たとえば、1,000 人のユーザーのパネルがある場合、リサーチ参加リクエストを 100 人ずつの波に分けて送信し、パネル全体を一度に使い果たさないようにします。
- **迷ったら尋ねてください。**パネルの開始または管理のどの側面についても質問や疑問がある場合は、アドバイスを求めて [#uxr_reops チャンネル](https://join.slack.com/share/enQtNDA1MTM1NDUwNjgwNC05MjFlNDFhYzIwNjczN2UxYTg2NTk3Mjk1NzVmYzA1MmQ4Y2U5ZTRiNzcwNTVhZDkwNjgzZmFkNTdlZjNhYjYw)に連絡してください。
