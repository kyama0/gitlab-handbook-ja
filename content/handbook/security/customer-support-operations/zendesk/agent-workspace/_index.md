---
title: 'Agent Workspace'
description: 'Zendesk Agent Workspace に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/agent-workspace/
upstream_sha: 839c14e40e08e6fd4099a01ee623aaf85faafd12
translated_at: "2026-06-01T21:39:56Z"
translator: claude
stale: false
lastmod: "2026-06-01T17:35:18+01:00"
---

Zendesk Agent Workspace は、エージェントがチケットを受信、管理、応答するために使用する主要なインターフェースです。このページでは、ワークスペース内で利用可能な主要機能とコンポーネントについて説明し、該当する箇所では関連する GitLab または Zendesk のドキュメントを参照します。

## チケットタブ

エージェントは複数のチケットを同時に開いておけ、それぞれワークスペース上部のタブからアクセスできます。[Using ticket tabs to manage conversations](https://support.zendesk.com/hc/en-us/articles/4408844108826-Using-ticket-tabs-to-manage-conversations) を参照してください。

## チケットメタデータ

チケットの左側のパネルには、チケットの分類とルーティングに使用される主要なメタデータフィールドが含まれます。

### ブランド

チケットが提出された Zendesk ブランドです。[Multibrand resources](https://support.zendesk.com/hc/en-us/articles/4408833921306-Multibrand-resources) を参照してください。

#### リクエスター

チケットを提出したエンドユーザーです。[Changing the ticket requester](https://support.zendesk.com/hc/en-us/articles/4408886900506-Updating-ticket-requesters-and-organizations#topic_jwd_bnr_wt) を参照してください。

#### アサイニー

現在チケットに対して責任を負うエージェントおよび関連するグループです。

#### CC リスト

チケットの更新が CC される追加のエージェントまたはエンドユーザーです。

#### チケットフォーム

リクエスターから構造化された情報を取得するために使用されるフォームです。チケットフォームの管理方法の詳細については、[チケットフォームに関する Customer Support Operations ドキュメント](../tickets/forms/)を参照してください。

#### タグ

ルーティング、レポーティング、自動化のためにチケットに自動的または手動で適用されるラベルです。私たちがタグをどのように使用・管理しているかの詳細については、[タグに関する Customer Support Operations ドキュメント](../tags/)を参照してください。

#### チケットタイプ

チケットを Question、Incident、Problem、Task のいずれかに分類します。[About ticket types](https://support.zendesk.com/hc/en-us/articles/4408886739098-About-ticket-fields#:~:text=your%20business%20rules.-,Type,-There%20are%20four) を参照してください。

### カスタムチケットフィールド

GitLab のニーズに固有の情報を取得するために設計された追加フィールドです。これらはルーティング、自動化、レポーティングで使用されます。チケットフォームの管理方法の詳細については、[フィールドに関する Customer Support Operations ドキュメント](../tickets/fields/)を参照してください。

## マクロ

**Apply macro** ボタンを使うと、エージェントは事前構成された一連のアクション (コメントの追加、フィールドの設定、チケットステータスの変更など) をワンクリックでチケットに適用できます。マクロの使用および管理方法の詳細については、[マクロに関する Customer Support Operations ドキュメント](../macros/)を参照してください。

## コメント履歴

会話スレッドはコメントを時系列順に表示します — 古いものが上、新しいものが下です。

## コメントエディタ

コメントエディタは、公開リプライまたは内部ノートを作成・送信するために使用されます。エージェントはテキストの書式設定や添付ファイルの追加ができます。

### 公開コメントと内部コメント

エージェントは **Public reply** (リクエスターに表示) と **Internal note** (エージェントのみに表示) を切り替えられます。[Adding comments to tickets](https://support.zendesk.com/hc/en-us/articles/4408828489370-Adding-comments-to-tickets) を参照してください。

### ドラフトモード

これにより、公開コメントの更新を送信するエージェントに対して、コメントがチケット上で公開送信される前に確認ウィンドウが表示されることを保証します。[Writing drafts of public replies in tickets](https://support.zendesk.com/hc/en-us/articles/5627101293722-Writing-drafts-of-public-replies-in-tickets) を参照してください。

### テキストの書式設定

エディタは、太字、斜体、リスト、見出し、コードブロックを含むリッチテキスト書式に対応しています。[Adding formatting to ticket comments](https://support.zendesk.com/hc/en-us/articles/4408828489370-Adding-comments-to-tickets#topic_djd_2jx_4y) を参照してください。リッチテキスト書式に加えて、Markdown コマンドにも対応しています。[Formatting text with Markdown](https://support.zendesk.com/hc/en-us/articles/4408846544922) を参照してください。

### 絵文字

エージェントは、コメントエディタのツールバーにある絵文字ピッカーを使ってコメントに絵文字を挿入できます。

### 添付ファイル

ファイルは、コメントエディタから直接、公開リプライと内部ノートの両方に添付できます。[Adding attachments to ticket comments](https://support.zendesk.com/hc/en-us/articles/4408835822618-Adding-attachments-to-ticket-comments) を参照してください。

### ハイパーリンク

コメント内のテキストは、コメントエディタのツールバーを使ってクリック可能なハイパーリンクとして書式設定できます。

### Glean 連携

コメントエディタは [Glean](/handbook/eta/ai/tools/glean/) と統合されており、ツールバーに専用の Glean ボタンが表示されます。これにより、エージェントは生成 AI を使って顧客への応答ドラフトを作成できます。

## 検索

トップナビゲーションバーの検索アイコンは、グローバル検索インターフェースを開き、エージェントが Zendesk 全体のチケット、ユーザー、組織を検索できるようにします。[Using Zendesk Support advanced search](https://support.zendesk.com/hc/en-us/articles/4408835086106-Using-Zendesk-Support-advanced-search) を参照してください。

## プロフィールメニュー

トップナビゲーションバーのプロフィールメニューは、エージェントのプロフィール、通知設定、オンラインステータス設定機能へのアクセスを提供します。

## カスタマーコンテキストパネル

チケットの右側にあるコンテキストパネルは、リクエスターに関する情報 (プロフィール、最近のチケット、インタラクション履歴を含む) を表示します。[Using the context panel](https://support.zendesk.com/hc/en-us/articles/4408836526362-Using-the-context-panel) を参照してください。

## ナレッジパネル

ナレッジパネルは、エージェントが GitLab Help Centre を検索し、記事をチケットにリンクし、コンテンツを直接リプライに引用できるようにします。[Using help center content in your tickets without leaving Agent Workspace](https://support.zendesk.com/hc/en-us/articles/5581313653530-Using-help-center-content-in-your-tickets-without-leaving-Agent-Workspace) を参照してください。

## アプリ

Zendesk アプリはエージェントの機能を拡張し、コンテキストパネルに表示されます。利用可能なアプリとその構成方法の情報については、[Zendesk アプリに関する GitLab Support Operations ドキュメント](../apps/)を参照してください。

### アプリのピン留め

エージェントは、現在インストールされているアプリの一覧全体をスクロールする代わりに、頻繁に使うアプリをコンテキストパネルにピン留めして簡単にアクセスできるようにできます。[Managing personal app shortcuts](https://support.zendesk.com/hc/en-us/articles/6066877041690-Managing-personal-app-shortcuts) を参照してください。

## チケットの送信

### Submit ボタン

チケット下部の **Submit as** ボタンを使うと、エージェントはチケットを特定のステータスで保存できます。[Updating a ticket and changing its status](https://support.zendesk.com/hc/en-us/articles/4408832151834-Updating-and-solving-tickets#id_xsq_5f5_st) を参照してください。

### 送信後のナビゲーションオプション

エージェントは、チケットが送信された後のデフォルト動作を設定できます。オプションは以下のとおりです:

- **Stay on ticket** — 送信後も現在のチケットに留まります。
- **Next ticket in view** — 現在のビュー内の次のチケットに移動します。
- **Close ticket** — チケットタブを閉じ、前の画面に戻ります。

[Working with tickets in a view](https://support.zendesk.com/hc/en-us/articles/4408829483930-Accessing-your-views-of-tickets) を参照してください。

## チケットの翻訳

### 概要
 
Zendesk は Agent Workspace 内で AI ベースのチケット翻訳を提供しており、エージェントは異なる言語を話すエンドユーザーとコミュニケーションを取れます。アクティブ化されると、Amazon Nova Micro を使って、受信メッセージ (顧客から) と送信メッセージ (エージェントから) の両方がリアルタイムで自動的に翻訳されます。
 
### 翻訳の仕組み
 
#### エージェントが見るもの
 
言語の違いが検出されると、チケット上部に翻訳バナーが表示され、エージェントに顧客の検出された言語を通知します。エージェントはその後、以下を行えます:
 
- **「Translate」をクリック** — 受信メッセージはエージェントの言語に翻訳され、送信メッセージは顧客の言語に翻訳されます。
- **バナーを閉じる** — 今のところ翻訳を辞退します (後でチケットの Options メニューから再度有効化できます)。
- **検出された言語を修正** — 検出が間違っていた場合、バナー内のドロップダウンを使って正しい言語を選択します。

チケット上で翻訳がアクティブになると:
 
- 翻訳されたチケットは、現在翻訳中であることを示すインジケーターを表示します。
- エージェントは、任意の顧客メッセージで「Show original」をクリックして翻訳前のテキストを確認できます。
- エージェントは、自身のメッセージで「Show translation」をクリックして顧客に送信された内容を確認できます。
- エージェントの翻訳設定は、チケットを閉じて再度開いても保持されます — 再度有効化する必要はありません。
- 現在のチケット上の翻訳は、翻訳バナーの「Stop」ボタンをクリックすることで停止できます。

#### 顧客が見るもの
 
エージェントが翻訳を有効化しても、顧客に通知はされません。エージェントメッセージは、メールまたは Support Portal のいずれで閲覧されても、自動的に顧客の検出された言語で表示されます。
 
### 送信前の送信メッセージの翻訳

送信メッセージを作成する際、エージェントは作成ツールの **Translate** ボタンをクリックして、顧客に送信する前に翻訳を生成できます。これは簡単には元に戻せないため、メッセージに修正を加える必要がある場合は、最初から書き直す必要があります。

詳細については、[Translating conversations in tickets](https://support.zendesk.com/hc/en-us/articles/6327770807450-Translating-conversations-in-tickets) を参照してください。

## 追加リソース

- [About the Zendesk Agent Workspace](https://support.zendesk.com/hc/en-us/articles/4408821259930-About-the-Zendesk-Agent-Workspace)
- [Documentation resources for the Zendesk Agent Workspace](https://support.zendesk.com/hc/en-us/articles/4408827107226-Documentation-resources-for-the-Zendesk-Agent-Workspace)
