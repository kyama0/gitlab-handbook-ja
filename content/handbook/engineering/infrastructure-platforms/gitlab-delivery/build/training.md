---
title: "Distributionチームのトレーニング"
description: "Distributionチームのトレーニング概要とビデオ"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/build/training/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T23:09:27Z"
translator: claude
stale: false
lastmod: "2025-06-04T16:03:37+01:00"
---

## 共通リンク

* [DistributionチームのHandbook](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/)

## 目的

チームトレーニングの目的は、行われた作業をチームの残りのメンバーに紹介することです。
また、チームの他のメンバーが新しい機能やプロジェクトへの移行を容易にし、メンテナンスに
備えることを可能にします。トレーニングは公開されており、トピックを学びたい全員が利用できます。

トレーニングは以下の内容であるべきです：

* 投資した作業の概要を提供する
* 開発中に直面した主な課題を説明する
* 起こりうる落とし穴と特殊性を説明する

トレーニングは以下の内容であるべきでは**ありません**：

* ドキュメントの代替
* Issueへの進捗記録の代替
* フォローアップIssueの代替

簡単に言えば、トレーニングは以下のまとめです：開発中にIssueでとられたノート、
プログラミングの課題、作成されたドキュメントの概要。トレーニングを受けたチームメンバーが、
より少ない労力でメンテナンスを引き継いだり、機能の上に構築できるようになるはずです。

*注意* トレーニングで技術的な内容を避けないでください。自分に問いかけてみてください：
このタスクに取り組み始めたとき、何があると役に立ったか？何が自分をより効率的にしてくれただろうか？

## トレーニングの効果測定

トレーニングが効果的かどうかを確認するために、Distributionリードはトレーニングが行われた
プロジェクトでチームメンバーをローテーションします。例えば、機能が定期的なリリースを必要とする場合、
トレーニングを行った人物がチューターとみなされます。別のチームメンバーがトレーニングと
ドキュメントに従い、元のメンテナーに助けを求めます。責任を持つ新しい担当者は、
機能を改善する責任も持ちます。彼らはまた他のチームメンバーのトレーニングを行う責任も持ちます。

## トレーニングリスト

* DIS001 [GitLab Pivotal Cloud Foundry Tile](https://youtu.be/oo2p6WtHhG4)
* DIS002 [GitLab Terraform Module](https://youtu.be/JbbKq0UrDec)
* DIS003 [Kubernetes](https://youtu.be/Po8vUvoiMYU)
* DIS004 [Omnibus](https://youtu.be/m89NHLhTMj4)
* DIS005 [PG HA](https://youtu.be/2Uz2piFLp7k)
* DIS006 [GitLab QA project](https://youtu.be/Ym159ATYN_g)
* DIS007 [Let's Encrypt with the omnibus-gitlab package](https://youtu.be/Ac7uAED1Qzk)
* DIS008 [GitLab Helm Chart Operator](https://youtu.be/suP5vnhBYf8)
* [Contributor introduction to Omnibus-GitLab](https://www.youtube.com/watch?v=mCec7g6Ml70)

### FAQ

Q: これは二重作業ではないですか？
A: いいえ。トレーニングはタスクを文書化しながら準備されるべきです。

Q: 作業が遅くなりませんか？
A: 最初はそうかもしれません。しかし、トレーニングに費やした1時間は、チームメンバーの数だけ価値が倍増します。

Q: チームにドキュメントを確認させて質問させる方が有益ではないですか？
A: 理想的な世界ではそうかもしれません。しかし、誰もが多くのタスクを抱えており、
何かする必要があるまでドキュメントを確認できないかもしれません。これは数ヶ月後になる場合もあり、
トレーニングを行うはずだった人物は効率的に助けられなくなっているかもしれません。
