# Functions

## Step 1 @unplugged

Functions are used when we need sections of code to repeat or do something over and over again when called. Functions are an import part of programming in every language. 

![BrainPad Function](docs/static/images/function.jpg)

## Step 2 @fullscreen

Functions can be found under the `Advanced` tab on the side menu. Click on `Functions` this brings up the button `Make a Function...`. Click on the Button. 

![BrainPad Function](docs/static/images/make-function.jpg)

## Step 3 @fullscreen

The first thing we need to do is name our function. Click on the block where it says `doSomething`. Let's name ours 'myFunction'. Generally you want to name your functions based on what the function will be doing. But for this demonstration 'myFunction' is fine. 
Don't worry about adding a parameter yet. We'll do that later. 

```blocks
function myFunction () {
	
}
```
## Step 4 @fullscreen

Now we can add any blocks we want to in our new function. Let's turn on the LED, play a sound and show an image on the screen all within the function we created. Drag in the ``||led:set led to||`` block and turn it to ``||led:ON||``. Just below that add a ``||music:play sound||`` block. You can pick the sound you want it to make. 
Finally drag in a ``||display:show image||`` block. You can pick whatever image you want to display. Our function now will do three things everytime we call it.

```blocks
function myFunction () {
    led.setled(true)
    music.playSound(music.sounds(Sounds.PowerUp))
    display.showImage(background.img01_logo1)
}
```
## Step 5 @unplugged

We've created the function now all we need to do is call it when ever we need it inside our program. To call the ``||functions:function||`` we just go back to the same spot we created the function. This time
we'll see blocks have been created since we created ours. There is a new block called ``||functions:call myFunction||``

![BrainPad Function](docs/static/images/callFunction.jpg)

## Step 6 @fullscreen

Drag the ``||functions:call myFunction||`` into the ``||loops:on start||`` block. Now when the program starts the first thing that will happen is ``||functions:call myFunction||``  is called and 
then all the blocks inside the function run. 

```blocks
function myFunction () {
    led.setled(true)
    music.playSound(music.sounds(Sounds.PowerUp))
    display.showImage(background.img01_logo1)
}
myFunction()
```
## Step 7 @unplugged

This may seem like a lot of extra steps to do something simple, but in more complex programs where we need to re-run sections of code at specific times a function is the only way to go. 
Functions can also take in a parameter do something with the parameter and then return a parameter back. Trying playing with these to see what you can do.  

![BrainPad Function](docs/static/images/function.jpg)