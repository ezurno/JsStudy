const toDoForm = document.querySelector("#todo_form");
const toDoList = document.querySelector("#todo_list");
const toDoInput = document.querySelector("#todo_input");

const TODOS_KEY = "toDos";
let toDos = [];

function paintToDo(newToDo) {
  const li = document.createElement("li"); // li 태그 생성
  li.id = newToDo.id; // html 에 li 태그의 id를 지정 해줘서 html에서도 제어 가능하게 변경
  const span = document.createElement("span"); // span 태그 생성
  const button = document.createElement("button");

  button.innerText = "❎";
  button.addEventListener("click", deleteToDo); //delete 버튼이 클릭 될 떄 동작 구현

  li.appendChild(span); // li 태그 안에 span 태그를 넣어주기 위함
  li.appendChild(button);
  span.innerText = newToDo.text;
  toDoList.appendChild(li);
}

function deleteToDo(event) {
  const li = event.target.parentElement; // button의 부모태그로 넘어가서
  li.remove(); // 지우기
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // toDos 의 배열에 지울 li의 id와 다른것만 남김
  // id 값이 string으로 되어있으므로 parseInt로 바꿔서 타입을 일치 시켜주어야 정상 작동

  saveToDos();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  const newToDoObj = {
    // value 의 id 값을 넣어서 제어 하기 위함
    text: newToDo,
    id: Date.now(),
  };

  paintToDo(newToDoObj);
  toDos.push(newToDoObj); // 작성 한 것을 toDos에 저장 후 새로고침해도 나오게끔
  saveToDos(); // toDos[] 의 값을 localStorage에 저장
}

function saveToDos() {
  //localStorage.setItem("toDos", toDos); // localStorage에 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  // 그냥 저장은 배열로 안되기때문에 스트링으로 일단 만들어서
  // 배열로 저장하기 위함
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // toDos에 저장한 값을 가져옴

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  // savedToDos가 null이 아닐때 배열로 다시 변경
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  // 각각의 배열값에 대해 실행
}
