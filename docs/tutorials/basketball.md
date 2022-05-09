# Baskteball

You have 30 seconds to make as many baskets as possible. This game is a good demonstration of how gravity and acceleration work inside MakeCode. 

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Basketball,
    rim,
    basket,
    backboard,
    ball,
    shotmade,
    ballScored
}
enum ActionKind {
    Walking,
    Idle,
    Jumping
}
function createCourt () {
    basket = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 . . . . . . . . . . . . . . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 . 1 . 1 . 1 . 1 . 1 . 1 1 
        . . 1 . 1 . 1 . 1 . 1 . 1 1 . 
        . . 1 1 . 1 . 1 . 1 . 1 1 . . 
        . . . 1 1 . 1 . 1 . 1 1 . . . 
        . . . 1 . 1 . 1 . 1 . 1 . . . 
        . . . 1 1 . 1 . 1 . 1 1 . . . 
        . . . . 1 1 . 1 . 1 1 . . . . 
        . . . . 1 . 1 . 1 . 1 . . . . 
        . . . . 1 1 . 1 . 1 1 . . . . 
        . . . 1 1 . 1 . 1 . 1 1 . . . 
        . . . 1 . 1 . 1 . 1 . 1 . . . 
        `, SpriteKind.basket)
    backboard = sprites.create(img`
        ...................1111.......
        ...................1.11.......
        ...................1.11.......
        ...................1.11.......
        ...................1.11.......
        ...................1.11.......
        ...................1.11.......
        ...................1.11.......
        ...................1.11.......
        ...................1.11.......
        ...................1.11.......
        ...................1.11.......
        ...................1.11.......
        ...................1.11.......
        ...................1.11.......
        ...............11111.111......
        ...................1.1111.....
        ...............11111.111111111
        ...................1.11.......
        ...................1.11.111111
        ...................1.11.......
        ...................1.11111111.
        ...................1.11.....1.
        ...................1.11.....1.
        ...................1.11.....1.
        ...................1.11.....1.
        ...................1.11.....1.
        ...................1.11.....1.
        ...................1.11.....1.
        ...................1.11.....1.
        ...................1.11.....1.
        ...................1.11.....1.
        ...................1111.....1.
        ............................1.
        ............................1.
        ............................1.
        ...........................11.
        ...........................1..
        ...........................1.1
        ...........................1.1
        ...........................1.1
        ...........................1.1
        ...........................1.1
        ...........................1.1
        ...........................1.1
        ..........................1..1
        ..........................1.11
        ..........................1.11
        ..........................1.11
        ..........................1.11
        ..........................1.11
        ..........................1.11
        ..........................1.11
        `, SpriteKind.backboard)
    rim = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 . . . . . . . . . . . . . . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.rim)
    backboard.setPosition(110, 35)
    basket.setPosition(104, 30)
    rim.setPosition(104, 30)
}
sprites.onOverlap(SpriteKind.ball, SpriteKind.backboard, function (sprite, otherSprite) {
    myBall.vx = -20
    myBall.vy = 10
    music.playTone(139, music.beat(BeatFraction.Sixteenth))
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.rim, function (sprite, otherSprite) {
    if (myBall.x > 100 && myBall.y < 25) {
        info.changeScoreBy(2)
        music.playSound(music.sounds(Sounds.BaDing))
        myBall.destroy()
        ballScored = sprites.create(img`
            . 1 1 1 1 1 . . 
            1 . 1 1 1 . 1 . 
            1 1 . 1 . 1 1 . 
            . . . . . . . . 
            1 1 . 1 . 1 1 . 
            1 . 1 1 1 . 1 . 
            . 1 1 1 1 1 . . 
            . . . . . . . . 
            `, SpriteKind.ballScored)
        ballScored.setPosition(105, 20)
        ballScored.vy = 50
        pause(750)
        newBall()
    } else {
        music.playTone(139, music.beat(BeatFraction.Half))
        myBall.vx = -4
        myBall.vy = 50
        pause(1000)
        myBall.destroy()
        newBall()
    }
})
input.buttonA.onEvent(ButtonEvent.Down, function () {
    myBall.vx = 60
    myBall.vy = -70
})
info.onCountdownEnd(function () {
    game.over(true)
})
input.buttonB.onEvent(ButtonEvent.Down, function () {
    myBall.vx = 60
    myBall.vy = -70
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    ballNet = sprites.create(img`
        . 1 1 1 1 1 . . 
        1 . 1 1 1 . 1 . 
        1 1 . 1 . 1 1 . 
        . . . . . . . . 
        1 1 . 1 . 1 1 . 
        1 . 1 1 1 . 1 . 
        . 1 1 1 1 1 . . 
        . . . . . . . . 
        `, SpriteKind.shotmade)
    pause(2000)
})
function newBall () {
    myBall = sprites.create(img`
        . 1 1 1 1 1 . . 
        1 . 1 1 1 . 1 . 
        1 1 . 1 . 1 1 . 
        . . . . . . . . 
        1 1 . 1 . 1 1 . 
        1 . 1 1 1 . 1 . 
        . 1 1 1 1 1 . . 
        . . . . . . . . 
        `, SpriteKind.ball)
    myBall.ay = 60
    myBall.setPosition(30, 10)
    myBall.vy = 60
}
let ballNet: Sprite = null
let ballScored: Sprite = null
let myBall: Sprite = null
let rim: Sprite = null
let backboard: Sprite = null
let basket: Sprite = null
info.startCountdown(30)
info.setScore(0)
createCourt()
newBall()
game.onUpdate(function () {
    if (myBall.y > 62) {
        music.playTone(165, music.beat(BeatFraction.Sixteenth))
        myBall.vy = -60
    } else if (myBall.y < 2) {
        myBall.vy = 60
    }
    if (myBall.x > 128) {
        myBall.setPosition(30, 10)
        myBall.vx = 0
    }
    if (myBall.x > 115 && myBall.y > 40) {
        music.playTone(139, music.beat(BeatFraction.Half))
        myBall.destroy()
        newBall()
    }
})

```