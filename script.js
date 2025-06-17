/***
        JAVA SCRIPTTTTTTTTT
***/

// Open/Close the Windows
function openWindow(id) {
    var windowOpen = document.getElementById(id);
    windowOpen.style.display = "block";
}

function closeWindow(id) {
    var windowClose = document.getElementById(id);
    windowClose.style.display = "none";
}


// Display user time in clock
function theTime() {
    const today = new Date();
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');

    document.getElementById('time').textContent = hours + ":" + minutes;

    setTimeout(theTime, 1000);
}
function theDate() {
    var date = new Date();
    var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var day = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();

    document.getElementById("date").innerHTML = day + "/" + month + "/" + year;
}

function loadingScripts() {
    theTime();
    theDate();
}