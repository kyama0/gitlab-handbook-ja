---
title: "InnerSource ワークショップ"
Description: "InnerSource ワークショップと深掘りセッションを主導する CSM 向けのガイダンス。"
upstream_path: /handbook/customer-success/workshops/innersource-workshop/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## InnerSource ワークショップ概要

このワークショップは、InnerSource に関心を示している、または組織全体のコラボレーションを向上させる方法に関心を示している新規または既存の顧客向けにイネーブルメントを提供することを目的としています。期待される成果は、顧客が GitLab CI を使用したシークレット検出を含む、InnerSource 対応の方法で GitLab プロジェクトのセットアップを成功させることです。

- まずは [ディスカバリー質問](#discovery-questions) で「なぜ」を理解することから始める
- ["Unlocking InnerSource with GitLab" ウェビナー](https://www.youtube.com/watch?v=ZS1mCpBHXaI) を非同期で共有する
- よりハイタッチな顧客には、エグゼクティブレベルの概要および/またはハンズオンワークショップを提供できます
  - **セッション 1**（15-30 分）は、組織にとっての価値提案、顧客の証拠、およびクイックスタートガイドの概要
  - **セッション 2**（30-45 分）は、顧客が InnerSource 対応プロジェクトを持ち込み、私たちのガイダンスで構成することを期待されるハンズオンワークショップ
- ワークショップの後、顧客が GitLab CI パイプラインを正常に構築したかどうかを記録します。最近行っていない場合は、この機会を [service ping](https://docs.google.com/presentation/d/1d28buwnzM4xKADU1OC6dU6HXd3KqBurG_tIEag7BJMw/edit#slide=id.g10928a67270_0_636)（社内リンク）の価値を提案するために使用してください

*注意*: 異なるオーディエンスがいない場合は、2 つのセッションを 1 つに組み合わせることができます。このプレイブックを試行していたとき、最初のセッションには上級リーダーシップ/スポンサーが、2 つ目のセッションには実践者が参加していました。

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/ZS1mCpBHXaI" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

## ディスカバリー質問

ディスカバリー質問の目標は、顧客がこれをより大きなイニシアチブに結びつけ、彼らの取り組みをスポンサーするチャンピオンを特定するのを助けることです。チャンピオンは、セッション 1 を一緒に実行する人物です。

- InnerSource のユースケースについて教えてください。トランスフォーメーションや会社の目標で明示的に表れていますか？
- InnerSource が会社のために達成することを期待していることは何ですか？どのような成果ですか？
- ソースコードは会社内でどのように分類されていますか？（例: 「高セキュリティ」/最小権限？）
- シークレット管理とシークレット検出には何を使用していますか？
- InnerSource をチャンピオンしているのは誰ですか？
- 念頭に置いているユースケースはありますか？

## 企業からの InnerSource プロジェクト例

私たちが聞いてきたフィードバックの 1 つは、GitLab が顧客が成功した良い InnerSource プロジェクトの例を提供できるかどうかです。

- UI Design Systems/Libraries - すべての UI エンジニアは、ブランド準拠のライブラリを使用するためにこれらのリポジトリを参照します。これらが InnerSource 化されると、より多くのデザイン要素を貢献できます。
- [Architecture Decision Records](https://adr.github.io/) - ADR は InnerSource を始めるのに最適な場所です。アメリカの大手通信会社では、開発チームが GitLab Issue を介して投票し意見を述べるためのすべての重要なアーキテクチャ決定をホストする「Enterprise Decision Record」リポジトリを構築しました。決定後、それらはリポジトリ内に文書化されます。
- Cloud Security Policies - 企業は、自社のクラウドプラットフォームの使用を保護する必要があります。会社のセキュリティポリシーを管理するコードは、開発者に何が必要かを明確にするだけでなく、クラウドプロバイダー（AWS、GCP、Azure）が利用可能になったときに、開発者が新しいサービスを有効にするように要求できるため、InnerSource モデルに適しています。これは、セキュリティと開発の間のコミュニケーションとプロセスを高速化します。
- GitLab CI Templates - CI テンプレートは、テックスタック間で共有可能で時間を節約できるため、InnerSource に最適です。会社が CI パイプラインで特定のステージを実行する必要がある場合、何かが間違っていたり DevOps エンジニアが変更を推奨する必要がある場合に備えて、その構成コードを公開し InnerSource にすることが妥当です。

## ワークショップ資料

- **エグゼクティブ概要** [Session 1: InnerSource Quick Start w/GitLab slides](https://docs.google.com/presentation/d/1O_MBH5_NHfKvDcWrdaHx_tmfUWWRkc3xnvMBWdikwIA/edit#slide=id.gcb47225958_0_1126)
- **ハンズオンワークショップ** [Session 2: InnerSource Workshop](https://docs.google.com/presentation/d/1PauUr2hczbWNb7D5xvEGkMo5h4w1KGORnE2thgYiQZg/edit#slide=id.gfd8e70f97a_0_295)
- InnerSource ウェビナーで活用された [デモプロジェクト](https://cs.gitlabdemo.cloud/innersource/demo)
