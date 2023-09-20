let intervalId;
        let isRunning = false;
        let seconds = 0;
        let minutes = 0;
        let hours = 0;

        const timerDisplay = document.getElementById('timer');
        const comeca = document.getElementById('comeca');
        const parar = document.getElementById('parar');
        const continuar = document.getElementById('continuar');
        const resetar = document.getElementById('resetar');

        function formatTime() {
            const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
            const formattedHours = hours < 10 ? `0${hours}` : hours;
            return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        }

        function startTimer() {
            if (!isRunning) {
                intervalId = setInterval(() => {
                    seconds++;
                    if (seconds === 60) {
                        seconds = 0;
                        minutes++;
                        if (minutes === 60) {
                            minutes = 0;
                            hours++;
                        }
                    }
                    timerDisplay.textContent = formatTime();
                }, 1000);
                isRunning = true;
            }
        }

        function pauseTimer() {
            clearInterval(intervalId);
            isRunning = false;
        }

        function resumeTimer() {
            startTimer();
        }

        function resetTimer() {
            clearInterval(intervalId);
            isRunning = false;
            seconds = 0;
            minutes = 0;
            hours = 0;
            timerDisplay.textContent = formatTime();
        }

        comeca.addEventListener('click', startTimer);
        parar.addEventListener('click', pauseTimer);
        continuar.addEventListener('click', resumeTimer);
        resetar.addEventListener('click', resetTimer);