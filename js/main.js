document.addEventListener("DOMContentLoaded", () => {
  const finalDate = new Date("Oct 15 2021 12:00:00");

  const daysValue = document.querySelector("#timerDaysCount");
  const hoursValue = document.querySelector("#timerHoursCount");
  const minutesValue = document.querySelector("#timerMinuteCount");
  const secondsValue = document.querySelector("#timerSecondsCount");

  const formatTimeValue = (value) =>
    value.toString().length < 2 ? `0${value}` : value;

  const timeCompute = () => {
    let lastUntilTime = finalDate - Date.now();

    let days = Math.floor(lastUntilTime / 1000 / 60 / 60 / 24);
    let hours = Math.floor(lastUntilTime / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(lastUntilTime / 1000 / 60) % 60;
    let seconds = Math.floor(lastUntilTime / 1000) % 60;

    daysValue.textContent = formatTimeValue(days);
    hoursValue.textContent = formatTimeValue(hours);
    minutesValue.textContent = formatTimeValue(minutes);
    secondsValue.textContent = formatTimeValue(seconds);
  };

  timeCompute();
  setInterval(timeCompute, 1000);
});
