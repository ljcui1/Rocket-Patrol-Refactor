// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);  // add to existing scene
        this.points = pointValue;  // store pointValue       // pixels per frame
        // random x position
        this.direction = {};
        this.reset();
        

        

    }

    update(){
        if (this.direction == 0){
            this.x += this.moveSpeed;
        }else if (this.direction != 0) {
            this.x += this.moveSpeed;
        }

        // wrap around between edges
        if (this.direction == 0 && this.x > game.config.width + this.width) {
            console.log("left to right");
            this.reset();
        } else if (this.direction != 0 && this.x < -this.width) {
            console.log('right to left');
            this.reset();
        }
/*
        // Increase speed after 30 seconds
        if (this.moveSpeed > 0){
            this.scene.time.delayedCall(30000, () => {
                this.x -= 2;
            });
        } else if (this.moveSpeed < 0){
            this.scene.time.delayedCall(30000, () => {
                this.x += 2;
            });
        }
        */
    }

    reset(){
        this.direction = Phaser.Math.Between(0, 1); // 0 = left to right, 1 = right to left
        console.log(this.direction);
        if (this.direction === 0) {
            this.setPosition(0, this.y)
            this.moveSpeed = game.settings.spaceshipSpeed /*+ Phaser.Math.Between (3, 6)*/;
            //this.x = -this.width;
            this.flipX = true;
            
        } else {
            this.setPosition(game.config.width + this.width, this.y)
            this.moveSpeed = -game.settings.spaceshipSpeed /*- Phaser.Math.Between (3, 6)*/;
            //this.x = game.config.width + this.width;
            this.flipX = false;
            
            
            
        }
    }

    
}