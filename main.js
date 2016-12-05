var log = console.log.bind(console);

window.onload = init;

var ctx, canvas;


function init() {
  log("loaded!");

  canvas = document.getElementsByTagName('canvas')[0];
  ctx = canvas.getContext('2d');
  log(canvas);
  log(ctx);

  drawButton();

}

function drawButton() {
  drawBox();
}

function drawBox() {
  ctx.lineWidth = 1;
  ctx.strokeRect(20.5, 20.5, 50, 50);

  ctx.beginPath();
  ctx.moveTo(80.5, 80);
  ctx.lineTo(80.5, 100);
  ctx.stroke();

  ctx.fillRect(90, 90, 50, 50);
}
