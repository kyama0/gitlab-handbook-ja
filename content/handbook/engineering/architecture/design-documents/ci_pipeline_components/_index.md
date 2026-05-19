---
title: "CI/CD カタログ"
status: implemented
creation-date: "2022-09-14"
authors: [ "@ayufan", "@fabiopitino", "@grzesiek" ]
coach: [ "@ayufan", "@grzesiek" ]
approvers: [ "@dhershkovitch", "@marknuzzo" ]
owning-stage: "~devops::verify"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/ci_pipeline_components/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T10:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---


{{< engineering/design-document-header >}}


## 概要

CI/CD パイプラインコンポーネントカタログの目的は、パイプライン設定の再利用をより簡単かつ効率的にすることです。パイプライン構成要素の発見、理解、再利用方法の習得を支援することで、より合理化されたエクスペリエンスを提供します。CI/CD パイプラインコンポーネントカタログは、ユーザーがパイプライン構成要素でコラボレーションするためのフレームワークを提供し、それらを継続的に進化・改善できるようにします。

この設計ドキュメントは、CI/CD パイプラインコンポーネントのカタログを構築するためのアーキテクチャガイドラインを定義するものでした。実装が完了したため、以下に公式ユーザードキュメントへのリンクとドキュメントの過去の内容を記載しています。

この機能の詳細については、[CI/CD コンポーネントのドキュメント](https://docs.gitlab.com/ee/ci/components/index.html)をご覧ください。

ブループリントファイルのアーカイブバージョンは[こちら](https://gitlab.com/gitlab-org/gitlab/-/blob/a22b7be24f372feec596bcf71ebaf07ea0df40cf/doc/architecture/blueprints/ci_pipeline_components/index.md)から参照できます。

## 担当者

アーキテクチャ設計:

<!-- vale gitlab.Spelling = NO -->

| 役割                           | 担当者 |
|--------------------------------|--------|
| 著者                           | Fabio Pitino |
| エンジニアリングリーダー       | Cheryl Li, Mark Nuzzo |
| プロダクトマネージャー         | Dov Hershkovitch |
| アーキテクチャ進化コーチ       | Kamil Trzciński, Grzegorz Bizon |

DRI:

| 役割        | 担当者 |
|-------------|--------|
| プロダクト  | Dov Hershkovitch |
| エンジニアリング | Avielle Wolfe, Laura Montemayor |
| UX          | Sunjung Park |

<!-- vale gitlab.Spelling = YES -->
