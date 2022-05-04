enum GamerRocket {
    X = 0,
    Y = 1    
}

enum GamerButton {
    up = controller.BUTTON_UP_ID,
    down= controller.BUTTON_DOWN_ID,    
	left= controller.BUTTON_LEFT_ID,
	right= controller.BUTTON_RIGHT_ID
}

/**
 * BrainGamer
 */
//% block="BrainGamer"
//% weight=70 color="#e15f41" icon="\uf11b"
namespace braingamer {	
	
	/**
	 * Set sound On, Off
	 */
	//% blockId=braingamer_sound block="set sound %on=toggleOnOff"
	//% weight=99
    export function Sound(on: boolean): void {
        if (on) {
			pins.P0.analogWrite(512)
			pins.P0.analogSetPeriod(1000)
		}
			
		else
			pins.P0.analogWrite(0)
    }	
	
	/**
	 * Play short sound
	 */
	//% blockId=braingamer_beep block="Beep"
	//% weight=98
    export function Beep(): void {
		pins.P0.analogWrite(512)
		pins.P0.analogSetPeriod(1000)
		pause(100);
		pins.P0.analogWrite(0)
    }
	
	/**
	 * Set vibrate
	 */
	//% blockId=braingamer_vibrate block="set vibrate %on=toggleOnOff"
	//% weight=97
    export function Vibrate(on: boolean): void {
        if (on)
			pins.P8.digitalWrite(false)
		else 
			pins.P8.digitalWrite(true)
				
    } 
	
	/**
	 * Read rocket value in range -1024..1024
	 */
	//% blockId=braingamer_rocket block="rocker %gamerrocket"
	//% weight=96
    export function Rocket(gamerrocket: GamerRocket): number {
        let value = 0;
		if (gamerrocket == GamerRocket.X) {
			value = pins.P4.analogRead();
			value = Math.map(value, 0, 1024, 1024, -1024);
		}
		else {
			value = pins.P3.analogRead();
			value = Math.map(value, 0, 1024, -1024, 1024);
		}
		
		
		
		return value | 0;
    } 

	
	let init_gamer_button: boolean 
	
	/**
	 * Run some code when a button is pressed or released
	 */
	//% weight=95 blockGap=8 help=controller/button/on-event
	//% blockId=braingamer_keyonevent block="on button %button %event"
	export function onEvent(button: GamerButton, event: ControllerButtonEvent, handler: () => void) {
		let id = 0;
		
		controller.EnsureInitGamerButtons()
				
		if (button == GamerButton.up)
			id = controller.BUTTON_UP_ID;
		else if (button == GamerButton.down)
			id = controller.BUTTON_DOWN_ID;
		else if (button == GamerButton.left)
			id = controller.BUTTON_LEFT_ID;
		else
			id = controller.BUTTON_RIGHT_ID;
		
		control.onEvent(event, id, handler);
	}
	
	/**
	 * Indicates if the button is currently pressed
	 */
	//% weight=94 blockGap=8 help=controller/button/is-pressed
	//% blockId=braingamer_keyispressed block="is %button pressed"	
	export function isPressed(button: GamerButton) : boolean {
		let pressed = false;
		 
		controller.EnsureInitGamerButtons()
		
		if (button == GamerButton.up)
			pressed = controller.ButtonUp_IsPressed();
		else if (button == GamerButton.down)
			pressed = controller.ButtonDown_IsPressed();
		else if (button == GamerButton.left)
			pressed = controller.ButtonLeft_IsPressed();
		else
			pressed = controller.ButtonRight_IsPressed();
		
		return pressed;				
	}

}
