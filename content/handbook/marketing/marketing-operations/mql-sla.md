---
title: "MQL SLA"
description: "セールス／ビジネス開発が MQL をフォローアップする際の SLA"
upstream_path: /handbook/marketing/marketing-operations/mql-sla/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
---

## SLA はどのように機能するか？

Salesforce における SLA 機能は、Traction の応答タイマー機能と Salesforce で構築されたカスタムフローを使用することで動作します。リードが MQL ステータスになり割り当てられると、Traction が応答タイマーを開始します。Salesforce フローも履歴ログの特定のフィールドに、誰がリードに対応する責任を持っているか、対応にどれだけ時間がかかったか、SLA が「Met」だったか「Not Met」だったかなどの情報を入力します。SLA を正しくレポートするには、ユーザーの就業時間とタイムゾーンが Traction で適切に設定されていることが重要であることに注意してください。

履歴ログ上で、リードに関連する SLA 情報を提供するフィールドは以下のとおりです:

1. SLA Assigned - これはリードに対応する責任を持つ担当者の名前です。
2. MQL SLA - 値は「Met」と「Not Met」です。
3. SLA Time (Hr) - これは、割り当てられた担当者がリードに対応するまでにかかった営業時間（HH:MM:SS 形式）です。

SLA レポートに表示される、リードの洞察を提供するその他のフィールドは以下のとおりです:

1. Timer Response Time in Seconds - これは、営業時間内外を問わず、リードに対応するまでにかかった合計時間（秒単位）です。
2. Timer Response Time in Business Hours - これは、リードに対応するまでにかかった時間（営業時間中の秒単位で測定）です。SLA Time (Hr) はこのフィールドをより便利な HH:MM:SS 形式にフォーマットします。
3. MQL Transfer Count - このフィールドは、リードが MQL ステータスにある間にオーナーが何回変わったかを示します。Traction による元の割り当ては最初の転送としてカウントされることに注意することが重要です。これは、Traction の応答タイマーが適切に開始・停止するためのロジックにおいて重要なフィールドです。

リードに対応すると、Traction は応答タイマーを停止し、取られたアクションに応じて別のタイマーを開始する可能性があります。リードのステータスが MQL から Accepted、Qualifying、Qualified、Disqualified、Ineligible、Recycle のいずれかに変更されると、応答タイマーは停止し、SLA レポートには誰がリードに対応したか、どれだけ時間がかかったか、SLA が満たされたか満たされなかったかが表示されます。応答タイマーが 1 つだけの場合、ステータスが変更されたことを示します。

1 つのリードに対して複数の応答タイマーが表示されている場合、それはリードが MQL ステータスにある間にオーナーが変更されたためです。レポートには、リードオーナーを変更したオーナーが誰で、新しいオーナーが誰であるかが表示されます。また、元のオーナーがリードオーナーを変更するのにかかった時間も表示されます。最後に、新しい応答タイマーが開始され、新しいオーナーがリードに対応するための営業時間が 2 時間あることを意味します。リードオーナーの変更があったかどうかを確認するもう一つの方法は、MQL Transfer Count フィールドをチェックすることです。

## SLA レポート

SLA に関連するレポートは合計 4 つあり、リード用が 2 つ、コンタクト用が 2 つあります。リードとコンタクトの両方で、セールス／ビジネス開発担当者でグループ化されたレポートと、リード／コンタクトでグループ化された別のレポートがあります。

リードレポート（コンタクトレポートも同じように機能します）と、SLA 機能が全体としてどのように機能するかを、サンプルリードを使って図解した動画はこちらです。

https://gitlab.zoom.us/rec/share/8uiy8D2TQNzeNMeLyG3zPwmQnABeBTEwTkMMWOs8JhURsCXFkAQ58YHpX-uWp_O7.ROQmX1uYK7ZFRWnj?startTime=1732037940000

## Traction 応答タイマーの設定

リードには合計 10 個の応答タイマーがあります。これは、リードがリードのライフタイム中に最大 10 回 MQL になるか、MQL ステータスにある間に転送される可能性があり、SLA が記録されることを意味します。

リードタイマーの開始・停止基準は以下のとおりです:

タイマー 1 - 開始:

1. Date of Last Completion = Is Changed
2. Status = MQL
3. MQL Transfer Count = 1
ロジック: (1 AND 2 AND 3)

タイマー 1 - 停止:

1. Status = Accepted
2. Status = Qualifying
3. Status = Qualified
4. Status = Recycle
5. Status = Disqualified
6. Status = Ineligible
7. Owner ID = Is Changed
8. MQL Transfer Count = 2

ロジック: 1 OR 2 OR 3 OR 4 OR 5 OR 6 OR (7 AND 8)

タイマー 2 から 10 は、対応する MQL Transfer Count 値とともに、同じフィルターとロジックに従います。

リードが MQL ステータスに到達する頻度が低く、オーナーが変更される頻度も少ないため、コンタクトには合計 4 つの応答タイマーがあります。

コンタクトタイマーのフィルターとロジックは以下のとおりです:

タイマー 1 - 開始:

1. Status = MQL

タイマー 1 - 停止:

1. Status = Accepted
2. Status = Qualifying
3. Status = Qualified
4. Status = Recycle
5. Status = Disqualified
6. Status = Ineligible
7. MQL Transfer Count = 2

ロジック: 1 OR 2 OR 3 OR 4 OR 5 OR 6 OR 7

*後続のタイマー開始基準には、対応する MQL Transfer Count 値があることに注意してください。

## SLA レポートを見る際のその他の考慮事項

SLA レポートを見ていて、「Timer Response Time」と「Timer Response Time in Business Hours」の値がないリードに気付いた場合、それはそのリードがアクション待ちの MQL ステータスにあるためです。

「Timer Response Time」に値があるが「Timer Response Time in Business Hours」が「0」の場合、SLA Time (Hr) は「00:00:00」と等しくなり、MQL SLA は「Met」と等しくなります。これは、その担当者の営業時間外に MQL が割り当てられて完全に対応されたことを意味します。

「Timer Response Time」と「Timer Response Time in Business Hours」に異なる値があることに気付いた場合、それはリードが営業時間外に割り当てられ、営業時間内に対応されたことを示します。これは SLA レポートで一般的に発生することです。
