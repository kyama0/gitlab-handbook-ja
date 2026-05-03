---
title: "Static Analysis グループが定義した誤検知"
upstream_path: /handbook/engineering/development/sec/secure/static-analysis/false_positives/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

## Static Analysis グループが定義した誤検知

以下の表は、誤検知と見なすことができるさまざまなルール ID と状況を一覧しています。*Source Project* 列には FP 検出が生成されたプロジェクトへの参照が含まれています。*Origin* 列は FP を生成したアナライザーを指します。*CWE* 列と *ID* 列はそれぞれ報告された CWE ID とアナライザーが脆弱性を識別するために使用するネイティブの脆弱性 ID を示します。*False Positive Reason* 列は、報告された検出結果が誤検知と見なすことができる理由を詳述しています。

| Source Project | Origin  | CWE    | ID      | False Positive Reason   |
| ---------- | ------- | ------ | ------- | ----------------------- |
| [brakeman](https://gitlab.com/gitlab-org/security-products/analyzers/brakeman), [flawfinder](https://gitlab.com/gitlab-org/security-products/analyzers/flawfinder), [php-security-audit](https://gitlab.com/gitlab-org/security-products/analyzers/phpcs-security-audit),  [node-js-scan](https://gitlab.com/gitlab-org/security-products/analyzers/nodejs-scan) |  gosec  | 78     | G204   | 定数値が割り当てられた変数のみがパラメーターとして使用されている。変数はパラメーターとして使用される前にサニタイズされている。  |
| [eslint](https://gitlab.com/gitlab-org/security-products/analyzers/phpcs-security-audit), [kubesec](https://gitlab.com/gitlab-org/security-products/analyzers/kubesec)  |  gosec  | 703     | G104   | エラーはフォールバックのデフォルト値を使用して暗黙的に処理されている。エラーケースは無関係/無視できる。匿名関数から返されたエラー。 |
| [kubesec](https://gitlab.com/gitlab-org/security-products/analyzers/kubesec), [mobsf](https://gitlab.com/gitlab-org/security-products/analyzers/mobsf)  |  gosec  | 22     | G304   | ファイルコンテンツがチェックされてファイルタイプを識別しブール値を返している。ファイルパスは使用される前に安全に生成されている。 |
| [security-products](https://gitlab.com/gitlab-org/security-products)  |  Gemnasium  | CVE-2020-14040     | CVE-2020-14040   | インポートされたライブラリで見つかった脆弱なコードはデッドコードであり、実行時に呼び出されない。 |
| [security-products](https://gitlab.com/gitlab-org/security-products)  |  Gemnasium  | CVE-2020-29652     | CVE-2020-29652   | インポートされたライブラリで見つかった脆弱なコードはデッドコードであり、実行時に呼び出されない。 |
| [security-products](https://gitlab.com/gitlab-org/security-products)  |  Gemnasium  | GMS-2019-2     | GMS-2019-2   | 解析される YAML コンテンツはユーザーが生成したものではない。 |
