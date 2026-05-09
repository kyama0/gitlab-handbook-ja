---
title: Trust & Safety、自分でやろう (Do It Yourself)
description: "セルフマネージド型のお客様向けの不正利用 (ABUSE) の予防、検出、緩和"
upstream_path: /handbook/security/security-operations/trustandsafety/diy/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T03:09:44Z"
translator: claude
stale: false
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

ご自身のGitLab CEまたはEEインスタンスを公開登録ありで運用している場合、何らかの形で独自の不正利用に遭遇したことがあるはずです。これには、ボットや人によるIssueトラッカーへのスパム、スパムプロフィールの作成、マルウェアやわいせつなコンテンツの配布などが含まれる可能性があります。

幸いなことに、これは初めてではなく、共有できる知識があります。

これらのすべてが状況に当てはまるわけではないかもしれませんので、役立つものを使い、残りはそのままにしておいてください。

私たちが知らないことを知っている、または不正利用防止策を共有したいだけの場合は、お気軽にMRをオープンしてこのページに追加してください！

## セルフマネージド型のお客様: スパムの予防、検出、緩和

GitLabは、ユーザーがIssueを作成する際にスパムをチェックするために [Spamcheck](https://docs.gitlab.com/ee/administration/reporting/spamcheck.html) を使用し、追加のスパムおよび不正利用防止のレベルとしてreCaptchaを使用しています。

このツールは不正利用の症状に対応するのに役立ちますが、根本的な問題は残っています: 悪意のあるアクターが新しいアカウントを登録したり、既存のアカウントを乗っ取り、それらのアカウントを使ってインスタンスやプロジェクトをスパムしたり、不正利用したりするのです。

***では、セルフマネージドの管理者がスパムを予防および緩和するためにできることは他に何があるでしょうか？***

### 2FA

GitLabのホスト型インスタンスは、ボットによるアカウント作成や乗っ取りの自動化を困難にすることでスパムを減らすことができます。すべてのユーザーに対して [2FA](https://docs.gitlab.com/ee/user/profile/account/two_factor_authentication.html) を要求することは、正規のユーザーがアカウントを乗っ取られてスパム作成に使われるのを防ぐ1つの方法です。

### 認証制限

[サインアップ制限](https://docs.gitlab.com/ee/administration/settings/sign_up_restrictions.html) により、セルフマネージドの管理者は以下が可能になります。

- 新しいサインアップを無効にする。
- 新しいサインアップに管理者の承認を要求する。
- ユーザーのメール確認を要求する。
- 特定のドメインに属するメールアドレスを拒否リストまたは許可リストに登録する。

実際、公開向けGitLabインスタンスを運用するお客様で、公開ユーザーがアカウントにサインアップすることを期待していない場合、新しいサインアップを無効にすることを強くお勧めします。
[サインイン制限](https://docs.gitlab.com/ee/administration/settings/sign_in_restrictions.html) により、セルフマネージドの管理者は、Webインターフェースおよびsm Git over HTTP(S) の認証制限をカスタマイズできます。これらの設定により、以下を強制できます。
新規ユーザーに対する2FAの強制。これによりボットの突破を困難にし、正規のユーザーが単一要素認証 + 弱いパスワードの組み合わせで侵害されるのを防ぎます。
サインアップ時のメール確認。これによりボットが新しいスパムアカウントを登録することを困難にします。

### インスタンスの強化

インスタンスの設定をカスタマイズすることで、スパムや不正利用を抑制および減少させるのに大いに役立ちます。これには、[ユーザーがインスタンスにアクセスする方法と誰がアクセスできるかを定義する](https://about.gitlab.com/blog/2020/05/20/gitlab-instance-security-best-practices/#restricting-how-and-who) ことが含まれます。

### セルフマネージド管理者による不正利用の報告と管理方法を理解する

ユーザーが [他のGitLabユーザーからの不正利用をGitLabセルフマネージド管理者に報告する方法](https://docs.gitlab.com/ee/user/report_abuse.html)、[セルフマネージド管理者が不正利用者に対して取れるアクション](https://docs.gitlab.com/ee/administration/moderate_users.html)、[管理者による不正利用報告の管理および解決方法](https://docs.gitlab.com/ee/administration/review_abuse_reports.html#resolving-abuse-reports) を理解することも重要です。

### レート制限

最後に、スパムによる不正利用の最中の場合は、増加した負荷に対応するために [レート制限](https://docs.gitlab.com/ee/security/rate_limits.html) を課すことができます。また、[Issue作成のレート制限](https://docs.gitlab.com/ee/administration/settings/rate_limit_on_issues_creation.html) や [ユーザーおよびIPに対するレート制限](https://docs.gitlab.com/ee/administration/settings/user_and_ip_rate_limits.html) を課すこともできます。

### 不正利用防止機能の提案

CEおよびEEに対する不正利用防止機能のリクエストや提案については、[GitLabプロジェクト](https://gitlab.com/gitlab-org/gitlab/-/issues) で提供されているテンプレートから **Feature proposal** Issueを作成し、~"Abuse Prevention" ラベルを追加してください。追加のインプットが必要な場合や質問がある場合は、`@gitlab-com/gl-security/security-operations/trust-and-safety` をお気軽にタグ付けしてください。

### オープンソースプログラムパートナー、PremiumおよびUltimateのお客様

連絡方法の詳細については、当チームページの [Contact Us](/handbook/security/security-operations/trustandsafety/#reporting-abuse) セクションをご覧ください。
