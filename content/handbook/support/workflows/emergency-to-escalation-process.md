---
title: サポートの Emergency をアカウントエスカレーションへ変換する
description: Emergency をアカウントエスカレーションに変換するタイミングと方法に関する、サポートエンジニアおよびマネージャー向けのガイダンス
category: On-call
upstream_path: /handbook/support/workflows/emergency-to-escalation-process/
upstream_sha: eff3a749f8927544a08073e8f660283a5d80478b
lastmod: "2026-05-22T11:27:49+08:00"
translated_at: "2026-05-22T21:47:45Z"
translator: claude
stale: false
---

## 概要

サポートエンジニアおよびマネージャーとしての日々の業務の中で、Emergency が当初想定していたよりも大きくなったり、1 回のコールでは解決できなかったりすることがあります。そのような場合、このドキュメントは、Emergency から Customer Success チームとのアカウントエスカレーションへ変換する方法のガイドとして機能します。

## マインドセットから始まる

私たちサポートエンジニアは、日々の業務では本質的にリアクティブです。チケットが作成され、その後私たちはそのチケットに取り組みます。顧客がエスカレーションされた状態になると、これが変わります。エスカレーションの全期間を通じて顧客をガイドするため、よりプロアクティブに動くように切り替える必要があります。

## アカウントエスカレーションを開始するタイミング

[Customer Success Escalations Process](/handbook/customer-success/csm/escalations/) のガイドラインに従ってください。判断は [Support Leader on the Hook (SLOTH)](/handbook/support/workflows/support-leader-on-the-hook/) と相談のうえで一緒に行うべきです。

判断の助けになるいくつかの質問:

- Emergency がアップグレード後に発生していて、アップグレードに起因する複数の同時並行の問題／チケットが発生していないか?
- Emergency が 3 時間以上続いており、明確な解決の見通しが立っていないか?
- Emergency によってブロックされている外部要因（更新／マイグレーション／その他のイニシアチブ）はないか?
- GitLab Professional Services が最近顧客と協働していなかったか? そのエンゲージメントのエンジニアはまだ支援に入れる状態か?

## アカウントエスカレーションを開始する方法

1. 使用するエスカレーションレベルを決めるため、[エスカレーションレベルの定義に関する CSM ハンドブック](/handbook/customer-success/csm/escalations/#definitions-of-severity-levels) を参照します。
1. [エスカレーション DRI](/handbook/customer-success/csm/escalations/#escalation-dri) となる、アカウントの CSM に支援を求めます。顧客に CSM がいない場合は、アサインされている AE、CSE、またはそのリージョナルマネージャーに連絡します。
1. 応答がない場合は、Manager On-call と一緒に [エスカレーションを開く](/handbook/customer-success/csm/escalations/#opening-the-escalation) 手順に従ってください（現時点ではエスカレーションを開始できるのは SalesForce にアクセス権を持つ人のみであることに留意してください）。

## アカウントエスカレーション中の期待事項

サポートエンジニア／マネージャーの役割は、問題を解決することに加えて **問題を定義すること** に焦点を当てます。Slack チャンネルでのコミュニケーション、チケットの更新、顧客とのコールへの参加の間で時間のバランスを取る必要があります。

留意すべきいくつかの点:

- on-call のサポートエンジニアとして、Emergency のチケットを自分にアサインします。アサインしたら、GitLab チームメンバーが最新情報をどこで取得できるかわかるよう、**Internal Comment** で Slack チャンネルへのリンクを記載します。
- シフトの終わりに、次の on-call サポートエンジニアとマネージャーに、エスカレーションを引き継げるよう状況を共有します。
- 取得した最新情報は Slack チャンネルに投稿します。
- コールが 3 時間を超えるようであれば、いったん休憩し、問題を再定義したうえで、合意した時間にミーティングを再開することを検討してください。
- エスカレーションのうち私たちが主導している部分では、次のタッチポイントがいつ起こるかを顧客に明確に伝える必要があります。顧客が私たちと再び連絡を取るために別の Emergency チケットを作成しなければならない、という状況になってはなりません。
- エスカレーションされた状態に入ったら、[Dev Escalations](/handbook/engineering/workflow/development-processes/infra-dev-escalation/process/) を通じて開発側にフルアクセスできます。

## アカウントエスカレーションのクローズ

エスカレーション DRI がクローズに同意したら、[エスカレーションをクローズする](/handbook/customer-success/csm/escalations/#closing-the-escalation) 手順に従ってください。
