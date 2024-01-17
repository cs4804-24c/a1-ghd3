console.log(d3); // test if d3 is loaded
// Add an SVG

let svg = d3.select("#svg-holder").append('svg');
svg.attr("width", 1280)
  .attr("height", 720)
// Add Rectangles
d3.select("svg")
  .append("rect")
  .attr("x", 250)
  .attr("y", 300)
  .attr('width', 50)
  .attr('height', 80)
  .attr('fill', 'red');
// Add Circles
d3.select("svg")
  .append("circle")
  .attr("cx", 500)
  .attr("cy", 400)
  .attr('r', 20)
  .attr('stroke-width', 5)
  .attr('stroke', 'blue')
  .attr('fill', 'red');
// Add Lines
d3.select("svg")
  .append("line")
  .attr("x1", 300)
  .attr("x2", 400)
  .attr("y1", 420)
  .attr("y2", 359)
  .attr('stroke', 'green');
// Add Polygons
d3.select("svg")
  .append("polygon")
  .attr("points", '100,150 210,130 200,200 190,150 150,160 165,200')
  .attr('stroke', 'yellow')

  .attr('fill', 'grey');


//event handlers
d3.select("#clear-svg").on("click", () => d3.select("svg").selectAll("*").remove())

let linePts=[]
let polygonPts=""
d3.select('body').on('keypress', e => {
    switch(e.key) {
        case ' ':
            svg.append('polygon')
                .attr('points', polygonPts.slice(0,polygonPts.length-1))
                .attr('stroke-width', d3.select("#select-stroke-width").node().value)
                .attr('stroke', d3.select("#color-picker").node().value)
                .attr('fill', d3.select("#fill-color-picker").node().value)

            polygonPts=""
    }
})
svg.on('contextmenu', e => e.preventDefault())
svg.on("mousedown", e => {
    e.preventDefault();
    switch (e.button) {
        case 0:
            linePts.push(e.offsetX);
            linePts.push(e.offsetY);
            if (linePts.length===4) {
                svg.append('line')
                    .attr("x1", linePts[0])
                    .attr("y1", linePts[1])
                    .attr('x2', linePts[2])
                    .attr('y2', linePts[3])
                    .attr('stroke-width', d3.select("#select-stroke-width").node().value)
                    .attr('stroke', d3.select("#color-picker").node().value)
                linePts=[]
            }
            break;
        case 2:
            polygonPts += `${e.offsetX},${e.offsetY},`
            break;
    }
})