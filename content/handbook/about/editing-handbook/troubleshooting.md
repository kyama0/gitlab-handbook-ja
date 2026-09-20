---
title: ハンドブック編集のトラブルシューティング
description: ハンドブック編集中のアクセス、プレビュー、パイプラインの問題を見つけて修正する
upstream_path: /handbook/about/editing-handbook/troubleshooting/
upstream_sha: "fa96dbec1adcd6457e8819e6bd3d28fddfdddf4f"
lastmod: "2026-09-17T22:07:50+02:00"
translated_at: "2026-09-20T03:40:59+00:00"
translator: codex
stale: false
---

以下の症状から確認を始めてください。支援が必要な場合は、ページまたは失敗したジョブの URL を
[#handbook](https://gitlab.enterprise.slack.com/archives/C81PT2ALD)または
[#mr-buddies](https://gitlab.slack.com/archives/CLM8K5LF4)で共有してください。
社内コンテンツは、その情報の共有が承認されているチャンネル内で扱ってください。

| 問題 | 最初の確認先 |
| --- | --- |
| 編集操作で 404 が返される | [アクセスとサインイン](#404-errors-with-edit-action) |
| 新しいページや画像が表示されない | [ページ名](#404-error-on-new-page)または[画像](#images-not-loading-properly) |
| パイプラインが失敗した | [失敗しているチェックを見つける](#failing-pipelines) |
| リンクや見出しが壊れている | [リンクとアンカーのエラー](#link-and-anchor-errors) |
| ローカルプレビューが起動しない | [環境のトラブルシューティング](https://handbook.gitlab.com/docs/development/troubleshooting/) |
| 保存後に無関係なページが変更された | [フォーマッターの設定](#prettier-is-formatting-markdown-files) |

## 編集操作での 404 エラー {#404-errors-with-edit-action}

ブラウザでハンドブックのページ右上にある `Edit this page` をクリックすると、GitLab Web IDE で `404` エラーが発生する場合があります。

チームメンバーの場合、この問題は GitLab.com プロフィールと Okta の SAML SSO セッションの有効期限切れに関連している可能性があります。
この問題を軽減し解決するには、`View page source` をクリックして、Okta による SAML 認証を再度開始してください。

または、GitLab.com プロフィールの [To-Do リスト](https://gitlab.com/dashboard/todos)に移動するか、非公開の Issue を開いて、認証を開始してください。

ブラウザに関連する可能性もあります。キャッシュをクリアする、シークレットウィンドウを開く（macOS では `cmd shift n`）、または別のブラウザを使用してテストしてください。

## 新しいページでの 404 エラー {#404-error-on-new-page}

マージリクエストの一部として新しいページを作成したものの、サイトに表示されない場合は、
ファイル名を確認してください。

最もよくある問題は、ほかのページがあるフォルダで `_index.md` の代わりに `index.md` を使っていることです。
この場合、ほかのページが表示されなくなります。

詳細については、[ページとフォルダの構造](_index.md#naming-pages-and-folder-structure)を参照してください。

## 画像が正しく読み込まれない {#images-not-loading-properly}

新しい画像を追加したものの、レビューアプリで正しく読み込まれない場合は、
[Markdown ガイドの画像セクション](https://handbook.gitlab.com/docs/markdown-guide/#images)を確認してください。

## パイプラインの失敗 {#failing-pipelines}

エージェントに失敗したジョブの URL を渡すか、関連する lint の出力を貼り付けられます。
原因を説明し、ローカルでチェックを再現し、報告された問題だけを修正するよう依頼してください。
特にコミット後は、ローカルのチェック対象ファイルが CI と異なる場合があります。
どのファイルと基準の状態をテストしたか確認してください。インフラストラクチャの障害は lint エラーではありません。

支援を受けるには、次のいずれかのエージェントを使用してください。

1. CI/CD に特化した支援：[Fix CI/CD Pipeline Flow](https://docs.gitlab.com/user/duo_agent_platform/flows/foundational_flows/fix_pipeline/)、[CI Expert agent](https://docs.gitlab.com/user/duo_agent_platform/agents/foundational_agents/ci_expert_agent/)
1. 一般的な支援：[Developer Flow](https://docs.gitlab.com/user/duo_agent_platform/flows/foundational_flows/developer/)と [Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/)
1. ローカルエージェント：[GitLab Duo CLI](https://docs.gitlab.com/user/gitlab_duo_cli/)、[Claude Code](/handbook/tools-and-tips/ai/claude/)、またはその他の承認済み AI ツールを、[GitLab MCP server](https://docs.gitlab.com/user/model_context_protocol/mcp_server/)と併用します。

パイプラインが失敗している理由を確認するには、主に次の 2 か所を確認します。

1. マージリクエストに対するボットの最新コメント。すべてのリンターエラーの一覧が含まれているはずです。ただし、ビルドエラーではコメントは生成されません。
1. 個々の失敗したジョブ。MR > 「Pipelines」タブ > 赤い丸を選択 > 失敗したジョブを選択します。エラーメッセージはジョブログの末尾付近にあり、`Error` で始まります。

ジョブログのエラーメッセージには、通常、次の情報が含まれます。

1. エラー
1. エラーが発生したファイル
1. 行番号
1. 文字番号（行内の位置）

例：

```text
Error: error building site: assemble: "/builds/gitlab-com/content-sites/handbook/content/handbook/security/security-assurance/field-security/trust_center_guide.md:1:2": closing tag for shortcode 'details' does not match start tag`

- File: `content/handbook/security/security-assurance/field-security/trust_center_guide.md`
- Line: 1
- Character: 2
```

Markdown のエラーを修正するには、メッセージを確認してください。または、[Markdown スタイルガイド](https://handbook.gitlab.com/docs/markdown-guide/)の該当するセクションを確認してください。

ビルドやセットアップのエラーについては、[開発のトラブルシューティングガイド](https://handbook.gitlab.com/docs/development/troubleshooting/)を参照してください。
原因が不明な場合は、支援を求める際に失敗したジョブの URL を含めてください。

個別のエラーについては、以下のセクションを参照してください。

問題が `main` ブランチで発生していた場合は、[リベース](https://docs.gitlab.com/ee/user/project/quick_actions.html#issues-merge-requests-and-epics)が必要になることがあります。

判断できない場合は、[支援を求められます](_index.md#need-help)。

### リンクとアンカーのエラー {#link-and-anchor-errors}

ハンドブック全体のリンクとアンカーを検証するリンター（Hugolint）があります。変更によって _新たに_ リンク切れが生じると、パイプラインのジョブが失敗します。エラーの一覧を見つける方法は、[前述のパイプラインの失敗セクション](#failing-pipelines)の手順に従ってください。

失敗する主な理由は 2 つあります。

1. MR で追加したコンテンツに、壊れたリンクが含まれている。
1. MR で変更したコンテンツによって、既存のリンクが壊れている。

ジョブログに表示される、失敗した `hugolint` ジョブのエラーメッセージの例を示します。

```plain
Newly broken (only in "linkcheck.json", 3 issues):
❌ [content/handbook/security/product-security/_index.md:43]: <major> Link destination "architecture/" does not exist
❌ [content/handbook/security/product-security/security-architecture/_index.md:269]: <major> Link destination "/handbook/business-technology/tech-stack/#panther" does not exist
❌ [content/handbook/security/product-security/security-architecture/zero-trust.md:45]: <major> Link destination "/handbook/security/corporate/systems/#laptop-or-desktop-system-configuration" does not exist
```

1. エラーは、壊れたリンクがあるファイルから始まり、その後に行番号が続きます。
   （例：ファイルパス - `content/handbook/security/product-security/_index.md`、行番号：43。）
1. 次に、どのリンクが壊れているかが示されます。（例：`architecture/` が壊れたリンク先です。）
1. 壊れている、または存在しないアンカーリンク（例：`#panther`）の場合：
   1. MR でリンク先の見出しを変更しましたか？その場合は、リンクのアンカーを新しい見出しに合わせて更新する必要があります。
   1. 見出しにリンクしている場合、その見出しは存在しますか？ウェブサイトではなく、リポジトリ内のファイルを確認してください。リンクはビルド前にチェックされるため、生成されたコンテンツ（ショートコードや include によるもの）はリンクチェッカーにとって「存在」しません。
      - リンク先のページに、生成されたコンテンツが大量にある場合（パフォーマンス指標のページなど）は、該当する設定ファイルで [`hugolint` の除外設定を追加](https://gitlab.com/gitlab-com/content-sites/handbook-tools/hugolint/#configuration)できます。

### コミュニティからのコントリビュート {#community-contributions}

非公開フォークからのハンドブックへのコントリビュートでは、パイプラインが失敗します。
コントリビューターは公開フォークを使用してください。[コミュニティフォーク](https://gitlab.com/gitlab-community/meta#gitlab-community-forks)の使用を推奨します。

## デフォルトブランチのエラーの修正 {#fixing-default-branch-errors}

無関係な複数の MR が同じエラーで失敗する場合は、そのログを最新の
デフォルトブランチのパイプラインと比較してください。無関係なコンテンツを変更する前に、
ジョブの URL を添えて [#handbook Slack](https://gitlab.enterprise.slack.com/archives/C81PT2ALD)で相談してください。共通の失敗は、
設定、インポートされたデータ、インフラストラクチャ、または依存関係に起因している可能性があります。
ログから調査箇所を判断してください。[メンテナンスガイド](https://handbook.gitlab.com/docs/development/maintenance/)を参照してください。

### 例：tech writing ショートコードによる main の障害を修正する {#example-fixing-broken-main-on-tech-writing-shortcode}

この過去のインシデントでは、古い Hugo テンプレートとリポジトリのパスが使われていました。
現在コピーして使うコマンドではなく、エラーをたどって元のデータを調べる方法を示しています。

こちらの[エラーの例](https://gitlab.com/gitlab-com/content-sites/handbook/-/jobs/5968799321#L123)を見てください。

```plain
Error: error building site: failed to render shortcode: "/builds/gitlab-com/content-sites/handbook/content/handbook/marketing/product-and-technical-marketing/technical-writing/_index.md:126:1": failed to render shortcode "tech-writing": failed to process shortcode: "/builds/gitlab-com/content-sites/handbook/layouts/shortcodes/tech-writing.html:16:28": execute of template failed: template: shortcodes/tech-writing.html:16:28: executing "shortcodes/tech-writing.html" at <ref page (printf "/handbook/product/categories#%s-section" $section)>: error calling ref: parse "/handbook/product/categories#%!s(<nil>)-section": invalid URL escape "%!s"
```

エラーのトレースをたどると、完全なパスと行番号を含む最後のエラーは次のとおりです。
`failed to process shortcode: "/builds/gitlab-com/content-sites/handbook/layouts/shortcodes/tech-writing.html:16:28"`。

[`tech-writing` ショートコード](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/114d8f9bf00342360be14dce8cf6e55e1d8a6edd/layouts/shortcodes/tech-writing.html#L16)を見ると、
問題は `printf "/handbook/product/categories#%s-section" $section` に想定外の値があることであり、
エラーメッセージの最後の部分と一致しています。

そこから、[`tech-writing` ショートコードの 11 行目](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/114d8f9bf00342360be14dce8cf6e55e1d8a6edd/layouts/shortcodes/tech-writing.html#L11)を見ると、
データは `site.Data.public.stages.stages "section"` から取得していることがわかります。

サイトをローカルでビルドしている場合は、`data/public` フォルダですべてのデータファイルを見つけられます。
該当するファイル（通常は `yml` ファイル）の冒頭に、元のファイルの場所が記載されているはずです。

ローカルでビルドしていない場合でも、[www-gitlab-com の data フォルダ](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data)で見つけられる可能性があります。

コードからファイル名を特定できます。`site.Data.public.stages.stages` は、
`data/public` にある `stages.yml` ファイルを指します。

最後の部分の `.stages "section"` は、`stages:` 内にある
各 `section:` 行からデータを取得していることを意味します。

ファイルへの直近の変更を確認するか、`main` が失敗し始めた時点と比較するか、その両方を行えます。

このケースでは、[空の `section:` 行](https://gitlab.com/gitlab-com/www-gitlab-com/-/commit/17a5406b9a8fd33756cd5e0c4a2343ea2b4ab7a7)が
問題でした。

手早く簡単に修正するには、空の `section:` 行にテキストを追加してマージし、
公開ハンドブックのプロジェクトで新しいパイプラインを実行します。

このケースでは、[ハンドブックのコードの堅牢性が向上しました](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/2820/diffs)。

## Prettier が Markdown ファイルを整形する {#prettier-is-formatting-markdown-files}

VS Code で `prettier` を設定していて、整形されるべきではない `.md` ファイルが整形されてしまう場合は、ユーザー設定の `"editor.defaultFormatter": "esbenp.prettier-vscode"` によって Prettier が既定のフォーマッターになっていないか確認してください。

また、拡張機能の設定で [Glob Pattern](https://code.visualstudio.com/api/references/vscode-api#GlobPattern)を使用して、自動整形するファイルを指定することも検討してください。
