---
title: "Distribution チームトレーニング"
description: "Distribution チームのトレーニング概要と動画"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/training/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T00:11:38Z"
translator: claude
stale: false
lastmod: "2025-04-16T11:23:19-05:00"
---

## 共通リンク

* [Distribution チームハンドブック](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/)

## 目的

チームトレーニングの目的は、行われた作業をチームの残りのメンバーに紹介することです。また、チームの残りのメンバーが新しい機能やプロジェクトに容易に移行し、メンテナンスの準備ができるようにします。トレーニングは公開されており、トピックに慣れたい人なら誰でも利用できます。

トレーニングは以下を提供すべきです:

* 投資した作業のハイレベルな概要
* 開発中に遭遇した主な課題の説明
* 起こりうる落とし穴と特殊性の説明

トレーニングが**あるべきでない**もの:

* ドキュメントの代替
* Issue への進捗記録の代替
* フォローアップ Issue の代替

簡単に言うと、トレーニングは開発中に Issue で取られたメモ、プログラミングの課題、書かれたドキュメントのハイレベルな概要の要約です。トレーニングに参加した後、チームメンバーはより少ない労力でメンテナンスを引き継いだり、あなたの機能を基にして構築できるようになるべきです。

*注意* トレーニングで技術的になることを恐れないでください。自問してみてください: このタスクに取り組み始めたとき、何が役に立ったでしょうか？何があれば、より効率的になれたでしょうか？

## トレーニングの効率性

トレーニングが効率的かどうかを確認するために、Distribution リードはトレーニングが行われたプロジェクトでチームメンバーをローテーションします。例えば、機能が定期的なリリースを必要とする場合、トレーニングを行った人はチューターと見なされます。別のチームメンバーがトレーニングとドキュメントに従い、元のメンテナーにヘルプを求めます。新しい責任者は機能を改善する責任も持ちます。そして、他のチームメンバーをトレーニングする責任も持ちます。

## トレーニング一覧

* DIS001 [GitLab Pivotal Cloud Foundry Tile](https://youtu.be/oo2p6WtHhG4)
* DIS002 [GitLab Terraform Module](https://youtu.be/JbbKq0UrDec)
* DIS003 [Kubernetes](https://youtu.be/Po8vUvoiMYU)
* DIS004 [Omnibus](https://youtu.be/m89NHLhTMj4)
* DIS005 [PG HA](https://youtu.be/2Uz2piFLp7k)
* DIS006 [GitLab QA project](https://youtu.be/Ym159ATYN_g)
* DIS007 [Let's Encrypt with the omnibus-gitlab package](https://youtu.be/Ac7uAED1Qzk)
* DIS008 [GitLab Helm Chart Operator](https://youtu.be/suP5vnhBYf8)
* [Omnibus-GitLab への貢献者向け入門](https://www.youtube.com/watch?v=mCec7g6Ml70)

### よくある質問

Q: これは二重作業ではないですか？
A: いいえ。トレーニングはタスクをドキュメント化しながら準備するべきです。

Q: これで遅くなりませんか？
A: 最初のうちは、おそらくそうかもしれません。しかし、トレーニングに費やした 1 時間ごとに、チームメンバーの数だけ価値が倍増します。

Q: チームにドキュメントを確認して質問させる方が役立ちませんか？
A: 理想的な世界では、そうかもしれません。しかし、誰もが多くのタスクをアサインされており、何かをする必要が出るまでドキュメントを読む余裕がないかもしれません。それは数ヶ月後になる可能性があり、その時点ではトレーニングを行う予定だったあなたが、もはや効率的に助けられないかもしれません。
