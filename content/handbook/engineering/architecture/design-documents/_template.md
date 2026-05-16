---
# This is the title of your design document. Keep it short, simple, and descriptive. A
# good title can help communicate what the design document is and should be considered
# as part of any review.
title: 設計ドキュメントタイトル
status: proposed
creation-date: "yyyy-mm-dd"
authors: [ "@username" ]
coaches: [ "@username" ]
dris: [ "@product-manager", "@engineering-manager" ]
owning-stage: "~devops::<stage>"
participating-stages: []
# Hides this page in the left sidebar. Recommended so we don't pollute it.
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/_template/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---

<!--
始める前に:

- このファイルをサブディレクトリにコピーして `_index.md` という名前にすると、
  設計ドキュメント一覧に表示されます。
- 記入したセクションのコメントブロックは削除してください。
  ドキュメントがレビュー可能になった時点で、これらのコメントブロックは
  すべて削除されているべきです。

ドキュメントの作成を始めるにあたり、このテンプレートを使うことで、初期段階で
何をドキュメント化すべきかの参考にできます。提案を進めるにつれて、内容は
変化・進化していきます。テンプレートの内容に縛られる必要はありません。
ドキュメントに何を入れるべきかについて良いアイデアがあるなら、テンプレートを
無視して構いません。ただし、まだ何を入れるべきか分からない場合は、
このテンプレートが役に立つかもしれません。

- **このファイルを可能な限り埋めてください。** 最低限、「Summary」と
  「Motivation」セクションを埋めるべきです。これらは簡潔で構わず、
  そのイニシアチブが既にプロダクトのロードマップに載っているなら、
  Issue や Epic の説明のコピーで構いません。
- **このドキュメントの MR を作成してください。** Architecture Evolution
  Coach（つまり Principal+ エンジニア）にアサインしてください。
- **早めにマージしてイテレーションしてください。** 特定の詳細にこだわらず、
  ドキュメントのゴールを明確化して素早くマージすることを目指してください。
  そのためには、まず高レベルのセクションだけを書き、続く MR で詳細を
  少しずつ埋めていくのがベストです。

ドキュメントがマージされたからといって、完成または承認されたわけでは
ありません。すべてのドキュメントは作業中のドキュメントであり、いつでも
変更される可能性があります。

ドキュメントを編集する際は、議論をフォーカスするために、密度の高い、
単一トピックの MR を目指してください。既にドキュメントに書かれている内容に
同意できない場合は、変更案を提示する新しい MR を開いてください。

ドキュメントに含めるべき新しい詳細がある場合は、ドキュメントを編集してください。
機能が「実装済み」になったら、大きな変更には新しいブループリントが必要です。

最新の指示の正規な置き場（およびこのファイルの likely な出典）は
[content/handbook/engineering/architecture/design-documents/_template.md](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/main/content/handbook/engineering/architecture/design-documents/_template.md)
です。

使用できるドキュメントステータス:

- "proposed"
- "accepted"
- "ongoing"
- "implemented"
- "postponed"
- "rejected"

-->

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

<!-- This renders the design document header on the detail page, so don't remove it-->

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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/username" class="text-blue-600 hover:underline">@username</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/username" class="text-blue-600 hover:underline">@username</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/product-manager" class="text-blue-600 hover:underline">@product-manager</a>, <a href="https://gitlab.com/engineering-manager" class="text-blue-600 hover:underline">@engineering-manager</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::<stage></span></td>
<td class="px-3 py-2 border border-gray-300">yyyy-mm-dd</td>
</tr>
</tbody>
</table>
</div>


<!--
h1 見出しは追加しないでください。フロントマターの title 属性から自動的に追加されます。

長いページの場合は、目次の作成を検討してください。
-->

## Summary

<!--
このセクションは非常に重要です。なぜなら、しばしばチームメンバーがこの
セクションだけを読むからです。私たちはこれを「エグゼクティブサマリー」と
呼ぶこともあります。エグゼクティブは通常、こうしたドキュメント全体を
読む時間がないからです。誰でも内容を理解できるような書き方を心がけて
ください。ここでの読者はエグゼクティブ、プロダクトマネージャー、
エンジニア、より広いコミュニティメンバーなど、すべての人です。

良いサマリーは、おそらく少なくとも 1 段落の長さがあります。
-->

## Motivation

<!--
このセクションは、ドキュメントのモチベーション、ゴール、非ゴールを
明示的に列挙するためのものです。なぜこの変更が重要なのか、すべての
機会と、ユーザーへのメリットを説明してください。

モチベーションセクションでは、より広い GitLab コミュニティ内での
ドキュメントへの関心を示す Issue へのリンクを任意で提供できます。
GitLab が提供する機能に明確なギャップがあることを示している場合、
競合製品やサービスのドキュメントへのリンクも推奨されます。

具体的な提案については、ゴールと非ゴールを明示的にレイアウトすることを
推奨します。ただし、このセクションは問題提起、課題、機会という観点から
枠組みづけることもできます。後者は、問題が明確に定義されていない、
あるいは設計の詳細がまだ確立されていない場合に、より適切なフレームワーク
となるかもしれません。
-->

### Goals

<!--
ドキュメントの具体的なゴール / 機会を列挙してください。

- 何を達成しようとしているか?
- これが成功したことをどうやって知るか?
- 他にどのようなより無形の機会があるか?
-->

### Non-Goals

<!--
非ゴールを列挙することで、議論をフォーカスし、進捗を生み出すのに役立ちます。
このセクションは任意です。

- このドキュメントの対象外は何か?
-->

## Proposal

<!--
ここでは、提案の具体的内容に踏み込みますが、シンプルに保ってください！
レビュアーがあなたの提案内容を正確に理解できる程度の詳細は必要ですが、
API 設計や実装などは含めるべきではありません。下の「Design Details」
セクションが、本格的な詳細を扱う場所です。

提案された解決策の長所と短所を、代替案の長所と短所と比較できるように
含めることを検討するとよいかもしれません。
-->

## Design and implementation details

<!--
このセクションには、変更の詳細を理解できるだけの情報が含まれている
べきです。これには API 仕様（必須ではない場合もあります）や、
コードスニペットさえ含まれることがあります。提案がどのように実装されるか
について曖昧な点があるなら、ここで議論する場所です。

ドキュメントにどれだけの実装詳細を含めるべきか分からない場合の
経験則は、人々が提案を理解するのに十分なコンテキストを提供することです。
実装を進めるにつれて、ドキュメントにより多くの実装詳細を追加する必要が
あるかもしれません。それらは、途中で行われた重要な技術的決定にとって
価値のあるコンテキストになるからです。ドキュメントは、こうした技術的決定の
登録簿でもあります。技術的決定が下される前に追加のコンテキストが必要な
場合は、おそらくそのコンテキストをドキュメントに記載すべきです。
著者とメンテナーの間でマージリクエストの中で下せるような小さな
技術的決定なら、おそらくここに記載する必要はないでしょう。技術的決定が
持つインパクトも、もう一つの有用な情報です。技術的決定が非常に
インパクトの大きいものなら、関連する実装詳細とともに文書化することが
推奨されます。

ワークフロー図やその他の関連画像を含めることが役立つ場合があります。
GitLab flavored markdown で書かれた図が望ましいです。それが現実的でない
場合、画像は提案の `index.md` と同じディレクトリ内の `images/` に
配置してください。
-->

## Alternative Solutions

<!--
代替の解決策や検討した経路の一覧を含めることは良いアイデアかもしれません
が、必須ではありません。各代替案 / 経路について長所と短所を含めてください。

「何もしない」とその長所・短所もリストに含めてかまいません。
-->
