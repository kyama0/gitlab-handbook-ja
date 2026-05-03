---
title: "Python ガイド"
description: "私たちが使用しているリンターではすべてをキャッチできないため、この Python スタイルガイドを遵守することは私たちの集合的な責任です。"
upstream_path: "/handbook/enterprise-data/platform/python-guide/"
upstream_sha: "d638a3d5418a620365f135648ea547e0992abbf1"
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

## Python ガイド

### 動機

データチームが使用しているツールではすべてをキャッチできないため、Python スタイルガイドを推進し、尊重し、改善することはデータチームの集合的な責任です。この意識的な注意が違いを生み、高品質のコードを確保するために多くのことをします。
包括的で有用な Python ガイドラインを持つ主な動機は、私たちの作業において高いコード品質の標準を維持することです。日々変化するこの作業でガイドラインをサポートとして使用するため、このガイド自体も常に[イテレーション](/handbook/values/#iteration)の対象です。長期的には、このガイドが誇れる世界水準のコード品質を実現するのに役立ちます。すべての変更は私たちの[**バリュー**](/handbook/values/)に基づいて行われます。

### バリュー

**キャンプサイトルール:** これらのガイドラインは常に作業中（`WIP`）の状態にあります。スタイルガイドに準拠していないコードスタイル、ヒント、またはガイドラインを使用する場合は、関連する変更を含むマージリクエストを提出し、Data Platform チームにタグ付けしてガイドを更新してください。

### テクノロジーの標準化

**2022年1月以降**、すべての新しいカスタム Python 抽出は[**Singer 標準**](https://www.singer.io/)に準拠する必要があります。

### 高レベルガイドライン

このセクションでは、`Python` コードに関するベストプラクティスに従う方法について高レベルの詳細を説明します。これらの推奨事項に従うことで、高いコード品質の利点を十分に理解し、コードベースを活用できるようになります。

#### Python の禅

`Python の禅`に言及せずに Python ガイドを書くことに抵抗があります。これは高レベルでコード品質を確保するための基礎です。
基本的なアイデアを見落とさず優れた Python を書きたいときに役立つ精神的な演習です。

```bash
╰─$ python3
Python 3.8.6 (v3.8.6:db455296be, Sep 23 2020, 13:31:39)
[Clang 6.0 (clang-600.0.57)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> import this
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
```

#### PEP 8

`PEP` は Python Enhancement Proposal（Python 拡張提案）の略で、いくつかあります。`PEP` は Python に提案された新機能や、設計とスタイルなど Python の側面をコミュニティのために記述する文書です。
定義によると:
> `PEP 8`（`PEP8` または `PEP-8` とも表記）は、Python コードの書き方に関するガイドラインとベストプラクティスを提供する文書です。
> 2001年に `Guido van Rossum`、`Barry Warsaw`、`Nick Coghlan` によって書かれました。
> `PEP 8` の主な焦点は Python コードの可読性と一貫性の向上です。

**なぜ PEP 8 が必要なのか？**
> 可読性が重要。
>
> *— Python の禅*
>
> コードは書かれるよりも読まれることの方がずっと多い。
>
> *— Guido van Rossum*

その他多くのことの中で、コードベースを維持・拡張できるように、クリーンで明確かつ一貫したコードを持つことの必要性を強調することが重要です。

#### GitLab の Python の禅

`Python の禅` の補足として、コードベースを良い状態に保つための追加の観点を強調したいと思います。これは半分冗談で半分真実ですが、目指す高い基準の良い概要を提供します。
こちらが私たちの `GitLab Python の禅` 提案です:

- `G`ratitude and respect for `PEP 8`（`PEP 8` への感謝と尊重）
- `I`nsist on writing well-structured code（構造化されたコードを書くことを主張する）
- `T`rust `Pythonic` way of thinking and coding（`Pythonic` な考え方とコーディング方法を信頼し、日常的に使う良い習慣を身につける）
- `L`everage and promote proper comments and documentation（適切なコメントとドキュメントを活用・推進する）
- `A`lways have `Zen of Python` on the top of your mind（常に `Python の禅` を念頭に置く）
- `B`oost usage of a modular code style over script-like approach（スクリプト的なアプローチよりもモジュラーなコードスタイルの使用を促進する）

さらにいくつか追加:

- 変数、クラス、関数、モジュールの適切な命名を推進する
- スクリプト的なアプローチよりもモジュラーなコードスタイルを優先する
- 既存のインタープリターよりも仮想環境の使用を好む

### 具体的なガイドライン

適切なアーキテクチャアプローチの高レベルなフレームワーク定義ができたところで、`Python` コードの設計と構造化に関する詳細に深く掘り下げていきます。

### プロジェクトセットアップ - Poetry

プロジェクトセットアップには [poetry](https://python-poetry.org/) を使用しています。

`Poetry` は Python の依存関係、パッケージ、ライブラリを管理するための Python 依存関係管理ツールです。プロジェクトの依存関係の複雑さを解決し、インストールと更新を管理することで、プロジェクトをシンプルにするのに役立ちます。

`Python`（今回は `3.10.3`）を開始・インストールするために使用するコマンドセットは、[onboarding_script.zsh](https://gitlab.com/gitlab-data/analytics/-/blob/master/admin/onboarding_script.zsh) ファイルを参照してください。

`poetry` 設定を実行するための `pyproject.toml` ファイルの定義方法の良い例を以下に示します 👇

```bash
[tool.poetry]
name = "app"
version = "0.1.0"
description = "Automated Service Ping Metrics Check"
authors = ["{}"]
readme = "README.md"
homepage = "https://gitlab.com/gitlab-data/service-ping-metrics-check/README.md"
repository = "https://gitlab.com/gitlab-data/service-ping-metrics-check"

[tool.poetry.dependencies]
python = "^3.10"
fastapi = "^0.85.0"
uvicorn = "^0.18.3"
black = "^22.8.0"
pylint = "^2.15.3"
flake8 = "^5.0.4"
mypy = "^0.971"
vulture = "^2.6"
pytest = "^7.1.3"
python-decouple = "^3.6"
flatten-dict = "^0.4.2"
sqlparse = "^0.4.3"
snowflake-connector-python = "^2.7.12"

[tool.poetry.dev-dependencies]

[build-system]
requires = ["poetry-core>=1.0.0"]
build-backend = "poetry.core.masonry.api"

[tool.poetry.scripts]
start = "app.sharehouse.main:start"
```

完全なファイルは [service-ping-metrics-check/pyproject.toml](https://gitlab.com/gitlab-data/service-ping-metrics-check/-/blob/main/pyproject.toml) で確認できます。これは [**Service ping metrics check**](https://gitlab.com/gitlab-data/service-ping-metrics-check) プロジェクトの一部です。

#### イディオム

プログラミングイディオムとは、簡単に言うとコードの書き方のことです。慣用的な Python コードはしばしば `Pythonic` と呼ばれます。通常、それを行う明らかな方法は1つ（できれば1つだけ）ありますが、慣用的な Python コードの書き方は Python 初心者にとっては非自明な場合があります。
そのため、優れたイディオムは意識的に習得する必要があります。

#### 明示的なコード

Python では*（ほぼ）あらゆる*魔法が可能ですが、最も明示的で簡単な方法が好まれます。シンプルで賢くしてください。

```python
## Bad
def foo(*args):
    x, y = args
    return dict(**locals())

## Good
def bar(x, y):
    return {'x': x, 'y': y}
```

#### 関数の引数

引数はルーティンに4つの異なる方法で渡すことができます:

1. `位置引数` - 例: `foo(message, recipient)`
2. `キーワード引数` - 例: `foo(message, to, cc=None, bcc=None)`。ここで `cc` と `bcc` はオプションで、別の値が渡されない場合は `None` として評価されます。
3. `任意の引数リスト`（`*args`）
4. `任意のキーワード引数辞書`（`**kwargs`）

どの引数が位置引数でどれがオプションのキーワード引数であるかを決定し、任意の引数渡しの高度なテクニックを使用するかどうかを決定するのは関数を書くエンジニア次第です。上記のアドバイスを賢く守れば、次のような Python 関数を書くことが可能で楽しくなります:

- 読みやすい（名前と引数に説明が不要）
- 変更しやすい（新しいキーワード引数を追加してもコードの他の部分が壊れない）

#### 戻り値

関数の複雑さが増すにつれて、関数の本体内で複数の return 文を使用することが珍しくありません。
ただし、明確な意図と持続可能な可読性を保つために、本体の多くの出力ポイントから意味のある値を返すことを避けることが好ましいです。
通常のコースに複数の主要な出口ポイントがある関数では、返された結果をデバッグすることが困難になるため、単一の出口ポイントを保つことが好ましい場合があります

```python
## Bad! Probably too complex and difficult to read
def foo(a, b, c):
    if not a:
        return None  # Raising an exception might be better
    if not b:
        return None  # Raising an exception might be better
    # Some complex code trying to compute x from a, b and c
    # Resist temptation to return x if succeeded
    if not x:
        # Some Plan-B computation of x
    return x  # One single exit point for the returned value x will help
              # when maintaining the code.

## Good
def bar(a, b, c):
    res = None
    if not a:
        res = None
    if not b:
        res = None
    # Some complex code trying to compute x from a, b and c
    # Resist temptation to return x if succeeded
    if not x:
        # Some Plan-B computation of x
        res = 42
    return res
```

#### アンパック

リストまたはタプルの長さがわかっている場合、アンパックでその要素に名前を割り当てることができます。例えば、`enumerate()` はリスト内の各アイテムに対して2要素のタプルを提供するため:

```python
## Bad! - can be difficult to read and maintain
for index in range(0:len(foo_list)):
    # do something with foo_list[index]

## Good! - this is optimized way to use for loop
for index, item in enumerate(foo_list):
    # do something with index and item
```

これを使って変数を交換することもできます:

```python
## Good
a, b = b, a
```

ネストされたアンパックも問題なく機能します:

```python
## Good
a, (b, c) = 1, (2, 3)
```

`PEP 3132` によって拡張アンパックの新しい方法が導入されました:

```python
## Good
a, *rest = [1, 2, 3]
## a = 1, rest = [2, 3]
a, *middle, c = [1, 2, 3, 4]
## a = 1, middle = [2, 3], c = 4
```

無視される変数 `_` もアンパックの一部にすることができます:

```python
## Bad
a, _ , c = [1, 2, 3, 4] # This will raise an error

## Good! This will work (* is going before _)
a, *_ , c = [1, 2, 3, 4]

## Good
_, *rest = [1, 2, 3]
## rest = [2, 3]
```

> **注意:** 3つを超える値をアンパックすることは悪いプラクティスです。許可されていますが、コードの可読性が急速に低下します。

```Python
## Bad! (if you have more than 3 values)
a, b, c, d = 1, 2, 3, 4

## Good
a, b, c = 1, 2, 3
d = 4

## Better
a = 1
b = 2
c = 3
d = 4
```

#### 慣例

このセクションでは、慣例を扱い、ツールボックスに統合するための効果的なテクニックを紹介します。

##### 変数が定数と等しいかチェックする

値を True、None、0 と明示的に比較する必要はありません。if 文に追加するだけで済みます。False と見なされるもののリストについては、Truth Value Testing を参照してください。

```python
## Bad
if attr == True:
    print('True!')

if attr == None:
    print('attr is None!')

## Good
## Just check the value
if attr:
    print('attr is truthy!')

## or check for the opposite
if not attr:
    print('attr is falsey!')

## or, since None is considered false, explicitly check for it
if attr is None:
    print('attr is None!')

## same goes for dict, list sets
check_list = []
if check_list:
    print('This is not empty list.')
else:
    print('The list is empty.')
```

##### 文字列連結

文字列連結には多くの方法があります。効率的な方法についての簡単な演習を以下に示します。

```python
string1 = 'Python'
string2 = 'Guideline'

## Bad
print(string1 + " " + string2)
## Python Guideline

## Good
print('{} {}'.format(string1, string2))
## Python Guideline

## Better
print(f"{string1} {string2}")
## Python Guideline
```

ここで気づいたように、結果は同じですが、詳細が違いを生みます。上記の例では文字列を扱いましたが、同じコード内でより多くのデータ型を導入するとどうなるでしょうか。

```python

string1 = 'Python'
int1 = 2 # now, this is int

## Bad
## print(string1 + " " + int1)
## TypeError: can only concatenate str (not "int") to str

## Good
print('{} {}'.format(string1, int1))
## Python 2

## Better
print(f"{string1} {int1}")
## Python 2
```

単純な文字列連結（例: `a + b`）の代わりにプレースホルダーを使用する方が良い理由がわかります。

##### リストを操作する短い方法

- `リスト内包表記`はリストを操作するための強力で簡潔な方法を提供します。
- `ジェネレータ式`はリスト内包表記とほぼ同じ構文に従いますが、リストの代わりにジェネレータを返します。これは重要です：パフォーマンスとメモリが重要であり、適切な場所でジェネレータの活用を理解することは大きな考慮点です。

```python
## Bad
## will return a list first and then do the max calculation, the trick is as [] stands for the list
foo = max([(student.id, student.name) for student in graduates])

## Good
## will return a generator object first and then do the max calculation till the generator exhausted, the trick is as () stands for the generator object
bar = max((student.id, student.name) for student in graduates)
```

> **注意:** パフォーマンスとメモリリソースが重要です！

##### 内包表記

Python の内包表記は、すでに定義されたシーケンスを使用して新しいシーケンス（リスト、セット、辞書など）を構築する短く簡潔な方法を提供します。Python は以下の4種類の内包表記をサポートしています:

- `リスト`内包表記
- `辞書`内包表記
- `セット`内包表記
- `ジェネレータ`内包表記 - ジェネレータとそれが Python でどのように実装されているかを理解するために時間をかけることを強くお勧めします。メモリ最適化されており、大量のデータを処理する効率的な選択肢です。

言い換えると、任意のイテラブルを内包表記の一部にすることができます。

内包表記は `Pythonic` な考え方の素晴らしい例であり、クリーンで整然としたコーディング標準を提供します。

```python
output_list = [output_exp for var in input_list if (var satisfies this condition)]
```

> **注意:** ネストされた内包表記も許可されていますが、1つの文に3つ以上の内包表記を持つことはベストプラクティスではありません。

##### イテラブルのフィルタリング

イテラブルをフィルタリングする方法はたくさんあります。その一部と高いコーディング標準への適合度を見ていきましょう。

```python
## Bad
## Never remove items from a list while you are iterating through it

## Filter elements greater than 4
foo = [3, 4, 5]
for i in foo:
    if i > 4:
        foo.remove(i)

## Bad
## Don't make multiple passes through the list

while i in foo:
    foo.remove(i)

## Good
## Use a list comprehension or generator expression

## comprehensions create a new list object
filtered_values = [value for value in sequence if value != x]

## generators don't create another list
filtered_values = (value for value in sequence if value != x)

## Good
## you can use function as a filter
sequence= [1, 2, 3]

def dummy_filter(member: int) -> bool:
 return member != 2

filtered_values = [value for value in sequence if dummy_filter(value)]
## [1, 3]
```

代替として、この目的に `map` | `filter` | `reduce` 関数を使用できます。参考リンクは [**Map, Filter and Reduce**](https://book.pythontips.com/en/latest/map_filter.html) です。

##### リストの値を変更する

代入は新しいオブジェクトを作成しないことを覚えておいてください。2つ以上の変数が同じリストを参照している場合、そのうちの1つを変更するとすべてが変更されます。

```python
## Add three to all list members
list_a = [3, 4, 5]
list_b = list_a  # list_a and list_b refer to the same list object

for i in range(len(list_a)):
    list_a[i] += 3 # list_b[i] also changes

## for copying a list, use .copy() method
list_a = [1, 2, 3]

list_b = list_a.copy()
## extend list_b as list_a will stay in a original shape
list_b.extend(list_b)

print(F"list_a: {list_a}")
print(F"list_b: {list_b}")
## list_a: [1, 2, 3]
## list_b: [1, 2, 3, 1, 2, 3]
```

新しいリストオブジェクトを作成し、元のリストをそのままにする方が安全です。

```python
list_a = [3, 4, 5]
list_b = list_a

## assign the variable "list_a" to a new list without changing "list_b"
list_a = [i + 3 for i in list_a]
```

`enumerate()` を使用してリスト内の位置のカウントを維持してください。

```Python
## Good
foo = [3, 4, 5]
for i, item in enumerate(foo):
    print(i, item)
## prints
## 0 3
## 1 4
## 2 5
```

> **注意:** `enumerate()` 関数は、カウンターを手動で処理するよりも可読性が高いです。さらに、イテレーターに対してよりも最適化されています。

##### ファイルから読み込む

ファイルからデータをロードする際は、値の代入よりも `context manager` を使用することが常に良いアドバイスです。このアプローチにより、自動的にファイルが閉じられます。

```python
## Bad
f = open('file.txt')
a = f.read()
print(a)
f.close() # we always forgot something like this.

## Good
with open('file.txt') as f:
    for line in f:
        print(line)
## This approach will close a file for you
```

##### 行の継続/行の長さ

コードの論理行が許容される制限より長い場合、複数の物理行に分割する必要があります。Python インタープリターは、行の最後の文字がバックスラッシュの場合、連続する行を結合します。これは場合によっては便利ですが、脆弱性のため通常は避けるべきです。行末のバックスラッシュの後にスペースが追加されると、コードが壊れ予期しない結果を引き起こす可能性があります

```python
## Bad
my_very_big_string = """When a logical line of code is longer than the accepted limit, \
    you need to split it over multiple physical lines. \
    The Python interpreter will join consecutive lines if the last character of the line is a backslash.""""

from some.deep.module.inside.a.module import a_nice_function, another_nice_function, \
    yet_another_nice_function

## Good
my_very_big_string = (
    "When a logical line of code is longer than the accepted limit, "
    "you need to split it over multiple physical lines. "
    "The Python interpreter will join consecutive lines if the last character of the line is a backslash.""
)

from some.deep.module.inside.a.module import (
    a_nice_function, another_nice_function, yet_another_nice_function)
```

##### スペーシング

[PEP8](https://peps.python.org/pep-0008/#blank-lines) に従い、コードの論理的なセクションの周囲に空白行を置くことをお勧めします。
`for` ループや `if/else` ブロックを開始するときは、セクションの上に新しい行を追加してコードに余裕を持たせてください。改行は安価です - [脳の時間は高価です](https://www.getdbt.com/blog/write-better-sql-a-defense-of-group-by-1)。

```python
## Bad
def foo(input_number:int) -> int:
    """
    Do some simple comparing
    """
    res = input_number
    if res == 2:
         return res
    else:
         return res ** 2

## Good
def bar(input_number:int) -> int:
    """
    Do some simple comparing
    """

    res = input_number

    if res == 2:
         return res
    else:
         return res ** 2
```

##### 型ヒント

戻り値の型が `None` の場合も含め、すべての関数シグネチャに型ヒントを含める必要があります。
これは良いドキュメントであり、型チェックとエラーチェックのために [`mypy`](https://mypy-lang.org/) と一緒に使用することもできます。

```python
## Bad
def foo(x, y):
    """
    Add two numbers together and return.
    """

    return x + y

## Good
def foo(x: int, y: int) -> int:
    """
    Add two numbers together and return.
    """

    return x + y

## Good! (for None as return type)
def bar(some_str: str) -> None:
    """
    Print a string.
    """

    print(some_str)
    return
```

##### インポート順序

インポートは [PEP8](https://peps.python.org/pep-0008/#imports) のルールに従い、さらに `import ...` 文が `from .... import ...` より前に来るように並べる必要があります

```python
## Bad
from os import environ
import logging

import some_local_module

from requests import get
import pandas as pd
from another_local_module import something
import sys
```

```python
## Good
import logging
import sys
from os import environ

import pandas as pd
from requests import get

import some_local_module
from another_local_module import something
```

また、リンターがこの問題を解決するのに役立ちます: `isort`、`mypy`、`flake8`、`pylint`。

###### isort

[isort](https://pycqa.github.io/isort/) は、インポートをアルファベット順に並べ、セクションとタイプ別に自動的に分離する Python ユーティリティ/ライブラリです。コマンドラインユーティリティ、Python ライブラリ、およびさまざまなエディター用のプラグインを提供し、すべてのインポートをすばやく並べ替えることができます。

インストール:

```bash
pip install isort
```

使用方法:

```bash
isort file_name.py
# or isort .
```

これにより、ベストプラクティスに従ってインポートが自動的に並べ替えられます。

##### Docstring

- Docstring はすべてのファイルに使用する必要があります。
- Docstring はすべての関数に使用する必要があります。関数シグネチャに型ヒントを使用しているため、各パラメーターを記述する必要はありません。
- Docstring はトリプルダブルクォートを使用し、句読点を含む完全な文を使用する必要があります。

```python
## Good
def foo(x: int, y: int) -> int:
    """
    Add two numbers together and return the result.
    """

    return x + y

## Good! (for None as return type)
def bar(some_str: str) -> None:
    """
    Print a string.

    This is another proper sentence.
    """
    print(some_str)
    return

## Better! Have Docstring on a module level
"""
This is a Docstrings on a module level.
Should be handy to describe a purpose of your module
"""

def bar(some_str: str) -> None:
    """
    Print a string.

    This is another proper sentence.
    """

    print(some_str)
    return
```

#### 環境変数の統合方法

関数をできるだけ再利用可能にするために、関数内で環境変数を直接使用することは*（**「非常に」**正当な理由がない限り）*強く推奨しません*（以下に例があります）*。
代わりに、ベストプラクティスは、使用したい特定の変数を渡すか、すべての環境変数を辞書として渡すことです。
これにより、任意の辞書を渡しても互換性があり、変数が環境レベルで定義されている必要もありません。

```python
import os
from typing import Dict

## Bad
def foo(x: int) -> int:
    """
    Add two numbers together and return.
    """

    return x + os.environ["y"]
foo(1)

## Good
env_vars = os.environ.copy() # The copy method returns a normal dict of the env vars.
def bar(some_str: str, another_string: str) -> None:
    """
    Print two strings concatenated together.
    """
    print(f"{some_str} {another_string}")
    return

bar("foo", env_vars["bar"])

## Better
def bar(some_str: str, env_vars: Dict[str, str]) -> None:
    """
    Print two strings concatenated together.
    """
    print({some_str} + {env_vars["another_string"]})
    return

bar("foo", env_vars)

```

#### 日付のパース

`datetime.strptime` を使用して日付形式をハードコードすることは、形式が非常に珍しい場合など絶対に必要な場合を除き、理想的には避けるべきです。より良いソリューションは、dateutil ライブラリの汎用日付パーサーを使用することです。多種多様な形式を非常に信頼性高く処理します:

```python
## Bad
datevar = datetime.strptime(tstamp, timestamp_format = "%Y-%m-%dT%H:%M:%S%z")

## Good
from dateutil import parser as date_parser
 ...
datevar = date_parser.parse(tstamp)
```

#### パッケージエイリアス

一般的なサードパーティパッケージには以下のような標準エイリアスを使用しています:

- `import pandas as pd`
- `import numpy as np`

#### 変数命名規則

型を名前に追加することは優れた自己文書化コードです。
可能な限り、特にデータ型に関して、変数には説明的な命名を使用してください。以下にいくつかの例を示します:

- `data_df` はデータフレーム
- `params_dict` は辞書
- `retries_int` は int
- `bash_command_str` は文字列

定数を関数に渡す場合は、各変数に何が渡されているかが明確になるように名前を付けてください。

最後に、冗長な変数命名を避けるようにしてください。

```python

def bar(some_str: str, another_string: str) -> None:
    """
    Print two strings concatenated together.
    """
    print(some_str + another_string)
    return

## Good
bar(some_str="foo", another_string="bar")

## Better
some_str = "foo"
another_string = "bar"
bar(some_str, another_string)

## But Bad
bar(some_str=some_str, another_string=another_string)
```

#### スクリプトを実行可能にする

作成したにも関わらずスクリプトを実行できない場合、実行可能にする必要がある可能性があります。以下を実行してください:

```bash
chmod 755 yourscript.py
```

chmod 755 の説明については、この [askubuntu ページ](https://askubuntu.com/questions/932713/what-is-the-difference-between-chmod-x-and-chmod-755)を参照してください。

#### ミュータブルなデフォルト関数引数

関数のデフォルト引数としてミュータブルなデータ構造を使用すると、コードにバグが混入する可能性があります。これは、新しいミュータブルなデータ構造が関数定義時に一度だけ作成され、そのデータ構造が後続の各呼び出しで使用されるためです。

```python
def append_to(element, to=[]):
    to.append(element)
    return to

my_list = append_to(12)
print(my_list)

my_other_list = append_to(42)
print(my_other_list)
```

出力:

```console
[12]
[12, 42]
```

> **注意:** このトピックに役立つリンク: [Python の落とし穴](https://docs.python-guide.org/writing/gotchas/)

#### 例外処理

API からデータを抽出するための Python クラスを書く場合、そのクラスは API プロセスのエラーを強調表示する責任があります。データモデリング、ソースの鮮度、フォーマットの問題は `dbt tests` を使用して強調表示する必要があります。
一般的な `try/except` ブロックの使用は広すぎて本当のエラーを見つけることが難しくなるため、避けてください:

```python
## Bad
try:
   print("Do something")
except:
   print("Caught every type of exception")

## Good
while maximum_backoff_sec > (2 ** n):
    try:
        print("Do something")
    except APIError as gspread_error:
        if gspread_error.response.status_code in (429, 500, 502, 503):
            self.wait_exponential_backoff(n)
            n = n + 1
        else:
            raise
else:
    error(f"Max retries exceeded, giving up on {file_name}")

## Better! fine error granulation
while maximum_backoff_sec > (2 ** n):
    try:
        print("Do something")
    except APIError as gspread_error:
        if gspread_error.response.status_code in (429, 500, 502, 503):
            self.wait_exponential_backoff(n)
            n = n + 1
        else:
            raise
    except AttributeError as attribute_error:
        raise
    except KeyError as key_error:
        print('Caught this error: ' + repr(key_error))
```

#### 新しい抽出のフォルダー構造

- クライアント固有のロジックはすべて `/extract` フォルダーに保存し、再利用可能な API クライアントは `/analytics` リポジトリ下の `/orchestration` フォルダーに保存してください
- パイプライン固有の操作は /extract に保存してください。
- extract 内のフォルダー構造には、`extract_qualtrics_mailingsends` や、スクリプトが複数のデータセットを抽出する場合は `extract_qualtrics` のように `extract_{source}_{dataset_name}` というファイルを含める必要があります。このスクリプトは抽出のメイン関数と見なすことができ、抽出 DAG の開始点として実行されるファイルです。

#### `pytest` を使ったユニットテスト

[**Pytest**](https://docs.pytest.org/en/7.2.x/index.html) は `/analytics` プロジェクトでユニットテストを実行するために使用されます。テストはプロジェクトのルートディレクトリから `python_pytest` CI パイプラインジョブで実行されます。このジョブはテスト結果の `JUnit` レポートを生成し、それが `GitLab` によって処理されマージリクエストに表示されます。

ほとんどの機能テストフレームワーク、そして `pytest` も、`Arrange-Act-Assert` モデルに従います:

- `Arrange`（準備）- テストの条件を設定する
- `Act`（実行）- 何らかの関数やメソッドを呼び出す
- `Assert`（検証）- 最終条件が `True`（テスト合格）または `False`（テスト失敗）であることを確認する

`pytest` は Python の assert キーワードをボイラープレートコードなしで直接使用できるようにすることでテストワークフローを簡素化します。

##### 新しいテストの書き方

新しいテストファイルの名前は `test_*.py` のパターンに従う必要があります。これにより `pytest` に見つけられ、リポジトリで簡単に認識できます。
新しいテストファイルは通常、現在の作業フォルダーの下にある `test` という名前のディレクトリに配置する必要があります。テストディレクトリは、テスト対象のファイルと同じ親ディレクトリを共有する必要があります。例えば、`xyz` インテグレーションを作業している場合、フォルダー構造は次のようになるべきです:

```bash
## a typical folder structure for xyz integration
|-- xyz
    |-- src
        | -- __init__.py
        | -- execute.py
    |-- test              # here you should put your test files
        | -- test_xyz.py
```

テストファイルには1つ以上のテストを含める必要があります。
テスト関数の名前は `test_*` 命名パターンに従う必要があります。
個別のテストは、1つ以上の通常の Python `assert` 文を持つ関数を定義することで作成されます。

- すべての assert が `True` の場合、テストは合格します。
- いずれかの assert が `False` の場合、テストは失敗します。

> **注意:** インポートを書く際は、テストがルートディレクトリから実行されることを覚えておくことが重要です。

将来的には、必要に応じてテストを容易にするために追加のディレクトリが `PythonPath` に追加される可能性があります。

##### 基本的な Pytest の使い方

テストケースを作成するときは、シンプルで明確に保ってください。要点は、一貫性を保ちメンテナンスしやすくするために、テストケースを小さくすることです。

```python
## example when test passed
import pytest

def test_example_pass():
    assert 1 == 1
## test.py::test_example_pass PASSED

## example when test failed
import pytest

def test_example_failed():
    assert 1 == 2

## test.py::test_example_failed FAILED
```

##### Pytest フィクスチャの使用

`pytest` フィクスチャは、テストにデータ、設定、または状態の設定を提供する方法です。フィクスチャは、特に繰り返しタスクや設定項目に対して、幅広い値を返すことができる関数です。フィクスチャに依存する各テスト関数は、デコレーター `@pytest.fixture` とともにそのフィクスチャを明示的に引数として受け入れる必要があります。

```python
import pytest

@pytest.fixture()
def myfixture():
    # define some boring repeatable task needed for test cases
    return "This is my fixture"

## this will pass
def test_example(myfixture):
    assert myfixture == "This is my fixture"
## test.py::test_example PASSED

## this will also pass as myfixture is reused
def test_example_additional(myfixture):
    assert type(myfixture) == str
## test.py::test_example_additional PASSED
```

##### パラメータ化されたテスト関数

コードの重複を避けるための優れた方法は、[テストのパラメータ化](https://doc.pytest.org/en/latest/example/parametrize.html)を使用することです。その目的のために、`@pytest.mark.parametrize` デコレーターの背後で魔法が起こります。

組み込みの [`pytest.mark.parametrize`](https://doc.pytest.org/en/latest/how-to/parametrize.html#pytest-mark-parametrize-parametrizing-test-functions) デコレーターは、テスト関数の引数のパラメータ化を可能にします。
これにより、1つの関数でさまざまなシナリオをテストできます。`@pytest.mark.parametrize` デコレーターを使用し、テスト関数に渡される引数の名前と、その名前に対応する引数のリストを指定できます。

```python
import pytest

## here is the magic word to parametrize more than one scenario
import pytest

@pytest.mark.parametrize("test_value, expected_value", [("1+1", 2), ("2+3", 5), ("6*9", 54)])
def test_eval(test_value, expected_value):
    assert eval(test_value) == expected_value
## test.py::test_eval[1+1-2] PASSED                                         [ 33%]
## test.py::test_eval[2+3-5] PASSED                                         [ 66%]
## test.py::test_eval[6*9-54] PASSED                                        [100%]
```

言い換えると、このデコレーターは `zip*` 関数のように動作し、より多くのシナリオに対して2つのリストのタプルを返すと考えることができます。

> **注意:** デコレーター `@pytest.mark.parametrize` では、parametrize() の最初の引数はパラメーター名のカンマ区切り文字列です。2番目の引数は、パラメーター値を表すタプルまたは単一値のリストです。

##### マークを使用したテストのカテゴリ分け

大規模なテストスイートでは、一部のテストが遅くなることは避けられません。例えば、タイムアウト動作をテストしたり、コードの広い領域を実行したりする場合があります。理由がどうあれ、新機能を素早くイテレーションしようとしているときに、遅いテストをすべて実行することは避けたいです。
pytest ではテストのカテゴリを定義し、スイートを実行するときにカテゴリを含めたり除外したりするオプションを提供します。テストに任意の数のカテゴリをマークすることができます。

テストのマーキングは、サブシステムまたは依存関係によるテストのカテゴリ分けに役立ちます。例えば、一部のテストがネットワークへのアクセスを必要とする場合、それらに対して `@pytest.mark.network_access` マークを作成できます。

- まず、`pytest.ini` ファイルでマーカーを定義する必要があります:

```ini
[pytest]
markers =
    network_access: requires network access
    local_test: can run locally
```

- テストファイルを作成する

```python
import pytest

@pytest.mark.network_access
def test_network():
    assert 1 == 2

@pytest.mark.local_test
def test_local():
    assert 1 == 1
```

- `network_access` テストのみを実行する:

```bash
## will fail, just to recognize what we run
╰─$ pytest test.py -m network_access
...
collected 2 items / 1 deselected / 1 selected

test.py F
```

- `local_test` テストのみを実行する:

```bash
## this will pass
╰─$ pytest test.py -m local_test                                                                                                                                                                                                                                                    1 ↵
...
collected 2 items / 1 deselected / 1 selected

test.py .
```

##### 期間レポート

テストの速度を改善する予定がある場合、どのテストが最大の改善をもたらす可能性があるかを知ることが役立ちます。`pytest` はテストの実行時間を自動的に記録し、最悪の例を報告できます。
テスト結果に期間レポートを含めるには、pytest コマンドに `--durations` オプションを使用します。`--durations` は整数値 n を期待し、最も遅い n 個のテストを報告します。

```python
import pytest
from time import sleep

def test_slow():
    sleep(1)  # make it sleep 1s
    assert 1 == 1

def test_slower():
    sleep(2)  # make it sleep 2s
    assert 1 == 1

def test_slowest():
    sleep(3)  # make it sleep 3s
    assert 1 == 1
```

- `pytest` を呼び出す:

```bash
╰─$ pytest test.py --durations=1
= test session starts =
...
collected 3 items

test.py ...                                                                                                                                                                                                                                                                      [100%]

= slowest 1 durations =
3.00s call     test.py::test_slowest
= 3 passed in 6.03s =
```

##### 例外を使った pytest の使用

`pytest` モジュールで期待を強制したいユースケースがある場合があります。解決策は非常にシンプルです。以下に例を示します:

```python
def test_namespace_file_error(usage_ping):
    """
    Test file loading
    """
    with pytest.raises(FileNotFoundError):
        get_meta_data_from_file(file_name="THIS_DOES_NOT_EXITS.json")

## in case this file doesn't exist, the function will raise an exception, and test will pass

## Also, the handy option is to enrich pytest.raises with match statement
    with pytest.raises(ValueError, match="Raising error to.*"):
        run_metric_checks()
```

##### フェイク RESTful API を使った pytest の使用

RESTful API に対してコードをテストする必要がある場合は、[`unitest.mock`](https://docs.python.org/3/library/unittest.mock.html) ライブラリを使用します。`unitest.mock` では API 呼び出しとレスポンスを定義でき、テスト環境内でそのような動作をテストできます。
使い方は非常にシンプルです:

```python
from unittest import mock

import pytest
import requests
import responses

## define fake response, use fixture mechanism
@pytest.fixture(name="fake_response")
def mocked_responses():
    """
    Mock routine to create fake response
    """
    with responses.RequestsMock() as rsps:
    yield rsps


## test fake response
def test_convert_response_to_json(fake_response):
    """
    Test function: convert_response_to_json
    """

    expected = {"test1": "pro", "test2": "1"}
    fake_response.get(
    "https://some_gitlab_api_url/test",
    body='{"test1": "pro", "test2": "1"}',
    status=200,
    content_type="application/json",
    )

    resp = requests.get("https://some_gitlab_api_url/test")

    assert resp == expected

## Let's combine unitest.mock and pytest.raises
def test_get_response(utils):
    """
    Force fake url and raise a Connection Error
    """
    with pytest.raises(ConnectionError):
        _ = utils.get_response("https://fake_url/test")
```

##### 環境変数をシミュレートした pytest の使用

pytest コードで環境変数を追加する必要がある場合は、フィクスチャを使って行う必要があります。

- オプション 1: `environ` を使用する

```python
from os import environ

@pytest.fixture(name="env_var")
def fixture_data_classification():
    """
    Create env variables and initialize
    DataClassification object
    """
    environ["SNOWFLAKE_PREP_DATABASE"] = "PREP"
    environ["SNOWFLAKE_PROD_DATABASE"] = "PROD"
    environ["SNOWFLAKE_LOAD_DATABASE"] = "RAW"

# usage
# def test_initialization(env_var)
# ...
```

- オプション 2: `mock.patch` を使用する

```python
from unittest.mock import patch

@pytest.fixture(autouse=True, name="set_env_variables")
def mock_settings_env_vars():
    """
    Simulate OS env. variables
    """
    with mock.patch.dict(os.environ, {"START_TIME": "2023-01-01T00:00:00Z"}):
        yield

# usage is automatically started, as autouse was set to True
```

##### 長時間実行テストをスキップする

CI/CD パイプラインで特定のテストをスキップしたい（大きすぎるか時間がかかりすぎる）が、ローカルでオンデマンドで実行したい場合は、`skipif` コマンドを使用できます。

```python
# if you type command:
# export RUNALL=YES
# test will run, otherwise will skip

@pytest.mark.skipif(
    "RUNALL" not in environ,
    reason="Takes too long if run in the pipeline, want to run locally only",
)
def test_long_running_job():
    ...
```

##### pytest を超えて: 便利な pytest プラグイン

より複雑なシナリオで `pytest` が要求に答えられない場合は、便利なプラグインを探してください。今のところ、`/analytics` リポジトリでは `pytest` 以外の使用法は見つかっていませんが、作業に役立つ便利なツールがあることは知っておくと良いでしょう。

- [pytest-randomly](https://github.com/pytest-dev/pytest-randomly) - テストをランダムな順序で実行し、`random.seed` を制御する Pytest プラグイン。
- [pytest-cov](https://pytest-cov.readthedocs.io/en/latest/) - このプラグインはカバレッジレポートを生成します。`coverage run` を使用するだけと比べて、いくつかの追加機能があります: `サブプロセスサポート`、`Xdist サポート`、`一貫した pytest の動作`
- [完全なプラグインリスト](https://docs.pytest.org/en/latest/reference/plugin_list.html) - `pytest` プラグインのリスト。

#### コード品質をサポートするツール

Python コミュニティは、コードベースのコード品質と高い標準を確保するための包括的なツールセットを提供しています。
コード品質のためのツールボックスからいくつかのツールをリストアップし、将来的な潜在的オプションとして考慮する価値のある興味深いアイテムを紹介します。

##### Black

私たちのメインリンターは [**Black**](https://pypi.org/project/black/) です。デフォルト設定を使用しています。

`review` ステージ（`Python` セクション）には手動 CI ジョブがあり、リポジトリ全体をリントし、ファイルをフォーマットする必要がある場合にゼロ以外の終了コードを返します。MR 作成者とレビュアーの両方が、MR がマージされる前にこのジョブがパスすることを確認する責任があります。リポジトリ全体をリントするには、次のコマンドを実行してください:

```bash
jump analytics
black .
```

`black` を使用してリポジトリ全体または特定のフォルダーやファイルのすべてのファイルを*（フォーマットせずに）*チェックしたい場合は:

```bash
## for the entire repo, run
$ jump analytics
$ run black --check .

## for particular folder, run
$ run black --check extract/

## for particular folder, run
$ run black --check extract/saas_usage_ping/usage_ping.py
```

##### mypy

- [`mypy`](https://mypy-lang.org/)

> Mypy は Python のオプションの静的型チェッカーで、動的（または `duck`）型付けと静的型付けの利点を組み合わせることを目指しています。Mypy は Python の表現力と利便性を強力な型システムとコンパイル時の型チェックと組み合わせます。Mypy は標準的な Python プログラムの型チェックを行います。

```bash
## Run mypy for extract/ folder
mypy extract/ --ignore-missing-imports
```

##### flake8

スタイルガイド実施のためのツール:
[**Flake8**](https://flake8.pycqa.org/en/latest/) は Python の人気のあるリントラッパーです。内部で3つの他のツールを実行し、結果を組み合わせます: スタイルチェックのための pep8、構文チェックのための pyflakes、複雑さチェックのための mccabe。

```bash
flake8 . --ignore=E203,E501,W503,W605
```

##### pylint

[**Pylint**](https://pylint.org/) は Python の静的コードアナライザーです。

> Pylint はコードを実際に実行せずに分析します。エラーをチェックし、コーディング標準を強制し、コードの臭いを探し、コードのリファクタリング方法についての提案をすることができます。Pylint は内部コード表現（astroid）を使用して、コードから実際の値を推測できます。コードが `import logging as argparse` の場合、Pylint は `argparse.error(...)` が実際には `argparse` 呼び出しではなく `logging` 呼び出しであることを認識します。

`Pylint` は高度に設定可能で、独自のチェックを追加するためのプラグインを書くことができます（例: 内部ライブラリや内部ルール）。Pylint には人気のフレームワークやサードパーティライブラリ用の既存プラグインのエコシステムもあります。

```bash
## we use pylint and exclude some of check to reduce the noise (ie. line-too-long)
pylint extract/ --ignore=analytics/dags --disable=line-too-long,E0401,E0611,W1203,W1202,C0103,R0801,R0902,W0212
```

##### xenon

[**Xenon**](https://pypi.org/project/xenon/) は Radon に基づいた監視ツールです。コードの複雑さを監視します。理想的には、コードをコミットするたびに Xenon を実行します。コマンドラインオプションを通じて、コードの複雑さに対するさまざまな閾値を設定できます。これらの要件のいずれかが満たされない場合に失敗します（つまり、ゼロ以外の終了コードで終了します）。

```bash
run xenon --max-absolute B --max-modules B --max-average A . -i transform,shared_modules
```

##### vulture

[**Vulture**](https://pypi.org/project/vulture/) は Python プログラムの未使用コードを見つけます。これは大規模なコードベースのクリーンアップとエラー発見に役立ちます。ライブラリとテストスイートの両方で Vulture を実行すれば、テストされていないコードを見つけることができます。

Python の動的な性質により、Vulture のような静的コードアナライザーは一部のデッドコードを見逃す可能性があります。また、暗黙的にのみ呼び出されるコードは未使用として報告される場合があります。それでも、Vulture はより高いコード品質のための非常に役立つツールになり得ます。

```bash
run vulture . --min-confidence 100
```

##### その他の便利なライブラリ

コード品質を高いレベルに保つためのリンターを自動化する方法については、[🐍 Python CI ジョブ](/handbook/enterprise-data/platform/ci-jobs/#-python) を参照してください。これらのリンターはすべて自動的にテストでき、そのために [Makefile](https://gitlab.com/gitlab-data/analytics/-/blob/master/Makefile) を使用した包括的なコマンドセットを作成しました。

また、確認・探索・検討をお勧めします:

- [`pycodestyle`](https://github.com/PyCQA/pycodestyle)
- [`yapf`](https://github.com/google/yapf)
- [`autopep8`](https://pypi.org/project/autopep8/)
- [`HowDOI`](https://github.com/gleitz/howdoi) - クイック検索に役立つツール。
- [`iSort`](https://pycqa.github.io/isort/) - isort は、インポートをアルファベット順に並べ、セクションとタイプ別に自動的に分離する Python ユーティリティ/ライブラリです。

#### コード品質標準の自動化ツール

コード品質とテストの自動化には、私たち自身の製品 [GitLab CI/CD パイプライン](https://docs.gitlab.com/ee/ci/pipelines/)を使用しています。
Python 用に使用するパイプラインの詳細は [CI ジョブ（Python）](/handbook/enterprise-data/platform/ci-jobs/#-python)ページで参照できます。

#### Python を使わない場合

このスタイルガイドはデータチーム全体を対象としているため、`Python` を使用する時と場所があり、通常はデータモデリングフェーズの外であることを覚えておくことが重要です。
可能な限り、データ操作タスクには `SQL` を使用してください。

### SQLAlchemy のアップグレード - コードベースの変更

2025年2月4日時点で、`analytics/` リポジトリは [Analytics MR!11537](https://gitlab.com/gitlab-data/analytics/-/merge_requests/11537) で詳細に説明されているように、最新の `data_image` を使用するように更新されました。この更新には複数の Python ライブラリのアップグレードが含まれており、特に `sqlalchemy` が注目されます。インストールされた具体的なバージョンは `snowflake-sqlalchemy==1.6.1` であり、`sqlalchemy==2.0` に依存しています。

#### SQLAlchemy クエリパターンの変更

SQLAlchemy の新バージョンでは、クエリの渡し方に対してより厳格なルールが適用されます。以下は、更新された SQLAlchemy ライブラリに準拠するよう Python 文を更新する方法の例です:

1. **execute**:
    - 旧: `connection.execute(query)`
    - 新: `gitlabdata.execute_query_str(connection, query)`

2. **read_sql**:
    - 旧: `pd.read_sql(query)`
    - 新: `pd.read_sql(text(query))`

3. **has_table**:
    - 旧: `engine.has_table(table)`
    - 新: `gitlabdata.has_table(engine, table)`

4. **新しいエンジンの作成**:
    - 新しいエンジンを作成する際には、`autocommit` パラメーターを明示的に設定する必要があります。正しい設定は使用するデータベースによって異なります。
    - `gitlabdata` ライブラリは便利に使用できるプリセットエンジンを提供しています（例: `snowflake_engine_factory` や `postgres_engine_factory`）
