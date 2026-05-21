---
title: CorpSec エンジニアリング
upstream_path: /handbook/security/corporate/engineering/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-07-03T09:55:48+01:00"
---


エンジニアリングチームのメンバーは、私たちが管理するTech Stackアプリケーションのカテゴリーに基づいて機能別に編成されています。

## システムオーナー

<table>
<thead>
<tr>
<th>機能チーム</th>
<th>システム</th>
<th>マネージャー</th>
<th>エンジニア</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>(Corporate) SaaS<br>エンジニアリング</strong></td>
<td>
<a href="/handbook/security/corporate/systems/1password">1Password</a><br>
<a href="/handbook/security/corporate/systems/gitlab">GitLab.com IAM ポリシー</a><br>
<a href="/handbook/security/corporate/systems/google/app">Google Apps</a><br>
<a href="/handbook/security/corporate/systems/google/cal">Google Calendar</a><br>
<a href="/handbook/security/corporate/systems/google/drive">Google Drive</a><br>
<a href="/handbook/security/corporate/systems/google/group">Google Groups</a><br>
<a href="/handbook/security/corporate/systems/google/mail">Google Mail</a><br>
<a href="/handbook/security/corporate/systems/google/user">Google Users</a><br>
<a href="/handbook/security/corporate/systems/google/workspace">Google Workspace (Org)</a><br>
<a href="/handbook/security/corporate/systems/nira">Nira</a><br>
<a href="/handbook/security/corporate/systems/okta/app">Okta Applications</a><br>
<a href="/handbook/security/corporate/systems/okta/group">Okta Groups</a><br>
<a href="/handbook/security/corporate/systems/okta/user">Okta Users</a><br>
<a href="/handbook/security/corporate/systems/okta/workflows">Okta Workflows</a><br>
サービスアカウント<br>
<a href="/handbook/security/corporate/systems/slack">Slack</a><br>
<a href="/handbook/security/corporate/systems/zoom">Zoom</a><br>
</td>
<td>
<code>EM</code> David Zhu<br>
<code>EM</code> Eric Rubin<br>
<code>PM</code> Kim Waters<br>
<code>Staff</code> Mark Loveless
</td>
<td>
Clayton Shank<br>
Erik Lentz<br>
Jacob Waters<br>
Justin Bisutti<br>
Peter Hansen<br>
Steve Ladgrove<br>
Steve Sagan<br>
Zack Hardie<br>
</tr>
<tr>
<td><strong>Device Trust<br>エンジニアリング</strong></td>
<td>
<a href="https://internal.gitlab.com/handbook/it/it-self-service/it-guides/drivestrike/">DriveStrike</a><br>
<a href="/handbook/security/corporate/systems/jamf">Jamf MDM</a><br>
<a href="/handbook/security/corporate/services/phones">モバイルデバイス</a><br>
<a href="/handbook/security/corporate/systems/vpn">NordLayer VPN</a><br>
<a href="/handbook/security/corporate/systems/okta/verify">Okta Verify</a><br>
<a href="/handbook/security/corporate/systems/sentinelone">SentinelOne EDR</a><br>
<a href="/handbook/security/corporate/end-user-services/laptop-management/laptop-security/updates/">ソフトウェアアップデート</a><br>
<a href="/handbook/security/corporate/systems/yubikey">YubiKey</a><br>
</td>
<td>
<code>EM</code> Eric Rubin<br>
<code>PM</code> Kim Waters<br>
<code>Staff</code> Mark Loveless
</td>
<td>
Clayton Shank<br>
Justin Bisutti<br>
Zack Hardie<br>
Peter Hansen<br>
Steve Sagan<br>
</tr>
<tr>
<td><strong>Identity<br>エンジニアリング</strong></td>
<td>
ABAC および RBAC<br>
AuthN および AuthZ ポリシー<br>
アイデンティティガバナンス（IGA）<br>
ノーコード自動化<br>
オンボーディング<br>
オフボーディング<br>
ロールエンタイトルメント<br>
</td>
<td>
<code>EM</code> David Zhu<br>
<code>PM</code> Kim Waters<br>
<code>Staff</code> Jeff Martin
</td>
<td>
Erik Lentz<br>
Jacob Waters<br>
Steve Ladgrove<br>
</tr>
<tr>
<td>
<strong>Infrastructure<br>エンジニアリング</strong><br>
<br>
<small>関連 <a href="/handbook/security/corporate/how-we-work/services/infrastructure">インフラストラクチャサービス</a></small>
</td>
<td>
<a href="/handbook/security/corporate/systems/aws">AWS</a><br>
<a href="/handbook/security/corporate/systems/azure">Azure</a><br>
<a href="/handbook/security/corporate/systems/dns">DNS</a><br>
<a href="/handbook/security/corporate/systems/domains">ドメイン名</a><br>
<a href="/handbook/security/corporate/systems/google/cloud">Google Cloud</a><br>
技術的負債のクリーンアップ<br>
<a href="/handbook/security/corporate/systems/teleport">Teleport Bastion</a><br>
</td>
<td>
<code>EM (Acting)</code> Jeff Martin<br>
<code>PM</code> Kim Waters<br>
<code>Staff</code> Jeff Martin
</td>
<td>
Vlad Stoianovici<br>
</tr>
<tr>
<td>
<strong>プラットフォームエンジニアリング</strong><br>(セルフサービス内部<br>プロビジョニングソフトウェア)<br>
<br>
<small>関連 <a href="/handbook/customer-success/demo-systems">デモシステム</a></small><br>
<small>関連 <a href="/handbook/security/corporate/services/infrastructure">サンドボックスクラウド</a></small>
</td>
<td>
<a href="/handbook/security/corporate/systems/accesschk">Access Check (accesschk)</a><br>
<a href="/handbook/security/corporate/systems/accessctl">Access Control (accessctl)</a><br>
<a href="/handbook/security/corporate/systems/demosys">デモシステム (gitlabdemo.com/cloud)</a><br>
<a href="/handbook/security/corporate/systems/hackystack">HackyStack</a><br>
<a href="https://gitlab.com/provisionesta">Provisionesta オープンソースパッケージ</a><br>
<a href="/handbook/security/corporate/systems/handbook">システム管理ハンドブック</a><br>
<a href="/handbook/security/corporate/systems/trainingctl">トレーニングシステム (trainingctl)</a><br>
<a href="/handbook/security/corporate/systems/">(Corporate) Terraform 設定管理</a><br>
</td>
<td>
<code>Staff</code> Jeff Martin
</td>
<td>
Jeff Martin<br>
AJ Romaniello (People Ops)<br>
Byron Boots (Sec Assurance)<br>
James Sandlin (Sec Assurance)<br>
Jacob Waters (CorpSec Identity)<br>
Logan Stucker (Demo)<br>
Scott Cosentino (Training)<br>
</tr>
</tbody>
</table>
