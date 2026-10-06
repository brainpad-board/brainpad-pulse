```template
\\
```


# Temperature Sensor

## Step 1 @unplugged

The BrainPad Pulse chip is equipped with a temperture sensor. 

![BrainPad Chip](docs/static/images/temperature.jpg)

## Step 2 @fullscreen

We can read data from the temperature sensor and display the values on the screen. Since we want to read the value over and over to see any change we need to add the blocks we'll need in a ``||loops:forever||`` loop.
First let's add the block to display value. Grab the ``||display:show number||`` block into the ``||loops:forever||`` loop. 

```blocks
forever(function () {
    display.showNumber(0, 1)
})
```
## Step 3 @fullscreen

Now we can add the block to read the tempture data and place it inside ``||display:show number||`` block. The block can be set to either read the value in celsius or fahrenheit. The values won't change
on the simulator but you'll get a good reading when you deploy it to the BrainPad Pulse. 

```blocks
forever(function () {
    display.showNumber(input.temperature(TemperatureUnit.Celsius), 1)
})
```

## Step 4 @unplugged

That's it reading the temperature is one of the easiest thing to do with the BrainPad Pulse. As you learn more you can do differnt things based on the temperature, like graphing or blinking the LED when a certain temperature is reached. 






