---
title: ソリューションアーキテクト Sales Plays
description: "GitLab ソリューションアーキテクトの Sales Plays プラクティスを紹介します"
upstream_path: /handbook/solutions-architects/playbooks/sales-plays/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
---

## 新規アカウントおよびチーム（既存顧客）獲得のための Sales Plays

SA はディスカバリーコールに参加するか、もしくは事前のアカウントとのやり取りで明らかになった Outcome / Infrastructure / Challenges の情報の提供を受ける必要があります。SA がディスカバリーと技術的なデモ／ディープダイブを 1 つの通話で組み合わせて支援することもありますが、後者のアプローチでは SA がディスカッションの準備や調整を行う時間が確保できないため、最適とは言えません。

SA は、関連アカウントからの RFI、RFP、セキュリティ監査などのプリセールスにおける技術的な顧客問い合わせや監査にも責任を持ちます。監査プロセスの詳細は [Security](/handbook/security/security-assurance/field-security/customer-security-assessment-process/) ページに進んでください。

SA は、アカウントのステータス（プリセールスとポストセールスを問わず）に関係なく、常に Professional Services SOW の起草に責任を負います。

一般的なガイドラインとして、トピックの支援であれ学習／シャドウイングであれ、単一の顧客向け通話に参加するソリューションアーキテクトは 2 名を超えないようにしてください。

## 概要

**目的** - 新規アカウント、新規ロゴ、既存アカウントの新規チームを GitLab Ultimate で獲得します。

この Sales Play は誰のためのものですか?

- プライマリ: 新規アカウント、既存顧客の新規チームを担当する SAE、SDR、SA
- セカンダリ: 既存顧客の新規チームのディスカバリーを支援する CSM

## 誰に会うか

**Ideal Customer Profile** - エンタープライズ顧客向けにこの見極めの[リスト](https://gitlab.my.salesforce.com/00O4M000004aULR)に挙がっている見込み顧客や既存顧客の新規チーム

- シフトレフトに興味があり、現状のセキュリティツールに不満を持つ、または全くセキュリティツールを使用していない組織／チーム
- デプロイ時間、現在の運用効率、ツールチェーンに不満を持つ組織／チーム
- 成熟度が低く、トランスフォーメーションを実施中または計画中の組織
- 異なるツールを抱えサイロ化したチーム（特にセキュリティ）。個人レベル・経営レベルでの可視性が欠如
- 厳格な規制セキュリティまたはコンプライアンス要件を持つ組織

**ターゲットバイヤーペルソナ**

| ペルソナの役割 | 想定される肩書き |
| ------------ | --------------- |
| Economic buyer | CISO または Security Manager、VP of Security、Director of Security、VP of IT または CTO、App/Dev Director |
| Technical influencer | Chief Architect、App Dev Manager |
| 検討すべきその他のペルソナ | Infrastructure Engineering Director、Release and Change Management Director |

## はじめに

次の問いを検討してください。

- 顧客が GitLab Ultimate に移行する（あるいは移行を検討する）ことを妨げてきたものは何ですか?
- 顧客には Ultimate へのアップグレードがうまく整合する戦略的イニシアチブや優先事項がありますか?
- 適切なペルソナ／チーム（上記ターゲットバイヤーペルソナ参照）と関わっていますか?
- パワー／オーソリティ（ビジネス意思決定者）にアクセスできていますか?
- アカウント内のチャンピオンは誰ですか?
- GitLab Ultimate によって有効化される機能と PBO は顧客にとって重要ですか? なぜ重要、もしくは重要でないのですか? どうやってそれを知っていますか?

### ステージ: 見極め

**Sales Play**

1. SAE/SDR は、顧客が担当地域の見極めリストに載っていることを確認してください。
1. 見極めの段階で、以下に挙げる資料を使って顧客のペインポイントとカスタマープロファイルを必ず特定してください。
    1. 顧客のニーズ、将来像、必要な機能をより深く理解するための[質問](/handbook/marketing/sales-plays-cicd/playbook-premium-to-ultimate/#engaging-the-customer)
    1. 顧客向けプレゼンテーションと GTM ユースケースの[リンクはこちら](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/)
    1. GitLab Protect/Secure 向けの[ディスカバリー質問](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#discovery-questions)
    1. 見込み顧客／顧客から想定される[反論](/handbook/marketing/sales-plays-cicd/playbook-premium-to-ultimate/#objection-handling)
1. GitLab の価値をどうポジショニングするか、なぜ GitLab がより優れているかは[こちら](/handbook/marketing/sales-plays-cicd/playbook-premium-to-ultimate/#positioning-value)を確認してください

**期待される成果**

ディスカバリー

**オーナー**

プライマリ: SDR、SAE
セカンダリ: SA

### ステージ: ディスカバリー

**Sales Play: 新規顧客（新規ロゴ）**

1. ペインポイントを特定するため、カスタマープロファイルに基づいてディスカバリー質問のリストを選択し作成
    1. 一般的なディスカバリー質問および以下のリソースを通じてペインポイントを発見:
    1. SA の技術的ディスカバリー質問集
    1. 市場[要件](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#market-requirements-in-priority-order)
    1. [こちら](/handbook/marketing/sales-plays-cicd/playbook-premium-to-ultimate/#value-discovery)から、価値ディスカバリーのペイン、ベネフィット、必要な機能のうち該当するものを選択
    1. 現在 Secure/Protect を利用していない顧客向けの、特定エントリポイント[を強調した](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#discovery-questions)ディスカバリー質問
    1. ミーティング前に、見込み顧客／顧客から想定される[反論](/handbook/marketing/sales-plays-cicd/playbook-premium-to-ultimate/#objection-handling)を確認してください
1. セキュリティのハイレベル DRI を特定しアクセスを獲得
1. 以下の資料を用いて、より上位のイニシアチブのためにハイレベルなエグゼクティブを特定しアクセスを獲得
        1. [Accelerating Digital Transformation](https://about.gitlab.com/solutions/digital-transformation/)
        1. [Value Stream Management](https://about.gitlab.com/solutions/value-stream-management/)
        1. [GitLab is optimized for cloud native](https://docs.google.com/presentation/d/1oq7ODy9TJpuZqH_tvVtCm2t-C0QkTbuG4ZRlRzRNcUY/edit#slide=id.gbb4f272403_0_546)
1. 次のステップを提案し、顧客と話している間に時間を確保してください。理想的にはデモまたはワークショップです。POV からスタートすることは推奨しません。さらなるディスカバリーや成功基準の合意を行う前に POV を始めると、販売サイクルが長期化し、想定外の結果を招くためです。

**期待される成果**

1. 追加のディスカバリー
2. 技術評価（理想的にはデモまたはハンズオンワークショップ）

**オーナー**

SA および SAE

**Sales Play: 新規チーム（既存顧客）**

1. ペインポイントを特定するため、カスタマープロファイルに基づいてディスカバリー質問のリストを選択し作成
    1. 一般的なディスカバリー質問および以下のリソースを通じてペインポイントを発見:
    1. SA の技術的ディスカバリー[質問集](https://docs.google.com/document/d/1GZnbqE_rtGFRAJxoeje4mtFyP1AfpLLueESijXgikm4/edit#heading=h.4b6ktib5prk9)
    1. 市場[要件](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#market-requirements-in-priority-order)
    1. [こちら](/handbook/marketing/sales-plays-cicd/playbook-premium-to-ultimate/#value-discovery)から、価値ディスカバリーのペイン、ベネフィット、必要な機能のうち該当するものを選択
    1. 現在 Secure/Protect を利用していない顧客向けの、特定エントリポイント[を強調した](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#discovery-questions)ディスカバリー質問
    1. ミーティング前に、見込み顧客／顧客から想定される[反論](/handbook/marketing/sales-plays-cicd/playbook-premium-to-ultimate/#objection-handling)を確認してください
    1. 顧客が既に Premium を利用している場合は、この [sales play](/handbook/marketing/sales-plays-cicd/playbook-premium-to-ultimate/#meetings-to-get-to-value-alignment) 全体をすべて確認してください
1. セキュリティのハイレベル DRI を特定しアクセスを獲得
1. 以下の資料を用いて、より上位のイニシアチブのためにハイレベルなエグゼクティブを特定しアクセスを獲得
        1. [Accelerating Digital Transformation](https://about.gitlab.com/solutions/digital-transformation/)
        1. [Value Stream Management](https://about.gitlab.com/solutions/value-stream-management/)
        1. [GitLab is optimized for cloud native](https://docs.google.com/presentation/d/1oq7ODy9TJpuZqH_tvVtCm2t-C0QkTbuG4ZRlRzRNcUY/edit#slide=id.gbb4f272403_0_546)
1. 次のステップを提案し、顧客と話している間に時間を確保してください。理想的にはデモまたはワークショップです。POV からスタートすることは推奨しません。さらなるディスカバリーや成功基準の合意を行う前に POV を始めると、販売サイクルが長期化し、想定外の結果を招くためです。

**期待される成果**

1. 追加のディスカバリー
2. 技術評価（理想的にはデモまたはハンズオンワークショップ）

**オーナー**

SA および SAE

### ステージ: 技術評価

1. ミーティング前に、どの play を実行するかをセールスチームと戦略を立て、期待される成果に合意してください。技術評価を POV から始めることは推奨しません。
    - Demo/Deck: ビジョンとトランスフォーメーション play。GitLab を全体的に取り扱う傾向があります
    1. [顧客向けスライド](https://docs.google.com/presentation/d/1WHTyUDOMuSVK9uK7hhSIQ_JbeUbo7k5AW3D6WwBReOg/edit)
    1. [なぜ Ultimate を選ぶのか](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#ultimate)
    1. [Customer proof point](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#proof-points---customers)
    1. [GitLab がどのように市場要件を満たすか](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#how-gitlab-meets-the-market-requirements)
    1. [差別化要因](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#top-differentiators) - 必要なだけ自由に選んでください
    1. [SA Demo Repo](https://gitlabdemo.com/catalog/libraries/3c68d4b8): これを複数の play に分解する
    1. [Demo catalog](https://gitlab.com/gitlab-com/customer-success/solutions-architecture/demo-catalog)
    1. [End to End TCO planning workshop](https://docs.google.com/spreadsheets/d/1wVghmLv3E_IKs7rz-quc6jtjZW0p-u3h4iSaDqmm1Nc/edit#gid=467701643)、Recording
    1. [Secure を含めたエンドツーエンドのデモ]
    - Nuts/Bolts play: 特定の Secure/Ultimate の機能に焦点を当てる場合
    1. Darwin Sanoy 作成の [DevSecOps Nuts & Bolts deck](https://docs.google.com/presentation/d/1NSowoLzyrb_8ACnxwbQ2FcqaoDmavaedUrd2rVidehw/edit#slide=id.gc2a4740e21_0_554)
    1. [継続的な修復習慣の構築](https://drive.google.com/file/d/1Gd7pb_-5V9jjJqT7zFNLpxoKjZuOFE63/view)
    1. [TCO ワークショップを含む追加情報](https://gitlab.com/gitlab-com/customer-success/tko/nuts-and-bolts-devsecops-motion-feedback)
    - Demo/Deck: 統合 vs 競合 play
    1. [Compete : Argo CD/TeamCity](https://gitlabdemo.com/catalog/libraries/categories/ac509772)
    1. [競合に対する GitLab の優位性](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#competitive-comparison)

**期待される成果**

1. ディープダイブのデモ
2. ワークショップ
3. [POV](/handbook/solutions-architects/playbooks/pov/)
4. [プロフェッショナルサービスエンゲージメント](#professional-service-resources)

**オーナー**

SA および SAE

## 利用するその他のリソース

具体的なリソースは上記の各アクションで挙げられています。こちらは追加のリソースです。

- [GitLab Ultimate 固有の機能と価値ハンドブックページ](https://about.gitlab.com/pricing/ultimate/#ultimate-specific-features)
- [SKO Expanding to Ultimate スライドデック](https://docs.google.com/presentation/d/1oq7ODy9TJpuZqH_tvVtCm2t-C0QkTbuG4ZRlRzRNcUY/edit#slide=id.gb4749ff26b_0_85)
- [Why GitLab Ultimate スライドデック](https://docs.google.com/presentation/d/1TP5cXH5Nr0VkH7mE6M_-DFXT_Jnq7o5LPxuMUz2paI4/edit?usp=sharing)
- [DevSecOps の販売リソースページ](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#ultimate)
- セキュリティ販売（リンク必要）John Blevin のオンラインクラスルーム資料を参照
- New Gartner MQ for Plan（5 月予定）
- Gartner MQ for AST（2021 年 5 月予定）

## プロフェッショナルサービスのリソース {#professional-service-resources}

| カスタマーペルソナ | 検討すべきサービス | 顧客が望む成果 |
| ----- | ----- | ----- |
| CISO、CTO、VP Engineering、Director of DevOps Platform または Developer Experience、Head of Digital/DevOps Transformation | [Transformative services](https://www.loom.com/share/da035d54cda74c039524d940766d7621?sharedAppSource=personal_library)、[スライド](https://docs.google.com/presentation/d/1zH6l_qLtODL_gYD6YazKYl5BGY0FVDy08QAqS7ticuU/edit#slide=id.g11640e57389_0_21) | 機能サイロの削減、能動的なリスクマネジメント（例: シフトレフト）、CI/CD ワークフローの標準化、インナーソーシングによるコラボレーション。 |
| Sr. Manager App Dev、Director of Engineering | [標準サービスパッケージ](https://about.gitlab.com/services/catalog/) または カスタムスコープのオファリング | 1 つ以上の特定トピックの[トレーニング](https://about.gitlab.com/services/education/)に関心がある顧客。[GitLab Self Managed の実装](https://about.gitlab.com/services/catalog/)に支援が必要な顧客や、データを [GitLab に移行](https://about.gitlab.com/services/catalog/)する必要がある顧客。 |

判断に迷ったら、[#professional-services](https://gitlab.slack.com/archives/CFRLYG77X) の自分の地域の [PS Engagement Manager](/handbook/company/team/?department=practice-management) に連絡し、具体的な顧客機会について相談してください。

## 進捗の測定

オポチュニティごとに[このチェックリスト](https://docs.google.com/spreadsheets/d/1YT-w0MXpD6-v2Z2PqNqU9tdKsNknzzLAKlb_ktuPNBo/edit?usp=sharing)をコピーし、必要に応じて更新してください。

これらのマイルストーンを検討し、進捗に合わせて SDLC のステージを調整してください。

**マイルストーン**

- [ ] GitLab チャンピオンとのゲームプラン (MEDDPPICC)
- [ ] セキュリティチームまたはその他の Economic Buyer とのミーティング
- [ ] 技術評価実施の合意
- [ ] 技術評価要件の定義
- [ ] 技術評価の成功
- [ ] 提案

**メトリクス:**

- [ ] ステージ進行に要する平均日数
- [ ] 最も長いステップ（共通のブロッカー?）
- [ ] Economic buyer の肩書き — 共通要因は?
- [ ] sales play の振り返り
