/* I hate this.
I hate all of this.
I am going against my morals.
This is not good. */
var numb1
var numb2
// get the random numbers
function getRand() {
    numb1 = Math.floor(Math.random() * 11);
    numb2 = Math.floor(Math.random() * 11);
    console.log(numb1 + " - " + numb2)
    ayay = 0 + numb1 - numb2
    console.log(ayay)
}
function showRand() {
    var string2 = "<h2>" + numb1 + " - " + numb2 + " " + "</h2>";
    document.getElementById("texter").innerHTML += string2;
    thing = numb1 - numb2;
    console.log(thing);
    console.log("if you found this, good job!");
}
function getBoth() {
    getRand();
    showRand();
}
function checkAnswer() {
    var jsi = false
    possibleAnswer = document.getElementById("answerId").value
    console.log(possibleAnswer)
    number2 = parseInt(possibleAnswer)
    if (possibleAnswer === '') {
        var sure = confirm("No input, do you want to submit?")
        if (sure == true) {
            window.location.href='incorrect.html'
        }
        else {
            jsi = true
        }
    }
    if(number2 === numb1 - numb2) {
        if (jsi === false) {
            window.location.href='correct.html'
        }
    }
    else {
        if (jsi === false) {
            window.location.href='incorrect.html'
        }
    }
}
function nextQues() {
    window.location.href = 'math.html'
}
function something() {
    alert("Do something")
}
function analytics() {
    window.location.href='analytics.html'
}
/*
so many random ✨window.location.href=''✨ idk why i put them here 
i so good at coding definitely not sloppy
*/
function tetxarea() {
    window.location.href='text.html'
}