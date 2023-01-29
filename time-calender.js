'use strict';

const clock = document.querySelector('h1#clock');

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours} : ${min} : ${sec}`;
}

getClock(); // 즉시실행
setInterval(getClock, 1000) // 1초후 계속해서 갱신



// Callender
const dateFormat = (date) => {
    return date.toLocaleDateString().replace(/\./g, "").split(" ");
}

const makeCalendar = (date) => {
    const [nowYear, nowMonth] = dateFormat(date);
    const prevDay = new Date(nowYear, nowMonth - 1, 1).getDay();
    const lastDay = dateFormat(new Date(nowYear, nowMonth, 0)).pop() * 1;
    let htmlDummy = '';

    for (let i = 0; i < prevDay; i++) {
        htmlDummy += `<div class="noColor"></div>`;
    }
    for (let i = 1; i <= lastDay; i++) {
        if (i === date.getDate()) {
            htmlDummy += `<div class='today'>${i}</div>`;
        } else {
            htmlDummy += `<div>${i}</div>`;
        }
    }

    const maxDay = prevDay + lastDay;
    const nextDay = (Math.ceil(maxDay / 7) * 7) - maxDay;

    for (let i = 0; i < nextDay; i++) {
        htmlDummy += `<div class="noColor"></div>`;
    }



    document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
    document.querySelector(`.dateTitle`).innerText = `${nowYear} / ${nowMonth}`;
}

const date = new Date();
makeCalendar(date);
date.setMonth(date.getMonth() - 1);

document.querySelector(`.prevDay`).onclick = () => {
    makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
}

document.querySelector(`.nextDay`).onclick = () => {
    makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
}
