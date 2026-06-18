---
title: "Claude プロトタイプを GitLab Pages に公開する"
description: "GitLab Pages を使ってインタラクティブな Claude プロトタイプをライブの Web サイトとしてデプロイし、共有やユーザビリティテストに使う方法。"
upstream_path: /handbook/product/ux/ux-resources/publishing-claude-prototypes/
upstream_sha: aadd07ec986f77b5bd259fb54f0f41d1f3397544
translated_at: "2026-06-18T05:33:51Z"
translator: claude
stale: false
lastmod: 2026-06-16T09:26:31-04:00
---

GitLab のチームメンバーは、プロトタイピングに Claude を試しており、その生成物に感銘を受けています。インタラクティブなチャート、ソート可能なテーブル、フィルタリング、ポップオーバー、さらにはシミュレートされた GitLab Duo Chat パネルまで。しかし、プロトタイプが完成すると、こんな疑問が生じます: それを誰かと実際にどう共有すればよいでしょうか? Figma や Figma Make であれば、共有可能なリンクを生成してステークホルダーに送信できます。Claude の場合、プロトタイプは Claude のインターフェイス内に存在し、URL を送る簡単な方法がありません。

私たちの何人かが同じ問題に直面し、[GitLab Pages](https://docs.gitlab.com/user/project/pages/) が[ボーリングソリューション](/handbook/values/#boring-solutions)として機能することがわかりました。このガイドでは、Claude プロトタイプを誰でもアクセスできるライブの Web サイトとしてデプロイする方法を順を追って説明します。

## なぜ GitLab Pages なのか {#why-gitlab-pages}

Claude は完全にインタラクティブなコンポーネントを生成しますが、それは[アーティファクト](https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them)として Claude のインターフェイス内に存在し、直接共有することはできません。Claude Code で構築されたプロトタイプでさえ、どこかでホストする必要があります。GitLab Pages は、GitLab リポジトリから静的サイトをホストでき、Claude プロトタイプは HTML、CSS、JavaScript だけなので、バックエンドやデータベースを必要とせずにデプロイできます。

これは、GitLab 自身のツールを[ドッグフーディング](/handbook/product/product-processes/dogfooding-for-r-d/)することにもなり、プロトタイプを GitLab に保管すれば、チーム全体でコラボレーションし、フォークし、互いの作業をイテレーションするのが容易になります。

ライブになれば、リンクを通じて誰とでもプロトタイプを共有でき、通話を予定することなく非モデレートのユーザビリティテストに使え、すべてのイテレーションを Git でバージョン管理し、変更をコミットするだけでサイトを更新できます。更新は通常 2 分以内にライブになります。

## スターターテンプレート {#starter-template}

手動のセットアップを省きたい場合は、フォークできる出来合いのテンプレートがあります:

**[gitlab.com/diegocapetown/claude-pages-template](https://gitlab.com/diegocapetown/claude-pages-template)**

これをフォークし、`src/main.jsx` の内容を Claude が生成したコードに置き換えてコミットすれば、数分以内にプロトタイプがライブになります。`.gitlab-ci.yml` はすでに設定済みです。

> **注意:** このテンプレートは React ベースのプロトタイプ向けに設定されており、これは Claude がデフォルトで生成するものです。プロトタイプが異なる構造を使う場合は、代わりに下記の手動セットアップ手順に従ってください。

下記のステップバイステップガイドは、内部で何が起きているかを理解したい場合に、すべての仕組みを説明しています。

## ステップバイステップのセットアップ {#step-by-step-setup}

### 始める前に {#before-you-begin}

これらの手順は、すでに Claude でプロトタイプを構築済みであることを前提としています。

### GitLab プロジェクトを作成する {#create-your-gitlab-project}

プロトタイプごとに 1 つのプロジェクトが必要です。1 つのプロジェクトで複数のプロトタイプを管理することもできますが、それはこのチュートリアルの範囲外です。

1. GitLab.com 上の個人ネームスペースに新しい**空白のプロジェクト**を作成します。
   1. ログインせずに誰でもサイトにアクセスできるようにしたい場合は、公開設定を **Public** にします。

### プロトタイプファイルを追加する {#add-your-prototype-file}

このステップでは、Claude プロトタイプを GitLab のファイルにコピーします。

1. **New file** をクリックして、リポジトリに新しいファイルを追加します
1. ファイルに `index.html` という名前を付けます
1. プロトタイプのコードをファイルの内容に挿入します
    1. Claude プロトタイプに移動します
    1. **Copy code** ボタンをクリックします
    1. GitLab のファイルエディターに移動してコードを貼り付けます
    1. **Commit changes** をクリックしてファイルを保存します

### CI/CD 設定を追加する {#add-the-cicd-configuration}

このステップでは、ファイルが GitLab Pages にデプロイされるようにします。

1. プロジェクトのルートに `.gitlab-ci.yml` ファイルを作成します:

```yaml
pages:
  stage: deploy
  script:
    - echo "Deploying to GitLab Pages"
    - mkdir public                      # GitLab Pages deploys files under the /public folder
    - cp index.html public/             # copies the prototype file to the public folder
  artifacts:
    paths:
      - public
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
```

### デプロイする {#deploy}

1. 両方のファイルをコミットします。パイプラインが自動的に実行され、サイトは数分以内に `https://<your-username>.gitlab.io/<project-name>` でライブになります。
2. **Settings → General → Pages** に移動し、アクセスを **Everyone** に設定します。「Everyone With Access」は _everyone_（誰でも）を意味するように聞こえますが、GitLab.com では実際には _everyone with a GitLab account_（GitLab アカウントを持つ誰でも）を意味します。ログイン不要の完全公開アクセスには、明示的に Everyone 設定にする必要があります。詳細は [GitLab Pages のアクセス制御](https://docs.gitlab.com/user/project/pages/getting_started/pages_ui/)を参照してください。これは見落としやすいステップです。

## ヒント {#tips}

**ブラウザの全幅でテストする。** Claude アーティファクトは制約された iframe 内でレンダリングされます。プロトタイプが全幅で Pages 上にライブになると、レイアウトの挙動が異なる場合があります。両方のサイズを確認する価値があります。

**更新は速い。** GitLab でファイルを編集してコミットすると、パイプラインが自動的に再デプロイします。通常 2 分以内にライブになります。

**既存のプロトタイプをフォークする。** 同僚があなたのユースケースに合うプロトタイプを構築している場合、ゼロから始める代わりに、そのプロジェクトをフォークして適応させることができます。

## Product Design チームの例 {#examples-from-the-product-design-team}

- **Group CI/CD Analytics Dashboard** - [リポジトリ](https://gitlab.com/diegocapetown/group-ci-cd-analytics-dashboard-prototype) / [ライブサイト](https://diegocapetown.gitlab.io/group-ci-cd-analytics-dashboard-prototype)
- **Nav Gem** - [リポジトリ](https://gitlab.com/gitlab-org/foundations/nav-gem) / [ライブサイト](https://nav-gem-a6866e.gitlab.io/#/onboarding)
- **Component Health** - [リポジトリ](https://gitlab.com/jeldergl/component-health) / [ライブサイト](https://jeldergl.gitlab.io/component-health/#/)
- **Accessibility Cache** - [リポジトリ](https://gitlab.com/jeldergl/accessibility-cache) / [ライブサイト](https://jeldergl.gitlab.io/accessibility-cache/)
- **Claude Test Prototype** - [ライブサイト](https://claude-test-prototype-77c38b.gitlab.io/)

GitLab Pages にプロトタイプを公開した場合は、MR を送って自由にこのリストに追加してください。

## 関連リソース {#related-resources}

- [ファイルとプロトタイプの共有（Figma）](https://design.gitlab.com/get-started/uik-sharing/) - Figma ベースのプロトタイプを共有する場合
- [GitLab Pages ドキュメント](https://docs.gitlab.com/ee/user/project/pages/) - GitLab Pages の完全なドキュメント
- [AI の利用](/handbook/upstream-studios/how-we-work/ai-usage/) - UX 部門で AI ツールを使うためのガイドライン
