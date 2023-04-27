// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, input) {
        super(scene, x, y, texture, frame);

        // add object to existing scene
        scene.add.existing(this);       // add to existing, displayList, updateList
        this.isFiring = false;          // track rocket's firing status
        this.moveSpeed = 2;             // pixels per frame

        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
/*
        // enable input events
        this.setInteractive();

        // define input as a property of the Rocket object
        this.input = scene.input;

        // register event handler for pointerdown event
        this.input.on('pointerdown', () => {
            this.fire();
        });*/
        

    }

    update() {
        // left/right movement
        if(!this.isFiring){
            if(keyA.isDown && this.x >= borderUISize + this.width){
                this.x -= this.moveSpeed;

            } else if (keyD.isDown && this.x <= game.config.width - borderUISize - this.width){
                this.x += this.moveSpeed;

            }
            /*
            this.input.on('pointerdown', () => {
                this.fire();
                this.follow();
            });*/
        }

        

        // listen for pointer down event
        /*this.on('pointerdown', () => {
            if (!this.isFiring) {
                this.isFiring = true;
                this.sfxRocket.play(); // play sfx
            }
        });*/

        // fire button
        /*if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring){
            this.isFiring = true;
            this.sfxRocket.play(); // play sfx
        }*/


        
        /*
        // if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }
        */


        if(this.isFiring){
            //this.setPosition(game.input.mousePointer.x, game.input.mousePointer.y);
            // Get mouse position
            let mouseX = this.scene.input.mousePointer.worldX;
            let mouseY = this.scene.input.mousePointer.worldY;

            // Calculate angle between rocket and mouse pointer
            let angle = Phaser.Math.Angle.Between(this.x, this.y, mouseX, mouseY);

            // Set rocket rotation angle
            this.rotation = angle;

            // Move rocket towards mouse pointer
            // Calculate velocity towards mouse position
            let dx = mouseX - this.x;
            let dy = mouseY - this.y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            let velX = (dx / dist) * this.moveSpeed;
            let velY = (dy / dist) * this.moveSpeed;

            // Move rocket towards mouse pointer
            this.x += velX;
            this.y += velY;
        }
        

        

        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding){
            this.reset();
        }
    }

    reset(){
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }

    fire(){
        if (!this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play(); // play sfx
        }
    }

    
        
    
}

