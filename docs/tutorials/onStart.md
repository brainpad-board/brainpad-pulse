# On Start vs Forever Blocks

## Step 1 @unplugged

In this tutorial we explain the difference between the ``||loops:on start||`` and ``||loops:forever||`` blocks. We will also demonstrate how each works. 

![on Start and forever blocks](../static/images/onstartCard.jpg)

## Step 2 @fullscreen

The ``||loops:on start||`` block runs when the BrainPad is first powered up. Any code placed inside the ``||loops:on start||`` block runs only once, at the beginning of your program. 

![on Start and forever blocks](../static/images/onstart.jpg)

## Step 3 @fullscreen

Let's drag the ``||loops:on start||`` block from the LOOPS section into our staging area. It doesn't matter where you put it in the staging area, it will always start first!

![drag in on start block](../static/images/onstart.gif)
 
## Step 4 @fullscreen

To demonstrate how the ``||loops:on start||`` block works. Start by dragging in the ``||led:on||`` block into the ``||loops:on Start||`` block


## Step 5 @fullscreen

Next we will add the ``||loops:pause||`` block followed by the ``||led:off||`` block into the ``||loops:on start||`` block. Just below the first ``||led:on||`` block we just added. 
 

## Step 6 @fullscreen

The LED turns ON then OFF after just 1/2 a second. If you missed it, refresh the simulator and note the LED's change. 



## Step 7 @fullscreen

The ``||loops:forever||`` block is different then the ``||loops:on start||`` block, the code inside the ``||loops:forever||`` block runs forever. Once the last block inside your ``||loops:forever||`` block is executed, the program will go back to the first block inside the ``||loops:forever||`` block and start again, forever. 

![on Start and forever blocks](../static/images/forever.jpg)

## Step 8 @fullscreen

Next will put the exact same blocks inside the ``||loops:forever||`` block. We will add another ``||loops:pause||`` block to the end,  to determine how long the LED remains off. Before looping back to the beginning of the forever block.  

## Step 9 @fullscreen
If you notice in the simulator, the ``||loops:on start||`` block runs first. Immediately followed by the ``||loops:forever||`` block, which continues to blink the LED, until we turn off the device. 


## Step 10 @fullscreen

These two very useful blocks serve an important purpose when programming embedded devices. We can use the ``||loops:on start||`` block to set up things in our program on startup. The part of the program we want to run continuously goes inside the ``||loops:forever||`` block, and loops as long as the device is on. 

![on Start and forever blocks](../static/images/onstartCard.jpg)