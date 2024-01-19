Assignment 1 - Hello World: GitHub and d3 
===
This project creates an interactive visual display with draggable and clickable elements (rectangle), transitioning circles, dividing lines, colored shapes, and a rotating polygon with he use of D3.js and p5.js libraries. First I started by creating the svg container. Then I added a draggable and clickable rectangle which responds to click events with a transition effect. Two circles, each undergoing distinct transitions—a size increase with motion and a bouncing effect. Additionally, the SVG is divided by horizontal and vertical lines, and a yellow line connects the two circles, emphasizing visual separation. Colored polygons, one in purple and another rotating blue octagon at the top-right. The octagon undergoes a continuous rotation around its center. 

A working link to the hosted files (usually the gh-pages 'live' url)
resources used 
I got my inspiration of my circles from D3 circle animation but instead of it being 3d I made a 2d circle that bounces up and down and grows from small to big.
[LINK1](https://observablehq.com/@jurestabuc/d3-circle-animation )
I found the drag and drop option really cool so I implemented that into my rectangle.
[LINK2](https://observablehq.com/d/3d3e4357b6782edb)
This really helped me utilize the rotatation function well. I applied it into one of my polygons.
[LINK3](https://p5js.org/examples/form-regular-polygon.html)


Technical Achievements
I challenged myself by implementing the clicked function on the rectangle that triggers an animated sequence, and allows dragging the rectangle with a smooth transition effect. This was implemented using the D3's drag and drop behavior.
I implemented the attrTween function which makes the ball grow and move vertically in a sinusoidal motion. I used the d3.easeSinInOut to make the ball bounce up and dow.
Lastly I implemented a function named rotateOctagon() to handle the rotation of the polygon. The variable currentRotation keeps track of the current rotation angle, setInterval to repeatedly execute the rotation and rotateOctagon() function to start the continuous rotation animation.
Design Achievements
I aimed for a seamless and organized presentation of my shapes. To achieve this, I implemented a visually appealing cross-like divider that effectively creates four distinct sections. Each section corresponds to a specific requirement(circles, polygons, lines and rectangles), allowing for easy identification. To further enhance the aesthetic appeal, I incorporated a vibrant color scheme with lively and contrasting colors, creating a visually engaging experience for users. 


