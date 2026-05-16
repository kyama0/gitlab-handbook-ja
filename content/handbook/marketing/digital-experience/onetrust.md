---
title: "OneTrust"
description: "OneTrust は、マーケティングが Web サイト上のプライバシーおよびコンプライアンスソリューションとして使用しているプライバシー、セキュリティ、データガバナンスのソフトウェアです。"
upstream_path: /handbook/marketing/digital-experience/onetrust/
upstream_sha: 2d678e92f3fbc59843a2973bbfa95041c6aef07f
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-07-09T15:19:03-07:00"
---

## 用途

OneTrust は、マーケティングが Web サイト上のプライバシーおよびコンプライアンスソリューションとして使用しているプライバシー、セキュリティ、データガバナンスのソフトウェアです。マーケティングオペレーションチームは法務チームと密に連携し、Cookie の設定を含む Web サイト上のプライバシーとコンプライアンスを主に担当しています。

## サポート

1. 技術的な支援: Slack #digital-experience-team
1. [サポートポータル](https://my.onetrust.com/s/?language=en_US)（別途アカウント／ログインが必要）
1. `support@onetrust.com`
1. [Cookiedatabase.org](https://cookiedatabase.org/)
1. [Cookiepedia](https://cookiepedia.co.uk/)

## 変更リクエスト

OneTrust 関連のリクエストは、[Marketing Operations](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new) で `onetrust_change_log_request` description テンプレートを使って新しい Issue を作成してください。`OneTrust::` ラベル付きの Issue を一覧表示する [OneTrust の変更ログはこちら](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/?sort=created_date&state=all&or%5Blabel_name%5D%5B%5D=OneTrust%3A%3ACookieCategory&or%5Blabel_name%5D%5B%5D=OneTrust%3A%3ACookieUpdate&or%5Blabel_name%5D%5B%5D=OneTrust%3A%3AGeolocation&or%5Blabel_name%5D%5B%5D=OneTrust%3A%3AOptControl&first_page_size=20) で確認できます。

## アクセス

OneTrust にアクセスするには、[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/)を作成してください。OneTrust は Google グループを通じて Okta SSO 経由でプロビジョニングされます。ユーザーは、Okta SSO と OneTrust に直接接続された Google グループ経由で追加されます。すべてのユーザーは `Project Manager` として追加されます。アクセス取得後に更新できるよう、OneTrust で必要なロールをアクセスリクエストに明記してください。利用可能なロールは下記の[システムデフォルトロール](#system-default-roles)を参照してください。

## トレーニング

### Cookie Compliance モジュール

1. [Web サイトのスキャン、Cookie のカテゴライズと維持に関する実装ウェビナー](https://my.onetrust.com/articles/en_US/Knowledge/Scanning-a-Website-Categorizing-Maintaining-Cookies-Webinar?r=56&ui-knowledge-components-aura-actions.KnowledgeArticleVersionCreateDraftFromOnlineAction.createDraftFromOnlineArticle=1)
1. [Cookie Compliance バナー、プリファレンスセンター、ジオロケーションルールの設定に関する実装ウェビナー](https://my.onetrust.com/articles/en_US/Knowledge/Configuring-Cookie-Compliance-Banner-Preference-Center-Geolocation-Rules-Implementation-Webinar?r=56&ui-knowledge-components-aura-actions.KnowledgeArticleVersionCreateDraftFromOnlineAction.createDraftFromOnlineArticle=1)
1. [スクリプト統合 - Cookie バナースクリプトのパブリッシュに関する実装ウェビナー](https://my.onetrust.com/articles/en_US/Knowledge/Script-integration-Publishing-the-Cookie-Banner-Script-Implementation-Webinar?r=56&ui-knowledge-components-aura-actions.KnowledgeArticleVersionCreateDraftFromOnlineAction.createDraftFromOnlineArticle=1)
1. [Cookie ブロッキング - Tag Manager と HTML を介した Cookie のブロックに関する実装ウェビナー](https://my.onetrust.com/articles/en_US/Knowledge/Cookie-Blocking-Blocking-cookies-via-Tag-Managers-and-HTML?r=56&ui-knowledge-components-aura-actions.KnowledgeArticleVersionCreateDraftFromOnlineAction.createDraftFromOnlineArticle=1)

### データ主体アクセスリクエスト（DSAR）モジュール

1. [キックオフコール録画 20210106](https://drive.google.com/file/d/1P7NeQaX8J5ybJYopbtMhPzNMgGyZP3Dx/view?usp=sharing)
1. [ワークショップ録画 20210111](https://drive.google.com/file/d/12ZfyJq2m8TszkRndFgZE0WOL4aG3XOHI/view)

## システムデフォルトロール

1. **Assessments Manager:** Assessment Manager は、Assessment Automation モジュール内のほとんどの日常業務と一部の管理機能にアクセスできるビジネスユーザーです。デフォルトでは、Assessment Manager は破壊的機能と設定機能へのアクセスが制限されています。
1. **Audit Manager:** Audit Manager は、Audit Management モジュール内のほとんどの日常業務と一部の管理機能にアクセスできるビジネスユーザーです。デフォルトでは、Audit Manager は破壊的機能と設定機能へのアクセスが制限されています。
1. **Auditor:** Auditor ユーザーは、Audit Management モジュール内の限定された機能にアクセスできるビジネスユーザーです。デフォルトでは、Auditor はワークペーパーの結果に貢献し、所見を記録できますが、破壊的機能と設定機能へのアクセスはありません。
1. **Awareness Training Learner:** Awareness Training Learner は、自分にアサインされたトレーニングコースのみにアクセスできる低レベルのユーザーです。Awareness Training Learner には管理機能へのアクセスはありません。
1. **Awareness Training Manager:** Awareness Training Manager は、Awareness Training モジュール内のほとんどの日常業務と一部の管理機能にアクセスできるビジネスユーザーです。デフォルトでは、Awareness Training Manager は破壊的機能と設定機能へのアクセスが制限されています。
1. **Consent Manager:** Consent Manager は、Universal Consent ＆ Preference Management モジュール内のほとんどの日常業務と一部の管理機能にアクセスできるビジネスユーザーです。デフォルトでは、Consent Manager は破壊的機能と設定機能へのアクセスが制限されています。
1. **Cookie Manager:** Cookie Manager は、Cookie Compliance モジュール内のほとんどの日常業務と一部の管理機能にアクセスできるビジネスユーザーです。デフォルトでは、Cookie Manager は破壊的機能と設定機能へのアクセスが制限されています。
1. **Data Mapping Manager:** Data Mapping Manager は、Data Mapping モジュール内のほとんどの日常業務と一部の管理機能にアクセスできるビジネスユーザーです。デフォルトでは、Data Mapping Manager は破壊的機能と設定機能へのアクセスが制限されています。
1. **Data Subject Requests Manager:** Data Subject Requests Manager は、Data Subject Requests モジュール内のほとんどの日常業務と一部の管理機能にアクセスできるビジネスユーザーです。デフォルトでは、Data Subject Requests Manager は破壊的機能と設定機能へのアクセスが制限されています。
1. **Enterprise Policy Manager:** Enterprise Policy Manager は、Enterprise Policy モジュール内のほとんどの日常業務と一部の管理機能にアクセスできるビジネスユーザーです。デフォルトでは、Enterprise Policy Manager は破壊的機能と設定機能へのアクセスが制限されています。
1. **Incidents Manager:** Incidents Manager は、Incidents モジュール内のほとんどの日常業務と一部の管理機能にアクセスできるビジネスユーザーです。デフォルトでは、Incidents Manager は破壊的機能と設定機能へのアクセスが制限されています。
1. **Invited:** Invited ユーザーはアプリケーションへのアクセスが最小限です。デフォルトでは、Invited ユーザーは完了するよう招待された Assessment にのみアクセスできます。アプリケーションは、メールで提供されたリンク経由でのみこれらのユーザーがアクセスできます。Invited ユーザーは Assessment からメールアドレスで追加されます。Invited ユーザーは Users 画面では作成できません。
1. **IT Risk Manager:** IT Risk Manager は、IT Risk Management モジュール内のほとんどの日常業務と一部の管理機能にアクセスできるビジネスユーザーです。デフォルトでは、IT Risk Manager は破壊的機能と設定機能へのアクセスが制限されています。
1. **Maturity ＆ Planning Manager:** Maturity ＆ Planning Manager は、Maturity ＆ Planning モジュール内のほとんどの日常業務と一部の管理機能にアクセスできるビジネスユーザーです。デフォルトでは、Maturity ＆ Planning Manager は破壊的機能と設定機能へのアクセスが制限されています。
1. **Privacy Notice Author:** Privacy Notice Author は、すべてのプライバシー通知の作成、表示、編集にアクセスできるビジネスユーザーです。デフォルトでは、Privacy Notice Author には破壊的機能と設定機能へのアクセスはありません。
1. **Privacy Notice Manager:** Privacy Notice Manager は、Policy ＆ Notice Management モジュール内のほとんどの日常業務と一部の管理機能にアクセスできるビジネスユーザーです。デフォルトでは、Privacy Notice Manager は破壊的機能と設定機能へのアクセスが制限されています。
1. **Privacy Notice Viewer:** Privacy Notice Viewer は、現行版のプライバシー通知の閲覧にアクセスできるビジネスユーザーです。デフォルトでは、Privacy Notice Viewer には破壊的機能と設定機能へのアクセスはありません。
1. **Privacy Officer:** Privacy Officer ユーザーは、アプリケーション内のほとんどの機能にアクセスできる高レベルのユーザーです。デフォルトでは、Privacy Officer ユーザーには監査ログ、削除、統合などの管理的・破壊的機能へのアクセスはありません。
1. **Program Benchmarking Manager:** Program Benchmarking Manager は、Program Benchmarking モジュール内のほとんどの日常業務と一部の管理機能にアクセスできるビジネスユーザーです。デフォルトでは、Program Benchmarking Manager は破壊的機能と設定機能へのアクセスが制限されています。
1. **Project Owner:** Project Owner ユーザーは、アプリケーション内の日常的な機能にアクセスできるビジネスユーザーです。デフォルトでは、Project Owner ユーザーは管理的、破壊的、設定機能へのアクセスが制限されています。Project Owner ユーザーは Assessment の起動、インベントリデータのレビュー、スキャン結果の表示、その他の日常的なビジネスタスクを完了できます。
1. **Project Respondent:** Project Respondent ユーザーは、アプリケーションにログインするためのパスワードを作成し、自分にアサインされたすべての Assessment のリストにアクセスできます。Project Respondent には Assessment、リスク、追加情報リクエストをアサインでき、アサインされた Assessment に応答し、Assessment にコメントを追加できます。
1. **Project Viewer:** Project Viewer ユーザーは、アプリケーションへの読み取り専用アクセスを持ちます。デフォルトでは、Project Viewer ユーザーは情報を閲覧できますが、変更や Assessment への応答はできません。Project Viewer ユーザーは Assessment の回答者として選択できません。
1. **Site Admin:** Site Admin ユーザーはアプリケーションへの完全なアクセスを持ちます。デフォルトでは、Site Admin ユーザーにはすべての権限が有効になっています。
1. **Vendor Manager:** Vendor Manager は、Vendor Risk Management モジュール内のほとんどの日常業務と一部の管理機能にアクセスできるビジネスユーザーです。デフォルトでは、Vendor Manager は破壊的機能と設定機能へのアクセスが制限されています。

カスタムロールも作成できます。詳細は[このサポート記事](https://my.onetrust.com/s/article/UUID-9f1679fe-3d0a-713a-c995-cd391d39f5c1)をご覧ください（ログイン必須）。

## 実装

詳細は[エピック](https://gitlab.com/groups/gitlab-com/-/epics/1265)を参照してください。

## Cookie Compliance

### Web サイトのスキャン

スキャナーはアイルランド（OneTrust サーバーがある場所）からのユーザーをシミュレートします。

1. ログイン後の "home screen" から Cookie Compliance タイルをクリックするか、ホームアイコンの隣の左上隅にある "launchpad" アイコンをクリックして、Cookie Compliance モジュールへ移動します。
1. `Add Website` ボタンをクリックします。
1. ベストプラクティス: `www` なしのルートドメインを追加してスキャンします。`www` 付きのドメインをスキャンすると、プレフィックス付きのドメインがキャプチャされません。
1. ドメインスキャンをアサインする `GitLab` 組織を選択します。
1. `More Details` の下では、ページ数（デフォルト 1,000）の制限、サイト内の特定パスへの制限、過去のスキャン履歴のクリア、クエリパラメータ付きページのスキャン、サイト内のスキャン対象ページのターゲット指定、サイトマップ URI の指定など、スキャンで使用する追加オプションがあります。

#### Web サイトスキャンメニュー

スキャン済みの Web サイトリストで、任意のドメインにマウスオーバーし、右側の 3 点アイコンをクリックします。このアイコンをクリックすると、その特定の Web サイトスキャンに対する追加オプションが表示されます:

1. Re-scan: Web サイトを再スキャンし、再スキャン用の追加オプションを提供します。
1. Re-process
1. Reassign: 別の組織に再アサインします
1. Login: ログインや Web フォームの背後をスキャンする機能を提供します。クリックすると Web サイトの詳細にリダイレクトされ、追加情報を提供できます。Google Chrome の `Inspect` 機能を使うと Web フォームの HTML 属性を収集できます
1. Schedule: 将来のスキャンをスケジュールします（デフォルト: 1 年の各四半期で 3 か月ごと）。完了時にユーザーへ通知するオプションあり
1. Stop: 保留中のスキャンを停止します
1. Delete: スキャンを削除します
1. スキャン結果のエクスポート
1. ヘルプを取得

### Web サイトスキャンの設定

#### スキャンの詳細オプション

1. **スキャンを 1000 ページに制限する:** ページ数を制限したい場合に使用します。スキャン対象ページ数を増やすほど、スキャン完了に時間がかかります。
1. **サイト内のこのパスに制限する:** OneTrust はこのオプションを有効にすると `about.gitlab.com/fr` と `about.gitlab.com` を 2 つの別ドメインとみなします。
1. 過去のスキャン履歴をクリアする: 過去のデータは削除されません。スキャナーは初回スキャンと同じようにそのドメインを扱います（ユースケース: Web サイトの大幅な Cookie やデザインの変更）
1. **クエリパラメータ付きページをスキャンする:** クエリパラメータ付き URL（例: about.gitlab.com?utm_source=marketo）をスキャンします。入力フィールドの例: `name=first,name=last`。複数のパラメータをカンマで区切ります。スキャンは指定されたパラメータでドメインを検索します。入力するドメインは URL の末尾に `?` を含めるようにしてください。
1. **スキャン対象ページをターゲット指定:** `https://` を含む正確な URL を入力します。ユースケース: ユーザーがアクセスできない可能性のある特定ページや、この特定の Web ページをスキャンしたい場合。複数ページの場合は改行で追加します。
1. **サイトマップ URI:** `https://` と `.xml` を含むサイトマップ URL を入力します。

### Cookie スキャンのスケジュール

1. Web サイトスキャンメニューから、スキャンスケジュールを作成したいドメインを強調表示します。
1. 3 点メニューをクリックします。
1. `Schedule` を選択します。
1. デフォルトは 1 年の各四半期で 3 か月ごとに設定されています。特定の日付を選択することもできます。
1. オプション: スケジュールされたスキャンが完了したときにユーザーへ通知するためのメールアドレスを入力します。

### スキャン結果の表示

スキャンが完了すると、`Websites` メニューからスキャンをクリックして結果を表示できます。スキャン結果を可視化するスキャンダッシュボードに移動し、以下に関する情報が含まれます:

1. トラッキングテクノロジー
1. カテゴリ別 Cookie
1. タグ
1. フォーム
1. ページ
1. ローカルストレージ

`Show` ドロップダウンで、その特定ドメインのすべてのスキャンのサマリーを表示でき、過去の個別スキャンを日時タイムスタンプ付きで表示できます。

メインのスキャン結果ページからは、これら 6 つのカテゴリを選択して特定の結果をさらに掘り下げることもできます。

#### Cookie スキャン結果

特定の Cookie の名前を含む Cookie のカテゴリを表示します。この情報は [OneTrust の Cookie データベース](https://cookiepedia.co.uk/)から取得され、それに対して比較されます。このビューで `Export` をクリックすることで結果をエクスポートできます。`Export` をクリックすると、結果をエクスポートする特定のスキャンを選択できます。エクスポートがダウンロード可能になると、最上部メニューのベルアイコンとして OneTrust テナント内に通知が表示されます。

### スキャン結果のエクスポート

ベルアイコンから結果（`.xlsx`）をダウンロードできます。

### Cookie のカテゴライズ

1. Cookie Compliance モジュールの左メニューにある `Categorizations` に移動します。
1. `Categories` をクリックします。
1. 各カテゴリの矢印をクリックすると、その Cookie カテゴリの説明が展開されます。この説明はユーザーに表示されるものです。
1. 鉛筆アイコンをクリックして Cookie カテゴリの説明を編集します。**重要:** これらの説明を更新する前に GitLab 法務チームと協議する必要があります。これらは Cookie 使用に関する私たちのポリシーと厳密に一致しなければならないためです。

これらの Cookie カテゴリは標準で OneTrust が提供するデフォルトです:

1. **Strictly necessary cookies ID C0001:** Web サイトが正常に動作するためにこれらの Cookie が必要です（例: 買い物カゴに入れたアイテムの識別）
1. **Performance cookies ID C0002:** サイト訪問者が Web サイトをどう使用しているかに関する情報を取得します（例: Google Analytics）
1. **Functional cookies ID C0003:** サイト訪問者の体験の追加的な強化を提供します（例: ローカライゼーション用の言語セレクター）
1. **Targeting cookies ID C0004:** マーケティングをパーソナライズするためにユーザーに関するより多くの情報を収集しようとする Cookie（例: リマーケティング）
1. **Social media cookies ID C0005:** サイトに追加されたソーシャルメディアサービスで、ユーザーが友人やネットワークと簡単にコンテンツを共有できるようにします

新しい Cookie カテゴリを作成することもできます。

`Unknown` カテゴリの Cookie は、開発者、サードパーティベンダー、または Google 検索の助けを借りて手動でカテゴライズする必要があります。

### Cookie の追加、編集、削除

1. `Categorizations` メニューの下の `Cookies` タブに移動します。
1. 識別・カテゴライズされた Cookie のリストを、特定された ドメイン、Cookie の有効期間、ホスト名、説明とともに表示します。
1. 各 Cookie をクリックして、その Cookie に関する詳細情報を表示します。
1. `Edit Cookie` オーバーレイでは、Cookie の異なるカテゴリを選択し、Cookie の説明を追加し、Cookie の有効期間を更新し、それがファーストパーティかサードパーティ Cookie かを記録し、Cookie を手動で割り当てるドメインを選択できます。Cookie の有効期間の変更は監査目的であり、Web サイト上の機能を変更するものではありません。
1. ドメインのスキャンを実行せずに Cookie をピックアップしたい場合、特定ドメインに Cookie を手動で追加します。`Add Cookie` をクリックして手動で Cookie を追加し、ステップ 4 のその Cookie に関するすべての情報を入力します。**注意:** Host は Cookie が存在するドメインではなく、Cookie がホストされている場所です。これは入力したドメインに Cookie を追加するのではなく、監査の一部ではないドメインの既存 Cookie を追加します。
1. リストから複数の Cookie を選択することで、Cookie を一括カテゴライズすることもできます。リストからすべての Cookie または特定の Cookie を選択し、二重矢印アイコンをクリックしてそれらの Cookie のカテゴリを一括編集します。
1. 検索バーを使って Cookie 名やホスト名で特定の Cookie を検索します。
1. フィルタアイコンを使って、カテゴリ、ドメイン、有効期間、ホスト名で特定タイプの Cookie に絞り込みます（例: 機能的 Cookie のみ表示）。

### Cookie Compliance テンプレートの追加、編集、管理

#### ベーステンプレート

1. **Generic Cookie Banner:** フレームワーク固有ではないテンプレート。グローバルテンプレートを作成するために使用するためのものです。
1. **GDPR (General Data Protection Regulation):** Cookie カテゴリのみのテンプレート。いつでも IAB を有効にできます。このテンプレートは GDPR 準拠です。
1. **IAB Transparency and Consent Framework 1.0:** ポリシーのユーザーインターフェースガイドラインからの推奨設定に基づく IAB Transparency and Consent Framework 1.0 用のテンプレート。これは 2020 年前半にサンセットします。
1. **IAB Transparency and Consent Framework 2.0:** ポリシーのユーザーインターフェースガイドラインからの推奨設定に基づく IAB Transparency and Consent Framework 2.0 用のテンプレート
1. **CCPA Template (California):** California Consumer Privacy Act により近い言葉遣い、カテゴリのグループ化、設定を含むテンプレート。

#### 新しいテンプレートの追加

1. `Templates` をクリックします。
1. `Add New Template` をクリックします。
1. サイトに適用されるフレームワークと法律を選択します。
1. テンプレートに名前を付けます。
1. `GitLab` 組織を選択します。
1. デフォルト言語を追加します。
1. 次の画面で、Cookie バナーのレイアウト、スタイリング、コンテンツ、動作を設定します。右ペインに Cookie バナーのプレビューが表示されます。

#### バナーテンプレートのカスタマイズ

**レイアウトオプション**

最も人気: Flat、bottom position

1. Center rounded
1. Flat
1. Floating flat
1. Floating rounded
1. Floating rounded corner
1. Floating rounded icon
1. ポジション: bottom または top

**スタイリングオプション**

色は RGB または 16 進コードで指定します。

1. 同意 ＆ 拒否ボタンの色
1. ボタンテキストの色
1. テキストの色
1. 背景色
1. リンクテキストの色
1. アコーディオン背景色
1. プリファレンス管理ボタンの色
1. プリファレンス管理リンクの色

カスタム CSS のオプションもあります（プレビューでは利用不可）。

**コンテンツオプション**

1. タイトル ＆ 説明（HTML 対応） - 説明はサイトの同意モデルに合わせてカスタマイズが必要な場合があり、訪問者を誤解させないようにします。
1. Cookie ポリシーリンク（リンクテキストと URL）
1. ボタンセット: `allow all` ボタン表示、`cookie settings` ボタン表示、Cookie 設定ボタン名、Cookie 設定ボタンのスタイル（リンクまたはボタン）、`reject all` ボタン表示、`close` ボタン表示

**動作オプション**

1. バナー操作を必須にする: 訪問者に選択を強制するオーバーレイを表示

#### 言語の管理

Cookie バナーをローカライズしたい言語を選択します。デフォルト言語も選択します。言語別に異なる Cookie バナーオプションを設定できます。私たちのポリシーに合致する言語であることを確認してください。`show advanced langauges` オプションを切り替えると、各国別バージョンの言語が表示されます。

#### プリファレンスセンター

`styling` で、プリファレンスセンター用に Cookie バナーから異なるスタイリングを上書きすることを選択できます。これにはロゴの追加オプションや、Cookie カテゴリのアコーディオンタイプの変更が含まれます。

レイアウトの下では、プリファレンスセンターでも異なるオプションが用意されていることに注意してください。選択したオプションによっては、一部の機能は利用できない場合があります（例: `tab` レイアウトを選択すると Cookie カテゴリのアコーディオン機能が削除されます）。プリファレンスセンターでもカスタム CSS が利用可能です。

プリファレンスセンターでのアクセシビリティに関する [WCAG（Web Content Accessibility Guidelines）](https://www.w3.org/2004/10/wcag2-nav/wcag20.html) ベストプラクティスのオプションがあります。

**詳細設定**

1. `Show cookies list` を切り替えると、ユーザーがプリファレンスセンターで選択したカテゴリに関する `cookie details` へのリンクが表示されます。
1. ホスト、期間、タイプ、カテゴリ、説明を含む特定の Cookie に関するさまざまな情報をユーザーに表示するかどうかを選択します。Cookiepedia へのリンクや、ユーザーが特定の Cookie ホストをオプトアウトできるオプションもあります。

ユーザー体験を向上させるため、Cookie カテゴリをグループ化したり、別のグループの Cookie カテゴリを追加したりできます（例: ターゲティングとソーシャルメディア Cookie カテゴリをグループ化した「ads」という新しいグループ）。

#### Cookie リスト

これは、ユーザーが表示できる Cookie の包括的なリストです。`styling` では、タイトル、Cookie グループ名、テーブルヘッダーテキスト、テーブルヘッダー背景、プライマリテキストの色オプションを調整できます。テーブル形式のオン／オフを切り替えます。ここでもカスタム CSS のオプションがあります。`content` では、Cookie リストのタイトル、説明、ホスト、Cookie 列、`cookies used` ラベルのオプションを調整できます。`show lifespan` のオン／オフを切り替えます。

加えた変更が法務によって承認され、OneTrust テナント内に保存されていることを確認してください。

### ジオロケーションルールの追加、編集、削除

1. Cookie Compliance メニューで `Geolocation Rules` をクリックします。
1. 標準で `Default Consent Policy` が存在します。
1. `Create New` をクリックして新しいジオロケーションルールグループを作成します。
1. ルールグループに名前を付けます。
1. `GitLab` 組織を選択します。
1. 説明を入力します。
1. `rule group details` では、デフォルトの `global` ルールが存在し、これは国に関係なくグローバルにこれらの設定を適用します。国または地域固有のルールを追加するには、`Add rule` をクリックしてオプションを適切に更新します。
1. ルールに名前を付けます（例: GDPR）。
1. ポリシーをアサインしたい地域を選択します。特定のルールに複数の地域を含めることができます。**注意:** モバイルデバイスのジオロケーションは、インターネット接続デバイスから報告される座標を使用します。境界付近のユーザーは、この機能の精度が低下する可能性があります。
1. `Show Banner` のオン／オフを切り替えます。チェックを外すと、バナーは表示されませんが設定は有効になります。
1. このジオロケーションルールに使用するテンプレートを入力します。
1. このジオロケーションルールの同意モデルを選択します。ここでドロップダウンをクリックすると、すべての Cookie カテゴリの同意モデルを選択するか、各 Cookie カテゴリの同意モデルを指定できます。Cookie カテゴリ別に `Do Not Track` を切り替えます。
1. `Behaviors` では、Cookie バナーと連携してこのルールの動作を切り替え、その特定の動作が `accept all cookies` するかしないか、およびバナーを閉じるかを切り替えられます。
1. 再同意は次の期間後に発生する: これにより、再同意を取得するためにユーザーへバナーが再度表示されます。デフォルトは 1 年ですが、月、年、日で設定できます。
1. 同意の記録をキャプチャ: 各ユーザーに関連付けられた Cookie ID。同意モジュールがそれらのプリファレンスをログに記録します。
1. 高度なアナリティクス: ブラウザタイプ、デバイスタイプ、ユーザーが同意した国を送信します。この情報はダッシュボードに表示されます。これを特定の Cookie カテゴリに切り替えます（例: Google Analytics 用のパフォーマンス Cookie）。
1. Google Consent Mode は、Google サービス（Google Analytics や Google Ads など）が Web サイト訪問者の同意プリファレンスに基づいてどのようにデータを収集・使用するかを制御する機能です。Storage Type 列には [Google からの固定の同意タイプ](https://support.google.com/analytics/answer/12334711) が含まれています。各 Storage Type は、Google プラットフォームが OneTrust と整合するように、OneTrust の Cookie カテゴリにマップされるべきです。

#### ジオロケーションルールグループのドメインへのアサイン

**アサインされたドメイン**

1. `Assign to Domains` をクリックします。
1. ジオロケーションルールをアサインしたいドメインを選択します。
1. `Assign` をクリックします。

### 同意モデル

1. **Opt-in 同意モデル:** Opt-in を選択すると、すべての Cookie カテゴリ（Strictly Necessary を除く）が Inactive に設定されます。これらの Cookie は、プリファレンスセンターで有効化されない限り、訪問者のデバイスには設定されません。
1. **Opt-out 同意モデル:** Opt-out を選択すると、すべての Cookie カテゴリ（Strictly Necessary を除く）が Active に設定されます。訪問者が Web サイトに来るとこれらの Cookie は自動的に有効化されます。Web サイトの訪問者は、プリファレンスセンターで Strictly Necessary 以外の Cookie を無効にできます。
1. **Implied 同意:** すべての Cookie カテゴリ（Strictly Necessary を除く）が Inactive Landing Page に設定されます。これらの Cookie は、Web サイトの訪問者が Cookie バナーで OK ボタンをクリックするか、Web サイトの閲覧を続けるまで設定されません。Web サイトの訪問者は、プリファレンスセンターで Cookie カテゴリを無効にできます。
1. **Notice only:** デフォルト同意モデルとして Notice Only を選択すると、すべての Cookie カテゴリが Always Active に設定され、Web サイト訪問者は無効にできなくなります。Web サイトが Cookie を使用していることを訪問者に通知するバナーが Web サイトのランディングページに表示されます。
1. **Custom:** このオプションを選択すると、サイト上の各 Cookie カテゴリに異なるデフォルトステータスを設定できます。組織のニーズに合わせて同意モデルをカスタマイズでき、各 Cookie カテゴリの Do Not Track ステータスを設定できます。

### スクリプトへのアクセス

1. スクリプトにアクセスするには、`Cookie Compliance` モジュールの左メニューで `Scripts` をクリックします。
1. スクリプトが実装されるドメインをクリックします。
1. OneTrust テナント内のドメインに変更を加えるたびに、ユーザーが Cookie バナー、プリファレンスセンターなどで反映された変更を確認できるよう、それらの変更を本番環境にパブリッシュする必要があります。

#### テスト

新しい変更をロールアウトするためのテストスクリプトが利用可能です。テストスクリプトはドメイン固有ではありません。テストスクリプトは本番スクリプトの機能と一致しますが、以下の点が異なります:

1. キャッシュがないため、変更を即座に確認できます。
1. このスクリプトはテストサイトで機能し、テスト目的のみで使用されるべきです。

テストスクリプトをパブリッシュしても、ライブの本番スクリプトには影響しません。

#### 本番

本番スクリプトはライブの Web サイトで使用するためのものです。最速のページロード速度。パブリッシュされた変更は反映までに最大 4 時間かかります。

**スクリプトタグはサイトの `<head>` 内の最初の要素として配置する必要があります。OneTrust スクリプトがサイト上の他のスクリプトより先に配置され、ユーザーが Cookie がマシンに設定される前に Cookie プリファレンスを検討する機会があることが重要です。**

ルートドメインで実装されたスクリプトは、後続のサブドメインとパスにも適用されます。サブドメインで実装されたスクリプトは、サブドメインにのみ適用されます。

変更を本番にプッシュするには、`Publish Production Scripts` をクリックし、スクリプトの変更点に注意します。サイトの `<head>` でスクリプトの再コピーと再実装が必要になる場合があるためです。

### スクリプトのバージョン

`Publish Test` をクリックします。ここでパブリッシュするスクリプトのバージョンを選択できます。フィールド名、古い値、新しい値を含めて、スクリプトバージョンと互換性があるかないかの機能についてもアラート表示されます。`Confirm` をクリックします。

### パブリケーション設定

ここでスクリプトのパブリケーション設定を確認できます。注意: これらの設定の一部を有効化または無効化すると、埋め込みスクリプトが変更され、サイト上で再実装が必要になる可能性があります。

1. **個別言語をパブリッシュ:** 切り替えが `off` の場合、すべての言語がパブリッシュされます
1. **ユーザーの再同意が必要ですか?** IAB TCF 2.0 への切り替えには、プリファレンスが変更されたためにユーザーの再同意が必要です。TCF 2.0 は TCF 1.0 と後方互換性がありません
1. **バナーの取得を防止:** 切り替えが `on` の場合、`otSDKStub.js` がロードされる際にサーバーからバナーテンプレート HTML と CSS が取得されません
1. **プリファレンスセンターの取得を防止:** 切り替えが `on` の場合、`otSDKStub.js` がロードされる際にサーバーからプリファレンスセンターテンプレート HTML と CSS が取得されません
1. **Cookie の自動ブロッキングを有効化:** 有効化されている場合、ユーザーが同意するまで Cookie が自動的にブロックされます。Auto-blocking はページロード時に Strictly Necessary 以外にカテゴライズされた Cookie をドロップするスクリプトを自動的にブロックします
1. **スクリプトでの言語検出を有効化:** 言語を判定できない場合は、テンプレートのデフォルト言語が使用されます（オプション: サイト訪問者のブラウザ設定から言語を判定する、または HTML ページから言語を判定する）

`Publish Test Scripts` をクリックします。ステージングサイトの HTML にスクリプトを実装します。

#### 自動ブロッキング

パブリケーション設定で Auto-blocking 機能が ON に切り替わっていると、ブラウザに Cookie を保管するすべての script タグに `optanon...` クラスが付加されます。スクリプトは、ユーザーが Cookie カテゴリに同意した場合にのみロードされます。たとえば、以下の Vimeo スクリプトには `optanon-category-C0002` クラス値が含まれており、ユーザーが Performance Cookie カテゴリに同意した場合にのみ Vimeo スクリプトがロードされることを意味します:
`<script src="https://extend.vimeocdn.js" class="optanon-category-C0002">`

`optanon` クラスを上書きして特定のスクリプトから自動ブロッキング機能を削除するには、OneTrust 上で Cookie のソースからスクリプトを削除する必要があります:

1. Setup > Categorizations の下で、All Cookies を選択
1. フィルタアイコンをクリック > Add Filter をクリック > Add Field: Default Category をクリック > `optanon` スクリプトからカテゴリを選択 > Apply をクリック
1. 各 Cookie をクリック > Source をクリック
1. Cookie のソースから目的のスクリプトを削除
1. スクリプトをパブリッシュ

### Do Not Sell ＆ Cookie 設定ボタン

これは、ドメインに関連付けられたジオロケーションルールグループに従って、サイト訪問者がどこから来ているかに基づいて、`Do Not Sell My Data` ボタンまたは `Cookie Settings` ボタンのいずれかを表示します。スクリプトには CSS でカスタマイズ可能なクラスがあります。

### Cookie List スクリプト

これら 2 つのメソッドが OneTrust Publisher SDK を初期化します。`initializeOneTrustPublishersSDK` メソッドは、ジオロケーションルール、テンプレート、ベンダーで設定されたすべてのリソースを取得します。`loadPreferenceCenter` メソッドは、バナーまたはプリファレンスセンターをロードするために使用されます。`true` を渡すとプリファレンスセンターが常にロードされます。`false` を渡すと、初回同意と再同意のためにバナーが表示されます。
