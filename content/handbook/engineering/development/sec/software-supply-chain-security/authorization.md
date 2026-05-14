---
title: "Authorization グループ"
upstream_path: /handbook/engineering/development/sec/software-supply-chain-security/authorization/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

## プランニング

私たちの [プランニング Issue](https://gitlab.com/gitlab-org/software-supply-chain-security/authorization/team-tasks/-/issues?sort=created_date&state=opened&label_name%5B%5D=Planning%20Issue&first_page_size=50) は、現在私たちが取り組んでいることと、次に取り組むことの SSOT です。また、これらを `workflow` の観点から見るための [Issue ボード](https://gitlab.com/gitlab-org/gitlab/-/boards/9750781?milestone_title=Started&label_name[]=group%3A%3Aauthorization) もあります。Issue リストを維持するために、リーダーシップ (EM+PM) がリストをトリアージし続けます。

### ワークフロー

| ラベル | 定義 |
| ---   | ---        |
| `~workflow::ready for development` | エンジニアが取り掛かれる状態。`~priority::1` が最優先。 |
| `~workflow::scheduling` または `~workflow` ラベルがない | エンジニアが取り掛かるべきではなく、リーダーシップによるトリアージが必要。リーダーシップがこの作業を近いうちに実施するつもりがなければ、~Backlog マイルストーンを割り当てる。 |
| `~workflow::refinement` | エンジニアリングによるさらなる調査が必要。リファインメント後、Issue には weight が割り当てられ、workflow ラベルは `~workflow::scheduling` に更新されるべき。 |
| `~workflow::solution validation` | 作業開始前にプロダクトのインプットが必要。 |
| `~workflow::design` | 進行のためにデザインのインプットが必要、もしくは UX が積極的に作業中。 |

## 週次非同期 Issue アップデート

毎週末、各エンジニアは取り組んでいる Epic/Issue について、以下のテンプレートを使ってアサインされた Issue にコメントすることで簡単な非同期アップデートを提供することが期待されています:

```markdown

### Async issue update

* Current status:
<!--- Please provide a quick summary of the current status (one sentence) -->

* Shipping this milestone: <!-- Not confident | Slightly confident | Very confident -->

* Scope reduction opportunities: <!-- No | Yes, ... -->

/health_status <!-- on_track | needs_attention | at_risk -->
/label <!-- ~"workflow::In dev" | ~"workflow::In review" | ~"workflow::verification" |~"workflow::blocked" -->

<!-- Please apply a :triangular_flag_on_post: emoji to this comment. Fore more information see https://gitlab.com/jayswain/automated-reporting -->
```

これは、私たちのチームがコラボレーションにおいてより非同期になることを促進し、コミュニティや他のチームメンバーが現在私たちが積極的に取り組んでいる Issue の進捗を知ることができるようにするためです。

## グループメンバー

[Authorization グループ](https://gitlab.com/gitlab-org/software-supply-chain-security/authorization) は GitLab 上で `@gitlab-org/software-supply-chain-security/authorization` として `@` メンションできます。

以下のメンバーがグループの常任メンバーです:

{{< engineering/stable-counterparts role="Software Supply Chain Security:Authorization" >}}

## チーム Google ドライブ

Authorization グループ用のドキュメントは [こちら](https://drive.google.com/drive/folders/1XGKbOM46ujoZbv9HMWPtx1x2Mp4Ku3bg) に保存されています。

## チームミーティング

私たちのグループは、非同期の議論についてさらなる明確さと整合性を得るために同期ミーティングを開催しています。私たちのチームメンバーはいくつかのタイムゾーンにまたがっており、スケジュールされた時間に参加できないことが多いため、すべてのミーティングを [記録](/handbook/tools-and-tips/zoom/) することを目指しています。

私たちは AMER/APAC と EMEA/AMER に優しい時間帯をローテーションする週次のチーム同期ミーティングを開催しています: 火曜 20:00 UTC と水曜 14:30 UTC。
関連する [録画](https://drive.google.com/drive/folders/1_QjpV0TCELapJW2sXzTOViUUWXQyVj3r) と [ドキュメント](https://docs.google.com/document/d/1NGfuCaCNtyaN1qQwARhSh9cCNZkCVG-VisdK5GyP_N4/edit?usp=sharing)。

## PTO の計画

私たちは [休暇取得に関するエンジニアリングプロセス](/handbook/engineering/#taking-time-off) と [GitLab チームメンバーの休暇ガイド](/handbook/people-group/time-off-and-absence/time-off-types/) に従います。

## グループ共有カレンダー

[Authorization グループ共有カレンダー](https://calendar.google.com/calendar/embed?src=c_97507fb9234d07c2561c1b1ccc98cab1462bf0364214f2cc4917eee8a86b7cdd%40group.calendar.google.com&ctz=America%2FDetroit) は、PTO イベントがチームの全員に見えるようにするために使用されます。AuthZ エンジニアに関連するイベント (OOO など) を見るには、このカレンダーを購読してください。

### Time Off by Deel のエントリを共有カレンダーに同期する

以下は、Time Off by Deel にカレンダーを追加する手順です:

1. Slack を開く
1. Slack で "Time Off by Deel" アプリを開く
1. "Home" タブに移動する
1. "Your Events" ドロップダウンをクリックし、"Calendar Sync" を選択する
1. "Additional calendars to include?" の下で、"Add calendar" をクリックする
1. 次のカレンダー ID を追加する: `c_97507fb9234d07c2561c1b1ccc98cab1462bf0364214f2cc4917eee8a86b7cdd@group.calendar.google.com`

お疲れさまでした！🎉 これで PTO イベントが Authorization グループ共有カレンダーに同期されるようになります。🚀

## コラボレーション

### コードレビュー

このグループはアプリケーションの中で [広範囲に影響する](/handbook/engineering/development/#reducing-the-impact-of-far-reaching-work) コンポーネントを扱っているため、本番インシデントのリスクを減らすために以下の追加ステップを取ります:

1. 私たちのチームのマージリクエストは、チーム間でより多くの組織知識を構築するために、最初のレビューを他の Authorization チームメンバーに割り当てるべきです。このレビューは [レビュアー](https://docs.gitlab.com/ee/development/code_review.html#the-responsibility-of-the-reviewer) として行われるべきです。Authorization の承認は、Authorization レビュアーのロールに対応する承認としてカウントされます。たとえば、Authorization のバックエンドレビューを受けることはバックエンドレビューとしてカウントされます。承認されたら、Authorization レビュアーは適切な [メンテナーカテゴリ](https://docs.gitlab.com/ee/development/code_review.html#approval-guidelines) のメンテナーにレビューを依頼すべきです。
1. Authorization に関連するマージリクエスト (カスタムロールおよびポリシー関連のコードに触れるもの) は、[Authorization エンジニア](https://gitlab.com/groups/gitlab-org/govern/authorization/approvers/-/group_members?with_inherited_permissions=exclude) によるレビューが必要です。これは GitLab の `CODEOWNERS` 機能でガードされています。

### エンジニアリングリファインメント

#### 概要

エンジニアリングリファインメントは、すべてのチームメンバー間で整合性を作ることに関するものです。Issue が開発に移る準備ができていること、そして作業が提供されたときに全員の期待に合致することを確実にするためのものです。

リファインメントプロセスの目標は次のとおりです:

- ステークホルダーやドメインエキスパートと協業すること。`~group::authorization` はしばしば他のチームが所有する製品の部分に変更を加えているからです。
- 質問や懸念事項を提起する。
- 実装プランを概説する。これはバックエンドの変更がフロントエンド作業のブロック解除に必要な場合に特に重要です。
- Issue が作業可能な状態であることを確認する。
- 大きな Issue を小さなタスクに分解する。これにより異なるエンジニアが取り組むことができます。
- Issue または個別のタスクに weight を割り当てる。

#### リファインメントはどのように実施されるか

- 私たちは AMER/APAC と EMEA/AMER に優しい時間帯をローテーションする週次ミーティングを開催します。出席は任意です。カレンダーはチームメンバーが毎週リファインメントに取り組むためのリマインダーとして機能します。これらのミーティングは、エンジニアが直面している他の進行中の Issue について率直な議論を促進することもできます。
- これらのミーティングの目的は、[workflow::refinement](https://gitlab.com/groups/gitlab-org/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=group%3A%3Aauthorization&label_name%5B%5D=workflow%3A%3Arefinement&first_page_size=20) ラベルが割り当てられている Issue をリファインすることです。
- Issue にさらなる調査が必要な場合、エンジニアはミーティング外でより多くの調査を実施できます。その後のミーティングで、よりリファインされた Issue を見積もることができます。
- エンジニアが非同期でリファインメントを実施する場合、以下のステップに従い、調査結果 (および提案がある場合はそれら) をまとめ、他のチームメンバーや関係するカウンターパートにメンションできます。
- オープンな議論の中で合意に達することが難しい、または明らかな誤解がある場合は、同期ミーティングのアジェンダとして追加できます。エンジニアは、専門知識のために役立つかもしれない人をオプションで含めることもできます。

#### ステップ

- Issue が完全に理解されていることを確認する。
- Issue の説明が完全であるかチェックする。
  - 必要なデザインがあるか?
  - 期待される機能性は明確に表現されているか?
  - 依存関係はあるか? 他のチームや他の Issue に?
- Issue が完全でない場合:
  - `@NellyVahab` (PM) または `@jpr0c` (EM) にタグを付けて、項目が完全にグルーミングできないことを知らせる。彼らは Issue を完成させ、何が必要かを概説するのに役立つことができる。
- Issue をタスクに分解する。
  - Issue がフロントエンドとバックエンドの両方の作業を必要とする場合、異なるタスクを作成して作業を分割できる。これにより、異なるエンジニアが Issue で協業することができる。
  - 新しいまたは複雑な機能の場合、最初のイテレーションで提供できるものと、将来のイテレーションで提供できるものを指定する。
- 実装プランを概説する
  - Issue がフロントエンドとバックエンドの両方の作業を必要とする場合、Vue コンポーネントでの計算を最小限にするために API エンドポイントのリクエスト/レスポンス構造を定義する。
  - 実装プランを把握するためにさらなる調査が必要な場合、スパイク Issue を作成できる。スパイクからの調査結果が得られたら、Issue に戻ることができる。
- [T シャツサイジングアプローチ](../../../../business-technology/data-team/how-we-work/planning/#t-shirt-sizing-approach) を使って weight を割り当て、`~workflow::scheduling` ラベルを設定し、`@jpr0c` と `@NellyVahab` にタグを付ける。Issue がタスクに分解されている場合、各タスクに weight を割り当てることができる。
- 次のステップが明確になったら、Issue の説明を更新し、自分自身のアサインを解除する。

## リンクとリソース {#links}

- 私たちの Slack チャンネル
  - SSCS:Authorization [#g_sscs_authorization](https://gitlab.slack.com/archives/C0610LVCSAY)
