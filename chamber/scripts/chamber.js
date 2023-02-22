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


/* last modified */
let text = document.lastModified;
document.getElementById("time").innerHTML = text;

document.getElementById("year").innerHTML = new Date().getFullYear();



// nav //
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);



// copyright//
document.getElementById("year").innerHTML = new Date().getFullYear();


//announcement//
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    if (n == "Monday"){
        document.getElementById("meeting").style.display = "block"; /*visible*/

    }
	else if  (n == "Tuesday"){
        document.getElementById("meeting").style.display = "block"; /*visible*/

	}
	else {
        document.getElementById("meeting").style.display = "none"; /*hidden*/
    }

