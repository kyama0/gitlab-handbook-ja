---
title: GitLab のセキュリティ
# See https://www.docsy.dev/docs/adding-content/content/#docs-section-landing-pages
no_list: true
upstream_path: /handbook/security/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
---

## <i class="fas fa-rocket" id="biz-tech-icons"></i> セキュリティのビジョンとミッション

私たちのビジョンは、世界を透明性をもって安全な成果へと導くことです。

私たちのミッションは、安全でセキュアで信頼できる DevSecOps プラットフォーム上で、誰もがイノベーションを起こし成功できるようにすることです。これは 5 つのセキュリティ運営原則によって達成されます。

1. ビジネスの成功を加速する。以下に注力します。
   - リスクを最小化する「退屈で」反復的な解決策を優先する
   - Yes と言える方法を見つける
   - 解決策を提案する前に目標を理解する
   - GitLab を最初に使う
1. 効率的な運営。以下に注力します。
   - ハンドブックのルールよりも技術的コントロールを優先
   - まず自動化を活用する (人間より機械を)
   - 投資対効果 (ROI) の低い意思決定よりも責任ある意思決定 (支出、ツール、人員配置など)
   - 単発の解決策よりも再利用可能・反復可能なものを
1. 透明性。以下に注力します。
   - MNPI (重要な非公開情報) の責任ある保護
   - GitLab の[ドッグフーディング](/handbook/values/#dogfooding)を公の場で広める
   - メトリクスをリードする
   - セキュリティと有用性のバランスを取る
1. リスク低減。以下に注力します。
   - デフォルトで安全
   - 検知コントロールよりも予防コントロール
   - 症状の対処よりも根本原因の解決
   - カバレッジ、発見可能性、観測可能性を通じた可視性
1. 協調的な文化。以下に注力します。
   - 共通の解決策に向けて協力する
   - 共有された問題を共有された解決策で解く
   - 誰もが理解できるよう言葉を簡潔にする
   - セキュリティ専門用語の使用を避ける
   - 他者の成功を助ける機会を求める
1. AI のイネーブルメントと活用によるスケール:
   - エンタープライズとプラットフォーム向けに、安全な AI 採用を高速で実現する
   - AI を展開して脅威をより速く検知・予防し、ワークフローやプロセスを自動化する
   - AI 生産性ツールを取り入れ、毎日より賢く働く

### 部門構造

セキュリティ部門は、必須のセキュリティ運用サービスを提供し、開発およびリリースプロセスに直接関与し、リスクを最小化しながらビジネスをより良く機能させるためのコンサルティングおよびアドバイザリーサービスを提供します。

これを反映して、セキュリティ部門は 4 つの主要な柱を中心に構造化されており、それがグループの構造と活動を駆動しています。それらは:

<table id="Sub-Departments">
  <tr>
    <th class="text-center">
        <i class="fas fa-bullseye i-bt"></i>
        <h5><a href="product-security/">Product Security</a></h5>
    </th>
    <th class="text-center">
        <i class="fas fa-shield-alt i-bt"></i>
        <h5><a href="security-operations/">Security Operations</a></h5>
    </th>
    <th class="text-center">
        <i class="fas fa-shield-alt i-bt"></i>
        <h5><a href="/handbook/security/corporate/">Corporate Security</a></h5>
    </th>
    <th class="text-center">
        <i class="fas fa-hands-helping i-bt"></i>
        <h5><a href="security-assurance/">Security Assurance</a></h5>
    </th>
  </tr>
  <tr>
      <td>
        <ul>
            <li><a href="product-security/security-platforms-architecture/application-security/">Application Security</a></li>
            <li><a href="product-security/infrastructure-security/">Infrastructure Security</a></li>
            <li><a href="product-security/security-platforms-architecture/">Security Platforms and Architecture</a></li>
            <li><a href="product-security/vulnerability-management/">Vulnerability Management</a></li>
            <li><a href="product-security/data-security/">Data Security</a></li>
        </ul>
      </td>
      <td>
        <ul>
            <li><a href="security-operations/sirt/">Security Incident Response Team (SIRT)</a></li>
            <li><a href="security-operations/trustandsafety/">Trust and Safety</a></li>
            <li><a href="security-operations/red-team/">Red Team</a></li>
            <li><a href="security-operations/threat-intelligence/">Threat Intelligence</a></li>
            <li><a href="security-operations/signals-engineering/">Signals Engineering</a></li>
            <li><a href="security-operations/security-logging/">Security Logging</a></li>
        </ul>
      </td>
      <td>
        <ul>
            <li><a href="/handbook/security/corporate/">Corporate Security</a></li>
            <li><a href="/handbook/security/corporate/support">Helpdesk Support</a></li>
            <li><a href="/handbook/security/corporate/systems">Tech Stack Systems</a></li>
            <li><a href="/handbook/security/corporate/team/#functional-org-chart">Engineering Teams</a></li>
        </ul>
      </td>
      <td>
        <ul>
            <li><a href="security-assurance/field-security/">Field Security</a></li>
            <li><a href="security-assurance/security-compliance/">Security Compliance</a></li>
            <li><a href="security-assurance/governance/">Security Governance</a></li>
            <li><a href="security-assurance/security-risk/">Security Risk</a></li>
        </ul>
      </td>
  </tr>
</table>

#### 製品をセキュアにする — Product Security 部門

[Product Security 部門](/handbook/security/product-security/) は主に製品のセキュリティ確保に注力します。これは、セキュリティリリース、Infrastructure Security、HackerOne バグバウンティプログラムにおいて、アプリケーション開発・リリースサイクルに関与しようとするセキュリティ部門の現在の取り組みを反映しています。

「Product」という用語は広く解釈され、GitLab アプリケーション本体と、マルチテナント SaaS 用の GitLab アプリケーションをサポートするために社内で開発されるすべての他の連携やコードを含みます。私たちの責任は、顧客に公開されるか顧客データをホストする GitLab のあらゆる側面が最高のセキュリティ水準で保たれることを確保し、GitLab が提供するあらゆるものに世界クラスのセキュリティを確保するために積極的かつ迅速に対応することです。

#### 会社を守る — Security Operations 部門

[Security Operations 部門](/handbook/security/security-operations/) のチームは、GitLab というビジネスと GitLab のプラットフォームの保護に主に注力します。これには、会社の財産の保護、およびビジネスとプラットフォームを標的としたリスクやイベントの予防、検知、対応が含まれます。この部門には Security Incident Response Team (SIRT) と Trust and Safety チームが含まれます。

これらの機能は、GitLab のプラットフォームのセキュリティ態勢を強化・維持し、新規および既存の顧客を保護するエンタープライズレベルのセキュリティを確保する責任を負います。

#### 顧客を安心させる — Security Assurance 部門

[Security Assurance 部門](/handbook/security/security-assurance/) は、上記のチームで構成されます。彼らは責任の中で Customer Assurance プロジェクトを対象とします。これは、組織内で利用するアプリケーションとして、またエンタープライズレベルの SaaS として GitLab のセキュリティと安全性を顧客に保証するためのリソースを提供する必要性を反映しています。これには、顧客が GitLab をセキュアな会社、セキュアな製品、セキュアな SaaS として信頼するための適切なサポート、サービス、リソースを提供することも含まれます。

#### 組織を保護する — Corporate Security

GitLab は会社であり、製品でもあります。[Corporate Security](/handbook/security/corporate/) 部門は、社内でビジネスを行うために会社が使用する情報技術 (IT) 関連システムの実装と保護に注力し、チームメンバーや第三者サービスプロバイダー (別名、契約者) が生産的かつ効率的に職務を遂行するために必要なハードウェア、ソフトウェア、ツールを提供します。私たちが社内のチームメンバー向けに実装する設定は、顧客とそのデータを保護することを目的としています。

私たちはチームメンバー向けに 24x5 の[テクニカルサポートヘルプデスク](/handbook/security/corporate/support)を提供し、多くの全社的な[テックスタックアプリケーション](/handbook/security/corporate/systems)を構成・維持するエンジニアを擁しています。

私たちは[デバイストラスト、アイデンティティ管理、インフラストラクチャガバナンス](/handbook/security/corporate/team/#functional-org-chart)に大きく投資し、製品の管理者に最高水準のセキュリティ保証を提供し、顧客データを取り扱う際にすべての適切なコントロールが整備されていることを保証しています。

### <i id="biz-tech-icons" class="fas fa-users"></i> チームへの連絡

#### 脆弱性とセキュリティ問題の報告

GitLab の [HackerOne バグバウンティプログラム](/handbook/security/product-security/psirt/runbooks/hackerone-process/)、およびセキュリティ Issue の作成・スケジュールに関する情報は、[engaging with security](/handbook/security/engaging-with-security/) ページと [Responsible Disclosure Policy](https://about.gitlab.com/security/disclosure/) を参照してください。

#### インシデントの報告

緊急のセキュリティインシデントを特定した場合や、インシデントが発生した可能性を疑う場合は、[Engaging the Security Engineer On-Call](/handbook/security/security-operations/sirt/engaging-security-on-call/) を参照してください。例には次のようなものが含まれますが、これらに限定されません。

- デバイスの紛失または盗難
- 認証情報の漏洩
- エンドポイントの侵害または感染
- 機密性の高い GitLab データの漏洩

GitLab は、Slack にアクセスできず即時のセキュリティ対応が必要な状況でチームメンバーが使用できる `panic@gitlab.com` メールアドレスを提供しています。

このメールアドレスは GitLab チームメンバーのみがアクセスでき、Workday に登録されている gitlab.com または個人のメールアドレスから到達できます。このアドレスを使用することで、デバイス紛失による被害を限定する優れた手段が得られます。

さらに、GitLab チームメンバーが個人的な緊急事態に遭遇した場合、People グループも[緊急連絡用メールアドレス](/handbook/people-group/#in-case-of-emergency)を提供しています。

#### ランサムウェア

ランサムウェア攻撃の疑いがある場合のコミュニケーションと対応プロセスの概要については、[Responding to Ransomware](/handbook/security/responding-to-ransomware/) ページを参照してください。

---

#### セキュリティリリースの通知を受け取る

- セキュリティリリースのブログ通知をメールで受け取るには、[contact us](https://about.gitlab.com/company/contact/) ページを訪問してください。
- RSS でリリース通知を受け取るには、[セキュリティリリース RSS フィード](https://about.gitlab.com/security-releases.xml) または[全リリース用 RSS フィード](https://about.gitlab.com/all-releases.xml) を購読してください。
- セキュリティリリースに関する追加情報については、Delivery チームの[セキュリティリリース](https://gitlab.com/gitlab-com/gl-infra/readiness/-/tree/master/library/security-releases-development) ページを参照してください。

#### よく利用されるその他の GitLab.com プロジェクト

セキュリティは社内の多くのチームにまたがるため、すべての GitLab プロジェクトにわたって `~security` ラベル付きの Issue が見つかります。特に:

- [gitlab-foss](https://gitlab.com/gitlab-org/gitlab-foss/issues/)
- [gitlab](https://gitlab.com/gitlab-org/gitlab/issues/)
- [infrastructure](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues/)
- [production](https://gitlab.com/gitlab-com/gl-infra/production/issues/)

Issue を作成する際は、ラベルと confidential フラグの使い方について [Creating New Security Issues]({{% ref "engaging-with-security#creating-new-security-issues" %}}) のプロセスに従ってください。
