---
title: マーケティング Cookie
description: "Digital Experience がブラウザ Cookie をどのように使用しているかについて学びます。"
upstream_path: /handbook/marketing/digital-experience/marketing-cookie/
upstream_sha: 2d678e92f3fbc59843a2973bbfa95041c6aef07f
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-09T20:42:10+00:00"
---

Digital Experience チームは、`gitlab_tier` Cookie を `about.gitlab.com` ドメインのコンテンツをカスタマイズするためのツールとして使用しています。この Cookie は、ユーザーが GitLab.com にログインしたときに設定されます。この Cookie は、セッション終了時（ログアウト時）または 2 週間後（いずれか早い方）に有効期限を迎えます。

* `gitlab_tier` Cookie には、ユーザーが属するユニークな tier の情報（Free、Premium、および／または Ultimate）が含まれます。これがやり取りされる唯一のユーザーデータです。**他のユーザーデータは渡されません**。
  * `false`: 認証済みユーザーについて、製品が tier の存在を見つけようとしたが何も見つからなかった場合（ブラウザのブロック、プライバシー設定など、さまざまな理由が考えられます）
  * `not set`: 未認証ユーザーには Cookie が設定されず、確認の試行も開始されません。
  * 補足: tier はユーザーではなく namespace に紐づきます。namespace とユーザーの関係は多対一であるため、`free&premium` のようなユニークな namespace 値が見られることがあります。

この実装は、製品の Enterprise Edition のための [GitLab プロダクトプロジェクト](https://gitlab.com/gitlab-org/gitlab) にあります。したがって、`gitlab.com` ドメインに存在し、about.gitlab.com を含むすべてのプロジェクトサブドメインに伝播します。Cookie は About や Blog などの他のプロジェクトのレビューアプリでは _動作しない_ ため、Digital Experience チームでパーソナライゼーションを開発する際にはこの点に留意してください。機能が適切にロールアウトされていることや、認証済みユーザーと未認証ユーザーの内訳が正しく見えることを確認したい場合は、Marketing Analytics に連絡してください。

詳細については、[こちらのドキュメント](https://docs.gitlab.com/ee/user/profile/#cookies-used-for-sign-in)をお読みください。

なお、この Cookie は GitLab チームメンバーには表示されないことがあります。これは、GitLab の組織が製品コードベース内で以前の `Gold` tier を使用しているためです。ほとんどの顧客がこれらのレガシープランを使用していないため、`Silver` と `Gold` を除外する判断をしました。別の tier プランで新しい namespace を作成することで、この挙動を確認できます。

## 関連 MR

* `gitlab_tier` MVC 1 MR: <https://gitlab.com/gitlab-org/gitlab/-/merge_requests/151323>
* ログイン済みユーザーへのマーケティング Cookie 設定 `about_gitlab_active_user`: <https://gitlab.com/gitlab-org/gitlab/-/merge_requests/113761>
* マーケティング用の gitlab_tier Cookie 追加: <https://gitlab.com/gitlab-org/gitlab/-/merge_requests/151323>

以下には古い動画が含まれていますが、よりシンプルで以前の `gitlab_user` Cookie に関する内容として依然として一定の関連性があります:

 <figure class="video_container">
   <iframe src="https://www.youtube.com/embed/Nm8wWtoBCTc" frameborder="0" allowfullscreen="true"> </iframe>
 </figure>

## About リポジトリで Cookie を使う方法

その後、その関数を使用して以下のようにコンポーネントを更新できます:

```js
const { cookieValue } = getCookieValue('gitlab_tier')

// ...

if (cookieValue.value) {
  // Do something
}
```

なお、このロジックはいずれもクライアントサイドで実行されるため、この方法で大規模な DOM 操作を行うことには注意が必要です。これは Web パフォーマンスに影響します。期待する Cookie をユーザーが持っていない場合に備えて、合理的なフェイルセーフを追加するようにしてください（プログレッシブエンハンスメントを通じて）。
