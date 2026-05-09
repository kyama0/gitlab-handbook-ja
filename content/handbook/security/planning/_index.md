---
title: "セキュリティ計画"
no_list: true
upstream_path: /handbook/security/planning/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

## セキュリティ計画

**Security Planning** ページは、複数のセキュリティチームやプロジェクトをまたぐ、または GitLab 組織全体にまたがる Security Department のイニシアチブやプロジェクトの実装前の計画作業をカタログ化します。これには、Security によって使用されるツールの高レベルなアーキテクチャ設計から、新しいまたは成熟させる組織プロセスの開発まで含まれます。

**Security Plan** は、テキストが Epic、マイルストーン、Issue を作業を開始するのに十分な詳細で作成できるだけの内容になった時点で完了します。「完了した」プランの結果として、Proof-of-Concept やスパイクの形でさらなる作業が必要となる場合もあります。

**Security Plan** は、実装が始まった後に Single-Source-of-Truth（SSOT）となることを意図した *ものではありません*。計画以外のハンドブックページ、Runbook、関連するソースリポジトリ内のシステムドキュメントは最新の状態に保ち、引き続きイテレーションを続けるべきです。

**Security Plan** は単一の Epic と関連付け、このページにその Epic へのリンクを維持することが推奨されます。作成されたすべての Issue は、**Security Plan** にリンクを提供する代わりに、その Epic に関連付けることができます。

## ワークフロー

**Security Plan** は、イテレーションの開始や MVC の開発に十分な詳細を持たない Epic またはその他のアクションアイテムから始まります:

1. ソースが Issue である場合、Epic に昇格させます。
1. このディレクトリに新しい **Security Plan** を作成し、Epic にリンクします。
1. 特定のフィードバックを希望する領域については、MR コメントを使用して特に注意を引きます。
1. **Plan** から Issue は任意のタイミングで作成し始めることができます。
1. MR がマージされた後、カバーされていない残りの作業について Issue を作成します。

## ヒント

- ヘッダー（`####`）を使用するか、手動でアンカー（`[](){: name="hello-world"}`）を作成すると、GitLab から Plan の特定セクションを参照しやすくなります。

## プラン

| プラン | その他のリソースとリンク |
|------|--------------------------|
| [開発とデプロイメントのセキュリティ要件](/handbook/security/planning/security-development-deployment-requirements/) | |
