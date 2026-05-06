---
title: "GitLab サーバー移行プレイブック"
upstream_path: /handbook/customer-success/playbooks/server-migrations/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T02:49:20Z"
translator: claude
stale: false
---

追加のカスタマーサクセス ハンドブックコンテンツについては、[カスタマーサクセスホームページ](/handbook/customer-success/)を参照してください。

---

このページは、[GitLab サーバー移行プレイブック](https://docs.google.com/spreadsheets/d/1cP6czE6zZ9EWT5HGOF2MGP2repiV0GI8a8V2i9iK9vM/edit#gid=0) *（内部リンク）* を補足するためのものです。以下の情報に関する追加のコンテキストとして、[Skills Exchange のサーバー移行セッション](https://youtu.be/DUPsiUHnfZI) *（社内利用のみの非公開動画）* も参照してください。

このプレイブックは、GitLab から GitLab への移行のみを対象としています。
他の SCM システムからの変換や、GitLab サーバーの統合（複数の GitLab サーバーを単一インスタンスに統合）は対象外です。

## 移行の種類

このプレイブックは以下の移行をサポートしています…

- GitLab オンプレミス（ベアメタル/VM）→ GitLab オンプレミス。
- GitLab オンプレミス → クラウド上のセルフマネージド GitLab（VM ベース）。
- GitLab オンプレミス/クラウド → GitLab SaaS
- GitLab オンプレミス/クラウド → Kubernetes

これらの各移行については、プレイブック本体でより詳細に説明しています。
また、これらの各移行にはそれぞれ Gainsight 内に専用のプレイブックがあります。

**注意:** *GitLab は、現在のユーザー数と予想される成長を考慮して、[標準リファレンスアーキテクチャ](https://docs.gitlab.com/ee/administration/reference_architectures/)を使用することを強くお勧めします。これらのリファレンスアーキテクチャからの逸脱は、信頼性とパフォーマンスの低下につながる可能性があります。*

## 移行方法論

GitLab の移行には様々な方法論があります。このセクションでは、最も一般的な方法論とそれぞれのメリット・デメリットを詳述します。

### GitLab Geo

[GitLab Geo](https://docs.gitlab.com/ee/administration/geo/index.html) は GitLab Premium に含まれる組み込み機能です。プライマリサーバーに加えられたすべての変更が自動的に更新される読み取り専用のレプリカサーバーを作成できます。また、ディザスタリカバリのための手動フェイルオーバーも可能です。このフェイルオーバー機能により、GitLab Geo はサーバー移行に優れた選択肢となっています。

**メリット**

- GitLab と密に統合されており、サポートされた機能。
- ほぼリアルタイムのデータ同期。
- 古いサーバーから新しいサーバーへのフェイルオーバーという単純な移行が可能。
- すべての方法の中で最短のダウンタイムが期待できる。
- 中規模サーバーには最良の選択肢。

**デメリット**

- プライマリサーバーに常時接続する必要があるため、テスト目的で新サーバーを分離することが難しい。
- 一部のデータはレプリケートされない。[レプリケートされるデータタイプの完全なリストはこちら](https://docs.gitlab.com/ee/administration/geo/replication/datatypes.html)。レプリケートされないデータは後から Rsync で同期する必要がある。
- Geo のセットアップは複雑。
- Geo は移行に追加の複雑さをもたらす（つまり、動く部品が多く、問題が発生する可能性が高まる）。

### Rsync

Rsync はリモートの場所からローカルマシンにファイルを転送するための標準的な Linux/Unix ツールです。

**メリット**

- よく知られており、ドキュメントも充実。
- 誰でも利用できる。すべてのディストリビューションに含まれる標準 Linux ツール。
- 経験豊富なシステム管理者であれば誰でも Rsync を使ったことがある。ほぼ誰にでも馴染みのあるツール。
- フォローアップの Rsync が小さくなるため、ダウンタイムが短縮される。ただし、初回の Rsync のタイミングによって異なる。
- 非常に大規模な移行には最良の選択肢。

**デメリット**

- 遅い場合がある。
- 複数回の Rsync が必要。通常は事前に新サーバーをプリポピュレートするための予備 Rsync と、初回同期以降の新しいデータを「追いつく」ための 2 回目の Rsync が必要。
- 複数回の Rsync を実行すると、git リポジトリファイルとの予期しない相互作用が発生する可能性がある。最初の Rsync 以降はすべて *--delete* フラグを使用すること。

### GitLab バックアップ＆リストア

GitLab には[バックアップ＆リストア機能](https://docs.gitlab.com/ee/administration/backup_restore/index.html)が含まれています。

**メリット**

- GitLab バックアップはサーバーの全データをひとつのパッケージにまとめたもの。他の方法（Rsync など）で別のデータタイプを転送している場合は、特定のデータのみをバックアップするようにカスタマイズすることもできる。
- 小規模サーバーに最適で、おそらく小規模サーバーには最良の選択肢。

**デメリット**

- サーバーが大きくなるにつれて、全データのフルバックアップに時間がかかる（リストアも同様）。さらに大きなサイズではバックアップが失敗する可能性もある。
- バックアップ・転送・リストアを待つ間、ダウンタイムが長くなる。
- 新サーバーを事前にプリポピュレートして差分だけ転送する機会がない。

### GitLab プロジェクトのエクスポート＆インポート

GitLab には、サーバー間でプロジェクトをプロジェクト単位で転送できる[エクスポート/インポート機能](https://docs.gitlab.com/ee/user/project/settings/import_export.html)があります。

**メリット**

- PS の支援なしにセルフマネージドから GitLab SaaS に移行する唯一の方法。

**デメリット**

- PS の支援なしにセルフマネージドから GitLab SaaS に移行する唯一の方法。
- 非常に手作業が多く低速。プロジェクト単位で実行する必要がある。
- 転送元と転送先のサーバーのバージョンが非常に近い必要がある。[互換バージョンはこちら](https://docs.gitlab.com/ee/user/project/settings/import_export.html#version-history)を参照。

## ツール＆リソース

CSM と顧客が移行プロセスを支援するために利用できるチームとツールがあります。

- [GitLab Performance Tool](https://gitlab.com/gitlab-org/quality/performance) - 新サーバーのパフォーマンステストに最適なツールで、品質チームが自社のリファレンスアーキテクチャのテストに使用しているもの。
- [GitLab Smoke Tests](https://gitlab.com/gitlab-com/support/toolbox/gitlab-smoke-tests) - GitLab CI を使用して、GitLab の機能が正常に動作しているかを迅速にテストするテスト。
- [GitLab サポート](https://gitlab.com/gitlab-com/support/support-team-meta) - Premium サポートを持つ顧客が移行中に障害問題が発生した場合、サポートチームが支援できる。
- [Reference Architecture グループ](https://gitlab.com/gitlab-org/reference-architectures) - GitLab のリファレンスアーキテクチャを構築・維持する [GitLab Delivery: Operate](../../engineering/infrastructure-platforms/gitlab-delivery/operate/_index.md) チームが主導する内部グループ。ドキュメント化されていない新しい環境設計に対して、ハイレベルなアドバイスと妥当性確認を提供できる。
- GitLab Geo - このチームへの連絡は、社内 Slack の **#g_geo** チャンネルが最善。
