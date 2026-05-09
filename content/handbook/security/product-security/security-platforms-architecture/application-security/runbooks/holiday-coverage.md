---
title: "AppSec の祝日および Friends and Family Day のカバレッジ"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/runbooks/holiday-coverage/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

このランブックでは、Application Security チームのメンバーが、祝日、Friends and Family Day、その他多くのチームメンバーがオフィス外にいることが想定されるイベント中に対応可能な場合のプロセスについて説明します。

Application Security はオンコール体制ではないため、私たちはベストエフォートのカバレッジを提供することを目指しており、これはすべての地域で利用可能であるとは限りません。

サポートが必要な場合:

- 詳細とともに `#sec-appsec-team-only` に投稿してください
- カバレッジを提供している AppSec エンジニアを見つけてください - 以下の[カバレッジの周知](#communicating-the-coverage)を参照
- Slack の `@` メンションでチームメンバーに連絡してください
- 緊急の場合、またはチームメンバーがタイムリーに応答しない場合は、Slack プロフィールに記載されている連絡設定を確認した上で、テキストメッセージや電話で連絡してください
- 誰がカバレッジを提供しているか不明な場合は、Slack で `@appsec-team` にピンを送ってください

## カバレッジ担当者への期待事項 {#expectations-for-those-doing-coverage}

- AppSec が S1 インシデントへの対応や、他のチームへの緊急サポートが必要な場合、カバレッジを提供しているチームメンバーは Slack または電話で連絡可能であること
- カバレッジを提供している AppSec チームメンバーは、キーボードに張り付いて働き続けることは期待されていませんが、必要に応じて1時間以内にオンラインになれること
- カバレッジ時間中に積極的に働いていない場合でも、ピンを確認するために Slack をときどきチェックするようにしてください
- HackerOne を経由して入ってくる潜在的な S1 を時折確認し、即時対応が必要な場合はアクションを取ってください
- S1 インシデントが発生したり、他のチームから AppSec の支援が緊急に必要となった場合、AppSec チームメンバーは状況をトリアージし、必要に応じてセキュリティマネージャーにエスカレーションすることが期待されます

## 計画 {#planning}

祝日や Friends and Family Day が近づいてきた場合、AppSec チームは休暇日を交換できるチームメンバーを見つけるよう試みるべきです。理想的には各地域でチームメンバーが対応可能であることが望ましいですが、必須ではありません。

[Rotation Management](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/rotation-management) Issue トラッカーを使用して、カバレッジを割り当て・調整してください。

## カバレッジの周知 {#communicating-the-coverage}

AppSec の[トリアージローテーション](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/triage-rotation/)ハンドブックページには、ローテーションと割り当てに関する情報があります。

AppSec チームは、誰が対応可能か、いつ対応可能か、AppSec の支援が緊急に必要な場合の連絡方法に関する情報を `#security_help` に Slack メッセージとして投稿します。

カバレッジを提供している各 AppSec チームメンバーは、Slack プロフィールに携帯電話番号を記載しています。

インシデントが発生した場合、["S1/P1 の処理手順"](/handbook/security/product-security/psirt/runbooks/handling-s1p1/)に従い、その中で次の AppSec エンジニアへの引き継ぎが行われます。
