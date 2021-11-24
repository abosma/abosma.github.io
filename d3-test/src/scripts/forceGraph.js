const data = {
    nodes: [
        { id: "test1", label: "test1", fillColor: "#3498db", altColor: "#247d99", size: "5", labelSize: "18" },
        { id: "test2", label: "test2", fillColor: "#229954", altColor: "#186b4e", size: "7", labelSize: "18" },
        { id: "test3", label: "test3", fillColor: "#e74c3c", altColor: "#a2332a", size: "9", labelSize: "18" },
        { id: "test4", label: "test4", fillColor: "#3498db", altColor: "#247d99", size: "5", labelSize: "18" },
        { id: "test5", label: "test5", fillColor: "#229954", altColor: "#186b4e", size: "7", labelSize: "18" },
        { id: "test6", label: "test6", fillColor: "#229954", altColor: "#186b4e", size: "7", labelSize: "18" }
    ],
    links: [
        { source: "test1", target: "test2", label: "test link 1", labelSize: "12" },
        { source: "test2", target: "test3", label: "test link 2", labelSize: "12" },
        { source: "test4", target: "test5", label: "test link 3", labelSize: "12" },
        { source: "test5", target: "test6", label: "test link 4", labelSize: "12" },
        { source: "test6", target: "test1", label: "test link 5", labelSize: "12" },
        { source: "test5", target: "test2", label: "test link 6", labelSize: "12" },
        { source: "test4", target: "test3", label: "test link 7", labelSize: "12" }
    ]
}

const width = 1280;
const height = 720;

let context;
let links = data.links;
let nodes = data.nodes;

function forceGraph() {
    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(link => link.id))
        .force("charge", d3.forceManyBody().strength(-3000))
        .force("center", d3.forceCenter(width / 2, height / 2));

    const canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    simulation.on("tick", ticked);

    d3.select(canvas).call(drag(simulation)).node();

    d3.select(canvas).on("mousemove", (event) => {
        mouseMove(event, simulation);
    });

    d3.select(canvas).on("click", (event) => {
        mouseClick(event, simulation);
    })
}

//  TODO: Find out what to do if simulation goes to sleep.
//  Since simulation goes to sleep after x time, simulation.find doesnt work anymore.
//  Or I make sure the simulation is always running, or I find another way of fixing this.
function mouseMove(event, simulation) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const node = simulation.find(mouseX, mouseY);

    if (isOverNode(mouseX, mouseY, node.x, node.y, 12)) {
        node.mouseOver = true;
    } else {
        node.mouseOver = false;
    }
}

function mouseClick(event, simulation) {
    simulation.alphaTarget(0.1).restart();

    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const node = simulation.find(mouseX, mouseY);

    if (isOverNode(mouseX, mouseY, node.x, node.y, 12)) {
        console.log("clicked node: ", node);
    }
}

// Calculates if x, y is within distance of nodeX, nodeY
function isOverNode(x, y, nodeX, nodeY, distance) {
    const dx = x - nodeX;
    const dy = y - nodeY;
    const dist = Math.abs(Math.sqrt(dx * dx + dy * dy));

    return dist <= distance * 2;
}

//  TODO: Right now I loop through links and nodes 4x. I also use node and link objects, which contain all information while I only need a part of the information.
//  Might be better to read more about data oriented design to set up a better performing way of doing this.
function ticked() {
    context.clearRect(0, 0, width, height);

    drawLinks(links);
    drawNodes(nodes);

    drawLinkLabels(links);
    drawNodeLabels(nodes);
}

function drawLinks(links) {
    for (let i = links.length - 1; i >= 0; --i) {
        const link = links[i];

        drawLineWithArrows(link.source.x, link.source.y, link.target.x, link.target.y, 5, 8, link.source.fillColor);
    }
}

//  Taken and modified from: https://riptutorial.com/html5-canvas/example/18136/line-with-arrowheads
//  x0,y0: the line's starting point
//  x1,y1: the line's ending point
//  width: the distance the arrowhead perpendicularly extends away from the line
//  height: the distance the arrowhead extends backward from the endpoint
function drawLineWithArrows(x0, y0, x1, y1, aWidth, aLength, color) {
    var dx = x1 - x0;
    var dy = y1 - y0;
    var angle = Math.atan2(dy, dx);
    var length = Math.sqrt(dx * dx + dy * dy);

    context.strokeStyle = color;
    context.fillStyle = color;

    //  In a canvas, you can't rotate specific items inside of the canvas.
    //  Instead, you rotate and move the whole context (canvasdata), draw, then move and rotate it back.
    //  context.save saves the old context state so it can get restored after everything gets drawn.
    context.save();

    context.translate(x0, y0);
    context.rotate(angle);

    //  Begins a draw path, draws a line from source to target x,y
    //  It then draws an arrow by moving from end of line to bottom left of end of line
    //  Then goes to end of line - length - 7.5
    //  Then goes to bottom right end of line
    //  The line then gets filled with conext.stroke, and the arrow gets filled with context.fill.
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(length, 0);
    context.moveTo(length - aLength - 7.5, -aWidth);
    context.lineTo(length - 7.5, 0);
    context.lineTo(length - aLength - 7.5, aWidth);

    context.stroke();
    context.fill();

    //  Restores context to when it got saved.
    context.restore();
}

function drawLinkLabels(links) {
    for (let i = links.length - 1; i >= 0; --i) {
        const link = links[i];

        //  (source.pos + target.pos) / 2 gets the middlepoint between the two points.
        const dx = (link.source.x + link.target.x) / 2;
        const dy = (link.source.y + link.target.y) / 2;

        context.fillStyle = link.source.fillColor;
        context.font = `${link.labelSize}px serif`;

        context.fillText(link.label, dx, dy);
    }
}

function drawNodes(nodes) {
    for (let i = nodes.length - 1; i >= 0; --i) {
        const node = nodes[i];

        context.beginPath();

        context.fillStyle = node.mouseOver ? node.altColor : node.fillColor;

        context.moveTo(node.x + node.size, node.y);
        context.arc(node.x, node.y, node.size, 0, 2 * Math.PI);

        context.fill();
    }
}

function drawNodeLabels(nodes) {
    for (let i = nodes.length - 1; i >= 0; --i) {
        const node = nodes[i];

        context.fillStyle = "#000";
        context.font = `${node.labelSize}px serif`;
        context.fillText(node.label, node.x + 15, node.y + node.size / 2);
    }
}

function drag(simulation) {
    function dragSubject(event) {
        return simulation.find(event.x, event.y);
    }

    function dragStarted(event) {
        if (!event.active) {
            simulation.alphaTarget(0.3).restart();
        }

        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
    }

    function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
    }

    function dragEnded(event) {
        if (!event.active) {
            simulation.alphaTarget(0);
        }

        event.subject.fx = null;
        event.subject.fy = null;
    }

    return d3.drag()
        .subject(dragSubject)
        .on("start", dragStarted)
        .on("drag", dragged)
        .on("end", dragEnded);
}

forceGraph();