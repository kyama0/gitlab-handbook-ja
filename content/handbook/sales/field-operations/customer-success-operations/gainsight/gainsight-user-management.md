---
title: "Gainsight ユーザー管理"
upstream_path: /handbook/sales/field-operations/customer-success-operations/gainsight/gainsight-user-management/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-12T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-09T20:14:47+00:00"
---
<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

ここでは Gainsight のユーザー管理に関する具体的な内容を説明します。

## GitLab アクセスリクエストとオフボーディング Issue

ユーザーが Gainsight にアクセスできるようにするには、Lumos 経由で[アクセスリクエスト](https://app.lumosidentity.com/app_store?domainAppId=1175903)を作成する必要があります。

- [アクセスリクエスト](https://app.lumosidentity.com/app_store?domainAppId=1175903): Gainsight のアクセス権は [Lumos](https://app.lumosidentity.com/) を通じて付与されます。GitLab に入社したユーザーは、自分の役割に応じて Lumos 経由で Gainsight のアクセスリクエストを送信する必要があります。
  - **フルライセンス**: Customer Success Manager、Customer Success Engineer、Customer Success Architect はフルライセンスの対象となります。
  - **ビューアライセンス**: その他 Gainsight アクセスが必要な役割は、Viewer Analytics ライセンスをリクエストします。
- [オフボーディング Issue](https://gitlab.com/gitlab-com/team-member-epics/employment/-/issues/?sort=milestone_due_desc&state=opened&label_name%5B%5D=offboarding&not%5Blabel_name%5D%5B%5D=CSOps%3A%3AOffboarding%20Completed&first_page_size=20&_gl=1*rt0jmx*_ga*MTc0NDE2MzMzOS4xNjE4NDE5NTU3*_ga_ENFH3X7M5Y*MTY3NTE3MzU0Ny4xMDMuMS4xNjc1MTczNTY4LjAuMC4w): **CSOps::Offboarding Complete** ラベルが付いていない Issue がこのリストに表示されます。必要な対応が完了したら、ラベルを CSOps::Offboarding Complete に変更すると、リストから外れます。

すでに Gainsight ライセンスの承認を受けていないユーザーが Gainsight へのアクセスをリクエストした場合は、RevTech のリーダーシップと連携し、そのユーザーに Gainsight ライセンスを付与すべきかどうかを判断します。

## Salesforce アカウントのセットアップとライセンスのプロビジョニング

ユーザーが GitLab に入社すると、Salesforce アカウントが自動的に作成されます。ユーザーの Salesforce アカウントが見つからない場合は、後述の[トラブルシューティング](#troubleshooting)セクションを参照してください。

ユーザーレコードを特定したら、次の手順に従います。一部の手順は Sales Systems によってすでに完了している場合がありますが、Gainsight でアクセス権を付与する前に、ユーザーのセットアップが Salesforce で正しく行われていることを確認することが重要です。

1. Salesforce で SFDC の**ユーザー**ページに移動します:
    1. Setup → Manage Users → Users → リストからユーザーを検索
2. ユーザーのページで、以下の内容が正しいことを確認します:
    1. **Active** チェックボックスがオンになっている
    2. **User License** = Salesforce
    3. **Role** が入力されている/正しい
    4. **Profile** が入力されている/正しい（ほとんどのユーザーは Account Manager）
    5. **[Comp] CSM Team** が入力されている/正しい
    6. **Manager** フィールドが入力されている/正しい
3. 同じくユーザーのページで、Gainsight 権限セットを持っていることを確認します:
    1. ページ上部の **Permission Set Assignments** をクリックし、「Gainsight NXT」権限セットが含まれていることを確認します。リストにない場合は、Edit Assignments をクリックし、Gainsight NXT を見つけて権限セットのリストに追加し、Save をクリックします。

ユーザーアカウントが正しくセットアップされていることを確認したら、ライセンスを割り当てる必要があります:

1. [このリンク](https://gitlab.my.salesforce.com/ui/setup/mfpackage/UserLicenses/d?allPackageId=033U0000000CdVi&packageLicenseId=0504M000000XZsn&retURL=%2F0A3%3Fsetupid%3DImportedPackage%26retURL%3D%252Fui%252Fsetup%252FSetup%253Fsetupid%253DStudio)に移動するか、Salesforce で次の手順に従います:
    1. Setup → Installed Packages → Gainsight CSM をクリック
    2. **Manage Licenses** をクリック（許可されているライセンス数と使用中のライセンス数が表示されます）
    3. **Add Users** をクリックして追加する人を検索します。リストに表示されるためには、Salesforce のユーザーとしてすでに存在している必要があります。

Gainsight CSM Package Details ページで使用中および許可されているライセンスの量を確認できます。Gainsight のライセンスが不足した場合は、CS Ops のリーダーシップと連携して計画を決定します。既存のユーザーからライセンスを削除するか、追加のライセンスを購入する必要があります。

## Gainsight アカウントのセットアップ

Salesforce でライセンスがプロビジョニングされた後、Gainsight でユーザーセットアップを完了するために追加の手順を実行する必要があります。

### SFDC ユーザーコネクタジョブ

{{% alert title="重要" color="warning" %}}
Gainsight のすべてのユーザーは Salesforce からインポートされます。Gainsight 内で直接ユーザーを作成することはしません。
{{% /alert %}}

Gainsight はコネクタジョブを使用して、Salesforce からユーザーとユーザー情報を同期します。このジョブは `SFDC User Sync` と呼ばれ、[Gainsight のこのページ](https://gitlab.gainsightcloud.com/v1/ui/connectors#/jobs) または Administration → Integrations → Connectors 2.0 → Jobs タブからアクセスできます。

このジョブは 1 日 1 回実行され、新しいユーザーを取り込むほか、Salesforce で変更された情報も更新します。

ユーザーが Salesforce から正常に同期されたことを確認するには、次の手順でユーザーを検索します:

1. User Management に移動してユーザーを検索します（メールでの検索を推奨）
2. ... メニューをクリックし、Edit User を選択します
3. 次のフィールドが Salesforce から同期され、正しいことを確認します:
    1. User Role
    2. Profile Name
    3. Manager

ユーザーが Salesforce から Gainsight にまだ同期されていない場合は、1) 次の同期ジョブを待つか、2) 手動同期をトリガーします。手動同期を行うには、ジョブ名の横の 3 つのドットをクリックし → Run Job → Data modified since last sync date and time を選択します。

{{% alert title="注意" color="warning" %}}
`SFDC User Sync` ジョブは、Salesforce で Active のユーザーのみを同期します。ユーザーがまだ Salesforce で作成されていない場合や、Active に設定されていない場合は、同期で Gainsight に取り込まれません。
{{% /alert %}}

特定の同期のログ/詳細は、Connectors 2.0 → Activities タブに移動して確認できます。次に、リストから該当の同期を見つけて 3 つのドットをクリックし、Job Activity を選択します。ここから成功したレコード数と失敗したレコード数を確認できます。失敗したレコードをダウンロードして、具体的なエラーメッセージを確認することもできます。

特定のエラーのトラブルシューティングの詳細については、後述の[トラブルシューティング](#troubleshooting)セクションを参照してください。

## Gainsight ユーザー管理

ユーザーが Salesforce から正常に同期されたことを確認した後、以下を実行する必要があります:

1. User Management で Edit User をクリックします
2. 次のフィールドが入力されている/Salesforce から同期されていることを確認します:
   - **User Role** が入力されている/正しい
   - **Manager** フィールドが入力されている/正しい
3. License Type で Full User を選択します
4. Add Permission Bundles をクリックし、ユーザーを適切なバンドルに追加します（これは通常、アクセスリクエストの Issue で指定されています）。詳細については、[Gainsight バンドル（権限セット）](#gainsight-bundles-permission-sets)セクションを参照してください。
5. 該当する場合は、次の手順を実行します:
   - *（該当する場合）* Sales ユーザーの場合は、Page Layout フィールドに "Account Planning" を入力します
   - *（該当する場合）* CSM/A/E マネージャーや、アカウントに割り当てられている CSM を編集する必要があるユーザーの場合は、CSM Edit? フィールドを "Yes" に変更します。
   - *（該当する場合）* ユーザーが PubSec の CSM またはリーダーの場合は、US PubSec User フィールドを Yes に設定します。
   - *（該当する場合）* メインの User Management ページから、ユーザー名の横にステータスが表示されます。場合によってはユーザーが非アクティブになっていることがあり、... メニューをクリックして Activate User を選択する必要があります
6. ユーザーを Okta gainsight ユーザーグループに追加します:
   1. <https://groups.google.com/> に移動します（任意のグループを表示するには、groups.google.com の管理者である必要があります）。
   2. okta-gainsight-users グループに移動します
   3. Members → Add Members で、新しいユーザーのメールアドレスを使用してグループに追加します。正常に追加されると、Okta に Gainsight タイルが表示されます（表示までに時間がかかる場合があります）。

{{% alert title="注意" color="warning" %}}
最も重要なフィールドは **User Role** フィールドと、PubSec ユーザーの場合は **US PubSec User** フィールドです。これらのフィールドは、ユーザーを正しい共有グループに自動的に追加するために使用されます（詳細は後述の[データ権限/共有グループ](#data-permissions-and-sharing-groups)セクションを参照）。
{{% /alert %}}

## Gainsight バンドル（権限セット）

Gainsight バンドルは、Gainsight の特定のページとモジュールへのアクセスを提供します。Administration → Users and Permissions → Permission Bundles からアクセスできます。

ここから、ユーザーをバンドルに割り当てる（前述のようにユーザーレコードからも実行可能）、特定のバンドルに含まれているユーザーを確認する、新しいバンドルを作成する、または特定のバンドルのアクセス権を変更することができます。

ユーザーをバンドルに追加するか、バンドルに含まれているユーザーのリストを確認するには、バンドル名の横の 3 つのドット → Assign users をクリックします。

特定のバンドルのアクセス権を変更するには、バンドル名の横の 3 つのドット → Edit をクリックします。

{{% alert title="注意" color="info" %}}
Gainsight が特定のグループのユーザーがアクセスする必要のある新機能をリリースした場合、おそらく該当する各グループに移動し、新機能に移動してチェックボックスをオンにする必要があります。これは自動的には実行されません。
{{% /alert %}}

最もよく使われるバンドルは以下のとおりです:

| バンドル名                    | 説明                                                  |
| -------------------------- | ------------------------------------------------------------ |
| Default                    | GS 管理者に割り当てられるバンドルで、Gainsight のすべての領域へのアクセスを提供します。 |
| GS Admin sans provisioning | これは User Management 以外のすべてにアクセスできる GS 管理者の役割です。 |
| CSM Users                  | CSM ユーザー用の権限グループ。C360、ダッシュボード、Home、Timeline、Cockpit、Success Plans、サーベイと NPS の分析へのアクセスを含みます。これはほとんどのユーザーに割り当てられるバンドルです。 |
| View                       | デフォルトの View User Group で、管理者が選択したユーザーにリソースへのビューアクセスを割り当てることができます。 |
| View Analytics             | Viewer Analytics ライセンスを持つユーザーのデフォルト権限バンドルで、Dashboards、Timeline、Company 360 へのアクセスを提供します。 |

## データ権限と共有グループ

データ権限と共有グループを使用して、Gainsight 内の特定のレコードへのアクセスを許可または制限します。これは GitLab では特に PubSec データを保護するために使用されています。Administration → Users and Permissions → Data Permissions からアクセスできます。

ユーザーが Gainsight のデータにアクセスするためには、共有グループに割り当てる必要があります。通常はユーザーの役割に基づいて自動的にグループに追加されます。User Role が入力されていない場合や、ユーザーが Salesforce から同期された時点で入力されていなかった場合は、手動で共有グループに追加する必要があります。

1. Data Permissions で、Sharing Groups タブをクリックします
2. リストから、ユーザーに適したグループを見つけます。
    1. 最も重要な考慮事項は、ユーザーが PubSec かどうかです。ほとんどのユーザーは PubSec ではなく、Non_PubSec グループに追加されます。しかし、PubSec ユーザーが Gainsight 内の PubSec レコードにアクセスするには、PubSec グループに追加されている必要があります。
3. 鉛筆アイコンをクリックしてグループを編集します
4. ユーザーのレコードに User Role を追加している場合、*Refresh User Group* ボタンをクリックすると、ユーザーが正しいグループに自動的に追加されます。ユーザーのリスト上部でユーザーを検索できます
5. ユーザーを手動で追加するには、*Add Users Manually* をクリックします。そこからユーザーを検索し、名前の横のチェックボックスをオンにして、Save をクリックします。

どのアカウントレコードがどの共有グループに表示されるかは、Data permissions → Company → Rule based に移動して確認できます。

## ページレイアウト

C360 ページレイアウトでは、Gainsight のユーザーに対して異なる C360 ビューを非表示または表示することができます。Administration → 360 Layouts → C360 でレイアウトを表示/編集できます。特に指定されない限り、ユーザーはデフォルトのレイアウトに自動的に割り当てられます。

現在、3 つの主要な C360 レイアウトがあります:

| 名前              | 説明                                                  |
| ---------------- | ------------------------------------------------------------ |
| Default          | CSM と非 SAL のデフォルトレイアウト。CSM フィールドは表示されますが編集できません。 |
| CSM Edit         | CSM フィールドが編集可能であること以外はデフォルトレイアウトの正確なコピー。これは、ユーザーレコードの **CSM Edit?** フィールドが Yes であるユーザーに割り当てられます。 |
| Account Planning | アカウントプランニング用の Sales/SAL 向けの特定レイアウト。これは、ユーザーレコードの Page Layout フィールドが Account Planning であるユーザーに割り当てられます。 |

## Gainsight アクセスの削除

ユーザーが GitLab を離れる、または Gainsight へのアクセスが不要になった場合は、アカウントを無効化してライセンスを削除できます。GitLab を離れる従業員については、[GitLab アクセスリクエストとオフボーディング Issue](#gitlab-access-requests-and-offboarding-issues)で詳述しているように、オフボーディング Issue を作成する必要があります。

ユーザーの Gainsight アカウントを無効化するには:

1. User Management に移動してユーザーを検索します（メールでの検索を推奨）
2. ... メニューをクリックし、**Make Inactive** を選択します
3. これでユーザーリストの名前の横に赤い "INACTIVE" ボックスが表示されます。このユーザーはログインしたり、Gainsight を表示したりすることが一切できなくなります。

Salesforce でユーザーの Gainsight ライセンスを削除する必要がある場合もあります:

1. Setup → Installed Packages → Gainsight CSM をクリック
2. **Manage Licenses** をクリック
3. リストでユーザーを検索し、その名前の横の *Remove* をクリックします。

## ユーザーの Gainsight へのアクセス

ユーザーは Okta から直接、または Salesforce 経由で Gainsight にアクセスできます。

Okta 経由で Gainsight にアクセスするには:

1. https://gitlab.okta.com/app/UserHome# に移動します
2. Gainsight タイルをクリックします。
   - Gainsight タイルが表示されない場合は、まず上部の検索バーで検索してみてください。
Gainsight タイルが見つからない場合は、#gainsight-users Slack チャンネルでヘルプを求めてください

Salesforce 経由で Gainsight にアクセスするには:

1. Salesforce にログインし、App Launcher またはワッフルメニューで「Gainsight」をクリックします。
Gainsight の画面スペースを最大化するために Salesforce のヘッダーを非表示にするには、Gainsight ヘッダー右上のプロファイルアイコンの横にある「二重矢印」アイコンをクリックします。

## トラブルシューティング

近日公開！
