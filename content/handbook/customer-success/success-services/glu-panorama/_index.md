---
title: GitLab University Panorama
description: Signature Success Tier をご契約のお客様向けに、GitLab University Panorama 専用ラーニングポータルのリクエスト、セットアップ、管理を行うための完全なワークフロー。
upstream_path: /handbook/customer-success/success-services/glu-panorama/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-24T16:10:11+00:00"
---

## GitLab University Panorama とは何か

[GitLab University](https://university.gitlab.com/) は、すべての顧客が無料でセルフサーブで学習できるようオープンになっています。**GitLab University Enterprise** は、**Signature Success Tier** に含まれる、もしくは Education Services を通じて別途購入可能な、専用の管理されたポータルです。社内では、各顧客専用のポータルを **GitLab University Panorama** と呼んでいます。コースコンテンツは公開カタログと同じです。主な相違点は以下のとおりです:

- 顧客ユーザーのための SSO 構成（オプション）
- GitLab University の教材とともにカスタムコンテンツをホスティング
- 顧客固有のレポート機能
- 指定された個人に対する高度なプラットフォーム権限

各 Panorama は CX Platform Engineering チームによってプロビジョニングおよび管理され、[CX intake request form](https://cx-requests-c0b2c7.gitlab.io/) を介してリクエストする必要があります（以下のワークフローを参照）。

## 誰が Panorama をリクエストできるのか

顧客と連携している CX チームメンバーであれば誰でもリクエストを送信できます。

## 誰が対象となるのか

Signature Success ティアの顧客は、GitLab University Enterprise / Panorama の対象となります。

## 顧客から事前に収集する情報

リクエストをオープンする前に、リクエストするチームメンバーは次の情報を収集する必要があります:

1. **認証方式の選好**
   - SSO ログインまたはサイト登録コードのどちらを希望しますか？
   - デフォルト: サイト登録コードと顧客アカウントの作成 — よりシンプルかつ迅速で、IT への依存がありません。
   - SSO:
     - 顧客 IT 部門の関与が必要
     - 顧客は、GitLab University チームと 30 分の構成コールに参加できる IT 担当者の名前を提供する必要があります
     - 使用している SSO プロバイダー（Okta、Microsoft Entra、その他）を把握しておく
     - SSO のスケジュール調整は、顧客 IT 部門の対応可能時期によって、全体のセットアップタイムラインを延長する可能性があります。
2. **認定資格バウチャー**
   - 顧客は何枚の認定資格バウチャーを購入しましたか（該当する場合）？
   - 登録コードを持っていますか？
3. **カスタマイズの選好**
   - コンテンツの除外: 公開 GitLab University カタログから除外するコンテンツはありますか？
   - カスタムコンテンツのアップロード: アップロードする顧客提供のコンテンツはありますか？
4. **レポートのニーズ**
   - 顧客の GLUE 管理者の Email（必須）: レポートダッシュボード（ユーザー登録、コース完了、アクティブユーザー、採用活動など）にアクセスするために、顧客には管理者アカウントが必要です。レポートアクセスを必要とする顧客ステークホルダーの Email アドレスを収集し、リクエスト Issue に含めてください。

## Panorama のリクエスト方法

1. **顧客の詳細を収集する**
   上記の事前情報をすべて収集します。

2. **インテークフォームでリクエストを送信する**
   [CX intake request form](https://cx-requests-c0b2c7.gitlab.io/) にアクセスし、以下を行います:
   - GitLab アカウントでサインインします
   - リクエスト概要を次の形式で入力します: `GitLab University Enterprise Request - <Customer Name>`
   - フォームは自動的に Panorama リクエストを検出し、タイトルに基づいてテンプレートに値を入力します
   - 右側パネルに以下が表示されます:
     - **提案された宛先:** CX-Platform-Engineering
     - **ルーティング信頼度:** システムがルーティングにどれだけ自信を持っているか
     - **マッチしたキーワード:** Panorama 検出をトリガーした内容
     - **事前選択されたラベル:** GitLab-University と Panorama
     - **Issue テンプレートのプレビュー:** リクエストをガイドするための 4 ステップフォーム

3. **4 ステップのテンプレートを完成させる**
   以下を記入します:
   - **Step 1:** あなたの詳細と顧客情報
   - **Step 2:** ポータル作成の理由
   - **Step 3:** カスタマイズの選好:
     - 公開カタログから除外するコンテンツ
     - アップロードするカスタムコンテンツ
     - レポートダッシュボードへのアクセス（登録、完了、採用活動などの利用分析にアクセスする必要がある顧客ステークホルダーの Email アドレスを提供）
     - 認証方法（SSO またはサイト登録コード）
   - **Step 4:** 管理者チェックリスト（承認後に GitLab University チームが完了）

4. **緊急度レベルを選択する**
   リクエストに適切な緊急度を選択します:
   - **Standard:** SLA 2 週間 — 通常の優先度、他のリクエストとともにキューに入る
   - **Expedited:** SLA 1 週間 — より高い優先度、キューの先頭に移動
   - **Critical:** SLA 48 時間 — 即時対応が必要なビジネスクリティカルな Issue

   *SLA 時間はチームからの初回応答の見積もりです。複雑なリクエストは完全な解決までに追加時間が必要な場合があります。*

5. **送信して進捗を追跡する**
   - 送信をクリックして CX-Platform-Engineering プロジェクトに Issue を作成します
   - その Issue を記録のシステムとして使用します
   - Issue を以下で更新し続けます:
     - GitLab University チームからのステータスアップデート
     - プロビジョニング後のライブ Panorama へのリンク
     - SSO 構成コールからのメモ

6. **継続的なアカウント管理のためのドキュメント化**
   - Panorama の URL と主要な詳細（認証方法、メインの学習パス、レポートオーナー）を以下に追加します:
     - 顧客の Gainsight C360、および/または
     - GitLab 上の顧客コラボレーションプロジェクト

## 顧客がアクセスを取得した後

### 初期ロールアウト

- 顧客固有のウェルカムワンページャー（GitLab University チームから提供）を共有
- 認定資格バウチャーとその使用方法をリマインド
- 目標に沿った学習パスを推奨

### 継続的なエンゲージメント（少なくとも四半期ごと）

顧客と Panorama の利用状況をレビューして:

- 採用、コース完了、認定資格進捗を追跡
- 未使用のバウチャーを特定し、有効期限をハイライト
- 現在のイニシアチブや製品アップデートに基づく新しい学習パスを提案

## サポートを受ける

### GitLab チームメンバー向け

- **Panorama 関連のリクエスト**（新しいポータル、コンテンツ変更、構成更新、レポートアクセス）については、[CX intake request form](https://cx-requests-c0b2c7.gitlab.io/) を使用してください。これにより、リクエストが正しくルーティングおよび追跡されることが保証されます。
- 顧客 Panorama に固有ではない **プラットフォームのバグや機能リクエスト** については、GitLab University プロジェクトに Issue をオープンしてください:
  [GitLab University issues](https://gitlab.com/gitlab-com/customer-success/digital-success/platform/gitlab-university/-/work_items?type=ISSUE&initialCreationContext=list-route)

### 顧客向け

- 顧客は university@gitlab.com に Email を送信して、Panorama に関するヘルプを GitLab University チームに直接連絡できます

## カスタムコンテンツのアップロードをリクエストする

既存の Panorama に顧客固有のコンテンツをアップロードするには:

1. [CX intake request form](https://cx-requests-c0b2c7.gitlab.io/) を介してリクエストを送信
2. リクエストに以下を含める:
   - 顧客名と Panorama 名
   - コンテンツのタイトル
   - 短い説明（対象、目的、表示する場所）
   - アップロードするファイル（または適切な場合はリンク）

**目標 SLA**: 完全な情報を受信してから 3 営業日

**注意:** GitLab University チームは顧客固有のコンテンツをアップロードしますが、コースが更新されたときのメンテナンス負担のため、カスタム学習パスは作成しません。

## 既存の Panorama に管理者を追加する

初期 Panorama セットアップ後に顧客をレポート管理者として追加するには:

1. [CX intake request form](https://cx-requests-c0b2c7.gitlab.io/) を介してリクエストを送信
2. リクエストに以下を含める:
   - 顧客名と Panorama 名
   - レポートアクセスを必要とする顧客ステークホルダーの Email アドレス
3. GitLab University チームは 5 営業日以内に管理者アクセスをプロビジョニングします

管理者は、ユーザー登録、コース完了、アクティブユーザー、採用活動など、GitLab University Enterprise で利用状況レポートとダッシュボードを表示できます。

## 顧客にとっての GitLab University の価値

- どのような規模のチームでも利用できる、スケーラブルでセルフサーブな学習
- DevOps と CI/CD、セキュリティ、AI Duo などのフォーカスエリアごとに整理された GitLab University コンテンツへのアクセス
- 短期コース、ハンズオンラボ、認定資格の組み合わせ
- 利用状況と完了に関する顧客固有のレポート
- 同じポータル内に顧客所有のコンテンツを含める機能
- 組織全体で使用されるすべての GitLab 教育のための 1 つの集中管理されたハブ

## エスカレーションパス（社内）

ブロッカーや重要な Issue に遭遇した場合:

1. **GitLab Issue をオープン** GitLab University プロジェクトに、以下のタグを付けます:
   - `@khokanson`
   - `@p_luong`
2. **Slack でエスカレーション**:
   - `#digital-success` に以下を含めて投稿します:
     - Issue へのリンク
     - ブロッカーの簡単な要約
   - タグ:
     - `@khokanson`
     - `@p_luong`
     - `@nfrye`
