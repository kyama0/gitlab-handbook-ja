---
title: "Runway チーム"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/runway/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

## ミッション

Runway チームは Runway プロダクトを構築・サポートします。このプロダクトは、チームがコードをステージングおよびプロダクション環境へ迅速・安全・効率的にデプロイできるようにすることを目的としています。

### オーナーシップ

チームは以下のエリアにオーナーシップを持ちます。

#### サービス

Runway チームは `Service::Runway` ラベルが付いた Issue を担当します。

[Runway にデプロイされているサービス](/handbook/engineering/infrastructure-platforms/tools/runway/#services-deployed-on-runway)については、Runway チームがプラットフォームの機能構築・プラットフォームの運用・サービスオーナーへのプラットフォーム保守を担当します。

#### Production Readiness Review

Runway チームは各種 subject matter expert と連携して [Production Readiness Review](/handbook/engineering/infrastructure-platforms/production/readiness.md) プロセスを担当します。Runway チームが PRR を所有する目的は、最終的にプロダクション対応基準をプラットフォームに直接組み込むことです。

#### CustomersDot

Runway チームは [CustomersDot](/handbook/support/license-and-renewals/workflows/customersdot/) のインフラサポートを担当します。Runway チームが運用サポートを所有する目的は、最終的に CustomersDot をプラットフォームへ移行すること（[epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1207)）です。

## サポートの依頼

Runway チームへのサポートが必要な場合は、[Infrastructure でのサポート依頼](/handbook/engineering/infrastructure-platforms/getting-assistance/#runway)を参照してください。

## チームメンバー


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/gitlab-delivery/runway/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 共通リンク

- [Runway トップレベル Epic](https://gitlab.com/groups/gitlab-com/gl-infra/platform/runway/-/epics/14)
- [#g_runway](https://gitlab.enterprise.slack.com/archives/C07UED5CGR2) - 作業・チーム関連のディスカッション。
- [#f_runway](https://gitlab.enterprise.slack.com/archives/C05G970PHSA) - 外部からのリクエスト、質問、サポート。

## 私たちの働き方

### プロジェクト管理

Runway チームは[トップレベル Epic を一つ持ち](https://gitlab.com/groups/gitlab-com/gl-infra/platform/runway/-/epics/14)、チームが取り組んでいるすべてのプロジェクトのサブ epic をリンクしています。
各サブ epic には完了日と週次ステータス更新の DRI が設定されています。
[ハンドブック](/handbook/engineering/infrastructure-platforms/project-management/)に記載された Platforms プロジェクト管理のプラクティスに従っています。[2024 年チームインパクトレビュー](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/-/issues/431)もご覧ください。

### Issue

Runway チームが実施する作業の Issue は [Runway チーム Issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/-/issues/)に登録されています。
例外として、Rails アプリケーションに関わる作業は [GitLab Rails Issue トラッカー](https://gitlab.com/gitlab-org/gitlab/-/issues)にオープンするようにしてください。
