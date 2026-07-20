---
title: 意図しない脆弱性開示の取り扱い
summary: 意図しない脆弱性開示の様々なシナリオに対応するためのランブック。
upstream_path: /handbook/security/product-security/psirt/runbooks/unintended-vuln-disclosure/
upstream_sha: d92acb119be844b83eb2f76de26d722afea570c3
translated_at: "2026-07-21T07:26:07+09:00"
translator: codex
stale: false
lastmod: "2026-07-20T14:52:30+01:00"
---

## 概要

未修正の (または不十分にしか修正されていない) 脆弱性に関する詳細が、意図せず公開されてしまう状況があります。このランブックには、こうした状況で PSIRT が従うべき具体的なプロセスを含みます。

## SIRT への呼び出し手順

以下に概要を示す SIRT を呼び出すアクションでは、~severity::4 を超える重大度の Issue について「page immediately」のチェックボックスをオンにしてください。

### canonical でセキュリティミラーではなく修正された脆弱性

セキュリティ修正は公開リポジトリではなく、[セキュリティミラー](/handbook/security/product-security/security-platforms-architecture/application-security/vulnerability-management#fixing-the-vulnerability)で開発する必要があります。AppSec が公開を承認した修正には ~"security-fix-in-public" ラベルが付き、削除する必要はありません。未承認の修正が公開された場合は、マージリクエストを削除するため `/security` 経由で SIRT を呼び出します。このページは、MR の内部ノートで促されたマージリクエスト作成者または AppSec から行われる場合があります。

#### 緩和

1. SIRT が[コミットクリーンアップ](https://internal.gitlab.com/handbook/security/security_operations/sirt/operations/ttps/procedures/accidental_commit_cleanup/)を実行し、マージリクエストを公開状態から削除します。

#### フォローアップアクション

1. SIRT は脆弱性に対する積極的な悪用試行を監視するためにモニタリングを実行します。

### 別の関連する脆弱性の不十分な修正

#### 即時対応

1. 脆弱性がクリティカルな場合、SIRT が検出と緩和の作業を開始できるよう、`/security` 経由で SIRT を呼び出す必要があります。
1. MR の作成者または AppSec は（誰がトリガーしたかに応じて）、適切な priority と severity ラベルを付けて新しい Issue を作成すべきです。即座に対応できるよう、適切な EM / PM にメンションすべきです。

#### 緩和

1. 他の脆弱性報告と同様。

#### フォローアップアクション

1. 修正が公開後すぐに不十分であると判明した場合、その機能に対して [AppSec レビュー](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/review-process/)を開くことを検討します。
1. 修正が不十分だった理由を解明するため、[RCA Issue](/handbook/security/root-cause-analysis/) を開くことを検討します。

### HackerOne 報告者が修正前に何かを公開すると決定した場合

#### 即時対応

1. PSIRT エンジニアは即座に Slack で `/security` を使用して SIRT を呼び出すべきです。

#### 緩和

1. 開発者が脆弱性の修正を優先して取り組むよう促すため、SLA ウィンドウを引き上げます。
1. 脆弱性の重大度に応じて、通常または重要なセキュリティリリースのスケジューリングを検討します。

#### フォローアップアクション

1. [行動規範違反](/handbook/security/product-security/psirt/runbooks/hackerone-process/#addressing-rules-of-engagement-or-code-of-conduct-violations)プロセスに従って、HackerOne 研究者をプログラムから禁止します。
1. `#legal` Slack チャンネルまたは Issue へのメンションで Legal チームに状況を伝え、法的観点から (もしあれば) どのような措置を取るべきかを判断してもらいます。
1. 影響を受ける可能性のある顧客に警告するため、Communications を関与させます。

### コミュニケーションミスやその他の意図しない漏洩

以下について:

- YouTube 動画でメール受信箱の漏洩により Issue タイトルが公開されてしまった
- コミュニティメンバーや顧客に誤って情報を渡しすぎた

#### 即時対応

1. 攻撃者が脆弱性を悪用するための PoC を構築するのに十分な情報が漏洩したかを判断します。漏洩した場合、Slack で `/security` を使用して SIRT を呼び出します。

#### 緩和

1. [これらの手順に従って YouTube 動画を非公開にします](/handbook/marketing/marketing-operations/youtube/#make-private-quickly)。
1. EM、PM、開発チームと連携し、脆弱性の修正を優先して取り組むよう促します。
1. 脆弱性の重大度に応じて、Delivery、Dedicated、関連する開発チームと、アドホックな重要なセキュリティリリースのスケジューリングについて会話を始めることを検討します。

#### フォローアップアクション

1. 漏洩を引き起こしたチームメンバーに連絡し、[脆弱性関連データ](https://internal.gitlab.com/handbook/security/data_classification/#data-classification-index)の安全な取り扱いについて教育します。

以下について:

- 脆弱性 Issue が confidential として作成されなかった、または誤って全員に表示されるようになった
- 修正がリリースに含まれていないにもかかわらず、誤ってセキュリティリリースのブログ記事に追加された

#### コミュニケーションミスやその他の意図しない漏洩への即時対応

1. Issue の confidentiality を変更します。
1. ブログ記事を編集し、すぐにマージするようオンコールの SRE にメンションします。
1. Slack で `/security` を使用して SIRT を呼び出します。

#### コミュニケーションミスやその他の意図しない漏洩への緩和

1. EM、PM、開発チームと連携し、脆弱性の修正を優先して取り組むよう促します。
1. 脆弱性の重大度に応じて、Delivery、Dedicated、関連する開発チームと、アドホックな重要なセキュリティリリースのスケジューリングについて会話を始めることを検討します。

#### コミュニケーションミスやその他の意図しない漏洩へのフォローアップアクション

1. Issue の confidentiality がチームメンバーによって誤って変更されたか? もしそうなら、[脆弱性関連データ](https://internal.gitlab.com/handbook/security/data_classification/#data-classification-index)の安全な取り扱いについて教育します。
1. リリースが公開される前にこのようなミスがないよう慎重に審査されるため、PSIRT のリリースマネージャーにインシデントについてメンションします。
1. ブログ記事への脆弱性詳細の追加は Delivery チームによって自動化されています。これがツール側のバグであるかどうかを判断するため、Delivery チームに連絡します。
