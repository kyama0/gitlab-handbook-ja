---
title: "リサーチ参加者パネルの作成と管理"
description: "リサーチ参加者パネルの作成と管理方法"
upstream_path: /handbook/product/ux/experience-research/research-panel-management/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

リサーチパネルとは、リサーチ取り組みの一環として開発されるさまざまな手法やステージを通じて、同じオプトイン参加者グループを継続的に調査することで構成される、リサーチ実施時の参加者リクルートでよく使われる手段です。このページでは、パネルを作成・管理するためのセルフサービスプロセスを説明します。

### リサーチパネルはどのような場合に使うべきか？

ニッチなトピックを扱うリサーチの参加者をリクルートするのは、多くの時間と労力を要することがあります。パネルが必要かどうかを判断する観点として、頻度、対象領域、スコープ、規模があります。特定のニッチな基準を満たす大きなグループに対して、ある Issue に焦点を当てたリサーチ（複数のリサーチ研究を含む）を長期間にわたって実施する必要がある場合は、パネルの利用を検討するタイミングです。たとえば、より大規模なエンタープライズユーザーや、SAST ツールの使用経験があり、セキュリティツール／プラクティスの使用に関わる役割を持つ Ultimate ユーザーなどが該当します。

パネルを利用する際の長所と短所も検討することが重要です:

**長所:**

- 同じ参加者を複数のリサーチイニシアチブにわたって追跡することで、時間や異なるプロダクト領域を通じたトレンドや変化を追跡しやすくなる。
- 一貫した関与を通じて、参加者についての深い知識と理解を得られる機会が増える。
- 難しい、あるいはニッチなユーザープロファイルが対象の場合、参加者を短期間でリクルートできる可能性が高まる。

**短所:**

- 参加者が過度な頻度でリサーチ参加を依頼されると参加者疲労が起こり、パネル参加者をリフレッシュする必要が出てくる可能性がある。
- 同じ人を何度も調査するとバイアスが生じ始める可能性があり、可能な限り多くのユーザーを代表するのではなく、少数のユーザーからのフィードバックに過剰依存することにつながる場合がある。参加者がリサーチパターンを認識して、より自然でない応答をしてしまう可能性もある。
- 適切な参加者がまだ含まれているか、個人の多様性が適切に保たれているかを確認するため、パネルを定期的に更新する必要がある。

最初に、次の質問に答えることで、パネルがあなたのプロジェクトに適した解決策かどうかを判断するのに役立ちます。

- *なぜパネルが必要ですか？*
  - パネルは、通常リクルートが難しいユーザーに最適です。これは、その数が少ない場合（例: エンタープライズユーザー）、属性が専門的で見つけにくい場合（例: Kubernetes の豊富な経験）、または過去にリクルートが難しかった場合（例: Self-Managed ユーザー）です。
- *このパネルはどれくらいの期間維持する必要がありますか？*
  - パネルを最も効果的にするためには、期間を設定することが重要です。少数ユーザーのフィードバックに過剰依存して結果がバイアスされるのを防ぎます。Research Operations はパネル参加者への過剰依存を避けるため、パネルを 6 ヶ月以下にすることを推奨しています。
- *パネルはどの程度の規模が必要ですか？*
  - パネルのサイズの目安から始めましょう。これはパネルのゴールや参加者セッションの頻度に依存します。一般的なガイダンスとしてのデータポイントを示すと、UX Researcher が過去に作成したパネルサイズは 30〜500 人の範囲でした。
- *パネリストと頻繁にコミュニケーションを取り、関心を維持できますか？*
パネルはコミットメントです。登録時に提供したスケジュールに沿って、パネリストとコミュニケーションを維持し、関心を引き続ける能力があることを確認する必要があります。

推奨されるコミュニケーション頻度:

- **選定時:** パネリストが選定されたら、何を期待すべきかを伝えます。
- **月次:** リサーチ取り組みや今後のリサーチセッションについてのアップデートを含めることができます。
- **終了時:** パネルが不要になったとき。

### パネルを使ってリサーチを作成・実施する方法

#### パネルの DRI を立てる

パネルを作成する前に、Panel DRI を立てる必要があります。この人物は、パネル作成のステップ、参加者とのコミュニケーション、パネルの管理と追跡に責任を負います。

#### パネルの作成

パネルを作成するには、以下のステップに従ってください。質問があれば、UX Research Operations Coordinator に連絡してサポートを依頼してください。

1. **パネリスト基準の決定**
    - 参加者を特定する基準の選定方法については、[このリンク](/handbook/product/ux/experience-research/recruiting-participants/#identify-your-target-audience)を確認してください。
    - 担当者: リサーチプロジェクト DRI
1. **パネルを維持・利用する期間のタイムラインを設定する**
    - パネルが長期間続くほど、同じ参加者を過剰利用する可能性が高まります。
    - 担当者: リサーチプロジェクト DRI
1. **リサーチリクルートメントリクエストを作成して参加者を見つける**
    - パネルに人員を入れるため、[リサーチリクルートメントリクエスト](/handbook/product/ux/experience-research/recruiting-participants/#how-to-recruit-participants-when-you-arent-sure-where-to-find-them)をオープンし、リクエストがリサーチパネル用であることを示します。
    - 自分で参加者を見つけ、このステップをスキップすることもできます。
    - 担当者: Panel DRI と Research Operations
1. **パネルに含めるメンバーを決定し、[Panel Tracking & Reimbursement Template](https://docs.google.com/spreadsheets/d/1uQO7BfvXCB-ysIRMivH5ReG8LB5nptGw0ma7E4Rz5gM/copy) を使って参加者を集計する**
    - 回答者がスクリーナーを完了した後、回答をレビューし、基準に基づいてパネルに適格な人物を判断します。
    - パネリストとその情報を [Panel Tracking & Reimbursement Template](https://docs.google.com/spreadsheets/d/1uQO7BfvXCB-ysIRMivH5ReG8LB5nptGw0ma7E4Rz5gM/copy) の Panelist Information シートに追加します。そのためには、Qualtrics から結果をダウンロードし、Panelist Information シートに転記します。
    - 担当者: Panel DRI
1. **参加者に対して、パネル参加について、リサーチ取り組みの連絡先、参加頻度・期間について連絡する。** [参加者へのコミュニケーションガイドラインを参照](/handbook/product/ux/experience-research/research-panel-management/#panel-management-and-tracking)。
    - 担当者: Panel DRI
    - テンプレートについては [参加者へのメールコミュニケーション例](https://docs.google.com/document/d/1vEthOeiZl-yly-afd6eZrh5DIXL-DzH79BZBOKxzqlM/edit?usp=sharing)を参照してください。

#### パネルを使ってリサーチを実施する

パネルを設立したら、次のステップに従ってパネル参加者を活用します。

1. **パネル内で連絡したい参加者を特定する**
    - 研究によっては、パネリストと他のリクルート手段の組み合わせを使うことがあります。
    - [Panel Tracking & Reimbursement](https://docs.google.com/spreadsheets/d/1uQO7BfvXCB-ysIRMivH5ReG8LB5nptGw0ma7E4Rz5gM/copy?usp=sharing) テンプレートで、過去にどれだけのリサーチに参加したかを確認します。暦年中に 60 分セッションに 4 回参加していれば、パネルから外します。
    - 担当者: Panel DRI
1. **セッションをスケジュールする**
    - [Calendly を使ってセッションをスケジュール](/handbook/product/ux/experience-research/recruiting-participants/#create-a-calendly-event)します。パネリストとセッションをスケジュールする際に使える[メールテンプレート](https://docs.google.com/document/d/1vEthOeiZl-yly-afd6eZrh5DIXL-DzH79BZBOKxzqlM/edit?usp=sharing)もあります。
    - 担当者: Panel DRI
1. **インセンティブリクエストを提出して参加者に謝礼を支払う**
    - 研究参加に応じて謝礼を支払うために、既存のインセンティブプロセスに従って[インセンティブリクエスト](/handbook/product/ux/experience-research/recruiting-participants/#when-do-i-submit-an-incentives-request-with-ux-research-operations)を提出します。
    - 担当者: Panel DRI

**パネル運用中は、パネリスト情報と関与を継続的に管理・追跡する必要があります。[Panel management and tracking](/handbook/product/ux/experience-research/research-panel-management/#panel-management-and-tracking) セクションを参照してください。**

### パネリストとのコミュニケーションに関するガイドライン

パネルの 1 つのゴールは、参加者の関心を維持し、過度なコミュニケーションによる疲労によって参加意欲を失わせないことです。以下は、パネルとのコミュニケーション方法に関するガイドラインです:

- リクルート用スクリーナーの中で、コミュニケーションガイドラインを最初に明示しましょう（例: どのくらいの頻度で連絡するか、誰が連絡するか、どう連絡するか、チームメンバーがどのように連絡を調整するか）。ガイドライン内にとどまるため、Google カレンダーにリマインダーをセットします。
- 一貫性が鍵です。参加者に月 3 回のコミュニケーションをすると伝えたら、それ以下でもそれ以上でもなく送ります。設定した期待値から逸脱すると、パネリストにリサーチが組織化されていない、または真剣でないと思わせ、関心低下を招く可能性があります。
- [Panel Tracking & Reimbursement Template](https://docs.google.com/spreadsheets/d/1uQO7BfvXCB-ysIRMivH5ReG8LB5nptGw0ma7E4Rz5gM/copy) でパネリストへのコミュニケーション頻度を追跡しましょう。パネリストへの連絡は月 1 回以上行わないでください。
- 参加者が指定された連絡窓口に連絡した場合、週内であれば 24 時間以内に返信する必要があります（さもなければ翌営業日まででも可）。応答性と一貫した関与は最優先事項です。
  - 指定された連絡窓口が PTO（休暇）に入る際は、パネリストとのコミュニケーションをカバーする人物がいることを確認してください。

### パネルの管理と追跡

リサーチ取り組みに含める参加者リストの調査と集計を完了したら、コミュニケーション、参加、インセンティブに関連するすべてのパネリスト活動を追跡する必要があります。

パネルを管理するには [Panel Tracking & Reimbursement Template](https://docs.google.com/spreadsheets/d/1uQO7BfvXCB-ysIRMivH5ReG8LB5nptGw0ma7E4Rz5gM/copy?usp=sharing) を使います。このスプレッドシートには、パネルが有効な期間中の各パネリスト、その活動、受け取った謝礼に関するすべての情報が含まれます。

スプレッドシートの使い方:

トラッカースプレッドシートには 3 つの個別シートがあります。

- **Panelist Information** シートには、すべてのパネル参加者と、初期スクリーナーからの一般的なサーベイ情報が含まれます。このシートを使ってパネリスト情報を保管し、参加者をソースします。テンプレートの 1 行目は例として記入済みです。
  - 列には以下が含まれます:
    - First name（名）
    - Last name（姓）
    - Email
    - Sign-up source（例: Qualtrics、CSM 経由）
    - Country
    - Outreach total - 参加者が受けた連絡の総数を表示する自動更新列。
    - Session total - 参加者が参加したセッションの総数を表示する自動更新列。パネリストが 3 セッション参加するとセルがオレンジになり、4 セッションになると赤になります。
    - Participant rating - 参加状況を表す全般的な評価を提供。
    - Notes - セッションでの参加者の様子や、再利用する／しない理由、リサーチに関連する可能性のあるその他の事項に関する追加情報を提供。
    - Job title または persona
    - Screener response/demographics - これらの列は無制限で、特定のスクリーナーに合わせてカスタマイズできます。最初の列に、最も気にしている属性（会社規模、業界など）を追加することを検討してください。多様なパネルを確保するため、追加列を追跡します。これらはパネルごとやステージグループごとに異なる可能性があります。
- **Panelist Reimbursement** シートは Research Operations と連携して謝礼支払いや、パネリストが参加したセッション数を追跡するために使います。1 行目は例として記入済みです。
  - 列には以下が含まれます:
    - First name
    - Last Name
    - Email Address
    - Project DRI
    - Research Issue
    - Session Length
    - Amount
    - Country
    - Paid - セッション後に記入
    - Participation Date - 参加者が異なる日付で参加するたびに新しい行が作成されます。
- **Outreach** シートは、すべてのパネリスト連絡を追跡するために使います。連絡を送るたびにパネリスト情報を貼り付ける必要があります。Panelist Information シートのサマリー情報を自動更新します。
  - 列には以下が含まれます:
    - Email
    - Date
    - Outreach type
    - Notes

**1 年あたり 1 参加者につき合計 $600 の謝礼を超えないようにするため、パネリストは会計年度ごとに 60 分セッションを 4 回までしか参加できません。** パネリストが暦年で 4 回の 60 分セッションに達したら、それ以上は研究に参加できなくなります。パネリストをパネルから外し、参加対象外になったことを伝えてください。

**[Panel Tracking & Reimbursement Template](https://docs.google.com/spreadsheets/d/1uQO7BfvXCB-ysIRMivH5ReG8LB5nptGw0ma7E4Rz5gM/copy) を安全な場所に保管するため、シートを [UX Research Google Shared Drive の Research Panels フォルダ](https://drive.google.com/drive/folders/1jVYpf5YWEFTdSriKrYHP59rsiE8SbuGi?usp=sharing)に保管する必要があります。共有設定は、必要なアクセス権を持つチームメンバーに制限してください。**

### 個人を特定できる情報（PII）の管理

パネル管理の際、個人を特定できる情報（PII）の保護は担当者の責任です。通常これは Research Operations が行いますが、チームが自前でパネルを作成する際は、参加者とそれに関連する PII の管理は担当チームの責任となります。[ORANGE に分類される](/handbook/security/policies_and_standards/data-classification-standard/#orange)データのベストプラクティスを確認し、この [PII の概要](https://dataprivacymanager.net/what-is-personally-identifiable-information-pii/)に慣れておきましょう。

パネル内で PII を扱う際は、常に次のベストプラクティスに従ってください:

- 必要最小限の情報のみを収集します。収集する可能性が高いデータ:
  - First name
  - Last name
  - Email
  - Sign-up source（例: Qualtrics、CSM 経由）
  - Country
  - Job title または persona
  - Screener response/demographics

特に目的なくデータを収集するために集めるのはやめましょう。たとえば、職務在籍期間がリサーチに関係ない場合は「役職在籍期間」を収集しないでください。

- 公共のワークスペースで作業している場合、画面にパネル情報を表示してはいけません。
- データが侵害された場合（[GitLab のデータ分類](/handbook/security/policies_and_standards/data-classification-standard/#data-classification-levels)参照）は、[セキュリティインシデント](/handbook/security/security-operations/sirt/engaging-security-on-call/#engage-the-security-engineer-on-call)を作成して報告してください。
- [GitLab のプライバシーポリシー](https://about.gitlab.com/privacy/)を遵守することを忘れないでください。
- 参加者からは次のリクエストがある可能性があります
  - **パネルからの削除:** 削除した上で、Research Operations チームメンバーに連絡して、他のアクティブパネルや他のコミュニケーションからも削除されることを確認してください。
  - **自身の個人データの閲覧:** [Personal data request](/handbook/legal/privacy/gdpr/) を提出して、購読しているリストを確認できます。このリクエストには Research Operations チームメンバーに連絡してサポートを依頼してください。

### GitLab におけるパネル運用例は？

[こちらの例](https://gitlab.com/gitlab-org/ux-research/-/issues/1894)は、Verify と Package が使ったパネルです。チームは複数の研究にまたがって使える[共通スクリーナー](/handbook/product/ux/experience-research/recruiting-participants/common-screener/)をドラフトするためにこの Issue を作成し、リクルート活動を迅速化しました。このシナリオでは、見つけにくいユーザープロファイルのリソースをプールすることがゴールでした。

Researcher はこの Issue を構築するために以下の観点をまとめました:

- ターゲットペルソナ
- スクリーナーを使用する研究の種類
- 研究フォーマット
- プロダクトステージ

### ヒントとコツ

- **リクルートソースは組み合わせ可能です。** たとえば、パネルから一部の参加者を、他のソースから一部の参加者をリクルートできます。これによりパネルからの過剰サンプリングを避けられます。同じ人を 1 年に研究で 4 回以上使用しないでください。
- **パネリストとの信頼関係を築きましょう。** 何度も話す可能性があるので、つながりを築けます。
- **研究参加リクエストを全リストに一度に送るのではなく、波状に送ることを検討してください。** たとえば、1,000 人のパネルがある場合、100 人ずつの波で研究参加リクエストを送り、パネル全体を一度に使い切らないようにします。
- **迷ったときは聞きましょう。** パネルの開始や管理に関する質問や疑問があれば、アドバイスを求めて [#uxr_reops チャンネル](https://join.slack.com/share/enQtNDA1MTM1NDUwNjgwNC05MjFlNDFhYzIwNjczN2UxYTg2NTk3Mjk1NzVmYzA1MmQ4Y2U5ZTRiNzcwNTVhZDkwNjgzZmFkNTdlZjNhYjYw)に投稿しましょう。
