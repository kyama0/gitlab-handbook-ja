---
title: "目標と主要な結果（OKR）"
upstream_path: /handbook/engineering/devops/create/engineering-managers/okrs/
upstream_sha: 81a617744130f76604f641d4483828edd0d60d2f
translated_at: "2026-04-28T10:21:26Z"
translator: claude
stale: false
lastmod: "2025-12-05T19:47:34+00:00"
---

## OKR のカスケード

GitLab の OKR により、私たちの仕事を GitLab 全体の目標に合わせることができます。Create ステージの OKR は通常、所属するサブ部門、部門、および事業部から派生します。このカスケード外の[インパクトのある OKR](/handbook/company/okrs) は、ステージからのサインオフが得られれば設定できます。

1. [エンジニアリング OKR](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues?scope=all&utf8=✓&state=opened&label_name[]=OKR&label_name[]=EVP%20of%20Engineering)
1. [開発 OKR](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues?scope=all&utf8=✓&state=opened&label_name[]=OKR&label_name[]=Development%20Department&author_username=clefelhocz1)
1. [Dev OKR](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues?scope=all&utf8=✓&state=all&label_name[]=OKR&label_name[]=Dev%20Sub-department&author_username=timzallmann)
1. [Create ステージ OKR](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues?scope=all&utf8=✓&state=all&label_name[]=OKR&label_name[]=devops%3A%3Acreate&author_username=dsatcher)

チーム OKR

* [Code Review](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=updated_desc&state=all&label_name%5B%5D=OKR&label_name%5B%5D=group%3A%3Acode%20review&first_page_size=100)
* [IDE](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=updated_desc&state=all&label_name%5B%5D=OKR&label_name%5B%5D=group%3A%3Aide&first_page_size=100)
* [Source Code](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=updated_desc&state=all&label_name%5B%5D=OKR&label_name%5B%5D=group%3A%3Asource%20code&first_page_size=100)

## OKR の作成者

シニアエンジニアリングマネージャー、エンジニアリングマネージャー、スタッフエンジニアは全員 OKR の作成に責任があります。

## OKR フォーマット

すべての OKR は以下のフォーマットに従います。

1. IACV
1. プロダクト
1. 優れたチーム

## OKR タイムライン

GitLab の OKR は1四半期（3ヶ月）間実施されます。以下は私たちが従うサンプルタイムラインです。

**月1**

* 第1週 - この週、EM は前四半期のまだスコアリングされていない OKR をスコアリングします。
  * 前四半期の最終 OKR スコアを更新する
  * 前四半期の OKR レトロスペクティブを完了する
  * 前四半期の OKR をクローズする

* 第4週
  * 現在の進捗（スコア）を更新する
  * ビジネスの優先事項が最近変わった場合、または非現実的だと気づいた場合は OKR を更新する
  * ビジネスの優先事項が最近変わった場合は OKR を削除する
  * ビジネスの優先事項が最近変わった場合は新しい OKR を追加する

**月2**

* 第4週
  * 現在の進捗（スコア）を更新する
  * ビジネスの優先事項が最近変わった場合、または非現実的だと気づいた場合は OKR を更新する
  * ビジネスの優先事項が最近変わった場合は OKR を削除する
  * ビジネスの優先事項が最近変わった場合は新しい OKR を追加する

**月3**

* 第2週 - この週、EM は自チームに適用可能な組織の KR（チームに注力させたい KR を含む）を特定し始めます。

  * 次四半期の OKR の作業を開始する

* 第4週 - この週、EM は今四半期の現在の OKR を締めくくり、次四半期の OKR を最終決定します。

  * 今四半期の OKR スコアの更新を最終化し始める
  * 次四半期の OKR を最終決定する

## 効果的な主要な結果（KR）を書くためのガイドライン

主要な結果を書くために推奨されるベストプラクティスは以下のとおりです。

**チャレンジングな KR を作成する**

* KR の70%を達成することがチャレンジングなレベルにする

* 確実に達成できる目標を決め、それをストレッチゴールになるまで少し変えるという方法が良いルールオブサムです

**明確で透明な KR を作成する**

* 頭字語と専門用語を避ける

**日常業務を含めない**

* 週次ミーティングへの参加などの日々のタスクは有効な KR ではありません

**具体的で測定可能な KR を作成する**

* KR には必ず数値を含める

**自分やチームを過負荷にしない**

* 1つの目標に対して KR を3〜5つ以内にする
* 1四半期全体で KR を9つ以内にする

## OKR のスコアリング

エンジニアリングマネージャーは月次サイクルで OKR をスコアリングし更新します。マネージャーが月次でチェックインすることで、四半期 OKR への集中を維持できます。

OKR はこのプロセスに従ってスコアリングされます

## OKR のレポーティング

OKR は Epic と Issue を使用してレポートされます。Create ステージの OKR はこの OKR Issue ボードから確認できます。

**適切なラベルの管理**

すべての KR に以下のラベルを付けてください。

* ~OKR
* ~"Development Department"
* ~"Dev Sub-department"
* ~"devops::create"
* ~"group::source code"、~"group::code review"、~"group::editor"、~"group::gitaly"、~"group::ecosystem" のいずれか1つ

## OKR レトロスペクティブ

四半期 OKR を締めくくる際、Create ステージのエンジニアリングマネージャーは以下の OKR レトロスペクティブフォーマットを使用します。

**レトロスペクティブ**

**Good（良かったこと）**

うまくいったこと。チームが目標を達成した場合、チームの成功に貢献したものは何ですか？

* ...

**Bad（悪かったこと）**

うまくいかなかったが、基本的に一度限りの出来事 — 繰り返さないと予想することです。チームが目標を達成できなかった場合、どのような障害に直面しましたか？

* OOO の件数が多く、再編成の変更を考えると、MR レートを少なくとも30%削減すべきでした。このレートは四半期中に変更されました。大規模な OOO が MR レートにどれほど大きな影響を与えるかを予測するための改善が必要です。

**Do Better（改善できること）**

次回はより良くできること。どのように改善するかの提案を含めることができます。

* ...

**Best（最高だったこと）**

本当によくいったこと。お祝いしましょう！どうすればこれをもっとできますか？

* ...

**Feels + Open Questions（感想 + 未解決の質問）**

感情、マインドセット、混乱している領域、および検討すべき機会。

* ...

**追加の質問**

* 目標を設定したとき考えていたより、達成するのが難しかったですか、簡単でしたか？
* 目標を書き直すとすれば、何を変えますか？
* 次のサイクルの OKR に向けたアプローチを変えるかもしれない学びは何ですか？
