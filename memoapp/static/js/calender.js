const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById('currentMonthYear').innerText = `${monthNames[currentMonth]} ${currentYear}`;

document.getElementById('prevMonth').addEventListener('click', () => {
    currentMonth = (currentMonth - 1 + 12) % 12;
    if (currentMonth === 11) {
        currentYear--;
    }
    updateCalendar();
});

document.getElementById('nextMonth').addEventListener('click', () => {
    currentMonth = (currentMonth + 1) % 12;
    if (currentMonth === 0) {
        currentYear++;
    }
    updateCalendar();
});

function updateCalendar() {
    const firstDay = (new Date(currentYear, currentMonth)).getDay();
    const daysInMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();

    const cells = document.getElementById('calendarCells');
    cells.innerHTML = '';

    for (let i = 0; i < firstDay; i++) {
        cells.appendChild(document.createElement('div'));
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const cell = document.createElement('div');
        cell.innerText = i;
        cells.appendChild(cell);
    }

    document.getElementById('currentMonthYear').innerText = `${monthNames[currentMonth]} ${currentYear}`;
}

updateCalendar();
