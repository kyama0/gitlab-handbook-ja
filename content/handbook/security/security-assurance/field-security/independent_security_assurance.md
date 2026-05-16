---
title: 独立したセキュリティアシュアランス
upstream_path: /handbook/security/security-assurance/field-security/independent_security_assurance/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-06T19:27:57-05:00"
---

## 概要

GitLab はサードパーティと契約し、年次のネットワークおよびアプリケーションペネトレーションテストを実施するとともに、継続的な公開セキュリティスキャン（BitSight）を行っています。これらの証跡は、[Customer Assurance Package](https://trust.gitlab.com/) を通じて共有されます。

## サードパーティのセキュリティレーティング

BitSight は、複数のドメインから収集された公開情報を活用して 250〜900 の数値スコア（信用格付けに似ていますが、セキュリティに焦点を当てたもの）を提供する、サードパーティのセキュリティレーティングプラットフォームです。GitLab は BitSight を利用して 3 種類のレポートを公開しています。

- GitLab Production — このレポートは、GitLab の[本番アーキテクチャ](/handbook/engineering/infrastructure-platforms/production/architecture/)をサポートする URL または IP のセキュリティ態勢を表します。私たちの目標は 700 以上のレーティングを維持することです。BitSight からのアラートはリアルタイムで監視され、[脆弱性管理](/handbook/security/product-security/security-platforms-architecture/application-security/vulnerability-management/)プログラムの一環として対処されます。
- GitLab Sub-Production — このレポートは、上記の本番環境を **サポートしない** URL または IP のセキュリティ態勢を表します。一般的に、テスト環境や、品質保証活動のために意図的に最新化されていない環境が含まれます。このスコアは GitLab によって監視されておらず、GitLab のセキュリティ態勢を表すものではありません。
- GitLab User-Managed — 多くの顧客が gitlab.io の一部として静的ページを利用しています。これらのページは顧客のみによって管理されています。しかし、時々これらのページが誤って GitLab に関連付けられることがあります。そのため、GitLab.io ドメイン上のページはこのレポートに移動しました。このスコアは GitLab によって監視されておらず、GitLab のセキュリティ態勢を表すものではありません。

四半期ごとの BitSight レポートおよびその他のセキュリティアシュアランスの成果物のコピーは、[Customer Assurance Package](https://trust.gitlab.com/) で[ダウンロード可能](https://about.gitlab.com/resources/customer-assurance-package/gitlab-cap-current.zip)です。

## サードパーティの脆弱性およびペネトレーションテスト

### SaaS

**顧客は、GitLab の SaaS アプリケーションに対して脆弱性スキャンまたはペネトレーションテストを実施する権限を持ちません。** ペネトレーションテストは、採用されている防御策がセキュリティ侵害を防ぐのに十分強固であるかどうかを判定するものです。顧客や見込み客が当社の SaaS 環境に対して独自のペネトレーションテストを試みた場合、それは GitLab にとって実際のインシデントとして見える可能性があります。詳細については、[GitLab の利用規約](https://about.gitlab.com/terms/)をご確認ください。

GitLab は、少なくとも年 1 回、当社の[本番アーキテクチャ](/handbook/engineering/infrastructure-platforms/production/architecture/)に対する外部の独立した[ペネトレーションテスト](/handbook/security/penetration-testing-policy/)を実施しています。これに代わるものとして、年次ペネトレーションテストのレポートを [Customer Assurance Package](https://trust.gitlab.com/) で提供しています。

GitLab は、[本番アーキテクチャ](/handbook/engineering/infrastructure-platforms/production/architecture/)全体にわたる脆弱性を特定するように設定された包括的な脆弱性管理プログラムを維持しています。詳細は、[脆弱性管理](/handbook/security/product-security/security-platforms-architecture/application-security/vulnerability-management/)ハンドブックページでご確認いただけます。

### セルフマネージド

セルフマネージド顧客が実施するペネトレーションテストおよび脆弱性スキャンは、カスタム構成に基づく誤検知を防ぐため、標準の omnibus デプロイを使用する必要があります。自動化された脆弱性スキャナは、優先度の低い問題や誤検知を生成することがよくあります。スキャナの結果を提出する前に、報告された問題が実際に有効で悪用可能であるか確認する時間を取ってください。特定および検証された脆弱性は、[HackerOne 報告プログラム](https://hackerone.com/gitlab) を通じて、または[セキュリティチーム宛ての Issue を作成する](/handbook/security/engaging-with-security/#creating-new-security-issues)ことで提出できます。

<div class="d-grid gap-2 my-4">
<a href="https://handbook.gitlab.com/handbook/security/security-assurance/field-security/" class="btn bg-primary text-white btn-lg">Field Security ホームページに戻る</a>
</div>
