---
title: ナレッジベーススタイルガイド
description: サポートのナレッジベース記事を執筆するためのガイドライン
upstream_path: /handbook/support/knowledge-base/kb-style-guide/
upstream_sha: 6c73093986242c762a8f4a2769fbfba69b31fcf9
translated_at: "2026-05-08T13:00:00Z"
translator: claude
stale: false
lastmod: "2025-05-27T07:53:35-04:00"
---

このドキュメントは、GitLab サポートのナレッジベースドキュメントの基準をまとめたものです。これらの記事は、その瞬間に発生した特定の顧客 Issue に対処し、顧客が自己解決したり、サポートが必要なときにより素早い解決を受けられるようにすることを目的としています。スタイルガイドは、私たちが顧客に対して一貫した形式と声で情報を提供することを保証します。

## ナレッジベースの声

KB 記事の声は、簡潔で、直接的で、的確であるべきです。多くのユーザーがストレスのある状況でこれらの記事を使うため、できるだけ明確でシンプルに情報を伝えることが重要です。

## フォーマット

特に指定がない限り、[ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/) に従い、[推奨用語リスト](https://docs.gitlab.com/development/documentation/styleguide/word_list/) を使ってください。重要なのは、顧客が信頼できる標準テンプレートに従って明確な情報を提供することです。

特に次のことに注意してください:

- [ローカリゼーションを意識した執筆](https://docs.gitlab.com/development/documentation/styleguide/#writing-for-localization)
- [大文字／小文字](https://docs.gitlab.com/development/documentation/styleguide/#capitalization)、特に機能名や製品名について
- [順序付きリストと順序なしリスト](https://docs.gitlab.com/development/documentation/styleguide/#choose-between-an-ordered-or-unordered-list)、それぞれの使い分け
- [略語](https://docs.gitlab.com/development/documentation/styleguide/#acronyms)

### タイトル

H1 ヘッダーが Zendesk 上のドキュメントタイトルになります。例:

```text
# This is the page title
```

テンプレートから新しい KB 記事を作成する際、Zendesk で記事を正しく公開するためにタイトルを変更する必要があります。

良いタイトルは、簡潔さを保ちながら記事の内容を端的に説明します。最初の単語と固有名詞のみ大文字にし、迷ったらドキュメントスタイルガイドの [大文字／小文字](https://docs.gitlab.com/development/documentation/styleguide/#capitalization) を参照してください。関連性があればエラースニペットを含めてもよいですが、タイトルの長さに注意してください。

一般的に次の内容を扱います:

- Break/fix: 顧客が Issue に遭遇したときに見える症状
- How-to: 特定のタスクを完了する方法
- Q&A: 顧客が抱きそうな質問

例:

- Break/fix: [504 Gateway timeouts and performance degradation after losing PostgreSQL nodes](https://support.gitlab.com/hc/en-us/articles/16783619814044-504-Gateway-timeouts-and-performance-degradation-after-losing-PostgreSQL-nodes)
- How-to: [How to update the Primary email address of multiple users](https://support.gitlab.com/hc/en-us/articles/16784431039132-How-to-update-the-Primary-email-address-of-multiple-users-LDAP-and-SAML)
- Q&A: 環境をアップグレードするために必要な手順は何か？

### 説明

このセクションでは、解決が必要な症状、タスク、または状況を記述します。現時点では、検索エンジン最適化（SEO）のために最初の 140 文字がインデックスされると考えています。

- 理論上の状況ではなく、遭遇した Issue について書いてください。必要なら未確認の状況は追加メモとして付け加えます。
- エントリは重要度の高い順に上から下へ並べます。
- 関連するコンテキストをできるだけ多く含めます。小さな症状の一つひとつが、顧客の自己診断を助けるデータポイントです。
- 検索性を高めるため、ユーザーが遭遇する正確なエラーやメッセージを説明文にテキストとして含めます。エラーメッセージの画像は避けます。
- エラーメッセージは引用ブロックに入れます。
- 複数の項目には順序なしリストを使います。

### 環境

環境セクションは、その KB に関連するカスタム構成、インストールタイプ、またはバージョンを素早く強調します。可能な限り具体的にしてください。

- 可能な限り順序なしリストを使う
- 影響を受けるオファリング - ドキュメントページの Offering セクションと整合させる
- 影響を受けるバージョン - 影響を受けるバージョンを強調する。
  - ドキュメントが製品のすべてのバージョンに影響する場合、最善の判断でバージョンセクションを省略するか、すべてのバージョンが影響を受ける旨を記載します。
  - バージョン番号について話す際は [earlier](https://docs.gitlab.com/development/documentation/styleguide/word_list/#earlier) と [later](https://docs.gitlab.com/development/documentation/styleguide/word_list/#later) を使います。
  - バージョンには製品名を併記します。例: `GitLab 17.4.4` や `GitLab Runner 14.3.1`。
  - 明確さのため、影響を受けるパッチバージョンを必ず示します。これはドキュメントスタイルガイドとは異なります。
    - マイナーバージョンの全パッチが影響を受ける場合、`All GitLab 17.4.x versions` のように書きます。
    - 修正がバックポートされた場合、`GitLab 17.4.0 to 17.4.6, fixed in 17.4.7` のように書きます。複数のマイナーバージョンが影響を受ける場合はこれを繰り返せます。

いくつかの例:

```markdown
- **Impacted offerings:**
  - GitLab Dedicated
  - GitLab Self-Managed
- **Impacted versions:**
  - GitLab 16.3.0 to 16.3.7, fixed in GitLab 16.3.8
  - GitLab 16.4.3 to 16.4.5, fixed in GitLab 16.4.8
```

```markdown
- **Impacted offerings:**
  - GitLab Self-Managed
- **Impacted versions:**
  - GitLab 17.0.4 and later
- GitLab Geo is configured
- LDAP is configured
```

```markdown
- **Impacted offerings:**
  - GitLab.com
- Project is configured with SAST scanning
```

### ソリューションと回避策

ソリューションセクションでは、Issue を解決するためにユーザーが従うべき手順を明確にリストアップします。手順の前に高レベルのサマリーを置くことができます。ソリューションと回避策の両方がある場合は、回避策をレベル 3（###）の小見出しとして追加します。

1. このセクションのタイトルを内容に最も合うものに変更します: Solution または Workaround
1. Issue を解決または回避するために必要な手順を説明します。手順はできるだけ簡潔にします。例:

    ```text
    1. On a rails or database node, connect to the database with `sudo gitlab-psql connect`
    1. Run:
    
        ```pgsql
        --- comment: explain what complicated command does if not obvious
        <complicated command>
        ```
    ```

- 異なる環境については、コマンドをサブ項目として並べます:
  - Linux: `<command>`
  - macOS: `<command>`
- 順番に完了する必要のあるタスクには順序付きリストを使います。将来ステップを追加または削除できるよう、すべての項目で `1.` を使います。
- 順序のないステップには順序なしリストを使います。
- 可能な限り既存のドキュメントへリンクします。

### 原因

このセクションでは、Issue が発生した **何が** 原因か、わかっていれば **なぜ** 導入されたかを説明します。

原因はすぐに診断や問題解決にはつながらないため、別セクションとし、説明とソリューションの後にリストします。

原因がまだ調査中の場合は、原因不明と記載します。

必要に応じて、ドキュメント、ブログ記事、Issue、その他の資料へインラインでリンクします。

### 追加情報

追加情報の提供は任意ですが、他のセクションで扱われていない関連トピックを共有するのに役立ちます。ほとんどのセクションは簡潔で明確であるべきですが、ここでは以下のような情報や手順をより深く掘り下げられます:

- 説明セクションで言及されたログ、エラー、その他のデータの具体的な場所
- ソリューションで情報を見つけるための代替コマンド
- アップボートする価値のある関連機能要望

### 関連リンク

任意です。関連する機能要望、バグ Issue、その他の情報へのリンクを必要に応じて追加します。[関連トピック](https://docs.gitlab.com/development/documentation/topic_types/index/related-topics) のフォーマットに従ってください。

他のセクションでインラインリンクが含まれていても、リンクを 1 セクションにまとめておくと素早く参照できて便利です。

## 可能な限り既存のドキュメントを統合する

可能な限り既存のドキュメントを再利用するよう努めるべきです。ソリューションへの手順がすでにドキュメントや他の KB に存在する場合は、そのセクションへリンクし、必要に応じて追加の手順とコンテキストを KB に提供します。既存のソリューションに新たに見つかった手順は、そのソリューションにマージし、新しい記事内で参照すべきです。

例:

- [情報を重複させずにドキュメントへリンクするよう Solution を更新](https://gitlab.com/gitlab-com/support/support-pages/-/merge_requests/98/diffs?diff_id=1210778953&start_sha=a6936a6ac8d26199db694ad1e44198368edc7efd)
- [手順を KB で更新するか、ドキュメントで更新するかについての議論](https://gitlab.com/gitlab-com/support/support-pages/-/merge_requests/98#note_2245546605)
