console.log("menuScene imported") // just to be sure

Crafty.scene("menuScene", function() {
  Crafty.background("url(images/menuBackground.png)");

  Crafty.e("PlayButton").attr({x: 50, y: 10});
});