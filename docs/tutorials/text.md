# Text

## Step 1 @unplugged

You can display lots of things on the BrainPad Pulse's display. One useful thing is displaying text. We'll create a string variable and display it on screen then change the variable when we press the buttons. 

![BrainPad buzzer image](docs/static/images/display.jpg)

## Step 2 @fullscreen

To put text on the screen we can find first block we need found under ``||display:Display||`` on the side menu. Grab the ``||display:show string||`` block. This will display "Hello World" on the very first row. The BrainPad Pulse can display up to 6 rows of text. We can also center any text by adding extra spaces until it looks the way we want on the simulator. 

```blocks
forever(function () {
    display.showString("Hello world", 1)
})
```

## Step 3 @fullscreen

Let's add a second ``||display:show string||`` block. This time let's change the words inside the block to say "My name is" on the 2nd line.

```blocks
forever(function () {
    display.showString("Hello world", 1)
    display.showString("My Name is", 2)
})
```

## Step 4 @fullscreen

Now let's make a variable to hold our name, we'll later use this variable to switch between our first and last name. Under ``||variables:Variables||`` click ``||variables:Make a Variables...||``. Name our new variable ``||variables:name||`` .

![create a variable](docs/static/images/create-variable.jpg)

## Step 5 @fullscreen

Under ``||variables:Variables||`` grab the newly created ``||variables:set name to||`` block into ``||loops:on start||`` block of our project. Don't worry about the value of the variable yet. We'll set that in the next step.

```blocks
let name = 0
name = 0
```

## Step 6 @fullscreen

The new variable we created by default is a number. We need it to be text. To change the parameter, we need to go under 'Advanced' tab 
and select ``||text:text||`` menu. We need to grab the ``||text:""||`` double quotes block at the top and drag it into the ``||variable:set name to||`` block. We can leave it blank still. 

```blocks
let name = ""
```

## Step 7 @fullscreen

Add a third ``||display:show string||`` block to our ``||loops:forever||`` loop. Set it to line 3. This time drag in our ``||variable:name||`` variable block into block. 

```blocks
forever(function () {
    display.showString("Hello world", 1)
    display.showString("My Name is", 2)
    display.showString(name, 3)
})
```

## Step 8 @fullscreen

We have the basic structure of the program, now we need to add buttons blocks. Under ``||input:Input||`` grab two ``||input:on button A pressed||`` blocks to the workspace. Change one of them from A to B. 

```blocks
input.buttonA.onEvent(ButtonEvent.Down, function () {
	
})
input.buttonB.onEvent(ButtonEvent.Down, function () {
	
})
```

## Step 9 @fullscreen

We need to drag a ``||variables:set name to||`` block into each of our Button Events. Also don't forget we need to change
the ``||variables:0||`` to our ``||variables:""||`` quotes block. Remember it's found under ``||text:text||``. Type your first name in the A Event, and last name in the B Event. Try it on the BrainPad Pulse.

```blocks
input.buttonA.onEvent(ButtonEvent.Down, function () {
    name = "John"
})
input.buttonB.onEvent(ButtonEvent.Down, function () {
    name = "Smith"
})
```

## Step 10 @unplugged

Awesome, we're using the display, buttons, and a variable to hold our first and last name. When we press A we see our first name, when we press B we see our last name. 

![BrainPad Display](docs/static/images/displayText.gif)