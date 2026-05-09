---
title: "AppSec よくある質問"
description: "AppSec 関連で最もよく寄せられる質問のキュレーションリスト"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/runbooks/faq/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
---

これは、アプリケーションセキュリティに関する一般的な質問のキュレーションリストです。ここまたは[ハンドブックページ](/handbook/security/product-security/security-platforms-architecture/application-security/) で回答されていない質問がある場合は、`#security_help` Slack チャンネルで AppSec チームに連絡してください。

---

## セキュリティ関連の MR を誤って公開で開いてしまった場合はどうすればよいですか？

関連する機密のセキュリティ Issue に `~"security-fix-in-public"` ラベルが付いているかどうかを確認してください。このラベルは、セキュリティ Issue が[公開で対処されることがすでに承認されている](/handbook/security/product-security/security-platforms-architecture/application-security/vulnerability-management/#fixing-in-public) ことを意味するため、その MR が公開のままで問題ありません。そうでない場合は、[セキュリティエンジニアオンコールに連絡](/handbook/security/security-operations/sirt/engaging-security-on-call/#engage-the-security-engineer-on-call) して MR とブランチを削除してもらいます。

## Stable Counterpart が不在の場合、誰に連絡すればよいですか？

GitLab では `@gitlab-com/gl-security/product-security/appsec` をメンションすると、ローテーション中の AppSec エンジニアが応答します。Slack では `#security_help` で連絡してください。

## GitLab で使われているサードパーティイメージをスキャンしたら脆弱性を見つけました。それらは更新できますか？

私たちはサードパーティイメージを保守していません。適切に応じて、[サードパーティソフトウェアの脆弱性に関する開示ガイドライン](https://about.gitlab.com/security/disclosure/#disclosure-guidelines-for-vulnerabilities-in-3rd-party-software)、[脆弱性管理ポリシー](../vulnerability-management/)、および[リリースおよびメンテナンスポリシー](https://docs.gitlab.com/ee/policy/maintenance.html) に従います。

## 顧客が、GitLab の脆弱性が自社に影響するか、またはスコアが正確か知りたがっています。

`17.2.2` 以降のリリースブログ投稿では、CVSS（重大度）スコアは説明ページにリンクされています。
これは CVSS スコアを構成するコンポーネントを記述し、顧客が自社の組織のリスクをどのように低減できるかを参考にする_潜在的な_緩和策をいくつか提供しています。
例として、[AV:N/AC:H/PR:L/UI:N/S:U/C:H/I:H/A:N](https://gitlab-com.gitlab.io/gl-security/product-security/appsec/cvss-calculator/explain#explain=CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:H/I:H/A:N) を参照してください。

リリースが行われたとき、ブログ投稿のコンテンツは、その時点で GitLab が公開で開示できるすべてです。
詳細についてのリクエストは、Issue が公開されるまで拒否される場合があります。
[セキュリティ Issue の開示プロセス](/handbook/security/engaging-with-security/#process-for-disclosing-security-issues) を参照してください。

---
