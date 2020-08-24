
grow typing
====
遊んで覚えるタイピングゲーム

<img width="395" alt="logo" src="https://user-images.githubusercontent.com/64447481/90992931-a8c95c80-e5ed-11ea-8210-857325aea745.png">

## 概要
「タイピング練習しながら勉強の復習もしたい」「決められた文字を打つだけでなく、打つ言葉も自分で決めたい」との言葉を聞いて数ヶ月...。HTMLやCSS、JavaScript/SQLを勉強し、それだけではデータベースを使ったwebアプリケーションは作れないと知り、Ruby/Ruby on Railsを使えるようになって、やっと作成できたアプリケーションです。恐竜が一歩一歩前進するように、タイピング力と学習記憶力を少しずつ育てていけるようとの想いを込めて名付けてくれました。（※恐竜はフリー素材を使用しています）

プログラミングスクールのカリキュラムの一環で、個人アプリケーション制作の課題として提出したものです。与えられた2週間という期間で、ゲーム機能/ユーザー登録機能、文字の登録・編集機能を実装し、デプロイされた状態にすることを目標に作成しました。

実際の操作画面のキャプチャはREADME下部にございます。

また、HEROKUを利用してデプロイしたものはこちらから→　< https://grow-typing.herokuapp.com/ > 開くまでにお時間がかかる場合があります。



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


## 操作画面
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
