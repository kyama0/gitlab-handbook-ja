---
title: "AppSec よくある質問"
description: "AppSec 関連で最もよく寄せられる質問のキュレーションリスト"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/runbooks/faq/
upstream_sha: 1268785362042c88e891d4f2270f8ad87cd6b6ad
translated_at: "2026-08-06T06:28:14+09:00"
translator: codex
stale: false
lastmod: "2026-08-05T08:42:06+09:00"
---

これは、アプリケーションセキュリティに関する一般的な質問のキュレーションリストです。ここまたは[ハンドブックページ](/handbook/security/product-security/security-platforms-architecture/application-security/) で回答されていない質問がある場合は、`#security_help` Slack チャンネルで AppSec チームに連絡してください。

---

## セキュリティ関連の MR を誤って公開で開いてしまった場合はどうすればよいですか？

関連する機密のセキュリティ Issue に `~"security-fix-in-public"` ラベルが付いているかどうかを確認してください。このラベルは、セキュリティ Issue が[公開で対処されることがすでに承認されている](/handbook/security/product-security/security-platforms-architecture/application-security/vulnerability-management/#fixing-in-public) ことを意味するため、その MR を公開のままにしても問題ありません。ラベルが付いていない場合は、Slack の `/security` 経由で SIRT にエスカレーションし、MR とブランチを削除してもらってください。自動化がすでに MR にフラグを付け、この作業を求める内部ノートを投稿している可能性がありますが、対応は同じです。

すでに公開されている脆弱性を依存関係だけで修正する公開 MR を意図的に作成する場合は、[依存関係のバージョン更新](/handbook/security/product-security/security-platforms-architecture/application-security/vulnerability-management#dependency-version-bumps)のガイダンスに従い、MR の説明にその旨を明記して、公開アドバイザリへのリンクを含めてください。これにより、監視で MR が検出されたときに AppSec が判断しやすくなります。

## GitLab で使われているサードパーティイメージをスキャンしたら脆弱性を見つけました。それらは更新できますか？

私たちはサードパーティイメージを保守していません。適切に応じて、[サードパーティソフトウェアの脆弱性に関する開示ガイドライン](https://about.gitlab.com/security/disclosure/#disclosure-guidelines-for-vulnerabilities-in-3rd-party-software)、[脆弱性管理ポリシー](../vulnerability-management/)、および[リリースおよびメンテナンスポリシー](https://docs.gitlab.com/ee/policy/maintenance.html) に従います。

## 顧客が、GitLab の脆弱性が自社に影響するか、またはスコアが正確か知りたがっています。

`17.2.2` より後のリリースブログ投稿では、CVSS（重大度）スコアは説明ページにリンクされています。
これは CVSS スコアを構成するコンポーネントを記述し、顧客が自組織のリスクを低減する方法を検討する際の参考となる、いくつかの _潜在的な_ 緩和策を提供しています。
例として、[AV:N/AC:H/PR:L/UI:N/S:U/C:H/I:H/A:N](https://gitlab-com.gitlab.io/gl-security/product-security/appsec/cvss-calculator/explain#explain=CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:H/I:H/A:N) を参照してください。

リリースが行われたとき、ブログ投稿のコンテンツは、その時点で GitLab が公開で開示できるすべてです。
詳細についてのリクエストは、Issue が公開されるまで拒否される場合があります。
[セキュリティ Issue の開示プロセス](/handbook/security/engaging-with-security/#process-for-disclosing-security-issues) を参照してください。

---
