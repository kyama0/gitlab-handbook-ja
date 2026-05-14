---
title: "Fulfillment: Subscription Management の方向性"
description: "GitLab の Subscription Management チームは、お客様が GitLab 製品を購入し、サブスクリプションを管理し、請求の詳細や連絡先を確認するための、簡単で情報量が多く信頼できる体験を提供することに注力しています。"
upstream_path: /handbook/product/groups/fulfillment/direction/subscription_management/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

**最終更新日**: 2025-10

## ミッション

摩擦のないセルフサービス体験を提供し、お客様が購入から更新までサブスクリプションのライフサイクル全体を、自信を持って、明確に、容易に独立して管理できるようにします。

## 戦略的優先事項

1. お客様が GitLab のサポートやセールスチームの支援を必要とせずに、新製品を購入したりサブスクリプションを変更したりできるようにする。
1. Quarterly Subscription Reconciliation (QSR) や Auto-Renewal のような機能でサブスクリプション管理を自動化し、お客様および社内チームのプロセスを合理化する。
1. セルフサービス、セールス支援、チャネルパートナーの顧客を含むすべての顧客タイプ向けに、シームレスで直感的な体験を確保するために [Customers Portal](https://customers.gitlab.com/) を継続的に改善する。
1. グローバルな商取引機能を踏まえ、収益を守り規制を満たすために、コンプライアンス、法務、税務関連の取り組みをサポートする。
1. Customers Portal のアクセスを現在のお客様を超えて、無料トライアルユーザーやチャネルパートナーにも拡大し、追加の変換機会と支払いチャネルを創出する。

## 対象オーディエンス

- GitLab の製品およびサブスクリプションを購入する **ダイレクトカスタマー**
- サブスクリプションと支払いの管理を担当する **請求アカウントマネージャー**
- 自分たちのサブスクリプションを可視化する必要のある **チャネルパートナーのお客様**
- サブスクリプションのライフサイクル全体を通じてお客様をサポートする **GitLab のセールスおよびカスタマーサクセスチーム**

## 主要フォーカスエリア

### 1. セルフサービスの購入とサブスクリプション管理

**解決しようとしている課題:** お客様は、統一されたシームレスな購入体験を通じて、セールスの支援を必要とせずに GitLab 製品を独立して購入し、ライフサイクル全体を通じてサブスクリプションを変更できるべきである。

#### 現状

- Customers Portal における、特定の製品向けの新規購入およびサブスクリプション拡張 (数量追加、アップグレード)
- すべての製品に対するサブスクリプションの可視化
- 自動シート真正化のための四半期リコンシリエーション (QSR)
- クレジットカード支払い処理
- 請求書の閲覧とクレジットカードによる支払い

#### 問題点と機会

- **製品カバレッジの不完全さ:** すべての GitLab 製品がセルフサービス購入に対応しているわけではなく、現在のチェックアウトは複雑な製品レートプラン構成をサポートしていません。これにより、お客様は日常的な取引でセールスに連絡する必要があり、バンドル戦略も制限されます。セルフサービス対応を拡大し、[複数のチャージを持つ製品レートプランをサポートする](https://gitlab.com/groups/gitlab-org/-/epics/17869) ことで、取引量が増加し、セールスの摩擦が減り、洗練された価格設定やバンドルが可能になります。
- **断片化された購入体験:** Customers Portal の購入フローには、一貫したユーザー体験とスケーラブルな技術実装が欠けています。Premium や Ultimate を購入するプロセスは、Storage や Compute のような製品を購入する場合や、アップグレードや更新の場合と大きく異なります。この不整合により、これらのさまざまなフローを構築・保守するエンジニアリングチームの作業量が増加しています。[Customers Portal のすべての購入フローを統一する](https://gitlab.com/groups/gitlab-org/-/epics/12199) ことで、スケーラビリティが向上し、ユーザー体験が改善されます。
- **単一製品の制限:** GitLab はお客様が購入できる新製品やアドオンを継続的に追加しています。しかし、現在のセルフサービス購入フローでは、お客様は製品ごとに個別のトランザクションを行う必要があり、複数の製品が必要な場合に購入プロセスで摩擦が生じます。[お客様が単一のトランザクションで複数の製品を購入できるようにする](https://gitlab.com/groups/gitlab-org/-/epics/18001) ことで、調達が簡素化され、取引額が増加します。
- **支払い方法の制約:** クレジットカードのみの支払いでは、代替の方法を好む、あるいは必要とするお客様を除外することになり、また QSR の失敗による回収リスクが生まれます。追加の支払い方法 (ACH、PayPal など) を導入し、[Zuora Payment Forms への移行](https://gitlab.com/groups/gitlab-org/-/epics/19622) を行うことで、お客様へのリーチを拡大し、支払い回収リスクを低減できます。
- **将来日付のサブスクリプションの可視性:** 将来日付のサブスクリプション変更を持つお客様は、ポータルが将来の変更があたかも現在有効であるかのように誤って表示するため、現在のアクティブなサブスクリプションを確認・管理できません。[現在および将来のサブスクリプション状態を適切に処理するようサブスクリプションカード表示を改善する](https://gitlab.com/groups/gitlab-org/-/epics/18002) ことで、別々のビューを提供し、ユーザーが現在持っているものと次に来るものの両方にアクセスできるようにします。

#### 主要メトリクス

- セルフサービス採用率 (取引タイプ別)
- 購入完了率
- セルフサービス収益のトレンド
- サポートチケットの削減
- 購入体験に対する顧客満足度

### 2. セルフサービスの更新

**解決しようとしている課題:** 更新プロセスを簡素化・合理化し、期日通りの更新を増やし、非自発的なチャーンを減らし、サブスクリプションの継続についてお客様に自信を与える。

#### 現状

- すべての主要なユースケースで Customers Portal を通じた手動更新および自動更新が利用可能
- 更新フローはすべての更新可能な製品をサポートし、同一製品の複数レートプランを組み合わせ可能
- シート超過の年次真正化を更新時に処理
- 自動更新のオン/オフ切り替え (サブスクリプションの解約)
- 更新メール通知を Zuora と Customers Portal 経由で送信

#### 問題点と機会

- **限定的な更新ウィンドウと遅い自動更新タイミング:** 現在の 15 日間の更新ウィンドウと最終日の自動更新試行は、支払いの問題が発生した場合にサービス中断のリスクを生み出します。[30 日間の更新ウィンドウへの拡張](https://gitlab.com/groups/gitlab-org/-/epics/18665) と、自動更新を数日早く試行することで、支払い問題を解決するためのバッファー時間が提供され、非自発的なチャーンが減少します。
- **プロアクティブな更新阻害要因の可視性の欠如:** いくつかの自動更新阻害要因 (有効期限切れのクレジットカード、サブスクリプション構成の問題、未払いの超過分) は更新試行前に特定可能ですが、お客様はメール通知を受け取るだけで、Customers Portal では可視性がありません。ポータルで更新阻害要因とアラートを表示することで、プロアクティブな解決を可能にし、自動更新の失敗を減らせます。
- **更新前変更オプションの制限:** お客様は、自動更新前にサブスクリプションを変更したり、変更を事前に構成したりすることができず、自動更新を無効化するか、望まない請求を受け入れて更新後に変更するかを強いられます。[お客様がサブスクリプションを変更し、予定された自動更新日に自動的に適用される変更を事前に構成できるようにする](https://gitlab.com/groups/gitlab-org/-/epics/6970) ことで、摩擦が減少し、顧客満足度が向上します。
- **更新価格の可視性の欠如:** お客様は更新ウィンドウが開く前に更新内容をプレビューできず、今後の請求について不確実性が生まれています。[更新価格とサブスクリプションの詳細を事前に明確に可視化する](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/3510) ことで、透明性が高まり、サプライズ請求が減ります。
- **わかりにくい更新コミュニケーション:** お客様は、関連性が乏しく、不明瞭で、実行可能な情報を欠いていることが多いため、近々の更新メールをしばしばわかりにくいと感じています。[サブスクリプション更新メールを Zuora から CustomersDot に移行する](https://gitlab.com/groups/gitlab-org/-/epics/9303) ことで、メール頻度の制御やメール内容のカスタマイズが可能になります。
- **自動更新の失敗:** 自動更新が設定されているサブスクリプションは、有効期限切れのクレジットカード、支払いの失敗、未払いの超過分、超過分の計算問題など、いくつかの理由で更新に失敗する可能性があります。自動更新に失敗したサブスクリプション数のデータを分析し、自動更新の成功率を高めるための戦術的な計画を策定することで、非自発的なチャーンが減り、顧客リテンションが向上します。

#### 主要メトリクス

- 期日通りおよび早期の更新数
- 自動更新の採用率
- 自動更新の成功率
- セルフサービス更新の完了率
- 更新プロセスに対する顧客満足度

### 3. セルフサービスのプロモーション割引

**解決しようとしている課題:** GitLab がシームレスなセルフサービス体験を維持しながら、顧客獲得およびリテンション戦略としてプロモーション割引を活用できるようにする。

#### 現状

- セルフサービスのプロモーション割引機能はなし
- 割引にはセールスの支援が必要

#### 問題点と機会

- **セルフサービスのプロモ機能の欠如:** お客様はセルフサービス購入中にプロモーション割引を適用できず、手動介入またはセールス支援が必要です。[スケーラブルな割引プロモ機能の構築](https://gitlab.com/groups/gitlab-org/-/epics/14931) と、[マルチユースプロモコードによるセルフサービスの実現](https://gitlab.com/groups/gitlab-org/-/epics/18600) により、摩擦が減り、コンバージョン率が向上します。
- **割引の柔軟性の制限:** プロモーションキャンペーンごとに割引率を上書きできず、マーケティング戦略が制約されています。[キャンペーン固有の割引上書き機能を実現する](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/11962) ことで、よりターゲットを絞った効果的なプロモーション戦略が可能になります。
- **製品カバレッジの狭さ:** プロモーション割引は、すべての製品 (GitLab Duo Pro、Ultimate など) や購入フロー (更新、アップグレード、アドオン) で利用可能なわけではありません。すべての製品および購入フローにわたるプロモ割引サポートを拡大することで、包括的なプロモーションキャンペーンが可能になり、顧客獲得とリテンションが改善します。

#### 主要メトリクス

- 割引償還率
- プロモーションキャンペーンによるコンバージョン率の向上
- First Orders の増加

### 4. セルフサービスの請求アカウント管理

**解決しようとしている課題:** お客様が、合理化された請求およびサブスクリプション管理のために、複数のアカウントマネージャーで請求アカウントを簡単にアクセス・管理できるようにする。

#### 現状

- ユーザーは 1 つの請求アカウントにしか所属できない
- 請求アカウント上の複数の請求アカウントマネージャーのセルフサービス管理
- 同一の .com グループに対して複数の請求アカウントが存在する可能性
- Account Executive の連絡先情報および直接的なサポートリンクを含む Contact Us ページ

#### 問題点と機会

- **単一アカウントメンバーシップの制限:** およそ 9% のお客様は複数の請求アカウントに関連付けられていますが、ユーザーは現在、単一アカウントメンバーシップに制限されています。これにより、正当に購入したサービスへのアクセスが妨げられ、適切な請求アカウントマネージャーのワークフローがブロックされます。[単一の CustomersDot ユーザーが複数の請求アカウントメンバーシップを持てるようにする](https://gitlab.com/groups/gitlab-org/-/epics/8986) ことで、障壁が取り除かれ、アカウントのアクセシビリティが改善します。
- **請求アカウントマネージャーの採用が少ない:** 多くの請求アカウントには 1 名の請求マネージャーしかおらず、主要な連絡先が不在の場合にサポートの負担が生じます。認知向上キャンペーンと改善されたワークフローを通じて、[請求アカウントマネージャーの採用を増やす](https://gitlab.com/groups/gitlab-org/-/epics/18530) ことで、サポートチケットが減り、事業継続性が確保されます。
- **同一グループに対する断片化された請求:** 同一の .com グループに対する複数の購入が、別々の請求アカウントになる場合があり、管理上の複雑さと混乱が生じています。同一の .com グループに対するすべての購入を単一の請求アカウントの下に統合することで、請求管理が簡素化され、お客様の体験が向上します。
- **GitLab Organization モデルとの整合の機会:** GitLab が [Organization モデル](https://docs.gitlab.com/user/organization/) を発展させるにつれ、請求アカウントをこの構造と整合させる機会があります。会社全体の請求を表す単一のエンティティを作成することで、Customers Portal での購入を GitLab 上で属する Organization と関連付けることが容易になり、購入と組織構造の接続が簡素化されます。

#### 主要メトリクス

- サポートチケット量の削減 (アクセス関連チケット)
- 請求アカウントマネージャーの採用率 (2 名以上のマネージャーを持つアカウントの割合)
- お客様のセルフサービス成功率 (サポートの介入なしに追加された請求アカウントマネージャー)
- アカウント管理に関連するサポートチケットの削減

## 将来の方向性

サブスクリプション管理機能を進化させ続ける中で、現在のフォーカスエリアを超えた機会を模索しています。このセクションは、新しい戦略的機会が現れるにつれて、引き続き拡張されます。

- **Customers Portal アクセスの拡張:** 現在の有料顧客を超えてポータルアクセスを拡張し、無料トライアルユーザー (トライアルの可視化と変換タッチポイントの提供) や [チャネルパートナー](https://gitlab.com/groups/gitlab-org/-/epics/19449) (請求書アクセスとクレジットカード支払いの実現) を含めることで、機会を模索する。成功は、ユーザーセグメントをまたいだポータル利用の増加、トライアルから有料への変換率の向上、パートナー向けの支払い摩擦の低減によって測定されます。

## 四半期優先事項、Epic、Issue、ボードへのリファレンス

一部のコンテンツは機密であるため、表示されません。

- 四半期優先事項

  - FY25-Q2: [Fulfillment セクション](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/6895)、[Subscription Management グループ](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=updated_asc&state=all&label_name%5B%5D=group%3A%3Asubscription%20management&label_name%5B%5D=FY25-Q2&first_page_size=50)
  - FY25-Q3: [Fulfillment セクション](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/8268)、[Subscription Management グループ](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=updated_asc&state=all&label_name%5B%5D=group%3A%3Asubscription%20management&label_name%5B%5D=FY25-Q3&first_page_size=50)
  - FY25-Q4: [Fulfillment セクション](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/9504)、[Subscription Management グループ](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=updated_asc&state=all&label_name%5B%5D=group%3A%3Asubscription%20management&label_name%5B%5D=FY25-Q4&first_page_size=20)
  - FY26-Q1: [Fulfillment セクション](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/10382)、[Subscription Management グループ](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=updated_asc&state=all&label_name%5B%5D=group%3A%3Asubscription%20management&label_name%5B%5D=FY26-Q1&first_page_size=20)
  - FY26-Q2: [Fulfillment セクション](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/10663)、[Subscription Management グループ](https://gitlab.com/groups/gitlab-org/-/epics?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Asubscription%20management&label_name%5B%5D=Fulfillment%20-%20Interlock&label_name%5B%5D=Fulfillment%20FY26-Q2&first_page_size=20)
  - FY26-Q3: TBD

- [Fulfillment Roadmap > Subscription Management](https://gitlab.com/groups/gitlab-org/-/roadmap?state=all&sort=end_date_asc&layout=QUARTERS&timeframe_range_type=THREE_YEARS&label_name%5B%5D=Fulfillment+Roadmap&label_name%5B%5D=group%3A%3Asubscription+management&progress=COUNT&show_progress=true&show_milestones=false&milestones_type=GROUP)
- すべての Subscription Management Epic

  - [Epic 一覧](https://gitlab.com/groups/gitlab-org/-/epics?state=opened&page=1&sort=start_date_desc&label_name[]=group::subscription+management)
  - [整理された Epic ボード](https://gitlab.com/groups/gitlab-org/-/epic_boards/31408?label_name[]=group%3A%3Asubscription%20management)

- すべての Subscription Management Issue

  - [Issue 一覧](https://gitlab.com/groups/gitlab-org/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=group%3A%3Asubscription%20management&first_page_size=20)
  - [整理された Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/4282426?label_name[]=group%3A%3Asubscription%20management)
