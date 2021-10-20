var TitleScene = new Phaser.Class(function(){
    var xplode = false
    return {
      Extends: Phaser.Scene,
      initialize: function() {
          Phaser.Scene.call(this, { "key": "TitleScene" });
      },
      init: function() {

      },
      preload: function() {
        this.load.image('bgroundA', '../assets/backgroundA.png');
        this.load.image('bgroundB', '../assets/backgroundB.png');
        this.load.image('ground', '../assets/ground-1.png');
        this.load.image('big', '../assets/big.png');
        this.load.image('boom', '../assets/boom.png');
        this.load.image('block', '../assets/barrier.png');
        this.load.image('building', '../assets/house.png');
        this.load.spritesheet('bomb',
            '../assets/nuke (1).png',
            { frameWidth: 800, frameHeight: 1200 })
        this.load.spritesheet('tree',
            '../assets/tree (1).png',
            { frameWidth: 128, frameHeight: 104} )
      },
      
      create: function() {
        this.scale.startFullscreen();
        this.add.image(0, 0, 'bgroundB').setOrigin(0, 0)
        bground = this.add.image(0, 0, 'bgroundA').setOrigin(0, 0)
        grounds = this.physics.add.staticGroup();
        grounds2 = this.physics.add.staticGroup();
        words = this.physics.add.group();
        grounds.create(1600, 1075, 'ground').setScale(.2).refreshBody();
        grounds.create(400, 1075, 'ground').setScale(.2).refreshBody();
        this.add.sprite(0, 340, 'building').setOrigin(0, 0).setScale(3)
        trees = this.add.sprite(1500, 610, 'tree').setOrigin(0, 0).setScale(5)
        blocks = grounds2.create(1050, 700, 'block');
        blocks2 = grounds2.create(1050, 440, 'block');
        bombs = this.physics.add.sprite(1050, -650, 'bomb')
        bombs.body.setAllowGravity(false)
        bigs = this.physics.add.sprite(1050, -150, 'big')
        bigs.setBounce(0.3);
        bigs.body.setAllowGravity(false)
        booms = this.physics.add.sprite(1050, -150, 'boom')
        booms.body.setAllowGravity(false)
        this.physics.add.collider(bigs, blocks2, null, null, this)
        this.physics.add.collider(booms, blocks)

        this.anims.create({
            key: 'tree_norm',
            frames: this.anims.generateFrameNumbers('tree', { start: 0, end: 3 }),
            frameRate: 1,
            repeat: -1
        });
        this.anims.create({
            key: 'nuke_norm',
            frames: [ { key: 'bomb', frame: 0 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'nuke_explode',
            frames: this.anims.generateFrameNumbers('bomb', { start: 1, end: 18 }),
            frameRate: 15
        });
        this.anims.create({
            key: 'explosion',
            frames: this.anims.generateFrameNumbers('bomb', { start: 19, end: 20 }),
            frameRate: 1,
            repeat: -1
        });
        trees.anims.play("tree_norm", true)
        bombs.anims.play("nuke_norm", true)
        this.physics.add.collider(bombs, grounds, nuke_boom, null, this)
        function nuke_boom(bomb){
          if(xplode == false){
            bombs.anims.play("nuke_explode", true)
            xplode = true
          } 
        }
        this.time.addEvent({
          delay: 10000,
          loop: false,
          callback: () => {
            booms.body.setAllowGravity(true)
            this.time.addEvent({
              delay: 2000,
              loop: false,
              callback: () => {
                bigs.body.setAllowGravity(true)
                this.time.addEvent({
                  delay: 1000,
                  loop: false,
                  callback: () => {
                    bombs.body.setAllowGravity(true)
                    this.time.addEvent({
                      delay: 3500,
                      loop: false,
                      callback: () => {
                        var camera = this.cameras.main;
                        camera.flash(7000);
                        camera.shake(750, 0.05)
                        this.time.addEvent({
                          delay: 200,
                          loop: false,
                          callback: () => {
                            bombs.anims.play("explosion", true)
                            bground.destroy()
                          }
                        }, this);
                      }
                    }, this);
                  }
                }, this);
              }
            }, this);
          }
        }, this);
      },
      update: function() {
        
      }
}}());