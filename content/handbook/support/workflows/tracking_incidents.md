---
title: インシデントの追跡
category: GitLab.com
subcategory: Triaging
description: インシデントによる顧客への影響を追跡するうえで役立つさまざまな作業の進め方。
upstream_path: /handbook/support/workflows/tracking_incidents/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T04:02:00Z"
translator: claude
stale: false
---

## 概要

インシデントは、通常よりも多くのユーザーが Zendesk チケットを起票する事態につながりがちです。インシデントによる影響を測定し、その後のフォローアップに備えて影響を受けたユーザーを追跡するためには、特定のインシデントに関連するすべてのチケットを素早く特定できるよう、Zendesk マクロとタグを作成することが必要です。

## Zendesk マクロの作成

すでに多数のチケットが寄せられている場合でも、これからチケットが寄せられると見込まれる場合でも、特定のインシデントに関連するチケットを追跡するためのマクロを作成する必要があります。マクロを作成する前に、使用する文言が当該インシデントの責任者によって承認されていることを確認してください。誰が責任者になるかはインシデントの種類によって異なります。本番インシデントであれば Incident Manager、セキュリティ関連のインシデントであれば Security が責任者となります。

1. [Zendesk Macros](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros) プロジェクトで新しいブランチを作成します。

1. マクロ用に [macros/active/incident](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/tree/master/macros/active/Incident) ディレクトリ配下に新しいファイルを作成し、タイトルには `Macro Title.yaml` 形式を使用します。
    - マクロの YAML フォーマット例は [README](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/tree/master#some-examples) を参照するか、`incident` ディレクトリ内の過去マクロを参照できます。
    - [tag:](#naming-a-tag) と `description:` のヘッダーを必ず含めてください。

1. 新しいマクロのマージリクエストを作成します。進行中のインシデントで使われる可能性が高いため、`#support_operations` と `#support_leadership` に承認の早期化を依頼しても構いません。

## タグの命名 {#naming-a-tag}

関連する Issue に基づき、マクロのタグはプロジェクトトラッカー名の略称と Issue 番号、または GitLab.com の本番インシデントの場合は `com` を組み合わせて作成します。

例:

- [このインシデント](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/6544) に対する `com_incident_6544`。
- [このインシデント](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/issues/302) に対する `sec_comms_302`
- [このインシデント](https://gitlab.com/gitlab-com/gl-security/security-operations/trust-and-safety/operations/-/issues/444) に対する `tas_incident_444`

## 関連項目

- [How To Perform CMOC Duties](/handbook/support/workflows/cmoc_workflows/) — CMOC として本番インシデントを扱う方法。
