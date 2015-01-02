console.log("gameScene imported"); // just to be sure

Crafty.scene("gameScene", function() {
  Crafty.background("#FFF");

  level01.floor.forEach(function(_elem, _index, _array) {
    Crafty.e("Floor").attr({x: _elem[0] * gameSettings.polygon, y: _elem[1] * gameSettings.polygon});
  });

  Crafty.e("Player").attr({x: level01.playerStartPosition[0] * gameSettings.polygon, y: level01.playerStartPosition[1] * gameSettings.polygon});
});