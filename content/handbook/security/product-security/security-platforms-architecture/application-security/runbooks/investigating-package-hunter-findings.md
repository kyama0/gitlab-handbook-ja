---
title: Package Hunter の検出結果の調査
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/runbooks/investigating-package-hunter-findings/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

## Package Hunter の検出結果一覧

Package Hunter 関連の検出結果はすべてこの[ダッシュボード](https://gitlab.com/gitlab-org/gitlab/-/security/vulnerability_report/?severity=UNKNOWN&scanner=GitLab.DEPENDENCY_SCANNING&state=DETECTED)（社内リンク）で確認できます。

## ネットワーク接続の検出結果

例として[この検出結果](https://gitlab.com/gitlab-org/gitlab/-/security/vulnerabilities/5043319)を使用します。この検出結果では、Package Hunter があるパッケージがネットワーク接続を開いたことを検出しました。

> 02:24:56.163600570: Notice Disallowed outbound connection destination (command=node scripts/install.js connection=172.17.0.2:36884->52.217.109.44:443 user=root container_id=fb38d63ef02a container_name=some-container-eae8d3ec-a482-441b-8262-78198b46fdfb.tgz image=maldep)

### 調査

- 接続先 IP アドレスを確認し、何か興味深い情報が得られないかを見ることができます
  - この例では AWS の IP アドレスですが、どのパッケージがこの IP に接続したかについては情報を与えてくれません
- **注意: このステップでは、検出結果が出されたブランチをチェックアウトする必要があります。
ローカルコンピューターで悪意のある可能性のあるコードを分析する際は、慎重に進めてください。
専用の VM にコードをチェックアウトすることをお勧めします。
質問があるか支援が必要な場合は、`@gitlab-com/gl-security/product-security/appsec` までご連絡ください。**
  - パッケージが `scripts/install.js` というコマンドを実行したことがわかっているので、そのファイルを検索できます（検索を実行する前に必ず `yarn install` を実行してください）
  - `find . -name install.js` を実行すると `node_modules/node-sass/scripts/install.js` が見つかります
- `package.json` ファイルを調査して、検出をトリガーしたコマンドを見つけられます
  - `node_modules/node-sass/package.json` で `scripts/install.js` が確かに呼び出されていることがわかります

例の調査を完了すると、`install.js` スクリプトが `getBinaryURL()` を呼び出していることがわかります。この関数は `node_modules/node-sass/lib/extensions.js` で定義されています:

```javascript
/**
 * Determine the URL to fetch binary file from.
 * By default fetch from the node-sass distribution
 * site on GitHub.
 */
function getBinaryUrl() {
  var site = getArgument('--sass-binary-site') ||
             process.env.SASS_BINARY_SITE  ||
             process.env.npm_config_sass_binary_site ||
             (pkg.nodeSassConfig && pkg.nodeSassConfig.binarySite) ||
             'https://github.com/sass/node-sass/releases/download';  return [site, 'v' + pkg.version, getBinaryName()].join('/');
}
```

このファイルから、`node-sass` が `https://github.com/sass/node-sass/releases/download/VERSION/BINARY_NAME` からバイナリをダウンロードしようとしていることがわかります。

これをローカルで実行すると、以下のようになります:

```shell
$ wget https://github.com/sass/node-sass/releases/download/v5.0.0/linux-x64-64_binding.node
...
Connecting to github-production-release-asset-2e65be.s3.amazonaws.com (github-production-release-asset-2e65be.s3.amazonaws.com)|52.216.204.107|:443... connected.
...
```

URL は 52.216.204.107 に解決されており、Package Hunter の検出結果の IP とまったく同じではありませんが、IP アドレス情報は非常に類似しており、このコンテキストではリクエストが毎回まったく同じ IP で処理されないのは正常です。この時点でアラートの発生源についてかなりの確信を持つことができ、悪意のある意図はないと判断できます。

### アクション

- パッケージが最初から悪意のあるものであった（例えばタイポスクワッティング）と判明した場合、
[security on-call should be engaged] でさらに調査を行い、パッケージを正規のものに置き換えるための MR を
オープンすべきです。悪意のあるパッケージをレジストリ運営者（[NPM](https://docs.npmjs.com/policies/security#reporting-security-problems-to-npm) または [RubyGems](https://guides.rubygems.org/security/#reporting-security-vulnerabilities)）に[報告](https://about.gitlab.com/security/disclosure/#disclosure-guidelines-for-vulnerabilities-in-3rd-party-software)することも検討してください
- 正規のパッケージが侵害されていたと判明した場合、
[security on-call should be engaged](/handbook/security/security-operations/sirt/engaging-security-on-call/) でさらに調査を行い、安全であることが確認されている過去のバージョンへロールバックするための MR を
オープンすべきです。
悪意のあるパッケージをレジストリ運営者（[NPM](https://docs.npmjs.com/policies/security#reporting-security-problems-to-npm) または [RubyGems](https://guides.rubygems.org/security/#reporting-security-vulnerabilities)）およびパッケージのメンテナーに[報告](https://about.gitlab.com/security/disclosure/#disclosure-guidelines-for-vulnerabilities-in-3rd-party-software)することも検討してください
- ネットワーク接続が正規のリソースを取得するために使用されていると判明した場合、
リソースのセルフホスティングや、外部リソースの侵害に対する保護のためにビルドプロセス中に整合性を検証する可能性を検討すべきです
