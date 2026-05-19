---
stage: enablement
group: Tenant Scale
title: 'Cells: 探索'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/impacted_features/explore/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-09-24T17:43:06+00:00"
---


{{% alert %}}
このドキュメントは作業中であり、Cells 設計の非常に初期の状態を示しています。重要な側面はまだ文書化されていませんが、今後追加する予定です。これは Cells に対して考えられるアーキテクチャの一つであり、どのアプローチを実装するかを決定する前に代替案と比較検討する予定です。このアプローチを実装しないと決定した場合でも、そのアプローチを選ばなかった理由を記録するため、このドキュメントは保持されます。
{{% /alert %}}


Explore（探索）は現在の GitLab では重要な役割を果たしていない可能性がありますが、現在の GitLab は分離されていません。分離があるからこそ、Explore または何らかの実行可能な代替手段が必要です。

既存のグループとプロジェクトの Explore は最初は Organization にスコープされます。ただし、特にオープンソースプロジェクトの発見というコンテキストにおいて、パブリックなグループとプロジェクトの発見可能性をサポートするために、Organization をまたいだグローバルな Explore が必要です。ユーザーフィードバックは [こちら](https://gitlab.com/gitlab-org/gitlab/-/issues/21582#note_1458298192) と [こちら](https://gitlab.com/gitlab-org/gitlab/-/issues/418228#note_1470045468) を参照してください。

## 1. 定義

Explore 機能は、ユーザーがグループとプロジェクトを発見するのに役立ちます。未認証ユーザーはパブリックなグループとプロジェクトのみを探索できます。認証済みユーザーは、プライベートおよびインターナルのグループとプロジェクトを含む、アクセスできるすべてのグループとプロジェクトを閲覧できます。

## 2. データフロー

## 3. 提案

Explore 機能の問題は、Cell 間通信の解決という広い課題の下に含まれます。[このトピックはより深い調査が必要です](../_index.md#can-different-cells-communicate-with-each-other)。

以下はさらなる調査のための可能な方向性です。

### 3.1. 読み取り専用テーブルミラー

- 共有クラスター全体のデータベースに `shared_projects` テーブルを作成します。
- このテーブルのモデルは読み取り専用です。挿入/更新/削除は許可されません。
- テーブルはプロジェクト Cell ローカルテーブルからのデータ（またはデータのサブセット）で充填されます。
  - 書き込みモデル Project（Cell ローカル）はローカルデータベースに書き込みます。Cell ローカルのものはすべてこのモデルを主に使用します。
  - このデータは何かが変更されるたびにバックグラウンドジョブによって `shared_projects` と同期されます。
  - `shared_projects` 内のデータは正規化されて保存され、プロジェクト Explore を表示するために必要なすべての情報がそこに含まれます。
- プロジェクト Explore（現在の状態）は Organization/グループにスコープされていないインスタンス全体の機能の一部です。
  - このセクションは `shared_projects` の読み取りモデルを使用してデータを読み取ります。
- ユーザーがプロジェクトをクリックすると、Organization を含む Cell にリダイレクトされます。

デメリット：

- インスタンス全体のデータにアクセスするための明示的なパターンが必要です。ただし、これは管理機能にも役立つ可能性があります。
- プロジェクト Explore は現在ほど機能が豊富でない可能性があります（さまざまなフィルタリングオプション、そのプロジェクトでの役割など）。
- CQRS を管理する余分な複雑さ。

### 3.2. Organization にスコープされた Explore

プロジェクト Explore とグループ Explore は Organization にスコープされます。

デメリット：

- グループとプロジェクトのグローバルな発見可能性がありません。

## 4. 評価

既存のグループとプロジェクトの Explore は最初は Organization にスコープされます。[Explore 機能の現在の使用状況](https://gitlab.com/gitlab-data/product-analytics/-/issues/1302#note_1491215521) を考慮すると、これは許容できると判断します。既存のすべてのユーザー、グループ、プロジェクトは最初はデフォルト Organization の一部になるため、グループとプロジェクトは現在と同様に探索・アクセスできます。既存のグループとプロジェクトがデフォルト Organization から別の Organization に移動されて初めて、これが顕著な問題になります。これを軽減するための解決策は [Issue #418228](https://gitlab.com/gitlab-org/gitlab/-/issues/418228) で議論されています。最終的には、Explore はより優れた検索体験で完全に置き換えられる可能性があります。

## 4.1. メリット

- 当初は発見可能性の欠如は問題になりません。
- [月次で Explore 機能を使用している既存ユーザーは全体の約 1.5% のみ](https://gitlab.com/gitlab-data/product-analytics/-/issues/1302#note_1491215521) です。

## 4.2. デメリット

- GitLab が所有するトップレベルグループは、最初に独自の Organization に移動されるものの一つになり、デフォルト Organization の探索可能性から切り離されます。
