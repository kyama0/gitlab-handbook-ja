---
title: "Customer Success Engineering"
description: "Customer Success Engineering（CSE）チームの業務、3 つの CSE 支援モデル、アカウントチームとの連携方法を説明します。"
upstream_path: /handbook/customer-experience/csm/segment/cse/
upstream_sha: 2dbfc49e47c784740ced3e2c617530f365412492
lastmod: "2026-10-09T17:05:37Z"
translated_at: "2026-10-12T00:04:07+00:00"
translator: codex
stale: false
---

Customer Success Engineers（CSE）は GitLab の **On-Demand Success ティア**を提供し、技術的な製品専門知識と
ベストプラクティスのガイダンスを GitLab の顧客に届けます。CSE は多数の顧客に対応し、専任の
Customer Success Manager（CSM）や Customer Success Architect（CSA）がいない顧客に個別のエンゲージメントとオンボーディングを提供するとともに、
誰もが参加できるウェビナーやハンズオンラボを開催します。

その他の Customer Success 関連ページについては、[CSM ハンドブックホームページ](/handbook/customer-experience/csm/)をご覧ください。

## CSE の業務 {#what-a-cse-does}

CSE は深い技術的専門知識を持って顧客に対応し、特定の問題を解決したり、特定の知識の不足を補ったりして、
顧客が以前よりも十分に備えた状態でアカウントチームに引き継ぎます。CSE は次の役割を担います。

- **技術に注力します。** CSE が提供する価値は、製品の専門知識、導入のガイダンス、技術的リスクの
  早期把握です。商業戦略と契約更新は引き続き Account Executive（AE）と Renewals Manager（RM）が担当します。
- **Assigned モデルでは指名された窓口になります。** このモデルでは、CSE がアカウントの指名された技術窓口となり、
  顧客との継続的な関係を維持します。商業戦略と契約更新は引き続き AE と RM が担当します。
- **支援範囲を限定します。** 1 件のエンゲージメントで 1 つのトピックを扱い、通常は 1 〜 3 回のやり取りで対応します。CSE は
  エグゼクティブビジネスレビュー（EBR）や四半期ビジネスレビュー（QBR）を実施せず、サクセスプランの責任者にもなりません。
- **多数の顧客に対応します。** 1 人の CSE が多くの顧客を担当するため、支援は規模を拡大できるように設計されています。焦点を絞った再現可能な
  エンゲージメント、支援が最も必要な箇所を把握するための使用状況データ、そして個別対応に加えて多数の顧客向けに実施する
  ウェビナーやラボを活用します。
- **アカウントチームの一員として働きます。** CSE は AE、RM、Solutions Architect（SA）に代わるのではなく、協力して取り組みます。

### CSE と CSM の違い {#how-cse-differs-from-csm}

CSM は、定期的なやり取り、サクセスプラン、ビジネスレビューを通じて、長期にわたって顧客との関係を
構築し維持します。このような手厚い支援は、GitLab の有料 [Success Tier](/handbook/customer-experience/success-services/)に含まれます。

- **Essentials:** 導入、サクセスプランニング、契約更新戦略を担当する
  指名された [CSM](/handbook/customer-experience/csm/)。
- **Advanced:** 高度な技術イネーブルメントと
  Accelerator プログラムを担当する指名された [CSA](/handbook/customer-experience/csm/segment/csa/)。
- **Signature:** 指名された CSA に加えて、
  [Assigned Support Engineer（ASE）](/handbook/support/enhanced-support-offerings/offering-assigned-support-engineer/)が
  最高水準のきめ細かなサポートを提供します。

CSE の支援は顧客のサブスクリプションに含まれ、Success Tier に代わるものではありません。顧客が
継続的な助言、定期的なケイデンスコール、ビジネスレビューを希望する場合、CSE は Success Tier について話し合う案件として
AE と RM に知らせます。

## 3 つの CSE 支援モデル {#the-three-cse-motions}

CSE は 3 つの支援モデルで顧客を支援します。

| | [Assigned](/handbook/customer-experience/csm/segment/cse/cse-assigned/) | [Pooled](/handbook/customer-experience/csm/segment/cse/pooled/) | [オンボーディング（First Order）](/handbook/customer-experience/csm/segment/cse/customer-onboarding/) |
| --- | --- | --- | --- |
| **対象顧客** | CSM または CSA が付いていない、対象条件を満たすアカウント | CSM または CSA が付いていない、対象条件を満たすアカウントにリクエストに応じて対応 | 対象条件を満たす初年度の新規顧客 |
| **開始方法** | リクエスト不要で、先回りして対応 | アカウントチームが CSE をリクエスト | 初回購入の成約時にウェルカムメールを送信し、顧客がキックオフを予約 |
| **関係性** | アカウントごとに指名された CSE | 共有チームのうち次に対応可能な CSE | 初年度を通じて CSE が対応 |
| **頻度** | 四半期ごとのヘルス評価と、四半期に少なくとも 1 回の顧客との接点 | リクエストごと | キックオフ後、30 日、90 日、6 か月、9 か月、12 か月時点で状況確認 |
| **対応方式** | プロアクティブ | リアクティブ | プロアクティブ |

3 つの支援モデルに加え、チームは[ウェビナーとハンズオンラボ](/handbook/customer-experience/csm/segment/cse/webinars-and-labs/)の開催にも参加します。

Assigned は以前 CSE+ と呼ばれ、Pooled は以前 Pool またはケースベースの支援モデルと呼ばれていました。「First Order」と「オンボーディング」は同じ支援モデルを指します。

## Customer Experience における CSE の位置付け {#where-cse-fits-in-customer-experience}

CSE は GitLab の Customer Experience（CX）組織に属します。GitLab の One CX モデルでは、顧客価値を
中心に据え、顧客向けの活動を、競合するのではなく連携する 4 つの領域に分けています。

- **Customer Success（CSM と CSA）:** 有料 Success Tier を利用する顧客に対し、導入、消費、リスク低減を
  プロアクティブに支援します。
- **Scale（CSE と Digital Success）:** 多数の顧客に対し、導入、消費、リスク低減を技術面から必要なときに支援します。CSE チームに加え、すべての顧客向けに
  無料のセルフサービス型イネーブルメントを提供します。
- **Professional Services と Education:** 移行、実装、講師主導のトレーニングなど、
  有料の実作業によるサービスを提供します。
- **Renewals:** RM が責任を持ち、顧客維持と契約ライフサイクルを担当します。

## アカウントチームとの連携 {#working-with-the-account-team}

以下の DCI マトリクスは、顧客ジャーニーの各段階で、誰が Directly Responsible Individual（DRI）であり、誰が貢献し（C）、誰が
情報共有を受けるか（I）を示します。CSE が支援するアカウントにのみ適用されます。CSM または CSA が付いている
アカウントについては、[CSM と CSA のエンゲージメントルール](/handbook/customer-experience/account-team/#customer-success-manager-csm)を参照してください。

### プレセールスと認識合わせ {#pre-sales-and-alignment}

| 活動 | タスク | CSE | AE | RM | SA | PS | Support | Executive Sponsor | Product と Engineering |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 技術チャンピオンの特定 | ソリューションを調整するため、主要なユーザーペルソナを定義して関わります | I | C, I | | DRI | | | | |
| Sales から Customer Success への引き継ぎ | セールスから販売後の担当者へ詳細な背景情報を引き継ぎます | I | C, I | | DRI | | | | |

### オンボーディング {#onboard}

| 活動 | タスク | CSE | AE | RM | SA | PS | Support | Executive Sponsor | Product と Engineering |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 新規顧客の歓迎 | 技術チャンピオンを確認し、成約時にオンボーディングのウェルカムメッセージを送信します | I | DRI | | | | | | |
| オンボーディングのキックオフと初年度の状況確認 | 対象となる新規顧客向けにキックオフと予定された状況確認を実施します | DRI | C, I | I | C | | | | |
| 技術的な統合とセットアップ | アーキテクチャやデプロイメントなど、GitLab のセットアップの実作業を支援します | | C, I | I | C, I | DRI | | | |

オンボーディング対象の顧客については、Account Manager（AM）が AE とともに歓迎とキックオフに取り組みます。

### 活用支援 {#enable}

| 活動 | タスク | CSE | AE | RM | SA | PS | Support | Executive Sponsor | Product と Engineering |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| アカウントチームがリクエストする個別エンゲージメント | ミーティング前に AE または RM が定義したトピックに範囲を絞って支援します | DRI | C | I | | | | | |
| ウェビナーとラボ | 主要な製品トピックについて多数の顧客向けにセッションを実施します | DRI | | I | | | | | |
| 障害対応 | バグ、または製品が期待どおりに動作しない場合の対応です。特定の状況では、Support Engineering が CSE にサポートチケットについて知らせることがあります | (C, I) | | | | | DRI | | |
| 主要ユースケースの採用状況の測定 | リクエストの背景にある主要ユースケースの採用状況を追跡します | DRI | I | I | I | | | | |

(C, I): 状況によって異なります。

### 拡大 {#expand}

| 活動 | タスク | CSE | AE | RM | SA | PS | Support | Executive Sponsor | Product と Engineering |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 拡大機会の発見 | アップセルとクロスセルの機会を特定し、追求します | (C) | DRI | I | C | | | (I) | |
| 技術的なヘルス評価（Assigned アカウント） | 採用状況、技術的リスク、次のステップを社内向けに定期的に把握します | DRI | I | C, I | C | | | | |
| アカウントのヘルスチェック（その他のアカウント） | アカウントの健全性を定期的に評価します | (C) | DRI | C, I | C | | | | |

(C): 状況によって異なります。

### 最適化と契約更新 {#optimize-and-renew}

| 活動 | タスク | CSE | AE | RM | SA | PS | Support | Executive Sponsor | Product と Engineering |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ビジネスレビュー | 成功、課題、計画をレビューします | C | DRI | I | C | | | C, I | |
| 契約更新についての話し合い | アカウントチームの知識を活用し、契約更新の話し合いを早期に始めます | C, I | C | DRI | C | | | I | |
| 顧客満足度 | 顧客のフィードバックを収集し、それに基づいて行動します | I | DRI | C, I | C, I | (C) | | I | I |
| Product との連携 | 顧客のニーズを機能リクエストとして Product に伝えます | C, I | C | I | DRI | | | I | C, I |
| 継続的なリスクレビュー | 契約縮小や解約のリスクを早期に知らせ、ステータスを最新に保ちます | C, I | DRI | C, I | C | | | C, I | |
| アカウントエスカレーションの管理 | 必要に応じてエスカレーションプロセス（アカウントエスカレーションまたは STAR）を開始し、主導します | C, I | DRI | C, I | C | | C, I | C, I | I |
| 技術的なエスカレーション（Assigned アカウント） | 技術的なエスカレーション対応を最初から最後まで主導します | DRI | C | C, I | C | | C, I | | |

Assigned アカウントでは、担当 CSE が技術的なエスカレーションを主導します。
[Assigned の役割と責任](/handbook/customer-experience/csm/segment/cse/cse-assigned/roles-responsibilities/)を参照してください。

## このセクションのページ {#pages-in-this-section}

- [Assigned](/handbook/customer-experience/csm/segment/cse/cse-assigned/)とその
  [役割と責任](/handbook/customer-experience/csm/segment/cse/cse-assigned/roles-responsibilities/)
- [Pooled](/handbook/customer-experience/csm/segment/cse/pooled/)とその
  [提供サービス](/handbook/customer-experience/csm/segment/cse/pooled/offerings/)
- [オンボーディング（First Order）](/handbook/customer-experience/csm/segment/cse/customer-onboarding/)
- [CSE による顧客エンゲージメントの進め方](/handbook/customer-experience/csm/segment/cse/customer-engagements/)
- [ウェビナーとハンズオンラボ](/handbook/customer-experience/csm/segment/cse/webinars-and-labs/)
- [CSE の一日](/handbook/customer-experience/csm/segment/cse/day-in-the-life/)
- [CSE チームメンバーのオンボーディング](/handbook/customer-experience/csm/segment/cse/team-member-onboarding/)
- [CSE の職種](/job-description-library/sales/customer-success-engineer/)

レビュー中で、改善を予定しているページ:

- [CSM から CSE への引き継ぎ](/handbook/customer-experience/csm/segment/cse/csm-to-cse-handover/)
