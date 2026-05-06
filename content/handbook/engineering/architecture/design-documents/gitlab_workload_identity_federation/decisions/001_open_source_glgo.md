---
title: 'GitLab WLIF: STS-001 GLGO のオープンソース化'
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/gitlab_workload_identity_federation/decisions/001_open_source_glgo/"
upstream_sha: "94fe412d61c1d75e0a7a0fe4b90222476478db38"
translated_at: "2026-04-27T11:51:33Z"
translator: claude
stale: false
---

## コンテキスト

私たちは GLGO を GitLab と Google Cloud Platform、AWS などのクラウドプロバイダー間の ID 変換レイヤーとして開発しました。現在、これを汎用的な GitLab Secure Token Service（STS）へと拡張する計画があります。このサービスは、ユーザーが GitLab API の認証に使用できるトークンを生成する責任を持ちます。

## 決定事項

私たちは GLGO をパーミッシブライセンスのオープンソースプロジェクトにすることを決定しました。

## 影響

GLGO をオープンソース化することで、コミュニティがコードを監査し、その開発に貢献できるようになります。

## 代替案

GLGO をクローズドソースプロジェクトとして維持した場合、GitLab の配布パッケージにおける可用性が制限されます。これにより、GitLab ワークロード ID フェデレーションおよび GLGO の可用性に依存する他のエンジニアリングプロジェクトの実現が妨げられる可能性があります。

この機能を GitLab Rails に直接組み込むことも考えられますが、認証データと署名マテリアルを GitLab モノリスの残りの部分から十分に分離することができません。
