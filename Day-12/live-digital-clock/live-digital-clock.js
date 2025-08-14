// Use setInterval() for a live digital clock


const time = setInterval(timeNow, 1000)

function timeNow() {
    const t = new Date();

    let hr  = t.getHours();
    let min = t.getMinutes();
    let sec = t.getSeconds();

    let defaultTime = "am";

    if (hr > 12) {
        hr -= 12;
        defaultTime = "pm";
    }

    document.getElementById("live-clock").innerHTML = hr + ":" + min + ":" + sec+defaultTime;
}