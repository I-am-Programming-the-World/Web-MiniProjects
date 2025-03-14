function updateClock() {
	// Get the current date and time
    const now = new Date();
	
	// Extract and format the time
    let hours = now.getHours();
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format; 0 becomes 12
    const hoursStr = hours.toString().padStart(2, '0');
    const minutesStr = now.getMinutes().toString().padStart(2, '0');
    const secondsStr = now.getSeconds().toString().padStart(2, '0');
	
	// Construct the time string with the period in a span
    const timeString = `${hoursStr}:${minutesStr}:${secondsStr} <span class="period">${period}</span>`;
	
	// Update the clock div
    document.getElementById('clock').innerHTML = timeString;
	
	// Extract and format the date
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
	
	// Construct the date string
    const dateString = `${day}, ${month} ${date}, ${year}`;

    // Update the date div
    document.getElementById('date').innerHTML = dateString;
}