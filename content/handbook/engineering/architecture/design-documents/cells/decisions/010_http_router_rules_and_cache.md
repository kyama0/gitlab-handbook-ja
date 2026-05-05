---
owning-stage: "~devops::data stores"
title: 'Cells ADR 010: HTTP Router は静的ルールと HTTP ベースのキャッシュ機構を使用する'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/010_http_router_rules_and_cache/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

## コンテキスト

HTTP Router は Cells アーキテクチャの重要な構成要素です。ルールの定義とキャッシュの使用方法は、設計において混乱を招く部分でした。この変更によりその動作を明確にします。

## 決定事項

- HTTP Router はプロジェクトまたはルーターのデプロイメントの一部である静的ルールのみを使用します。
- ルールは JSON で記述されます。
- ルールは `passthrough`（固定アドレスまたは設定からのアドレスを使用）または `classify`（Topology Service を使用）として定義できます。
- `classify` リクエストは `json` レスポンスの代わりに HTTP ヘッダーを使用してキャッシュ動作を制御します。
- HTTP ヘッダーの使用は [Cloudflare Workers - Cache](https://developers.cloudflare.com/workers/runtime-apis/cache/) が期待するキャッシュ動作と互換性があります。

## 結果

- 異なるバージョンを実行している可能性のある多くの別々の Cell からのルーティングルールをどのようにマージするか、およびそれに伴うすべての複雑さ（[note](https://gitlab.com/gitlab-org/gitlab/-/issues/439667#note_1952380955)）を解決する必要がなくなるため、HTTP Router の設計が簡素化されます。
- HTTP キャッシュ制御ヘッダーの使用により、Cloudflare Workers とのシームレスな連携が可能になります。
- ルールのマージや代替キャッシュ管理方法が必要になった場合でも、この簡素化は将来の設計改善と互換性があります。

## 代替案

- これは元の設計の簡素化であるため、代替案は検討されていません。
