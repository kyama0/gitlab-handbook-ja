---
title: "GitLab プロジェクトのベースライン要件"
description: "このハンドブックページでは、GitLab のコードベースに影響を与える GitLab プロジェクトに対して設定しなければならないベースライン構成について概説します。"
toc_hide: true
tags:
  - security_standard
  - security_standard_cmma
upstream_path: /handbook/security/policies_and_standards/gitlab_projects_baseline_requirements/
upstream_sha: 83366dfb077be6f6e05ce2b9af0b0e40f01b3458
translated_at: "2026-10-19T22:10:47+00:00"
translator: codex
stale: false
lastmod: "2026-10-19T11:41:55Z"
---

## 目的

このページの目的は、[スコープ](#scope)で定義するプロジェクトが満たさなければならない最小限の要件を概説することです。最終的な目標は、GitLab のコードベースに最終的に影響を与える変更が独立したレビューなしで行われないようにし、脆弱性やサプライチェーン攻撃が本番環境に到達するリスクを減らすことです。このページはまた、GitLab ユーザーが重要と考えるプロジェクトを保護するための構成例を示すことで、ユーザーを支援できます。

GitLab の[ドッグフーディングへのコミットメント](/handbook/engineering/development/principles/#dogfooding)と[効率のバリュー](/handbook/values/#efficiency)を踏まえると、これらのベースラインプロジェクト構成は*すべての*プロジェクトに必要なわけではなく、[スコープ](#scope)で定義するプロジェクト、または別途伝えられた理由で重要と判断されるプロジェクトにのみ必要であることを理解することが重要です（こうした場合には、これらのベースライン構成が「なぜ」必要なのかを明確に説明できる必要があります）。

ただし、チームメンバーがプロジェクトを作成または作業する際に、これらのベースライン構成を念頭に置くことが推奨されます。これらは、GitLab プロジェクトでなされる貢献のセキュリティと品質を向上させるように設計されているためです。

## スコープ {#scope}

これらのベースライン構成は、GitLab のコードベースに直接的または間接的に影響を与えるプロジェクト、および/または GitLab のビルド、リリース、デプロイに影響を与えるプロジェクトに適用しなければなりません。これには、本番コード、インフラストラクチャ、コンテナのビルド、または GitLab 製品を構成するソフトウェアをデプロイする CI/CD パイプラインを含むプロジェクトが該当します。

この基準に当てはまるプロジェクトの例：

- GitLab のコンポーネントをビルドするプロジェクト
- GitLab のコンポーネントのコードベースを管理するのに役立つボットをビルドするプロジェクト
- 重要な非 GitLab システム (例： Salesforce) のコードベースを更新するために使用されるプロジェクト

この基準に当てはまら*ない*プロジェクトの例：

- コードを持たないプロジェクト
- GitLab のコードベースに影響を与えないボットをビルドするプロジェクト (例： YAML ファイルを CSV に変換するスクリプト)

プロジェクトの使用法は時間の経過とともに自然にシフトする可能性があり、継続的にプロジェクトの使用法を再評価することが重要です。プロジェクトはどちらのカテゴリーにも入ったり出たりする可能性があるため、毎日プロジェクトで作業する際にそれを念頭に置いてください。期待されるのは、プロジェクトにこれらのベースライン構成が設定されている場合でも、チームメンバーが作業で協力し合い、個人が単一障害点になるリスクを高める知識のサイロでの作業を避けることで、効率が低下しないことです。これらの価値観はまた、変更に複数のチームメンバーを関与させることで、私たちの[透明性の価値](/handbook/values/#transparency)を促進します。

### 自分のプロジェクトがどこに当てはまるかわかりません

それは大丈夫です! そして、確かに珍しいことではありません。質問がある場合は、私たちが対処し、適切なカテゴリーに当てはめられるよう、提起してください。プロジェクトの分類方法をここでイテレーションを行い、セキュリティと品質、そして効率へのコミットメントを確保できます。

### 自分のプロジェクトは基準に当てはまらないようですが、それでもこれらの構成が必要ですか?

プロジェクトがベースライン構成を要求するための一般的な基準を厳密に満たさないが、何らかの理由でプロジェクトをベースライン構成を使用して構成すべきと判断される場合もあります。これらのインスタンスでは、これらのベースライン構成の必要性の背後にある「理由」の根拠が明確に伝えられる必要があります。既存の基準を満たさないと思われるプロジェクトに対して多くの類似した根拠が提供される場合、それはプロジェクトのスコープと基準を調整すべきという指標である可能性があります。

## 保護されたブランチのベースライン構成

保護されたブランチは、[すべての人にそのブランチへの MR の提出を必須とする](https://docs.gitlab.com/ee/user/project/repository/branches/protected.html#require-everyone-to-submit-merge-requests-for-a-protected-branch)ように構成しなければなりません。MR を使用するこの要件により、なされた変更とその背後にある根拠の追跡がより容易になり、最も重要なことは、保護されたブランチに変更を加えるために MR を使用する必要があることです。これは、構成された MR 承認ルールと密接に連携します。アカウントが保護されたブランチに直接プッシュできる場合、そのアカウントは MR を使用する必要がなく、独立したレビューを受けることなく変更を加えられます。

法律、規制、または契約によって人による明示的な承認が求められる場合は、人が変更を承認しなければなりません。例として、SOX または FedRAMP の統制の対象となる変更が挙げられます。

[デフォルトブランチへの強制プッシュ](https://docs.gitlab.com/user/project/repository/branches/protected/#allow-force-push-on-a-protected-branch)は、すでにレビュー済みの履歴を書き換えられるため、禁止しなければなりません。

### MR を要求するように構成された保護されたブランチ設定の例 1

![MR を要求するように構成された保護されたブランチ設定の例 1](/images/protected_branch_settings_example.jpg "保護されたブランチ設定の例")

[Code Owners の使用に関する注意](/handbook/security/policies_and_standards/gitlab_projects_baseline_requirements/#note-on-usage-of-code-owners)を参照

## MR 承認ルールの構成

MR は GitLab の[コードレビューガイドライン](/handbook/engineering/workflow/code-review/)に従ってレビューしなければなりません。レビューされていないコミットで MR がマージされないようにするため、[MR 承認ルール](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/settings.html#approval-settings)を以下の 2 つの方法のいずれかで有効にしなければなりません。

プロジェクトでは、次の設定も行わなければなりません。

- デフォルトブランチへのすべてのマージについて、少なくとも 1 件の承認レビューを必須にします。
- マージリクエストに新しいコミットがプッシュされたら、承認をリセットします。
- マージリクエストのマージ前に、CI パイプラインの成功を必須にします。

### Code Owners なしで構成された MR 承認ルールの例 1

![Code Owners なしで構成された MR 承認ルールの例 1](/images/mr-approvals-without-code-owners.jpg "Code Owners なしで構成された MR 承認ルールの例 1")

### Code Owners ありで構成された MR 承認ルールの例 2

![Code Owners ありで構成された MR 承認ルールの例 2](/images/mr-approvals-with-code-owners.png "Code Owners ありで構成された MR 承認ルールの例 2")

[Code Owners の使用に関する注意](/handbook/security/policies_and_standards/gitlab_projects_baseline_requirements/#note-on-usage-of-code-owners)を参照

## パイプラインと CI/CD の構成

プロジェクトは、脆弱性が本番環境に到達するリスクを減らし、サプライチェーン攻撃への露出を抑えるため、以下の要件を満たさなければなりません。チームがより厳格なコントロールを実装することも歓迎します。

1. すべてのマージリクエストパイプラインを SAST でスキャンします。
1. すべてのマージリクエストパイプラインを依存関係スキャン（SCA）でスキャンします。
1. すべてのマージリクエストパイプラインで、露出したシークレットをスキャンします。
1. デフォルトブランチからビルドされるすべてのコンテナイメージで、脆弱性をスキャンします。
1. すべての Infrastructure as Code の変更で、セキュリティ設定の誤りをスキャンします。
1. 重大度が Critical または High の脆弱性を検出した場合は、パイプラインの実行をブロックします。
1. シークレットを含むコミットが受け入れられないよう、シークレットプッシュ保護を有効にします。
1. シークレットまたは認証情報を含むすべての CI/CD 変数をマスクし、非表示にし、保護されたブランチに制限します。
1. 本番環境のコンテナイメージタグを、不正な上書きや削除から保護します。
1. 本番環境へのデプロイを、認可されたロールと保護されたブランチに制限します。
1. サービスアカウントのトークンには、個人アクセストークンではなくプロジェクトまたはグループアクセストークンを使用し、有効期限とスコープを定める[トークン管理標準](/handbook/security/policies_and_standards/token-management-standard/)にも従います。
1. パイプラインを手動でトリガーする際、プロジェクトメンバーによる CI/CD 変数の上書きを禁止します。
1. CI コンポーネントをホストするプロジェクトでは、下流のパイプラインが利用するコンポーネントの内容が不正に変更されないよう、すべての semver バージョンタグに不変タグを使用します。
1. プロジェクトでは、CI ジョブトークンのアクセスを、認可されたプロジェクトとグループの明示的な許可リストに制限し、各エントリのスコープを必要最小限の権限にします。
1. すべてのパイプラインで、CI ジョブに使用するパッケージ、ツール、コンテナイメージの完全性を実行前に検証します。
1. 公開レジストリにパッケージを公開するプロジェクトでは、公開ステップを実行する前に、成果物の内容を承認済みのパターン許可リストに照らして検証します。

## Code Owners の使用に関する注意 {#note-on-usage-of-code-owners}

すべてのプロジェクトで Code Owners が有効になっているわけではないことに注意してください。すべてのインスタンスで必要ないかもしれません。

プロジェクトが Code Owners を使用する場合、保護されたブランチ設定は「Code owner approval」を**ON** に切り替えるように構成し、適切に構成された Code Owners ファイルを作成しなければなりません。GitLab Docs では Code Owners の動作と [Code Owners の設定方法](https://docs.gitlab.com/ee/user/project/codeowners/#set-up-code-owners)を定義しています。

[MR 承認ルールも Code Owners を利用するように構成](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/rules.html#code-owners-as-eligible-approvers)し、影響を受けるファイルタイプを持つ MR を承認するために少なくとも 1 人の Code Owner の承認を必須にしなければなりません

徹底的にレビューし、`#security-help` Slack チャンネルで、または混乱がある場合は Code Owners を設定している MR でタグを付けて質問してください!

## 継続的なモニタリング

これらのベースライン構成を要求する基準を満たすプロジェクトは、私たちのこのページに示されているガイダンスに従っていることを確認する継続的コントロールモニタリングプログラムの一環として、[GitLab Security Compliance チーム](/handbook/security/security-assurance/security-compliance/)によって構成テストのためにいつでも選択される可能性があることに注意してください。プログラムの概要については、[GCF セキュリティコントロールライフサイクル](/handbook/security/security-assurance/security-compliance/security-control-lifecycle/)ページを参照してください。

継続的なコントロールモニタリングの対象は、現在、保護されたブランチと MR 承認の設定のみです。パイプラインと CI/CD の構成は、まだ対象に含まれていません。

Security Compliance チームはまた、上記で概説されたすべての MR 承認および保護されたブランチ設定について、[Devo SIEM ツールでの検出/アラート](https://gitlab.com/gitlab-com/gl-security/security-operations/sirt/devo/-/tree/main/detections/secassurance?ref_type=heads)と Slack を使用してライブモニタリングを実装しています。設定の変更の結果として、適切な承認/SOD なしに MR がマージされた場合、根本原因を特定して修復を実行するための[観察](/handbook/security/security-assurance/observation-management-procedure/) Issue が開かれます。修復には、なぜ変更されたかを理解する、設定をコンプライアンスに戻す、適切な承認や職務分掌 (SOD)なしにマージされた MR をレビューして悪意のある変更が含まれていないことを確認する、必要に応じて遡及的な承認を取得するなどのステップが含まれます。Security Compliance はまた、変更の根本原因を特定し、設定がチームの開発作業を完了するために変更される必要がないようにワークフローの変更を実装することに向けて作業するために、変更を行った個人とプロジェクトを所有/作業するチームの管理を巻き込みます。

### さらなるセキュリティ推奨事項

1. 変数を平文で保存したり、包括的なシークレット管理のためにマスクされた環境変数に依存したりしないでください。代わりに、[外部シークレットストレージソリューション](/handbook/security/external-secret-storage)を設定してください
1. プロジェクトの[脅威モデルの作成](/handbook/security/product-security/security-platforms-architecture/application-security/threat-modeling/howto/)を強く検討してください。
1. プロジェクトがより確立された時点で、[AppSec レビュー](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews/)を依頼することを検討してください。
1. さらに質問がある場合は、AppSec チーム (`@gitlab-com/gl-security/appsec` および `#security_help`)に連絡してください。

## 参考文献

- [GitLab リポジトリ](/handbook/engineering/workflow/gitlab-repositories/#creating-a-new-project) (新しいプロジェクト作成のガイダンス)
- [変更管理ポリシー](/handbook/security/security-and-technology-policies/change-management-policy/)
- [GCF セキュリティコントロールライフサイクル](/handbook/security/security-assurance/security-compliance/security-control-lifecycle/)
