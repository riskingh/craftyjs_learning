console.log("Player impoted"); // just to be sure

Crafty.c("Player", {
  init: function() {
    this.requires("2D");
    this.requires("Canvas");
    this.requires("playerR");

    this.requires("Twoway");
    this.twoway(1);

    this.requires("Gravity");
    this.gravity("Floor");
  }
});