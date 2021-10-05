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
        return 0;
    } 

	
	//% blockId=braingamer_beep block="Beep"
    export function Beep(): void {
        
    } 
	
	//% blockId=braingamer_vibrate block="set vibrate %on=toggleOnOff"
    export function Vibrate(on: boolean): void {
        
    } 
	
	

	
}
