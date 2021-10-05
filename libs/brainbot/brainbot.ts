
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
	//% leftspeed.min=0 leftspeed.max=100
	//% rightspeed.min=0 rightspeed.max=100
    export function Move(leftspeed: number, rightspeed: number): void {
        
    } 
	
	//% blockId=brainbot_stop block="Stop"
    export function Stop(): void {
        
    } 

	
	//% blockId=brainbot_beep block="Beep"
    export function Beep(): void {
        
    } 
	
	//% blockId=brainbot_headlight block="Set head light color to %color"
    export function Headlight(color: number): void {
        
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
