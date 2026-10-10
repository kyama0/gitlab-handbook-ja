---
title: アカウントエスカレーションに関する Support Engineer ガイド
description: Support Engineer がアカウントエスカレーションを取り扱う方法のガイダンス
upstream_path: /handbook/support/workflows/escalations-support_engineer/
upstream_sha: 2c77a1f5b8c8a80cb7b5151ff11cfad84f98bfbb
lastmod: "2026-10-08T07:22:21-07:00"
translated_at: "2026-10-10T07:02:52+00:00"
translator: claude
stale: false
---

## 概要 {#overview}

このページは [顧客アカウントのエスカレーション](/handbook/customer-experience/csm/escalations/)において Lead Support Engineer の役割を担う Support Engineer 向けのガイドです。

アカウントエスカレーションは、Support Engineering（Support Manager または Engineer）が [カスタマーエマージェンシーをエスカレーションに変換するプロセス](/handbook/support/workflows/emergency-to-escalation-process)を通じて開始する場合や、[STAR](/handbook/support/internal-support/support-ticket-attention-requests)の結果として開始される場合があります。Customer Success Team も [アカウントエスカレーションを開始する](/handbook/customer-experience/csm/escalations/#initiating-managing-and-closing-an-escalation) ことができ、エスカレーションの種類（すべてのアカウントエスカレーションが Support の関与を必要とするわけではありません）と [重大度](/handbook/customer-experience/csm/escalations/#definitions-of-severity-levels)に応じて Support チーム に支援を依頼します。

### アカウントエスカレーションチーム {#account-escalation-team}

各エスカレーションには [Escalation DRI](/handbook/customer-experience/csm/escalations/#escalation-dri)がおり、エスカレーションを成功に導くために貢献するメンバーのチームを率います。チームは以下のロールの一部（最低でも Escalation DRI、Lead Support Engineer、および Support Manager DRI）またはすべてで構成されます。

- Escalation DRI（CSM、AE、または CSE manager）
- Lead Support Engineer（エスカレーション対象のアカウントに [ASE](/handbook/support/enhanced-support-offerings/offering-assigned-support-engineer/)がいる場合は、可能な限りその ASE が担当します。同時に複数のアカウントエスカレーションを担当する ASE は、優先順位を付ける必要がある場合があります）
- Support の対応を担当する Support Manager DRI（エスカレーション対象のアカウントに ASE がいる場合、該当地域に Regional ASE Manager がいれば、その人を DRI とすることを優先します。それ以外の場合は Global Support Leadership が DRI です）
- 関与するその他の CSM Leader または Account Manager
- Product Manager
- Development Engineer
- セカンダリまたはバックアップの Support Engineer

## Lead Support Engineer の責務 {#responsibilities-of-the-lead-support-engineer}

Lead Support Engineer は以下の目標を持ちます。

### システムアーキテクチャ、最近の変更点、および現在の問題を文書化する {#document-the-system-architecture-recent-changes-and-current-issues}

カスタマーエマージェンシーの最中は、何が変更され、何がすでに調査済みかを把握し続けるのが困難です。アカウントエスカレーションは数日から数週間にわたることがあるため、システムアーキテクチャの詳細、出来事のタイムライン、および実施した緩和策を文書化しておくことが非常に重要です。Google Document、Field Notes Issue、または Request for Help Issue が適している場合があります。

- 関与する Account Manager や Executive のために、ハイレベルなサマリーを保持します。
- 他の Engineer がトラブルシューティングを容易に支援できるよう、技術調査と緩和対応の詳細なメモも残します。

### お客様が望む最終的なゴールと、そのゴールに到達するための基準を特定する {#identify-the-customers-desired-end-goal-and-criteria-for-reaching-that-goal}

中核となる課題を説明する問題ステートメントを作成し、その問題ステートメントの解決に向けてお客様と協働していることを確認します。エスカレーション中、お客様はさまざまな問題や懸念を提起することがあり、それらが問題ステートメントの解決に直接影響するのか、それともサイドイシューなのかをトリアージする必要があります。お客様の満足度を確保するために例外を設けることはありますが、エスカレーションの根本にある主要な課題に集中し、その他の Issue は新しいサポートチケットで対応するのが最善です。

### 解決を支援するために必要な技術的リソースを判断する {#determine-what-technical-resources-may-be-needed-to-assist-in-resolution}

中核となる課題が特定できたら、他の Support Engineer に支援を依頼することをためらわないでください。もう一組の目があると常に役立ちますし、技術調査の支援を得ることで、エスカレーション全体の舵取りに集中できます。多くの場合、セカンダリまたはバックアップの Engineer はエスカレーションに対する重要な貢献者になります。

重大度、優先度、専門性に応じて適切なリソースをアサインするため、Support Manager DRI に連絡してください。

エスカレーションのスコープが第 2 の Engineer の関与を必要とする場合は、Support Manager DRI と協力して適切なリソースを特定し、セカンダリ Engineer がどのように支援するかを定義し、そのセカンダリ Engineer の既存の業務が再アサインされるようにします。

### Support Manager DRI、CSM Leader、Account Manager とのコミュニケーションを調整する {#coordinate-communication-with-the-support-manager-dri-csm-leader-and-account-manager}

- お客様への最善の更新方法を判断します。定例の同期コール、サポートチケット内での更新、または外部 Slack チャンネルでの更新が考えられます。お客様とコミュニケーションを取る際は [重大度レベル](/handbook/customer-experience/csm/escalations/#definitions-of-severity-levels)を考慮してください。
- お客様と共有する技術的詳細のレベルを判断します。お客様はログ分析を一緒に行いたいかもしれませんし、調査結果と推奨事項のみを受け取りたい場合もあります。
- 社内のステークホルダーが最新の状況を把握できるよう、エスカレーション用の Slack チャンネルに社内向けの更新を投稿します。1 日に複数回の更新が必要になる場合もあります。調査からの更新、根本原因の特定と解決に向けた全体的な進捗、GitLab とお客様が次に行うべきステップを含めてください。
- エスカレーションの単一の信頼できる情報源として機能するエスカレーションドキュメント内の現在のステータスも更新する必要があります。

### エスカレーション終了時にサマリーと根本原因分析を提供する {#provide-a-summary-and-root-cause-analysis-when-finishing-the-escalation}

エスカレーションが発生したお客様は通常、自社の Executive チームに提示できる根本原因分析を期待します。

- タイムライン、調査、解決のハイレベルなサマリーを提供します。
- [なぜなぜ分析（Five Whys technique）](https://en.wikipedia.org/wiki/Five_whys)は、問題の説得力のあるサマリーを提供するうえで役立ちます。
- 複雑な問題の場合、技術的な詳細を説明する付録を使うことで、より完全な説明を提供できます。
- エスカレーション後のレトロが有用かどうかを Support Manager DRI と議論します。

### PTO のスケジュール {#schedule-pto}

エスカレーションには相当な時間とエネルギーがかかります。エスカレーションが無事にクローズされた後は、休んで回復するために少し休暇を取ることを検討してください。

## リスク vs. 不確実性 {#risk-vs-uncertainty}

アカウントエスカレーションに取り組んでいる間は、不確実性を管理可能なリスクに変えることを目指してください。例えば:

- お客様が技術的な変更を実施する場合、ドキュメントを案内して何か問題が起きたら オンコール が呼ばれるのを待つのではなく、計画策定に積極的に関与し、お客様が作業を行う際に一緒に立ち会います。
- 変更後にお客様が状況を監視している場合、何か問題が起きたら オンコール が呼ばれるのを待つのではなく、お客様と一緒にリスク領域を監視して状況を評価するためのチェックインのケイデンスを定めます。
- お客様が断続的な問題を経験している場合、状況が発生したときに オンコール が呼ばれるのを待つのではなく、どの診断データを取得すべきかを把握しているブリーフィング済みのステークホルダー集団との特定のコミュニケーション手段を用意します。

要するに、予期せぬインシデントが発生したときにお客様が オンコール エマージェンシーエンジニアを呼ぶことは起こり得ますが、これに頻繁に頼っているのであれば、おそらくプロアクティブさが足りていません。

## コミュニケーションのヒント {#communication-tips}

これらはアカウントエスカレーションに固有のものではありませんが、この時期に特に役立つかもしれません。

- 何を、いつ行うかを伝える。
  - **NG**: 後ほどフォローアップメッセージをお送りします。
  - **OK**: 本日 8p UTC までに :ticket: 012345 経由でフォローアップメッセージをお送りします。
    - 8p UTC までにメッセージを出せない懸念があるなら、代わりにその日の終わりまでに送る旨を、タイムゾーンを添えて伝えます。これはいくらかの不確実性を残しますが、具体的な締切を逃すよりも曖昧な締切を守る方が良いという考えに基づきます。
- コミュニケーションを取る。
  - エスカレーションチャンネルでアクティブに動きます。
  - Support が何をしているか、Support が何にブロックされているか、Support が前進するために何を必要としているかなどが明確であるべきです。
  - Slack のステータスを更新して、エスカレーションが発生したお客様に :bulb: 集中していることを示すことを検討してください。
- 明確である。
  - 何をしているか、何をしていないかを伝えます。他の人に推測させてはいけません。
  - 何かが不明な場合は、質問するか、聞いたと思った内容を確認します。
  - **できない** ことを伝えます。
    - **\_** がわかりません。
    - **\_** に予定が入っています。
    - **\_** でブロックされています。
- 協働する。
  - あなたは素晴らしくて優秀です。すべてを _一人で_ はこなせません。自分のチケットについて助けを求めましょう。
  - 質問をします。何かが自分にとって明確でないなら…それは明確ではありません。私たちの仕事の大部分は、大量の技術情報を取り込み、理解し、優先順位を付け、関係ないものを排除し、お客様に伝えることです。詳細は多く、すでに高ぶっているお客様にさらなる混乱を与えるよりも、何かを明確化するために少し時間を費やす方が良いのです。
- プロアクティブである。
  - 「これは遅れました」よりも「これは遅れる可能性があります」と伝える方が良いです。
- アクション志向（Bias for action）。
- 大変です。バリューに頼りましょう。
