---
title: UX Forum
description: >-
  UX フォーラムは、UX チームメンバーが自分の仕事を共有し議論する定期的なミーティングです。
upstream_path: /handbook/product/ux/ux-forum/
upstream_sha: d5d611a2a400e4ac2527f89559e7ae9a013a9b21
lastmod: "2026-06-15T07:58:19-05:00"
translated_at: "2026-06-15T14:00:00Z"
translator: claude
stale: false
---

## UX フォーラムについて

{{% product/ux-forum %}}

### 目的

- ビジネス、プロダクト、ユーザーの成果を強調することで、UX を通じて提供される価値への認識を高める
- 発見、機会、ソリューションへの可視性を高める
- より広い組織への UX 活動の露出を高める
- ミーティング中およびその後のステージをまたいだコラボレーションを促進することで、仕事の品質を高める

### 対象者

- プロダクトデザイナー、リサーチャー、テクニカルライター（発表者）
- Upstream Studios
- Product division
- Engineering division

### スケジュール

フォーラムは 2 週間ごとに開催されます。最大 3 名のチームメンバーがそれぞれ 15 分間共有し、加えて参加者との議論に 5 分間を取れるよう、60 分間です。スケジュールの柔軟性を持たせるために 4 番目の発表者枠も用意されていますが、理想的にはほとんどの UX フォーラムは 3 名の発表者だけにすべきです。

- 分散したチームを包摂するため、ミーティング開始時刻を 1 回おきに、Americas/LAC/EMEA に合わせるか APAC に合わせるかで交互に切り替えます。
- 各フォーラムは Product Design Manager がホストします。
  - マネージャーのタイムゾーンの制約により、APAC UX フォーラムは別のプロダクトデザイナー、テクニカルライター、または UX リサーチャーがホストします。
- プロダクトデザイナーは、ランダムに生成されたローテーションに基づいて日程が割り当てられます。
  - 各デザイナーが年に 2 回共有する機会を持てるようにします。
  - 追加の発表者のために、スケジュール全体に空きを残します。
- 誰でも自分の仕事の共有と議論に申し込めます。空いている枠を確保するにはホストと調整してください。
- 共有する各人は、発表する前に、その週のアジェンダ（ミーティング招待に添付されています）を記入することが期待されています。
- いつホストする予定かを把握するのはホストの責任であり、いつ共有する予定かを把握するのは発表者の責任です。これを補助するため、`#product-design-managers` チャネルにスケジュールを確認するための Slack リマインダーが設定されています。

割り当てられた日程に発表者が共有できない場合、交代を取り決めるのはその発表者の責任です。交代するには:

- `#upstream-studios` チャネルで交代したい旨を告知します。
- 交代相手を特定したら、スケジュールを更新する MR を作成します。
- Product Design Manager にレビューとマージを依頼します。

**ライブでの発表が必須です**。トピックを事前に録画しないでください。UX フォーラムの価値は、リアルタイムでの議論、参加者があなたの仕事について質問し直接関わることができること、そしてチームメンバーと自分の仕事をライブで共有できる機会から生まれます。私たちはリモートで働いているため、これらのフォーラムはこの種の直接的な交流が得られる数少ない機会の 1 つです。

{{% include "includes/product/ux-forum-schedule.md" %}}

<a href="https://gitlab.com/-/ide/project/gitlab-com/content-sites/handbook/edit/main/-/assets/includes/product/ux-forum-schedule.md" class="btn btn-primary">Update schedule</a>

## 自分の仕事を共有する

自分の仕事の一部を共有する時間は最大 15 分です。
複雑なトピックの共有と議論にもっと時間が必要な場合は、そのフォーラムで発表する人数を減らせるかホストに尋ねてください。

フォーラムの準備は最小限であるべきです。
ストーリーを語り、参加者からフィードバックを引き出すのにちょうど足りるだけの準備をしてくれば十分です。
成功するフォーラムには次の側面が共通しています。

- **インフォーマル**:
    専用のスライドやアセットを作成するのは避けてください。ただし、何が最も効果的か（プロトタイプ、一連のモックアップ、プロセス図、ジャーニーマップ、数枚のスライド、その他何か）は最善の判断で決めてください。
    UX フォーラムは、凝ったストーリーテリングではなく、自分の仕事をインフォーマルに共有し議論する場です。
- **ちょうど良い洗練度**:
    [低い恥のレベル](/handbook/values/#low-level-of-shame-when-dogfooding)を目指し、可能な限り洗練度を抑えて自分の仕事を共有しましょう。
    トピックによってはより洗練されたストーリーが有益な場合もありますが、この洗練は品質への認識を高め、他の発表者に不要なプレッシャーを与え、他の人が関わりにくくなる可能性があります。
- **共感を呼ぶ**:
    参加者からフィードバックを引き出し、潜在的な重なりを強調するために、参加者を念頭に置いてストーリーを構成してください。
    これにより、人々が共感し、価値を見出し、関わりやすくなります。
    たとえば、重なりを意図的に指摘したり、参加者への質問を追加したりします。
- **イテレーションマインドセット**:
    他者から学び、協力する機会として活用してください。
    これまでに行った仕事だけでなく、今後どのようにイテレーションを進められるか、何が欠けているかにもイテレーションを輝かせましょう。
    たとえば、現在の課題、未解決の疑問、他者が手助けできる箇所をリストアップします。

[役立つヒント](#helpful-tips-for-those-sharing)を参照してください。

最小限のフォーラムの例:

- [Fulfillment: Improve provisioning and onboarding of new sales assisted GitLab com subscribers](https://youtu.be/JYl2_Pnh_-I )
- [Secure: Validating and prioritizing your roadmap](https://youtu.be/FVhZ_XNiR6U)
- [Secure: Group-level security scanner status widget](https://youtu.be/4W-cWcEae_o)
- [Secure: Security Workflow Iterations](https://youtu.be/v3gv-rplcBI)

### 準備

- UX フォーラムの前に、ミーティングアジェンダに自分の具体的なトピックを追加します。
- これが APAC フォーラムでまだホストがいない場合は、[ホスト](#hosting)を検討してください。
- 問題のコンテキストを提供します。
  - 問題の範囲
  - なぜそれを解決することが重要だった/重要なのか
  - リサーチで何を学んだか
  - ソリューションに影響する制約はあるか
- 仕事の望ましいゴールを述べます。
  - 望ましいビジネスおよび顧客の成果は何か
  - 理想的には [JTDB](https://jtbd.info/replacing-the-user-story-with-the-job-story-af7cdee10c27) を記述する
    - When, [user's context]. I want to [user's goal]. So I can [user's desired outcome].
  - 制約は何だった/何なのか
  - MVC に向けてどのようにイテレーションした/する予定か
- ソリューションのイテレーションを参加者に説明します。
  - 自分らしく、仕事のストーリーを語ってください。
  - 新しいものを作るのではなく、既存のモックアップやフローを使ってください。
- 議論を促します。
  - これは他のチームとどのように重なる、または役立つ可能性があるか
  - 現在の課題、次のステップ、未解決の疑問は何か
  - 他者がこれにどうアプローチできるか、またはあなたを手助けできるか

### 共有する人のための役立つヒント

- 自己紹介をし、トピックの[コンテキスト](#preparation)を提供します。
- [参加者の体験を楽しいものにする](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-tips/#make-the-participant-experience-an-enjoyable-one): （たとえば Figma プロトタイプを見せるときに）速く動きすぎたり、前のビューで言い忘れたことがあったために画面間を行き来したりするのは避けてください。
- [画面を共有するとき](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-tips/#how-to-share-a-presentation-in-zoom)は、参加者が詳細を見られるようにフルスクリーンにすることを検討してください。
  - macOS で UI を表示/非表示にする便利な Figma キーボードショートカット: `⌘\` または `⌘.`。
- ストーリー内のテキストの最小フォントサイズが、誰もが簡単に読めるよう十分に大きいことを確認してください。
- Issue、エピック、Figma ファイル、FigJam ボード、録画など、ストーリーに関連する[リンクを](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-tips/#provide-links-rather-than-sharing-while-you-present-or-edit)アジェンダドキュメントに提供してください。
- Figma ファイルや Issue から直接共有するときは、事前にカバーしたいことのアウトラインを準備し、言及したいポイントの詳細をいくつか記入することを検討してください。話しながらこれをガイドとして使うことで、参加者にとってより直線的で追いやすくなります。
- インターネット接続が制限されていますか？ Zoom のカメラフィードを停止するか、[これらのヒント](https://www.canr.msu.edu/od/educational-technology/tips-zoom-slow-connection)を試してください。
- ストーリーのあるセクションの後で、質問を共有してもらうよう人々に依頼してください。
- 全員が自分を見ているときに不安になるのは普通のことです。覚えておいてください: 私たちはお互いを判断するためではなく、支え合うためにここにいます。
- ミーティング後のコラボレーションと透明性を高めるため、関連するエピックや Issue から自分の録画にリンクすることを検討してください。

その他のヒントについては、[コミュニケーションのハンドブックページ](/handbook/communication/#presentations)を参照してください。

## ホスト

Product Design Manager が交代で UX フォーラムをホストします。マネージャーは [UX フォーラムの Issue テンプレート](https://gitlab.com/gitlab-org/gitlab-design/-/issues/new?issuable_template=UX%20Forum)を使って、各セッションの追跡用 Issue を作成できます。[テンプレートの使い方](https://docs.gitlab.com/user/project/description_templates/#use-the-templates)を参照してください。現在のホストが次のホストのための Issue を作成します。

### セッションの録画

UX フォーラム後の編集量を抑えるため、各トピックの後に録画を開始・停止（一時停止ではない）してください。これにより、各トピックが個別のクリップとして保存され、1 時間のクリップよりもはるかに速く編集できます。録画するたびに「コンピューターに録画」を選択してください。

### GitLab Unfiltered での共有

動画を少しでも編集する必要がある場合は、iMovie のような動画エディターを使えます。

そうでなければ:

1. コンピューター上で動画クリップを探します。
1. 動画に「UX Forum」＋トピックのタイトルで名前を付けます。
1. 動画が一般公開に適しているか（顧客名がないか）を発表者に確認します。
1. 動画を [GitLab Unfiltered](https://m.youtube.com/playlist?list=PL05JrBw4t0Kq89nFXtkVviaIfYQPptwJz) にアップロードします。
1. 動画を [UX フォーラムプレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq89nFXtkVviaIfYQPptwJz)と [UX チームプレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KqkW0oPW3n0HqVgKcONVnO5)に追加します。
1. 公開設定を Public にします。
   1. 注意: 動画コンテンツに un[SAFE](/handbook/legal/safe-framework/) な項目が含まれている場合は、動画を Private にマークしてください。
1. YouTube のリンクを、各トピックの簡単な説明とともに `#upstream-studios` および `#product` の Slack チャネルで共有します。
   1. 同じ更新を Engineering Week-In-Review ドキュメントにも追加します。このドキュメントは、社内の [`engineering-fyi` Slack チャネル](https://gitlab.slack.com/archives/CJWA4E9UG)の説明欄から利用できます。

#### 役立つヒント

- Zoom アカウントで動画が見つからない場合は、おそらくそのアカウントにアップロードされているため、カレンダーイベントの所有者に連絡してください。
- iMovie では、15 分未満であれば動画を YouTube に直接アップロードできます。ただし、プレイリストを選択するには YouTube にアクセスする必要があります。
- アップロード後に[アップロードページ](https://studio.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A/videos/upload)にアクセスして自分の動画を選択すると、より良いサムネイルを選んだり、その他の設定を編集したりできます。
- [YouTube の使い方の詳細](/handbook/marketing/marketing-operations/youtube/)。

### スケジュールの更新と次のセッションの準備

セッションが終わったら、[UX フォーラムのスケジュール](https://gitlab.com/-/ide/project/gitlab-com/content-sites/handbook/edit/main/-/assets/includes/product/ux-forum-schedule.md)を更新します。

- 完了したばかりのセッションを削除します
- 次に予定されているセッションの [Issue](https://gitlab.com/gitlab-org/gitlab-design/-/issues/new?issuable_template=UX%20Forum) を作成します。
