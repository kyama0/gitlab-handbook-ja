---
title: "Security Content Automation Protocol (SCAP) スキャン"
description: "SCAPの入門と、OpenSCAPおよびPodmanを使ったコンテナイメージスキャンの始め方。"
upstream_path: /handbook/security/security-assurance/security-compliance/scap-scanning/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
---

## Security Content Automation Protocol (SCAP) スキャン

ITシステムの構成コンプライアンスはシステムハードニングの重要な一部であり、ほとんどのセキュリティ認証およびサードパーティ監査の一部となっています。Security Content Automation Protocol (SCAP) は、これらの構成コンプライアンスチェックを自動化し、修正策を特定するための一般的な方法です。

## 背景

[Security Content Automation Protocol](https://en.wikipedia.org/wiki/Security_Content_Automation_Protocol)はNISTが管理する米国標準であり、特定の標準を使用して情報システムの自動化された脆弱性管理、計測、およびポリシーコンプライアンスを実現する方法です。最も多く使用されるのはコンプライアンススキャン、つまりCISやPCI-DSSのような特定のコンプライアンス標準に対してITシステムを計測する用途です。

[OpenSCAP](https://www.open-scap.org/getting-started/)はSCAPスキャンのための非常に人気の高い[オープンソース](https://github.com/OpenSCAP)エコシステムで、Red Hatによって維持されています。SCAPスキャンと評価を実施する最も一般的な方法です。

## SCAPモジュール

各SCAP（Security Content Automation Protocol）モジュールには、セキュリティチェック、評価、脆弱性管理の自動化を支援する特定の機能があります。主要なSCAPモジュールとそれぞれの役割を以下に示します。

### 1. XCCDF (Extensible Configuration Checklist Description Format)

- **目的**: XCCDFはセキュリティチェックリスト、ベンチマーク、構成ガイダンスの作成に使用されます。
- **機能**: ルール、チェック、修正ガイダンスを含むXMLドキュメントとしてセキュリティポリシーを定義します。XCCDFファイルはセキュリティプロファイルを表現するように構成されており、各プロファイルには構成とコンプライアンスのためのルールが含まれます。
- **使用例**: SSH設定がベストプラクティスに沿っていることを検証するためのベンチマークはXCCDFファイルで定義されます。

### 2. OVAL (Open Vulnerability and Assessment Language)

- **目的**: OVALはシステム構成情報、状態、および脆弱性データを表現する標準的な方法を提供します。
- **機能**: OVAL定義は特定の構成、パッチ、または脆弱性に対するセキュリティチェックを記述します。これによりスキャナは特定の条件が満たされているかを確認することで、システムのコンプライアンスを評価し脆弱性を発見できます。
- **使用例**: OVALチェックは、特定のバージョンのパッケージがインストールされているか、または構成ファイルに特定の値が含まれているかを確認できます。

### 3. CPE (Common Platform Enumeration)

- **目的**: CPEは情報技術システム、プラットフォーム、アプリケーションを識別するための標準化された命名スキームです。
- **機能**: CPE名は特定のプラットフォーム、オペレーティングシステム、またはアプリケーションを一意に識別し、SCAPツールが対象システムに基づいて関連するチェックを適用できるようにします。
- **使用例**: CPE識別子は、Red Hat Enterprise Linux 8固有のチェックを適用するために、システムを「cpe:/o:redhat:enterprise_linux:8」と指定できます。

### 4. CVE (Common Vulnerabilities and Exposures)

- **目的**: CVEは公知の脆弱性に対する一意の識別子を提供します。
- **機能**: 各CVE IDは特定の脆弱性を指し、影響を受けるソフトウェアと問題の性質を記述します。CVE識別子はデータベースおよびセキュリティツール全体で脆弱性を追跡するのに役立ちます。
- **使用例**: CVE-2021-34527 (PrintNightmare) は特定のWindows脆弱性を指す識別子であり、セキュリティツールがスキャンとレポートでこれを認識・参照できるようにします。

### これらのモジュールがどのように連携するか

- **XCCDF**は何をチェックすべきかを定義し、修正ガイダンスを提供します。
- **OVAL**はシステム状態と構成を評価することで実際のチェックを実行します。
- **CPE**は対象システムを識別して、正しいXCCDFおよびOVALルールを適用します。
- **CVE**はセキュリティコンテンツとスキャン結果で特定の脆弱性を参照する方法を提供します。

これらのモジュールが集合的に、SCAPツールがさまざまなシステムとプラットフォームにわたって一貫した自動化されたセキュリティ評価を実行できるようにします。

## これがGitLabシステムにどう適用されるか

GitLabでは主にコンテナを通じて本番アプリケーションをデプロイしています。OpenSCAPはさまざまなデプロイオプションに対して実行できますが、主にオペレーティングシステムとコンテナイメージに対して実行されます。私たちはOpenSCAPをインフラストラクチャのオペレーティングシステムとコンテナイメージに対して実行し、コンプライアンスを検証しています。

OpenSCAPは単独ではコンテナイメージを評価できず、評価には[Podman](https://podman.io/)のようなコンテナエンジンが必要です。

## OpenSCAPコンプライアンススキャンを始める

1. 目的に基づいてモジュールを選択（XCCDF、OVAL、CPE、CVE）
2. [SCAPコンテンツを入手](https://static.open-scap.org/openscap-1.3/oscap_user_manual.html#2.1.%20Getting%20SCAP%20content)（たとえば、XCCDFファイルは`ssg`ファミリーのパッケージの一部です）
3. 標準を決定（PCI-DSS、CIS、CUIなど）
4. SCAPコンテンツで関連するOS標準ファイルを確認
   1. RedHat 9の例: `/usr/share/xml/scap/ssg/content/ssg-rhel9-ds-1.2.xml`
5. コンプライアンススキャンの場合、使用したい標準のプロファイル名を取得
   1. SCAPコンテンツファイル内のリストは`oscap info [filename]`を使って確認できます
      1. 例: `oscap info /usr/share/xml/scap/ssg/content/ssg-rhel9-ds-1.2.xml`
6. コマンドを組み立てて、システムまたはコンテナイメージに対して実行
7. **重要**: `oscap-podman`はrootとしてのみ実行可能（`sudo oscap-podman`または`sudo su -`してから`oscap-podman`）であり、podmanはユーザー間でコンテナイメージと構成を分離するように設計されています。`oscap-podman`がコンテナイメージを参照できるよう、コンテナを_rootユーザーとして_または`sudo`を使ってプルする必要があります。

**コンテナイメージの例**: `oscap-podman`を使ってUBI9-minimalイメージに対してRedHat 9のCIS L2ベンチマークを実行。

```bash
# COMMAND CONTAINER_IMAGE MODULE MODE --report DESIRED_REPORT_LOCATION --profile STANDARD_FROM_5 LOCATION_OF_SCAP_CONTENT_FILE

oscap-podman c8d01adc0698 xccdf eval --report /tmp/ubi9-min-scap-cis-2.html --profile xccdf_org.ssgproject.content_profile_cis /usr/share/xml/scap/ssg/content/ssg-rhel9-ds-1.2.xml

# This evaluates the container image c8d01adc0698 against the CIS benchmark that exists in ssg-rhel9-ds-1.2.xml and outputs the file to /tmp/
```

## 実践的なステップ

私たちは以下を行います。

1. Ubuntu 24.04システム上にOpenSCAPをセットアップ
2. RedHat 9 UBIイメージをCISベンチマークに対して評価

### システムの準備

Ubuntu 24.04システム上で:

1. Podmanをインストール（24.04ではデフォルトの`apt`リポジトリに含まれています）
2. `openscap-scanner openscap-utils openscap-common openscap-doc`をインストール
3. `ssg-base ssg-nondebian`をインストール
4. SCAPプロファイルについて`/usr/share/xml/scap/ssg/content`を確認
   1. これらは`ssg-base`と`ssg-nondebian`によってインストールされます
5. セットアップを簡単にするためのブートストラップスクリプトが[こちら](https://gitlab.com/dwilmoth/scap-bootstrapping/-/blob/main/scap-boostrap.sh)にあります。

### SCAP評価コマンド

```bash
# Become root so the command works (alternatively use sudo for each command)
sudo su -
# Pull the latest container image
podman pull registry.access.redhat.com/ubi9/ubi
# check for the container image ID
podman image ls
# grab the container image ID and run your command
oscap-podman a674bd5e68d9 xccdf eval --report /tmp/ubi9-min-scap-cis-2.html --profile xccdf_org.ssgproject.content_profile_cis /usr/share/xml/scap/ssg/content/ssg-rhel9-ds-1.2.xml
# Open the final HTML file in your brower
```

## その他のポイント

- OpenSCAPはさまざまな標準とフォーマットに使用できます。たとえば、米国国防総省の[Security Technical Implementation Guides (STIGs)](https://public.cyber.mil/stigs/)は公開されている中で最も厳格な構成標準の1つです。STIGsはOpenSCAPで使用できます。
- OpenSCAPはHTML以外にも[さまざまな種類のレポートとスクリプト](https://static.open-scap.org/openscap-1.3/oscap_user_manual.html#_generating_reports_guides_and_scripts)を生成できます。特定のシステムによっては、失敗を修正するために必要な正確なコマンドを生成できます。
- JSON出力が必要な場合は、[このOSCAP-JSONツール](https://github.com/manywho/oscap-json)がopenscapの標準出力を取り込んでJSONに変換します。ARMアーキテクチャを使用している場合は、`make`を使用してソースからビルドする必要があります。
  - [動作するサンプルスクリプト](https://gitlab.com/dwilmoth/scap-bootstrapping/-/blob/main/bulk-benchmark-json.sh)では、oscap-jsonツールを使用してコンテナのリストからJSON SCAPレポートを生成しています。

## 参考資料

- RedHatの[このビデオ](https://www.youtube.com/watch?v=nQmIcK1vvYc)
- [Red HatのOpenSCAPに関する記事](https://www.redhat.com/en/blog/container-vulnerabilities-openscap)
- OpenSCAPウェブサイト: https://www.open-scap.org/
- `ssg`ファミリーパッケージおよびその他のSCAPコンテンツのソース: https://github.com/ComplianceAsCode/content
