---
title: "データチームのデータ管理ページ"
description: "データ管理ページは、エンタープライズデータプラットフォームの管理・保護・ガバナンスおよび関連活動に関するコンテンツをカバーします。"
upstream_path: /handbook/enterprise-data/data-governance/data-management/
upstream_sha: 3f489816f1fcde506cae1427b280d744ab382621
translated_at: "2026-11-28T06:11:48+09:00"
translator: claude
stale: false
lastmod: "2026-11-27T15:31:09Z"
---

## 目的

データ管理は、[エンタープライズデータプラットフォーム](/handbook/enterprise-data/platform/)の管理・保護・ガバナンスおよびそれに関連する活動に関するプラクティスとポリシーをカバーします。エンタープライズデータプラットフォームの技術コンポーネントは [GitLab テックスタック](/handbook/business-technology/tech-stack-applications/)に記載されています。

## スコープ

### データセキュリティプラクティス

エンタープライズデータプラットフォームは[多くのシステムから収集されたデータ](/handbook/enterprise-data/platform/)をキャプチャ・処理・保存します。このデータのすべてが同じ重要性を持つわけではなく、私たちは[クリティカルシステムティア](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/)フレームワークと[データ分類標準](/handbook/security/policies_and_standards/data-classification-standard/)を使用して、どのデータが最も重要でどのように最適に保護するかを決定します。

## 役割と責任

| 役割  | 責任 |
| :-- | :-- |
| GitLab チームメンバー | この手順の要件に従う責任 |
| データ管理チーム | この手順の実装と実行の責任 |
| データ管理（コードオーナー） | この手順の重大な変更と例外の承認の責任 |

## 標準

### Snowflake

私たちは Snowflake でロールベースのデータアクセス方式を展開しています:

* ユーザーアクセスは Okta で管理され、[アクセスリクエストは GitLab で管理されます](/handbook/enterprise-data/platform/#warehouse-access)
* 各ユーザーは[職務機能に基づいた1つ以上のロール](/handbook/enterprise-data/platform/#snowflake-permissions-paradigm)が割り当てられ、この設定は [Permifrost](/handbook/enterprise-data/platform/permifrost/) で管理されます

追加のコントロールには以下が含まれます:

* データ分類標準に基づき、[データはデータベースとスキーマで管理されます](/handbook/enterprise-data/platform/#data-storage)
* すべてのクエリ/ユーザー/プロセスは[定義済みのウェアハウスまたはコンピュートリソース](/handbook/enterprise-data/platform/#compute-resources)に割り当てられます
* [パスワードはローテーションされます](/handbook/enterprise-data/platform/#passwords)

### データのカテゴリ化

GitLab のデータプラットフォームには複数のカテゴリがあります。各カテゴリがすべてのデータに適用されることを強調することが重要です。つまり、すべてのデータプロダクト（抽出されたソース・テーブル・行・フィールド・ダッシュボード・ポンプなど）は**それぞれ**のデータカテゴリに該当します。

| データカテゴリ | 説明 | 可能な値 | 取り扱い方法 | アクセスコントロール |
| ------------- | ----------- | --------------- | ------------- | --------------- |
| データ分類 | データの種類とレベル。 | レッド、オレンジ、イエロー、グリーン。 | レッドデータはデータプラットフォームに保存することは許可されていません。[一般的なデータセキュリティコントロール](/handbook/enterprise-data/data-governance/data-management/#general-data-security-controls)に従ってください。 | 特定のコントロールは設けられていません。 |
| MNPI | これは重要な非公開情報です。 | MNPI または非MNPI。 | [SAFE データガイド](/handbook/enterprise-data/platform/safe-data/)に従ってください。 | Permifrost によってアクセスが付与されます。GitLab チームメンバーは指定されたインサイダーになります。 |
| センシティブデータ | デフォルトですべての GitLab チームメンバーと共有しないようにセンシティブとみなされるデータ。 | センシティブまたは非センシティブ。 | センシティブデータは DBT によって[マスク](/handbook/enterprise-data/platform/dbt-guide/#sensitive-data)されます | Permifrost によってアクセスが付与されます。 |
| 個人データ | PII とも呼ばれます。識別可能な自然人に関連付けられる、または合理的に関連付けられる可能性があるデータを説明または記述するデータ。[セキュリティハンドブックページ](/handbook/security/policies_and_standards/data-classification-standard/#data-classification-definitions)の完全な説明を参照してください。 | 個人データまたは非個人データ | 個人データの処理の承認を得るために法務プライバシーチームと連携してください | [個人データ取り扱いセクション](/handbook/enterprise-data/data-governance/data-management/#personal-data-handling)を参照してください |
| センシティブ個人データ | 人種/民族・健康または医療情報・生体認証または遺伝データ・宗教・政治的所属または哲学・性的志向・刑事犯罪・市民権/移民・または労働組合に関連するデータ。 | センシティブ個人データまたは非センシティブ個人データ | プライバシー法規制は、限られた状況を除いてこれらの種類のデータ要素の処理を禁止しています。個人データの処理の承認を得るために法務プライバシーチームと連携し、センシティブ個人データが GitLab チームメンバーに関連する場合は People Operations を含めてください | 法的ガイダンスによって異なります。必要に応じて[マスキング](/handbook/enterprise-data/platform/dbt-guide/#sensitive-data)（静的または動的）を使用できます。 |

### 個人データ取り扱い

個人データ（PII）はエンタープライズデータプラットフォーム全体で特別な取り扱いが必要です。個人データの管理方法を以下の原則で指導します:

* **データ最小化**: 特定のビジネス目的に必要でない限り、データプロダクトに個人データを含めないでください。
* **動的マスキング**: Snowflake の `PREP` および `PROD` レイヤーの個人データフィールドには常に[動的マスキングポリシー](/handbook/enterprise-data/platform/dbt-guide/#sensitive-data)を適用してください。
* **統一されたアプローチ**: すべての個人データ（GitLab チームメンバーデータと外部ユーザー/顧客データの両方）を同じ最高の感度基準で取り扱ってください。従業員と外部ユーザーの PII の区別を作らないでください。これはコンプライアンスと実装を複雑にします。
* **公開データの例外**: 以下のチームメンバーデータ要素は単独では公開データであるためマスキングを必要としません: チームメンバーの名前・業務用メールアドレス・GitLab ユーザー名。ただし、これらの要素が他のデータと組み合わせられた場合（例: イベント出席のためのチームメンバー名 + 場所、またはユーザー名 + MR レスポンスタイム）、個人データとなりマスクが必要です。
* **権限の整合**: 動的にマスクされた個人データのアクセス権限は、可能な限り基礎となるデータソースの権限を反映するべきです。これは、ビジネス機能ごとにマスキングロールを持つことを意味します（例: マーケティング個人データ・Sales 個人データ・ピープルチーム個人データ）。チームメンバーは通常のアクセスリクエストプロセスを通じてこれらへのアクセスをリクエストできます。

### 一般的なデータセキュリティコントロール

* データコントロールを定義する目的において、エンタープライズデータプラットフォームは [Tier 1 システム](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/)です。
* `重要`: [顧客のプライベート RED データ](/handbook/security/policies_and_standards/data-classification-standard/#red)はエンタープライズデータプラットフォームへの永続的な保存が禁止されています。

| コントロール | RED | ORANGE | YELLOW |
| :-- | :-- | :-- | :-- |
| **一般的なデータコントロール** | | | |
| データレジストリ登録  | 必須 | 必須 | 推奨 |
| 保管時の暗号化 | 必須 | 必須 | 必須 |
| 転送時の暗号化 | 必須 | 必須 | 必須 |
| プライバシーレビュー | 必須 | 推奨 | 不要 |
| データ保持手順 | 必須 | 推奨 | 不要 |
| **データインフラコントロール** | | | |
| 多要素認証 | 必須 | 必須 | 必須 |
| ロールベースアクセス | 必須 | 必須 | 必須 |
| アクセスログ | 必須 | 必須 | 推奨 |
| **データウェアハウスコントロール** | | | |
| 四半期ごとの Snowflake ユーザー監査 | 必須 | 必須 | 必須 |
| 四半期ごとの SiSense ユーザー監査 | 必須  | 必須 | 必須 |
| 四半期ごとの変更管理レビュー | 必須  | 推奨 | 不要 |
| 四半期ごとの RED データスキャナー | 必須 | 該当なし | 該当なし |
| **エンドポイントデバイス** | | | |
| マルウェア対策 | 必須 | 必須 | 必須 |
| フルディスク暗号化 | 必須 | 必須 | 必須 |
| 四半期ごとのデータパージ | 必須 | 必須 | 必須 |

* **データインフラ**: データウェアハウスの一部としてデータにアクセスまたは処理し、エンドユーザーにデータを提供するシステムを含みます。
* **データウェアハウスコントロール**: エンタープライズデータウェアハウスは Tier 1 システムです。
* **エンドポイントデバイス**: データウェアハウスにアクセスできるすべてのエンドポイントは Tier 1 に分類されます

### 四半期ごとのデータヘルス＆セキュリティ監査 {#quarterly-data-health-and-security-audit}

**四半期ごとの監査**では、適切な人に正しいデータアクセス権限が設定され、データパイプラインが正常に動作していることなどを確認し、システムのセキュリティを検証します。監査結果は Security Assurance のユーザーアクセスレビューに活用します。

以前は監査の大部分を手作業で行っていました。現在は公開プロジェクト [gitlab-data/extract](https://gitlab.com/gitlab-data/extract) で自動化しており、このプロジェクトがチェック内容の唯一の情報源です。DAG が四半期ごとに自動で実行されて Issue を作成するため、担当者が監査の開始を覚えておく必要はありません。その後、チームメンバーが作成された Issue に対して quarterly-audit スキルを手動で実行し、各チェックの最終判断は人が行います。チェック内容は随時変わるため、ここには列挙していません。現在の内容は下記のチェックフォルダーで確認してください。

1. 四半期ごとに、[`quarterly_audit` DAG](https://gitlab.com/gitlab-data/extract/-/blob/main/dags/general/quarterly_audit.py) が[四半期監査スクリプト](https://gitlab.com/gitlab-data/extract/-/blob/main/extract/audit/quarterly/scripts/quarterly_audit.py)を実行します。スクリプトは機密の親 Issue を 1 件と、チェックごとに子 Issue を 1 件作成します。
1. チームメンバーが、作成された Issue に対して [quarterly-audit スキル](https://gitlab.com/gitlab-data/extract/-/tree/main/agents/skills/quarterly-audit)を手動で起動します。このスキルは担当者とともに子 Issue を順に確認し、最終判断は担当者が行います。自動処理がアクセス権を取り消したり、アカウントを無効化したり、テーブルを削除したりすることはありません。

参照先

* [監査の README](https://gitlab.com/gitlab-data/extract/-/blob/main/extract/audit/quarterly/README.md)には、監査の実行方法が記載されています。
* [チェックフォルダー](https://gitlab.com/gitlab-data/extract/-/tree/main/extract/audit/quarterly/checks)には、各チェックに使うすべてのクエリと手順があります。

非公開のランブックには、誰をメンションするか、機密性の高いクエリなど、機密情報のみを記載しています。その他の情報はすべて公開の extract プロジェクトにあります。四半期ごとの監査に関連するすべての Issue とマージリクエストには、`~"Quarterly Data Health and Security Audit"` ラベルを使用します。

## 例外

この手順の例外は、[情報セキュリティポリシー例外管理プロセス](/handbook/security/controlled-document-procedure/#exceptions)に従って追跡されます。

## 参照

* [コントロールドキュメント手順](/handbook/security/controlled-document-procedure/)
