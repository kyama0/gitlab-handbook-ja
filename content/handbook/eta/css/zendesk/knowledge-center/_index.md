---
title: 'ナレッジセンター'
description: 'Zendesk ナレッジセンターに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/knowledge-center/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
lastmod: "2026-07-14T15:22:25-05:00"
translated_at: "2026-07-19T07:38:49+09:00"
translator: codex
stale: false
---

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- 以前の名称: `Guide`

{{% /alert %}}

## ナレッジセンターについて

### ナレッジセンターとは

Zendesk ナレッジセンター（旧称「Guide」）は、次のようなサポートポータルと関連事項を管理するシステムです。

- ヘルプ記事
- 全般的な外観
- 組み込みの統合

より一般的には、ヘルプセンターと考えることができます。

### ナレッジセンターにアクセスする

ナレッジセンターへのアクセス権を持つ方は（インスタンスおよびブランドごとに異なります）、Zendesk ページ右上の 4 つの四角形をクリックしてから `Knowledge` を選択することでアクセスできます。これにより、新しいタブで Zendesk Guide が開きます。

代替手段として、直接リンクを使用できます。

- 主要ブランド:
  - [Zendesk Global (production)](https://gitlab.zendesk.com/knowledge/lists/default/1/1?brand_id=3252896)
  - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/knowledge/lists/default/1/1?brand_id=12510498177436)
  - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/knowledge/lists/default/1/1?brand_id=360002482351)
  - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/lists/default/1/1?brand_id=360003799392)
- 内部ブランド:
  - [Zendesk Global (production)](https://gitlab.zendesk.com/knowledge/lists/default/1/1?brand_id=22781249167132)
  - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/knowledge/lists/default/1/1?brand_id=22687153149724)
  - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/knowledge/lists/default/1/1?brand_id=41824350085780)
  - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/lists/default/1/1?brand_id=41389709130900)

### ナレッジセンターのコンポーネント

| 位置 | アイコン | 意味 | 直接リンク |
|:--------:|------|---------|--------------|
| 1 | <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" focusable="false" data-garden-id="chrome.nav_item_icon" data-garden-version="8.76.9" class="StyledNavItemIcon-sc-7w9rpt-0 WqCGj"><path fill="currentColor" d="M8 5H3.5c-.3 0-.5.2-.5.5v13c0 .3.2.5.5.5H7c3 0 4 2 4 2h1V7c0-.1-1-2-4-2zm1 10H6c-.5 0-1-.5-1-1s.5-1 1-1h3c.5 0 1 .5 1 1s-.5 1-1 1zm0-4H6c-.5 0-1-.5-1-1s.5-1 1-1h3c.5 0 1 .5 1 1s-.5 1-1 1zm5-4v14h1s1-2 4-2h3.5c.3 0 .5-.2.5-.5v-13c0-.3-.2-.5-.5-.5H18c-3 0-4 1.9-4 2zm2 7c0-.5.5-1 1-1h3c.5 0 1 .5 1 1s-.5 1-1 1h-3c-.5 0-1-.5-1-1zm0-4c0-.5.5-1 1-1h3c.5 0 1 .5 1 1s-.5 1-1 1h-3c-.5 0-1-.5-1-1z"></path></svg> | 記事を管理する | [Global](https://gitlab.zendesk.com/knowledge/lists/default/1/1) - [US Government](https://gitlab-federal-support.zendesk.com/knowledge/lists/default/1/1) |
| 2 | <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" focusable="false" data-garden-id="chrome.nav_item_icon" data-garden-version="8.76.9" class="StyledNavItemIcon-sc-7w9rpt-0 WqCGj"><path fill="currentColor" d="M13 17.35a1.35 1.35 0 1 1-.001-2.7 1.35 1.35 0 0 1 .001 2.7zM12 8a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0V8zm9-3H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5v2.545c0 .374.47.588.8.364l4.266-2.91H21a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"></path></svg> | コンテンツをモデレートする | [Global](https://gitlab.zendesk.com/knowledge/community_activities) - [US Government](https://gitlab-federal-support.zendesk.com/knowledge/community_activities) |
| 3 | <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" focusable="false" data-garden-id="chrome.nav_item_icon" data-garden-version="8.76.9" class="StyledNavItemIcon-sc-7w9rpt-0 WqCGj"><path fill="currentColor" d="M7 14v-2a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1m-3 6v-2.16a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1M4 8.16V6a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v2.17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1"></path></svg> | コンテンツを整理する | [Global](https://gitlab.zendesk.com/knowledge/arrange) - [US Government](https://gitlab-federal-support.zendesk.com/knowledge/arrange) |
| 4 | <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" focusable="false" data-garden-id="chrome.nav_item_icon" data-garden-version="8.76.9" class="StyledNavItemIcon-sc-7w9rpt-0 WqCGj"><g fill="currentColor"><path d="M13 17.36A4.36 4.36 0 1 1 17.36 13 4.36 4.36 0 0 1 13 17.36m9.63-5C21 10.55 17.28 6 13 6s-8 4.54-9.63 6.3a1 1 0 0 0 0 1.37C5 15.45 8.72 20 13 20s8-4.54 9.63-6.3a1 1 0 0 0 0-1.37"></path><circle cx="13" cy="13" r="2.7"></circle></g></svg> | デザインをカスタマイズする | [Global](https://gitlab.zendesk.com/theming/workbench) - [US Government](https://gitlab-federal-support.zendesk.com/theming/workbench) |
| 5 | <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" focusable="false" data-garden-id="chrome.nav_item_icon" data-garden-version="8.76.9" class="StyledNavItemIcon-sc-7w9rpt-0 WqCGj"><g fill="currentColor"><circle cx="10" cy="9" r="4"></circle><path d="M3.968 21A.959.959 0 0 1 3 20.052a.994.994 0 0 1 .008-.134 7.09 7.09 0 0 1 13.984 0 .958.958 0 0 1-.822 1.074 1.049 1.049 0 0 1-.137.008zM19.342 5.005A2.5 2.5 0 0 0 17 7.346v2.075h1.443V7.346a1.057 1.057 0 1 1 2.114 0v2.075H22V7.346a2.5 2.5 0 0 0-2.658-2.341z"></path><rect width="7" height="6" x="16" y="9" rx="1" ry="1"></rect></g></svg> | ユーザー権限 | [Global](https://gitlab.zendesk.com/knowledge/user_segments/page/1) - [US Government](https://gitlab-federal-support.zendesk.com/knowledge/user_segments/page/1) |
| 6 | <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" focusable="false" data-garden-id="chrome.nav_item_icon" data-garden-version="8.76.9" class="StyledNavItemIcon-sc-7w9rpt-0 WqCGj"><path fill="currentColor" d="M13 16.627a3.625 3.625 0 0 1-3.63-3.622A3.633 3.633 0 0 1 13 9.373a3.633 3.633 0 0 1 3.63 3.632A3.625 3.625 0 0 1 13 16.627m8.295-4.902h-.006a2.116 2.116 0 0 1-1.955-1.307l-.031-.075a2.117 2.117 0 0 1 .459-2.306.693.693 0 0 0 0-.998l-.809-.809a.71.71 0 0 0-.997 0 2.106 2.106 0 0 1-2.295.457l-.08-.033a2.109 2.109 0 0 1-1.302-1.948.705.705 0 0 0-.705-.706h-1.148a.705.705 0 0 0-.705.706c0 .855-.514 1.628-1.306 1.95-.021.009-.043.017-.063.027a2.106 2.106 0 0 1-2.308-.453.72.72 0 0 0-1.006 0l-.81.81a.708.708 0 0 0 0 .997l.007.006a2.11 2.11 0 0 1 .454 2.305c-.01.022-.018.045-.028.066a2.103 2.103 0 0 1-1.95 1.311h-.006a.706.706 0 0 0-.705.706v1.138c0 .39.316.706.705.706h.002a2.1 2.1 0 0 1 1.949 1.306l.029.069a2.11 2.11 0 0 1-.452 2.31l-.004.003a.708.708 0 0 0 0 .998l.809.809a.72.72 0 0 0 1.006 0l.005-.005a2.106 2.106 0 0 1 2.307-.452l.059.024a2.104 2.104 0 0 1 1.306 1.95v.007c0 .395.32.706.705.706h1.148c.385 0 .705-.31.705-.706v-.007c0-.855.514-1.627 1.306-1.95l.059-.024a2.106 2.106 0 0 1 2.307.452l.005.005a.71.71 0 0 0 .997 0l.809-.81a.693.693 0 0 0 0-.997l-.004-.003a2.11 2.11 0 0 1-.452-2.31l.029-.069a2.102 2.102 0 0 1 1.948-1.306h.012a.706.706 0 0 0 .705-.706v-1.138a.706.706 0 0 0-.705-.706"></path></svg> | 設定 | [Global](https://gitlab.zendesk.com/hc/admin/general_settings) - [US Government](https://gitlab-federal-support.zendesk.com/hc/admin/general_settings) |

### 現在のナレッジセンター設定

これらの設定は参照用にここへ記載しており、変更することはほとんどありません。

#### ヘルプセンター設定

<details>
<summary>Zendesk Global 向け</summary>

- コンテンツ管理
  - [x] 記事への匿名投票
  - [x] コンテンツのモデレーション
    - すべてのコンテンツをモデレートする
  - [ ] ユーザープロフィール
- サービスカタログ
  - [ ] サービスカタログを有効にする
- セキュリティ
  - [x] 安全でないコンテンツを表示する
  - [ ] サインインを必須にする
  - [ ] 制限付き記事のメール通知を許可する
- リクエスト
  - マイリクエストのコメントのデフォルトの並び順を設定する: 古いコメントから新しいコメントへ並べ替える
  - [ ] エージェントがヘルプセンターからリクエストを管理できるようにする
- 統合
  - [ ] Google Analytics
  - [ ] Powered by Zendesk ロゴ
  - [ ] 匿名ユーザーのトラッキングを有効にする

</details>
<details>
<summary>Zendesk US Government 向け</summary>

- コンテンツ管理
  - [x] 記事への匿名投票
  - [x] コンテンツのモデレーション
    - すべてのコンテンツをモデレートする
  - [ ] ユーザープロフィール
- サービスカタログ
  - [ ] サービスカタログを有効にする
- セキュリティ
  - [x] 安全でないコンテンツを表示する
  - [ ] サインインを必須にする
  - [ ] 制限付き記事のメール通知を許可する
- リクエスト
  - マイリクエストのコメントのデフォルトの並び順を設定する: 古いコメントから新しいコメントへ並べ替える
  - [ ] エージェントがヘルプセンターからリクエストを管理できるようにする
- 統合
  - [ ] Google Analytics
  - [ ] Powered by Zendesk ロゴ
  - [ ] 匿名ユーザーのトラッキングを有効にする

</details>

#### 記事の検証

現時点では、どのインスタンスでもこれを使用していません。

#### 言語設定

- Zendesk Global 向け
  - English: `GitLab, Inc.`
- Zendesk US Government 向け
  - English: `GitLab`

#### 検索設定

<details>
<summary>Zendesk Global 向け</summary>

- 検索ソース
  - `GitLab, Inc.`
  - `GitLab Documentation`
- 注目の記事
  - なし
- クイック回答
  - [x] 検索クエリのクイック回答を表示する
- クローラー
  - `docs.gitlab.com`
- 検索フィルター
  - `GitLab Documentation`

</details>
<details>
<summary>Zendesk US Government 向け</summary>

- 検索ソース
  - `GitLab`
  - `GitLab Documentation`
- 注目の記事
  - なし
- クイック回答
  - [x] 検索クエリのクイック回答を表示する
- クローラー
  - `docs.gitlab.com`
- 検索フィルター
  - `GitLab Documentation`

</details>

#### Gather 設定

<details>
<summary>Zendesk Global 向け</summary>
- [ ] コミュニティを有効化する
- [ ] @ メンションを有効にする
- [ ] エイリアスを有効にする
- [ ] ユーザーバッジを有効にする
- [ ] すべてのユーザーがコミュニティ投稿にコンテンツタグを追加することを許可する

</details>
<details>
<summary>Zendesk US Government 向け</summary>

- [ ] コミュニティを有効化する
- [ ] @ メンションを有効にする
- [ ] エイリアスを有効にする
- [ ] ユーザーバッジを有効にする
- [ ] すべてのユーザーがコミュニティ投稿にコンテンツタグを追加することを許可する

</details>

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このセクションのすべての項目には、Zendesk の `Administrator` レベルのアクセス権が必要です。

{{% /alert %}}

### ナレッジセンター設定を変更する

{{% alert title="危険" color="danger" %}}

- サポートポータルの使いやすさに大きく影響する可能性があるため、これを行う際は最大限の注意を払ってください。
- 対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください
- ナレッジセンター設定を変更した場合は、このページの[現在のナレッジセンター設定](#current-knowledge-center-settings)が常に更新されていることを確認してください

{{% /alert %}}

ナレッジセンター設定を変更するには、次の手順を実行します。

1. [ナレッジセンターにアクセスする](#accessing-the-knowledge-center)
1. `Settings` アイコンに移動します
   - [Zendesk Global](https://gitlab.zendesk.com/hc/admin/general_settings)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/hc/admin/general_settings)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/hc/admin/general_settings)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/hc/admin/general_settings)
1. 変更する設定を変更します
1. 関連するボタンをクリックして変更を保存します（ページによって異なる場合があります）
