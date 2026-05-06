---
title: "エンゲージ方法"
description: "インフラストラクチャアナリストへのエンゲージ方法"
upstream_path: /handbook/engineering/infrastructure-platforms/cost-management/how-to-engage/
upstream_sha: 6a459a3ca969603754a3b5133342edb804d3012c
translated_at: "2026-04-28T15:53:35Z"
translator: claude
stale: false
---

[Infrafin ボード](https://gitlab.com/groups/gitlab-com/-/boards/1502173?label_name%5B%5D=infrafin)

[#infrafin Slack チャンネル](https://gitlab.slack.com/messages/infrafin/)

## 概要

このページでは、さまざまなシナリオにおいてインフラストラクチャアナリストへエンゲージするための推奨方法について説明します。その他の質問については上のボタンを参照し、[#infrafin](https://gitlab.slack.com/messages/infrafin/) Slack チャンネルで質問するか、[Infrafin ボード](https://gitlab.com/groups/gitlab-com/-/boards/1502173?label_name%5B%5D=infrafin)で Issue を開いてください。Slack の質問はより早い返答が得られる可能性が高く、Issue は[ボード基準](/handbook/engineering/infrastructure-platforms/cost-management/infrafin-board/#criteria)に従って優先度順にトリアージされます。ボード基準を満たさない Issue については、[エンジニアリングメトリクスボード](https://gitlab.com/gitlab-com/www-gitlab-com/-/boards/1942495?label_name[]=Engineering%20Metrics)で Issue を開いてください。これらは稼働率の許す範囲で対応されます。

特定の依頼については、下の FAQ を確認してあなたの質問が回答されているかご覧ください。

## FAQ

### PM として、自分のサービスのコストをより深く理解したい

素晴らしいことです！まず、あなたのプロダクトを開発しているエンジニアと話し合い、あなたのプロダクトで使用されているさまざまなインフラストラクチャ要素を理解することで、自分で初期的な調査を行うことから始めてください。これは非常に重要で、インフラストラクチャアナリストはあなたとの会話からサービスのすべての詳細を学べない場合、できることに限界があります。さらに良いことに、この調査から新たに学んだことがあれば、後でこれらの詳細を参照できるようにハンドブックにドキュメント化しましょう。

それが完了したら、#infrafin で連絡するか、インフラストラクチャアナリストと直接 1 時間の初回コールを設定してください。1 時間全部を使わないかもしれませんが、最初のミーティングではプロダクトのさまざまな側面をすべて確認し、コストを理解する方法を絞り込み始めるために、できるだけ多くの時間が欲しいと思っています。このミーティングから、必要なインサイトを得るためのアクションプランを策定します。

### 新しいグループまたはサービスレベルのコストメトリクスを見たい

エンジニアリングメトリクスボードで Issue を開くか、#infrafin Slack チャンネルでインフラストラクチャアナリストにメンションしてください。アナリストがメトリクスの要件を確認するために協力します。データがすでに利用可能であれば、作業のほとんどはメトリクス定義の確定に関するコラボレーションだけで済みます。データが存在しない場合は、インフラストラクチャにラベルを付けたり、製品内でのトラッキングをより適切に有効化するなど、メトリクスを作成できるようにするためのより長いプロセスが必要になります。
