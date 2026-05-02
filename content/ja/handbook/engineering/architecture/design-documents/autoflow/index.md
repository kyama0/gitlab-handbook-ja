---
title: "AutoFlow - 自動化のためのワークフロー"
status: proposed
creation-date: "2024-02-16"
authors: [ "@ash2k", "@ntepluhina", "@timofurrer" ]
coach: "@grzesiek"
approvers: [ "@nagyv-gitlab", "@nmezzopera" ]
owning-stage: "~devops::deploy"
participating-stages: [ "~devops::plan" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/autoflow/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
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
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">proposed</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ash2k" class="text-blue-600 hover:underline">@ash2k</a>, <a href="https://gitlab.com/ntepluhina" class="text-blue-600 hover:underline">@ntepluhina</a>, <a href="https://gitlab.com/timofurrer" class="text-blue-600 hover:underline">@timofurrer</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/nagyv-gitlab" class="text-blue-600 hover:underline">@nagyv-gitlab</a>, <a href="https://gitlab.com/nmezzopera" class="text-blue-600 hover:underline">@nmezzopera</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::deploy</span></td>
<td class="px-3 py-2 border border-gray-300">2024-02-16</td>
</tr>
</tbody>
</table>
</div>


GitLab AutoFlow を使用すると、DevSecOps ドメインオブジェクトと外部システム間の対話のワークフローをエンコードできます。

このデザインドキュメントは [AutoFlow design-doc プロジェクト](https://gitlab.com/gitlab-org/architecture/autoflow/design-doc) で公開されています。

## 関係者

<!-- vale gitlab.Spelling = NO -->

| 関係者            | 役割                       |
|-------------------|----------------------------|
| Grzegorz Bizon    | Distinguished Engineer     |
| Natalia Tepluhina | Principal Engineer         |
| Mikhail Mazurskiy | Staff Engineer             |
| Timo Furrer       | Senior Engineer            |

<!-- vale gitlab.Spelling = YES -->
