function updateClock() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    const now = new Date();
    
    // Get the time in IST (Indian Standard Time)
    const options = { timeZone: "Asia/kolkata", hour12: true };
    const ISTTime = now.toLocaleString("en-GB", options); 
    
    // Extract hours, minutes, and seconds from IST time string
    const [date, time] = ISTTime.split(", ");
    const [hours, minutes, seconds] = time.split(":");

    // Updating the elements with the IST time values
    hoursElement.textContent = hours.padStart(2, "0");
    minutesElement.textContent = minutes.padStart(2, "0");
    secondsElement.textContent = seconds.padStart(2, "0");
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial clock setup
updateClock();

