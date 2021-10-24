var Game = new Phaser.Class(function(){
    var run = false 
    var next = false
    var norm = true
    return {
      Extends: Phaser.Scene,
      initialize: function() {
          Phaser.Scene.call(this, { "key": "Game" });
      },
      init: function() {

      },
      preload: function() {
        this.load.image('test', '../assets/test.png')
        this.load.image('background', '../assets/background2.png')
        this.load.spritesheet('green', '../assets/buttonG.png',
            { frameWidth: 33, frameHeight: 33 });
        this.load.spritesheet('red', '../assets/buttonR.png',
            { frameWidth: 33, frameHeight: 33 });
        this.load.spritesheet('blue', '../assets/buttonB.png',
            { frameWidth: 33, frameHeight: 33 });
        this.load.spritesheet('screen', '../assets/screen.png',
            { frameWidth: 248, frameHeight: 192 });
      },    
      create: function() {
        this.add.image(0, 0, 'background').setOrigin(0, 0)
        tv = this.add.image(235,660,'screen')
        gbt = this.add.sprite(600, 1010, 'green').setScale(5)
        rbt = this.add.sprite(1050, 1010, 'red').setScale(5)
        bbt = this.add.sprite(1500, 1010, 'blue').setScale(5)
        gbt.setInteractive();
        rbt.setInteractive();
        bbt.setInteractive();
        this.anims.create({
          key: 's-norm',
          frames: [{ key: 'screen', frame: 0 }],
          frameRate: 20
        });
        this.anims.create({
            key: 's-boot',
            frames: this.anims.generateFrameNumbers('screen', { start: 1, end: 9 }),
            frameRate: 10,
        });
        this.anims.create({
            key: 's-loop',
            frames: this.anims.generateFrameNumbers('screen', { start: 10, end: 12 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 's-boom',
            frames: this.anims.generateFrameNumbers('screen', { start: 13, end: 35 }),
            frameRate: 10,
        });
        this.anims.create({
            key: 's-conf',
            frames: this.anims.generateFrameNumbers('screen', { start: 37, end: 43 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
          key: 'gbt_norm',
          frames: [{ key: 'green', frame: 0 }],
          frameRate: 20
        });
        this.anims.create({
          key: 'rbt_norm',
          frames: [{ key: 'red', frame: 0 }],
          frameRate: 20
        });
        this.anims.create({
          key: 'bbt_norm',
          frames: [{ key: 'blue', frame: 0 }],
          frameRate: 20
        });
        this.anims.create({
          key: 'gbt_play',
          frames: [{ key: 'green', frame: 1 }],
          frameRate: 20
        });
        this.anims.create({
          key: 'rbt_play',
          frames: [{ key: 'red', frame: 1 }],
          frameRate: 20
        });
        this.anims.create({
          key: 'bbt_play',
          frames: [{ key: 'blue', frame: 1 }],
          frameRate: 20
        });
        gbt.anims.play('gbt_norm')
        rbt.anims.play('rbt_norm')
        bbt.anims.play('bbt_norm')
        
        gbt.on('pointerup', () => {
          gbt.anims.play('gbt_norm')
        })
        gbt.on('pointerdown', () => {
          gbt.anims.play('gbt_play')
        });
        rbt.on('pointerup', () => {
          rbt.anims.play('rbt_norm')
        })
        rbt.on('pointerdown', () => {
          rbt.anims.play('rbt_play')
        });
        bbt.on('pointerup', () => {
          bbt.anims.play('bbt_norm')
        })
        bbt.on('pointerdown', () => {
          bbt.anims.play('bbt_play')
        });
      },
      update: function() {
        function launch(){
          console.log("hi")
        }
        if (norm = true && run = false){
          run = true
          this.time.addEvent({
            delay: Math.floor(Math.random() * (17000 - 5000 + 1) ) + 5000,
            loop: false,
            callback: () => {
              launch()
              run = false
            }
          });
        }
      }
}}());