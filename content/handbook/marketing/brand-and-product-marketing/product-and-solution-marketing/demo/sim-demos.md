---
title: "シミュレーションデモ"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/sim-demos/
upstream_sha: c26b483f365d397f86ef45e60a892d0783588ac1
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-04T01:51:25+00:00"
---

## サマリー

このページでは、シミュレーションデモの使用方法と作成方法について説明します。

## シミュレーション (sim) デモとは何ですか?

スライド、動画、その他のメディアでは不十分なときがあります。顧客と一緒にいるときや展示会のステージにいるとき、ライブのプロダクトデモはスライドや動画よりはるかに優れています。しかし、ライブデモは、技術的な問題から、コンテンツや配信の質が低いものまで、課題が伴うことがあります。Sim デモは、技術的、コンテンツ的な課題を排除し、小規模または大規模なグループでのすべてのデモプレゼンテーションが毎回完璧に行われることを保証します。Sim デモは信頼性が高く、プレゼンテーションが簡単で、聴衆に毎回ライブのようなデモを提供します。

## sim デモとクリックスルーデモの違いは何ですか?

レガシーのオフラインデモは、私たちの定義ではクリックスルーデモです。クリックスルーデモは Google Slides のプレゼンテーションで、プロダクト機能やユースケースのデモに役立ちます。各スライドにはプロダクトのスクリーンショット、注釈、いくつかの箇条書きが含まれます。

新しいオフラインデモはシミュレーション (sim) デモと呼ばれます。これらは MAC または Windows 用の実行可能ファイルで、ローカルで実行できます。HTML 版もあります。これらは [DemoEasel](https://www.demoeasel.com) というツールで作成されます。

クリックスルーと sim デモの両方は、ライブデモのように見え感じます。デモの聴衆はライブプロダクトの体験を得て、デモを行う担当者は何を言うかに集中でき、フローが常にリスクなく実行されるという確信を持てます。Sim デモには、リアリズムを高めるためにクリック間に短いアニメーションも含まれます。

レガシーのクリックスルーデモと新しい sim デモの両方は、[Learn@GitLab ページ](https://university.gitlab.com/) から利用可能です。

## クリックスルーと sim デモの使用

### クリックスルーと sim デモを誰が使えますか?

- 新入社員 - プロダクトを学ぶために使用します。
- SDR、ソリューションアーキテクト、SAE - 顧客に GitLab デモを提供します。
- エグゼクティブ - 基調講演デモを提供したり、エグゼクティブにデモを提供します。
- フィールドマーケティング - 展示会やイベントで sim デモを使用します。
- GitLab デモを提供する必要があるが、インターネットにアクセスできない場合。
- プロダクトの動作を見たい、それを発表したいという非技術系ユーザー。

### クリックスルーデモはどう使えますか?

- Web ブラウザで起動して実行されます。または、Google Slides のファイルに移動してそこから実行することもできます。
- 標準的な Google Slides プレゼンテーションインターフェイスを使用します

### sim デモはどう使えますか?

- デモをローカルにダウンロードします
- 展開します
- デモ実行ファイルを開きます
- macOS Catalina の場合 - 次のセクションの手順に従い、ここに戻って続行します
- Present Demo をクリックします
- sim デモのヘルプが必要な場合は、Slack チャンネル `#dev-advocacy-team` で TMM に連絡するか、[Product and Solution Marketing Request issue](https://gitlab.com/gitlab-com/marketing/product-marketing/issues/new?issuable_template=A-SM-Support-Request) を開いてください。

#### MacOS Catalina

MacOS Catalina ではデモファイルを開くとエラーが表示されます。

![GitLab Project](https://about.gitlab.com/images/tech-pmm/errorcatalina.png)

開くには、デモファイルを右クリック -> Open

![GitLab Repository](https://about.gitlab.com/images/tech-pmm/demofilecatalina.png)

新しいダイアログが表示されるので、Open をクリックします。

![GitLab Repository](https://about.gitlab.com/images/tech-pmm/dialogopencatalina.png)

## sim デモの作成

### 誰が sim デモを作成できますか

誰でも [DemoEasel](https://www.demoeasel.com/download) をダウンロードしてデモを録画・編集できます。デモを作成・編集するためにライセンスは不要です。ただし、デモパッケージを生成するにはライセンスが必要です。Developer Advocacy チームがライセンスを購入しており、チームが喜んでパッケージを生成します。優先順位は顧客対応用のデモで、他のチームメンバーが再利用できるものです。

### ユースケースを定義する

デモはプロダクトの価値を強調するもので、市場の課題をどう解決するかを示すべきです。機能に焦点を当てるだけでは、それらがどんなに堅牢でも、課題をどう解決するかを顧客が理解しなければ関連性がありません。

成功するデモを計画するには

1. 顧客の課題と GitLab がこの課題をどう解決するかを特定します。
1. この課題をどう解決するか、競合よりどう優れているかを示すデモフローを定義します。
1. 短いデモ（最大 20 ステップ／クリック／画面、2 〜 5 分で発表できるデモ）を作成することが推奨されます。

### 環境を準備する

1. 開いているすべてのウィンドウを閉じ、GitLab インスタンスが開いている Chrome ウィンドウのみを残します。
1. スクリーンキャプチャの準備ができた、適切なデモデータで構成された安定したデモフローを持つ必要があります。
1. ブラウザを準備し、ブックマークと通知を非表示にします。
1. OS の通知を非表示にします。
1. 次のスクリプトを使用して Chrome を必要な解像度にリサイズします。
1. MacBook で Script Editor を開き、このスクリプトを貼り付けます

```text
set theApp to "Google Chrome"
set appHeight to 1080
set appWidth to 1920

tell application "Finder"
set screenResolution to bounds of window of desktop
end tell

set screenWidth to item 3 of screenResolution
set screenHeight to item 4 of screenResolution

tell application theApp
activate
reopen
set yAxis to (screenHeight - appHeight) / 2 as integer
set xAxis to (screenWidth - appWidth) / 2 as integer
set the bounds of the first window to {xAxis, yAxis, appWidth + xAxis, appHeight + yAxis}
end tell
```

1. スクリプトを実行します。これによりブラウザが 1080*1920 にリサイズされます。必要に応じて、スクリプト内のこれらのパラメータを別の画面解像度のために変更できます。

### デモをキャプチャする

1. [DemoEasel](https://www.demoeasel.com/download) をダウンロードしてインストールします。
1. DemoEasel を開き、**New Demo** をクリックして提示されるヒントを読んで従い、**Start Capture** をクリックします。
1. フローをナビゲートします。DemoEasel はすべての画面とクリックをキャプチャします。
1. 録画を完了するには、下のドックの DemoEasel アイコンをクリックして UI を表示します
1. **Abstract Demo** をクリックします。
1. DemoEasel は録画されたウィンドウ (Chrome) を自動的に認識し、Auto Cropping を提案します。このオプションを受け入れます。
1. デモの名前を定義し、**OK** をクリックします。

### 編集と最適化

デモがキャプチャされたら、DemoEasel のエディタを使ってデモを最適化・ドキュメント化することで、他の人が簡単にデモを発表できるようにします。

1. デモリストから編集したいデモを選択し、**Edit the Demo** ボタンをクリックします。
1. エディタは基本的および高度な機能を提供します。最初は、以下の項目に慣れることが重要です:
   - 赤いボックス - 自動的に追加されたすべての赤いボックスが、正しい場所とサイズで適切に見えることを確認します。必要に応じてドラッグして適切な位置に手動で調整できます。
   - Edit Note - 各ステップにメモを追加します。メモはステップを説明し、次のクリック先を指定します。
   - 録画されたすべてのフレームを確認し、不要な録画フレームを非表示にします。
   - フレームの速度を制御します。
   - フレームのエクスポート／インポート。

詳細については、DemoEasel フォルダ内の **Getting Started.html** をお読みください。

### パッケージとシェア

GitLab で使用するパッケージには 2 種類あります: **browser** (HTML5) と **simulation** (Windows/macOS 実行可能ファイル) です。
Developer Advocacy チームは **browser** デモパッケージを作成して [handbook のデモページ](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/#click-throughs) にアップロードし、従業員と顧客がプロダクトとユースケースを学べるようにしています。iOS をサポートするため、イベントのデモブースで GitLab をデモするためにも **browser** タイプを使用しています。

顧客対応のデモや基調講演には、パフォーマンスが優れていて、聴衆により実物に近いデモ体験を提供する **simulation** バージョンを使用することが推奨されます。ただし、透明性のため、シミュレーションデモを発表する際には、これがプロダクトシミュレーションでありライブデモではないことを必ず最初に告知します。

誰でも sim デモに貢献して作成できますが、ライセンス制限のため、メッセージの一貫性を保つため、一貫した高品質と外観を確保するために、Developer Advocacy チームがデモをレビューしてフィードバックを提供し、その後あなたのために最終的なデモパッケージを生成します。

チームにデモのレビューとパッケージ生成を依頼するには

1. デモの編集、メモ、最適化を作成・完了したら、DemoEasel インストールフォルダの '*Demos*' フォルダに移動して、デモの名前のフォルダを見つけます（このフォルダには 3 つのファイルがあります）。
1. フォルダ全体を [source files](https://drive.google.com/drive/folders/1tbmY1zg9taLSqH-clJSrcuEcwP2rqMfA?usp=sharing) にアップロードします。アクセス権を GitLab 内の誰にでも設定します。
1. [Product and Solution Marketing Request issue](https://gitlab.com/gitlab-com/marketing/product-marketing/issues/new?issuable_template=A-SM-Support-Request) を開きます。
   1. "Type of work requested" として `Demo or workshop` を選択します。
   1. "Request details" の下に以下を追加します:
      1. "Sim demo publishing support"
      1. デモで紹介する顧客の課題と解決策を説明します。
      1. アップロードしたデモファイルのパスを含めます。

チームはデモをレビューし、改善提案がある場合があります。デモがリリース準備できたら、チームはデモパッケージを作成し、それへのリンクを提供して Issue をクローズします。
