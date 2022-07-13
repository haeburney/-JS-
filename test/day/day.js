const clock = document.querySelector("h2#clock");

function christmas(){
    const today = new Date();
    const christmasDay = new Date("2022-12-25");
    const gap = christmasDay- today;

    const dDay = Math.floor(gap/(1000*24*60*60));
    const dHours = String(Math.floor((gap/(1000*60*60))%24)).padStart(2, "0");
    const dMinutes = String(Math.floor((gap/(1000*60))%60)).padStart(2, "0");
    const dSeconds = String(Math.floor((gap/1000)%60)).padStart(2, "0");

    clock.innerText = `${dDay}일 ${dHours}시간 ${dMinutes}분 ${dSeconds}초`;
}

christmas();
setInterval(christmas, 1000);