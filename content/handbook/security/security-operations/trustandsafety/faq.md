---
title: "Trust & Safety Team のよくある質問"
upstream_path: /handbook/security/security-operations/trustandsafety/faq/
upstream_sha: "ab93800e4c241789ac67785899fa20ffa1eb0854"
translated_at: "2026-11-05T12:18:14.793826+00:00"
translator: claude
stale: false
lastmod: "2026-11-04T20:19:30+01:00"
---

## 概要 {#overview}

以下はよくある質問のリストです。

### アカウント復元 {#account-reinstatements}

{{% details summary="アカウントがブロックされた場合はどうすればよいですか？" %}}

1. ![ブロックされたアカウント](/images/security/security-operations/trustandsafety/Account_blocked.png)
1. [GitLab サポート](https://support.gitlab.com/hc/en-us/requests/new)でアカウント復元リクエストをオープンできます。
   - `GitLab.com (SaaS) user accounts and login issues` を選択し、フォームに入力してください。
1. サポートチームからのフィードバックを待ちます。
{{% /details %}}

### DMCA リクエスト {#dmca-requests}

{{% details summary="DMCA リクエストを受け取り、アカウントがブロックされましたか？" %}}

1. アカウントに対して DMCA リクエストを受け取った場合、以下のいずれかを行うことができます。
   - リクエストを確認し、反論通知を提出するかどうかを判断する。
   - 反論通知を提出したい場合は、`GitLab.com 上の知的財産` ページを参照してください。
   - あるいは、即座にアカウントから著作権コンテンツを削除することに同意することもできます。
{{% /details %}}

### 商標リクエスト {#trademark-requests}

{{% details summary="商標リクエストを受け取り、アカウントがブロックされました" %}}

1. 商標削除リクエストを受け取った場合、以下のいずれかを行うことができます。
   - 報告された商標を使用する権利を所有していることを証明する書類を提出することに同意する。
   - あるいは、アカウントから商標コンテンツを速やかに削除することに同意することもできます。
{{% /details %}}

### 報告またはブロックされたアカウント {#reported-or-blocked-accounts}

{{% details summary="アカウントが不正利用で報告されました。何ができますか？" %}}

1. アカウントがブロックされた場合は、引き続き GitLab サポートチームに連絡してアカウントを復元してもらってください。
{{% /details %}}

{{% details summary="理由なくアカウントがブロックされました" %}}

1. アカウントがブロックされたことに気付いた場合、以下が可能です；
    - GitLab サポートに連絡して、ブロックの解除に関する詳細情報を取得する。
{{% /details %}}

{{% details summary="サインアップ直後にアカウントがブロックされました" %}}

1. サインアップ直後にアカウントがブロックされた場合、以下が可能です；
   - GitLab サポートに連絡して、ブロックの解除に関する詳細情報を取得する。
{{% /details %}}

### セキュリティ研究 {#security-research}

{{% details summary="セキュリティ研究ツールをホストできますか？" %}}
GitLab.com サービスを利用して悪意のある実行ファイルを配信したり、攻撃インフラとして利用したりすることは、[GitLab Website Terms of Use](https://about.gitlab.com/terms/)（**第 3 条「ウェブサイト訪問者の責任」**） で禁止されています。

ただし、研究目的でこのような技術的詳細を入手できるようにすることが、より広いコミュニティに利益をもたらす可能性があることは理解しています。そのため、コンテンツが当社専用の `GitLab.com での不正利用` ページに記載された基準を満たす場合、許可されます。
{{% /details %}}

### セキュリティテスト {#security-testing}

{{% details summary="GitLab.com 上でセキュリティテストを実行できますか？" %}}
セキュリティ問題、特に他者のプライバシーを侵害する可能性のあるものを調査する際には、ユーザーのプライバシーを尊重するため、テストアカウントのみを使用する必要があります。他のユーザーの非公開情報にアクセスしようとする試み、GitLab のユーザーに悪影響を及ぼす可能性のあるアクションの実行、または GitLab の運用を妨害する行為は、アカウントのブロックにつながります。

GitLab.com 上で支障を引き起こす可能性のある、または当社のウェブサイト利用規約に違反する可能性のあるセキュリティまたはその他のテストは、ご自身の GitLab インストール上で自由に研究できます。GitLab はオープンコア企業であり、gitlab.com を動かすソースコードは `https://gitlab.com/gitlab-org/gitlab-foss` および `https://gitlab.com/gitlab-org/gitlab` で入手可能です。脆弱性の研究のために、ご自身のスタンドアロンインスタンスをインストールすることを推奨します。ご自身の GitLab インストールに対する脆弱性を示すスクリーンキャプチャ、ログ、ビデオを推奨します。

支障を引き起こす活動の例としては、以下が含まれますがこれらに限定されません。

1. ポートスキャン
1. 侵入の試み
1. サービス拒否攻撃

GitLab.com 上でテストを行う場合、`@wearehackerone.com` のアドレスをテスト用の gitlab.com ユーザーアカウントに関連付ける必要があります。別のアカウントが必要な場合は、エイリアスを使用できます。これにより、テストを他の形式の不正利用と区別し、アカウントをブロックする決定の判断材料に役立てることができます。これは免責を提供するものではなく、[Rules of engagement](https://hackerone.com/gitlab?type=team)に常に従う必要があることに注意してください。
{{% /details %}}

### 不正利用の報告 {#reporting-abuse}

{{% details summary="誰かが私のアカウントにスパムを送っています、何をすべきですか？" %}}

1. ユーザーアカウントが `Issues`、`Snippets`、または `Merge Requests` にスパムを送っている場合、以下が可能です；
   1. コメントの右上にある **ドロップダウン** メニューを使用してコメントを報告する。
   1. 次に、`report abuse to gitlab admin` を選択し、報告を完了する。
       - 私たちのチームのメンバーが報告を確認します。
{{% /details %}}

{{% details summary="どのように不正利用を報告できますか？" %}}

1. ユーザーが生成した不正利用を GitLab に報告するさまざまな方法があります。
    1. 報告するユーザープロフィールの右上にある `Report Abuse` ボタンを使用する。
    1. `comments`、`Merge Requests`、Issue の `Report abuse to gitlab admin` ドロップダウンメニューを使用する。
    1. より詳細な情報を提出したい場合は、いつでも abuse@gitlab.com にメールを送信できます。私たちのチームのメンバーが報告を確認します。
{{% /details %}}

{{% details summary="誰かが私の著作権物を使用しています、何をすべきですか？" %}}

1. 誰かが十分な権利なくあなたの著作権物を使用している場合、以下が可能です；
    1. 完全な DMCA 通知を dmca@gitlab.com に提出する。
    1. 必要な情報の詳細は当社の `GitLab.com 上の知的財産` ページで確認できます。
{{% /details %}}

{{% details summary="GitLab は著作権または商標リクエストをどのように扱いますか？" %}}

1. 私たちは他者の知的財産権を真剣に受け止めており、ユーザーにも同様であることを求めます。デジタルミレニアム著作権法 (DMCA) は、著作権侵害の主張に対処するためのプロセスを確立しました。著作権を所有している、または著作権所有者に代わって行動する権限があり、第三者が GitLab のサービス上またはサービスを通じてその素材を侵害しているという主張を報告したい場合は、DMCA の最低要件を満たす通知を dmca@gitlab.com に送信してください。私たちは適切な措置を取ります。
1. 名前空間、所有権、商標に関する紛争は DMCA によって規定されていません。これらの紛争は関係者によって解決される必要があります。GitLab はこれらの紛争において、決して仲裁人または仲介者として行動することはなく、適切な法的命令なしには一切の行動を取りません。
{{% /details %}}

### 既存の名前空間 {#existing-namespaces}

{{% details summary="既存の名前空間を使用したいのですが、その権利を主張できますか？" %}}

1. GitLab.com の名前空間は先着順で利用可能であり、予約することはできません。いかなるブランド、企業、団体、個人も GitLab.com 上のいかなる名前空間の権利も所有しておらず、商標を根拠に権利を主張することはできません。「GreatCompany」というブランドを所有していても、「gitlab.com/GreatCompany」という名前空間を所有していることにはなりません。名前空間と商標に関するいかなる紛争も、関係者によって解決される必要があります。GitLab サポートはこれらの紛争において、決して仲裁人または仲介者として行動することはなく、適切な法的命令なしには一切の行動を取りません。
{{% /details %}}

### 詳細な不正利用報告 {#detailed-abuse-reports}

{{% details summary="複数のアカウントまたは種類の不正利用を報告したいのですが、どうすればよいですか？" %}}

1. 複数のアカウントまたは URL を報告したい場合は、abuse@gitlab.com にこの情報を提出することをお勧めします。
    - メールに `gitlab.com` の URL と、報告する不正利用の種類の詳細な説明を必ず含めてください。
{{% /details %}}

### Report Abuse ボタン {#report-abuse-buttons}

{{% details summary="`Report Abuse` ボタンまたは `Report Abuse ドロップダウンを押すと何が起こりますか？" %}}

1. `Report Abuse` または `Report Abuse to gitlab admin` ボタンを使用すると、不正利用または支障を引き起こすとみなされる活動についてユーザーを直接報告できるウィンドウが開きます。
1. 私たちのチームのメンバーがあなたの報告を確認し、活動またはコンテンツが当社の利用規約に違反している場合は適切な措置を取ります。
{{% /details %}}

{{% details summary="`Report Abuse` フォームをどのように使用しますか？" %}}

1. `Report Abuse` フォームは、報告する不正利用の種類に関する情報を含めることができるテキストボックスで構成されています。
1. gitlab.com 上のさまざまな場所で不正利用の報告ボタンを使用できます。以下のいずれかを行えます。
1. ユーザーアカウントを報告する
![ユーザーの報告](/images/security/security-operations/trustandsafety/report_user.png)
1. コメント/スレッドを報告する
![コメントの報告](/images/security/security-operations/trustandsafety/Report_Comment.png)
1. Issue を報告する
![Issue の報告](/images/security/security-operations/trustandsafety/Report_Issue.png)
1. マージリクエストを報告する
![マージリクエストの報告](/images/security/security-operations/trustandsafety/Report_MR.png)
1. `abuse@gitlab.com` にメールを送る
   - より詳細な報告については、`abuse@gitlab.com` にメールを送ることができます。
{{% /details %}}

### VPN の使用 {#using-a-vpn}

{{% details summary="VPN を使用してアカウントにアクセスできますか？" %}}

1. VPN の使用は許可されていますが、貿易制限地域から GitLab.com にアクセスするために VPN を使用すると、アカウントがブロックされる可能性があります。
{{% /details %}}

### TOR ノード {#tor-nodes}

{{% details summary="TOR 出口ノードを使用してアカウントを使用できますか？" %}}

1. TOR 出口ノードは推奨されません。これにより、アカウントがブロックされたり、プラットフォームの使用に問題が発生したりする可能性があります。
{{% /details %}}
