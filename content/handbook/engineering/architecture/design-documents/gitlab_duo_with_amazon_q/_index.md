---
title: "GitLab Duo with Amazon Q"
status: ongoing
creation-date: "2024-08-28"
authors: [ "@grzesiek" ]
coaches: []
approvers: ["@sgoldstein"]
owning-stage: "~section::ops"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_duo_with_amazon_q/
upstream_sha: 9e852ac812142230dfe1e1db31be2862cd857cfd
translated_at: "2026-04-27T10:36:33Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---


{{< engineering/design-document-header >}}


Amazon Q、GitLab Dedicated、Duo は、バンドルオファリングによって優れた開発者体験を実現するためにパートナーシップを結んでいます。

この設計ドキュメントは
[https://gitlab.com/gitlab-org/architecture/gitlab-duo-with-amazon-q/design-doc](https://gitlab.com/gitlab-org/architecture/gitlab-duo-with-amazon-q/design-doc) に配置されています。

## 担当者

<!-- vale gitlab.Spelling = NO -->

| 担当者 | 役割 |
|-----------------|------|
| Sam Goldstein   | エンジニアリングディレクター、エンジニアリング DRI |
| Grzegorz Bizon  | ディスティングイッシュトエンジニア - テクニカルリード |
| Stan Hu         | エンジニアリングフェロー |
| Jessie Young    | プリンシパルエンジニア |
| Imre Farkas     | スタッフバックエンドエンジニア |

<!-- vale gitlab.Spelling = YES -->
