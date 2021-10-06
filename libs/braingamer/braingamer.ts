enum GamerRocket {
    X = 0,
    Y = 1    
}

enum GamerButton {
    Up = 0,
    Down= 1,    
	Left= 2,
	Right= 3
}


/**
 * BrainGamer
 */
//% block="BrainGamer"
//% weight=70 icon="\uf185" color=#EC7505
namespace braingamer {
		
	//% blockId=braingamer_button block="button %gamerbutton"
    export function Button(gamerbutton: GamerButton ): boolean {
        return false;
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

	
	//% blockId=brainbot_beep block="Beep"
    export function Beep(): void {
        music.ringTone(1000);
		pause(100);
		music.ringTone(0);
    }

	//% blockId=brainbot_sound block="set sound %on=toggleOnOff"
    export function Sound(on: boolean): void {
        if (on)
			music.ringTone(1000);
		else
			music.ringTone(0);
    }	
	
	//% blockId=braingamer_vibrate block="set vibrate %on=toggleOnOff"
    export function Vibrate(on: boolean): void {
        if (on)
			pins.P8.digitalWrite(false)
		else 
			pins.P8.digitalWrite(true)
				
    } 
	
	

	
}
