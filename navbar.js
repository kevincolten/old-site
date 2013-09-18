$(function(){
  $('#logo').on("click", function(){
    $.getScript('showShip.js');
    $('#container').addClass('invisible')
  });

  $('#aboutme').on("click", function(event){
    event.preventDefault();
    $.getScript('showShip.js');
    $('#container').removeClass('invisible').html($('#aboutmeTemplate').html());
  });

  $('#canvas').on("click", function(event){
    event.preventDefault();
    $.getScript('showShip.js');
    $('#container').removeClass('invisible').html($('#canvasTemplate').html());
  });

  $('#jquery').on("click", function(event){
    event.preventDefault();
    $.getScript('hideShip.js');
    $('#container').removeClass('invisible');
    $.getScript('snakeUI.js', function(){
      console.log("snakeUI")
    });
    $.getScript('snake.js', function(){
      console.log("snake")
    });
  });

  $('#rails').on("click", function(event){
    event.preventDefault();
    $.getScript('showShip.js');
    $('#container').removeClass('invisible').html($('#railsTemplate').html());
  });

  $('#backbone').on("click", function(event){
    event.preventDefault();
    $.getScript('showShip.js');
    $('#container').removeClass('invisible').html($('#backboneTemplate').html());
  });
});