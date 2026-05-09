---
title: メトリクス分析 - 仮説とアクション
description: "サポートメトリクスの仮説を分析する方法"
upstream_path: /handbook/support/managers/metrics-analysis/actions/
upstream_sha: 9da08370100b76603b2eb82901592f9d21c9766c
translated_at: "2026-05-08T09:50:12Z"
translator: claude
stale: false
---

## 目的

このページは、メトリクスの落ち込みに関する仮説と、それらを評価する手法を文書化しています。
さらに、低迷しているメトリクスを下支えするために使用される可能性のある具体的なアクションも含んでいます。

## FRT が目標を下回っている

---

### チケット数が多すぎる

#### 過去の分析

##### 2020-09-01

[2020-09-01](https://gitlab.com/gitlab-com/support/metrics/-/issues/1)

**収集した証拠:**

- 過去の FRT 達成状況
  - [Support KPIs - SM => FRT SM](https://gitlab.zendesk.com/explore/dashboard/593393F9EDD57F39F9745F442B691EEAD106AA49B6C907D3D50046FBB4AC151E/tab/12396242)
  - [Support KPIs - SaaS => FRT SaaS](https://gitlab.zendesk.com/explore/dashboard/593393F9EDD57F39F9745F442B691EEAD106AA49B6C907D3D50046FBB4AC151E/tab/12396192)
- [Support Hiring Reports](https://drive.google.com/drive/search?q=support%20hiring%20reports) からの月別人員数
- 月別チケット数

**アプローチ:**

- 領域別の過去の達成状況を調べ、特定の種類のチケットがパフォーマンス低下の原因かを確認した
- 過去および現在のチケット件数を見て、外れ値（直近期間でチケットが大幅に増加しているなど）がないか調べた
- 過去 1 年間のチケット／エンジニア比率を覗いた

#### 形成アクション

チケット数が多すぎる場合:

- 何がその数量を引き起こしているか判断します。
  - 特定の問題タイプであれば、自動化やワークフローの明確化を調査して、その問題タイプの効率を高めます。
  - 特定のインシデントであれば、マクロやワークフローを整備して効率を上げ、それらのチケットに集中する特定のエンジニアを割り当てることを検討します。
  - 人員不足であれば、採用に集中し、特定のチケット問題タイプにエンジニアが応えられるようになる速度を上げるためにオンボーディングを整備します。
  - 全般的な増加であれば、「バーストモード」ワークフローに集中します。最初の応答と顧客期待値の設定に集中するグループを編成します。

---

### 時間のかかるワークフローがパフォーマンス低下を招いている

#### 過去の分析

#### 2020-09-01: FRT Hawks

[2020-09-01: FRT Hawks が needs-org チケットに費やす時間が増えてパフォーマンス低下を招いている](https://gitlab.com/gitlab-com/support/metrics/-/issues/6)

**収集した証拠:**

- プランがない状態でメールから開かれたチケット（つまり needs-org ワークフローを引き起こす可能性のあるメール）

**アプローチ:**

- needs-org ワークフローを引き起こす可能性があるチケット数を調べる
- そのうち実際にワークフローを引き起こしたチケットを把握する
- ワークフローを調整することで節約できる時間を判断する

#### 形成アクション

時間のかかるワークフローがパフォーマンス低下を招いていると考えられる場合:

- そのワークフローに該当するチケット数を特定します
- 対象のチケット群に対してワークフローが均等に適用されていることを検証します
- 自動化を通じて効率化できるかを確認します

---

### 特定のチケット群へのリソース配分がチーム全体の処理能力を低下させている

#### 過去の分析

##### 2020-09-01: US Federal により集中したリソースの追加

[2020-09-01: US Federal により集中したリソースを追加した結果、チーム全体の処理能力が低下している](https://gitlab.com/gitlab-com/support/metrics/-/issues/7)

**収集した証拠:**

- [YTD Incoming Tickets by Priority](https://gitlab-federal-support.zendesk.com/explore/dashboard/5D43737D8DD3E9472A3B176CE984ADCA2391368E94E7F578AE97B14D39152F96)
- チームサイズ（グローバルおよび AMER）
- チケット解決目標

**アプローチ:**

- 「一般」キューから減少したチケット／エンジニア比を見て、理論上の処理能力損失を調査した。
- AMER およびグローバルの理論上の損失を調査した。
- 上記の計算を「実際の」クローズ率で繰り返し、理論上の処理能力損失を調査した。
- このキューが生産性の 100% を占めると仮定して、「最悪ケース」の処理能力損失を調査した。

##### 2020-09-01: L&R 追加によりリソースが他に回らない

[2020-09-01: L&R 追加により、補充されていない他のキューからリソースが奪われている。](https://gitlab.com/gitlab-com/support/metrics/-/issues/5)

**収集した証拠:**

- [L&R に注力するエンジニアにおけるフォーム別パブリック／内部コメント数](https://docs.google.com/spreadsheets/d/1Zbfq--98a_PIazUi-8jMcFzT4znXEav8S42caeAuZyc/edit?usp=sharing)
- L&R に注力するエンジニアの過去のエンジニア経験（self-managed または SaaS）
- [L&R に注力していないエンジニアにおけるフォーム別パブリック／内部コメント数](https://docs.google.com/spreadsheets/d/1Zbfq--98a_PIazUi-8jMcFzT4znXEav8S42caeAuZyc/edit#gid=1091975505)

**アプローチ:**

- L&R チケットへの労力を見て、エンジニアの経験領域での労力を減少させたかという観点で処理能力損失を調査した
- それらのキューに経験があるエンジニアについて、L&R チケットへの労力と一般的なキューへの労力を比較した（例: L&R チケットの労力は SaaS チケット全体の労力の約 10%）
- このキューが労力／生産性の 100% を占めると仮定して、「最悪ケース」の処理能力損失を調査した。

#### 形成アクション

特定のチケット群へのチームメンバー配分が処理能力を低下させている場合:

- 採用する
- より良いワークフロー、プロセス、自動化を通じた効率改善を探す
- エンジニアリングの労力を通じて得られる成果があるかを判断し、影響を伝える

---

### チケットが難しくなった

#### 過去の分析

##### 2020-09-01: SaaS チケットが難しくなった

[2020-09-01: SaaS チケットが難しくなった](https://gitlab.com/gitlab-com/support/metrics/-/issues/9)

**収集した証拠:**

- [Requestor Wait Time](https://gitlab.zendesk.com/explore/dashboard/36925DBD1F5E3C7BA541DB38D11AC51E0EAAFDD30DCB63FDE83CF1389E555D96/tab/10100682)
- [Time to Resolve](https://gitlab.zendesk.com/explore/dashboard/36925DBD1F5E3C7BA541DB38D11AC51E0EAAFDD30DCB63FDE83CF1389E555D96/tab/10200712)
- [IC からの逸話的事例](https://gitlab.com/gitlab-com/support/metrics/-/issues/1#note_413985941) と提起されたポイントからのデータ:
  - [統合クラスタの月別成長](https://docs.google.com/spreadsheets/d/17nib0Q8Db6E-Ppa2VWjmpmuhBWf0yr5kBEHpnR1eCpI/edit#gid=0)
  - [Package Registry の成長](https://docs.google.com/spreadsheets/d/17nib0Q8Db6E-Ppa2VWjmpmuhBWf0yr5kBEHpnR1eCpI/edit#gid=1324848180)
  - [月別の内部 Issue 数](https://docs.google.com/spreadsheets/d/17nib0Q8Db6E-Ppa2VWjmpmuhBWf0yr5kBEHpnR1eCpI/edit#gid=1918925639)

**アプローチ:**

- 難易度と相関するデータ（TTR と Requestor Wait Time）を調査する
- チケットの主題に関する逸話的データを調査する。これらの領域はエキスパートが十分にカバーできていない可能性があるという仮定に基づく。

**メモ:**

- この仮説を調べる過程で集めたデータから、追加の反証可能な説明が生成された

#### 形成アクション

チケットが難しくなった場合:

- この領域に追加の人員を（一時的に）投入できるかを判断します
- 特定の課題領域を調査し、トレーニングとワークフローを開発します
- マクロ、ツール、ワークフロー改善を通じた効率化の余地があるかを確認します
- 困難なチケット領域の影響を低減する製品 Issue や機能要望を特定します
- 問題領域に関するドキュメントと、顧客が自己解決するのに役立つ追加コンテンツを調査します

---

### 休暇がパフォーマンスに影響している

#### 過去の分析

##### 2020-09-14: PTO 中のメンバー

[2020-09-14: 夏休みおよび F&F day の PTO により、パフォーマンスに遅れが生じている](https://gitlab.com/gitlab-com/support/metrics/-/issues/3)

**収集した証拠:**

- [チケット更新ボリューム](https://gitlab.zendesk.com/explore#/pivot-table/connection/10438872/query/41841912)
- [ZD チケットへのアクティブな貢献を示すサマリースプレッドシート（エンジニアあたり月間 20 件以上のチケット更新）](https://docs.google.com/spreadsheets/d/1vEJ2ks8pNeR2HVUn1actQcGEHH1ERxct7_kIDasOWDo/edit#gid=960486526)
- [Zapier 対応 PTO 計算用スプレッドシート](https://docs.google.com/spreadsheets/d/1EFpF6_ixLtxaffd9hurvtnbXGpZuXrYAYx-5U4u3M40/edit#gid=1429709856)

**アプローチ:**

- FRT/NRT 達成率や応答時間中央値などの SLA パフォーマンス指標を調査し、下降トレンドが見られる月や週を特定する。
- チケットフォームやその他属性を使ってパフォーマンス低下を絞り込む。
- チケット更新ボリュームレポートを使い
  - その月／週にアクティブだと示されたエンジニアの数とその日付を相関させる（例: エンジニアあたり月 20 件のチケットを目標ボリュームとみなす）。
- Zapier 対応 PTO 計算用スプレッドシートを使い
  - PTO 中の IC の数とその日付を相関させる

#### 形成アクション

PTO が結果に影響を与えていたと特定された場合:

- 特定の日付／曜日に追加の人員を配置すべきかを判断します。
- 休暇ポリシーを調査し、調整が必要かを確認します - [ハンドブック](/handbook/support/support-time-off)。

---

### チケットの一部分が FRT 結果の低下の原因となっている

#### 過去の分析

##### 2020-09-14: チケットの一部分

[2020-09-14: チケットの一部分が FRT 全体のたるみの原因となっている](https://gitlab.com/gitlab-com/support/metrics/-/issues/2)

**収集した証拠:**

- 6 か月のチケットフォーム別および問題タイプ別の内訳 [スプレッドシート](https://docs.google.com/spreadsheets/d/1kp1VVorywEgYu0_YuMKDMpitSGo4Hjb7zXu-DOt3e0I/edit#gid=169305821)

**アプローチ:**

- （関連するチケットフォームの下で）各問題タイプの SLA 違反率（%）、SLA 中央値 TTR（Time To Resolve）、チケット総数を調査する。
- 結果を比較し、トレンドとスパイクを特定する。

#### 形成アクション

問題タイプの一部分が（他の問題タイプと比較して）パフォーマンス低下を示していると特定された場合:

- ボリュームが増加した、または SLA が低下し始めた日付を特定しようとします。
- 顧客に影響を与えた可能性のある潜在的な Issue や、これらの問題タイプに対するサポート提供能力に影響したと思われる Issue を特定します。
- 関連する IC とパフォーマンス低下について議論し、彼らと協力して、この特定の問題タイプのパフォーマンスが低下した可能性のあるブロッカーや説明を特定するよう努めます。

---

## その他

- FRT+NRT が目標を下回っている

- 提起される／時間あたりに違反するチケット数に対して、人員配置が適切に分散していない。メンバーに正しい時間帯で働くことを求められていない

### 過去の分析

#### 2020-09-15: 人員配置が適切に分散していない

[2020-09-15: 提起される／時間あたりに違反するチケット数に対して、人員配置が適切に分散していない。メンバーに正しい時間帯で働くことを求められていない](https://gitlab.com/gitlab-com/support/metrics/-/issues/4)

**収集した証拠:**

- [時間別の SLA 達成状況](https://gitlab.zendesk.com/explore/dashboard/3C721536831F0900DBAEBF0052B94FF8D8F3B83114E2D7C27135AA93A31F74FA/tab/12867812)
- [時間別の SLA 目標総数](https://gitlab.zendesk.com/explore/dashboard/3C721536831F0900DBAEBF0052B94FF8D8F3B83114E2D7C27135AA93A31F74FA/tab/12867822)

**アプローチ:**

- 達成済み SLA 更新数 + 違反 SLA 更新数のカウントを通じて、必要なチケット応答総数を調査する。これは作業の基本単位（チケット応答）を考慮しており、チケット数のカウントよりも高解像度な視点を与えてくれる。
- チケット応答を時間別および違反／達成別にセグメント化する。
- チケット応答を時間別および希望サポート地域別にセグメント化する。

##### 形成アクション

メンバーに正しい時間帯で働くことを求められていないと特定された場合:

- 問題のある時間帯ではキューにより注意を払うようサポートエンジニアに依頼します（例: 1 日の最後の 1 時間を、今後 4 時間以内に違反するチケットの片付けに使う、その時間帯にクラッシュセッションを推奨するなど）。

人員配置が適切に分散していないと特定された場合:

- 問題のある時間帯をカバーするのに適切な日照範囲を持つ地理的領域に採用活動を集中します。
- 3 つの主要地理的地域（AMER、APAC、EMEA）間でチームメンバー比率を再調整することを検討します。

<!--
---

### Hypothesis 2 for FRT

#### Past Analysis

#### Shaping Actions

## SSAT is below target

### Hypothesis 1 for SSAT

#### Past Analysis

#### Shaping Actions

## NRT is below target

### Hypothesis 1 for NRT

#### Past Analysis

#### Shaping Actions

---
-->
