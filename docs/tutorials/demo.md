# Demo

## Step 1 @unplugged

This example uses all the components found on the BrainPad Pulse inside on complete program. This can be used to test all the components and see how they work. For example when beating heart is shown try tipping the BrainPad Pulse until the LED comes on. After you press the button there is a simple game that follows called "Catch the Pizza"

```template
enum SpriteKind {
    Player,
    Enemy,
    Food,
    Heart,
    Logo
}
enum ActionKind {
    Walking,
    Idle,
    Jumping,
    WalkRight,
    Beat,
    WalkLeft
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Pizza.y = -10
    Pizza.x = randint(0, scene.screenWidth())
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
})
let Pizza: Sprite = null
let mode = 0
let speed = 500
let logo = sprites.create(img`
    .......................................................................................
    .......................................................................................
    ...111111111111..........................1111111.......................................
    ...11111111111111........................1111111.......................................
    ...1111111111111111......................1111111.......................................
    ...1111111111111111......................1111111.......................................
    ...11111111.11111111.....................1111111.......................................
    ...1111111....111111.....................1111111.......................................
    ...111111.....111111.....................1111111.......................................
    ...111111.....111111..1111111...111111...1111111......111111111...........111111.......
    ...1111111...1111111..111111....111111...1111111....1111111111111.......1111111111.....
    ...1111111111111111...111111....111111....111111...111111111111111.....1111111111111...
    ...1111111111111111...111111....111111....111111...111111...1111111...111111.1111111...
    ...111111111111111....111111....111111....111111..1111111....11111...11111.....111111..
    ...1111111111111......111111....111111....111111...1111111111........11111...11111111..
    ...111111111..........111111....111111....111111...11111111111111....1111111111111.....
    ....111111............1111111...111111....111111......111111111111...1111111...........
    ....111111............1111111..1111111....111111............1111111..11111.............
    ....1111111...........1111111111111111....111111..111111....1111111...11111....111111..
    ....1111111............111111111111111....111111...1111111111111111...111111111111111..
    ....1111111............111111111111111....111111....11111111111111.....1111111111111...
    ....1111111.............1111111.111111....111111.....111111111111.......11111111111....
    ....1111111.....................111111....111111.......1111111.............111111......
    .......................................................................................
    .......................................................................................
    .......................................................................................
    `, SpriteKind.Logo)
let heart1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 3 3 3 3 . . 3 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Heart)
heart1.setPosition(64, 50)
logo.setPosition(64, 18)
while (mode == 0) {
    heart1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . 3 3 3 3 . . 3 3 3 3 . . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(200)
    heart1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 3 3 3 . . 3 3 3 . . . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(200)
    heart1.say("Press any Button")
    if (input.acceleration(Dimension.X) > 500) {
        led.setled(true)
    } else {
        led.setled(false)
    }
    if (input.buttonA.isPressed()) {
        mode = 1
    } else if (input.buttonB.isPressed()) {
        mode = 1
    }
}
heart1.destroy()
logo.destroy()
info.setScore(0)
info.setLife(3)
let Player = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . e e e e e e e e e e . . . 
    . . . . . . . e e . e . . . . . 
    . . e e e . e e e . e e e . . . 
    . . e e e . . e e e . e e e . . 
    . . e e e e e e e . . . e . . . 
    . . . . e e e e e e e e . . . . 
    . . . e e e e e e e . . . . . . 
    . . e e e e e e e e e . . . . . 
    . . e e . . . e e e e . . . . . 
    . . e e . . e e e e e . . . . . 
    . . e e . . e e e e e . . . . . 
    . . . e e . e e . e . . . . . . 
    . . . . e e e . e e e . . . . . 
    . . . . e e e e e . . . . . . . 
    `, SpriteKind.Player)
Pizza = sprites.create(img`
    . . . . . . e e e e . . . . . . 
    . . . . . . e . . . e . . . . . 
    . . . . . . . e . . . e . . . . 
    . . . . . e . . e . . . e . . . 
    . . . . e . . . . e . . . e . . 
    . . . . e . e . . . e . . . e . 
    . . . e . e e e . . . e . . . e 
    . . . e . . e . . . . . e . . e 
    . . e . . . . . . e . . . e . e 
    . . e . . . . . e e e . . . e e 
    . e . . . . . . . e . . . e e . 
    . e . . e . . . . . . e e . . . 
    e . . e e e . . . e e . . . . . 
    e . . . e . . e e . . . . . . . 
    e . . . . e e . . . . . . . . . 
    e e e e e . . . . . . . . . . . 
    `, SpriteKind.Food)
let left = animation.createAnimation(ActionKind.WalkRight, 200)
let right = animation.createAnimation(ActionKind.WalkLeft, 200)
let stop = animation.createAnimation(ActionKind.Idle, 200)
right.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . e e e e e e e e e e . . . 
    . . . . . . . e e . e . . . . . 
    . . e e e . e e e . e e e . . . 
    . . e e e . . e e e . e e e . . 
    . . e e e e e e e . . . e . . . 
    . . . . e e e e e e e e . . . . 
    . . . e e e e e e e . . . . . . 
    . . e e e e e e e e e . . . . . 
    . . e e . . . e e e e . . . . . 
    . . e e . . e e e e e . . . . . 
    . . e e . . e e e e e . . . . . 
    . . . e e . e e . e . . . . . . 
    . . . . e e e . e e e . . . . . 
    . . . . e e e e e . . . . . . . 
    `)
right.addAnimationFrame(img`
    . . . . e e e e e e . . . . . . 
    . . . e e e e e e e e e e . . . 
    . . . . . . . e e . e . . . . . 
    . . e e e . e e e . e e . . . . 
    . . e e e e . e e e . e e e . . 
    . . e e e e e e e . . . e . . . 
    . . . . e e e e e e e e . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e e e e e e e . . . . 
    . . e e e e e e e e e e e e . . 
    . e e e e e e e e e e e . . . . 
    . e e . . . . . . . . e . . . . 
    . . e e e . e e e . e e . . . . 
    . e e e e e . e e e e . . . . . 
    . e e . . . . e e e . . . . . . 
    . . . . . . . e e e e . . . . . 
    `)
right.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . e e e e e e e e e e . . . 
    . . . . . . . e e . e . . . . . 
    . . e e e . e e e . e e e . . . 
    . . e e e . . e e e . e e e . . 
    . . e e e e e e e . . . e . . . 
    . . . . e e e e e e e e . . . . 
    . . . e e e e e e e . . . . . . 
    . . e e e e e e e e e . . . . . 
    . . e e e e e e e e e . . . . . 
    . . e e . . . . . . e . . . . . 
    . . e . e e e e . e . . . . . . 
    . . . e e e . e e e e e . . . . 
    . . . . e e . . e e e e . . . . 
    . . . . e e e e . . . . . . . . 
    `)
right.addAnimationFrame(img`
    . . . . . e e e e e e . . . . . 
    . . . . e e e e e e e e e e . . 
    . . . . . . . . e e . e . . . . 
    . . . e e e . e e e . e e e . . 
    . . . e e e . . e e e . e e e . 
    . . . e e e e e e e . . . e . . 
    . . . . . e e e e e e e e . . . 
    . . e e e e e e e e e e . . . . 
    e e e e e e e e e e e e e e e . 
    e e e e . e e e e e e e e e e . 
    e e . . e e e e e e e e . . . . 
    . . . e . . . . . . . e . e e . 
    . . e e . e e e e e . . e e e . 
    . . e e e e e . . . e e e e e . 
    . . e e . . . . . . . . . . . . 
    . . e e e e . . . . . . . . . . 
    `)
left.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e e e e . . . . 
    . . . e e e e e e e e e e . . . 
    . . . . . e . e e . . . . . . . 
    . . . e e e . e e e . e e e . . 
    . . e e e . e e e . . e e e . . 
    . . . e . . . e e e e e e e . . 
    . . . . e e e e e e e e . . . . 
    . . . . . . e e e e e e e . . . 
    . . . . . e e e e e e e e e . . 
    . . . . . e e e e . . . e e . . 
    . . . . . e e e e e . . e e . . 
    . . . . . e e e e e . . e e . . 
    . . . . . . e . e e . e e . . . 
    . . . . . e e e . e e e . . . . 
    . . . . . . . e e e e e . . . . 
    `)
left.addAnimationFrame(img`
    . . . . . . e e e e e e . . . . 
    . . . e e e e e e e e e e . . . 
    . . . . . e . e e . . . . . . . 
    . . . . e e . e e e . e e e . . 
    . . e e e . e e e . e e e e . . 
    . . . e . . . e e e e e e e . . 
    . . . . e e e e e e e e . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e e e e e e e . . . . 
    . . e e e e e e e e e e e e . . 
    . . . . e e e e e e e e e e e . 
    . . . . e . . . . . . . . e e . 
    . . . . e e . e e e . e e e . . 
    . . . . . e e e e . e e e e e . 
    . . . . . . e e e . . . . e e . 
    . . . . . e e e e . . . . . . . 
    `)
left.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e e e e . . . . 
    . . . e e e e e e e e e e . . . 
    . . . . . e . e e . . . . . . . 
    . . . e e e . e e e . e e e . . 
    . . e e e . e e e . . e e e . . 
    . . . e . . . e e e e e e e . . 
    . . . . e e e e e e e e . . . . 
    . . . . . . e e e e e e e . . . 
    . . . . . e e e e e e e e e . . 
    . . . . . e e e e e e e e e . . 
    . . . . . e . . . . . . e e . . 
    . . . . . . e . e e e e . e . . 
    . . . . e e e e e . e e e . . . 
    . . . . e e e e . . e e . . . . 
    . . . . . . . . e e e e . . . . 
    `)
left.addAnimationFrame(img`
    . . . . . e e e e e e . . . . . 
    . . e e e e e e e e e e . . . . 
    . . . . e . e e . . . . . . . . 
    . . e e e . e e e . e e e . . . 
    . e e e . e e e . . e e e . . . 
    . . e . . . e e e e e e e . . . 
    . . . e e e e e e e e . . . . . 
    . . . . e e e e e e e e e e . . 
    . e e e e e e e e e e e e e e e 
    . e e e e e e e e e e . e e e e 
    . . . . e e e e e e e e . . e e 
    . e e . e . . . . . . . e . . . 
    . e e e . . e e e e e . e e . . 
    . e e e e e . . . e e e e e . . 
    . . . . . . . . . . . . e e . . 
    . . . . . . . . . . e e e e . . 
    `)
stop.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e e . . . . . 
    . . e e e e e e e e e e e . . . 
    . . . . e . e e e . e . . . . . 
    . . e e e . e e e . e e e . . . 
    . . e e e e e e e e e e e . . . 
    . . e e e e e e e e e e e . . . 
    . . . e e e e e e e e e . . . . 
    . . . . . e e e e e . . . . . . 
    . e e e e e e e e e e e e e . . 
    e e e e e e e e e e e e e e e . 
    e . e e e e e e e e e e e . e . 
    . . e e . . . . . . . e e . . . 
    . . . e e e e e e e e e . . . . 
    . . . . e e e . e e e . . . . . 
    . . . e e e e . e e e e . . . . 
    `)
animation.attachAnimation(Player, right)
animation.attachAnimation(Player, left)
animation.attachAnimation(Player, stop)
sprites.controlSprite(Player, 100, 100)
Player.setPosition(54, 55)
Player.setFlag(SpriteFlag.StayInScreen, true)
Pizza.vy = 50
game.onUpdateInterval(speed, function () {
    if (input.buttonA.isPressed()) {
        animation.setAction(Player, ActionKind.WalkRight)
    } else if (input.buttonB.isPressed()) {
        animation.setAction(Player, ActionKind.WalkLeft)
    } else {
        animation.setAction(Player, ActionKind.Idle)
    }
    if (Pizza.y > 70) {
        music.playTone(147, music.beat(BeatFraction.Sixteenth))
        info.changeLifeBy(-1)
        Pizza.y = -10
        Pizza.x = randint(0, scene.screenWidth())
    }
    speed += -10
})


```