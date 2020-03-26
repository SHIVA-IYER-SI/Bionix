// JavaScript source code
var counter = 0;
console.log("I am comming here");

function showPic() {
    counter++;
    counter = counter % 5;
    if (counter == 0) {
        document.getElementById("first").style.display = 'block';
        document.getElementById("second").style.display = 'none';
        document.getElementById("third").style.display = 'none';
        document.getElementById("fourth").style.display = 'none';
        document.getElementById("fifth").style.display = 'none';
    } else if (counter == 1) {
        document.getElementById("first").style.display = 'none';
        document.getElementById("second").style.display = 'block';
        document.getElementById("third").style.display = 'none';
        document.getElementById("fourth").style.display = 'none';
        document.getElementById("fifth").style.display = 'none';
    } else if (counter == 2) {
        document.getElementById("first").style.display = 'none';
        document.getElementById("second").style.display = 'none';
        document.getElementById("third").style.display = 'block';
        document.getElementById("fourth").style.display = 'none';
        document.getElementById("fifth").style.display = 'none';
    } else if (counter == 3) {
        document.getElementById("first").style.display = 'none';
        document.getElementById("second").style.display = 'none';
        document.getElementById("third").style.display = 'none';
        document.getElementById("fourth").style.display = 'block';
        document.getElementById("fifth").style.display = 'none';
    } else if (counter == 4) {
        document.getElementById("first").style.display = 'none';
        document.getElementById("second").style.display = 'none';
        document.getElementById("third").style.display = 'none';
        document.getElementById("fourth").style.display = 'none';
        document.getElementById("fifth").style.display = 'block';
    }
}