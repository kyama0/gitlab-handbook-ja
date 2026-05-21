---
title: "HackerOne プロセス"
upstream_path: /handbook/security/product-security/psirt/runbooks/hackerone-process/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-23T14:32:52-04:00"
---

## GitLab のバグバウンティプログラムの目的と概要

### プロセスの全体像

GitLab の HackerOne プロセスは、構造化されたワークフローを通じて脆弱性報告を管理します。セキュリティ研究者は HackerOne を通じて発見内容を提出し、それを HackerOne チームがトリアージしたうえで GitLab セキュリティチームに引き渡します。ローテーション中の PSIRT エンジニアが有効な報告をアサイン・検証して GitLab Issue にインポートし、CVSS スコアを算出して重大度とバウンティ額を判定します。脆弱性の種類 (公開されたシークレット、脆弱性チェイニング、DNS テイクオーバー) ごとに特定のプロトコルに従い、報告者と定期的なコミュニケーションを維持し、適切な修復追跡を確保します。修正がデプロイされた後、報告はクローズされ、30 日間の待機期間を経て公開される場合があります。優れた報告者はバウンティと Ultimate ライセンスの両方を獲得できる可能性があります。

## 主要なステークホルダーと責任

- HackerOne トリアージチーム
- GitLab PSIRT セキュリティエンジニアリング
- PSIRT セキュリティプログラムマネージャー
- 発見された問題の影響を受ける機能の GitLab Product Manager
- 発見された問題の影響を受ける機能の GitLab Engineering (Development) Manager
- SIRT (Security Operations)
- インフラストラクチャチーム

## HackerOne ワークフロー

- GitLab はバグバウンティプログラムに HackerOne を使用しており、セキュリティ研究者が脆弱性を報告します。
  - 報告ステータスの変更通知は #hackerone-feed Slack チャンネルに送信されます。
- プロセス内の主要なキュー:
  - New: New 状態のすべての報告を含む
  - GitLab Team: 検証済みでチームメンバーへのアサイン待ちの報告
  - H1 Triage: HackerOne トリアージチームがレビュー中の報告
  - Pending Disclosure: レビューと公開準備が整った報告
- 報告の取り扱いに関する基本原則:
  - H1 Triage キューでクリティカルまたは High の報告を監視
  - Medium/Low の報告は自動化で処理
  - ローテーション中の PSIRT エンジニアは適切なアサインとトリアージを確保すべき
  - 必要に応じて報告は次のローテーション担当者に再アサイン可能
- キュー業務プロセス:
  - 再現テストには Ultimate ライセンス付きの専用 namespace を使用
  - HackerOne トリアージチームの検証は信頼するが必ず検証する
  - 作業を始める際は報告を自分にアサイン
  - 重大度で優先順位付け、重複をクローズ、最古の報告から順にトリアージ
- 報告検証ワークフロー:
  - HackerOne によって行われた検証をレビュー
  - 報告者とコミュニケーションを取り、必要に応じて調査
  - 報告がスコープ外、機能、Informative、または重複であるかを判定
- 有効でスコープ内の報告について:
  - CVSS スコアを算出し適切な重大度を設定
  - 報告を GitLab Issue にインポート
  - 適切なラベル、期限を割り当て、関係するチームメンバーに通知
  - HackerOne で報告状態を「Triaged」に変更
- 特別な処理プロセスが存在する対象:
  - 脆弱性チェイニング (1 つの報告に複数の脆弱性)
  - 公開されたシークレット (トークン、認証情報)
  - 公開された個人情報
  - フィーチャーフラグ の背後にある機能
  - DNS レコードのテイクオーバー
- アワードとバウンティプロセス:
  - トリアージ時に部分的なアワードが付与される場合あり
  - アワード承認は重大度レベルに基づく
  - 30 日後、修正が確認される前に承認されたアワードが支払われる場合あり
- Issue の管理と公開:
  - 報告者と定期的に (少なくとも月次で) コミュニケーション
  - 必要に応じて SLA 例外プロセスに従う
  - パッチがリリースされた後 (30 日間の待機期間後) に Issue をクローズして公開
- 追加の特典:
  - 3 件以上の有効な報告を行った研究者は 1 年間の Ultimate ライセンスを取得可能
  - HackerOne トリアージチームのメンバーは Ultimate ライセンスを取得

## HackerOne 報告ライフサイクルのタイムライン

 TBD

## ステップバイステップのトリアージと修復手順

### キュー

- `New` は New 状態のすべての報告を含みます
- `GitLab Team` は HackerOne トリアージチームによって検証されたものの、まだ特定の GitLab チームメンバーにアサインされていない報告を含みます
- `H1 Triage` は HackerOne トリアージチームによってトリアージ中の報告です
- `Pending Disclosure` はレビューおよび公開すべき報告です

### 基本原則

- `GitLab Team` キューが空の場合は、`H1 Triage` キューに `Critical` または `High` と評価された報告がないかを定期的にチェックします。そのように評価された報告がある場合、それらが本当に `Critical` または `High` であるかを評価し、もしそうであれば `H1 Triage` を待たずに直接処理します。
  - 一般的に、`H1 Triage` と `New` キューに常に目を配り、`Critical` と `High` を探すのが良い習慣です。
  - `New` キュー内の `Critical` 報告が PSIRT エンジニアによって低い重大度であると評価された場合、なぜこの報告が `Critical` に見えないかを詳述する `Team only` コメントを報告に入力します。これにより、他のチームメンバーに既に簡単にレビューされていることが伝わり、作業の重複を回避できます。報告は `New` キューに残し、HackerOne トリアージチームに引き続きトリアージするよう知らせるメモを残してください。
- ローテーション中の PSIRT エンジニアは、トリアージ週内に `GitLab Team` にアサインされた_すべての_報告が、(自分自身に) アサインされ、適切にトリアージされるよう、あらゆる努力をすべきです。
  - 報告がローテーション担当者に再アサインされなかった場合、次のローテーション担当者は自由にそれをアサインできます。

### GitLab チームのオンボーディング

- GitLab セキュリティチームの新メンバーには、適切な[ロールベースのエンタイトルメントテンプレート](https://internal.gitlab.com/handbook/it/end-user-services/access-request/baseline-entitlements/)を使用したアクセスリクエスト Issue で GitLab HackerOne チームへのアクセスが付与されます。これはオンボーディング中にマネージャーによって提出されるべきです。
- オンボーディング中、新しい GitLab セキュリティチームメンバーは、ロール上必要であれば HackerOne プログラムへの参加を招待されます。

### キューの作業

#### トリアージ用 Ultimate ライセンス付き namespace

脆弱性のテストに必要なプロジェクトとグループを作成するため、必ず[こちらの namespace](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/bug-reproduction) を使用してください。この namespace は HackerOne Issue の再現専用です。

#### HackerOne トリアージチーム

GitLab のバグバウンティプログラムは HackerOne によって管理されています。HackerOne トリアージチームはファーストレスポンダーであり、研究者と協力して報告を検証してから `GitLab Team` にアサインします。

私たちは通常 HackerOne トリアージチームを信頼し、必ずしも報告を再度検証するわけではありません。ただし、ローテーション中の GitLab チームメンバーが再検証したいケースもあります。例 (網羅的ではありません):

- さらなる調査が必要な追加の影響がある場合
- さらなる調査なしには重大度を適切に評価できない場合

#### GitLab Team

- 報告の作業を開始する際、セキュリティチームメンバーは即座に
報告を自分にアサインすべきです。
- Medium/Low の報告はトリアージが自動化されています。PSIRT エンジニアは特別な処理について [Medium/Low 重大度の問題に関する PSIRT セキュリティエンジニア手順](#psirt-security-engineer-procedures-for-mediumlow-severity-issues)を参照してください。
- すぐには取り掛からない報告を取得することは問題ありません。特に
重複であったり、自分が詳しい別の報告に関連している場合などです。ただし、推定トリアージ時間を満たせない場合は必ず再アサインしてもらってください。
- トリアージ作業サイクルを開始する際、チームメンバーは以下のように優先順位を付けるべきです:
  1. キューを問わず、新規の severity::1/priority::1 Issue を最初に[特定・トリアージ・エスカレーション](/handbook/security/product-security/psirt/runbooks/handling-s1p1/)します。
  1. 重複と無効な報告をクローズします。
  1. "Oldest" でソートしてさらにトリアージします。
  1. `GitLab Team` キューをトリアージします。

  報告者から応答順序について質問された場合は、`06 - Duplicates/Invalid Reports Triaged First` の common response を使用できます。
- HackerOne トリアージチームによって実行された検証をレビューします
- 報告者とコミュニケーションを取り、必要に応じて以下のガイドラインに従って調査します:
  - 報告者またはトリアージチームのいずれかから[明確化を依頼します](#if-a-report-is-unclear)
  - 自分で報告を検証します
- 報告に再現用の外部ホストの静的コンテンツが含まれている場合 (例えば CSRF をトリガーする HTML ファイルや `postMessage` Issue を悪用する脆弱性など)、内部で再ホストするために[このプロジェクト](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/vuln-repro-static-pages)の手順に従います
  - HackerOne 報告者の PoC は使用しないでください。悪意のあるペイロードのリスクを排除しつつ脆弱性をテストする攻撃ペイロードを開発してください。
- 潜在的な、バウンティ以外の結果:
  - 報告がスコープ外。アクション可能であれば、Issue は引き続き作成される場合があります。
  - 報告が上述のように `~"type::feature"` であり、confidential 化や修復スケジューリングは不要。Issue を作成するか、希望すれば報告者に作成を依頼することができますが、報告は「Informative」としてクローズできます。
  - 報告がそうでなければ [Informative、Not Applicable、または Spam](#closing-reports-as-informative-not-applicable-or-spam) となります。
    例えば、markdown 自体の機能を超えない[markdown 内のインライン HTML](https://docs.gitlab.com/ee/user/markdown.html#inline-html) に関する報告を多数受けています。
  - 報告が重複。Issue が以前に HackerOne で報告されていなかったか、または GitLab に既に Issue が存在しないかを確認します。重複の場合:
    - 報告の状態を「Duplicate」に変更します。
    - Issue が以前に H1 で報告されていた場合、報告者の評判に影響する可能性があるため、報告 ID を含めます
    - `01 - Duplicate` の common response を埋めます。GitLab Issue へのリンクを含めます。
    - 報告者が元の H1 報告にコントリビューターとして追加されることを依頼してきた場合、チームメンバーは裁量で判断できます。
        ただし、対応する GitLab Issue はパッチリリース後 30 日で公開されるため、デフォルトでは追加しません。重複報告者を追加することを決定した場合、アクセスを許可する前に報告に報告者の機微情報が含まれていないことを確認してください。
        コントリビューターとして追加する依頼を断る場合は、`05 - Duplicate Follow Up, No Adding Contributors/Future Public Release` common response を使用できます。
    - 新しい報告によって以前の報告を誤って処理していたことに気付いた場合 (例: informative としてクローズしたが実は有効なバグだった)、元の報告を再オープンし、レーダーから外れていた問題を再び持ち込んでくれた報告者への感謝として新しい報告にバウンティを授与します
      - 感謝として授与するバウンティは、低重大度の報告については $100、より高重大度については私たちがトリアージ時に支払う初期バウンティと同等にすべきです
      - プロセスの後半で間違いに気付き、すでに新しい報告にバウンティを授与している場合、バウンティは上記の金額に引き上げるか、すでに高い場合はそのままにします
      - 重複報告の作成者は、CVE クレジットとブログ記事でも感謝されるべきです
      - 新しい報告がより高い影響を示している場合、CVSS スコアを算出し、新しい重大度と元の報告に授与した金額の差を新しい報告者に授与します
- 報告が情報開示に関するものである場合は、[公開されたシークレットのトリアージ](#triaging-exposed-secrets)プロセスに従います。
- 報告が有効でスコープ内・オリジナルであり、対応・セキュリティ関連のドキュメント変更が必要、または責任ある engineering チームによるさらなる調査が必要な場合:
  - [CVSS スコアを算出](https://gitlab-com.gitlab.io/gl-security/product-security/appsec/cvss-calculator/)し、得られたベクター文字列 (例: `AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:N/A:L`) を報告内の internal comment として投稿します。これは後で CVE ID をリクエストする際に使用されます
  - 算出した CVSS を使用して、H1 で適切な重大度を検証および/または設定します
    - 必要に応じて研究者に CVSS を説明し、CVSS スコアはピアによって検証されること、重大度と支払いに関する非効率な誤解を避けるため Awards プロセスへリンクすることを伝えます
  - H1 で適切な Weakness を検証および/または設定します
  - 報告が[権限関連](https://docs.gitlab.com/ee/development/secure_coding_guidelines.html#permissions)である場合、適切に API、GraphQL、Elasticsearch で類似 Issue がないかを確認します。Deploy Token、Deploy Key、Trigger Token などの代替認証メカニズムでも確認してください。
  - H1 で初期[推奨バウンティ](https://docs.hackerone.com/en/articles/8524543-bounties#h_13d3d2c2b7)を追加します
  - Slack で `/h1 import <report> [project] [options]` を使用して報告を GitLab Issue にインポートします
    - 注: デフォルトでは、プレースホルダー [CVE Issue](https://gitlab.com/gitlab-org/cves/-/issues) が作成され、最新の [bug bounty council issue](https://gitlab.com/gitlab-com/gl-security/security-department-meta/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=Bug%20Bounty%20Council) に簡単なメモが追加されます。それぞれの作成を防ぐには、`/h1 import` コマンドに `~no-cve` または `~no-bounty` を渡します。
  - インポートされた GitLab Issue で:
    - `h1import` によって割り当てられた重大度/優先度を検証します ([重大度と優先度](/handbook/security/engaging-with-security#severity-and-priority-labels-on-security-issues) と [修復 SLA](/handbook/security/product-security/vulnerability-management/sla/#vulnerability-management-slas-and-labels))
    - 適切な[期限](/handbook/security/engaging-with-security/#due-date-on-security-issues)を割り当てます
    - 例えば HackerOne triager によって書かれた最終的な再現手順を Issue にコピーするなどして、適切な[`再現方法`](/handbook/security/engaging-with-security/#reproducibility-on-security-issues)セクションを設けます。
    - 報告がセキュリティ関連のドキュメント変更である場合、`~documentation` ラベルを追加します
    - [製品カテゴリページ](/handbook/product/categories/)に基づいて Product Manager と Engineering Manager に @ メンションします。トリアージを完了するために engineering からのフィードバックが必要な場合は依頼します
    - [DevOps ステージ](/handbook/product/categories/#devops-stages)とソースグループに対応するラベルを追加します (`/label ~` コマンド) (階層を形成するカテゴリの概要については[Hierarchy](/handbook/product/categories/#hierarchy) を参照)
    - 該当する場合は、選択したセキュリティレベルに応じて、Issue、チャット、メールを通じて他の関連チームメンバーに通知します。
  - HackerOne で報告の状態を「Triaged」に変更します:
    - トリアージ時に授与されるバウンティ報酬の部分については、[GitLab の H1 ポリシー](https://hackerone.com/gitlab) の `Rewards` を参照してください
    - 以下の common responses から選択します:
      - 重大度や有効性が不確実で engineering チームと議論中の報告の場合は `00 - Triaged pending further investigation`
      - トリアージ時に初期バウンティがない低重大度の報告の場合は `00 - Triaged`
      - トリアージ時に初期バウンティがある medium、high、critical の報告の場合は `00 - Triaged with Bounty`
    - コメントに confidential Issue へのリンクを含めます
  - 関連詳細が頭に新しいうちに CVE Issue と Bug Bounty Council のメモを更新します
    - CVSS スコアが GitLab.com で self-managed より高い場合、両方のスコアを算出し Bug Bounty Council Issue で共有します。Council がセキュリティ影響が GitLab.com で self-managed より高いことに同意した場合、バウンティ授与は GitLab.com の CVSS に基づきます。CVE とセキュリティリリースのブログ記事は常に self-managed の CVSS を使用します。
    - bug bounty council のメモで「Public description」フィールドの使用を検討します。関連性があり詳細を明らかにしすぎていない場合、自動的に作成された Duo 生成の Public description を使用できます。このフィールドは [CVE description update automation](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/security-release-tools/-/blob/master/scripts/cve_description_update.rb) によって取得され、存在する場合は CVE description として使用されます。
    - 「Suggested Bounty」行には_バウンティ額のみ_を入力します — このバウンティ授与額に関するすべての追加詳細は「Notes」に記載すべきです
  - HackerOne トリアージチームによる Issue の検証に依拠した場合、自分で検証する時間をカレンダーに設定することを検討してください。これは後で修正を検証する際に役立ちます。
  - GitLab インフラに対する完全な影響を評価する必要がある場合、<https://gitlab.com> でテストする代わりに、<https://staging.gitlab.com/help> を使用して GitLab メールアカウントでサインインしてください
    - 複数のユーザーが必要な場合、ステージング環境にアクセスするために 1password Team Vault に保存されている `gitlab-qa-user*` ユーザーの認証情報を使用します
  - 報告が認証なしで検出可能なバグ (GitLab またはホストしている他のもの) である場合、Red Team または Vulnerability Management に連絡し、スキャンに含められる Nuclei テンプレートの作成に協力してもらうことを検討します
- 必ず `Pending Disclosure` タブをレビューし、[公開プロセス](#closing-out--disclosing-issues)に従ってください

##### 脆弱性チェイニングの CVSS 算出

通常、各 HackerOne 報告は単一の脆弱性を開示します。しかし、時には単一の報告で 2 つ以上の新たに発見された脆弱性をチェイニングして影響を増大させる場合があります。

単一の報告が 2 つ以上の新しい脆弱性をチェイニングしてより大きな影響を開示する場合、各個別の脆弱性の CVSS を算出_し_、組み合わせた影響に対する追加の「脆弱性チェイニング」CVSS スコアも算出します。対応する bug bounty council Issue で個別の CVSS スコアと「脆弱性チェイニング」CVSS スコアの両方を共有します。

各個別脆弱性の CVSS は、各脆弱性に対して発行される CVE に使用されます。「脆弱性チェイニング」CVSS は、その報告に対するバウンティ授与の判定に使用されます。

以前に開示された脆弱性との「脆弱性チェイニング」を伴う将来の報告については、新たに開示された脆弱性の CVSS のみを算出します。そのような場合、チェイン内の新しい脆弱性のみが「脆弱性チェイニング」CVSS ベースのバウンティの対象となります。

### 公開されたシークレットのトリアージ {#triaging-exposed-secrets}

<details>
<summary>公開されたシークレットのトリアージに役立つコピー&ペースト可能な Appsec トリアージチェックリストの markdown を表示するにはクリック</summary>

```markdown
### Appsec Triage checklist
- [ ] Mitigate the incident if possible
  - [ ] If the exposed secret is a Agent Token:
    - [ ] Validate if the token is a valid one by following the steps [here](https://gitlab.com/gitlab-com/gl-security/security-research/verify-kas-token#testing-kas-token-for-validity) and gather the output for the SIRT incident.
    - [ ] [Reset the token](https://docs.gitlab.com/ee/user/clusters/agent/work_with_agent.html#reset-the-agent-token) and reach out to the owner of the token through Slack DM.
  - [ ] If the exposed secret is a Personal Access Token:
    - [ ] Using the API, gather the output of [`/api/v4/user`](https://docs.gitlab.com/ee/api/users.html#for-normal-users-1) and [`/api/v4/personal_access_tokens/self`](https://docs.gitlab.com/ee/api/personal_access_tokens.html#using-a-request-header) for the SIRT incident.
    - [ ] [Revoke the token](https://docs.gitlab.com/ee/api/personal_access_tokens.html#using-a-request-header-1) and reach out to the owner of the token through Slack DM.



  - [ ] Post a comment in `#security-revocation-self-service` using [this message template](https://internal.gitlab.com/handbook/security/security_operations/sirt/runbooks/exposed_secrets/#general-revocation-template-for-secrets)
  - [ ] If the information was leaked in an issue, make the Issue confidential and leave an internal note explaining why it's been made confidential.
- [ ] Use the `/security` slack command to [initiate](/handbook/security/security-operations/sirt/engaging-security-on-call/#engage-the-security-engineer-on-call) an incident. This will open a Tines case.
  - [ ] In the description section, include a link to the HackerOne report and any other useful information
    - [ ] Share the reporter's IP address(es) and time(s) the reporter accessed the sensitive data to assist with incident response.
  - [ ] In the remediation section, document what time and from what IP used to revoke the token or validate the leak.
  - [ ] If in doubt, choose "Urgent".
  - [ ] If you've been able to mitigate the incident, choosing "Not Urgent" is fine. The SEOC typically responds quickly anyway.
- [ ] Add information to the SIRT Tines case/incident.
  - [ ] Login to Tines and locate the case that was opened as a result of you triggering an incident using `/security`.
  - [ ] (If not already shared) Add a note on the Tines case to include the date the secret was leaked, when HackerOne report came in, and when you took any actions.
  - [ ] Add any comments to the SIRT Tines Case with context or information that might be helpful.
- [ ] Leave an internal note with a link to the associated Tines case to connect the report to the Tines case for future reference.
- [ ] Identify the most appropriate [non-CVSS bounty amount](https://gitlab-com.gitlab.io/gl-security/product-security/appsec/cvss-calculator/) and add your initial [suggested bounty](https://docs.hackerone.com/en/articles/8524543-bounties#h_13d3d2c2b7) in H1
- [ ] Use `/h1 bounty REPORT_ID` to create a comment on the Bug Bounty Council issue (this step should not be necessary if `/h1 import` was previously run without the `~no-bounty` option.)
- [ ] Support SIRT as required and, if applicable, follow the process for [handling severity::1/priority::1 issues](handling-s1p1.html)
- [ ] Investigate the location of the exposure, and locations like it, for further exposure.
  - [ ] Check the history on issue / MR descriptions
  - [ ] Check git commit history
  - [ ] Check build artifacts
  - [ ] Use Advanced Search to look for similar patterns in other projects used by GitLab team members
- [ ] If it was leaked through GitLab Unfiltered, add the report to the [tracking issue](https://gitlab.com/gitlab-com/gl-security/security-research/video-scanner/youtube-video-scanner/-/issues/17)
```

</details>

情報やシークレットの公開は、パッチを当てるものがなく、したがって GitLab プロジェクト Issue、CVSS、または CVE が必要ないため、脆弱性とは少し異なる扱いを受けます。漏洩が発生した場合:

- 可能であればインシデントを緩和します
  - 公開されたシークレットが Agent Token の場合:
    - [こちらの手順](https://gitlab.com/gitlab-com/gl-security/security-research/verify-kas-token#testing-kas-token-for-validity)に従ってトークンが有効なものであるかを検証し、SIRT インシデントの出力を収集します。
    - [トークンをリセット](https://docs.gitlab.com/ee/user/clusters/agent/work_with_agent.html#reset-the-agent-token)し、Slack DM でトークン所有者に連絡します。
  - 公開されたシークレットが Personal Access Token の場合:
    - API を使用して、SIRT インシデント用に [`/api/v4/user`](https://docs.gitlab.com/ee/api/users.html#for-normal-users-1) と [`/api/v4/personal_access_tokens/self`](https://docs.gitlab.com/ee/api/personal_access_tokens.html#using-a-request-header) の出力を収集します。

      ```bash
      curl -H "Authorization: Bearer LEAKED_TOKEN" https://gitlab.com/api/v4/user
      curl -H "Authorization: Bearer LEAKED_TOKEN" https://gitlab.com/api/v4/personal_access_tokens/self
      ```

    - [トークンを失効](https://docs.gitlab.com/ee/api/personal_access_tokens.html#using-a-request-header-1)させ、Slack DM でトークン所有者に連絡します。

        ```bash
        curl --request DELETE -H "Authorization: Bearer LEAKED_TOKEN" https://gitlab.com/api/v4/personal_access_tokens/self
        ```

  - [このメッセージテンプレート](https://gitlab.com/gitlab-com/gl-security/security-operations/sirt/runbooks/-/blob/main/misc/exposed_secrets.md#general-revocation-template-for-secrets)を使用して `#security-revocation-self-service` にコメントを投稿します
  - 情報が Issue で漏洩した場合、Issue を confidential にし、なぜ confidential にしたかを説明する internal note を残します。
- `/security` Slack コマンドを使用してインシデントを開始します
  - SEOC の巻き込みについて詳しくは: <https://handbook.gitlab.com/handbook/security/security-operations/sirt/engaging-security-on-call/#engage-the-security-engineer-on-call>
  - 説明セクションに HackerOne 報告へのリンクとその他の有用な情報を含めます
    - インシデント対応を支援するため、報告者の IP アドレスと、報告者が機密データにアクセスした時刻を共有します。
  - 修復セクションに、トークンを失効させた、または漏洩を検証した時刻と IP を文書化します。
  - 迷ったら「Urgent」を選択します。
  - インシデントを緩和できた場合、「Not Urgent」を選択しても問題ありません。SEOC は通常、いずれにせよ迅速に応答します。
- SIRT Tines ケース/インシデントに情報を追加します。
  - Tines にログインし、`/security` を使用してインシデントを起動した結果として開かれたケースを特定します。
  - (まだ共有していない場合) シークレットが漏洩した日、HackerOne 報告が届いた日、何らかのアクションを取った日を含むメモを Tines ケースに追加します。
  - 役立つ可能性のあるコンテキストや情報を SIRT Tines Case にコメントします。
- 報告と Tines ケースを将来の参照のために結び付けるため、関連する Tines ケースへのリンクを含む internal note を残します。
- 最も適切な [non-CVSS バウンティ額](https://gitlab-com.gitlab.io/gl-security/product-security/appsec/cvss-calculator/) を特定し、H1 で初期[推奨バウンティ](https://docs.hackerone.com/en/articles/8524543-bounties#h_13d3d2c2b7)を追加します
- `/h1 bounty REPORT_ID` を使用して Bug Bounty Council Issue にコメントを作成します (`/h1 import` が以前に `~no-bounty` オプションなしで実行されている場合、このステップは不要です。)
- 必要に応じて SIRT を支援し、該当する場合は [severity::1/priority::1 Issue の取り扱い](/handbook/security/product-security/psirt/runbooks/handling-s1p1/)プロセスに従います
- 公開された場所、およびそれに似た場所を、さらなる公開のために調査します。
  - Issue / MR の説明の履歴を確認します
  - git コミット履歴を確認します
  - ビルドアーティファクトを確認します
  - Advanced Search を使用して、GitLab チームメンバーが使用する他のプロジェクトで類似のパターンを探します
- GitLab Unfiltered を通じて漏洩した場合、報告を[追跡 Issue](https://gitlab.com/gitlab-com/gl-security/security-research/video-scanner/youtube-video-scanner/-/issues/17) に追加します

### 公開された個人情報のトリアージ

公開されたシークレットを処理する方法と同様に、GitLab プロジェクト Issue、CVSS、または CVE が必要ない、公開された個人情報を処理することがあります。

- 可能であればインシデントを緩和します
  - 情報が Issue で漏洩した場合、Issue を confidential にし、なぜ confidential にしたかを説明する internal note を残します。
  - :warning: Issue を confidential にしても添付ファイルは confidential にならないことに注意してください。
- `/security` Slack コマンドを使用してインシデントを開始します
  - SEOC の巻き込みについて詳しくは: <https://handbook.gitlab.com/handbook/security/security-operations/sirt/engaging-security-on-call/#engage-the-security-engineer-on-call]>
  - インシデントの性質として「Information Disclosure」を選択します
  - 説明セクションに HackerOne 報告へのリンクとその他の有用な情報を含めます
    - 可能であれば、インシデント対応を支援するため、報告者の IP アドレスと、報告者が機密データにアクセスした時刻を共有します。
  - こうした漏洩には通常「Not Urgent」で十分です。SEOC は通常、いずれにせよ迅速に応答します。
- SIRT Tines ケース/インシデントに情報を追加します。
  - Tines にログインし、`/security` を使用してインシデントを起動した結果として開かれたケースを特定します。
  - (まだ共有していない場合) シークレットが漏洩した日、HackerOne 報告が届いた日、何らかのアクションを取った日を含むメモを Tines ケースに追加します。
  - 役立つ可能性のあるコンテキストや情報を SIRT Tines Case にコメントします。
- 報告と Tines ケースを将来の参照のために結び付けるため、関連する Tines ケースへのリンクを含む internal note を残します。
- 最も適切な [non-CVSS バウンティ額](https://gitlab-com.gitlab.io/gl-security/product-security/appsec/cvss-calculator/) を特定し、H1 で初期[推奨バウンティ](https://docs.hackerone.com/en/articles/8524543-bounties#h_13d3d2c2b7)を追加します
- `/h1 bounty REPORT_ID` を使用して Bug Bounty Council Issue にコメントを作成します
  - ここでは `bounty` のみを使用してインポートしている点に注意してください。
- 必要に応じて SIRT を支援し、該当する場合は severity::1/priority::1 Issue の取り扱いプロセスに従います
- 公開された場所、およびそれに似た場所を、さらなる公開のために調査します。
  - Issue / MR の説明の履歴を確認します
  - Advanced Search を使用して、GitLab チームメンバーが使用する他のプロジェクトで類似のパターンを探します

### フィーチャーフラグ の背後にある機能のトリアージ

研究者が[フィーチャーフラグ](https://docs.gitlab.com/ee/operations/feature_flags.html) の背後にある機能の脆弱性を報告することがあります。これらの報告は、デフォルト設定を使用する広範なオーディエンスに影響を与える前に脆弱性を修正できるため、優れたものです。これらの報告は算出されたバウンティの全額の対象となります。

**注:** フィーチャーフラグ の背後にある機能は、しばしば Experimental または Beta ステージにあります。これらの機能の CVE 割り当てとブログ記事への含有に関するガイダンスについては、[Experimental および Beta 機能における脆弱性のトリアージ](#triaging-vulnerabilities-in-experimental-and-beta-features)を参照してください。

`Attack Complexity` を判定するため、報告全体に注意を払います。以下の項目内の `complex` という用語は、[CVSS 3.1 仕様書](https://www.first.org/cvss/v3.1/specification-document)の **2.1.2 Attack Complexity** セクションで定義されているとおりです。前述のセクションでは **2.1.2 Attack Complexity** に以下のように記載されている点に留意してください — _**「攻撃が成功するために特定の合理的な構成が必要な場合、Base メトリクスは脆弱なコンポーネントがその構成にあると仮定してスコアリングすべきです」**_。

- 複雑でない フィーチャーフラグ の背後にある機能の脆弱性は `AC:L` で支払われます (これは フィーチャーフラグ が脆弱なインスタンスで有効化されていると仮定した後)。ただし、トリアージと SLO のためには `AC:H` として処理します。
- かなり複雑な フィーチャーフラグ の背後にある機能の脆弱性は依然として `AC:H` です (これは フィーチャーフラグ が脆弱なインスタンスで有効化されていると仮定した後)

デフォルトで無効な フィーチャーフラグ の背後にある脆弱性には CVE は不要です (インポート時に `~no-cve` を使用)。これらは[セキュリティリリースではなく通常リリースでパッチされる](https://docs.gitlab.com/ee/administration/feature_flags.html#risks-when-enabling-features-still-in-development)ためです。

### Experimental および Beta 機能における脆弱性のトリアージ {#triaging-vulnerabilities-in-experimental-and-beta-features}

GitLab は、開発の Experimental または Beta ステージにある機能で発見された脆弱性に対して CVE 識別子を発行しません。これらの機能は、本番利用の準備ができていないと明示されており、オプトインでの有効化が必要であり、標準的な脆弱性修復 SLO に従いません。

**機能の成熟度ステージの判定:** 機能の成熟度ステージを特定するには、[GitLab ドキュメント](https://docs.gitlab.com/) で機能を検索します。Experimental または Beta ステージの機能は、ドキュメントページの上部にステータスバナーを表示します (例: [GitLab Observability](https://docs.gitlab.com/operations/observability/) を参照)。ステータスバナーが存在しない場合、その機能は Generally Available とみなされます。

Experimental または Beta 機能に影響する報告をトリアージする際:

- `~no-cve` フラグを使用して報告をインポート: `/h1 import <report> [project] ~no-cve`
- 重大度評価と修復のための通常のトリアージプロセスに従う
- 脆弱性はセキュリティリリースのブログ記事には含めない
- これらの機能には標準の修復 SLO は適用されない
- Experimental または Beta ステータスの機能については、セキュリティ修正が canonical (公開で) リリースされる場合がある

**根拠:** Experimental および Beta 機能には、CVE Records に必要な正式なバージョニング、サポートコミットメント、本番準備が欠けています。これらの機能をオプトインするユーザーは、[機能成熟度ポリシー](https://docs.gitlab.com/policy/development_stages_support/)に文書化されているとおり、関連するリスクを受け入れます。

成熟度ステージの要件 (セキュリティに関するものを含む) の詳細については、[Development Stages Support ポリシー](https://docs.gitlab.com/policy/development_stages_support/) を参照してください。

### 古い Ruby バージョンの Issue のトリアージ

一部の脆弱性は特定の Ruby バージョンでのみ動作します。GDK を使用してローカルで再現するため、Ruby バージョンを変更する方法を以下に示します。

1. 以下のファイル内の Ruby バージョンを必要なバージョンに更新します:
   - `gitlab-development-kit/.tool-versions`
   - `gitlab-development-kit/gitlab/.tool-versions`
1. GDK ディレクトリ内で `asdf install ruby <required-version>` を実行します。
1. GDK ディレクトリ内で `gem install gitlab-development-kit` を実行します。
1. GDK ディレクトリ内の `./gitlab` ディレクトリに移動し、`bundle install` を実行します。
1. `gdk restart` を実行して `https://127.0.0.1:3000/admin` にアクセスし、Ruby バージョンを確認します。

### 非推奨機能のトリアージ

非推奨機能の脆弱性は通常通りトリアージされます。詳細は[ディスカッション](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues/336)を参照してください。

### DNS レコードテイクオーバーのトリアージ

DNS レコードテイクオーバーは通常、トリアージのために複数のチームを必要とします。ワークフローは少し異なります。

- 該当ページ (または MX/TXT レコードの場合はサービス) を担当するチームにメンションする代わりに、SIRT と SRE Oncall と協力します
- HackerOne 報告を `/h1 import $REPORT infrastructure` でインフラリポジトリにインポートします
- Slack で `/security` を使用して SIRT を巻き込みます。これにより、SIRT がこの種類の攻撃に関連する調査業務を実行できるようになります。
- Slack で `@sre-oncall` を巻き込みます。これにより、注意が必要な状況についてオンコール SRE に通知されます (PagerDuty ピンは送られません)。
この脆弱性の修復は通常、ぶら下がっている CNAME レコードの削除を含みます。MX レコードのテイクオーバーに関する Issue については、通常、レコードの制御を取得するために MX SaaS ベンダーである Mailgun と協力します。MX レコードのテイクオーバーに関する詳細は[こちら](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues/334)。

### アワード

- トリアージ時に授与されるバウンティ報酬の部分については、[GitLab の H1 ポリシー](https://hackerone.com/gitlab) の `Rewards` を参照してください
  - トリアージ時のアワード付与を遅らせるのは構いません。例として、報告が意図された動作なのか、ドキュメントの変更になるかが不明な場合などです。必要であれば戻って部分授与を行うことを忘れないでください。
  - トリアージ時に部分的なバウンティを授与した後、有効性または重大度の調整により過剰支払いだったと後で判明することは構いません
- 報告に既存の council Issue がない場合、`/h1 bounty <report>` Slack ボットを使用して現在の[~"bug bounty council"](https://gitlab.com/gitlab-com/gl-security/security-department-meta/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=Bug%20Bounty%20Council) Issue にメモを投稿します
  - 必要に応じて説明、類似 Issue、その他のコメントを追加します
- アワードの承認:
  - ドキュメント更新については、アワードはすぐに支払えます
  - Low と Medium の CVSS については、少なくとも 1 名のチームメンバーが thumbsup 絵文字でリアクションした後にアワードを支払えます
  - High と Critical の CVSS については、メモに 2 名のチームメンバーが thumbsup 絵文字でリアクションする必要があります
  - 必要に応じて、メモに十分な票が集まっていない場合は `#sec-appsec-team-only` でリクエストします
- Bug Bounty Council 承認後:
  - canonical Issue で CVSS スコアと council 議論ポイントを説明することを検討します。これは、修復中にチームが重大度を理解するのに役立ち、Issue が公開された際には、研究者と顧客に対して特定のスコアに到達した方法の透明性を提供します。
  - Issue がトリアージされてから 30 日が経過した場合、`04 - Bounty Award / Reviewed and Awarded Prior to Fix` common response を使用して、修正が確認される前に承認されたアワードを支払えます。
  - 修正が出荷されたら、`02 - Bounty Award` common response を使用して残りの金額 (またはトリアージ時に何も授与されていなかった場合は全額) を授与します
  - バウンティアワード支払い後、bug bounty council スレッドに 💰 絵文字を追加します。

私たちのバグバウンティプログラムで金銭報酬の対象とならない品質の高い報告を提出した報告者には、[Contributor Success ストア](https://rewards.gitlab.com/)のクレジットを授与できます。
クレジットを授与するには、Slack で Contributor Success チームに連絡してください。

報酬クレジットには金銭的な価値はなく、GitLab Forest に木を植えることにも使用できます。これは、報告者がさまざまな理由でグッズや金銭報酬を受け取れない場合に役立ちます。クレジットの数は重大度によって異なるため、連絡時にこれを示してください。

### Issue の管理

脆弱性に関する議論と修復には、希望よりも長い時間がかかる場合があります。それでも、進捗が遅くても、報告者を放置するよりも頻繁にコミュニケーションを取ることがはるかに良いです。したがって:

- 対応する GitLab Issue にマイルストーンが割り当てられると、自動プロセスが計画された修正日付で H1 報告にコメントを追加します。Issue が、Product Manager が Issue で @ メンションされてから **1 週間** 以内にマイルストーンに割り当てられない場合、product management チームにフォローアップしてください。
- 修正が明確でない、またはパッチが作成されるかどうかについて議論が継続中の場合、報告者は少なくとも **月次で** 更新を通知されるべきです。
- いずれにしても、過去 1 ヶ月以内に更新が提供されない「stale」状態になる報告があってはなりません。

### SLA 例外

HackerOne ボットは、インポートされた Issue の重大度に基づいて自動的に正しい期限を割り当てます。ただし、Issue がさまざまな理由でその期間内にパッチされない場合があります。これが発生した場合、開発チームは [SLA 例外](/handbook/security/product-security/vulnerability-management/sla/) を開き、Vulnerability Management チームによって承認されるべきです。Application Security チームはこれらの例外リクエストに関するガイダンスを提供することで支援可能ですが、開発チームがこれらのリクエストを提出し、正当性と例外タイプを提供することが期待されます。

### Issue のクローズと公開 {#closing-out--disclosing-issues}

パッチがリリースされ、アワードプロセスが完了したら、HackerOne Issue をクローズする時間です。

30 日後、[セキュリティ Issue を公開するプロセス](/handbook/security/engaging-with-security/#process-for-disclosing-security-issues)に従います。
これが完了したら、HackerOne Issue もケースバイケースで公開できます。機密情報を削除するための同じプロセスに従います。
GitLab Issue が confidential のままである間は、HackerOne Issue を公開する、または公開を依頼すべきではありません。

GitLab Security Bot (`@gitlab-securitybot`) によって行われたコメントは、PSIRT チームメンバーが `/h1 redact <comment_url>` Slack コマンドを使用して redact できます。

他の研究者が品質の高い報告について学ぶのに役立つ HackerOne Hacktivity ページを作成するため、ユニークで興味深い解決済み報告の公開を歓迎します。

研究者がクローズされた未解決の報告 (例: Informative または Not Applicable) の公開を要求する場合、`08 - Canceled Disclosure Message` テンプレートを使用して公開リクエストをキャンセルすることを選択します。報告者は代わりに [GitLab の公開 Issue を開く](https://about.gitlab.com/submit-feedback/)ことを検討すべきです。これは、脆弱性以外の Issue を提起し、対処する最良の方法です。

研究者が HackerOne での公開を_主張する_場合、特に理由がない限り、品質に関係なく公開に同意すべきです。

### severity::1/priority::1 Issue に関する PSIRT セキュリティエンジニア手順

[severity::1/priority::1 Issue の取り扱い](/handbook/security/product-security/psirt/runbooks/handling-s1p1/)を参照してください。

### Medium/Low 重大度の問題に関する PSIRT セキュリティエンジニア手順 {#psirt-security-engineer-procedures-for-mediumlow-severity-issues}

HackerOne によってトリアージされ、Medium/Low 重大度として評価され、`GitLab Team` にアサインされた報告は、自動的に Issue としてインポートされます。報告に文書化されている脆弱な製品機能のそれぞれの EM/PM がコメントで通知されます。

自動化により PSIRT エンジニアが council Issue に「imported by [engineer name]」としてアサインされ、Issue に対する所有権と説明責任が確立されます。アサインされたエンジニアは、CVSS スコアを検証し、必要に応じて適切なアクションを取る責任を負います。PSIRT エンジニアは、入ってくるアサインメントを監視するために、定期的に to-do リストをレビューすべきです。

自動化によって作成された Issue の不正確さは、以下のラベルを適用することで追跡されます。

- インポートされた GitLab Issue が誤った製品チーム/DRI にアサインされた場合、ラベル `H1-Assignment::Incorrect` を適用します
- インポートされた GitLab Issue が偽陽性であると判定された場合、ラベル `H1-Status::FalsePositive` を適用します
- インポートされた GitLab Issue が Bug Bounty プログラムのスコープ外であると判定された場合、ラベル `H1-Policy::OOS` を適用します
- インポート後に PSIRT の介入が必要な場合、ラベル `H1-Escalation::PSIRT` を適用します

### Informative、Not Applicable、または Spam として報告をクローズ {#closing-reports-as-informative-not-applicable-or-spam}

報告が GitLab または GitLab ユーザーへのセキュリティリスクを引き起こさない場合、GitLab.com で Issue を開かずにクローズできます。

これが発生した場合、なぜそれが脆弱性ではないかを研究者に通知します。報告を「Informative」、「Not Applicable」、または「Spam」のいずれとしてクローズするかは、Security Engineer の裁量に委ねられます。HackerOne はこれらの各ステータスに関して以下のガイドラインを提供しています。

- Informative: 報告には有用な情報が含まれていたが、即時のアクションを保証しなかった。
- Not Applicable: 報告が無効、不適格、または無関係だった。
- Spam: 報告がセキュリティ問題を説明する正当な試みではない。

私たちはほとんどの場合、GitLab へのセキュリティ影響がほとんどまたは全くない報告に対して「Informative」ステータスを使用し、セキュリティ概念の理解が乏しい報告や明らかにスコープ外の報告に対して「Not Applicable」を使用します。「Spam」は研究者の評判に最大のペナルティをもたらすため、明らかな悪用ケースでのみ使用すべきです。

脆弱性ではない[再現可能なバグについては公開 GitLab Issue を開くこと](https://about.gitlab.com/submit-feedback/#reproducible-bugs)を提案するのが適切な場合があります。

### 報告が不明確な場合 {#if-a-report-is-unclear}

報告が不明確である場合、またはレビューアーが発見の有効性や悪用方法について質問がある場合は、今が質問する時です。研究者が発見の有効性と影響を判定するために必要なすべての情報を提供するまで、報告を「Needs More Info」状態に移動します。とにかく confidential Issue を開くことが理にかなっているかを判断するために、最善の判断力を使用してください。報告者からさらなる情報を求めていることをそこに記載します。迷った場合は、Issue を開く側に倒します。

報告が明確化されたら、上記の「通常のフロー」に従います。

### 効果的なコミュニケーションの破綻

時には、報告者との効果的なコミュニケーションが破綻することがあります。これは複数の理由で発生する可能性がありますが、さらなるコミュニケーションが [GitLab の効果的かつ責任あるコミュニケーションのためのガイドライン](/handbook/communication/#effective--responsible-communication-guidelines)に従うことが重要です。報告者とのコミュニケーションがこの段階に達した場合、この目標を達成するために以下のステップを取るべきです。

- 状況から一歩引きます。即座に応答しないでください。
- H1 トリアージエンジニア、または、より楽な場合はマネージャーに、最善の進め方についてアドバイスを求めます。
- 応答を複数回書くことを検討し、相談した人に応答をレビューしてもらいます。
- 状況が落ち着いたら、一般的な状況が現在文書化されていない場合は、将来どのように対応できるかについてハンドブックへ MR を開きます。

状況が行動規範違反につながる場合、行動規範違反の対処プロセスに従います。

### Rules of Engagement または行動規範違反への対処 {#addressing-rules-of-engagement-or-code-of-conduct-violations}

行動が私たちの[Rules of Engagement](https://hackerone.com/gitlab?type=team#user-content-rules-of-engagement-testing-and-proof-of-concepts)または HackerOne の[行動規範](https://www.hackerone.com/policies/code-of-conduct)に違反する場合、Bug Bounty Council を使用して私たちの応答を議論し、合意し、文書化します。Issue 説明にあるテンプレートを使用して現在の Bug Bounty Council Issue にコメントを追加します。

私たちの透明性の価値観に沿って、なぜアクションを取ったのか、それらのアクションが何だったのかを研究者に説明するように努めるべきです。ただし、特定のケース (例: プログラム禁止) では、潜在的な虐待や報復からチームメンバーを安全に保つため、HackerOne にすべてのコミュニケーションを処理させるのが適切な場合があります。

### 第三者に影響する可能性のある報告

GitLab が HackerOne またはその他の手段で第三者に影響する可能性のある報告を受け取った場合、報告者はアップストリームに脆弱性を報告するよう奨励されます。緊急またはクリティカルな問題などのケースバイケースで、GitLab は、報告者に透明性を保ち、元の報告者がクレジットされることを確認しながら、セキュリティ問題をアップストリームに積極的に報告する場合があります。ただし、GitLab チームメンバーは、バグバウンティ関連の提出から観察された独自の手法を、影響を受ける可能性のある無関係な第三者に再適用することはありません。

第三者ソフトウェアの脆弱性は、[HackerOne ポリシー](https://hackerone.com/gitlab?type=team)に記載されているとおり、以下のルールに従って受け入れられます。
報告には、パッチがまだ利用できない新しい脆弱性が含まれている、または

- パッチが 30 日以上利用可能である。
- GitLab への影響を示す明確で動作する PoC がある。
- GitLab への Critical または High の影響がある。

これには、第三者ソフトウェアおよびサービスのウェブサイトは含まれず、依存関係とパッケージソフトウェアのみが含まれます。

### HackerOne プロセスの FAQ とトラブルシューティング

#### H1 報告を誤ってインポートしたらどうすればよいですか?

関連性のないまたは実行不可能な (例: スコープ外、informative、または重複) H1 報告を誤ってインポートした場合:

1. 結果として作成された Issue をクローズし、報告が誤ってインポートされたことを示すコメントを残します。
1. 関連する CVE リクエスト Issue をクローズし、誤って作成されたことも記載します。
1. 関連する HackerOne bug bounty council スレッドで、誤ったインポートを記載し、自動的に作成されたコメントに ❌ を追加し、スレッドを resolve します。

#### CVE Issue が自動的に作成されたが CVE が発行されない状況はどう処理しますか?

CVE リクエスト Issue が自動的に作成されたが CVE が発行されない場合:

- なぜ CVE が発行されないのかを説明するコメントを CVE リクエスト Issue に追加します。
- CVE リクエスト Issue をクローズします。

#### 重複の H1 報告をインポートしたらどうなりますか?

- Issue と関連する CVE リクエストまたは bug bounty council スレッドをクローズします。
- 報告が重複であるため Issue と bug bounty council スレッドをクローズしているとコメントします。

#### HackerOne 報告を再現できない場合はどうしますか?

理想的には、報告された脆弱性を検証して再現してから製品チームを巻き込むべきです。
PSIRT が Issue を再現できない場合、製品チームも再現できない可能性が高いです。脆弱性を確実に再現する手順がなければ、根本原因を特定し、意味のある修正を提案し、解決策が問題を完全に解決するかを検証することが困難になります。

- 報告を検証した報告者または H1 triager に、再現手順が不明確または不足している場合は連絡します。
- 最善の判断力を使用します。
- 報告された脆弱性が特に深刻または影響力があるように見えるが、再現が困難な状況では、ピアに助けを求めてください。

#### どの H1 報告が公開されませんか?

GitLab 製品に影響し、CVE が発行されている脆弱性を公開します。

GitLab ソフトウェア製品のソースコードを変更しても解決できない問題の報告で、CVE (CVSS 付き) が発行されないものは、通常公開されません。

#### 報告者が別のスレッドで他の報告について尋ねた場合はどうしますか?

私たちの HackerOne ポリシーには次のように記載されています:

> The only appropriate place to inquire about a HackerOne report's status is on the report itself. Please refrain from submitting your report or inquiring about its status through additional channels including any other unrelated HackerOne report, as this unnecessarily binds resources in the security team.

そのため、報告者が報告を使用して別の報告のステータスについて尋ねた場合、「Common Responses」の `51 - Reminder for asking about other reports` テンプレートを使用して応答します。

### Ultimate ライセンスの授与

3 件以上の有効な報告を行った GitLab 報告者は、最大 5 ユーザーの 1 年間 Ultimate ライセンスの対象となります。[H1 ポリシー](https://gitlab.com/gitlab-com/gl-security/hackerone/configuration/-/blob/master/program-policy.md#gitlab-ultimate-license)のとおり、報告者は自分の Issue の 1 つにコメントしてライセンスをリクエストします。報告者がライセンスをリクエストした場合、以下のステップを取るべきです。

1. 3 件の報告が有効であったことを検証します。これは、`Triaged` または `Resolved` であることを意味します。
1. 3 件の報告が以前のライセンスを取得するために使用されていないことを検証します。
1. 報告が有効でない場合、ライセンスが発行されない理由を説明して H1 で報告者に応答します。
1. 報告が有効である場合、Zendesk Global アカウント (お持ちでない場合は[こちら](../../../../support/internal-support/_index.md#requesting-a-zendesk-light-agent-account)からリクエストできます) を使用してログインし、[Submit a request](https://gitlab-internal.zendesk.com/hc/en-us/requests/new?ticket_form_id=22783840298780) フォームに移動してください:
    - `Choose the reason why you are reaching out to us today` には **L&R Internal Request** デフォルトオプションを保ちます
    - `What category of request?` ではまず **Other** を選択し、次に **Hacker One Reporter license** を選択します
    - `What expiration date should be used?` には、リクエスト日からちょうど 1 暦年後の日付を選択します
    - `What is the contact's name?` には、利用可能であれば報告者のフルネームを使用し、そうでなければ H1 ハンドルを使用します
    - `What is the contact's email?` には、報告者の `[username]@wearehackerone.com` メールアドレスを使用します
1. 関連するライセンス情報を [H1 License Award シート](https://docs.google.com/spreadsheets/d/1qJZ9jfIvQuSU5u4odj4Db_CRKJ_GHegtSZQvJx36FUE/edit)に入力します
1. `20 - Ultimate License Creation` テンプレートを使用して H1 で報告に返信します。

ライセンスは CustomersDot から報告者に送信されます。報告者がライセンスが届いていないと主張する場合、アプリを使用してライセンスを再送信できます。
それが発生した場合、新しいライセンスの作成は避けるべきです。

### 質問?

一般のメンバーは、こちらで私たちのバグバウンティプログラムについて質問できます: [https://gitlab.com/gitlab-com/gl-security/product-security/appsec/hackerone-questions/](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/hackerone-questions/)。このリポジトリは報告と脆弱性を議論または開示する場所では**ありません**ので注意してください。

### HackerOne トリアージチーム GitLab ライセンス

HackerOne トリアージチームのすべてのメンバーは GitLab Ultimate ライセンスにアクセスできます。HackerOne は、ライセンスの更新が必要な時期について毎年通知します。

- [Zendesk ポータル](https://gitlab-internal.zendesk.com/hc/en-us/requests/new?ticket_form_id=22783840298780)にアクセスします
  - `Choose the reason why you are reaching out to us today` には **L&R Internal Request** デフォルトオプションを保ちます
  - `What category of request?` ではまず **Other** を選択し、次に **Hacker One Reporter license** を選択します
  - `What expiration date should be used?` には、リクエスト日からちょうど 1 暦年後の日付を選択します
  - `What is the contact's name?` には "HackerOne analysts" を使用します
  - `What is the contact's email?` には `analysts@h1triage.com` を使用します

- 説明には、以下を貼り付けます:

```text
A new license is needed for our HackerOne Triage+ team. This team helps us triage HackerOne reports and will need a license with 50 users each. They need an ultimate license to validate reports affecting any feature of the product.

The license should be sent to: analysts@h1triage.com

Company: HackerOne Inc.

License type: Ultimate

Number of users for each license: 50

License duration: 1 year
```
