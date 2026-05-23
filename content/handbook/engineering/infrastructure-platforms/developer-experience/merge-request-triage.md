---
title: 外部コミュニティからのマージリクエストトリアージ
description: "GitLab.com プロジェクトで広いコミュニティから開かれた新しいマージリクエストをトリアージするためのガイドライン"
upstream_path: /handbook/engineering/infrastructure-platforms/developer-experience/merge-request-triage/
upstream_sha: 6a459a3ca969603754a3b5133342edb804d3012c
translated_at: "2026-04-28T17:23:43Z"
translator: claude
stale: false
lastmod: "2026-03-06T09:57:12-06:00"
---

GitLab では、私たちのミッションは[すべての人が貢献できる](/handbook/company/mission/#mission)よう、あらゆる創造的な作業を読み取り専用から読み書き可能に変えることです。GitLab はコミュニティの貢献を高く評価しており、コミュニティのコード貢献を引き続き成長させたいと考えています。GitLab はコミュニティが [`gitlab-org` グループ](https://gitlab.com/gitlab-org)配下のプロジェクトおよび [`gitlab-com/www-gitlab-com` プロジェクト](https://gitlab.com/gitlab-com/www-gitlab-com)に対して Issue を提出し、マージリクエストを開くことを奨励しています。これらの貢献は価値あるものであり、できる限り効果的に処理する必要があります。その中心となるのがトリアージ — タイプと製品グループによる分類プロセスです。

GitLab チームメンバーであれば誰でもマージリクエストをトリアージできます。未トリアージのマージリクエスト数を少なく保つことはメンテナビリティに不可欠であり、私たち全員の共同責任です。他の業務と並行していくつかのマージリクエストをトリアージしたり、定期的に時間をスケジュールすることを検討してください。

新たに受け取るコミュニティからのマージリクエストのトリアージはいくつかの部門に分かれています。Quality 部門はトリアージの自動化を維持し、[マージリクエストコーチ](/handbook/marketing/developer-relations/engineering/merge-request-coach-lifecycle)が部分的なマージリクエストトリアージを担い、最終的にトリアージの自動化がトリアージプロセスを完了させます。さらに、[Developer Relations Engineering](/handbook/marketing/developer-relations/engineering/)がコミュニティコラボレーションの取り組みを推進し、GitLab への貢献に対してサポートと認識を受けられるようコミュニティと連携します。

## `gitlab-org` グループのマージリクエストトリアージ

### トリアージレベル（`gitlab-org`）

3 つのトリアージレベルを定義しています。

#### 初期トリアージ（`gitlab-org`）

マージリクエストは以下の条件を満たすと初期トリアージ済みとみなされます:

- `~"Community contribution"` ラベルが適用されている
- プロセスの詳細とともに [`@gitlab-bot`](https://gitlab.com/gitlab-bot) による「ありがとう」メッセージが投稿されている

初期トリアージは [Developer Relations Engineering チーム](/handbook/marketing/developer-relations/engineering/)によって[コミュニティ貢献お礼メモ](/handbook/engineering/infrastructure-platforms/developer-experience/triage-operations/#community-contribution-thank-you-note)のリアクティブトリアージ自動化を通じて自動化されています。

#### 部分トリアージ（`gitlab-org`）

マージリクエストは以下の条件を満たすと部分的にトリアージ済みとみなされます:

- [タイプラベル](https://docs.gitlab.com/ee/development/labels/index.html#type-labels)が適用されている。
  - （`~"type::bug"` と `~"Deferred UX"` の場合）[重大度ラベル](https://docs.gitlab.com/ee/development/labels/index.html#severity-labels)が適用されている。
- [ステージラベル](https://docs.gitlab.com/ee/development/labels/index.html#stage-labels)が適用されている。
- [グループラベル](https://docs.gitlab.com/ee/development/labels/index.html#group-labels)が適用されている（例: `~"group:editor"`）。グループラベルが存在しない場合はステージラベルで十分です。

部分トリアージは[マージリクエストコーチ](/handbook/marketing/developer-relations/engineering/merge-request-coach-lifecycle)によって[新しく作成されたコミュニティマージリクエスト](/handbook/engineering/infrastructure-platforms/developer-experience/triage-operations/#newly-created-community-merge-requests)トリアージレポートを通じて完了されます。

Issue に関連する MR の場合、以下のクイックアクションを使用して適切なメタデータを確認することで部分トリアージを完了できます:

```shell
/copy_metadata <issue link>
```

#### 完全トリアージ（`gitlab-org`）

完全トリアージはコミュニティのマージリクエストの状態に応じて 3 つのサブカテゴリに分かれています。

##### オープンなマージリクエストの完全トリアージ（`gitlab-org`）

マージリクエストは以下の条件を満たすと完全トリアージ済みとみなされます:

- `workflow::ready for review` ラベルが付いている
- レビュアーが割り当てられている

##### マージ済みマージリクエストの完全トリアージ（`gitlab-org`）

マージリクエストは以下の条件を満たすと完全トリアージ済みとみなされます:

- `~"Community contribution"` ラベルが付いてマージされたマージリクエストにマイルストーンが設定されている。

このトリアージプロセスは [Developer Relations Engineering チーム](/handbook/marketing/developer-relations/engineering/)によって [Triage Operations のコミュニティマージリクエストへのマイルストーン追加](/handbook/engineering/infrastructure-platforms/developer-experience/triage-operations/#add-milestone-to-community-merge-requests)のスケジュールされたトリアージ自動化を通じて自動化されています。

### 非アクティブなマージリクエストのトリアージポリシー（`gitlab-org`）

非アクティブなマージリクエストポリシーは、GitLab チームが積極的なマージリクエストに取り組む時間を確保し、古いマージリクエストが劣化した状態に陥るのを防ぐために作成されました。これは GitLab チームメンバーがマージリクエストを前進させようとする 2 つのしきい値を設けることで実現しています。

Developer Relations Engineering チームメンバーは[コミュニティマージリクエストの注意が必要](/handbook/engineering/infrastructure-platforms/developer-experience/triage-operations#community-merge-requests-requiring-attention)トリアージレポートを通じて、最初のしきい値に達したマージリクエストを前進させようとします。

それが成功しない場合、2 番目のしきい値でエンジニアリングマネージャーが決断を下します。あなたの努力を大切にしています — そのため、マージリクエストをクローズするすべての決断は人間が行い、自動化されていません。

### 外部コミュニティからのマージリクエストトリアージ SLO（`gitlab-org`）

コミュニティの貢献は価値があり、コミュニティへの迅速なフィードバックとエンゲージメントの向上を確保するためにできる限り効果的に処理する必要があります。そのために以下の[サービスレベル目標（SLO）](https://en.wikipedia.org/wiki/Service-level_objective)を定義します:

| トリアージレベルまたは応答メトリクス | SLO |
| ------------ | ---------- |
| [初期トリアージ](#初期トリアージgitlab-org) | 2 時間（[自動化済み](/handbook/engineering/infrastructure-platforms/developer-experience/triage-operations/#community-contribution-thank-you-note)） |
| [部分トリアージ](#部分トリアージgitlab-org) | 7 日 |
| [マージ済みマージリクエストの完全トリアージ](#マージ済みマージリクエストの完全トリアージgitlab-org) | 1 日（[`gitlab-org/gitlab` では自動化済み](/handbook/engineering/infrastructure-platforms/developer-experience/triage-operations/#add-milestone-to-community-merge-requests)） |
| [レビュアー割り当てまでの時間](#オープンなマージリクエストの完全トリアージgitlab-org) | 2 時間（[自動化済み](/handbook/engineering/infrastructure-platforms/developer-experience/triage-operations/#automated-review-request)） |

SLO が満たされない場合は [Developer Relations Engineering チーム](/handbook/marketing/developer-relations/engineering/)に連絡してください。

## `gitlab-com/www-gitlab-com` プロジェクトのマージリクエストトリアージ

### トリアージレベル（`gitlab-com/www-gitlab-com`）

GitLab ウェブサイトは GitLab.org とは異なるチームが所有・管理しているため、追加のトリアージプロセスを定義する必要があります。

#### 初期トリアージ（`gitlab-com/www-gitlab-com`）

上記の `gitlab-org` グループと同じです。

#### 完全トリアージ（`gitlab-com/www-gitlab-com`）

完全トリアージはコミュニティのマージリクエストの状態に応じて 3 つのサブカテゴリに分かれています。

##### オープンなマージリクエストの完全トリアージ（`gitlab-com/www-gitlab-com`）

マージリクエストは以下の条件を満たすと完全トリアージ済みとみなされます:

- [GitLab ウェブサイトコミュニティチーム](https://gitlab.com/gitlab-com-community)のメンバーによってレビュアーが割り当てられている。
- レビュアーによってレビューされている。

通常、レビュアーはマージリクエストが更新したページの[コードオーナー](https://docs.gitlab.com/ee/user/project/codeowners/)です。コードオーナーが割り当てられていない場合、トリアージャーはそのページが属する関連チームに連絡してレビュアーを特定します。

##### アイドル状態のマージリクエストの完全トリアージ（`gitlab-com/www-gitlab-com`）

マージリクエストは以下の条件を満たすと完全トリアージ済みとみなされます:

- [マージリクエストのクローズポリシー](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#merge-request-ownership)に従ってクローズされている。

このトリアージプロセスは [GitLab ウェブサイトコミュニティチーム](https://gitlab.com/gitlab-com-community)のメンバーまたは関連する[コードオーナー](https://docs.gitlab.com/ee/user/project/codeowners/)によってケースバイケースで手動で行われます。

### 外部コミュニティからのマージリクエストトリアージ SLO（`gitlab-com/www-gitlab-com`）

コミュニティの貢献は価値があり、コミュニティへの迅速なフィードバックとエンゲージメントの向上を確保するためにできる限り効果的に処理する必要があります。そのために以下の[サービスレベル目標（SLO）](https://en.wikipedia.org/wiki/Service-level_objective)を定義します:

| トリアージレベル | トリアージ SLO |
|------------- | ---------- |
| [初期トリアージ](#初期トリアージgitlab-comwww-gitlab-com) | 2 時間（[自動化済み](/handbook/engineering/infrastructure-platforms/developer-experience/triage-operations/#community-contribution-thank-you-note)） |
| [レビュアー割り当てまでの時間](#オープンなマージリクエストの完全トリアージgitlab-comwww-gitlab-com) | 7 日（[自動化済み](/handbook/engineering/infrastructure-platforms/developer-experience/triage-operations/#automated-review-request)） |
| [アイドル状態のマージリクエストの完全トリアージ](#アイドル状態のマージリクエストの完全トリアージgitlab-comwww-gitlab-com) | 7 日 |

SLO が満たされない場合は、マージリクエストで [`@gitlab-com-community`](https://gitlab.com/gitlab-com-community) に連絡してください。
