---
title: "GitLab for Open Source プログラムのワークフロー"
description: "GitLab for Open Source プログラム特有のワークフローに関する詳細"
upstream_path: /handbook/marketing/developer-relations/programs/open-source-program/oss-program-workflows/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
---

## 概要

このページでは、[GitLab for Open Source プログラム](https://about.gitlab.com/solutions/open-source/) 特有のワークフローについて詳述します。
GitLab for Open Source プログラムは GitLab の [Developer Relations Programs](/handbook/marketing/developer-relations/programs/) の一部であるため、チームメンバーはチームの標準的な 7 ステップの申請ワークフローを使って申請を検証します。
すべての GitLab コミュニティプログラムに関連する詳細については、ワークフローの[ハンドブックページ](/handbook/marketing/developer-relations/programs/program-resources/#automated-application-workflow)を参照してください。

## プログラム申請フォーム

GitLab Customers Portal には GitLab for Open Source ライセンスをリクエストするための申請フォームがあります。
このフォームのワークフローは、2 種類の提出形式に分かれています:

### オープンソースプロジェクトが GitLab.com 上にある場合

申請者は、プロジェクトを含むネームスペースを選択し、プログラム規約をチェックします。送信ボタンを押すと、ネームスペース検証が開始され、基本的なプログラム要件を満たしているかが確認されます:

* ネームスペース内の各プロジェクトには [OSI 承認済みオープンソースライセンス](https://opensource.org/licenses) が含まれていること。
* ネームスペースには少なくとも 1 つの公開プロジェクトが含まれていること。
* ネームスペースには最大 1 つのプライベートプロジェクトが含まれていること。

チェックが通過すると、顧客は次のステップの手順を含むメールを受け取ります。
OSI 承認済みライセンスのチェックの詳細については [GitLab Docs](https://docs.gitlab.com/ee/subscriptions/community_programs.html#gitlab-for-open-source) を参照してください。

### オープンソースプロジェクトが Self-managed インスタンス上にある場合

申請者は、**GitLab.com を使用するのではなく self-managed ソリューションが必要な理由を説明する必要があります**。また、プロジェクトに関する基本的な情報と、ネームスペースへの公開アクセス可能なリンクも提供する必要があります。申請者は 5 営業日以内に応答を受け取ります。

このフォームには、GitLab Legal チームの協力を得て追加された次のステートメントも含まれています:

> プロジェクトメンテナーは、例えばサービスや上位ティアの販売などによって、このプロジェクトから利益を得ようとしていないことを証明します。ご自身のユースケースが対象となるかご確認ください。

貿易管理に関連する理由により、私たちはキューバ、イラン、シリア、北朝鮮、ロシア、ベラルーシ、ウクライナからの申請者を受け入れることはできません。

## 申請者の検証

GitLab for Open Source プログラムの適格性要件は [プログラムのハンドブックページ](/handbook/marketing/developer-relations/programs/open-source-program/) に記載されています。
申請フォームは、プログラム申請の基本的な整合性チェックを行います。

GitLab.com（SaaS）に存在するプロジェクトの検証フローは完全に自動化されています。ただし、Self-managed の申請については、チームが [検証フェーズ](/handbook/marketing/developer-relations/programs/program-resources/#verification) を引き続き手動で処理する必要があります。
Self-managed ワークフローは、さらなる自動化が実装されるまで、申請処理チームによる対応が必要です。

ネームスペースがプログラムの対象とならない場合、チームは [チームの対応テンプレート](https://gitlab.com/gitlab-com/marketing/developer-relations/strategy-programs/operations/-/tree/main/support-macros/opensource) に従って却下メールを申請者に送信します。
申請者は、却下が誤りだと考える場合や、適格性に関する追加の質問がある場合に、`opensource@gitlab.com` に連絡できます。

## 検証回数の制限

検証が成功するまで、誰でも GitLab Customers Portal フォームから申請・再申請が可能です。Self-managed のユースケースでは、申請者は 1 日に 1 回リクエストを送信できます。
この制限は、エラーへの余地を提供し、単一の個人が複数のオープンソースプロジェクトを代表してライセンスを申請できるようにします。
この制限はいつでも変更可能です。
