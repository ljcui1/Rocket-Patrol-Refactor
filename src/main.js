/*
Lia Cui
Rocket Boyfriend
Approximate Time: 11.5 Hours
Mods:
- Randomize each spaceship's movement direction at the start of each play (5)
- Create a new scrolling tile sprite for the background (5)
- Allow the player to control the Rocket after it's fired (5)
- Display the time remaining (in seconds) on the screen (10)
- Using a texture atlas, create a new animated sprite for the Spaceship enemies (10)
- Create a new title screen (e.g., new artwork, typography, layout) (10)
- Implement parallax scrolling for the background (10)
- Implement a new timing/scoring mechanism that adds time to the clock for successful hits (15)
- Implement mouse control for player movement and mouse click to fire (15)
- Implement Dialog Cutscenes upon Spaceship collision (15)

*/

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play, Blushing ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, keyA, keyD;


