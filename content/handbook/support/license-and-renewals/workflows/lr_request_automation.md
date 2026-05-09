---
title: 自動化リクエスト
category: CustomersDot
description: このワークフローでは、L&R に関するタスクの自動化をリクエストする手順について説明します。
upstream_path: /handbook/support/license-and-renewals/workflows/lr_request_automation/
upstream_sha: 9da08370100b76603b2eb82901592f9d21c9766c
translated_at: "2026-05-08T10:35:08Z"
translator: claude
stale: false
---

## 概要

繰り返しの手作業を必要とするリクエストは、簡素化または自動化されるべきです。
このワークフローでは、L&R に関するタスクの自動化をリクエストする手順について説明します。

## なぜ？

[効率性](/handbook/values/#efficiency) の価値観に従って:
> 私たちは、必要以上のことをせず、作業を重複させずに、正しいことに取り組むことを大切にしています。これにより、より多くの進捗を達成でき、私たちの仕事はより充実したものになります

## 範囲

このプロセスは、L&R および [GitLab Customers Portal](https://customers.gitlab.com/) に関連するリクエストを対象としています。

## ワークフロー

1. 既存の機能リクエストがないか確認します。これは [Customers Portal Issues](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/?sort=created_date&state=opened&label_name%5B%5D=type%3A%3Afeature&first_page_size=100) トラッカーで確認できます。
1. Customers Portal に追加してほしい機能が既に存在する場合は、その Issue にコメントを追加できます。存在しない場合は、[Feature Proposal テンプレート](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/new?issuable_template=feature-proposal) を使用して新しい Issue を作成します。

## **`注:`**

Mechanizer への機能追加はもう行っていません。Mechanizer に対する変更は、既存機能を維持し、Mechanizer にある機能が Customers Portal などの既存の GitLab ツールに組み込まれるまで Mechanizer が動作し続けることを保証する目的のみで行われます。
