---
title: "YouTube に動画を公開する"
upstream_path: /handbook/marketing/developer-relations/technical-marketing/howto/publish_video_on_youtube/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
---

### 1. 動画をアップロードする

1. GitLab で使用する YouTube チャンネルは 2 つあります:

   - [Branded](https://www.youtube.com/channel/UCnMGQ8QHMAnVIsI3xJrihhg): 広いコミュニティの人々向けの公式コンテンツに使用します。このコンテンツは Brand チームの承認が必要です。
   - [Unfiltered](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A): チームおよびコミュニティメンバー向けのコンテンツに使用します。このコンテンツは Brand チームの承認は不要ですが、すべてのブランドガイドラインに従い、最新のブランドアセットを使用する必要があります。

   ご質問があれば `#brand_video` Slack チャンネルで Brand チームにお問い合わせください。

   警告:
   これらのチャンネルに [**SAFE**](/handbook/legal/safe-framework/) データを公開してはいけません。何かが機密に該当する可能性があると思う場合は、法務に相談してください。

1. 動画を投稿したい GitLab YouTube アカウントにログインします。
   GitLab ログインからすでに権限があるはずです。
   権限がなく、必要だと思う場合はアクセスリクエストを開いてください。

1. プロフィール画像をクリックして **YouTube Studio** を選択します

   ![youtube studio option](/images/marketing/developer-relations/technical-marketing/publish_video_on_youtube/youtube_studio.png)

1. 次に、プロフィール画像の隣にある **CREATE** ボタンをクリックして **Upload videos** を選択します

   ![upload video option](/images/marketing/developer-relations/technical-marketing/publish_video_on_youtube/upload_video_option.png)

1. ポップアップウィンドウが表示され、動画のアップロードを求められます

   ![upload video popup](/images/marketing/developer-relations/technical-marketing/publish_video_on_youtube/upload_video_popup.png)

1. 動画がアップロードされると、動画設定画面が表示されます

   ![video configuration screen](/images/marketing/developer-relations/technical-marketing/publish_video_on_youtube/video_configuration_screen.png)

### 2. 動画の設定

1. **Details** タブでは、さまざまな動画設定を構成できます。その中でも:

#### タイトル

   1. タイトルは潜在的な視聴者が最初に目にするものの 1 つで、動画をクリックするかどうかの決定に重要な役割を果たします。
      - タイトルは動画の内容を明確に説明するべきです。
      - 簡潔に、要点を押さえてください。
   1. タイトルは検索にとって重要なため、タイトルを作成する際には、動画を検索するユーザーをターゲットにして、関連するキーワードを使用することを検討する必要があります。

#### 説明文

   1. 説明文は、トピックを明確に示し、視聴者が何を学べるかを素早く説明する必要があります。
   1. 最初の数行は重要で、検索結果や動画ページ上の「もっと見る」のフォールド上に表示されます。
      - 関連するキーワードを自然に説明文に組み込んでください。
      - それらは動画の内容と、ターゲットオーディエンスが検索する可能性のあるものに関連している必要があります。
   1. 動画内でリソース、ツール、または参照について言及する場合は、それらに関するリンクや詳細情報を含めてください。
   1. オーディエンスがあなたとつながれるプラットフォームへのリンクを提供してください。
   1. CTA（コールトゥアクション）を含めてください。
   1. 視認性向上のため、説明文の最後に関連するハッシュタグを含めてください

#### ハッシュタグ

   このドキュメントで [YouTube でのハッシュタグの使い方](https://support.google.com/youtube/answer/6390658?hl=en#:~:text=You%20can%20add%20hashtags%20to,to%20associate%20with%20your%20video) を確認してください

##### チャプター

   1. 動画が長い場合や、複数のトピックを扱う場合は、タイムスタンプを含めてください。
   1. 適切に構造化された正確なタイムスタンプを提供することで、ユーザーエクスペリエンスを向上させ、視聴者が最も関連性の高いコンテンツに簡単に移動できるようにし、視聴者のエンゲージメントと満足度を高めます。
   1. タイムスタンプには、時刻 **「HH:MM:SS」** に続いて、そのセグメントが何についてのものかの簡単な説明が含まれます。
   1. タイムスタンプを含め、動画をチャプターに分割するには、**Description** フィールドにタイムスタンプのリストを提供する必要があります

      ![timestamps in the description](/images/marketing/developer-relations/technical-marketing/publish_video_on_youtube/timestamps_in_description.png)

      これにより、公開された動画の下に次のようなビューが生成され、視聴者が興味のある動画部分を素早く見つけられるようになります

      ![chapters on published video](/images/marketing/developer-relations/technical-marketing/publish_video_on_youtube/published_video_chapters.png)

   1. タイムスタンプは動画に表示される順にリストしてください。
   1. それらが動画内のセグメントに正しく対応していることを確認してください。
   1. 動画内に特に重要または人気のある瞬間がある場合は、それらにタイムスタンプを付けてください。

#### サムネイル

   1. サムネイルは関連動画のレコメンドにとって重要です。
   1. 高解像度で目を引く画像を使用し、サムネイルが明確かつシンプルで、動画の内容を正確に表していることを確認してください。

#### タグ

   1. タグには、動画を正確に説明する関連性が高く具体的なキーワードを使用して、発見されやすさを高めてください。
   1. YouTube は多数のタグを許可していますが、使いすぎると効果が薄まる可能性があります。詳細については [YouTube タグについて](https://support.google.com/youtube/answer/146402?hl=en) のリンクを確認してください。

   ポップアップウィンドウの一番下までスクロールし、**SHOW MORE** を選択して **Details** タブの全設定リストを表示します:

   ![show more link in the details tab](/images/marketing/developer-relations/technical-marketing/publish_video_on_youtube/show_more_in_details_tab.png)

   このタブの設定が完了したら、**Next** ボタンを選択して **Video Elements** タブに進みます:

   ![next button in the details tab](/images/marketing/developer-relations/technical-marketing/publish_video_on_youtube/next_in_details_tab.png)

1. **Video Elements** タブでは、以下が可能です:
   - 字幕の追加
   - 動画の最後に関連コンテンツを宣伝するエンドスクリーンの追加
   - 動画中に関連コンテンツを宣伝するカードの追加

   ![video elements screen](/images/marketing/developer-relations/technical-marketing/publish_video_on_youtube/video_elements_screen.png)

#### カード

   動画中に他の動画、チャンネル、プレイリスト、リンクを宣伝するために **Cards** を使用し、動画内でカードが表示される時間を設定できます

   ![cards screen](/images/marketing/developer-relations/technical-marketing/publish_video_on_youtube/cards_screen.png)

#### エンドスクリーン

   [エンドスクリーンの追加方法](/handbook/marketing/developer-relations/technical-marketing/howto/add-ctas-to-learn-videos/) に関するこのガイドを確認してください

   **Next** ボタンを選択して **Checks** タブに進みます:

   ![next button in the video elements tab](/images/marketing/developer-relations/technical-marketing/publish_video_on_youtube/next_in_video_elements_tab.png)

1. **Checks** タブでは、YouTube が動画の検証ステータスを投稿します

   ![checks screen](/images/marketing/developer-relations/technical-marketing/publish_video_on_youtube/checks_screen.png)

   **Next** ボタンを選択して **Visibility** タブに進みます:

   ![next button in the checks tab](/images/marketing/developer-relations/technical-marketing/publish_video_on_youtube/next_in_checks_tab.png)

1. **Visibility** タブでは、公開設定を指定し、動画が公開される日付をスケジュールできます

   ![visibility screen](/images/marketing/developer-relations/technical-marketing/publish_video_on_youtube/visibility_screen.png)

### 3. 動画を公開する

1. すべて設定したら **Save** ボタンをクリックします

   ![save button](/images/marketing/developer-relations/technical-marketing/publish_video_on_youtube/save_button.png)

1. チャンネルで動画を表示し、すべてが期待通りに表示されることを確認します。
