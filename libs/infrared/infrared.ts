/**
 * infrared remote
 */
//% color=#0000ff weight=80
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
  * read last key
  */
  //% blockId=ir_read_last_key
  //% block="read last key from %pin"
  //% shim=infrared::readkey
  export function readkey(pin: Pins): number {
    return 100
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
