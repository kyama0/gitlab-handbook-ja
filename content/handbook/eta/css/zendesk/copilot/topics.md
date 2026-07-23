---
title: 'Zendesk Copilot トピック'
description: 'Zendesk Copilot トピックに関するドキュメント'
upstream_path: /handbook/eta/css/zendesk/copilot/topics/
upstream_sha: "7032d681eb34b7baa363eb97119170b35beb5d76"
lastmod: "2026-07-23T10:49:35-05:00"
translated_at: "2026-07-24T06:39:10+09:00"
translator: codex
stale: false
---

このガイドでは、GitLab における Zendesk Copilot トピックの作成、編集、管理について説明します。

{{% alert title="技術詳細" color="primary" %}}

- デプロイメントの種類: `Ad-hoc`
- プロジェクトリポジトリ: [Topics](https://gitlab.com/gitlab-support-readiness/zendesk-copilot/topics)
- `CustSuppOps Zendesk Test Suite Generator` は無効

{{% /alert %}}

## トピックを理解する

[Zendesk](https://support.zendesk.com/hc/en-us/articles/8903424797722-Setting-up-intelligent-triage-topics) によると:

> トピックは、チケットの内容を分類します。チケットに表示されるトピックを使用して、ワークフローを自動化できます。

### トピックの管理方法

現在、すべてのトピックを Zendesk 自体で管理しています。管理者以外のユーザーによるコラボレーションを可能にし、バージョン管理を行うため、すべてのトピック（およびその説明）のソースは [Topics](https://gitlab.com/gitlab-support-readiness/zendesk-copilot/topics) プロジェクトリポジトリで管理しています。

### トピックの構造

トピックはサブカテゴリー（カテゴリー内にあります）内の項目です。各トピックには、Zendesk Copilot がチケットにそのトピックを使用すべきかどうかを判断するのに役立てる説明があります。

例として、トピック `Product::Geo::Geo replication or failover` は次のとおりです:

- カテゴリー: `Product`
- サブカテゴリー: `Geo`
- トピック: `Geo replication or failover`
- 説明（使用例であり、本番環境の値を反映していない場合があります）:
  > GitLab Geo のレプリケーション、セカンダリサイト、分散されたセルフマネージドデプロイメントのための災害復旧に関するチケット。症状には、レプリケーションの遅延、検証の失敗、サイトのフェイルオーバーまたは再同期の問題、トラッキングデータベースの問題、セカンダリノードで欠落または古くなっているコンテンツが含まれます。一般的なデータベースやストレージの問題ではなく、Geo の動作に固有の問題である場合に使用します。

### トピック名の制限

トピックは、そのカテゴリーおよびサブカテゴリーと同様に、英数字とスペースのみを使用できます。ハイフン、スラッシュ、アンダースコアなどの特殊文字は使用できません。

## トピックの変更をリクエストする

{{% alert title="注記" color="warning" %}}

カテゴリーまたはサブカテゴリーを具体的に変更しようとしている場合は、代わりに [Feature Request Issue](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Systems チームによる手動の対応が必要になるためです）。

{{% /alert %}}

トピックに変更を加えるには（新規作成や既存トピックの説明の変更など）、[Topics](https://gitlab.com/gitlab-support-readiness/zendesk-copilot/topics) プロジェクトリポジトリを通じてマージリクエストを作成します。

その後の手順は次のとおりです:

1. [リクエスターの対応](#requester-actions)
1. [Customer Support の対応](#customer-support-actions)
1. [CSS の対応](#css-actions)

### リクエスターの対応 {#requester-actions}

{{% alert title="注記" color="warning" %}}

マージリクエストで "auto-merge" を有効にしないでください。プロセスが複雑になる可能性があります。

{{% /alert %}}

デフォルトのマージリクエストテンプレートに記入します。その後、CI/CD パイプラインが完了するまで待ちます。

これらのパイプラインは、マージリクエストの有効性を確認します。問題が検出された場合は、修正が必要な内容を詳述したコメントがマージリクエストに追加されます。問題を修正する新しいコミットをプッシュすると、CI/CD スクリプトが再実行されます（コメントも適宜更新されます）。

CI/CD が完了し、問題がないことを確認したら、マージリクエストの承認者をレビューし、`Customer Support` から誰が承認できるかを確認します。追加の支援を受けるため、表示されているいずれかの人にアサインします（多くの場合、複数人を選ぶ方がよいです）。

ここから、リクエストは [Customer Support の対応](#customer-support-actions) に移ります。

### Customer Support の対応 {#customer-support-actions}

{{% alert title="注記" color="warning" %}}

マージリクエストで "auto-merge" を有効にしないでください。プロセスが複雑になる可能性があります。

{{% /alert %}}

Customer Support の担当者は、同意できない点がないかを確認しながらマージリクエストをレビューします。問題が見つかった場合は、調査結果をマージリクエストにコメントとして追加してください（リクエスターに必ずメンションします）。

問題がなければ、マージリクエストを承認します。その後、マージリクエストの承認者をレビューし、`Customer Support systems` から誰が承認できるかを確認します。追加の支援を受けるため、表示されているいずれかの人にアサインします（多くの場合、複数人を選ぶ方がよいです）。

ここから、リクエストは [CSS の対応](#css-actions) に移ります。

### CSS の対応 {#css-actions}

CSS の担当者は、同意できない点がないかを確認しながらマージリクエストをレビューします。問題が見つかった場合は、調査結果をマージリクエストにコメントとして追加してください（リクエスターに必ずメンションします）。

問題がなければ、変更が適切に実装されるように作業項目を作成する必要があります。これを行うには、GitLab Duo でチャットを開き、エージェント `Zendesk Copilot - Topic changes` を選択して実行します（ここで送信する正確なメッセージはほとんど重要ではありません）。エージェントが MR をレビューし、変更が適切にデプロイされるように作業項目を作成します。

その後、作業項目の Issue を完了まで対応します。詳細は、[トピック変更の Issue への対応](#working-topic-change-issues) を参照してください。

Issue への対応が完了したら、マージリクエストを承認してマージします。

## トピック変更の Issue への対応 {#working-topic-change-issues}

作業項目が作成されたら、CSS チーム全員をアサインする必要があります。自分がその項目を対応する場合は、他のメンバーのアサインを解除します（自分だけを残します）。

その後、変更をサンドボックスインスタンスに実装する必要があります。

サンドボックスインスタンスに実装した後、変更が適切に機能していることを確認するテストを実施します。その際に支援が必要な場合は、テストチケットに使用する適切な件名／説明の詳細を得るため、マージリクエストのリクエスター（作業項目を作成した人）に連絡することを検討してください。

変更が適切に機能していることを確認したら、本番環境のインスタンスに変更を実装します。

その後、Issue をクローズし、マージリクエストに戻って承認およびマージします。

### カテゴリーとサブカテゴリーの管理

これらは、トピックを作成または変更するときにのみ作成できます。現在、カテゴリーまたはサブカテゴリーを直接作成または変更する方法はありません。

カテゴリー／サブカテゴリーの名前を変更する必要がある場合は、トピック管理を通じて新しいものを作成し、以前のカテゴリー／サブカテゴリーを使用している既存のすべてのトピックを新しいものに移動する必要があることに注意してください。

### トピックの作成

トピックを作成するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `AI > Intelligent triage > Topics` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/ai/intelligent-triage/intent)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/ai/intelligent-triage/intent)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/ai/intelligent-triage/intent)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/ai/intelligent-triage/intent)
1. 必要な詳細を入力します:
   - 名前: 名前は Agent Workspace に表示されます。
   - 説明: チケットを正確に分類するための詳細
   - カテゴリー: トピックのカテゴリー
     - 新しいカテゴリーまたはサブカテゴリーを作成する必要がある場合は、ここで作成します。
1. ページ右下の `Create custom topic` をクリックします

### トピックの変更

トピックを変更するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `AI > Inteliigent triage > Topics` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/ai/intelligent-triage/intent)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/ai/intelligent-triage/intent)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/ai/intelligent-triage/intent)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/ai/intelligent-triage/intent)
1. 該当するトピックを見つけます
1. 見つけたトピックの右側にある縦に並んだ 3 点をクリックします
1. `Edit topic` をクリックします
1. 必要な変更を加えます
1. ページ右下の `Save changes` をクリックします

### トピックの無効化

トピックを無効化するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `AI > Inteliigent triage > Topics` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/ai/intelligent-triage/intent)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/ai/intelligent-triage/intent)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/ai/intelligent-triage/intent)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/ai/intelligent-triage/intent)
1. 該当するトピックを見つけます
1. 見つけたトピックの右側にある縦に並んだ 3 点をクリックします
1. `Deactivate` をクリックします
1. ポップアップモーダルで `Deactivate topic` をクリックし、無効化を確認します。

## よくある問題とトラブルシューティング

これは、必要に応じて項目が追加される生きたセクションです。
