---
title: "Application Security - 非同期コミュニケーション"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/appsec-async/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-06T19:27:57-05:00"
---

## 概要

Application Securityチームは多くのタイムゾーンに広がっており、チーム全体の同期会議の合理的なスケジュールを設定するのが難しいため、ほとんどの議論は非同期で処理するようにしています。

主な解決すべき問題は、他のチームメンバーが特定のIssueに応答する機会があったかを把握することです。

### `needs-eyes` ラベル

他のAppSecチームメンバーに注意を促すために、[`https://gitlab.com/gitlab-com/gl-security/product-security/appsec/` 配下の `needs-eyes` ラベル](https://gitlab.com/groups/gitlab-com/gl-security/product-security/appsec/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name%5B%5D=needs-eyes)を使用しています

- 注意が必要な技術的Issueは、[gitlab-com/gl-security/product-security/appsec/appsec-reviews](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-reviews)配下のメタIssueとして作成する必要があります
- 非技術的なものは、[gitlab-com/gl-security/product-security/appsec/appsec-team](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/)配下に作成する必要があります

ラベルが付いたIssue内では、任意の非同期議論を行うことができます。チームメンバーがIssueを読んだがそれ以上の入力がない場合は、✔️ 絵文字リアクションで確認済みとマークしてください。

Issueにラベルを付けたチームメンバーが議論の結果に満足したら、`needs-eyes` ラベルを削除できます。

### 同期会議

`needs-eyes` ラベルが付いたIssue内で、チームメンバーは同期コミュニケーションに切り替え、より迅速に質問を解決するためにZoom会議をスケジュールすることを決定できます。

これが発生した場合、他のチームメンバーが参加できるようにIssueに日時とZoom URLを記載してください。さらに、会議は録画され、AppSecチーム全体に公開される必要があります。
