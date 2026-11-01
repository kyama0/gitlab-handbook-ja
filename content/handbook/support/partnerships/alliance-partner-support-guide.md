---
title: Alliance パートナー サポートガイド
description: "Alliance パートナーとの連携方法に関する Support Engineering 向けガイド"
upstream_path: /handbook/support/partnerships/alliance-partner-support-guide/
upstream_sha: "52419353ea755a1ac823553385f8636ff2fcde17"
translated_at: "2026-11-01T05:03:57+00:00"
translator: claude
stale: false
lastmod: "2026-10-30T14:17:26-04:00"
---

## GitLab の連絡先 {#gitlab-contacts}

- **DRI** Tine Sørensen - Manager, Support Engineering, EMEA - @tsorensen
- **Director** Val Parsons - Director of Support Engineering, EMEA - @vparsons
- **AMER タイムゾーンの連絡先** Mike Dunninger - Manager, Support Engineering, AMER - @mdunninger
- **APAC タイムゾーンの連絡先** Wei-Meng Lee - Senior Manager, Support Engineering, APAC - @weimeng-gtlb

## Alliance パートナーとのサポート連携 {#alliance-partner-support-collaboration}

GitLab の Alliance パートナーは、共通のお客様のために GitLab とサポート連携を行うことがあります。共通のお客様とは、Alliance パートナー製品と GitLab 製品の両方を購入されているお客様です。すべての顧客は Ultimate ライセンスを保有しています。

サポート連携とは、GitLab 関連のチケットについて、Alliance パートナーが 1 次サポートを行い、2 次および 3 次サポートのために GitLab に引き継ぐことを意味します。

ほとんどの事項は他の顧客と同様に進みますが、以下のとおりいくつかの違いがあります。

## 一般的な情報 {#general-info}

### Alliance パートナー Slack チャンネル {#alliance-partner-slack-channel}

GitLab Support は Alliance パートナーのサポートチームと Slack チャンネルを共有しています。これらは #a_[Alliance パートナー名] という名前です。チャンネルは主にエスカレーションに使用されますが、必要に応じてサポートチーム間のコラボレーションにも利用できます。

Slack で問題を解決することはなく、解決はチケット内でのみ行います。ただし、Alliance パートナーのサポートチームから追加情報が必要な場合に、Slack チャンネルでコンタクトを取ることはあります。たとえば、問題が GitLab と Alliance パートナーの両製品にまたがる場合や、トラブルシューティングに必要な資料を入手する手助けが必要な場合などです。トピックが特定のチケットに関する場合は、Alliance パートナーのチケット ID を必ず含めてください。

### 定期的な接点 {#regular-touch-points}

Alliance パートナーのサポートチームと定期的にミーティングを行い、コラボレーションが円滑に機能し、お客様が優れたサポートを受けられるよう確認しています。アジェンダにトピックを追加したい場合は [Alliance パートナーの DRI](/handbook/support/partnerships/alliance-partner-support-guide/#gitlab-contacts)にご連絡ください。

### ZenDesk 組織 {#zendesk-organization}

Alliance パートナーの ZenDesk 組織には誰も追加しないでください。必要な場合は [上記の連絡先](/handbook/support/partnerships/alliance-partner-support-guide/#gitlab-contacts)にご相談ください。

## サポートガイド {#support-guide}

### チケットの顧客 {#ticket-customer}

チケットはパートナー側のサポートチームによって作成されますが、その元となる顧客は多数の異なる個別のお客様です。チケット内のコンテンツは、Alliance パートナーのチケットシステムにある顧客レポートから、私たちのシステムへ一字一句そのままコピーされます。つまり、返信は顧客から直接届くものになります。

チケット内のお客様は、GitLab と Alliance パートナーの双方の顧客です。

### チケットの命名 {#ticket-naming}

チケットは次の形式で命名されます: `[Customer name] - [Alliance partner internal ticket id] - [Ticket Subject]`

### チケットへの顧客追加 {#adding-customer-to-ticket}

Alliance パートナーのサポートチームは、チケット作成時に顧客を CC として追加する必要があります。他の顧客と同様に、GitLab 側ではチケットに連絡先を追加しません。

### サポートプロセスの違い {#support-process-differences}

GitLab のサポートプロセスは、Alliance パートナーのサポートチームの働き方とは異なる場合があり、必ずしも直感的ではない可能性があることに留意してください。常にポジティブな意図を仮定しましょう。

また、特定のパートナーには [特別なプロセス](https://internal.gitlab.com/handbook/support/specific-alliance-partners/) (GitLab 内部リンク。チームメンバーのみアクセス可)が存在する点にも注意してください。

### スコープ {#scope}

Alliance パートナーは、初期のチケットトリアージと 1 次サポートを担当します。GitLab Support は 2 次および 3 次サポートを担当します。

### チケットの優先度 {#ticket-priority}

Alliance パートナーがチケットをトリアージし、初期の優先度を設定します。GitLab Support は初回応答時にチケットの優先度が適切に設定されているとみなします。

後の時点で優先度が変わった場合や、優先度の調整が必要だと判断した場合は、チケット内で顧客に確認した上で、[通常のプロセス](/handbook/support/workflows/setting_ticket_priority/#resetting-ticket-priority)に従って優先度を変更します。

### 顧客との通話 {#customer-calls}

顧客との通話には、関連する Alliance パートナーのサポートエンジニアを必ず追加してください。
