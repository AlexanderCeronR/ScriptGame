
const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

window.addEventListener("load", startGame);

function startGame (){
    let canvasSize;

    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    } else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas .setAttribute("width", canvasSize);
    canvas .setAttribute("height", canvasSize);

    const elementsSize = (canvasSize / 10) - 1;
    game.font = elementsSize + "px Verdana";
    game.textAlign = "";
    for(let i = 0; i < 10; i++){
        for(let j = 1; j < 11; j++){
        game.fillText(emojis["X"], elementsSize * i, elementsSize * j);
    }
}

    // window.innerWidth
    // window.innerHeight
    //game.fillRect(0, 50, 100, 100);
    //game.clearRect(50, 50, 50, 50);
    //game.clearRect(0, 0, 50, 50);
    // game.fillStyle = "Crimson";
    // game.textAlign = "left"
    // game.fillText("Game", 50, 50);
}