---
title: "GitLab Security Essentials - ハンズオンラボ: 脆弱性への対応"
description: "このハンズオンガイドは、アプリケーションの脆弱性をトリアージして対応する方法を案内します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabsecurityessentialslab2/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

> 推定所要時間: 15 分

前のラボでは、SAST とシークレット検出スキャナーをプロジェクトに導入しました。このラボでは、脆弱性をトリアージして解決する方法を探ります。

## タスク A. 脆弱性トリアージプロセス

1. Security Labs プロジェクトに移動します。

1. 左サイドバーで **Secure > Vulnerability Report** を選択します。トリアージプロセスを開始するには、まだトリアージされていない脆弱性に焦点を当てて、重大度順に脆弱性を並べ替えることをお勧めします。これがデフォルトの設定です。

1. セキュリティレポートで **Severity** を選択して並べ替え順を変更します。矢印が下を向いていて、重大度が高い順から低い順に並んでいることを確認します。

1. **GitLab Advanced SAST** スキャンで検出された脆弱性 **Active debug code** を選択します。

1. 脆弱性を確認します。`main.py` の HTTP デバッグコードが「True」に設定されているため、この検出結果は有効であることがわかります。

1. 右上隅の **Edit Vulnerability** をクリックし、**Change status** を選択します。ステータスを **Confirmed** に設定し、**Change status** をクリックします。

1. ページの下部にスクロールし、**Create issue** を選択します。

1. Issue には脆弱性のタイトルと詳細が自動的に入力されています。Issue の詳細を確認し、**Create issue** を選択します。

1. **Secure > Vulnerability Report** に戻ります。

1. 脆弱性 **Improper neutralization of special elements used in a SQL command ('SQL Injection')** の最初のインスタンスを選択します。

1. **Code flow** タブを選択します。

1. コードフローを確認して、脆弱性がどのように発生するかを確認します。右上隅の **Edit Vulnerability** をクリックし、**Change status** を選択します。ステータスを **Confirmed** に設定し、**Change status** をクリックします。

1. **Details** タブを選択します。

1. ページの下部にスクロールし、**Create issue** を選択します。

1. Issue を確認し、**Create issue** を選択します。

この時点で、アプリケーションのセキュリティ Issue として対処すべき 2 つの Issue を作成しました。これらの脆弱性を修正するプロセスを確認しましょう。

## タスク B. 脆弱性の修正

これらの脆弱性を解決するために、Duo Agent Platform（DAP）を使用します。Duo Agent Platform は GitLab の AI ソリューションで、Issue 作成、マージリクエストのレビュー、パイプラインの修復、そして今回のように脆弱性の改修にも役立ちます。

1. **Settings > General** に移動し、**GitLab Duo** をクリックします。**Turn on SAST false positive detection** と **Turn on SAST vulnerability resolution workflow** のスイッチをクリックしてオンにします。これらのオプションは、脆弱性の改修処理と、誤検知の可能性のチェックに役立ちます。

1. **Save changes** を選択します。

1. **Security > Vulnerability Report** に移動します。244 行目で検出された *Improper neutralization of special elements used in an SQL Command ('SQL Injection')* 脆弱性を選択します。

1. 脆弱性の右上隅で **AI Vulnerability Management** を選択し、**Explain with AI** を選択します。DAP ツールが脆弱性を分析し、その脆弱性がどのように悪用される可能性があるかを説明します。エージェントはまた、その脆弱性を改修する方法も説明します。

1. **AI Vulnerability Management** を選択し、**Explain with AI** を選択します。AI は、脆弱性を含むコードがコードベース内でどのように使われているかを分析し、誤検知かどうかをチェックします。実行には数分かかります。

1. **AI Vulnerability Management** を選択し、**Resolve with AI** を選択します。これにより、脆弱性を改修するマージリクエストが作成されます。AI が作成を完了すると、そのままマージリクエストに案内されます。

1. マージリクエストによって行われた変更を確認し、納得できたら **Merge** を選択します。

## ラボガイド完了

このラボ演習が完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabsecurityessentials)を参照できます。

## ご提案・改善点

ラボに変更を加えたい場合は、マージリクエストで変更内容を送信してください。
