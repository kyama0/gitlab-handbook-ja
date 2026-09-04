---
title: "Geo とディザスタリカバリ"
description: "Geo チームに関する情報"
upstream_path: "/handbook/engineering/infrastructure-platforms/tenant-scale/geo/"
upstream_sha: "68426776f854464b95a942162d83ddb29afbcf7d"
translated_at: "2026-09-04T12:16:50+09:00"
translator: claude
stale: false
lastmod: "2026-08-29T07:56:36+10:00"
---

## Geo チーム

[Geo](https://docs.gitlab.com/ee/administration/geo/index.html) は [Premium](https://about.gitlab.com/pricing/premium/) 機能であり、分散チームの開発を加速するために、プライマリ GitLab インスタンスの 1 つまたは複数の読み取り専用ミラーを提供するように構築されています。このミラー（Geo セカンダリノード）は、大規模なリポジトリやプロジェクトの clone またはフェッチにかかる時間を削減するか、ディザスタリカバリソリューションの一部として機能します。

### チームメンバー

{{< team-by-manager-slug manager="thiagofigueiro" department="Geo Team" >}}

### Stable Counterparts

{{< engineering/stable-counterparts role="Geo" manager="thiagofigueiro" >}}

## 目標と優先事項

私たちの優先事項はプロダクトの方向性と整合しています。詳細は [Geo 製品ビジョンページ](https://about.gitlab.com/direction/geo/)でご覧いただけます。

製品ビジョンに記載された項目に加えて、お客様から寄せられる Issue を常に評価する必要があります。これらはバグレポートや機能リクエストの形を取ることがあります。Geo のユーザーは多くの場合、私たちの最大のお客様であり、Geo をワークフローの重要な部分として利用している方もいます。

また、ハウスキーピング作業を管理可能なレベルに保つために常に取り組んでいます。可能な限り、関連するプロジェクトの一部としてこれらの Issue に対処します。それが不可能な場合は、プロジェクト間の時間を使ってこれを実現します。

## 目標と主要な結果（OKR）

四半期ごとに、エンジニアリングチームは[目標と主要な結果](/handbook/company/okrs/)を設定します。OKR は FY24-Q1 以降 GitLab で管理されています。以下は Geo の OKR に関する Issue リストへのリンクです。

[OKR FY25-Q2](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Ageo&milestone_title=FY25-Q2&first_page_size=20)
[OKR FY25-Q3](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Ageo&milestone_title=FY25-Q3&first_page_size=20)

## Geo のディザスタリカバリとの関係

ディザスタリカバリ（DR）は、災害から回復できるようにするために整備されたポリシー、ツール、および手順のセットです。

Geo はデータの冗長性を提供します。お客様は別の場所にデータの冗長なコピーを持つことになります。プライマリインスタンスに何かが起こった場合でも、セカンダリインスタンスがデータのコピーを保持しています。

ただし、データの冗長性は完全な DR 戦略の一部に過ぎません。

高可用性（HA）もディザスタリカバリへの一歩です。現時点では、プライマリインスタンスが利用できない場合に一部のアクションが実行できないため、Geo は真の HA を提供していません。

## Geo からのサポートを依頼する方法

サポートの第一線は常に、お客様が提起した Issue に割り当てられたサポートエンジニアです。ただし、お客様の懸念を解決するためにより多くの専門知識が必要な場合があり、Geo エンジニアの関与が必要になります。このセクションでは、Geo 関連のカスタマーサポート Issue に対してチームにサポートを依頼する際のプロセスと期待事項を説明します。

### サポートを依頼する前に

サポートリクエストを提出する前に、Geo の[ドキュメント](https://docs.gitlab.com/ee/administration/geo/)、[ディザスタリカバリ](https://docs.gitlab.com/ee/administration/geo/disaster_recovery/)ドキュメント、[バックアップとリストア](https://docs.gitlab.com/ee/administration/backup_restore/)ドキュメント、Geo ハンドブックページを確認するか、以前の[サポートリクエスト](https://gitlab.com/gitlab-com/request-for-help/-/issues/?sort=created_date&state=all&label_name%5B%5D=Help%20group%3A%3AGeo&first_page_size=100)を検索してください。質問への回答がそこで見つかる可能性があります。**RFH を提出する前に、まず Geo サポート Pod チャンネル `#spt_pod_geo` にお問い合わせください。**

### 一般的な質問をする

回答が見つからない一般的な質問がある場合は、Slack の [#g_geo](https://gitlab.slack.com/archives/C32LCGC1H) チャンネルで気軽に質問してください。エンジニアは可能な限りサポートし、その場で分かる範囲で質問に答えるよう最善を尽くします。より多くの調査が必要な場合や、より複雑なシナリオに対処する必要がある場合は、サポート Issue を作成する必要があります（次のセクションを参照）。

### サポートリクエスト Issue を作成する

お客様が Geo チームの支援を必要とする場合、Issue の使用を好みます。これにより、作業を優先順位付けし、Slack の保存ポリシーが適用された際に履歴を失わずコンテキストを維持することができます。リクエスターには [Request for Help プロジェクト](https://gitlab.com/gitlab-com/request-for-help)で Issue を作成するようお願いしています。

Geo 関連の質問には [Geo サポートリクエスト Issue テンプレート](https://gitlab.com/gitlab-com/request-for-help/-/blob/main/.gitlab/issue_templates/SupportRequestTemplate-Geo.md)を、バックアップとリストア機能エリアに関連する Issue には [バックアップとリストアサポートリクエスト Issue テンプレート](https://gitlab.com/gitlab-com/request-for-help/-/blob/main/.gitlab/issue_templates/SupportRequestTemplate-BackupAndRestore.md)を必ず使用して記入してください。リクエスターは「お客様情報」と「サポートの質問」セクション**のみ**を記入する必要があります。

## よく使うリンク

### ドキュメント

- [Geo](https://docs.gitlab.com/ee/administration/geo/index.html)
- [ディザスタリカバリ](https://docs.gitlab.com/ee/administration/geo/disaster_recovery/index.html)
- [計画的フェイルオーバー](https://docs.gitlab.com/ee/administration/geo/disaster_recovery/planned_failover.html)
- [バックグラウンド検証](https://docs.gitlab.com/ee/administration/geo/disaster_recovery/background_verification.html)
- [Geo 用語集](https://docs.gitlab.com/ee/administration/geo/glossary.html)

### Issue リスト

#### タイプラベルが欠けているもの

以下のリンクは、欠けているサブタイプラベルを特定するのに役立つ Geo チームの Issue リストへ繋がっています。各リンクを開いた後、希望するマイルストーンフィルターを選択してください。

- [タイプラベルが欠けている Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_asc&state=all&amp;not%5Blabel_name%5D%5B%5D=type%3A%3A%2a&label_name%5B%5D=group%3A%3Ageo&milestone_title=15.6&first_page_size=20)
- [サブタイプラベルが欠けている機能 Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_asc&state=all&label_name%5B%5D=type%3A%3Afeature&label_name%5B%5D=group%3A%3Ageo&milestone_title=15.6&amp;not%5Blabel_name%5D%5B%5D=feature%3A%3A%2a&first_page_size=20)
- [サブタイプラベルが欠けているメンテナンス Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_asc&state=all&label_name%5B%5D=type%3A%3Amaintenance&label_name%5B%5D=group%3A%3Ageo&milestone_title=15.6&amp;not%5Blabel_name%5D%5B%5D=maintenance%3A%3A%2a&first_page_size=20)
- [サブタイプラベルが欠けているバグ Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_asc&state=all&label_name%5B%5D=type%3A%3Abug&label_name%5B%5D=group%3A%3Ageo&milestone_title=15.6&amp;not%5Blabel_name%5D%5B%5D=bug%3A%3A%2a&first_page_size=20)

### その他のリソース

- Geo に関連する Issue は主に
[gitlab-ee Issue トラッカー](https://gitlab.com/gitlab-org/gitlab-ee/issues/?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=Geo)にあります
- [チャットチャンネル](https://gitlab.slack.com/archives/g_geo)：Issue トラッカーを使用するのが適切でないと思われる質問には `#g_geo`
チャットチャンネルを使用してください
- [Geo YouTube プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KoY_6FXXVgj7wPE9ZDS4cOw)
- [staging.gitlab.com 上の Geo](staging.html)

## プランニングとプロセス

私たちのプランニングとビルドプロセスは[プロセスページ](process.html)に記載されています。

## デモ

デモは録画され、Google Drive の「GitLab Recorded Videos --> Geo Demos」に保存される必要があります。
デモを録画した場合は、録画がそのフォルダに保存されることを確認してください。

## Geo 用語

[Geo 用語集](https://docs.gitlab.com/ee/administration/geo/glossary.html)を参照してください。
