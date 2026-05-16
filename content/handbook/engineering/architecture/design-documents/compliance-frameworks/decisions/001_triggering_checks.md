---
title: "コンプライアンスフレームワーク ADR 001: チェックのトリガー"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/compliance-frameworks/decisions/001_triggering_checks/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-06T20:28:47+00:00"
---

## コンテキスト

私たちは、顧客が特定のルール、標準、規制、ガイドラインを遵守しているかどうかを把握できるコンプライアンスツールを
提供する必要があります。そのためには、業界のソフトウェア開発標準、フレームワーク、規制または法律に関連付けられる
チェックを GitLab 内に作成する必要があります。

## アプローチ

GitLab 内でチェックの概念を作成するために、以下のアプローチを検討しました:

1. [監査イベントをチェックとして使用する](#use-audit-events-as-checks)
1. [監査イベントをチェック作成のトリガーポイントとして使用する](#use-audit-events-as-trigger-points-for-creating-checks)
1. [Sidekiq ワーカーを使用してチェックを作成・更新する](#use-sidekiq-workers-for-creating-and-updating-checks)（選択されたアプローチ）

### 例

「マージリクエストの作成者による承認を防止する」というコンプライアンスチェックがあるとします。
このチェックに準拠するには、ユーザーが自分自身のマージリクエストを承認できないようにする必要があります。

以下に説明する 3 つのアプローチはすべて、ユーザーが自分のマージリクエストを承認できないようにする設定が
変更された際にチェックのステータスが更新されることを保証します。

### 監査イベントをチェックとして使用する {#use-audit-events-as-checks}

このアプローチでは、データベースに保存されている既存の監査イベントを直接チェックとして使用する計画でした。

例として、マージリクエストの作成者による承認を防止するマージリクエスト承認設定が有効になっているとします。
これは、マージリクエストの作成者が自分のマージリクエストを承認できないことを保証します。

コンプライアンス標準遵守ダッシュボードでは、そのコンプライアンスチェックに関連する最後の監査イベントを
直接取得し、コンプライアンスステータスを表示する計画でした。

上記の[例](#例)をさらに理解するために、監査イベントテーブルをクエリして、マージリクエストの作成者による
承認を防止するようにマージリクエスト承認設定を更新した最新の監査イベントを取得することになります。

#### 利点

1. チェックを保存するための新しいデータベーステーブルを作成する必要がない。
1. 監査イベントがコンプライアンス標準への遵守の唯一の情報源となる。

#### 欠点

1. データベースの大規模なサイズにより、監査イベントテーブルへのクエリはすでに非常に遅い。
1. すべての監査イベントが一貫して保存されているわけではないため、`audit_events` テーブルの JSON カラム `details` を
パースしてイベントの詳細を取得する必要がある。
1. 上記の理由から、このアプローチはコンプライアンス標準ダッシュボードの読み込みパフォーマンスが低下する。

### 監査イベントをチェック作成のトリガーポイントとして使用する {#use-audit-events-as-trigger-points-for-creating-checks}

このアプローチでは、チェックの結果を保存するために別のデータベーステーブルを作成する計画でした。

これらのチェックのステータスは、データベーストリガーまたは Active Record コールバックを通じて監査イベントから
導出されます。

上記の[例](#例)をさらに理解するために、新しい監査イベントが作成されるたびに、その監査イベントが
マージリクエスト承認設定の変更に関連しているかどうかを確認します。それに応じてデータベース内のチェックの
ステータスを作成または更新します。

#### 利点

1. このアプローチはイベントベースであるため、監査イベントデータベーステーブルをクエリする必要がない。
1. 監査イベントがコンプライアンス標準への遵守の唯一の情報源となる。
1. チェック作成のロジックが単一の場所に集約されるため、コードの可読性が向上する。

#### 欠点

1. ストリーミングのみの監査イベントを処理するための別のロジックを記述する必要がある。これらの監査イベントは
データベースに保存されないため、そのような監査イベントに対してフックはトリガーされない。
1. 監査イベントの既存のビジネスロジックに変更があった場合、チェックへの変更も必要になる。
1. また、[監査イベントを ClickHouse に移行](https://gitlab.com/groups/gitlab-org/-/epics/10241)する計画もあり、
ClickHouse への移行後にコールバックやデータベーストリガーがどのように機能するかが不明なため、
この機能の再作業が必要になる可能性がある。

### Sidekiq ワーカーを使用してチェックを作成・更新する {#use-sidekiq-workers-for-creating-and-updating-checks}

このアプローチでは、チェックと監査イベントを完全に切り離しました。チェックはバックグラウンドで
Sidekiq ワーカーを通じて作成されます。

これらのワーカーは、関連する設定が切り替えられるたびにエンキューされます。

上記の[例](#例)を考えると、マージリクエスト承認に関連する設定が更新されるたびに、チェックの作成を担当する
Sidekiq ワーカーをエンキューします。Sidekiq ワーカーはバックグラウンドでマージリクエスト承認設定の
更新された値を取得し、データベース内の指定されたプロジェクトのこのチェックの結果を作成または更新します。

#### 利点

1. これはモジュラーなアプローチであり、ビジネスロジックを独立して変更できる。
1. 監査イベントの実装への変更がこれらのチェックに影響しない。

#### 欠点

1. 追加のバックグラウンドワーカーのメンテナンスが必要。Redis の障害が発生した場合にイベントを
見逃す可能性があるが、グループ内のすべてのプロジェクトに対してチェックステータスを
[更新](https://docs.gitlab.com/ee/api/graphql/reference/#mutationrefreshstandardsadherencechecks)するオプションがある。
1. 監査イベントをこれらのチェックの唯一の情報源として使用することはできないが、ユーザーはチェックのステータスを
監査イベントと関連付けることができる。

## 決定

プロジェクトのチェック結果を作成するために Sidekiq ワーカーを使用することが決定されました。

結果を保存するデータベーステーブルは `project_compliance_standards_adherence` で、以下のスキーマを持っています:

 ```mermaid
    classDiagram
        class project_compliance_standards_adherence
        project_compliance_standards_adherence : id bigint
        project_compliance_standards_adherence : created_at timestamp
        project_compliance_standards_adherence : updated_at timestamp
        project_compliance_standards_adherence : project_id bigint
        project_compliance_standards_adherence : namespace_id bigint
        project_compliance_standards_adherence : check_name smallint
        project_compliance_standards_adherence : status smallint
```

`check_name` は Enum で、"prevent_approval_by_merge_request_author"、
"prevent_approval_by_merge_request_committers"、"at_least_two_approvals" などの値を含みます。

`status` は "success" または "fail" の値を取り、プロジェクトに対するそのコンプライアンス遵守チェックの
ステータスを示します。

このテーブルは、コンプライアンス遵守ダッシュボードでプロジェクトのチェックステータスを表示するために
使用されます。
