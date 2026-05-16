---
title: "GitLab の新しい Auth スタック"
status: ongoing
creation-date: "2025-02-17"
authors: [ "@maw", "@kamil", "@grzesiek" ]
coach: [ "@maw" ]
approvers: [ "@maw" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/new_auth_stack/
upstream_sha: 7970b7fb241c268e1af118c106ab79642da33ed0
translated_at: "2026-04-27T13:58:39Z"
translator: claude
stale: false
lastmod: "2025-07-11T12:55:22+02:00"
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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/maw" class="text-blue-600 hover:underline">@maw</a>, <a href="https://gitlab.com/kamil" class="text-blue-600 hover:underline">@kamil</a>, <a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/maw" class="text-blue-600 hover:underline">@maw</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/maw" class="text-blue-600 hover:underline">@maw</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300">2025-02-17</td>
</tr>
</tbody>
</table>
</div>


## サマリー

GitLab の認証・認可コードはこれまで 10 年以上にわたって有機的に進化してきました。認証・認可メカニズムのほとんどは GitLab Rails モノリスの中に存在しており、毎日何百人ものソフトウェアエンジニアがプロジェクトにコントリビュートしています。その結果、コードの複雑さが増大しています:

1. 認証に使用される 10 種類以上の異なるトークンタイプが存在します。
1. ユーザーセッションを認証する 5 種類以上の異なる方法があります。
1. GitLab を ID プロバイダーとして使用する 3 種類以上の方法があります。
1. 私たちが構築した、密結合で複雑な Declarative Policies 言語を使用しています。
1. 認可ツールが頻繁なパフォーマンス関連インシデントを引き起こしています。
1. チームが独立して独自の認証方法を構築し続けています。

今日 GitLab は多くのお客様にとってミッションクリティカルなコンポーネントであり、インフラへのアクセス許可・拒否のために私たちの認証・認可メカニズムに依存しています。

上記の課題を踏まえ、**コアの認証・認可メカニズムを統合・集中化する** という単一の包括的な技術戦略に沿った 3 つのコア原則に従い、**GitLab Adaptive Trust Environment（GATE）** の構築に注力することを決定しました:

1. **ゼロトラスト**: 決して信頼せず、常に検証する。アクセスは検証されたアイデンティティ、コンテキスト、明示的なポリシーに基づいて付与されます。アプリケーションスタックのすべてのレベルで継続的に信頼を検証します。
1. **最小権限**: すべてのトークンと認証済みプリンシパルに対して、タスクを完了するために必要な最短の時間で最小限の必要な権限を付与します。
1. **アンビエントセキュリティ**: 認証、認可、継続的な検証は常に存在します。ほとんどのエンジニアとお客様はこの複雑さを扱う必要がありません: これは大部分が抽象化され、デフォルトで有効になっています。

**GATE** をどのように提供するかについてより明確にするために、お客様に価値イノベーションを届けるこの再設計を固定する 3 つの主要機能の構築に注力します:

1. **GitLab Workload Identity Federation**: Personal Access Token と長命のクレデンシャルへの依存を削減するために構築されます。
1. **GitLab CI でのアンビエントクレデンシャル**: CI ジョブでのトークン/クレデンシャル/キーの使用の必要性を大幅に削減します。
1. **すべての認証済みプリンシパルへのきめ細かいアクセス制御**: 機能セット全体のセキュリティポスチャを向上させます。

## 詳細

アーキテクチャ決定レジスターと詳細については、プライベートプロジェクトの **[New Auth Stack デザインドキュメント](https://gitlab.com/gitlab-org/architecture/auth-architecture/design-doc)** をご覧ください。

Issue とワークストリームを含む GitLab のメイン Epic は [GitLab での New Auth Stack の提供](https://gitlab.com/groups/gitlab-org/-/epics/17711) です。
