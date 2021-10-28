namespace controller {
	
    //% fixedInstance block="left"
    export const left = new Button(1, braingamer.buttonLeft.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance block="up"
    export const up = new Button(2, braingamer.buttonUp.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance block="right"
    export const right = new Button(3, braingamer.buttonRight.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance block="down"
    export const down = new Button(4, braingamer.buttonDown.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
	
	//% fixedInstance block="A"
    export const A = new Button(5, input.buttonA.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
    //% fixedInstance block="B"
    export const B = new Button(6, input.buttonB.id(), DAL.DEVICE_BUTTON_EVT_UP, DAL.DEVICE_BUTTON_EVT_DOWN);
}