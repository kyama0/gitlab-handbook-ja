---
title: トライアルのオーナーシップとコラボレーションフレームワーク
description: "Growth と Fulfillment/Monetization にまたがるトライアル作業の概念的なオーナーシップモデルと意思決定フレームワーク"
upstream_path: /handbook/engineering/development/growth/trials-ownership/
upstream_sha: e48b48a5e8c7635a5993b5836c0ca253812429d2
lastmod: "2026-07-03T00:57:12+00:00"
translated_at: "2026-07-06T06:22:10+09:00"
translator: codex
stale: false
---

## 概要

このページでは、GitLab におけるトライアル作業について、**誰が何を所有するか**、および関係するチームがどのようにコラボレーションするかを定義します。概念的なオーナーシップモデル（どのチームがトライアル体験のどの部分に説明責任を持つか）と、CustomersDot などの共有コードベースにコントリビュートするための実践的な意思決定フレームワークの両方を扱います。

トライアルはこれまでも複数のコードベース（GitLab と CustomersDot）にまたがり、複数のお客様状態（新規見込み顧客と既存の有料顧客）に対応してきました。長年の間に変化してきたのは、*どのチームがどの部分を所有するか*であり、ある時期にはそれが 1 つのチーム内に十分明確に収まっていたため、文書化されたモデルは不要でした。もはやそうではありません。オーナーシップは Growth と Fulfillment/Monetization に分かれており、トライアルのコードベースは Fulfillment/Monetization 配下へ集約されつつあります。これにより、新規と既存を含むすべてのトライアルタイプが 1 つの屋根の下に置かれます。このページでは、その境界線を明確にします。

このフレームワークは、CustomersDot におけるトライアル作業で Growth の独立性を実現する取り組み（[Epic #20063](https://gitlab.com/groups/gitlab-org/-/epics/20063)を参照）を土台にしています。目的は、Growth が所有するトライアルのエントリーポイントで素早く動けるようにしつつ、Fulfillment/Monetization が基盤となるトライアルコードベース、請求、プロビジョニングインフラストラクチャを所有し、維持することです。

## 概念的なオーナーシップモデル

オーナーシップは、単一のリポジトリではなく、**チームが何に説明責任を持つか**に沿って分かれます。オーナーシップを決める軸は 2 つあります。トライアル体験の*レイヤー*（エントリーポイントかコードベースか）と、*お客様状態*（新規見込み顧客か既存の有料顧客か）です。

### 基本原則: エントリーポイントとコードベース

| 領域 | オーナー | 含まれるもの |
| --- | --- | --- |
| **トライアルのエントリーポイント** | Growth | ユーザーをトライアルへ*入れる*ための接点。GitLab（アプリケーション）では、登録とトライアルサインアップフロー、リード獲得、プロダクト内のトライアル CTA とアップグレードプロンプト、トライアル関連の実験、オンボーディング、トライアル開始に関するメッセージング。CustomersDot では、**トライアルのエントリーエンドポイントとその基本的なコントローラー配線**、つまりトライアルリクエストを受け取り、基盤となるトライアルシステムへ引き渡す薄いレイヤー。 |
| **トライアルコードベース** | Fulfillment / Monetization | 開始後のトライアルを*実行する*、エントリーレイヤーより深いすべてのもの。トライアル作成、エンタイトルメント、トライアルの状態とライフサイクル、プロビジョニング、請求連携、およびすべてのトライアルタイプを支える共有 CustomersDot サービスとデータ。 |

Growth は、トライアルを開始する薄い CustomersDot エントリーレイヤーを含め、**関心を開始済みトライアルに変えること**に説明責任を持ちます。Fulfillment/Monetization は、トライアルが開始された後に**トライアルが実際に機能すること**、つまりエントリーポイントの背後にあるプロビジョニング、エンタイトルメント、請求、ライフサイクルシステムと、そのコードの長期的な健全性に説明責任を持ちます。

CustomersDot 内の境界線は深さです。Growth はトライアルの**エントリーエンドポイントと基本コントローラー**を所有します。リクエストがトライアル作成、プロビジョニング、エンタイトルメント、請求、または共有サービスに入った瞬間から、それは Fulfillment/Monetization の領域です。変更がその境界線のどちら側にあるか迷う場合は、下記の[意思決定フレームワーク](#decision-framework)を使ってください。

このオーナーシップ分割は、エントリーレイヤーを*構築する*ことに適用されます。**Growth が構築または変更する可能性がある薄いエントリーレイヤーを含め、CustomersDot 全体の運用サポート、インシデント、オンコールは Fulfillment/Monetization に残ります**（[エンジニアリングエクセレンスと継続的なオーナーシップ](#engineering-excellence-and-sustaining-ownership)を参照）。

より深いトライアルコードベースを Fulfillment/Monetization 配下に集約することで、新規見込み顧客向けトライアル、有料顧客向けのアドオン／拡張トライアル、将来のあらゆるトライアルバリアントなど、すべてのトライアルタイプの*実装*を、複数チームに分散させるのではなく 1 つのチームが所有します。トライアルの*エンタイトルメント*は具体的には Fulfillment の Entitlements 領域に属し、すべてのトライアルのエンタイトルメントをサポートします。

### お客様状態: 新規見込み顧客と既存の有料顧客

トライアルは 2 つの異なるお客様状態に対応しており、これが歴史的に Growth と Fulfillment の作業の境界線になってきました。

- **新規見込み顧客向けトライアル** — まだ有料顧客ではないユーザーまたは組織が、トライアルを通じて GitLab を評価します。Growth はエントリーポイント（獲得、サインアップ、活性化、有料化へのコンバージョン）を所有します。トライアルをプロビジョニングして実行するトライアルコードベースは Fulfillment/Monetization が所有します。
- **既存の有料顧客向けトライアル** — 既存の有料顧客が、アドオン、上位ティア、または追加機能をトライアルします（たとえば、有効なサブスクリプションの上で機能をトライアルする場合）。ここでのエントリーポイントは、プロダクト内の拡張やアップグレードの接点に近いものです。プロビジョニング、エンタイトルメント、請求への影響は Fulfillment/Monetization が所有します。

両方の状態に共通する一貫したルールは、**Growth はトライアルを開始するエントリーポイントを所有し、Fulfillment/Monetization はそれを実現するコードベースを所有する**ということです。

### エンジニアリングエクセレンスと継続的なオーナーシップ

ユーザー向け機能ではないものの、トライアルシステムを健全に保つ作業、つまりトライアルコードベース内の**オブザーバビリティ、モニタリング、パフォーマンス改善、信頼性、技術的負債、リファクタリング**は、コードベースオーナーである **Fulfillment/Monetization** が所有します。これは、どのチームがそのコードで最後に機能を出荷したかに関係なく適用されます。

{{% alert title="サポートとオンコールは Fulfillment に残ります" color="warning" %}}
**CustomersDot のすべての運用サポート、インシデント、オンコールは Fulfillment/Monetization に残ります。これには、Growth が作成または変更した場合でも、薄いトライアルエントリーレイヤーが含まれます。** エントリーレイヤーのコードにコントリビュートしても、CustomersDot のサポート負荷が Growth に移ることはありません。これにより、CustomersDot のオンコールとインシデント対応を単一のオーナーの下に置き、有料顧客を支える本番システムの責任が分断されることを避けます。
{{% /alert %}}

実務上は以下のとおりです。

- Fulfillment/Monetization は、トライアルエントリーエンドポイントと基本コントローラーを含む CustomersDot トライアルコードベース全体の運用性と長期保守性（計測、アラート、ダッシュボード、パフォーマンス、インシデント対応、オンコール）の DRI です。
- エントリーレイヤーを含め、CustomersDot のどの部分に関わるサポート Issue、バグレポート、インシデントも Fulfillment/Monetization がトリアージし、所有します。Growth は求められた場合にエントリーレイヤー固有の内容を支援しますが、サポート DRI ではありません。
- Growth は、所有するエントリーポイントの**プロダクト分析と実験トラッキング**を計測します。それらのイベントが共有コードから発火する場合でも同様です。Growth は配置とレビューについて Fulfillment/Monetization と調整します。
- Growth がトライアルコードベースへ機能をコントリビュートする場合、Fulfillment/Monetization はそのコードの継続的な保守とサポートのオーナーシップを引き継ぎます（下記の意思決定フレームワークを参照）。そのため、Growth のコントリビューションはコードベースオーナーの品質、テスト、オブザーバビリティ標準を満たすべきです。

### トライアルリクエストのライフサイクル: 各ホップのオーナー

このモデルを適用する最も明確な方法は、トライアルリクエストをエンドツーエンドでたどることです。オーナーシップは各ステップの**機能**（トライアルを開始するのか、それを実現するのか）に従い、**コードが存在するリポジトリでは決まりません**。有用な見分け方があります。*トライアルを開始するための GitLab から CustomersDot へのアウトバウンド呼び出し*は Growth のエントリーポイントであり、*結果をプロビジョニングするために CustomersDot から GitLab へ戻るインバウンド呼び出し*は、そのプロビジョニングコードが GitLab 内で実行されるとしても Fulfillment/Monetization です。

| # | トライアルフローのステップ | コードが実行される場所 | オーナー |
| --- | --- | --- | --- |
| 1 | トライアル UI/UX — トライアルフォーム、CTA、アップグレードプロンプト、オンボーディング | GitLab | **Growth** |
| 2 | GitLab から CustomersDot へ送るトライアル送信の構築と送信 | GitLab | **Growth** |
| 3 | CustomersDot のトライアルエントリーエンドポイントと基本コントローラーで送信を受け取る（初期送信の処理とルーティングを作成／変更する） | CustomersDot | **Growth** |
| 4 | エントリーポイントの背後にあるトライアル作成、適格性の強制、エンタイトルメント付与、プロビジョニングロジック | CustomersDot | **Fulfillment/Monetization** |
| 5 | トライアルの請求、サブスクリプション、ライフサイクル処理 | CustomersDot | **Fulfillment/Monetization** |
| 6 | GitLab に戻って namespace、ライセンス、プラン／アドオン状態を更新するプロビジョニング | GitLab | **Fulfillment/Monetization** |
| 7 | フロー全体の運用性とサポート — モニタリング、アラート、インシデント、オンコール（GitLab エントリーレイヤーを除く） | GitLab + CustomersDot | **Fulfillment/Monetization** |

要するに、**Growth は UI/UX と、CustomersDot へトライアルを送信する行為（ステップ 1〜3）を所有します。Fulfillment/Monetization は、その送信が引き起こすすべて、つまり作成、エンタイトルメント、請求、GitLab の namespace／ライセンスを更新するプロビジョニングコールバック（ステップ 4〜6）と、それらすべてのサポート（ステップ 7）を所有します。**

オーナーシップ判断と従うべき手順を組み合わせたエンドツーエンドの具体例については、下記の[具体例](#worked-examples)を参照してください。

## 意思決定フレームワーク

上記の概念的なオーナーシップモデルは、*説明責任*を定義しています。この意思決定フレームワークは、**共有コードベースへのコントリビューション**（主に CustomersDot）における実践的な適用です。Growth が直接コントリビュートできる場合と、コードベースオーナーである Fulfillment/Monetization を巻き込む必要がある場合を示します。Growth が直接コントリビュートする場合でも、マージされたコードの継続的なオーナーシップは Fulfillment/Monetization に残ります。

### Growth が独立してコントリビュートする

Growth チームメンバーは、**トライアルのエントリーレイヤー**、つまり GitLab アプリのトライアル接点と、薄い CustomersDot トライアルエントリーエンドポイントおよび基本コントローラーに限定され、プロビジョニング、エンタイトルメント、請求、共有システムに踏み込まない変更については、直接コントリビュートできます。

**Growth が所有する変更の例:**

1. **トライアルエントリーエンドポイントと基本コントローラー**: トライアルリクエストを受け取りルーティングする CustomersDot のエンドポイントと基本コントローラーへの変更。ただし、プロビジョニング、エンタイトルメント、請求の挙動を変更しない場合に限ります
1. **トライアルエントリーの適格性チェック**: エントリーポイントで、誰がトライアルを*開始*できるかを制御するエントリーレベルのゲーティング（たとえば、ドメイン制限、ユーザー属性、地域制限）。これは下流でエンタイトルメントがどのように付与されるかとは別です
1. **トライアル UX とエントリーフロー**: トライアルサインアップフロー、オンボーディング体験、トライアルから有料へのコンバージョン接点
1. **トライアルのトラッキングと分析**: トライアルのエントリーとコンバージョン挙動に関する計測、分析イベント、実験トラッキング
1. **トライアルエントリーのメッセージング**: トライアル開始に関連するコピー、メールテンプレート、プロダクト内メッセージング
1. **トライアルのフィーチャーフラグ**: トライアルのエントリーポイント機能または実験を制御するフィーチャーフラグ

変更がエントリーレイヤーから始まっても、より深い挙動が必要になる場合（たとえば、プロビジョニングで強制する必要がある新しい適格性ルール、またはトライアルのプロビジョニング方法に影響する期間変更など）は、コードベースオーナーの領域に入ります。[コードベースオーナー（Fulfillment/Monetization）を巻き込む](#engage-the-codebase-owner-fulfillmentmonetization)を参照してください。

**独立したコントリビューションのプロセス:**

1. 標準の GitLab [コントリビューションガイドライン](../../workflow/code-review/)に従います
2. 適切なラベルを適用します: `devops::growth`, `group::activation`（または関連する Growth グループ）, `CustomersDot`
3. 認知してもらうため、[#s_fulfillment](https://gitlab.slack.com/channels/s_fulfillment)で Fulfillment/Monetization に通知します
4. CustomersDot コードベースに触れる場合は、コードレビューに Fulfillment/Monetization maintainer を含めます

### コードベースオーナー（Fulfillment/Monetization）を巻き込む

Growth は、請求、サブスクリプション、プロビジョニングインフラストラクチャ、または有料顧客に影響する共有システムに関わる変更について、Fulfillment/Monetization のトライアルコードベースオーナーを巻き込む必要があります。

{{% alert title="チーム名に関する注記" color="info" %}}
このページでは、集約されたオーナーシップモデルを反映して、トライアルコードベースオーナーを **Fulfillment/Monetization** と呼びます。現在この作業を行っているチームは Fulfillment 組織（歴史的には Provision チーム）配下で運営されています。下記リンクは、再編がハンドブックに完全に反映されるまで、現在の Fulfillment/Provision ハンドブックページを指します。
{{% /alert %}}

**コードベースオーナーの変更の例:**

1. **請求連携**: Zuora 連携、決済処理、請求書生成へのあらゆる変更
1. **サブスクリプションのプロビジョニング**: サブスクリプションの作成、有効化、管理方法の変更
1. **ライセンス生成**: ライセンスキーの生成、検証、配布への変更
1. **Zuora 連携**: Zuora API 呼び出し、データ同期、請求ワークフローに関わるあらゆる作業
1. **共有インフラストラクチャ**: データベーススキーマ変更、複数システムで使われる API エンドポイント、または中核的な CustomersDot サービス
1. **コンプライアンスとセキュリティ**: PCI コンプライアンス、データプライバシー、またはセキュリティコントロールに影響する変更

**Fulfillment/Monetization を巻き込むプロセス:**

1. 適切な intake テンプレートを使って [fulfillment-meta](https://gitlab.com/gitlab-org/fulfillment-meta) プロジェクトに Issue を作成します
2. リクエストを議論するために [#s_fulfillment](https://gitlab.slack.com/channels/s_fulfillment)で連絡します
3. アプローチとタイムラインを揃える必要がある場合は、同期ミーティングを設定します
4. コードベースオーナーの[プロジェクト管理プロセス](../fulfillment/provision/#project-management-process)に従います
5. Fulfillment/Monetization チームメンバーを DRI として実装にコラボレーションします

### 判断が必要な場合／相談

変更が Growth の領域に入るのか、Fulfillment/Monetization の関与が必要なのか不確かな場合は、相談する側に倒してください。次の要素を考慮します。

**次の場合は Fulfillment/Monetization に相談してください:**

1. 変更が請求の正確性や収益認識に影響する可能性がある
1. 変更の「blast radius」（どれだけのユーザー／システムに影響するか）が不明である
1. 変更に、プロビジョニング、ライセンス、請求に特有のドメイン知識が関わる
1. 変更が有料顧客または本番システムに影響する可能性がある
1. 変更が共有コードパスまたはインフラストラクチャを変更する

**相談方法:**

1. Issue リンクとともに、簡単な説明を [#s_fulfillment](https://gitlab.slack.com/channels/s_fulfillment)に投稿します
2. 関連する Fulfillment/Monetization チームメンバー（PM、EM、またはその領域に詳しいエンジニア）をタグ付けします
3. アプローチを議論する必要があれば、短い同期を依頼します
4. 将来参照できるよう、Issue に判断を記録します

## エスカレーションパス

優先順位の衝突が発生したり、Growth がコードベースオーナーの現在のキャパシティより速く進む必要がある場合は、次のエスカレーションパスを使います。

### レベル 1: 直接コントリビューション

**使う場面:** Growth に変更を実装する能力があるものの、コードベースオーナーのレビューと承認が必要な場合。

**プロセス:**

1. Growth が CustomersDot コントリビューションガイドラインに従って変更を実装します
2. Fulfillment/Monetization maintainer にレビューを依頼します
3. フィードバックに対応し、必要に応じてイテレーションします
4. Fulfillment/Monetization が正しさと潜在的な影響をレビューします
5. コードベースオーナーの承認を得てマージします

**タイムライン:** 通常、複雑さに応じて 1〜2 マイルストーン

### レベル 2: リーダーシップレベルでの再優先順位付け

**使う場面:** 作業には Fulfillment/Monetization による実装が必要だが、キャパシティまたは競合する優先事項によってブロックされている場合。

**プロセス:**

1. Growth PM が Growth Product Director にエスカレーションします
2. Growth Director が Fulfillment Product Director と優先事項について議論します
3. ビジネスインパクトと緊急性を共同で評価します
4. Director レベルで再優先順位付けの判断を行います
5. Fulfillment/Monetization がそれに応じてマイルストーン計画を調整します

**タイムライン:** 通常、計画に 1 マイルストーン + 実装時間が必要です

### レベル 3: リソース配分の調整

**使う場面:** 継続的なキャパシティ制約により、チーム構成または責任の構造的な変更が必要な場合。

**プロセス:**

1. Director が継続的なキャパシティギャップを特定します
2. 選択肢を評価します。チームメンバーの一時的な貸し出し、採用、または組織再編
3. 部門横断のリソース配分が必要な場合は VP レベルにエスカレーションします
4. 合意したリソース調整を実装します
5. 新しい責任とハンドオフを文書化します

**タイムライン:** 通常、構造的な変更には 1〜2 四半期

## コラボレーションプロセス

### コミュニケーションチャネル

1. **主要 Slack チャネル:**
   - [#s_growth](https://gitlab.slack.com/channels/s_growth) - Growth チームチャネル
   - [#s_fulfillment](https://gitlab.slack.com/channels/s_fulfillment) - Fulfillment/Monetization チームチャネル
   - これらのチャネルを、質問、コラボレーション依頼、ステータス更新に使います

2. **Issue トラッキング:**
   - Growth の Issue: `devops::growth` ラベル付きの [gitlab-org/gitlab](https://gitlab.com/gitlab-org/gitlab)
   - Fulfillment/Monetization の Issue: [gitlab-org/fulfillment-meta](https://gitlab.com/gitlab-org/fulfillment-meta)
   - CustomersDot の Issue: [gitlab-org/customers-gitlab-com](https://gitlab.com/gitlab-org/customers-gitlab-com)

### 定期的な接点

Growth と Fulfillment/Monetization チームは、次の方法で定期的なコミュニケーションを維持すべきです。

1. 共有 Slack チャネルでの非同期更新
2. 関連する Issue とマージリクエストでのメンション
3. 四半期ごとの計画調整セッション
4. 複雑な取り組みに必要なアドホック同期ミーティング

### コードレビュープロセス

1. すべての CustomersDot 変更には、Fulfillment/Monetization maintainer（コードベースオーナー）によるレビューが必要です
2. Growth エンジニアは、影響を受ける領域に詳しい Fulfillment/Monetization チームメンバーへレビューを依頼すべきです
3. Fulfillment/Monetization は標準的な変更に対してタイムリーなレビュー（2 営業日以内）を約束します
4. 緊急の変更については、[#s_fulfillment](https://gitlab.slack.com/channels/s_fulfillment)で調整し、レビューを迅速化します

## 具体例

これらの例は、**オーナーシップ判断**（[ライフサイクルステップ](#trial-request-lifecycle-who-owns-each-hop)に対応）と、**実際に何をするか**を組み合わせたものです。エンジニアリングとプロダクトの両方の判断にまたがります。パターンとして使ってください。新しい状況がきれいに当てはまらない場合は、ライフサイクル表と[意思決定フレームワーク](#decision-framework)に戻ってください。

### Growth が独立してコントリビュートする（エントリーレイヤー、ステップ 1〜3）

これらはエントリーレイヤーに限定され、プロビジョニング、エンタイトルメント、請求を変更しないため、Growth の領域に残ります。

**トライアル期間またはエントリー適格性の実験** — たとえば、あるセグメントに対して 30→60 日トライアルをテストする、または会社規模に基づいてエントリーポイントで誰がトライアルを*開始*できるかを制御する場合。

- **オーナー:** Growth（ステップ 1〜3）。*注意点:* 期間または適格性ルールを**プロビジョニング／エンタイトルメント中に強制する**必要がある場合、その強制はステップ 4 です → Fulfillment/Monetization を巻き込みます。営業／リードルーティングに影響する可能性がある適格性は判断が必要です。まず相談してください（下記参照）。
- **やること:** 実験計画を含む Issue を作成する → エントリーレイヤーの変更と分析を実装する → 認知してもらうために [#s_fulfillment](https://gitlab.slack.com/channels/s_fulfillment)へ投稿する → CustomersDot の変更について Fulfillment/Monetization maintainer レビューを依頼する → デプロイしてモニタリングする。

**トライアルフォームにフィールドを追加し、それを CustomersDot に渡す。**

- **オーナー:** Growth — GitLab UI + 送信ペイロード（ステップ 1〜2）と、それを受け取る CustomersDot エントリーエンドポイント／コントローラー（ステップ 3）。そのフィールドが*トライアルのプロビジョニング方法またはエンタイトルメント付与方法を変更する*必要がある場合は、ステップ 4 が関わります → Fulfillment/Monetization を巻き込みます。
- **やること:** フォーム + 送信変更を実装する → エントリーコントローラーを拡張してそのフィールドを受け取る → maintainer レビューを依頼する → それがプロビジョニングに影響する場合は、ステップ 4 を調整するために fulfillment-meta Issue を開きます。

**トライアル開始とコンバージョンに分析／実験トラッキングを追加する。**

- **オーナー:** Growth — イベントが共有コードから発火する場合でも、Growth が所有するエントリーポイントのプロダクト分析（ステップ 1〜3）。
- **やること:** GitLab の計測ガイドラインに従ってイベントを実装する → 共有コードの接点について Fulfillment/Monetization と配置／レビューを調整する → 標準の maintainer レビュー → イベントが正しく発火することを検証する。

### Fulfillment/Monetization を巻き込む（コードベース、ステップ 4〜6）

これらはプロビジョニング、エンタイトルメント、請求、または GitLab へのプロビジョニングコールバックに触れるため、コードベースオーナーが必要です。

**トライアルから有料へのコンバージョン／サブスクリプション作成フロー。**

- **オーナー:** Fulfillment/Monetization（ステップ 4〜5）。サブスクリプション作成と請求に触れ、収益認識に影響する可能性があります。
- **やること:** [fulfillment-meta](https://gitlab.com/gitlab-org/fulfillment-meta)に Issue を開く → Fulfillment/Monetization PM + エンジニアと同期する → 設計にコラボレーションする → Fulfillment が実装する、または詳細にレビューする → 共同テスト → 調整されたデプロイ。

**送信後、トライアル namespace に正しいアドオン／ティアが付与されない、またはライセンス／シート数やサブスクリプションレコードが誤っている。**

- **オーナー:** Fulfillment/Monetization — GitLab へのプロビジョニングコールバック（ステップ 6）とエンタイトルメント／請求ロジック（ステップ 4〜5）は、ステップ 6 が GitLab リポジトリ内で実行されるとしても完全に所有されます。
- **やること:** コードベース + サポート DRI として Fulfillment/Monetization にルーティングする → 問題がハンドオフ（ステップ 3↔4 の境界）に起因する場合、Growth がエントリーレイヤー／送信のコンテキストを提供します。

### 共有作業 — 境界に沿って分割する

**既存の有料顧客がプロダクト内からアドオンまたは上位ティアをトライアルする。**

- **オーナー:** 共有。Growth はアドオントライアルを開始するプロダクト内の拡張／アップグレード接点（エントリーポイント、ステップ 1〜3）を所有します。Fulfillment/Monetization は、それを付与するエンタイトルメント、プロビジョニング、請求（ステップ 4〜6）を所有します。これは、このモデルにおける既存の有料顧客状態です。
- **やること:** Growth がエントリーポイント／CTA を実装 + 計測する → エンタイトルメントとプロビジョニングについて Fulfillment/Monetization を巻き込む → **送信契約**（トライアルエンタイトルメントをどのように付与、追跡、期限切れにするか）を揃える → 共同レビュー → 調整されたデプロイ。

**新しいエントリー体験と新しいプロビジョニングの両方を伴う新しいトライアルタイプ。**

- **オーナー:** 共有 — 作業を分割します。Growth はエントリーポイント（ステップ 1〜3）をスコープします。Fulfillment/Monetization は作成／エンタイトルメント／プロビジョニング（ステップ 4〜6）をスコープします。
- **やること:** 2 つの半分の間の送信契約に最初から合意する → 両方のバックログでリンクされた Issue として追跡する → エントリーポイントの変更は通常プロビジョニング側に依存するため、マイルストーンを揃える。

### 判断が必要 — まず相談する

**営業ワークフローやリードルーティングに影響する可能性があるエントリーレイヤーの適格性** — たとえば、大企業向けトライアルを制限して直接営業のエンゲージメントへ誘導する場合。

- **オーナー:** Growth のエントリーポイントに関する懸念ですが、下流への影響があります → 構築前に Fulfillment/Monetization（および営業ステークホルダー）へ相談します。
- **やること:** 提案を [#s_fulfillment](https://gitlab.slack.com/channels/s_fulfillment)に投稿する → Fulfillment/Monetization PM をタグ付けする → 影響について短く同期する → Issue に判断を記録し、その結果に基づいて進めます。

### Fulfillment/Monetization が完全に所有する（継続的な保守 + サポート、ステップ 7）

**CustomersDot トライアルエンドポイントが失敗している／遅い／アラートが不足している。**

- **オーナー:** Fulfillment/Monetization — **Growth が書いたエントリーエンドポイントを含め**、トライアルコードベースのオブザーバビリティ、パフォーマンス、インシデント、オンコール（ステップ 7）。エントリーレイヤーのコードにコントリビュートしても、サポート負荷は Growth に移りません。
- **やること:** Fulfillment/Monetization がインシデントと運用性修正を所有し、計測／パフォーマンス作業をスコープする → Growth は求められた場合にエントリーポイントのコンテキストまたは分析ニーズを共有し、エントリーレイヤー固有の内容を支援する → Fulfillment が実装し、結果としてのアラート／ダッシュボードを所有します。

**お客様から報告されたトライアル問題**（プロビジョニングされない、誤ったエンタイトルメント、請求の問題）。

- **オーナー:** Fulfillment/Monetization が CustomersDot サポート DRI として所有します。どのチームがエントリーポイントを構築したかには関係ありません。
- **やること:** Fulfillment/Monetization でトリアージする → 根本原因がエントリーレイヤー（ステップ 1〜3）にある場合のみ Growth を巻き込みます。

## リソース

### 関連ドキュメント

- [Provision チームハンドブック](../fulfillment/provision/) - Provision チームのプロセスとプロジェクト管理
- [Growth チームハンドブック](./) - Growth チームのプロセスと実験ガイドライン
- [Growth 実験ガイドライン](./experimentation/) - Growth が実験を実行する方法
- [Fulfillment プロジェクト管理プロセス](../fulfillment/#project-management-process) - Fulfillment の intake と計画
- [Growth と Feature Product Owner のコラボレーションプロセス](../../../product/groups/growth/#collaboration-process-with-other-product-teams) - 一般的な Growth コラボレーションモデル

### 技術リソース

- [CustomersDot リポジトリ](https://gitlab.com/gitlab-org/customers-gitlab-com) - メインの CustomersDot コードベース
- [CustomersDot アーキテクチャドキュメント](https://gitlab.com/gitlab-org/customers-gitlab-com/-/tree/main/doc) - 技術ドキュメント
- [Provision Tracking System モニタリング](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/doc/provision_tracking_system/failure_monitoring.md) - PTS モニタリングガイド

### 主な連絡先

- **Growth Product Director:** [Growth チームハンドブック](./#leadership)を参照
- **Growth Engineering Director:** [Growth チームハンドブック](./#leadership)を参照
- **Trial Codebase Engineering Manager (Fulfillment/Monetization):** [Provision チームハンドブック](../fulfillment/provision/#team-members)を参照
- **Fulfillment/Monetization Product Management:** [Provision の安定的なカウンターパート](../fulfillment/provision/#stable-counterparts)を参照

## フィードバックとイテレーション

このフレームワークは生きたドキュメントです。コラボレーションから学びながら、私たちはこれらのガイドラインをイテレーションし、改善します。改善提案は次の方法で行えます。

1. [gitlab-org/fulfillment-meta](https://gitlab.com/gitlab-org/fulfillment-meta) の Issue
2. [#s_growth](https://gitlab.slack.com/channels/s_growth) または [#s_fulfillment](https://gitlab.slack.com/channels/s_fulfillment)での議論
3. Growth または Fulfillment/Monetization リーダーシップへの直接フィードバック

GitLab の[イテレーション](../../../values/#iteration)のバリューに従い、各チームがこのフレームワークを試し、フィードバックを集め、実際の経験に基づいて改善を提案することを推奨します。
