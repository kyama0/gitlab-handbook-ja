---
title: "People Analytics サーベイサポート"
upstream_path: /handbook/people-group/people-ops-tech-analytics/people-analytics/survey-support/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T22:00:00Z"
translator: claude
stale: false
---

## 従業員サーベイ

GitLab では [Culture Amp](https://www.cultureamp.com/?_gl=1*1gyk1qk*_up*MQ..&gclid=CjwKCAiA1-6sBhAoEiwArqlGPjLjIVfOHjS43kmsU2lBnEd0ad2e5nbZ44fmHE7qVcySj2xWbEyFghoCZ-gQAvD_BwE) を使用して従業員の感情調査を実施しています。People Technology チームがツールへの管理アクセスを管理しており、アクセスを取得するための情報は[こちら](/handbook/people-group/#using-culture-amp)で確認できます。サーベイのサポートが必要な場合、このページでは People Analytics チームとのサーベイ設計、Culture Amp での作成、結果のレビューに関する最適な協働方法を説明します。

## People Analytics とサーベイ

People Analytics チームはステークホルダーが必要とするサーベイのサポートを提供できます。サーベイの目的はリクエスト元が決定し、People Analytics チームは Culture Amp での管理（サーベイの作成、設計、レポーティング）をサポートします。以下はサーベイをセットアップする際に決定する必要がある事項の概要です。

### 参加者

リクエスト元はサーベイを受け取る参加者のリストを提供する必要があります。参加者のファイルを用意することも、リストを作成するための基準を提供することもできます。Workday と Culture Amp の間に統合があるため（[ハンドブックページ](/handbook/people-group/)）、私たちの従業員サーベイの参加者として選択できるのは、Workday にいて情報が Culture Amp に送られている従業員のみです。現時点では、Workday にいない契約者は除外されます。

基準の例として `hire_date` があります。私たちはエンゲージメントサーベイを採用日でフィルターすることが多く、特定の日付以降に採用された従業員はサーベイから除外されます。

### 設問のレビュー

サーベイ作成プロセスの一環として、聞きたい設問を People Analytics チームに提供します。チームは[ベストプラクティス](https://ssw.umich.edu/sites/default/files/documents/events/peg/survey-design.pdf)に従って設計されていることを確認するために、設問の追加レビューを提供できます。

Culture Amp で利用できる設問のタイプはわずかです。以下は利用可能なタイプです：

- Rating Scale - これは従業員サーベイで参加者が回答する最も一般的なタイプの設問です。通常、与えられたステートメントに対する同意度合いを尋ねます。いくつかのスケールオプションから選択できます。
- Select - これは、可能な回答のリストから 1 つまたは複数の選択肢を選べる多肢選択式の設問です。
- Free Text - これは自由回答の設問で、回答者が必要なだけ多くまたは少なくフィードバックを与えられます。

### コンストラクトおよび／またはファクター

サーベイを作成する際、作成者は典型的には特定のコンストラクト、つまりファクターに関する感情を理解したいと考えます。これらのファクターは `Engagement` や `Happiness` のようなものになることが多いです。これらを測定するために、各トピックに関連するいくつかの設問が当該サーベイのために作成されます。これらのファクターは、各設問を個別にレビューするのではなく、回答者からの感情の集約スコアを得るために使用されます。Culture Amp には従業員サーベイの一般的なコンストラクトを測定するために設計されたサーベイ設問がありますが、リクエスト元自身のものを提供することもできます。People Analytics チームはこれらのコンストラクトの作成も支援できます。

### コミュニケーション言語

サーベイの通知について Culture Amp が提供する標準のコミュニケーションがあります。これらのコミュニケーションは変更可能で、変更する場合は、サーベイリクエスト元がリクエストとともに使用したい言語を提出するのがベストです。

言語について考える際、Culture Amp から送信されるコミュニケーションの種類（以下のリスト）に注意することが役に立ちます：

#### メールコミュニケーション

- Email Invitation - サーベイへのユニークなリンク付きの初回招待。
- Email Reminder 1 - サーベイを完了していない人への最初のリマインダー。
- Email Reminder 2 - サーベイを完了していない人への最終リマインダー。

#### Slack コミュニケーション

- Slack Invitation - メールと同様ですが、[Slack フォーマット](https://api.slack.com/reference/surfaces/formatting)を使用したはるかに短いメッセージ。
- Slack Reminder 1 - サーベイを完了していない人への Slack での最初のリマインダー。
- Slack Reminder 2 - サーベイを完了していない人への Slack での最終リマインダー。

### レポート

必要なレポートのリストもリクエスト時に特定できます。リクエスト時にわからない場合は、サーベイの開始後にレポートを生成して共有できます。

### レポーティングルール／機密性

サーベイの実施時には機密性が非常に重要です。すべての回答を機密として扱い、場合によっては完全に匿名にします。機密性の設定は（Culture Amp のコミュニケーションに従って）すべての参加者にサーベイの `Welcome Screen` で共有されます。各サーベイで利用可能な機密性の設定をよりよく理解するには、Culture Amp の[ドキュメント](https://support.cultureamp.com/en/articles/7048386-confidentiality-protections-in-reporting)を参照してください。

### デモグラフィック

デモグラフィックはサーベイのレポートをフィルターしたり、サーベイ回答リクエストを受け取るべき人の基準を構築するために使用されます。これらのデモグラフィック（`Division`, `Department` など）は Culture Amp との統合の一環として Workday から送信されます。リクエスト元が特定のデモグラフィックでレポートをフィルターしたいことを知っている場合、リクエストでこれを指定できます。Workday の統合に存在しないデモグラフィックでフィルターしたい場合は、People Analytics チームと協力してサーベイ自体を使用してこの情報を収集できます。Culture Amp はサーベイで[「self-reported」](https://support.cultureamp.com/en/articles/7048570-including-self-reporting-demographics-in-a-survey)デモグラフィックのリクエストを許可しています。

### ローンチプラン

Culture Amp のすべてのサーベイには、設定する必要のある `Launch Plan` が付属しています。`Launch Plan` には上記すべての項目の追加レビュー用のサマリーと、`Launch Schedule` があります。`Launch Schedule` はサーベイが開く日と閉じる日で構成されます。開く日は参加者にサーベイが送信される日でもあります。スケジュールする追加項目は、最初のリマインダーと最終リマインダーです。これらは指定日にサーベイを完了していない人にのみ送信され、事前に決定されたコミュニケーション言語でメールと Slack 経由で送信されます。リクエスト元は Issue リクエストで `Launch Plan` スケジュールを提供するよう求められます。

## レポートアクセスのリクエスト

リーダーが新しいロールに移ったり、People Business Partner の責任が変わって Culture Amp の特定のサーベイレポートへのアクセスを付与する必要がある場合があります。例：新しいディレクターが加入し、前任のリーダーの下での自分の組織のエンゲージメントサーベイの結果をレビューしたい場合。この例では、新ディレクター（またはその People Business Partner）は結果を含むレポートを閲覧するために[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/)を提出する必要があります。適切な承認が得られた後、Culture Amp への admin アクセスを持つ People Technology チームまたは People Analytics チームのチームメンバーがリクエストされたレポートを共有します。アクセスリクエストプロセスに従うことで、アクセスを付与する前に適切な承認を得ていることを保証します。
