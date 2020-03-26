// JavaScript source code
var n = sessionStorage.getItem('on_load_counter');

if (n === null) {
    n = 0;
}

n++;

sessionStorage.setItem("on_load_counter", n);

document.getElementById('vis').innerHTML = n;