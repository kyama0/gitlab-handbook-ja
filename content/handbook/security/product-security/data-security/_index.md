---
title: "データセキュリティ"
description: "GitLab のデータセキュリティチームは、データセキュリティとプライバシーポスチャーにおける既知の不確実な要素を調査し、修復します。"
upstream_path: /handbook/security/product-security/data-security/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T17:22:11Z"
translator: claude
stale: false
lastmod: "2026-03-04T12:15:15-08:00"
---

## チームのアイデンティティ

GitLab のデータセキュリティチームは、製品全体のデータセキュリティとプライバシーの問題を調査し、修復することを担当しています。私たちは、(多くの場合広範で曖昧な) 懸念を取り上げ、修復が必要なもの (もしあれば) を見つけるために調査し、その後クリーンアップを支援することで、Product Security の同僚や Engineering 全体で行われているすでに優れた作業を補完します。言い換えると、私たちは GitLab 全体で[i に点を打ち、t に線を引く](https://en.wikipedia.org/wiki/Tittle#Phrases)のです。

データセキュリティチームの担当範囲には、以下が含まれます (ただし、厳密に限定されません):

* [データ分類標準](/handbook/security/policies_and_standards/data-classification-standard/)または関連する[インフラストラクチャ標準](/handbook/company/infrastructure-standards/)に準拠せずに保存されているデータ
* [KMS](https://en.wikipedia.org/wiki/Key_management#Key_management_system) または [HSM](https://en.wikipedia.org/wiki/Hardware_security_module) システムの外部に保存されているシークレットと暗号化キー
* 公式の本番システム外にある RED データのコピー
* `rm -rf gitlab.com` (または同様の操作) を 1 人で実行する権限を与える本番システムでの過剰な権限付与

チームの優先度の高い取り組みには次のものがあります:

* 私たちは新しいチームです (2024 年 8 月に開始しました)
* そのため、これらに取り組んでいます。
* 近いうちに戻ってきてください!

## チームメンバー

<table>
<thead>
<tr>
<th>担当者</th>
<th>役割</th>
</tr>
</thead>
<tbody>
<tr>
<td>Julie Davila</td>
<td><a href="/job-description-library/security/security-leadership#vice-president-vp-security">VP, Product Security</a></td>
</tr>
<tr>
<td>Jacob Jernigan</td>
<td><a href="/job-description-library/security/security-leadership#senior-manager-infrastructure-security">Senior Manager, Infrastructure Security</a></td>
</tr>
<tr>
<td>Justin Cameron</td>
<td><a href="/job-description-library/security/security-engineer/#staff-security-engineer">Staff Security Engineer, Data Security</a></td>
</tr>
<tr>
<td>Brendan O'Connor</td>
<td><a href="/job-description-library/security/security-engineer/#staff-security-engineer">Staff Security Engineer, Data Security</a></td>
</tr>
</tbody>
</table>

## 私たちと一緒に働く

### 不気味で奇妙なことを知っていますか?

**潜在的に不気味な領域**を調査するよう私たちに依頼するには、[何か奇妙なテンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/data-security/data-security-team/-/issues/new?issuable_template=something-weird)を使用して Issue を作成してください。

### 私たちが行うこと

私たちはすべての Issue を入ってきた時に確認します。すべての Issue にすぐに対応できるとは限りません。私たちは能力の限り (システムをよりよく理解するために他のチームと提携することも含めて) 調査します。何が起こっているかを突き止め、問題があればそれを修正するのに最も適したチームと協力します。

プロセスが発展するにつれて、他のチームが私たちが取り組んでいるものを見やすくするために、より多くのステータスラベルなどを Issue に追加します。

### 機密保持

[私たちの透明性の価値](/handbook/values/#transparency)に従い、この Issue トラッカーは GitLab の全員に公開されています。*あなたのアイデンティティでタグ付けされない方法で問題を調査するよう依頼する必要があると感じる場合は、チームの誰かに DM を送り、その人に Issue を作成してもらってください。*

### その他

* [私たちのトラッカーで Issue を作成](https://gitlab.com/gitlab-com/gl-security/product-security/data-security/data-security-team/-/issues)してください。
* チーム全体に言及するには `@gitlab-com/gl-security/product-security/data-security` を使用して、(任意の場所の) Issue で私たちにタグを付けてください。
* Slack の `#security-datasec` チャンネルでこんにちはと言ってください。面白いミームをぜひ共有してください!

## 私たちの働き方

詳細がわかり次第追加します。
