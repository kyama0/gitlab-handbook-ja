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
