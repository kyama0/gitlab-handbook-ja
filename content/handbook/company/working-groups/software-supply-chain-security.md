---
title: "ソフトウェアサプライチェーンセキュリティ ワーキンググループ"
description: "GitLab 全体に主要な SSCS 機能を実装します"
status: active
upstream_path: /handbook/company/working-groups/software-supply-chain-security/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: 2026-04-25T23:31:04Z
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---

## 属性

| プロパティ | 値 |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 作成日 | 2023-03-23 |
| 終了日 | 2025-01-31 |
| Slack | `#wg_software_supply_chain_security`（社内からのみアクセス可能） |
| Google Doc | [ソフトウェアサプライチェーンセキュリティ ワーキンググループ アジェンダ](https://docs.google.com/document/d/1MEMPo1zxRrVr7yliOq1HMRJuaOZEgYvmFSIPBIXpu3A)（社内からのみアクセス可能） |
| Issue ラベル | `WorkingGroup::SSCS` |

## 概要と目標

ソフトウェアサプライチェーンセキュリティ（SSCS）は、GitLab が会社の利益だけでなく、ユーザーの利益とセキュリティのためにも優れた実績を残す必要がある重要な領域です。SSCS の機能とケイパビリティは、GitLab のほぼすべてのステージとグループにまたがっています。このワーキンググループの主な焦点は、GitLab への署名と検証の組み込みに取り組むことであり、`Create::Source Code`、`Verify::Pipeline Execution`、`Verify::Runner`、`Package::Package Registry`、`Package::Container Registry` のグループが管理する領域での貢献が含まれます。他のチーム領域への軽微なコードの貢献もある可能性があります。署名と検証に関係のない GitLab でのその他の SSCS 機能作業は、このワーキンググループのスコープ外です（ただし、GitLab の他の領域で引き続き検討・作業されています）。この[方向性ページ](https://about.gitlab.com/direction/supply-chain/)では、SDLC 全体における SSCS の広範な長期的ビジョンを説明しています。

署名と検証は伝統的に困難なタスクです。ビルドアーティファクト、コンテナイメージ、またはパッケージに安全に署名するために、ユーザーはまず署名の秘密鍵を安全に保管する必要があります。この鍵は定期的にローテーションする必要があり、署名ツールは署名鍵に安全にアクセスする方法が必要です。これらの要件をすべて合わせると、ユーザーがビルドに署名するための参入障壁が高くなります。その結果、多くのプライベートプロジェクトや小規模なオープンソースプロジェクトでは、署名されたビルドアーティファクトを公開していません。

高いレベルでは、このワーキンググループは GitLab を使用してアーティファクト、コンテナイメージ、またはパッケージをビルドするたびに、自動的にデフォルトで署名が行われるようにする計画を立てています。この複雑さをエンドユーザーから取り除き、デフォルトで有効にすることで、GitLab はこの参入障壁を下げ、署名を業界全体でデフォルトで有効な標準にするために貢献しようとしています。

## 参照リンク

以下のリンクはワーキンググループにとって有用な背景情報を提供する場合があります:

- [SLSA フレームワーク要件](https://slsa.dev/spec/v1.0/requirements)
- [OpenSSF の SLSA 検証ツール](https://github.com/slsa-framework/slsa-verifier)
- [Sigstore Cosign プロジェクト](https://github.com/sigstore/cosign)
- [Sigstore Fulcio プロジェクト](https://github.com/sigstore/fulcio)
- [Sigstore GitSign プロジェクト](https://github.com/sigstore/gitsign)
- WIP [エンジニアリングブループリント](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/113157/diffs)（まだ確定されておらず、このワーキンググループのメンバーからの意見が必要です）

## 想定されるタイムライン

このワーキンググループは完了までに合計 12〜15 ヶ月を要する見込みです。このタイムラインはあくまで見積もりであり、終了基準が満たされた時点でワーキンググループは正式に終了します。これにより、12〜15 ヶ月の見積もりよりも長くなる場合も短くなる場合もあります。グループは各四半期末にレビューを実施します。

## メンバーのコミットメントと期待値

他のワーキンググループとは異なり、この取り組みは他の作業よりも優先されることが期待されています。ワーキンググループの Govern ステージのコアメンバーは、このプロジェクトに約 80% の時間を貢献することを期待してください。他のステージのコアメンバーはボランティアであり、その時間の割合はより少ない場合があります。このコミットメントは、ワーキンググループに参加する前に、個人のマネージャーおよび該当する場合はプロダクトカウンターパートと話し合い、合意する必要があります。チームメンバーは通常のワーキンググループコントリビューターとして参加することもできます。

私たちはこのワーキンググループの人員配置ニーズを四半期ごとに再評価する予定です。ワーキンググループのプロダクトおよびエンジニアリング DRI は、チームの全体的な利益とワーキンググループのニーズに基づいて、各四半期にチームメンバーを増減または交代させる場合があります。チーム構成を再評価するために以下の日程が計画されています:

- 2023 年 3 月 - グループの初期形成
- 15.10 マイルストーン（2023 年 3 月 17 日）- ワーキンググループ正式開始
- 2023 年 7 月 - 四半期末のチーム構成評価
- 16.2 マイルストーン（2023 年 7 月 17 日）- チームの変更が発効
- 2023 年 10 月 - 四半期末のチーム構成評価
- 16.5 マイルストーン（2023 年 10 月 17 日）- チームの変更が発効
- 2024 年 1 月 - 四半期末のチーム構成評価
- 16.8 マイルストーン（2024 年 1 月 17 日）- チームの変更が発効
- 2024 年 4 月 - 四半期末のチーム構成評価
- 16.11 マイルストーン（2024 年 4 月 17 日）- チームの変更が発効

## コード管理と引き継ぎ

ソフトウェアサプライチェーンセキュリティは GitLab 全体の領域に影響を与えるため、このワーキンググループはコミュニティコントリビューターに似た形で運営し、GitLab の他のステージやグループに機能を追加します。その機能が段階的に完成するにつれ、継続的なメンテナンスのために適切なステージ/グループに引き継がれます。

## 終了基準 {#exit-criteria}

このワーキンググループの終了基準は、以下の 4 つの基準の完了です:

1. ビルドアーティファクト、アテステーションファイル、コンテナイメージ、パッケージを含むビルドが[デフォルトで署名](https://gitlab.com/groups/gitlab-org/-/epics/9212)されること。
1. Web UI を通じて行われたコミットを含むコミットが[デフォルトで署名](https://gitlab.com/gitlab-org/gitlab/-/issues/364428)されること。このコミット署名のアプローチはまだ検討中です。
1. SLSA レベル 3 のアテステーションがデフォルトで生成されること（現在は[SLSA レベル 1 のアテステーション](https://docs.gitlab.com/ee/ci/runners/configure_runners.html#artifact-attestation)がデフォルトで生成されています）。
1. [ビルドアーティファクト](https://gitlab.com/groups/gitlab-org/-/epics/8839)、[コンテナイメージ](https://gitlab.com/groups/gitlab-org/-/epics/7856)、およびパッケージのビルド署名と検証ステータスが UI に表示されること。ユーザーが GitLab でアイテムを閲覧するだけでカスタムツールを実行することなく、検証ステータスがデフォルトで表示されること。

上記の作業を追跡するためのエピックは、必要な要件とデザインとともに作成中です。リンクがある項目については作業中のものとしてご確認ください。リンクのない項目を追跡するエピックは今後作成・追加される予定です。

### クロージングサマリー

[Sec セクションの再編](https://gitlab.com/gitlab-com/sec-sub-department/meta/-/issues/1)により、Govern ステージはソフトウェアサプライチェーンセキュリティステージに名称変更されました。この変更に伴い、このワーキンググループを終了し、作業を個々のグループに分配します。

達成したこと:

1. [Cosign 用の OIDC プロバイダーとして GitLab.com を追加](https://gitlab.com/groups/gitlab-org/-/epics/10254)
1. [署名済みコンテナレジストリイメージのユーザーエクスペリエンスをリリース](https://gitlab.com/groups/gitlab-org/-/epics/7856)
1. [Sigstore を使用したキーなし署名と検証の方法](https://docs.gitlab.com/ee/ci/yaml/signing_examples.html)に関するドキュメントを追加
1. [ポリシーを含むジョブの `source` 値の保存](https://gitlab.com/groups/gitlab-org/-/epics/11796)をリリース

## 優先順位と進捗状況

エンジニアリング DRI が特定された後、作業の優先順位リストをここで追跡します。


{{< product/product-priorities software-supply-chain-security-wg >}}


このリストは WIP であり、グループの残りの終了基準を満たすための優先エピックのリストを追加する作業が続いています。

## 成果

プロジェクト完了後に追加予定

## 役割と責任

| ワーキンググループの役割 | 担当者 | 職位 |
|--------------------|--------------------|-------------------------------------------------|
| エグゼクティブスポンサー | Hillary Benson | Senior Director, Product Management |
| プロダクト DRI | Sam White | Group Manager, Product - Govern |
| エンジニアリングマネージャー DRI | Nathan Rosandich | Engineering Manager, Govern |
| エンジニアリング DRI | Aaron Huntsman | Sr. Backend Engineer, Govern |
| メンバー | Charlie Ablett | Staff Backend Engineer, Plan |
| メンバー | Georgi N. Georgiev | Senior Backend Engineer, Verify |
| アドバイザー | Greg Myers | Security Engineer, Application Security |
| アドバイザー | Ottilia Westerlund | Security Engineer, Application Security |
