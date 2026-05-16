---
title: "GitLab ティア"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/tiers/
upstream_sha: d0a19ab78fc5e0d322868c8f35ab8f81e761bd21
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-16T13:22:33+02:00"
---

## 概要

| ティア      | 提供形態                  | デプロイメントタイプ                      |  ライセンス           | 料金            |
| --------- | ------------------------- | -------------------------------------| ------------------ | ---------------|
| Free      | Self-Managed と SaaS     | Self-Managed と GitLab.com          | オープンソース        | 無料         |
| Premium   | Self-Managed と SaaS     | Self-Managed と GitLab.com          | source-available   | 有料           |
| Ultimate  | Self-Managed と SaaS     | Self-Managed、Dedicated、GitLab.com | source-available  | 有料 |

## 定義

1. ティア: 特定の価格帯で一連の機能を提供する GitLab の提供形態。
1. ユーザー: ティアにかかわらず GitLab を使用するすべての人。
1. 顧客: 有料ティアのユーザー。
1. プラン: 有料ティアのみ。
1. ライセンス: オープンソース対 source-available（例: 機能を source-available ティアからオープンソースティアへ移動する）。
1. [ディストリビューション](#history-of-ce-and-ee-distributions): self-managed CE 対 EE（例: EE ディストリビューションを Free ティアで持つことができる）。
1. バージョン: [GitLab のリリース](https://about.gitlab.com/releases/)（例: ユーザーがどのバージョンを使用しているかを尋ねる場合）。
1. [プロダクトカテゴリ](https://internal.gitlab.com/handbook/sales/deal-desk/product_category/_productcategory/): 機会において販売される主要な製品を識別する内部フィールド。

## ユーザーの種類

1. Free User - GitLab Free ティアを使用しており、追加のコンピュート時間やストレージに対して支払いを行わない（ただし、Free ティアに含まれる範囲を超えて利用可能）。
1. Trial User - 有料ティアの 1 つでトライアル中の人。
1. Consumption User - GitLab Free ティアを使用し、Free ティアに含まれる範囲を超えた追加のコンピュート時間やストレージに対して消費ベースで支払うユーザー。
1. Licensed User - source-available ライセンスのユーザー
   1. Ultimate User - Ultimate のライセンスユーザー
   1. Premium User - Premium のライセンスユーザー
   1. Starter User - Starter のライセンスユーザー（提供は終了していますが、一部のユーザーは以前購入したライセンスを使い切っています）
1. Program User - [GitLab for Startups](https://about.gitlab.com/solutions/startups/)、[GitLab for Education](https://about.gitlab.com/solutions/education/)、[GitLab for Open Source](https://about.gitlab.com/solutions/open-source/) などのプログラムを通じて Premium または Ultimate ティアを利用しているユーザー。

## 提供形態

一般に、self-managed の各ティアは GitLab SaaS ティアの機能と一致します。名称が異なるのは 2 つの理由によります:

1. self-managed と GitLab SaaS プラン間で完全な機能パリティがあるわけではない。例えば、GitLab self-managed の Premium と Ultimate には [LDAP Group Sync](https://docs.gitlab.com/ee/administration/auth/ldap/index.html#group-sync) が含まれていますが、GitLab SaaS の Premium と Ultimate には含まれていません。
1. ティア名だけで、ユーザーが self-managed か GitLab SaaS のどちらを使用しているかを把握し、内部・外部の混乱を防ぎたい。

特定の機能がどのティアに含まれているかを 1 単語で指定する必要がある場合（例: Issue トラッカーで）、self-managed ティアは GitLab SaaS ティアの機能のスーパーセットを含む傾向があるため、デフォルトでは self-managed ティアを参照します。
可能な限り、self-managed と GitLab SaaS の両方のティアをハイライトします（[リリース投稿](https://about.gitlab.com/releases/2018/02/22/gitlab-10-5-released/#instant-ssl-with-lets-encrypt-for-gitlab)のように）。

## アドオンサービス

アドオンサービスはティアの機能を拡張するもので、新しいティアを表すものではありません。これらのアドオンサービスには、ストレージ、コンピュート時間、Agile Planning、AI 機能などをサブスクリプション中の既存ティアに追加するものが含まれますが、これらに限定されません。アドオンは、提供されているアドオンサービスのティア利用可能性に応じて、1 つ、複数、またはすべてのティアで利用可能にできます。

## Libre、gratis、free

オープンソースコミュニティが彼らの作業について議論するとき、彼らが作成するソフトウェアの性質を表現するために通常「free」という単語の代わりに「gratis」と「libre」という言葉を使用します。これは、英語の「free」という言葉が複数の意味を持つ曖昧な言葉だからです: 「無料」（"free as in beer"）、「制約がほとんどないか全くない」（"free as in speech"）、またはその両方。したがってオープンソースコミュニティは、「無料」のソフトウェアを指すときには曖昧でない用語「gratis」を、「制約がほとんどないか全くない」ソフトウェアを指すときには「libre」を好んで使用します。オープンソースソフトウェアは「libre」であり、誰でも検査、変更、再配布する「自由」を持っています。しかし、オープンソースソフトウェアは「gratis」である場合とそうでない場合があります。

GitLab の Free ティアの一部である機能は、gratis でも libre でもあるオープンソースソフトウェア ― [free as in speech and as in beer](https://www.howtogeek.com/31717/what-do-the-phrases-free-speech-vs.-free-beer-really-mean/) ― を指します。この区別の詳細については、[Wikipedia](https://en.wikipedia.org/wiki/Gratis_versus_libre) を参照してください。

## GitLab SaaS

私たちは、マルチテナントの GitLab SaaS を、明確で一般的なため GitLab.com（G と L を大文字）と呼びます。
ほとんどの self-managed GitLab インスタンスもクラウドでホストされているため、GitLab Cloud とは呼ばず、シングルテナントインスタンスを導入するとさらに混乱するためです。

GitLab Dedicated は、シングルテナント SaaS 提供として、当社のエンタープライズ DevSecOps プラットフォームを利用する新しい方法を提供します。この提供は、エンタープライズ DevSecOps プラットフォームのすべてのメリットに加え、コンプライアンスニーズを満たすためのデータレジデンシー、隔離、プライベートネットワーキングに重点を置いて提供されます。

## 個人サブスクリプションとグループサブスクリプション

GitLab SaaS サブスクリプションは、個人ネームスペースまたはグループネームスペースに追加されます。個人サブスクリプションは単一のユーザーに適用され、グループサブスクリプションはグループ内のすべてのユーザーに適用されます。

## CE と EE ディストリビューションの歴史

歴史的に、GitLab は 2 つの異なるソフトウェアディストリビューションとして提供されており、それぞれが独自のソースコードリポジトリとドキュメントを持っていました: [Community Edition (CE)](https://gitlab.com/gitlab-org/gitlab-ce/) と [Enterprise Edition (EE)](https://gitlab.com/gitlab-org/gitlab-ce/) です。2020-09-22 にリリースされた GitLab バージョン 12.3 以降、[GitLab は単一のコードベースに移行しました](https://about.gitlab.com/blog/2019/08/23/a-single-codebase-for-gitlab-community-and-enterprise-edition/)。

「CE」と「EE」という名前は、[ダウンロードしてインストール](https://about.gitlab.com/install/)される実際のソフトウェアパッケージを指していました。今日、単一のディストリビューションは「Official Linux package」と呼ばれます。

ある期間、GitLab の価格ティアでも「CE」と「EE」が使用されていました。[free, self-managed ティアが「CE」から「Free」に変更された](https://about.gitlab.com/blog/2018/04/20/gitlab-tiers/)ときに、以下のダイナミクスが生まれました:

**Free ユーザー**は、Community Edition (CE) と Enterprise Edition (EE) のどちらか 1 つのディストリビューションを使用できました。Enterprise Edition は商用サブスクリプションなしでダウンロード、インストール、実行できます。この場合、オープンソースライセンスを使用して実行され、オープンソース機能のみにアクセスできます。事実上、サブスクリプションなしの EE と CE は全く同じ機能を持っています。

**Premium と Ultimate ユーザー**は Enterprise Edition のみを使用できました。

CE で実行している Free ユーザーが有料ティアにアップグレードしたい場合、EE に再インストールして移行する必要がありました。Free ユーザーとして EE を使用する利点は、後で商用サブスクリプションへのアップグレードがはるかに簡単になることです。必要なのはより多くの機能にアクセスするためのライセンスキーをインストールすることだけで、別のディストリビューションを再インストールする必要はありません。今日、GitLab の単一のディストリビューションはこれらの利点を維持しています。

GitLab、ディストリビューション、バージョン、ティア、価格、ライセンスについての話し方については、[ティアメッセージング](#tier-messaging)セクションを参照してください。

### CE と EE という用語の使い方

Community Edition (CE) と Enterprise Edition (EE) は GitLab のソフトウェアディストリビューションを指します。商用機能が必要だと判明した場合に最も痛みの少ないアップグレードパスを提供するため、お客様には EE ディストリビューションを使用するよう奨励していました。ディストリビューションパッケージについて具体的に話していない場合、これらの用語は使用しないでください。[おそらく誤って使用しています](/handbook/communication/top-misused-terms/#enterprise_edition)。

### 非有料／有料**ユーザー**を指すために CE/EE を使用しない

ユーザーは無料で EE ディストリビューションを利用できます。ディストリビューションは、ユーザーが顧客かどうかを示すものではありません。

1. 有料・無料を含むすべてのユーザーを意味するときは「ユーザー」と言います。
1. 有料ユーザーを意味するときは「顧客」と言います。
1. 無料ユーザーを意味するときは「Free ユーザー」と言います。

❌ 不正確: 「CE ユーザーが有料ティアにアップグレードするよう促すマーケティングキャンペーンを実施しよう。」

✅ 正しい: 「Free ユーザーが有料ティアにアップグレードするよう促すマーケティングキャンペーンを実施しよう。」

### **ティア**を指すために CE/EE を使用しない

GitLab には 3 つのティアがあります: Free、Premium、Ultimate。ディストリビューションは、ユーザーがどのティアにいるかを示すものではありません。

1. $0 ティアを意味するときは「Free」と言います。
1. $0 ティアの機能を意味するときは「オープンソース」と言います。
1. これらのティアを指すときは「Premium」または「Ultimate」と言います。
1. 価格ティアを参照する際は、オプションとして「GitLab Free」、「GitLab Premium」、「GitLab Ultimate」と言うこともできます。
1. 任意の有料ティアを意味するときは「商用ティア」と言います。

❌ 不正確: 「この機能を CE に移そう。」

✅ 正しい: 「この機能をオープンソース化しよう。」

✅ 正しい: 「この機能を Ultimate から Free に移そう。」


{{% alert title="Note" %}}
「機能を Free に移す」と言うよりも「機能をオープンソース化する」と言う方が強く推奨されます。オープンソースは、その機能が今 $0 で利用可能であるだけでなく、私たちの MIT ライセンスのコードベースでオープンなコミュニティ貢献も可能であることに注目させます。「Free」は $0 価格にのみ注目し、オープンソースコミュニティを強調しません。
{{% /alert %}}


## GitLab トライアル

[self-managed GitLab の無料トライアル](https://about.gitlab.com/free-trial/?hosted=self-managed)と [GitLab.com Ultimate の無料トライアル](https://about.gitlab.com/free-trial/?hosted=saas)を提供しています。

### すでに無料ティアがあるのに、なぜ無料トライアルを提供するのか？

トライアルにより、ユーザーは GitLab Ultimate のすべての機能にアクセスできます。Free プラン（self-managed と SaaS）のユーザーは、無制限の期間、限られた機能セットにアクセスできます。トライアルユーザーは、限られた期間（30 日間）、すべての機能セットにアクセスできます。

| ライセンスタイプ | 機能 | 期間 |
| ------------ | -------- | ----------- |
| Free  | 限定的（オープンソース機能のみ） | 無制限 |
| Trial        | 無制限（すべての Ultimate 機能にアクセス） | 限定的（30 日） |

## オープンソース対 source-available

GitLab はオープンコア製品で、オープンソースと source-available の両方のコードを含みます。
source-available コードはプロプライエタリ（つまりオープンソースではない）ですが、ソースコードを見ることができます。
ライセンスの種類を指すために CE、EE、または Free を使用しないでください。理由は以下のとおり:

1. ほとんどのオープンソースコードは GitLab CE にありますが、当社の [JavaScript コードはすべて MIT ライセンス](https://about.gitlab.com/blog/2015/05/20/gitlab-gitorious-free-software/#free-javascript)であるため、EE のコードの一部も追加のオープンソースコードです。
1. EE のコードの大部分はオープンソースです。
1. Free に source-available コードを出荷する可能性があり、これは「無料」ですが「自由」（オープンソース）ではありません。

## ティアメッセージング

顧客と話すときは、彼らが慣れている言葉を常に使用してください。社内で使用している用語に慣れていない可能性が高いため、理解を最大化するために顧客と話すときは顧客の言葉を使用することが重要です。

### テーマ階層

テーマ階層は、GitLab の**有料**機能の価値を顧客に伝えるために設計されています。

1. **バリュードライバー**: テーマは [カスタマーバリュードライバー](/handbook/sales/command-of-the-message/#customer-value-drivers) にロールアップします。バリュードライバーは、組織が能動的に求めているか必要としている可能性が高いものを表し、GitLab が存在しなくても顧客にとって最重要のトピックです。バリュードライバーは、バイヤーが裁量予算を再配分する原因となる場合があり、価値ベースの顧客対話をサポートします。組織は以下のバリュードライバーのために GitLab を採用・実装します:
バリュードライバーは [ティア](https://about.gitlab.com/pricing/) 内でも強調されます。
1. **テーマ**: テーマは有料機能のセットを指します。関連する有料機能をグループ化することで機能のメリットをハイライトし、顧客が 80 以上の有料機能の長いリストではなく、短いメリットのリストに集中できるようにします。テーマは [GitLab の価格ページ](https://about.gitlab.com/pricing/) にあります。各ティアには約 5 つのテーマがあります。例えば、より良いコードレビュー、コンプライアンス、ポートフォリオ管理など。価格ページでテーマをクリックすると、特定のテーマに直接関連する有料機能のリストが表示されます。例えば、より良いコードレビューは以下の有料機能を含むテーマです: コードと生産性分析、効率的なマージリクエストレビュー、コード品質レポート、マージトレイン、複数承認者。
1. **有料機能**: 有料機能は、GitLab の Free ティアに含まれていない小さく個別の機能です。[有料機能](https://about.gitlab.com/pricing/feature-comparison/) は歴史的にティアにグループ化されてきましたが、これではあるティアを次のティアと差別化する主要機能テーマを強調することがほとんどできず、長い有料機能リストから得られる主要メリットを顧客が理解するのにあまり役立ちません。有料機能はテーマにグループ化されるべきです。

### ティアと価格メッセージング

1. 常に Ultimate を*そのまま*の製品として提示してください。すべての顧客と見込み客は Ultimate 製品から大きな利益を得ることができ、それが私たちの完全なビジョンを説明する正しい参照フレームです。
1. 不必要に下位のティアを紹介しないでください。私たちはコンサルティングセラーであり、高価値製品を持っています。顧客が価格について尋ねた場合、答えは「私たちは無料の提供から、ユーザーあたり年間 $1,188 の Ultimate まで、単一のアプリケーションでエンドツーエンドの DevOps を提供しています」です。顧客のニーズと製品理解の進行に基づいて適切な場合にのみ、下位のティアの詳細に入ります。可能な限り価値販売に集中し、購入への明確な道筋ができてからティアについて議論します。

### 「GitLab」単独の使用

1. `GitLab Self-managed` と `GitLab SaaS` の両方に適用される属性、または会社を指す場合を除き、「`GitLab`」という単語を単独で使用しないでください。1 つの提供方法のみに適用される属性について話す場合は、明示してください（例: 「GitLab SaaS は X を行う」、「GitLab Self-managed は X を行う」）。
1. ある提供方法に固有の事柄を参照する場合は、`GitLab Self-managed` または `GitLab SaaS` を明示してください（例: GitLab SaaS のみに影響するセキュリティバグ）。
1. Ultimate を指すときは `GitLab` という単語単独を使用してください。「GitLab は X を行う」は「GitLab Ultimate は X を行う」を意味します。
1. 特定のものを意味する場合は `GitLab` を単独で使用しないでください。例えば、Free self-managed ティアを参照する場合は `GitLab Free` を明示してください。

### オープンソース、商用、source-available の使用

$0 ティアと有料ティアを区別するため、「オープンソース」提供と「商用」提供について話します。

例: 「あなたが今日使用しているのは GitLab Free ですね。オープンソース提供から商用ティアにアップグレードすることでビジネスが得られる価値について話し合うために、コールをセットアップしたいです。」（同じ文を「商用」の代わりに「有料」を使って書くこともできますが、これは彼らが何をしなければならないか（つまり支払い）に焦点を当て、彼らが何を得るか（つまりビジネスグレードの商用ソフトウェア）には焦点を当てません。）

「オープンソース」と「source-available」という用語を、私たちのさまざまなライセンスモデルについて話すために使用してください。

特定のコードを指すために CE と EE を使用**しない**でください。`MIT Licensed`（コードはオープンソース）と `Proprietary`（コードは source-available）はコードを指します。CE と EE のディストリビューションはどちらも MIT ライセンスを含みます。

### Enterprise という言葉の使い方

1. 市場セグメントを記述するために「enterprise」を使用してください。例: 良い表現は「GitLab はエンタープライズ向けの DevOps を提供する」、「GitLab はエンタープライズに対応している」、「GitLab には多くのエンタープライズ顧客がいる」、「GitLab は DevOps ライフサイクル全体のためのエンタープライズソフトウェアを提供する」など。
1. `Enterprise Starter`、`Enterprise Premium`、`Enterprise Ultimate` のようなティアの修飾子として「enterprise」を使用しないでください。
1. `Enterprise Edition Starter`、`Enterprise Edition Premium`、`Enterprise Edition Ultimate`、`EES`、`EEP`、`EEU` という用語を使用しないでください。これらはすべて廃止されています。

## GitLab FOSS

[GitLab FOSS](https://gitlab.com/gitlab-org/gitlab-foss/) はティアでもディストリビューションでもありません。リポジトリです。
