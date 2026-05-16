---
title: "なぜ noinspection コメントが存在するのか"
no_list: true
upstream_path: /handbook/tools-and-tips/editors-and-ides/jetbrains-ides/code-inspection/why-are-there-noinspection-comments/
upstream_sha: 6f672d050777a6a6cb33fc5f31ccf71ebdd5b812
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-07T15:31:17+00:00"
---

## コード中の `noinspection` コメントは何ですか？

(***この質問への回答としてこのページを案内された方は、詳しい説明のためにこのページを読んでください。**
JetBrains でコードインスペクションを効果的に使う方法を学びたいだけなら、[コードインスペクションのメインページ](..) を参照してください*)

### JetBrains は広く使われている

JetBrains は強力な IDE であり、従来型の「IDE」（汎用エディターと対比される意味で）の業界リーダーとして圧倒的な位置を占めています。各種調査では、JetBrains 製の IDE を使う開発者が大きな割合を占めることが示されています（具体的な数字を得るのは難しいです。多くの調査では RubyMine や Webstorm などのエコシステム／プラットフォーム／言語ごとの個別 IDE に分かれて集計されているためです。これらを VSCode や Vim のようなマルチエコシステム対応のエディターと比較してみてください）。

JetBrains 製エディターの利用状況を示す各種調査の例:

- [StackOverflow 2023 開発者調査](https://survey.stackoverflow.co/2023/#section-most-popular-technologies-integrated-development-environment)
- [Ruby on Rails 2022 コミュニティ調査](https://railsdeveloper.com/survey/2022/#what-is-your-preferred-editor)
- [JetBrains 2022 開発者エコシステム調査](https://www.jetbrains.com/lp/devecosystem-2022/ruby/#what-editor-ide-do-you-mostly-use-for-ruby-development-)
- [GitLab 2023 IDE/エディター利用状況（社内ドキュメントリンク）](https://docs.google.com/document/d/1tITdhdkJm5xaPiPpXQ9wW1X6M3SAMhncJYaNmQfja70/edit)

### JetBrains は git フックや CI が提供するものを超えた強力なコードインスペクションをサポートする

JetBrains の IDE には、IDE に組み込まれた強力な[コードインスペクション機能](..) があり、型安全性や、RuboCop や ESLint のような標準の静的解析ツールでは提供されないその他のチェックも含まれます。

このサポートは、JetBrains IDE のユーザーにとって生産性を大きく押し上げます。LEFTHOOK の pre-push フックや CI パイプラインの実行と失敗を待つ必要がなく（これは長くて退屈なフィードバックループです）、リンティング／型などのエラーを瞬時にフィードバックとして受け取ることができるからです。

### この機能を活用する GitLab チームメンバーや貢献者の効率を向上させる

JetBrains IDE のユーザーは GitLab チームメンバーの中にも複数おり、活発な[社内 `#jetbrains-ide-users` Slack チャンネル](https://gitlab.slack.com/archives/CR08PTQ6T)が存在します。

そのため、Workspaces チームのように JetBrains ユーザーが複数いるチームの一部では、機能の[`コードインスペクション`](..) をクリーンに保ち、警告／エラーが出ないようにする継続的な努力をしています。これにより、各ファイル右上の「グリーンチェック」が役立つ指標となり、それが表示されないときは何らかの問題を持ち込んだことに即座に気づけます。

このアプローチは「誰もが貢献できる」という私たちのミッションも支えています。なぜなら、JetBrains を使う社外貢献者が `noinspection` コメントが整備された領域のコードに貢献したい場合、IDE 上の偽陽性警告に煩わされずに作業でき、自分が見ている警告は今のコーディングセッションや MR で自分自身が持ち込んだ問題に起因する可能性が高い、と信頼できるからです。

### この機能を最大限に活用するためには偽陽性を抑制する必要がある

ただし、ときには偽陽性が出るため、`noinspection` コメントで無効化して綺麗な状態を保つ必要があります。これは RuboCop、ESLint、その他類似の静的解析ツールにおける `disable` コメントに似ています。

これらの偽陽性は、IDE のバグや機能不足を示していることが多いです。そのため、こうしたケースでは積極的に JetBrains に報告し、対応する Issue を JetBrains の Issue トラッカーで追跡しています。

このトラッキングは [Tracked JetBrains Issues](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/tracked-jetbrains-issues/) にあり、関連するコメントには対応する Issue エントリが参照として含まれているはずです。基となる Issue が解決され、新しい IDE リリースに含まれた時点で、[対応する `noinspection` コメントは削除できます](../tracked-jetbrains-issues/_index.md#handling-of-issues-related-to-noinspection-comments)。

しかし、`noinspection` コメントの中には、デフォルトの JetBrains インスペクションルールが原因のものもあります。私たちが意図的にデフォルトルールに対する例外を作っており、そのルールを強制したくない場合です。例として、クラス／変数／モジュール／メソッド／定数の名前が長すぎる、または短すぎるという警告があります。1 つの選択肢としては、インスペクションの設定そのものを変更し、たとえばより長い名前を許可することもできます。しかし、その方法では全員が同じ JetBrains 設定をオーバーライドしておく必要があり、特に社外貢献者に対してそれを要求したり前提にしたりはしたくありません。

### 全員が使う必要はないが、他のメンバーが使うことを妨げないでほしい

私たちは、JetBrains を使っていないユーザーにこれらのコメントを保守してもらう必要はありません。チーム内の JetBrains ユーザーが、コメントの保守、説明コメント／TODO の追加、関連する JetBrains Issue の追跡、および修正済みあるいは古くなったものの削除に責任を持ちます。

私たちがお願いしているのは、コメントを追跡している [JetBrains Issue](../tracked-jetbrains-issues/_index.md) がすでに解決されている場合を除き、[JetBrains 非利用者からこれらのコメントを削除するリクエスト](https://gitlab.com/gitlab-org/gitlab/-/issues/409823) を行わないことです。

JetBrains IDE を使っていない人にとっては有用ではないかもしれませんが、JetBrains ユーザーには、このような警告がない状態を保つことで質の高いコードを書く助けになり、私たちの価値観である Efficiency（効率）、Results（結果）、Diversity/Inclusion/Belonging（多様性／包摂／所属感）を支えることになります。

GitLab で広く使われている、JetBrains 以外の IDE で同様のサポートがあるなら、その利点や使い方、追跡方法についてのドキュメントを作成することをぜひお勧めします。

異なるエディター向けにこうしたコメントが私たちのコードベースに広がることへの懸念は妥当なものであり、私たちは真剣に受け止めています。そのため、GitLab であまり活発に使われていない IDE のコメントを削除する議論を呼びかける Issue や、活発に保守／キュレーションされていないコード領域における JetBrains の `noinspection` コメントを削除する議論を呼びかける Issue を、チームメンバーが積極的にオープンすることを推奨しています。

実際のところ、これらのコメントの `gitlab` コードベースにおける範囲は現在限定されています。[2023 年 7 月のこの MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/125831) 時点で、`Workspaces` ドメイン以外のすべての `noinspection` コメントはコードから削除されており、Workspaces はこれを積極的に活用している唯一のグループです。

しかし、現在ではこのプロセスが標準化され、[JetBrains IDE の設定と利用に関するハンドブックのサポート](../setup-and-config/_index.md) も追加されたので、JetBrains を使う他のチームメンバーやチームもこのアプローチを採用したいと考えるかもしれません。
