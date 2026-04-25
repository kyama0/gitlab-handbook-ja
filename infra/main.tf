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

# Enables the bucket's managed `pub-<accountid>.r2.dev` subdomain so the site
# can serve handbook images from R2. Cloudflare rate-limits r2.dev access and
# documents it for development use, but it is acceptable for low-traffic
# launches; flip `images_domain` later to shift to a custom domain.
resource "cloudflare_r2_managed_domain" "images" {
  account_id  = var.account_id
  bucket_name = cloudflare_r2_bucket.images.name
  enabled     = true
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

# -----------------------------------------------------------------------------
# Account-level Bulk Redirect: 301 every request to the Pages project's
# default `*.pages.dev` URL over to the canonical custom domain. Cloudflare
# Pages cannot fully disable that subdomain (per their docs), so this rule
# is the supported workaround for keeping the canonical URL clean and
# avoiding handing out a `gitlab-handbook-ja.pages.dev` link that visitors
# would actually load.
# -----------------------------------------------------------------------------
resource "cloudflare_list" "redirect_pages_dev" {
  account_id  = var.account_id
  name        = "redirect_pages_dev"
  kind        = "redirect"
  description = "Bulk redirect entries for *.pages.dev → custom domain."
}

resource "cloudflare_list_item" "redirect_pages_dev_root" {
  account_id = var.account_id
  list_id    = cloudflare_list.redirect_pages_dev.id

  redirect = {
    source_url            = "${cloudflare_pages_project.site.subdomain}/"
    target_url            = "https://${local.site_domain}/"
    status_code           = 301
    include_subdomains    = false
    subpath_matching      = true
    preserve_query_string = true
    preserve_path_suffix  = true
  }
}

# Account-level redirect ruleset (root). There is only one root ruleset per
# phase per account, so any future Bulk Redirect lists must be added as
# additional rules on this same ruleset.
resource "cloudflare_ruleset" "redirect_pages_dev" {
  account_id  = var.account_id
  name        = "default"
  description = "Bulk Redirects ruleset"
  kind        = "root"
  phase       = "http_request_redirect"

  rules = [
    {
      action      = "redirect"
      description = "Redirect *.pages.dev to the custom domain."
      enabled     = true
      expression  = format("http.request.full_uri in $%s", cloudflare_list.redirect_pages_dev.name)
      action_parameters = {
        from_list = {
          name = cloudflare_list.redirect_pages_dev.name
          key  = "http.request.full_uri"
        }
      }
    },
  ]
}
