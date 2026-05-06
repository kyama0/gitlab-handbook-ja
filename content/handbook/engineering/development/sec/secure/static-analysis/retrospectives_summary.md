---
title: "レトロスペクティブサマリー"
upstream_path: /handbook/engineering/development/sec/secure/static-analysis/retrospectives_summary/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T07:31:38Z"
translator: claude
stale: false
---

## レトロスペクティブ

このページには、Secure::static analysis グループが実施したレトロスペクティブのエグゼクティブサマリーが掲載されています。これらのサマリーの目的は、レトロスペクティブのプロセスで得られた教訓を外部に共有することです。

社内のレトロスペクティブドキュメントへのアクセスは、チームと直接の関係者のみに限定されています。

### 17.0

このマイルストーンでは、各種 SAST アナライザーから semgrep ベースのアナライザーへの機能の[非推奨化](https://docs.gitlab.com/ee/update/deprecations.html#sast-analyzer-coverage-changing-in-gitlab-170)と移行に焦点を当てました。

このマイルストーンでは、以下の懸念事項が（順不同で）提起されました:

1. マイルストーンの最終段階で失敗した QA プロセスへの認識不足が混乱を招いた。

1. sast-rules と semgrep のペアのリリースプロセスが煩雑であり、効率化が必要である。

1. 実装計画がマイルストーン中に更新されておらず、レビュープロセスで不必要な困難を引き起こした。

議論の中で提起された具体的な改善策:

1. semgrep と sast-rules のリリースの複雑さを軽減するための[メンテナンスタスク](https://gitlab.com/gitlab-org/gitlab/-/issues/440373)を実施する。

1. 実装計画に対して厳格なレビュープロセスを適用し、[MVC 原則](/handbook/product/product-principles/#the-minimal-valuable-change-mvc) をより頻繁に参照する。

### 17.1

このマイルストーンでは、[IDE での SAST](https://gitlab.com/groups/gitlab-org/-/epics/13753) とさまざまなメンテナンスタスクに焦点を当てました。レトロスペクティブの議論では、以下の点が提起されました:

1. 週次チームミーティングの形式が非効率である。2 回目のミーティングは 1 回目と同じ議論を繰り返すことが多い。これに対処するため、ミーティングの形式を変更し、次のタイムゾーンでさらに議論が必要な「キャリーオーバー」アイテムを含めることにした。それ以外のアイテムはすべて読み取り専用としてマークされる。

1. 脆弱性の処理に関するポリシーが不明確である。これを改善するため、必要な手順を詳述した[ランブック](/handbook/engineering/development/sec/secure/static-analysis/runbooks)を作成する。

### 17.2-17.3

これらのマイルストーンでは、チームは IDE での SAST の作業を継続しました。レトロスペクティブは 1 つの主要な項目に焦点を当てました:

1. ブロッカーをどのように提起し、どのように対処すべきかについて議論しました。状況をより適切に反映できるよう、スタンダップの形式をより簡潔にし、引き続き状況を監視することにしました。
