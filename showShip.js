Ship.prototype.draw = function (ctx) {
  var x = this.position["x"];
  var y = this.position["y"];

  ctx.fillStyle = "white";
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(this.angle);
  ctx.beginPath();
  ctx.moveTo(0, -15);
  ctx.lineTo(15, 27);
  ctx.lineTo(-15, 27);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.restore();
}