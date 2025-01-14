// 祝福語數據
const quotes = {
  family: [
    "祝家人新年快樂，身體健康，萬事如意！",
    "願新的一年裡，家人平安喜樂，幸福美滿！",
    "祝全家新年大吉，財源廣進，心想事成！"
  ],
  friends: [
    "祝好友新年快樂，友誼長存，事業有成！",
    "願新的一年裡，我們的友誼更加深厚！",
    "祝朋友新年快樂，天天開心，萬事順意！"
  ],
  business: [
    "祝貴公司新年大展宏圖，財源廣進！",
    "願新的一年裡，我們合作愉快，共創輝煌！",
    "祝您事業蒸蒸日上，新年更上一層樓！"
  ],
  humor: [
    "新年快樂！願你錢包鼓鼓，體重輕輕！",
    "祝你新年快樂，吃嘛嘛香，睡嘛嘛甜！",
    "新年願望：工資漲得像頭髮一樣快，頭髮掉得像工資一樣慢！"
  ]
};

// 獲取DOM元素
const generateBtn = document.getElementById('generateBtn');
const quoteDisplay = document.getElementById('quoteDisplay');

// 播放音效
function playSound() {
  const audio = new Audio('new-year.mp3');
  audio.play();
}

// 生成隨機祝福語
function generateQuote() {
  // 隨機選擇一個分類
  const categories = Object.keys(quotes);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  
  // 隨機選擇一條祝福語
  const randomQuote = quotes[randomCategory][Math.floor(Math.random() * quotes[randomCategory].length)];
  
  // 顯示祝福語
  quoteDisplay.style.opacity = 0;
  setTimeout(() => {
    quoteDisplay.textContent = randomQuote;
    quoteDisplay.style.opacity = 1;
  }, 100);
  
  // 添加複製按鈕功能
  const copyBtn = document.getElementById('copyBtn');
  copyBtn.onclick = () => {
    navigator.clipboard.writeText(randomQuote)
      .then(() => {
        showCopySuccess();
      });
  };
}

// 顯示複製成功提示
function showCopySuccess() {
  const successMsg = document.createElement('div');
  successMsg.textContent = '複製成功！';
  successMsg.style.position = 'absolute';
  successMsg.style.top = '-30px';
  successMsg.style.color = '#FFD700';
  successMsg.style.opacity = 0;
  quoteDisplay.appendChild(successMsg);
  
  // 淡入淡出動畫
  setTimeout(() => {
    successMsg.style.opacity = 1;
    setTimeout(() => {
      successMsg.style.opacity = 0;
      setTimeout(() => {
        quoteDisplay.removeChild(successMsg);
      }, 500);
    }, 1000);
  }, 10);
}

// 按鈕點擊事件
generateBtn.addEventListener('click', () => {
  // 播放音效
  playSound();
  
  // 按鈕動畫
  generateBtn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    generateBtn.style.transform = 'scale(1)';
  }, 100);
  
  // 生成祝福語
  generateQuote();
});
