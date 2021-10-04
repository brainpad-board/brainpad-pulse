
/**
 * Outputs.
 */
//% color="#00FF00" weight=97 icon="\uf205"
namespace led {	
	/**
    * Turns on or off the led
    */
	//% blockId=led_set block="set led to %on=toggleOnOff"
    //% weight=89
	//% blockGap=8
	export function setled(on: boolean) {
		__setLed(on);    
    }
	
    /**
    * Turns off the led
    */
    //% blockId=led_set_off block="led off"
    //% weight=89
    export function off() {
		__setLed(false);    
    }
	
	/**
    * Turns on the led
    */
	//% blockId=led_set_on block="led on"
    //% weight=89
    export function on() {
		__setLed(true);           
    }

    function update() {
        
    }              
    
}