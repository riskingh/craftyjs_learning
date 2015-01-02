console.log("PlayButton imported"); // just to be sure

Crafty.c("PlayButton", {
  init: function() {
    this.requires("2D");
    this.requires("Canvas");
    this.requires("playButton1");
    this.requires("Mouse");
    this.requires("SpriteAnimation");

    this.bind("Click", function(MouseEvent) {
      alert("click");
    });

    this.reel("changeColor", 0, 0, 0, 2); // white, cyan
    this.animate("changeColor", -1);
    this.pauseAnimation();

    this.bind("MouseOver", function(MouseEvent) {
      this.reelPosition(1); // set cyan
    });

    this.bind("MouseOut", function(MouseEvent) {
      this.reelPosition(0); // set white
    });
  }
});