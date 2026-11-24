---
title: "Geo とディザスタリカバリ"
description: "Geo チームに関する情報"
upstream_path: "/handbook/engineering/infrastructure-platforms/tenant-scale/geo/"
upstream_sha: "be228760349beb5ac063e32579ee6507e09f8b6e"
translated_at: "2026-11-24T21:09:35+00:00"
translator: claude
stale: false
lastmod: "2026-11-24T16:05:47+11:00"
---

## Geo チーム

[Geo](https://docs.gitlab.com/ee/administration/geo/index.html) は [Premium](https://about.gitlab.com/pricing/premium/) 機能であり、分散チームの開発を加速するために、プライマリ GitLab インスタンスの 1 つまたは複数の読み取り専用ミラーを提供するように構築されています。このミラー（Geo セカンダリノード）は、大規模なリポジトリやプロジェクトの clone またはフェッチにかかる時間を削減するか、ディザスタリカバリソリューションの一部として機能します。

### チームメンバー

{{< team-by-manager-slug manager="thiagofigueiro" department="Geo Team" >}}

### Stable Counterparts

{{< engineering/stable-counterparts role="Geo" manager="thiagofigueiro" >}}

## 目標と優先事項

私たちの優先事項はプロダクトの方向性と整合しています。現在および今後の作業は、[オープンな `group::geo` エピック](https://gitlab.com/groups/gitlab-org/-/epics/?state=opened&label_name%5B%5D=group%3A%3Ageo)で確認できます。

これらの優先事項に加えて、お客様から寄せられる Issue を常に評価する必要があります。これらはバグレポートや機能リクエストの形を取ることがあります。Geo のユーザーは多くの場合、私たちの最大のお客様であり、Geo をワークフローの重要な部分として利用している方もいます。

また、ハウスキーピング作業を管理可能なレベルに保つために常に取り組んでいます。可能な限り、関連するプロジェクトの一部としてこれらの Issue に対処します。それが不可能な場合は、プロジェクト間の時間を使ってこれを実現します。

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

### お客様対応とサポートのローテーション {#customer-and-support-rotation}

マイルストーンごとに、Geo エンジニア 1 人がカスタマーサポートの Primary DRI、別の 1 人が Secondary DRI を担当します。現在および今後の担当者は、進行中の計画エピックの [Customer/Support Rotation セクション](https://gitlab.com/groups/gitlab-org/geo-team/-/work_items/3#customersupport-rotation)で確認できます。現在の DRI には `@gitlab-org/geo-team/rotation` で連絡できます。

Primary DRI は担当マイルストーンの間、[支援依頼のバックログ](https://gitlab.com/gitlab-com/request-for-help/-/issues/?sort=created_date&state=opened&label_name%5B%5D=Help%20group%3A%3AGeo&first_page_size=100)と [#g_geo](https://gitlab.enterprise.slack.com/archives/C32LCGC1H) のサポートに関する質問に対応します。依頼をチームの通常のワークフローに載せられるように、トリアージ、Issue の作成、初期調査の記録、優先度ラベルの追加を行います。Secondary DRI は Primary DRI を補佐し、Primary DRI が対応できない場合は引き継ぎます。

DRI は担当マイルストーンの開始時に [`@gitlab-org/geo-team/rotation` のメンバー構成](https://gitlab.com/groups/gitlab-org/geo-team/rotation/-/group_members?with_inherited_permissions=exclude)を更新します。終了時には、[ローテーションを追跡する Issue](https://gitlab.com/gitlab-org/geo-team/discussions/-/issues/5170)か、支援依頼に直接、引き継ぎ事項を記載します。

### Dedicated Migrations の週末のカットオーバー対応 {#weekend-cutover-coverage-for-dedicated-migrations}

Geo には週末のオンコールローテーションがなく、チームの規模が小さいため設けられません。週末の [Dedicated Migrations](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/dedicated-migrations/) のカットオーバーでは、有志のエンジニアが可能な範囲で対応します。対応できるエンジニアがいるとは限りません。

対応を依頼するには、次の手順に従ってください。

1. カットオーバーの日付がわかり次第、遅くとも実施の 1 週間前までに [#g_dedicated-geo-for-self-managed](https://gitlab.enterprise.slack.com/archives/C0BE87JC6CW) に投稿してください。Geo チームに対応できる人を募ってください。
1. お客様、テナント、カットオーバーの開始時刻と終了時刻（UTC）、期待するサポートの内容、Dedicated Migrations の Issue へのリンクを記載してください。

対応できる Geo エンジニアは、対応可能な時間帯をスレッドに返信します。参加は任意です。Geo の Engineering Manager が担当者と対応時間帯を確定し、その内容をスレッドで共有します。有志のエンジニアには、担当時間帯に Slack で連絡できます。PagerDuty のローテーションはありません。

Migrations チームは、対応するエンジニアを自チームの案件 Issue に記録します。

対応したエンジニアは翌週に代休を取得します。[Incident Manager 向けの週末と休日のガイダンス](/handbook/engineering/infrastructure-platforms/incident-management/incident-manager-onboarding/#what-if-i-work-a-shift-on-a-weekend-or-holiday)に、取得する代休の長さと記録方法が記載されています。

対応できる人がいない場合、Geo の Engineering Manager がその旨をスレッドで伝えます。対応を前提とせず、Geo と Migrations の Engineering Manager が別の計画を立てます。

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
