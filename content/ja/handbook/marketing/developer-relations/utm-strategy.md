---
title: "Developer Relations ワークフロー: UTM トラッキング戦略"
upstream_path: /handbook/marketing/developer-relations/utm-strategy/
upstream_sha: 6b2970dac4d9078a5a79c285a6ee08817ecbd954
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
---

## <i class="" id="overview"></i> 概要

このページの目的は、Community チームの UTM 戦略と、それが Sisense における同チームのダッシュボードをどのように駆動するかを示すことです。本戦略は[マーケティング UTM 戦略](/handbook/marketing/utm-strategy/)に沿って設計されており、マーケティング戦略 & アナリティクス（MS & A）チームによってレビューされています。

## <i class="" id="utm-usecases"></i> ユースケース

- ワークショップでのマーケティング Web サイトへの誘導（追加リソースや参考情報のため）
- プレゼンテーション中の無料トライアル登録の案内
- アンケート、ブログ記事、リリース投稿などのコンテンツの参照
- ドキュメントページの参照

## <i class="" id="utm-parameters"></i> UTM パラメータ

UTM パラメータは、ユーザーがどのように Web サイトに到達したか、サイト内をどう遷移したか、どこで離脱したかを追跡するために使用されます。Community チームにとって UTM パラメータは、コミュニティとのエンゲージメントが GitLab への貢献やサブスクリプションをどの程度後押ししたかを測定するのに役立ちます。UTM パラメータの選択肢は特定の値に制限されており、MS & A チームによって管理されています。Google Analytics や Sisense でデータが正しい宛先に届くためには、標準を維持することが不可欠です。Community チームで合意されている UTM パラメータは次のとおりです。

| 名称              |   パラメータ        |  Community チームでの値  | 説明   |
|-------------------|----------------|--------------------|---------------|
| キャンペーン名     | utm_campaign   |  `community`                 | medium は、ペイドサーチ、ソーシャル、スポンサーシップなど、上位の包括的なチャネル区分です。「どこから来たのか？」という問いに答えます。Community チームでは、チームのメトリクスを識別するのに役立ち、Sisense の必要なダッシュボードを構築する際に使用されます。別のキャンペーンの一環として活動している場合は、そのキャンペーンの DRI または MS & A チームと連携し、適切な `utm_campaign` を確認してください。 |
| キャンペーンソース   | utm_source     | mailjet, twitter, linkedin, stack overflow など。詳細は [UTM Generator Picklist](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit#gid=3) を参照 | source ベースの URL パラメータは、どの Web サイトからトラフィックが送られているかを示します。source は全体的なチャネルをさらに「細分化」したもので、「どこから来たのか？」という問いに対し、utm_medium よりも粒度の細かい情報を答えます。例として demandbase、twitter、market などがあります。 |
| キャンペーンメディア   | utm_medium     |  display, email, social | medium は、ペイドサーチ、ソーシャル、スポンサーシップなど、上位の包括的なチャネル区分です。「どこから来たのか？」という問いに答えます。 |
| キャンペーンコンテンツ  | utm_content    |  | このパラメータは、Community チームの DRI が UTM トラッキングを利用している特定のキャンペーンを識別するために用いられ、Sisense でチームの異なるキャンペーンごとにレポートを分けるのに使われます。さらに使いやすくするために、MS&A チームは、プログラムごとのフィルタリングを可能にする接頭辞の使用を承認しています。例えば `de_`, `edu_`, `oss_`, `code_`, `heroes_` を使って、各プログラムの結果をフィルタリングします。|
| キャンペーン予算   | utm_budget     |  cmty | キャンペーンのプロモーションにどの予算が使われているかを示します。 |

## <i class="" id="compulsory-utm-codes"></i> 必須フィールド

結果を正しいダッシュボードに届けるためには、適切な UTM パラメータの設定が必要です。必須パラメータは次のとおりです。

- `utm_campaign=community`
- `utm_budget=cmty`

これらのパラメータの値は変更しないでください。任意ですが必要なパラメータと値の例は次のとおりです。

- `utm_source=linkedin`
- `utm_medium=social`
- `utm_content=de_gitlab_release`

## <i class="" id="example-utm-codes"></i> 例

例 1: https://about.gitlab.com/releases/2022/11/22/gitlab-15-6-released/?utm_campaign=community&utm_source=linkedin&utm_medium=social&utm_content=de_gitlab_release&utm_budget=cmty

- utm_campaign=community : Community チームのデフォルトキャンペーンコード
- utm_source=linkedin : 訪問の流入元
- utm_medium=social : より広い区分での流入元の識別
- utm_content=de_gitlab_release : `de_` で DevEvangelism チームを識別。`edu_`, `oss_`, `code_`, `heros_` なども利用可能
- utm_budget=cmty : 予算の所有者が Community チームであることを示す

例 2: https://about.gitlab.com/releases/2022/11/22/gitlab-15-6-released/?utm_campaign=community&utm_source=mailjet&utm_medium=email&utm_content=newsletter_gitlab_release&utm_budget=cmty

例 3: https://about.gitlab.com/releases/2022/11/22/gitlab-15-6-released/?utm_campaign=community&utm_source=qrcode&utm_medium=display&utm_content=edu_mit_workshop_slide&utm_budget=cmty

## <i class="" id="best-practices-utm-codes"></i> ベストプラクティス

- UTM パラメータ付き URL は短縮 URL を使用しましょう。
- 訪問者の流入元を最もよく識別できるよう、適切な `utm_source` と `utm_medium` を使ってください。利用可能なオプションの一覧は [UTM Generator Picklist](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit#gid=3) を参照してください。
- `utm_content` には適切な接頭辞を使い、追加するテキストにはアンダースコアのみを使用してください。

## <i class="" id="dashboards-utm-codes"></i> ダッシュボード

TBD

## UTM ジェネレーター

```html
<div>
    <table>
        <tr width="35%">
            <td> Link: </td>
            <td> <input class='utm_generator' type="text" id="utm_link" /></td>
        </tr>
        <tr>
            <td> Where will you be sharing it: </td>
            <td>
                <select class='utm_generator' id="utm_where" >
                    <option value="social-linkedin">LinkedIn</option>
                    <option value="social-twitter">Twitter</option>
                    <option value="display-blog">Blog Post</option>
                    <option value="display-partner">Partner Website</option>
                    <option value="display">Physical assets</option>
                    <option value="email">Newsletter</option>
                </select>

            </td>
        </tr>
        <tr>
            <td> What Program is the DRI for Campaign: </td>
            <td>
                <select class='utm_generator' id="utm_who" >
                    <option value="oss">Open Source</option>
                    <option value="edu">Education</option>
                    <option value="de">Developer Evangelism</option>
                    <option value="code">Code Contributor</option>
                </select>

            </td>
        </tr>
        <tr>
            <td> Unique Campaign Identifier </td>
            <td> <input class='utm_generator' type="text" id="utm_unique_code" /></td>
        </tr>
        <tr>
            <td style="text-align: right;"> <button class='btn btn-primary' id='generate_utm'>Generate</button> </td>
            <td> Result: <p id='utm_generator_result' style='background-color:#ecdcc2; color:#ff0000; padding:10px'> </p> </td>
        </tr>
    </table>

</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<script>
    $( document ).ready(function(){
        $('#generate_utm').on("click", function(){
            var link = $('#utm_link').val();
            var source = $('#utm_where').val();
            var dri = $('#utm_who').val();
            var unique_code = $('#utm_unique_code').val();

            var result = link + '?utm_campaign=community&utm_budget=cmty&';

            switch(source){
                case 'social-linkedin':
                    result = result + 'utm_medium=social&utm_source=linkedin'
                    break;
                case 'social-twitter':
                    result = result + 'utm_medium=social&utm_source=twitter'
                    break;
                case 'display-blog':
                    result = result + 'utm_medium=display&utm_source=blog'
                    break;
                case 'display-blog':
                    result = result + 'utm_medium=display&utm_source=blog'
                    break;
                case 'display-blog':
                    result = result + 'utm_medium=display&utm_source=partner'
                    break;
                case 'display':
                    result = result + 'utm_medium=display'
                    break;
                default:
                    result = result + 'utm_medium=social&utm_source=linkedin'
                    break;
            }

            result = result + '&utm_content='+dri+'_'+unique_code;

            $('#utm_generator_result').text(result)

        })
    });
</script>
```
