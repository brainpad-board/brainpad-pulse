# Creating Sprites

## Step 1 @unplugged

We're going to create a Jumper Game and we'll need 'sprites' to do it. A 'sprite' is a 2-dimensional image that is integrated into a larger scene such as a game. A player's character would be a good example of a sprite. 

![BrainPad buzzer image](docs/static/images/sprite1.jpg)

## Step 2 @fullscreen

To create a sprite the first step is to select the ``||sprites:set mySprite||`` block it can be found in the menu below the 'ADVANCED' drop-down. Once you drag in the block click on the 'mySprite' drop down and select 'Rename variable...'. Let's name our variable 'Jumper' since that's the game we'll be creating.


```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)

```

## Step 3 @fullscreen

Click on the Grey empty box inside the block. The sprite editor will pop up. On the side of the sprite editor are the tools used to draw a sprite. Play around with these tools and draw something inside the box. While using the sprite editor try holding down the 'Shift' key. It turns the 'pencil tool' into a 'line tool' and the 'box tool' into a 'circle tool'. 

 ![BrainPad buzzer image](docs/static/images/sprite2.jpg)

## Step 4 @fullscreen

For our game we'll use one of the built-in sprites. To find the built-in sprites click on 'Gallery' at the top of the sprite editor. Scroll down near the end and select the 'Jumper1' sprite. 

 ![BrainPad buzzer image](docs/static/images/sprite3.jpg)

## Step 5 @fullscreen

The sprite appears in the top left corner of the screen We need to change the size of the sprite by clicking at the bottom of the sprite editor and changing 128x64 to 16x16 by clicking on it a few times. Once the proper size is selected the sprite will fill up the sprite canvas and our sprite will now appear in the middle of the screen on the simulator 

 ![BrainPad buzzer image](docs/static/images/sprite4.jpg)

## Step 6 @unplugged

We have a player! In the next tutorial we'll teach him how to walk by animating our sprite. Any sprite you create can be animated. 
