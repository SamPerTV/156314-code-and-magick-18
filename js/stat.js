'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 150;
var CLOUD_Y = 90;
var GAP = 90;
var FONT_GAP = 5;
var TEXT_WIDTH = 50;

var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var NAME_X = 160;
var NAME_Y = 270;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  
  return maxElement;
};

/* var renderBackgroundColor = function() {
    var fixColorPlayers = 
 if(playres == ['Вы']) {
     
 }
}
*/
window.renderStatistics = function(ctx, players, times) {

  renderCloud(ctx, 110,20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');
  ctx.fillStyle = '#000';
  
    var players = ['Вы', 'Иван', 'Юлия', 'Кекс'];
    var maxTime = getMaxElement(times);
    
    for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], NAME_X + GAP * i - FONT_GAP, NAME_Y ,);
    ctx.fillRect(CLOUD_X + GAP * i, CLOUD_Y, BAR_WIDTH, BAR_HEIGHT);
    
  }
};

//(BAR_HEIGHT * times[i]) / maxTime)
