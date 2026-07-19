---
title: 'ラベル'
description: 'ラベルに関するドキュメント'
upstream_path: "/handbook/eta/css/gitlab/labels/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
translated_at: "2026-07-19T06:29:35+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

このガイドでは、Customer Support Systems が GitLab ラベルを使用する方法を説明します。

## ラベルを理解する

### ラベルとは

ラベルは、GitLab の機能全体で作業を整理および追跡します。プロジェクトが小規模なチームから大規模な組織へと成長するにつれて、ラベルは増え続ける作業量を追跡・管理するのに役立ちます。ラベルには次の役割があります。

- カスタム属性を使用して Issue、マージリクエスト、エピックを分類する。
- リストおよびボードのコンテンツをフィルタリングする。
- 色と説明的なタイトルで作業項目の優先順位を付ける。
- スコープラベルで優先度と重要度を追跡する。
- 整理されたグループを通じてワークフローを構造化する。

Customer Support Systems では、ラベルはリクエストを構造化して分類し、Issue ボードを通じたワークフロー追跡を可能にし、チーム全体の作業の優先順位付けと振り分けに役立ちます。

## Customer Support Systems が使用するラベル

### ステージラベル

これらは、Issue が現在どのステージにあるかを示すために使用します。

| ラベル | 意味 |
|-------|---------|
| `Stage::Triage` | Issue が開始する場所です。作業を受け入れるかどうかの判断はここで行われます |
| `Stage::Planning` | Issue の計画をここで作成します |
| `Stage::Scheduling` | Issue にいつ取り組むかをここで決定します |
| `Stage::Queued` | 将来取り組む Issue がここで待機します |
| `Stage::Development` | 現在の開発作業をここで行います（従来はサンドボックス内） |
| `Stage::Validation` | Issue のリクエスト元からの検証をここで取得します |
| `Stage::Implementation` | Development ステージで行った作業を使用して、実装のための作業をここで行います |
| `Stage::Completed` | Issue が完了したことを示します |
| `Stage::Backlogged` | Issue がバックログに登録されたことを示します |
| `Stage::Blocked` | Issue を前進させる何かがブロックしていることを示します |

注記: これらはスコープラベルです。つまり、一度に Issue に存在できるのは常に 1 つだけです。

### 検証ラベル

これらは、Issue の検証ステータス（Development ステージで行われます）を示すために使用します。

| ラベル | 意味 |
|-------|---------|
| `Validation::Skipped` | Issue に対する検証が行われなかったことを意味します |
| `Validation::Awaiting` | Customer Support Systems が検証の完了を待っていることを意味します |
| `Validation::Received` | 検証を受け取ったことを意味します |
| `Validation::Rejected` | 検証が却下されたことを意味します |

注記: これらはスコープラベルです。つまり、一度に Issue に存在できるのは常に 1 つだけです。

### リクエストタイプラベル

これらは、Issue がどの種類のリクエストであるかを示すために使用します。

| ラベル | 意味 |
|-------|---------|
| `RequestType::Bug` | Issue はバグに関するものです |
| `RequestType::Feature` | Issue は機能リクエスト/変更に関するものです |
| `RequestType::Incident` | Issue はインシデントに関するものです |
| `RequestType::Administrative` | Issue は管理作業に関するものです |

注記: これらはスコープラベルです。つまり、一度に Issue に存在できるのは常に 1 つだけです。

### 顧客ラベル

これらは、どのチーム/部門がリクエストを行ったかを示すために使用します。

| ラベル | 意味 |
|-------|---------|
| `Customer::ETA` | リクエストは ETA チームからのものです |
| `Customer::Security` | リクエストは Security チームからのものです |
| `Customer::Engineering` | リクエストは Engineering チームからのものです |
| `Customer::Finance` | リクエストは Finance チームからのものです |
| `Customer::People` | リクエストは People チームからのものです |
| `Customer::Support` | リクエストは Support チームからのものです |
| `Customer::Field` | リクエストは Field チームからのものです |
| `Customer::Marketing` | リクエストは Marketing チームからのものです |

注記: これらはスコープラベルです。つまり、一度に Issue に存在できるのは常に 1 つだけです。

### 優先度ラベル

これらは、Issue の優先度レベルを示すために使用します。

| ラベル | 意味 |
|-------|---------|
| `Priority::1` | 優先度 1（緊急）レベルの Issue です |
| `Priority::2` | 優先度 2（高）レベルの Issue です |
| `Priority::3` | 優先度 3（中）レベルの Issue です |
| `Priority::4` | 優先度 4（低）レベルの Issue です |

注記: これらはスコープラベルです。つまり、一度に Issue に存在できるのは常に 1 つだけです。

### ロードマップラベル

これらは、Issue がロードマップに関連付けられているかを示すために使用します。

| ラベル | 意味 |
|-------|---------|
| `roadmap_item` | Issue はロードマップ上の項目に関するものです |

## ラベルを適用する

Issue またはマージリクエストにラベルを適用するには、Issue/マージリクエストの右側パネルにある `Labels` の横の `Edit` をクリックするか、[ラベルクイックコマンド](https://docs.gitlab.com/user/project/quick_actions/#label)を使用します。

```plaintext
/label ~"TITLE_OF_LABEL"
```

注記: チルダ（`~`）が必要です。`TITLE_OF_LABEL` はラベル自体のタイトルに置き換えてください。例:

```plaintext
/label ~"Stage::Planning"
```

## ラベルを削除する

Issue またはマージリクエストからラベルを削除するには、Issue/マージリクエストの右側パネルにある `Labels` の横の `Edit` をクリックするか、[ラベル解除クイックコマンド](https://docs.gitlab.com/user/project/quick_actions/#unlabel)を使用します。

```plaintext
/unlabel ~"TITLE_OF_LABEL"
```

注記: チルダ（`~`）が必要です。`TITLE_OF_LABEL` はラベル自体のタイトルに置き換えてください。例:

```plaintext
/unlabel ~"roadmap_item"
```
