---
title: "顧客デプロイメントタイプ"
description: "顧客デプロイメントタイプ、コンバージョンソース、ホスティング、デプロイヤー方法、プロバイダーの定義ガイド。"
upstream_path: /handbook/customer-success/csm/gainsight/deployment-types/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T01:01:39Z"
translator: claude
stale: false
lastmod: "2024-06-27T22:14:31+00:00"
---

## 顧客デプロイメントタイプ

顧客のオンボーディング時に、これらのフィールドをGainsightに入力する必要があります。GainsightのC360の顧客属性に関するデプロイメントタイプの定義は以下のとおりです。

### 顧客コンバージョンソース

目的は顧客がどこから来たかを理解することです — これはソーシング（例えば、マーケティング/SDRのアナロジー）についてです。各顧客は、GitLabを使い始めた時期に関わらず、以下の3つのカテゴリのいずれかに該当します。

- Community conversion（ファーストバリュー免除） - 無料のコミュニティ版を使用しており、有料サブスクリプション層に移行（または移行した）顧客。
- New Customer（新規顧客） - 既存のGitLabデプロイメントを持っていない（または持っていなかった）まったく新しい顧客。
- Existing - New CSM（ファーストバリュー免除） - すでに有料顧客であり、CSMが割り当てられる（または割り当てられた）顧客（例えば、小規模デプロイメントから大規模デプロイメントにアップグレードした場合など）。

### ホスティング

顧客の主なデプロイメントタイプは何ですか？

- Self-managed - オンプレミス
- Self-managed - クラウド
- Self-managed - ハイブリッド
- GitLab.com
- Self-managedおよびGitLab.com

### デプロイヤー

デプロイを実行したのは*誰*かという問いに答えます。

- 顧客デプロイ
- GitLabサービス
- パートナーサービス

### プロバイダー

顧客が使用している（クラウド）プロバイダー、またはオンプレミスかどうかをログ記録します。

- On-Premise
- AWS
- GCP
- Azure
- GitLab.com
- マルチクラウド
- その他
