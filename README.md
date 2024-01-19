Assignment 1 - Hello World: GitHub and d3  
===

- Link to my gh-pages site "http://BradyA25.github.io/a1-ghd3/index.html".


**Code Description:**
I started this assignment from scratch and watched the loom video and first implemented everything shown in that video. From there I came up with the idea to make a landscape that has two different scenes that can be switched between using a button. Using the information from the video I was able to code the background, sun, and line without any resources. I used chat gpt to implement the grass gradient fill of the grass rectangle. I had to play around with the coloring along with the direction of the gradient. Then I researched the polygon and learned that you feed it the points. So I used chat gpt to create a funtion that calcutes the points of an octogon given the center and the desired size of the sides. From here I gave the function the desired parameters and made it look like a stop sign. I had the idea to make the two different scenes day and night, so I wanted to create a star. Similar to the polygon, I turned to chat gpt to create a funtion to calculate the points of the star to append the polygon. During the day I made the color of the star the same as the background so it cannot be seen. 
![Alt text](image.png)

Now that I had all of my my objects in place I created two buttons that would change the color of the two buttons, sun, star, and background. I used chat gpt for how to implement a button, and then I created all of the actions that are done on the click. I knew this could be done because of the professor's videos showing the change in color of the circle. At night the background changes to a dark blue, the sun turns to the moon, the star turns gold, and the night button changes to green to indicate that that button is selected, and the day button changes to sky blue. The colors gradually change. And the user can flip back and forth between the scenes using the buttons.
![Alt text](image-1.png)

**Technical Achievment:**
I believe I achieved the technical achievemnt due to the interactability of the web page. I had to make the objects I appeneded to the svg into variables so that when I clicked the button the colors could change. Also instead of the user having to refresh to get back to day, I implemented another button that would make change the scene back to day. I have no design experience and interactability so this was all new to me so I think I tailored my learning into diving into making the variables and seeing the actions on one variable can affect other variables. Also, becasue I had no experience, I wanted to start this from scratch and understand the basics, as opposed to adjusting an existing visual.
