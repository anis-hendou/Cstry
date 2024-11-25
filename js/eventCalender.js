<script>
document.addEventListener('DOMContentLoaded', function () {
        const monthYear = document.getElementById('month-year');
        const daysContainer = document.getElementById('days');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');

        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        let currentDate = new Date();

        function renderCalendar(date) {
            const year = date.getFullYear();
            const month = date.getMonth();
            const firstDay = new Date(year, month, 1).getDay();
            const lastDay = new Date(year, month + 1, 0).getDate();

            monthYear.textContent = `${months[month]} ${year}`;
            daysContainer.innerHTML = '';

            // Previous month's dates
            const prevMonthLastDay = new Date(year, month, 0).getDate();
            for (let i = firstDay; i > 0; i--) {
                const dayDiv = document.createElement('div');
                dayDiv.textContent = prevMonthLastDay - i + 1;
               
                dayDiv.classList.add('empty');
                daysContainer.appendChild(dayDiv);
            }

            // Current month's dates
            for (let i = 1; i <= lastDay; i++) {
                const dayDiv = document.createElement('div');
                dayDiv.textContent = i;
                dayDiv.className = 'day';
                if (i === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
                    dayDiv.classList.add('day');
                }

                daysContainer.appendChild(dayDiv);
            }

            // Next month's dates
            const nextMonthStartDay = 7 - new Date(year, month + 1, 0).getDay() - 1;
            for (let i = 1; i <= nextMonthStartDay; i++) {
                const dayDiv = document.createElement('div');
                dayDiv.textContent = i;
               
                dayDiv.classList.add('empty');
                daysContainer.appendChild(dayDiv);
            }
        }

        prevButton.addEventListener('click', function () {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar(currentDate);
        });

        nextButton.addEventListener('click', function () {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar(currentDate);
        });

        renderCalendar(currentDate);
    });
</script>