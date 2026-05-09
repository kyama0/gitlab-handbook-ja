---
title: "クリティカルシステム階層化方法論"
summary: "クリティカルシステム階層化方法論の目的は、GitLab がお客様にサービスを提供するために重要であるとみなされる、組織全体で利用される特定のシステムを特定および理解する支援をすることです。"
controlled_document: true
upstream_path: /handbook/security/security-assurance/security-risk/storm-program/critical-systems/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T05:30:11Z"
translator: claude
stale: false
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## 目的

クリティカルシステム階層化方法論の目的は、GitLab の SaaS サブスクリプション（GitLab.com または GitLab Dedicated の提供）への影響に基づいてシステムを分類することにより、GitLab を支援することです。システムを特定の階層に分類することで、GitLab はリスク軽減活動を適切に優先順位付けし、内部統制を調整できます。

## 範囲

クリティカルシステム階層化方法論は、[Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) で追跡される GitLab 全体で使用されるすべてのシステムに適用されます。

## 役割と責任

|役割|責任|
|----------|------------------------------|
|[Security Risk Team](/handbook/security/security-assurance/security-risk/)|クリティカルシステム階層化方法論を所有し、[Business Impact Analysis](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/) を通じて新しいシステムの Critical System Tier を指定します。|
|[IT Compliance](/handbook/business-technology/enterprise-applications/it-compliance/)|新しいシステムが Tech Stack に追加されたときに Security Risk チームと連携して Critical System Tier の定義をサポートします。|
|システムの Business/Technical Owner|正確な階層が指定されるように、所有するシステムに関する完全かつ正確なデータを提供します。|

## クリティカルシステム階層化手順

GitLab において重要なシステムが何であるかを定義することは、当社の環境の性質と、ビジネス活動を遂行するために使用される多くのシステム全体に存在する統合の数を考えると、複雑になり得ます。GitLab の [ビジネスインパクト分析（BIA）](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/) 手順は、Security Risk チームによる新しいシステムの Critical System Tier 指定を可能にします。Critical System Tier の指定に使用される BIA の質問は次のとおりです。

1. システムの中断（システムが利用不可）の影響は何ですか?
2. システムの中断の潜在的な影響を説明してください。影響を受ける GitLab チーム（複数可）を指定してください。

Security Risk チームは、Business Owner からの回答とシステムが提供するサービスに関する自身の理解に基づいて、新しいシステムに Critical System Tier を判断的に指定します。各階層を区別するために使用されるガイドラインは、次のセクションで説明されています。

### Critical System Tier の指定 {#designating-critical-system-tiers}

システムは、次のマトリックスに基づいて Critical System Tier が指定されます。

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;margin:0px auto;}
.tg td{border-color:black;border-style:solid;border-width:1px;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-zqun{background-color:#ffffff;color:#000000;text-align:center;vertical-align:middle}
.tg .tg-knp3{background-color:#6e49cb;border-color:#000000;color:#ffffff !important;;
  text-align:center;vertical-align:middle}
.tg .tg-clye{background-color:#380d75;color:#ffffff;font-weight:bold;text-align:center;vertical-align:middle}
.tg .tg-fecx{background-color:#cccccc;color:#000000;font-weight:bold;text-align:center;vertical-align:middle}
.tg .tg-cc97{background-color:#380d75;color:#ffffff;text-align:center;vertical-align:middle}
.tg .tg-dxvi{background-color:#6e49cb;color:#ffffff;font-weight:bold;text-align:center;vertical-align:middle}
.tg .tg-e02t{background-color:#ffffff;border-color:#000000;color:#000000 !important;;
  font-weight:bold;text-align:center;vertical-align:middle}
.tg .tg-9hzb{background-color:#FFF;font-weight:bold;text-align:center;vertical-align:top}
</style>
<table class="tg">
<tbody>
  <tr>
    <td class="tg-clye">Critical System Tier (CST) <span style="color:#DB3B21;">*</span></td>
    <td class="tg-dxvi">CST の説明</td>
    <td class="tg-dxvi">例</td>
  </tr>
  <tr>
    <td class="tg-e02t">Tier 1 ミッションクリティカル<span style="color:#DB3B21;">**</span></td>
    <td class="tg-zqun">中断または侵害が、GitLab SaaS サブスクリプションおよびお客様データの可用性/セキュリティに即時かつ重大な影響を与えます（定義については <a href="/handbook/security/policies_and_standards/data-classification-standard/#data-classification-definitions">Data Classification Standard</a> を参照）。</td>
    <td class="tg-zqun">GitLab.com、Google Cloud Platform、Devo</td>
  </tr>
  <tr>
    <td class="tg-e02t">Tier 2 ビジネスクリティカル<span style="color:#DB3B21;">***</span></td>
    <td class="tg-zqun">中断が主要なビジネス機能や能力の遂行に影響を与えます。</td>
    <td class="tg-zqun">Okta、Salesforce、Workday</td>
  </tr>
  <tr>
    <td class="tg-e02t">Tier 3 ビジネスオペレーショナル</td>
    <td class="tg-zqun">中断が標準的なビジネスプロセスを完了する上での効率や費用に影響します。</td>
    <td class="tg-zqun">DocuSign、Figma、Tableau</td>
  </tr>
  <tr>
    <td class="tg-e02t">Tier 4 アドミニストレーティブ</td>
    <td class="tg-zqun">中断が個々の GitLab チームメンバーの生産性/ウェルビーイングに影響します。</td>
    <td class="tg-zqun">Clockwise、Donut</td>
  </tr>
</tbody>
</table>
<br/>

{{% panel header="**注記**" header-bg="primary" %}}
{{% note %}}
<span style="color:#DB3B21;"><b>\*</b></span> 階層化方法論の延長として、[Data Classification Standard](/handbook/security/policies_and_standards/data-classification-standard/) は、各データ分類レベルに対する **特定の** [Security and Privacy](/handbook/security/policies_and_standards/data-classification-standard/) コントロール要件を規定しています。これらの要件は、システムの階層に関係なく、システムのデータ分類に基づいて遵守されるべきです。
{{% /note %}}
{{% note %}}
<span style="color:#DB3B21;"><b>\**</b></span> デフォルトでは、[Data Classification Standard](/handbook/security/policies_and_standards/data-classification-standard/#red) に従い **RED Data** を含むシステム、または [Third Party Sub-Processor](https://about.gitlab.com/privacy/subprocessors/#third-party-sub-processors) であるシステムは、**Tier 1 ミッションクリティカル** システムになります。これは、このデータがお客様所有およびアップロードされたものであり、その性質上ミッションクリティカルとみなされるためです。
{{% /note %}}
{{% note %}}
<span style="color:#DB3B21;"><b>*\*\*</b></span> デフォルトでは、[SOX](https://internal.gitlab.com/handbook/internal-audit/sarbanes-oxley/) の対象範囲のシステムは、最低でも **Tier 2 ビジネスクリティカル** システムになります。
{{% /note %}}
{{% /panel %}}

{{% panel header="**SaaS サブスクリプションへの影響と主要なビジネス機能や能力への影響をなぜ区別するのですか?**" header-bg="warning" %}}
Critical System Tier は、GitLab のお客様にサービスを提供するために重要なシステムのリスク軽減活動の優先順位付けを支援します。GitLab のコアサービス提供は SaaS です。したがって、中断発生時に GitLab SaaS サブスクリプションおよびお客様データの可用性/セキュリティに即時かつ重大な影響を与えるシステムが優先事項となります。これらが *Tier 1 ミッションクリティカル* システムです。
{{% /panel %}}

### GitLab はなぜこの方法論を必要とするのですか?

GitLab 全体で使用されるシステムを階層化することにより、チームメンバーは特定のシステムに関連する作業の優先順位付けに関する意思決定を行うことができます。たとえば、多くのシステムにわたって複数のリスクが特定され、是正が必要な場合、チームメンバーは指定された Critical System Tier を活用して是正活動の優先順位付けに関する意思決定を行うことができます。この方法論はまた、GitLab に組織全体で最も重要なシステムを容易に特定するメカニズムを提供し、これによりチームはそれらのシステムを積極的に保護および確保することができます。

### Critical System Tier の維持

既存のシステムの Critical System Tier は定期的に検証されます。システムの指定された階層は、GitLab で使用されるすべてのシステムの Single Source of Truth である [tech_stack.yml file](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) で確認できます。

## 例外

この手順に対する例外は、[Information Security Policy Exception Management Process](/handbook/security/controlled-document-procedure/#exceptions) に従って追跡されます。

## 参考文献

- [Business Impact Analysis](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/)
- [Data Classification Standard](/handbook/security/policies_and_standards/data-classification-standard/)
