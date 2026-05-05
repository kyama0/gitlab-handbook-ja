---
title: "CP 自動化を活用したエンゲージメントの管理方法"
description: "CP プロセスについて学びます。"
upstream_path: /handbook/customer-success/professional-services-engineering/professional-services-delivery-methodology/cp/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## CP とは何か?

CP すなわち「Collaboration Project」は、エンゲージメントのデリバリーを GitLab 内で標準化された再現可能な方法で管理するためのフレームワークです。各顧客は GitLab 内に独自のグループを持ち、そのグループにはその顧客のために提供する各 SOW のためのプロジェクトが含まれます。これらのグループとプロジェクトは、プロジェクトデリバリーに関するすべての情報を保存し、プロジェクトの進捗と健全性を簡単に追跡したり、プロジェクト中に行ったすべての作業の証跡を提供したりします。

私たちのプロジェクトのリストは、社内でスタッフされている場合は [GitLab Professional Services Group](https://gitlab.com/gitlab-com/customer-success/professional-services-group/professional-services-delivery/gitlab-professional-services) で、または完全にもしくは部分的にパートナーでスタッフされている場合は [GitLab Partner Collaboration Group](https://gitlab.com/gitlab-com/customer-success/professional-services-group/professional-services-delivery/gitlab-partner-collaboration) で確認できます。

## SOW はどのように CP に流れ込むか?

PSQuote 見積もりには 1 から多数の見積もり行が含まれます。それらの見積もり行は、gitlab.com の顧客グループ内のエピックに 1 対 1 でマッピングされ、各エピックはワークストリームとして扱われます。その顧客グループには、その顧客のために提供する SOW の数に応じて、1 から多数のプロジェクトが含まれます。各エピックについて、PM は各ワークストリームの完了に向けた特定の作業を追跡するさまざまな Issue を作成します。

## 一般的なコンポーネントは何か?

- 顧客グループ: このグループは、特定の顧客のために行うすべての作業を保存します。
- SOW/PO プロジェクト: これらのプロジェクトは顧客グループ内に存在し、その特定の SOW または PO 内で行うすべての作業を保存します。
- 顧客グループラベルでのワークストリームエピック: これらは SOW のアクティビティに直接結びついています。
- Issue テンプレートの標準ライブラリ。
- コメントテンプレートの標準ライブラリ。
- ワークストリームごとの各タスク/Issue のステータスをカバーするボードの標準シリーズ。
- [デリバリーキット](https://gitlab.com/gitlab-org/professional-services-automation/delivery-kits) からの特定のドキュメント。

## これはすべてどのように作成されるのか?

[CPR_GitOps](https://gitlab.com/gitlab-com/customer-success/professional-services-group/professional-services-delivery/cpr_gitops) というプロジェクトがあり、カスタマープロジェクトごとにグループ、プロジェクト、エピックなどの基盤を自動的に作成するプロセスを処理します。この自動化は、PSQuote を介した Quilt API によってトリガーされます。現在、CPR_GitOps が提供するためにプロジェクトを適切にスキャフォルドするために必要なすべての詳細を提供するためのステージングエリアとして、マージリクエストを使用しています。

GitLab 内でプロジェクトをセットアップするには、この [README](https://gitlab.com/gitlab-com/customer-success/professional-services-group/professional-services-delivery/cpr_gitops/-/blob/main/README.md?ref_type=heads) に従ってください。このステップをより自動化する作業を継続している間、または #ps-practice Slack チャンネルにメッセージを送信して、CP プロジェクトの作成を依頼してください。

[CP プロジェクト例-Delta](https://gitlab.com/gitlab-com/customer-success/professional-services-group/professional-services-delivery/gitlab-professional-services/Delta/SOW-3697)（移行）
[CP プロジェクト例-Ripple](https://gitlab.com/gitlab-com/customer-success/professional-services-group/professional-services-delivery/gitlab-professional-services/Ripple-Labs/SOW-3378)（移行）

## プロジェクトの準備ができた後、PM が何を構成する必要があるか?

- Issue ボード
- README

## コラボレーションプロジェクトへの外部からの招待はどのように扱われるか?

コラボレーションプロジェクトには [RED Data](/handbook/security/policies_and_standards/data-classification-standard/) が含まれることがあります。

不本意な情報露出を避けるため、すべての新規プロフェッショナルサービスプロジェクトでは、アクセス権を付与する前に、GitLab の PS プロジェクトマネージャーと顧客のプロジェクトマネージャー（または主要ステークホルダー）の間で同期的な検証が必要です。この同期検証は、Zoom セッションまたは顧客がホストするセッションで行うことができます。

その後のすべてのチームメンバー招待は、顧客のプロジェクトマネージャーによって制御および発行され、顧客間でのプロビジョニングエラーを防止します。

## ここまで来た道のり

カスタマープロジェクト (CP) の自動化は、デリバリープロセスを改善するための OKR として、Adriano Fonseca によって 2022 年に最初に設計されました。元の設計は [こちら](https://gitlab.com/gitlab-com/customer-success/okrs/-/issues/258) にあります。この設計は、取り組みを再開する作業を進める中で少し変更されています。
