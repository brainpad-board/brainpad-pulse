/**
 * IR remote
 */
//% color=50 weight=0
//% icon="\uf1eb"
namespace IR {
  /**
  * initialization
  */
  //% blockId=ir_init
  //% block="connect ir receiver to %pin"
  //% shim=IR::init
  export function init(pin: Pins): void {
    return
  }

  /**
  * button pushed.
  */
  //% blockId=ir_received_event
  //% block="on |%btn| button pressed"
  //% shim=IR::onPressEvent
  export function onPressEvent(btn: RemoteButton, body:Action): void {
    return
  }
}
