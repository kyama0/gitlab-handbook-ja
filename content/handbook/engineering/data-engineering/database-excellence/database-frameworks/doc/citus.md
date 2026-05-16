---
title: CitusDB による GitLab のシャーディング
upstream_path: /handbook/engineering/data-engineering/database-excellence/database-frameworks/doc/citus/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-19T13:56:02-06:00"
---

## CitusDB による GitLab のシャーディング

これは、GitLab.com における GitLab のデータベースシャーディングソリューションとして CitusDB を使用するかどうかの意思決定プロセスを概説する作業ドキュメントです。

### Citus Community

私たちは、[CitusDB をシャーディングソリューションとして探索する](https://gitlab.com/gitlab-org/gitlab/issues/207833)取り組みの一環として、[Citus Community](https://www.citusdata.com/product/community) の提供を検討していました。Citus Community は [GNU Affero General Public License v3.0 (GNU AGPLv3)](https://github.com/citusdata/citus/blob/main/LICENSE) の下でライセンスされています。GNU AGPLv3 は、私たちのハンドブックでは使用に法的承認が必要な[受け入れ不可能なライセンス](https://docs.gitlab.com/ee/development/licensing.html#unacceptable-licenses)として記載されています。

2020年4月15日、法務顧問にアドバイスを求めました。GNU AGPLv3 ライセンスについて十分な疑問と懸念があったため、Citus Community の使用調査を中止することを決定しました。*メモとアジェンダは[こちら](https://docs.google.com/document/d/1wzcpd10uOgY41fub8HZBN0E5VusrRKIgWiS9X-klJpY/edit)で確認できます（GitLab チームメンバーのみアクセス可能）。*

### Citus Enterprise

2020年4月20日 — ライセンスコストのため、シャーディングソリューションとして Citus Enterprise を追求しないことを決定しました。フォーリンデータラッパー（FDW）を使用した PostgreSQL パーティショニングに取り組みを集中します。
