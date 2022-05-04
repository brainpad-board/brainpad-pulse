namespace controller {
    interface ControlledSprite {
        s: Sprite;
        vx: number;
        vy: number;
    }

    let controlledSprites: ControlledSprite[];
	
	let right : Button
	let left : Button
	let up : Button
	let down : Button
	let init_up_down_left_right = false
		
	export function ButtonUp_IsPressed() : boolean {
		if (!up)
			return false
		
		return up.isPressed();
	}
	
	export function ButtonDown_IsPressed() : boolean {
		if (!down)
			return false
		
		return down.isPressed();
	}
	
	export function ButtonLeft_IsPressed() : boolean {
		if (!left)
			return false
		
		return left.isPressed();
	}
	
	export function ButtonRight_IsPressed() : boolean {
		if (!right)
			return false
		
		return right.isPressed();
	}
	
	export function EnsureInitGamerButtons() {
		if (init_up_down_left_right) {
			return;
		}		
		
		right = new Button(BUTTON_RIGHT_ID, input.buttonRight.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);	
		left = new Button(BUTTON_LEFT_ID, input.buttonLeft.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);		
		up = new Button(BUTTON_UP_ID, input.buttonUp.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);	
		down = new Button(BUTTON_DOWN_ID, input.buttonDown.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
				
		init_up_down_left_right = true;
	}


    /**
     * Control a sprite using the direction buttons from the controller. Note that this
     * control will take over the vx and vy of the sprite and overwrite any changes
     * made unless a 0 is passed.
     *
     * @param sprite The Sprite to control
     * @param vx The velocity used for horizontal movement when left/right is pressed
     * @param vy The velocity used for vertical movement when up/down is pressed
     */
	//% blockId="game_control_sprite" block="control sprite $sprite=variables_get(mySprite) with vx $vx vy $vy"
    //% weight=100
    //% vx.defl=100 vy.defl=100
    //% help=controller/control-sprite
	//% blockHidden=true
    export function controlSprite(sprite: Sprite, vx: number, vy: number) {
        if (!sprite) return;
        if (!controlledSprites) {
            controlledSprites = [];
            game.currentScene().eventContext.registerFrameHandler(19, () => {
                controlledSprites.forEach(controlled => {
                    if (controlled.vx) {
                        controlled.s.vx = 0;

                        if ((this.right && this.right.isPressed()) || controller.B.isPressed()) {
                            controlled.s.vx = controlled.vx;
                        }
                        if ((this.left && this.left.isPressed()) || controller.A.isPressed()) {
                            controlled.s.vx = -controlled.vx;
                        }
                    }

                    if (controlled.vy) {
                        controlled.s.vy = 0;

                        if (this.down && this.down.isPressed()) {
                            controlled.s.vy = controlled.vy;
                        }
                        if (this.up && this.up.isPressed()) {
                            controlled.s.vy = -controlled.vy;
                        }
                    }
                });
            });
        }

        for (let i = 0; i < controlledSprites.length; i++) {
            if (controlledSprites[i].s.id === sprite.id) {
                controlledSprites[i].vx = vx;
                controlledSprites[i].vy = vy;
                return;
            }
        }
        controlledSprites.push({ s: sprite, vx: vx, vy: vy });
    }
}
