const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    /* =============  CASE 1  =================
    let currentColor = h1.style.color;

    if(currentColor === "blue") {
        currentColor = "tomato";
    }
    else {
        currentColor = "blue";
    }

    h1.style.color = currentColor;
    직접 구현 방식은 너무 코드도 길어지고 불편함

    ===========================================
    */ 

    /* =============  CASE 2  =================
     if(h1.className === "clicked") {
        h1.className = "";
    }

    else {
        h1.className = "clicked";
    }
    css 에 active 클래스를 만들어서 h1의 클래스를 acitve로 바꿔줌
    className 은 그냥 교체를 시켜버림 (error 가능성)
    classList 는 element의 class에 포함 되어있는지를 말해줌
    ===========================================
    */

    /* =============  CASE 3  =================
    const clickedClass = "clicked"; // 값을 상수로 저장해서 error 방지
    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    }
    else {
        h1.classList.add(clickedClass);
    }
    // 가지고있던 class를 보존 해줌
    ===========================================
    */

    // =============  CASE 4  =================
    h1.classList.toggle("clicked");
    // like switch

}

h1.addEventListener("click", handleTitleClick);