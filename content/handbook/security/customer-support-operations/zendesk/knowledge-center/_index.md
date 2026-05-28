---
title: 'ナレッジセンター'
description: 'Zendesk のナレッジセンターに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/knowledge-center/
upstream_sha: 6f812a8fec541dba51e50314e85d7890b9e71d7d
translated_at: "2026-05-28T21:12:16Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

{{% alert title="技術詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- 旧称: `Guide`

{{% /alert %}}

## ナレッジセンターを理解する

### ナレッジセンターとは

Zendesk ナレッジセンター (旧称「Guide」) は、サポートポータルや関連事項を管理するシステムで、たとえば以下を含みます:

- ヘルプ記事
- 全体的な見た目
- ビルトインインテグレーション

より一般的には、ヘルプセンターと考えるのが分かりやすいです。

### ナレッジセンターへのアクセス {#accessing-the-knowledge-center}

ナレッジセンターへのアクセス権がある人 (インスタンスやブランドによって異なります) は、Zendesk ページの右上にある 4 つの四角をクリックして `Knowledge` を選択することでアクセスできます。これにより、Zendesk Guide が新しいタブで開きます。

別の方法は、直接リンクを使用することです:

- プライマリブランドの場合:
  - [Zendesk Global (本番)](https://gitlab.zendesk.com/knowledge/lists/default/1/1?brand_id=3252896)
  - [Zendesk Global (サンドボックス)](https://gitlab1707170878.zendesk.com/knowledge/lists/default/1/1?brand_id=12510498177436)
  - [Zendesk US Government (本番)](https://gitlab-federal-support.zendesk.com/knowledge/lists/default/1/1?brand_id=360002482351)
  - [Zendesk US Government (サンドボックス)](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/lists/default/1/1?brand_id=360003799392)
- 内部ブランドの場合:
  - [Zendesk Global (本番)](https://gitlab.zendesk.com/knowledge/lists/default/1/1?brand_id=22781249167132)
  - [Zendesk Global (サンドボックス)](https://gitlab1707170878.zendesk.com/knowledge/lists/default/1/1?brand_id=22687153149724)
  - [Zendesk US Government (本番)](https://gitlab-federal-support.zendesk.com/knowledge/lists/default/1/1?brand_id=41824350085780)
  - [Zendesk US Government (サンドボックス)](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/lists/default/1/1?brand_id=41389709130900)

### ナレッジセンターのコンポーネント

| 位置 | アイコン | 意味 | 直接リンク |
|:----:|---------|------|-----------|
| 1 | <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" focusable="false" data-garden-id="chrome.nav_item_icon" data-garden-version="8.76.9" class="StyledNavItemIcon-sc-7w9rpt-0 WqCGj"><path fill="currentColor" d="M8 5H3.5c-.3 0-.5.2-.5.5v13c0 .3.2.5.5.5H7c3 0 4 2 4 2h1V7c0-.1-1-2-4-2zm1 10H6c-.5 0-1-.5-1-1s.5-1 1-1h3c.5 0 1 .5 1 1s-.5 1-1 1zm0-4H6c-.5 0-1-.5-1-1s.5-1 1-1h3c.5 0 1 .5 1 1s-.5 1-1 1zm5-4v14h1s1-2 4-2h3.5c.3 0 .5-.2.5-.5v-13c0-.3-.2-.5-.5-.5H18c-3 0-4 1.9-4 2zm2 7c0-.5.5-1 1-1h3c.5 0 1 .5 1 1s-.5 1-1 1h-3c-.5 0-1-.5-1-1zm0-4c0-.5.5-1 1-1h3c.5 0 1 .5 1 1s-.5 1-1 1h-3c-.5 0-1-.5-1-1z"></path></svg> | 記事の管理 | [Global](https://gitlab.zendesk.com/knowledge/lists/default/1/1) - [US Government](https://gitlab-federal-support.zendesk.com/knowledge/lists/default/1/1) |
| 2 | <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" focusable="false" data-garden-id="chrome.nav_item_icon" data-garden-version="8.76.9" class="StyledNavItemIcon-sc-7w9rpt-0 WqCGj"><path fill="currentColor" d="M13 17.35a1.35 1.35 0 1 1-.001-2.7 1.35 1.35 0 0 1 .001 2.7zM12 8a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0V8zm9-3H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5v2.545c0 .374.47.588.8.364l4.266-2.91H21a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"></path></svg> | コンテンツのモデレート | [Global](https://gitlab.zendesk.com/knowledge/community_activities) - [US Government](https://gitlab-federal-support.zendesk.com/knowledge/community_activities) |
| 3 | <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" focusable="false" data-garden-id="chrome.nav_item_icon" data-garden-version="8.76.9" class="StyledNavItemIcon-sc-7w9rpt-0 WqCGj"><path fill="currentColor" d="M7 14v-2a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1m-3 6v-2.16a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1M4 8.16V6a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v2.17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1"></path></svg> | コンテンツの配置 | [Global](https://gitlab.zendesk.com/knowledge/arrange) - [US Government](https://gitlab-federal-support.zendesk.com/knowledge/arrange) |
| 4 | <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" focusable="false" data-garden-id="chrome.nav_item_icon" data-garden-version="8.76.9" class="StyledNavItemIcon-sc-7w9rpt-0 WqCGj"><g fill="currentColor"><path d="M13 17.36A4.36 4.36 0 1 1 17.36 13 4.36 4.36 0 0 1 13 17.36m9.63-5C21 10.55 17.28 6 13 6s-8 4.54-9.63 6.3a1 1 0 0 0 0 1.37C5 15.45 8.72 20 13 20s8-4.54 9.63-6.3a1 1 0 0 0 0-1.37"></path><circle cx="13" cy="13" r="2.7"></circle></g></svg> | デザインのカスタマイズ | [Global](https://gitlab.zendesk.com/theming/workbench) - [US Government](https://gitlab-federal-support.zendesk.com/theming/workbench) |
| 5 | <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" focusable="false" data-garden-id="chrome.nav_item_icon" data-garden-version="8.76.9" class="StyledNavItemIcon-sc-7w9rpt-0 WqCGj"><g fill="currentColor"><circle cx="10" cy="9" r="4"></circle><path d="M3.968 21A.959.959 0 0 1 3 20.052a.994.994 0 0 1 .008-.134 7.09 7.09 0 0 1 13.984 0 .958.958 0 0 1-.822 1.074 1.049 1.049 0 0 1-.137.008zM19.342 5.005A2.5 2.5 0 0 0 17 7.346v2.075h1.443V7.346a1.057 1.057 0 1 1 2.114 0v2.075H22V7.346a2.5 2.5 0 0 0-2.658-2.341z"></path><rect width="7" height="6" x="16" y="9" rx="1" ry="1"></rect></g></svg> | ユーザー権限 | [Global](https://gitlab.zendesk.com/knowledge/user_segments/page/1) - [US Government](https://gitlab-federal-support.zendesk.com/knowledge/user_segments/page/1) |
| 6 | <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" focusable="false" data-garden-id="chrome.nav_item_icon" data-garden-version="8.76.9" class="StyledNavItemIcon-sc-7w9rpt-0 WqCGj"><path fill="currentColor" d="M13 16.627a3.625 3.625 0 0 1-3.63-3.622A3.633 3.633 0 0 1 13 9.373a3.633 3.633 0 0 1 3.63 3.632A3.625 3.625 0 0 1 13 16.627m8.295-4.902h-.006a2.116 2.116 0 0 1-1.955-1.307l-.031-.075a2.117 2.117 0 0 1 .459-2.306.693.693 0 0 0 0-.998l-.809-.809a.71.71 0 0 0-.997 0 2.106 2.106 0 0 1-2.295.457l-.08-.033a2.109 2.109 0 0 1-1.302-1.948.705.705 0 0 0-.705-.706h-1.148a.705.705 0 0 0-.705.706c0 .855-.514 1.628-1.306 1.95-.021.009-.043.017-.063.027a2.106 2.106 0 0 1-2.308-.453.72.72 0 0 0-1.006 0l-.81.81a.708.708 0 0 0 0 .997l.007.006a2.11 2.11 0 0 1 .454 2.305c-.01.022-.018.045-.028.066a2.103 2.103 0 0 1-1.95 1.311h-.006a.706.706 0 0 0-.705.706v1.138c0 .39.316.706.705.706h.002a2.1 2.1 0 0 1 1.949 1.306l.029.069a2.11 2.11 0 0 1-.452 2.31l-.004.003a.708.708 0 0 0 0 .998l.809.809a.72.72 0 0 0 1.006 0l.005-.005a2.106 2.106 0 0 1 2.307-.452l.059.024a2.104 2.104 0 0 1 1.306 1.95v.007c0 .395.32.706.705.706h1.148c.385 0 .705-.31.705-.706v-.007c0-.855.514-1.627 1.306-1.95l.059-.024a2.106 2.106 0 0 1 2.307.452l.005.005a.71.71 0 0 0 .997 0l.809-.81a.693.693 0 0 0 0-.997l-.004-.003a2.11 2.11 0 0 1-.452-2.31l.029-.069a2.102 2.102 0 0 1 1.948-1.306h.012a.706.706 0 0 0 .705-.706v-1.138a.706.706 0 0 0-.705-.706"></path></svg> | 設定 | [Global](https://gitlab.zendesk.com/hc/admin/general_settings) - [US Government](https://gitlab-federal-support.zendesk.com/hc/admin/general_settings) |

### 現在のナレッジセンター設定 {#current-knowledge-center-settings}

これらの設定は参考用として記載されており、めったに変更されません。

#### ヘルプセンター設定

<details>
<summary>Zendesk Global の場合</summary>

- Content management
  - [x] Anonymous voting on articles
  - [x] Content moderations
    - Moderate all content
  - [ ] User profiles
- Service catalog
  - [ ] Turn on service catalog
- Security
  - [x] Display unsafe content
  - [ ] Require sign in
  - [ ] Allow email notifications for restricted articles
- Requests
  - Set the default sorting for comments in my requests: Sort by oldest comment to newest
  - [ ] Enable agents to manage requests from Help Center
- Integrations
  - [ ] Google Analytics
  - [ ] Powered by Zendesk logo
  - [ ] Turn on anonymous user tracking

</details>
<details>
<summary>Zendesk US Government の場合</summary>

- Content management
  - [x] Anonymous voting on articles
  - [x] Content moderations
    - Moderate all content
  - [ ] User profiles
- Service catalog
  - [ ] Turn on service catalog
- Security
  - [x] Display unsafe content
  - [ ] Require sign in
  - [ ] Allow email notifications for restricted articles
- Requests
  - Set the default sorting for comments in my requests: Sort by oldest comment to newest
  - [ ] Enable agents to manage requests from Help Center
- Integrations
  - [ ] Google Analytics
  - [ ] Powered by Zendesk logo
  - [ ] Turn on anonymous user tracking

</details>

#### 記事の検証

現時点ではどのインスタンスでも使用していません。

#### 言語設定

- Zendesk Global の場合
  - 英語: `GitLab, Inc.`
- Zendesk US Government の場合
  - 英語: `GitLab`

#### 検索設定

<details>
<summary>Zendesk Global の場合</summary>

- Search sources
  - `GitLab, Inc.`
  - `GitLab Documentation`
- Featured articles
  - None
- Quick answers
  - [x] Show quick answers for search queries
- Crawlers
  - `docs.gitlab.com`
- Search filters
  - `GitLab Documentation`

</details>
<details>
<summary>Zendesk US Government の場合</summary>

- Search sources
  - `GitLab`
  - `GitLab Documentation`
- Featured articles
  - None
- Quick answers
  - [x] Show quick answers for search queries
- Crawlers
  - `docs.gitlab.com`
- Search filters
  - `GitLab Documentation`

</details>

#### Gather 設定

<details>
<summary>Zendesk Global の場合</summary>
- [ ] Activate community
- [ ] Enable @mentions
- [ ] Enable alias
- [ ] Enable user badges
- [ ] Allow all users to add content tags to their community posts

</details>
<details>
<summary>Zendesk US Government の場合</summary>

- [ ] Activate community
- [ ] Enable @mentions
- [ ] Enable alias
- [ ] Enable user badges
- [ ] Allow all users to add content tags to their community posts

</details>

## 管理者タスク

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目は Zendesk への `Administrator` レベルのアクセスを必要とします。

{{% /alert %}}

### ナレッジセンター設定を変更する

{{% alert title="危険" color="danger" %}}

- これを行う際は細心の注意を払ってください。サポートポータルのユーザビリティに大きな影響を与える可能性があります。
- 対応するリクエスト Issue (Feature Request、Administrative、Bug 等) が存在する場合のみ実施してください。
- ナレッジセンター設定を変更した場合、必ず本ページの [現在のナレッジセンター設定](#current-knowledge-center-settings) を更新してください。

{{% /alert %}}

ナレッジセンター設定を変更するには:

1. [ナレッジセンターにアクセスする](#accessing-the-knowledge-center)
1. `Settings` アイコンに移動します
   - [Zendesk Global](https://gitlab.zendesk.com/hc/admin/general_settings)
   - [Zendesk Global (サンドボックス)](https://gitlab1707170878.zendesk.com/hc/admin/general_settings)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/hc/admin/general_settings)
   - [Zendesk US Government (サンドボックス)](https://gitlabfederalsupport1585318082.zendesk.com/hc/admin/general_settings)
1. 変更したい設定を変更します
1. 関連するボタンをクリックして変更を保存します (ページごとに異なる場合があります)
