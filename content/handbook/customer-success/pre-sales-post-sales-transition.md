---
title: プリセールスからポストセールスへのアカウント引き継ぎ
description: >-
  顧客がプリセールスエンゲージメントからポストセールスへ円滑に移行し、成功を収めるための方法。
upstream_path: /handbook/customer-success/pre-sales-post-sales-transition/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-11T16:04:45+00:00"
---

プリセールスチームのメンバーとして、GitLab の商談を成功裏にクローズした後は、CSM のために道を整えることが重要です。CSM の紹介は、カスタマーライフサイクルにおける重要なステップです。効果的な CSM の紹介は、顧客の製品に対する期待感を高め、オンボーディング・実装・採用を通じて顧客を支援する CSM の信頼性を向上させます。

<!-- NOTE: This course probably needs to be checked to ensure it's not conflicting with the new guidelines -->
[カスタマーサクセスマネージャーの紹介](https://university.gitlab.com/courses/introducing-the-technical-account-manager)に関するこちらのコースをご確認ください。

## CSA/M/E のエンゲージ

すべてのアカウントが CSA/M/E の対象となるわけではありません。
一般的に、CSA/M アカウントには Success Tier が付随しています。CSE が担当するアカウントは一定の閾値を超えており、Success Tier は付与されていません。

アカウントにすでに CSA/M が割り当てられているかどうかを確認するには、Salesforce のアカウントページに移動し、`Customer Success` セクションまでスクロールし、`Customer Success Manager` のエントリがあるか確認してください（ソリューションアーキテクトのすぐ下に表示されます）。担当者が記載されている場合、その人が CSM であり、アカウントについて直接連絡できます。担当者の代わりに `TAM Scale` と表示されている場合、そのアカウントは Success On-Demand（CSE）でサポートされています。CSE をアカウントにエンゲージするには、エンゲージメントをリクエストする方法について[こちらのハンドブックページ](/handbook/customer-success/csm/segment/cse/cse-operating-rhythm/)を参照してください。

CSM の担当割り当てに関する質問（既存顧客または新規適格顧客を問わず）は、その地域をサポートする CSM マネージャーにお問い合わせください（詳細については[こちらのハンドブックページ](/handbook/customer-success/csm/csm-manager/)を参照してください）。

顧客が Dedicated を利用予定の場合、アカウントチームは連携している CSM マネージャーに通知し、プリセールスプロセス中に CSM をエンゲージするために[Dedicated 顧客向けの CSM エンゲージメントのベストプラクティス](https://internal.gitlab.com/handbook/customer-success/csm/gitlab-dedicated/)を把握しておく必要があります。

## 引き継ぎクイックサマリー

| ---  |  ---   |
| CSM の紹介を**誰が**コーディネートするか？ | ソリューションアーキテクト |
| 紹介は**いつ**行われるか？ | `3-Technical Evaluation` または `4-Proposal` |
| この段階で紹介を行う**理由**は？ | アカウント内でビジネス価値の議論がまだ行われている段階で CSM を紹介することで、重要な戦略的意思決定者との関係を構築し、顧客が実装の旅を具体的にイメージできるよう支援します。これにより、CSM はアカウント内の適切なレベルで継続的なエンゲージメントを維持できます。 |
| 紹介の**方法**は？ | SA は、CSM を含む[アカウントチーム](/handbook/customer-success/account-team/)全体と内部で同期した後、顧客チームとの「GitLab へようこそ」コールをスケジュールします。 |
| CSM がアカウント情報に**どこで**アクセスできるか？ | - 顧客ミーティングノートドキュメント <br> - コマンドプラン <br> - アカウントプラン <br> - 顧客戦略/バリュープラン |

## CSM 引き継ぎプロセス

私たちは、顧客がまだ見込み客として[ステージ](/handbook/sales/field-operations/gtm-resources/) `3-Technical Evaluation` の終盤にいる段階、または `4-Proposal` に移行するタイミングで CSM を紹介したいと考えています。

### 商談成立前に引き継ぎを始める理由

SA がまだ定期的な連絡を持ち、緊密な作業関係を維持している間に、CSM を意思決定者や主要なステークホルダーに紹介するのに最適なタイミングです。これらのビジネスの相手方は通常、将来のカレンスコールには参加しないため、早い段階で関係を育てることで、CSM は採用を推進するために最適な立場にあるビジネスステークホルダーと関わることができます。これにより、成功計画や EBR 等において成果志向のパートナーシップを構築できます。

また、次のような状況では、CSM のエンゲージメントを[ステージ](/handbook/sales/field-operations/gtm-resources/) `3-Technical Evaluation` のより早い段階（ただしそれ以前は不可）でリクエストできます。

- POV が実施された場合 — POV 完了・結果発表ミーティングで、次のステップについて合意された後

<!--

NOTE: I'm not convinced these are valid reasons to engage a CSM prior to stage 3, which is what we are now talking about...

  - A shared customer issue tracking project has been created that will affect the account long-term
  - As requested by the SA if the CSM has a specific subject matter expertise relevant to the conversation
  -->

### SA は CSM とどのように連携するか？

CSM のワークロードを効果的に分散させるために、SA は担当地域の CSM マネージャーに連絡し、アカウントに CSM を割り当てるよう依頼する必要があります。このプロセスの一環として、SA は少なくとも以下の情報を提供する必要があります。

- アカウントへの Salesforce リンク
- 商談への Salesforce リンク
- 予定クローズ日
- アカウントの [Landed Addressable Market（LAM）](https://internal.gitlab.com/handbook/sales/lam/)（GitLab 内部リンク）

マネージャーによって CSM が割り当てられた後、SA は内部[アカウントチーム](/handbook/customer-success/account-team/)ミーティングを設定する必要があります。

### 内部アカウントチームミーティング

アカウントのポストセールスへの引き継ぎ準備として、CSM は[アカウントチーム](/handbook/customer-success/account-team/)全員とのミーティングをスケジュールし、顧客の詳細とサクセスプランを確認する必要があります。アカウントチームは以下の質問を使って詳細を確認し、顧客の採用ジャーニーにおける短期・中期・長期の次のステップを定義する必要があります。

- 今後 6～12 ヶ月における顧客の目標と測定可能な成功基準は何か？各目標について、以下の回答を確保してください。
  - イニシアティブ — どのような活動を行うか？
  - ビジネスアウトカム — 顧客が定義した達成すべき結果は何か？
  - 成功基準 — 成功をどのように測定するか？
  - タイムライン — いつ完了するか、途中のマイルストーンは何か？
- GitLab の意思決定者とステークホルダーは誰か？それぞれとの次回ミーティングはいつか？
- 6 ヶ月後の顧客との EBR では何を議論するか？

ミーティングのアジェンダ：

- アカウント情報
  - 組織名
  - 業界・業種
  - 組織や業種に関する最近のニュース記事
  - 現在のツールスタック
- 主要な関係者
  - チャンピオン
  - 意思決定者 / エコノミックバイヤー
  - 主要な連絡先
- コマンドプランと GitLab 購入の理由
  - 定義されたビジネスアウトカム
  - ペインポイント
  - 指標
  - 採用の障壁と既知のリスク
- サービスエンゲージメント
  - スコープと成果物
  - タイムライン
- 顧客戦略プラン
  - 背景
  - ソリューションの選択肢 / 障壁
  - 役割
  - スコープ内
  - スコープ外
  - 目標とするベネフィット
  - 主要ステークホルダー
- オープンなサポートチケット

ソリューションアーキテクトがコラボレーションプロジェクトを作成している場合、[アカウントチーム](/handbook/customer-success/account-team/)は一緒にレビューし、`readme.md` の詳細と Issue が最新の状態であることを確認する必要があります。

### 顧客への CSM の紹介

内部アカウントチームミーティングの後、SA は顧客との CSM 紹介ミーティングを設定する必要があります。このミーティングを手配する際、SA は CSM の役割の概要と今後の CSM エンゲージメントが*どのようになるか*について顧客に説明できます。ただし、SA（および SAE）は CSM が実際に*何を行う*かについて、CSM に代わって確約する発言は控えるべきです。

顧客ミーティングの前に、CSM は SA と協力して[CSM プログラム概要デッキ](https://docs.google.com/presentation/d/1LShY62EHCZLNjS0Z6MBzTsYF_GllNwH7Rbw3_PJQUOo/edit#slide=id.g129f8c95ce4_0_690)と[顧客戦略プランサマリーページ](https://docs.google.com/presentation/d/1npyhUebp68YkccLlJP5R_6gmtQjfELpB1mBGWfroVmY/edit#slide=id.g219d09d831d_0_459)を準備し、紹介クライアントミーティングの一部として提示する必要があります。これは CSM と顧客との関係の出発点となり、CSM の役割、顧客のイニシアティブに対する CSM の理解と相互に合意したタイムライン、両者の今後の一般的な期待を伝えることが重要です。

商談が商業的な議論を進める間、CSM は適宜 SA と連携し、組織内の戦略的な担当者や意思決定者との関係を維持する必要があります。

### SAE と SA から CSM への責任の移行

商談が[ステージ](/handbook/sales/field-operations/gtm-resources/) `Closed Won` に移行すると、CSM は顧客とのキックオフミーティングをスケジュールし、顧客の目標と CSM プログラムについてより詳細に話し合う必要があります。このミーティングの実施方法については、[CSM キックオフコールの詳細](/handbook/customer-success/csm/onboarding/#kickoff-call)をご確認ください。

アカウントがポストセールスに移行した段階で、CSM はガイダンスとベストプラクティスの会話、顧客のイネーブルメント、製品使用に関する主要な責任を担います。SAE と SA の責任のほとんどは、この時点で CSM に移行します。

顧客オンボーディング中、SA は顧客と引き続き関わり、シームレスな紹介を促進し、POV からの継続的な活動に対応することを選択できます。これは、CSM がそれらの活動を引き継げるように行われるべきであり、これらの項目に関する顧客とのすべての会話には CSM を含める必要があります。

アカウントが完全にポストセールスに移行した後、SA は CSM から[特定の状況で再エンゲージするよう](#re-engaging-the-saeae-and-sa)招待される場合があります。

## SAE/AE と SA の再エンゲージ {#re-engaging-the-saeae-and-sa}

CSM が SAE/AE と SA を再エンゲージする必要がある場合があります。CSM が再エンゲージのきっかけとなる顧客からのリクエストを聞き取る例を以下に示します。

- SAE と CSM が主導する拡張計画の策定によるティアアップグレード
- 更新目的ではない「新規」の単一チームまたは企業全体のティアアップグレードのための POV、製品評価、RFP、またはセキュリティの開始
- SA は例外ベースで既存の顧客チームの CSM を支援できます。SA リーダーシップの承認が必要です。
  - CSM チームから特に要請された場合の顧客イネーブルメント支援
  - CSM チームから特に要請された場合のワークショップ支援
  - CSM チームから要請された場合の既存顧客チームの ROI 分析
  - ティアアップグレードでない限り、POV や RFP などのプリセールス活動は既存の顧客チームには避けるべきです。プリセールスの商談と同様に、これらの活動は営業ツールとして提供するのではなく、見込み客/顧客がその評価の一部としてこれらの活動を必要とする場合に活用すべきです。
- SOW が必要になる可能性のある Professional Services に関する議論
- CSM がオーバーコミットしているか、顧客のリクエストをサポートできない場合、SA が支援を求められる場合があります
- GitLab デイズや顧客サイトでの他のオンサイト GitLab エバンジェリズムのサポート
- エグゼクティブビジネスレビュー（EBR）

## 役立つリンク

  [us-public-sector](https://gitlab.com/gitlab-com/us-public-sector) — すべての公共部門業務の親プロジェクト

  [account-management](https://gitlab.com/gitlab-com/account-management/) — アカウント固有の業務と営業チームとのコラボレーションの親プロジェクト

  [customer-success](https://gitlab.com/gitlab-com/customer-success) — カスタマーサクセス担当者の共有業務またはトリアージ業務の親プロジェクト
