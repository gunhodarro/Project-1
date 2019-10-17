document.getElementById('click').onclick = click;

var heads = 0;
var tails = 0;
function click() {
    x = (Math.floor(Math.random() * 2) == 0);
    if (x) {
        flip("heads");
    } else {
        flip("tails");
    }
};
function flip(coin) {
    document.getElementById("result").innerHTML = coin;
};

// Gets Link for Theme Song
var coinGif = document.createElement("gif");
AnimationEvent.setAttribute("src", "coin-icon.gif");

// Theme Button
$(".flip-button").on("click", function () {
    AnimationEffect.play();
});
$(".pause-button").on("click", function () {
    AnimationEffect.pause();
});