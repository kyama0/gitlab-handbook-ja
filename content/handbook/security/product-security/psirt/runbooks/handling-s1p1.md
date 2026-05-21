---
title: "priority::1/severity::1 Issue の取り扱い"
upstream_path: /handbook/security/product-security/psirt/runbooks/handling-s1p1/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-10T12:42:46-06:00"
---

以下のプロセスは、[クリティカルリリースプロセス](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/process.md#critical-security-releases)の最初の数ステップを補完するものです。

潜在的な severity::1/priority::1 Issue が判明した時点で、PSIRT エンジニアの手順は以下のとおりです。

## トリアージ

1. 通常の[レポートのトリアージ](/handbook/security/product-security/psirt/runbooks/hackerone-process/)と同じように、Issue をトリアージし検証します。
1. SIRT チームを巻き込む前に、Bug Bounty Council (BBC) スレッドで複数のチームメンバーの投票を経て、セキュリティ Issue の CVSS スコアを確定します。時間的制約を考慮し、議論には同期通話または Slack の利用を検討してください。議論の結果は BBC スレッドに記録します。地域内の PSIRT チームメンバーが PTO 中であったりタイムゾーンの問題で同期通話や Slack ディスカッションが不可能だった場合は、Issue がトリアージされてから 4 時間が経過した時点で SIRT ワークフローを起動してください。
1. BBC スレッド内で、GitLab Dedicated 固有の CVSS スコアを作成します。
1. SecOps が影響範囲とログ分析を迅速に判断できるよう、再現手順の概要 (HTTP リクエスト、生成されたログメッセージ、画像など) をセキュリティ Issue にコメントします。
1. エスカレーション後、即時に脆弱な他のコンポーネントや別の影響がないかどうか調査します。

## エスカレーション

1. Issue へのリンク、現状のサマリー、SIRT に必要となる対応の概要を添えて、[セキュリティオンコールエンジニアを巻き込みます](/handbook/security/security-operations/sirt/engaging-security-on-call/)。
1. 影響を受けるコンポーネントの担当 [Engineering Manager と Product Manager](/handbook/product/categories/) を、Issue 内**および**該当する Slack チャンネル両方で巻き込みます。
1. GitLab Dedicated チームの支援が必要な場合は、[オンコールエンジニアへエスカレーションするためのランブック](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/runbooks/on-call.html#escalating-to-an-on-call-person)に従ってください。
1. `#security_help` Slack チャンネルで `@appsec-leadership` に Issue へのリンクとともにメンションします。これにより、チームのリーダー陣や他のエンジニアが状況を把握でき、必要に応じて介入できます。
1. CVSS 評価と議論の参照および正典として、SIRT Tines ケースに Bug Bounty Council の CVSS ディスカッションへのリンクを追加します。
1. インシデント専用の Slack チャンネルに、CVSS の bug bounty council ディスカッション Issue へのブックマークを作成します。

## 異なる環境における影響評価

GitLab self-managed、GitLab Dedicated、GitLab SaaS (GitLab.com) の間では、設定・機能の利用可否・構成が異なるため、単一の脆弱性であっても CVSS は環境ごとに異なる可能性があります。

セキュリティ脆弱性の悪影響を正確に伝え効果的に緩和するためには、特に攻撃が成立するために特定の前提条件が必要となる場合、各環境の設定・機能可否・構成における差異を考慮してください。

### GitLab Dedicated

GitLab の脆弱性が GitLab Dedicated に影響するかを評価する際は、[GitLab Dedicated で**利用できない**](https://docs.gitlab.com/ee/subscriptions/gitlab_dedicated/#features-that-are-not-available)以下の機能を考慮してください。

#### GitLab Dedicated で利用できないアプリケーション機能

- [ ]  LDAP、Smartcard、または Kerberos 認証
- [ ]  複数のログインプロバイダー
- [ ]  Advanced Search
- [ ]  GitLab Pages
- [ ]  Reply-by email
- [ ]  Service Desk
- [ ]  FortiAuthenticator または FortiToken 2FA
- [ ]  GitLab マネージドランナー (ホストランナー)
- [ ]  GitLab AI 機能 ([詳細情報](https://about.gitlab.com/direction/gitlab_dedicated/#supporting-ai-features-on-gitlab-dedicated))
- [ ]  GitLab UI の外で構成する必要がある機能 (デフォルトで無効化されている [フィーチャーフラグ](https://docs.gitlab.com/ee/user/feature_flags.html) の背後にあるものを含む)
- [ ]  Mattermost
- [ ]  サーバーサイド Git フック (セキュリティ上の懸念とサービス SLA への影響の可能性のため。代替として[プッシュルール](https://docs.gitlab.com/ee/user/project/repository/push_rules.html)や [Webhook](https://docs.gitlab.com/ee/user/project/integrations/webhooks.html) の利用を検討してください。)

ある脆弱性の悪用が上記の機能の使用を必要とする場合、GitLab Dedicated には**影響しない**可能性が高いです。正確な評価のため、必ず脆弱性の具体的な詳細とクロスチェックしてください。

## 緩和

クリティカルなセキュリティ Issue の緩和は、GitLab とユーザーをできるだけ早く保護することと、すぐに別のパッチを必要としない信頼性の高い方法で実施することのバランスを取る必要があります。
パッチはまず GitLab マネージド環境 (.com、Dedicated など) に展開され、その後 self-managed ユーザーへリリースされます。

1. すべての関連チーム (該当機能を所有する開発チーム、インフラ、SIRT など) と協力して、脆弱性に対する解決策を策定します。
1. 各オプションの影響を分析します。
    - 問題解決にどれほど効果的か?
    - 症状を抑えているのか、根本原因を修正しているのか?
    - この決定により何人の顧客が影響を受けるか?
    - 具体的にどのように影響を受けるか?
    - その規模はどの程度か?
    - その他、どのような肯定的・否定的な結果があるか?
1. 上記の懸念事項と関与するチームの懸念事項のバランスを最も取れる解決策を選択します。
1. 解決策が提供された後、修正が有効であることを検証します。

時には、適切なパッチを十分に開発・レビューする前に、応急的な修正が必要となることがあります。
過去に使用した短期的なオプションの例を挙げます。

- 特定のエンドポイントをブロックする Cloudflare ルール。
- フィーチャーフラグやアプリケーション設定を使用して特定の機能を無効化する。
- [hotpatch](https://gitlab.com/gitlab-org/release/docs/blob/master/general/deploy/post-deployment-patches.md) を展開する。

### self-managed 顧客へのリリース

隔週のリリーススケジュールに移行して以降、[クリティカルセキュリティリリースワークフロー](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/security-engineer.md##critical-security-releases)に従ってクリティカルな脆弱性をパッチする必要性は大幅に減少しました。
通常のパッチリリースに含めるか、クリティカルセキュリティリリースを実施するかの判断には、多くの要因を考慮する必要があります。
それらの要因には、以下のようなものが含まれますが、これらに限定されません。

- この脆弱性はどれほど容易に悪用できるか?
- 脆弱性の悪用にユーザーアカウントが必要か?
- 脆弱性は実環境で悪用されているか?
- 攻撃を自動化し、大規模に容易に悪用できるか?
- 脆弱性の影響度はどの程度か?

これはケースバイケースで対応され、状況が発生するたびにすべてのステークホルダーと評価する必要があります。
アドホックなクリティカルセキュリティリリースを選択する可能性が非常に高いシナリオの例:

- 実環境で悪用されている、未パッチの critical 重要度の脆弱性 (CVSS 9 以上)
- PoC や悪用コードが公開されている、未パッチの critical 重要度の脆弱性 (CVSS 9 以上)
- CVSS 10.0 の脆弱性 (例: 認証不要の RCE や管理者アカウント乗っ取り)

## RCA の開始

製品の脆弱性であれば、PSIRT の DRI はできるだけ早く [Root Cause Analysis (RCA) 調査 Issue を開始](/handbook/security/root-cause-analysis/#initiating-an-rca)する必要があります。バイパスや類似インシデントを防ぐため、脆弱性の根本原因を十分に理解し文書化することは極めて重要です。このステップの結果として、フォローアップの予防的・緩和的コントロールに関する Issue が作成され優先順位付けされます。

## ハンドオフ

PSIRT エンジニアはオンコール体制ではありません。つまり、担当の PSIRT エンジニアの就業時間が終了する際は、後続のタイムゾーンの PSIRT エンジニアに引き継ぐ責任があります。

現状のサマリーと、PSIRT に必要となる残課題・今後のタスクを簡潔に提供します。SIRT Tines ケース、コミュニケーションドキュメント、Slack リンクなどの有用なリンクも提供します。理想的には、引き継ぎ相手と議論や質問対応を行うため、短い同期通話もスケジュールします。

ハンドオーバーが行われたことをインシデント関連の Slack チャンネルで共有し、`#security_help` などの他の関連チャンネルにもクロスポストします。以下のようなメッセージテンプレートが適切な場合があります。

> 🤝 PSIRT Handover 🤝  I have handed over to `@username` for any PSIRT needs, as I am close to the end of my working day. [Include details on how we will continue to deliver on any tasks that PSIRT is DRI for].

### Family and Friends Day カバレッジ

[Family and Friends Day](/handbook/company/family-and-friends-day/) は、GitLab が公式に休業する日です。
詳細は[休日カバレッジ](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/holiday-coverage/)を参照してください。
