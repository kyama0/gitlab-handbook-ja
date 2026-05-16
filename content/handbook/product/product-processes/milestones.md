---
title: "プロダクトマイルストーン"
upstream_path: /handbook/product/product-processes/milestones/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-20T08:52:12-07:00"
---

計画を立てる際、プロダクトマネージャーは GitLab マイルストーンに向けて計画を立てます。ここでは、マイルストーンを作成・維持するプロセスを説明します。

## プロダクトマイルストーンの作成

**1 四半期先** に、エンジニアリングチームはプロダクトチームと協力して、次の四半期に必要なすべてのマイルストーンを作成します。標準的な実践として、毎年 5 月にメジャー [リリース](https://about.gitlab.com/releases/) を行います。結果は次のとおりです:

```text
XX.0 - 5月
XX.1 - 6月
XX.2 - 7月
XX.3 - 8月
XX.4 - 9月
XX.5 - 10月
XX.6 - 11月
XX.7 - 12月
XX.8 - 1月
XX.9 - 2月
XX.10 - 3月
XX.11 - 4月
```

マイルストーンの開始日と終了日は次のように定義されます:

> 次のマイルストーン `m+1` は、現在のマイルストーン `m` のリリース日の前の土曜日に開始し、マイルストーン `m+1` のリリース日の前の金曜日まで続きます。

GitLab でマイルストーンを更新するには、Product Operations は次の手順に従います:

### ステップ 1: .org

1. 関連するマイルストーンが作成されていることを確認します。[.org の GitLab マイルストーンへ](https://gitlab.com/groups/gitlab-org/-/milestones)
1. 右上の `New milestone` をクリックします
1. 適切な `dot` リリース名でマイルストーンにタイトルを付けます。
   - 注: 毎年 5 月の `.0` リリースから始まり、各リリースで `.0` 以降を順に増やしていきます。
1. 開始日を、前のリリースの [リリース日](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule) の前の土曜日に設定します
1. 終了日を、リリース月の第 3 木曜日の前の金曜日に設定します
1. マイルストーンのクローズは [エンジニアリングワークフロー](/handbook/engineering/workflow/#milestone-cleanup) で行います

### ステップ 2: .com

1. Product、Marketing などの一貫性のために、`.com` が `.org` のマイルストーンをミラーすることを確認します。
1. 関連するマイルストーンが作成されていることを確認します。[.com の GitLab マイルストーンへ](https://gitlab.com/groups/gitlab-com/-/milestones)
1. 右上の `New milestone` をクリックします
1. `.org` と一致する `dot` リリース名でマイルストーンにタイトルを付けます。
   - 注: 毎年 5 月の `.0` リリースから始まり、各リリースで `.0` 以降を順に増やしていきます。
1. 開始日を、前のリリースの [リリース日](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule) の前の土曜日に設定します
1. 終了日を、リリース月の第 3 木曜日の前の金曜日に設定します
1. マイルストーンのクローズは [エンジニアリングワークフロー](/handbook/engineering/workflow/#milestone-cleanup) で行います

## リリースを理解する

[リリース定義](/handbook/engineering/releases/) はエンジニアリングチームによって維持されており、各マイルストーンの終わりに [リリース日](/handbook/engineering/releases/) を実行します。

## プロダクトマイルストーンの使用

- これらのマイルストーンは、各リリースのボードと Issue を作成するために使用されます
- [Product Development Google Calendar](https://calendar.google.com/calendar/embed?src=gitlab.com_baef86oeitmd9uuq7m9i8021j8%40group.calendar.google.com) (WIP) もこれらのマイルストーン名と日付を使用します。

## 関連リンク

- [エンジニアリングリリース定義](/handbook/engineering/releases/)
