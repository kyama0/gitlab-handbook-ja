---
title: "GitLab プロジェクトのベースライン要件"
description: "このハンドブックページでは、GitLab のコードベースに影響を与える GitLab プロジェクトに対して設定しなければならないベースライン構成について概説します。"
toc_hide: true
tags:
  - security_standard
  - security_standard_cmma
upstream_path: /handbook/security/policies_and_standards/gitlab_projects_baseline_requirements/
upstream_sha: 8fce82673398dbfad74c667e7b35eb75d101d55d
translated_at: "2026-11-14T08:27:14.053995+00:00"
translator: codex
stale: false
lastmod: "2026-11-09T01:11:23+01:00"
---

## 目的 {#purpose}

このページの目的は、[スコープ](#scope)で定義するプロジェクトが満たさなければならない最小限の要件を概説することです。最終的な目標は、GitLab のコードベースに最終的に影響を与える変更が独立したレビューなしで行われないようにし、脆弱性やサプライチェーン攻撃が本番環境に到達するリスクを減らすことです。このページはまた、GitLab ユーザーが重要と考えるプロジェクトを保護するための構成例を示すことで、ユーザーを支援できます。

GitLab の[ドッグフーディングへのコミットメント](/handbook/engineering/development/principles/#dogfooding)と効率のバリューを踏まえると、これらのベースラインプロジェクト構成は*すべての*プロジェクトに必要なわけではなく、[スコープ](#scope)で定義するプロジェクト、または別途伝えられた理由で重要と判断されるプロジェクトにのみ必要であることを理解することが重要です（こうした場合には、これらのベースライン構成が「なぜ」必要なのかを明確に説明できる必要があります）。

ただし、チームメンバーがプロジェクトを作成または作業する際に、これらのベースライン構成を念頭に置くことが推奨されます。これらは、GitLab プロジェクトでなされる貢献のセキュリティと品質を向上させるように設計されているためです。

## スコープ {#scope}

これらのベースライン構成は、GitLab のコードベースに直接的または間接的に影響を与えるプロジェクト、および/または GitLab のビルド、リリース、デプロイに影響を与えるプロジェクトに適用しなければなりません。これには、本番コード、インフラストラクチャ、コンテナのビルド、または GitLab 製品を構成するソフトウェアをデプロイする CI/CD パイプラインを含むプロジェクトが該当します。

この基準に当てはまるプロジェクトの例：

- GitLab のコンポーネントをビルドするプロジェクト
- GitLab のコンポーネントのコードベースを管理するのに役立つボットをビルドするプロジェクト
- 重要な非 GitLab システム（例：Salesforce）のコードベースを更新するために使用されるプロジェクト

この基準に当てはまら*ない*プロジェクトの例：

- コードを持たないプロジェクト
- GitLab のコードベースに影響を与えないボットをビルドするプロジェクト（例：YAML ファイルを CSV に変換するスクリプト）

プロジェクトの使用法は時間の経過とともに自然にシフトする可能性があり、継続的にプロジェクトの使用法を再評価することが重要です。プロジェクトはどちらのカテゴリーにも入ったり出たりする可能性があるため、毎日プロジェクトで作業する際にそれを念頭に置いてください。期待されるのは、プロジェクトにこれらのベースライン構成が設定されている場合でも、チームメンバーが作業で協力し合い、個人が単一障害点になるリスクを高める知識のサイロでの作業を避けることで、効率が低下しないことです。これらの価値観はまた、変更に複数のチームメンバーを関与させることで、私たちの透明性の価値を促進します。

### 自分のプロジェクトがどこに当てはまるかわかりません {#im-not-sure-where-my-project-fits}

問題ありません！決して珍しいことではありません。質問がある場合は、私たちが対処し、適切なカテゴリーに当てはめられるよう、提起してください。プロジェクトの分類方法をここでイテレーションを行い、セキュリティと品質、そして効率へのコミットメントを確保できます。

### 自分のプロジェクトは基準に当てはまらないようですが、それでもこれらの構成が必要ですか？ {#my-project-doesnt-fit-seem-to-fit-the-criteria-but-i-still-need-these-configurations}

プロジェクトがベースライン構成を要求するための一般的な基準を厳密に満たさないが、何らかの理由でプロジェクトをベースライン構成を使用して構成すべきと判断される場合もあります。こうした場合には、これらのベースライン構成の必要性の背後にある「理由」の根拠が明確に伝えられる必要があります。既存の基準を満たさないと思われるプロジェクトに対して多くの類似した根拠が提供される場合、それはプロジェクトのスコープと基準を調整すべきという指標である可能性があります。

## ベースライン要件 {#baseline-requirements}

[スコープ](#scope)で定義するプロジェクトは、以下のすべての要件を満たさなければなりません。チームは、より厳格な統制を適用できます。

1. <a id="protected-branch-baseline-configurations"></a>**ブランチを保護します。**
   - 直接プッシュする代わりに、[保護されたブランチへのマージリクエストを必須にします](https://docs.gitlab.com/user/project/repository/branches/protected/#require-everyone-to-submit-merge-requests-for-a-protected-branch)。
   - [デフォルトブランチへの強制プッシュを無効にします](https://docs.gitlab.com/user/project/repository/branches/protected/#allow-force-push-on-a-protected-branch)。
   - [署名のないコミットを拒否するプッシュルール](https://docs.gitlab.com/user/project/repository/push_rules/#require-signed-commits)を有効にします。
   - [未検証のユーザーを拒否するプッシュルール](https://docs.gitlab.com/user/project/repository/push_rules/#verify-users)を有効にし、コミットのコミッターのメールアドレスが、プッシュするユーザーのアカウントで検証済みのメールアドレスであることを必須にします。
   - [一致しないユーザー名を拒否するプッシュルール](https://docs.gitlab.com/user/project/repository/push_rules/#verify-users)を有効にし、作成者とコミッターのメールアドレスが同じ場合、コミットの作成者名がプッシュするユーザーの GitLab アカウント名と一致することを必須にします。
   - [コミットの作成者が GitLab ユーザーであるかを確認するプッシュルール](https://docs.gitlab.com/user/project/repository/push_rules/#verify-users)を有効にします。
   - [ユーザーによる `git push` での Git タグ削除を禁止する設定](https://docs.gitlab.com/user/project/repository/push_rules/#prevent-unintended-consequences)を有効にします。UI と API からは引き続きタグを削除できるため、保護タグまたは不変タグと組み合わせてください。
   - [シークレットファイルのプッシュを防止するプッシュルール](https://docs.gitlab.com/user/project/repository/push_rules/#prevent-pushing-secrets-to-the-repository)を有効にします。このルールはファイル名で照合するため、ファイルの内容をスキャンするシークレットプッシュ保護を置き換えるものではなく、補完するものです。

1. <a id="mr-approval-rule-configurations"></a>**レビューと承認を必須にします。**
   - GitLab の[コードレビューガイドライン](/handbook/engineering/workflow/code-review/)に従います。
   - レビューされていないコミットがマージされないよう、[マージリクエスト承認ルール](https://docs.gitlab.com/user/project/merge_requests/approvals/rules/)を設定します。
   - **設定 > マージリクエスト**で、[**承認可能なすべてのユーザー**ルール](https://docs.gitlab.com/user/project/merge_requests/approvals/rules/#code-owners-as-approvers)の**必要な承認数**を 1 に設定します。これにより、承認できる Code Owner がいない場合でも、すべてのマージリクエストで作成者以外の誰かによる 1 件の承認が必要になります。[承認ルールの組み合わせ](#how-the-approval-rules-combine)を参照してください。
   - 新しいコミットが追加されたときに承認をすべて取り消す[すべての承認を取り消す](https://docs.gitlab.com/user/project/merge_requests/approvals/settings/#remove-all-approvals-when-commits-are-added-to-the-source-branch)設定を有効にします。
   - [マージリクエスト作成者による承認を禁止する](https://docs.gitlab.com/user/project/merge_requests/approvals/settings/#prevent-approval-by-merge-request-creator)設定を有効にします。
   - [コミットを追加したユーザーによる承認を禁止する](https://docs.gitlab.com/user/project/merge_requests/approvals/settings/#prevent-approvals-by-users-who-add-commits)設定を有効にします。
   - [マージリクエストでの承認ルールの編集を禁止する](https://docs.gitlab.com/user/project/merge_requests/approvals/settings/#prevent-editing-approval-rules-in-merge-requests)設定を有効にします。
   - 適用される SOX や FedRAMP の統制を含め、法律、規制、または契約が要求する場合は、人による承認を必須にします。

1. <a id="note-on-usage-of-code-owners"></a>**Code Owner の承認を必須にします。**
   - [Code Owners ファイルでファイルの所有者を定義します](https://docs.gitlab.com/user/project/codeowners/#codeowners-file)。
   - `* @group/owners` のような、すべてのファイルに一致する行を独立したセクションに追加し、`@group/owners` を自分のチームのグループに置き換えます。`*` によって、すべてのファイルに Code Owner が割り当てられます。
   - すべての保護されたブランチで、[Code Owner 承認](https://docs.gitlab.com/user/project/repository/branches/protected/#require-code-owner-approval)を有効にします。
   - マージリクエストが Code Owner の所有するファイルを変更する場合、少なくとも 1 人の Code Owner による承認を必須にします。
   - Code Owner によるレビューが必要なファイルには、[除外パターン（`!`）](https://docs.gitlab.com/user/project/codeowners/reference/#exclusion-patterns)と[オプションのセクション（`^`）](https://docs.gitlab.com/user/project/codeowners/reference/#optional-sections)を使用しないでください。

1. **シークレットの漏えいを防ぎます。**
   - [シークレットプッシュ保護](https://docs.gitlab.com/user/application_security/secret_detection/secret_push_protection/)を有効にします。

1. **トークンのアクセスを制限します。**
   - サービスアカウントには、個人アクセストークンではなくプロジェクトまたはグループアクセストークンを使用します。有効期限とスコープの要件を含め、[トークン管理標準](/handbook/security/policies_and_standards/token-management-standard/)に従います。
   - CI ジョブトークンのアクセスを、明示的な[認可済みプロジェクトとグループの許可リスト](https://docs.gitlab.com/ci/jobs/ci_job_token/#add-a-group-or-project-to-the-job-token-allowlist)に制限します。[きめ細かな権限](https://docs.gitlab.com/ci/jobs/fine_grained_permissions/)を使用して、各エントリに必要な権限だけを付与します。

1. **CI/CD 変数を保護します。**
   - シークレットまたは認証情報を含むすべての CI/CD 変数を[マスクして非表示にし](https://docs.gitlab.com/ci/variables/#cicd-variable-security)、[それらの変数を保護されたブランチに制限します](https://docs.gitlab.com/ci/variables/#protect-a-cicd-variable)。
   - 手動で開始されたパイプラインで CI/CD 変数が上書きされないよう、[**パイプライン変数を使用するための最小ロール**](https://docs.gitlab.com/ci/variables/#restrict-pipeline-variables)を**許可しない（No one allowed）** に設定します。

1. <a id="pipeline-and-cicd-configurations"></a>**CI の依存関係を検証します。**
   - [CI の依存関係を固定バージョンに固定します](/handbook/security/best-practices/supply-chain-security-for-dependencies/#supply-chain-security-best-practices)。`latest` のような参照先が変わる参照は使用しないでください。
   - CI ジョブで使用する前に、パッケージ、ツール、コンテナイメージの[完全性を検証します](/handbook/security/best-practices/supply-chain-security-for-dependencies/#supply-chain-security-best-practices)。署名済みのイメージやアーティファクトについては、[署名の検証](https://docs.gitlab.com/ci/yaml/signing_examples/#verification)を参照してください。

1. **セキュリティスキャンを実行します。**
   - すべてのマージリクエストパイプラインで SAST、依存関係スキャン、シークレットスキャンを実行します。[マージリクエストパイプラインでのセキュリティスキャン](https://docs.gitlab.com/user/application_security/detect/security_configuration/#use-security-scanning-tools-with-merge-request-pipelines)を参照してください。
   - デフォルトブランチからビルドされるすべてのコンテナイメージで、[コンテナスキャン](https://docs.gitlab.com/user/application_security/container_scanning/)を有効にします。
   - すべての Infrastructure as Code の変更でセキュリティ設定の誤りを確認するため、[Infrastructure as Code スキャン](https://docs.gitlab.com/user/application_security/iac_scanning/)を有効にします。

1. **マージチェックを必須にします。**
   - マージ前に CI パイプラインの成功を必須にします。
   - ターゲットブランチと比較して、セキュリティスキャンで新たに検出された High または Critical の脆弱性について承認を必須にするよう、[マージリクエスト承認ポリシー](https://docs.gitlab.com/user/application_security/policies/merge_request_approval_policies/)を設定します。

1. **公開されたリリースタグを保護します。**
   - セマンティックバージョニングに従うリリースタグからソフトウェア（CI コンポーネント、CLI、パッケージなど）を配布するすべてのプロジェクトでは、[保護されたタグ](https://docs.gitlab.com/user/project/protected_tags/)を Maintainer、または特定のユーザーやグループに制限します。

1. **公開されたパッケージを保護します。**
   - 公開レジストリにパッケージを公開する前に、許可されたファイルやファイルパターンの承認済みリストに照らして内容を確認します。npm パッケージの場合は、[パッケージの内容に関するガイダンス](https://docs.gitlab.com/development/npmjs/#securing-package-metadata)に従います。
   - サポートされている場合は、[パッケージ保護ルール](https://docs.gitlab.com/user/packages/package_registry/package_protection_rules/)を設定して、パッケージをプッシュまたは削除できるユーザーを制限します。

1. **本番イメージとデプロイを保護します。**
   - 本番イメージをプッシュ、上書き、削除できるユーザーを制限します。本番タグのパターンには[保護されたコンテナタグ](https://docs.gitlab.com/user/packages/container_registry/protected_container_tags/)を使用し、本番イメージのみを保持するリポジトリには[保護されたコンテナリポジトリ](https://docs.gitlab.com/user/packages/container_registry/container_repository_protection_rules/)を使用します。
   - 本番イメージの semver バージョンタグに[不変のコンテナタグ](https://docs.gitlab.com/user/packages/container_registry/immutable_container_tags/)を設定して、公開後に誰も上書きや削除できないようにします。
   - [保護された環境](https://docs.gitlab.com/ci/environments/protected_environments/)を設定して、本番環境にデプロイできるユーザーを制限します。
   - 本番デプロイジョブを保護されたブランチに制限します。[デプロイの安全性に関するガイダンス](https://docs.gitlab.com/ci/environments/deployment_safety/)を参照してください。

質問がある場合は、`#security-help` で尋ねてください。

## 設定例 {#configuration-examples}

<a id="example-1-of-protected-branch-settings-configured-to-require-an-mr"></a>

### 保護されたブランチ {#protected-branches}

![マージリクエストを必須にする保護されたブランチ設定](/images/protected_branch_settings_example.jpg "保護されたブランチ設定")

<a id="example-1-of-mr-approval-rules-configured-without-code-owners"></a>
<a id="example-2-of-mr-approval-rules-configured-with-code-owners"></a>

### Code Owners を使用する承認ルール {#approval-rules-with-code-owners}

![Code Owners を使用するマージリクエスト承認ルール](/images/mr-approvals-with-code-owners.png "Code Owners を使用する承認ルール")

### 承認ルールの組み合わせ {#how-the-approval-rules-combine}

ファイルを承認できる Code Owner がいない場合、GitLab はそのファイルの [Code Owner 承認をスキップします](https://docs.gitlab.com/user/project/codeowners/troubleshooting/#approvals-shown-as-optional)。[レビューと承認を必須にする要件](#mr-approval-rule-configurations)にある**承認可能なすべてのユーザー**ルールにより、そのマージリクエストがレビューなしでマージされることを防ぎます。

たとえば、`@alice` が `app.rb` の唯一の Code Owner で、プロジェクトを離れたとします。

| 承認可能なすべてのユーザールール | 承認した人 | マージできますか？ | ベースラインを満たしますか？ |
|---|---|---|---|
| 無効 | 誰も承認していない | はい、レビューなしで可能 | いいえ |
| 1 件の承認 | 誰も承認していない | いいえ | はい |
| 1 件の承認 | 作成者ではない Bob | はい | はい |

次のような設定でも、GitLab は一部のファイルの Code Owner 承認をスキップします。

- **あるパスの所有者が 1 人だけの場合。** その人がマージリクエストを作成すると、承認できる人がいなくなります。直接のメンバーが少なくとも 2 人いるグループを使用し、そのグループを Developer 以上のロールでプロジェクトに招待してください。
- **[`!` による除外](https://docs.gitlab.com/user/project/codeowners/reference/#exclusion-patterns)や[オプションの `^` セクション](https://docs.gitlab.com/user/project/codeowners/reference/#optional-sections)** を、レビューが必要なファイルに使用している場合。
- **すべてのファイルに一致する `*` が他の行と同じセクションにある場合。** GitLab はファイルに一致する最後の行を使用するため、`*` の下に `/docs/ @alice` があると、`/docs/` の所有者は `@alice` だけになります。`*` は独立したセクションに配置してください。

## 継続的なモニタリング {#ongoing-monitoring}

これらのベースライン構成を要求する基準を満たすプロジェクトは、私たちのこのページに示されているガイダンスに従っていることを確認する継続的コントロールモニタリングプログラムの一環として、[GitLab Security Compliance チーム](/handbook/security/security-assurance/security-compliance/)によって構成テストのためにいつでも選択される可能性があることに注意してください。プログラムの概要については、[GCF セキュリティコントロールライフサイクル](/handbook/security/security-assurance/security-compliance/security-control-lifecycle/)ページを参照してください。

継続的なコントロールモニタリングの対象は、現在、保護されたブランチと MR 承認の設定のみです。パイプラインと CI/CD の統制は、まだ対象に含まれていません。

Security Compliance チームはまた、上記で概説されたすべての MR 承認および保護されたブランチ設定について、[Devo SIEM ツールでの検出/アラート](https://gitlab.com/gitlab-com/gl-security/security-operations/sirt/devo/-/tree/main/detections/secassurance?ref_type=heads)と Slack を使用してライブモニタリングを実装しています。設定の変更の結果として、適切な承認/SOD なしに MR がマージされた場合、根本原因を特定して修復を実行するための[観察](/handbook/security/security-assurance/observation-management-procedure/) Issue が開かれます。修復には、なぜ変更されたかを理解する、設定をコンプライアンスに戻す、適切な承認や職務分掌（SOD）なしにマージされた MR をレビューして悪意のある変更が含まれていないことを確認する、必要に応じて遡及的な承認を取得するなどのステップが含まれます。Security Compliance はまた、変更の根本原因を特定し、設定がチームの開発作業を完了するために変更される必要がないようにワークフローの変更を実装することに向けて作業するために、変更を行った個人とプロジェクトを所有/作業するチームの管理を巻き込みます。

### さらなるセキュリティ推奨事項 {#further-security-recommendations}

1. 変数を平文で保存したり、包括的なシークレット管理のためにマスクされた環境変数に依存したりしないでください。代わりに、[外部シークレットストレージソリューション](/handbook/security/external-secret-storage)を設定してください
1. プロジェクトの[脅威モデルの作成](/handbook/security/product-security/security-platforms-architecture/application-security/threat-modeling/howto/)を強く検討してください。
1. プロジェクトがより確立された時点で、[AppSec レビュー](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews/)を依頼することを検討してください。
1. さらに質問がある場合は、AppSec チーム (`@gitlab-com/gl-security/appsec` および `#security_help`)に連絡してください。

## 参考文献 {#references}

- [GitLab リポジトリ](/handbook/engineering/workflow/gitlab-repositories/#creating-a-new-project) (新しいプロジェクト作成のガイダンス)
- [変更管理ポリシー](/handbook/security/security-and-technology-policies/change-management-policy/)
- [GCF セキュリティコントロールライフサイクル](/handbook/security/security-assurance/security-compliance/security-control-lifecycle/)
