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
    $('#container').html($('#jqueryTemplate').html());
    $('#container').removeClass('invisible');
    $.getScript('snakeUI.js');
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

  $('#links').on("click", function(event){
    event.preventDefault();
    $.getScript('showShip.js');
    $('#container').removeClass('invisible').html($('#linksTemplate').html());
  });
});