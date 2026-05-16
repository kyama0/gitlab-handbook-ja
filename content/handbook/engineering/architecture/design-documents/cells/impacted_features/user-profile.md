---
stage: enablement
group: Tenant Scale
title: 'Cells: ユーザープロフィール'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/impacted_features/user-profile/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-08-23T13:02:20+00:00"
---


{{% alert %}}
このドキュメントは作業中であり、Cells 設計の非常に初期段階を表しています。重要な側面は文書化されていませんが、今後追加する予定です。これは Cells の可能なアーキテクチャの一つであり、どのアプローチを実装するかを決定する前に代替案と比較検討する予定です。このアプローチを実装しないことにした場合でも、その理由を文書化できるようにこのドキュメントは保持されます。
{{% /alert %}}


既存のユーザープロフィールは当初 Organization にスコープされます。長期的には、ユーザーが自分の貢献のグローバルビューを利用できるよう、Organization をまたいでユーザーアクティビティの一部を集約することを検討すべきです。

## 1. 定義

各 GitLab アカウントには[ユーザープロフィール](https://docs.gitlab.com/ee/user/profile/index.html)があり、ユーザーとその GitLab アクティビティに関する情報が含まれています。

## 2. データフロー

## 3. 提案

ユーザープロフィールは Organization にスコープされます。`Your Work` と同じパターンに従い、プロフィールは常に Organization のコンテキストで表示されます。

- ユーザープロフィールの URL は `/-/organizations/<organization>/username` という URL 構造で Organization を参照します。
- ユーザーはホーム Organization をメイン Organization として設定できます。
- デフォルトのユーザープロフィール URL `/<username>` はユーザーのホーム Organization を参照し、ホーム Organization が設定されていない場合はデフォルト Organization を参照します。
- データベースに存在しないユーザーがユーザープロフィールにアクセスしようとすると、404 not found エラーが表示されます。
- Organization に貢献していないユーザーには、空の状態のユーザープロフィールが表示されます。
- ユーザープロフィールの空の状態を表示する際に、プロフィールのホーム Organization が別の Organization に設定されている場合は、メイン Organization へのナビゲーションを可能にするコールトゥアクションを表示します。
- ユーザープロフィールのパンくずリストは `[Organization 名] / [ユーザー名]` として表示されます。

デザイン提案については [Issue #411931](https://gitlab.com/gitlab-org/gitlab/-/issues/411931) を参照してください。

## 4. 評価

[大多数のユーザーが 1 つの Organization でほとんどのアクティビティを行う](../../organization#data-exploration)と予想しています。
そのため、当初はユーザープロフィールを Organization にスコープすることが許容可能だと考えます。
現在のユーザープロフィールのどの側面がグローバルなコンテキストでの貢献を示すのに関連しているかを理解するには、さらなる調査が必要です。

## 4.1. メリット

- Organization にスコープされたユーザープロフィールを表示することで、自分の Organization に最も関連する貢献に集中でき、ユーザーの他のアクティビティをフィルタリングできます。
- 既存のユーザープロフィール URL は壊れません。

## 4.2. デメリット

- ユーザーはすべてのアクティビティを表示する機能を失うことになり、複数の Organization にまたがって作業する際に成果の履歴書としてユーザープロフィールを使用する効果が低下する可能性があります。
