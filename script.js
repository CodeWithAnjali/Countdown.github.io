let timer;
let isRunning = false;

function startTimer(durationInSeconds) {
    let timerDisplay = document.getElementById('timer-display');
    let startButton = document.getElementById('start');
    let stopButton = document.getElementById('stop');
    let resetButton = document.getElementById('reset');
    
    let startTime = Date.now();
    let endTime = startTime + (durationInSeconds * 1000);

    function updateTimer() {
        let currentTime = Date.now();
        let remainingTime = endTime - currentTime;
        
        if (remainingTime <= 0) {
            clearInterval(timer);
            timerDisplay.textContent = '00:00:00';
            isRunning = false;
            startButton.disabled = false;
        } else {
            let hours = Math.floor(remainingTime / 3600000);
            let minutes = Math.floor((remainingTime % 3600000) / 60000);
            let seconds = Math.floor((remainingTime % 60000) / 1000);

            timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }

    startButton.disabled = true;
    isRunning = true;
    timer = setInterval(updateTimer, 1000);

    stopButton.addEventListener('click', () => {
        clearInterval(timer);
        isRunning = false;
        startButton.disabled = false;
    });

    resetButton.addEventListener('click', () => {
        clearInterval(timer);
        timerDisplay.textContent = '00:00:00';
        isRunning = false;
        startButton.disabled = false;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start');
    startButton.addEventListener('click', () => {
        if (!isRunning) {
            startTimer(3600); // Set the countdown time in seconds (e.g., 3600 seconds = 1 hour)
        }
    });
});


