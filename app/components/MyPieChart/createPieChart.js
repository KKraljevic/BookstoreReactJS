const createPieChart = data => {
    var node = document.createElement('div');

    var width = 500;
    var height = 300;
    var colors = ["#ED6A5A", "#F4F1BB", "#9BC1BC", "#5CA4A9", "#E6EBE0", "#70587C"];
    var arcClass = 'arc';
    var r = Math.min(width, height) / 2;
    var labelr = r + 10; // radius for label anchor

    const radius = Math.min(width, height) / 2;

    const color = d3.scale.ordinal()
        .range(colors);

    const arc = d3.svg.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    const pie = d3.layout.pie()
        .sort(null)
        .value(d => d.quantity);

    const svg = d3.select(node).append("svg")
        .attr("width", width * 1.2)
        .attr("height", height * 1.2)
        .append("g")
        .attr("transform", "translate(" + width * 0.6 + "," + height * 0.6 + ")");

    const g = svg.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", arcClass);

    g.append("path")
        .attr("d", arc)
        .style("fill", d => color(d.data.label));


    g.append("text")
        .attr("transform", function (d) {
            var c = arc.centroid(d),
                x = c[0],
                y = c[1],
                // pythagorean theorem for hypotenuse
                h = Math.sqrt(x * x + y * y);
            return "translate(" + (x / h * labelr) + ',' +
                (y / h * labelr) + ")";
        })
        .attr("dy", ".35em")
        .attr("text-anchor", function (d) {
            // are we past the center?
            return (d.endAngle + d.startAngle) / 2 > Math.PI ?
                "end" : "start";
        })
        .text(function (d, i) {
            return d.data.label;
        });

    const type = d => {
        d.quantity = +d.quantity;
        return d;
    }

    return node;
}
export default createPieChart;
