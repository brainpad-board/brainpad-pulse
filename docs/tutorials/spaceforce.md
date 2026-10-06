# Space Force
```blocks
input.buttonA.onEvent(ButtonEvent.Down, function () {
    display.showImage(background.img31_go)
    pins.P1.servoWrite(50)
    pause(250)
    for (let index = 0; index <= 54; index++) {
        pins.P1.servoWrite(angle + index)
        pause(14)
    }
    pause(3500)
    display.showImage(background.img30_stop)
})
input.buttonB.onEvent(ButtonEvent.Down, function () {
    angle += 1
    display.showNumber(angle, 1)
    pause(2000)
})
let angle = 0
angle = 65
forever(function () {
    display.showImage(background.img35_left)
})
 
```
