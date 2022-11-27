const imgs = ["bgImg_1.jpg", "bgImg_2.jpg", "bgImg_3.jpg"];

const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];

const background = document.querySelector(".background");

const bgImg = document.createElement("img"); // 변수 만들기

bgImg.src = `img/${chosenImg}`;
// bgImg의 src를 img/bgImg_1.jpg로 바꿔줌

background.appendChild(bgImg); // body에 appendChild로 값 입력
