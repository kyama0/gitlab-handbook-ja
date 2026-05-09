---
title: "Trust & Safety チーム よくある質問"
upstream_path: /handbook/security/security-operations/trustandsafety/faq/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T03:09:44Z"
translator: claude
stale: false
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## 概要

以下はよくある質問のリストです。

### アカウント復元

{{% details summary="アカウントがブロックされた場合はどうすればよいですか？" %}}

1. ![Account_blocked](/images/security/security-operations/trustandsafety/Account_blocked.png)
1. [GitLabサポート](https://support.gitlab.com/hc/en-us/requests/new) でアカウント復元リクエストをオープンできます。
   - `GitLab.com (SaaS) user accounts and login issues` を選択し、フォームに入力してください。
1. サポートチームからのフィードバックを待ちます。
{{% /details %}}

### DMCAリクエスト

{{% details summary="DMCAリクエストを受け取り、アカウントがブロックされましたか？" %}}

1. アカウントに対してDMCAリクエストを受け取った場合、以下のいずれかを行うことができます。
   - リクエストを確認し、反論通知を提出するかどうかを判断する。
   - 反論通知を提出したい場合は、`Intellectual property on gitlab.com` ページを参照してください。
   - あるいは、即座にアカウントから著作権コンテンツを削除することに同意することもできます。
{{% /details %}}

### 商標リクエスト

{{% details summary="商標リクエストを受け取り、アカウントがブロックされました" %}}

1. 商標削除リクエストを受け取った場合、以下のいずれかを行うことができます。
   - 報告された商標を使用する権利を所有していることを証明する書類を提出することに同意する。
   - あるいは、アカウントから商標コンテンツを速やかに削除することに同意することもできます。
{{% /details %}}

### 報告またはブロックされたアカウント

{{% details summary="アカウントが不正利用で報告されました。何ができますか？" %}}

1. アカウントがブロックされた場合は、引き続きGitLabサポートチームに連絡してアカウントを復元してもらってください。
{{% /details %}}

{{% details summary="理由なくアカウントがブロックされました" %}}

1. アカウントがブロックされたことに気付いた場合、以下が可能です；
    - GitLabサポートに連絡して、ブロックの解除に関する詳細情報を取得する。
{{% /details %}}

{{% details summary="サインアップ直後にアカウントがブロックされました" %}}

1. サインアップ直後にアカウントがブロックされた場合、以下が可能です；
   - GitLabサポートに連絡して、ブロックの解除に関する詳細情報を取得する。
{{% /details %}}

### セキュリティ研究

{{% details summary="セキュリティ研究ツールをホストできますか？" %}}
GitLab.comサービスを利用して悪意のある実行ファイルを配信したり、攻撃インフラとして利用したりすることは、[GitLab Website Terms of Use](https://about.gitlab.com/terms/) (**Section 3, "Responsibility of Website Visitors"**) で禁止されています。

ただし、研究目的でこのような技術的詳細を入手できるようにすることが、より広いコミュニティに利益をもたらす可能性があることは理解しています。そのため、コンテンツが当社専用の `Abuse on gitlab.com` ページに記載された基準を満たす場合、許可されます。
{{% /details %}}

### セキュリティテスト

{{% details summary="GitLab.com上でセキュリティテストを実行できますか？" %}}
セキュリティ問題、特に他者のプライバシーを侵害する可能性のあるものを調査する際には、ユーザーのプライバシーを尊重するため、テストアカウントのみを使用する必要があります。他のユーザーの非公開情報にアクセスしようとする試み、GitLabのユーザーに悪影響を及ぼす可能性のあるアクションの実行、またはGitLabの運用を妨害する行為は、アカウントのブロックにつながります。

GitLab.com上で支障を引き起こす可能性のある、または当社のWebsite Terms of useに違反する可能性のあるセキュリティまたはその他のテストは、ご自身のGitLabインストール上で自由に研究できます。GitLabはオープンコア企業であり、gitlab.comを動かすソースコードは `https://gitlab.com/gitlab-org/gitlab-foss` および `https://gitlab.com/gitlab-org/gitlab` で入手可能です。脆弱性の研究のために、ご自身のスタンドアロンインスタンスをインストールすることを推奨します。ご自身のGitLabインストールに対する脆弱性を示すスクリーンキャプチャ、ログ、ビデオを推奨します。

支障を引き起こす活動の例としては、以下が含まれますがこれらに限定されません。

1. ポートスキャン
1. 侵入の試み
1. サービス拒否攻撃

GitLab.com上でテストを行う場合、`@wearehackerone.com` のアドレスをテスト用のgitlab.comユーザーアカウントに関連付ける必要があります。別のアカウントが必要な場合は、エイリアスを使用できます。これにより、テストを他の形式の不正利用と区別し、アカウントをブロックする決定の判断材料に役立てることができます。これは免責を提供するものではなく、[Rules of engagement](https://hackerone.com/gitlab?type=team) に常に従う必要があることに注意してください。
{{% /details %}}

### 不正利用の報告

{{% details summary="誰かが私のアカウントにスパムを送っています、何をすべきですか？" %}}

1. ユーザーアカウントが `Issues`、`Snippets`、または `Merge Requests` にスパムを送っている場合、以下が可能です；
   1. コメントの右上にある **ドロップダウン** メニューを使用してコメントを報告する。
   1. 次に、`report abuse to gitlab admin` を選択し、報告を完了する。
       - 私たちのチームのメンバーが報告を確認します。
{{% /details %}}

{{% details summary="どのように不正利用を報告できますか？" %}}

1. ユーザーが生成した不正利用をGitLabに報告するさまざまな方法があります。
    1. 報告するユーザープロフィールの右上にある `Report Abuse` ボタンを使用する。
    1. `comments`、`Merge Requests`、Issueの `Report abuse to gitlab admin` ドロップダウンメニューを使用する。
    1. より詳細な情報を提出したい場合は、いつでも abuse@gitlab.com にメールを送信できます。私たちのチームのメンバーが報告を確認します。
{{% /details %}}

{{% details summary="誰かが私の著作権物を使用しています、何をすべきですか？" %}}

1. 誰かが十分な権利なくあなたの著作権物を使用している場合、以下が可能です；
    1. 完全なDMCA通知を dmca@gitlab.com に提出する。
    1. 必要な情報の詳細は当社の `Intellectual Property on gitlab.com` ページで確認できます。
{{% /details %}}

{{% details summary="GitLabは著作権または商標リクエストをどのように扱いますか？" %}}

1. 私たちは他者の知的財産権を真剣に受け止めており、ユーザーにも同様であることを求めます。デジタルミレニアム著作権法 (DMCA) は、著作権侵害の主張に対処するためのプロセスを確立しました。著作権を所有している、または著作権所有者に代わって行動する権限があり、第三者がGitLabのサービス上またはサービスを通じてその素材を侵害しているという主張を報告したい場合は、DMCAの最低要件を満たす通知を dmca@gitlab.com に送信してください。私たちは適切な措置を取ります。
1. 名前空間、所有権、商標に関する紛争はDMCAによって規定されていません。これらの紛争は関係者によって解決される必要があります。GitLabはこれらの紛争において、決して仲裁人または仲介者として行動することはなく、適切な法的命令なしには一切の行動を取りません。
{{% /details %}}

### 既存の名前空間

{{% details summary="既存の名前空間を使用したいのですが、それを請求できますか？" %}}

1. GitLab.comの名前空間は先着順で利用可能であり、予約することはできません。いかなるブランド、企業、団体、個人もGitLam.com上のいかなる名前空間の権利も所有しておらず、商標に基づいて請求することはできません。「GreatCompany」というブランドを所有していても、「gitlab.com/GreatCompany」という名前空間を所有していることにはなりません。名前空間と商標に関するいかなる紛争も、関係者によって解決される必要があります。GitLabサポートはこれらの紛争において、決して仲裁人または仲介者として行動することはなく、適切な法的命令なしには一切の行動を取りません。
{{% /details %}}

### 詳細な不正利用報告

{{% details summary="複数のアカウントまたは種類の不正利用を報告したいのですが、どうすればよいですか？" %}}

1. 複数のアカウントまたはURLを報告したい場合は、abuse@gitlab.com にこの情報を提出することをお勧めします。
    - メールに `gitlab.com` のURLと、報告する不正利用の種類の詳細な説明を必ず含めてください。
{{% /details %}}

### Report Abuseボタン

{{% details summary="`Report Abuse` ボタンまたは `Report Abuse` ドロップダウンを押すと何が起こりますか？" %}}

1. `Report Abuse` または `Report Abuse to gitlab admin` ボタンを使用すると、不正利用または支障を引き起こすとみなされる活動についてユーザーを直接報告できるウィンドウが開きます。
1. 私たちのチームのメンバーがあなたの報告を確認し、活動またはコンテンツが当社の利用規約に違反している場合は適切な措置を取ります。
{{% /details %}}

{{% details summary="`Report Abuse` フォームをどのように使用しますか？" %}}

1. `Report Abuse` フォームは、報告する不正利用の種類に関する情報を含めることができるテキストボックスで構成されています。
1. gitlab.com上のさまざまな場所で報告不正利用ボタンを使用できます。以下のいずれかを行えます。
1. ユーザーアカウントを報告する
![Report user](/images/security/security-operations/trustandsafety/report_user.png)
1. コメント/スレッドを報告する
![Report Comment](/images/security/security-operations/trustandsafety/Report_Comment.png)
1. Issueを報告する
![Report Issue](/images/security/security-operations/trustandsafety/Report_Issue.png)
1. マージリクエストを報告する
![Report MR](/images/security/security-operations/trustandsafety/Report_MR.png)
1. `abuse@gitlab.com` にメールを送る
   - より詳細な報告については、`abuse@gitlab.com` にメールを送ることができます。
{{% /details %}}

### VPNの使用

{{% details summary="VPNを使用してアカウントにアクセスできますか？" %}}

1. VPNの使用は許可されていますが、貿易制限地域からGitLab.comにアクセスするためにVPNを使用すると、アカウントがブロックされる可能性があります。
{{% /details %}}

### TORノード

{{% details summary="TOR出口ノードを使用してアカウントを使用できますか？" %}}

1. TOR出口ノードは推奨されません。これにより、アカウントがブロックされたり、プラットフォームの使用に問題が発生したりする可能性があります。
{{% /details %}}
