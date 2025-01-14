// 祝福语数据
const quotes = {
  family: [
    "祝家人新年快乐，身体健康，万事如意！",
    "愿新的一年里，家人平安喜乐，幸福美满！",
    "祝全家新年吉祥，财源广进，心想事成！"
  ],
  friends: [
    "祝好友新年快乐，友谊长存，事业蒸蒸日上！",
    "愿新的一年里，我们的友谊更加深厚！",
    "祝朋友新年大吉，万事顺心，笑口常开！"
  ],
  business: [
    "祝您新年事业兴旺，财源广进，合作愉快！",
    "愿新的一年里，我们合作更加顺利，共创辉煌！",
    "祝贵公司新年大展宏图，生意兴隆！"
  ],
  humor: [
    "新年快乐！愿你钱包鼓鼓，烦恼少少，快乐多多！",
    "祝你新年吃嘛嘛香，睡嘛嘛甜，干啥啥顺！",
    "新年愿望：躺着也能赚钱，睡着也能变美！"
  ]
};

// DOM元素
const generateBtn = document.getElementById('generateBtn');
const quoteDisplay = document.getElementById('quoteDisplay');
const copyBtn = document.getElementById('copyBtn');

// 播放音效
function playSound() {
  const audio = new Audio('new-year.mp3');
  audio.play();
}

// 生成随机祝福语
function generateQuote() {
  const categories = Object.values(quotes);
  const allQuotes = [].concat(...categories);
  const randomIndex = Math.floor(Math.random() * allQuotes.length);
  return allQuotes[randomIndex];
}

// 显示祝福语
function showQuote() {
  // 按钮点击动画
  generateBtn.classList.add('clicked');
  setTimeout(() => {
    generateBtn.classList.remove('clicked');
  }, 100);

  // 播放音效
  playSound();

  // 生成并显示祝福语
  const quote = generateQuote();
  quoteDisplay.textContent = quote;
  quoteDisplay.classList.add('show');

  // 显示复制按钮
  copyBtn.style.display = 'block';
}

// 复制祝福语
function copyQuote() {
  navigator.clipboard.writeText(quoteDisplay.textContent)
    .then(() => {
      showToast('复制成功！');
    })
    .catch(() => {
      showToast('复制失败，请手动复制');
    });
}

// 显示提示信息
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 500);
  }, 2000);
}

// 计算春节倒计时
function updateCountdown() {
  const now = new Date();
  const nextSpringFestival = new Date(now.getFullYear(), 1, 10); // 假设春节在2月10日
  if (now > nextSpringFestival) {
    nextSpringFestival.setFullYear(nextSpringFestival.getFullYear() + 1);
  }
  
  const diffTime = nextSpringFestival - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  document.getElementById('countdown').textContent = diffDays;
}

// 事件监听
generateBtn.addEventListener('click', showQuote);
copyBtn.addEventListener('click', copyQuote);

// 初始化
updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60); // 每小时更新一次倒计时
