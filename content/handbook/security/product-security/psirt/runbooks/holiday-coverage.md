---
title: "PSIRT の祝日および Friends and Family Day カバレッジ"
upstream_path: /handbook/security/product-security/psirt/runbooks/holiday-coverage/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-06T19:27:57-05:00"
---

このランブックは、Product Security Incident Response Team が祝日・Friends and Family Day・その他多くのチームメンバーが不在となるイベント期間中に、対応可能なメンバーを確保するためのプロセスを説明します。

PSIRT はオンコール体制ではないため、地域ごとに必ずしもカバレッジを提供できるとは限らない、ベストエフォート方式での対応を目指します。

支援が必要な場合:

- `#security_help` に詳細を投稿する
- カバレッジを提供している PSIRT エンジニアを探す — 後述の[カバレッジの周知](#communicating-the-coverage)を参照
- Slack の `@` メンションでチームメンバーに連絡する
- 緊急の場合や、チームメンバーから適時に応答がない場合は、Slack プロフィールに記載されている連絡先設定を確認したうえで、テキストメッセージや電話で連絡する
- 誰がカバレッジを提供しているのか不明な場合は、Slack で `@psirt-team` にメンションする

## カバレッジを担当する人への期待事項

- PSIRT が S1 インシデントに対応する必要が生じた場合、または他チームの緊急支援が必要となった場合に、カバレッジを担当しているチームメンバーは Slack または電話で連絡が取れる状態であること
- カバレッジを担当している PSIRT チームメンバーは、キーボードに向かって作業している必要はありませんが、必要に応じて 1 時間以内にオンラインに復帰できる状態であること
- カバレッジ時間中に積極的に作業していない場合でも、ピンに備えて時々 Slack を確認するように努めること
- HackerOne 経由で来る可能性のある S1 を時々チェックし、即時対応が必要な場合はアクションを取ること
- S1 インシデントが発生した、または他チームから PSIRT への緊急支援要請があった場合、PSIRT チームメンバーは状況を切り分け、必要に応じてセキュリティマネージャーへエスカレーションすることが期待される

## 計画

祝日や Friends and Family Day が近づいた場合、PSIRT チームは休日を交代できるチームメンバーを探すように努めます。理想的には各地域に 1 名のチームメンバーが対応可能であることが望ましいですが、必須ではありません。

[Rotation Management](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/rotation-management) Issue トラッカーを使用してカバレッジを割り当て・調整してください。

## カバレッジの周知 {#communicating-the-coverage}

[HackerOne Triage Rotation](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/triage-rotation/) ハンドブックページに、ローテーションと割り当てに関する情報が記載されています。

PSIRT チームは `#security_help` に Slack メッセージを投稿し、誰がいつ対応可能か、PSIRT の緊急支援が必要な場合の連絡方法を周知します。可視性向上のため、`#security` および `#security-division` チャンネルにもクロスポストしてください。

カバレッジを提供する各 PSIRT チームメンバーは、Slack プロフィールに自分の携帯電話番号を記載しておきます。

インシデントが発生した場合は、["S1/P1 対応手順"](/handbook/security/product-security/psirt/runbooks/handling-s1p1/)に従ってください。次の PSIRT エンジニアへの引き継ぎも含まれます。
