---
title: "再現可能な脆弱性"
description: "GitLab、そのセキュリティプロセス、および過去のセキュリティ脆弱性について学びます"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/reproducible-vulnerabilities/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
---

## はじめに

GitLab は[修正したセキュリティバグについて透明性を保っています](https://about.gitlab.com/blog/2022/02/17/how-gitlab-handles-security-bugs/)。この透明性は、学習、スキル向上、および InfoSec 業界への参入の機会を生み出します。

- 誰でも、実際の製品におけるセキュリティ問題の特定や修正の方法を学ぶことができます。
- AppSec の求職者や新しいチームメンバーは、私たちが直面しているバグやプロセスについての洞察を得られます。

再現可能な脆弱性は、希望する難易度に応じて内容を調整できるよう、展開可能なヒントセクションで構成されています。私たちは誰にとっても親しみやすいものにしたいと考えています。

このような分野に興味があれば、ぜひ[セキュリティチームの求人をチェックして](https://about.gitlab.com/jobs/)、[HackerOne の Bug Bounty プログラムに参加してください](https://hackerone.com/gitlab)（実際にお金がもらえます！）。

## 重要情報と FAQ

### 警告

既知の脆弱性を持つソフトウェアをインストールすることには、本質的なリスクが伴います。信頼できない接続を許可しないでください。理想的には、脆弱なインスタンスはローカル、または自宅 IP のみに許可リスト化されたクラウド環境で実行してください。練習用のインスタンスは、使用が終わったら削除してください。

### このページは攻撃者を助けるのではないか？

それはこのページの意図ではありません。このページの意図は、セキュリティについて学ぶことに関心を持つチームメンバーやコミュニティの方々の双方を教育することです。

GitLab の開示ポリシーは、修正済みの脆弱性を 30 日後に公開することです。[セキュリティ問題の開示プロセス](https://about.gitlab.com/security/disclosure/)をご覧ください。これらの開示済みの問題には、再現手順、しばしば動画やスクリーンショット、そして問題を修正するコードへのリンクが含まれています。

ここに掲載されているものを含む、開示済みの脆弱性は、すでに[私たちの Issue トラッカー](https://gitlab.com/groups/gitlab-org/-/issues/?sort=updated_desc&state=closed&label_name%5B%5D=bug%3A%3Avulnerability)で公開アクセスが可能です。このページは、それらの公開 Issue にすでに存在する以上の支援や詳細を提供することはありません。

### おかしなものを見つけたら？

例えば不完全な修正など、現在の GitLab のバージョンに依然として影響するセキュリティ問題を発見した場合は、[責任ある開示ポリシー](https://about.gitlab.com/security/disclosure/)の手順に従ってください。

---

## 再現可能な脆弱性

### 15.0 における Stored XSS

GitLab 15.0 において、悪意のあるユーザーが Stored XSS のペイロードを作成できる脆弱性がありました。どうやって行うか考えてみてください。

#### インストール

1. [Docker 版 GitLab のインストール手順](https://docs.gitlab.com/ee/install/docker/index.html)に従います。セットアップによりますが、コマンドはおおよそ次のような形になります。

```shell
sudo docker run --detach \
  --hostname gitlab.example.com \
  --publish 8929:80 --publish 8922:22 \
  --name gitlab15.0.0 \
  --volume $GITLAB_HOME/config:/etc/gitlab \
  --volume $GITLAB_HOME/logs:/var/log/gitlab \
  --volume $GITLAB_HOME/data:/var/opt/gitlab \
  --shm-size 256m \
  gitlab/gitlab-ee:15.0.0-ee.0
```

インストール完了後、`docker exec -it gitlab15.0.0 grep 'Password:' /etc/gitlab/initial_root_password` で `root` 管理者ユーザーのパスワードを取得できます。

1. 攻撃者となるユーザーを登録します
1. 管理者としてサインインし、新しいユーザーを承認します。サインアウトします。
1. 攻撃者としてサインインします
1. 良い狩りを！

#### バグ探し

クロスサイトスクリプティング（XSS）は、攻撃者が定義した JavaScript を被害者が閲覧しているページに注入する攻撃です。これにより、攻撃者は被害者になりすまして、クリック、フォーム送信、データ閲覧、入力内容の監視などを行うことができます。

{{% details summary="ヒント 1 - どこから探し始めるか" %}}
この XSS の脆弱性は、私たちの CRM 機能に存在していました。

> 顧客関係管理 (CRM) を使うと、コンタクト（個人）と組織（企業）のレコードを作成し、それらを Issue に関連付けることができます。

<https://docs.gitlab.com/ee/user/crm/>
{{% /details %}}

{{% details summary="ヒント 2" %}}
1 つ以上の顧客コンタクトフィールドが Stored XSS に対して脆弱でした。
{{% /details %}}

{{% details summary="ヒント 3" %}}
コンタクトに本当の名前を付ける代わりに、JavaScript を入れてみてください。JavaScript を適切にエスケープしていない箇所が見つかりますか？
{{% /details %}}

{{% details summary="ヒント 4" %}}
コンタクトフィールドは `/add_contacts` クイックアクションを使うと、Issue の説明やコメントでプレビューとしてポップアップ表示されます。
{{% /details %}}

{{% details summary="やり方を直接教えてほしい" %}}
私たちの GitLab Issue 上で [cryptopone](https://hackerone.com/cryptopone) によって書かれた再現手順に従ってください: <https://gitlab.com/gitlab-org/gitlab/-/issues/363293>
{{% /details %}}

{{% details summary="さらに踏み込んでみる" %}}
Stored XSS のペイロードを実行できるようになったら、何ができますか？

XSS の被害者が管理者である場合、自分の権限を管理者に昇格させることはできますか？
{{% /details %}}

#### 脆弱性の詳細

{{% details summary="クリックして展開" %}}
> GitLab に、15.0 から 15.0.1 より前のすべてのバージョンに影響する Issue が発見されました。クイックアクションで使われる入力の検証が欠落していたため、攻撃者がコンタクト詳細に HTML を注入することで XSS を悪用できる状態でした。これは高重大度の Issue (`CVSS:3.0/AV:N/AC:L/PR:L/UI:R/S:C/C:H/I:H/A:N`、8.7) です。最新リリースで緩和されており、[CVE-2022-1948](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-1948) が割り当てられています。
>
> 私たちの HackerOne バグバウンティプログラムを通じてこの脆弱性を報告してくれた [cryptopone](https://hackerone.com/cryptopone) に感謝します。
{{% /details %}}

#### 修正

バグを再現できたら、ローカルで修正を試みてください。

それができたら、提案する変更を私たちのパッチと比較してみてください。

{{% details summary="修正" %}}
私たちは、この脆弱性に包括的に対処するために複数のステップを踏みました。

- 次のパッチで姓と名をエスケープしました: <https://gitlab.com/gitlab-org/gitlab/-/commit/e61e9b9434e2198c4c1d5cf6b4531eb4323c3575>
- <https://gitlab.com/gitlab-org/gitlab/-/merge_requests/88419> で、影響を受けるファイルへの後続の変更について AppSec を必須の承認者にしました
- XSS を導入する可能性のある MR を検出してコメントするための SemGrep ルールを <https://gitlab.com/gitlab-com/gl-security/product-security/appsec/sast-custom-rules/-/blob/main/appsec-pings/rules.yml#L65-84> に追加しました
{{% /details %}}

#### リンク

- GitLab Issue: <https://gitlab.com/gitlab-org/gitlab/-/issues/363293>
- パッチ: <https://gitlab.com/gitlab-org/gitlab/-/commit/e61e9b9434e2198c4c1d5cf6b4531eb4323c3575>
- リリース投稿: <https://about.gitlab.com/releases/2022/06/01/critical-security-release-gitlab-15-0-1-released/>
- CVSS とバウンティ: [CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:C/C:H/I:H/A:N](https://gitlab-com.gitlab.io/gl-security/product-security/appsec/cvss-calculator/#vector=CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:C/C:H/I:H/A:N&range=new) (8.7 High / $13,950.00)
- CVE: <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-1948>
- XSS について詳しく学ぶ:
  - <https://owasp.org/www-community/attacks/xss/>
  - <https://portswigger.net/web-security/cross-site-scripting>

### 14.3.5 におけるサービス拒否

14.3.6 より前の GitLab インストールでは、悪意のあるアクターが、細工された Issue、MR、またはコメントを送信することで、サービス拒否攻撃を実行できました。どうやって行うか考えてみてください。

#### インストール

1. [Docker 版 GitLab のインストール手順](https://docs.gitlab.com/ee/install/docker/index.html)に従います。セットアップによりますが、コマンドはおおよそ次のような形になります。

```shell
sudo docker run --detach \
  --hostname gitlab.example.com \
  --publish 8929:80 --publish 8922:22 \
  --name gitlab14.3.5 \
  --volume $GITLAB_HOME/config:/etc/gitlab \
  --volume $GITLAB_HOME/logs:/var/log/gitlab \
  --volume $GITLAB_HOME/data:/var/opt/gitlab \
  --shm-size 256m \
  gitlab/gitlab-ee:14.3.5-ee.0
```

インストール完了後、`docker exec -it gitlab14.3.5 grep 'Password:' /etc/gitlab/initial_root_password` で `root` ユーザーのパスワードを表示できます。このパスワードを使って GitLab インスタンスの root ユーザーにログインできます。

良い狩りを！

#### バグ探し

サービス拒否 (DoS) 攻撃は、Web サイトを他のユーザーが利用できないようにします。通常、これはサーバーが攻撃者のリクエスト処理に忙しすぎて、通常のユーザーに応答する余裕がない場合に発生します。

ローカルで GDK を使う場合は、CPU とメモリのリソースモニターを開き、特に `rails-web` と `rails-background-jobs` のプロセスで異常に高く、持続的な使用率を探してください。Docker コンテナで GitLab を実行している場合は、[`ctop`](https://github.com/bcicen/ctop#docker) のようなツールを試してください。

{{% details summary="ヒント 1 - どこから探し始めるか" %}}
この DoS は、ユーザーコンテンツ（例: Issue の説明やコメント）に関係していました。これらは UI から、または API 経由で作成できます。
{{% /details %}}

{{% details summary="ヒント 2" %}}
この研究者は、GitLab がフロントマターのパースに使っていたコードを読むことで、[正規表現ベースの DoS](https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS) を発見しました。<https://gitlab.com/gitlab-org/gitlab/-/blob/6f10f768c9cc2d131c056289f58519cf9cae79fa/lib/gitlab/front_matter.rb>
{{% /details %}}

{{% details summary="ヒント 3" %}}
「Catastrophic Backtracking」と呼ばれる欠陥を検索してください。
{{% /details %}}

{{% details summary="ヒント 4" %}}
フロントマターの区切り文字の 1 つの後にコンテンツを続けると、何が起こりますか？そのコンテンツの長さが増えるとどうなりますか？プロセスモニターに注目してください。
{{% /details %}}

{{% details summary="やり方を直接教えてほしい" %}}
私たちの GitLab Issue 上で [hashkitten](https://hackerone.com/legit-security) によって書かれた再現手順に従ってください: <https://gitlab.com/gitlab-org/gitlab/-/issues/340449>
{{% /details %}}

#### 脆弱性の詳細

{{% details summary="クリックして展開" %}}
> GitLab CE/EE に、12.10 から 14.3.6 より前、14.4 から 14.4.4 より前、14.5 から 14.5.2 より前のすべてのバージョンに影響する Issue が発見されました。ユーザー入力（ノート、コメントなど）の処理に使われる正規表現が catastrophic backtracking に対して脆弱で、DOS 攻撃を引き起こす可能性がありました。これは中重大度の Issue (`CVSS:3.0/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:L`、4.3) です。最新リリースで緩和されており、[CVE-2021-39933](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-39933) が割り当てられています。
>
> 私たちの HackerOne バグバウンティプログラムを通じてこの脆弱性を報告してくれた [@hashkitten](https://hackerone.com/hashkitten?type=user) に感謝します。
{{% /details %}}

#### 修正

バグを再現できたら、ローカルで修正を試みてください。それから、提案する変更を私たちのパッチと比較してみてください。

{{% details summary="修正" %}}

- フロントマターの正規表現を修正しました: <https://gitlab.com/gitlab-org/gitlab/-/commit/8b30fedf2bea8713bc735638ae63a09f3e4faba1>
- レンダリングパイプラインにタイムアウトを追加しました:
  - <https://gitlab.com/gitlab-org/gitlab/-/merge_requests/102819>
  - <https://gitlab.com/gitlab-org/gitlab/-/merge_requests/104779>
{{% /details %}}

#### リンク

- GitLab Issue: <https://gitlab.com/gitlab-org/gitlab/-/issues/340449>
- リリース投稿: <https://about.gitlab.com/releases/2021/12/06/security-release-gitlab-14-5-2-released/#regular-expression-denial-of-service-via-user-comments>
- CVSS とバウンティ: [CVSS:3.0/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:L](https://gitlab-com.gitlab.io/gl-security/product-security/appsec/cvss-calculator/#vector=CVSS:3.0/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:L&range=old) (4.3 Medium / $610.00 / 旧バウンティ範囲)
- CVE: <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-39933>
- サービス拒否について詳しく学ぶ:
  - <https://owasp.org/www-community/attacks/Denial_of_Service>

<!-- Additional reproducible vulnerabilities go above this line //-->

## コントリビュート

{{% alert color="danger" %}}
コントリビュートは、すでに公開されている情報のみを含めなければなりません。
{{% /alert %}}

このページには誰でもコントリビュートできます——あなたも！右側のサイドバーの「Web IDE で開く」をクリックして始められます。

まず、私たちの[公開済みでクローズされた脆弱性 Issue リスト](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=updated_desc&state=closed&label_name%5B%5D=bug%3A%3Avulnerability&first_page_size=20)、または[セキュリティリリースのブログ投稿](https://about.gitlab.com/releases/categories/releases/)を見て、興味深い公開された脆弱性を見つけてください。最新のセキュリティリリースより*前*のリリースで修正された脆弱性を選んでください。

このページにマージリクエストを開き、`@gitlab-com/gl-security/product-security/appsec` をメンションしてください。次の内容を含めるべきです。

- タイトルと、脆弱性の内容を直接明かさない概要
- 脆弱なバージョンのインストール手順
  - 理想的には、特定のバージョン番号を指定した <https://docs.gitlab.com/ee/install/docker/index.html#install-gitlab-using-docker-engine>
  - より複雑な Issue では、Omnibus Linux パッケージのような特定のインストール方法が必要になる場合があります。
- 段階的に明かされる一連のヒント。これにより、人々は自分でバグを探すことができ、必要に応じて助けを得られます（GitLab は大きな製品であることを覚えておいてください！）。
- 元の HackerOne レポートの再現手順をたどりたい人のための、GitLab Issue へのリンク。
- それを修正した MR へのリンク。

次のテンプレートを使えます。

```markdown
### `Short title goes here`

On `Free/Premium/Ultimate` installations before `X.Y.Z`, a malicious user could `attack type`. See if you can figure out how.

#### Installation

<!--  Steps to install a vulnerable version //-->

#### Bug hunting

{{% details summary="Hint 1 - where to start looking" %}}
<!--  Something that gets people looking in the right place //-->
{{% /details %}}

{{% details summary="Hint 2" %}}
<!--  Another hint. Add as many hints as you want, using already public data. //-->
{{% /details %}}

{{% details summary="Just tell me how" %}}

Follow the steps to reproduce written by [HANDLE](https://hackerone.com/HANDLE) on our GitLab Issue: <https://gitlab.com/gitlab-org/gitlab/-/issues/XXXXXX>

{{% /details %}}

#### Vulnerability Details

{{% details summary="Click to expand" %}}

<!--  Paste the text from the security release post. Adapt if needed. //-->

{{% /details %}}

#### Remediation

Once you've reproduced the bug, have a go at fixing it locally.

Then compare your proposed change to our patch(es).

{{% details summary="The fix" %}}

<!--  Link to the patch, with optional description //-->

{{% /details %}}

#### Links

<!--  Links go here //-->

```
