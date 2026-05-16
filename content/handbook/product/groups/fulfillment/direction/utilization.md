---
title: "Fulfillment: Utilization の方向性"
description: "Utilization グループは、お客様が消費型リソースの使用状況データ (ストレージ、コンピュート分、転送量) にアクセスできるようにし、ビジネスニーズに最適な意思決定ができるようにすることを目指しています。"
upstream_path: /handbook/product/groups/fulfillment/direction/utilization/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-27T09:56:28-05:00"
---

## Fulfillment Utilization の概要

Utilization グループは、お客様が消費型リソースの使用状況データ (ストレージ、コンピュート分、転送量) にアクセスできるようにし、ビジネスニーズに最適な意思決定ができるようにすることを目指しています。

## ビジョン

_私たちの長期的なソリューションコンセプトは何か? 例えとして、山頂に到達したときの景色はどうなっているか?_

消費型リソースの使用状況は、透明性のある使用状況の可視化、推奨される使用状況管理のレコメンデーション、購入の指針を通じて、お客様に予測可能性を提供します。私たちのセールスチームは、その会話の基盤となる詳細な使用状況データを携えて、成長についてのお客様との対話を進められるようになります。

## 機能の概要と成熟度

_Utilization グループはどのような機能を担当し、それらはどの程度成熟しているか?_

**凡例**:

- 🙂 **Minimal**: 限られたユースケースで利用可能。社内チーム向けの一定の透明性あり。
- 😊 **Viable**: ほとんどのユースケースで利用可能。社内チーム向けの一定の透明性あり。
- 😁 **Complete**: 適格なすべてのユースケースで完全に機能。社内チーム向けの完全な透明性あり。
- 😍 **Lovable**: 外部および社内のユーザーから絶賛されている。

| 機能 | 成熟度 | 説明 |
|------------|:--------:|-------------|
| ストレージ使用状況の可視化 | 😊 Viable | お客様がどれくらいのストレージを使っているか、どのプロジェクト/ファイルタイプがその使用に寄与しているかを把握できる。 |
| ストレージクォータ | 😊 Viable | お客様がストレージ制限のしきい値内にいるかどうか、どう対処するか (削除、追加、ストレージ制限の設定) を把握できる |
| コンピュート分使用状況の可視化 | 😊 Viable | お客様がどれくらいのコンピュート分を使っているかを把握できる |
| コンピュート分のクォータ | 😊 Viable | お客様がコンピュート分を使い切ろうとしているか、どうやって追加購入するかを把握できる |
| 転送量使用状況の可視化 | まだ利用不可 | お客様がどれくらいの転送量を消費しているかを把握できる |
| 転送量のクォータ | まだ利用不可 | お客様が転送量を使い切ろうとしているか、どうやって追加購入するかを把握できる |

## 1 年計画

_私たちのビジョン達成と機能成熟度の向上に向けた意義ある一歩を踏み出すために、今後 12 か月でどこに注力するか?_

### 1 年ビジョン

1 年後、私たちは以下を達成していることを期待しています:

1. ✅ ユーザーに [MVC のストレージ可視化](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/1769) を提供
2. ✅ [Usage Quotas ページ](https://gitlab.com/groups/gitlab-org/-/epics/7176) 向けの共通レイアウトを作成。これにより、コードの重複が減り、ページのすべてのコードが 1 つのディレクトリに収まることで開発者体験が向上し、今後のコード重複が緩和され、すべてのティアとエディションで Usage Quotas が利用可能になりました。
3. GitLab.com Free ティアに対する [コンピュート分制限](https://gitlab.com/groups/gitlab-org/-/epics/13989) の調整を完了

### ロードマップ

1. GitLab.com Free ティアに対する [コンピュート分制限](https://gitlab.com/groups/gitlab-org/-/epics/13989) の調整を完了

### 将来の検討候補

| やるべき仕事は何か? | なぜそれを検討しているか  |
|---------|--------|
| ストレージ使用状況の [可視化と適用](https://gitlab.com/groups/gitlab-org/-/epics/10940) | 時間の経過とともに、GitLab ネームスペースは大量のストレージを生成しうる。これには、コードのプッシュ、新しいコンテナやパッケージの作成、CI/CD ジョブの実行などの活動が含まれる。このストレージは GitLab 運用コストを増加させる。 |
| [自己管理型ストレージ体験](https://gitlab.com/groups/gitlab-org/-/epics/11423) の改善         |  自己管理型のユーザーは、ストレージ使用状況の可視化に関連するジョブを達成し、ストレージ制限 [機能](https://docs.gitlab.com/ee/administration/settings/account_and_limit_settings.html#repository-size-limit) を活用するための UI を必要とする。彼らはストレージ強制制限に関連する UI を見る必要はない。     |
| 転送量の可視化と適用 | 時間の経過とともに、GitLab ネームスペースには相当な転送量の使用が発生する場合がある。これは GitLab 運用コストを増加させる。 |
| [有料ティアのストレージ適用](https://gitlab.com/groups/gitlab-org/-/epics/8380) | 時間の経過とともに、GitLab ネームスペースは大量のストレージを生成しうる。これには、コードのプッシュ、新しいコンテナやパッケージの作成、CI/CD ジョブの実行などの活動が含まれる。このストレージは GitLab 運用コストを増加させる。  |
| [ストレージ製品の価格設定とパッケージングのイノベーション](https://gitlab.com/groups/gitlab-org/-/epics/11774) のサポート | 現在のストレージ制限はプランごとに 1 サイズで設定されており、シート数が多いネームスペース (例えば 20 席対 2000 席) の異なるニーズを考慮していない。  |
| 消費型製品向けの [消費型価格設定およびパッケージングのイノベーション](https://gitlab.com/gitlab-org/fulfillment/meta/-/issues/1541) のサポート。 | シート単位の価格設定は自動化の価値とともにスケールしない。ソフトウェアは手作業のプロセスを徐々に自動化していく。製品が成功するほど、お客様が必要とするユーザーシートの数は減る。 |

## 補足情報

### Q&A

| 質問 | 回答 |
|---------|-------------|
| Utilization はどんなタイプのお客様にサービスを提供するか? | - SM および SaaS のセルフサービスのお客様 <br>- SM および SaaS のセールス支援のお客様 <br>- SM および SaaS のチャネルパートナーとそのお客様  |
| Utilization はどんなお客様ペルソナに向けて課題解決をしているか? | 私たちのお客様は [buyer persona](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/) に該当し、会社規模や役割に応じて意思決定および購入プロセスで異なる役割を担うことがあります。   |
| Utilization はどんなお客様セグメントに注力しているか? | - SMB および中堅企業: [アプリケーション開発マネージャー](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/#app-dev-avery) は、チーム全体の使用状況を可視化し、自社の方針/プロセス/予算に合わせて使用状況を制御できる必要がある。 <br> - 大企業またはエンタープライズ企業: [リリースおよび変更管理ディレクター](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/#release-rory) は、正確な請求と、使用状況情報に基づいた購入判断ができることに関心がある。 |
| Utilization はどんな社内チームにサービスを提供するか? | - [Support](/handbook/support/) <br>- [Customer Success](/handbook/customer-success/) <br>- [Sales](/handbook/sales/)  |
|Utilization が責任を負わないことは何か?|Utilization グループは、お客様や管理者向けに適切なレポーティングと可視化を構築する一部として、他のチームが提供する計算結果に依存しています。ただし、Utilization はこれらの基礎データの収集や生の計算には責任を負いません。具体的には、Utilization は以下のような事項に関する正確なデータを提供してもらうために Enablement チームに依存します: <br>1. プロジェクトレベルのストレージ計算 (git repo + git LFS)<br>2. ネームスペースのストレージ計算: git repo、LFS、アーティファクト、コンテナレジストリなど。 <br> 3. コンピュート分 |
