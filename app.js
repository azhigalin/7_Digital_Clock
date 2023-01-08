window.addEventListener("load", calcDate);

function calcDate() {
  let date = new Date(),
    dayNumber = date.getDay(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    ampm = hour >= 12 ? "PM" : "AM",
    dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  hour = hour % 12;
  hour = hour ? hour : "12";
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;

  document.querySelector("#day").textContent = dayNames[dayNumber];
  document.querySelector("#hour").textContent = hour;
  document.querySelector("#minute").textContent = minute;
  document.querySelector("#ampm").textContent = ampm;
}

setInterval(calcDate, 100);
