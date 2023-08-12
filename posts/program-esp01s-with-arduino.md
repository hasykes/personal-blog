---
title: "How to Program an ESP-01s With Arduino Uno"
description: "The ESP01s is a handy little microcontroller, but uploading/flashing custom programs can be difficult.  This post covers how I approach this issue with the help of an Arduino Uno."
date: 31 July 2023
---

 With built in WiFi, low cost, and a X GPIO pins available the ESP01s is fantastic for custom home projects.  While a handy little microcontroller, uploading/flashing custom programs to the ESP01s can be difficult for a beginner.  After reading this post, you should understand the concepts of...

 - [Developing custom programs in the Arduino IDE](#developing-custom-programs-in-the-arduino-ide)
 - [Connecting your ESP01s to an Arduino Uno](#physically-connecting-the-esp01s-to-your-arduino-uno)
 - [Loading Custom Code](#loading-custom-code)

 # Shopping List
 1. [ESP01s](https://amzn.to/3rVPqks)
 2. [Arduino Uno / Starter Kit](https://amzn.to/43Vh0v7)
    - A Starter Kit is not required, but having buttons and basic electronic components on hand makes for easy tinkering!
 3. [Dupont Cables](https://amzn.to/3q5JKDV)
    - If you don't get the starter kit (also called jumper wires)
 4. [Bread Board](https://amzn.to/3q5JKDV)

 **Note: These are affiliate links.  I receive a small sum if you purchase via these links (at no cost to you!)**

 # About the ESP01s
![Photo of ESP01s](https://i.ebayimg.com/images/g/0GUAAOSwR8hiUDWZ/s-l1600.jpg)

*ESP01s - Courtesy of ASA College*

The ESP01s is a compact and versatile Wi-Fi module, widely used in the Internet of Things (IoT) and smart home projects. It is based on the ESP8266 chip, which integrates a powerful 32-bit microcontroller and a Wi-Fi transceiver. The ESP01s module is known for its low cost, small form factor, and ease of use, making it an ideal choice for hobbyists, makers, and developers looking to add Wi-Fi connectivity to their projects.
 
Despite its size, the ESP01s packs enough processing power to handle various IoT applications, allowing devices to communicate with each other or connect to the internet seamlessly. Its popularity stems from its robust community support, extensive documentation, and the ability to be programmed using various development platforms, making it a go-to solution for connecting devices to the internet effortlessly.

 # Developing Custom Programs in the Arduino IDE
 
 Download the Arduino IDE for your specific OS directly from the arduino.cc website: https://www.arduino.cc/en/software

 Arduino uses a custom language, similar to C++.  If you don't know C++, don't worry because I don't either!  There is a ton of boilerplate code on the web to help you get started and handle most of your use cases with the ESP01s.  For everything else, I'm always happy to try and help, just leave me a comment (If there's no comment function yet... [Email Me!](mailto:hayden@haydensykes.com))

After installing the Arduino IDE, you'll need to update a few settings and download an ESP8266 library for interacting with your ESP01s. 

1. Install the ESP8266 board package in the Arduino IDE
   - Go to File > Preferences and add the URL http://arduino.esp8266.com/stable/package_esp8266com_index.json to the Additional Boards Manager URLs field
   ![Screen showing the selection of ESP8266 Board and Installing in Arduino IDE](https://hayden-blog.s3.us-east-2.amazonaws.com/ArduinoUno_To_ESP01s/Add+Board+to+IDE.png)
2. Download and select ESP8266 in Arduino's Boards Manager
   - Go to Tools > Board > Boards Manager and search for "ESP8266" 
   - Install the ESP8266 by ESP8266 Community package
   - Go to Tools > Board > ESP8266 and Select "Generic ESP8266 Module"
   ![Selecting the installed esp module](https://hayden-blog.s3.us-east-2.amazonaws.com/ArduinoUno_To_ESP01s/Select+esp+board.png)

With your settings updated, let's get your ESP01s and Arduino connected.

# Physically connecting the ESP01s to your Arduino Uno

In order for your ESP01s to allow custom programming, we will need to physically connect pins to the Arduino. To transmit data, there are several pins we need to connect between the ESP and Arduino.

![ESP01s Pinout Diagram](https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/05/ESP-01-ESP8266-pinout-gpio-pin.png?quality=100&strip=all&ssl=1) 

*ESP01s Pinout Diagram - Courtesy of [RandomNerdTutorials](https://randomnerdtutorials.com/esp8266-pinout-reference-gpios/)*
  
![Arduino Uno Pinout Diagram](https://docs.arduino.cc/static/2b141eb1cfe6f465a949c203e4af1b5f/A000066-pinout.png)
<em>
  Arduino Uno Pinout Diagram - 
  Courtesy of <a href="https://docs.arduino.cc/hardware/uno-rev3">Arduino Documention
  </a>
</em>

1. ESP01s RX to Arduino Uno RX
2. ESP01s TX to Arduino Uno TX
3. ESP01s GND to Arduino Uno GND
4. ESP01s VCC to Arduino Uno 3.3V
5. ESP01s GPIO0 to Arduino Uno GND
   - This sets the ESP01s to Programming Mode
6. ESP01s RST to Arduino Uno GND
   - I've found using the RST pin allows you to more consistenly flash data without errors.  More on this later.

Once connected, plug in the USB cable to your Arduino Uno and Laptop.  Ensure your Arduino UNO is communicated by selecting the correct port in the Menu Tools > Port. Note that the port used may vary and require some trial and error. It's finally time to add some code! 

![ESP01s connected to Arduino UNO and Laptop](https://hayden-blog.s3.us-east-2.amazonaws.com/ArduinoUno_To_ESP01s/Arduino+to+ESP01s+-+Final.jpeg)
<em>
   ESP01s connected to Arduino UNO and Laptop - Courtesy of Me
   </a>
</em>

# Loading Custom Code

As a quick sanity check we will be using a basic LED blinking example available in the ESP8266 package.  This code will blink the ESP01s' onbaord LED at a set interval so you won't require any additional hardware.  You can select this from the menu, or just Copy and paste the example below (all credit to the original author - Simon Peter).

``` cpp
/*
  ESP8266 Blink by Simon Peter
  Blink the blue LED on the ESP-01 module
  This example code is in the public domain

  The blue LED on the ESP-01 module is connected to GPIO1
  (which is also the TXD pin; so we cannot use Serial.print() at the same time)

  Note that this sketch uses LED_BUILTIN to find the pin with the internal LED
*/

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);     // Initialize the LED_BUILTIN pin as an output
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, LOW);   // Turn the LED on (Note that LOW is the voltage level
  // but actually the LED is on; this is because
  // it is active low on the ESP-01)
  delay(1000);                      // Wait for a second
  digitalWrite(LED_BUILTIN, HIGH);  // Turn the LED off by making the voltage HIGH
  delay(2000);                      // Wait for two seconds (to demonstrate the active low LED)
}

```
The next few steps need to be completed in sequence.  You may have an upload failure on the first few tries, but don't be discouraged!  Read through this list once before trying the flashing (uploading) process.

1. Click the upload button (Right facing arrow in top right corner) of your IDE
   - The IDE will start compiling the example.  More complex code = longer compilation time.
2. When the output window (bottom of your IDE) begins showing "upload" **Remove the RST Pin from GND**
3. The upload should begin and may take a minute.

![Blinking ESP01s](https://hayden-blog.s3.us-east-2.amazonaws.com/ArduinoUno_To_ESP01s/ESP01s-LED.jpeg) 
<em align="center">
ESP01s LED lit up after succesful code upload - Courtesy of Me
</em>

After succesfully uploading the code, disconnect the **ESP01s GPIO0 from GND** and quickly connect and **disconnect ESP01s RST to GND** (this resets the ESP01s back into operating mode).

Congrats, you have succesfully uploaded custom code to an ESP01s module!  Now you can start building your own IoT projects and take advantage of the powerful features of the ESP8266 chip. Whether you want to build a smart home device, a remote temperature sensor, or something completely different, the ESP01s module is a versatile and cost-effective solution.  

[Follow my RSS feed]() for more ESP01s project ideas and other random DIY/Tech tips!