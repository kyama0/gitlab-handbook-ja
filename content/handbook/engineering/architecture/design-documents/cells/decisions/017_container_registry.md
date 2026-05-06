---
owning-stage: "~devops::tenant scale"
title: "Cells ADR 017: コンテナレジストリルーティングサービス"
status: accepted
creation-date: "2025-07-29"
authors: [ "@ayufan" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/017_container_registry/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">accepted</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ayufan" class="text-blue-600 hover:underline">@ayufan</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::tenant scale</span></td>
<td class="px-3 py-2 border border-gray-300">2025-07-29</td>
</tr>
</tbody>
</table>
</div>


## コンテキスト

GitLab コンテナレジストリは Cells アーキテクチャ内で動作する必要があります。このアーキテクチャでは、プロジェクトとリポジトリが複数の Cell に分散されています。HTTP Router はプロジェクトのオーナーシップに基づいてリクエストを正しい Cell にルーティングしながら、Docker クライアントとの互換性を維持し、Cell をまたいだパブリックリポジトリへのアクセスを可能にする必要があります。

## 決定事項

1. **HTTP Router の分離デプロイ**: コンテナレジストリはメイン GitLab Rails HTTP Router（`gitlab.com`）とは別に、専用の HTTP Router デプロイ（`registry.gitlab.com`）を使用します。

2. **パスベースのルーティング**: レジストリのリクエストは、URL から抽出されたプロジェクトパス（`/v2/{project_path}/...`）および JWT 認証スコープ（`repository:{project_path}:actions`）に基づいてルーティングされます。

3. **ターゲットベースの分類**: Topology Service はターゲットベースの分類（`web` と `registry`）をサポートし、サービスごとに適切な Cell アドレスを返します。

4. **JWT トークンの拡張**: GitLab Rails は生成された JWT トークンに `organization_id` を含めることで、トークン検証リクエスト（`/v2/` エンドポイント）を正しい Cell にルーティングできるようにします。

5. **パブリックリポジトリへのアクセス**: プロジェクトパスに基づいた JWT 認証ルーティングにより、ユーザーの認証情報がターゲット Cell で有効でない場合でも、Cell をまたいでパブリックリポジトリへアクセスできます。

6. **レガシー Cell へのフォールバック**: 未分類のリクエスト（`/v2/_catalog` など）は、`FIRST_CELL` 分類タイプを使用して最初の Cell にルーティングされます。

## メリット

1. **サービスの分離**: 専用の HTTP Router により条件付きルーティングの複雑さがなくなり、不要なルール処理を回避してパフォーマンスが向上します。

2. **Cell をまたいだパブリックアクセス**: ユーザーはホスティング Cell の場所を知らなくても、どの Cell からでもパブリックコンテナリポジトリにアクセスできます。

3. **Docker 互換性**: 既存の Docker クライアントワークフローと認証フローとの完全な互換性を維持します。

4. **Cell への変更が最小限**: GitLab Rails やコンテナレジストリコンポーネントへの変更が不要（または最小限）で、すべてのルーティングの複雑さは HTTP Router が処理します。

5. **スケーラブルなアーキテクチャ**: 各サービスが独自のルールセットを維持し、独立してスケールできます。

6. **フォールト分離**: 各 Cell 内でコンテナレジストリを実行することでフォールト分離が実現されます。ある Cell が利用不可になっても、その Cell でホストされているリポジトリにのみ影響し、他の Cell は通常通りリポジトリを提供し続けます。

## デメリット

1. **JWT スコープへの依存**: ルーティングは JWT リクエストの最初のリポジトリスコープに依存しており、Docker Registry の仕様がスコープの順序を定義していないため、問題が生じる可能性があります。

2. **Cell をまたいだ制約**: Cell をまたいだリポジトリのリンクやブロブのマウントは機能しないため、Docker の一部の高度な機能が制限されます。ただし、GitLab の使われ方を考慮すると、これは許容できるトレードオフです。

3. **追加のインフラストラクチャ**: 別の HTTP Router のデプロイと保守が必要です。

## 実装要件

### HTTP Router の変更

- 分類リクエストにおける `target` パラメーターのサポート
- 複数の分類マッチを順次処理
- コンテナレジストリ用の別ルールセット（`container_registry.json`）

### Topology Service の更新

- `target` フィールドを持つ拡張 `ClassifyRequest` インターフェース
- `FIRST_CELL` 分類タイプのサポート
- Cell ごとのレジストリ固有のアドレス設定

### GitLab Rails の変更

- ルーティング用に JWT トークンに `organization_id` を含める
- Cell 固有のレジストリエンドポイントのための最小限の設定変更

### 代替ソリューション

最初のスコープへの依存が問題となる場合、代替の JWT ルーティングアプローチには以下があります：

1. クエリパラメーターアプローチ：`/jwt/auth?cell_id=X`（推奨）
2. パスプレフィックスアプローチ：`/c/cell-id/jwt/auth`
3. パスサフィックスアプローチ：`/jwt/auth/cell/cell_id`

## 関連ドキュメント

- [コンテナレジストリルーティングサービス設計ドキュメント](../container_registry_routing_service.md)
- [GitLab Cells インフラストラクチャアーキテクチャ](../infrastructure/index.md)
- [HTTP Router 設定](https://gitlab.com/gitlab-org/cells/http-router/-/blob/main/docs/config.md)
- [HTTP Router ルールセット](https://gitlab.com/gitlab-org/cells/http-router/-/tree/main/config/ruleset)
- [Topology Service 実装](https://gitlab.com/gitlab-org/cells/topology-service)
- [コンテナレジストリ認証リクエストフロー](https://gitlab.com/gitlab-org/container-registry/-/blob/master/docs/auth-request-flow.md)
