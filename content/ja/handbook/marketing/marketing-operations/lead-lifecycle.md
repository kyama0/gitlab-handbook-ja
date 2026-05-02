---
title: "リードライフサイクル管理"
description: "GitLab がリードライフサイクルをどのように管理しているかについての専用情報ページ"
upstream_path: /handbook/marketing/marketing-operations/lead-lifecycle/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
---

このページは、私たちがリードライフサイクルをどのように管理しているかについての全情報をまとめた専用リソースです。ライフサイクルをカバーする要素は 2 つあります — SFDC のリード/コンタクトステータスと、SFDC のライフサイクル分類フィールドです。

## FY26 セールスリードフローチャート

<figure class="video_container">
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQtU0ceaIrrE3u8N7L-FZ8PdWTQ4Tkdp5QsKCGX-F5u3NafGW1D4BLzzJXwUQBnaWSTYR2qp7w2wRux/pubembed" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</figure>

スライドへは[このリンク](https://docs.google.com/presentation/d/1jdn5Ba5ipVYoDXkj6rI96WIC82M7IJzd2IkjVPb0imE/edit?slide=id.p#slide=id.p)からも開けます。

## リード/コンタクトステータス

Salesforce におけるセールスサイクル上のリードの現在位置を表すために、9 種類のリード/コンタクトステータスを用意しています。Sales Development がアクティブにエンゲージしていない状況を表す `Status` には、対応するキューが存在し、再エンゲージや適格性判定のために再度 Sales Development に割り当てられる条件を満たすまで、そのキューがレコードを所有します。つまり、以下の表の 3 列目にキューが示されているリード/コンタクトステータスには、現状「保留」キューが存在します。（注: これらのキューを更新後のリード/コンタクトステータスに合わせて改名・置換する作業は進行中であり、Salesforce 内で新しいキューが作成され実際に使用され始め次第、このハンドブックページも新しい名前に更新されます。）

| ステータス | 定義 | 関連する Salesforce キュー（該当する場合） |
|--------|--------|--------|
| Raw | まだ手付かずのプロスペクト、デフォルトステータス | `Raw Queue` |
| Inquiry | レコード側から GitLab に対して具体的にコンタクト情報を提供するアクションが取られた状態 | `Inquiry Queue` |
| MQL | システム的に Marketing Qualified された状態 | 該当なし。`MQL` はエンゲージと適格性判定を担当する XDR が所有 |
| Accepted | リード/コンタクトに連絡を取るべく能動的に動いている状態 | 該当なし。`Accepted` リードはエンゲージと適格性判定を行う XDR が所有 |
| Qualifying | リード/コンタクトと双方向で会話している状態 | 該当なし。`Qualifying` リードはエンゲージと適格性判定を行う XDR が所有 |
| Qualified | SAO が作成され、Sales チームへ引き継がれた状態 | 該当なし。`Qualified` リードはコンバート済みであり、多くの場合オポチュニティを作るためにコンバートされている |
| Disqualified | 当社のセールスサイクルから不適格と判断された状態 | `Disqualified Queue` |
| Recycle | 現在は当社のサービスや購買会話に対して準備が整っていないが、将来的に可能性がある状態 | `Recycle Queue` |
| Ineligible | 初期レビュー後にセールスプロセスに進む資格がないと判断されたすべてのリード/コンタクト | `Ineligible Queue` |

注: リード/コンタクトが `Ineligible` または `Disqualified` としてマークされた後、スコア対象ステータスに戻すための自動化はわずかしかありません。適切な権限を持つチームメンバーが Marketo または Salesforce で手動で上書きすることは可能です。同様に、リード/コンタクトが `Qualified` ステータスに入った後、別のステータスに変更する自動化は存在しません。[Marketo 内のフロー](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC62680B2ZN19)により、`Disqualified` または `Ineligible` ステータスのリード/コンタクトが特定の状況下で再 MQL になることはありますが、その状況は `Hand Raise PQLs`、[Follow Up Requests](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC62905A1ZN19)、特定の重要な `Contact Us` フォーム送信といった特定の「コンタクト要請」に依存します。

ステータスに加えて、XDR が使用しなければならないサブステータスがあります。サブステータスは以下のステータスで使用されています: Disqualified、Ineligible、Recycle、Bad Data:

| Disqualified |
|-----|
| Competitior |
| Consultant |
| No Authority |
| Personal Use |
| Unsubscribe |
| No longer at company |
| Interested in CE only |
| Interested in GitLab.com only |
| Disqualified Account |
| Bad Data |

|Ineligible |
|----|
| JIHU |
| Support |
| Remote Inquiries |
| Community Contributors |
| Student |
| ECCN |
| Open Source Program |
| GitLab Employee or Candidate |
| Customer Success |

| Recycle |
| ----- |
| Doesn't see value |
| Evaluating |
| In current GL contract |
| No Budget |
| No interest |
| No response |
| Product limitation |
| Staying with subversion option |
| No data collected |
| Recalled from Partner |
| No Action |
| Denied from Startups Program - Sales Dev to re-engage |

リード/コンタクトレコードに不正なデータがある場合は、Bad Data Reason フィールドを使用します。電話番号やメールアドレスが不正な場合は、このフィールドにその旨を記録し、別の手段でプロスペクトに連絡を取ってください。電話番号とメールアドレスの両方が不正な場合は、プロスペクトを `Disqualified - Bad Data` に移動してください。

| Bad Data Reasons |
|---- |
|Bad phone number |
|Bounced email |
|Invalid email |
|Spam |

## ライフサイクル分類

リードとコンタクトには、その人が GitLab とのジャーニーのどこにいるかを表す目的で 6 つのフィールドがあります。

| フィールド名 | 定義 |
|-----|------|
| Unknown | このユーザーはどのアカウントとも一致しておらず、GitLab ユーザーでもない |
| User | このユーザーは GitLab ユーザーである |
| Prospect Hierarchy | このユーザーはファーストオーダーが利用可能なアカウントと一致した |
| Customer Hierarchy Account | このユーザーは、アカウント階層内で顧客であるアカウントと一致した |
| Former Customer Account | このユーザーは元顧客のアカウントと一致した |
| Partner Managed | このユーザーは現在パートナーによって管理されている |

これらのフィールドは数式フィールドで、`True`、`False`、`-` の 3 つの値を取り得ます。`-` はフィールドが true か false かを判断するのに十分な情報がないことを意味し、情報が利用可能になるまで `-` のままになります。これらのフィールドの活用方法については、追って情報を共有します。

## リードオーナーがオフボードされた場合、リードはどうなりますか？

非アクティブなユーザーが Salesforce 上でリードを所有することがないようにするため、リードはステータスに応じて新しいオーナーまたはキューに再割り当てされます。次の表は、オーナーが新しい役割に異動したり退職したりした際に、リードがどこに再割り当てされるかを示しています。

| リードステータス | 新しいオーナーの割り当て |
|----|----|
| Raw | Raw Queue |
| Inquiry | Inquiry Queue |
| Recycle | Recycle Queue |
| Disqualified | Disqualified Queue |
| Ineligible | Ineligible Queue |
| Qualifiying または Qualified | Inactive User Queue |
| Accepted | リードステータスを `Recycle`、`No Response` に更新し、Recycle Queue に移動 |
| MQL（2023/02/01 より前） | リードステータスを `Recycle`、`No Response` に更新し、Recycle Queue に移動 |
| MQL（2023/02/01 以降） | 一致したアカウントが Actively Working の場合は `BDR Assigned`。それ以外は Geo に基づくラウンドロビンプールにルーティングされる |
