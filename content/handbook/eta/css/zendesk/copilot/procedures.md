---
title: '手順'
description: 'Zendesk Copilot 手順のドキュメント'
upstream_path: /handbook/eta/css/zendesk/copilot/procedures/
upstream_sha: 68426776f854464b95a942162d83ddb29afbcf7d
lastmod: "2026-08-24T10:26:09-05:00"
translated_at: "2026-09-04T13:16:58+09:00"
translator: codex
stale: false
---

このガイドでは、GitLab で Zendesk Copilot の手順を作成、編集、管理する方法について説明します。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクトリポジトリ: [Procedures](https://gitlab.com/gitlab-support-readiness/zendesk-copilot/procedures)
- `CustSuppOps Zendesk Test Suite Generator` は無効

{{% /alert %}}

## 手順について

[Zendesk](https://support.zendesk.com/hc/en-us/articles/7924047699738-Creating-procedures-for-auto-assist) によると、次のとおりです。

> 手順とは、自動アシストが提案を行う際に従うべき一連のステップを記述したものです。手順の定義は、新しいエージェントに、社内で特定の問題をどのように解決すべきか説明することに似ていると考えられます。

### 手順の管理方法

現在、すべての手順は Zendesk 内で管理しています。管理者以外もコラボレーションでき、バージョン管理を行えるよう、すべての手順の原文（および説明）は [Procedures](https://gitlab.com/gitlab-support-readiness/zendesk-copilot/procedures) プロジェクトリポジトリで管理しています。

## 手順の変更をリクエストする

手順を変更するには（新規作成や既存手順の変更など）、[Procedures](https://gitlab.com/gitlab-support-readiness/zendesk-copilot/procedures) プロジェクトリポジトリでマージリクエストを作成してください。

作成後のステップは次のとおりです。

1. [リクエスト送信者のアクション](#requester-actions)
1. [CSS のアクション](#css-actions)

### リクエスト送信者のアクション {#requester-actions}

{{% alert title="注" color="warning" %}}

マージリクエストで「auto-merge」を有効にしないでください。プロセスが複雑になる可能性があります。

{{% /alert %}}

デフォルトのマージリクエストテンプレートに入力してください。入力後、CI/CD パイプラインの完了を待ちます。

これらのパイプラインは、マージリクエストの有効性をチェックします。問題が検出された場合は、修正が必要な内容を詳述したコメントがマージリクエストに追加されます。問題を修正する新しいコミットをプッシュすると、CI/CD スクリプトが再実行され、それに応じてコメントも更新されます。

CI/CD が完了し、問題がないことが確認されたら、マージリクエストの承認者を確認して、`Customer Support Systems` の誰が承認できるかを判断します。さらに支援を受けるため、一覧にある人に割り当てます（複数の人を選ぶ方がよい場合が多いです）。

ここから、リクエストは [CSS のアクション](#css-actions)に移ります。

### CSS のアクション {#css-actions}

CSS の担当者はマージリクエストをレビューし、同意できない点がないか確認します。問題が見つかった場合は、リクエスト送信者にメンションしたうえで、所見をマージリクエストにコメントしてください。

問題がない場合は、変更を適切に実装するための作業アイテムを生成する必要があります。そのためには GitLab Duo とのチャットを開き、エージェント `Zendesk Copilot - Procedure changes` を選択して実行します（ここで送信するメッセージの正確な内容はほとんど重要ではありません）。エージェントが MR をレビューし、変更を適切にデプロイするための作業アイテムを生成します。

その後、その作業アイテムの Issue を完了まで進めます。詳細については、[手順変更 Issue への対応](#working-procedure-change-issues)を参照してください。

Issue への対応が完了したら、マージリクエストを承認してマージします。

## 手順変更 Issue への対応 {#working-procedure-change-issues}

作業アイテムが作成されると、CSS チーム全員が割り当てられます。あなたがそのアイテムに対応する場合は、自分以外の割り当てを解除します。

その後、サンドボックスインスタンスに変更を実装する必要があります。

サンドボックスインスタンスに実装した後、変更が正しく動作することを確認するためにテストを実施してください。テストで支援が必要な場合は、作業アイテムを作成したマージリクエストの送信者に連絡し、テストチケットで使う適切な件名や説明の詳細を確認することを検討してください。

変更が正しく動作することを確認したら、本番インスタンスに変更を実装します。

その後、Issue をクローズし、マージリクエストに戻って承認、マージします。

### 手順を作成する

手順を作成するには、次のようにします。

1. Zendesk インスタンスのナレッジ管理ダッシュボードに移動します
   - [Zendesk Global（本番）](https://gitlab.zendesk.com/knowledge/home/)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/knowledge/home)
   - [Zendesk US Government（本番）](https://gitlab-federal-support.zendesk.com/knowledge/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/home)
1. `Content > Customert objects > Procedures` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/knowledge/procedures)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/knowledge/procedures)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/knowledge/procedures)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/procedures)
1. ページ右上の `Create procedure` をクリックします
1. 必要な詳細を入力します
1. ページ右下の `Save draft` をクリックします

### 手順を変更する

トピックを変更するには、次のようにします。

1. Zendesk インスタンスのナレッジ管理ダッシュボードに移動します
   - [Zendesk Global（本番）](https://gitlab.zendesk.com/knowledge/home/)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/knowledge/home)
   - [Zendesk US Government（本番）](https://gitlab-federal-support.zendesk.com/knowledge/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/home)
1. `Content > Customert objects > Procedures` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/knowledge/procedures)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/knowledge/procedures)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/knowledge/procedures)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/procedures)
1. 対象の手順を見つけ、その名前をクリックします
1. 必要な変更を加えます
1. ページ右下の `Save draft` をクリックします

### 手順を公開する

1. Zendesk インスタンスのナレッジ管理ダッシュボードに移動します
   - [Zendesk Global（本番）](https://gitlab.zendesk.com/knowledge/home/)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/knowledge/home)
   - [Zendesk US Government（本番）](https://gitlab-federal-support.zendesk.com/knowledge/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/home)
1. `Content > Customert objects > Procedures` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/knowledge/procedures)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/knowledge/procedures)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/knowledge/procedures)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/procedures)
1. 対象の手順を見つけます
1. 見つけた手順の右側にある縦の三点リーダーをクリックします
1. ドロップダウンメニューの `Publish` をクリックします
1. ポップアップモーダルの `Publish` をクリックします

### 手順を非公開にする

1. Zendesk インスタンスのナレッジ管理ダッシュボードに移動します
   - [Zendesk Global（本番）](https://gitlab.zendesk.com/knowledge/home/)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/knowledge/home)
   - [Zendesk US Government（本番）](https://gitlab-federal-support.zendesk.com/knowledge/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/home)
1. `Content > Customert objects > Procedures` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/knowledge/procedures)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/knowledge/procedures)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/knowledge/procedures)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/procedures)
1. 対象の手順を見つけます
1. 見つけた手順の右側にある縦の三点リーダーをクリックします
1. ドロップダウンメニューの `Unpublish` をクリックします

### 手順を削除する

トピックを削除するには、次のようにします。

1. Zendesk インスタンスのナレッジ管理ダッシュボードに移動します
   - [Zendesk Global（本番）](https://gitlab.zendesk.com/knowledge/home/)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/knowledge/home)
   - [Zendesk US Government（本番）](https://gitlab-federal-support.zendesk.com/knowledge/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/home)
1. `Content > Customert objects > Procedures` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/knowledge/procedures)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/knowledge/procedures)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/knowledge/procedures)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/procedures)
1. 対象の手順を見つけます
1. 見つけた手順の右側にある縦の三点リーダーをクリックします
1. ドロップダウンメニューの `Delete` をクリックします
1. ポップアップモーダルの `Delete procedure` をクリックします

## よくある問題とトラブルシューティング

これは必要に応じて項目が追加される継続的なセクションです。
