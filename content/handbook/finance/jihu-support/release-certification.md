---
title: リリース認定
upstream_path: /handbook/finance/jihu-support/release-certification/
upstream_sha: a1349675d55d5e861385a14a4b2d2b617d2381b1
translated_at: "2026-04-29T19:06:37Z"
translator: claude
stale: false
lastmod: "2026-02-06T19:27:57-05:00"
---

## リリース認定プロセス

JiHu コントリビューションを含むすべてのリリースは、[Federal Application Security チーム](/handbook/security/product-security/security-platforms-architecture/application-security/)のメンバーが認定する必要があります。
これは PubSec/FedRamp 要件を満たし、GitLab Inc リポジトリへの JiHu のマージリクエストコントリビューションを処理するために必要です。

このプロセスでは、リリースに含まれる各 JiHu コントリビューションが[Application Security チームメンバーによってレビューおよび承認](/handbook/finance/jihu-support/jihu-contribution-process/)されていることを確認し、リリースされるコードに新しい脆弱性が確認されていないことを[関連リリースタスク Issue](https://gitlab.com/gitlab-org/release/tasks/issues) にコメントとして投稿することが含まれます。

### リリースを認定できる担当者

PubSec/FedRamp 要件により、米国市民のみが米国領内でリリースを認定できます。
つまり、Federal AppSec チームのメンバーのみがリリースの認定を実施できます。
なお、Application Security チームの*すべての*メンバーが JiHu コントリビューションをレビューおよび承認できますが、リリースを認定できるのは Federal AppSec チームのメンバーのみです。

Federal AppSec チームのメンバーは月次リリースの認定に責任を持ちます。担当は[自動化によって管理](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/triage-rotation/)されます。これらの割り当ては、AppSec リリース認定列の下にある[リリースマネージャーページ](https://about.gitlab.com/community/release-managers/)にも反映される必要があります。

### 認定プロセス

認定プロセスは、新しい JiHu コントリビューションがリリースに含まれないことが完全に確実になってから開始できます。開始する推奨タイミングは、「新しいコードはリリースに追加できない」と指定されるリリースタスクの `リリース前日` セクションです。

新しい JiHu コントリビューションが追加されないことが確実になったら、以下の手順に従ってください：

1. [毎月のリリース日](/handbook/engineering/releases/)に、[jh-upstream-report リポジトリ](https://gitlab.com/gitlab-org/jh-upstream-report)がスケジュールされたパイプラインを実行し、リリース認定 Issue を自動的に作成します。これにより、次のリリースに関連する各 JiHu コントリビューションを含むチェックリストを持つ Issue が [jh-upstream-report Issue トラッカー](https://gitlab.com/gitlab-org/jh-upstream-report/-/issues)に作成されます。問題が発生した場合は、[リリース認定ツールスクリプト](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/release-certification-tools)を `README.md` の指示に従って手動で実行する必要がある場合があります
1. リリースに含まれるすべての JiHu コントリビューションがこのリストにあることを確認します。[各リポジトリ](/handbook/finance/jihu-support/#projects)の `JiHu Contribution` ラベルを検索することに加え、[ステータスレポート](https://gitlab.com/gitlab-jh/status-reports/-/issues)リポジトリ情報を確認することで実施できます（認定 Issue にリンクが用意されているはずです）。オープンとクローズ両方のマージリクエストを確認してください。MR がリリースに含まれているがチェックリストにない最も可能性の高い理由は、適切なマイルストーンが設定されていないことです
1. チェックリストの各 JiHu コントリビューションについて：
    - マージリクエストを確認して、AppSec レビュアーがレビューを行い受け入れ可能であることを示しているか確認する
    - マージリクエストが Application Security レビューを受けていない場合は、レビューを実施して適切なラベルを適用する
    - マージリクエストが Application Security レビューを受けていない場合は、マージした担当者にマージ前に Application Security チームがレビューするべきであることを丁寧に伝えることを検討する
    - レビューが行われたが実施されたことを示すラベルが適用されなかった場合がある——その場合はマージリクエストにラベルを追加する
    - 一部のマージリクエストはまだ `Opened` 状態にあります。これはリリースの一部ではないが、そのリリースマイルストーンに関連付けられていることを意味します——この場合、チェックボックスにチェックを入れるだけで構いません
    - 時間が許せば、変更を簡単にレビューして受け入れ可能であることを再確認する
    - リリース認定 Issue の対応するチェックボックスをオンにして、MR が受け入れ可能であることが確認されたことを示す
1. 手動レビューが必要なリポジトリのセクションがあります。通常、自動化がプライベートリポジトリやマージリクエストセクションがプライベートに設定されているリポジトリを参照できないプロジェクトアクセストークンを使用しているため、これらのリポジトリを自動化に含めることができません。これらの各リポジトリについて：
    - 各リポジトリのマージリクエストセクションを参照して、マージされた JiHu コントリビューションを探す
    - これらのマージリクエストはマイルストーンや特定のリリースに関連付けられていない場合があるため、マージ済みのマージリクエストを「マージ日」で並び替えて、過去1か月の JiHu コントリビューションを探す必要がある場合があることに注意する
    - リストされているリポジトリの一部には、レビューを実施する際に考慮すべき情報のメモが記載されている場合がある
    - JiHu コントリビューションが見つかった場合は、デフォルトの `JiHu contribution merge requests were included しない` チェックボックスを削除し、見つかった各 JiHu コントリビューションのチェックボックスを追加する
    - JiHu コントリビューションが見つからない場合は、`JiHu contribution merge requests were included しない` チェックボックスにチェックを入れる
    - リポジトリの JiHu コントリビューションのレビューが完了したら、そのリポジトリのレビューが完了したことを示すために `このリポジトリは手動でレビューされました` チェックボックスにチェックを入れる
1. リリース内のすべての JiHu コントリビューションが AppSec チームメンバーによってレビューされたことが完全に確実になったら：
    - リリース認定 Issue の下部に生成された定型コメントをコピーしてリリースタスク Issue にコメントとして貼り付ける
    - リリース認定 Issue にプロセスが完了したことを示すコメントをして、リリースタスク Issue に投稿した認定コメントへのリンクを記載する
    - リリース認定 Issue をクローズする

### 脆弱性を導入するコントリビューション

コントリビューションのいずれかに S1 または S2 の潜在的な脆弱性が確認された場合：

1. リリース認定 Issue に MR へのリンクと脆弱性の説明のコメントを投稿する
1. `#security_help` Slack チャンネルにコメントへのリンクを含むメッセージを投稿する
1. デリバリーチームの適切な[リリースマネージャー](https://about.gitlab.com/community/release-managers/)にピングして、MR をリリースから削除するよう協力する
    - 脆弱性のあるコードが削除された場合は、認定プロセスを続行する
    - 脆弱性のあるコードが削除できない場合は、以下の `リリースを認定できない場合` の手順に従う

### リリースを認定できない場合

まれな状況で、Federal AppSec チームのメンバーがリリースを認定**しない**ことを選択する場合があります。これは、既知の脆弱性がリリースに含まれており削除できない場合、またはその他の状況（さらに例は TBD）が理由となる場合があります。

リリースを認定できないイベントが発生した場合：

1. リリース認定 Issue に、リリースを認定しないことを選択した理由を簡潔に説明するコメントを書く
1. リリース認定 Issue で上記コメントへの返信として、セキュリティリーダーシップ（`@juliedavila` と `@jritchey`）にピングする
1. `#security_help` Slack チャンネルでリリースを認定できないことを発表し、リリース認定 Issue へのリンクを投稿し、`@appsec-leadership` を @-メンションする
