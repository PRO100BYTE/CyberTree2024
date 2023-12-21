const lights = document.querySelectorAll("i");

lights.forEach((light) => {
  light.style.animationDelay = `${Math.random() * -7000}ms`;
});

"use strict";
const COUNT = 150;

const SIZES = [
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--s",
    "snowflake--m",
    "snowflake--m",
    "snowflake--m",
    "snowflake--m",
    "snowflake--m",
    "snowflake--m",
    "snowflake--m",
    "snowflake--m",
    "snowflake--m",
    "snowflake--m",
    "snowflake--m",
    "snowflake--m",
    "snowflake--m",
    "snowflake--l",
    "snowflake--l",
    "snowflake--l",
    "snowflake--xl",
    "snowflake--xl",
    "snowflake--xl",
    "snowflake--xl",
    "snowflake--xl",
    "snowflake--xl",
    "snowflake--xl"
];

const EMOJI = ["❄️"];

const snowContainer = document.querySelector(".snow-container");

const genSnowflake = (size, xStart, xEnd, yStart, emoji, delay) => {
    const s = document.createElement("div");
    s.innerText = emoji;
    s.classList.add("snowflake", size);
    s.style.setProperty("--delay", delay + "ms");
    s.style.setProperty("--x-start", xStart + "vw");
    s.style.setProperty("--x-end", xEnd + "vw");
    s.style.setProperty("--y-start", yStart + "vh");
    s.style.setProperty("--y-end", yStart + 200 + "vh");
    return s;
};

for (let i = 0; i < COUNT; i++) {
    const size = randFromList(SIZES);
    const xStart = getRandomArbitrary(0, 100);
    const delay = i * 200;
    const xEnd = getRandomArbitrary(xStart - 20, xStart + 20);
    const emoji = randFromList(EMOJI);
    const yStart = getRandomArbitrary(-100, 0);
    snowContainer.appendChild(genSnowflake(size, xStart, xEnd, yStart, emoji, delay));
}

function randFromList(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function gaussianRand() {
    var rand = 0;
    for (var i = 0; i < 6; i += 0.25) {
        rand += Math.random();
    }
    return rand / 6;
}

function randn_bm(min, max, skew = 1) {
    let u = 0, v = 0;
    while (u === 0)
        u = Math.random();
    while (v === 0)
        v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    num = num / 10.0 + 0.5;
    if (num > 1 || num < 0)
        num = randn_bm(min, max, skew);
    else {
        num = Math.pow(num, skew);
        num *= max - min;
        num += min;
    }
    return num;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}