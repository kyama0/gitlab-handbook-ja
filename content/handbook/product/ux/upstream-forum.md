---
title: Upstream Forum
description: >-
  Upstream Forum は、UX チームメンバーが自分たちの取り組みを共有し、議論するための定例ミーティングです。
upstream_path: /handbook/product/ux/upstream-forum/
upstream_sha: e48b48a5e8c7635a5993b5836c0ca253812429d2
lastmod: "2026-06-29T11:52:06+01:00"
translated_at: "2026-07-06T06:09:17+09:00"
translator: codex
stale: false
---

## Upstream Forum について {#about-upstream-forum}

{{% product/upstream-forum %}}

### 目的 {#purpose}

- ビジネス、プロダクト、ユーザーの成果を強調することで、UX を通じて提供される価値への認識を高める
- 発見、機会、ソリューションへの可視性を高める
- UX 活動の露出をより広い組織に広げる
- ミーティング中およびその後のステージをまたいだ協業を促進することで、作業品質を高める

### 対象者 {#audience}

- プロダクトデザイナー、リサーチャー、テクニカルライター（発表者）
- Upstream Studios
- Product 部門
- Engineering 部門

### スケジュール {#schedule}

フォーラムは隔週で予定されます。最大 3 名のチームメンバーがそれぞれ 15 分間共有し、加えて参加者との議論に 5 分間を充てられるよう、60 分間で行われます。スケジューリングの柔軟性を持たせるために 4 番目の発表者枠も用意していますが、理想的にはほとんどの Upstream Forum は発表者を 3 名だけにすべきです。

- 分散したチームを包摂するために、開催ごとに交互にミーティングの開始時刻を変更し、Americas/LAC/EMEA に都合がよい時刻か、APAC に都合がよい時刻のいずれかにしています。
- 各フォーラムは Product Design Manager がホストします。
  - マネージャーのタイムゾーンの制約により、APAC Upstream Forum は別の Product Designer、Technical Writer、または UX researcher がホストします。
- Product Designer は、ランダムに生成されたローテーションに基づいて日付が割り当てられます：
  - 各デザイナーが年 2 回共有する機会を持てるようにします。
  - 追加の発表者のために、スケジュール全体に空きを残しています。
- 誰でも自分の仕事を共有・議論するために申し込めます。空いている枠を確保するには、ホストと調整してください。
- 共有する各人は、発表の前にその週のアジェンダ（ミーティングの招待に添付されています）に記入することが期待されます。
- 自分がいつホストする予定かを知ることはホストの責任であり、自分がいつ共有する予定かを知ることは発表者の責任です。これを助けるために、`#product-design-managers` チャンネルにスケジュールを確認するための Slack リマインダーが設定されています。

発表者が割り当てられた日付に共有できない場合は、交代を手配することが本人の責任です。交代するには、次のとおりにします。

- `#upstream-studios` チャンネルで、交代したいことを知らせます。
- 交代相手を見つけたら、スケジュールを更新する MR を作成します。
- Product Design Manager にレビューとマージを依頼します。

**ライブでのプレゼンテーションが必須です**。トピックを事前に録画しないでください。Upstream Forum の価値は、リアルタイムの議論、参加者があなたの仕事について質問し直接関わる能力、そしてチームメンバーと自分の仕事をライブで共有する機会から生まれます。私たちはリモートで働いているため、これらのフォーラムはこのような直接的なやり取りができる数少ない機会の 1 つです。

{{% include "includes/product/upstream-forum-schedule.md" %}}

<a href="https://gitlab.com/-/ide/project/gitlab-com/content-sites/handbook/edit/main/-/assets/includes/product/upstream-forum-schedule.md" class="btn btn-primary">スケジュールを更新</a>

## 自分の仕事を共有する {#sharing-your-work}

自分の仕事の一部を共有するために、最大 15 分間あります。
複雑なトピックを共有・議論するためにもっと時間が必要な場合は、そのフォーラムで発表する人数を減らすことについてホストに相談してください。

フォーラムの準備は最小限にすべきです。
ストーリーを語り、聴衆からフィードバックを引き出すのにちょうど十分な準備で臨むべきです。
成功したフォーラムには、次の側面が共通しています。

- **インフォーマル**:
    専用のスライドやアセットの作成は避けますが、プロトタイプ、一連のモックアップ、プロセス図、ジャーニーマップ、数枚のスライド、またはその他のものなど、何が最も効果的かは最善の判断で決めてください。
    Upstream Forum は、自分の取り組みをインフォーマルに共有し議論するためのものであり、凝ったストーリーテリングの場ではありません。
- **ちょうど十分な洗練度**:
    [低い羞恥心](/handbook/values/#low-level-of-shame-when-dogfooding)を目指すことに協力し、できる限り洗練度を抑えて自分の仕事を共有してください。
    一部のトピックでは、より洗練されたストーリーが有効な場合もありますが、その洗練度は品質の印象を高め、他のスピーカーに不要なプレッシャーを与え、他の人が関わりにくくなる可能性があります。
- **共感しやすい**:
    オーディエンスを念頭に置き、彼らからフィードバックを引き出し、潜在的な重なりを強調するようにストーリーを構成してください。
    そうすることで、人々が共感し、価値を見いだし、関わりやすくなります。
    たとえば、意図的に重なりを特定したり、オーディエンス向けの質問を追加したりします。
- **イテレーションのマインドセット**:
    他の人から学び、コラボレーションする機会として使ってください。
    これまでに行った作業だけでなく、今後どのようにイテレーションできるか、何が不足しているかにもイテレーションを輝かせてください。
    たとえば、現在の課題、未解決の質問、他の人が支援できる可能性のある箇所を列挙します。

[役立つヒント](#helpful-tips-for-those-sharing)を参照してください。

最小限のフォーラムの例:

- [Fulfillment: 新しいセールスアシスト付き GitLab.com サブスクライバーのプロビジョニングとオンボーディングの改善](https://youtu.be/JYl2_Pnh_-I )
- [Secure: ロードマップの検証と優先順位付け](https://youtu.be/FVhZ_XNiR6U)
- [Secure: グループレベルのセキュリティスキャナーステータスウィジェット](https://youtu.be/4W-cWcEae_o)
- [Secure: セキュリティワークフローのイテレーション](https://youtu.be/v3gv-rplcBI)

### 準備 {#preparation}

- Upstream Forum の前に、具体的なトピックをミーティングアジェンダに追加します。
- これが APAC のフォーラムで、まだホストがいない場合は、[ホスト](#hosting)を検討してください。
- 問題のコンテキストを提供します：
  - 問題のスコープ
  - なぜそれを解決することが重要だった／重要なのか。
  - 調査中に何を学んだか。
  - ソリューションに影響する制約はあるか。
- 取り組みの望ましい目標を述べます：
  - 望ましいビジネス成果と顧客成果は何か。
  - 理想的には、[JTDB](https://jtbd.info/replacing-the-user-story-with-the-job-story-af7cdee10c27)を説明します
    - いつ、[ユーザーのコンテキスト]。私は [ユーザーの目標] したい。そうすることで [ユーザーの望ましい成果] できる。
  - 制約は何だった／何か。
  - MVC に向けてどのようにイテレーションしたか／する予定か。
- オーディエンスにソリューションのイテレーションを説明します：
  - 自分らしく、取り組みのストーリーを伝えてください。
  - 新しいものを作るのではなく、既存のモックアップやフローを使用してください。
- ディスカッションに招きます：
  - これは他のチームとどのように重なり、または役立つ可能性があるか。
  - 現在の課題、次のステップ、未解決の質問は何か。
  - 他の人はこれにどのようにアプローチし、またはあなたを支援できるか。

### 共有する人向けの役立つヒント {#helpful-tips-for-those-sharing}

- 自己紹介し、トピックの[コンテキスト](#preparation)を提供します。
- [参加者の体験を楽しいものにする](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-tips/#make-the-participant-experience-an-enjoyable-one)：速く動き回ること（たとえば Figma プロトタイプを見せるとき）や、前のビューで言い忘れたことがあるためにビュー間を行ったり来たりすることは避けてください。
- [画面を共有するとき](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-tips/#how-to-share-a-presentation-in-zoom)は、オーディエンスが詳細を見られるようにフルスクリーンにすることを検討してください。
  - UI の表示／非表示に便利な macOS の Figma キーボードショートカット：`⌘\` または `⌘.`。
- ストーリー内のテキストの最小フォントサイズが、全員に読みやすい大きさであることを確認します。
- ストーリーに関連する Issue、エピック、Figma ファイル、FigJam ボード、録画などへの[リンクを提供](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-tips/#provide-links-rather-than-sharing-while-you-present-or-edit)をアジェンダドキュメント内に追加します。
- Figma ファイルや Issue から直接共有する場合は、事前に扱いたいことのアウトラインを用意し、言及したいポイントの詳細を少し埋めておくことを検討してください。話している間、これをガイドとして使い、オーディエンスが追いやすい直線的な流れにします。
- インターネット接続が制限されていますか。Zoom のカメラフィードを停止するか、[これらのヒント](https://www.canr.msu.edu/od/educational-technology/tips-zoom-slow-connection)を試してください。
- ストーリーのセクションが終わった後に、質問を共有するよう参加者に依頼します。
- 皆があなたを見ていると不安になるのは普通です。覚えておいてください：私たちは互いに支援するためにここにいるのであり、互いを評価するためではありません。
- ミーティング後のコラボレーションと透明性を高めるため、関連するエピックや Issue から録画にリンクすることを検討してください。

その他のヒントについては、[コミュニケーションのハンドブックページ](/handbook/communication/#presentations)を参照してください。

## ホスティング {#hosting}

Product Design Manager は交代で Upstream Forum をホストします。

### セッションを録画する {#recording-the-sessions}

Upstream Forum 後の編集の量を抑えるために、各トピックの後に録画を開始・停止（一時停止ではなく）してください。これにより、各トピックが個別のクリップとして保存され、1 時間のクリップよりもはるかに速く編集できます。録画するたびに「コンピュータに録画」を選択してください。

### GitLab Unfiltered で共有する {#sharing-on-gitlab-unfiltered}

動画を少しでも編集する必要がある場合は、iMovie のような動画エディターを使用できます。

そうでなければ、次のとおりにします。

1. コンピューター上の動画クリップを見つけます。
1. 動画に「Upstream Forum」＋トピックのタイトルで名前を付けます。
1. 動画が一般公開に適切であること（顧客名がないこと）を発表者と確認します。
1. 動画を [GitLab Unfiltered](https://m.youtube.com/playlist?list=PL05JrBw4t0Kq89nFXtkVviaIfYQPptwJz)にアップロードします。
1. 動画を [Upstream Forum のプレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq89nFXtkVviaIfYQPptwJz)と [UX Team のプレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KqkW0oPW3n0HqVgKcONVnO5)に追加します。
1. 可視性を Public に設定します。
   1. 注: 動画のコンテンツに[SAFE](/handbook/legal/safe-framework/)でない項目が含まれている場合は、動画を Private にマークします。
1. 各トピックの簡単な説明とともに、YouTube リンクを `#upstream-studios` と `#product` Slack チャンネルで共有します。
   1. 同じ更新を Engineering Week-In-Review ドキュメントにも追加します。このドキュメントは、社内の [`engineering-fyi` Slack チャンネル](https://gitlab.slack.com/archives/CJWA4E9UG)の説明から利用できます。

#### 役立つヒント {#helpful-tips}

- Zoom アカウントで動画が見つからない場合は、カレンダーイベントのオーナーに連絡してください。おそらくその人のアカウントにアップロードされています。
- iMovie では、動画が 15 分未満であれば YouTube に直接アップロードできます。ただし、プレイリストを選択するには YouTube に行く必要があります。
- アップロード後、[アップロードページ](https://studio.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A/videos/upload)に移動して動画を選択すれば、より良いサムネイルを選んだり、他の設定を編集したりできます。
- [YouTube の使用に関する詳細](/handbook/marketing/marketing-operations/youtube/)。

### スケジュールを更新し、次回セッションを準備する {#updating-the-schedule-and-preparing-for-next-sessions}

各セッション後、[DesignOps Upstream Forum automation](https://gitlab.com/gitlab-com/designops/-/tree/main/automations/upstream-forum)は自動的に次を行います：

1. MR を通じて、完了したセッションを[スケジュール](https://gitlab.com/-/ide/project/gitlab-com/content-sites/handbook/edit/main/-/assets/includes/product/upstream-forum-schedule.md)から削除します
1. 次に予定されているセッションについて、スケジュール上のホストとスピーカーのハンドルが事前入力された [Upstream Forum トラッキング Issue](https://gitlab.com/gitlab-org/gitlab-design/-/issues?label_name=UX+Forum)を `gitlab-org/gitlab-design` に作成します

スケジュールを編集するときは、各名前の後ろに GitLab ハンドルを括弧付きで含めてください — 例：`Name (@handle)` — そうすることで、自動化が正しい人に @-mention できます。
