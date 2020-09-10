const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

const christmasDay = "25 dec 2020";

function countdown() {
    const christmasDayDate = new Date(christmasDay);
    const currentDate = new Date();

    const totalSeconds = (christmasDayDate - currentDate) / 1000;

    const dias = Math.floor(totalSeconds / 3600 / 24);
    const horas = Math.floor(totalSeconds / 3600) % 24;
    const minutos = Math.floor(totalSeconds / 60) % 60;
    const segundos = Math.floor(totalSeconds) % 60;

    diasEl.innerHTML = dias;
    horasEl.innerHTML = horas;
    minutosEl.innerHTML = minutos;
    segundosEl.innerHTML = segundos;
}


countdown();

setInterval(countdown, 1000);