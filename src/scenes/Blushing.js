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
            frames: this.anims.generateFrameNumbers('dialog', {
                start: 0,
                end: 1,
                //suffix: '.png'
            }),
            frameRate: 5,
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
            fixedWidth: 300
        }

        
        let choice = Phaser.Math.Between(0, 10);
        if (choice < 1 || choice == 0){
            this.add.text(150, 275, "EEEEEE!! SENPAI KISSED ME!!!!!! \n>w< ", dialogConfig);

        }else if (choice < 2 || choice == 1){
            this.add.text(150, 275, "WAAHHH??!! I GOT NOTICED?? ", dialogConfig);

        }else if (choice < 3 || choice == 2){
            this.add.text(150, 275, "Tch!!! It's not like I liked \nthat!!!! （＞д＜）", dialogConfig);

        }else if (choice < 4 || choice == 3){
            this.add.text(150, 275, "UUUWWAAAA!!! YOU.. YOU LIKE ME??", dialogConfig);

        }else if (choice < 5 || choice == 4){
            this.add.text(150, 275, "SENPAI THINKS I'M KAWAII!!!!!!!!!", dialogConfig);

        }else if (choice < 6 || choice == 5){
            this.add.text(150, 275, "Why did you kiss me??!!! \n(´ω｀*) ", dialogConfig);

        }else if (choice < 7 || choice == 6){
            this.add.text(150, 275, "SENPAI IS OVERWHELMING ME!!!!! \n(*´∀`*) ", dialogConfig);

        }else if (choice < 8 || choice == 7){
            this.add.text(150, 275, "I didn't want a kiss from you!! \n( ˶•̀ _•́ ˶)", dialogConfig);

        }else if (choice < 9 || choice == 8){
            this.add.text(150, 275, "B-Baka...!", dialogConfig);

        }else if (choice < 10 || choice == 9){
            this.add.text(150, 275, "SENPAI!!!! UWWWAAAAA!!!!!!!", dialogConfig);

        }else if (choice == 10){
            this.add.text(150, 275, "( ͡° ͜ʖ ͡°)", dialogConfig);

        }

        this.input.on('pointerdown', () => {
            this.scene.resume('playScene');
            this.scene.stop();
        });

    }
}
        
        