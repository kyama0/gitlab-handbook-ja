---
title: 顧客緊急対応のレトロスペクティブ
category:
description: ""
upstream_path: /handbook/support/workflows/customer-emergency-retro/
upstream_sha: 0353e616a41b1d1664a95cc83c80b01f990a912f
translated_at: "2026-05-08T20:30:00Z"
translator: claude
stale: false
---

GitLab サポートチームは、顧客緊急対応中の問題解決に多大な労力を注いでいます。緊急対応の最中に、私たちは支援している特定の顧客に限らない課題を特定することがあります。これらの状況についてレトロスペクティブ (または「レトロ」) を行うことで、緊急対応中に得た洞察を確実に保持できます。レトロスペクティブで提起される問いは、私たちの製品やプロセスを全員の利益のために改善する助けとなります。

## :feather: レトロの原則

念頭に置いておくべき主要な原則をいくつか紹介します:

- すべての緊急対応に対してレトロを実施する必要はありません。
  - 緊急対応中に「将来 _この件_ をもっと上手く扱う方法が本当に必要だ」と感じたなら、おそらくその緊急対応に対してレトロを実施すべきでしょう。
- レトロは、チームがプロセスの改善点を特定するための [非難なき機会](https://docs.gitlab.com/ee/tutorials/scrum_events/standups_retrospectives_velocity.html#sprint-retrospectives) です。
- :feather: レトロはできるだけ軽量であるべきです。
  - レトロは社外向けの包括的なレポートではありません。「完璧を善の敵にしてはいけません」。プロジェクトにアクセスできる GitLab チームメンバーは、例として [このレトロ](https://gitlab.com/gitlab-com/support/readiness/emergencies/-/issues/3616) を参照できます。
- :reminder_ribbon: [すべての問題が、それを防ぐための新しいプロセスにつながるべきではありません。](/handbook/values/#accept-mistakes)。
- :repeat: レトロは可能な限り同期的に行うべきです。同期的なレトロを推奨するのは、[安全な環境を確立しやすい](/handbook/engineering/careers/management/group-retrospectives/#establishing-a-safe-environment) からであり、また非同期コミュニケーションに偏ることでレトロの効率が下がる可能性があるためです。

## :musical_score: レトロの実施

緊急対応 (またはその他の異常な状況) に対してレトロを実施すべきだと、誰でも提案できます。レトロを実施すべきだと提案するには、緊急対応の Issue に `retro` ラベルを追加してください。特定の緊急対応に対してレトロを実施することが決まったら、このセクションがガイドとなります。

理想的には、緊急対応に直接関与した誰かが、緊急対応に積極的には関与していなかった誰かを特定して同期的なレトロを主導してもらいます。30 分のセッションで通常は十分です。レトロは緊急対応の直後に実施する必要はありませんが、コンテキストが失われないように、緊急対応が解決された直後に行うべきです。

レトロを実施する人は、レトロの前にチケットおよび関連する Slack スレッドや Issue を確認すべきです。(目的は、レトロを効率的にするための十分なコンテキストを得つつ、オープンマインドを保ち、レトロ前に結論を出さないようにすることです。)

通常、緊急対応に参加した人はレトロの追加準備は不要です。緊急対応中に取ったメモで十分です。

レトロの同期セッション中:

1. [トラッカー](https://gitlab.com/gitlab-com/support/readiness/emergencies/-/issues/?sort=created_date&state=opened&first_page_size=100) の Issue に `retro` ラベルが適用されていることを確認します
1. 緊急対応に応答した SE が簡単なタイムラインを提供します (レトロを実施する人は、ギャップを埋めるための質問をします)
1. レトロを実施する人と緊急対応に応答した SE が、何が上手くいったか、何がより上手くいけたか、何をすべきか/変えるべきかの提案を一緒に検討します
1. レトロ Issue にオープンな質問または提案された可能性のあるアクションアイテムがある場合
    1. `retro-actions` ラベルを適用します
    1. `/due in 1 week` を使用して Issue の期限を設定します
    1. 緊急対応に応答した SE のマネージャーに Issue を割り当てます
1. 複数のリージョンに影響し、複数のエンジニアが関与する緊急対応の場合、最初に応答したエンジニアがデフォルトでレトロの DRI となります。このエンジニアはレトロのファシリテーターと協力し、確立されたプロセスに従います。次に、インシデント対応に参加した他のすべての SE を含めて、各シフト中に発生した出来事を文書化する必要があります。

### 想定されるレトロスペクティブの所見

レトロスペクティブの提案や所見はさまざまです。よくある所見には次のようなものがあります:

- 新しいバグ Issue
- 新しい機能提案
- 既存の Issue や機能提案における PM へのチェックイン
- 新しいナレッジベース記事
- ハンドブックのプロセス更新

顧客緊急対応のレトロに関連する Issue や MR を作成する際は、`customer-retro` ラベルを適用してください。

### レトロからの所見への対応

レトロの所見はレビューされ、対応されるべきです。すべての提案は真剣に受け止められるべきです。ただし、各アクションアイテムは義務ではありません。正しい対応は「はい、それは問題ですが、今すぐ解決する価値のある問題ではありません」かもしれません。時間が経つにつれて、レトロの所見の傾向は、私たちが解決を選ぶ問題を判断する助けとなります。

通常、緊急対応を担当したサポートエンジニアが、何が上手くいったか、何を修正・改善する必要があるか、どんな質問に答える必要があるかを浮き彫りにする作業を行います。SE は適切な場合は直接アクションを取り、残りのアイテムはリーダーシップが対応するために残します。

説明責任の観点から、レトロからの質問やアクションアイテムを前進させる DRI はサポートマネージャーが担います。サポートリーダーは、所見のあるレトロが滞らないように、定期的に [:rewind: Retros](https://gitlab.com/gitlab-com/support/readiness/emergencies/-/boards/9004657?label_name[]=retro) Issue ボードをレビューすることが推奨されます。

## :robot:  自動化

[顧客緊急対応](customer_emergencies_workflows) ローテーションへの受信ページごとに、`gitlab-com/support/readiness/emergencies` の [Issue トラッカー](https://gitlab.com/gitlab-com/support/readiness/emergencies/-/issues/?sort=created_date&state=opened&first_page_size=100) にレトロスペクティブ Issue が自動的に作成されます。

自動化はサポートレディネスによって管理されています。このプロセスへの変更を提案したい場合は、[RFC から始めて](/handbook/support/managers/change-management.md#start-with-a-request-for-comments-rfc) ください。

アクセス権を持つ GitLab チームメンバーは、[:rewind: Retros](https://gitlab.com/gitlab-com/support/readiness/emergencies/-/boards/9004657?label_name[]=retro) Issue ボードを確認できます。

## 追加情報

- [グループレトロスペクティブ](/handbook/engineering/careers/management/group-retrospectives.md)
