---
title: サポートエマージェンシーをアカウントエスカレーションに変換する
description: エマージェンシーをアカウントエスカレーションに変換するタイミングと方法に関するサポートエンジニアおよびマネージャー向けのガイダンス
category: On-call
upstream_path: /handbook/support/workflows/emergency-to-escalation-process/
upstream_sha: 47fdb6582389288bed0f04a23aa5d972c3ce1ff5
translated_at: "2026-05-08T21:00:00Z"
translator: claude
stale: false
---

## 概要

サポートエンジニアおよびマネージャーとしての日々の業務の中で、エマージェンシーが私たちが想定していたよりも大きくなったり、1 回の通話では解決できなかったりする場合があります。そのような場合、このドキュメントは、エマージェンシーから Customer Success チームとのアカウントエスカレーションに変換する方法のガイドとして機能します。

## マインドセットから始まる

日々の業務において、サポートエンジニアは自然と受動的です: チケットが作成され、その後私たちはそのチケットに取り組みます。顧客がエスカレーションされた状態にあるときは、これが変わります。エスカレーションの全体を通じてガイドとして行動するため、より能動的になるように切り替える必要があります。

## アカウントエスカレーションを開始するタイミング

[Customer Success Escalations Process](/handbook/customer-success/csm/escalations/) のガイドラインに従ってください。決定を一緒に行うために [Support Manager On-call](/handbook/support/workflows/support_manager-on-call/) と相談してください。

決定をガイドするためのいくつかの質問:

- エマージェンシーがアップグレード後に発生しており、アップグレードの結果として複数の同時問題/チケットがありますか?
- エマージェンシーが 3 時間以上続いており、明確な解決の見通しがありませんか?
- エマージェンシーによってブロックされている外部要因（更新/移行/その他のイニシアチブ）がありますか?
- GitLab Professional Services が最近顧客と協力していましたか? その業務のエンジニアがまだ支援可能ですか?

## アカウントエスカレーションを開始する方法

1. [エスカレーションレベルの CSM ハンドブック](/handbook/customer-success/csm/escalations/#definitions-of-severity-levels) を参照して、使用するエスカレーションレベルを決定します。
1. [エスカレーション DRI](/handbook/customer-success/csm/escalations/#escalation-dri) となる、アカウントの CSM に支援を求めます。顧客に CSM がいない場合は、割り当てられた AE、CSE、またはそれらの地域マネージャーに連絡します。
1. 応答がない場合は、Manager On-call と一緒に [エスカレーションを開く](/handbook/customer-success/csm/escalations/#opening-the-escalation) 手順に従ってください（現時点では SalesForce へのアクセス権を持つ人のみがエスカレーションを開始できることにご留意ください）。

## アカウントエスカレーション中の期待事項

サポートエンジニア / マネージャーの役割は、問題の解決に加えて **問題の定義** に焦点を当てます。Slack チャンネルでのコミュニケーション、チケットの更新、顧客との通話への参加の間で時間のバランスを取る必要があります。

留意すべきいくつかの点:

- on-call サポートエンジニアとして、エマージェンシーチケットを自分に割り当てます。割り当てたら、GitLab チームメンバーが更新をどこで取得できるかわかるよう、**Internal Comment** で Slack チャンネルへのリンクを記載します。
- シフトの終わりに、次の on-call サポートエンジニアとマネージャーがエスカレーションを引き継げるよう、エスカレーションについて更新します。
- 取得した更新を Slack チャンネルに投稿します。
- 通話が 3 時間を超える場合は、休憩を取って問題を再定義し、合意した時間にミーティングを再開することを検討してください。
- エスカレーションのうち私たちが主導する部分では、次のタッチポイントがいつ起こるかを顧客に明確に伝える必要があります。顧客が私たちと再び連絡を取るために別のエマージェンシーチケットを作成する必要があってはなりません。
- エスカレーションされた状態に入ったら、[Dev Escalations](/handbook/engineering/workflow/development-processes/infra-dev-escalation/process/) を通じて開発に完全にアクセスできます。

## アカウントエスカレーションのクローズ

エスカレーション DRI がクローズに同意したら、[エスカレーションをクローズする](/handbook/customer-success/csm/escalations/#closing-the-escalation) 手順に従ってください。
