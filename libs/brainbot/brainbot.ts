
/**
 * GameBot
 */
//% block="BrainBot"
//% weight=70 icon="\uf185" color=#EC7505
namespace brainbot {
    /**
     * Move
     */
    //% blockId=brainbot_move block="Move left speed %leftspeed right speed %rightspeed"
	//% leftspeed.min=-100 leftspeed.max=100
	//% rightspeed.min=-100 rightspeed.max=100
    export function Move(leftspeed: number, rightspeed: number): void {
		let deviceAddress = 0x1;
		
		
		let left = Math.map(leftspeed, -100, 100, -255, 255);
		let right = Math.map(rightspeed, -100, 100, -255, 255);
		let data: number[] = []
		
		data = [0x2, 0, 0, 0, 0];

		if (left > 0) {
			data[1] = left;
			data[2] = 0x00;
		}
		else {
			left *= -1
			data[1] = 0;
			data[2] = left;
		}
		
		if (right > 0) {
			data[3] = right;
			data[4] = 0x00;
		}
		else {
			right *= -1
			data[3] = 0;
			data[4] = right;
		}
		
		
		for (let i = 0; i <5 ; i++) {
			pins.i2cWriteNumber(
					deviceAddress,
					data[i],
					NumberFormat.Int8LE,
					i < 4 ? true : false
				);
		}				
    } 
	
	//% blockId=brainbot_stop block="Stop"
    export function Stop(): void {
		let deviceAddress = 0x1;
		let data: number[] = [0x2, 0, 0, 0, 0]
		
		for (let i = 0; i <5 ; i++) {
			pins.i2cWriteNumber(
					deviceAddress,
					data[i],
					NumberFormat.Int8LE,
					i < 4 ? true : false
				);
		}		
        
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
		
	//% blockId=brainbot_headlight block="Set head light color to red %red green %green blue %blue"
	//% red.min=0 red.max=255
	//% green.min=0 green.max=255
	//% blue.min=0 blue.max=255
    export function Headlight(red: number, green: number, blue: number): void {
		let deviceAddress = 0x1;		
		let data: number[] = [0x1, red, green, blue ];
	
		for (let i = 0; i <5 ; i++) {
			pins.i2cWriteNumber(
					deviceAddress,
					data[i],
					NumberFormat.Int8LE,
					i < 3 ? true : false
				);
		}		
        
    } 
	
	//% blockId=brainbot_taillight block="Set tail light left color %leftcolor right color %rightcolor"
    export function Taillight(leftcolor: number, rightcolor: number): void {
        
    } 
	
	//% blockId=brainbot_groundsensor block="ground sensor"
    export function GroundSensor(): number {
        return 0;
    } 
	
	//% blockId=brainbot_distancesensor block="distance sensor"
    export function DistanceSensor(): number {
        return 0;
    } 

	
}
