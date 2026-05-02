---
title: "CI/CD カタログ"
status: implemented
creation-date: "2022-09-14"
authors: [ "@ayufan", "@fabiopitino", "@grzesiek" ]
coach: [ "@ayufan", "@grzesiek" ]
approvers: [ "@dhershkovitch", "@marknuzzo" ]
owning-stage: "~devops::verify"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/ci_pipeline_components/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T10:00:00Z"
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
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">implemented</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ayufan" class="text-blue-600 hover:underline">@ayufan</a>, <a href="https://gitlab.com/fabiopitino" class="text-blue-600 hover:underline">@fabiopitino</a>, <a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ayufan" class="text-blue-600 hover:underline">@ayufan</a>, <a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/dhershkovitch" class="text-blue-600 hover:underline">@dhershkovitch</a>, <a href="https://gitlab.com/marknuzzo" class="text-blue-600 hover:underline">@marknuzzo</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::verify</span></td>
<td class="px-3 py-2 border border-gray-300">2022-09-14</td>
</tr>
</tbody>
</table>
</div>


## 概要

CI/CD パイプラインコンポーネントカタログの目的は、パイプライン設定の再利用をより簡単かつ効率的にすることです。パイプライン構成要素の発見、理解、再利用方法の習得を支援することで、より合理化されたエクスペリエンスを提供します。CI/CD パイプラインコンポーネントカタログは、ユーザーがパイプライン構成要素でコラボレーションするためのフレームワークを提供し、それらを継続的に進化・改善できるようにします。

この設計ドキュメントは、CI/CD パイプラインコンポーネントのカタログを構築するためのアーキテクチャガイドラインを定義するものでした。実装が完了したため、以下に公式ユーザードキュメントへのリンクとドキュメントの過去の内容を記載しています。

この機能の詳細については、[CI/CD コンポーネントのドキュメント](https://docs.gitlab.com/ee/ci/components/index.html)をご覧ください。

ブループリントファイルのアーカイブバージョンは[こちら](https://gitlab.com/gitlab-org/gitlab/-/blob/a22b7be24f372feec596bcf71ebaf07ea0df40cf/doc/architecture/blueprints/ci_pipeline_components/index.md)から参照できます。

## 担当者

アーキテクチャ設計:

<!-- vale gitlab.Spelling = NO -->

| 役割                           | 担当者 |
|--------------------------------|--------|
| 著者                           | Fabio Pitino |
| エンジニアリングリーダー       | Cheryl Li, Mark Nuzzo |
| プロダクトマネージャー         | Dov Hershkovitch |
| アーキテクチャ進化コーチ       | Kamil Trzciński, Grzegorz Bizon |

DRI:

| 役割        | 担当者 |
|-------------|--------|
| プロダクト  | Dov Hershkovitch |
| エンジニアリング | Avielle Wolfe, Laura Montemayor |
| UX          | Sunjung Park |

<!-- vale gitlab.Spelling = YES -->
