let angle = 0; // 初始旋轉角度

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#FF95CA"); // 背景顏色
  noFill(); // 不填滿顏色
  strokeWeight(3); // 線條粗細
  
  // 宣告變數
  var rect_width = 50; // 方形的寬度
  var bc_w = 50; // 大圓的寬度
  var sc_w = 25; // 小圓的寬度
  
  rectMode(CENTER);

  // 使用迴圈產生 25 排
  for (let j = 0; j < 25; j++) { // 負責產生幾排
    for (let x = 0; x < width; x += rect_width) {
      let y = 25 + 50 * j; // 每一排的 Y 坐標

      // 計算距離
      let distanceToBigCircle = dist(mouseX, mouseY, x, y);
      let distanceToSquare = dist(mouseX, mouseY, x, y);
      let distanceToSmallCircle = dist(mouseX, mouseY, x + rect_width, y);

      // 根據滑鼠距離改變大小
      let bigCircleSize = map(distanceToBigCircle, 0, 200, 80, 30);
      let smallCircleSize = map(distanceToSmallCircle, 0, 200, 40, 10);
      let squareSize = map(distanceToSquare, 0, 200, 70, 30);

      // 根據距離調整顏色 (粉色系)
      let bigCircleColor = color(map(distanceToBigCircle, 0, 200, 255, 150), 100, 200); // 漸變粉色
      let squareColor = color(map(distanceToSquare, 0, 200, 255, 150), 100, 200); // 漸變粉色
      let smallCircleColor = color(255, map(distanceToSmallCircle, 0, 200, 0, 150), 200); // 漸變粉色

      // 畫大圓
      stroke(bigCircleColor); // 設定顏色
      ellipse(x, y, bigCircleSize); // 畫大圓

      // 畫方形
      stroke(squareColor); // 設定顏色
      rect(x, y, squareSize, squareSize); // 畫方形

      // 畫小圓
      stroke(smallCircleColor); // 設定顏色
      ellipse(x + rect_width, y, smallCircleSize); // 畫小圓
    }
  }

  // 在畫面正中央旋轉顯示 "CYP"
  push(); // 保存當前坐標系
  translate(width / 2, height / 2); // 移動原點到畫面中心
  rotate(angle); // 旋轉
  textAlign(CENTER, CENTER); // 設置文本對齊方式
  textSize(128); // 設置文本大小
  fill(255); // 設置顏色為白色
  noStroke(); // 不顯示邊框
  text("CYP", 0, 0); // 繪製文本
  pop(); // 恢復坐標系

  angle += 0.01; // 增加旋轉角度
}
