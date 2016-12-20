//Aliases
var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    TextureCache = PIXI.utils.TextureCache,
    Rectangle = PIXI.Rectangle,
    Text = PIXI.Text;

//Create a Pixi stage and renderer and add the 
//renderer.view to the DOM
var stage = new Container(),
    renderer = autoDetectRenderer(1024, 512);
renderer.backgroundColor = 0x000000;
document.body.appendChild(renderer.view);

//load an image and run the `setup` function when it's done
loader
    .add("../pixiTest/images/stylesheet.json")
    .on("progress", loadProgressHandler)
    .load(setup);

function loadProgressHandler(loader, resource) {
    console.log("loading: " + resource.url);
    console.log("progress: " + loader.progress + "%");
}

var state = play;
var town = [], message = [], clickFunction = [], b, roadHorizontal, roadVertical, grass, allyUnit = [], enemyUnit = [], connecterUp, connecterDown, connecterLeft, connecterRight, connecter4way;

function setup() {
    console.log("All files loaded");
    var id = resources["../pixiTest/images/stylesheet.json"].textures;

    gridX = Math.round(renderer.width / 64);
    gridY = Math.round(renderer.height / 64);

    var levelGrid = [
        [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
        [3,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0],
        [9,2,2,2,2,2,2,2,2,10,2,2,2,1,0,0],
        [1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0],
        [3,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
        [3,0,0,0,0,0,0,0,0,3,0,0,4,0,0,0],
        [9,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ]

    b = 0;

    for (var i = 0; i < levelGrid.length; i++) {
        var grid = levelGrid[i];
        for (var j = 0; j < grid.length; j++) {
            if (grid[j] == 0) {
                grass = new Sprite(id["grass.png"]);
                grass.x = j * 64;
                grass.y = i * 64;
                stage.addChild(grass)
            } else if (grid[j] == 1) {
                town[b] = new Sprite(id["town.png"]);
                town[b].x = j * 64;
                town[b].y = i * 64;
                town[b].population = Math.floor(Math.random() * 4000) + 1000
                message[b] = new Text(town[b].population, { fontFamily: "Arial", fontSize: 20, fill: "white" });
                message[b].position.set(town[b].x, town[b].y);
                stage.addChild(town[b])
                stage.addChild(message[b]);
                b++
            } else if (grid[j] == 2) {
                roadHorizontal = new Sprite(id["groundHorizontal.png"]);
                roadHorizontal.x = j * 64;
                roadHorizontal.y = i * 64;
                stage.addChild(roadHorizontal)
            } else if (grid[j] == 3) {
                roadVertical = new Sprite(id["groundVertical.png"]);
                roadVertical.x = j * 64;
                roadVertical.y = i * 64;
                stage.addChild(roadVertical)
            } else if (grid[j] == 4) {
                allyUnit[b] = new Sprite(id["allyUnit.png"]);
                allyUnit[b].x = j * 64;
                allyUnit[b].y = i * 64;
                stage.addChild(allyUnit[b])
                b++
            } else if (grid[j] == 5) {
                enemyUnit[b] = new Sprite(id["enemyUnit.png"]);
                enemyUnit[b].x = j * 64;
                enemyUnit[b].y = i * 64;
                stage.addChild(enemyUnit[b])
                b++
            } else if (grid[j] == 6) {
                connecterUp = new Sprite(id["groundConnecterUp.png"]);
                connecterUp.x = j * 64;
                connecterUp.y = i * 64;
                stage.addChild(connecterUp)
            } else if (grid[j] == 7) {
                connecterDown = new Sprite(id["groundConnecterDown.png"]);
                connecterDown.x = j * 64;
                connecterDown.y = i * 64;
                stage.addChild(connecterDown)
            } else if (grid[j] == 8) {
                connecterLeft = new Sprite(id["groundConnecterLeft.png"]);
                connecterLeft.x = j * 64;
                connecterLeft.y = i * 64;
                stage.addChild(connecterLeft)
            } else if (grid[j] == 9) {
                connecterRight = new Sprite(id["groundConnecterRight.png"]);
                connecterRight.x = j * 64;
                connecterRight.y = i * 64;
                stage.addChild(connecterRight)
            } else if (grid[j] == 10) {
                connecter4way = new Sprite(id["ground4wayConnecter.png"]);
                connecter4way.x = j * 64;
                connecter4way.y = i * 64;
                stage.addChild(connecter4way)
            }

        }
    }

    gameLoop()
}

function gameLoop() {
    requestAnimationFrame(gameLoop);
    
    state();

    renderer.render(stage);
}

function play() {

}

window.setInterval(function(){
    for (var x in town) {
        town[x].population = Math.round(town[x].population + (town[x].population * 0.02))
        for (var y in message) {
            message[y].text = String(town[y].population)
        }
    }
}, 1000);