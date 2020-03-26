// JavaScript source code
function loadSession() {
    console.log("I am here");
    refreshForm()
    if ('count' in sessionStorage) {
        var count = sessionStorage.getItem('count');
    } else {
        var count = 0;
    }
    if (count > 0) {
        document.getElementById('empty').style.display = 'none';
        var count = sessionStorage.getItem('count');
        var table = document.getElementById('skill_table');
        for (var i = 0; i < count; i++) {
            var entry = Array.from(sessionStorage.getItem(i).split(','));
            table.innerHTML += '<tr><td>' + entry[0] + '</td><td>' + entry[1] + '</td><td>' + entry[2] + '</td><td>' + entry[3] + '</td></tr>';
        }
    }
}

function addSkill() {
    document.getElementById('empty').style.display = 'none';
    var newName = document.getElementsByName('inputName')[0].value;
    var newSkill = document.getElementsByName('inputSkill')[0].value;
    var newLvl = document.getElementsByName('inputProfeciency')[0].value;
    var newCmt = document.getElementsByName('inputComments')[0].value;
    if ('count' in sessionStorage) {
        var count = sessionStorage.getItem('count');
    } else {
        var count = 0;
    }
    sessionStorage.setItem(count, [newName, newSkill, newLvl, newCmt])
    count++;
    sessionStorage.setItem('count', count);
    var table = document.getElementById('skill_table');
    table.innerHTML += '<tr><td>' + newName + '</td><td>' + newSkill + '</td><td>' + newLvl + '</td><td>' + newCmt + '</td></tr>';
    refreshForm();
}

function refreshForm() {
    document.getElementsByName('inputName')[0].value = '';
    document.getElementsByName('inputSkill')[0].value = '';
    document.getElementsByName('inputProfeciency')[0].value = '';
    document.getElementsByName('inputComments')[0].value = '';
}