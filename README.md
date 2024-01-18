Assignment 1 - Hello World: GitHub and d3  
===

Description of what I created:

Screenshots:

Technical Achievements:

Achievement 1 (Estimated 6 Points):
In conjunction with accessing part of the DOM through obtaining an element ID defined in my HTML structure, I applied the D3 mouseover and mouseout events on all shapes to make each one interactive on an informational level. When the user hovers over any of the shapes with their mouse, the type of shape that has been selected will appear in the white box where the "Selected Shape" text is located. In addition, key information about that particular shape is provided such as the width, height, radius, and/or coordinates of that shape. When the user moves their mouse outside of the area of a given shape, the "Selected Shape" text will show "None". To accomplish this functionality, I had to interact with the DOM (via obtaining element ID and setting inner HTML techniques) in my script to access and modify the paragraph where the selected shape information is displayed. 

Achievement 2 (Estimated 6 points):
I implemented user-driven interactive animations using the D3 mouse click event for all circles and rectangles. When a given circle or rectangle is clicked with the mouse, it will move to a new position within the svg container using a smooth transition of 1000 milliseconds. The x and y coordinates of a new position are determined in an updateShapeData helper function at random within reasonable bounds (inside of the svg container). This way, the new position of a rectangle or circle is a surprise to the user.

Design Achievements:

Achievement 1 (Estimated 6 Points): 
I added numerous HTML elements to create a proper webpage structure to hold the visualization. Following up on this HTML page design, I used Bulma CSS framework to style the webpage and essentially set the backdrop for the animation; to make the webpage appear aesthetically pleasing, I used the Bulma CSS framework to style, for example, the h1 title, the h2 subtitle, the Selected Shape box, ordered list, footer, and section that contains the D3 graphics primitives. I applied Bulma CSS styling using sectioning, content setting, color, text fonts, text sizes, text weight, and text positioning. 

Achievement 2 (Estimated 6 Points):
Applied the D3 mouseover and mouseout events on all shapes to make each one interactive on an aesthetic level. When the user hovers over any of the shapes with their mouse, the color of the shape becomes black to signify that it has been selected. When the user moves their mouse outside of the area of a given shape, the color of that shape returns to its default fill or stroke color.

