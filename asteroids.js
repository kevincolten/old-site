 $(function(){
      var canvasEl = document.createElement('canvas');
      canvasEl.id = 'canvas'
      canvasEl.width = window.innerWidth;
      canvasEl.height = window.innerHeight;
      document.getElementById('canvasDiv').appendChild(canvasEl);
      var ctx = canvasEl.getContext("2d");
      var game = new Game(10, canvas);
      game.start(ctx);
    });
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Function.prototype.inherits = function (BaseClass) {
  function Surrogate () {};
  Surrogate.prototype = BaseClass.prototype;
  this.prototype = new Surrogate();
};


function MovingObject(position) {
	this.position = position;
};

MovingObject.prototype.update = function(velocity) {
	this.position = {
		x: (this.position["x"] + velocity["x"]),
		y: (this.position["y"] + velocity["y"])
	};
}

MovingObject.prototype.offScreen = function() {
	if(this.position["x"] > windowWidth || this.position["x"] < 0) {
		return true;
	} else if(this.position["y"] > windowHeight || this.position["y"] < 0) {
		return true;
	} else {
		return false;
	}
}

MovingObject.prototype.fixOffScreen = function() {
	if (this.position["x"] < 0) {
			this.position["x"] += windowWidth;
	} else if(this.position["x"] > windowWidth) {
			this.position["x"] -= windowWidth;
	} else if(this.position["y"] < 0) {
			this.position["y"] += windowHeight;
	} else if(this.position["y"] > windowHeight) {
			this.position["y"] -= windowHeight;
	}
}

function Asteroid(position) {
	this.position = position;
	this.radius = getRandomInt(5, 30);
	this.velocity = {
		x : getRandomInt(-3, 3),
		y : getRandomInt(-3, 3),
	}

}
Asteroid.inherits(MovingObject);

Asteroid.prototype.randomAsteroid = function() {
	var position = {
		x : getRandomInt(0, windowWidth),
		y : getRandomInt(0, windowHeight),
	}
	var newAsteroid = new Asteroid(position);
	return newAsteroid;
}


function Game(numAsteroids) {
	this.asteroids = [];
	this.ship = new Ship();

	for(var i = 0; i < numAsteroids; i++){
		this.asteroids.push(Asteroid.prototype.randomAsteroid());
	}
}

Game.prototype.draw = function (ctx) {
	ctx.clearRect(0, 0, windowWidth, windowHeight);
	for(var i = 0, len = this.asteroids.length; i < len; i++ ){
		this.asteroids[i].draw(ctx);
	};
	this.ship.draw(ctx);
}

Asteroid.prototype.draw = function (ctx) {

	ctx.fillStyle = "black";
  ctx.beginPath();

  ctx.arc(
    this.position["x"],
    this.position["y"],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
}

Game.prototype.update = function(ctx) {

	var that = this;
	var asters = this.asteroids
	for(var i = 0, len = asters.length; i < len; i++ ){
		asters[i].update(asters[i].velocity);

		if(asters[i].offScreen()) {
			asters[i].fixOffScreen();
		}
	};
	if(this.ship.offScreen()) {
		this.ship.fixOffScreen();
	}
	if(this.ship.isHit(asters)) {
		// this.gameOver(ctx);
		//clearInterval(game);
	}
	if(key.isPressed("up")) {
		this.ship.power(Math.sin(this.ship.angle), -1 * Math.cos(this.ship.angle));
	};

	if(key.isPressed("right")) {
		this.ship.angle += 0.3;
	};
	if(key.isPressed("left")) {
		this.ship.angle -= 0.3;
	};
	this.ship.update(this.ship.velocity);
}

// Game.prototype.gameOver = function(ctx) {
// 	ctx.fillStyle = "black";
// 	ctx.font = "italic 96px Arial";
// 	ctx.strokeStyle = "blue";
// 	ctx.stroke();
// 	ctx.fillText("GAME OVER", 20,150);
// }

Game.prototype.start = function (ctx) {

	var that = this;
	game = window.setInterval(function () {
		that.update(ctx);
		that.draw(ctx);
	}, 30);
}

function Ship() {
	this.position = { x: 400, y: 400 };
	this.angle = 0 * Math.PI;
	this.velocity = {
		x: 0,
		y: 0
	}
}
Ship.inherits(MovingObject);

Ship.prototype.draw = function(ctx) {
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

Ship.prototype.power = function(dx, dy) {
	this.velocity["x"] += dx;
	this.velocity["y"] += dy
}


Ship.prototype.isHit = function(asteroids) {
	 var shipCenterPos = {
			x: this.position["x"],
			y: this.position["y"] + 10
	}

	var shipX = shipCenterPos["x"];
	var shipY = shipCenterPos["y"];

	for(var i = 0, len = asteroids.length; i < len; i++) {
		var xDistance = (shipX - asteroids[i].position["x"]);
		var yDistance = (shipY - asteroids[i].position["y"]);
		var distance = Math.sqrt((xDistance * xDistance) + (yDistance * yDistance));
		var radii = 10 + asteroids[i].radius;

		if(distance < radii) {
			return true;
		}
	}
	return false;

}