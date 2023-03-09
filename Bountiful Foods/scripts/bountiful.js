//nav//
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// copyright//
document.getElementById("year").innerHTML = new Date().getFullYear();

// last modified //
let text = document.lastModified;
document.getElementById("time").innerHTML = text;

document.getElementById("year").innerHTML = new Date().getFullYear();