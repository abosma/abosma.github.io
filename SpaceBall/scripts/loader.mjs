const Phaser = require('phaser');
import { startBallSpawning } from "./ball.mjs";
import { BallPlugin } from "./ball.mjs";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    audio: {
        disableWebAudio: true
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var batter;
var ballHitSound;

function preload ()
{
    this.load.path = 'assets/';

    this.load.image('batter_01', 'batter/batter_01.png');
    this.load.image('batter_02', 'batter/batter_02.png');
    this.load.image('batter_03', 'batter/batter_03.png');
    this.load.image('batter_04', 'batter/batter_04.png');
    this.load.image('batter_05', 'batter/batter_05.png');
    this.load.image('ball', 'ball/ball.png');
    this.load.image('backgroundRoom', 'background/room.png');
    
    this.load.audio('backgroundMusic', 'sounds/background_music.ogg');
    this.load.audio('ballSpawn', 'sounds/ball_spawn.ogg');
    this.load.audio('ballHit', 'sounds/ball_hit.ogg');
}

function create ()
{
    var group = this.physics.add.group({
        collideWorldBounds: true
    });

    this.anims.create({
        key: 'hit',
        frames: [
            { key: 'batter_01' },
            { key: 'batter_02' },
            { key: 'batter_03' },
            { key: 'batter_04' },
            { key: 'batter_05' },
            { key: 'batter_01' }
        ],
        frameRate: 24,
        repeat: 0
    });

    initializeBackground(this);

    batter = this.add.sprite(450, 350, 'batter_01');

    var ballSpawnSound = this.sound.add('ballSpawn');

    startBallSpawning(group, ballSpawnSound);
}

function initializeBackground(scene)
{
    var bgRoom = scene.add.sprite(400, 300, 'backgroundRoom');
    var bgMusic = scene.sound.add('backgroundMusic');
    
    ballHitSound = scene.sound.add('ballHit');

    bgRoom.depth = -1;
    bgMusic.play();
}

function update() 
{
    var spaceButton = this.input.keyboard.addKey('SPACE');

    spaceButton.on('down', function(event)
    {
        batter.play('hit');
        ballHitSound.play();
    })
}