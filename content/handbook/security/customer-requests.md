---
title: 顧客起因のセキュリティインシデント発生時に GitLab.com 顧客へ提供する支援
description: GitLab.com の実装または利用に起因してセキュリティインシデントを経験した GitLab.com 顧客にどのように支援を提供するかのプロセス概要
upstream_path: /handbook/security/customer-requests/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
---

GitLab は、顧客の成功を支援することにコミットしています。GitLab.com の顧客が GitLab の実装または利用の結果としてセキュリティインシデントの支援を求めて連絡してきた場合、当社は可能な限りイベントに関する追加情報を提供することで調査を支援します。

## 顧客がセキュリティインシデントを経験した場合に GitLab はどのような支援を提供できるか?

GitLab.com の顧客が、[Audit Events](https://docs.gitlab.com/ee/administration/audit_event_reports.html) 機能を通じて利用可能な情報では顧客のアカウントで実行されたアクティビティに関する十分な情報が得られないと判断した場合、GitLab は特定の[条件と要件](#conditions-and-requirements)の下で追加のログ調査を行うことで合理的な支援を提供する場合があります。

## 誰に適用されるか?

これは、[Premium または Ultimate](https://about.gitlab.com/pricing/) プランの有償 GitLab.com SaaS 顧客全員に適用されます。詳細は[条件と要件](#conditions-and-requirements)を参照してください。

## このプロセスに関与するのは誰か?

カスタマーサクセスマネージャー (CSM) と GitLab Support は、当社の顧客の GitLab における主要な連絡先です。これらのチームは、顧客とのコミュニケーションが可能な限り効率的に行われることを保証し、ログリクエストに関するステータス更新を提供し、最終的にリクエストから生じる成果物を顧客に渡します。

GitLab Support は、リクエスト時から 1 か月以内の時間枠内にあり、ユーザー名や IP アドレスなどの個人データを開示しない、複雑でないアプリケーションログリクエストを処理します。

GitLab の Security Incident Response Team は、顧客対応運用のための社内[runbook](https://internal.gitlab.com/handbook/security/cross_functional_runbooks/customer_security_incidents/) に従って、複雑で広範なリクエストを処理します。効率を最大化し、タイムリーに結果を提供するため、これらのリクエスト中、顧客が関連するセキュリティチームと直接やり取りすることはできません。顧客とのすべてのコミュニケーションは GitLab Support または専任の CSM を通じて行われます。

## プロセス概要

1. 顧客は、必要な[条件と要件](#conditions-and-requirements)を満たすリクエストとともに、GitLab Support または CSM に連絡します。
1. サポートエンジニアまたは CSM は、Slack から `/SIRT` コマンドでワークフローを起動します。`/security` を選択すると、インシデントレスポンダーが confidential な SIRT Issue を作成するためのフォームに案内します。
1. この新規作成された SIRT Issue は、`@gitlab-com/gl-security/sirt` を直接タグ付けします。リクエストする顧客を Issue に追加して**はいけません**。
1. GitLab Legal `@lasayers` からの承認は、例外が必要な場合にのみ要求してください。
1. GitLab Support または CSM は、リクエストする顧客が当社のリクエスト用[条件と要件](#conditions-and-requirements)に準拠していることを確認します。
1. リクエストの種類に応じて、関連するチーム (GitLab Support または GitLab Security のいずれか) がケースの作業を開始します。新しい発見があるたびに Issue が更新されます。
1. GitLab Support または CSM は、Issue にキャプチャされた更新に基づいて、12 時間/営業日のベストエフォートペースで顧客にステータス更新を提供します。
1. 要求された成果物 (例: ログエントリ) が収集されたら、GitLab Security と GitLab Legal がそれをレビューします。
1. レビューされ承認された後、GitLab Support または CSM は、リクエストする顧客に[成果物を共有します](/handbook/support/workflows/log_requests/#sending-logs-and-other-personal-data)。
1. ログ調査を実施したチームは、~"Category:Audit Events" および ~"Enterprise Edition" ラベル付きで [Issue を作成](https://gitlab.com/gitlab-org/gitlab/-/issues) し、顧客が当社の支援を要求せざるを得なかった [Audit Events](https://docs.gitlab.com/ee/administration/audit_event_reports.html) のギャップを文書化します。これは、製品に欠けている機能が将来追加されることを保証するためです。

## 条件と要件 {#conditions-and-requirements}

各支援リクエストは、このセクションで概説された条件に準拠する必要があります。

### 顧客が GitLab Premium または Ultimate プランであること

このページに記載されている支援は、[Premium または Ultimate](https://about.gitlab.com/pricing/) プランの有償 GitLab.com 顧客にのみ適用されます。無料アカウント、トライアルアカウント、廃止されたサポートプランのアカウント、その他の理由で支払い対象でないアカウントには適用されません。

### アカウントのスコープと所有権

アカウントについて、[アカウント所有権の検証](/handbook/support/workflows/account_verification/)が**必須**です。

支援リクエストは、顧客が所有する GitLab.com アカウントにのみ適用できます。GitLab は、リクエストする顧客が所有していない GitLab.com アカウントについて、支援や情報を提供しません。

特定のリクエストが、リクエストする顧客が所有していない GitLab.com アカウントに関連する場合、法的な召喚状が必要になります。そのような場合、顧客は [GitLab Legal](mailto:legal@gitlab.com) に連絡する必要があります。

### ログ調査リクエストの時間枠とスコープ

現時点では、GitLab はリクエスト時から 1 か月を超える時間枠のログ調査を実施できません。リクエストのスコープは具体的かつ可能な限り狭くする必要があります。GitLab がスコープが広すぎる、過剰であると判断した場合、GitLab はスコープを狭めるよう要請するか、調査の実施で発生するコストを顧客に通知することがあります。

GitLab.com が毎日生成するログの量のため、リクエスト時から 7 日を超える時間枠のログ調査は完了に時間がかかることに注意してください。

### 関連する GitLab namespace、プロジェクト、ユーザーのリスト

リクエストには、関心のある特定の GitLab.com リソース (プロジェクト、ユーザー、グループ) のリストが含まれている必要があります。リストが過剰と見なされた場合、GitLab はリクエストの再スコープ化を要請します。これは、リクエストがタイムリーかつリソース効率的に処理されることを保証するためです。

### 関連するイベントの種類

リクエストには、関心のある特定の GitLab.com イベントのリストが含まれている必要があります。リストが過剰と見なされた場合、GitLab はリクエストの再スコープ化を要請します。これは、リクエストがタイムリーかつリソース効率的に処理されることを保証するためです。

## 期待されること

### リクエストのステータスに関する更新の受信

ログ調査には時間がかかる場合があります。ログ調査を行う GitLab チームは、指定された Issue を通じて更新を提供します。GitLab Support/アカウント所有者/CSM が更新を顧客に伝えます。リクエストのステータスについて GitLab Security またはその個人に連絡を試みても返答はありません。これは帯域外コミュニケーション (例: ソーシャルメディア、個人メール、電話) にも適用されます。

#### アクセスログ

GitLab.com で毎日生成される `access logs` の量のため、現時点では `access logs` (例: HTTP リクエスト) のログ調査を直接実行できません。代わりに、当社のプロダクションスタックの他のコンポーネントによって生成されるアプリケーションログとログに依存しています。

ログから提供される情報は、(i) GitLab Confidential またはシステム情報、(ii) リクエスト対象以外のアカウントに関連する情報を開示しないように、編集される必要があります。

## FAQ

### GitLab のセルフマネージド顧客はどうですか?

このプロセスは GitLab.com にのみ適用されます。GitLab はセルフマネージド顧客のログを生成できません。

### なぜ Premium または Ultimate プランの GitLab.com 顧客にのみ提供されますか?

GitLab Premium または Ultimate プランは [Audit Events](https://docs.gitlab.com/ee/administration/audit_event_reports.html) 機能へのアクセスを提供し、これは高度な顧客が GitLab.com アカウントのセキュリティと健全性を監視するために必要な情報を提供します。このプロセスは、その機能の延長として:

- 顧客が困難な状況から抜け出せるよう支援します。
- 製品が顧客にとって重要な機能を提供することを保証します。

### 顧客が緊急対応を要求した場合、このプロセスはどう変わりますか?

1. 顧客に、リクエストは高優先度として扱われるが、SIRT チームは通常の営業時間外にリソースが限られているため、更新は 12 時間/営業日のペースで提供される予定であることを伝えます。
1. 顧客はリクエストの時間枠、スコープ、関心のあるリソースを提供する必要があります。
1. SIRT Issue を作成し、アカウント所有権の検証を行います。
1. これが顧客にとって受け入れられない場合は、[Support Manager on Call](/handbook/support/on-call/#engaging-the-on-call-manager) に相談します。状況によっては、[Security Engineer On-Call](/handbook/security/security-operations/sirt/engaging-security-on-call/#engage-the-security-engineer-on-call) を関与させることが適切な場合があります。
