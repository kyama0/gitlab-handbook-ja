---
title: "顧客の質問の調査"
description: "顧客の質問に対する回答を見つけるための調査戦略。"
upstream_path: /handbook/customer-success/csm/researching-customer-questions/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T01:14:15Z"
translator: claude
stale: false
lastmod: "2025-08-22T16:04:10+01:00"
---

CSM 関連のハンドブックページについては、[CSM ハンドブックホームページ](/handbook/customer-success/csm/)をご覧ください。

---

## 顧客の質問を調査する場所

顧客の質問を調査するには、いくつかの方法があります。

### Google 検索

顧客の質問を Google（または他の検索エンジン）で検索することで、幅広く調査するのが最も簡単なことが多いです。例えば、顧客が GitLab がモバイルアプリケーションスキャンに対応しているかどうかを尋ねている場合、「gitlab mobile application scanning」と検索すると、関連するブログ記事、ドキュメント、GitLab の Issue が表示されます。

回答が GitLab のドキュメントにあることがわかっている場合でも、上記の検索方法はドキュメントの該当箇所に直接リンクするのに便利です。

この方法が非常に有効なのは、できる限り多くの情報を公開するという GitLab の[透明性](/handbook/values/#transparency)の価値観のおかげです。

### Zendesk

Zendesk は、GitLab が Zendesk を導入してから長年にわたってすべてのサポートチケットがアーカイブされ、検索可能であるため、顧客の質問を調査するための強力な手段です。

顧客が質問をしている場合、他の顧客もサポートチームに類似または同じ質問をしている可能性が高いです。顧客の質問のキーワードで Zendesk を検索し、関連するチケットを確認してください。顧客の問い合わせに一致するサポートチケットが見つかるまで、さまざまなキーワードで試してみる必要があるかもしれません。多くの場合、数分間過去のサポートチケットを調査することで、顧客が新しいサポートチケットを開くよりも早く回答できます。

**注意:** 顧客がトラブルシューティングを必要としている場合は、各問い合わせはユニークとして扱われるべきであるため、顧客に新しいサポートチケットを開くよう通知してください。ある顧客の問題を解決したものが別の顧客に機能するとは限らず、サポートチームは独自のトラブルシューティングプロセスを実行します。

### プロダクトグループとディレクションページ

質問の製品エリアで直接働いているチームメンバーのサポートを得ることが最善の場合もあります。

#### 適切なプロダクトグループはどのように判断しますか？

どのプロダクトグループがどの機能を担当しているかを判断するには、いくつかの方法があります。

1. [Product Categories](/handbook/product/categories/) ハンドブックページ内で検索します。このページでは、対象の機能を Command ⌘ + F で検索できます。例えば、Review Apps に関する質問の場合、Command ⌘ + F で Review Apps 機能が [Pipeline Security](/handbook/product/categories/#pipeline-security-group) グループの下にあることを確認できます。製品ロードマップに関する質問の場合は、各プロダクトグループに関連するディレクションページを確認できます。

1. ドキュメント内で検索します。例えば、[GitLab のセキュリティダッシュボード](https://docs.gitlab.com/ee/user/application_security/security_dashboard/)に関する質問でどのプロダクトグループが役立つか確認したい場合、ページの下部にスクロールして `View page source` をクリックすると、セキュリティダッシュボードがどの製品ステージとグループに属しているかがわかります。この場合は Security Insights グループです。
![image-1.png](/images/customer-success/csm/researching-customer-questions/image-1.png)

1. 機能に関連するエピック/Issue を確認することでも、適切なプロダクトグループを特定できます。例えば、[カスタマイズ可能な役割と権限](https://gitlab.com/groups/gitlab-org/-/epics/4035)を調査している場合、右側のラベルで Authentication and Authorization が適切なグループであることがわかります。

#### プロダクトグループに助けを求めるにはどうしますか？

質問に適切なプロダクトグループを見つけたら、Slack でそのプロダクトグループの公開 Slack チャンネルを検索して質問を投稿してください。

顧客を Product の誰かと直接つなぐことが役立つ場合は、[コラボレーションプロジェクト](/handbook/customer-success/csm/customer-collaboration-project/)の Issue にできる限り詳細を記載し、[Product Categories](/handbook/product/categories/) ページで確認できるプロダクトマネージャーを @ メンションしてください。プロダクトマネージャーにチームの誰かが問い合わせを支援できるか確認してください。

**注意:** 他者を巻き込む前に、このページで提供されている方法に基づいて回答を調査するための十分な検討を行い、GitLab の価値観の一部として[非同期コミュニケーションを優先する](/handbook/values/#bias-towards-asynchronous-communication)ことを忘れないでください。

### Slack

Slack で顧客の質問のキーワードを検索すると、参加できる最近のディスカッションスレッドがあるかどうかを確認できます。新しい質問を投稿する前に、最近すでに回答されていないかを検索してください。

### GitLab.com トップレベルグループ

GitLab.com のトップレベルグループを検索することは、Google 検索には表示されない関連 Issue（プライベートなコラボレーションプロジェクト内のものを含む）を見つける優れた方法です。

まず、https://gitlab.com/gitlab-com/ のトップレベルグループにアクセスします。次に、トップ検索バーを使って結果を検索します。例えば、顧客がコードレビューのフレームワーク Gerrit について質問した場合、`Gerrit` と入力し、左側で Issue フィルタリングします。GitLab チームメンバーと顧客がこのトピックについて行った議論が表示され、調査に役立てることができます。

### Highspot と Google Drive

[Highspot](https://gitlab.highspot.com/) では、GitLab Ultimate のプレゼンテーション、競合インテリジェンス、ホワイトペーパーなど、承認済みの顧客向けコンテンツにアクセスできます。

[GitLab での Highspot の使い方](/handbook/sales/field-communications/gitlab-highspot/)について詳しくはこちらをご覧ください。

さらに、[Google Drive](https://drive.google.com/) を検索することで、検索内容に関連する Google プレゼンテーションや Google ドキュメントを見つけることができます。
