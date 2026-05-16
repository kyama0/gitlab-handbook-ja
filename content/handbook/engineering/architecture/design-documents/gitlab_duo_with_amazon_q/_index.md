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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/sgoldstein" class="text-blue-600 hover:underline">@sgoldstein</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~section::ops</span></td>
<td class="px-3 py-2 border border-gray-300">2024-08-28</td>
</tr>
</tbody>
</table>
</div>


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
