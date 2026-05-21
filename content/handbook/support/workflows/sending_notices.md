---
title: 通知の送信
category: GitLab.com
description: GitLab.com のユーザーやお客様に対し、ユーザーやお客様自身が管理するネームスペースに対するさまざまなアクションを通知する方法
upstream_path: /handbook/support/workflows/sending_notices/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T02:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-03T14:17:43-06:00"
---

## プロセスの概要

[サポートチームは、GitLab SaaS のユーザーやお客様に対して、ユーザーやお客様自身が管理しているネームスペースまたはプロジェクトに対して私たちが行った（あるいは今後行う）アクションを通知する依頼を受けることがあります](/handbook/support/internal-support/#contacting-users-about-gitlab-incidents-or-changes)。

このワークフローでは、さまざまな種類の連絡依頼への対応方法と、その過程で利用できる便利なツールについて説明します。

## ツールと承認

| ユーザー数 | 利用するもの | 必要な承認 | 必要な通知 |
| --- | --- | --- | --- |
| 1〜2 | [Zendesk チケットを手動で作成する](#manually-create-a-zendesk-ticket) | なし | なし |
| 3 名以上 | [マーケティング部門経由のマスメール](#mass-emails-through-marketing-department) | ディレクター | [Support Preparedness Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/new?issuable_template=Support%20Preparedness) + FAQ |

- サポートチームは**インシデント発生時**にユーザーへ連絡する依頼を受けることがあります。これらの依頼は、インフラチームから [`confidential_incident_data` Issue テンプレート](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/new?issuable_template=confidential_incident_data)を使用して、[production](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/) Issue トラッカー上で起票されます。これらはシフト中の CMOC によって対応される必要があります。
- [Stable Counterpart](../support-stable-counterparts.md) として、判断によりより多くのユーザーに対して手動でチケットを作成することを選択する場合があります。これは「あなたの利用方法が問題を引き起こしている可能性があるので別のアプローチを提案させていただきます」のような技術的な事項のためにのみ行うべきであり、「xyz を行う新しい方法ができたので採用してほしい」のようなマーケティング目的では決して行ってはなりません。

## RED データの送信を避ける

すべての発信連絡依頼において、明示的に RED データの送信を避けてください。（参照: [データ分類標準](/handbook/security/policies_and_standards/data-classification-standard/)）。これによって以下を回避できます:

- データの取り違えエラー（誤って別のお客様のデータを送ってしまう）
- お客様内部のデータ漏洩（メールを受け取った人物 `x` がプロジェクト `y` について知る権限を持っていない）
- 許可されていないシステムにお客様の RED データを入れること（システム `z` は YELLOW データのみが許可されている分類だが、RED データの送信に使われる）

特定のデータが送信に適切かどうかについて少しでも疑念がある場合は、まず `#support_leadership` で質問し、必要に応じて `#privacy-team_help` / `#security` にエスカレーションしてください。

例:

- フルパス（例: `/big-co/sub-proj/super-secret-project`）を**送らない**こと、代わりにプロジェクト/ネームスペースの ID と、それを変換するための手順を送る。

### 通知における RED データを避けるためのヒント

- リソースへのリンクを共有する際には、組み込みの[プロジェクト](https://docs.gitlab.com/user/project/working_with_projects/#find-the-project-id)および[グループ](https://docs.gitlab.com/user/group/#find-the-group-id)のリダイレクトを活用してください。ユーザーがそのリソースを表示する適切な権限を持っていれば、リダイレクトされます。
  - プロジェクトの例: `https://gitlab.com/-/p/278964` は `https://gitlab.com/gitlab-org/gitlab` にリダイレクトされます。
  - グループの例: `https://gitlab.com/-/g/9970` は `https://gitlab.com/gitlab-org` にリダイレクトされます。

## 通知の送信方法

通知のほとんどは Zendesk チケットの形で送信される必要があります。これらのチケットは常に、対象のネームスペースまたはプロジェクトで `Owner` レベルの権限を持つユーザーに送ってください。

ほとんどの連絡依頼は、1 つのプロジェクトのオーナー全員、あるいは数名の特定のユーザーへの連絡を伴います。プロジェクトのオーナーへの連絡を任され、オーナーが 1 名のみと分かっている場合は、管理者アカウントまたは [ChatOps](/handbook/support/workflows/chatops/#user) を使ってメールアドレスを調べてかまいません。

ただし、一部の連絡依頼は複数のプロジェクトのオーナー全員への連絡を伴うことがあります。サポートエンジニアは、複数のプロジェクトにまたがる複数のオーナーへの連絡依頼については、[マーケティング部門経由のマスメール](#mass-emails-through-marketing-department)で対応するように案内すべきです。

アクションを実行したユーザー/グループには [Admin Note を追加](/handbook/support/workflows/admin_note/)してください。これにより、ユーザーが別のチャネル経由で連絡してきた場合でも、ブロック/変更の理由を追跡できます。

### Zendesk チケットを手動で作成する {#manually-create-a-zendesk-ticket}

**警告** これにはしばしば Zendesk で*ユーザーを作成する*能力が必要となりますが、これは特定のロール（例: CMOC）でのみ利用できます。そのアクセス権は*非常に*リスクが高く、このセクションで文書化されている通りにのみ使用すべきです。

**注意** これは現時点では Zendesk Global にのみ適用されます。

発信リクエストを送信する必要がある場合、ルーティングが適切に行われ、連絡したいエンドユーザーが正しい通知を受け取ることを保証するため、非常に特定の方法で行う必要があります。

これを行うには、まず Zendesk の左上にある `+ Add` にカーソルを合わせ、`Ticket` をクリックします。

最初に行うべきことはリクエスターの選択です。これを行うには、ページ左上の `Requester` の下のテキストボックス内をクリックし、連絡を取ろうとしているメールアドレスを入力してください。

次に取るアクションは、対象のユーザーが存在するかしないかによって異なります:

- ユーザーが存在する場合、ドロップダウンに該当するユーザーが表示されます（ドロップダウン内の該当エントリをクリックすると、そのユーザーが選択されます）。
- ユーザーが存在しない場合、結果は見つからず、ドロップダウンの `+ Add user` リンクをクリックする必要があります。これにより、作成するユーザーの名前とメールを入力するモーダルが表示されます。名前が分からない場合は、名前とメールの両方のフィールドに同じメールアドレスを使うのが常に最も安全です。青い `Add` ボタンをクリックしてユーザーを作成します。
  - **警告** 他の方法でユーザーを決して作成しないでください。これは、Support Readiness 以外のチームが私たちのサポートシステム内で手動でユーザーを作成する際の、唯一の方法です。CC でユーザーを追加する場合には、決してこの方法を利用しないでください。

これを行った後、チケットの件名を追加してください。これは常にページ上中央部分から行ってください。

件名を入力した後、次にマクロ `General::Outbound Contact Request` を適用する必要があります。このステップは**極めて重要**で、決してスキップしてはなりません。このマクロは、チケットが発信リクエスト用に適切にセットアップされることを保証します。このステップをスキップすると、新しいチケットが正しくルーティングされず、無数の問題に遭遇する原因となります。

これが完了したら、チケットの説明を入力します。これは、エンドユーザーに送りたいメッセージの中核となる部分です。

完了したら、最後のステップはチケットを *pending*（保留中）として送信することで作成を完了することです。これは、ページ右下の下向き矢印をクリックし、`Submit as Pending` をクリックすることで行います。

### マーケティング部門経由のマスメール {#mass-emails-through-marketing-department}

Zendesk の外部では、ユーザーへのマス通知の送信プロセスに関与するよう依頼されることがあります。より大規模なメールキャンペーンの場合は、マーケティングチームを巻き込みましょう:

1. [marketing/marketing-operations](https://gitlab.com/gitlab-com/marketing/marketing-operations) Issue トラッカーで、`request-operational-email` テンプレートを使って [Issue を起票](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=request-operational-email)してください。[request-target-list テンプレート](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=request-target-list)を使った補助 Issue の作成も必要となる場合があります。
1. テンプレートをすべて記入してください。
1. Issue を提出し、フィードバックに応じて通知の件名や本文の調整に対応できるようにしておきます。

このプロセスにはマネジメントからの複数の承認が必要となるため、計画的に進め、メール送信の少なくとも 1 週間前までに Issue がレビュー可能な状態になっていることを確認してください。

## ツール

以下のツールは、さまざまな種類の連絡依頼を円滑にするために使用できます。

### Email Grab スクリプト

[Email Grab スクリプト](https://gitlab.com/gitlab-com/support/runbooks/-/blob/master/code/group_project_user_owner_emails.rb)は、グループまたはプロジェクトのオーナーのプライマリメールアドレスを返す Ruby スクリプトです。現時点では、GitLab SaaS の管理者アカウントを所有している場合のみ使用できます。ユーザー名のリストのみを与えることもでき、その場合はそれらのユーザーのプライマリメールアドレスを返します。利用方法は以下のとおりです:

1. 必要な [labclient](https://rubygems.org/gems/labclient/versions/0.5.1) gem を `gem install labclient` でインストールします。
1. スクリプトをローカルマシンにコピーし、`emailgrab.rb` のような名前を付けます。
1. `YourSuperSweetPAT` を、GitLab SaaS 管理者アカウントの `read_api` スコープ付き PAT に置き換えます。

- **注意**: 管理者アカウントから新しい PAT が作成された場合、SIRTbot アプリから PAT 作成が正当なものか確認する Slack メッセージが届きます。セキュリティ監査のため、忘れずに記入してください。

1. スクリプトのうち使わないセクション（`groups`、`users`、`projects` のいずれか）を[コメントアウト](https://docs.ruby-lang.org/en/3.0/syntax/comments_rdoc.html)します。
1. 使用するセクションにデータを追加します。
1. `ruby emailgrab.rb` でスクリプトを実行します。

結果は、スクリプトが置かれているのと同じディレクトリ内に `namespace-contacts.csv` として作成されます。
