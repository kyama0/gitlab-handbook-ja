---
title: SME 顧客からのフィードバックの収集

description: 顧客からフィードバックを集める
upstream_path: /handbook/solutions-architects/sa-practices/subject-matter-experts/sme-customer-feedback/
upstream_sha: fb150f3a4f831172cf23c7f0d75b0d6310a68972
translated_at: "2026-05-08T18:59:21Z"
translator: claude
stale: false
---

## **顧客フィードバックループ**

[Customer Issues Prioritization Framework](/handbook/product/product-processes/customer-issues-prioritization-framework/) をレビューしてください。

PM は、特に顧客の優先順位付けのために [gitlab.org/issues](http://gitlab.org/issues) の下に Issue を作成します。[customer feedback テンプレート](/handbook/product/product-management/#feedback-template) をコメントとして含めることを推奨します。

現場と顧客からの上位の要求を集めて体系的にプロダクトマネジメントとエンジニアリングに伝えることは、SME の主な責任のひとつです。

これにより、現場からのフィードバックを分析とともに集合的な視点で確認できるため、常にリアクティブに見えるのではなく、ロードマップのテーマとともに、ロードマップに建設的に追加し構築するようになります。

サブジェクトマターエキスパートプログラムは、現場からの上位 10 件のリクエストを、事前に決定されたテーマ/カテゴリーで共有でき、個別に反応したり、Issue ウェイストランドに送ったりするのではなく、対応できます。

1. SA と CSM は、決定されるプロセスを通じて、現場からの顧客フィードバックと要求を提出します。  
1. 各領域の SME は、ポイントシステムを通じて非同期またはその [Pod ケイデンスコール](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-cadences/#sme-area-pod-cadence) のひとつで要求を分析し、優先順位を付けるべきです。  
1. 上位のリクエストは、月次の [SME/PM ケイデンスミーティング](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-cadences/#sme-product-cadence) で SME 領域リードによって提示され、議論されます。
1. リクエストのステータスが更新されます。更新は各領域の SME に伝えられ、SME は [リージョナル SME コールまたは SME Corner 更新](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-cadences/#sme-corner) で更新を提供します。

## **顧客フィードバックフレームワークとプロセス**（TBD）

### **顧客フィードバックの提出**

TODO：[Customer Issues Prioritization Framework](/handbook/product/product-processes/customer-issues-prioritization-framework/) をレビューする

1. SME からの顧客フィードバック提出のため、以下のフィールドを持つ GitLab Issue テンプレートを実装する：
   - 顧客名
   - 機会の詳細
   - Net ARR または ARR ベース
   - ユースケースの説明：
     - 現在の課題/コンテキスト
     - 提案されたソリューション
     - 期待される影響
   - プログラムテーマ/サブカテゴリー
   - その他の関心のある顧客のリスト
2. 作成された Issue に適切な SME ラベルを設定し、プロダクトマネジメントが必要とするラベルを設定する
3. 適切なテーマに Issue を割り当てる（TBD）

### **フィードバックのカテゴリー化**

1. プロダクトマネージャーと協働して、各プログラム領域のサブカテゴリーを定義する。
2. AI のサブカテゴリーの例：
   - チャット
   - コード提案
   - 脆弱性分析

### **優先順位付けシステム**

1. リクエスト属性に基づいた自動ポイントシステムを開発する：
   - 顧客ティア
   - 潜在的な収益への影響
   - 関心のある顧客の数
   - 戦略的目標との整合性
2. GitLab CI/CD ジョブを実装し、各リクエストにポイントを計算して割り当てる。

### **SME レビュープロセス**

1. 各プログラム領域での [SME Pod ミーティング](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-cadences/#sme-area-pod-cadence) をスケジュールして以下を行う：
   - ポイント割り当てをレビューおよび検証する
   - 必要に応じて優先順位を調整する
   - SME 領域 DRI にコンテキストを提供する

### **フィードバックの追跡**

1. 各プログラム領域の「Top Requests」リストを作成する。
2. 適切な SME ラベルを使用して、以下のステータスを持つ各 SME 領域の Issue ボードを GitLab にセットアップする：
   - New
   - PM が承認済み
   - ロードマップに追加
   - 解決済み
   - 却下
   - バックログ

### **PM コラボレーション**

1. [SME 領域リードとプロダクトマネージャー間の月次ミーティング](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-cadences/#sme-product-cadence) をスケジュールする。
2. これらのミーティングを使用して SME 領域 Issue ボードをレビューし、リクエストのステータスを議論する。

### **コミュニケーションと更新**

1. SME がプログラム領域の Issue ボードを発表するための時間を [リージョナル SA ミーティング](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-cadences/#sme-corner) に含める。
2. これらのプレゼンテーション中に口頭でのリクエストを許可する。
3. SME が SME Corner セッション中に更新を提供するためのプロセスを確立する。

### **リクエストの分類**

1. 以下を区別するシステムを実装する：
   - 機能リクエスト
   - バグ
   - 機能拡張

2. 分類に基づいた適切なルーティングと処理を確実にする。
