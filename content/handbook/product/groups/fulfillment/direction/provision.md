---
title: "Fulfillment: Provision の方向性"
description: "Provision グループが所有するプランプロビジョニングのカテゴリに関する戦略ページ。"
upstream_path: /handbook/product/groups/fulfillment/direction/provision/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

## ミッション

Provision グループのミッションは、お客様が GitLab のサブスクリプション、アドオン、トライアルにアクセスする際にシームレスな体験を提供することです。同時に、データドリブンな洞察のための重要なライセンス配布および使用状況データを社内チームに提供します。

## 機能の概要と成熟度

_Provision グループはどのような機能を担当し、それらはどの程度成熟しているか?_

**凡例**:

- 🙂 **Minimal**: 限られたユースケースで利用可能。社内チーム向けの一定の透明性あり。
- 😊 **Viable**: ほとんどのユースケースで利用可能。社内チーム向けの一定の透明性あり。
- 😁 **Complete**: 適格なすべてのユースケースで完全に機能。社内チーム向けの完全な透明性あり。
- 😍 **Lovable**: 外部および社内のユーザーから絶賛されている。

| 機能 | 成熟度 | 説明 |
|----------|:--------:|-------------|
| Self Managed: Cloud Licensing | 😍 Lovable | オンラインクラウドライセンスを通じたライセンス生成、機能プロビジョニング、カスタマーエクスペリエンス。 |
| Self Managed: Offline Licensing | 😊 Viable | オフラインクラウドライセンスを通じたライセンス生成、機能プロビジョニング、カスタマーエクスペリエンス。 |
| Self Managed: Legacy Licensing | 😊 Viable | レガシーライセンスを通じたライセンス生成、機能プロビジョニング、カスタマーエクスペリエンス。 |
| Self Managed: Trial Provisioning | 🙂 Minimal | Self Managed Ultimate トライアル向けのライセンス生成、機能プロビジョニング、カスタマーエクスペリエンス。 |
| GitLab.com: Subscription Provisioning | 😊 Viable | クラウドライセンスを通じた機能プロビジョニング、グループとサブスクリプションのリンク、カスタマーエクスペリエンス。  |
| GitLab.com: Trial Provisioning | 😁 Viable | GitLab.com グループへのトライアルプロビジョニング。 |

## 1 年計画

## チームのフォーカスエリア

### FY25 のトッププライオリティ

今後 12 か月にわたって、Provision チームには 3 つの主要な目標があります:

1. 新しいメインプラン製品の提供をサポートする
1. トライアルの提供範囲と体験を拡張する
1. プロビジョニングプロセスを合理化する

#### 新しいメインプラン製品の提供をサポート

今年の Provision の主要なフォーカスエリアの 1 つは、新しいメインサブスクリプション製品および機能のリリースのサポートです。私たちは、GitLab.com、GitLab Dedicated、自己管理型インスタンスのお客様に機能が正確にプロビジョニングされることを支援しています。

#### トライアル提供の拡張と改善

FY24 では、[GitLab.com Premium のお客様が既存のネームスペースおよびワークフロー内で Ultimate 機能をトライアル](https://gitlab.com/groups/gitlab-org/-/epics/9549) できる機能をローンチしました。今年はこの体験を引き続き拡張していきます。その後、以下を行うことで自己管理型のトライアルを拡張する予定です:

1. [Self Managed Ultimate トライアルをクラウドライセンスへ移行する](https://gitlab.com/groups/gitlab-org/-/epics/12173)
1. [お客様のインスタンスから Self Managed トライアルを開始できるようにする](https://gitlab.com/groups/gitlab-org/-/epics/13819)

### プロビジョニングプロセスの合理化

機能プロジェクトに加えて、私たちはプロビジョニングプロセスを可能な限り合理化・効率化するために絶えずイテレーションを行っています。FY25 では、[将来のプロビジョニングアーキテクチャの定義](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/7912) に取り組み、GitLab.com、自己管理型、GitLab Dedicated のプロビジョニングを整合させるための設計図を作成する予定です。

1 年計画に挙げたトップイニシアチブに加えて、注力する追加領域がいくつかあります。今後および進行中のプロジェクトの包括的なリストについては、[GitLab Epic Roadmap](https://gitlab.com/groups/gitlab-org/-/roadmap?state=all&sort=START_DATE_ASC&layout=MONTHS&timeframe_range_type=CURRENT_YEAR&label_name[]=Fulfillment+Roadmap&label_name[]=group::provision&label_name[]=Category:Plan+Provisioning&progress=COUNT&show_progress=true&show_milestones=false&milestones_type=GROUP&show_labels=false) をご確認ください。社内限定の Epic は表示されない点にご注意ください。
