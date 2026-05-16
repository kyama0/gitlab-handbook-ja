---
title: "セールスプレイ"
description: "セールスプレイは、定義された Land and Expand のセールスモーションによって、案件数とクローズ済みビジネスの量を改善するために設計されています"
upstream_path: /handbook/marketing/sales-plays/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-06-27T22:14:31+00:00"
---

## なぜセールスプレイが必要なのか

セールスプレイは、定義された Land and Expand のセールスモーションによって、案件数とクローズ済みビジネスの量を改善し、最終的に GitLab により多くの ARR を生み出すために設計されています。より具体的には、体系化されたセールスプレイは、セールスチームが以下のいずれか（または両方）を実行できるようトレーニングを受け、対応可能にすることを目的としています。

1. 繰り返し利用可能で実証済みのセールス戦術一式（Evergreen セールスプレイ）
1. 特定の時限式キャンペーンに合わせて生成された一連のステップ（Focused セールスプレイ）

## セールスプレイのゴール

具体的なセールスプレイのゴールは四半期ごとに変わる可能性がありますが、以下が含まれる場合があります（これらに限定されません）。

- セールス起点の First Order 案件数を増やす
- 特定の競合に対する勝率を向上させる
- MQL から SAO への転換率を向上させる

## セールスプレイとは何か

セラー（GitLab および/または GitLab パートナー）が単独で実行してパイプラインを構築できる、規定された構造化されたステップまたはアクティビティ一式です。

## セールスプレイの種類

| セールスプレイの種類 | 目的 | タイミング | 期間 | 数 |
| ------ | ------ | ------ | ------ | ------ |
| **Evergreen** | 一般的なアウトバウンドのプロスペクティングとパイプラインの生成 | 条件駆動型（x を見たら y を実行する） | セールスプレイが「機能しなくなる」までは恒久的（継続的なメンテナンスが必要） | 数を限定した優先プレイ（10 以下） |
| **Focused** | マーケティングおよび/またはプロスペクティングのキャンペーン関連。Evergreen プレイを起点として使用する場合あり | 時限式・スケジュール済み | 実行して完了（ただし将来の時点で再実行可能） | 数の上限なし |
| **Test** | 新しいまたは新興のケイパビリティおよび/または市場に基づく新しいモーションの実証 | Evergreen または Focused のいずれもあり得る | Evergreen または Focused のいずれもあり得る | 数の上限なし |

## セールスプレイの構成物

セールスプレイには、以下が含まれますが、これらに限定されません。

- 理想的な顧客プロファイルとターゲットペルソナ
- ペルソナベースのメッセージング
- プロスペクティングガイド
  - 知っておくべきこと（共通の課題、ポジティブなビジネス成果、必要なケイパビリティ、GitLab の主な差別化要因、それらを裏付けるプルーフポイント）
  - 話すべきこと（推奨される発見質問、ビジネス価値ベースのポジショニングポイント、よくある反論への対処方法、関連付けられる可能性のあるサービス）
  - 実行すべきこと（プレイを実行するためのステップと戦術。さまざまなパートナータイプの活用方法の提案を含む）
- メールおよび LinkedIn InMail テンプレート（セールスは適切にカスタマイズすることが推奨されます）
- 顧客や見込み客と共有する代表的なアセット
- Focused セールスプレイには、ターゲットアカウントおよび/またはコンタクトリストも含まれます

## Evergreen セールスプレイ

| セールスプレイ | ターゲット顧客セグメント | 理想的な顧客プロファイル | ターゲットペルソナ |
| ------ | ------ | ------ | ------ |
| [Premium から Ultimate へのアップセル](/handbook/marketing/sales-plays-cicd/playbook-premium-to-ultimate/) | ENT および COM。Growth | GitLab CI/CD ケイパビリティをすでに活用している既存の Premium 顧客 | エコノミックバイヤーおよびテクニカルインフルエンサー |
| [インフラストラクチャ自動化 (GitOps)](/handbook/marketing/sales-plays/gitops/) | 主に ENT。First Order および Growth | Infrastructure as Code を使用するための規範的ワークフローを通じて、IT インフラの弾力性とスケールを高めたい組織 | CIO または VP of IT。VP of IT Infrastructure。VP of Platform Engineering |
| [BitBucket セールスプレイ](https://docs.google.com/presentation/d/1M6lKn7F2vajcP2au4i0GMVVMu4n4UCG1EJyy-RLfmzU/edit?usp=sharing) | ENT および COM。First Order | BitBucket Server、Cloud、または Data Center を現在使用している組織 | CIO（App Dev Exec/Director/Manager をチャンピオンとする） |
| [パッケージ管理による拡張](/handbook/marketing/sales-plays/package/) | 主に ENT。First Order および Growth | コスト削減、開発者体験の向上、より高い効率性のために JFrog の Artifactory または Sonatype の Nexus から移行する組織 | エコノミックバイヤーおよびテクニカルインフルエンサー |
| アジャイルプランニング（競合排除を含む） | TBD | アジャイル手法を使用してプロジェクト、プログラム、ポートフォリオをより良くおよび/またはより費用対効果の高い方法で管理する方法を探している組織 | VP of Application Development |
| CI で Land する（競合排除を含む） | ENT および COM。First Order | 複雑さとデリバリー時間を削減しつつ、コード品質を高める方法を探している組織 | Application Development Manager または Director。Software Developer および Team Lead。DevOps エンジニア |
| Ultimate を Land する（CD + DevSecOps） | ENT および COM。First Order | 包括的な DevSecOps ソリューションを探している組織 | CIO または VP of IT。CISO。IT Security Manager |
| GitHub 競合対応 | ENT および COM。First Order および Growth | 包括的な Value Stream Delivery Platform (VSDP) で標準化したい組織 | エコノミックバイヤーおよびテクニカルインフルエンサー |
| ソースコード管理の競合排除 | ENT および COM。主に First Order | レガシーな SCM ソリューションから、ベストオブブリードのオンプレミスまたは SaaS の SCM ソリューションに移行し、DevSecOps ツールチェーンを統合する能力を探している組織 | CIO または VP of IT。VP、Director、Manager of Application Development |
| セキュリティの排除および/または強化 | 主に ENT。Growth | アプリケーションセキュリティの体制を改善したい組織 | CIO または VP of IT。CISO。IT Security Manager |
| [デジタルトランスフォーメーション / DevOps プラットフォーム](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devops-platform/) | ENT および COM。First Order および Growth | より広範なデジタルトランスフォーメーションの取り組みをサポートするために、アプリケーション開発とデリバリーのスピードを加速し、可視性を向上させたい組織 | エコノミックバイヤーおよびテクニカルインフルエンサー |
| クラウドネイティブ & アプリケーションのモダナイゼーション | ENT および COM。First Order および Growth | アプリケーション開発により近代的でクラウドネイティブなアプローチを使用したい組織（例：コンテナ、Kubernetes、サーバーレス） | エコノミックバイヤーおよびテクニカルインフルエンサー |
