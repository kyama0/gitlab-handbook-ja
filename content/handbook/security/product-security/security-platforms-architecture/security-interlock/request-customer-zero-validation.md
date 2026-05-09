---
title: "Security に Customer Zero バリデーションをリクエストする"
description: "プロダクトマネージャーが機能開発ライフサイクル全体を通して GitLab の Security チームを Customer Zero として関与させるためのガイドライン。"
upstream_path: /handbook/security/product-security/security-platforms-architecture/security-interlock/request-customer-zero-validation/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
---

## Customer Zero の概要

Customer Zero バリデーションは、Product Security チームが新しいセキュリティ機能の最初の顧客として行動するプロセスです。私たちの仮説はシンプルです: **GitLab のセキュリティ機能を効果的に使うことができれば、私たちの顧客の多くも使うことができます。**

これらのリクエストを追跡する Issue ボードは [こちら](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engagements/product-security-requests/-/boards/9306316) で見つけることができます。

## リクエストタイプ {#request-types}

プロダクトマネージャーまたはエンジニアリングチームは、4 種類の異なるリクエストタイプを通じて、機能開発のさまざまなフェーズで Product Security チームと連携できます。コラボレーションを合理化するため、私たちは各タイプ用の特定の Issue テンプレートを作成しており、評価を開始するために必要な初期情報を提供するのに役立ちます。

### アイデア／優先順位バリデーション

**目的:** 提案されている機能が Product Security チームにとって真の問題を解決するかどうかを判断し、その相対的な優先度を理解すること。

**使用するタイミング:** 製品計画サイクルの早い段階で、コンセプトやアイデアはあるが、それが実際のセキュリティニーズに対処するかどうかをバリデートする必要があるとき。

**ベストプラクティス:**

- 要件開発に重要なリソースを投資する前に提出する
- ペインポイントを明確にする問題ステートメントを含める
- 初期コンセプトを再方向付けまたは再形成する可能性のあるフィードバックに対してオープンであること
- 私たちのフィードバックを使用して製品ロードマップの優先順位に反映する

**このタイプのリクエストを提出するには [こちら](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engagements/product-security-requests/-/issues/new?description_template=C0_Idea_Priority_Validation) をクリックしてください。**

### 要件収集

**目的:** その機能が私たちの日常業務にとって価値あるものになるよう、Product Security チームから詳細な要件を収集すること。

**使用するタイミング:** 機能アイデアが追求する価値があると検証された後で、特定のソリューションを設計する前。

**ベストプラクティス:**

- アイデアバリデーションの後、ソリューション設計の前に提出する
- 解決しようとしている問題に関する明確なコンテキストを提供する
- 想定されるユーザーとユースケースについて具体的に説明する
- 私たちのフィードバックを使用して、ソリューション設計が私たちのニーズに対応していることを確実にする

**このタイプのリクエストを提出するには [こちら](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engagements/product-security-requests/-/issues/new?description_template=C0_Requirements_Gathering) をクリックしてください。**

### ソリューションバリデーション

**目的:** 提案された設計と実装が Product Security チームの要件に対応し、私たちのワークフローに効果的に統合されることを確認すること。

**使用するタイミング:** ソリューションのアプローチを設計した後で、実装を開始する前。

**ベストプラクティス:**

- モックアップ、ワイヤーフレーム、またはユーザーエクスペリエンスの詳細な説明を含める
- 開発が始まる前に、私たちのフィードバックを使ってソリューションを洗練する

**このタイプのリクエストを提出するには [こちら](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engagements/product-security-requests/-/issues/new?description_template=C0_Solution_Validation) をクリックしてください。**

### 内部テスト

**目的:** 機能を実世界のシナリオでテストし、リリース前に機能性、ユーザビリティ、統合に関する問題を特定すること。

**使用するタイミング:** 実装後、公開リリース前で、機能が現実的なテストに十分対応できるほど開発が完了しているとき。

**ベストプラクティス:**

- 意味のあるテストのために機能が十分に開発されていることを確認する
- 明確なセットアップ手順とテストシナリオを提供する
- 予定されたリリース前にフィードバックを取り入れるための十分な時間を確保する
- 私たちのフィードバックを使って最終的な微調整を行い、リリースの準備状況を判定する

**このタイプのリクエストを提出するには [こちら](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engagements/product-security-requests/-/issues/new?description_template=C0_Internal_Testing) をクリックしてください。**

## タイムラインの期待値 {#timeline-expectations}

Product Security チームは、皆さまと提携して GitLab のセキュリティ機能を可能な限り最高のものにすることを楽しみにしています! すべてのリクエストにできるだけ早く対応するよう努めますが、応答タイムラインは以下のサービスレベル目標 (SLO) に従います。

- **次のマイルストーン開始の少なくとも 10 日前に受領したリクエスト**: 次のマイルストーン内でフィードバックを提供します
- **次のマイルストーン開始の 10 日前より後に受領したリクエスト**: 通常、応答は milestone+2 で提供されます

この事前通知により、最も徹底的で価値あるフィードバックを提供するために容量を割り当てることができます。重要な機能については、最良の協力的な結果を得るために、早めに、複数のリクエストタイプを通じて私たちと関わることをご検討ください。

## 覚えておくべきこと

私たちの仮説は、Product Security チームが GitLab のセキュリティ機能をうまく使えるなら、私たちの顧客も使えるということです。Customer Zero バリデーションは、その仮説をテストし、初日から完全で価値あるセキュリティ機能を提供する方法です。

## よくある質問

**Q: 機能開発のあらゆるフェーズで Product Security チームを関与させたい場合、その機能について 1 つの Issue を開くべきですか、それともリクエストタイプごとに 1 つの Issue を開くべきですか?**

**A:** 私たちは [リクエストタイプ](#request-types) ごとに 1 つの Issue を必要とします。それらをリンクすることは歓迎しますが、その理由は、製品開発ライフサイクル全体を通して計画が変わると予想されるからです。最新の情報に基づいて運用する必要があります。さらに、詳細レベルは時間の経過とともに増加するはずです (たとえば、内部テスト用のセットアップ手順は分かるはずですが、それより前にはほとんど分かりません)。
