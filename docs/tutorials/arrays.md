```ghost
let text_list = ["rose", "daisy", "tulip"]
forever(function () {
    for (let index = 0; index <= text_list.length; index++) {
    	display.showString(text_list[index], 1)
        pause(100)
    }
})
```

# Arrays

## Step 1 @unplugged

Arrays are list that contain several things of the same type. Arrays can hold text, numbers, images...etc. Once the array is created, we can use our program to access any element inside that array. 

![BrainPad Array](docs/static/images/array.jpg)

## Step 2 @fullscreen

In this demonstration, we're going to create an array of text and use a loop to display all the elements in that array. First we need to grab ``||array:set text list||`` block. It can be found under the `Advanced` tab under `Arrays`
Drag it into the ``||loops:on start||`` block.  We're going to use flowers names, but you can put any words or names you like, you can also add as many as you like by click on the ``||array:+||`` inside the block
or remove elements by hitting the ``||array:-||``

```blocks
let text_list = ["rose", "daisy", "tulip"]
```
## Step 3 @unplugged

The values stored in an array are accessed by a number. The first element of an array ALWAYS starts with "0" not "1", the second element is "1" and so on for the entire length of the array. 

![BrainPad Array Elements](docs/static/images/arrayElements.jpg)

## Step 4 @fullscreen

We're going to use a ``||loops:for loop||`` to cycle through our array. Grab the ``||loops:for index from 0 to 4||`` block and drag it into the ``||loops:forever||`` loop. 

```blocks
forever(function () {
    for (let index = 0; index <= 4; index++) {
    	
    }
})
```
## Step 5 @fullscreen
To count through our array instead of hardcoding the number of elements in our array, we'll use a block that stores the ``||array:lengh of array||`` block. Grab it and drag it where the value ``||loops:4||`` is inside the ``||loops:for loop||`` 
Also change the name in the drop down to ``||array:text list||``.

![BrainPad Array](docs/static/images/arrays.jpg)

## Step 6 @unplugged
Unfortunatly the block we dragged in won't quite work yet we need to make one small change to it. Remember how we said the values in an array start at 0 which means our array ends at 2. The ``||array:lengh of array||`` block 
will count 3 elements. So we need to subtract one from the lengh of the array so it will end on the last element, which is 2. Confused yet?

![BrainPad Array Elements](docs/static/images/arrayLength.jpg)

## Step 7 @fullscreen
Pull the  ``||array:lengh of array||`` block out of the ``||loops:for loop||`` and just set it in the workspace. We'll need it again in a moment. Under ``||Math:Math||`` grab the ``||Math:0 - 0||`` block and replace the 
``||loops:4||``

```blocks
forever(function () {
    for (let index = 0; index <= 0 - 0; index++) {
    	
    }
})
```

## Step 8 @fullscreen
Now drag the ``||array:lengh of array||`` block into the first value of the ``||Math:0 - 0||`` block. Change the last value to 1. 

![BrainPad Array](docs/static/images/arrays2.jpg)


## Step 9 @fullscreen
Now the ``||loops:for loop||`` is set up to cycle through all the elements of the array. Let's show them each on the screen. Drag in the ``||Display:show string||`` block into the ``||loops:for loop||``

![BrainPad Array](docs/static/images/arrays3.jpg)

## Step 10 @fullscreen
Now we need to read each value individually in the array. To do this we will use the ``||array:list get value at 0||`` block. It can be found under `Arrays` in the menu. Drag it into our ``||Display:show string||`` block
where we see the string "Hello World". Change the value dropdown from ``||array:list||`` to ``||array:text list||``. 

![BrainPad Array](docs/static/images/arrays4.jpg)

## Step 11 @fullscreen
This will only show the first element of our array, which is 0. We want to increment the number everytime it runs through our ``||loops:for loop||``. We need to use the ``||variables:index||`` variable where
"0" is. Also let's add a ``||loops:pause||`` 100 ms block. To give us time to read the names. 

![BrainPad Array](docs/static/images/arrays5.jpg)

## Step 12 @unplugged
That's it! You now have a better understanding of how arrays work. Arrays can hold things other then just names, they can hold images, sprites, numbers, etc. One rule is that the array must only contain
the same type of elements. You can't mix text and images in the same array. 

![BrainPad Array](docs/static/images/array.jpg)
