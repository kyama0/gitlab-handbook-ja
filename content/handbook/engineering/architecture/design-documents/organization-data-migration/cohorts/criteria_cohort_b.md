---
title: 'Cohort B: アクティブなオプトインベータ'
owning-stage: "~devops::tenant scale"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization-data-migration/cohorts/criteria_cohort_b/
upstream_sha: "154fb2bd6436508aa2d90583cc235d5fe28b1705"
lastmod: 2026-05-27T17:43:35+12:00
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
---

## コンテキスト

Cohort B は、Protocells 上で実際の日次アクティブユーザーを扱う経験を私たちが得る最初の cohort です。Cohort A（インフラ検証に焦点を当てた非アクティブな free ユーザー）とは異なり、Cohort B はアクティブなワークフロー、実際の顧客の期待、そして Security と Trust and Safety の準備の必要性を導入します。目標は、Cohort C（上位 1,000）以降にスケールする前に、小規模で厳選された低リスクなアクティブ Organization のセットから学ぶことです。

## 適格性基準

Protocells への Organization データ移行に対する Cohort B の適格性は、アクティブでオプトインなベータ Organization に焦点を当てています。より大きな cohort にスケールする前に移行のリスクを下げるために、登録、プロファイル、trust and safety の基準を定めています。

| 属性 | 値 |
| --- | --- |
| Cohort 名 | Active Opt-In Beta |
| 目標規模 | 最大 1,000 Organization（手作業で選んだ約 10 〜 50 から始め、1,000 までスケール） |
| Visibility | Private のみ |
| エンゲージメントモデル | オプトイン、ガイド付き（human-in-the-loop による審査） |
| 前提条件 | Cohort A の移行が検証済みであること。ユーザーの現在の機能セットがサポートされた状態で TLG を org に移行できること |
| 想定される影響 | Organizations と Cells の実世界での採用に関するイテレーション。WAL、LWLocks、データベースサイズへの影響はごくわずか |

### 1. 登録とエンゲージメントの基準

#### 1.1 ガイド付きオンボーディングを伴うオプトイン

Organization は、厳選された登録プロセスを通じて明示的にオプトインする必要があります。この cohort にセルフサービスのサインアップはありません。

Tenant Scale、Protocells Steering Committee、Security が、承認前に各候補をレビューします。

顧客は、移行中の短いリードオンリーの期間が生じる可能性、移行が一方向であること、まだ採用していない特定の機能が利用できなくなる可能性など、この体験がベータ版であることを承知する必要があります。

#### 1.2 段階的なランプ

- Phase 1（最初の波）: 手作業で選んだ 10 〜 50 の Organization。専任サポートで重点的にモニタリングします。
- Phase 2（拡大ベータ）: Phase 1 から得られた学びによって確信が深まるにつれて、最大 1,000 の Organization までスケールします。

### 2. Organization プロファイルの基準

#### 2.1 Visibility と名前空間構造

- Private 名前空間のみ。クロス名前空間の visibility や公開向けの機能の表面積に関する複雑さを避けるため、public 名前空間は除外します。
- Organization ごとに単一のルート名前空間（単一の TLG から org への移行）。統合が必要な複数の TLG を持つ Organization は、後の cohort に延期します。
- クロス名前空間のやり取りなし。Organization のユーザーは主に単一のルート名前空間内で活動しているべきです。Organization 外の他のルート名前空間に大きく貢献しているユーザーは除外します。

#### 2.2 ライセンスティア

- Free または有料（Premium または Ultimate）の Organization が適格で、審査レベルが異なります。
- Free Organization: 含める基準は低めです。期待値が低く契約上の SLA がないアクティブユーザーで、Organizations 体験の全体を検証するのに役立ちます。
- 有料 Organization: 基準は高めです。明示的な Customer Success の承認と、ベータプログラムについて文書化された理解が必要です。機能使用の互換性について審査済みの有料顧客のみを含めます（下記のセクション 3 を参照）。
- トライアルサブスクリプションは対象外。トライアル顧客は過渡的な状態にあり、一方向の移行には適しません。

#### 2.3 ユーザー数とアクティビティレベル

- アクティブなルート名前空間: 過去 30 日間に少なくとも 1 人のアクティブユーザーがいること（ログイン、または Git もしくは API のアクティビティによる）。
- 小〜中規模のユーザー数: 影響範囲と移行の複雑さを抑えるため、ユーザー数が 500 以下の Organization を対象とします。大企業（1,000 人以上のユーザー）は Cohort C または D に延期します。
- 中程度のアクティビティレベル: データベース時間で上位 1,000 の名前空間（Cohort C）を除外します。アクティブだがデータベース負荷が不釣り合いに重くない、ロングテールの Organization を対象とします。

### 3. Trust and safety とセキュリティのリスク低減の基準

Matt Coons と Ruby Nealon との Security と Protocells の sync での議論に基づき、次の基準が Cohort B のセキュリティとトラストの観点からのリスクを低減します。

#### 3.1 厳選され審査されたリスト

- Cohort B は、移行前に Security Operations と Trust and Safety のリーダーシップによってレビューされた、厳選された Organization のリストでなければなりません。
- Matt Coons は次のように述べました。「信頼できる org であれば、もっと自信を持てる」「厳選されたリストであれば、リーダーシップの賛同を得やすいかもしれない。その場合、一部のカバレッジのギャップを許容できる」
- 各 Organization は、登録前に Trust and Safety の基準に照らして審査されるべきです。

#### 3.2 アカウントの状態と不正利用の履歴

- Organization 内に BAN またはフラグが付いたユーザーがいないこと。
- 名前空間またはそのメンバーに対する不正利用報告の履歴がないこと（レガシー cell 上の Omamori データで検証）。
- Organization のメンバーに関連付けられた使い捨てメールドメインがないこと。
- アカウント年齢要件: 一時的なアカウントやボット主導のアカウントをフィルタリングするため、Organization オーナーのアカウントは少なくとも 6 ヶ月以上経過していること。
- 過去 90 日間に Trust and Safety の介入がなかったこと。

#### 3.3 cell 上での新規ユーザーサインアップなし

- Protocell 上で新規ユーザー登録を許可してはなりません。すべての新規サインアップは引き続きレガシー cell で行います。これにより、完全な Trust and Safety カバレッジのない cell に、未知または信頼できないユーザーが到達するのを防ぎます。
- 移行された Organization 内のユーザーは、既存の認証済みセッションを通じて cell にアクセスします。
- Organization の管理者は、新規ユーザーを自分の Organization に明示的に招待または追加する必要があります。

## 結果

- Cohort B は、小規模で private な低リスクの Organization の厳選されたセットに限定されており、これにより影響範囲は抑えられますが、実世界での検証の幅も制限されます。
- すべての候補 Organization は、登録前に Security Operations と Trust and Safety のリーダーシップによる手作業の審査を必要とし、運用上のオーバーヘッドが増えます。
- セルフサービスのサインアップはなく、すべての登録がガイド付きであり、これによりスケールは制限されますがコントロールは高まります。
- Public 名前空間とクロス名前空間のやり取りは除外され、複雑さは後の cohort に延期されます。
- 段階的なランプ（最初は 10 〜 50、その後最大 1,000）は段階的に確信を与えますが、Cohort B を完全に実行するにはより長い時間がかかることを意味します。
- Protocells では新規ユーザー登録がブロックされており、Trust and Safety のツールのカバレッジが十分になるまで、すべてのユーザー増加は引き続きレガシー cell で行われることを意味します。
- 有料顧客には明示的な Customer Success の承認が必要で、調整の依存関係が増えます。
