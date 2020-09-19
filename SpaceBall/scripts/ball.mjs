require("phaser");

var timings = require('../assets/ballSpawnTiming.json')
var currentFrame = 0;
var shouldSpawn = false;

function startBallSpawning(group, ballSpawnSound)
{
    setInterval(updateFrame, 16.74);
    setInterval(checkSpawn, 16.74, group, ballSpawnSound);
}

function checkSpawn(group, ballSpawnSound)
{
    const values = Object.values(timings.spawnTimings);
    values.forEach((value) => {
        if(currentFrame == value.frame)
        {
            shouldSpawn = true;
        }
    })

    if(shouldSpawn)
    {
        spawnBall(group, 350, 350, 20, -100);
        ballSpawnSound.play();
        shouldSpawn = false;
    }
}

function updateFrame()
{
    currentFrame++;
}

function spawnBall(group, originX, originY, velocityX, velocityY)
{
    var ball = group.create(originX, originY, 'ball').setVelocity(velocityX, velocityY);

    setTimeout(destroyBall, 5000, group, ball);
}

function destroyBall(group, ball)
{
    group.remove(ball, false, true);
}

module.exports = {
    startBallSpawning
}