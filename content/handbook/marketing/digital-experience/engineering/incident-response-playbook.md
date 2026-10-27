---
title: "インシデント対応マトリクス"
description: "マーケティングサイトで発生する可能性のあるインシデントへのガイド"
upstream_path: /handbook/marketing/digital-experience/engineering/incident-response-playbook/
upstream_sha: 84ebb9fc88e6a42116737a8dbf279ac21828660f
translated_at: "2026-10-27T21:09:41.005052+00:00"
translator: claude
stale: false
lastmod: "2026-10-26T17:06:50-07:00"
---

## 概要 {#overview}

このページでは、GitLab のマーケティングサイトで発生するインシデントについて説明し、重大度を評価する方法とサポートを得るための手段を概説します。

まず、私たちのマーケティングサイトは複数のプロジェクトから成る多様な構成であることを理解しておく必要があります。すべてのデプロイ先は同じ GCP バケットですが、ウェブサイトの生成には異なる技術を使用しています。

1. マーケティングサイトは、[www](https://gitlab.com/gitlab-com/www-gitlab-com)、[navigation](https://gitlab.com/gitlab-com/marketing/digital-experience/navigation)、[slippers](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui)、そして主に [about.gitlab.com](https://gitlab.com/gitlab-com/marketing/digital-experience/about-gitlab-com)という複数のリポジトリで構成されています。

1. www-gitlab-com と about.gitlab.com は、ビルド中にページを生成し、それらのアーティファクトを 1 つの GCP バケットにアップロードします。パイプラインの実行時に、すべてのアーティファクトを GCP バケット上の `/public` ディレクトリ内にまとめます。

### このインシデントはどのレベルですか？ {#what-level-is-this-incident}

インシデントの重大度を判断する際は、次の点を検討します。

1. マーケティングサイトの停止による影響はどの程度ですか？
1. 進行中のインシデントがないか、Slack の #digital-experience-team または #dex-alerts チャンネルを確認しましたか？
1. インシデントの影響範囲はどの程度ですか？影響を受ける人数だけでなく、次の点も考慮して評価することが重要です。
    -影響を受けるユーザーの総数。
    - 主要なステークホルダーの各カテゴリーに対する潜在的な影響。
    - 規模にかかわらず、重要な顧客やパートナーに影響するかどうか。
1. 影響を受ける人の中に、主要なオーディエンスやステークホルダーに対して影響力を持つ人はいますか？
1. インシデントは、私たちの中核的な事業運営に直接影響しますか？
1. 過去に同様のインシデントがありましたか？つまり、会社として繰り返し発生している問題ですか？
1. インシデントは、より広い業界の課題やトレンドと関連していますか？競合他社や他社も同様の問題に直面していますか？
1. [重要なビジネスページ](https://gitlab-com.gitlab.io/content-sites/handbook/mr5699/handbook/marketing/digital-experience/contentful-cms/#for-top-10-most-visitedimpactful-pages)に現在アクセスできますか？

## インシデントマトリクス {#incident-matrix}

<table class="table table-striped table-bordered">
<thead>
<tr>
<th style="background:red">レベル 1</th>
<th  style="background:yellow">レベル 2</th>
<th  style="background:pink">レベル 3</th>
</tr>
</thead>
<tbody>
<tr>
<td>高リスク</td>
<td>中リスク</td>
<td>低リスク</td>
</tr>
<tr>
<td>ミッションクリティカルなキー + 環境変数の漏洩</td>
<td>ミッションクリティカルなコンテンツや法的なコンテンツの誤り（例：不正確な価格、コンバージョン率の高いページでの重大な誤字や言い回しの誤り）</td>
<td>サイトの一部が欠落している（例：イベント、プレスリリース）</td>
</tr>
<tr>
<td>インフラストラクチャ（GCP + Contentful）に関連する主要ベンダーの障害。</td>
<td>連携の障害（6sense、GA など）</td>
<td>パフォーマンスの問題</td>
</tr>
<tr>
<td>ミッションクリティカルなページが欠落している（例：ホームページの不在、メインナビゲーション）</td>
<td>重大なパフォーマンスの問題</td>
<td></td>
</tr>
<tr>
<td>下記の<a href="#reporting-an-incident">インシデント報告</a>を参照してください。</td>
<td>Issue を作成し、Slack の #digital-experience チャンネルに投稿します</td>
<td>Issue を作成し、Slack の #digital-experience チャンネルに投稿します</td>
</tr>
</tbody>
</table>

## インシデント報告 {#reporting-an-incident}

現在、サイト停止の記録には、Issue の代わりに[インシデント](https://docs.gitlab.com/ee/operations/incident_management/incidents.html)を使用しています。インシデントは Issue と同じように動作し、停止の記録に適したテンプレートを使用できます。この方法により、サイトの信頼性をより詳しく把握し、プロジェクト全体でダウンタイムの追跡と解決を確実に行えます。

**担当者：** [Chris Fraser](https://gitlab.enterprise.slack.com/team/U0803EXMHE3)、Engineering Manager、EST 午前 9 時 30 分 - 午後 5 時 30 分

1. Slack の #digital-experience チャンネルに投稿し、@digital-experience をタグ付けします。
1. 5 分以内に応答がない場合は、次の人にテキストメッセージまたは電話で連絡してください。
    1. 東部時間帯（UTC−5）。
        1. [Laura Duggan](https://gitlab.enterprise.slack.com/archives/D01H18BBUTW)
    2. 中部時間帯（UTC−6）。
        1. [Megan Filo](https://gitlab.enterprise.slack.com/archives/D02SNEUHZ3L)
    3. 太平洋時間帯（UTC−8）。
        1. [Javier Garcia](https://gitlab.enterprise.slack.com/team/U014QDEP73L)
1. DEX のチームメンバーが、該当プロジェクトでインシデントを作成します。たとえば、about.gitlab.com プロジェクトの停止は[こちら](https://gitlab.com/gitlab-com/marketing/digital-experience/about-gitlab-com/-/issues/new?type=ISSUE)で作成します。注：停止について Issue を作成する場合は、常に**代わりにインシデントを作成**してください。レポートとメトリクスに影響するため、必ず適切なプロジェクトでインシデントを作成します。原則として、[トリアージプロセスを迂回](/handbook/marketing/digital-experience/#labels-and-workflow-boards)し、既存のオープンな Issue がなく、サイトの稼働時間に影響がある場合は、インシデントを作成します。
    1. 必要に応じて、Severity と[タイムラインイベント](https://docs.gitlab.com/ee/operations/incident_management/incident_timeline_events.html)を記入することを検討します。
    1. インシデントが解決したら、インシデントをクローズできます。これが停止の解決時間メトリクスに影響します（Time to Resolve = インシデントのクローズ時刻 - インシデントの作成時刻）。

_15 分以内に応答がない場合は電話で連絡してください_

## PagerDuty {#pagerduty}

緊急時には、Digital Experience Engineers は PagerDuty のインシデントを作成し、互いのモバイルデバイスでアラートを発報できます。PagerDuty にアクセスできる GitLab のチームメンバー（IT Security、Reliability、SIRT など）も、これらの PagerDuty インシデントを発報できます。

Digital Experience チーム向けの PagerDuty インシデントを発報するには、次の手順に従います。

1. Slack の任意の場所で `/pd trigger` と入力して、インシデントを報告します。
2. 影響を受けるサービスとして `about.gitlab.com` を選択します。
3. priority、description、Urgency の各フィールドを記入します。
4. これによりインシデントが作成され、PagerDuty に通知して Digital Experience チームのメンバーへのアラートを発報します。
5. PagerDuty は、チームメンバーと連絡が取れるまでエスカレーションを続けます。
