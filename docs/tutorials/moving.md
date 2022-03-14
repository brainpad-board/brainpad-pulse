```template
enum SpriteKind {
    Player,
    Enemy
}
enum ActionKind {
    Walking,
    Idle,
    Jumping
}
let Jumper = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . . . . . 1 1 . 1 . . . . 
    . . . 1 1 1 . 1 1 1 . 1 1 1 . . 
    . . . 1 1 1 . . 1 1 1 . 1 1 1 . 
    . . . 1 1 1 1 1 1 1 . . . 1 . . 
    . . . . . 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 . . . 1 1 1 1 . . . . 
    . . . 1 1 . . 1 1 1 1 1 . . . . 
    . . . 1 1 . . 1 1 1 1 1 . . . . 
    . . . . 1 1 . 1 1 . 1 . . . . . 
    . . . . . 1 1 1 . 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    `, SpriteKind.Player)
let anim = animation.createAnimation(ActionKind.Walking, 200)
anim.addAnimationFrame(img`
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . 1 1 . 1 . . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 . . . . 
    . . 1 1 1 1 . 1 1 1 . 1 1 1 . . 
    . . 1 1 1 1 1 1 1 . . . 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
    . 1 1 . . . . . . . . 1 . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 . . . . 
    . 1 1 1 1 1 . 1 1 1 1 . . . . . 
    . 1 1 . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . 1 1 . 1 . . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 . . . . 
    . . 1 1 1 1 . 1 1 1 . 1 1 1 . . 
    . . 1 1 1 1 1 1 1 . . . 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
    . 1 1 . . . . . . . . 1 . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 . . . . 
    . 1 1 1 1 1 . 1 1 1 1 . . . . . 
    . 1 1 . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . 1 1 . 1 . . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 1 . . . 
    . . 1 1 1 . . 1 1 1 . 1 1 1 . . 
    . . 1 1 1 1 1 1 1 . . . 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . . 
    . . 1 1 . . . . . . 1 . . . . . 
    . . 1 . 1 1 1 1 . 1 . . . . . . 
    . . . 1 1 1 . 1 1 1 1 1 . . . . 
    . . . . 1 1 . . 1 1 1 1 . . . . 
    . . . . 1 1 1 1 . . . . . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . . . . . 1 1 . 1 . . . . 
    . . . 1 1 1 . 1 1 1 . 1 1 1 . . 
    . . . 1 1 1 . . 1 1 1 . 1 1 1 . 
    . . . 1 1 1 1 1 1 1 . . . 1 . . 
    . . . . . 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    1 1 1 1 . 1 1 1 1 1 1 1 1 1 1 . 
    1 1 . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 . . . . . . . 1 . 1 1 . 
    . . 1 1 . 1 1 1 1 1 . . 1 1 1 . 
    . . 1 1 1 1 1 . . . 1 1 1 1 1 . 
    . . 1 1 . . . . . . . . . . . . 
    . . 1 1 1 1 . . . . . . . . . . 
    `)
animation.attachAnimation(Jumper, anim)
animation.setAction(Jumper, ActionKind.Walking)

```

# Moving Sprites

## Step 1 @unplugged

We've got our sprite animated, now let's use the buttons to control it and make our player jump. 

![BrainPad Animated Sprite](docs/static/images/animate.gif)


## Step 2 @fullscreen

Moving sprites can be done two different ways. If we just want to move back and forth we can just use the ``||sprites:control sprite||`` block. Drag in the ``||sprites:control sprite||`` block to the bottom of the existing blocks, and change the sprite we're controlling to "Jumper".

```blocks
enum SpriteKind {
    Player,
    Enemy
}
enum ActionKind {
    Walking,
    Idle,
    Jumping
}
let Jumper = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . . . . . 1 1 . 1 . . . . 
    . . . 1 1 1 . 1 1 1 . 1 1 1 . . 
    . . . 1 1 1 . . 1 1 1 . 1 1 1 . 
    . . . 1 1 1 1 1 1 1 . . . 1 . . 
    . . . . . 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 . . . 1 1 1 1 . . . . 
    . . . 1 1 . . 1 1 1 1 1 . . . . 
    . . . 1 1 . . 1 1 1 1 1 . . . . 
    . . . . 1 1 . 1 1 . 1 . . . . . 
    . . . . . 1 1 1 . 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    `, SpriteKind.Player)
let anim = animation.createAnimation(ActionKind.Walking, 200)
anim.addAnimationFrame(img`
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . 1 1 . 1 . . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 . . . . 
    . . 1 1 1 1 . 1 1 1 . 1 1 1 . . 
    . . 1 1 1 1 1 1 1 . . . 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
    . 1 1 . . . . . . . . 1 . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 . . . . 
    . 1 1 1 1 1 . 1 1 1 1 . . . . . 
    . 1 1 . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . 1 1 . 1 . . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 . . . . 
    . . 1 1 1 1 . 1 1 1 . 1 1 1 . . 
    . . 1 1 1 1 1 1 1 . . . 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
    . 1 1 . . . . . . . . 1 . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 . . . . 
    . 1 1 1 1 1 . 1 1 1 1 . . . . . 
    . 1 1 . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . 1 1 . 1 . . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 1 . . . 
    . . 1 1 1 . . 1 1 1 . 1 1 1 . . 
    . . 1 1 1 1 1 1 1 . . . 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . . 
    . . 1 1 . . . . . . 1 . . . . . 
    . . 1 . 1 1 1 1 . 1 . . . . . . 
    . . . 1 1 1 . 1 1 1 1 1 . . . . 
    . . . . 1 1 . . 1 1 1 1 . . . . 
    . . . . 1 1 1 1 . . . . . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . . . . . 1 1 . 1 . . . . 
    . . . 1 1 1 . 1 1 1 . 1 1 1 . . 
    . . . 1 1 1 . . 1 1 1 . 1 1 1 . 
    . . . 1 1 1 1 1 1 1 . . . 1 . . 
    . . . . . 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    1 1 1 1 . 1 1 1 1 1 1 1 1 1 1 . 
    1 1 . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 . . . . . . . 1 . 1 1 . 
    . . 1 1 . 1 1 1 1 1 . . 1 1 1 . 
    . . 1 1 1 1 1 . . . 1 1 1 1 1 . 
    . . 1 1 . . . . . . . . . . . . 
    . . 1 1 1 1 . . . . . . . . . . 
    `)
animation.attachAnimation(Jumper, anim)
animation.setAction(Jumper, ActionKind.Walking)
sprites.controlSprite(Jumper, 100, 100)
```

## Step 3 @unplugged

You can either download the code to the BrainPad or you can try it on the simulator. You'll notice that our sprite moves back and forth when we press the A or B buttons. 

![Moving Sprite](docs/static/images/moveSprite.gif)

## Step 4 @fullscreen
Now let's use a ``||input:on button||`` event block to control our sprite's movement instead of the one we previously used. Remove the last block we added to move our sprite and drag it to the menu to delete it. Drag in two ``||input:on button||`` event blocks. Set one to "pressed" and the other to "released".

```blocks
input.buttonA.onEvent(ButtonEvent.Down, function () {
	
})
input.buttonA.onEvent(ButtonEvent.Up, function () {
	
})
```

## Step 5 @fullscreen

First let's position our Jumper near the bottom of the screen where we want him to do his jumping. We do this by dragging in the ``||sprites:set position||`` block into the ``||loops:on start||`` block at the bottom. Make sure to change the name to our "Jumper" sprite and set the x to 20 and the y to 55. This will put our Jumper at the bottom of the screen slightly to the left. Let's also add a ``||sprites:stay in screen||`` block to the bottom and turn it ``||sprites:ON||``. This will help when we add gravity to keep our Jumper from leaving the screen. 

```blocks
enum SpriteKind {
    Player,
    Enemy
}
enum ActionKind {
    Walking,
    Idle,
    Jumping
}
let Jumper = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . . . . . 1 1 . 1 . . . . 
    . . . 1 1 1 . 1 1 1 . 1 1 1 . . 
    . . . 1 1 1 . . 1 1 1 . 1 1 1 . 
    . . . 1 1 1 1 1 1 1 . . . 1 . . 
    . . . . . 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 . . . 1 1 1 1 . . . . 
    . . . 1 1 . . 1 1 1 1 1 . . . . 
    . . . 1 1 . . 1 1 1 1 1 . . . . 
    . . . . 1 1 . 1 1 . 1 . . . . . 
    . . . . . 1 1 1 . 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    `, SpriteKind.Player)
let anim = animation.createAnimation(ActionKind.Walking, 200)
anim.addAnimationFrame(img`
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . 1 1 . 1 . . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 . . . . 
    . . 1 1 1 1 . 1 1 1 . 1 1 1 . . 
    . . 1 1 1 1 1 1 1 . . . 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
    . 1 1 . . . . . . . . 1 . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 . . . . 
    . 1 1 1 1 1 . 1 1 1 1 . . . . . 
    . 1 1 . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . 1 1 . 1 . . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 . . . . 
    . . 1 1 1 1 . 1 1 1 . 1 1 1 . . 
    . . 1 1 1 1 1 1 1 . . . 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
    . 1 1 . . . . . . . . 1 . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 . . . . 
    . 1 1 1 1 1 . 1 1 1 1 . . . . . 
    . 1 1 . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . 1 1 . 1 . . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 1 . . . 
    . . 1 1 1 . . 1 1 1 . 1 1 1 . . 
    . . 1 1 1 1 1 1 1 . . . 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . . 
    . . 1 1 . . . . . . 1 . . . . . 
    . . 1 . 1 1 1 1 . 1 . . . . . . 
    . . . 1 1 1 . 1 1 1 1 1 . . . . 
    . . . . 1 1 . . 1 1 1 1 . . . . 
    . . . . 1 1 1 1 . . . . . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . . . . . 1 1 . 1 . . . . 
    . . . 1 1 1 . 1 1 1 . 1 1 1 . . 
    . . . 1 1 1 . . 1 1 1 . 1 1 1 . 
    . . . 1 1 1 1 1 1 1 . . . 1 . . 
    . . . . . 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    1 1 1 1 . 1 1 1 1 1 1 1 1 1 1 . 
    1 1 . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 . . . . . . . 1 . 1 1 . 
    . . 1 1 . 1 1 1 1 1 . . 1 1 1 . 
    . . 1 1 1 1 1 . . . 1 1 1 1 1 . 
    . . 1 1 . . . . . . . . . . . . 
    . . 1 1 1 1 . . . . . . . . . . 
    `)
animation.attachAnimation(Jumper, anim)
animation.setAction(Jumper, ActionKind.Walking)
sprites.controlSprite(Jumper, 100, 100)
Jumper.setFlag(SpriteFlag.StayInScreen, true)

```

## Step 6 @fullscreen
Now let's make our Jumper jump!. We'll use gravity inside the game engine to do this. Inside each ``||input:on button||`` event block, drag in a ``||sprite: change mySprite position||`` block. Change the sprite we're controlling to "Jumper" and both blocks to "vy (velocity y)". In our "released" event change the value to 200, and in the "pressed" event change the value to -200. When the button is released there will be a gravity of 200 pulling it down. When we press "A" gravity will pull in the opposite direction, until we land on the ground.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
enum ActionKind {
    Walking,
    Idle,
    Jumping
}
input.buttonA.onEvent(ButtonEvent.Down, function () {
    Jumper.vy += -200
})
input.buttonA.onEvent(ButtonEvent.Up, function () {
    Jumper.vy += 200
})
let Jumper: Sprite = null
Jumper = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . . . . . 1 1 . 1 . . . . 
    . . . 1 1 1 . 1 1 1 . 1 1 1 . . 
    . . . 1 1 1 . . 1 1 1 . 1 1 1 . 
    . . . 1 1 1 1 1 1 1 . . . 1 . . 
    . . . . . 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 . . . 1 1 1 1 . . . . 
    . . . 1 1 . . 1 1 1 1 1 . . . . 
    . . . 1 1 . . 1 1 1 1 1 . . . . 
    . . . . 1 1 . 1 1 . 1 . . . . . 
    . . . . . 1 1 1 . 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    `, SpriteKind.Player)
let anim = animation.createAnimation(ActionKind.Walking, 200)
anim.addAnimationFrame(img`
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . 1 1 . 1 . . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 . . . . 
    . . 1 1 1 1 . 1 1 1 . 1 1 1 . . 
    . . 1 1 1 1 1 1 1 . . . 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
    . 1 1 . . . . . . . . 1 . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 . . . . 
    . 1 1 1 1 1 . 1 1 1 1 . . . . . 
    . 1 1 . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . 1 1 . 1 . . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 . . . . 
    . . 1 1 1 1 . 1 1 1 . 1 1 1 . . 
    . . 1 1 1 1 1 1 1 . . . 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
    . 1 1 . . . . . . . . 1 . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 . . . . 
    . 1 1 1 1 1 . 1 1 1 1 . . . . . 
    . 1 1 . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . 1 1 . 1 . . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 1 . . . 
    . . 1 1 1 . . 1 1 1 . 1 1 1 . . 
    . . 1 1 1 1 1 1 1 . . . 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . . 
    . . 1 1 . . . . . . 1 . . . . . 
    . . 1 . 1 1 1 1 . 1 . . . . . . 
    . . . 1 1 1 . 1 1 1 1 1 . . . . 
    . . . . 1 1 . . 1 1 1 1 . . . . 
    . . . . 1 1 1 1 . . . . . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . . . . . 1 1 . 1 . . . . 
    . . . 1 1 1 . 1 1 1 . 1 1 1 . . 
    . . . 1 1 1 . . 1 1 1 . 1 1 1 . 
    . . . 1 1 1 1 1 1 1 . . . 1 . . 
    . . . . . 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    1 1 1 1 . 1 1 1 1 1 1 1 1 1 1 . 
    1 1 . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 . . . . . . . 1 . 1 1 . 
    . . 1 1 . 1 1 1 1 1 . . 1 1 1 . 
    . . 1 1 1 1 1 . . . 1 1 1 1 1 . 
    . . 1 1 . . . . . . . . . . . . 
    . . 1 1 1 1 . . . . . . . . . . 
    `)
animation.attachAnimation(Jumper, anim)
animation.setAction(Jumper, ActionKind.Walking)
Jumper.setPosition(20, 55)
Jumper.setFlag(SpriteFlag.StayInScreen, true)
```

## Step 7 @unplugged
Our Jumper is now jumping, in the next tutorial we'll give him something to jump over. 

![Jumping Sprite](docs/static/images/jumpingSprite.gif)

