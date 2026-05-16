---
title: "デベロッパーアドボケイトチームのワークフロー"
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/workflow/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-21T07:39:47-08:00"
---


## チームのワークフロー

デベロッパーアドボケイトチームのワークフローページへようこそ。チームがどのように機能し、チームと協力する方法を学びましょう。私たちは主に [Developer Advocate Meta issue tracker](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues) を使用しています。チームラベル `developer-advocacy` と[その他のラベル](https://gitlab.com/groups/gitlab-com/-/labels?subscribed=&sort=relevance&search=developer+advocacy)を所有しており、これらは [gitlab-com](https://gitlab.com/gitlab-com) グループレベルにあります。私たちのチームが追跡するために、必要に応じてこのグループ配下の任意の Issue にラベルを追加できます。

### 概要ビデオ

[ワークフロー概要ビデオ](https://www.youtube.com/watch?v=FKw0uGOmcks)では、ワークフローのさまざまなコンポーネントを詳細に紹介しています。ワークフローで表示される機密 Issue があるため、ビデオは社内のみです。ビデオの特定の章にジャンプしたい場合は、以下のリンクを参照してください。

ビデオの章:

- [はじめに](https://www.youtube.com/watch?v=FKw0uGOmcks&t=0s)
- [Issue の作成](https://www.youtube.com/watch?v=FKw0uGOmcks&t=50s)
- [ラベル概要](https://www.youtube.com/watch?v=FKw0uGOmcks&t=750s)
- [Issue ボード](https://www.youtube.com/watch?v=FKw0uGOmcks&t=1420s)
- [Issue トリアージと DevRel-Bot ルール](https://www.youtube.com/watch?v=FKw0uGOmcks&t=1860s)

### デベロッパーアドボカシーチームの働き方

チームのすべてのアクティビティは、[デベロッパーアドボカシー Meta プロジェクト](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues)、またはチームが連携する他のチームの Issue tracker で Issue として追跡されます。アクティビティは、コンテンツ、イベント、その他のアクティビティの 3 つのカテゴリに分類されます。Issue の作成を容易にするため、チームは関連するプレースホルダとラベルが事前入力された Issue テンプレートを使用しています。Issue テンプレートとそのショートリンクへの直接リンクは次のとおりです。

| アクティビティタイプ | Issue テンプレート | ショートリンク |
|---------------|----------------|-----------|
| コンテンツ | [テンプレート](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/new?issuable_template=content) | `https://go.gitlab.com/new-content-issue` |
| イベント | [テンプレート](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/new?issuable_template=events) | `https://go.gitlab.com/new-event-issue` |
| リリースエバンジェリズム | [テンプレート](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/new?issuable_template=release-evangelism) | `https://go.gitlab.com/new-release-issue` |
| その他 | [テンプレート](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/new?issuable_template=other-activities) | `https://go.gitlab.com/new-activity-issue` |

### Issue ボード

Issue ボードはデベロッパーアドボカシーチームのアクティビティに関する単一の信頼できる情報源です。デベロッパーアドボケイトには、Issue ボードの列を期日順に並べておくことが求められます。これは、デベロッパーアドボカシーチームの作業を追跡するためにボードを使用するステークホルダーに役立ちます。

| Issue ボード |  ショートリンク |
|-------------|-----------|
| [担当者別の Issue](https://gitlab.com/groups/gitlab-com/-/boards/7577841?label_name[]=developer-advocacy) | `https://go.gitlab.com/da-assignees` |
| [四半期別コンテンツ](https://gitlab.com/groups/gitlab-com/-/boards/7577857?label_name[]=DA-Type%3A%3AContent&label_name[]=developer-advocacy) | `https://go.gitlab.com/da-content-quarter` |
| [タイプ別コンテンツ](https://gitlab.com/groups/gitlab-com/-/boards/7577822?label_name[]=DA-Type%3A%3AContent&label_name[]=developer-advocacy) | `https://go.gitlab.com/da-content-type` |
| [イベント](https://gitlab.com/groups/gitlab-com/-/boards/7577874?label_name[]=developer-advocacy&label_name[]=DA-Type%3A%3AEvents) | `https://go.gitlab.com/da-events` |
| [Issue トリアージボード](https://gitlab.com/groups/gitlab-com/-/boards/7669248?label_name[]=DA-Bot%3A%3ATriage) | `https://go.gitlab.com/da-issue-triage` |

注: このページのすべてのショートリンクは [https://campaign-manager.gitlab.com/campaigns/view/114](https://campaign-manager.gitlab.com/campaigns/view/114) で管理できます。

### デベロッパーアドボケイトチームとの協力方法

会話を始めるには、Issue を開くのが最良の方法です。`developer-advocacy` ラベルは `gitlab-com` グループレベルにあり、グループ構造内の任意の Issue またはマージリクエストに追加できます。

`developer-advocacy` ラベルは必須ですが、その他のラベルはオプションです。[DevRel-Bot](https://gitlab.com/gitlab-da/projects/devrel-bot) またはチームメンバーがトリアージを行い、必要なラベルを追加します。コメントのノイズを減らすため、`DA-Type::Consulting` と関連する `Consulting` チームラベルは自分で追加してください。

[デベロッパーアドボケイトリクエスト Issue テンプレート](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/new?issuable_template=developer-advocate-request)を使ってリクエストを送信できます。リクエストをトリアージするために必要な情報を収集するためのガイドが提供されています。

### CFP

Call-for-Papers (CFP) のワークフローは、[CFP ハンドブック](/handbook/marketing/developer-relations/developer-advocacy/cfps/)で整理されています。

## ラベル

デベロッパーアドボケイトチームのワークフローはラベルでサポートされており、Issue のタイプ、ステータス、その他の関連情報を判断するのに役立ちます。チームの主要なラベルは `developer-advocacy` です。チームが所有する、参加する、または認識する必要があるすべての Issue は、`developer-advocacy` でタグ付けする必要があります。その他のラベルは以下のとおりです:

### 一般ラベル

| **CFP ラベル** | **説明** |
| ---------- | ----------- |
| `developer-advocacy` | デベロッパーアドボカシーチームに関連する Issue にラベル付けするために使用 |
| `DevRel-Influenced` | DevRel、特にデベロッパーアドボカシーの影響を受けた Issue にラベル付けするために使用 |
| `DA-Ops` | デベロッパーアドボカシーの `Ops in DevOps` テーマに関連する Issue にラベル付け |
| `DA-Dev` | デベロッパーアドボカシーの `Dev in DevOps` テーマに関連する Issue にラベル付け |
| `DA-k8s` | デベロッパーアドボカシーの `Kubernetes` テーマに関連する Issue にラベル付け |

### Issue 管理

#### 一般ワークフローラベル

| ラベル | 用途 |
|-------|-----|
|`DA-Status::ToDo` | 将来計画されている Issue |
|`DA-Status::Doing` | チームが現在取り組んでいる Issue |
|`DA-Status::Done` | 完了した Issue |
|`DA-Status::OnHold` | 何らかの理由で再開保留中の Issue |
|`DA-Status::Cancelled` | チームまたはコンサルティングリクエストの場合は依頼者によってキャンセルされた Issue |
|`DA-Status::FYI` | チームが認識する必要があるがアクションは不要の Issue |

デフォルトのフローは ToDo -> Doing -> (OnHold) -> Done です。FYI の Issue は別のチームが所有し、別のワークフローを通過するため、どのワークフローも通りません。

#### コンテンツワークフローラベル

コンテンツ固有のワークフローには次のラベルを使用します:

| ラベル | 用途 |
|-------|---------|
| `DA-Content::New` | 新しく作成されたコンテンツ Issue。コンテンツ Issue [テンプレート](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/new?issuable_template=content)が使用されたときに自動的に追加されます。DevRel-Bot はこのラベルが検出されると、Issue の一般ワークフローステータスを `DA-Status::ToDo` に設定します |
| `DA-Content::In-Progress` | コンテンツが進行中の Issue。DevRel-Bot はこのラベルが設定された Issue の一般ワークフローステータスを `DA-Status::Doing` に設定します。このラベルは、現在のコンテンツワークフローラベルがない既存のコンテンツ Issue に自動的に適用されます。 |
| `DA-Content::In-Review` | コンテンツが現在レビュー中、一般ワークフローステータスは `DA-Status::Doing` のまま |
| `DA-Content::Awaiting-Publication` | コンテンツが完了し、公開のためにキューに入れられている、一般ワークフローステータスは `DA-Status::OnHold` に移行 |
| `DA-Content::Done-Metrics-Pending` | コンテンツが完了して公開されたが、メトリクスの収集を待機中、一般ワークフローステータスは `DA-Status::OnHold` に移行、メトリクスの収集が完了したら、コンテンツ作者は Issue をクローズする必要があります。DevRel-bot はラベルを `DA-Content::Published` に変更します |
| `DA-Content::Published` | コンテンツが完結、DevRel-bot はこのラベルが付いた Issue をクローズします |

#### Issue タイプ

これらのラベルは、Issue で文書化されたアクティビティのタイプを識別するのに役立ちます。これは、時間がどこで費やされ、適切な DRI を割り当てるかをチームが理解するのに役立ちます。

| ラベル | 用途 |
|-------|-----|
| `DA-Type::Content` | コンテンツ作成のための Issue。任意のタイプのコンテンツが対象 |
| `DA-Type::Evangelist` | エバンジェリストプログラムのための Issue |
| `DA-Type::Experiment` | プロトタイプ、実証実験、デモ、探索的イニシアチブを含む実験的・R&D 作業のための Issue |
| `DA-Type::Process` | チームの運用アクティビティのための Issue |
| `DA-Type::Response` | コミュニティレスポンスアクティビティのための Issue |
| `DA-Type::Consulting` | 他のチームから依頼された Issue。詳細は以下 |
| `DA-Type::Events` | チームが追跡または参加するイベントのための Issue |
| `DA-Type::Response` | コミュニティレスポンスアクティビティに使用される Issue |
| `DA-Type::analysts` | アナリスト向けの作業 |

#### コンテンツタイプ

`DA-Type::Content` が選択された場合、コンテンツのタイプを識別する `DA-Type-Content` ラベルが必要です。

| ラベル |
|-------|
| `DA-Type-Content::adoption` |
| `DA-Type-Content::blog` |
| `DA-Type-Content::cicd-component` |
| `DA-Type-Content::demo` |
| `DA-Type-Content::documentation` |
| `DA-Type-Content::event` |
| `DA-Type-Content::keynote` |
| `DA-Type-Content::narrative` |
| `DA-Type-Content::product-tour` |
| `DA-Type-Content::quickstart` |
| `DA-Type-Content::talk` |
| `DA-Type-Content::tech-webinar` |
| `DA-Type-Content::tutorial` |

#### コンサルティングラベル

他のチームからデベロッパーアドボケイトに対する、所有、参加、またはアクティビティに協力するというリクエストはコンサルティングとして分類され、これらのリクエストは通常、依頼するチームに基づいてラベル付けされます。これらは、デベロッパーアドボケイトチームが頻繁に協力する社内のチームです。彼らのラベルは次のとおりです:

- `DA-Consulting::Alliances`
- `DA-Consulting::CorpComms`
- `DA-Consulting::CorpEvents`
- `DA-Consulting::Community`
- `DA-Consulting::Engineering`
- `DA-Consulting::FieldMktg`
- `DA-Consulting::GrowthMktg`
- `DA-Consulting::Product`
- `DA-Consulting::Sales`

これらのラベルは、Issue が `DA-Issue-Type::External` と `DA-Type::Consulting` を持つ場合、チームラベル `developer-advocacy` と `DA-Status` スコープラベルとは別に必要です。あなたのチームがリストにない場合でも、リクエストを送信でき、適切にトリアージされます

コンサルティング用に作成された Issue は、チームの四半期予算に対してカウントされます。詳細は[リクエスト予算セクション](/handbook/marketing/developer-relations/developer-advocacy/workflow/#request-budgets)で学べます。

#### リージョンベースラベル

これらのラベルは、Issue またはアクティビティに関連付けられたリージョンを識別するために使用されます:

| ラベル | 用途 |
|-------|-----|
| `Region-AMER` | 南北アメリカ地域に関連するアクティビティ |
| `Region-APAC` | アジア太平洋地域に関連するアクティビティ |
| `Region-EMEA`  | ヨーロッパ、中東、アフリカ地域に関連するアクティビティ |
| `Region-LATAM` | ラテンアメリカに関連するアクティビティ |
| `Region-Global` | リージョン固有でないか、複数のリージョンにまたがるアクティビティ |

#### ボットラベル

これらのラベルは、トリアージ目的で [DA-Bot](/handbook/marketing/developer-relations/developer-advocacy/projects/#developer-advocacy-bot) によって自動的に割り当てられます。

| ラベル | 用途 |
|-------|-----|
| `DA-Bot::Auto` | DA-Bot が自動的に作成した Issue で、通常は作成から 2 週間後にクローズされます |
| `DA-Bot::Hold` | Issue は現在保留中で、Hold ステータスにあまりに長くいる場合を除き、DA-Bot によってトリアージされるべきではありません |
| `DA-Bot::Skip` | このラベルがある Issue に対して DA-Bot は何のアクションも実行すべきではありません |
| `DA-Bot::Triage` | Issue がしばらく沈黙しており、トリアージが必要 |
| `DA-Due::AddDate` | Issue に期日が必要 |
| `DA-Due::N/A` | チームが Issue を所有していないか、期日が適用できないため、期日は不要 |
| `DA-Due::Past` | Issue が期日を過ぎている |
| `DA-Due::Soon` | Issue の期日が近い |

#### CFP ラベル

これらのラベルは、[CFP 提出](/handbook/marketing/developer-relations/developer-advocacy/cfps/)のワークフローを追跡するために使用されます。

| ラベル | 用途 |
|-------|-----|
| `CFP` | CFP ラベルを識別、これは必要 |
| `CFP::Upcoming` | まもなくオープンする CFP を識別 |
| `CFP::Open` | オープンな CFP を識別 |
| `CFP::Closed` | クローズされた CFP を識別 |
| `CFP::Cancelled` | キャンセルされた CFP を識別 |
| `CFP::Submitted` | CFP に対して提出が行われたことを識別 |
| `CFP::Accepted` | CFP に対して提出が受理されたかどうかを識別 |
| `CFP-EDU` | Education チームに関連する CFP を識別 |
| `CFP-OSS` | オープンソースチームに関連する CFP を識別 |
| `CFP-Submitted::{0..7}` | メトリクスの目的で行われた提出数を記録するために使用 |
| `CFP-Accepted::{0..7}` | メトリクスの目的で受理数を記録するために使用 |

#### トリアージラベル

これらのラベルは、レビューが必要な Issue を識別するために DevRel ボットによって使用されます。

| ラベル | 用途 |
|-------|-----|
| `DA-Triage::no-due-date` | Issue に期日がない |
| `DA-Triage::past-due-date` | Issue が期日を過ぎている |
| `DA-Triage::no-issue-type` | Issue に DA-Type ラベルがない |
| `DA-Triage::done-not-closed` | `DA-Status::Done` ラベルがあるが Issue がまだオープン |
| `DA-Triage::onhold-too-long` | Issue に `DA-Bot::Hold` ラベルがあり、過去 90 日間更新されていない |
| `DA-Triage::no-update-60days` | Issue が過去 60 日間 (最後のコメントから 60 日) 更新されていない |
| `DA-Triage::no-consulting-team` | Issue に `DA-Type::Consulting` ラベルがあるがコンサルティングチームラベルがない |
| `DA-Triage::cfp-due-submission` | CFP Issue に `CFP::Open` ラベルがあり、提出期日を過ぎている |
| `DA-Triage::cfp-due-notification` | CFP Issue に `CFP::Submitted` ラベルがあり、通知期日を過ぎている |
| `DA-Triage::cfp-due-presentation` | CFP Issue に `CFP::Accepted` ラベルがあり、プレゼンテーション期日を過ぎている |

#### その他のラベル

| ラベル | 用途 |
|-------|-----|
| `DA-Release-Evangelism` | リリースエバンジェリズム Issue、しばしば DA-Bot により自動作成・クローズされる |
| `DA-Issue-Type::External` | 他のチームが作成した Issue |
| `DA-Issue-Type::Internal` | DevEvangelism チームによって作成・所有される Issue |

### Issue トリアージ

[DevRel-Bot](https://gitlab.com/gitlab-da/projects/devrel-bot) は、ラベルの適切で一貫した使用を確保するため、[GitLab Triage](https://gitlab.com/gitlab-org/ruby/gems/gitlab-triage) プロジェクトを使用しています。ボットはまた、ラベル使用に基づく Issue のトリアージにも役立ちます。ボットが現在使用しているポリシーは次のとおりです:

| ルール説明          | 条件     | アクション |
|---------------|---------------|---------|
| DA Meta プロジェクト外で DA チームメンバーが担当者である Issue (DevRel-Influenced) | 担当者に gitlab.com/gitlab-da グループのメンバーが含まれ、Issue は [developer-advocacy-meta](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta) プロジェクト外にあり、`developer-advocacy` ラベルがない | `developer-advocacy`、`DA-Bot::Skip`、`DevRel-Influenced` ラベルを追加 |
| DA チームメンバーによる Issue で developer-advocacy ラベルがない | Issue 作成者が gitlab.com/gitlab-da グループのメンバーで、`developer-advocacy` ラベルがない | `developer-advocacy` ラベルを追加 |
| DA-Type ラベルがない Issue | Issue に `DA-Type` ラベルがない | `DA-Bot::Triage` と `DA-Triage::no-issue-type` ラベルを追加 |
| DA-Type-Content ラベルがないコンテンツ Issue | Issue に `DA-Type::Content` ラベルがあるが `DA-Type-Content` ラベルがない | `DA-Bot::Triage` と `DA-Triage::no-content-type` ラベルを追加 |
| 期日がない | Issue に期日がない | `DA-Bot::Triage` と `DA-Triage::no-due-date` ラベルを追加 |
| 期日を過ぎている | Issue が期日を過ぎている | `DA-Bot::Triage` と `DA-Triage::past-due-date` ラベルを追加 |
| 保留中の Issue | Issue に `DA-Bot::Hold` ラベルがあり、過去 90 日間更新されていない | `DA-Bot::Triage` と `DA-Triage::onhold-too-long` ラベルを追加 |
| 更新されていない Issue | Issue が過去 60 日間 (最後のコメントから 60 日) 更新されていない | `DA-Bot::Triage` と `DA-Triage::no-update-60days` ラベルを追加 |
| コンサルティングチームがないコンサルティング Issue | Issue に `DA-Type::Consulting` ラベルがあるがコンサルティングチームラベルがない | `DA-Bot::Triage`、`DA-Bot::Hold`、`DA-Triage::no-consulting-team` ラベルを追加 |
| Issue が完了しているがオープン | Issue に `DA-Status::Done` ラベルがあるがまだオープン | `DA-Bot::Triage`、`DA-Bot::Hold`、`DA-Triage::done-not-closed` ラベルを追加 |
| 古い DA-Bot 作成 Issue をクローズ | Issue が 2 週間以上経過し、`DA-Bot::Auto` ラベルがある | Issue をクローズ |
| DA チームメンバーのリクエストタイプラベルがない | Issue 作成者が gitlab.com/gitlab-da グループのメンバーで、`developer-advocacy` ラベルがあり、`DA-Requester-Type::Internal` ラベルがない | `DA-Requester-Type::Internal` ラベルを追加 |
| 非 DA チームメンバーのリクエストタイプラベルがない | Issue 作成者が gitlab.com/gitlab-da グループのメンバーではなく、`developer-advocacy` ラベルがあり、`DA-Requester-Type::External` ラベルがない | `DA-Requester-Type::External` ラベルを追加 |
| 期日がない CFP Issue | Issue に `CFP` ラベルがあるが期日がない | `DA-Bot::Triage` と `DA-Triage::no-due-date` ラベルを追加 |
| CFP の提出期日を過ぎている | Issue に `CFP::Open` ラベルがあり、提出期日を過ぎている | `DA-Bot::Triage` と `DA-Triage::cfp-due-submission` ラベルを追加 |
| CFP の通知期日を過ぎている | Issue に `CFP::Submitted` ラベルがあり、通知期日を過ぎている | `DA-Bot::Triage` と `DA-Triage::cfp-due-notification` ラベルを追加 |
| CFP のプレゼンテーション期日を過ぎている | Issue に `CFP::Accepted` ラベルがあり、プレゼンテーション期日を過ぎている | `DA-Bot::Triage` と `DA-Triage::cfp-due-presentation` ラベルを追加 |

### CFP ワークフロー

CFP ワークフローは、上記で説明した [CFP ラベル](#cfp-labels)に基づいています。

```plantuml
start
: CFP, CFP::Upcoming;
: CFP, CFP::Open;
if (CFP submissions) then (yes)
    : CFP, CFP::Submitted, CFP-Submitted::{0..7};

    if (CFP is Accepted) then (yes)
        : CFP, CFP::Accepted, CFP-Accepted::{0..7};
    else (no)
        : CFP, CFP::Closed;
    endif;
elseif (No submissions) then (missed)
    : CFP, CFP::Closed;
else  (cancelled)
    : CFP, CFP::Cancelled;
endif
stop
```

[クイックアクション](https://docs.gitlab.com/ee/user/project/quick_actions.html)を使用した CFP ワークフローの例:

1. 提出を計画している、またはすでに提出した場合:
    1. 新しい [CFP Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/new?issuable_template=cfp)を作成します。
    2. Issue テンプレートはすでに `~"CFP" ~"CFP::Open"` ラベルを設定しています。
    3. 期日を CFP 提出期日に設定します。
2. 1 つのトークを提出した:
    1. ラベルを `~CFP-Submitted ~CFP-Submitted::1` に変更します
    2. 複数のトークを提出した場合は、`~CFP-Submitted::` スコープラベルを正しい数を反映するように調整します。
    3. Issue の `submissions` セクションを更新します。可視性のために Issue にコメントします。

    ```text
    /label ~CFP-Submitted ~CFP-Submitted::1
    ```

3. CFP がクローズされた後、`CFP::Closed` ラベルを設定し、期日を Issue にリストされている CFP 通知日に更新します。

    ```text
    /due <cfp notification date>
    ```

4. CFP の通知が来て、少なくとも 1 つのトークが受理された。
    1. ラベルを `~CFP-Accepted ~CFP-Accepted::1` に変更します
    2. 複数のトークが受理された場合は、`~CFP-Accepted::` スコープラベルを調整します。
    3. 可視性のために、トークタイトルを Issue にコメントします。
    4. 期日をイベント日に設定し、すべての登壇者が割り当てられていることを確認します。

    ```text
    /label ~CFP-Accepted ~CFP-Accepted::1
    ```

5. イベントが終わったら、フィードバックと結果で Issue を更新します。
    1. 既存のものがあれば、トークのビデオを [YouTube プレイリスト](/handbook/marketing/developer-relations/developer-advocacy/#youtube-playlist)に追加します。
    2. Issue を `DA-Status::Done` としてマークし、クローズします。

    ```text
    /label ~DA-Status::Done
    /close
    ```

トークが受理されなかった場合、上記の Issue をクローズするだけです。

CFP が提出なしでクローズされた場合、`CFP::Closed` ラベルを追加します。CFP の提出が計画されていたが、別の決定がなされた場合、`CFP::Cancelled` ラベルを追加します。

### リクエスト予算

バーンアウトを防ぎ、リクエストに適切に優先順位を付け、コミットしたリクエストを成功裏に提供できるよう、私たちのチームは社内のステークホルダーのために予算を作成しました。これらの予算は、チームメンバーが GitLab にとって最高優先度のニーズに対応できるよう、リクエストに優先順位を付けることを奨励しています。

これらのリクエストタイプは、次のカテゴリに分類されます:

1. イベントリクエスト
1. CFP リクエスト
1. コンテンツリクエスト

私たちの目標と OKR をサポートするチーム主導のコンテンツ作成や登壇機会、リリースサポート、Hacker News を含むソーシャルメディアモニタリングなど、進行中のアクティビティはチーム予算にカウントされません。

#### イベントリクエスト

イベントリクエストには、イベント参加 (例: 顧客ミーティングへの参加、イベントのスタッフ、ディナーやソーシャルイベントへの参加、ニュース用イベントのモニタリング) と、デモやプレゼンテーションなどのイベントでの登壇機会の両方が含まれます。

#### CFP (Call for Proposals) リクエスト

CFP リクエストには、デベロッパーアドボケイトにイベントやメディアの機会の提案を提出するよう依頼することや、オープン CFP に提出するチームメンバーをサポートすることが含まれます。

企業、フィールド、またはパートナーイベントの CFP にデベロッパーアドボケイトを提出依頼するには、[デベロッパーアドボケイトに CFP の提出を依頼する](/handbook/marketing/developer-relations/developer-advocacy/cfps/)を参照してください。

#### コンテンツリクエスト

コンテンツリクエストには、ブログ記事、ポッドキャスト、メディアインタビュー、またはデベロッパーアドボケイトをメディアの機会に参加させるリクエストが含まれます。

#### リクエストのスコアリング

| リクエストタイプ | 新規 / 既存コンテンツ | 予算スコア |
| ------------ | ---------------------- | ------------ |
| イベント        | 新規                    | 3            |
| イベント        | 既存 / コンテンツなし  | 1            |
| CFP          | 新規                    | 2            |
| CFP          | 既存                    | 1            |
| コンテンツ      | 新規                    | 2            |
| コンテンツ      | 既存                    | 1            |

以下のリストの各チームには、リクエスト用に四半期ごとに 15 ポイントが割り当てられています:

| チーム                       | チームラベル  |
|----------------------------|------------------|
| Corporate Events           | `DA-Consulting::CorpEvents`  |
| Corporate Communications   | `DA-Consulting::CorpComms`   |
| Developer Relations        | `DA-Consulting::Community`   |
| Growth Marketing           | `DA-Consulting::GrowthMktg`  |
| Field Marketing / ABM      | `DA-Consulting::FieldMktg`   |
| Sales / SDRs               | `DA-Consulting::Sales`       |
| Alliances                  | `DA-Consulting::Alliances`  |
| Product                    | `DA-Consulting::Product`     |
| Engineering                | `DA-Consulting::Engineering` |

あなたのチームが上記にリストされていない場合は、私たちの空き状況に基づいてリクエストを処理します。

#### リクエストの管理

このプロセスは、コンテンツリクエスト、ウェブキャスト、インタビュー、ミートアップなど、あらゆるリクエストをカバーします。プロセスには次のことが含まれます:

- 依頼者は、各チームの予算消費を追跡できるよう、自分のチームを識別するラベルと予算スコアに対応するウェイトを割り当てる必要があります。
- デベロッパーアドボケイトチームのメンバーが Issue をトリアージし、必要なすべての詳細と指示を提供します。
- リクエストにアクションが取られると、必要なラベルが Issue に適用されます。
- リクエストが完了すると、Issue は依頼者に再度割り当てられ、Issue がクローズされる前に、結果として生成された必要なメトリクスを提供します。
