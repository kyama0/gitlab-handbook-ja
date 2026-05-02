---
title: "Figma を使った比較インフォグラフィックの自動生成"
upstream_path: /handbook/marketing/developer-relations/technical-marketing/howto/autogen-comparison-infographics/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
---

## なぜ

比較インフォグラフィックを自動生成することは、グラフィック作成がデータ駆動になることを意味します。この価値はいくつかあります:

* 効率と品質 - グラフィックを各個人で手作業で作成するよりも、自動生成する方が **はるかに** 効率的でエラーが **はるかに** 少なくなります
* スケール - 各グラフィックを手作業で作成することはスケールしません。私たちは大量のデータに基づき、80 種類以上の詳細な画像を生成することを目指しており、それぞれに 106 以上のタッチポイントがあります
* イテレーション - インフォグラフィックのニーズが進化するにつれて、自動生成（および再生成）できれば、それほど重いコストをかけずにイテレーションが可能になります

## 手順

1. データの準備
   1. 生データ
      1. 私たちが収集している [生比較分析のスプレッドシート](https://docs.google.com/spreadsheets/d/1Dd1wraHGVM21L942PsYxNj8Czfvq9XO7ysG1Gge5YEk/edit?ts=5f4996cc#gid=90532820)（GitLab メンバーのみ閲覧可能）です
      1. データ入力は `Comparison DATA ENTRY Sheet` タブで行われます。**右端を除き、このシートに列を追加または削除しないでください。それを行うと、他のすべてのシートが狂ってしまいます**。
      1. DATA ENTRY タブにデータを入力したら、`FIGMA_DATA-Focus-Sync` タブに切り替えます。これは Figma で消費するために表現されたデータです。
      1. グラフ化したいエントリについて、以下を確認してください
         * 「Logo」行（3）にロゴ画像があり、セル内のデータが `.png` または `.jpg` で終わる URL であること。それ以外の場合、使用しているプラグインが無限の読み込みループに入ってしまいます。
         * 「Competitor」行（2）に適切な名前が入っていること。これはインフォグラフィックに表示される名前です。大文字小文字、スペースなどを正しく確認してください。多くの作業がある場合、行 1 からコピーダウンし、title-case アドオンを実行し、find/replace で「-」と「_」を取り除くことができます。
      1. これでデータが準備できました。グラフを生成したい各競合について、「Competitor」行（2）からデータ列の最後（現在は行 110）までコピーし、その後. . . .
   1. ステージングデータ
       1. ファイル [Infographic Autogen – Working File - Template](https://docs.google.com/spreadsheets/d/1f1tsutSVxVIPU4FnYp8jnRIg1XafvXONO3tIBNb_N2A/edit?usp=sharing) のコピーを作成します。
       1. ファイルが **誰でも閲覧可能** であることを確認します。これはプラグインの動作に必要です。
       1. `Template-EDIT A COPY` タブのコピーを作成します（新しいタブ名は何でも構いませんが、私は「runX」を使い X を増やしていきます）。
       1. このタブがリストの最初になるようにします。
       1. 次の方法で、コピーした競合情報を新しいタブに **貼り付けます**:
          1. 最初の空の列で、「logo1」行（4）にカーソルを置きます。
          1. 右クリック => 「Paste special」 => 「Paste values only」
       1. サニティチェックとして、「overview-percent」行（6）に貼り付けたパーセンテージが表示されているはずです。
       1. 競合名を「Competitor1 - Competitor3」行（1-3）にコピーします。
       1. ロゴ URL を「logo1」行（4）と「logo2」行（5）にコピーします。
1. Figma の準備
   1. テンプレートファイルをセットアップ
      1. 一度に好きなだけ多くの競合インフォグラフを作成できますが、Figma ファイルテンプレートがその数に一致していることを確認する必要があります。
      1. Figma ファイル [GitLab vs. Campaign - Infograph Creation Template](https://www.figma.com/file/2HuDUksjDrflFNj4pQKSjG/GitLab-vs.-Campaign-Infograph-Creation-Template) を開きます - **これは読み取り専用ファイルです**
      1. このファイルのコピーをローカルの Figma ワークスペースに作成します
      1. このファイルの左側に `pages` があります。`GitLab vs. Competitor Template, v2` ページを右クリックします。
      1. 「Duplicate Page」を選択します。
      1. 混乱を避けるため、新しいページをすぐにリネームします。（私は「Run X」を使い X を増やしていきます）
      1. 新しいページで
         1. 左下のペインに移動し、「competitor-vs-gitlab」という名前のオブジェクトを見つけます。それをロック解除します（右側のアイコン）。
         1. インフォグラフ全体（「competitor-vs-gitlab」オブジェクト）のコピーを必要な数だけ作成します。*ヒント* 6 と 12 のインフォグラフがあらかじめセットアップされた 2 つのテンプレート（ページ）があり、その代わりにそこから始めることもできます。
      1. これで Figma ファイルがインポート用に準備できました
   1. プラグインのインストール
       1. これは [Google Sheets Sync](https://www.figma.com/community/plugin/735770583268406934/Google-Sheets-Sync) という素晴らしい Figma プラグインで動作します。<-------- Figma にもログインしているブラウザセッションからこのリンクをクリックして、Figma インスタンスにインストールします。
       1. それだけです。簡単でしょう？
1. 自動生成を実行
   1. Figma で生成したいページが表示されていることを確認します
   1. Figma の「ハンバーガー」メニュー（左上、3 本の平行な水平線）に移動します
   1. 「Plugins」 => 「Google Sheets Sync」を選択します
   1. 表示されるダイアログで、「Enter Sheets shareable link here」と表示されている場所に、先ほど作成したステージングファイルの URL を貼り付けます。**注意** このファイルは誰でも閲覧可能である必要があります。
   1. プルダウンで `Update current selection only` を選択します
   1. 「Fetch & sync」ボタンをクリックします
   1. 魔法を見守ります. . .
   1. ヘッダーエリアのロゴサイズと競合名を、それらのアイテムの入力サイズに基づいて少し調整する必要があるかもしれません。
1. 結果を取得して使用する
   1. 結果のエクスポート
      1. インフォグラフが生成されたら、左パネルに戻り、各オブジェクト名（「competitor-vs-gitlab」）を、そのインフォグラフ上の競合名を反映するように変更します（左パネルでクリックして、どのインフォグラフが選択されるかを確認します）。
      1. 何も選択されていないことを確認します（背景をクリック）
      1. 「ハンバーガー」メニューに移動します
      1. 「File」 => 「Export」を選択します
      1. 表示されるボックスで、「competitor-vs-gitlab」画像のみを選択します
      1. 「Export」ボタンをクリックして、ハードドライブのどこかにファイルを保存します。
   1. 結果の使用
      1. ファイルを解凍して、エクスポートされたすべての画像のフォルダーを取得します
      1. 結果として得られる画像は比較ページの目的には大きすぎるので、リサイズします
         1. Mac では、Terminal を開いてフォルダーに移動します
         1. ターミナルで `sips -Z 1081 *.jpg` コマンドを実行します
         1. これにより、各ファイルが 1081x1080（縦x横）に変換されます
      1. 画像を必要な場所にアップロードします

## 動画

* [どのように完成するか](https://youtu.be/zUJH0aK41xE)
* [手順の動画版（上記の手順を動画で）](https://youtu.be/2hR0guFTtPI)

## 魔法のような Google Sheets Sync Figma プラグイン

* [プラグインページ](https://www.figma.com/community/plugin/735770583268406934/Google-Sheets-Sync)
* [プラグインのドキュメント](https://www.figma.com/proto/VtXf9HikcehWB7FJrJmApl/Google-Sheets-Sync-%E2%80%93-Documentation?scaling=min-zoom&node-id=3%3A2)
