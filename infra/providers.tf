terraform {
  required_version = "1.14.4"

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "5.26.0"
    }
  }
}

provider "cloudflare" {}
