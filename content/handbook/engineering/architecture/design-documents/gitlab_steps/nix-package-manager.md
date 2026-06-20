---
owning-stage: "~devops::verify"
title: "GitLab Steps 向け Nix Package Manager"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_steps/nix-package-manager/
upstream_sha: 18de125bd3131a62f0a7026bc69c7de124fc6c8a
lastmod: "2026-06-18T16:29:19-07:00"
translated_at: "2026-06-20T14:35:06Z"
translator: codex
stale: false
---

## GitLab Steps 向け Nix Package Manager

## 問題提起

CI/CD パイプラインは、依存関係管理に関する重大な課題に直面しています:

- **バージョン競合**: 異なるステップが互換性のないツールバージョンを必要とする
- **セットアップのオーバーヘッド**: 各ステップが依存関係のインストールに時間を浪費する
- **再現性の失敗**: 「自分のマシンでは動く」問題が残る
- **コンテナの肥大化**: Docker イメージがすべての依存関係をバンドルして巨大になる

## 解決策: Nix Package Manager 統合

GitLab Steps のコンパイルモデルを `nix:` キーワードで拡張します。これは標準セットアップステップへコンパイルされ、コンテナなしで再現可能な依存関係の分離を提供します。

## 仕組み

`nix:` キーワードは、2 つの連続した標準ステップへコンパイルされるシンタックスシュガーを提供します:

1. **セットアップステップ** が正確なパッケージバージョンを持つ分離された環境を作成する
2. **実行ステップ** がその環境内でユーザーコマンドを実行する
3. **環境変数** が出力を通じてステップ間で渡される

Docker コンテナとは異なり、Nix 統合はネイティブなファイルシステムアクセスを持つ通常のプロセスとして実行されます。これにより、ボリュームマウント設定なしで、ステップ間のビルドディレクトリの共有がシームレスになります。

**重要なポイント**: 「分離」は依存関係の分離（バージョン競合の防止）を指し、ファイルシステム分離ではありません。Steps は共有ディレクトリ、ビルド成果物、ワークスペースファイルに自然にアクセスします。

### コンパイル例

**ユーザーの記述:**

```yaml
spec:
  inputs:
    data_file: { type: string }
---
nix:
  packages: ["python311", "python311Packages.pandas"]
exec:
  command: ["python", "./analyze.py", "${{inputs.data_file}}"]
```

**コンパイル結果:**

```yaml
run:
  - name: setup_nix_environment
    step: gitlab.com/gitlab-org/runner-tools/nix@v1
    inputs:
      packages: ["python311", "python311Packages.pandas"]

  - name: execute_in_nix_env
    step: gitlab.com/gitlab-org/runner-tools/exec@v1
    inputs:
      command: ["python", "./analyze.py", "${{inputs.data_file}}"]
    env:
      PATH: "${{steps.setup_nix_environment.outputs.PATH}}"
      PYTHONPATH: "${{steps.setup_nix_environment.outputs.PYTHONPATH}}"
```

### 複数ステップのワークフロー例

```yaml
# Step 1: Build artifacts in shared directory
nix:
  packages: ["go"]
exec:
  command: ["go", "build", "-o", "./build/myapp"]

---

# Step 2: Test using same build directory (no volume mounting needed)
nix:
  packages: ["python311"]
exec:
  command: ["python", "./test_binary.py", "./build/myapp"]
```

## Docker に対するメリット

| 観点 | Nix 統合 | Docker |
|--------|-----------------|--------|
| **依存関係の分離** | Nix ストアパスによる正確なパッケージバージョン | OS 全体を含むコンテナレベル |
| **ファイルシステムアクセス** | ネイティブ（ホストファイルシステムを共有） | 明示的なボリュームマウントが必要 |
| **サイズ** | 最小限（パッケージのみ） | 大きい（ベースイメージ + レイヤー） |
| **起動** | 高速（コンテナランタイムなし） | 遅い（コンテナライフサイクル） |
| **キャッシュ** | ストアベース、コンテンツアドレス指定 | レイヤーベース |
| **再現性** | 完全（関数型パッケージマネージャー） | 良好（ベースイメージに依存） |
| **複数バージョン** | 自然（異なるストアパス） | 別イメージが必要 |

## 配布戦略

標準 Nix ステップは、パフォーマンス、サイズ、ネットワーク要件のバランスを取るため、複数の配布アプローチをサポートします:

### オンデマンドダウンロード（デフォルト）

```yaml
nix:
  packages: ["python311", "numpy"]
  # Downloads from cache.nixos.org at runtime
```

**メリット**: 小さい Runner イメージ、共有キャッシュ、常に最新
**デメリット**: ネットワークが必要、コールドスタートが遅い

### Runner イメージへの同梱

```yaml
nix:
  step: gitlab.com/gitlab-org/runner-tools/nix@bundled
  packages: ["python311", "numpy"]
```

**メリット**: オフラインで動作、起動が高速
**デメリット**: Runner イメージが大きくなる、重複の可能性

### ハイブリッドアプローチ

```yaml
nix:
  packages: ["python311", "rare-package"]
  bundled: ["python311"]  # Bundle common, fetch rare
```

**メリット**: サイズ / 速度最適化のバランスがよい
**デメリット**: 設定の複雑さが高い

## 実装パス

1. **スキーマ拡張**: ステップ定義に `NixConfig` struct を追加する
2. **コンパイルロジック**: ステップコンパイラーに `compileNixStep()` を実装する
3. **標準ステップ**: `gitlab.com/gitlab-org/runner-tools/nix@v1` を構築する
   - クロスプラットフォームサポートに nix-portable を使用する
   - 環境変数（PATH、PYTHONPATH など）を出力する
   - パフォーマンスのためにキャッシュを実装する
4. **配布オプション**: 同梱バリアントと依存関係共有を追加する

## 主な特徴

- **クロスランゲージ**: Python、Node.js、Go、Rust、システムツールで動作する
- **モジュラーアーキテクチャ**: コアステップランナーは変更せず、複雑さは標準ステップに置く
- **Root 不要**: ユーザー空間でのインストールと実行
- **クロスプラットフォーム**: Linux ネイティブ、WSL 経由の Windows、macOS をサポート

このアプローチは、依存関係管理を設定負担から、信頼性が高く再現可能な実行環境へコンパイルされる宣言的なパッケージ仕様に変えます。
