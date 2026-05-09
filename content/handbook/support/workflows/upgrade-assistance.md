---
title: アップグレードアシスタンスのワークフロー
description: "お客様にアップグレードアシスタンスを提供する際のサポートチーム向けワークフロー"
category: Self-managed
subcategory: Upgrade Assistance
upstream_path: /handbook/support/workflows/upgrade-assistance/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T04:02:00Z"
translator: claude
stale: false
---

### 概要

[Priority Support](https://about.gitlab.com/support/#priority-support) の一部として、
GitLab Support は [Upgrade Assistance](https://about.gitlab.com/support/scheduling-upgrade-assistance/) を提供しています。
具体的には、アップグレードおよびロールバック計画をレビューし、お客様にフィードバックや提案を提供することで、
スムーズなアップグレードを支援します。お客様は、最終確認の質問や全体計画の最終レビューを行うために、
サポートエンジニアとの 30 分間の通話を依頼することもできます。

アップグレードアシスタンスに加えて、本番アップグレードの前に GitLab Support がお客様のアップグレード計画が
正確で、かつ GitLab で完全にサポートされる内容であることを確認することも重要です。

お客様が計画を提供していない、または支援に必要な詳細が不足している場合は、計画を依頼して構いません。
[アップグレードを計画するお客様向けのガイダンス](https://docs.gitlab.com/update/plan_your_upgrade/) を用意しています。

#### プロセスの開始

1. リクエストを起こすエンドユーザーは、Support for Self managed Instance フォームで問題種別を「Upgrade Assistance Request」に設定して新しいサポート依頼を作成するか、対象ユーザーであれば各サポートポータルの [US Government Upgrade Planning Assistance Request](https://federal-support.gitlab.com/hc/en-ushc/en-us/requests/new?ticket_form_id=360001434131) フォームで作成します。これによりインスタンスに高優先度のチケットが作成されます。
1. トリアージを行うエンジニアは、チケットを自分にアサインしてください。
1. チケットの担当者は、組織に CSM が付いているかを確認し、付いている場合はその CSM を CC またはフォロワーとしてチケットに追加します。
1. ユーザーが提供する情報には、[必要な情報](https://about.gitlab.com/support/scheduling-upgrade-assistance/#what-information-do-i-need-to-schedule-upgrade-assistance) がすべて含まれている必要があります。
    - 情報に欠落・不足・誤りがある場合、チケット担当者は不足点を指摘し、ユーザーがそれを補正するうえで参考となる情報を提供します。
    - チケット担当者は、不足情報を依頼するために Zendesk の `Upgrade Request Missing Info` マクロを使うこともできます。
1. （任意）必要な情報が揃ったら、担当者は [Skills by Subject](http://gitlab-com.gitlab.io/support/team-pages/skills-by-subject.html?search=Upgrade) ページで `Upgrade` または `Upgrade Assistance` をフォーカスとしているメンバーに声をかけ、ペアでの作業や非同期での知見共有を依頼できます。
1. 任意の 30 分間の最終レビュー通話をお客様が希望する場合は、お客様が GitLab インスタンスのアップグレードを予定している日の少なくとも 2〜3 日前に 30 分間のミーティング用のパーソナル使い切り Calendly リンクを送付します。
    - レビュー担当エンジニアがチケットを引き継ぐ必要がある場合、適切な引き継ぎを担保するために、最終レビューを担当するエンジニアと **必ず** 同期してください。
1. お客様がアップグレードのスケジュールを確定したら、チケット担当者はお客様からアップグレードが正常に完了したと確認が得られるまで、チケットを `on-hold` 状態にしておきます。

#### 予定されているアップグレードの延期を推奨することはできるか？

これは起こり得ます。特にアップグレード計画が不十分な場合や、本番ダウンタイムを引き起こす可能性が高い場合などです。
変更内容のテスト時間を確保し、スムーズなアップグレードを担保できるよう、ユーザーにウィンドウの再スケジュールを促すべきです。
