
console.log(d3); // test if d3 is loaded
  
const width = 650;
const height = 600
const ps = 8;

// Add an SVG
const svg = d3.create("svg").attr("width", width).attr("height", height);

drawCenterCross();
drawLetteringBackground();
drawLettering();

container.append(svg.node());

function drawCenterCross() {

  // Draw the top line
  svg.append("rect")
    .attr("x", (width - ps * 5) / 2) // Center the rectangle horizontally
    .attr("y", 0)
    .attr("width", ps * 5)
    .attr("height", height / 2)
    .style("fill", "url(#topGradient)");

  // Define the linear gradient
  const topGradient = svg.append("defs")
    .append("linearGradient")
    .attr("id", "topGradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "0%")
    .attr("y2", "100%");
  
  // Add the gradient stops
  topGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#ec271c");
  topGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#dc5e2d");

  // Draw the bottom line
  svg.append("rect")
    .attr("x", (width - ps * 5) / 2) // Center the rectangle horizontally
    .attr("y", height / 2)
    .attr("width", ps * 5)
    .attr("height", height / 2)
    .style("fill", "url(#bottomGradient)");

  // Define the linear gradient
  const bottomGradient = svg.append("defs")
    .append("linearGradient")
    .attr("id", "bottomGradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "0%")
    .attr("y2", "100%");
  
  // Add the gradient stops
  bottomGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#271b78");
  bottomGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#332aa3");

  // And add the little blue spot that overlaps
  svg.append("rect")
    .attr("x", (width - ps * 5) / 2)
    .attr("y", height - ps * 12)
    .attr("width", ps * 2)
    .attr("height", ps * 12)
    .style("fill", "#01b9d4");
  
  // Draw the left line
  svg.append("rect")
    .attr("x", 0) // Center the rectangle vertically
    .attr("y", height / 2)
    .attr("width", width / 2)
    .attr("height", ps * 3)
    .style("fill", "#fd7911");

  // Draw the right line
  svg.append("rect")
    .attr("x", width / 2) // Center the rectangle vertically
    .attr("y", height / 2)
    .attr("width", width / 2)
    .attr("height", ps * 3)
    .style("fill", "#f10751");
}

function drawLetteringBackground() {
  // I'm going to attempt to make this out of a few polygons and an oval

  // Draw a black oval
  svg.append("ellipse")
    .attr("cx", width / 2 + (ps * 10) + ps) // Offset horizontally to the right by half its width
    .attr("cy", height / 2) // Center vertically
    .attr("rx", ps * 15) 
    .style("fill", "black");

  // Draw a centered, black rectangle
  svg.append("rect")
    .attr("x", (width - 23 * ps) / 2) // Center the rectangle horizontally
    .attr("y", (height - 30 * ps) / 2) // Center the rectangle vertically
    .attr("width", 23 * ps)
    .attr("height", 30 * ps)
    .style("fill", "black");
  
  // Draw the top of the J
  const jTopLeft = `${(width - 2 * ps) / 2 - 11 * ps},${height / 2 - (30/2 + 2) * ps}`;
  const jTopRight = `${(width - 2 * ps) / 2 -  2 * ps},${height / 2 - (30/2 + 3) * ps}`;
  const jBottomRight = `${(width - 2 * ps) / 2 - 2 * ps},${height / 2 + 15 * ps}`;
  const jBottomLeft = `${(width - 2 * ps) / 2 - 11 * ps},${height / 2 + 15 * ps}`;
  svg.append("polygon")
    .attr("points", `${jTopLeft} ${jTopRight} ${jBottomRight} ${jBottomLeft}`)
    .style("fill", "black");
  
  // Draw the left of the J
  const jTailTopLeft = `${(14 * ps)},${height / 2 + 3 * ps}`;
  const jTailTopRight = `${width / 2},${height / 2 + 3 * ps}`;
  const jTailBottomRight = `${width / 2},${height / 2 + 11 * ps}`;
  const jTailBottomLeft = `${12 * ps},${height / 2 + 11 * ps}`;
  svg.append("polygon")
    .attr("points", `${jTailTopLeft} ${jTailTopRight} ${jTailBottomRight} ${jTailBottomLeft}`)
    .style("fill", "black");

  const jTailUnderlineTopLeft = `${(15 * ps)},${height / 2 + 11 * ps}`;
  const jTailUnderlineTopRight = `${width / 2},${height / 2 + 11 * ps}`;
  const jTailUnderlineBottomRight = `${width / 2},${height / 2 + 15 * ps}`;
  const jTailUnderlineBottomLeft = `${14 * ps},${height / 2 + 15 * ps}`;
  svg.append("polygon")
    .attr("points", `${jTailUnderlineTopLeft} ${jTailUnderlineTopRight} ${jTailUnderlineBottomRight} ${jTailUnderlineBottomLeft}`)
    .style("fill", "black");
  
  const jCurvePoints = [
    [(width - 2 * ps) / 2 - 10.75 * ps, height / 2 - 16.75 * ps],
    [(width - 12 * ps) / 2 - 11 * ps, height / 2 - 2 * ps],
    [(14 * ps), height / 2 + 3.75 * ps],
    [width / 2 - 11 * ps, height / 2 + 8 * ps],
  ];

  // Create a line generator with a cardinal curve
  const lineGenerator = d3.line()
    .curve(d3.curveCardinalClosed)
    .x(d => d[0])
    .y(d => d[1]);
  // Append the curved polygon to the SVG
  svg.append("path")
    .attr("d", lineGenerator(jCurvePoints))
    .style("fill", "black");
}

function drawLettering() {

    // Draw a white oval
    svg.append("ellipse")
      .attr("cx", width / 2 + ps * 9)
      .attr("cy", height / 2 - 1 * ps)
      .attr("rx", ps * 13) 
      .attr("ry", ps * 12) 
      .style("fill", "white");
    
      // Cut off the back of the D
      svg.append("rect")
        .attr("x", width / 2 - ps * 3)
        .attr("y", height / 2 - 15 * ps)
        .attr("width", 5 * ps)
        .attr("height", 30 * ps)
        .style("fill", "black");
      svg.append("rect")
        .attr("x", width / 2 - ps * 4)
        .attr("y", height / 2 - 6 * ps)
        .attr("width", 5 * ps)
        .attr("height", 10 * ps)
        .style("fill", "black");


      // Draw a smaller black oval inside the d for the hole
      svg.append("ellipse")
        .attr("cx", width / 2 + ps * 9)
        .attr("cy", height / 2 - 1 * ps)
        .attr("rx", ps * 6) 
        .attr("ry", ps * 6) 
        .style("fill", "black");

      // Form the straight back of the D
      svg.append("rect")
        .attr("x", width / 2 + ps * 2)
        .attr("y", height / 2 - 13 * ps)
        .attr("width", 7 * ps)
        .attr("height", 24 * ps)
        .style("fill", "white");

      // Draw a block for the D that we'll cover with a black circle
      svg.append("rect")
        .attr("x", width / 2 - ps * 6)
        .attr("y", height / 2 + 2 * ps)
        .attr("width", 9 * ps)
        .attr("height", 9 * ps)
        .style("fill", "white");

      // Draw the black circle
      svg.append("ellipse")
        .attr("cx", width / 2 - ps * 8)
        .attr("cy", height / 2 + 2 * ps)
        .attr("rx", ps * 10) 
        .style("fill", "black");

      // Create an array of points for the curved line
      const curvePoints = [
        [width / 2 - 7 * ps, height / 2 - 16 * ps],
        // [width / 2 - 12 * ps, height / 2 + 2 * ps],
        // [width / 2 - 13 * ps, height / 2 + 3 * ps],
        // [width / 2 - 14 * ps, height / 2 + 4 * ps],
        // [width / 2 - 15 * ps, height / 2 + 5 * ps],
        [width / 2 - 12 * ps, height / 2 + 6 * ps],
        [width / 2 - 24 * ps, height / 2 + 8 * ps],
      ];
    
      // Create a line generator with a cardinal curve
      const lineGenerator = d3.line()
        .curve(d3.curveCardinal)
        .x(d => d[0])
        .y(d => d[1]);
    
      // Append the curved line to the SVG
      svg.append("path")
        .attr("d", lineGenerator(curvePoints))
        .style("stroke", "white")
        .style("stroke-width", 8 * ps);
    
      // Cut off the top of the J
      svg.append("rect")
        .attr("x", width / 2 - 12 * ps)
        .attr("y", height / 2 - 17 * ps)
        .attr("width", 9 * ps)
        .attr("height", 2.2 * ps)
        .style("fill", "black");
}

