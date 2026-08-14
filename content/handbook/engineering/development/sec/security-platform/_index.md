---
title: Security Platform ステージ
description: >-
  Security Platform ステージは、GitLab プラットフォームの認証、認可、不正利用防止、
  シークレット管理、ソフトウェアサプライチェーンの基盤を構築します。
upstream_path: /handbook/engineering/development/sec/security-platform/
upstream_sha: cd448feba02b00726e216b7b3cfed717822b37b6
lastmod: "2026-08-13T15:10:33+03:00"
translated_at: "2026-08-14T06:13:39+09:00"
translator: codex
stale: false
---

Security Platform エンジニアリングステージは、GitLab の他のすべての部分がアイデンティティと信頼のために依存するプラットフォームプリミティブ、すなわち認証、認可、不正利用防止、シークレット管理、ソフトウェアサプライチェーンを担当します。

このステージは、旧 Software Supply Chain Security ステージと Dynamic Analysis グループを基に、FY27 の Sec 再編で設立されました。

## リーダーシップ

| ロール | 担当者 |
| --- | --- |
| ステージリード | Mark Mishaev（`@mmishaev`） |
| Senior Staff Engineer | James Hebden（`@jhebden`） |

## チーム

| グループ | Engineering Manager | Tech Lead | ラベル |
| --- | --- | --- | --- |
| [Authentication](authentication/) | Adil Farrukh（`@adil.farrukh`） | Smriti Garg（`@sgarg_gitlab`） | `group::authentication` |
| [GATE Infra](gate-infra/) | Adil Farrukh（`@adil.farrukh`） | Matthias Käppler（`@mkaeppler`） | `group::gate infra` |
| [GATE Core](gate-core/) | Adil Farrukh（`@adil.farrukh`） | Shilpa Kundapur（`@skundapur`） | `group::gate core` |
| [Authorization](authorization/) | Jordon Proctor（`@jpr0c`） | Ian Anderson（`@imand3r`） | `group::authorization` |
| [Abuse Engineering](abuse-engineering/) | Jordon Proctor（`@jpr0c`） | Jay Swain（`@jayswain`） | `group::abuse engineering` |
| [Build Security](build-security/) | Mark Mishaev（`@mmishaev`、暫定） | 採用予定 | `group::build security` |
| [Dependency Firewall](dependency-firewall/) | Mike Eddington（`@mikeeddington`） | Mike Eddington（`@mikeeddington`） | `group::dependency firewall` |
| [Secrets Manager (Application)](secrets-manager/application/) | Connor Fleming（`@cfleming3`） | Erick Bajao（`@iamricecake`） | `group::secrets manager application` |
| [Secrets Manager (OpenBAO)](secrets-manager/openbao/) | Connor Fleming（`@cfleming3`） | Fabien Catteau（`@fcatteau`） | `group::secrets manager openbao` |

グループメンバー情報は Workday を情報源とし、[プロダクトカテゴリページ](/handbook/product/categories/#sec-section)で公開しています。

## ラベル

このステージの作業には、`devops::security platform` ステージラベルに加えて、担当グループの `group::` ラベルが付けられます。どちらもスコープ付きラベルであり、`gitlab-org` と `gitlab-com` のトップレベルグループに存在します。

## Slack

各グループのチャンネルは、それぞれのグループページに記載されています。複数のチャンネル名変更がまだ進行中であり、[Sec 再編 Issue 2](https://gitlab.com/gitlab-org/software-supply-chain-security/reorg-act2-2026-06/-/issues/2)で追跡しています。

## オンコール

このステージのチームは Sec オンコールローテーションに参加します。[Sec オンコールハンドブック](/handbook/engineering/development/sec/oncall/)を参照してください。
