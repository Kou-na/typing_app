
grow typing
====
遊んで覚えるタイピングゲーム

<img width="395" alt="logo" src="https://user-images.githubusercontent.com/64447481/90992931-a8c95c80-e5ed-11ea-8210-857325aea745.png">

# 概要
自分で登録した文字がゲーム画面に表示され、タイピングゲームとして遊ぶことのできるwebアプリケーションです。
実際の操作画面のキャプチャはREADME下部にございます。また、HEROKUを利用してデプロイしたものは以下よりご覧いただけます。

< https://grow-typing.herokuapp.com/ > 開くまでにお時間がかかる場合がございます。

# 作成意図
勉強熱心な私の家族は、日々忙しそうにしていました。仕事に役立てるための勉強に、パソコン業務を早めるためのタイピング練習。限られた時間を有意義に、もっと楽しく過ごしてほしい。「勉強内容が表示できるタイピングゲームがあれば...」。そんな家族の声に応えました。

一般的なタイピングゲームは、既定の文字群がランダムで表示されるものです。学習用であっても、自分のレベルや現在の学習内容にぴったりなものは見つからず、探すだけで一苦労。このgrow typingがあれば、タイピングゲームの機能としてはもちろん、自分の現在の学習内容に沿った言葉を打ち続けることで復習にも役立てられます。

恐竜が一歩一歩前進するように、日々の努力が実りますように！（※恐竜はフリー素材を使用しています）

## 課題・今後実装したい機能
2週間という期限内に「基本機能の実装とデプロイをする」という目標を達成するため、コードが間に合わせになっている部分がありました。修正してより変更に強いコードにしていきたいです。また、文字制限のバリデーションがかかっていないため、実装したいと思います。


# 内容
## 遊び方
1. ログイン前

既定の文字で遊べます。

2. ログイン後

最初に一つ以上文字の登録をすることで遊べるようになります。勉強したことなどを、問題文・答え・タイピングする文字にわけて登録することで、タイピングしながら復習に役立てられます。登録できる文字数は18文字までです。

## バージョン
- Ruby 2.6.5
- Rails 6.0.3

## 実装機能
### ユーザー関連
- 登録機能（名前/メールアドレス/パスワード）
- 編集機能（名前/メールアドレス）
- ログイン・ログアウト機能

### ゲーム用文字関連
- 一覧表示機能
- 登録機能（質問文/答え/タイピングする文字）
- 編集機能
- 削除機能

# 操作画面
### トップ画面
ログインされているかどうか、文字が登録されているかどうかで、PLAYボタンを押した時のリンク先が変わります
<img width="1440" alt="top" src="https://user-images.githubusercontent.com/64447481/90992453-cb0dab00-e5ea-11ea-935c-e0830b3ec7fc.png">

### サイドメニュー表示ができます
<img width="1440" alt="side_bar" src="https://user-images.githubusercontent.com/64447481/90992454-ccd76e80-e5ea-11ea-9255-170a1ccef4e3.png">

### ゲームで表示する文字を決めます
<img width="1440" alt="edit" src="https://user-images.githubusercontent.com/64447481/90992456-ce089b80-e5ea-11ea-9bc6-6dffd92ebdda.png">

### 文字の一覧です
ここから編集・削除画面へ飛ぶことができます
<img width="1440" alt="show" src="https://user-images.githubusercontent.com/64447481/90992459-d660d680-e5ea-11ea-92ae-4bf6c65123e3.png">

### ゲームの画面です
問題とその答えが上部に表示され、中央に実際に打つアルファベットが表示されます
正解の文字を打つと恐竜が左から右へ動きます
<img width="1440" alt="game" src="https://user-images.githubusercontent.com/64447481/90992468-e4aef280-e5ea-11ea-8c39-e5fce843660a.png">

### ゲームの結果表示画面です
<img width="1440" alt="result" src="https://user-images.githubusercontent.com/64447481/90992469-e8427980-e5ea-11ea-9399-37dabd86a242.png">
