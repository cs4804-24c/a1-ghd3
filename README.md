I thought it would be a good challenge to re-make / vectorize an AI generated logo that I've been using as branding for the websites I build. I've been using this png for a while, but it isn't scaleable and, since it's AI generated, the colors / edges are all a little different from each other.
![Jd Logo](jd.png)

Here's the version I created in D3:
![D3](image.png)

I believe that this is a technically impressive first D3 project! I learned to use linear gradients in D3, how to round the corners of rectangles, use connected paths to make smooth-edged polygons, and then whipped up a little web server to host the project.

You can see the live version of this webpage at https://d3-demo.joed.dev.

I used several resources:
- [SO Rect. Rounding](https://stackoverflow.com/questions/12115691/svg-d3-js-rounded-corners-on-one-side-of-a-rectangle)
- [SO Stroke Width](https://stackoverflow.com/questions/25936593/d3-js-dynamically-setting-stroke-width-on-a-path)
- [SO Curved Edges](https://stackoverflow.com/questions/68358844/how-to-add-curved-edge-to-d3-path-lines)
- Github copilot to help me get started, but most of this was just tinkering with positional values by hand.