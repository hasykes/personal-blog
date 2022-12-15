---
title: "How to Program an ESP-01s With Arduino Uno"
description: "The ESP01s is a handy little microcontroller, but uploading/flashing custom programs can be difficult.  This post covers how I approach this issue with the help of an Arduino Uno."
date: 13 December 2022
---

 With built in WiFi, low cost, and a X GPIO pins available the ESP01s is fantastic for custom home projects.  While a handy little microcontroller, uploading/flashing custom programs to the ESP01s can be difficult for a beginner.  After reading this post, you should understand the concepts of...

 - [Developing custom programs in the Arduino IDE](#developing-custom-programs-in-the-arduino-ide)
 - Connecting your ESP01s to an Arduino Uno
 - Flashing your code to the ESP01s

 # Shopping List
 1. ESP01s - 
 2. Micro USB Buck Converter (12v -> 3.3v) -
    - Power your ESP01s with a microusb charger
 2. Arduino Uno / Starter Kit - 
    - A Starter Kit is not required, but having buttons and basic electronic components on hand makes for easy tinkering!
 3. Jumper Wires - 
    - If you don't get the starter kit
 4. Bread Board - 

 **Note: These are affiliate links.  I receive a small sum if you purchase via these links (at no cost to you!)**

 # Developing Custom Programs in the Arduino IDE
 
 Download the Arduino IDE for your specific OS directly from the arduino.cc website: https://www.arduino.cc/en/software

 Arduino uses a custom language, similar to C++.  If you don't know C++, don't worry because I don't either!  There is a ton of boilerplate code on the web to help you get started and handle most of your use cases with the ESP01s.  For everything else, I'm always happy to try and help, just leave me a comment (If there's no comment function yet... [Email Me!](mailto:hayden@haydensykes.com))

After installing the Arduino IDE, it's time to add some code.  Copy and paste the following into your IDE window.

``` cpp
// Digital Output on LED 


const int LED = 0; // Assigning Pin 4 as the name LED
void setup ()  
{
     pinMode (LED, OUTPUT); // Declaring LED pin as an output.
}
void loop () // Code under this loop runs forever.
{
    digitalWrite (LED, HIGH); // Making LED High.
    delay(1000);              // Some Delay
    digitalWrite (LED, LOW);  // Making LED LOW.
    delay(1000);              // Some Delay
}

```

