---
title: "Google Cloud Platform インテグレーション"
status: ongoing
creation-date: "2023-10-26"
authors: [ "@sgoldstein" ]
coaches: ["@jessieay", "@grzesiek"]
approvers: ["@sgoldstein", "@jreporter"]
owning-stage: "~section::ops"
participating-stages: ["~devops::verify", "~devops::package", "~devops::govern"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/google_cloud_platform_integration/
upstream_sha: 33ef35e4327874fd4153c5606125f5de47ff7924
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">ongoing</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/sgoldstein" class="text-blue-600 hover:underline">@sgoldstein</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/jessieay" class="text-blue-600 hover:underline">@jessieay</a>, <a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/sgoldstein" class="text-blue-600 hover:underline">@sgoldstein</a>, <a href="https://gitlab.com/jreporter" class="text-blue-600 hover:underline">@jreporter</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~section::ops</span></td>
<td class="px-3 py-2 border border-gray-300">2023-10-26</td>
</tr>
</tbody>
</table>
</div>


GitLab と Google Cloud Platform（GCP）は補完的なツールを提供しており、[パートナーシップ](https://about.gitlab.com/blog/2023/08/29/gitlab-google-partnership-s3c/)を通じてインテグレーションを進めています。

この設計ドキュメントは現時点では公開されていません。全コンテンツは [GitLab 内部プロジェクト](https://gitlab.com/gitlab-org/architecture/gitlab-gcp-integration/design-doc)で閲覧可能です。

## 担当者

<!-- vale gitlab.Spelling = NO -->

| 担当者           | 役割 |
|-----------------|------|
| Sam Goldstein   | Director of Engineering、Engineering DRI |
| Grzegorz Bizon  | Distinguished Engineer - テクニカルリード |
| Jessie Young    | Principal Engineer |
| David Fernandez | Staff Engineer |
| Imre Farkas     | Staff Engineer |
| João Pereira    | Staff Engineer |
| Joe Burnett     | Staff Engineer |
| Tomasz Maczukin | Senior Engineer |

<!-- vale gitlab.Spelling = YES -->
