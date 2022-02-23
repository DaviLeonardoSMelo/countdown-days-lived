const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');
const heartBeatEl = document.getElementById('heartBeat');
var result = document.getElementById('results');
var date = document.getElementById('dateBd').value;
var bpdEl = 104000;






function countdown() {

    var birtDayDate = new Date(document.getElementById('dateBd').value);
    const currentDate = new Date();


    const totalSeconds = ( currentDate - birtDayDate) / 1000;

    const dias = Math.floor(totalSeconds / 3600 / 24);
    const horas = Math.floor((totalSeconds / 3600) % 24) - 3;
    const minutos = Math.floor(totalSeconds / 60) % 60;
    const segundos = Math.floor(totalSeconds) % 60;
    const heartBeat = Math.floor((totalSeconds / 3600 / 24) * 104000);

    diasEl.innerHTML = dias;
    horasEl.innerHTML = horas;
    minutosEl.innerHTML = minutos;
    segundosEl.innerHTML = segundos;
    heartBeatEl.innerHTML = heartBeat;
   

}


countdown();


setInterval(countdown, 1000);