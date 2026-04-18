# -----------------------------------------------------------------------------
# Cloudflare Pages — direct-upload project
# The GitHub Actions workflow (`.github/workflows/deploy.yml`) pushes builds
# via `cloudflare/pages-action`, so we intentionally do NOT configure a
# `source` block (that is only for Git-integrated projects).
# -----------------------------------------------------------------------------
resource "cloudflare_pages_project" "site" {
  account_id        = var.account_id
  name              = local.project_name
  production_branch = local.production_branch

  deployment_configs = {
    production = {
      compatibility_date  = local.compatibility_date
      compatibility_flags = local.compatibility_flags
      env_vars            = length(local.production_env_vars) > 0 ? local.production_env_vars : null
    }
    preview = {
      compatibility_date  = local.compatibility_date
      compatibility_flags = local.compatibility_flags
    }
  }
}

# -----------------------------------------------------------------------------
# R2 bucket for handbook images
# -----------------------------------------------------------------------------
resource "cloudflare_r2_bucket" "images" {
  account_id = var.account_id
  name       = local.r2_bucket_name
  location   = local.r2_location
}

# -----------------------------------------------------------------------------
# Custom domains (optional — only created when the locals are set)
# -----------------------------------------------------------------------------
resource "cloudflare_pages_domain" "site" {
  count        = local.site_domain != null ? 1 : 0
  account_id   = var.account_id
  project_name = cloudflare_pages_project.site.name
  name         = coalesce(local.site_domain, "placeholder.invalid")
}

resource "cloudflare_dns_record" "site" {
  count   = local.site_domain != null && local.zone_id != null ? 1 : 0
  zone_id = coalesce(local.zone_id, "placeholder")
  name    = coalesce(local.site_domain, "placeholder.invalid")
  type    = "CNAME"
  content = "${cloudflare_pages_project.site.name}.pages.dev"
  proxied = true
  ttl     = 1
  comment = "Managed by Terraform — gitlab-handbook-ja Pages site"
}

resource "cloudflare_r2_custom_domain" "images" {
  count       = local.images_domain != null && local.zone_id != null ? 1 : 0
  account_id  = var.account_id
  bucket_name = cloudflare_r2_bucket.images.name
  domain      = coalesce(local.images_domain, "placeholder.invalid")
  zone_id     = coalesce(local.zone_id, "placeholder")
  enabled     = true
}
