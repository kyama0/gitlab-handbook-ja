---
title: "インシデント対応マトリクス"
description: "Marketing サイトで発生する可能性のあるインシデントへのガイド"
upstream_path: /handbook/marketing/digital-experience/engineering/incident-response-playbook/
upstream_sha: 2d678e92f3fbc59843a2973bbfa95041c6aef07f
translated_at: "2026-05-01T10:36:34Z"
translator: claude
stale: false
---

## 概要

このページでは、GitLab Marketing サイトで発生するインシデントに関するインサイトを提供し、深刻度レベルを評価する方法を示し、サポートを得るための手段を概説します。

最初に、私たちのマーケティングサイトは複数のプロジェクトで構成されているという多様な構成について理解しておくことが重要です。すべてのデプロイは同じ GCP バケットへ収束しますが、ウェブサイト生成にはさまざまな技術が使用されています。

1. Marketing サイトは複数のリポジトリで構成されています: [www](https://gitlab.com/gitlab-com/www-gitlab-com)、[navigation](https://gitlab.com/gitlab-com/marketing/digital-experience/navigation)、[slippers](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui)、そして主に [about.gitlab.com](https://gitlab.com/gitlab-com/marketing/digital-experience/about-gitlab-com)。

1. www-gitlab-com と about.gitlab.com はビルドプロセス中にページを生成し、これらのアーティファクトを単一の GCP バケットへアップロードします。パイプライン実行時に、すべてのアーティファクトは私たちの GCP バケットの `/public` ディレクトリ内に統合されます。

### このインシデントはどのレベルですか？

インシデントの深刻度を判断する際に考慮すべき質問は次のとおりです:

1. Marketing サイトの停止の影響レベルはどれくらいですか？
1. 進行中のインシデントについて、Slack の #digital-experience-team または #dex-alerts チャンネルをモニタリングしましたか？
1. インシデントはどれくらい広範囲ですか？影響を受ける個人の数を超えて、次のことを考慮しながら評価することが極めて重要です:
    -影響を受けるユーザーの総数。
    - 私たちの主要ステークホルダーの様々なカテゴリーへの潜在的な影響。
    - 規模に関係なく、インシデントが重要な顧客やパートナーに影響を与えるかどうか。
1. 影響を受ける個人の中に、私たちの主要なオーディエンスやステークホルダーの中で影響力のある人はいますか？
1. インシデントは私たちのコアビジネス運営に直接影響を与えますか？
1. 過去に同様のインシデントに遭遇したことがありますか？要するに、これは会社にとって繰り返し発生する問題ですか？
1. インシデントは業界全体の課題やトレンドと関連していますか？競合他社や他社が同様の問題に直面していますか？
1. [重要なビジネスページ](https://gitlab-com.gitlab.io/content-sites/handbook/mr5699/handbook/marketing/digital-experience/contentful-cms/#for-top-10-most-visitedimpactful-pages) は現在アクセス可能ですか？

## インシデントマトリクス

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
<td>ミッションクリティカル / 法的なコンテンツの誤り（例: 不正確な価格、コンバージョン率の高いページでの大幅な誤字や言い回しの誤り）</td>
<td>サイトの一部が見当たらない（例: events、press releases）</td>
</tr>
<tr>
<td>インフラ（GCP + Contentful）に関連する主要ベンダーの障害。</td>
<td>連携障害（6sense、GA など）</td>
<td>パフォーマンス問題</td>
</tr>
<tr>
<td>ミッションクリティカルなページが見当たらない（例: ホームページの不在、プライマリーナビゲーション）</td>
<td>重大なパフォーマンス問題</td>
<td></td>
</tr>
<tr>
<td>下記の <a href="#reporting-an-incident">インシデント報告</a> を参照してください。</td>
<td>Issue を作成し、#digital-experience Slack チャンネルへ投稿</td>
<td>Issue を作成し、#digital-experience Slack チャンネルへ投稿</td>
</tr>
</tbody>
</table>

## インシデント報告

サイト停止のドキュメント化には、Issue ではなく [インシデント](https://docs.gitlab.com/ee/operations/incident_management/incidents.html) を使用するようになりました。インシデントは Issue と同様に動作し、停止のドキュメント化に合わせたテンプレートを使用できます。この方法は、私たちのサイトの信頼性についてより深いインサイトを提供し、プロジェクト全体でダウンタイムイベントの追跡と解決を保証します。

**ポイントパーソン:** [Nathan Dubord](https://gitlab.enterprise.slack.com/archives/D021YDB4FM4) - 勤務時間: 午前 9 時～午後 6 時 Eastern

1. #digital-experience Slack チャンネルへ投稿し、@digital-experience をメンションします。
1. 5 分以内に応答がない場合、次の人にテキストまたは電話してください:
    1. Eastern Timezone（UTC−5）:
        1. [Nathan Dubord](https://gitlab.enterprise.slack.com/archives/D021YDB4FM4)
        2. [Laura Duggan](https://gitlab.enterprise.slack.com/archives/D01H18BBUTW)
    2. Central Timezone（UTC−6）:
        1. [Megan Filo](https://gitlab.enterprise.slack.com/archives/D02SNEUHZ3L)
    3. Pacific Timezone（UTC−8）:
        1. [Javier Garcia](https://gitlab.enterprise.slack.com/team/U014QDEP73L)
1. インシデントは DEX チームメンバーがプロジェクトに基づいて作成します。例えば、about.gitlab.com プロジェクトでの停止は[こちら](https://gitlab.com/gitlab-com/marketing/digital-experience/about-gitlab-com/-/issues/new?type=ISSUE) で作成します。注: 停止のために Issue を作成するときは、必ず **代わりにインシデントを作成** してください。レポートとメトリクスに影響するため、必ず適切なプロジェクトでインシデントを開いてください。一般的なルールとして、[トリアージプロセスを回避](/handbook/marketing/digital-experience/#labels-and-workflow-boards)し、既存のオープン Issue が存在せず、サイトの稼働率に影響がある場合に、インシデントを作成する必要があります。
    1. 適切な場合、Severity と[タイムラインイベント](https://docs.gitlab.com/ee/operations/incident_management/incident_timeline_events.html) を埋めることを検討してください。
    1. インシデントが解決した後、インシデントをクローズできます。これは私たちの停止解決時間メトリクス（Time to Resolve = インシデントがクローズされた時刻 - インシデントがオープンされた時刻）に影響を与えます。

_15 分以内に応答がない場合は電話で連絡してください_

## PagerDuty

緊急時には、Digital Experience エンジニアは PagerDuty インシデントを作成し、互いのモバイルデバイスでアラートをトリガーする能力を持っています。これらの PagerDuty インシデントは、PagerDuty へのアクセス権を持つ GitLab チームメンバー（IT Security、Reliability、SIRT など）からもトリガーできます。

Digital Experience チーム向けに PagerDuty インシデントをトリガーするには、次の手順に従います:

1. Slack のどこかで `/pd trigger` と入力してインシデントを報告します。
2. 影響を受けるサービスとして `about.gitlab.com` を選択します。
3. priority、description、Urgency のフィールドを完成させます。
4. これによりインシデントが作成され、PagerDuty が Digital Experience チームのメンバーへ通知します。
5. PagerDuty は、チームメンバーと連絡が取れるまで継続的にエスカレーションします。
