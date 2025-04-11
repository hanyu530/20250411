let circles = [];

function setup() { 
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  

  // 產生 40 個圓的初始位置和顏色
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(30, 100),
      color: color(random(255), random(255), random(255)) // 鮮豔顏色
    });
  }
}

function draw() {
  background('#c0d6df'); // 重繪背景

  // 計算圓的大小變化幅度
  let sizeOffset = map(mouseX, 0, width, 10, 120);

  // 繪製圓
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size + sizeOffset);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時，調整畫布大小
}
