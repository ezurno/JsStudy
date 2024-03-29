const loginForm = document.querySelector("#login_form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// document에서 한번 가져오면 loginForm으로 계속 끌어올 수 있음
// value 감지

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/*
function onLoginSubmit() {
    const username = loginInput.value;
    // if (username === "") {
    //     alert("Please write your name.");
    // } else if(15 < username.length) {
    //     alert("Your name is too long.")
    // } 유효성 검사 (권장 되지 않음)
    // ====== html의 required maxlength 사용 ======
    console.log(username);
} 
    // 새로고침이 반복되는 현상이 있음
*/

function onLoginSubmit(event) { // event를 인자로 받고
    event.preventDefault(); 
    // form 을 제출하면 윈도우 창이 새로고침 되는데 이를 막기 위한 함수
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);

    paintGreetings(username);
    
    window.localStorage.setItem(USERNAME_KEY, username);
    // localStorage 브라우저에 특정 값을 저장하게 해줌 setItem, getItem, removeItem
}

//loginButton.addEventListener("click", onLoginBtnClick);
//loginForm.addEventListener("submit", onLoginSubmit); // form으로 묶어서 제출

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

const savedUsername = window.localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    //show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}

else {
    // show the greetings
    paintGreetings(savedUsername);
    
}