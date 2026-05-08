---
title: 内部メモを除いたチケットスレッドの印刷
category: Zendesk
description: 内部メモを除いてチケットスレッドを印刷する方法。
upstream_path: /handbook/support/workflows/printing_ticket_thread_without_internal_notes/
upstream_sha: 5b8afe7d206f5c195e463506206021ee3c9a4491
translated_at: "2026-05-08T01:46:59Z"
translator: claude
stale: false
---

## クリーンなチケットスレッドの印刷

Zendesk には、内部メモを除いてチケットスレッドを印刷する [機能はありません](https://support.zendesk.com/hc/en-us/community/posts/4409222754458-Ability-to-print-ticket-without-internal-note-comment)。公開コメントのみでフィルタリングして `Print ticket` アクションをクリックしても、生成された出力にはまだ内部コメントが含まれます。

カスタマーとコンテンツを共有したり、ドキュメンテーション目的で、チケットスレッドを印刷する必要がある場合があります。

HTML DOM 出力をクリーンアップする簡単な方法は、JavaScript ブックマークレットを使うことです。

1. ブラウザのブックマークバーをクリックして `Add page...` を選択する
1. 名前を `Remove Zendesk Internal Notes` にする
1. URL 入力欄に以下のコードスニペットを貼り付ける

```javascript
javascript:(function(){null!==document.getElementById("ccs")&&document.getElementById("ccs").remove(),null!==document.getElementById("fields")&&document.getElementById("fields").remove(),null!==document.getElementById("custom_fields")&&document.getElementById("custom_fields").remove();const list=document.querySelectorAll("#comments > .comment");for(let item of list){let e=item.children,l=[].filter.call(e,e=>[].includes.call(e.classList,"mast"))[0],t=l.children,s=[].filter.call(t,e=>[].includes.call(e.classList,"internal_note"))[0];void 0!==s&&item.remove()}})();
```

ブックマークレットを使うには、任意のチケットを開いて `Print ticket` をクリックします。これにより印刷ダイアログが開いた新しいページに移動します。印刷ダイアログをキャンセルし、`Remove Zendesk Internal Notes` ブックマークをクリックして内部メモを削除します。削除したいコンテンツが実際に削除されたことを確認してください。その後、紙に印刷したり PDF として保存したりできます。

### コメント付きで整形されたブックマークレット

```javascript
javascript:(function(){
    // Remove the cc 
    if (document.getElementById('ccs') !== null) {
        document.getElementById('ccs').remove();
    }
    // Remove the fields section
    if (document.getElementById('fields') !== null) {
        document.getElementById('fields').remove();
    }
    // Remove the custom fields section
    if (document.getElementById('custom_fields') !== null) {
        document.getElementById('custom_fields').remove();
    }
    // Select all comments
    const list = document.querySelectorAll('#comments > .comment');
    for (let item of list) {
        // Select the children elements of the comments
        const commentChildren = item.children;
        // Pull out the mast element specifically
        const mastElement = [].filter.call(
            commentChildren, element => [].includes.call(element.classList, 'mast')
        )[0];

        // Select the children elements of the mast element
        const mastChildren = mastElement.children;

        // Pull out the internal_note element
        const internalNoteElement = [].filter.call(
            mastChildren, element => [].includes.call(element.classList, 'internal_note')
        )[0];

        // If the internal note element exists, we remove the main comment
        if (typeof internalNoteElement !== 'undefined') {
            item.remove();
        }
    }
})();
```
