---
title: JiHu コントリビューションプロセス
upstream_path: /handbook/finance/jihu-support/jihu-contribution-process/
upstream_sha: a1349675d55d5e861385a14a4b2d2b617d2381b1
translated_at: "2026-04-29T19:06:37Z"
translator: claude
stale: false
---

JiHu チームからのコントリビューションは、JiHu 独自の変更があるかどうかに応じて2つの方法で行われます。

- アップストリーム方式 - GitLab Inc. リポジトリへのマージリクエストから開始する。
- 独自仕様とアップストリーム混在方式 - すべての変更を GitLab JiHu プロジェクトに対するマージリクエストで開始し、独自仕様以外の変更をアップストリームプロジェクトに対するマージリクエストで行う。

JiHu からのコントリビューションを識別するため、JiHu チームからのすべてのアップストリームコントリビューションには `~"JiHu contribution"` ラベルが自動的に付与されます。ラベルが正確に適用されるよう、`gitlab-jh` チームは [`gitlab-jh/jh-team`](https://gitlab.com/groups/gitlab-jh/jh-team/-/group_members?with_inherited_permissions=exclude) のダイレクトメンバーを現在のチームメンバーで常に最新の状態に保つ必要があります。

JiHu enablement の効率性エージングとレビュー指標は、この[ダッシュボード](https://app.periscopedata.com/shared/f7af38e3-0cea-4219-a5d3-6f6b25f10244?)で公開されています。

[エンジニアリング生産性](/handbook/engineering/infrastructure-platforms/developer-experience/)チームは JiHu エンジニアリング enablement 効率ツールと指標の DRI です。

### アップストリームコントリビューションのガイドライン

JiHu 独自のコンテンツを含まないコントリビューションは、アップストリームプロジェクトに対して作成されます。

```mermaid
graph LR
  mr-->|アップストリームプロジェクトに対して作成|repo
  mr[/アップストリーム MR/]
  repo(GitLab Inc. リポジトリ)
```

### アップストリーム機能コントリビューションのガイドライン

複数の MR が必要な大規模イニシアチブや広範な影響を持つイニシアチブの場合、事前の合同計画があると、アップストリーム機能コントリビューションはより効率的かつ予測可能になります。両チームが成功できるよう、以下のガイドラインに従う必要があります：

1. **実装開始マイルストーンの少なくとも1マイルストーン前** - JiHu チームが英語で機能スコープの概要、使用目的、反復的な実装計画を提供するアップストリーム機能計画 Issue を作成する。JiHu は関連チームの PM、プロダクトデザイナー、EM に Issue と実装計画についてのフィードバックを求める。
   - 関連する GitLab プロダクトグループが機能、関連する反復的な実装計画についてフィードバックを提供し、JiHu にフィードバックを返す。
1. **実装開始時** - JiHu チームが実装計画と以下のアップストリームガイドラインに従って MR を作成する。レビューは機能計画 Issue での合意に基づいて行われる。

アップストリーム計画 Issue の例：TBD

#### 反復的なコントリビューションのガイドライン

大きなプロダクト機能のコントリビューションは、GitLab の[イテレーション戦略](/handbook/product/product-processes/#iteration-strategies)に従う必要があります。

[イテレーショントレーニング](/handbook/engineering/workflow/development-onboarding/manager/#iteration-training)は、GitLab のイテレーションという価値観についてのコーチングに利用できます。これは GitLab プロダクトチームが機能のイテレーションに期待することを理解するのに役立ちます。

すべての機能が同じ戦略に従えるわけではありませんが、最初に試みる戦略は[最小限の価値ある変更の作成](/handbook/product/product-processes/#writing-about-features)であり、マージリクエストの作成においては常に[マージリクエストを小さく保つ](/handbook/engineering/workflow/iteration/#how-to-keep-a-merge-request-small)ことを心がけるべきです。

マージリクエストを小さく保つ上記のガイドラインで言及されているのは：

- 水平スライシング
- 垂直スライシング

JiHu のアップストリームコントリビューションは、開発者権限の不足から水平スライシングが難しいため、まず垂直にスライスする（つまり機能のスコープを縮小する）ことを常に試みてください。1つのマージリクエストに収まりきらないほど大きい場合にのみ、水平スライシングを検討してください。

機能を複数のイテレーションに分解する方法の例（水平・垂直どちらも）：

| 機能 | マージリクエスト（網羅的なリストではない） | スライシング |
| --- | --- | --- |
| [GitLab Insights](https://gitlab.com/groups/gitlab-org/-/epics/725) | <ul><li>[GitLab::Insights フレームワークの導入](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/9912)</li><li>[Insights コントローラーの導入](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/9776)</li><li>[Insights フロントエンド](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/9856)</li><li>[Insights でページあたり複数チャートのサポートに移行](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/10516)</li></ul> | ベース部分は水平、その上は垂直の混在 |
| [状態による検索結果フィルタリング](https://gitlab.com/groups/gitlab-org/-/epics/4293) | <ul><li>[Search UI に Issue スコープの結果の状態フィルタリングを追加](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/39881)</li><li>[検索 API に issues/merge_requests の状態フィルタリングを追加](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/41989)</li></ul> | 各 MR がスタンドアロン機能を提供する垂直スライシング |

### 独自仕様とアップストリーム混在コントリビューションのガイドライン

独自仕様とアップストリームコントリビューションを持つプロジェクトへのコントリビューションは、効率的なレビューのために以下のガイドラインを使用します。

1. JiHu エンジニアリングチームが2つの MR を作成する：
   1. [JiHu プロジェクト](https://jihulab.com/gitlab-cn/gitlab)のデフォルトブランチに対して、すべての変更を含む JiHu MR。
   1. [GitLab Inc プロジェクト](https://gitlab.com/gitlab-org/gitlab)のデフォルトブランチに対して、`jh/` 以外のすべての変更を含む GitLab Inc MR。
1. GitLab Inc MR は GitLab Inc チームメンバーがレビューする。レビュアーは[JiHu (JH) エディション関連マージリクエストのレビューガイドライン](https://docs.gitlab.com/ee/development/jh_features_review.html)に従う必要がある。
1. マージ後、プルミラーリング経由で更新が JiHu プロジェクトにミラーリングされ、[code sync](https://jihulab.com/gitlab-cn/code-sync) によって JiHu プロジェクトのデフォルトブランチ [`main-jh`](https://jihulab.com/gitlab-cn/gitlab/-/commits/main-jh) にマージされる。
1. JiHu エンジニアリングチームが JiHu MR から `jh/` 以外のすべての変更を削除する。
1. JiHu エンジニアリングチームが JiHu プロジェクトで JiHu MR をレビューしてマージする。
1. 2時間ごとのスケジュールパイプラインが [compliance-verification](https://gitlab.com/gitlab-org/gitlab-jh-mirrors/compliance-verification) で [JiHu プロジェクトのプルミラー](https://gitlab.com/gitlab-org/gitlab-jh-mirrors/gitlab) に対して実行され、[`package.json` と `yarn.lock` の合意済みの差異](https://gitlab.com/gitlab-jh/gitlab-jh-enablement/-/issues/170#note_892043256)を除いて `jh/` ディレクトリ外にコードの差異がないことを検証する。

![GitLab JiHu MR プロセスの図](/images/finance/jihu-support/gitlab-jh-mr-process.jpg)

### JiHu コントリビューションの識別

[JiHu チームメンバー](https://gitlab.com/groups/gitlab-jh/jh-team/-/group_members?with_inherited_permissions=exclude)からのコントリビューションは、以下によって `JiHu contribution` ラベルが付与されます：

- [イベント駆動型自動化](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/triage/processor/jihu_contribution.rb)
- バックアップとしての[スケジュール済み自動化](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/policies/stages/hygiene/label-jihu-contribution.yml)。

### マージリクエストレビュープロセス

1. JiHu 作者がドラフト状態でアップストリームマージリクエストを提出する
1. JiHu 作者のマネージャーがマージリクエストの説明でメンションされる
1. JiHu チームがピアレビューを実施する
1. JiHu チームのピアレビューが完了したら、JiHu R&D マネージャーまたはメンテナーが MR に `LGTM` または `Looks good` コメントを追加する
1. マージリクエストが JiHu チームによって「準備完了」状態に設定される
1. JiHu 作者が `@gitlab-bot request_review` を使ってレビューをリクエストし、マージリクエストコーチと協力して MR のマージを進める
1. MR は以下を含む文書化されたレビュープロセスを経る：
   1. [ドメイン専門家によるコードレビュー](#what-approvals-are-required)
   1. 特定のコードファイルのオーナーからのレビュー。JiHu マージリクエスト作者は MR 承認ウィジェットの必要な承認リストからチームメンバーをメンションする責任がある。現在以下のエリアが対象：
      1. 認証関連コード
   1. [GitLab セキュリティレビュー](/handbook/finance/jihu-support/jihu-security-review-process/#security-review-workflow-for-jihu-contributions)（自動的にトリガーされる）

#### 必要な承認

アップストリームマージリクエストは、他のすべてのマージリクエストと同じレベルのレビューと承認が必要です：

- [通常のコードレビュー](https://docs.gitlab.com/ee/development/code_review.html)
- [セキュリティレビュー](/handbook/finance/jihu-support/jihu-security-review-process)
- 該当する場合は[データベースマイグレーションレビュー](/handbook/finance/jihu-support/jihu-database-change-process)

アップストリームマージリクエストは、変更されたファイルに基づいて追加の[特定チームレビュー](https://docs.gitlab.com/ee/development/code_review.html#approval-guidelines)が必要な場合があります。影響度の高いコードは [CODEOWNERS](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/CODEOWNERS) ルールと特定ファイルの必要な承認で識別されます。例えば、マージリクエストに認証や認可に関連する変更が含まれる場合、[Manage:Authentication and Authorization チームメンバー](/handbook/company/team/)の承認が必要です

#### レビュー対象

- `jh/` 内の変更はレビューしない：
  - 特定の変更が JiHu にのみ必要な場合、JiHu プロジェクトリポジトリの `jh/` ディレクトリに入れるべき。
- `jh/` ディレクトリ外の変更。例：
  - CE/EE に追加できる機能
  - CE/EE コードをよりクリーンまたはモジュール化する際のリファクタリング
  - クラス/モジュールのプリペンドに関する変更は、[CE または EE 機能に基づく JH 機能](https://docs.gitlab.com/ee/development/jh_features_review.html#jh-features-based-on-ce-or-ee-features)に基づいてレビューされる必要がある。
  - データベースマイグレーション関連の変更は[データベースマイグレーションレビュープロセス](/handbook/finance/jihu-support/jihu-database-change-process)に従ってレビューされる必要がある。

#### マージリクエストレビューのエスカレーション

[ガイドライン](https://docs.google.com/document/d/1zEiPBZ1D90LJdxBJDl45B4N-umqtR0VGt3803OgHjMo/edit?usp=sharing)をご参照ください。

### リリース認定プロセス

アプリケーションセキュリティチームは JiHu のコントリビューションを含む各リリースの認定を実施します。このプロセスの詳細については[こちらのドキュメント](/handbook/finance/jihu-support/release-certification)をご参照ください。

報告書を含む認定 Issue は、[jh-upstream-report リポジトリ](https://gitlab.com/gitlab-org/jh-upstream-report)の [Issue トラッカー](https://gitlab.com/gitlab-org/jh-upstream-report/-/issues/)で確認できます。
