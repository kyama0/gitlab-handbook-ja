---
title: "セキュリティトレーニング"
description: "セキュリティトレーニングに関するすべて。どこで見つけられるか、どう作成するかを含む。"
upstream_path: /handbook/security/security-assurance/governance/security-training/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T21:00:00Z"
translator: claude
stale: false
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## 概要

このページは、GitLab のセキュリティトレーニングに関するすべての情報を扱います。セキュリティトレーニングは、特定のグループ向けのトレーニング、セキュリティ意識向上、そして GitLab チームメンバー、GitLab の顧客、より広いセキュリティコミュニティに対するセキュリティ上のメリットのためにセキュリティ部門が開発したトレーニングといった形をとります。

## Security Assurance

Security Assurance サブ部門は、[Field Security](../field-security/)、[Security Governance](_index.md)、[Security Compliance](../security-compliance/)、および [Security Risk](../security-risk/) に関わるセキュリティトレーニングのニーズを取り扱います。

Security Assurance の詳細については、[Security Assurance](/handbook/security/security-assurance/) ページをご覧ください。

## セキュリティ意識向上トレーニング

GitLab のチームメンバーがおそらく最もよく知っているのは[セキュリティ意識向上トレーニング](/handbook/security/security-assurance/governance/sec-awareness-training/)で、これは [ProofPoint](https://gitlab.ws01-securityeducation.com/) を介して提供される、ハンドブックファーストの GitLab 向けにカスタマイズされたトレーニングと年次ポリシーレビューです。GitLab はオンボーディングプロセスの一部として、すべての新入社員に[新入社員向けセキュリティオリエンテーショントレーニング](/handbook/security/security-assurance/governance/sec-awareness-training/#when-will-security-awareness-training-occur)を完了することを求め、その後も毎年トレーニングを実施しています。

GitLab のセキュリティ意識向上トレーニングは、[GitLab Security](/handbook/security/) の [Governance Program](_index.md) によって開発されています。トレーニングの目的は次のとおりです。

1. すべての GitLab チームメンバーが GitLab Security チームを認識し、私たちの取り組み、チーム構造、人々に親しんでもらう。
1. すべての GitLab チームメンバーが、GitLab を日々保護することにおける自分の役割の重要性を認識し、セキュリティのベストプラクティスで正しい意思決定をできるようにエンパワーする。
1. すべての新規 GitLab チームメンバーに、GitLab での在籍中に遭遇する可能性のあるセキュリティ関連の状況に親しんでもらう。
1. すべての GitLab チームメンバーが、Security に連絡することは推奨される慣行であるという考えを内面化し、強化するのを助ける。

- カバーされる特別なトピック:
  - [疑わしいフィッシング](/handbook/security/security-assurance/governance/phishing/#how-to-identify-a-basic-phishing-attack)
  - [使用承諾事項](/handbook/people-group/acceptable-use-policy/)
  - [デバイスを紛失または盗難?!](/handbook/security#reporting-an-incident)
    - Slack: `/security` Slack コマンド
    - メール (緊急時のみ): panic@gitlab.com
  - [データ分類](/handbook/security/policies_and_standards/data-classification-standard/)
  - [未承認の場所に Red データを置かない](/handbook/people-group/acceptable-use-policy/#security-and-proprietary-information)

### トレーニングフィードバック

トレーニングの背後にあるチームに関与し、フィードバックを提供したり、トレーニング内容に関する質問をしたりすることを強くお勧めします。以下の方法でできます。

1. 新入社員トレーニング向けの四半期レビュー済み GitLab [フィードバック Issue](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance/security-awareness-training/security-awareness-training-program/-/issues/13)。
1. 年次セキュリティ意識向上トレーニングの[フィードバック Issue](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance/security-awareness-training/security-awareness-training-program/-/issues/16)。
1. security-training@gitlab.com にメールを送信する。

## セキュアコーディングトレーニング

[DevOps](https://about.gitlab.com/topics/devops/) 企業として、安全なコードを作成することに焦点を当てる必要があり、したがって開発者のトレーニングは優先度の高い項目です。[セキュアコーディングトレーニング専用のハンドブックページ](/handbook/security/secure-coding-training/)があり、必須および推奨トレーニングの両方への多数の参照が含まれています。

## 追加のセキュリティトレーニング

Security Assurance およびセキュアコーディングトレーニングの領域に当てはまらない追加のトレーニングトピックがあります。これらは、以下の一般的なカテゴリーに分類されるトレーニング機会です。

- 高リスクの役割に関連する特定のサブ部門の Security 部門のチームメンバー向けのトレーニング。
- 高リスクの役割に関連する他の役割ベースのトレーニングのためのセキュリティトレーニング。
- 一般的なセキュリティトピックを GitLab チームメンバー (および顧客とセキュリティコミュニティ全般) が理解し、明確化に到達できるようにするための、特定のセキュリティ関連の主題の詳細な説明。

これらのトレーニングリソースは、通常、アクセスレベルと意図された対象者によってグループ化されます。私たちはハンドブックファーストなので、すべてのトレーニングをすべての人が利用できるようにしようと試みますが、内部のみのアクセスに制限する必要のある情報を伝える必要がある場合もあります。たとえば、「GitLab のセキュリティトレーニングコースを作成する方法」に関するトレーニングコースは、Security 部門に向けたものですが、内部的に機密性のある資料を含まないため、ハンドブックに完全にドキュメント化して公開することができ、GitLab だけでなく広いセキュリティコミュニティにも利益をもたらします。これらのコースを開発するにあたって、ここに掲載していきます。

## GitLab 向けのセキュリティトレーニングコースの開発

GitLab 向けのセキュリティトレーニングコースを開発することは少し気が重く感じられるかもしれませんが、そうではありません。そして Security 部門に限った話ではありません！別の部門にいて、セキュリティに関わるトレーニングのアイデアがある場合でも、トレーニングコースを思いつくことができます。あなたが持つかもしれない最大の質問は「どうやってこれをするのか?」ということでしょう。あなたがセキュリティの側面を持つトレーニングコースを作成できるようにいくつかのステップを概説しました。

### 基本

念頭に置いておくべきいくつかの基本があります。次のとおりです。

- トレーニングの内容は、ハンドブックエントリ (もちろん)、GitLab Unfiltered のビデオ、ブログ投稿、ランブック、プロジェクトなど、多数の項目で構成できます。これらの形式のいずれかでコンテンツを作成することによって、潜在的なトレーニングコースの構成要素を作成できます。
- これらの個々のコンテンツの構成要素を集めて一緒に配置することで、トレーニングコースが作成されます。
- 可能な限り、トレーニングコースをハンドブックファーストにするよう努めてください。

### Security 固有の事項

セキュリティ以外のトレーニング資料を作成する場合と比較して、トレーニング資料を作成する際にいくつかの基本的な相違点があります。

- どのデータが公開とみなされ非公開とみなされるかを認識できるよう、[GitLab データ分類標準](/handbook/security/policies_and_standards/data-classification-standard/)を確認してください。[GREEN](/handbook/security/policies_and_standards/data-classification-standard/#green) のデータは公開して共有可能であり、GREEN ではないトレーニングコンテンツは公開アクセス可能なトレーニング資料に含めるべきではありません。
- ゼロから作成された新しいコンテンツは、その分類を決定するために Security 部門によってレビューされる必要があります。
- 非公開のトレーニングコンテンツはハンドブックには入れず、プライベートプロジェクトまたはランブックに含めることができます。

ポイントを説明するためのいくつかの例:

- GitLab の [Red Team](/handbook/security/security-operations/red-team/) と彼らが任務を遂行する方法へのアプローチについて話すトレーニングコンテンツは問題ありません。Red Team 評価がどのように実行されたかの詳細 (回収されたデータの例や、特定の GitLab アセットに対する特定の手法を含む) は公開すべきではありません (おそらく Security 部門によってレビューされ「サニタイズ」された場合を除いて)。
- ビジネスパートナーシップ、特定の顧客、特定の会社のイニシアチブ、その他の関連する非公開情報を含むセキュリティ関連のコンテンツは、公開アクセス可能なトレーニングコンテンツに含めることはできません。良い例は、GitLab が政府機関と仕事をしている場合です。その機関自体は何が公開できるかについて非常に厳格なルールを持っているかもしれず、GitLab 自身の基準では公開とみなされるものが、その機関の基準の一部ではないかもしれません。
- 内部のプライベートコンテンツへのリンクを含むハンドブックエントリのように、内部のプライベートコンテンツを指す公開コンテンツを *持つことができます*。ただし、公開コンテンツ内でそのプライベートコンテンツを *引用してはいけません*。

分類、公開対非公開のデータ、公開トレーニングコンテンツに含めることができるものについての質問があれば、お問い合わせください。`#security` Slack チャンネルでお問い合わせいただけます。

### 私たちのビジョン

Security 部門のビジョンは、セキュリティ、イノベーション、透明性のリーディング例となることです。私たちのトレーニングは可能な限りオープンであるべきで、公開で閲覧可能であれば GitLab のセキュリティを助けるだけでなく、模範を示すことで他者を助けることもできます。考えられるところでは、これは将来の GitLab チームメンバーに私たちがなぜこれほどまでに素晴らしい職場であるかを示し、部門および会社として成長を続けることを可能にする、リクルーティングツールにもなり得ます。
