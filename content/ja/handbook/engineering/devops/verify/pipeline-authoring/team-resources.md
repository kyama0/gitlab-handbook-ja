---
title: Pipeline Authoring グループリソース
description: "このページの目的は、パイプライン Authoring グループにおける開発パターンのリソースと推奨事項をドキュメント化することです。"
upstream_path: "/handbook/engineering/devops/verify/pipeline-authoring/team-resources/"
upstream_sha: "1065c86ab1ba75adefbb07560d726608885e6d4e"
translated_at: "2026-04-28T14:02:31Z"
translator: claude
stale: false
---

## 概要

このページの目的は、パイプライン Authoring グループにおける開発パターンのリソースと推奨事項をドキュメント化することです。

### フロントエンドアーキテクチャ計画

新機能と重要なリファクタリングには軽量なアーキテクチャ計画プロセスを使用します。

詳細については[アーキテクチャセクション](/handbook/engineering/devops/verify/pipeline-authoring/frontend-architecture/)を参照してください。

### CI `camelCase` の大文字化

camelCase を使用する場合、通常「continuous integration」を `CI` ではなく `Ci` と略します。これによりファイル命名の一貫性が保たれます。例えば:

- `MyCiComponent` -> `my_ci_component.vue`
- `myCiFileMutation` -> `my_ci_file.mutation.graphql`

これは GraphQL タイプ（例: CiJob、CiStatus）や他のコンポーネントの `Ci` と一致しています。

### フロントエンドテスト

[フロントエンド開発テスト標準とスタイルガイドライン](https://docs.gitlab.com/ee/development/testing_guide/frontend_testing.html)に加え、テストを書くためのいくつかの推奨事項に従います。

#### 完全にレンダリングされたコンポーネントのテスト

[Vue Test Utils](https://v1.test-utils.vuejs.org/) を使用して Vue コンポーネントの実装をテストし、コンポーネントの DOM 構造全体をレンダリングしてテストすることを好みます。これにより:

- テストが実際にユーザーが見る結果をテストすることを確保できる
- 他のライブラリ（`gitlab-ui` など）のコンポーネントとの統合をテストできる
- 実装が変更された場合にテストを更新する必要なく、実装変更が期待どおりに動作することをテストで確認できる
- 実装の変更ではなくイベントの変更に対して敏感な実際のイベントをできる限りテストできる
  - GitLab UI [Combobox Spec](https://gitlab.com/gitlab-org/gitlab-ui/-/blob/master/src/components/base/form/form_combobox/form_combobox.spec.js) のこの例を参照

`shallowMount` の値を活用しながらこれをサポートするために、次のアプローチを推奨します:

1. 「レンダリングされた要素のテスト」ガイドラインに従いながら [`shallowMount`](https://v1.test-utils.vuejs.org/api/#shallowmount) を使用してテストを書きます。
2. `shallowMount` がテストしたい項目をレンダリングしなくなったら、[`mount`](https://v1.test-utils.vuejs.org/api/#mount) を使用します。
3. テストがパフォーマンス問題を示し始めたら（デフォルトタイムアウトで定期的に失敗するなど）、部分的にレンダリングされたコンポーネントを使用するか、マウントスタックの下位でアクションをテストするようにテストを再構築することを検討します。
    - `shallowMount` はデフォルトでほとんどの内部コンポーネントをスタブするため、いくつかの内部コンポーネントを [`stubs`](https://v1.test-utils.vuejs.org/api/options.html#stubs) として明示的にリストアップして、それらのコンポーネントの実際の実装でテストが実行されるよう `stubs` オプションに追加します。

`shallowMount` から `mount` に切り替える場合、`shallowMount` をデフォルトとして `createComponent` 関数の引数にメソッドを追加して、`mount` が必要な場合のみ使用されることを確認することをお勧めします。

```js
const createComponent = (options, mountMethod = shallowMount) => {
  wrapper = mountMethod(Component, {
    ...options
  })
}
```

**これはアプローチのシンプルな例です:**

```js
// my_form_container_spec.js

import { GlButton, GlForm } from '@gitlab/ui'
import { shallowMount } from '@vue/test-utils';
import MyFormContainer  from '~/pipeline_authoring/my_form_container.vue';

const createComponent = () => {
  wrapper = shallowMount(MyFormContainer, {
    // ...
    stubs: {
      GlForm,
      GlButton, // ボタンは完全にレンダリングされる
    },
  });
};

// ...

const findCommitBtn = () => wrapper.find('[type="submit"]');
const findCommitBtnLoadingIcon = () => findCommitBtn().find(GlLoadingIcon);

// ...

it('shows saving state', () => {
  expect(findCommitBtnLoadingIcon().exists()).toBe(true);
});
```
