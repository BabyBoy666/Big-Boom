var Game = new Phaser.Class(function(){
    var next = false
    return {
      Extends: Phaser.Scene,
      initialize: function() {
          Phaser.Scene.call(this, { "key": "Game" });
      },
      init: function() {

      },
      preload: function() {
        this.load.image('background', '../assets/background2.png')
        this.load.spritesheet('green', '../assets/buttonG.png',
            { frameWidth: 33, frameHeight: 33 });
        this.load.spritesheet('red', '../assets/buttonR.png',
            { frameWidth: 33, frameHeight: 33 });
        this.load.spritesheet('blue', '../assets/buttonB.png',
            { frameWidth: 33, frameHeight: 33 });
      },    
      create: function() {
        this.add.image(0, 0, 'background').setOrigin(0, 0)
        gbt = this.add.sprite(600, 1010, 'green').setScale(5)
        rbt = this.add.sprite(1050, 1010, 'red').setScale(5)
        bbt = this.add.sprite(1500, 1010, 'blue').setScale(5)
        gbt.setInteractive();
        rbt.setInteractive();
        bbt.setInteractive();
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
        
      }
}}());