function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    clock.textContent = timeString;

    const body = document.body;
    if (hours >= 6 && hours < 12) {
        body.className = 'morning';
    } else if (hours >= 12 && hours < 18) {
        body.className = 'afternoon';
    } else if (hours >= 18 && hours < 24) {
        body.className = 'evening';
    } else {
        body.className = 'night';
    }
}

setInterval(updateClock, 1000);
updateClock();
