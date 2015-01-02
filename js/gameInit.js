console.log("gameInit imported"); // just to be sure

var gameSettings = {
  width: 640,   //
  height: 480,  //
  polygon: 32,  // size of polygon
};
gameSettings.pWidth = gameSettings.width / gameSettings.polygon;    // width in polygons
gameSettings.pHeight = gameSettings.height / gameSettings.polygon;  // height in polygons


$(document).ready(function() {
  Crafty.init(gameSettings.width, gameSettings.height, $("#game").get(0)); // there is <div> with id "game" in "index.html"
  Crafty.pixelart(true);

  Crafty.sprite(gameSettings.polygon, "images/textures.png", {
    floor1: [0, 0],
    floor2: [1, 0],
    floor3: [2, 0],

    playerR: [1, 0],
  });

  Crafty.sprite(192, 224, "images/playButton.png", {
    playButton1: [0, 0],
    playButton2: [1, 0],
  });
  Crafty.scene("loadingScene");
});