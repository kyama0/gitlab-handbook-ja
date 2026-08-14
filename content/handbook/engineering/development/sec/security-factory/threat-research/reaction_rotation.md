---
title: Vulnerability Research グループのリアクションローテーション
upstream_path: /handbook/engineering/development/sec/security-factory/threat-research/reaction_rotation/
upstream_sha: c649549e971e74175edf1d5bc1190fcc86e359e6
lastmod: "2026-08-13T15:10:33+03:00"
translated_at: "2026-08-14T07:25:00+09:00"
translator: codex
stale: false
---

## リアクションローテーション

2 週間（サイクル）ごとに、チームのエンジニア 2 名がリアクションローテーションの役割に割り当てられます。1 名はプライマリ、もう 1 名はセカンダリです。割り当ては[ローテーションスケジュール](https://gitlab.com/groups/gitlab-org/secure/vulnerability-research/-/wikis/home/Reaction-Rotation)に記載されています。

セカンダリの役割は、プライマリが不在または対応能力を超えた場合に代わりに対応することです。そのような場合、セカンダリはプライマリと同じ責任を担いますが、それ以外の場合はマイルストーン向けに計画されたタスクに取り組みます。

### 責任

#### サポートリクエスト {#requests-for-help}

Issue は [request-for-help](https://gitlab.com/gitlab-com/request-for-help) プロジェクトに作成されます。リアクションローテーション中、割り当てられたエンジニアは[オープンな Issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/?sort=created_date&state=opened&or%5Blabel_name%5D%5B%5D=Help%20group%3A%3Avulnerability%20research&or%5Blabel_name%5D%5B%5D=group%3A%3Avulnerability%20research&first_page_size=20)をレビューし、各 Issue に関与しなければなりません。

サポートリクエストがバグや機能リクエストを示している場合は、パブリックトラッカーに Issue を作成し、サポートリクエストの Issue にリンクを貼り、後者をクローズします。

#### Slack の質問

[Vulnerability Research Slack チャンネル](https://gitlab.enterprise.slack.com/archives/CSELDERRN)を確認し、寄せられた質問に回答するか、回答できそうな人へ引き継ぐ、またはメンションします。[サポートリクエスト](#requests-for-help)と同様に、質問がバグや機能リクエストに関するものであれば、Issue を作成します。

#### CNA 業務

CNA 業務の詳細は[グループのハンドブックページ](cna.md)に記載されています。

#### GLAS ルールリリースサイクル

GLAS ルールのリリースプロセスを追跡・管理します（マイルストーンごと、つまり 2 サイクルごとに行われます）。

1. GLAS ルールの最新バージョンを取得します。
2. GLAS アナライザーでそのバージョンをバンプし、新しいアナライザーバージョンをリリースします。
3. Slack および関連ドキュメントでリリースをステークホルダーに周知します。

### リアクションローテーションの Issue トラッキング

不要なオーバーヘッドなしにリアクションローテーション活動を追跡するため、エンジニアが使用できる[シンプルな Issue テンプレート](https://gitlab.com/gitlab-org/secure/general/-/blob/master/.gitlab/issue_templates/Reaction%20Rotation%20Vulnerability%20Research.md)が用意されています。このテンプレートは、必須活動を文書化するための基本的な構造を提供し、主要エリアをモニタリングするための便利なクエリを含んでいます。

エンジニアはこのテンプレートをローテーション作業をサポートする柔軟なツールとして使用し、このハンドブックで概説されているコア責任に対応しながら、自分のワークフローに合わせて適宜調整してください。
