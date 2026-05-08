---
title: プロダクト Issue の管理
description: "Support と Fulfillment が連携してプロダクト Issue を管理するためのプロセス"
category: General
upstream_path: /handbook/support/license-and-renewals/workflows/managing_product_issues/
upstream_sha: 9da08370100b76603b2eb82901592f9d21c9766c
translated_at: "2026-05-08T10:35:08Z"
translator: claude
stale: false
---

Fulfillment Product Team と L&R Support Team は緊密に連携して、製品の Fulfillment 関連部分の Issue を特定し、理解し、優先順位付けしています。

### プロダクト問題の報告

Zendesk チケットの作業中にプロダクト問題に遭遇した場合、このワークフローを使用してください。

1. 問題に一致する Issue がないか、[Fulfillment Meta](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues) と [GitLab.org Fulfillment Section](https://gitlab.com/gitlab-org/gitlab/-/issues/?state=opened&label_name%5B%5D=section%3A%3Afulfillment) を検索します。一致する Epic についても、これらのプロジェクトの親グループを検索します。
1. 既存の Issue または Epic がある場合は、チケットにそのリンクを追加し、優先順位付けに役立つ関連情報を Issue または Epic に含めます。
1. それ以外の場合：
   1. 新しいバグの場合は、関連プロジェクトで以下のテンプレートのうち適切なものを使用して Issue を作成します。
      1. [customers.gitlab.com（/Admin を含む）の Issue](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/new?issue&issuable_template=Bug)
      1. [GitLab プロダクトの Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issue&issuable_template=Bug)
   1. 新しい機能やツールのリクエストの場合は、[Fulfillment meta intake request](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues/new?issue&issuable_template=intake) テンプレートを使用して Issue を作成します。Fulfillment PM がリクエストをレビューし、承認した場合は関連チームとトラッカーに移動します。
1. Issue または Epic に適切なラベルと優先度の指標を追加します。
    1. 自信を持って Issue または Epic の [Support Priority Score](#support-priority-score) を適切に計算できる場合は、それを行い、`Support Priority::Scored` を Issue に追加します。それ以外の場合は、`Support Priority::Categorize` を追加して、GitLab Support がこれに対応してほしいことを示します。
    1. `Support Priority` を追加して、優先度に基づかない様々なプロダクトボードやレポートに Issue や Epic が含まれるようにします。
    1. それが顧客の GitLab ライセンス機能を正常に使用する能力に影響を与えている場合は、`Customer::Impact` と `UX` を追加します。

- Issue へのコメントの追加と必要なラベルに関する一般的なガイダンスについては、[Issue 操作のワークフロー](/handbook/support/workflows/working-with-issues/#adding-comments-on-existing-issues) を参照してください。
- Fulfillment Product Management が、各新規 Issue を割り当てる適切なセクションと PM を決定します。
- 高優先度の Issue が十分に迅速に対応されていないと感じる場合は、L&R Support の [Regional DRI](/handbook/support/license-and-renewals/#support-management-contacts) のいずれかに連絡してください。

### Fulfillment 向けの Support Issue リスト

Support と Fulfillment のチームは、Support にとって関心のある Issue と Epic に優先順位を付けて管理するために、1 つの Epic ボードと 2 つの Issue ボードを組み合わせて使用しています。これらは集合的に `Support's Issue List for Fulfillment` と考えることができます。

このリストは、L&R Support が懸念しているプロダクト Issue を記述するための信頼できる唯一の情報源です。Issue や Epic に関連する Fulfillment のアクションについての更新や議論については、[Fulfillment Support Priority Monthly Review issue](https://gitlab.com/gitlab-com/Product/-/issues/?state=all&label_name%5B%5D=Fulfillment%20Support%20Priority%20Review) を毎月確認してください。これは [テンプレート](https://gitlab.com/gitlab-com/Product/-/tree/main/.gitlab/issue_templates/Fulfillment-Support-Priority-Monthly-Review.md) から作成されます。

#### リストへのアクセス

このリストを構成する Issue ボードと Epic ボードは、すべての GitLab チームメンバーが利用可能です。それらは：

- GitLab.org: [Support Priority epic ボード](https://gitlab.com/groups/gitlab-org/-/epic_boards/39981?label_name[]=Support%20Priority&label_name[]=devops%3A%3Afulfillment)
- GitLab.org: [Fulfillment Support Priority issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/2543339?label_name%5B%5D=section::fulfillment)
- fulfillment-meta: [Fulfillment Support Priority issue ボード](https://gitlab.com/gitlab-org/fulfillment-meta/-/boards/5530967?label_name[]=Support%20Priority)

#### リストの内容

リスト内の各ボードは、`Support Priority::X` のスコープラベルが付いている Issue または Epic を表示し、それらをサポート優先度の番号別にリストに整理します。

ボード上の各リスト内では、Fulfillment PM と EM がカードを並べ替えて、さらなる優先順位付けを示します。

##### `Support Priority::1` - The Top 10 List

任意の時点で、`Support Priority::1` のラベルが付いている Issue と Epic は 10 件以下である必要があります。これらの項目は集合的に `Top 10 List` として知られています。L&R Support が Fulfillment Team が対処すべき最も重要なプロダクト Issue として決定したものです。

##### `Support Priority::2` - The Next 10 List

任意の時点で、`Support Priority::2` のラベルが付いている Issue と Epic は 10 件以下である必要があります。これらの項目は集合的に `Next 10 List` として知られています。Top 10 への選定にあと一歩及ばなかった項目です。L&R Support は、すべてのリソースが Top 10 に注がれているのでなければ、Fulfillment にこのリストから取り組む項目を選んでほしいと考えています。

##### `Support Priority::3` と `Support Priority::4` - その他すべて

優先度 3 および 4 に設定された Issue と Epic は引き続き L&R Support にとって関心のあるものですが、これらは最後に対処されることが期待されています。

#### 再優先順位付けの可能性のためのレビュー

リスト内の Issue または Epic が再優先順位付けの可能性のためにレビューされることをリクエストしたい人は誰でも、以下を行うべきです。

1. `Support Priority::Review` ラベルを適用する
1. 自分が考える優先順位とその理由を Issue または Epic にコメントとして追加する

#### 主な貢献者

- プロダクトマネージャー：
  - プロダクトグループの所有権とプロダクト DRI の割り当てを示す
  - 進捗状況の更新を提供する
  - 取り組む項目を選択する

- エンジニアリングマネージャー
  - 進捗状況の更新を提供する
- L&R Support [Regional DRI](/handbook/support/license-and-renewals/#support-management-contacts)
  - `Support Priority::Categorize` または `Support Prioritize::Review` のラベルが付いた項目の毎月レビューを促進する
  - [Support Priority Score](#support-priority-score) に基づいて各項目の優先度を設定する
  - 質問し、答える
- L&R SE
  - 新規またはレビュー中の各項目について [Support Priority Score](#support-priority-score) を作成する
  - 各項目の Support Priority Score をその説明欄に記録する

#### Fulfillment 向けの Support Issue リストの優先順位付け

毎月、プロダクトリリースサイクルに合わせて、L&R Support がリストにどのような変更が必要かを判断します。この際、[Regional DRI](/handbook/support/license-and-renewals/#support-management-contacts) は次のことを行います。

1. [Monthly Prioritization](https://gitlab.com/gitlab-com/support/licensing-subscription/fulfillment-requests/-/issues/new?issuable_template=monthly_prioritization) テンプレートから新しい Issue を作成して、`Support Priority::Categorize` のラベルが付いた各 Issue および Epic に対して L&R Support エンジニアが Support Priority Score を設定するようリクエストする
1. `Support Priority::Review` のラベルが付いた Issue または Epic について L&R SE と議論を開始し、それに応じてスコアを変更する
1. 新しいスコアに基づく Top 10 リストへの予想される変更を Fulfillment Product Management Team と話し合う

Fulfillment Product Management Team との合意により、Support は Top 10 リストを可能な限り安定させ、以下の場合にのみ変更します。

- Top 10 の項目が過去 1 か月以内に修正または別の方法でクローズされた場合
- 例外的に重要度の高い項目が出現し、Top 10 に追加する必要がある場合（その場合は別の項目が排除されます）
- Fulfillment と Support が、Top 10 内の優先度を顧客や Support のニーズをより正確に反映するように変更すべきだと合意した場合

#### Support Priority Score {#support-priority-score}

L&R Support は、L&R の誰もがリスト上のどの Issue または Epic についても最も適切な優先度を比較的簡単に決定できるようにしたいと考えています。そして、合理的に一貫性があり、事実に基づいた決定を可能にするフレームワークを持ちたいと考えています。これらの理由から、優先順位付けの際に考慮する一連の要素を定義し、各要素から「スコア」を組み合わせて単一の数値にする簡単な計算機を作成しました。これを `Support Priority Score` と呼んでいます。

##### 要素

1. **持続可能な回避策** はあるか？
   - *例：* Mechanizer や Console Access を必要とするものはすべて持続可能ではない
1. 顧客への影響：**頻度**（毎日、毎週、毎月、…）
1. 顧客と Support への影響：関連サポートチケットのボリューム（**件数**）
1. Support への影響：チケットあたりの解決にかかる **工数**
1. Support への影響：チケット **解決** によるリスクのレベル
1. Support への影響：**支障** のレベル - 関連チケットでの STAR や緊急対応の頻度
1. プロダクト解決による期待される利益：**チケットの予防**
1. プロダクト解決による期待される利益：**チケット TTR の短縮**
   - 工数の予想低下、診断の容易化など
1. プロダクト解決による期待される利益：**ユーザビリティ向上、SSAT**
1. プロダクト解決による期待される利益：**売上増加**
   - 失注の減少（*例：* クレジットカードのセキュリティが不十分でユーザーがサブスクリプションを購入できず、無料ユーザーのままになるか別のプラットフォームに移る）
1. プロダクト解決による期待される利益：有効なサブスクリプションによる **プロダクト可用性** の向上（顧客満足度の向上）

特定の Issue または Epic の重要性の全体像を描くためには、すべての要素を考慮する必要があります。とはいえ、これらは一般的なガイドラインと考え、すべての要素について確固たるデータを集めずに決定する余地を残しています。言い換えれば、手元の情報を使って最善の判断を下します。

##### 計算機

この計算機はシンプルな [スプレッドシート](https://docs.google.com/spreadsheets/d/1pjntNPQ_7F8ZTWvGxl8w4msMDg2tYTIMQqGP-5O2WUY/edit#gid=581132234) です。
右側に手順があります。各要素の値を入力するだけで、Priority Score が自動的に計算されます。さらに、スコアの下には自動生成された Markdown スニペットがあり、それをコピーして Issue または Epic の説明欄の末尾に貼り付けることができます。

主観的であって客観的ではないのに、なぜ計算機があるのでしょうか？計算機は考慮すべき要素を思い出させてくれ、それらを一貫して組み合わせる標準的な方法を提供してくれます。

#### Epic とその Issue の 1 つ以上が両方ともリストにある場合の対処方法

<!-- See https://gitlab.com/gitlab-com/support/licensing-subscription/fulfillment-requests/-/issues/10 -->
Support の関心が Epic 全体にあるのか、子 Issue や子 Epic の 1 つ以上だけにあるのかを明確にしたいと考えています。プロセスはこの 2 つの状況で少し異なります。

##### 状況 1

Support は、Epic 全体が対処され、解決されることを望んでいます。個別の子 Epic と子 Issue がリストに表示されることはここでは有用ではありません。Epic の進捗だけが重要です。この状況では、次のことを行います。

1. 現在 `~Support Priority::1-4` ラベルが付いているすべての子 Epic と子 Issue のラベルを `~Support Priority::See Epic` に変更します（*注: ラベル変更された項目は Epic／Issue ボードに表示されなくなります*）。
1. Epic に適切な Support Priority が設定されていることを確認します

このようにすることで、リストには Epic だけが表示・追跡されます。私たちが関心を持つ子の 1 つ以上が Epic から削除された場合、その時点でそれらの子を再度優先順位付けしてリストに戻すべきです。`~Support Priority::See Epic` ラベルが付いていながら関連する Epic を持たない項目を探すことで、このタイプのイベントを検出できます。

### 状況 2

Epic は私たちにとって関心のある項目ではなく、むしろ子の 1 つ以上（ただしすべてではない）が関心の対象です。この状況では、次のことを行います。

1. Epic から Support Priority ラベルを削除します（これにより Epic がリストから削除されます）
1. 子の Support Priority ラベルは保持し、リストに残します

### Fulfillment Section 開発チームから支援を得る方法

バグや機能リクエスト以外の Issue について Fulfillment 開発セクションのいずれかのサブグループから技術支援が必要な場合は、GitLab.com を使用して Issue を作成して支援を依頼できます。このプロセスのワークフローは、ハンドブックの次のセクションで文書化されています：[GitLab 開発チームへの正式な支援依頼に GitLab.com を使用する方法](/handbook/support/workflows/how-to-get-help#how-to-formally-request-help-from-the-gitlab-development-team)。
