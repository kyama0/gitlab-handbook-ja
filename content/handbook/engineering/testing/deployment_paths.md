---
title: "デプロイワークフロー"
upstream_path: /handbook/engineering/testing/deployment_paths/
upstream_sha: "322e725aa43e37884fdc7aeb27f1e822a696a656"
translated_at: "2026-10-22T21:09:46Z"
translator: claude
stale: false
lastmod: "2026-10-21T10:21:07-06:00"
---

## GitLab のデプロイワークフロー {#gitlab-deployment-workflow}

以下の図は、開発者のコミットから GitLab.com への本番デプロイおよびセルフマネージドリリースまでの完全なデプロイワークフローを示しています。

```mermaid
graph TB
    subgraph "Developer Workflow"
        A[Developer commits to feature branch] --> B[Create Merge Request]
        B --> C[CI/CD Pipeline runs]
        C --> D[Code Review & Approval]
        D --> E[Merge to default branch]
    end
    
    subgraph "GitLab.com Deployment Path"
        E --> F[Deployer Pipeline Triggered]
        
        F --> G["Deploy to Staging Canary<br/>gstg-cny"]
        F -.Parallel.-> H["Deploy to Staging Ref<br/>gstg-ref<br/>Sandbox Testing"]
        
        G --> I["E2E Smoke Tests<br/>targeting gstg-cny (blocking)"]
        
        I --> J["Deploy to Production Canary<br/>gprd-cny"]
        
        J --> K["E2E Smoke Tests<br/>targeting gprd-cny (blocking)"]
        
        K --> L["Wait Period<br/>30 minutes"]
        
        L --> M[Manual Promotion]
        
        M --> N["Deploy to Staging<br/>gstg"]
        Q --> O["Deploy to Production<br/>gprd"]
        
        M --> Q[Production Checks]
        
        O --> R[Live on GitLab.com]
    end
    
    subgraph "Self-Managed Release Path"
        E --> S[Merged to default branch]
        S --> T["Monthly release cycle<br/>3rd Thursday of month"]
        T --> U["Create stable branch<br/>e.g., 17-2-stable-ee"]
        U --> V["Tag version<br/>e.g., v17.2.0"]
        V --> W["Build release packages<br/>Omnibus, Docker, etc."]
        W --> X[Publish to packages.gitlab.com]
        X --> Y["Available for Self-Managed<br/>installations"]
        
        V --> Z["Patch releases<br/>Twice monthly"]
        Z --> AA["Tag patch version<br/>e.g., v17.2.1"]
        AA --> W
    end
    
    subgraph "Documentation Updates"
        E --> AB[Docs updated on main]
        AB --> AC["Deployed to docs.gitlab.com<br/>within 1 hour"]
        U --> AD["Stable branch docs<br/>e.g., docs.gitlab.com/17.2/"]
    end

    style R fill:#1f77b4
    style Y fill:#ff7f0e
    style AC fill:#2ca02c
    style H fill:#9467bd
```

## デプロイ後のマイグレーション {#post-deployment-migrations}

デプロイ後のマイグレーションには専用のワークフローがあり、特定の時間枠内に実行されることは保証されません。通常は 1 日に約 1 回実行されますが、デプロイチームが実行を延期する場合もあります。たとえば、[パッチウィンドウ](/handbook/engineering/releases/patch-releases/#patch-window)、月次リリースウィンドウ、デプロイを妨げるインシデントの発生中などです。

詳細については、デプロイハンドブックの[デプロイ後マイグレーション（PDM）の実行](/handbook/engineering/deployments-and-releases/deployments/#post-deploy-migration-pdm-execution)セクションを参照してください。

## 関連ドキュメント {#related-documentation}

デプロイプロセスの追加コンテキストについては、デプロイとリリースハンドブックの[パッケージのデプロイ](/handbook/engineering/deployments-and-releases/deployments/#deploying-packages)セクションを参照してください。
