class Blushing extends Phaser.Scene {
    constructor(){
        super("blushScene");
    }

    preload(){
        // load images/tile sprites
        this.load.spritesheet('dialog', './assets/dialogsheet.png', {frameWidth: 640, frameHeight: 480});
        
        
    
    }


    create(){
        let box = this.add.sprite(this.game.config.width/2, this.game.config.height/2, 'dialog');

        // place tile sprite
        this.anims.create({
            key: 'talk',
            frames: this.anims.generateFrameNames('dialog', {
                prefix: 'dialog',
                start: 1,
                end: 2,
                zeroPad: 2,
                //suffix: '.png'
            }),
            frameRate: 6,
            repeat: -1
        });

        box.anims.play('talk');

        let dialogConfig = {
            fontFamily: 'Courier',
            fontSize: '15px',
            color: '#5c0523',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 125
        }

        let choice = Phaser.Math.Between(0, 10);
        if (choice < 1 || choice == 0){
            this.add.text(200, 300, "EEEEEE!! SENPAI KISSED ME!!!!!! >w< ", dialogConfig);

        }else if (choice < 2 || choice == 1){
            this.add.text(200, 300, "WAAHHH??!! I GOT NOTICED?? ", dialogConfig);

        }else if (choice < 3 || choice == 2){
            this.add.text(200, 300, "Tch!!! It's not like I liked that!!!! （＞д＜）", dialogConfig);

        }else if (choice < 4 || choice == 3){
            this.add.text(200, 300, "UUUWWAAAA!!! YOU.. YOU LIKE ME??", dialogConfig);

        }else if (choice < 5 || choice == 4){
            this.add.text(200, 300, "SENPAI THINKS I'M KAWAII!!!!!!!!!", dialogConfig);

        }else if (choice < 6 || choice == 5){
            this.add.text(200, 300, "Why did you kiss me??!!! (´ω｀*) ", dialogConfig);

        }else if (choice < 7 || choice == 6){
            this.add.text(200, 300, "SENPAI IS OVERWHELMING ME!!!!! (*´∀`*) ", dialogConfig);

        }else if (choice < 8 || choice == 7){
            this.add.text(200, 300, "I didn't want a kiss from you!! ( ˶•̀ _•́ ˶)", dialogConfig);

        }else if (choice < 9 || choice == 8){
            this.add.text(200, 300, "B-Baka...!", dialogConfig);

        }else if (choice < 10 || choice == 9){
            this.add.text(200, 300, "SENPAI!!!! UWWWAAAAA!!!!!!!", dialogConfig);

        }else if (choice == 10){
            this.add.text(200, 300, "( ͡° ͜ʖ ͡°)", dialogConfig);

        }

        this.input.on('pointerdown', () => {
            this.scene.resume('playScene');
            this.scene.stop();
        });

    }
}
        
        