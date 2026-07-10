function chngdice() {

    var randno1 = Math.floor(Math.random() * 6) + 1;
    var randomImage1 = "./dice" + randno1 + ".png";
    document.querySelector(".img1").setAttribute("src", randomImage1);

    var randno2 = Math.floor(Math.random() * 6) + 1;
    var randomImage2 = "./dice" + randno2 + ".png";
    document.querySelector(".img2").setAttribute("src", randomImage2);

    if (randno1 > randno2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins";
        document.querySelector("h1").style.color = "#00ff6a";
        document.body.style.background = "green";

    } else if (randno2 > randno1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins";
        document.querySelector("h1").style.color = "#08c5de";
        document.body.style.background = "blue";

    } else {
        document.querySelector("h1").innerHTML = "Draw";
        document.querySelector("h1").style.color = "#ffd700";
        document.body.style.background = "lightyellow";
    }
}