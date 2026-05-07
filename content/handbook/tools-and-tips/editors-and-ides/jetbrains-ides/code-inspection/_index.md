---
title: "コードインスペクション"
simple_list: true
upstream_path: /handbook/tools-and-tips/editors-and-ides/jetbrains-ides/code-inspection/
upstream_sha: 6f672d050777a6a6cb33fc5f31ccf71ebdd5b812
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
---

## コードインスペクション

(***「コード中の `noinspection` コメントは何ですか？」と質問するためにこのページに来た方は、詳しい説明のために [「なぜ `noinspection` コメントが存在するのか」](why-are-there-noinspection-comments/) のページを読んでください。**
JetBrains でコードインスペクションを効果的に使う方法を学びたいだけなら、このページが探しているページです…*)

JetBrains の IDE の優れた機能の 1 つに「Inspect Code」（`Code -> Inspect Code`）があります。

この機能の説明はこちらをご覧ください: <https://www.jetbrains.com/help/ruby/running-inspections.html>

以下のセクションでは、この機能を最大限に活用する方法について詳しく説明します。

## 「Inspect Code」をクリーンに保ち「グリーンチェック」を維持する

これにより、RuboCop/ESLint といったプロジェクト設定済みのリンターはもちろん、型安全性や潜在的なバグなどのカスタム IDE インスペクションも含め、すべてのコードインスペクションを実行できます。実行後、それらの結果は「Problems」ペインに表示されます。

「Problems」ペインに加えて、エディター上では問題箇所が下線で示され、瞬時にフィードバックが得られます。また、各ファイルの右上にはアイコンですべての問題のサマリーが表示されます。これらすべてはマウスでホバーするとエラーへの対処方法のオプションが表示され、場合によっては自動的に修正することも可能です。

そして、ファイルに問題がない場合は、ファイル右上に「グリーンチェック」が表示され、常時かつ即時のフィードバックとなります。

これらは強力な時間短縮ツールとなり、「LEFTHOOK」のような pre-push フックや、それより悪い場合は CI が問題を検出するのを待つことなく、即座に問題を発見するのに役立ちます。

## 「Next Error」ショートカット

**プロのヒント:** `Settings -> Editor -> Code Editing -> Error Highlighting -> The 'Next Error' action goes through` を `"All Problems"` に設定すると、`F2` でファイル内のすべてのエラーを巡回でき、`Alt-Enter` と矢印キーでエラー解決オプションを表示できます。

## `noinspection` コメントによる偽陽性の抑制

ただし、「Inspect Code」が「偽陽性」の問題を報告することがあります。これらは通常、IDE のバグや制限、あるいはライブラリの誤った型注釈などが原因です。

原因が何であれ、これらの偽陽性を抑制するのは良いことです。理由は以下のとおりです:

1. これらが「Problems」ペインにノイズを発生させ、無視せざるを得なくなります。あるいは、本来は他に問題のないファイルで「Problems」ペインがポップアップしないはずなのに、ポップアップしてしまうケースもあります。
1. 他に本物の問題がないファイルにきれいな「グリーンチェック」が表示されるのを妨げます。
1. そのコードに不慣れな JetBrains ユーザーにとっては、それが本物の問題なのか、修正すべきものなのかを判断する手がかりがなくなります。

これらの偽陽性を抑制する方法は `noinspection ...` コメントを使うことです: <https://www.jetbrains.com/help/ruby/disabling-and-enabling-inspections.html>

`F2`（Next Error）の後に右矢印を押すと、問題を無視するための正しい `noinspection ...` コメントを自動で追加できます。ただし、`gitlab` プロジェクトでの RuboCop 警告を避けるため、`#` の後にスペースを手動で追加する必要があります。

`noinspection` コメントを自動的に追加するには、次の手順を使います:

1. コード上の警告行で `Option-Enter` を押すか（`F2` でその行を見つけた後）、または「Inspect Code」の `Problems` ペインのレポートでエラーを右クリックします。
1. 表示されたメニューで `Suppress for statement` オプションを見つけてクリックします。
1. 現在、Ruby では `#` の後にスペースを入れないバグがあるため、rubocop エラーを避けるため手動でスペースを追加する必要があります（TODO: これに関する Issue を RubyMine に対して登録してください）
1. これによって、偽陽性のないクリーンなレポートとグリーンチェックが得られます :)

## `noinspection` ごとに説明やリンクを添える

これらの `noinspection` コメントは、JetBrains を使っていないユーザーを混乱させる可能性があります。

そのため、それぞれのコメントには、なぜそれが必要だったかを説明するコメントを添え、参照可能な情報へのリンクも記載するべきです。

*JetBrains のバグや制限のために必要だった場合は、[Tracked JetBrains Issues](../tracked-jetbrains-issues) ページの該当エントリを参照してください*。該当エントリがまだ存在しない場合は、次のいずれかを行ってください:

1. JetBrains に対して Issue を登録し、そのページに追加する（こちらが推奨）。
1. JetBrains の Issue を特定したり起票したりする時間がない場合は、そのページを指す `TODO:` リンクを残し、後で JetBrains の Issue を特定または起票する必要があることを示してください。

## `noinspection` と説明は 1 行で書く

すべての `# noinspection - <リンクや説明>` コメントは、1 行に収めるべきです。

これは、古くなった／修正された `# noinspection` 行を削除する際に、関連付けられている別の説明行の削除を忘れる可能性を避けたいためです。

これは、関連する `# rubocop:disable Layout/LineLength` を別の行に置く必要がある場合でも、一貫して行ってください（必要なくなった `# rubocop:disable` が残っていると、別の RuboCop 警告が発生するためです）。

その他に検討した選択肢:

- URL 短縮サービスを利用する案もありますが、不明な遷移先のリンクをクリックするセキュリティ面の懸念がありました。
  [社内 URL 短縮サービスの可能性については過去に議論し却下されています](https://gitlab.com/gitlab-com/gl-infra/reliability/-/issues/861)。
- 一部のコメントから説明やリンクを省略する選択肢もありますが、それでは「コメントの目的が分からない人」「繰り返し質問に対応せざるを得ない人」が出てしまうという、もとからある問題が解消されず、このセクションを通じて自力で答えを発見してもらうこともできなくなります。

## カスタムスコープを使った `Inspect Code` の利用

コードインスペクション（およびその他の JetBrains の操作）をより高速かつ強力にする方法の 1 つとして、*カスタムスコープ* の利用があります。

現在作業中の機能に関連するファイルだけを選択するカスタム「Scope」を整備すれば、このレポートを使ってそれらのファイル内のすべての警告／エラーを見つけることもできます。

セットアップ手順の簡単なリストはこちらです（TODO: より詳細／リンクを追加してください）:

1. すべての linting プラグインが有効化・設定されていることを確認します: rubocop、eslint、prettier（Preferences の検索でこれらを探してください。デフォルトで有効なものもあります）
1. Preferences -> Editor -> Code Editing -> Error Highlighting セクションで、`The 'Next Error' action goes through` を `All problems` に変更します
1. デフォルトで現在のファイル内のすべてのハイライトが見られるようになります。
1. `F2`（next error）で現在のファイル内のすべてのエラーを巡回できます。エラー上で `Option+Return` を押すと、可能な修正のメニューが開きます。
1. 複数ファイルをチェックするには、`Inspect Code` 機能（Cmd-shift-A -> "Inspect Code"）を使い、対象として個別ファイルやカスタムスコープを選択できます。
1. 作業中の機能やコード領域のためのファイルのみを含むカスタムスコープを設定することもできます
    1. Preferences -> Appearance and Behavior -> Scopes
    1. `+` でスコープを追加し、名前を付けます（例: `remote_dev`）
    1. Include/Exclude/Recursively ボタンを使って、スコープに含めるファイルを定義します。
    1. 他のチームメンバーと共有可能な `remote_dev` スコープ定義の現状の例: `file[gitlab]:ee/lib/remote_development//*||file[gitlab]:ee/spec/factories/remote_development//*||file[gitlab]:ee/spec/lib/remote_development//*||file[gitlab]:ee/app/services/remote_development//*||file[gitlab]:app/models/remote_development//*||file[gitlab]:ee/app/graphql/mutations/remote_development//*||file[gitlab]:ee/app/graphql/resolvers/remote_development//*||file[gitlab]:ee/app/graphql/types/remote_development//*||file[gitlab]:ee/app/models/remote_development//*||file[gitlab]:ee/spec/graphql/types/remote_development//*||file[gitlab]:ee/spec/models/remote_development//*||file[gitlab]:ee/spec/services/remote_development//*||file[gitlab]:ee/app/finders/remote_development//*||file[gitlab]:ee/spec/features/remote_development//*||file[gitlab]:ee/spec/support/shared_contexts/remote_development//*||file[gitlab]:ee/app/graphql/ee/types/user_interface.rb||file[gitlab]:ee/app/graphql/resolvers/concerns/remote_development//*||file[gitlab]:ee/app/graphql/resolvers/projects/workspaces_resolver.rb||file[gitlab]:ee/app/graphql/resolvers/users/workspaces_resolver.rb||file[gitlab]:ee/spec/requests/api/graphql/mutations/remote_development//*||file[gitlab]:ee/spec/requests/api/graphql/remote_development//*||file[gitlab]:ee/spec/finders/remote_development//*||file[gitlab]:ee/app/assets/javascripts/remote_development//*||file[gitlab]:ee/spec/frontend/remote_development//*||file[gitlab]:ee/spec/graphql/api/workspace_spec.rb`
    1. XML ファイルを直接共有することもできます。`.idea/scopes/SCOPE_NAME.xml` 配下にあります。
    1. Workspaces に関連した Chad の現在のスコープ例 2 つ:
       1. すべての remote dev ファイル: <https://gitlab.com/jetbrains-ide-config/jetbrains-ide-config-gitlab/-/blob/master/dotidea/scopes/remote_dev.xml>
       1. remote dev の services と lib ファイルのみ: <https://gitlab.com/jetbrains-ide-config/jetbrains-ide-config-gitlab/-/blob/master/dotidea/scopes/remote_dev_services___lib.xml>
