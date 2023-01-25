// date //
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); 

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;

// last modified //
let text = document.lastModified;
document.getElementById("time").innerHTML = text;

document.getElementById("year").innerHTML = new Date().getFullYear();


// nav //
 
const navigation = document.querySelector('.navigation')
const menu= document.querySelector('#menu');


hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
