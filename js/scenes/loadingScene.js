console.log("loadingScene imported"); // just to be sure

Crafty.scene("loadingScene", function() {
  Crafty.load({"images": ["images/textures.png", "images/playButton.png"]},
    function() {        // onLoad
      setTimeout(function() {
        Crafty.scene("menuScene");
      }, 200);
    },

    function() {},      // onProgress

    function(_error) {  // onError
      alert("loadingScene load error");
      console.log(_error)
    }
  );

  Crafty.background("#000");
  
  Crafty.e("2D, Canvas, Text, Mouse").attr({x: (gameSettings.width - 100) / 2, y: (gameSettings.height - 25) / 2, w: 100, h: 25}).text("Loading...").textColor("white").textFont({size: "18px"}).bind("Click", function() { console.log("ooo"); });
});