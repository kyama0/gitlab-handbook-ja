---
stage: systems
group: Geo
title: 'Unified Backups: 用語集'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/backup_and_restore/glossary/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-15T15:57:20+02:00"
---

## archive (アーカイブ)

- バックアップ作成コマンドによって生成されるディレクトリまたはアーカイブファイル。常にバックアップマニフェストファイルを含み、ソフトウェア環境によってはアプリケーションから取得した実データを含む場合と含まない場合があります。

## archive manifest (アーカイブマニフェスト)

- `gitlab-backup-cli` コマンドによって作成された各アーカイブの内側に JSON ファイルとして保存される、バックアップ作成セッションの記録。

## backup home (バックアップホーム)

- バックアップ作成コマンドによって生成されるアーカイブを保存するデフォルト位置として、ユーザーが設定したベースディレクトリ。これは常に、システム上の実際のアーカイブディレクトリやその他の重要なパスとは区別して扱う必要があります。

## backup context (バックアップコンテキスト)

- バックアップ作成や復元操作を実行するときには、バックアップセッションを実行することになります。これには、操作、コマンドライン引数、およびシステム設定、コマンドライン引数、環境変数、アプリケーションコンテキストデータ、アーカイブマニフェストから導出された操作のパラメータが含まれます。

## data type (データタイプ)

- GitLab アプリケーションが利用するデータの 5 つの抽象カテゴリーのいずれか — Git リポジトリ、データベース、Blob、シークレット/設定、トランジェントデータ。

- これは、アーカイブに含まれる個別の機能データバックアップとは区別されます。たとえば、「artifacts」や「packages」はアーカイブ内の Blob ベースのファイルバックアップの 2 種類ですが、データファミリーではありません。「Blob」は、これらの機能バックアップが属するジェネラルなデータファミリーです。

## installation types (インストールタイプ)

- インストールタイプとは、[インストール方法](https://docs.gitlab.com/ee/install/install_methods.html) のいずれかを使用した結果のことです。
