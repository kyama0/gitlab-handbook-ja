---
title: "AppSec のエンゲージメントプランと Secure Code Warrior の利用状況を測定する方法"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/runbooks/scw-engagement-plan/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

## AppSec エンジニアはどのように Secure Code Warrior トレーニングプログラムに貢献できるか?

AppSec チームの誰かが Secure Code Warrior (SCW) トレーニングプログラムへの貢献に興味があり、[Secure Code Warrior トレーニングポータル](https://portal.securecodewarrior.com/)へのアクセス権を持っていない場合、`#security_help` Slack チャンネルにアクセスをリクエストするコメントを投稿してください。

Secure Code Warrior トレーニングポータルへのアクセス権を取得したら、以下を行ってください:

- `#security-secure-code-warrior` Slack チャンネルに参加する
- プラットフォームの簡単な概要については [Secure Code Warrior platform walkthrough](https://www.youtube.com/watch?v=IwTJ-DOqmXQ) を視聴する
- SCW の [Getting Started](https://help.securecodewarrior.com/hc/en-us/categories/360001975872-Getting-Started) ドキュメントを通読する
- SCW での[トーナメント](https://help.securecodewarrior.com/hc/en-us/articles/360036293731-Tournaments-Module-Overview)の編成方法のアイデアを得るため、過去の [SCW トライアル](https://gitlab.com/gitlab-com/gl-security/security-department-meta/-/issues/1365) Issue を確認する

上記が完了すれば、SCW トレーニングプログラムへの貢献を開始する準備が整っています。質問があれば `#security_help` に投稿してください。

## コンテンツ開発

すべての GitLab チームメンバーは、コースコンテンツの開発に貢献することを歓迎します。AppSec は、コンテンツ開発に、特にそのコースが必須である場合、コースを受講するチームメンバーが関与することを保証する必要があります。例えば、Vue.JS コンテンツを含むコースの開発には、Frontend エンジニアを関与させてください。

コンテンツ開発時には、以下を考慮してください:

- 学習の焦点は何か? 例: 広範なフレームワークセキュリティ意識 vs. 特定の脆弱性クラスに対する具体的なトレーニング
- コースはどのくらいの時間がかかるべきか? これは、含まれるコンテンツ（動画やチャレンジの数など）に影響します
- コンテンツは高品質か? チームメンバーや Secure Code Warrior カスタマーサポートマネージャーと協力し、トレーニングが良いアドバイスとバグのないチャレンジを提供することを保証してください

## エンゲージメントゴール

開発者 = Backend + Frontend エンジニア。GitLab の開発者の数とタイプの詳細については、[組織図](https://comp-calculator.gitlab.net/org_chart)を参照してください。

- オンボーディング中の開発者の 90% が Secure Code Warrior でアカウントを作成する
- 開発者の 80% が開始から 3 か月以内に関連トレーニングを完了する
- 開発者の 25% が半年に一度のトーナメントに参加する
- 開発者アカウントの 50% が毎月プラットフォームに少なくとも 1 時間費やしている

### 後続

- 高リスクチーム（「高リスク」とは、ある年にアプリケーションの担当部分で報告される脆弱性が最も多いチームやグループと定義される）の開発者の 75% が、年に 1 回 SCW で 1 つのコースを完了している

## エンゲージメントプラン

- Secure Code Warrior を [新入社員オンボーディングテンプレート](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/blob/main/.gitlab/issue_templates/onboarding_tasks/department_development.md ) に、GitLab 開始後 3 か月以内に完了する必要があるチェックリスト項目として統合する
  - 新入社員に Secure Code Warrior へのアクセスをリクエストするアクセスリクエスト (AR) が自動的に作成され、リクエストは AR Issue で `@gitlab-com/gl-security/product-security/appsec` DL に通知されます。トリアージローテーションの AppSec 担当者が AR を引き受けます。
- 月次の Slack 告知で、最近のセキュリティリリースで見られたトップ 3 の脆弱性を取り上げ、リリースの AppSec プライマリ（[リリースマネージャー](https://about.gitlab.com/community/release-managers/)を参照）が告知を行い、開発者がそれらを特定して修正する方法を学べるようにする
- Secure Code Warrior を GitLab CI と統合することで、継続的なエンゲージメントを大いに促進できます
- GitLab のすべての Development エンジニアに開放されたキックオフトーナメント。トーナメントの上位 3 名にはプライズが授与されます。

## 何を、いつ、なぜ測定するか?

**[トレーリング、3 か月]** *Secure Code Warrior を新入社員オンボーディングテンプレートに、GitLab 開始から 3 か月以内に完了する必要があるチェックリスト項目として統合*

- Secure Code Warrior にサインアップする新入社員の数を測定する
  - 月次で測定
- 3 か月以内に SCW オンボーディングコースを終了する新入社員の数を測定する
  - 月次で測定
- コースを途中で離脱した人数を測定する
  - 月次で測定
- サインアップしたユーザーについて、プラットフォームに費やした時間数を測定する
  - 月次で測定
- サインアップしたユーザーについて、プラットフォームで実施したアクティビティ数を測定する
  - 月次で測定

**[トレーリング、1 か月]** *Secure Code Warrior にサインインした人々が正常に利用できる*

- すべてのユーザーにわたって、プラットフォームに費やした時間数を測定する
  - 日次で測定、月次でレビュー
- すべてのユーザーにわたって、プラットフォームで実施したアクティビティ数を測定する
  - 日次で測定、月次でレビュー

**[リーディング & トレーリング]** *最近のセキュリティリリースで見られたトップ 3 の脆弱性と、開発者がそれらを特定して修正する方法を学べる方法を取り上げる月次 Slack 告知*

- Slack 告知に何人がリアクションしているか?
  - Slack 告知時に測定
- Slack 告知後にプラットフォームにサインアップする新規ユーザー数は増加しているか?
  - Slack 告知時に測定
- Slack 告知後に既存ユーザーのエンゲージメントは増加しているか?
  - Slack 告知時に測定
- 開発者は Slack メッセージで特定された脆弱性領域から同じチャレンジを行っているか? そうでない場合、よりエンゲージメントを促進するために Slack 告知を調整する必要があるか?
  - Slack 告知時に測定

**[トレーリング、1 か月]** *Secure Code Warrior を GitLab CI と統合することは継続的なエンゲージメントを大いに促進する*

- SCW によって作成されたセキュリティ Issue 上のトレーニングリンクをクリックしている開発者は何人いるか?
  - 月次で測定
- リンクをクリックしている人々は、SCW 上でトレーニングを完了しているか?
  - 月次で測定
- 開発者からこの統合についてどのようなフィードバックを受けているか?
  - 月次で測定
- このフィードバックをどのようにキャプチャし改善すべきか?
  - 月次で測定

**[トレーリング、6 か月]** *GitLab のすべての開発者向け半年ごとのトーナメント*

- 半年ごとのトーナメントに何人の開発者がサインアップしているか?
  - 半年ごとに測定（トーナメント中）
- 開発者はプラットフォームでどれだけエンゲージしているか?
  - 半年ごとに測定（トーナメント中）
- 開発者からトーナメントについてどのようなフィードバックを受けているか?
  - 半年ごとに測定（トーナメント中）
- このフィードバックをどのようにキャプチャし改善すべきか?
  - 半年ごとに測定（トーナメント中）
