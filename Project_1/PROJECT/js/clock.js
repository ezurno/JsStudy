const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  // padStart(2, "0"); length 길이의 0으로 시작 , padEnd도 있음

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello, 5000);
// // setInterval 함수로 sayHello를 5000ms 마다 실행
// setTimeout(sayHello, 5000);

getClock(); // 홈페이지가 실행되고 나서부터 시작되게 끔
setInterval(getClock, 1000); // 1초마다 갱신
