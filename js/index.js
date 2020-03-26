// JavaScript source code
var count_click = 0;

function opendropdown() {
    if (count_click == 0) {
        console.log("First");
        document.getElementById("drop").style.display = 'block';
        count_click = 1;
    } else {
        console.log("Second");
        document.getElementById("drop").style.display = "none";
        count_click = 0;
    }
}

var greetingList = [
    'Hello, World!',
    'नमस्ते!',
    'Good Day, my Liege!',
    'Hey there!',
    'Hey Jude!',
    'कसा काय!',
    'Notice me Senpai!',
    'Valar Morghulis'
]

var disp = Math.floor(Math.random() * greetingList.length);

if (disp == 1 || disp == 5) {
    document.getElementById('home_head').style.fontFamily = 'Poppins'
} else {
    document.getElementById('home_head').style.fontFamily = 'Abril Fatface'
}

document.getElementById('home_head').innerHTML = greetingList[disp];

var nameList = [
    'Shiva Iyer',
    ' शिवा अय्यर',
   
]


var disp_name = Math.floor(Math.random() * nameList.length);

if (disp_name == 0) {
    document.getElementById('my_name').style.fontFamily = 'Abril Fatface';
} else if (disp_name == 1) {
    document.getElementById('my_name').style.fontFamily = 'Poppins'
} else if (disp_name == 2) {
    document.getElementById('my_name').style.fontFamily = 'Hindi Madurai';
} else {
    document.getElementById('my_name').style.fontFamily = 'Chilanka';
}
document.getElementById('my_name').innerHTML = nameList[disp_name];

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

document.getElementById("makesticky").style.position = "fixed";