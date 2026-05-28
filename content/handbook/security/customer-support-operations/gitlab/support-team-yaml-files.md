---
title: 'Support チーム YAML ファイル'
description: 'Support チーム YAML ファイルに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/gitlab/support-team-yaml-files/
upstream_sha: 78b430bc8e2a925f210024d512218ce1d8d42106
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドでは、Support チーム YAML ファイルについて説明します。これは、さまざまな Customer Support Operations の自動化や統合で使用される、チームメンバー情報を含む集中型のデータソースです。これらのファイルは、システム間で一貫したエージェントデータを実現し、チーム構造、スキル、スケジュール、アサインの情報源として機能します。

{{% alert title="Technical Details" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクトリポジトリ: [Support Team プロジェクト](https://gitlab.com/gitlab-support-readiness/support-team)

{{% /alert %}}

## Support チーム YAML ファイルについて

### Support チーム YAML ファイルとは

Support チーム YAML ファイルは、勤務スケジュール、スキル領域、システム ID（Zendesk、Slack、GitLab、PagerDuty）、地域アサイン、フォーカス配分などのチームメンバー情報を含む YAML ファイル群です。このデータは、複数の Customer Support Operations システムで使用されるチームメンバー情報の唯一の情報源（single source of truth）として機能します。

### Support チーム YAML ファイルの場所

Support チーム YAML ファイルは [Support Team プロジェクト](https://gitlab.com/gitlab-support-readiness/support-team) 内にあります。

### Support チーム YAML ファイルの使い方

さまざまなスクリプトやプロジェクトが [GitLab デプロイキー](https://docs.gitlab.com/user/project/deploy_keys/) を使ってリポジトリをクローンし、YAML ファイルをパースします。

ファイルの利用例:

- Zendesk のエージェントデータと設定の管理（[ソース](/handbook/security/customer-support-operations/zendesk/users/agents)）
- US Government のサポートエージェント一覧の決定（[ソース](/handbook/security/customer-support-operations/zendesk/tickets/round-robin)）
- Zendesk エージェントの Slack ユーザー ID へのマッピング（[ソース](/handbook/security/customer-support-operations/slack/#notify-oncall)）

## Support チーム YAML ファイルの変更

### 自分のファイルを変更する

{{% alert title="Note" color="primary" %}}

以下の属性は、Customer Support Operations チームが進める前に、マネージャーによるマージリクエストの承認が必要です。

- Title
- Working Hours
- Focuses
- Zendesk Groups（どちらのインスタンスでも）
- Display name / Alias の更新
- Round robin 設定（US Government のみ）

{{% /alert %}}

自分の Support チーム YAML ファイルを変更したい場合は、マージリクエストを作成してください。その後、Customer Support Operations チームがレビュー・承認・マージを行います。問題が発生した場合は、Customer Support Operations チームがマージリクエスト経由で通知します。

### 自分のレポートのファイルを変更する

自分が管理するメンバーの Support チーム YAML ファイルを変更したい場合は、マージリクエストを作成してください。その後、Customer Support Operations チームがレビュー・承認・マージを行います。問題が発生した場合は、Customer Support Operations チームがマージリクエスト経由で通知します。

### それ以外を変更する

Support チーム YAML ファイル内のそれ以外を変更したい場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手作業の介入が必要なため）。

## Support チーム YAML ファイルの構造

Support チーム YAML ファイルには多くの属性があります。以下に各属性（と内包する子属性）の詳細を示します。

### name

チームメンバーの氏名

### email

{{% alert title="Warning" color="warning" %}}

これは決してエイリアスであってはなりません

{{% /alert %}}

チームメンバーの正式な GitLab メールアドレス。

### title

チームメンバーの肩書き

### entity

チームメンバーが所属する GitLab エンティティ。利用可能なエンティティの一覧は次のとおりです。

- GitLab BV
- GitLab Canada Corp
- GitLab GmbH
- GitLab Inc
- GitLab IT BV
- GitLab Korea LTD
- GitLab PTY Ltd
- GitLab PTY Ltd NZ
- GitLab Singapore PTE. LTD
- GitLab UK Ltd

### working_hours

チームメンバーの勤務時間を表す文字列。安全のため、タイムゾーンを指定してください（例: 0800-1600 Central time、0000-0800 UTC）。

### reports_to

チームメンバーがレポートする相手の名前

### region

チームメンバーの地域。現在利用可能な地域は次のとおりです。

- AMER-W
- AMER-C
- AMER-E
- APAC
- EMEA

### start_date

チームメンバーが GitLab で働き始めた日付（ISO 形式）。

### calendly

チームメンバーの Calendly のリンク。常にメインページのリンクであるべきで、イベントのリンクではありません。

### languages

チームメンバーが知っている言語の配列

### pagerduty

PagerDuty 情報を含むハッシュ。次の単一の属性を含みます。

- `id`、これはチームメンバーの PagerDuty ユーザー ID

### focuses

チームメンバーのフォーカスを含む配列。各 focuses 配列は、次の属性を持つハッシュを含みます。

- `name`、これはフォーカスの名前
- `percentage`、これはフォーカスのパーセンテージ

すべてのパーセンテージは合計で 100 になる必要があります。

利用可能な現行フォーカスの一覧:

`Onboarding` - 自分のポジションへのオンボーディングに集中
`SaaS` - グローバル SaaS サポートチケットの対応に集中
`License and Renewals` - グローバル L&R サポートチケットの対応に集中
`Self-Managed` - グローバル Self-Managed サポートチケットの対応に集中
`Operations` - Customer Support Operations の責務に集中
`Management` - サポートリーダーシップの責務に集中
`US Federal` - US Federal サポートチケットの対応に集中
`ASE` - Assigned Support Engineer の業務に集中

#### ASE フォーカスに関する追加情報

フォーカスの名前が `ASE` の場合、ハッシュに追加の属性を加えることができます。

- `zendesk`、これは組織が存在するインスタンスを指定する
- `organizations`、これは特定の組織に関する情報の配列であり、次の属性を持つ
  - `id`、これは組織の Zendesk ID
  - `percentage`、これはその組織に費やす ASE 時間のパーセンテージ

例えば、Bob が時間の 50% を Global Zendesk インスタンスで ASE として過ごし、2 つの組織（123 と 456）を均等に管理している場合、彼は ASE フォーカスオブジェクトを次のように記述します。

```yaml
focuses:
- name: 'Self-managed'
  percentage: 50
- name: 'ASE'
  percentage: 50
  zendesk: global
  organizations:
  - id: 123
    percentage: 50
  - id: 456
    percentage: 50
```

これは、Bob が時間の 50% を Self-Managed の業務に費やし、50% を ASE の業務に費やすことを意味します。そして ASE 業務のうち、50% は組織 123 のため、50% は組織 456 のためです。

別の例として、Bob が時間の 60% を US Government で ASE として過ごし、2 つの組織（123 と 456）を異なる比率で管理している場合、彼は ASE フォーカスオブジェクトを次のように記述します。

```yaml
focuses:
- name: 'Self-managed'
  percentage: 40
- name: 'ASE'
  percentage: 60
  zendesk: us-federal
  organizations:
  - id: 123
    percentage: 25
  - id: 456
    percentage: 75
```

これは、Bob が時間の 40% を Self-Managed の業務に費やし、60% を ASE の業務に費やすことを意味します。そして ASE 業務のうち、25% は組織 123 のため、75% は組織 456 のためです。

### zendesk

Zendesk 情報を含むハッシュ。属性は次のとおりです。

- `main`、これは Zendesk Global に関する情報を含むハッシュ（注: ドキュメントでは「Zendesk Global」と呼ばれていますが、YAML キーは `main` です）
- `us-federal`、これは Zendesk US Government に関する情報を含むハッシュ（注: ドキュメントでは「Zendesk US Government」と呼ばれていますが、YAML キーは `us-federal` です）

これらの各属性には、さらに次の子属性があります。

- `id`、これはチームメンバーの Zendesk ユーザー ID
- `groups`、これはチームメンバーの Zendesk ユーザーが属するグループ
- `role`、これはチームメンバーの Zendesk ユーザーが持つロール
- `show_in_signature`、これは次の属性を含むハッシュ
  - `gitlab_handle`、これはエージェント同期に対し、署名に GitLab.com のハンドルを含む行を追加するよう指示する
- `alias`、これは Zendesk で使用する表示名。空の場合、デフォルトで氏名全体が使用される
- `salutations`、これはチームメンバーの Zendesk ユーザーの署名で使用する敬辞の配列

#### US Government のラウンドロビンに関する追加情報

`us-federal` 属性には追加の属性があります。

- `round_robin`、これは次の属性を含むハッシュ
  - `active`、これはラウンドロビンに参加するかどうかを決定する
  - `modifier`、これは合計ワークロード重みを計算するときに掛ける乗数
    - この値が 0 の場合、ラウンドロビンは 1 を使用する

### gitlab

GitLab.com 情報を含むハッシュ。属性は次のとおりです。

- `id`、これはチームメンバーの GitLab.com ユーザー ID
- `username`、これはチームメンバーの GitLab.com ユーザー名

### slack

Slack 情報を含むハッシュ。属性は次のとおりです。

- `id`、これはチームメンバーの Slack ユーザー ID
- `username`、これはチームメンバーの Slack ハンドル

### modules

チームメンバーが完了した学習モジュールの配列。

### knowledge_areas

チームメンバーが知識を持つ領域の配列。

各項目はハッシュであり、チームメンバーが認識している知識領域に関する情報と、対応するスキルレベルを含みます。

各項目の属性は次のとおりです。

- `name`、これは知識領域の名前
- `level`、これはチームメンバーのその領域における知識レベル
  1. Learning - まだ基本を学んでおり、チケットを担当する準備はできていない。
  1. Ready to work tickets - チケットに取り組む、またはチケットに取り組むことで学ぶ準備ができている。
  1. Looking to help others - 他の人のチケット対応や学習を支援したい。

### product_categories

GitLab 製品カテゴリに紐付くチームメンバーの能力の配列。

各項目はハッシュであり、次を含みます。

- `name`、これは製品カテゴリ名（例: "CI/CD"、"Security"、"Backup/Restore"）
- `level`、これは習熟レベル（`knowledge_areas` と同じ 1-3 の尺度を使用）

### pronouns

チームメンバーが希望する代名詞。

## 管理者タスク

### Support チーム YAML ファイルの変更

{{% alert title="Warning" color="warning" %}}

- これは対応するリクエスト Issue（機能リクエスト、管理業務、バグなど）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し、標準のプロセスを通してから作業を進めてください。

{{% /alert %}}

プロジェクトリポジトリで MR を作成する必要があります。実施する変更内容はリクエストそのものに依存します。

ピアによるレビューと承認の後、MR をマージできます（マージ後、変更が以降適用され始めます）。
