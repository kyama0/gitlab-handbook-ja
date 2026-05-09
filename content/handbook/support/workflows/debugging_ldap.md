---
title: LDAP のデバッグ
category: Self-managed
description: "LDAP の問題をデバッグする方法を説明するサポートエンジニアリングワークフロー"
upstream_path: /handbook/support/workflows/debugging_ldap/
upstream_sha: 0353e616a41b1d1664a95cc83c80b01f990a912f
translated_at: "2026-05-08T20:30:00Z"
translator: claude
stale: false
---

##### 注

これは omnibus インストールを前提としています。

---

ドキュメントの LDAP トラブルシューティングを参照してください - [ドキュメントを表示](https://docs.gitlab.com/administration/auth/ldap/ldap-troubleshooting/)

**LDAP サーバーのテスト**

1. `ldapsearch` をインストールします

```bash
# Ubuntu
apt-get install ldap-utils
# CentOS
yum install openldap-clients
```

1. LDAP 設定を確認します

`gitlab.rb` の LDAP 設定に合わせて、以下の値を編集します。

**LDAP 設定の例**

```bash
# cat /etc/gitlab/gitlab.rb | grep -A 24 ldap_servers
gitlab_rails['ldap_servers'] = YAML.load <<-'EOS' # remember to close this block with 'EOS' below
   main: # 'main' is the GitLab 'provider ID' of this LDAP server
     label: 'LDAP'
     host: '127.0.0.1'
     port: 389
     uid: 'uid'
     method: 'plain' # "tls" or "ssl" or "plain"
     bind_dn: 'cn=admin,dc=ldap-testing,dc=mrchris,dc=me'
     password: 'Password1'
     active_directory: true
     allow_username_or_email_login: false
     block_auto_created_users: false
     base: 'dc=ldap-testing,dc=mrchris,dc=me'
     user_filter: ''
     attributes:
       username: ['uid', 'userid', 'sAMAccountName']
       email:    ['mail', 'email', 'userPrincipalName']
       name:       'cn'
       first_name: 'givenName'
       last_name:  'sn'
     group_base: 'ou=groups,dc=ldap-testing,dc=mrchris,dc=me'
     admin_group: 'gitlab_admin'
EOS
```

**LDAP search のスイッチ**

- **-D** = Bind DN
  - GitLab 設定値: `bind_dn: 'cn=admin,dc=ldap-testing,dc=mrchris,dc=me'`

- **-b** = Search base
  - GitLab 設定値: `base: 'dc=ldap-testing,dc=mrchris,dc=me'`

- **-w** = Password
  - GitLab 設定値: `password: 'Password1'`

- **-w** = Port & **-h** = Host
  - GitLab 設定値: `port: 389`
  - GitLab 設定値: `host: 127.0.0.1`

- **-s** = Search scope
  - GitLab 設定値: なし
  - デフォルトは **sub**
  - `sub "(objectclass=*)` を使うと "すべての" オブジェクトが返されます

**baseDN のすべての LDAP オブジェクトを取得**

```bash
ldapsearch -D "cn=admin,dc=ldap-testing,dc=mrchris,dc=me" \
-w Password -p 389 -h 127.0.0.1 \
-b "dc=ldap-testing,dc=mrchris,dc=me" -s sub "(objectclass=*)"
```

#### LDAP エラーメッセージ (`production.log`)

##### Could not find member DNs for LDAP group

```text
Could not find member DNs for LDAP group #<Net::LDAP::Entry:0x00000007220388
```

これは通常、`gitlab.rb` の `uid` 設定値の問題を示しています。

`ldapsearch` を実行すると、LDAP のユーザー名にどの属性が使用されているかを確認できます。下記の場合、ユーザー名属性は `uid` です。設定で `uid: 'uid'` となっていることを確認してください。Microsoft Active Directory のデフォルトのユーザー名値は `sAMAccountName` です。

```text
dn: cn=user test,ou=people,dc=ldap-testing,dc=mrchris,dc=me
sn: test
givenName: user
uid: test
cn: user test
```

##### Cannot find LDAP group with CN 'GROUP_NAME'. Skipping

これは、admin_group 名が見つからなかったことを示します `admin_group: 'gitlab_admin'`。AD にグループが存在し、`group_base` の下にあることを確認してください。

##### LDAP search error: Invalid DN Syntax

これは、設定された DN のいずれかに構文エラーがあることを示します。次の値をチェックして、完全な DN であることを確認してください。

- `group_base`
- `bind_dn`
- `base`

**LDAP のテスト** - 8.10 以降に有効

1. Rails コンソールを起動します

    ```ruby
    gitlab-rails c
    ```

1. ロガーレベルを更新します

    ```ruby
    Rails.logger.level = 0
    ```

1. グループ同期を実行します

    ```ruby
    LdapGroupSyncWorker.new.perform
    ```

1. ユーザー同期を実行します

    ```ruby
    LdapSyncWorker.new.perform
    ```

1. すべてのコマンド:

    ```ruby
    gitlab-rails c
    Rails.logger.level = 0
    LdapGroupSyncWorker.new.perform
    LdapSyncWorker.new.perform
    ```

1. 同期出力をコンソールで確認します

**Exclusive lease の削除** - テスト用 (8.6 から 8.9 で有効)

これはテスト目的で LDAP の即座の同期を強制するために使用されます。

1. 必要な LDAP 設定を編集します
1. `vi /opt/gitlab/embedded/service/gitlab-rails/lib/gitlab/ldap/group_sync.rb` を編集します
1. exclusive lease のセクションをコメントアウトします *(リリースによって行が異なる場合があります)* - [コードを表示](https://gitlab.com/gitlab-org/gitlab-ee/blob/5c8b211c7b8746ec6d5697e495ddb68f2ac08dd7/lib/gitlab/ldap/group_sync.rb#L70-73)
1. リコンフィグを実行します `sudo gitlab-ctl reconfigure` **これは GitLab を再起動します**
1. GitLab Rails コンソールを起動します `gitlab-rails console`
1. `Gitlab::LDAP::GroupSync.execute` を実行します
1. LDAP 同期が実行されます
1. **完了したら `group_sync.rb` ファイルへの変更を元に戻します**
 `/opt/gitlab/embedded/service/gitlab-rails/lib/gitlab/ldap/group_sync.rb`

**追加のテスト**

1. Rails コンソールを起動します

    ```sh
    sudo gitlab-rails console
    ```

1. 新しいアダプタインスタンスを作成します

    ```ruby
    adapter = ::Gitlab::Auth::LDAP::Adapter.new('ldapmain')
    ```

1. 共通名でグループを検索します。**UsersLDAPGroup** を検索する共通名に置き換えてください。

   1. **GitLab 8.11 以降**

        ```ruby
        group =  EE::Gitlab::Auth:Ldap::Group.find_by_cn('UsersLDAPGroup', adapter)
        ```

   1. **GitLab < 8.10**

        ```ruby
        group =  Gitlab::LDAP::Group.find_by_cn('UsersLDAPGroup', adapter)
        ```

1. `member_dns` を確認します

    ```ruby
    group.member_dns
    ```
