let startButton = document.getElementById('startButton');
let stopButton = document.getElementById('stopButton');
let resetButton = document.getElementById('resetButton');
let timeDisplay = document.getElementById('display');

let time = 0;
let timerId = null;

startButton.addEventListener('click', (event) => {
  timerId = setInterval(() => {
    time += 100;
    timeDisplay.innerText = time;
  }, 100)
});

stopButton.addEventListener('click', (event) => {
  clearInterval(timerId);
});
