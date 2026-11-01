---
title: "サクセスプランの成果物"
description: "CSM と CSA がすべての顧客サクセスプランを通じて提供する成果物：エグゼクティブビジネスレビュー、ワークショップ、検証可能な成果、標準的な作業方法。"
upstream_path: /handbook/customer-experience/csm/success-plans/deliverables/
upstream_sha: 52419353ea755a1ac823553385f8636ff2fcde17
lastmod: "2026-10-30T09:11:05-07:00"
translated_at: "2026-11-01T18:20:37+00:00"
translator: codex
stale: false
---

CSM に関連するその他のハンドブックページについては、[CSM ハンドブックのホームページ](/handbook/customer-experience/csm/)を参照してください。

---

すべてのサクセスプランには、このページに記載する成果物が含まれます。CSM または CSA として、これらすべてを顧客に提供する責任があります。

| 成果物 | 追跡する場所 |
|---|---|
| [標準的な作業方法](#standard-way-of-working) | サクセスプランプロジェクト |
| [エグゼクティブビジネスレビュー（EBR）](#executive-business-reviews-ebrs) | サクセスプランプロジェクト、および Gainsight にも記録 |
| [ワークショップ](#workshops) | サクセスプランプロジェクト、および Gainsight にも記録 |
| [検証可能な成果（VO）](#verifiable-outcomes-vos) | サクセスプランプロジェクトでエピックとして追跡 |
| [アクセラレーター](#success-accelerators-csas-only) | サクセスプランプロジェクトでエピックとして追跡 |

サクセスプランは、すべての成果物の唯一の情報源です。一部の成果物は当面 Gainsight にも記録する必要がありますが、作業の計画と追跡はサクセスプランで行います。

## 標準的な作業方法 {#standard-way-of-working}

すべてのサクセスプランで同じ作業方法に従うため、誰でも顧客のサクセスプランを開いて内容を理解できます。すべての顧客リクエストと作業の流れに作業アイテムを作成し、すべての作業アイテムに、概要、成功基準、DRI、やり取りのたびに更新するコメントという同じ 4 つの要素を含めます。

プロセスの全体とテンプレートについては、[サクセスプラン](/handbook/customer-experience/csm/success-plans/)を参照してください。

## エグゼクティブビジネスレビュー（EBR） {#executive-business-reviews-ebrs}

EBR はサクセスプランの一部です。[`sp-ebr-planning` テンプレート](https://gitlab.com/gitlab-com/account-management/sub-group-issue-templates/-/blob/master/.gitlab/issue_templates/sp-ebr-planning.md)を使用して、各 EBR をサクセスプランプロジェクトの Issue として計画します。当面は、実施後に Gainsight にも記録します。

EBR の計画と実施に関するガイダンスについては、[エグゼクティブビジネスレビュー（EBR）](/handbook/customer-experience/csm/ebr/)を参照してください。

## ワークショップ {#workshops}

ワークショップはサクセスプランの一部です。[`sp-workshop-planning` テンプレート](https://gitlab.com/gitlab-com/account-management/sub-group-issue-templates/-/blob/master/.gitlab/issue_templates/sp-workshop-planning.md)を使用して、各ワークショップをサクセスプランプロジェクトの Issue として計画します。当面は、実施後に Gainsight にも記録します。

ワークショップの実施と記録に関するガイダンスについては、[ワークショップとイネーブルメントセッション](/handbook/customer-experience/csm/workshops/)を参照してください。

## Success Accelerator（CSA のみ） {#success-accelerators-csas-only}

Success Accelerator は、顧客が特定の目標をより早く達成できるよう支援する、体系的で成果を重視した取り組みです。各アクセラレーターはサクセスプランプロジェクトのエピックとして計画し、検証可能な成果と同じ構造に従います。

Success Accelerator について、次の要件を満たす責任があります：

- エピック、またはエピックに昇格した Issue であること。
- `Success Accelerator` ラベルがあること。

## 検証可能な成果（VO） {#verifiable-outcomes-vos}

検証可能な成果（VO）は、正式に追跡され、顧客によって検証される顧客の目標です。VO は [SMART](#what-makes-a-good-vo)でなければなりません。

### 検証可能な成果を追跡する {#track-verifiable-outcomes}

サクセスプランプロジェクトで VO にラベルを付ける責任があります。各 VO は、次の要件を満たす必要があります：

- エピック、またはエピックに昇格した Issue であること。
- 次の表のいずれかの値を持つ `~Verifiable Outcome::` ラベルがあること。
- 終了日があること。

その他すべてのラベル要件は廃止されています。

| 段階 | ラベル | 適用するタイミング |
|---|---|---|
| **提案済み** | `~Verifiable Outcome::Proposed` | VO を特定し、顧客への提示前に社内で草案を作成している |
| **合意済み** | `~Verifiable Outcome::Accepted` | 目標、ベースライン、成功基準、スケジュールについて顧客と合意している |
| **提供済み** | `~Verifiable Outcome::Delivered` | GitLab 側の作業が完了している |
| **検証済み** | `~Verifiable Outcome::Verified` | 顧客が成功裏に完了したことを明示的に確認している *（推奨）* |

次のラベルがあると役立ちますが、必須ではありません：

- `~UseCase::`
- `~Support::Assigned Support Engineer`
- `~SKU::Professional Services`
- 機能リクエストのラベル

### Issue をエピックに昇格する {#promote-an-issue-to-an-epic}

VO として追跡すべき Issue がすでにある場合は、2 つの方法のいずれかでエピックに昇格します。

UI で Issue を昇格するには、次の手順に従います：

1. Issue を開きます。
1. 右上で **More actions**（**⋮**）> **Change type** を選択します。
1. **Type** で **Epic** を選択します。
1. **Change type** を選択します。

クイックアクションで Issue を昇格するには、Issue に次のコメントを追加します：

```text
/promote_to Epic
```

どちらの方法でも、Issue の親グループにエピックを作成し、タイトル、説明、コメント、参加者、関連するグループラベルを引き継ぎます。昇格後は、`~Verifiable Outcome::` ラベルと終了日が設定されていることを確認します。

### 良い VO の条件 {#what-makes-a-good-vo}

VO は **SMART**、つまり具体的、測定可能、達成可能、関連性がある、期限があるという条件を満たす必要があります。

すべての VO には、**ベースライン**（現在の状態）、**成功基準**（完了したと判断する方法）、**ビジネスへの影響**（顧客の言葉で表現したもの）、**スケジュール**が必要です。

**四半期内の VO の例：**

| VO | ベースライン | 成功基準 | 期間 | ビジネスへの影響 |
|---|---|---|---|---|
| Security と Engineering のリーダーがパイプラインでコンプライアンスポリシーを適用できる状態になる | チームは Compliance Pipelines を使用したことがなく、強制適用されるポリシーの枠組みがない | Security と Engineering のリーダーがコンプライアンスポリシーのワークショップに参加し、顧客がポリシー適用モデルへの理解を確認して、実装するポリシーを少なくとも 1 つ特定する | 四半期内 | 標準を適用するための具体的な出発点をチームに提供し、コンプライアンスについて個々の開発者の行動に依存する度合いを減らす |
| Platform チームがすでに保有している DAP の機能を積極的に使用する | DAP の機能が使われておらず、利用可能なプロモーションクレジットが適用されていない | Platform チームと DAP の上位 5 つのユースケースを確認し、プロモーションクレジットを適用するか、デプロイ計画を確定する | 四半期内 | 十分に活用されていない購入を実際の価値に変え、DAP を有意義に活用し始めるまでの時間を短縮する |
| 新しい開発チームが GitLab で初めてのパイプラインを稼働させる | 開発者 12 人の新しいチームに GitLab の CI/CD パイプラインがない | 12 人全員が自分のプロジェクトで少なくとも 1 つのパイプラインを稼働させ、チームが CSM の支援なしで基本的なパイプラインの構築とトラブルシューティングを行える | 四半期内 | 手動のデプロイ手順によるチームの障害を取り除き、CI/CD の利用をさらに広げるための基盤を確立する |
| パイロットグループが GitLab Duo の実践的な経験を得て、次のステップが明確になる | アカウントで Duo が使われておらず、パイロットグループを特定しているが、まだ利用を有効にしていない | パイロットグループの利用を有効にして少なくとも 1 つのユースケースの実習を完了し、顧客がフィードバックを提供して、展開を拡大、一時停止、調整のいずれとするかを確認する | 四半期内 | 未知の状態を意思決定に変え、次の Duo 投資を選択するための具体的な根拠を顧客に提供する |
| 顧客のメインブランチのパイプライン失敗率がリリースを妨げなくなる | メインブランチの失敗率が約 30% で、リリースの遅延を引き起こしている | パイプライン失敗率を 5% 未満に減らし、根本原因を文書化して顧客の Engineering リーダーと共有する | 四半期内 | リリース速度を回復し、開発者の不満と時間の損失を繰り返し引き起こす原因を取り除く |

**ディスカバリーのヒント：**

- TED 型の自由回答の質問をします：*「チームの優先事項について教えてください... どのように...か説明してください... 何を...か具体的に教えてください...」*
- 投資家向け報告書、プレスリリース、GitLab の事例を参照し、ビジネスへの影響を整理します
- GitLab Duo を使用して、基準が本当に SMART であるかを検証します

その他のディスカバリーの質問と手法については、[サクセスプランのディスカバリーに使う質問と手法](/handbook/customer-experience/csm/success-plans/questions-techniques/)を参照してください。
