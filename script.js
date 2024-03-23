let timerInterval;
let timeLeft = 0;
let endTime = 0;
let timerRunning = false;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function startTimer(durationInSeconds) {
  clearInterval(timerInterval);

  endTime = Date.now() + (durationInSeconds * 1000);

  timerInterval = setInterval(updateTimer, 1000);
  timerRunning = true;
}

function stopTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  timeLeft = 0;
  updateTimerDisplay();
}

function updateTimer() {
  timeLeft = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
  updateTimerDisplay();

  if (timeLeft === 0) {
    clearInterval(timerInterval);
    timerRunning = false;
  }
}

function updateTimerDisplay() {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  timerDisplay.textContent = formattedTime;
}

startButton.addEventListener('click', () => {
  const durationInSeconds = parseInt(prompt('Enter the duration in seconds:'));

  if (!isNaN(durationInSeconds)) {
    startTimer(durationInSeconds);
  }
});

stopButton.addEventListener('click', () => {
  stopTimer();
});

resetButton.addEventListener('click', () => {
  resetTimer();
});
