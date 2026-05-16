---
stage: enablement
group: Tenant Scale
title: 'Cells: シークレットと認証情報'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/impacted_features/secrets/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-09-19T10:00:54+00:00"
---


{{% alert %}}
このドキュメントは作業中であり、Cells 設計の非常に初期の状態を表しています。重要な側面は未だ文書化されていませんが、将来的に追加する予定です。これは Cells のアーキテクチャの一候補であり、実装するアプローチを決定する前に代替案と比較検討するつもりです。このアーキテクチャを採用しないと決定した場合でも、そのドキュメントを保持し、このアプローチを選択しなかった理由を記録します。
{{% /alert %}}


可能な限り、各 Cell は独自の別個のシークレットセットを持つべきです。
ただし、クラスター内のすべての Cell で同一である必要があるシークレットも存在します。

## 1. 定義

GitLab には設定が必要な[シークレット](https://docs.gitlab.com/charts/installation/secrets.html)がいくつかあります。
これらのシークレットは[インストール方法に応じて異なる場所に保存されます](https://docs.gitlab.com/ee/development/application_secrets.html#where-the-secrets-are-stored)。

- 暗号化用シークレット: `secret_key_base`（セッションデータ）と `db_key_base`（データベースの保存時暗号化）。
- 機能用シークレット: `otp_key_base` と `openid_connect_signing_key`。
- 暗号化ファイル用シークレット（[Rails の認証情報機能](https://guides.rubyonrails.org/security.html#custom-credentials)に類似）: `encrypted_settings_key_base`。

「シークレット」ファイルに保存されるシークレットに加え、GitLab はコンポーネント間通信のための特定のシークレットファイルも使用します。たとえば `GitLab Shell secret` で、Cell 内でのみ使用されます。

最後に、多くの機能では認証情報の設定が必要です。これらの認証情報はインストール方法に応じて異なる場所に保存されます:

- [Omnibus の `/etc/gitlab/gitlab.rb`](https://docs.gitlab.com/omnibus/settings/configuration.html)
- Charts の [Kubernetes シークレット](https://docs.gitlab.com/charts/installation/secrets.html#smtp-password)
- [ソースインストールの `config/gitlab.yml`](https://docs.gitlab.com/ee/administration/incoming_email.html#self-compiled-installations)

## 2. データフロー

## 3. 提案

1. `secret_key_base` は https://guides.rubyonrails.org/security.html#session-storage に基づいて、暗号化 Cookie、署名付き Cookie、および Active Storage ファイルに使用されます。
   私たちは Active Storage を使用していないため（私の知る限り）、影響を受けるのは Cookie のみです。Cells 1.0 ではユーザーが単一の Cell に紐付けられ、[セッション Cookie の名前に Cell ID が含まれる](../iterations/cells-1.0.md#proposal)ため、Cell ごとに一意の `secret_key_base` を持つことは問題ありません。
   調査 Issue: [`secret_key_base`](https://gitlab.com/gitlab-org/gitlab/-/issues/451146)。
1. `db_key_base` はデータベースの保存時暗号化に使用され、Cell 間でデータを容易に移動できるよう、すべての Cell で一貫している必要があります。
   調査 Issue: [`db_key_base`](https://gitlab.com/gitlab-org/gitlab/-/issues/451148)。
   1. これは特に `db_key_base` シークレットに当てはまります。このシークレットはデータベースの保存時データの暗号化に使用されるため、別の Cell に転送されたプロジェクトも引き続き動作します。Cell 間でプロジェクト/グループを移動する際に、そのような行を再暗号化したくありません。
   1. 将来的には、Org Mover が Organization を Cell1 から Cell2 に移動する必要がある場合に Cell1 のキーでデータを復号し、Cell2 のキーで再暗号化できるよう、このようなシークレットのローテーションをサポートするかもしれません。これは Cells 1.0 のスコープ外です。
1. 機能用シークレット（`otp_key_base` と `openid_connect_signing_key`）は UX を一貫させるため、すべての Cell で一貫している必要があります。
   調査 Issue: [`otp_key_base`](https://gitlab.com/gitlab-org/gitlab/-/issues/451147)、[`openid_connect_signing_key`](https://gitlab.com/gitlab-org/gitlab/-/issues/451149)。
   1. クラスター全体の Application Settings をサポートする予定なので、まずこれらのシークレットを `ApplicationSetting` 属性に移行して、各 Cell での値の一貫性が Application Settings の同期メカニズムによって処理されるようにすべきです。
1. 暗号化ファイル内の認証情報が同じであれば、暗号化ファイル用のシークレットは各 Cell で異なることができます。とはいえ、簡便性のためにすべての Cell で同じ `encrypted_settings_key_base` を使用する方が簡単かもしれません。[調査 Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/451150)。
1. Cell 内でのコンポーネント間通信のシークレットは Cell ごとに一意に生成すべきです。
1. 一般的に、さまざまな機能の認証情報は、機能が Cell 固有の方法で設定されない限り（例: LDAP を特定の Cell に設定する必要がある場合）、すべての Cell で同一であるべきです。
   GitLab Dedicated はすでに[マルチテナント環境での SMTP 認証情報の共有](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/runbooks/custom-smtp.md#sharing-smtp-credentials-in-a-multi-tenant-environment)のソリューションを持っているため、クラスター全体の設定をセットアップするのに同様のソリューションを使用すべきです。

## 4. 評価

## 4.1. メリット

- シークレットはほとんどの Cell で一貫しています
- Cell 間のデータ移行を処理する必要がありません

## 4.2. デメリット

- Cell のセキュリティは現在の GitLab.com インストールより高くありません
