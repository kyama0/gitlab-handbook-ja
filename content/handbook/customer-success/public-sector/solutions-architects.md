---
title: 公共部門 Solutions Architect
description: "公共部門（Public Sector）を担当する Solutions Architect（SA）は、米国内の公共部門の顧客に対して、販売プロセス全体を通じて専門領域の知見と業界経験を提供します。"
upstream_path: /handbook/customer-success/public-sector/solutions-architects/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

[公共部門](/handbook/sales/public-sector/) を担当する Solutions Architect（SA）は、米国内の公共部門の顧客に対して、販売プロセス全体を通じて専門領域の知見と業界経験を提供します。

特定の要件や一般的なエンゲージメントの慣行はエンタープライズや商用顧客とは異なるため、特に公共部門の顧客と関わる Solutions Architect を支援する目的で以下のガイダンスを用意しています。

## 連邦政府向けサポート

GitLab Support チームは、米国市民がサポートチケットに対応することを必須とする顧客向けに [米国を拠点とするサポート](https://about.gitlab.com/support/us-government-support/) を提供しています。

- チケットを送信するユーザーは、SFDC 上で適切なアカウントに紐付いている必要があります。
- すべてのアカウントとユーザー情報は、SFDC と Zendesk の間で 1 時間ごとに同期されます。
- サポートとのすべてのコミュニケーションは非同期で行われますが、当該アカウントの Customer Success Manager および／または Solutions Architect が同期コールを依頼した場合はこの限りではありません。
- SFDC で Public Sector に指定された顧客のみが連邦政府向けサポートの対象となります。
- Public Sector の見込み顧客が営業支援付きトライアル（Proofs of Value を含む）を開始した際、Public Sector Solutions Architect は SFDC のアカウントレコードに適切な「Support Level」（Premium または Ultimate）が設定されているかを確認します。これにより、サポートの SLA が正しく設定されます。

## Success Management Program の紹介

各グリーンフィールド（新規顧客）の販売において、顧客は提案前の技術評価から調達フェーズへ移行します。提案前の期間中、アカウント営業チームは [対象顧客](/handbook/customer-success/csm/services/#enterprise) に Customer Success Management Program を紹介します。このコールは Solutions Architect が主導します。紹介では、GitLab Support へのアクセス、利用可能な CSM プログラム、GitLab Professional Services についてのガイダンスを提供します。

この紹介の目的は多岐にわたります。

1. 新規顧客をサポート、ガイダンス、アドボカシー、成長のための販売後の関係性へスムーズに移行させる
2. [Go to Market のユースケース](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/) から [DevOps ステージ採用](/handbook/customer-success/csm/stage-adoption/) への会話のシフトを円滑に行う
3. 顧客の [GitLab Support](/handbook/support/) へのアクセスを検証する
4. 調達後の CSM エンゲージメントレベルの選択を顧客に支援する
5. 利用可能な [GitLab Professional Services および Enablement](https://about.gitlab.com/services/catalog/) のオプションを顧客が理解していることを確認する

### プログラムフロー

プログラムを紹介する前に、SA はすべての販売ステージのデータが記録され、Success Management Program を開始できる状態にあることを確認すべきです。[各販売ステージ](/handbook/sales/field-operations/gtm-resources/) における必要なワークフローは以下のとおりです。

ステージ 0〜2

- 早期の販売ステージで Discovery が行われるなかで、Salesforce のアカウントレコードの Stage Technology フィールドが入力され始めます。

ステージ 3

- 技術評価の間、SA は顧客エコシステム内のユースケースについて可能な限り検証する必要があります。
- ステージ 3 の終わりまでに、アカウントレコードのすべての Use Case Technology フィールドが入力されている必要があります。

ステージ 4〜5

- 技術的な勝利が達成されたら、GitLab の [Success Management データシート](https://docs.google.com/presentation/d/1rrHPTr5RFIJPG1AmxSnUorg2c9IKluw1j39QkRbwmzo/edit#slide=id.g76a815dab5_0_68)（GitLab メンバーのみアクセス可）を新規顧客と共有する必要があります。
- Success Management Program と Customer Success Manager を紹介するためのコールを、新規顧客と営業チームの間でスケジュールしてください（CSM の紹介が技術評価の段階でまだ行われていない場合）。
- コールが完了したら、SA は活動タイプを「call」とし、タイトルに「success management introduction」を含めて記録する必要があります。

### プログラム紹介のリソース

顧客に配布可能な [Success Management データシート](https://docs.google.com/presentation/d/1rrHPTr5RFIJPG1AmxSnUorg2c9IKluw1j39QkRbwmzo/edit#slide=id.g76a815dab5_0_68) と、それに [付随するスライドプレゼンテーション](https://docs.google.com/presentation/d/1xh-ZNm9xyKau6UHQtAyoYjMqf5kO9HYVU2y0O2LwQxM/edit#slide=id.g92b7b0fa4f_0_68) を、顧客との議論をガイドするために利用できます。これらのリソースは GitLab メンバーのみが利用可能です。

## OpenShift FAQ

顧客が OpenShift を使用しているエンゲージメントにおける FAQ です。

**Q: 顧客は GitLab を OpenShift とどのように使用するのか？**

A: 見込み顧客と関わる際には、その顧客が GitLab と OpenShift をどのように一緒に使いたいのかを理解することが重要です。顧客は GitLab からプロジェクトを OpenShift にデプロイするだけなのか？ OpenShift 内で GitLab Runner を実行したいのか？ あるいは OpenShift 内で GitLab Server を実行する必要があるのか？ GitLab は現在、OpenShift へのデプロイ、OpenShift 内での Runner の実行、OpenShift 内での GitLab Server の実行が可能であるため、アーキテクチャの会話を続ける前にこの答えを把握することが鍵となります。

**Q: OpenShift 統合のリリース予定日は？**

A: GitLab Server Operator（OpenShift 上で GitLab インスタンスを実行する機能）は GitLab v14.3 でリリースされました。GitLab Runner Operator は v14.3 以前にすでにリリースされていました。

**Q: GitLab を OpenShift で実行する際に現在動作しない機能は何か？**

A: SAST、DAST、AutoDevOps です。これらはロードマップにありますが、現時点で指定された日付はありません。

**Q: 統合はどの OpenShift バージョンで動作するのか？**

A: OpenShift バージョン 4.5 から 4.8 が現在サポートされています。バージョン 4.9 のサポートは進行中です。バージョン 3.x 以下はサポートされません。

**Q: 私（または顧客）はどうやって統合状況を追跡できるのか？**

A: [この GitLab Epic を参照してください](https://gitlab.com/groups/gitlab-org/-/epics/2068)

## キャンパスプログラム技術評価プレイブック

GitLab for Campuses プログラムは、規模に応じた大学向けのフラットレート価格を導入しました。これらのキャンパスが GitLab の自校、ラボ、学生への適合性を評価できるように、キャンパス技術評価プレイブックが作成されました。このプレイブックは、GitLab に関する知識が最小から中程度のキャンパスを対象とした、GitLab の理想的な 4〜8 週間の評価に関わるペルソナ、ミーティングタイプ、オプション、成果をカバーしています。

Solutions Architect はこのプレイブックを使用して、キャンパスを GitLab の幅広い技術的能力の評価に導くことができます。[プレイブック](https://docs.google.com/spreadsheets/d/1vyRgC2auX0RYp34nqMMp8xr0YllhsVfxJ3EnGImtM9k/edit?usp=sharing) は GitLab メンバーのみがアクセス可能です。
