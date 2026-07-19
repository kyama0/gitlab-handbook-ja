---
title: '重要度'
description: '変更およびシステムの重要度に関するドキュメント'
upstream_path: "/handbook/eta/css/criticalities/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
translated_at: "2026-07-19T06:15:29+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

## 変更の重要度

[インフラストラクチャの変更管理の重要度](/handbook/engineering/infrastructure-platforms/change-management/#change-criticalities)に合わせて、Customer Support Systems は適切な計画期間を決定するために、変更を C1 〜 C4 のスケールで定義します。

どのデプロイメントに Issue/MR が含まれるかを決定する際に、重要度が適用されます。

### 変更の重要度の定義

#### 変更の重要度 1

これらは、Support Engineer または顧客の体験を大きく変える可能性がある、高い影響または高いリスクを伴う変更です。変更によって環境がダウンする場合は、常に C1 に分類されます。

重要度 1 のリクエストの例:

- 広く使用されている Zendesk View の機能を変更する
- 大幅なプロセス変更をサポートするように Zendesk を変更する
- 使用中の SLA ポリシーを変更する

#### 変更の重要度 2

これらは、Support Engineer または顧客の体験に大きな影響を与えることは想定されないものの、予期しない事態が発生した場合に影響を与えるリスクが依然としてある変更です。

重要度 2 のリクエストの例:

- Support Portal のテーマを更新する
- 新しいチケットフォームを追加する
- SSAT または Support KPI に関連するトリガー／自動化を変更する

#### 変更の重要度 3

これらは、悪影響のリスクがない、または非常に低い変更ですが、依然として固有の複雑さがあるか、完全に自動化されておらず手作業なしでは実施できないものです。

重要度 3 のリクエストの例:

- Support フォームに新しいフォームフィールドを追加する
- 期限切れの Zendesk 組織を一括削除する
- Support Engineer にとって便利になる新しい Zendesk アプリを追加する
- アクティブなマクロを削除または無効化する

#### 変更の重要度 4

これらは、極めて低リスクで一般的に実行される変更、または完全に自動化されている変更です。多くの場合、実質的な統制手段としてよりも、可視性のために主に記録される変更です。

重要度 4 のリクエストの例:

- ZD 組織にユーザーを追加または削除する
- マクロを作成または更新する

### 変更の重要度を決定する

Issue または MR への対応を最初に開始するときは、目の前のタスクの変更の重要度を決定してください。

変更の重要度を決定するためのガイダンスについては、[変更の重要度の定義](#change-criticality-definitions)を参照してください。

重要度レベルを決定する際には、常に最善の判断をしてください。迷った場合は、Customer Support Systems のリーダーシップに連絡して支援を求めてください。

## システムの重要度

### システムの重要度の定義

この定義については、[重要システム階層の指定](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/#designating-critical-system-tiers)を参照してください。

### Customer Support Systems のシステム重要度

{{% alert title="注記" color="warning" %}}

これは Customer Support Systems チームの唯一の信頼できる情報源（SSoT）として機能します。テーブルを変更する必要がある場合は、下記テーブルの生成に使用される `data/css_criticalities.yaml` ファイルを変更する MR をハンドブックに作成してください。

{{% /alert %}}

{{< eta/css-criticalities >}}
