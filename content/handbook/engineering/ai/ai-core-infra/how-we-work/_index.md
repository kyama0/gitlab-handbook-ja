---
title: "働き方"
description: "AI Core Infra における働き方、コミュニケーション、日々の運営方法"
upstream_path: /handbook/engineering/ai/ai-core-infra/how-we-work/
upstream_sha: e829b207a53856c23a25197426cca945626ade8a
lastmod: "2026-07-01T10:27:42+02:00"
translated_at: "2026-07-05T01:37:53+09:00"
translator: codex
stale: false
---

## バックログリファインメント

エンジニアリングチームは毎週、今後の Issue をレビューするためにバックログリファインメントプロセスを完了します。この取り組みの目的は、すべての Issue にウェイトを付けることで、チームの見積もりキャパシティと Issue の見積もりウェイトを使って、各マイルストーンをより正確に計画できるようにすることです。

このバックログリファインメントプロセスに加えて、チームのエンジニアは、単純でバックログリファインメントを必要としない Issue にウェイトを追加できます。

このプロセスは 3 つのステップで行われます。

### ステップ 1：リファインメント対象 Issue の特定

Engineering Manager は毎週、リファインメントする Issue を選びます。合計 5 件の Issue を目標にしています。
良い候補だと思う Issue があれば、その Issue 自体でメンションしてください

コンテキストスイッチを増やしすぎないよう、リファインメントはテーマを揃えるようにしています。候補を探すのに適した場所：

* [Infradev Issues](https://gitlab.com/groups/gitlab-org/-/work_items?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aai%20core%20infra&label_name%5B%5D=infradev&first_page_size=20)
* [ウェイトなしで次のマイルストーンに予定されている Issue](https://gitlab.com/groups/gitlab-org/-/work_items?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aai%20core%20infra&weight=None&milestone_title=Upcoming&first_page_size=100)
* [Security Issues](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&state=opened&label_name[]=group%3A%3Aai%20core%20infra&label_name[]=security&weight=None)
* [Missed-SLO](https://gitlab.com/groups/gitlab-org/-/work_items?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aai%20core%20infra&label_name%5B%5D=SLO%3A%3AMissed&first_page_size=100)
* [Approaching-SLO](https://gitlab.com/groups/gitlab-org/-/work_items?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aai%20core%20infra&label_name%5B%5D=SLO%3A%3ANear%20Miss&first_page_size=100)
* バグ
  * [Rails](https://gitlab.com/groups/gitlab-org/-/work_items?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aai%20core%20infra&label_name%5B%5D=type%3A%3Abug&weight=None&first_page_size=20)
  * [AIGW/DWS](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/work_items?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aai%20core%20infra&label_name%5B%5D=type%3A%3Abug&weight=None&first_page_size=20)
  * [CEF](https://gitlab.com/groups/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/-/work_items?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aai%20core%20infra&label_name%5B%5D=type%3A%3Abug&weight=None&first_page_size=20)
* ウェイトなしの Issue
  * [Rails](https://gitlab.com/groups/gitlab-org/-/work_items?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aai%20core%20infra&weight=None&first_page_size=100)
  * [AIGW/DWS](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/work_items?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aai%20core%20infra&weight=None&first_page_size=100)
  * [CEF](https://gitlab.com/groups/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/-/work_items?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aai%20core%20infra&weight=None&first_page_size=100)

選定後、Engineering Manager は `ai-framework::ready for next refinement` ラベルを適用し、[Refinement Bot](https://gitlab.com/gitlab-org/ai-powered/ai-framework/refinement-bot)を使用して、すべての候補をまとめたリファインメント Issue を生成します。

### ステップ 2：Issue のリファインメント

その週の間に、チームの各エンジニアはバックログリファインメント対象として選ばれた Issue のリストを確認します。[現在のバックログリファインメント Issue](https://gitlab.com/groups/gitlab-org/-/work_items?sort=created_date&state=opened&label_name%5B%5D=ai-framework%3A%3Aready%20for%20refinement&first_page_size=100)。

各 Issue について、各チームメンバーは Issue をレビューし、以下の情報を提供します：

* 見積もりウェイト。
* Issue を別の Issue またはマージリクエストに分割する方法。

考慮事項：

* 会話は元の Issue 上で続けます。
* このプロセス中、より多くの情報が集まるにつれて、Issue の説明とラベルを更新する必要があります。
* 効率化のため、既存のフィードバック次第では、Issue が引き続き ready の定義を満たしている限り、一部の Issue のリファインメントをスキップすることもできます。
* 修正内容が明確で簡単な場合は、Issue を自分たちにアサインし、ウェイトを 1 にして修正をプッシュできます。

Issue が ready の定義を満たしている場合、開発予定に組み込まれる可能性が高くなります。

## ウェイト付けと見積もりプロセス

### ウェイトガイドライン

Issue は Fibonacci sequence（0、1、2、3、5、8、13+）を使ってウェイト付けされます：

* **ウェイト 0：** 最小の Issue（typo、軽微なフォーマット、テストを伴わない単純なコード変更）
* **ウェイト 1：** 不確実性が最小限の単純な Issue（新しいコントリビューターに適しています）
* **ウェイト 2：** 複数のコード/テスト更新を必要とするわかりやすい Issue
* **ウェイト 3：** ある程度の複雑さはあるが、スコープを管理できる大きめの Issue
* **ウェイト 5：** 通常は分割すべきもの。リスクの低い大規模な手作業更新では許容されます
* **ウェイト 8/13+：** 分割が必要であることを示すプレースホルダーのウェイト。即時実装には大きすぎる、または不確実すぎます

### ウェイト更新プロセス

次のマイルストーンにアサインされたすべての Issue は、Engineering Manager が Deliverable ラベルを適用する前にウェイト付けされている必要があります。Engineering Manager はウェイトがアサインされているか確認し、ウェイトが 5 以上の場合は Issue をより小さなものに分割します。

Engineering Manager と Product Manager は、次のマイルストーンにアサインされた Issue のウェイト付けを、週次チームミーティング中に依頼する責任があります。必要に応じて質問できるよう、ミーティング前にエンジニアに Issue の説明を読んで準備してもらう必要があります。このプロセスは複数のミーティングに分けることができます。
