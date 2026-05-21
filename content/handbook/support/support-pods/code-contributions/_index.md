---
title: コードコントリビューションサポート Pod
description: SE がコードコントリビューションの文脈で協働できる場を提供します。
upstream_path: /handbook/support/support-pods/code-contributions/
upstream_sha: 1426909c018f3e75bf94ea36ef7e2a30be77e167
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-04T12:15:15-08:00"
---

## 目的

SE がコードコントリビューションの文脈で協働できる場を提供します。

## 現在の目標

- Pod の認知を高める
- [#spt_pod_code-contributions](https://gitlab.slack.com/archives/C05DUHAG3EY) Slack チャネルで非同期コミュニケーションを行い、SE をエンパワーし知識を交換する

## サポート Pod のメンバー

- リード: {{< member-by-name "Anton Smith" >}} (`@anton`)
- {{< member-by-name "Ronald van Zon" >}} (`@rvzon`)
- {{< member-by-name "Cleveland Bledsoe Jr" >}} (`@cleveland`)

## 参加方法

1. マネージャーと話す。
1. まだの場合は、[Code Contributions](https://gitlab.com/gitlab-com/support/support-training/-/blob/master/.gitlab/issue_templates/Code%20Contributions.md) サポートトレーニングモジュールに取り組むことを検討する。
1. [Support Team データ](https://gitlab.com/gitlab-support-readiness/support-team/-/tree/master/data/agents?ref_type=heads) の自分の knowledge areas に Code Contributions を追加する。すでに存在する場合は、レベルをそれに応じて調整 - どのレベルでも Pod では歓迎です！
1. 任意: 新しい注力分野についてチームに伝える。
1. [#spt_pod_code-contributions](https://gitlab.slack.com/archives/C05DUHAG3EY) Slack チャネルに参加する。
1. このページに自分を追加する。

## 定例ミーティング

- 現時点ではありません。同期セッションをセットアップしたい場合は、Slack でメッセージを送るだけです！

## 協働の方法

- Slack チャネル: [#spt_pod_code-contributions](https://gitlab.slack.com/archives/C05DUHAG3EY)

仲間のサポートエンジニアとの協働に加えて、他の GitLab メンバーと協働するための次のような機会も検討してください。

- **Backend Pairs** への参加を検討:
  - Slack チャネル: [#backend_pairs](https://gitlab.slack.com/archives/CLX2Z53A5)
  - [Google Calendar](https://calendar.google.com/calendar/u/0?cid=Y18waWFhcmdxdjUzZGY4cmR1N2g5YmhiNHBpZ0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t) を購読。
  - YouTube の [Backend Pairing playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KrMuuWVieMsCG2XHWBCJi_2) を視聴。
  - GitLab の [Backend Engineering](/job-description-library/engineering/backend-engineer/) について読む。
- **Frontend Pairs** への参加を検討:
  - Slack チャネル: [#frontend_pairs](https://gitlab.slack.com/archives/CGWPX7516)
  - [Google Calendar](https://calendar.google.com/calendar/u/1?cid=Y18waWFhcmdxdjUzZGY4cmR1N2g5YmhiNHBpZ0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t) を購読。
  - GitLab の [Frontend Engineering](/job-description-library/engineering/development/frontend/) について読む。

## コードコントリビューションの機会を見つける

🌊 コードコントリビューションをしたいけれど、どこから始めればよいか分からない？

- Issue を戦略的に検索し、[フィルタ](https://docs.gitlab.com/user/project/issues/managing_issues/#filter-the-list-of-issues)します。
  - ラベルを試してみて、自分の興味に応じて Issue を探す。簡単な Issue であれば、`Seeking community contributions`、`Accepting UX contributions` で検索し、必要に応じて追加のラベルを足していく
  - Issue に weight が設定されている場合は、weight `1` の小さい Issue を探す
  - `@anton`: 私は通常 `api` ラベルが付いた Issue を探すのが好きです。バックエンドのみの変更で済むことが多く、Ruby コードを書くのが好きだからです。可能な限り、サポートに直接役立つ Issue に取り組むのが好みです。
  - 興味深い練習として、GitLab で働き始めた頃にあなた自身がオープンした Issue を見直し、その後どれだけ成長したかを確認し、コードコントリビューションができないか考えてみるのもよいでしょう。
- [Support Stable Counterparts](/handbook/support/support-stable-counterparts/) (SSC) の方へ: 担当している製品グループに小さな取り組みがないか聞いてみてください。
- 監査イベントは取り掛かりやすい題材で、参考にできる例も豊富にあります。[Comprehensive audit log: instance settings](https://gitlab.com/groups/gitlab-org/-/epics/476) Epic を参照してください。
- [Papercut スプレッドシート](https://docs.google.com/spreadsheets/d/1qFYgeSGbePumjViTbUr7Jn7T6emlDyxshw4YPb6YzEs/edit#gid=0) もチェックしてみてください。
- 取り組みたい Issue を見つけたら絵文字を付けておくと、後でその絵文字で Issue 一覧を参照できます。
  - `@anton`: 私は個人的に :ant: を使用しているので、私から付けられた絵文字付き Issue を見かけたら、将来コードコントリビューションする候補として目印を付けたものです :smile:
- `gitlab-org/gitlab` 以外にもコードコントリビューションの機会はたくさんあることを忘れないでください。`gitlab-org/charts`、`gitlab-org/gitlab-runner`、または [Support Toolbox](https://gitlab.com/gitlab-com/support/toolbox) のプロジェクトへの貢献も検討してください。
- 取り組みたいことに興味はあるが始め方がよく分からない場合は、Issue をオーナーとする製品チームに気軽に連絡するか、[#backend](https://gitlab.enterprise.slack.com/archives/C8HG8D9MY) や [#frontend](https://gitlab.enterprise.slack.com/archives/C0GQHHPGW) で質問できます。該当チームから方針やベストなアプローチについてアドバイスをもらえます。
