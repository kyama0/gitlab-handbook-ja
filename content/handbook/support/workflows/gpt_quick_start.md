---
title: GitLab Performance Tool (GPT) クイックスタート
description: このガイドでは GitLab Performance Tool を使う手順を提供します
category: Self-managed
upstream_path: /handbook/support/workflows/gpt_quick_start/
upstream_sha: 47fdb6582389288bed0f04a23aa5d972c3ce1ff5
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
---

## GitLab Performance Tool (GPT) とは

[GitLab Performance Tool](https://gitlab.com/gitlab-org/quality/performance) (`gpt`) は、任意の GitLab インスタンスのパフォーマンステストを提供するために GitLab Quality Engineering - Enablement チームによって構築・保守されています。このツールは業界をリードするオープンソースツール [k6](https://k6.io/) の上に構築されており、GitLab を効果的にパフォーマンステストするために設計された数多くのテストを提供します。

GitLab は、効果的なパフォーマンステストを得るために GitLab 環境に対して GPT を実行することを推奨しています。本番インスタンスでの実行は推奨しません。本当に必要な場合のみ本番で実行してください。その場合は、できるだけ静かな時間帯に実行します。システム環境によっては、テストには少なくとも 4 時間かかる場合があります。

**NOTE**: このクイックスタートは [`GPT v2` (2.10.0) のドキュメント](https://gitlab.com/gitlab-org/quality/performance/-/blob/2.10.0/docs/README.md) に基づいて書かれ採用されました。最新の変更については、必ず [公式の GitLab プロジェクトドキュメント: GitLab Performance Tool](https://gitlab.com/gitlab-org/quality/performance/-/blob/main/docs/README.md) をご確認ください。

## 必要要件

- Docker がインストールされた別のワークステーションまたはサーバー。
- GitLab インスタンスへ接続可能であること。

## 環境の初期化

Docker がインストールされたワークステーションのターミナルで、以下を実行してください:

```bash
# clone the gpt project
git clone https://gitlab.com/gitlab-org/quality/performance
cd performance
mkdir results
```

## 環境の準備

これにより、後でテストに使用するデータが生成されます。詳細は [GPT プロジェクト](https://gitlab.com/gitlab-org/quality/performance/-/blob/main/docs/environment_prep.md) で:

1. **Admin** ユーザーから API スコープを持つ [パーソナルアクセストークン](https://docs.gitlab.com/user/profile/personal_access_tokens/#creating-a-personal-access-token) を作成します。
   1. GitLab UI の右上で、自分のアバターを選択します。
   1. **Edit profile** を選択します。
   1. 左サイドバーで **Access Tokens** を選択します。
   1. トークンの名前と任意で有効期限を入力します。
   1. [API スコープ](https://docs.gitlab.com/user/profile/personal_access_tokens/#personal-access-token-scopes) を選択します。
   1. **Create personal access token** を選択します。
   1. パーソナルアクセストークンを安全な場所に保存します。ページを離れた後はトークンにアクセスできなくなります。

1. 次に、`./k6/config/environment/` 配下の環境ファイルを編集します。この例では 2k ユーザー環境を使用します。したがって、`2k.json` になります。`"url"` の値は GitLab インスタンスの URL に、`"user"` の値は上のステップで作成した Admin ユーザーのユーザー名に置き換えます。

   ```bash
   vi ./k6/config/environment/2k.json
   ```

   以下の行を編集します:

   ```yaml
   "url": "<your gitlab url>",
    "user": "<username that the access token belong to>",
   ```

   **NOTE:** `gpt` という名前のトップレベルグループが既に存在する場合は、`"root_group"` の値を別のユニークなトップレベルグループ名に置き換えてください。

1. 以下の docker コマンドを実行して、パフォーマンステストに必要なデータを生成します:

   ```bash
   docker run -it -e ACCESS_TOKEN=<TOKEN> -v $(pwd)/k6/config:/config -v $(pwd)/results:/results gitlab/gpt-data-generator --environment 2k.json
   ```

   **NOTE:** `<TOKEN>` をステップ 1 で作成したパーソナルアクセストークンに置き換えてください。

## テストの実行

詳細と説明は [GPT プロジェクト](https://gitlab.com/gitlab-org/quality/performance/-/blob/main/docs/k6.md) で参照できます

以下の Docker コマンドを実行します:

```bash
docker run -it -e ACCESS_TOKEN=<TOKEN> -v $(pwd)/k6/config:/config -v  $(pwd)/k6/tests:/tests -v $(pwd)/results:/results gitlab/gitlab-performance-tool --environment 2k.json --options <OPTIONS-FILE>.json
```

**NOTE:** `<TOKEN>` をパーソナルアクセストークンに置き換え、`<OPTIONS-FILE>` を 2k ユーザーテスト用の `60s_40rps.json` に置き換えてください。[オプション] ターゲット環境のユーザー数に基づいて、`<OPTIONS-FILE>` を以下の推奨オプションファイルに置き換えてもかまいません:

- 1k - `60s_20rps.json`
- 2k - `60s_40rps.json`
- 3k - `60s_60rps.json`
- 5k - `60s_100rps.json`
- 10k - `60s_200rps.json`
- 25k - `60s_500rps.json`
- 50k - `60s_1000rps.json`

## テストの出力と結果の確認

ツールを起動すると、各テストが順番に実行されているのが見えます。すべてのテストが完了すると、結果サマリーが表示されます。例として、こちらの [テストサマリー](https://gitlab.com/gitlab-org/quality/performance/-/blob/main/docs/k6.md#test-output-and-results) を見ることができます。

参考として、GitLab の最新のテスト結果はこちら: [Latest Results](https://gitlab.com/gitlab-org/reference-architectures/-/wikis/Benchmarks/Latest)。私たちの自動 CI パイプラインは毎週複数回実行され、結果サマリーをここに投稿しています。

[GitLab Performance Tool](https://gitlab.com/gitlab-org/quality/performance) を実行する際の既知の問題があります。一部のテストは、パフォーマンスが良くないことが既知の製品の部分に対して実行されます。

- [Improve performance of users API under load](https://gitlab.com/gitlab-org/gitlab/-/issues/346601)。
- [Quality チームが他のテストについて起票した他の Issue を確認する](https://gitlab.com/groups/gitlab-org/-/issues?sort=created_date&state=opened&label_name[]=Quality:performance-issues)

その他の起こり得る問題の詳細については、[Troubleshooting セクション](https://gitlab.com/gitlab-org/quality/performance/-/blob/main/docs/k6.md#troubleshooting) を参照してください

## クリーンアップ

このステップでは、生成されたテストデータを削除します。

方法 1: 以下の Docker コマンドを実行する

```bash
docker run -it -e ACCESS_TOKEN=<TOKEN> -v $(pwd)/k6/config:/config -v $(pwd)/results:/results gitlab/gpt-data-generator --environment 2k.json --clean-up
```

方法 2: GitLab UI からトップレベルグループ `gpt`（または環境 json で置き換えたユニークな名前）を削除する。

**NOTE**: どちらもトップレベルグループを削除するため、一方が他方より優先されることはありません。

## お客様向けの結果レビュー

お客様から、リファレンスアーキテクチャを構築する一環として GPT の結果のレビューを求められることがよくあります。

- エラーや問題が見つかった場合は [GPT Issue リスト](https://gitlab.com/gitlab-org/quality/performance/-/issues) を確認します。
- [GPT 経験のあるサポートチームメンバー](https://gitlab-com.gitlab.io/support/team-pages/skills-by-subject.html?search=GPT) に助けを求めます。
- あるいは、Slack の `#gitlab-performance-tool` チャンネルで GPT メンテナーに連絡します。
- パフォーマンスの問題が環境の設計や構成に関連していると疑われる場合は、リファレンスアーキテクチャグループの [トラッカー](https://gitlab.com/gitlab-org/reference-architectures/-/issues/?sort=created_date&state=opened&first_page_size=100) で連絡し、テンプレートを使ってヘルプリクエストを起票することもできます。
