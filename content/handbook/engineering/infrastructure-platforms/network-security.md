---
title: "ネットワークセキュリティ管理手順"
upstream_path: /handbook/engineering/infrastructure-platforms/network-security/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-01-23T12:25:37-06:00"
---

## 目的

GitLab は、システム、アプリケーション、サービスへのネットワークアクセスを制限することで「最小機能」の概念を強制する多層防御（defense-in-depth）の方法論を採用し、組織のネットワークインフラの機密性、完全性、可用性、安全性を保護するための十分なセキュリティおよびプライバシー制御を実行し、GitLab のネットワーク上のアクティビティの状況認識を提供します。

## スコープ

GitLab のネットワークアーキテクチャは、内部および外部ユーザーの両方が利用可能で、当社の DNS は Cloudflare でホストしています。これには gitlab.com および gitlab.net が含まれます。

## 役割と責任

| 役割  | 責任 |
|-----------|-----------|
| Infrastructure チーム | 設定と管理に責任を持つ |
| Infrastructure 管理（Code Owners） | この手順への重要な変更と例外の承認に責任を持つ |

## 手順

### Cloudflare

[Cloudflare](https://cloudflare.com) は以下のゾーンに対してウェブアプリケーションファイアウォール（WAF）、ドメインネームシステム（DNS）、コンテンツデリバリーネットワーク（CDN）を提供します:

- gitlab.com
- staging.gitlab.com
- gitlab.net

---

- [Cloudflare ステータスページ](https://www.cloudflarestatus.com/)
- [Cloudflare ネットワークからトレースルートを実行](https://ops.gitlab.net/gitlab-com/gl-infra/cloudflare-traceroute)

### オンコールリファレンス

[オンコールリファレンス](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/cloudflare/oncall.md)

### 誤検知トリアージプロセス

[誤検知トリアージプロセス](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/cloudflare/troubleshooting.md#false-positive-triage-process)

### 変更ワークフロー

[変更ワークフロー](https://gitlab.com/gitlab-com/gl-infra/reliability/-/issues/10993)

### ページルール vs WAF ルール vs cf_allowlists の使い分け

[cf_allowlists](https://ops.gitlab.net/gitlab-com/gl-infra/terraform-modules/cf_allowlists) **内部限定**

何であれ、まず[**ファイアウォールトラッカーに Issue を作成**](https://gitlab.com/gitlab-com/gl-infra/cloudflare-firewall/-/issues)し、関連する Issue にリンクしてください。このファイアウォールトラッカーは既存のルールを追跡するために使用されます。これは管理方法に関わらず、全てのルールに適用されます。

次に以下を判断してください:

- リダイレクトまたはキャッシュポリシーの変更ですか？ページルールを使用してください。その後、[こちら](https://ops.gitlab.net/gitlab-com/gl-infra/cloudflare-audit-log#how-do-i-apply-a-cloudflare-change-then)の説明に従って `cloudflare_import` ブランチの [`page_rules.json`](https://ops.gitlab.net/gitlab-com/gl-infra/cloudflare-audit-log/-/blob/cloudflare_import/page_rules.json) にエントリを追加して MR を作成してください **内部限定**
- 内部顧客の IP アドレスを一括許可する必要がありますか？ [cf_allowlists](https://ops.gitlab.net/gitlab-com/gl-infra/terraform-modules/cf_allowlists) を使用してください。**内部限定**
- それ以外の場合は？ファイアウォールトラッカーと Web UI を使用して追加する WAF ルールを使用してください。

### クイックリファレンス: WAF ルール

**一時的なルールは自動的に期限切れになります！** 詳細については[トラフィック管理](https://gitlab.com/gitlab-com/runbooks/-/blob/5bee8d98f19b68b912e9adda83bae1bf2fa3d0dd/docs/cloudflare/managing-traffic.md)を参照してください。

優先度の観点でどこにルールを置くかを判断しやすくするため、ルールのタイプを分類して以下から優先度範囲を選択してください:

- 00000-14999: 脆弱性ホットパッチ（全員へのブロック）
- 15000-29999: 不正者ブロック（ボット、攻撃者など）
- 30000-44999: 一般 WAF 例外（不正者を除く全員へのバイパス）
- 45000-49999: 内部および顧客許可リスト（[cf_allowlists](https://ops.gitlab.net/gitlab-com/gl-infra/terraform-modules/cf_allowlists) 経由で管理。**手動使用不可**）
- 50000-64999: 許可リスト未登録ユーザーへの WAF 例外またはブロック

次に、ファイアウォールトラッカーの Issue ID を範囲に追加します。例えば、Issue 1234 で追跡される攻撃には優先度 `15000+1234` = `16234` が割り当てられます。

### 不正使用や攻撃に対抗するためのページルールと WAF ルールの使い方

[不正使用や攻撃に対抗するためのページルールと WAF ルールの使い方](https://gitlab.com/gitlab-com/gl-infra/reliability/-/issues/10277)

### Cloudflare の WAF およびページルールの更新

#### Terraform を使用したページルールの追加

ページルールは Terraform を使用して管理します。Cloudflare Web UI を使用して変更を行うことはできますが、それがルール管理の推奨方法ではありません。

#### 変更を行う場所

Cloudflare を使用する 3 つのゾーンはそれぞれ、Terraform 環境に専用の `cloudflare-pagerules.tf` ファイルを持っています:

- [`gitlab.net`](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/blob/main/environments/ops/cloudflare-pagerules.tf)
- [`gitlab.com`](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/blob/main/environments/gprd/cloudflare-pagerules.tf)
- [`staging.gitlab.com`](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/blob/main/environments/gstg/cloudflare-pagerules.tf)

#### 変更の方法

Terraform の Cloudflare プロバイダーは、ページルールのリソースに設定された `priority` 値を遵守しません。最も低い優先度のルールを除く全てのルールには、優先度の一つ下のルールを指す `depends_on` セクションが必要です。そして、その上のルールは新しいルールに依存するよう更新する必要があります。

これにより Terraform は特定の順序でルールを適用し、優先度を保持します。

### cf_allowlists への WAF ルールの追加

Cloudflare の WAF ルールを変更する場合、最初のステップは[ファイアウォール Issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/cloudflare-firewall)に Issue を作成することです。
適切な Issue タイプと適切なラベルおよび説明でどのように作成するかを確認するために[トラフィック管理](https://gitlab.com/gitlab-com/runbooks/-/blob/5bee8d98f19b68b912e9adda83bae1bf2fa3d0dd/docs/cloudflare/managing-traffic.md)ドキュメントを参照してください。

[cf_allowlists](https://ops.gitlab.net/gitlab-com/gl-infra/terraform-modules/cf_allowlists) **内部限定** は、顧客または GitLab サービスの IP が Cloudflare とそれが引き起こす可能性のあるブロックをバイパスできるようにする WAF ルールを書くために作成した Terraform モジュールです。
許可リストはリンクされたモジュールの `allowlist.json` で管理されています。IP を追加するには、必要な情報でファイルを更新するだけです。サンプルエントリはモジュールの README に提供されています。変更がマスターにマージされたら、ルールを適用するために `gstg` および `gprd` 環境で `terraform` を実行する必要があります。ローカルで実行している場合は、更新のある最新モジュールを取得するために `tf init -upgrade` を実行する必要があるかもしれません。

### Web UI を使用した WAF ルールの追加

Cloudflare の WAF ルールを変更する場合、[ファイアウォール Issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/cloudflare-firewall)に Issue が必要です。
適切な Issue タイプと適切なラベルおよび説明でどのように作成するかを確認するために[トラフィック管理](https://gitlab.com/gitlab-com/runbooks/-/blob/5bee8d98f19b68b912e9adda83bae1bf2fa3d0dd/docs/cloudflare/managing-traffic.md)ドキュメントを参照してください。

Cloudflare UI を使用した手動変更については[こちら](https://developers.cloudflare.com/firewall/cf-dashboard/create-edit-delete-rules/)をご覧ください。
良い実践は、新しいルールを作成しながらドラフトとして保存することです。これにより、本番変更プロセスの一部としてルールのオンオフを切り替えられるようになります。

### WAF およびページルールの検証

### cf_audit の仕組み

[cf_audit プロジェクト](https://ops.gitlab.net/gitlab-com/gl-infra/cloudflare-audit-log)は、Cloudflare 設定の「既知の良好な」ダンプを維持するのに役立つよう設計されています。
これは監査ツールのみであり、それ自体で設定を更新するために使用されるわけではありません。
スクリプト自体は、API から Cloudflare ゾーンおよびアカウントの全設定データを取得し、プロジェクトの `reports/` ディレクトリにデータを出力します。

CI ジョブが定期的に実行されて前述のデータを収集し、`cloudflare_import` ブランチにコミットします。`cloudflare_import` ブランチは設定の情報源とみなされます。次にこの情報を `known_good` ブランチと比較して何が（あれば）変更されたかを判断します。`known_good` ブランチは期待される設定とみなされます。設定が変更された場合、ジョブは失敗とマークされ、変更の手動レビューを促します。

その内部動作についての詳細なビデオを見たい場合は、より詳細な内容を説明している[こちらのデモビデオ](https://youtu.be/vTKyf-PS7Lo)をご覧ください。

### ページルールの仕組み

[ページルールの仕組み](https://gitlab.com/gitlab-com/gl-infra/reliability/-/issues/10989)

### 一般情報

- [ベンダー情報](https://gitlab.com/gitlab-com/runbooks/-/blob/5bee8d98f19b68b912e9adda83bae1bf2fa3d0dd/docs/cloudflare/vendor.md)
- [サービスの場所](https://gitlab.com/gitlab-com/runbooks/-/blob/5bee8d98f19b68b912e9adda83bae1bf2fa3d0dd/docs/cloudflare/services-locations.md)
- [WAF サービス情報](https://gitlab.com/gitlab-com/runbooks/-/blob/5bee8d98f19b68b912e9adda83bae1bf2fa3d0dd/docs/waf/README.md)

### ドメインネームシステム（DNS）

- 上記のゾーンについては、Cloudflare が DNS リゾルバーです。
- [Terraform の DNS](https://ops.gitlab.net/gitlab-com/gitlab-com-infrastructure/-/tree/master/environments/dns) は Cloudflare DNS エントリの管理に使用されます。

## 例外

この手順への例外は[情報セキュリティポリシー例外管理プロセス](/handbook/security/controlled-document-procedure/#exceptions)に従って追跡されます。

## 参考資料

- [プロダクションアーキテクチャ](/handbook/engineering/infrastructure-platforms/production/architecture/)
- [暗号化ポリシー](/handbook/security/product-security/vulnerability-management/encryption-policy/)
