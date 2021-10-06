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
//% weight=70 color="#e15f41" icon="\uf11b"
namespace braingamer {
		
	let _userEventsEnabled = true;
    let _activeButtons: ButtonGamer[];

    //% fixedInstances
    export class ButtonGamer {
        public id: number;
        public repeatDelay: number;
        public repeatInterval: number;
        private _pressed: boolean;
        private _pressedElasped: number;
        private _repeatCount: number;

        constructor(id: number, buttonId?: number, upid?: number, downid?: number) {
            this.id = id;
            this._pressed = false;
            this.repeatDelay = 500;
            this.repeatInterval = 30;
            this._repeatCount = 0;
            control.internalOnEvent(INTERNAL_KEY_UP, this.id, () => {
                if (this._pressed) {
                    this._pressed = false
                    this.raiseButtonUp();
                }
            }, 16)
            control.internalOnEvent(INTERNAL_KEY_DOWN, this.id, () => {
                if (!this._pressed) {
                    this._pressed = true;
                    this._pressedElasped = 0;
                    this._repeatCount = 0;
                    this.raiseButtonDown();
                }
            }, 16)
            if (buttonId && upid && downid) {
                control.internalOnEvent(buttonId, upid, () => control.raiseEvent(INTERNAL_KEY_UP, this.id), 16)
                control.internalOnEvent(buttonId, downid, () => control.raiseEvent(INTERNAL_KEY_DOWN, this.id), 16)
            }

            // register button in global list
            if (!_activeButtons) _activeButtons = [];
            _activeButtons.push(this);
        }

        private raiseButtonUp() {
            if (_userEventsEnabled)
                control.raiseEvent(KEY_UP, this.id)
            else
                control.raiseEvent(SYSTEM_KEY_UP, this.id);
        }

        private raiseButtonDown() {
            if (_userEventsEnabled)
                control.raiseEvent(KEY_DOWN, this.id)
            else
                control.raiseEvent(SYSTEM_KEY_DOWN, this.id)
        }

        private raiseButtonRepeat() {
            if (_userEventsEnabled)
                control.raiseEvent(KEY_REPEAT, this.id)
            else
                control.raiseEvent(SYSTEM_KEY_REPEAT, this.id)
        }

        /**
         * Run some code when a button is pressed or released
         */
        //% weight=99 blockGap=8 help=controller/button/on-event
        //% blockId=keyonevent block="on %button **button** %event"
        onEvent(event: ControllerButtonEvent, handler: () => void) {
            control.onEvent(event, this.id, handler);
        }

        /**
         * Pauses until a button is pressed or released
         */
        //% weight=98 blockGap=8 help=controller/button/pause-until
        //% blockId=keypauseuntil block="pause until %button **button** is %event"
        pauseUntil(event: ControllerButtonEvent) {
            control.waitForEvent(event, this.id)
        }

        /**
         * Indicates if the button is currently pressed
        */
        //% weight=96 blockGap=8 help=controller/button/is-pressed
        //% blockId=keyispressed block="is %button **button** pressed"
        isPressed() {
            return this._pressed;
        }

        __update(dtms: number) {
            if (!this._pressed) return;
            this._pressedElasped += dtms;
            // inital delay
            if (this._pressedElasped < this.repeatDelay) 
                return;
            
            // do we have enough time to repeat
            const count = Math.floor((this._pressedElasped - this.repeatDelay) / this.repeatInterval);
            if (count != this._repeatCount) {
                this.raiseButtonRepeat();
                this._repeatCount = count;
            }
        }
    }
	
	//% fixedInstance block="left"
    export const left = new ButtonGamer(1, input.buttonLeft.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance block="up"
    export const up = new ButtonGamer(2, input.buttonUp.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance block="right"
    export const right = new ButtonGamer(3, input.buttonRight.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance block="down"
    export const down = new ButtonGamer(4, input.buttonDown.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
	//% fixedInstance block="A"
    export const A = new ButtonGamer(5, input.buttonA.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance block="B"
    export const B = new ButtonGamer(6, input.buttonB.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
	
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
