const title = document.querySelector("div.hello h1");

function handleTitleClick(){
   title.style.color = "blue";
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);

//handleTitleClick() -> 이런 식으로 쓸 필요가 없음
//왜냐? 자바스크립트가 우리 대신 이 실행버튼을 눌러줄거기 때문이지
