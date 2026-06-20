---
owning-stage: "~devops::verify"
title: "Nix Package Manager for GitLab Steps"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_steps/nix-package-manager/
upstream_sha: 9164688669f5bd36ff8345a38c17f82ffc321821
lastmod: 2026-06-18T16:29:19-07:00
translated_at: "2026-06-20T21:10:03Z"
translator: claude
stale: false
model: claude-opus-4-7
---

## Nix Package Manager for GitLab Steps

## 問題提起

CI/CD パイプラインは、依存関係管理における重大な課題に直面しています:

- **バージョンの競合**: ステップごとに互換性のないツールのバージョンが必要になる
- **セットアップのオーバーヘッド**: 各ステップで依存関係のインストールに時間を浪費する
- **再現性の欠如**: 「自分のマシンでは動く」という問題が解消されない
- **コンテナの肥大化**: すべての依存関係をバンドルすることで Docker イメージが巨大になる

## 解決策: Nix Package Manager の統合

GitLab Steps のコンパイルモデルを `nix:` キーワードで拡張します。これは正規のセットアップステップへとコンパイルされ、コンテナなしで再現可能な依存関係の分離を提供します。

## 仕組み

`nix:` キーワードは、2 つの連続した正規ステップへとコンパイルされるシンタックスシュガーを提供します:

1. **セットアップステップ**が、正確なパッケージバージョンで分離された環境を作成します
2. **実行ステップ**が、その環境でユーザーのコマンドを実行します
3. **環境変数**が、出力を通じてステップ間で受け渡されます

Docker コンテナとは異なり、Nix の統合はネイティブのファイルシステムアクセスを備えた通常のプロセスとして実行されます。これにより、ボリュームマウントの設定なしに、ステップ間でビルドディレクトリをシームレスに共有できます。

**重要なポイント**: 「分離」とは、依存関係の分離（バージョンの競合を防ぐこと）を指すものであり、ファイルシステムの分離を指すものではありません。ステップは、共有ディレクトリ、ビルド成果物、ワークスペースのファイルに自然にアクセスできます。

### コンパイルの例

**ユーザーが記述する内容:**

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

### マルチステップワークフローの例

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

## Docker に対する利点

| 観点 | Nix の統合 | Docker |
|--------|-----------------|--------|
| **依存関係の分離** | Nix store パスを通じた正確なパッケージバージョン | OS 全体を含むコンテナレベル |
| **ファイルシステムアクセス** | ネイティブ（ホストのファイルシステムを共有） | 明示的なボリュームマウントが必要 |
| **サイズ** | 最小限（パッケージのみ） | 大きい（ベースイメージ + レイヤー） |
| **起動** | 高速（コンテナランタイムなし） | 低速（コンテナのライフサイクル） |
| **キャッシュ** | store ベース、コンテンツアドレス可能 | レイヤーベース |
| **再現性** | 完璧（関数型パッケージマネージャー） | 良好（ベースイメージに依存） |
| **マルチバージョン** | 自然（異なる store パス） | 別々のイメージが必要 |

## 配布戦略

正規の Nix ステップは、パフォーマンス、サイズ、ネットワーク要件のバランスを取るために、複数の配布アプローチをサポートします:

### オンデマンドダウンロード（デフォルト）

```yaml
nix:
  packages: ["python311", "numpy"]
  # Downloads from cache.nixos.org at runtime
```

**長所**: ランナーイメージが小さい、共有キャッシュ、常に最新
**短所**: ネットワークが必要、コールドスタートが遅い

### ランナーイメージにバンドル

```yaml
nix:
  step: gitlab.com/gitlab-org/runner-tools/nix@bundled
  packages: ["python311", "numpy"]
```

**長所**: オフラインで動作、起動が速い
**短所**: ランナーイメージが大きい、重複の可能性

### ハイブリッドアプローチ

```yaml
nix:
  packages: ["python311", "rare-package"]
  bundled: ["python311"]  # Bundle common, fetch rare
```

**長所**: サイズと速度のバランスの取れた最適化
**短所**: 設定の複雑さが増す

## 実装の道筋

1. **スキーマの拡張**: ステップ定義に `NixConfig` 構造体を追加する
2. **コンパイルロジック**: ステップコンパイラーに `compileNixStep()` を実装する
3. **正規ステップ**: `gitlab.com/gitlab-org/runner-tools/nix@v1` を構築する
   - クロスプラットフォーム対応のために nix-portable を使用する
   - 環境変数（PATH、PYTHONPATH など）を出力する
   - パフォーマンスのためにキャッシュを実装する
4. **配布オプション**: バンドル版と依存関係の共有を追加する

## 主な特徴

- **クロス言語**: Python、Node.js、Go、Rust、システムツールで動作する
- **モジュラーアーキテクチャ**: コアのステップランナーは変更せず、複雑さは正規ステップに集約する
- **root 不要**: ユーザー空間でのインストールと実行
- **クロスプラットフォーム**: Linux ネイティブ、Windows は WSL 経由、macOS をサポート

このアプローチは、依存関係管理を設定の負担から、信頼性が高く再現可能な実行環境へとコンパイルされる宣言的なパッケージ指定へと変えます。
