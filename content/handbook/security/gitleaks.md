---
title: "ノートパソコンでの gitleaks"
upstream_path: /handbook/security/gitleaks/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
---

## ノートパソコンでの gitleaks

このハンドブックページに辿り着いたのは、おそらくローカルマシンでの `git commit` 中に、私たちの[gitleaks のインストール](https://gitlab.com/gitlab-com/gl-security/security-research/gitleaks-endpoint-installer)からここに案内されたからでしょう。[`gitleaks`](https://github.com/gitleaks/gitleaks) ツールは、パーソナルアクセストークンやその他の認証情報といったシークレットを公開リポジトリに誤ってコミットしてしまうという、よくあるセキュリティ Issue を防ぐために GitLab エンドポイント上で使われています。1 つのリポジトリで漏洩したアクセストークンが、あなたのアカウントがアクセス権を持つすべてのリポジトリやプロジェクトに影響しうるため、すべてのリポジトリがカバーされていることが重要です。

## 何が起きたのですか？

`gitleaks` が、シークレットのように見える何かを git リポジトリにコミットしようとしていることを検出しました。出力は次のようになるはずです。

```text
    ○
    │╲
    │ ○
    ○ ░
    ░    gitleaks

{
        "Description": "GitLab Personal Access Token",
        "StartLine": 7,
        "EndLine": 7,
        "StartColumn": 2,
        "EndColumn": 27,
        "Match": "REDACTED",
        "Secret": "REDACT",
        "File": "testfile",
        "Commit": "",
        "Entropy": 0,
        "Author": "",
        "Email": "",
        "Date": "0001-01-01T00:00:00Z",
        "Message": "",
        "Tags": [],
        "RuleID": "gitlab-pat"
}
9:27AM WRN leaks found: 1
9:27AM INF scan duration: 51.840347ms
```

`Description` フィールドには `gitleaks` が検出したシークレットの種類が表示されます。`File` フィールドに記載されているファイルの `StartLine` を確認することで検証できます。

## どうしたらよいですか？

プレーンなシークレットをコードリポジトリに保存することは決して良い慣行ではありません。コミットしようとしたファイルから問題のシークレットを削除し、安全な場所を見つけてください。何をすべきか不安な場合は、[#security Slack チャンネル](https://gitlab.slack.com/archives/C248YCNCW)で気軽に質問してください。

`gitleaks` によって検出されたシークレットが間違いなく誤検知であり、それでもコミットしたい場合は、環境変数 `I_WANT_GITLEAKS_SKIP` を一度だけコミット用に設定して、このコミットの `gitleaks` スキャンを回避してください。コマンドラインでは次のようになります。

```sh
I_WANT_GITLEAKS_SKIP=1 git commit -m 'Commit a dummy secret'
```

この変数を恒久的に設定**しないで**ください。保護メカニズムを破壊することになります。バージョン `8.5.0` 以降には、シークレットと同じ行に `gitleaks:allow` を含めることでダミーシークレットを無視する [機能](https://github.com/gitleaks/gitleaks/pull/809) も `gitleaks` にあります。
