var TitleScene = new Phaser.Class(function(){
    //var ***
    return {
      Extends: Phaser.Scene,
      initialize: function() {
          Phaser.Scene.call(this, { "key": "TitleScene" });
      },
      init: function() {

      },
      preload: function() {
        
      },
      
      create: function() {
        this.scale.startFullscreen();
      },
      update: function() {
        
      }
}}());