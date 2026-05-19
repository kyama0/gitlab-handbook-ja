---
title: "パートナー協業"
description: "GitLab プロフェッショナルサービス組織がパートナーとどのように協業するかを学びます。"
upstream_path: /handbook/customer-success/professional-services-engineering/partner-collaboration/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-11T16:04:45+00:00"
---

## なぜパートナーなのか？

GitLab の販売が増えるにつれて、プロフェッショナルサービスへの需要も追従して増加します。この需要に応えるためには、**伸縮自在でオンデマンドなデリバリーリソースのベンチ** を持つ必要があります。パートナー協業はまた、**PSE が主導的な役割（例: アーキテクト、技術監修など）を担う** ことを可能にすることで、**PSE の燃え尽き症候群を防ぐ** のにも役立ちます。最後に、パートナーとの関係構築により、デリバリーチームは必要に応じて **Subject Matter Expert (SME) を追加** できるようになります。

セールスの観点では、チャネルパートナーは、継続的な関係を持つ顧客との初期ライセンスディールおよびアップセルオポチュニティを促進するのに役立ちます。

## パートナーの区別

私たちがパートナーと持ちうる関係にはさまざまなタイプがあり、その違いを概説することが重要です :point_down:。Direct と Indirect は、サービスがどのように販売されるかを指します - Direct はパートナーが顧客に直接販売することを意味し、Indirect は GitLab がサービスを販売してパートナーが実行を支援することを意味します。

|   | Partner Indirect (Staff Augmentation)  | Partner Indirect (Project Based)  | Partner Direct |
|---|---|---|---|
| GitLab にサブコントラクトされている？  | はい | はい | いいえ |
| アクセス  | Slack, www-gitlab-com, GDrive  | Slack, www-gitlab-com, GDrive | Partner Portal |
| GitLab PS とのコミュニケーション | オーガニック（上の行を参照）  | オーガニック（上の行を参照）  | Partner Help Desk  |
| GitLab PS の他の顧客を知ってよい？  | はい | いいえ | いいえ |
| プラクティス自動化に貢献できる？  | はい | はい | TBD  |

### Partner Direct

GitLab PS は、パートナーが（ひいては私たちの）顧客にサービスをデリバリーして成功するのを支援できるべきであり、支援すべきです。私たちは **ガイダンス、サンプル、戦略的アドバイスを提供** でき、エンゲージメントでパートナーの「行き詰まり」を解消するのに役立つ可能性のある公開ドキュメントやブログ記事への参照を含みます。ただし、パートナーが **ハンズオンの支援** を必要とする場合は、適切な責任保護を確実に行うため、**SOW を介してパートナーとエンゲージする** 必要があります。

*注: GitLab プロフェッショナルサービスは、私たちとサブコントラクトしていないチャネルパートナーからのヘルプデスク質問を受け付けて対応する手段を構築中です（2021 年 1 月／2 月）。このプロセスが作成されるにつれて、より多くの詳細が出てきます。*

## Partner Indirect 協業ガイドライン

- パートナー（Indirect）（両方のフレーバー）は、[global practice development](https://gitlab.com/gitlab-com/customer-success/professional-services-group/global-practice-development) の任意のサブグループまたはプロジェクトにアクセスできるべきです
- PSE は、他の PSE およびパートナー（Indirect）からの新しいコードの MR 承認とマージに責任を持つメンテナーであるべきです
- すべてのマージリクエストでコードレビューが行われるべきです
- 顧客および PS 固有の Slack チャンネルへのアクセス
- **Partner Indirect は、AWS、Azure、GitLab Demo などへのアクセスが可能です**
- 顧客エンゲージメントのデリバリー作業について:
  - Partner Indirect (Staff aug)
    - [PS Plan](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ps-plan/-/issues_) のすべてのデリバリージャーナル Issue へのアクセス
    - すべての自動化付帯資料を持つ [global practice development](https://gitlab.com/gitlab-com/customer-success/professional-services-group/global-practice-development) グループへのアクセス
  - Partner Indirect (project based)
    - 顧客デリバリーへの特定のアクセス（? Melani に確認が必要）
    - 顧客プロジェクトを完了するための（適切に） [global practice development](https://gitlab.com/gitlab-com/customer-success/professional-services-group/global-practice-development) 配下の最も低いレベルでのアクセス

## サービスタイプ別の協業

### 実装サービス

- これらのサービスは、ほぼ常に実際にインフラストラクチャを構築し GitLab コンポーネントを設定することを伴うため、設定自動化の IaC のためのカスタマーフリーなリファレンスを維持することは難しい傾向があります
- [Evaluate](https://gitlab.com/gitlab-org/professional-services-automation/tools/utilities/evaluate) はパートナー（Indirect）（プロジェクトベースおよびスタッフオーグメンテーション）が使用できます。
- パートナー（Direct）TBD
- パートナー（Indirect）が実装サービスプロジェクトをデリバリーする際、[実装デリバリーキット](https://gitlab.com/gitlab-org/professional-services-automation/delivery-kits/implementation-delivery-kits/implementation-delivery-kit) を使用できます
あなた（および／またはパートナー）が実装サービスをデリバリーする際は、必ずデリバリーキットに貢献してください。

### マイグレーションサービス

- gitlab.com へのマイグレーションはすべて、gitlab.com にユーザーを作成するために管理者トークンが必要なため、PSE の関与が必要です
- パートナー（Indirect）（プロジェクトベースおよびスタッフオーグメンテーション）は [Congregate](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate) およびサポート自動化ユーティリティを使用できます。
- パートナーがマイグレーションプロジェクトを開始する際、[Migration Plan](https://docs.google.com/document/d/1w3srV4CZQbNMqqMymH0l1CJhY2g33-p2rkmNm8Be3Bk/template/preview) または [Migration Delivery Kit](https://gitlab.com/gitlab-org/professional-services-automation/delivery-kits/migration-delivery-kits) を使用してデリバリーディスカッションを促進できます。
- [Congregate](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate) を使用する際は、どこかにデプロイする必要があります。顧客のファイアウォール内にデプロイする必要がある場合は、マイグレーションサービスのソースコードに加えたホットフィックスをマイグレーションサービスプロジェクトに必ずポートバックしてください。

### コンサルティングサービス

- 顧客が解決しようとしている問題空間をさらに定義するためのディスカバリーセッションが必要です
- これらのサービスの成果物は、
  - 通常、問題の解決方法に関する書面による推奨事項
  - *時には* 顧客が自分の環境に適用できる概念実証コード
- これらのサービスのために開発されるすべてのコードは、車輪の再発明をせずに将来の顧客向けにプロジェクトを再利用できるよう、いかなる顧客情報も含んではなりません。

## パートナー／コンサルタントの雇用

プロジェクト要件が利用可能なリソースの現在のキャパシティを超える場合、プロフェッショナルサービスチームはコンサルタントを雇用してプロジェクトのデリバリーを支援することがあります。次は、サブコントラクトされたリソースの使用前および使用中に処理する項目のチェックリストです:

1. パートナー検索
    - 「サンプル PS プロジェクト」を実行可能なパートナーと共有する
        - [アドバイザリープロジェクト](https://docs.google.com/document/d/1KhADjTUOndaAev3dSLlRgyEJtBIT6wv_rr3aH5hsKKQ/edit?usp=sharing)
        - [実装プロジェクト](https://docs.google.com/document/d/13Mw-7uSSclfwm6JWcs8UrXM9SunX8ebIeIk-n9q9b6Y/edit?usp=sharing)
        - [マイグレーションプロジェクト](https://docs.google.com/document/d/1OuCZqxZvjiPx2S0bFnX8tGgfBFWeg_gdifQWhdtTlAg/edit?usp=sharing)
        - プロジェクトマネジメントプロジェクト（近日公開）
        - トレーニングプロジェクト（近日公開）
    - 「PSE プロファイル」を実行可能なパートナーと共有する
        - アドバイザリー（プロファイル近日公開）
        - 実装（プロファイル近日公開）
        - マイグレーション（プロファイル近日公開）
        - プロジェクトマネジメント（プロファイル近日公開）
        - トレーニング（プロファイル近日公開）
    - シニアチャネルソリューションズマネージャーが Establish PS Partnership Issue を作成し、必要なすべての書類の完了を追跡します。また、必要なシステムおよびツールでの企業プロファイルの作成および完了も追跡します。下記のリストを参照してください:
        - Master Subcontracting & Training Agreement のレビューと署名
        - Data Privacy Addendum & SCC のレビューと署名
        - 調達ツール（Coupa）でのパートナー企業プロファイルの作成
        - Google Drive でのパートナーフォルダの作成
        - パートナー追跡ツールでのパートナープロファイルの作成
        - Slack でのパートナーチャンネルの作成

1. パートナーの審査
    - シニアチャネルソリューションズマネージャーは、PS チームメンバーとのミーティング前にコンサルタントが完了するように [Skills Matrix Form](https://docs.google.com/forms/d/e/1FAIpQLScxgCHtbuLl53HrzH55hTpXxCSCXeUDRo6uyM2YKxy9QHMI0w/viewform?usp=sf_link) を送信します。
    - シニアチャネルソリューションズマネージャーは、コンサルタントがソフトスキルおよびコンサルティングスキルを示す 2〜3 分のビデオを録画する方法について、パートナープリンシパルと一緒に確認します。
    - コンサルタントはソフトスキルコースを完了する必要があります（ビデオを Google Drive にアップロードしてリンクを共有）
    - シニアチャネルソリューションズマネージャー／PS ディレクターがソフトスキルコース提出をレビュー／承認します
    - シニアチャネルソリューションズマネージャーは、コンサルタントが [PSE 認定](https://university.gitlab.com/learn/learning-path/gitlab-certified-services-engineer-professional-learning-path) を完了したこと（少なくともマイグレーションおよび PM 認定）を確認します

1. パートナーオンボーディング
    - パートナープリンシパルはコンサルタントに [GitLab の Partner Portal](https://partners.gitlab.com) への登録を依頼します。
        - GitLab Learn (Thought Industries)
            - [Migration](https://gitlab.edcast.com/pathways/gitlab-migration-services-engineer-pathway)
            - [Implementation](https://gitlab.edcast.com/pathways/gitlab-implementation-engineer-specialist-pathway)
            - Training
                - [GitLab Certified Security Speialist](https://gitlab.edcast.com/pathways/gitlab-certified-security-specialist-pathway-for-gitlab-part)
                - [GitLab Certified CI/CD Specialist](https://gitlab.edcast.com/pathways/gitlab-certified-ci-cd-specialist-pathway-for-gitlab-partner)
                - [GitLab Certified Associate Pathway](https://gitlab.edcast.com/pathways/gitlab-certified-associate-pathway-for-gitlab-partners)
                - [GitLab Certfied Project Management Specialist](https://gitlab.edcast.com/pathways/gitlab-certified-project-management-specialist-pathway-for-g-this)
        - PSE コンサルタントオンボーディング
            - プロジェクトコーディネーターは、コンサルタントがプロジェクトに正しくマッチすることを確認するため、シニア PSE との 30〜45 分のテクニカルディープダイブをスケジュールします。
            - インタビュー結果はパートナー追跡シートに記録されます
            - オンボーディングを進めるにはシニア PSE の承認が必要です
            - シニアチャネルソリューションズマネージャーは、コンサルタントがプロジェクトを完了するために必要なシステムおよびツールへのアクセスを得るためのアクセスリクエストを作成します。
            - シニアチャネルソリューションズマネージャーは、コンサルタントにオンボーディング Issue を作成およびアサインします。また、運用タスク（プロジェクト経費の提出（プロセスについてはページの最後を参照）およびタイムシート提出プロセスを含む）について確認するために PS Ops チームとのコールをスケジュールします。
            - プロジェクトコーディネーターは、コンサルタントをプロジェクト PM に紹介し、プロジェクトをキックオフします。

        - プロジェクトマネージャーオンボーディング
            - コンサルタント PM は GitLab Certfied Project Management Specialist を完了します
            - シニアチャネルソリューションズマネージャーは、コンサルタントがプロジェクトに適合することを確認するため、PS ディレクターまたはシニア PM との 30 分のコールをスケジュールします。オンボーディングを進めるには承認が必要です。
            - シニアチャネルソリューションズマネージャーは、コンサルタントがプロジェクトを完了するために必要なシステムおよびツールへのアクセスを得るためのアクセスリクエストを作成します。
            - シニアチャネルソリューションズマネージャーは、コンサルタントにオンボーディング Issue を作成およびアサインします。また、運用タスク（プロジェクト経費の提出（プロセスについてはページの最後を参照）およびタイムシート提出プロセスを含む）について確認するために PS Ops チームとのコールをスケジュールします。
            - コンサルタントはオンボーディング Issue を完了し、オンボーディング Issue を完了済みとマークする必要があります
            - プロジェクトコーディネーターは、コンサルタントをプロジェクトチームに紹介し、プロジェクトをキックオフします。
    - プロフェッショナルサービスオペレーションチームのタスク
        - PS Ops チームはオンボーディングバディをアサインします
        - オンボーディングバディは、プロジェクトを通してコンサルタントをフォローします
        - PS Ops チームはコンサルタントのオンボーディングジャーニーを管理します。
            - タイムシート提出を含むすべての必要な運用タスクをレビューします。

### パートナーオンボーディング

- PS Ops チームは Kantata でコンサルタントをセットアップします
- PS Ops チームはコンサルタントとミーティングを行い、[時間の記録方法をレビューします](/handbook/customer-success/professional-services-engineering/professional-services-operations)
- PS Ops チームはアクセスリクエスト Issue を提出します
  - 適切な技術ツール（ハードウェアおよびソフトウェア）へのアクセスをリクエスト
  - 適切な Slack チャンネルへのコンサルタントの追加をリクエスト
  - PS GitLab プロジェクトマネージャーがコンサルタントとプロジェクトを開始
- PS GitLab プロジェクトマネージャーは SOW に対するコンサルタントの稼働時間を追跡します
- PS GitLab プロジェクトマネージャーは、コンサルタントが SOW の条件に従ってプロジェクトを完了できるよう、総バーン対プロジェクトバーンを監視します
- PS GitLab プロジェクトマネージャーは、適切に Change Order のリスクを PS Ops に提起します
- コンサルタントは、オンボーディングバディとのミーティングを含む、顧客ミーティング外での週次チェックインを実施します。*コンサルタントと PS オンボーディングバディは、明確なコミュニケーションを確保します（コンサルタントは Slack へのアクセスが少ないため）。*

### コンサルティングサブコントラクター プライムパートナー Statement of Work（SOW）プロセス

コンサルティングサブコントラクティングプライム SOW には、パートナーが GitLab に代わってコンサルティングをデリバリーするためのレートおよび金額などの諸条件が含まれます。各パートナーには、プライムパートナー SOW で指定された金額があります。資金が枯渇すると、新しいプライムパートナー SOW が生成されます。各プライムパートナー SOW には、対応する Coupa 申請および Work Authorization アサインメントがあります。

コンサルティングサブコントラクティングプライムパートナー SOW は Master Professional Services Agreement を参照しているため、この契約も Data Processing Agreement と共に完全に締結されている必要があります。

シニアチャネルソリューションズマネージャーは、サブコントラクティングパートナーとの関係を管理する責任を持ちます。

**プロセス**

- シニアチャネルソリューションズマネージャーおよびプロジェクトコーディネーターは、顧客と Master Professional Services Agreement および Data Processing Agreement が完全に締結されていることを確認します。必要に応じて PS シニアチャネルソリューションズマネージャーにフォローアップします。
- パートナーシップに関する相互合意が達成された後、シニアチャネルソリューションズマネージャーはコンサルティングサブコントラクティングプライムパートナー SOW の初期版をパートナーにレビュー用に送信します。
- パートナーが SOW にレッドラインを引いた場合、シニアチャネルソリューションズマネージャーは GitLab の法務チームおよびパートナーと協力して、相互合意の SOW を取得します。
- シニアチャネルソリューションズマネージャーは、パートナーコンサルティングサブコントラクティングプライムパートナー SOW の開始についてプロジェクトコーディネーターに通知します。プロジェクトコーディネーターは、追跡目的で PC Partner SOW Tracker ボードに追加される新しいチェックリスト Issue を作成します。
- GitLab とパートナーの間で SOW の相互合意を受け取った後、シニアチャネルソリューションズマネージャーは、プライムパートナー SOW にリーガルスタンプを追加するためのリーガルケースを提出します。
- リーガルスタンプ済みのプライムパートナー SOW のバージョンを受け取った後、シニアチャネルソリューションズマネージャーは DocuSign 経由で GitLab およびパートナーの署名のためにそれを送信します。DocuSign の基本については、このビデオを参照してください。
- 完全に締結された SOW を受け取った後、プロジェクトコーディネーターは Zip プロセスステップに従い、プライムパートナー SOW のリクエストおよび PO を提出します。
- プライムパートナー SOW が署名および承認プロセス中、プロジェクトコーディネーターはステータスを監視し、PC Partner SOW Tracker ボードのチェックリスト Issue を適切に更新します。
- SOW、Coupa 申請、PO が承認された後:
  - プロジェクトコーディネーターは、完全に締結されたプライムパートナー SOW のコピーをパートナー SFDC アカウントおよび該当するパートナー Google Drive フォルダに保存します。
  - プロジェクトコーディネーターは、該当するパートナー G-Drive フォルダ内に、パートナーおよび SOW 固有のバージョンの Partner Invoicing SOW Consulting Funds Tracker を作成します。
  - シニアチャネルソリューションズマネージャーは、完全に締結されたプライムパートナー SOW のコピーをパートナーに送信します。

### パートナースケジューリングプロセス

パートナースケジューリングプロセスは次のとおりです:

1. プロジェクトコーディネーターは、プロジェクトデリバリーをパートナーにアウトソースする前に、まず内部キャパシティをレビューします。
2. プロジェクトをパートナーがスタッフィングする必要があると判断されたら、プロジェクトコーディネーターはパートナー Slack チャンネルでパートナーリードにプロジェクト情報をタグ付けします。
3. プロジェクトコーディネーターがパートナーリードと合意したプロジェクトアサインメントについて作業した後、プロジェクトコーディネーターはパートナーが Docusign 経由でレビューおよび実行するための Work Authorization フォームを送信します。
4. パートナーエンジニアが審査されていない場合、プロジェクトコーディネーターは前述のパートナー審査プロセスを進めます。
5. パートナーエンジニアが審査されている場合、プロジェクトコーディネーターは進めて Work Authorization フォームを送信します。
6. プロジェクトコーディネーターは、プライムパートナー SOW の資金に対する Work Authorization を追跡します。

### コンサルティング Work Authorization フォーム

コンサルティングサブコントラクティングプライムパートナー SOW には、Work Authorization フォームが含まれます。Work Authorization フォームは、コンサルティングおよびトレーニングデリバリーのためにパートナーエンジニアおよびトレーナーを契約上確保するために使用されます。1 つのコンサルティングまたはトレーニングプロジェクトが、コンサルティングまたはトレーニング Work Authorization フォームに記載される必要があります。PS オペレーションチームが、パートナー向けの Work Authorization フォームを開始します。

- Work Authorization に含まれるもの（これに限定されない）:
        - スコープ
        - 技術要件
        - バックグラウンドチェック／セキュリティクリアランス要件
        - 時給
        - MSA、MPA、またはサブコントラクティング契約で決定される請求条件
        - 作業完了日
        - 旅費および経費（オンサイトが必要な場合）

### デリバリーキット

デリバリーキットは、パートナーが GitLab プロフェッショナルサービスのデリバリーを効率化するために使用できるリソース、ツール、ドキュメンテーションの包括的なパッケージです。これらのキットには次のものが含まれます:

1. プロジェクトテンプレートおよびチェックリスト
2. ベストプラクティスおよびガイドライン
3. 技術ドキュメンテーション

パートナーは [デリバリーキット](https://gitlab.com/gitlab-org/professional-services-automation/delivery-kits) にアクセスできます。エンゲージメントの出発点としてこれらのキットを使用することが推奨されます。

各キットは、パートナーが成功裡なサービスデリバリーのための最新の方法論およびツールにアクセスできるよう、GitLab プロフェッショナルサービスチームによって定期的に更新されます。

### タイムシート提出

毎週、パートナーは営業日の終わりまでに PSA ツールにタイムシートを提出します。
タイムシートは毎週金曜日が期限です。すべてのタイムシートを期限までに毎週 PSA ツールに提出することが必須です！
タイムシート提出の月末期限は、月末にパートナー Slack チャンネルに掲載されます。月末期限が近づくと月の半ばにリマインダーが提出されます。さらにご質問がある場合は、プロジェクトマネージャーまたはオペレーションチームにご確認ください。

### パートナー月次請求

毎月末後、パートナーは私たちのプロジェクトに費やした時間の請求書を Coupa Procurement System に提出します。アサインされた PC は、承認待ちの請求書があるというメール通知を受け取ります。
請求書は、前月分について毎月最初の週に Coupa で提出されるべきです。例えば、5 月 1 日から 31 日の間に実施された作業は、6 月の最初の週に Coupa で提出されます。各月の 15 日までに請求書が提出されない場合、PS オペレーションチームはパートナーリードにフォローアップして請求書が時間通りに提出されることを確認します。

請求書は次の詳細と共に Coupa に提出されるべきです:

- パートナー名
- PO 番号
- 作業実施日
- コンサルタント名
- プロジェクト名
- 作業時間
- 時給
- 合計

[サンプルを見る](/handbook/customer-success/professional-services-engineering/examples/partner_invoice_mockup.md)

各パートナーごとに毎月 1 つの請求書が提出され、各プロジェクトごとに行を分割するべきです。
毎月複数の請求書を提出する必要がある場合は、オペレーションマネージャーから承認を得る必要があります

追加のサポートが必要な場合は、必ずパートナー Slack チャンネルでお問い合わせください。

Coupa 関連の役立つリソース:

[Coupa Supplier Portal](/handbook/finance/procurement/coupa-faq/#where-can-i-find-more-information-on-the-coupa-supplier-portal)

[Coupa End Users Guide](/handbook/finance/procurement/coupa-faq/)

### 顧客プロジェクトのオンサイト出張

GitLab パートナーが出張する際:

顧客プロジェクトのために何らかの購入または出張予約を行う前に、必ずプロジェクトマネージャーまたはプロジェクトコーディネーターから承認を得てください。プロジェクトマネージャーまたはプロジェクトコーディネーターは、出張予算をパートナーに提供します。出張が発生したら、経費は Coupa を介して請求のために提出されるべきであり、次の詳細を含む必要があります:

- 各経費ごとに個別の項目を含む、この[テンプレート](https://docs.google.com/spreadsheets/d/1fSn1G4opUDpnmGlcd35Zi_Mks5zTFoeg03FP__Xghes/edit?usp=sharing) に従った経費レポート
- 各経費の領収書を含む 1 つの PDF ドキュメント
- [出張](/handbook/finance/travel/#expenses-while-traveling) のガイドライン
- 経費の[ガイドライン](/handbook/finance/expenses/)

経費は発生した月に請求されるべきです

### パートナーオフボーディング

- PS プロジェクトマネージャーは、コンサルタントを Project Retrospective ミーティングに招待します（適切に）
- PS プロジェクトマネージャーは、次のためのアクセスリクエストを提出します:
- 顧客プロジェクトの Slack チャンネルからコンサルタントを削除
- プロジェクト固有の GitLab ツールまたは開発作業スペースへのアクセスを削除
- コンサルタントが他の進行中のプロジェクトに従事していないことを確認
