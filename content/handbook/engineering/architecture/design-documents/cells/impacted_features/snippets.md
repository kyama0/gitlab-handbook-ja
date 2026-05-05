---
stage: enablement
group: Tenant Scale
title: 'Cells: スニペット'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/impacted_features/snippets/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---


{{% alert %}}
このドキュメントは作業中であり、Cells 設計の非常に初期段階を表しています。重要な側面は文書化されていませんが、今後追加する予定です。これは Cells の可能なアーキテクチャの一つであり、どのアプローチを実装するかを決定する前に代替案と比較検討する予定です。このアプローチを実装しないことにした場合でも、その理由を文書化できるようにこのドキュメントは保持されます。
{{% /alert %}}


スニペットは Organization にスコープされます。当初は Organization をまたいでスニペットコレクションを集約することはできません。[Issue #416954](https://gitlab.com/gitlab-org/gitlab/-/issues/416954) も参照してください。

## 1. 定義

2 種類のスニペットが存在します:

- [プロジェクトスニペット](https://docs.gitlab.com/ee/api/project_snippets.html)。これらのスニペットの URL は `/<group>/<project>/-/snippets/123` の形式です。
- [パーソナルスニペット](https://docs.gitlab.com/ee/user/snippets.html)。これらのスニペットの URL は `/-/snippets/123` の形式です。

スニペットは Git リポジトリによってバックアップされます。

## 2. データフロー

## 3. 提案

### 3.1. Organization にスコープ

プロジェクトスニペットとパーソナルスニペットの両方が Organization にスコープされます。

- プロジェクトスニペットの URL はルーティング可能なため変更されません。
- パーソナルスニペットの URL は URL がルーティング可能になるよう `/-/organizations/<organization>/snippets/123` に変更する必要があります。

スニペットの作成もユーザーの現在の Organization にスコープされます。そのため、Organization が展開された後は `パーソナルスニペット` を `組織スニペット` にリネームすることを推奨します。ユーザーは複数の Organization にまたがって多数の独立したスニペットコレクションを作成できます。

## 4. 評価

Gitaly は Cell に限定されているため、スニペットは Organization にスコープされます。

## 4.1. メリット

- クラスター全体の Gitaly を持つ必要がありません。

## 4.2. デメリット

- [スニペットの検索](https://docs.gitlab.com/ee/user/snippets.html#discover-snippets) が機能しなくなります。
- スニペットへのアクセスが Organization の可視性に従属する可能性があります。
