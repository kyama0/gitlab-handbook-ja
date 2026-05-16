---
title: "デプロイワークフロー"
upstream_path: /handbook/engineering/testing/deployment_paths/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-16T08:16:24+11:00"
---

## GitLabのデプロイワークフロー

以下の図は、開発者のコミットからGitLab.comへの本番デプロイおよびセルフマネージドリリースまでの完全なデプロイワークフローを示しています。

```mermaid
graph TB
    subgraph "開発者ワークフロー"
        A[開発者がフィーチャーブランチにコミット] --> B[マージリクエストの作成]
        B --> C[CI/CDパイプラインが実行]
        C --> D[コードレビューと承認]
        D --> E[デフォルトブランチへのマージ]
    end
    
    subgraph "GitLab.comデプロイパス"
        E --> F[デプロイヤーパイプラインがトリガー]
        
        F --> G["ステージングカナリアへのデプロイ<br/>gstg-cny"]
        F -.並行.-> H["ステージングRefへのデプロイ<br/>gstg-ref<br/>サンドボックステスト"]
        
        G --> I["E2Eスモークテスト<br/>gstg-cnyを対象（ブロッキング）"]
        
        I --> J["本番カナリアへのデプロイ<br/>gprd-cny"]
        
        J --> K["E2Eスモークテスト<br/>gprd-cnyを対象（ブロッキング）"]
        
        K --> L["待機期間<br/>30分"]
        
        L --> M[手動プロモーション]
        
        M --> N["ステージングへのデプロイ<br/>gstg"]
        Q --> O["本番へのデプロイ<br/>gprd"]
        
        M --> Q[本番チェック]
        
        O --> R[GitLab.comで稼動]
    end
    
    subgraph "セルフマネージドリリースパス"
        E --> S[デフォルトブランチにマージ]
        S --> T["マンスリーリリースサイクル<br/>毎月第3木曜日"]
        T --> U["ステーブルブランチの作成<br/>例: 17-2-stable-ee"]
        U --> V["バージョンのタグ付け<br/>例: v17.2.0"]
        V --> W["リリースパッケージのビルド<br/>Omnibus、Dockerなど"]
        W --> X[packages.gitlab.comへの公開]
        X --> Y["セルフマネージド<br/>インストールが利用可能"]
        
        V --> Z["パッチリリース<br/>月に2回"]
        Z --> AA["パッチバージョンのタグ付け<br/>例: v17.2.1"]
        AA --> W
    end
    
    subgraph "ドキュメントの更新"
        E --> AB[mainでドキュメントが更新]
        AB --> AC["docs.gitlab.comへのデプロイ<br/>1時間以内"]
        U --> AD["ステーブルブランチのドキュメント<br/>例: docs.gitlab.com/17.2/"]
    end

    style R fill:#1f77b4
    style Y fill:#ff7f0e
    style AC fill:#2ca02c
    style H fill:#9467bd
```

## デプロイ後のマイグレーション

デプロイ後のマイグレーションには専用のワークフローがあり、特定の時間枠内に実行されることは保証されません。デプロイチームは必要と判断したときに実行する権限を持っています。ただし、これらは常にリリース管理タスクの前に実行されます。

詳細については、デプロイハンドブックの[デプロイ後マイグレーション（PDM）の実行](/handbook/engineering/deployments-and-releases/deployments/#post-deploy-migration-pdm-execution)セクションを参照してください。

## 関連ドキュメント

デプロイプロセスの追加コンテキストについては、デプロイとリリースハンドブックの[パッケージのデプロイ](/handbook/engineering/deployments-and-releases/deployments/#deploying-packages)セクションを参照してください。
