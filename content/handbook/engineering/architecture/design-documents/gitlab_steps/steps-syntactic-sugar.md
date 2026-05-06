---
owning-stage: "~devops::verify"
title: "ステップ定義のシンタクティックシュガー拡張"
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/gitlab_steps/steps-syntactic-sugar/"
upstream_sha: "94fe412d61c1d75e0a7a0fe4b90222476478db38"
translated_at: "2026-04-27T11:51:33Z"
translator: claude
stale: false
---

[ステップ定義](step-definition.md)は、サポートされる最小限の構文を説明しています。
一般的なワークフローを補助するために、そのドキュメントの異なる部分を拡張する以下のシンタクティックシュガーが使用されます。

## ステップ参照のシンタクティックシュガー

各シンタクティックシュガー拡張は、単純な[ステップ参照](step-definition.md#steps-that-use-other-steps)に変換されます。

### ターゲット環境でスクリプトを簡単に実行する

`script:` は単純なスクリプトの実行を補助するショートハンド構文であり、`step:` と一緒に使用することはできません。GitLab が提供する外部に保存されたステップコンポーネントによって実行されます。

GitLab が提供するステップコンポーネントは、現在の GitLab Runner の動作と同様に、実行中のシステムに基づいてシェルの自動検出を行います（上書きされない限り）。

`inputs:` と `env:` は、そのステップコンポーネントの一部の側面を追加制御するために使用できます。

例:

```yaml
spec:
---
type: steps
steps:
  - script: bundle exec rspec
  - script: bundle exec rspec
    inputs:
      shell: sh  # 自動検出の代わりに `sh` シェルを強制的に使用させる
```

この構文例は、Step Runner による実行のための次の同等な構文に変換されます:

```yaml
spec:
---
type: steps
steps:
  - step: gitlab.com/gitlab-org/components/steps/script@v1.0
    inputs:
      script: bundle exec rspec
  - step: gitlab.com/gitlab-org/components/steps/script@v1.0
    inputs:
      script: bundle exec rspec
      shell: sh  # 自動検出の代わりに `sh` シェルを強制的に使用させる
```

この構文例は `script:` と `step:` を同時に使用しているため**無効**です（かつ曖昧です）:

```yaml
spec:
---
type: steps
steps:
  - step: gitlab.com/my-component/ruby/install@v1.0
    script: bundle exec rspec
```
