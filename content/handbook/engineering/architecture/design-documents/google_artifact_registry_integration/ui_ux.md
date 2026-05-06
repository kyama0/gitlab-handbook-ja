---
stage: package
group: container registry
title: 'Google Artifact Registry インテグレーションの UI/UX'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/google_artifact_registry_integration/ui_ux/
upstream_sha: 33ef35e4327874fd4153c5606125f5de47ff7924
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

## 構造と整理

GitLab コンテナレジストリ（したがって Docker Registry や OCI Distribution）とは異なり、GAR はタグをリポジトリ内の主要な「アーティファクト」として扱いません。代わりに、主要な「アーティファクト」はイメージマニフェストです。各マニフェストオブジェクト（[`DockerImage`](https://cloud.google.com/artifact-registry/docs/reference/rpc/google.devtools.artifactregistry.v1#google.devtools.artifactregistry.v1.DockerImage) で表される）には、割り当てられたタグのリスト（存在する場合）があります。そのため、GAR API を通じてリポジトリの内容を一覧表示すると、レスポンスはタグオブジェクトのコレクションではなく、マニフェストオブジェクト（およびプロパティとしての関連タグ）のコレクションになります。また、この設計上の選択により、タグなしのマニフェストもレスポンスに含まれます。

柔軟性、拡張性を最大化し、GAR ユーザーにとっての親しみやすさを維持するため、GitLab UI にデータを表示する際は GAR API のデータ構造を完全に採用する予定です。GitLab コンテナレジストリですでに持っている UI/UX に合わせて「タグの一覧」レスポンスをエミュレートしようとはしません。

上記を踏まえ、設定された GAR リポジトリ内のすべてのイメージのページング可能かつソート可能な一覧を提供するビューがあります。さらに、単一のイメージに関する詳細情報を表示するための詳細ビューもあります。利用可能なイメージ属性の一覧は[こちら](https://cloud.google.com/artifact-registry/docs/reference/rpc/google.devtools.artifactregistry.v1#google.devtools.artifactregistry.v1.DockerImage)に記載されています。

## デザイン
