---
title: "CSE オンボーディング（First Order）"
description: "新規顧客向けのオンボーディング（First Order）CSE 支援モデル。キックオフ、Onboarding Hub、初年度の状況確認、そしてすべての新規顧客が適切に整えるべき基盤を説明します。"
weight: 30
upstream_path: "/handbook/customer-experience/csm/segment/cse/customer-onboarding/"
upstream_sha: "2dbfc49e47c784740ced3e2c617530f365412492"
lastmod: "2026-10-09T17:05:37Z"
translated_at: "2026-10-12T00:15:24+00:00"
translator: codex
stale: false
---

オンボーディング支援モデルでは、Customer Success Engineer（CSE）が、対象となる新規顧客の GitLab 利用開始から
最初の 1 年を支援します。顧客が適切な形で利用を始め、基盤についての自信を深め、
GitLab を購入するだけでなく活用することを目指します。顧客向けの **Onboarding Hub** を軸に、
キックオフと、あらかじめ予定した 5 回の状況確認を通じて進めます。

オンボーディングは、[3 つの CSE 支援モデル](/handbook/customer-experience/csm/segment/cse/)の 1 つです。有料のアドオンではなく、
サブスクリプションに含まれます。顧客による GitLab の初回購入から始まるため、
First Order オンボーディングとも呼ばれます。

## 対象となる顧客 {#who-is-covered}

この支援モデルは、対象の営業セグメントに属する初回購入の顧客を対象としており、対象セグメントの拡大を進めています。
有料の [Success Tier](/handbook/customer-experience/success-services/)を購入した顧客や、対象セグメント外の顧客は、
[Professional Services](https://about.gitlab.com/services/)やデジタルオンボーディングなど、
別の支援モデルを通じてオンボーディングを受けます。

## 初年度の概要 {#the-first-year-at-a-glance}

| 時期 | 実施内容 |
| --- | --- |
| 購入が成約した日（0 日目） | Account Executive（AE）が技術チャンピオン（メールアドレス、タイムゾーン、おおよその稼働開始時期）を確認し、顧客にはキックオフを予約するリンク付きのウェルカムメールが届きます |
| 3 〜 5 営業日以内 | 顧客がキックオフを予約します。未予約の場合は AE が予約を促します |
| 約 10 営業日以内 | CSE が主導してオンボーディングのキックオフを実施します |
| 30 日 | 最初の状況確認 |
| 90 日 | 集中的に支援する最初の 90 日間の終了時に状況を確認します |
| 6、9、12 か月 | 導入・活用を順調に進め、契約更新につなげるための状況確認 |

最初の 90 日間が集中的な支援期間です。マイルストーンは、顧客が購入を決めた理由であるビジネス成果と結び付けます。
その後の状況確認では、導入・活用を引き続き進め、契約更新と拡大の基盤を築きます。

## キックオフの前に {#before-the-kickoff}

CSE は、AE が商談中に記録した情報（チャンピオン、スケジュール、購入の背景にあるビジネス成果）を確認し、
ライセンスが有効化され、サポートにアクセスできる状態にあることをチェックします。また、営業プロセスで把握している
ブロッカーについて、AE、Account Manager（AM）、Solutions Architect（SA）と認識を合わせます。

## オンボーディングのキックオフ {#the-onboarding-kickoff}

キックオフは CSE が主導し、約 60 分かけて、スライド資料ではなく Onboarding Hub を使って進めます。
AE から CSE へ直接紹介して引き継ぐ場でもあります。次の内容を扱います：

- 自己紹介と、GitLab チームが顧客とどのように連携するか。
- Onboarding Hub と初年度の流れの説明。
- サクセスプランニング：顧客の 12 か月後のビジョン、最も重要なビジネス成果、重視する指標。
- 最初の 30 日間についての合意：パイロットチーム、必須の設定項目、次のアクション。

## Onboarding Hub {#the-onboarding-hub}

Onboarding Hub は展開中のため、一部の顧客は以前のバージョンのオンボーディングから始める場合があります。

Onboarding Hub は、CSE と顧客が初年度を通じて使用する共通の参照サイトです。次の 4 つの部分で
構成されています：

- **サクセスプラン：** 顧客の目標と望む成果、およびそれらに対する進捗。
- **初年度のタイムライン：** 主要なマイルストーンを含む、成功までの道筋。
- **顧客を担当する GitLab チーム：** アカウントチームと CSE。
- **役立つリソース：** ガイド、ドキュメント、サポートの選択肢。

オンボーディングは、Premium と Ultimate のオンボーディング、ティアのアップグレード、Duo Agent Platform の
導入・活用に向けたプレイを順に実施する形で構成されています。

## すべての新規顧客が適切に整えるべき基盤 {#foundations-every-new-customer-should-get-right}

初期の導入・活用には 3 つの領域が最も大きく影響し、初期の話し合いの柱になります。
CSE は自由に回答できる質問を使い、各領域について顧客の計画、進捗、そして何より顧客がどの程度自信を持っているかを
理解したうえで、ウェビナー、ドキュメント、動画などの適切なイネーブルメントを案内します。

1. **グループとプロジェクトの階層：** 組織の成長に合わせて拡張できるように GitLab を構成します。
   [グループとサブグループ](https://docs.gitlab.com/user/group/subgroups/)を参照してください。
1. **ユーザーの認証と認可：** シングルサインオンとアクセス管理。
   [GitLab.com グループ向け SAML SSO](https://docs.gitlab.com/user/group/saml_sso/)、
   [Self-Managed インスタンス向け SAML](https://docs.gitlab.com/integration/saml/)、
   [LDAP](https://docs.gitlab.com/administration/auth/ldap/)を参照してください。
1. **早期の DevSecOps 導入：** 最初からパイプラインにセキュリティスキャンを組み込みます。
   [アプリケーションセキュリティの開始方法](https://docs.gitlab.com/user/application_security/get-started-security/)
   と、ウェビナー[開発ライフサイクルの安全性を確保する包括的なアプローチ](https://www.youtube.com/watch?v=0O7Mpfu9Khg)を参照してください。

質問とリソースは、GitLab.com と Self-Managed の両方のデプロイメントを対象としています。

## 各セッションの後に {#after-each-session}

CSE は 24 時間以内に要約と次のステップを添えてフォローアップし、まだ有効化されていないライセンス、
窓口が 1 人しかいないこと、顧客が挙げたブロッカーなどのリスクを AE と AM に知らせます。

## 関連ページ {#related-pages}

- [CSE ホームページ](/handbook/customer-experience/csm/segment/cse/)
- [ウェビナーとハンズオンラボ](/handbook/customer-experience/csm/segment/cse/webinars-and-labs/)は、すべての新規顧客の
  オンボーディングに役立つ補完的なリソースです
