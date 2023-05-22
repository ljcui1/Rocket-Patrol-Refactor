class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }

    preload(){
        // load images/tile sprites
        this.load.image('rocket', './assets/lips.png');
        /*this.load.spritesheet('spaceship', './assets/spaceshipsheet.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 1});*/
        this.load.image('flowerfield', './assets/flowerfield.png');
        this.load.image('stars', './assets/stars.png');
        this.load.image('planets', './assets/planets.png');
        // load spritesheet
        /*this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});*/
        this.load.atlas('ship', './assets/spritesheet.png', './assets/sprites.json');
    
    }


    create(){
        // place tile sprite
        this.planets = this.add.tileSprite(0, 0, 640, 480, 'planets').setOrigin(0, 0);
        
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'flowerfield').setOrigin(0, 0);

        this.stars = this.add.tileSprite(0, 0, 640, 480, 'stars').setOrigin(0, 0);

        

        // add spaceships (x3)
        this.ship01 = new Spaceship(this, game.config.width + borderUISize * 6, borderUISize*4, 'ship', 'ship01', 30).setOrigin(0, 0);
        this.ship02 = new Spaceship(this, game.config.width + borderUISize * 3, borderUISize*5 + borderPadding * 2, 'ship', 'ship01', 20).setOrigin(0, 0);
        this.ship03 = new Spaceship(this, game.config.width, borderUISize * 6 + borderPadding * 4, 'ship', 'ship01', 10).setOrigin(0, 0);

        //add animation to sprite
        this.anims.create({
            key: 'blush',
            frames: this.anims.generateFrameNames('ship', {
                prefix: 'ship',
                start: 1,
                end: 2,
                zeroPad: 2,
                /*suffix: '.png'*/
            }),
            frameRate: 5.5,
            repeat: -1
        });

        this.ship01.play('blush');
        this.ship02.play('blush');
        this.ship03.play('blush');


        // green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0xeb958f).setOrigin(0, 0);
        // white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);

        // add rocket (p1)
        this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0);

         // Enable input events for the whole scene
         this.input.on('pointerdown', () => {
            this.p1Rocket.fire();
            // Add code here to run when the scene is clicked
        });

    

        

        // define keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        //mouseDown = this.input.mouse.add()


        

        // animation config

        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNames('ship', {
                prefix: 'explosion',
                start: 1,
                end: 11,
                zeroPad: 2,
                /*suffix: '.png'*/
            }),
            frameRate: 30
        });

    

        // initialize score
        this.p1Score = 0;

        // display score
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#ffd2cf',
            color: '#a83232',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding * 2, this.p1Score, scoreConfig);

        // GAME OVER flag
        this.gameOver = false;

        // 60-second play clock
        scoreConfig.fixedWidth = 0;
        this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
            this.add.text (game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or ← for Menu', scoreConfig).setOrigin(0.5);
            this.gameOver = true;
        }, null, this);

        this.time.addEvent({
            delay: 1000, // Update the text every second
            callback: () => {
              let remainingTime = Math.ceil(this.clock.getRemainingSeconds());
              this.clockRight = this.add.text(game.config.width - 143, borderUISize + borderPadding * 2, "Time Left: \n" + remainingTime + " ", clockConfig);
              this.add.text(game.config.width - 350, borderUISize + borderPadding * 2, "Time Elapsed: \n" + Math.ceil(this.clock.elapsed /1000) + " ", elapseConfig);
            },
            loop: true, // Keep the timer event looping indefinitely
          });

        // display clock
        let clockConfig = {
            fontFamily: 'Courier',
            fontSize: '15px',
            backgroundColor: '#ffd2cf',
            color: '#a83232',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }

        let elapseConfig = {
            fontFamily: 'Courier',
            fontSize: '15px',
            backgroundColor: '#ffd2cf',
            color: '#a83232',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 125
        }

        
        

    

    }

    update(){
        
        // check key input for restart
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)){
            this.scene.restart();
        }
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)){
            this.scene.start("menuScene");
        }

        
    
        this.planets.tilePositionX -= 0.5;
        this.stars.tilePositionX += 4;
        this.starfield.tilePositionX -= 2.75;

        if(!this.gameOver){
            this.p1Rocket.update();         // update rocket sprite
            this.ship01.update();           // update spaceships (x3)
            this.ship02.update();
            this.ship03.update();
        }

        
        // check collisions
        if(this.checkCollision(this.p1Rocket, this.ship03)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship03);
        }
        if (this.checkCollision(this.p1Rocket, this.ship02)){
            this.p1Rocket.reset();
            this.shipExplode(this.ship02);
        }
        if (this.checkCollision(this.p1Rocket, this.ship01)){
            this.p1Rocket.reset();
            this.shipExplode(this.ship01);
        }

        

    }
/*
    doSumthin () {
        console.log("hi");
    }
*/
    checkCollision (rocket,ship){
        // simple AABB checking
        if (rocket.x < ship.x + ship.width && rocket.x + rocket.width > ship.x && rocket.y < ship.y + ship.height && rocket.height + rocket.y > ship.y){
            const addedTime = 1000; // Add 5 seconds to the clock
            this.clock.elapsed -= addedTime;
            this.clock.remainingTime += addedTime;// Add the time to the clock
            let addTimeConfig = {
                fontFamily: 'Courier',
                fontSize: '20px',
                color: '#000000',
                align: 'right',
                padding: {
                    top: 5,
                    bottom: 5,
                },
                fixedWidth: 100
            }
            const addTime = this.add.text(game.config.width - 250, borderUISize + borderPadding * 2, "+1 sec", addTimeConfig);
            addTime.setVisible(true);
            this.time.delayedCall(1250,
                () => {
                    addTime.setVisible(false);
                });
            this.blushingShips();    
            return true;
        } else {
            return false;
        }
    }

    shipExplode(ship){
        // temporarily hide ship
        ship.alpha = 0;
        // create explosion sprite at ship's position
        let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
        boom.anims.play('explode');         // play explode animation
        boom.on('animationcomplete', () => { // callback after anim completes
            ship.reset();                   // reset ship position
            ship.alpha = 1;                 // make ship visible again
            boom.destroy();                 // remove explosion sprite
        });
        // score add and repaint
        this.p1Score += ship.points;
        this.scoreLeft.text = this.p1Score;

        this.sound.play('sfx_explosion');

    }

    blushingShips(){
        this.scene.pause();
        this.scene.launch('blushScene');
    }

    



}