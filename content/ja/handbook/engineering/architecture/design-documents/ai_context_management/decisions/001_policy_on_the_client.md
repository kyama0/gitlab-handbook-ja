---
title: 'AI コンテキスト管理 ADR 001: AI Context Policy Management を AI Context Retriever の近くに配置する'
owning-stage: "~devops::ai-powered"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/ai_context_management/decisions/001_policy_on_the_client/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## 概要

AI Context を効果的に管理し、柔軟でスケーラブルなソリューションを実現するために、AI Context Policy Management は AI Context Retriever と同じ環境、つまりコンテキスト取得メカニズムにできるだけ近い場所に配置されます。このアプローチは、レイテンシを削減し、AI システムに送信される文脈情報に対するユーザーの制御を改善することを目的としています。

## コンテキスト

元のブループリントは、セキュリティと信頼の懸念に対処しつつ、正確で関連性の高い AI 応答を提供するために、柔軟な AI Context Management システムが必要であることを示しました。そして、AI Context Policy Management は、AI Context Retriever 内のコンテキストリゾルバーとコンテキストフェッチャーの間でフィルタリングを行うソリューションとして機能すべきだと提案しました。しかし、ブループリントはシステム内における AI Context Policy Management の正確な配置場所までは規定していませんでした。

[同期的な議論](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/155707#note_1978675445) において、AI Context Policy Management を AI Context Retriever の近くに配置することが大きなメリットをもたらすと判断されました。この決定は、AI Gateway や Duo Chat UI のような共有コンポーネントを持って、異なる環境間で一貫性を確保し冗長性を削減するという私たちのアプローチと整合しています。

## 決定事項

AI Context Management は、ユーザーが Duo 機能と対話する場所のできるだけ近くで行われます。その結果、[AI Gateway](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist) はポリシーに準拠したコンテキストのみを受信することになります。

ユーザーは、IDE や GitLab Web UI など、さまざまな環境で Duo 機能と対話します。この環境からコンテキストを取得して AI Context Policy に基づくフィルタリングのために AI Gateway に送信するのではなく、本決定では AI Context Retriever がこのコンテンツを AI Gateway に到達する*前に*フィルタリングすることを定めます。

この決定により、セキュリティ、柔軟性、スケーラビリティが向上し、動的なユーザーインタラクションとコンテキスト検証に関する即時のフィードバックが可能になります。

## 結果

- *実装の複雑性*: ユーザーは Duo 機能を利用する各環境で、コンテキストポリシーの作成・変更・削除を行う必要があります。これは、異なる環境をサポートするために複数の実装を必要とします。
- *柔軟性とスケーラビリティ*: AI Context Policy Management を AI Context Retriever の近くに保存することで、IDE や Web などの特定の環境に合わせた、より柔軟でスケーラブルなポリシー実装が可能になります。
- *レイテンシの削減*: 不要なコンテキストをできるだけ早い段階でフィルタリングすることで、レイテンシが削減され、必要な情報のみが AI モデルに送信されることが保証されます。
- *ユーザーエクスペリエンス*: このアプローチは動的な UX を促進し、コンテキスト検証に失敗した場合にユーザーに即時フィードバックを提供します。ユーザーは使いやすいインターフェイスを通じて補足コンテキストをより効果的に管理できます。
- *セキュリティ*: ポリシーをコンテンツ取得メカニズムの近くで管理することで、機密情報をローカルでフィルタリングでき、セキュリティとユーザーの信頼が向上します。
