---
title: "Authorization グループ"
upstream_path: /handbook/engineering/development/sec/software-supply-chain-security/authorization/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T08:31:27Z"
translator: claude
stale: false
---

## プランニング

私たちの [プランニング Issue](https://gitlab.com/gitlab-org/software-supply-chain-security/authorization/team-tasks/-/issues?sort=created_date&state=opened&label_name%5B%5D=Planning%20Issue&first_page_size=50) は、現在取り組んでいること、および次に取り組むことの SSOT（信頼できる唯一の情報源）です。`workflow` の観点からこれらを確認するための [Issue ボード](https://gitlab.com/gitlab-org/gitlab/-/boards/9750781?milestone_title=Started&label_name[]=group%3A%3Aauthorization) もあります。Issue リストを維持するために、リーダーシップ（EM+PM）がリストのトリアージを管理します。

### ワークフロー {#workflow}

| ラベル | 定義 |
| ---   | ---        |
| `~workflow::ready for development` | エンジニアが着手可能な状態です。`~priority::1` が最高優先度です。 |
| `~workflow::scheduling` または `~workflow` ラベルなし | エンジニアが着手すべきではなく、リーダーシップによるトリアージが必要です。リーダーシップが近い将来にこの作業を実施する意図がない場合は、~Backlog マイルストーンを割り当てます。 |
| `~workflow::refinement` | エンジニアリングによるさらなる調査が必要です。リファインメント後、Issue にはウェイトが割り当てられ、ワークフローラベルは `~workflow::scheduling` に更新されます。 |
| `~workflow::solution validation` | 作業を開始する前にプロダクトのインプットが必要です。 |
| `~workflow::design` | 作業を進める前にデザインのインプットが必要か、または UX が積極的に取り組んでいます。 |

## 週次非同期 Issue 更新 {#weekly-async-issue-updates}

毎週末、各エンジニアは以下のテンプレートを使用して割り当てられた Issue にコメントすることで、取り組んでいるエピック/Issue について簡単な非同期更新を提供することが期待されています:

```markdown

### 非同期 Issue 更新

* 現在の状況:
<!--- 現在の状況の簡単な概要を一文で入力してください -->

* このマイルストーンで出荷: <!-- 自信なし | 少し自信あり | 非常に自信あり -->

* スコープ削減の機会: <!-- なし | あり、... -->

/health_status <!-- on_track | needs_attention | at_risk -->
/label <!-- ~"workflow::In dev" | ~"workflow::In review" | ~"workflow::verification" |~"workflow::blocked" -->

<!-- このコメントに :triangular_flag_on_post: 絵文字を適用してください。詳細は https://gitlab.com/jayswain/automated-reporting を参照してください -->
```

これにより、チームの非同期コラボレーションを促進し、コミュニティや他のチームメンバーが積極的に取り組んでいる Issue の進捗を把握できるようにします。

## グループメンバー

[Authorization グループ](https://gitlab.com/gitlab-org/software-supply-chain-security/authorization) は、GitLab で `@gitlab-org/software-supply-chain-security/authorization` とメンションできます。

以下の方々がグループの永続的なメンバーです:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/development/sec/software-supply-chain-security/authorization/" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## チーム Google ドライブ

Authorization グループのドキュメントは[こちら](https://drive.google.com/drive/folders/1XGKbOM46ujoZbv9HMWPtx1x2Mp4Ku3bg)に保存されています。

## チームミーティング

私たちのグループは、非同期の議論に追加の明確さと整合性を得るために同期ミーティングを開催します。チームメンバーが複数のタイムゾーンに分散しており、定められた時間に参加できないことも多いため、すべてのミーティングを [録画](/handbook/tools-and-tips/zoom/) することを目指しています。

AMER/APAC フレンドリーと EMEA/AMER フレンドリーの時間帯を交互に使用した週次チーム同期ミーティングがあります: 火曜日 20:00 UTC と水曜日 14:30 UTC。
関連する [録画](https://drive.google.com/drive/folders/1_QjpV0TCELapJW2sXzTOViUUWXQyVj3r) と [ドキュメント](https://docs.google.com/document/d/1NGfuCaCNtyaN1qQwARhSh9cCNZkCVG-VisdK5GyP_N4/edit?usp=sharing)

## PTO のプランニング

私たちは [休暇を取るためのエンジニアリングプロセス](/handbook/engineering/#taking-time-off) と [GitLab チームメンバーの休暇ガイド](/handbook/people-group/time-off-and-absence/time-off-types/) に従います。

## グループ共有カレンダー

[Authorization グループ共有カレンダー](https://calendar.google.com/calendar/embed?src=c_97507fb9234d07c2561c1b1ccc98cab1462bf0364214f2cc4917eee8a86b7cdd%40group.calendar.google.com&ctz=America%2FDetroit) は、PTO イベントをチーム全員に見えるようにするために使用されます。このカレンダーを購読して、AuthZ エンジニアに関連するイベント（休暇など）を確認してください。

### Time Off by Deel のエントリを共有カレンダーに同期する

カレンダーを Time Off by Deel に追加する手順:

1. Slack を開きます
1. Slack のアプリ「Time Off by Deel」を開きます
1. 「Home」タブに移動します
1. 「Your Events」のドロップダウンをクリックし、「Calendar Sync」を選択します
1. 「Additional calendars to include?」の下の「Add calendar」をクリックします
1. 以下のカレンダー ID を追加します: `c_97507fb9234d07c2561c1b1ccc98cab1462bf0364214f2cc4917eee8a86b7cdd@group.calendar.google.com`

完了です！PTO イベントは Authorization グループ共有カレンダーに同期されます。

## コラボレーション

### コードレビュー

このグループは [広範な影響](/handbook/engineering/development/#reducing-the-impact-of-far-reaching-work) を持つアプリケーションのコンポーネントで作業するため、本番インシデントのリスクを軽減するために以下の追加手順を踏みます:

1. チームのマージリクエストは、チーム全体でより多くの組織的知識を構築するために、まず別の Authorization チームメンバーにレビューを割り当てます。このレビューは [レビュアー](https://docs.gitlab.com/ee/development/code_review.html#the-responsibility-of-the-reviewer) として行います。Authorization の承認は Authorization レビュアーのロールに対応する承認としてカウントされます。例えば、Authorization からのバックエンドレビューはバックエンドレビューとしてカウントされます。承認後、Authorization レビュアーは適切な [メンテナーカテゴリ](https://docs.gitlab.com/ee/development/code_review.html#approval-guidelines) からメンテナーにレビューを依頼します。
1. Authorization 関連のマージリクエスト（カスタムロールとポリシー関連コードに触れるもの）には [Authorization エンジニア](https://gitlab.com/groups/gitlab-org/govern/authorization/approvers/-/group_members?with_inherited_permissions=exclude) によるレビューが必要です。これは GitLab の `CODEOWNERS` フィーチャーを使用して管理されています。

### エンジニアリングリファインメント

#### 概要

エンジニアリングリファインメントは、すべてのチームメンバー間で整合性を生み出すことです。Issue が開発に移行する準備ができており、作業が提供された際に全員の期待に合致することを確実にするためです。

リファインメントプロセスの目標は以下のとおりです:

- ステークホルダーやドメインエキスパートとコラボレーションします。`~group::authorization` が他のチームが所有する製品の部分に変更を加えることが多いためです。
- 質問や懸念事項を提起します。
- 実装計画を概説します。バックエンドの変更がフロントエンドの作業をアンブロックする必要がある場合は特に重要です。
- Issue が作業可能な状態であることを確実にします。
- 大きな Issue をより小さなタスクに分解し、異なるエンジニアが着手できるようにします。
- Issue または個別のタスクにウェイトを割り当てます。

#### リファインメントの実施方法

- AMER/APAC フレンドリーと EMEA/AMER フレンドリーの時間帯を交互に使用した週次ミーティングを開催します。参加は任意です。カレンダーは、チームメンバーが毎週リファインメントに取り組むリマインダーとして機能します。これらのミーティングは、エンジニアが直面している他の進行中の Issue に関するオープンな議論も促進できます。
- これらのミーティングの目的は、[workflow::refinement](https://gitlab.com/groups/gitlab-org/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=group%3A%3Aauthorization&label_name%5B%5D=workflow%3A%3Arefinement&first_page_size=20) ラベルが割り当てられた Issue をリファインすることです。
- Issue がさらなる調査を必要とする場合、エンジニアはミーティング外でより多くの調査を行うことができます。後のミーティングで、より詳細にリファインされた Issue が見積もられます。
- エンジニアが非同期でリファインメントを行う場合は、以下に記載の手順に従い、発見事項（および提案がある場合はその提案）を要約し、他のチームメンバーや関係するカウンターパートにメンションします。
- オープンな議論で合意に達する可能性が低い、または明確な誤解がある場合は、同期ミーティングのアジェンダに追加できます。エンジニアは専門知識があって助けられる可能性のある人をオプションで追加招待することもできます。

#### 手順

- Issue を完全に理解していることを確認します。
- 完全性のために Issue の説明を確認します。
  - 必要なデザインがありますか？
  - 期待される機能が明確に表現されていますか？
  - 依存関係はありますか？他のチームや他の Issue に？
- Issue が完全でない場合:
  - `@jrandazzo`（PM）または `@ajaythomasinc`（EM）にタグ付けして、アイテムが完全にグルーミングできないことを知らせます。Issue の完成と何が必要かの概説を支援できます。
- Issue をタスクに分解します。
  - Issue がフロントエンドとバックエンドの両方の作業を必要とする場合は、異なるタスクを作成してその作業を分担できます。これにより異なるエンジニアが Issue に協力して取り組めます。
  - 新しいまたは複雑なフィーチャーの場合は、最初のイテレーションで提供できるもの、および将来のイテレーションで提供できるものを指定します。
- 実装計画を概説します
  - Issue がフロントエンドとバックエンドの両方の作業を必要とする場合は、Vue コンポーネントの計算が最小限になるように API エンドポイントのリクエスト/レスポンス構造を定義します。
  - 実装計画を見つけるためにさらなる調査が必要な場合は、スパイク Issue を作成できます。スパイクの結果が分かったら Issue に戻れます。
- [T シャツサイジングアプローチ](../../../../business-technology/data-team/how-we-work/planning/#t-shirt-sizing-approach) を使用してウェイトを割り当て、`~workflow::scheduling` ラベルを設定して `@ajaythomasinc` と `@jrandazzo` にタグ付けします。Issue がタスクに分解されている場合は、各タスクにウェイトを割り当てることができます。
- 次のステップが明確になったら、Issue の説明を更新し、自分自身のアサインを解除します。

## リンクとリソース {#links}

- Slack チャンネル
  - SSCS:Authorization [#g_sscs_authorization](https://gitlab.slack.com/archives/C0610LVCSAY)
