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
        this.load.image('bgroundA', '../assets/backgroundA.png');
        //this.load.image('bgroundB', '../assets/ground.png');
        this.load.image('ground', '../assets/ground.png');
        this.load.image('big', '../assets/big.png');
        this.load.image('boom', '../assets/boom.png');
        this.load.image('block', '../assets/barrier.png');
        this.load.image('building', '../assets/house.png');
        this.load.spritesheet('bomb',
            '../assets/nuke (1).png',
            { frameWidth: 15, frameHeight: 15 })
        this.load.spritesheet('tree',
            '../assets/tree (1).png',
            { frameWidth: 128, frameHeight: 104} )
      },
      
      create: function() {
        this.scale.startFullscreen();
        this.add.image(0, 0, 'bgroundA').setOrigin(0, 0)
        grounds = this.physics.add.staticGroup();
        words = this.physics.add.group();
        grounds.create(1600, 1050, 'ground').setScale(.2).refreshBody();
        grounds.create(400, 1050, 'ground').setScale(.2).refreshBody();
        this.add.sprite(0, 340, 'building').setOrigin(0, 0).setScale(3)
        this.add.sprite(1500, 610, 'tree').setOrigin(0, 0).setScale(5)
        bigs = words.create(1050, -150, 'big').setScale(1)
        bigs.body.setAllowGravity(false)
        booms = words.create(1050, -150, 'boom').setScale(1)
        booms.body.setAllowGravity(false)
        this.add.sprite(1050, 700, 'block').setScale(1)

        
      },
      update: function() {
        
      }
}}());