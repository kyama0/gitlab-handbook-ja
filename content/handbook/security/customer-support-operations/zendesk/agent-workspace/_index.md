---
title: 'Agent Workspace'
description: 'Zendesk Agent Workspace に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/agent-workspace/
upstream_sha: 78b430bc8e2a925f210024d512218ce1d8d42106
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

Zendesk Agent Workspace は、エージェントがチケットを受信、管理、応答するために使用する主要なインターフェースです。このページでは、ワークスペース内で利用可能な主要機能とコンポーネントについて説明し、該当する箇所では関連する GitLab または Zendesk のドキュメントを参照します。

## チケットタブ

エージェントは複数のチケットを同時に開くことができ、それぞれワークスペース上部のタブからアクセスできます。[Using ticket tabs to manage conversations](https://support.zendesk.com/hc/en-us/articles/4408844108826-Using-ticket-tabs-to-manage-conversations) を参照してください。

## チケットメタデータ

チケットの左側パネルには、チケットを分類およびルーティングするために使用される、コアとなるメタデータフィールドが含まれています。

### Brand

チケットが提出された Zendesk ブランド。[Multibrand resources](https://support.zendesk.com/hc/en-us/articles/4408833921306-Multibrand-resources) を参照してください。

#### Requester

チケットを提出したエンドユーザー。[Changing the ticket requester](https://support.zendesk.com/hc/en-us/articles/4408886900506-Updating-ticket-requesters-and-organizations#topic_jwd_bnr_wt) を参照してください。

#### Assignee

現在チケットを担当しているエージェントとそれに関連付けられたグループ。

#### CC List

チケット更新の CC に追加された、追加のエージェントまたはエンドユーザー。

#### Ticket Form

依頼者から構造化された情報を取得するために使用されるフォーム。チケットフォームの管理方法に関する詳細は、[チケットフォームに関する Customer Support Operations ドキュメント](../tickets/forms/) を参照してください。

#### Tags

ルーティング、レポート、自動化のためにチケットへ自動的または手動で適用されるラベル。タグの使用と管理方法の詳細は、[タグに関する Customer Support Operations ドキュメント](../tags/) を参照してください。

#### Ticket Type

チケットを Question、Incident、Problem、または Task に分類します。[About ticket types](https://support.zendesk.com/hc/en-us/articles/4408886739098-About-ticket-fields#:~:text=your%20business%20rules.-,Type,-There%20are%20four) を参照してください。

### カスタムチケットフィールド

GitLab のニーズに固有の情報を取得するために設計された追加のフィールド。これらはルーティング、自動化、レポートに使用されます。チケットフォームの管理方法に関する詳細は、[フィールドに関する Customer Support Operations ドキュメント](../tickets/fields/) を参照してください。

## マクロ

**Apply macro** ボタンにより、エージェントは事前構成されたアクションのセット (コメントの追加、フィールドの設定、チケットステータスの変更など) を 1 クリックでチケットに適用できます。マクロの使用と管理方法の詳細は、[マクロに関する Customer Support Operations ドキュメント](../macros/) を参照してください。

## コメント履歴

会話スレッドはコメントを時系列順 (最古が上、最新が下) で表示します。

## コメントエディター

コメントエディターは、公開返信または内部メモの作成と送信に使用されます。エージェントはテキストの書式設定を行い、添付ファイルを追加できます。

### 公開コメントと内部コメント

エージェントは **Public reply** (依頼者に表示) と **Internal note** (エージェントにのみ表示) を切り替えられます。[Adding comments to tickets](https://support.zendesk.com/hc/en-us/articles/4408828489370-Adding-comments-to-tickets) を参照してください。

### Draft Mode

これは、公開コメント更新を提出するエージェントに、コメントがチケットで公に送信される前に確認ウィンドウが表示されるようにします。[Writing drafts of public replies in tickets](https://support.zendesk.com/hc/en-us/articles/5627101293722-Writing-drafts-of-public-replies-in-tickets) を参照してください。

### テキストフォーマット

エディターは、太字、斜体、リスト、見出し、コードブロックなどのリッチテキスト書式設定をサポートしています。[Adding formatting to ticket comments](https://support.zendesk.com/hc/en-us/articles/4408828489370-Adding-comments-to-tickets#topic_djd_2jx_4y) を参照してください。リッチテキスト書式設定に加え、Markdown コマンドもサポートされています。[Formatting text with Markdown](https://support.zendesk.com/hc/en-us/articles/4408846544922) を参照してください。

### 絵文字

エージェントは、コメントエディターのツールバーにある絵文字ピッカーを使用してコメントに絵文字を挿入できます。

### 添付ファイル

ファイルは、コメントエディターから直接、公開返信と内部メモの両方に添付できます。[Adding attachments to ticket comments](https://support.zendesk.com/hc/en-us/articles/4408835822618-Adding-attachments-to-ticket-comments) を参照してください。

### ハイパーリンク

コメント内のテキストは、コメントエディターのツールバーを使ってクリック可能なハイパーリンクとして書式設定できます。

### Glean インテグレーション

コメントエディターは [Glean](../../../../business-technology/enterprise-applications/guides/glean-guide/) と統合されており、ツールバーに専用の Glean ボタンが表示されます。これにより、エージェントは生成 AI を使用して顧客への返信をドラフトできます。

## 検索

トップナビゲーションバーの検索アイコンは、グローバル検索インターフェースを開き、エージェントは Zendesk 全体でチケット、ユーザー、組織を見つけられます。[Using Zendesk Support advanced search](https://support.zendesk.com/hc/en-us/articles/4408835086106-Using-Zendesk-Support-advanced-search) を参照してください。

## プロフィールメニュー

トップナビゲーションバーのプロフィールメニューは、エージェントのプロフィール、通知設定、オンラインステータスを設定する機能へのアクセスを提供します。

## カスタマーコンテキストパネル

チケットの右側にあるコンテキストパネルは、依頼者に関する情報 (プロフィール、最近のチケット、対応履歴など) を表示します。[Using the context panel](https://support.zendesk.com/hc/en-us/articles/4408836526362-Using-the-context-panel) を参照してください。

## ナレッジパネル

ナレッジパネルにより、エージェントは GitLab Help Centre を検索し、記事をチケットにリンクし、コンテンツを返信に直接引用できます。[Using help center content in your tickets without leaving Agent Workspace](https://support.zendesk.com/hc/en-us/articles/5581313653530-Using-help-center-content-in-your-tickets-without-leaving-Agent-Workspace) を参照してください。

## アプリ

Zendesk アプリはエージェントの機能を拡張し、コンテキストパネルに表示されます。利用可能なアプリとその構成方法に関する詳細は、[Zendesk アプリに関する GitLab Support Operations ドキュメント](../apps/) を参照してください。

### アプリのピン留め

エージェントは、現在インストールされているすべてのアプリリストをスクロールする代わりに、頻繁に使用するアプリをコンテキストパネルにピン留めして、簡単にアクセスできるようにできます。[Managing personal app shortcuts](https://support.zendesk.com/hc/en-us/articles/6066877041690-Managing-personal-app-shortcuts) を参照してください。

## チケットの提出

### 提出ボタン

チケットの下部にある **Submit as** ボタンにより、エージェントは特定のステータスでチケットを保存できます。[Updating a ticket and changing its status](https://support.zendesk.com/hc/en-us/articles/4408832151834-Updating-and-solving-tickets#id_xsq_5f5_st) を参照してください。

### 提出後のナビゲーションオプション

エージェントは、チケットが提出された後のデフォルト挙動を設定できます。オプションは次のとおりです:

- **Stay on ticket** — 提出後、現在のチケットに留まります。
- **Next ticket in view** — 現在のビュー内の次のチケットへ移動します。
- **Close ticket** — チケットタブを閉じ、前の画面へ戻ります。

[Working with tickets in a view](https://support.zendesk.com/hc/en-us/articles/4408829483930-Accessing-your-views-of-tickets) を参照してください。

## チケットの翻訳

### 概要
 
Zendesk は Agent Workspace 内で AI 駆動のチケット翻訳を提供しており、エージェントは異なる言語を話すエンドユーザーとコミュニケーションできます。有効化されると、受信メッセージ (顧客から) と送信メッセージ (エージェントから) の両方が、Amazon Nova Micro を使ってリアルタイムに自動翻訳されます。
 
### 翻訳の仕組み
 
#### エージェントから見える内容
 
言語の違いが検出されると、チケットの上部に翻訳バナーが表示され、検出された顧客の言語をエージェントに知らせます。エージェントは次のことを行えます:
 
- **「Translate」をクリック** — 受信メッセージはエージェントの言語に翻訳され、送信メッセージは顧客の言語に翻訳されます。
- **バナーを非表示にする** — 今は翻訳を辞退します (後でチケットの Options メニューから再度有効化できます)。
- **検出された言語を修正** — 検出が間違っていた場合、バナー内のドロップダウンを使って正しい言語を選択します。

チケットで翻訳がアクティブになると:
 
- 翻訳されたチケットには、現在翻訳中であることを示すインジケーターが表示されます。
- エージェントは任意の顧客メッセージで「Show original」をクリックして、翻訳されていないテキストを見ることができます。
- エージェントは自分自身のメッセージで「Show translation」をクリックして、顧客に何が送られたかを見ることができます。
- エージェントの翻訳設定は、チケットがクローズされ再オープンされても保持されます。再度有効化する必要はありません。
- 現在のチケットでの翻訳は、翻訳バナーの「Stop」ボタンをクリックして停止できます。

#### 顧客から見える内容
 
エージェントが翻訳を有効にしたとき、顧客には通知されません。エージェントのメッセージは、メールまたはサポートポータルのいずれで閲覧されても、検出された顧客の言語で自動的に表示されます。
 
### 送信前のアウトバウンドメッセージの翻訳
 
送信メッセージを作成しているとき、エージェントはコンポーザー内の **Translate** ボタンをクリックして、顧客に送信する前に翻訳を生成できます。これは簡単に元に戻せないため、メッセージに修正が必要な場合は、ゼロから書き直す必要があります。

詳細は、[Translating conversations in tickets](https://support.zendesk.com/hc/en-us/articles/6327770807450-Translating-conversations-in-tickets) を参照してください。

## 追加リソース

- [About the Zendesk Agent Workspace](https://support.zendesk.com/hc/en-us/articles/4408821259930-About-the-Zendesk-Agent-Workspace)
- [Documentation resources for the Zendesk Agent Workspace](https://support.zendesk.com/hc/en-us/articles/4408827107226-Documentation-resources-for-the-Zendesk-Agent-Workspace)
