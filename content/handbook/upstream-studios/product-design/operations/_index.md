---
title: プロダクトデザインオペレーション
description: >-
  "Issue 管理、チーム運営、管理プロセスを含む、Product Designer および Product Design Manager 向けの運用ガイダンス。"
upstream_path: /handbook/upstream-studios/product-design/operations/
upstream_sha: 50ee631c98005b47a0caea9d46e4ba5cfc62891a
lastmod: "2026-07-22T08:32:12-03:00"
translated_at: "2026-07-23T06:07:21+09:00"
translator: codex
stale: false
---

Product Design は、GitLab のフルスタックエクスペリエンス組織である [Upstream Studios](/handbook/upstream-studios/) の一部です。上流に位置する戦略的パートナーとして、私たちは最初から計画に関与し、これらの運用プラクティスを使用して、プロダクト開発プロセス全体を通じてデザインが統合されるようにします。

デザインプロセス、協働プラクティス、クラフトに関するガイダンスについては、[Product Designer のワークフロー](/handbook/upstream-studios/product-design/workflow/)を参照してください。

## Issue 管理

### UX Issue のトリアージ

すべての Product Designer は、`~UX`、`~Deferred UX`、`~UI polish` のラベルが付けられた Issue をトリアージできます。自分がトリアージ担当でない場合でも、担当の PM と EM がフィードバックを求める際に含めるべきです。Issue をいつ解決すべきかを提案するには [Priority ラベル](/handbook/product-development/how-we-work/issue-triage/#priority)を使用し、ユーザーへの影響を示すには [Severity ラベル](/handbook/product-development/how-we-work/issue-triage/#severity)を使用してください。割り当てられたラベルについては、常に PM および EM と調整してください。

### マイルストーン内の Issue のスケジューリング

戦略的パートナーシップとは、最初から計画に関与することを意味します。UX が必要な [`Deliverable`](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name%5B%5D=UX&label_name%5B%5D=Deliverable) のラベルが付いたすべての Issue は、キックオフまでに Product Designer に割り当てられます。[`Stretch`](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name%5B%5D=Stretch&label_name%5B%5D=UX) のラベルが付いた Issue は、キックオフまでに割り当てられる場合と、そうでない場合があります。Workflow ラベルの使用方法の詳細については、[GitLab Docs](https://docs.gitlab.com/development/labels/#release-scoping-labels)を参照してください。

### スケジュールされた UX Issue をステージグループに伝える

チームのプランニング Issue に `User Experience` セクションを追加することを検討してください（[例 1](https://gitlab.com/gitlab-org/ci-cd/release-group/release/-/issues/53#user-experience-roller_coaster)、[例 2](https://gitlab.com/gitlab-org/ci-cd/release-group/release/-/issues/59#research-sleuth_or_spy)）。このセクションには、マイルストーンのアクティブなデザイン項目（リサーチプロジェクト、Deferred UX、UI polish、Pajamas コンポーネントなど）を含めることができます。Product Designer の[プランニングとキャパシティ](/handbook/upstream-studios/product-design/workflow/capacity-management/)について詳しく学んでください。

プランニング Issue にデザインの問題を含めることで、デザインの取り組みが可視化され、`workflow::problem validation`、`workflow::design`、`workflow::solution validation` の段階でクロスファンクショナルな協働が促進されます。

**主な利点:**

- 月次プランニングディスカッションの一部にすることで、ステージグループ内で UX を擁護する
- マイルストーンキックオフ時に Product Manager とプランニング Issue を使用する
- 現在のデザインとリサーチの取り組みを、顧客やカウンターパートに定期的に伝える
- チームと Product Designer のキャパシティを共有する
- デザインフェーズ中のカウンターパートとの早期協働を促進する

## ワークフローラベル

Product Designer は、ワークフローラベルを使用して、Issue が開発ライフサイクルのどこにあるかを追跡します。これらのラベルは、検証、デザイン、実装フェーズに私たちが関与しているタイミングを示すことで、戦略的位置づけを維持するのに役立ちます。

**Product Development Flow のラベル:**

Issue は必要に応じてこれらのラベル間を移動します。すべてのラベルがすべての Issue に当てはまるわけではありません。

- `workflow::validation backlog`
- `workflow::problem validation`
- `workflow::design`
- `workflow::solution validation`
- `workflow::planning breakdown`
- `workflow::scheduling`
- `workflow::ready for development`

ワークフローラベルの詳細については、[Product Development Flow](/handbook/product-development/how-we-work/product-development-flow/)を参照してください。

**特定のラベルを適用するタイミング:**

- **`workflow::planning breakdown`**: ソリューションを実装のために小さな Issue に分割する必要があります。提案したソリューションを PM と Engineering に説明して、関与を続けます
- **`workflow::scheduling`**: ソリューションを PM および/または EM がスケジュールする必要があります。[担当 Product Manager](/handbook/product/categories/#devops-stages)にメンションし、割り当てられたエンジニアと連絡を取ります
- **`workflow::ready for development`**: Issue は現在のマイルストーンでの実装を意図しており、エンジニアはソリューションに納得しています

**Build フェーズへの早すぎる移動の取り扱い:**

デザインの DRI として、私たちは品質の線を守ります。Product Manager が、UX 基準を満たす前に Issue を Build フェーズに移動するよう依頼することがあります。そのような場合、フォローオン Issue を作成し、かつ/または `Deferred UX` ラベルを適用して、プロダクトが UX 要件を満たしておらず即座のイテレーションが必要であることを示します。

## ソリューションの提供

### Issue の説明を更新する

作業が完了し、フィードバックに対応したら、Issue の説明（SSOT）を「Solution」セクションで更新します。これは、何をどのように実施すべきかの参照点となるべきです。

### デザインを含める

「Solution」セクションにデザインを追加します。小さなデザインの場合、モックアップで十分かもしれません。より詳細な変更では、Figma ファイルへのリンクを含めてください。

### デザインハンドオフのチェックリストを使用する

[デザインハンドオフのチェックリスト](https://docs.gitlab.com/development/contributing/design/#handoff)に従って、すべてのデザイン仕様が文書化され、エンジニアが成功できる準備が整っていることを確認します。

### 協働ツールを活用する

Figma の協働ツールを活用して、チームからフィードバックを集め、ディスカッションを進めます。

### 新しい UX パラダイムを慎重に検討する

新しいパターンやパラダイムを提案する際:

- 新しいパターンが他の領域と一貫性がなくなるかを評価する
- 一貫性を維持するために他の領域を更新する必要があるかを判断する
- 新しいパターンがユーザーエクスペリエンスを大幅に改善するかを評価する
- 変更が必要な場合、[コンポーネントライフサイクルのドキュメント](https://design.gitlab.com/get-started/lifecycle/)に従う

## フォロースルー

### 機能のスコープを縮小する

- レビューをより簡単かつ効率的にするため、エンジニアに機能を複数のマージリクエストに分割するよう促す
- 部分的な変更をマージすることの UX への影響を考慮する。部分的な変更が UX に悪影響を及ぼす場合は、フィーチャーブランチまたはフラグを使用して、完全なスコープがまとめて出荷されるようにする

### 最終目標を伝える

ソリューションを小さな部分に分ける際は、開発の取り組みを整合させるために、チーム全体が最終的なデザイン目標を理解していることを確認します。

### SSOT を維持する

**Issue の説明を最新に保つ:**

- Issue の説明（SSOT）を、画像やデザイン作業へのリンクを含む、合意したすべての要素で更新する
- SSOT を明確に保つため、古いコンテンツを削除またはアーカイブする
- 明白な変更については、判断を用いて、[合意を待たずに](/handbook/values/#collaboration)SSOT を直接更新する

**関与を続ける:**

- 自分のプロダクト領域の Issue を購読し、定期的にレビューする
- 適切な優先順位付けを確実にするため、プランニングミーティングに積極的に貢献する
- アクティブな Issue に割り当てられ、購読されたままにする
- 関連する MR をフォローし、発生する追加の UX 問題に対処する

## デザインが確定した後のフォローアップ

### Pajamas に影響する変更の場合

[デザインシステム](https://design.gitlab.com/)に影響する変更について:

- **新しい UI コンポーネント**: GitLab Design で [UX Pattern Issue を作成](https://gitlab.com/gitlab-org/gitlab-design/issues/new?issuable_template=UX%20Pattern)し、チェックリストに従う
- **ドキュメントの更新**: [Design System](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com) で Issue および/または MR を作成する
- **アプリケーションの更新**: アプリケーションの影響を受ける領域を更新するための Issue を作成する
- **変更を周知する**: `#upstream-studios` などの Slack チャンネルを通じて、チームに変更を通知する

### 変更がライブになった後

**フィードバックを集める:**

- ソーシャルメディア、Slack、フォーラム、内部および外部のソースからのフィードバックに耳を傾ける
- フィードバックを追跡し対処するための Issue を作成する

これらの運用プラクティスに従うことで、Upstream Studios の戦略的パートナーシップと高品質な提供へのコミットメントに沿った、効果的なコミュニケーション、協働、継続的改善を確保できます。

## Manager の運用

### チームメンバーの更新

Product Categories ページなどでチームメンバーがサポートしているプロダクト領域を更新する必要がある場合は、通常、次のページとプロジェクトを更新またはレビューする必要があります。すべての更新について、名前がチームページで使用されている名前と一致することを確認してください。

**セクションレベルの更新:**

1. [www-gitlab-com プロジェクト](https://gitlab.com/gitlab-com/www-gitlab-com) > Repository > Files に移動する
2. `data` ディレクトリを選択する
3. 下にスクロールして `sections.yml` ファイルをクリックする
4. 任意のエディタータイプを選択する
5. 更新する人を見つけ、変更を加え、コミット/MR を作成して、そこから MR プロセスに従う

**グループレベルの更新:**

1. [www-gitlab-com プロジェクト](https://gitlab.com/gitlab-com/www-gitlab-com) > Repository > Files に移動する
2. `data` ディレクトリを選択する
3. 下にスクロールして `stages.yml` ファイルをクリックする
4. 任意のエディタータイプを選択する
5. 更新する人を見つけ、変更を加え、コミット/MR を作成して、そこから MR プロセスに従う

**チームメンバーの更新（UX MR Reviewer Roulette からの削除または追加など）:**

1. www-gitlab-com プロジェクト > Repository > Files - Documentation に移動する
2. `data/team_members/person/product` ディレクトリに移動する
3. チームメンバーのファーストネームの頭文字に応じたアルファベットのフォルダを見つける
4. その人の `.yml` ファイルをクリックする
5. 任意のエディタータイプを選択する
6. UX MR Reviewer Roulette ボットから削除する場合:
   - `projects:` セクションの下にある `gitlab: reviewer UX` 行を削除する
   - コミット/MR を作成して、そこから MR プロセスに従う
7. UX MR Reviewer Roulette ボットに追加する場合:
   - チームメンバーが削除された元の MR を元に戻すか、上記の手順に従ってその人の `.yml` ファイルを再度見つける
   - `projects:` セクションの下に `gitlab: reviewer UX` 行を戻す
   - コミット/MR を作成して、そこから MR プロセスに従う

**トリアージレポート:**

[triage-ops プロジェクト](https://gitlab.com/gitlab-org/quality/triage-ops)で、チームメンバーをトリアージレポートの受信対象に追加または削除する MR を開きます。編集するファイルは `group_definition.yml` です。

**レトロスペクティブ:**

[GitLab team retrospective グループ](https://gitlab.com/gl-retrospectives)でチームメンバーのセクションとグループを見つけ、そこでチームメンバーを追加または削除します。この手順は、チームメンバーが機密 Issue を見られるようにするために必要です。

また、[async-retrospectives](https://gitlab.com/gitlab-com/gl-retrospectives/async-retrospectives) の `team.yml` ファイルで、チームメンバーを追加または削除する MR を開いてください。

### Growth & Development

Growth & Development のリクエストでチームメンバーと作業する際は、[Growth and Development Benefit のガイドライン](/handbook/people-group/learning-and-development/growth-and-development/)を参照してください。

## 人材評価

Product Design と Design System では、マネージャーと直属の部下の間で人材評価と成長に関する対話を促進するために、[パフォーマンスファクターワークシート](https://drive.google.com/drive/folders/1KgmIt7Umm0XH2-74jMBpOl67Yko1t2uK)（**🔒 内部限定**）を活用しています。これらのワークシートは Google Sheets 形式で利用でき、年央および年末レビューのタブに加え、年間を通じた成果、強み、機会を一覧にするタブを含んでいます。

各チームメンバーには、会計年度の開始時に自身のワークシートを作成し、年間を通じてツールとして使用することを強く推奨します。

パフォーマンスファクターワークシートは、Workday 内の年末の全社 [人材評価プログラム](/handbook/people-group/talent-assessment/)を効率的に完了するために活用できます。
