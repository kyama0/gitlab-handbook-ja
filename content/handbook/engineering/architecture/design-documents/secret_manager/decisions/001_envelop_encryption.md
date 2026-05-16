---
title: 'GitLab Secrets Manager ADR 001: エンベロープ暗号化の使用'
owning-stage: "~devops::verify"
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/secret_manager/decisions/001_envelop_encryption/"
upstream_sha: "86cfa2bd7d73df5a673fe5ebd33b028d0f540434"
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
lastmod: "2024-08-23T13:02:20+00:00"
---

## コンテキスト

GitLab Secrets Manager でシークレットを安全に保存するために、GitLab システムへのセキュリティ侵害が発生した場合でも、暗号化されていないシークレットが漏洩しないようなシステムが必要です。

## 決定事項

エンベロープ暗号化を使用します。GitLab Rails は暗号化されたシークレットを、暗号化されたデータキーとともに保存します。シークレットを復号化するために、GitLab Rails は GitLab Secrets Service を通じて GCP キーマネージャーに復号化リクエストを行い、復号化されたデータキーを取得する必要があります。データキーは次に暗号化されたシークレットを復号化するために使用されます。

```mermaid
sequenceDiagram
    participant A as Client
    participant B as GitLab Rails
    participant C as GitLab Secrets Service

    Note over B,C: Initialize vault for project/group/organization

    B->>C: Initialize vault - create key pair
    C->>B: Returns vault public key
    B->>B: Stores vault public key

    Note over A,C: Creating a new secret

    A->>B: Create new secret
    B->>B: Generate new symmetric data key
    B->>B: Encrypts secret with data key
    B->>B: Encrypts data key with vault public key
    B->>B: Stores envelope (encrypted secret + encrypted data key)
    B-->>B: Discards plain-text data key
    B->>A: Success

    Note over A,C: Retrieving a secret

    A->>B: Get secret
    B->>B: Retrieves envelope (encrypted secret + encrypted data key)
    B->>C: Decrypt data key
    C->>C: Decrypt data key using vault private key
    C->>B: Returns plain-text data key
    B->>B: Decrypts secret
    B-->>B: Discards plain-text data key
    B->>A: Returns secret
```

## 結果

このアプローチにより、エンベロープを含む GitLab データベースにアクセスした攻撃者は、シークレットのコンテンツを復号化できません。必要な秘密鍵がそこには保存されていないためです。

また、各 vault に使用される非対称鍵ペアを安全に生成・保存する方法も検討する必要があります。

さらに、以下のリソースが必要です。

1. 複数の非対称鍵ペア。プロジェクト、グループ、または組織に属する各 vault に固有の非対称鍵ペアが必要です。
1. 複数の対称鍵。各シークレットに固有のキーが必要です。

## 代替案

シークレットの暗号化と復号化を GitLab Secrets Service で行いながら、暗号化されたデータを GitLab Rails に保存することを検討しました。しかし、これはシークレットと暗号化キーが GitLab Secrets Service に同時に存在する時間が生まれることを意味します。
