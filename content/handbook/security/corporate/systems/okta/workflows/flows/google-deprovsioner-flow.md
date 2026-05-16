---
title: Google Workspace Deprovisioner
upstream_path: /handbook/security/corporate/systems/okta/workflows/flows/google-deprovsioner-flow/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-11-01T18:42:22+00:00"
---

## 概要

Google Workspace Deprovisioner は、[Okta Workflows](https://help.okta.com/wf/en-us/content/topics/workflows/workflows-main.htm) ("OWF") で構築された一連のフローで構成されています。これらのフローは、Google Workspace ユーザーアカウントをデプロビジョニングするための一貫した自動化プロセスを提供するために作成されました。

このデプロビジョナーは 2 つの異なる部分から構成されています。

### 初期オフボーディング

Slack のスラッシュコマンドによりオフボーディングがトリガーされたときに、Google Workspace ユーザーに対して以下のアクションが実行されます。

- ユーザーをすべての Web およびデバイスセッションからサインアウトさせ、サインインクッキーをリセットします。
- ユーザープロファイルを更新します
  - パスワードをリセット
  - グローバルアドレスリストから削除
  - 復旧用メールを削除
  - 復旧用電話番号を削除
  - `/Former Team Members` 組織単位へ移動
- モバイルデバイスから企業の Google Workspace データをリモートワイプします
- アクセストークン (OAuth トークン) を削除します
- アプリケーション固有パスワード (ASP) を削除します
- 検証トークンを削除します
- Google グループからユーザーメンバーシップを削除します
- ユーザーの Gmail に休暇自動返信を作成・設定します
- マネージャーを Gmail の代理人にします
- 転送リクエストを作成し、以下のデータをユーザーのマネージャーに転送します
  - Google Drive
  - Google Calendar

### 90 日後のオフボーディング

Google Workspace で既にオフボード済みのユーザーに対して、90 日後に以下のアクションが実行されます

- ユーザープロファイルを更新します
  - `/No Google License` 組織単位へ移動
- すべてのユーザーエイリアスを削除します
- ユーザーをサスペンドします

## 使い方

### 初期オフボーディング

初期オフボーディングをトリガーするには、Google Deprovisioner Slack アプリに関連付けられた以下の Slack スラッシュコマンドを使用します。

`/google-offboard <user email>`

**注:** Slack スラッシュコマンドは Corporate Security チームの限られたメンバーのみが利用できます。
{: .note}

トリガーが成功すると、オフボーディングが開始される前に `one moment...processing request for <user email>` という Slack メッセージが表示されます。

Google Deprovisioner アプリによって Slack スレッドが開始され、オフボーディングの一環として実行されたすべてのアクションが含まれます。各アクションの結果に対するステータスとメッセージが返されます。

完了すると Google Deprovisioner はスレッドを更新し、オフボーディングが成功したかどうかを報告します。

### 90 日後のオフボーディング

90 日後のオフボーディングは、90 日経過後に自動的にトリガーされます。Google Deprovisioner は 1 日に 1 回実行され、すべての過去のオフボードのステータスを確認し、90 日後のオフボーディングを実行する必要があるかを判定します。リマインダーは 60 日、83 日、90 日のマークでユーザーのマネージャーに送信されます。

## アーキテクチャ

Google Workspace deprovisioner は以下のコンポーネントで構成されています

{{% alert title="Note" color="primary" %}}
以下のドキュメントは、Okta Workflows に関するある程度の経験と実用知識を前提としています。
{{% /alert %}}

### フロー

 Google Workspace deprovisioner は異なるタイプのフローで構成されています。それらは各フロー名の冒頭にある `Type` で定義されます。例: `Orchestrator - Google Workspace - Offboarding` の `Orchestrator`。

- **Trigger**
  - Google Workspace Deprovisioner をトリガーするフロー。Trigger フローには、スケジュール実行、Slack スラッシュコマンド、デリゲートフロー、またはユーザーやシステムによって開始されるその他のフローが含まれます。これらのフローは Orchestrator フローを開始するためにトリガーされる必要があります。
- **Orchestrator**
  - Google Workspace デプロビジョニングの一環として、すべてのさまざまなアクションとイベントをオーケストレートするフロー。
  - Orchestrator フローは通常、複数のアクション、通知、ロギングフローで構成されます。
- **Action**
  - デプロビジョニングの一環として特定のアクションを処理するフロー。例えば、アクションはユーザーのサインアウト、ユーザープロファイルの更新、トークンの削除、ユーザーグループのリスト取得などを行います。一般に、各アクションは特定の Google Workspace API エンドポイントに対応します (例: Google [Admin SKD API](https://developers.google.com/admin-sdk/reference-overview) の [users.get](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/get))。
- **Notification**
  - デプロビジョニング中に実行されたアクションの結果に基づいて、さまざまなシステムにさまざまな通知を送信するフロー。これには、Slack スレッドへのメッセージ送信や GitLab Issue へのコメント追加などの通知送信が含まれる場合があります。
- **Log**
  - デプロビジョニングの一環としてさまざまなオフボーディングとイベントを記録するフロー。Log フローは、特定のアクションの結果、新しいオフボーディング、オフボーディングへの更新などを記録できます。

#### コネクタ

Google Deprovisioner は事前構築済みのサードパーティコネクタとコネクタビルダーで構築されたカスタムコネクタの組み合わせを使用しています。コネクタは Workflows の接続ページにあります。以下のコネクタが使用されています

- Google Workspace
- Google Workspace Enterprise License Manager
- Google Data Transfer
- Gmail
- Custom Slack

### テーブル

 OWF はネイティブのデータベースサポートを提供していないため、現時点ではログを格納するためにテーブルが使用されています。テーブルは **log** フローによって更新されます。

以下のテーブルが使用されています

- Offboarding
  - 各オフボーディングに関するデータを含みます
- Events
  - オフボーディングの一環として実行された特定のアクションに関するデータを含みます

### Offboarding および Event オブジェクト

Workflows の標準では、Google Deprovisioner を構成するさまざまなフロー間で大量のデータをやり取りする必要があります。すべての異なるフロー間で情報のやり取りを容易にするため、デプロビジョナーは 2 つの標準化された JSON オブジェクトを使用しています。

#### Offboarding オブジェクト

Offboarding オブジェクトには、特定のオフボーディングに関連するすべての情報が含まれます。これには `user` (`manager` を含む)、`actor`、`status` 情報が含まれます。Offboarding オブジェクトは、デプロビジョニングプロセス中に各 Action、Notification、Log フローに渡されます。

- `id`: 各オフボーディングを識別するために使用される一意の識別子。フローの `execution id` から派生
- `user`: オフボードされているユーザーの関連プロファイルデータを含む
  - user にはユーザーの `manager` に関するプロファイルデータも含まれる
- `actor`: オフボーディングをトリガーしたユーザーに関する情報を含む
- `status`: オフボーディングの現在のステータスまたは状態

Offboarding オブジェクトの例は、各 Orchestrator フロー内にあります。

#### Event オブジェクト

Event オブジェクトには、特定のアクションに関連するすべての情報が含まれます。これには以下が含まれます

- `id`: 各アクションイベントを識別するために使用される一意の識別子。フローの `execution id` から派生
- `name`: 各アクションの表示名
- `timestamp`: アクションがトリガーされたときのタイムスタンプ
- `response`: アクションの結果
  - `statusCode`: アクションを実行するために使用された API 呼び出しから返された statusCode
  - `messaege`: アクションを実行するために使用された API 呼び出しから返されたメッセージ
  - `context`: アクション結果に関する追加情報。結果に応じて実行履歴やエラー詳細などが含まれる場合があります。

各 Action フローは実行されるたびに Event オブジェクトを生成します。

### 仕組み

以下は Google Deprovisioner の動作の高レベルな概要です。より詳細な概要については、各フローで提供されるコメントとメモを参照してください。

#### 初期オフボーディング

- **Trigger** - `/google-offboard <user email>`
  - ユーザーが Slack スラッシュコマンドをトリガーし、オフボードするユーザーのメールを含めます
  - メールが提示されているか確認し、Orchestrator フローが必要とする初期の `user` および `actor` データを収集します。
  - Orchestrator フローを開始します。
- **Orchestrator**
  - 最初に提供されたデータから Offboarding オブジェクトを構築します
  - **Log** - 新しいオフボーディングを `initiated` で記録
  - **Notification** - 新しいオフボーディング
  - **Action** - `user` のプロファイルデータを取得
  - **Action** - `manager` のプロファイルデータを取得
  - `user` のプロファイルデータが存在するか確認
    - **存在する場合**
      - **Action** - オフボーディングアクションを実行
        - **Log** - 各アクションの結果を events に記録
        - **Notification** - アクション結果を送信
      - **Notification** - オフボーディング完了
      - **Notification** - マネージャーにオフボーディングについて更新
      - **Log** - オフボーディングを `Completed` で更新
    - **欠損の場合**
      - **Notification** - キャンセルされたオフボーディング
      - **Log** - オフボーディングを `Cancelled` で更新

#### 90 日後オフボーディング

- **Trigger** - `Scheduled`
  - 毎日実行され、すべての過去のオフボーディングのリストを取得します。オフボードからの経過日数が以下の場合
    - `60 日`
      - **Notification** - マネージャーリマインダー
    - `83 日`
      - **Notification** - マネージャーリマインダー
    - `>= 90 日`
      - **Notification** - マネージャーリマインダー
      - オフボーディングデータを収集し、Orchestrator フローをトリガー
- **Orchestrator**
  - オフボーディングデータから Offboarding オブジェクトを構築
  - **Notification** - 新しい 90 日後オフボーディング
  - **Action** - `user` のプロファイルデータを取得
  - **Action** - `manager` のプロファイルデータを取得
  - `user` のプロファイルデータが存在するか確認
    - **存在する場合**
      - **Action** - オフボーディングアクションを実行
        - **Log** - 各アクションの結果を events に記録
        - **Notification** - アクション結果を送信
      - **Notification** - 90 日後オフボーディング完了
      - **Log** - 90 日後オフボーディングを `Completed` で更新
    - **欠損**
      - **Notification** - キャンセルされた 90 日後オフボーディング
      - **Log** - 90 日後オフボーディングを `Cancelled` で更新
