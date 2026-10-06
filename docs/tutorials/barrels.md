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

# Adding Obstacles

## Step 1 @unplugged

Now we're going to add barrels for our Jumper to jump over.  

![BrainPad Animated Sprite](docs/static/images/barrels.gif)

## Step 2 @fullscreen

The first step is create a new barrel sprite. We do this by dragging in a new ``||sprites:set mySprite||`` block into our project. put this 
just under our Jumper sprite. We put it there so all the sprites we first create can be found in the same spot. Change the name from mySprite to the New Variable 'Barrel'. Click in the empty area and select the `Gallery` tab at the top. Select the first
barrel image. Set the sprite kind to ``||sprites:enemy||``

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let Jumper = sprites.create(img`
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
    . . 1 1 . . . 1 1 1 1 . . . . . 
    . . 1 1 . . 1 1 1 1 1 . . . . . 
    . . 1 1 . . 1 1 1 1 1 . . . . . 
    . . . 1 1 . 1 1 . 1 . . . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    `, SpriteKind.Enemy)
let Barrel = sprites.create(img`
    . . . . . . . . 
    . . 1 1 1 . . . 
    . 1 . . . 1 . . 
    1 . . . 1 . 1 . 
    1 . 1 . 1 . 1 . 
    1 . . . 1 . 1 . 
    . 1 . . . 1 . . 
    . . 1 1 1 . . . 
    `, SpriteKind.Enemy)

```
## Step 3 @fullscreen

Now it's time to animate our barrels. Just like we did our Jumper. You may remember, the first step add and name our new animation. We do this
by adding the ``||animation:set anim to||`` block. Let's drag this block into our project just below the one we made for our Jumper let's create a new
name for this animation and call it ``||animation:rolling||``. We can leave the type of animation to Walking for this project. Change the interval to 200 milliseconds in the block. 

```blocks
enum SpriteKind {
    Player,
    Enemy
}
enum ActionKind {
    Walking
    Idle,
    Jumping
}
let mySprite = sprites.create(img`
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
    `, SpriteKind.Player)
let barrel = sprites.create(img`
    . . . . . . . . 
    . . 1 1 1 . . . 
    . 1 . . . 1 . . 
    1 . 1 . . . 1 . 
    1 . 1 . 1 . 1 . 
    1 . 1 . . . 1 . 
    . 1 . . . 1 . . 
    . . 1 1 1 . . . 
    `, SpriteKind.Enemy)
let anim = animation.createAnimation(ActionKind.Walking, 200)
let rolling = animation.createAnimation(ActionKind.Walking, 200)
```
## Step 4 @fullscreen

Now that we have a named animation we can add the remaining barrel images to the animation. This is done by selecting the ``||animation:add frame||`` block to our project. We'll need 4 total one for each frame of the barrel.
Add these just below the frames for our Jumper. Click in the grey area and add one of each of the 4 barrel image. Each one is slightly different, change the name to rolling. 

```blocks
enum SpriteKind {
    Player,
    Enemy
}
enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Rolling,
    Jump
}
let Jumper = sprites.create(img`
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
    . . 1 1 . . . 1 1 1 1 . . . . . 
    . . 1 1 . . 1 1 1 1 1 . . . . . 
    . . 1 1 . . 1 1 1 1 1 . . . . . 
    . . . 1 1 . 1 1 . 1 . . . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    `, SpriteKind.Player)
let Barrel = sprites.create(img`
    . . 1 1 1 1 . . 
    . 1 . . . . 1 . 
    1 . . 1 . . . 1 
    1 . 1 . . . . 1 
    1 . . . 1 . . 1 
    1 . . . . . . 1 
    . 1 . . . . 1 . 
    . . 1 1 1 1 . . 
    `, SpriteKind.Enemy)
let anim = animation.createAnimation(ActionKind.Walking, 200)
let rolling = animation.createAnimation(ActionKind.Walking, 200)
anim.addAnimationFrame(img`
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . 1 1 . 1 . . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 1 . . . 
    . . 1 1 1 . . 1 1 1 . 1 1 1 . . 
    . . 1 1 1 1 1 1 1 . . . 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . . 
    . . 1 1 . . . 1 1 1 1 . . . . . 
    . . 1 1 . . 1 1 1 1 1 . . . . . 
    . . 1 1 . . 1 1 1 1 1 . . . . . 
    . . . 1 1 . 1 1 . 1 . . . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . . . . . 1 1 . 1 . . . . 
    . . . 1 1 1 . 1 1 1 . 1 1 . . . 
    . . . 1 1 1 1 . 1 1 1 . 1 1 1 . 
    . . . 1 1 1 1 1 1 1 . . . 1 . . 
    . . . . . 1 1 1 1 1 1 1 1 . . . 
    . . . . . . 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 . . . . . . . . 1 . . . 
    . . . 1 1 1 . 1 1 1 . 1 1 . . . 
    . . 1 1 1 1 1 . 1 1 1 1 . . . . 
    . . 1 1 . . . . 1 1 1 . . . . . 
    . . . . . . . . 1 1 1 1 . . . . 
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
rolling.addAnimationFrame(img`
    . . 1 1 1 1 . . 
    . 1 . . . . 1 . 
    1 . . 1 . . . 1 
    1 . 1 . . 1 . 1 
    1 . 1 . . 1 . 1 
    1 . . 1 . . . 1 
    . 1 . . . . 1 . 
    . . 1 1 1 1 . . 
    `)
rolling.addAnimationFrame(img`
    . . 1 1 1 1 . . 
    . 1 . . . . 1 . 
    1 . . 1 1 . . 1 
    1 . 1 . . 1 . 1 
    1 . . . . . . 1 
    1 . . 1 1 . . 1 
    . 1 . . . . 1 . 
    . . 1 1 1 1 . . 
    `)
rolling.addAnimationFrame(img`
    . . 1 1 1 1 . . 
    . 1 . . . . 1 . 
    1 . . . 1 . . 1 
    1 . 1 . . 1 . 1 
    1 . 1 . . 1 . 1 
    1 . . . 1 . . 1 
    . 1 . . . . 1 . 
    . . 1 1 1 1 . . 
    `)
rolling.addAnimationFrame(img`
    . . 1 1 1 1 . . 
    . 1 . . . . 1 . 
    1 . . 1 1 . . 1 
    1 . . . . . . 1 
    1 . 1 . . 1 . 1 
    1 . . 1 1 . . 1 
    . 1 . . . . 1 . 
    . . 1 1 1 1 . . 
    `)
```
## Step 5 @fullscreen
Now we need to attach the newly created animation to our Barrel sprite and then activate it. Grab the ``||animation:attach animation||`` block and the ``||animation:activate animation||`` block. Place these just below blocks that attach and activate the Jumper.
Change the ``||animation:attach animation||`` first parameter to ``||animation:rolling||`` and the the second parameter to ``||animation:Barrel||``. In the ``||animation:activate animation||`` block, change the ``||animation:mySprite||`` to ``||animation:Barrel||``

```blocks
enum SpriteKind {
    Player,
    Enemy
}
enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Rolling,
    Jump,
    Swimming
}
let Jumper = sprites.create(img`
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
    . . 1 1 . . . 1 1 1 1 . . . . . 
    . . 1 1 . . 1 1 1 1 1 . . . . . 
    . . 1 1 . . 1 1 1 1 1 . . . . . 
    . . . 1 1 . 1 1 . 1 . . . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    `, SpriteKind.Player)
let Barrel = sprites.create(img`
    . . 1 1 1 1 . . 
    . 1 . . . . 1 . 
    1 . . 1 . . . 1 
    1 . 1 . . . . 1 
    1 . . . 1 . . 1 
    1 . . . . . . 1 
    . 1 . . . . 1 . 
    . . 1 1 1 1 . . 
    `, SpriteKind.Enemy)
let anim = animation.createAnimation(ActionKind.Walking, 200)
let rolling = animation.createAnimation(ActionKind.Walking, 200)
anim.addAnimationFrame(img`
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . 1 1 . 1 . . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 1 . . . 
    . . 1 1 1 . . 1 1 1 . 1 1 1 . . 
    . . 1 1 1 1 1 1 1 . . . 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . . 
    . . 1 1 . . . 1 1 1 1 . . . . . 
    . . 1 1 . . 1 1 1 1 1 . . . . . 
    . . 1 1 . . 1 1 1 1 1 . . . . . 
    . . . 1 1 . 1 1 . 1 . . . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . . . . . 1 1 . 1 . . . . 
    . . . 1 1 1 . 1 1 1 . 1 1 . . . 
    . . . 1 1 1 1 . 1 1 1 . 1 1 1 . 
    . . . 1 1 1 1 1 1 1 . . . 1 . . 
    . . . . . 1 1 1 1 1 1 1 1 . . . 
    . . . . . . 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 . . . . . . . . 1 . . . 
    . . . 1 1 1 . 1 1 1 . 1 1 . . . 
    . . 1 1 1 1 1 . 1 1 1 1 . . . . 
    . . 1 1 . . . . 1 1 1 . . . . . 
    . . . . . . . . 1 1 1 1 . . . . 
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
rolling.addAnimationFrame(img`
    . . 1 1 1 1 . . 
    . 1 . . . . 1 . 
    1 . . 1 . . . 1 
    1 . 1 . . 1 . 1 
    1 . 1 . . 1 . 1 
    1 . . 1 . . . 1 
    . 1 . . . . 1 . 
    . . 1 1 1 1 . . 
    `)
rolling.addAnimationFrame(img`
    . . 1 1 1 1 . . 
    . 1 . . . . 1 . 
    1 . . 1 1 . . 1 
    1 . 1 . . 1 . 1 
    1 . . . . . . 1 
    1 . . 1 1 . . 1 
    . 1 . . . . 1 . 
    . . 1 1 1 1 . . 
    `)
rolling.addAnimationFrame(img`
    . . 1 1 1 1 . . 
    . 1 . . . . 1 . 
    1 . . . 1 . . 1 
    1 . 1 . . 1 . 1 
    1 . 1 . . 1 . 1 
    1 . . . 1 . . 1 
    . 1 . . . . 1 . 
    . . 1 1 1 1 . . 
    `)
rolling.addAnimationFrame(img`
    . . 1 1 1 1 . . 
    . 1 . . . . 1 . 
    1 . . 1 1 . . 1 
    1 . . . . . . 1 
    1 . 1 . . 1 . 1 
    1 . . 1 1 . . 1 
    . 1 . . . . 1 . 
    . . 1 1 1 1 . . 
    `)
animation.attachAnimation(Jumper, anim)
animation.attachAnimation(Barrel, rolling)
animation.setAction(Jumper, ActionKind.Walking)
animation.setAction(Barrel, ActionKind.Walking)
Jumper.setPosition(20, 55)
Jumper.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(100, function () {
	
})

```
## Step 6 @fullscreen
Both animations in our project are now working but the Barrel is floating in the air. We need to place it on the same and move it towards our Jumper. 
first start by placing the Barrel at the other end of the screen. Drag in a ``||sprite:set mySprite position||`` block just below where we set the position of our Jumper. Select ``||sprite:Barrel||`` from the blocks drop down, and set the ``||Sprites:x||`` to 120, and ``||Sprites:y||`` to 60.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Rolling,
    Jump,
    Swimming
}
let Jumper = sprites.create(img`
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
    . . 1 1 . . . 1 1 1 1 . . . . . 
    . . 1 1 . . 1 1 1 1 1 . . . . . 
    . . 1 1 . . 1 1 1 1 1 . . . . . 
    . . . 1 1 . 1 1 . 1 . . . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    `, SpriteKind.Player)
let Barrel = sprites.create(img`
    . . 1 1 1 1 . . 
    . 1 . . . . 1 . 
    1 . . 1 . . . 1 
    1 . 1 . . . . 1 
    1 . . . 1 . . 1 
    1 . . . . . . 1 
    . 1 . . . . 1 . 
    . . 1 1 1 1 . . 
    `, SpriteKind.Enemy)
let anim = animation.createAnimation(ActionKind.Walking, 200)
let rolling = animation.createAnimation(ActionKind.Walking, 200)
anim.addAnimationFrame(img`
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . 1 1 . 1 . . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 1 . . . 
    . . 1 1 1 . . 1 1 1 . 1 1 1 . . 
    . . 1 1 1 1 1 1 1 . . . 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . . 
    . . 1 1 . . . 1 1 1 1 . . . . . 
    . . 1 1 . . 1 1 1 1 1 . . . . . 
    . . 1 1 . . 1 1 1 1 1 . . . . . 
    . . . 1 1 . 1 1 . 1 . . . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . . . . . 1 1 . 1 . . . . 
    . . . 1 1 1 . 1 1 1 . 1 1 . . . 
    . . . 1 1 1 1 . 1 1 1 . 1 1 1 . 
    . . . 1 1 1 1 1 1 1 . . . 1 . . 
    . . . . . 1 1 1 1 1 1 1 1 . . . 
    . . . . . . 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 . . . . . . . . 1 . . . 
    . . . 1 1 1 . 1 1 1 . 1 1 . . . 
    . . 1 1 1 1 1 . 1 1 1 1 . . . . 
    . . 1 1 . . . . 1 1 1 . . . . . 
    . . . . . . . . 1 1 1 1 . . . . 
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
rolling.addAnimationFrame(img`
    . . 1 1 1 1 . . 
    . 1 . . . . 1 . 
    1 . . 1 . . . 1 
    1 . 1 . . 1 . 1 
    1 . 1 . . 1 . 1 
    1 . . 1 . . . 1 
    . 1 . . . . 1 . 
    . . 1 1 1 1 . . 
    `)
rolling.addAnimationFrame(img`
    . . 1 1 1 1 . . 
    . 1 . . . . 1 . 
    1 . . 1 1 . . 1 
    1 . 1 . . 1 . 1 
    1 . . . . . . 1 
    1 . . 1 1 . . 1 
    . 1 . . . . 1 . 
    . . 1 1 1 1 . . 
    `)
rolling.addAnimationFrame(img`
    . . 1 1 1 1 . . 
    . 1 . . . . 1 . 
    1 . . . 1 . . 1 
    1 . 1 . . 1 . 1 
    1 . 1 . . 1 . 1 
    1 . . . 1 . . 1 
    . 1 . . . . 1 . 
    . . 1 1 1 1 . . 
    `)
rolling.addAnimationFrame(img`
    . . 1 1 1 1 . . 
    . 1 . . . . 1 . 
    1 . . 1 1 . . 1 
    1 . . . . . . 1 
    1 . 1 . . 1 . 1 
    1 . . 1 1 . . 1 
    . 1 . . . . 1 . 
    . . 1 1 1 1 . . 
    `)
animation.attachAnimation(Jumper, anim)
animation.attachAnimation(Barrel, rolling)
animation.setAction(Jumper, ActionKind.Walking)
animation.setAction(Barrel, ActionKind.Walking)
Jumper.setPosition(20, 55)
Barrel.setPosition(120, 60)
Jumper.setFlag(SpriteFlag.StayInScreen, true)

```

## Step 7 @fullscreen

We have our Jumper and Barrel at opposite ends of the screen we can now move our barrel towards the Jumper. This is easy and only requires we add one block. 
Grab the ``||sprite:set mySprite x (horizontal position)||`` block. Select  ``||sprite:Barrel||`` from the drop down list, change the parameter to ``||sprite:vx(velocity x)||``. Set the value to -50. Place the block at the very bottom of the ``||loops:onStart||`` block.
The barrel will now move towards our player and off the screen.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Rolling,
    Jump,
    Swimming
}
let Jumper = sprites.create(img`
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
    . . 1 1 . . . 1 1 1 1 . . . . . 
    . . 1 1 . . 1 1 1 1 1 . . . . . 
    . . 1 1 . . 1 1 1 1 1 . . . . . 
    . . . 1 1 . 1 1 . 1 . . . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    `, SpriteKind.Player)
let Barrel = sprites.create(img`
    . . 1 1 1 1 . . 
    . 1 . . . . 1 . 
    1 . . 1 . . . 1 
    1 . 1 . . . . 1 
    1 . . . 1 . . 1 
    1 . . . . . . 1 
    . 1 . . . . 1 . 
    . . 1 1 1 1 . . 
    `, SpriteKind.Enemy)
let anim = animation.createAnimation(ActionKind.Walking, 200)
let rolling = animation.createAnimation(ActionKind.Walking, 200)
anim.addAnimationFrame(img`
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . 1 1 . 1 . . . . . 
    . . 1 1 1 . 1 1 1 . 1 1 1 . . . 
    . . 1 1 1 . . 1 1 1 . 1 1 1 . . 
    . . 1 1 1 1 1 1 1 . . . 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . . 
    . . 1 1 . . . 1 1 1 1 . . . . . 
    . . 1 1 . . 1 1 1 1 1 . . . . . 
    . . 1 1 . . 1 1 1 1 1 . . . . . 
    . . . 1 1 . 1 1 . 1 . . . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . . . . . 1 1 . 1 . . . . 
    . . . 1 1 1 . 1 1 1 . 1 1 . . . 
    . . . 1 1 1 1 . 1 1 1 . 1 1 1 . 
    . . . 1 1 1 1 1 1 1 . . . 1 . . 
    . . . . . 1 1 1 1 1 1 1 1 . . . 
    . . . . . . 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 . . . . . . . . 1 . . . 
    . . . 1 1 1 . 1 1 1 . 1 1 . . . 
    . . 1 1 1 1 1 . 1 1 1 1 . . . . 
    . . 1 1 . . . . 1 1 1 . . . . . 
    . . . . . . . . 1 1 1 1 . . . . 
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
rolling.addAnimationFrame(img`
    . . 1 1 1 1 . . 
    . 1 . . . . 1 . 
    1 . . 1 . . . 1 
    1 . 1 . . 1 . 1 
    1 . 1 . . 1 . 1 
    1 . . 1 . . . 1 
    . 1 . . . . 1 . 
    . . 1 1 1 1 . . 
    `)
rolling.addAnimationFrame(img`
    . . 1 1 1 1 . . 
    . 1 . . . . 1 . 
    1 . . 1 1 . . 1 
    1 . 1 . . 1 . 1 
    1 . . . . . . 1 
    1 . . 1 1 . . 1 
    . 1 . . . . 1 . 
    . . 1 1 1 1 . . 
    `)
rolling.addAnimationFrame(img`
    . . 1 1 1 1 . . 
    . 1 . . . . 1 . 
    1 . . . 1 . . 1 
    1 . 1 . . 1 . 1 
    1 . 1 . . 1 . 1 
    1 . . . 1 . . 1 
    . 1 . . . . 1 . 
    . . 1 1 1 1 . . 
    `)
rolling.addAnimationFrame(img`
    . . 1 1 1 1 . . 
    . 1 . . . . 1 . 
    1 . . 1 1 . . 1 
    1 . . . . . . 1 
    1 . 1 . . 1 . 1 
    1 . . 1 1 . . 1 
    . 1 . . . . 1 . 
    . . 1 1 1 1 . . 
    `)
animation.attachAnimation(Jumper, anim)
animation.attachAnimation(Barrel, rolling)
animation.setAction(Jumper, ActionKind.Walking)
animation.setAction(Barrel, ActionKind.Walking)
Jumper.setPosition(20, 55)
Barrel.setPosition(120, 60)
Jumper.setFlag(SpriteFlag.StayInScreen, true)
Barrel.vx = -50
```

## Step 9 @unplugged

Our game currently only has one Barrel. In the next tutorial we'll add more Barrels and detect when the Jumper and Barrels collide and make a game out of it.  

![BrainPad Animated Sprite](docs/static/images/barrels.gif)
