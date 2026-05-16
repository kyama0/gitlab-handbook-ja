---
title: "Static Analysis グループ コードレビュープロセス"
upstream_path: /handbook/engineering/development/sec/secure/static-analysis/code_review/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-08-16T13:10:36+00:00"
---

## 概要

このページでは、Static Analysis チームが使用するコードレビュープロセスについて説明します。

### レビュアー

Static Analysis グループのすべてのメンバーは、定期的にコードレビューに参加することが期待されます。これには、MR コーチローテーションの一部として行われる GitLab チームメンバーとより広いコミュニティの両方からの貢献が含まれます。

すべてのチームメンバーがマージリクエストをレビューすることが推奨されていますが、MR をマージして変更をリリースする権限はプロジェクトのメンテナーに限定されています。

### メンテナー

[エンジニアリングレビューワークフロー](/handbook/engineering/workflow/code-review/#how-to-become-a-project-maintainer) からの引用:

> 優れたエンジニアはしばしば優れたレビュアーでもありますが、コードレビューはそれ自体がスキルであり、すべてのエンジニアがシニアリティに関わらず、そのスキルを磨く同じ機会を持っているわけではありません。また、良いメンテナーになることの大きな部分は、既存の製品とコードベースを非常によく知ることから来ています。それにより、他の機能との不整合、エッジケース、または非自明な相互作用を他のレビュアーが見逃しやすいものを発見できるようになります。
>
> コードベースと製品全体の品質を保護し確保するために、人々はレビュースキルが既存のメンテナーに匹敵するレベルであることを説得力を持って示した後にのみメンテナーになります。

通常のレビュアーと同様に、メンテナーはチームページ、または[GitLab エンジニアリングプロジェクト](/handbook/engineering/projects/)のリストで確認できます。

#### メンテナーシップへの道

##### レビュアーになる

すべての SAST BE エンジニアリングチームメンバーは、SAST アナライザーへの変更をレビューすることが期待されています。オンボーディングプロセスの最終ステップの一部として、チームメンバーページは各 SAST アナライザーのレビュアーとしてチームメンバーを追加するように更新する必要があります。

```yaml
  secure-SAST-kics: reviewer
  secure-SAST-kubesec: reviewer
  secure-SAST-pmd-apex: reviewer
  secure-SAST-security-code-scan: reviewer
  secure-SAST-semgrep: reviewer
  secure-SAST-sobelow: reviewer
  secure-SAST-spotbugs: reviewer
  secure-SAST-tracking-calculator: reviewer
  secure-common-command: reviewer
  secure-common-report: reviewer
  secure-common-ruleset: reviewer
```

##### メンテナーシップへの道

SAST アナライザーに貢献するすべてのシニア（以上）のバックエンドエンジニアは、すべての SAST アナライザーのメンテナーシップを目指すことが期待されていますが、すべての SAST エンジニアに対してメンテナーシップを追求することが推奨されています。
すべてのメンテナーシップの承認は、少なくとも 2 人の既存のメンテナーによって行われる必要があります。
SAST には 2 つのティアのメンテナーシップがあります。

###### ティア 1

一部のアナライザーはめったに更新されません。これらには以下が含まれます:

[kics](https://gitlab.com/gitlab-org/security-products/analyzers/kics)
[kubesec](https://gitlab.com/gitlab-org/security-products/analyzers/kubesec)
[pmd-apex](https://gitlab.com/gitlab-org/security-products/analyzers/pmd-apex)
[security-code-scan](https://gitlab.com/gitlab-org/security-products/analyzers/security-code-scan)
[sobelow](https://gitlab.com/gitlab-org/security-products/analyzers/sobelow)
[spotbugs](https://gitlab.com/gitlab-org/security-products/analyzers/spotbugs)

めったに更新されないプロジェクトのメンテナーになることは困難な場合があります。貢献やレビューの機会が限られているためです。この場合、他の GitLab アナライザーへの貢献を考慮すべきであり、メンテナーシップの付与は既存のメンテナーの裁量に委ねられます。既存のメンテナーは承認の理由を文書化すべきであり、メンテナーシップが拒否された場合は、どのプロジェクトに貢献するかについての提案を提示すべきです。貢献をレビューする際は、MR が生まれなかった場合でも、section-sec-request-for-help 内の Issue への貢献も含めて考慮すべきです。

###### ティア 2

このティアのメンテナーシップには以下が含まれます:

[Semgrep](https://gitlab.com/gitlab-org/security-products/analyzers/semgrep)
[sast-rules](https://gitlab.com/gitlab-org/security-products/sast-rules)
[tracking-calculator](https://gitlab.com/gitlab-org/security-products/post-analyzers/tracking-calculator/)
[ruleset](https://gitlab.com/gitlab-org/security-products/analyzers/ruleset)

メンテナーシップの付与は、リクエストを承認する 2 人の現在のメンテナーの裁量に委ねられますが、申請者はプロジェクトへの貢献の実績が必要です。これらの貢献はプロジェクトへの理解と変更がモノリスにどのような影響を与える可能性があるかを示す必要があります。

##### レビュアーメンタープログラム

私たちは[エンジニアリングレビューワークフロー](/handbook/engineering/workflow/code-review/#reviewer-mentorship-program) に記載されているのと同じレビュアーメンタープログラムに従っています。

### 注意点

Secure プロジェクトを維持する上で、批判的な目が必要な特定の側面があります。これらはチーム内のすべてのレビュアーが認識すべき責任であり、メンテナーに対する期待事項です。いくつかの例を挙げます:

1. マージ前の下流パイプラインの実行: これは `gitlab-org` のメンバーには自動的に発生しますが、コミュニティの貢献には手動のトリガーが必要です
1. タグのリリース前にパイプラインの失敗を修正する必要があります。[バージョニングとリリースプロセス](https://gitlab.com/gitlab-org/security-products/analyzers/common#versioning-and-release-process) を参照してください。
1. アナライザーは CI テンプレートと同期を保つ必要があります。mobsf などの場合、特定のケースではアナライザーのバージョンを同期させる必要があります。
