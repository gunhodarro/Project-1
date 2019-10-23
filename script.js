document.getElementById("flipping").addEventListener("click", flip);
function flip() {
  console.log("flipping");
  x = Math.floor(Math.random() * 2);
  console.log(x);
  if (x === 0) {
    document.getElementById("result").innerHTML = "Genre 1";
    console.log("heads");
  } else {
    document.getElementById("result").innerHTML = "Genre 2";
    console.log("tails");
  }
}
// document.getElementById("resetBtn").addEventListener("click");
