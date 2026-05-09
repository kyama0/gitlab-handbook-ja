---
title: "1Password と環境変数"
description: "ローカル開発における安全なシークレット取り扱い"
upstream_path: /handbook/tools-and-tips/onepassword-cli/
upstream_sha: 68af60af15ea4dcb51c3d985f7473b212e4f2cb4
translated_at: "2026-05-07T15:33:18Z"
translator: claude
stale: false
---

ノート PC で利用するシークレットは、安全に保管・利用する必要があります。
その理由と基本的な概念は [1Password ページ](../security/password-guidelines/) で説明されています。
まだ読んでいない場合は、先にそちらを読むことをおすすめします。
このページでは、これらの基本原則をワークフローに統合するためのユーザーフレンドリーな方法を扱います。

### エイリアスを使った標準コマンド設定

エイリアスは、特定の単一のコマンドが常に特定の単一のシークレットセットを使用するべき場面でうまく機能します。

たとえば、PAT で `glab` を呼び出すためのエイリアスをシェルプロファイルに定義できます:

```sh
alias glab="op run --env-file=$HOME/.gitlab-pat.env -- glab"
```

設定を確認するには、`glab api version` を実行してください。設定が成功していれば gitlab.com のバージョンが表示されます。

```sh
glab api version
{"version":"15.4.0-pre","revision":"3e84f577d51"}
```

### .bashrc を使ったマルチ環境利用

頻繁に利用する環境が複数ある場合、適切な環境のシークレットを簡単にロードする関数を作成できます。

その一例が以下です。これは bash に 'loadenv' コマンドを追加し、現在のディレクトリが git リポジトリであり、$HOME/devenv/envfiles に名前が一致する環境変数ファイルがある場合に、関連する環境変数すべてを含むサブシェルを自動的に起動します。
変更された $PS1 は 'ENVFILE' 変数の存在をチェックし、存在すればシェルプロンプトに表示して、このシェルでどの環境ファイルがロードされているかを示します。

```shell
# Base PS1 + add ($ENVFILE) in red if set
export PS1='\[\e]0;\u@\h: \w\a\]${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]$([ -n "$ENVFILE" ] && echo -n " \e[91m($ENVFILE)\e[0m")\$ '

alias project="git remote get-url origin | sed -e 's/^.*\///g' | sed -e 's/\.git$//g'"
# Environment file load
loadenv() {
  ENVFILE=$(project) op run --env-file="$HOME/devenv/envfiles/$(project).env" --no-masking -- /bin/bash
}
```

これを .bashrc に追加して source すると、次のようにコマンドを実行できます:

```shell
username@my-laptop:~/code$ cd example-project
username@my-laptop:~/code/example-project$ loadenv
username@my-laptop:~/code/example-project (example-project)$ curl -X POST --form token=$PIPELINE_TOKEN --form ref=main https://gitlab.com/api/v4/projects/example-project/trigger/pipeline
{"id":1252595607,"iid":12960,...long output removed...
```

その後、シークレットが不要になったらサブシェルを終了でき、これがプロンプトに反映されます。

```shell
username@my-laptop:~/code/example-project (example-project)$ exit
exit
username@my-laptop:~/code/example-project$
```

これにより、実行する正確なコマンドにかかわらず、特定の git リポジトリに対する標準的な変数セットを維持できます。
