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

}
