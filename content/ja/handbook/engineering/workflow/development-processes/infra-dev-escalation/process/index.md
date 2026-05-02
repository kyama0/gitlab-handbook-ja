---
title: 開発エスカレーションプロセス（廃止）
upstream_path: /handbook/engineering/workflow/development-processes/infra-dev-escalation/process/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-amber-700">プロセス廃止 - 1月5日付で有効</p>

開発エスカレーションプロセスは1月5日付で廃止されました。専門家サポートには**Tier 2 オンコールプログラム**をご利用ください。

</div>


## プロセス変更

開発エスカレーションプロセスは現在有効ではありません。このプロセスは当初、Railsモノリスのサポートをインフラ部門に提供するために設定されました。時間の経過とともに、責任はインフラチームとサポートチームの両方への一般的なアプリケーションサポートの提供にまで拡大しました。しかし、アプリケーションが非常に広範囲になったため、特定の注意が必要なエリアの専門知識を単一のオンコールエンジニアが持っている可能性は低くなりました。

## 代替手段

専門家サポートが必要なエスカレーションには、**[Tier 2 オンコールプログラム](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/)**をご利用ください。

緊急でない問題については、以下の方法があります:

1. `security`ラベルを付けて`@gitlab-com/security/appsec`チームをメンションし、[アプリケーションセキュリティトリアージローテーション](/handbook/security/product-security/security-platforms-architecture/application-security/)の一環として通知を受け取る
1. `infradev`ラベルを付けると[Infra/Devトリアージボード](https://gitlab.com/groups/gitlab-org/-/boards/1193197?label_name[]=gitlab.com&label_name[]=infradev)に引き上げられる
1. 対応するプロダクトステージ/グループのSlackチャンネルに持ち込む
1. [#is-this-known](/handbook/communication/#asking-is-this-known) Slackチャンネルで確認する
