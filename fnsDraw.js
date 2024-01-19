function drawRectangle(svg, x, y, width, height) {
    //primitive colours
    const rectColour = "#b2938c";
    const rectFill = "#f5b7b1";
    // Set the radius for rounded corners
    const rectRadius = 10;

    // Append a rectangle to the SVG container
    svg
        .append("rect")
        .attr("x", x)      // x-coordinate of the top-left corner
        .attr("y", y)      // y-coordinate of the top-left corner
        .attr("rx", rectRadius)
        .attr("ry", rectRadius)
        .attr("width", width) // width of the rectangle
        .attr("height", height)// height of the rectangle
        .attr("stroke", rectColour)
        .attr("fill", rectFill); // fill color of the rectangle

}

function drawCircle(svg, x, y, radius) {
    const circleColour = "#2c3e50";
    const circleFill = "#85929e";

    //circle
    svg
        .append("circle")
        .attr("cx", x)    // x-coordinate of the center
        .attr("cy", y)    // y-coordinate of the center
        .attr("r", radius)      // radius of the circle
        .attr("stroke", circleColour)
        .attr("fill", circleFill); // fill color of the circle

}

function drawDiamond (svg, x1, y1, x2, y2, x3, y3, x4, y4) {
    const polyColour = "#918e4e";
    const polyFill = "#f7dc6f";

    const polygonData = [
        { x: x1, y: y1 },
        { x: x2, y: y2 },
        { x: x3, y: y3 },
        { x: x4, y: y4 }
    ];
    // diamond added
    svg
        .append("polygon")
        .attr("points", polygonData.map(d => `${d.x},${d.y}`).join(" "))
        .attr("stroke", polyColour)
        .attr("fill", polyFill);

}

function drawFilledLinesTriangle (svg, x1, y1, x2, y2, x3, y3){
    const lineColour = "#6c3483";
    const lineFillColour = "#d7bde2";

    // Define the coordinates for the line
    const lineData = [
        { x: x1, y: y1 },
        { x: x2, y: y2 },
        { x: x3, y: y3 }
    ];

    // https://d3js.org/d3-shape/line + info from chatGpt to create lines and fill as a triangle
    const lineGenerator = d3.line()
        .x(d => d.x)
        .y(d => d.y);


    // lines -> upper triangle
    svg
        .append("path")
        .data([lineData])
        .attr("d", lineGenerator)
        .attr("stroke", lineColour)
        .attr("stroke-width", 2)
        .attr("fill", lineFillColour);

}

