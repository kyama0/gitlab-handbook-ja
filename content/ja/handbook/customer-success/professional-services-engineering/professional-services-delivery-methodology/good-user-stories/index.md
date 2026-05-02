---
title: "良いユーザーストーリー"
description: "良いユーザーストーリーの書き方を学びます。"
upstream_path: /handbook/customer-success/professional-services-engineering/professional-services-delivery-methodology/good-user-stories/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## 良いユーザーストーリーを書くためのクイック&ダーティな方法

ユーザーストーリーには 1 つの主な目的があります。ユーザーストーリーについての会話と議論を促進することです。設計上、ユーザーストーリーは開発される機能のシンプルで短い説明であるべきで、エンドユーザーの視点から、エンドユーザーの言葉で書かれます。これは覚えておくことが重要です。ユーザーストーリーは、チームメンバー間で望ましい機能性についての共通理解を作るために、会話と議論を促進します。ユーザーストーリーは包括的な仕様書ではありません。

ユーザーストーリーは通常、次のシンプルなテンプレートに従います。

```md
 As a <user> I want to <action> so that <result / benefit>
```

ユーザーストーリーの基本的な理解には、すべてのチームメンバーが次の点について明確であることが求められます。

* [ ] 誰が？... As a \<user\>
* [ ] 何を？... I want to \<action\>
* [ ] なぜ？... So that \<result / benefit\>

すべてのチームメンバーは、各ユーザーストーリーについて「誰が？」「何を？」「なぜ？」を説明できる必要があります。これを明示的に強調することは重要です。なぜなら各チームメンバーが各ストーリーの本質を理解していなければ、チーム全体として問題空間に対する必要な理解を欠くことになるからです。各チームメンバーがユーザーストーリーをどう実装するかを理解する必要はありませんが、各メンバーは本質を理解すべきであることに注意してください。たとえば、複雑なマルチステージの CI yaml ファイルを構築する詳細を知る必要はありませんが、私たちの顧客が Dev、Test、Integration、Security、Staging、Production のステージ構成を持ち、システムを段階的に安定化させていることを知る必要があります。

ユーザーストーリーは INVEST 原則に従うべきです。次の特性を持つべきです。

* **I**ndependent（独立している）（可能な限り、ユーザーストーリーは他のユーザーストーリーが実装されることに依存すべきではありません）
* **N**egotiable（交渉可能）
* **V**aluable（価値がある）
  * タスク指向ではなく機能指向
  * 可能な限りユーザーの言語で書く。ゲノミクスや医学のようなドメイン固有言語が必要な場合は、専門家が対応できるようにする
* **E**stimable（見積もり可能）
* **S**mall（小さい）
  * 1 人の開発チームメンバーで、半スプリント以下
* **T**estable（テスト可能）
  * 受け入れ基準を持ち、主観的でない必要がある

ユーザーストーリーのテスト可能性は通常、受け入れ基準（Acceptance Criteria）の形でドキュメント化され、ユーザーストーリーが意図したとおり実装されているかを検証するのに役立つ合否のテスト可能な条件を列挙します。

すべてシンプルに聞こえますが、頻繁にチームやプロダクトオーナーは良いユーザーストーリーを書くのに本当に苦労します。**そして遭遇する問題の 90% は、ユーザーストーリーが大きすぎることに起因します。**

ユーザーストーリーが大きすぎると、理解、見積もり、実装が難しくなり、まったく異なる意見が出やすくなります。では、ユーザーストーリーの良いサイズとは何でしょうか？ 基本的なガイダンスは、プロダクトバックログの上位にあるユーザーストーリー（PSE が作業できるよう十分な特定性を持つべきもの）は、チームメンバーがスプリント中に簡単に 2 つのユーザーストーリーを完了できるサイズにすべきだということです。

チームのユーザーストーリーが小さくなると、チームはより頻繁にストーリーを完了できます。小さなユーザーストーリーの素晴らしい副次効果の 1 つは、チームがより頻繁なフィードバックと成功を得られ、バーンダウンチャートがより細粒度になり、階段ではなくグラフのように見えることです。

チームはどのようにプロダクトバックログ内の大きなストーリーを取り、小さなストーリーに分割するのでしょうか？ ユーザーストーリーを分割するために使える 3 つの基本的な手法があります。

1. 一般的な単語によるストーリー分割
2. 受け入れ基準によるストーリー分割
3. 接続詞や接続語によるストーリー分割

**一般的な単語によるユーザーストーリー分割**

このアプローチは、広範な解釈に開かれている（つまり「一般的すぎる」）または複数の意味を持つ単語を探すだけです。たとえば「我々はすべてのインフラストラクチャをクラウドに移行する」という文を読んだとき、それはどういう意味でしょうか？ 素晴らしく聞こえる営業ピッチを見たり聞いたりしたかもしれませんが、2 分後に座って「あれは何を意味しているのか分からない！」と思うかもしれません。

_インフラストラクチャとは何か_？ サーバー？ デスクトップ？ ノートパソコン？ データベースサーバーだけ？ ビル？ すべてのデータセンターを廃止するのか？ 一部のみ？ デスクトップ／ノートパソコンから Chromebook への移行？

_どのクラウド_？ Amazon の AWS？ Microsoft の Windows Azure？ IBM の Bluemix？ パブリック？ プライベート？ ハイブリッド？

_どの SSO_？ SAML、OIDC、OAuth、JWT、その他？

**_ポイントは、一般的な単語は特定性に欠けるということです。_** これを説明する例を見てみましょう。

> As a credit card transaction,
>
> We want activities to be logged,
>
> So that the account ledger is up to date.

このストーリーで、「activities」という単語はかなり一般的です。「activities」を _debits, credits, voided transactions_ などのより特定的な単語に置き換えられます。次のストーリーが得られます。

> As a credit card transaction,
>
> We want _debits_ to be logged,
>
> So that the account ledger is up to date.
>
> **AND**
>
> As a credit card transaction,
>
> We want _credits_ to be logged,
>
> So that the account ledger is up to date.
>
> **AND**
>
> As a credit card transaction,
>
> We want _voided transactions_ to be logged,
>
> So that the account ledger is up to date.

特定性を提供することで、チームメンバーが実装に必要なものを現実的に評価できるようになり、さらに重要なことに、個人が同じユーザーストーリーを異なる方法で解釈するという曖昧さを避けられます。

**受け入れ基準によるユーザーストーリー分割**

この方法は、ユーザーストーリーカードの裏面に列挙された受け入れ基準を見て、ユーザーストーリーをより小さく、消化しやすい塊に分割します。受け入れ基準とは何でしょうか？ 各ユーザーストーリーには 6 〜 12 個の受け入れ基準があるべきです。プロダクトオーナーはチームと協力して、ストーリーがスプリントに入る前に各ユーザーストーリーの受け入れ基準を作成、合意、記録します。これをユーザーストーリーレベルでの「Definition of Done」と考えてください。

もう一度、例を見てみましょう。

> As a credit card user,
>
> I want voided transactions to be logged,
>
> So that the account ledger is up to date.

このストーリーの受け入れ基準の例:

* 取引は米ドルをサポートする
* 取引はカナダドルをサポートする
* 取引はユーロをサポートしない
* 取引は Visa カードをサポートする
* 取引は MasterCard をサポートする
* 取引はアメリカン・エキスプレスカードをサポートする
* 取引は Diners Club カードをサポートしない
* 500 ドルを超える取引はない

各受け入れ基準を検討し、「誰がこれを望むのか？」と問えます。この質問への答えが「As a (type of user)」のユーザーになります。

次に「彼らはなぜそれを望むのか？」と問います。この質問への答えが「so that (some value is created)」の価値を特定します。

受け入れ基準の本体が「I want (something)」の部分を提供します。上記の受け入れ基準から派生できるユーザーストーリーは次のとおりです。

> As a Visa credit card user,
>
> I want US dollar voided transactions to be logged,
>
> So that the account ledger is up to date.
>
> **_AND_**
>
> As a Visa credit card user,
>
> I want Canadian dollar voided transactions to be logged,
>
> So that the account ledger is up to date.
>
> **_AND_**
>
> As a MasterCard credit card user,
>
> I want US dollar voided transactions to be logged,
>
> So that the account ledger is up to date.
>
> **_AND_**
>
> As an American Express credit card user,
>
> I want Canadian dollar voided transactions to be logged,
>
> So that the account ledger is up to date.
>
> **_AND_**
>
> As a Diners Club credit card user,
>
> I want to receive an error message denying the transaction,
>
> So that the user has a clear understanding that Diners Club is not supported.
>
> **_ETC…_**

受け入れ基準を使ってより大きなユーザーストーリーを消化しやすいものに分割するのは、シンプルで素早く、バックログを洗練させて曖昧さを排除するのに役立ちます。これにより、プロダクトオーナーはより効果的に作業の優先順位を付けられるようになります。上記の例では、ビジネスニーズと各カードが提供する価値に応じて、Sprint 1 で Visa カードサポートを実装し、Sprint 2 で MasterCard サポートを実装し、アメリカン・エキスプレスカードサポートは Sprint 7 まで遅らせるかもしれません。

**接続詞や接続語によるユーザーストーリー分割**

このアプローチは、チームメンバーにユーザーストーリーをレビューし、**and、or、if、when、but、then、as-well-as** のような接続語を探すことを促すだけです。コンマやセミコロンも接続詞として機能することがあります。

接続語の両側にあるピースを分離することで、ユーザーストーリーを 2 つのユーザーストーリーに分割できると一般に仮定して安全です。たとえば:

> As a credit card user,
>
> I want US dollar voided transactions to be logged, **as well** Canadian dollars, **but not** Euros,
>
> So that the account ledger is up to date.

これを簡単に 3 つの異なるユーザーストーリーに変えられます。

> As a credit card user,
>
> I want US dollar voided transactions to be logged,
>
> So that the account ledger is up to date.
>
> **_AND_**
>
> As a credit card user,
>
> I want Canadian dollar voided transactions to be logged,
>
> So that the account ledger is up to date.
>
> **_AND_**
>
> As a credit card user,
>
> I want to receive an error message denying the transaction when trying to void a transaction in Euros,
>
> So that the user has a clear understanding that Euros are not supported.
>
> もちろん、これらのそれぞれを今度は他の基準（Visa カードユーザー、MasterCard ユーザーなど）に基づいて分析できます。

これだけです！ シンプルです。ユーザーストーリーを分析する他の手法もありますが、上記の 3 つで、ほとんどのチームははるかに良い、より精密で、より小さなユーザーストーリーを書けるようになります。

より細粒度な特定性のおかげで、実装チームは実際に正しいものを実装できる可能性が高くなり、プロダクトオーナーはより最適な方法でバックログの優先順位を付けられる機会を得られます。
