$(function() {
  let loc = 0;
  let scoreCount = 0;
  let missCount = 0;
  let timeLimit = 60 * 1000;
  let startTime;
  let isPlaying = false;
  
  // idの呼び出し
  const timer = document.getElementById('timer');
  const question = document.getElementById('question');
  const answer = document.getElementById('answer');
  const target = document.getElementById('target');
  const cover = document.getElementById('Cover');
  const gameOver = document.getElementById('GameOver');
  const score = document.getElementById('score');
  const miss = document.getElementById('miss');

  // データ属性を使った、データベースの内容の読み込み（文字列）
  const questions = document.getElementById('questions');
  const answers = document.getElementById('answers');
  const targets = document.getElementById('targets');
  const q = questions.dataset.questions;
  const a = answers.dataset.answers;
  const t = targets.dataset.targets;

  // 文字列の成形と配列への変換
  // questions = array1
  const array1 = q.replace(/\"/g, '').replace(/\[/g, '').replace(/\]/g, '').split(',');
  // answers = array2
  const array2 = a.replace(/\"/g, '').replace(/\[/g, '').replace(/\]/g, '').split(',');
  // targets = array3
  const array3 = t.replace(/\"/g, '').replace(/\[/g, '').replace(/\]/g, '').split(',');

  // 問題文のランダム選択
  let currentNum = Math.floor(Math.random() * array3.length);

  // 問題文の更新関数
  function updateWords() {
    currentNum = Math.floor(Math.random() * array3.length);
    question.textContent = array1[currentNum];
    answer.textContent = array2[currentNum];
    target.textContent = array3[currentNum];
  };

  // タイマー用関数
  function updateTimer() {
    const timeLeft = startTime + timeLimit - Date.now();
    timer.textContent = Math.round(timeLeft / 1000);

    const timeoutId = setTimeout(() => {
      updateTimer();
    }, 1000);

    if (timeLeft < 0) {
      gameOver.style.display = 'block';
      isPlaying = false;
      clearTimeout(timeoutId);
      timer.textContent = 0;
    }
  };

  // カウントダウン用関数
  function countDown() {
    cover.textContent = 3;
    setTimeout(() => {
      cover.textContent = 2;
      cover.style.fontSize = '30px';
    }, 1000);
    setTimeout(() => {
      cover.textContent = 1;
      cover.style.fontSize = '60px';
    }, 2000);
    setTimeout(() => {
      cover.textContent = "Start!!"
      cover.style.fontSize = '80px';
    }, 3000);
  };

  // 文字の更新用関数
  function updateTarget() {
    let placeholder = ' ';
    for (let i = 0; i < loc; i++) {
      placeholder += ' ';
    }
    target.textContent = placeholder + array3[currentNum].substring(loc);
  };
  


  // ゲームスタート
  document.addEventListener('keydown', e => {
    if (isPlaying === true) {
      return
    }

    if (e.keyCode === 32) {
      countDown();
      setTimeout(() => {
        cover.style.display = 'none';
        isPlaying = true;
        startTime = Date.now();
        updateWords(); //問題文の提示
        updateTimer(); //カウントダウン開始
        const main = document.getElementsByClassName('Main')
      }, 4500);
    }
  });

  // ゲームの内容
  document. addEventListener('keydown', e => {
    if (isPlaying === false) {
      return;
    }

    if (e.key === array3[currentNum][loc] || e.key.toLowerCase() === array3[currentNum][loc] || e.key.toUpperCase() === array3[currentNum][loc]) {
      loc++;
      if (loc === array3[currentNum].length) {
        updateWords();
        loc = 0;
      }
      updateTarget();
      scoreCount++;
      score.textContent = `成功タイプ数: ${scoreCount}`;
      console.log(`成功タイプ数: ${scoreCount}`); // コンソーーーーーーーーーーーーーーール
    } else {
      missCount ++
      miss.textContent = `ミスタイプ数: ${missCount}`;
      console.log(`ミスタイプ数: ${missCount}`); // コンソーーーーーーーーーーーーーーール
    }
  });

  /////////////////////////////////////////////canvas
  // キーボードの入力状態を記録する配列の定義
  let input_key_buffer = new Array();

  // キーボードの入力イベントをトリガーに配列のフラグ値を更新させる
  window.addEventListener("keydown", e => {
    input_key_buffer[e.keyCode] = true;
  });

  window.addEventListener("keyup", e => {
    input_key_buffer[e.keyCode] = false;
  });

///////////////////////////////////////////
  // canvas要素の取得
  const canvas = document.getElementById("maincanvas");
  const ctx = canvas.getContext("2d");

  // ロード時に画面描画の処理が実行されるようにする
  window.addEventListener("load", update);

  // 画像を表示するの座標の定義 & 初期化
  x = 0;
  y = 0;

  // 画面を更新する関数を定義 (繰り返しここの処理が実行される)
  function update() {

    // 画面全体をクリア
    ctx.clearRect(0, 0, 900, 400);

  // 入力値の確認と反映
  if (input_key_buffer[37]) {
    x -= 1; // 左が押されていればx座標を1減らす
  }
  if (input_key_buffer[38]) {
    y -= 1; // 上が押されていればy座標を1減らす
  }
  if (input_key_buffer[39]) {  
    x += 1; // 右が押されていればx座標を1増やす
  }
  if (input_key_buffer[40]) {
    y += 1; // 下が押されていればy座標を1増やす
  }
    

    //////////////////////////////////////////////////////////////////////
    // 主人公の画像を表示
    let dotData = 
          "□□■□□□□□■□□" +
          "□□□■□□□■□□□" +
          "□□■■■■■■■□□" +
          "□■■□■■■□■■□" +
          "■■■■■■■■■■■" +
          "■□■■■■■■■□■" +
          "■□■□□□□□■□■" +
          "□□□■■□■■□□□";
    // イメージデータを作成する
    let imageData = ctx.createImageData(11, 16);

    // イメージデータにドット絵のデータを設定する
    let dotDataArr = dotData.split("");
    for (let i = 0; i < dotDataArr.length; i++) {
      switch(dotDataArr[i])
      {
        case "■": // ■は水色
          imageData.data[i * 4 + 0] = 0; // 赤
          imageData.data[i * 4 + 1] = 255; // 緑
          imageData.data[i * 4 + 2] = 255; // 青
          imageData.data[i * 4 + 3] = 255; // アルファ
          break;
        default: // それ以外は黒色
          imageData.data[i * 4 + 0] = 0; // 赤
          imageData.data[i * 4 + 1] = 0; // 緑
          imageData.data[i * 4 + 2] = 0; // 青
          imageData.data[i * 4 + 3] = 255; // アルファ
      }
    }

    // イメージデータを作画する
    ctx.putImageData(imageData, x, 10);



    ctx.font = "38px sans-serif";
    ctx.fillText(`残り${timer.textContent}秒`, 80, 90);

    

    ctx.font = "48px Comic Sans MS";
    ctx.fillText(target.textContent, 100, 160);



    // 再描画
    window.requestAnimationFrame(update);
  }





});