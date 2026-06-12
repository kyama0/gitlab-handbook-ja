---
title: "UX Resources"
description: "Upstream Studios の一部である Product Design、UX Research、Technical Writing、Design System の各 UX チームメンバー向けのリソースとツール。"
upstream_path: /handbook/product/ux/ux-resources/
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
lastmod: 2026-06-11T08:45:13-07:00
translated_at: "2026-06-12T21:17:57Z"
translator: claude
stale: false
---

このページでは、UX 部門が使用するツール、ワークフロー、プレイブック、リソースに素早くアクセスできます。役立つものが不足していると思ったら、MR を送ってください。

## クイックリンク

### ワークフローとオペレーション

- [Product Designer のワークフロー](/handbook/product/ux/product-designer/) - 日々のデザインプロセスとコラボレーション
- [Product Design Operations](/handbook/product/ux/product-design/operations/) - Issue 管理、ラベリング、スケジューリング
- [UX Researcher のワークフロー](/handbook/product/ux/experience-research/)
- [Technical Writing のワークフロー](/handbook/product/ux/technical-writing/)
- [UX Operations](/handbook/product/ux/operations/) - ヘッドカウントプランニング、調達、ラベル、カレンダー

### Design System

- [Pajamas Design System](https://design.gitlab.com) - GitLab のプロダクトデザインシステム
- [Figma 上の Pajamas UI Kit](https://www.figma.com/community/file/781156790581391771)
- [GitLab Design プロジェクト](https://gitlab.com/gitlab-org/gitlab-design) - ワークフローとプロセスのドキュメント
- [SVG リポジトリ](https://gitlab.com/gitlab-org/gitlab-svgs) - GitLab の SVG アセット

## リサーチ・分析ツール

### Dovetail

リサーチの知見を管理・分析するためのリサーチリポジトリ。必要に応じて[アクセスをリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request)してください。

### Gong

セールスの会話を録音し、分析を提供する会話インテリジェンスツール。関心のあるトピックについて通話を検索したり、話すべき顧客を特定したりできます。"Collaborator" ロールの[アクセスをリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request)してください。

### Highspot

セールスイネーブルメントや競合リサーチを含む Go-to-market 情報。SSO 経由で利用できます。必要に応じて[アクセスをリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request)してください。詳細については [Highspot ハンドブックページ](/handbook/sales/field-communications/gitlab-highspot/)を参照してください。

### UX Research Archive

[UX Research Archive](https://gitlab.com/gitlab-org/uxr_insights) には、GitLab の UX リサーチャーが実施したすべてのリサーチが含まれています。

### Jobs to Be Done (JTBD)

私たちは、顧客が成し遂げようとしているジョブの観点からプロダクトとソリューションを捉えるために [JTBD フレームワーク](/handbook/product/ux/jobs-to-be-done/)を使用します。JTBD は、スコープの決定、方向性の検証、UX スコアカードによる既存エクスペリエンスの評価、ジャーニーマッピングなど、デザインプロセス全体を通じて使用されます。

## コラボレーションと共有

### UX Forum

[UX Forum](/handbook/product/ux/ux-forum/) は、UX チームメンバーが自分の作業を共有し、議論するための定例ミーティングです。

### UX Calendar

[UX Department Google Calendar](/handbook/product/ux/operations/#ux-calendar) は、UX チームのミーティングとイベントの SSOT です。

### ツール

#### Figma

私たちはデザインとプロトタイピングに [Figma](https://www.figma.com/design/) を使用します。[Pajamas UI kit](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit) には、GitLab のデザインシステムである [Pajamas](https://design.gitlab.com/) のデザインアセット、コンポーネント、スタイルが含まれています。さらに、デザイナーがデザインファイルを GitLab の Issue に直接アップロードできる [Figma プラグイン](https://www.figma.com/community/plugin/860845891704482356/GitLab)も利用できます。すべての Product Designer はオンボーディング中に Figma へのアクセスを受け取るはずです。必要なアクセスがない場合は、マネージャーに連絡してください。Product Designer ではないが View アクセス（コメントを残す機能を含む）が欲しい場合は、無料の Figma アカウントを作成し、ステージグループのデザイナーに該当ファイルへのリンクを依頼してください。

Figma の管理者とそのロールのスコープは以下のように定義されています。

|管理者|スコープ|
|-----|-----|
|@tauriedavis|Tech Stack オーナー、ユーザー管理（プロビジョニング/デプロビジョニング）、請求|
|@vkarnes|Tech Stack オーナーのバックアップ|
|@jeldergl|ユーザー管理（プロビジョニング/デプロビジョニング）、デザインオペレーション|
|@danmh|デザインオペレーション|

#### Figjam

私たちは、デザインフィードバックの収集、ワークフローのマッピング、ブレインストーミング、アフィニティマッピング、その他ビジュアルでホワイトボードのようなワークスペースが必要なあらゆる場面で [Figjam](https://www.figma.com/figjam/) を使用します。

UX 部門の全員とすべての Product Manager は、新しい Figjam ボードを作成できる Figma アカウントを取得できます。Figma アカウントを持たないチームメンバーからフィードバックを得るために Figjam ボードを共有したい場合は、Share ダイアログから匿名リンクを送信できます。

#### AI ツール

いつ AI を使うか、ベストプラクティス、避けるべきこと、AI をヘルパーとして使いながらユーザーを中心に保つ方法について学ぶには、[UX における AI の活用](/handbook/product/ux/how-we-work/ai-usage/)を参照してください。

#### Dovetail

私たちは、リサーチの知見を管理・分析するために [Dovetail](https://dovetailapp.com/) を使用します。アクセスが必要な場合は、[アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues)を送ってください。

#### Gong

セールス向けの会話を録音し、それらの会話に関する分析とインサイトを提供する会話インテリジェンスツール。UX チームメンバーが話すべき顧客を特定したり、関心のあるトピックについて通話を検索したりするのに役立ちます。リクエストに応じて UX チームメンバーが利用できます。使用したい場合は[アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues)を作成してください。"Collaborator" ロールをリクエストできます。

#### Highspot

セールスイネーブルメントや競合リサーチを含む Go-to-market に関する情報を含みます。Highspot は SSO 経由でアクセスでき、リクエストに応じて利用できます。使用したい場合は[アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues)を作成してください。詳細については [Highspot ハンドブックページ](/handbook/sales/field-communications/gitlab-highspot/)を参照してください。

### チュートリアル

- [Product Designer 向けのテクニカルチュートリアル](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq-bYO9jCJaN45BBpzWSLAQ) - ベストプラクティスの動画プレイリスト
- [コード変更を行うためのステップバイステップガイド](/handbook/product/ux/ux-resources/designers-step-by-step-guide-to-make-code-changes/)

### YouTube チャンネル

- [UX Team](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq89nFXtkVviaIfYQPptwJz)
- [UX Scorecards](https://www.youtube.com/playlist?list=PL05JrBw4t0KqC_DsJRUHPcHzHP0a-zGK0)
- [UX Forum](https://www.youtube.com/playlist?list=PL05JrBw4t0KrnZyGS8eHMpubQJI_5Zwjb)
- [GitLab Design Talks - Iteration](https://www.youtube.com/watch?v=0lhjzU-QZ2w)
- [GitLab Design Talks - Collaboration](https://www.youtube.com/watch?v=VrXQiik3Q9U)
- [GitLab Design Talks - Design Leadership & Career Development](https://www.youtube.com/watch?v=gDzRKJE1ca0)

### ユーザーペルソナ

[ユーザーペルソナ](/handbook/product/personas/)は、実際に GitLab を使う人々を表します。UX チームとマーケティングチームは、ユーザーエクスペリエンスとデザインに関する意思決定に役立てるためにペルソナを使用します。

## プレイブックとガイド

- [Dark Mode Rollout Playbook](/handbook/product/ux/ux-resources/dark-mode-rollout-playbook/) - ダークモードを実装するための期待値、ワークフロー、ガイダンス
- [Data for Design Decisions](/handbook/product/ux/ux-resources/designers-guide-to-data) - デザインの意思決定を裏付けるデータを見つけるためのツール
- [Experimentation for the User Experience Team](/handbook/product/ux/ux-resources/experimentation/) - 実験を計画、デザイン、評価する方法

## GitLab チームから

チームメンバーは、私たちの専門技術を前進させるための業界向けリソースを作成してきました。

- [Building Design Systems: Unify User Experiences through a Shared Design Language](https://www.apress.com/gp/book/9781484245132) - Taurie Davis、Sarrah Vesselov 著
- [Hemingway](https://www.figma.com/community/plugin/786036229607794895/Hemingway) - Michael Le による Figma プラグイン
- [GitLab-ipsum](https://gitlab-ipsum.netlify.app/) - Patrick Deuley、Jeremy Elder 作
