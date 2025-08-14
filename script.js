document.addEventListener('DOMContentLoaded', () => {
    const monthSelect = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    const stateHolidays = {
        ES: ['17/4'],
        SP: ['9/7', '20/11'],
        RJ: ['23/4']
    };

    const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const holidaysCache = {};
    let userLocationCache = null;

    const populateMonths = () => {
        monthNames.forEach((name, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = name;
            monthSelect.appendChild(option);
        });
    };

    const getUserLocation = async () => {
        if (userLocationCache) {
            return userLocationCache;
        }
        try {
            const response = await fetch('https://ip-api.com/json/?fields=countryCode,region');
            const data = await response.json();
            if (data.countryCode === 'BR') {
                userLocationCache = { state: data.region };
                return userLocationCache;
            }
        } catch (error) {
            console.error("Erro ao obter localização:", error);
        }
        return { state: null };
    };

    const getNationalHolidaysForYear = async (year) => {
        if (holidaysCache[year]) {
            return holidaysCache[year];
        }
        try {
            const response = await fetch(`https://brasilapi.com.br/api/feriados/v1/${year}`);
            if (!response.ok) return [];
            const data = await response.json();
            const formattedHolidays = data.map(holiday => {
                const date = new Date(holiday.date);
                return `${date.getUTCDate()}/${date.getUTCMonth() + 1}`;
            });
            holidaysCache[year] = formattedHolidays;
            return formattedHolidays;
        } catch (error) {
            console.error("Erro ao buscar feriados nacionais:", error);
            return [];
        }
    };

    const isHoliday = async (date, userState) => {
        const year = date.getFullYear();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const key = `${day}/${month}`;

        const nationalHolidays = await getNationalHolidaysForYear(year);
        if (nationalHolidays.includes(key)) {
            return true;
        }

        if (userState && stateHolidays[userState]) {
            if (stateHolidays[userState].includes(key)) {
                return true;
            }
        }

        return false;
    };

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const calculateFifthBusinessDay = async () => {
        calculateBtn.disabled = true;
        calculateBtn.textContent = 'Calculando...';
        resultDiv.classList.remove('visible');

        const { state: userState } = await getUserLocation();
        const month = parseInt(monthSelect.value);
        const year = parseInt(yearInput.value);

        if (isNaN(year) || year < 1900 || year > 2200) {
            resultDiv.innerHTML = `<span class="result-label">Por favor, insira um ano válido.</span>`;
            resultDiv.className = 'result-area error visible';
            calculateBtn.disabled = false;
            calculateBtn.textContent = 'Calcular';
            return;
        }

        let businessDaysCount = 0;
        let currentDate = new Date(year, month, 1);

        while (businessDaysCount < 5) {
            const dayOfWeek = currentDate.getDay();
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

            if (!isWeekend && !(await isHoliday(currentDate, userState))) {
                businessDaysCount++;
            }

            if (businessDaysCount < 5) {
                currentDate.setDate(currentDate.getDate() + 1);
            }
        }

        setTimeout(() => {
            resultDiv.innerHTML = `<span class="result-label">O 5º dia útil será em:</span><span class="result-date">${formatDate(currentDate)}</span>`;
            resultDiv.className = 'result-area success visible';
            calculateBtn.disabled = false;
            calculateBtn.textContent = 'Calcular';
        }, 100);
    };

    populateMonths();
    yearInput.value = new Date().getFullYear();
    monthSelect.value = new Date().getMonth();

    calculateBtn.addEventListener('click', calculateFifthBusinessDay);

    calculateFifthBusinessDay();
});