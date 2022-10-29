const API_KEY = "cb330dde2831867650c43efd53af7726";
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

function onGeoOk(position) {
  const lat = position.coords.latitude; //위도
  const lng = position.coords.longitude; // 경도
  console.log("Your position is ", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.sys.country, data.name, data.weather[0].main);

      const country = document.querySelector("#weathers #country");
      const city = document.querySelector("#weathers #city");
      const weather = document.querySelector("#weathers #weather");
      country.innerHTML = data.sys.country;
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} 'C`;
    });

  //fetch로 url 속 원하는 값을 가져옴
}

// 위치 반환 콜백 함수

function onGeoError() {
  alert("Cannot find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 브라우저의 위치 반환 GPS
// getCurrentPosition 은 두가지 매개변수가 필요 1. 정상작동 2. 오류
