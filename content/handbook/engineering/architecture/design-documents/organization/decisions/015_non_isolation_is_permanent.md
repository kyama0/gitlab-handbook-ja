---
owning-stage: "~devops::tenant scale"
title: 'Organizations ADR 015: 非隔離は恒久的な Organization の状態'
description: "非隔離の Organization は、すべての Organization が離脱を期待される段階ではなく、有効で無期限の状態であることを確立する ADR。"
creation-date: "2026-07-28"
authors: [ "@alexpooley" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/decisions/015_non_isolation_is_permanent/
upstream_sha: c75ccd81af7d76262c8cb188bf7e7e2a7f838894
lastmod: "2026-07-28T12:27:01+08:00"
translated_at: "2026-07-31T08:19:21+09:00"
translator: codex
stale: false
---

## 背景

[Organization Isolation](../isolation.md)は、すべての Organization が最終的に隔離されることを前提としています。また、[GitLab.com 上の非隔離 Organization](008_non_isolated_organizations_gitlab_com.md)は、非隔離を隔離に至るまでの出発点としてのみ扱います。非隔離が一時的なものか、有効で恒久的な結果かは、これまで曖昧でした。この ADR はそれを明確にします。

## 決定

非隔離の Organization は、恒久的で有効な状態です。Organization は隔離を必須とされることはありません。隔離は、妥当な場合に Organization の所有者が選択するものであり、すべての Organization が到達することを期待される到達点ではありません。

## 結果

1. すべての Organization データが隔離されるという [Organization Isolation](../isolation.md) の冒頭の主張は、この ADR の一部として修正されます。その下にある段階的なロールアウトは、すべての Organization が最終的に隔離されるかのように、引き続きエンジニアリングのマイルストーンを説明しています。これを改訂することは別の作業です。
1. 非隔離の Organization は、隔離されるまでだけでなく、レガシー Cell に無期限に留まることができます。今後予定されている Organization スコープのリクエストコンテキストのブループリントでは、これが Cell の配置にとって何を意味するかを詳細に扱います。
1. 複数 Organization のメンバーシップは、進行中の移行による一時的な副作用ではありません。非隔離のままでいるあらゆる Organization にとって、恒久的な機能です。

## 検討した代替案

1. **非隔離を、すべての Organization が最終的に隔離される一時的な移行状態として扱う** — 却下しました。隔離とは、データが境界を越えないことを意味するため、隔離された Organization は他の Organization との相互運用性をすべて放棄します。現在、多くの Organization がその相互運用性に依存しています。それにもかかわらずすべての Organization を隔離すると、それらの実際のワークフローが壊れます。そうなると仮定することは、まだ存在しない代替の相互運用機能を仮定することになります。「Org Connect」と呼ばれることもある 1 つのアイデアがいつかそのギャップを埋められるかもしれませんが、まだ実現にはほど遠い状況です。
