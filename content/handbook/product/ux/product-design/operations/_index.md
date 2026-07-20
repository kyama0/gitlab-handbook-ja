---
title: プロダクトデザインオペレーション
description: >-
  "プロダクトデザイナーおよびプロダクトデザインマネージャー向けの運用ガイダンス。Issue管理、チームオペレーション、管理プロセスを含みます。"
upstream_path: /handbook/product/ux/product-design/operations/
upstream_sha: d92acb119be844b83eb2f76de26d722afea570c3
translated_at: "2026-07-21T06:59:28+09:00"
translator: codex
stale: false
lastmod: "2026-07-20T13:03:25-03:00"
---

プロダクトデザインは、GitLab のフルスタックエクスペリエンス組織である[Upstream Studios](/handbook/upstream-studios/)の一部です。上流に位置する戦略的パートナーとして、私たちは最初から計画に関与し、これらの運用プラクティスを使用して、プロダクト開発プロセス全体を通じてデザインが統合されることを確保します。

デザインプロセス、コラボレーションプラクティス、技巧ガイダンスについては、[プロダクトデザイナーのワークフロー](/handbook/upstream-studios/product-design/workflow/)を参照してください。

## Issue 管理

### UX Issue のトリアージ

すべてのプロダクトデザイナーには、`~UX`、`~Deferred UX`、`~UI polish`のラベルが付けられた Issue をトリアージする権限があります。あなたがトリアージを担当していない場合でも、担当の PM と EM からフィードバックを求めるために含まれるべきです。Issue がいつ解決されるべきかを示すために[Priority ラベル](/handbook/product-development/how-we-work/issue-triage/#priority)を使用し、ユーザーへの影響を示すために[Severity ラベル](/handbook/product-development/how-we-work/issue-triage/#severity)を使用してください。割り当てられたラベルについては、常に PM および EM と調整してください。

### マイルストーン内の Issue のスケジューリング

戦略的パートナーシップとは、最初から計画に関与することを意味します。UX が必要な[`Deliverable`](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name%5B%5D=UX&label_name%5B%5D=Deliverable)とラベル付けされたすべての Issue は、キックオフまでにプロダクトデザイナーに割り当てられます。[`Stretch`](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name%5B%5D=Stretch&label_name%5B%5D=UX)とラベル付けされた Issue は、キックオフまでに割り当てられる場合とそうでない場合があります。Workflow ラベルの使用方法の詳細については、[GitLab Docs](https://docs.gitlab.com/development/labels/#release-scoping-labels)を参照してください。

### スケジュールされた UX Issue をステージグループに伝える

チームのプランニング Issue に`User Experience`セクションを追加することを検討してください（[例 1](https://gitlab.com/gitlab-org/ci-cd/release-group/release/-/issues/53#user-experience-roller_coaster)、[例 2](https://gitlab.com/gitlab-org/ci-cd/release-group/release/-/issues/59#research-sleuth_or_spy)）。このセクションには、マイルストーンのアクティブなデザイン項目（リサーチプロジェクト、Deferred UX、UI polish、Pajamas コンポーネントなど）を含めることができます。プロダクトデザイナーの[プランニングとキャパシティ](/handbook/upstream-studios/product-design/workflow/capacity-management)について詳しく学んでください。

プランニング Issue にデザインの問題を含めることで、デザインの取り組みが可視化され、`workflow::problem validation`、`workflow::design`、`workflow::solution validation`の段階でクロスファンクショナルなコラボレーションが促進されます。

**主な利点:**

- 月次プランニングディスカッションの一部にすることで、ステージグループ内で UX を擁護する
- マイルストーンキックオフ時にプロダクトマネージャーとプランニング Issue を使用する
- 現在のデザインとリサーチの取り組みを、お客様やカウンターパートに定期的に伝える
- チームとプロダクトデザイナーのキャパシティを共有する
- デザインフェーズ中のカウンターパートとの早期コラボレーションを促進する

## ワークフローラベル

プロダクトデザイナーはワークフローラベルを使用して、Issue が開発ライフサイクルのどこにあるかを追跡します。これらのラベルは、検証、デザイン、実装フェーズに私たちが関与しているタイミングを示すことで、戦略的ポジショニングを維持するのに役立ちます。

**プロダクト開発フローのラベル:**

Issue は必要に応じてこれらのラベル間を移動します。すべてのラベルがすべての Issue に当てはまるわけではありません:

- `workflow::validation backlog`
- `workflow::problem validation`
- `workflow::design`
- `workflow::solution validation`
- `workflow::planning breakdown`
- `workflow::scheduling`
- `workflow::ready for development`

ワークフローラベルの詳細については、[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)を参照してください。

**特定のラベルをいつ適用するか:**

- **`workflow::planning breakdown`**: 実装のためにソリューションをより小さな Issue に分割する必要がある。PM とエンジニアリングに提案されたソリューションを案内することで関与を続ける
- **`workflow::scheduling`**: PM および/または EM によってソリューションがスケジュールされる必要がある。[担当のプロダクトマネージャー](/handbook/product/categories/#devops-stages)をメンションし、割り当てられたエンジニアと連絡を取る
- **`workflow::ready for development`**: Issue は現在のマイルストーンで実装されることを意図しており、エンジニアがソリューションに納得している

**Build フェーズへの早すぎる移動の取り扱い:**

デザインの DRI として、私たちは品質のラインを守ります。プロダクトマネージャーが、UX 基準を満たす前に Issue を Build フェーズに移動するよう依頼することがあります。そのような場合、フォローオン Issue を作成し、`Deferred UX`ラベルを適用して、プロダクトが UX 要件を満たしておらず、即座のイテレーションが必要であることを示します。

## ソリューションの提供

### Issue の説明を更新する

作業が完了し、フィードバックが対応されたら、Issue の説明（SSOT）を「Solution」セクションで更新します。これは、何をどのように行うべきかの参照点となるべきです。

### デザインを含める

「Solution」セクションにデザインを追加します。小さなデザインの場合、モックアップで十分かもしれません。より詳細な変更の場合、Figma ファイルへのリンクを含めてください。

### デザインハンドオフのチェックリストを使用する

[デザインハンドオフのチェックリスト](https://docs.gitlab.com/development/contributing/design/#handoff)に従って、すべてのデザイン仕様が文書化され、エンジニアが成功できる準備が整っていることを確認します。

### コラボレーションツールを活用する

Figma のコラボレーションツールを活用して、チームからフィードバックを集め、ディスカッションをナビゲートします。

### 新しい UX パラダイムを慎重に検討する

新しいパターンやパラダイムを提案する際:

- 新しいパターンが他の領域と一貫性がなくなるかを評価する
- 一貫性を維持するために他の領域を更新する必要があるかを判断する
- 新しいパターンがユーザーエクスペリエンスを大幅に改善するかを評価する
- 変更が必要な場合、[コンポーネントライフサイクルのドキュメント](https://design.gitlab.com/get-started/lifecycle/)に従う

## フォロースルー

### 機能のスコープを縮小する

- レビューがより簡単で効率的になるように、エンジニアに機能を複数のマージリクエストに分割するよう促す
- 部分的な変更をマージすることの UX への影響を考慮する。部分的な変更が UX に悪影響を及ぼす場合、フィーチャーブランチまたはフラグを使用して、フルスコープが一緒に出荷されるようにする

### 最終的な目標を伝える

ソリューションを小さなパーツに分解する際、開発の取り組みを整合させるために、チーム全体が最終的なデザイン目標を理解していることを確認します。

### SSOT を維持する

**Issue の説明を最新に保つ:**

- Issue の説明（SSOT）を、画像やデザインワークへのリンクを含むすべての合意された要素で更新する
- SSOT を明確に保つために、古いコンテンツを削除またはアーカイブする
- 明白な変更については、判断を使って、[合意を待たずに](/handbook/values/#collaboration)SSOT を直接更新する

**継続的に関与する:**

- プロダクト領域の Issue を購読し、定期的にレビューする
- プランニングミーティングに積極的に貢献して、適切な優先順位付けを確実にする
- アクティブな Issue に割り当てられ、購読されたままにする
- 関連する MR をフォローし、発生する追加の UX 問題に対処する

## デザインが確定した後のフォローアップ

### Pajamas に影響する変更について

[デザインシステム](https://design.gitlab.com/)に影響する変更については:

- **新しい UI コンポーネント**: GitLab Design で[UX Pattern Issue を作成](https://gitlab.com/gitlab-org/gitlab-design/issues/new?issuable_template=UX%20Pattern)し、チェックリストに従う
- **ドキュメントの更新**: [Design System](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com)で Issue および/または MR を作成する
- **アプリケーションの更新**: アプリケーションの影響を受ける領域を更新するための Issue を作成する
- **変更を周知する**: `#upstream-studios`などの Slack チャンネルを通じて、チームに変更を通知する

### 変更がライブになった後

**フィードバックを集める:**

- ソーシャルメディア、Slack、フォーラム、内部/外部ソースからのフィードバックに耳を傾ける
- フィードバックを追跡し対処するための Issue を作成する

これらの運用プラクティスに従うことで、Upstream Studios の戦略的パートナーシップと品質提供へのコミットメントに整合した、効果的なコミュニケーション、コラボレーション、継続的改善を確保します。

## マネージャーオペレーション

### チームメンバーの更新

プロダクトカテゴリページなどで、チームメンバーがサポートしているプロダクトの領域を更新する必要がある場合、一般的に以下のページとプロジェクトを更新または確認する必要があります。すべての更新について、名前がチームページで使用されている名前と一致していることを確認してください。

**セクションレベルの更新:**

1. [www-gitlab-com プロジェクト](https://gitlab.com/gitlab-com/www-gitlab-com) > Repository > Files に移動する
2. `data`ディレクトリを選択する
3. 下にスクロールして`sections.yml`ファイルをクリックする
4. お好みのエディタータイプを選択する
5. 更新する必要がある人を見つけ、変更を加え、コミット/MR を作成し、そこから MR プロセスに従う

**グループレベルの更新:**

1. [www-gitlab-com プロジェクト](https://gitlab.com/gitlab-com/www-gitlab-com) > Repository > Files に移動する
2. `data`ディレクトリを選択する
3. 下にスクロールして`stages.yml`ファイルをクリックする
4. お好みのエディタータイプを選択する
5. 更新する必要がある人を見つけ、変更を加え、コミット/MR を作成し、そこから MR プロセスに従う

**チームメンバーの更新（UX MR Reviewer Roulette からの削除/追加など）:**

1. www-gitlab-com プロジェクト > Repository > Files - Documentation に移動する
2. `data/team_members/person/product`ディレクトリにナビゲートする
3. チームメンバーのファーストネームの最初のイニシャルに対応するアルファベットの文字フォルダを見つける
4. そのチームメンバーの `.yml` ファイルをクリックする
5. お好みのエディタータイプを選択する
6. UX MR Reviewer Roulette ボットから削除する場合:
   - `projects:`セクションの下にある`gitlab: reviewer UX`行を削除する
   - コミット/MR を作成し、そこから MR プロセスに従う
7. UX MR Reviewer Roulette ボットに追加する場合:
   - チームメンバーが削除された元の MR を元に戻すか、上記の手順に従って当該の `.yml` ファイルを再度見つける
   - `projects:`セクションの下に`gitlab: reviewer UX`行を追加する
   - コミット/MR を作成し、そこから MR プロセスに従う

**トリアージレポート:**

[triage-ops プロジェクト](https://gitlab.com/gitlab-org/quality/triage-ops)で、チームメンバーをトリアージレポートの受信から追加または削除する MR を開きます。編集するファイルは`group_definition.yml`です。

**レトロスペクティブ:**

[GitLab team retrospective グループ](https://gitlab.com/gl-retrospectives)で、チームメンバーセクションとグループを見つけ、そこでチームメンバーを追加および削除します。この手順は、機密の Issue がチームメンバーから見られるようにするために必要です。

また、[async-retrospectives](https://gitlab.com/gitlab-com/gl-retrospectives/async-retrospectives)の`team.yml`ファイルでチームメンバーを追加または削除する MR を開いてください。

### 成長と開発

成長と開発のリクエストでチームメンバーと作業する際は、[Growth and Development Benefit のガイドライン](/handbook/people-group/learning-and-development/growth-and-development/)を参照してください。

## 人材評価

プロダクトデザインとデザインシステムでは、マネージャーと直属の部下の間で人材評価と成長に関する会話を促進するために、[パフォーマンスファクターワークシート](https://drive.google.com/drive/folders/1KgmIt7Umm0XH2-74jMBpOl67Yko1t2uK)（**🔒 internal only**）を活用しています。これらのワークシートは Google Sheets 形式で利用可能で、年中間および年末レビュー用のタブと、年間を通じての成果、強み、機会をリストアップするタブを含んでいます。

各チームメンバーが会計年度の初めに自分自身のワークシートを作成し、年間を通じてツールとして使用することを強く推奨します。

パフォーマンスファクターワークシートを活用することで、Workday 内の [年末の全社人材評価プログラム](/handbook/people-group/talent-assessment/)を効率的に完了できます。
