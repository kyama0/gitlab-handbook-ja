---
title: "Engineering の採用"
upstream_path: /handbook/engineering/workflow/hiring/
upstream_sha: 52419353ea755a1ac823553385f8636ff2fcde17
lastmod: "2026-10-20T15:40:13+01:00"
translated_at: "2026-11-01T18:10:38+00:00"
translator: codex
stale: false
---

## 概要 {#overview}

採用は、私たちの Engineering 組織の成功を支える基盤であり、成長とお客様に成果をもたらす力に貢献します。そのため、採用は単なる責務ではなく、すべてのエンジニアが GitLab に貢献するうえでの根幹です。経験や職位にかかわらず、GitLab のすべてのエンジニアの役割に深く根づいているべきものです。

採用活動に積極的に参加することで、エンジニアは企業文化を形づくり、技術水準を高め、多様な視点やスキルが継続的に加わるよう支援します。採用活動への貢献によって GitLab は責任を持って成長でき、それは Engineering 全体の成功にも影響します。

面接はスキルであり、実施と改善には多くの時間と労力がかかります。Engineering 組織の拡大に貢献するために私たちが払う努力を認め、感謝すべきです。

## 採用の実施方法 {#hiring-practices}

Engineering Leadership は、エンジニアリングの各職種をジェネラリストまたは専門職に分類します。この分類によって、候補者が進む面接プロセスが決まります。

| | ジェネラリスト | 専門職 |
|---|---|---|
| **職種に求められるもの** | あるチームの言語、フレームワーク、ツールに依存せず、チームを越えて活用できるエンジニアリングの中核スキル | 専門分野またはチーム固有の専門知識 |
| **候補者の評価対象** | GitLab Engineering への適性と職位を評価し、採用時にチームを決定 | 特定のチームと職種への適性 |
| **職種に占める割合** | Backend、Frontend、SRE の大半を含め、多くの職種がジェネラリストになる想定 | 専門知識が本当に必要な職種 |
| **プロセス** | ジェネラリスト採用（CodeSignal） | 専門職採用（従来の MR プロセス） |

職種の分類がわからない場合は、マネージャーに確認してください。

### ジェネラリスト採用 {#generalist-hiring}

ジェネラリストの候補者は、CodeSignal の持ち帰り課題、2 回の技術面接、hiring manager との面接からなる共通の面接プロセスに進みます。採用と職位が決定したら、Talent Acquisition が Engineering Leadership と協力して、候補者を条件に合う募集中の職種に割り当てます。この方法で採用する理由とプロセスの仕組みについては、[Engineering のジェネラリスト採用](/handbook/engineering/workflow/hiring/generalist-hiring/)を参照してください。このプロセスは、まずインドのみで試行しています。

### 専門職採用 {#niche-hiring}

専門職には、従来のマージリクエスト（MR）に基づく面接プロセスを使用し、特定のチームと職種への適性を評価します。社内のベストプラクティスやガイドラインについては、[社内の採用リポジトリ](https://gitlab.com/gitlab-com/people-group/hiring-processes/-/tree/master/Engineering)を参照してください。

## 面接を担当する人 {#who-interviews}

面接は、すべてのエンジニアの役割の一部です。GitLab に 6 か月以上在籍し、資格要件を満たすエンジニアには、面接の担当が期待されます。

ジェネラリスト職種の面接担当者は、専門領域（Backend、Frontend、SRE、Hiring Manager）ごとの、評価基準を調整済みの共通プールに参加し、必要なトレーニングを完了します。[面接担当者向けのガイダンス](/handbook/engineering/workflow/hiring/generalist-hiring/#guidance-for-interviewers)を参照してください。

## R&D の新規採用枠の GHPID 申請、欠員補充、採用枠移管のプロセス {#rd-new-headcount-ghpid-request-backfill--transfer-process}

これらのプロセスは、ジェネラリストと専門職の両方に適用されます。

### 新規採用枠と欠員補充のプロセス {#new-headcount-and-backfill-processes}

予算化された新規採用枠は、Engineering Leadership、Talent Acquisition、Finance Business Partners（FPB）、People Business Partners（PBP）が定期的にレビューします。新規採用枠を募集開始するプロセスは、Talent Acquisition と Finance が主導し、Engineering チームと People チームの間でのコミュニケーション、一貫性、協力の確保に重点を置いています。

新規採用枠と欠員補充の両方のプロセスは、[Talent Acquisition のハンドブックセクション](/handbook/hiring)で確認できます。欠員補充は、まず CTO と Engineering Leadership が毎週レビューし、そのポジションを募集開始するか、閉じるか、別の用途に振り向けるかを事業上の判断として決定します。決定後、担当の recruiter が職種の採用活動を開始するために連絡します。事業上の理由で職位を変更する必要がない限り、すべての欠員補充はデフォルトで Intermediate/Grade 6 レベルになります。詳細は、ハンドブックの [Engineering の異動原則](/handbook/engineering/careers/#mobility-principles)ページで確認できます。

### 採用枠移管のプロセス {#headcount-transfer-process}

1. **Department Heads と PBP**：2 人の Department Heads がチーム間で新規採用枠を移すことに合意した場合、それぞれのリーダーが担当の PBP に連絡し、組織構造や組織計画上の検討事項について話し合ってください。PBP は、[Triad プロセス](/handbook/hiring)を通じて、関連情報（組織設計、職位、配置）を Finance と Talent Acquisition に共有します。
1. **Finance Business Partner**：FBP は、Adaptive で採用予測対象の職種に対する GHPID を作成し、Issue に GHPID を追加して、そのステップを完了としてマークし、予測が更新されたことを示します。さらに情報が必要な場合は、FPB が GHPID を提供する前に部門リーダーまたは PBP に連絡します。
1. **People Business Partner**：GHPID が割り当てられた後、PBP は Workday の「Cost Center」と「Supervisory Org」の両ディメンションが更新され、正確であることを確認します。
