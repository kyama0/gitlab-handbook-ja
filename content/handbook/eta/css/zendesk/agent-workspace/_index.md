---
title: 'エージェントワークスペース'
description: 'Zendesk Agent Workspace に関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/agent-workspace/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
lastmod: "2026-07-14T15:22:25-05:00"
translated_at: "2026-07-19T07:20:00+09:00"
translator: codex
stale: false
---

Zendesk Agent Workspace は、エージェントがチケットを受け取り、管理し、応答するために使用する主要なインターフェースです。このページでは、ワークスペース内で利用できる主な機能とコンポーネントを取り上げ、該当する GitLab または Zendesk のドキュメントを参照します。

## チケットタブ

エージェントは複数のチケットを同時に開くことができ、それぞれワークスペース上部のタブからアクセスできます。[会話を管理するためのチケットタブの使用](https://support.zendesk.com/hc/en-us/articles/4408844108826-Using-ticket-tabs-to-manage-conversations)を参照してください。

## チケットメタデータ

チケットの左側パネルには、チケットを分類してルーティングするために使用する主要なメタデータフィールドがあります。

### ブランド

チケットが送信された Zendesk ブランドです。[マルチブランドリソース](https://support.zendesk.com/hc/en-us/articles/4408833921306-Multibrand-resources)を参照してください。

#### 依頼者

チケットを送信したエンドユーザーです。[チケットの依頼者を変更する](https://support.zendesk.com/hc/en-us/articles/4408886900506-Updating-ticket-requesters-and-organizations#topic_jwd_bnr_wt)を参照してください。

#### 担当者

現在チケットを担当しているエージェントと関連グループです。

#### CC リスト

チケットの更新で CC される追加のエージェントまたはエンドユーザーです。

#### チケットフォーム

依頼者からの構造化された情報を取得するためのフォームです。チケットフォームの管理方法について詳しくは、[チケットフォームに関する Customer Support Systems ドキュメント](../tickets/forms/)を参照してください。

#### タグ

ルーティング、レポート、オートメーションのために、チケットに自動または手動で適用されるラベルです。タグの使用方法と管理方法について詳しくは、[タグに関する Customer Support Systems ドキュメント](../tags/)を参照してください。

#### チケットタイプ

チケットを Question、Incident、Problem、または Task として分類します。[チケットタイプについて](https://support.zendesk.com/hc/en-us/articles/4408886739098-About-ticket-fields#:~:text=your%20business%20rules.-,Type,-There%20are%20four)を参照してください。

### カスタムチケットフィールド

GitLab のニーズに固有の情報を取得するために設計された追加フィールドです。これらはルーティング、オートメーション、レポートで使用されます。チケットフォームの管理方法について詳しくは、[フィールドに関する Customer Support Systems ドキュメント](../tickets/fields/)を参照してください。

## マクロ

**マクロを適用**ボタンを使用すると、コメントの追加、フィールドの設定、チケットステータスの変更など、事前設定された一連のアクションをワンクリックでチケットに適用できます。マクロの使用方法と管理方法について詳しくは、[マクロに関する Customer Support Systems ドキュメント](../macros/)を参照してください。

## コメント履歴

会話スレッドには、コメントが時系列順に表示されます。最も古いコメントが上部、最も新しいコメントが下部に表示されます。

## コメントエディター

コメントエディターは、公開返信または内部メモを作成して送信するために使用します。エージェントはテキストの書式設定と添付ファイルの追加ができます。

### 公開コメントと内部コメント

エージェントは、**公開返信**（依頼者に表示）と**内部メモ**（エージェントにのみ表示）を切り替えられます。[チケットにコメントを追加する](https://support.zendesk.com/hc/en-us/articles/4408828489370-Adding-comments-to-tickets)を参照してください。

### ドラフトモード

公開コメントの更新をチケットに公開送信する前に、エージェントに確認ウィンドウが表示されるようにします。[チケット内の公開返信の下書きを作成する](https://support.zendesk.com/hc/en-us/articles/5627101293722-Writing-drafts-of-public-replies-in-tickets)を参照してください。

### テキスト書式設定

エディターは太字、斜体、リスト、見出し、コードブロックを含むリッチテキストの書式設定をサポートします。[チケットコメントに書式を追加する](https://support.zendesk.com/hc/en-us/articles/4408828489370-Adding-formatting-to-ticket-comments#topic_djd_2jx_4y)を参照してください。リッチテキストの書式設定に加えて、Markdown コマンドもサポートしています。[Markdown を使用してテキストを書式設定する](https://support.zendesk.com/hc/en-us/articles/4408846544922)を参照してください。

### 絵文字

エージェントはコメントエディターのツールバーにある絵文字ピッカーを使用して、コメントに絵文字を挿入できます。

### 添付ファイル

コメントエディターから、公開返信と内部メモの両方にファイルを直接添付できます。[チケットコメントに添付ファイルを追加する](https://support.zendesk.com/hc/en-us/articles/4408835822618-Adding-attachments-to-ticket-comments)を参照してください。

### ハイパーリンク

コメント内のテキストは、コメントエディターのツールバーを使用してクリック可能なハイパーリンクとして書式設定できます。

### Glean 統合

コメントエディターは[Glean](/handbook/eta/ai/tools/glean/)と統合されており、ツールバーに専用の Glean ボタンが表示されます。生成 AI を使用して、顧客への返信の下書きを作成できます。

## 検索

上部ナビゲーションバーの検索アイコンをクリックすると、グローバル検索インターフェースが開き、エージェントは Zendesk 全体でチケット、ユーザー、組織を見つけることができます。[Zendesk Support の高度な検索を使用する](https://support.zendesk.com/hc/en-us/articles/4408835086106-Using-Zendesk-Support-advanced-search)を参照してください。

## プロフィールメニュー

上部ナビゲーションバーのプロフィールメニューでは、エージェントのプロフィール、通知設定、オンラインステータスの設定にアクセスできます。

## 顧客コンテキストパネル

チケット右側のコンテキストパネルには、プロフィール、最近のチケット、やり取りの履歴など、依頼者に関する情報が表示されます。[コンテキストパネルを使用する](https://support.zendesk.com/hc/en-us/articles/4408836526362-Using-the-context-panel)を参照してください。

## ナレッジパネル

ナレッジパネルでは、エージェントは GitLab ヘルプセンターを検索し、記事をチケットにリンクして、コンテンツを返信に直接引用できます。[Agent Workspace を離れずにチケットでヘルプセンターのコンテンツを使用する](https://support.zendesk.com/hc/en-us/articles/5581313653530-Using-help-center-content-in-your-tickets-without-leaving-Agent-Workspace)を参照してください。

## アプリ

Zendesk アプリはエージェントの機能を拡張し、コンテキストパネルに表示されます。利用可能なアプリとその設定方法については、[Zendesk アプリに関する GitLab Support Systems ドキュメント](../apps/)を参照してください。

### アプリをピン留めする

エージェントは頻繁に使用するアプリをコンテキストパネルにピン留めできるため、現在インストールされているアプリの一覧全体をスクロールしなくても簡単にアクセスできます。[個人用アプリのショートカットを管理する](https://support.zendesk.com/hc/en-us/articles/6066877041690-Managing-personal-app-shortcuts)を参照してください。

## チケットを送信する

### 送信ボタン

チケット下部の**名前を付けて送信**ボタンを使用すると、エージェントは特定のステータスでチケットを保存できます。[チケットを更新してステータスを変更する](https://support.zendesk.com/hc/en-us/articles/4408832151834-Updating-and-solving-tickets#id_xsq_5f5_st)を参照してください。

### 送信後のナビゲーションオプション

エージェントは、チケットが送信された後のデフォルトの動作を設定できます。オプションは次のとおりです:

- **チケットに留まる** — 送信後も現在のチケットに留まります。
- **ビュー内の次のチケット** — 現在のビュー内の次のチケットに移動します。
- **チケットを閉じる** — チケットタブを閉じて前の画面に戻ります。

[ビュー内のチケットを操作する](https://support.zendesk.com/hc/en-us/articles/4408829483930-Accessing-your-views-of-tickets)を参照してください。

## チケットを翻訳する

### 概要
 
Zendesk は Agent Workspace 内で AI を活用したチケット翻訳を提供しており、エージェントは異なる言語を話すエンドユーザーとコミュニケーションできます。有効にすると、受信メッセージ（顧客から）と送信メッセージ（エージェントから）の両方が、Amazon Nova Micro を使用してリアルタイムで自動翻訳されます。
 
### 翻訳の仕組み
 
#### エージェントに表示される内容
 
言語の違いが検出されると、チケット上部に翻訳バナーが表示され、エージェントに顧客の検出言語が通知されます。エージェントは次の操作ができます:
 
- **「翻訳」をクリック** — 受信メッセージはエージェントの言語に翻訳され、送信メッセージは顧客の言語に翻訳されます。
- **バナーを閉じる** — 現時点では翻訳を拒否します（後でチケットの Options メニューから再度有効にできます）。
- **検出された言語を修正する** — 検出が誤っていた場合は、バナーのドロップダウンを使用して正しい言語を選択します。

チケットで翻訳が有効になると:
 
- 翻訳されたチケットには、現在チケットが翻訳されていることを示す表示があります。
- エージェントは任意の顧客メッセージで「原文を表示」をクリックして、翻訳されていないテキストを確認できます。
- エージェントは自身のメッセージで「翻訳を表示」をクリックして、顧客に送信された内容を確認できます。
- エージェントの翻訳設定はチケットを閉じて再度開いたときも維持されるため、再度有効にする必要はありません。
- 現在のチケットの翻訳は、翻訳バナーの「停止」ボタンをクリックして停止できます。

#### 顧客に表示される内容
 
エージェントが翻訳を有効にしても、顧客には通知されません。メール経由か Support Portal 経由かにかかわらず、エージェントのメッセージは顧客の検出言語で自動的に表示されます。
 
### 送信前に送信メッセージを翻訳する
 
送信メッセージの作成時、エージェントはコンポーザー内の**翻訳**ボタンをクリックして、顧客に送信する前に翻訳を生成できます。これは簡単には元に戻せないため、メッセージを修正する必要がある場合は、最初から書き直す必要があります。

詳しくは、[チケット内の会話を翻訳する](https://support.zendesk.com/hc/en-us/articles/6327770807450-Translating-conversations-in-tickets)を参照してください。

## 追加リソース

- [Zendesk Agent Workspace について](https://support.zendesk.com/hc/en-us/articles/4408821259930-About-the-Zendesk-Agent-Workspace)
- [Zendesk Agent Workspace のドキュメントリソース](https://support.zendesk.com/hc/en-us/articles/4408827107226-Documentation-resources-for-the-Zendesk-Agent-Workspace)
