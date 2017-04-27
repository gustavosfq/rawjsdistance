var player = {
    x: 250,
    y: 250,
    s: 30
}

var player2 = {
    x: 150,
    y: 150,
    s: 30
}
var map = {};
var velocity = 5;

var canvas = document.getElementById("game");
var c = canvas.getContext("2d");

onkeydown = onkeyup = e => {
    this.map[e.keyCode] = e.type == 'keydown';
};

setInterval(update, 33);

function draw(){
    c.fillStyle="black";
    c.fillRect(0,0, canvas.width, canvas.height);

    c.fillStyle = "white";
    c.fillRect(player.x, player.y, player.s, player.s);

    c.fillStyle = "red";
    c.fillRect(player2.x, player2.y, player2.s, player2.s);

    c.fillStyle = "white";
    c.fillText("Distancia : " + distance(), 20, 20);
}

function update(){
    draw();
    if(map[37]){
        player.x -= velocity;
    }
    if(map[39]){
        player.x += velocity;
    }
    if(map[38]){
        player.y -= velocity;
    }
    if(map[40]){
        player.y += velocity;
    }
}

function distance(){

    return Math.sqrt( ((player2.x - player.x)**2) + ((player2.y - player.y)**2) );
}