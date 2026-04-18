locals {
  project_name      = "gitlab-handbook-ja"
  production_branch = "main"

  r2_bucket_name = "gitlab-handbook-ja-images"
  # Allowed: apac, eeur, enam, weur, wnam, oc. Null for automatic.
  r2_location = "apac"

  # Custom domain settings — leave all three null to skip custom domain wiring
  # and only use the default *.pages.dev URL.
  zone_id       = null
  site_domain   = null
  images_domain = null

  # Pages Functions runtime
  compatibility_date  = "2025-09-01"
  compatibility_flags = ["nodejs_compat"]

  production_env_vars = merge(
    local.images_domain != null ? {
      PUBLIC_R2_BASE = { type = "plain_text", value = "https://${local.images_domain}" }
    } : {},
    local.site_domain != null ? {
      SITE_URL = { type = "plain_text", value = "https://${local.site_domain}" }
    } : {},
  )
}
