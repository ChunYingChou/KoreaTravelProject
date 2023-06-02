// 背景圖轉換效果
setInterval(() => {
  let topBackground = document.querySelector(".background-img");

  if (topBackground.style.backgroundImage === 'url("../image/seoul.jpg")') {
    topBackground.style.backgroundImage = 'url("../image/koreaDance.jpg")';
  } else if (
    topBackground.style.backgroundImage === 'url("../image/koreaDance.jpg")'
  ) {
    topBackground.style.backgroundImage = 'url("../image/koreaFood.jpg")';
  } else if (
    topBackground.style.backgroundImage === 'url("../image/koreaFood.jpg")'
  ) {
    topBackground.style.backgroundImage = 'url("../image/Street.jpg")';
  } else {
    topBackground.style.backgroundImage = 'url("../image/seoul.jpg")';
  }
}, 3000);



