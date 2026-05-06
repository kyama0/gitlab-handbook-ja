---
title: "Artifact Registry ADR 002: ストレージ重複排除のスコープ"
owning-stage: "~devops::package"
description: "ストレージ重複排除をインスタンス全体ではなく個別の Organization にスコープする決定"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/002_storage_deduplication_scope/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## 背景

コンテンツアドレッサブルストレージ（[ADR-008](008_content_addressable_storage.md) を参照）は、同一コンテンツを重複排除します。私たちは重複排除のレベル（インスタンス全体、Organization、トップレベルグループ、リポジトリ）を選択する必要があります。

この選択は次に影響します。

- **コスト按分**: 選択されたレベルでストレージをどれだけ容易に計算・請求できるか
- **パフォーマンス**: ガベージコレクションとクエリの複雑さ
- **セキュリティ**: 共有 Blob が境界をまたいで情報を漏らすかどうか
- **運用**: ディザスタリカバリ、バックアップ、境界をまたぐ調整

### 現状

コンテナレジストリはインスタンス全体の重複排除を使用しており、[運用上の問題](https://gitlab.com/gitlab-org/container-registry/-/issues/1242)を抱えています。

- コスト計算のためのクロスパーティションクエリ
- クロスネームスペース依存関係によりブロックされるガベージコレクション
- 特定の Organization にストレージコストを按分するのが困難

パッケージレジストリには重複排除がありません。

### 分析

3 つの境界（インスタンス全体、トップレベルグループ、リポジトリ）を評価しました。

注: この分析は、トップレベルグループがオブジェクトストレージ重複排除のレベルとして検討されていたときに実施されました。それ以降、選択された[アンカーレベルは Organizations](001_organizations_as_anchor_point.md) になりました。したがって、重複排除は Organizations にスコープされます。

**コンテナレジストリ**（[分析](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/17524#note_3023542021)）:

| 重複排除スコープ | 総ストレージ | インスタンス全体に対するオーバーヘッド |
| ------------------- | ------------- | ------------------------- |
| インスタンス全体 | 13 PB | ベースライン |
| トップレベルグループ | 13.5 PB | +4% (+530 TB) |
| リポジトリ | ~17 PB | +36% (~4 PB) |

少なくとも約 95% の Blob は、ちょうど 1 つのトップレベルグループに現れます。複数のグループにまたがるのはわずか約 5% です。トップレベルグループの重複排除は、インスタンス全体に比べてわずか 4% のストレージオーバーヘッドを追加するだけですが、リポジトリレベルでは大きな利益を失います（+36%）。

**Maven パッケージレジストリ**（[分析](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/17524#note_3023014429)）:

| 重複排除スコープ | ストレージ削減（重複排除の利益） |
| ------------------- | --------------------------------------- |
| インスタンス全体 | 3.68% |
| トップレベルグループ | 3.62% |
| リポジトリ | 2.11% |

トップレベルグループの重複排除は、インスタンス全体とほぼ同じ利益を捉えています（3.62% vs 3.68%）。差はわずか 0.06 ポイントです。リポジトリレベルでは利益のほぼ半分を失います（2.11% vs 3.68%）。

**Maven 仮想レジストリ**（[分析](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/17524#note_3027109326)）:

| メトリック | 値 |
| ------ | ----- |
| 分析されたキャッシュエントリ | 161,832 |
| キャッシュストレージ | 約 44 GB |
| パッケージレジストリと重複（同じグループ） | 約 8-9% |

仮想レジストリのキャッシュエントリの約 92% は、同じグループのパッケージレジストリには見つからない外部依存関係です。これは、仮想レジストリがすでにローカルに保存されているコンテンツではなく、主にアップストリームコンテンツをキャッシュしていることを確認します。Maven 仮想レジストリはベータ版で採用が限定的であるため、これらの数字は信頼度が低めです。

**結論**: ご覧のとおり、トップレベルグループスコープは重複排除の利益のほぼすべてを捉えます（コンテナで 96%+、Maven で 98%+）が、グループをまたぐ複雑さは回避できます。わずかな追加ストレージオーバーヘッドは、よりシンプルな運用、明確なコスト按分、セキュリティ分離のための受け入れ可能なトレードオフです。Organization レベルのスコープはインスタンス全体に近く、最もストレージ効率の良い重複排除を提供します。

## 決定

**重複排除を個別の Organization にスコープします。**

Organization 内の同一コンテンツ（同じ SHA256 ハッシュ）は 1 度保存されます。異なる Organization にまたがる同一コンテンツは、それぞれに別々に保存されます。

これは、すべてのアーティファクトタイプ（Docker イメージ、Maven パッケージ、npm モジュール）とすべてのコンテンツ（コンテナレイヤー、パッケージファイル、バイナリ Blob）に適用されます。

## 結果

### ポジティブ

1. **明確なコスト按分**: Organization ごとに Blob サイズを合算します。クロスレベル計算は不要です。
2. **公平な顧客請求**: 顧客は一意な Blob ごとに 1 回支払います。
3. **予測可能なパフォーマンス**: 操作（クエリ、GC、バックアップ）は 1 つの Organization 内に留まります。クロスレベル依存関係はありません。
4. **セキュリティ分離**: Organization は他の Organization の Blob を参照できません。情報漏洩はありません。
5. **シンプルなガベージコレクション**: GC は 1 つの Organization 内のみで参照を確認します。クロスレベル調整はありません。
6. **自己完結したディザスタリカバリ**: 他に手を触れずに 1 つの Organization を復元できます。
7. **独立したスケーリング**: 各 Organization はストレージを独立してスケールします。
8. **プラットフォーム間で最適な重複排除レベル**: GitLab.com は Organizations を使用します。Dedicated と Self-Managed は単一の Organization 下で運用されるため、事実上インスタンスレベルの重複排除になります。

### ネガティブ

1. **Organization 間の重複**: 人気のあるコンテンツ（ベースイメージ、パブリックパッケージ）が各 Organization に別々に保存されます。
2. **インスタンス全体ストレージの増加**: Organization スコープはインスタンス全体に対してオーバーヘッドを追加します。これは、ストレージが顧客に請求されるため追加の純コストには *変換されません*。
3. **リポジトリレベルより広いスコープ**: ストレージ使用量はリポジトリ間で重複排除された Blob を追跡する必要があります。GC はすべてのリポジトリにまたがって動作し、共有 Blob 上の並行操作を処理する必要があります。

## 代替案

### 代替案 1: インスタンス全体重複排除

どの Organization がアップロードしたかにかかわらず、インスタンス全体スコープで同一コンテンツを 1 度保存します。

**長所:**

- 全体ストレージコストが最小
- オブジェクトストレージ内の物理オブジェクト数が少ない

**短所:**

- **コスト按分には Organization をまたぐアルゴリズムが必要**: 各 Organization の使用量を計算するには、すべての Organization にわたる参照カウントが必要
- **GC は Organization 間の調整が必要**: コンテンツの削除には、残りの参照を確認するためにすべての Organization をチェックする必要がある
- **境界のないクエリスコープ**: 操作がパーティション間に予測不能にカスケードする可能性がある
- **情報漏洩リスク**: 共有参照が他の Organization が使用するコンテンツを明らかにする
- **ディザスタリカバリが Organization を結合**: 1 つの Organization の復元には他からのコンテンツが必要になる可能性がある
- **最初のアップローダーが他者を補助**: 人気のあるコンテンツを最初にアップロードした Organization が、全員のために支払う

**却下理由:**

- 分析によると、トップレベルグループスコープに対して低い 1 桁の節約しかない（コンテナ約 4%、Maven ははるかに小さい）
- コンテナレジストリのインスタンス全体アプローチは [運用上高コスト](https://gitlab.com/gitlab-org/container-registry/-/issues/1242) であることが判明
- Organization 間の Blob 共有によるセキュリティリスク

### 代替案 2: トップレベルグループ重複排除

**長所:**

- インスタンスレベルに対して合理的なオーバーヘッド
- すでに GitLab で確立されたエンティティ

**短所:**

- Organization スコープに比べて **ストレージ増加**
- Organization レベルに必要な **集計使用量メトリクス**
- 機能の[アンカーレベル](001_organizations_as_anchor_point.md)（Organization）と **自然にマッピングしない**

**却下理由:**

- Organization レベルスコープと比較して節約の損失の可能性
- 重複排除スコープを Organization レベルで動作する他の機能と混合することによる認知的複雑さ
- スケールでの集計メトリクスの課題。[ネームスペース統計の過去の経験](https://gitlab.com/groups/gitlab-org/-/work_items/8627)

### 代替案 3: リポジトリスコープ重複排除

単一のリポジトリ内のみで重複排除します。

**長所:**

- 最強の分離（リポジトリ間参照なし）
- 最もシンプルな GC とコスト按分

**短所:**

- トップレベルグループスコープに対して **約 36% のストレージ増加**
- **不公平な顧客請求**: 顧客はリポジトリ間で同一コンテンツに対して複数回請求される

**却下理由:**

- 分析によると、リポジトリスコープでは大幅な節約損失
- 同じ Blob に対して顧客に繰り返し請求することはおそらく受け入れられない
- Organization スコープがコスト・利益のバランスをより良く提供する

## 実装ノート

1. SHA256 ハッシュを使用したコンテンツアドレッサブルストレージ（[ADR-008](008_content_addressable_storage.md) を参照）
2. 個別の Organization にスコープされた参照トラッキング
3. コスト計算: Organization ごとに Blob サイズを合算

## 参考文献

- [Container Registry Deduplication Analysis](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/17524#note_3023542021)
- [Maven Package Registry Deduplication Analysis](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/17524#note_3023014429)
- [Maven Virtual Registry Cache Analysis](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/17524#note_3027109326)
- [ADR-008: Content-Addressable Storage](008_content_addressable_storage.md)
- [Container Registry Deduplication Complexity](https://gitlab.com/gitlab-org/container-registry/-/issues/1242)
