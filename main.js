document.addEventListener('DOMContentLoaded', function() {
  
  var days = document.querySelector('.days span');
  var hour = document.querySelector('.hour');
  var min = document.querySelector('.min');
  var second = document.querySelector('.second');
  const music = ['ido', 'noinaycoanh', 'nguoiamphu'];

  var startDate = new Date("Aug 22, 2019").getTime();
  days.innerText = Math.floor((new Date - startDate)/(1000 * 60 * 60 * 24));
  countTime();

  function countTime() {
    let today = new Date();
    let ms = (today - startDate) % 86400000;
    hour.innerText = Math.floor(ms / 3600000);
    min.innerText = Math.floor(ms % 3600000 / 60000);
    second.innerText = Math.floor(ms % 3600000 % 60000 / 1000);
  }

  document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random()*music.length)]}.mp3`);
  setInterval(countTime, 1000);

}, false);
