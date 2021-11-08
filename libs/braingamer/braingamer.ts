enum GamerRocket {
    X = 0,
    Y = 1    
}

enum GamerButton {
    up = 0,
    down= 1,    
	left= 2,
	right= 3
}

/**
 * BrainGamer
 */
//% block="BrainGamer"
//% weight=70 color="#e15f41" icon="\uf11b"
namespace braingamer {	
		
	/**
	 * Run some code when a button is pressed or released
	 */
	//% weight=99 blockGap=8 help=controller/button/on-event
	//% blockId=braingamer_keyonevent block="on button %button %event"
	export function onEvent(button: GamerButton, event: ControllerButtonEvent, handler: () => void) {
		let id = 0;
		
		if (button == GamerButton.up)
			id = controller.up.id;
		else if (button == GamerButton.down)
			id = controller.down.id;
		else if (button == GamerButton.left)
			id = controller.left.id;
		else
			id = controller.right.id;
		
		control.onEvent(event, id, handler);
	}
			
	//% blockId=braingamer_rocket block="rocket %gamerrocket"
    export function Rocket(gamerrocket: GamerRocket): number {
        let value = 0;
		if (gamerrocket == GamerRocket.X) {
			value = pins.P4.analogRead();
		}
		else 
			value = pins.P3.analogRead();
		
		value = Math.map(value, 0, 1024, 0, 100);
		
		return value | 0;
    } 

	
	//% blockId=braingamer_beep block="Beep"
    export function Beep(): void {
		pins.P0.analogWrite(512)
		pins.P0.analogSetPeriod(1000)
		pause(100);
		pins.P0.analogWrite(0)
    }

	//% blockId=braingamer_sound block="set sound %on=toggleOnOff"
    export function Sound(on: boolean): void {
        if (on) {
			pins.P0.analogWrite(512)
			pins.P0.analogSetPeriod(1000)
		}
			
		else
			pins.P0.analogWrite(0)
    }	
	
	//% blockId=braingamer_vibrate block="set vibrate %on=toggleOnOff"
    export function Vibrate(on: boolean): void {
        if (on)
			pins.P8.digitalWrite(false)
		else 
			pins.P8.digitalWrite(true)
				
    } 
	
	

	
}
