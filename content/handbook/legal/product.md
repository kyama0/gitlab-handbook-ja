---
title: "製品と知的財産"
description: "Legal 製品・IP チームのページ"
upstream_path: "/handbook/legal/product/"
upstream_sha: "02cf85a2ba59858c59b2a31a0356f2371a2a8979"
translated_at: "2026-04-29T10:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-27T22:49:21+00:00"
---

## マーケティング

- [マーケティングガイド: GitLab Legal との連携](/handbook/legal/marketing-collaboration/)をご参照ください。[プロモーションゲーム](/handbook/legal/marketing-collaboration/#promotional-games)や[パブリシティ免責・リリース](/handbook/legal/marketing-collaboration/#publicity-waiver-and-release)についても記載されています。
- マーケティングガイドで対処されていないリクエストについては、[一般法律 Issue](https://gitlab.com/gitlab-com/legal-and-compliance/-/issues/new?issuable_template=general-legal-template) を新規作成してください。
- 法律審査が必要なすべての資材については、[資材の法律審査プロセス](/handbook/legal/materials-legal-review-process) を参照してください。

## 特許

- GitLab の特許およびパテントプログラムに関する情報（参加方法を含む）については、[特許](/handbook/legal/patent-program/)ページをご参照ください。
- [サードパーティ特許審査ガイドライン](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-product-ip/third-party-patents-guidelines)をご参照ください（チームメンバーのみアクセス可能）。

## 商標

- GitLab の商標の使用に関する情報については、[ブランドリソース](https://design.gitlab.com/resources/)および[商標ガイドライン](/handbook/marketing/brand-and-product-marketing/brand/brand-activation/trademark-guidelines/)をご参照ください。
- [GitLab におけるサードパーティ商標の使用](/handbook/legal/policies/product-third-party-trademarks-guidelines/)
- [GitLab の商標について](/handbook/legal/trademarks-at-gitlab/)

## クリーンルーム開発プロセス

- [クリーンルーム開発プロセス](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-product-ip/cleanroom-development-process)の詳細については、このガイダンスをご参照ください（チームメンバーのみアクセス可能）。

## オープンソースソフトウェアの使用

オープンソースソフトウェアの使用に関するガイダンスが更新され、チームメンバーが使用に事前承認済み（許容）のオープンソースライセンスの種類と、法務・コーポレートアフェアーズチームによる事前審査が必要なもの（使用が許容されない可能性があるため）を包括的に判断できるようになりました。

**オープンソースソフトウェアの使用を希望するチームメンバーは、包括的な [Blue Oak Council](https://blueoakcouncil.org/list) ライセンスリストを参照し、以下のように進めてください:**

- `事前承認済み（許容）`: [Blue Oak Council モデルライセンス](https://blueoakcouncil.org/license/1.0.0)、[ゴールド](https://blueoakcouncil.org/list#gold)、[シルバー](https://blueoakcouncil.org/list#silver)、[ブロンズ](https://blueoakcouncil.org/list#bronze)のいずれかの評価を持つライセンス、および例外リストに含まれるすべてのライセンスの下でライセンス供与されたソフトウェアは、使用について事前承認されています。
  - チームメンバーは法的な承認を求めることなく進めることができます。
- `承認が必要（許容される可能性がある、または許容されない）`: 例外リストを除き、[Lead](https://blueoakcouncil.org/list#lead) 評価のライセンス、またはBlue Oak Councilリストに含まれていないライセンスの下でライセンス供与されたソフトウェアは、法務・コーポレートアフェアーズチームによる審査が必要です。
  - チームメンバーは[法律 Issue](https://gitlab.com/gitlab-com/legal-and-compliance/-/issues/new?issuable_template=general-legal-template) を開くことで審査をリクエストできます。
  - Issue の説明には、ソフトウェアの使用方法、変更の有無、配布方法（該当する場合）の詳細を含めてください。
- `例外リスト（許容）`:
  - [WTFPL](http://www.wtfpl.net/)

チームメンバーは、**適用されるライセンスのすべての要件および制限事項を遵守する**必要があります（これらは通常、ライセンスの本文に定義されています）。

- たとえば、一般的な要件として、配布するソフトウェアのすべてのコピーに元の著作権とライセンス通知を含めることが求められます。
- 開発環境またはテスト環境でのみ使用される依存関係は、配布されないためオープンソースライセンス要件から免除されます。

### 参考リソース

- [GitLab ライセンスと互換性](https://gitlab.com/gitlab-org/gitlab-foss/blob/master/doc/development/licensing.md)。
- 一般的な情報については: [Google オープンソースプログラム](https://opensource.google/documentation/reference)および[ライセンス](https://opensource.google/documentation/reference/thirdparty/licenses)
- サードパーティソフトウェアの使用に関するリクエスト、またはオープンソースライセンスの使用に関するその他の質問については、[法律 Issue](https://gitlab.com/gitlab-com/legal-and-compliance/-/issues/new?issuable_template=general-legal-template) を開き、リクエストに関連する情報を含めてください。

## コントリビューターライセンス契約

GitLab を代表してオープンソースプロジェクトにコントリビュートする場合、CLA への署名が必要になることがあります。[認可マトリクスポリシー](https://internal.gitlab.com/handbook/company/authorization-matrix/)に従い、GitLab を代表して CLA を締結するには法的承認が必要です。

Corporate CLA と Individual CLA のいずれかを選択できる場合は、Corporate CLA を選択してください。

GitLab を代表して法的承認を得て CLA を締結するには、以下の手順に従ってください:

1. [サードパーティ CLA トラッカー](https://docs.google.com/spreadsheets/d/106bLmkl6IofWN__iwnu0UwQZzdm5JvDf8qdLV_4DTh8/edit#gid=0)を確認して、コントリビュートしたいプロジェクトに関してすでに CLA が締結されているかどうかを確認します。
1. [サードパーティ CLA トラッカー](https://docs.google.com/spreadsheets/d/106bLmkl6IofWN__iwnu0UwQZzdm5JvDf8qdLV_4DTh8/edit#gid=0)にまだ CLA が記載されていない場合は、新しい[法律 Issue](https://gitlab.com/gitlab-com/legal-and-compliance/-/issues/new?issuable_template=general-legal-template) を開きます。
1. Issue に `CLA` ラベルを適用します。
1. コントリビュートするプロジェクトの詳細を含め、承認用の CLA を添付またはハイパーリンクとして Issue に追加します。
1. 法務チームが CLA を審査し、必要に応じて追加情報を求めたうえで承認します。
1. CLA の締結にメールアドレスやアカウントが必要な場合は、`cla_managers`[at]`gitlab.com` のメールアドレスを使用してください。このGoogle グループへのアクセスは、必要に応じて Issue を通じてリクエストおよび付与できます。
1. 法務チームが Issue で CLA の承認を確認したら、CLA の締結（必要な場合は `cla_managers`[at]`gitlab.com` のメールを使用）を進め、プロジェクトへのコントリビュートを開始できます。

GitLab を代表してサードパーティプロジェクトへのコントリビュートは、@gitlab.com のメールアドレスを使用して行ってください。質問は [#legal](https://gitlab.slack.com/app_redirect?channel=C78E74A6L) Slack チャンネルに投稿してください。

また、GitLab へのコントリビュートに関する情報をお探しの場合は、[こちら](https://about.gitlab.com/community/contribute/dco-cla/)をご参照ください。

## 著者基準

GitLab では、GitLab で開発された学術論文の著者を特定する際に役立つガイダンスを設けています。このガイダンスはチームメンバーのみ[こちら](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-product-ip/authorship-criteria)からアクセスできます。

## GPL 協力コミットメント

このイニシアチブの目的は、オープンソースコミュニティの継続的な成長を支援するため、特定のライセンス条件の違反に対して一貫した公正なライセンス執行を確保することです。このイニシアチブの詳細は[こちら](https://opensource.com/article/18/11/gpl-cooperation-commitment)から確認できます。

**GitLab の GPL 協力コミットメントは以下のとおりです:**

> カバード・ライセンスの終了から生じる法的手続きまたは請求（防御的行動を除く）を提起または継続する前に、GitLab はカバード・ライセンスに違反したとして告発された人または団体（「あなた」）に対し、治癒および回復に関する以下の規定（GPL バージョン 3 から抜粋）を提供することを約束します。ここで「本ライセンス」とは、執行されている特定のカバード・ライセンスを指します。
>
> ただし、あなたが本ライセンスのすべての違反を停止した場合、特定の著作権者からのあなたのライセンスは、(a) 著作権者が明示的かつ最終的にあなたのライセンスを終了させない限り暫定的に、また (b) 著作権者が違反停止後60日以内に合理的な手段によってあなたに違反を通知しない場合は永続的に回復されます。
>
> さらに、著作権者が合理的な手段によってあなたに違反を通知し、それが著作権者からあなたが本ライセンス（任意の著作物に関して）の違反通知を受けた初めての場合であり、あなたが通知受領後30日以内に違反を是正した場合、特定の著作権者からのあなたのライセンスは永続的に回復されます。
>
> GitLab は、このコミットメントを取消不能であり、GitLab およびその著作権の譲受人または後継者に対して拘束力があり、執行可能であることを意図しています。
>
> GitLab は、このページまたは後継の場所に新版を公開することにより、このコミットメントを変更することができます。
>
> 定義
>
> 「カバード・ライセンス」とは、Free Software Foundation が公開した GNU 一般公衆利用許諾書バージョン 2（GPLv2）、GNU 劣等一般公衆利用許諾書バージョン 2.1（LGPLv2.1）、または GNU ライブラリ一般公衆利用許諾書バージョン 2（LGPLv2）を意味します。
>
> 「防御的行動」とは、あなたまたはあなたの関連会社が開始した先行する手続きまたは請求に対応して GitLab があなたに対して提起する法的手続きまたは請求を意味します。
>
> GitLab とは GitLab Inc. およびその関連会社と子会社を意味します。
