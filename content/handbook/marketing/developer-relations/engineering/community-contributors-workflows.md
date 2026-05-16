---
title: "コミュニティ貢献を扱うワークフロー"
description: DevRel Engineering が扱うすべてのプロセス
upstream_path: /handbook/marketing/developer-relations/engineering/community-contributors-workflows/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-06T15:09:05+01:00"
---

## ワークフロー

## リアルタイムコミュニケーション

GitLab への貢献に興味がある人々のために、[Discord](https://discord.gg/gitlab) で GitLab 貢献者ルームが利用できます。これは誰でも参加でき、コミュニティメンバーがネットワーキングし、互いに助け合うのに良い場所です。

## Issue

### 貢献者リンク

誰もが貢献することを明確で簡単にするため、[triage-ops プロセッサ](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/triage/processor/issue_summary.rb)
が Issue に貢献者リンクを追加し、お客様/コミュニティメンバーがラベル付け、クローズ、自身への割り当てを行えるようにします。

GitLab チームメンバーではなく、ここでの初心者で、GitLab への機能、バグ修正、翻訳などの貢献を始めたいと思っていますか?
[貢献者プラットフォーム](https://contributors.gitlab.com/)からオンボーディングを開始してください。

GitLab チームメンバーは、`suppress-contributor-links` ラベルを追加することで貢献者リンクを抑制できます。

### コミュニティ貢献者向けの Issue ラベル付け

[広範コミュニティの貢献を求める](/handbook/marketing/developer-relations/engineering/community-contributors-workflows/#seeking-wider-community-contributions)に関するガイダンスと、[`quick win` Issue の基準](/handbook/marketing/developer-relations/engineering/community-contributors-workflows/#criteria-for-quick-win-issues)を参照してください。

### コミュニティ Issue ワークフローの手動プロセス

[部分的な Issue トリアージチェックリスト](/handbook/product-development/how-we-work/issue-triage/#partial-triage-checklist)を参照してください。

## マージリクエスト

広範コミュニティのマージリクエストとは、<https://about.gitlab.com/company/team/> に存在しない人 (任意のボット、サービスアカウントユーザー、または個人契約者を除く) が開いた MR です。

### ラベル

- `Community contribution` ラベルは、広範コミュニティメンバーが提出した MR に [GitLab Bot](https://gitlab.com/gitlab-bot) によって自動的に適用されます。
  - MR のリストは [`gitlab-org` のマージリクエストリスト](https://gitlab.com/groups/gitlab-org/-/merge_requests?label_name[]=Community+contribution)で確認できます。
- [このオートメーションのケイデンスと条件についての詳細](/handbook/engineering/infrastructure-platforms/developer-experience/triage-operations/#label-community-contributions)。
- `1st contribution` ラベルは初回貢献に追加されます。貢献者が `gitlab-org` 名前空間で初めてマージリクエストを開くたびに、`1st contribution` ラベルがマージリクエストに自動的に適用されます。
  - MR のリストは [`gitlab-org` のマージリクエストリスト](https://gitlab.com/groups/gitlab-org/-/merge_requests?label_name%5B%5D=1st+contribution)で確認できます。
  - [初回貢献者](/handbook/marketing/developer-relations/engineering/community-contributors-workflows#first-time-contributors)には感謝の意としてギフトも贈られます。

### トリアージレポート

[コミュニティ関連のトリアージレポート](/handbook/engineering/infrastructure-platforms/developer-experience/triage-operations/#community-related-triage-reports)を参照してください。

### スケジュールされたワークフローオートメーション

[コミュニティ関連のスケジュールされたワークフローオートメーション](/handbook/engineering/infrastructure-platforms/developer-experience/triage-operations/#community-related-scheduled-workflow-automation)を参照してください。

### リアクティブワークフローオートメーション

[コミュニティ関連のリアクティブワークフローオートメーション](/handbook/engineering/infrastructure-platforms/developer-experience/triage-operations/#community-related-reactive-workflow-automation)を参照してください。

## マージリクエストコーチ

[マージリクエストコーチ](/job-description-library/expert/merge-request-coach/)は、貢献者の MR を支援するために利用可能です。これには次のことが含まれます:

- MR のレビュアーを特定する。
- 貢献者からの質問に回答する。
- [貢献承認基準](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow#contribution-acceptance-criteria)について貢献者を教育する。
- または、貢献者が応答しないか完了できない場合に MR を完了する。
  - その場合、`coach will finish` ラベルが MR に追加され、コーチは新しいコミットを直接 MR にプッシュするか、元の変更を含む新しい MR を再作成します。
  - 貢献者は MR で `@gitlab-org/coaches` と入力することでコーチをメンションできます。

現在のマージリクエストコーチのリストは、[チームページ](/handbook/company/team/)で部門フィルタの `Merge Request Coach` を選択することで見つけることができます。

GitLab チームメンバーがコミュニティ貢献に関する質問がある場合は、GitLab Slack の [`#mr-coaching`](https://gitlab.slack.com/archives/C2T9APP9C) チャンネルもあります。

マージリクエストコーチに関する詳細情報 (マージリクエストコーチになる方法を含む) は、[MR コーチライフサイクルページ](/handbook/marketing/developer-relations/engineering/merge-request-coach-lifecycle)で見つけることができます。

## GitLab Enterprise Edition (EE) への貢献

### コミュニティ貢献者向け

[GitLab Enterprise Edition](https://gitlab.com/gitlab-org/gitlab/-/tree/master/ee) の任意の有料機能に貢献するには、コミュニティ貢献者は GDK にライセンスを追加する必要があります。すでにライセンスを持っていない場合は、[30 日間の無料トライアル](https://about.gitlab.com/free-trial/)を取得できます (Self-Managed オプションを選択)。30 日間で作業を完了できない場合は、限定数のユーザー (100) 向けに 90 日間の新しい EE ライセンスを発行できます。

このライセンスの更新:

- 前回のライセンスサイクルでアクティブな貢献があった場合、このライセンスはさらに 1 年間更新できます。
- 前回のライセンスサイクルでアクティブな貢献がなかった場合、90 日間の更新が許可されます。

貢献者は、ライセンスをリクエストするためにこのプロジェクトでリクエストを作成する必要があります: [Wider Community Contributor License Request](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues/new?issuable_template=contributor_ee_license_request)。

### Enterprise Edition (EE) ライセンスリクエストの処理

GitLab チームメンバーが完了する必要があります:

#### 前提条件

- Zendesk サポートポータルへのアクセス、[Zendesk Global Light Agent フォーム](/handbook/support/internal-support/#requesting-a-zendesk-light-agent-account)経由でリクエスト。

#### プロセス

- Okta 経由で Zendesk にログイン
- [GitLab L&R Internal Requests フォーム](https://gitlab-internal.zendesk.com/hc/en-us/requests/new?ticket_form_id=22783840298780)にアクセス
- 続くドロップダウンリストから **Other** > **Wider community license** を選択
- リクエスト Issue で提供された必須フィールドを入力
  - 連絡先情報: リクエストする貢献者の情報を使用
- その他の必須フィールド:
  - True-up: 0
  - リクエストの優先度: Low
  - ライセンスタイプ: Ultimate (特に指定がない限り)
  - 有効期限:
    - 新規貢献者は 90 日
    - 更新は 1 年
  - 1 年更新の場合、Nick の E メールを承認マネージャーとして使用
- 「ライセンスが発行される理由は何ですか?」で、`Wider community contributor EE license request` を指定し、ライセンスリクエスト Issue へのリンクを追加
- リクエスト Issue にリクエストが提出されたことを示すパブリックコメントを追加
- サポートフォームを送信すると、Zendesk でリクエストを「作成」するパイプラインへのリンクがユーザーに表示されます。後で調査が必要な問題があった場合に備えて、このパイプラインへのリンクを内部コメントに保存

サポートチームは、24 時間以内に[このワークフロー](/handbook/support/license-and-renewals/workflows/self-managed/creating-wider-community-license)に従って応答します。


{{% alert title="注" %}}
(GitLab チームメンバー) Google Drive で[ここで](https://drive.google.com/drive/u/0/search?q=Wider_EE_Developer_License_Renewal.mov)検索することで、これのビデオを見つけることができます
{{% /alert %}}


#### クローズ

ライセンスがプロビジョニングされたら:

- ライセンスリクエストがプロビジョニングされたという確認のパブリックコメントを Issue に追加
- サポートから送信された E メールに含まれる「Private Note」のスクリーンショット付きの機密コメントを追加
- Issue をクローズ

## DCO と CLA のガイダンス

GitLab への外部貢献はすべて、貢献が行われた場所と誰の代理で行われたかに応じて、[GitLab の DCO または CLA](https://about.gitlab.com/community/contribute/dco-cla/) の対象となります。

組織を代理で行われたすべての貢献をカバーする包括的な企業 CLA を締結する企業貢献者向けの手順は、[DCO-CLA ページ](https://about.gitlab.com/community/contribute/dco-cla/#need-a-corporate-cla-covering-all-contributors-on-behalf-of-your-organization)に記載されています。

### 企業 CLA 貢献者管理

Contributor success は、Legal and Corporate Affairs チームを支援して、GitLab が企業 CLA に関連付けられたユーザーのリストを維持できる名前空間の作成と維持を行ってきました。

このグループはここで見つけることができます: https://gitlab.com/gitlab-corporate-cla

#### 新しいグループの追加

この名前空間下に新しい企業グループを追加するには、次のようにします:

1. 組織名と一致する名前/スラッグでサブグループを作成します。
1. 新しいサブグループの可視性が `Private` に設定されていることを確認します。
1. 作成後、サブグループを編集 (Settings > General) し、グループ説明にテキスト `Approved contributors for XXXXX under the GitLab Corporate CLA` を追加します。
1. 次の設定を確認/設定します:
    1. General > Permissions and Group Features
        1. Permissions - Group mentions are disabled
        1. Wiki - Group-level wiki is disabled
        1. Roles allowed to create projects - `No one`
        1. Roles allowed to create subgroups - `Owner`
        1. Customer relations is enabled - disabled
        1. Membership - Users can request access (disabled)
        1. GitLab Duo availability - `Always off`
1. 組織の指定されたユーザーマネージャーのユーザーアカウントを `Owner` としてグループに追加します。(Subgroup information > Members の下)
1. ご自身のユーザーアカウントをサブグループの直接メンバーから削除します。(Group owners の下、`Membership = Direct` でフィルタし、'kebab メニュー' をクリックして 'Leave Group' を選択)

## 教育資料

1. [Gitpod with GDK - Introduction (ビデオ)](https://www.youtube.com/watch?v=OzgGP5tT4bo)
1. [Gitpod with GDK - Setup (ビデオ)](https://www.youtube.com/watch?v=6VNm36wdXnI)

## GitLab Notable Contributor 選定プロセス

[GitLab Notable Contributor 選定プロセス](/handbook/marketing/developer-relations/engineering/notable-contributor-process)を参照してください。

## 貢献者への感謝メッセージ

Contributor Success チームは、マージリクエストへの活発な参加について広範コミュニティメンバーに定期的に感謝してきました。
これは、次の場所での週次感謝メッセージという形を取ります:

- discord の `#thanks` チャンネル。
- フォーラムの `community` エリア。

MR をマージしてもらった広範コミュニティメンバーや、マージされた他の MR に参加した広範コミュニティメンバーに感謝します。

これらのメッセージは、[スクリプト](https://gitlab.com/gitlab-org/developer-relations/contributor-success/toolbox)の助けを借りて生成されます。
スクリプトは月曜日の朝に実行されます。

トラッキング Issue:

- [広範コミュニティメッセージ](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues/186)

### 手動実行

メッセージを手動で生成する必要がある場合は、次の前提手順に従う必要があります:

1. toolbox プロジェクトの最新の `main` ブランチをチェックアウト: `git clone git@gitlab.com:gitlab-org/developer-relations/contributor-success/toolbox.git`
1. チェックアウトしたプロジェクトのディレクトリに変更: `cd toolbox`
1. 必要な gem をインストール: `bundle install`

1. [ここ](https://gitlab.com/gitlab-org/developer-relations/contributor-success/toolbox/#community-mr-participants)の 'wider' の例に従ってスクリプトを実行
1. レポートを実行する期間を必ず確認してください。
1. 結果のメッセージを discord の `#thanks` に貼り付け。
1. 貼り付けたメッセージをダブルチェックして、ユーザー/名前がすべて「正しい」ように見えることを確認。
1. メッセージを送信して、お祝いに参加!
1. 必要に応じて、メッセージから PI 数を[トラッキング Issue](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues/186) に記録。
1. トラッキング Issue の担当者と期日を更新。

## イベントの組織化と宣伝

### イベント計画

- ミーティング前にアジェンダを起草します (ドキュメントがリンクのある全員に開いていることを確認してください)
  - 出欠確認、紹介
  - 各種トピック
  - コミュニティがトピックを持ち寄れるオープンフロア
- 参加方法の手順を含めます
  - Zoom (または他のビデオプラットフォーム) へのリンク
- イベントを[デベロッパーアドボカシーチームカレンダー](/handbook/marketing/developer-relations/developer-advocacy/calendar)に追加します。GitLab チームメンバーでない場合は、[デベロッパーリレーションズ](/handbook/marketing/developer-relations/)チームのメンバーにイベントをカレンダーに追加するよう依頼してください。
- ソーシャルサポートのために以下の手順に従うか、[コードコントリビューターのプランニングリポ](https://gitlab.com/gitlab-com/marketing/community-relations/contributor-program/general/issues/new?issuable_template=event-support-request)でリクエストを開きます。

### ソーシャル

- 「Join the upcoming GitLab hackathon (link) on the N.」のような短いアクション指向のコピーを起草します。
- イベントの少なくとも 2 週間前、1 週間前、前日に、次のチャンネルでメッセージを共有します:
  - Twitter: 自分のアカウントを使用しますが `@gitlab` をメンションします (注: Twitter で Zoom リンクを共有しないでください)
  - [GitLab Community Discord](https://discord.gg/gitlab)

### イベントプラットフォーム

- [John Coghlan](https://gitlab.com/johncoghlan) に [meetup.com](https://www.meetup.com/gitlab-virtual-meetups/) でのイベント追加を依頼します。
- [GitLab Events ページ](https://about.gitlab.com/events/)にイベントを追加します。

### ハッカソン

GitLab コミュニティメンバーが集まり、マージリクエストに取り組み、チュートリアルセッションに参加し、[GitLab Discord](https://discord.gg/gitlab) で互いをサポートする四半期ごとの[ハッカソン](https://about.gitlab.com/community/hackathon/)があります。ハッカソンのアジェンダ、ロジスティクス、資料、録画、その他の情報は [GitLab Community Hackathon](https://about.gitlab.com/community/hackathon/) ページで利用できます。

イベントの計画は、[ハッカソン Issue テンプレート](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues/new?description_template=hackathon)に従って行われます。

### バーチャルハッカソン/hackathon-in-a-box

私たちは広範コミュニティメンバーが GitLab への新しい貢献者を奨励し、サポートするためにイベントを組織化することも奨励しています。これは、対面またはバーチャル GitLab ミートアップの一部として行うことができます。

広範コミュニティメンバーがハッカソンをミートアップの一部として含めることに興味がある場合は、[ミートアップ Issue](https://gitlab.com/gitlab-com/marketing/community-relations/evangelist-program/general/issues/new?issuable_template=meetup-organizer)を開く際にこの情報を含めるように依頼してください。Contributor Success チームメンバーがオーガナイザーに連絡し、イベントをサポートするために必要なリソースを提供します。

利用可能なリソースの一部は、[hackathon-in-a-box フォルダ](https://drive.google.com/drive/u/0/folders/1YWb16NAguXq9T5kORhNcXOk3JwdaS4NF)、[GDK チュートリアルプレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KofEeWa9EXUOS8kJHOjIH_W)などで見つけることができます。プログラムマネージャーはオーガナイザーと協力して、初めて/経験の浅い貢献者に良い Issue のリストを作成し、イベント前に参加者と共有する必要があります。また、イベント中にマージリクエストを作成した人に配布できる GitLab グッズについて、オーガナイザーと連携する必要があります。

### コミュニティオフィスアワー

広範コミュニティと GitLab チームメンバー間のコミュニケーションを促進するために、製品チームはコミュニティオフィスアワーをホストすることがあります。これらのオフィスアワーの目的は、製品/開発に関する広範コミュニティのフィードバックを集め、広範コミュニティの貢献を議論し、MR のバックログをレビューし、その他のトピックを話し合うことです。オフィスアワー関連の Issue または MR には、[これらの例](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=all&label_name[]=Office%20Hours)で見ることができるように、`Office Hours` ラベルが付きます。

通話は誰でも利用可能で、通話後に録画が投稿されます。[このプレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KrXZEInAfyddFlalvwaxL-I)で過去のオフィスアワーの例をご覧ください。コミュニティがビデオを見つけやすくするために、各ステージは独自のオフィスアワーのプレイリストを作成し、ハンドブックページからリンクする必要があります。

すべてのコミュニティオフィスアワー通話は、[デベロッパーアドボカシーカレンダー](/handbook/marketing/developer-relations/developer-advocacy/calendar)と [meetup.com グループ](https://www.meetup.com/gitlab-virtual-meetups/)に追加する必要があります。

#### オフィスアワー録画のセキュリティ上の注意

オフィスアワーの録画を公開する前に、認証情報や秘密情報が動画内に表示・聞き取り可能になっていないことを確認してください。これには次のものが含まれますが、これに限りません:

- GitLab パーソナルアクセストークン（PAT）
- プロジェクトアクセストークン
- グループアクセストークン
- OAuth トークンまたはクライアントシークレット
- SSH キー
- API キーまたは Webhook シークレット
- パスワードまたはパスフレーズ

セッション中に誤って認証情報が露出してしまった場合は、ただちに無効化してローテーションする必要があります — ライブ配信動画の性質上、動画の編集だけに頼らないでください。

ライブストリームから変換した動画ではなく、録画を直接アップロードするチームメンバー向けには、動画を公開する前にトークンリークを検出するための GitLab 内部 [video scanner](https://internal.gitlab.com/handbook/security/product_security/token-leaks/video_scanner/) が利用できます。このツールの利用は任意ですが、追加の保護レイヤーとして強く推奨されます。

録画の公開と管理に YouTube をどう活用すべきかについては、GitLab の [YouTube の利用とアクセス](/handbook/marketing/marketing-operations/youtube/) を参照してください。

#### コミュニティオフィスアワー通話の組織化方法

**準備**

- 日付と時刻が確定したら、次に追加します:
  - [meetup.com グループ](https://www.meetup.com/gitlab-virtual-meetups/) (meetup.com アカウントは GitLab の 1Password ボルトで利用可能)
  - [デベロッパーアドボカシーカレンダー](/handbook/marketing/developer-relations/developer-advocacy/calendar)
- Zoom URL と通話詳細で[オフィスアワーのランニングノートドキュメント](https://docs.google.com/document/d/18ddf5d5xASImrYnAG9P8VJXe0I63SBXy7ufDBBNB5H4/edit#)を更新します
- [Discord で](https://discord.gg/gitlab)発表します
- [GitLab をタグ付け](https://twitter.com/gitlab)してツイートします
- 通話の前日、Discord にリマインダーを投稿します

**通話の実行**

- 通話のライブストリーミングについて全員の許可を求めます。次に、Zoom で「YouTube でライブ配信」ボタンを押してストリーミングを開始します。
- アクセシビリティのために Zoom でクローズドキャプションを有効にします。
- 通話が始まったら、「何があなたをこの通話に連れてきましたか」という質問で自己紹介のラウンドを行います。これは、コミュニティのニーズに合わせて通話を調整し、彼らの質問/期待に応えるのに役立ちます。
- 詳細な議事録を保持します

**通話後**

- YouTube ビデオを「office hour calls」プレイリストに追加します
- Discord にまとめとビデオ録画を投稿します

#### コミュニティチャレンジ

(ハッカソン中だけでなく) 継続的に優先 Issue への貢献を促すため、各[製品ステージ](/handbook/product/categories/)に最大 5 つの優先 Issue のリストを維持し、これらの Issue について MR がマージされた広範コミュニティメンバーに賞品が贈られます。これらの Issue にはラベル [`Community challenge`](https://gitlab.com/groups/gitlab-org/-/issues?label_name%5B%5D=Community+challenge) と、賞品、これらの Issue の割り当てなど、より多くの詳細が記載されます。

## 広範コミュニティ貢献者のサポート

### 広範コミュニティの貢献のブロック解除

Contributor Success チームは、広範コミュニティ貢献者のブロックを解除し、貢献を前進させるのを支援します。GitLab の他のチームがコミュニティ貢献をサポートする能力を持っていないことがありますが、これによってコミュニティの貢献を止めるべきではありません。

これら 10 個の GitLab の価値観が、広範コミュニティのブロック解除と前進を支援する努力をサポートします:

1. [自分でやる](/handbook/values/#do-it-yourself)
1. [Short toes](/handbook/values/#short-toes)
1. [Collaboration is not consensus](/handbook/values/#collaboration-is-not-consensus)
1. [行動バイアス](/handbook/values/#operate-with-a-bias-for-action)
1. [Disagree, commit, and disagree](/handbook/values/#disagree-and-commit)
1. [Escalate to unblock](/handbook/values/#escalate-to-unblock)
1. [Cleanup over sign-up](/handbook/values/#cleanup-over-sign-off)
1. [Minimal valuable change](/handbook/values/#minimal-valuable-change-mvc)
1. [Everything is in draft](/handbook/values/#everything-is-in-draft)
1. [Make two-way door decisions](/handbook/values/#make-two-way-door-decisions)

### 広範コミュニティの貢献を求める

支援を求める GitLab チームメンバーは、貢献を求めて広範コミュニティに連絡することができます。より大きなプロジェクトのリクエストに移る前に、明確な実装計画を持つより小さな `quick win` Issue から始めることが推奨されます。

- [`quick win` Issue の基準](#criteria-for-quick-win-issues)に従って、Issue に `quick win` ラベルを追加します。
- GitLab Community Discord の [#contribute チャンネル](https://discord.com/channels/778180511088640070/997442331202564176)で Issue を共有します。
- コミュニティ貢献者が興味を示したら、彼らを Issue に割り当てます。
- コミュニティ貢献者と連絡を取り、助けが必要かどうかを確認します。

### `quick win` Issue の基準

GitLab は広範コミュニティに、貢献したい場合は `quick win` ラベルが付いた Issue を検索するようガイドしています。これらの Issue は、コミュニティ貢献者にとってわかりやすく、貢献プロセスを学びながら完了するのに十分速いことを意図しています。これは、誰もが貢献し、初回貢献者がコミュニティでオンボーディングするのをサポートする[GitLab のミッション](/handbook/company/mission/#mission)に従っています。[GitLab Bot](https://gitlab.com/gitlab-bot) はこの基準の維持を支援し、Issue が要件を満たさない場合に `quick win` ラベルを削除します。機械的にシンプルに見えるが、ドメイン固有のロールアウト判断が必要な Issue は `quick win` ではありません。

- Issue の説明には、貢献者が始めるのを助けるガイダンス付きの実装計画を、第二または第三レベルの見出しとして含める必要があります。
たとえば、`## Implementation`、`### Implementation`、`## Implementation plan`、`### Implementation guide` はすべて受け入れられます。
このセクションは非常に簡潔でも、Issue を解決するための可能なアクションを提供してもかまいません。
- Issue には 0-3 のウェイトを割り当てる必要があります。
Issue ウェイトは、複雑さと必要な努力を概算する必要があります。
ウェイトを時間の見積もりに関連付けないでください。
- 貢献者が質問したりメンタリングを受けたりできるよう、GitLab チームメンバーまたは経験豊富なコミュニティ貢献者を連絡先として含めることを検討してください。

### `quick win::first-time contributor` Issue の基準

オンボーディングプロセス中、新しい貢献者は `quick win::first-time contributor` Issue にリンクされます。これらの Issue は、私たちの最も簡単で最もわかりやすい Issue を使用して、新しい貢献者が貢献プロセスを学ぶのを助けることを目的としています。`quick win::first-time contributor` Issue を作成する際は、サポート連絡先を追加することが推奨されます。
各貢献者は 1 つの `quick win::first-time contributor` Issue のみを完了できます。最初の Issue を完了した後、貢献者は他の Issue に移るべきです。通常の `quick win` Issue には制限はありません。

- Issue の説明には、貢献者が始めるのを助けるガイダンス付きの実装計画を、第二または第三レベルの見出しとして含める必要があります。
たとえば、`## Implementation`、`### Implementation`、`## Implementation plan`、`### Implementation guide` はすべて受け入れられます。
このセクションは非常に簡潔でも、Issue を解決するための可能なアクションを提供してもかまいません。
- 少なくとも 1 人の GitLab チームメンバーまたは経験豊富なコミュニティ貢献者 (たとえば「Support contact: @username」) を `Implementation plan` セクションでタグ付けすることが推奨されます

### 初回貢献者

貢献者が GitLab 名前空間に対して初めてマージリクエストを開くたびに、ラベル「~1st contribution」が自動的にマージリクエストに適用されます。

### Core チームとの作業

[Core チーム](https://about.gitlab.com/community/core-team/)に関する詳細情報は、[Core チームハンドブックページ](/handbook/marketing/developer-relations/engineering/core-team/)で利用できます。

### 貢献者向け GitLab Duo

誰もが貢献できるという私たちのミッションをサポートするため、私たちはすべての広範コミュニティ貢献者向けに、GitLab コミュニティフォーク全体で無料の GitLab Duo Enterprise
ライセンスを提供しています。
[GitLab Duo](https://about.gitlab.com/gitlab-duo/) は、Code Suggestions、Chat、Root Cause Analysis
など、コードとパイプラインの記述・理解に必要な時間を削減することで効率と効果を高める、AI を活用した機能を備えています。
コミュニティ貢献者は、[コミュニティフォークへのアクセスをリクエスト](https://gitlab.com/groups/gitlab-community/community-members/-/group_members/request_access)した後に承認されると、GitLab Duo を受け取ります。

### 製品ボーナスによる高価値貢献のハイライト

これは FY25Q4 (2024 年 11 月 - 2025 年 1 月) に実施する実験です。

高価値の貢献方向をハイライトするために、Contributor Success チームは、特定の期間内に自分の領域の貢献者に与えることができる、製品マネージャー (PM) 向けの専用予算を設定する場合があります。全体の予算は、ユーザー向け製品ステージ全体に均等に共有され、PM はラベル (`community-bonus::100`、`community-bonus::200`、`community-bonus::300`、`community-bonus::500`) を適用して、特定の Issue/エピックにどれだけの価値を与えるかを示すことができます。ボーナスは Issue がクローズされたときに会計され、エピックの場合、Contributor Success チームは関連する PM が議論したように、特定の Issue に対してボーナスの一部を渡すことができます。PM は Issue を選択する際、予算内に留まることが期待されます。

ボーナスは貢献後にも与えることができます。

このコンテキストでのボーナスは金銭的な助成金ではありません。これらのボーナスポイントは、[貢献者ストア](https://gitlab-contributor.brilliantmade.com/)での購入にのみ使用できます。

#### プロセス

コミュニティボーナスラベルが付いた Issue がクローズされると、[トリアージレポート](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues/960)に表示されます。Developer Relations Engineering チームメンバーは:

##### 貢献を検証する

- Issue を訪問し、広範コミュニティ貢献者に割り当てられていることを確認します。
- リンクされたマージリクエストが広範コミュニティ貢献者によって作成されたことを確認します。
- 上記が明確であれば、[ボーナスポイントを授与](#award-the-bonus-points)に進みます。
- 上記が真でない場合、`community-bonus::` スコープラベルを削除します。
- 不確実な点がある場合は、Issue で関連チームに ping して確認します。

##### ボーナスポイントを授与する

- https://contributors.gitlab.com/users/[GitLab username] に移動
- **Bonus Points** までスクロール
- **Add points** をクリック
  - 理由として Issue リンクを使用
  - ボーナスポイント数を入力
  - アクティビティタイプとして `Community bonus` を選択
  - **Add points** を選択
- 授与したポイントが **Bonus Points** セクションに表示されることを確認
- GitLab で、Issue に `community-bonus-awarded` ラベルを追加

### クレジットカードを所有していない貢献者向け

クレジットカードを所有しておらず、手動で検証する必要がある貢献者には、
登録して [サポートリクエスト](https://support.gitlab.com/hc/en-us/requests/new)を発行するよう依頼します
**Gitlab.com user accounts and login issues** の理由を使用します。

### コンピュート分または他の CI/CD リソースを使い切った貢献者向け

広範コミュニティメンバーは、個人フォークから作業している場合、月次のコンピュート分を使い切ったり、他の [GitLab CI/CD 制限](https://docs.gitlab.com/ee/user/gitlab_com/index#gitlab-cicd)に遭遇することがあります。

解決策は、[GitLab コミュニティフォーク](https://gitlab.com/gitlab-community/meta#about)から作業することです。

### 貢献者への連絡

貢献者のプライバシーを尊重するため、彼らに連絡するために公開されている連絡データのみを使用します。

貢献者に連絡する方法をいくつか紹介します:

- GitLab ユーザー名を使用して Issue で彼らをメンションできます。
- 私たちのコミュニケーションプラットフォーム (Discord、Slack など) を介してプライベートに。
- ユーザーは GitLab プロフィールに E メールを持っている場合があります。場合によっては、ユーザーは他のプラットフォーム (例: GitHub) で同じユーザー名を持っており、そのプロフィールにより多くの情報がある場合があります。
- [プライベートコミット E メール](https://docs.gitlab.com/ee/user/profile/index#private-commit-email)を使用することを選択しない限り、E メールアドレスは git コミットに保存されます。

連絡する最良の方法を見つけたら、メンション、E メール、または Discord を使うことを選択できます。

### 貢献者ブログ投稿シリーズ

目標は、コミュニティの貢献者を取り上げる定期的なブログ投稿を発行することです。フォーマットは[コミュニティメンバーとのカジュアルな Q&A](https://about.gitlab.com/blog/2018/08/08/contributor-post-vitaliy/) で、[GitLab ブログページ](https://about.gitlab.com/blog/)に投稿されます。

ブログ投稿を開発する際は、[ブログガイドライン](/handbook/marketing/blog/)に従ってください。

## 貢献者アウトリーチキャンペーン

アウトリーチキャンペーンは、貢献を停止した過去の GitLab 貢献者や、貢献に興味を表明したが始めていないユーザーと再びつながるのに役立ちます。
連絡する際、彼らの過去および/または将来の貢献を認識して、彼らの名前で [GitLab forest](https://tree-nation.com/profile/gitlab) に木を植えます。

### アウトリーチの目標

Contributor Success チームは、繰り返し可能なアウトリーチキャンペーンを作成するために、3 つの目標で異なる基準とメッセージを試しました:

1. 新しいマージリクエストを開くコミュニティメンバーを最大化
1. キャンペーンを実行する Contributor Success の時間コミットメントを最小化
1. アウトリーチキャンペーンが迷惑になったり、マーケティングスパムのように見えたりするのを防ぐ

### 復帰貢献者の候補基準

- 過去 3 か月間に開かれたマージリクエストが 0 件
- 過去 12 か月間に 2 件以上のマージリクエストがマージされている必要がある
- 以前にアウトリーチキャンペーンで連絡されていない

### 新規貢献者の候補基準

- 少なくとも 1 か月前にコミュニティフォークへのアクセスをリクエストして受け取った
- 履歴にマージされたマージリクエストがない
- 以前にアウトリーチキャンペーンで連絡されていない

### 結果の追跡

アウトリーチキャンペーンの結果は、[アウトリーチ結果スプレッドシート](https://docs.google.com/spreadsheets/d/1oAkJsYoeRmcYevacWb_PK339C1F-wi-cfy4p7F7BlSg/edit?usp=sharing)
で追跡され、[すべてのアウトリーチキャンペーンに関するレポート Issue](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues/517) で報告されます。

#### 復帰貢献者キャンペーンの結果

| アウトリーチキャンペーン | 基準         | アウトリーチ総ユーザー | 復帰ユーザー | ユーザー復帰率 | マージ済み MR | 開かれた MR | クローズ MR |
|----------------------|------------------|----------------------|----------------|------------------|-----------|-----------|-----------|
| 2023 年 12 月        | 6 か月アイドル    | 49                   | 7              | 14.29%           | 11        | 0         | 2         |
| 2024 年 1 月         | 3 か月アイドル    | 124                  | 12             | 9.68%            | 15        | 2         | 2         |
| 2024 年 4 月           | 3 か月アイドル    | 40                   | 5              | 12.50%           | 12        | 1         | 1         |

#### 新規貢献者キャンペーンの結果

| アウトリーチキャンペーン | 基準         | アウトリーチ総ユーザー | 復帰ユーザー | ユーザー復帰率 | マージ済み MR | 開かれた MR | クローズ MR |
|----------------------|------------------|----------------------|----------------|------------------|-----------|-----------|-----------|
| 2024 年 4 月           | 0 件の貢献  | 274                  | 6              | 2.19%            | 4         | 2         | 1         |

#### 結果に関する観察

- これまでのところ、復帰貢献者キャンペーンは平均ユーザー復帰率 11%、24 名の復帰貢献者、38 件のマージ済みマージリクエストで成功しています。
- 4 月の新規貢献者キャンペーンでの実験は 2% の貢献率と低調でした。
  - このキャンペーンには、ユーザーがコミュニティフォークアクセスをリクエストしてからどれくらい前かの時間制限がなく、多くのユーザーがおそらく始めることへの興味を失っていました。
  - 復帰貢献者は、マージリクエストを開く点で新規貢献者よりも成功しやすいことが予想されます。
- 開かれたマージリクエストとマージされたマージリクエストの結果に加えて、Issue でのユーザーエンゲージメント、オンボーディングタスクの完了、植樹への感謝を観察しました。
- 多くの貢献者は、これらの結果に表示されるためにアウトリーチから 1 か月以内にマージリクエストを作成する空きがないでしょう。キャンペーンは、後で貢献する機会の前向きなリマインダーになる可能性があります。

### アウトリーチキャンペーンのスケジュール

アウトリーチキャンペーンは 3 か月ごとに実行することを目指していますが、貢献者を引き付ける可能性のある発表と一致させる必要があります。
たとえば、今後のハッカソンや、GDK-in-a-box のような新しい貢献機能を発表します。

### アウトリーチキャンペーンのワークフロー

#### 候補プールのレビュー

Contributor Success チームは、次のものを削除するために候補プールをレビューします:

- GitLab アカウントまたは個人アカウントのいずれかを持つ既知の GitLab チームメンバー
- 失効したが、キャンペーンの外で別途連絡される必要がある長期貢献者 (例: Core メンバー、元 MVP、GitLab Heroes など)
- 行動規範違反があった、連絡されたくない、または GitLab に貢献したくないと表明した既知のコミュニティメンバー

#### Issue を作成して木を植える

- [reward engine プロジェクトの一時ブランチ `temp-outreach-path`](https://gitlab.com/gitlab-org/developer-relations/contributor-success/reward-engine/-/tree/temp-outreach-patch?ref_type=heads) を使用します
- [`RewardIssuer` モジュール](https://gitlab.com/gitlab-org/developer-relations/contributor-success/reward-engine/-/blob/temp-outreach-patch/lib/reward_issuer/gitlab.rb?ref_type=heads)の `recipients` 変数に候補ユーザー名を貼り付けます
- `bundle exec bin/reward_engine` を実行
- アウトリーチメッセージがボットではなく実際のチームメンバーから届くように、個人アクセストークンを使用します

#### アウトリーチ Issue への対応とクローズ

- アウトリーチ Issue で質問に回答するか、フィードバックを認識します
- 2 か月後にクローズメッセージで Issue をクローズし、貢献者が Issue を再オープンしてサポートが必要な場合は連絡するよう促します

### 潜在的なイテレーション

- ロール基準または除外候補リストに対して候補をチェックすることで、自動化により手動レビューステップを削減
- アウトリーチキャンペーン後に貢献するユーザーをそれぞれの Issue で感謝し、戻ってきた理由を共有する機会を与える

## 貢献者の表彰

### ハイライトされた貢献への感謝

時々、広範コミュニティメンバーが特に優れた貢献を提出します。任意の GitLab チームメンバーまたは広範コミュニティが、[彼らを Notable Contributor として推薦するプロセス](https://contributors.gitlab.com/docs/notable-contributors)に従うことができます。

### 年間トップ貢献者

定期的な貢献者を認識するため、各暦年のトップ貢献者のリストが [Top Annual Contributors ページ](https://about.gitlab.com/community/top-annual-contributors/) に公開されます。トップ貢献者には 3 つのカテゴリがあります:

- SuperStar: 75 件以上のマージ済み MR
- Star: 11 件から 75 件のマージ済み MR
- Enthusiast: 5 件から 10 件のマージ済み MR

これらの貢献者向けにカスタマイズされた GitLab グッズが作成され、Printfection で利用可能になります。GitLab チームメンバーは、以下の手順に従って広範コミュニティメンバーに賞を送ることができます。

1. 1Password の認証情報を使用して Printfection にログインします。
1. `Campaigns` の下の `Giveaways` に移動し、新しい `GIVEAWAY CAMPAIGN` を作成します (複数のアイテムを含めたい場合は、`Merchandise` タブの下に[新しい `Kit` を作成する](/handbook/marketing/brand-and-product-marketing/brand/merchandise-handling/)必要があるかもしれません)。
1. アイテム/キットをキャンペーンに追加します。
1. 各貢献者用の Giveaway リンクを生成します。
1. 個別の E メールに Giveaway リンクを含めて Top Annual Contributors に送信します。

## 貢献者ライフサイクルセグメント

GitLab コードコントリビューターコミュニティを理解、サポート、エンパワーする取り組みにおいて、次のライフサイクルセグメントを考えました。

これらのライフサイクルセグメントは個々のユーザーレベルで割り当てられます。

| 貢献者の経験レベル | マージ済み MR |
| ------ | ------ |
| Level 0 | 0 MR |
| Level 1 | 1 - 3 MR |
| Level 2 | 4 - 25 MR |
| Level 3 | 26 - 75 MR |
| Level 4 | 75+ MR |

| 貢献者ステータス | マージ済み MR | 期間 |
| ------ | ------ | ------ |
| カジュアル貢献者 | < 10 MR | 過去 6 か月 |
| 通常貢献者 | 10+ MR | 過去 6 か月 |
| リーディング貢献者 | 20+ MR | 過去 6 か月 |
| [Core](https://about.gitlab.com/community/core-team/) | 選挙ベース | 全期間 |

貢献者コミュニティをセグメント化することで、貢献者がこのファネル全体でどのように「移動」しているか、そして彼らのジャーニーを通じてどのようにサポートできるかをよりよく理解できるようになります。

目標は、貢献者をサポートし表彰する方法を特定することにより、すべてのセグメント (非アクティブセグメントを除く) でコードコントリビューターを増やすことです。

## 貢献者メトリクス

注: これは現在、貢献者メトリクスを収集できるすべての場所の作業リストです。これは*まだ*貢献者プログラムの成功をモニタリングするために使用するメトリクスの最終セットではありません。

### Tableau ダッシュボード

社内では、GitLab はさまざまな KPI のパフォーマンスを追跡するために [Tableau](/handbook/enterprise-data/platform/tableau/) を使用しています。以下は、コミュニティ関連ダッシュボードのリストです。

| ダッシュボード | 説明 |
| --- | --- |
| [Wider Community Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/WiderCommunityPIsPart1/WiderCommunityPIsDashboardPart1) | 貢献者 (人) と組織に関連するメトリクス |
| [MRARR Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/MRARRDashboard_17055242209630/MRARRDashboard) | GitLab の顧客でもある貢献組織に関連するメトリクス |

### GitLab.com

gitlab.com 上のプロジェクト (たとえば CE、EE、Omnibus、Shell など) の `Merge Requests` ページからデータを直接クエリし、マイルストーン、ラベルなどに適切なフィルタを適用することもできます。例の一部は、以下のメトリクステーブルに記載されています。

### 貢献者数

過去には、[この例](https://about.gitlab.com/blog/2018/08/13/join-the-gitlab-community/)で見られるように、GitLab コミュニティ (GitLab チームメンバー + 広範コミュニティ) の 2,000 以上の貢献者をしばしば言及していました。しかし、これには古い [https://contributors.gitlab.com](https://web.archive.org/web/20190619012814/https://contributors.gitlab.com/) ページに基づいて、CE および EE プロジェクトへの貢献者のみが含まれていました。

他の GitLab プロジェクトを含めると、貢献者の総数ははるかに多くなります。

- 総コードコントリビューター: GitLab チームメンバーと広範コミュニティ貢献者を含む (2015 年以降)
- 広範コミュニティコードコントリビューター: 広範コミュニティ貢献者のみを含む (2015 年以降)
- これらの数値は、マージリクエストがマージされたか、クローズされたか、まだオープンかに関係なく、少なくとも 1 つのマージリクエストを開いた貢献者をカウントします。

- 成功した貢献 (マージリクエストがマージされた) を持つ広範コミュニティコードコントリビューターの数は、Wider Community Dashboard を見ることで見つけることができます。
- 広範コミュニティメンバーの定義の更新については、[トップ誤用語ページ](/handbook/communication/top-misused-terms/)を参照してください。

GitLab の貢献者数について人々が尋ねたとき、彼らが総コードコントリビューターまたは広範コミュニティコードコントリビューターについて尋ねているかを明確にするのが最善です。ほとんどの場合、人々は広範コミュニティの数により興味を持つ傾向があります。

[Contribute to GitLab ガイド](https://about.gitlab.com/community/contribute/)に記載されているように、コード以外にもコミュニティが GitLab に貢献する方法があることに言及することも重要です。翻訳、エバンジェリズム、フォーラムでのサポート、開かれた Issue などの貢献は、上記のメトリクスには含まれていません。

### モニタリング対象のプロジェクト

私たちは [`gitlab-org` グループ](https://gitlab.com/groups/gitlab-org)のさまざまなプロジェクトでの貢献を監視・表彰しており、[GitLab プロジェクト](https://gitlab.com/gitlab-org/gitlab)だけではありません。

一般的なルールとして、プロジェクトは `gitlab-org` グループのマイルストーンと `Community contribution` ラベルを使用している場合、広範コミュニティ貢献を監視するためにセットアップされます。

[モニタリング対象の `gitlab-org` グループプロジェクト](https://gitlab.com/Bitergia/c/gitlab/sources/blob/master/projects.json)の網羅的なリストを参照してください。

GitLab への貢献に興味がありますか? [利用可能な貢献機会はこちら](https://about.gitlab.com/community/contribute/)で確認してください。
