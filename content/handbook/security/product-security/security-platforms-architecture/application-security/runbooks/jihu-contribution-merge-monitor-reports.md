---
title: "JiHu コントリビューションのマージモニターレポート"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/runbooks/jihu-contribution-merge-monitor-reports/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-06T19:27:57-05:00"
---

[Merge Monitor ツール](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/release-certification-tools#merge-request-monitor)は、JiHu がコントリビュートする公開 GitLab リポジトリを調査し、以下の条件を満たすマージリクエストを探します:

- マージされた
- JiHu Contribution としてラベル付けされている
- AppSec チームメンバーが [JiHu コントリビューションのセキュリティレビュー](/handbook/finance/jihu-support/jihu-security-review-process/)を実施した後に適用するラベルが**付いていない**

検出された結果はすべて、[jihu_merge_request_monitor_reports リポジトリの Issue](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/jihu_merge_request_monitor_reports/-/issues) として作成されるレポートに含まれます。Federal AppSec チームは作成された各レポートで通知され、各検出結果をレビューすることが期待されます。

Merge Monitor はスケジュールされたパイプラインを通じて実行されます。[関連するマージリクエスト](https://docs.gitlab.com/ee/user/project/issues/crosslinking_issues.html#from-merge-requests)に関するオープン状態の Merge Monitor Report Issue をチェックし、すでに既知の検出結果をフィルタリングすることで、検出結果の重複排除を行います。

## Merge Monitor レポートのプロセス

Merge Monitor レポートで言及された各検出結果について:

1. マージリクエストを表示し、AppSec のレビューを受けたかどうかを確認します
    - AppSec のレビューを受けていた場合、マージリクエストに `sec-planning::complete` ラベルを適用します
    - AppSec のレビューを受けていなかった場合、レビューを実施します
1. レビューが実施されたことを確認した後、またはレビューを実施した後、`MR reviewed` チェックボックスをオンにします
1. マージリクエストに `sec-planning::complete` ラベルを適用した後、`Label applied` チェックボックスをオンにします
1. 各検出結果について、Issue の説明を編集して簡単な要約を書き、`Summary` チェックボックスをオンにします
    - これは `AppSec review was not performed before merge` または `Review was performed but sec-planning label did not get applied` のように単純なものでよいです
    - 必要に応じて、マージリクエストがレビューを受けなかった理由、プロセスの欠陥、改善の機会を文書化するコメントを Issue に追加します。コメントへのリンクを `Summary` 行に追加します。
1. レポート内の各検出結果がレビューされたら、Issue をクローズします

検出結果の中に脆弱性やその他のセキュリティ上の懸念を発見した場合:

1. 適切なリポジトリに新しい Issue を作成し、優先度/重大度ラベルを適用するという通常のトリアージを行います
1. Issue でマージリクエストの作成者、レビュアー、AppSec チームに通知します
1. 可能であれば、リリースに含まれる前にマージリクエストをリバートできるよう作業します
    - リリースが進行中の場合、デリバリーチームに連絡してリリースから取り除けるか確認します
    - すでにリリースに含まれており、これが S1 の検出結果である場合、通常の [S1 プロセス](/handbook/security/product-security/psirt/runbooks/handling-s1p1/)に従います
1. Merge Monitor レポートに、脆弱性が特定されたことを示す注釈と、追跡用に作成された Issue へのリンクを追加します

## モニターの制限事項

Merge Monitor は [jihu_merge_request_monitor_reports](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/jihu_merge_request_monitor_reports) で[プロジェクトアクセストークン](https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html)を使用しているため、JiHu チームがコントリビュートする公開リポジトリのマージリクエストを見つけるためにのみ使用できます。一部のリポジトリは[認定プロセスのドキュメント](/handbook/finance/jihu-support/release-certification/#certification-process)で言及されているように手動レビューが必要であり、このツールではカバーされません。これらのリポジトリへのコントリビューションは、通常の月次リリース認定プロセスの一環としてレビューされます。
