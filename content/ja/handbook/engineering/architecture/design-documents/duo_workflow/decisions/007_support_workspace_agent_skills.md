---
title: "Duo Agent Platform ADR 007: ワークスペース Agent Skills のサポート"
status: proposed
creation-date: "2026-02-27"
authors: [ "@erran" ]
coach: [ ]
approvers: [ ]
owning-stage: "~devops::ai_powered"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/duo_workflow/decisions/007_support_workspace_agent_skills/
upstream_sha: ec55f130cc95389b6faf798cebffd864abdbb4c5
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

## コンテキスト

Agent Skills [（仕様書）](https://agentskills.io/specification) は、プログレッシブディスクロージャーを通じてエージェントのコンテキストウィンドウにスキルを注入するための参照構造を定義するものです。

Agent Skills は、特にローカル開発環境や CI/CD ワークフローにおける再利用可能なエージェント機能を定義するための軽量な業界標準として台頭しています。

スキルは、現在のワークスペース、リモートリポジトリ、またはリモートスキルカタログ・マーケットプレイスから読み込むことができます。

## 課題

公式インテグレーションを作成せずにいる場合、ユーザーは `.gitlab/duo/chat-rules.md` や `AGENTS.md` にカスタムインストラクションを定義する必要があります。これらは LLM に対して、`read_file` やその他のツールを使って `SKILL.md` ファイル全体をチャットセッションのコンテキストウィンドウに読み込んだり、リモートスキルをフェッチしたりするよう指示するものです。

スキルがコンテキストウィンドウに一貫して読み込まれないため、LLM がスキルに基づいて動作できるタイミングが不定になります。

## 目標

- Duo CLI、エディタ拡張機能、および Remote Flows を利用するユーザーに対して、すべての Duo デプロイメントでスキルをサポートする。
- SKILL.md ファイルをコンテキストに読み込む際の既存の Duo セキュリティガードレールを維持する。
- エージェント指示に対するトラストポリシーと署名済み sigstore バンドルが存在する場合に、認証（attestation）をトリガーする。

### 後方互換性

顧客は以下のコンポーネント間で協調アップグレードを必要とせずにスキルを利用できるようにします:

- GitLab インスタンス
- Duo Workflow Service
- AI Gateway
- Duo CLI またはエディタ拡張機能

セルフマネージドおよび Duo セルフホストの顧客は、インフラをアップグレードせずにスキルをオプトアウトできます。

これにより、GitLab コンポーネント間に新たなインターロック依存関係が導入されることを回避します。

## 対象外（Non-Goals）

- AI カタログへのスキルの追加
- 個人スキルプロジェクトの追加
- グループレベルのスキルプロジェクトの追加
- セッション開始後に追加されたスキルの動的ディスカバリー
- エンタープライズ管理構成の提供（具体的には、エージェント指示のトラストポリシー。これは ADR-009 で処理される）

## 決定

1. すべてのワークスペーススキルを走査し、それらの SKILL.md の YAML フロントマターを追加コンテキストとして含めることで、Agent Skills のプログレッシブディスクロージャーをサポートします。
1. 既存の GitLab Dedicated / セルフマネージドおよび Duo セルフホストデプロイメントをサポートするために既存ツールを活用します。
1. [Provenance](https://slsa.dev/spec/v0.2/provenance) および [Attestation](https://github.com/in-toto/attestation) によるコンテキストポイズニングリスクの軽減を推奨します。
1. Duo CLI、IDE、および Remote Flows コンテナイメージ向けのエンタープライズ管理ポリシーをサポートします。

## メリット

- スキルの自動的かつプログレッシブなディスクロージャーをサポートする
- `read_file` および `run_command` に対する既存のプロンプトおよびツールガードレールを活用する
- sigstore バンドルによるエージェント指示の認証（attestation）をサポートする
- 新しい追加コンテキストタイプに対して Duo Workflow Service および AI Gateway バックエンドの変更への依存を排除する

## デメリット

- 起動時に少数の追加トークンが導入される
- スキルコンテンツはオンデマンドで読み込まれ、コンテキスト内のエージェントスキルメタデータに基づいて LLM が読み込みを決定することに依存する
- Provenance と attestation は、公開アクセスできない GitLab インスタンスでのキーレス署名に対して運用上のオーバーヘッドを追加する
- ワークスペーススキルの Provenance サポートはリモートプロジェクトスキルに直接転用できない

## 脅威モデル

`read_file` および `run_command` に対する既存のプロンプトインジェクション検出とツールレスポンスフィルタリングにより、Agentic Chat ユーザーが利用できる既存のヒューマン・イン・ザ・ループ承認エクスペリエンスをすでに使用しています。

SKILL.md ファイルは、ユーザーが手動でリクエストした場合、または他の動的に読み込まれるエージェント指示ファイルを通じて、今日でもすでに読み込み可能です。

## 次のステップ

1. エンタープライズデプロイメント向けのエージェント指示に対するマネージドトラストポリシーをサポートする。
1. 現在のワークスペース外で定義されたスキルのフェッチをサポートする。
1. セッション開始後のスキル追加コンテキストの更新をサポートする。
