# LED Roulette

```package
neopixel
```

```blocks
enum SpriteKind {
    Player,
    Enemy,
    number
}
function startGame () {
    player1Score = 0
    player2Score = 0
    player1Active = true
    player2Active = true
    running = 1
    game_speed = 100
    scorep1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . 3 3 3 3 . . . . . . 3 3 3 3 . 
        . 3 3 3 3 . . . . 3 3 3 3 3 3 . 
        . 3 3 3 3 . . . . 3 3 3 3 3 3 . 
        . 3 3 3 3 . . 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 . . 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 . . 3 3 . . 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 . . 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 . . 3 3 3 3 . 
        . 3 3 3 3 3 3 . . . . 3 3 3 3 . 
        . 3 3 3 3 3 3 . . . . 3 3 3 3 . 
        . 3 3 3 3 . . . . . . 3 3 3 3 . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        `, SpriteKind.number)
    scorep1.setPosition(100, 32)
    scorep1.say("Player 2")
    scorep2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . 3 3 3 3 . . . . . . 3 3 3 3 . 
        . 3 3 3 3 . . . . 3 3 3 3 3 3 . 
        . 3 3 3 3 . . . . 3 3 3 3 3 3 . 
        . 3 3 3 3 . . 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 . . 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 . . 3 3 . . 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 . . 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 . . 3 3 3 3 . 
        . 3 3 3 3 3 3 . . . . 3 3 3 3 . 
        . 3 3 3 3 3 3 . . . . 3 3 3 3 . 
        . 3 3 3 3 . . . . . . 3 3 3 3 . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        `, SpriteKind.number)
    scorep2.setPosition(28, 32)
    scorep2.say("Player 1")
}
function SetLED (index: number) {
    strip.clear()
    if (index == 3 || index == 7) {
        strip.setPixelColor(index, neopixel.rgb(50, 0, 0))
    } else {
        strip.setPixelColor(index, neopixel.rgb(0, 250, 0))
    }
    strip.show()
}
function ShowScore (player: number, score: number) {
    if (player == 0) {
        scorep1.setImage(digits[score])
    } else {
        scorep2.setImage(digits[score])
    }
}
let LED = 0
let scorep2: Sprite = null
let scorep1: Sprite = null
let game_speed = 0
let running = 0
let player2Active = false
let player1Active = false
let player2Score = 0
let player1Score = 0
let strip: neopixel.Strip = null
let digits: Image[] = []
pins.P1.setPull(PinPullMode.PullUp)
pins.P2.setPull(PinPullMode.PullUp)
startGame()
digits = [
img`
    . . . . . . . . . . . . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . 3 3 3 3 . . . . . . 3 3 3 3 . 
    . 3 3 3 3 . . . . 3 3 3 3 3 3 . 
    . 3 3 3 3 . . . . 3 3 3 3 3 3 . 
    . 3 3 3 3 . . 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 . . 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 . . 3 3 . . 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 . . 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 . . 3 3 3 3 . 
    . 3 3 3 3 3 3 . . . . 3 3 3 3 . 
    . 3 3 3 3 3 3 . . . . 3 3 3 3 . 
    . 3 3 3 3 . . . . . . 3 3 3 3 . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 3 3 . . . . . . 
    . . . . . . . . 3 3 . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . 3 3 3 3 3 3 3 3 . . . . . . 
    . . 3 3 3 3 3 3 3 3 . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . 3 3 3 3 . . . . 3 3 3 3 . . 
    . . 3 3 3 3 . . . . 3 3 3 3 . . 
    . . 3 3 3 3 . . . . 3 3 3 3 . . 
    . . . . . . . . . . 3 3 3 3 . . 
    . . . . . . . . . . 3 3 3 3 . . 
    . . . . . . . . 3 3 3 3 . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    . . 3 3 3 3 . . . . 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . 3 3 3 3 3 . . . 3 3 3 3 . . 
    . . . . . . . . . . 3 3 3 3 . . 
    . . . . . . . . . . 3 3 3 3 . . 
    . . . . . . . . . . 3 3 3 3 . . 
    . . . . . . . . . . 3 3 3 3 . . 
    . . . . . . 3 3 3 3 3 3 . . . . 
    . . . . . . . . . . 3 3 3 3 . . 
    . . . . . . . . . . 3 3 3 3 . . 
    . . . . . . . . . . 3 3 3 3 . . 
    . . . . . . . . . . 3 3 3 3 . . 
    . . 3 3 3 3 . . . . 3 3 3 3 . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 3 3 3 3 . . . 
    . . . . . . . . . 3 3 3 3 . . . 
    . . . . . . . 3 3 3 3 3 3 . . . 
    . . . . . 3 3 3 3 3 3 3 3 . . . 
    . . . . . 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 . . 3 3 3 3 . . . 
    . . . 3 3 3 3 . . 3 3 3 3 . . . 
    . 3 3 3 3 . . . . 3 3 3 3 . . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . . . . . . . 3 3 3 3 . . . 
    . . . . . . . . . 3 3 3 3 . . . 
    . . . . . . . . . 3 3 3 3 . . . 
    . . . . . . . 3 3 3 3 3 3 3 3 . 
    . . . . . . . 3 3 3 3 3 3 3 3 . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 . . . . . . . . . . . 
    . 3 3 3 3 . . . . . . . . . . . 
    . 3 3 3 3 . . . . . . . . . . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . . . . . . . . . 3 3 3 3 . 
    . . . . . . . . . . . 3 3 3 3 . 
    . . . . . . . . . . . 3 3 3 3 . 
    . . . . . . . . . . . 3 3 3 3 . 
    . . . . . . . . . . . 3 3 3 3 . 
    . 3 3 3 3 . . . . . . 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . 3 3 3 3 . . . . . . . . . . . 
    . 3 3 3 3 . . . . . . . . . . . 
    . 3 3 3 3 . . . . . . . . . . . 
    . 3 3 3 3 . . . . . . . . . . . 
    . 3 3 3 3 . . . . . . . . . . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . 3 3 3 3 . . . . . . 3 3 3 3 . 
    . 3 3 3 3 . . . . . . 3 3 3 3 . 
    . 3 3 3 3 . . . . . . 3 3 3 3 . 
    . 3 3 3 3 . . . . . . 3 3 3 3 . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . . . . . . . . 3 3 3 3 . . 
    . . . . . . . . . . 3 3 3 3 . . 
    . . . . . . . . . . 3 3 3 3 . . 
    . . . . . . . . . . 3 3 3 3 . . 
    . . . . . . . . 3 3 3 3 . . . . 
    . . . . . . . . 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . 3 3 3 3 . . . . . . . . . 
    . . . 3 3 3 3 . . . . . . . . . 
    . . . 3 3 3 3 . . . . . . . . . 
    . . . 3 3 3 3 . . . . . . . . . 
    . . . 3 3 3 3 . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . 3 3 3 3 . . . . . . 3 3 3 3 . 
    . 3 3 3 3 . . . . . . 3 3 3 3 . 
    . 3 3 3 3 . . . . . . 3 3 3 3 . 
    . 3 3 3 3 . . . . . . 3 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 3 . . . . . . 3 3 3 3 . 
    . 3 3 3 3 . . . . . . 3 3 3 3 . 
    . 3 3 3 3 . . . . . . 3 3 3 3 . 
    . 3 3 3 3 . . . . . . 3 3 3 3 . 
    . 3 3 3 3 . . . . . . 3 3 3 3 . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . 3 3 3 3 . . . . . . 3 3 3 3 . 
    . 3 3 3 3 . . . . . . 3 3 3 3 . 
    . 3 3 3 3 . . . . . . 3 3 3 3 . 
    . 3 3 3 3 . . . . . . 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . . . . . . . . . 3 3 3 3 . 
    . . . . . . . . . . . 3 3 3 3 . 
    . . . . . . . . . . . 3 3 3 3 . 
    . . . . . . . . . . . 3 3 3 3 . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    `
]
strip = neopixel.create(pins.P0, 8)
forever(function () {
    LED += 1
    if (LED == 8) {
        LED = 0
    }
    SetLED(LED)
    pause(game_speed)
    if (player1Score == 5 || player2Score == 5) {
        strip.clear()
        strip.showRainbow(1, 360)
        music.playSound(music.sounds(Sounds.PowerUp))
        if (input.buttonA.isPressed() || input.buttonB.isPressed()) {
            strip.clear()
            scorep1.destroy()
            scorep2.destroy()
            startGame()
        }
    } else {
        if (player1Active) {
            if (pins.P1.digitalRead() == 0) {
                if (LED == 3) {
                    music.playTone(587, music.beat(BeatFraction.Eighth))
                    music.playTone(659, music.beat(BeatFraction.Eighth))
                    player2Score += 1
                    ShowScore(0, player2Score)
                } else {
                    music.playTone(147, music.beat(BeatFraction.Eighth))
                    music.playTone(131, music.beat(BeatFraction.Eighth))
                }
                player1Active = false
                pause(1000)
                if (game_speed > 50) {
                    game_speed += -5
                }
            }
        } else {
            if (LED == 7) {
                player1Active = true
            }
        }
        if (player2Active) {
            if (pins.P2.digitalRead() == 0) {
                if (LED == 7) {
                    music.playTone(587, music.beat(BeatFraction.Eighth))
                    music.playTone(659, music.beat(BeatFraction.Eighth))
                    player1Score += 1
                    ShowScore(1, player1Score)
                } else {
                    music.playTone(147, music.beat(BeatFraction.Eighth))
                    music.playTone(131, music.beat(BeatFraction.Eighth))
                }
                player2Active = false
                pause(1000)
                if (game_speed > 50) {
                    game_speed += -5
                }
            }
        } else {
            if (LED == 3) {
                player2Active = true
            }
        }
    }
})

 
```
