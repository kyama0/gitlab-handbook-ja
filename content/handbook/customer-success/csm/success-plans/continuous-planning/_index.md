---
title: "継続的プランニング（Continuous Planning）"
description: "継続的プランニングは、顧客コラボレーショングループで管理されている情報をもとに、GitLab アカウントチームが顧客向けサクセスプランを構築する際の時間を削減するために設計されたツールです。誰でもこのツールを使って、GitLab プロジェクト内で進行中のイニシアチブの更新を提示できます。"
upstream_path: /handbook/customer-success/csm/success-plans/continuous-planning/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T01:56:09Z"
translator: claude
stale: false
lastmod: "2025-03-04T18:26:58-06:00"
---

CSM 関連のハンドブックページについては、[CSM ハンドブックのホームページ](/handbook/customer-success/csm/)を参照してください。

---

## 哲学

エグゼクティブ向けの ROI 進捗・インパクト報告書や類似のプレゼンテーションを準備する際、プロジェクトの成功や進捗を反映したスライドベースのプレゼンテーションを作成することが一般的です。従来、このプロセスではさまざまなソースから手動で情報を収集する必要がありました。ただし、GitLab を使ってプロジェクトの進捗を追跡している場合、これらのグループ内でエピックや Issue として主要な目標やマイルストーンをすでに文書化しているかもしれません。この文書は日々の活動の中で積極的にメンテナンスされているため、非常に価値があります。

しかし、これらのソースから情報を抽出してスライドデッキに組み込む作業は依然として手動プロセスです — ただし、そうである必要はありません。顧客コラボレーショングループをメンテナンスしながら、エピックや Issue の設定に関していくつかの標準的なガイドラインに従うと想像してください。たとえば、主要な目標を表すエピックに標準化されたラベルを割り当てたり、構造化されたテンプレートを使って説明を書いたりします。このアプローチにより情報が機械読み取り可能になり、スライドデッキ作成プロセスの少なくとも一部を自動化できるようになり、効率が向上します。

できるだけ多くのプロセスを自動化し、スケジュールされた CI/CD パイプラインを使って定期的に自動化を実行することで、私たちが __継続的プランニング__ と呼ぶものが実現します。このアプローチは時間を節約し、プレゼンテーション資産が常に最新の状態でステークホルダーがいつでも利用できることを保証し、手動更新から継続的な生成へとフォーカスをシフトします。

[サクセスプランの例](https://example-company-success-plan-gitlab-sales-contin-3ced2975f21bc1.gitlab.io/)を参照してください。

詳細については [継続的プランニングのオープンソースプロジェクト](https://gitlab.com/gitlab-sales-continuous-planning)を参照してください。

## 方向性とご協力について

👋 これは、Customer Success Management（CSM）チームが顧客向けサクセスプランを作成する標準化のために作成したツール、[継続的プランニング](https://gitlab.com/gitlab-sales-continuous-planning)の戦略です。

この戦略は進行中の作業であり、誰もが貢献できます。[Issue](https://gitlab.com/groups/gitlab-sales-continuous-planning/-/issues) や [エピック](https://gitlab.com/groups/gitlab-sales-continuous-planning/-/epics)に直接フィードバックを共有することが、私たちの戦略とビジョンへの最善の貢献方法です。

## 概要

__継続的プランニング__ は、GitLab グループやプロジェクトからの情報を活用してプレゼンテーション資料の作成を自動化することに焦点を当てています。CSM が顧客の目標とイニシアチブを文書化する方法を標準化し、CI/CD パイプラインと GraphQL を活用することで、これらの資料が最新の状態に保たれ、必要とする人が誰でも簡単にアクセスできるようにしています。

## 最近完了したこと

- [Success Plan Viewer](https://success-plan-viewer-c27524.gitlab.io/group)（非公開）の実装。これは GitLab [account-management](https://gitlab.com/gitlab-com/account-management) サブグループ内のすべてのサクセスプランを 1 か所に収集するクエリを実行します。これにより、マネージャーや他のチームメンバーが顧客の関連するサクセスプランをすばやく見つけられるようになりました。

- [サクセスプランデータ収集の効率を改善し](https://gitlab.com/groups/gitlab-sales-continuous-planning/-/epics/5)、パイプラインの実行時間を 60% 削減しました。

- 継続的プランニングを EMEA の CSM に展開しました。

- [継続的プランニング トリアージ](https://gitlab.com/gitlab-com/account-management/continuous-planning-triage)（非公開）ボットを作成しました。このボットは AI 推論に基づいてユースケースラベルを自動追加し、より良い目標の成功基準のための推奨事項を提供し、期限超過、DRI 未割り当てなどの事項について CSM に通知し、サクセスプランを最新かつ実行可能な状態に保ちます。

## 現在取り組んでいること

詳細については[イシューボード](https://gitlab.com/groups/gitlab-sales-continuous-planning/-/boards)で現在進行中のすべての内容を確認できます。

- 継続的プランニングに関連する更新（[SP Viewer](https://success-plan-viewer-c27524.gitlab.io/group) や [Blueprint](https://gitlab.com/gitlab-com/account-management/emea/continuous-planning-and-success-plan-blueprint) を含む）を文書化するための[リリースノートの自動化](https://gitlab.com/gitlab-sales-continuous-planning/gitlab-profile/-/issues/21)を検討中です。

- 更新されたサクセスプランの例を含む良い状態のドキュメントを作成中です。ベストプラクティス、FAQ、およびサクセスプランの理由に関する顧客向け資料を含みます。

- GLQL を使用して、CSM がコラボレーションプロジェクトのウィキで顧客機能リクエストを追跡する方法の標準化。

- サクセスプランデータの Gainsight への統合に取り組んでいます。

## 次のロードマップ

- Q1 FY26 の OKR はまもなく公開予定です。

## 将来の構想

- 継続的プランニングの使用を CSM 以外の GitLab ビジネスユニットや顧客にも拡大したいと考えています。たとえば、プロダクトマネージャーは継続的プランニングを使用してグループ方向性ページの「最近完了したこと」や「現在取り組んでいること」セクションを更新できます。PS チームは顧客への更新をハイライトするために使用できます。
