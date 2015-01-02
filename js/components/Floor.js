console.log("Floor imported"); // just to be sure

Crafty.c("Floor", {
  init: function() {
    this.requires("2D");
    this.requires("Canvas");
    this.requires("floor" + randRange(1, 3).toString());

    this.attr({x: 0, y: 0, z: 1});
  }
});