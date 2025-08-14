// Use setInterval() for a live digital clock


const time = setInterval(timeNow, 1000)

function timeNow() {
    const t = new Date();

    let hr  = t.getHours(); // Get the local hours
    let min = t.getMinutes(); // Get the local minutes
    let sec = t.getSeconds(); // Get the local seconds

    let defaultTime = "am"; // The default is AM if it’s before midday

    if (hr > 12) {
        hr -= 12;
        defaultTime = "pm";
    } // Change the format if it is above 12 PM noon, and change the default AM to PM

    document.getElementById("live-clock").innerHTML = hr + ":" + min + ":" + sec+defaultTime; // display
}