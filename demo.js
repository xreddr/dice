// 2 Player Dice Game
var w1 = 0;
var w2 = 0;
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
        if (d1 > d2) {
            w1 += 1;
        }else if (d2 > d1) {
            w2 += 1;
        }
    }
    output("win1", w1);
    output("win2", w2);
}

function output(x, y) {
    var m = document.getElementById(x).innerHTML = y;
    return m;
}


