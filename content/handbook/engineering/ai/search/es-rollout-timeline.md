---
title: GitLab.com 上の Advanced Global Search ロールアウト
upstream_path: /handbook/engineering/ai/search/es-rollout-timeline/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## ステップと強化

- 2019-11-05: [Search セキュリティ rapid action](https://gitlab.com/gitlab-org/gitlab/-/issues/35705) 開始。
  - Advanced Global Search は、オンライン化の数時間後に HackerOne によって発見された3つのセキュリティ Issue により、直前2か月間で3回の有効化・無効化を経験しました。[12.3.3](https://about.gitlab.com/releases/2019/10/02/security-release-gitlab-12-dot-3-dot-3-released/)、[12.3.5](https://about.gitlab.com/releases/2019/10/07/security-release-gitlab-12-dot-3-dot-5-released/)、[12.4.1/12.3.6](https://about.gitlab.com/releases/2019/10/30/security-release-gitlab-12-dot-4-dot-1-released/) を参照してください。
  - チームは Issue の発見と修正に体系的なアプローチを取ることを決定しました。
  - [Rapid action 週次アジェンダ](https://docs.google.com/document/d/1PW4x814ItUcgcsz9e6jCu1cTrOeB7zHSjANBiviH6ho/edit#heading=h.mjyv33y6vsrg)。
  - すべてのエンジニアリングの注意（エンジニア2名）がセキュリティ rapid action に集まりました。

- 2019-12-09: [セキュリティ rapid action 完了](https://gitlab.com/gitlab-org/gitlab/-/issues/35705#note_258417259)。
  - 既知のセキュリティ Issue はすべて修正されました。
  - AppSec チームによって [包括的なテストマトリクスのセット](https://docs.google.com/spreadsheets/d/170VAL071pARoYuhiSAgs6_YSTBRZvATkYiE3mQy9FeE/edit#gid=0) が実行されました。

- 2019-12-16:
  - __[Advanced Global Search が GitLab.com 上の gitlab-org グループに対して再有効化されました。](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/1461)__。
    - GitLab 自身の gitlab-org のみが有効化され、セキュリティ rapid action 前の状態に戻りました。
  - CFO からマージン分析が要求され、[コスト見積もり Issue が作成されました。](https://gitlab.com/gitlab-org/gitlab/-/issues/118571)

- 2020-01-15: [コスト分析完了](https://gitlab.com/gitlab-org/gitlab/-/issues/118571#note_272165771)。
  - 休暇のため、[初期見積もり](https://gitlab.com/gitlab-org/gitlab/-/issues/118571#note_268219220) とマージン分析の完了に約1か月かかりました。

- 2020-01-17: [財務承認](https://gitlab.com/gitlab-org/gitlab/-/issues/196973#note_272881031) が完了しました。

- 2020-01-24: [最初の2社の顧客](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/1591) が Advanced Global Search の有効化を予定されました。
  - 初期インデキシング中にメモリ不足によって __[Elasticsearch クラスターノードがクラッシュ](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/1591#note_277584126)__ しました。
  - 有効化プロセスは停止され、Elasticsearch クラスターはオフラインになりました。
  - __Advanced Global Search サービスは完全にオフラインになりました。__

- 2020-01-27: [このインシデントのレトロスペクティブ](https://gitlab.com/gitlab-org/search-team/team-tasks/-/issues/8) が開催されました。
  - インフラストラクチャチームと共にトラブルシューティングを継続しました。
  - Elastic サポートエンジニアとのエンゲージメントを開始しました。

- 2020-01-30: Elastic サポートの助けを借りて [問題の根本原因を発見](https://gitlab.com/gitlab-org/gitlab/-/issues/199887)。
  - メモリ不足は、取り込み待ちのかなり大きなバルクリクエストと小さなヒープの組み合わせによって引き起こされました。
  - [Elasticsearch Bulk Import API と Redis sorted set を活用](https://gitlab.com/gitlab-org/gitlab/-/issues/34086) して、インデキシングジョブをスケールさせる作業を開始しました。

- 2020-02-04:
  - [GitLab 自身の gitlab-org と gitlab-com グループを再有効化しました。](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/1608)
  - [最初の顧客を有効化しました。](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/1626)

- 2020-02-09 〜 2020-03-05:
  - 新しいグループを1つずつインデキシングして本番環境を監視しながら、新しい顧客を有効化することを反復的に学びました。同時に、バッチインデキシング用のツールとプレイブックを開発しました。

- 2020-02-29: [Add a bulk processor for elasticsearch incremental updates](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/24298) をマージ。
  - インクリメンタルデータベース更新をバッチで処理します。より効率的で、Elasticsearch がビジー状態のときの負荷を下げられます。
  - Redis sorted set を使用し、インデキシングジョブの重複を排除できます。Elasticsearch クラスターの負荷を下げるのにも役立ちます。

- 2020-03-06:
  - [Use less expensive index_options](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/25992) をマージし、__インデックスサイズを 36.6% 削減。__
  - [Bulk API 関連の Elasticsearch バージョン互換性修正](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/26639) をマージ。

- 2020-03-11: [新しいグループのバッチ追加の最初の試みが成功](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/1724)。さらに30グループが有効化されました。GitLab 自身のグループを含め、有効化されたグループの合計は39でした。

- 2020-03-12: GitLab.com で Routing 機能がオンになり、結果として [5x-6x のレイテンシー改善](https://gitlab.com/gitlab-org/gitlab/-/issues/196838#note_303927892) が見られました。

- 2020-03-26: [Use prefix search instead of ngrams for sha fields](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/27597) をマージし、インデックスサイズをさらに 12.3% 削減、__総インデックスサイズの削減は 44.4%__。

- 2020-04-07: __再インデキシング__ プロセスを最適化し __ゼロダウンタイム__ を達成。
  - GitLab.com で [Elasticsearch インデックスエイリアス](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/1907) を使用して、再インデキシング操作をより柔軟、効率的、堅牢にしました。
  - GitLab.com 上で再インデキシングはダウンタイムを必要としなくなりました。
  - [ゼロダウンタイム再インデキシング関連作業を開始](https://gitlab.com/groups/gitlab-org/-/epics/2752)。

- 2020-04-08: さらに多くのグループが有効化され、有効化されたグループの合計は約 [__3%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/1788)。

- 2020-04-09:
  - さらに多くのグループが有効化され、有効化されたグループの合計は約 [__6%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/1925)。
  - [グループの初期インデキシングを高速化する方法の調査](https://gitlab.com/gitlab-org/gitlab/-/issues/214280) を開始
    - Sidekiq ワーカー数の増加について議論しました。
    - [GitLab.com の他の部分への影響も評価しました。](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/377)

- 2020-04-27: さらに多くのグループが有効化され、有効化されたグループの合計は約 [__9%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/1977)。

- 2020-04-28: GitLab.com 上で Advanced Global Search のロールアウトから学んだ教訓を共有する [ブログ記事](https://about.gitlab.com/blog/2020/04/28/elasticsearch-update/) が公開されました。

- 2020-04-30: さらに多くのグループが有効化され、有効化されたグループの合計は約 [__12%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2012)。

- 2020-05-08: [リポジトリインデキシングジョブを Redis sorted set に移行する作業](https://gitlab.com/gitlab-org/gitlab/-/issues/205178) を開始。これにより以下が支援されます:
  - インデキシングのパフォーマンス向上。
  - インクリメンタルインデックス更新と初期インデキシングを別々のジョブキューに分離し、両方のインデキシングジョブタイプを高速化。

- 2020-05-20: さらに多くのグループが有効化され、有効化されたグループの合計は約 [__16%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2168)。

- 2020-05-24: さらに多くのグループが有効化され、有効化されたグループの合計は約 [__17%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2185)。

- 2020-05-27: [remove partial word matching from code search](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/32771) をマージ。これによりストレージサイズの大幅な削減が見込まれます。

- 2020-06-04: GitLab.com で [もう1回の再インデキシング](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2213) を実施。最後のストレージ最適化変更が適用されました。これにより以前の最適化からさらに 75% のストレージを節約し、結果として __インデックスサイズの合計 86.1% 削減__ になりました。

- 2020-06-09: さらに多くのグループが有効化され、有効化されたグループの合計は約 [__20%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2233)。

- 2020-06-10: さらに多くのグループが有効化され、有効化されたグループの合計は約 [__21%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2234)。

- 2020-06-14: さらに多くのグループが有効化され、有効化されたグループの合計は約 [__22%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2209)。[Sidekiq ワーカーが追加され](https://gitlab.com/gitlab-com/gl-infra/k8s-workloads/gitlab-com/-/merge_requests/237)、このロールアウト中の GitLab.com 全体への影響が密接にモニターされました。Elasticsearch ジョブの Sidekiq ワーカー数を倍増することは安全であるという結論に達しました。

- 2020-06-15: さらに多くのグループが有効化され、有効化されたグループの合計は約 [__25%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2275)。

- 2020-06-15: さらに多くのグループが有効化され、有効化されたグループの合計は約 [__26%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2276)。[Sidekiq ワーカー数が再度倍増](https://gitlab.com/gitlab-com/gl-infra/k8s-workloads/gitlab-com/-/merge_requests/266) され、モニタリングデータからこのロールアウトで使用されている Sidekiq ワーカー数を維持しても安全であることが示されました。処理能力の増加により、はるかに高速なロールアウトが可能になります。

- 2020-06-16: さらに多くのグループが有効化され、有効化されたグループの合計は約 [__27%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2279)。

- 2020-06-16: さらに多くのグループが有効化され、有効化されたグループの合計は約 [__39%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2280)。

- 2020-06-17: さらに多くのグループが有効化され、有効化されたグループの合計は約 [__64%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2287)。

- 2020-06-23: さらに多くのグループが有効化され、有効化されたグループの合計は約 [__75%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2307)。しかし、このバッチ有効化中に Elasticsearch クラスターで [高 CPU 使用率](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2318) Issue が発生しました。コードアナライザーの問題のある正規表現が原因と考えられました。

- 2020-06-24: [問題のある正規表現が修正されました](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/35292)

- 2020-06-29: コードアナライザー正規表現の修正に続いて、[Elasticsearch クラスターの再インデキシングがもう1回成功裏に行われました](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2335)。

- 2020-07-02: [新しく作成された有料グループがインデックスされる](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/35172) ようにする新機能が追加されました。

- 2020-07-06: さらに多くのグループが有効化され、有効化されたグループの合計は約 [__87%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2371)。

- 2020-07-08: さらに多くのグループが有効化され、有効化されたグループの合計は約 [__93%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2372)。

- 2020-07-09: さらに多くのグループが有効化され、有効化されたグループの合計は約 [__98%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2373)。

- 2020-07-10: GitLab.com 上のすべての有料グループが有効化されました！
