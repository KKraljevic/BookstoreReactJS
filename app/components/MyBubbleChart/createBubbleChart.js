var createBubble = flare => {

    var node = document.createElement('div');

    var arr = [
        { "label": "AgglomerativeCluster", "quantity": 3938 },
        { "label": "CommunityStructure", "quantity": 3812 },
        { "label": "HierarchicalCluster", "quantity": 6714 },
        { "label": "MergeEdge", "quantity": 743 }
    ];
    var diameter = 900,
        format = d3.format(",d"),
        color = d3.scale.category20b();

    var bubble = d3.layout.pack()
        .sort(null)
        .size([diameter, diameter])
        .padding(1.5);

    var svg = d3.select(node).append("svg")
        .attr("viewBox", "0 0 960 960")
        .attr("perserveAspectRatio", "xMinYMid")
        .attr("width", diameter)
        .attr("height", diameter)
        .attr("class", "bubble");

    var Node = svg.selectAll(".node")
        .data(bubble.nodes(classes(flare))
            .filter(function (d) { console.log(d); return !d.children; }))
        .enter().append("g")
        .attr("class", "node")
        .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; })


    Node.append("title")
        .text(function (d) { return d.className + ": " + format(d.value); });

    Node.append("circle")
        .attr("r", function (d) {
            if (d.r) {
                return d.r;
            }
            return 0;
        })
        .style("fill", function (d) { return color(d.value); });

    Node.append("text")
        .attr("dy", ".3em")
        .style("text-anchor", "middle")
        .text(function (d) { return d.className; });

    // Returns a flattened hierarchy containing all leaf nodes under the flare.
    function classes(flare) {
        var classes = [];
        flare.forEach((child) => classes.push({ packageName: "categories", className: child.label, value: child.quantity }));
        return { children: classes };
    }

    return node;
}
export default createBubble;