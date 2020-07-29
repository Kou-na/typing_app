$(function() {
  let loc = 0;
  let correct = 0;
  let miss = -1;
  let timeLimit = 60 * 1000;
  let startTime;
  let isPlaying = false;
  
  // idの呼び出し
  const timer = document.getElementById('timer');
  const question = document.getElementById('question');
  const answer = document.getElementById('answer');
  const target = document.getElementById('target');
  const cover = document.getElementById('Cover');

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
    }
  };
  

  // ゲームスタート
  document.addEventListener('keydown', e => {
    if (isPlaying === true) {
      return
    }

    if (e.keyCode === 32) {
      cover.style.display = 'none';
      isPlaying = true;
      startTime = Date.now();
      updateWords(); //問題文の提示
      updateTimer(); //カウントダウン開始
      const main = document.getElementsByClassName('Main')
    }
  });


  function updateTarget() {
    let placeholder = ' ';
    for (let i = 0; i < loc; i++) {
      placeholder += '_';
    }
    target.textContent = placeholder + array3[currentNum].substring(loc);
  };

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
      correct++;
      console.log(`correct: ${correct}`); // コンソーーーーーーーーーーーーーーール
    } else {
      miss ++
      console.log(`miss: ${miss}`); // コンソーーーーーーーーーーーーーーール
    }
    
  });
});