---
title: ログおよび監査リクエスト
description: "GitLab Support が gitlab.com のログから顧客に提供できる集約情報の概要。サマリーを超える詳細については Security リクエストが必要です。"
category: GitLab.com
subcategory: Security
upstream_path: /handbook/support/workflows/log_requests/
upstream_sha: 5b8afe7d206f5c195e463506206021ee3c9a4491
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-30T11:16:15+00:00"
---

## GitLab.com のログリクエスト

> 📝 **注:**
> 2026年4月時点で、Security ログリクエストプロセスが変更されました。Customer Support は[このプロセス](https://internal.gitlab.com/handbook/support/workflows/security-logs-runbook/)を使用してログリクエストに直接対応できるようになりました。

ユーザーは多くの場合、[IP ブロック](/handbook/support/workflows/ip-blocks)、セキュリティ問題の可能性、または社内監査の目的で、GitLab.com のログへのアクセスを求めてきます。

必要に応じて追加情報を添えて、必ず内部ノートとしてログへのリンクを含めてください。

ZenDesk には標準応答が[`Support::SaaS::Gitlab.com::Audit logs access request`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Audit%20logs%20access%20request.md?ref_type=heads)というマクロとして用意されています。

必要であれば、[エスカレーションプロセス](/handbook/support/internal-support/support-ticket-attention-requests)に従ってチケット/Issue をエスカレーションできます。

直近30日以内のリクエストのログを取得するヒントについては、[Kibana ワークフロー](/handbook/support/workflows/kibana/)ページの利用を検討してください。サマリーを超えるログリクエスト（以下の例のようなもの）や、Kibana ですぐに取得できないログについては、[顧客側のセキュリティインシデント中に GitLab.com 顧客への支援を提供する](/handbook/security/customer-requests/)ためのハンドブックページに記載されたプロセスに従って処理してください。GitLab の Security Incident Response Team は、複雑で広範なリクエストを、顧客対応オペレーションのための社内[ランブック](https://internal.gitlab.com/handbook/security/cross_functional_runbooks/customer_security_incidents/)に従って処理します。

顧客がセキュリティインシデントに関連してログの緊急リクエストを行った場合、まず、追加の意図しないアクセスを防ぐため、影響を受ける可能性のあるトークンとパスワードを顧客が失効または変更したことを確認してください。ほとんどのケースでは、緊急チケットは高優先度に格下げされ、[顧客側のセキュリティインシデント中に GitLab.com 顧客への支援を提供する](/handbook/security/customer-requests/)プロセスで対応されるべきです。顧客がより緊急の対応を要求する場合は、[オンコール中の Support Manager](/handbook/support/on-call/#engaging-the-on-call-manager) と確認してください。

### リクエストできる人

#### 有償サブスクリプション

- 既存の有償ネームスペースの Group Owner のみがリクエストを行えます。
- ログリクエストが処理される前に、[アカウント所有権の確認](/handbook/support/workflows/account_verification/)を**必ず**完了する必要があります。

> NOTE: ユーザーはログリクエストへのアクセスを得るために有償サブスクリプションにアップグレードすることはできません。

#### 無償ユーザー

Support は[インシデント発生時に GitLab がコンタクトを開始した場合](https://about.gitlab.com/support/statement-of-support/#free-users)に限り情報を提供します。

無償ユーザー/グループが調査のために情報を必要とする場合の選択肢は以下のとおりです。

- [Ultimate トライアル](https://gitlab.com/-/trials/new)をリクエストするか、サブスクリプションを購入することで、監査イベントにアクセスできます。
  監査イベントは有効なサブスクリプションの背後にロックされているため、GitLab 管理者でも無償グループのイベントを閲覧することはできません。
  ユーザーは、トライアルを使用するかサブスクリプションを購入するかにかかわらず、監査イベントを使用して独自の調査を行う必要があります。
- グループアクティビティ概要（`https://gitlab.com/groups/<group-name>/-/activity`）からイベントを確認します。

429 レスポンスを受け取っている無償ユーザーは、[GitLab.com レート制限のドキュメント](https://docs.gitlab.com/user/gitlab_com/#rate-limits-on-gitlabcom)を確認してください。

### 提供できるもの

顧客のリクエストが[内部ランブック](https://internal.gitlab.com/handbook/support/workflows/security-logs-runbook/)に定義されたテンプレートのいずれかに一致する場合、Customer Support はそこに記載されたプロセスに従って直接ログリクエストに対応できます。

リクエストが利用可能なテンプレートに一致しない場合、以下のような汎用的なサマリー情報を提供できます。

- [監査イベント機能](https://docs.gitlab.com/administration/audit_event_reports/)に記載されている情報
- 顧客が所有するアカウント/プロジェクトにアクセスした人に関する情報。これには以下が含まれます:
  - ユーザー数
  - アクセス回数
  - ユニークな IP の数
  - 発生時刻の範囲
  - プロジェクトパス
- 既知のリストを除いた上記の情報。例: ユーザーの「業務オフィス」由来でない IP アドレスの数。
- レポートおよび監査の目的で、Zendesk チケットタグ `customer_log_requests` を必ず追加してください。

### SIRT エスカレーションなしには提供できないもの

以下の情報は提供できません。

- リクエスト者が所有していないアカウントまたはプロジェクトに関する情報。
- リクエスト者本人に固有でない、[個人データ](/handbook/support/workflows/personal_data_access_account_deletion/)とみなされる情報。
- GitLab の機密情報やプロセスを開示する情報。

### SIRT エスカレーションを作成するタイミング

ユーザーが[個人データ](/handbook/support/workflows/personal_data_access_account_deletion/)を含む可能性のあるログデータを要求する場合、本人確認を行い、Issue タイプ「Customer Request」を使用して [SIRT ログアクセスリクエスト](/handbook/security/customer-requests/)を作成する必要があります。

### ここに記載されていない質問が来たらどうする?

Slack の #support_leadership にエスカレーションし、`@support-manager-oncall` に連絡してください。

### ログおよびその他の個人データの送信

**[アカウント所有権](/handbook/support/workflows/account_verification/)が確認されるまで、ログまたは個人データを共有してはいけません。**

[ログリクエスト](/handbook/security/customer-requests/)などのために Security Incident Response Team (SIRT) が引き出した[個人データ](/handbook/support/workflows/personal_data_access_account_deletion/)情報は、以下のガイドラインに沿って圧縮しパスワード保護した状態でリクエスト者に届ける必要があります。

- パスワードは、数字、小文字、大文字を含む 10文字以上のランダムな文字列にする必要があります。
- パスワード保護されたファイルは ZenDesk チケットに添付してください。
  - `zip -er [TicketNumber].zip filename` コマンドまたは他の暗号化ツールを使用してファイルを暗号化します。
  - 1Password を使用して暗号化用のランダムなセキュアパスワードを生成します。
  - パスワードは 1Password に `[ticket number].zip` として保存します。
  - [1Password の Share Items 機能](https://support.1password.com/share-items/)を使用して、顧客にパスワードを共有します。共有するパスワードアイテムに顧客のメールアドレスを追加します。
  - 共有期間を 7日間に設定します。
  - 共有されたパスワードは 7日間で期限切れになるため、今後アクセスが必要な場合はローカルに記録する必要があることを顧客に伝えます。
  - 共有パスワードアイテムへのリンクは、自分のメールアカウントから直接、顧客のメールアドレスに別途送信します。
- 顧客がファイルを正常に受信し開封したら、引き出したデータをコンピュータから、パスワードを 1Password から削除する必要があります。
ログファイルが大きすぎて ZenDesk のチケットに添付できない場合は、[GitLab サポートに大きなファイルを提供する](https://about.gitlab.com/support/providing-large-files/)ページを参照してください。

データ取得結果を社内（社内 Issue など）で共有する必要がある場合は、[Support Ticket Attachments フォルダ](https://drive.google.com/drive/folders/1RpCb_li2RTYsE8GnVFExCux3QpZ2i0TD)（社内）などの Google Drive にファイルをアップロードしてください。

### 例

提供できる応答のイメージをよりよく伝えるため、以下に例を示します。

#### 例 1: 特定のリポジトリにアクセスしたのは誰か

プロジェクトの可視性設定を誤って設定してしまった顧客が、社外の誰かが自社のプロジェクトにアクセスしたかどうかを知りたいと考えました。応答の修正された抜粋は以下のとおりです。

> 会社のメールドメインを持つユーザーを除いて、2人のユーザーが 2019-08-15 の 20:06 から 20:10 UTC の間にメインプロジェクトページを合計 4回閲覧しました。ただし、4回すべてのインスタンスが、貴社のオフィスとして提供された IP アドレスのいずれかから発信されたことを確認できます。

チケット: [129594](https://gitlab.zendesk.com/agent/tickets/129594)

#### 例 2: IP ブロック

あるユーザーから、チーム全体がブロックされていてその原因を知りたいという問い合わせがありました。問い合わせを行うユーザーが該当プロジェクトへのアクセス権を持っている場合は、具体的なパスを提供できます。

> 一時的なブロックを引き起こしたと思われる `401` を返したリクエストの大部分は `/project/path` に関係しているように見えます。

例チケット: [132652](https://gitlab.zendesk.com/agent/tickets/132652)

["Identifying the Cause of IP Blocks on GitLab.com"](/handbook/support/workflows/ip-blocks) も参照してください。

#### 例 3: 高負荷のため GitLab がアクションを要求する

GitLab は、本番チームが懸念を抱いていたプロジェクトのオーナーに連絡し、Support に連絡を取るよう依頼しました。ユーザーはリクエストがどこから発信されているかを知りたがっていました。

> ログには 3つの異なる IP が表示されており、そのうち 2つは CountryA、1つは CountryB を拠点としています（これらの位置情報は地理位置 Web 検索のみに基づいているため、正確でない場合があります）。また、すべて同じ User Agent を持っています。

例チケット: [130153](https://gitlab.zendesk.com/agent/tickets/130153)

#### 例 4: Enterprise ユーザーが誤ってパブリックリポジトリを作成し機密データをプッシュした

[組織内のユーザー](https://docs.gitlab.com/user/enterprise_user/#identifying-enterprise-users)によってリポジトリが誤って作成されパブリックのまま放置された場合、ネームスペースのオーナーがアクセスログを要求することがあります。適切にスコープを絞ったリクエストには、特定のユーザーとパスを特定する必要があります。

> ユーザー `username` が誤ってプロジェクト `testproject-name` を作成し、オープンのまま放置しました。当該プロジェクトを削除しましたが、パブリックだった間に誰かがプロジェクトにアクセスまたはクローンしたかどうかを確認したいです。

例チケット: [690251](https://gitlab.zendesk.com/agent/tickets/690251)
