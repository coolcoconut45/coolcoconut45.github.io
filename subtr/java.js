let aname
let pass
function nameEverything() {
    aname = document.getElementById("myName").value;
    pass = document.getElementById("myPass").value;
    console.log(aname + " " + pass)
    window.location.href='main.html'
}

function doMath() {
    /* ew!
    DisGusTing!
    I hate this
    please save me
    oh god.
    help. */
    window.location.href = 'math.html';
}

function game() {
    window.location.href = 'thing.html';
}

function goMogus() {
    window.location.href = 'login.html';
}
function boo() {
    var sus = document.getElementById("butttext").value
    document.getElementById("buttbutton").innerHTML = "<button>"+sus+"</button>"
}
function gaem() {
    window.location.href = 'gam/index.html'
}
function alignType() {
    console.log(aname)
}