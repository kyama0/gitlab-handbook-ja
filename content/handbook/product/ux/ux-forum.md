---
title: UX フォーラム
description: >-
  UX フォーラムは、UX チームメンバーが自分の仕事を共有し議論する定期的なミーティングです。
upstream_path: /handbook/product/ux/ux-forum/
upstream_sha: aadd07ec986f77b5bd259fb54f0f41d1f3397544
lastmod: 2026-06-15T07:58:19-05:00
translated_at: "2026-06-18T05:33:51Z"
translator: claude
stale: false
---

## UX フォーラムについて {#about-ux-forum}

{{% product/ux-forum %}}

### 目的 {#purpose}

- ビジネス、プロダクト、ユーザーの成果を強調することで、UX を通じて提供される価値への認識を高める
- 発見、機会、ソリューションへの可視性を高める
- 組織全体に対する UX 活動の露出を高める
- ミーティング中およびその後のステージ横断的なコラボレーションを促進することで、作業品質を高める

### 対象者 {#audience}

- プロダクトデザイナー、リサーチャー、テクニカルライター（発表者）
- Upstream Studios
- Product division
- Engineering division

### スケジュール {#schedule}

フォーラムは 2 週間ごとに予定されます。最大 3 名のチームメンバーがそれぞれ 15 分発表し、参加者と 5 分間議論できるよう、60 分間としています。スケジュール調整に柔軟性を持たせるため 4 人目の発表枠も利用できますが、理想的にはほとんどの UX フォーラムは 3 名の発表者だけにとどめるべきです。

- 分散したチームに配慮し、ミーティング開始時刻を 1 回おきに Americas/LAC/EMEA に都合の良い時間か、APAC に都合の良い時間かで交互に切り替えます。
- 各フォーラムは Product Design Manager がホストします。
  - マネージャーのタイムゾーンの制約のため、APAC UX フォーラムは別の Product Designer、Technical Writer、または UX researcher がホストします。
- Product Designer はランダムに生成されたローテーションに基づいて日付が割り当てられます:
  - 各デザイナーが年に 2 回発表する機会を持てるようにします。
  - 追加の発表者のために、スケジュール全体に空きを残しています。
- 誰でも自分の仕事を共有・議論するために申し込めます。空いている枠を確保するにはホストと調整してください。
- 共有する各人は、発表前にその週のアジェンダ（ミーティング招待に添付されています）に記入することが求められます。
- 自分がいつホストする予定かを把握するのはホストの責任であり、自分がいつ共有する予定かを把握するのは発表者の責任です。これを助けるため、スケジュールを確認するよう `#product-design-managers` チャネルに Slack リマインダーが設定されています。

発表者が割り当てられた日に共有できない場合、交代を手配するのは本人の責任です。交代を手配するには:

- `#upstream-studios` チャネルで交代したい旨をアナウンスします。
- 交代相手が見つかったら、スケジュールを更新する MR を作成します。
- Product Design Manager にレビューとマージを依頼します。

**ライブでの発表が必須です**。事前にトピックを録画しないでください。UX フォーラムの価値は、リアルタイムの議論、参加者が質問しあなたの仕事について直接やり取りできること、そしてチームメンバーと自分の仕事をライブで共有できる機会から生まれます。私たちはリモートで働いているため、これらのフォーラムはこの種の直接的なやり取りができる数少ない機会の 1 つです。

{{% include "includes/product/ux-forum-schedule.md" %}}

<a href="https://gitlab.com/-/ide/project/gitlab-com/content-sites/handbook/edit/main/-/assets/includes/product/ux-forum-schedule.md" class="btn btn-primary">スケジュールを更新</a>

## 仕事を共有する {#sharing-your-work}

自分の仕事の一部を共有するのに最大 15 分使えます。
複雑なトピックを共有・議論するためにもっと時間が必要な場合は、そのフォーラムで発表する人数を減らせないかホストに相談してください。

フォーラムの準備は最小限であるべきです。
ストーリーを語り、聴衆からフィードバックを引き出すのに十分なだけの準備をして臨んでください。
うまくいくフォーラムには次のような特徴があります:

- **インフォーマル**:
    専用のスライドやアセットを作らないようにしますが、何が最も効果的か（プロトタイプ、一連のモックアップ、プロセス図、ジャーニーマップ、数枚のスライド、その他）は自分の判断で見極めてください。
    UX フォーラムは自分の仕事をインフォーマルに共有・議論する場であり、凝ったストーリーテリングのためではありません。
- **ちょうど良い洗練度**:
    [恥のレベルを低く](/handbook/values/#low-level-of-shame-when-dogfooding)保つよう努め、できるだけ洗練を抑えて自分の仕事を共有してください。
    一部のトピックはより洗練されたストーリーから恩恵を受けますが、この洗練は品質への期待を高め、他の発表者に不必要なプレッシャーを与え、他の人が関わりにくくなる可能性があります。
- **共感を呼ぶ**:
    聴衆を念頭に置いてストーリーを構成し、彼らからフィードバックを引き出し、潜在的な重なりを強調してください。
    これにより、人々が共感し、価値を見出し、関わりやすくなります。
    たとえば、意図的に重なりを特定したり、聴衆への質問を加えたりします。
- **イテレーション思考**:
    他者から学び、コラボレーションする機会として活用してください。
    これまでに行った作業だけでなく、今後どのようにイテレーションを進めうるか、何が足りないかにもイテレーションを際立たせましょう。
    たとえば、現在の課題、未解決の疑問、他の人が助けられそうな点をリストアップします。

[役立つヒント](#helpful-tips-for-those-sharing)を参照してください。

最小限のフォーラムの例:

- [Fulfillment: Improve provisioning and onboarding of new sales assisted GitLab com subscribers](https://youtu.be/JYl2_Pnh_-I )
- [Secure: Validating and prioritizing your roadmap](https://youtu.be/FVhZ_XNiR6U)
- [Secure: Group-level security scanner status widget](https://youtu.be/4W-cWcEae_o)
- [Secure: Security Workflow Iterations](https://youtu.be/v3gv-rplcBI)

### 準備 {#preparation}

- UX フォーラムの前に、具体的なトピックをミーティングのアジェンダに追加します。
- これが APAC フォーラムでまだホストがいない場合は、[ホストする](#hosting)ことを検討してください。
- 問題の背景を提供します:
  - 問題の範囲
  - なぜそれを解決することが重要だったのか／重要なのか
  - リサーチで何を学んだか
  - ソリューションに影響する制約はあるか
- 作業で望む目標を述べます:
  - 望ましいビジネスおよび顧客の成果は何か
  - 理想的には、[JTDB](https://jtbd.info/replacing-the-user-story-with-the-job-story-af7cdee10c27) を記述します
    - 〜のとき、[ユーザーの状況]。私は [ユーザーの目標] をしたい。そうすれば [ユーザーの望む成果] ができる。
  - 制約は何だったか／何か
  - MVC に向けてどのようにイテレーションしたか／する予定か
- ソリューションのイテレーションを聴衆に説明します:
  - 自分らしく、作業のストーリーを語ってください。
  - 新しいものを作るのではなく、既存のモックアップやフローを使ってください。
- 議論を促します:
  - これは他のチームとどう重なるか、または役立つか
  - 現在の課題、次のステップ、未解決の疑問は何か
  - 他の人はこれにどうアプローチするか、またはどう手伝えるか

### 共有する人向けの役立つヒント {#helpful-tips-for-those-sharing}

- 自己紹介をして、トピックの[背景](#preparation)を提供してください。
- [参加者の体験を楽しいものにする](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-tips/#make-the-participant-experience-an-enjoyable-one): あまりに速く動き回ったり（たとえば Figma プロトタイプを見せるとき）、前の画面で言い忘れたことがあったために画面を行き来したりしないようにします。
- [画面を共有するとき](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-tips/#how-to-share-a-presentation-in-zoom)は、聴衆が詳細を見られるよう、フルスクリーンにすることを検討してください。
  - macOS で UI を表示／非表示にする便利な Figma キーボードショートカット: `⌘\` または `⌘.`。
- ストーリー内のテキストの最小フォントサイズが、誰でも簡単に読めるよう十分大きいことを確認してください。
- アジェンダドキュメントに、Issue、エピック、Figma ファイル、FigJam ボード、録画など、ストーリーに関連する[リンクを提供](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-tips/#provide-links-rather-than-sharing-while-you-present-or-edit)してください。
- Figma ファイルや Issue から直接共有するときは、事前にカバーしたい事項のアウトラインを準備し、言及したいポイントの詳細をいくつか書き込んでおくことを検討してください。話す際にこれをガイドとして使うと、より直線的になり、聴衆が追いやすくなります。
- インターネット接続が制限されていますか? Zoom のカメラ映像を止めるか、[これらのヒント](https://www.canr.msu.edu/od/educational-technology/tips-zoom-slow-connection)を試してください。
- ストーリーの 1 つのセクションが終わったら、質問を共有するよう人々に呼びかけてください。
- 全員に注目されると不安になるのは普通のことです。覚えておいてください: 私たちは互いを支え合うためにここにいるのであって、互いを評価するためではありません。
- ミーティング後のコラボレーションと透明性を高めるため、関連するエピックや Issue から録画にリンクすることを検討してください。

その他のヒントについては、[コミュニケーションのハンドブックページ](/handbook/communication/#presentations)を参照してください。

## ホスティング {#hosting}

Product Design Manager が交代で UX フォーラムをホストします。マネージャーは [UX Forum issue template](https://gitlab.com/gitlab-org/gitlab-design/-/issues/new?issuable_template=UX%20Forum) を使って各セッションのトラッキング Issue を作成できます。[テンプレートの使い方](https://docs.gitlab.com/user/project/description_templates/#use-the-templates)を参照してください。現在のホストが次のホストのために Issue を作成します。

### セッションの録画 {#recording-the-sessions}

UX フォーラム後の編集量を抑えるため、各トピックの後に録画を開始・停止（一時停止ではなく）してください。これにより各トピックが個別のクリップとして保存され、1 時間のクリップよりはるかに速く編集できます。録画するたびに「コンピューターに録画」を選択してください。

### GitLab Unfiltered での共有 {#sharing-on-gitlab-unfiltered}

動画を少しでも編集する必要がある場合は、iMovie などの動画エディターを使えます。

そうでなければ:

1. コンピューター上で動画クリップを見つけます。
1. 動画に「UX Forum」＋トピックのタイトルという名前を付けます。
1. 発表者に確認し、動画が一般公開に適切であること（顧客名がないこと）を確認します。
1. 動画を [GitLab Unfiltered](https://m.youtube.com/playlist?list=PL05JrBw4t0Kq89nFXtkVviaIfYQPptwJz) にアップロードします。
1. 動画を [UX Forum playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq89nFXtkVviaIfYQPptwJz) と [UX Team playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KqkW0oPW3n0HqVgKcONVnO5) に追加します。
1. 公開設定を Public にします。
   1. 注意: 動画コンテンツに[SAFE](/handbook/legal/safe-framework/)でない項目が含まれている場合は、動画を Private にマークします。
1. `#upstream-studios` と `#product` の Slack チャネルで、各トピックの簡単な説明とともに YouTube リンクを共有します。
   1. 同じアップデートを Engineering Week-In-Review ドキュメントにも追加します。このドキュメントは社内の [`engineering-fyi` Slack チャネル](https://gitlab.slack.com/archives/CJWA4E9UG)の説明欄から利用できます。

#### 役立つヒント {#helpful-tips}

- Zoom アカウントで動画が見つからない場合は、カレンダーイベントの所有者に連絡してください。その人のアカウントにアップロードされた可能性が高いです。
- iMovie では、15 分未満であれば動画を直接 YouTube にアップロードできます。ただし、プレイリストを選択するには YouTube にアクセスする必要があります。
- アップロード後に [Uploads ページ](https://studio.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A/videos/upload)に移動して動画を選択すれば、より良いサムネイルを選んだり、他の設定を編集したりできます。
- [YouTube の使い方についての詳細](/handbook/marketing/marketing-operations/youtube/)。

### スケジュールの更新と次のセッションの準備 {#updating-the-schedule-and-preparing-for-next-sessions}

セッションが終わったら、[UX Forum schedule](https://gitlab.com/-/ide/project/gitlab-com/content-sites/handbook/edit/main/-/assets/includes/product/ux-forum-schedule.md) を更新します。

- 完了したばかりのセッションを削除します
- 次に予定されているセッションの [Issue](https://gitlab.com/gitlab-org/gitlab-design/-/issues/new?issuable_template=UX%20Forum) を作成します。
