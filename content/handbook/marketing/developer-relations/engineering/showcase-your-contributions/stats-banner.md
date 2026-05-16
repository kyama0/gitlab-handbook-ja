---
title: "貢献者統計バナー"
description: "貢献者統計バナー"
upstream_path: /handbook/marketing/developer-relations/engineering/showcase-your-contributions/stats-banner/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-19T19:48:12+00:00"
---

GitLab プロフィール README、個人ウェブサイト、または SVG を埋め込めるその他の場所に動的な統計バナーを追加できます。
以下の例を参照してください:

[![Lee's Contributor Stats](https://contributors.gitlab.com/users/leetickett-gitlab/banner.svg)](https://contributors.gitlab.com/users/leetickett-gitlab)

## 使い方

README または任意の Markdown ファイルに以下の行を追加し、`USERNAME` をあなたの GitLab ユーザー名に置き換えます:

```markdown
[![GitLab Contributor Stats](https://contributors.gitlab.com/users/USERNAME/banner.svg)](https://contributors.gitlab.com/users/USERNAME)
```

例えば、あなたの GitLab ユーザー名が `awesome-tanuki` の場合、以下を使用します:

```markdown
[![GitLab Contributor Stats](https://contributors.gitlab.com/users/awesome-tanuki/banner.svg)](https://contributors.gitlab.com/users/awesome-tanuki)
```

プロフィール README をまだ設定していない場合は、これらのドキュメントに従って [GitLab プロフィールに README を追加する方法](https://docs.gitlab.com/user/profile/#add-details-to-your-profile-with-a-readme)を学んでください。

## 仕組み

バナーは [GitLab Contributor Platform](https://contributors.gitlab.com) からあなたの貢献者統計を動的に表示します。
あなたの統計はバナーが読み込まれるたびに自動的に更新されます。

### 貢献者レベル

バナーは、Contributor Platform 上のあなたのレベルに対応する、現在の貢献者レベルを表示します。

[レベルとポイントがどのように計算されるか](https://contributors.gitlab.com/docs/user-guide)について Contributor Platform で詳しく学ぶ。

## 利用可能な対象

- **コミュニティメンバー**: あなたのバナーは、Contributor Platform 上のあなたのアクティビティに基づいて、貢献者レベルと統計を表示します。
- **GitLab チームメンバー**: あなたもバナーを使用できます！あなたのバナーは、レベルを表示する代わりに統計を表示し、チームメンバーであることを示します。
