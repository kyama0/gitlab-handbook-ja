---
title: Support Innovation Group (SIG)
description: Support Innovation Group（SIG）は、Support、IT、Product をつなぎ、AI を活用したワークフロー、ナレッジ、サポートイノベーションを推進する、GitLab の部門横断的な取り組みです。
upstream_path: /handbook/support/sig/
upstream_sha: 35c2295ab7e9139fbe16bd8b69e1712d0ef14206
lastmod: "2026-09-01T08:13:52-04:00"
translated_at: "2026-09-03T23:52:33+09:00"
translator: codex
stale: false
---

## Support Innovation Group

SIG は Support チームと IT および Product チームをつなぎ、業務を適切に遂行するために必要なツールや改善を確実に用意します。私たちは機会を特定し、必要なものを定義し、ソリューションを検証し、構築されたものをチームが導入できるよう支援します。

SIG と Support Ops（IT）は緊密に連携します —

- 何かを進める前に、SIG がすべてのリクエストを精査して承認する
- Support Ops は Support の個人から直接リクエストを **受け付けない** — **すべてのリクエストは、まず SIG を経由します。**
- SIG と Support Ops は、各サイクルで共通のロードマップと目標について認識を合わせる

## 受付プロセス

このセクションは、プロセスを簡素化し、SIG Team Lead と SIG Team Member の役割を理解しやすくするために作成されました。

誰でも [SIG 受付リクエストフォーム](https://gitlab.com/gitlab-com/support/support-project-portfolio/-/work_items/new?description_template=sig_intake)から受付リクエストを作成できます。

1. 変更リクエスト（既存プロセスへの変更の場合）
1. プロジェクトリクエスト（まだ存在せず、開始とサブタスクが必要な大規模な依頼の場合）
1. AI ツールリクエスト（エージェントの作成、ツールの調整）

**SIG Team Lead** は、SIG リクエストの優先順位付けについて Support Leadership と連携します。優先順位は、現在進行中の項目と次に着手する項目に基づきます。優先順位付けの依頼には Slack チャンネル #spt_leadership_internal を使用します。週次リストに対して R.I.C.E スコアリングに基づいて優先順位を設定し、変更が必要かを確認します。

**SIG Team Member** は以下を行います。

- SIG Issue Board に基づいて、担当するリクエストを自ら選択します（割り当てを受けるのではありません）。  
- SIG Team Member が同時に担当する項目は最大 3 件までです。
- Manager は直属のチームメンバー（SIG Team Member）と連携し、プロジェクトが前進するようにします。
- 解決策を見つけるため、Leadership 全体の Manager とともに Issue に取り組みます。
- 解決者ではなくレビュアーとして行動します。SIG Team Member の役割は、適切な質問が行われていることを確認し、不明瞭な点をリクエスト者（DRI）に差し戻して明確化を求めることです。SIG Team Member がアイデアを完全に具体化したり、自らソリューションを推進したりすることは役割ではありません。
- 担当項目について Leadership の承認を得ます。
- ソリューションが必要な場合は、CSS（Customer Support Systems）に機能リクエスト（FR）を作成します。
- Leadership が承認したら（承認された場合）、項目を「Approved (Ready for Release)」ラベルのステータスに移動します。

その後、SIG Team Lead が関与し、CSS とロードマップ／キャパシティプランニングに取り組みます。

SIG Team Lead は、メッセージングとコミュニケーションを担当します。

![SIG ワークフロー](/images/support/assets/sigworkflow.png)

### 有効な SIG リクエストとは？

有効な SIG リクエストは、戦略的な範囲を持ち、スケーラブルな影響があり、部門横断的なデリバリーが必要な、デジタルまたはツール上の課題を扱います。Support の業務を支えるシステム、自動化、AI、ワークフロー、レポート、インテグレーションに関連し、対応時間、CSAT、デフレクション、バックログなどの主要 KPI に大きな影響を与えることを示す必要があります。

有効なリクエストは、自動化と AI の導入、セルフサービスの拡大、エンジニアの効率、カスタマーエクスペリエンス、マネジメントレポート、組織横断のコラボレーション、サードパーティインテグレーションなど、SIG の戦略的エピックの 1 つ以上に沿うものです。設計、構築、リリースには、IT、Engineering、Product、または外部ベンダーの関与が必要です。

重要なのは、有効な SIG リクエストが、事前に決めたソリューションではなく、解決すべき問題として構成され、影響と測定可能な成功基準が明確に示されていることです。範囲が単一チームに限定されている、戦略との整合性がない、または部門横断的な取り組みなしで解決できるリクエストは、SIG の対象外です。

### 無効な SIG リクエストとは？

デジタルやツールの要素を持たず、純粋にローカル、運用、人に関するリクエストは SIG の対象外です。人員配置やスケジュールに関する依頼、既存プログラムで扱うトレーニングやイネーブルメントの項目、単発の設定修正、Product または Infra のバックログで扱うべき標準的な機能やバグのリクエストなどが該当します。

影響や成功基準を定義できないほど曖昧なリクエストや、1 人または小規模なチームだけにメリットがあるリクエストも同様に対象外です。SOP、トレーニングモジュール、または通常のチケットで解決できるものは、SIG リクエストではありません。

**例**

次の場合は **有効な** SIG リクエストです。

- Support が使用するデジタルツール、自動化、AI、レポート、またはインテグレーションに関するもの
- 1 人や 1 つのケースだけでなく、多くのエンジニアや顧客に影響するもの
- 単なる曖昧なアイデアではなく、影響と成功基準が明確な問題として構成されているもの
- SIG の戦略的エピック（自動化、セルフサービス、ポータル、効率、CX、レポート、インテグレーション）の少なくとも 1 つに沿うもの

次の場合は **有効ではない** SIG リクエストです。

- 人員配置、スケジュール、またはピープルマネジメントに関するもの
- ツール変更を伴わないトレーニング／イネーブルメントの依頼
- 通常の運用チャネルで修正すべき単発のバグや設定上の問題
- 明確な問題提起、影響、または SIG のエピックとの整合性がないもの

## プロジェクトのリンクとリソース

- [技術リクエスト](https://gitlab.com/gitlab-com/support/sig_support_technical_workstream)
- [SIG プロジェクト](https://gitlab.com/gitlab-com/support/support-project-portfolio)
- [Support Team Meta の作業アイテム](https://gitlab.com/gitlab-com/support/support-team-meta)
- [NOVA - Next Gen Operations & Virtual Agents](https://gitlab.com/gitlab-com/support/NOVA)

## SIG Support チームメンバー

SIG Support チームメンバーは、以下を行います。

- Support の代弁者になる。SIG メンバーは単なる支援者ではありません。日々のサポート体験で、壊れているもの、遅いもの、欠けているものを見つける人です。その意見が、何を構築し、優先するかを形作ります。
- より広いチームに展開する前に、ソリューションを検証する。ほかの全員が影響を受ける前に、「これは機能する」または「これは変更が必要」と判断するのは SIG メンバーです。
- 可視性を高める。SIG で働くことで、SIG メンバーは IT、Support Ops、リーダーシップなど、部門横断的なステークホルダーと直接関わるようになります。成長を望む Support エンジニアにとって、チケット対応を超えて貢献する有意義な方法です。

## SIG リソース

- [Support Innovation Group Slack チャネル](https://gitlab.slack.com/archives/CHANNEL_ID)
