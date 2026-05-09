---
title: "セキュリティとの関わり方"
upstream_path: /handbook/security/engaging-with-security/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
---

## 脆弱性レポートと HackerOne

GitLab はさまざまな経路で脆弱性レポートを受け取ります。たとえば次のようなものがあります。

- HackerOne バグバウンティプログラム
- Zendesk 経由で顧客から寄せられるレポートや問い合わせ
- 公開 Issue トラッカーで起票された Issue。セキュリティチームはすべての新規 Issue をレビューできるわけではないため、社内の全員が `~bug::vulnerability` ラベルを付与し、Issue で `@gitlab-com/gl-security/product-security/appsec` をメンションして特定・ラベル付けすることに依存しています。
- 自動セキュリティスキャンツールから報告された Issue

**あらゆる**報告された脆弱性に対しては、次のように対応します。

- レポートが検証されたら、できるだけ早く適切な Issue トラッカーに confidential な Issue を作成します。脆弱性が公開 Issue で報告された場合は、その Issue を confidential に変更します。チームの可用性によりトリアージが遅れる場合は、その遅延を伝達するべきです。
- Issue に `~security` および `~bug::vulnerability` ラベルを追加します。判明していれば適切なグループラベルも追加します。
- `~Weakness::CWE-XXX` ラベルを追加します。`XXX` は弱点に関連する [CWE](https://cwe.mitre.org/data/index.html) ID です。
- 重大度と影響について初期判断を行います。セキュリティレポートを頭ごなしに**却下**してはいけません。代わりに、報告者にフォローアップして明確化のための質問を投げかけてください。
- 次のステップについては、HackerOne レポートに関して以下に詳述されているプロセスを参照し、コミュニケーション頻度などの観点から、他の経路で報告された脆弱性についても同じガイドラインに従ってください。
- 脆弱性が既に公知になっていると考える理由がある場合（たとえば元のレポートが公開 Issue で行われ、後で confidential になった場合）でも、[セキュリティエンジニアプロセス](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md)に従って、または非公開な手段で、パッチ・ブログ記事・メールテンプレートなどを準備することを忘れないでください。

### トリアージローテーション

トリアージローテーションプロセスについては、[専用ページ](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/triage-rotation/)を参照してください。

### HackerOne プロセス

HackerOne プロセスについては、[専用ページ](/handbook/security/product-security/psirt/runbooks/hackerone-process/)を参照してください。

### セキュリティダッシュボードレビュー

ダッシュボードレビュープロセスについては、[専用ページ](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/security-dashboard-review/)を参照してください。

### CVE ID

私たちは CVE ID を使って、自社製品の脆弱性を一意に識別し公的に定義します。すべてのセキュリティ脆弱性はパッチリリースから 30 日後に公開開示するため、自己マネージド版に影響する修正対象の脆弱性ごとに CVE ID を取得する必要があります。早く取得するほど良く、修正の準備中または準備直後に申請するべきです。

現在、私たちは [CVE プロジェクト](https://about.gitlab.com/security/cve/)経由で CVE を申請しています。なお、私たちのセキュリティリリースの一部には、関連する [CWE](https://cwe.mitre.org/) や脆弱性を持たない*セキュリティ関連の*強化が含まれることに注意してください。これらの個別 Issue は関連する脆弱性が存在しないため、CVE 取得は必須ではありません。

### リリース当日

セキュリティリリース当日には、いくつかのことが順番に行われます。

- 新しい GitLab パッケージが公開されます。
- すべてのセキュリティパッチが公開リポジトリにプッシュされます。
- GitLab ブログのリリース投稿、セキュリティアラートメール、Twitter で一般に通知されます。

その後、GitLab Issue はクローズされ、30 日後にサニタイズされて公開されます。レポートが HackerOne 経由で受け取られた場合は、[HackerOne プロセス](/handbook/security/product-security/psirt/runbooks/hackerone-process/#closing-out--disclosing-issues)に従ってください。

### セキュリティ Issue の開示プロセス

GitLab では、[可能な限り透明であること](/handbook/values/#transparency)を重視しており、[コストがかかるときであっても](/handbook/values/#transparency-is-most-valuable-if-you-continue-to-do-it-when-there-are-costs)透明性を保ちます。その一環として、セキュリティ脆弱性に関する confidential な GitLab Issue を、パッチ後 30 日で公開しています。プロセスは以下のとおりです。

1. `~keep confidential` タグの有無を確認します。タグが付いている場合
   1. このタグが現在も適切で、私たちの[透明性](/handbook/values/#transparency)の価値観に沿っているか判断します
   1. 必要に応じて Issue 参加者と議論を開始します
1. Issue に `~keep confidential` がない場合は、説明文とコメントから機密情報を削除します。たとえば次のものです。
   1. 研究者のアカウント情報を表示する PoC 動画やスクリーンショット
   1. トークン、アクセスキー、その他のシークレット
   1. [データ分類標準](/handbook/security/policies_and_standards/data-classification-standard/)および [SAFE フレームワーク](/handbook/legal/safe-framework/)で開示しないとされている情報
1. 個人データの漏洩に関する Issue は、製品に関するセキュリティ Issue ではないため開示しません。何らかの理由で開示する必要がある場合は、開示前に Legal および Corporate Comms チームに相談してください。
1. すべての Issue 説明の変更を特定し、「以前のバージョンと比較」をクリックして展開し、ゴミ箱アイコンをクリックして「説明履歴を削除」してください。
1. 任意で、Issue 参加者に Issue を公開する旨を通知するためにメンションします。
1. 任意で、CVSS について説明するコメントを追加します。
1. Issue の Confidentiality を編集し、Public に設定します。
1. `~publication-pending` ラベルが存在する場合は削除します。

このプロセスを促進するため、[GitLab Security Bot](https://gitlab.com/gitlab-com/gl-security/engineering-and-research/automation-team/appsec-escalator) は `~keep confidential` ラベルが付いていない confidential Issue について、Issue クローズから 30 日後にコメントします。

### 妨害的な研究者活動への対応

サードパーティ依存関係、ホステッドサービス、静的な `about.gitlab.com` サイトの多くは明示的にスコープ外として記載されているにもかかわらず、研究者から狙われることがあります。これにより GitLab の通常運用に支障が出ることがあります。これらのケースで、活動に関連付けられる有効なメールアドレスがあれば、Zendesk のような公式コミュニケーションチャネルを使い、研究者に対して以下のような警告を送るべきです。

```text
Dear Security Researcher,

The system that you are accessing is currently out-of-scope for our bounty
program or has resulted in activity that is disruptive to normal GitLab
operations. Reports resulting from this activity may be disqualified from
receiving a paid bounty. Continued access to this system causing disruption to
GitLab operations, as described in policy under "Rules of Engagement,
Testing, and Proof-of-concepts", may result in additional restrictions on
participation in our program:

  Activity that is disruptive to GitLab operations will result in account bans and disqualification of the report.

Further details and some examples are available in the full policy available at:

https://hackerone.com/gitlab


Best Regards,

Security Department | GitLab
https://handbook.gitlab.com/handbook/security/
```

## 新しいセキュリティ Issue の作成

新しいセキュリティ脆弱性を報告するには、[Vulnerability Disclosure Issue テンプレート](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Vulnerability%20Disclosure)を使うか、私たちの [HackerOne バグバウンティプログラム](https://hackerone.com/gitlab)を使ってください。なお、賞金支給の対象となる脆弱性については、HackerOne プラットフォーム経由でのみ支給可能であることに注意してください。

`GitLab.com` で新しいセキュリティ Issue を作成するときは、次のガイドラインに従ってください。

- 潜在的な脆弱性かどうか確信が持てない場合は、新規 Issue を `confidential` として作成してください。本来公開すべきだった Issue を後から公開することは、本来 confidential であるべきだった Issue を後から修復するよりも簡単です。プロジェクトの Issue テンプレートに `/confidential` クイックアクションの追加を検討してください。
- 最低限 ``~security`` ラベルを付けてください。脆弱性（またはその可能性があると思われるもの）を報告する場合は、Issue 作成時に [Vulnerability Disclosure](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Vulnerability%20Disclosure) テンプレートを使ってください。それ以外の場合はここに書かれた手順（security ラベル付き）に従ってください。
- 当てはまるとわかっている追加ラベルを付けてください。追加ラベルはセキュリティチームや他のエンジニアリングメンバーが追加しますが、トリアージプロセスを助けます。
  - [`~"type::bug"`、`~"type::maintenance"`、または適切な場合は `~"type::feature"`](product-security/security-platforms-architecture/application-security/vulnerability-management/#vulnerability-vs-feature-vs-bug)
  - チームまたは DevOps ライフサイクルラベル
  - Issue が顧客レポートの結果である場合は `~customer`
  - Issue が GitLab 運用に影響を与える場合は、チームメンバーが `~internal customer` を追加するべきです。
  - Issue が GitLab が必要とする依存関係の新バージョンへの更新に関連する場合は `~dependency update`
  - Issue が機能フラグの背後にある機能のものである場合は `~featureflag::` スコープ付きラベル
- 一部の Issue には `~keep confidential` を割り当てるべきです。これらの Issue には次のものが含まれます。
  - プライベートリポジトリのコンテンツのような顧客固有データを含む Issue は `~keep confidential` を割り当てるべきです。可能であれば、GitLab チームメンバーのみがアクセスできるリソース（たとえば元の ZenDesk チケット）にリンクすることでこれを回避してください。リンクには明確化のため `(GitLab internal)` というラベルを付けてください。
  - より広範な取り組みに関連する情報や、より大きな問題を解決する情報を含むが、まだ開示できない Issue

ときには、Issue を報告したユーザーのプライベートプロジェクトのコンテンツのような、confidential のままにしておくべきデータが Issue に含まれてしまうことがあります。必要であれば、リリース前の公開開示に適した、より一般的な議論と例を含むサニタイズ済み Issue を作成する必要があるかもしれません。

PSIRT によるレビューを受けるには、`@gitlab-com/gl-security/product-security/appsec/psirt-group` をメンションしてください。

より*緊急の*対応が必要な場合は、[セキュリティオンコールへのエンゲージメント](/handbook/security/security-operations/sirt/engaging-security-on-call/)を参照してください。

### `~security` Issue の重大度と優先度ラベル

重大度と優先度ラベルは、Issue が[脆弱性であると判断された](product-security/security-platforms-architecture/application-security/vulnerability-management/#vulnerability-vs-feature-vs-bug)場合に限り、トリアージ時にアプリケーションセキュリティエンジニアによって設定されます。
そのような Issue を識別するため、エンジニアは `~bug::vulnerability` ラベルを追加します。
重大度ラベルは、[GitLab CVSS 計算機](https://gitlab-com.gitlab.io/gl-security/product-security/appsec/cvss-calculator/)を使った CVSS スコアによって決定されます。
他のチームメンバーが、選ばれた `~severity` / `~priority` ラベルを再考する必要があると感じた場合、関連する Issue で議論を開始することが推奨されます。

`~bug::vulnerability` ラベルがあると、標準の[重大度ラベル](/handbook/product-development/how-we-work/issue-triage/#severity)（`~severity::1`, `~severity::2`, `~severity::3`, `~severity::4`）が変更されます。
これは下記の確率や、その他の緩和または悪化要因も追加で考慮するからです。
`~security` Issue への対応の優先度も影響に基づいて決まるため、ほとんどの場合、セキュリティチームが割り当てる優先度ラベルは重大度ラベルと一致します。
例外は Issue の説明やコメントで明記する必要があります。

`~severity/~priority` ラベルを修復時間に紐付ける目的は、責任ある開示の業界標準的なタイムラインを一貫して満たすか上回るために、GitLab のセキュリティ Issue への対応時間を測定し改善することです。修復までの平均時間 (MTTR) は外部
メトリクスであり、ユーザーが GitLab がユーザーや顧客を保護することへのコミットメントの指標として評価する場合があります。これは、セキュリティ研究者がセキュリティチームと直接または[HackerOne バグバウンティプログラム](/handbook/security/product-security/psirt/runbooks/hackerone-process/)を通じて関わるかを選択する際に使う重要な測定値でもあります。

脆弱性は特定のタイムラインに従って緩和・修復されなければなりません。
タイムラインは[脆弱性管理ハンドブック](/handbook/security/product-security/vulnerability-management/sla/)（[管理対象ドキュメント](controlled-document-procedure/)）で指定されています。

Issue をより深く理解した結果、重大度が変わったと判断した場合は、Issue が起票された日からの修復までの時間を再計算します。その日付が過去である場合、Issue は次のセキュリティリリース以前に修復される必要があります。

### `~security` Issue の期限

`~bug::vulnerability` ラベルが付き、`~severity::3` 以上の重大度の `~security` Issue については、セキュリティエンジニアが `Due date` を割り当てます。
これは修正がリリース可能になるべき目標日です。
この期限は、上記の `Time to remediate` 時間と、毎月 28 日の月例セキュリティリリースを考慮するべきです。たとえば、今日が 10 月 1 日で、新しい `severity::2` の `~security` Issue が起票されたとします。これは[30 日以内](/handbook/security/product-security/vulnerability-management/sla/)のセキュリティリリースで対応されなければならず、その日付は 10 月 31 日です。したがって、10 月 28 日のセキュリティリリースに含める必要があります。
さらに、[セキュリティリリースプロセス締切](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/process.md#release-deadlines)では、修正に関連するすべてのマージリクエストはセキュリティリリースの期限の 48 時間前、つまり 10 月 26 日までに準備完了している必要があるとしています。したがって、この例での期限は 10 月 26 日でなければなりません。

なお、インフラストラクチャ変更のように、製品リリースに含める必要がない `~security` Issue もあります。その場合、期限は月例セキュリティリリース日を考慮する必要はありません。

ときには、緊急の問題に対応するため、セキュリティチームが月例セキュリティリリース日を前倒しまたは延期する必要があり、それに伴ってこのような Issue の期限を変更しなければならないことがあります。

## `~security` Issue のスケジュール

**プロダクトマネージャー**および**エンジニアリングマネージャー**は、`~security` Issue をスケジュールするとき、推奨ガイダンスに従うべきです。

| チームに ___ が割り当てられたとき | 期待される対応 |
| ------ | ------ |
|     S1   |   マイルストーンを中断し、~"bug::vulnerability" および ~"FedRAMP::Vulnerability" セキュリティ Issue に**直ちに**取り組む     |
|    S2    |  マイルストーンを中断し、~"bug::vulnerability" および ~"FedRAMP::Vulnerability" セキュリティ Issue に**直ちに**取り組む     |
|      S3  |   ~"bug::vulnerability" および ~"FedRAMP::Vulnerability" セキュリティ Issue に次のマイルストーンの開始時から取り組み始める       |
|       S4 |    期限の少なくとも 2 マイルストーン前から ~"bug::vulnerability" および ~"FedRAMP::Vulnerability" セキュリティ Issue に取り組み始める    |
| ブロックされている S1, S2, S3 | ブロッキング Issue を所有するチームは、現在のマイルストーンを中断し**直ちに**ブロッキング Issue に取り組むべき |

### `~security` Issue における再現性

Issue 説明には `How to reproduce` セクションを設けて、明確な再現詳細が説明に含まれるようにしてください。必要に応じて追加の詳細を加えます。

- 使用した環境:
  - Docker Omnibus バージョン x.y.z
  - gitlab.com
  - staging.gitlab.com
- プロジェクト、ユーザー、有効化された機能、使用ファイルなどの使用条件
- Issue を再現するためのステップバイステップの計画
- Issue をトリガーする URL、できればより良いのは `curl` コマンド

### 脆弱性ではない `~security` Issue

`security` ラベルが付いているが `~type::bug + ~bug::vulnerability` ラベルが付いていない Issue は、脆弱性とは**みなされず**、セキュリティ強化、深層防御メカニズム、その他のセキュリティ隣接バグです。たとえば、`~"type::feature"` または `~"type::maintenance"` ラベル付きの Issue です。これは、これらの Issue については[プロダクト](/handbook/product/)または該当コンポーネントを所有する適切なチームがトリアージするので、セキュリティチームは `~severity` および `~priority` ラベルを設定したり、脆弱性トリアージプロセスに従ったりしないという意味です。

セキュリティ機能 Issue の実装は、[透明性](/handbook/values/#transparency)の価値観に沿って公開で行うべきです。つまり、[セキュリティ開発者ワークフロー](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md)には従いません。

逆に、`security`、`~type::bug`、`severity::4` ラベルが付いた Issue は `Low` 重大度の脆弱性とみなされ、標準の脆弱性トリアージプロセスに従って処理されることに注意してください。

### ~"security request"

セキュリティチームは、追加の顧客要件、コンプライアンス、または GitLab.com サポートのための運用上のニーズを満たすため、機能がセキュリティチームから要求されているという指標として、Issue に `~internal customer` および [~`security request`](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name%5B%5D=security%20request) を適用することがあります。

### ~"securitybot::ignore"

`~security` Issue の中には、脆弱性でもセキュリティ強化でもないが `~security` ラベルが付いているものがあります。たとえば、ログインメカニズムの非セキュリティ `~"type::bug"` などです。そのような Issue は security-sensitive であるため `~security` ラベルが付きますが、脆弱性でもなければ `~"type::feature"` でもありません。これらの場合、上記の「修復までの時間」要件の対象とならないため、ボットが通常の脆弱性ワークフローや通知をトリガーしないように `~"securitybot::ignore"` ラベルが適用されます。

### Security から Engineering への引き継ぎ

セキュリティエンジニアは次を行わなければなりません。

- [グループラベル](https://gitlab.com/gitlab-org/gitlab-foss/blob/master/doc/development/contributing/issue_workflow.md#group-labels)を追加する（`~group::editor`、`~group::package` など）
- [ステージラベル](https://gitlab.com/gitlab-org/gitlab-foss/blob/master/doc/development/contributing/issue_workflow.md#stage-labels)を追加する
- `~merge request` などの追加ラベル
- スケジューリングのためにプロダクトマネージャーをメンションする（例: `@pm for scheduling`）
- 異なる重大度レベルについて、エンジニアリングチームリードをメンションし、必要に応じて以下に記載のとおりフォローアップする

プロダクトマネージャーは期限が割り当てられた `Milestone` を割り当てて、いつエンジニアに作業が割り当てられるかを伝達します。Issue の `Due date` フィールド、重大度ラベル、優先度ラベルは PM によって変更されるべきではありません。これらのラベルは `~security` Issue の正確なメトリクスを提供することを意図しており、セキュリティチームによって割り当てられるからです。技術的または組織的な[最優先事項](/handbook/engineering/workflow/#security-is-everyones-responsibility)としての `~security` Issue への対応を阻むあらゆるブロッカーは、適切な管理階層にエスカレーションされるべきです。

**Issue は、チームリードがリリースマイルストーンに追加し、*かつ*開発者に割り当てない限り、特定のリリースに対してスケジュールされないことに注意してください。**

`severity::1` または `severity::2` 評価の Issue は、関連するエンジニアリングチームリードとプロダクトマネージャーに直ちに注意を向けさせる必要があり、Issue でメンションし、応答がない場合はチャットやメールでエスカレーションするべきです。

`severity::1` 評価の Issue は他のすべての Issue より優先され、緊急のセキュリティリリースの対象として検討されるべきです。

`severity::2` 評価の Issue は、次のスケジュールされたセキュリティリリース向けにスケジュールされるべきです。これは重大度や他のパッチ待ち Issue に応じて、数日先または数週間先になる可能性があります。`severity::2` 評価は、次のセキュリティリリースより前にパッチが準備できることを保証するものではありませんが、それが目標であるべきです。

`severity::3` 評価の Issue は緊急性の感覚が低く、次のマイナーバージョンが目標として割り当てられます。通常 `severity::3` と評価されるが、報告者が開示までの猶予期間を 30 日（またはそれ以下）に設定したような低リスクまたは低影響の脆弱性が報告された場合、開示前にパッチが当てられるよう Issue がエスカレーションされる可能性があります。

### 関連のないコード変更により無関係になったセキュリティ Issue

`~security` Issue が初期トリアージ後、パッチが実装される前に無関係になることがありえます。たとえば、脆弱な機能が削除されたり大幅に変更されて、脆弱性が存在しなくなった場合です。

エンジニアが Issue が無関係になったことに気づいた場合、Issue をトリアージした人にメンションして、脆弱性がもう存在しないことを確認してもらうべきです。<b>[メンテナンスポリシー](https://docs.gitlab.com/ee/policy/maintenance.html#security-releases)に従って、以前のリリースにパッチをバックポートする必要がある場合があることに注意してください</b>。
バックポートが不要な場合は、Issue をクローズできます。

### バックポート数を減らす

アプリケーションセキュリティエンジニアの承認があれば、セキュリティ Issue は現在の安定版リリースのみで修正し、バックポートを行わないことができます。[GitLab メンテナンスポリシー](https://docs.gitlab.com/ee/policy/maintenance.html#security-releases)に従い、Issue に `~reduced backports` ラベルを適用してください。
