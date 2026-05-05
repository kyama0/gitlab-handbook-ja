---
title: "Production Engineering Runners Platform チーム"
description: "信頼性が高くスケーラブルな CI/CD ランナーインフラを実現するプラットフォームシステムと運用インターフェースを提供します"
upstream_path: "/handbook/engineering/infrastructure-platforms/production-engineering/runners-platform/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T02:44:36Z"
translator: claude
stale: false
---

## ミッション

Runners Platform チームは、すべての GitLab プラットフォームにわたって完全に運用可能で管理・維持しやすいランナー提供を開発・維持する責任を担っています。GitLab.com のホステッドランナー、Dedicated のホステッドランナーを含む GitLab のランナーインフラの中核技術に焦点を当てながら、[Cells](/handbook/engineering/architecture/design-documents/cells/infrastructure/runner/) アーキテクチャとの互換性を確保します。

私たちのミッションは、信頼性が高くスケーラブルな CI/CD 実行を可能にする適切な管理インターフェースとコントロールを備えた運用基盤を提供し、円滑な運用と製品ローンチの成功に必要な機能を提供するために Runners アプリケーションチームと緊密に協力することです。

## ビジョン

**「SaaS プラットフォームのための単一の Runner プラットフォーム」**

GitLab.com と GitLab Dedicated にわたって一貫した信頼性の高いパフォーマンスを提供する統合された堅牢なランナープラットフォームを実現します。私たちのプラットフォームは GitLab の拡大する CI/CD 需要をサポートするために必要な運用上の卓越性を提供しながら、コスト効率の高いスケーリングと包括的なオブザーバビリティを実現します。私たちは運用上のサイロを排除し、製品チームがユーザー向けの機能に集中できる一方で、基盤となるインフラが本番準備完了・スケーラブル・維持可能な状態であることを確保するための基盤を構築することを目指しています。

## 所有権と責任

Runners Platform チームは以下に注力します。

1. GitLab ホステッドランナーインフラの管理とスケーリングのためのシステムの構築
2. ランナーのパフォーマンスとリソース使用率を最適化するシステムの構築
3. ランナーサービスの信頼性と可用性を向上させるプラットフォームレベルの改善の構築
4. ランナー機能が運用要件と本番準備要件を満たすことを確保するための製品チームとの協力
5. ランナーの管理とモニタリングのためのツールと自動化の開発

## コラボレーションモデル

私たちは Verify:Runners チームと緊密なパートナーシップのもとで作業します。

- **Runners Platform チーム**は管理インターフェースとインフラの基盤を提供します
- **Verify:Runners チーム**は製品の提供内容に焦点を当て、プラットフォーム機能をどのように活用するかを決定します
- 両チームが協力して機能が安定・信頼性・本番準備完了の状態であることを確保します

## サポートの受け方

`#g_runners_platform` でご連絡ください。

## 作業方法

Production Engineering 内の新しいチームとして、現在ワークフローとプロセスを確立しています。チームの発展に合わせてこのページを継続的に更新していきます。

## 共通リンク

- Slack チャンネル: [#g_runners_platform](https://gitlab.slack.com/archives/g_runners_platform)
