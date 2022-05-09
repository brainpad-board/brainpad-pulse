```template
\\
```


# Buttons

## Step 1 @unplugged

The BrainPad Pulse is equipped with two directional buttons (A and B) that we can program. In this tutorial we'll use the BrainPad buttons to turn on change images on the display. 

![BrainPad buzzer image](docs/static/images/buttons.jpg)

## Step 2 @unplugged

We use buttons every day to communicate with electronic devices all around us. Even the keyboard on your computer is made up of buttons. 

![BrainPad buzzer image](docs/static/images/keys.jpg)

## Step 3 @fullscreen

To get started let's first drag the image of eyes looking straight ahead, into the ``||loops:onStart||`` block. The eyes block we need is found under DISPLAY on the side menu bar. Grab the ``||display:showImage||`` block. Then select the eyes image. 

 ```blocks
display.showImage(background.img05_eyes1)
```

## Step 4 @fullscreen

Next let's add a block to detect when button A is pressed. We can find the block we need under INPUT. Grab the ``||input:on button||`` block. This type of block is called an 'EVENT' block. Event blocks hold other blocks and are triggered when an event happens. In this case when a button is pressed. 

 ```blocks
input.buttonA.onEvent(ButtonEvent.Down, function () {
	
})
```

## Step 5 @fullscreen

Now let's drag in another ``||display:showImage||`` block and put it inside ``||input:on button||`` block. This time select the image with the eyes looking to the left. 

 ```blocks
input.buttonA.onEvent(ButtonEvent.Down, function () {
    display.showImage(background.img07_eyes3)
})
```

## Step 5 @fullscreen

We've got button A doing something, now let's add button B. Inside the INPUT menu grab another ``||input:on button||`` block. This time we'll switch to use the 'B' button in the drop down of the block.

 ```blocks
input.buttonB.onEvent(ButtonEvent.Down, function () {
	
})
```

## Step 7 @fullscreen

We can add the eyes image looking to the left. Remember it was under the DISPLAY menu. Drag the ``||display:showImage||`` block and place it inside our``||input:on button B||`` block. Now try pressing the A & B buttons inside the simulator. 
 
 ```blocks
input.buttonB.onEvent(ButtonEvent.Click, function () {
    display.showImage(background.img08_eyes4)
})
```

## Step 8 @fullscreen

When we press the A & B buttons the eyes continue to look in the last direction we pressed. We can fix this by adding two more button event blocks to see when the button has been released. Drag in two more button blocks. Set one to A and the other to B, this time change the parameters in both to 'released'

```blocks
input.buttonB.onEvent(ButtonEvent.Up, function () {
	
})
input.buttonA.onEvent(ButtonEvent.Up, function () {
	
})
```

## Step 9 @fullscreen

Finally, drag in the eyes looking straight ahead into both of button blocks we just added. This will show the eyes looking straight ahead when the buttons are NOT pressed. Download the program to your BrainPad Pulse and try it out. 

```blocks
input.buttonB.onEvent(ButtonEvent.Up, function () {
    display.showImage(background.img05_eyes1)
})
input.buttonA.onEvent(ButtonEvent.Up, function () {
    display.showImage(background.img05_eyes1)
})
```