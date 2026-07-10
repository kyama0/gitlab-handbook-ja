---
title: Upstream Forum
description: >-
  Upstream Forum は、UX チームメンバーが作業を共有し、議論するための定期的なミーティングです。
upstream_path: /handbook/product/ux/upstream-forum/
upstream_sha: 6eef8dbb6a0d15167aa5378f476b04cd38b78675
lastmod: "2026-06-29T11:52:06+01:00"
translated_at: "2026-07-10T06:46:26+09:00"
translator: codex
stale: false
---

## Upstream Forum について

{{% product/upstream-forum %}}

### 目的

- ビジネス、プロダクト、ユーザーの成果を強調し、UX が提供する価値への認識を高める
- 発見事項、機会、ソリューションの可視性を高める
- より広い組織に UX の活動を知ってもらう機会を増やす
- ミーティング中とその後のステージ横断的なコラボレーションを促進し、作業の質を高める

### 対象者

- Product Designer、Researcher、Technical Writer のいずれか、または複数（発表者）
- Upstream Studios
- Product 部門
- Engineering 部門

### スケジュール

フォーラムは 2 週間ごとに予定されます。最大 3 人のチームメンバーがそれぞれ 15 分間共有し、さらに参加者とのディスカッションにそれぞれ 5 分間を使えるよう、所要時間は 60 分です。スケジュールに柔軟性を持たせるため 4 人目の発表者枠も用意されていますが、ほとんどの Upstream Forum は 3 人の発表者で開催するのが理想です。

- 分散したチームの全員が参加しやすいよう、ミーティングの開始時刻を開催ごとに交互に変え、Americas／LAC／EMEA 向けと APAC 向けにします。
- 各フォーラムは Product Design Manager がホストします。
  - マネージャーのタイムゾーン上の制約により、APAC Upstream Forum は別の Product Designer、Technical Writer、または UX Researcher がホストします。
- Product Designer の日程は、ランダムに生成したローテーションに基づいて割り当てます。
  - 各デザイナーが年に 2 回共有できるようにします。
  - 追加の発表者のため、スケジュール全体に空きを残します。
- 誰でも作業の共有と議論に申し込めます。空いている枠を確保するには、ホストと調整してください。
- 共有する各自は、発表前にその週のアジェンダ（ミーティングの招待状に添付）を記入する必要があります。
- ホストは自分の担当日を把握し、発表者は自分の共有日を把握する責任があります。そのため、`#product-design-managers` チャネルには、スケジュールを確認する Slack リマインダーが設定されています。

発表者が割り当てられた日に共有できない場合、交代相手を見つける責任があります。交代するには、次の手順に従います。

- `#upstream-studios` チャネルで、交代を希望することを知らせます。
- 交代相手が決まったら、スケジュールを更新する MR を作成します。
- Product Design Manager にレビューとマージを依頼します。

**ライブでの発表が必須です**。トピックを事前に録画しないでください。Upstream Forum の価値は、リアルタイムのディスカッション、参加者が質問して作業について直接対話できること、そしてチームメンバーに作業をライブで共有する機会から生まれます。私たちはリモートで働いているため、このフォーラムは、このような直接的なやり取りができる数少ない機会の 1 つです。

{{% include "includes/product/upstream-forum-schedule.md" %}}

<a href="https://gitlab.com/-/ide/project/gitlab-com/content-sites/handbook/edit/main/-/assets/includes/product/upstream-forum-schedule.md" class="btn btn-primary">スケジュールを更新</a>

## 作業を共有する

作業を共有できる時間は最大 15 分です。
複雑なトピックの共有と議論にさらに時間が必要な場合は、そのフォーラムの発表者を減らすことについてホストに相談してください。

フォーラムの準備は最小限で済ませます。
ストーリーを伝え、対象者からフィードバックを引き出すために十分なものだけを準備してください。
成功するフォーラムには、以下の側面があります。

- **インフォーマル**:
    専用のスライドやアセットの作成は避けます。ただし、プロトタイプ、一連のモックアップ、プロセス図、ジャーニーマップ、数枚のスライドなど、何が最も効果的かは自身で最善の判断をしてください。
    Upstream Forum は、凝ったストーリーテリングではなく、作業をインフォーマルに共有し、議論するためのものです。
- **ちょうどよい洗練度**:
    [恥を感じるレベルを低くする](/handbook/values/#low-level-of-shame-when-dogfooding)ことを目指し、できるだけ洗練度を抑えて作業を共有してください。
    トピックによっては、より洗練されたストーリーからメリットを得られますが、その洗練度によって品質が高いという印象が生まれ、ほかの発表者に不要なプレッシャーをかけ、参加者が関わりにくくなる可能性があります。
- **共感しやすい**:
    対象者を念頭に置いてストーリーを構成し、フィードバックを引き出し、重複する可能性を強調します。
    これにより、人々が共感し、価値を見つけ、関わりやすくなります。
    たとえば、重複する部分を意図的に指摘したり、対象者への質問を加えたりします。
- **イテレーションのマインドセット**:
    ほかの人から学び、コラボレーションする機会として活用します。
    これまでの作業だけでなく、今後どのようにイテレートするか、何が欠けているかについても、イテレーションを際立たせます。
    たとえば、現在の課題、未解決の質問、ほかの人に支援してもらえる部分を列挙します。

[共有する人に役立つヒント](#helpful-tips-for-those-sharing)を参照してください。

最小限のフォーラムの例:

- [Fulfillment: 営業支援を受ける新規 GitLab com サブスクライバーのプロビジョニングとオンボーディングを改善](https://youtu.be/JYl2_Pnh_-I )
- [Secure: ロードマップの検証と優先順位付け](https://youtu.be/FVhZ_XNiR6U)
- [Secure: グループレベルのセキュリティスキャナーステータスウィジェット](https://youtu.be/4W-cWcEae_o)
- [Secure: セキュリティワークフローのイテレーション](https://youtu.be/v3gv-rplcBI)

### 準備

- Upstream Forum の前に、具体的なトピックをミーティングのアジェンダに追加します。
- APAC フォーラムでまだホストがいない場合は、[ホストする](#hosting)ことを検討します。
- 問題のコンテキストを提供します。
  - 問題のスコープ
  - 解決することが重要だった／重要である理由
  - リサーチ中に学んだこと
  - ソリューションに影響する制約
- 作業の望ましいゴールを述べます。
  - 望ましいビジネスと顧客の成果は何か？
  - 理想的には、[JTDB](https://jtbd.info/replacing-the-user-story-with-the-job-story-af7cdee10c27) を説明します
    - [ユーザーのコンテキスト]のとき、[ユーザーのゴール]したい。それにより、[ユーザーが望む成果]を達成できる。
  - 制約は何だった／何であるか？
  - MVC に向けてどのようにイテレートした／する予定か？
- ソリューションのイテレーションを対象者に順を追って説明します。
  - 自分らしく、作業のストーリーを伝えます。
  - 新しいものを作成するのではなく、既存のモックアップとフローを使用します。
- ディスカッションを促します。
  - これはほかのチームとどのように重複し、役立つ可能性があるか？
  - 現在の課題、次のステップ、未解決の質問は何か？
  - ほかの人はこれにどう取り組み、どのように支援できるか？

### 共有する人に役立つヒント

- 自己紹介し、トピックの[コンテキスト](#preparation)を提供します。
- [参加者に楽しい体験を提供します](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-tips/#make-the-participant-experience-an-enjoyable-one)。動きが速すぎたり（たとえば Figma プロトタイプを見せるとき）、前のビューで言い忘れたことがあるためビュー間を行き来したりしないようにします。
- [画面を共有するとき](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-tips/#how-to-share-a-presentation-in-zoom)は、対象者が細部を確認できるよう、フルスクリーン表示を検討します。
  - macOS で UI を表示／非表示にする便利な Figma キーボードショートカット: `⌘\` または `⌘.`。
- ストーリー内のテキストの最小フォントサイズを、誰もが容易に読める大きさにします。
- Issue、エピック、Figma ファイル、FigJam ボード、録画など、ストーリーに関連するものへの[リンクを提供します](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-tips/#provide-links-rather-than-sharing-while-you-present-or-edit)。リンクはアジェンダドキュメントに記載します。
- Figma ファイルや Issue から直接共有するときは、事前に説明する内容のアウトラインを用意し、言及するポイントの詳細をいくつか書き込むことを検討します。話す際のガイドとして使えば、話がより直線的になり、対象者が理解しやすくなります。
- インターネット接続が制限されている場合は、Zoom のカメラ映像を停止するか、[こちらのヒント](https://www.canr.msu.edu/od/educational-technology/tips-zoom-slow-connection)を試してください。
- ストーリーの各セクションが終わった後に、質問を共有するよう参加者に依頼します。
- 全員に見られていると不安を感じるのは普通のことです。忘れないでください。私たちは互いを評価するためではなく、支援するためにここにいます。
- ミーティング後のコラボレーションと透明性を高めるため、関連するエピックや Issue から録画にリンクすることを検討します。

ヒントの詳細については、[コミュニケーションハンドブックのページ](/handbook/communication/#presentations)を参照してください。

## ホストする

Product Design Manager が交代で Upstream Forum をホストします。

### セッションを録画する

Upstream Forum 後の編集量を抑えるため、各トピックの後で録画を開始および停止（一時停止ではなく）してください。これにより各トピックが個別のクリップとして保存され、1 時間のクリップよりも大幅に速く編集できます。録画のたびに「record to computer」を選択します。

### GitLab Unfiltered で共有する

動画を編集する必要がある場合は、iMovie などの動画エディターを使用できます。

編集が不要な場合:

1. コンピューター上で動画クリップを見つけます。
1. 「Upstream Forum」+ トピックのタイトルという形式で動画に名前を付けます。
1. 動画を一般公開してよいか（顧客名が含まれていないか）発表者に確認します。
1. 動画を [GitLab Unfiltered](https://m.youtube.com/playlist?list=PL05JrBw4t0Kq89nFXtkVviaIfYQPptwJz) にアップロードします。
1. 動画を [Upstream Forum プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq89nFXtkVviaIfYQPptwJz)と [UX Team プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KqkW0oPW3n0HqVgKcONVnO5)に追加します。
1. 公開設定を Public にします。
   1. 注: 動画の内容に un[SAFE](/handbook/legal/safe-framework/) な項目が含まれる場合は、動画を Private に設定します。
1. 各トピックの簡単な説明とともに、YouTube リンクを `#upstream-studios` と `#product` の Slack チャネルで共有します。
   1. Engineering Week-In-Review ドキュメントにも同じ更新を追加します。このドキュメントは、社内の [`engineering-fyi` Slack チャネル](https://gitlab.slack.com/archives/CJWA4E9UG)の説明にあります。

#### 役立つヒント

- Zoom アカウントで動画が見つからない場合は、カレンダーイベント所有者のアカウントにアップロードされている可能性が高いため、所有者に問い合わせてください。
- iMovie では、動画が 15 分未満であれば YouTube に直接アップロードできます。ただし、プレイリストを選択するには YouTube に移動する必要があります。
- アップロード後に、[アップロードページ](https://studio.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A/videos/upload)に移動して動画を選択すると、より適切なサムネイルを選んだり、ほかの設定を編集したりできます。
- [YouTube の使用に関する詳細](/handbook/marketing/marketing-operations/youtube/)。

### スケジュールを更新し、次のセッションに備える

各セッション後、[DesignOps Upstream Forum の自動化](https://gitlab.com/gitlab-com/designops/-/tree/main/automations/upstream-forum)により、以下が自動的に行われます。

1. 完了したセッションを [スケジュール](https://gitlab.com/-/ide/project/gitlab-com/content-sites/handbook/edit/main/-/assets/includes/product/upstream-forum-schedule.md)から MR を介して削除します
1. 次に予定されているセッションについて、スケジュールに記載されたホストと発表者のハンドルが事前入力された [Upstream Forum 追跡 Issue](https://gitlab.com/gitlab-org/gitlab-design/-/issues?label_name=UX+Forum) を `gitlab-org/gitlab-design` に作成します

スケジュールを編集するときは、各氏名の後に GitLab ハンドルを括弧で囲んで記載してください。たとえば `Name (@handle)` とすると、自動化が適切な人を @メンションできます。
