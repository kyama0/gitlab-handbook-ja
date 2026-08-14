---
title: "保存済みビューのボード: プロジェクト例"
upstream_path: /handbook/engineering/devops/plan/planning-views/project-example-boards/
upstream_sha: e6de02eba910babdd302a4f920edec669cff51cf
translated_at: "2026-08-15T07:00:16+09:00"
translator: claude
stale: false
lastmod: "2026-08-14T14:39:01+02:00"
---

## タイムライン

```mermaid
gantt
    title Lifecycle Boards
    dateFormat YYYY-MM-DD
    axisFormat %b %d

    section Milestones
    18.10                    :m1810, 2026-02-14, 2026-03-13
    18.11                    :m1811, 2026-03-14, 2026-04-10
    19.0                     :m190, 2026-04-11, 2026-05-15
    19.1                     :m191, 2026-05-16, 2026-06-12
    19.2                     :m192, 2026-06-13, 2026-07-10
    19.3                     :m193, 2026-07-11, 2026-08-14

    section Pre-work
    Requirements discovery   :discovery, 2026-02-14, 2026-04-18
    Groundwork            :prereqs, 2026-03-14, 2026-04-24

    section Active development
    Alpha                    :alpha, 2026-04-18, 2026-05-29
    Internal rollout         :crit, milestone, 2026-05-29, 0d
    GA                       :ga, 2026-05-29, 2026-07-10
    GitLab.com rollout       :crit, rollout, 2026-06-26, 2026-07-10

    section Feedback and clean-up
    Post-GA follow-ups       :followups, 2026-06-26, 2026-08-14
```

## ステージ

認知的負荷を減らし、[最小限の価値ある変更](/handbook/values/#minimal-valuable-change-mvc)にスコープを絞り込むために、プロジェクトを時間制限のあるステージに分割します。これにより:

- 認知的負荷が減少します — エンジニアはより小さな変更、より小さな要件のセット、そしてより少ない Issue に取り組みます。
- プロジェクト管理が簡単になり、遅延を早期に発見できます — 小さなステージの方が追跡しやすく、遅れに気づきやすいです。
- バグやフィードバックをより早く表面化できます。

| ステージ | 成果 |
|-------|---------|
| **要件発見** | 後続のステージのスコープに関する意思決定。作業が Issue に分解される。プロジェクトの大まかな見積もり。スコープ外のことの明確な定義。 |
| **基盤作業** | 残りの開発を容易にするリファクタリングと適応。 |
| **アルファ版** | コアワークフローがドッグフーディングと内部テストに使用できるが、エッジが粗い場合がある。内部テストフィードバックへの対応を含む。 |
| **GA** | ユーザーへのリリースに満足できる最小限のまとまった体験。アルファ版のユーザーフィードバックへの対応、粗いエッジの修正、フィーチャーフラグのロールアウト期間（マイルストーンカットオフの約 2 週間前）を含む。 |
| **GA 後のフォローアップ** | 初回リリース後に延期された機能、ユーザーフィードバック、コードとテストのクリーンアップ。GA から 1 〜 2 マイルストーン以内に完了する必要があります。判断に迷う場合はスコープ外に入れてください。 |
| **スコープ外** | コミットなし。後で行われるか、再優先化されるか、クローズされる可能性があります。 |

## エピックの構成

```plain
Lifecycle Boards (top-level epic)
├── Lifecycle Boards — Requirements discovery
│   ├── UX discussions (issue)
│   ├── Lifecycle Boards — Card (epic)
│   ├── Lifecycle Boards — Columns (epic)
│   └── ...
├── Lifecycle Boards — Groundwork
│   ├── Refactor work item listing page (epic)
│   ├── Load work items via REST API instead of GraphQL on listing pages (epic)
│   └── ...
├── Lifecycle Boards — Alpha
│   ├── Status columns (epic)
│   │   ├── Load available statuses (issue)
│   │   └── Load work items by column (issue)
│   ├── Card (epic)
│   ├── API changes (epic)
│   ├── Transform view preferences dropdown into drawer (epic)
│   ├── Card drag and drop (epic)
│   │   ├── Persist changes (issue)
│   │   └── Basic animation (issue)
│   └── ...
├── Lifecycle Boards — GA
│   ├── Internal testing feedback (issue)
│   ├── Card enhancements (epic)
│   ├── Feature flag rollout (epic)
│   ├── Card drag and drop (epic)
│   │   ├── Improved animation (issue)
│   │   └── Highlight available and unavailable columns (issue)
│   └── ...
├── Lifecycle Boards — Post-GA follow-ups
│   ├── User feedback (issue)
│   ├── Feature flag removal (epic)
│   ├── Old code cleanup (epic)
│   ├── Tests cleanup (epic)
│   └── ...
└── Lifecycle Boards — Out of scope
```
