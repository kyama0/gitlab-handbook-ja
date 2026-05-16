---
title: "Static Analysis グループ リアクションローテーション"
upstream_path: /handbook/engineering/development/sec/secure/static-analysis/reaction_rotation/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T07:31:38Z"
translator: claude
stale: false
lastmod: "2025-10-24T12:17:24+08:00"
---

## リアクションローテーション

各マイルストーンでは、チームのエンジニア 2 名がリアクションローテーションの役割を担います。1 名がプライマリ、もう 1 名がセカンダリです。アサインは [ローテーションスケジュール](https://gitlab.com/groups/gitlab-org/-/epics/17115#rotation-schedule) で管理されます。

セカンダリの役割は、プライマリが不在または過負荷の場合に代替することです。その場合、セカンダリはプライマリと同じ責務を担いますが、それ以外のときはマイルストーン向けに計画されたタスクに取り組みます。

### 責務

リアクションローテーションの役割には以下の責務があります:

- [SAST アナライザー脆弱性管理](#sast-analyzer-vulnerability-management) を実施する
- [ヘルプリクエスト](#requests-for-help) に対応する
- [Slack の質問](#slack-questions) に回答する
- [GLAS 制限 Issue](#glas-limitations-issues) に対応する
- ローテーション終了時に [`@gitlab-org/secure/static-analysis/reaction-rotation`](https://gitlab.com/groups/gitlab-org/secure/static-analysis/reaction-rotation/-/group_members?with_inherited_permissions=exclude) のメンバーシップを更新する（現在のエンジニアを削除し、次のエンジニアを追加する）。

プライマリエンジニアは、チームの他のエンジニアに支援を求めることができます。たとえば、専門外のタスクで既にかなりの時間（数時間）を費やしても進展がない場合や、タスクの量に追いつけない場合などです。

支援はまずセカンダリエンジニアから行い、マイルストーン成果物への影響を最小化することが望まれますが、すべてのエンジニアはローテーションタスクを支援するために呼び出される可能性があることを念頭に置いてください。

<span id="sast-analyzer-vulnerability-management"></span>

#### SAST アナライザー脆弱性管理

Static Analysis が所有するアナライザーの脆弱性をトリアージし、対処する必要があります。

1. [SAST/IaC の脆弱性一覧（SLO 順）](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=label_priority_desc&state=opened&label_name%5B%5D=group%3A%3Astatic%20analysis&label_name%5B%5D=bug%3A%3Avulnerability&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Package%3A%3AFix%20Unavailable&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Package%3A%3AWill%20Not%20Be%20Fixed&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Base%20Container%3A%3AFix%20Unavailable&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Base%20Container%3A%3AWill%20Not%20Be%20Fixed&first_page_size=100) にアクセスします。
1. 重大度の高い順に自分自身をIssueにアサインします。
1. Issue に取り組みます:
   1. バグを修正する、または
   1. Issue を開いたままにする必要があるかどうかを判断し、SLO 例外プロセスを処理する。

<span id="requests-for-help"></span>

#### ヘルプリクエスト

Issue は [request-for-help](https://gitlab.com/gitlab-com/request-for-help) プロジェクトに作成されます。リアクションローテーション中は、アサインされたエンジニアが [オープンな Issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Astatic%20analysis&first_page_size=20) をレビューし、各 Issue に対応する必要があります。

ヘルプリクエストがバグや機能リクエストを指摘している場合は、公開トラッカーに Issue を作成し、そのリンクをヘルプリクエストの Issue に貼り付けた上で後者をクローズしてください。

##### ヘルプリクエストのパターンからランブックを作成する

ヘルプリクエストの Issue を解決する際には、ランブックとして文書化する価値のあるアナライザー設定パターンを特定してください。これにより、同じ問題で顧客がエスカレーションを繰り返すのを防げます。

**ランブックとして記録すべきパターンの基準:**

- 特定のコマンドやチェックを伴う多段階の診断が必要なアナライザー設定の問題
- トラブルシューティングを通じて発見された、自明でないアナライザー設定の組み合わせによる解決策
- 既存のドキュメントからは明らかでない、既知のアナライザー制限に対する回避策

**ランブックエントリの作成:**

1. [Static Analysis ランブックページ](runbooks/) にランブックを追加します。
2. 以下の構造でランブックを整理します:
   - 問題を示す症状（アラート、エラーメッセージ、ユーザー報告）
   - 根本原因を確認するための診断手順（コマンド、クエリ、ログ分析）
   - 特定のアナライザー設定変更を含む解決手順
   - 関連するヘルプリクエストの Issue へのリンク
3. ページ上の既存エントリのランブック構造を参照してください。

一般的なトラブルシューティングのアドバイスではなく、アナライザー設定の具体的な解決策を文書化してください。

<span id="slack-questions"></span>

#### Slack の質問

[Static Analysis Slack チャンネル](https://gitlab.enterprise.slack.com/archives/CLA54H7PY) を確認し、質問に回答するか、回答できる可能性のある担当者に委任・メンションしてください。[ヘルプリクエスト](#requests-for-help) と同様に、バグや機能リクエストに関する質問の場合は Issue を作成してください。

<span id="glas-limitations-issues"></span>

#### GLAS 制限 Issue

Vulnerability Research チームは GLAS ルールの積極的なテストと改善を行っています。このプロセスで、エンジンのさまざまなバグや制限が特定されます。特定された各 Issue について詳細なドキュメントが作成されます。マイルストーンの計画時に、5 つの Issue が選択されてエピックに配置されます。リアクションローテーションに割り当てられたエンジニアは、これらの [オープン Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&label_name%5B%5D=GLAS%3AEngineLimitation&not%5Blabel_name%5D%5B%5D=priority%3A%3A4&not%5Blabel_name%5D%5B%5D=priority%3A%3A3&not%5Blabel_name%5D%5B%5D=priority%3A%3A2&not%5Blabel_name%5D%5B%5D=priority%3A%3A1&not%5Blabel_name%5D%5B%5D=feature%3A%3Aaddition&not%5Blabel_name%5D%5B%5D=feature%3A%3Aenhancement&first_page_size=100) をレビューして各 Issue に対応する必要があります。

ローテーションエンジニアの責務:

1. Issue のレビューとトリアージ:
   - Issue がバグ、エンジン制限、または機能リクエストのどれに該当するかを評価する。
2. エンジン制限または機能リクエストの場合:
   - [SAST アセスメントコーパス](https://gitlab.com/gitlab-org/secure/static-analysis/sast-assessment-corpus) に制限を文書化する。
   - 適切なラベルを適用する（例: \~"feature::enhancement" または \~"feature::addition"）。
   - Issue に適切なラベルとタグを付け、PM/EM が注目できるようにする。
3. 潜在的なバグの場合:
   - 根本原因を調査する（GLAS が専門外の場合は数時間以内に調査を制限する）。
   - バグと確認された場合:
     - \~"type::bug" ラベルを適用する。
     - 優先度付けに役立つ追加のコンテキストを Issue に提供する。
     - 優先度付けのために適切な PM/EM にタグを付ける。
4. Issue のラベルと情報の更新:
   - 調査に基づいてラベルを適切に調整する（例: 機能リクエストからバグへの変更）。
   - 関連する情報や調査結果を元の Issue に追加する。
5. エスカレーションと優先度付け:
   - 重大なバグや即座の対応が必要な Issue については、PM/EM にエスカレーションする。
   - PM/EM が優先度付けについて十分な情報に基づく判断を下せるよう、必要なコンテキストを提供する。

### リアクションローテーション Issue の追跡

不必要なオーバーヘッドなくリアクションローテーションの活動を追跡するため、エンジニアが使用できる [シンプルな Issue テンプレート](https://gitlab.com/gitlab-org/secure/general/-/blob/master/.gitlab/issue_templates/Reaction%20Rotation%20Static%20Analysis.md) が用意されています。このテンプレートは主要な活動を文書化するための基本的な構造を提供し、主要な分野を監視するための便利なクエリを含んでいます。

エンジニアはこのテンプレートをローテーション作業をサポートするための柔軟なツールとして使用し、このハンドブックで述べられたコアな責務に対応しながら、各自のワークフローに合わせて適応させることができます。
