let inputDir = { x: 0, y: 0 };
let speed = 20;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [
    { x: 13, y: 15 }
]
food = { x: 6, y: 7 };





//GAME FUNCATIONS
function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();

}
function isCollide(snake) {
    //if you bumpt into your self
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
        if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0) {
            return true;
        }

}

function gameEngine() {
    //PART 1 : UPDATING THE SNAKE ARRAY & FOOD
    if (isCollide(snakeArr)) {
        inputDir = { x: 0, y: 0 };
        alert("GAME OVER PRESS ANY KEY TO PLAY AGAIN!")
        snakeArr[{ x: 13, y: 15 }];
        score = 0;
    }

    //IF YOU HAVE EATEN THE FOOD INCREMENT THE SCORE AND REGENERATE THE FOOD
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        score += 1;
    if(score>hiscoreval){
        hiscoreval = score;
        localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
    }
        scoreBox.innerHTML = "score: " + score;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }


    }

    //MOVING THE SNAKE
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };


    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;



    //PART2 : DISPLAY THE SNAKE & FOOD
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add('head');
        }
        else {
            snakeElement.classList.add('snake');
        }

        board.appendChild(snakeElement);

    });

    foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);

}








//MAIN LOGIC STARTS HERE

let hiscore = localStorage.getItem("hiscore")
if(hiscore === null){
    hiscoreval = 0;
 localStorage.setItem("hiscore", JSON.stringify(hiscoreval))

}
else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "Hiscore: " + hiscore;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 }
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;


        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        default:
            break;
    }
})


