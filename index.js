const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const stick = [];
for (let i = 0; i < 40; i++) {
  const none = [0, 1, 2, 3, 4, 8, 13, 17, 22, 26, 31, 35, 36, 37, 38, 39];
  if (none.includes(i)) {
    stick[i] = 0;
  } else {
    stick[i] = 1;
  }
}

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 描画コード
  /*  stick.forEach((element) => {
    ctx.beginPath();
    ctx.rect(110 * c, 110 * r + 103, 100, 4);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
  });
  */
  // horizonal
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 5; c++) {
      ctx.beginPath();
      ctx.rect(110 * c, 110 * r + 103, 100, 4);
      ctx.fillStyle = "#000000";
      ctx.fill();
      ctx.closePath();
    }
  }
  // vertical
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 4; c++) {
      ctx.beginPath();
      ctx.rect(110 * c + 103, 110 * r, 4, 100);
      ctx.fillStyle = "#000000";
      ctx.fill();
      ctx.closePath();
    }
  }
};

const button = document.getElementById("play");
button.onclick = draw;
