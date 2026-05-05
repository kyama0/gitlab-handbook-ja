---
title: "CSM とサポートの連携"
upstream_path: /handbook/customer-success/csm/support/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T01:56:09Z"
translator: claude
stale: false
---

CSM 関連のハンドブックページについては、[CSM ハンドブックのホームページ](/handbook/customer-success/csm/)を参照してください。

---

## 目的

顧客に技術サポートを提供するために設計されたシステムやプロセスと CSM がどのように連携するかのプロセスを定義します。

## サポートシステムへの顧客の登録

オンボーディングプロセス中に、CSM は顧客がサポートシステムに正しく登録されていることを確認します。GitLab は [Zendesk](/handbook/support/workflows/zendesk-instances/) というシステムを通じてサポートリクエストを管理しています。GitLab は [GitLab インスタンスの Salesforce と Zendesk を統合](/handbook/support/workflows/zendesk_organizations_and_users_overview/)して、Zendesk へのユーザー登録を容易にしています。この統合はアカウントレベルのデータを同期し、Zendesk チケットにサポートを含む製品購入に関する正確な情報が含まれるようにします。

自動化は存在しますが、CSM は顧客が Zendesk への担当者の完全な登録のための追加手順を確実に踏むようにしなければなりません。具体的には、CSM は顧客と協力して Zendesk アカウント下に特定の Zendesk ユーザーを登録し、顧客の担当者が提出するチケットが GitLab サポートチームの[サービスレベル契約（SLA）](https://about.gitlab.com/support/#gitlab-support-service-levels)に従って処理されるようにする必要があります。

新しいチケットに表示される重要な静的メモを追加してサポートチームにコンテキストを提供するには、[サポートハンドブック](/handbook/support/internal-support/#i-want-to-add-important-information-about-the-organizationuser)を確認して、これを顧客の Zendesk 組織に添付するよう依頼してください。

### CSM がサポートユーザーを追加するための手順

1. SFDC でそのアカウントの sold-to メールアドレスを特定する
1. [サポート連絡先の管理](https://about.gitlab.com/support/managing-support-contacts/#managing-contacts)に記載されている手順に従うよう sold-to メールアドレスにメールを送信する

組織に関連付けられていないユーザーは GitLab サポートにアクセスできません

## サポートチケットのベストプラクティス

GitLab は有料・無料を問わずすべての顧客とユーザーに[さまざまなサポートオプション](https://about.gitlab.com/support/)を提供しています。CSM は顧客のチケットを継続的に確認し、サポートのベストプラクティスについて顧客を教育する必要があります。特に、CSM は顧客がベストプラクティスを満たすチケットを提出していることを確認する必要があります。顧客が[サポートチケットを開く](https://support.gitlab.com/hc/en-us)際には、以下の事項に対応してください:

1. チケットの最初の提出時にできるだけ詳細な情報を提供する
1. Issue の概要（いつ始まったか、頻度、組織への影響など）
   - 再現するための詳細な手順
   - 現在の動作
   - 期待される動作
   - GitLab、そのコンポーネント、依存関係、またはホストされているサービスへの最近の変更は？
   - ログとスクリーンショットを添付する（.doc や .pdf ファイルの添付は避ける）。機密情報を共有していないことを確認するために、[GitLab サポートでの機密情報の取り扱い](https://about.gitlab.com/support/sensitive-information/)をご覧ください。
1. サポートに自分のビジネス時間中のみ回答してほしい場合は、リージョンを選択してください。リージョンを選択すると、SLA はそのビジネス時間内のみになります。それ以外の場合は、「すべてのリージョン」を選択して、グローバルサポートチームから標準の SLA と回答を受け取ってください。詳細については[ガイドライン](https://about.gitlab.com/support/#effect-on-support-hours-if-a-preferred-region-for-support-is-chosen)を参照してください。
1. 最初のチケット提出時に通話を要求することは避けてください。通話に移る前に、チケット内でコミュニケーションを保ち、そこで問題を解決することを試みます。
1. 通話が必要な場合、サポートエンジニアがチケット経由でチームへの通話の招待を送ります。
1. サポートエンジニアがフォローアップ項目を要求した場合は、必ずこれらの項目で返信してください。これにより、できるだけ早く問題を解決できます。

## Zendesk チケットでの顧客アーキテクチャ・コラボレーションプロジェクト情報の自動リンク

CSM が管理する Zendesk 内の各顧客・組織に対して、コラボレーションプロジェクトへのリンクを既存チケットに含めることができます。このリンクにより、サポートチームが毎回 URL を手動で調べることなく [顧客コラボレーションプロジェクト](/handbook/customer-success/csm/customer-collaboration-project/) から顧客情報にアクセスできます。

この [ZD から対応するコラボレーションプロジェクトへのリンク](/handbook/support/workflows/looking_up_customer_technical_details/#architecture-diagram-and-customer-success-project)を有効にして GitLab サポートチームの生活を楽にするためには、Zendesk で設定されている[顧客コラボレーションプロジェクト](/handbook/customer-success/csm/customer-collaboration-project/) ID を確認する必要があります（左側に表示されています）。

[顧客コラボレーションプロジェクト](/handbook/customer-success/csm/customer-collaboration-project/) の ID が正しくない場合は、[こちら](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/organizations/-/issues/new)でサポート運用チームへの新しい Issue を開き、リクエストに以下の情報を使用して変更してもらうことができます:

---
**コンテキスト・リクエスト**: 私が管理している ORG について、ZD 組織ビューから正しいコラボレーションプロジェクトへリンクするために使用される AM id の変更をリクエストしたいと思います。

**組織**: https://gitlab.zendesk.com/agent/organizations/11111111/tickets

**AM ID は次のように変更されるべき**: 17735787、最終的に https://gitlab.com/<collaboration_project_url> を指す

**ハンドブック参照**: https://handbook.gitlab.com/handbook/support/workflows/looking_up_customer_technical_details/#architecture-diagram-and-customer-success-project

---

完了して AM id が更新されると、既存のチケット内の ZD 内でリンク自体が表示されます。シングルチケットビュー内で右上の「Apps」をクリックすると確認できます。

## サポートチケット通知

CSM が Salesforce でアカウントに割り当てられている場合、そのアカウントのユーザーがサポートチケットを提出するたびに、Zendesk チケットと Salesforce ケースへのリンクを含むメールが CSM に届きます。メールにはアカウント名、担当者名とメールアドレス、チケットが開かれた日付も含まれます。CSM はチケットが開かれてから 1〜2 時間以内にメールを受け取るはずです。

新しいチケットを CSM に通知するメールに含まれる Zendesk チケットリンクは、現在直接チケットにつながっています。過去には、読みにくく時々読み込まれない .json ファイルになっていたことがあります。その場合、いくつかの回避策があります:

1. 代わりに Salesforce ケースリンクを開いてください。チケットに対してアクションを取ることはできませんが、読むことはできます。
1. Zendesk チケットリンクを開き、.json ではなくチケット自体に移動するよう URL を編集してください。たとえば、https://gitlab.zendesk.com/api/v2/tickets/123456.json がメール内のチケットリンクの形式ですが、`/api/v2` と `.json` を削除して新しいリンク https://gitlab.zendesk.com/tickets/123456 にアクセスすると、直接チケットに移動します。
1. [Zendesk](https://gitlab.zendesk.com/agent/) に移動してチケットを検索してください（チケット番号をコピーするか、顧客で検索）。
1. [Redirector Chrome 拡張機能](https://chrome.google.com/webstore/detail/redirector/ocgpenflpmgnfapjedencafcfakcekcd?hl=en) または [Redirector Firefox アドオン](https://addons.mozilla.org/en-US/firefox/addon/redirector/) を取得して、以下の設定をインポートしてください:

```json
{
    "createdBy": "Redirector v3.5.2",
    "createdAt": "2020-03-11T16:25:30.936Z",
    "redirects": [
        {
            "description": "Redirect zendesk tickets",
            "exampleUrl": "https://gitlab.zendesk.com/api/v2/tickets/12345.json",
            "exampleResult": "https://gitlab.zendesk.com/tickets/12345",
            "error": null,
            "includePattern": "https://gitlab.zendesk.com/api/v2/tickets/([0-9]+).json",
            "excludePattern": "",
            "patternDesc": "",
            "redirectUrl": "https://gitlab.zendesk.com/tickets/$1",
            "patternType": "R",
            "processMatches": "noProcessing",
            "disabled": false,
            "appliesTo": [
                "main_frame"
            ]
        }
    ]
}
```

## サポートチケットへの顧客フィードバックの提供

CSM が顧客からメールでサポートチケットに関するフィードバックを受け取ることがあります。このフィードバックはポジティブな場合もネガティブな場合もあります。その情報を Support Satisfaction（SSAT）ワークフロードキュメントの[フィードバックのソース](/handbook/support/workflows/how-to-respond-to-feedback/#sources-of-feedback)セクションの 3 番と 4 番の指示に従うことで、サポートマネジメントチームに伝えることができます。SSAT レビューマネージャーがフィードバックを受け取り対処します。

そのリンクに記載されているように、サポートはすでに自動メールアンケートとチケット中のフィードバックリンクを通じてフィードバックを収集しています。時々これらのオプションについて顧客にリマインドすることが有用です。ケーデンスコールの前に顧客のサポートチケットを確認する際にも、フィードバックを確認できます。

## サポート連絡先管理プロジェクト

CSM の[連絡先管理プロジェクト](https://support.gitlab.com/hc/en-us/articles/14142703050396-Contact-Management-Projects)に関するガイダンス。

連絡先管理プロジェクトにアクセスできるのは誰ですか？

- 顧客にとって機密性が高いため、Customer Support Operations と顧客が選択したユーザーのみが連絡先管理プロジェクトにアクセスできます。

顧客に連絡先管理プロジェクトがあるかどうかはどうやって確認しますか？

- 最善の情報源は Zendesk 内の組織を確認することです。左側のサイドバーの下部に `Contact Management Project ID` というフィールドがあり、使用されているプロジェクトを指します。そのフィールドに値がある場合、顧客は連絡先管理プロジェクトを持っています。

どの顧客ユーザーが連絡先管理プロジェクトにアクセスできるかはどうやって確認しますか？

- 連絡先管理プロジェクトにアクセスできる人は、組織ページの `CMP Developers` フィールドに保存されています（`Contact Management Project ID` のすぐ下）

サポートチケットを開くことができるユーザーはどうやって確認しますか？

- Zendesk 内の顧客の組織には、連絡先管理プロジェクトと同期してサポート権限を持つ人を表示する `Users` タブがあります。

## 参考リンク

- [GitLab 公式サポートドキュメント](https://about.gitlab.com/support/)
- [サポートハンドブック（SLA + ティア）](/handbook/support/)
- [GitLab.com ステータスと通知](https://status.gitlab.com/)
- [顧客オンボーディング](/handbook/customer-success/csm/onboarding/)
- [エスカレーションプロセス](/handbook/customer-success/csm/escalations/)
