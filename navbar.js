$(function(){
  $('#logo').on("click", function(){
    $('#container').addClass('invisible')
  });

  $('#aboutme').on("click", function(event){
    event.preventDefault();
    $('#container').removeClass('invisible').html($('#aboutmeTemplate').html());
  });

  $('#canvas').on("click", function(event){
    event.preventDefault();
    $('#container').removeClass('invisible').html($('#canvasTemplate').html());
  });

  $('#jquery').on("click", function(event){
    event.preventDefault();
    $.getScript('snakeUI.js', function(){
      console.log("snakeUI")
    });
    $.getScript('snake.js', function(){
      console.log("snakeUI")
    });
    // $('#container').removeClass('invisible').html($('#jqueryTemplate').html());
  });

  $('#rails').on("click", function(event){
    event.preventDefault();
    $('#container').removeClass('invisible').html($('#railsTemplate').html());
  });

  $('#backbone').on("click", function(event){
    event.preventDefault();
    $('#container').removeClass('invisible').html($('#backboneTemplate').html());
  });
});