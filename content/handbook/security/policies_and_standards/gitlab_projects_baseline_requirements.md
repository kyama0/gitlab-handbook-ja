---
title: "GitLab プロジェクトのベースライン要件"
description: "このハンドブックページでは、GitLab のコードベースに影響を与える GitLab プロジェクトに対して設定すべきベースライン構成について概説します。"
toc_hide: true
tags:
  - security_standard
  - security_standard_cmma
upstream_path: /handbook/security/policies_and_standards/gitlab_projects_baseline_requirements/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T17:22:11Z"
translator: claude
stale: false
lastmod: "2026-03-02T07:33:04-05:00"
---

## 目的

このページの目的は、GitLab 製品を構成するコードに最終的に影響を与える、および/または GitLab のビルド、リリース、デプロイに影響を与える GitLab プロジェクトを構成する際に遵守すべき最小限の要件セットを概説することです。最終的な目標は、GitLab のコードベースに最終的に影響を与える変更がレビューなしで行われないようにすることです。このページはまた、GitLab のユーザーが重要だと考えるプロジェクトを保護するためのいくつかの可能な構成を提供することで、ユーザーを支援できます。

GitLab の[ドッグフーディングへのコミットメント](/handbook/engineering/development/principles/#dogfooding) と GitLab の[効率の価値](/handbook/values/#efficiency) を念頭に置くと、これらのベースラインプロジェクト構成は*すべての*プロジェクトで必要とされるわけではなく、(直接的または間接的に) GitLab のコードベースに影響を与えるプロジェクト、または別の伝達された理由で重要であると見なされるプロジェクトでのみ必要とされることを理解することが重要です (これらのインスタンスでは、これらのベースライン構成の必要性の背後にある「理由」の根拠が明確に伝えられる必要があることに注意してください)。

ただし、チームメンバーがプロジェクトを作成または作業する際に、これらのベースライン構成を念頭に置くことが推奨されます。これらは、GitLab プロジェクトでなされる貢献のセキュリティと品質を向上させるように設計されているためです。

## スコープ

これらのベースライン構成を適用すべきプロジェクトのスコープは、GitLab のコードベースに直接的または間接的に影響を与えるプロジェクト、および/または GitLab のビルド、リリース、デプロイに影響を与えるプロジェクトです。

この基準に当てはまるプロジェクトの例:

- GitLab のコンポーネントをビルドするプロジェクト
- GitLab のコンポーネントのコードベースを管理するのに役立つボットをビルドするプロジェクト
- 重要な非 GitLab システム (例: Salesforce) のコードベースを更新するために使用されるプロジェクト

この基準に当てはまら*ない*プロジェクトの例:

- コードを持たないプロジェクト
- GitLab のコードベースに影響を与えないボットをビルドするプロジェクト (例: YAML ファイルを CSV に変換するスクリプト)

プロジェクトの使用法は時間の経過とともに自然にシフトする可能性があり、継続的にプロジェクトの使用法を再評価することが重要です。プロジェクトはどちらのカテゴリーにも入ったり出たりする可能性があるため、毎日プロジェクトで作業する際にそれを念頭に置いてください。期待されるのは、プロジェクトにこれらのベースライン構成が設定されている場合でも、チームメンバーが作業で協力し合い、知識のサイロで作業することを避けることで、効率が低下しないことです。これは、個人が単一障害点になるリスクも増加させます。これらの価値観はまた、変更に複数のチームメンバーを関与させることで、私たちの[透明性の価値](/handbook/values/#transparency) を促進します。

### 自分のプロジェクトがどこに当てはまるかわかりません

それは大丈夫です! そして、確かに珍しいことではありません。質問がある場合は、私たちが対処し、適切なカテゴリーに当てはめられるよう、提起してください。プロジェクトの分類方法をここで反復することができ、セキュリティと品質、そして効率へのコミットメントを確保できます。

### 自分のプロジェクトは基準に当てはまらないようですが、それでもこれらの構成が必要ですか?

プロジェクトがベースライン構成を要求するための一般的な基準を厳密に満たさないが、何らかの理由でプロジェクトをベースライン構成を使用して構成すべきと判断される場合もあります。これらのインスタンスでは、これらのベースライン構成の必要性の背後にある「理由」の根拠が明確に伝えられる必要があります。既存の基準を満たさないと思われるプロジェクトに対して多くの類似した根拠が提供される場合、それはプロジェクトのスコープと基準を調整すべきという指標である可能性があります。

## 保護されたブランチのベースライン構成

一般的なルールとして、私たちは[誰もが保護されたブランチに MR を提出することを要求する](https://docs.gitlab.com/ee/user/project/repository/branches/protected.html#require-everyone-to-submit-merge-requests-for-a-protected-branch) ような方法でブランチを保護したいと考えています。MR を使用するこの要件により、なされた変更とその背後にある根拠の追跡がより容易になり、最も重要なことは、保護されたブランチに変更を加えるために MR を使用する必要があることです。これは、構成された MR 承認ルールと密接に連携します。アカウントが保護されたブランチに直接プッシュできる場合、そのアカウントは MR を使用する必要がなく、別のチームメンバーの関与なしに変更を加えることができます。

### MR を要求するように構成された保護されたブランチ設定の例 1

![Example 1 of Protected Branch Settings configured to Require an MR](https://about.gitlab.com/images/protected_branch_settings_example.jpg "Example of Protected Branch Settings")

[Code Owners の使用に関する注意](/handbook/security/policies_and_standards/gitlab_projects_baseline_requirements/#note-on-usage-of-code-owners) を参照

## MR 承認ルールの構成

MR は GitLab の[コードレビューガイドライン](/handbook/engineering/workflow/code-review/) に従ってレビューされる必要があります。レビューされていないコミットで MR がマージされないようにするため、[MR 承認ルール](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/settings.html#approval-settings) を以下の 2 つの方法のいずれかで有効にする必要があります。

### Code Owners なしで構成された MR 承認ルールの例 1

![Example 1 of MR Approval Rules configured WITHOUT Code Owners](https://about.gitlab.com/images/MR_approvals_without_code_owners.jpg "Example 1 of MR Approval Rules configured WITHOUT Code Owners")

### Code Owners ありで構成された MR 承認ルールの例 2

![Example 2 of MR Approval Rules configured WITH Code Owners](https://about.gitlab.com/images/MR_approvals_with_code_owners.png "Example 2 of MR Approval Rules configured WITH Code Owners")

[Code Owners の使用に関する注意](/handbook/security/policies_and_standards/gitlab_projects_baseline_requirements/#note-on-usage-of-code-owners) を参照

## Code Owners の使用に関する注意 {#note-on-usage-of-code-owners}

すべてのプロジェクトで Code Owners が有効になっているわけではないことに注意してください。すべてのインスタンスで必要ないかもしれません。

プロジェクトが Code Owners を使用する場合、保護されたブランチ設定は「Code owner approval」を**ON** に切り替えるように構成し、適切に構成された Code Owners ファイルを作成する必要があります。GitLab Docs では Code Owners の動作と[Code Owners の設定方法](https://docs.gitlab.com/ee/user/project/codeowners/#set-up-code-owners) を定義しています。

[MR 承認ルールも Code Owners を利用するように構成](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/rules.html#code-owners-as-eligible-approvers) し、影響を受けるファイルタイプを持つ MR を承認するために少なくとも 1 人の Code Owner を要求する必要があります

徹底的にレビューし、`#sec-assurance` Slack チャンネルで、または混乱がある場合は Code Owners を設定している MR でタグを付けて質問してください!

## 継続的なモニタリング

これらのベースライン構成を要求する基準を満たすプロジェクトは、私たちのこのページに示されているガイダンスに従っていることを確認する継続的コントロールモニタリングプログラムの一環として、[GitLab セキュリティコンプライアンスチーム](/handbook/security/security-assurance/security-compliance/) によって構成テストのためにいつでも選択される可能性があることに注意してください。プログラムの概要については、[GCF セキュリティコントロールライフサイクル](/handbook/security/security-assurance/security-compliance/security-control-lifecycle/) ページを参照してください。

セキュリティコンプライアンスチームはまた、上記で概説されたすべての MR 承認および保護されたブランチ設定について、[Devo SIEM ツールでの検出/アラート](https://gitlab.com/gitlab-com/gl-security/security-operations/sirt/devo/-/tree/main/detections/secassurance?ref_type=heads) と Slack を使用してライブモニタリングを実装しています。設定の変更の結果として、適切な承認/SOD なしに MR がマージされた場合、根本原因を特定して修復を実行するための[観察](/handbook/security/security-assurance/observation-management-procedure/) Issue が開かれます。修復には、なぜ変更されたかを理解する、設定をコンプライアンスに戻す、適切な承認や職務分掌 (SOD) なしにマージされた MR をレビューして悪意のある変更が含まれていないことを確認する、必要に応じて遡及的な承認を取得するなどのステップが含まれます。セキュリティコンプライアンスはまた、変更の根本原因を特定し、設定がチームの開発作業を完了するために変更される必要がないようにワークフローの変更を実装することに向けて作業するために、変更を行った個人とプロジェクトを所有/作業するチームの管理を巻き込みます。

### さらなるセキュリティ推奨事項

1. 変数を平文で保存したり、包括的なシークレット管理のためにマスクされた環境変数に依存したりしないでください。代わりに、[外部シークレットストレージソリューション](/handbook/security/external-secret-storage) を設定してください
1. プロジェクトの[脅威モデルの作成](/handbook/security/product-security/security-platforms-architecture/application-security/threat-modeling/howto/) を強く検討してください。
1. プロジェクトがより確立された時点で、[AppSec レビュー](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews/) を依頼することを検討してください。
1. さらに質問がある場合は、AppSec チーム (`@gitlab-com/gl-security/appsec` および `#security_help`) に連絡してください。

## 参考文献

- [GitLab リポジトリ](/handbook/engineering/workflow/gitlab-repositories/#creating-a-new-project) (新しいプロジェクト作成のガイダンス)
- [変更管理ポリシー](/handbook/security/security-and-technology-policies/change-management-policy/)
- [GCF セキュリティコントロールライフサイクル](/handbook/security/security-assurance/security-compliance/security-control-lifecycle/)
