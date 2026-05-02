---
title: "GitLab 統合手順"
description: GitLab との統合、ならびにパートナーシップ、マーケティング、ライセンスの機会について説明します。
upstream_path: /handbook/alliances/integration-instructions/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T08:00:00Z"
translator: claude
stale: false
---

## GitLab テクノロジーパートナーとして掲載されるための手順

[これらのステップ](https://about.gitlab.com/partners/technology-partners/integrate/#steps-to-become-a-technology-partner)と製品統合が完了した後、最後のステップは[テクノロジーパートナーページ](https://about.gitlab.com/partners/technology-partners/)に掲載されるためのマージリクエストを提出することです。アプリを追加するには、以下が必要です：

- 統合の詳細が記載された URL ページ
- 設定に必要なステップの技術ドキュメントへのリンク。スクリーンキャスト / ビデオウォークスルーが強く推奨されます。
- 統合の短い説明（最大 314 文字）
- アプリケーションページ上での統合のリスト名
- ロゴ
    > **画像の要件**
    >
    > - 画像を正方形または長方形に切り抜いてください。
    > - 最大寸法を 800 × 800 ピクセル以下に保ってください。
    > - JPEG（`.jpg`）または PNG（`.png`）形式を使用してください。
    > - ファイル名を `company_name_in_lowercase` とし、適切なファイル拡張子を追加してください。

## パートナーページへのアプリの追加

上記のアイテムが揃ったら、以下のステップに従ってパートナーページに自社を追加してください：

1. gitlab.com にサインインし、[こちら](https://gitlab.com/gitlab-com/marketing/digital-experience/about-gitlab-com/-/blob/main/content/en-us/partners/technology-partners/index.yml?ref_type=heads)にある [www.gitlab.com](https://gitlab.com) のホームプロジェクトに移動します。右上の **「Fork」** ボタンをクリックして、アカウント内でリポジトリのコピーを作成します。
1. 次に、**「Web IDE」** ボタンをクリックして特定の YAML ファイルに変更を加えます。
1. 左側のペインで `/content` ディレクトリに移動すると、フォルダ内に `apps.yml` ファイルが表示されます。ファイルをクリックして WebIDE 内で開きます。ファイルの正しいカテゴリに以下のフィールドを追加し、以下のアプリケーション情報を各空白フィールドに入力してください：

```yaml
  - title: Company title
    content: >-
      Description
    id: lower-case-company-title
    image:
      config:
        src: https://res.cloudinary.com/about-gitlab-com/image/upload/v1757963815/qljiyvb5eatav26mhdxw.png
    category: Category
    links:
      - text: Link name
        config:
          href: link-url.com
          variant: tertiary
          dataGaName: Link name
          dataGaLocation: body

```

アプリのカテゴリを適宜選択してください。コードブロックは所属するカテゴリリストの**末尾に**追加します。

**注意事項**：

- センテンスケースで記述し、文の先頭、製品名、メソッド名、フィーチャー名の先頭に大文字を使用してください。
- 常に GitLab を大文字の G と L で記述してください。
- YAML ファイルのインデントを尊重してください。
- コロンや引用符などの特殊文字は避けてください。使用する場合は、YAML 構文を壊さないように手動でエスケープする必要が生じる場合があります。

1. `apps.yml` を更新した後、画面左側のファイルブラウザを使用して `static/nuxt-images/applications/apps/` に移動します。
1. `apps` ディレクトリの隣にある `⋁` アイコンをクリックし、「ファイルをアップロード」を選択して会社のロゴをアップロードします。上記の画像要件に従い、ファイル名が `apps.yml` の `picture` エントリと一致することを確認してください。
    > **注意：** 画像名はアプリケーションタイトルと完全に一致する必要があります。例えば、アプリが「GitLab Inc」というタイトルの場合、アップロードする画像名は「gitlab_inc.png」となり、サイトが生成される際にアプリリスティングにマッピングされます。
1. これが完了したら、左下の `Commit` ボタンをクリックします。「2 unstaged and 0 staged changes」のような表示が出るはずです。これにより「Unstaged」と「Staged」エリアを含むサイドバーが表示されます。
1. ファイルをチェックして、更新が期待通りであることを確認してください。問題なければ、ファイル名の横のチェックマークをクリックして変更を「ステージ」します。
1. すべての編集を確認したら、変更内容を含む短いコミットメッセージを入力します。「新しいブランチを作成」を選択します。ブランチ名は `CompanyName-partners-page` またはそれに類する形式で付けてください。「新しいマージリクエストを開始」チェックボックスにチェックを入れます。その後、もう一度 `Commit` をクリックします。
1. 新しいマージリクエストが開始され、説明と MR の詳細を記入できるようになります。「Applications」テンプレートを選択し、情報を適宜記入してください。
1. マージリクエストの詳細を記入したら、**[Allow collaboration on merge requests across forks](https://docs.gitlab.com/ee/user/project/merge_requests/allow_collaboration.html#enabling-commit-edits-from-upstream-members) ページに詳述されているように `Allow commits from members who can merge to target branch` のチェックボックスにチェックを入れることを必ず確認してください。**
    > MR を提出する際は、ソースが MR から作成されたブランチであり、デスティネーション/ターゲットが `/gitlab-com/marketing/digital-experience/buyer-experience/` であることを確認してください。
1. MR が作成されたら、Application テンプレートを使用して手順を完了してください。

## さらなる開発を希望する場合

[アライアンスプロジェクト](https://gitlab.com/gitlab-com/alliances/alliances)で Issue をオープンして、アライアンスグループ内での共同プライベートプロジェクトをリクエストしてください。

- チェックリストの項目をレビューして何が必要かを確認してください
- GitLab のユーザー名と SE のユーザー名も共有してください。どちらも、技術的な実地体験を希望する方向けのサンドボックスプロジェクトを作成できます。

これにより、パートナーに統合、ワークフローのテストを行い、公開向けデモを作成するためのホームベースが提供されます。最初はプライベートに設定されますが、プロジェクト内にコンテンツが存在するようになれば、プロジェクトをいつでもパブリックに切り替えることができます。

GitLab.com アカウントの作成に使用したメールアドレスのリストが必要です。グループ内では、開発/テスト用のプロジェクトとリポジトリを作成できます。

## ご質問は？

私たちはお手伝いするためにここにいます。アライアンスチームは Issue と Issue ボードを使って作業しています。プロジェクトでサポートが必要な場合は、[Issue をオープン](https://gitlab.com/gitlab-com/alliances/alliances/-/issues/new/?issuable_template=general_alliance_request)してください。できるだけ早くご返答します！技術的なサポートをお探しの場合は、トラブルシューティングについて以下をご覧ください。

## トラブルシューティング

統合への取り組みをサポートするために常にここにいます。現在の API に不足している API コールがある場合や、開発中に他の問題が発生した場合は、[GitLab Issue トラッカー](https://gitlab.com/gitlab-org/gitlab/-/issues)で新しい Issue を作成し、`devops::ecosystem` ラベルを適用してください。
