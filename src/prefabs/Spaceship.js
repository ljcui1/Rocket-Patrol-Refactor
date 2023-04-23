// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);  // add to existing scene
        this.points = pointValue;  // store pointValue       // pixels per frame
        // random x position
        let direction = Phaser.Math.Between(0,1);
        if (direction === 0){
            this.moveSpeed = game.settings.spaceshipSpeed;
            this.x = game.config.width + this.width; 
            
        }else{
            this.moveSpeed = -game.settings.spaceshipSpeed;
            this.x = -this.width;
            this.flipX = true;
        }

        

    }

    update(){
        // move spaceship left
        this.x -= this.moveSpeed;
        // wrap around between edges
        if (this.moveSpeed > 0 && this.x >= game.config.width + this.width) {
            this.reset();
        } else if (this.moveSpeed < 0 && this.x <= -this.width) {
            this.reset();
        }

        // Increase speed after 30 seconds
        if (this.moveSpeed > 0){
            this.scene.time.delayedCall(30000, () => {
                this.moveSpeed += 1;
            });
        } else if (this.moveSpeed < 0){
            this.scene.time.delayedCall(30000, () => {
                this.moveSpeed -= 1;
            });
        }
        
    }

    reset(){
        let direction = Phaser.Math.Between(0, 1); // 0 = left to right, 1 = right to left
        if (direction === 0) {
            this.moveSpeed = game.settings.spaceshipSpeed;
            this.x = -this.width;
            
        } else {
            this.moveSpeed = -game.settings.spaceshipSpeed;
            this.x = game.config.width + this.width;
            this.flipX = true;
        }
    }

    
}