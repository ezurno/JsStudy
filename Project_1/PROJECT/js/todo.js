const toDoForm = document.querySelector("#todo_form");
const toDoList = document.querySelector("#todo_list");
const toDoInput = document.querySelector("#todo_input");

function paintToDo(newToDo) {
  const li = document.createElement("li"); // li 태그 생성
  const span = document.createElement("span"); // span 태그 생성
  const button = document.createElement("button");

  button.innerText = "❎";
  button.addEventListener("click", deleteToDo); //delete 버튼이 클릭 될 떄 동작 구현

  li.appendChild(span); // li 태그 안에 span 태그를 넣어주기 위함
  li.appendChild(button);
  span.innerText = newToDo;
  toDoList.appendChild(li);
}

function deleteToDo(event) {
  const li = event.target.parentElement; // button의 부모태그로 넘어가서
  li.remove(); // 지우기
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
