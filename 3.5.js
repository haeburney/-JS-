const hello = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    hello.style.color = "blue";
}

function handleMouseEnter() {
    hello.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    hello.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}


hello.addEventListener("click",handleTitleClick);
hello.addEventListener("mouseenter",handleMouseEnter);
hello.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
