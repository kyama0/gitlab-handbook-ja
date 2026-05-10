---
title: 'コーポレートセキュリティ (CorpSec) サポート'
upstream_path: /handbook/security/corporate/support/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

GitLab はオーガニックに成長してきた中で、いくつかの部門・職能グループは、自分たち固有のテックスタックアプリケーションの日常的な管理を担う独自のシステム管理者（「Tech Stack App/System Owners」）を持っています。これは、組織全体のコンプライアンス、インフラ、セキュリティのベストプラクティスという枠組みの中で運用されています。GitLab における各[テックスタックアプリケーション](/handbook/business-technology/tech-stack-applications/)には、その実装と、（部門または職能グループ内で）アプリケーションを利用するチームメンバーへの日常的な運用サポートを担う DRI としてのシステムオーナーが存在します。これは、従来型の IT 部門がボトルネックになるのを防ぎ、GitLab の[適切なグループにとっての効率性](/handbook/values/#efficiency-for-the-right-group)というサブバリューの一環として、各部門がセルフサービスを行えるようにするという副次的なメリットもあります。

コーポレートセキュリティチームは、チームメンバーおよび一時的なサービスプロバイダー（コントラクター、ベンダーなど）向けの技術サポートヘルプデスクサービスと、私たちが管理する全社的な[システム](/handbook/security/corporate/systems)の構成管理エンジニアリングを提供しています。

## コーポレートセキュリティサポート

### Tier 1. セルフサービス

[セルフサービスとセルフラーニング](/handbook/values/#self-service-and-self-learning)という効率性バリューの一環として、まずは[セキュリティのセルフサービスガイドおよびシステムドキュメント](/handbook/security/corporate/systems)を確認し、ご質問への回答を見つけられるかどうかを試してみることをお勧めします。

探している情報が見つからない場合は、`#it_help` でお尋ねください。

#### 将来の状態

- (社内) Why: [方向性と戦略](https://internal.gitlab.com/handbook/security/corporate/direction)
- (社内) What: [イニシアチブとプロジェクト](https://internal.gitlab.com/handbook/security/corporate/projects)
- (社内) When: [OKR とロードマップ](https://internal.gitlab.com/handbook/security/corporate/roadmap)
- (社内) How: [CorpSec Issue トラッカー](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues)
- (公開) Who: [チームの機能](/handbook/security/corporate/#team-functions)と[チームディレクトリ](/handbook/security/corporate/#team-directory)

#### 現在の状態

- [チームディレクトリ](/handbook/security/corporate/#team-directory)
- **👀 新しいチームメンバー:** [IT オンボーディング 101 ガイド](/handbook/security/corporate/end-user-services/onboarding101/)
- **👀 既存のチームメンバー:** [コーポレートセキュリティのシステムドキュメント、アクセスリクエスト、セルフサービスガイド](/handbook/security/corporate/systems)
- **👷 管理者向けドキュメント:** (社内) [Systems Handbook（構成と Runbook）](https://handbook.gitlab.systems)
- 👷 [エンジニアリング](/handbook/security/corporate/engineering)
  - [デバイストラストエンジニアリング](/handbook/security/corporate/engineering/device-trust)
  - [アイデンティティエンジニアリング](/handbook/security/corporate/engineering/identity)
  - [インフラストラクチャエンジニアリング](/handbook/security/corporate/engineering/infrastructure)
  - [プラットフォームエンジニアリング（セルフサービスツールのソフトウェア開発）](/handbook/security/corporate/engineering/platform)
  - [SaaS エンジニアリング（コーポレートテックスタックアプリケーションとプラットフォーム）](/handbook/security/corporate/saas/)
- 💻 [サービス](/handbook/security/corporate/services)
  - [アクセスリクエスト](/handbook/security/corporate/services/access-requests)
    - **アクセスが必要ですか？** 各システムごとの手順については、[システム](/handbook/security/corporate/sysetms)ページを参照してください。
    - [外部コラボレーター（監査人、顧客、パートナー、ベンダー）](/handbook/security/corporate/services/external-collaborators)
    - [インフラストラクチャプロビジョニング（AWS、Azure、GCP、Sandbox Cloud）](/handbook/security/corporate/services/infrastructure)
    - [Okta アプリケーション](/handbook/security/corporate/systems/okta/ar)
    - [サービスアカウント](/handbook/security/corporate/services/service-accounts)
    - [一時的なサービスプロバイダー（コントラクターユーザー）](/handbook/security/corporate/services/temporary-users)
  - [変更管理](/handbook/security/corporate/services/change-management)
  - [メール](/handbook/security/corporate/services/email)
  - デバイス管理
    - [携帯電話とモバイルデバイス](/handbook/security/corporate/services/phones)
    - [ノートパソコン](/handbook/security/corporate/end-user-services/laptop-management)
      - **新しいノートパソコン**
        - 👀 [オンボーディング時のハードウェア発注ガイド](/handbook/security/corporate/end-user-services/laptop-management/laptop-ordering/)
        - 👀 [オンボーディング時のノートパソコンセットアップガイド](/handbook/security/corporate/end-user-services/onboarding101/)
        - 👀 [Apple macOS セットアップガイド](/handbook/security/corporate/systems/macos/setup/)
        - [Linux セットアップガイド](/handbook/security/corporate/systems/linux)
      - **ノートパソコンの交換と修理**
        - [リフレッシュ／交換ガイド](/handbook/security/corporate/end-user-services/laptop-management/laptop-ordering/#laptop-refreshes)
        - [修理ガイド](/handbook/security/corporate/end-user-services/laptop-management/)
      - **古いノートパソコン**
        - [ワイプ（ファクトリーリセット）ガイド](/handbook/security/corporate/end-user-services/laptop-management/laptop-wipe/)
        - [買い取りガイド](/handbook/security/corporate/end-user-services/laptop-management/laptop-offboarding-returns/#laptop-buybacks)
        - [寄付ガイド](/handbook/security/corporate/end-user-services/laptop-management/laptop-offboarding-returns/#laptop-donations)
        - [リサイクル／返却ガイド](/handbook/security/corporate/end-user-services/laptop-management/laptop-offboarding-returns/#laptop-returns)
      - **ノートパソコンに関するポリシー**
        - [調達ガイドと配送期間](/handbook/security/corporate/end-user-services/laptop-management/laptop-ordering)
        - [ハードウェアモデルと仕様](/handbook/security/corporate/end-user-services/laptop-management/#laptop-specs)
        - [オペレーティングシステム標準](/handbook/security/corporate/end-user-services/laptop-management)
        - [アプリとソフトウェアの標準](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/)
        - [セキュリティ構成標準](/handbook/security/corporate/end-user-services/laptop-management/laptop-security)
          - [業務用 Apple ID](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/appleid)
          - [バックアップ](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/backups)
          - [ディスク暗号化](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/encryption)
          - [ファイアウォール](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/firewall)
          - [ホスト名とユーザー名（社内）](https://internal.gitlab.com/handbook/security/corporate/tooling/jamf/endpoint_naming_convention/)
          - [iCloud Drive](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/icloud)
          - [離席時のロック](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/unattended)
          - [パスワード管理](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/passwords)
          - [個人利用](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/personal/)
          - [リモート管理（MDM および EDR）](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/management)
          - [ソフトウェアアップデート](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/updates/)
          - [Touch ID（生体認証パスワードと 2FA）](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/touchid/)
          - [Web ブラウザ](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/browsers/)
          - [ワイヤレスネットワークと VPN](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/networks)
- 雇用ライフサイクル
  - [オンボーディング](/handbook/security/corporate/services/onboarding)
  - [ロール変更（キャリアモビリティ）](/handbook/security/corporate/services/role-changes)
  - [オフボーディング](/handbook/security/corporate/services/offboarding)
- [ヘルプデスクサポート](/handbook/security/corporate/services/helpdesk)
  - サポートを受けるには、[Support](/handbook/security/corporate/support) または [Systems](/handbook/security/corporate/systems) のページを参照してください。
  - 探している答えが見つからない場合は、下にスクロールして Tier 2 サポートをご覧ください。

### Tier 2. ヘルプデスクサポート

私たちは、24x5 のカバレッジを[ヘルプデスクサポートアナリスト](/handbook/security/corporate/services/helpdesk)が提供しています。アクセスリクエスト、アカウントロックアウト、認証関連の問題、ノートパソコンのハードウェア、ノートパソコンのソフトウェア構成の問題、慣れていないテクノロジーに関する 1:1 のトレーニング、そして[コーポレートセキュリティシステム](/handbook/security/corporate/systems)に関連する問題のトリアージを支援しています。

- [アイデンティティとアクセス管理](/handbook/security/corporate/services/identity)
  - [アクセスリクエスト](/handbook/security/corporate/services/access-requests)
  - [キャリアモビリティ（Mover）とロール変更時のプロビジョニング](/handbook/security/corporate/services/role-changes)
  - [外部コラボレーター（顧客、パートナー、ベンダー）](/handbook/security/corporate/services/external-collaborators)
  - [オンボーディング（Joiner）プロビジョニング（ベースライン権限）とユーザーサポート](/handbook/security/corporate/services/onboarding)
  - [オフボーディング（Leaver）デプロビジョニング](/handbook/security/corporate/services/offboarding)
  - [サービスアカウント](/handbook/security/corporate/services/service-accounts)
  - [一時的なサービスプロバイダー](/handbook/security/corporate/services/temporary-users/)
- [インフラストラクチャ管理](/handbook/security/corporate/services/infrastructure)
  - [AWS](/handbook/security/corporate/systems/aws)
  - [GCP](/handbook/security/corporate/systems/google/cloud/)
- [ノートパソコンとロジスティクス](/handbook/security/corporate/end-user-services/laptop-management)
- [チームメンバー向けの技術サポート](/handbook/security/corporate/services/helpdesk/)
  - [アカウントパスワードと 2FA のリセット](/handbook/security/corporate/support/reset)

**支援が必要な場合は `#it_help` Slack チャンネルで質問してください。**

私たちのチームメンバーはオンコールシフトをスケジュールに沿って担当しているため、特定の個人に Slack のダイレクトメッセージを送るのではなく、チャンネルで質問していただくようお願いしています。

コーポレートセキュリティが管理していないシステムについては、[テックスタック](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)でオーナーを確認できます。どこに尋ねればよいか分からない場合は、`#it_help` でお尋ねいただければ、適切な担当者や場所にご案内します。

### Tier 3. エスカレーションとシステムエンジニアリング

私たちのサポートアナリストは、ユーザーサポートを提供するためのトレーニングを受けています。サポートアナリストが回答できない問題があった場合には、コーポレートセキュリティエンジニアにエスカレーションされます。

私たちのセキュリティエンジニアおよびシステムエンジニアは、[コーポレートセキュリティシステム](/handbook/security/corporate/systems)の技術的なオーナーであり、ビジネス要件の最適化・サポートとセキュリティリスクの軽減のための構成管理およびエンジニアリング業務を担っています。

チームメンバーのサポートリクエストについては、`#it_help` Slack チャンネルで支援を求めてください。

高度なリクエストや変更管理／構成管理については、[コーポレートセキュリティ Issue トラッカー](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues)で GitLab Issue を作成し、適切な Issue テンプレートを選択してください。テンプレートを選ぶと、適切なラベルが自動的に追加され、該当するシステムオーナーにアサインされます。

**ご注意:** 私たちはエンジニアリング Issue について **当日対応はしていません**。私たちの Issue には優先度付きのキューがあり、エンジニアリングマネージャーとプログラムマネージャーが管理しています。各チームには、新しい日々のリクエストを数営業日以内にトリアージできるようにバッファを確保しています。作成する Issue には、適切な優先度ラベルを付けてください。**緊急の対応が必要なものについては `#it_help` Slack チャンネルで質問してください**。エスカレーションと優先度付けは社内で対応します。

### Tier 4. 自動化エンジニアリング

どんな企業やチームも、進化と拡大に伴い、プロセスの自動化と効率化が重要になります。多くのテック企業は、何らかのスクリプトを用いて自動化とプロセスを改善しています。

GitLab では、各部門が独立して自分たちの自動化の課題を解決しています（私たちのバリューと、自身のニッチな問題を解決するというあり方が、オーガニックに進化した結果です）。

時間が許す限り、私たちのセキュリティエンジニアおよびシステムエンジニアは、プロセスとシステム構成を効率化するための自動化プロジェクトに取り組んでいます。これらは通常、私たちのセキュリティ戦略、コンプライアンス上の所見、特定されたセキュリティリスクの軽減と整合させて進めています。

詳しくは、[自動化に関するハンドブックページ](/handbook/security/corporate/automation)をご覧ください。

### Tier 5. アーキテクチャと危機管理

私たちのスタッフエンジニアおよびマネージャーは、コーポレートセキュリティチームと、強固なセキュリティ態勢を提供しつつ優れた社内顧客体験を実現するための部門横断のステークホルダーに対し、メタレベルの方向性、自動化、効率性の向上を推進することに注力しています。これらはすべて、セキュリティのビジョンと整合する形で行われています。また、部門横断またはリーダーシップレベルの危機・インシデントの軽減に対して、スウォームスタイルのガイダンスとエンジニアリングも提供しています。
