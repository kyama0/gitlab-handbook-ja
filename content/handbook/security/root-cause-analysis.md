---
title: "重大な脆弱性の根本原因分析"
upstream_path: /handbook/security/root-cause-analysis/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
---

## RCA とは何か?

根本原因分析 (Root Cause Analysis、RCA) は、最終的に Issue の根本問題を特定し、再発を防ぐためのプロセスです。[RCA についての詳細はこちら](/handbook/engineering/workflow/root-cause-analysis/) で学ぶことができます。

これを行うため、DRI とセキュリティおよび影響を受けるチーム (DRI が決定する) からのすべての関連ステークホルダーが、私たちの [RCA テンプレート](https://gitlab.com/gitlab-com/gl-security/rcas/-/blob/main/.gitlab/issue_templates/RCA.md) で定義された一連の質問とディスカッショントピックを体系的に進めていきます。

## RCA と症状の違いは何か?

脆弱性の根本原因と症状を区別することが重要です。例えば、システムのマルウェア侵害は根本問題の症状であり、それを解決して再度侵害されないようにする必要があります。根本原因は、問題が永続的に作成されるのを防ぐために、パッチを当てる必要のあるゴールデンイメージがあることかもしれません。フォローアップアクションアイテムは 3 つあるかもしれません: 1) ゴールデンイメージにパッチを当てる 2) すべての脆弱なシステムにパッチを当てる 3) パッチ適用手順がパッチサイクルのギャップに対処することを確認する。

## なぜ S1 脆弱性に対して RCA を行うのか?

将来同じような `~"severity::1"` Issue が繰り返されないように、過去の失敗から学ぶことが重要です。期待されているのは、根本問題を特定して対処するだけでなく、根本原因に関連する他の同様の攻撃ベクトルを発見することです。

## RCA の開始

`~"severity::1"` セキュリティ Issue が解決された後、[RCA](https://gitlab.com/gitlab-com/gl-security/rcas) プロジェクトで [RCA テンプレートを使用して Issue を開く](https://gitlab.com/gitlab-com/gl-security/rcas/-/issues/new?issuable_template=RCA) ことで RCA を開始する必要があります。

期日は自動的に 30 日後に設定されます。

特定の DRI が Issue に割り当てられる必要があります。デフォルトでは、これは技術的な文脈を最も理解しているインシデントに割り当てられたセキュリティエンジニアです。担当者と SIRT マネージャーが合意する限り、DRI は他の人でも構いません。DRI は技術的な文脈を理解できる人物である必要があります。DRI の役割は主に管理的なもので、責任は以下に説明されています。

DRI はインシデント Issue に正しいメタデータラベルを設定する責任もあります。

## RCA の進行

DRI は、他の人々に RCA への貢献を促し、インシデントに関与した関連 [製品グループ](/handbook/product/categories/) や会社の他の部分のステークホルダーに貢献の機会が与えられていることを確認する責任があります。

DRI は、チームが特定した是正措置の Issue を作成し、それらのフォローアップ Issue に DRI を割り当てる責任があります。DRI は、どの是正措置が Issue を作成するのに十分に具体的、測定可能、達成可能、および関連性があるかについて決定を下す権限があります。チームメンバーから提起されたすべての Issue がこの基準を満たすとは限らないため、DRI は同時に却下した理由を説明しながら是正措置を却下する権限もあります。リーダーシップが潜在的な対立の解決を支援します。
DRI がすべてのアイデアを思いつく必要はないことに注意してください! これは主に管理的なタスクです。

RCA の DRI は、以下のタイムフレームを目指すべきです:

- T+2 週間: 関与した人々に貢献の機会が与えられている。
- T+4 週間:
  - 特定されたすべての是正措置に Issue が作成され、DRI が割り当てられている
  - RCA Issue の説明が整理された読みやすい状態になっている

## RCA はいつ完了したと見なされるか?

RCA は、RCA Issue 内のタスクが完了とマークされ、Issue がクローズされたときに完了したと見なされます。これは、脆弱性の根本原因がよく理解されており、同様の脆弱性が再発する可能性を減らすための前進する道があることを意味します。例えば、これは [カスタム SAST ルール](https://docs.gitlab.com/ee/user/application_security/sast/#customize-rulesets)、脆弱性クラスを総合的に対処する新しいセキュリティエンハンスメント、セキュアコーディングトレーニング、脅威モデル、より安全なアプリケーション設定などである可能性があります。

是正措置の Issue は `~"corrective action"` でラベル付けでき、[重大度に応じた SLO が適用](/handbook/product-development/how-we-work/issue-triage/#severity-slos) されます。

## 過去の RCA はどこで見つけられるか?

[rcas](https://gitlab.com/gitlab-com/gl-security/rcas/-/issues?sort=created_date&state=closed) プロジェクトのクローズ済み Issue で確認できます。

## RCA プロセスをどのように改善できるか?

このページを更新する MR を開き、[RCA テンプレート](https://gitlab.com/gitlab-com/gl-security/rcas/-/blob/main/.gitlab/issue_templates/RCA.md) を更新してください。

## RCA メタデータ

RCA プロセスを準備および支援するため、実際の RCA プロセスが開始される前に、DRI が GitLab ラベルを使用してそれぞれのインシデント Issue に一連のメタデータを適用する必要があります。このメタデータは、事前に定義されたスコープ付きラベルのセットに基づいています:

- `~Incident::Category::*`
- `~Incident::Classification::*`
- `~Incident::Organization::*`
- `~Incident::Origin::*`
- `~Incident::Source::*`

特定のインシデントについて RCA が必要であるという決定が下されると、DRI によってインシデント Issue に `~RCA::todo` ラベルが適用されるべきです。
`~severity::1` Issue については常に RCA が必要であり、それより低い重大度の他の Issue については、RCA の必要性はケースバイケースで決定されます。

`~RCA::todo` と共に、`~Label Review::needed` ラベルが Issue に適用されます。RCA の DRI は、スコープ付き `Incident::*` ラベルが正確かどうかをレビューし、必要に応じて調整する必要があります。すべてのラベルがレビューされ調整されたら、DRI が `~Label Review::done` ラベルを適用する必要があります。

ラベルがレビューされ正確に設定されたら、RCA Issue を [作成](https://gitlab.com/gitlab-com/gl-security/rcas/-/issues/new?issuable_template=RCA) できます。
RCA Issue がクローズされると、`~RCA::todo` ラベルを `~RCA::done` ラベルに置き換えることができます。

## カテゴリラベル

広すぎず、狭すぎない `~Incident::Category::*` ラベルのリストをインシデントに対して持つことで、私たちの問題領域に関する有意義なデータを集められます。その後の根本原因分析では、個々の Issue にどう取り組むかを示すことができますが、Issue のカテゴリ全体を効果的に緩和することを目指して一般化されるべきです。これは、比較的短い時間枠で同じカテゴリに複数の Issue があるケースで、共同 RCA を通じて行うこともあります。
