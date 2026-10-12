---
title: "CSE Pooled"
description: "Pooled CSE モデルにおける、CSM または CSA が付いていないアカウント向けのリクエストに応じた技術支援、CSE が扱うトピック、エンゲージメントの進め方を説明します。"
weight: 20
upstream_path: /handbook/customer-experience/csm/segment/cse/pooled/
upstream_sha: 2dbfc49e47c784740ced3e2c617530f365412492
lastmod: "2026-10-09T17:05:37Z"
translated_at: "2026-10-12T00:04:07+00:00"
translator: codex
stale: false
---

Pooled モデルでは、Customer Success Manager（CSM）または Customer Success Architect（CSA）が付いていない対象顧客が、
特定のトピックについて技術的なガイダンスを必要とするときに、アカウントチームが Customer Success Engineer（CSE）をリクエストします。リクエストは
チーム共通のキューに入り、次に対応可能な CSE が引き受けます。CSE は焦点を絞り、トピックごとに範囲を限定した
エンゲージメントを提供し、顧客がより十分に備えた状態でアカウントチームに引き継ぎます。

Pooled は [3 つの CSE 支援モデル](/handbook/customer-experience/csm/segment/cse/)の 1 つであり、最初に導入されたモデルです。
顧客は AE または RM に、自分たちのために CSE エンゲージメントをリクエストするよう依頼できます。
[担当 CSE](/handbook/customer-experience/csm/segment/cse/cse-assigned/)が付いているアカウントでは、アカウントチームが代わりにその CSE に
直接連絡します。

## CSE が支援できること {#what-cses-can-help-with}

アカウントチームはリクエスト時に提供サービスを選びます。提供サービスは 5 つの領域に分かれています。
[提供サービスのページ](/handbook/customer-experience/csm/segment/cse/pooled/offerings/)には、それぞれの対象範囲と
対象外の範囲を記載しています。

### CI/CD と DevOps {#cicd-and-devops}

- **CI ワークフローの効率化:** CSE が顧客の `.gitlab-ci.yml` をレビューし、ビルド時間の短縮、
  ジョブ効率、キャッシュ、パイプラインアーキテクチャの改善に役立つパターンを共有します。
- **ソフトウェアデリバリーの加速:** デプロイメントの自動化、環境設定、
  リリース管理のベストプラクティスを提供します。

### セキュリティとコンプライアンス {#security-and-compliance}

- **アプリケーションセキュリティの強化:** GitLab のセキュリティ機能を使用して、セキュリティスキャンを自動化し、セキュリティポリシーを適用し、
  脆弱性を管理する方法を提供します。

### AI: GitLab Duo と Duo Agent Platform {#ai-gitlab-duo-and-the-duo-agent-platform}

- **AI によるワークフローの変革:** 計画、コーディング、レビュー、セキュリティ全体にわたる GitLab Duo と Duo Agent
  Platform のユースケースの発見と導入のガイダンスを提供します。

### 移行とアーキテクチャ {#migration-and-architecture}

- **移行戦略の最適化:** 他のツールからの移行、セルフマネージドから GitLab.com への移行、GitLab インスタンス間の移行のいずれについても、
  移行方法、前提条件と制限、アーキテクチャ上の考慮事項、
  リスク低減について支援します。
- **GitLab アーキテクチャの最適化:** 高可用性とディザスタリカバリを含め、
  スケーラブルな GitLab デプロイメントのパターンを提供します。

### プラットフォームと運用 {#platform-and-operations}

- **GitLab 導入の迅速化:** 設定、ユーザー管理、文書化されたベストプラクティスを網羅した
  セットアップの推奨事項を提供します。
- **GitLab 運用の強化:** 大規模環境での認証とシングルサインオン、ユーザー管理、グループ構造、
  プロジェクト設定について支援します。
- **プラットフォームのオブザーバビリティの最適化:** 基本的なシステム監視からリソース使用率の追跡まで、
  GitLab の監視とオブザーバビリティについて支援します。
- **アジャイル計画の拡張:** Issue、エピック、イテレーションを使ったワークフローと、バリューストリーム分析による
  進捗測定について支援します。

### 対象外の範囲 {#what-is-out-of-scope}

- **障害対応と製品のバグ。** CSE は顧客を [GitLab Support](https://about.gitlab.com/support/)へ案内し、
  チケットの起票方法を理解していることを確認します。
- **移行や実装の実作業。** CSE はアーキテクチャのガイダンスとベストプラクティスを提供します。実作業は
  [Professional Services](https://about.gitlab.com/services/)のエンゲージメントに該当し、CSE がそのニーズを
  アカウントチームに知らせます。
- **継続的な助言、ケイデンスコール、ビジネスレビュー。** これらは
  [Success Tier](/handbook/customer-experience/success-services/)に含まれます。

## エンゲージメントの進め方 {#how-an-engagement-runs}

1. **アカウントチームが CSE をリクエストします。** Account Executive（AE）または Renewals Manager（RM）が CRM の
   顧客レコードからリクエストを送信し、提供サービスを選んで、顧客の課題を説明します。
1. **CSE が引き受けます。** リクエストはチーム内で次に対応可能な CSE に割り当てられます。
1. **CSE が依頼者と認識を合わせます。** 顧客に連絡する前に、CSE は AE または RM に、紹介を伴う引き継ぎと
   直接のメール連絡のどちらを希望するか、具体的な依頼内容は何かを確認します。
1. **CSE がアカウントを調査します。** 製品の使用状況と採用状況、ライセンス使用率、GitLab のバージョン、最近の
   サポートチケット、過去の CSE による支援を確認します。目的は台本を用意することではなく、適切な質問といくつかの解決策の候補を
   持って臨むことです。
1. **通話。** CSE はニーズの探索から始め、顧客がすぐに活用できるリソースを用意し、
   AE または RM を招待します。終了前に、次のステップ、それぞれの担当者、期限を確認します。
1. **フォローアップ。** CSE は依頼者を CC に入れ、話し合った内容、推奨事項、
   次のステップをまとめた文書を送ります。その後、顧客に短い満足度アンケートが届きます。
1. **完了。** CSE は成果とアカウントチームへの推奨事項を記録します。

ライブセッションができない場合も、CSE は顧客に合わせた推奨事項とリソースを、範囲を明確にしたメールにまとめて
非同期で価値を提供できます。働きかけを継続するか、非同期の文書を作成するか、後日アカウントチームが再度関わることを推奨するかなど、
最適な方法を依頼者と合意します。

### フォローアップの質問 {#follow-up-questions}

Pooled のエンゲージメントは短期的なものです。CSE がそのアカウントに恒久的に割り当てられるわけではなく、
通話でその期待値を伝えます。

エンゲージメント直後に顧客から関連する質問が寄せられた場合、CSE が対応します。より深い説明が必要な質問であれば、CSE は短いフォローアップ通話を提案します。同じトピックで
フォローアップが 3 回を超えた場合、または 4 週間が経過した場合、そのリクエストは新規として扱います。新しいトピックは常に新しいリクエストです。
エンゲージメントが完了した後の新しいリクエストは、新しいエンゲージメントとなり、次に対応可能な CSE に割り当てられます。

### エスカレーション {#escalations}

エスカレーションには 2 種類あります。

- **サポートエスカレーション**は、顧客のビジネスに非常に大きな影響を与えている既存の
  サポートチケットを対象とします。[サポートチケット対応リクエスト](/handbook/support/internal-support/support-ticket-attention-requests/)
  のプロセスに従い、Support 内でのチケットの優先度を引き上げます。
- **アカウントエスカレーション**は、サポートチケットに関連する場合も、関連しない場合もあります。未解決のバグや、
  重要なユースケースを妨げる機能の不足など、影響が大きく、顧客による GitLab の利用を
  危うくする問題を対象とします。[Customer Success エスカレーションプロセス](/handbook/customer-experience/csm/escalations/)に従います。

Support、Product、Engineering が影響の最も大きい問題を優先できるよう、エスカレーションは慎重に使用します。

### 上限 {#limits}

Pooled の支援は、アカウントごとに半年で 3 件のリクエストを上限とします。各リクエストで扱うトピックは 1 つです。

### 顧客がさらに支援を必要とする場合 {#when-a-customer-needs-more}

エンゲージメントを通じて、顧客が CSE エンゲージメントの提供範囲を超える支援を必要としていることがわかった場合、CSE は
適切な支援を提供できるよう、アカウントチームに共有します。

## 関連ページ {#related-pages}

- [CSE ホームページ](/handbook/customer-experience/csm/segment/cse/)
- 誰もが参加できる[ウェビナーとハンズオンラボ](/handbook/customer-experience/csm/segment/cse/webinars-and-labs/)
- Pooled、Assigned、CSM または CSA による支援を比較する
  [Assigned の役割と責任](/handbook/customer-experience/csm/segment/cse/cse-assigned/roles-responsibilities/)
