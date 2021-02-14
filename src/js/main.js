import { $ } from './lib';
import { type } from './typewriter';
import { CODE_JIBBERISH } from './stuff';

const screen1 = $('#screen1');
const screen2 = $('#screen2');
const screen3 = $('#screen3');
const screen4 = $('#screen4');
const screen5 = $('#screen5');

const btnClickMe = $('#click-me');

btnClickMe.onclick = flow1;

function flow1() {
    btnClickMe.classList.add('clicked');
    setTimeout(() => {
        screen2.style.display = 'flex';
        screen2.classList.add('loaded');
        setTimeout(flow2, 4000);
    }, 1000);
}

function flow2() {
    screen2.classList.add('move-up');
    screen3.style.display = 'flex';
    setTimeout(() => screen3.classList.add('loaded'), 25);
    setTimeout(flow3, 5000);
}

function flow3() {
    screen4.style.display = 'flex';
    setTimeout(() => screen4.classList.add('loaded'), 25);

    let i = 0;
    for (let child of $('#screen4 .appear').children) {
        setTimeout(() => child.style.opacity = 1, i++ * 1500);
    }
    
    setTimeout(() => {
        type(CODE_JIBBERISH, '#type-code', 5, flow4);
    }, 7000);
}

function flow4() {
    screen5.style.display = 'flex';
    setTimeout(() => screen5.classList.add('loaded'), 25);
    setTimeout(flow5, 5000);
}

function flow5() {
    screen5.classList.add('move-up');
    screen6.style.display = 'flex';
    setTimeout(() => screen6.classList.add('loaded'), 25);
}