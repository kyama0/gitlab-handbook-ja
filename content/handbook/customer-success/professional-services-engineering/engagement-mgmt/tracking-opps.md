---
title: "プロフェッショナルサービス EM オポチュニティトラッキング"
description: "オープン状態の PS オポチュニティを追跡するためのプロセスを説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/engagement-mgmt/tracking-opps/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## オポチュニティのトラッキング

### Salesforce.com でのトラッキング

プロフェッショナルサービス全体のパイプラインおよび個別のオポチュニティを追跡することは、プロフェッショナルサービスチームにとって重要です。これにより可視性を維持し、将来のプロジェクトに対するキャパシティを確保できるからです。
この重要性は、会計四半期（FQ）末が近づくにつれて高まります。通常、この時期に **Closed Won** ディールが急増する傾向があるためです。

この可視性を高めるため、エンゲージメントマネージャーは `Professional Services` セクション配下のオポチュニティに対して一連のフィールドを管理しています。これらのフィールドは、現在のフォーキャストに関するプロフェッショナルサービスのリーダーシップへの報告を支えるため、定期的にレビューおよび更新されます:

- `Engagement Manager` - オポチュニティをサポートするリードエンゲージメントマネージャーを示します
- `EM Confidence Rationale` - EM が、現在予測されている四半期内にオポチュニティがクローズすると考えるかどうかを裏付けるコンテキストおよび根拠です。
- `Scoping Issue Link` - 関連するスコーピング Issue への直接リンクです。
- `Professional Services Value` - EM はこのフィールドを更新して、エンゲージメントの現在の予想額を表すべきです。これは主にフォーキャスト目的で使われます。見積もり時点で、見積額がこのフィールドに上書きされることが想定されています。この値は、顧客が支払うすべてのエデュケーションおよびコンサルティングサービスを含みます。インベストメントサービスをリクエストする予定がある場合、SFDC Chatter で承認される時点までは、その金額もここに含めてください。承認時点で、インベストメントサービスを `Professional services Value` から取り除き、`Investment Services Value` に追加してください。
- `Proserve Amount` - このフィールドは、アカウントエグゼクティブ（AE）が見積もりを作成した後に、PS の値で自動更新されます。
- `Edu Services Value` - このフィールドは直接編集できません。見積もりが作成されると、見積もりされたエデュケーションサービスの値で自動的に入力されます。複数の見積もりが作成された場合、値は以前に追加された値（下記の `Edu Value Override` ワークフローによって追加されたものも含む）を上書きします。
- `Edu Value Override` - これは編集可能なフィールドで、オポチュニティサイクルの早い段階で正確にフォーキャストするために EM が記入する必要があります。これは `Edu Services Value` フィールドの値を上書きします。
- `Investment Services Value` - インベストメントサービスがセールス VP およびグローバルサービス VP によって承認されたら、EM が記入する必要があります。これは、フォーキャストおよび Closed/Won となったインベストメントサービスの会計の両方に使用されます。

### スコーピング Issue のトラッキング

#### スコーピング Issue EM ボード

スコーピング Issue は、[ps-plan](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ww-consulting/ps-plan) プロジェクト内の [サービス計算機](https://services-calculator.gitlab.io/) によって自動生成され、`Services Calculator` ラベルが付与されます。各 EM には、自分にアサインされたスコーピング Issue を追跡するボードがあります。

#### 新規スコーピング Issue のトリアージ

新規スコーピング Issue は ["Issues by EM" ボード](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ww-consulting/ps-plan/-/boards/2712579?label_name[]=Services%20Calculator) からアクセスでき、`Open` ラベルが付与されます。どのエンゲージメントマネージャーも、新規 Issue をトリアージし、適切にラベル付けして、正しい EM にアサインできます。スコーピング Issue にアサインされる EM は、アカウントレコードの `Account Demographics` セクション、`Sales Territory` フィールドで指定された地域を担当する人物であるべきですが、チームメンバー間でスコーピング Issue の負荷を平準化するためにチームによって別途決定された場合を除きます。

- オポチュニティを所有する地域に基づいて、適切な `Segment::` ラベルを追加します（下記の「その他のラベル」セクションを参照）。
- この地域を所有する関連する EM に新規スコーピング Issue をアサインします

ボードは、`proposal` キーを持つスコープ付きラベルを使用して、標準のスコーピング Issue ワークフローを追跡します:

| カラム | 定義 |
| --- | --- |
| Open | 各スコーピング Issue の開始状態 - EM はまだスコーピング Issue をレビューしていません |
| proposal::Awaiting_Discovery | EM は見積もりを作成できるように、アカウントチームから、またはスコーピングコール経由で追加情報を待っています |
| proposal::Strawman_WIP | EM は仮の見積もり（strawman）を作成中です |
| proposal::Estimate_Feedback | EM は仮の見積もりを完成させ、アカウントチームおよび／または顧客からのフィードバックを待っています |
| proposal::On_hold | PS エンゲージメントは進む可能性があるが、タイミングに遅れがあります |
| proposal::SOW_WIP | EM は SOW を作成中、または SOW のドラフトが顧客にレビューされていてフィードバック待ちです |
| proposal::Ready For Approval | SOW がドラフトされ、アカウントチームと顧客にレビューされ、署名へと進むためのゴーサインが得られました; GitLab レベニューが承認しました |
| proposal::Approved | SOW が PS ディレクターによって承認され、リーガルスタンプおよび署名のために提出できます |
| Closed | オポチュニティがクローズしたか、PS を進めない旨の連絡を顧客から受けました |

#### デリバリーチームのレビューと承認

`proposal::Strawman_WIP` ステージでは、（簡単でないものについて）テクニカルアーキテクトを巻き込んで初期の見積もりをレビューしてもらうのが良いプラクティスです。これは、ラベルを追加して Slack でシグナルを送ることで実現できます。具体的なプロセスは、[こちらの TA ハンドブックページ](/handbook/customer-success/professional-services-engineering/technical-architect/#engage-with-an-architect)で定義されています。

`proposal::SOW_WIP` ステージでは、リージョナルデリバリーマネージャー（RDM）の承認を得ることが必須です。RDM はスコープされたプロジェクトの成功裡なデリバリーに責任を負うためです。これは、Issue に `RDM::needs-review` ラベルを追加し、[#ps-engagement-mgrs](https://gitlab.slack.com/archives/C021J8Z88AJ) チャンネルで `@ps-deliverymanagers` にシグナルを送ることで実現できます。

### 勝率（Win Rate）

勝率は次のように計算されます:
> Win Rate =  ClosedWon / (ClosedWon + ClosedLost)

ここで:

- **ClosedWon** は、関連する SFDC オポチュニティが Closed/Won ステータスになったことで判定されます。これは `proposal:Closed_Won` ラベルで行われます
- **ClosedLost** は、関連する SFDC オポチュニティが Closed/Lost ステータスになったか、またはスコーピング Issue が 2 か月間アクティビティを持たなかったことで判定されます。これは `proposal:Closed_Lost` ラベルで行われます。これにより、Closed/Lost と見なされるべきものに対して客観的になれます。これは一般原則であり、オポチュニティがまだアクティブだが過去 2 か月以内に貢献がなかった場合、EM が上書きできます。

四半期ごとのレポーティングサイクルがあるため、これらのオポチュニティのスコーピング Issue がクローズした四半期を知る必要があります。これは、Closed Won または Lost に進む Issue に close_qtr::QXYY（例: `close_qtr::Q322`）ラベルを追加することで実現します。

### スコーピング Issue のトラッキングに使われるその他のラベル

- `EM_Status` - EM がフォローアップする必要があるものを視覚的に確認するため、スコーピング Issue に手動で追加します
  - `Waiting`: EM は次のステージに Issue を進めるアクションを取れるようになる前に、アカウントチームまたは顧客からの情報を待っています
  - `ToDo`: EM が現在のスコーピング Issue に対する次のアクションを持っています
- `Segment` - Issue がどのセールスリージョンのものかを追跡するためにスコーピング Issue に手動で追加します
  - Ent_APAC
  - Ent_EAST
  - Ent_WEST
  - Ent_EMEA
  - MM_APAC
  - MM_East
  - MM_EMEA
  - MM_West
  - SMB

  注: `Public Sector US` は、Services Calculator 経由で作成されたスコーピング Issue に対して、PubSec US チェックボックスがチェックされた場合に自動的に追加されるラベルです。
