---
title: "CS Rep のアカウントとオポチュニティ割り当てプロセス"
description: "このドキュメントは、CSM と SA がどのようにアカウントとオポチュニティに割り当てられるかを説明します"
upstream_path: /handbook/sales/field-operations/customer-success-operations/cs-rep-assignment-process/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-12T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-06-27T22:14:31+00:00"
---
<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## 目的

オーナーシップの追跡、報酬および President's Club のための追跡を最終的な目的として、CSM と SA が Gainsight および Salesforce にどのように、なぜ、いつ、どこに登録されるかを文書化します。

追跡用の [GitLab issue](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues/2974)。

### CSM

CSM マネージャーは、Gainsight で適切なアカウントに CSM を追加します。そこから、リアルタイム（即時）のルールが、このデータを Salesforce の `Customer Success Manager` フィールド（API フィールドは `Technical_Account_Manager_LU__c`）にプッシュします。Salesforce はその後、アカウントの CSM を取得し、それをオポチュニティの Customer Success Manager フィールド（API フィールドは `Technical_Account_Manager__c`）にスタンプします。

#### 影響

これにより、アカウントオーナーシップ、ロードバランシングのための CSM のワークロード、報酬の支払い、および President's Club の追跡が可能になります。

#### 自動化

1. Gainsight アカウントの CSM は Salesforce アカウントに同期されます
   1. これは Gainsight のリアルタイムルール（「Push CSM change to SFDC」）であり、Gainsight は新しい値を Salesforce に即座に同期しようとします
   1. また、SFDC と GS の CSM 値を比較し、GS と一致しない SFDC の値を更新する必要のある日次キャッチルール（「Load to SFDC: Catch for non-synced CSM」）もあります
1. Salesforce アカウントの CSM は、Salesforce Flow を使用して、オープンからクローズまで、すべてのステージでオポチュニティにスタンプされます。アカウントで CSM が更新されると、その Flow を使用してすべてのオープンなオポチュニティにプッシュされます。各更新は即時で、バッチの一部ではありません。詳細については [Issue](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/3852) を参照してください。
   1. オーバーライド: CSM は、特定のプロファイル（sales comp、finance、SOPS、integration user、sys admin）によってオープンなオポチュニティで直接オーバーライドできます。それぞれが
   1. CSM はオポチュニティクローズ時にオポチュニティでロックされます

### SA

SA は、Salesforce の Account オブジェクトに `Solutions Architect` として自分自身を追加します。報酬と President's Club のために、SA は支払いを受けるためにオポチュニティの `Primary Solution Architect` としてリストされる必要があります。これは手動プロセスで、Salesforce で個々の SA が行います。SA は、両方のフィールド（アカウントとオポチュニティ）の編集アクセスを持っています。SA は、オープンな間のみオポチュニティフィールドを編集でき、クローズされると、特定のプロファイル（sales comp、finance、SOPS、integration user、sys admin）のみが編集できます。

#### 影響

最終的な結果として、平均的な SA のワークロード、報酬の支払い、および President's Club の追跡を知ることができます。

#### 自動化

1. 新しいオポチュニティが作成されると、アカウントの SA が新しいオポチュニティにコピーされます。影響: SA がアカウントに自分の名前を追加することが彼らの利益になります！

#### 制限事項/課題

注: 以下のすべての制限事項は、SA を Primary SA として、また活動がログに記録される（Salesforce タスク）ことに関連しています。

1. Primary と supporting SA: 単一のオポチュニティに複数の SA が関与する場合、これは問題になる可能性があります。たとえば、SA #1 が Primary SA としてリストされ、SA #1 がこのオポチュニティに活動をログに記録しますが、同じオポチュニティに SA #2 も活動をログに記録することになります。これは、Brian Wald のチーム（SFO チーム）の SA に特に共通しています
1. SA の活動が、別のオポチュニティにマージされた、または重複したオポチュニティとしてマークされたオポチュニティにログに記録される場合。これらの以前のオポチュニティ（マージされた/重複）にログに記録されたすべてのタスクが、新しい「primary」オポチュニティにマップされていることを確認することは複雑であり、SA ダッシュボードのカスタム SQL によって処理されます。
1. SA の活動が、オポチュニティではなくアカウントにログに記録される場合。これらの Salesforce タスクの一部は、SA がオポチュニティが作成される前に見込み客/顧客と作業している可能性があるため有効ですが、それ以外の場合は、troops UI が正しいオポチュニティを選択するのを難しくしているためです。現在、SFDC Account ID と、オポチュニティのクローズ日に対するアクティビティが発生した特定の期間に基づいて、これらの SA Activities をオポチュニティに結びつけるカスタム SQL ロジックがありますが、100% 正確ではありません。
