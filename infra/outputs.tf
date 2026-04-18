output "pages_project_name" {
  value       = cloudflare_pages_project.site.name
  description = "Cloudflare Pages project name."
}

output "pages_default_url" {
  value       = "https://${cloudflare_pages_project.site.subdomain}"
  description = "Default *.pages.dev URL."
}

output "site_url" {
  value       = local.site_domain != null ? "https://${local.site_domain}" : "https://${cloudflare_pages_project.site.subdomain}"
  description = "Public URL to feed into SITE_URL."
}

output "r2_bucket_name" {
  value       = cloudflare_r2_bucket.images.name
  description = "R2 bucket name for images."
}

output "images_base_url" {
  value       = local.images_domain != null ? "https://${local.images_domain}" : null
  description = "Public base URL for R2 images (null until images_domain is set)."
}
