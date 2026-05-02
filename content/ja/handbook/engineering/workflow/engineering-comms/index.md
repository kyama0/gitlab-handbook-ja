---
title: エンジニアリングコミュニケーション
upstream_path: /handbook/engineering/workflow/engineering-comms/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

## コミュニケーション

GitLab エンジニアリングは、明確・簡潔・透明・非同期・頻繁なコミュニケーションを重視しています。以下が私たちの最も重要なコミュニケーション手段です。

GitLab のような完全分散型組織の一員として、エンジニアリング主導のイニシアティブについて情報を把握し続けることが重要です。
私たちは[マルチモーダルコミュニケーション](/handbook/communication/#multimodal-communication)を採用しており、これはブロードキャストする最小限のコミュニケーションチャネルのセットを定義しています。

エンジニアリング部門には Google グループ [`engineering@gitlab.com`](https://groups.google.com/a/gitlab.com/g/engineering)（内部限定）があり、部門の全メンバーはオンボーディングプロセスの一環として参加する必要があります。参加していない場合は、マネージャーに連絡してください。GitLab（会社）は主に Slack でコミュニケーションを行うため、このリストは主に Google Drive/Docs/Sheets/Slides のアクセスコントロールに利用してください。

### GitLab グループ / プロジェクト / MR

- [**エンジニアリング部門グループ**](https://gitlab.com/gitlab-com/engineering-division): このグループには、各エンジニアリングチームの公開・非公開のサブグループとプロジェクトが含まれる場合があります。
- [**CTO リーダーシップチーム Issue トラッカー**](https://gitlab.com/gitlab-com/engineering-division/cto-leadership): 全 GitLab チームメンバーがアクセスできる非公開プロジェクト。Issue は社内限定です。CTO リーダーシップチームにとって重要なトピックとイニシアティブを管理します。
- [**エンジニアリング部門 非製品 Issue トラッカー**](https://gitlab.com/gitlab-com/engineering-division/engineering): エンジニアリング部門にとって重要な非製品トピックとイニシアティブを管理する公開プロジェクト。
- [**GitLab 製品 Issue トラッカー**](https://gitlab.com/gitlab-org/gitlab/issues): GitLab 製品開発に関する Issue を起票してください。
- [**マージリクエストから始める**](/handbook/communication/#start-with-a-merge-request): 会社に変更を加える最も効果的な方法は、ハンドブックへのマージリクエストという形で提案し、[DRI](/handbook/people-group/directly-responsible-individuals/) にアサインすることです。

### モニタリングダッシュボード

- [**モニタリングダッシュボード**](/handbook/engineering/monitoring/): 望ましい成果を達成しようとするとき、目標への進捗を定量化・測定できなければなりません。意思決定を促す初期分析を再現可能にすることで、そのプロセスにおける当初の仮定を継続的に検証できます。

### 同期ミーティング

- [**エンジニアリング全体会議（Engineering All-Hands）**](/handbook/engineering/cto-leadership-team/#engineering-all-hands)
- **CTO オフィスアワー**: 毎週、CTO が Zoom でオープンなオフィスアワーを開催し、質問・フィードバック・ハンドブック変更を受け付けています。CTO のカレンダーで EMEA および APAC に適した時間枠を確認してください。
- **Principal+ エンジニアリングデモ**: このコールは、エンジニアリング部門全体の Principal+ IC が現在進行中の取り組みを共有するための同期ディスカッションの場です。
  - コールの焦点:
    - 技術ロードマップ計画: 依存関係、部門をまたぐアップストリーム要件、現在のプロジェクトに基づくダウンストリーム改善の機会。将来のイニシアティブ。
    - 部門間の連携、ツール・モジュール・プロセス・標準・技術・ドキュメントの再利用の機会。
    - すべてのレベルのエンジニアリング IC のキャリア開発リソース改善に関するディスカッション。
  - 全チームメンバーが参加歓迎ですが、エンジニアリング部門の Principal+ IC が取り組んでいる業務、直面している課題、検討している解決策を発表・議論することに重点が置かれています。
  - コールは録画され、[Google Drive](https://drive.google.com/drive/search?q=in:0APOeuCQrsm4KUk9PVA%20type:video%20title:principal) で閲覧できます。

### 非同期アップデート

#### エンジニアリング週次レビュー（EWIR）ドキュメント

毎週、[`#engineering-fyi`](https://gitlab.enterprise.slack.com/archives/CJWA4E9UG) Slack チャンネルに最新アップデートの記入と閲覧を促すリマインダーが送信されます。アジェンダは内部限定です。Google Drive で [`Engineering Week-in-Review`](https://drive.google.com/drive/search?q=engineering%20week%20in%20review) を検索してください（内部限定）。

#### Slack

##### #engineering-fyi

[`#engineering-fyi`](https://gitlab.enterprise.slack.com/archives/CJWA4E9UG) は大規模なアナウンスや Engineering Week-in-Review ドキュメントの閲覧促進に使用されます。以下の条件を満たす場合、誰でもアナウンスを投稿できます:

- アナウンスに該当するアイテムへのリンクが含まれている
- アナウンスが1つ以上の部門の大多数に関わる内容である
- アナウンスが全社向けではなく、部門への増幅が不要な場合。その場合は [`#company-fyi`](https://gitlab.enterprise.slack.com/archives/C010XFJFTHN) を使用してください。

ここでの投稿モデルは、アナウンスをする個人の判断を信頼するものです。投稿に許可を求める必要はありません。

##### #engineering-fyi へのステータスアップデート送信

[`#engineering-fyi`](https://gitlab.enterprise.slack.com/archives/CJWA4E9UG) にステータスアップデートを送信したい場合は、以下のプロセスに従ってください:

1. 報告するトップレベルのプログラムについて、メインエピックに `${プログラム名} Status Updates` という名前の Issue を作成し、説明に `This issue contains status updates for ${プログラム名}.` と記入します。
1. その Issue に `${プログラム名} Status Update - YYYY-MM-DD` というヘッダーの「スレッド」コメントを残し、ステータスへのコメントが明確にできるようにします。
1. そのコメントの内容に対応する日付のアップデートを記入します。
1. この Issue を [`#engineering-fyi`](https://gitlab.enterprise.slack.com/archives/CJWA4E9UG) で共有する際は、完了した主な内容とブロックされているまたはリスクがある内容を含む 2〜3 文を記載してください。必要に応じて関連するステークホルダーに `@` メンションしてください。
1. このアップデートがプログラムの最終アップデートである場合、関連するすべてのディスカッションが完了した後に Issue をクローズしてください。

##### DevOps Slack チャンネル

GitLab.com で問題が発生したとき、開発者がプロダクションチームを支援するために利用する主な Slack チャンネルが2つあります:

1. `#backend`: バックエンド関連の問題（例: 500 エラー、データベース負荷の高騰など）
1. `#frontend`: フロントエンド関連の問題（例: JavaScript エラー、ボタンが機能しないなど）

プロダクションチームからの質問やリクエストは、高い優先度で即座に対応してください。

##### エンジニアリングに関連する情報源となるその他の Slack チャンネル

- [`#cto`](https://gitlab.enterprise.slack.com/archives/C9X79MNJ3)
- [`#development`](https://gitlab.enterprise.slack.com/archives/C02PF508L)
- [`#production`](https://gitlab.enterprise.slack.com/archives/C101F3796)
- [`#incidents`](https://gitlab.enterprise.slack.com/archives/C02HF90ME66)
- [`#s_developer_experience`](https://gitlab.enterprise.slack.com/archives/C07TWBRER7H)
- [`#support_gitlab-com`](https://gitlab.enterprise.slack.com/archives/C4XFU81LG)
- [`#support_self-managed`](https://gitlab.enterprise.slack.com/archives/C4Y5DRKLK)
- [`#infrastructure_platforms`](https://gitlab.enterprise.slack.com/archives/C02D1HQRTKQ)

これらすべてのチャンネルへの参加は必須ではありません。同じメッセージをすべてのチャンネルに共有する責任は、共有する側にあります。理想的には、フィードバックのための唯一の情報源となる Issue へのリンクを含む1文のサマリーとして投稿してください。
