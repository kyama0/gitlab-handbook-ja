# infra/

Terraform で Cloudflare リソースを管理します。

## 管理対象

| リソース | 用途 |
| --- | --- |
| `cloudflare_pages_project.site` | サイトホスティング（direct upload 型） |
| `cloudflare_pages_domain.site` | サイトのカスタムドメイン (任意) |
| `cloudflare_dns_record.site` | サイトドメインの CNAME (任意) |
| `cloudflare_r2_bucket.images` | ハンドブック画像バケット |
| `cloudflare_r2_managed_domain.images` | バケットの `pub-<accountid>.r2.dev` 公開アクセス |
| `cloudflare_r2_custom_domain.images` | R2 公開用カスタムドメイン (任意) |
| `cloudflare_list.redirect_pages_dev` + `_list_item` + `cloudflare_ruleset.redirect_pages_dev` | `*.pages.dev` を canonical ドメインへ 301 する Bulk Redirect |

Pages は direct upload 型にしており、デプロイは GitHub Actions (`.github/workflows/deploy.yml`) から `wrangler` / `pages-action` で行います。Terraform はインフラの宣言のみを担当し、ビルド成果物の push は行いません。

## セットアップ

```bash
cd infra
cp terraform.tfvars.example terraform.tfvars   # 値を埋める
export CLOUDFLARE_API_TOKEN=...                # 必要権限は providers.tf 参照

terraform init
terraform plan
terraform apply
```

## state

デフォルトはローカル state です。チームで共有する場合は [backend.tf](./backend.tf) のコメントアウト部分を有効化し、R2 を S3 互換バックエンドとして使ってください。

## トークン権限

Cloudflare API Token に必要な権限：

- アカウント · Cloudflare Pages · 編集
- アカウント · Workers R2 Storage · 編集
- アカウント · アカウント ルールセット · 編集（Bulk Redirect の ruleset 用）
- アカウント · フィルタ リストについて · 編集（Bulk Redirect の list / list_item 用）
- ゾーン · DNS · 編集（`zone_id` を設定する場合のみ）
