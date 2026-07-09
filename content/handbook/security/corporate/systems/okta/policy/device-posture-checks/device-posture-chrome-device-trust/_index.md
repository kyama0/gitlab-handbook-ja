---
title: Okta デバイスポスチャーチェック - Chrome Device Trust
upstream_path: /handbook/security/corporate/systems/okta/policy/device-posture-checks/device-posture-chrome-device-trust/
upstream_sha: 82fbf0e2626c904de9d6bd562ea4359a0c7e8ab2
translated_at: "2026-07-09T11:05:06+09:00"
translator: codex
stale: false
lastmod: "2026-07-08T14:46:05-04:00"
---

## Chrome Device Trust とは何か

Chrome Device Trust は、保護されたアプリケーションへのアクセスを許可する前に、Chrome ブラウザを介してデバイスのセキュリティポスチャーを検証する Google Chrome のセキュリティ機能です。GitLab は、標準的な Okta デバイスポスチャーチェックに加え、追加の保証層としてこれを利用しています — デバイスの登録や OS レベルのシグナルだけに依存するのではなく、Chrome Device Trust は認証時点で Chrome ブラウザから直接、リアルタイムのセキュリティシグナルを収集します。

## 仕組み

Chrome を通じて Okta で保護されたアプリにサインインすると、Okta は Chrome ブラウザにデバイスシグナルを要求します。Chrome はシグナルを収集して Okta に送信します。Okta はこれらのシグナルを GitLab のデバイスアシュアランスポリシーに照らして評価し、アクセスを許可するか、追加の認証を要求するか、またはデバイスが要件を満たさない場合はアクセスをブロックします。

これは通常のサインインフローの中で透過的に行われます。デバイスがコンプライアンスを満たしていれば、ユーザーの操作は不要です。

## どこで適用されるか

Chrome Device Trust は企業管理対象デバイスでのみ適用されます。個人デバイスは対象外です。

| プラットフォーム | デバイス状態 | 適用 |
|----------|--------------|----------|
| macOS | 管理対象 | ✅ |
| | 管理対象外 | |
| Windows | 管理対象 | ✅ |
| | 管理対象外 | |
| Linux | 管理対象 | |
| | 管理対象外 | |
| iOS | 管理対象 | |
| | 管理対象外 | |
| Android | 管理対象 | |
| | 管理対象外 | |

## シークレットモードと埋め込みブラウザ

Chrome Device Trust はシークレット (プライベートブラウジング) モードをサポートしません。シークレットウィンドウでアプリにサインインしようとすると、改善警告が表示される場合があります。この警告は無視して続行できます — これは想定通りの動作であり、デバイスがコンプライアンスに違反していることを示すものではありません。改善期限に達する前に、シークレットモードでないウィンドウから認証を行う必要があります。

埋め込みブラウザを使用するアプリでも同様です。シークレットウィンドウでアプリにサインインしようとすると、改善警告が表示される場合があります。この警告は無視して続行できます — これは想定通りの動作であり、デバイスがコンプライアンスに違反していることを示すものではありません。

## Chrome 以外のブラウザからのアクセス

Chrome 以外のブラウザ (Safari や Firefox など) から GitLab リソースにアクセスすることは引き続き可能ですが、これらのブラウザからは Chrome Device Trust シグナルを収集できません。Chrome 以外のブラウザからアクセスする際、サインイン中に改善警告を受け取ります。

ブロックされないようにするには、改善期限が過ぎる前に、管理対象の Chrome ブラウザを通じて少なくとも 1 回認証する必要があります。これを行わないと、Chrome Device Trust が検証できるようになるまでアクセスが制限されます。

{{% alert title="Note" color="success" %}}
Chrome Device Trust の採用を支援し、さまざまなユーザーのワークストリームとビジネスニーズに対応するため、Chrome Device Trust からの一時的で自動化された 90 日間の免除を [Lumos](https://app.lumosidentity.com/app_store?domainAppId=1719028) からリクエストできます。
{{% /alert %}}

{{% alert title="Note" color="info" %}}
デバイスポスチャーチェックの解決にサポートが必要な場合は、Slack の Compass app（上部検索バーに「Compass」と入力して探します）経由で IT に連絡するか、it-help@gitlab.com までメールしてください。
{{% /alert %}}
