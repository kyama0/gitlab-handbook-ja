---
title: "外部セキュリティコミュニケーション手順"
description: "セキュリティに関するコミュニケーションを扱うための手順"
upstream_path: /handbook/security/external-security-communications-procedure/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-10T15:01:01-07:00"
---

## 目的

この手順は、外部コミュニケーションのカテゴリ／トピックについて、Security Organization のオーナーシップと承認権限を明確にすることを目的としています。

## スコープ

この手順は、Security 組織に関連する外部コミュニケーションに適用されます。

## 役割と責任

Security が所有・承認する（外部コミュニケーション）:

1. セキュリティイベントや特定された脆弱性に関する顧客コミュニケーション
1. 通常および緊急のセキュリティリリース
1. すべてのバグバウンティプログラムの更新とコミュニケーション
1. 顧客対応コミュニケーション

Security の共有コミュニケーション活動: Corporate Marketing がレビュー・承認する:

1. GitLab ブログ（Unfiltered ブログではなく）に公開されるブログ記事: コーポレートブログチームがセキュリティ承認済みブログに対して最終的な編集レビューを行う
1. インシデント対応コミュニケーション: 情報漏洩、顧客侵害、データ損失。これらは通常、複数の方面からの対応が必要であり、法務、プロダクト、マーケティング、サポートなど複数のコーポレート部門からの入力、レビュー、承認を必要とします
1. SOC 2 や FedRAMP のようなセキュリティ認証および取り組みに関連する外部通知

Security コンサル - Corporate Marketing 所有

1. インタビュー／メディアエンゲージメント
1. 寄稿記事

## 手順

通常、Security Division の対応が必要となるコミュニケーション領域は 3 つあります。

- 新機能。ほとんどの場合、Security Division はすでにそのプロセスに関与していますが、特定の文言が必要な場合は Security Division を必ず巻き込みます。これは Security Communications Issue を**必要としない**点に注意してください。
- インシデント。情報漏洩、機密情報の偶発的な開示などが該当します。通常はセキュリティ上の欠陥ではなく、設定、権限などの不備が関係します。
- 脆弱性。社内または HackerOne プログラム経由で報告された、GitLab のコードや設定に関わるセキュリティ Issue。

通常のプロセスは、インシデントが封じ込められた後、またはセキュリティ上の欠陥が修正された後に情報を公開するというものです。

注: インシデントによっては、潜在的な機密性のため公開通知を行わない可能性が十分にあります。確信が持てない場合は [GitLab SAFE フレームワーク](/handbook/legal/safe-framework/)に従ってください。ただし、Security Division が、GitLab とセキュリティコミュニティ全体に有益と判断した場合、設定の推奨事項や情報を保護するための新しい技術といった情報をリリースする可能性があります。このタイプの開示は必ずしも特定のタイムラインや要件を必要としませんが、それでもタイムリーに行われるべきです。

いずれにしても、特定の Issue やインシデントを問わず、外部コミュニケーションのリリースは [Security Communications Issue](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/issues/new)（社内リンク）から始まります。この Issue を作成する際は最も適切なテンプレートを選択し、質問があれば GitLab 内部 Slack チャンネル `#security` で確認してください。

通常、Security Department の対応が必要となるコミュニケーション領域は 3 つあります。

- 新機能。ほとんどの場合、Security Department はすでにそのプロセスに関与していますが、特定の文言が必要な場合は Security Department を必ず巻き込みます。これは Security Communications Issue を**必要としない**点に注意してください。
- インシデント。情報漏洩、機密情報の偶発的な開示などが該当します。通常はセキュリティ上の欠陥ではなく、設定、権限などの不備が関係します。インシデントが公開対応を必要とする場合は、[Security Communications Issue](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/issues/new) を起票してください。
- 脆弱性。社内または HackerOne プログラム経由で報告された、GitLab のコードや設定に関わるセキュリティ Issue。公的なコミュニケーションは[セキュリティリリースプロセス](https://gitlab.com/gitlab-com/gl-infra/readiness/-/tree/master/library/security-releases-development)で扱います。そのプロセス中に、担当の AppSec エンジニアが [Security Communications Issue](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/issues/new) を起票し、セキュリティリリースに関するコミュニケーションを送信する必要があります。これがほとんどのセキュリティ関連コミュニケーションが生成される主な領域です。

セキュリティ関連のパッチが、GitLab のコードベースが継続的に更新されるなかで通常の GitLab [毎月リリース](/handbook/engineering/releases/)に含まれることは珍しくないことに留意してください。一方、脆弱性は通常の GitLab リリースのおよそ 1 週間後に行われる毎月のセキュリティリリースで対応されます。

## 例外

この手順への例外は、[情報セキュリティポリシー例外管理プロセス](/handbook/security/controlled-document-procedure/#exceptions)に従って追跡されます。

## 参考文献

[セキュリティインシデントコミュニケーションプラン](/handbook/security/security-operations/sirt/security-incident-communication-plan/)
