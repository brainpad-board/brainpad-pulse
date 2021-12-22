# Creating and Using Variables

## Step 1 @unplugged

Logic blocks are blocks that we use to determine if something is one way or another. They also allow us to compare things and then decide how the program should act based on what the outcome is. The main block in the Logic menu is the ``||logic:if then||`` block. 

```blocks
forever(function () {
    if (true) {
    	
    }
})
```

## Step 2 @fullscreen

Drag an ``||logic:if then||`` block into the ``||loops:forever||`` block in our project. We put it inside the ``||loops:forever||`` block so we'll always be checking the condition. The default parameter for the block is 'true'. Which means as soon as our program comes to this block it will do whatever is inside. We can change the condition it checks for to determine what we really want to happen. We can leave it for now.  

```blocks
forever(function () {
    if (true) {
    	
    }
})
```

## Step 3 @fullscreen

We're going to use the accelerometer to measure the tilt and then show a string on the display depending on its position. Grab the ``||display:show string||`` block and change the text to "Right". Since we're using the accelerometer we'll need to download our code to the BrainPad to see the results after each step. 

```blocks
forever(function () {
    if (true) {
        display.showString("Right", 1)
    }
})
```

## Step 4 @fullscreen

Now drag a comparison block to replace the true parameter, we use ``||logic:comparison||`` block to compare two different things. We can use it check if a variable is a certain value or greater than a value, we can also use it to compare an accelerometer value to a number. If we just left the value to true, it would automatically display the word "Right" as seen in the simulator without doing anything.  

```blocks
forever(function () {
    if (0 == 0) {
    	
    }
})
```

## Step 5 @fullscreen

Under input grab the ``||input:acceleration||`` block and drag it into the first parameter of the comparison block we just added. 

```blocks
forever(function () {
    if (input.acceleration(Dimension.X) == 0) {
        display.showString("Right", 1)
    }
})
```

## Step 6 @fullscreen

The acceleration outputs a value that is maxed at 1023 in one direction and -1023 on the other direction. The output will be zero right in the middle. Let�s compare the value to be more than 500. Change the equal sign inside the comparison block to greater than (>) and the value to 500. 
 
```blocks
forever(function () {
    if (input.acceleration(Dimension.X) > 500) {
        display.showString("Right", 1)
    }
})
```

## Step 7 @fullscreen

Duplicate the same block and change it to show left when the value is less than -500. 

```blocks
forever(function () {
    if (input.acceleration(Dimension.X) > 500) {
        display.showString("Right", 1)
    }
    if (input.acceleration(Dimension.X) < -500) {
        display.showString("Left", 1)
    }
})
```

## Step 8 @fullscreen

In our example we've created two completely separate ``||logic:if then||`` blocks . The proper way to do this would be to use the 'else condition' inside the ``||logic:if then||`` block and just use one block. Drag the last ``||logic:if then||`` block out of the forever loop but don't delete it yet. Click on the plus sign in the ``||logic:if then||`` block. Drag the ``||display:show string||`` block we left inside the  ``||logic:if then||`` block we just removed and drag it under the "else". Download it the BrainPad Pulse and observe what happens. 

```blocks
forever(function () {
    if (input.acceleration(Dimension.X) > 500) {
        display.showString("Right", 1)
    } else {
        display.showString("Left", 1)
    }
})
```

## Step 9 @fullscreen

This isn't exactly what we need. We need to show the word "Left" when the value is less than (<) -500. If we click on the plus sign in the block again it will give us room to add another condition. Drag the condition block from inside the block we removed earlier and place it here. You can now throw away the old ``||logic:if then||`` block we don't need it anymore. Also move the ``||display:show string||`` block from the bottom of the ``||logic:if then||`` block. 

```blocks
forever(function () {
    if (input.acceleration(Dimension.X) > 500) {
        display.showString("Right", 1)
    } else if (input.acceleration(Dimension.X) < -500) {
        display.showString("Left", 1)
    } else {
    	
    }
})
```

## Step 10 @fullscreen

Now we just need to add a third ``||display:show string||`` block into the bottom of the ``||logic:if then||`` block, we'll change this say "Middle". Our program is complete, we can download the new code to the BrainPad Pulse to see the results. 

```blocks
forever(function () {
    if (input.acceleration(Dimension.X) > 500) {
        display.showString("Right", 1)
    } else if (input.acceleration(Dimension.X) < -500) {
        display.showString("Left", 1)
    } else {
        display.showString("Middle", 1)
    }
})
```






