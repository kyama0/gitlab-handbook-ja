---
title: 'GitLab Secrets Manager ADR 004: ステートレス鍵管理サービス'
owning-stage: "~devops::verify"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/secret_manager/decisions/004_stateless_kms/
upstream_sha: 86cfa2bd7d73df5a673fe5ebd33b028d0f540434
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-10-28T03:27:39+00:00"
---

[ADR-002](../002_gcp_kms) において、私たちは秘密の暗号化鍵を保存するために Google の Cloud Key Management Service を使用することを決定しました。これにより、さまざまなコンプライアンス要件をより容易に満たせるようになります。

この ADR では、GitLab Secrets Management Service の望ましいアーキテクチャを説明します。このサービスをステートレスなサービスとして設計し、一時的なローカルストレージ以外の永続的なデータストアには接続しない構成にします。

## コンテキスト

## 決定

GitLab Secrets Management Service をステートレスなアプリケーションとし、リレーショナルデータベースや NoSQL データベースのようなグローバルデータストレージには接続しないようにします。

ローカルブロックストレージのみをサポートし、主にキャッシュ目的での利用に限定します。

復号化コストを適切に管理するために、多層保護を実装し、保護ティアに応じてキャッシュ TTL を持つインメモリのインスタンスごとの[対称復号化鍵](../001_envelop_encryption/)キャッシュを導入します。Google の Cloud KMS では、ティアに応じてハードウェアまたはソフトウェア鍵を使用できます。

## 結果

1. すべての秘密鍵は Google の Cloud KMS に保存されます。
1. 多層保護を実装し、上位ティアほど高い保護を提供します。
1. 保護ティアは GitLab Rails Service 側でそれぞれの組織レベルで定義されます。
1. 使用する保護レベルに応じて、対称復号化鍵をインメモリにキャッシュできます。
1. 対称鍵のキャッシュは 24 時間以上有効であってはなりません。
1. 最上位の保護ティアはハードウェアセキュリティモジュールを使用し、キャッシュは行いません。
1. GitLab Secrets Management Service はアクセス制御メタデータを保存しません。
1. アイデンティティの多重化解除は GitLab Rails Service 側で行います。
1. 復号化リクエストは組織の公開鍵で署名されます。
1. サービスは署名を確認することで復号化リクエスト者のアイデンティティを検証します。

## 代替案

リレーショナルデータベースや NoSQL データベース（自己管理型およびクラウドプロバイダーによる管理型の両方）の使用を検討しましたが、これらはサービスの複雑さを大幅に増加させ、セキュリティ態勢を弱めることになると結論付けました。
