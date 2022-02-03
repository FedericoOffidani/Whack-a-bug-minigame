


var tableSize = 3;
var score = 0;
var speed = 1000;
var myIntervall;
var myTime;
const gametime = 15;
var timer = gametime;
var timeOut = true;


const createGameField = (tableSize) => {
    let grid = `<table> <tr>`;
    const rows = tableSize * tableSize
    for (let i = 1; i <= rows; i++) {
        grid += `<td id="${i}" onclick="checkWin(${i})"></td>`;
        if (i % Math.sqrt(rows) == 0 && i != rows) {
            grid += `</tr><tr>`;
            console.log("riga")
        }
        else if (i == rows) { console.log("chiusura table"); grid += `</tr></table>` };
    }
    grid += `</table>`;
    document.getElementById('gameField').innerHTML = grid;
    document.getElementById("tempo").innerText = timer;
}
createGameField(tableSize);


const max = tableSize * tableSize;
const newBug = (max) => {
    for (i = 1; i <= max; i++) { document.getElementById(i).classList.remove("assignDone", "assignFailed") };
    const ID = Math.floor(Math.random() * (max) + 1);
    console.log(ID);
    document.getElementById(ID).classList.add("assignDone");
    time = false;
}

const replay = () => {

    myIntervall = setInterval(() => { newBug(max) }, speed);
    console.log("nuovo intervllo");


}

const countdown = () => {

    timeOut = true;
    timer = gametime
    myTime = setInterval(() => {
        if (timer > 0) {
            timer--;
        }
        else {
            timer = 0; clearInterval(myTime);
            clearInterval(myIntervall);
            timeOut = false

        };
        document.getElementById("tempo").innerText = timer;

    }, 1000);
}

const resetScore= ()=>{
    score=0;
    document.getElementById("testo").innerText = score;
}

const checkWin = (Id) => {
    if (timeOut) {
        console.log(myIntervall);
        const check = document.getElementById(Id)
        if (check.classList.contains("assignDone")) {
            console.log("colpito");
            check.classList.add("assignFailed");
            counter(2);
            return true;
        }
        else {
            counter(-1);
            console.log("non colpito")
        };
    }
}


const counter = (point) => {
    timer != 0 ? score = score + point : null;
    document.getElementById("testo").innerText = score;
    if (score >= 20) {
        speed = 300;
        clearInterval(myIntervall);
        if (timer != 0) { replay() };
    }
    else if (score >= 10) {
        speed = 500;
        clearInterval(myIntervall);
        if (timer != 0) { replay() };
    }

    else if (score >= 0) { speed = 1000; }
    clearInterval(myIntervall);
    if (timeOut) { replay() };
}




