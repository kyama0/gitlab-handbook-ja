---
title: "セキュリティアシュアランス - 自動化ライブラリ"
upstream_path: /handbook/security/security-assurance/governance/automation-library/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-30T16:57:54+00:00"
---

## チームのために自動化されているか？

このページは、セキュリティアシュアランスのどのコンポーネントが自動化されており、チームメンバーが利用できるかについての出発点を提供することを目的としています。これにはチームメンバーが必要に応じて実行できるアドホック自動化と、現在進行中のスケジュールされた自動化が含まれます。

各自動化には、利用可能な機能の簡単な説明と関連するプロジェクトへのリンクが含まれます。パイプラインへの入力など、自動化の実行方法に関する詳細なガイダンスは、必要に応じて各自動化の詳細READMEにあります。

何が自動化できるかについて他のアイデアがあれば、[Security Assurance Automation project](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance-and-field-security/governance/security-assurance-automation-subgroup/security-assurance-automation)にIssueを開いてください。

### レイアウト

このページに追加される各自動化には、最低限以下の詳細を含める必要があります。

- アンカーとしてのヘッダータイトル
- 簡単な説明
- リポジトリリンク（プライベート/限定アクセスプロジェクトの場合あり）
- 質問のための最適な連絡先

### 何が常に稼働しているか？

#### Escalator Engine

- この自動化は、特定のラベルが付いていないオープンIssueや期限を過ぎたオープンIssueなど、定義された条件を満たすIssueを「エスカレート」するために、特定のプロジェクトに対する定義されたルールセットを取得してコメントを残します。別のプロジェクトでこれを設定したい場合は、ぜひ連絡してください！
- [Primary GitLab Project Link](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance-and-field-security/governance/security-assurance-automation-subgroup/escalator)
- 連絡先:
  - [Donovan Felton - Security Assurance Engineer](https://gitlab.com/dfelton)
  - [James Sandlin - Staff Security Assurance Engineer](https://gitlab.com/jsandlin)

#### CM-5 自動テスト（プロジェクト設定によるSOD強制のためのテスト）

- この自動化は、キュレーションされた重要プロジェクトのリストにあるどのプロジェクトが、MR承認、承認ルール、保護ブランチ設定をレビューしてリポジトリ変更にSODを強制するように構成されているかの詳細を含むテストワークブックを毎週生成します。出力は、SODが強制されないと記録された失敗を引き起こした個々の設定の詳細を含むExcelワークブックです。
- [Primary GitLab Project Link](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance-and-field-security/governance/security-assurance-automation-subgroup/gitlab-testing-and-populations)
- 連絡先: [Byron Boots - Senior Security Assurance Engineer](https://gitlab.com/byronboots)

#### ユーザーアクセスレビューのリストリクエスト

- この自動化は、Authomize（ユーザーアクセスレビューツール）に統合できない、またはまだ統合されていないシステムについてUARリストリクエストを生成します。リクエストのスケジュールはリストごとに定義され、Issueは正しいチームメンバーに自動的にアクションのために割り当てられます。
- [Primary GitLab Project Link](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance-and-field-security/governance/security-assurance-automation-subgroup/user-access-review-pipelines)
- 連絡先: [Byron Boots - Senior Security Assurance Engineer](https://gitlab.com/byronboots)

#### 監査サポートリクエスト

- この自動化は、監査活動に関連するリクエスト/マイルストーン/アクション項目を持つIssueを生成します。作成されるIssueのスケジュールは、作成されるIssueごとに定義され、Issueは正しいチームメンバーに自動的にアクションのために割り当てられます。
- [Primary GitLab Project Link](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance-and-field-security/governance/security-assurance-automation-subgroup/recurring-audit-prep)
- 連絡先: [Byron Boots - Senior Security Assurance Engineer](https://gitlab.com/byronboots)

#### 定期的なチームアクションIssue

- これらの自動化は、毎週のアクション項目、ハイライト、その他の定期的な作業活動を追跡するためにIssueを毎週生成します。
- プロジェクトリンク
  - [リスクチーム](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance-and-field-security/governance/security-assurance-automation-subgroup/security-risk-recurring-issues)
  - [コマーシャルコンプライアンス](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance-and-field-security/governance/security-assurance-automation-subgroup/weekly-highlights)
- 連絡先: [Byron Boots - Senior Security Assurance Engineer](https://gitlab.com/byronboots)

### アドホックで実行できるものは？

#### Feedback Bot

- この自動化により、チームメンバーがSlackを通じて他のチームメンバーにプライベートなフィードバックを送信できます。
- [Primary GitLab Project Link](https://gitlab.com/gitlab-com/gl-security/security-assurance/feedback-bot)
- 連絡先: [Donovan Felton - Security Assurance Engineer](https://gitlab.com/dfelton)

#### GitLab Export

- この自動化により、ユーザーはアカウント、デプロイメント、Issue、ラベル使用状況、グループ/プロジェクトメンバー、パーソナルアクセストークンの一覧を使いやすい.csv形式で生成できます。
- [Primary GitLab Project Link](https://gitlab.com/gitlab-private/gl-security/security-assurance/sec-compliance/gitlab-export)
- 連絡先: [Byron Boots - Senior Security Assurance Engineer](https://gitlab.com/byronboots)

#### 自動アクセスリクエストIssue作成

- この自動化は、Access Reviewツールから完成したUAR出力を取り込み、情報を標準化されたGitLab Issue Access Requestにパースして、適切なシステムオーナーがアクションできるようにします。
- [Primary GitLab Project Link](https://gitlab.com/gitlab-private/gl-security/security-assurance/security-assurance-automation/uar-ar-autocreate)
- 連絡先: [Byron Boots - Senior Security Assurance Engineer](https://gitlab.com/byronboots)

#### 自動化された退職者アクセスレビュー

- この自動化は、Access ReviewツールからUAR出力を取り込み、チームメンバーと契約者の記録に対して退職ユーザーのレビューを実施します。強くマッチした身元についてはアカウント詳細が入力され、弱くマッチした身元についてはレビューを容易にするために発見された詳細がコンパイルされます。
- [Primary GitLab Project Link](https://gitlab.com/gitlab-private/gl-security/security-assurance/security-assurance-automation/uar-terminations-check)
- 連絡先: [Byron Boots - Senior Security Assurance Engineer](https://gitlab.com/byronboots)

#### 監査イベントリスト

- この自動化は、定義された期間内の特定のプロジェクトのすべての監査イベントのリストを生成します。実行時に、自動化はプロジェクトのSOD設定に影響を与える可能性のあるAudit Eventsをより詳細なレビューのためにフラグ付けもします。レポートは使いやすいExcel形式で出力されます。
- [Primary GitLab Project Link](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance-and-field-security/governance/security-assurance-automation-subgroup/scripts)
- 連絡先: [Byron Boots - Senior Security Assurance Engineer](https://gitlab.com/byronboots)

#### マージされたMRのリスト

- この自動化により、ユーザーは定義された期間における目的のプロジェクトのGitLab MRの一覧を、使いやすい.csv形式で生成できます。
- [Primary GitLab Project Link](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance-and-field-security/governance/security-assurance-automation-subgroup/gitlab-testing-and-populations)
- 連絡先: [Byron Boots - Senior Security Assurance Engineer](https://gitlab.com/byronboots)

#### クローズまたはオープンIssueのリスト

- この自動化により、ユーザーは定義された期間における目的のプロジェクトのGitLab Issueの一覧を、使いやすい.csv形式で生成できます。
- [Primary GitLab Project Link](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance-and-field-security/governance/security-assurance-automation-subgroup/gitlab-testing-and-populations)
- 連絡先: [Byron Boots - Senior Security Assurance Engineer](https://gitlab.com/byronboots)

#### CM-3 自動テスト（SOD違反のあるMRのテスト）

- この自動化により、ユーザーは特定の期間内のプロジェクトに対して、新しいレビューをリクエストせずに承認がキャプチャされた後にユーザーがMRに変更を加えるなど、マージされたMRがSOD違反を含んでいたかどうかの詳細を含むテストワークブックを生成できます。
- [Primary GitLab Project Link](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance-and-field-security/governance/security-assurance-automation-subgroup/gitlab-testing-and-populations)
- 連絡先: [Byron Boots - Senior Security Assurance Engineer](https://gitlab.com/byronboots)

## 関連リソース

- [Security Assurance Automation Team Page](/handbook/security/security-assurance/governance/security-assurance-automation/)

## <i class="fas fa-id-card" style="color:rgb(110,73,203)" aria-hidden="true"></i> 質問があります

- [Donovan Felton](https://gitlab.com/dfelton)、@dfelton、Security Assurance Engineer, Automation
- [James Sandlin](https://gitlab.com/jsandlin)、@jsandlin、Staff Security Assurance Engineer, Automation
- [Byron Boots](https://gitlab.com/byronboots)、@byronboots、Senior Security Assurance Engineer, Compliance
