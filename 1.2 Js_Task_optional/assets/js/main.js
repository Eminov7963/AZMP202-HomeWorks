const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const span_hour = document.querySelector("#hour");
const span_minute = document.querySelector("#minute");
const span_second = document.querySelector("#second");

const start = document.querySelector("#start");

let countdownInterval = null;
start.addEventListener("click", () => {
  if (countdownInterval !== null) return;
  let hour_value = parseInt(hour.value);
  let minute_value = parseInt(minute.value);
  let second_value = parseInt(second.value);
  if (
    isNaN(hour_value) ||
    isNaN(minute_value) ||
    isNaN(second_value) ||
    hour_value < 0 ||
    minute_value < 0 ||
    second_value < 0
  ) {
    console.log(`duzgun deyer girin`);
  } else {
    if (hour_value <= 12 && minute_value <= 60 && second_value <= 60) {
      span_hour.textContent = hour_value;
      span_minute.textContent = minute_value;
      span_second.textContent = second_value;
      countdownInterval = setInterval(() => {
        if (second_value > 0) {
          second_value--;
          span_second.textContent = second_value;
        }
        if (second_value === 0 && minute_value > 0) {
          minute_value--;
          span_minute.textContent = minute_value;
          second_value = 59;
        }
        if (minute_value === 0) {
          if (hour_value > 0) {
            hour_value--;
            span_hour.textContent = hour_value;
            minute_value = 59; 
          }
        }
        if (hour_value === 0 && minute_value === 0 && second_value === 0) {
          clearInterval(countdownInterval);
          countdownInterval = null;
          console.log(`vaxt bitmisdir`);

        }
      }, 10);
    } else {
      console.log(`zehmet olmasa duzgun girin`);
    }
  }
});
