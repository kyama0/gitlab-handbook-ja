---
title: "Developer Experience オンボーディング"
description: "新しい Developer Experience セクションメンバーとしてオンボーディングするためのガイドライン"
upstream_path: /handbook/engineering/infrastructure-platforms/developer-experience/onboarding/
upstream_sha: "3dfe7f05ed4a09b9eb0c0f24cd7eb7f1ac83404d"
translated_at: "2026-11-12T14:20:07+00:00"
translator: codex
stale: false
lastmod: "2026-11-11T16:12:39+01:00"
---

ここに記載されている手順は、People Ops がチームメンバーの初日に割り当てるオンボーディング Issue に加えて行うものです。

Developer Experience 内の一部のチームには、チーム固有のオンボーディング Issue があります。まだ作成されていない場合は、[オンボーディングバディ](/handbook/people-group/general-onboarding/onboarding-buddies/)に確認してください。

## 一般リソース

* 私たちのテストインフラについて
  * [テスト標準とスタイルガイドライン](https://docs.gitlab.com/ee/development/testing_guide/index.html)
  * [エンドツーエンドテストの仕組み](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/)
  * [私たち自身の CI/CD の仕組み](https://docs.gitlab.com/ee/development/cicd/)
  * [GitLab QA Orchestrator ドキュメント](https://gitlab.com/gitlab-org/gitlab-qa/blob/master/README.md)
* テスト統計
  * [Redash テストスイート統計](https://redash.gitlab.com/dashboard/test-suite-statistics)
* トリアージ
  * [トリアージオンボーディング](/handbook/engineering/infrastructure-platforms/developer-experience/triage-operations/onboarding/)
* 環境
  * [dev.gitlab.org](https://dev.gitlab.org)
  * [本番](https://gitlab.com)
  * [Canary](https://gitlab.com) - `gitlab_canary=true`
  * [Staging](https://staging.gitlab.com)
  * [Staging-canary](https://staging.gitlab.com) - `gitlab_canary=true`
  * [Staging-ref](https://staging-ref.gitlab.com)
  * [Preprod](https://pre.gitlab.com/)
  * [Customer-dot（ステージング）](https://customers.staging.gitlab.com/)
  * [Ops](https://ops.gitlab.net/)
* CI 環境
  * Main - Slack チャンネル [#e2e-run-master](https://gitlab.slack.com/archives/CNV2N29DM)
  * Performance - Slack チャンネル [#ref-arch-performance-tests](https://gitlab.slack.com/archives/CH8J9EG49)

### Slack チャンネル

以下の内部 Slack チャンネルへの参加が役立つ可能性があります。

* 部門
  * [#s_developer_experience](https://gitlab.enterprise.slack.com/archives/C07TWBRER7H) - 議論とお知らせのための Developer Experience のメインチャンネル
  * [#s_developer_experience-lounge](https://gitlab.enterprise.slack.com/archives/CGZQCTU8J) - Developer Experience の雑談や業務外の会話
* 会社全体
  * [#engineering-fyi](https://gitlab.enterprise.slack.com/archives/CJWA4E9UG) - エンジニアリング全体に関係するお知らせ
  * [#product](https://gitlab.slack.com/messages/C0NFPSFA8) - 製品チームのメンバーを観察し交流する
  * [#development](https://gitlab.slack.com/messages/C02PF508L) - マスターブロークン、環境の問題、その他の開発関連のステータス項目を把握する
  * [#is-this-known](https://gitlab.slack.com/messages/CETG54GQ0) - Canary の障害やバグに関する情報を見つける
  * [#questions](https://gitlab.slack.com/messages/C0AR2KW4B) - 質問をしたり、他の [GitLab チームメンバー](/handbook/communication/top-misused-terms/)の質問（と回答）を見る
  * [#thanks](https://gitlab.slack.com/messages/C038E3Q6L) - [GitLab チームメンバー](/handbook/communication/top-misused-terms/)が行う素晴らしい仕事への感謝を伝え、見る
  * [#people-connect](https://gitlab.slack.com/messages/C02360SQQFR) - People Ops と交流する

## マネージャー向け

### エンゲージメント象限

エンゲージメント象限は、あなたとあなたの直属の部下が現在の仕事についてどのように感じているかを評価するのに役立つように設計されています。
これはパフォーマンス評価ツールとして意図されておらず、会話のフレームを設定するための自己内省メカニズムです。

![engagement-quadrant.png](/images/engineering/infrastructure/test-platform/onboarding/engagement-quadrant.png)

* **低知識・高興奮**: 新しいことを始めることに興奮しているが、成功するために必要なすべてのことを認識していない（未知の未知）。
* **低知識・低興奮**: 知識習得に進展がない場合（継続的な未知の未知）、時間の経過とともに興奮も低下します。ブロックを解消するために追加の助けを早急に求める必要があります。
* **高知識・高興奮**: 生産性/習熟度に必要なことを学びながら、意欲的で興奮している状態に進展しました。これが最適な状態です。
* **高知識・低興奮**: 現在のタスクにすでに習熟しているが、それほど挑戦的でない場合。次の興味領域を特定するための議論が必要です。

新しいことを始めるとき、目標は未知のことを発見してすばやく習得し、`高知識・高興奮`の状態にできるだけ早く移行することです。そして繰り返し改善を続けることで、引き続き挑戦的な状態を維持します。

### 組織心理学リソース

[組織心理学](https://en.wikipedia.org/wiki/Industrial_and_organizational_psychology)は、仕事に関連した人間の行動と動機の研究です。

* [Adam Grant による WorkLife ポッドキャスト](https://podcasts.apple.com/us/podcast/worklife-with-adam-grant/id1346314086)
* [Claire Lew による Heartbeat ポッドキャスト](https://canopy.is/blog/podcast/)
* [HBR IdeaCast ポッドキャスト](https://hbr.org/2018/01/podcast-ideacast)
* [Dear HBR ポッドキャスト](https://hbr.org/2018/01/podcast-dear-hbr)
* [Know Your Team ブログ](https://canopy.is/blog/) - [最も人気のある記事](https://canopy.is/blog/our-most-popular-articles/)

#### ソーシャルメディアでフォローすべき人

* [Adam Grant](https://twitter.com/AdamMGrant) - Wharton の組織心理学教授
* [Dan Pink](https://twitter.com/DanielPink) - [Drive: The surprising truth about what motivates us](https://www.amazon.com/Drive-Surprising-Truth-About-Motivates/dp/1594484805) の著者
* [Camille Fournier](https://twitter.com/skamille)
* [Claire Lew](https://twitter.com/clairejlew) - Know Your Team の CEO
* [Dan Ariely](https://twitter.com/danariely) - 組織心理学よりも行動経済学が専門
