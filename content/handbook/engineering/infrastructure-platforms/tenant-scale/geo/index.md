---
title: "Geo とディザスタリカバリ"
description: "Geo チームに関する情報"
upstream_path: "/handbook/engineering/infrastructure-platforms/tenant-scale/geo/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

## Geo チーム

[Geo](https://docs.gitlab.com/ee/administration/geo/index.html) は [Premium](https://about.gitlab.com/pricing/premium/) 機能であり、分散チームの開発を加速するために、プライマリ GitLab インスタンスの 1 つまたは複数の読み取り専用ミラーを提供するように構築されています。このミラー（Geo セカンダリノード）は、大規模なリポジトリやプロジェクトの clone またはフェッチにかかる時間を削減するか、ディザスタリカバリソリューションの一部として機能します。

### チームメンバー


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/tenant-scale/geo/#the-geo-team" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### 安定したカウンターパート


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/tenant-scale/geo/#the-geo-team" rel="external noopener">原文 (英語)</a> を参照してください。</p>


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

サポートリクエストを提出する前に、Geo の[ドキュメント](https://docs.gitlab.com/ee/administration/geo/)、[ディザスタリカバリ](https://docs.gitlab.com/ee/administration/geo/disaster_recovery/)ドキュメント、[バックアップとリストア](https://docs.gitlab.com/ee/administration/backup_restore/)ドキュメント、Geo ハンドブックページを確認するか、[Geo Customers プロジェクト](https://gitlab.com/gitlab-com/geo-customers)の以前のお客様 Issue を検索してください。質問への回答がそこで見つかる可能性があります。**RFH を提出する前に、まず Geo サポート Pod チャンネル `#spd_pod_geo` にお問い合わせください。**

### 一般的な質問をする

回答が見つからない一般的な質問がある場合は、Slack の [#g_geo](https://gitlab.slack.com/archives/C32LCGC1H) チャンネルで気軽に質問してください。エンジニアは可能な限りサポートし、頭の中から質問に答えるよう最善を尽くします。より多くの調査が必要な場合や、より複雑なシナリオに対処する必要がある場合は、サポート Issue を作成する必要があります（次のセクションを参照）。

### サポートリクエスト Issue を作成する

お客様が Geo チームの支援を必要とする場合、Issue の使用を好みます。これにより、作業を優先順位付けし、Slack の保存ポリシーが適用された際に履歴を失わずコンテキストを維持することができます。リクエスターには [Geo Customers プロジェクト](https://gitlab.com/gitlab-com/geo-customers)で Issue を作成するようお願いしています。

Geo 関連の質問には [Geo サポートリクエスト Issue テンプレート](https://gitlab.com/gitlab-com/geo-customers/-/blob/master/.gitlab/issue_templates/Support%20Request%20-%20Geo.md)を、バックアップとリストア機能エリアに関連する Issue には [バックアップとリストアサポートリクエスト Issue テンプレート](https://gitlab.com/gitlab-com/geo-customers/-/blob/master/.gitlab/issue_templates/Support%20Request%20-%20Backup%20and%20Restore.md)を必ず使用して記入してください。リクエスターは「お客様情報」と「サポートの質問」セクション**のみ**を記入する必要があります。

[コラボレーションテンプレート](https://gitlab.com/gitlab-com/geo-customers/-/issues/new?issuable_template=Support%20Request%20-%20Collaboration)を除き、RFH はサポートチケットが開かれた後にサポートエンジニアが開く必要があります。

[コラボレーションテンプレート](https://gitlab.com/gitlab-com/geo-customers/-/issues/new?issuable_template=Support%20Request%20-%20Collaboration)は、EM/PM/エンジニア側からのリクエストなど、コールへの参加リクエストに使用されます。

**最低限、Zendesk のリンクとログは特に重要です。それらが欠けている場合、Issue は通常のトリアージプロセスに入りません。Issue に 2 週間更新がない場合、EM/PM/担当者によって自動的にクローズされます。**

また、RFH Issue のトリアージプロセスがあります。詳細は[プロセス](/handbook/engineering/infrastructure-platforms/tenant-scale/geo/process/#engineering-customersupport-rotation-process)を参照してください。

リクエストに優先度ラベルを割り当てることができます。Geo チームメンバーまたは PM が Issue のトリアージ中にこの優先度の割り当てを確認します。優先度レベルと期待される応答時間の参考として以下のテーブルを使用してください。

| 優先度 | 通常の使用シナリオ | 期待される最初の応答時間 |
| ---      | ---   |  ------  |
| P4          | Geo エンジニアが頭の中から答えられず、もう少し調査が必要な一般的な質問 | 2〜3 日 |
| P3          | 時間的に緊急でない（つまり、簡単な回避策がある）お客様の問題、または将来的にお客様が目標を達成するための関与スケジュール | 1 日 |
| P2          | 時間的にやや緊急で、お客様側での決定や進捗を妨げているお客様の問題 | 半日 |
| P1          | お客様が経験している緊急事態 | 1〜2 時間 |

\* 応答時間は平日（祝日を除く）のチームメンバーが所在するタイムゾーンの通常業務時間内を基準としています。

\* 停止やその他の緊急事態は GitLab の[インシデント管理](/handbook/engineering/infrastructure-platforms/incident-management/)プロセスを通じて対処すべきです。

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
