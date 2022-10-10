const h1 = document.querySelector("div.hello:first-child h1");
h1.style.color = "blue";
//title.dir 속 style의 color 를 변경, 파란색이 됨

function handleTitleClick() {
    console.log("title was clicked!!!");
} // 클릭하면 실행
// HTMLHeadingElement
// developer.mozila.org에 가면 많으니 참고 or dir로 on~~ 목록

function handleMouseIsHere() {
    console.log("mouse is here");
    h1.innerText = "Mouse is here!";
}

function handleMouseIsNotHere() {
    console.log("mouse is gone");
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copy successed !")
}

function handleWindowOffline() {
    alert("SOS no WiFi");
}

h1.addEventListener("mouseenter", handleMouseIsHere);
h1.addEventListener("mouseleave", handleMouseIsNotHere);

h1.addEventListener("click", handleTitleClick); // == title2.onClick = handleTitleClick;
//addEventListener로 listener 생성, click으로 onClick함수 생성,
// handleTitleClick 호출

window.addEventListener("resize", handleWindowResize);
// 사이즈가 변할때 함수 호출
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
// window도 document 처럼 기본 내장
// document로 부를 수 있는건 head, body, title 정도
// 나머지 element들은 querySelector 를 사용