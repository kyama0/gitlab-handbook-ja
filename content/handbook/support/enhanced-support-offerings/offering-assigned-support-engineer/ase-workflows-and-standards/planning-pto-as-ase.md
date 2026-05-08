---
title: ASE としての PTO 計画
description: Assigned Support Engineer の PTO 計画
upstream_path: /handbook/support/enhanced-support-offerings/offering-assigned-support-engineer/ase-workflows-and-standards/planning-pto-as-ase/
upstream_sha: c1bf211b73eb496a1cb1e97c36f3e2aceeb892ba
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
---

## ASE PTO 計画

Assigned Support Engineer (ASE) 契約に定められているとおり、私たちの顧客は ASE が対応できないとき、その代理を務める指名されたエンジニアがいることを期待しています。つまり、ASE が休暇を取る予定がある場合、適切なカバー要員を特定する必要があります。このワークフローは、ASE が計画的休暇 (PTO) のカバーを手配するために従うべき推奨プロセスを記述したものです。

### PTO の計画 {#planning-pto}

休暇の少なくとも 2 週間前までに、その全期間にわたってあなたをカバーしてくれる人を見つけてください。

別の ASE があなたをカバーできる場合、それが第一選択肢です。次に、ASE の役割に関心を示している SE を検討してください。最後に、適任だと考えるその他の SE を検討してください。

適切なバックアップを見つけたら、[Assigned Support Engineer プロジェクト](https://gitlab.com/gitlab-com/support/assigned-support-engineers/-/issues)で Issue を作成します。Issue の中でマネージャーとバックアップをタグ付けします。不在となる日付を明確に記載してください。

### PTO の前週

- バックアップとアカウントおよびオープンチケットをレビューする
- 顧客とアカウントチームに今後の不在とカバープランを伝える
- アカウントを監視する SE が、新規チケットの到着時に通知を受け取れるよう、[Zendesk 通知アプリ](/handbook/security/customer-support-operations/zendesk/apps/global#notifications-app)の設定を支援する
- Slack の [`Time Off by Deel` の Delegate Tasks 機能](https://help.letsdeel.com/hc/en-gb/articles/11901927070737-How-To-Request-Time-Off-With-Deel-Plugin#h_01GNY1Q325CCDEMASHZCMMY4RS)を使用して、各アカウントについて誰がカバーするかを示す

### PTO からの復帰時

復帰したら、バックアップと会って、彼らがあなたの代わりに行った業務をレビューします。そして、顧客とアカウントチームに復帰を通知してください。

このプロセスから学んだ教訓を、[Assigned Support Engineer プロジェクト](https://gitlab.com/gitlab-com/support/assigned-support-engineers/-/issues)で作成した Issue に追加し、その後 Issue をクローズします。このハンドブックページの改善も検討してください。

## PTO 地域カバー Pod パイロット (AMER)

[RFC - Discuss options for PTO planning workflow update](https://gitlab.com/gitlab-com/support/assigned-support-engineers/-/issues/92#two-option-2-regional-coverage-pod-clustered-pool) での議論を受け、**2025-11-15** より、ASE は地域カバー Pod を使った PTO カバーの新形式をテストするパイロットプログラムを実施します。

1 人の ASE が PTO 中の場合、残りの 2 人の ASE は **高優先度のアカウントのみ** をカバーします。平均的に、カバー担当の ASE は週あたり約 8 時間をカバー業務に費やすことを想定しています。

現在の Pod の編成は、後述の[現在の Pod 編成](#current-pod-assignments)セクションで詳述されています。

### 概要

- ステータス: パイロットプログラム
- 開始日: `2025-11-15`
- 中間レビュー: `2025-12-15`

ASE チームは、PTO を享受できないこと、不明確なカバー体制によるストレス、すべての不在に対するマイクロマネジメント、構造化されたプロセスの欠如によるバーンアウトを経験してきました。このパイロットは、ASE の PTO 計画方法を再構築することによってこれらの課題に対処することを目指します。

AMER の ASE は 3 名ずつのカバー Pod に編成されます。各グループは PTO 中のメンバーを互いにカバーします。Pod が何らかの理由でグループ内でカバーをこなせない場合は、[Pod がカバーできないとき](#when-your-pod-cant-cover)で定義されたガイダンスを使用します。

Pod は、アカウントの一貫したカバーを維持するために、緩やかにタイムゾーンに沿って編成されています。

### 仕組み

各カバー Pod は 3 人の ASE で構成され、1 人の ASE が Pod リードを務めます。Pod は年に 2 回、メンバー構成をローテーションします。ASE は、同時期に他の何人がすでに不在かに基づいて PTO を計画します。

- **1 人不在**: Workday に入力し、カバーグループと調整する
- **2 人不在**: Workday に入力し、可視性のために `#support_assigned-support-eng` に投稿する
- **3 人以上不在**: `#support_assigned-support-eng` に投稿し、Workday に入力する前に ASE マネージャーをタグ付けする。マネージャーがカバーが実現可能かを評価し、ASE と次のステップを協議します。

当面、業務を文書化し、PTO に備えるためには、[PTO の計画](#planning-pto)セクションのガイダンスを使用してください。

### Pod がカバーできないとき {#when-your-pod-cant-cover}

別の Pod からのカバーをリクエストするために `#support_assigned-support-eng` に投稿してください。他の ASE は 1〜2 アカウントを引き受けるよう申し出るべきです。48 時間以内（計画 PTO の場合）または 4 時間以内（緊急 PTO の場合）にボランティアがいない場合、ASE マネージャーがカバーを割り当てます。

### 現在の Pod 編成 {#current-pod-assignments}

Pod にはリーダーがいません。メンバーは共有アカウントをサポートする際、[managers of one](/handbook/leadership/#managers-of-one) として行動し、グループとして意思決定を行うべきです。

#### Pod alpha

- {{< member-by-gitlab "michwalker" >}} - 4 accounts - United States
- {{< member-by-gitlab "dbass90" >}} - 4 accounts - Canada
- {{< member-by-gitlab "erisrenee" >}} - 1 accounts - United States

#### Pod beta

- {{< member-by-gitlab "klang" >}} - 4 accounts - United States
- {{< member-by-gitlab "adamlauzon" >}} - 4 accounts - Canada
- {{< member-by-gitlab "magomez3" >}} - 3 accounts - United States

#### Pod gamma

- {{< member-by-gitlab "a.conrad" >}} - 4 accounts - United States
- {{< member-by-gitlab "pselva" >}} - 0 accounts - Canada
- {{< member-by-gitlab "jessie" >}} - 1 account - United States
- {{< member-by-gitlab "m_lussier" >}} - 1 account - United States
