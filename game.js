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

function distance(){
    return Math.sqrt( ((player2.x - player.x)**2) + ((player2.y - player.y)**2) );
}

function draw(){
    var distances = distance();
    
    if(distances < 60){
        c.fillStyle="#ea4335";
    }else{
        c.fillStyle="black";
    }
    c.fillRect(0,0, canvas.width, canvas.height);

    c.fillStyle = "white"; 
    c.beginPath();
    c.arc(player.x,player.y,player.s,0,Math.PI*2,true);
    c.closePath();
    c.fill();

    c.fillStyle = "red"; 
    c.beginPath();
    c.arc(player2.x,player2.y,player2.s,0,Math.PI*2,true);
    c.closePath();
    c.fill();

    c.fillStyle = "white";
    c.fillText("Distancia : " + distances, 20, 20);
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
