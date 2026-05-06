---
title: "SAST アナライザーの非推奨化と削除の手順"
upstream_path: /handbook/engineering/development/sec/secure/static-analysis/runbooks/analyzer-deprecation-and-removal-instructions/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T07:31:38Z"
translator: claude
stale: false
---

### アナライザー変換のライフサイクル

多くの SAST アナライザーは semgrep への置き換えが進んでいます。これは、semgrep がレガシーアナライザーの機能を引き継ぐことを意味します。

これを達成するための手順は次のとおりです:

1. [sast-rules にルールを移行する](https://gitlab.com/gitlab-org/security-products/sast-rules/-/blob/main/docs/update-rule-process.md)
1. ルールの監査とライセンスのレビュー
1. アナライザーの非推奨化と削除

このドキュメントは `アナライザーの非推奨化と削除` の手順に関するものです。削除を開始する前に、すべての非推奨化手順を完了する必要があります。

### アナライザーの非推奨化

#### 1. `SAST.latest.gitlab-ci.yml` でアナライザージョブを非推奨にする

[`SAST.latest.gitlab-ci.yml`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/SAST.latest.gitlab-ci.yml) ファイルを更新する MR を提出し、アナライザーのエントリをプレースホルダーに置き換えます。プレースホルダーメッセージには、アナライザーの非推奨化が発表された時期と削除された時期に関する通知を記載してください。また、詳細については対応する非推奨化 Issue へのハイパーリンクを必ず含めてください。さらに、`when: never` をルールに追加して、プレースホルダーが実行されないようにしてください。

常に既存のジョブをこの新しい「プレースホルダー」に変更し、ジョブ全体を削除しないでください。
ジョブ全体を削除すると、顧客がカスタム変数を指定していたり、削除されたジョブの名前を参照していたりする場合にパイプラインが壊れる可能性があります。

```yaml
  script:
    - echo "This job was deprecated in GitLab 14.8 and removed in GitLab 15.3"
    - echo "For more information see https://gitlab.com/gitlab-org/gitlab/-/issues/352554"
    - exit 1
  rules:
    - when: never
```

#### 2. 非推奨化の通知

破壊的変更の可能性がある変更を事前に告知する必要があります。
必要なプロセスの詳細については、[非推奨化、削除、および破壊的変更](https://docs.gitlab.com/ee/development/deprecation_guidelines/) を参照してください。

SAST アナライザーの非推奨化通知の例として、[14.8 での通知](https://docs.gitlab.com/ee/update/deprecations.html#sast-analyzer-consolidation-and-cicd-template-changes) があります。

SAST の Product Manager と Engineering Manager が、このアナウンスの公開に責任を持ちます。
アナライザーの削除を実装するエンジニアは、変更通知の記載された範囲を遵守し、顧客への影響に関する重要な変更を PM/EM に通知する責任があります。

### アナライザーの削除

#### 1. ドキュメントからアナライザーを削除する

削除されたアナライザーへのすべての参照を SAST ドキュメントから削除する必要があります。https://docs.gitlab.com/ee/user/application_security/sast/

ドキュメントからのアナライザー削除の例: https://gitlab.com/gitlab-org/gitlab/-/merge_requests/97451

#### 2. SAST ドキュメントの「サポート終了アナライザー」セクションにアナライザーを追加する

サポートが終了したすべてのアナライザーは、SAST ドキュメントの [end-of-supported-analyzers](https://docs.gitlab.com/ee/user/application_security/sast/#end-of-supported-analyzers) セクションに記載する必要があります。

#### 3. アナライザープロジェクトの README.md を更新する

アナライザーがサポートされなくなったことをさらに周知するため、その `README.md` に以下のヘッダーを追加してください。

```text
[Maintenance Notice](link-to-removal-notice):
This analyzer is currently in terminal maintenance mode. No new major versions will be released.

We've migrated this analyzer's scanning coverage to the GitLab SAST [Semgrep-based analyzer](https://gitlab.com/gitlab-org/security-products/analyzers/semgrep).
```

#### 4. `SAST.gitlab-ci.yml` でアナライザージョブを削除する

[`SAST.gitlab-ci.yml`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/SAST.gitlab-ci.yml) ファイルを更新する MR を提出し、アナライザーのエントリをプレースホルダーに置き換えます。プレースホルダーメッセージには、アナライザーの非推奨化が発表された時期と削除された時期に関する通知を記載してください。また、対応する非推奨化 Issue へのハイパーリンクを必ず含めてください。

[`SAST.latest.gitlab-ci.yml`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/SAST.latest.gitlab-ci.yml) への以前の更新をガイドとして使用できますが、「X で削除済み」のバージョン番号を、最新 (`SAST.latest`) テンプレートではなく安定版 (`SAST`) テンプレートでの削除時期に合わせて変更するよう注意してください。

アナライザー削除 MR の例: https://gitlab.com/gitlab-org/gitlab/-/merge_requests/97216

#### 5. 現在のすべての脆弱性を解決済みにする

削除されたアナライザーによって作成された脆弱性は、状態を解決済みに設定する必要があります。
