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

CI/CD pipeline は、依存関係管理に関する重大な課題に直面しています:

- **バージョン競合**: 異なる steps が互換性のない tool versions を必要とする
- **セットアップのオーバーヘッド**: 各 step が依存関係のインストールに時間を浪費する
- **再現性の失敗**: 「自分のマシンでは動く」問題が残る
- **コンテナの肥大化**: Docker images がすべての依存関係を bundle して巨大になる

## 解決策: Nix Package Manager 統合

GitLab Steps の compilation model を `nix:` keyword で拡張します。これは canonical setup steps へ compile され、containers なしで再現可能な依存関係の分離を提供します。

## 仕組み

`nix:` keyword は、2 つの連続した canonical steps へ compile される syntactic sugar を提供します:

1. **Setup step** が正確な package versions を持つ分離された environment を作成する
2. **Execution step** がその environment 内で user command を実行する
3. **Environment variables** が outputs を通じて steps 間で渡される

Docker containers とは異なり、Nix 統合は native filesystem access を持つ通常の processes として実行されます。これにより、volume mounting configuration なしで、steps 間の build directories の共有がシームレスになります。

**重要なポイント**: "Isolation" は依存関係の分離（version conflicts の防止）を指し、filesystem isolation ではありません。Steps は shared directories、build artifacts、workspace files に自然にアクセスします。

### Compilation Example

**User writes:**

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

**Compiles to:**

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

### Multi-Step Workflow Example

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

| 観点 | Nix Integration | Docker |
|--------|-----------------|--------|
| **Dependency Isolation** | Nix store paths による正確な package versions | full OS を含む container level |
| **Filesystem Access** | Native（host filesystem を共有） | 明示的な volume mounts が必要 |
| **Size** | 最小限（packages のみ） | 大きい（base image + layers） |
| **Startup** | 高速（container runtime なし） | 遅い（container lifecycle） |
| **Caching** | Store based、content addressable | Layer based |
| **Reproducibility** | 完全（functional package manager） | 良好（base image に依存） |
| **Multi-version** | 自然（異なる store paths） | 別 images が必要 |

## Distribution Strategies

canonical Nix step は、performance、size、network requirements のバランスを取るため、複数の distribution approaches をサポートします:

### On-Demand Download (Default)

```yaml
nix:
  packages: ["python311", "numpy"]
  # Downloads from cache.nixos.org at runtime
```

**Pros**: 小さい runner images、shared cache、常に最新
**Cons**: network が必要、cold start が遅い

### Bundled in Runner Image

```yaml
nix:
  step: gitlab.com/gitlab-org/runner-tools/nix@bundled
  packages: ["python311", "numpy"]
```

**Pros**: offline で動作、startup が高速
**Cons**: runner images が大きくなる、重複の可能性

### Hybrid Approach

```yaml
nix:
  packages: ["python311", "rare-package"]
  bundled: ["python311"]  # Bundle common, fetch rare
```

**Pros**: size / speed optimization のバランスがよい
**Cons**: configuration complexity が高い

## 実装パス

1. **Schema Extension**: step definitions に `NixConfig` struct を追加する
2. **Compilation Logic**: step compiler に `compileNixStep()` を実装する
3. **Canonical Step**: `gitlab.com/gitlab-org/runner-tools/nix@v1` を構築する
   - cross-platform support に nix-portable を使用する
   - environment variables（PATH、PYTHONPATH など）を出力する
   - performance のために caching を実装する
4. **Distribution Options**: bundled variants と dependency sharing を追加する

## 主な特徴

- **Cross-Language**: Python、Node.js、Go、Rust、system tools で動作する
- **Modular Architecture**: core step runner は変更せず、complexity は canonical steps に置く
- **No Root Required**: user-space installation and execution
- **Cross-Platform**: Linux native、Windows through WSL、macOS supported

このアプローチは、依存関係管理を configuration burden から、信頼性が高く再現可能な execution environments へ compile される declarative package specifications に変えます。
