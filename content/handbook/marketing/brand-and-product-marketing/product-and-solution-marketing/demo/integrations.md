---
title: "統合デモ"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/integrations/
upstream_sha: c26b483f365d397f86ef45e60a892d0783588ac1
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
lastmod: "2024-06-27T22:14:31+00:00"
---

場合によっては、GitLab を既存システムと共に使用しなければならないことがあります。最も一般的に求められるシステムには、Issue 管理用の Atlassian Jira、パイプライン実行用の Jenkins、ソースコード管理用の GitHub があります。Jira から GitLab へのワークフロー、GitHub から GitLab への CI/CD 連携、または GitLab から Jenkins への接続は、GitLab で利用可能な統合機能を使ってプロジェクト単位で素早く構成できます。

下記のデモでは、Jira の Issue と GitLab のソースコード管理間、および GitLab のマージリクエストと Jenkins のパイプライン間の作業のシンプルなフローを紹介します。

<figure class="video_container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Jn-_fyra7xQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</figure>

下記のデモでは、GitHub のプルリクエストと GitLab CI/CD 間の作業のシンプルなフローを紹介します。

<figure class="video_container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/qgl3F2j-1cI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</figure>

## Jira 統合デモ

利用可能な Jira 統合は 3 種類あります。

1. リアルタイムの MR／コメント統合（別名「Jira Integration」）。GitLab 単体での運用ができないすべての Jira + GitLab 顧客はこれを使用すべきです。
2. Dev Panel (DVCS) 統合。GitLab セルフマネージドおよび／または Jira Server を使用している場合、GitLab から Jira の Dev Panel にデータを供給する唯一の方法です。データ同期は 1 時間に 1 回 `Premium`
3. Atlassian Marketplace の GitLab for Jira アプリを使用する Dev Panel 統合。Jira Cloud と GitLab SaaS の統合に最適で、データがリアルタイムに同期されます！— Jira Cloud と GitLab SaaS のみで動作 `Premium`

以下のガイドを使って GitLab.com を Jira Software Cloud と統合できます:

- [GitLab Jira 統合](https://docs.gitlab.com/ee/integration/jira/) - GitLab から Jira issue ID を言及すると、Jira issue のコメントに反映されます。
- [GitLab for Jira アプリを使用した Dev Panel 統合](https://docs.gitlab.com/ee/integration/jira/) - Jira issue ごとに、GitLab からの関連コミット、ブランチ、プル（マージ）リクエストの数を持つリンクを表示します。

前提条件: GitLab.com で `Premium` グループのオーナーである必要があります

### GitLab Jira 統合

1. 自分の無料の Jira Software Cloud 環境を作成するか、1Password の `Jira Integration Demo Login` の下にリストされている環境を使用できます。
   - `Jira Integration Demo Login` を使用する場合は、Jira で `spring-integrations` プロジェクトを選択して issue board に移動します。
2. 新しい Jira Issue を作成します。ID をメモするか、クリップボードにコピーします。
3. GitLab.com にログインし、Ultimate グループ内に新しいプロジェクトを作成します
   - Settings > Integrations > Jira で、Web URL、ユーザー名、API トークン（ご自身用に新しいトークンを生成する必要があります）、プロジェクトのトランジション ID を使って統合を構成します。
4. Repository > Branches からブランチを作成します。ブランチ名と説明に新しい Jira issue ID を含めます（例: `fixes-SI-X`、`X` は issue 番号）。
5. 名前に `SI-X`、説明に `Resolves SI-X` を含むマージリクエストを作成します。
6. リポジトリ内の重要でないコードを編集し、`SI-X` を再度言及するコミットメッセージを入力します。
7. GitLab マージリクエストをマージすると、Jira Issue のステータスが **Done_** に遷移します。
8. GitLab メニューのリンク経由で再度 Jira に移動します。
9. Jira issue board に移動して issue を選択します（`spring-integrations` プロジェクトを使用している場合は *SI-X*）。GitLab のコンテンツが Comments エリアに存在することに注目してください。別のブラウザタブで Jira を開いている場合、ページのコンテンツを更新するとすぐに更新されたコメントが表示されます。

### GitLab for Jira アプリを使用した Dev Panel 統合

1. [GitLab.com Development Panel](https://docs.gitlab.com/ee/integration/jira/index.html#configuration) の手順に従います。
2. Jira issue board に移動して issue を選択します（`spring-integrations` プロジェクトを使用している場合は *SI-X*）。右側の Development パネルに表示されている GitLab のコミットとブランチ情報に注目してください。

## Jenkins 統合デモ

- 1Password の `Jenkins.Taunki.Cloud Login` を使って Jenkins にログインします。
- 1Password 経由で `demo.tanuki.cloud` の GitLab `spring-integrations` プロジェクトにログインします。
- Repository>Branches からブランチを作成します。
- マージリクエストを作成します。
- リポジトリ内の重要でないコードを編集し、汎用的なコミットメッセージを入力します。
- 作成したマージリクエストに移動し、パイプラインをクリックしてグラフィカルビューを表示します。
- パイプラインが実際に `external` ステージで Jenkins ジョブを実行したことに注目してください。
- Jenkins ジョブをクリックして、Jenkins コンソール出力に移動することを確認します。
- GitLab リポジトリに戻り、整合性とバージョニングのためにリポジトリと共に保守されている Jenkinsfile を強調表示します。

## Bamboo CI 統合デモ

- 自分の認証情報を使って GitLab にログインします
- 任意のテンプレートから新しいプロジェクトを作成します
- `.gitlab-ci.yml` を削除します
- 1Password の `Bamboo Tanuki Cloud` を使って Bamboo にログインします。
- `create -> create plan` を選択して新しいプランを作成します
- 既存のプロジェクトを選択するか、新しいプロジェクトを作成します
- `plan name` を指定します
- 既存のリポジトリを選択するか、新しいリポジトリにリンクします（新しいリポジトリにリンクする際に認証情報が必要な場合があります）
- `isolate build` を `Agent Environment` に設定したままにします
- `source code checkout` を選択して `force clean build` を有効化します
- 変更を保存し、タスクを `final tasks` にドラッグします
- `Save and continue` を選択します
- triggers タブを選択します
- デフォルトトリガーを削除し、新しい `remote trigger` を追加します
- デモ GitLab インスタンスに関連付けられた IP アドレスを指定します（ロードバランシング IP を提供する必要があることに注意してください）
- プランが有効になっていることを確認します
- `Run -> Run plan` を選択して、プランが GitLab からビルドできることを確認します
- GitLab プロジェクトに戻り、`settings -> integrations` を選択します
- `Atlassian Bamboo CI` を選択します
- すべてのフィールドを入力し、必ず統合をアクティブに設定します
- ビルドキーが見つからない場合は、Bamboo 内のプランページの URL から見つけることができます
- 変更を保存して README.md を編集して素早くコミットします
- Bamboo ダッシュボードでビルドがトリガーされたことを確認します
- master から新しいブランチを作成します
- Bamboo プラン構成ページ（`home page -> select plan -> 'actions > configure plan'`）内で `create plan branch` を選択します
- ダイアログに従って新しいブランチを追加します
- 新しいブランチで README.md を編集して変更をコミットします
- Bamboo で変更が Bamboo に取り込まれたことを確認します

## OpenLDAP 統合デモ（ユーザーの追加）

- OpenLDAP GUI にログインします（詳細は SA vault にあります）
- 左のナビゲーションパネルで LDAP ツリーを展開します
- `ou=users` 組織単位をクリックします
- メインパネルで `Create a child entry` をクリックします
- 利用可能なテンプレートから `Generic User Account` を選択すると、新しいユーザーフォームが表示されます
- 提供されたフォームに新しいユーザーの情報を入力し、すべての必須フィールドを入力します
- `Create Object` をクリックすると、確認のチャンスが与えられ、最後に `Commit` できます
- `Commit` ボタンをクリックして新しいユーザーを LDAP にコミットします
- 新しく作成されたユーザーアカウントに移動します
- GitLab のログイン画面に移動すると、LDAP を使ってログインするオプションが表示されます。
- OpenLDAP 内で新しいユーザーを作成する際に使用したユーザー ID とパスワードを入力します
- `Sign In` をクリックします
- 新しく作成されたユーザーは、`Email` フィールドを更新してメールアドレスを確認するためにプロフィールページに移動します。

## GitHub 統合デモ

- GitHub.com/signin に移動し、1Password の `GitHub Demo Login` を使ってログインします。
- GitLab.com に移動し、1Password の `GitHub Demo Login (GitLab)` を使ってログインします。
- GitHub リポジトリにリンクされた GitLab プロジェクトを作成する方法を示してデモを始めます。GitLab で `+` アイコンをクリックして新しいプロジェクトを作成します。
- `CI/CD for external repo` タブを選択し、GitLab 内で GitHub リポジトリにアクセスするには GitHub のアクセストークンを使用することを強調します。この時点では新しいプロジェクトを作成しないでください（キャンセル）。
- GitHub に切り替えます。`spring-boot-test` プロジェクトリポジトリをクリックします。
- `Branch:master` ボタンを使って新しいブランチを作成します。
- `src/main/java/hello/HelloController.java` ファイルをクリックして、画面メッセージに小さな変更を加えます。
- コミットメッセージを追加し、`Commit Changes` ボタンをクリックします。
- `Pull Requests` タブをクリックして、`New pull request` ボタンをクリックします。
- `base:master` と `compare:yourbranch` を使って変更を比較します。
- `Create pull request` をクリックします。
- 少し下にスクロールし、琥珀色の文言 `Some checks haven't completed yet` に注目します。
- このチェックを展開すると GitLab のロゴがあります。GitLab ロゴと並んだ `Details` ハイパーリンクをクリックします。
- 関連プロジェクトの GitLab パイプラインページに直接移動することに注目してください。このパイプラインは実行に最大 10 分かかる場合がありますが、完了するとパイプラインステータスが GitHub に返されます。
- パイプラインの完了を待っている間、GitLab で実行されたパイプラインの完全な履歴が利用可能であることに注目してください。
- また、リポジトリとブランチが GitHub から動的にミラーリングされていることにも注目してください。ただし、GitHub の Issue とプルリクエストが代わりに使用されるため、GitLab UI から Issue 管理とマージリクエストオプションが削除されています。
- 時間が経過したら、GitHub プルリクエストに戻って、GitHub に表示される pass/fail ステータスを示します。
- オプション: 他の既存のプルリクエストを使用して、変更をコミットしたり新しいプルリクエストを作成したりせずに連携を示すことができます。

## 結論

GitLab は、組み込みの統合を活用して、既存の Jira、GitHub、または Jenkins システムと連携でき、これらのツールと GitLab の間で双方向に作業を流して状態を更新できます。
