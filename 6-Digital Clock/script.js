setInterval(() => {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var period = "AM";
    if (hours >= 12) {
        period = "PM";
    }
    if (hours > 12) {
        hours -= 12;
    }
    if (hours === 0) { // Handle midnight case
        hours = 12;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + period;

    var clock = document.getElementById('clock');
    clock.innerText = clockTime;
}, 1000);