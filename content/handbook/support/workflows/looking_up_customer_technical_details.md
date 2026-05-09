---
title: 顧客技術詳細の検索
description: "Zendesk と Architecture インテグレーション、または Account Management グループ内で顧客の技術詳細を検索する方法"
category: Handling tickets
subcategory: Customer Info
upstream_path: /handbook/support/workflows/looking_up_customer_technical_details/
upstream_sha: 5b8afe7d206f5c195e463506206021ee3c9a4491
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
---

チケットで顧客の問題のトラブルシューティングを行う際、追加のコンテキストが必要になることがあります。
`gitlab.rb` ファイル、アーキテクチャ図、または調査を進めるのに役立つあらゆるものです。

この情報を見つけられる場所はいくつかあります。

### Zendesk 内

#### 組織ノート付きの内部コメント {#internal-comment-with-organization-notes}

新しいチケットが入り、そのチケットに組織が紐づいている場合、Zendesk のオートメーショントリガー
（[Ticket::Internal Comment::Organization Info](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/triggers/-/blob/master/triggers/active/Automation%20Stage/Post%20internal%20note%20about%20Organization%20info.yaml)）
がチケットに内部コメントを投稿します。この内部コメントには、組織ノートが存在する場合
組織ノートが含まれます。これらの組織ノートは Zendesk 内に保存され、エンドユーザーには
見えず、エージェントだけが閲覧できます。

チケットの作業中に、組織について記載する価値のある追加情報がある場合は、
[組織の編集](/handbook/support/workflows/working-on-zendesk-content.md)に従って追加できます。

以下で説明する [GitLab.com 内](#within-gitlabcom)の[Customer Collaboration Project](/handbook/customer-success/csm/customer-collaboration-project/)
の更新も検討してください。

#### 過去のチケットを閲覧する

顧客の組織のメンバーが提出した他のチケットを閲覧して、関連するコンテキストを得られます！
急いでいるときには忘れがちなことです。

チケット上部の組織名をクリックするだけで、その組織に関連するすべてのチケットを表示できます。

または、`organization:<$ORG_NAME> search query` を検索することで、必要な情報を得られる場合があります。
検索には `"gitlab.rb"` や `gitlabsos` を試してみてください！

どちらの場合も、`Requested` または `Updated` をクリックして最新順にソートすれば、
より新しい情報を得られます。

#### アーキテクチャ図と Customer Collaboration Project

Architecture Diagrams アプリは、顧客が Salesforce に [Customer Collaboration Project](/handbook/customer-success/csm/customer-collaboration-project/)
の URL を入力していれば、関連する図の有無を自動的にチェックします。

アプリにアクセスするには:

1. Zendesk UI の右上の「Apps」をクリックします

   ![Zendesk Apps ボタン](/images/support/workflows/assets/zendesk-apps-button.png)

1. Architecture Diagrams アプリを探し、閉じている場合は展開します

   ![Zendesk Apps ボタン](/images/support/workflows/assets/zendesk-apps-arch-diagram.png)

### GitLab.com 内 {#within-gitlabcom}

顧客の技術詳細を確認できるもう 1つの場所は、GitLab.com 上の
[Account Management グループ](https://gitlab.com/gitlab-com/account-management)です。
顧客名で親グループ内を検索すれば、[Customer Collaboration Project](/handbook/customer-success/csm/customer-collaboration-project/)を
見つけられるはずです。すべてではありませんが、ほとんどの Premium および Ultimate 顧客には
1つ存在しているはずです。

これらのプロジェクトはおそらくエンドカスタマーとも共有されているため、これらのプロジェクトでの
更新は、上記で言及した Zendesk 内の[組織ノート](#internal-comment-with-organization-notes)とは異なり、
エンドユーザーにも見える点に注意してください。
