---
title: "Security Review Flow"
description: "GitLab Duo の Security Review Flow がマージリクエストのセキュリティ上の問題を確認する仕組みと、指摘への対応方法。"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/secure-code-review/security-review-flow/
upstream_sha: cc6de46eb0003927fce00d6bb2ac38cf31e1cffd
lastmod: "2026-11-17T22:59:57Z"
translated_at: "2026-11-19T06:31:42+09:00"
translator: codex
stale: false
---

## Security Review Flow とは {#what-the-security-review-flow-is}

GitLab Duo の Security Review Flow（SRF）は、マージリクエストにセキュリティ上の問題がないかをレビューし、結果の概要を MR の内部ノートに投稿します。プライベートプロジェクトでは、指摘ごとに変更行へのインラインコメントも投稿します。パブリックプロジェクトでは、セキュリティの詳細が公開されないように、内部ノートにのみ指摘を記載します。

SRF の指摘は参考情報です。対応する前に、指摘を 1 件ずつ検証してください。SRF が MR を承認することはありません。重大度が中または低の指摘しかない場合や、指摘がない場合、SRF は自身のレビュアーステータスを **Comment** に設定します。

SRF は、重大度がクリティカルまたは高の指摘を報告すると、自身のレビュアーステータスを **Request changes** に設定します。これにより MR のマージがブロックされ、マージリクエストのレポート欄に **Change requests must be approved by the requesting user** と表示されます。SRF は承認できないため、指摘に対処するか、誤検知と判断したら、このメッセージから MR のブロックを解除してください。

- MR の作成者が自分で、レビューが自動実行された場合、または自分がレビューをリクエストした場合は、SRF が自分に代わってレビューしたことになるため、[**Remove** を選択します](https://docs.gitlab.com/user/project/merge_requests/reviews/#remove-a-change-request)。
- MR をマージする権限がある場合は、[**Bypass** を選択します](https://docs.gitlab.com/user/project/merge_requests/reviews/#bypass-a-request-for-changes)。

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

SRF を自動で実行するよう設定されたプロジェクトでは、次の場合に SRF がレビュアーにアサインされ、1 回実行されます。

- ドラフト以外の MR を作成したとき。
- ドラフト MR を準備完了にしたとき。

次の場合は自動実行されません。

- 新しいコミットをプッシュした場合や、MR をいったんドラフトに戻して再び準備完了にした場合。レビューを再リクエストしてください。
- フォークからの MR の場合。プロジェクトメンバーが SRF をアサインできます。
- bot またはサービスアカウントが作成した MR の場合。
- 自動レビューを有効にした時点ですでにオープンしていた MR の場合。ただし、有効化の後に準備完了にした場合は自動実行されます。
- MR の作成者がプロジェクトでフローを実行する権限を持たない場合。

詳細は、[レビューを自動で実行する](https://docs.gitlab.com/user/application_security/security_review/#run-reviews-automatically)を参照してください。

### 自動レビューを無効にする {#opting-out}

SRF は、AppSec チームが GitLab 提供の **Security Review** スキャンプロファイルをプロジェクトに適用したことで、自動実行されます。自動レビューを無効にするには、プロジェクトの Issue で `@gitlab-com/gl-security/product-security/appsec` をメンションし、理由を説明してください。AppSec チームがプロファイルを削除します。引き続き手動でレビューをリクエストできます。

## フィードバック {#feedback}

SRF の指摘に 👍 または 👎 のリアクションを付けてください。パブリックプロジェクトでは内部ノートに付けてください。この評価はフローのレビューの改善に役立ちます。

実行の失敗や誤検知の繰り返しなど、フロー自体の問題を報告するには、[Security Review Flow のフィードバック Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/600304)にコメントしてください。未修正の脆弱性の詳細は含めないでください。

## 制限事項 {#limitations}

指摘には誤検知が含まれる可能性があるため、人による検証が必要です。指摘がなくても、MR が安全であるとは限りません。プロダクトドキュメントの[既知の制限事項](https://docs.gitlab.com/user/application_security/security_review/#known-limitations)を参照してください。
