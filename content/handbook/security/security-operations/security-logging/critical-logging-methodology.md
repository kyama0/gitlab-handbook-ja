---
title: "クリティカルロギングの階層化方法論"
description: "クリティカルロギング階層化方法論の目的は、組織全体で利用されているシステムにおいて、運用を維持するために不可欠とみなされるログの重要度を、GitLab が特定し理解することを支援することです。"
upstream_path: /handbook/security/security-operations/security-logging/critical-logging-methodology/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T17:00:00Z"
translator: claude
stale: false
---

## 目的

クリティカルロギング階層化方法論の目的は、GitLab の SaaS サブスクリプションおよび GitLab の[ミッション](/handbook/company/mission/#mission)・目標達成に対する影響度に基づいてログを分類することを支援することです。最終的には、これによって GitLab は、組織全体の事業運営に影響を及ぼす情報セキュリティおよびプライバシーリスクなどのリスクを考慮した、包括的なリスクマネジメントへの先回り的なアプローチを取るための仕組みを得られます。さらに、ロギングを特定の階層に分類することで、GitLab はリスク低減活動を適切に優先順位付けし、ログの関連階層に基づいて内部統制を調整できる立場に立つことができます。

## スコープ

クリティカルロギング階層化方法論は、[テックスタック](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)で追跡されている GitLab 全体で利用されるすべてのシステムに適用されます。これにより、すべてのシステムが一貫した標準化された方法論を用いて完全かつ正確に評価されることを保証します。

## 役割と責任

|役割|責任|
|----------|------------------------------|
|[セキュリティロギングチーム](/handbook/security/security-operations/security-logging/)|クリティカルロギング階層の年次レビューを実行し、必要に応じて調整を行う。クリティカルロギング階層化方法論を所有し、必要に応じてクリティカルロギング階層の特定および割り当てを支援する。|
|[SIRT](/handbook/security/security-operations/sirt/)|新しいシステムがテックスタックに追加された際に、セキュリティロギングチームと協力してクリティカルロギング階層の定義を支援する。|
|[AppSec](/handbook/security/product-security/security-platforms-architecture/application-security/)|新しいシステムがテックスタックに追加された際に、セキュリティロギングチームと協力してクリティカルロギング階層の定義を支援する。|
|[InfraSec](/handbook/security/product-security/infrastructure-security/)|新しいシステムがテックスタックに追加された際に、セキュリティロギングチームと協力してクリティカルロギング階層の定義を支援する。|
|テクニカルシステムオーナー|正確な階層が割り当てられるように、自身が所有するシステムについて完全かつ正確なデータを提供する。|

## クリティカルロギング階層化手順

GitLab における「クリティカルロギング」が何を意味するかを定義することは、私たちの環境の性質と、ビジネス活動を遂行するために使用される多くのシステム間に存在する統合の量を考えると、複雑になり得ます。GitLab の[ビジネスインパクト分析（BIA）](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/)プロセスの一部として、システムごとの重要システム階層の割り当てを支援する入力情報を取得します。システム重要度階層を判断するために使用するこれらの入力情報には、以下が含まれますが、これらに限定されません。

1. システムが侵害された場合、GitLab.com SaaS サブスクリプションに即時の影響があるかどうか
1. システムが侵害された場合、GitLab に対する影響をどのように説明できるか:
   - 重要なビジネス機能（すなわち、間接的に収益創出に影響を与え、効果的な事業運営のために常時の可用性を必要とする）
   - オペレーショナルなビジネス機能（すなわち、運用の効率性／コストに影響する）
   - 管理機能（すなわち、GitLab チームメンバーに個人レベルでのみ影響する（例: 生活の質、個人の生産性））

情報が取得された後、セキュリティリスクおよび／または IT コンプライアンスチームによってレビューされ、システムにどの階層を割り当てるべきかが判断されます。

その後、セキュリティロギングチームは SIRT／AppSec／InfraSec の支援を受けて、上記の調査結果のアウトプットを受け取り、以下の[クリティカルロギング階層の判定](#determining-critical-logging-tiers)で説明されているガイドラインを各ログソースに適用します。

### クリティカルロギング階層の判定 {#determining-critical-logging-tiers}

システムには、以下のマトリックスに基づいてクリティカルロギング階層が割り当てられます。

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
    <td class="tg-clye">クリティカルロギング階層 (CST) <span style="color:#DB3B21;">*</span></td>
    <td class="tg-dxvi">CST の説明</td>
    <td class="tg-dxvi">例</td>
    <td class="tg-fecx">以前の CST 階層マッピング</td>
  </tr>
  <tr>
    <td class="tg-e02t">階層 1 ミッションクリティカル<span style="color:#DB3B21;">**</span></td>
    <td class="tg-zqun">GitLab のセキュリティに即時かつ重大な影響を及ぼし、かつ／または[赤](/handbook/security/policies_and_standards/data-classification-standard/#red)の[顧客データ](/handbook/security/policies_and_standards/data-classification-standard/#data-classification-definitions)を含むシステム。</td>
    <td class="tg-zqun">Cloudflare、GitLab.com、Teleport</td>
    <td class="tg-zqun">階層 1 プロダクト</td>
  </tr>
  <tr>
    <td class="tg-e02t">階層 2 ビジネスクリティカル<span style="color:#DB3B21;">***</span></td>
    <td class="tg-zqun">重要なビジネス機能および顧客サービスに即時かつ重大な影響を及ぼし、かつ／または[オレンジデータ](/handbook/security/policies_and_standards/data-classification-standard/#orange)を含むシステム。</td>
    <td class="tg-zqun">customers.gitlab.com/subscription、Netsuite、Salesforce</td>
    <td class="tg-zqun">階層 1 ビジネスおよび階層 2 コア</td>
  </tr>
  <tr>
    <td class="tg-e02t">階層 3 ビジネスオペレーショナル</td>
    <td class="tg-zqun">混乱がオペレーショナルなビジネス機能に影響し、部門全体での運用の効率性／コストに悪影響を及ぼし、かつ／またはシステムが[黄データ](/handbook/security/policies_and_standards/data-classification-standard/#yellow)を含む</td>
    <td class="tg-zqun">Clearwater、PagerDuty、ZenGRC</td>
    <td class="tg-zqun">階層 2 サポートと階層 3 非クリティカルの組み合わせ、BIA への回答による影響あり</td>
  </tr>
  <tr>
    <td class="tg-e02t">階層 4 管理</td>
    <td class="tg-zqun">GitLab チームメンバーに個人レベルでのみ影響する（例: 生活の質、個人の生産性）</td>
    <td class="tg-zqun">Donut、JetBrains、LinkedIn Learning、Modern Health</td>
    <td class="tg-zqun">階層 2 サポートと階層 3 非クリティカルの組み合わせ、BIA への回答による影響あり</td>
  </tr>
</tbody>
</table>
<br/>

{{% panel header="**注記**" header-bg="primary" %}}
<span style="color:#DB3B21;"><b>\*</b></span> 階層化方法論の拡張として、[データ分類標準](/handbook/security/policies_and_standards/data-classification-standard/)は各データ分類レベルに対して **特定の** [セキュリティとプライバシー](/handbook/security/policies_and_standards/data-classification-standard/)制御要件を規定しています。これらの要件は、システムの階層に関係なく、システムのデータ分類に基づいて遵守する必要があります。

<span style="color:#DB3B21;"><b>\**</b></span> デフォルトでは、[データ分類標準](/handbook/security/policies_and_standards/data-classification-standard/#red)に基づき **赤データ** を含むシステム、または[第三者サブプロセッサ](https://about.gitlab.com/privacy/subprocessors/#third-party-sub-processors)であるシステムは、**階層 1 ミッションクリティカル** システムとなります。これは、このデータが顧客所有でアップロードされたものであり、その性質上ミッションクリティカルとみなされているためです。

<span style="color:#DB3B21;"><b>*\*\*</b></span> デフォルトでは、[SOX](/handbook/security/security-assurance/security-compliance/sec-controls/) のスコープ内のシステムは、最低でも **階層 2 ビジネスクリティカル** システムとなります。
{{% /panel %}}

### GitLab はなぜこの方法論を必要とするのか？

GitLab 全体で使用されるシステムを階層化することで、チームメンバーは割り当てられた階層に基づいて、特定のシステムに関連する作業の優先順位付けに関する判断を下せるようになります。例えば、多種多様なシステムにわたって複数のリスクが特定され、修復が必要な場合、影響を受けるチームメンバーは、割り当てられたクリティカルロギング階層を活用して、修復活動の優先順位付けに関する判断を下すことができます。この方法論はまた、組織全体で最も重要なシステムを容易に特定するための仕組みも GitLab に提供し、それらのシステムを先回り的に保護、ロギング、セキュア化できるようにします。

### クリティカルロギング階層の維持

クリティカルロギング評価は、[StORM 年次リスク評価プロセス](/handbook/security/security-assurance/security-risk/storm-program/)に合わせて毎年実施され、GitLab の環境内の既存システムを検証し、それに応じて割り当てられた階層を調整します。システムに割り当てられた階層は、[tech_stack.yml ファイル](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)で確認できます。システムのロギングインベントリは、[SecLogging Inventory リポジトリ](https://gitlab.com/gitlab-com/gl-security/engineering-and-research/security-logging/sec-logging-inventory)で確認できます。

#### 例外

この方法論の対象から免除されるシステムには、グリーンのデータ分類を持つシステムが含まれます。YELLOW、ORANGE、または RED データを保存または処理するその他のすべてのシステムには、クリティカルロギング階層を割り当てる必要があります。データ分類は、システムが保存または処理するデータが本当にグリーンデータであることを裏付けるために、[データ分類標準](/handbook/security/policies_and_standards/data-classification-standard/#green)に従って検証されます。

#### 参考資料

- [ビジネスインパクト分析](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/)
- [データ分類標準](/handbook/security/policies_and_standards/data-classification-standard/)
