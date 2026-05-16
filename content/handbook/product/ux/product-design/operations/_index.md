---
title: プロダクトデザインオペレーション
description: >-
  "プロダクトデザイナーおよびプロダクトデザインマネージャー向けの運用ガイダンス。Issue管理、チームオペレーション、管理プロセスを含みます。"
upstream_path: /handbook/product/ux/product-design/operations/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-01-13T14:13:34-06:00"
---

プロダクトデザインは、GitLabのフルスタックエクスペリエンス組織である[Upstream Studios](/handbook/upstream-studios/)の一部です。上流に位置する戦略的パートナーとして、私たちは最初から計画に関与し、これらの運用プラクティスを使用して、プロダクト開発プロセス全体を通じてデザインが統合されることを確保します。

デザインプロセス、コラボレーションプラクティス、技巧ガイダンスについては、[プロダクトデザイナーのワークフロー](/handbook/product/ux/product-designer/)を参照してください。

## Issue管理

### UX Issueのトリアージ

すべてのプロダクトデザイナーには、`~UX`、`~Deferred UX`、`~UI polish`のラベルが付けられたIssueをトリアージする権限があります。あなたがトリアージを担当していない場合でも、担当のPMとEMからフィードバックを求めるために含まれるべきです。Issueがいつ解決されるべきかを示すために[Priorityラベル](/handbook/product-development/how-we-work/issue-triage/#priority)を使用し、ユーザーへの影響を示すために[Severityラベル](/handbook/product-development/how-we-work/issue-triage/#severity)を使用してください。割り当てられたラベルについては、常にPMおよびEMと調整してください。

### マイルストーン内のIssueのスケジューリング

戦略的パートナーシップとは、最初から計画に関与することを意味します。UXが必要な[`Deliverable`](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name%5B%5D=UX&label_name%5B%5D=Deliverable)とラベル付けされたすべてのIssueは、キックオフまでにプロダクトデザイナーに割り当てられます。[`Stretch`](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name%5B%5D=Stretch&label_name%5B%5D=UX)とラベル付けされたIssueは、キックオフまでに割り当てられる場合とそうでない場合があります。Workflowラベルの使用方法の詳細については、[GitLab Docs](https://docs.gitlab.com/development/labels/#release-scoping-labels)を参照してください。

### スケジュールされたUX IssueをステージグループにLDR

チームのプランニングIssueに`User Experience`セクションを追加することを検討してください（[例1](https://gitlab.com/gitlab-org/ci-cd/release-group/release/-/issues/53#user-experience-roller_coaster)、[例2](https://gitlab.com/gitlab-org/ci-cd/release-group/release/-/issues/59#research-sleuth_or_spy)）。このセクションには、マイルストーンのアクティブなデザイン項目（リサーチプロジェクト、Deferred UX、UI polish、Pajamasコンポーネントなど）を含めることができます。プロダクトデザイナーの[プランニングとキャパシティ](/handbook/product/ux/product-designer/capacity-management)について詳しく学んでください。

プランニングIssueにデザインの問題を含めることで、デザインの取り組みが可視化され、`workflow::problem validation`、`workflow::design`、`workflow::solution validation`の段階でクロスファンクショナルなコラボレーションが促進されます。

**主な利点:**

- 月次プランニングディスカッションの一部にすることで、ステージグループ内でUXを擁護する
- マイルストーンキックオフ時にプロダクトマネージャーとプランニングIssueを使用する
- 現在のデザインとリサーチの取り組みを、お客様やカウンターパートに定期的に伝える
- チームとプロダクトデザイナーのキャパシティを共有する
- デザインフェーズ中のカウンターパートとの早期コラボレーションを促進する

## ワークフローラベル

プロダクトデザイナーはワークフローラベルを使用して、Issueが開発ライフサイクルのどこにあるかを追跡します。これらのラベルは、検証、デザイン、実装フェーズに私たちが関与しているタイミングを示すことで、戦略的ポジショニングを維持するのに役立ちます。

**プロダクト開発フローのラベル:**

Issueは必要に応じてこれらのラベル間を移動します。すべてのラベルがすべてのIssueに当てはまるわけではありません:

- `workflow::validation backlog`
- `workflow::problem validation`
- `workflow::design`
- `workflow::solution validation`
- `workflow::planning breakdown`
- `workflow::scheduling`
- `workflow::ready for development`

ワークフローラベルの詳細については、[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)を参照してください。

**特定のラベルをいつ適用するか:**

- **`workflow::planning breakdown`**: 実装のためにソリューションをより小さなIssueに分割する必要がある。PMとエンジニアリングに提案されたソリューションを案内することで関与を続ける
- **`workflow::scheduling`**: PMおよび/またはEMによってソリューションがスケジュールされる必要がある。[担当のプロダクトマネージャー](/handbook/product/categories/#devops-stages)をメンションし、割り当てられたエンジニアと連絡を取る
- **`workflow::ready for development`**: Issueは現在のマイルストーンで実装されることを意図しており、エンジニアがソリューションに納得している

**Buildフェーズへの早すぎる移動の取り扱い:**

デザインのDRIとして、私たちは品質のラインを守ります。プロダクトマネージャーが、UX基準を満たす前にIssueをBuildフェーズに移動するよう依頼することがあります。そのような場合、フォローオンIssueを作成し、`Deferred UX`ラベルを適用して、プロダクトがUX要件を満たしておらず、即座のイテレーションが必要であることを示します。

## ソリューションの提供

### Issueの説明を更新する

作業が完了し、フィードバックが対応されたら、Issueの説明（SSOT）を「Solution」セクションで更新します。これは、何をどのように行うべきかの参照点となるべきです。

### デザインを含める

「Solution」セクションにデザインを追加します。小さなデザインの場合、モックアップで十分かもしれません。より詳細な変更の場合、Figmaファイルへのリンクを含めてください。

### デザインハンドオフのチェックリストを使用する

[デザインハンドオフのチェックリスト](https://docs.gitlab.com/development/contributing/design/#handoff)に従って、すべてのデザイン仕様が文書化され、エンジニアが成功できる準備が整っていることを確認します。

### コラボレーションツールを活用する

Figmaのコラボレーションツールを活用して、チームからフィードバックを集め、ディスカッションをナビゲートします。

### 新しいUXパラダイムを慎重に検討する

新しいパターンやパラダイムを提案する際:

- 新しいパターンが他の領域と一貫性がなくなるかを評価する
- 一貫性を維持するために他の領域を更新する必要があるかを判断する
- 新しいパターンがユーザーエクスペリエンスを大幅に改善するかを評価する
- 変更が必要な場合、[コンポーネントライフサイクルのドキュメント](https://design.gitlab.com/get-started/lifecycle/)に従う

## フォロースルー

### 機能のスコープを縮小する

- レビューがより簡単で効率的になるように、エンジニアに機能を複数のマージリクエストに分割するよう促す
- 部分的な変更をマージすることのUXへの影響を考慮する。部分的な変更がUXに悪影響を及ぼす場合、フィーチャーブランチまたはフラグを使用して、フルスコープが一緒に出荷されるようにする

### 最終的な目標を伝える

ソリューションを小さなパーツに分解する際、開発の取り組みを整合させるために、チーム全体が最終的なデザイン目標を理解していることを確認します。

### SSOTを維持する

**Issueの説明を最新に保つ:**

- Issueの説明（SSOT）を、画像やデザインワークへのリンクを含むすべての合意された要素で更新する
- SSOTを明確に保つために、古いコンテンツを削除またはアーカイブする
- 明白な変更については、判断を使って、[合意を待たずに](/handbook/values/#collaboration)SSOTを直接更新する

**継続的に関与する:**

- プロダクト領域のIssueを購読し、定期的にレビューする
- プランニングミーティングに積極的に貢献して、適切な優先順位付けを確実にする
- アクティブなIssueに割り当てられ、購読されたままにする
- 関連するMRをフォローし、発生する追加のUX問題に対処する

## デザインが確定した後のフォローアップ

### Pajamasに影響する変更について

[デザインシステム](https://design.gitlab.com/)に影響する変更については:

- **新しいUIコンポーネント**: GitLab Designで[UX Pattern Issueを作成](https://gitlab.com/gitlab-org/gitlab-design/issues/new?issuable_template=UX%20Pattern)し、チェックリストに従う
- **ドキュメントの更新**: [Design System](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com)でIssueおよび/またはMRを作成する
- **アプリケーションの更新**: アプリケーションの影響を受ける領域を更新するためのIssueを作成する
- **変更を周知する**: `#upstream-studios`などのSlackチャンネルを通じて、チームに変更を通知する

### 変更がライブになった後

**フィードバックを集める:**

- ソーシャルメディア、Slack、フォーラム、内部/外部ソースからのフィードバックに耳を傾ける
- フィードバックを追跡し対処するためのIssueを作成する

これらの運用プラクティスに従うことで、Upstream Studiosの戦略的パートナーシップと品質提供へのコミットメントに整合した、効果的なコミュニケーション、コラボレーション、継続的改善を確保します。

## マネージャーオペレーション

### チームメンバーの更新

プロダクトカテゴリページなどで、チームメンバーがサポートしているプロダクトの領域を更新する必要がある場合、一般的に以下のページとプロジェクトを更新または確認する必要があります。すべての更新について、名前がチームページで使用されている名前と一致していることを確認してください。

**セクションレベルの更新:**

1. [www-gitlab-comプロジェクト](https://gitlab.com/gitlab-com/www-gitlab-com) > Repository > Filesに移動する
2. `data`ディレクトリを選択する
3. 下にスクロールして`sections.yml`ファイルをクリックする
4. お好みのエディタータイプを選択する
5. 更新する必要がある人を見つけ、変更を加え、コミット/MRを作成し、そこからMRプロセスに従う

**グループレベルの更新:**

1. [www-gitlab-comプロジェクト](https://gitlab.com/gitlab-com/www-gitlab-com) > Repository > Filesに移動する
2. `data`ディレクトリを選択する
3. 下にスクロールして`stages.yml`ファイルをクリックする
4. お好みのエディタータイプを選択する
5. 更新する必要がある人を見つけ、変更を加え、コミット/MRを作成し、そこからMRプロセスに従う

**チームメンバーの更新（UX MR Reviewer Rouletteからの削除/追加など）:**

1. www-gitlab-comプロジェクト > Repository > Files - Documentationに移動する
2. `data/team_members/person/product`ディレクトリにナビゲートする
3. チームメンバーのファーストネームの最初のイニシャルに対応するアルファベットの文字フォルダを見つける
4. 彼らの`.yml`ファイルをクリックする
5. お好みのエディタータイプを選択する
6. UX MR Reviewer Rouletteボットから削除する場合:
   - `projects:`セクションの下にある`gitlab: reviewer UX`行を削除する
   - コミット/MRを作成し、そこからMRプロセスに従う
7. UX MR Reviewer Rouletteボットに追加する場合:
   - チームメンバーが削除された元のMRを元に戻すか、上記の手順に従って彼らの`.yml`ファイルを再度見つける
   - `projects:`セクションの下に`gitlab: reviewer UX`行を追加する
   - コミット/MRを作成し、そこからMRプロセスに従う

**トリアージレポート:**

[triage-opsプロジェクト](https://gitlab.com/gitlab-org/quality/triage-ops)で、チームメンバーをトリアージレポートの受信から追加または削除するMRを開きます。編集するファイルは`group_definition.yml`です。

**レトロスペクティブ:**

[GitLab team retrospectiveグループ](https://gitlab.com/gl-retrospectives)で、チームメンバーセクションとグループを見つけ、そこでチームメンバーを追加および削除します。この手順は、機密のIssueがチームメンバーから見られるようにするために必要です。

また、[async-retrospectives](https://gitlab.com/gitlab-com/gl-retrospectives/async-retrospectives)の`team.yml`ファイルでチームメンバーを追加または削除するMRを開いてください。

### 成長と開発

成長と開発のリクエストでチームメンバーと作業する際は、[Growth and Development Benefitのガイドライン](/handbook/people-group/learning-and-development/growth-and-development/)を参照してください。

## 人材評価

プロダクトデザインとデザインシステムでは、マネージャーと直属の部下の間で人材評価と成長に関する会話を促進するために、[パフォーマンスファクターワークシート](https://drive.google.com/drive/folders/1KgmIt7Umm0XH2-74jMBpOl67Yko1t2uK)（**🔒 internal only**）を活用しています。これらのワークシートはGoogle Sheets形式で利用可能で、年中間および年末レビュー用のタブと、年間を通じての成果、強み、機会をリストアップするタブを含んでいます。

各チームメンバーが会計年度の初めに自分自身のワークシートを作成し、年間を通じてツールとして使用することを強く推奨します。

パフォーマンスファクターワークシートを活用することで、Workday 内の [年末の全社人材評価プログラム](/handbook/people-group/talent-assessment/)を効率的に完了できます。
