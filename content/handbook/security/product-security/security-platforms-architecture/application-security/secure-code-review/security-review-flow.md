---
title: "Security Review Flow"
description: "GitLab Duo の Security Review Flow がマージリクエストのセキュリティ上の問題を確認する仕組みと、指摘への対応方法。"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/secure-code-review/security-review-flow/
upstream_sha: 2d1f6094c6d7396f74007d0e3058ac3e143c7e72
lastmod: "2026-11-23T11:47:41Z"
translated_at: "2026-11-23T21:06:25Z"
translator: codex
stale: false
---

## Security Review Flow とは {#what-the-security-review-flow-is}

GitLab Duo の Security Review Flow（SRF）は、マージリクエストにセキュリティ上の問題がないかをレビューし、結果の概要を MR の内部ノートに投稿します。プライベートプロジェクトでは、指摘ごとに変更行へのインラインコメントも投稿します。パブリックプロジェクトでは、セキュリティの詳細が公開されないように、内部ノートにのみ指摘を記載します。

SRF の指摘は参考情報です。対応する前に、指摘を 1 件ずつ検証してください。SRF が MR を承認することはありません。重大度が中または低の指摘しかない場合や、指摘がない場合、SRF は自身のレビュアーステータスを **Comment** に設定します。

SRF は、重大度がクリティカルまたは高の指摘を報告すると、自身のレビュアーステータスを **Request changes** に設定します。これにより MR のマージがブロックされ、マージリクエストのレポート欄に **Change requests must be approved by the requesting user** と表示されます。SRF は承認できないため、指摘に対処するか、誤検知と判断したら、このメッセージから MR のブロックを解除してください。

- MR の作成者が自分で、レビューが自動実行された場合、または自分がレビューをリクエストした場合は、SRF が自分に代わってレビューしたことになるため、[**Remove** を選択します](https://docs.gitlab.com/user/project/merge_requests/reviews/#remove-a-change-request)。
- MR をマージする権限がある場合は、[**Bypass** を選択します](https://docs.gitlab.com/user/project/merge_requests/reviews/#bypass-a-request-for-changes)。

MR のブロックを解除するために自動レビューを無効にする必要はありません。

フローの仕組みについて詳しくは、[Security Review Flow のドキュメント](https://docs.gitlab.com/user/application_security/security_review/)を参照してください。

SRF は、従来のカスタムフロー [Automated MR Security Reviewer](/handbook/security/product-security/security-platforms-architecture/application-security/secure-code-review/automated-mr-reviewer/)を置き換えます。カスタムフローを使っていたプロジェクトでは、SRF に移行するとカスタムフローが削除されます。

## レビューをリクエストする {#request-a-review}

MR に対して SRF を実行するには、**Duo Security Review** をレビュアーにアサインしてください。SRF が有効なトップレベルグループ内のどの MR にもアサインできます。[レビューをリクエストする](https://docs.gitlab.com/user/application_security/security_review/#request-a-review)を参照してください。

コードの変更後に MR を再度レビューするには、**Duo Security Review** に[レビューを再リクエストします](https://docs.gitlab.com/user/project/merge_requests/reviews/#re-request-a-review)。SRF は現在のコードをレビューし、対応した指摘が解消されていることを確認して、新たな指摘があれば報告します。

指摘について質問するには、指摘への返信で `@duo-security-review-gitlab-org` をメンションしてください。この操作で新しいレビューが始まることはありません。

{{% alert title="注意" color="primary" %}}
パブリックコメントで修正について SRF に質問する場合は、未修正の脆弱性を公開しないよう注意してください。
{{% /alert %}}

## 自動レビュー {#automatic-reviews}

自動レビューが有効なプロジェクトでは、ドラフト以外の MR を作成するか、ドラフト MR を準備完了にすると、SRF がレビュアーにアサインされ、1 回実行されます。新しいコミットをプッシュしても再実行されません。また、フォークからの MR など、一部の MR は自動レビューの対象外です。実行される条件については、[レビューを自動で実行する](https://docs.gitlab.com/user/application_security/security_review/#run-reviews-automatically)を参照してください。

### 自動レビューを有効または無効にする {#turning-automatic-reviews-on-or-off}

GitLab が提供する [**Security Review** スキャンプロファイル](https://docs.gitlab.com/user/application_security/configuration/security_configuration_profiles/#security-review-profile)を適用したプロジェクトでは、自動レビューが実行されます。プロジェクトの Maintainer は、次の手順でプロファイルを適用して有効にできます。

1. プロジェクトで **Secure** > **Security configuration** を選択します。
1. **Scanner** > **Business logic** で **Security Review** を選択します。
1. **Apply profile** を選択します。

その他の適用方法については、[UI でプロファイルを適用する](https://docs.gitlab.com/user/application_security/configuration/security_configuration_profiles/#apply-profiles-in-the-ui)を参照してください。

自動レビューを無効にするには、同じページでプロファイルを削除し、プロジェクトの Issue で `@gitlab-com/gl-security/product-security/appsec` をメンションして、AppSec チームに理由を伝えてください。引き続き手動でレビューをリクエストできます。

## フィードバック {#feedback}

フィードバックの内容によって、連絡先が異なります。

- **個別のレビュー**：MR にある SRF の概要ノート、または個々の指摘に 👍 または 👎 のリアクションを付けてください。この評価はフローのレビューの改善に役立ちます。
- **フロー自体**（指摘の品質、誤検知、実行の失敗など）：[Security Review Flow のフィードバック Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/600304)にコメントしてください。この Issue は AppSec チームではなく、フローを開発するプロダクトチームが管理しています。パブリックな Issue なので、未修正の脆弱性の詳細は含めないでください。
- **プロジェクトの自動レビュー**（実行のタイミングや不要な指摘の多さなど）：AppSec チームが有効化を依頼した作業アイテムに返信するか、プロジェクトの Issue で `@gitlab-com/gl-security/product-security/appsec` をメンションしてください。

## 制限事項 {#limitations}

指摘には誤検知が含まれる可能性があるため、人による検証が必要です。指摘がなくても、MR が安全であるとは限りません。プロダクトドキュメントの[既知の制限事項](https://docs.gitlab.com/user/application_security/security_review/#known-limitations)を参照してください。
