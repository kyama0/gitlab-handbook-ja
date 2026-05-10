---
title: "GitLab セキュリティ セキュアコーディングトレーニング"
upstream_path: /handbook/security/secure-coding-training/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
---

このページには、GitLab セキュリティチームが主催するセキュアトレーニングイニシアチブに関する情報が掲載されています。

## セキュリティ開発プロセス

GitLab でセキュリティ修正を開発する方法については、
[セキュリティ修正の準備のためのパッチリリースランブック](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md) を参照してください。 (必須)

## セキュアコーディングガイドライン

[GitLab セキュアコーディングガイドライン](https://docs.gitlab.com/ee/development/secure_coding_guidelines.html) (必須) では、GitLab で特定されている特定のクラスの脆弱性に対処する方法をカバーしています。

## Secure Code Warrior

GitLab は継続的なセキュアコーディングトレーニングを提供するために Secure Code Warrior を使用しています。対象となるチームメンバーは Okta 経由でログインできます。トレーニングは年次で割り当てられますが、自分自身で探索することもできます (この Okta タイルがある場合)。

アクセス権を持っているはずなのに Okta に表示されない場合は、#security_help に問い合わせて支援を求めてください。

### Secure Code Warrior の使い方

チームメンバーにはコースが割り当てられる場合があります。Ruby、Go、Vue.JS、Python など、利用可能な任意の言語でコースを修了できます。コースを見つけて修了するには、以下の手順に従ってください: <https://help.securecodewarrior.com/hc/en-us/articles/360040802312-Courses-Module-Overview>。<https://portal.securecodewarrior.com/#/courses/course-list> でコースリストを確認できます。

セキュアコーディングについて学び、スキルを磨くために、毎月チャレンジやミッションの形でトレーニングを自分で選択することをお勧めします。これらのハンズオン例は、より良いコードを書き、コードレビュー中に潜在的なセキュリティ上の懸念点を発見するのに役立ちます。詳細は <https://help.securecodewarrior.com/hc/en-us/articles/360035983992-Training-Module-Overview> をご覧ください。

時々、セキュリティ部門は [トーナメント](https://help.securecodewarrior.com/hc/en-us/articles/360036293731-Tournaments-Module-Overview) を実施することもあります。トーナメント開始日に先立って、これらの詳細情報がリリースされます。

### サポートを得る

Slack チャンネル #security_help を訪れて、チャットしたり、質問したり、フィードバックを提供したり、サポートを得たりしてください。

バグ、混乱を招くコンテンツ、または不正確な回答を見つけましたか? Secure Code Warrior の組み込みバグ報告を使用してください。右上の「Help」を選択し、次に「Submit bug or feedback」を選択します。これにより、すべてのユーザーのプラットフォームの改善に役立ちます。

### 必須トレーニング

GitLab は、開発責任を持つチームメンバーが、少なくとも年に 1 回、特定のセキュアコードトレーニングコースを修了することを義務付けています。各チームメンバーは、遅くとも会計年度末までにそれを修了する必要があります。

トレーニングは Secure Code Warrior 経由で提供され、コースのタイトルは [「GitLab Secure Development Short Course」](https://portal.securecodewarrior.com/#/courses/course-list/e6a9e788-8aa7-4aeb-9849-9072c00e6f58) です。所要時間は 1 〜 3 時間です。要件はコースを修了することのみです: ヒントを使ってもよく、不正解でも問題ありません。楽しんで学んでください!

<details>
  <summary markdown="span">必須トレーニングを修了する必要のあるロールを表示するには展開してください。</summary>

包含基準は以下のとおりです:

- ロールの説明に、GitLab の RED データと相互作用する可能性のあるコードの記述またはレビューが含まれており、Secure Code Warrior でサポートされている言語でのものであるか?
  - これは通常、個人貢献者とその直属マネージャーです。シニアマネージャー以上は現時点では除外されています。
- AppSec はそのロールがいずれにせよセキュアコードトレーニングから利益を得ると信じているか?

ロールがすでにリストにあるが Okta に SCW が表示されない場合は、Slack の #security_help でサポートを求めてください。AppSec チームメンバーがあなたを [Google グループ](https://groups.google.com/a/gitlab.com/g/okta-securecodewarrior-users/members) に追加し、ベースラインエンタイトルメント / オンボーディングチェックリストを更新して、将来そのロールの人が含まれるようにします。

ロールは以下のとおりです:

- ENG_DEVELOPMENT ジョブファミリーに割り当てられたチームメンバー

追加の登録のため手動でフォローアップするチーム:

- セキュリティアシュアランス

</details>

## その他のトレーニング

### 言語固有のガイドライン

- [Jim Manico とのセキュアな Ruby on Rails](#secure-coding-training-with-jim-manico) (推奨)
- [OWASP Secure Coding in Go](https://github.com/OWASP/Go-SCP/blob/master/dist/go-webapp-scp.pdf) (推奨)
- [Checkmarx Secure Coding in Javascript](https://checkmarx.gitbooks.io/js-scp/content/) (推奨)

### その他のガイドラインとリソース

- [OWASP Top 10 2017](https://owasp.org/www-project-top-ten/) (オプション)
- [OWASP API Security Top 10](https://apisecurity.io/owasp-api-security-top-10/) (オプション)
- [OWASP Serverless Top 10](https://raw.githubusercontent.com/OWASP/Serverless-Top-10-Project/master/OWASP-Top-10-Serverless-Interpretation-en.pdf) (オプション)
- [OWASP Mobile Top 10](https://owasp.org/www-project-mobile-top-10/) (オプション)

## Jim Manico とのセキュアコーディングトレーニング {#secure-coding-training-with-jim-manico}

### 説明

Jim Manico と Brakeman の作者である Dr. Justin Collins が開催した、開発者向けのアプリケーションセキュリティトレーニングが、2019 年 7 月 29 日と 30 日に行われました。 セキュアコーディング全般に加えて、Ruby on Rails アプリケーションの特定の脅威と緩和策もカバーしています。コンテンツは軽快でエンターテインメント性のある方法で提示されています。

録画されたプライベート YouTube ストリームは以下にあります:

- [Day 1 Morning](https://www.youtube.com/watch?v=PXR8PTojHmc)
- [Day 1 Afternoon](https://www.youtube.com/watch?v=2VFavqfDS6w)
- [Day 2 Morning](https://www.youtube.com/watch?v=bJYUxKn88so )
- [Day 2 Afternoon](https://www.youtube.com/watch?v=8tP2KVKHO7A)

これらのビデオはデフォルトでプライベートです。視聴するには、[GitLab Unfiltered アカウントに切り替える](/handbook/marketing/marketing-operations/youtube/#unable-to-view-a-video-on-youtube) 必要があります。

#### 推奨事項

- 自分に関連する各トピックのビデオを視聴するか、[スライドを読んで](#additional-resources) ください。
- ビデオは 2 日間の全日にわたって録画されました。 視聴を複数日にわたってトピック別および/または時間別に分割することをお勧めします。
- ビデオを [1.25 倍速](https://osxdaily.com/2017/04/14/adjust-youtube-video-playback-speed/) で視聴することを検討してください

### スケジュールとトピック

#### Day 1

##### Day 1 Morning

1. アプリケーションセキュリティ入門 ([4:33](https://youtu.be/PXR8PTojHmc?t=273))
1. 脅威モデリング
1. OWASP Top Ten 2017 概要 ([42:57](https://youtu.be/PXR8PTojHmc?t=2577))
1. A1: インジェクション ([52:03](https://youtu.be/PXR8PTojHmc?t=3123))
1. A2: 認証の不備とセッション管理 ([1:19:50](https://youtu.be/PXR8PTojHmc?t=4790))
1. A7: クロスサイトスクリプティング - XSS ([2:09:45](https://youtu.be/PXR8PTojHmc?t=7785))
1. A8: 安全でないデシリアライゼーション ([2:15:10](https://youtu.be/PXR8PTojHmc?t=8110))
1. A9: 既知の脆弱性のあるコンポーネントの使用 ([2:22:26](https://youtu.be/PXR8PTojHmc?t=8546))
1. A10: 不十分なロギングとモニタリング ([2:24:30](https://youtu.be/PXR8PTojHmc?t=8670))

カバーされているその他のトピック:

- OWASP ASVS 4.0
- マルチフォームワークフローのセキュリティ

##### Day 1 Afternoon

1. XSS 防御 - HAML ([1:51](https://youtu.be/2VFavqfDS6w?t=111))
1. 安全なクライアントサイド JSON ハンドリング ([1:45:31](https://youtu.be/2VFavqfDS6w?t=6331))
1. iFrame サンドボックス化 ([1:57:25](https://youtu.be/2VFavqfDS6w?t=7045))
1. 入力の検証 ([2:04:50](https://youtu.be/2VFavqfDS6w?t=7490))
1. 検証されていないリダイレクト ([2:22:14](https://youtu.be/2VFavqfDS6w?t=8534))
1. DevOps ベストプラクティス ([3:14:30](https://youtu.be/2VFavqfDS6w?t=11670))
1. コンテンツセキュリティポリシー ([3:36:31](https://youtu.be/2VFavqfDS6w?t=12991))
1. Brakeman と静的解析 ([4:09:20](https://youtu.be/2VFavqfDS6w?t=14960))

カバーされているその他のトピック:

- DevOps ベストプラクティス
- Vue.js アプリケーションを安全にコーディングする
- ファイルアップロードとファイル IO セキュリティ ・複数ステップの安全なファイルアップロード防御、ファイル I/O セキュリティ
- 入力検証 基本 (許可リスト検証と安全なリダイレクト)
- サードパーティライブラリのセキュリティ管理 (安全でないサードパーティライブラリの検出と管理)

#### Day 2

##### Day 2 Morning

1. アクセス制御 ([4:28](https://youtu.be/bJYUxKn88so?t=268))
1. Rails での安全でない直接オブジェクト参照 ([58:20](https://youtu.be/bJYUxKn88so?t=3500))
1. クロスサイトリクエストフォージェリ ([1:28:33](https://youtu.be/bJYUxKn88so?t=5313))
1. Rails でのクロスサイトリクエストフォージェリ保護 ([1:52:32](https://youtu.be/bJYUxKn88so?t=6752))
1. Cookie オプションとセキュリティ ([2:33:45](https://youtu.be/bJYUxKn88so?t=9225))
1. サーバサイドリクエストフォージェリ SSRF ([2:44:22](https://youtu.be/bJYUxKn88so?t=9862))

カバーされているその他のトピック:

- 動的レンダーパスとローカルファイルインクルージョン
- IDOR とスコープ付きクエリ
- SSRF 防御
- 複数のアーキテクチャタイプ (ステートレス、API、Web など) 向けのクロスサイトリクエストフォージェリ CSRF 防御

##### Day 2 Afternoon

1. 認証のベストプラクティス ([5:40](https://youtu.be/8tP2KVKHO7A?t=340))
1. Rails 6 のセキュリティ機能 ([2:23:15](https://youtu.be/8tP2KVKHO7A?t=8595))
1. OAuth 認可プロトコル v1 入門 ([2:48:21](https://youtu.be/8tP2KVKHO7A?t=10101))
1. OAuth v2 ([2:51:05](https://youtu.be/8tP2KVKHO7A?t=10265))
1. クライアント登録 ([3:04:06](https://youtu.be/8tP2KVKHO7A?t=11046))
1. 認可コードグラント ([3:07:44](https://youtu.be/8tP2KVKHO7A?t=11264))
1. OAuth 2.0 用語 ([3:21:06](https://youtu.be/8tP2KVKHO7A?t=12066))
1. OAuth 2.0 トークン ([3:35:35](https://youtu.be/8tP2KVKHO7A?t=12935))

カバーされているその他のトピック:

- 安全なシークレットストレージ
- 暗号化されたシークレット/認証情報

## ロール別の推奨トピック

### フロントエンドエンジニア

- Day 1
  - アプリケーションセキュリティ入門 ([4:33](https://youtu.be/PXR8PTojHmc?t=273))
  - 脅威モデリング
  - OWASP top 10 概要  ([42:57](https://youtu.be/PXR8PTojHmc?t=2577))
  - インジェクション ([52:03](https://youtu.be/PXR8PTojHmc?t=3123))
  - 認証の不備 ([1:19:50](https://youtu.be/PXR8PTojHmc?t=4790))
  - クロスサイトスクリプティング ([2:09:45](https://youtu.be/PXR8PTojHmc?t=7785))
  - 安全でないデシリアライゼーション ([2:15:10](https://youtu.be/PXR8PTojHmc?t=8110))
  - 脆弱なコンポーネントの使用 ([2:22:26](https://youtu.be/PXR8PTojHmc?t=8546))
  - XSS 防御 ([1:51](https://youtu.be/2VFavqfDS6w?t=111))
  - 安全なクライアントサイド JSON ハンドリング ([1:45:31](https://youtu.be/2VFavqfDS6w?t=6331))
  - iFrame サンドボックス化 ([1:57:25](https://youtu.be/2VFavqfDS6w?t=7045))
  - 検証されていないリダイレクト ([2:22:14](https://youtu.be/2VFavqfDS6w?t=8534))
  - コンテンツセキュリティポリシー ([3:36:31](https://youtu.be/2VFavqfDS6w?t=12991))
  - Brakeman と静的解析 ([4:09:20](https://youtu.be/2VFavqfDS6w?t=14960))
- Day 2
  - アクセス制御 ([4:28](https://youtu.be/bJYUxKn88so?t=268))
  - クロスサイトリクエストフォージェリ ([1:28:33](https://youtu.be/bJYUxKn88so?t=5313))
  - Cookie オプションとセキュリティ ([2:33:45](https://youtu.be/bJYUxKn88so?t=9225))
  - SSRF ([2:44:22](https://youtu.be/bJYUxKn88so?t=9862))
  - 認証 ([5:40](https://youtu.be/8tP2KVKHO7A?t=340))
  - Rails6 のセキュリティ機能 ([2:23:15](https://youtu.be/8tP2KVKHO7A?t=8595))
  - OAuth ([2:51:05](https://youtu.be/8tP2KVKHO7A?t=10265))

### バックエンドエンジニア

- Day 1
  - アプリケーションセキュリティ入門 ([4:33](https://youtu.be/PXR8PTojHmc?t=273))
  - 脅威モデリング
  - OWASP top 10 概要  ([42:57](https://youtu.be/PXR8PTojHmc?t=2577))
  - 認証とセッション管理 ([1:19:50](https://youtu.be/PXR8PTojHmc?t=4790))
  - 安全でないデシリアライゼーション ([2:15:10](https://youtu.be/PXR8PTojHmc?t=8110))
  - 脆弱なコンポーネント ([2:22:26](https://youtu.be/PXR8PTojHmc?t=8546))
  - ロギング & モニタリング ([2:24:30](https://youtu.be/PXR8PTojHmc?t=8670))
  - XSS 防御 ([1:51](https://youtu.be/2VFavqfDS6w?t=111))
  - 入力の検証 ([2:04:50](https://youtu.be/2VFavqfDS6w?t=7490))
  - DevOps ベストプラクティス ([3:14:30](https://youtu.be/2VFavqfDS6w?t=11670))
  - Brakeman ([4:09:20](https://youtu.be/2VFavqfDS6w?t=14960))
- Day 2
  - アクセス制御 ([4:28](https://youtu.be/bJYUxKn88so?t=268))
  - 安全でない直接オブジェクト参照 ([58:20](https://youtu.be/bJYUxKn88so?t=3500))
  - SSRF ([2:44:22](https://youtu.be/bJYUxKn88so?t=9862))
  - 認証のベストプラクティス ([5:40](https://youtu.be/8tP2KVKHO7A?t=340))
  - Rails 6 のセキュリティ機能 ([2:23:15](https://youtu.be/8tP2KVKHO7A?t=8595))
  - OAuth ([2:51:05](https://youtu.be/8tP2KVKHO7A?t=10265))

### SRE

- Day 1
  - アプリケーションセキュリティ入門 ([4:33](https://youtu.be/PXR8PTojHmc?t=273))
  - 脅威モデリング
  - OWASP top 10 概要  ([42:57](https://youtu.be/PXR8PTojHmc?t=2577))
  - DevOps ベストプラクティス ([3:14:30](https://youtu.be/2VFavqfDS6w?t=11670))

## 追加リソース {#additional-resources}

- [PowerPoint プレゼンテーション](https://drive.google.com/drive/folders/1NRrlnqwkhsS-UmuagwoD8GB4APXsfJxb?usp=sharing)
- [Questions Doc](https://docs.google.com/document/d/1KsK5DBDgiF8k0N3cs89o1VsMYsUWUPH9fIQb_smFEac/edit)
- [Ruby on Rails のセキュリティのベストプラクティス](https://guides.rubyonrails.org/security.html)
- [オンラインラボ](https://manicode.us/)
- [Burp Proxy](https://portswigger.net/burp/communitydownload)
