---
title: 'Support team YAML ファイル'
description: 'Support team YAML ファイルに関するドキュメント'
upstream_path: "/handbook/eta/css/gitlab/support-team-yaml-files/"
upstream_sha: "db1b52fb5e65d37509c3eaaaebfd50dd491e4b36"
translated_at: "2026-07-22T06:32:52+09:00"
translator: codex
stale: false
lastmod: "2026-07-21T11:29:58-05:00"
---

このガイドでは、さまざまな Customer Support Systems の自動化と統合で使用されるチームメンバー情報を含む、一元化されたデータソースである Support team YAML ファイルについて説明します。これらのファイルにより、システム間で一貫したエージェントデータを使用でき、チーム構造、スキル、スケジュール、割り当てに関する信頼できる唯一の情報源として機能します。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクトリポジトリ: [Support Team プロジェクト](https://gitlab.com/gitlab-support-readiness/support-team)

{{% /alert %}}

## Support team YAML ファイルについて

### Support team YAML ファイルとは

Support team YAML ファイルは、勤務スケジュール、スキル領域、システム ID（Zendesk、Slack、GitLab、PagerDuty）、地域の割り当て、注力分野の配分など、チームメンバーの情報を含む YAML ファイルのグループです。このデータは、複数の Customer Support Systems システムで使用されるチームメンバー情報の信頼できる唯一の情報源として機能します。

### Support team YAML ファイルの場所

Support team YAML ファイルは、[Support Team プロジェクト](https://gitlab.com/gitlab-support-readiness/support-team)内にあります。

### Support team YAML ファイルの使用方法

さまざまなスクリプトとプロジェクトが [GitLab Deploy Keys](https://docs.gitlab.com/user/project/deploy_keys/)を使用してリポジトリをクローンし、その後 YAML ファイルを解析します。

ファイルの使用例:

- Zendesk エージェントデータと設定の管理（[ソース](/handbook/eta/css/zendesk/users/agents)）
- US Government サポートエージェントのリストの決定（[ソース](/handbook/eta/css/zendesk/tickets/round-robin)）
- Zendesk エージェントと Slack ユーザー ID のマッピング（[ソース](/handbook/eta/css/slack/#notify-oncall)）

## Support team YAML ファイルの変更

### 自分のファイルを変更する

{{% alert title="注記" color="primary" %}}

以下の属性では、Customer Support Systems チームがマージリクエストを処理する前に、マネージャーによる承認が必要です:

- 役職
- 勤務時間
- 注力分野
- Zendesk グループ（いずれかのインスタンス）
- 表示名 / エイリアスの更新
- ラウンドロビン設定（US Government のみ）

{{% /alert %}}

自分の Support team YAML ファイルを変更する必要がある場合は、マージリクエストを作成します。その後、Customer Support Systems チームがマージリクエストをレビュー、承認、マージします。問題が発生した場合は、Customer Support Systems チームがマージリクエストを通じて通知します。

### 自分の直属者のファイルを変更する

管理している人の Support team YAML ファイルを変更する必要がある場合は、マージリクエストを作成します。その後、Customer Support Systems チームがマージリクエストをレビュー、承認、マージします。問題が発生した場合は、Customer Support Systems チームがマージリクエストを通じて通知します。

### その他を変更する

Support team YAML ファイル内のその他の項目を変更するには、[Feature Request issue](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動介入が必要になるためです）。

## Support team YAML ファイルの構成

Support team YAML ファイルには、多くの属性があります。以下では、各属性（およびそれぞれに含まれるサブ属性）の詳細を示します。

### name

チームメンバーの名前

### email

{{% alert title="警告" color="warning" %}}

これはエイリアスにしないでください

{{% /alert %}}

チームメンバーの公式 GitLab メールアドレス。

### title

チームメンバーの役職

### entity

チームメンバーが所属する GitLab エンティティ。利用可能なエンティティのリストは次のとおりです:

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

チームメンバーの勤務時間を表す文字列です。安全のため、タイムゾーンを指定してください（例: 0800-1600 Central time、または 0000-0800 UTC）。

### reports_to

チームメンバーの上長の名前

### region

チームメンバーの地域。現在利用可能な地域は次のとおりです:

- AMER-W
- AMER-C
- AMER-E
- APAC
- EMEA

### start_date

チームメンバーが GitLab に入社した日付（ISO 形式）。

### calendly

チームメンバーの Calendly へのリンク。イベントではなく、必ずメインページへのリンクにしてください。

### languages

チームメンバーが知っている言語の配列

### pagerduty

Pagerduty 情報を含むハッシュです。単一の属性が含まれます:

- `id`: チームメンバーの Pagerduty ユーザー ID

### focuses

チームメンバーの注力分野を含む配列です。各 focuses 配列には、次の属性を持つハッシュが含まれます:

- `name`: 注力分野の名前
- `percentage`: 注力分野の割合

すべての割合の合計は 100 になる必要があります。

現在利用可能な注力分野のリストは次のとおりです:

`Onboarding` - 役職へのオンボーディングに注力
`SaaS` - Global SaaS サポートチケットの対応に注力
`License and Renewals` - Global L&R サポートチケットの対応に注力
`Self-Managed` - Global Self-Managed サポートチケットの対応に注力
`Operations` - Customer Support Systems の責務に注力
`Management` - Support Leadership の責務に注力
`US Federal` - US Federal サポートチケットの対応に注力
`ASE` - Assigned Support Engineer の業務に注力

#### ASE の注力分野に関する追加情報

注力分野の名前が `ASE` の場合、ハッシュに追加属性を追加できます:

- `zendesk`: 組織が属するインスタンスを指定します
- `organizations`: 特定の組織に関する情報の配列です。次の属性を持ちます:
  - `id`: 組織の Zendesk ID
  - `percentage`: その組織に費やす ASE 時間の割合を指定します

たとえば、Bob が Global Zendesk インスタンスで ASE として時間の 50% を費やし、2 つの組織（123 と 456）を均等に管理している場合、次のように ASE の注力分野オブジェクトを入力します:

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

これは、Bob が時間の 50% を Self-Managed 業務に、50% を ASE 業務に費やすことを意味します。また、その ASE 業務のうち、50% は組織 123 に、50% は組織 456 に費やされます。

別の例として、Bob が US Government で ASE として時間の 60% を費やし、2 つの組織（123 と 456）を異なる割合で管理している場合、次のように ASE の注力分野オブジェクトを入力します:

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

これは、Bob が時間の 40% を Self-Managed 業務に、60% を ASE 業務に費やすことを意味します。また、その ASE 業務のうち、25% は組織 123 に、75% は組織 456 に費やされます。

### zendesk

Zendesk 情報を含むハッシュです。属性は次のとおりです:

- `main`: Zendesk Global に関する情報を含むハッシュです（ドキュメントでは「Zendesk Global」と呼んでいますが、YAML キーは `main` です）
- `us-federal`: Zendesk US Government に関する情報を含むハッシュです（ドキュメントでは「Zendesk US Government」と呼んでいますが、YAML キーは `us-federal` です）

これらの属性には、それぞれさらに子属性が含まれます:

- `id`: チームメンバーの Zendesk ユーザー ID
- `groups`: チームメンバーの Zendesk ユーザーが所属するグループ
- `role`: チームメンバーの Zendesk ユーザーが持つロール
- `show_in_signature`: 次の属性を含むハッシュです:
  - `gitlab_handle`: GitLab.com ハンドルを含む行を署名に追加するよう、エージェント同期に指示します
- `alias`: Zendesk で使用する表示名です。空欄の場合は、フルネームがデフォルトで使用されます
- `salutations`: チームメンバーの Zendesk ユーザーの署名で使用する挨拶の配列

#### US Government のラウンドロビンに関する追加情報

`us-federal` 属性には、追加属性があります:

- `round_robin`: 次の属性を含むハッシュです:
  - `active`: ラウンドロビンの一部であるかどうかを決定します
  - `modifier`: 合計ワークロードの重みを計算する際に乗算する修正係数です
    - この数値が 0 の場合、ラウンドロビンでは 1 を使用します

### gitlab

GitLab.com 情報を含むハッシュです。属性は次のとおりです:

- `id`: チームメンバーの GitLab.com ユーザー ID
- `username`: チームメンバーの GitLab.com ユーザー名

### slack

Slack 情報を含むハッシュです。属性は次のとおりです:

- `id`: チームメンバーの Slack ユーザー ID
- `username`: チームメンバーの Slack ハンドル

### modules

チームメンバーが完了した学習モジュールの配列。

### knowledge_areas

チームメンバーが知識を持つ領域の配列。

各項目は、チームメンバーが認識している知識と、それに対応するスキルレベルに関する情報を含むハッシュです。

各項目の属性は次のとおりです:

- `name`: ナレッジ領域の名前
- `level`: 領域に対するチームメンバーの知識レベル
  1. Learning - まだ基本を学んでいる段階で、チケットを受ける準備ができていません。
  1. Ready to work tickets - チケットに対応する準備ができている、またはチケットに対応しながら学ぶ準備ができています。
  1. Looking to help others - チケットまたは学習に関して他の人を支援したいと考えています。

### product_categories

GitLab 製品カテゴリに紐づくチームメンバーのコンピテンシーの配列。

各項目は、次を含むハッシュです:

- `name`: 製品カテゴリ名（例: "CI/CD"、"Security"、"Backup/Restore"）
- `level`: コンピテンシーレベル（`knowledge_areas` と同じ 1〜3 の尺度を使用）

### pronouns

チームメンバーが希望する代名詞。

## 管理者タスク

### Support team YAML ファイルを変更する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、最初に作成し、対応を開始する前に標準プロセスを通過させる必要があります。

{{% /alert %}}

プロジェクトリポジトリに MR を作成する必要があります。具体的に行う変更は、リクエスト自体によって異なります。

同僚が MR をレビューして承認した後、MR をマージできます（変更は以降使用され始めます）。
