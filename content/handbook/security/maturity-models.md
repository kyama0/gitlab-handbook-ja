---
title: "Security Division の成熟度モデル"
description: "このページでは、Security Division の成熟度モデルを維持する方法について説明します。"
upstream_path: /handbook/security/maturity-models/
upstream_sha: "52419353ea755a1ac823553385f8636ff2fcde17"
translated_at: "2026-11-01T05:20:40+00:00"
translator: claude
stale: false
lastmod: "2026-10-30T14:17:26-04:00"
---

## 概要 {#overview}

私たちの成熟度モデルは、チームの特定の状態と振る舞いを時間の経過とともに追跡します。これにより、より効率的により良い成果を提供するためのロードマップが得られます。

## プロセス {#process}

私たちのサブバリューであるドッグフーディングと退屈な解決策の採用に従い、
成熟度モデルを作成・維持するプロセスは GitLab の機能のみを利用しています。

Security Division の各チームは、自身の成熟度モデルを維持する必要があります。

### ツール {#tooling}

成熟度モデルでは [Issue ボード](https://docs.gitlab.com/ee/user/project/issue_board.html)を活用して、さまざまなプロセスの整理と進捗の追跡を行います。これらの Issue ボードは、[https://gitlab.com/gitlab-com/gl-security/](https://gitlab.com/gitlab-com/gl-security/)のチーム GitLab グループ配下のプロジェクトに配置されています (例: Red Team の場合は [https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-internal/red-team-maturity-model/](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-internal/red-team-maturity-model/))。

成熟度モデルの各プロセスは、短いタイトルと長めの説明を持つ Issue として表現されます。

[Issue ラベル](https://docs.gitlab.com/ee/user/project/labels.html)は、プロセスの現在のレベルと状態を定義するために使用されます。

### ラベル {#labels}

#### 成熟度レベル {#maturity-levels}

`~Maturity Level::*` ラベルはプロセスのレベルを反映するもので、**必須** です。
モデルの連続体に沿って 5 つのレベルが定義されています (詳細は [「能力成熟度モデル」 Wikipedia ページ](https://en.wikipedia.org/wiki/Capability_Maturity_Model)を参照):

- `~Maturity Level::Initial (1)`
- `~Maturity Level::Repeatable (2)`
- `~Maturity Level::Defined (3)`
- `~Maturity Level::Capable (4)`
- `~Maturity Level::Efficient (5)`

これらのラベルは一貫性のため、色 `#6699cc` (青) を使用する必要があります。

#### 進捗ラベル {#progress-labels}

`~Maturity::*` ラベルはプロセスの現在の状態を反映するもので、活動がまだ開始されていない場合は **任意** です:

- `~Maturity::In Progress`: チームがこの状態または振る舞いを達成するために積極的に取り組んでいます。色: `#6699cc` (青)
- `~Maturity::Replaced`: この状態または振る舞いは過去に達成されましたが、その後より高い成熟度レベルに置き換えられました。色: `#8fbc8f` (緑)
- `~Maturity::Established`: この状態または振る舞いは達成されており、現在も改善・適用が続けられています。色: `#009966` (濃い緑)

## リソース {#resources}

- [「能力成熟度モデル」 Wikipedia ページ](https://en.wikipedia.org/wiki/Capability_Maturity_Model)
