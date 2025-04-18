// Team: Michael Carrillo, Noah Billedo
class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
        this.rightArmX = this.bodyX + 80
        this.rightArmY = this.bodyY + 70

        this.leftArmX = this.bodyX - 80
        this.leftArmY = this.bodyY + 70

        this.eyeX = this.bodyX
        this.eyeY = this.bodyY - 15

        this.rightLegX = this.bodyX + 50
        this.rightLegY = this.bodyY + 100

        
        this.leftLegX = this.bodyX - 50
        this.leftLegY = this.bodyY + 100

        this.mouthX = this.bodyX
        this.mouthY = this.bodyY + 30

        this.rightHornX = this.bodyX + 40
        this.rightHornY = this.bodyY - 70

        this.leftHornX = this.bodyX - 40
        this.leftHornY = this.bodyY - 70

        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
        my.moveSpeed = 1;   // create values keyboard input event tracking and polling
        my.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        my.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.

        // create monster body part sprites
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_greenB.png")
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_greenB.png")
        my.sprite.leftLeg.flipX = true;


        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_greenB.png")
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_greenB.png")
        my.sprite.leftArm.flipX = true;
        
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_human_blue.png")

        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_happy.png")
        
        my.sprite.rightHorn = this.add.sprite(this.rightHornX, this.rightHornY, "monsterParts", "detail_dark_horn_small.png")
        my.sprite.leftHorn = this.add.sprite(this.leftHornX, this.leftHornY, "monsterParts", "detail_dark_horn_small.png")
        my.sprite.leftHorn.flipX = true;

        my.sprite.fang = this.add.sprite(this.mouthX, this.mouthY+10, "monsterParts", "mouthB.png")
        my.sprite.fang.visible = false;

        //event handling fang / smile
        sKey.on('down', (key) => {
            my.sprite.mouth.visible = true;
            my.sprite.fang.visible = false;
            });
            // Event input: regular smile
        fKey.on('down', (key) => {
                my.sprite.mouth.visible = false;
                my.sprite.fang.visible = true;
                });
    
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        // polling movement
        if(my.AKey.isDown){
            for (let part in my.sprite) {
                my.sprite[part].x -= my.moveSpeed;
            }
        }

        if(my.DKey.isDown){
            for (let part in my.sprite) {
                my.sprite[part].x += my.moveSpeed;
            }
        }
    }

}

