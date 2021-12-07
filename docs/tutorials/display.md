# Display

## Step 1 @unplugged

The BrainPad has an onboard display capable of displaying images, shapes, and text. In this tutorial, we will display several images in a simple animation of a character walking. 

![BrainPad buzzer image](docs/static/images/display.jpg)

## Step 2 @unplugged

Since we're creating an animation, we will want our images to keep playing in a loop, so we'll use the  ``||loops:forever||`` loop already in our project. 

```blocks
loops.forever(function () {
    
})
```
## Step 3 @unplugged

Let's drag in our first image. We can accomplish this by adding a ``||display:show image||`` block. The BrainPad Light Bulb is the default image.

```blocks
forever(function () {
    display.showImage(background.img01_logo1)
})
```

## Step 4 @fullscreen

To make our character animate, we have to select the first image. Click on the Light Bulb image and change it to the 'walker1' image.

![BrainPad buzzer image](docs/static/images/selectframe1.jpg)

## Step 5 @fullscreen

Next, let's add the 2nd frame of our animation. Drag in a second ``||display:show image||`` block. Change this one's image to the 'walker2' image. 

![BrainPad buzzer image](docs/static/images/selectframe2.jpg)

## Step 6 @fullscreen

Drag in a third ``||display:show image||`` block. Change this one's image to the 'walker3' image. 

When we add the third frame of our animation. You'll notice in the simulator, our character is starting to move more naturally 

![BrainPad buzzer image](docs/static/images/animation.gif)

## Step 7 @fullscreen

Finally, we need to add the last frame of our animation, which when complete loops back to the first image in our code, and completes the animation process. Try using other images to create simple animations. In other tutorials we'll use animation blocks that are specifically designed to create animations and attach them to sprites we create.  

```blocks
forever(function () {
    display.showImage(background.img21_walker1)
    display.showImage(background.img22_walker2)
    display.showImage(background.img23_walker3)
    display.showImage(background.img24_walker4)
})
```

