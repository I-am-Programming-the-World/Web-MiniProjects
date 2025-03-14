const timeZones = [
    { id: 'newyork', name: 'New York', zone: 'America/New_York' },
    { id: 'london', name: 'London', zone: 'Europe/London' },
    { id: 'paris', name: 'Paris', zone: 'Europe/Paris' },
    { id: 'tokyo', name: 'Tokyo', zone: 'Asia/Tokyo' },
    { id: 'sydney', name: 'Sydney', zone: 'Australia/Sydney' },
    { id: 'dubai', name: 'Dubai', zone: 'Asia/Dubai' }
];

let is24HourFormat = false;
const clocksContainer = document.querySelector('.clocks-grid');

// Initialize clock cards
timeZones.forEach(tz => {
    const clockCard = document.createElement('div');
    clockCard.className = 'clock-card';
    clockCard.innerHTML = `
        <div class="location">${tz.name}</div>
        <div class="time" id="${tz.id}-time"></div>
        <div class="timezone" id="${tz.id}-tz"></div>
    `;
    clocksContainer.appendChild(clockCard);
});

function updateClocks() {
    timeZones.forEach(tz => {
        const options = {
            timeZone: tz.zone,
            hour12: !is24HourFormat,
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit'
        };
        
        const timeString = new Date().toLocaleTimeString('en-US', options);
        const timeZoneString = new Date().toLocaleTimeString('en-US', {
            timeZoneName: 'long',
            timeZone: tz.zone
        }).split(' ')[2];
        
        document.getElementById(`${tz.id}-time`).textContent = timeString;
        document.getElementById(`${tz.id}-tz`).textContent = timeZoneString;
    });
}

document.getElementById('toggleFormat').addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    updateClocks();
});

// Initial update and interval
updateClocks();
setInterval(updateClocks, 1000);

// Add smooth transition on load
window.addEventListener('load', () => {
    document.body.style.opacity = 1;
});