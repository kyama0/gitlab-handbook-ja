---
title: "参考資料"
status: proposed
creation-date: "2023-06-21"
authors: [ "@fabiopitino" ]
coach: [ ]
approvers: [ ]
owning-stage: ""
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/modular_monolith/references/
upstream_sha: 7970b7fb241c268e1af118c106ab79642da33ed0
translated_at: "2026-04-27T13:58:39Z"
translator: claude
stale: false
lastmod: "2025-02-06T10:19:40+00:00"
---

## 関連するデザインドキュメント

- [Composable Codebase デザインドキュメント](../composable_codebase_using_rails_engines/index.md)

## 関連 Issue

- [GitLab モノリスをコンポーネントに分割する](https://gitlab.com/gitlab-org/gitlab/-/issues/365293)
- [「分離されたサービス」のビルドと使用を簡単にする](https://gitlab.com/gitlab-org/gitlab/-/issues/31121)
- [ネストした構造を使用して CI クラスを整理する](https://gitlab.com/gitlab-org/gitlab/-/issues/209745)
- [モジュール/名前空間内に新しいモデル/クラスを作成する](https://gitlab.com/gitlab-org/gitlab/-/issues/212156)
- [チームが自分のコードのメンテナーになる](https://gitlab.com/gitlab-org/gitlab/-/issues/25872)
- [バックエンドの依存性注入ガイドを追加する](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/73644)

## 社内 Slack チャンネル

- [`#modular_monolith`](https://gitlab.slack.com/archives/C03NTK6HZBM)
- [`#architecture`](https://gitlab.slack.com/archives/CJ4DB7517)

## プレゼンテーション

- [The Myth of the Modular Monolith（モジュラーモノリスの神話）](https://youtu.be/olxoNDBp6Rg?feature=shared) - Rails 2024 Keynote by Eileen Uchitelle

## リファレンス実装/ガイド

Gusto / RubyAtScale:

- [モジュール化のための RubyAtScale ツールチェーン](https://github.com/rubyatscale)
- [Gusto のエンジニアリングブログ](https://engineering.gusto.com/laying-the-cultural-and-technical-foundation-for-big-rails-6b5ab78349ed)
- [段階的なモジュール化](https://gradualmodularization.com/)（CBRA の後継）
- [コンポーネントベースの Rails アプリケーション](https://cbra.info)（「非推奨」）

Shopify:

- [Packwerk](https://github.com/Shopify/packwerk)
- [Shopify のモジュール化への旅](https://shopify.engineering/shopify-monolith)
- [Shopify エンジニアとの AMA の GitLab 社内ドキュメント転記](https://docs.google.com/document/d/1uZbcaK8Aqs-D_n7_uQ5XE295r5UWDJEBwA6g5bTjcwc/edit#heading=h.d1tml5rlzrpa)

ドメイン駆動 Rails / Rails Event Store:

Rails Event Store は、ここで議論されている多くの目標を達成するためのメカニズムとして関連性があります。Arkency がプロダクション用アプリケーションを構築するために使用するパターンに基づいています。

これは、この特定のフレームワークやアプローチを使用する必要があることを意味するわけではありません。

ただし、DDD/ES/CQRS の一般的な概念は重要であり、このブループリントの目標を達成するためにある程度必要である場合があります。そのため、これらの概念の具体的なプロダクション実証済みの実装を参考として見ることは有益です。

- [Arkency のドメイン駆動 Rails](https://products.arkency.com/domain-driven-rails/)
- [Arkency の Rails Event Store](https://railseventstore.org)

App Continuum:

アプリケーションが小さな非構造化アプリから、モジュラーで良く構造化されたモノリスを含む様々な段階を経て、マイクロサービスアーキテクチャに至るまでどのように進化できるかのイラストレーション。

各段階で止まる理由の議論と、特にマイクロサービスへの移行の課題/懸念、そして多くの場合において良く構造化されたモノリスに留まることが望ましい理由も含んでいます。

- [App Continuum](https://www.appcontinuum.io)
