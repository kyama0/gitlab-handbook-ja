---
title: "GitLab 著名貢献者選定プロセス"
description: DevRel Engineering が GitLab 著名貢献者を選定するプロセス
upstream_path: /handbook/marketing/developer-relations/engineering/notable-contributor-process/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
---

## GitLab 著名貢献者 (Notable Contributor)

毎月 GitLab は、GitLab リリース投稿で取り上げる GitLab 著名貢献者として、1 人または複数のコミュニティ貢献者を表彰します。
これは以前は GitLab MVP ("Most Valuable Person") として知られていました。
ノミネーションはローリングプロセスであり、貢献者はいつでもノミネートされサポートされることができます。
GitLab 著名貢献者は、GitLab リリース投稿、Slack、Discord で表彰されます。
著名貢献者には、プロフィール用の達成バッジと、貢献を祝う GitLab グッズクレジットも贈られます。

- [GitLab 著名貢献者](https://contributors.gitlab.com/docs/notable-contributors)の殿堂リスト
- GitLab ブログの[リリース投稿](https://about.gitlab.com/releases/categories/releases/)

## GitLab 著名貢献者を選定するワークフロー

1. [ローリング GitLab 著名貢献者ノミネーション Issue](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues/?label_name%5B%5D=Notable%20contributor%20nominations) は、メジャーリリースサイクル全体 (例: 18.0 から 18.11) で使用されます。コミュニティ貢献者はいつでもこの Issue に追加できます。
1. [`notable_contributor_workflow_tracker.md` Issue テンプレート](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/blob/main/.gitlab/issue_templates/notable_contributor_workflow_tracker.md?ref_type=heads)を使用して、選定プロセス中に従う手順のチェックリストを含む Issue を作成します。
1. ノミネーション Issue から、1 人または複数の[適格な著名貢献者](/handbook/marketing/developer-relations/engineering/notable-contributor-process/#notable-contributor-eligibility)を選択します。
   - 選択は、貢献とコミュニティへの影響、ノミネーションコメント、絵文字投票に基づいて選ばれるべきです。
   - 選択は[リリース日](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule)の少なくとも 10 暦日前までに完了する必要があります。
1. これがマイナーリリースバージョンの場合、ノミネーション Issue 内の既存のスレッドを使用して著名貢献者の受賞者を発表します。
   - ノミネーターと、ノミネーションを支持するコメントを追加した人々に必ずメンションして感謝します。
   - 著名貢献者を Issue のトップレベルの説明にあるテーブルに追加します。

   ```text
   :tada: Congratulations to our X.Y Notable Contributor award winner X https://gitlab.com/x
   Note about X's contributions.

   A huge thank you to A B and C for nominating Notable Contributors and X Y and Z for adding support.
   ```

1. 現在のリリースブランチから、新しい著名貢献者を追加するためのマージリクエストをドラフトします。
   - 最初のステップは、`www-gitlab-org` プロジェクトの現在のリリースブランチ `release-x-y` に切り替えることです。15.8 リリースを例にすると、ドロップダウンメニューから `release-15-8` ブランチを選択することにより、GitLab で直接現在のリリースブランチに移動します。ローカルで作業している場合は、`release-15-8` ブランチをチェックアウトします。
   - `data/release_posts/x_y` 配下の現在のリリースフォルダー内の `mvp.yml` ファイルに移動します。この例では、プレースホルダーの `mvp.yml` ファイルがある `15_8` フォルダーになります。
      - **注**: 著名貢献者が複数いる場合、yaml ファイルでは配列構文を使用してください。1 人の場合は、配列構文を避けてください。例:

      ```yaml
        fullname: Single Recipient
        gitlab: single_username
      ```

      ```yaml
        fullname: ['First Recipient', 'Second Recipient']
        gitlab: ['first_username', 'second_username']
      ```

   - 新しい著名貢献者の名前とユーザーハンドルを更新することで、マージリクエストのドラフトを開始します。書き上げ用のプレースホルダーテキストを削除します。新しいブランチに変更をコミットします。GitLab でマージリクエストを作成する際は、ブランチが `master` ではなく現在のリリースブランチ `release-x-y` をターゲットにしていることを確認してください。
   - [著名貢献者の書き上げ文](#notable-contributor-write-up-blurb)を共同作成する手順に従います。
   - 別の Contributor Success チームメンバーをレビュー/マージにアサインし、マージリクエストが正しいリリースブランチをターゲットにしていることを再確認します。
   - 認識のために、[リリース投稿マネージャー](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/release_post_managers.yml)を MR にメンションします。
   - リリース週の火曜日までにマージします。
1. 著名貢献者を、[著名貢献者プラットフォームページ](https://contributors.gitlab.com/docs/notable-contributors)の Recipients セクションに追加します。
   - `contributors-gitlab-com` プロジェクトの [`notable-contributors.md`](https://gitlab.com/gitlab-org/developer-relations/contributor-success/contributors-gitlab-com/-/blob/main/contributors/public/docs/notable-contributors.md?ref_type=heads) を更新します
   - 既存のバージョンと日付の形式に従って、今後のリリース投稿ページの `#notable-contributor` ヘッダーにリンクします
   - 既存の形式に従って、受賞者の GitLab プロフィールにリンクします
   - 受賞者が複数の場合は、インラインの改行 `<br>` を使用して貢献者名を区切ります
   - リリースノートを生成するために、コミットメッセージで [feature changelog trailer](https://contributors.gitlab.com/docs/README#commit-messages) を使用します
   - ライブのリリース投稿日より前にマージし、[デプロイ](https://contributors.gitlab.com/docs/README#deployment)します
1. [GraphiQL](https://gitlab.com/-/graphql-explorer) で以下のクエリを実行することにより、著名貢献者の受賞者に著名貢献者の達成を授与します。([Achievements Group](https://gitlab.com/gitlab-org/achievements) の `Maintainer` である必要があります。デフォルトでは、Contributor Success チームメンバーは権限を持っているはずです。) エラーがなければ成功です！MVP の GitLab プロフィールにアクセスして達成を確認することもできます。

    ```graphql
    mutation {
      achievementsAward(
        input: {achievementId: "gid://gitlab/Achievements::Achievement/53", userId: "gid://gitlab/User/<user id>"}
      ) {
        userAchievement {
          id
          achievement {
            id
            name
          }
          user {
            id
            username
          }
        }
        errors
      }
    }
    ```

   注: ユーザー名から userId を見つけるには、ユーザーの GitLab プロフィールページにアクセスし、右上隅のドロップダウン省略記号 (ケバブメニュー) をクリックします。

1. [著名貢献者報酬の送付](#sending-notable-contributor-rewards)の手順に従います。
1. リリース投稿が公開された後、Slack `#whats-happening-at-gitlab` チャンネルで、リリース投稿の著名貢献者セクションへのリンクと、新しいノミネーションを追加するリマインダーを投稿します。

   ```md
   :mega: Check out our latest GitLab Notable Contributors X & Y in the X.Y release post!
   You can nominate community contributors in the rolling nominations issue here: https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues/?label_name%5B%5D=Notable%20contributor%20nominations
   Please add any community contributors throughout the year whenever you see a helpful contribution. Your support now will help them when they make future contributions to GitLab too!
   ```

1. メッセージを `#developer-relations`、`#mr-coaching`、`#core` に転送します。
1. Discord の `#announcements` チャンネルでメッセージを共有し、ノミネーションやサポートを追加した広範コミュニティのメンバーに感謝します。
1. ノミネーション Issue とノミネートされたスレッドを更新して、受賞者を文書化します。

### 著名貢献者の適格性

- Contributor Success チームが GitLab 著名貢献者賞の選定について最終決定を行います。
- Contributor Success チームは、適切に応じて 1 人または複数の著名貢献者を考慮します。
- 貢献者は、メジャーリリースサイクルごとに 1 回、著名貢献者になる資格があります。例えば、17.* マイルストーン中に著名貢献者になった場合、18.0 マイルストーンまで再び著名貢献者になることはできません。
- 過去の著名貢献者を[貢献者プラットフォーム](https://contributors.gitlab.com/docs/notable-contributors)で表示します。
- 貢献者は、現在のリリースサイクルに貢献したかどうかに関わらずノミネートできます。貢献者は、以前および継続中の GitLab への貢献に対して表彰されます。
  - 例: 以前のリリース作業で選ばれた [15.8 著名貢献者](https://about.gitlab.com/releases/2023/01/22/gitlab-15-8-released/#mvp) と、安定した貢献で選ばれた [15.7 著名貢献者](https://about.gitlab.com/releases/2022/12/22/gitlab-15-7-released/#mvp) を参照してください。

### 著名貢献者の書き上げ文

`data/release_posts/x_y/mvp.yml` マージリクエストを使用して、著名貢献者の受賞者、ノミネーター、および他のチームメンバーと著名貢献者の書き上げを共同作成します。

著名貢献者の書き上げセクションには以下が含まれるべきです:

- 著名貢献者の GitLab への貢献の簡単な説明。
- 著名貢献者が貢献した関連 Issue、MR、Issue ボード、エピックへのリンク。
- 著名貢献者についての引用が含まれるノミネーターおよび/またはサポーターへのリンク。
- 提供されている場合、著名貢献者からの引用や詳細。
- 提供されている場合、著名貢献者の役割または組織。
- Contributor Success は以下を確認してエントリをレビューする責任があります:
  - 一貫性と正確性
  - ユーザー情報、Issue、MR などの正しく機能するリンク
  - 名前、組織、製品機能などの正しいスペル
  - 正しい[代名詞](/handbook/people-group/pronouns/)の使用
- 書き上げは、特定のリリースブランチをターゲットにした `data/release_posts/x_y/mvp.yml` ファイルに、リリース週の火曜日までにマージされる必要があります。
- 書き上げはかなり簡潔である必要があります。リリース投稿の上部の目立つ位置に表示されます。150 単語未満に保つようにしてください。

著名貢献者の受賞者とチームメンバーをマージリクエストにメンションする際、以下のサンプルメッセージを使用できます:

```text
Hi **{WINNER}** :wave:

Congrats on being selected as GitLab's **{X.Y}** Notable Contributor!

We are working on a write-up for you that will be included in the **{X.Y}** release post. For reference you can check out our past [Notable Contributor list](https://contributors.gitlab.com/docs/notable-contributors) and here are a few notable examples:
- https://about.gitlab.com/releases/2025/04/17/gitlab-17-11-released/#notable-contributor
- https://about.gitlab.com/releases/2024/04/18/gitlab-16-11-released/#notable-contributor
- https://about.gitlab.com/releases/2024/03/21/gitlab-16-10-released/#notable-contributor
- https://about.gitlab.com/releases/2024/02/15/gitlab-16-9-released/#notable-contributor
- https://about.gitlab.com/releases/2023/07/22/gitlab-16-2-released/#notable-contributor
- https://about.gitlab.com/releases/2023/02/22/gitlab-15-9-released/#notable-contributor

Please let us know if there are any details you would like us to highlight about yourself, your work or your contributions to the GitLab community.

I'm also pinging **{NOMINATOR}** **{COMMENTER}** who either nominated or commented on your contributions in the **{NOMINATION_ISSUE}**. They can also chime in with anything worth noting for the release post write-up or a quote about your contributions.

We only have a few days to put this together. If we don't hear back or you don't have the time we will do our best to put something together! The **{X.Y}** release post will go live on the [release date](/handbook/engineering/releases/).

Finally we will work to get your GitLab swag sent over soon!
```

## 著名貢献者報酬の送付

著名貢献者を選定し、[著名貢献者を選定するワークフロー](#workflow-for-selecting-gitlab-notable-contributor)を進めた後:

1. [contributors.gitlab.com/rewards](https://contributors.gitlab.com/rewards) にアクセスします
1. 彼らのユーザー名に 150 貢献者ストアクレジットを発行します (受賞者が複数の場合、各受賞者は 150 クレジットを得ます)
1. Reason ドロップダウンから "Notable contributor (MVP)" オプションを選択します
1. オプションのお礼メモやリリース投稿へのリンクを含めます
