/**
 * infrared remote
 */
//% color=#311557 weight=80
//% icon="\uf1eb"
namespace infrared {
  /**
  * initialization
  */
  //% blockId=ir_init
  //% block="connect ir receiver to %pin"
  //% shim=infrared::init
  export function init(pin: Pins): void {
    return
  }

  /**
  * button pushed.
  */
  //% blockId=ir_received_event
  //% block="on |%btn| button pressed"
  //% shim=infrared::onPressEvent
  export function onPressEvent(btn: RemoteButton, body:Action): void {
    return
  }
}
