// 2 Player Dice Game
function dRoll() {
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    s1 = "dice/" + d1 + ".png";
    s2 = "dice/" + d2 + ".png";
    document.getElementById("r1").src = s1;
    document.getElementById("r2").src = s2;
    if (d1 == d2) {
    output("result", "Draw");
    } else {
        output("result", (d1 > d2) ? "P1 Wins!":"P2 Wins!");
    }
}

function output(x, y) {
    var m = document.getElementById(x).innerHTML = y;
    return m;
}

function start() {
    dRoll();
}
