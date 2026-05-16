---
owning-stage: "~devops::verify"
title: 'GitLab Steps ADR 001: Bootstrap Step Runner'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_steps/decisions/001_initial_support/
upstream_sha: 9e852ac812142230dfe1e1db31be2862cd857cfd
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-11-28T17:21:29-08:00"
---

## コンテキスト

[GitLab Steps](../index.md) は GitLab での事前使用実績のない新機能です。
このプロジェクトのステージでは 2 つの重要な目的があると判断しました:

- [実験](https://docs.gitlab.com/ee/policy/development_stages_support.html#experiment)フェーズの一環としてユーザー評価のために既存の CI パイプラインにプロジェクトを統合する。
- 貢献ガイドラインを含むプロジェクトの形式で他の開発者向けの貢献フレームワークを提供する。

## 決定

以下の目的を達成するために [GitLab Steps: Iteration 1: Bootstrap Step Runner (MVC)](https://gitlab.com/groups/gitlab-org/-/epics/11736) が作成されました:

- プロジェクトをブートストラップするための初期計画を定義しました。
- プロジェクトは [`gitlab-org/step-runner`](https://gitlab.com/gitlab-org/step-runner) に保存されます。
- [ステップ定義](../step-definition.md)を [Protocol Buffer](https://protobuf.dev/) として実装します。初期実装は [Baseline Step Proto](../implementation.md) に記載されています。
- [Protocol Buffers](https://protobuf.dev/) の使用により、プロジェクトで使用される最小限の必須定義に対して強力なガードが提供されます。
- 既存の CI パイプラインで GitLab Steps を使用する方法についてのドキュメントを提供します。

## 代替案

GitLab ではこのタイプの機能に対する既存の作業がなかったため、このフェーズでは代替案は検討されませんでした。
