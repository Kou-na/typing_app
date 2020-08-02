$(function() {

  // メニュー ---------------------------------------------------------------------------------------
  const show = document.getElementById('show');
  const hide = document.getElementById('hide');

  show.addEventListener('click', () => {
    document.body.classList.add('menu-open');
  });
  hide.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
  });



  // ゲーム -------------------------------------------------------------------------------------------
  let loc = 0;
  let scoreCount = 0;
  let missCount = 0;
  let timeLimit = 6 * 1000;
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

  const sDino = document.getElementById('small-dinosaur');
  const mDino = document.getElementById('middle-dinosaur');
  const bDino = document.getElementById('big-dinosaur');
  const runningDino = document.getElementById('running-dinosaur');

  // 恐竜の位置
  const rect = sDino.getBoundingClientRect();
  let x = rect.left;

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
      isPlaying = false;
      clearTimeout(timeoutId);
      timer.textContent = 0;
      gameOver.style.display = 'block';
      sDino.style.display = 'none';
      runningDino.style.display = ('block');
      runningDino.style.zIndex = 20;
    }
  };

  // カウントダウン用関数
  function countDown() {
    cover.textContent = 3;
    cover.style.fontSize = '40px';
    setTimeout(() => {
      cover.textContent = 2;
      cover.style.fontSize = '60px';
    }, 1000);
    setTimeout(() => {
      cover.textContent = 1;
      cover.style.fontSize = '90px';
    }, 2000);
    setTimeout(() => {
      cover.textContent = "Start!!"
      cover.style.fontSize = '100px';
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
        gameOver.style.display = 'none';
        isPlaying = true;
        startTime = Date.now();
        updateWords(); //問題文の提示
        updateTimer(); //カウントダウン開始

        sDino.style.display = ('block');
        sDino.style.animationName = ('sway');
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
      sDino.style.animationPlayState = 'running';
      sDino.style.left = `${x += 10}px`
      if (loc === array3[currentNum].length) {
        updateWords();
        loc = 0;
      }
      updateTarget();
      scoreCount++;
      score.textContent = scoreCount;
    } else {
      missCount ++
      sDino.style.animationPlayState = 'paused';
      miss.textContent = missCount;
    }
  });

  /////////////////////////////////////////////canvas
  // canvas要素の取得
  const canvas = document.getElementById("maincanvas");
  const ctx = canvas.getContext("2d");

  // ロード時に画面描画の処理が実行されるようにする
  window.addEventListener("load", update);

  // 画像を表示するの座標の定義 & 初期化
  x = 0;
  y = 0;

  // canvas画面の更新関数
  function update() {
    ctx.clearRect(0, 0, 900, 400);      // 画面全体をクリア
    ctx.font = "38px sans-serif";
    ctx.fillText(`残り${timer.textContent}秒`, 80, 90);

    ctx.font = "48px Comic Sans MS";      // 表示文字の設定
    let textWidth = ctx.measureText(target.textContent).width;
    ctx.fillText(target.textContent, (900 - textWidth) / 2, 180);

    window.requestAnimationFrame(update);        // 再描画
  }

});