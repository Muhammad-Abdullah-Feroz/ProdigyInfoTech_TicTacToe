console.log(`javascript started`);
var wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

var boxtext = Array.from(document.querySelectorAll(".box .boxtext"))
var boxes = document.querySelectorAll(".box")
var info = document.querySelector(".info-container")
var turn = 'X'
var win = false

const gameWon = ()=>{
    info.style.display = "flex"
    info.querySelector("span").innerHTML = `Player ${turn} won the game....`
}

const gameDraw = ()=>{
    info.innerHTML = "<h1>Draw!!!</h1>"
    info.style.display = "flex"
}

const checkDraw = ()=>{
    let draw = false;
    if (win == false){
        draw = true;
        for (const text of boxtext) {
            if (text.innerHTML == '' ){
                draw = false;
                break;
            }
        }
    }
    return draw;
}

const checkWin = ()=>{
    for (const chance of wins) {
        // console.log(boxtext[chance[0]].innerHTML,boxtext[chance[1]].innerHTML,boxtext[chance[2]].innerHTML);
        if((boxtext[chance[0]].innerHTML == boxtext[chance[1]].innerHTML) && (boxtext[chance[2]].innerHTML == boxtext[chance[1]].innerHTML) && boxtext[chance[0]].innerHTML != ''){
            win = true;
            console.log(win);
            break;
        }
    }
    if (win){
        Array.from(boxes).forEach((e)=>{
            e.removeEventListener("click",changeTurn())
            gameWon()
        })
    }
}

const changeTurn = ()=>{
    if(turn == 'X'){
        turn = 'O'
    }else{
        turn = 'X'
    }
}

Array.from(boxes).forEach((e,i)=>{
    e.addEventListener("click",()=>{
        console.log(e);
        if(boxtext[i].innerHTML == ''){
            boxtext[i].innerHTML = turn
            console.log(boxtext[i].innerHTML);
            changeTurn()
            if(checkDraw()){
                gameDraw()
            }
            checkWin()
        }
    })
})
// console.log(boxes);

