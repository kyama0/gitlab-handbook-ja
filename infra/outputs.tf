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
  value       = local.images_base_url
  description = "Public base URL for R2 images. Custom domain when set, otherwise the bucket's managed r2.dev subdomain. Feed into the GitHub Actions `PUBLIC_R2_BASE` repo variable."
}
