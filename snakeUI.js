var Snake = (function(lib){
		var UI = lib.UI = function() {
			this.game = new Snake.Game();
			this.blankBoard();
			this.start();
		}

		UI.prototype.blankBoard = function () {
			for(var i = 0; i < 29; i++){
				for (var j = 0; j < 29; j++){
					var $div = $('<div></div>').addClass("row" + i)
																		 .addClass("col" + j)
																		 .addClass("square")
 					$('#container').append($div);
 				}
 			}
		}

		UI.prototype.clearBoard = function () {
			$('div').removeClass("snake food");
		}

		UI.prototype.draw = function () {
			var snake = this.game.snakeBody;
			var food = this.game.foodLoc
			for(var i = 0; i < snake.length; i++ ){
					$('.row' + snake[i][0] + '.col' + snake[i][1] ).addClass('snake');
					$('.row' + food[0] + '.col' + food[1] ).addClass('food');
			};
		}

		UI.prototype.listen = function () {
			var that = this;
			key('down', function() { that.game.move(2) });
			key('up', function() { that.game.move(0) });
			key('right', function() { that.game.move(1) });
			key('left', function() { that.game.move(3) });
		}

		UI.prototype.start = function () {
			this.clearBoard();
			this.draw();
			this.listen();
			var that = this
			var intervalID = window.setInterval(function () {
				that.clearBoard();
				that.draw();
				that.game.step();
				if(that.game.lose()){window.clearInterval(intervalID)};
			}, 150)
		}

	return lib;
})( Snake || {} );

$(function(){
	var a = new Snake.UI()
});