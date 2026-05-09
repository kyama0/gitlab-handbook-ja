---
title: "Policy-as-code"
upstream_path: /handbook/security/security-assurance/security-compliance/policy-as-code/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T06:00:00Z"
translator: claude
stale: false
---

## Policy-as-code とは何か?

Policy as code (PaC) とは、組織の運営のさまざまな側面、特にコンプライアンス、セキュリティ、リスク管理を統治するポリシー、ルール、規制をコード化する慣行を指します。これらのポリシーを、組織のシステムとインフラストラクチャ内で自動的に強制し継続的に監視できる機械可読なコードに翻訳することを含みます。

## なぜ Policy-as-code を使用するのか / 利点は何か?

Policy as code (PaC) は、DevSecOps モデルを取り入れる組織にいくつかの主要な利点を提供します。第一に、PaC はポリシーを機械可読な形式で定義し、自動化を通じてそれを強制することにより、インフラストラクチャ全体の一貫性と標準化を保証します。この一貫性は、誤った構成のリスクを最小化し、デプロイされたすべてのリソースが組織の標準に準拠することを保証し、全体的なシステムの信頼性とセキュリティを強化します。

第二に、PaC はポリシー強制プロセスにおける自動化と効率性を可能にします。ポリシーをコードに翻訳し、Infrastructure as Code (IaC) ツールと統合することで、組織は事前定義されたポリシーに対するインフラストラクチャ構成の評価を自動化できます。この自動化は手動介入への依存を低減し、時間と労力を節約しながら正確性を改善します。さらに、自動化された強制メカニズムはポリシー違反をリアルタイムで検出でき、迅速な是正措置を可能にし、セキュリティ侵害やコンプライアンス問題の可能性を低減します。

第三に、PaC は組織内の監査、説明責任、スケーラビリティを強化します。ポリシーがコードとして定義されることで、組織はコンプライアンス姿勢への可視性を高め、変更、監査証跡、過去のコンプライアンスデータを簡単に追跡できます。この透明性は規制コンプライアンスを促進し、ポリシー強制活動の明確なドキュメントを提供することで説明責任を強化します。さらに、PaC はスケーラビリティと柔軟性を提供し、大幅な手作業なしにインフラストラクチャ要件が進化するにつれてポリシーを更新・適応できます。この俊敏性により、組織は変化するコンプライアンス義務とビジネスニーズに迅速に対応でき、ポリシーと運用慣行間の継続的な整合を保証します。

## セキュリティコンプライアンスは GitLab で Policy-as-code をどのように、どこで実装するか?

セキュリティコンプライアンスは、[SAST](https://docs.gitlab.com/ee/user/application_security/sast/) や Checkov などのコード分析と Infrastructure-as-Code (IaC) ツールのスキャンを伴う既存ツールの活用を通じて、Policy as Code (PaC) を実装する計画です。

このアプローチをさらに強固にするために、[ドッグフーディング](/handbook/values/#dogfooding)に焦点を当て、GitLab をツールとして活用することが必須となります。GitLab を最大限に活用することで、組織は PaC の実装を合理化し、コラボレーションを促進し、セキュリティ慣行への可視性を強化する、実証済みでスケーラブルなコンセプトを設計できます。

このツールと慣行の包括的な統合は、セキュリティコンプライアンスの取り組みを強化するだけでなく、プロアクティブなリスク管理とセキュリティ姿勢の継続的な改善のための堅牢な基盤を確立します。

## ロードマップ

この機能をどのように展開しているかについては、機密エピック（社内のみ）を参照してください。

## <i class="fas fa-id-card" style="color:rgb(110,73,203)" aria-hidden="true"></i> チームへの連絡

- Slack
  - セキュリティコンプライアンスチーム全体に届くように、`@dedicated_compliance` または `@sec-compliance-team` をタグ付けして自由にお問い合わせください
  - 私たちのチームに関する質問には、`#security-help` または `#security-discuss` Slack チャンネルが最適です（上記のタグを追加してください）
  - FedRAMP に関する質問は `# wg_fedramp` チャンネルに送ってください
- GitLab でタグ付け
  - `@gitlab-com/gl-security/security-assurance/team-security-dedicated-compliance`
- Email
  - `security-compliance@gitlab.com`
- 私たちのチームの GitLab.com [サブグループとプロジェクト](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance-commercial-and-dedicated/team-security-dedicated-compliance)はこちらです
- 私たちのチームに参加することに興味がありますか？詳細は[こちら](/job-description-library/security/security-assurance-job-family)をチェック！
