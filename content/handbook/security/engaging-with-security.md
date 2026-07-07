---
title: "セキュリティとの関わり方"
upstream_path: /handbook/security/engaging-with-security/
upstream_sha: e48b48a5e8c7635a5993b5836c0ca253812429d2
translated_at: "2026-07-06T07:07:53+09:00"
translator: codex
stale: false
lastmod: "2026-06-29T11:36:24-06:00"
---

## 脆弱性レポートと HackerOne

GitLab は、以下を含むさまざまな経路で脆弱性レポートを受け取ります。

- HackerOne バグバウンティプログラム
- Zendesk 経由で顧客から寄せられるレポートや質問。
- 公開 Issue トラッカーで起票された Issue。セキュリティチームはすべての新規 Issue をレビューできるわけではないため、社内の全員が Issue を `~bug::vulnerability` として特定しラベル付けし、Issue で `@gitlab-com/gl-security/product-security/appsec` を @ メンションすることに依存しています。
- 自動セキュリティスキャンツールから報告された Issue

**あらゆる**報告された脆弱性については、次のように対応します。

- レポートが検証されたら、できるだけ早く適切な Issue トラッカーに confidential な Issue を作成します。脆弱性が公開 Issue 経由で報告された場合は、その Issue を confidential にします。チームの可用性によってトリアージが遅れる場合は、その遅延を伝えるべきです。
- Issue に `~security` および `~bug::vulnerability` ラベルを追加します。判明していれば、適切なグループラベルも追加します。
- `~Weakness::CWE-XXX` ラベルを追加します。`XXX` は、その弱点に関連する [CWE](https://cwe.mitre.org/data/index.html) ID です。
- 重大度と影響について初期判断を行います。セキュリティレポートを頭ごなしに**却下**してはいけません。代わりに、報告者にフォローアップし、明確化のための質問をしてください。
- 次のステップについては、HackerOne レポートに関して以下に詳述されているプロセスを参照し、他の経路で報告された脆弱性についても、コミュニケーション頻度などの点で同じガイドラインに従ってください。
- 元のレポートが公開 Issue で行われ、後で confidential になった場合など、脆弱性がすでに公知になっていると考える理由がある場合でも、[セキュリティエンジニアプロセス](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md)に従って、またはその他の非公開な方法で、パッチ、ブログ記事、メールテンプレートなどを準備することを忘れないでください。

### トリアージローテーション

トリアージローテーションプロセスについては、[専用ページ](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/triage-rotation/)を参照してください。

### HackerOne プロセス

HackerOne プロセスについては、[専用ページ](/handbook/security/product-security/psirt/runbooks/hackerone-process/)を参照してください。

### セキュリティダッシュボードレビュー

ダッシュボードレビュープロセスについては、[専用ページ](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/security-dashboard-review/)を参照してください。

### CVE ID

私たちは CVE ID を使って、自社製品の脆弱性を一意に識別し、公的に定義します。すべてのセキュリティ脆弱性をパッチリリースの 90 日後に公開開示するため、セルフマネージド版に影響し修正対象となる脆弱性ごとに CVE ID を取得する必要があります。早く取得するほど良く、修正の準備中または準備直後に申請するべきです。

現在、私たちは [CVE プロジェクト](https://about.gitlab.com/security/cve/)経由で CVE を申請しています。なお、私たちのセキュリティリリースの一部には、関連する [CWE](https://cwe.mitre.org/) や脆弱性を持たない*セキュリティ関連の*強化が含まれる場合があることに注意してください。これらの個別 Issue は関連する脆弱性が存在しないため、CVE を取得する必要はありません。

### リリース当日

セキュリティリリース当日には、いくつかのことが順番に行われます。

- 新しい GitLab パッケージが公開されます。
- すべてのセキュリティパッチが公開リポジトリにプッシュされます。
- GitLab ブログのリリース投稿、セキュリティアラートメール、Twitter を通じて一般に通知されます。

その後、GitLab Issue はクローズされ、90 日後にサニタイズされて公開されます。レポートが HackerOne 経由で受け取られた場合は、[HackerOne プロセス](/handbook/security/product-security/psirt/runbooks/hackerone-process/#closing-out--disclosing-issues)に従ってください。

### セキュリティ Issue の開示プロセス

GitLab では、[可能な限り透明であること](/handbook/values/#transparency)を重視しており、[コストがかかるときであっても](/handbook/values/#transparency-is-most-valuable-if-you-continue-to-do-it-when-there-are-costs)透明性を保ちます。その一環として、セキュリティ脆弱性に関する confidential な GitLab Issue を、パッチ後 90 日で公開しています。プロセスは次のとおりです。

1. `~keep confidential` タグの有無を確認します。タグが存在する場合
   1. このタグが現在も適切で、私たちの[透明性](/handbook/values/#transparency)の価値観に沿っているか判断します
   1. 必要に応じて Issue 参加者と議論を開始します
1. Issue に `~keep confidential` がない場合は、説明文とコメントから機密情報を削除します。たとえば次のものです。
   1. 研究者のアカウント情報を表示する PoC 動画やスクリーンショット
   1. トークン、アクセスキー、その他のシークレット
   1. [データ分類標準](/handbook/security/policies_and_standards/data-classification-standard/)および [SAFE フレームワーク](/handbook/legal/safe-framework/)で開示しないとされている情報
1. 個人データの漏えいに関連する Issue は、製品に関するセキュリティ Issue ではないため開示しません。何らかの理由で開示する必要がある場合は、開示前に Legal および Corporate Comms チームに相談してください。
1. すべての Issue 説明の変更を特定し、「以前のバージョンと比較」をクリックして展開し、ゴミ箱アイコンをクリックして「説明履歴を削除」を実行します。
1. 任意で、Issue 参加者に Issue を公開する意図を通知するためにメンションします。
1. 任意で、CVSS について説明するコメントを追加します。
1. Issue の Confidentiality を編集し、Public に設定します。
1. `~publication-pending` ラベルが存在する場合は削除します。

このプロセスを促進するため、[GitLab Security Bot](https://gitlab.com/gitlab-com/gl-security/engineering-and-research/automation-team/appsec-escalator) は `~keep confidential` ラベルが付いていない confidential Issue について、Issue クローズから 90 日後にコメントします。

### 妨害的な研究者活動への対応

サードパーティ依存関係、ホステッドサービス、静的な `about.gitlab.com` サイトの多くは明示的にスコープ外として記載されているにもかかわらず、研究者から狙われることがあります。これにより GitLab の通常運用に支障が出ます。これらのケースで、活動に関連付けられる有効なメールアドレスがあれば、ZenDesk などの公式コミュニケーションチャネルを使い、以下のような警告を研究者に送るべきです。

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

新しいセキュリティ脆弱性を報告するには、[Vulnerability Disclosure Issue テンプレート](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Vulnerability%20Disclosure)を使用するか、私たちの [HackerOne バグバウンティプログラム](https://hackerone.com/gitlab)を使用してください。なお、私たちが報奨金を支払えるのは、HackerOne プラットフォーム経由の適格な脆弱性に限られます。

`GitLab.com` で新しいセキュリティ Issue を作成する際は、次のガイドラインに従ってください。

- Issue が潜在的な脆弱性かどうか確信がない場合は、新しい Issue を `confidential` として作成します。本来公開であるべき Issue を公開にする方が、本来 confidential であるべき Issue を後から修復するより容易です。プロジェクトの Issue テンプレートに `/confidential` クイックアクションを追加することを検討してください。
- 最低限、常に ``~security`` としてラベル付けします。脆弱性（または脆弱性である可能性があると疑っているもの）を報告する場合は、Issue 作成時に [Vulnerability Disclosure](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Vulnerability%20Disclosure) テンプレートを使用してください。それ以外の場合は、ここに記載された手順（security ラベル付き）に従ってください。
- 該当すると分かっている追加ラベルをすべて追加します。追加ラベルはセキュリティチームや他の Engineering 担当者によって適用されますが、トリアージプロセスの助けになります。
  - [適切な場合は `~"type::bug"`、`~"type::maintenance"`、または `~"type::feature"`](product-security/security-platforms-architecture/application-security/vulnerability-management/#vulnerability-vs-feature-vs-bug)
  - チームまたは DevOps ライフサイクルのラベル
  - 顧客レポートの結果として発生した Issue の場合は `~customer`
  - Issue が GitLab の運用に影響する場合、チームメンバーは `~internal customer` を追加するべきです。
  - Issue が GitLab に必要な依存関係を新しいバージョンへ更新することに関連する場合は `~dependency update`
  - Issue がフィーチャーフラグの背後にある機能に関するものの場合は、`~featureflag::` スコープ付きラベル
- 一部の Issue には `~keep confidential` を割り当てるべきです。これらの Issue には以下が含まれます。
  - プライベートリポジトリの内容など、顧客固有のデータを含む Issue には `~keep confidential` を割り当てるべきです。可能であれば、たとえば元の ZenDesk チケットのように、GitLab チームメンバーのみがアクセスできるリソースへリンクすることで、これを避けてください。分かりやすくするため、リンクには `(GitLab internal)` とラベル付けしてください。
  - 情報を含む Issue、またはより大きな問題を修正する別の広範な取り組みに関連するものの、まだ開示できない Issue

報告したユーザーのプライベートプロジェクト内容など、confidential のままにするべきデータが Issue に含まれてしまうことがあります。必要に応じて、リリース前に、より一般的な議論と公開開示に適した例を含むサニタイズ済み Issue を作成する必要がある場合があります。

PSIRT にレビューしてもらうには、`@gitlab-com/gl-security/product-security/appsec/psirt-group` を @ メンションしてください。

より*即時の*対応が必要な場合は、[セキュリティオンコールへの連絡](/handbook/security/security-operations/sirt/engaging-security-on-call/)を参照してください。

### `~security` Issue の重大度および優先度ラベル

重大度および優先度ラベルは、Issue が[脆弱性であると判断された](product-security/security-platforms-architecture/application-security/vulnerability-management/#vulnerability-vs-feature-vs-bug)場合に限り、トリアージ時に application security engineer によって設定されます。このような Issue を識別するため、engineer は `~bug::vulnerability` ラベルを追加します。重大度ラベルは、[GitLab CVSS calculator](https://gitlab-com.gitlab.io/gl-security/product-security/appsec/cvss-calculator/) を使用した CVSS スコアによって決定されます。別のチームメンバーが、選択された `~severity` / `~priority` ラベルを再検討する必要があると感じた場合は、関連する Issue で議論を始めることが推奨されます。

`~bug::vulnerability` ラベルが存在すると、標準の[重大度ラベル](/handbook/product-development/how-we-work/issue-triage/#severity)（`~severity::1`、`~severity::2`、`~severity::3`、`~severity::4`）に加えて、以下で説明する発生可能性や、その他の緩和要因または悪化要因を考慮するようになります。`~security` Issue への対応優先度も影響によって決まるため、ほとんどの場合、セキュリティチームが割り当てる優先度ラベルは重大度ラベルと一致します。例外は Issue の説明またはコメントに記載しなければなりません。

`~severity/~priority` ラベルを修正期限に結び付ける意図は、責任ある開示に関する業界標準のタイムラインを一貫して満たす、または上回るために、GitLab のセキュリティ Issue への対応時間を測定し改善することです。Mean time to remediation (MTTR) は、GitLab がユーザーと顧客を保護することにコミットしているかをユーザーが評価する際の指標となり得る外部指標です。また、セキュリティ研究者が、直接または私たちの [HackerOne バグバウンティプログラム](/handbook/security/product-security/psirt/runbooks/hackerone-process/)を通じてセキュリティチームと関わるかどうかを選ぶ際に使う重要な測定値でもあります。

脆弱性は、特定のタイムラインに従って緩和および修正しなければなりません。タイムラインは [Vulnerability Management ハンドブック](/handbook/security/product-security/vulnerability-management/sla/)（[管理対象文書](controlled-document-procedure/)）で定められています。

Issue への理解が深まり、重大度が変わったことが分かった場合は、Issue が開かれた日から修正までの時間を再計算します。その日付が過去である場合、Issue は次回のセキュリティリリースまでに、またはそれ以前に修正しなければなりません。

### `~security` Issue の Due date

`~bug::vulnerability` ラベルがあり、重大度が `~severity::3` 以上の `~security` Issue については、セキュリティエンジニアが `Due date` を割り当てます。これは、修正をリリースできる状態にするべき目標日です。この Due date は、上記の `Time to remediate` の期間に加えて、毎月 28 日の月次セキュリティリリースも考慮するべきです。たとえば、今日が 10 月 1 日で、新しい `severity::2` の `~security` Issue が開かれたとします。この Issue は [30 日以内](/handbook/security/product-security/vulnerability-management/sla/)にセキュリティリリースで対応する必要があり、その期限は 10 月 31 日です。したがって、10 月 28 日のセキュリティリリースに含める必要があります。さらに、[Security Release Process deadlines](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/process.md#release-deadlines)では、修正に関連するすべてのマージリクエストをセキュリティリリースの期限の 48 時間前、つまり 10 月 26 日までに準備完了にする必要があるとされています。そのため、この例の Due date は 10 月 26 日でなければなりません。

インフラ変更など、一部の `~security` Issue は製品リリースの一部にする必要がない場合があります。その場合、Due date で月次セキュリティリリース日を考慮する必要はありません。

場合によっては、緊急の問題に対応するために、セキュリティチームが月次セキュリティリリース日を前倒しまたは延期する必要があり、このような Issue の Due date を変更する必要が生じることがあります。

## `~security` Issue のスケジューリング

**Product Managers** と **Engineering Managers** は、`~security` Issue をスケジューリングする際、推奨ガイダンスに従うべきです。

| チームに ___ が割り当てられた場合 | 期待される対応 |
| ------ | ------ |
|     S1   |   現在のマイルストーンを中断し、~"bug::vulnerability" および ~"FedRAMP::Vulnerability" セキュリティ Issue に **直ちに** 取り組む     |
|    S2    |  現在のマイルストーンを中断し、~"bug::vulnerability" および ~"FedRAMP::Vulnerability" セキュリティ Issue に **直ちに** 取り組む     |
|      S3  |   次の Milestone の開始時に、~"bug::vulnerability" および ~"FedRAMP::Vulnerability" セキュリティ Issue に取り組み始める       |
|       S4 |    Due date の少なくとも 2 Milestones 前に、~"bug::vulnerability" および ~"FedRAMP::Vulnerability" セキュリティ Issue に取り組み始める    |
| ブロックされている S1、S2、または S3 | ブロックしている Issue を所有するチームは、現在のマイルストーンを中断し、そのブロッカー Issue に **直ちに** 取り組む |

### `~security` Issue の再現性

Issue の説明には、明確な再現手順が説明内に含まれるように、`How to reproduce` セクションを設けるべきです。必要に応じて、追加の詳細を加えてください。

- 使用した環境:
  - Docker Omnibus version x.y.z
  - gitlab.com
  - staging.gitlab.com
- プロジェクト、ユーザー、有効化した機能、使用したファイルなどの条件
- Issue を再現するためのステップバイステップの計画
- URL、またはさらに望ましくは、Issue を引き起こす `curl` コマンド

### 脆弱性ではない `~security` Issue

`security` ラベルが付いているものの、`~type::bug + ~bug::vulnerability` ラベルが付いていない Issue は、脆弱性では**ありません**。むしろ、セキュリティ強化、Defense-in-depth の仕組み、またはその他のセキュリティ周辺のバグとみなされます。たとえば、`~"type::feature"` または `~"type::maintenance"` とラベル付けされた Issue です。これは、これらの Issue が [product](/handbook/product/) またはコンポーネントを所有するその他の適切なチームによってトリアージされるため、セキュリティチームは `~severity` および `~priority` ラベルを設定せず、脆弱性トリアージプロセスにも従わないことを意味します。

セキュリティ機能 Issue の実装は、私たちの[透明性](/handbook/values/#transparency)の価値観に沿って公開で行うべきです。つまり、[セキュリティ開発者ワークフロー](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md)には従いません。

一方で、`security`、`~type::bug`、`severity::4` ラベルが付いている Issue は `Low` 重大度の脆弱性とみなされ、標準の脆弱性トリアージプロセスに従って扱われることに注意してください。

### ~"security request"

セキュリティチームは、GitLab.com を支える追加の顧客要件、コンプライアンス要件、または運用上のニーズを満たすためにセキュリティチームから機能が要求されていることを示すものとして、Issue に `~internal customer` と [~`security request`](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name%5B%5D=security%20request) を適用する場合もあります。

### ~"securitybot::ignore"

一部の `~security` Issue は、脆弱性でもセキュリティ強化でもないにもかかわらず、`~security` とラベル付けされます。たとえば、ログイン機構における非セキュリティの `~"type::bug"` がこれに該当します。そのような Issue はセキュリティ上注意を要するため `~security` とラベル付けされますが、脆弱性ではなく、`~"type::feature"` でもありません。これらのケースでは、通常の脆弱性ワークフローや通知を bot がトリガーしないように `~"securitybot::ignore"` ラベルが適用されます。これらの Issue は、上記の「time to remediation」要件の対象ではないためです。

### Security から Engineering への移管

セキュリティエンジニアは、次のことを行う必要があります。

- [グループラベル](https://gitlab.com/gitlab-org/gitlab-foss/blob/master/doc/development/contributing/issue_workflow.md#group-labels)（`~group::editor`、`~group::package` など）を追加します
- [ステージラベル](https://gitlab.com/gitlab-org/gitlab-foss/blob/master/doc/development/contributing/issue_workflow.md#stage-labels)を追加します
- `~merge request` など、追加のラベルがあれば追加します。
- `@pm for scheduling` など、スケジューリングのために product manager をメンションします。
- 以下で重大度レベルごとに説明されているように、必要に応じて Engineering チームリードを @ メンションし、フォローアップするべきです。

Product manager は、作業がいつエンジニアに割り当てられるかを伝えるため、Due date が割り当てられた `Milestone` を設定します。Issue の `Due date` フィールド、重大度ラベル、優先度ラベルは PM が変更するべきではありません。これらのラベルは `~security` Issue に関する正確なメトリクスを提供することを意図しており、セキュリティチームによって割り当てられるためです。`~security` Issue が[私たちの最優先事項](/handbook/engineering/workflow/#security-is-everyones-responsibility)として対応されることを妨げる、技術的または組織的なブロッカーがある場合は、適切なマネジメントチェーンにエスカレーションするべきです。

**チームリードが Issue をリリースマイルストーンに追加し、かつ開発者に割り当てない限り、Issue は特定のリリース向けにスケジュールされたことにはならない点に注意してください。**

`severity::1` または `severity::2` の評価を持つ Issue は、関連する Engineering チームリードと Product Manager の注意を直ちに引く必要があります。Issue でタグ付けするか、反応がない場合はチャットやメールでエスカレーションしてください。

`severity::1` の評価を持つ Issue は、他のすべての Issue より優先され、緊急セキュリティリリースの対象として検討されるべきです。

`severity::2` の評価を持つ Issue は、次回予定されているセキュリティリリースに向けてスケジュールするべきです。これは、重大度やパッチ待ちの他の Issue によって、数日後または数週間後になる場合があります。`severity::2` の評価は、次回セキュリティリリースの前にパッチを準備できることを保証するものではありませんが、それを目標にするべきです。

`severity::3` の評価を持つ Issue は緊急度が低く、次のマイナーバージョンを目標として割り当てられます。通常であれば `severity::3` と評価される低リスクまたは低影響の脆弱性であっても、報告者が 30 日（またはそれ未満）の開示期限を提示している場合は、開示前にパッチが適用されるように Issue がエスカレーションされることがあります。

### 関係のないコード変更によってセキュリティ Issue が無関係になる場合

`~security` Issue が最初にトリアージされた後、パッチが実装される前に無関係になることがあります。たとえば、脆弱な機能が削除された、または大幅に変更された結果、その脆弱性が存在しなくなる場合です。

エンジニアが Issue が無関係になったことに気付いた場合、その脆弱性がもう存在しないことを確認するため、Issue をトリアージした人物を @ メンションするべきです。<b>[メンテナンスポリシー](https://docs.gitlab.com/ee/policy/maintenance.html#security-releases)に従って、以前のリリースへパッチをバックポートする必要がまだある場合がある点に注意してください</b>。バックポートが不要な場合、Issue はクローズできます。

### バックポート数の削減

Application Security Engineer の承認があれば、セキュリティ Issue を現在の安定版リリースのみに修正し、バックポートなしとすることができます。[GitLab Maintenance Policy](https://docs.gitlab.com/ee/policy/maintenance.html#security-releases)に従い、Issue に `~reduced backports` ラベルを適用してください。
