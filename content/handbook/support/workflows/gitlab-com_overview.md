---
title: GitLab.com の概要
category: GitLab.com
description: "サポートエンジニアリングにとって、GitLab.com（SaaS）のコンテキストが他の GitLab インスタンスとどのように異なるかの全般的な概要を提供します"
upstream_path: /handbook/support/workflows/gitlab-com_overview/
upstream_sha: 47fdb6582389288bed0f04a23aa5d972c3ce1ff5
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-01-23T12:25:37-06:00"
---

## 概要

このページは、GitLab.com が GitLab のセルフマネージドインスタンスとどう異なるかの全般的な概要を提供することを目的としています。

このページの以降のセクションのコンテキストは、サポートが GitLab.com を扱うときに利用するさまざまな [ワークフロー](/handbook/support/workflows) と、[GitLab.com Basics](https://gitlab.com/gitlab-com/support/support-training/-/blob/main/.gitlab/issue_templates/GitLab-com-Basics.md) トレーニングモジュールでカバーされる予定であることに注意してください。

## GitLab.com アーキテクチャ

GitLab.com は既知の GitLab インスタンスとして最大規模のものです。私たちの [インフラストラクチャチーム](/handbook/engineering/infrastructure/) によって 24 時間 365 日監視・保守されています。

サポートチームは、報告された問題のトラブルシューティングのために [そのアーキテクチャ](/handbook/engineering/infrastructure-platforms/production/architecture/) を全般的に理解するとともに、ログへのアクセス方法（[Kibana](/handbook/support/workflows/kibana/)）とエラーレポート（[Sentry](/handbook/support/workflows/sentry/)）にも精通しているべきです。

また、サポートチームメンバーは、GitLab.com に固有のカスタマイズが施されていることを認識しているべきです。これらのカスタマイズは [chef-repo](https://gitlab.com/gitlab-com/gl-infra/chef-repo) を通じて適用されます。GitLab.com のカスタマイズの詳細は [GitLab.com のカスタムリミット](/handbook/support/workflows/gitlab-com_customizations) で確認できます。

多くのサポートチームメンバーは、[CMOC](/handbook/support/workflows/cmoc_workflows/) としてインシデントの対応も支援しています。

## 法的コンテキスト

サインアップ時、ユーザーは私たちの [利用規約](https://about.gitlab.com/terms/) に同意し、それに拘束されることになります。

DMCA や行動規範を含む規約違反は、[セキュリティオペレーション](/handbook/security/security-operations/) によって対処されます。

## 管理

GitLab.com では、GitLab（会社）がインスタンスの管理者です。これには以下に概説する複数の影響があります。

### ユーザーは管理者ではない

お客様を含むユーザーは [管理者ロールを持つことはありません](https://docs.gitlab.com/administration/#administrator-documentation)。

これは、私たちの管理者向け固有のドキュメントがエンドユーザーには適用されず、[インスタンスレベルの設定](https://docs.gitlab.com/user/gitlab_com/) は私たちのインフラストラクチャチームによって管理されることを意味します。

### アカウントはユーザーに帰属する

現在のユーザーがアカウントに登録する方法のため、規約は個々のアカウントに適用され、情報は以下で定義する [エンタープライズユーザー](#enterprise-users) でない限り他者と共有されるべきではありません。

> **注意:** ユーザーがアクセス権を持っている場合にのみ、ユーザーと情報を共有してください。

このことは時にサポートのやり取りをより難しく、もどかしくしますが、アカウントのメールアドレスといった基本的なものでさえ、それが公開されていなかったり、ユーザーが他の個人と共有することについての明示的な許可を提供していない場合は、共有されるべきではありません。

### エンタープライズユーザー

私たちの規約が最後に更新された 2021-02-01 の時点で、**エンタープライズユーザー** の定義を導入しました。

エンタープライズユーザーアカウントは、GitLab サブスクリプションを購入した会社に帰属します。これは、**有料グループのトップレベル** の `Owner` から要求があった場合、エンタープライズユーザーに関する情報を共有でき、エンタープライズユーザーに代わって行動を取ることができることを意味します。

プライベートな情報を共有したり何らかの行動を取るには、通常通り [アカウント所有権の証明](/handbook/support/workflows/account_verification/) が必要です。

エンタープライズユーザーは、`enterprise_group_id` ユーザー属性に基づいてグループに属します。
これが GitLab でどのように発生するかの詳細については、[エンタープライズユーザードキュメントページ](https://docs.gitlab.com/user/enterprise_user/) を参照してください。

ドメイン検証が設定されていないなどの理由でユーザーが自動的にエンタープライズユーザーとして識別されない場合でも、**サポートの目的において** は、以下の **両方** の条件を満たすときには、ユーザーをエンタープライズユーザーとみなすことができます。

1. ユーザーのプライマリメールアドレスのドメインが有料グループの会社によって **所有** されている。これは以下の **いずれか** が真であることを意味します。
    - ドメインの WHOIS 情報が組織名と一致する
    - メールドメインが CDOT 内のサブスクリプション保有者と一致する
    - メールドメインがトップレベルネームスペースのオーナーのそれと一致する
1. ユーザーアカウントが以下の条件の **いずれか** を満たす。
    - 2021-02-01 以降に作成された。
    - 組織のグループに紐づいた SAML または SCIM の ID を持っている。
    - `provisioned_by_group_id` の値が組織のグループ ID と同じである。
    - 組織のグループのメンバーであり、サブスクリプションが 2021-02-01 以降に購入または更新された。

オーナーが、会社のドメインのプライマリメールアドレスを持つアカウントへのアクセスを要求しているが、上記の 2 番目の条件を *満たしていない* 場合、私たちはアカウントをユーザーに帰属するものとして扱う必要があります。この場合、オーナーが取れる手段は、ユーザーの *プライマリメール* をチケットの CC として追加することだけで、その後ユーザー自身がアカウントを検証します。

関連情報は Zendesk GitLab Super App: User Lookup、GitLab admin、または API で見つけることができます。サブスクリプション情報は CustomersDot でも追加で確認できます。

{{% include "includes/engineering/support-quick-reference.md" %}}
