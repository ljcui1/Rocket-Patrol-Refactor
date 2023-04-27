class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    preload(){
        // load audio
        this.load.image('background', './assets/menu.png');
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        

    }

    create(){
        
        this.background = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0, 0);

        // menu text config
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '27px',
            backgroundColor: '#eb958f',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // menu text config
        let textConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            backgroundColor: '#eb958f',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET BOYFRIEND', menuConfig).setOrigin(0.5, 1);
        this.add.text(game.config.width/2, game.config.height/2, 'Use (A) to move left and \nuse (D) to move right before firing \nLeft Mouse Click to fire\nUse Mouse Cursor to control Lips', textConfig).setOrigin(0.5);
        textConfig.backgroundColor = '#ffd2cf';
        textConfig.color = '#a83232';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', textConfig).setOrigin(0.5, 0);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);


    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
            
        }
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
            
        }
    }


}