---
title: Zendesk のオートメーション、トリガー、マクロ、ビューなどに関する作業
description: "Zendesk のオートメーション、トリガー、マクロ、ビューなどに対して、どのように協働して変更を行うか。"
category: Zendesk
upstream_path: /handbook/support/workflows/working-on-zendesk-content/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T05:00:00Z"
translator: claude
stale: false
---

## 一般的なプロセス

Customer Support Operations チームが管理している項目について、サポートエンジニアが貢献しやすくするために、一部の項目はデータとコードが分離されています。このアプローチにより、Zendesk のビュー、マクロ、トリガー、オートメーションへの提案された変更すべてを Customer Support Operations が確認する必要がなくなります。

Zendesk のビュー、マクロ、トリガー、オートメーションのコンテンツに対する **変更** については、まずその影響を考慮してください。あなたの変更がタイポ修正やリンクの更新を超えており、チームへの広範な影響がある場合は、[GitLab Support での変更管理](/handbook/support/managers/change-management/)ハンドブックページを参照してください。それ以外であれば、関連する管理対象コンテンツプロジェクトでマージリクエスト経由で変更を直接提案できます。

**新規コンテンツの作成や既存コンテンツの名前変更**（例: 新しいマクロや、ビューの名前変更）については、Customer Support Operations がこれらのアクションを処理する必要があるため、STM Issue が必要です。管理対象コンテンツプロジェクトでは、既存項目のコンテンツ管理のみが許可されています。

### 管理対象コンテンツプロジェクト

該当するプロジェクトを参照し、変更を加えたマージリクエストを作成してください。

- [gitlab-com/support/zendesk-global/automations](https://gitlab.com/gitlab-com/support/zendesk-global/automations)
- [gitlab-com/support/zendesk-global/macros](https://gitlab.com/gitlab-com/support/zendesk-global/macros)
- [gitlab-com/support/zendesk-global/triggers](https://gitlab.com/gitlab-com/support/zendesk-global/triggers)
- [gitlab-com/support/zendesk-global/views](https://gitlab.com/gitlab-com/support/zendesk-global/views)
- [gitlab-com/support/zendesk-us-government/automations](https://gitlab.com/gitlab-com/support/zendesk-us-government/automations)
- [gitlab-com/support/zendesk-us-government/macros](https://gitlab.com/gitlab-com/support/zendesk-us-government/macros)
- [gitlab-com/support/zendesk-us-government/triggers](https://gitlab.com/gitlab-com/support/zendesk-us-government/triggers)
- [gitlab-com/support/zendesk-us-government/views](https://gitlab.com/gitlab-com/support/zendesk-us-government/views)

軽微な変更を直接提案する場合でも、RFC の議論を経た大きな変更を提案する場合でも、サポートマネージャーをレビュアーとしてタグ付けし、変更のマージを依頼してください。これらのプロジェクトのいずれかで変更がマージされると、プロジェクト概要ページの `Sync Stage` バッジが `Awaiting Deployment` と表示されているのに気づくでしょう。これは、次回の通常デプロイメントでロールアウトされる変更がプロジェクト内にあることを示しています。

#### 四半期監査

各四半期の開始時に、sync リポジトリ内でスクリプトが実行され、「孤児」の管理対象コンテンツファイル（つまり、対応する Zendesk アイテムを持たないファイル）をチェックします。これらが存在する場合、Support Team Meta プロジェクトに Issue が作成されます（対応する CODEOWNERS ファイルにリストされたグループ／個人にメンションを送ります）。

これらの目的は、使用されていないファイルを削除するか、または「孤児」として報告されているがまだ使用されている必要があるファイルについて Customer Support Operations に Issue を提起することです。

#### マクロ

- マクロの文言を編集したい場合は、リポジトリ（Zendesk Global または Zendesk US Government）に MR を作成します。
- 文言以外の変更（名前変更、オプションの追加／削除など）を行いたい場合は、[このテンプレート](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?issuable_template=Feature)を使用して Customer Support Operations チームへの機能リクエストを作成します
- マクロを非アクティブ化したい場合は、[このテンプレート](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?issuable_template=Feature)を使用して Customer Support Operations チームへの機能リクエストを作成します
- 「シンプル」なマクロを作成したい場合は、対応する Zendesk インスタンスの Zendesk 内部フォームを使用します:
  - [Zendesk Global](https://gitlab-internal.zendesk.com/hc/en-us/requests/new?ticket_form_id=22784239213084&tf_22783439650716=custsuppops_ir_category_create_macro)
  - [Zendesk US Government](https://gitlab-federal-internal.zendesk.com/hc/en-us/requests/new?ticket_form_id=41826926738708&tf_41825819758484=custsuppops_ir_category_create_macro)
  - **注**
    - 新しいマクロ名は、Zendesk で見られる `::` を使ったフォーマットに従う必要があります。たとえば、`Support/SaaS/GitLab.com/Abuse/Identity Verification Request` Accepts は `Support::SaaS::GitLab.com::Abuse::Identify Verification Request Accepts` となります。
    - 管理対象コンテンツファイルが必要な場合（`Public` または `Internal` コメントが使用されると選択した場合）、オートメーションがプレースホルダーファイルを作成します（そのファイルが存在しない場合）。最も迅速な解決のためには、チケット送信前に管理対象コンテンツファイルを作成 *しない* ことが最善です。
- 「アドバンスド」なマクロを作成したい場合は、[このテンプレート](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?issuable_template=Feature)を使用して Customer Support Operations チームへの機能リクエストを作成します
  - **注** 大きな遅延を避けるため、リクエストを提出する前に管理対象コンテンツファイルを作成することが必要です
- マクロについて議論する（ただし実際にアクションは取らない）場合は、support-team-meta Issue を使用します。

#### シンプルなマクロとアドバンスドなマクロ

シンプルなマクロとは、以下のみを変更するものです:

- チケットアサイン（またはその解除）
- チケットへのタグ追加
- チケットへの公開または非公開コメントの追加
- チケットのステータス変更

これらを超える内容は「アドバンスド」マクロとなります。

#### 組織

Zendesk 組織への一部の変更は、対応する Zendesk インスタンスの Zendesk 内部フォームを使用して行えます:

- [Zendesk Global](https://gitlab-internal.zendesk.com/hc/en-us/requests/new?ticket_form_id=22784239213084)
- [Zendesk US Government](https://gitlab-federal-internal.zendesk.com/hc/en-us/requests/new?ticket_form_id=41826926738708)

許可されている変更内容は次のとおりです:

- プロジェクト共同作業 ID の追加または削除
- ASE の追加または削除（サポートリーダーシップのみ）

Global 組織のノートに変更を加えるには、[Zendesk Global Organizations プロジェクト](https://gitlab.com/gitlab-com/support/zendesk-global/organizations)を使用して組織のノートを変更します。

US Government 組織については、すべての組織ノートが Customer Support Operations チームによって手動で管理されます。組織の機密性が高いため、変更を加える際は Slack 経由で Customer Support Operations チームに連絡してください。

## 変数置換のプレビュー

[liquid 変数](https://support.zendesk.com/hc/en-us/articles/4408886858138-Zendesk-Support-placeholders-reference)を使用する際、期待どおりに動作することを確認するのが有用な場合があります。これを行う簡単な方法は、テストチケットを作成し、オートメーション、トリガー、またはマクロのコンテンツをそこに貼り付けて結果を観察することです。
