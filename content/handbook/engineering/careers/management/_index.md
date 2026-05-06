---
title: "エンジニアリングマネジメント"
upstream_path: "/handbook/engineering/careers/management/"
upstream_sha: "3480299851f7e2243d4f08b75dac452f89929636"
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

## GitLab におけるエンジニアリングマネジメントの仕組み

GitLab では、エンジニアリングにおけるリーダーシップには 2 つのパスを推進しています。この 2 つのアイデアには健全な重複がありますが、それぞれに対して専門的なトレーニングと責任を分けることが役立ちます:

- **テクニカルリーダーシップ**: [Staff およびより上位のエンジニア](/handbook/engineering/careers/#roles)に代表されます。
- **プロフェッショナルリーダーシップ**: [エンジニアリングマネジメント](/handbook/engineering/careers/#roles)に代表されます。

テクニカルリーダーシップはソフトウェアエンジニアにとって自然に身につきやすいですが、プロフェッショナルリーダーシップは習得がより難しい場合があります。

このページは現在および将来のマネージャーのためのトレーニングリソースおよび運用ガイドとして機能します。

## 一般的なリーダーシップ原則

すべての Engineering Manager はハンドブックに定められた[一般的なリーダーシップ原則](/handbook/leadership/)に従うべきです。特に、Engineering Manager が以下の領域で苦労することは珍しくないため、これらを注意深く確認し、マネージャーと自身のレベルについて話し合うことをお勧めします:

- [1-1](/handbook/leadership/1-1/)
- [定期的なフィードバックの提供](/handbook/leadership/#giving-feedback)
- [パフォーマンス不足への対応](/handbook/leadership/underperformance/)
- [Engineering Manager ロールの解説](/handbook/engineering/careers/training/em-role/)

## Engineering Manager のオンボーディング

オンボーディングは GitLab のすべての Engineering Manager にとって不可欠です。オンボーディングの一部として、各マネージャーが入社時または昇進時に [GitLab マネージャーになること](https://gitlab.com/gitlab-com/people-group/Training/blob/master/.gitlab/issue_templates/becoming-a-gitlab-manager.md) の Issue が作成されます。この Issue は、新しいマネージャーが必要な重要情報につながり、利用可能なすべてのリソースとトレーニングにアクセスできるようにすることを目的としています。

## Engineering Manager のバックアップ

各 Engineering Manager（EM）は、EM が予定外の長期不在を取る必要が生じた場合に備えてバックアッププランを策定する責任があります。チームへの混乱を最小限に抑えるため、このプランは EM が最善の行動方針と判断した時点で実行されるべきです。以下に例を示します:

| ピア EM バックアップ（できれば FE / BE ペア） | シニアチームメンバー | EM のマネージャー |
| ------ | ------ | ------ |
| チームレトロスペクティブに参加し、全社レトロへのアイテムを強調し、必要に応じてコール時に読み上げる | バックログリファインメントとマイルストーン計画で PM と協力する | Navan の経費報告を完了する |
| 同期/非同期の 1-1 を実施する（1 週間以上の場合） | 新入社員のオンボーディング | 経費に関する質問を処理する |
| マネージャー承認（ステージングへのアクセスなど） | | |

タイミングの詳細を含めることも検討してください。例: 不在がマイルストーンの最後/最初の週に及ぶ場合、PM と次のマイルストーンの計画に参加する。

完了したら、チームページに公開し、ピア EM バックアップに通知することも検討してください。

## テクニカルクレジビリティ

GitLab では、すべてのマネージャーがチームに対して技術的に信頼できることを期待しています。コア技術とアーキテクチャに精通していることは、技術的な会話に効果的に参加できるようになるため不可欠です。この精通度を維持するために、マネージャーがある程度コーディング関連の仕事に参加することを奨励しています。ただし、以下のアドバイスを念頭に置いてください:

- クリティカルパスの仕事は避けてください。リリースに予定されているか、チームの他のメンバーをブロックしている仕事は、よりホリスティックに集中できる開発者に任せるのが最善です。マネージャーとしては、この種のタスクでの効率を下げるような日常的な中断を予期するべきです。
- 最も価値を発揮できる場所に集中してください。上述のように、クリティカルパスの仕事では価値を発揮できませんが、それは他の方法で価値を発揮できないということではありません。これについての素晴らしい議論は、[マネージャーがコードを書くべき理由と方法](https://medium.com/@johnbarton/how-and-why-should-managers-code-323751799664)の記事を参照してください。
- 書くよりもレビューする計画を立ててください。これらすべてを踏まえると、「コーディング関連の仕事」のほとんどはコードレビューであるべきです — チームの最新状況を把握し、フィードバックと指導を提供するためにコードをレビューすることで、より多くの価値を発揮します。コードのレビューよりも書く時間に費やしていることに気付いた場合は、リーダーとしての優先順位を見直す必要があるサインかもしれません。

## マネジメントの責任

以下のセクションは、GitLab における Engineering Manager の責任についての情報を提供することを目的としています。必要なコンテキスト、情報、および従うべきプロセスを提供します。

- [採用](/handbook/engineering/careers/management/hiring/)
- [キャリア開発](/handbook/engineering/careers/management/management-career-development/)
- [プロジェクトマネジメント](/handbook/engineering/careers/management/project-management/)
- [チームレトロスペクティブ](/handbook/engineering/careers/management/group-retrospectives/)

## マネジメントロール

GitLab でのマネージャーロールの表示規則は以下の通りです:

- マーケティング部門では `Manager, Brand Growth Manager`
- 財務部門では `Manager, IT`
- 開発サブ部門では `Manager, Software Engineering`
- サポートサブ部門では `Manager, Support Engineering`

Senior Manager のロールも同じ規則に従います。例えば:

- 開発サブ部門では `Senior Manager, Software Engineering`
- サポートサブ部門では `Senior Manager, Support Engineering`

この規則は、記録システムである Workday で使用されます。ハンドブックでの表示と、`Engineering Manager` や `EM` などの事実上の業界標準のロール名と略語を保持するために、エンジニアリング部門のマネージャーロールは一般的にこの命名パターンに従います:

`Engineering Manager, [Specialty]`

一時的なマネジメントポジション、Senior Manager トラック、異なるタイプのマネージャーロール（`Support` など）、および 1 つ以上の専門を考慮すると:

`[Acting|Interim] [Senior] [Site Reliability|Support|Quality] Engineering Manager [, Specialty]`

ここで:

- Acting または Interim ロールは[一時的なマネジメントポジション](/handbook/engineering/careers/#temporary-management-positions)です。
- `Senior` マネージャーロールは必要に応じて導入され、通常は関連部門の管理[スパンオブコントロール](/handbook/company/structure/#management-group)に関連しています。
- 一部の部門では `Engineering Manager` に加えて、またはその代わりとして、ドメイン固有のロール名があります。「EM」という用語での混乱を避けるため、エンジニアリング配下のどのマネージャーが特定のタスクに責任があるかを特定する際は具体的にしてください。例えば:
  - サポートでは `Support Operations Manager`。
- Workday で管理され[ハンドブックに同期される](https://theloop.gitlab.com/site/4455aa7f-24d9-41f2-b940-467b54962e4d/page/0fa19bf4-fd6a-41b9-9316-c2dcf3add854) Specialty は、一般的にこれらのガイドラインに従うべきです:
  - `Stage` を含めること。マネージャーが複数のステージを担当する場合はプライマリステージを選択。
  - Individual Contributor を管理するマネージャーの場合は、グループ（`Stage: Group`）を含めること。マネージャーが複数のグループを担当する場合はプライマリグループを選択。
