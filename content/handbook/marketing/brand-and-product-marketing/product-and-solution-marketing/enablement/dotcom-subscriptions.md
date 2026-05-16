---
title: "GitLab.com サブスクリプション"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/enablement/dotcom-subscriptions/
upstream_sha: 072f834e2cd849e6ac3cfa985e4eb1249dd62cd6
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-07-07T23:50:04+00:00"
---

## GitLab.com サブスクリプションの仕組み

GitLab.com のサブスクリプションは、Self-managed ライセンスとは少し異なる仕組みになっています。
インストール全体に均等に機能アクセスを付与する Self-managed ライセンスとは異なり、GitLab.com のサブスクリプションは GitLab.com 上の *[ネームスペース](https://docs.gitlab.com/ee/user/group/#namespaces)*（通常はグループ）に適用されます。サブスクリプションが適用されたグループのメンバーは、ライセンスされたネームスペース内であればどこでもその機能を利用できます。たとえば、`BigCorp` が Ultimate ライセンスを持っている場合、サブグループ `BigCorp/Frontend` および `BigCorp/Backend` はそれぞれ Ultimate の機能にアクセスでき、Shared Runner の分単位の共通プールを共有します。

### よくある誤解

1. **誤解**: 私が Ultimate のグループに所属しているなら、私の GitLab.com プロフィールにも「Ultimate」と表示されるはず
   - **実際**: GitLab.com のサブスクリプションはネームスペース単位で適用されるため、個々のユーザーは異なるサブスクリプションタイプを持つ複数のグループに参加できます。たとえば、Free サブスクリプションタイプの個人プロジェクトを持ちながら、（公開されているため）Ultimate 機能を持つオープンソースプロジェクトに参加し、所属企業は Premium サブスクリプションを利用しているという状況があり得ます。
1. **誤解**: サブスクリプションには「ミダスタッチ」のような効果があり、サブスクリプション保持ユーザーが作成したグループやプロジェクトは、そのサブスクリプションレベルの機能を取得する。つまり、Ultimate ユーザーは Ultimate のグループを作成でき、すべてのメンバーが Ultimate 機能を利用できる。
   - **実際**: サブスクリプションは *グループネームスペースにのみ* 適用でき、そのネームスペース内に作成されるすべてのアイテムがサブスクリプションレベルの機能を受け取ります。
   - **実際**: グループネームスペースに招待されたすべてのユーザーは、**そのグループ内** のサブグループおよびプロジェクトで作業しているときに *のみ* そのサブスクリプションの機能を利用できます。
   - **実際**: ユーザーアカウント（個人ネームスペースとも呼ばれます）は、デフォルトで **Free プラン** になります。個人ネームスペース内に作成されたグループ、サブグループ、プロジェクトもすべて **Free プラン** になります。
   - **実際**: *2020 年 11 月 17 日以降、GitLab は個人ネームスペース向けの新規サブスクリプションを提供していません。*
1. **誤解**: ライセンスキーがメールで送られてきて、GitLab.com の UI のどこかに適用する
   - **実際**: サブスクリプションは、リンクされた GitLab.com アカウントを通じて、https://customers.gitlab.com で管理・適用されます
1. **誤解**: 経理部の誰かが購入したので、そのサブスクリプションを実際に利用するチームに引き渡せる
   - **実際**: サブスクリプションは、グループ内で `Owner` 権限を持つ GitLab.com アカウントによって管理されます
1. **誤解**: GitLab.com にアカウントを設定する前にサブスクリプションを購入しておくべき
    - **実際**: どちらの順序でも構いません。多くの場合、購入前に .com 上で設定を済ませる方が容易ですが、SAML を設定したい場合は例外です。
1. **誤解**: サブグループに異なるサブスクリプションレベルを適用できる
    - **実際**: サブスクリプションはトップレベルグループに適用されます。サブグループはトップレベルグループからライセンス（および Shared Runner の分単位）を継承します。
1. **誤解**: 自分の個人 Runner で実行されたジョブも含めて、すべてのジョブで分単位がグループから差し引かれる
    - **実際**: Runner の分単位は、GitLab.com の Shared Runner で実行されたジョブからのみ差し引かれます。共有分単位に影響を与えることなく、プロジェクトまたはグループごとに自分専用の Runner をセットアップできます。

### トライアル

1. トライアルは、ユーザーがトライアルを適用したいグループの Settings ページに移動して開始する必要があります。
1. 執筆時点（2019-06-05）では、Premium のトライアルは一般公開されていません。[サポートはリクエストに応じてトライアルを手動でダウングレードできます](/handbook/support/internal-support/#common-requests)
1. 執筆時点（2019-06-05）では、[購入の前にトライアルを手動でダウングレードする必要があります。](https://gitlab.com/gitlab-org/customers-gitlab-com/issues/482)
1. [サポートはトライアルには **含まれません**](https://about.gitlab.com/support/#trials-support) [この Issue](https://gitlab.com/gitlab-com/sales/issues/302) にご参加ください

### 内部ネームスペース

内部ネームスペース向けの GitLab サブスクリプションは IT Operations チームが管理しています。内部グループまたは内部プロジェクトへのサブスクリプションをリクエストするには、[個別アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/#individual-or-bulk-access-request) を提出してください。

## 営業支援付き購入で Support Team が遭遇する一般的な問題

1. 新規顧客
   - サポートチームは、Zendesk で営業支援付きクライアントから、グループの設定方法、追加ユーザーの追加方法、なぜサブスクリプションがユーザーではなくグループに適用されるのか、権限に関する質問など、基本的な質問のチケットを受け取ることがあります。サポートは該当するドキュメントを案内して質問に対応します。
   - 顧客は通常、CustomersDot でアカウントを作成しても GitLab.com 上のアカウントは作成されないこと、CustomersDot アカウントを GitLab.com アカウントにリンクする方法を把握していません。
1. アップグレード／ダウングレード
   - 現在、顧客がセルフサービスでサブスクリプションをアップグレード／ダウングレードする方法はないため、これらのリクエストはすべて Zendesk のキューを通じて営業チームに渡す必要があります。
   - リクエストは、件数が多い場合や、セールスにチケットを送る際の情報が不足している場合に遅延することがあります。
1. True-up（追加課金）への対応
   - サポートチームは、サブスクリプション更新前に True-up を精算することに関する問題について、Zendesk で営業支援付きクライアントからチケットを受け取ることがあります。
   - 例: 顧客が `2020-03-04` 開始、`2021-03-04` 終了で `39` Premium シートのライセンスを購入したとします。ライセンス期間中に顧客が追加ユーザーを増やし、`112 Users over license`／`True-up` が発生しました。これが SFDC 上で True-up として課金されると、新しいライセンスには現在の期間で追加ユーザーが含まれないため、顧客は `39` シート＋ `112` の True-up というライセンス状態になり、これはシステムにアップロードできません。なぜなら現時点で `39 + 112` = `151` の課金対象ユーザーがシステムに存在するからです。
   - 顧客が `Users over license`／`True-ups` に対処したい場合は、[Quarterly Self-Managed Seat Reconciliation & Billing](https://gitlab.com/groups/gitlab-org/-/epics/2747) に記載されているように、ライセンスへの `Add-on users` として課金されるべきです。
1. Add-ons ユーザーへの対応
   - True-up とは対照的に、顧客が更新まで残り数週間しかない時点で `Add-on users` を購入する場合、`Users over license`／`True-ups` は更新時にまとめて精算してください。
   - ライセンスの有効期限まで数週間しか残っていない時点で `Add-on users` の購入を支援すると、購入処理後にエラーライセンスが発生してしまいます。既存ライセンスのサービス期間、購入処理にかかる時間、顧客がライセンスをアップロードするのにかかる時間を考慮してください。

## 顧客の成功を後押しする方法

新しいプラットフォームでユーザーやシステム管理者を支援する最良の方法は、質問が出てきたときに必要となるリソースを彼らに提供することです。販売後のオンボーディングプロセスにおいて、ユーザー／管理者は GitLab からサブスクリプションに関する重要な情報を含むメールを受け取ります。これを強調し、簡単にアクセスできる場所に保存しておくよう促してください。
以下のリンクの多くはメールに含まれていますが、それぞれのリソースをユーザー／管理者と一緒に確認しておくと役立ちます。

1. [GitLab ドキュメント](https://docs.gitlab.com/ee/)
1. [管理者向けドキュメント](https://docs.gitlab.com/ee/administration/index.html)（self-managed のみ）
1. [サブスクリプションのセットアップと管理](https://docs.gitlab.com/ee/subscriptions/index.html)
1. [ライセンスとサブスクリプションの FAQ](https://about.gitlab.com/pricing/licensing-faq/)
1. [ライセンスのアップロード](https://docs.gitlab.com/ee/administration/license.html#uploading-your-license)（self-managed のみ）
1. プランごとに利用可能な機能: [GitLab.com](https://about.gitlab.com/pricing/feature-comparison/) ＆ [Self-Managed](https://about.gitlab.com/pricing/feature-comparison/)
1. [サポートポータル](https://support.gitlab.com/hc/en-us)
1. [サポートに関する声明](https://about.gitlab.com/support/statement-of-support/)

**スムーズなスタートのためのその他のベストプラクティス**

1. このページでは、GitLab.com と Self-Managed の機能の違いについて説明しています。疑問がある場合は、見込み客にとって重要な特定の機能／機能性が利用可能であると約束する前に、私たちに気軽にお尋ねください。このような質問については、Slack の [#support_gitlab_com](https://gitlab.slack.com/messages/C4XFU81LG) または [#support_self-managed](https://gitlab.slack.com/messages/C4Y5DRKLK) チャンネルでご連絡ください。
1. 新しいユーザー／管理者には、皆さんを仲介として使うのではなく、サポート上の問題を [サポートポータル](https://support.gitlab.com/hc/en-us) から直接私たちに送るよう必ず強調してください。これにより、最も迅速かつ包括的なサポートを提供できます。
1. ユーザー／管理者の代わりに何かを送信する必要が生じた場合は、サポートポータル／Zendesk からチケットを送信しないでください。代わりに [internal-requests](https://gitlab.com/gitlab-com/support/internal-requests/issues) で Issue を作成してください。
1. GitLab.com については、ユーザーが GitLab.com アカウントと [CustomersDot](https://customers.gitlab.com/customers/sign_in) のリンク方法、グループとサブスクリプションの紐付け方を理解していることを確認してください。手順については [サブスクリプション管理ページ](https://docs.gitlab.com/ee/subscriptions/index.html) をご覧ください。

## GitLab.com と Self-Managed サブスクリプションの重要な違い

[料金ページ](https://about.gitlab.com/pricing/) には「GitLab.com に関するよくある質問」のセクションがあり、「GitLab.com に適用されない機能は何ですか？」に詳細に回答しています。主なハイライトをいくつか挙げます:

1. 機能の利用可否（[SAML](https://docs.gitlab.com/ee/integration/saml.html)/[LDAP](https://docs.gitlab.com/ee/administration/auth/ldap/index.html) は Free に対し、[SAML SSO](https://docs.gitlab.com/ee/user/group/saml_sso/) は Premium）。
1. アクセス制御: 顧客が GitLab インスタンスの管理者となる vs. GitLab.com ではグループのオーナーになる
1. ログ情報と監査: 制限なくアクセス可能 vs. GitLab.com ではアクセス不可（質問に対応するためにサポート／セキュリティと協力可能）

   - GitLab.com では、利用するメールドメインに関係なく、各ユーザーは個人として「契約に署名している」（利用規約、プライバシーポリシーなど）状態です。そのため、ユーザーの契約違反となるため、雇用主に個人を識別できる情報（メールアドレスやログ情報など）を提供することはできません。

1. インスタンス全体の設定: カスタム設定可能 vs. GitLab.com の全ユーザーで同じ設定
1. インフラストラクチャ: どこでも自分で管理 vs. GitLab が HA アーキテクチャ、インスタンスレベルのバックアップ／リカバリ、アップグレードを管理（米国を拠点）
