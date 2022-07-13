const maxInput = document.querySelector("#max");
const mainForm = document.querySelector("#mainform");
const numberInput = document.querySelector("#input1");

const answer = document.querySelector("#answer");
const winOrLose = document.querySelector("#win_or_lose");

function play(event) {
    event.preventDefault();
    const max = parseInt(maxInput.value);
    const input = parseInt(numberInput.value);
    const random = Math.floor(Math.random()*max);

    output(input, random);

    if(input === random){
        winOrLose.innerText = '🤩 You Win! 🤩';
    } else {
        winOrLose.innerText = '😭 You Lost! 😭';
    }
}

function output(i, r) {
    answer.innerText = `your choce : ${i}, machine choce : ${r}`;
}

mainForm.addEventListener("click", play);