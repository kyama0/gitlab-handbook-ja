---
title: "OceanFrogs"
description: "GCC アカウント向けの APJ（インド）B2B データ＆バイヤーインテリジェンス"
upstream_path: /handbook/marketing/marketing-operations/oceanfrogs/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
---

## OceanFrogs

OceanFrogs は **APJ** に焦点を当てた **B2B データプロバイダー**で、特に **インド拠点の Global Capability Center（GCC）アカウント** に重点を置いています。**マーケティングオペレーション（MktgOps）およびセールスデベロップメントチーム** が、従来のプロバイダー（例: ZoomInfo、Cognism）にカバレッジギャップがある場所でコンタクトをソースしてエンリッチするために使用しています。

OceanFrogs は SFDC のリードおよびコンタクトレイアウトの同じ **LeadGenius/OceanFrogs** セクション内で **LeadGenius** と並行して動作します。両ツールとも **APJ エンリッチメント** に専念しており、**APJ の主要データソース** として使用すべきです。

OceanFrogs からのすべての本番データは **Salesforce（SFDC）** に書き込まれるため、APJ チームは完全に SFDC から作業できます。

---

## アクセスとプロビジョニング

### プラットフォームアクセス

GTM ユーザー向けの **OceanFrogs UI スタンドアロンログインはありません**。

- OceanFrogs データは、マネージドな **Workato ↔ OceanFrogs インテグレーション** を介して GitLab に配信されます。
- **MktgOps とシステム** のみがインテグレーションと直接連携します。
- 担当者とマーケターは、**SFDC レコードとフィールドを通してのみ** OceanFrogs データを利用します。

### OceanFrogs データを利用する人物

- **主要ユーザー:** **インド GCC アカウント** に焦点を当てた APJ GTM チーム（AE、BDR/SDR、フィールドマーケティング）。
- **オペレーショナルオーナー:** **マーケティングオペレーション（MktgOps）** – インテグレーション、データガバナンス、ワークフロー。

Lumos リクエストは不要です。アクセスは通常の SFDC オブジェクトパーミッションを通じて継承されます。

---

## SFDC における OceanFrogs データの所在

OceanFrogs エンリッチメントは、**リードおよびコンタクトレイアウトの標準フィールドおよびカスタムフィールド** に直接書き込まれます。

**Lead** と **Contact** の両オブジェクトで、OceanFrogs データは共有の **LeadGenius/OceanFrogs** セクションに表示されます。このセクションには以下が含まれます:

- **人物レベルのフィールド**
  - **First Name**、**Last Name**
  - **Email**
  - **Title**
  - **Seniority Level**
  - **Department**
  - **Mobile Phone**
  - **Person LinkedIn**
  - **Contact Country**、**Contact State**

- **企業レベルのフィールド**
  - **Company Name**
  - **Company Website**
  - **Company Domain**
  - **Company HQ Country**
  - **Company HQ State**
  - **Industry**
  - **Annual Revenue**
  - **Employee Count**
  - **Technologies Used**

- **オペレーショナルエンリッチメントフィールド**
  - **Email Verification Status**
  - **Last Enrichment Date**
  - **Enrichment Source**

これらのフィールドは **Workato ↔ OceanFrogs インテグレーション** および **LeadGenius** によって入力・更新され、ほとんどのユーザーにとっては読み取り専用です。**インド GCC ターゲティング、ルーティング、レポーティング、GTM ワークフロー** に使用されます。

---

## OceanFrogs データはどのように SFDC に流れるか

ハイレベルなフロー:

1. **ターゲット定義**
   - MktgOps と APJ ステークホルダーが **インド GCC ICP 基準**（インド HQ または GCC プレゼンス、セグメント、業界、従業員バンドなど）を定義します。

2. **OceanFrogs ソーシング & エンリッチメント**  
   - OceanFrogs が、合意された ICP に一致する **インド GCC アカウントとコンタクト** を識別します。
   - データは **OceanFrogs API → Workato インテグレーション** を介して GitLab に渡されます。

3. **Workato による SFDC への処理**
   - Workato が:
     - 可能な場合、既存のアカウント / リード / コンタクトとマッチします。
     - **新しいリード** を作成します。
     - **LeadGenius/OceanFrogs** セクションのフィールドおよびエンリッチメントメタデータを入力します。

4. **APJ チームのアクティベーション**
   - **APJ（インド）チームは、標準のリードビュー、ダッシュボード、Outreach シーケンスを使用して、SFDC から直接これらのリードとコンタクトに対応します**。

---

## ルーティングとオーナーシップ（インド / APJ）

OceanFrogs はレコードを **ルーティングしません**。データを供給するだけです。ルーティングは、私たちの **標準 APJ リード & コンタクトルーティングロジック**（Traction）によって処理されます。

主要な原則:

- **リードソース & 属性付け**
  - OceanFrogs から作成されたレコードは、明確な **初期ソース** でタグ付けされます。
  - これにより、他のプロバイダーから OceanFrogs によって個別に **ボリューム、データ品質、パイプラインへの影響** をトラッキングできます。

- **標準 APJ ルーティング**
  - OceanFrogs を介して作成された **リード** は、他の APJ リードと同じ **APJ ルーティングルール**（Traction のインド固有のジオ/セグメントルール）に従います。
  - RoE またはルーティングに対する **OceanFrogs 固有の例外はありません**。OceanFrogs データは単にターゲティングを改善するだけです。

---

## いつ OceanFrogs を使い、いつ他のエンリッチメントツールを使うか

MktgOps の観点から:

- **OceanFrogs を使う場合**
  - **インド GCC アカウント** またはインドベースの意思決定者をターゲットにしている。
  - 他のプロバイダーから得られるよりも優れた **インド/APJ カバレッジ** が必要。
  - GCC コンテキストが重要な **インド固有の ABM またはアウトバウンドプログラム** を実行している。

- **LeadGenius を使う場合**
  - **インド以外の APJ**（例: ANZ、ASEAN、日本、韓国）またはより広範な APJ セグメントをターゲットにしている。
  - インド GCC に固有でない、新規の APJ アカウントとコンタクトが必要。

- **ZoomInfo / Cognism を使う場合**
  - APJ 以外（例: **AMER、EMEA、LATAM**）で作業している、または既存のグローバルエンリッチメントワークフローに従っている。

ユースケースにどのプロバイダーが正しいかわからない場合は、`#mktgops` でスレッドを開始し、以下を含めてください:

- リージョン + セグメント（例: インド GCC、エンタープライズ）  
- ユースケース（例: トップ 200 アカウント向けインド GCC ABM）  
- **新規ソーシング**、**既存アカウントへのエンリッチメント**、または両方が必要かどうか

---

## データ品質、コンプライアンス、ベストプラクティス

- すべての OceanFrogs データに対して **SFDC が SSOT** です
- メール、コール、または広告に OceanFrogs エンリッチドレコードを使用する際には、既存の **DNC / 同意 / プライバシー** プロセスに従ってください。
- OceanFrogs エンリッチドフィールドを推測した値で **手動で上書きしないでください**。データが間違っているように見える場合:
  - **MktgOps Issue** を記録する、または
  - 将来の OceanFrogs バッチでアカウントを再訪問するようにリクエストします。

---

## ヘルプの取得方法

OceanFrogs に関連する質問や問題の場合:

- Slack の **`#mktgops`** で開始し、以下を含めてください:
  - 質問対象の **アカウント / リード / コンタクト** へのリンク
  - **データ品質**、**ルーティング**、**ターゲットリスト**、または **インテグレーション動作** について尋ねているかどうか
- 構造的変更や新しいワークフローについては、標準テンプレートを使用して **MktgOps Issue** を開き、タイトルまたは説明で **OceanFrogs** に言及してください。
