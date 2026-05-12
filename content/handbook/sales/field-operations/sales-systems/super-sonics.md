---
title: "動的クォートテンプレート"
description: "このページでは、Super Sonics プロジェクトをサポートする Salesforce 内の動的クォートテンプレート自動化について概説します。エンドユーザー向けの情報、よくある質問への回答、コード内の関連する技術的なロジックの場所を含みます。"
upstream_path: /handbook/sales/field-operations/sales-systems/super-sonics/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-12T10:00:00Z"
translator: claude
stale: false
---

## 関連するハンドブックセクション

- [内部チームハンドブック](https://gitlab-com.gitlab.io/licensing/)

## 動的クォートテンプレート自動化

Super Sonics としても知られる動的クォートテンプレート自動化は、ユーザー入力、クォートで自動検出される特性、過去の選択を組み合わせて、希望する法的文言を含むクォートテンプレートを自動的に生成し、システムの実際の挙動を制御するために Zuora と同期するコントロールフローです。選択可能な機能や自動的に追加される機能が多数あります。これらの機能の詳細については、内部ハンドブックを参照してください（リンクは近日公開予定）。

## FAQ

- クォートに文言を追加するにはどうすればよいですか？
  - クォートレイアウトには、`[Language]` または `[Cloud Lic]` で始まる特定のフィールドがあり、ユーザーが手動で選択することでクォートに文言を追加できます。

- `[Language]`/`[Cloud Lic]` チェックボックスのいずれかをクリックしましたが、クォートを生成できません。
  - 許可されていないクォート文言と明細項目の組み合わせを選択している可能性があります。この場合、エラーが表示されるか、クォートに承認が必要であることが示されることがあります。
  - エラーが表示された場合は、エラーの文言を確認し、必要に応じて該当するチェックボックスの選択を解除して解決を試みてください。
  - 承認が必要な場合、必要な承認はクォート承認セクションで確認できます。

- 自動化では追加できないテンプレートに文言を追加する必要があります。どうすれば追加できますか？
  - システムでサポートされていない文言をクォートに追加する必要がある場合は、[セールスサポート](/handbook/sales/field-operations/sales-operations/) に手動での支援をリクエストしてください。これらのリクエストのレビューと承認、システムを上書きして必要なクォートを生成する支援が可能です。

- 選択していない文言がクォートに表示されています - どうして／なぜですか？
  - SFDC がクォートで自動的にスキャンするシナリオが多数あります。たとえば、クォートで MSA をスキャンします。MSA がクォートに関連付けられていることが検出されると、MSA の文言が自動的にクォートに追加されます。
  - 自動的に追加された文言が誤って追加されたと思われる場合は、[セールスサポート](/handbook/sales/field-operations/sales-operations/) に追加のサポートを依頼してください。

- まだ質問がある場合、どのようにヘルプをリクエストしますか？
  - まだ質問がある場合やエラーが発生している場合は、[セールスサポート](/handbook/sales/field-operations/sales-operations/) に追加のサポートを依頼してください。

## ロジックの場所

- `ZuoraQuoteClass`
  - `quoteTemplatePlinkoBoard`
- `ZuoraQuoteTest`
  - `quoteTemplatePlinkoBoard`
  - `quoteTemplatePlinkoBoardHighlightedSkus`
  - `quoteTemplatePlinkoBoardExistingSub`
  - `quoteTemplatePlinkoBoardExistingMSA`
  - `quoteTemplatePlinkoBoardGCP`
- `ZuoraQuoteTrigger`
