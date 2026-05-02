---
title: "ダイレクトメール"
description: "アカウント中心のキャンペーンを含む、マーケティングキャンペーンの戦術として用いられるダイレクトメールプログラムの概要。"
twitter_image: '/images/tweets/handbook-marketing.png'
twitter_site: "@gitlab"
twitter_creator: "@gitlab"
upstream_path: /handbook/marketing/demand-generation/campaigns/direct-mail/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
---

## 概要

このページでは、アカウント中心のキャンペーンを含むマーケティングキャンペーンの戦術として用いられるダイレクトメールに焦点を当てます。

コンテンツシンジケーションキャンペーンの実施に関心がある場合は、デマンドジェネレーションチームにご連絡ください。フィールドマーケティングの方は、[このページ](/handbook/marketing/field-marketing/field-marketing-epics/#content-syndication)でフィールドマーケティングのエピック詳細をご確認ください。

### GitLab でダイレクトメールを企画するプロセス

プロジェクトオーナーは以下の手順に従って、GitLab 上でエピックと関連 Issue を作成する責任を負います。

1. プロジェクトオーナーがメインの戦術 Issue を作成する
1. プロジェクトオーナーが関連 Issue をすべて格納するためのエピックを作成する（コードは下記）
1. プロジェクトオーナーが必要となる関連 Issue を作成する（エピックコード内のショートカットリンク参照）
1. プロジェクトオーナーが新規作成したエピックと元の Issue に、関連するすべての Issue を紐づける
1. プロジェクトオーナーが各タスクについて、チーム間で合意された SLA に基づいて各 Issue の期日を設定し、各 Issue のオーナーシップが正確であることを確認する

*注: ダイレクトメールの日付が変更となった場合は、プロジェクトオーナーが関連するすべての Issue の期日を新しい日付に合わせて変更し、関係するチームメンバーに通知する責任があります。*

### ダイレクトメール用エピックのコード

```markdown
<--- Name this epic using the following format, then delete this line: Direct Mail - [Vendor] - [3-letter Month] [Date], [Year] --->

## [Main Issue >>]()

## [Copy for landing page and emails >>]() - template: https://docs.google.com/document/d/1j43mf7Lsq2AXoNwiygGAr_laiFzmokNCfMHi7KNLjuA/edit

## :notepad_spiral: Key Details
* **Project Owner:**
* **Coordinator:**
* **Type:** Direct Mail
* **Campaign Tag:**
* **Sales Segment (choose primary):** `Large, Mid-Market, or SMB`
* **Sales Region (choose one):** `AMER, EMEA, APAC`
* **Sales Territory (optional, if specific):**
* **Goal:** `Please be specific on the metric this is meant to impact.`
* **Budget:**
* **Launch Date:**  [MM-DD-YYYY] (this is the date of the first email, everything is in place to execute on this date)
* [ ] [main salesforce program]()
* [ ] [main marketo campaign]()
* [ ] Campaign UTM - FM to fill in (Format: campaign tag - change to all lowercase, no spaces, hyphens, underscores, or special characters)

## User Experience
[Tactic owner to provide a description of the user journey - from communication plan, to what the user experiences upon reciept, plus triggers on our end like confirmation email and how GitLab fulfils with the vendor, up until receipt by the user and answering whether or not we get confirmation that they received it... what is the anticipated journey after that?]

## Additional description and notes about the tactic
[Tactic owner add whatever additional notes are relevant here]

## Issue creation

* [ ] [Program Tracking](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-program-tracking)
* [ ] [List clean and upload issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=event-clean-upload-list)
* [ ] [Follow up email issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-email-followup)
* [ ] [Add to nurture issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-add-nurture)

/label ~"Direct Mail" ~"mktg-status::wip"
```
