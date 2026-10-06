```template
\\
```
```package
brainbot
```
# BrainBot Distance Sensor

## Step 1 @unplugged

In this tutorial we'll use the BrainBot distance sensor to measure the distance from an object and then program the BrainBot to react to the object. 

![BrainPad Brainbot Distance](docs/static/images/distance.gif)

## Step 2 @unplugged

In the tutorial the BrainBot extension is already loaded. If we are making our own BrainBot program we need to add the BrainBot extension. Under the 'Advanced' tab on the side menu at the very bottom click on 'Extensions' at the very bottom. Click on BrainBot to load the extension. 

![BrainPad extension image](docs/static/images/brainbot.jpg)

## Step 3 @fullscreen

We'll use the ``||loops:forever||`` block since we want to continuiosly check the distance sensor. We'll need to drag in a ``||loops:while||`` loop block.


```blocks
forever(function () {
    while (false) {
    	
    }
})
```
## Step 4 @fullscreen

Inside our ``||loops:while||`` loop block. Let's drag in the a ``||logic:comparison||`` block where condition is currently set to ``||loops:false||``. 


```blocks
forever(function () {
    while (0 == 0) {
    	
    }
})
```
## Step 5 @fullscreen

Since we want to check the distance an object is away from the BrainBot we need to read the distance sensor. Inside the ``||logic:comparison||`` block add the ``||brainbot:read distance||`` block

```blocks
forever(function () {
    while (brainbot.ReadDistanceSensor() == 0) {
    	
    }
})
```
## Step 6 @fullscreen

The distance sensor reads in centimeters. So let's check for a value less than 5 centimeters away. To do this we need to change the comparitor to LESS than. Set the value in the block to 5.  

```blocks
forever(function () {
    while (brainbot.ReadDistanceSensor() < 5) {
    	
    }
})
```
## Step 7 @fullscreen

Right now the program reads the sensor but doesn't do anything. Let's make the BrainBot back-up when our hand gets close. We need to add a ``||brainbot:Move||`` block. ``||loops:while||`` loop. Change the direction to back. We can leave the speed at 50. 


```blocks
forever(function () {
    while (brainbot.ReadDistanceSensor() < 5) {
        brainbot.Move(brainbot.MoveDirection.Back, 50)
        
    }
})
```
## Step 8 @fullscreen

If we ran the code now on the BrainBot when we put our hand in front of the sensor the BrainBot would runaway and keep going. We need to make it only go back for a short time than stop. We can acheive this by adding a 
``||loops:pause||`` block and followed by a ``||brainbot:stop||`` block. The pause is how long the BrainBot will go backwards before it stops. Set this to 100 milliseconds. 


```blocks
forever(function () {
    while (brainbot.ReadDistanceSensor() < 5) {
        brainbot.Move(brainbot.MoveDirection.Back, 50)
        pause(100)
        brainbot.Stop()
    }
})
```
## Step 9 @fullscreen

The distance sensor is now controlling the BrainBot's movement, let's add some lights to make it more fun! How about we make the lights green when moving and red when it's stopped. We'll do green first. We're going to add three blocks, one ``||brainbot:Set headlight||`` block and two ``||brainbot:Set taillight||`` blocks. 
Make one of the ``||brainbot:Set taillight||`` blocks to left and other to right. Drag in the ``||brainbot:red||`` color block into all the 3 blocks and change the value to GREEN. Put all three ``||brainbot:light||`` blocks in between
the ``||brainbot:Move||`` block. ``||loops:pause block||``


```blocks
forever(function () {
    while (brainbot.ReadDistanceSensor() < 5) {
        brainbot.Move(brainbot.MoveDirection.Back, 50)
        brainbot.HeadlightColor(brainbot.colors(NeoPixelColors.Green))
        brainbot.TaillightColor(brainbot.TurnDirection.Left, brainbot.colors(NeoPixelColors.Green))
        brainbot.TaillightColor(brainbot.TurnDirection.Right, brainbot.colors(NeoPixelColors.Green))
        pause(100)
        brainbot.Stop()
    }
})
```
## Step 10 @fullscreen

Now we can add three more ``||brainbot:light||`` blocks just like we did. But this time below the ``||loops:pause||`` block, and drag in the ``||brainbot:red||`` color block this time.

```blocks
forever(function () {
    while (brainbot.ReadDistanceSensor() < 5) {
        brainbot.Move(brainbot.MoveDirection.Back, 50)
        brainbot.HeadlightColor(brainbot.colors(NeoPixelColors.Green))
        brainbot.TaillightColor(brainbot.TurnDirection.Left, brainbot.colors(NeoPixelColors.Green))
        brainbot.TaillightColor(brainbot.TurnDirection.Right, brainbot.colors(NeoPixelColors.Green))
        pause(100)
        brainbot.HeadlightColor(brainbot.colors(NeoPixelColors.Red))
        brainbot.TaillightColor(brainbot.TurnDirection.Left, brainbot.colors(NeoPixelColors.Red))
        brainbot.TaillightColor(brainbot.TurnDirection.Right, brainbot.colors(NeoPixelColors.Red))
        brainbot.Stop()
    }
})
```
## Step 10 @unplugged

The BrainBot is now being controlled by the distance sensor and the lights change based on what it sees. Try changing the values and colors to see what happens.  

![BrainPad Brainbot](docs/static/images/distance.gif)