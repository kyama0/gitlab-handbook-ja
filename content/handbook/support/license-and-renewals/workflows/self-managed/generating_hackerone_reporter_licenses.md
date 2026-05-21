---
title: HackerOne リポーター報奨ライセンスの生成
description: "HackerOne リポーター報奨受領者向けライセンスの生成方法"
category: GitLab Self-Managed licenses
upstream_path: /handbook/support/license-and-renewals/workflows/self-managed/generating_hackerone_reporter_licenses/
upstream_sha: 460f0fe6722bfe52b151b6a8641368ea38885df5
translated_at: "2026-05-08T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-04T15:06:42+02:00"
---

## 概要

GitLab の [HackerOne プログラムポリシー](https://gitlab.com/gitlab-com/gl-security/hackerone/configuration/-/blob/master/program-policy.md#L31-33)の一環として、3 件以上の有効な報告をプログラムに提出したリポーターは、最大 5 ユーザーに対応する 1 年間のセルフホスト Ultimate ライセンスを受け取る資格があります。リクエストは [Awarding Ultimate Licenses](/handbook/security/product-security/psirt/runbooks/hackerone-process#awarding-ultimate-licenses) ランブックに従って発生します。

HackerOne には企業レベルでトリアージチームがあり、GitLab はバグバウンティのトリアージと検証のためにそのチームを利用しています。HackerOne triage チームの作業を支援するため、年単位で 2 つの Ultimate ライセンスを発行しています。これらのライセンスは [HackerOne Triage Team GitLab licenses](/handbook/security/product-security/psirt/runbooks/hackerone-process/#hackerone-triage-team-gitlab-licenses) ランブックの一部として生成され、`analysts@managed.hackerone.com` および `analysts+1@managed.hackerone.com` に送信されます。ライセンス内容は年次で変わらないため、ワークフロー上、既存ライセンスを複製して使用できます。いずれかのライセンスを複製する際は、日付を翌年用に調整し、ノートをライセンスがリクエストされたチケットへのリンクに置き換えてください。手動で生成される他のレガシーライセンスと同様に、コンプライアンスと監査の目的で各ライセンスは独立したチケットでリクエストされる必要があります。

### リクエストへの対応

社内リクエストは[こちら](https://gitlab.zendesk.com/agent/tickets/293134)や[こちら](https://gitlab.zendesk.com/agent/tickets/293092)の例のような形式で届き、以下を含みます。

- 連絡先の名前（フルネーム、または HackerOne の「ハンドル」）
- 連絡先のメールアドレス（`@wearehackerone.com` で終わるもの）

この情報をもとに、[新規ライセンスの作成手順](/handbook/support/license-and-renewals/workflows/self-managed/creating_licenses#create-a-new-license)に従い、以下を確実に使用してください。

- Name: （連絡先のフルネームまたは HackerOne の「ハンドル」）
- Company: `H1 Reporter Award`
- Email: （連絡先のメールアドレス）
- Users count: `5`
- Plan: `Ultimate`
- Trial: `Yes`（チェックボックスにチェック）
- Starts at: （現在の日付）
- Expires at: （現在の日付の 1 年後）
- Notes: （社内リクエストチケットへのリンクを含めること）

完成したライセンスの例は[このライセンス](https://customers.gitlab.com/admin/license/1023421)を参照してください。

### リクエストへの返信

ライセンスを生成したら、CC に追加されているリクエスト元を含めて社内リクエストに公開返信を送り、ライセンスが生成されて指定のメールアドレスで連絡先に直接送付されたことを確認します。
