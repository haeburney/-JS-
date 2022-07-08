const hello = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const currentColor = hello.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor="tomato";
    } else{
        newColor="blue";
    }
   hello.style.color = newColor;
}



hello.addEventListener("click",handleTitleClick);
