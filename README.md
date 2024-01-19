Assignment 1 - Hello World: GitHub and d3  
===

Link to page: https://alyshacreelman.github.io/a1-ghd3/

About my Assignment
---
In this assignment, I have created Bob. Bob is a pink and red robot that waves at you. Bob is made out of basic shapes such as a polygon (head), lines (hair), circles (nose and eyes), rectangles (arms and legs), and ellipses (body and mouth).

![image](https://github.com/alyshacreelman/a1-ghd3/assets/156394139/c81acb59-933a-4088-9f4b-5479a838886d)

As mentioned by the text on the screen, clicking Bob's nose slowly changes its color from red to blue to yellow.

![image](https://github.com/alyshacreelman/a1-ghd3/assets/156394139/284dd1f2-f193-4dca-bc9d-266dd1e06f68)

Bob also gets scared very easily! Pushing the "Scare me" button will make Bob appear scared by enlarging his eyes and mouth.

![image](https://github.com/alyshacreelman/a1-ghd3/assets/156394139/30b7b405-08e3-4915-8745-5c4d08557bca)

Acheivements
---
**Technical acheivements:** Bob's right arm continuously waves while the user is on the screen. This required me to rotate the rectangle that is his arm the correct way in both directions, and create a recursive function that repeats the waving motion every time a wave ends. Bob's nose also changes colors slowly when the user clicks, making Bob interactive and requiring more steps in my code. There is also a button on the screen that, when clicked, makes Bob "scared" by increasing the size of his eyes and mouth. This required an additional function that can recognize when a user clicks the "Scare Me" button and enlarges these features, which I made into variables in the code.

**Design acheivements:** Instead of just putting shapes on the screen, I designed a cute robot with a big nose, little hairs on his head, and more. I also made the assignment more interactive and exciting by giving the user a way to "scare" Bob. I think making his facial features larger to make him appear scared was creative. The screen also looks "clean" with each of Bob's features lined up correctly to make him symmetrical.

Sources
---
I used ChatGPT to get me started with this assignment. I asked ChatGPT to "write d3.js code that draws a circle." I asked ChatGPT to explain this code step by step, which is how I learned about the SVG. ChatGPT also helped me debug because I was not able to see the shapes I was producing on the screen until I added the html and body tags. I then used https://d3-graph-gallery.com/graph/shape.html to learn how to create other shapes. Lastly, I asked ChatGPT to "create a function that rotates the circle." While I did not use the code it gave exactly, this gave me an idea of how to rotate a shape and create functions, which I used to make Bob's arm wave.
