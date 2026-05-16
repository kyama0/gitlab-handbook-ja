---
title: デモンストレーション
description: "ソリューションアーキテクトは時に短い予告でデモを行ったり、特定の GitLab 機能を見込み客や顧客に示すための通話に参加したりすることを求められます"
upstream_path: /handbook/solutions-architects/demonstrations/
upstream_sha: cf317047d2c9678524c0db59ab7ed8c050713245
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-03-10T12:51:46-05:00"
---

## デモシステム概要と特定の環境

[デモシステムハンドブックページ](/handbook/customer-success/demo-systems/)は、GitLab 機能、価値提案、ワークフローのデモンストレーションに使用されるデモシステムインフラの概要を提供します。

デモで使用する環境へのアクセス方法に関する具体的な詳細については、[環境サブページ](/handbook/customer-success/demo-systems/#shared-environments)を参照してください。

## デモの準備

ソリューションアーキテクトは時に短い予告でデモを行ったり、特定の GitLab 機能を見込み客や顧客に示すための通話に参加したりすることを求められます。これらのデモリクエストに備える際のベストプラクティスは、ブラウザタブにさまざまなコンテンツをプリロードした最小化されたブラウザウィンドウを用意しておくことです。よく利用される環境の例を以下にリストします。これらのリンクの一部は GitLab チームメンバーのみアクセスが有効になっていることに注意してください。 (To-do: このリストをデモカタログに移植する)

- [GitLab デモシステム](/handbook/customer-success/demo-systems/) は、デモのカタログとデモを実行するためのサンドボックスインフラを提供します。
- [GitLab.org グループレベル](https://gitlab.com/groups/gitlab-org/-/roadmap)は、リリース計画に使用される GitLab エピック、ロードマップ、プロジェクト横断の Issue ビューを明確に表現します
- Auto DevOps によって駆動される [GitLab.com プロジェクト](https://gitlab.com/jkrooswyk/joel-springsample/-/boards/579466)で、人口を持つ Issue ボードとアクティブなマージリクエストが含まれており、ビルド、テスト、セキュリティ、レビューに GitLab Auto DevOps を活用するワークフローの価値を説明するのに非常に役立ちます
- この [GitLab.com プロジェクト](https://gitlab.com/gitlab-examples/security/security-reports/merge_requests/2)は、特にセキュリティのディスカッションでよく利用されます
- [GitLab.com の本番モニタリング](https://gitlab.com/gitlab-org/charts/gitlab/-/metrics?environment=190276)は、カスタムおよびアプリ内モニタリングに関するディスカッションで役立ちます
- GitLab Runner の詳細を表示する[本番 Grafana インスタンス](https://dashboards.gitlab.com/d/000000159/ci?refresh=5m&orgId=1)は、モニタリングとダッシュボードに関する可能性の表現方法として優れています
- ハンドブック内の GitLab [Direction](https://about.gitlab.com/direction/) ページは、将来を見据えた製品ビジョンの質問や今後の機能に関するディスカッションでよく役立ちます
- オプション: 標準デモ環境を活用することで、[Integrations](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/integrations/) をロードしてディスカッションの準備ができます
- 他の既存のデモグループとプロジェクトは次のセクションにリストされています

## GitLab Flow スタイルのデモ録画の保守の繰り返し可能なプロセス

FY23-Q1 に、私たちは[GitLab P2M スタイルのデモの録画の保守の繰り返し可能なプロセスを作成する](https://gitlab.com/gitlab-com/customer-success/solutions-architecture-leaders/sa-initiatives/-/issues/89) OKR を開始しました。これにより、FY23-Q3 に[GitLab Flow スタイルのデモの録画の保守の繰り返し可能なプロセスをドキュメント化する](https://gitlab.com/gitlab-com/customer-success/solutions-architecture-leaders/sa-initiatives/-/issues/137)フォローアップ OKR が生まれました。

### デモと環境のセットアップ

すべての GitLab アセットは[このグループ](https://gitlab.com/tanuki-workshops/emea-sa-tam/p2m)で利用可能です。Get Started する方法の詳細は [README](https://gitlab.com/tanuki-workshops/emea-sa-tam/p2m/README/-/blob/main/README.md) を参照してください。

### GitLab Flow シナリオ

イントロとして機能し、視聴者をデモにガイドする短いプレゼンテーションを用意するべきです。 [このプレゼンテーション](https://docs.google.com/presentation/d/1wpxOE5Sq1fRE2bv_7x5uF3wLx0KJwTxVNDkCukEVEWY/edit?usp=sharing) (GDrive の [CS->Demo Script](https://drive.google.com/drive/folders/0B6HCxjyEpdXRR0FSQXMwVjI3bFE?resourcekey=0-IAm5RyKLwi-1uAZ4hgZcjQ&usp=sharing) フォルダにあります) はこれの基礎として使えます。

メインフローは次のようになるべきです:

- One GitLab Platform への導入
- 選定された数の追加機能とその価値のハイライト (可能ならリリース MVP に感謝を述べる)
- GitLab Flow のデモ

## 既存のデモンストレーション

[Demo Architect オファリングハンドブックページ](/handbook/solutions-architects/center-of-excellence/demo-architecture/)は、Demo Engineering によって保守・所有される、現在利用可能な共有 CS デモ、ランチ＆ラーン、ワークショップをリストしています。

加えて、再利用可能なデモやプロジェクトを見つけるのに役立つさまざまなレガシーソースと場所があります:

- [Demo カタログプロジェクト](https://gitlab.com/gitlab-com/customer-success/solutions-architecture/demo-catalog)
- [GitLab Examples](https://gitlab.com/gitlab-examples) は、機能検証、スピードラン、デモ、ドキュメントでの機能展示のために製品グループによって使用されます。[GitLab CI/CD Examples ドキュメント](https://docs.gitlab.com/ee/ci/examples/)は、お客様も自分のために使えるようこれらを案内します。
- [Guided Explorations](https://gitlab.com/guided-explorations) - 言語固有のフィーチャーフラグの例、さまざまな DevOps パターン、パイプラインのヒント、トリック、Windows のためのハックなど、さまざまなトピックのプロジェクトがあります。
- [GitLab CS Tools](https://gitlab.com/gitlab-com/cs-tools/gitlab-cs-tools) - GitLab CS の自動化と移行ツール用のプロジェクトを提供するグループ
- [Customer Success Demos](https://gitlab.com/gitlab-com/customer-success/demos) - Customer Success が使用するデモの中央集約場所で、さまざまなアプリケーションタイプのゴールデンリポジトリ、セキュリティデモなどのセットを含みます。

## SA デモ用のスライドデッキ

デモによく使用される、Google Drive に保存されているいくつかのスライドデッキがあります。自分のニーズに合わせてカスタマイズするためにこれらのコピーを自由に作成してください。

- [All the Things](https://docs.google.com/presentation/d/1AG6eDm8USqU7TG12Sp4UEc9B3P03pniQnVHZAGzyDAg/edit?usp=sharing) - すべての GitLab 機能と価値提案に関する包括的なスライドセットを含みます
- [General Demo.pptx](https://drive.google.com/file/d/17SoRPxPCswT_FublXCsi3rm3TBnHAYI-/view?usp=sharing) - Cherry Han が作成・保守する製品ウォークスルーデッキ。ヒント: デッキのコピーを作成し、Google スライドで開いて自分の目的に合わせて編集できます。
- Demo Prep

<details><summary>こちらは、デモ提供前に Demo2Win 戦略を活用するために実施／検討すべきステップの詳細を示す Demo Preparation Roadmap です。</summary>

<image>
<iframe src="https://drive.google.com/file/d/1KIoJZ0Lcm83_gUHA5nzlFpgQ784xMHZp/preview" width="640" height="480" allow="autoplay"></iframe>
</image>
