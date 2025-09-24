// draw bg

function setupCanvas() {
const canvas = document.getElementById('gameCanvas'); //gets the canvas element
const ctx = canvas.getContext('2d');

const backgroundImage = new Image();
backgroundImage.src = 'tictactoe.png'; // Replace with your image path

backgroundImage.onload = () => {
  // Draw the image to cover the entire canvas
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  // You can also draw it at a specific position or tile it if needed
};
}

// draw image


function drawImageOnClick() { // draw x or o on click
const canvas1 = document.getElementById("gameCanvas"); // get canvas
const ctx2 = canvas1.getContext("2d"); // get context
let image1 = document.getElementById("ximgoroimg"); // get image
let xory2 = true // true for x false for o
let timesClicked = 0 // count clicks (max 9)
addEventListener("click", (e) => { // event
    console.log(e.pageX - 66, e.pageY - 66) // this SHOULD work, but it doesn't

  ctx2.drawImage(image1, e.pageX, e.pageY); // draw
timesClicked += 1 // add 1 to clicks
  xory2 =! xory2 // toggle stuff ig


  if (xory2 == true) { // chang img
    image1.src = "ximg.png" // src to x
    document.getElementById("status").innerHTML = "<p>X's turn</p>"
  } else {
    image1.src = "oimg.png" // src to o
    document.getElementById("status").innerHTML = "<p>O's turn</p>"
  }
  if (timesClicked == 9) { // if 9 clicks
    setTimeout(() => {
  window.location.href = 'gameover.html';
}, 1000); // 2000 milliseconds = 2 seconds
  } else if (timesClicked > 9) { // if less than 9 clicks 
    console.log("idk they didnt do anything boss let them play.")
  }
});
}
// why dont it do?

// hol up

function doAll() {
    setupCanvas();
    drawImageOnClick();
}

// maybe p onload is doin?