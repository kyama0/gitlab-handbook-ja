---
title: 'ラベル'
description: 'ラベルに関するドキュメント'
date: 2026-01-13
upstream_path: /handbook/security/customer-support-operations/gitlab/labels/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

このガイドでは、Customer Support Operations が GitLab のラベルをどのように使っているかを説明します。

## ラベルについて

### ラベルとは

ラベルは、GitLab の各機能をまたいで作業を整理・追跡するための仕組みです。プロジェクトが小規模なチームから大規模な組織に成長するにつれて、ラベルは増加する作業量の追跡と管理に役立ちます。ラベルでできることは次のとおりです。

- Issue、マージリクエスト、エピックをカスタム属性で分類する。
- 一覧やボードでコンテンツをフィルタリングする。
- 色や説明的なタイトルで作業項目に優先順位を付ける。
- スコープ付きラベルで優先度や重大度を追跡する。
- 整理されたグループ分けによってワークフローを構造化する。

Customer Support Operations にとってラベルは、リクエストを構造化された形で分類し、Issue ボードを通じてワークフローを追跡できるようにし、チーム全体での作業の優先順位付けやルーティングに役立つものです。

## Customer Support Operations が使用するラベル

### Stage ラベル

これらは Issue が現在どのステージにあるかを示すために使用します。

| ラベル | 意味 |
|-------|------|
| `Stage::Triage` | Issue がここから開始されます。作業を受け入れるかどうかの判断はここで行われます |
| `Stage::Planning` | この Issue に対するゲームプランがここで作成されます |
| `Stage::Scheduling` | Issue にいつ取り組むかがここで決定されます |
| `Stage::Queued` | 将来取り組まれる Issue はここで待機します |
| `Stage::Development` | 現在の開発作業がここで行われます（伝統的にはサンドボックスで実施） |
| `Stage::Validation` | Issue の依頼者からの検証をここで取得します |
| `Stage::Implementation` | （Development ステージで行われた作業を使って）実装作業をここで行います |
| `Stage::Completed` | Issue が完了したことを示します |
| `Stage::Backlogged` | Issue がバックログに入っていることを示します |
| `Stage::Blocked` | Issue を前に進められないブロッカーがあることを示します |

注意: これらはスコープ付きラベルであり、Issue 上に同時に存在できるのは 1 つだけです。

### Validation ラベル

これらは Issue 上の検証ステータスを示すために使用します（検証は Development ステージで実施されます）。

| ラベル | 意味 |
|-------|------|
| `Validation::Skipped` | Issue に対して検証が実施されなかったことを意味します |
| `Validation::Awaiting` | Customer Support Operations が検証完了を待っていることを意味します |
| `Validation::Received` | 検証が受領されたことを意味します |
| `Validation::Rejected` | 検証が却下されたことを意味します |

注意: これらはスコープ付きラベルであり、Issue 上に同時に存在できるのは 1 つだけです。

### Request type ラベル

これらは Issue がどの種類のリクエストかを示すために使用します。

| ラベル | 意味 |
|-------|------|
| `RequestType::Bug` | バグに関する Issue |
| `RequestType::Feature` | 機能リクエストや変更に関する Issue |
| `RequestType::Incident` | インシデントに関する Issue |
| `RequestType::Administrative` | 管理業務に関する Issue |

注意: これらはスコープ付きラベルであり、Issue 上に同時に存在できるのは 1 つだけです。

### Customer ラベル

これらはどのチーム/部署からのリクエストかを示すために使用します。

| ラベル | 意味 |
|-------|------|
| `Customer::ETA` | ETA チームからのリクエスト |
| `Customer::Security` | Security チームからのリクエスト |
| `Customer::Engineering` | Engineering チームからのリクエスト |
| `Customer::Finance` | Finance チームからのリクエスト |
| `Customer::People` | People チームからのリクエスト |
| `Customer::Support` | Support チームからのリクエスト |
| `Customer::Field` | Field チームからのリクエスト |
| `Customer::Marketing` | Marketing チームからのリクエスト |

注意: これらはスコープ付きラベルであり、Issue 上に同時に存在できるのは 1 つだけです。

### Priority ラベル

これらは Issue の優先度を示すために使用します。

| ラベル | 意味 |
|-------|------|
| `Priority::1` | 優先度 1（緊急）レベルの Issue |
| `Priority::2` | 優先度 2（高）レベルの Issue |
| `Priority::3` | 優先度 3（中）レベルの Issue |
| `Priority::4` | 優先度 4（低）レベルの Issue |

注意: これらはスコープ付きラベルであり、Issue 上に同時に存在できるのは 1 つだけです。

### Roadmap ラベル

これらは Issue がロードマップに紐付いているかどうかを示すために使用します。

| ラベル | 意味 |
|-------|------|
| `roadmap_item` | この Issue はロードマップ上の項目に関連しています |

## ラベルの適用

Issue やマージリクエストにラベルを適用するには、Issue/マージリクエストの右側パネルにある `Labels` の横の `Edit` をクリックするか、[label クイックコマンド](https://docs.gitlab.com/user/project/quick_actions/#label) を使用します。

```plaintext
/label ~"TITLE_OF_LABEL"
```

注意: チルダ (`~`) は必須です。`TITLE_OF_LABEL` はラベル自体のタイトルに置き換えてください。例えば次のようになります。

```plaintext
/label ~"Stage::Planning"
```

## ラベルの削除

Issue やマージリクエストからラベルを削除するには、Issue/マージリクエストの右側パネルにある `Labels` の横の `Edit` をクリックするか、[unlabel クイックコマンド](https://docs.gitlab.com/user/project/quick_actions/#unlabel) を使用します。

```plaintext
/unlabel ~"TITLE_OF_LABEL"
```

注意: チルダ (`~`) は必須です。`TITLE_OF_LABEL` はラベル自体のタイトルに置き換えてください。例えば次のようになります。

```plaintext
/unlabel ~"roadmap_item"
```
